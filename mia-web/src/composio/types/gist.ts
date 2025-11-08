// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GIST's GIST_CHECK_GIST_STAR tool input.
 */
type GIST_CHECK_GIST_STAR_INPUT = {
  /**
   * Gist Id
   * @description The unique identifier of the gist.
   */
  gist_id?: string;
};

/**
 * Type of GIST's GIST_CHECK_GIST_STAR tool output.
 */
type GIST_CHECK_GIST_STAR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Starred
       * @description True if the gist is starred by the authenticated user, False otherwise.
       */
      starred: boolean;
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
 * Type of GIST's GIST_DELETE_GIST_COMMENT tool input.
 */
type GIST_DELETE_GIST_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description The unique identifier of the comment to delete.
   */
  comment_id?: number;
  /**
   * Gist Id
   * @description The unique identifier of the gist.
   */
  gist_id?: string;
};

/**
 * Type of GIST's GIST_DELETE_GIST_COMMENT tool output.
 */
type GIST_DELETE_GIST_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status Code
       * @description HTTP status code returned by GitHub API.
       * @default null
       */
      status_code: number | null;
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
 * Type of GIST's GIST_GET_GIST tool input.
 */
type GIST_GET_GIST_INPUT = {
  /**
   * Gist Id
   * @description The unique identifier of the gist.
   */
  gist_id?: string;
};

/**
 * Type of GIST's GIST_GET_GIST tool output.
 */
type GIST_GET_GIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Comments
       * @description Number of comments on the gist.
       */
      comments: number;
      /**
       * Comments Url
       * @description API URL for this gist's comments.
       */
      comments_url: string;
      /**
       * Commits Url
       * @description API URL for this gist's commits.
       */
      commits_url: string;
      /**
       * Created At
       * Format: date-time
       * @description Creation time in ISO 8601 format.
       */
      created_at: string;
      /**
       * Description
       * @description Gist description.
       * @default null
       */
      description: string | null;
      /**
       * Files
       * @description Map of filenames to file metadata.
       */
      files: {
          [key: string]: {
              /**
               * Content
               * @description File contents (omitted when truncated).
               * @default null
               */
              content: string | null;
              /**
               * Encoding
               * @description Encoding of the content field.
               * @default null
               */
              encoding: string | null;
              /**
               * Filename
               * @description File name.
               */
              filename: string;
              /**
               * Language
               * @description Language name for the file.
               * @default null
               */
              language: string | null;
              /**
               * Raw Url
               * @description URL to the raw file contents.
               */
              raw_url: string;
              /**
               * Size
               * @description File size in bytes.
               */
              size: number;
              /**
               * Truncated
               * @description True if file contents are truncated in this response.
               */
              truncated: boolean;
              /**
               * Type
               * @description MIME type of the file.
               */
              type: string;
          };
      };
      /**
       * Forks
       * @description Array of gist fork objects (may be empty).
       */
      forks: {
          /**
           * Created At
           * Format: date-time
           * @description Fork creation time in ISO 8601 format.
           */
          created_at: string;
          /**
           * Id
           * @description Fork identifier.
           */
          id: string;
          /**
           * Updated At
           * Format: date-time
           * @description Fork update time in ISO 8601 format.
           */
          updated_at: string;
          /**
           * Url
           * @description API URL for this fork.
           */
          url: string;
          /**
           * User
           * @description Forking user information.
           */
          user: {
              /**
               * Avatar Url
               * @description Avatar URL.
               */
              avatar_url: string;
              /**
               * Events Url
               * @description Events API URL (templated).
               */
              events_url: string;
              /**
               * Followers Url
               * @description Followers API URL.
               */
              followers_url: string;
              /**
               * Following Url
               * @description Following API URL (templated).
               */
              following_url: string;
              /**
               * Gists Url
               * @description Gists API URL (templated).
               */
              gists_url: string;
              /**
               * Gravatar Id
               * @description Gravatar ID.
               */
              gravatar_id: string;
              /**
               * Html Url
               * @description Profile URL.
               */
              html_url: string;
              /**
               * Id
               * @description User ID.
               */
              id: number;
              /**
               * Login
               * @description Username.
               */
              login: string;
              /**
               * Node Id
               * @description GraphQL node ID for the user.
               */
              node_id: string;
              /**
               * Organizations Url
               * @description Organizations API URL.
               */
              organizations_url: string;
              /**
               * Received Events Url
               * @description Received events API URL.
               */
              received_events_url: string;
              /**
               * Repos Url
               * @description Repositories API URL.
               */
              repos_url: string;
              /**
               * Site Admin
               * @description Whether the user is a site admin.
               */
              site_admin: boolean;
              /**
               * Starred Url
               * @description Starred API URL (templated).
               */
              starred_url: string;
              /**
               * Subscriptions Url
               * @description Subscriptions API URL.
               */
              subscriptions_url: string;
              /**
               * Type
               * @description User type (e.g., 'User').
               */
              type: string;
              /**
               * Url
               * @description API URL for the user.
               */
              url: string;
          };
      }[];
      /**
       * Forks Url
       * @description API URL to list forks for this gist.
       */
      forks_url: string;
      /**
       * Git Pull Url
       * @description Git URL to pull the gist.
       */
      git_pull_url: string;
      /**
       * Git Push Url
       * @description Git URL to push to the gist.
       */
      git_push_url: string;
      /**
       * History
       * @description Gist revision history entries.
       */
      history: {
          /**
           * Change Status
           * @description Lines changed statistics.
           */
          change_status: {
              /**
               * Additions
               * @description Number of added lines.
               */
              additions: number;
              /**
               * Deletions
               * @description Number of deleted lines.
               */
              deletions: number;
              /**
               * Total
               * @description Total lines changed.
               */
              total: number;
          };
          /**
           * Committed At
           * Format: date-time
           * @description Commit time in ISO 8601 format.
           */
          committed_at: string;
          /**
           * Url
           * @description API URL for this revision.
           */
          url: string;
          /**
           * User
           * @description User who made the revision (may be null).
           * @default null
           */
          user: {
              [key: string]: unknown;
          } | null;
          /**
           * Version
           * @description Revision SHA/version.
           */
          version: string;
      }[];
      /**
       * Html Url
       * @description HTML URL of the gist.
       */
      html_url: string;
      /**
       * Id
       * @description Gist identifier.
       */
      id: string;
      /**
       * Node Id
       * @description GraphQL node ID for the gist.
       */
      node_id: string;
      /**
       * Owner
       * @description Owner (user) information.
       */
      owner: {
          /**
           * Avatar Url
           * @description Avatar URL.
           */
          avatar_url: string;
          /**
           * Events Url
           * @description Events API URL (templated).
           */
          events_url: string;
          /**
           * Followers Url
           * @description Followers API URL.
           */
          followers_url: string;
          /**
           * Following Url
           * @description Following API URL (templated).
           */
          following_url: string;
          /**
           * Gists Url
           * @description Gists API URL (templated).
           */
          gists_url: string;
          /**
           * Gravatar Id
           * @description Gravatar ID.
           */
          gravatar_id: string;
          /**
           * Html Url
           * @description Profile URL.
           */
          html_url: string;
          /**
           * Id
           * @description User ID.
           */
          id: number;
          /**
           * Login
           * @description Username.
           */
          login: string;
          /**
           * Node Id
           * @description GraphQL node ID for the user.
           */
          node_id: string;
          /**
           * Organizations Url
           * @description Organizations API URL.
           */
          organizations_url: string;
          /**
           * Received Events Url
           * @description Received events API URL.
           */
          received_events_url: string;
          /**
           * Repos Url
           * @description Repositories API URL.
           */
          repos_url: string;
          /**
           * Site Admin
           * @description Whether the user is a site admin.
           */
          site_admin: boolean;
          /**
           * Starred Url
           * @description Starred API URL (templated).
           */
          starred_url: string;
          /**
           * Subscriptions Url
           * @description Subscriptions API URL.
           */
          subscriptions_url: string;
          /**
           * Type
           * @description User type (e.g., 'User').
           */
          type: string;
          /**
           * Url
           * @description API URL for the user.
           */
          url: string;
      };
      /**
       * Public
       * @description Whether the gist is public.
       */
      public: boolean;
      /**
       * Truncated
       * @description True if the files list is truncated.
       */
      truncated: boolean;
      /**
       * Updated At
       * Format: date-time
       * @description Last update time in ISO 8601 format.
       */
      updated_at: string;
      /**
       * Url
       * @description API URL for this gist.
       */
      url: string;
      /**
       * User
       * @description Deprecated user field; typically null.
       * @default null
       */
      user: unknown;
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
 * Type of GIST's GIST_GET_GIST_COMMENT tool input.
 */
type GIST_GET_GIST_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description The ID of the comment
   */
  comment_id?: number;
  /**
   * Gist Id
   * @description The ID of the gist
   */
  gist_id?: string;
};

/**
 * Type of GIST's GIST_GET_GIST_COMMENT tool output.
 */
type GIST_GET_GIST_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Author Association
       * @description Author's relationship to the gist (e.g., COLLABORATOR, OWNER, etc.)
       */
      author_association: string;
      /**
       * Body
       * @description Text of the comment
       */
      body: string;
      /**
       * Created At
       * Format: date-time
       * @description Timestamp when the comment was created
       */
      created_at: string;
      /**
       * Id
       * @description Comment ID
       */
      id: number;
      /**
       * Node Id
       * @description GraphQL node identifier for the comment
       */
      node_id: string;
      /**
       * Updated At
       * Format: date-time
       * @description Timestamp when the comment was last updated
       */
      updated_at: string;
      /**
       * Url
       * @description API URL for this comment
       */
      url: string;
      /**
       * User
       * @description Author of the comment
       */
      user: {
          /**
           * Avatar Url
           * @description URL of the user's avatar image
           */
          avatar_url: string;
          /**
           * Events Url
           * @description API URL to get the user's events
           */
          events_url: string;
          /**
           * Followers Url
           * @description API URL to get the user's followers
           */
          followers_url: string;
          /**
           * Following Url
           * @description API URL to get the users the author is following
           */
          following_url: string;
          /**
           * Gists Url
           * @description API URL to get the user's gists
           */
          gists_url: string;
          /**
           * Gravatar Id
           * @description Gravatar ID (empty if not set)
           */
          gravatar_id: string;
          /**
           * Html Url
           * @description HTML URL for the user's profile
           */
          html_url: string;
          /**
           * Id
           * @description User ID
           */
          id: number;
          /**
           * Login
           * @description Username of the comment author
           */
          login: string;
          /**
           * Node Id
           * @description GraphQL node identifier for the user
           */
          node_id: string;
          /**
           * Organizations Url
           * @description API URL to get the user's organizations
           */
          organizations_url: string;
          /**
           * Received Events Url
           * @description API URL to get events received by the user
           */
          received_events_url: string;
          /**
           * Repos Url
           * @description API URL to get the user's repositories
           */
          repos_url: string;
          /**
           * Site Admin
           * @description Whether the user is a GitHub site administrator
           */
          site_admin: boolean;
          /**
           * Starred Url
           * @description API URL to get the user's starred repositories
           */
          starred_url: string;
          /**
           * Subscriptions Url
           * @description API URL to get the user's subscriptions
           */
          subscriptions_url: string;
          /**
           * Type
           * @description Type of the account (User or Organization)
           */
          type: string;
          /**
           * Url
           * @description API URL for the user
           */
          url: string;
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
 * Type of GIST's GIST_GET_GIST_REVISION tool input.
 */
type GIST_GET_GIST_REVISION_INPUT = {
  /**
   * Gist Id
   * @description The unique identifier of the gist.
   */
  gist_id?: string;
  /**
   * Sha
   * @description The commit SHA of the desired revision.
   */
  sha?: string;
};

/**
 * Type of GIST's GIST_GET_GIST_REVISION tool output.
 */
type GIST_GET_GIST_REVISION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Comments
       * @description Number of comments on the gist.
       */
      comments: number;
      /**
       * Comments Url
       * @description API URL for this gist's comments.
       */
      comments_url: string;
      /**
       * Commits Url
       * @description API URL for this gist's commits.
       */
      commits_url: string;
      /**
       * Created At
       * Format: date-time
       * @description Creation time in ISO 8601 format.
       */
      created_at: string;
      /**
       * Description
       * @description Gist description.
       * @default null
       */
      description: string | null;
      /**
       * Files
       * @description Map of filenames to file metadata.
       */
      files: {
          [key: string]: {
              /**
               * Content
               * @description File contents (omitted when truncated).
               * @default null
               */
              content: string | null;
              /**
               * Encoding
               * @description Encoding of the content field.
               * @default null
               */
              encoding: string | null;
              /**
               * Filename
               * @description File name.
               */
              filename: string;
              /**
               * Language
               * @description Language name for the file.
               * @default null
               */
              language: string | null;
              /**
               * Raw Url
               * @description URL to the raw file contents.
               */
              raw_url: string;
              /**
               * Size
               * @description File size in bytes.
               */
              size: number;
              /**
               * Truncated
               * @description True if file contents are truncated in this response.
               */
              truncated: boolean;
              /**
               * Type
               * @description MIME type of the file.
               */
              type: string;
          };
      };
      /**
       * Forks
       * @description Array of gist fork objects (may be empty).
       */
      forks: {
          /**
           * Created At
           * Format: date-time
           * @description Fork creation time in ISO 8601 format.
           */
          created_at: string;
          /**
           * Id
           * @description Fork identifier.
           */
          id: string;
          /**
           * Updated At
           * Format: date-time
           * @description Fork update time in ISO 8601 format.
           */
          updated_at: string;
          /**
           * Url
           * @description API URL for this fork.
           */
          url: string;
          /**
           * User
           * @description Forking user information.
           */
          user: {
              /**
               * Avatar Url
               * @description Avatar URL.
               */
              avatar_url: string;
              /**
               * Events Url
               * @description Events API URL (templated).
               */
              events_url: string;
              /**
               * Followers Url
               * @description Followers API URL.
               */
              followers_url: string;
              /**
               * Following Url
               * @description Following API URL (templated).
               */
              following_url: string;
              /**
               * Gists Url
               * @description Gists API URL (templated).
               */
              gists_url: string;
              /**
               * Gravatar Id
               * @description Gravatar ID.
               */
              gravatar_id: string;
              /**
               * Html Url
               * @description Profile URL.
               */
              html_url: string;
              /**
               * Id
               * @description User ID.
               */
              id: number;
              /**
               * Login
               * @description Username.
               */
              login: string;
              /**
               * Node Id
               * @description GraphQL node ID for the user.
               */
              node_id: string;
              /**
               * Organizations Url
               * @description Organizations API URL.
               */
              organizations_url: string;
              /**
               * Received Events Url
               * @description Received events API URL.
               */
              received_events_url: string;
              /**
               * Repos Url
               * @description Repositories API URL.
               */
              repos_url: string;
              /**
               * Site Admin
               * @description Whether the user is a site admin.
               */
              site_admin: boolean;
              /**
               * Starred Url
               * @description Starred API URL (templated).
               */
              starred_url: string;
              /**
               * Subscriptions Url
               * @description Subscriptions API URL.
               */
              subscriptions_url: string;
              /**
               * Type
               * @description User type (e.g., 'User').
               */
              type: string;
              /**
               * Url
               * @description API URL for the user.
               */
              url: string;
          };
      }[];
      /**
       * Forks Url
       * @description API URL to list forks for this gist.
       */
      forks_url: string;
      /**
       * Git Pull Url
       * @description Git URL to pull the gist.
       */
      git_pull_url: string;
      /**
       * Git Push Url
       * @description Git URL to push to the gist.
       */
      git_push_url: string;
      /**
       * History
       * @description Gist revision history entries.
       */
      history: {
          /**
           * Change Status
           * @description Lines changed statistics.
           */
          change_status: {
              /**
               * Additions
               * @description Number of added lines.
               */
              additions: number;
              /**
               * Deletions
               * @description Number of deleted lines.
               */
              deletions: number;
              /**
               * Total
               * @description Total lines changed.
               */
              total: number;
          };
          /**
           * Committed At
           * Format: date-time
           * @description Commit time in ISO 8601 format.
           */
          committed_at: string;
          /**
           * Url
           * @description API URL for this revision.
           */
          url: string;
          /**
           * User
           * @description User who made the revision (may be null).
           * @default null
           */
          user: {
              [key: string]: unknown;
          } | null;
          /**
           * Version
           * @description Revision SHA/version.
           */
          version: string;
      }[];
      /**
       * Html Url
       * @description HTML URL of the gist.
       */
      html_url: string;
      /**
       * Id
       * @description Gist identifier.
       */
      id: string;
      /**
       * Node Id
       * @description GraphQL node ID for the gist.
       */
      node_id: string;
      /**
       * Owner
       * @description Owner (user) information.
       */
      owner: {
          /**
           * Avatar Url
           * @description Avatar URL.
           */
          avatar_url: string;
          /**
           * Events Url
           * @description Events API URL (templated).
           */
          events_url: string;
          /**
           * Followers Url
           * @description Followers API URL.
           */
          followers_url: string;
          /**
           * Following Url
           * @description Following API URL (templated).
           */
          following_url: string;
          /**
           * Gists Url
           * @description Gists API URL (templated).
           */
          gists_url: string;
          /**
           * Gravatar Id
           * @description Gravatar ID.
           */
          gravatar_id: string;
          /**
           * Html Url
           * @description Profile URL.
           */
          html_url: string;
          /**
           * Id
           * @description User ID.
           */
          id: number;
          /**
           * Login
           * @description Username.
           */
          login: string;
          /**
           * Node Id
           * @description GraphQL node ID for the user.
           */
          node_id: string;
          /**
           * Organizations Url
           * @description Organizations API URL.
           */
          organizations_url: string;
          /**
           * Received Events Url
           * @description Received events API URL.
           */
          received_events_url: string;
          /**
           * Repos Url
           * @description Repositories API URL.
           */
          repos_url: string;
          /**
           * Site Admin
           * @description Whether the user is a site admin.
           */
          site_admin: boolean;
          /**
           * Starred Url
           * @description Starred API URL (templated).
           */
          starred_url: string;
          /**
           * Subscriptions Url
           * @description Subscriptions API URL.
           */
          subscriptions_url: string;
          /**
           * Type
           * @description User type (e.g., 'User').
           */
          type: string;
          /**
           * Url
           * @description API URL for the user.
           */
          url: string;
      };
      /**
       * Public
       * @description Whether the gist is public.
       */
      public: boolean;
      /**
       * Truncated
       * @description True if the files list is truncated.
       */
      truncated: boolean;
      /**
       * Updated At
       * Format: date-time
       * @description Last update time in ISO 8601 format.
       */
      updated_at: string;
      /**
       * Url
       * @description API URL for this gist.
       */
      url: string;
      /**
       * User
       * @description Deprecated user field; typically null.
       * @default null
       */
      user: unknown;
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
 * Type of GIST's GIST_LIST_GISTS tool input.
 */
type GIST_LIST_GISTS_INPUT = {
  /**
   * Accept
   * @description Media type for the response. Example: 'application/vnd.github+json'
   * @default null
   */
  accept: string | null;
  /**
   * Page
   * @description Page number of results to fetch. Default: 1 if not provided.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page (1-100). Default: 30 if not provided.
   * @default null
   */
  per_page: number | null;
  /**
   * Since
   * @description Only show gists last updated after this ISO 8601 timestamp (YYYY-MM-DDTHH:MM:SSZ)
   * @default null
   */
  since: string | null;
};

/**
 * Type of GIST's GIST_LIST_GISTS tool output.
 */
type GIST_LIST_GISTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Comments */
      comments: number;
      /** Comments Url */
      comments_url: string;
      /** Commits Url */
      commits_url: string;
      /** Created At */
      created_at: string;
      /**
       * Description
       * @description Gist description
       * @default null
       */
      description: string | null;
      /** Files */
      files: {
          [key: string]: {
              /**
               * Filename
               * @description Name of the file in the gist
               */
              filename: string;
              /**
               * Language
               * @description Detected language of the file
               * @default null
               */
              language: string | null;
              /**
               * Raw Url
               * @description URL to access raw file contents
               */
              raw_url: string;
              /**
               * Size
               * @description Size of the file in bytes
               */
              size: number;
              /**
               * Type
               * @description MIME type of the file
               */
              type: string;
          };
      };
      /** Forks Url */
      forks_url: string;
      /** Git Pull Url */
      git_pull_url: string;
      /** Git Push Url */
      git_push_url: string;
      /** Html Url */
      html_url: string;
      /** Id */
      id: string;
      /** Node Id */
      node_id: string;
      /**
       * GistOwner
       * @description Owner of the gist
       * @default null
       */
      owner: {
          /** Avatar Url */
          avatar_url: string;
          /** Events Url */
          events_url: string;
          /** Followers Url */
          followers_url: string;
          /** Following Url */
          following_url: string;
          /** Gists Url */
          gists_url: string;
          /** Gravatar Id */
          gravatar_id: string;
          /** Html Url */
          html_url: string;
          /** Id */
          id: number;
          /** Login */
          login: string;
          /** Node Id */
          node_id: string;
          /** Organizations Url */
          organizations_url: string;
          /** Received Events Url */
          received_events_url: string;
          /** Repos Url */
          repos_url: string;
          /** Site Admin */
          site_admin: boolean;
          /** Starred Url */
          starred_url: string;
          /** Subscriptions Url */
          subscriptions_url: string;
          /** Type */
          type: string;
          /** Url */
          url: string;
      } | null;
      /** Public */
      public: boolean;
      /** Truncated */
      truncated: boolean;
      /** Updated At */
      updated_at: string;
      /** Url */
      url: string;
      /**
       * User
       * @description Deprecated; often null
       * @default null
       */
      user: unknown;
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
 * Type of GIST's GIST_LIST_GIST_COMMENTS tool input.
 */
type GIST_LIST_GIST_COMMENTS_INPUT = {
  /**
   * Gist Id
   * @description The ID of the gist to list comments for
   */
  gist_id?: string;
  /**
   * Page
   * @description Page number to fetch. Default: 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Results per page (max 100). Default: 30.
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of GIST's GIST_LIST_GIST_COMMENTS tool output.
 */
type GIST_LIST_GIST_COMMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Comments
       * @description List of comments returned by the API
       */
      comments: {
          /**
           * Author Association
           * @description Author’s relationship to the gist (e.g., COLLABORATOR, OWNER, etc.)
           */
          author_association: string;
          /**
           * Body
           * @description Text of the comment
           */
          body: string;
          /**
           * Created At
           * Format: date-time
           * @description Timestamp when the comment was created
           */
          created_at: string;
          /**
           * Id
           * @description Comment ID
           */
          id: number;
          /**
           * Node Id
           * @description GraphQL node identifier for the comment
           */
          node_id: string;
          /**
           * Updated At
           * Format: date-time
           * @description Timestamp when the comment was last updated
           */
          updated_at: string;
          /**
           * Url
           * @description API URL for this comment
           */
          url: string;
          /**
           * User
           * @description Author of the comment
           */
          user: {
              /**
               * Avatar Url
               * @description URL of the user's avatar image
               */
              avatar_url: string;
              /**
               * Events Url
               * @description API URL to get the user's events
               */
              events_url: string;
              /**
               * Followers Url
               * @description API URL to get the user's followers
               */
              followers_url: string;
              /**
               * Following Url
               * @description API URL to get the users the author is following
               */
              following_url: string;
              /**
               * Gists Url
               * @description API URL to get the user's gists
               */
              gists_url: string;
              /**
               * Gravatar Id
               * @description Gravatar ID (empty if not set)
               */
              gravatar_id: string;
              /**
               * Html Url
               * @description HTML URL for the user's profile
               */
              html_url: string;
              /**
               * Id
               * @description User ID
               */
              id: number;
              /**
               * Login
               * @description Username of the comment author
               */
              login: string;
              /**
               * Node Id
               * @description GraphQL node identifier for the user
               */
              node_id: string;
              /**
               * Organizations Url
               * @description API URL to get the user's organizations
               */
              organizations_url: string;
              /**
               * Received Events Url
               * @description API URL to get events received by the user
               */
              received_events_url: string;
              /**
               * Repos Url
               * @description API URL to get the user's repositories
               */
              repos_url: string;
              /**
               * Site Admin
               * @description Whether the user is a GitHub site administrator
               */
              site_admin: boolean;
              /**
               * Starred Url
               * @description API URL to get the user's starred repositories
               */
              starred_url: string;
              /**
               * Subscriptions Url
               * @description API URL to get the user's subscriptions
               */
              subscriptions_url: string;
              /**
               * Type
               * @description Type of the account (User or Organization)
               */
              type: string;
              /**
               * Url
               * @description API URL for the user
               */
              url: string;
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
 * Type of GIST's GIST_LIST_GIST_COMMITS tool input.
 */
type GIST_LIST_GIST_COMMITS_INPUT = {
  /**
   * Accept
   * @description Response media type. Recommended: application/vnd.github+json
   * @default null
   */
  accept: string | null;
  /**
   * Gist Id
   * @description The unique identifier of the gist to list commits for.
   */
  gist_id?: string;
  /**
   * Page
   * @description Page number of the results to fetch
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of results per page (max 100)
   * @default 30
   */
  per_page: number;
};

/**
 * Type of GIST's GIST_LIST_GIST_COMMITS tool output.
 */
type GIST_LIST_GIST_COMMITS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Commits
       * @description List of commits (revisions) for the specified gist
       */
      commits: {
          /** Change Status */
          change_status: {
              /** Additions */
              additions: number;
              /** Deletions */
              deletions: number;
              /** Total */
              total: number;
          };
          /** Committed At */
          committed_at: string;
          /** Url */
          url: string;
          /** User */
          user: {
              /** Avatar Url */
              avatar_url: string;
              /** Events Url */
              events_url: string;
              /** Followers Url */
              followers_url: string;
              /** Following Url */
              following_url: string;
              /** Gists Url */
              gists_url: string;
              /** Gravatar Id */
              gravatar_id: string;
              /** Html Url */
              html_url: string;
              /** Id */
              id: number;
              /** Login */
              login: string;
              /** Node Id */
              node_id: string;
              /** Organizations Url */
              organizations_url: string;
              /** Received Events Url */
              received_events_url: string;
              /** Repos Url */
              repos_url: string;
              /** Site Admin */
              site_admin: boolean;
              /** Starred Url */
              starred_url: string;
              /** Subscriptions Url */
              subscriptions_url: string;
              /** Type */
              type: string;
              /** Url */
              url: string;
          };
          /** Version */
          version: string;
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
 * Type of GIST's GIST_LIST_GIST_FORKS tool input.
 */
type GIST_LIST_GIST_FORKS_INPUT = {
  /**
   * Gist Id
   * @description The ID of the gist to list forks for
   */
  gist_id?: string;
  /**
   * Page
   * @description Page number to fetch. Default: 1
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Results per page (max 100). Default: 30
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of GIST's GIST_LIST_GIST_FORKS tool output.
 */
type GIST_LIST_GIST_FORKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Forks
       * @description List of forks returned by the API
       */
      forks: {
          /**
           * Created At
           * Format: date-time
           * @description Fork creation time in ISO 8601 format
           */
          created_at: string;
          /**
           * Id
           * @description Fork identifier
           */
          id: string;
          /**
           * Updated At
           * Format: date-time
           * @description Fork update time in ISO 8601 format
           */
          updated_at: string;
          /**
           * Url
           * @description API URL for this fork
           */
          url: string;
          /**
           * User
           * @description Forking user information
           */
          user: {
              /**
               * Avatar Url
               * @description Avatar URL for the user
               */
              avatar_url: string;
              /**
               * Events Url
               * @description API URL for the user's events
               */
              events_url: string;
              /**
               * Followers Url
               * @description API URL for the user's followers
               */
              followers_url: string;
              /**
               * Following Url
               * @description API URL for the users the author is following
               */
              following_url: string;
              /**
               * Gists Url
               * @description API URL for the user's gists
               */
              gists_url: string;
              /**
               * Gravatar Id
               * @description Gravatar ID (empty if not set)
               */
              gravatar_id: string;
              /**
               * Html Url
               * @description HTML URL for the user's profile
               */
              html_url: string;
              /**
               * Id
               * @description User ID of the forking user
               */
              id: number;
              /**
               * Login
               * @description Username of the forking user
               */
              login: string;
              /**
               * Node Id
               * @description GraphQL node ID for the user
               */
              node_id: string;
              /**
               * Organizations Url
               * @description API URL for the user's organizations
               */
              organizations_url: string;
              /**
               * Received Events Url
               * @description API URL for events received by the user
               */
              received_events_url: string;
              /**
               * Repos Url
               * @description API URL for the user's repositories
               */
              repos_url: string;
              /**
               * Site Admin
               * @description Whether the user is a GitHub site administrator
               */
              site_admin: boolean;
              /**
               * Starred Url
               * @description API URL for the user's starred repositories
               */
              starred_url: string;
              /**
               * Subscriptions Url
               * @description API URL for the user's subscriptions
               */
              subscriptions_url: string;
              /**
               * Type
               * @description Type of the account (User or Organization)
               */
              type: string;
              /**
               * Url
               * @description API URL for the user
               */
              url: string;
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
 * Type of GIST's GIST_LIST_STARRED_GISTS tool input.
 */
type GIST_LIST_STARRED_GISTS_INPUT = {
  /**
   * Accept
   * @description Response media type. Recommended: application/vnd.github+json
   * @default null
   */
  accept: string | null;
  /**
   * Page
   * @description Page number of the results to fetch
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of results per page (max 100)
   * @default 30
   */
  per_page: number;
  /**
   * Since
   * @description Only list gists updated after this ISO 8601 timestamp (YYYY-MM-DDTHH:MM:SSZ)
   * @default null
   */
  since: string | null;
};

/**
 * Type of GIST's GIST_LIST_STARRED_GISTS tool output.
 */
type GIST_LIST_STARRED_GISTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Gists
       * @description List of gists starred by the authenticated user
       */
      gists: {
          /** Comments */
          comments: number;
          /** Comments Url */
          comments_url: string;
          /** Commits Url */
          commits_url: string;
          /** Created At */
          created_at: string;
          /** Description */
          description: string | null;
          /** Files */
          files: {
              [key: string]: {
                  /**
                   * Filename
                   * @description Name of the file
                   */
                  filename: string;
                  /**
                   * Language
                   * @description Programming language of the file
                   * @default null
                   */
                  language: string | null;
                  /**
                   * Raw Url
                   * @description Raw content URL of the file
                   */
                  raw_url: string;
                  /**
                   * Size
                   * @description Size of the file in bytes
                   */
                  size: number;
                  /**
                   * Type
                   * @description Media type of the file content
                   */
                  type: string;
              };
          };
          /** Forks Url */
          forks_url: string;
          /** Git Pull Url */
          git_pull_url: string;
          /** Git Push Url */
          git_push_url: string;
          /** Html Url */
          html_url: string;
          /** Id */
          id: string;
          /** Node Id */
          node_id: string;
          /** Owner */
          owner: {
              /** Avatar Url */
              avatar_url: string;
              /** Events Url */
              events_url: string;
              /** Followers Url */
              followers_url: string;
              /** Following Url */
              following_url: string;
              /** Gists Url */
              gists_url: string;
              /** Gravatar Id */
              gravatar_id: string;
              /** Html Url */
              html_url: string;
              /** Id */
              id: number;
              /** Login */
              login: string;
              /** Node Id */
              node_id: string;
              /** Organizations Url */
              organizations_url: string;
              /** Received Events Url */
              received_events_url: string;
              /** Repos Url */
              repos_url: string;
              /** Site Admin */
              site_admin: boolean;
              /** Starred Url */
              starred_url: string;
              /** Subscriptions Url */
              subscriptions_url: string;
              /** Type */
              type: string;
              /** Url */
              url: string;
          };
          /** Public */
          public: boolean;
          /** Truncated */
          truncated: boolean;
          /** Updated At */
          updated_at: string;
          /** Url */
          url: string;
          /**
           * User
           * @description Deprecated, always null in current API versions
           * @default null
           */
          user: {
              [key: string]: unknown;
          } | null;
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
 * Type of GIST's GIST_LIST_USER_GISTS tool input.
 */
type GIST_LIST_USER_GISTS_INPUT = {
  /**
   * Page
   * @description Page number of results to fetch.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page (1-100).
   * @default null
   */
  per_page: number | null;
  /**
   * Since
   * @description Only show gists updated after this ISO 8601 timestamp (YYYY-MM-DDTHH:MM:SSZ)
   * @default null
   */
  since: string | null;
  /**
   * Username
   * @description The GitHub username whose public gists will be listed
   */
  username?: string;
};

/**
 * Type of GIST's GIST_LIST_USER_GISTS tool output.
 */
type GIST_LIST_USER_GISTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Comments */
      comments: number;
      /** Comments Url */
      comments_url: string;
      /** Commits Url */
      commits_url: string;
      /** Created At */
      created_at: string;
      /**
       * Description
       * @description Gist description
       * @default null
       */
      description: string | null;
      /** Files */
      files: {
          [key: string]: {
              /**
               * Filename
               * @description Name of the file in the gist
               */
              filename: string;
              /**
               * Language
               * @description Detected language of the file
               * @default null
               */
              language: string | null;
              /**
               * Raw Url
               * @description URL to access raw file contents
               */
              raw_url: string;
              /**
               * Size
               * @description Size of the file in bytes
               */
              size: number;
              /**
               * Type
               * @description MIME type of the file
               */
              type: string;
          };
      };
      /** Forks Url */
      forks_url: string;
      /** Git Pull Url */
      git_pull_url: string;
      /** Git Push Url */
      git_push_url: string;
      /** Html Url */
      html_url: string;
      /** Id */
      id: string;
      /** Node Id */
      node_id: string;
      /**
       * GistOwner
       * @description Owner of the gist
       * @default null
       */
      owner: {
          /** Avatar Url */
          avatar_url: string;
          /** Events Url */
          events_url: string;
          /** Followers Url */
          followers_url: string;
          /** Following Url */
          following_url: string;
          /** Gists Url */
          gists_url: string;
          /** Gravatar Id */
          gravatar_id: string;
          /** Html Url */
          html_url: string;
          /** Id */
          id: number;
          /** Login */
          login: string;
          /** Node Id */
          node_id: string;
          /** Organizations Url */
          organizations_url: string;
          /** Received Events Url */
          received_events_url: string;
          /** Repos Url */
          repos_url: string;
          /** Site Admin */
          site_admin: boolean;
          /** Starred Url */
          starred_url: string;
          /** Subscriptions Url */
          subscriptions_url: string;
          /** Type */
          type: string;
          /** Url */
          url: string;
      } | null;
      /** Public */
      public: boolean;
      /** Truncated */
      truncated: boolean;
      /** Updated At */
      updated_at: string;
      /** Url */
      url: string;
      /**
       * User
       * @description Deprecated; often null
       * @default null
       */
      user: unknown;
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
 * Type of GIST's GIST_UNSTAR_GIST tool input.
 */
type GIST_UNSTAR_GIST_INPUT = {
  /**
   * Gist Id
   * @description The unique identifier of the gist to unstar.
   */
  gist_id?: string;
};

/**
 * Type of GIST's GIST_UNSTAR_GIST tool output.
 */
type GIST_UNSTAR_GIST_OUTPUT = {
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
 * Type of GIST's GIST_UPDATE_GIST_COMMENT tool input.
 */
type GIST_UPDATE_GIST_COMMENT_INPUT = {
  /**
   * Body
   * @description The updated text for the comment.
   */
  body?: string;
  /**
   * Comment Id
   * @description The ID of the comment to update.
   */
  comment_id?: number;
  /**
   * Gist Id
   * @description The ID of the Gist to which the comment belongs.
   */
  gist_id?: string;
};

/**
 * Type of GIST's GIST_UPDATE_GIST_COMMENT tool output.
 */
type GIST_UPDATE_GIST_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Author Association
       * @description How the author is associated with the repository (e.g., 'OWNER', 'CONTRIBUTOR').
       */
      author_association: string;
      /**
       * Body
       * @description The content of the updated comment.
       */
      body: string;
      /**
       * Created At
       * @description Timestamp when the comment was created.
       */
      created_at: string;
      /**
       * Id
       * @description The unique ID of the updated comment.
       */
      id: number;
      /**
       * Node Id
       * @description The node ID of the updated comment.
       */
      node_id: string;
      /**
       * Updated At
       * @description Timestamp when the comment was updated.
       */
      updated_at: string;
      /**
       * Url
       * @description API URL of the updated comment.
       */
      url: string;
      /**
       * User
       * @description The author of the comment.
       */
      user: {
          /**
           * Avatar Url
           * @description URL of the author's avatar.
           */
          avatar_url: string;
          /**
           * Events Url
           * @description API URL to get list of events.
           */
          events_url: string;
          /**
           * Followers Url
           * @description API URL to get list of followers.
           */
          followers_url: string;
          /**
           * Following Url
           * @description API URL to get list of following users.
           */
          following_url: string;
          /**
           * Gists Url
           * @description API URL to get list of the user's gists.
           */
          gists_url: string;
          /**
           * Gravatar Id
           * @description Gravatar ID of the author (if any).
           */
          gravatar_id: string;
          /**
           * Html Url
           * @description HTML URL of the user's profile.
           */
          html_url: string;
          /**
           * Id
           * @description The unique ID of the comment author.
           */
          id: number;
          /**
           * Login
           * @description The username of the comment author.
           */
          login: string;
          /**
           * Node Id
           * @description The node ID of the comment author.
           */
          node_id: string;
          /**
           * Organizations Url
           * @description API URL to get list of organizations.
           */
          organizations_url: string;
          /**
           * Received Events Url
           * @description API URL to get list of received events.
           */
          received_events_url: string;
          /**
           * Repos Url
           * @description API URL to get list of repos.
           */
          repos_url: string;
          /**
           * Site Admin
           * @description Whether the user is a site administrator.
           */
          site_admin: boolean;
          /**
           * Starred Url
           * @description API URL to get list of starred repos by the user.
           */
          starred_url: string;
          /**
           * Subscriptions Url
           * @description API URL to get list of subscriptions.
           */
          subscriptions_url: string;
          /**
           * Type
           * @description The type of user (e.g., 'User').
           */
          type: string;
          /**
           * Url
           * @description API URL of the user.
           */
          url: string;
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
 * Type map of all available tool input types for toolkit "GIST".
 */
export type GIST_TOOL_INPUTS = {
  CHECK_GIST_STAR: GIST_CHECK_GIST_STAR_INPUT
  DELETE_GIST_COMMENT: GIST_DELETE_GIST_COMMENT_INPUT
  GET_GIST: GIST_GET_GIST_INPUT
  GET_GIST_COMMENT: GIST_GET_GIST_COMMENT_INPUT
  GET_GIST_REVISION: GIST_GET_GIST_REVISION_INPUT
  LIST_GISTS: GIST_LIST_GISTS_INPUT
  LIST_GIST_COMMENTS: GIST_LIST_GIST_COMMENTS_INPUT
  LIST_GIST_COMMITS: GIST_LIST_GIST_COMMITS_INPUT
  LIST_GIST_FORKS: GIST_LIST_GIST_FORKS_INPUT
  LIST_STARRED_GISTS: GIST_LIST_STARRED_GISTS_INPUT
  LIST_USER_GISTS: GIST_LIST_USER_GISTS_INPUT
  UNSTAR_GIST: GIST_UNSTAR_GIST_INPUT
  UPDATE_GIST_COMMENT: GIST_UPDATE_GIST_COMMENT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GIST".
 */
export type GIST_TOOL_OUTPUTS = {
  CHECK_GIST_STAR: GIST_CHECK_GIST_STAR_OUTPUT
  DELETE_GIST_COMMENT: GIST_DELETE_GIST_COMMENT_OUTPUT
  GET_GIST: GIST_GET_GIST_OUTPUT
  GET_GIST_COMMENT: GIST_GET_GIST_COMMENT_OUTPUT
  GET_GIST_REVISION: GIST_GET_GIST_REVISION_OUTPUT
  LIST_GISTS: GIST_LIST_GISTS_OUTPUT
  LIST_GIST_COMMENTS: GIST_LIST_GIST_COMMENTS_OUTPUT
  LIST_GIST_COMMITS: GIST_LIST_GIST_COMMITS_OUTPUT
  LIST_GIST_FORKS: GIST_LIST_GIST_FORKS_OUTPUT
  LIST_STARRED_GISTS: GIST_LIST_STARRED_GISTS_OUTPUT
  LIST_USER_GISTS: GIST_LIST_USER_GISTS_OUTPUT
  UNSTAR_GIST: GIST_UNSTAR_GIST_OUTPUT
  UPDATE_GIST_COMMENT: GIST_UPDATE_GIST_COMMENT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GIST toolkit.
 */
export const GIST = {
  slug: "gist",
  tools: {
    /**
     * Tool to check if a gist is starred. Use when you need to determine if the authenticated user has starred a specific gist.
     */
    CHECK_GIST_STAR: "GIST_CHECK_GIST_STAR",
    /**
     * Tool to delete a comment on a gist. Use when you have both the gist_id and comment_id and want to remove that comment. Example prompt: "Delete comment 42 from gist 'aa5a315d61ae9438b18d'".
     */
    DELETE_GIST_COMMENT: "GIST_DELETE_GIST_COMMENT",
    /**
     * Tool to retrieve a specific gist by its ID. Use when you have a gist_id and need complete gist details.
     */
    GET_GIST: "GIST_GET_GIST",
    /**
     * Tool to get a specific comment on a gist. Use when you need to retrieve details of a particular comment given gist_id and comment_id.
     */
    GET_GIST_COMMENT: "GIST_GET_GIST_COMMENT",
    /**
     * Tool to retrieve a specific gist revision. Use when you need details of a past state for an existing gist by commit SHA.
     */
    GET_GIST_REVISION: "GIST_GET_GIST_REVISION",
    /**
     * Tool to list the authenticated user's gists or all public gists if called anonymously. Use after setting a valid GitHub token in headers.
     */
    LIST_GISTS: "GIST_LIST_GISTS",
    /**
     * Tool to list comments on a gist. Use after confirming the gist_id to retrieve comments for a specific gist. Example: 'List comments for gist abc123'.
     */
    LIST_GIST_COMMENTS: "GIST_LIST_GIST_COMMENTS",
    /**
     * Tool to list the commit history of a gist. Use after you have the gist ID to review its revisions.
     */
    LIST_GIST_COMMITS: "GIST_LIST_GIST_COMMITS",
    /**
     * Tool to list forks of a gist. Use after obtaining a gist_id to retrieve all forks for the gist.
     */
    LIST_GIST_FORKS: "GIST_LIST_GIST_FORKS",
    /**
     * Tool to list the authenticated user's starred gists. Use when you need to retrieve all gists the user has starred.
     */
    LIST_STARRED_GISTS: "GIST_LIST_STARRED_GISTS",
    /**
     * Tool to list public gists for a specified GitHub user. Use when you have a username and need their gists.
     */
    LIST_USER_GISTS: "GIST_LIST_USER_GISTS",
    /**
     * Tool to unstar a gist. Use after confirming the gist has been previously starred.
     */
    UNSTAR_GIST: "GIST_UNSTAR_GIST",
    /**
     * Tool to update a Gist comment. Use when you need to modify an existing comment after confirming the gist_id and comment_id.
     */
    UPDATE_GIST_COMMENT: "GIST_UPDATE_GIST_COMMENT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GIST".
 */
export type GIST_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GIST".
 */
export type GIST_TRIGGER_EVENTS = {}
