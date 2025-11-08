// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BASIN's BASIN_CREATE_FORM tool input.
 */
type BASIN_CREATE_FORM_INPUT = {
  /**
   * Name
   * @description Name of the form
   */
  name?: string;
  /**
   * NotificationSettings
   * @description Email notification settings for a form.
   * @default null
   */
  notifications: {
      /**
       * Bcc Emails
       * @description Comma-separated list of BCC email addresses
       * @default null
       */
      bcc_emails: string | null;
      /**
       * Cc Emails
       * @description Comma-separated list of CC email addresses
       * @default null
       */
      cc_emails: string | null;
      /**
       * Notification Emails
       * @description Comma-separated list of email addresses to notify on each submission
       */
      notification_emails: string;
  } | null;
  /**
   * Project Id
   * @description ID of the project under which this form is created
   */
  project_id?: number;
  /**
   * Redirect Url
   * @description URL to redirect after submission
   * @default null
   */
  redirect_url: string | null;
  /**
   * SpamSettings
   * @description Spam protection configuration for a form.
   * @default null
   */
  spam_settings: {
      /**
       * Force Hcaptcha
       * @description Enable hCaptcha spam protection
       * @default false
       */
      force_hcaptcha: boolean;
      /**
       * Force Recaptcha
       * @description Enable Google reCAPTCHA
       * @default false
       */
      force_recaptcha: boolean;
      /**
       * Honeypot Field
       * @description Name of honeypot field to trap bots
       * @default null
       */
      honeypot_field: string | null;
  } | null;
  /**
   * Timezone
   * @description IANA timezone used for form timestamps
   */
  timezone?: string;
  /**
   * Use Ajax
   * @description Whether the form should submit via AJAX
   * @default false
   */
  use_ajax: boolean;
};

/**
 * Type of BASIN's BASIN_CREATE_FORM tool output.
 */
type BASIN_CREATE_FORM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when form was created
       */
      created_at: string;
      /**
       * Id
       * @description Numeric ID of the form
       */
      id: number;
      /**
       * Name
       * @description Name of the form
       */
      name: string;
      /**
       * Project Id
       * @description Project ID associated with this form
       */
      project_id: number;
      /**
       * Redirect Url
       * @description Redirect URL after submission
       * @default null
       */
      redirect_url: string | null;
      /**
       * Timezone
       * @description IANA timezone of the form
       */
      timezone: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when form was last updated
       */
      updated_at: string;
      /**
       * Use Ajax
       * @description Indicates if the form uses AJAX
       */
      use_ajax: boolean;
      /**
       * Uuid
       * @description Unique form UUID
       * @default null
       */
      uuid: string | null;
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
 * Type of BASIN's BASIN_CREATE_FORM_WEBHOOK tool input.
 */
type BASIN_CREATE_FORM_WEBHOOK_INPUT = {
  /**
   * Enabled
   * @description Whether the webhook is active upon creation
   * @default true
   */
  enabled: boolean | null;
  /**
   * Form Id
   * @description ID of the form to attach the webhook to
   */
  form_id?: number;
  /**
   * Format
   * @description Payload format (e.g., 'slack'). Omit for default JSON.
   * @default null
   */
  format: string | null;
  /**
   * Name
   * @description Friendly label for this webhook (for your reference)
   * @default null
   */
  name: string | null;
  /**
   * Trigger When Spam
   * @description If true, fire this webhook even when a submission is flagged as spam
   * @default false
   */
  trigger_when_spam: boolean | null;
  /**
   * Url
   * @description Destination URL where Basin will POST the submission payload
   */
  url?: string;
};

/**
 * Type of BASIN's BASIN_CREATE_FORM_WEBHOOK tool output.
 */
type BASIN_CREATE_FORM_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when webhook was created
       */
      created_at: string;
      /**
       * Enabled
       * @description Whether the webhook is active
       */
      enabled: boolean;
      /**
       * Failure Count
       * @description Number of consecutive failures sending this webhook
       */
      failure_count: number;
      /**
       * Form Id
       * @description ID of the form this webhook is attached to
       */
      form_id: number;
      /**
       * Format
       * @description Payload format of the webhook
       * @default null
       */
      format: string | null;
      /**
       * Id
       * @description Unique ID of the webhook
       */
      id: number;
      /**
       * Last Failure At
       * @description Timestamp of last failure, if any
       * @default null
       */
      last_failure_at: string | null;
      /**
       * Name
       * @description Label of the webhook
       * @default null
       */
      name: string | null;
      /**
       * Trigger When Spam
       * @description If true, webhook fires on spam submissions
       */
      trigger_when_spam: boolean;
      /**
       * Updated At
       * @description ISO 8601 timestamp when webhook was last updated
       */
      updated_at: string;
      /**
       * Url
       * @description Destination URL for webhook callbacks
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
 * Type of BASIN's BASIN_CREATE_NOTIFICATION tool input.
 */
type BASIN_CREATE_NOTIFICATION_INPUT = {
  /**
   * Enabled
   * @description Whether this notification is active upon creation
   * @default true
   */
  enabled: boolean;
  /**
   * Form Id
   * @description ID of the form to attach this notification to
   */
  form_id?: number;
  /**
   * Format
   * @description Payload format for this notification (e.g., 'json', 'slack')
   */
  format?: string;
  /**
   * Name
   * @description Human-readable name for this notification
   */
  name?: string;
  /**
   * Trigger When Spam
   * @description Send this notification on spam submissions as well
   * @default false
   */
  trigger_when_spam: boolean;
  /**
   * Url
   * @description Endpoint URL to receive submission payloads
   */
  url?: string;
};

/**
 * Type of BASIN's BASIN_CREATE_NOTIFICATION tool output.
 */
type BASIN_CREATE_NOTIFICATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when this webhook was created, in ISO 8601 format
       */
      created_at: string;
      /**
       * Enabled
       * @description Whether this notification is enabled
       */
      enabled: boolean;
      /**
       * Failure Count
       * @description Number of failed delivery attempts
       */
      failure_count: number;
      /**
       * Form Id
       * @description Form ID this notification belongs to
       */
      form_id: number;
      /**
       * Format
       * @description Configured notification payload format
       */
      format: string;
      /**
       * Id
       * @description Unique identifier of the notification webhook
       */
      id: number;
      /**
       * Last Failure At
       * @description Timestamp of last failed delivery, if any, in ISO 8601 format
       * @default null
       */
      last_failure_at: string | null;
      /**
       * Name
       * @description Notification webhook name
       */
      name: string;
      /**
       * Trigger When Spam
       * @description If true, spam submissions also trigger this notification
       */
      trigger_when_spam: boolean;
      /**
       * Updated At
       * @description Timestamp when this webhook was last updated, in ISO 8601 format
       */
      updated_at: string;
      /**
       * Url
       * @description Endpoint URL configured for notifications
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
 * Type of BASIN's BASIN_CREATE_PROJECT tool input.
 */
type BASIN_CREATE_PROJECT_INPUT = {
  /**
   * Name
   * @description Name of the new project; must be non-empty.
   */
  name?: string;
};

/**
 * Type of BASIN's BASIN_CREATE_PROJECT tool output.
 */
type BASIN_CREATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the project was created.
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier for the project.
       */
      id: number;
      /**
       * Name
       * @description Name of the project.
       */
      name: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the project was last updated.
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
 * Type of BASIN's BASIN_DELETE_FORM tool input.
 */
type BASIN_DELETE_FORM_INPUT = {
  /**
   * Form Id
   * @description ID of the form to permanently delete
   */
  form_id?: string;
};

/**
 * Type of BASIN's BASIN_DELETE_FORM tool output.
 */
type BASIN_DELETE_FORM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Allowed Domains
       * @description List of domains allowed to submit
       * @default null
       */
      allowed_domains: string[] | null;
      /**
       * Autoreply
       * @description Whether autoresponse emails are sent
       */
      autoreply: boolean;
      /**
       * Autoreply Body
       * @description Body of the autoresponse email
       * @default null
       */
      autoreply_body: string | null;
      /**
       * Autoreply Custom Template
       * @description Custom template for autoresponse emails
       * @default null
       */
      autoreply_custom_template: string | null;
      /**
       * Autoreply Email
       * @description Email used in autoresponse emails
       * @default null
       */
      autoreply_email: string | null;
      /**
       * Autoreply From Name
       * @description Sender name for autoresponse emails
       * @default null
       */
      autoreply_from_name: string | null;
      /**
       * Autoreply Greeting
       * @description Greeting line in autoresponse emails
       * @default null
       */
      autoreply_greeting: string | null;
      /**
       * Autoreply Name
       * @description Name used in autoresponse emails
       * @default null
       */
      autoreply_name: string | null;
      /**
       * Autoreply Subject
       * @description Subject line for autoresponse emails
       * @default null
       */
      autoreply_subject: string | null;
      /**
       * Autoreply Title
       * @description Title used in autoresponse emails
       * @default null
       */
      autoreply_title: string | null;
      /**
       * Autoreply Use Custom Template
       * @description Whether autoresponse uses a custom template
       */
      autoreply_use_custom_template: boolean;
      /**
       * Blocked Domains
       * @description List of domains blocked from submitting
       * @default null
       */
      blocked_domains: string[] | null;
      /**
       * Button Background Color
       * @description Submit button background color
       * @default null
       */
      button_background_color: string | null;
      /**
       * Button Text Color
       * @description Submit button text color
       * @default null
       */
      button_text_color: string | null;
      /**
       * Content Blacklist
       * @description List of blacklisted text patterns
       * @default null
       */
      content_blacklist: string[] | null;
      /**
       * Created At
       * @description ISO 8601 timestamp of form creation
       */
      created_at: string;
      /**
       * Custom Template
       * @description Custom HTML template for the form
       * @default null
       */
      custom_template: string | null;
      /**
       * Data Receipt Email
       * @description Whether a data receipt email is sent to submitter
       */
      data_receipt_email: boolean;
      /**
       * Domain Email
       * @description Email for the associated custom domain
       * @default null
       */
      domain_email: string | null;
      /**
       * Domain Id
       * @description ID of the associated custom domain
       * @default null
       */
      domain_id: number | null;
      /**
       * Duplicate Filter
       * @description Whether duplicate submissions are filtered
       */
      duplicate_filter: boolean;
      /**
       * Exclude Submitter From Reply
       * @description Exclude submitter from reply emails
       */
      exclude_submitter_from_reply: boolean;
      /**
       * Force Hcaptcha
       * @description Whether hCaptcha is enforced
       */
      force_hcaptcha: boolean;
      /**
       * Force Recaptcha
       * @description Whether Google reCAPTCHA is enforced
       */
      force_recaptcha: boolean;
      /**
       * Force Turnstile
       * @description Whether Cloudflare Turnstile is enforced
       */
      force_turnstile: boolean;
      /**
       * Form Webhooks
       * @description List of webhooks configured for this form
       */
      form_webhooks: {
          /**
           * Created At
           * @description ISO 8601 timestamp when created
           */
          created_at: string;
          /**
           * Enabled
           * @description Whether the webhook is active
           */
          enabled: boolean;
          /**
           * Failure Count
           * @description Number of failed delivery attempts
           */
          failure_count: number;
          /**
           * Form Id
           * @description ID of the form this webhook belongs to
           */
          form_id: number;
          /**
           * Format
           * @description Payload format (e.g., 'json', 'slack')
           */
          format: string;
          /**
           * Id
           * @description Unique identifier of the webhook
           */
          id: number;
          /**
           * Last Failure At
           * @description ISO 8601 timestamp of last failure, if any
           * @default null
           */
          last_failure_at: string | null;
          /**
           * Name
           * @description Name of the webhook
           * @default null
           */
          name: string | null;
          /**
           * Trigger When Spam
           * @description Trigger webhook on spam submissions
           */
          trigger_when_spam: boolean;
          /**
           * Updated At
           * @description ISO 8601 timestamp when last updated
           */
          updated_at: string;
          /**
           * Url
           * @description Destination URL for webhook posts
           */
          url: string;
      }[];
      /**
       * Hide Dashboard Button
       * @description Whether the dashboard button is hidden for this form
       */
      hide_dashboard_button: boolean;
      /**
       * Honeypot Field
       * @description Name of the honeypot field to trap bots
       * @default null
       */
      honeypot_field: string | null;
      /**
       * Id
       * @description Internal numeric ID of the form
       */
      id: number;
      /**
       * Inbox Count
       * @description Count of messages in the inbox
       */
      inbox_count: number;
      /**
       * Logo
       * @description URL of the form's logo
       * @default null
       */
      logo: string | null;
      /**
       * Name
       * @description Name of the form
       */
      name: string;
      /**
       * Notification Bcc Emails
       * @description Comma-separated BCC email addresses
       * @default null
       */
      notification_bcc_emails: string | null;
      /**
       * Notification Cc Emails
       * @description Comma-separated CC email addresses
       * @default null
       */
      notification_cc_emails: string | null;
      /**
       * Notification Emails
       * @description Comma-separated list of notification email addresses
       */
      notification_emails: string;
      /**
       * Notification From Name
       * @description Sender name for notification emails
       * @default null
       */
      notification_from_name: string | null;
      /**
       * Notification Subject
       * @description Subject line for notification emails
       * @default null
       */
      notification_subject: string | null;
      /**
       * Project Id
       * @description ID of the project containing this form
       */
      project_id: number;
      /**
       * Project Name
       * @description Name of the associated project
       * @default null
       */
      project_name: string | null;
      /**
       * Recaptcha Failed Url
       * @description URL to redirect to on reCAPTCHA failure
       * @default null
       */
      recaptcha_failed_url: string | null;
      /**
       * Redirect Button Background Color
       * @description Background color for the redirect page button
       * @default null
       */
      redirect_button_background_color: string | null;
      /**
       * Redirect Button Text
       * @description Text for the redirect page button
       * @default null
       */
      redirect_button_text: string | null;
      /**
       * Redirect Button Text Color
       * @description Text color for the redirect page button
       * @default null
       */
      redirect_button_text_color: string | null;
      /**
       * Redirect Heading
       * @description Heading text on redirect page
       * @default null
       */
      redirect_heading: string | null;
      /**
       * Redirect Message
       * @description Message text on redirect page
       * @default null
       */
      redirect_message: string | null;
      /**
       * Redirect Url
       * @description Redirect URL after submission
       * @default null
       */
      redirect_url: string | null;
      /**
       * Retention Days
       * @description Number of days to retain submissions before deletion
       */
      retention_days: number;
      /**
       * Spam Count
       * @description Count of messages marked as spam
       */
      spam_count: number;
      /**
       * Timezone
       * @description IANA timezone for form timestamps
       */
      timezone: string;
      /**
       * Trash Count
       * @description Count of messages in the trash
       */
      trash_count: number;
      /**
       * Turnstile Secret Key
       * @description Turnstile secret key
       * @default null
       */
      turnstile_secret_key: string | null;
      /**
       * Turnstile Site Key
       * @description Turnstile site key
       * @default null
       */
      turnstile_site_key: string | null;
      /**
       * Updated At
       * @description ISO 8601 timestamp of last form update
       */
      updated_at: string;
      /**
       * Use Ajax
       * @description Whether the form submits via AJAX
       */
      use_ajax: boolean;
      /**
       * Use Custom Template
       * @description Whether a custom form template is used
       */
      use_custom_template: boolean;
      /**
       * Uuid
       * @description UUID of the form
       * @default null
       */
      uuid: string | null;
      /**
       * Whitelist Source Domains
       * @description Comma-separated list of allowed source domains
       * @default null
       */
      whitelist_source_domains: string | null;
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
 * Type of BASIN's BASIN_DELETE_INTEGRATION tool input.
 */
type BASIN_DELETE_INTEGRATION_INPUT = {
  /**
   * Integration Id
   * @description ID of the integration to delete
   */
  integration_id?: number;
};

/**
 * Type of BASIN's BASIN_DELETE_INTEGRATION tool output.
 */
type BASIN_DELETE_INTEGRATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp in ISO 8601 format
       */
      created_at: string;
      /**
       * Enabled
       * @description Whether the integration was enabled
       */
      enabled: boolean;
      /**
       * Failure Count
       * @description Number of failed delivery attempts
       */
      failure_count: number;
      /**
       * Form Id
       * @description ID of the form associated with the deleted integration
       */
      form_id: number;
      /**
       * Format
       * @description Format of data sent by the integration
       */
      format: string;
      /**
       * Id
       * @description ID of the deleted integration
       */
      id: number;
      /**
       * Last Failure At
       * @description Timestamp of the last failure, if any
       * @default null
       */
      last_failure_at: string | null;
      /**
       * Name
       * @description Name of the deleted integration
       */
      name: string;
      /**
       * Trigger When Spam
       * @description Whether the integration triggers on spam submissions
       */
      trigger_when_spam: boolean;
      /**
       * Updated At
       * @description Last update timestamp in ISO 8601 format
       */
      updated_at: string;
      /**
       * Url
       * @description Endpoint URL of the deleted integration
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
 * Type of BASIN's BASIN_DELETE_PROJECT tool input.
 */
type BASIN_DELETE_PROJECT_INPUT = {
  /**
   * Project Id
   * @description ID of the project to delete
   */
  project_id?: number;
};

/**
 * Type of BASIN's BASIN_DELETE_PROJECT tool output.
 */
type BASIN_DELETE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the project was created
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the deleted project
       */
      id: number;
      /**
       * Name
       * @description Name of the deleted project
       */
      name: string;
      /** Updated At */
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
 * Type of BASIN's BASIN_DELETE_WEBHOOK tool input.
 */
type BASIN_DELETE_WEBHOOK_INPUT = {
  /**
   * Webhook Id
   * @description ID of the webhook to delete
   */
  webhook_id?: number;
};

/**
 * Type of BASIN's BASIN_DELETE_WEBHOOK tool output.
 */
type BASIN_DELETE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp in ISO 8601 format
       */
      created_at: string;
      /**
       * Enabled
       * @description Whether the webhook was enabled
       */
      enabled: boolean;
      /**
       * Failure Count
       * @description Number of failed delivery attempts
       */
      failure_count: number;
      /**
       * Form Id
       * @description ID of the form associated with the deleted webhook
       */
      form_id: number;
      /**
       * Format
       * @description Format of data sent by the webhook
       */
      format: string;
      /**
       * Id
       * @description ID of the deleted webhook
       */
      id: number;
      /**
       * Last Failure At
       * @description Timestamp of the last failure, if any
       * @default null
       */
      last_failure_at: string | null;
      /**
       * Name
       * @description Name of the deleted webhook
       */
      name: string;
      /**
       * Trigger When Spam
       * @description Whether spam submissions triggered the webhook
       */
      trigger_when_spam: boolean;
      /**
       * Updated At
       * @description Last update timestamp in ISO 8601 format
       */
      updated_at: string;
      /**
       * Url
       * @description Endpoint URL of the deleted webhook
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
 * Type of BASIN's BASIN_GET_DOMAINS tool input.
 */
type BASIN_GET_DOMAINS_INPUT = object;

/**
 * Type of BASIN's BASIN_GET_DOMAINS tool output.
 */
type BASIN_GET_DOMAINS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Domains
       * @description List of domains associated with the account
       */
      domains: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the domain was created
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the domain
           */
          id: string;
          /**
           * Name
           * @description Name of the domain
           */
          name: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the domain was last updated
           */
          updated_at: string;
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
 * Type of BASIN's BASIN_GET_FORMS tool input.
 */
type BASIN_GET_FORMS_INPUT = object;

/**
 * Type of BASIN's BASIN_GET_FORMS tool output.
 */
type BASIN_GET_FORMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Forms
       * @description List of forms retrieved from Basin
       */
      forms: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the form was created
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the form
           */
          id: string | null;
          /**
           * Name
           * @description Name of the form
           */
          name: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the form was last updated
           */
          updated_at: string;
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
 * Type of BASIN's BASIN_GET_FORM_DETAILS tool input.
 */
type BASIN_GET_FORM_DETAILS_INPUT = {
  /**
   * Form Id
   * @description Unique identifier of the form to retrieve details for
   */
  form_id?: string;
};

/**
 * Type of BASIN's BASIN_GET_FORM_DETAILS tool output.
 */
type BASIN_GET_FORM_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Form creation timestamp in ISO 8601 format
       */
      created_at: string;
      /**
       * Endpoint
       * @description URL endpoint for the form
       */
      endpoint: string;
      /**
       * Id
       * @description Unique identifier of the form
       */
      id: string;
      /**
       * Name
       * @description Name of the form
       */
      name: string;
      /**
       * Updated At
       * @description Last update timestamp in ISO 8601 format
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
 * Type of BASIN's BASIN_GET_PROJECTS tool input.
 */
type BASIN_GET_PROJECTS_INPUT = {
  /**
   * Page
   * @description Page number for pagination
   * @default null
   */
  page: string | null;
  /**
   * Query
   * @description Filter projects by id or name
   * @default null
   */
  query: string | null;
};

/**
 * Type of BASIN's BASIN_GET_PROJECTS tool output.
 */
type BASIN_GET_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Projects
       * @description List of projects retrieved from Basin
       */
      projects: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the project was created
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the project
           */
          id: number;
          /**
           * Name
           * @description Name of the project
           */
          name: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the project was last updated
           */
          updated_at: string;
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
 * Type of BASIN's BASIN_GET_PROJECT_DETAILS tool input.
 */
type BASIN_GET_PROJECT_DETAILS_INPUT = {
  /**
   * Project Id
   * @description Unique identifier of the project to retrieve
   */
  project_id?: string;
};

/**
 * Type of BASIN's BASIN_GET_PROJECT_DETAILS tool output.
 */
type BASIN_GET_PROJECT_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the project was created
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the project
       */
      id: number;
      /**
       * Name
       * @description Name of the project
       */
      name: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the project was last updated
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
 * Type of BASIN's BASIN_GET_SUBMISSIONS tool input.
 */
type BASIN_GET_SUBMISSIONS_INPUT = {
  /**
   * Date Range
   * @description Filter submissions by date range in format 'YYYY-MM-DD+to+YYYY-MM-DD'.
   */
  date_range?: unknown;
  /**
   * Filter By
   * @description Filter submissions by status. One of 'new', 'spam', 'trash', or 'all'.
   * @default null
   * @enum {string|null}
   */
  filter_by: "new" | "spam" | "trash" | "all" | null;
  /**
   * Form Id
   * @description ID of the form to get submissions from. Required if using a shared account API token.
   * @default null
   */
  form_id: string | null;
  /**
   * Order By
   * @description Sort submissions by 'date_asc', 'date_desc', 'email_asc', or 'email_desc'.
   * @default null
   * @enum {string|null}
   */
  order_by: "date_asc" | "date_desc" | "email_asc" | "email_desc" | null;
  /**
   * Query
   * @description Search submissions by text across all fields
   * @default null
   */
  query: string | null;
};

/**
 * Type of BASIN's BASIN_GET_SUBMISSIONS tool output.
 */
type BASIN_GET_SUBMISSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Submissions
       * @description List of submissions retrieved from Basin
       */
      submissions: {
          /**
           * Email
           * @description Email of the submitter
           */
          email: string;
          /**
           * Form
           * @description Reference information about the form
           */
          form: {
              /**
               * Name
               * @description Name of the form
               */
              name: string;
              /**
               * Uuid
               * @description UUID of the form, if available
               * @default null
               */
              uuid: string | null;
          };
          /**
           * Id
           * @description Unique identifier of the submission
           */
          id: number;
          /**
           * Payload Params
           * @description Mapped payload parameters key/value pairs
           */
          payload_params: {
              /**
               * Email
               * @description Email field submitted in the form payload
               * @default null
               */
              email: string | null;
              /**
               * Name
               * @description Name field submitted in the form payload
               * @default null
               */
              name: string | null;
          };
          /**
           * Submission
           * @description Detailed submission data
           */
          submission: {
              /**
               * Attachments
               * @description List of attachment URLs associated with the submission
               * @default null
               */
              attachments: string[] | null;
              /**
               * Created At
               * @description ISO 8601 timestamp when the submission was created
               */
              created_at: string;
              /**
               * Email
               * @description Email captured in submission
               * @default null
               */
              email: string | null;
              /**
               * Form Id
               * @description Identifier of the form
               */
              form_id: number;
              /**
               * Ip
               * @description IP address of the submitter
               * @default null
               */
              ip: string | null;
              /**
               * Read
               * @description Indicates if the submission has been read
               */
              read: boolean;
              /**
               * Referrer
               * @description Referrer URL recorded for the submission
               * @default null
               */
              referrer: string | null;
              /**
               * Spam
               * @description Indicates if submission was marked as spam
               */
              spam: boolean;
              /**
               * Spam Reason
               * @description Reason why submission was marked as spam
               * @default null
               */
              spam_reason: string | null;
              /**
               * Trash
               * @description Indicates if the submission is in trash
               */
              trash: boolean;
              /**
               * Updated At
               * @description ISO 8601 timestamp when the submission was last updated
               */
              updated_at: string;
              /**
               * User Agent
               * @description User agent string of the submitter
               * @default null
               */
              user_agent: string | null;
              /**
               * Webhook Sent At
               * @description ISO 8601 timestamp when webhook was successfully sent
               * @default null
               */
              webhook_sent_at: string | null;
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
 * Type of BASIN's BASIN_GET_WEBHOOKS tool input.
 */
type BASIN_GET_WEBHOOKS_INPUT = {
  /**
   * Form Id
   * @description ID of the form to retrieve webhooks for
   */
  form_id?: number;
  /**
   * Page
   * @description Page number for pagination, if multiple pages of webhooks exist
   * @default null
   */
  page: number | null;
  /**
   * Query
   * @description Optional search term to filter webhooks by name, id, or url
   * @default null
   */
  query: string | null;
};

/**
 * Type of BASIN's BASIN_GET_WEBHOOKS tool output.
 */
type BASIN_GET_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Webhooks
       * @description List of webhooks retrieved from Basin
       */
      webhooks: {
          /**
           * Created At
           * @description ISO 8601 creation timestamp
           */
          created_at: string;
          /**
           * Enabled
           * @description Whether the webhook is currently enabled
           */
          enabled: boolean;
          /**
           * Failure Count
           * @description Number of consecutive failures for this webhook
           */
          failure_count: number;
          /**
           * Form Id
           * @description Identifier of the associated form
           */
          form_id: number;
          /**
           * Format
           * @description Payload format for the webhook
           */
          format: string;
          /**
           * Id
           * @description Unique webhook identifier
           */
          id: number;
          /**
           * Last Failure At
           * @description ISO 8601 timestamp of the last failure, if any
           * @default null
           */
          last_failure_at: string | null;
          /**
           * Name
           * @description Name of the webhook
           */
          name: string;
          /**
           * Trigger When Spam
           * @description Whether the webhook triggers on spam submissions
           */
          trigger_when_spam: boolean;
          /**
           * Updated At
           * @description ISO 8601 last updated timestamp
           */
          updated_at: string;
          /**
           * Url
           * @description Webhook target URL
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
 * Type of BASIN's BASIN_UPDATE_INTEGRATION tool input.
 */
type BASIN_UPDATE_INTEGRATION_INPUT = {
  /**
   * Enabled
   * @description Whether this integration is active
   * @default null
   */
  enabled: boolean | null;
  /**
   * Form Id
   * @description ID of the form this integration is attached to
   * @default null
   */
  form_id: number | null;
  /**
   * Format
   * @description Payload format for this integration (e.g., 'json', 'slack')
   * @default null
   */
  format: string | null;
  /**
   * Integration Id
   * @description ID of the integration to update
   */
  integration_id?: number;
  /**
   * Name
   * @description Human-readable name for this integration
   * @default null
   */
  name: string | null;
  /**
   * Trigger When Spam
   * @description If true, the integration fires even for spam submissions
   * @default null
   */
  trigger_when_spam: boolean | null;
  /**
   * Url
   * @description Endpoint URL to receive submission payloads
   * @default null
   */
  url: string | null;
};

/**
 * Type of BASIN's BASIN_UPDATE_INTEGRATION tool output.
 */
type BASIN_UPDATE_INTEGRATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the integration was created
       */
      created_at: string;
      /**
       * Enabled
       * @description Integration active status
       */
      enabled: boolean;
      /**
       * Failure Count
       * @description Number of failed delivery attempts
       */
      failure_count: number;
      /**
       * Form Id
       * @description ID of the form this integration belongs to
       */
      form_id: number;
      /**
       * Format
       * @description Configured payload format
       */
      format: string;
      /**
       * Id
       * @description Unique identifier of the integration
       */
      id: number;
      /**
       * Last Failure At
       * @description ISO 8601 timestamp of the last failure, if any
       * @default null
       */
      last_failure_at: string | null;
      /**
       * Name
       * @description Integration name
       */
      name: string;
      /**
       * Trigger When Spam
       * @description Whether integration fires on spam submissions
       */
      trigger_when_spam: boolean;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the integration was last updated
       */
      updated_at: string;
      /**
       * Url
       * @description Configured webhook URL
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
 * Type of BASIN's BASIN_UPDATE_PROJECT tool input.
 */
type BASIN_UPDATE_PROJECT_INPUT = {
  /**
   * Name
   * @description New name for the project; must be non-empty.
   */
  name?: string;
  /**
   * Project Id
   * @description ID of the project to update
   */
  project_id?: number;
};

/**
 * Type of BASIN's BASIN_UPDATE_PROJECT tool output.
 */
type BASIN_UPDATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the project was created
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the project
       */
      id: number;
      /**
       * Name
       * @description Name of the project
       */
      name: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the project was last updated
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
 * Type of BASIN's BASIN_UPDATE_WEBHOOK tool input.
 */
type BASIN_UPDATE_WEBHOOK_INPUT = {
  /**
   * Enabled
   * @description Whether this webhook is active after update
   * @default null
   */
  enabled: boolean | null;
  /**
   * Form Id
   * @description ID of the form this webhook is attached to
   * @default null
   */
  form_id: number | null;
  /**
   * Format
   * @description Payload format for this webhook (e.g., 'json', 'slack', 'form-data')
   * @default null
   */
  format: string | null;
  /**
   * Name
   * @description Human-readable name for this webhook
   * @default null
   */
  name: string | null;
  /**
   * Trigger When Spam
   * @description If true, send this webhook even on spam submissions
   * @default null
   */
  trigger_when_spam: boolean | null;
  /**
   * Url
   * @description Endpoint URL to receive webhook payloads
   * @default null
   */
  url: string | null;
  /**
   * Webhook Id
   * @description ID of the webhook to update
   */
  webhook_id?: number;
};

/**
 * Type of BASIN's BASIN_UPDATE_WEBHOOK tool output.
 */
type BASIN_UPDATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when created
       */
      created_at: string;
      /**
       * Enabled
       * @description Whether the webhook is active
       */
      enabled: boolean;
      /**
       * Failure Count
       * @description Number of failed webhook delivery attempts
       */
      failure_count: number;
      /**
       * Form Id
       * @description Form ID this webhook belongs to
       */
      form_id: number;
      /**
       * Format
       * @description Payload format (e.g., 'json', 'slack', 'form-data')
       */
      format: string;
      /**
       * Id
       * @description Unique identifier of the webhook
       */
      id: number;
      /**
       * Last Failure At
       * @description ISO 8601 timestamp of the last failure, if any
       * @default null
       */
      last_failure_at: string | null;
      /**
       * Name
       * @description Name of the webhook
       */
      name: string;
      /**
       * Trigger When Spam
       * @description Whether the webhook fires on spam submissions
       */
      trigger_when_spam: boolean;
      /**
       * Updated At
       * @description ISO 8601 timestamp when last updated
       */
      updated_at: string;
      /**
       * Url
       * @description Endpoint URL for webhook payloads
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
 * Type map of all available tool input types for toolkit "BASIN".
 */
export type BASIN_TOOL_INPUTS = {
  CREATE_FORM: BASIN_CREATE_FORM_INPUT
  CREATE_FORM_WEBHOOK: BASIN_CREATE_FORM_WEBHOOK_INPUT
  CREATE_NOTIFICATION: BASIN_CREATE_NOTIFICATION_INPUT
  CREATE_PROJECT: BASIN_CREATE_PROJECT_INPUT
  DELETE_FORM: BASIN_DELETE_FORM_INPUT
  DELETE_INTEGRATION: BASIN_DELETE_INTEGRATION_INPUT
  DELETE_PROJECT: BASIN_DELETE_PROJECT_INPUT
  DELETE_WEBHOOK: BASIN_DELETE_WEBHOOK_INPUT
  GET_DOMAINS: BASIN_GET_DOMAINS_INPUT
  GET_FORMS: BASIN_GET_FORMS_INPUT
  GET_FORM_DETAILS: BASIN_GET_FORM_DETAILS_INPUT
  GET_PROJECTS: BASIN_GET_PROJECTS_INPUT
  GET_PROJECT_DETAILS: BASIN_GET_PROJECT_DETAILS_INPUT
  GET_SUBMISSIONS: BASIN_GET_SUBMISSIONS_INPUT
  GET_WEBHOOKS: BASIN_GET_WEBHOOKS_INPUT
  UPDATE_INTEGRATION: BASIN_UPDATE_INTEGRATION_INPUT
  UPDATE_PROJECT: BASIN_UPDATE_PROJECT_INPUT
  UPDATE_WEBHOOK: BASIN_UPDATE_WEBHOOK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BASIN".
 */
export type BASIN_TOOL_OUTPUTS = {
  CREATE_FORM: BASIN_CREATE_FORM_OUTPUT
  CREATE_FORM_WEBHOOK: BASIN_CREATE_FORM_WEBHOOK_OUTPUT
  CREATE_NOTIFICATION: BASIN_CREATE_NOTIFICATION_OUTPUT
  CREATE_PROJECT: BASIN_CREATE_PROJECT_OUTPUT
  DELETE_FORM: BASIN_DELETE_FORM_OUTPUT
  DELETE_INTEGRATION: BASIN_DELETE_INTEGRATION_OUTPUT
  DELETE_PROJECT: BASIN_DELETE_PROJECT_OUTPUT
  DELETE_WEBHOOK: BASIN_DELETE_WEBHOOK_OUTPUT
  GET_DOMAINS: BASIN_GET_DOMAINS_OUTPUT
  GET_FORMS: BASIN_GET_FORMS_OUTPUT
  GET_FORM_DETAILS: BASIN_GET_FORM_DETAILS_OUTPUT
  GET_PROJECTS: BASIN_GET_PROJECTS_OUTPUT
  GET_PROJECT_DETAILS: BASIN_GET_PROJECT_DETAILS_OUTPUT
  GET_SUBMISSIONS: BASIN_GET_SUBMISSIONS_OUTPUT
  GET_WEBHOOKS: BASIN_GET_WEBHOOKS_OUTPUT
  UPDATE_INTEGRATION: BASIN_UPDATE_INTEGRATION_OUTPUT
  UPDATE_PROJECT: BASIN_UPDATE_PROJECT_OUTPUT
  UPDATE_WEBHOOK: BASIN_UPDATE_WEBHOOK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BASIN toolkit.
 */
export const BASIN = {
  slug: "basin",
  tools: {
    /**
     * Tool to create a new form in basin. use when you need to automate form setup with name, timezone, and project association; optionally configure redirect, notifications, or spam protection.
     */
    CREATE_FORM: "BASIN_CREATE_FORM",
    /**
     * Tool to create a new webhook for a specific form. use when you need to programmatically add a webhook once you have the form id and callback url confirmed.
     */
    CREATE_FORM_WEBHOOK: "BASIN_CREATE_FORM_WEBHOOK",
    /**
     * Tool to create a new notification webhook. use when you need to forward form submissions to an external service.
     */
    CREATE_NOTIFICATION: "BASIN_CREATE_NOTIFICATION",
    /**
     * Tool to create a new basin project. use when you need a new organizational container for forms. example: "create a project named marketing leads."
     */
    CREATE_PROJECT: "BASIN_CREATE_PROJECT",
    /**
     * Tool to delete a form. use when permanently removing a form after it's no longer needed. ensure the form id is correct; this operation is irreversible.
     */
    DELETE_FORM: "BASIN_DELETE_FORM",
    /**
     * Tool to delete a form webhook integration. use when removing an obsolete integration by id.
     */
    DELETE_INTEGRATION: "BASIN_DELETE_INTEGRATION",
    /**
     * Tool to delete a project. use when you need to remove a project after confirming its id. returns the deleted project's details.
     */
    DELETE_PROJECT: "BASIN_DELETE_PROJECT",
    /**
     * Tool to delete a specific webhook. use when you need to remove a webhook from a form after confirming its id.
     */
    DELETE_WEBHOOK: "BASIN_DELETE_WEBHOOK",
    /**
     * Tool to retrieve a list of all domains associated with the account. use after authentication when you need to display or verify your configured domains in basin.
     */
    GET_DOMAINS: "BASIN_GET_DOMAINS",
    /**
     * Tool to retrieve a list of all forms. use after authentication to fetch all your forms.
     */
    GET_FORMS: "BASIN_GET_FORMS",
    /**
     * Tool to retrieve detailed information about a specific form. use when you have a form id and need its metadata.
     */
    GET_FORM_DETAILS: "BASIN_GET_FORM_DETAILS",
    /**
     * Tool to retrieve a list of all projects. use after authentication to fetch your project inventory.
     */
    GET_PROJECTS: "BASIN_GET_PROJECTS",
    /**
     * Tool to retrieve detailed information about a specific project. use when you have a project id and need its metadata (name, created at, updated at).
     */
    GET_PROJECT_DETAILS: "BASIN_GET_PROJECT_DETAILS",
    /**
     * Tool to retrieve all submissions for a specific form. use when you need to list entries after obtaining the form id.
     */
    GET_SUBMISSIONS: "BASIN_GET_SUBMISSIONS",
    /**
     * Tool to retrieve all webhooks associated with a specific form. use after obtaining the form id.
     */
    GET_WEBHOOKS: "BASIN_GET_WEBHOOKS",
    /**
     * Tool to update a form webhook integration. use to modify settings of an existing integration.
     */
    UPDATE_INTEGRATION: "BASIN_UPDATE_INTEGRATION",
    /**
     * Tool to update details of an existing project. use when you need to change a project's name after confirming the project id. example: "update project 123 to 'rebrand launch'".
     */
    UPDATE_PROJECT: "BASIN_UPDATE_PROJECT",
    /**
     * Tool to update settings of an existing webhook for a form. use after obtaining the webhook's id.
     */
    UPDATE_WEBHOOK: "BASIN_UPDATE_WEBHOOK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BASIN".
 */
export type BASIN_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BASIN".
 */
export type BASIN_TRIGGER_EVENTS = {}
