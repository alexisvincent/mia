// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CANNY's CANNY_ADD_POST_TAG tool input.
 */
type CANNY_ADD_POST_TAG_INPUT = {
  /**
   * Post Id
   * @description Unique identifier of the post to which the tag will be added.
   */
  postID?: string;
  /**
   * Tag Id
   * @description Unique identifier of the tag to add to the post.
   */
  tagID?: string;
};

/**
 * Type of CANNY's CANNY_ADD_POST_TAG tool output.
 */
type CANNY_ADD_POST_TAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * User
       * @description The user who authored the post.
       * @default null
       */
      author: {
          /**
           * Created
           * @description ISO 8601 timestamp when the user was created.
           */
          created: string;
          /**
           * Email
           * @description Email of the user.
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique identifier of the user.
           */
          id: string;
          /**
           * Is Admin
           * @description Whether the user is an admin.
           */
          isAdmin: boolean;
          /**
           * Name
           * @description Name of the user.
           */
          name: string;
          /**
           * Url
           * @description URL to the user's profile.
           */
          url: string;
          /**
           * User Id
           * @description User's unique identifier in your application.
           * @default null
           */
          userID: string | null;
      } | null;
      /**
       * Board
       * @description The board the post belongs to.
       */
      board: {
          /**
           * Created
           * @description ISO 8601 timestamp when the board was created.
           */
          created: string;
          /**
           * Id
           * @description Unique identifier of the board.
           */
          id: string;
          /**
           * Name
           * @description Name of the board.
           */
          name: string;
          /**
           * Post Count
           * @description Number of posts on the board.
           */
          postCount: number;
          /**
           * Url
           * @description URL to the board page.
           */
          url: string;
      };
      /**
       * User
       * @description The admin who performed the action on behalf of the user.
       * @default null
       */
      by: {
          /**
           * Created
           * @description ISO 8601 timestamp when the user was created.
           */
          created: string;
          /**
           * Email
           * @description Email of the user.
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique identifier of the user.
           */
          id: string;
          /**
           * Is Admin
           * @description Whether the user is an admin.
           */
          isAdmin: boolean;
          /**
           * Name
           * @description Name of the user.
           */
          name: string;
          /**
           * Url
           * @description URL to the user's profile.
           */
          url: string;
          /**
           * User Id
           * @description User's unique identifier in your application.
           * @default null
           */
          userID: string | null;
      } | null;
      /**
       * Category
       * @description Category assigned to the post.
       * @default null
       */
      category: {
          /**
           * Id
           * @description Unique identifier of the category.
           */
          id: string;
          /**
           * Name
           * @description Name of the category.
           */
          name: string;
          /**
           * Parent Id
           * @description ID of the parent category, if any.
           * @default null
           */
          parentID: string | null;
          /**
           * Post Count
           * @description Number of posts assigned this category.
           */
          postCount: number;
          /**
           * Url
           * @description URL to filter posts by this category.
           * @default null
           */
          url: string | null;
      } | null;
      /**
       * ChangeComment
       * @description Comment recording a status change.
       * @default null
       */
      changeComment: {
          /**
           * Image Ur Ls
           * @description Image URLs associated with the change comment.
           */
          imageURLs: string[];
          /**
           * Value
           * @description Text of the change comment.
           */
          value: string;
      } | null;
      /**
       * Clickup
       * @description ClickUp integration data.
       * @default null
       */
      clickup: {
          /**
           * Linked Tasks
           * @description List of linked ClickUp tasks.
           */
          linkedTasks: {
              /**
               * Id
               * @description Unique identifier of the ClickUp task.
               */
              id: string;
              /**
               * Link Id
               * @description Link identifier in ClickUp.
               */
              linkID: string;
              /**
               * Name
               * @description Name of the ClickUp task.
               */
              name: string;
              /**
               * Post Id
               * @description ID of the post linked to this task.
               */
              postID: string;
              /**
               * Status
               * @description Status of the ClickUp task.
               */
              status: string;
              /**
               * Url
               * @description URL to the ClickUp task.
               */
              url: string;
          }[];
      } | null;
      /**
       * Comment Count
       * @description Number of comments on the post.
       */
      commentCount: number;
      /**
       * Created
       * @description ISO 8601 timestamp when the post was created.
       */
      created: string;
      /**
       * Custom Fields
       * @description Custom fields attached to the post.
       * @default null
       */
      customFields: {
          /**
           * Id
           * @description Unique identifier of the custom field.
           */
          id: string;
          /**
           * Name
           * @description Name of the custom field.
           */
          name: string;
          /**
           * Value
           * @description Value of the custom field.
           */
          value: string;
      }[] | null;
      /**
       * Details
       * @description Detailed description of the post.
       * @default null
       */
      details: string | null;
      /**
       * Eta
       * @description Estimated timeframe for delivery.
       * @default null
       */
      eta: string | null;
      /**
       * Id
       * @description Unique identifier of the post.
       */
      id: string;
      /**
       * Image Ur Ls
       * @description Image URLs associated with the post.
       * @default null
       */
      imageURLs: string[] | null;
      /**
       * Jira
       * @description Jira integration data.
       * @default null
       */
      jira: {
          /**
           * Linked Issues
           * @description List of linked Jira issues.
           */
          linkedIssues: {
              /**
               * Id
               * @description Unique identifier of the Jira issue.
               */
              id: string;
              /**
               * Key
               * @description Key of the Jira issue.
               */
              key: string;
              /**
               * Url
               * @description URL to the Jira issue.
               */
              url: string;
          }[];
      } | null;
      /**
       * Linear
       * @description Linear integration data.
       * @default null
       */
      linear: {
          /**
           * Linked Issue I Ds
           * @description List of linked Linear issue IDs.
           */
          linkedIssueIDs: string[];
      } | null;
      /**
       * Merge History
       * @description History of merged posts.
       * @default null
       */
      mergeHistory: {
          /**
           * Created
           * @description ISO 8601 timestamp when the merge occurred.
           */
          created: string;
          /**
           * Post
           * @description Data of the merged post.
           */
          post: {
              /**
               * Created
               * @description ISO 8601 timestamp when the merged post was created.
               */
              created: string;
              /**
               * Details
               * @description Details of the merged post.
               * @default null
               */
              details: string | null;
              /**
               * Id
               * @description Unique identifier of the merged post.
               */
              id: string;
              /**
               * Image Ur Ls
               * @description Image URLs in the merged post.
               */
              imageURLs: string[];
              /**
               * Title
               * @description Title of the merged post.
               */
              title: string;
          };
      }[] | null;
      /**
       * User
       * @description Owner of the post.
       * @default null
       */
      owner: {
          /**
           * Created
           * @description ISO 8601 timestamp when the user was created.
           */
          created: string;
          /**
           * Email
           * @description Email of the user.
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique identifier of the user.
           */
          id: string;
          /**
           * Is Admin
           * @description Whether the user is an admin.
           */
          isAdmin: boolean;
          /**
           * Name
           * @description Name of the user.
           */
          name: string;
          /**
           * Url
           * @description URL to the user's profile.
           */
          url: string;
          /**
           * User Id
           * @description User's unique identifier in your application.
           * @default null
           */
          userID: string | null;
      } | null;
      /**
       * Score
       * @description Number of votes on the post.
       */
      score: number;
      /**
       * Status
       * @description Current status of the post.
       */
      status: string;
      /**
       * Status Changed At
       * @description ISO 8601 timestamp when status last changed.
       * @default null
       */
      statusChangedAt: string | null;
      /**
       * Tags
       * @description Tags assigned to the post.
       * @default null
       */
      tags: {
          /**
           * Id
           * @description Unique identifier of the tag.
           */
          id: string;
          /**
           * Name
           * @description Name of the tag.
           */
          name: string;
          /**
           * Post Count
           * @description Number of posts assigned this tag.
           */
          postCount: number;
          /**
           * Url
           * @description URL to filter posts by this tag.
           * @default null
           */
          url: string | null;
      }[] | null;
      /**
       * Title
       * @description Title of the post.
       */
      title: string;
      /**
       * Url
       * @description URL to the post page.
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
 * Type of CANNY's CANNY_CANNY_DELETE_USER tool input.
 */
type CANNY_CANNY_DELETE_USER_INPUT = {
  /**
   * Id
   * @description The unique identifier of the user to delete.
   */
  id?: string;
};

/**
 * Type of CANNY's CANNY_CANNY_DELETE_USER tool output.
 */
type CANNY_CANNY_DELETE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the user was deleted successfully.
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
 * Type of CANNY's CANNY_CHANGE_POST_STATUS tool input.
 */
type CANNY_CHANGE_POST_STATUS_INPUT = {
  /**
   * Changer Id
   * @description Identifier of the admin making the status change.
   */
  changerID?: string;
  /**
   * Comment Image Ur Ls
   * @description Optional list of image URLs to attach to the status change.
   * @default null
   */
  commentImageURLs: string[] | null;
  /**
   * Comment Value
   * @description Optional comment for the status change. Use '
   *     ' for new lines.
   * @default null
   */
  commentValue: string | null;
  /**
   * Post Id
   * @description Unique identifier of the post to update.
   */
  postID?: string;
  /**
   * Should Notify Voters
   * @description Whether non-admin voters should be notified of the status change.
   * @default null
   */
  shouldNotifyVoters: boolean | null;
  /**
   * Status
   * @description New status for the post. Common values include 'open', 'under review', 'planned', 'in progress', 'complete', 'closed', or any custom status configured in Canny.
   */
  status?: string;
};

/**
 * Type of CANNY's CANNY_CHANGE_POST_STATUS tool output.
 */
type CANNY_CHANGE_POST_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * User
       * @description The user who authored the post.
       * @default null
       */
      author: {
          /**
           * Created
           * @description ISO 8601 timestamp when the user was created.
           */
          created: string;
          /**
           * Email
           * @description Email of the user.
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique identifier of the user.
           */
          id: string;
          /**
           * Is Admin
           * @description Whether the user is an admin.
           */
          isAdmin: boolean;
          /**
           * Name
           * @description Name of the user.
           */
          name: string;
          /**
           * Url
           * @description URL to the user's profile.
           */
          url: string;
          /**
           * User Id
           * @description The user's unique identifier in your system.
           * @default null
           */
          userID: string | null;
      } | null;
      /**
       * Board
       * @description The board the post belongs to.
       */
      board: {
          /**
           * Created
           * @description ISO 8601 timestamp when the board was created.
           */
          created: string;
          /**
           * Id
           * @description Unique identifier of the board.
           */
          id: string;
          /**
           * Name
           * @description Name of the board.
           */
          name: string;
          /**
           * Post Count
           * @description Number of posts on the board.
           */
          postCount: number;
          /**
           * Url
           * @description URL to the board page.
           */
          url: string;
      };
      /**
       * User
       * @description The admin who performed the status change.
       * @default null
       */
      by: {
          /**
           * Created
           * @description ISO 8601 timestamp when the user was created.
           */
          created: string;
          /**
           * Email
           * @description Email of the user.
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique identifier of the user.
           */
          id: string;
          /**
           * Is Admin
           * @description Whether the user is an admin.
           */
          isAdmin: boolean;
          /**
           * Name
           * @description Name of the user.
           */
          name: string;
          /**
           * Url
           * @description URL to the user's profile.
           */
          url: string;
          /**
           * User Id
           * @description The user's unique identifier in your system.
           * @default null
           */
          userID: string | null;
      } | null;
      /**
       * Category
       * @description Category assigned to the post.
       * @default null
       */
      category: {
          /**
           * Id
           * @description Unique identifier of the category.
           */
          id: string;
          /**
           * Name
           * @description Name of the category.
           */
          name: string;
          /**
           * Parent Id
           * @description ID of the parent category, if any.
           * @default null
           */
          parentID: string | null;
          /**
           * Post Count
           * @description Number of posts assigned this category.
           */
          postCount: number;
          /**
           * Url
           * @description URL to filter posts by this category.
           */
          url: string;
      } | null;
      /**
       * ChangeComment
       * @description Comment recording the status change.
       * @default null
       */
      changeComment: {
          /**
           * Image Ur Ls
           * @description Image URLs associated with the change comment.
           */
          imageURLs: string[];
          /**
           * Value
           * @description Text recording the status change comment.
           */
          value: string;
      } | null;
      /**
       * Clickup
       * @description ClickUp integration data.
       * @default null
       */
      clickup: {
          /**
           * Linked Tasks
           * @description List of linked ClickUp tasks.
           */
          linkedTasks: {
              /**
               * Id
               * @description Unique identifier of the ClickUp task.
               */
              id: string;
              /**
               * Link Id
               * @description Link identifier in ClickUp.
               */
              linkID: string;
              /**
               * Name
               * @description Name of the ClickUp task.
               */
              name: string;
              /**
               * Post Id
               * @description ID of the post linked to this task.
               */
              postID: string;
              /**
               * Status
               * @description Status of the ClickUp task.
               */
              status: string;
              /**
               * Url
               * @description URL to the ClickUp task.
               */
              url: string;
          }[];
      } | null;
      /**
       * Comment Count
       * @description Number of comments on the post.
       */
      commentCount: number;
      /**
       * Created
       * @description ISO 8601 timestamp when the post was created.
       */
      created: string;
      /**
       * Custom Fields
       * @description Custom fields attached to the post.
       * @default null
       */
      customFields: {
          /**
           * Id
           * @description Unique identifier of the custom field.
           */
          id: string;
          /**
           * Name
           * @description Name of the custom field.
           */
          name: string;
          /**
           * Value
           * @description Value of the custom field.
           */
          value: string;
      }[] | null;
      /**
       * Details
       * @description Detailed description of the post.
       * @default null
       */
      details: string | null;
      /**
       * Eta
       * @description Estimated timeframe for delivery.
       * @default null
       */
      eta: string | null;
      /**
       * Id
       * @description Unique identifier of the post.
       */
      id: string;
      /**
       * Image Ur Ls
       * @description Image URLs associated with the post.
       * @default null
       */
      imageURLs: string[] | null;
      /**
       * Jira
       * @description Jira integration data.
       * @default null
       */
      jira: {
          /**
           * Linked Issues
           * @description List of linked Jira issues.
           */
          linkedIssues: {
              /**
               * Id
               * @description Unique identifier of the Jira issue.
               */
              id: string;
              /**
               * Key
               * @description Key of the Jira issue.
               */
              key: string;
              /**
               * Url
               * @description URL to the Jira issue.
               */
              url: string;
          }[];
      } | null;
      /**
       * Linear
       * @description Linear integration data.
       * @default null
       */
      linear: {
          /**
           * Linked Issue I Ds
           * @description List of linked Linear issue IDs.
           */
          linkedIssueIDs: string[];
      } | null;
      /**
       * Merge History
       * @description History of merged posts.
       * @default null
       */
      mergeHistory: {
          /**
           * Created
           * @description ISO 8601 timestamp when the merge occurred.
           */
          created: string;
          /**
           * Post
           * @description Data of the merged post.
           */
          post: {
              /**
               * Created
               * @description ISO 8601 timestamp when the merged post was created.
               */
              created: string;
              /**
               * Details
               * @description Details of the merged post.
               * @default null
               */
              details: string | null;
              /**
               * Id
               * @description Unique identifier of the merged post.
               */
              id: string;
              /**
               * Image Ur Ls
               * @description Image URLs in the merged post.
               */
              imageURLs: string[];
              /**
               * Title
               * @description Title of the merged post.
               */
              title: string;
          };
      }[] | null;
      /**
       * User
       * @description Owner of the post.
       * @default null
       */
      owner: {
          /**
           * Created
           * @description ISO 8601 timestamp when the user was created.
           */
          created: string;
          /**
           * Email
           * @description Email of the user.
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique identifier of the user.
           */
          id: string;
          /**
           * Is Admin
           * @description Whether the user is an admin.
           */
          isAdmin: boolean;
          /**
           * Name
           * @description Name of the user.
           */
          name: string;
          /**
           * Url
           * @description URL to the user's profile.
           */
          url: string;
          /**
           * User Id
           * @description The user's unique identifier in your system.
           * @default null
           */
          userID: string | null;
      } | null;
      /**
       * Score
       * @description Number of votes on the post.
       */
      score: number;
      /**
       * Status
       * @description Current status of the post.
       */
      status: string;
      /**
       * Status Changed At
       * @description ISO 8601 timestamp when status last changed.
       * @default null
       */
      statusChangedAt: string | null;
      /**
       * Tags
       * @description Tags assigned to the post.
       * @default null
       */
      tags: {
          /**
           * Id
           * @description Unique identifier of the tag.
           */
          id: string;
          /**
           * Name
           * @description Name of the tag.
           */
          name: string;
          /**
           * Post Count
           * @description Number of posts assigned this tag.
           */
          postCount: number;
          /**
           * Url
           * @description URL to filter posts by this tag.
           */
          url: string;
      }[] | null;
      /**
       * Title
       * @description Title of the post.
       */
      title: string;
      /**
       * Url
       * @description URL to the post page.
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
 * Type of CANNY's CANNY_CREATE_CHANGELOG_ENTRY tool input.
 */
type CANNY_CREATE_CHANGELOG_ENTRY_INPUT = {
  /**
   * Details
   * @description The Markdown-formatted details of your changelog entry.
   */
  details?: string;
  /**
   * Label I Ds
   * @description List of label IDs to assign to this changelog entry.
   * @default null
   */
  labelIDs: string[] | null;
  /**
   * Notify
   * @description If publishing immediately, whether to notify users by email. Defaults to false.
   * @default null
   */
  notify: boolean | null;
  /**
   * Post I Ds
   * @description List of post IDs to link to this changelog entry.
   * @default null
   */
  postIDs: string[] | null;
  /**
   * Published
   * @description Whether to publish the entry immediately. Defaults to false.
   * @default null
   */
  published: boolean | null;
  /**
   * Published On
   * @description If 'published' is true, override the publish date (ISO 8601 format, must not be in the future).
   * @default null
   */
  publishedOn: string | null;
  /**
   * Scheduled For
   * @description Schedule a future publish date (ISO 8601 format, must be in the future).
   * @default null
   */
  scheduledFor: string | null;
  /**
   * Title
   * @description The title of your changelog entry.
   */
  title?: string;
  /**
   * Type
   * @description Optional type of your changelog entry: 'fixed', 'new', or 'improved'.
   * @default null
   * @enum {string|null}
   */
  type: "fixed" | "new" | "improved" | null;
};

/**
 * Type of CANNY's CANNY_CREATE_CHANGELOG_ENTRY tool output.
 */
type CANNY_CREATE_CHANGELOG_ENTRY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The unique ID of the new changelog entry.
       */
      id: string;
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
 * Type of CANNY's CANNY_CREATE_COMMENT tool input.
 */
type CANNY_CREATE_COMMENT_INPUT = {
  /**
   * Author Id
   * @description Unique identifier of the comment's author.
   */
  authorID?: string;
  /**
   * Created At
   * @description Original creation timestamp in ISO 8601 format (useful for migrating comments)
   * @default null
   */
  createdAt: string | null;
  /**
   * Image Ur Ls
   * @description List of image URLs to attach to the comment.
   * @default null
   */
  imageURLs: string[] | null;
  /**
   * Internal
   * @description Flag for internal-use-only comments. Can only be true if the author is a company member.
   * @default null
   */
  internal: boolean | null;
  /**
   * Parent Id
   * @description If this comment is a reply, the unique identifier of the parent comment.
   * @default null
   */
  parentID: string | null;
  /**
   * Post Id
   * @description Unique identifier of the post to which the comment is added.
   */
  postID?: string;
  /**
   * Should Notify Voters
   * @description Whether to send email notifications to voters of the post.
   * @default null
   */
  shouldNotifyVoters: boolean | null;
  /**
   * Value
   * @description Text content of the comment, up to 2500 characters. Required if no images.
   * @default null
   */
  value: string | null;
};

/**
 * Type of CANNY's CANNY_CREATE_COMMENT tool output.
 */
type CANNY_CREATE_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the newly created comment.
       */
      id: string;
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
 * Type of CANNY's CANNY_CREATE_OR_UPDATE_USER tool input.
 */
type CANNY_CREATE_OR_UPDATE_USER_INPUT = {
  /**
   * Alias
   * @description Optional alias for the user.
   * @default null
   */
  alias: string | null;
  /**
   * Avatar Url
   * @description URL to the user's avatar image.
   * @default null
   */
  avatarURL: string | null;
  /**
   * Companies
   * @description List of companies associated with the user.
   * @default null
   */
  companies: {
      /**
       * Created
       * @description Creation date of the company in ISO 8601 format.
       * @default null
       */
      created: string | null;
      /**
       * Custom Fields
       * @description Custom fields for the company (keys 0-30 chars; string values <200 chars).
       * @default null
       */
      customFields: {
          [key: string]: unknown;
      } | null;
      /**
       * Id
       * @description The company's unique identifier.
       */
      id: string;
      /**
       * Monthly Spend
       * @description Monthly spend of the company in dollars.
       * @default null
       */
      monthlySpend: number | null;
      /**
       * Name
       * @description The company's name.
       * @default null
       */
      name: string | null;
  }[] | null;
  /**
   * Created
   * @description Date the user was created in your system (ISO 8601 format).
   * @default null
   */
  created: string | null;
  /**
   * Custom Fields
   * @description Custom fields for the user (keys 0-30 chars; string values <200 chars).
   * @default null
   */
  customFields: {
      [key: string]: unknown;
  } | null;
  /**
   * Email
   * @description The user's email address.
   * @default null
   */
  email: string | null;
  /**
   * Id
   * @description Canny's unique identifier for the user.
   * @default null
   */
  id: string | null;
  /**
   * Name
   * @description The user's name (1-50 characters).
   */
  name?: string;
  /**
   * User Id
   * @description Your application's unique identifier for the user.
   * @default null
   */
  userID: string | null;
};

/**
 * Type of CANNY's CANNY_CREATE_OR_UPDATE_USER tool output.
 */
type CANNY_CREATE_OR_UPDATE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The unique identifier of the created or updated user in Canny.
       */
      id: string;
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
 * Type of CANNY's CANNY_CREATE_POST tool input.
 */
type CANNY_CREATE_POST_INPUT = {
  /**
   * Assignee Id
   * @description ID of the team member assigned to the post.
   * @default null
   */
  assigneeID: string | null;
  /**
   * Board Id
   * @description ID of the board where the post will be created.
   */
  boardID?: string;
  /**
   * Created
   * @description Unix timestamp for when the post was created. Defaults to server time if not provided.
   * @default null
   */
  created: number | null;
  /**
   * Details
   * @description Detailed description or body of the post.
   * @default null
   */
  details: string | null;
  /**
   * Is Private
   * @description Flag indicating if the post should be private.
   * @default null
   */
  isPrivate: boolean | null;
  /**
   * Tags
   * @description List of tags to associate with the post.
   * @default null
   */
  tags: string[] | null;
  /**
   * Title
   * @description Title of the post.
   */
  title?: string;
  /**
   * User Id
   * @description ID of the user creating the post.
   */
  userID?: string;
};

/**
 * Type of CANNY's CANNY_CREATE_POST tool output.
 */
type CANNY_CREATE_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Board Id
       * @description ID of the board where the post was created.
       * @default null
       */
      boardID: string | null;
      /**
       * Created
       * @description Unix timestamp when the post was created.
       * @default null
       */
      created: number | null;
      /**
       * Details
       * @description Details of the created post.
       * @default null
       */
      details: string | null;
      /**
       * Id
       * @description Unique identifier for the newly created post.
       */
      id: string;
      /**
       * Title
       * @description Title of the created post.
       * @default null
       */
      title: string | null;
      /**
       * Url
       * @description URL to access the newly created post.
       * @default null
       */
      url: string | null;
      /**
       * User Id
       * @description ID of the user who created the post.
       * @default null
       */
      userID: string | null;
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
 * Type of CANNY's CANNY_CREATE_TAG tool input.
 */
type CANNY_CREATE_TAG_INPUT = {
  /**
   * Board Id
   * @description ID of the board where the tag should be created.
   */
  boardID?: string;
  /**
   * Name
   * @description Name of the tag, between 1 and 30 characters.
   */
  name?: string;
};

/**
 * Type of CANNY's CANNY_CREATE_TAG tool output.
 */
type CANNY_CREATE_TAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Board
       * @description The board this tag is associated with.
       */
      board: {
          /**
           * Created
           * @description ISO 8601 timestamp when the board was created.
           */
          created: string;
          /**
           * Id
           * @description Unique identifier for the board.
           */
          id: string;
          /**
           * Name
           * @description The board's name.
           */
          name: string;
          /**
           * Post Count
           * @description Number of non-deleted posts on this board.
           */
          postCount: number;
          /**
           * Url
           * @description URL to the board's page.
           */
          url: string;
      };
      /**
       * Created
       * @description ISO 8601 timestamp when the tag was created.
       */
      created: string;
      /**
       * Id
       * @description Unique identifier for the newly created tag.
       */
      id: string;
      /**
       * Name
       * @description Name of the tag.
       */
      name: string;
      /**
       * Post Count
       * @description Number of posts assigned this tag.
       */
      postCount: number;
      /**
       * Url
       * @description URL to view posts filtered by this tag.
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
 * Type of CANNY's CANNY_CREATE_VOTE tool input.
 */
type CANNY_CREATE_VOTE_INPUT = {
  /**
   * By Id
   * @description The unique identifier of the user casting the vote on behalf of the voter. Must be a Canny administrator.
   * @default null
   */
  byID: string | null;
  /**
   * Created At
   * @description If migrating votes, the original creation timestamp in ISO 8601 format.
   * @default null
   */
  createdAt: string | null;
  /**
   * Post Id
   * @description The unique identifier of the post to vote on.
   */
  postID?: string;
  /**
   * Vote Priority
   * @description Priority of the vote: 0 (Nice to have), 10 (Important), or 20 (Must have).
   * @default null
   * @enum {integer|null}
   */
  votePriority: 0 | 10 | 20 | null;
  /**
   * Voter Id
   * @description The unique identifier of the user casting the vote.
   */
  voterID?: string;
};

/**
 * Type of CANNY's CANNY_CREATE_VOTE tool output.
 */
type CANNY_CREATE_VOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the vote was successfully created or already existed.
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
 * Type of CANNY's CANNY_DELETE_COMMENT tool input.
 */
type CANNY_DELETE_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description The unique identifier of the comment to delete.
   */
  commentID?: string;
};

/**
 * Type of CANNY's CANNY_DELETE_COMMENT tool output.
 */
type CANNY_DELETE_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the comment was deleted successfully.
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
 * Type of CANNY's CANNY_DELETE_POST tool input.
 */
type CANNY_DELETE_POST_INPUT = {
  /**
   * Post Id
   * @description The unique identifier of the post to delete.
   */
  postID?: string;
};

/**
 * Type of CANNY's CANNY_DELETE_POST tool output.
 */
type CANNY_DELETE_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the post was deleted successfully.
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
 * Type of CANNY's CANNY_DELETE_VOTE tool input.
 */
type CANNY_DELETE_VOTE_INPUT = {
  /**
   * Post Id
   * @description The unique identifier of the post from which the vote will be removed.
   */
  postID?: string;
  /**
   * Voter Id
   * @description The unique identifier of the user whose vote is being removed.
   */
  voterID?: string;
};

/**
 * Type of CANNY's CANNY_DELETE_VOTE tool output.
 */
type CANNY_DELETE_VOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the vote was deleted successfully.
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
 * Type of CANNY's CANNY_LIST_BOARDS tool input.
 */
type CANNY_LIST_BOARDS_INPUT = object;

/**
 * Type of CANNY's CANNY_LIST_BOARDS tool output.
 */
type CANNY_LIST_BOARDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Boards
       * @description An array of board objects.
       */
      boards: {
          /**
           * Created
           * Format: date-time
           * @description Time at which the board was created, in ISO 8601 format.
           */
          created: string;
          /**
           * Id
           * @description Unique identifier for the board.
           */
          id: string;
          /**
           * Is Private
           * @description Whether the board is set as private.
           */
          isPrivate: boolean;
          /**
           * Name
           * @description The board's name.
           */
          name: string;
          /**
           * Post Count
           * @description The number of non-deleted posts associated with the board.
           */
          postCount: number;
          /**
           * Private Comments
           * @description Whether comments left on posts can be viewed by other end-users.
           */
          privateComments: boolean;
          /**
           * Token
           * @description A unique token for the board.
           */
          token: string;
          /**
           * Url
           * Format: uri
           * @description The URL to the board's page.
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
 * Type of CANNY's CANNY_LIST_CATEGORIES tool input.
 */
type CANNY_LIST_CATEGORIES_INPUT = {
  /**
   * Board Id
   * @description Filter categories by this board's ID.
   * @default null
   */
  boardID: string | null;
  /**
   * Limit
   * @description Number of categories to return. Defaults to 10 if not specified.
   * @default null
   */
  limit: number | null;
  /**
   * Skip
   * @description Number of categories to skip. Defaults to 0 if not specified.
   * @default null
   */
  skip: number | null;
};

/**
 * Type of CANNY's CANNY_LIST_CATEGORIES tool output.
 */
type CANNY_LIST_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Categories
       * @description List of category objects.
       */
      categories: {
          /**
           * Board
           * @description The board this category is associated with.
           */
          board: {
              /**
               * Created
               * @description ISO 8601 timestamp when the board was created.
               */
              created: string;
              /**
               * Id
               * @description Unique identifier for the board.
               */
              id: string;
              /**
               * Name
               * @description The board's name.
               */
              name: string;
              /**
               * Post Count
               * @description Number of non-deleted posts on this board.
               */
              postCount: number;
              /**
               * Url
               * @description URL to the board's page.
               */
              url: string;
          };
          /**
           * Created
           * @description ISO 8601 timestamp when the category was created.
           */
          created: string;
          /**
           * Id
           * @description Unique identifier for the category.
           */
          id: string;
          /**
           * Name
           * @description The name of the category.
           */
          name: string;
          /**
           * Parent Id
           * @description ID of the parent category if this is a subcategory.
           * @default null
           */
          parentID: string | null;
          /**
           * Post Count
           * @description Number of posts assigned to this category.
           */
          postCount: number;
          /**
           * Url
           * @description URL to the board filtered by this category.
           */
          url: string;
      }[];
      /**
       * Has More
       * @description Whether more categories are available beyond this page.
       */
      hasMore: boolean;
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
 * Type of CANNY's CANNY_LIST_COMMENTS tool input.
 */
type CANNY_LIST_COMMENTS_INPUT = {
  /**
   * Author Id
   * @description Filter comments by this author ID.
   * @default null
   */
  authorID: string | null;
  /**
   * Board Id
   * @description Filter comments by this board ID.
   * @default null
   */
  boardID: string | null;
  /**
   * Company Id
   * @description Fetch comments for posts created by users linked to this company ID.
   * @default null
   */
  companyID: string | null;
  /**
   * Limit
   * @description Number of comments to fetch (default: 10).
   * @default 10
   */
  limit: number;
  /**
   * Post Id
   * @description Filter comments by this post ID.
   * @default null
   */
  postID: string | null;
  /**
   * Skip
   * @description Number of comments to skip before fetching (default: 0).
   * @default 0
   */
  skip: number;
};

/**
 * Type of CANNY's CANNY_LIST_COMMENTS tool output.
 */
type CANNY_LIST_COMMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Comments
       * @description Array of comment objects matching the filters.
       */
      comments: {
          /**
           * Author
           * @description The user object who created the comment.
           */
          author: {
              [key: string]: unknown;
          };
          /**
           * Board
           * @description The board object associated with the comment.
           */
          board: {
              [key: string]: unknown;
          };
          /**
           * Created
           * Format: date-time
           * @description Creation time in ISO 8601 format.
           */
          created: string;
          /**
           * Id
           * @description Unique identifier for the comment.
           */
          id: string;
          /**
           * Image Ur Ls
           * @description URLs of images associated with the comment.
           */
          imageURLs: string[];
          /**
           * Internal
           * @description Indicates if the comment is internal.
           */
          internal: boolean;
          /**
           * Like Count
           * @description Number of likes the comment has received.
           */
          likeCount: number;
          /**
           * Mentions
           * @description Users mentioned in the comment.
           */
          mentions: {
              [key: string]: unknown;
          }[];
          /**
           * Parent Id
           * @description ID of the parent comment if this is a reply.
           * @default null
           */
          parentID: string | null;
          /**
           * Post
           * @description The post object associated with the comment.
           */
          post: {
              [key: string]: unknown;
          };
          /**
           * Private
           * @description Indicates if the comment is private.
           */
          private: boolean;
          /**
           * Reactions
           * @description Counts of reactions the comment has received.
           * @default null
           */
          reactions: {
              [key: string]: number;
          } | null;
          /**
           * Status
           * @description Status of the comment, e.g., 'open', 'closed'.
           * @default null
           */
          status: string | null;
          /**
           * Value
           * @description Text content of the comment.
           */
          value: string;
      }[];
      /**
       * Has More
       * @description Indicates if more comments are available beyond the fetched list.
       */
      hasMore: boolean;
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
 * Type of CANNY's CANNY_LIST_COMPANIES tool input.
 */
type CANNY_LIST_COMPANIES_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor from a previous listCompanies response.
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Maximum number of companies to return (1-100).
   * @default null
   */
  limit: number | null;
};

/**
 * Type of CANNY's CANNY_LIST_COMPANIES tool output.
 */
type CANNY_LIST_COMPANIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Companies
       * @description List of company objects.
       */
      companies: {
          /**
           * Created
           * Format: date-time
           * @description Time when the company was created, in ISO 8601 format.
           */
          created: string;
          /**
           * Custom Fields
           * @description Custom fields associated with the company.
           * @default null
           */
          customFields: {
              [key: string]: unknown;
          } | null;
          /**
           * Id
           * @description Unique identifier of the company.
           */
          id: string;
          /**
           * Name
           * @description Name of the company.
           */
          name: string;
      }[];
      /**
       * Has More
       * @description Indicates if more companies are available beyond this page.
       */
      hasMore: boolean;
      /**
       * Next Cursor
       * @description Cursor to retrieve the next page of companies when hasMore is true.
       * @default null
       */
      nextCursor: string | null;
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
 * Type of CANNY's CANNY_LIST_OPPORTUNITIES tool input.
 */
type CANNY_LIST_OPPORTUNITIES_INPUT = {
  /**
   * Limit
   * @description Maximum number of opportunities to return. Defaults to 10 if unspecified.
   * @default null
   */
  limit: number | null;
  /**
   * Skip
   * @description Number of opportunities to skip before returning. Defaults to 0.
   * @default null
   */
  skip: number | null;
};

/**
 * Type of CANNY's CANNY_LIST_OPPORTUNITIES tool output.
 */
type CANNY_LIST_OPPORTUNITIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has More
       * @description True if more opportunities exist beyond this page.
       */
      hasMore: boolean;
      /**
       * Opportunities
       * @description Array of opportunity objects.
       */
      opportunities: {
          /**
           * Closed
           * @description Whether the opportunity is closed.
           */
          closed: boolean;
          /**
           * Id
           * @description Unique identifier for the opportunity.
           */
          id: string;
          /**
           * Name
           * @description Name of the opportunity.
           */
          name: string;
          /**
           * Post I Ds
           * @description List of post IDs linked to this opportunity.
           */
          postIDs: string[];
          /**
           * Salesforce Opportunity Id
           * @description Salesforce-specific ID of the opportunity.
           */
          salesforceOpportunityID: string;
          /**
           * Value
           * @description Monetary value of the opportunity.
           */
          value: number;
          /**
           * Won
           * @description Whether the opportunity has been won.
           */
          won: boolean;
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
 * Type of CANNY's CANNY_LIST_POSTS tool input.
 */
type CANNY_LIST_POSTS_INPUT = {
  /**
   * Author Id
   * @description Only fetch posts by this author ID.
   * @default null
   */
  authorID: string | null;
  /**
   * Board Id
   * @description ID of the board to fetch posts for.
   * @default null
   */
  boardID: string | null;
  /**
   * Company Id
   * @description Only fetch posts created by users linked to this company identifier.
   * @default null
   */
  companyID: string | null;
  /**
   * Limit
   * @description Number of posts to fetch; defaults to 10.
   * @default null
   */
  limit: number | null;
  /**
   * Search
   * @description Search query to filter posts by title or details.
   * @default null
   */
  search: string | null;
  /**
   * Skip
   * @description Number of posts to skip before fetching; defaults to 0.
   * @default null
   */
  skip: number | null;
  /**
   * Sort
   * @description Order in which to fetch posts. 'relevance' requires a search value.
   * @default null
   * @enum {string|null}
   */
  sort: "newest" | "oldest" | "relevance" | "score" | "statusChanged" | "trending" | null;
  /**
   * Status
   * @description Comma-separated list of statuses to filter by (e.g. 'planned,complete').
   * @default null
   */
  status: string | null;
  /**
   * Tag I Ds
   * @description Only fetch posts tagged with at least one of these tag IDs.
   * @default null
   */
  tagIDs: string[] | null;
};

/**
 * Type of CANNY's CANNY_LIST_POSTS tool output.
 */
type CANNY_LIST_POSTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has More
       * @description Indicates if more posts exist beyond this page.
       */
      hasMore: boolean;
      /**
       * Posts
       * @description List of post objects.
       */
      posts: {
          /**
           * PostAuthor
           * @description Author of the post.
           * @default null
           */
          author: {
              /**
               * Created
               * @description ISO 8601 timestamp when the user was created.
               */
              created: string;
              /**
               * Email
               * @description Email of the user, if available.
               * @default null
               */
              email: string | null;
              /**
               * Id
               * @description Unique identifier for the user.
               */
              id: string;
              /**
               * Is Admin
               * @description Whether the user is an admin.
               */
              isAdmin: boolean;
              /**
               * Name
               * @description Name of the user.
               */
              name: string;
              /**
               * Url
               * @description URL to the user's profile.
               */
              url: string;
              /**
               * User Id
               * @description User's unique identifier in your application.
               * @default null
               */
              userID: string | null;
          } | null;
          /**
           * Board
           * @description Board the post belongs to.
           */
          board: {
              /**
               * Created
               * @description ISO 8601 timestamp when the board was created.
               */
              created: string;
              /**
               * Id
               * @description Unique identifier for the board.
               */
              id: string;
              /**
               * Name
               * @description Name of the board.
               */
              name: string;
              /**
               * Post Count
               * @description Number of non-deleted posts on the board.
               */
              postCount: number;
              /**
               * Url
               * @description URL to the board.
               */
              url: string;
          };
          /**
           * PostCategory
           * @description Category assigned to the post.
           * @default null
           */
          category: {
              /**
               * Id
               * @description Unique identifier for the category.
               */
              id: string;
              /**
               * Name
               * @description Name of the category.
               */
              name: string;
              /**
               * Parent Id
               * @description ID of the parent category, if any.
               * @default null
               */
              parentID: string | null;
              /**
               * Post Count
               * @description Number of posts assigned this category.
               */
              postCount: number;
              /**
               * Url
               * @description URL to filter board by this category.
               * @default null
               */
              url: string | null;
          } | null;
          /**
           * Comment Count
           * @description Number of non-deleted comments on the post.
           */
          commentCount: number;
          /**
           * Created
           * @description ISO 8601 timestamp when the post was created.
           */
          created: string;
          /**
           * Details
           * @description Detailed description of the post.
           * @default null
           */
          details: string | null;
          /**
           * Eta
           * @description Estimated timeframe for delivery.
           * @default null
           */
          eta: string | null;
          /**
           * Id
           * @description Unique identifier for the post.
           */
          id: string;
          /**
           * Image Ur Ls
           * @description Image URLs associated with the post.
           * @default null
           */
          imageURLs: string[] | null;
          /**
           * Score
           * @description Number of votes the post has received.
           */
          score: number;
          /**
           * Status
           * @description Status of the post.
           */
          status: string;
          /**
           * Status Changed At
           * @description ISO 8601 timestamp when status last changed.
           * @default null
           */
          statusChangedAt: string | null;
          /**
           * Tags
           * @description Tags assigned to the post.
           * @default null
           */
          tags: {
              /**
               * Id
               * @description Unique identifier for the tag.
               */
              id: string;
              /**
               * Name
               * @description Name of the tag.
               */
              name: string;
              /**
               * Post Count
               * @description Number of posts assigned this tag.
               */
              postCount: number;
              /**
               * Url
               * @description URL to filter board by this tag.
               * @default null
               */
              url: string | null;
          }[] | null;
          /**
           * Title
           * @description Title of the post.
           */
          title: string;
          /**
           * Url
           * @description URL to the post.
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
 * Type of CANNY's CANNY_LIST_TAGS tool input.
 */
type CANNY_LIST_TAGS_INPUT = {
  /**
   * Board Id
   * @description Filter tags by this board's ID.
   * @default null
   */
  boardID: string | null;
  /**
   * Limit
   * @description Maximum number of tags to return. Defaults to 10.
   * @default null
   */
  limit: number | null;
  /**
   * Skip
   * @description Number of tags to skip before returning results. Defaults to 0.
   * @default null
   */
  skip: number | null;
};

/**
 * Type of CANNY's CANNY_LIST_TAGS tool output.
 */
type CANNY_LIST_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has More
       * @description True if more tags are available beyond this page.
       */
      hasMore: boolean;
      /**
       * Tags
       * @description List of tag objects.
       */
      tags: {
          /**
           * Board
           * @description The board this tag is associated with.
           */
          board: {
              /**
               * Created
               * @description ISO 8601 timestamp when the board was created.
               */
              created: string;
              /**
               * Id
               * @description Unique identifier for the board.
               */
              id: string;
              /**
               * Name
               * @description The board's name.
               */
              name: string;
              /**
               * Post Count
               * @description Number of non-deleted posts on this board.
               */
              postCount: number;
              /**
               * Url
               * @description URL to the board's page.
               */
              url: string;
          };
          /**
           * Created
           * @description ISO 8601 timestamp when the tag was created.
           */
          created: string;
          /**
           * Id
           * @description Unique identifier for the tag.
           */
          id: string;
          /**
           * Name
           * @description The name of the tag.
           */
          name: string;
          /**
           * Post Count
           * @description Number of posts assigned this tag.
           */
          postCount: number;
          /**
           * Url
           * @description URL to the board filtered by this tag.
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
 * Type of CANNY's CANNY_LIST_USERS tool input.
 */
type CANNY_LIST_USERS_INPUT = {
  /**
   * Cursor
   * @description Cursor from a previous request to continue pagination.
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Number of entries to fetch (1-100). Defaults to 10.
   * @default 10
   */
  limit: number | null;
};

/**
 * Type of CANNY's CANNY_LIST_USERS tool output.
 */
type CANNY_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cursor
       * @description Cursor for the next set of results when hasNextPage is true.
       * @default null
       */
      cursor: string | null;
      /**
       * Has Next Page
       * @description Indicates if more users are available beyond the current page.
       */
      hasNextPage: boolean;
      /**
       * Users
       * @description Array of user objects.
       */
      users: {
          /**
           * Alias
           * @description User's alias.
           * @default null
           */
          alias: string | null;
          /**
           * Avatar Url
           * @description URL to the user's avatar image.
           * @default null
           */
          avatarURL: string | null;
          /**
           * Created
           * @description User's creation date in ISO 8601 format.
           */
          created: string;
          /**
           * Custom Fields
           * @description Custom fields associated with the user.
           */
          customFields: {
              [key: string]: unknown;
          };
          /**
           * Email
           * @description User's email address.
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique identifier for the user.
           */
          id: string;
          /**
           * Is Admin
           * @description Indicates if the user is a Canny admin.
           */
          isAdmin: boolean;
          /**
           * Last Activity
           * @description Last interaction date in ISO 8601 format.
           * @default null
           */
          lastActivity: string | null;
          /**
           * Name
           * @description User's name.
           * @default null
           */
          name: string | null;
          /**
           * Url
           * @description URL to the user's profile.
           * @default null
           */
          url: string | null;
          /**
           * User Id
           * @description User's unique identifier in your application.
           * @default null
           */
          userID: string | null;
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
 * Type of CANNY's CANNY_LIST_VOTES tool input.
 */
type CANNY_LIST_VOTES_INPUT = {
  /**
   * Board Id
   * @description Filter votes by this board ID.
   * @default null
   */
  boardID: string | null;
  /**
   * Limit
   * @description Number of votes to fetch (default: 10).
   * @default 10
   */
  limit: number;
  /**
   * Post Id
   * @description Filter votes by this post ID.
   * @default null
   */
  postID: string | null;
  /**
   * Skip
   * @description Number of votes to skip before fetching (default: 0).
   * @default 0
   */
  skip: number;
  /**
   * Voter Id
   * @description Filter votes by this voter ID.
   * @default null
   */
  voterID: string | null;
};

/**
 * Type of CANNY's CANNY_LIST_VOTES tool output.
 */
type CANNY_LIST_VOTES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has More
       * @description Indicates if more votes are available beyond the fetched list.
       */
      hasMore: boolean;
      /**
       * Votes
       * @description Array of vote objects matching the filters.
       */
      votes: {
          /**
           * Created
           * @description Timestamp when the vote was created.
           */
          created: string;
          /**
           * Id
           * @description Unique identifier for the vote.
           */
          id: string;
          /**
           * Post
           * @description The post object associated with the vote.
           */
          post: {
              [key: string]: unknown;
          };
          /**
           * Vote Priority
           * @description Priority of the vote: 0 (Nice to have), 10 (Important), or 20 (Must have).
           * @default null
           */
          votePriority: number | null;
          /**
           * Voter
           * @description The user object who cast the vote.
           */
          voter: {
              [key: string]: unknown;
          };
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
 * Type of CANNY's CANNY_RETRIEVE_BOARD tool input.
 */
type CANNY_RETRIEVE_BOARD_INPUT = {
  /**
   * Id
   * @description Unique identifier of the board.
   */
  id?: string;
};

/**
 * Type of CANNY's CANNY_RETRIEVE_BOARD tool output.
 */
type CANNY_RETRIEVE_BOARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * Format: date-time
       * @description Time at which the board was created, in ISO 8601 format.
       */
      created: string;
      /**
       * Id
       * @description Unique identifier for the board.
       */
      id: string;
      /**
       * Is Private
       * @description Whether the board is private.
       */
      isPrivate: boolean;
      /**
       * Name
       * @description The board's name.
       */
      name: string;
      /**
       * Post Count
       * @description Number of non-deleted posts associated with the board.
       */
      postCount: number;
      /**
       * Private Comments
       * @description Whether comments on posts are private.
       */
      privateComments: boolean;
      /**
       * Url
       * Format: uri
       * @description URL to the board's page.
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
 * Type of CANNY's CANNY_RETRIEVE_TAG tool input.
 */
type CANNY_RETRIEVE_TAG_INPUT = {
  /**
   * Id
   * @description Unique identifier of the tag to retrieve.
   */
  id?: string;
};

/**
 * Type of CANNY's CANNY_RETRIEVE_TAG tool output.
 */
type CANNY_RETRIEVE_TAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Board
       * @description The board this tag is associated with.
       */
      board: {
          /**
           * Created
           * @description ISO 8601 timestamp when the board was created.
           */
          created: string;
          /**
           * Id
           * @description Unique identifier of the board.
           */
          id: string;
          /**
           * Name
           * @description The board's name.
           */
          name: string;
          /**
           * Post Count
           * @description Number of non-deleted posts on this board.
           */
          postCount: number;
          /**
           * Url
           * @description URL to the board's page.
           */
          url: string;
      };
      /**
       * Created
       * @description ISO 8601 timestamp when the tag was created.
       */
      created: string;
      /**
       * Id
       * @description Unique identifier of the tag.
       */
      id: string;
      /**
       * Name
       * @description Name of the tag.
       */
      name: string;
      /**
       * Post Count
       * @description Number of posts assigned this tag.
       */
      postCount: number;
      /**
       * Url
       * @description URL to view posts filtered by this tag.
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
 * Type of CANNY's CANNY_RETRIEVE_USER tool input.
 */
type CANNY_RETRIEVE_USER_INPUT = {
  /**
   * Email
   * @description User's email address (provide one of 'id', 'userID', or 'email').
   * @default null
   */
  email: string | null;
  /**
   * Id
   * @description Canny user ID (provide one of 'id', 'userID', or 'email').
   * @default null
   */
  id: string | null;
  /**
   * User Id
   * @description Your application user ID (provide one of 'id', 'userID', or 'email').
   * @default null
   */
  userID: string | null;
};

/**
 * Type of CANNY's CANNY_RETRIEVE_USER tool output.
 */
type CANNY_RETRIEVE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Alias
       * @description User alias.
       * @default null
       */
      alias: string | null;
      /**
       * Avatar Url
       * @description URL to the user's avatar.
       * @default null
       */
      avatarURL: string | null;
      /**
       * Created
       * @description ISO 8601 timestamp when the user was created.
       */
      created: string;
      /**
       * Custom Fields
       * @description Custom fields associated with the user.
       */
      customFields: {
          [key: string]: unknown;
      };
      /**
       * Email
       * @description User's email address.
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description Canny user ID.
       */
      id: string;
      /**
       * Is Admin
       * @description Whether the user is an admin.
       */
      isAdmin: boolean;
      /**
       * Last Activity
       * @description ISO 8601 timestamp of the user's last activity.
       * @default null
       */
      lastActivity: string | null;
      /**
       * Name
       * @description User's name.
       */
      name: string;
      /**
       * Url
       * @description URL to the user's Canny profile.
       */
      url: string;
      /**
       * User Id
       * @description Your application user ID.
       * @default null
       */
      userID: string | null;
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
 * Type of CANNY's CANNY_UPDATE_POST tool input.
 */
type CANNY_UPDATE_POST_INPUT = {
  /**
   * Custom Fields
   * @description Custom fields to set on the post. Keys must be 0-30 characters; values can be string, number, or boolean.
   * @default null
   */
  customFields: {
      [key: string]: string | number | boolean;
  } | null;
  /**
   * Details
   * @description Detailed text body of the post.
   * @default null
   */
  details: string | null;
  /**
   * Eta
   * @description Estimated completion date in MM/YYYY format, e.g., '06/2022'.
   * @default null
   */
  eta: string | null;
  /**
   * Eta Public
   * @description Whether the ETA should be visible to end-users.
   * @default null
   */
  etaPublic: boolean | null;
  /**
   * Image Ur Ls
   * @description List of image URLs to attach to the post.
   * @default null
   */
  imageURLs: string[] | null;
  /**
   * Post Id
   * @description Unique identifier of the post to update.
   */
  postID?: string;
  /**
   * Title
   * @description Short title of the post.
   * @default null
   */
  title: string | null;
};

/**
 * Type of CANNY's CANNY_UPDATE_POST tool output.
 */
type CANNY_UPDATE_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the post was updated successfully.
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
 * Type map of all available tool input types for toolkit "CANNY".
 */
export type CANNY_TOOL_INPUTS = {
  ADD_POST_TAG: CANNY_ADD_POST_TAG_INPUT
  CANNY_DELETE_USER: CANNY_CANNY_DELETE_USER_INPUT
  CHANGE_POST_STATUS: CANNY_CHANGE_POST_STATUS_INPUT
  CREATE_CHANGELOG_ENTRY: CANNY_CREATE_CHANGELOG_ENTRY_INPUT
  CREATE_COMMENT: CANNY_CREATE_COMMENT_INPUT
  CREATE_OR_UPDATE_USER: CANNY_CREATE_OR_UPDATE_USER_INPUT
  CREATE_POST: CANNY_CREATE_POST_INPUT
  CREATE_TAG: CANNY_CREATE_TAG_INPUT
  CREATE_VOTE: CANNY_CREATE_VOTE_INPUT
  DELETE_COMMENT: CANNY_DELETE_COMMENT_INPUT
  DELETE_POST: CANNY_DELETE_POST_INPUT
  DELETE_VOTE: CANNY_DELETE_VOTE_INPUT
  LIST_BOARDS: CANNY_LIST_BOARDS_INPUT
  LIST_CATEGORIES: CANNY_LIST_CATEGORIES_INPUT
  LIST_COMMENTS: CANNY_LIST_COMMENTS_INPUT
  LIST_COMPANIES: CANNY_LIST_COMPANIES_INPUT
  LIST_OPPORTUNITIES: CANNY_LIST_OPPORTUNITIES_INPUT
  LIST_POSTS: CANNY_LIST_POSTS_INPUT
  LIST_TAGS: CANNY_LIST_TAGS_INPUT
  LIST_USERS: CANNY_LIST_USERS_INPUT
  LIST_VOTES: CANNY_LIST_VOTES_INPUT
  RETRIEVE_BOARD: CANNY_RETRIEVE_BOARD_INPUT
  RETRIEVE_TAG: CANNY_RETRIEVE_TAG_INPUT
  RETRIEVE_USER: CANNY_RETRIEVE_USER_INPUT
  UPDATE_POST: CANNY_UPDATE_POST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CANNY".
 */
export type CANNY_TOOL_OUTPUTS = {
  ADD_POST_TAG: CANNY_ADD_POST_TAG_OUTPUT
  CANNY_DELETE_USER: CANNY_CANNY_DELETE_USER_OUTPUT
  CHANGE_POST_STATUS: CANNY_CHANGE_POST_STATUS_OUTPUT
  CREATE_CHANGELOG_ENTRY: CANNY_CREATE_CHANGELOG_ENTRY_OUTPUT
  CREATE_COMMENT: CANNY_CREATE_COMMENT_OUTPUT
  CREATE_OR_UPDATE_USER: CANNY_CREATE_OR_UPDATE_USER_OUTPUT
  CREATE_POST: CANNY_CREATE_POST_OUTPUT
  CREATE_TAG: CANNY_CREATE_TAG_OUTPUT
  CREATE_VOTE: CANNY_CREATE_VOTE_OUTPUT
  DELETE_COMMENT: CANNY_DELETE_COMMENT_OUTPUT
  DELETE_POST: CANNY_DELETE_POST_OUTPUT
  DELETE_VOTE: CANNY_DELETE_VOTE_OUTPUT
  LIST_BOARDS: CANNY_LIST_BOARDS_OUTPUT
  LIST_CATEGORIES: CANNY_LIST_CATEGORIES_OUTPUT
  LIST_COMMENTS: CANNY_LIST_COMMENTS_OUTPUT
  LIST_COMPANIES: CANNY_LIST_COMPANIES_OUTPUT
  LIST_OPPORTUNITIES: CANNY_LIST_OPPORTUNITIES_OUTPUT
  LIST_POSTS: CANNY_LIST_POSTS_OUTPUT
  LIST_TAGS: CANNY_LIST_TAGS_OUTPUT
  LIST_USERS: CANNY_LIST_USERS_OUTPUT
  LIST_VOTES: CANNY_LIST_VOTES_OUTPUT
  RETRIEVE_BOARD: CANNY_RETRIEVE_BOARD_OUTPUT
  RETRIEVE_TAG: CANNY_RETRIEVE_TAG_OUTPUT
  RETRIEVE_USER: CANNY_RETRIEVE_USER_OUTPUT
  UPDATE_POST: CANNY_UPDATE_POST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CANNY toolkit.
 */
export const CANNY = {
  slug: "canny",
  tools: {
    /**
     * Tool to add a tag to a specific post. use when you need to categorize or group content by applying an existing tag.
     */
    ADD_POST_TAG: "CANNY_ADD_POST_TAG",
    /**
     * Tool to delete a user and their comments and votes. use when you need to fully remove a user's account and all associated data (e.g., gdpr compliance).
     */
    CANNY_DELETE_USER: "CANNY_CANNY_DELETE_USER",
    /**
     * Tool to change a post's status. use when you need to update a post's workflow stage and optionally notify voters.
     */
    CHANGE_POST_STATUS: "CANNY_CHANGE_POST_STATUS",
    /**
     * Tool to create and optionally publish a new changelog entry. use when you need to add a product update record, control publish timing, and notify users. example: "create changelog entry titled 'version 1.2' with details '...' and publish immediately.".
     */
    CREATE_CHANGELOG_ENTRY: "CANNY_CREATE_CHANGELOG_ENTRY",
    /**
     * Tool to create a new comment on a post. use when you have the authorid and postid and want to submit feedback or replies.
     */
    CREATE_COMMENT: "CANNY_CREATE_COMMENT",
    /**
     * Tool to create or update a user in canny. use when you need to provision a new user or synchronize updates to an existing user profile. example: "create or update user with email user@example.com"
     */
    CREATE_OR_UPDATE_USER: "CANNY_CREATE_OR_UPDATE_USER",
    /**
     * Tool to create a new post on a board. use when you have the boardid and userid and need to submit new feedback.
     */
    CREATE_POST: "CANNY_CREATE_POST",
    /**
     * Tool to create a new tag. use when you have the boardid and tag name and need to categorize posts.
     */
    CREATE_TAG: "CANNY_CREATE_TAG",
    /**
     * Tool to create a vote for a post. use when you need to record or migrate a user's vote on a post, optionally setting priority or original creation time. example: create a vote for postid abc123 with voterid user 456.
     */
    CREATE_VOTE: "CANNY_CREATE_VOTE",
    /**
     * Tool to delete a comment. use when moderation is required to remove a specific comment by its id. example: "delete the comment with id 553c3ef8b8cdcd1501ba1238."
     */
    DELETE_COMMENT: "CANNY_DELETE_COMMENT",
    /**
     * Tool to delete a post. use when you need to permanently remove a post by its id. example: "delete the post with id 553c3ef8b8cdcd1501ba1238."
     */
    DELETE_POST: "CANNY_DELETE_POST",
    /**
     * Tool to delete a vote. use when you need to remove a user's vote from a specific post by its id. example: "delete the vote from postid abc123 for voterid user 456."
     */
    DELETE_VOTE: "CANNY_DELETE_VOTE",
    /**
     * Tool to list all boards. use when you need to retrieve every board for your company after authentication.
     */
    LIST_BOARDS: "CANNY_LIST_BOARDS",
    /**
     * Tool to list categories. use when fetching categories for a specific board by its id.
     */
    LIST_CATEGORIES: "CANNY_LIST_CATEGORIES",
    /**
     * Tool to list comments for posts, boards, or authors. use after authentication to fetch comments with optional filters.
     */
    LIST_COMMENTS: "CANNY_LIST_COMMENTS",
    /**
     * Tool to list companies associated with your canny account. use after authentication to retrieve companies with pagination support.
     */
    LIST_COMPANIES: "CANNY_LIST_COMPANIES",
    /**
     * Tool to list opportunities linked to posts. use when you need to fetch customer opportunities synced from crm.
     */
    LIST_OPPORTUNITIES: "CANNY_LIST_OPPORTUNITIES",
    /**
     * Tool to list posts with various filters. use after selecting a board or to search/filter posts.
     */
    LIST_POSTS: "CANNY_LIST_POSTS",
    /**
     * Tool to list tags. use when fetching tags optionally filtered by board id and handling pagination.
     */
    LIST_TAGS: "CANNY_LIST_TAGS",
    /**
     * Tool to list end-users in your workspace. use when you need to fetch and paginate through your workspace's users.
     */
    LIST_USERS: "CANNY_LIST_USERS",
    /**
     * Tool to list votes for a post. use after retrieving post details to view voters.
     */
    LIST_VOTES: "CANNY_LIST_VOTES",
    /**
     * Tool to retrieve details of a board by its id. use when you need metadata for a specific board.
     */
    RETRIEVE_BOARD: "CANNY_RETRIEVE_BOARD",
    /**
     * Tool to retrieve details of a tag by its id. use after obtaining a valid tag id.
     */
    RETRIEVE_TAG: "CANNY_RETRIEVE_TAG",
    /**
     * Tool to retrieve user details by canny user id, app user id, or email. use when you have exactly one identifier and need full user information. example: "retrieve user with email user@example.com"
     */
    RETRIEVE_USER: "CANNY_RETRIEVE_USER",
    /**
     * Tool to update post details. use when you need to change a post's title, details, eta, images, or custom fields.
     */
    UPDATE_POST: "CANNY_UPDATE_POST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CANNY".
 */
export type CANNY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CANNY".
 */
export type CANNY_TRIGGER_EVENTS = {}
