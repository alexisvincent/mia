// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of RAISELY's RAISELY_GET_API_DOCS tool input.
 */
type RAISELY_GET_API_DOCS_INPUT = object;

/**
 * Type of RAISELY's RAISELY_GET_API_DOCS tool output.
 */
type RAISELY_GET_API_DOCS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw
       * @description The OpenAPI specification as a JSON object, detailing all API endpoints, schemas, and metadata.
       */
      raw: {
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
 * Type of RAISELY's RAISELY_GET_AVAILABLE_EVENTS tool input.
 */
type RAISELY_GET_AVAILABLE_EVENTS_INPUT = object;

/**
 * Type of RAISELY's RAISELY_GET_AVAILABLE_EVENTS tool output.
 */
type RAISELY_GET_AVAILABLE_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Donation Events
       * @description Donation events
       */
      donation_events: {
          /**
           * Description
           * @description A description of when this event is fired
           */
          description: string;
          /**
           * Event
           * @description The name of the webhook event
           */
          event: string;
      }[];
      /**
       * Order Events
       * @description Order events
       */
      order_events: {
          /**
           * Description
           * @description A description of when this event is fired
           */
          description: string;
          /**
           * Event
           * @description The name of the webhook event
           */
          event: string;
      }[];
      /**
       * Post Events
       * @description Post events
       */
      post_events: {
          /**
           * Description
           * @description A description of when this event is fired
           */
          description: string;
          /**
           * Event
           * @description The name of the webhook event
           */
          event: string;
      }[];
      /**
       * Profile Events
       * @description Profile events
       */
      profile_events: {
          /**
           * Description
           * @description A description of when this event is fired
           */
          description: string;
          /**
           * Event
           * @description The name of the webhook event
           */
          event: string;
      }[];
      /**
       * Subscription Events
       * @description Subscription events
       */
      subscription_events: {
          /**
           * Description
           * @description A description of when this event is fired
           */
          description: string;
          /**
           * Event
           * @description The name of the webhook event
           */
          event: string;
      }[];
      /**
       * User Events
       * @description User events
       */
      user_events: {
          /**
           * Description
           * @description A description of when this event is fired
           */
          description: string;
          /**
           * Event
           * @description The name of the webhook event
           */
          event: string;
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
 * Type of RAISELY's RAISELY_GET_CAMPAIGNS tool input.
 */
type RAISELY_GET_CAMPAIGNS_INPUT = {
  /**
   * Limit
   * @description Number of records to return per page (minimum 1).
   * @default null
   */
  limit: number | null;
  /**
   * Mode
   * @description Filter campaigns by their mode value.
   * @default null
   */
  mode: string | null;
  /**
   * Offset
   * @description Number of records to skip before starting to return results.
   * @default null
   */
  offset: number | null;
  /**
   * Order
   * @description Sort direction: 'asc' or 'desc' (requires 'sort').
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Path
   * @description Filter campaigns by their path value.
   * @default null
   */
  path: string | null;
  /**
   * Private
   * @description If true, omit configuration block to reduce response size.
   * @default null
   */
  private: boolean | null;
  /**
   * Q
   * @description Full-text search term to filter campaigns.
   * @default null
   */
  q: string | null;
  /**
   * Sort
   * @description Field to sort by, e.g., 'createdAt'.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of RAISELY's RAISELY_GET_CAMPAIGNS tool output.
 */
type RAISELY_GET_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description List of campaign objects.
   */
  data?: {
      /**
       * Created At
       * @description ISO timestamp when the campaign was created.
       */
      createdAt: string;
      /**
       * Currency
       * @description Currency code of the campaign.
       * @default null
       */
      currency: string | null;
      /**
       * Description
       * @description Description of the campaign.
       * @default null
       */
      description: string | null;
      /**
       * End At
       * @description ISO timestamp for campaign end.
       * @default null
       */
      endAt: string | null;
      /**
       * Goal
       * @description Fundraising goal amount.
       * @default null
       */
      goal: number | null;
      /**
       * Mode
       * @description Mode value of the campaign.
       * @default null
       */
      mode: string | null;
      /**
       * Name
       * @description Name of the campaign.
       * @default null
       */
      name: string | null;
      /**
       * Path
       * @description Path value of the campaign.
       * @default null
       */
      path: string | null;
      /**
       * Private
       * @description Private custom fields of the campaign (if requested).
       * @default null
       */
      private: {
          [key: string]: unknown;
      } | null;
      /**
       * Public
       * @description Public custom fields of the campaign.
       */
      public: {
          [key: string]: unknown;
      };
      /**
       * Slug
       * @description URL-friendly slug of the campaign.
       * @default null
       */
      slug: string | null;
      /**
       * Start At
       * @description ISO timestamp for campaign start.
       * @default null
       */
      startAt: string | null;
      /**
       * Updated At
       * @description ISO timestamp when the campaign was last updated.
       */
      updatedAt: string;
      /**
       * Uuid
       * @description Unique identifier of the campaign.
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
   * Pagination
   * @description Pagination details.
   */
  pagination?: {
      /**
       * Limit
       * @description Number of records per page.
       */
      limit: number;
      /**
       * Offset
       * @description Number of records skipped.
       */
      offset: number;
      /**
       * Total
       * @description Total number of records available.
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
 * Type of RAISELY's RAISELY_GET_CAMPAIGNS_PROFILES tool input.
 */
type RAISELY_GET_CAMPAIGNS_PROFILES_INPUT = {
  /**
   * Campaign
   * Format: uuid
   * @description UUID of the campaign to list profiles for
   */
  campaign?: unknown;
};

/**
 * Type of RAISELY's RAISELY_GET_CAMPAIGNS_PROFILES tool output.
 */
type RAISELY_GET_CAMPAIGNS_PROFILES_OUTPUT = {
  /**
   * Data
   * @description List of fundraising profiles for the campaign
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the profile was created
       */
      createdAt: string;
      /**
       * Currency
       * @description Currency code, e.g., 'AUD', 'USD'
       * @default null
       */
      currency: string | null;
      /**
       * Goal
       * @description Fundraising goal in cents
       * @default null
       */
      goal: number | null;
      /**
       * Name
       * @description Name of the profile
       * @default null
       */
      name: string | null;
      /**
       * Private
       * @description Private custom fields of the profile
       * @default null
       */
      private: {
          [key: string]: unknown;
      } | null;
      /**
       * Public
       * @description Public custom fields of the profile
       */
      public: {
          [key: string]: unknown;
      };
      /**
       * Status
       * @description Status of the profile, e.g., 'ACTIVE', 'DELETED'
       * @default null
       */
      status: string | null;
      /**
       * Total
       * @description Total amount raised in cents
       * @default null
       */
      total: number | null;
      /**
       * Type
       * @description Type of profile, e.g., 'INDIVIDUAL', 'TEAM', 'ORGANISATION'
       * @default null
       */
      type: string | null;
      /**
       * Updated At
       * @description Timestamp when the profile was last updated
       */
      updatedAt: string;
      /**
       * User
       * @description User associated with the profile
       */
      user: {
          /**
           * Created At
           * @description Timestamp when the user was created
           */
          createdAt: string;
          /**
           * Email
           * @description Email address of the user
           * @default null
           */
          email: string | null;
          /**
           * First Name
           * @description First name of the user
           * @default null
           */
          firstName: string | null;
          /**
           * Last Name
           * @description Last name of the user
           * @default null
           */
          lastName: string | null;
          /**
           * Photo Url
           * @description URL to the user's photo
           * @default null
           */
          photoUrl: string | null;
          /**
           * Updated At
           * @description Timestamp when the user was last updated
           */
          updatedAt: string;
          /**
           * Uuid
           * @description Unique identifier of the user
           */
          uuid: string;
      };
      /**
       * Uuid
       * @description Unique identifier of the profile
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of RAISELY's RAISELY_GET_POSTS tool input.
 */
type RAISELY_GET_POSTS_INPUT = {
  /**
   * Limit
   * @description Number of posts to return per page.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of posts to skip before starting to return results.
   * @default null
   */
  offset: number | null;
  /**
   * Order
   * @description Sort order, either 'asc' or 'desc'.
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Sort
   * @description Field to sort by, e.g., 'createdAt'.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of RAISELY's RAISELY_GET_POSTS tool output.
 */
type RAISELY_GET_POSTS_OUTPUT = {
  /**
   * Data
   * @description List of post objects.
   */
  data?: {
      /**
       * Content
       * @description Content of the post.
       */
      content: string;
      /**
       * Created At
       * @description ISO timestamp when the post was created.
       */
      createdAt: string;
      /**
       * Title
       * @description Title of the post.
       */
      title: string;
      /**
       * Updated At
       * @description ISO timestamp when the post was last updated.
       */
      updatedAt: string;
      /**
       * Uuid
       * @description Unique identifier for the post.
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
   * Pagination
   * @description Pagination details.
   */
  pagination?: {
      /**
       * Limit
       * @description Number of posts per page.
       */
      limit: number;
      /**
       * Offset
       * @description Number of posts skipped.
       */
      offset: number;
      /**
       * Total
       * @description Total number of posts available.
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
 * Type of RAISELY's RAISELY_GET_PROFILES tool input.
 */
type RAISELY_GET_PROFILES_INPUT = {
  /**
   * Campaign
   * @description UUID, path, or domain of the campaign to filter profiles by.
   */
  campaign?: string;
  /**
   * Limit
   * @description Number of records to return per page (must be >=1).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of records to skip (must be >=0).
   * @default null
   */
  offset: number | null;
  /**
   * Order
   * @description Sort direction: 'asc' or 'desc' (requires 'sort').
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Private
   * @description Include private custom fields when true (requires proper permissions).
   * @default null
   */
  private: boolean | null;
  /**
   * Q
   * @description Search query to find profiles matching given text.
   * @default null
   */
  q: string | null;
  /**
   * Rank
   * @description Rank profiles by total raised ('asc' or 'desc').
   * @default null
   * @enum {string|null}
   */
  rank: "asc" | "desc" | null;
  /**
   * Rank Activity Time
   * @description Rank profiles by activity time ('asc' or 'desc').
   * @default null
   * @enum {string|null}
   */
  rankActivityTime: "asc" | "desc" | null;
  /**
   * Rank Activity Total
   * @description Rank profiles by activity total ('asc' or 'desc').
   * @default null
   * @enum {string|null}
   */
  rankActivityTotal: "asc" | "desc" | null;
  /**
   * Rank Donors
   * @description Rank profiles by unique donor count ('asc' or 'desc').
   * @default null
   * @enum {string|null}
   */
  rankDonors: "asc" | "desc" | null;
  /**
   * Sort
   * @description Field to sort by, e.g., 'createdAt'.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of RAISELY's RAISELY_GET_PROFILES tool output.
 */
type RAISELY_GET_PROFILES_OUTPUT = {
  /**
   * Data
   * @description List of profile objects.
   */
  data?: {
      /**
       * Campaign Uuid
       * @description UUID of the associated campaign.
       */
      campaignUuid: string;
      /**
       * Created At
       * @description ISO8601 timestamp when the profile was created.
       */
      createdAt: string;
      /**
       * Currency
       * @description Currency code of the profile (e.g., 'USD').
       * @default null
       */
      currency: string | null;
      /**
       * Description
       * @description Description of the profile.
       * @default null
       */
      description: string | null;
      /**
       * Goal
       * @description Fundraising goal in cents.
       * @default null
       */
      goal: number | null;
      /**
       * Name
       * @description Name of the profile.
       * @default null
       */
      name: string | null;
      /**
       * Path
       * @description URL path of the profile.
       * @default null
       */
      path: string | null;
      /**
       * Private
       * @description Private custom fields of the profile (if requested).
       * @default null
       */
      private: {
          [key: string]: unknown;
      } | null;
      /**
       * Public
       * @description Public custom fields of the profile.
       */
      public: {
          [key: string]: unknown;
      };
      /**
       * Status
       * @description Status of the profile (e.g., 'ACTIVE', 'DELETED').
       * @default null
       */
      status: string | null;
      /**
       * Total
       * @description Total amount raised in cents.
       * @default null
       */
      total: number | null;
      /**
       * Type
       * @description Type of profile (e.g., 'INDIVIDUAL', 'GROUP').
       * @default null
       */
      type: string | null;
      /**
       * Updated At
       * @description ISO8601 timestamp when the profile was last updated.
       */
      updatedAt: string;
      /**
       * User Uuid
       * @description UUID of the user owning the profile.
       */
      userUuid: string;
      /**
       * Uuid
       * @description Unique identifier of the profile.
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
   * Pagination
   * @description Pagination details.
   */
  pagination?: {
      /**
       * Limit
       * @description Number of records per page.
       */
      limit: number;
      /**
       * Offset
       * @description Number of records skipped.
       */
      offset: number;
      /**
       * Total
       * @description Total number of records available.
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
 * Type of RAISELY's RAISELY_GET_TAGS tool input.
 */
type RAISELY_GET_TAGS_INPUT = {
  /**
   * Limit
   * @description Maximum number of tags to return per page.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of tags to skip before starting to return results.
   * @default null
   */
  offset: number | null;
  /**
   * Order
   * @description Sort order: 'asc' for ascending or 'desc' for descending.
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Private
   * @description If true, include tags flagged as private (requires authentication).
   * @default null
   */
  private: boolean | null;
  /**
   * Q
   * @description Search term to filter tags by matching text.
   * @default null
   */
  q: string | null;
  /**
   * Sort
   * @description Field to sort by, e.g., 'name' or 'createdAt'.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of RAISELY's RAISELY_GET_TAGS tool output.
 */
type RAISELY_GET_TAGS_OUTPUT = {
  /**
   * Data
   * @description List of tag objects.
   */
  data?: ({
      /**
       * Name
       * @description Human-readable name of the tag.
       * @default null
       */
      name: string | null;
      /**
       * Slug
       * @description URL-friendly slug of the tag.
       * @default null
       */
      slug: string | null;
      /**
       * Uuid
       * @description Unique identifier of the tag.
       */
      uuid: string;
  } & {
      [key: string]: unknown;
  })[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Pagination
   * @description Pagination details.
   */
  pagination?: {
      /**
       * Limit
       * @description Number of items per page.
       */
      limit: number;
      /**
       * Offset
       * @description Number of items skipped.
       */
      offset: number;
      /**
       * Total
       * @description Total number of items available.
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
 * Type of RAISELY's RAISELY_GET_USERS tool input.
 */
type RAISELY_GET_USERS_INPUT = {
  /**
   * Limit
   * @description Number of records to return per page (minimum 1).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of records to skip before starting to return results (minimum 0).
   * @default null
   */
  offset: number | null;
  /**
   * Order
   * @description Sort order, either 'asc' (ascending) or 'desc' (descending).
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Private
   * @description If true, include private custom fields in each user object.
   * @default null
   */
  private: boolean | null;
  /**
   * Sort
   * @description Field to sort by, e.g., 'createdAt'.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of RAISELY's RAISELY_GET_USERS tool output.
 */
type RAISELY_GET_USERS_OUTPUT = {
  /**
   * Data
   * @description List of user objects.
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the user was created.
       */
      createdAt: string;
      /**
       * Email
       * @description User's email address.
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description User's first name.
       * @default null
       */
      firstName: string | null;
      /**
       * Last Name
       * @description User's last name.
       * @default null
       */
      lastName: string | null;
      /**
       * Private
       * @description Private custom fields (included if `private=true` in request).
       * @default null
       */
      private: {
          [key: string]: unknown;
      } | null;
      /**
       * Public
       * @description Public custom fields.
       * @default null
       */
      public: {
          [key: string]: unknown;
      } | null;
      /**
       * Updated At
       * @description Timestamp when the user was last updated.
       */
      updatedAt: string;
      /**
       * Uuid
       * @description Unique identifier for the user.
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
   * Pagination
   * @description Pagination details.
   */
  pagination?: {
      /**
       * Limit
       * @description Number of records per page.
       */
      limit: number;
      /**
       * Next Url
       * @description URL for the next page of results.
       * @default null
       */
      nextUrl: string | null;
      /**
       * Offset
       * @description Number of records skipped.
       */
      offset: number;
      /**
       * Pages
       * @description Total number of pages.
       */
      pages: number;
      /**
       * Prev Url
       * @description URL for the previous page of results.
       * @default null
       */
      prevUrl: string | null;
      /**
       * Total
       * @description Total number of records.
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
 * Type of RAISELY's RAISELY_GET_USER_PROFILES tool input.
 */
type RAISELY_GET_USER_PROFILES_INPUT = {
  /**
   * Private
   * @description Include private custom fields when true (requires permissions)
   * @default null
   */
  private: boolean | null;
  /**
   * Uuid
   * @description UUID of the user whose profiles are to be retrieved
   */
  uuid?: string;
};

/**
 * Type of RAISELY's RAISELY_GET_USER_PROFILES tool output.
 */
type RAISELY_GET_USER_PROFILES_OUTPUT = {
  /**
   * Data
   * @description List of profiles for the user
   */
  data?: {
      /**
       * Campaign Uuid
       * @description UUID of the associated campaign
       */
      campaignUuid: string;
      /**
       * Created At
       * @description Timestamp when the profile was created
       */
      createdAt: string;
      /**
       * Currency
       * @description Currency code (e.g., 'AUD', 'USD')
       */
      currency: string;
      /**
       * Description
       * @description Profile description
       * @default null
       */
      description: string | null;
      /**
       * Goal
       * @description Fundraising goal in cents
       */
      goal: number;
      /**
       * Name
       * @description Name of the profile
       */
      name: string;
      /**
       * Path
       * @description URL path of the profile
       */
      path: string;
      /**
       * Private
       * @description Private custom fields of the profile (when requested and permitted)
       * @default null
       */
      private: {
          [key: string]: unknown;
      } | null;
      /**
       * Public
       * @description Public custom fields of the profile
       */
      public: {
          [key: string]: unknown;
      };
      /**
       * Status
       * @description Status of the profile (e.g., 'ACTIVE', 'DELETED')
       */
      status: string;
      /**
       * Total
       * @description Total amount raised in cents
       */
      total: number;
      /**
       * Type
       * @description Type of profile (e.g., 'INDIVIDUAL', 'GROUP')
       */
      type: string;
      /**
       * Updated At
       * @description Timestamp when the profile was last updated
       */
      updatedAt: string;
      /**
       * User Uuid
       * @description UUID of the user owning the profile
       */
      userUuid: string;
      /**
       * Uuid
       * @description Unique identifier of the profile
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of RAISELY's RAISELY_GET_WEBHOOKS tool input.
 */
type RAISELY_GET_WEBHOOKS_INPUT = object;

/**
 * Type of RAISELY's RAISELY_GET_WEBHOOKS tool output.
 */
type RAISELY_GET_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description List of webhooks configured for the campaign
   */
  data?: {
      /**
       * Active
       * @description Indicates whether the webhook is currently active
       */
      active: boolean;
      /**
       * Created At
       * @description ISO8601 timestamp when the webhook was created
       */
      createdAt: string;
      /**
       * Events
       * @description List of event types that trigger this webhook
       */
      events: string[];
      /**
       * Secret
       * @description Optional shared secret sent in the Authorization header for verification
       * @default null
       */
      secret: string | null;
      /**
       * Updated At
       * @description ISO8601 timestamp when the webhook was last updated
       */
      updatedAt: string;
      /**
       * Url
       * @description Target URL where Raisely will POST the webhook events
       */
      url: string;
      /**
       * Uuid
       * @description Unique identifier (UUID) of the webhook
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of RAISELY's RAISELY_LIST_SUBSCRIPTIONS tool input.
 */
type RAISELY_LIST_SUBSCRIPTIONS_INPUT = object;

/**
 * Type of RAISELY's RAISELY_LIST_SUBSCRIPTIONS tool output.
 */
type RAISELY_LIST_SUBSCRIPTIONS_OUTPUT = {
  /**
   * Data
   * @description List of subscription objects.
   */
  data?: {
      /**
       * Amount
       * @description Subscription amount in cents.
       */
      amount: number;
      /**
       * Campaign Uuid
       * @description UUID of the associated campaign.
       * @default null
       */
      campaignUuid: string | null;
      /**
       * Created At
       * @description Timestamp when the subscription was created.
       */
      createdAt: string;
      /**
       * Currency
       * @description Currency code, e.g., 'AUD'.
       */
      currency: string;
      /**
       * Next Payment
       * @description Timestamp for the next scheduled payment.
       * @default null
       */
      nextPayment: string | null;
      /**
       * Status
       * @description Current status of the subscription.
       */
      status: string;
      /**
       * Updated At
       * @description Timestamp when the subscription was last updated.
       */
      updatedAt: string;
      /**
       * User
       * @description Information about the subscribing user.
       */
      user: {
          /**
           * Email
           * @description User's email address.
           * @default null
           */
          email: string | null;
          /**
           * First Name
           * @description User's first name.
           * @default null
           */
          firstName: string | null;
          /**
           * Last Name
           * @description User's last name.
           * @default null
           */
          lastName: string | null;
          /**
           * Uuid
           * @description Unique identifier for the user.
           */
          uuid: string;
      };
      /**
       * Uuid
       * @description Unique subscription identifier.
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
   * Pagination
   * @description Pagination details.
   */
  pagination?: {
      /**
       * Limit
       * @description Number of items per page.
       */
      limit: number;
      /**
       * Offset
       * @description Number of items skipped.
       */
      offset: number;
      /**
       * Total
       * @description Total number of items available.
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
 * Type of RAISELY's RAISELY_POST_LOGOUT tool input.
 */
type RAISELY_POST_LOGOUT_INPUT = object;

/**
 * Type of RAISELY's RAISELY_POST_LOGOUT tool output.
 */
type RAISELY_POST_LOGOUT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Status of the logout operation.
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
 * Type of RAISELY's RAISELY_POST_USERS tool input.
 */
type RAISELY_POST_USERS_INPUT = {
  /**
   * Address1
   * @description Line 1 of the user's address
   * @default null
   */
  address1: string | null;
  /**
   * Address2
   * @description Line 2 of the user's address
   * @default null
   */
  address2: string | null;
  /**
   * Country
   * @description Country code (ISO 3166-1 alpha-2)
   * @default null
   */
  country: string | null;
  /**
   * Email
   * Format: email
   * @description Email address of the user
   */
  email?: unknown;
  /**
   * First Name
   * @description First name of the user
   * @default null
   */
  firstName: string | null;
  /**
   * Last Name
   * @description Last name of the user
   * @default null
   */
  lastName: string | null;
  /**
   * Merge
   * @description If true, update an existing user with matching email; otherwise creates new
   * @default false
   */
  merge: boolean;
  /**
   * Postcode
   * @description Postal code of the user
   * @default null
   */
  postcode: string | null;
  /**
   * State
   * @description State or province of the user
   * @default null
   */
  state: string | null;
  /**
   * Suburb
   * @description Suburb or city of the user
   * @default null
   */
  suburb: string | null;
};

/**
 * Type of RAISELY's RAISELY_POST_USERS tool output.
 */
type RAISELY_POST_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address1
       * @description Line 1 of the user's address
       * @default null
       */
      address1: string | null;
      /**
       * Address2
       * @description Line 2 of the user's address
       * @default null
       */
      address2: string | null;
      /**
       * Country
       * @description Country code of the user
       * @default null
       */
      country: string | null;
      /**
       * Created At
       * @description Timestamp when the user was created
       */
      createdAt: string;
      /**
       * Email
       * @description Email address of the user
       */
      email: string;
      /**
       * First Name
       * @description First name of the user
       * @default null
       */
      firstName: string | null;
      /**
       * Last Name
       * @description Last name of the user
       * @default null
       */
      lastName: string | null;
      /**
       * Postcode
       * @description Postal code of the user
       * @default null
       */
      postcode: string | null;
      /**
       * State
       * @description State or province of the user
       * @default null
       */
      state: string | null;
      /**
       * Suburb
       * @description Suburb or city of the user
       * @default null
       */
      suburb: string | null;
      /**
       * Updated At
       * @description Timestamp when the user was last updated
       */
      updatedAt: string;
      /**
       * Uuid
       * @description Unique identifier of the user
       */
      uuid: string;
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
 * Type of RAISELY's RAISELY_RAISELY_GET_AVAILABLE_EVENTS tool input.
 */
type RAISELY_RAISELY_GET_AVAILABLE_EVENTS_INPUT = object;

/**
 * Type of RAISELY's RAISELY_RAISELY_GET_AVAILABLE_EVENTS tool output.
 */
type RAISELY_RAISELY_GET_AVAILABLE_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Donation Events
       * @description Donation events
       */
      donation_events: {
          /**
           * Description
           * @description A description of when this event is fired
           */
          description: string;
          /**
           * Event
           * @description The name of the webhook event
           */
          event: string;
      }[];
      /**
       * Order Events
       * @description Order events
       */
      order_events: {
          /**
           * Description
           * @description A description of when this event is fired
           */
          description: string;
          /**
           * Event
           * @description The name of the webhook event
           */
          event: string;
      }[];
      /**
       * Post Events
       * @description Post events
       */
      post_events: {
          /**
           * Description
           * @description A description of when this event is fired
           */
          description: string;
          /**
           * Event
           * @description The name of the webhook event
           */
          event: string;
      }[];
      /**
       * Profile Events
       * @description Profile events
       */
      profile_events: {
          /**
           * Description
           * @description A description of when this event is fired
           */
          description: string;
          /**
           * Event
           * @description The name of the webhook event
           */
          event: string;
      }[];
      /**
       * Subscription Events
       * @description Subscription events
       */
      subscription_events: {
          /**
           * Description
           * @description A description of when this event is fired
           */
          description: string;
          /**
           * Event
           * @description The name of the webhook event
           */
          event: string;
      }[];
      /**
       * User Events
       * @description User events
       */
      user_events: {
          /**
           * Description
           * @description A description of when this event is fired
           */
          description: string;
          /**
           * Event
           * @description The name of the webhook event
           */
          event: string;
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
 * Type of RAISELY's RAISELY_RAISELY_GET_CAMPAIGNS tool input.
 */
type RAISELY_RAISELY_GET_CAMPAIGNS_INPUT = {
  /**
   * Limit
   * @description Number of records to return per page (must be at least 1).
   * @default null
   */
  limit: number | null;
  /**
   * Mode
   * @description Filter campaigns by their mode value.
   * @default null
   */
  mode: string | null;
  /**
   * Offset
   * @description Number of records to skip before starting to return results (must be non-negative).
   * @default null
   */
  offset: number | null;
  /**
   * Order
   * @description Sort order: 'asc' for ascending or 'desc' for descending (requires 'sort').
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Path
   * @description Filter campaigns by their path value.
   * @default null
   */
  path: string | null;
  /**
   * Private
   * @description If true, omit the campaign.config block to reduce response size.
   * @default null
   */
  private: boolean | null;
  /**
   * Q
   * @description Full-text search term to filter campaigns.
   * @default null
   */
  q: string | null;
  /**
   * Sort
   * @description Field to sort by, e.g., 'createdAt'.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of RAISELY's RAISELY_RAISELY_GET_CAMPAIGNS tool output.
 */
type RAISELY_RAISELY_GET_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description List of campaign objects.
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the campaign was created.
       */
      createdAt: string;
      /**
       * Currency
       * @description Currency code for the campaign.
       * @default null
       */
      currency: string | null;
      /**
       * Description
       * @description Description of the campaign.
       * @default null
       */
      description: string | null;
      /**
       * End At
       * @description End date and time (ISO 8601).
       * @default null
       */
      endAt: string | null;
      /**
       * Goal
       * @description Fundraising goal amount.
       * @default null
       */
      goal: number | null;
      /**
       * Mode
       * @description Mode value of the campaign.
       * @default null
       */
      mode: string | null;
      /**
       * Name
       * @description Name of the campaign.
       * @default null
       */
      name: string | null;
      /**
       * Path
       * @description Path value of the campaign.
       * @default null
       */
      path: string | null;
      /**
       * Private
       * @description Private custom fields of the campaign (included if requested).
       * @default null
       */
      private: {
          [key: string]: unknown;
      } | null;
      /**
       * Public
       * @description Public custom fields of the campaign.
       */
      public: {
          [key: string]: unknown;
      };
      /**
       * Slug
       * @description URL-friendly slug of the campaign.
       * @default null
       */
      slug: string | null;
      /**
       * Start At
       * @description Start date and time (ISO 8601).
       * @default null
       */
      startAt: string | null;
      /**
       * Updated At
       * @description Timestamp when the campaign was last updated.
       */
      updatedAt: string;
      /**
       * Uuid
       * @description Unique identifier of the campaign.
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
   * Pagination
   * @description Pagination details.
   */
  pagination?: {
      /**
       * Limit
       * @description Number of records per page.
       */
      limit: number;
      /**
       * Offset
       * @description Number of records skipped.
       */
      offset: number;
      /**
       * Total
       * @description Total number of records available.
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
 * Type of RAISELY's RAISELY_RAISELY_GET_USERS tool input.
 */
type RAISELY_RAISELY_GET_USERS_INPUT = {
  /**
   * Limit
   * @description Number of records to return per page, must be at least 1.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of records to skip before returning results, must be non-negative.
   * @default null
   */
  offset: number | null;
  /**
   * Order
   * @description Sort order, either 'asc' or 'desc'.
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Private
   * @description If true, include private custom fields in response.
   * @default false
   */
  private: boolean | null;
  /**
   * Sort
   * @description Field to sort by, e.g., 'createdAt'.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of RAISELY's RAISELY_RAISELY_GET_USERS tool output.
 */
type RAISELY_RAISELY_GET_USERS_OUTPUT = {
  /**
   * Data
   * @description List of user objects.
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the user was created.
       */
      createdAt: string;
      /**
       * Email
       * @description User's email address.
       */
      email: string;
      /**
       * First Name
       * @description User's first name.
       * @default null
       */
      firstName: string | null;
      /**
       * Last Name
       * @description User's last name.
       * @default null
       */
      lastName: string | null;
      /**
       * Private
       * @description Private custom fields (only if requested).
       */
      private?: {
          [key: string]: unknown;
      };
      /**
       * Public
       * @description Public custom fields.
       */
      public?: {
          [key: string]: unknown;
      };
      /**
       * Updated At
       * @description Timestamp when the user was last updated.
       */
      updatedAt: string;
      /**
       * Uuid
       * @description Unique identifier for the user.
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
   * Pagination
   * @description Pagination details.
   */
  pagination?: {
      /**
       * Limit
       * @description Number of records per page.
       */
      limit: number;
      /**
       * Next Url
       * @description URL for the next page of results.
       * @default null
       */
      next_url: string | null;
      /**
       * Offset
       * @description Number of records skipped.
       */
      offset: number;
      /**
       * Pages
       * @description Total number of pages.
       */
      pages: number;
      /**
       * Prev Url
       * @description URL for the previous page of results.
       * @default null
       */
      prev_url: string | null;
      /**
       * Total
       * @description Total number of records.
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
 * Type map of all available tool input types for toolkit "RAISELY".
 */
export type RAISELY_TOOL_INPUTS = {
  GET_API_DOCS: RAISELY_GET_API_DOCS_INPUT
  GET_AVAILABLE_EVENTS: RAISELY_GET_AVAILABLE_EVENTS_INPUT
  GET_CAMPAIGNS: RAISELY_GET_CAMPAIGNS_INPUT
  GET_CAMPAIGNS_PROFILES: RAISELY_GET_CAMPAIGNS_PROFILES_INPUT
  GET_POSTS: RAISELY_GET_POSTS_INPUT
  GET_PROFILES: RAISELY_GET_PROFILES_INPUT
  GET_TAGS: RAISELY_GET_TAGS_INPUT
  GET_USERS: RAISELY_GET_USERS_INPUT
  GET_USER_PROFILES: RAISELY_GET_USER_PROFILES_INPUT
  GET_WEBHOOKS: RAISELY_GET_WEBHOOKS_INPUT
  LIST_SUBSCRIPTIONS: RAISELY_LIST_SUBSCRIPTIONS_INPUT
  POST_LOGOUT: RAISELY_POST_LOGOUT_INPUT
  POST_USERS: RAISELY_POST_USERS_INPUT
  RAISELY_GET_AVAILABLE_EVENTS: RAISELY_RAISELY_GET_AVAILABLE_EVENTS_INPUT
  RAISELY_GET_CAMPAIGNS: RAISELY_RAISELY_GET_CAMPAIGNS_INPUT
  RAISELY_GET_USERS: RAISELY_RAISELY_GET_USERS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "RAISELY".
 */
export type RAISELY_TOOL_OUTPUTS = {
  GET_API_DOCS: RAISELY_GET_API_DOCS_OUTPUT
  GET_AVAILABLE_EVENTS: RAISELY_GET_AVAILABLE_EVENTS_OUTPUT
  GET_CAMPAIGNS: RAISELY_GET_CAMPAIGNS_OUTPUT
  GET_CAMPAIGNS_PROFILES: RAISELY_GET_CAMPAIGNS_PROFILES_OUTPUT
  GET_POSTS: RAISELY_GET_POSTS_OUTPUT
  GET_PROFILES: RAISELY_GET_PROFILES_OUTPUT
  GET_TAGS: RAISELY_GET_TAGS_OUTPUT
  GET_USERS: RAISELY_GET_USERS_OUTPUT
  GET_USER_PROFILES: RAISELY_GET_USER_PROFILES_OUTPUT
  GET_WEBHOOKS: RAISELY_GET_WEBHOOKS_OUTPUT
  LIST_SUBSCRIPTIONS: RAISELY_LIST_SUBSCRIPTIONS_OUTPUT
  POST_LOGOUT: RAISELY_POST_LOGOUT_OUTPUT
  POST_USERS: RAISELY_POST_USERS_OUTPUT
  RAISELY_GET_AVAILABLE_EVENTS: RAISELY_RAISELY_GET_AVAILABLE_EVENTS_OUTPUT
  RAISELY_GET_CAMPAIGNS: RAISELY_RAISELY_GET_CAMPAIGNS_OUTPUT
  RAISELY_GET_USERS: RAISELY_RAISELY_GET_USERS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's RAISELY toolkit.
 */
export const RAISELY = {
  slug: "raisely",
  tools: {
    /**
     * Tool to retrieve the raisely api documentation. use when you need the full openapi specification of the raisely api.
     */
    GET_API_DOCS: "RAISELY_GET_API_DOCS",
    /**
     * Tool to retrieve a list of available raisely webhook events. use when you need to know all event types raisely can send via webhooks.
     */
    GET_AVAILABLE_EVENTS: "RAISELY_GET_AVAILABLE_EVENTS",
    /**
     * Tool to retrieve a paginated list of campaigns from raisely. use when you need to list campaigns after obtaining a valid api token.
     */
    GET_CAMPAIGNS: "RAISELY_GET_CAMPAIGNS",
    /**
     * Tool to list all fundraising profiles in a campaign. use after obtaining a valid campaign uuid.
     */
    GET_CAMPAIGNS_PROFILES: "RAISELY_GET_CAMPAIGNS_PROFILES",
    /**
     * Tool to retrieve all posts available on the raisely platform. use when you need to list posts with pagination and sorting.
     */
    GET_POSTS: "RAISELY_GET_POSTS",
    /**
     * Tool to retrieve all fundraising profiles in a campaign. use when you need to list profiles with optional filters, sorting, and ranking after obtaining a valid api token.
     */
    GET_PROFILES: "RAISELY_GET_PROFILES",
    /**
     * Tool to retrieve all tags available in the raisely platform. use when you need a paginated list of tags after obtaining a valid api token.
     */
    GET_TAGS: "RAISELY_GET_TAGS",
    /**
     * Tool to retrieve a list of all users in the raisely platform. use when you need a paginated user list with optional sorting and private fields.
     */
    GET_USERS: "RAISELY_GET_USERS",
    /**
     * Tool to retrieve all profiles associated with a specific user. use when you have a user uuid and need to list both public and optionally private profiles.
     */
    GET_USER_PROFILES: "RAISELY_GET_USER_PROFILES",
    /**
     * Tool to retrieve a list of configured webhooks. use when you need to list all webhook subscriptions for the current campaign after authenticating.
     */
    GET_WEBHOOKS: "RAISELY_GET_WEBHOOKS",
    /**
     * Tool to retrieve a list of subscriptions. use when you need to fetch all subscriptions after authenticating with raisely.
     */
    LIST_SUBSCRIPTIONS: "RAISELY_LIST_SUBSCRIPTIONS",
    /**
     * Tool to invalidate the current user's token and log out. use when ending an authenticated raisely session to ensure the token is invalidated.
     */
    POST_LOGOUT: "RAISELY_POST_LOGOUT",
    /**
     * Tool to create or update a user by email. use when you need to upsert a user record based on email.
     */
    POST_USERS: "RAISELY_POST_USERS",
    /**
     * Tool to retrieve a list of available raisely webhook events. use when you need to know all event types raisely can send via webhooks.
     */
    RAISELY_GET_AVAILABLE_EVENTS: "RAISELY_RAISELY_GET_AVAILABLE_EVENTS",
    /**
     * Tool to retrieve a list of campaigns from raisely. use when you need to list campaigns with optional search, filtering, sorting, and pagination after obtaining a valid api token.
     */
    RAISELY_GET_CAMPAIGNS: "RAISELY_RAISELY_GET_CAMPAIGNS",
    /**
     * Tool to retrieve a list of all users in the raisely platform. use when you need a paginated user list, with optional sorting or inclusion of private fields.
     */
    RAISELY_GET_USERS: "RAISELY_RAISELY_GET_USERS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "RAISELY".
 */
export type RAISELY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "RAISELY".
 */
export type RAISELY_TRIGGER_EVENTS = {}
