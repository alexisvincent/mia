// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of LINKHUT's LINKHUT_ADD_BOOKMARK tool input.
 */
type LINKHUT_ADD_BOOKMARK_INPUT = {
  /**
   * Description
   * @description The title or description of the bookmark
   */
  description?: string;
  /**
   * Extended
   * @description Additional notes or description for the bookmark
   * @default null
   */
  extended: string | null;
  /**
   * Shared
   * @description Whether the bookmark should be public (true) or private (false)
   * @default true
   */
  shared: boolean | null;
  /**
   * Tags
   * @description Comma-separated list of tags for the bookmark
   * @default null
   */
  tags: string | null;
  /**
   * Toread
   * @description Whether to mark the bookmark as unread
   * @default false
   */
  toread: boolean | null;
  /**
   * Url
   * @description The URL of the webpage to bookmark
   */
  url?: string;
};

/**
 * Type of LINKHUT's LINKHUT_ADD_BOOKMARK tool output.
 */
type LINKHUT_ADD_BOOKMARK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result Code
       * @description Status of the bookmark addition operation
       */
      result_code: string;
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
 * Type of LINKHUT's LINKHUT_DELETE_BOOKMARK tool input.
 */
type LINKHUT_DELETE_BOOKMARK_INPUT = {
  /**
   * Url
   * @description The URL of the bookmark to delete
   */
  url?: string;
};

/**
 * Type of LINKHUT's LINKHUT_DELETE_BOOKMARK tool output.
 */
type LINKHUT_DELETE_BOOKMARK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result Code
       * @description Status of the bookmark deletion operation
       */
      result_code: string;
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
 * Type of LINKHUT's LINKHUT_GET_ALL_TAGS tool input.
 */
type LINKHUT_GET_ALL_TAGS_INPUT = object;

/**
 * Type of LINKHUT's LINKHUT_GET_ALL_TAGS tool output.
 */
type LINKHUT_GET_ALL_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tags
       * @description List of tags with their names and usage counts
       */
      tags: {
          [key: string]: number | string;
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
 * Type of LINKHUT's LINKHUT_GET_BOOKMARKS tool input.
 */
type LINKHUT_GET_BOOKMARKS_INPUT = {
  /**
   * Tag
   * @description Filter bookmarks by tag
   * @default null
   */
  tag: string | null;
};

/**
 * Type of LINKHUT's LINKHUT_GET_BOOKMARKS tool output.
 */
type LINKHUT_GET_BOOKMARKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bookmarks
       * @description List of bookmarks with their details
       */
      bookmarks: {
          /**
           * Description
           * @description The title or description of the bookmark
           */
          description: string;
          /**
           * Extended
           * @description Additional notes about the bookmark
           * @default
           */
          extended: string;
          /**
           * Hash
           * @description Unique identifier for the bookmark
           */
          hash: string;
          /**
           * Shared
           * @description Whether the bookmark is public or private
           */
          shared: boolean;
          /**
           * Tags
           * @description Comma-separated list of tags
           * @default
           */
          tags: string;
          /**
           * Time
           * @description Timestamp of when the bookmark was created
           */
          time: string;
          /**
           * Toread
           * @description Whether the bookmark is marked as unread
           */
          toread: boolean;
          /**
           * Url
           * @description The URL of the bookmark
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
 * Type of LINKHUT's LINKHUT_UPDATE_BOOKMARK tool input.
 */
type LINKHUT_UPDATE_BOOKMARK_INPUT = {
  /**
   * Description
   * @description The new title or description of the bookmark
   * @default null
   */
  description: string | null;
  /**
   * Extended
   * @description Additional notes or description for the bookmark
   * @default null
   */
  extended: string | null;
  /**
   * Shared
   * @description Whether the bookmark should be public (true) or private (false)
   * @default null
   */
  shared: boolean | null;
  /**
   * Tags
   * @description Comma-separated list of tags for the bookmark
   * @default null
   */
  tags: string | null;
  /**
   * Toread
   * @description Whether to mark the bookmark as unread
   * @default null
   */
  toread: boolean | null;
  /**
   * Url
   * @description The URL of the bookmark to update
   */
  url?: string;
};

/**
 * Type of LINKHUT's LINKHUT_UPDATE_BOOKMARK tool output.
 */
type LINKHUT_UPDATE_BOOKMARK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result Code
       * @description Status of the bookmark update operation
       */
      result_code: string;
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
 * Type map of all available tool input types for toolkit "LINKHUT".
 */
export type LINKHUT_TOOL_INPUTS = {
  ADD_BOOKMARK: LINKHUT_ADD_BOOKMARK_INPUT
  DELETE_BOOKMARK: LINKHUT_DELETE_BOOKMARK_INPUT
  GET_ALL_TAGS: LINKHUT_GET_ALL_TAGS_INPUT
  GET_BOOKMARKS: LINKHUT_GET_BOOKMARKS_INPUT
  UPDATE_BOOKMARK: LINKHUT_UPDATE_BOOKMARK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "LINKHUT".
 */
export type LINKHUT_TOOL_OUTPUTS = {
  ADD_BOOKMARK: LINKHUT_ADD_BOOKMARK_OUTPUT
  DELETE_BOOKMARK: LINKHUT_DELETE_BOOKMARK_OUTPUT
  GET_ALL_TAGS: LINKHUT_GET_ALL_TAGS_OUTPUT
  GET_BOOKMARKS: LINKHUT_GET_BOOKMARKS_OUTPUT
  UPDATE_BOOKMARK: LINKHUT_UPDATE_BOOKMARK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's LINKHUT toolkit.
 */
export const LINKHUT = {
  slug: "linkhut",
  tools: {
    /**
     * Adds a new bookmark to linkhut. the bookmark can be marked as private/public and read/unread, with optional tags and notes.
     */
    ADD_BOOKMARK: "LINKHUT_ADD_BOOKMARK",
    /**
     * This tool allows users to delete a bookmark from their linkhut account by providing the bookmark url. it operates independently and only requires the url parameter to identify and remove the bookmark.
     */
    DELETE_BOOKMARK: "LINKHUT_DELETE_BOOKMARK",
    /**
     * Retrieves a list of all tags and their usage counts for the authenticated user. no additional parameters required besides authentication.
     */
    GET_ALL_TAGS: "LINKHUT_GET_ALL_TAGS",
    /**
     * This tool retrieves all bookmarks from the user's linkhut account. it makes a get request to the api endpoint and handles authentication. the tool returns a list of bookmarks including details such as url, title, tags, notes, and timestamp.
     */
    GET_BOOKMARKS: "LINKHUT_GET_BOOKMARKS",
    /**
     * This tool allows users to update an existing bookmark in linkhut. the tool updates the metadata of a bookmark including its title, description, and tags.
     */
    UPDATE_BOOKMARK: "LINKHUT_UPDATE_BOOKMARK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "LINKHUT".
 */
export type LINKHUT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "LINKHUT".
 */
export type LINKHUT_TRIGGER_EVENTS = {}
