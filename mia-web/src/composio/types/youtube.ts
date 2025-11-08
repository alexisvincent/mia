import { type TriggerEvent } from "@composio/core"

// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of YOUTUBE's YOUTUBE_GET_CHANNEL_ACTIVITIES tool input.
 */
type YOUTUBE_GET_CHANNEL_ACTIVITIES_INPUT = {
  /**
   * Channel Id
   * @description The YouTube channel ID to retrieve activities for. Channel IDs typically start with 'UC'.
   */
  channelId?: string;
  /**
   * Max Results
   * @description Maximum number of activities to return.
   * @default 25
   */
  maxResults: number;
  /**
   * Page Token
   * @description Pagination token from a previous response to get the next page of results.
   */
  pageToken?: string;
  /**
   * Part
   * @description Comma-separated list of activity resource properties to include (e.g., 'snippet', 'contentDetails', 'id').
   * @default snippet,contentDetails
   */
  part: string;
  /**
   * Published After
   * @description Return activities published after this date-time (RFC 3339 format: YYYY-MM-DDTHH:MM:SSZ).
   */
  publishedAfter?: string;
  /**
   * Published Before
   * @description Return activities published before this date-time (RFC 3339 format: YYYY-MM-DDTHH:MM:SSZ).
   */
  publishedBefore?: string;
};

/**
 * Type of YOUTUBE's YOUTUBE_GET_CHANNEL_ACTIVITIES tool output.
 */
type YOUTUBE_GET_CHANNEL_ACTIVITIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Activities
       * @description List of channel activities including uploads, playlist additions, likes, etc.
       */
      activities: {
          [key: string]: unknown;
      }[];
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results, if available
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Total Results
       * @description Total number of activities available
       */
      totalResults: number;
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
 * Type of YOUTUBE's YOUTUBE_GET_CHANNEL_ID_BY_HANDLE tool input.
 */
type YOUTUBE_GET_CHANNEL_ID_BY_HANDLE_INPUT = {
  /**
   * Channel Handle
   * @description The YouTube channel handle (e.g., @Google) for which to retrieve the corresponding channel ID. This handle must start with an '@' symbol.
   */
  channel_handle?: string;
};

/**
 * Type of YOUTUBE's YOUTUBE_GET_CHANNEL_ID_BY_HANDLE tool output.
 */
type YOUTUBE_GET_CHANNEL_ID_BY_HANDLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description A list of channel resource items. If a channel is found for the given handle, this list typically contains a single item object with an 'id' field representing the YouTube Channel ID. The list will be empty if the handle is not found or is invalid.
       */
      items?: unknown[];
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
 * Type of YOUTUBE's YOUTUBE_GET_CHANNEL_STATISTICS tool input.
 */
type YOUTUBE_GET_CHANNEL_STATISTICS_INPUT = {
  /**
   * Id
   * @description Comma-separated list of YouTube channel IDs. Channel IDs typically start with 'UC'.
   */
  id?: string;
  /**
   * Part
   * @description Comma-separated list of channel resource properties to include. Use 'statistics' for subscriber count.
   * @default statistics
   */
  part: string;
};

/**
 * Type of YOUTUBE's YOUTUBE_GET_CHANNEL_STATISTICS tool output.
 */
type YOUTUBE_GET_CHANNEL_STATISTICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Channels
       * @description List of channel data including statistics like subscriber count, view count, and video count
       */
      channels: {
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
 * Type of YOUTUBE's YOUTUBE_LIST_CAPTION_TRACK tool input.
 */
type YOUTUBE_LIST_CAPTION_TRACK_INPUT = {
  /**
   * Part
   * @description Specifies a comma-separated list of one or more caption resource parts that the API response will include. Valid parts are 'id' and 'snippet'.
   * @default snippet
   */
  part: string;
  /**
   * Video Id
   * @description The YouTube video ID for which the API should return caption tracks.
   */
  videoId?: string;
};

/**
 * Type of YOUTUBE's YOUTUBE_LIST_CAPTION_TRACK tool output.
 */
type YOUTUBE_LIST_CAPTION_TRACK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Etag
       * @description The ETag of this resource, an opaque identifier that reflects changes to the resource.
       */
      etag: string;
      /**
       * Items
       * @description A list of caption tracks that are available for the specified video. Each item in the list represents a single caption track.
       */
      items: {
          [key: string]: unknown;
      }[];
      /**
       * Kind
       * @description Identifies the resource as a YouTube caption list response. Value is fixed to 'youtube#captionListResponse'.
       * @default youtube#captionListResponse
       */
      kind: string;
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
 * Type of YOUTUBE's YOUTUBE_LIST_CHANNEL_VIDEOS tool input.
 */
type YOUTUBE_LIST_CHANNEL_VIDEOS_INPUT = {
  /**
   * Channel Id
   * @description The unique ID of the YouTube channel for which videos are to be retrieved.
   */
  channelId?: string;
  /**
   * Max Results
   * @description The maximum number of videos to return per page.
   * @default 5
   */
  maxResults: number;
  /**
   * Page Token
   * @description Token for pagination; use `nextPageToken` from a previous response for the next page, or `prevPageToken` for the previous page.
   */
  pageToken?: string;
  /**
   * Part
   * @description Specifies `search` resource properties to include; it must be `snippet` for this action. The `snippet` includes basic video details like ID, title, description, and thumbnails.
   * @default snippet
   */
  part: string;
};

/**
 * Type of YOUTUBE's YOUTUBE_LIST_CHANNEL_VIDEOS tool output.
 */
type YOUTUBE_LIST_CHANNEL_VIDEOS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The raw JSON response from the YouTube Data API, containing video items (details based on the `part` parameter, typically `snippet`) and pagination tokens (e.g., `nextPageToken`, `prevPageToken`) if applicable.
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
 * Type of YOUTUBE's YOUTUBE_LIST_USER_PLAYLISTS tool input.
 */
type YOUTUBE_LIST_USER_PLAYLISTS_INPUT = {
  /**
   * Max Results
   * @description Maximum number of playlists to return.
   * @default 5
   */
  maxResults: number;
  /**
   * Page Token
   * @description Token for pagination to retrieve a specific page of results.
   */
  pageToken?: string;
  /**
   * Part
   * @description Specifies a comma-separated list of one or more playlist resource properties to include in the response. Common values are 'snippet', 'id', and 'contentDetails'.
   * @default snippet
   */
  part: string;
};

/**
 * Type of YOUTUBE's YOUTUBE_LIST_USER_PLAYLISTS tool output.
 */
type YOUTUBE_LIST_USER_PLAYLISTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The raw JSON response from the YouTube API, containing the list of the user's playlists and related metadata.
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
 * Type of YOUTUBE's YOUTUBE_LIST_USER_SUBSCRIPTIONS tool input.
 */
type YOUTUBE_LIST_USER_SUBSCRIPTIONS_INPUT = {
  /**
   * Max Results
   * @description Maximum number of subscription items to return per page.
   * @default 5
   */
  maxResults: number;
  /**
   * Page Token
   * @description Token for a specific page of results, obtained from a previous response. Omit for the first page.
   */
  pageToken?: string;
  /**
   * Part
   * @description Specifies the comma-separated subscription resource parts to include. Valid parts are `id`, `snippet`, `contentDetails`, and `subscriberSnippet`.
   * @default snippet,contentDetails
   */
  part: string;
};

/**
 * Type of YOUTUBE's YOUTUBE_LIST_USER_SUBSCRIPTIONS tool output.
 */
type YOUTUBE_LIST_USER_SUBSCRIPTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The raw JSON response from the YouTube API, containing the list of subscriptions for the authenticated user and related metadata, such as pagination tokens and page information.
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
 * Type of YOUTUBE's YOUTUBE_LOAD_CAPTIONS tool input.
 */
type YOUTUBE_LOAD_CAPTIONS_INPUT = {
  /**
   * Id
   * @description Unique YouTube-assigned ID of the caption track to download.
   */
  id?: string;
  /**
   * Tfmt
   * @description Desired format for the caption track. Supported formats: 'srt' (SubRip), 'sbv' (SubViewer), 'vtt' (WebVTT).
   * @default srt
   */
  tfmt: string;
};

/**
 * Type of YOUTUBE's YOUTUBE_LOAD_CAPTIONS tool output.
 */
type YOUTUBE_LOAD_CAPTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Captions Text
       * @description The content of the downloaded caption track in the specified format.
       */
      captions_text: string;
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
 * Type of YOUTUBE's YOUTUBE_SEARCH_YOU_TUBE tool input.
 */
type YOUTUBE_SEARCH_YOU_TUBE_INPUT = {
  /**
   * Max Results
   * @description Maximum number of items to return per page.
   * @default 5
   */
  maxResults: number;
  /**
   * Page Token
   * @description Pagination token from a previous response's 'nextPageToken' or 'prevPageToken', used to retrieve a specific page of results.
   */
  pageToken?: string;
  /**
   * Part
   * @description Comma-separated list of search resource properties (e.g., 'id', 'snippet') to include in the API response.
   * @default snippet
   */
  part: string;
  /**
   * Q
   * @description Search query term. Supports: - Basic text: 'machine learning' - Exact phrases: '"exact phrase"' - Exclusions: 'python -snake' - Multiple terms: 'AI OR ML' - Channel search: '@channelhandle' or channel name
   */
  q?: string;
  /**
   * Type
   * @description Restricts search to 'video', 'channel', or 'playlist'; comma-separate for multiple types (e.g., 'video,channel').
   * @default video
   */
  type: string;
};

/**
 * Type of YOUTUBE's YOUTUBE_SEARCH_YOU_TUBE tool output.
 */
type YOUTUBE_SEARCH_YOU_TUBE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from the YouTube Search API, including search results (items), details for each item based on the 'part' parameter, and pagination tokens (e.g., 'nextPageToken').
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
 * Type of YOUTUBE's YOUTUBE_SUBSCRIBE_CHANNEL tool input.
 */
type YOUTUBE_SUBSCRIBE_CHANNEL_INPUT = {
  /**
   * Channel Id
   * @description Unique identifier (ID) of the YouTube channel to subscribe to (typically starts with 'UC').
   */
  channelId?: string;
};

/**
 * Type of YOUTUBE's YOUTUBE_SUBSCRIBE_CHANNEL tool output.
 */
type YOUTUBE_SUBSCRIBE_CHANNEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description API response from YouTube for the subscription, including details of the new subscription resource like 'kind', 'etag', 'id', and 'snippet'.
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
 * Type of YOUTUBE's YOUTUBE_UPDATE_THUMBNAIL tool input.
 */
type YOUTUBE_UPDATE_THUMBNAIL_INPUT = {
  /**
   * Thumbnail Url
   * Format: uri
   * @description Publicly accessible URL of the new thumbnail image. Must be JPG, GIF, or PNG; under 2MB. Recommended: 16:9 aspect ratio, 1280x720 resolution (minimum 640px width).
   */
  thumbnailUrl?: string;
  /**
   * Video Id
   * @description Identifier of the YouTube video for which to update the thumbnail.
   */
  videoId?: string;
};

/**
 * Type of YOUTUBE's YOUTUBE_UPDATE_THUMBNAIL tool output.
 */
type YOUTUBE_UPDATE_THUMBNAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Data from the YouTube API after the update attempt, typically including new thumbnail details if successful.
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
 * Type of YOUTUBE's YOUTUBE_UPDATE_VIDEO tool input.
 */
type YOUTUBE_UPDATE_VIDEO_INPUT = {
  /**
   * Category Id
   * @description New YouTube category ID. No change if omitted or `None`.
   * @default null
   */
  categoryId: string | null;
  /**
   * Description
   * @description New video description. No change if omitted or `None`.
   * @default null
   */
  description: string | null;
  /**
   * Privacy Status
   * @description New privacy status ('public', 'private', or 'unlisted'). No change if omitted or `None`.
   * @default null
   */
  privacyStatus: string | null;
  /**
   * Tags
   * @description New tags, replacing all existing. An empty list removes all. No change if omitted or `None`.
   * @default null
   */
  tags: string[] | null;
  /**
   * Title
   * @description New video title. No change if omitted or `None`.
   * @default null
   */
  title: string | null;
  /**
   * Video Id
   * @description The video's unique YouTube ID, typically found in its URL.
   */
  videoId?: string;
};

/**
 * Type of YOUTUBE's YOUTUBE_UPDATE_VIDEO tool output.
 */
type YOUTUBE_UPDATE_VIDEO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Complete API response from YouTube, including details of the updated video resource if successful.
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
 * Type of YOUTUBE's YOUTUBE_UPLOAD_VIDEO tool input.
 */
type YOUTUBE_UPLOAD_VIDEO_INPUT = {
  /**
   * Category Id
   * @description YouTube category ID (e.g., '22' for People & Blogs). See YouTube Data API docs for a full list of category IDs.
   */
  categoryId?: string;
  /**
   * Description
   * @description Detailed description of the video content, optionally including keywords and context.
   */
  description?: string;
  /**
   * Privacy Status
   * @description Privacy status: 'public', 'private' (uploader/specified users only), or 'unlisted' (link accessible, not publicly listed).
   */
  privacyStatus?: string;
  /**
   * Tags
   * @description List of keyword tags (strings) for the video, used to improve discoverability.
   */
  tags?: unknown[];
  /**
   * Title
   * @description The title for the video.
   */
  title?: string;
  /**
   * Video File Path
   * @description Local file path (absolute or relative) of the video to be uploaded.
   */
  videoFilePath?: string;
};

/**
 * Type of YOUTUBE's YOUTUBE_UPLOAD_VIDEO tool output.
 */
type YOUTUBE_UPLOAD_VIDEO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Details from the YouTube API post-upload, typically including video ID, snippet, and status.
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
 * Type of YOUTUBE's YOUTUBE_VIDEO_DETAILS tool input.
 */
type YOUTUBE_VIDEO_DETAILS_INPUT = {
  /**
   * Id
   * @description The YouTube video ID (typically an 11-character string) for which details are to be retrieved.
   */
  id?: string;
  /**
   * Part
   * @description Comma-separated list of video resource parts that the API response will include. Valid parts: 'snippet' (title, description, thumbnails), 'contentDetails' (duration, definition, dimension), 'statistics' (view count, like count, comment count), 'status' (upload status, privacy status), 'player' (embed HTML), 'topicDetails' (associated topics), 'recordingDetails' (recording location and date), 'liveStreamingDetails' (live broadcast details), and 'localizations' (localized metadata).
   * @default snippet,contentDetails,statistics
   */
  part: string;
};

/**
 * Type of YOUTUBE's YOUTUBE_VIDEO_DETAILS tool output.
 */
type YOUTUBE_VIDEO_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the raw JSON response from the YouTube API, including the requested video resource parts.
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
 * Type map of all available tool input types for toolkit "YOUTUBE".
 */
export type YOUTUBE_TOOL_INPUTS = {
  GET_CHANNEL_ACTIVITIES: YOUTUBE_GET_CHANNEL_ACTIVITIES_INPUT
  GET_CHANNEL_ID_BY_HANDLE: YOUTUBE_GET_CHANNEL_ID_BY_HANDLE_INPUT
  GET_CHANNEL_STATISTICS: YOUTUBE_GET_CHANNEL_STATISTICS_INPUT
  LIST_CAPTION_TRACK: YOUTUBE_LIST_CAPTION_TRACK_INPUT
  LIST_CHANNEL_VIDEOS: YOUTUBE_LIST_CHANNEL_VIDEOS_INPUT
  LIST_USER_PLAYLISTS: YOUTUBE_LIST_USER_PLAYLISTS_INPUT
  LIST_USER_SUBSCRIPTIONS: YOUTUBE_LIST_USER_SUBSCRIPTIONS_INPUT
  LOAD_CAPTIONS: YOUTUBE_LOAD_CAPTIONS_INPUT
  SEARCH_YOU_TUBE: YOUTUBE_SEARCH_YOU_TUBE_INPUT
  SUBSCRIBE_CHANNEL: YOUTUBE_SUBSCRIBE_CHANNEL_INPUT
  UPDATE_THUMBNAIL: YOUTUBE_UPDATE_THUMBNAIL_INPUT
  UPDATE_VIDEO: YOUTUBE_UPDATE_VIDEO_INPUT
  UPLOAD_VIDEO: YOUTUBE_UPLOAD_VIDEO_INPUT
  VIDEO_DETAILS: YOUTUBE_VIDEO_DETAILS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "YOUTUBE".
 */
export type YOUTUBE_TOOL_OUTPUTS = {
  GET_CHANNEL_ACTIVITIES: YOUTUBE_GET_CHANNEL_ACTIVITIES_OUTPUT
  GET_CHANNEL_ID_BY_HANDLE: YOUTUBE_GET_CHANNEL_ID_BY_HANDLE_OUTPUT
  GET_CHANNEL_STATISTICS: YOUTUBE_GET_CHANNEL_STATISTICS_OUTPUT
  LIST_CAPTION_TRACK: YOUTUBE_LIST_CAPTION_TRACK_OUTPUT
  LIST_CHANNEL_VIDEOS: YOUTUBE_LIST_CHANNEL_VIDEOS_OUTPUT
  LIST_USER_PLAYLISTS: YOUTUBE_LIST_USER_PLAYLISTS_OUTPUT
  LIST_USER_SUBSCRIPTIONS: YOUTUBE_LIST_USER_SUBSCRIPTIONS_OUTPUT
  LOAD_CAPTIONS: YOUTUBE_LOAD_CAPTIONS_OUTPUT
  SEARCH_YOU_TUBE: YOUTUBE_SEARCH_YOU_TUBE_OUTPUT
  SUBSCRIBE_CHANNEL: YOUTUBE_SUBSCRIBE_CHANNEL_OUTPUT
  UPDATE_THUMBNAIL: YOUTUBE_UPDATE_THUMBNAIL_OUTPUT
  UPDATE_VIDEO: YOUTUBE_UPDATE_VIDEO_OUTPUT
  UPLOAD_VIDEO: YOUTUBE_UPLOAD_VIDEO_OUTPUT
  VIDEO_DETAILS: YOUTUBE_VIDEO_DETAILS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Type of YOUTUBE's NEW_ACTIVITY_TRIGGER trigger payload.
 */
type YOUTUBE_NEW_ACTIVITY_TRIGGER_PAYLOAD = {
  /**
   * Activity
   * @description Activity details
   */
  activity?: {
      [key: string]: unknown;
  };
  /**
   * Event Type
   * @description Type of YouTube activity event
   * @default new_activity
   */
  event_type: string;
};

/**
 * Type of YOUTUBE's NEW_PLAYLIST_ITEM_TRIGGER trigger payload.
 */
type YOUTUBE_NEW_PLAYLIST_ITEM_TRIGGER_PAYLOAD = {
  /**
   * Event Type
   * @description Type of YouTube playlist item event
   * @default new_playlist_item
   */
  event_type: string;
  /**
   * Item
   * @description Playlist item details
   */
  item?: {
      [key: string]: unknown;
  };
};

/**
 * Type of YOUTUBE's NEW_PLAYLIST_TRIGGER trigger payload.
 */
type YOUTUBE_NEW_PLAYLIST_TRIGGER_PAYLOAD = {
  /**
   * Event Type
   * @description Type of YouTube playlist event
   * @default new_playlist
   */
  event_type: string;
  /**
   * Playlist
   * @description Playlist details
   */
  playlist?: {
      [key: string]: unknown;
  };
};

/**
 * Type of YOUTUBE's NEW_SUBSCRIPTION_TRIGGER trigger payload.
 */
type YOUTUBE_NEW_SUBSCRIPTION_TRIGGER_PAYLOAD = {
  /**
   * Event Type
   * @description Type of YouTube subscription event
   * @default new_subscription
   */
  event_type: string;
  /**
   * Subscription
   * @description Subscription details
   */
  subscription?: {
      [key: string]: unknown;
  };
};

/**
 * Map of Composio's YOUTUBE toolkit.
 */
export const YOUTUBE = {
  slug: "youtube",
  tools: {
    /**
     * Gets recent activities from a youtube channel including video uploads, playlist additions, likes, and other channel events.
     */
    GET_CHANNEL_ACTIVITIES: "YOUTUBE_GET_CHANNEL_ACTIVITIES",
    /**
     * Retrieves the youtube channel id for a specific youtube channel handle.
     */
    GET_CHANNEL_ID_BY_HANDLE: "YOUTUBE_GET_CHANNEL_ID_BY_HANDLE",
    /**
     * Gets detailed statistics for youtube channels including subscriber counts, view counts, and video counts.
     */
    GET_CHANNEL_STATISTICS: "YOUTUBE_GET_CHANNEL_STATISTICS",
    /**
     * Retrieves a list of caption tracks for a youtube video, returning an empty list if no captions exist or failing if the video id is invalid or not found.
     */
    LIST_CAPTION_TRACK: "YOUTUBE_LIST_CAPTION_TRACK",
    /**
     * Lists videos from a specified youtube channel, ensuring results are of `type: 'video'`.
     */
    LIST_CHANNEL_VIDEOS: "YOUTUBE_LIST_CHANNEL_VIDEOS",
    /**
     * Retrieves playlists owned by the authenticated user, implicitly using mine=true.
     */
    LIST_USER_PLAYLISTS: "YOUTUBE_LIST_USER_PLAYLISTS",
    /**
     * Retrieves the authenticated user's youtube channel subscriptions, allowing specification of response parts and pagination.
     */
    LIST_USER_SUBSCRIPTIONS: "YOUTUBE_LIST_USER_SUBSCRIPTIONS",
    /**
     * Downloads a specific youtube caption track, which must be owned by the authenticated user, and returns its content as text.
     */
    LOAD_CAPTIONS: "YOUTUBE_LOAD_CAPTIONS",
    /**
     * Searches youtube for videos, channels, or playlists using a query term, returning the raw api response.
     */
    SEARCH_YOU_TUBE: "YOUTUBE_SEARCH_YOU_TUBE",
    /**
     * Subscribes the authenticated user to a specified youtube channel, identified by its unique `channelid` which must be valid and existing.
     */
    SUBSCRIBE_CHANNEL: "YOUTUBE_SUBSCRIBE_CHANNEL",
    /**
     * Sets the custom thumbnail for a youtube video using an image from thumbnailurl; the authenticated user must have permission to edit the video.
     */
    UPDATE_THUMBNAIL: "YOUTUBE_UPDATE_THUMBNAIL",
    /**
     * Updates metadata for a youtube video identified by videoid, which must exist; an empty list for tags removes all existing tags.
     */
    UPDATE_VIDEO: "YOUTUBE_UPDATE_VIDEO",
    /**
     * Uploads a video from a local file path to a youtube channel; the video file must be in a youtube-supported format.
     */
    UPLOAD_VIDEO: "YOUTUBE_UPLOAD_VIDEO",
    /**
     * Retrieves specified information parts (e.g., snippet, contentdetails, statistics) for a youtube video, identified by its id.
     */
    VIDEO_DETAILS: "YOUTUBE_VIDEO_DETAILS",
  },
  triggerTypes: {
    /**
     * Triggers when a new activity is detected on a YouTube channel.
     */
    NEW_ACTIVITY_TRIGGER: "YOUTUBE_NEW_ACTIVITY_TRIGGER",
    /**
     * Triggers when a new item is added to a YouTube playlist.
     */
    NEW_PLAYLIST_ITEM_TRIGGER: "YOUTUBE_NEW_PLAYLIST_ITEM_TRIGGER",
    /**
     * Triggers when a new playlist is added to a YouTube channel.
     */
    NEW_PLAYLIST_TRIGGER: "YOUTUBE_NEW_PLAYLIST_TRIGGER",
    /**
     * Triggers when a new channel is subscribed.
     */
    NEW_SUBSCRIPTION_TRIGGER: "YOUTUBE_NEW_SUBSCRIPTION_TRIGGER",
  },
}

/**
 * Type map of all available trigger payloads for toolkit "YOUTUBE".
 */
export type YOUTUBE_TRIGGER_PAYLOADS = {
  NEW_ACTIVITY_TRIGGER: YOUTUBE_NEW_ACTIVITY_TRIGGER_PAYLOAD
  NEW_PLAYLIST_ITEM_TRIGGER: YOUTUBE_NEW_PLAYLIST_ITEM_TRIGGER_PAYLOAD
  NEW_PLAYLIST_TRIGGER: YOUTUBE_NEW_PLAYLIST_TRIGGER_PAYLOAD
  NEW_SUBSCRIPTION_TRIGGER: YOUTUBE_NEW_SUBSCRIPTION_TRIGGER_PAYLOAD
}

/**
 * Type map of all available trigger events for toolkit "YOUTUBE".
 */
export type YOUTUBE_TRIGGER_EVENTS = {
  NEW_ACTIVITY_TRIGGER: TriggerEvent<YOUTUBE_NEW_ACTIVITY_TRIGGER_PAYLOAD>
  NEW_PLAYLIST_ITEM_TRIGGER: TriggerEvent<YOUTUBE_NEW_PLAYLIST_ITEM_TRIGGER_PAYLOAD>
  NEW_PLAYLIST_TRIGGER: TriggerEvent<YOUTUBE_NEW_PLAYLIST_TRIGGER_PAYLOAD>
  NEW_SUBSCRIPTION_TRIGGER: TriggerEvent<YOUTUBE_NEW_SUBSCRIPTION_TRIGGER_PAYLOAD>
}
