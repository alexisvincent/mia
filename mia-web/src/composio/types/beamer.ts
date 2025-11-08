// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BEAMER's BEAMER_COUNT_POSTS tool input.
 */
type BEAMER_COUNT_POSTS_INPUT = {
  /**
   * Archived
   * @description Count only archived (true) or non-archived (false) posts.
   * @default null
   */
  archived: boolean | null;
  /**
   * Category
   * @description Only count posts in this category.
   * @default null
   */
  category: string | null;
  /**
   * Date From
   * @description Only count posts published after this date (ISO-8601).
   * @default null
   */
  dateFrom: string | null;
  /**
   * Date To
   * @description Only count posts published before this date (ISO-8601).
   * @default null
   */
  dateTo: string | null;
  /**
   * Expired
   * @description Count only expired (true) or non-expired (false) posts. [Starter plan and up]
   * @default null
   */
  expired: boolean | null;
  /**
   * Filter
   * @description Count posts with a matching segmentation filter. [Pro plan and up]
   * @default null
   */
  filter: string | null;
  /**
   * Filter By User Id
   * @description If true, include single-user posts matching userId. [Scale plan]
   * @default null
   */
  filterByUserId: boolean | null;
  /**
   * Filter Url
   * @description Include posts matching this segmentation URL. [Pro plan and up]
   * @default null
   */
  filterUrl: string | null;
  /**
   * Force Filter
   * @description Only count posts that match this segmentation filter. [Pro plan and up]
   * @default null
   */
  forceFilter: string | null;
  /**
   * Ignore Filters
   * @description If true, ignore segmentation filters (requires permission).
   * @default null
   */
  ignoreFilters: boolean | null;
  /**
   * Language
   * @description Only count posts with translations in this language (ISO-639 two-letter). [Starter plan and up]
   * @default null
   */
  language: string | null;
  /**
   * Published
   * @description Count only published (true) or draft (false) posts.
   * @default null
   */
  published: boolean | null;
  /**
   * User Id
   * @description User ID to use with filterByUserId only.
   * @default null
   */
  userId: string | null;
};

/**
 * Type of BEAMER's BEAMER_COUNT_POSTS tool output.
 */
type BEAMER_COUNT_POSTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of posts matching filters.
       */
      count: number;
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
 * Type of BEAMER's BEAMER_GET_CATEGORY tool input.
 */
type BEAMER_GET_CATEGORY_INPUT = {
  /**
   * Category Id
   * @description Unique identifier of the category to retrieve. Basic categories include 'new', 'improvement', 'fix', 'comingsoon', 'announcement', and 'other'.
   */
  category_id?: string;
};

/**
 * Type of BEAMER's BEAMER_GET_CATEGORY tool output.
 */
type BEAMER_GET_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Detailed description of the category, if available
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Internal identifier of the category
       */
      id: string;
      /**
       * Name
       * @description Human-readable name of the category
       * @default null
       */
      name: string | null;
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
 * Type of BEAMER's BEAMER_GET_FEED tool input.
 */
type BEAMER_GET_FEED_INPUT = {
  /**
   * Filter
   * @description Retrieve posts with a matching segmentation filter. Only available on Pro plan and up.
   * @default null
   */
  filter: string | null;
  /**
   * Filter By Url
   * @description Whether to apply URL filtering to the feed. Only available on Pro plan and up.
   * @default null
   */
  filterByUrl: boolean | null;
  /**
   * Force Filter
   * @description Only retrieve posts matching this segmentation filter. Only available on Pro plan and up.
   * @default null
   */
  forceFilter: string | null;
  /**
   * Ignore Filters
   * @description If true, all posts will be retrieved, ignoring segmentation filters. Requires special API-key permission.
   * @default null
   */
  ignoreFilters: boolean | null;
  /**
   * Language
   * @description Two-letter ISO-639 code to retrieve feed in a specific language. Only available on Starter plan and up.
   * @default null
   */
  language: string | null;
  /**
   * Theme
   * @description Theme class for appearance customization via CSS. Only available on Pro plan and up.
   * @default null
   */
  theme: string | null;
  /**
   * User Email
   * @description Email of the user viewing the feed (for analytics).
   * @default null
   */
  userEmail: string | null;
  /**
   * User First Name
   * @description First name of the user viewing the feed (for analytics).
   * @default null
   */
  userFirstName: string | null;
  /**
   * User Id
   * @description ID of the user viewing the feed (for analytics).
   * @default null
   */
  userId: string | null;
  /**
   * User Last Name
   * @description Last name of the user viewing the feed (for analytics).
   * @default null
   */
  userLastName: string | null;
};

/**
 * Type of BEAMER's BEAMER_GET_FEED tool output.
 */
type BEAMER_GET_FEED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Url
       * @description URL for your standalone feed.
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
 * Type of BEAMER's BEAMER_GET_FEEDS tool input.
 */
type BEAMER_GET_FEEDS_INPUT = {
  /**
   * Filter
   * @description Retrieve posts with a matching segmentation filter. (Pro plan and up)
   * @default null
   */
  filter: string | null;
  /**
   * Filter By Url
   * @description Whether to apply URL filtering to the feed. (Pro plan and up)
   * @default null
   */
  filterByUrl: boolean | null;
  /**
   * Force Filter
   * @description Only retrieve posts that match this segmentation filter. (Pro plan and up)
   * @default null
   */
  forceFilter: string | null;
  /**
   * Language
   * @description ISO-639 two-letter code to retrieve the feed in a specific language.
   * @default null
   */
  language: string | null;
  /**
   * Theme
   * @description Theme class to use for appearance customization via CSS. (Pro plan and up)
   * @default null
   */
  theme: string | null;
  /**
   * User Email
   * @description Email of the user viewing the feed (for analytics).
   * @default null
   */
  userEmail: string | null;
  /**
   * User First Name
   * @description First name of the user viewing the feed (for analytics).
   * @default null
   */
  userFirstName: string | null;
  /**
   * User Id
   * @description ID of the user viewing the feed (for analytics).
   * @default null
   */
  userId: string | null;
  /**
   * User Last Name
   * @description Last name of the user viewing the feed (for analytics).
   * @default null
   */
  userLastName: string | null;
};

/**
 * Type of BEAMER's BEAMER_GET_FEEDS tool output.
 */
type BEAMER_GET_FEEDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Url
       * @description Standalone URL for your Beamer feed.
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
 * Type of BEAMER's BEAMER_GET_FEED_URL tool input.
 */
type BEAMER_GET_FEED_URL_INPUT = {
  /**
   * Filter
   * @description Retrieve posts with a matching segmentation filter. Only available on Pro plan and up.
   * @default null
   */
  filter: string | null;
  /**
   * Filter By Url
   * @description Whether to apply URL filtering to the feed. Only available on Pro plan and up.
   * @default null
   */
  filterByUrl: boolean | null;
  /**
   * Force Filter
   * @description Only retrieve posts that match this segmentation filter. Only available on Pro plan and up.
   * @default null
   */
  forceFilter: string | null;
  /**
   * Language
   * @description ISO-639 two-letter code to retrieve the feed in a specific language. Only available on Starter plan and up.
   * @default null
   */
  language: string | null;
  /**
   * Theme
   * @description Theme class to use for appearance customization via CSS. Only available on Pro plan and up.
   * @default null
   */
  theme: string | null;
  /**
   * User Email
   * @description Email of the user viewing the feed (for analytics).
   * @default null
   */
  userEmail: string | null;
  /**
   * User First Name
   * @description First name of the user viewing the feed (for analytics).
   * @default null
   */
  userFirstName: string | null;
  /**
   * User Id
   * @description ID of the user viewing the feed (for analytics).
   * @default null
   */
  userId: string | null;
  /**
   * User Last Name
   * @description Last name of the user viewing the feed (for analytics).
   * @default null
   */
  userLastName: string | null;
};

/**
 * Type of BEAMER's BEAMER_GET_FEED_URL tool output.
 */
type BEAMER_GET_FEED_URL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Url
       * @description URL for your standalone feed.
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
 * Type of BEAMER's BEAMER_GET_NOTIFICATION tool input.
 */
type BEAMER_GET_NOTIFICATION_INPUT = {
  /**
   * Notification Id
   * @description ID of the notification to retrieve (post ID).
   */
  notificationId?: number;
};

/**
 * Type of BEAMER's BEAMER_GET_NOTIFICATION tool output.
 */
type BEAMER_GET_NOTIFICATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Auto Open
       * @description Deprecated: auto-open sidebar flag.
       * @default null
       */
      autoOpen: boolean | null;
      /**
       * Boosted Announcement
       * @description Type of boosted announcement, if any.
       * @default null
       */
      boostedAnnouncement: string | null;
      /**
       * Category
       * @description Notification category.
       */
      category: string;
      /**
       * Clicks
       * @description Total click count.
       * @default null
       */
      clicks: number | null;
      /**
       * Date
       * @description Publication date (ISO-8601).
       */
      date: string;
      /**
       * Due Date
       * @description Expiration date (ISO-8601).
       * @default null
       */
      dueDate: string | null;
      /**
       * Edition Date
       * @description Last edit date (ISO-8601).
       * @default null
       */
      editionDate: string | null;
      /**
       * Feedback Enabled
       * @description Whether user feedback is enabled.
       */
      feedbackEnabled: boolean;
      /**
       * Feedbacks
       * @description Count of user feedback entries.
       * @default null
       */
      feedbacks: number | null;
      /**
       * Filter
       * @description Segmentation filter applied to this notification.
       * @default null
       */
      filter: string | null;
      /**
       * Filter Url
       * @description Segmentation URL applied to this notification.
       * @default null
       */
      filterUrl: string | null;
      /**
       * Id
       * @description Unique identifier of the notification.
       */
      id: string;
      /**
       * Neutral Reactions
       * @description Count of neutral reactions.
       * @default null
       */
      neutralReactions: number | null;
      /**
       * Pinned
       * @description Whether the notification is pinned to the top.
       */
      pinned: boolean;
      /**
       * Positive Reactions
       * @description Count of positive reactions.
       * @default null
       */
      positiveReactions: number | null;
      /**
       * Published
       * @description Whether the notification is published.
       */
      published: boolean;
      /**
       * Reactions Enabled
       * @description Whether user reactions are enabled.
       */
      reactionsEnabled: boolean;
      /**
       * Show In Standalone
       * @description Whether visible in the standalone feed view.
       */
      showInStandalone: boolean;
      /**
       * Show In Widget
       * @description Whether visible in the embedded widget feed.
       */
      showInWidget: boolean;
      /**
       * Translations
       * @description List of content translations.
       */
      translations: {
          /**
           * Category
           * @description Category override for this translation.
           * @default null
           */
          category: string | null;
          /**
           * Content
           * @description Translation content (plain text).
           */
          content: string;
          /**
           * Content Html
           * @description Translation content (HTML).
           */
          contentHtml: string;
          /**
           * Images
           * @description List of image URLs embedded in this translation.
           * @default null
           */
          images: string[] | null;
          /**
           * Language
           * @description Translation language (ISO-639 code).
           */
          language: string;
          /**
           * Link Text
           * @description Link text for this translation.
           * @default null
           */
          linkText: string | null;
          /**
           * Link Url
           * @description Link URL for this translation.
           * @default null
           */
          linkUrl: string | null;
          /**
           * Title
           * @description Translation title.
           */
          title: string;
      }[];
      /**
       * Unique Views
       * @description Unique user view count.
       * @default null
       */
      uniqueViews: number | null;
      /**
       * Views
       * @description Total view count.
       * @default null
       */
      views: number | null;
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
 * Type of BEAMER's BEAMER_GET_NOTIFICATIONS tool input.
 */
type BEAMER_GET_NOTIFICATIONS_INPUT = {
  /**
   * Category
   * @description Only notifications in this category.
   * @default null
   */
  category: string | null;
  /**
   * Date From
   * @description Only notifications published after this ISO-8601 timestamp.
   * @default null
   */
  dateFrom: string | null;
  /**
   * Filter
   * @description Retrieve notifications matching this segmentation filter. (Pro plan+)
   * @default null
   */
  filter: string | null;
  /**
   * Filter Url
   * @description Include notifications matching this segmentation URL. Supports wildcards. (Pro plan+)
   * @default null
   */
  filterUrl: string | null;
  /**
   * Force Filter
   * @description Only retrieve notifications that match this segmentation filter exactly. (Pro plan+)
   * @default null
   */
  forceFilter: string | null;
  /**
   * Ignore Filters
   * @description Ignore segmentation filters entirely. Requires special API-key permission.
   * @default null
   */
  ignoreFilters: boolean | null;
  /**
   * Ignore Request Details
   * @description Ignore IP/browser/geolocation details when retrieving notifications.
   * @default null
   */
  ignoreRequestDetails: boolean | null;
  /**
   * Language
   * @description Two-letter ISO-639 code: only notifications in this language. (Starter plan+)
   * @default null
   */
  language: string | null;
  /**
   * Mark As Read
   * @description Mark retrieved notifications as read. (default true)
   * @default null
   */
  markAsRead: boolean | null;
  /**
   * Max Results
   * @description Maximum number of notifications to return (max 10).
   * @default null
   */
  maxResults: number | null;
  /**
   * Page
   * @description Page number for pagination of results.
   * @default null
   */
  page: number | null;
  /**
   * Save Views
   * @description Whether to record view counts for the retrieved notifications.
   * @default null
   */
  saveViews: boolean | null;
  /**
   * Traceable Links
   * @description Convert links to traceable URLs for click analytics.
   * @default null
   */
  traceableLinks: boolean | null;
  /**
   * User Email
   * @description Analytics: email of the viewing user.
   * @default null
   */
  userEmail: string | null;
  /**
   * User First Name
   * @description Analytics: first name of the viewing user.
   * @default null
   */
  userFirstName: string | null;
  /**
   * User Id
   * @description Analytics: ID of the viewing user (Scale plan+).
   * @default null
   */
  userId: string | null;
  /**
   * User Last Name
   * @description Analytics: last name of the viewing user.
   * @default null
   */
  userLastName: string | null;
};

/**
 * Type of BEAMER's BEAMER_GET_NOTIFICATIONS tool output.
 */
type BEAMER_GET_NOTIFICATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Auto Open
       * @description Deprecated: auto-open sidebar flag.
       * @default null
       */
      autoOpen: boolean | null;
      /**
       * Boosted Announcement
       * @description Type of boosted announcement, if any.
       * @default null
       */
      boostedAnnouncement: string | null;
      /**
       * Category
       * @description Notification category.
       */
      category: string;
      /**
       * Clicks
       * @description Total click count.
       * @default null
       */
      clicks: number | null;
      /**
       * Date
       * @description Publication date (ISO-8601).
       */
      date: string;
      /**
       * Due Date
       * @description Expiration date (ISO-8601).
       * @default null
       */
      dueDate: string | null;
      /**
       * Edition Date
       * @description Last edit date (ISO-8601).
       * @default null
       */
      editionDate: string | null;
      /**
       * Feedback Enabled
       * @description Whether user feedback is enabled.
       */
      feedbackEnabled: boolean;
      /**
       * Feedbacks
       * @description Count of user feedback entries.
       * @default null
       */
      feedbacks: number | null;
      /**
       * Filter
       * @description Segmentation filter applied to this notification.
       * @default null
       */
      filter: string | null;
      /**
       * Filter Url
       * @description Segmentation URL applied to this notification.
       * @default null
       */
      filterUrl: string | null;
      /**
       * Id
       * @description Unique identifier of the notification.
       */
      id: string;
      /**
       * Negative Reactions
       * @description Count of negative reactions.
       * @default null
       */
      negativeReactions: number | null;
      /**
       * Neutral Reactions
       * @description Count of neutral reactions.
       * @default null
       */
      neutralReactions: number | null;
      /**
       * Pinned
       * @description Whether the notification is pinned to the top.
       */
      pinned: boolean;
      /**
       * Positive Reactions
       * @description Count of positive reactions.
       * @default null
       */
      positiveReactions: number | null;
      /**
       * Published
       * @description Whether the notification is published.
       */
      published: boolean;
      /**
       * Reactions Enabled
       * @description Whether user reactions are enabled.
       */
      reactionsEnabled: boolean;
      /**
       * Show In Standalone
       * @description Whether visible in the standalone feed view.
       */
      showInStandalone: boolean;
      /**
       * Show In Widget
       * @description Whether visible in the embedded widget feed.
       */
      showInWidget: boolean;
      /**
       * Translations
       * @description List of content translations.
       */
      translations: {
          /**
           * Category
           * @description Category override for this translation.
           * @default null
           */
          category: string | null;
          /**
           * Content
           * @description Translation content (plain text).
           */
          content: string;
          /**
           * Content Html
           * @description Translation content (HTML).
           */
          contentHtml: string;
          /**
           * Images
           * @description List of image URLs embedded in this translation.
           * @default null
           */
          images: string[] | null;
          /**
           * Language
           * @description Translation language (ISO-639 code).
           */
          language: string;
          /**
           * Link Text
           * @description Link text for this translation.
           * @default null
           */
          linkText: string | null;
          /**
           * Link Url
           * @description Link URL for this translation.
           * @default null
           */
          linkUrl: string | null;
          /**
           * Title
           * @description Translation title.
           */
          title: string;
      }[];
      /**
       * Unique Views
       * @description Unique user view count.
       * @default null
       */
      uniqueViews: number | null;
      /**
       * Views
       * @description Total view count.
       * @default null
       */
      views: number | null;
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
 * Type of BEAMER's BEAMER_GET_POSTS tool input.
 */
type BEAMER_GET_POSTS_INPUT = object;

/**
 * Type of BEAMER's BEAMER_GET_POSTS tool output.
 */
type BEAMER_GET_POSTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Posts
       * @description List of posts containing ID and title.
       */
      posts: {
          /**
           * Id
           * @description Unique identifier of the post.
           */
          id: string;
          /**
           * Title
           * @description Title of the post.
           */
          title: string;
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
 * Type of BEAMER's BEAMER_GET_POST_COMMENTS tool input.
 */
type BEAMER_GET_POST_COMMENTS_INPUT = {
  /**
   * Date From
   * @description Retrieve comments published after this ISO-8601 date
   * @default null
   */
  dateFrom: string | null;
  /**
   * Date To
   * @description Retrieve comments published before this ISO-8601 date
   * @default null
   */
  dateTo: string | null;
  /**
   * Language
   * @description ISO-639 two-letter code to filter comments by language
   * @default null
   */
  language: string | null;
  /**
   * Max Results
   * @description Maximum number of comments to return (1-10)
   * @default null
   */
  maxResults: number | null;
  /**
   * Page
   * @description Page number for pagination (>=1)
   * @default null
   */
  page: number | null;
  /**
   * Post Id
   * @description ID of the post to retrieve comments from
   */
  postId?: number;
  /**
   * Search
   * @description Retrieve comments containing this substring in their text
   * @default null
   */
  search: string | null;
};

/**
 * Type of BEAMER's BEAMER_GET_POST_COMMENTS tool output.
 */
type BEAMER_GET_POST_COMMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Comments
       * @description List of comments for the specified post
       */
      comments: {
          /**
           * Date
           * @description Publication date of the comment in ISO-8601 format
           */
          date: string;
          /**
           * Id
           * @description Unique identifier of the comment
           */
          id: number;
          /**
           * Post Title
           * @description Title of the post this comment belongs to
           */
          postTitle: string;
          /**
           * Text
           * @description Content of the comment
           */
          text: string;
          /**
           * Url
           * @description URL to this comment in the Beamer dashboard
           */
          url: string;
          /**
           * User Custom Attributes
           * @description Custom attributes of the user who created this comment
           */
          userCustomAttributes: {
              [key: string]: string | number | boolean;
          };
          /**
           * User Email
           * @description Email of the user who created this comment
           */
          userEmail: string;
          /**
           * User First Name
           * @description First name of the user who created this comment
           */
          userFirstName: string;
          /**
           * User Id
           * @description ID of the user who created this comment
           */
          userId: string;
          /**
           * User Last Name
           * @description Last name of the user who created this comment
           */
          userLastName: string;
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
 * Type of BEAMER's BEAMER_GET_POST_REACTIONS tool input.
 */
type BEAMER_GET_POST_REACTIONS_INPUT = {
  /**
   * Date From
   * @description Only include reactions after this ISO-8601 timestamp
   * @default null
   */
  dateFrom: string | null;
  /**
   * Date To
   * @description Only include reactions before this ISO-8601 timestamp
   * @default null
   */
  dateTo: string | null;
  /**
   * Max Results
   * @description Maximum number of reactions to return (1-10)
   * @default null
   */
  maxResults: number | null;
  /**
   * Page
   * @description Page number for pagination (>=1)
   * @default null
   */
  page: number | null;
  /**
   * Post Id
   * @description ID of the post to retrieve reactions from
   */
  postId?: number;
  /**
   * Reaction
   * @description Filter reactions by type: positive, neutral, or negative
   * @default null
   * @enum {string|null}
   */
  reaction: "positive" | "neutral" | "negative" | null;
};

/**
 * Type of BEAMER's BEAMER_GET_POST_REACTIONS tool output.
 */
type BEAMER_GET_POST_REACTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Reactions
       * @description List of reactions for the specified post
       */
      reactions: {
          /**
           * Date
           * @description Timestamp of the reaction in ISO-8601 format
           */
          date: string;
          /**
           * Id
           * @description Unique identifier of the reaction
           */
          id: number;
          /**
           * Post Title
           * @description Title of the associated post
           */
          postTitle: string;
          /**
           * Reaction
           * @description Type of reaction: positive, neutral, or negative
           */
          reaction: string;
          /**
           * Url
           * @description URL to view this reaction
           */
          url: string;
          /**
           * User Custom Attributes
           * @description Custom attributes of the user
           */
          userCustomAttributes: {
              [key: string]: string | number | boolean;
          };
          /**
           * User Email
           * @description Email of the user who reacted
           */
          userEmail: string;
          /**
           * User First Name
           * @description First name of the user who reacted
           */
          userFirstName: string;
          /**
           * User Id
           * @description Identifier of the user who reacted
           */
          userId: string;
          /**
           * User Last Name
           * @description Last name of the user who reacted
           */
          userLastName: string;
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
 * Type of BEAMER's BEAMER_PING tool input.
 */
type BEAMER_PING_INPUT = object;

/**
 * Type of BEAMER's BEAMER_PING tool output.
 */
type BEAMER_PING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Name
       * @description Name of your product on Beamer.
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
 * Type map of all available tool input types for toolkit "BEAMER".
 */
export type BEAMER_TOOL_INPUTS = {
  COUNT_POSTS: BEAMER_COUNT_POSTS_INPUT
  GET_CATEGORY: BEAMER_GET_CATEGORY_INPUT
  GET_FEED: BEAMER_GET_FEED_INPUT
  GET_FEEDS: BEAMER_GET_FEEDS_INPUT
  GET_FEED_URL: BEAMER_GET_FEED_URL_INPUT
  GET_NOTIFICATION: BEAMER_GET_NOTIFICATION_INPUT
  GET_NOTIFICATIONS: BEAMER_GET_NOTIFICATIONS_INPUT
  GET_POSTS: BEAMER_GET_POSTS_INPUT
  GET_POST_COMMENTS: BEAMER_GET_POST_COMMENTS_INPUT
  GET_POST_REACTIONS: BEAMER_GET_POST_REACTIONS_INPUT
  PING: BEAMER_PING_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BEAMER".
 */
export type BEAMER_TOOL_OUTPUTS = {
  COUNT_POSTS: BEAMER_COUNT_POSTS_OUTPUT
  GET_CATEGORY: BEAMER_GET_CATEGORY_OUTPUT
  GET_FEED: BEAMER_GET_FEED_OUTPUT
  GET_FEEDS: BEAMER_GET_FEEDS_OUTPUT
  GET_FEED_URL: BEAMER_GET_FEED_URL_OUTPUT
  GET_NOTIFICATION: BEAMER_GET_NOTIFICATION_OUTPUT
  GET_NOTIFICATIONS: BEAMER_GET_NOTIFICATIONS_OUTPUT
  GET_POSTS: BEAMER_GET_POSTS_OUTPUT
  GET_POST_COMMENTS: BEAMER_GET_POST_COMMENTS_OUTPUT
  GET_POST_REACTIONS: BEAMER_GET_POST_REACTIONS_OUTPUT
  PING: BEAMER_PING_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BEAMER toolkit.
 */
export const BEAMER = {
  slug: "beamer",
  tools: {
    /**
     * Tool to count existing posts. use when you need the number of posts matching specific filters.
     */
    COUNT_POSTS: "BEAMER_COUNT_POSTS",
    /**
     * Tool to retrieve a specific category by its id. use when you need to load metadata for a category before filtering or grouping posts by that category.
     */
    GET_CATEGORY: "BEAMER_GET_CATEGORY",
    /**
     * Tool to retrieve the url for your standalone feed. use after embedding to fetch the feed link for embedding or sharing.
     */
    GET_FEED: "BEAMER_GET_FEED",
    /**
     * Tool to retrieve the url for your feed. use when you need to embed or access your standalone feed.
     */
    GET_FEEDS: "BEAMER_GET_FEEDS",
    /**
     * Tool to retrieve the url for your personalized feed. use after setting segmentation or language options to embed or redirect users.
     */
    GET_FEED_URL: "BEAMER_GET_FEED_URL",
    /**
     * Tool to retrieve details of a specific notification by its unique notification id. use after obtaining the notification id to fetch its full details.
     */
    GET_NOTIFICATION: "BEAMER_GET_NOTIFICATION",
    /**
     * Tool to fetch unread notifications. use after providing user context to retrieve and mark notifications as read.
     */
    GET_NOTIFICATIONS: "BEAMER_GET_NOTIFICATIONS",
    /**
     * Tool to retrieve a list of posts. use when you need ids and titles of posts for further operations.
     */
    GET_POSTS: "BEAMER_GET_POSTS",
    /**
     * Tool to retrieve comments for a specific post. use after identifying the post id to list its comments.
     */
    GET_POST_COMMENTS: "BEAMER_GET_POST_COMMENTS",
    /**
     * Tool to retrieve all reactions associated with a specific post. use when you need to list reactions and optionally filter by date, reaction type, or pagination.
     */
    GET_POST_REACTIONS: "BEAMER_GET_POST_REACTIONS",
    /**
     * Tool to ping the beamer api. use when verifying api key authentication before making further requests.
     */
    PING: "BEAMER_PING",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BEAMER".
 */
export type BEAMER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BEAMER".
 */
export type BEAMER_TRIGGER_EVENTS = {}
