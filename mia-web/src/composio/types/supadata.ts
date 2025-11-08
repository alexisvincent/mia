// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SUPADATA's SUPADATA_GET_WEB_MAP tool input.
 */
type SUPADATA_GET_WEB_MAP_INPUT = {
  /**
   * Url
   * @description The URL of the website to retrieve all URLs from.
   */
  url?: string;
};

/**
 * Type of SUPADATA's SUPADATA_GET_WEB_MAP tool output.
 */
type SUPADATA_GET_WEB_MAP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of URLs found
       */
      count: number;
      /**
       * Timestamp
       * @description ISO 8601 timestamp when the map was generated
       */
      timestamp: string;
      /**
       * Urls
       * @description List of URLs found on the website
       */
      urls: string[];
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
 * Type of SUPADATA's SUPADATA_GET_WEB_SCRAPE tool input.
 */
type SUPADATA_GET_WEB_SCRAPE_INPUT = {
  /**
   * Css Selector
   * @description CSS selector to extract specific content
   * @default null
   */
  css_selector: string | null;
  /**
   * Custom Headers
   * @description Custom HTTP headers to send while scraping
   * @default null
   */
  custom_headers: {
      [key: string]: string;
  } | null;
  /**
   * Render Js
   * @description If true, render JavaScript before scraping
   * @default false
   */
  render_js: boolean | null;
  /**
   * Screenshot
   * @description If true, return screenshot in response
   * @default false
   */
  screenshot: boolean | null;
  /**
   * Url
   * @description The URL of the page to scrape
   */
  url?: string;
  /**
   * Wait For
   * @description Wait for presence of this CSS selector before scraping
   * @default null
   */
  wait_for: string | null;
  /**
   * Wait Time
   * @description Time in milliseconds to wait before scraping
   * @default null
   */
  wait_time: number | null;
};

/**
 * Type of SUPADATA's SUPADATA_GET_WEB_SCRAPE tool output.
 */
type SUPADATA_GET_WEB_SCRAPE_OUTPUT = {
  /**
   * Data
   * @description Extracted data if CSS selector was used
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Html
   * @description Raw HTML content of the page
   */
  html?: string;
  /**
   * Screenshot
   * @description Base64-encoded screenshot if requested
   * @default null
   */
  screenshot: string | null;
  /**
   * Status
   * @description Status of the scrape (e.g., 'success', 'error')
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Text
   * @description Extracted text content
   */
  text?: string;
  /**
   * Url
   * @description The input URL that was scraped
   */
  url?: string;
};

/**
 * Type of SUPADATA's SUPADATA_GET_YOUTUBE_CHANNEL tool input.
 */
type SUPADATA_GET_YOUTUBE_CHANNEL_INPUT = {
  /**
   * Id
   * @description The YouTube channel ID.
   */
  id?: string;
  /**
   * Part
   * @description Comma-separated list of resource parts to include. Allowed values: 'id', 'snippet', 'contentDetails', 'statistics', 'topicDetails', 'brandingSettings'.
   * @default snippet,statistics,brandingSettings
   */
  part: string | null;
};

/**
 * Type of SUPADATA's SUPADATA_GET_YOUTUBE_CHANNEL tool output.
 */
type SUPADATA_GET_YOUTUBE_CHANNEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * BrandingSettings
       * @description Branding and appearance settings of the channel.
       * @default null
       */
      brandingSettings: {
          /**
           * Channel
           * @description Branding channel settings.
           */
          channel: {
              /**
               * Country
               * @description Country code.
               * @default null
               */
              country: string | null;
              /**
               * Description
               * @description Channel description for branding settings.
               * @default null
               */
              description: string | null;
              /**
               * Keywords
               * @description Keywords for the channel.
               * @default null
               */
              keywords: string | null;
              /**
               * Title
               * @description Channel title for branding settings.
               * @default null
               */
              title: string | null;
              /**
               * Unsubscribed Trailer
               * @description Video ID of the trailer.
               * @default null
               */
              unsubscribedTrailer: string | null;
          };
          /**
           * Image
           * @description Branding image settings.
           */
          image: {
              /**
               * Banner External Url
               * @description External banner image URL.
               * @default null
               */
              bannerExternalUrl: string | null;
              /**
               * Banner Image Url
               * @description Banner image URL.
               * @default null
               */
              bannerImageUrl: string | null;
          };
      } | null;
      /**
       * ContentDetails
       * @description Content details about the channel.
       * @default null
       */
      contentDetails: {
          /**
           * Related Playlists
           * @description Related playlists IDs.
           */
          relatedPlaylists: {
              /**
               * Uploads
               * @description Playlist ID for uploaded videos.
               */
              uploads: string;
              /**
               * Watch History
               * @description Playlist ID for watch history.
               * @default null
               */
              watchHistory: string | null;
              /**
               * Watch Later
               * @description Playlist ID for watch later.
               * @default null
               */
              watchLater: string | null;
          };
      } | null;
      /**
       * Id
       * @description Channel ID.
       */
      id: string;
      /**
       * Snippet
       * @description Basic details about the channel.
       */
      snippet: {
          /**
           * Country
           * @description Country code.
           * @default null
           */
          country: string | null;
          /**
           * Custom Url
           * @description Custom URL of the channel.
           * @default null
           */
          customUrl: string | null;
          /**
           * Description
           * @description Channel description.
           */
          description: string;
          /**
           * Localized
           * @description Localized metadata.
           */
          localized: {
              /**
               * Description
               * @description Localized description.
               */
              description: string;
              /**
               * Title
               * @description Localized title.
               */
              title: string;
          };
          /**
           * Published At
           * @description Date and time when the channel was created.
           */
          publishedAt: string;
          /**
           * Thumbnails
           * @description Thumbnails for the channel.
           */
          thumbnails: {
              /**
               * Default
               * @description Default thumbnail.
               */
              default: {
                  /**
                   * Height
                   * @description Thumbnail height in pixels.
                   * @default null
                   */
                  height: number | null;
                  /**
                   * Url
                   * @description Thumbnail URL.
                   */
                  url: string;
                  /**
                   * Width
                   * @description Thumbnail width in pixels.
                   * @default null
                   */
                  width: number | null;
              };
              /**
               * High
               * @description High resolution thumbnail.
               */
              high: {
                  /**
                   * Height
                   * @description Thumbnail height in pixels.
                   * @default null
                   */
                  height: number | null;
                  /**
                   * Url
                   * @description Thumbnail URL.
                   */
                  url: string;
                  /**
                   * Width
                   * @description Thumbnail width in pixels.
                   * @default null
                   */
                  width: number | null;
              };
              /**
               * Thumbnail
               * @description Max resolution thumbnail.
               * @default null
               */
              maxres: {
                  /**
                   * Height
                   * @description Thumbnail height in pixels.
                   * @default null
                   */
                  height: number | null;
                  /**
                   * Url
                   * @description Thumbnail URL.
                   */
                  url: string;
                  /**
                   * Width
                   * @description Thumbnail width in pixels.
                   * @default null
                   */
                  width: number | null;
              } | null;
              /**
               * Medium
               * @description Medium resolution thumbnail.
               */
              medium: {
                  /**
                   * Height
                   * @description Thumbnail height in pixels.
                   * @default null
                   */
                  height: number | null;
                  /**
                   * Url
                   * @description Thumbnail URL.
                   */
                  url: string;
                  /**
                   * Width
                   * @description Thumbnail width in pixels.
                   * @default null
                   */
                  width: number | null;
              };
              /**
               * Thumbnail
               * @description Standard resolution thumbnail.
               * @default null
               */
              standard: {
                  /**
                   * Height
                   * @description Thumbnail height in pixels.
                   * @default null
                   */
                  height: number | null;
                  /**
                   * Url
                   * @description Thumbnail URL.
                   */
                  url: string;
                  /**
                   * Width
                   * @description Thumbnail width in pixels.
                   * @default null
                   */
                  width: number | null;
              } | null;
          };
          /**
           * Title
           * @description Channel title.
           */
          title: string;
      };
      /**
       * Statistics
       * @description Statistic details about the channel.
       */
      statistics: {
          /**
           * Hidden Subscriber Count
           * @description Whether the subscriber count is hidden.
           * @default null
           */
          hiddenSubscriberCount: boolean | null;
          /**
           * Subscriber Count
           * @description The number of subscribers this channel has.
           */
          subscriberCount: string;
          /**
           * Video Count
           * @description The number of videos uploaded to this channel.
           */
          videoCount: string;
          /**
           * View Count
           * @description The number of views this channel has.
           */
          viewCount: string;
      };
      /**
       * TopicDetails
       * @description Topic details associated with the channel.
       * @default null
       */
      topicDetails: {
          /**
           * Topic Categories
           * @description List of topic category URLs.
           */
          topicCategories: string[];
          /**
           * Topic Ids
           * @description List of topic IDs associated with the channel.
           */
          topicIds: string[];
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
 * Type of SUPADATA's SUPADATA_GET_YOUTUBE_CHANNEL_VIDEOS tool input.
 */
type SUPADATA_GET_YOUTUBE_CHANNEL_VIDEOS_INPUT = {
  /**
   * Channel Id
   * @description The unique ID of the YouTube channel
   */
  channel_id?: string;
  /**
   * Limit
   * @description Maximum number of videos to return, between 1 and 50
   * @default 10
   */
  limit: number;
  /**
   * Page Token
   * @description Token for pagination to retrieve the next set of results
   * @default null
   */
  page_token: string | null;
};

/**
 * Type of SUPADATA's SUPADATA_GET_YOUTUBE_CHANNEL_VIDEOS tool output.
 */
type SUPADATA_GET_YOUTUBE_CHANNEL_VIDEOS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page Token
       * @description Token to fetch the next page of results
       * @default null
       */
      next_page_token: string | null;
      /**
       * Videos
       * @description List of videos returned by the channel
       */
      videos: {
          /**
           * Comment Count
           * @description Number of comments
           */
          comment_count: number;
          /**
           * Description
           * @description Description of the video
           */
          description: string;
          /**
           * Like Count
           * @description Number of likes
           */
          like_count: number;
          /**
           * Published At
           * @description ISO8601 date the video was published
           */
          published_at: string;
          /**
           * Thumbnail Url
           * @description URL of the video thumbnail
           */
          thumbnail_url: string;
          /**
           * Title
           * @description Title of the video
           */
          title: string;
          /**
           * Video Id
           * @description Unique video identifier
           */
          video_id: string;
          /**
           * View Count
           * @description Number of views
           */
          view_count: number;
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
 * Type of SUPADATA's SUPADATA_GET_YOUTUBE_PLAYLIST tool input.
 */
type SUPADATA_GET_YOUTUBE_PLAYLIST_INPUT = {
  /**
   * Max Results
   * @description Number of playlist items to return. Default is 50, max is 100.
   * @default 50
   */
  maxResults: number;
  /**
   * Page Token
   * @description Token for retrieving the next set of results.
   * @default null
   */
  pageToken: string | null;
  /**
   * Part
   * @description Comma-separated list of playlist resource parts to include (e.g., 'snippet,contentDetails').
   * @default snippet,contentDetails
   */
  part: string;
  /**
   * Playlist Id
   * @description The unique YouTube playlist ID.
   */
  playlistId?: string;
};

/**
 * Type of SUPADATA's SUPADATA_GET_YOUTUBE_PLAYLIST tool output.
 */
type SUPADATA_GET_YOUTUBE_PLAYLIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Etag */
      etag: string;
      /** Items */
      items: {
          /** Content Details */
          contentDetails: {
              /** Video Id */
              videoId: string;
              /**
               * Video Published At
               * @default null
               */
              videoPublishedAt: string | null;
          };
          /** Etag */
          etag: string;
          /** Id */
          id: string;
          /** Kind */
          kind: string;
          /** Snippet */
          snippet: {
              /** Channel Id */
              channelId: string;
              /** Channel Title */
              channelTitle: string;
              /** Description */
              description: string;
              /**
               * Playlist Id
               * @default null
               */
              playlistId: string | null;
              /** Position */
              position: number | null;
              /** Published At */
              publishedAt: string;
              /** Resource Id */
              resourceId: {
                  [key: string]: unknown;
              };
              /** Thumbnails */
              thumbnails: {
                  [key: string]: unknown;
              };
              /** Title */
              title: string;
          };
      }[];
      /** Kind */
      kind: string;
      /**
       * Next Page Token
       * @default null
       */
      nextPageToken: string | null;
      /** Page Info */
      pageInfo: {
          /** Results Per Page */
          resultsPerPage: number;
          /** Total Results */
          totalResults: number;
      };
      /**
       * Prev Page Token
       * @default null
       */
      prevPageToken: string | null;
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
 * Type of SUPADATA's SUPADATA_GET_YOUTUBE_PLAYLIST_VIDEOS tool input.
 */
type SUPADATA_GET_YOUTUBE_PLAYLIST_VIDEOS_INPUT = {
  /**
   * Limit
   * @description Maximum number of videos to return
   * @default null
   */
  limit: number | null;
  /**
   * Page Token
   * @description Token for pagination to retrieve the next set of results
   * @default null
   */
  pageToken: string | null;
  /**
   * Playlist Id
   * @description YouTube playlist ID to fetch videos from
   */
  playlistId?: string;
};

/**
 * Type of SUPADATA's SUPADATA_GET_YOUTUBE_PLAYLIST_VIDEOS tool output.
 */
type SUPADATA_GET_YOUTUBE_PLAYLIST_VIDEOS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of videos in the playlist
       */
      items: {
          /**
           * Description
           * @description Video description
           */
          description: string;
          /**
           * Id
           * @description YouTube video ID
           */
          id: string;
          /**
           * Published At
           * @description Publication datetime in ISO format
           */
          publishedAt: string;
          /**
           * Thumbnails
           * @description Video thumbnails collection
           */
          thumbnails: {
              /**
               * Default
               * @description Default thumbnail
               */
              default: {
                  /**
                   * Height
                   * @description Thumbnail height in pixels
                   * @default null
                   */
                  height: number | null;
                  /**
                   * Url
                   * @description Thumbnail URL
                   */
                  url: string;
                  /**
                   * Width
                   * @description Thumbnail width in pixels
                   * @default null
                   */
                  width: number | null;
              };
              /**
               * Thumbnail
               * @description High quality thumbnail
               * @default null
               */
              high: {
                  /**
                   * Height
                   * @description Thumbnail height in pixels
                   * @default null
                   */
                  height: number | null;
                  /**
                   * Url
                   * @description Thumbnail URL
                   */
                  url: string;
                  /**
                   * Width
                   * @description Thumbnail width in pixels
                   * @default null
                   */
                  width: number | null;
              } | null;
              /**
               * Thumbnail
               * @description Medium quality thumbnail
               * @default null
               */
              medium: {
                  /**
                   * Height
                   * @description Thumbnail height in pixels
                   * @default null
                   */
                  height: number | null;
                  /**
                   * Url
                   * @description Thumbnail URL
                   */
                  url: string;
                  /**
                   * Width
                   * @description Thumbnail width in pixels
                   * @default null
                   */
                  width: number | null;
              } | null;
          };
          /**
           * Title
           * @description Video title
           */
          title: string;
      }[];
      /**
       * Next Page Token
       * @description Token for next page of results
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Page Info
       * @description Pagination details
       */
      pageInfo: {
          /**
           * Results Per Page
           * @description Number of videos returned per page
           */
          resultsPerPage: number;
          /**
           * Total Results
           * @description Total number of videos in the playlist
           */
          totalResults: number;
      };
      /**
       * Prev Page Token
       * @description Token for previous page of results
       * @default null
       */
      prevPageToken: string | null;
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
 * Type of SUPADATA's SUPADATA_GET_YOUTUBE_VIDEO tool input.
 */
type SUPADATA_GET_YOUTUBE_VIDEO_INPUT = {
  /**
   * Video Id
   * @description The YouTube video ID to fetch metadata for.
   */
  video_id?: string;
};

/**
 * Type of SUPADATA's SUPADATA_GET_YOUTUBE_VIDEO tool output.
 */
type SUPADATA_GET_YOUTUBE_VIDEO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Channel Id
       * @description Channel ID of the video.
       */
      channelId: string;
      /**
       * Channel Title
       * @description Channel title of the video.
       */
      channelTitle: string;
      /**
       * Comment Count
       * @description Number of comments.
       */
      commentCount: number;
      /**
       * Description
       * @description Description of the video.
       */
      description: string;
      /**
       * Dislike Count
       * @description Number of dislikes, if available.
       * @default null
       */
      dislikeCount: number | null;
      /**
       * Duration
       * @description Duration of the video in ISO 8601 format.
       */
      duration: string;
      /**
       * Like Count
       * @description Number of likes.
       */
      likeCount: number;
      /**
       * Live Broadcast Content
       * @description Live broadcast status: 'live', 'upcoming', or 'none'.
       */
      liveBroadcastContent: string;
      /**
       * Published At
       * @description ISO 8601 date and time when the video was published.
       */
      publishedAt: string;
      /**
       * Tags
       * @description Tags associated with the video.
       */
      tags: string[];
      /**
       * Thumbnails
       * @description Available thumbnails for the video.
       */
      thumbnails: {
          /**
           * Default
           * @description Default resolution thumbnail.
           */
          default: {
              /**
               * Height
               * @description Thumbnail height in pixels.
               * @default null
               */
              height: number | null;
              /**
               * Url
               * @description Thumbnail URL.
               */
              url: string;
              /**
               * Width
               * @description Thumbnail width in pixels.
               * @default null
               */
              width: number | null;
          };
          /**
           * High
           * @description High resolution thumbnail.
           */
          high: {
              /**
               * Height
               * @description Thumbnail height in pixels.
               * @default null
               */
              height: number | null;
              /**
               * Url
               * @description Thumbnail URL.
               */
              url: string;
              /**
               * Width
               * @description Thumbnail width in pixels.
               * @default null
               */
              width: number | null;
          };
          /**
           * Thumbnail
           * @description Max resolution thumbnail.
           * @default null
           */
          maxres: {
              /**
               * Height
               * @description Thumbnail height in pixels.
               * @default null
               */
              height: number | null;
              /**
               * Url
               * @description Thumbnail URL.
               */
              url: string;
              /**
               * Width
               * @description Thumbnail width in pixels.
               * @default null
               */
              width: number | null;
          } | null;
          /**
           * Medium
           * @description Medium resolution thumbnail.
           */
          medium: {
              /**
               * Height
               * @description Thumbnail height in pixels.
               * @default null
               */
              height: number | null;
              /**
               * Url
               * @description Thumbnail URL.
               */
              url: string;
              /**
               * Width
               * @description Thumbnail width in pixels.
               * @default null
               */
              width: number | null;
          };
          /**
           * Thumbnail
           * @description Standard resolution thumbnail.
           * @default null
           */
          standard: {
              /**
               * Height
               * @description Thumbnail height in pixels.
               * @default null
               */
              height: number | null;
              /**
               * Url
               * @description Thumbnail URL.
               */
              url: string;
              /**
               * Width
               * @description Thumbnail width in pixels.
               * @default null
               */
              width: number | null;
          } | null;
      };
      /**
       * Title
       * @description Title of the video.
       */
      title: string;
      /**
       * Video Id
       * @description The YouTube video ID.
       */
      videoId: string;
      /**
       * View Count
       * @description Number of views.
       */
      viewCount: number;
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
 * Type of SUPADATA's SUPADATA_SEARCH_YOUTUBE tool input.
 */
type SUPADATA_SEARCH_YOUTUBE_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page. Default is 10, max is 50.
   * @default 10
   */
  limit: number | null;
  /**
   * Page Token
   * @description Token for pagination to retrieve specific page of results.
   * @default null
   */
  pageToken: string | null;
  /**
   * Query
   * @description The search query term to search on YouTube.
   */
  query?: string;
  /**
   * Type
   * @description Type of resource to search for. One or more of 'video', 'channel', 'playlist'.
   * @default null
   */
  type: string[] | null;
};

/**
 * Type of SUPADATA's SUPADATA_SEARCH_YOUTUBE tool output.
 */
type SUPADATA_SEARCH_YOUTUBE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Etag
       * @description Etag of the response.
       */
      etag: string;
      /**
       * Items
       * @description List of search result items.
       */
      items: {
          /**
           * Etag
           * @description ETag of the resource.
           */
          etag: string;
          /**
           * Id
           * @description Identifier details for the item.
           */
          id: {
              /**
               * Channel Id
               * @description The ID of the channel, if item is a channel.
               * @default null
               */
              channelId: string | null;
              /**
               * Kind
               * @description Type of the resource ID.
               */
              kind: string;
              /**
               * Playlist Id
               * @description The ID of the playlist, if item is a playlist.
               * @default null
               */
              playlistId: string | null;
              /**
               * Video Id
               * @description The ID of the video, if item is a video.
               * @default null
               */
              videoId: string | null;
          };
          /**
           * Kind
           * @description Type of the API resource.
           */
          kind: string;
          /**
           * Snippet
           * @description Basic details about the resource.
           */
          snippet: {
              /**
               * Channel Id
               * @description Channel ID of the resource.
               */
              channelId: string;
              /**
               * Channel Title
               * @description Title of the channel that published the resource.
               */
              channelTitle: string;
              /**
               * Description
               * @description Description of the resource.
               */
              description: string;
              /**
               * Live Broadcast Content
               * @description Live broadcast status of the resource.
               */
              liveBroadcastContent: string;
              /**
               * Publish Time
               * @description Publication time of the resource.
               */
              publishTime: string;
              /**
               * Published At
               * @description Date and time when the resource was published.
               */
              publishedAt: string;
              /**
               * Thumbnails
               * @description Thumbnails for the resource.
               */
              thumbnails: {
                  /**
                   * Default
                   * @description Default resolution thumbnail.
                   */
                  default: {
                      /**
                       * Height
                       * @description Height of the thumbnail in pixels.
                       * @default null
                       */
                      height: number | null;
                      /**
                       * Url
                       * @description URL of the thumbnail image.
                       */
                      url: string;
                      /**
                       * Width
                       * @description Width of the thumbnail in pixels.
                       * @default null
                       */
                      width: number | null;
                  };
                  /**
                   * High
                   * @description High resolution thumbnail.
                   */
                  high: {
                      /**
                       * Height
                       * @description Height of the thumbnail in pixels.
                       * @default null
                       */
                      height: number | null;
                      /**
                       * Url
                       * @description URL of the thumbnail image.
                       */
                      url: string;
                      /**
                       * Width
                       * @description Width of the thumbnail in pixels.
                       * @default null
                       */
                      width: number | null;
                  };
                  /**
                   * Thumbnail
                   * @description Maximum resolution thumbnail.
                   * @default null
                   */
                  maxres: {
                      /**
                       * Height
                       * @description Height of the thumbnail in pixels.
                       * @default null
                       */
                      height: number | null;
                      /**
                       * Url
                       * @description URL of the thumbnail image.
                       */
                      url: string;
                      /**
                       * Width
                       * @description Width of the thumbnail in pixels.
                       * @default null
                       */
                      width: number | null;
                  } | null;
                  /**
                   * Medium
                   * @description Medium resolution thumbnail.
                   */
                  medium: {
                      /**
                       * Height
                       * @description Height of the thumbnail in pixels.
                       * @default null
                       */
                      height: number | null;
                      /**
                       * Url
                       * @description URL of the thumbnail image.
                       */
                      url: string;
                      /**
                       * Width
                       * @description Width of the thumbnail in pixels.
                       * @default null
                       */
                      width: number | null;
                  };
                  /**
                   * Thumbnail
                   * @description Standard resolution thumbnail.
                   * @default null
                   */
                  standard: {
                      /**
                       * Height
                       * @description Height of the thumbnail in pixels.
                       * @default null
                       */
                      height: number | null;
                      /**
                       * Url
                       * @description URL of the thumbnail image.
                       */
                      url: string;
                      /**
                       * Width
                       * @description Width of the thumbnail in pixels.
                       * @default null
                       */
                      width: number | null;
                  } | null;
              };
              /**
               * Title
               * @description Title of the resource.
               */
              title: string;
          };
      }[];
      /**
       * Kind
       * @description Identifies the API resource type.
       */
      kind: string;
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Page Info
       * @description Pagination information.
       */
      pageInfo: {
          /**
           * Results Per Page
           * @description Number of results per page.
           */
          resultsPerPage: number;
          /**
           * Total Results
           * @description Total number of results for the query.
           */
          totalResults: number;
      };
      /**
       * Prev Page Token
       * @description Token to retrieve the previous page of results.
       * @default null
       */
      prevPageToken: string | null;
      /**
       * Region Code
       * @description The region code of the response.
       */
      regionCode: string;
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
 * Type map of all available tool input types for toolkit "SUPADATA".
 */
export type SUPADATA_TOOL_INPUTS = {
  GET_WEB_MAP: SUPADATA_GET_WEB_MAP_INPUT
  GET_WEB_SCRAPE: SUPADATA_GET_WEB_SCRAPE_INPUT
  GET_YOUTUBE_CHANNEL: SUPADATA_GET_YOUTUBE_CHANNEL_INPUT
  GET_YOUTUBE_CHANNEL_VIDEOS: SUPADATA_GET_YOUTUBE_CHANNEL_VIDEOS_INPUT
  GET_YOUTUBE_PLAYLIST: SUPADATA_GET_YOUTUBE_PLAYLIST_INPUT
  GET_YOUTUBE_PLAYLIST_VIDEOS: SUPADATA_GET_YOUTUBE_PLAYLIST_VIDEOS_INPUT
  GET_YOUTUBE_VIDEO: SUPADATA_GET_YOUTUBE_VIDEO_INPUT
  SEARCH_YOUTUBE: SUPADATA_SEARCH_YOUTUBE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SUPADATA".
 */
export type SUPADATA_TOOL_OUTPUTS = {
  GET_WEB_MAP: SUPADATA_GET_WEB_MAP_OUTPUT
  GET_WEB_SCRAPE: SUPADATA_GET_WEB_SCRAPE_OUTPUT
  GET_YOUTUBE_CHANNEL: SUPADATA_GET_YOUTUBE_CHANNEL_OUTPUT
  GET_YOUTUBE_CHANNEL_VIDEOS: SUPADATA_GET_YOUTUBE_CHANNEL_VIDEOS_OUTPUT
  GET_YOUTUBE_PLAYLIST: SUPADATA_GET_YOUTUBE_PLAYLIST_OUTPUT
  GET_YOUTUBE_PLAYLIST_VIDEOS: SUPADATA_GET_YOUTUBE_PLAYLIST_VIDEOS_OUTPUT
  GET_YOUTUBE_VIDEO: SUPADATA_GET_YOUTUBE_VIDEO_OUTPUT
  SEARCH_YOUTUBE: SUPADATA_SEARCH_YOUTUBE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SUPADATA toolkit.
 */
export const SUPADATA = {
  slug: "supadata",
  tools: {
    /**
     * Tool to retrieve all urls from a specified website. use when you need a sitemap or link analysis.
     */
    GET_WEB_MAP: "SUPADATA_GET_WEB_MAP",
    /**
     * Tool to extract content from a specified website. use when you need to scrape and parse web content programmatically.
     */
    GET_WEB_SCRAPE: "SUPADATA_GET_WEB_SCRAPE",
    /**
     * Tool to fetch metadata of a youtube channel. use when you need comprehensive channel details after specifying the channel id.
     */
    GET_YOUTUBE_CHANNEL: "SUPADATA_GET_YOUTUBE_CHANNEL",
    /**
     * Tool to retrieve videos from a youtube channel. use when you need to list videos from a channel with pagination support.
     */
    GET_YOUTUBE_CHANNEL_VIDEOS: "SUPADATA_GET_YOUTUBE_CHANNEL_VIDEOS",
    /**
     * Tool to fetch metadata of a youtube playlist. use when you have a valid playlist id and need to retrieve video details; supports pagination.
     */
    GET_YOUTUBE_PLAYLIST: "SUPADATA_GET_YOUTUBE_PLAYLIST",
    /**
     * Tool to fetch videos from a youtube playlist. use when you have a valid playlistid and need its videos.
     */
    GET_YOUTUBE_PLAYLIST_VIDEOS: "SUPADATA_GET_YOUTUBE_PLAYLIST_VIDEOS",
    /**
     * Tool to retrieve metadata of a youtube video. use when you have a valid video id and need its detailed metadata.
     */
    GET_YOUTUBE_VIDEO: "SUPADATA_GET_YOUTUBE_VIDEO",
    /**
     * Tool to search youtube for videos, channels, or playlists. use when you need to find youtube content by keyword.
     */
    SEARCH_YOUTUBE: "SUPADATA_SEARCH_YOUTUBE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SUPADATA".
 */
export type SUPADATA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SUPADATA".
 */
export type SUPADATA_TRIGGER_EVENTS = {}
