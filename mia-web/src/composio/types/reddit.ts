// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of REDDIT's REDDIT_CREATE_REDDIT_POST tool input.
 */
type REDDIT_CREATE_REDDIT_POST_INPUT = {
  /**
   * Flair Id
   * @description The ID of the flair to apply to the post. Use the 'REDDIT_GET_USER_FLAIR' action to find available flair IDs for the specified subreddit.
   */
  flair_id?: string;
  /**
   * Kind
   * @description The type of the post. Use 'self' for a text-based post or 'link' for a post that links to an external URL.
   * @enum {string}
   */
  kind?: "link" | "self";
  /**
   * Subreddit
   * @description The name of the subreddit (without the 'r/' prefix) where the post will be submitted.
   */
  subreddit?: string;
  /**
   * Text
   * @description The markdown-formatted text content for a 'self' post. Required if `kind` is 'self'.
   */
  text?: string;
  /**
   * Title
   * @description The title of the post. Must be 300 characters or less.
   */
  title?: string;
  /**
   * Url
   * @description The URL for a 'link' post. Required if `kind` is 'link'.
   */
  url?: string;
};

/**
 * Type of REDDIT's REDDIT_CREATE_REDDIT_POST tool output.
 */
type REDDIT_CREATE_REDDIT_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The unique identifier (fullname) of the newly created post (e.g., 't3_1abcdef').
       */
      id: string;
      /**
       * Url
       * @description The permalink URL of the newly created post.
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
 * Type of REDDIT's REDDIT_DELETE_REDDIT_COMMENT tool input.
 */
type REDDIT_DELETE_REDDIT_COMMENT_INPUT = {
  /**
   * Id
   * @description The full 'thing ID' (fullname, e.g., 't1_c0s4w1c') of the comment to delete; typically starts with 't1_'.
   */
  id?: string;
};

/**
 * Type of REDDIT's REDDIT_DELETE_REDDIT_COMMENT tool output.
 */
type REDDIT_DELETE_REDDIT_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Confirms that the comment was successfully deleted. This will always be `True` on success, as failures result in an error being raised by the action.
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
 * Type of REDDIT's REDDIT_DELETE_REDDIT_POST tool input.
 */
type REDDIT_DELETE_REDDIT_POST_INPUT = {
  /**
   * Id
   * @description The full name (fullname) of the Reddit post to be deleted. This ID must start with 't3_' followed by the post's unique base36 identifier.
   */
  id?: string;
};

/**
 * Type of REDDIT's REDDIT_DELETE_REDDIT_POST tool output.
 */
type REDDIT_DELETE_REDDIT_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the deletion request was successfully processed by Reddit. If the API signals an error (e.g., post not found, insufficient permissions), an exception will be raised by the action.
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
 * Type of REDDIT's REDDIT_EDIT_REDDIT_COMMENT_OR_POST tool input.
 */
type REDDIT_EDIT_REDDIT_COMMENT_OR_POST_INPUT = {
  /**
   * Text
   * @description The new raw markdown text for the body of the comment or self-post.
   */
  text?: string;
  /**
   * Thing Id
   * @description The full name (fullname) of the comment or self-post to edit. This is a combination of a prefix (e.g., 't1_' for comment, 't3_' for post) and the item's ID.
   */
  thing_id?: string;
};

/**
 * Type of REDDIT's REDDIT_EDIT_REDDIT_COMMENT_OR_POST tool output.
 */
type REDDIT_EDIT_REDDIT_COMMENT_OR_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Edit Response
       * @description A dictionary containing the response from the Reddit API's 'editusertext' endpoint. If successful, this typically includes a 'data' key with details of the edited item, such as the updated text and author.
       */
      edit_response: {
          [key: string]: unknown;
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
 * Type of REDDIT's REDDIT_GET_USER_FLAIR tool input.
 */
type REDDIT_GET_USER_FLAIR_INPUT = {
  /**
   * Subreddit
   * @description Name of the subreddit (e.g., 'pics', 'gaming') for which to retrieve available link flairs.
   */
  subreddit?: string;
};

/**
 * Type of REDDIT's REDDIT_GET_USER_FLAIR tool output.
 */
type REDDIT_GET_USER_FLAIR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Flair List
       * @description A list of available link flairs for the specified subreddit; each item is an object detailing a flair (e.g., text, ID).
       */
      flair_list: unknown[];
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
 * Type of REDDIT's REDDIT_POST_REDDIT_COMMENT tool input.
 */
type REDDIT_POST_REDDIT_COMMENT_INPUT = {
  /**
   * Text
   * @description The raw Markdown text of the comment to be submitted.
   */
  text?: string;
  /**
   * Thing Id
   * @description The ID of the parent post (link) or comment, prefixed with 't3_' for a post (e.g., 't3_10omtdx') or 't1_' for a comment (e.g., 't1_h2g9w8l').
   */
  thing_id?: string;
};

/**
 * Type of REDDIT's REDDIT_POST_REDDIT_COMMENT tool output.
 */
type REDDIT_POST_REDDIT_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The full ID of the newly created comment, prefixed with 't1_' (e.g., 't1_h2g9w8m').
       */
      id: string;
      /**
       * Parent Id
       * @description The full ID of the parent post or comment to which this new comment was added. Prefixed with 't3_' for a post or 't1_' for a comment.
       */
      parent_id: string;
      /**
       * Text
       * @description The actual text content of the created comment.
       */
      text: string;
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
 * Type of REDDIT's REDDIT_RETRIEVE_POST_COMMENTS tool input.
 */
type REDDIT_RETRIEVE_POST_COMMENTS_INPUT = {
  /**
   * Article
   * @description Base-36 ID of the Reddit post (e.g., 'q5u7q5'), typically found in the post's URL and not including the 't3_' prefix.
   */
  article?: string;
};

/**
 * Type of REDDIT's REDDIT_RETRIEVE_POST_COMMENTS tool output.
 */
type REDDIT_RETRIEVE_POST_COMMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Comments
       * @description A list of top-level `CommentData` objects for the post.
       */
      comments: {
          /**
           * Author
           * @description Username of the comment's author; can be '[deleted]' if the account is deleted or author obscured.
           */
          author: string;
          /**
           * Body
           * @description HTML content of the comment; may be empty if deleted or unavailable.
           */
          body: string;
          /**
           * Id
           * @description Base-36 ID of the comment (e.g., 'h3g4g5'), not including the 't1_' prefix.
           */
          id: string;
          /**
           * Parent Id
           * @description Fullname of the parent item (comment or post) this comment replies to; typically starts with 't1_' (parent comment) or 't3_' (parent post). May be empty if unavailable.
           */
          parent_id: string;
          /**
           * Replies
           * @description Nested replies as raw dictionaries from the API, requiring parsing into `CommentData`; `None` if no replies or not in response.
           * @default null
           */
          replies: {
              [key: string]: unknown;
          }[] | null;
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
 * Type of REDDIT's REDDIT_RETRIEVE_REDDIT_POST tool input.
 */
type REDDIT_RETRIEVE_REDDIT_POST_INPUT = {
  /**
   * Size
   * @description The maximum number of posts to return. Default is 5. Set to 0 to retrieve all available posts (or the maximum allowed by the Reddit API for a single request, typically up to 100 for this type of listing).
   * @default 5
   */
  size: number | null;
  /**
   * Subreddit
   * @description The name of the subreddit from which to retrieve posts (e.g., 'popular', 'pics'). Do not include 'r/'.
   */
  subreddit?: string;
};

/**
 * Type of REDDIT's REDDIT_RETRIEVE_REDDIT_POST tool output.
 */
type REDDIT_RETRIEVE_REDDIT_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Posts List
       * @description A list of dictionaries, where each dictionary represents a Reddit post and contains its data. Common keys include 'title', 'url', 'author', 'score', 'num_comments', 'created_utc', 'subreddit', 'selftext', 'permalink', 'id', 'name' (full ID like t3_xxxx), 'ups', 'downs', 'is_original_content', 'is_self', 'is_video', 'media', 'thumbnail', 'stickied', 'spoiler', 'nsfw', etc. The exact fields can vary based on the post type and API version.
       */
      posts_list: {
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
 * Type of REDDIT's REDDIT_RETRIEVE_SPECIFIC_COMMENT tool input.
 */
type REDDIT_RETRIEVE_SPECIFIC_COMMENT_INPUT = {
  /**
   * Id
   * @description Fullname of the comment or post to retrieve (e.g., 't1_c123456', 't3_x56789').
   */
  id?: string;
};

/**
 * Type of REDDIT's REDDIT_RETRIEVE_SPECIFIC_COMMENT tool output.
 */
type REDDIT_RETRIEVE_SPECIFIC_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Things
       * @description List of items (comments or posts) matching the `id` from the request; typically contains a single item.
       */
      things: {
          /**
           * Data
           * @description Detailed data attributes for the item; structure varies based on its 'kind'.
           */
          data: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Unique base36 ID of the item, excluding the 'kind' prefix.
           */
          id: string;
          /**
           * Kind
           * @description Type identifier for the item (e.g., 't1' for comment, 't3' for link/post).
           */
          kind: string;
          /**
           * Name
           * @description Fullname of the item, including 'kind' prefix and base36 ID (e.g., 't1_c123456').
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
 * Type of REDDIT's REDDIT_SEARCH_ACROSS_SUBREDDITS tool input.
 */
type REDDIT_SEARCH_ACROSS_SUBREDDITS_INPUT = {
  /**
   * Limit
   * @description The maximum number of search results to return. Default is 5. Maximum allowed value is 100.
   * @default 5
   */
  limit: number;
  /**
   * Restrict Sr
   * @description If True (default), confines the search to posts and comments within subreddits. If False, the search scope is broader and may include matching subreddit names or other Reddit entities.
   * @default true
   */
  restrict_sr: boolean;
  /**
   * Search Query
   * @description The search query string used to find content across subreddits.
   */
  search_query?: string;
  /**
   * Sort
   * @description The criterion for sorting search results. 'relevance' (default) sorts by relevance to the query. 'new' sorts by newest first. 'top' sorts by highest score (typically all-time). 'comments' sorts by the number of comments.
   * @default relevance
   * @enum {string}
   */
  sort: "relevance" | "new" | "top" | "comments";
};

/**
 * Type of REDDIT's REDDIT_SEARCH_ACROSS_SUBREDDITS tool output.
 */
type REDDIT_SEARCH_ACROSS_SUBREDDITS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Search Results
       * @description Raw JSON response from Reddit's search API, typically a 'Listing' object with 'data' containing 'children' (search results) and pagination cursors.
       */
      search_results: {
          [key: string]: unknown;
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
 * Type map of all available tool input types for toolkit "REDDIT".
 */
export type REDDIT_TOOL_INPUTS = {
  CREATE_REDDIT_POST: REDDIT_CREATE_REDDIT_POST_INPUT
  DELETE_REDDIT_COMMENT: REDDIT_DELETE_REDDIT_COMMENT_INPUT
  DELETE_REDDIT_POST: REDDIT_DELETE_REDDIT_POST_INPUT
  EDIT_REDDIT_COMMENT_OR_POST: REDDIT_EDIT_REDDIT_COMMENT_OR_POST_INPUT
  GET_USER_FLAIR: REDDIT_GET_USER_FLAIR_INPUT
  POST_REDDIT_COMMENT: REDDIT_POST_REDDIT_COMMENT_INPUT
  RETRIEVE_POST_COMMENTS: REDDIT_RETRIEVE_POST_COMMENTS_INPUT
  RETRIEVE_REDDIT_POST: REDDIT_RETRIEVE_REDDIT_POST_INPUT
  RETRIEVE_SPECIFIC_COMMENT: REDDIT_RETRIEVE_SPECIFIC_COMMENT_INPUT
  SEARCH_ACROSS_SUBREDDITS: REDDIT_SEARCH_ACROSS_SUBREDDITS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "REDDIT".
 */
export type REDDIT_TOOL_OUTPUTS = {
  CREATE_REDDIT_POST: REDDIT_CREATE_REDDIT_POST_OUTPUT
  DELETE_REDDIT_COMMENT: REDDIT_DELETE_REDDIT_COMMENT_OUTPUT
  DELETE_REDDIT_POST: REDDIT_DELETE_REDDIT_POST_OUTPUT
  EDIT_REDDIT_COMMENT_OR_POST: REDDIT_EDIT_REDDIT_COMMENT_OR_POST_OUTPUT
  GET_USER_FLAIR: REDDIT_GET_USER_FLAIR_OUTPUT
  POST_REDDIT_COMMENT: REDDIT_POST_REDDIT_COMMENT_OUTPUT
  RETRIEVE_POST_COMMENTS: REDDIT_RETRIEVE_POST_COMMENTS_OUTPUT
  RETRIEVE_REDDIT_POST: REDDIT_RETRIEVE_REDDIT_POST_OUTPUT
  RETRIEVE_SPECIFIC_COMMENT: REDDIT_RETRIEVE_SPECIFIC_COMMENT_OUTPUT
  SEARCH_ACROSS_SUBREDDITS: REDDIT_SEARCH_ACROSS_SUBREDDITS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's REDDIT toolkit.
 */
export const REDDIT = {
  slug: "reddit",
  tools: {
    /**
     * Creates a new text or link post on a specified, existing reddit subreddit, optionally applying a flair.
     */
    CREATE_REDDIT_POST: "REDDIT_CREATE_REDDIT_POST",
    /**
     * Deletes a reddit comment, identified by its fullname id, if it was authored by the authenticated user.
     */
    DELETE_REDDIT_COMMENT: "REDDIT_DELETE_REDDIT_COMMENT",
    /**
     * Permanently deletes a reddit post by its id, provided the authenticated user has deletion permissions for that post.
     */
    DELETE_REDDIT_POST: "REDDIT_DELETE_REDDIT_POST",
    /**
     * Edits the body text of the authenticated user's own existing comment or self-post on reddit; cannot edit link posts or titles.
     */
    EDIT_REDDIT_COMMENT_OR_POST: "REDDIT_EDIT_REDDIT_COMMENT_OR_POST",
    /**
     * Fetches the list of available link flairs (i.e., post flairs, not user flairs) for a given subreddit.
     */
    GET_USER_FLAIR: "REDDIT_GET_USER_FLAIR",
    /**
     * Posts a comment on reddit, replying to an existing and accessible submission (post) or another comment.
     */
    POST_REDDIT_COMMENT: "REDDIT_POST_REDDIT_COMMENT",
    /**
     * Retrieves all comments for a reddit post given its article id (which must be for an existing, public post); nested replies within comments are returned as raw dictionaries requiring parsing.
     */
    RETRIEVE_POST_COMMENTS: "REDDIT_RETRIEVE_POST_COMMENTS",
    /**
     * Retrieves the current hot posts from a specified, publicly accessible subreddit.
     */
    RETRIEVE_REDDIT_POST: "REDDIT_RETRIEVE_REDDIT_POST",
    /**
     * Retrieves detailed information for a specific reddit comment or post using its fullname.
     */
    RETRIEVE_SPECIFIC_COMMENT: "REDDIT_RETRIEVE_SPECIFIC_COMMENT",
    /**
     * Searches reddit for content (e.g., posts, comments) using a query, with results typically confined to subreddits unless `restrict sr` is set to false.
     */
    SEARCH_ACROSS_SUBREDDITS: "REDDIT_SEARCH_ACROSS_SUBREDDITS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "REDDIT".
 */
export type REDDIT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "REDDIT".
 */
export type REDDIT_TRIGGER_EVENTS = {}
