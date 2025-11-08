// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TYPEFULLY's TYPEFULLY_CREATE_DRAFT tool input.
 */
type TYPEFULLY_CREATE_DRAFT_INPUT = {
  /**
   * Auto Plug Enabled
   * @description If true, the post will have an AutoPlug enabled
   */
  auto_plug_enabled?: boolean;
  /**
   * Auto Retweet Enabled
   * @description If true, the post will have an AutoRT enabled
   */
  auto_retweet_enabled?: boolean;
  /**
   * Content
   * @description The content of the draft. Split into multiple tweets using 4 newlines
   */
  content?: string;
  /**
   * Schedule Date
   * @description ISO formatted date (e.g.:2022-06-13T11:13:31.662Z) or "next-free-slot"
   */
  schedule_date?: string;
  /**
   * Share
   * @description If true, returned payload will include a share_url
   */
  share?: boolean;
  /**
   * Threadify
   * @description Content will be automatically split into multiple tweets
   */
  threadify?: boolean;
};

/**
 * Type of TYPEFULLY's TYPEFULLY_CREATE_DRAFT tool output.
 */
type TYPEFULLY_CREATE_DRAFT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full response data from the API
       */
      response_data?: {
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
 * Type of TYPEFULLY's TYPEFULLY_GET_NOTIFICATIONS tool input.
 */
type TYPEFULLY_GET_NOTIFICATIONS_INPUT = {
  /**
   * Kind
   * @description Filter notifications by type: 'inbox' for comments/replies, 'activity' for events
   * @enum {string}
   */
  kind?: "inbox" | "activity";
};

/**
 * Type of TYPEFULLY's TYPEFULLY_GET_NOTIFICATIONS tool output.
 */
type TYPEFULLY_GET_NOTIFICATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The notifications data containing accounts and their notifications
       */
      response_data?: {
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
 * Type of TYPEFULLY's TYPEFULLY_GET_RECENTLY_PUBLISHED tool input.
 */
type TYPEFULLY_GET_RECENTLY_PUBLISHED_INPUT = object;

/**
 * Type of TYPEFULLY's TYPEFULLY_GET_RECENTLY_PUBLISHED tool output.
 */
type TYPEFULLY_GET_RECENTLY_PUBLISHED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The list of recently published drafts
       */
      response_data?: unknown[];
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
 * Type of TYPEFULLY's TYPEFULLY_GET_RECENTLY_SCHEDULED tool input.
 */
type TYPEFULLY_GET_RECENTLY_SCHEDULED_INPUT = {
  /**
   * Content Filter
   * @description Filter to show only threads or tweets example 'threads', 'tweets'
   * @enum {string}
   */
  content_filter?: "threads" | "tweets";
};

/**
 * Type of TYPEFULLY's TYPEFULLY_GET_RECENTLY_SCHEDULED tool output.
 */
type TYPEFULLY_GET_RECENTLY_SCHEDULED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full response data from the API
       */
      response_data?: unknown[];
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
 * Type of TYPEFULLY's TYPEFULLY_MARK_NOTIFICATIONS_READ tool input.
 */
type TYPEFULLY_MARK_NOTIFICATIONS_READ_INPUT = {
  /**
   * Account Id
   * @description Specific account ID to mark notifications as read for
   */
  account_id?: string;
  /**
   * Kind
   * @description Filter notifications to mark as read: 'inbox' for comments/replies, 'activity' for events
   * @enum {string}
   */
  kind?: "inbox" | "activity";
};

/**
 * Type of TYPEFULLY's TYPEFULLY_MARK_NOTIFICATIONS_READ tool output.
 */
type TYPEFULLY_MARK_NOTIFICATIONS_READ_OUTPUT = {
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
 * Type map of all available tool input types for toolkit "TYPEFULLY".
 */
export type TYPEFULLY_TOOL_INPUTS = {
  CREATE_DRAFT: TYPEFULLY_CREATE_DRAFT_INPUT
  GET_NOTIFICATIONS: TYPEFULLY_GET_NOTIFICATIONS_INPUT
  GET_RECENTLY_PUBLISHED: TYPEFULLY_GET_RECENTLY_PUBLISHED_INPUT
  GET_RECENTLY_SCHEDULED: TYPEFULLY_GET_RECENTLY_SCHEDULED_INPUT
  MARK_NOTIFICATIONS_READ: TYPEFULLY_MARK_NOTIFICATIONS_READ_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TYPEFULLY".
 */
export type TYPEFULLY_TOOL_OUTPUTS = {
  CREATE_DRAFT: TYPEFULLY_CREATE_DRAFT_OUTPUT
  GET_NOTIFICATIONS: TYPEFULLY_GET_NOTIFICATIONS_OUTPUT
  GET_RECENTLY_PUBLISHED: TYPEFULLY_GET_RECENTLY_PUBLISHED_OUTPUT
  GET_RECENTLY_SCHEDULED: TYPEFULLY_GET_RECENTLY_SCHEDULED_OUTPUT
  MARK_NOTIFICATIONS_READ: TYPEFULLY_MARK_NOTIFICATIONS_READ_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TYPEFULLY toolkit.
 */
export const TYPEFULLY = {
  slug: "typefully",
  tools: {
    /**
     * Creates a draft in typefully.
     */
    CREATE_DRAFT: "TYPEFULLY_CREATE_DRAFT",
    /**
     * Get notifications from typefully. can be filtered by kind (inbox or activity).
     */
    GET_NOTIFICATIONS: "TYPEFULLY_GET_NOTIFICATIONS",
    /**
     * Get recently published drafts from typefully.
     */
    GET_RECENTLY_PUBLISHED: "TYPEFULLY_GET_RECENTLY_PUBLISHED",
    /**
     * Get recently scheduled drafts from typefully.
     */
    GET_RECENTLY_SCHEDULED: "TYPEFULLY_GET_RECENTLY_SCHEDULED",
    /**
     * Mark notifications as read in typefully. can be filtered by kind and account id.
     */
    MARK_NOTIFICATIONS_READ: "TYPEFULLY_MARK_NOTIFICATIONS_READ",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TYPEFULLY".
 */
export type TYPEFULLY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TYPEFULLY".
 */
export type TYPEFULLY_TRIGGER_EVENTS = {}
