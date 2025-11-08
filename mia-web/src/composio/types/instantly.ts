// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of INSTANTLY's INSTANTLY_CHECK_EMAIL_VERIFICATION_STATUS tool input.
 */
type INSTANTLY_CHECK_EMAIL_VERIFICATION_STATUS_INPUT = {
  /**
   * Email
   * Format: email
   * @description Email address to check verification status
   */
  email?: string;
};

/**
 * Type of INSTANTLY's INSTANTLY_CHECK_EMAIL_VERIFICATION_STATUS tool output.
 */
type INSTANTLY_CHECK_EMAIL_VERIFICATION_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Catch All
       * @description Whether the address is catch-all: true, false, or 'pending'
       */
      catch_all: boolean | null;
      /**
       * Credits
       * @description Remaining verification credits after this check
       * @default null
       */
      credits: number | null;
      /**
       * Credits Used
       * @description Number of verification credits used
       * @default null
       */
      credits_used: number | null;
      /**
       * Email
       * Format: email
       * @description Email address that was verified
       */
      email: string;
      /**
       * Status
       * @description Request status: success or error; not the verification result
       * @default null
       * @enum {string|null}
       */
      status: "success" | "error" | null;
      /**
       * Verification Status
       * @description Verification status: pending, verified, or invalid
       * @enum {string}
       */
      verification_status: "pending" | "verified" | "invalid";
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
 * Type of INSTANTLY's INSTANTLY_COUNT_UNREAD_EMAILS tool input.
 */
type INSTANTLY_COUNT_UNREAD_EMAILS_INPUT = object;

/**
 * Type of INSTANTLY's INSTANTLY_COUNT_UNREAD_EMAILS tool output.
 */
type INSTANTLY_COUNT_UNREAD_EMAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of unread emails
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
 * Type of INSTANTLY's INSTANTLY_CREATE_AI_ENRICHMENT tool input.
 */
type INSTANTLY_CREATE_AI_ENRICHMENT_INPUT = {
  /**
   * Auto Update
   * @description Automatically enrich new leads added after job creation
   * @default null
   */
  auto_update: boolean | null;
  /**
   * Input Columns
   * @description List of input column names to feed into the model
   * @default null
   */
  input_columns: string[] | null;
  /**
   * Limit
   * @description Maximum number of leads to enrich (1–1,000,000)
   * @default null
   */
  limit: number | null;
  /**
   * Model Version
   * @description Model version to use. Allowed values: 3.5, 4.0, gpt-4o, gpt-5, gpt-5-mini, gpt-5-nano, o3, gpt-4.1, claude-3.7-sonnet, claude-3.5-sonnet
   */
  model_version?: string;
  /**
   * Output Column
   * @description Column name to store the AI enrichment result
   */
  output_column?: string;
  /**
   * Overwrite
   * @description Whether to overwrite existing values in the output column
   * @default null
   */
  overwrite: boolean | null;
  /**
   * Prompt
   * @description Custom prompt to use (when template_id is not provided)
   * @default null
   */
  prompt: string | null;
  /**
   * Resource Id
   * @description UUID of the resource (campaign or list) to enrich
   */
  resource_id?: string;
  /**
   * Resource Type
   * @description Type of resource: 1 = Campaign, 2 = List
   */
  resource_type?: number;
  /**
   * Show State
   * @description Return the current state of the enrichment job in the response
   * @default null
   */
  show_state: boolean | null;
  /**
   * Skip Leads Without Email
   * @description Skip leads that do not have an email address
   * @default null
   */
  skip_leads_without_email: boolean | null;
  /**
   * Status
   * @description Filter by job status: 1=pending, 2=processing, 3=completed, 4=failed
   * @default null
   */
  status: number | null;
  /**
   * Template Id
   * @description ID of a pre-defined prompt template to use
   * @default null
   */
  template_id: number | null;
  /**
   * Use Instantly Account
   * @description Whether to use Instantly's own account for API calls
   * @default null
   */
  use_instantly_account: boolean | null;
};

/**
 * Type of INSTANTLY's INSTANTLY_CREATE_AI_ENRICHMENT tool output.
 */
type INSTANTLY_CREATE_AI_ENRICHMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Auto Update
       * @description Whether auto-update is enabled for new leads
       */
      auto_update: boolean;
      /**
       * Input Columns
       * @description Columns used as model input
       */
      input_columns: string[];
      /**
       * Limit
       * @description Number of leads scheduled for enrichment
       */
      limit: number;
      /**
       * Model Version
       * @description Model version used for enrichment
       */
      model_version: string;
      /**
       * Output Column
       * @description Column where AI results are stored
       */
      output_column: string;
      /**
       * Overwrite
       * @description Whether existing values will be overwritten
       */
      overwrite: boolean;
      /**
       * Resource Id
       * @description UUID of the enriched resource
       */
      resource_id: string;
      /**
       * Resource Type
       * @description 1 = Campaign, 2 = List
       */
      resource_type: number;
      /**
       * Status
       * @description Job status: 1=pending, 2=processing, 3=completed, 4=failed
       */
      status: number;
      /**
       * Template Id
       * @description Prompt template ID used, if any
       * @default null
       */
      template_id: number | null;
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
 * Type of INSTANTLY's INSTANTLY_CREATE_API_KEY tool input.
 */
type INSTANTLY_CREATE_API_KEY_INPUT = {
  /**
   * Name
   * @description Human-readable name for the new API key
   */
  name?: string;
  /**
   * Scopes
   * @description List of permission scopes for the key; e.g., 'campaigns:create', 'campaigns:read'.
   */
  scopes?: string[];
};

/**
 * Type of INSTANTLY's INSTANTLY_CREATE_API_KEY tool output.
 */
type INSTANTLY_CREATE_API_KEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the API key (UUID)
       */
      id: string;
      /**
       * Key
       * @description The actual API key value
       */
      key: string;
      /**
       * Name
       * @description Name of the API key
       */
      name: string;
      /**
       * Organization Id
       * @description Owning organization ID (UUID)
       */
      organization_id: string;
      /**
       * Scopes
       * @description Granted permission scopes
       */
      scopes: string[];
      /**
       * Timestamp Created
       * @description ISO 8601 timestamp when the key was created
       */
      timestamp_created: string;
      /**
       * Timestamp Updated
       * @description ISO 8601 timestamp when the key was last updated
       */
      timestamp_updated: string;
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
 * Type of INSTANTLY's INSTANTLY_CREATE_CAMPAIGN tool input.
 */
type INSTANTLY_CREATE_CAMPAIGN_INPUT = {
  /**
   * Allow Risky Contacts
   * @description Allow risky contacts
   * @default null
   */
  allow_risky_contacts: boolean | null;
  /**
   * Auto Variant Select
   * @description Auto variant select settings
   * @default null
   */
  auto_variant_select: {
      [key: string]: unknown;
  } | null;
  /**
   * Bcc List
   * @description BCC list
   * @default null
   */
  bcc_list: string[] | null;
  /**
   * Campaign Schedule
   * @description Schedule configuration for the campaign
   */
  campaign_schedule?: {
      /**
       * End Date
       * @description Campaign end date in ISO 8601 format
       * @default null
       */
      end_date: string | null;
      /**
       * Schedules
       * @description List of schedules for the campaign
       */
      schedules: {
          /**
           * Days
           * @description Mapping of day index strings '0' (Sun) to '6' (Sat) to booleans
           */
          days: {
              [key: string]: boolean;
          };
          /**
           * Name
           * @description Name of the schedule
           */
          name: string;
          /**
           * Timezone
           * @description Timezone for this schedule, e.g., 'UTC' or 'America/Los_Angeles'
           */
          timezone: string;
          /**
           * Timing
           * @description Timing window for this schedule
           */
          timing: {
              /**
               * From
               * @description Schedule start time in HH:mm format
               */
              from: string;
              /**
               * To
               * @description Schedule end time in HH:mm format
               */
              to: string;
          };
      }[];
      /**
       * Start Date
       * @description Campaign start date in ISO 8601 format
       * @default null
       */
      start_date: string | null;
  };
  /**
   * Cc List
   * @description CC list
   * @default null
   */
  cc_list: string[] | null;
  /**
   * Daily Limit
   * @description Daily sending limit
   * @default null
   */
  daily_limit: number | null;
  /**
   * Daily Max Leads
   * @description Max new leads to contact daily
   * @default null
   */
  daily_max_leads: number | null;
  /**
   * Disable Bounce Protect
   * @description Disable bounce protect
   * @default null
   */
  disable_bounce_protect: boolean | null;
  /**
   * Email Gap
   * @description Gap between emails in minutes
   * @default null
   */
  email_gap: number | null;
  /**
   * Email List
   * @description Accounts to use for sending
   * @default null
   */
  email_list: string[] | null;
  /**
   * Email Tag List
   * @description Tag IDs to use for sending
   * @default null
   */
  email_tag_list: string[] | null;
  /**
   * First Email Text Only
   * @description First email as text-only
   * @default null
   */
  first_email_text_only: boolean | null;
  /**
   * Insert Unsubscribe Header
   * @description Insert unsubscribe header
   * @default null
   */
  insert_unsubscribe_header: boolean | null;
  /**
   * Is Evergreen
   * @description Whether the campaign is evergreen
   * @default null
   */
  is_evergreen: boolean | null;
  /**
   * Link Tracking
   * @description Track link clicks
   * @default null
   */
  link_tracking: boolean | null;
  /**
   * Match Lead Esp
   * @description Match lead by ESP
   * @default null
   */
  match_lead_esp: boolean | null;
  /**
   * Name
   * @description Name of the campaign
   */
  name?: string;
  /**
   * Open Tracking
   * @description Track opens
   * @default null
   */
  open_tracking: boolean | null;
  /**
   * Owned By
   * @description Owner ID
   * @default null
   */
  owned_by: string | null;
  /**
   * Pl Value
   * @description Value of every positive lead
   * @default null
   */
  pl_value: number | null;
  /**
   * Prioritize New Leads
   * @description Prioritize new leads
   * @default null
   */
  prioritize_new_leads: boolean | null;
  /**
   * Provider Routing Rules
   * @description Provider routing rules
   * @default null
   */
  provider_routing_rules: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Random Wait Max
   * @description Max random wait in minutes
   * @default null
   */
  random_wait_max: number | null;
  /**
   * Sequences
   * @description Email sequences; only first element is used; add steps inside it
   * @default null
   */
  sequences: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Stop For Company
   * @description Stop for company on reply
   * @default null
   */
  stop_for_company: boolean | null;
  /**
   * Stop On Auto Reply
   * @description Stop on auto-reply
   * @default null
   */
  stop_on_auto_reply: boolean | null;
  /**
   * Stop On Reply
   * @description Stop campaign on reply
   * @default null
   */
  stop_on_reply: boolean | null;
  /**
   * Text Only
   * @description Send as text-only
   * @default null
   */
  text_only: boolean | null;
};

/**
 * Type of INSTANTLY's INSTANTLY_CREATE_CAMPAIGN tool output.
 */
type INSTANTLY_CREATE_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Allow Risky Contacts
       * @description Allow risky contacts
       * @default null
       */
      allow_risky_contacts: boolean | null;
      /**
       * Auto Variant Select
       * @description Auto variant select settings
       * @default null
       */
      auto_variant_select: {
          [key: string]: unknown;
      } | null;
      /**
       * Bcc List
       * @description BCC list
       * @default null
       */
      bcc_list: string[] | null;
      /**
       * Campaign Schedule
       * @description Schedule settings for the campaign
       */
      campaign_schedule: {
          /**
           * End Date
           * @description Campaign end date in ISO 8601 format
           * @default null
           */
          end_date: string | null;
          /**
           * Schedules
           * @description List of schedules for the campaign
           */
          schedules: {
              /**
               * Days
               * @description Mapping of day index strings '0' (Sun) to '6' (Sat) to booleans
               */
              days: {
                  [key: string]: boolean;
              };
              /**
               * Name
               * @description Name of the schedule
               */
              name: string;
              /**
               * Timezone
               * @description Timezone for this schedule, e.g., 'UTC' or 'America/Los_Angeles'
               */
              timezone: string;
              /**
               * Timing
               * @description Timing window for this schedule
               */
              timing: {
                  /**
                   * From
                   * @description Schedule start time in HH:mm format
                   */
                  from: string;
                  /**
                   * To
                   * @description Schedule end time in HH:mm format
                   */
                  to: string;
              };
          }[];
          /**
           * Start Date
           * @description Campaign start date in ISO 8601 format
           * @default null
           */
          start_date: string | null;
      };
      /**
       * Cc List
       * @description CC list
       * @default null
       */
      cc_list: string[] | null;
      /**
       * Daily Limit
       * @description Daily sending limit
       * @default null
       */
      daily_limit: number | null;
      /**
       * Daily Max Leads
       * @description Max new leads to contact daily
       * @default null
       */
      daily_max_leads: number | null;
      /**
       * Disable Bounce Protect
       * @description Disable bounce protect
       * @default null
       */
      disable_bounce_protect: boolean | null;
      /**
       * Email Gap
       * @description Gap between emails in minutes
       * @default null
       */
      email_gap: number | null;
      /**
       * Email List
       * @description Accounts used for sending
       * @default null
       */
      email_list: string[] | null;
      /**
       * Email Tag List
       * @description Tag IDs used for sending
       * @default null
       */
      email_tag_list: string[] | null;
      /**
       * First Email Text Only
       * @description First email as text-only
       * @default null
       */
      first_email_text_only: boolean | null;
      /**
       * Id
       * @description Unique identifier of the campaign
       */
      id: string;
      /**
       * Insert Unsubscribe Header
       * @description Insert unsubscribe header
       * @default null
       */
      insert_unsubscribe_header: boolean | null;
      /**
       * Is Evergreen
       * @description Whether the campaign is evergreen
       * @default null
       */
      is_evergreen: boolean | null;
      /**
       * Link Tracking
       * @description Track link clicks
       * @default null
       */
      link_tracking: boolean | null;
      /**
       * Match Lead Esp
       * @description Match lead by ESP
       * @default null
       */
      match_lead_esp: boolean | null;
      /**
       * Name
       * @description Name of the campaign
       */
      name: string;
      /**
       * Open Tracking
       * @description Track opens
       * @default null
       */
      open_tracking: boolean | null;
      /**
       * Organization
       * @description Organization ID
       * @default null
       */
      organization: string | null;
      /**
       * Owned By
       * @description Owner ID
       * @default null
       */
      owned_by: string | null;
      /**
       * Pl Value
       * @description Value of every positive lead
       * @default null
       */
      pl_value: number | null;
      /**
       * Prioritize New Leads
       * @description Prioritize new leads
       * @default null
       */
      prioritize_new_leads: boolean | null;
      /**
       * Provider Routing Rules
       * @description Provider routing rules
       * @default null
       */
      provider_routing_rules: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Random Wait Max
       * @description Max random wait in minutes
       * @default null
       */
      random_wait_max: number | null;
      /**
       * Sequences
       * @description Email sequences configured
       * @default null
       */
      sequences: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Status
       * @description Status code of the campaign; e.g., 0=Draft,1=Active,2=Paused,3=Completed,4=Running Subsequences,-99=Account Suspended,-1=Accounts Unhealthy,-2=Bounce Protect
       */
      status: number;
      /**
       * Stop For Company
       * @description Stop for company on reply
       * @default null
       */
      stop_for_company: boolean | null;
      /**
       * Stop On Auto Reply
       * @description Stop on auto-reply
       * @default null
       */
      stop_on_auto_reply: boolean | null;
      /**
       * Stop On Reply
       * @description Stop campaign on reply
       * @default null
       */
      stop_on_reply: boolean | null;
      /**
       * Text Only
       * @description Send as text-only
       * @default null
       */
      text_only: boolean | null;
      /**
       * Timestamp Created
       * @description ISO timestamp when the campaign was created
       */
      timestamp_created: string;
      /**
       * Timestamp Updated
       * @description ISO timestamp when the campaign was last updated
       */
      timestamp_updated: string;
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
 * Type of INSTANTLY's INSTANTLY_CREATE_INBOX_PLACEMENT_TEST tool input.
 */
type INSTANTLY_CREATE_INBOX_PLACEMENT_TEST_INPUT = {
  /**
   * Automations
   * @description Automations to trigger based on test results or schedule
   * @default null
   */
  automations: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Campaign Id
   * @description UUID of the campaign to associate with the test
   * @default null
   */
  campaign_id: string | null;
  /**
   * Delivery Mode
   * @description Delivery mode: 1=one by one, 2=all together
   * @default null
   * @enum {integer|null}
   */
  delivery_mode: 1 | 2 | null;
  /**
   * Description
   * @description Optional description of the test
   * @default null
   */
  description: string | null;
  /**
   * Email Body
   * @description HTML body of the test email
   */
  email_body?: string;
  /**
   * Email Subject
   * @description Subject line for the test email
   */
  email_subject?: string;
  /**
   * Emails
   * @description List of recipient email addresses for the test
   */
  emails?: string[];
  /**
   * Name
   * @description Name of the inbox placement test
   */
  name?: string;
  /**
   * Not Sending Status
   * @description Reason for not sending: 'daily_limits_hit' or 'other'
   * @default null
   * @enum {string|null}
   */
  not_sending_status: "daily_limits_hit" | "other" | null;
  /**
   * Recipients Labels
   * @description Label settings for email service providers; fetch options via GET /inbox-placement-tests/email-service-provider-options
   * @default null
   */
  recipients_labels: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Run Immediately
   * @description If true, trigger the test immediately in addition to schedule
   * @default null
   */
  run_immediately: boolean | null;
  /**
   * InboxPlacementSchedule
   * @description Schedule settings for automated inbox placement tests.
   * @default null
   */
  schedule: {
      /**
       * Days
       * @description Object map of weekdays when the test should run (keys 0-6 as strings), e.g., {"1": true, "3": true, "5": true}
       */
      days: {
          [key: string]: boolean;
      };
      /**
       * Timezone
       * @description IANA timezone for scheduling, e.g., 'UTC' or 'America/Los_Angeles'
       */
      timezone: string;
      /**
       * Timing
       * @description Object with time window for the test in 24-hour format, e.g., {"from": "09:00", "to": "17:00"}
       */
      timing: {
          [key: string]: string;
      };
  } | null;
  /**
   * Sending Method
   * @description Sending method: 1=From Instantly, 2=From outside Instantly
   * @enum {integer}
   */
  sending_method?: 1 | 2;
  /**
   * Status
   * @description Initial status: 1=Active, 2=Paused, 3=Completed
   * @default null
   * @enum {integer|null}
   */
  status: 1 | 2 | 3 | null;
  /**
   * Tags
   * @description List of tag UUIDs to apply to the test
   * @default null
   */
  tags: string[] | null;
  /**
   * Test Code
   * @description External identifier for tests sent from outside Instantly
   * @default null
   */
  test_code: string | null;
  /**
   * Text Only
   * @description If true, send plain-text only and disable open tracking
   * @default null
   */
  text_only: boolean | null;
  /**
   * Timestamp Next Run
   * @description Next run timestamp in ISO 8601 format
   * @default null
   */
  timestamp_next_run: string | null;
  /**
   * Type
   * @description Test type: 1=one-time, 2=automated
   * @enum {integer}
   */
  type?: 1 | 2;
};

/**
 * Type of INSTANTLY's INSTANTLY_CREATE_INBOX_PLACEMENT_TEST tool output.
 */
type INSTANTLY_CREATE_INBOX_PLACEMENT_TEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Automations
       * @description Configured automations
       * @default null
       */
      automations: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Campaign Id
       * @description Associated campaign UUID, if any
       * @default null
       */
      campaign_id: string | null;
      /**
       * Delivery Mode
       * @description Delivery mode: 1=one by one, 2=all together
       * @default null
       * @enum {integer|null}
       */
      delivery_mode: 1 | 2 | null;
      /**
       * Description
       * @description Description of the test
       * @default null
       */
      description: string | null;
      /**
       * Email Body
       * @description HTML body used for the test email
       */
      email_body: string;
      /**
       * Email Subject
       * @description Subject line used for the test email
       */
      email_subject: string;
      /**
       * Emails
       * @description Input list of recipient email addresses
       */
      emails: string[];
      /**
       * Id
       * @description Unique identifier of the test (UUID)
       */
      id: string;
      /**
       * Name
       * @description Name of the inbox placement test
       */
      name: string;
      /**
       * Not Sending Status
       * @description Reason for not sending: 'daily_limits_hit' or 'other'
       * @default null
       * @enum {string|null}
       */
      not_sending_status: "daily_limits_hit" | "other" | null;
      /**
       * Organization Id
       * @description Organization UUID
       */
      organization_id: string;
      /**
       * Recipients
       * @description Actual seed recipients used by Instantly
       */
      recipients: string[];
      /**
       * Recipients Labels
       * @description Label settings for email service providers and types
       */
      recipients_labels: {
          [key: string]: unknown;
      }[];
      /**
       * Schedule
       * @description Schedule settings for automated tests
       * @default null
       */
      schedule: {
          [key: string]: unknown;
      } | null;
      /**
       * Sending Method
       * @description Sending method: 1=From Instantly, 2=From outside Instantly
       * @enum {integer}
       */
      sending_method: 1 | 2;
      /**
       * Status
       * @description Current status: 1=Active, 2=Paused, 3=Completed
       * @default null
       * @enum {integer|null}
       */
      status: 1 | 2 | 3 | null;
      /**
       * Tags
       * @description Tag UUIDs applied to the test
       * @default null
       */
      tags: string[] | null;
      /**
       * Test Code
       * @description External identifier for tests sent from outside Instantly
       * @default null
       */
      test_code: string | null;
      /**
       * Text Only
       * @description If true, open tracking is disabled (text-only mode)
       * @default null
       */
      text_only: boolean | null;
      /**
       * Timestamp Created
       * @description Creation timestamp in ISO 8601 format
       */
      timestamp_created: string;
      /**
       * Timestamp Next Run
       * @description ISO timestamp for the next scheduled run
       * @default null
       */
      timestamp_next_run: string | null;
      /**
       * Type
       * @description Test type: 1=one-time, 2=automated
       * @enum {integer}
       */
      type: 1 | 2;
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
 * Type of INSTANTLY's INSTANTLY_CREATE_LEAD tool input.
 */
type INSTANTLY_CREATE_LEAD_INPUT = {
  /**
   * Campaign
   * @description UUID of the campaign to associate the lead with
   * @default null
   */
  campaign: string | null;
  /**
   * Company Name
   * @description Company name of the lead
   * @default null
   */
  company_name: string | null;
  /**
   * Email
   * @description Email address of the lead
   * @default null
   */
  email: string | null;
  /**
   * First Name
   * @description First name of the lead
   * @default null
   */
  first_name: string | null;
  /**
   * Last Name
   * @description Last name of the lead
   * @default null
   */
  last_name: string | null;
  /**
   * Lt Interest Status
   * @description Lead interest status; allowed values: 0=Out of Office, 1=Interested, 2=Meeting Booked, 3=Meeting Completed, 4=Closed, -1=Not Interested, -2=Wrong Person, -3=Lost
   * @default null
   * @enum {integer|null}
   */
  lt_interest_status: -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | null;
  /**
   * Personalization
   * @description Personalized note or message for the lead
   * @default null
   */
  personalization: string | null;
  /**
   * Phone
   * @description Phone number of the lead
   * @default null
   */
  phone: string | null;
  /**
   * Website
   * @description Website URL of the lead
   * @default null
   */
  website: string | null;
};

/**
 * Type of INSTANTLY's INSTANTLY_CREATE_LEAD tool output.
 */
type INSTANTLY_CREATE_LEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Campaign
       * @description UUID of the associated campaign or null
       * @default null
       */
      campaign: string | null;
      /**
       * Company Domain
       * @description Domain of the lead's company
       */
      company_domain: string;
      /**
       * Company Name
       * @description Lead company name or null
       * @default null
       */
      company_name: string | null;
      /**
       * Email
       * @description Email address of the lead or null
       * @default null
       */
      email: string | null;
      /**
       * Email Click Count
       * @description Number of times the lead clicked links in emails
       */
      email_click_count: number;
      /**
       * Email Clicked Step
       * @description Index of the last email step clicked or null
       * @default null
       */
      email_clicked_step: number | null;
      /**
       * Email Clicked Variant
       * @description Variant number of the last email clicked or null
       * @default null
       */
      email_clicked_variant: number | null;
      /**
       * Email Open Count
       * @description Number of times the lead opened emails
       */
      email_open_count: number;
      /**
       * Email Opened Step
       * @description Index of the last email step opened or null
       * @default null
       */
      email_opened_step: number | null;
      /**
       * Email Opened Variant
       * @description Variant number of the last email opened or null
       * @default null
       */
      email_opened_variant: number | null;
      /**
       * Email Replied Step
       * @description Index of the last email step replied to or null
       * @default null
       */
      email_replied_step: number | null;
      /**
       * Email Replied Variant
       * @description Variant number of the last email replied to or null
       * @default null
       */
      email_replied_variant: number | null;
      /**
       * Email Reply Count
       * @description Number of times the lead replied to emails
       */
      email_reply_count: number;
      /**
       * First Name
       * @description Lead first name or null
       * @default null
       */
      first_name: string | null;
      /**
       * Id
       * @description UUID of the created lead
       */
      id: string;
      /**
       * Last Name
       * @description Lead last name or null
       * @default null
       */
      last_name: string | null;
      /**
       * Last Step From
       * @description Source of the last step or null
       * @default null
       */
      last_step_from: string | null;
      /**
       * Last Step Id
       * @description UUID of the last step or null
       * @default null
       */
      last_step_id: string | null;
      /**
       * Last Step Timestamp Executed
       * @description ISO 8601 timestamp when last step executed or null
       * @default null
       */
      last_step_timestamp_executed: string | null;
      /**
       * Lt Interest Status
       * @description Lead interest status code (same enum as request)
       */
      lt_interest_status: number;
      /**
       * Organization
       * @description UUID of the organization
       */
      organization: string;
      /**
       * Payload
       * @description Custom variables for the lead, if any
       * @default null
       */
      payload: {
          [key: string]: unknown;
      } | null;
      /**
       * Personalization
       * @description Personalization text or null
       * @default null
       */
      personalization: string | null;
      /**
       * Phone
       * @description Lead phone number or null
       * @default null
       */
      phone: string | null;
      /**
       * Status
       * @description Lead status code: 1=Active, 2=Paused, 3=Completed, -1=Bounced, -2=Unsubscribed, -3=Skipped
       */
      status: number;
      /**
       * Status Summary
       * @description Summary of the most recent step executed
       */
      status_summary: {
          /**
           * From Field
           * @description Source of the status update
           */
          from_field: string;
          /**
           * Step Id
           * @description UUID of the step that was executed
           */
          stepID: string;
          /**
           * Timestamp Executed
           * @description ISO 8601 timestamp when the step was executed
           */
          timestamp_executed: string;
      };
      /**
       * Status Summary Subseq
       * @description Summary of the subsequence step executed
       */
      status_summary_subseq: {
          /**
           * From Field
           * @description Source of the status update
           */
          from_field: string;
          /**
           * Step Id
           * @description UUID of the step that was executed
           */
          stepID: string;
          /**
           * Timestamp Executed
           * @description ISO 8601 timestamp when the step was executed
           */
          timestamp_executed: string;
      };
      /**
       * Subsequence Id
       * @description UUID of the subsequence or null
       * @default null
       */
      subsequence_id: string | null;
      /**
       * Timestamp Created
       * @description ISO 8601 timestamp when the lead was created
       */
      timestamp_created: string;
      /**
       * Timestamp Updated
       * @description ISO 8601 timestamp when the lead was last updated
       */
      timestamp_updated: string;
      /**
       * Verification Status
       * @description Lead verification status code
       */
      verification_status: number;
      /**
       * Website
       * @description Lead website URL or null
       * @default null
       */
      website: string | null;
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
 * Type of INSTANTLY's INSTANTLY_CREATE_LEAD_LIST tool input.
 */
type INSTANTLY_CREATE_LEAD_LIST_INPUT = {
  /**
   * Has Enrichment Task
   * @description Whether to run enrichment on added leads
   * @default null
   */
  has_enrichment_task: boolean | null;
  /**
   * Name
   * @description Name of the lead list
   */
  name?: string;
  /**
   * Owned By
   * @description Owner user ID (UUID); defaults to creator if not provided
   * @default null
   */
  owned_by: string | null;
};

/**
 * Type of INSTANTLY's INSTANTLY_CREATE_LEAD_LIST tool output.
 */
type INSTANTLY_CREATE_LEAD_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has Enrichment Task
       * @description Whether enrichment runs on added leads
       * @default null
       */
      has_enrichment_task: boolean | null;
      /**
       * Id
       * @description Unique identifier for the lead list
       */
      id: string;
      /**
       * Name
       * @description Lead list name
       */
      name: string;
      /**
       * Organization Id
       * @description Owning organization ID
       */
      organization_id: string;
      /**
       * Owned By
       * @description Owner user ID (UUID)
       * @default null
       */
      owned_by: string | null;
      /**
       * Timestamp Created
       * @description Creation timestamp (ISO 8601 date-time)
       */
      timestamp_created: string;
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
 * Type of INSTANTLY's INSTANTLY_CREATE_WEBHOOK tool input.
 */
type INSTANTLY_CREATE_WEBHOOK_INPUT = {
  /**
   * Campaign
   * @description Filter webhook events to a specific campaign by its UUID; null for all campaigns
   * @default null
   */
  campaign: string | null;
  /**
   * Custom Interest Value
   * @description Custom interest value for custom label events; corresponds to LeadLabel.interest_status
   * @default null
   */
  custom_interest_value: number | null;
  /**
   * Event Type
   * @description Event that triggers the webhook; use 'all_events' to subscribe to all events. See GET /webhooks/event-types for valid values
   * @default null
   */
  event_type: string | null;
  /**
   * Target Hook Url
   * @description Target URL to send webhook payloads; must start with http:// or https://
   */
  target_hook_url?: string;
};

/**
 * Type of INSTANTLY's INSTANTLY_CREATE_WEBHOOK tool output.
 */
type INSTANTLY_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Campaign
       * @description Campaign UUID filter if set, otherwise null
       * @default null
       */
      campaign: string | null;
      /**
       * Custom Interest Value
       * @description Custom interest value for custom label events, if set
       * @default null
       */
      custom_interest_value: number | null;
      /**
       * Event Type
       * @description Subscribed event type if set, otherwise null
       * @default null
       */
      event_type: string | null;
      /**
       * Id
       * @description Unique identifier for the webhook
       */
      id: string;
      /**
       * Organization
       * @description Workspace or organization UUID that owns this webhook
       */
      organization: string;
      /**
       * Target Hook Url
       * @description Configured target URL for webhook deliveries
       */
      target_hook_url: string;
      /**
       * Timestamp Created
       * @description Creation timestamp in ISO 8601 format
       */
      timestamp_created: string;
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
 * Type of INSTANTLY's INSTANTLY_DELETE_API_KEY tool input.
 */
type INSTANTLY_DELETE_API_KEY_INPUT = {
  /**
   * Id
   * @description UUID of the API key to delete
   */
  id?: string;
};

/**
 * Type of INSTANTLY's INSTANTLY_DELETE_API_KEY tool output.
 */
type INSTANTLY_DELETE_API_KEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier for the API key
       */
      id: string;
      /**
       * Key
       * @description The value of the API key
       */
      key: string;
      /**
       * Name
       * @description Name of the API key
       */
      name: string;
      /**
       * Organization Id
       * @description UUID of the organization that owns the API key
       */
      organization_id: string;
      /**
       * Scopes
       * @description List of scopes associated with the API key
       */
      scopes: string[];
      /**
       * Timestamp Created
       * @description ISO 8601 timestamp when the API key was created
       */
      timestamp_created: string;
      /**
       * Timestamp Updated
       * @description ISO 8601 timestamp when the API key was last updated
       */
      timestamp_updated: string;
  } & {
      [key: string]: unknown;
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
 * Type of INSTANTLY's INSTANTLY_DELETE_CAMPAIGN tool input.
 */
type INSTANTLY_DELETE_CAMPAIGN_INPUT = {
  /**
   * Id
   * @description UUID of the campaign to delete
   */
  id?: string;
};

/**
 * Type of INSTANTLY's INSTANTLY_DELETE_CAMPAIGN tool output.
 */
type INSTANTLY_DELETE_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description ID of the deleted campaign
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
 * Type of INSTANTLY's INSTANTLY_DELETE_LEAD tool input.
 */
type INSTANTLY_DELETE_LEAD_INPUT = {
  /**
   * Id
   * @description UUID of the lead to delete
   */
  id?: string;
};

/**
 * Type of INSTANTLY's INSTANTLY_DELETE_LEAD tool output.
 */
type INSTANTLY_DELETE_LEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Company Domain
       * @description Domain of the lead's company
       * @default null
       */
      company_domain: string | null;
      /**
       * Email Click Count
       * @description Number of times the lead clicked links in emails
       * @default null
       */
      email_click_count: number | null;
      /**
       * Email Open Count
       * @description Number of times the lead opened emails
       * @default null
       */
      email_open_count: number | null;
      /**
       * Email Reply Count
       * @description Number of replies from the lead
       * @default null
       */
      email_reply_count: number | null;
      /**
       * Id
       * @description Unique identifier for the lead
       */
      id: string;
      /**
       * Organization
       * @description Organization UUID associated with the lead
       */
      organization: string;
      /**
       * Status
       * @description Current status of the lead
       * @default null
       */
      status: string | null;
      /**
       * Status Summary
       * @description Summary of the lead's status transition
       * @default null
       */
      status_summary: {
          [key: string]: string;
      } | null;
      /**
       * Timestamp Created
       * @description ISO 8601 timestamp when the lead was created
       */
      timestamp_created: string;
      /**
       * Timestamp Updated
       * @description ISO 8601 timestamp when the lead was last updated
       */
      timestamp_updated: string;
  } & {
      [key: string]: unknown;
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
 * Type of INSTANTLY's INSTANTLY_DELETE_LEAD_LIST tool input.
 */
type INSTANTLY_DELETE_LEAD_LIST_INPUT = {
  /**
   * Id
   * @description UUID of the lead list to delete
   */
  id?: string;
};

/**
 * Type of INSTANTLY's INSTANTLY_DELETE_LEAD_LIST tool output.
 */
type INSTANTLY_DELETE_LEAD_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has Enrichment Task
       * @description Whether enrichment job is configured for this lead list
       * @default null
       */
      has_enrichment_task: boolean | null;
      /**
       * Id
       * @description Unique identifier of the deleted lead list
       */
      id: string;
      /**
       * Name
       * @description Name of the deleted lead list
       */
      name: string;
      /**
       * Organization Id
       * @description UUID of the organization owning the lead list
       */
      organization_id: string;
      /**
       * Owned By
       * @description UUID of the user who owns the lead list
       * @default null
       */
      owned_by: string | null;
      /**
       * Timestamp Created
       * @description ISO 8601 timestamp when the lead list was created
       */
      timestamp_created: string;
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
 * Type of INSTANTLY's INSTANTLY_DELETE_WEBHOOK tool input.
 */
type INSTANTLY_DELETE_WEBHOOK_INPUT = {
  /**
   * Id
   * @description UUID of the webhook to delete
   */
  id?: string;
};

/**
 * Type of INSTANTLY's INSTANTLY_DELETE_WEBHOOK tool output.
 */
type INSTANTLY_DELETE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Campaign
       * @description UUID of the campaign to filter events (null for all campaigns)
       * @default null
       */
      campaign: string | null;
      /**
       * Custom Interest Value
       * @description Custom interest value for custom label events (null if not applicable)
       * @default null
       */
      custom_interest_value: number | null;
      /**
       * Event Type
       * @description Event type that triggers the webhook ('all_events' for all events, null for custom label events)
       * @default null
       */
      event_type: string | null;
      /**
       * Id
       * @description UUID of the deleted webhook
       */
      id: string;
      /**
       * Organization
       * @description UUID of the organization that owns this webhook
       */
      organization: string;
      /**
       * Target Hook Url
       * @description Target URL to send webhook payloads
       */
      target_hook_url: string;
      /**
       * Timestamp Created
       * @description ISO 8601 timestamp when the webhook was created
       */
      timestamp_created: string;
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
 * Type of INSTANTLY's INSTANTLY_DISABLE_ACCOUNT_WARMUP tool input.
 */
type INSTANTLY_DISABLE_ACCOUNT_WARMUP_INPUT = {
  /**
   * Emails
   * @description List of emails to disable warmup for (max 100).
   * @default null
   */
  emails: string[] | null;
  /**
   * Excluded Emails
   * @description List of emails to exclude when `include_all_emails` is true (max 100).
   * @default null
   */
  excluded_emails: string[] | null;
  /**
   * Include All Emails
   * @description If true, disable warmup on all accounts.
   * @default null
   */
  include_all_emails: boolean | null;
};

/**
 * Type of INSTANTLY's INSTANTLY_DISABLE_ACCOUNT_WARMUP tool output.
 */
type INSTANTLY_DISABLE_ACCOUNT_WARMUP_OUTPUT = {
  /**
   * Created At
   * @description Timestamp when the job was created (ISO 8601 date-time).
   */
  created_at?: string;
  /**
   * Data
   * @description Additional job data.
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Entity Id
   * @description ID of the related entity for the job.
   * @default null
   */
  entity_id: string | null;
  /**
   * Entity Type
   * @description Entity type associated with the job.
   * @enum {string}
   */
  entity_type?: "list" | "campaign" | "workspace";
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Id
   * @description Unique identifier for the background job.
   */
  id?: string;
  /**
   * Progress
   * @description Job progress percentage (0-100).
   */
  progress?: number;
  /**
   * Status
   * @description Job status.
   * @enum {string}
   */
  status?: "pending" | "in-progress" | "success" | "failed";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Type
   * @description Background job type; includes 'update-warmup-accounts'.
   */
  type?: string;
  /**
   * Updated At
   * @description Timestamp when the job was last updated (ISO 8601 date-time).
   */
  updated_at?: string;
  /**
   * User Id
   * @description ID of the user who triggered the job.
   * @default null
   */
  user_id: string | null;
  /**
   * Workspace Id
   * @description Workspace ID.
   */
  workspace_id?: string;
};

/**
 * Type of INSTANTLY's INSTANTLY_ENABLE_ACCOUNT_WARMUP tool input.
 */
type INSTANTLY_ENABLE_ACCOUNT_WARMUP_INPUT = {
  /**
   * Emails
   * @description List of email addresses to enable warmup for; max 100 items
   * @default null
   */
  emails: string[] | null;
  /**
   * Excluded Emails
   * @description List of email addresses to exclude when include_all_emails is true; max 100 items
   * @default null
   */
  excluded_emails: string[] | null;
  /**
   * Include All Emails
   * @description If true, enable warmup for all email accounts in the workspace
   * @default null
   */
  include_all_emails: boolean | null;
};

/**
 * Type of INSTANTLY's INSTANTLY_ENABLE_ACCOUNT_WARMUP tool output.
 */
type INSTANTLY_ENABLE_ACCOUNT_WARMUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the job was created (ISO 8601)
       */
      created_at: string;
      /**
       * Data
       * @description Additional data for the job
       */
      data: {
          [key: string]: unknown;
      };
      /**
       * Entity Id
       * @description Related entity ID (UUID)
       * @default null
       */
      entity_id: string | null;
      /**
       * Entity Type
       * @description Entity type related to the job
       * @enum {string}
       */
      entity_type: "list" | "campaign" | "workspace";
      /**
       * Id
       * @description Unique identifier for the background job
       */
      id: string;
      /**
       * Progress
       * @description Progress percentage of the job
       */
      progress: number;
      /**
       * Status
       * @description Status of the job
       * @enum {string}
       */
      status: "pending" | "in-progress" | "success" | "failed";
      /**
       * Type
       * @description Type of job
       * @enum {string}
       */
      type: "move-leads" | "import-leads" | "export-leads" | "update-warmup-accounts" | "rename-variable";
      /**
       * Updated At
       * @description Timestamp when the job was last updated (ISO 8601)
       */
      updated_at: string;
      /**
       * User Id
       * @description ID of the user who triggered the job
       * @default null
       */
      user_id: string | null;
      /**
       * Workspace Id
       * @description Workspace ID (UUID)
       */
      workspace_id: string;
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
 * Type of INSTANTLY's INSTANTLY_GET_CAMPAIGN tool input.
 */
type INSTANTLY_GET_CAMPAIGN_INPUT = {
  /**
   * Id
   * Format: uuid
   * @description UUID of the campaign to retrieve
   */
  id?: string;
};

/**
 * Type of INSTANTLY's INSTANTLY_GET_CAMPAIGN tool output.
 */
type INSTANTLY_GET_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Allow Risky Contacts
       * @description Whether to allow sending to risky contacts
       * @default null
       */
      allow_risky_contacts: boolean | null;
      /**
       * AutoVariantSelect
       * @description Auto variant selection rules (structure may vary by campaign)
       * @default null
       */
      auto_variant_select: {
          [key: string]: unknown;
      } | null;
      /**
       * Bcc List
       * @description List of BCC email addresses
       */
      bcc_list: string[];
      /**
       * Campaign Schedule
       * @description Scheduling configuration for the campaign
       */
      campaign_schedule: {
          /**
           * End Date
           * Format: date-time
           * @description Schedule end date/time in ISO 8601 format
           * @default null
           */
          end_date: string | null;
          /**
           * Schedules
           * @description List of daily schedules
           */
          schedules: {
              /**
               * Days
               * @description Mapping of weekdays (0=Sunday to 6=Saturday) to whether sending is enabled
               */
              days: {
                  [key: string]: boolean;
              };
              /**
               * Name
               * @description Name of this schedule entry
               */
              name: string;
              /**
               * Timezone
               * @description Timezone in IANA format, e.g., 'America/Los_Angeles'
               */
              timezone: string;
              /**
               * Timing
               * @description Timing configuration for a schedule entry
               */
              timing: {
                  /**
                   * From
                   * @description Start time in HH:MM format
                   */
                  from_: string;
                  /**
                   * To
                   * @description End time in HH:MM format
                   */
                  to: string;
              };
          }[];
          /**
           * Start Date
           * Format: date-time
           * @description Schedule start date/time in ISO 8601 format
           * @default null
           */
          start_date: string | null;
      };
      /**
       * Cc List
       * @description List of CC email addresses
       */
      cc_list: string[];
      /**
       * Daily Limit
       * @description Daily send limit for the campaign
       * @default null
       */
      daily_limit: number | null;
      /**
       * Daily Max Leads
       * @description Maximum leads processed per day
       * @default null
       */
      daily_max_leads: number | null;
      /**
       * Disable Bounce Protect
       * @description Whether bounce protection is disabled
       * @default null
       */
      disable_bounce_protect: boolean | null;
      /**
       * Email Gap
       * @description Gap between emails in the sequence (minutes)
       * @default null
       */
      email_gap: number | null;
      /**
       * Email List
       * @description List of sending account email addresses
       */
      email_list: string[];
      /**
       * Email Tag List
       * @description List of tag IDs applied to this campaign
       */
      email_tag_list: string[];
      /**
       * First Email Text Only
       * @description Whether the first email is text only
       * @default null
       */
      first_email_text_only: boolean | null;
      /**
       * Id
       * @description Unique campaign identifier
       */
      id: string;
      /**
       * Insert Unsubscribe Header
       * @description Whether to insert an unsubscribe header in emails
       * @default null
       */
      insert_unsubscribe_header: boolean | null;
      /**
       * Is Evergreen
       * @description Whether this campaign runs on evergreen mode
       * @default null
       */
      is_evergreen: boolean | null;
      /**
       * Link Tracking
       * @description Whether link tracking is enabled
       * @default null
       */
      link_tracking: boolean | null;
      /**
       * Match Lead Esp
       * @description Match lead email service provider settings
       * @default null
       */
      match_lead_esp: boolean | null;
      /**
       * Name
       * @description Name of the campaign
       */
      name: string;
      /**
       * Open Tracking
       * @description Whether open tracking is enabled
       * @default null
       */
      open_tracking: boolean | null;
      /**
       * Organization
       * @description Organization UUID owning this campaign
       * @default null
       */
      organization: string | null;
      /**
       * Owned By
       * @description User UUID who owns this campaign
       * @default null
       */
      owned_by: string | null;
      /**
       * Pl Value
       * @description Value assigned for each positive lead, if configured
       * @default null
       */
      pl_value: number | null;
      /**
       * Prioritize New Leads
       * @description Whether to prioritize newly added leads
       * @default null
       */
      prioritize_new_leads: boolean | null;
      /**
       * Provider Routing Rules
       * @description Provider routing rules list
       */
      provider_routing_rules: {
          [key: string]: unknown;
      }[];
      /**
       * Random Wait Max
       * @description Maximum random wait time between emails (minutes)
       * @default null
       */
      random_wait_max: number | null;
      /**
       * Sequences
       * @description Email sequence definitions (each entry has steps and metadata)
       */
      sequences: {
          [key: string]: unknown;
      }[];
      /**
       * Status
       * @description Campaign status: 0=Draft, 1=Active, 2=Paused, 3=Completed, 4=Running Subsequences, -99=Account Suspended, -1=Accounts Unhealthy, -2=Bounce Protect
       */
      status: number;
      /**
       * Stop For Company
       * @description Stop campaign for the entire company on a reply
       * @default null
       */
      stop_for_company: boolean | null;
      /**
       * Stop On Auto Reply
       * @description Stop campaign on auto-reply
       * @default null
       */
      stop_on_auto_reply: boolean | null;
      /**
       * Stop On Reply
       * @description Stop campaign on first reply
       * @default null
       */
      stop_on_reply: boolean | null;
      /**
       * Text Only
       * @description Whether to send emails as text only
       * @default null
       */
      text_only: boolean | null;
      /**
       * Timestamp Created
       * Format: date-time
       * @description Creation timestamp in ISO 8601
       */
      timestamp_created: string;
      /**
       * Timestamp Updated
       * Format: date-time
       * @description Last update timestamp in ISO 8601
       */
      timestamp_updated: string;
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
 * Type of INSTANTLY's INSTANTLY_GET_CAMPAIGN_ANALYTICS tool input.
 */
type INSTANTLY_GET_CAMPAIGN_ANALYTICS_INPUT = {
  /**
   * End Date
   * @description End date filter (YYYY-MM-DD)
   * @default null
   */
  end_date: string | null;
  /**
   * Exclude Total Leads Count
   * @description If true, exclude total leads count to speed response
   * @default false
   */
  exclude_total_leads_count: boolean | null;
  /**
   * Id
   * @description Campaign UUID to retrieve analytics for a single campaign
   * @default null
   */
  id: string | null;
  /**
   * Ids
   * @description List of campaign UUIDs to retrieve analytics for multiple campaigns
   * @default null
   */
  ids: string[] | null;
  /**
   * Start Date
   * @description Start date filter (YYYY-MM-DD)
   * @default null
   */
  start_date: string | null;
};

/**
 * Type of INSTANTLY's INSTANTLY_GET_CAMPAIGN_ANALYTICS tool output.
 */
type INSTANTLY_GET_CAMPAIGN_ANALYTICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of campaign analytics data
       */
      items: {
          /**
           * Bounced Count
           * @description Number of bounced leads
           */
          bounced_count: number;
          /**
           * Campaign Id
           * @description Unique identifier of the campaign
           */
          campaign_id: string;
          /**
           * Campaign Is Evergreen
           * @description Whether the campaign is evergreen
           */
          campaign_is_evergreen: boolean;
          /**
           * Campaign Name
           * @description Name of the campaign
           */
          campaign_name: string;
          /**
           * Campaign Status
           * @description Status code of the campaign; e.g., 0=Draft,1=Active,2=Paused,3=Completed,4=Running Subsequences,-99=Account Suspended,-1=Accounts Unhealthy,-2=Bounce Protect
           */
          campaign_status: number;
          /**
           * Completed Count
           * @description Number of leads who completed all steps
           */
          completed_count: number;
          /**
           * Contacted Count
           * @description Number of leads contacted
           */
          contacted_count: number;
          /**
           * Emails Sent Count
           * @description Total emails sent across sequences
           */
          emails_sent_count: number;
          /**
           * Leads Count
           * @description Total number of leads
           */
          leads_count: number;
          /**
           * Link Click Count
           * @description Number of link clicks by leads
           */
          link_click_count: number;
          /**
           * New Leads Contacted Count
           * @description Number of new leads contacted during the period
           */
          new_leads_contacted_count: number;
          /**
           * Open Count
           * @description Number of leads who opened at least one email
           */
          open_count: number;
          /**
           * Reply Count
           * @description Number of leads who replied at least once
           */
          reply_count: number;
          /**
           * Total Opportunities
           * @description Number of unique opportunities created
           */
          total_opportunities: number;
          /**
           * Total Opportunity Value
           * @description Sum of opportunity values
           */
          total_opportunity_value: number;
          /**
           * Unsubscribed Count
           * @description Number of unsubscribed leads
           */
          unsubscribed_count: number;
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
 * Type of INSTANTLY's INSTANTLY_GET_DAILY_CAMPAIGN_ANALYTICS tool input.
 */
type INSTANTLY_GET_DAILY_CAMPAIGN_ANALYTICS_INPUT = {
  /**
   * Campaign Id
   * @description Campaign ID (UUID); omit to retrieve analytics for all campaigns
   * @default null
   */
  campaign_id: string | null;
  /**
   * Campaign Status
   * @description Filter by campaign status. Allowed values: 0=Draft, 1=Active, 2=Paused, 3=Completed, 4=Running Subsequences, -99=Account Suspended, -1=Accounts Unhealthy, -2=Bounce Protect
   * @default null
   */
  campaign_status: number | null;
  /**
   * End Date
   * @description End date (inclusive) for analytics in YYYY-MM-DD format
   * @default null
   */
  end_date: string | null;
  /**
   * Start Date
   * @description Start date (inclusive) for analytics in YYYY-MM-DD format
   * @default null
   */
  start_date: string | null;
};

/**
 * Type of INSTANTLY's INSTANTLY_GET_DAILY_CAMPAIGN_ANALYTICS tool output.
 */
type INSTANTLY_GET_DAILY_CAMPAIGN_ANALYTICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of per-day analytics entries
       */
      items: {
          /**
           * Clicks
           * @description Total links clicked
           */
          clicks: number;
          /**
           * Date
           * @description Date of entry in format YYYY-MM-DD
           */
          date: string;
          /**
           * Opened
           * @description Total emails opened
           */
          opened: number;
          /**
           * Replies
           * @description Total replies
           */
          replies: number;
          /**
           * Sent
           * @description Total emails sent
           */
          sent: number;
          /**
           * Unique Clicks
           * @description Total unique link clicks (unique leads)
           */
          unique_clicks: number;
          /**
           * Unique Opened
           * @description Total unique opens
           */
          unique_opened: number;
          /**
           * Unique Replies
           * @description Total unique replies
           */
          unique_replies: number;
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
 * Type of INSTANTLY's INSTANTLY_GET_EMAIL_SERVICE_PROVIDER_OPTIONS tool input.
 */
type INSTANTLY_GET_EMAIL_SERVICE_PROVIDER_OPTIONS_INPUT = object;

/**
 * Type of INSTANTLY's INSTANTLY_GET_EMAIL_SERVICE_PROVIDER_OPTIONS tool output.
 */
type INSTANTLY_GET_EMAIL_SERVICE_PROVIDER_OPTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of available email service provider options
       */
      items: {
          /**
           * Esp
           * @description Email service provider, e.g., 'Google'
           */
          esp: string;
          /**
           * Region
           * @description Region, e.g., 'North America'
           */
          region: string;
          /**
           * Sub Region
           * @description Sub-region, e.g., 'US'
           */
          sub_region: string;
          /**
           * Type
           * @description Type of service, e.g., 'Professional'
           */
          type: string;
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
 * Type of INSTANTLY's INSTANTLY_GET_INBOX_PLACEMENT_TEST tool input.
 */
type INSTANTLY_GET_INBOX_PLACEMENT_TEST_INPUT = {
  /**
   * Id
   * @description UUID of the inbox placement test
   */
  id?: string;
  /**
   * With Metadata
   * @description Whether to include campaign and tags metadata in response
   * @default false
   */
  with_metadata: boolean | null;
};

/**
 * Type of INSTANTLY's INSTANTLY_GET_INBOX_PLACEMENT_TEST tool output.
 */
type INSTANTLY_GET_INBOX_PLACEMENT_TEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Automations
       * @description Automations triggered on conditions
       * @default null
       */
      automations: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Campaign Id
       * @description Associated campaign UUID
       * @default null
       */
      campaign_id: string | null;
      /**
       * Delivery Mode
       * @description Sending mode: 1=one-by-one, 2=all together
       * @default null
       */
      delivery_mode: number | null;
      /**
       * Description
       * @description Test description
       * @default null
       */
      description: string | null;
      /**
       * Email Body
       * @description Email body used for the test
       */
      email_body: string;
      /**
       * Email Subject
       * @description Email subject used for the test
       */
      email_subject: string;
      /**
       * Emails
       * @description Recipient addresses used for the test
       * @default null
       */
      emails: string[] | null;
      /**
       * Id
       * @description Unique inbox placement test identifier
       */
      id: string;
      /**
       * Metadata
       * @description Additional metadata when with_metadata=true
       * @default null
       */
      metadata: {
          /**
           * Campaign
           * @description Associated campaign details
           */
          campaign: {
              /**
               * Id
               * @description Campaign UUID
               */
              id: string;
              /**
               * Name
               * @description Campaign name
               */
              name: string;
          };
          /**
           * Tags
           * @description Mapping of tag UUIDs to tag details
           */
          tags: {
              [key: string]: {
                  /**
                   * Id
                   * @description Tag UUID
                   */
                  id: string;
                  /**
                   * Label
                   * @description Tag label
                   */
                  label: string;
              };
          };
      } | null;
      /**
       * Name
       * @description Test name
       */
      name: string;
      /**
       * Not Sending Status
       * @description Reason for not sending, e.g., daily_limits_hit
       * @default null
       */
      not_sending_status: string | null;
      /**
       * Organization Id
       * @description Organization UUID
       */
      organization_id: string;
      /**
       * Recipients
       * @description Resolved recipient addresses (read-only)
       */
      recipients: string[];
      /**
       * Recipients Labels
       * @description Email providers and their types labels
       */
      recipients_labels: {
          [key: string]: unknown;
      }[];
      /**
       * Schedule
       * @description Scheduling details for automated inbox placement tests.
       * @default null
       */
      schedule: {
          /**
           * Days
           * @description List of weekdays (0=Sunday to 6=Saturday) when the test runs
           */
          days: number[];
          /**
           * Timezone
           * @description Timezone in IANA format, e.g., 'America/Los_Angeles'
           */
          timezone: string;
          /**
           * Timing
           * @description Time of day the test runs in HH:MM format
           */
          timing: string;
      } | null;
      /**
       * Sending Method
       * @description 1=sent from Instantly, 2=sent from outside Instantly
       * @default null
       */
      sending_method: number | null;
      /**
       * Status
       * @description 1=Active; 2=Paused; 3=Completed
       * @default null
       */
      status: number | null;
      /**
       * Tags
       * @description Tag UUIDs used when sending
       * @default null
       */
      tags: string[] | null;
      /**
       * Test Code
       * @description Code for identifying tests in outside-Instanly sends
       * @default null
       */
      test_code: string | null;
      /**
       * Text Only
       * @description If true, disables open tracking
       * @default null
       */
      text_only: boolean | null;
      /**
       * Timestamp Created
       * Format: date-time
       * @description Creation timestamp in ISO 8601
       */
      timestamp_created: string;
      /**
       * Timestamp Next Run
       * Format: date-time
       * @description Next scheduled run timestamp in ISO 8601
       * @default null
       */
      timestamp_next_run: string | null;
      /**
       * Type
       * @description Test type: 1=one-time, 2=automated
       */
      type: number;
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
 * Type of INSTANTLY's INSTANTLY_GET_LEAD tool input.
 */
type INSTANTLY_GET_LEAD_INPUT = {
  /**
   * Id
   * @description UUID of the lead
   */
  id?: string;
};

/**
 * Type of INSTANTLY's INSTANTLY_GET_LEAD tool output.
 */
type INSTANTLY_GET_LEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assigned To
       * @description UUID of the user assigned to the lead
       * @default null
       */
      assigned_to: string | null;
      /**
       * Campaign
       * @description UUID of the campaign associated with the lead
       * @default null
       */
      campaign: string | null;
      /**
       * Company Domain
       * @description Domain of the company associated with the lead
       */
      company_domain: string;
      /**
       * Company Name
       * @description Company name of the lead
       * @default null
       */
      company_name: string | null;
      /**
       * Email
       * @description Email address of the lead
       * @default null
       */
      email: string | null;
      /**
       * Email Click Count
       * @description Number of times links in emails were clicked by this lead
       */
      email_click_count: number;
      /**
       * Email Clicked Step
       * @description Index of the last email step clicked
       * @default null
       */
      email_clicked_step: number | null;
      /**
       * Email Clicked Variant
       * @description Variant of the last clicked email
       * @default null
       */
      email_clicked_variant: number | null;
      /**
       * Email Open Count
       * @description Number of times emails were opened for this lead
       */
      email_open_count: number;
      /**
       * Email Opened Step
       * @description Index of the last opened email step
       * @default null
       */
      email_opened_step: number | null;
      /**
       * Email Opened Variant
       * @description Variant of the last opened email
       * @default null
       */
      email_opened_variant: number | null;
      /**
       * Email Replied Step
       * @description Index of the last email step replied to
       * @default null
       */
      email_replied_step: number | null;
      /**
       * Email Replied Variant
       * @description Variant of the last replied email
       * @default null
       */
      email_replied_variant: number | null;
      /**
       * Email Reply Count
       * @description Number of times emails were replied to by this lead
       */
      email_reply_count: number;
      /**
       * Esp Code
       * @description ESP code (e.g., 1=Google, 2=Microsoft, 3=Zoho, etc.)
       */
      esp_code: number;
      /**
       * First Name
       * @description First name of the lead
       * @default null
       */
      first_name: string | null;
      /**
       * Id
       * @description UUID of the lead
       */
      id: string;
      /**
       * Is Website Visitor
       * @description Whether the lead is a website visitor
       * @default null
       */
      is_website_visitor: boolean | null;
      /**
       * Last Contacted From
       * @description Source of the last contact event
       * @default null
       */
      last_contacted_from: string | null;
      /**
       * Last Name
       * @description Last name of the lead
       * @default null
       */
      last_name: string | null;
      /**
       * Last Step From
       * @description Source of the last executed step
       * @default null
       */
      last_step_from: string | null;
      /**
       * Last Step Id
       * @description UUID of the last executed step
       * @default null
       */
      last_step_id: string | null;
      /**
       * Last Step Timestamp Executed
       * @description ISO 8601 timestamp when the last step was executed
       * @default null
       */
      last_step_timestamp_executed: string | null;
      /**
       * Lt Interest Status
       * @description Lead interest status code
       */
      lt_interest_status: number;
      /**
       * Organization
       * @description UUID of the organization owning the lead
       */
      organization: string;
      /**
       * Payload
       * @description Custom variables for the lead; values may be string, number, boolean, or null
       * @default null
       */
      payload: {
          [key: string]: string | number | boolean | null;
      } | null;
      /**
       * Personalization
       * @description Personalization text for the lead
       * @default null
       */
      personalization: string | null;
      /**
       * Phone
       * @description Phone number of the lead
       * @default null
       */
      phone: string | null;
      /**
       * Status
       * @description Lead status: 1=Active, 2=Paused, 3=Completed, -1=Bounced, -2=Unsubscribed, -3=Skipped
       * @enum {integer}
       */
      status: 1 | 2 | 3 | -1 | -2 | -3;
      /**
       * Status Summary
       * @description Summary details of the initial status change
       */
      status_summary: {
          /**
           * From
           * @description Source of the status change
           */
          from_: string;
          /**
           * Step Id
           * @description UUID of the step executed
           */
          stepID: string;
          /**
           * Timestamp Executed
           * @description ISO 8601 timestamp when this status was executed
           */
          timestamp_executed: string;
      };
      /**
       * Status Summary Subseq
       * @description Summary details of the subsequence status change
       */
      status_summary_subseq: {
          /**
           * From
           * @description Source of the subsequence status change
           */
          from_: string;
          /**
           * Step Id
           * @description UUID of the subsequence step executed
           */
          stepID: string;
          /**
           * Timestamp Executed
           * @description ISO 8601 timestamp when this subsequence status was executed
           */
          timestamp_executed: string;
      };
      /**
       * Subsequence Id
       * @description UUID of the subsequence for the lead
       * @default null
       */
      subsequence_id: string | null;
      /**
       * Timestamp Created
       * @description ISO 8601 timestamp when the lead was created
       */
      timestamp_created: string;
      /**
       * Timestamp Last Touch
       * @description ISO 8601 timestamp of the last touch event
       * @default null
       */
      timestamp_last_touch: string | null;
      /**
       * Timestamp Updated
       * @description ISO 8601 timestamp when the lead was last updated
       */
      timestamp_updated: string;
      /**
       * Upload Method
       * @description Method by which the lead was uploaded
       * @enum {string}
       */
      upload_method: "manual" | "api" | "website-visitor";
      /**
       * Uploaded By User
       * @description UUID of the user who uploaded the lead
       * @default null
       */
      uploaded_by_user: string | null;
      /**
       * Verification Status
       * @description Verification status code of the lead
       */
      verification_status: number;
      /**
       * Website
       * @description Website URL of the lead
       * @default null
       */
      website: string | null;
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
 * Type of INSTANTLY's INSTANTLY_GET_LEAD_LIST tool input.
 */
type INSTANTLY_GET_LEAD_LIST_INPUT = {
  /**
   * Id
   * @description UUID of the lead list
   */
  id?: string;
};

/**
 * Type of INSTANTLY's INSTANTLY_GET_LEAD_LIST tool output.
 */
type INSTANTLY_GET_LEAD_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has Enrichment Task
       * @description Whether enrichment runs on every added lead
       * @default null
       */
      has_enrichment_task: boolean | null;
      /**
       * Id
       * @description Unique identifier for the lead list
       */
      id: string;
      /**
       * Name
       * @description Name of the lead list
       */
      name: string;
      /**
       * Organization Id
       * @description Organization ID that owns this lead list
       */
      organization_id: string;
      /**
       * Owned By
       * @description User ID of the owner of this lead list
       * @default null
       */
      owned_by: string | null;
      /**
       * Timestamp Created
       * @description ISO 8601 timestamp when the lead list was created
       */
      timestamp_created: string;
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
 * Type of INSTANTLY's INSTANTLY_GET_VERIFICATION_STATS_FOR_LEAD_LIST tool input.
 */
type INSTANTLY_GET_VERIFICATION_STATS_FOR_LEAD_LIST_INPUT = {
  /**
   * Id
   * @description UUID of the lead list
   */
  id?: string;
};

/**
 * Type of INSTANTLY's INSTANTLY_GET_VERIFICATION_STATS_FOR_LEAD_LIST tool output.
 */
type INSTANTLY_GET_VERIFICATION_STATS_FOR_LEAD_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Stats
       * @description Verification status counts for the lead list
       */
      stats: {
          /**
           * Catch All
           * @description Count of catch-all leads
           */
          catch_all: number;
          /**
           * Invalid
           * @description Count of invalid leads
           */
          invalid: number;
          /**
           * Job Change
           * @description Count of job-change leads
           */
          job_change: number;
          /**
           * Risky
           * @description Count of risky leads
           */
          risky: number;
          /**
           * Verification Job Pending Leadfinder
           * @description Count pending for LeadFinder
           */
          verification_job_pending_leadfinder: number;
          /**
           * Verification Job Pending User
           * @description Count pending for user
           */
          verification_job_pending_user: number;
          /**
           * Verified
           * @description Count of verified leads
           */
          verified: number;
      };
      /**
       * Total Leads
       * @description Total number of leads in the list
       */
      total_leads: number;
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
 * Type of INSTANTLY's INSTANTLY_GET_WEBHOOK tool input.
 */
type INSTANTLY_GET_WEBHOOK_INPUT = {
  /**
   * Id
   * @description UUID of the webhook
   */
  id?: string;
};

/**
 * Type of INSTANTLY's INSTANTLY_GET_WEBHOOK tool output.
 */
type INSTANTLY_GET_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Campaign
       * @description Optional campaign UUID filter (null means all campaigns)
       * @default null
       */
      campaign: string | null;
      /**
       * Custom Interest Value
       * @description Custom interest value used for custom label events
       * @default null
       */
      custom_interest_value: number | null;
      /**
       * Event Type
       * @description Event type that triggers the webhook subscription
       * @default null
       * @enum {string|null}
       */
      event_type: "all_events" | "email_sent" | "email_opened" | "email_link_clicked" | "reply_received" | "email_bounced" | "lead_unsubscribed" | "campaign_completed" | "account_error" | "lead_neutral" | null;
      /**
       * Id
       * @description Unique webhook identifier
       */
      id: string;
      /**
       * Organization
       * @description Workspace UUID owning the webhook
       */
      organization: string;
      /**
       * Target Hook Url
       * @description Target URL for webhook deliveries (HTTPS)
       */
      target_hook_url: string;
      /**
       * Timestamp Created
       * @description ISO 8601 timestamp when the webhook was created
       */
      timestamp_created: string;
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
 * Type of INSTANTLY's INSTANTLY_GET_WEBHOOK_EVENT tool input.
 */
type INSTANTLY_GET_WEBHOOK_EVENT_INPUT = {
  /**
   * Id
   * Format: uuid
   * @description UUID of the webhook event to retrieve
   */
  id?: string;
};

/**
 * Type of INSTANTLY's INSTANTLY_GET_WEBHOOK_EVENT tool output.
 */
type INSTANTLY_GET_WEBHOOK_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error Message
       * @description Error message if the webhook failed
       * @default null
       */
      error_message: string | null;
      /**
       * Id
       * Format: uuid
       * @description Unique identifier for the webhook event
       */
      id: string;
      /**
       * Lead Email
       * @description Lead email associated with this event
       * @default null
       */
      lead_email: string | null;
      /**
       * Organization Id
       * Format: uuid
       * @description Organization UUID owning this webhook event
       */
      organization_id: string;
      /**
       * Payload
       * @description JSON payload that was sent or attempted
       */
      payload: {
          [key: string]: unknown;
      };
      /**
       * Response Time Ms
       * @description Response time in milliseconds
       * @default null
       */
      response_time_ms: number | null;
      /**
       * Retry Count
       * @description Number of retry attempts made
       */
      retry_count: number;
      /**
       * Retry Group Id
       * Format: uuid
       * @description Grouping UUID for retries
       * @default null
       */
      retry_group_id: string | null;
      /**
       * Retry Successful
       * @description Whether the retry was successful
       * @default null
       */
      retry_successful: boolean | null;
      /**
       * Status Code
       * @description HTTP status code returned by the endpoint
       * @default null
       */
      status_code: number | null;
      /**
       * Success
       * @description Whether the webhook call was successful
       */
      success: boolean;
      /**
       * Timestamp Created
       * Format: date-time
       * @description Creation timestamp in ISO 8601 format
       */
      timestamp_created: string;
      /**
       * Timestamp Created Date
       * Format: date
       * @description Creation date in YYYY-MM-DD format for partitioning
       */
      timestamp_created_date: string;
      /**
       * Timestamp Next Retry
       * Format: date-time
       * @description Next retry time if applicable (ISO 8601)
       * @default null
       */
      timestamp_next_retry: string | null;
      /**
       * Webhook Url
       * @description Target URL where the webhook was sent
       */
      webhook_url: string;
      /**
       * Will Retry
       * @description Whether the webhook will be retried
       */
      will_retry: boolean;
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
 * Type of INSTANTLY's INSTANTLY_LIST_ACCOUNTS tool input.
 */
type INSTANTLY_LIST_ACCOUNTS_INPUT = {
  /**
   * Limit
   * @description Maximum number of items to return, between 1 and 100
   * @default null
   */
  limit: number | null;
  /**
   * Provider Code
   * @description Filter by email provider: 1 Custom IMAP/SMTP; 2 Google; 3 Microsoft; 4 AWS
   * @default null
   */
  provider_code: number | null;
  /**
   * Search
   * @description Search string to filter accounts, e.g., domain or email substring
   * @default null
   */
  search: string | null;
  /**
   * Starting After
   * @description Cursor for pagination. Use 'next_starting_after' from previous response
   * @default null
   */
  starting_after: string | null;
  /**
   * Status
   * @description Filter by account status: 1 Active; 2 Paused; -1 Connection Error; -2 Soft Bounce Error; -3 Sending Error
   * @default null
   */
  status: number | null;
  /**
   * Tag Ids
   * @description Comma-separated list of tag UUIDs to filter accounts
   * @default null
   */
  tag_ids: string | null;
};

/**
 * Type of INSTANTLY's INSTANTLY_LIST_ACCOUNTS tool output.
 */
type INSTANTLY_LIST_ACCOUNTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of account objects
       */
      items: {
          /**
           * Added By
           * @description UUID of the user who added the account
           * @default null
           */
          added_by: string | null;
          /**
           * Daily Limit
           * @description Daily sending limit for the account
           * @default null
           */
          daily_limit: number | null;
          /**
           * Dfy Password Changed
           * @description Indicates if 'done-for-you' password was changed
           * @default null
           */
          dfy_password_changed: boolean | null;
          /**
           * Email
           * @description Email address of the account
           */
          email: string;
          /**
           * Enable Slow Ramp
           * @description Indicates if slow ramp is enabled
           * @default null
           */
          enable_slow_ramp: boolean | null;
          /**
           * First Name
           * @description First name associated with the account
           */
          first_name: string;
          /**
           * Inbox Placement Test Limit
           * @description Limit for inbox placement tests
           * @default null
           */
          inbox_placement_test_limit: number | null;
          /**
           * Is Managed Account
           * @description Indicates if this is a managed account
           */
          is_managed_account: boolean;
          /**
           * Last Name
           * @description Last name associated with the account
           */
          last_name: string;
          /**
           * Modified By
           * @description UUID of the user who last modified the account
           * @default null
           */
          modified_by: string | null;
          /**
           * Organization
           * @description Organization UUID
           */
          organization: string;
          /**
           * Provider Code
           * @description Provider code: 1 Custom IMAP/SMTP; 2 Google; 3 Microsoft; 4 AWS
           */
          provider_code: number;
          /**
           * Sending Gap
           * @description Minimum minutes gap between sends, range 0-1440
           */
          sending_gap: number;
          /**
           * Setup Pending
           * @description Indicates if setup is pending
           */
          setup_pending: boolean;
          /**
           * Stat Warmup Score
           * @description Score value used in warmup stats
           * @default null
           */
          stat_warmup_score: number | null;
          /**
           * Status
           * @description Account connection status: 1 Active; 2 Paused; -1 Connection Error; -2 Soft Bounce Error; -3 Sending Error
           */
          status: number;
          /**
           * Status Message
           * @description Detailed status messages and errors
           */
          status_message: {
              [key: string]: unknown;
          };
          /**
           * Timestamp Created
           * @description Account creation timestamp in ISO 8601 format
           */
          timestamp_created: string;
          /**
           * Timestamp Last Used
           * @description Timestamp when the account was last used (ISO 8601)
           * @default null
           */
          timestamp_last_used: string | null;
          /**
           * Timestamp Updated
           * @description Last update timestamp in ISO 8601 format
           */
          timestamp_updated: string;
          /**
           * Timestamp Warmup Start
           * @description Timestamp when warmup started (ISO 8601)
           * @default null
           */
          timestamp_warmup_start: string | null;
          /**
           * Tracking Domain Name
           * @description Tracking domain name for email links
           * @default null
           */
          tracking_domain_name: string | null;
          /**
           * Tracking Domain Status
           * @description Status of the tracking domain
           * @default null
           */
          tracking_domain_status: string | null;
          /**
           * Warmup
           * @description Warmup configuration and status details
           */
          warmup: {
              [key: string]: unknown;
          };
          /**
           * Warmup Pool Id
           * @description UUID of the warmup pool
           * @default null
           */
          warmup_pool_id: string | null;
          /**
           * Warmup Status
           * @description Warmup status: 0 Paused; 1 Active; -1 Banned; -2 Spam Folder Unknown; -3 Permanent Suspension
           */
          warmup_status: number;
      }[];
      /**
       * Next Starting After
       * @description Cursor to use for the next page request
       * @default null
       */
      next_starting_after: string | null;
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
 * Type of INSTANTLY's INSTANTLY_LIST_API_KEYS tool input.
 */
type INSTANTLY_LIST_API_KEYS_INPUT = {
  /**
   * Limit
   * @description Number of API keys to return, between 1 and 100
   * @default null
   */
  limit: number | null;
  /**
   * Starting After
   * @description ID of the last API key from previous page for pagination
   * @default null
   */
  starting_after: string | null;
};

/**
 * Type of INSTANTLY's INSTANTLY_LIST_API_KEYS tool output.
 */
type INSTANTLY_LIST_API_KEYS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of API key objects
       */
      items: {
          /**
           * Id
           * @description API key ID (UUID)
           */
          id: string;
          /**
           * Key
           * @description The API key value (read-only)
           */
          key: string;
          /**
           * Name
           * @description Display name of the API key
           */
          name: string;
          /**
           * Organization Id
           * @description Owning organization ID (UUID)
           */
          organization_id: string;
          /**
           * Scopes
           * @description Granted scopes for the API key
           */
          scopes: string[];
          /**
           * Timestamp Created
           * @description Creation time in ISO 8601 format
           */
          timestamp_created: string;
          /**
           * Timestamp Updated
           * @description Last update time in ISO 8601 format
           */
          timestamp_updated: string;
      }[];
      /**
       * Next Starting After
       * @description Cursor to retrieve the next page of API keys if present
       * @default null
       */
      next_starting_after: string | null;
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
 * Type of INSTANTLY's INSTANTLY_LIST_CAMPAIGNS tool input.
 */
type INSTANTLY_LIST_CAMPAIGNS_INPUT = {
  /**
   * Limit
   * @description Number of campaigns to return, between 1 and 100
   * @default null
   */
  limit: number | null;
  /**
   * Search
   * @description Search text to filter campaign names
   * @default null
   */
  search: string | null;
  /**
   * Starting After
   * @description UUID cursor to start listing after for pagination
   * @default null
   */
  starting_after: string | null;
  /**
   * Tag Ids
   * @description Comma-separated tag UUIDs to filter campaigns
   * @default null
   */
  tag_ids: string | null;
};

/**
 * Type of INSTANTLY's INSTANTLY_LIST_CAMPAIGNS tool output.
 */
type INSTANTLY_LIST_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of campaign objects as raw JSON dicts
       */
      items: {
          [key: string]: unknown;
      }[];
      /**
       * Next Starting After
       * @description Cursor to retrieve the next page of campaigns if present
       * @default null
       */
      next_starting_after: string | null;
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
 * Type of INSTANTLY's INSTANTLY_LIST_CUSTOM_TAGS tool input.
 */
type INSTANTLY_LIST_CUSTOM_TAGS_INPUT = {
  /**
   * Limit
   * @description Number of custom tags to return, between 1 and 100
   * @default null
   */
  limit: number | null;
  /**
   * Resource Ids
   * @description Comma-separated resource IDs (account or campaign) to filter by
   * @default null
   */
  resource_ids: string | null;
  /**
   * Search
   * @description Search text to filter custom tags by label or description
   * @default null
   */
  search: string | null;
  /**
   * Starting After
   * @description Cursor ID to start listing after for pagination
   * @default null
   */
  starting_after: string | null;
  /**
   * Tag Ids
   * @description Comma-separated tag IDs to filter by
   * @default null
   */
  tag_ids: string | null;
};

/**
 * Type of INSTANTLY's INSTANTLY_LIST_CUSTOM_TAGS tool output.
 */
type INSTANTLY_LIST_CUSTOM_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of custom tags
       */
      items: {
          /**
           * Description
           * @description Detailed description of the tag purpose
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the tag (UUID)
           */
          id: string;
          /**
           * Label
           * @description Display label of the tag
           */
          label: string;
          /**
           * Organization Id
           * @description UUID of the owning organization
           */
          organization_id: string;
          /**
           * Timestamp Created
           * @description Creation timestamp in ISO 8601 format
           */
          timestamp_created: string;
          /**
           * Timestamp Updated
           * @description Last updated timestamp in ISO 8601 format
           */
          timestamp_updated: string;
      }[];
      /**
       * Next Starting After
       * @description Cursor to retrieve the next page of custom tags if present
       * @default null
       */
      next_starting_after: string | null;
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
 * Type of INSTANTLY's INSTANTLY_LIST_DFY_EMAIL_ACCOUNT_ORDERS tool input.
 */
type INSTANTLY_LIST_DFY_EMAIL_ACCOUNT_ORDERS_INPUT = {
  /**
   * Limit
   * @description Number of DFY Email Account Orders to return, between 1 and 100
   * @default null
   */
  limit: number | null;
  /**
   * Starting After
   * @description ID of the last order from the previous page for pagination
   * @default null
   */
  starting_after: string | null;
};

/**
 * Type of INSTANTLY's INSTANTLY_LIST_DFY_EMAIL_ACCOUNT_ORDERS tool output.
 */
type INSTANTLY_LIST_DFY_EMAIL_ACCOUNT_ORDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of DFY Email Account Orders
       */
      items: {
          /**
           * Domain
           * @description Domain of the email account
           */
          domain: string;
          /**
           * Forwarding Domain
           * @description Forwarding domain, if any
           * @default null
           */
          forwarding_domain: string | null;
          /**
           * Is Pre Warmed Up
           * @description Indicates if the account is pre-warmed up
           * @default null
           */
          is_pre_warmed_up: boolean | null;
          /**
           * Timestamp Cancelled
           * @description ISO8601 timestamp when the order was cancelled, if applicable
           * @default null
           */
          timestamp_cancelled: string | null;
          /**
           * Timestamp Created
           * @description ISO8601 timestamp when the order was created
           */
          timestamp_created: string;
          /**
           * Workspace Id
           * @description Workspace ID for the order
           */
          workspace_id: string;
      }[];
      /**
       * Next Starting After
       * @description Cursor to retrieve the next page of orders if present
       * @default null
       */
      next_starting_after: string | null;
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
 * Type of INSTANTLY's INSTANTLY_LIST_EMAILS tool input.
 */
type INSTANTLY_LIST_EMAILS_INPUT = {
  /**
   * Assigned To
   * @description Filter by assignee user ID
   * @default null
   */
  assigned_to: string | null;
  /**
   * Campaign Id
   * @description Campaign ID (UUID) to filter emails
   * @default null
   */
  campaign_id: string | null;
  /**
   * Company Domain
   * @description Filter by lead company domain
   * @default null
   */
  company_domain: string | null;
  /**
   * Eaccount
   * @description Email account used to send the email
   * @default null
   */
  eaccount: string | null;
  /**
   * Email Type
   * @description Filter by email type: received, sent, or manual
   * @default null
   * @enum {string|null}
   */
  email_type: "received" | "sent" | "manual" | null;
  /**
   * Has Reminder
   * @description Filter emails that have a reminder set
   * @default null
   */
  has_reminder: boolean | null;
  /**
   * I Status
   * @description Email status to filter by
   * @default null
   */
  i_status: number | null;
  /**
   * Is Unread
   * @description Filter only unread emails
   * @default null
   */
  is_unread: boolean | null;
  /**
   * Lead
   * @description Filter by lead email address
   * @default null
   */
  lead: string | null;
  /**
   * Limit
   * @description Number of items to return, between 1 and 100
   * @default null
   */
  limit: number | null;
  /**
   * Marked As Done
   * @description Filter emails marked as done
   * @default null
   */
  marked_as_done: boolean | null;
  /**
   * Mode
   * @description Unibox mode filter: emode_focused, emode_others, or emode_all
   * @default null
   * @enum {string|null}
   */
  mode: "emode_focused" | "emode_others" | "emode_all" | null;
  /**
   * Preview Only
   * @description Filter preview-only emails
   * @default null
   */
  preview_only: boolean | null;
  /**
   * Scheduled Only
   * @description Return only scheduled emails
   * @default null
   */
  scheduled_only: boolean | null;
  /**
   * Search
   * @description Search by lead email or 'thread:<thread_id>' to filter by thread
   * @default null
   */
  search: string | null;
  /**
   * Sort Order
   * @description Sort order: asc or desc
   * @default null
   * @enum {string|null}
   */
  sort_order: "asc" | "desc" | null;
  /**
   * Starting After
   * @description Cursor ID to start listing from for pagination
   * @default null
   */
  starting_after: string | null;
};

/**
 * Type of INSTANTLY's INSTANTLY_LIST_EMAILS tool output.
 */
type INSTANTLY_LIST_EMAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of email objects as raw JSON dicts
       */
      items: {
          [key: string]: unknown;
      }[];
      /**
       * Next Starting After
       * @description Cursor to request the next page of emails if present
       * @default null
       */
      next_starting_after: string | null;
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
 * Type of INSTANTLY's INSTANTLY_LIST_INBOX_PLACEMENT_BLACKLIST_AND_SPAM_ASSASSIN_REPORTS tool input.
 */
type INSTANTLY_LIST_INBOX_PLACEMENT_BLACKLIST_AND_SPAM_ASSASSIN_REPORTS_INPUT = {
  /**
   * Date From
   * @description Filter items created at or after this timestamp (ISO 8601)
   * @default null
   */
  date_from: string | null;
  /**
   * Date To
   * @description Filter items created at or before this timestamp (ISO 8601)
   * @default null
   */
  date_to: string | null;
  /**
   * Limit
   * @description Number of items to return, between 1 and 100
   * @default null
   */
  limit: number | null;
  /**
   * Skip Blacklist Report
   * @description If true, omit blacklist_report from each item
   * @default null
   */
  skip_blacklist_report: boolean | null;
  /**
   * Skip Spam Assassin Report
   * @description If true, omit spam_assassin_report from each item
   * @default null
   */
  skip_spam_assassin_report: boolean | null;
  /**
   * Starting After
   * @description Cursor of last item from previous page for pagination
   * @default null
   */
  starting_after: string | null;
  /**
   * Test Id
   * @description Inbox Placement Test ID to filter by
   */
  test_id?: string;
};

/**
 * Type of INSTANTLY's INSTANTLY_LIST_INBOX_PLACEMENT_BLACKLIST_AND_SPAM_ASSASSIN_REPORTS tool output.
 */
type INSTANTLY_LIST_INBOX_PLACEMENT_BLACKLIST_AND_SPAM_ASSASSIN_REPORTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of report entries
       */
      items: {
          /**
           * Blacklist Report
           * @description Detailed blacklist information for the test sample.
           */
          blacklist_report: {
              /**
               * Address
               * @description Domain or IP checked
               */
              address: string;
              /**
               * Blacklisted Count
               * @description Number of blacklists listing this address
               */
              blacklisted_count: number;
              /**
               * Details
               * @description Detailed blacklist entries
               */
              details: unknown[];
              /**
               * Ip
               * @description IP portion of the check
               */
              ip: string;
              /**
               * Is Blacklisted
               * @description Whether it is currently blacklisted
               */
              is_blacklisted: boolean;
              /**
               * Is Domain
               * @description True if address is a domain
               */
              is_domain: boolean;
          };
          /**
           * Domain
           * @description Tested domain
           */
          domain: string;
          /**
           * Domain Blacklist Count
           * @description Count of domain blacklists (nullable)
           * @default null
           */
          domain_blacklist_count: number | null;
          /**
           * Domain Ip
           * @description IP address of the domain
           */
          domain_ip: string;
          /**
           * Domain Ip Blacklist Count
           * @description Count of IP blacklists (nullable)
           * @default null
           */
          domain_ip_blacklist_count: number | null;
          /**
           * Id
           * @description Unique identifier of this report entry
           */
          id: string;
          /**
           * Organization Id
           * @description Organization ID
           */
          organization_id: string;
          /**
           * Spam Assassin Report
           * @description Detailed SpamAssassin analysis for the test sample.
           */
          spam_assassin_report: {
              /**
               * Is Spam
               * @description Whether the sample was flagged as spam
               */
              is_spam: boolean;
              /**
               * Report
               * @description Raw SpamAssassin rule hits/details
               */
              report: unknown[];
              /**
               * Spam Score
               * @description Aggregate SpamAssassin score
               */
              spam_score: number;
          };
          /**
           * Spam Assassin Score
           * @description SpamAssassin score summary
           */
          spam_assassin_score: number;
          /**
           * Test Id
           * @description Inbox Placement Test ID
           */
          test_id: string;
          /**
           * Timestamp Created
           * @description Full creation timestamp (ISO 8601)
           */
          timestamp_created: string;
          /**
           * Timestamp Created Date
           * @description Creation date in YYYY-MM-DD format
           */
          timestamp_created_date: string;
      }[];
      /**
       * Next Starting After
       * @description Cursor to request the next page
       * @default null
       */
      next_starting_after: string | null;
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
 * Type of INSTANTLY's INSTANTLY_LIST_INBOX_PLACEMENT_TESTS tool input.
 */
type INSTANTLY_LIST_INBOX_PLACEMENT_TESTS_INPUT = {
  /**
   * Limit
   * @description Number of tests to return, between 1 and 100
   * @default null
   */
  limit: number | null;
  /**
   * Search
   * @description Search term to filter tests by name or content
   * @default null
   */
  search: string | null;
  /**
   * Sort Order
   * @description Sort order by id (UUIDv7 timestamp); asc or desc
   * @default null
   * @enum {string|null}
   */
  sort_order: "asc" | "desc" | null;
  /**
   * Starting After
   * @description UUID cursor to start listing after for pagination
   * @default null
   */
  starting_after: string | null;
  /**
   * Status
   * @description Filter by status: 1=Active, 2=Paused, 3=Completed
   * @default null
   * @enum {integer|null}
   */
  status: 1 | 2 | 3 | null;
};

/**
 * Type of INSTANTLY's INSTANTLY_LIST_INBOX_PLACEMENT_TESTS tool output.
 */
type INSTANTLY_LIST_INBOX_PLACEMENT_TESTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of inbox placement test objects
       */
      items: {
          /**
           * Automations
           * @description Optional list of automation configurations
           * @default null
           */
          automations: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Campaign Id
           * @description Associated campaign UUID, if any
           * @default null
           */
          campaign_id: string | null;
          /**
           * Delivery Mode
           * @description Delivery mode: 1=one by one, 2=all together
           * @default null
           * @enum {integer|null}
           */
          delivery_mode: 1 | 2 | null;
          /**
           * Description
           * @description Optional description of the test
           * @default null
           */
          description: string | null;
          /**
           * Email Body
           * @description Email body content
           */
          email_body: string;
          /**
           * Email Subject
           * @description Email subject line
           */
          email_subject: string;
          /**
           * Emails
           * @description List of email addresses to send the test to
           */
          emails: string[];
          /**
           * Id
           * @description Unique identifier of the test (UUID)
           */
          id: string;
          /**
           * Name
           * @description Name of the inbox placement test
           */
          name: string;
          /**
           * Not Sending Status
           * @description Reason for not sending, e.g., 'daily_limits_hit', 'other'
           * @default null
           */
          not_sending_status: string | null;
          /**
           * Organization Id
           * @description Organization UUID
           */
          organization_id: string;
          /**
           * Recipients
           * @description Seed recipients used in the test
           */
          recipients: string[];
          /**
           * Recipients Labels
           * @description ESP targets and types label metadata
           */
          recipients_labels: {
              [key: string]: unknown;
          }[];
          /**
           * Schedule
           * @description Schedule settings for automated tests
           */
          schedule: {
              [key: string]: unknown;
          };
          /**
           * Sending Method
           * @description Sending method: 1=From Instantly, 2=From Outside Instantly
           * @enum {integer}
           */
          sending_method: 1 | 2;
          /**
           * Status
           * @description Test status: 1=Active, 2=Paused, 3=Completed
           * @default null
           * @enum {integer|null}
           */
          status: 1 | 2 | 3 | null;
          /**
           * Tags
           * @description List of tag UUIDs associated with the test
           * @default null
           */
          tags: string[] | null;
          /**
           * Test Code
           * @description External identifier when sending outside Instantly
           * @default null
           */
          test_code: string | null;
          /**
           * Text Only
           * @description Flag to disable open tracking (text-only mode)
           * @default null
           */
          text_only: boolean | null;
          /**
           * Timestamp Created
           * @description ISO timestamp when the test was created
           */
          timestamp_created: string;
          /**
           * Timestamp Next Run
           * @description ISO timestamp for next scheduled run
           * @default null
           */
          timestamp_next_run: string | null;
          /**
           * Type
           * @description Test type: 1=one-time, 2=automated
           * @enum {integer}
           */
          type: 1 | 2;
      }[];
      /**
       * Next Starting After
       * @description Cursor to retrieve the next page of results
       * @default null
       */
      next_starting_after: string | null;
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
 * Type of INSTANTLY's INSTANTLY_LIST_LEADS tool input.
 */
type INSTANTLY_LIST_LEADS_INPUT = {
  /**
   * Campaign
   * @description Campaign ID to filter leads
   * @default null
   */
  campaign: string | null;
  /**
   * Contacts
   * @description Only include leads with these emails
   * @default null
   */
  contacts: string[] | null;
  /**
   * Excluded Ids
   * @description Exclude these lead IDs (UUID strings)
   * @default null
   */
  excluded_ids: string[] | null;
  /**
   * Filter
   * @description Lead filter status; allowed values: FILTER_VAL_CONTACTED, FILTER_VAL_NOT_CONTACTED, FILTER_VAL_COMPLETED, FILTER_VAL_UNSUBSCRIBED, FILTER_VAL_ACTIVE, FILTER_LEAD_INTERESTED, FILTER_LEAD_NOT_INTERESTED, FILTER_LEAD_MEETING_BOOKED
   * @default null
   */
  filter: string | null;
  /**
   * Ids
   * @description Only include these lead IDs (UUID strings)
   * @default null
   */
  ids: string[] | null;
  /**
   * In Campaign
   * @description Whether the lead is in any campaign
   * @default null
   */
  in_campaign: boolean | null;
  /**
   * In List
   * @description Whether the lead is in any list
   * @default null
   */
  in_list: boolean | null;
  /**
   * Limit
   * @description Page size limit between 1 and 100
   * @default null
   */
  limit: number | null;
  /**
   * List Id
   * @description Lead list ID to filter leads
   * @default null
   */
  list_id: string | null;
  /**
   * Queries
   * @description Advanced query conditions as raw JSON objects
   * @default null
   */
  queries: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Search
   * @description Search by first name, last name, or email
   * @default null
   */
  search: string | null;
  /**
   * Starting After
   * @description Cursor of last item from previous page for pagination
   * @default null
   */
  starting_after: string | null;
};

/**
 * Type of INSTANTLY's INSTANTLY_LIST_LEADS tool output.
 */
type INSTANTLY_LIST_LEADS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of leads matching the request as raw JSON objects
       */
      items: {
          [key: string]: unknown;
      }[];
      /**
       * Next Starting After
       * @description Cursor to request the next page
       * @default null
       */
      next_starting_after: string | null;
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
 * Type of INSTANTLY's INSTANTLY_LIST_LEAD_LISTS tool input.
 */
type INSTANTLY_LIST_LEAD_LISTS_INPUT = {
  /**
   * Has Enrichment Task
   * @description Filter lists that have an enrichment task
   * @default null
   */
  has_enrichment_task: boolean | null;
  /**
   * Limit
   * @description Number of lead lists to return, between 1 and 100
   * @default null
   */
  limit: number | null;
  /**
   * Search
   * @description Search text to filter lead list names
   * @default null
   */
  search: string | null;
  /**
   * Starting After
   * @description Cursor timestamp (ISO 8601) to start listing after for pagination
   * @default null
   */
  starting_after: string | null;
};

/**
 * Type of INSTANTLY's INSTANTLY_LIST_LEAD_LISTS tool output.
 */
type INSTANTLY_LIST_LEAD_LISTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of lead list objects
       */
      items: {
          /**
           * Has Enrichment Task
           * @description Whether enrichment runs on added leads
           * @default null
           */
          has_enrichment_task: boolean | null;
          /**
           * Id
           * @description Lead list UUID
           */
          id: string;
          /**
           * Name
           * @description Name of the lead list
           */
          name: string;
          /**
           * Organization Id
           * @description Organization UUID
           */
          organization_id: string;
          /**
           * Owned By
           * @description User UUID of the lead list owner
           * @default null
           */
          owned_by: string | null;
          /**
           * Timestamp Created
           * @description Creation timestamp in ISO 8601 format
           */
          timestamp_created: string;
      }[];
      /**
       * Next Starting After
       * @description Cursor to retrieve the next page of lead lists if present
       * @default null
       */
      next_starting_after: string | null;
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
 * Type of INSTANTLY's INSTANTLY_LIST_THREADS tool input.
 */
type INSTANTLY_LIST_THREADS_INPUT = {
  /**
   * Is Unread
   * @description If true, only include unread threads
   * @default null
   */
  is_unread: boolean | null;
  /**
   * Limit
   * @description Number of threads to return, between 1 and 100
   * @default null
   */
  limit: number | null;
  /**
   * Starting After
   * @description Cursor of the last thread from previous page for pagination
   * @default null
   */
  starting_after: string | null;
};

/**
 * Type of INSTANTLY's INSTANTLY_LIST_THREADS tool output.
 */
type INSTANTLY_LIST_THREADS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of email thread objects
       */
      items: {
          /**
           * Id
           * Format: uuid
           * @description Unique identifier for the thread
           */
          id: string;
          /**
           * Last Email Id
           * Format: uuid
           * @description ID of the most recent email in the thread
           * @default null
           */
          last_email_id: string | null;
          /**
           * Participants
           * @description Email addresses of participants in the thread
           */
          participants: string[];
          /**
           * Timestamp Last Activity
           * Format: date-time
           * @description Timestamp of the most recent activity in RFC3339 format
           */
          timestamp_last_activity: string;
          /**
           * Unread Count
           * @description Number of unread emails in this thread
           */
          unread_count: number;
      }[];
      /**
       * Next Starting After
       * @description Cursor for fetching the next page of results
       * @default null
       */
      next_starting_after: string | null;
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
 * Type of INSTANTLY's INSTANTLY_LIST_WEBHOOKS tool input.
 */
type INSTANTLY_LIST_WEBHOOKS_INPUT = {
  /**
   * Campaign
   * @description Filter webhooks by campaign UUID
   * @default null
   */
  campaign: string | null;
  /**
   * Event Type
   * @description Filter webhooks by event type. Allowed: all_events, email_sent, email_opened, email_link_clicked, reply_received, email_bounced, lead_unsubscribed, campaign_completed, account_error, lead_neutral, etc.
   * @default null
   */
  event_type: string | null;
  /**
   * Limit
   * @description Number of webhooks to return, between 1 and 100
   * @default null
   */
  limit: number | null;
  /**
   * Starting After
   * @description Cursor (webhook ID) to start listing after for pagination
   * @default null
   */
  starting_after: string | null;
};

/**
 * Type of INSTANTLY's INSTANTLY_LIST_WEBHOOKS tool output.
 */
type INSTANTLY_LIST_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of webhook objects
       */
      items: {
          /**
           * Campaign
           * @description Campaign UUID filter (null means all campaigns)
           * @default null
           */
          campaign: string | null;
          /**
           * Custom Interest Value
           * @description Custom interest value for label events, if applicable
           * @default null
           */
          custom_interest_value: number | null;
          /**
           * Event Type
           * @description Event type subscribed (e.g., email_sent, email_opened, etc.)
           * @default null
           */
          event_type: string | null;
          /**
           * Id
           * @description Webhook UUID
           */
          id: string;
          /**
           * Organization
           * @description Owning workspace UUID
           */
          organization: string;
          /**
           * Target Hook Url
           * @description Target URL for the webhook
           */
          target_hook_url: string;
          /**
           * Timestamp Created
           * @description Creation timestamp in ISO 8601 format
           */
          timestamp_created: string;
      }[];
      /**
       * Next Starting After
       * @description Cursor token to retrieve the next page of webhooks if present
       * @default null
       */
      next_starting_after: string | null;
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
 * Type of INSTANTLY's INSTANTLY_LIST_WEBHOOK_EVENTS tool input.
 */
type INSTANTLY_LIST_WEBHOOK_EVENTS_INPUT = {
  /**
   * From Date
   * @description Inclusive start date filter in YYYY-MM-DD format
   * @default null
   */
  from_date: string | null;
  /**
   * Limit
   * @description Number of items to return, between 1 and 100
   * @default null
   */
  limit: number | null;
  /**
   * Search
   * @description Exact match on webhook URL or lead email
   * @default null
   */
  search: string | null;
  /**
   * Starting After
   * @description Cursor for pagination. ID of the last item from the previous page
   * @default null
   */
  starting_after: string | null;
  /**
   * Success
   * @description Filter events by success status
   * @default null
   */
  success: boolean | null;
  /**
   * To Date
   * @description Inclusive end date filter in YYYY-MM-DD format
   * @default null
   */
  to_date: string | null;
};

/**
 * Type of INSTANTLY's INSTANTLY_LIST_WEBHOOK_EVENTS tool output.
 */
type INSTANTLY_LIST_WEBHOOK_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of webhook events
       */
      items: {
          /**
           * Error Message
           * @description Error message if the call failed
           * @default null
           */
          error_message: string | null;
          /**
           * Id
           * @description Unique identifier of the webhook event
           */
          id: string;
          /**
           * Lead Email
           * @description Email of the associated lead
           * @default null
           */
          lead_email: string | null;
          /**
           * Organization Id
           * @description UUID of the owning organization
           */
          organization_id: string;
          /**
           * Payload
           * @description Webhook payload object
           */
          payload: {
              [key: string]: unknown;
          };
          /**
           * Response Time Ms
           * @description Response time in milliseconds
           * @default null
           */
          response_time_ms: number | null;
          /**
           * Retry Count
           * @description Number of retry attempts
           */
          retry_count: number;
          /**
           * Retry Group Id
           * @description UUID grouping retry events
           * @default null
           */
          retry_group_id: string | null;
          /**
           * Retry Successful
           * @description Whether the retry was successful
           * @default null
           */
          retry_successful: boolean | null;
          /**
           * Status Code
           * @description HTTP status code returned by the destination
           */
          status_code: number;
          /**
           * Success
           * @description Whether the webhook call was successful
           */
          success: boolean;
          /**
           * Timestamp Created
           * @description Timestamp when the event was created (ISO 8601 format)
           */
          timestamp_created: string;
          /**
           * Timestamp Created Date
           * @description Created date partition (YYYY-MM-DD)
           */
          timestamp_created_date: string;
          /**
           * Timestamp Next Retry
           * @description Timestamp for the next retry (ISO 8601 format)
           * @default null
           */
          timestamp_next_retry: string | null;
          /**
           * Webhook Url
           * @description Target webhook URL
           */
          webhook_url: string;
          /**
           * Will Retry
           * @description Whether the webhook will be retried
           */
          will_retry: boolean;
      }[];
      /**
       * Next Starting After
       * @description Pass this value as starting_after to fetch the next page
       * @default null
       */
      next_starting_after: string | null;
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
 * Type of INSTANTLY's INSTANTLY_MARK_THREAD_AS_READ tool input.
 */
type INSTANTLY_MARK_THREAD_AS_READ_INPUT = {
  /**
   * Thread Id
   * @description UUID of the email thread to mark as read
   */
  thread_id?: string;
};

/**
 * Type of INSTANTLY's INSTANTLY_MARK_THREAD_AS_READ tool output.
 */
type INSTANTLY_MARK_THREAD_AS_READ_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the thread was marked as read
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
 * Type of INSTANTLY's INSTANTLY_MERGE_LEADS tool input.
 */
type INSTANTLY_MERGE_LEADS_INPUT = {
  /**
   * Destination Lead Id
   * @description UUID of the destination lead that will receive merged data
   */
  destination_lead_id?: string;
  /**
   * Lead Id
   * @description UUID of the source lead to be merged
   */
  lead_id?: string;
};

/**
 * Type of INSTANTLY's INSTANTLY_MERGE_LEADS tool output.
 */
type INSTANTLY_MERGE_LEADS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Campaign
       * @description UUID of the campaign associated with the lead
       * @default null
       */
      campaign: string | null;
      /**
       * Company Domain
       * @description Domain of the company associated with the lead
       */
      company_domain: string;
      /**
       * Company Name
       * @description Company name of the lead
       * @default null
       */
      company_name: string | null;
      /**
       * Email
       * @description Email address of the lead
       * @default null
       */
      email: string | null;
      /**
       * Email Click Count
       * @description Number of times links in emails were clicked by this lead
       */
      email_click_count: number;
      /**
       * Email Clicked Step
       * @description Index of the last email step clicked
       * @default null
       */
      email_clicked_step: number | null;
      /**
       * Email Clicked Variant
       * @description Variant of the last clicked email
       * @default null
       */
      email_clicked_variant: number | null;
      /**
       * Email Open Count
       * @description Number of times emails were opened for this lead
       */
      email_open_count: number;
      /**
       * Email Opened Step
       * @description Index of the last opened email step
       * @default null
       */
      email_opened_step: number | null;
      /**
       * Email Opened Variant
       * @description Variant of the last opened email
       * @default null
       */
      email_opened_variant: number | null;
      /**
       * Email Replied Step
       * @description Index of the last email step replied to
       * @default null
       */
      email_replied_step: number | null;
      /**
       * Email Replied Variant
       * @description Variant of the last replied email
       * @default null
       */
      email_replied_variant: number | null;
      /**
       * Email Reply Count
       * @description Number of times emails were replied to by this lead
       */
      email_reply_count: number;
      /**
       * First Name
       * @description First name of the lead
       * @default null
       */
      first_name: string | null;
      /**
       * Id
       * @description UUID of the lead
       */
      id: string;
      /**
       * Last Name
       * @description Last name of the lead
       * @default null
       */
      last_name: string | null;
      /**
       * Last Step From
       * @description Source of the last executed step
       * @default null
       */
      last_step_from: string | null;
      /**
       * Last Step Id
       * @description UUID of the last executed step
       * @default null
       */
      last_step_id: string | null;
      /**
       * Last Step Timestamp Executed
       * @description ISO 8601 timestamp when the last step was executed
       * @default null
       */
      last_step_timestamp_executed: string | null;
      /**
       * Lt Interest Status
       * @description Lead interest status code
       */
      lt_interest_status: number;
      /**
       * Organization
       * @description UUID of the organization owning the lead
       */
      organization: string;
      /**
       * Payload
       * @description Custom variables for the lead; values may be string, number, boolean, or null
       * @default null
       */
      payload: {
          [key: string]: string | number | boolean | null;
      } | null;
      /**
       * Personalization
       * @description Personalization text for the lead
       * @default null
       */
      personalization: string | null;
      /**
       * Phone
       * @description Phone number of the lead
       * @default null
       */
      phone: string | null;
      /**
       * Status
       * @description Lead status: 1=Active, 2=Paused, 3=Completed, -1=Bounced, -2=Unsubscribed, -3=Skipped
       * @enum {integer}
       */
      status: 1 | 2 | 3 | -1 | -2 | -3;
      /**
       * Status Summary
       * @description Summary details of the status change
       */
      status_summary: {
          /**
           * From
           * @description Source of the status change
           */
          from: string;
          /**
           * Step Id
           * @description UUID of the step executed
           */
          stepID: string;
          /**
           * Timestamp Executed
           * @description ISO 8601 timestamp when this status was executed
           */
          timestamp_executed: string;
      };
      /**
       * Status Summary Subseq
       * @description Summary details of the subsequence status change
       */
      status_summary_subseq: {
          /**
           * From
           * @description Source of the subsequence status change
           */
          from: string;
          /**
           * Step Id
           * @description UUID of the subsequence step executed
           */
          stepID: string;
          /**
           * Timestamp Executed
           * @description ISO 8601 timestamp when this subsequence status was executed
           */
          timestamp_executed: string;
      };
      /**
       * Subsequence Id
       * @description UUID of the subsequence for the lead
       * @default null
       */
      subsequence_id: string | null;
      /**
       * Timestamp Created
       * @description ISO 8601 timestamp when the lead was created
       */
      timestamp_created: string;
      /**
       * Timestamp Updated
       * @description ISO 8601 timestamp when the lead was last updated
       */
      timestamp_updated: string;
      /**
       * Verification Status
       * @description Verification status code of the lead
       */
      verification_status: number;
      /**
       * Website
       * @description Website URL of the lead
       * @default null
       */
      website: string | null;
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
 * Type of INSTANTLY's INSTANTLY_SEARCH_CAMPAIGNS_BY_LEAD_EMAIL tool input.
 */
type INSTANTLY_SEARCH_CAMPAIGNS_BY_LEAD_EMAIL_INPUT = {
  /**
   * Search
   * @description Lead email to search
   */
  search?: string;
  /**
   * Sort Column
   * @description Column to sort by, default 'timestamp_created'
   * @default null
   */
  sort_column: string | null;
  /**
   * Sort Order
   * @description Sort direction, either 'asc' or 'desc' (default 'asc')
   * @default null
   * @enum {string|null}
   */
  sort_order: "asc" | "desc" | null;
};

/**
 * Type of INSTANTLY's INSTANTLY_SEARCH_CAMPAIGNS_BY_LEAD_EMAIL tool output.
 */
type INSTANTLY_SEARCH_CAMPAIGNS_BY_LEAD_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of campaign objects matching the search
       */
      items: {
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
 * Type of INSTANTLY's INSTANTLY_UPDATE_CAMPAIGN tool input.
 */
type INSTANTLY_UPDATE_CAMPAIGN_INPUT = {
  /**
   * Allow Risky Contacts
   * @description Allow sending to risky contacts; null to unset
   * @default null
   */
  allow_risky_contacts: boolean | null;
  /**
   * Auto Variant Select
   * @description Settings for auto variant selection
   * @default null
   */
  auto_variant_select: {
      [key: string]: unknown;
  } | null;
  /**
   * Bcc List
   * @description List of email addresses to BCC
   * @default null
   */
  bcc_list: string[] | null;
  /**
   * Campaign Schedule
   * @description Raw campaign schedule configuration
   * @default null
   */
  campaign_schedule: {
      [key: string]: unknown;
  } | null;
  /**
   * Cc List
   * @description List of email addresses to CC
   * @default null
   */
  cc_list: string[] | null;
  /**
   * Daily Limit
   * @description Daily send limit; null for unlimited
   * @default null
   */
  daily_limit: number | null;
  /**
   * Daily Max Leads
   * @description Max new leads to contact per day; null to unset
   * @default null
   */
  daily_max_leads: number | null;
  /**
   * Disable Bounce Protect
   * @description Disable bounce protection; null to unset
   * @default null
   */
  disable_bounce_protect: boolean | null;
  /**
   * Email Gap
   * @description Gap between emails in minutes; null to unset
   * @default null
   */
  email_gap: number | null;
  /**
   * Email List
   * @description List of sender account UUIDs to use
   * @default null
   */
  email_list: string[] | null;
  /**
   * Email Tag List
   * @description List of email tag UUIDs to apply
   * @default null
   */
  email_tag_list: string[] | null;
  /**
   * First Email Text Only
   * @description Send only the first email as text-only; null to unset
   * @default null
   */
  first_email_text_only: boolean | null;
  /**
   * Id
   * @description UUID of the campaign to update
   */
  id?: string;
  /**
   * Insert Unsubscribe Header
   * @description Insert unsubscribe header; null to unset
   * @default null
   */
  insert_unsubscribe_header: boolean | null;
  /**
   * Is Evergreen
   * @description Whether the campaign is evergreen; null to unset
   * @default null
   */
  is_evergreen: boolean | null;
  /**
   * Link Tracking
   * @description Enable link click tracking; null to unset
   * @default null
   */
  link_tracking: boolean | null;
  /**
   * Match Lead Esp
   * @description Match leads by ESP; null to unset
   * @default null
   */
  match_lead_esp: boolean | null;
  /**
   * Name
   * @description New campaign name
   * @default null
   */
  name: string | null;
  /**
   * Open Tracking
   * @description Enable open tracking; null to unset
   * @default null
   */
  open_tracking: boolean | null;
  /**
   * Owned By
   * @description UUID of the new owner; null to unset
   * @default null
   */
  owned_by: string | null;
  /**
   * Pl Value
   * @description Value for each positive lead; null to unset
   * @default null
   */
  pl_value: number | null;
  /**
   * Prioritize New Leads
   * @description Prioritize new leads; null to unset
   * @default null
   */
  prioritize_new_leads: boolean | null;
  /**
   * Provider Routing Rules
   * @description Custom provider routing rule objects
   * @default null
   */
  provider_routing_rules: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Random Wait Max
   * @description Maximum random wait in minutes; null to unset
   * @default null
   */
  random_wait_max: number | null;
  /**
   * Sequences
   * @description List of sequence objects; only first is honored; include steps inside
   * @default null
   */
  sequences: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Stop For Company
   * @description Stop for company on reply; null to unset
   * @default null
   */
  stop_for_company: boolean | null;
  /**
   * Stop On Auto Reply
   * @description Stop on auto-reply; null to unset
   * @default null
   */
  stop_on_auto_reply: boolean | null;
  /**
   * Stop On Reply
   * @description Stop campaign when a lead replies; null to unset
   * @default null
   */
  stop_on_reply: boolean | null;
  /**
   * Text Only
   * @description Send emails as text-only; null to unset
   * @default null
   */
  text_only: boolean | null;
};

/**
 * Type of INSTANTLY's INSTANTLY_UPDATE_CAMPAIGN tool output.
 */
type INSTANTLY_UPDATE_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Allow Risky Contacts */
      allow_risky_contacts: boolean | null;
      /** Auto Variant Select */
      auto_variant_select: {
          [key: string]: unknown;
      } | null;
      /** Bcc List */
      bcc_list: string[];
      /**
       * Campaign Schedule
       * @description Campaign schedule configuration
       */
      campaign_schedule: {
          [key: string]: unknown;
      };
      /** Cc List */
      cc_list: string[];
      /** Daily Limit */
      daily_limit: number | null;
      /** Daily Max Leads */
      daily_max_leads: number | null;
      /** Disable Bounce Protect */
      disable_bounce_protect: boolean | null;
      /** Email Gap */
      email_gap: number | null;
      /** Email List */
      email_list: string[];
      /** Email Tag List */
      email_tag_list: string[];
      /** First Email Text Only */
      first_email_text_only: boolean | null;
      /**
       * Id
       * @description UUID of the campaign
       */
      id: string;
      /** Insert Unsubscribe Header */
      insert_unsubscribe_header: boolean | null;
      /** Is Evergreen */
      is_evergreen: boolean | null;
      /** Link Tracking */
      link_tracking: boolean | null;
      /** Match Lead Esp */
      match_lead_esp: boolean | null;
      /**
       * Name
       * @description Campaign name
       */
      name: string;
      /** Open Tracking */
      open_tracking: boolean | null;
      /**
       * Organization
       * @description Read-only organization UUID
       */
      organization: string;
      /** Owned By */
      owned_by: string | null;
      /** Pl Value */
      pl_value: number | null;
      /** Prioritize New Leads */
      prioritize_new_leads: boolean | null;
      /** Provider Routing Rules */
      provider_routing_rules: {
          [key: string]: unknown;
      }[];
      /** Random Wait Max */
      random_wait_max: number | null;
      /**
       * Sequences
       * @description List of sequence objects
       */
      sequences: {
          [key: string]: unknown;
      }[];
      /**
       * Status
       * @description Read-only status enum
       */
      status: number;
      /** Stop For Company */
      stop_for_company: boolean | null;
      /** Stop On Auto Reply */
      stop_on_auto_reply: boolean | null;
      /** Stop On Reply */
      stop_on_reply: boolean | null;
      /** Text Only */
      text_only: boolean | null;
      /**
       * Timestamp Created
       * @description ISO 8601 creation timestamp
       */
      timestamp_created: string;
      /**
       * Timestamp Updated
       * @description ISO 8601 last update timestamp
       */
      timestamp_updated: string;
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
 * Type of INSTANTLY's INSTANTLY_UPDATE_LEAD tool input.
 */
type INSTANTLY_UPDATE_LEAD_INPUT = {
  /**
   * Company Name
   * @description Company name of the lead, or null to clear.
   * @default null
   */
  company_name: string | null;
  /**
   * First Name
   * @description First name of the lead, or null to clear.
   * @default null
   */
  first_name: string | null;
  /**
   * Id
   * @description UUID of the lead to update.
   */
  id?: string;
  /**
   * Last Name
   * @description Last name of the lead, or null to clear.
   * @default null
   */
  last_name: string | null;
  /**
   * Lt Interest Status
   * @description Lead interest status. Static values: 0=Out of Office, 1=Interested, 2=Meeting Booked, 3=Meeting Completed, 4=Closed, -1=Not Interested, -2=Wrong Person, -3=Lost; or custom status.
   * @default null
   */
  lt_interest_status: number | null;
  /**
   * Personalization
   * @description Personalization content for the lead, or null to clear.
   * @default null
   */
  personalization: string | null;
  /**
   * Phone
   * @description Phone number of the lead, or null to clear.
   * @default null
   */
  phone: string | null;
  /**
   * Website
   * @description Website URL of the lead, or null to clear.
   * @default null
   */
  website: string | null;
};

/**
 * Type of INSTANTLY's INSTANTLY_UPDATE_LEAD tool output.
 */
type INSTANTLY_UPDATE_LEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Campaign
       * @description UUID of the campaign associated with the lead.
       * @default null
       */
      campaign: string | null;
      /**
       * Company Domain
       * @description Domain of the lead's company.
       */
      company_domain: string;
      /**
       * Company Name
       * @description Company name of the lead.
       * @default null
       */
      company_name: string | null;
      /**
       * Email
       * @description Email address of the lead.
       * @default null
       */
      email: string | null;
      /**
       * Email Click Count
       * @description Number of times emails were clicked.
       */
      email_click_count: number;
      /**
       * Email Clicked Step
       * @description Step number of last clicked email.
       * @default null
       */
      email_clicked_step: number | null;
      /**
       * Email Clicked Variant
       * @description Variant number of last clicked email step.
       * @default null
       */
      email_clicked_variant: number | null;
      /**
       * Email Open Count
       * @description Number of times emails were opened.
       */
      email_open_count: number;
      /**
       * Email Opened Step
       * @description Step number of last opened email.
       * @default null
       */
      email_opened_step: number | null;
      /**
       * Email Opened Variant
       * @description Variant number of last opened email step.
       * @default null
       */
      email_opened_variant: number | null;
      /**
       * Email Replied Step
       * @description Step number of last replied email.
       * @default null
       */
      email_replied_step: number | null;
      /**
       * Email Replied Variant
       * @description Variant number of last replied email step.
       * @default null
       */
      email_replied_variant: number | null;
      /**
       * Email Reply Count
       * @description Number of times emails were replied.
       */
      email_reply_count: number;
      /**
       * First Name
       * @description First name of the lead.
       * @default null
       */
      first_name: string | null;
      /**
       * Id
       * @description UUID of the lead.
       */
      id: string;
      /**
       * Last Name
       * @description Last name of the lead.
       * @default null
       */
      last_name: string | null;
      /**
       * Last Step From
       * @description Source of the last step.
       * @default null
       */
      last_step_from: string | null;
      /**
       * Last Step Id
       * @description UUID of the last step executed.
       * @default null
       */
      last_step_id: string | null;
      /**
       * Last Step Timestamp Executed
       * @description Timestamp of the last step execution.
       * @default null
       */
      last_step_timestamp_executed: string | null;
      /**
       * Lt Interest Status
       * @description Lead interest status code.
       */
      lt_interest_status: number;
      /**
       * Organization
       * @description UUID of the organization associated with the lead.
       */
      organization: string;
      /**
       * Payload
       * @description Custom payload variables as key-value pairs.
       * @default null
       */
      payload: {
          [key: string]: string | number | boolean | null;
      } | null;
      /**
       * Personalization
       * @description Personalization content for the lead.
       * @default null
       */
      personalization: string | null;
      /**
       * Phone
       * @description Phone number of the lead.
       * @default null
       */
      phone: string | null;
      /**
       * Pl Value Lead
       * @description Potential value of the lead.
       * @default null
       */
      pl_value_lead: string | null;
      /**
       * Status
       * @description Lead status code.
       */
      status: number;
      /**
       * Status Summary
       * @description Summary of the last status change.
       */
      status_summary: {
          [key: string]: unknown;
      };
      /**
       * Status Summary Subseq
       * @description Summary of subsequent status changes.
       */
      status_summary_subseq: {
          [key: string]: unknown;
      };
      /**
       * Subsequence Id
       * @description UUID of the subsequence the lead belongs to.
       * @default null
       */
      subsequence_id: string | null;
      /**
       * Timestamp Added Subsequence
       * @description Timestamp when added to subsequence.
       * @default null
       */
      timestamp_added_subsequence: string | null;
      /**
       * Timestamp Created
       * @description Timestamp when the lead was created.
       */
      timestamp_created: string;
      /**
       * Timestamp Last Contact
       * @description Timestamp of last contact.
       * @default null
       */
      timestamp_last_contact: string | null;
      /**
       * Timestamp Last Interest Change
       * @description Timestamp of last interest change.
       * @default null
       */
      timestamp_last_interest_change: string | null;
      /**
       * Timestamp Last Open
       * @description Timestamp of last email open.
       * @default null
       */
      timestamp_last_open: string | null;
      /**
       * Timestamp Last Reply
       * @description Timestamp of last email reply.
       * @default null
       */
      timestamp_last_reply: string | null;
      /**
       * Timestamp Updated
       * @description Timestamp when the lead was last updated.
       */
      timestamp_updated: string;
      /**
       * Verification Status
       * @description Email verification status code.
       */
      verification_status: number;
      /**
       * Website
       * @description Website URL of the lead.
       * @default null
       */
      website: string | null;
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
 * Type of INSTANTLY's INSTANTLY_UPDATE_LEAD_INTEREST_STATUS tool input.
 */
type INSTANTLY_UPDATE_LEAD_INTEREST_STATUS_INPUT = {
  /**
   * Ai Interest Value
   * @description Optional AI interest value for the lead
   * @default null
   */
  ai_interest_value: number | null;
  /**
   * Campaign Id
   * @description Optional campaign ID to scope the update
   * @default null
   */
  campaign_id: string | null;
  /**
   * Disable Auto Interest
   * @description Disable Instantly's automatic interest updates when set to true
   * @default null
   */
  disable_auto_interest: boolean | null;
  /**
   * Interest Value
   * @description Interest status code. Set to null to reset to 'Lead'. Valid values: 0=Out of Office, 1=Interested, 2=Meeting Booked, 3=Meeting Completed, 4=Closed, -1=Not Interested, -2=Wrong Person, -3=Lost
   * @enum {integer|null}
   */
  interest_value?: -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | null;
  /**
   * Lead Email
   * @description Email address of the lead whose interest status to update
   */
  lead_email?: string;
  /**
   * List Id
   * @description Optional list ID to scope the update
   * @default null
   */
  list_id: string | null;
};

/**
 * Type of INSTANTLY's INSTANTLY_UPDATE_LEAD_INTEREST_STATUS tool output.
 */
type INSTANTLY_UPDATE_LEAD_INTEREST_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message from the API
       */
      message: string;
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
 * Type of INSTANTLY's INSTANTLY_UPDATE_LEAD_LIST tool input.
 */
type INSTANTLY_UPDATE_LEAD_LIST_INPUT = {
  /**
   * Has Enrichment Task
   * @description Whether this list runs the enrichment process on every added lead
   * @default null
   */
  has_enrichment_task: boolean | null;
  /**
   * Id
   * @description UUID of the lead list to update
   */
  id?: string;
  /**
   * Name
   * @description New name for the lead list
   * @default null
   */
  name: string | null;
  /**
   * Owned By
   * @description User ID of the new owner (UUID)
   * @default null
   */
  owned_by: string | null;
};

/**
 * Type of INSTANTLY's INSTANTLY_UPDATE_LEAD_LIST tool output.
 */
type INSTANTLY_UPDATE_LEAD_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has Enrichment Task
       * @description Whether this list runs enrichment on every added lead
       * @default null
       */
      has_enrichment_task: boolean | null;
      /**
       * Id
       * @description UUID of the lead list
       */
      id: string;
      /**
       * Name
       * @description Name of the lead list
       */
      name: string;
      /**
       * Organization Id
       * @description UUID of the organization that owns this lead list
       */
      organization_id: string;
      /**
       * Owned By
       * @description User ID of the owner (UUID)
       * @default null
       */
      owned_by: string | null;
      /**
       * Timestamp Created
       * @description ISO 8601 timestamp when the lead list was created
       */
      timestamp_created: string;
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
 * Type of INSTANTLY's INSTANTLY_VERIFY_EMAIL tool input.
 */
type INSTANTLY_VERIFY_EMAIL_INPUT = {
  /**
   * Email
   * @description Email address to verify in RFC 5322 format.
   */
  email?: string;
  /**
   * Webhook Url
   * @description Optional webhook URL to receive verification results asynchronously if the process takes longer than 10 seconds.
   * @default null
   */
  webhook_url: string | null;
};

/**
 * Type of INSTANTLY's INSTANTLY_VERIFY_EMAIL tool output.
 */
type INSTANTLY_VERIFY_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Catch All
       * @description Indicates catch-all: true|false|pending.
       */
      catch_all: boolean | null;
      /**
       * Credits
       * @description Remaining verification credits after the request.
       * @default null
       */
      credits: number | null;
      /**
       * Credits Used
       * @description Credits consumed by the request.
       * @default null
       */
      credits_used: number | null;
      /**
       * Email
       * @description The email address that was verified.
       */
      email: string;
      /**
       * Status
       * @description Request status: success|error. Do not use to determine verification outcome.
       * @default null
       */
      status: string | null;
      /**
       * Verification Status
       * @description Verification result: pending|verified|invalid.
       * @enum {string}
       */
      verification_status: "pending" | "verified" | "invalid";
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
 * Type map of all available tool input types for toolkit "INSTANTLY".
 */
export type INSTANTLY_TOOL_INPUTS = {
  CHECK_EMAIL_VERIFICATION_STATUS: INSTANTLY_CHECK_EMAIL_VERIFICATION_STATUS_INPUT
  COUNT_UNREAD_EMAILS: INSTANTLY_COUNT_UNREAD_EMAILS_INPUT
  CREATE_AI_ENRICHMENT: INSTANTLY_CREATE_AI_ENRICHMENT_INPUT
  CREATE_API_KEY: INSTANTLY_CREATE_API_KEY_INPUT
  CREATE_CAMPAIGN: INSTANTLY_CREATE_CAMPAIGN_INPUT
  CREATE_INBOX_PLACEMENT_TEST: INSTANTLY_CREATE_INBOX_PLACEMENT_TEST_INPUT
  CREATE_LEAD: INSTANTLY_CREATE_LEAD_INPUT
  CREATE_LEAD_LIST: INSTANTLY_CREATE_LEAD_LIST_INPUT
  CREATE_WEBHOOK: INSTANTLY_CREATE_WEBHOOK_INPUT
  DELETE_API_KEY: INSTANTLY_DELETE_API_KEY_INPUT
  DELETE_CAMPAIGN: INSTANTLY_DELETE_CAMPAIGN_INPUT
  DELETE_LEAD: INSTANTLY_DELETE_LEAD_INPUT
  DELETE_LEAD_LIST: INSTANTLY_DELETE_LEAD_LIST_INPUT
  DELETE_WEBHOOK: INSTANTLY_DELETE_WEBHOOK_INPUT
  DISABLE_ACCOUNT_WARMUP: INSTANTLY_DISABLE_ACCOUNT_WARMUP_INPUT
  ENABLE_ACCOUNT_WARMUP: INSTANTLY_ENABLE_ACCOUNT_WARMUP_INPUT
  GET_CAMPAIGN: INSTANTLY_GET_CAMPAIGN_INPUT
  GET_CAMPAIGN_ANALYTICS: INSTANTLY_GET_CAMPAIGN_ANALYTICS_INPUT
  GET_DAILY_CAMPAIGN_ANALYTICS: INSTANTLY_GET_DAILY_CAMPAIGN_ANALYTICS_INPUT
  GET_EMAIL_SERVICE_PROVIDER_OPTIONS: INSTANTLY_GET_EMAIL_SERVICE_PROVIDER_OPTIONS_INPUT
  GET_INBOX_PLACEMENT_TEST: INSTANTLY_GET_INBOX_PLACEMENT_TEST_INPUT
  GET_LEAD: INSTANTLY_GET_LEAD_INPUT
  GET_LEAD_LIST: INSTANTLY_GET_LEAD_LIST_INPUT
  GET_VERIFICATION_STATS_FOR_LEAD_LIST: INSTANTLY_GET_VERIFICATION_STATS_FOR_LEAD_LIST_INPUT
  GET_WEBHOOK: INSTANTLY_GET_WEBHOOK_INPUT
  GET_WEBHOOK_EVENT: INSTANTLY_GET_WEBHOOK_EVENT_INPUT
  LIST_ACCOUNTS: INSTANTLY_LIST_ACCOUNTS_INPUT
  LIST_API_KEYS: INSTANTLY_LIST_API_KEYS_INPUT
  LIST_CAMPAIGNS: INSTANTLY_LIST_CAMPAIGNS_INPUT
  LIST_CUSTOM_TAGS: INSTANTLY_LIST_CUSTOM_TAGS_INPUT
  LIST_DFY_EMAIL_ACCOUNT_ORDERS: INSTANTLY_LIST_DFY_EMAIL_ACCOUNT_ORDERS_INPUT
  LIST_EMAILS: INSTANTLY_LIST_EMAILS_INPUT
  LIST_INBOX_PLACEMENT_BLACKLIST_AND_SPAM_ASSASSIN_REPORTS: INSTANTLY_LIST_INBOX_PLACEMENT_BLACKLIST_AND_SPAM_ASSASSIN_REPORTS_INPUT
  LIST_INBOX_PLACEMENT_TESTS: INSTANTLY_LIST_INBOX_PLACEMENT_TESTS_INPUT
  LIST_LEADS: INSTANTLY_LIST_LEADS_INPUT
  LIST_LEAD_LISTS: INSTANTLY_LIST_LEAD_LISTS_INPUT
  LIST_THREADS: INSTANTLY_LIST_THREADS_INPUT
  LIST_WEBHOOKS: INSTANTLY_LIST_WEBHOOKS_INPUT
  LIST_WEBHOOK_EVENTS: INSTANTLY_LIST_WEBHOOK_EVENTS_INPUT
  MARK_THREAD_AS_READ: INSTANTLY_MARK_THREAD_AS_READ_INPUT
  MERGE_LEADS: INSTANTLY_MERGE_LEADS_INPUT
  SEARCH_CAMPAIGNS_BY_LEAD_EMAIL: INSTANTLY_SEARCH_CAMPAIGNS_BY_LEAD_EMAIL_INPUT
  UPDATE_CAMPAIGN: INSTANTLY_UPDATE_CAMPAIGN_INPUT
  UPDATE_LEAD: INSTANTLY_UPDATE_LEAD_INPUT
  UPDATE_LEAD_INTEREST_STATUS: INSTANTLY_UPDATE_LEAD_INTEREST_STATUS_INPUT
  UPDATE_LEAD_LIST: INSTANTLY_UPDATE_LEAD_LIST_INPUT
  VERIFY_EMAIL: INSTANTLY_VERIFY_EMAIL_INPUT
}

/**
 * Type map of all available tool input types for toolkit "INSTANTLY".
 */
export type INSTANTLY_TOOL_OUTPUTS = {
  CHECK_EMAIL_VERIFICATION_STATUS: INSTANTLY_CHECK_EMAIL_VERIFICATION_STATUS_OUTPUT
  COUNT_UNREAD_EMAILS: INSTANTLY_COUNT_UNREAD_EMAILS_OUTPUT
  CREATE_AI_ENRICHMENT: INSTANTLY_CREATE_AI_ENRICHMENT_OUTPUT
  CREATE_API_KEY: INSTANTLY_CREATE_API_KEY_OUTPUT
  CREATE_CAMPAIGN: INSTANTLY_CREATE_CAMPAIGN_OUTPUT
  CREATE_INBOX_PLACEMENT_TEST: INSTANTLY_CREATE_INBOX_PLACEMENT_TEST_OUTPUT
  CREATE_LEAD: INSTANTLY_CREATE_LEAD_OUTPUT
  CREATE_LEAD_LIST: INSTANTLY_CREATE_LEAD_LIST_OUTPUT
  CREATE_WEBHOOK: INSTANTLY_CREATE_WEBHOOK_OUTPUT
  DELETE_API_KEY: INSTANTLY_DELETE_API_KEY_OUTPUT
  DELETE_CAMPAIGN: INSTANTLY_DELETE_CAMPAIGN_OUTPUT
  DELETE_LEAD: INSTANTLY_DELETE_LEAD_OUTPUT
  DELETE_LEAD_LIST: INSTANTLY_DELETE_LEAD_LIST_OUTPUT
  DELETE_WEBHOOK: INSTANTLY_DELETE_WEBHOOK_OUTPUT
  DISABLE_ACCOUNT_WARMUP: INSTANTLY_DISABLE_ACCOUNT_WARMUP_OUTPUT
  ENABLE_ACCOUNT_WARMUP: INSTANTLY_ENABLE_ACCOUNT_WARMUP_OUTPUT
  GET_CAMPAIGN: INSTANTLY_GET_CAMPAIGN_OUTPUT
  GET_CAMPAIGN_ANALYTICS: INSTANTLY_GET_CAMPAIGN_ANALYTICS_OUTPUT
  GET_DAILY_CAMPAIGN_ANALYTICS: INSTANTLY_GET_DAILY_CAMPAIGN_ANALYTICS_OUTPUT
  GET_EMAIL_SERVICE_PROVIDER_OPTIONS: INSTANTLY_GET_EMAIL_SERVICE_PROVIDER_OPTIONS_OUTPUT
  GET_INBOX_PLACEMENT_TEST: INSTANTLY_GET_INBOX_PLACEMENT_TEST_OUTPUT
  GET_LEAD: INSTANTLY_GET_LEAD_OUTPUT
  GET_LEAD_LIST: INSTANTLY_GET_LEAD_LIST_OUTPUT
  GET_VERIFICATION_STATS_FOR_LEAD_LIST: INSTANTLY_GET_VERIFICATION_STATS_FOR_LEAD_LIST_OUTPUT
  GET_WEBHOOK: INSTANTLY_GET_WEBHOOK_OUTPUT
  GET_WEBHOOK_EVENT: INSTANTLY_GET_WEBHOOK_EVENT_OUTPUT
  LIST_ACCOUNTS: INSTANTLY_LIST_ACCOUNTS_OUTPUT
  LIST_API_KEYS: INSTANTLY_LIST_API_KEYS_OUTPUT
  LIST_CAMPAIGNS: INSTANTLY_LIST_CAMPAIGNS_OUTPUT
  LIST_CUSTOM_TAGS: INSTANTLY_LIST_CUSTOM_TAGS_OUTPUT
  LIST_DFY_EMAIL_ACCOUNT_ORDERS: INSTANTLY_LIST_DFY_EMAIL_ACCOUNT_ORDERS_OUTPUT
  LIST_EMAILS: INSTANTLY_LIST_EMAILS_OUTPUT
  LIST_INBOX_PLACEMENT_BLACKLIST_AND_SPAM_ASSASSIN_REPORTS: INSTANTLY_LIST_INBOX_PLACEMENT_BLACKLIST_AND_SPAM_ASSASSIN_REPORTS_OUTPUT
  LIST_INBOX_PLACEMENT_TESTS: INSTANTLY_LIST_INBOX_PLACEMENT_TESTS_OUTPUT
  LIST_LEADS: INSTANTLY_LIST_LEADS_OUTPUT
  LIST_LEAD_LISTS: INSTANTLY_LIST_LEAD_LISTS_OUTPUT
  LIST_THREADS: INSTANTLY_LIST_THREADS_OUTPUT
  LIST_WEBHOOKS: INSTANTLY_LIST_WEBHOOKS_OUTPUT
  LIST_WEBHOOK_EVENTS: INSTANTLY_LIST_WEBHOOK_EVENTS_OUTPUT
  MARK_THREAD_AS_READ: INSTANTLY_MARK_THREAD_AS_READ_OUTPUT
  MERGE_LEADS: INSTANTLY_MERGE_LEADS_OUTPUT
  SEARCH_CAMPAIGNS_BY_LEAD_EMAIL: INSTANTLY_SEARCH_CAMPAIGNS_BY_LEAD_EMAIL_OUTPUT
  UPDATE_CAMPAIGN: INSTANTLY_UPDATE_CAMPAIGN_OUTPUT
  UPDATE_LEAD: INSTANTLY_UPDATE_LEAD_OUTPUT
  UPDATE_LEAD_INTEREST_STATUS: INSTANTLY_UPDATE_LEAD_INTEREST_STATUS_OUTPUT
  UPDATE_LEAD_LIST: INSTANTLY_UPDATE_LEAD_LIST_OUTPUT
  VERIFY_EMAIL: INSTANTLY_VERIFY_EMAIL_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's INSTANTLY toolkit.
 */
export const INSTANTLY = {
  slug: "instantly",
  tools: {
    /**
     * Tool to check status of an email verification job. Use after submitting a verification request to retrieve the current status of a specific email address.
     */
    CHECK_EMAIL_VERIFICATION_STATUS: "INSTANTLY_CHECK_EMAIL_VERIFICATION_STATUS",
    /**
     * Tool to retrieve the count of unread emails. Use when you need to know how many unread messages are in your inbox before sending new emails.
     */
    COUNT_UNREAD_EMAILS: "INSTANTLY_COUNT_UNREAD_EMAILS",
    /**
     * Tool to create an AI enrichment job for a campaign or lead list. Use when you need to enrich a resource with AI-driven insights.
     */
    CREATE_AI_ENRICHMENT: "INSTANTLY_CREATE_AI_ENRICHMENT",
    /**
     * Tool to create a new API key. Use when you need to generate credentials for programmatic access to the Instantly API.
     */
    CREATE_API_KEY: "INSTANTLY_CREATE_API_KEY",
    /**
     * Tool to create a new campaign. Use when you have campaign details ready and want to launch.
     */
    CREATE_CAMPAIGN: "INSTANTLY_CREATE_CAMPAIGN",
    /**
     * Tool to create an inbox placement test. Use when you need to measure deliverability across providers with your prepared email and recipient list.
     */
    CREATE_INBOX_PLACEMENT_TEST: "INSTANTLY_CREATE_INBOX_PLACEMENT_TEST",
    /**
     * Tool to create a new lead. Use when you need to add an individual lead to a campaign.
     */
    CREATE_LEAD: "INSTANTLY_CREATE_LEAD",
    /**
     * Tool to create a new lead list. Use when you need to organize leads into a dedicated list before importing them into campaigns.
     */
    CREATE_LEAD_LIST: "INSTANTLY_CREATE_LEAD_LIST",
    /**
     * Tool to create a new webhook endpoint. Use when you need to receive Instantly event notifications via HTTP callbacks.
     */
    CREATE_WEBHOOK: "INSTANTLY_CREATE_WEBHOOK",
    /**
     * Tool to delete an API key. Use when you need to remove a specific API key by its ID after confirming its existence.
     */
    DELETE_API_KEY: "INSTANTLY_DELETE_API_KEY",
    /**
     * Tool to delete a campaign. Use when you need to remove a specific campaign by ID.
     */
    DELETE_CAMPAIGN: "INSTANTLY_DELETE_CAMPAIGN",
    /**
     * Tool to delete a lead by its ID. Use when you need to remove a specific lead after confirming its existence.
     */
    DELETE_LEAD: "INSTANTLY_DELETE_LEAD",
    /**
     * Tool to delete a lead list by ID. Use when you need to remove a specific lead list after confirming its existence.
     */
    DELETE_LEAD_LIST: "INSTANTLY_DELETE_LEAD_LIST",
    /**
     * Tool to delete a webhook. Use when you need to remove a specific webhook by its UUID.
     */
    DELETE_WEBHOOK: "INSTANTLY_DELETE_WEBHOOK",
    /**
     * Tool to disable the warm-up process for email accounts. Use when you need to stop warmup for specific or all accounts before sending critical campaigns.
     */
    DISABLE_ACCOUNT_WARMUP: "INSTANTLY_DISABLE_ACCOUNT_WARMUP",
    /**
     * Tool to enable the warm-up process for email accounts. Use when you want to start warming up one or more accounts to improve deliverability.
     */
    ENABLE_ACCOUNT_WARMUP: "INSTANTLY_ENABLE_ACCOUNT_WARMUP",
    /**
     * Tool to retrieve campaign details. Use when you need full campaign configuration for a given campaign ID.
     */
    GET_CAMPAIGN: "INSTANTLY_GET_CAMPAIGN",
    /**
     * Tool to retrieve analytics for campaigns. Use when you need performance metrics for one or multiple campaigns.
     */
    GET_CAMPAIGN_ANALYTICS: "INSTANTLY_GET_CAMPAIGN_ANALYTICS",
    /**
     * Tool to retrieve daily analytics for a campaign. Use when you need per-day performance metrics for campaigns.
     */
    GET_DAILY_CAMPAIGN_ANALYTICS: "INSTANTLY_GET_DAILY_CAMPAIGN_ANALYTICS",
    /**
     * Tool to retrieve email service provider options for inbox placement tests. Use when you need valid recipients_labels options.
     */
    GET_EMAIL_SERVICE_PROVIDER_OPTIONS: "INSTANTLY_GET_EMAIL_SERVICE_PROVIDER_OPTIONS",
    /**
     * Tool to retrieve inbox placement test results. Use when you need details for a specific inbox placement test by ID.
     */
    GET_INBOX_PLACEMENT_TEST: "INSTANTLY_GET_INBOX_PLACEMENT_TEST",
    /**
     * Tool to retrieve details of a specific lead by its ID. Use when you have the lead UUID and need full lead metadata.
     */
    GET_LEAD: "INSTANTLY_GET_LEAD",
    /**
     * Tool to retrieve details of a specific lead list by its ID. Use when you have the lead list UUID and need list metadata.
     */
    GET_LEAD_LIST: "INSTANTLY_GET_LEAD_LIST",
    /**
     * Tool to retrieve verification statistics for a lead list. Use when you need summary counts by verification status for a specific lead list.
     */
    GET_VERIFICATION_STATS_FOR_LEAD_LIST: "INSTANTLY_GET_VERIFICATION_STATS_FOR_LEAD_LIST",
    /**
     * Tool to retrieve details of a specific webhook subscription. Use when you have the webhook ID and need full webhook configuration.
     */
    GET_WEBHOOK: "INSTANTLY_GET_WEBHOOK",
    /**
     * Tool to retrieve details of a specific webhook event. Use when you need to inspect a particular webhook event by its ID.
     */
    GET_WEBHOOK_EVENT: "INSTANTLY_GET_WEBHOOK_EVENT",
    /**
     * Tool to list all email accounts for the authenticated user. Use after obtaining auth credentials to retrieve available accounts.
     */
    LIST_ACCOUNTS: "INSTANTLY_LIST_ACCOUNTS",
    /**
     * Tool to list all API keys. Use when you need to retrieve your API keys with optional pagination after authentication.
     */
    LIST_API_KEYS: "INSTANTLY_LIST_API_KEYS",
    /**
     * Tool to list all campaigns. Use when you need to fetch your campaigns list with optional filters and pagination.
     */
    LIST_CAMPAIGNS: "INSTANTLY_LIST_CAMPAIGNS",
    /**
     * Tool to list custom tags. Use when you need to retrieve custom tags with optional pagination and filtering.
     */
    LIST_CUSTOM_TAGS: "INSTANTLY_LIST_CUSTOM_TAGS",
    /**
     * Tool to list DFY email account orders. Use when you need to fetch your DFY email account orders with pagination.
     */
    LIST_DFY_EMAIL_ACCOUNT_ORDERS: "INSTANTLY_LIST_DFY_EMAIL_ACCOUNT_ORDERS",
    /**
     * Tool to list emails. Use when you need to retrieve emails with optional filters and pagination.
     */
    LIST_EMAILS: "INSTANTLY_LIST_EMAILS",
    /**
     * Tool to list inbox placement blacklist & SpamAssassin reports. Use when you need to retrieve spam and blacklist analytics after running an inbox placement test.
     */
    LIST_INBOX_PLACEMENT_BLACKLIST_AND_SPAM_ASSASSIN_REPORTS: "INSTANTLY_LIST_INBOX_PLACEMENT_BLACKLIST_AND_SPAM_ASSASSIN_REPORTS",
    /**
     * Tool to list inbox placement tests. Use when you need a paginated overview of tests with optional filtering and sort order.
     */
    LIST_INBOX_PLACEMENT_TESTS: "INSTANTLY_LIST_INBOX_PLACEMENT_TESTS",
    /**
     * Tool to list leads. Use when you need to retrieve leads with optional filters like search, status filters, and pagination.
     */
    LIST_LEADS: "INSTANTLY_LIST_LEADS",
    /**
     * Tool to list all lead lists. Use when you need to fetch the lead lists with optional filters and pagination.
     */
    LIST_LEAD_LISTS: "INSTANTLY_LIST_LEAD_LISTS",
    /**
     * Tool to list email threads. Use when fetching threads with optional pagination and unread-only filtering. Note: Instantly's public API does not expose a dedicated GET /emails/threads endpoint. Threads can be derived by grouping emails (GET /emails) by their `thread_id`. This action implements that logic by querying /emails and aggregating into threads.
     */
    LIST_THREADS: "INSTANTLY_LIST_THREADS",
    /**
     * Tool to list configured webhooks. Use when you need to retrieve your webhook configurations with optional filters and pagination.
     */
    LIST_WEBHOOKS: "INSTANTLY_LIST_WEBHOOKS",
    /**
     * Tool to list webhook events. Use when you need to view received webhook events with optional pagination and filters.
     */
    LIST_WEBHOOK_EVENTS: "INSTANTLY_LIST_WEBHOOK_EVENTS",
    /**
     * Tool to mark all emails in a specific thread as read. Use when you want to update the read status of an email thread after processing.
     */
    MARK_THREAD_AS_READ: "INSTANTLY_MARK_THREAD_AS_READ",
    /**
     * Tool to merge multiple leads into a single lead. Use after confirming both source and destination lead IDs exist.
     */
    MERGE_LEADS: "INSTANTLY_MERGE_LEADS",
    /**
     * Tool to search campaigns by a lead's email address. Use when you need to find campaigns containing a specific lead by their email.
     */
    SEARCH_CAMPAIGNS_BY_LEAD_EMAIL: "INSTANTLY_SEARCH_CAMPAIGNS_BY_LEAD_EMAIL",
    /**
     * Tool to update details of a campaign. Use when you need to modify campaign settings after verifying its ID.
     */
    UPDATE_CAMPAIGN: "INSTANTLY_UPDATE_CAMPAIGN",
    /**
     * Tool to update a lead's details. Use when you need to modify fields of an existing lead after identifying its ID.
     */
    UPDATE_LEAD: "INSTANTLY_UPDATE_LEAD",
    /**
     * Tool to update a lead's interest status. Use when you need to set or reset a lead’s interest status for follow-up actions.
     */
    UPDATE_LEAD_INTEREST_STATUS: "INSTANTLY_UPDATE_LEAD_INTEREST_STATUS",
    /**
     * Tool to update details of a specific lead list by its ID. Use after verifying the list ID exists.
     */
    UPDATE_LEAD_LIST: "INSTANTLY_UPDATE_LEAD_LIST",
    /**
     * Tool to initiate email verification. Use when you need to verify an email's deliverability before sending emails.
     */
    VERIFY_EMAIL: "INSTANTLY_VERIFY_EMAIL",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "INSTANTLY".
 */
export type INSTANTLY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "INSTANTLY".
 */
export type INSTANTLY_TRIGGER_EVENTS = {}
