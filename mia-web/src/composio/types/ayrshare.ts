// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of AYRSHARE's AYRSHARE_CREATE_AUTO_SCHEDULE tool input.
 */
type AYRSHARE_CREATE_AUTO_SCHEDULE_INPUT = {
  /**
   * Days Of Week
   * @description Optional days of the week to post (0=Sunday ... 6=Saturday). Defaults to every day if omitted.
   * @default null
   */
  daysOfWeek: number[] | null;
  /**
   * Schedule
   * @description List of scheduled times in HH:MMZ format, e.g., ['13:05Z', '22:14Z']
   */
  schedule?: string[];
  /**
   * Title
   * @description The title of the schedule. Defaults to 'default'.
   * @default default
   */
  title: string;
};

/**
 * Type of AYRSHARE's AYRSHARE_CREATE_AUTO_SCHEDULE tool output.
 */
type AYRSHARE_CREATE_AUTO_SCHEDULE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Descriptive message returned by the API.
       */
      message: string;
      /**
       * Status
       * @description Indicates the success of the operation (always 'success').
       * @constant
       */
      status: "success";
      /**
       * Title
       * @description Title of the schedule that was created.
       */
      title: string;
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
 * Type of AYRSHARE's AYRSHARE_DELETE_DELETE_POST tool input.
 */
type AYRSHARE_DELETE_DELETE_POST_INPUT = {
  /**
   * Bulk
   * @description List of Ayrshare Post IDs to delete in bulk. Required if neither `id` nor `delete_all_scheduled` is set.
   * @default null
   */
  bulk: string[] | null;
  /**
   * Delete All Scheduled
   * @description If true, deletes all pending scheduled posts for this profile. Ignores `id` and `bulk` when set.
   * @default false
   */
  deleteAllScheduled: boolean | null;
  /**
   * Id
   * @description Ayrshare Post ID to delete. Required if neither `bulk` nor `delete_all_scheduled` is set.
   * @default null
   */
  id: string | null;
  /**
   * Mark Manual Deleted
   * @description If true, marks the post as deleted in Ayrshare without calling social APIs. Use when a post was manually removed on the networks.
   * @default false
   */
  markManualDeleted: boolean | null;
};

/**
 * Type of AYRSHARE's AYRSHARE_DELETE_DELETE_POST tool output.
 */
type AYRSHARE_DELETE_DELETE_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Platforms
       * @description Deletion status for each platform, keyed by platform name.
       */
      platforms: {
          [key: string]: {
              /**
               * Action
               * @description Action performed, e.g., 'delete'.
               */
              action: string;
              /**
               * Id
               * @description Social network's post ID for the deleted post.
               */
              id: string;
              /**
               * Status
               * @description Status of the action, e.g., 'success'.
               */
              status: string;
          };
      };
      /**
       * Status
       * @description Indicates the success status of the delete operation.
       */
      status: string;
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
 * Type of AYRSHARE's AYRSHARE_GET_POST_HISTORY tool input.
 */
type AYRSHARE_GET_POST_HISTORY_INPUT = {
  /**
   * Profile Key
   * @description Profile Key of a User Profile. Omit to use the primary profile.
   * @default null
   */
  "Profile-Key": string | null;
  /**
   * End Date
   * @description End date in ISO 8601 format (inclusive).
   * @default null
   */
  endDate: string | null;
  /**
   * Last Days
   * @description Return posts from the last X days (default 30; 0 returns all posts).
   * @default null
   */
  lastDays: number | null;
  /**
   * Last Records
   * @description Return the last X posts, regardless of date filters.
   * @default null
   */
  lastRecords: number | null;
  /**
   * Limit
   * @description Number of records to return per page (default 20; max 500).
   * @default null
   */
  limit: number | null;
  /**
   * Start Date
   * @description Start date in ISO 8601 format (inclusive).
   * @default null
   */
  startDate: string | null;
  /**
   * Status
   * @description Filter by post status.
   * @default null
   * @enum {string|null}
   */
  status: "success" | "error" | "processing" | "pending" | "deleted" | "awaiting approval" | null;
};

/**
 * Type of AYRSHARE's AYRSHARE_GET_POST_HISTORY tool output.
 */
type AYRSHARE_GET_POST_HISTORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of posts returned.
       */
      count: number;
      /**
       * History
       * @description List of Ayrshare post history entries.
       */
      history: {
          /**
           * Approved
           * @description Whether the post was approved.
           */
          approved: boolean;
          /**
           * Approved By
           * @description User ID of who approved the post, if applicable.
           * @default null
           */
          approvedBy: string | null;
          /**
           * Approved Date
           * @description Timestamp when the post was approved (ISO 8601).
           * @default null
           */
          approvedDate: string | null;
          /**
           * Created
           * @description Creation timestamp (ISO 8601).
           */
          created: string;
          /**
           * Errors
           * @description List of errors encountered for the post, if any.
           */
          errors: string[];
          /**
           * Id
           * @description Ayrshare Post ID.
           */
          id: string;
          /**
           * Media Urls
           * @description Media URLs attached to the post.
           */
          mediaUrls: string[];
          /**
           * Notes
           * @description Reference notes for the post.
           * @default null
           */
          notes: string | null;
          /**
           * Platforms
           * @description List of platforms the post was sent to.
           */
          platforms: string[];
          /**
           * Post
           * @description Content of the post.
           */
          post: string;
          /**
           * Post Ids
           * @description List of platform-specific post IDs and statuses.
           */
          postIds: {
              /**
               * Id
               * @description Platform-specific post ID.
               */
              id: string;
              /**
               * Platform
               * @description Name of the platform.
               */
              platform: string;
              /**
               * Status
               * @description Status of the post on this platform.
               */
              status: string;
          }[];
          /**
           * Profile Title
           * @description Title of the user profile that made the post.
           * @default null
           */
          profileTitle: string | null;
          /**
           * Ref Id
           * @description Reference ID associated with the post.
           * @default null
           */
          refId: string | null;
          /**
           * Rejected By
           * @description User ID of who rejected the post, if applicable.
           * @default null
           */
          rejectedBy: string | null;
          /**
           * Rejected Date
           * @description Timestamp when the post was rejected (ISO 8601).
           * @default null
           */
          rejectedDate: string | null;
          /**
           * Requires Approval
           * @description Whether the post requires approval.
           */
          requiresApproval: boolean;
          /**
           * Schedule Date
           * @description Scheduled timestamp if the post was scheduled (ISO 8601).
           * @default null
           */
          scheduleDate: string | null;
          /**
           * Shorten Links
           * @description Whether links were shortened.
           */
          shortenLinks: boolean;
          /**
           * Status
           * @description Overall status of the post.
           */
          status: string;
          /**
           * Type
           * @description Type of post, e.g., 'now' or 'scheduled'.
           */
          type: string;
      }[];
      /**
       * Last Updated
       * @description Timestamp of the last update (ISO 8601).
       */
      lastUpdated: string;
      /**
       * Next Update
       * @description Timestamp of the next scheduled update (ISO 8601).
       */
      nextUpdate: string;
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
 * Type of AYRSHARE's AYRSHARE_POST_SET_AUTO_SCHEDULE tool input.
 */
type AYRSHARE_POST_SET_AUTO_SCHEDULE_INPUT = {
  /**
   * Days Of Week
   * @description Optional days of the week to post (0=Sunday...6=Saturday). Defaults to all days if omitted.
   * @default null
   */
  daysOfWeek: number[] | null;
  /**
   * Schedule
   * @description Array of scheduled times in ISO-8601 UTC format 'HH:MMZ', e.g., ['13:05Z', '22:14Z']
   */
  schedule?: string[];
  /**
   * Title
   * @description Title for the schedule. Use to reference this schedule in future calls. Defaults to 'default'.
   * @default default
   */
  title: string | null;
};

/**
 * Type of AYRSHARE's AYRSHARE_POST_SET_AUTO_SCHEDULE tool output.
 */
type AYRSHARE_POST_SET_AUTO_SCHEDULE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Descriptive message returned by the API.
       */
      message: string;
      /**
       * Status
       * @description Indicates the success of the operation ('success').
       * @constant
       */
      status: "success";
      /**
       * Title
       * @description Title of the schedule that was set.
       */
      title: string;
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
 * Type map of all available tool input types for toolkit "AYRSHARE".
 */
export type AYRSHARE_TOOL_INPUTS = {
  CREATE_AUTO_SCHEDULE: AYRSHARE_CREATE_AUTO_SCHEDULE_INPUT
  DELETE_DELETE_POST: AYRSHARE_DELETE_DELETE_POST_INPUT
  GET_POST_HISTORY: AYRSHARE_GET_POST_HISTORY_INPUT
  POST_SET_AUTO_SCHEDULE: AYRSHARE_POST_SET_AUTO_SCHEDULE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "AYRSHARE".
 */
export type AYRSHARE_TOOL_OUTPUTS = {
  CREATE_AUTO_SCHEDULE: AYRSHARE_CREATE_AUTO_SCHEDULE_OUTPUT
  DELETE_DELETE_POST: AYRSHARE_DELETE_DELETE_POST_OUTPUT
  GET_POST_HISTORY: AYRSHARE_GET_POST_HISTORY_OUTPUT
  POST_SET_AUTO_SCHEDULE: AYRSHARE_POST_SET_AUTO_SCHEDULE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's AYRSHARE toolkit.
 */
export const AYRSHARE = {
  slug: "ayrshare",
  tools: {
    /**
     * Tool to create a new auto-post schedule with specified times and optional weekday filters. use when setting up recurring posting plans.
     */
    CREATE_AUTO_SCHEDULE: "AYRSHARE_CREATE_AUTO_SCHEDULE",
    /**
     * Tool to delete an ayrshare post. use when you need to remove a published or scheduled post by its ayrshare post id, after confirming the correct id. note: instagram and tiktok published posts cannot be deleted via api; set `mark manual deleted=true` or remove manually.
     */
    DELETE_DELETE_POST: "AYRSHARE_DELETE_DELETE_POST",
    /**
     * Tool to retrieve ayrshare post history with metrics. use when you need to fetch and filter past posts by date, status, or record count.
     */
    GET_POST_HISTORY: "AYRSHARE_GET_POST_HISTORY",
    /**
     * Tool to set up an auto-post schedule with specified times and optional weekday filters. use when scheduling posts around a recurring pattern.
     */
    POST_SET_AUTO_SCHEDULE: "AYRSHARE_POST_SET_AUTO_SCHEDULE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "AYRSHARE".
 */
export type AYRSHARE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "AYRSHARE".
 */
export type AYRSHARE_TRIGGER_EVENTS = {}
