// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of KIT's KIT_ADD_SUBSCRIBER_TO_FORM tool input.
 */
type KIT_ADD_SUBSCRIBER_TO_FORM_INPUT = {
  /**
   * Form Id
   * @description The ID of the form to which the subscriber will be added.
   */
  form_id?: number;
  /**
   * Id
   * @description The ID of the subscriber to add to the form.
   */
  id?: number;
  /**
   * Referrer
   * @description The URL from which the subscriber was referred.
   * @default null
   */
  referrer: string | null;
};

/**
 * Type of KIT's KIT_ADD_SUBSCRIBER_TO_FORM tool output.
 */
type KIT_ADD_SUBSCRIBER_TO_FORM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Subscriber
       * @description Details of the added subscriber.
       */
      subscriber: {
          /**
           * Added At
           * @description Timestamp when the subscriber was added to the form.
           */
          added_at: string;
          /**
           * Created At
           * @description Timestamp when the subscriber was created.
           */
          created_at: string;
          /**
           * Email Address
           * @description Subscriber's email address
           */
          email_address: string;
          /**
           * Fields
           * @description Custom fields associated with the subscriber, as key-value pairs of strings or None.
           * @default {}
           */
          fields: {
              [key: string]: string | null;
          };
          /**
           * First Name
           * @description Subscriber's first name
           * @default null
           */
          first_name: string | null;
          /**
           * Id
           * @description Subscriber's ID
           */
          id: number;
          /**
           * Referrer
           * @description The referrer URL.
           * @default null
           */
          referrer: string | null;
          /**
           * Referrer Utm Parameters
           * @description UTM parameters parsed from the referrer URL.
           */
          referrer_utm_parameters: {
              /**
               * Utm Campaign
               * @description UTM campaign parameter
               * @default null
               */
              utm_campaign?: string | null;
              /**
               * Utm Content
               * @description UTM content parameter
               * @default null
               */
              utm_content?: string | null;
              /**
               * Utm Medium
               * @description UTM medium parameter
               * @default null
               */
              utm_medium?: string | null;
              /**
               * Utm Source
               * @description UTM source parameter
               * @default null
               */
              utm_source?: string | null;
              /**
               * Utm Term
               * @description UTM term parameter
               * @default null
               */
              utm_term?: string | null;
          };
          /**
           * State
           * @description Subscriber's state, e.g., 'active'.
           */
          state: string;
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
 * Type of KIT's KIT_CREATE_CUSTOM_FIELD tool input.
 */
type KIT_CREATE_CUSTOM_FIELD_INPUT = {
  /**
   * Label
   * @description The display label for the custom field (e.g., 'Favorite Color').
   */
  label?: string;
};

/**
 * Type of KIT's KIT_CREATE_CUSTOM_FIELD tool output.
 */
type KIT_CREATE_CUSTOM_FIELD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Custom Field
       * @description Details of the newly created or existing custom field.
       */
      custom_field: {
          /**
           * Id
           * @description Unique identifier of the custom field.
           */
          id: number;
          /**
           * Key
           * @description Key used to reference the custom field in API calls.
           */
          key: string;
          /**
           * Label
           * @description Display label of the custom field.
           */
          label: string;
          /**
           * Name
           * @description System-generated name of the custom field.
           */
          name: string;
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
 * Type of KIT's KIT_CREATE_TAG tool input.
 */
type KIT_CREATE_TAG_INPUT = {
  /**
   * Name
   * @description Name of the tag to be created.
   */
  name?: string;
};

/**
 * Type of KIT's KIT_CREATE_TAG tool output.
 */
type KIT_CREATE_TAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tag
       * @description The created or existing tag object.
       */
      tag: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the tag was created.
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the tag.
           */
          id: number;
          /**
           * Name
           * @description Name of the tag.
           */
          name: string;
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
 * Type of KIT's KIT_CREATE_WEBHOOK tool input.
 */
type KIT_CREATE_WEBHOOK_INPUT = {
  /**
   * Event
   * @description Webhook event configuration.
   */
  event?: {
      /**
       * Form Id
       * @description Form ID required for 'subscriber.form_subscribe' event.
       * @default null
       */
      form_id: number | null;
      /**
       * Initiator Value
       * @description Initiator value (e.g., URL) required for 'subscriber.link_click' event.
       * @default null
       */
      initiator_value: string | null;
      /**
       * Name
       * @description Event type to subscribe to.
       * @enum {string}
       */
      name: "subscriber.subscriber_activate" | "subscriber.subscriber_unsubscribe" | "subscriber.subscriber_bounce" | "subscriber.subscriber_complain" | "subscriber.form_subscribe" | "subscriber.course_subscribe" | "subscriber.course_complete" | "subscriber.link_click" | "subscriber.product_purchase" | "subscriber.tag_add" | "subscriber.tag_remove" | "purchase.purchase_create";
      /**
       * Product Id
       * @description Product ID required for 'subscriber.product_purchase' event.
       * @default null
       */
      product_id: number | null;
      /**
       * Sequence Id
       * @description Sequence ID required for 'subscriber.course_subscribe' or 'subscriber.course_complete' events.
       * @default null
       */
      sequence_id: number | null;
      /**
       * Tag Id
       * @description Tag ID required for 'subscriber.tag_add' or 'subscriber.tag_remove' events.
       * @default null
       */
      tag_id: number | null;
  };
  /**
   * Target Url
   * @description URL to receive webhook POST notifications.
   */
  target_url?: string;
};

/**
 * Type of KIT's KIT_CREATE_WEBHOOK tool output.
 */
type KIT_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Webhook
       * @description Details of the newly created webhook.
       */
      webhook: {
          /**
           * Account Id
           * @description Kit account identifier.
           */
          account_id: number;
          /**
           * Event
           * @description Webhook event details.
           */
          event: {
              /**
               * Initiator Value
               * @description Link click initiator value or null for other events.
               * @default null
               */
              initiator_value: string | null;
              /**
               * Name
               * @description Subscribed event type.
               */
              name: string;
          };
          /**
           * Id
           * @description Unique identifier of the webhook.
           */
          id: number;
          /**
           * Target Url
           * @description Destination URL for webhook notifications.
           */
          target_url: string;
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
 * Type of KIT's KIT_DELETE_BROADCAST tool input.
 */
type KIT_DELETE_BROADCAST_INPUT = {
  /**
   * Id
   * @description Unique identifier of the broadcast to delete
   */
  id?: number;
};

/**
 * Type of KIT's KIT_DELETE_BROADCAST tool output.
 */
type KIT_DELETE_BROADCAST_OUTPUT = {
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
 * Type of KIT's KIT_DELETE_CUSTOM_FIELD tool input.
 */
type KIT_DELETE_CUSTOM_FIELD_INPUT = {
  /**
   * Id
   * @description Unique identifier of the custom field to delete
   */
  id?: number;
};

/**
 * Type of KIT's KIT_DELETE_CUSTOM_FIELD tool output.
 */
type KIT_DELETE_CUSTOM_FIELD_OUTPUT = {
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
 * Type of KIT's KIT_DELETE_SUBSCRIBER tool input.
 */
type KIT_DELETE_SUBSCRIBER_INPUT = {
  /**
   * Id
   * @description Unique identifier of the subscriber to delete
   */
  id?: number;
};

/**
 * Type of KIT's KIT_DELETE_SUBSCRIBER tool output.
 */
type KIT_DELETE_SUBSCRIBER_OUTPUT = {
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
 * Type of KIT's KIT_DELETE_TAG tool input.
 */
type KIT_DELETE_TAG_INPUT = {
  /**
   * Id
   * @description Unique identifier of the tag to delete
   */
  id?: number;
};

/**
 * Type of KIT's KIT_DELETE_TAG tool output.
 */
type KIT_DELETE_TAG_OUTPUT = {
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
 * Type of KIT's KIT_DELETE_WEBHOOK tool input.
 */
type KIT_DELETE_WEBHOOK_INPUT = {
  /**
   * Id
   * @description Unique identifier of the webhook to delete
   */
  id?: number;
};

/**
 * Type of KIT's KIT_DELETE_WEBHOOK tool output.
 */
type KIT_DELETE_WEBHOOK_OUTPUT = {
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
 * Type of KIT's KIT_GET_ACCOUNT tool input.
 */
type KIT_GET_ACCOUNT_INPUT = object;

/**
 * Type of KIT's KIT_GET_ACCOUNT tool output.
 */
type KIT_GET_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account
       * @description Authenticated account details
       */
      account: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the account was created
           */
          created_at: string;
          /**
           * Id
           * @description Account ID
           */
          id: number;
          /**
           * Name
           * @description Account name
           */
          name: string;
          /**
           * Plan Type
           * @description Type of plan, e.g., 'creator'
           */
          plan_type: string;
          /**
           * Primary Email Address
           * @description Primary email associated with the account
           */
          primary_email_address: string;
          /**
           * Timezone
           * @description Account timezone details
           */
          timezone: {
              /**
               * Friendly Name
               * @description Human-readable timezone name, e.g., 'Eastern Time (US & Canada)'
               */
              friendly_name: string;
              /**
               * Name
               * @description Timezone name, e.g., 'America/New_York'
               */
              name: string;
              /**
               * Utc Offset
               * @description UTC offset, e.g., '-05:00'
               */
              utc_offset: string;
          };
      };
      /**
       * User
       * @description Authenticated user details
       */
      user: {
          /**
           * Email
           * @description User's email address
           */
          email: string;
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
 * Type of KIT's KIT_GET_ACCOUNT_COLORS tool input.
 */
type KIT_GET_ACCOUNT_COLORS_INPUT = object;

/**
 * Type of KIT's KIT_GET_ACCOUNT_COLORS tool output.
 */
type KIT_GET_ACCOUNT_COLORS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Colors
       * @description List of color codes associated with the account.
       */
      colors: string[];
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
 * Type of KIT's KIT_GET_BROADCAST tool input.
 */
type KIT_GET_BROADCAST_INPUT = {
  /**
   * Id
   * @description Unique identifier of the broadcast to retrieve
   */
  id?: number;
};

/**
 * Type of KIT's KIT_GET_BROADCAST tool output.
 */
type KIT_GET_BROADCAST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Broadcast
       * @description Broadcast details
       */
      broadcast: {
          /**
           * Content
           * @description Email content or body HTML
           * @default null
           */
          content: string | null;
          /**
           * Created At
           * @description Creation timestamp in ISO 8601 format
           */
          created_at: string;
          /**
           * Description
           * @description Internal description of the broadcast
           * @default null
           */
          description: string | null;
          /**
           * Email Address
           * @description Sender email address
           * @default null
           */
          email_address: string | null;
          /**
           * EmailTemplate
           * @description Email template metadata
           * @default null
           */
          email_template: {
              /**
               * Id
               * @description ID of the email template
               */
              id: number;
              /**
               * Name
               * @description Name of the email template
               */
              name: string;
          } | null;
          /**
           * Id
           * @description Broadcast ID
           */
          id: number;
          /**
           * Preview Text
           * @description Preview text for the email
           * @default null
           */
          preview_text: string | null;
          /**
           * Public
           * @description Whether the broadcast is public
           */
          public: boolean;
          /**
           * Public Url
           * Format: uri
           * @description Public post URL
           * @default null
           */
          public_url: string | null;
          /**
           * Publication Id
           * @description Publication record ID
           */
          publication_id: number;
          /**
           * Published At
           * @description ISO 8601 timestamp when marked public
           * @default null
           */
          published_at: string | null;
          /**
           * Send At
           * @description ISO 8601 timestamp when scheduled to send
           * @default null
           */
          send_at: string | null;
          /**
           * Subject
           * @description Email subject line
           * @default null
           */
          subject: string | null;
          /**
           * Subscriber Filter
           * @description Filter conditions to target specific subscribers
           * @default null
           */
          subscriber_filter: {
              /**
               * All
               * @description List of filter conditions combined with 'all' logic
               */
              all: {
                  /**
                   * Type
                   * @description Type of filter condition, e.g., 'all_subscribers'
                   */
                  type: string;
              }[];
          }[] | null;
          /**
           * Thumbnail Alt
           * @description Alt text for the thumbnail image
           * @default null
           */
          thumbnail_alt: string | null;
          /**
           * Thumbnail Url
           * Format: uri
           * @description URL of the thumbnail image
           * @default null
           */
          thumbnail_url: string | null;
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
 * Type of KIT's KIT_GET_BROADCAST_STATS tool input.
 */
type KIT_GET_BROADCAST_STATS_INPUT = {
  /**
   * Id
   * @description Unique identifier of the broadcast to fetch statistics for
   */
  id?: number;
};

/**
 * Type of KIT's KIT_GET_BROADCAST_STATS tool output.
 */
type KIT_GET_BROADCAST_STATS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Broadcast
       * @description Container object holding the broadcast's statistics
       */
      broadcast: {
          /**
           * Id
           * @description Broadcast ID
           */
          id: number;
          /**
           * Stats
           * @description Statistics for this broadcast
           */
          stats: {
              /**
               * Click Rate
               * @description Click rate percentage (0-100)
               */
              click_rate: number;
              /**
               * Click Tracking Disabled
               * @description Flag indicating if click tracking is disabled
               */
              click_tracking_disabled: boolean;
              /**
               * Open Rate
               * @description Open rate percentage (0-100)
               */
              open_rate: number;
              /**
               * Open Tracking Disabled
               * @description Flag indicating if open tracking is disabled
               */
              open_tracking_disabled: boolean;
              /**
               * Progress
               * @description Send progress percentage (0-100)
               */
              progress: number;
              /**
               * Recipients
               * @description Total number of recipients
               */
              recipients: number;
              /**
               * Show Total Clicks
               * @description Whether total clicks count is visible
               */
              show_total_clicks: boolean;
              /**
               * Status
               * @description Current status of the broadcast
               */
              status: string;
              /**
               * Total Clicks
               * @description Total number of clicks
               */
              total_clicks: number;
              /**
               * Unsubscribes
               * @description Number of unsubscribes
               */
              unsubscribes: number;
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
 * Type of KIT's KIT_GET_CREATOR_PROFILE tool input.
 */
type KIT_GET_CREATOR_PROFILE_INPUT = object;

/**
 * Type of KIT's KIT_GET_CREATOR_PROFILE tool output.
 */
type KIT_GET_CREATOR_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Profile
       * @description Creator profile details
       */
      profile: {
          /**
           * Bio
           * @description Biography or description of the creator
           * @default null
           */
          bio: string | null;
          /**
           * Byline
           * @description Creator byline
           * @default null
           */
          byline: string | null;
          /**
           * Image Url
           * Format: uri
           * @description URL of the creator's avatar image
           */
          image_url: string;
          /**
           * Name
           * @description Display name of the creator
           */
          name: string;
          /**
           * Profile Url
           * Format: uri
           * @description URL of the creator's profile page
           */
          profile_url: string;
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
 * Type of KIT's KIT_GET_EMAIL_STATS tool input.
 */
type KIT_GET_EMAIL_STATS_INPUT = object;

/**
 * Type of KIT's KIT_GET_EMAIL_STATS tool output.
 */
type KIT_GET_EMAIL_STATS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Stats
       * @description Email statistics object.
       */
      stats: {
          /**
           * Click Tracking Enabled
           * @description Indicates if click tracking is enabled.
           */
          click_tracking_enabled: boolean;
          /**
           * Clicked
           * @description Number of emails clicked.
           */
          clicked: number;
          /**
           * Email Stats Mode
           * @description Mode of the email stats, e.g., 'last_90'.
           */
          email_stats_mode: string;
          /**
           * Ending
           * @description ISO 8601 end date of the statistics period.
           */
          ending: string;
          /**
           * Open Tracking Enabled
           * @description Indicates if open tracking is enabled.
           */
          open_tracking_enabled: boolean;
          /**
           * Opened
           * @description Number of emails opened.
           */
          opened: number;
          /**
           * Sent
           * @description Number of emails sent.
           */
          sent: number;
          /**
           * Starting
           * @description ISO 8601 start date of the statistics period.
           */
          starting: string;
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
 * Type of KIT's KIT_LIST_BROADCASTS tool input.
 */
type KIT_LIST_BROADCASTS_INPUT = {
  /**
   * After
   * @description Cursor for pagination; returns results after the specified cursor.
   * @default null
   */
  after: string | null;
  /**
   * Before
   * @description Cursor for pagination; returns results before the specified cursor.
   * @default null
   */
  before: string | null;
  /**
   * Include Total Count
   * @description If set to 'true', includes the total count of records in the response.
   * @default null
   * @constant
   */
  include_total_count: "true";
  /**
   * Per Page
   * @description Number of results per page; must be between 1 and 500.
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of KIT's KIT_LIST_BROADCASTS tool output.
 */
type KIT_LIST_BROADCASTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Broadcasts
       * @description List of broadcast objects.
       */
      broadcasts: {
          /**
           * Content
           * @description Content or body HTML of the broadcast.
           * @default null
           */
          content: string | null;
          /**
           * Created At
           * @description Creation timestamp in ISO 8601 format.
           */
          created_at: string;
          /**
           * Description
           * @description Description of the broadcast.
           * @default null
           */
          description: string | null;
          /**
           * Email Address
           * @description Email address associated with the broadcast.
           * @default null
           */
          email_address: string | null;
          /**
           * Email Template
           * @description Email template details.
           */
          email_template: {
              /**
               * Id
               * @description Template identifier.
               */
              id: number;
              /**
               * Name
               * @description Name of the template.
               */
              name: string;
          };
          /**
           * Id
           * @description Unique identifier for the broadcast.
           */
          id: number;
          /**
           * Preview Text
           * @description Preview text of the broadcast.
           * @default null
           */
          preview_text: string | null;
          /**
           * Public
           * @description Public visibility status.
           */
          public: boolean;
          /**
           * Public Url
           * @description Public URL of the broadcast.
           * @default null
           */
          public_url: string | null;
          /**
           * Publication Id
           * @description Publication identifier.
           */
          publication_id: number;
          /**
           * Published At
           * @description Timestamp of publication.
           * @default null
           */
          published_at: string | null;
          /**
           * Send At
           * @description Scheduled send time in ISO 8601 format.
           * @default null
           */
          send_at: string | null;
          /**
           * Subject
           * @description Subject of the broadcast.
           * @default null
           */
          subject: string | null;
          /**
           * Subscriber Filter
           * @description Subscriber filter criteria.
           */
          subscriber_filter: {
              /**
               * All
               * @description List of filter conditions grouped by 'all' logic.
               */
              all: {
                  /**
                   * Type
                   * @description Type of subscriber filter (e.g., 'all_subscribers').
                   */
                  type: string;
              }[];
          }[];
          /**
           * Thumbnail Alt
           * @description Alt text for thumbnail image.
           * @default null
           */
          thumbnail_alt: string | null;
          /**
           * Thumbnail Url
           * @description URL of the thumbnail image.
           * @default null
           */
          thumbnail_url: string | null;
      }[];
      /**
       * Pagination
       * @description Paging information for the result set.
       */
      pagination: {
          /**
           * End Cursor
           * @description Cursor for the end of the page.
           */
          end_cursor: string;
          /**
           * Has Next Page
           * @description Indicates if there is a next page.
           */
          has_next_page: boolean;
          /**
           * Has Previous Page
           * @description Indicates if there is a previous page.
           */
          has_previous_page: boolean;
          /**
           * Per Page
           * @description Number of records per page.
           */
          per_page: number;
          /**
           * Start Cursor
           * @description Cursor for the start of the page.
           */
          start_cursor: string;
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
 * Type of KIT's KIT_LIST_CUSTOM_FIELDS tool input.
 */
type KIT_LIST_CUSTOM_FIELDS_INPUT = {
  /**
   * After
   * @description Cursor for pagination; returns results after the specified cursor.
   * @default null
   */
  after: string | null;
  /**
   * Before
   * @description Cursor for pagination; returns results before the specified cursor.
   * @default null
   */
  before: string | null;
  /**
   * Include Total Count
   * @description If set to 'true', includes the total count of records in the response.
   * @default null
   * @constant
   */
  include_total_count: "true";
  /**
   * Per Page
   * @description Number of results per page; defaults to 500 if not specified.
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of KIT's KIT_LIST_CUSTOM_FIELDS tool output.
 */
type KIT_LIST_CUSTOM_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Custom Fields
       * @description Array of custom field objects.
       */
      custom_fields: {
          /**
           * Id
           * @description Unique identifier for the custom field.
           */
          id: number;
          /**
           * Key
           * @description Unique key for the custom field.
           */
          key: string;
          /**
           * Label
           * @description Label of the custom field.
           */
          label: string;
          /**
           * Name
           * @description System-generated name for the custom field.
           */
          name: string;
      }[];
      /**
       * Pagination
       * @description Paging information for the result set.
       */
      pagination: {
          /**
           * End Cursor
           * @description Cursor for the end of the current page.
           */
          end_cursor: string;
          /**
           * Has Next Page
           * @description Indicates if there is a next page.
           */
          has_next_page: boolean;
          /**
           * Has Previous Page
           * @description Indicates if there is a previous page.
           */
          has_previous_page: boolean;
          /**
           * Per Page
           * @description Number of results per page.
           */
          per_page: number;
          /**
           * Start Cursor
           * @description Cursor for the start of the current page.
           */
          start_cursor: string;
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
 * Type of KIT's KIT_LIST_FORMS tool input.
 */
type KIT_LIST_FORMS_INPUT = {
  /**
   * After
   * @description Cursor for pagination; returns results after the specified cursor.
   * @default null
   */
  after: string | null;
  /**
   * Before
   * @description Cursor for pagination; returns results before the specified cursor.
   * @default null
   */
  before: string | null;
  /**
   * Include Total Count
   * @description If set to 'true', includes the total count of forms in the response.
   * @default null
   * @enum {string|null}
   */
  include_total_count: "true" | "false" | null;
  /**
   * Per Page
   * @description Number of forms to return per page.
   * @default null
   */
  per_page: number | null;
  /**
   * Status
   * @description Filter forms by status (e.g., 'active', 'archived').
   * @default null
   */
  status: string | null;
  /**
   * Type
   * @description Filter forms by type.
   * @default null
   * @enum {string|null}
   */
  type: "embed" | "hosted" | null;
};

/**
 * Type of KIT's KIT_LIST_FORMS tool output.
 */
type KIT_LIST_FORMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Forms
       * @description Array of form objects.
       */
      forms: {
          /**
           * Archived
           * @description Indicates if the form is archived.
           */
          archived: boolean;
          /**
           * Created At
           * @description ISO 8601 timestamp when the form was created.
           */
          created_at: string;
          /**
           * Embed Js
           * @description URL to the form's embed JavaScript.
           */
          embed_js: string;
          /**
           * Embed Url
           * @description URL to the hosted form.
           */
          embed_url: string;
          /**
           * Format
           * @description Format of the form, if any.
           * @default null
           */
          format: string | null;
          /**
           * Id
           * @description Unique identifier for the form.
           */
          id: number;
          /**
           * Name
           * @description Name of the form.
           */
          name: string;
          /**
           * Type
           * @description Type of the form (e.g., 'embed', 'hosted').
           */
          type: string;
          /**
           * Uid
           * @description Unique identifier (UID) for the form.
           */
          uid: string;
      }[];
      /**
       * Pagination
       * @description Paging information for the result set.
       */
      pagination: {
          /**
           * End Cursor
           * @description Cursor for the end of the current page.
           */
          end_cursor: string;
          /**
           * Has Next Page
           * @description Indicates if there is a next page.
           */
          has_next_page: boolean;
          /**
           * Has Previous Page
           * @description Indicates if there is a previous page.
           */
          has_previous_page: boolean;
          /**
           * Per Page
           * @description Number of forms per page.
           */
          per_page: number;
          /**
           * Start Cursor
           * @description Cursor for the start of the current page.
           */
          start_cursor: string;
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
 * Type of KIT's KIT_LIST_SEGMENTS tool input.
 */
type KIT_LIST_SEGMENTS_INPUT = {
  /**
   * After
   * @description Cursor for pagination; returns results after this cursor.
   * @default null
   */
  after: string | null;
  /**
   * Before
   * @description Cursor for pagination; returns results before this cursor.
   * @default null
   */
  before: string | null;
  /**
   * Include Total Count
   * @description If set to 'true', includes the total count of segments in the response.
   * @default null
   * @enum {string|null}
   */
  include_total_count: "true" | "false" | null;
  /**
   * Per Page
   * @description Number of segments to return per page (min 1).
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of KIT's KIT_LIST_SEGMENTS tool output.
 */
type KIT_LIST_SEGMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination information for the result set.
       */
      pagination: {
          /**
           * End Cursor
           * @description Cursor for the end of the current page.
           * @default null
           */
          end_cursor: string | null;
          /**
           * Has Next Page
           * @description Indicates if there is a next page.
           */
          has_next_page: boolean;
          /**
           * Has Previous Page
           * @description Indicates if there is a previous page.
           */
          has_previous_page: boolean;
          /**
           * Per Page
           * @description Number of records returned per page.
           */
          per_page: number;
          /**
           * Start Cursor
           * @description Cursor for the start of the current page.
           * @default null
           */
          start_cursor: string | null;
      };
      /**
       * Segments
       * @description List of segment objects.
       */
      segments: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the segment was created.
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier for the segment.
           */
          id: number;
          /**
           * Name
           * @description Name of the segment.
           */
          name: string;
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
 * Type of KIT's KIT_LIST_SEQUENCES tool input.
 */
type KIT_LIST_SEQUENCES_INPUT = {
  /**
   * After
   * @description Cursor for pagination; returns results after the specified cursor.
   * @default null
   */
  after: string | null;
  /**
   * Before
   * @description Cursor for pagination; returns results before the specified cursor.
   * @default null
   */
  before: string | null;
  /**
   * Include Total Count
   * @description If set to 'true', includes the total count in the pagination.
   * @default null
   * @enum {string|null}
   */
  include_total_count: "true" | "false" | null;
  /**
   * Per Page
   * @description Number of results per page (max 500).
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of KIT's KIT_LIST_SEQUENCES tool output.
 */
type KIT_LIST_SEQUENCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Paging information for the result set.
       */
      pagination: {
          /**
           * End Cursor
           * @description Cursor for the end of the current page; may be null if no entries.
           * @default null
           */
          end_cursor: string | null;
          /**
           * Has Previous Page
           * @description Indicates if there is a previous page.
           */
          has_previous_page: boolean;
          /**
           * Per Page
           * @description Number of results per page.
           */
          per_page: number;
          /**
           * Start Cursor
           * @description Cursor for the start of the current page; may be null if no entries.
           * @default null
           */
          start_cursor: string | null;
      };
      /**
       * Sequences
       * @description Array of sequence objects.
       */
      sequences: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the sequence was created.
           */
          created_at: string;
          /**
           * Hold
           * @description Indicates if the sequence has a hold before sending.
           */
          hold: boolean;
          /**
           * Id
           * @description Unique identifier for the sequence.
           */
          id: number;
          /**
           * Name
           * @description Name of the sequence.
           */
          name: string;
          /**
           * Repeat
           * @description Indicates if the sequence is set to repeat.
           */
          repeat: boolean;
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
 * Type of KIT's KIT_LIST_SUBSCRIBERS tool input.
 */
type KIT_LIST_SUBSCRIBERS_INPUT = {
  /**
   * After
   * @description Cursor for pagination; returns subscribers after this cursor.
   * @default null
   */
  after: string | null;
  /**
   * Before
   * @description Cursor for pagination; returns subscribers before this cursor.
   * @default null
   */
  before: string | null;
  /**
   * Created After
   * @description Filter to subscribers created after this date (YYYY-MM-DD).
   * @default null
   */
  created_after: string | null;
  /**
   * Created Before
   * @description Filter to subscribers created before this date (YYYY-MM-DD).
   * @default null
   */
  created_before: string | null;
  /**
   * Email Address
   * @description Exact email address to filter by.
   * @default null
   */
  email_address: string | null;
  /**
   * Include Total Count
   * @description If set to 'true', includes the total count of subscribers in the response.
   * @default null
   * @enum {string|null}
   */
  include_total_count: "true" | "false" | null;
  /**
   * Per Page
   * @description Number of subscribers to return per page (min 1).
   * @default null
   */
  per_page: number | null;
  /**
   * Sort Field
   * @description Field by which to sort the subscribers.
   * @default null
   */
  sort_field: string | null;
  /**
   * Sort Order
   * @description Order in which to sort the results.
   * @default null
   * @enum {string|null}
   */
  sort_order: "asc" | "desc" | null;
  /**
   * Status
   * @description Filter by subscriber status (e.g., 'active' or 'inactive').
   * @default null
   */
  status: string | null;
  /**
   * Updated After
   * @description Filter to subscribers updated after this date (YYYY-MM-DD).
   * @default null
   */
  updated_after: string | null;
  /**
   * Updated Before
   * @description Filter to subscribers updated before this date (YYYY-MM-DD).
   * @default null
   */
  updated_before: string | null;
};

/**
 * Type of KIT's KIT_LIST_SUBSCRIBERS tool output.
 */
type KIT_LIST_SUBSCRIBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination information.
       */
      pagination: {
          /**
           * End Cursor
           * @description Cursor for the last record of this page.
           */
          end_cursor: string;
          /**
           * Has Next Page
           * @description Whether there is a next page.
           */
          has_next_page: boolean;
          /**
           * Has Previous Page
           * @description Whether there is a previous page.
           */
          has_previous_page: boolean;
          /**
           * Per Page
           * @description Number of records returned per page.
           */
          per_page: number;
          /**
           * Start Cursor
           * @description Cursor for the first record of this page.
           */
          start_cursor: string;
      };
      /**
       * Subscribers
       * @description List of subscriber objects.
       */
      subscribers: {
          /**
           * Created At
           * @description ISO 8601 timestamp when created.
           */
          created_at: string;
          /**
           * Email Address
           * @description Subscriber's email address.
           */
          email_address: string;
          /**
           * Fields
           * @description Custom fields associated with the subscriber.
           */
          fields?: {
              [key: string]: string;
          };
          /**
           * First Name
           * @description Subscriber's first name.
           * @default null
           */
          first_name: string | null;
          /**
           * Id
           * @description Unique identifier of the subscriber.
           */
          id: number;
          /**
           * State
           * @description Subscriber's state (e.g., 'active').
           */
          state: string;
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
 * Type of KIT's KIT_LIST_SUBSCRIBERS_FOR_FORM tool input.
 */
type KIT_LIST_SUBSCRIBERS_FOR_FORM_INPUT = {
  /**
   * Added After
   * @description Return subscribers added to the form after this date/time (ISO 8601).
   * @default null
   */
  added_after: string | null;
  /**
   * Added Before
   * @description Return subscribers added to the form before this date/time (ISO 8601).
   * @default null
   */
  added_before: string | null;
  /**
   * After
   * @description Cursor for pagination; returns results after this cursor.
   * @default null
   */
  after: string | null;
  /**
   * Before
   * @description Cursor for pagination; returns results before this cursor.
   * @default null
   */
  before: string | null;
  /**
   * Created After
   * @description Return subscribers created after this date/time (ISO 8601).
   * @default null
   */
  created_after: string | null;
  /**
   * Created Before
   * @description Return subscribers created before this date/time (ISO 8601).
   * @default null
   */
  created_before: string | null;
  /**
   * Form Id
   * @description ID of the form whose subscribers you want to retrieve.
   */
  form_id?: number;
  /**
   * Include Total Count
   * @description If 'true', includes the total count of subscribers in the response.
   * @default null
   * @enum {string|null}
   */
  include_total_count: "true" | "false" | null;
  /**
   * Per Page
   * @description Number of results to return per page (min 1).
   * @default null
   */
  per_page: number | null;
  /**
   * Status
   * @description Filter subscribers by status (e.g., 'active').
   * @default null
   */
  status: string | null;
};

/**
 * Type of KIT's KIT_LIST_SUBSCRIBERS_FOR_FORM tool output.
 */
type KIT_LIST_SUBSCRIBERS_FOR_FORM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination information.
       */
      pagination: {
          /**
           * End Cursor
           * @description Cursor for the last record of this page.
           */
          end_cursor: string | null;
          /**
           * Has Next Page
           * @description Whether there is a next page.
           */
          has_next_page: boolean;
          /**
           * Has Previous Page
           * @description Whether there is a previous page.
           */
          has_previous_page: boolean;
          /**
           * Start Cursor
           * @description Cursor for the first record of this page.
           */
          start_cursor: string | null;
      };
      /**
       * Subscribers
       * @description List of subscribers on the form.
       */
      subscribers: {
          /**
           * Added At
           * @description ISO 8601 timestamp when the subscriber was added to the form.
           */
          added_at: string;
          /**
           * Created At
           * @description ISO 8601 timestamp when the subscriber was created.
           */
          created_at: string;
          /**
           * Email Address
           * @description Subscriber's email address.
           */
          email_address: string;
          /**
           * Fields
           * @description Custom string fields associated with the subscriber.
           */
          fields?: {
              [key: string]: string | null;
          };
          /**
           * First Name
           * @description Subscriber's first name.
           * @default null
           */
          first_name: string | null;
          /**
           * Id
           * @description Unique identifier of the subscriber.
           */
          id: number;
          /**
           * Referrer
           * @description URL of the referrer.
           * @default null
           */
          referrer: string | null;
          /**
           * Referrer Utm Parameters
           * @description UTM parameters from the referrer URL, keyed by parameter name.
           * @default null
           */
          referrer_utm_parameters: {
              [key: string]: string;
          } | null;
          /**
           * State
           * @description Subscriber's state (e.g., 'active').
           */
          state: string;
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
 * Type of KIT's KIT_LIST_TAGS tool input.
 */
type KIT_LIST_TAGS_INPUT = object;

/**
 * Type of KIT's KIT_LIST_TAGS tool output.
 */
type KIT_LIST_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tags
       * @description List of tag objects
       */
      tags: {
          /**
           * Created At
           * @description Timestamp when the tag was created (ISO 8601 format)
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier for the tag
           */
          id: number;
          /**
           * Name
           * @description Name of the tag
           */
          name: string;
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
 * Type of KIT's KIT_LIST_TAG_SUBSCRIBERS tool input.
 */
type KIT_LIST_TAG_SUBSCRIBERS_INPUT = {
  /**
   * After
   * @description Cursor for pagination; returns subscribers after this cursor.
   * @default null
   */
  after: string | null;
  /**
   * Before
   * @description Cursor for pagination; returns subscribers before this cursor.
   * @default null
   */
  before: string | null;
  /**
   * Created After
   * @description Filter to subscribers created after this timestamp (ISO 8601).
   * @default null
   */
  created_after: string | null;
  /**
   * Created Before
   * @description Filter to subscribers created before this timestamp (ISO 8601).
   * @default null
   */
  created_before: string | null;
  /**
   * Include Total Count
   * @description If set to 'true', includes total count of subscribers in the response.
   * @default null
   * @enum {string|null}
   */
  include_total_count: "true" | "false" | null;
  /**
   * Per Page
   * @description Number of subscribers to return per page (min 1).
   * @default null
   */
  per_page: number | null;
  /**
   * Status
   * @description Filter by subscriber status ('active' or 'inactive').
   * @default null
   */
  status: string | null;
  /**
   * Tag Id
   * @description Unique identifier of the tag to retrieve subscribers for
   */
  tag_id?: number;
  /**
   * Tagged After
   * @description Filter to subscribers tagged after this timestamp (ISO 8601).
   * @default null
   */
  tagged_after: string | null;
  /**
   * Tagged Before
   * @description Filter to subscribers tagged before this timestamp (ISO 8601).
   * @default null
   */
  tagged_before: string | null;
};

/**
 * Type of KIT's KIT_LIST_TAG_SUBSCRIBERS tool output.
 */
type KIT_LIST_TAG_SUBSCRIBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination information for the result set.
       */
      pagination: {
          /**
           * End Cursor
           * @description Cursor for the last record of this page.
           * @default null
           */
          end_cursor: string | null;
          /**
           * Has Next Page
           * @description Whether there is a next page.
           */
          has_next_page: boolean;
          /**
           * Has Previous Page
           * @description Whether there is a previous page.
           */
          has_previous_page: boolean;
          /**
           * Per Page
           * @description Number of records returned per page.
           */
          per_page: number;
          /**
           * Start Cursor
           * @description Cursor for the first record of this page.
           * @default null
           */
          start_cursor: string | null;
      };
      /**
       * Subscribers
       * @description List of subscriber objects associated with the tag.
       */
      subscribers: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the subscriber was created.
           */
          created_at: string;
          /**
           * Email Address
           * @description Subscriber's email address.
           */
          email_address: string;
          /**
           * Fields
           * @description Custom fields associated with the subscriber.
           */
          fields?: {
              [key: string]: string | null;
          };
          /**
           * First Name
           * @description Subscriber's first name.
           * @default null
           */
          first_name: string | null;
          /**
           * Id
           * @description Unique identifier of the subscriber.
           */
          id: number;
          /**
           * State
           * @description Subscriber's state (e.g., 'active').
           */
          state: string;
          /**
           * Tagged At
           * @description ISO 8601 timestamp when the subscriber was tagged.
           */
          tagged_at: string;
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
 * Type of KIT's KIT_TAG_SUBSCRIBER tool input.
 */
type KIT_TAG_SUBSCRIBER_INPUT = {
  /**
   * Subscriber Id
   * @description ID of the subscriber to tag
   */
  subscriber_id?: number;
  /**
   * Tag Id
   * @description ID of the tag to assign
   */
  tag_id?: number;
};

/**
 * Type of KIT's KIT_TAG_SUBSCRIBER tool output.
 */
type KIT_TAG_SUBSCRIBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Subscriber
       * @description The subscriber object associated with the tag
       */
      subscriber: {
          /**
           * Created At
           * @description ISO 8601 timestamp when subscriber was created
           */
          created_at: string;
          /**
           * Email Address
           * @description Subscriber's email address
           */
          email_address: string;
          /**
           * Fields
           * @description Custom fields associated with the subscriber
           */
          fields?: {
              [key: string]: string | null;
          };
          /**
           * First Name
           * @description Subscriber's first name
           * @default null
           */
          first_name: string | null;
          /**
           * Id
           * @description Unique identifier of the subscriber
           */
          id: number;
          /**
           * State
           * @description Subscriber's state (e.g., 'active' or 'inactive')
           */
          state: string;
          /**
           * Tagged At
           * @description ISO 8601 timestamp when subscriber was tagged
           */
          tagged_at: string;
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
 * Type of KIT's KIT_TAG_SUBSCRIBER_BY_EMAIL tool input.
 */
type KIT_TAG_SUBSCRIBER_BY_EMAIL_INPUT = {
  /**
   * Email Address
   * Format: email
   * @description The subscriber's email address
   */
  email_address?: unknown;
  /**
   * Tag Id
   * @description The ID of the tag to assign to the subscriber
   */
  tag_id?: number;
};

/**
 * Type of KIT's KIT_TAG_SUBSCRIBER_BY_EMAIL tool output.
 */
type KIT_TAG_SUBSCRIBER_BY_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Subscriber
       * @description The subscriber object associated with the tag
       */
      subscriber: {
          /**
           * Created At
           * @description ISO8601 timestamp when subscriber was created
           */
          created_at: string;
          /**
           * Email Address
           * @description Subscriber's email address
           */
          email_address: string;
          /**
           * Fields
           * @description Custom fields associated with the subscriber
           */
          fields?: {
              [key: string]: string | null;
          };
          /**
           * First Name
           * @description Subscriber's first name
           * @default null
           */
          first_name: string | null;
          /**
           * Id
           * @description Unique identifier of the subscriber
           */
          id: number;
          /**
           * State
           * @description Subscriber status (e.g., 'active' or 'inactive')
           */
          state: string;
          /**
           * Tagged At
           * @description ISO8601 timestamp when subscriber was tagged
           */
          tagged_at: string;
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
 * Type of KIT's KIT_UPDATE_ACCOUNT_COLORS tool input.
 */
type KIT_UPDATE_ACCOUNT_COLORS_INPUT = {
  /**
   * Colors
   * @description List of hex color codes to set for the account (e.g., '#008000', '#FF0000').
   */
  colors?: string[];
};

/**
 * Type of KIT's KIT_UPDATE_ACCOUNT_COLORS tool output.
 */
type KIT_UPDATE_ACCOUNT_COLORS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Colors
       * @description Updated list of color codes for the account.
       */
      colors: string[];
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
 * Type of KIT's KIT_UPDATE_CUSTOM_FIELD tool input.
 */
type KIT_UPDATE_CUSTOM_FIELD_INPUT = {
  /**
   * Id
   * @description Unique identifier of the custom field to update
   */
  id?: number;
  /**
   * Label
   * @description New label for the custom field
   */
  label?: string;
};

/**
 * Type of KIT's KIT_UPDATE_CUSTOM_FIELD tool output.
 */
type KIT_UPDATE_CUSTOM_FIELD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Custom Field
       * @description Details of the updated custom field.
       */
      custom_field: {
          /**
           * Id
           * @description Unique identifier of the custom field.
           */
          id: number;
          /**
           * Key
           * @description Key used to reference the custom field in API calls.
           */
          key: string;
          /**
           * Label
           * @description Display label of the custom field.
           */
          label: string;
          /**
           * Name
           * @description System-generated name of the custom field.
           */
          name: string;
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
 * Type of KIT's KIT_UPDATE_TAG tool input.
 */
type KIT_UPDATE_TAG_INPUT = {
  /**
   * Id
   * @description Unique identifier of the tag to update
   */
  id?: number;
  /**
   * Name
   * @description New name for the tag
   */
  name?: string;
};

/**
 * Type of KIT's KIT_UPDATE_TAG tool output.
 */
type KIT_UPDATE_TAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tag
       * @description Details of the updated tag.
       */
      tag: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the tag was created.
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the tag.
           */
          id: number;
          /**
           * Name
           * @description Name of the tag.
           */
          name: string;
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
 * Type map of all available tool input types for toolkit "KIT".
 */
export type KIT_TOOL_INPUTS = {
  ADD_SUBSCRIBER_TO_FORM: KIT_ADD_SUBSCRIBER_TO_FORM_INPUT
  CREATE_CUSTOM_FIELD: KIT_CREATE_CUSTOM_FIELD_INPUT
  CREATE_TAG: KIT_CREATE_TAG_INPUT
  CREATE_WEBHOOK: KIT_CREATE_WEBHOOK_INPUT
  DELETE_BROADCAST: KIT_DELETE_BROADCAST_INPUT
  DELETE_CUSTOM_FIELD: KIT_DELETE_CUSTOM_FIELD_INPUT
  DELETE_SUBSCRIBER: KIT_DELETE_SUBSCRIBER_INPUT
  DELETE_TAG: KIT_DELETE_TAG_INPUT
  DELETE_WEBHOOK: KIT_DELETE_WEBHOOK_INPUT
  GET_ACCOUNT: KIT_GET_ACCOUNT_INPUT
  GET_ACCOUNT_COLORS: KIT_GET_ACCOUNT_COLORS_INPUT
  GET_BROADCAST: KIT_GET_BROADCAST_INPUT
  GET_BROADCAST_STATS: KIT_GET_BROADCAST_STATS_INPUT
  GET_CREATOR_PROFILE: KIT_GET_CREATOR_PROFILE_INPUT
  GET_EMAIL_STATS: KIT_GET_EMAIL_STATS_INPUT
  LIST_BROADCASTS: KIT_LIST_BROADCASTS_INPUT
  LIST_CUSTOM_FIELDS: KIT_LIST_CUSTOM_FIELDS_INPUT
  LIST_FORMS: KIT_LIST_FORMS_INPUT
  LIST_SEGMENTS: KIT_LIST_SEGMENTS_INPUT
  LIST_SEQUENCES: KIT_LIST_SEQUENCES_INPUT
  LIST_SUBSCRIBERS: KIT_LIST_SUBSCRIBERS_INPUT
  LIST_SUBSCRIBERS_FOR_FORM: KIT_LIST_SUBSCRIBERS_FOR_FORM_INPUT
  LIST_TAGS: KIT_LIST_TAGS_INPUT
  LIST_TAG_SUBSCRIBERS: KIT_LIST_TAG_SUBSCRIBERS_INPUT
  TAG_SUBSCRIBER: KIT_TAG_SUBSCRIBER_INPUT
  TAG_SUBSCRIBER_BY_EMAIL: KIT_TAG_SUBSCRIBER_BY_EMAIL_INPUT
  UPDATE_ACCOUNT_COLORS: KIT_UPDATE_ACCOUNT_COLORS_INPUT
  UPDATE_CUSTOM_FIELD: KIT_UPDATE_CUSTOM_FIELD_INPUT
  UPDATE_TAG: KIT_UPDATE_TAG_INPUT
}

/**
 * Type map of all available tool input types for toolkit "KIT".
 */
export type KIT_TOOL_OUTPUTS = {
  ADD_SUBSCRIBER_TO_FORM: KIT_ADD_SUBSCRIBER_TO_FORM_OUTPUT
  CREATE_CUSTOM_FIELD: KIT_CREATE_CUSTOM_FIELD_OUTPUT
  CREATE_TAG: KIT_CREATE_TAG_OUTPUT
  CREATE_WEBHOOK: KIT_CREATE_WEBHOOK_OUTPUT
  DELETE_BROADCAST: KIT_DELETE_BROADCAST_OUTPUT
  DELETE_CUSTOM_FIELD: KIT_DELETE_CUSTOM_FIELD_OUTPUT
  DELETE_SUBSCRIBER: KIT_DELETE_SUBSCRIBER_OUTPUT
  DELETE_TAG: KIT_DELETE_TAG_OUTPUT
  DELETE_WEBHOOK: KIT_DELETE_WEBHOOK_OUTPUT
  GET_ACCOUNT: KIT_GET_ACCOUNT_OUTPUT
  GET_ACCOUNT_COLORS: KIT_GET_ACCOUNT_COLORS_OUTPUT
  GET_BROADCAST: KIT_GET_BROADCAST_OUTPUT
  GET_BROADCAST_STATS: KIT_GET_BROADCAST_STATS_OUTPUT
  GET_CREATOR_PROFILE: KIT_GET_CREATOR_PROFILE_OUTPUT
  GET_EMAIL_STATS: KIT_GET_EMAIL_STATS_OUTPUT
  LIST_BROADCASTS: KIT_LIST_BROADCASTS_OUTPUT
  LIST_CUSTOM_FIELDS: KIT_LIST_CUSTOM_FIELDS_OUTPUT
  LIST_FORMS: KIT_LIST_FORMS_OUTPUT
  LIST_SEGMENTS: KIT_LIST_SEGMENTS_OUTPUT
  LIST_SEQUENCES: KIT_LIST_SEQUENCES_OUTPUT
  LIST_SUBSCRIBERS: KIT_LIST_SUBSCRIBERS_OUTPUT
  LIST_SUBSCRIBERS_FOR_FORM: KIT_LIST_SUBSCRIBERS_FOR_FORM_OUTPUT
  LIST_TAGS: KIT_LIST_TAGS_OUTPUT
  LIST_TAG_SUBSCRIBERS: KIT_LIST_TAG_SUBSCRIBERS_OUTPUT
  TAG_SUBSCRIBER: KIT_TAG_SUBSCRIBER_OUTPUT
  TAG_SUBSCRIBER_BY_EMAIL: KIT_TAG_SUBSCRIBER_BY_EMAIL_OUTPUT
  UPDATE_ACCOUNT_COLORS: KIT_UPDATE_ACCOUNT_COLORS_OUTPUT
  UPDATE_CUSTOM_FIELD: KIT_UPDATE_CUSTOM_FIELD_OUTPUT
  UPDATE_TAG: KIT_UPDATE_TAG_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's KIT toolkit.
 */
export const KIT = {
  slug: "kit",
  tools: {
    /**
     * Tool to add a subscriber to a specific form by id. use after confirming form and subscriber ids.
     */
    ADD_SUBSCRIBER_TO_FORM: "KIT_ADD_SUBSCRIBER_TO_FORM",
    /**
     * Tool to create a new custom field for subscriber data. use when you need to store extra attributes for subscribers.
     */
    CREATE_CUSTOM_FIELD: "KIT_CREATE_CUSTOM_FIELD",
    /**
     * Tool to create a new tag in the account. use when you need a custom label to segment subscribers. use after confirming tag uniqueness to avoid duplicates. example: "create a tag called 'vip' for premium customers."
     */
    CREATE_TAG: "KIT_CREATE_TAG",
    /**
     * Tool to create a new webhook subscription. use when you need subscriber or purchase event notifications.
     */
    CREATE_WEBHOOK: "KIT_CREATE_WEBHOOK",
    /**
     * Tool to delete a specific broadcast. use when you need to permanently remove a broadcast by id (after confirming the id). example prompt: "delete broadcast with id 123"
     */
    DELETE_BROADCAST: "KIT_DELETE_BROADCAST",
    /**
     * Tool to delete a specific custom field. use after confirming the custom field id is correct. deletes the field permanently.
     */
    DELETE_CUSTOM_FIELD: "KIT_DELETE_CUSTOM_FIELD",
    /**
     * Tool to delete (unsubscribe) a subscriber by id. use when you need to remove a subscriber from all sequences and forms after confirming the subscriber exists.
     */
    DELETE_SUBSCRIBER: "KIT_DELETE_SUBSCRIBER",
    /**
     * Tool to delete a tag by id. use when you need to remove obsolete or incorrect tags after confirming the tag exists.
     */
    DELETE_TAG: "KIT_DELETE_TAG",
    /**
     * Tool to delete a webhook by id. use when you want to permanently remove a webhook after confirming its id.
     */
    DELETE_WEBHOOK: "KIT_DELETE_WEBHOOK",
    /**
     * Tool to retrieve current account information. use after validating api key to fetch account id, plan type, primary email, and timezone details.
     */
    GET_ACCOUNT: "KIT_GET_ACCOUNT",
    /**
     * Tool to retrieve list of colors associated with the account. use after confirming authentication to fetch account-specific color palette.
     */
    GET_ACCOUNT_COLORS: "KIT_GET_ACCOUNT_COLORS",
    /**
     * Tool to retrieve details of a specific broadcast by id. use when you have a valid broadcast id and need its metadata.
     */
    GET_BROADCAST: "KIT_GET_BROADCAST",
    /**
     * Tool to retrieve statistics for a specific broadcast by id. use after a broadcast has been sent to monitor performance.
     */
    GET_BROADCAST_STATS: "KIT_GET_BROADCAST_STATS",
    /**
     * Tool to retrieve the creator profile information for the account. use when you need creator metadata (bio, avatar, social links) before publishing or customizing content.
     */
    GET_CREATOR_PROFILE: "KIT_GET_CREATOR_PROFILE",
    /**
     * Tool to retrieve email statistics for the account. use after confirming authentication to fetch metrics on emails (sent, opened, clicked) over the last 90 days.
     */
    GET_EMAIL_STATS: "KIT_GET_EMAIL_STATS",
    /**
     * Tool to retrieve a paginated list of all broadcasts. use when you need to enumerate or review broadcast summaries with cursor-based pagination.
     */
    LIST_BROADCASTS: "KIT_LIST_BROADCASTS",
    /**
     * Tool to retrieve a paginated list of custom fields. use after confirming you need to enumerate or inspect all custom fields with cursor-based pagination.
     */
    LIST_CUSTOM_FIELDS: "KIT_LIST_CUSTOM_FIELDS",
    /**
     * Tool to list all forms. use when you need to fetch forms with optional filters and pagination.
     */
    LIST_FORMS: "KIT_LIST_FORMS",
    /**
     * Tool to retrieve a paginated list of segments. use when you need to enumerate segments with cursor-based pagination for further processing or display.
     */
    LIST_SEGMENTS: "KIT_LIST_SEGMENTS",
    /**
     * Tool to retrieve a paginated list of all sequences. use when you need to enumerate sequences with pagination for further processing or display.
     */
    LIST_SEQUENCES: "KIT_LIST_SEQUENCES",
    /**
     * Tool to retrieve a list of subscribers. use when you need to fetch subscriber records with optional filtering, sorting, and pagination.
     */
    LIST_SUBSCRIBERS: "KIT_LIST_SUBSCRIBERS",
    /**
     * Tool to retrieve subscribers for a specific form by id. use when you need to page or filter subscribers of a form.
     */
    LIST_SUBSCRIBERS_FOR_FORM: "KIT_LIST_SUBSCRIBERS_FOR_FORM",
    /**
     * Tool to retrieve a list of all tags. use when you need a complete inventory of tags for the kit account.
     */
    LIST_TAGS: "KIT_LIST_TAGS",
    /**
     * Tool to retrieve subscribers for a specific tag. use after confirming the tag id when you need to list subscribers associated with a tag.
     */
    LIST_TAG_SUBSCRIBERS: "KIT_LIST_TAG_SUBSCRIBERS",
    /**
     * Tool to associate a subscriber with a specific tag by id. use after confirming tag and subscriber ids when tagging a subscriber.
     */
    TAG_SUBSCRIBER: "KIT_TAG_SUBSCRIBER",
    /**
     * Tool to associate a subscriber with a tag using an email address. use when you have a tag id and subscriber email ready. use after confirming both resources exist.
     */
    TAG_SUBSCRIBER_BY_EMAIL: "KIT_TAG_SUBSCRIBER_BY_EMAIL",
    /**
     * Tool to update the list of colors for the account. use when customizing your kit account's color palette for broadcasts and templates.
     */
    UPDATE_ACCOUNT_COLORS: "KIT_UPDATE_ACCOUNT_COLORS",
    /**
     * Tool to update a custom field's label. use after listing or retrieving custom fields and confirming the field id to rename.
     */
    UPDATE_CUSTOM_FIELD: "KIT_UPDATE_CUSTOM_FIELD",
    /**
     * Tool to update a tag's name by id. use after retrieving tag id and confirming the new name.
     */
    UPDATE_TAG: "KIT_UPDATE_TAG",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "KIT".
 */
export type KIT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "KIT".
 */
export type KIT_TRIGGER_EVENTS = {}
