// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SPOTLIGHTR's SPOTLIGHTR_GET_TOP_VIDEOS tool input.
 */
type SPOTLIGHTR_GET_TOP_VIDEOS_INPUT = {
  /**
   * Limit
   * @description Number of top videos to return
   * @default 10
   */
  limit: number;
};

/**
 * Type of SPOTLIGHTR's SPOTLIGHTR_GET_TOP_VIDEOS tool output.
 */
type SPOTLIGHTR_GET_TOP_VIDEOS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Response status, e.g., 'success'
       */
      status: string;
      /**
       * Videos
       * @description List of top video objects
       */
      videos: {
          /**
           * Created At
           * Format: date-time
           * @description Video creation datetime in ISO 8601 format
           */
          created_at: string;
          /**
           * Id
           * @description Video ID
           */
          id: string;
          /**
           * Title
           * @description Video title
           */
          title: string;
          /**
           * Url
           * @description Video URL
           */
          url: string;
          /**
           * Views
           * @description Total views for the video
           */
          views: number;
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
 * Type of SPOTLIGHTR's SPOTLIGHTR_GET_VIDEO_METRICS tool input.
 */
type SPOTLIGHTR_GET_VIDEO_METRICS_INPUT = {
  /**
   * End Date
   * @description End date (YYYY-MM-DD) of the metrics data range
   * @default null
   */
  end_date: string | null;
  /**
   * Metric Type
   * @description Which metric to retrieve. If omitted, returns all metrics.
   * @default null
   * @enum {string|null}
   */
  metric_type: "views" | "engagement" | "viewers" | "average_watch_time" | null;
  /**
   * Start Date
   * @description Start date (YYYY-MM-DD) of the metrics data range
   * @default null
   */
  start_date: string | null;
  /**
   * Video Id
   * @description ID of the video to fetch metrics for
   */
  video_id?: string;
};

/**
 * Type of SPOTLIGHTR's SPOTLIGHTR_GET_VIDEO_METRICS tool output.
 */
type SPOTLIGHTR_GET_VIDEO_METRICS_OUTPUT = {
  /**
   * Data
   * @description Payload with video metrics
   */
  data?: {
      /**
       * Average Watch Time
       * @description Average watch time in seconds
       */
      average_watch_time: number;
      /**
       * Engagement
       * @description Engagement percentage (0–100)
       */
      engagement: number;
      /**
       * Viewers
       * @description Count of unique viewers
       */
      viewers: number;
      /**
       * Views
       * @description Total number of views
       */
      views: number;
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
   * Message
   * @description Optional additional message
   * @default null
   */
  message: string | null;
  /**
   * Status
   * @description API response status, e.g., 'success'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "SPOTLIGHTR".
 */
export type SPOTLIGHTR_TOOL_INPUTS = {
  GET_TOP_VIDEOS: SPOTLIGHTR_GET_TOP_VIDEOS_INPUT
  GET_VIDEO_METRICS: SPOTLIGHTR_GET_VIDEO_METRICS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SPOTLIGHTR".
 */
export type SPOTLIGHTR_TOOL_OUTPUTS = {
  GET_TOP_VIDEOS: SPOTLIGHTR_GET_TOP_VIDEOS_OUTPUT
  GET_VIDEO_METRICS: SPOTLIGHTR_GET_VIDEO_METRICS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SPOTLIGHTR toolkit.
 */
export const SPOTLIGHTR = {
  slug: "spotlightr",
  tools: {
    /**
     * Tool to retrieve the top videos from a spotlightr account. use when you need to list the most viewed videos.
     */
    GET_TOP_VIDEOS: "SPOTLIGHTR_GET_TOP_VIDEOS",
    /**
     * Tool to retrieve analytics metrics for a specified video. use when you have a video id and need its metrics (views, engagement, viewers, watch time).
     */
    GET_VIDEO_METRICS: "SPOTLIGHTR_GET_VIDEO_METRICS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SPOTLIGHTR".
 */
export type SPOTLIGHTR_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SPOTLIGHTR".
 */
export type SPOTLIGHTR_TRIGGER_EVENTS = {}
