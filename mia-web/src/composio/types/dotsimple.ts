// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DOTSIMPLE's DOTSIMPLE_CREATE_TAG tool input.
 */
type DOTSIMPLE_CREATE_TAG_INPUT = {
  /**
   * Hex Color
   * @description Hexadecimal color code for the tag (e.g., '#38bdf8').
   */
  hex_color?: unknown;
  /**
   * Name
   * @description The name of the tag to be created.
   */
  name?: string;
};

/**
 * Type of DOTSIMPLE's DOTSIMPLE_CREATE_TAG tool output.
 */
type DOTSIMPLE_CREATE_TAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Hex Color
       * @description Hexadecimal color code of the created tag.
       */
      hex_color: string;
      /**
       * Name
       * @description The name of the created tag.
       */
      name: string;
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
 * Type of DOTSIMPLE's DOTSIMPLE_DELETE_MEDIA_FILES tool input.
 */
type DOTSIMPLE_DELETE_MEDIA_FILES_INPUT = {
  /**
   * Items
   * @description Array of media file IDs to delete
   */
  items?: number[];
};

/**
 * Type of DOTSIMPLE's DOTSIMPLE_DELETE_MEDIA_FILES tool output.
 */
type DOTSIMPLE_DELETE_MEDIA_FILES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the media files were deleted successfully
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
 * Type of DOTSIMPLE's DOTSIMPLE_DELETE_TAG tool input.
 */
type DOTSIMPLE_DELETE_TAG_INPUT = {
  /**
   * Uuid
   * @description UUID of the tag to delete
   */
  uuid?: string;
};

/**
 * Type of DOTSIMPLE's DOTSIMPLE_DELETE_TAG tool output.
 */
type DOTSIMPLE_DELETE_TAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description Indicates if the tag was successfully deleted
       */
      deleted: boolean;
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
 * Type of DOTSIMPLE's DOTSIMPLE_GET_MEDIA_FILE tool input.
 */
type DOTSIMPLE_GET_MEDIA_FILE_INPUT = {
  /**
   * Media File Id
   * @description The unique identifier of the media file
   */
  mediaFileId?: string;
};

/**
 * Type of DOTSIMPLE's DOTSIMPLE_GET_MEDIA_FILE tool output.
 */
type DOTSIMPLE_GET_MEDIA_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp in ISO 8601 format
       * @default null
       */
      createdAt: string | null;
      /**
       * Id
       * @description Unique identifier of the media file
       * @default null
       */
      id: string | null;
      /**
       * Mime Type
       * @description MIME type of the media file
       * @default null
       */
      mimeType: string | null;
      /**
       * Name
       * @description Name of the media file
       * @default null
       */
      name: string | null;
      /**
       * Size
       * @description Size of the media file in bytes
       * @default null
       */
      size: number | null;
      /**
       * Updated At
       * @description Last update timestamp in ISO 8601 format
       * @default null
       */
      updatedAt: string | null;
      /**
       * Url
       * @description Accessible URL of the media file
       * @default null
       */
      url: string | null;
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
 * Type of DOTSIMPLE's DOTSIMPLE_GET_TAG tool input.
 */
type DOTSIMPLE_GET_TAG_INPUT = {
  /**
   * Tag Id
   * @description The UUID of the tag to retrieve
   */
  tagId?: string;
};

/**
 * Type of DOTSIMPLE's DOTSIMPLE_GET_TAG tool output.
 */
type DOTSIMPLE_GET_TAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the tag was created
       */
      createdAt: string;
      /**
       * Description
       * @description Description of the tag
       */
      description: string;
      /**
       * Id
       * @description The UUID of the tag
       */
      id: string;
      /**
       * Name
       * @description Name of the tag
       */
      name: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the tag was last updated
       */
      updatedAt: string;
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
 * Type of DOTSIMPLE's DOTSIMPLE_LIST_ACCOUNTS tool input.
 */
type DOTSIMPLE_LIST_ACCOUNTS_INPUT = object;

/**
 * Type of DOTSIMPLE's DOTSIMPLE_LIST_ACCOUNTS tool output.
 */
type DOTSIMPLE_LIST_ACCOUNTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Accounts
       * @description List of connected social media accounts
       */
      accounts: {
          /**
           * Connected
           * @description Whether the account is currently connected
           */
          connected: boolean;
          /**
           * Credentials
           * @description Credentials details for the account
           */
          credentials: {
              /**
               * Refresh Token
               * @description Token used to refresh authentication
               */
              refresh_token: string;
              /**
               * Token
               * @description Access token for authentication
               */
              token: string;
              /**
               * Updated At
               * @description Last update timestamp in ISO 8601 format
               */
              updated_at: string;
          };
          /**
           * Id
           * @description Unique identifier of the account
           */
          id: string;
          /**
           * Name
           * @description Name of the account
           */
          name: string;
          /**
           * Type
           * @description Type of the account (e.g., Google, Microsoft)
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
 * Type of DOTSIMPLE's DOTSIMPLE_LIST_AUTORESPONDERS tool input.
 */
type DOTSIMPLE_LIST_AUTORESPONDERS_INPUT = {
  /**
   * Page
   * @description Page number for pagination (1-indexed).
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
 * Type of DOTSIMPLE's DOTSIMPLE_LIST_AUTORESPONDERS tool output.
 */
type DOTSIMPLE_LIST_AUTORESPONDERS_OUTPUT = {
  /**
   * Data
   * @description List of autoresponders.
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the autoresponder.
       */
      id: string;
      /**
       * Name
       * @description Name of the autoresponder.
       */
      name: string;
      /**
       * Status
       * @description Current status of the autoresponder.
       */
      status: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Pagination details.
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number.
       */
      current_page: number;
      /**
       * Per Page
       * @description Number of items per page.
       */
      per_page: number;
      /**
       * Total Count
       * @description Total count of autoresponders.
       */
      total_count: number;
      /**
       * Total Pages
       * @description Total number of pages available.
       */
      total_pages: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DOTSIMPLE's DOTSIMPLE_LIST_MEDIA_FILES tool input.
 */
type DOTSIMPLE_LIST_MEDIA_FILES_INPUT = {
  /**
   * Page
   * @description Page number for pagination
   * @default null
   */
  page: number | null;
};

/**
 * Type of DOTSIMPLE's DOTSIMPLE_LIST_MEDIA_FILES tool output.
 */
type DOTSIMPLE_LIST_MEDIA_FILES_OUTPUT = {
  /**
   * Data
   * @description List of media file objects
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the media was created
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the media file
       */
      id: string;
      /**
       * Is Video
       * @description Indicates if the file is a video
       */
      is_video: boolean;
      /**
       * Mime Type
       * @description MIME type of the media file
       */
      mime_type: string;
      /**
       * Name
       * @description File name of the media
       */
      name: string;
      /**
       * Thumb Url
       * @description Thumbnail URL of the media file
       * @default null
       */
      thumb_url: string | null;
      /**
       * Type
       * @description Type of media (e.g., 'image' or 'video')
       */
      type: string;
      /**
       * Url
       * @description URL to access the media file
       */
      url: string;
      /**
       * Uuid
       * @description UUID of the media file
       */
      uuid: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination navigation links
   */
  links?: {
      /**
       * First
       * @description URL of the first page
       * @default null
       */
      first: string | null;
      /**
       * Last
       * @description URL of the last page
       * @default null
       */
      last: string | null;
      /**
       * Next
       * @description URL of the next page
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * From
       * @description Starting item index for the current page
       * @default null
       */
      from: number | null;
      /**
       * Last Page
       * @description Last available page number
       */
      last_page: number;
      /**
       * Links
       * @description Array of pagination link items
       */
      links: {
          /**
           * Active
           * @description Indicates if this link is active/current page
           */
          active: boolean;
          /**
           * Label
           * @description Label for the pagination link
           */
          label: string;
          /**
           * Url
           * @description URL of the pagination link
           * @default null
           */
          url: string | null;
      }[];
      /**
       * Path
       * @description Base path for the media endpoint
       */
      path: string;
      /**
       * Per Page
       * @description Number of items per page
       */
      per_page: number;
      /**
       * To
       * @description Ending item index for the current page
       * @default null
       */
      to: number | null;
      /**
       * Total
       * @description Total number of media items
       */
      total: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DOTSIMPLE's DOTSIMPLE_LIST_POSTS tool input.
 */
type DOTSIMPLE_LIST_POSTS_INPUT = {
  /**
   * Page
   * @description Page number to retrieve (1-indexed)
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of posts per page
   * @default null
   */
  page_size: number | null;
};

/**
 * Type of DOTSIMPLE's DOTSIMPLE_LIST_POSTS tool output.
 */
type DOTSIMPLE_LIST_POSTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of posts available
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, or null if none
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, or null if none
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of posts on this page
       */
      results: {
          /**
           * Author
           * @description Author details
           */
          author: {
              /**
               * Email
               * Format: email
               * @description Email address of the author
               */
              email: unknown;
              /**
               * Id
               * Format: uuid
               * @description Unique identifier of the author (UUID)
               */
              id: unknown;
              /**
               * Name
               * @description Name of the author
               */
              name: string;
          };
          /**
           * Body
           * @description Main content of the post
           */
          body: string;
          /**
           * Created At
           * Format: date-time
           * @description ISO 8601 creation timestamp of the post
           */
          created_at: unknown;
          /**
           * Status
           * @description Publication status of the post
           * @enum {string}
           */
          status: "published" | "draft";
          /**
           * Title
           * @description Title of the post
           */
          title: string;
          /**
           * Updated At
           * Format: date-time
           * @description ISO 8601 last update timestamp of the post
           */
          updated_at: unknown;
          /**
           * Uuid
           * Format: uuid
           * @description Unique identifier of the post (UUID)
           */
          uuid: unknown;
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
 * Type of DOTSIMPLE's DOTSIMPLE_LIST_REPORTS tool input.
 */
type DOTSIMPLE_LIST_REPORTS_INPUT = {
  /**
   * Page
   * @description Page number to retrieve (1-indexed)
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of report entries per page
   * @default null
   */
  page_size: number | null;
};

/**
 * Type of DOTSIMPLE's DOTSIMPLE_LIST_REPORTS tool output.
 */
type DOTSIMPLE_LIST_REPORTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of report entries available
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, or null if none
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, or null if none
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of report entries for this page
       */
      results: {
          /**
           * Bounces
           * @description Number of bounces on this date
           */
          bounces: number;
          /**
           * Complaints
           * @description Number of complaints (spam reports) on this date
           */
          complaints: number;
          /**
           * Date
           * Format: date
           * @description Date of the report entry in YYYY-MM-DD format
           */
          date: unknown;
          /**
           * Delivered
           * @description Number of emails delivered on this date
           */
          delivered: number;
          /**
           * Sent
           * @description Number of emails sent on this date
           */
          sent: number;
          /**
           * Total Clicks
           * @description Total number of email clicks (including duplicates)
           */
          total_clicks: number;
          /**
           * Total Opens
           * @description Total number of email opens (including duplicates)
           */
          total_opens: number;
          /**
           * Unique Clicks
           * @description Number of unique email clicks
           */
          unique_clicks: number;
          /**
           * Unique Opens
           * @description Number of unique email opens
           */
          unique_opens: number;
          /**
           * Unsubscribes
           * @description Number of unsubscribes on this date
           */
          unsubscribes: number;
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
 * Type of DOTSIMPLE's DOTSIMPLE_LIST_TAGS tool input.
 */
type DOTSIMPLE_LIST_TAGS_INPUT = object;

/**
 * Type of DOTSIMPLE's DOTSIMPLE_LIST_TAGS tool output.
 */
type DOTSIMPLE_LIST_TAGS_OUTPUT = {
  /**
   * Data
   * @description List of tags available in the workspace
   */
  data?: {
      /**
       * Hex Color
       * @description Hex color code of the tag, e.g., '#38bdf8'
       */
      hex_color: string;
      /**
       * Id
       * @description Internal ID of the tag
       */
      id: number;
      /**
       * Name
       * @description Name of the tag
       */
      name: string;
      /**
       * Uuid
       * Format: uuid
       * @description UUID of the tag
       */
      uuid: unknown;
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
 * Type map of all available tool input types for toolkit "DOTSIMPLE".
 */
export type DOTSIMPLE_TOOL_INPUTS = {
  CREATE_TAG: DOTSIMPLE_CREATE_TAG_INPUT
  DELETE_MEDIA_FILES: DOTSIMPLE_DELETE_MEDIA_FILES_INPUT
  DELETE_TAG: DOTSIMPLE_DELETE_TAG_INPUT
  GET_MEDIA_FILE: DOTSIMPLE_GET_MEDIA_FILE_INPUT
  GET_TAG: DOTSIMPLE_GET_TAG_INPUT
  LIST_ACCOUNTS: DOTSIMPLE_LIST_ACCOUNTS_INPUT
  LIST_AUTORESPONDERS: DOTSIMPLE_LIST_AUTORESPONDERS_INPUT
  LIST_MEDIA_FILES: DOTSIMPLE_LIST_MEDIA_FILES_INPUT
  LIST_POSTS: DOTSIMPLE_LIST_POSTS_INPUT
  LIST_REPORTS: DOTSIMPLE_LIST_REPORTS_INPUT
  LIST_TAGS: DOTSIMPLE_LIST_TAGS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DOTSIMPLE".
 */
export type DOTSIMPLE_TOOL_OUTPUTS = {
  CREATE_TAG: DOTSIMPLE_CREATE_TAG_OUTPUT
  DELETE_MEDIA_FILES: DOTSIMPLE_DELETE_MEDIA_FILES_OUTPUT
  DELETE_TAG: DOTSIMPLE_DELETE_TAG_OUTPUT
  GET_MEDIA_FILE: DOTSIMPLE_GET_MEDIA_FILE_OUTPUT
  GET_TAG: DOTSIMPLE_GET_TAG_OUTPUT
  LIST_ACCOUNTS: DOTSIMPLE_LIST_ACCOUNTS_OUTPUT
  LIST_AUTORESPONDERS: DOTSIMPLE_LIST_AUTORESPONDERS_OUTPUT
  LIST_MEDIA_FILES: DOTSIMPLE_LIST_MEDIA_FILES_OUTPUT
  LIST_POSTS: DOTSIMPLE_LIST_POSTS_OUTPUT
  LIST_REPORTS: DOTSIMPLE_LIST_REPORTS_OUTPUT
  LIST_TAGS: DOTSIMPLE_LIST_TAGS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DOTSIMPLE toolkit.
 */
export const DOTSIMPLE = {
  slug: "dotsimple",
  tools: {
    /**
     * Tool to create a new tag in dotsimple. use when you need to categorize content with custom tags. example: create a tag named "news" with color "#38bdf8".
     */
    CREATE_TAG: "DOTSIMPLE_CREATE_TAG",
    /**
     * Tool to delete multiple media files in the workspace. use after confirming unwanted files. call this when you have a list of media ids to remove. returns success status.
     */
    DELETE_MEDIA_FILES: "DOTSIMPLE_DELETE_MEDIA_FILES",
    /**
     * Tool to delete a tag by its uuid. use when you need to remove a specific tag; ensure the uuid is correct before invoking.
     */
    DELETE_TAG: "DOTSIMPLE_DELETE_TAG",
    /**
     * Tool to retrieve details of a specific media file. use when you have the mediafileid and need its metadata.
     */
    GET_MEDIA_FILE: "DOTSIMPLE_GET_MEDIA_FILE",
    /**
     * Tool to retrieve details for a specific tag by uuid. use when you need full tag information after obtaining its identifier.
     */
    GET_TAG: "DOTSIMPLE_GET_TAG",
    /**
     * Tool to list all connected social media accounts in the workspace. use when you need to retrieve available accounts before posting or scheduling content.
     */
    LIST_ACCOUNTS: "DOTSIMPLE_LIST_ACCOUNTS",
    /**
     * Tool to list all autoresponders. use when you need to browse through your autoresponder setup.
     */
    LIST_AUTORESPONDERS: "DOTSIMPLE_LIST_AUTORESPONDERS",
    /**
     * Tool to list all media files with optional pagination. use when you need to retrieve or browse uploaded media files page by page.
     */
    LIST_MEDIA_FILES: "DOTSIMPLE_LIST_MEDIA_FILES",
    /**
     * Tool to list all posts in the workspace with optional pagination. use when you need to fetch paginated posts after obtaining a valid auth token.
     */
    LIST_POSTS: "DOTSIMPLE_LIST_POSTS",
    /**
     * Tool to list all account-level reports. use when you need to fetch aggregated account metrics chronologically after authentication.
     */
    LIST_REPORTS: "DOTSIMPLE_LIST_REPORTS",
    /**
     * Tool to list all tags available in the workspace. use when you need to retrieve tag metadata for planning or display.
     */
    LIST_TAGS: "DOTSIMPLE_LIST_TAGS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DOTSIMPLE".
 */
export type DOTSIMPLE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DOTSIMPLE".
 */
export type DOTSIMPLE_TRIGGER_EVENTS = {}
