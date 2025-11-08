// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of HACKERNEWS's HACKERNEWS_GET_FRONTPAGE tool input.
 */
type HACKERNEWS_GET_FRONTPAGE_INPUT = {
  /**
   * Min Points
   * @description Minimum points a post must have to be included in the response. It returns at most 50 posts.
   * @default 40
   */
  min_points: number;
};

/**
 * Type of HACKERNEWS's HACKERNEWS_GET_FRONTPAGE tool output.
 */
type HACKERNEWS_GET_FRONTPAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response
       * @description The response from the search, containing the posts data.
       */
      response: {
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
 * Type of HACKERNEWS's HACKERNEWS_GET_ITEM_WITH_ID tool input.
 */
type HACKERNEWS_GET_ITEM_WITH_ID_INPUT = {
  /**
   * Item Id
   * @description The ID of the item to retrieve from Hacker News.
   */
  item_id?: string;
  /**
   * Max Children
   * @description Maximum number of direct children comments to include.
   * @default 10
   */
  max_children: number;
  /**
   * Max Depth
   * @description Maximum depth of nested comments to include.
   * @default 2
   */
  max_depth: number;
  /**
   * Truncate Text
   * @description Whether to truncate long text content.
   * @default true
   */
  truncate_text: boolean;
};

/**
 * Type of HACKERNEWS's HACKERNEWS_GET_ITEM_WITH_ID tool output.
 */
type HACKERNEWS_GET_ITEM_WITH_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The response from the item retrieval
       */
      response_data: {
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
 * Type of HACKERNEWS's HACKERNEWS_GET_LATEST_POSTS tool input.
 */
type HACKERNEWS_GET_LATEST_POSTS_INPUT = {
  /**
   * Page
   * @description Page number for pagination.
   * @default 0
   */
  page: number;
  /**
   * Size
   * @description Limit the number of results returned. If not specified, returns all results from the page. Use 0 to return all results.
   * @default 5
   */
  size: number | null;
  /**
   * Tags
   * @description Filter on a specific tag. Available tags: story, comment, poll, pollopt, show_hn, ask_hn, front_page, author_<USERNAME>, story_<ID>.
   */
  tags?: string[];
};

/**
 * Type of HACKERNEWS's HACKERNEWS_GET_LATEST_POSTS tool output.
 */
type HACKERNEWS_GET_LATEST_POSTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The response from the latest posts retrieval
       */
      response_data: {
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
 * Type of HACKERNEWS's HACKERNEWS_GET_TODAYS_POSTS tool input.
 */
type HACKERNEWS_GET_TODAYS_POSTS_INPUT = {
  /**
   * Min Points
   * @description Minimum points a post must have to be included in the response. It returns at most 1000 posts.
   * @default 200
   */
  min_points: number;
};

/**
 * Type of HACKERNEWS's HACKERNEWS_GET_TODAYS_POSTS tool output.
 */
type HACKERNEWS_GET_TODAYS_POSTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response
       * @description The response from the search
       */
      response: {
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
 * Type of HACKERNEWS's HACKERNEWS_GET_USER tool input.
 */
type HACKERNEWS_GET_USER_INPUT = {
  /**
   * Username
   * @description The username of the Hacker News user to retrieve.
   */
  username?: string;
};

/**
 * Type of HACKERNEWS's HACKERNEWS_GET_USER tool output.
 */
type HACKERNEWS_GET_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The response from the user retrieval
       */
      response_data: {
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
 * Type of HACKERNEWS's HACKERNEWS_SEARCH_POSTS tool input.
 */
type HACKERNEWS_SEARCH_POSTS_INPUT = {
  /**
   * Page
   * @description Page number for pagination.
   * @default 0
   */
  page: number;
  /**
   * Query
   * @description Full-text query to filter the posts.
   */
  query?: string;
  /**
   * Size
   * @description Limit the number of results returned. If not specified, returns all results from the page. Use 0 to return all results.
   * @default 5
   */
  size: number | null;
  /**
   * Tags
   * @description Filter on a specific tag. Available tags: story, comment, poll, pollopt, show_hn, ask_hn, front_page, author_<USERNAME>, story_<ID>.
   */
  tags?: string[];
};

/**
 * Type of HACKERNEWS's HACKERNEWS_SEARCH_POSTS tool output.
 */
type HACKERNEWS_SEARCH_POSTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The response from the relevant posts retrieval
       */
      response_data: {
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
 * Type map of all available tool input types for toolkit "HACKERNEWS".
 */
export type HACKERNEWS_TOOL_INPUTS = {
  GET_FRONTPAGE: HACKERNEWS_GET_FRONTPAGE_INPUT
  GET_ITEM_WITH_ID: HACKERNEWS_GET_ITEM_WITH_ID_INPUT
  GET_LATEST_POSTS: HACKERNEWS_GET_LATEST_POSTS_INPUT
  GET_TODAYS_POSTS: HACKERNEWS_GET_TODAYS_POSTS_INPUT
  GET_USER: HACKERNEWS_GET_USER_INPUT
  SEARCH_POSTS: HACKERNEWS_SEARCH_POSTS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "HACKERNEWS".
 */
export type HACKERNEWS_TOOL_OUTPUTS = {
  GET_FRONTPAGE: HACKERNEWS_GET_FRONTPAGE_OUTPUT
  GET_ITEM_WITH_ID: HACKERNEWS_GET_ITEM_WITH_ID_OUTPUT
  GET_LATEST_POSTS: HACKERNEWS_GET_LATEST_POSTS_OUTPUT
  GET_TODAYS_POSTS: HACKERNEWS_GET_TODAYS_POSTS_OUTPUT
  GET_USER: HACKERNEWS_GET_USER_OUTPUT
  SEARCH_POSTS: HACKERNEWS_SEARCH_POSTS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's HACKERNEWS toolkit.
 */
export const HACKERNEWS = {
  slug: "hackernews",
  tools: {
    /**
     * Get the frontpage posts of hacker news.
     */
    GET_FRONTPAGE: "HACKERNEWS_GET_FRONTPAGE",
    /**
     * Get a specific item from hacker news using its id. limits response size to prevent context overflow.
     */
    GET_ITEM_WITH_ID: "HACKERNEWS_GET_ITEM_WITH_ID",
    /**
     * Get the latest posts from hacker news based on optional filters. results can be limited using the size parameter.
     */
    GET_LATEST_POSTS: "HACKERNEWS_GET_LATEST_POSTS",
    /**
     * Get today's posts from hacker news.
     */
    GET_TODAYS_POSTS: "HACKERNEWS_GET_TODAYS_POSTS",
    /**
     * Get a specific user from hacker news using their username.
     */
    GET_USER: "HACKERNEWS_GET_USER",
    /**
     * Get relevant posts from hacker news based on a full-text query and optional filters. results can be limited using the size parameter.
     */
    SEARCH_POSTS: "HACKERNEWS_SEARCH_POSTS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "HACKERNEWS".
 */
export type HACKERNEWS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "HACKERNEWS".
 */
export type HACKERNEWS_TRIGGER_EVENTS = {}
