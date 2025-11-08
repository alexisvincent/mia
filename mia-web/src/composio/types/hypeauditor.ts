// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of HYPEAUDITOR's HYPEAUDITOR_GET_ACCOUNT_MEDIA tool input.
 */
type HYPEAUDITOR_GET_ACCOUNT_MEDIA_INPUT = {
  /**
   * Type
   * @description Social network type. Some deployments require this explicitly.
   * @default instagram
   */
  type: string | null;
  /**
   * Username
   * @description Instagram account username to retrieve media for
   */
  username?: string;
  /**
   * V
   * @description Optional API version parameter if required by the endpoint (e.g., '2').
   * @default null
   */
  v: string | null;
};

/**
 * Type of HYPEAUDITOR's HYPEAUDITOR_GET_ACCOUNT_MEDIA tool output.
 */
type HYPEAUDITOR_GET_ACCOUNT_MEDIA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * HypeAuditorError
       * @description Error information on failure
       * @default null
       */
      error: {
          /**
           * Code
           * @description Numeric error code, e.g. 15 for locked report
           */
          code: number;
          /**
           * Description
           * @description Error description from API
           */
          description: string;
      } | null;
      /**
       * ResultContainer
       * @description Media data on success
       * @default null
       */
      result: {
          /**
           * Media
           * @description Map of media_id to detailed media object
           */
          media: {
              [key: string]: {
                  /**
                   * MediaBasic
                   * @description Core media fields
                   */
                  basic: {
                      /**
                       * Caption
                       * @description Post caption text
                       */
                      caption: string;
                      /**
                       * Code
                       * @description Instagram post code
                       */
                      code: string;
                      /**
                       * Id
                       * @description Unique media identifier
                       */
                      id: string;
                      /**
                       * Is Deleted
                       * @description True if media has been deleted
                       */
                      is_deleted: boolean;
                      /**
                       * Preview Url
                       * @description URL to the preview image
                       */
                      preview_url: string;
                      /**
                       * Social Type
                       * @description Platform identifier, e.g. ig
                       */
                      social_type: string;
                      /**
                       * Thumbnail
                       * @description CDN URL for the thumbnail image
                       */
                      thumbnail: string;
                      /**
                       * Time Posted
                       * @description Unix timestamp when the post went live
                       */
                      time_posted: number;
                      /**
                       * Type
                       * @description Media type, e.g. image, video, carousel
                       */
                      type: string;
                  };
                  /**
                   * MediaMetrics
                   * @description Per-post performance metrics
                   */
                  metrics: {
                      /**
                       * Comments Count
                       * @description Total comments on this media item
                       */
                      comments_count: number;
                      /**
                       * Er
                       * @description Engagement rate as a percentage
                       */
                      er: number;
                      /**
                       * Er Mark
                       * @description Quality mark for engagement rate
                       */
                      er_mark: string;
                      /**
                       * Likes Count
                       * @description Total likes on this media item
                       */
                      likes_count: number;
                      /**
                       * Video Views Count
                       * @description Total video views (0 for images)
                       */
                      video_views_count: number;
                  };
              };
          };
          /**
           * Media Ids
           * @description Buckets: all, posts, igtv, reels mapped to categories
           */
          media_ids: {
              [key: string]: {
                  /** PerformanceBucket */
                  comments_desc: {
                      /**
                       * Media Ids
                       * @description List of media IDs sorted by this order
                       */
                      media_ids: string[];
                      /**
                       * Performance
                       * @description Mapping from period (e.g., '7d','30d') to metrics
                       */
                      performance: {
                          [key: string]: {
                              /**
                               * Mark
                               * @description Qualitative mark, e.g. excellent, good
                               */
                              mark: string;
                              /**
                               * Similar
                               * @description Similarity benchmark against peers
                               */
                              similar: number;
                              /**
                               * Value
                               * @description Metric average value for the period
                               */
                              value: number;
                          };
                      };
                  };
                  /** PerformanceBucket */
                  er_desc: {
                      /**
                       * Media Ids
                       * @description List of media IDs sorted by this order
                       */
                      media_ids: string[];
                      /**
                       * Performance
                       * @description Mapping from period (e.g., '7d','30d') to metrics
                       */
                      performance: {
                          [key: string]: {
                              /**
                               * Mark
                               * @description Qualitative mark, e.g. excellent, good
                               */
                              mark: string;
                              /**
                               * Similar
                               * @description Similarity benchmark against peers
                               */
                              similar: number;
                              /**
                               * Value
                               * @description Metric average value for the period
                               */
                              value: number;
                          };
                      };
                  };
                  /** PerformanceBucket */
                  time_posted_desc: {
                      /**
                       * Media Ids
                       * @description List of media IDs sorted by this order
                       */
                      media_ids: string[];
                      /**
                       * Performance
                       * @description Mapping from period (e.g., '7d','30d') to metrics
                       */
                      performance: {
                          [key: string]: {
                              /**
                               * Mark
                               * @description Qualitative mark, e.g. excellent, good
                               */
                              mark: string;
                              /**
                               * Similar
                               * @description Similarity benchmark against peers
                               */
                              similar: number;
                              /**
                               * Value
                               * @description Metric average value for the period
                               */
                              value: number;
                          };
                      };
                  };
                  /** PerformanceBucket */
                  views_desc: {
                      /**
                       * Media Ids
                       * @description List of media IDs sorted by this order
                       */
                      media_ids: string[];
                      /**
                       * Performance
                       * @description Mapping from period (e.g., '7d','30d') to metrics
                       */
                      performance: {
                          [key: string]: {
                              /**
                               * Mark
                               * @description Qualitative mark, e.g. excellent, good
                               */
                              mark: string;
                              /**
                               * Similar
                               * @description Similarity benchmark against peers
                               */
                              similar: number;
                              /**
                               * Value
                               * @description Metric average value for the period
                               */
                              value: number;
                          };
                      };
                  };
              };
          };
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
 * Type of HYPEAUDITOR's HYPEAUDITOR_GET_REPORT_INSTAGRAM tool input.
 */
type HYPEAUDITOR_GET_REPORT_INSTAGRAM_INPUT = {
  /**
   * Features
   * @description List of additional features to include. Allowed values: ranking, mentions, mentioned_by, notable_audience, audience_brand_affinity, er_benchmarks.
   * @default null
   */
  features: string[] | null;
  /**
   * User Id
   * @description Instagram user ID string. Required if username is not provided.
   * @default null
   */
  user_id: string | null;
  /**
   * Username
   * @description Instagram username without '@'. Required if user_id is not provided.
   * @default null
   */
  username: string | null;
  /**
   * V
   * @description API version; only v=2 is supported.
   * @default 2
   * @constant
   */
  v: "2";
};

/**
 * Type of HYPEAUDITOR's HYPEAUDITOR_GET_REPORT_INSTAGRAM tool output.
 */
type HYPEAUDITOR_GET_REPORT_INSTAGRAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Features
       * @description Additional feature data if requested via features parameter
       * @default null
       */
      features: {
          [key: string]: unknown;
      } | null;
      /**
       * Report State
       * @enum {string}
       */
      report_state: "READY" | "READY_LOW_CONFIDENCE" | "NOT_READY";
      /** User */
      user: {
          /** About */
          about: string | null;
          /** Advertising Data */
          advertising_data: {
              /** Ad Posts */
              ad_posts: {
                  /** Count */
                  count: number;
                  /** Display */
                  display: {
                      /** Mark */
                      mark: string;
                      /** Title */
                      title: string;
                  }[];
                  /**
                   * Prc
                   * @default null
                   */
                  prc: number | null;
              };
              /** All Posts */
              all_posts: {
                  /** Count */
                  count: number;
                  /** Display */
                  display: {
                      /** Mark */
                      mark: string;
                      /** Title */
                      title: string;
                  }[];
                  /**
                   * Prc
                   * @default null
                   */
                  prc: number | null;
              };
              /** Avg Ad Er */
              avg_ad_er: number;
              /** Avg Er */
              avg_er: number;
              /** Avg Er Display */
              avg_er_display: {
                  /** Mark */
                  mark: string;
                  /** Title */
                  title: string;
              }[];
              /** Brand Categories Html */
              brand_categories_html: string;
              /** Brand Mentions */
              brand_mentions: {
                  /** Avatar */
                  avatar: string;
                  /** Category */
                  category: string;
                  /** Mention Er */
                  mention_er: number;
                  /** Mentions Count */
                  mentions_count: number;
                  /** Name */
                  name: string;
                  /** Username */
                  username: string;
              }[];
              /** Brand Mentions Count */
              brand_mentions_count: number;
              /** Brands Categories */
              brands_categories: string[];
              /** Regular Posts */
              regular_posts: {
                  /** Count */
                  count: number;
                  /** Display */
                  display: {
                      /** Mark */
                      mark: string;
                      /** Title */
                      title: string;
                  }[];
                  /**
                   * Prc
                   * @default null
                   */
                  prc: number | null;
              };
          };
          /** Aqs */
          aqs: number;
          /** Aqs Description */
          aqs_description: string;
          /** Aqs Name */
          aqs_name: string;
          /** Audience Age 21 Plus Prc */
          audience_age_21_plus_prc: number;
          /** Audience Authenticity */
          audience_authenticity: {
              /** Avg */
              avg: number;
              /** Title */
              title: string;
              /** Value */
              value: number;
          };
          /** Audience Education */
          audience_education: {
              /** Incomplete Primary */
              incomplete_primary: number;
              /** Lower Secondary */
              lower_secondary: number;
              /** No Education */
              no_education: number;
              /** Post Secondary */
              post_secondary: number;
              /** Primary */
              primary: number;
              /** Upper Secondary */
              upper_secondary: number;
          };
          /** Audience Geography */
          audience_geography: {
              /** Cities */
              cities: {
                  /** Id */
                  id: number;
                  /** Name */
                  name: string;
                  /** Value */
                  value: number;
              }[];
              /** Countries */
              countries: {
                  /** Code */
                  code: string;
                  /** Name */
                  name: string;
                  /** Value */
                  value: number;
              }[];
              /** States */
              states: {
                  /** Name */
                  name: string;
                  /** Value */
                  value: number;
              }[];
          };
          /** Audience Interests */
          audience_interests: {
              /** Category Name */
              category_name: string;
              /** Weight */
              weight: number;
          }[];
          /** Audience Languages */
          audience_languages: {
              /** Code */
              code: string;
              /** Value */
              value: number;
          }[];
          /** Audience Marital Status */
          audience_marital_status: {
              /** Divorced */
              divorced: number;
              /** Married */
              married: number;
              /** Single */
              single: number;
              /** Widowed */
              widowed: number;
          };
          /** Audience Reachability */
          audience_reachability: {
              /** Avg */
              avg: number;
              /** Title */
              title: string;
              /** Value */
              value: number;
          };
          /** Audience Type */
          audience_type: {
              /** Infs */
              infs: number;
              /** Mass */
              mass: number;
              /** Real */
              real: number;
              /** Susp */
              susp: number;
          };
          /** Avg Comments */
          avg_comments: number;
          /** Avg Likes */
          avg_likes: number;
          /** Blogger Categories */
          blogger_categories: number[];
          /** Blogger Languages */
          blogger_languages: string[];
          /** Comments Rate */
          comments_rate: {
              /** Avg */
              avg: number;
              /** Title */
              title: string;
              /** Value */
              value: number;
          };
          /** Er */
          er: {
              [key: string]: unknown;
          };
          /** Est Reach */
          est_reach: {
              /** From */
              from: number;
              /** To */
              to: number;
          };
          /** Followers Chart */
          followers_chart: {
              /** Count */
              count: number;
              /** Date */
              date: number;
          }[];
          /** Followers Count */
          followers_count: number;
          /** Following Chart */
          following_chart: {
              /** Count */
              count: number;
              /** Date */
              date: number;
          }[];
          /** Followings Count */
          followings_count: number;
          /** Full Name */
          full_name: string;
          /** Growth */
          growth: {
              /** Description */
              description: string;
              /** Title */
              title: string;
          };
          /** Is Deleted */
          is_deleted: boolean;
          /** Is Private */
          is_private: boolean;
          /** Is Verified */
          is_verified: boolean;
          /** Likes Comments Ratio */
          likes_comments_ratio: {
              /** Avg */
              avg: number;
              /** Title */
              title: string;
              /** Value */
              value: number;
          };
          /** Likes Comments Ratio Chart */
          likes_comments_ratio_chart: {
              /** X */
              x: number;
              /** Y */
              y: number;
          }[];
          /** Likes Spread */
          likes_spread: {
              /** Avg */
              avg: number;
              /** Title */
              title: string;
              /** Value */
              value: number;
          };
          /** Media Per Week */
          media_per_week: {
              /**
               * Mark
               * @default null
               */
              mark: string | null;
              /**
               * Mark Title
               * @default null
               */
              mark_title: string | null;
              /**
               * Similar
               * @default null
               */
              similar: number | null;
              /** Value */
              value: number;
          };
          /** Photo Url */
          photo_url: string | null;
          /** Posts Count */
          posts_count: number;
          /** Social Networks */
          social_networks: {
              /** Avatar Url */
              avatar_url: string;
              /** Er */
              er: number;
              /** Social Id */
              social_id: string;
              /** Subscribers Count */
              subscribers_count: number;
              /** Title */
              title: string;
              /** Type */
              type: number;
              /** Username */
              username: string;
          }[];
          /** Subscribers Growth Prc */
          subscribers_growth_prc: {
              /**
               * Mark
               * @default null
               */
              mark: string | null;
              /**
               * Mark Title
               * @default null
               */
              mark_title: string | null;
              /**
               * Similar
               * @default null
               */
              similar: number | null;
              /** Value */
              value: number;
          }[];
          /** Username */
          username: string;
          /** Yearly Growth */
          yearly_growth: {
              /** Avg */
              avg: number;
              /** Title */
              title: string;
              /** Value */
              value: number;
          };
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
 * Type of HYPEAUDITOR's HYPEAUDITOR_GET_REPORT_TIK_TOK tool input.
 */
type HYPEAUDITOR_GET_REPORT_TIK_TOK_INPUT = {
  /**
   * Channel
   * @description TikTok username from the channel URL, without the '@' symbol.
   */
  channel?: string;
  /**
   * V
   * @description API version; if omitted, the latest version is used (e.g., '2019-10-18').
   * @default null
   */
  v: string | null;
};

/**
 * Type of HYPEAUDITOR's HYPEAUDITOR_GET_REPORT_TIK_TOK tool output.
 */
type HYPEAUDITOR_GET_REPORT_TIK_TOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Report
       * @description Full report data including basic, metrics, and features.
       */
      report: {
          /**
           * Basic
           * @description Basic channel information.
           */
          basic: {
              /**
               * Avatar Url
               * @description Channel avatar URL.
               */
              avatar_url: string;
              /**
               * Description
               * @description Channel description.
               */
              description: string;
              /**
               * Id
               * @description Channel ID.
               */
              id: string;
              /**
               * Title
               * @description Channel title.
               */
              title: string;
              /**
               * Username
               * @description Channel username.
               */
              username: string;
          };
          /**
           * Features
           * @description Rich channel feature data.
           */
          features: {
              [key: string]: unknown;
          };
          /**
           * Metrics
           * @description Channel metrics and calculated metrics.
           */
          metrics: {
              [key: string]: unknown;
          };
      };
      /**
       * Report Quality
       * @description TikTok report quality code.
       */
      report_quality: string;
      /**
       * Report State
       * @description TikTok report state: READY, READY_LOW_CONFIDENCE, or NOT_READY.
       * @enum {string}
       */
      report_state: "READY" | "READY_LOW_CONFIDENCE" | "NOT_READY";
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
 * Type map of all available tool input types for toolkit "HYPEAUDITOR".
 */
export type HYPEAUDITOR_TOOL_INPUTS = {
  GET_ACCOUNT_MEDIA: HYPEAUDITOR_GET_ACCOUNT_MEDIA_INPUT
  GET_REPORT_INSTAGRAM: HYPEAUDITOR_GET_REPORT_INSTAGRAM_INPUT
  GET_REPORT_TIK_TOK: HYPEAUDITOR_GET_REPORT_TIK_TOK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "HYPEAUDITOR".
 */
export type HYPEAUDITOR_TOOL_OUTPUTS = {
  GET_ACCOUNT_MEDIA: HYPEAUDITOR_GET_ACCOUNT_MEDIA_OUTPUT
  GET_REPORT_INSTAGRAM: HYPEAUDITOR_GET_REPORT_INSTAGRAM_OUTPUT
  GET_REPORT_TIK_TOK: HYPEAUDITOR_GET_REPORT_TIK_TOK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's HYPEAUDITOR toolkit.
 */
export const HYPEAUDITOR = {
  slug: "hypeauditor",
  tools: {
    /**
     * Tool to retrieve media content of an Instagram account. Use when you need detailed post-level data and performance metrics for analysis.
     */
    GET_ACCOUNT_MEDIA: "HYPEAUDITOR_GET_ACCOUNT_MEDIA",
    /**
     * Tool to retrieve a detailed Instagram report. Use after providing username or user_id. Example: GET_REPORT_INSTAGRAM(username="nasa").
     */
    GET_REPORT_INSTAGRAM: "HYPEAUDITOR_GET_REPORT_INSTAGRAM",
    /**
     * Tool to get TikTok analytics report. Use when fetching detailed performance metrics for a TikTok account.
     */
    GET_REPORT_TIK_TOK: "HYPEAUDITOR_GET_REPORT_TIK_TOK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "HYPEAUDITOR".
 */
export type HYPEAUDITOR_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "HYPEAUDITOR".
 */
export type HYPEAUDITOR_TRIGGER_EVENTS = {}
