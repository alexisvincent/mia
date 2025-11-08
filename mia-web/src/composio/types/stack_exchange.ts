// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of STACK_EXCHANGE's STACK_EXCHANGE_GET_COLLECTIVES tool input.
 */
type STACK_EXCHANGE_GET_COLLECTIVES_INPUT = {
  /**
   * Fromdate
   * @description Unix timestamp to return collectives created on or after this date
   * @default null
   */
  fromdate: number | null;
  /**
   * Max
   * @description Maximum value to include in results (applies to sort)
   * @default null
   */
  max: string | null;
  /**
   * Min
   * @description Minimum value to include in results (applies to sort)
   * @default null
   */
  min: string | null;
  /**
   * Order
   * @description Order of results, 'asc' or 'desc'
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Page
   * @description Page number for pagination (1-based index)
   * @default null
   */
  page: number | null;
  /**
   * Pagesize
   * @description Number of results per page (max 100)
   * @default null
   */
  pagesize: number | null;
  /**
   * Site
   * @description The Stack Exchange site to query (e.g., 'stackoverflow')
   */
  site?: string;
  /**
   * Sort
   * @description Sort method; only 'name' supported (alphabetical)
   * @default null
   * @constant
   */
  sort: "name";
  /**
   * Todate
   * @description Unix timestamp to return collectives created on or before this date
   * @default null
   */
  todate: number | null;
};

/**
 * Type of STACK_EXCHANGE's STACK_EXCHANGE_GET_COLLECTIVES tool output.
 */
type STACK_EXCHANGE_GET_COLLECTIVES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has More
       * @description Whether more results are available
       */
      has_more: boolean;
      /**
       * Items
       * @description List of collectives
       */
      items: {
          /**
           * Description
           * @description Description of the collective
           */
          description: string;
          /**
           * Link
           * @description Link to the collective
           */
          link: string;
          /**
           * Name
           * @description Name of the collective
           */
          name: string;
          /**
           * Slug
           * @description Collective identifier (slug)
           */
          slug: string;
          /**
           * Tags
           * @description Tags associated with the collective
           */
          tags: string[];
      }[];
      /**
       * Quota Max
       * @description Maximum quota
       */
      quota_max: number;
      /**
       * Quota Remaining
       * @description Remaining quota
       */
      quota_remaining: number;
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
 * Type of STACK_EXCHANGE's STACK_EXCHANGE_GET_COLLECTIVE_QUESTIONS tool input.
 */
type STACK_EXCHANGE_GET_COLLECTIVE_QUESTIONS_INPUT = {
  /**
   * Filter
   * @description Response filter to include specific fields
   * @default null
   */
  filter: string | null;
  /**
   * Fromdate
   * @description Unix timestamp for earliest creation date filter
   * @default null
   */
  fromdate: number | null;
  /**
   * Id
   * @description Slug of the collective to fetch questions for
   */
  id?: string;
  /**
   * Max
   * @description Maximum value for sort parameter (timestamp for date sorts)
   * @default null
   */
  max: number | null;
  /**
   * Min
   * @description Minimum value for sort parameter (timestamp for date sorts)
   * @default null
   */
  min: number | null;
  /**
   * Order
   * @description Order of results, 'asc' or 'desc'
   * @default desc
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Page
   * @description Page number for pagination
   * @default 1
   */
  page: number | null;
  /**
   * Pagesize
   * @description Number of items per page (max 100)
   * @default 30
   */
  pagesize: number | null;
  /**
   * Site
   * @description The Stack Exchange site to query (e.g., 'stackoverflow')
   */
  site?: string;
  /**
   * Sort
   * @description Sort by this parameter
   * @default activity
   * @enum {string|null}
   */
  sort: "activity" | "creation" | "votes" | null;
  /**
   * Todate
   * @description Unix timestamp for latest creation date filter
   * @default null
   */
  todate: number | null;
};

/**
 * Type of STACK_EXCHANGE's STACK_EXCHANGE_GET_COLLECTIVE_QUESTIONS tool output.
 */
type STACK_EXCHANGE_GET_COLLECTIVE_QUESTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has More
       * @description Whether more results are available
       */
      has_more: boolean;
      /**
       * Items
       * @description List of questions
       */
      items: {
          /**
           * Answer Count
           * @description Number of answers
           */
          answer_count: number;
          /**
           * Content License
           * @description License of the content
           */
          content_license: string;
          /**
           * Creation Date
           * @description Unix timestamp of creation date
           */
          creation_date: number;
          /**
           * Is Answered
           * @description Whether the question has been answered
           */
          is_answered: boolean;
          /**
           * Last Activity Date
           * @description Unix timestamp of last activity
           */
          last_activity_date: number;
          /**
           * Owner
           * @description Owner of the question
           */
          owner: {
              /**
               * Accept Rate
               * @description Accept rate of the user
               * @default null
               */
              accept_rate: number | null;
              /**
               * Account Id
               * @description Account ID of the user
               * @default null
               */
              account_id: number | null;
              /**
               * Profile Image
               * @description URL of the user's profile image
               * @default null
               */
              profile_image: string | null;
              /**
               * User Type
               * @description Type of the user
               */
              user_type: string;
          };
          /**
           * Question Id
           * @description Unique ID of the question
           */
          question_id: number;
          /**
           * Score
           * @description Score of the question
           */
          score: number;
          /**
           * Tags
           * @description Tags associated with the question
           */
          tags: string[];
          /**
           * View Count
           * @description Number of times the question has been viewed
           */
          view_count: number;
      }[];
      /**
       * Quota Max
       * @description Maximum quota
       */
      quota_max: number;
      /**
       * Quota Remaining
       * @description Remaining quota
       */
      quota_remaining: number;
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
 * Type of STACK_EXCHANGE's STACK_EXCHANGE_GET_COLLECTIVE_TAGS tool input.
 */
type STACK_EXCHANGE_GET_COLLECTIVE_TAGS_INPUT = {
  /**
   * Access Token
   * @description Access token for authenticated requests; if provided it is appended as a parameter.
   * @default null
   */
  access_token: string | null;
  /**
   * Collective Ids
   * @description List of collective IDs to fetch tags for; sent as semicolon-separated string.
   * @default null
   */
  collective_ids: number[] | null;
  /**
   * Filter
   * @description API filter string to control which fields are returned.
   * @default null
   */
  filter: string | null;
  /**
   * Key
   * @description Application key for higher quota limits.
   * @default null
   */
  key: string | null;
  /**
   * Page
   * @description Page number for pagination (1-based index).
   * @default 1
   */
  page: number | null;
  /**
   * Pagesize
   * @description Number of items per page (max 100).
   * @default 30
   */
  pagesize: number | null;
  /**
   * Site
   * @description Site to fetch data from (e.g., 'stackoverflow').
   */
  site?: string;
};

/**
 * Type of STACK_EXCHANGE's STACK_EXCHANGE_GET_COLLECTIVE_TAGS tool output.
 */
type STACK_EXCHANGE_GET_COLLECTIVE_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Backoff
       * @description Backoff time in seconds if present
       * @default null
       */
      backoff: number | null;
      /**
       * Has More
       * @description True if more results are available
       */
      has_more: boolean;
      /**
       * Items
       * @description List of tags associated with the specified collectives
       */
      items: {
          /**
           * Collective Id
           * @description ID of the collective
           */
          collective_id: number;
          /**
           * Count
           * @description Number of times this tag appears in the collective
           */
          count: number;
          /**
           * Tag Name
           * @description Name of the tag
           */
          tag_name: string;
      }[];
      /**
       * Quota Max
       * @description Total quota for this method
       */
      quota_max: number;
      /**
       * Quota Remaining
       * @description Remaining requests in current quota
       */
      quota_remaining: number;
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
 * Type of STACK_EXCHANGE's STACK_EXCHANGE_GET_COMMENTS tool input.
 */
type STACK_EXCHANGE_GET_COMMENTS_INPUT = {
  /**
   * Filter
   * @description Custom filter to include/exclude specific fields
   * @default null
   */
  filter: string | null;
  /**
   * Fromdate
   * @description Unix epoch timestamp to filter comments from
   * @default null
   */
  fromdate: number | null;
  /**
   * Max
   * @description Maximum value for the sort parameter (e.g., timestamp)
   * @default null
   */
  max: number | null;
  /**
   * Min
   * @description Minimum value for the sort parameter (e.g., timestamp)
   * @default null
   */
  min: number | null;
  /**
   * Order
   * @description Order of results, 'asc' or 'desc'
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Page
   * @description Page number for pagination (1-based)
   * @default null
   */
  page: number | null;
  /**
   * Pagesize
   * @description Number of items per page (max 100)
   * @default null
   */
  pagesize: number | null;
  /**
   * Site
   * @description The Stack Exchange site to query (e.g., 'stackoverflow')
   */
  site?: string;
  /**
   * Sort
   * @description Sort by this parameter ('creation' or 'votes')
   * @default null
   * @enum {string|null}
   */
  sort: "creation" | "votes" | null;
  /**
   * Todate
   * @description Unix epoch timestamp to filter comments to
   * @default null
   */
  todate: number | null;
};

/**
 * Type of STACK_EXCHANGE's STACK_EXCHANGE_GET_COMMENTS tool output.
 */
type STACK_EXCHANGE_GET_COMMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has More
       * @description Whether more results are available
       */
      has_more: boolean;
      /**
       * Items
       * @description List of comments returned by the API
       */
      items: {
          /**
           * Body
           * @description Markdown body of the comment
           */
          body: string;
          /**
           * Comment Id
           * @description Unique ID of the comment
           */
          comment_id: number;
          /**
           * Creation Date
           * @description Unix epoch date when the comment was created
           */
          creation_date: number;
          /**
           * Edited
           * @description Whether the comment has been edited
           */
          edited: boolean;
          /**
           * CommentOwner
           * @description Information about the owner of a comment.
           * @default null
           */
          owner: {
              /**
               * Display Name
               * @description Display name of the comment owner
               * @default null
               */
              display_name: string | null;
              /**
               * User Id
               * @description ID of the user who posted the comment
               * @default null
               */
              user_id: number | null;
          } | null;
          /**
           * Post Id
           * @description ID of the post the comment belongs to
           */
          post_id: number;
          /**
           * Score
           * @description Score of the comment
           */
          score: number;
      }[];
      /**
       * Quota Max
       * @description Maximum quota for the day
       */
      quota_max: number;
      /**
       * Quota Remaining
       * @description Remaining quota for the day
       */
      quota_remaining: number;
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
 * Type of STACK_EXCHANGE's STACK_EXCHANGE_GET_COMMENT_FLAG_OPTIONS tool input.
 */
type STACK_EXCHANGE_GET_COMMENT_FLAG_OPTIONS_INPUT = {
  /**
   * Access Token
   * @description OAuth2 access token for authenticated requests.
   * @default null
   */
  access_token: string | null;
  /**
   * Filter
   * @description Response filter to include specific fields.
   * @default null
   */
  filter: string | null;
  /**
   * Ids
   * @description Semicolon-delimited list of comment IDs to fetch flag options for
   */
  ids?: string;
  /**
   * Key
   * @description Application key. Increases request quota if provided.
   * @default null
   */
  key: string | null;
  /**
   * Preview
   * @description If true, returns a preview of flag options without affecting quota.
   * @default false
   */
  preview: boolean | null;
  /**
   * Site
   * @description Stack Exchange site parameter (e.g., 'stackoverflow')
   */
  site?: string;
};

/**
 * Type of STACK_EXCHANGE's STACK_EXCHANGE_GET_COMMENT_FLAG_OPTIONS tool output.
 */
type STACK_EXCHANGE_GET_COMMENT_FLAG_OPTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has More
       * @description Whether there are more results
       */
      has_more: boolean;
      /**
       * Items
       * @description List of available flag options
       */
      items: {
          /**
           * Description
           * @description Detailed explanation of when to use this flag
           */
          description: string;
          /**
           * Id
           * @description Unique identifier for this flag option
           */
          id: number;
          /**
           * Requires Comment
           * @description Whether an additional comment is required when using this flag
           */
          requires_comment: boolean;
          /**
           * Title
           * @description Short title of the flag option
           */
          title: string;
      }[];
      /**
       * Quota Max
       * @description Maximum quota per day
       */
      quota_max: number;
      /**
       * Quota Remaining
       * @description Requests quota left
       */
      quota_remaining: number;
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
 * Type of STACK_EXCHANGE's STACK_EXCHANGE_GET_REVISIONS_BY_IDS tool input.
 */
type STACK_EXCHANGE_GET_REVISIONS_BY_IDS_INPUT = {
  /**
   * Filter
   * @description Custom filter to include specific fields in the response.
   * @default null
   */
  filter: string | null;
  /**
   * Fromdate
   * @description Unix epoch timestamp to filter revisions on or after this date.
   * @default null
   */
  fromdate: number | null;
  /**
   * Ids
   * @description Semicolon-delimited list of post IDs (question or answer IDs), e.g., '123;456'.
   */
  ids?: string;
  /**
   * Page
   * @description Page number for pagination (1-based index).
   * @default null
   */
  page: number | null;
  /**
   * Pagesize
   * @description Number of items per page (max 100).
   * @default null
   */
  pagesize: number | null;
  /**
   * Site
   * @description Target Stack Exchange site, e.g., 'stackoverflow'.
   */
  site?: string;
  /**
   * Todate
   * @description Unix epoch timestamp to filter revisions on or before this date.
   * @default null
   */
  todate: number | null;
};

/**
 * Type of STACK_EXCHANGE's STACK_EXCHANGE_GET_REVISIONS_BY_IDS tool output.
 */
type STACK_EXCHANGE_GET_REVISIONS_BY_IDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Backoff
       * @description Backoff time in seconds, if present.
       * @default null
       */
      backoff: number | null;
      /**
       * Has More
       * @description Indicates if more results are available.
       */
      has_more: boolean;
      /**
       * Items
       * @description List of revisions matching the query.
       */
      items: {
          /**
           * Body
           * @description Markdown body after the revision.
           * @default null
           */
          body: string | null;
          /**
           * Comment
           * @description Revision comment, if any.
           * @default null
           */
          comment: string | null;
          /**
           * Content License
           * @description License for the content.
           * @default null
           */
          content_license: string | null;
          /**
           * Creation Date
           * @description Unix epoch date when the revision was created.
           */
          creation_date: number;
          /**
           * Is Rollback
           * @description Whether this revision was a rollback.
           * @default null
           */
          is_rollback: boolean | null;
          /**
           * Last Body
           * @description Markdown body before the revision.
           * @default null
           */
          last_body: string | null;
          /**
           * Last Tags
           * @description Tags before the revision.
           * @default null
           */
          last_tags: string[] | null;
          /**
           * Last Title
           * @description Title before the revision.
           * @default null
           */
          last_title: string | null;
          /**
           * Post Id
           * @description ID of the post.
           */
          post_id: number;
          /**
           * Post Type
           * @description Type of the post ('question' or 'answer').
           */
          post_type: string;
          /**
           * Revision Guid
           * @description GUID for this revision.
           */
          revision_guid: string;
          /**
           * Revision Number
           * @description Sequence number of this revision.
           */
          revision_number: number;
          /**
           * Revision Type
           * @description Type of revision (e.g., 'edit').
           */
          revision_type: string;
          /**
           * Set Community Wiki
           * @description Whether the post was set to community wiki.
           * @default null
           */
          set_community_wiki: boolean | null;
          /**
           * Tags
           * @description Tags after the revision.
           * @default null
           */
          tags: string[] | null;
          /**
           * Title
           * @description Title after the revision.
           * @default null
           */
          title: string | null;
          /**
           * ShallowUser
           * @description User who performed the revision.
           * @default null
           */
          user: {
              /**
               * Accept Rate
               * @description Acceptance rate of the user.
               * @default null
               */
              accept_rate: number | null;
              /**
               * Account Id
               * @description Account ID of the user.
               * @default null
               */
              account_id: number | null;
              /**
               * BadgeCount
               * @description Badge counts for the user.
               * @default null
               */
              badge_counts: {
                  /**
                   * Bronze
                   * @description Number of bronze badges.
                   */
                  bronze: number;
                  /**
                   * Gold
                   * @description Number of gold badges.
                   */
                  gold: number;
                  /**
                   * Silver
                   * @description Number of silver badges.
                   */
                  silver: number;
              } | null;
              /**
               * Display Name
               * @description Display name of the user.
               * @default null
               */
              display_name: string | null;
              /**
               * Link
               * @description URL to the user's profile.
               * @default null
               */
              link: string | null;
              /**
               * Profile Image
               * @description URL to the user's profile image.
               * @default null
               */
              profile_image: string | null;
              /**
               * Reputation
               * @description Reputation score of the user.
               * @default null
               */
              reputation: number | null;
              /**
               * User Id
               * @description User ID.
               * @default null
               */
              user_id: number | null;
              /**
               * User Type
               * @description Type of user (e.g., 'registered').
               * @default null
               */
              user_type: string | null;
          } | null;
      }[];
      /**
       * Page
       * @description Current page number.
       * @default null
       */
      page: number | null;
      /**
       * Page Size
       * @description Number of items per page.
       * @default null
       */
      page_size: number | null;
      /**
       * Quota Max
       * @description Total quota for the method.
       */
      quota_max: number;
      /**
       * Quota Remaining
       * @description Remaining quota.
       */
      quota_remaining: number;
      /**
       * Total
       * @description Total number of items matching the query.
       * @default null
       */
      total: number | null;
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
 * Type of STACK_EXCHANGE's STACK_EXCHANGE_GET_SEARCH_RESULTS tool input.
 */
type STACK_EXCHANGE_GET_SEARCH_RESULTS_INPUT = {
  /**
   * Access Token
   * @description OAuth2 access token for authenticated requests
   * @default null
   */
  access_token: string | null;
  /**
   * Filter
   * @description Response filter to include specific fields
   * @default null
   */
  filter: string | null;
  /**
   * Fromdate
   * @description Unix timestamp for earliest creation date filter
   * @default null
   */
  fromdate: number | null;
  /**
   * Intitle
   * @description Keyword to search for in question titles
   * @default null
   */
  intitle: string | null;
  /**
   * Key
   * @description Application key for increased quota
   * @default null
   */
  key: string | null;
  /**
   * Max
   * @description Maximum value for the sort field (timestamp for date sorts)
   * @default null
   */
  max: number | null;
  /**
   * Min
   * @description Minimum value for the sort field (timestamp for date sorts)
   * @default null
   */
  min: number | null;
  /**
   * Nottagged
   * @description List of tags to exclude; only used if 'tagged' is set
   * @default null
   */
  nottagged: string[] | null;
  /**
   * Order
   * @description Order of results
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Page
   * @description Page number for pagination
   * @default null
   */
  page: number | null;
  /**
   * Pagesize
   * @description Number of items per page (max 100)
   * @default null
   */
  pagesize: number | null;
  /**
   * Site
   * @description Site to query (e.g., 'stackoverflow')
   */
  site?: string;
  /**
   * Sort
   * @description Sort results by this field
   * @default null
   * @enum {string|null}
   */
  sort: "activity" | "votes" | "creation" | "relevance" | null;
  /**
   * Tagged
   * @description List of tags to include; at least one of 'tagged' or 'intitle' must be set
   * @default null
   */
  tagged: string[] | null;
  /**
   * Todate
   * @description Unix timestamp for latest creation date filter
   * @default null
   */
  todate: number | null;
};

/**
 * Type of STACK_EXCHANGE's STACK_EXCHANGE_GET_SEARCH_RESULTS tool output.
 */
type STACK_EXCHANGE_GET_SEARCH_RESULTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Backoff
       * @description Backoff time in seconds if present
       * @default null
       */
      backoff: number | null;
      /**
       * Has More
       * @description Whether more results are available
       */
      has_more: boolean;
      /**
       * Items
       * @description List of questions matching the criteria
       */
      items: {
          /**
           * Answer Count
           * @description Number of answers
           */
          answer_count: number;
          /**
           * Content License
           * @description License of the content
           */
          content_license: string;
          /**
           * Creation Date
           * @description Unix timestamp of creation date
           */
          creation_date: number;
          /**
           * Is Answered
           * @description Whether the question has been answered
           */
          is_answered: boolean;
          /**
           * Last Activity Date
           * @description Unix timestamp of last activity
           */
          last_activity_date: number;
          /**
           * Owner
           * @description Owner of the question
           */
          owner: {
              /**
               * Display Name
               * @description Display name of the user
               */
              display_name: string;
              /**
               * Link
               * @description URL to the user's profile
               */
              link: string;
              /**
               * Profile Image
               * @description URL of the user's profile image
               * @default null
               */
              profile_image: string | null;
              /**
               * Reputation
               * @description Reputation of the user
               */
              reputation: number;
              /**
               * User Id
               * @description ID of the user
               */
              user_id: number;
              /**
               * User Type
               * @description Type of the user
               */
              user_type: string;
          };
          /**
           * Question Id
           * @description Unique ID of the question
           */
          question_id: number;
          /**
           * Score
           * @description Score of the question
           */
          score: number;
          /**
           * Tags
           * @description Tags associated with the question
           */
          tags: string[];
          /**
           * Title
           * @description Title of the question
           * @default null
           */
          title: string | null;
          /**
           * View Count
           * @description Number of times the question has been viewed
           */
          view_count: number;
      }[];
      /**
       * Quota Max
       * @description Maximum quota
       */
      quota_max: number;
      /**
       * Quota Remaining
       * @description Remaining requests in quota
       */
      quota_remaining: number;
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
 * Type of STACK_EXCHANGE's STACK_EXCHANGE_GET_SITES tool input.
 */
type STACK_EXCHANGE_GET_SITES_INPUT = {
  /**
   * Filter
   * @description Filter to include or exclude specific fields in the response
   * @default null
   */
  filter: string | null;
  /**
   * Page
   * @description Page number for pagination (1-based index)
   * @default null
   */
  page: number | null;
  /**
   * Pagesize
   * @description Number of results per page (max 100)
   * @default null
   */
  pagesize: number | null;
};

/**
 * Type of STACK_EXCHANGE's STACK_EXCHANGE_GET_SITES tool output.
 */
type STACK_EXCHANGE_GET_SITES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has More
       * @description Whether more sites are available
       */
      has_more: boolean;
      /**
       * Items
       * @description List of Stack Exchange sites
       */
      items: {
          /**
           * Aliases
           * @description List of site aliases
           */
          aliases?: string[];
          /**
           * Api Site Parameter
           * @description Parameter to identify the site in API calls
           */
          api_site_parameter: string;
          /**
           * Icon Url
           * @description URL of the site's icon
           */
          icon_url: string;
          /**
           * Logo Url
           * @description URL of the site's logo
           */
          logo_url: string;
          /**
           * Name
           * @description Name of the site
           */
          name: string;
          /**
           * Site Type
           * @description Type of the site (e.g., 'main' or 'meta')
           */
          site_type: string;
          /**
           * Site Url
           * @description URL of the site
           */
          site_url: string;
      }[];
      /**
       * Quota Max
       * @description Maximum quota for the day
       */
      quota_max: number;
      /**
       * Quota Remaining
       * @description Remaining quota for the day
       */
      quota_remaining: number;
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
 * Type map of all available tool input types for toolkit "STACK_EXCHANGE".
 */
export type STACK_EXCHANGE_TOOL_INPUTS = {
  GET_COLLECTIVES: STACK_EXCHANGE_GET_COLLECTIVES_INPUT
  GET_COLLECTIVE_QUESTIONS: STACK_EXCHANGE_GET_COLLECTIVE_QUESTIONS_INPUT
  GET_COLLECTIVE_TAGS: STACK_EXCHANGE_GET_COLLECTIVE_TAGS_INPUT
  GET_COMMENTS: STACK_EXCHANGE_GET_COMMENTS_INPUT
  GET_COMMENT_FLAG_OPTIONS: STACK_EXCHANGE_GET_COMMENT_FLAG_OPTIONS_INPUT
  GET_REVISIONS_BY_IDS: STACK_EXCHANGE_GET_REVISIONS_BY_IDS_INPUT
  GET_SEARCH_RESULTS: STACK_EXCHANGE_GET_SEARCH_RESULTS_INPUT
  GET_SITES: STACK_EXCHANGE_GET_SITES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "STACK_EXCHANGE".
 */
export type STACK_EXCHANGE_TOOL_OUTPUTS = {
  GET_COLLECTIVES: STACK_EXCHANGE_GET_COLLECTIVES_OUTPUT
  GET_COLLECTIVE_QUESTIONS: STACK_EXCHANGE_GET_COLLECTIVE_QUESTIONS_OUTPUT
  GET_COLLECTIVE_TAGS: STACK_EXCHANGE_GET_COLLECTIVE_TAGS_OUTPUT
  GET_COMMENTS: STACK_EXCHANGE_GET_COMMENTS_OUTPUT
  GET_COMMENT_FLAG_OPTIONS: STACK_EXCHANGE_GET_COMMENT_FLAG_OPTIONS_OUTPUT
  GET_REVISIONS_BY_IDS: STACK_EXCHANGE_GET_REVISIONS_BY_IDS_OUTPUT
  GET_SEARCH_RESULTS: STACK_EXCHANGE_GET_SEARCH_RESULTS_OUTPUT
  GET_SITES: STACK_EXCHANGE_GET_SITES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's STACK_EXCHANGE toolkit.
 */
export const STACK_EXCHANGE = {
  slug: "stack_exchange",
  tools: {
    /**
     * Tool to retrieve all collectives on a stack exchange site in alphabetical order. use when you need to list collectives for display or filtering.
     */
    GET_COLLECTIVES: "STACK_EXCHANGE_GET_COLLECTIVES",
    /**
     * Tool to retrieve questions associated with the specified collective. use when you have a collective id and need its questions for a site.
     */
    GET_COLLECTIVE_QUESTIONS: "STACK_EXCHANGE_GET_COLLECTIVE_QUESTIONS",
    /**
     * Tool to retrieve tags associated with specified collectives. use when you need collective tags for display or analysis after confirming which collectives to query.
     */
    GET_COLLECTIVE_TAGS: "STACK_EXCHANGE_GET_COLLECTIVE_TAGS",
    /**
     * Tool to retrieve comments from a specified stack exchange site. use when you need to list comments with optional filters and sorting.
     */
    GET_COMMENTS: "STACK_EXCHANGE_GET_COMMENTS",
    /**
     * Tool to fetch valid flag options for a given comment. use when you need to know which flags a user can raise before submitting. requires authenticated access.
     */
    GET_COMMENT_FLAG_OPTIONS: "STACK_EXCHANGE_GET_COMMENT_FLAG_OPTIONS",
    /**
     * Tool to retrieve revisions for specific posts by their ids. use when you need to examine the edit history of posts by providing semicolon-delimited ids.
     */
    GET_REVISIONS_BY_IDS: "STACK_EXCHANGE_GET_REVISIONS_BY_IDS",
    /**
     * Tool to search the site for questions meeting certain criteria. use after defining tags or keywords to locate relevant questions. at least one of 'tagged' or 'intitle' must be set.
     */
    GET_SEARCH_RESULTS: "STACK_EXCHANGE_GET_SEARCH_RESULTS",
    /**
     * Tool to retrieve all stack exchange sites and their api site parameter values. use when you need to discover available sites for api calls.
     */
    GET_SITES: "STACK_EXCHANGE_GET_SITES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "STACK_EXCHANGE".
 */
export type STACK_EXCHANGE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "STACK_EXCHANGE".
 */
export type STACK_EXCHANGE_TRIGGER_EVENTS = {}
