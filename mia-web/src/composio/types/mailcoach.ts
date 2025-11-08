// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MAILCOACH's MAILCOACH_ADD_CAMPAIGN tool input.
 */
type MAILCOACH_ADD_CAMPAIGN_INPUT = {
  /**
   * Add Subscriber Link Tags
   * @description Whether to add link tags for each subscriber
   * @default false
   */
  add_subscriber_link_tags: boolean | null;
  /**
   * Add Subscriber Tags
   * @description Whether to add subscriber-specific tags found in the content
   * @default false
   */
  add_subscriber_tags: boolean | null;
  /**
   * Disable Webview
   * @description Whether to disable the webview version of the email
   * @default false
   */
  disable_webview: boolean | null;
  /**
   * Email List Uuid
   * @description UUID of the email list to send the campaign to
   */
  email_list_uuid?: string;
  /**
   * CampaignFields
   * @description Dynamic template fields when using a template UUID.
   * @default null
   */
  fields: {
      /**
       * Content
       * @description Template placeholder: content of the campaign (Markdown allowed if configured)
       */
      content: string;
      /**
       * Title
       * @description Template placeholder: title of the campaign
       */
      title: string;
  } | null;
  /**
   * Html
   * @description Raw HTML content for the campaign; if omitted, template_uuid or mailable_class must be provided
   * @default null
   */
  html: string | null;
  /**
   * Mailable Class
   * @description Fully-qualified class name for a custom mailable
   * @default null
   */
  mailable_class: string | null;
  /**
   * Name
   * @description Unique name for the campaign
   */
  name?: string;
  /**
   * Schedule At
   * @description Schedule date/time in 'YYYY-MM-DD HH:MM:SS' (server timezone)
   * @default null
   */
  schedule_at: string | null;
  /**
   * Segment Uuid
   * @description UUID of the subscriber segment to target
   * @default null
   */
  segment_uuid: string | null;
  /**
   * Template Uuid
   * @description UUID of the template; required if using a saved template
   * @default null
   */
  template_uuid: string | null;
  /**
   * Utm Tags
   * @description Whether to automatically append UTM parameters to all links
   * @default false
   */
  utm_tags: boolean | null;
};

/**
 * Type of MAILCOACH's MAILCOACH_ADD_CAMPAIGN tool output.
 */
type MAILCOACH_ADD_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bounce Count
       * @description Total bounce count
       */
      bounce_count: number;
      /**
       * Bounce Rate
       * @description Bounce rate percentage
       */
      bounce_rate: number;
      /**
       * Click Count
       * @description Total click count
       */
      click_count: number;
      /**
       * Click Rate
       * @description Click rate percentage
       */
      click_rate: number;
      /**
       * Created At
       * @description Datetime when campaign was created
       */
      created_at: string;
      /**
       * Email Html
       * @description Email HTML content
       * @default null
       */
      email_html: string | null;
      /**
       * Email List Uuid
       * @description UUID of the email list
       */
      email_list_uuid: string;
      /**
       * From Email
       * @description From email address
       * @default null
       */
      from_email: string | null;
      /**
       * From Name
       * @description From name
       * @default null
       */
      from_name: string | null;
      /**
       * Html
       * @description Raw HTML content
       * @default null
       */
      html: string | null;
      /**
       * Last Modified At
       * @description Datetime when last modified
       */
      last_modified_at: string;
      /**
       * Mailable Class
       * @description Mailable class name if used
       * @default null
       */
      mailable_class: string | null;
      /**
       * Name
       * @description Name of the campaign
       * @default null
       */
      name: string | null;
      /**
       * Open Count
       * @description Total open count
       */
      open_count: number;
      /**
       * Open Rate
       * @description Open rate percentage
       */
      open_rate: number;
      /**
       * Scheduled At
       * @description Scheduled send datetime
       * @default null
       */
      scheduled_at: string | null;
      /**
       * Segment Class
       * @description Segment class if used
       * @default null
       */
      segment_class: string | null;
      /**
       * Segment Description
       * @description Segment description if used
       * @default null
       */
      segment_description: string | null;
      /**
       * Sent At
       * @description Datetime when campaign was sent
       * @default null
       */
      sent_at: string | null;
      /**
       * Sent To Number Of Subscribers
       * @description Number of subscribers the campaign was sent to
       */
      sent_to_number_of_subscribers: number;
      /**
       * Statistics Calculated At
       * @description Datetime when stats were calculated
       * @default null
       */
      statistics_calculated_at: string | null;
      /**
       * Status
       * @description Current status of the campaign
       * @enum {string}
       */
      status: "draft" | "scheduled" | "sent";
      /**
       * Structured Html
       * @description Structured HTML of the campaign
       * @default null
       */
      structured_html: string | null;
      /**
       * Summary Mail Sent At
       * @description Datetime when summary mail was sent
       * @default null
       */
      summary_mail_sent_at: string | null;
      /**
       * Unique Click Count
       * @description Unique click count
       */
      unique_click_count: number;
      /**
       * Unique Open Count
       * @description Unique open count
       */
      unique_open_count: number;
      /**
       * Unsubscribe Count
       * @description Total unsubscribe count
       */
      unsubscribe_count: number;
      /**
       * Unsubscribe Rate
       * @description Unsubscribe rate percentage
       */
      unsubscribe_rate: number;
      /**
       * Updated At
       * @description Datetime when campaign was last updated
       */
      updated_at: string;
      /**
       * Uuid
       * @description UUID of the campaign
       */
      uuid: string;
      /**
       * Webview Html
       * @description Webview HTML content
       * @default null
       */
      webview_html: string | null;
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
 * Type of MAILCOACH's MAILCOACH_ADD_EMAIL_LIST tool input.
 */
type MAILCOACH_ADD_EMAIL_LIST_INPUT = {
  /**
   * Allow Form Subscriptions
   * @description Allow subscriptions via form
   * @default null
   */
  allow_form_subscriptions: boolean | null;
  /**
   * Allowed Form Subscription Tags
   * @description Allowed tags that subscribers can choose when subscribing via form
   * @default null
   */
  allowed_form_subscription_tags: string[] | null;
  /**
   * Automation Mailer
   * @description Mailer for automations, as defined in the Laravel config
   * @default null
   */
  automation_mailer: string | null;
  /**
   * Campaign Mailer
   * @description Mailer for campaigns, as defined in the Laravel config
   * @default null
   */
  campaign_mailer: string | null;
  /**
   * Campaigns Feed Enabled
   * @description Enable RSS feed for campaigns
   * @default null
   */
  campaigns_feed_enabled: boolean | null;
  /**
   * Confirmation Mail
   * @description Type of confirmation mail to send
   * @default null
   * @enum {string|null}
   */
  confirmation_mail: "send_default_confirmation_mail" | "send_custom_confirmation_mail" | null;
  /**
   * Confirmation Mail Content
   * @description HTML content for custom confirmation mail; required if confirmation_mail is send_custom_confirmation_mail
   * @default null
   */
  confirmation_mail_content: string | null;
  /**
   * Confirmation Mail Subject
   * @description Subject for custom confirmation mail; required if confirmation_mail is send_custom_confirmation_mail
   * @default null
   */
  confirmation_mail_subject: string | null;
  /**
   * Default From Email
   * Format: email
   * @description Default sender email address
   */
  default_from_email?: string;
  /**
   * Default From Name
   * @description Default sender name
   * @default null
   */
  default_from_name: string | null;
  /**
   * Default Reply To Email
   * Format: email
   * @description Default reply-to email address
   * @default null
   */
  default_reply_to_email: string | null;
  /**
   * Default Reply To Name
   * @description Default reply-to name
   * @default null
   */
  default_reply_to_name: string | null;
  /**
   * Name
   * @description Email list name
   */
  name?: string;
  /**
   * Redirect After Already Subscribed
   * @description URL redirect when already subscribed
   * @default null
   */
  redirect_after_already_subscribed: string | null;
  /**
   * Redirect After Subscribed
   * @description URL redirect after a successful subscription
   * @default null
   */
  redirect_after_subscribed: string | null;
  /**
   * Redirect After Subscription Pending
   * @description URL redirect after subscription pending confirmation
   * @default null
   */
  redirect_after_subscription_pending: string | null;
  /**
   * Redirect After Unsubscribed
   * @description URL redirect after unsubscribed
   * @default null
   */
  redirect_after_unsubscribed: string | null;
  /**
   * Report Campaign Sent
   * @description Send report after each campaign is sent
   * @default null
   */
  report_campaign_sent: boolean | null;
  /**
   * Report Campaign Summary
   * @description Include campaign summary in reports
   * @default null
   */
  report_campaign_summary: boolean | null;
  /**
   * Report Email List Summary
   * @description Include email list summary in reports
   * @default null
   */
  report_email_list_summary: boolean | null;
  /**
   * Report Recipients
   * @description Comma-separated emails to receive reports
   * @default null
   */
  report_recipients: string | null;
  /**
   * Requires Confirmation
   * @description Require double opt-in confirmation for new subscribers
   * @default null
   */
  requires_confirmation: boolean | null;
  /**
   * Transactional Mailer
   * @description Mailer for transactional emails, as defined in the Laravel config
   * @default null
   */
  transactional_mailer: string | null;
};

/**
 * Type of MAILCOACH's MAILCOACH_ADD_EMAIL_LIST tool output.
 */
type MAILCOACH_ADD_EMAIL_LIST_OUTPUT = {
  /** Data */
  data?: {
      /** Active Subscribers Count */
      active_subscribers_count: number;
      /** Allow Form Subscriptions */
      allow_form_subscriptions: boolean;
      /** Automation Mailer */
      automation_mailer: string;
      /** Campaign Mailer */
      campaign_mailer: string;
      /** Campaigns Feed Enabled */
      campaigns_feed_enabled: boolean;
      /** Confirmation Mail Content */
      confirmation_mail_content: string | null;
      /** Confirmation Mail Subject */
      confirmation_mail_subject: string | null;
      /** Confirmation Mailable Class */
      confirmation_mailable_class: string | null;
      /** Created At */
      created_at: string;
      /**
       * Default From Email
       * Format: email
       */
      default_from_email: string;
      /** Default From Name */
      default_from_name: string | null;
      /** Email List Summary Sent At */
      email_list_summary_sent_at: string | null;
      /** Name */
      name: string;
      /** Redirect After Already Subscribed */
      redirect_after_already_subscribed: string | null;
      /** Redirect After Subscribed */
      redirect_after_subscribed: string | null;
      /** Redirect After Subscription Pending */
      redirect_after_subscription_pending: string | null;
      /** Redirect After Unsubscribed */
      redirect_after_unsubscribed: string | null;
      /** Report Campaign Sent */
      report_campaign_sent: boolean;
      /** Report Campaign Summary */
      report_campaign_summary: boolean;
      /** Report Email List Summary */
      report_email_list_summary: boolean;
      /** Report Recipients */
      report_recipients: string | null;
      /** Requires Confirmation */
      requires_confirmation: boolean;
      /** Transactional Mailer */
      transactional_mailer: string;
      /** Updated At */
      updated_at: string;
      /** Uuid */
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
 * Type of MAILCOACH's MAILCOACH_ADD_SUPPRESSION tool input.
 */
type MAILCOACH_ADD_SUPPRESSION_INPUT = {
  /**
   * Email
   * @description The email address to suppress
   */
  email?: string;
  /**
   * Reason
   * @description Reason for suppression. One of 'hard_bounce', 'spam_complaint', or 'manual'.
   * @default null
   * @enum {string|null}
   */
  reason: "hard_bounce" | "spam_complaint" | "manual" | null;
};

/**
 * Type of MAILCOACH's MAILCOACH_ADD_SUPPRESSION tool output.
 */
type MAILCOACH_ADD_SUPPRESSION_OUTPUT = {
  /**
   * Data
   * @description Representation of a suppression entry returned by Mailcoach.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 datetime when suppression was created
       */
      created_at: string;
      /**
       * Email
       * @description Suppressed email address
       */
      email: string;
      /**
       * Reason
       * @description Suppression reason
       * @enum {string}
       */
      reason: "hard_bounce" | "spam_complaint" | "manual";
      /**
       * Updated At
       * @description ISO 8601 datetime when suppression was last updated
       */
      updated_at: string;
      /**
       * Uuid
       * @description Unique suppression identifier
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
 * Type of MAILCOACH's MAILCOACH_ADD_TAG tool input.
 */
type MAILCOACH_ADD_TAG_INPUT = {
  /**
   * Email List Uuid
   * @description UUID of the target email list where the tag will be created
   */
  email_list_uuid?: string;
  /**
   * Name
   * @description Name of the tag to create
   */
  name?: string;
  /**
   * Visible In Preferences
   * @description Whether this tag should be shown in subscriber preference settings. If omitted, defaults to the server's default behavior.
   * @default null
   */
  visible_in_preferences: boolean | null;
};

/**
 * Type of MAILCOACH's MAILCOACH_ADD_TAG tool output.
 */
type MAILCOACH_ADD_TAG_OUTPUT = {
  /**
   * Data
   * @description The created tag object
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the tag was created
       * @default null
       */
      created_at: string | null;
      /**
       * Email List Uuid
       * @description UUID of the email list this tag belongs to
       * @default null
       */
      email_list_uuid: string | null;
      /**
       * Name
       * @description Name of the created tag
       */
      name: string;
      /**
       * Updated At
       * @description Timestamp when the tag was last updated
       * @default null
       */
      updated_at: string | null;
      /**
       * Uuid
       * @description UUID of the created tag
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
 * Type of MAILCOACH's MAILCOACH_ADD_TAGS_TO_SUBSCRIBER tool input.
 */
type MAILCOACH_ADD_TAGS_TO_SUBSCRIBER_INPUT = {
  /**
   * Subscriber Uuid
   * @description The UUID of the subscriber to which tags will be added.
   */
  subscriber_uuid?: string;
  /**
   * Tags
   * @description Non-empty list of tag names to add to the subscriber.
   */
  tags?: string[];
};

/**
 * Type of MAILCOACH's MAILCOACH_ADD_TAGS_TO_SUBSCRIBER tool output.
 */
type MAILCOACH_ADD_TAGS_TO_SUBSCRIBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Added Tags
       * @description List of tags that were successfully added. Returned if API response includes tags.
       * @default null
       */
      addedTags: string[] | null;
      /**
       * Status
       * @description Indicates the tags were added successfully.
       * @default success
       * @constant
       */
      status: "success";
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
 * Type of MAILCOACH's MAILCOACH_ADD_TEMPLATE tool input.
 */
type MAILCOACH_ADD_TEMPLATE_INPUT = {
  /**
   * Html
   * @description The template's full HTML content
   * @default null
   */
  html: string | null;
  /**
   * Name
   * @description The template's name
   */
  name?: string;
  /**
   * Structured Html
   * @description Structured HTML content; may be null
   * @default null
   */
  structured_html: string | null;
};

/**
 * Type of MAILCOACH's MAILCOACH_ADD_TEMPLATE tool output.
 */
type MAILCOACH_ADD_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data model for a Mailcoach template.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when created
       */
      created_at: string;
      /**
       * Html
       * @description HTML content returned
       */
      html: string;
      /**
       * Id
       * @description Template ID
       */
      id: number;
      /**
       * Name
       * @description Template name
       */
      name: string;
      /**
       * Structured Html
       * @description Structured HTML content or null
       * @default null
       */
      structured_html: string | null;
      /**
       * Updated At
       * @description ISO 8601 timestamp when last updated
       */
      updated_at: string;
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
 * Type of MAILCOACH's MAILCOACH_ADD_TRANSACTIONAL_EMAIL_TEMPLATE tool input.
 */
type MAILCOACH_ADD_TRANSACTIONAL_EMAIL_TEMPLATE_INPUT = {
  /**
   * Bcc
   * @description Default 'bcc' recipient(s), comma-separated (ignored).
   * @default null
   */
  bcc: string | null;
  /**
   * Cc
   * @description Default 'cc' recipient(s), comma-separated (ignored).
   * @default null
   */
  cc: string | null;
  /**
   * Html
   * @description HTML content of the template.
   * @default null
   */
  html: string | null;
  /**
   * Name
   * @description Unique name for the template.
   */
  name?: string;
  /**
   * Store Mail
   * @description Whether to store sent mails (ignored).
   * @default null
   */
  store_mail: boolean | null;
  /**
   * Structured Html
   * @description Structured HTML content (e.g., MJML).
   * @default null
   */
  structured_html: string | null;
  /**
   * Subject
   * @description Subject line (ignored when creating general templates).
   * @default null
   */
  subject: string | null;
  /**
   * To
   * @description Default 'to' recipient(s), comma-separated (ignored).
   * @default null
   */
  to: string | null;
};

/**
 * Type of MAILCOACH's MAILCOACH_ADD_TRANSACTIONAL_EMAIL_TEMPLATE tool output.
 */
type MAILCOACH_ADD_TRANSACTIONAL_EMAIL_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data model for a Mailcoach general template.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when created
       */
      created_at: string;
      /**
       * Html
       * @description HTML content returned
       */
      html: string;
      /**
       * Id
       * @description Template ID
       */
      id: number;
      /**
       * Name
       * @description Template name
       */
      name: string;
      /**
       * Structured Html
       * @description Structured HTML or null
       * @default null
       */
      structured_html: string | null;
      /**
       * Updated At
       * @description ISO 8601 timestamp when last updated
       */
      updated_at: string;
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
 * Type of MAILCOACH's MAILCOACH_APPEND_TO_SUBSCRIBER_IMPORT tool input.
 */
type MAILCOACH_APPEND_TO_SUBSCRIBER_IMPORT_INPUT = {
  /**
   * Import Uuid
   * @description UUID of the subscriber import to append data to.
   */
  import_uuid?: string;
  /**
   * Subscribers Csv
   * @description CSV formatted string of subscriber data to append.
   */
  subscribers_csv?: string;
};

/**
 * Type of MAILCOACH's MAILCOACH_APPEND_TO_SUBSCRIBER_IMPORT tool output.
 */
type MAILCOACH_APPEND_TO_SUBSCRIBER_IMPORT_OUTPUT = {
  /**
   * Data
   * @description Details of the updated subscriber import.
   */
  data?: {
      /**
       * Email List Uuid
       * @description UUID of the target email list.
       */
      email_list_uuid: string;
      /**
       * Error Count
       * @description Number of errors encountered during import.
       */
      error_count: number;
      /**
       * Id
       * @description Internal ID of the subscriber import.
       */
      id: number;
      /**
       * Imported Subscribers Count
       * @description Number of subscribers successfully imported, null if pending.
       * @default null
       */
      imported_subscribers_count: number | null;
      /**
       * Status
       * @description Current status of the import, e.g., 'draft'.
       */
      status: string;
      /**
       * Subscribe Unsubscribed
       * @description Whether unsubscribed emails should be re-subscribed.
       */
      subscribe_unsubscribed: boolean;
      /**
       * Subscribers Csv
       * @description Combined CSV content after append.
       */
      subscribers_csv: string;
      /**
       * Unsubscribe Others
       * @description Whether subscribers not in the CSV should be unsubscribed.
       */
      unsubscribe_others: boolean;
      /**
       * Uuid
       * @description UUID of the subscriber import.
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
 * Type of MAILCOACH's MAILCOACH_CONFIRM_SUBSCRIBER tool input.
 */
type MAILCOACH_CONFIRM_SUBSCRIBER_INPUT = {
  /**
   * Subscriber Uuid
   * Format: uuid
   * @description UUID of the subscriber to confirm
   */
  subscriber_uuid?: unknown;
};

/**
 * Type of MAILCOACH's MAILCOACH_CONFIRM_SUBSCRIBER tool output.
 */
type MAILCOACH_CONFIRM_SUBSCRIBER_OUTPUT = {
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
 * Type of MAILCOACH's MAILCOACH_CREATE_SUBSCRIBER_IMPORT tool input.
 */
type MAILCOACH_CREATE_SUBSCRIBER_IMPORT_INPUT = {
  /**
   * Email List Uuid
   * @description UUID of the target email list.
   */
  email_list_uuid?: string;
  /**
   * Replace Tags
   * @description Replace all existing tags on the subscribers if true.
   */
  replace_tags?: boolean;
  /**
   * Subscribe Unsubscribed
   * @description Resubscribe previously unsubscribed emails if true.
   */
  subscribe_unsubscribed?: boolean;
  /**
   * Subscribers Csv
   * @description CSV string with subscribers' data, one row per subscriber. Must include header.
   */
  subscribers_csv?: string;
  /**
   * Unsubscribe Others
   * @description Unsubscribe list members not present in the CSV if true.
   */
  unsubscribe_others?: boolean;
};

/**
 * Type of MAILCOACH's MAILCOACH_CREATE_SUBSCRIBER_IMPORT tool output.
 */
type MAILCOACH_CREATE_SUBSCRIBER_IMPORT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email List Uuid
       * @description UUID of the related email list.
       */
      email_list_uuid: string;
      /**
       * Error Count
       * @description Number of errors detected during import.
       */
      error_count: number;
      /**
       * Id
       * @description Internal identifier of the import.
       */
      id: number;
      /**
       * Imported Subscribers Count
       * @description Number of subscribers imported when completed, else null.
       * @default null
       */
      imported_subscribers_count: number | null;
      /**
       * Status
       * @description Status of the import (e.g., draft, processing, completed).
       */
      status: string;
      /**
       * Subscribe Unsubscribed
       * @description As requested in the import payload.
       */
      subscribe_unsubscribed: boolean;
      /**
       * Subscribers Csv
       * @description The CSV content stored for the import.
       * @default null
       */
      subscribers_csv: string | null;
      /**
       * Unsubscribe Others
       * @description As requested in the import payload.
       */
      unsubscribe_others: boolean;
      /**
       * Uuid
       * @description Public UUID of the import.
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
 * Type of MAILCOACH's MAILCOACH_DELETE_CAMPAIGN tool input.
 */
type MAILCOACH_DELETE_CAMPAIGN_INPUT = {
  /**
   * Uuid
   * Format: uuid
   * @description The UUID of the campaign to delete.
   */
  uuid?: string;
};

/**
 * Type of MAILCOACH's MAILCOACH_DELETE_CAMPAIGN tool output.
 */
type MAILCOACH_DELETE_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Rate Limit Limit
       * @description Total number of allowed requests in the current rate limit window.
       * @default null
       */
      rate_limit_limit: number | null;
      /**
       * Rate Limit Remaining
       * @description Remaining requests in the current rate limit window.
       * @default null
       */
      rate_limit_remaining: number | null;
      /**
       * Status Code
       * @description HTTP status code returned by the DELETE operation.
       */
      status_code: number;
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
 * Type of MAILCOACH's MAILCOACH_DELETE_EMAIL_LIST tool input.
 */
type MAILCOACH_DELETE_EMAIL_LIST_INPUT = {
  /**
   * Uuid
   * Format: uuid
   * @description The UUID of the email list to delete.
   */
  uuid?: string;
};

/**
 * Type of MAILCOACH's MAILCOACH_DELETE_EMAIL_LIST tool output.
 */
type MAILCOACH_DELETE_EMAIL_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Rate Limit Limit
       * @description Total number of allowed requests in the current rate limit window.
       * @default null
       */
      rate_limit_limit: number | null;
      /**
       * Rate Limit Remaining
       * @description Remaining requests in the current rate limit window.
       * @default null
       */
      rate_limit_remaining: number | null;
      /**
       * Status Code
       * @description HTTP status code returned by the DELETE operation.
       */
      status_code: number;
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
 * Type of MAILCOACH's MAILCOACH_DELETE_SEND tool input.
 */
type MAILCOACH_DELETE_SEND_INPUT = {
  /**
   * Uuid
   * @description UUID of the send to delete
   */
  uuid?: string;
};

/**
 * Type of MAILCOACH's MAILCOACH_DELETE_SEND tool output.
 */
type MAILCOACH_DELETE_SEND_OUTPUT = {
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
 * Type of MAILCOACH's MAILCOACH_DELETE_SUBSCRIBER tool input.
 */
type MAILCOACH_DELETE_SUBSCRIBER_INPUT = {
  /**
   * Uuid
   * Format: uuid
   * @description The UUID of the subscriber to delete.
   */
  uuid?: string;
};

/**
 * Type of MAILCOACH's MAILCOACH_DELETE_SUBSCRIBER tool output.
 */
type MAILCOACH_DELETE_SUBSCRIBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Rate Limit Limit
       * @description Total number of allowed requests in the current rate limit window.
       * @default null
       */
      rate_limit_limit: number | null;
      /**
       * Rate Limit Remaining
       * @description Remaining requests in the current rate limit window.
       * @default null
       */
      rate_limit_remaining: number | null;
      /**
       * Status Code
       * @description HTTP status code returned by the DELETE operation.
       */
      status_code: number;
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
 * Type of MAILCOACH's MAILCOACH_DELETE_SUBSCRIBER_IMPORT tool input.
 */
type MAILCOACH_DELETE_SUBSCRIBER_IMPORT_INPUT = {
  /**
   * Uuid
   * Format: uuid
   * @description The UUID of the subscriber import to delete.
   */
  uuid?: string;
};

/**
 * Type of MAILCOACH's MAILCOACH_DELETE_SUBSCRIBER_IMPORT tool output.
 */
type MAILCOACH_DELETE_SUBSCRIBER_IMPORT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Rate Limit Limit
       * @description Total number of allowed requests in the current rate limit window.
       * @default null
       */
      rate_limit_limit: number | null;
      /**
       * Rate Limit Remaining
       * @description Remaining requests in the current rate limit window.
       * @default null
       */
      rate_limit_remaining: number | null;
      /**
       * Status Code
       * @description HTTP status code returned by the DELETE operation.
       */
      status_code: number;
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
 * Type of MAILCOACH's MAILCOACH_DELETE_SUPPRESSION tool input.
 */
type MAILCOACH_DELETE_SUPPRESSION_INPUT = {
  /**
   * Suppression Uuid
   * @description The UUID or email identifier of the suppression entry to delete.
   */
  suppression_uuid?: string;
};

/**
 * Type of MAILCOACH's MAILCOACH_DELETE_SUPPRESSION tool output.
 */
type MAILCOACH_DELETE_SUPPRESSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Rate Limit Limit
       * @description Total number of allowed requests in the current rate limit window.
       * @default null
       */
      rate_limit_limit: number | null;
      /**
       * Rate Limit Remaining
       * @description Remaining requests in the current rate limit window.
       * @default null
       */
      rate_limit_remaining: number | null;
      /**
       * Status Code
       * @description HTTP status code returned by the DELETE operation.
       */
      status_code: number;
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
 * Type of MAILCOACH's MAILCOACH_DELETE_TAG tool input.
 */
type MAILCOACH_DELETE_TAG_INPUT = {
  /**
   * Email List Uuid
   * Format: uuid
   * @description UUID of the email list containing the tag.
   */
  email_list_uuid?: string;
  /**
   * Uuid
   * Format: uuid
   * @description UUID of the tag to delete.
   */
  uuid?: string;
};

/**
 * Type of MAILCOACH's MAILCOACH_DELETE_TAG tool output.
 */
type MAILCOACH_DELETE_TAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Rate Limit Limit
       * @description Total number of allowed requests in the current rate limit window.
       * @default null
       */
      rate_limit_limit: number | null;
      /**
       * Rate Limit Remaining
       * @description Remaining requests in the current rate limit window.
       * @default null
       */
      rate_limit_remaining: number | null;
      /**
       * Status Code
       * @description HTTP status code returned by the DELETE operation.
       */
      status_code: number;
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
 * Type of MAILCOACH's MAILCOACH_DELETE_TEMPLATE tool input.
 */
type MAILCOACH_DELETE_TEMPLATE_INPUT = {
  /**
   * Uuid
   * Format: uuid
   * @description The UUID of the template to delete.
   */
  uuid?: string;
};

/**
 * Type of MAILCOACH's MAILCOACH_DELETE_TEMPLATE tool output.
 */
type MAILCOACH_DELETE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Rate Limit Limit
       * @description Total number of allowed requests in the current rate limit window.
       * @default null
       */
      rate_limit_limit: number | null;
      /**
       * Rate Limit Remaining
       * @description Remaining requests in the current rate limit window.
       * @default null
       */
      rate_limit_remaining: number | null;
      /**
       * Status Code
       * @description HTTP status code returned by the DELETE operation.
       */
      status_code: number;
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
 * Type of MAILCOACH's MAILCOACH_DELETE_TRANSACTIONAL_MAIL tool input.
 */
type MAILCOACH_DELETE_TRANSACTIONAL_MAIL_INPUT = {
  /**
   * Uuid
   * @description UUID of the transactional mail to delete
   */
  uuid?: string;
};

/**
 * Type of MAILCOACH's MAILCOACH_DELETE_TRANSACTIONAL_MAIL tool output.
 */
type MAILCOACH_DELETE_TRANSACTIONAL_MAIL_OUTPUT = {
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
 * Type of MAILCOACH's MAILCOACH_GET_ALL_CAMPAIGNS tool input.
 */
type MAILCOACH_GET_ALL_CAMPAIGNS_INPUT = {
  /**
   * Filter[Content Item.Template.Uuid]
   * @description Filter by associated template UUID.
   * @default null
   */
  "filter[contentItem.template.uuid]": string | null;
  /**
   * Filter[Email List.Uuid]
   * @description Filter by email list UUID.
   * @default null
   */
  "filter[emailList.uuid]": string | null;
  /**
   * Filter[Email List Id]
   * @description Filter by email list ID.
   * @default null
   */
  "filter[email_list_id]": string | null;
  /**
   * Filter[Search]
   * @description Search term to find campaigns by name (e.g., 'blackfriday').
   * @default null
   */
  "filter[search]": string | null;
  /**
   * Filter[Status]
   * @description Filter campaigns by status.
   * @default null
   * @enum {string|null}
   */
  "filter[status]": "sent" | "scheduled" | "draft" | null;
  /**
   * Page
   * @description Page number for paginated results.
   * @default null
   */
  page: number | null;
  /**
   * Sort
   * @description Sort field; prefix with '-' for descending. Allowed: name, unique_open_count, unique_click_count, unsubscribe_rate, sent_to_number_of_subscribers, sent.
   * @default null
   * @enum {string|null}
   */
  sort: "name" | "unique_open_count" | "unique_click_count" | "unsubscribe_rate" | "sent_to_number_of_subscribers" | "sent" | null;
};

/**
 * Type of MAILCOACH's MAILCOACH_GET_ALL_CAMPAIGNS tool output.
 */
type MAILCOACH_GET_ALL_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description List of campaign objects
   */
  data?: {
      /**
       * Bounce Count
       * @description Total number of bounces
       */
      bounce_count: string;
      /**
       * Bounce Rate
       * @description Bounce rate percentage
       */
      bounce_rate: number;
      /**
       * Click Count
       * @description Total number of clicks
       */
      click_count: string;
      /**
       * Click Rate
       * @description Click rate percentage
       */
      click_rate: number;
      /**
       * Created At
       * @description Creation timestamp (ISO 8601)
       */
      created_at: string;
      /**
       * Email Html
       * @description Email-rendered HTML content
       * @default null
       */
      email_html: string | null;
      /**
       * Email List Uuid
       * @description Related email list UUID
       */
      email_list_uuid: string;
      /**
       * From Email
       * @description Sender email address
       */
      from_email: string;
      /**
       * From Name
       * @description Sender name
       */
      from_name: string;
      /**
       * Html
       * @description Raw HTML content of the campaign
       * @default null
       */
      html: string | null;
      /**
       * Last Modified At
       * @description Timestamp when the campaign was last modified (ISO 8601)
       */
      last_modified_at: string;
      /**
       * Mailable Class
       * @description Mailable class name used
       * @default null
       */
      mailable_class: string | null;
      /**
       * Name
       * @description Campaign name
       * @default null
       */
      name: string | null;
      /**
       * Open Count
       * @description Total number of opens
       */
      open_count: string;
      /**
       * Open Rate
       * @description Open rate percentage
       */
      open_rate: number;
      /**
       * Scheduled At
       * @description Scheduled send time (ISO 8601)
       * @default null
       */
      scheduled_at: string | null;
      /**
       * Segment Class
       * @description Segment class used for the campaign
       * @default null
       */
      segment_class: string | null;
      /**
       * Segment Description
       * @description Description of the segment used
       * @default null
       */
      segment_description: string | null;
      /**
       * Sent At
       * @description Timestamp when campaign was sent (ISO 8601)
       * @default null
       */
      sent_at: string | null;
      /**
       * Sent To Number Of Subscribers
       * @description Number of subscribers to whom the campaign was sent
       */
      sent_to_number_of_subscribers: string;
      /**
       * Statistics Calculated At
       * @description Timestamp when statistics were calculated (ISO 8601)
       * @default null
       */
      statistics_calculated_at: string | null;
      /**
       * Status
       * @description Current campaign status
       */
      status: string;
      /**
       * Structured Html
       * @description Structured HTML content if present
       * @default null
       */
      structured_html: string | null;
      /**
       * Summary Mail Sent At
       * @description Timestamp when summary mail was sent (ISO 8601)
       * @default null
       */
      summary_mail_sent_at: string | null;
      /**
       * Unique Click Count
       * @description Total number of unique clicks
       */
      unique_click_count: string;
      /**
       * Unique Open Count
       * @description Total number of unique opens
       */
      unique_open_count: string;
      /**
       * Unsubscribe Count
       * @description Total number of unsubscribes
       */
      unsubscribe_count: string;
      /**
       * Unsubscribe Rate
       * @description Unsubscribe rate percentage
       */
      unsubscribe_rate: number;
      /**
       * Updated At
       * @description Last update timestamp (ISO 8601)
       */
      updated_at: string;
      /**
       * Uuid
       * @description Campaign UUID
       */
      uuid: string;
      /**
       * Webview Html
       * @description Webview HTML content
       * @default null
       */
      webview_html: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination links
   */
  links?: {
      /**
       * First
       * @description URL of the first page of results
       */
      first: string;
      /**
       * Last
       * @description URL of the last page of results
       */
      last: string;
      /**
       * Next
       * @description URL of the next page of results
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page of results
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * From
       * @description Index of the first item in this page
       * @default null
       */
      from: number | null;
      /**
       * Last Page
       * @description Last page number
       */
      last_page: number;
      /**
       * Path
       * @description Base API path for pagination
       */
      path: string;
      /**
       * Per Page
       * @description Number of items returned per page
       */
      per_page: number;
      /**
       * To
       * @description Index of the last item in this page
       * @default null
       */
      to: number | null;
      /**
       * Total
       * @description Total number of items across all pages
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
 * Type of MAILCOACH's MAILCOACH_GET_ALL_SENT_ITEMS tool input.
 */
type MAILCOACH_GET_ALL_SENT_ITEMS_INPUT = {
  /**
   * Automation Mail Uuid
   * @description Filter by automation mail UUID
   * @default null
   */
  automation_mail_uuid: string | null;
  /**
   * Campaign Uuid
   * @description Filter by campaign UUID
   * @default null
   */
  campaign_uuid: string | null;
  /**
   * Page
   * @description Page number for pagination (must be ≥1)
   * @default null
   */
  page: number | null;
  /**
   * Sort
   * @description Sort by sent_at: '-sent_at' for descending (default), 'sent_at' for ascending
   * @default null
   * @enum {string|null}
   */
  sort: "-sent_at" | "sent_at" | null;
  /**
   * Subscriber Uuid
   * @description Filter by subscriber UUID
   * @default null
   */
  subscriber_uuid: string | null;
  /**
   * Transactional Mail Log Item Uuid
   * @description Filter by transactional mail log item UUID
   * @default null
   */
  transactional_mail_log_item_uuid: string | null;
};

/**
 * Type of MAILCOACH's MAILCOACH_GET_ALL_SENT_ITEMS tool output.
 */
type MAILCOACH_GET_ALL_SENT_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Array of sent items
   */
  data?: {
      /**
       * Automation Mail Uuid
       * @description UUID of associated automation mail
       * @default null
       */
      automation_mail_uuid: string | null;
      /**
       * Campaign Uuid
       * @description UUID of associated campaign
       * @default null
       */
      campaign_uuid: string | null;
      /**
       * Click Count
       * @description Total click count
       * @default null
       */
      click_count: number | null;
      /**
       * Created At
       * @description ISO 8601 datetime when created
       */
      created_at: string;
      /**
       * Failed At
       * @description ISO 8601 datetime when failed
       * @default null
       */
      failed_at: string | null;
      /**
       * Failure Reason
       * @description Reason for delivery failure
       * @default null
       */
      failure_reason: string | null;
      /**
       * First Clicked At
       * @description ISO 8601 datetime of first click
       * @default null
       */
      first_clicked_at: string | null;
      /**
       * First Opened At
       * @description ISO 8601 datetime of first open
       * @default null
       */
      first_opened_at: string | null;
      /**
       * Last Clicked At
       * @description ISO 8601 datetime of last click
       * @default null
       */
      last_clicked_at: string | null;
      /**
       * Last Opened At
       * @description ISO 8601 datetime of last open
       * @default null
       */
      last_opened_at: string | null;
      /**
       * Open Count
       * @description Total open count
       * @default null
       */
      open_count: number | null;
      /**
       * Sent At
       * @description ISO 8601 datetime when sent
       */
      sent_at: string;
      /**
       * Subscriber Uuid
       * @description UUID of the subscriber
       */
      subscriber_uuid: string;
      /**
       * Transactional Mail Log Item Uuid
       * @description UUID of associated transactional mail log item
       * @default null
       */
      transactional_mail_log_item_uuid: string | null;
      /**
       * Transport Message Id
       * @description Message transport ID
       * @default null
       */
      transport_message_id: string | null;
      /**
       * Updated At
       * @description ISO 8601 datetime when updated
       */
      updated_at: string;
      /**
       * Uuid
       * @description UUID of the send item
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
   * Links
   * @description Pagination links
   */
  links?: {
      /**
       * First
       * @description URL of first page
       * @default null
       */
      first: string | null;
      /**
       * Last
       * @description URL of last page
       * @default null
       */
      last: string | null;
      /**
       * Next
       * @description URL of next page
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of previous page
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * From Index
       * @description First item index on current page
       * @default null
       */
      from_index: number | null;
      /**
       * Last Page
       * @description Last page number
       */
      last_page: number;
      /**
       * Links
       * @description Pagination links array
       */
      links: {
          /**
           * Active
           * @description Whether this link is active page
           */
          active: boolean;
          /**
           * Label
           * @description Label for pagination link
           */
          label: string;
          /**
           * Url
           * @description Pagination link URL
           * @default null
           */
          url: string | null;
      }[];
      /**
       * Path
       * @description Base path for pagination links
       */
      path: string;
      /**
       * Per Page
       * @description Items per page
       */
      per_page: number;
      /**
       * To
       * @description Last item index on current page
       * @default null
       */
      to: number | null;
      /**
       * Total
       * @description Total number of items
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
 * Type of MAILCOACH's MAILCOACH_GET_ALL_SUBSCRIBER_IMPORTS tool input.
 */
type MAILCOACH_GET_ALL_SUBSCRIBER_IMPORTS_INPUT = {
  /**
   * Page
   * @description Page number for paginated results (must be ≥ 1)
   * @default null
   */
  page: number | null;
};

/**
 * Type of MAILCOACH's MAILCOACH_GET_ALL_SUBSCRIBER_IMPORTS tool output.
 */
type MAILCOACH_GET_ALL_SUBSCRIBER_IMPORTS_OUTPUT = {
  /**
   * Data
   * @description List of subscriber imports
   */
  data?: {
      /**
       * Email List Uuid
       * @description UUID of the associated email list
       */
      email_list_uuid: string;
      /**
       * Error Count
       * @description Total errors encountered during import
       */
      error_count: number;
      /**
       * Imported Subscribers Count
       * @description Number of subscribers imported (nullable in draft state)
       * @default null
       */
      imported_subscribers_count: number | null;
      /**
       * Status
       * @description Current status (e.g., 'completed', 'draft')
       */
      status: string;
      /**
       * Subscribe Unsubscribed
       * @description Whether previously unsubscribed addresses are re-subscribed
       */
      subscribe_unsubscribed: boolean;
      /**
       * Subscribers Csv
       * @description Raw CSV content for this import (nullable if not stored)
       * @default null
       */
      subscribers_csv: string | null;
      /**
       * Unsubscribe Others
       * @description Whether non-imported subscribers should be unsubscribed
       */
      unsubscribe_others: boolean;
      /**
       * Uuid
       * @description Unique identifier of the import
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
   * Links
   * @description Pagination links
   */
  links?: {
      /**
       * First
       * @description URL of the first page in the result set
       */
      first: string;
      /**
       * Last
       * @description URL of the last page in the result set
       */
      last: string;
      /**
       * Next
       * @description URL of the next page, if any
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page, if any
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * From
       * @description 1-based index of first item on this page
       * @default null
       */
      from: number | null;
      /**
       * Last Page
       * @description Total number of pages
       */
      last_page: number;
      /**
       * Path
       * @description Base request path for pagination links
       */
      path: string;
      /**
       * Per Page
       * @description Number of items per page
       */
      per_page: number;
      /**
       * To
       * @description 1-based index of last item on this page
       * @default null
       */
      to: number | null;
      /**
       * Total
       * @description Total number of items across all pages
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
 * Type of MAILCOACH's MAILCOACH_GET_ALL_SUPPRESSIONS tool input.
 */
type MAILCOACH_GET_ALL_SUPPRESSIONS_INPUT = {
  /**
   * Filter[Reason]
   * @description Filter suppressions by reason
   * @default null
   * @enum {string|null}
   */
  "filter[reason]": "hard_bounce" | "spam_complaint" | "manual" | null;
  /**
   * Filter[Search]
   * @description Search by full or partial email address
   * @default null
   */
  "filter[search]": string | null;
  /**
   * Page
   * @description Page number for paginated results
   * @default null
   */
  page: number | null;
  /**
   * Sort
   * @description Sort by created_at; prefix with '-' for descending
   * @default null
   */
  sort: string | null;
};

/**
 * Type of MAILCOACH's MAILCOACH_GET_ALL_SUPPRESSIONS tool output.
 */
type MAILCOACH_GET_ALL_SUPPRESSIONS_OUTPUT = {
  /**
   * Data
   * @description List of suppression entries
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp (ISO 8601)
       */
      created_at: string;
      /**
       * Email
       * @description Suppressed email address
       */
      email: string;
      /**
       * Reason
       * @description Reason for suppression
       * @enum {string}
       */
      reason: "hard_bounce" | "spam_complaint" | "manual";
      /**
       * Updated At
       * @description Last update timestamp (ISO 8601)
       */
      updated_at: string;
      /**
       * Uuid
       * @description Suppression UUID
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
   * Links
   * @description Pagination links
   */
  links?: {
      /**
       * First
       * @description URL of the first page of results
       */
      first: string;
      /**
       * Last
       * @description URL of the last page of results
       */
      last: string;
      /**
       * Next
       * @description URL of the next page of results
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page of results
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * From
       * @description Index of the first item on this page
       * @default null
       */
      from_: number | null;
      /**
       * Last Page
       * @description Total number of pages
       */
      last_page: number;
      /**
       * Path
       * @description Base URL for pagination links
       */
      path: string;
      /**
       * Per Page
       * @description Number of items per page
       */
      per_page: number;
      /**
       * To
       * @description Index of the last item on this page
       * @default null
       */
      to: number | null;
      /**
       * Total
       * @description Total number of items
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
 * Type of MAILCOACH's MAILCOACH_GET_ALL_TAGS tool input.
 */
type MAILCOACH_GET_ALL_TAGS_INPUT = {
  /**
   * Email List Uuid
   * @description UUID of the email list to fetch tags for
   */
  email_list_uuid?: string;
  /**
   * Page
   * @description Page number for paginated results
   * @default null
   */
  page: number | null;
};

/**
 * Type of MAILCOACH's MAILCOACH_GET_ALL_TAGS tool output.
 */
type MAILCOACH_GET_ALL_TAGS_OUTPUT = {
  /**
   * Data
   * @description List of tag objects
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the tag was created (ISO 8601)
       */
      created_at: string;
      /**
       * Email List Uuid
       * @description UUID of the email list this tag belongs to
       */
      email_list_uuid: string;
      /**
       * Name
       * @description Name of the tag
       */
      name: string;
      /**
       * Updated At
       * @description Timestamp when the tag was last updated (ISO 8601)
       */
      updated_at: string;
      /**
       * Uuid
       * @description Unique identifier for the tag
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
   * Links
   * @description Pagination links
   */
  links?: {
      /**
       * First
       * @description URL of the first page of results
       */
      first: string;
      /**
       * Last
       * @description URL of the last page of results
       */
      last: string;
      /**
       * Next
       * @description URL of the next page of results
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page of results
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * From
       * @description Index of the first item on this page
       * @default null
       */
      from_: number | null;
      /**
       * Last Page
       * @description Total number of pages
       */
      last_page: number;
      /**
       * Path
       * @description Base URL for pagination links
       */
      path: string;
      /**
       * Per Page
       * @description Number of items per page
       */
      per_page: number;
      /**
       * To
       * @description Index of the last item on this page
       * @default null
       */
      to: number | null;
      /**
       * Total
       * @description Total number of items
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
 * Type of MAILCOACH's MAILCOACH_GET_ALL_TEMPLATES tool input.
 */
type MAILCOACH_GET_ALL_TEMPLATES_INPUT = {
  /**
   * Filter[Search]
   * @description Search term to filter templates by name (e.g., 'welcome').
   * @default null
   */
  "filter[search]": string | null;
  /**
   * Page
   * @description Page number for paginated results (>= 1).
   * @default null
   */
  page: number | null;
  /**
   * Sort
   * @description Sort field; prefix with '-' for descending. Allowed: 'name', 'updated_at'.
   * @default null
   * @enum {string|null}
   */
  sort: "name" | "updated_at" | "-name" | "-updated_at" | null;
};

/**
 * Type of MAILCOACH's MAILCOACH_GET_ALL_TEMPLATES tool output.
 */
type MAILCOACH_GET_ALL_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description List of template objects
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp (ISO 8601)
       */
      created_at: string;
      /**
       * Html
       * @description HTML content of the template
       */
      html: string;
      /**
       * Name
       * @description Template name
       */
      name: string;
      /**
       * Structured Html
       * @description Structured HTML content (nullable)
       * @default null
       */
      structured_html: string | null;
      /**
       * Updated At
       * @description Last update timestamp (ISO 8601)
       */
      updated_at: string;
      /**
       * Uuid
       * @description Template UUID
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
   * Links
   * @description Pagination links
   */
  links?: {
      /**
       * First
       * @description URL of the first page of results
       */
      first: string;
      /**
       * Last
       * @description URL of the last page of results
       */
      last: string;
      /**
       * Next
       * @description URL of the next page of results
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page of results
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * From
       * @description Index of the first item in this page
       * @default null
       */
      from: number | null;
      /**
       * Last Page
       * @description Last page number
       */
      last_page: number;
      /**
       * Path
       * @description Base API path for pagination
       */
      path: string;
      /**
       * Per Page
       * @description Number of items returned per page
       */
      per_page: number;
      /**
       * To
       * @description Index of the last item in this page
       * @default null
       */
      to: number | null;
      /**
       * Total
       * @description Total number of items across all pages
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
 * Type of MAILCOACH's MAILCOACH_GET_ALL_TRANSACTIONAL_EMAIL_TEMPLATES tool input.
 */
type MAILCOACH_GET_ALL_TRANSACTIONAL_EMAIL_TEMPLATES_INPUT = {
  /**
   * Filter[Name]
   * @description Filter templates by name (e.g., 'welcome_email').
   * @default null
   */
  "filter[name]": string | null;
  /**
   * Page
   * @description Page number for paginated results.
   * @default null
   */
  page: number | null;
  /**
   * Sort
   * @description Sort by created_at; prefix with '-' for descending (e.g., '-created_at').
   * @default null
   * @enum {string|null}
   */
  sort: "created_at" | "-created_at" | null;
};

/**
 * Type of MAILCOACH's MAILCOACH_GET_ALL_TRANSACTIONAL_EMAIL_TEMPLATES tool output.
 */
type MAILCOACH_GET_ALL_TRANSACTIONAL_EMAIL_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description List of transactional email templates
   */
  data?: {
      /**
       * Bcc
       * @description Default 'bcc' address, if any
       * @default null
       */
      bcc: string | null;
      /**
       * Cc
       * @description Default 'cc' address, if any
       * @default null
       */
      cc: string | null;
      /**
       * Created At
       * @description ISO 8601 timestamp when the template was created
       */
      created_at: string;
      /**
       * Html
       * @description Default HTML content of the template
       */
      html: string;
      /**
       * Name
       * @description Template name
       */
      name: string;
      /**
       * Store Mail
       * @description Whether sending this template stores a log entry
       */
      store_mail: boolean;
      /**
       * Subject
       * @description Default email subject
       */
      subject: string;
      /**
       * To
       * @description Default 'to' address, if any
       * @default null
       */
      to: string | null;
      /**
       * Uuid
       * @description Template UUID
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
   * Links
   * @description Pagination links
   */
  links?: {
      /**
       * First
       * @description URL of the first page of results
       */
      first: string;
      /**
       * Last
       * @description URL of the last page of results
       */
      last: string;
      /**
       * Next
       * @description URL of the next page of results
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page of results
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * From
       * @description Index of the first item on this page
       * @default null
       */
      from: number | null;
      /**
       * Last Page
       * @description Last page number
       */
      last_page: number;
      /**
       * Path
       * @description Base API path for pagination
       */
      path: string;
      /**
       * Per Page
       * @description Number of items returned per page
       */
      per_page: number;
      /**
       * To
       * @description Index of the last item on this page
       * @default null
       */
      to: number | null;
      /**
       * Total
       * @description Total number of items across all pages
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
 * Type of MAILCOACH's MAILCOACH_GET_EMAIL_LISTS tool input.
 */
type MAILCOACH_GET_EMAIL_LISTS_INPUT = {
  /**
   * Filter[Name]
   * @description Exact match on list name
   * @default null
   */
  "filter[name]": string | null;
  /**
   * Filter[Search]
   * @description Fuzzy search by list name
   * @default null
   */
  "filter[search]": string | null;
  /**
   * Page
   * @description Page number for paginated results, must be >= 1
   * @default null
   */
  page: number | null;
  /**
   * Sort
   * @description Sort by one of 'name', 'created_at', or 'active_subscribers_count'; prefix with '-' for descending
   * @default null
   * @enum {string|null}
   */
  sort: "name" | "-name" | "created_at" | "-created_at" | "active_subscribers_count" | "-active_subscribers_count" | null;
};

/**
 * Type of MAILCOACH's MAILCOACH_GET_EMAIL_LISTS tool output.
 */
type MAILCOACH_GET_EMAIL_LISTS_OUTPUT = {
  /**
   * Data
   * @description List of email list objects
   */
  data?: {
      /**
       * Active Subscribers Count
       * @description Number of active subscribers
       */
      active_subscribers_count: number;
      /**
       * Allow Form Subscriptions
       * @description Whether form subscriptions are allowed
       */
      allow_form_subscriptions: boolean;
      /**
       * Automation Mailer
       * @description Automation mailer class
       */
      automation_mailer: string;
      /**
       * Campaign Mailer
       * @description Campaign mailer class
       */
      campaign_mailer: string;
      /**
       * Campaigns Feed Enabled
       * @description Whether RSS feed for campaigns is enabled
       */
      campaigns_feed_enabled: boolean;
      /**
       * Confirmation Mail Content
       * @description Content for confirmation mail
       * @default null
       */
      confirmation_mail_content: string | null;
      /**
       * Confirmation Mail Subject
       * @description Subject for confirmation mail
       * @default null
       */
      confirmation_mail_subject: string | null;
      /**
       * Confirmation Mailable Class
       * @description Mailable class for confirmation mails
       * @default null
       */
      confirmation_mailable_class: string | null;
      /**
       * Created At
       * @description Creation timestamp (ISO 8601)
       */
      created_at: string;
      /**
       * Default From Email
       * Format: email
       * @description Default sender email address
       */
      default_from_email: string;
      /**
       * Default From Name
       * @description Default sender name
       * @default null
       */
      default_from_name: string | null;
      /**
       * Email List Summary Sent At
       * @description Timestamp when email list summary was sent
       * @default null
       */
      email_list_summary_sent_at: string | null;
      /**
       * Name
       * @description Email list name
       */
      name: string;
      /**
       * Redirect After Already Subscribed
       * @description URL redirect when already subscribed
       * @default null
       */
      redirect_after_already_subscribed: string | null;
      /**
       * Redirect After Subscribed
       * @description URL redirect after subscription
       * @default null
       */
      redirect_after_subscribed: string | null;
      /**
       * Redirect After Subscription Pending
       * @description URL redirect after subscription pending
       * @default null
       */
      redirect_after_subscription_pending: string | null;
      /**
       * Redirect After Unsubscribed
       * @description URL redirect after unsubscribed
       * @default null
       */
      redirect_after_unsubscribed: string | null;
      /**
       * Report Campaign Sent
       * @description Whether to report after campaign sent
       */
      report_campaign_sent: boolean;
      /**
       * Report Campaign Summary
       * @description Whether to include campaign summary in reports
       */
      report_campaign_summary: boolean;
      /**
       * Report Email List Summary
       * @description Whether to include email list summary in reports
       */
      report_email_list_summary: boolean;
      /**
       * Report Recipients
       * @description Report recipient emails
       * @default null
       */
      report_recipients: string | null;
      /**
       * Requires Confirmation
       * @description Whether confirmation is required
       */
      requires_confirmation: boolean;
      /**
       * Transactional Mailer
       * @description Transactional mailer class
       */
      transactional_mailer: string;
      /**
       * Updated At
       * @description Last update timestamp (ISO 8601)
       */
      updated_at: string;
      /**
       * Uuid
       * @description Email list UUID
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
   * Links
   * @description Pagination links
   */
  links?: {
      /**
       * First
       * @description URL of the first page of results
       */
      first: string;
      /**
       * Last
       * @description URL of the last page of results
       */
      last: string;
      /**
       * Next
       * @description URL of the next page of results
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page of results
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * From
       * @description Index of the first item in this page
       * @default null
       */
      from: number | null;
      /**
       * Last Page
       * @description Last page number
       */
      last_page: number;
      /**
       * Path
       * @description Base API path for pagination
       */
      path: string;
      /**
       * Per Page
       * @description Number of items returned per page
       */
      per_page: number;
      /**
       * To
       * @description Index of the last item in this page
       * @default null
       */
      to: number | null;
      /**
       * Total
       * @description Total number of items across all pages
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
 * Type of MAILCOACH's MAILCOACH_GET_SPECIFIC_CAMPAIGN tool input.
 */
type MAILCOACH_GET_SPECIFIC_CAMPAIGN_INPUT = {
  /**
   * Uuid
   * @description UUID of the campaign to retrieve
   */
  uuid?: string;
};

/**
 * Type of MAILCOACH's MAILCOACH_GET_SPECIFIC_CAMPAIGN tool output.
 */
type MAILCOACH_GET_SPECIFIC_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bounce Count
       * @description Total bounce count
       */
      bounce_count: string;
      /**
       * Bounce Rate
       * @description Bounce rate percentage
       */
      bounce_rate: string;
      /**
       * Click Count
       * @description Total click count
       */
      click_count: string;
      /**
       * Click Rate
       * @description Click rate percentage
       */
      click_rate: number;
      /**
       * Created At
       * @description Datetime when campaign was created (ISO 8601)
       */
      created_at: string;
      /**
       * Email Html
       * @description Rendered email HTML content
       * @default null
       */
      email_html: string | null;
      /**
       * Email List Uuid
       * @description Related email list UUID
       */
      email_list_uuid: string;
      /**
       * From Email
       * @description Sender email address
       */
      from_email: string;
      /**
       * From Name
       * @description Sender name
       */
      from_name: string;
      /**
       * Html
       * @description Raw HTML content of the campaign
       * @default null
       */
      html: string | null;
      /**
       * Last Modified At
       * @description Datetime when last modified (ISO 8601)
       */
      last_modified_at: string;
      /**
       * Mailable Class
       * @description Mailable class name if used
       * @default null
       */
      mailable_class: string | null;
      /**
       * Name
       * @description Campaign name
       * @default null
       */
      name: string | null;
      /**
       * Open Count
       * @description Total open count
       */
      open_count: string;
      /**
       * Open Rate
       * @description Open rate percentage
       */
      open_rate: number;
      /**
       * Scheduled At
       * @description Scheduled send datetime (ISO 8601)
       * @default null
       */
      scheduled_at: string | null;
      /**
       * Segment Class
       * @description Segment class if used
       * @default null
       */
      segment_class: string | null;
      /**
       * Segment Description
       * @description Segment description if used
       * @default null
       */
      segment_description: string | null;
      /**
       * Sent At
       * @description Datetime when campaign was sent (ISO 8601)
       * @default null
       */
      sent_at: string | null;
      /**
       * Sent To Number Of Subscribers
       * @description Number of subscribers the campaign was sent to
       */
      sent_to_number_of_subscribers: string;
      /**
       * Statistics Calculated At
       * @description Datetime when statistics were calculated (ISO 8601)
       * @default null
       */
      statistics_calculated_at: string | null;
      /**
       * Status
       * @description Campaign status
       */
      status: string;
      /**
       * Structured Html
       * @description Structured HTML content if present
       * @default null
       */
      structured_html: string | null;
      /**
       * Summary Mail Sent At
       * @description Datetime when summary mail was sent (ISO 8601)
       * @default null
       */
      summary_mail_sent_at: string | null;
      /**
       * Unique Click Count
       * @description Unique click count
       */
      unique_click_count: string;
      /**
       * Unique Open Count
       * @description Unique open count
       */
      unique_open_count: string;
      /**
       * Unsubscribe Count
       * @description Total unsubscribe count
       */
      unsubscribe_count: string;
      /**
       * Unsubscribe Rate
       * @description Unsubscribe rate percentage
       */
      unsubscribe_rate: string;
      /**
       * Updated At
       * @description Datetime when campaign was last updated (ISO 8601)
       */
      updated_at: string;
      /**
       * Uuid
       * @description Campaign UUID
       */
      uuid: string;
      /**
       * Webview Html
       * @description Webview HTML content
       * @default null
       */
      webview_html: string | null;
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
 * Type of MAILCOACH's MAILCOACH_GET_SPECIFIC_EMAIL_LIST tool input.
 */
type MAILCOACH_GET_SPECIFIC_EMAIL_LIST_INPUT = {
  /**
   * Uuid
   * Format: uuid
   * @description The UUID of the email list to retrieve.
   */
  uuid?: string;
};

/**
 * Type of MAILCOACH's MAILCOACH_GET_SPECIFIC_EMAIL_LIST tool output.
 */
type MAILCOACH_GET_SPECIFIC_EMAIL_LIST_OUTPUT = {
  /**
   * Data
   * @description Email list resource
   */
  data?: {
      /**
       * Active Subscribers Count
       * @description Number of active subscribers
       */
      active_subscribers_count: number;
      /**
       * Allow Form Subscriptions
       * @description Indicates if form subscriptions are allowed
       */
      allow_form_subscriptions: boolean;
      /**
       * Automation Mailer
       * @description Mailer class for automations
       */
      automation_mailer: string;
      /**
       * Campaign Mailer
       * @description Mailer class for campaigns
       */
      campaign_mailer: string;
      /**
       * Campaigns Feed Enabled
       * @description Indicates if campaigns feed is enabled
       */
      campaigns_feed_enabled: boolean;
      /**
       * Confirmation Mail Content
       * @description Content of confirmation email
       * @default null
       */
      confirmation_mail_content: string | null;
      /**
       * Confirmation Mail Subject
       * @description Subject line of confirmation email
       * @default null
       */
      confirmation_mail_subject: string | null;
      /**
       * Confirmation Mailable Class
       * @description Mailable class used for confirmation
       * @default null
       */
      confirmation_mailable_class: string | null;
      /**
       * Created At
       * @description Timestamp when the email list was created (ISO 8601)
       */
      created_at: string;
      /**
       * Default From Email
       * @description Default from email address
       */
      default_from_email: string;
      /**
       * Default From Name
       * @description Default from name
       */
      default_from_name: string;
      /**
       * Email List Summary Sent At
       * @description Timestamp when email list summary was sent
       * @default null
       */
      email_list_summary_sent_at: string | null;
      /**
       * Name
       * @description Name of the email list
       */
      name: string;
      /**
       * Redirect After Already Subscribed
       * @description URL to redirect if already subscribed
       * @default null
       */
      redirect_after_already_subscribed: string | null;
      /**
       * Redirect After Subscribed
       * @description URL to redirect after successful subscription
       * @default null
       */
      redirect_after_subscribed: string | null;
      /**
       * Redirect After Subscription Pending
       * @description URL to redirect after subscription pending
       * @default null
       */
      redirect_after_subscription_pending: string | null;
      /**
       * Redirect After Unsubscribed
       * @description URL to redirect after unsubscription
       * @default null
       */
      redirect_after_unsubscribed: string | null;
      /**
       * Report Campaign Sent
       * @description Whether campaign sent reports are enabled
       */
      report_campaign_sent: boolean;
      /**
       * Report Campaign Summary
       * @description Whether campaign summary reports are enabled
       */
      report_campaign_summary: boolean;
      /**
       * Report Email List Summary
       * @description Whether email list summary reports are enabled
       */
      report_email_list_summary: boolean;
      /**
       * Report Recipients
       * @description Comma separated report recipients
       * @default null
       */
      report_recipients: string | null;
      /**
       * Requires Confirmation
       * @description Indicates if subscription requires confirmation
       */
      requires_confirmation: boolean;
      /**
       * Transactional Mailer
       * @description Mailer class for transactions
       */
      transactional_mailer: string;
      /**
       * Updated At
       * @description Timestamp when the email list was last updated (ISO 8601)
       */
      updated_at: string;
      /**
       * Uuid
       * @description Email list UUID
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
 * Type of MAILCOACH's MAILCOACH_GET_SPECIFIC_SUBSCRIBER tool input.
 */
type MAILCOACH_GET_SPECIFIC_SUBSCRIBER_INPUT = {
  /**
   * Uuid
   * Format: uuid
   * @description The UUID of the subscriber to retrieve.
   */
  uuid?: string;
};

/**
 * Type of MAILCOACH's MAILCOACH_GET_SPECIFIC_SUBSCRIBER tool output.
 */
type MAILCOACH_GET_SPECIFIC_SUBSCRIBER_OUTPUT = {
  /**
   * Data
   * @description Subscriber resource.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the record was created.
       */
      created_at: string;
      /**
       * Email
       * @description Subscriber's email address.
       */
      email: string;
      /**
       * Email List Uuid
       * @description UUID of the email list this subscriber belongs to.
       */
      email_list_uuid: string;
      /**
       * Extra Attributes
       * @description Additional attributes (key/value pairs) for the subscriber.
       */
      extra_attributes?: {
          [key: string]: string;
      };
      /**
       * First Name
       * @description Subscriber's first name, if available.
       * @default null
       */
      first_name: string | null;
      /**
       * Last Name
       * @description Subscriber's last name, if available.
       * @default null
       */
      last_name: string | null;
      /**
       * Subscribed At
       * @description ISO 8601 timestamp when subscribed.
       */
      subscribed_at: string;
      /**
       * Tags
       * @description List of tags associated with the subscriber.
       */
      tags?: string[];
      /**
       * Unsubscribed At
       * @description ISO 8601 timestamp when unsubscribed, or null if still subscribed.
       * @default null
       */
      unsubscribed_at: string | null;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the record was last updated.
       */
      updated_at: string;
      /**
       * Uuid
       * @description Subscriber UUID.
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
 * Type of MAILCOACH's MAILCOACH_GET_SPECIFIC_SUPPRESSION tool input.
 */
type MAILCOACH_GET_SPECIFIC_SUPPRESSION_INPUT = {
  /**
   * Suppression Uuid
   * @description The UUID or email identifier of the suppression entry to retrieve.
   */
  suppression_uuid?: string;
};

/**
 * Type of MAILCOACH's MAILCOACH_GET_SPECIFIC_SUPPRESSION tool output.
 */
type MAILCOACH_GET_SPECIFIC_SUPPRESSION_OUTPUT = {
  /**
   * Data
   * @description Suppression resource
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the suppression was created (ISO 8601)
       */
      created_at: string;
      /**
       * Email
       * @description Suppressed email address
       */
      email: string;
      /**
       * Reason
       * @description Suppression reason (e.g., hard_bounce, spam_complaint, manual)
       */
      reason: string;
      /**
       * Updated At
       * @description Timestamp when the suppression was last updated (ISO 8601)
       */
      updated_at: string;
      /**
       * Uuid
       * @description Suppression UUID
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
 * Type of MAILCOACH's MAILCOACH_GET_SPECIFIC_TAG tool input.
 */
type MAILCOACH_GET_SPECIFIC_TAG_INPUT = {
  /**
   * Email List Uuid
   * Format: uuid
   * @description UUID of the email list owning the tag.
   */
  email_list_uuid?: string;
  /**
   * Uuid
   * Format: uuid
   * @description UUID of the tag to retrieve.
   */
  uuid?: string;
};

/**
 * Type of MAILCOACH's MAILCOACH_GET_SPECIFIC_TAG tool output.
 */
type MAILCOACH_GET_SPECIFIC_TAG_OUTPUT = {
  /**
   * Data
   * @description The requested tag resource
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the tag was created (ISO 8601)
       */
      created_at: string;
      /**
       * Email List
       * @description Parent email list object
       */
      email_list: {
          /**
           * Name
           * @description Name of the parent email list
           */
          name: string;
          /**
           * Uuid
           * @description UUID of the parent email list
           */
          uuid: string;
      };
      /**
       * Email List Uuid
       * @description UUID of the parent email list
       */
      email_list_uuid: string;
      /**
       * Name
       * @description Tag name
       */
      name: string;
      /**
       * Updated At
       * @description Timestamp when the tag was last updated (ISO 8601)
       */
      updated_at: string;
      /**
       * Uuid
       * @description Tag UUID
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
 * Type of MAILCOACH's MAILCOACH_GET_SPECIFIC_TEMPLATE tool input.
 */
type MAILCOACH_GET_SPECIFIC_TEMPLATE_INPUT = {
  /**
   * Uuid
   * Format: uuid
   * @description The UUID of the template to retrieve.
   */
  uuid?: string;
};

/**
 * Type of MAILCOACH's MAILCOACH_GET_SPECIFIC_TEMPLATE tool output.
 */
type MAILCOACH_GET_SPECIFIC_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Template resource
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp (ISO 8601)
       */
      created_at: string;
      /**
       * Html
       * @description Raw HTML content of the template
       */
      html: string;
      /**
       * Id
       * @description Numeric ID of the template
       */
      id: number;
      /**
       * Name
       * @description Name of the template
       */
      name: string;
      /**
       * Structured Html
       * @description Structured HTML content if present
       * @default null
       */
      structured_html: string | null;
      /**
       * Updated At
       * @description Last update timestamp (ISO 8601)
       */
      updated_at: string;
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
 * Type of MAILCOACH's MAILCOACH_GET_TRANSACTIONAL_MAILS tool input.
 */
type MAILCOACH_GET_TRANSACTIONAL_MAILS_INPUT = {
  /**
   * Filter[Name]
   * @description Filter templates by name (e.g., 'welcome_email').
   * @default null
   */
  "filter[name]": string | null;
  /**
   * Page
   * @description Page number for paginated results (must be >=1).
   * @default null
   */
  page: number | null;
  /**
   * Sort
   * @description Sort by created_at; prefix with '-' for descending.
   * @default null
   * @enum {string|null}
   */
  sort: "created_at" | "-created_at" | null;
};

/**
 * Type of MAILCOACH's MAILCOACH_GET_TRANSACTIONAL_MAILS tool output.
 */
type MAILCOACH_GET_TRANSACTIONAL_MAILS_OUTPUT = {
  /**
   * Data
   * @description List of transactional mail templates
   */
  data?: {
      /**
       * Bcc
       * @description Default 'bcc' address, if any
       * @default null
       */
      bcc: string | null;
      /**
       * Cc
       * @description Default 'cc' address, if any
       * @default null
       */
      cc: string | null;
      /**
       * Created At
       * @description ISO 8601 timestamp when the template was created
       */
      created_at: string;
      /**
       * Html
       * @description Default HTML content of the template
       */
      html: string;
      /**
       * Name
       * @description Template name
       */
      name: string;
      /**
       * Store Mail
       * @description Whether sending this template stores a log entry
       */
      store_mail: boolean;
      /**
       * Subject
       * @description Default email subject
       */
      subject: string;
      /**
       * To
       * @description Default 'to' address, if any
       * @default null
       */
      to: string | null;
      /**
       * Uuid
       * @description Template UUID
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
   * Links
   * @description Pagination links
   */
  links?: {
      /**
       * First
       * @description URL of the first page of results
       */
      first: string;
      /**
       * Last
       * @description URL of the last page of results
       */
      last: string;
      /**
       * Next
       * @description URL of the next page of results
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page of results
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * From
       * @description Index of the first item on this page
       * @default null
       */
      from: number | null;
      /**
       * Last Page
       * @description Last page number
       */
      last_page: number;
      /**
       * Path
       * @description Base API path for pagination
       */
      path: string;
      /**
       * Per Page
       * @description Number of items returned per page
       */
      per_page: number;
      /**
       * To
       * @description Index of the last item on this page
       * @default null
       */
      to: number | null;
      /**
       * Total
       * @description Total number of items across all pages
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
 * Type of MAILCOACH's MAILCOACH_REMOVE_TAGS_FROM_SUBSCRIBER tool input.
 */
type MAILCOACH_REMOVE_TAGS_FROM_SUBSCRIBER_INPUT = {
  /**
   * Subscriber Uuid
   * @description The UUID of the subscriber from whom tags will be removed.
   */
  subscriber_uuid?: string;
  /**
   * Tags
   * @description Non-empty list of tag names to remove from the subscriber.
   */
  tags?: string[];
};

/**
 * Type of MAILCOACH's MAILCOACH_REMOVE_TAGS_FROM_SUBSCRIBER tool output.
 */
type MAILCOACH_REMOVE_TAGS_FROM_SUBSCRIBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Removed Tags
       * @description List of tags that were successfully removed. Returned if API response includes tags.
       * @default null
       */
      removedTags: string[] | null;
      /**
       * Status
       * @description Indicates the tags were removed successfully.
       * @default success
       * @constant
       */
      status: "success";
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
 * Type of MAILCOACH's MAILCOACH_RESEND_CONFIRMATION tool input.
 */
type MAILCOACH_RESEND_CONFIRMATION_INPUT = {
  /**
   * Uuid
   * Format: uuid
   * @description The UUID of the subscriber to resend the confirmation email to.
   */
  uuid?: string;
};

/**
 * Type of MAILCOACH's MAILCOACH_RESEND_CONFIRMATION tool output.
 */
type MAILCOACH_RESEND_CONFIRMATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Rate Limit Limit
       * @description Total number of allowed requests in the current rate limit window.
       * @default null
       */
      rate_limit_limit: number | null;
      /**
       * Rate Limit Remaining
       * @description Remaining requests in the current rate limit window.
       * @default null
       */
      rate_limit_remaining: number | null;
      /**
       * Status Code
       * @description HTTP status code returned by the POST operation.
       */
      status_code: number;
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
 * Type of MAILCOACH's MAILCOACH_START_SUBSCRIBER_IMPORT tool input.
 */
type MAILCOACH_START_SUBSCRIBER_IMPORT_INPUT = {
  /**
   * Uuid
   * Format: uuid
   * @description UUID of the subscriber import to start.
   */
  uuid?: string;
};

/**
 * Type of MAILCOACH's MAILCOACH_START_SUBSCRIBER_IMPORT tool output.
 */
type MAILCOACH_START_SUBSCRIBER_IMPORT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Rate Limit Limit
       * @description Total number of allowed requests in the current rate limit window.
       * @default null
       */
      rate_limit_limit: number | null;
      /**
       * Rate Limit Remaining
       * @description Remaining requests in the current rate limit window.
       * @default null
       */
      rate_limit_remaining: number | null;
      /**
       * Status Code
       * @description HTTP status code returned by the start operation.
       */
      status_code: number;
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
 * Type of MAILCOACH's MAILCOACH_SUBSCRIBE_TO_EMAIL_LIST tool input.
 */
type MAILCOACH_SUBSCRIBE_TO_EMAIL_LIST_INPUT = {
  /**
   * Email
   * Format: email
   * @description Subscriber's email address
   */
  email?: string;
  /**
   * Email List Uuid
   * @description UUID of the email list to add the subscriber to
   */
  email_list_uuid?: string;
  /**
   * Extra Attributes
   * @description Custom fields as key-value pairs (optional, values must be strings)
   * @default null
   */
  extra_attributes: {
      [key: string]: string;
  } | null;
  /**
   * First Name
   * @description Subscriber's first name (optional)
   * @default null
   */
  first_name: string | null;
  /**
   * Last Name
   * @description Subscriber's last name (optional)
   * @default null
   */
  last_name: string | null;
  /**
   * Skip Confirmation
   * @description Skip double opt-in; immediately confirm the subscription (optional)
   * @default null
   */
  skip_confirmation: boolean | null;
  /**
   * Strict
   * @description If true and the email already exists, the call fails instead of updating (optional)
   * @default null
   */
  strict: boolean | null;
  /**
   * Tags
   * @description Tags to set; passing tags will sync/replace tags on the subscriber (optional)
   * @default null
   */
  tags: string[] | null;
};

/**
 * Type of MAILCOACH's MAILCOACH_SUBSCRIBE_TO_EMAIL_LIST tool output.
 */
type MAILCOACH_SUBSCRIBE_TO_EMAIL_LIST_OUTPUT = {
  /**
   * Data
   * @description Data model for a Mailcoach subscriber resource.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when created
       */
      created_at: string;
      /**
       * Email
       * @description Subscriber's email address
       */
      email: string;
      /**
       * Email List Uuid
       * @description UUID of the email list
       */
      email_list_uuid: string;
      /**
       * Extra Attributes
       * @description Custom fields as key-value pairs (values are strings)
       */
      extra_attributes?: {
          [key: string]: string;
      };
      /**
       * First Name
       * @description Subscriber's first name
       * @default null
       */
      first_name: string | null;
      /**
       * Last Name
       * @description Subscriber's last name
       * @default null
       */
      last_name: string | null;
      /**
       * Subscribed At
       * @description ISO 8601 timestamp when subscribed
       * @default null
       */
      subscribed_at: string | null;
      /**
       * Tags
       * @description List of tags associated with the subscriber
       */
      tags?: string[];
      /**
       * Unsubscribed At
       * @description ISO 8601 timestamp when unsubscribed, or null if still subscribed
       * @default null
       */
      unsubscribed_at: string | null;
      /**
       * Updated At
       * @description ISO 8601 timestamp when last updated
       */
      updated_at: string;
      /**
       * Uuid
       * @description Subscriber UUID
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
 * Type of MAILCOACH's MAILCOACH_UNSUBSCRIBE_SUBSCRIBER tool input.
 */
type MAILCOACH_UNSUBSCRIBE_SUBSCRIBER_INPUT = {
  /**
   * Subscriber Uuid
   * Format: uuid
   * @description UUID of the subscriber to unsubscribe
   */
  subscriber_uuid?: unknown;
};

/**
 * Type of MAILCOACH's MAILCOACH_UNSUBSCRIBE_SUBSCRIBER tool output.
 */
type MAILCOACH_UNSUBSCRIBE_SUBSCRIBER_OUTPUT = {
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
 * Type of MAILCOACH's MAILCOACH_UPDATE_CAMPAIGN tool input.
 */
type MAILCOACH_UPDATE_CAMPAIGN_INPUT = {
  /**
   * Add Subscriber Link Tags
   * @description Tag clicked links per subscriber
   * @default null
   */
  add_subscriber_link_tags: boolean | null;
  /**
   * Add Subscriber Tags
   * @description Tag subscribers after send
   * @default null
   */
  add_subscriber_tags: boolean | null;
  /**
   * Content
   * @description Markdown content if using a markdown-enabled template
   * @default null
   */
  content: string | null;
  /**
   * Disable Webview
   * @description Disable public webview generation
   * @default null
   */
  disable_webview: boolean | null;
  /**
   * Email List Uuid
   * @description UUID of the email list to send the campaign to
   */
  email_list_uuid?: string;
  /**
   * Fields
   * @description Key-value pairs to merge into dynamic template fields
   * @default null
   */
  fields: {
      [key: string]: string;
  } | null;
  /**
   * From Email
   * @description Override 'from' email address
   * @default null
   */
  from_email: string | null;
  /**
   * From Name
   * @description Override 'from' display name
   * @default null
   */
  from_name: string | null;
  /**
   * Html
   * @description Raw HTML content of the campaign
   * @default null
   */
  html: string | null;
  /**
   * Mailable Class
   * @description Fully-qualified class name for a custom mailable
   * @default null
   */
  mailable_class: string | null;
  /**
   * Name
   * @description New name for the campaign
   */
  name?: string;
  /**
   * Schedule At
   * @description Scheduled send datetime in 'YYYY-MM-DD HH:MM:SS' (server timezone)
   * @default null
   */
  schedule_at: string | null;
  /**
   * Segment Uuid
   * @description UUID of a subscriber segment to target
   * @default null
   */
  segment_uuid: string | null;
  /**
   * Subject
   * @description Override email subject line
   * @default null
   */
  subject: string | null;
  /**
   * Template Uuid
   * @description UUID of the template to use; omit to keep current template
   * @default null
   */
  template_uuid: string | null;
  /**
   * Utm Tags
   * @description Append UTM tags to all links
   * @default null
   */
  utm_tags: boolean | null;
  /**
   * Uuid
   * @description UUID of the campaign to update
   */
  uuid?: string;
};

/**
 * Type of MAILCOACH's MAILCOACH_UPDATE_CAMPAIGN tool output.
 */
type MAILCOACH_UPDATE_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bounce Count
       * @description Total bounce count
       */
      bounce_count: number;
      /**
       * Bounce Rate
       * @description Bounce rate percentage
       */
      bounce_rate: number;
      /**
       * Click Count
       * @description Total click count
       */
      click_count: number;
      /**
       * Click Rate
       * @description Click rate percentage
       */
      click_rate: number;
      /**
       * Created At
       * @description Datetime when campaign was created (ISO 8601)
       */
      created_at: string;
      /**
       * Email Html
       * @description Rendered email HTML content
       * @default null
       */
      email_html: string | null;
      /**
       * Email List Uuid
       * @description Related email list UUID
       */
      email_list_uuid: string;
      /**
       * From Email
       * @description Sender email address
       * @default null
       */
      from_email: string | null;
      /**
       * From Name
       * @description Sender name
       * @default null
       */
      from_name: string | null;
      /**
       * Html
       * @description Raw HTML content of the campaign
       * @default null
       */
      html: string | null;
      /**
       * Last Modified At
       * @description Datetime when last modified (ISO 8601)
       */
      last_modified_at: string;
      /**
       * Mailable Class
       * @description Mailable class name if used
       * @default null
       */
      mailable_class: string | null;
      /**
       * Name
       * @description Campaign name
       * @default null
       */
      name: string | null;
      /**
       * Open Count
       * @description Total open count
       */
      open_count: number;
      /**
       * Open Rate
       * @description Open rate percentage
       */
      open_rate: number;
      /**
       * Scheduled At
       * @description Scheduled send datetime (ISO 8601)
       * @default null
       */
      scheduled_at: string | null;
      /**
       * Segment Class
       * @description Segment class if used
       * @default null
       */
      segment_class: string | null;
      /**
       * Segment Description
       * @description Segment description if used
       * @default null
       */
      segment_description: string | null;
      /**
       * Sent At
       * @description Datetime when campaign was sent (ISO 8601)
       * @default null
       */
      sent_at: string | null;
      /**
       * Sent To Number Of Subscribers
       * @description Number of subscribers campaign was sent to
       */
      sent_to_number_of_subscribers: number;
      /**
       * Statistics Calculated At
       * @description Datetime when statistics were calculated (ISO 8601)
       * @default null
       */
      statistics_calculated_at: string | null;
      /**
       * Status
       * @description Campaign status
       */
      status: string;
      /**
       * Structured Html
       * @description Structured HTML content if present
       * @default null
       */
      structured_html: string | null;
      /**
       * Summary Mail Sent At
       * @description Datetime when summary mail was sent (ISO 8601)
       * @default null
       */
      summary_mail_sent_at: string | null;
      /**
       * Unique Click Count
       * @description Unique click count
       */
      unique_click_count: number;
      /**
       * Unique Open Count
       * @description Unique open count
       */
      unique_open_count: number;
      /**
       * Unsubscribe Count
       * @description Total unsubscribe count
       */
      unsubscribe_count: number;
      /**
       * Unsubscribe Rate
       * @description Unsubscribe rate percentage
       */
      unsubscribe_rate: number;
      /**
       * Updated At
       * @description Datetime when campaign was last updated (ISO 8601)
       */
      updated_at: string;
      /**
       * Uuid
       * @description Campaign UUID
       */
      uuid: string;
      /**
       * Webview Html
       * @description Webview HTML content
       * @default null
       */
      webview_html: string | null;
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
 * Type of MAILCOACH's MAILCOACH_UPDATE_EMAIL_LIST tool input.
 */
type MAILCOACH_UPDATE_EMAIL_LIST_INPUT = {
  /**
   * Allow Form Subscriptions
   * @description Allow subscriptions via form
   * @default null
   */
  allow_form_subscriptions: boolean | null;
  /**
   * Allowed Form Subscription Tags
   * @description Allowed tags that subscribers can choose when subscribing via form
   * @default null
   */
  allowed_form_subscription_tags: string[] | null;
  /**
   * Automation Mailer
   * @description Mailer for automations, as defined in the Laravel config
   * @default null
   */
  automation_mailer: string | null;
  /**
   * Campaign Mailer
   * @description Mailer for campaigns, as defined in the Laravel config
   * @default null
   */
  campaign_mailer: string | null;
  /**
   * Campaigns Feed Enabled
   * @description Enable RSS feed for campaigns
   * @default null
   */
  campaigns_feed_enabled: boolean | null;
  /**
   * Confirmation Mail
   * @description Type of confirmation mail to send
   * @default null
   * @enum {string|null}
   */
  confirmation_mail: "send_default_confirmation_mail" | "send_custom_confirmation_mail" | null;
  /**
   * Confirmation Mail Content
   * @description HTML content for custom confirmation mail; required if confirmation_mail is 'send_custom_confirmation_mail'
   * @default null
   */
  confirmation_mail_content: string | null;
  /**
   * Confirmation Mail Subject
   * @description Subject for custom confirmation mail; required if confirmation_mail is 'send_custom_confirmation_mail'
   * @default null
   */
  confirmation_mail_subject: string | null;
  /**
   * Default From Email
   * Format: email
   * @description Default sender email address
   */
  default_from_email?: string;
  /**
   * Default From Name
   * @description Default sender name
   * @default null
   */
  default_from_name: string | null;
  /**
   * Default Reply To Email
   * Format: email
   * @description Default reply-to email address
   * @default null
   */
  default_reply_to_email: string | null;
  /**
   * Default Reply To Name
   * @description Default reply-to name
   * @default null
   */
  default_reply_to_name: string | null;
  /**
   * Name
   * @description Email list name
   */
  name?: string;
  /**
   * Redirect After Already Subscribed
   * @description URL redirect when already subscribed
   * @default null
   */
  redirect_after_already_subscribed: string | null;
  /**
   * Redirect After Subscribed
   * @description URL redirect after a successful subscription
   * @default null
   */
  redirect_after_subscribed: string | null;
  /**
   * Redirect After Subscription Pending
   * @description URL redirect after subscription pending confirmation
   * @default null
   */
  redirect_after_subscription_pending: string | null;
  /**
   * Redirect After Unsubscribed
   * @description URL redirect after unsubscribed
   * @default null
   */
  redirect_after_unsubscribed: string | null;
  /**
   * Report Campaign Sent
   * @description Send report after each campaign is sent
   * @default null
   */
  report_campaign_sent: boolean | null;
  /**
   * Report Campaign Summary
   * @description Include campaign summary in reports
   * @default null
   */
  report_campaign_summary: boolean | null;
  /**
   * Report Email List Summary
   * @description Include email list summary in reports
   * @default null
   */
  report_email_list_summary: boolean | null;
  /**
   * Report Recipients
   * @description Comma-separated emails to receive reports
   * @default null
   */
  report_recipients: string | null;
  /**
   * Requires Confirmation
   * @description Require double opt-in confirmation for new subscribers
   * @default null
   */
  requires_confirmation: boolean | null;
  /**
   * Transactional Mailer
   * @description Mailer for transactional emails, as defined in the Laravel config
   * @default null
   */
  transactional_mailer: string | null;
  /**
   * Uuid
   * Format: uuid
   * @description The UUID of the email list to update
   */
  uuid?: string;
};

/**
 * Type of MAILCOACH's MAILCOACH_UPDATE_EMAIL_LIST tool output.
 */
type MAILCOACH_UPDATE_EMAIL_LIST_OUTPUT = {
  /** Data */
  data?: {
      /** Active Subscribers Count */
      active_subscribers_count: number;
      /** Allow Form Subscriptions */
      allow_form_subscriptions: boolean;
      /** Automation Mailer */
      automation_mailer: string;
      /** Campaign Mailer */
      campaign_mailer: string;
      /** Campaigns Feed Enabled */
      campaigns_feed_enabled: boolean;
      /** Confirmation Mail Content */
      confirmation_mail_content: string | null;
      /** Confirmation Mail Subject */
      confirmation_mail_subject: string | null;
      /** Confirmation Mailable Class */
      confirmation_mailable_class: string | null;
      /** Created At */
      created_at: string;
      /**
       * Default From Email
       * Format: email
       */
      default_from_email: string;
      /** Default From Name */
      default_from_name: string | null;
      /** Email List Summary Sent At */
      email_list_summary_sent_at: string | null;
      /** Id */
      id: number;
      /** Name */
      name: string;
      /** Redirect After Already Subscribed */
      redirect_after_already_subscribed: string | null;
      /** Redirect After Subscribed */
      redirect_after_subscribed: string | null;
      /** Redirect After Subscription Pending */
      redirect_after_subscription_pending: string | null;
      /** Redirect After Unsubscribed */
      redirect_after_unsubscribed: string | null;
      /** Report Campaign Sent */
      report_campaign_sent: boolean;
      /** Report Campaign Summary */
      report_campaign_summary: boolean;
      /** Report Email List Summary */
      report_email_list_summary: boolean;
      /** Report Recipients */
      report_recipients: string | null;
      /** Requires Confirmation */
      requires_confirmation: boolean;
      /** Transactional Mailer */
      transactional_mailer: string;
      /** Updated At */
      updated_at: string;
      /** Uuid */
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
 * Type of MAILCOACH's MAILCOACH_UPDATE_SUBSCRIBER tool input.
 */
type MAILCOACH_UPDATE_SUBSCRIBER_INPUT = {
  /**
   * Append Tags
   * @description If true, provided tags are appended instead of replaced.
   * @default false
   */
  append_tags: boolean | null;
  /**
   * Email
   * @description The subscriber’s email address.
   */
  email?: string;
  /**
   * Extra Attributes
   * @description Additional custom attributes for the subscriber.
   * @default null
   */
  extra_attributes: {
      [key: string]: unknown;
  } | null;
  /**
   * First Name
   * @description Subscriber’s first name. Set to null to remove.
   * @default null
   */
  first_name: string | null;
  /**
   * Last Name
   * @description Subscriber’s last name. Set to null to remove.
   * @default null
   */
  last_name: string | null;
  /**
   * Subscriber Uuid
   * Format: uuid
   * @description UUID of the subscriber to update.
   */
  subscriber_uuid?: string;
  /**
   * Tags
   * @description Tags to set; replaces existing tags by default.
   * @default null
   */
  tags: string[] | null;
};

/**
 * Type of MAILCOACH's MAILCOACH_UPDATE_SUBSCRIBER tool output.
 */
type MAILCOACH_UPDATE_SUBSCRIBER_OUTPUT = {
  /**
   * Data
   * @description Updated subscriber resource.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the record was created.
       */
      created_at: string;
      /**
       * Email
       * @description Subscriber's email address.
       */
      email: string;
      /**
       * Email List Uuid
       * @description UUID of the email list this subscriber belongs to.
       */
      email_list_uuid: string;
      /**
       * Extra Attributes
       * @description Additional attributes (key/value pairs) for the subscriber.
       */
      extra_attributes?: {
          [key: string]: unknown;
      };
      /**
       * First Name
       * @description Subscriber's first name, if available.
       * @default null
       */
      first_name: string | null;
      /**
       * Last Name
       * @description Subscriber's last name, if available.
       * @default null
       */
      last_name: string | null;
      /**
       * Subscribed At
       * @description ISO 8601 timestamp when subscription was confirmed.
       * @default null
       */
      subscribed_at: string | null;
      /**
       * Tags
       * @description List of tags associated with the subscriber.
       */
      tags?: string[];
      /**
       * Unsubscribed At
       * @description ISO 8601 timestamp when unsubscribed.
       * @default null
       */
      unsubscribed_at: string | null;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the record was last updated.
       */
      updated_at: string;
      /**
       * Uuid
       * @description Subscriber UUID.
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
 * Type of MAILCOACH's MAILCOACH_UPDATE_SUBSCRIBER_IMPORT tool input.
 */
type MAILCOACH_UPDATE_SUBSCRIBER_IMPORT_INPUT = {
  /**
   * Email List Uuid
   * @description UUID of the target email list.
   */
  email_list_uuid?: string;
  /**
   * Import Uuid
   * @description UUID of the subscriber import to update.
   */
  import_uuid?: string;
  /**
   * Replace Tags
   * @description Replace all existing tags on the subscribers if true.
   */
  replace_tags?: boolean;
  /**
   * Subscribe Unsubscribed
   * @description Resubscribe previously unsubscribed emails if true.
   */
  subscribe_unsubscribed?: boolean;
  /**
   * Subscribers Csv
   * @description CSV string with subscribers' data, one row per subscriber. Must include header.
   */
  subscribers_csv?: string;
  /**
   * Unsubscribe Others
   * @description Unsubscribe list members not present in the CSV if true.
   */
  unsubscribe_others?: boolean;
};

/**
 * Type of MAILCOACH's MAILCOACH_UPDATE_SUBSCRIBER_IMPORT tool output.
 */
type MAILCOACH_UPDATE_SUBSCRIBER_IMPORT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email List Uuid
       * @description UUID of the related email list.
       */
      email_list_uuid: string;
      /**
       * Error Count
       * @description Number of errors detected during import.
       */
      error_count: number;
      /**
       * Id
       * @description Internal identifier of the import.
       */
      id: number;
      /**
       * Imported Subscribers Count
       * @description Number of subscribers imported when completed, else null.
       * @default null
       */
      imported_subscribers_count: number | null;
      /**
       * Status
       * @description Status of the import (e.g., draft, processing, completed).
       */
      status: string;
      /**
       * Subscribe Unsubscribed
       * @description As requested in the import payload.
       */
      subscribe_unsubscribed: boolean;
      /**
       * Subscribers Csv
       * @description The CSV content stored for the import.
       * @default null
       */
      subscribers_csv: string | null;
      /**
       * Unsubscribe Others
       * @description As requested in the import payload.
       */
      unsubscribe_others: boolean;
      /**
       * Uuid
       * @description Public UUID of the import.
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
 * Type of MAILCOACH's MAILCOACH_UPDATE_TAG tool input.
 */
type MAILCOACH_UPDATE_TAG_INPUT = {
  /**
   * Email List Uuid
   * Format: uuid
   * @description UUID of the email list containing the tag
   */
  email_list_uuid?: string;
  /**
   * Name
   * @description New name for the tag
   */
  name?: string;
  /**
   * Uuid
   * Format: uuid
   * @description UUID of the tag to update
   */
  uuid?: string;
  /**
   * Visible In Preferences
   * @description Whether this tag should be shown in subscriber preference settings
   * @default null
   */
  visible_in_preferences: boolean | null;
};

/**
 * Type of MAILCOACH's MAILCOACH_UPDATE_TAG tool output.
 */
type MAILCOACH_UPDATE_TAG_OUTPUT = {
  /**
   * Data
   * @description The updated tag resource
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the tag was created (ISO 8601)
       */
      created_at: string;
      /**
       * Email List
       * @description Parent email list object
       */
      email_list: {
          /**
           * Name
           * @description Name of the parent email list
           */
          name: string;
          /**
           * Uuid
           * @description UUID of the parent email list
           */
          uuid: string;
      };
      /**
       * Email List Uuid
       * @description UUID of the parent email list
       */
      email_list_uuid: string;
      /**
       * Name
       * @description Tag name
       */
      name: string;
      /**
       * Updated At
       * @description Timestamp when the tag was last updated (ISO 8601)
       */
      updated_at: string;
      /**
       * Uuid
       * @description Tag UUID
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
 * Type of MAILCOACH's MAILCOACH_UPDATE_TEMPLATE tool input.
 */
type MAILCOACH_UPDATE_TEMPLATE_INPUT = {
  /**
   * Html
   * @description The template's new full HTML content
   * @default null
   */
  html: string | null;
  /**
   * Name
   * @description The template's new name
   */
  name?: string;
  /**
   * Structured Html
   * @description Structured HTML content; may be null to clear
   * @default null
   */
  structured_html: string | null;
  /**
   * Uuid
   * Format: uuid
   * @description UUID of the template to update
   */
  uuid?: string;
};

/**
 * Type of MAILCOACH's MAILCOACH_UPDATE_TEMPLATE tool output.
 */
type MAILCOACH_UPDATE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data model for a Mailcoach template.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when created
       */
      created_at: string;
      /**
       * Html
       * @description HTML content returned
       */
      html: string;
      /**
       * Id
       * @description Template ID
       */
      id: number;
      /**
       * Name
       * @description Template name
       */
      name: string;
      /**
       * Structured Html
       * @description Structured HTML content or null
       * @default null
       */
      structured_html: string | null;
      /**
       * Updated At
       * @description ISO 8601 timestamp when last updated
       */
      updated_at: string;
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
 * Type map of all available tool input types for toolkit "MAILCOACH".
 */
export type MAILCOACH_TOOL_INPUTS = {
  ADD_CAMPAIGN: MAILCOACH_ADD_CAMPAIGN_INPUT
  ADD_EMAIL_LIST: MAILCOACH_ADD_EMAIL_LIST_INPUT
  ADD_SUPPRESSION: MAILCOACH_ADD_SUPPRESSION_INPUT
  ADD_TAG: MAILCOACH_ADD_TAG_INPUT
  ADD_TAGS_TO_SUBSCRIBER: MAILCOACH_ADD_TAGS_TO_SUBSCRIBER_INPUT
  ADD_TEMPLATE: MAILCOACH_ADD_TEMPLATE_INPUT
  ADD_TRANSACTIONAL_EMAIL_TEMPLATE: MAILCOACH_ADD_TRANSACTIONAL_EMAIL_TEMPLATE_INPUT
  APPEND_TO_SUBSCRIBER_IMPORT: MAILCOACH_APPEND_TO_SUBSCRIBER_IMPORT_INPUT
  CONFIRM_SUBSCRIBER: MAILCOACH_CONFIRM_SUBSCRIBER_INPUT
  CREATE_SUBSCRIBER_IMPORT: MAILCOACH_CREATE_SUBSCRIBER_IMPORT_INPUT
  DELETE_CAMPAIGN: MAILCOACH_DELETE_CAMPAIGN_INPUT
  DELETE_EMAIL_LIST: MAILCOACH_DELETE_EMAIL_LIST_INPUT
  DELETE_SEND: MAILCOACH_DELETE_SEND_INPUT
  DELETE_SUBSCRIBER: MAILCOACH_DELETE_SUBSCRIBER_INPUT
  DELETE_SUBSCRIBER_IMPORT: MAILCOACH_DELETE_SUBSCRIBER_IMPORT_INPUT
  DELETE_SUPPRESSION: MAILCOACH_DELETE_SUPPRESSION_INPUT
  DELETE_TAG: MAILCOACH_DELETE_TAG_INPUT
  DELETE_TEMPLATE: MAILCOACH_DELETE_TEMPLATE_INPUT
  DELETE_TRANSACTIONAL_MAIL: MAILCOACH_DELETE_TRANSACTIONAL_MAIL_INPUT
  GET_ALL_CAMPAIGNS: MAILCOACH_GET_ALL_CAMPAIGNS_INPUT
  GET_ALL_SENT_ITEMS: MAILCOACH_GET_ALL_SENT_ITEMS_INPUT
  GET_ALL_SUBSCRIBER_IMPORTS: MAILCOACH_GET_ALL_SUBSCRIBER_IMPORTS_INPUT
  GET_ALL_SUPPRESSIONS: MAILCOACH_GET_ALL_SUPPRESSIONS_INPUT
  GET_ALL_TAGS: MAILCOACH_GET_ALL_TAGS_INPUT
  GET_ALL_TEMPLATES: MAILCOACH_GET_ALL_TEMPLATES_INPUT
  GET_ALL_TRANSACTIONAL_EMAIL_TEMPLATES: MAILCOACH_GET_ALL_TRANSACTIONAL_EMAIL_TEMPLATES_INPUT
  GET_EMAIL_LISTS: MAILCOACH_GET_EMAIL_LISTS_INPUT
  GET_SPECIFIC_CAMPAIGN: MAILCOACH_GET_SPECIFIC_CAMPAIGN_INPUT
  GET_SPECIFIC_EMAIL_LIST: MAILCOACH_GET_SPECIFIC_EMAIL_LIST_INPUT
  GET_SPECIFIC_SUBSCRIBER: MAILCOACH_GET_SPECIFIC_SUBSCRIBER_INPUT
  GET_SPECIFIC_SUPPRESSION: MAILCOACH_GET_SPECIFIC_SUPPRESSION_INPUT
  GET_SPECIFIC_TAG: MAILCOACH_GET_SPECIFIC_TAG_INPUT
  GET_SPECIFIC_TEMPLATE: MAILCOACH_GET_SPECIFIC_TEMPLATE_INPUT
  GET_TRANSACTIONAL_MAILS: MAILCOACH_GET_TRANSACTIONAL_MAILS_INPUT
  REMOVE_TAGS_FROM_SUBSCRIBER: MAILCOACH_REMOVE_TAGS_FROM_SUBSCRIBER_INPUT
  RESEND_CONFIRMATION: MAILCOACH_RESEND_CONFIRMATION_INPUT
  START_SUBSCRIBER_IMPORT: MAILCOACH_START_SUBSCRIBER_IMPORT_INPUT
  SUBSCRIBE_TO_EMAIL_LIST: MAILCOACH_SUBSCRIBE_TO_EMAIL_LIST_INPUT
  UNSUBSCRIBE_SUBSCRIBER: MAILCOACH_UNSUBSCRIBE_SUBSCRIBER_INPUT
  UPDATE_CAMPAIGN: MAILCOACH_UPDATE_CAMPAIGN_INPUT
  UPDATE_EMAIL_LIST: MAILCOACH_UPDATE_EMAIL_LIST_INPUT
  UPDATE_SUBSCRIBER: MAILCOACH_UPDATE_SUBSCRIBER_INPUT
  UPDATE_SUBSCRIBER_IMPORT: MAILCOACH_UPDATE_SUBSCRIBER_IMPORT_INPUT
  UPDATE_TAG: MAILCOACH_UPDATE_TAG_INPUT
  UPDATE_TEMPLATE: MAILCOACH_UPDATE_TEMPLATE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MAILCOACH".
 */
export type MAILCOACH_TOOL_OUTPUTS = {
  ADD_CAMPAIGN: MAILCOACH_ADD_CAMPAIGN_OUTPUT
  ADD_EMAIL_LIST: MAILCOACH_ADD_EMAIL_LIST_OUTPUT
  ADD_SUPPRESSION: MAILCOACH_ADD_SUPPRESSION_OUTPUT
  ADD_TAG: MAILCOACH_ADD_TAG_OUTPUT
  ADD_TAGS_TO_SUBSCRIBER: MAILCOACH_ADD_TAGS_TO_SUBSCRIBER_OUTPUT
  ADD_TEMPLATE: MAILCOACH_ADD_TEMPLATE_OUTPUT
  ADD_TRANSACTIONAL_EMAIL_TEMPLATE: MAILCOACH_ADD_TRANSACTIONAL_EMAIL_TEMPLATE_OUTPUT
  APPEND_TO_SUBSCRIBER_IMPORT: MAILCOACH_APPEND_TO_SUBSCRIBER_IMPORT_OUTPUT
  CONFIRM_SUBSCRIBER: MAILCOACH_CONFIRM_SUBSCRIBER_OUTPUT
  CREATE_SUBSCRIBER_IMPORT: MAILCOACH_CREATE_SUBSCRIBER_IMPORT_OUTPUT
  DELETE_CAMPAIGN: MAILCOACH_DELETE_CAMPAIGN_OUTPUT
  DELETE_EMAIL_LIST: MAILCOACH_DELETE_EMAIL_LIST_OUTPUT
  DELETE_SEND: MAILCOACH_DELETE_SEND_OUTPUT
  DELETE_SUBSCRIBER: MAILCOACH_DELETE_SUBSCRIBER_OUTPUT
  DELETE_SUBSCRIBER_IMPORT: MAILCOACH_DELETE_SUBSCRIBER_IMPORT_OUTPUT
  DELETE_SUPPRESSION: MAILCOACH_DELETE_SUPPRESSION_OUTPUT
  DELETE_TAG: MAILCOACH_DELETE_TAG_OUTPUT
  DELETE_TEMPLATE: MAILCOACH_DELETE_TEMPLATE_OUTPUT
  DELETE_TRANSACTIONAL_MAIL: MAILCOACH_DELETE_TRANSACTIONAL_MAIL_OUTPUT
  GET_ALL_CAMPAIGNS: MAILCOACH_GET_ALL_CAMPAIGNS_OUTPUT
  GET_ALL_SENT_ITEMS: MAILCOACH_GET_ALL_SENT_ITEMS_OUTPUT
  GET_ALL_SUBSCRIBER_IMPORTS: MAILCOACH_GET_ALL_SUBSCRIBER_IMPORTS_OUTPUT
  GET_ALL_SUPPRESSIONS: MAILCOACH_GET_ALL_SUPPRESSIONS_OUTPUT
  GET_ALL_TAGS: MAILCOACH_GET_ALL_TAGS_OUTPUT
  GET_ALL_TEMPLATES: MAILCOACH_GET_ALL_TEMPLATES_OUTPUT
  GET_ALL_TRANSACTIONAL_EMAIL_TEMPLATES: MAILCOACH_GET_ALL_TRANSACTIONAL_EMAIL_TEMPLATES_OUTPUT
  GET_EMAIL_LISTS: MAILCOACH_GET_EMAIL_LISTS_OUTPUT
  GET_SPECIFIC_CAMPAIGN: MAILCOACH_GET_SPECIFIC_CAMPAIGN_OUTPUT
  GET_SPECIFIC_EMAIL_LIST: MAILCOACH_GET_SPECIFIC_EMAIL_LIST_OUTPUT
  GET_SPECIFIC_SUBSCRIBER: MAILCOACH_GET_SPECIFIC_SUBSCRIBER_OUTPUT
  GET_SPECIFIC_SUPPRESSION: MAILCOACH_GET_SPECIFIC_SUPPRESSION_OUTPUT
  GET_SPECIFIC_TAG: MAILCOACH_GET_SPECIFIC_TAG_OUTPUT
  GET_SPECIFIC_TEMPLATE: MAILCOACH_GET_SPECIFIC_TEMPLATE_OUTPUT
  GET_TRANSACTIONAL_MAILS: MAILCOACH_GET_TRANSACTIONAL_MAILS_OUTPUT
  REMOVE_TAGS_FROM_SUBSCRIBER: MAILCOACH_REMOVE_TAGS_FROM_SUBSCRIBER_OUTPUT
  RESEND_CONFIRMATION: MAILCOACH_RESEND_CONFIRMATION_OUTPUT
  START_SUBSCRIBER_IMPORT: MAILCOACH_START_SUBSCRIBER_IMPORT_OUTPUT
  SUBSCRIBE_TO_EMAIL_LIST: MAILCOACH_SUBSCRIBE_TO_EMAIL_LIST_OUTPUT
  UNSUBSCRIBE_SUBSCRIBER: MAILCOACH_UNSUBSCRIBE_SUBSCRIBER_OUTPUT
  UPDATE_CAMPAIGN: MAILCOACH_UPDATE_CAMPAIGN_OUTPUT
  UPDATE_EMAIL_LIST: MAILCOACH_UPDATE_EMAIL_LIST_OUTPUT
  UPDATE_SUBSCRIBER: MAILCOACH_UPDATE_SUBSCRIBER_OUTPUT
  UPDATE_SUBSCRIBER_IMPORT: MAILCOACH_UPDATE_SUBSCRIBER_IMPORT_OUTPUT
  UPDATE_TAG: MAILCOACH_UPDATE_TAG_OUTPUT
  UPDATE_TEMPLATE: MAILCOACH_UPDATE_TEMPLATE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MAILCOACH toolkit.
 */
export const MAILCOACH = {
  slug: "mailcoach",
  tools: {
    /**
     * Tool to create a new mailcoach campaign. use when you need to send or schedule an email campaign to a specific list or segment.
     */
    ADD_CAMPAIGN: "MAILCOACH_ADD_CAMPAIGN",
    /**
     * Tool to create a new email list. use when you need to manage and organize subscribers before sending campaigns. use after authentication.
     */
    ADD_EMAIL_LIST: "MAILCOACH_ADD_EMAIL_LIST",
    /**
     * Tool to add a suppression entry. use after detecting a bounce, spam complaint, or manual block.
     */
    ADD_SUPPRESSION: "MAILCOACH_ADD_SUPPRESSION",
    /**
     * Tool to create a new tag within a specific email list. use after confirming the email list exists.
     */
    ADD_TAG: "MAILCOACH_ADD_TAG",
    /**
     * Tool to add tags to a subscriber. use after retrieving a subscriber's uuid to segment them.
     */
    ADD_TAGS_TO_SUBSCRIBER: "MAILCOACH_ADD_TAGS_TO_SUBSCRIBER",
    /**
     * Tool to create a new email template. use after preparing template name and optional html content.
     */
    ADD_TEMPLATE: "MAILCOACH_ADD_TEMPLATE",
    /**
     * Tool to create a new template that can be used for transactional emails.
     */
    ADD_TRANSACTIONAL_EMAIL_TEMPLATE: "MAILCOACH_ADD_TRANSACTIONAL_EMAIL_TEMPLATE",
    /**
     * Tool to append csv data to an existing subscriber import. use after retrieving a subscriber import when additional subscriber data needs to be added.
     */
    APPEND_TO_SUBSCRIBER_IMPORT: "MAILCOACH_APPEND_TO_SUBSCRIBER_IMPORT",
    /**
     * Tool to confirm a subscriber’s subscription. use when finalizing the double opt-in process after they have provided subscriber details. example: "confirm subscriber with uuid 123e4567-e89b-12d3-a456-426614174000"
     */
    CONFIRM_SUBSCRIBER: "MAILCOACH_CONFIRM_SUBSCRIBER",
    /**
     * Tool to create a new subscriber import. use when you have a prepared csv and want to upload it into an existing mailcoach email list after exporting or generating subscriber data.
     */
    CREATE_SUBSCRIBER_IMPORT: "MAILCOACH_CREATE_SUBSCRIBER_IMPORT",
    /**
     * Tool to delete a campaign by uuid. use when you need to permanently remove a campaign after confirming its identifier.
     */
    DELETE_CAMPAIGN: "MAILCOACH_DELETE_CAMPAIGN",
    /**
     * Tool to delete an email list by uuid. use when you need to permanently remove an email list after confirming its identifier.
     */
    DELETE_EMAIL_LIST: "MAILCOACH_DELETE_EMAIL_LIST",
    /**
     * Tool to delete a sent item by its uuid. use after confirming the send's uuid to permanently remove it.
     */
    DELETE_SEND: "MAILCOACH_DELETE_SEND",
    /**
     * Tool to delete a subscriber by uuid. use when you need to permanently remove a subscriber from the system after verifying their uuid.
     */
    DELETE_SUBSCRIBER: "MAILCOACH_DELETE_SUBSCRIBER",
    /**
     * Tool to delete a subscriber import by its uuid. use when you need to permanently remove a subscriber import after confirming its identifier.
     */
    DELETE_SUBSCRIBER_IMPORT: "MAILCOACH_DELETE_SUBSCRIBER_IMPORT",
    /**
     * Tool to delete a suppression entry by uuid. use when you need to permanently remove a suppression after confirming its identifier.
     */
    DELETE_SUPPRESSION: "MAILCOACH_DELETE_SUPPRESSION",
    /**
     * Tool to delete a tag from an email list. use when you need to permanently remove a tag after confirming its identifiers.
     */
    DELETE_TAG: "MAILCOACH_DELETE_TAG",
    /**
     * Tool to delete a template by uuid. use when you need to permanently remove a template after confirming its uuid.
     */
    DELETE_TEMPLATE: "MAILCOACH_DELETE_TEMPLATE",
    /**
     * Tool to delete a transactional mail by its uuid. use when you need to permanently remove a transactional mail after confirming its uuid.
     */
    DELETE_TRANSACTIONAL_MAIL: "MAILCOACH_DELETE_TRANSACTIONAL_MAIL",
    /**
     * Tool to retrieve all campaigns. use when you need a paginated, sortable list of campaigns matching criteria.
     */
    GET_ALL_CAMPAIGNS: "MAILCOACH_GET_ALL_CAMPAIGNS",
    /**
     * Tool to retrieve all sent items. use when you need to list and filter sent items after delivery.
     */
    GET_ALL_SENT_ITEMS: "MAILCOACH_GET_ALL_SENT_ITEMS",
    /**
     * Tool to retrieve all subscriber imports. use when you need a paginated list of import jobs.
     */
    GET_ALL_SUBSCRIBER_IMPORTS: "MAILCOACH_GET_ALL_SUBSCRIBER_IMPORTS",
    /**
     * Tool to list all suppression entries. use when you need suppression uuids for further retrieval.
     */
    GET_ALL_SUPPRESSIONS: "MAILCOACH_GET_ALL_SUPPRESSIONS",
    /**
     * Tool to retrieve all tags for a specific email list. use after confirming the email list exists.
     */
    GET_ALL_TAGS: "MAILCOACH_GET_ALL_TAGS",
    /**
     * Tool to retrieve all templates. use when you need a paginated list of templates with optional search and sorting.
     */
    GET_ALL_TEMPLATES: "MAILCOACH_GET_ALL_TEMPLATES",
    /**
     * Tool to retrieve all transactional email templates. use when you need a paginated list of transactional templates matching your criteria.
     */
    GET_ALL_TRANSACTIONAL_EMAIL_TEMPLATES: "MAILCOACH_GET_ALL_TRANSACTIONAL_EMAIL_TEMPLATES",
    /**
     * Tool to retrieve all email lists. use when you need to fetch a paginated list of email lists with optional filters.
     */
    GET_EMAIL_LISTS: "MAILCOACH_GET_EMAIL_LISTS",
    /**
     * Tool to retrieve details of a specific mailcoach campaign. use when you need the full campaign resource by its uuid.
     */
    GET_SPECIFIC_CAMPAIGN: "MAILCOACH_GET_SPECIFIC_CAMPAIGN",
    /**
     * Tool to retrieve a specific email list. use when you need to fetch details by uuid.
     */
    GET_SPECIFIC_EMAIL_LIST: "MAILCOACH_GET_SPECIFIC_EMAIL_LIST",
    /**
     * Tool to retrieve a specific subscriber. use when you need to fetch subscriber details by uuid.
     */
    GET_SPECIFIC_SUBSCRIBER: "MAILCOACH_GET_SPECIFIC_SUBSCRIBER",
    /**
     * Tool to retrieve a specific suppression entry. use when you need to fetch suppression details by uuid or email.
     */
    GET_SPECIFIC_SUPPRESSION: "MAILCOACH_GET_SPECIFIC_SUPPRESSION",
    /**
     * Tool to retrieve details of a specific tag. use when you need to fetch tag metadata after confirming the email list and tag uuids.
     */
    GET_SPECIFIC_TAG: "MAILCOACH_GET_SPECIFIC_TAG",
    /**
     * Tool to retrieve details of a specific template. use when you need template information by uuid.
     */
    GET_SPECIFIC_TEMPLATE: "MAILCOACH_GET_SPECIFIC_TEMPLATE",
    /**
     * Tool to retrieve all transactional mail templates. use when you need a paginated list of transactional mails.
     */
    GET_TRANSACTIONAL_MAILS: "MAILCOACH_GET_TRANSACTIONAL_MAILS",
    /**
     * Tool to remove tags from a subscriber. use after retrieving a subscriber's uuid to adjust their segments.
     */
    REMOVE_TAGS_FROM_SUBSCRIBER: "MAILCOACH_REMOVE_TAGS_FROM_SUBSCRIBER",
    /**
     * Tool to resend confirmation email to a subscriber. use when a subscriber hasn't confirmed and you need to resend the confirmation.
     */
    RESEND_CONFIRMATION: "MAILCOACH_RESEND_CONFIRMATION",
    /**
     * Tool to start processing a subscriber import. use when you have a draft subscriber import ready to be processed.
     */
    START_SUBSCRIBER_IMPORT: "MAILCOACH_START_SUBSCRIBER_IMPORT",
    /**
     * Tool to add or update a subscriber in an email list. use when you have subscriber details and need to subscribe them to a specific list, optionally skipping confirmation or enforcing strict mode.
     */
    SUBSCRIBE_TO_EMAIL_LIST: "MAILCOACH_SUBSCRIBE_TO_EMAIL_LIST",
    /**
     * Tool to unsubscribe a subscriber from an email list. use when removing a subscriber upon their request after confirming details. example: "unsubscribe subscriber with uuid 123e4567-e89b-12d3-a456-426614174000"
     */
    UNSUBSCRIBE_SUBSCRIBER: "MAILCOACH_UNSUBSCRIBE_SUBSCRIBER",
    /**
     * Tool to update an existing mailcoach campaign. use after identifying the campaign uuid when you need to modify campaign attributes such as name, schedule, or content.
     */
    UPDATE_CAMPAIGN: "MAILCOACH_UPDATE_CAMPAIGN",
    /**
     * Tool to update an existing email list. use when you need to modify a list's configuration after verifying its uuid.
     */
    UPDATE_EMAIL_LIST: "MAILCOACH_UPDATE_EMAIL_LIST",
    /**
     * Tool to update a subscriber. use when you need to modify subscriber details after creation.
     */
    UPDATE_SUBSCRIBER: "MAILCOACH_UPDATE_SUBSCRIBER",
    /**
     * Tool to update an existing subscriber import. use when you need to modify a draft import before execution. import must be in draft status.
     */
    UPDATE_SUBSCRIBER_IMPORT: "MAILCOACH_UPDATE_SUBSCRIBER_IMPORT",
    /**
     * Tool to update an existing tag within an email list. use when you need to modify the name or visibility of a tag after verifying its existence.
     */
    UPDATE_TAG: "MAILCOACH_UPDATE_TAG",
    /**
     * Tool to update an existing template's name or content. use when you need to modify a template's html or structured html by its uuid.
     */
    UPDATE_TEMPLATE: "MAILCOACH_UPDATE_TEMPLATE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MAILCOACH".
 */
export type MAILCOACH_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MAILCOACH".
 */
export type MAILCOACH_TRIGGER_EVENTS = {}
