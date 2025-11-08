// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of EMELIA's EMELIA_ADD_CONTACT_TO_BLACKLIST tool input.
 */
type EMELIA_ADD_CONTACT_TO_BLACKLIST_INPUT = {
  /**
   * Email
   * Format: email
   * @description The email address of the contact to be blacklisted.
   */
  email?: unknown;
};

/**
 * Type of EMELIA's EMELIA_ADD_CONTACT_TO_BLACKLIST tool output.
 */
type EMELIA_ADD_CONTACT_TO_BLACKLIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Detailed information about the operation result.
       */
      message: string;
      /**
       * Status
       * @description Result status, either 'success' or 'error'.
       * @enum {string}
       */
      status: "success" | "error";
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
 * Type of EMELIA's EMELIA_ADD_CONTACT_TO_CAMPAIGN tool input.
 */
type EMELIA_ADD_CONTACT_TO_CAMPAIGN_INPUT = {
  /**
   * Contact
   * @description Contact object containing email and optional name/fields
   */
  contact?: {
      /**
       * Email
       * Format: email
       * @description Contact's email address
       */
      email: unknown;
      /**
       * Field1
       * @description Custom field 1 for this contact
       * @default null
       */
      field1: string | null;
      /**
       * Field2
       * @description Custom field 2 for this contact
       * @default null
       */
      field2: string | null;
      /**
       * First Name
       * @description Contact's first name
       * @default null
       */
      firstName: string | null;
      /**
       * Last Name
       * @description Contact's last name
       * @default null
       */
      lastName: string | null;
  };
  /**
   * Id
   * @description Campaign ID to which the contact will be added
   */
  id?: string;
};

/**
 * Type of EMELIA's EMELIA_ADD_CONTACT_TO_CAMPAIGN tool output.
 */
type EMELIA_ADD_CONTACT_TO_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the contact was added successfully
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
 * Type of EMELIA's EMELIA_CREATE_CAMPAIGN tool input.
 */
type EMELIA_CREATE_CAMPAIGN_INPUT = {
  /**
   * Name
   * @description Name of the email campaign
   */
  name?: string;
};

/**
 * Type of EMELIA's EMELIA_CREATE_CAMPAIGN tool output.
 */
type EMELIA_CREATE_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Campaign */
      campaign: {
          /**
           * Created At
           * Format: date-time
           */
          createdAt: string;
          /** Custom Domain */
          customDomain: string;
          /**
           * Estimated End
           * Format: date-time
           */
          estimatedEnd: string | null;
          /**
           * Last Inbox Check
           * Format: date-time
           */
          lastInboxCheck: string | null;
          /** Name */
          name: string;
          /** Provider */
          provider: string;
          /** Providers Used */
          providersUsed: string[];
          /** Recipients */
          recipients: {
              /**
               * Contacts
               * @description Contact IDs to include.
               */
              contacts: string[];
              /**
               * Lists
               * @description List IDs to include.
               */
              lists: string[];
          };
          /** Schedule */
          schedule: {
              /**
               * Bcc
               * @description Bcc address for all emails.
               * @default null
               */
              bcc: string | null;
              /**
               * Daily Contact
               * @description Contacts per day limit.
               * @default null
               */
              dailyContact: number | null;
              /**
               * Daily Limit
               * @description Max emails per day.
               * @default null
               */
              dailyLimit: number | null;
              /**
               * Days
               * @description Days of week allowed (0-6).
               * @default null
               */
              days: number[] | null;
              /**
               * End
               * @description Daily window end HH:MM.
               * @default null
               */
              end: string | null;
              /**
               * Event To Stop Mails
               * @description Events to stop sending.
               * @default null
               */
              eventToStopMails: string[] | null;
              /**
               * Max Interval
               * @description Max interval (sec).
               * @default null
               */
              maxInterval: number | null;
              /**
               * Min Interval
               * @description Min interval (sec).
               * @default null
               */
              minInterval: number | null;
              /**
               * Start
               * @description Daily window start HH:MM.
               * @default null
               */
              start: string | null;
              /**
               * Time Zone
               * @description IANA time zone string.
               * @default null
               */
              timeZone: string | null;
              /**
               * Track Links
               * @description Whether to track link clicks.
               * @default null
               */
              trackLinks: boolean | null;
              /**
               * Track Opens
               * @description Whether to track opens.
               * @default null
               */
              trackOpens: boolean | null;
          };
          /**
           * Start At
           * Format: date-time
           */
          startAt: string | null;
          /**
           * Status
           * @enum {string}
           */
          status: "RUNNING" | "PAUSED" | "DRAFT" | "FINISHED" | "ARCHIVED";
          /** Steps */
          steps: {
              /** Delay */
              delay: {
                  /**
                   * Amount
                   * @description Delay quantity.
                   */
                  amount: number;
                  /**
                   * Unit
                   * @description Unit for delay.
                   * @enum {string}
                   */
                  unit: "HOURS" | "MINUTES" | "DAYS";
              };
              /** Versions */
              versions: {
                  /**
                   * Disabled
                   * @description Skip this version if true.
                   */
                  disabled: boolean;
                  /**
                   * Message
                   * @description HTML or plain-text message body.
                   */
                  message: string;
                  /** Options */
                  options: {
                      /**
                       * Provider
                       * @description Provider ID for this version.
                       */
                      provider: string;
                      /**
                       * Schedule
                       * @description Per-version send windows.
                       */
                      schedule: {
                          /**
                           * Day
                           * @description Day of week (0=Sunday, 6=Saturday).
                           */
                          day: number;
                          /**
                           * End
                           * @description Window end time in HH:MM format.
                           */
                          end: string;
                          /**
                           * Start
                           * @description Window start time in HH:MM format.
                           */
                          start: string;
                      }[];
                      /**
                       * Show History
                       * @description Include send history.
                       */
                      showHistory: boolean;
                      /**
                       * Track Links
                       * @description Track clicks for this version.
                       */
                      trackLinks: boolean;
                      /**
                       * Track Opens
                       * @description Track opens for this version.
                       */
                      trackOpens: boolean;
                  };
                  /**
                   * Subject
                   * @description Email subject line.
                   * @default null
                   */
                  subject: string | null;
              }[];
          }[];
          /** Use Many Providers */
          useManyProviders: boolean;
          /** User Id */
          userId: string;
          /** Zapier Data */
          zapierData: {
              /**
               * Events
               * @description Events that trigger the webhook.
               */
              events: string[];
              /**
               * Webhook Url
               * @description Zapier webhook URL.
               */
              webhookUrl: string;
          }[];
      };
      /**
       * Success
       * @description Whether the call succeeded.
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
 * Type of EMELIA's EMELIA_CREATE_LINKEDIN_CAMPAIGN tool input.
 */
type EMELIA_CREATE_LINKEDIN_CAMPAIGN_INPUT = {
  /**
   * Name
   * @description Name of the LinkedIn campaign to create
   */
  name?: string;
};

/**
 * Type of EMELIA's EMELIA_CREATE_LINKEDIN_CAMPAIGN tool output.
 */
type EMELIA_CREATE_LINKEDIN_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Campaign
       * @description Details of the created campaign
       */
      campaign: {
          /**
           * Created At
           * Format: date-time
           * @description Timestamp when the campaign was created
           */
          createdAt: string;
          /**
           * Custom Domain
           * @description Custom domain used for sending emails
           * @default null
           */
          customDomain: string | null;
          /**
           * Estimated End
           * Format: date-time
           * @description Estimated end time of the campaign
           * @default null
           */
          estimatedEnd: string | null;
          /**
           * Last Inbox Check
           * Format: date-time
           * @description Timestamp of the last inbox check
           * @default null
           */
          lastInboxCheck: string | null;
          /**
           * Name
           * @description Name of the campaign
           */
          name: string;
          /**
           * Provider
           * @description Primary provider ID
           * @default null
           */
          provider: string | null;
          /**
           * Providers Used
           * @description List of provider IDs used
           * @default null
           */
          providersUsed: string[] | null;
          /**
           * Recipients
           * @description Recipients configuration for the campaign
           * @default null
           */
          recipients: {
              /**
               * Contacts
               * @description Contact IDs to include
               * @default null
               */
              contacts: string[] | null;
              /**
               * Lists
               * @description List IDs to include
               * @default null
               */
              lists: string[] | null;
          } | null;
          /**
           * Schedule
           * @description Scheduling configuration for the campaign
           * @default null
           */
          schedule: {
              /**
               * Bcc
               * @description BCC email address
               * @default null
               */
              bcc: string | null;
              /**
               * Daily Contact
               * @description Number of contacts per day
               * @default null
               */
              dailyContact: number | null;
              /**
               * Daily Limit
               * @description Daily email limit
               * @default null
               */
              dailyLimit: number | null;
              /**
               * Days
               * @description Days of week to send (0=Sunday to 6=Saturday)
               * @default null
               */
              days: number[] | null;
              /**
               * End
               * @description End time in HH:MM format
               * @default null
               */
              end: string | null;
              /**
               * Event To Stop Mails
               * @description Events to stop sending mails on
               * @default null
               */
              eventToStopMails: string[] | null;
              /**
               * Max Interval
               * @description Maximum interval between emails in minutes
               * @default null
               */
              maxInterval: number | null;
              /**
               * Min Interval
               * @description Minimum interval between emails in minutes
               * @default null
               */
              minInterval: number | null;
              /**
               * Start
               * @description Start time in HH:MM format
               * @default null
               */
              start: string | null;
              /**
               * Steps
               * @description Sequence steps for campaign
               * @default null
               */
              steps: {
                  /** Delay */
                  delay: {
                      /**
                       * Amount
                       * @description Delay amount before the next step
                       */
                      amount: number;
                      /**
                       * Unit
                       * @description Unit of delay (HOURS, MINUTES, DAYS)
                       * @enum {string}
                       */
                      unit: "HOURS" | "MINUTES" | "DAYS";
                  };
                  /** Versions */
                  versions: {
                      /**
                       * Disabled
                       * @description Whether this version is disabled
                       * @default false
                       */
                      disabled: boolean | null;
                      /**
                       * Message
                       * @description Body of the message for this version
                       */
                      message: string;
                      /** Options */
                      options: {
                          /**
                           * Provider
                           * @description Provider ID to send this version
                           */
                          provider: string;
                          /**
                           * Schedule
                           * @description Schedule items for this version
                           */
                          schedule: {
                              /**
                               * Day
                               * @description Day of week to run (0=Sunday to 6=Saturday)
                               */
                              day: number;
                              /**
                               * End
                               * @description End time in HH:MM format
                               */
                              end: string;
                              /**
                               * Start
                               * @description Start time in HH:MM format
                               */
                              start: string;
                          }[];
                          /**
                           * Show History
                           * @description Show history of previous steps
                           */
                          showHistory: boolean;
                          /**
                           * Track Links
                           * @description Whether to track link clicks
                           */
                          trackLinks: boolean;
                          /**
                           * Track Opens
                           * @description Whether to track email opens
                           */
                          trackOpens: boolean;
                      };
                      /**
                       * Subject
                       * @description Subject line of the message
                       * @default null
                       */
                      subject: string | null;
                  }[];
              }[] | null;
              /**
               * Time Zone
               * @description Time zone for campaign scheduling
               * @default null
               */
              timeZone: string | null;
              /**
               * Track Links
               * @description Track link clicks
               * @default null
               */
              trackLinks: boolean | null;
              /**
               * Track Opens
               * @description Track email opens
               * @default null
               */
              trackOpens: boolean | null;
          } | null;
          /**
           * Start At
           * Format: date-time
           * @description Timestamp when the campaign started
           * @default null
           */
          startAt: string | null;
          /**
           * Status
           * @description Current status of the campaign
           * @enum {string}
           */
          status: "RUNNING" | "PAUSED" | "DRAFT" | "FINISHED" | "ARCHIVED";
          /**
           * Use Many Providers
           * @description Whether to use multiple providers
           * @default null
           */
          useManyProviders: boolean | null;
          /**
           * User Id
           * @description ID of the user who owns the campaign
           */
          userId: string;
          /**
           * Zapier Data
           * @description Zapier integration settings
           * @default null
           */
          zapierData: {
              /**
               * Events
               * @description Zapier events to subscribe to
               */
              events: string[];
              /**
               * Webhook Url
               * @description Zapier webhook URL to send events
               */
              webhookUrl: string;
          }[] | null;
      };
      /**
       * Success
       * @description Whether the campaign was created successfully
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
 * Type of EMELIA's EMELIA_CREATE_WEBHOOK tool input.
 */
type EMELIA_CREATE_WEBHOOK_INPUT = {
  /**
   * Campaign Id
   * @description The ID of the campaign to attach the webhook to (use 'ALL_CAMPAIGNS' for all campaigns)
   */
  campaignId?: string;
  /**
   * Events
   * @description List of events to subscribe to. For linkedin: VISITED, INVITED, ACCEPTED, MESSAGE_SENT, REPLIED; for email: REPLIED, OPENED, CLICKED, SENT, BOUNCED, UNSUBSCRIBED; for advanced: MAIL_REPLIED, OPENED, CLICKED, MAIL_SENT, BOUNCED, UNSUBSCRIBED, LINKEDIN_REPLIED, VISITED, ACCEPTED, MESSAGE_SENT, LIKED.
   */
  events?: string[];
  /**
   * Hook Url
   * Format: uri
   * @description The destination URL for the webhook payloads.
   */
  hookUrl?: unknown;
  /**
   * Type
   * @description The type of campaign the webhook is for.
   * @enum {string}
   */
  type?: "linkedin" | "email" | "advanced";
};

/**
 * Type of EMELIA's EMELIA_CREATE_WEBHOOK tool output.
 */
type EMELIA_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the webhook was created successfully.
       */
      success: boolean;
      /**
       * Webhook Id
       * @description The unique identifier for the newly created webhook.
       */
      webhookId: string;
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
 * Type of EMELIA's EMELIA_DELETE_CONTACT_FROM_CAMPAIGN tool input.
 */
type EMELIA_DELETE_CONTACT_FROM_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description The ID of the campaign from which to remove the contact.
   */
  campaign_id?: string;
  /**
   * Contact Id
   * @description The ID of the contact to remove from the campaign.
   */
  contact_id?: string;
};

/**
 * Type of EMELIA's EMELIA_DELETE_CONTACT_FROM_CAMPAIGN tool output.
 */
type EMELIA_DELETE_CONTACT_FROM_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Provides additional information about the deletion status.
       */
      message: string;
      /**
       * Success
       * @description Indicates if the contact was removed successfully.
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
 * Type of EMELIA's EMELIA_DELETE_CONTACT_FROM_LINKEDIN_CAMPAIGN tool input.
 */
type EMELIA_DELETE_CONTACT_FROM_LINKEDIN_CAMPAIGN_INPUT = {
  /**
   * Id
   * @description The unique identifier of the LinkedIn campaign.
   */
  id?: string;
  /**
   * Url
   * Format: uri
   * @description The LinkedIn profile URL of the contact to remove.
   */
  url?: unknown;
};

/**
 * Type of EMELIA's EMELIA_DELETE_CONTACT_FROM_LINKEDIN_CAMPAIGN tool output.
 */
type EMELIA_DELETE_CONTACT_FROM_LINKEDIN_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the contact was removed successfully.
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
 * Type of EMELIA's EMELIA_DELETE_WEBHOOK tool input.
 */
type EMELIA_DELETE_WEBHOOK_INPUT = {
  /**
   * Campaign Id
   * @description The campaign ID to delete the webhook from (use 'ALL_CAMPAIGNS' for all campaigns).
   */
  campaignId?: string;
  /**
   * Hook Url
   * Format: uri
   * @description The exact URL of the webhook to delete.
   */
  hookUrl?: unknown;
  /**
   * Type
   * @description The type of campaign the webhook is attached to. Possible values: linkedin, email, advanced.
   * @default null
   * @enum {string|null}
   */
  type: "linkedin" | "email" | "advanced" | null;
};

/**
 * Type of EMELIA's EMELIA_DELETE_WEBHOOK tool output.
 */
type EMELIA_DELETE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the webhook was successfully deleted.
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
 * Type of EMELIA's EMELIA_FIND_EMAIL_SINGLE_CONTACT tool input.
 */
type EMELIA_FIND_EMAIL_SINGLE_CONTACT_INPUT = {
  /**
   * Company Name
   * @description Name of the contact's company (e.g., 'Acme Corp').
   */
  companyName?: string;
  /**
   * Company Website
   * @description Website of the contact's company (e.g., 'https://acme.com').
   * @default null
   */
  companyWebsite: string | null;
  /**
   * Country
   * @description Country of the contact or company (ISO 3166-1 alpha-2 code or name).
   * @default null
   */
  country: string | null;
  /**
   * Fullname
   * @description Full name of the contact to find (e.g., 'John Doe').
   */
  fullname?: string;
};

/**
 * Type of EMELIA's EMELIA_FIND_EMAIL_SINGLE_CONTACT tool output.
 */
type EMELIA_FIND_EMAIL_SINGLE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Job Id
       * @description Identifier of the initiated email lookup job.
       */
      jobId: string;
      /**
       * Success
       * @description Whether the API call was successful.
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
 * Type of EMELIA's EMELIA_GET_CAMPAIGN_ACTIVITIES tool input.
 */
type EMELIA_GET_CAMPAIGN_ACTIVITIES_INPUT = {
  /**
   * Campaign Id
   * @description ID of the campaign to retrieve activities for
   */
  campaignId?: string;
  /**
   * Contact Id
   * @description Filter activities by a specific contact ID
   * @default null
   */
  contactId: string | null;
  /**
   * Page
   * @description Page number for pagination (1-based index)
   * @default null
   */
  page: number | null;
  /**
   * Query
   * @description Free-text search across activities
   * @default null
   */
  query: string | null;
  /**
   * Type
   * @description Filter activities by event type
   * @default null
   * @enum {string|null}
   */
  type: "SENT" | "FIRST_OPEN" | "OPENED" | "CLICKED" | "REPLIED" | "RE_REPLY" | "BOUNCED" | "UNSUBSCRIBED" | null;
  /**
   * Version Id
   * @description Filter activities by a specific campaign version ID
   * @default null
   */
  versionId: string | null;
};

/**
 * Type of EMELIA's EMELIA_GET_CAMPAIGN_ACTIVITIES tool output.
 */
type EMELIA_GET_CAMPAIGN_ACTIVITIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Activities
       * @description List of activities for the specified campaign
       */
      activities: {
          /**
           * Campaign
           * @description Campaign ID
           */
          campaign: string;
          /**
           * Contact
           * @description Contact ID associated with this activity
           */
          contact: string;
          /**
           * Custom Data
           * @description Additional data provided by the email provider
           */
          customData: {
              /**
               * Content
               * @description Body content of the message or snippet
               */
              content: string;
              /**
               * Date
               * Format: date-time
               * @description Timestamp of the activity in ISO 8601 format
               */
              date: string;
              /**
               * Link
               * @description URL clicked by the recipient, if event is CLICKED
               */
              link: string;
              /**
               * Message
               * @description Full status message or error returned by provider
               */
              message: string;
              /**
               * Message Id
               * @description ID of the message in the email provider
               */
              messageId: string;
              /**
               * Provider Id
               * @description ID of the email provider for this message
               */
              providerId: string;
          };
          /**
           * Event
           * @description Type of event that occurred
           * @enum {string}
           */
          event: "SENT" | "FIRST_OPEN" | "OPENED" | "CLICKED" | "REPLIED" | "RE_REPLY" | "BOUNCED" | "UNSUBSCRIBED";
          /**
           * Provider Id
           * @description ID of the email provider used
           */
          providerId: string;
          /**
           * Step Id
           * @description ID of the campaign step
           */
          stepId: string;
          /**
           * Version Id
           * @description Version ID of the campaign
           */
          versionId: string;
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
 * Type of EMELIA's EMELIA_GET_FIND_EMAIL_RESULT tool input.
 */
type EMELIA_GET_FIND_EMAIL_RESULT_INPUT = {
  /**
   * Job Id
   * @description The ID of the find-email job to retrieve the result for.
   */
  jobId?: string;
};

/**
 * Type of EMELIA's EMELIA_GET_FIND_EMAIL_RESULT tool output.
 */
type EMELIA_GET_FIND_EMAIL_RESULT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO-8601 timestamp when the job was created.
       */
      createdAt: string;
      /**
       * Emails
       * @description List of found emails with details.
       */
      emails: {
          /**
           * Confidence
           * @description Confidence score for the found email, between 0 and 1.
           */
          confidence: number;
          /**
           * Email
           * @description The found email address.
           */
          email: string;
          /**
           * Source
           * @description Source from where the email was found.
           */
          source: string;
      }[];
      /**
       * Job Id
       * @description The job identifier.
       */
      jobId: string;
      /**
       * Status
       * @description The status of the job (e.g., 'completed').
       */
      status: string;
      /**
       * Updated At
       * @description ISO-8601 timestamp when the job was last updated.
       */
      updatedAt: string;
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
 * Type of EMELIA's EMELIA_GET_FIND_PHONE_RESULT tool input.
 */
type EMELIA_GET_FIND_PHONE_RESULT_INPUT = {
  /**
   * Job Id
   * @description ID of the phone-find job to get the result for
   */
  job_id?: string;
};

/**
 * Type of EMELIA's EMELIA_GET_FIND_PHONE_RESULT tool output.
 */
type EMELIA_GET_FIND_PHONE_RESULT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if the job failed
       * @default null
       */
      error: string | null;
      /**
       * Result
       * @description Information about the job's outcome
       */
      result: {
          /**
           * Found
           * @description Indicates if the phone number was found
           */
          found: boolean;
          /**
           * Message
           * @description Additional information about the job result
           */
          message: string;
          /**
           * Phone
           * @description The retrieved phone number if found
           * @default null
           */
          phone: string | null;
      };
      /**
       * Status
       * @description Current status of the job: 'completed', 'in_progress', or 'failed'
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
 * Type of EMELIA's EMELIA_GET_VERIFY_EMAIL_RESULT tool input.
 */
type EMELIA_GET_VERIFY_EMAIL_RESULT_INPUT = {
  /**
   * Job Id
   * @description ID of the email verification job to get the result for
   */
  jobId?: string;
};

/**
 * Type of EMELIA's EMELIA_GET_VERIFY_EMAIL_RESULT tool output.
 */
type EMELIA_GET_VERIFY_EMAIL_RESULT_OUTPUT = {
  /**
   * Data
   * @description Payload containing the verification result details
   */
  data?: {
      /**
       * Date
       * Format: date-time
       * @description Timestamp when the job was last updated (ISO 8601)
       */
      date: string;
      /**
       * Email
       * @description The email address that was verified
       */
      email: string;
      /**
       * Qualification
       * @description Qualification outcome of the email verification
       * @enum {string}
       */
      qualification: "valid" | "invalid";
      /**
       * Status
       * @description Current status of the verification job
       * @enum {string}
       */
      status: "running" | "done" | "error";
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Success
   * @description Whether the API call was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of EMELIA's EMELIA_INITIATE_EMAIL_VERIFICATION_JOB tool input.
 */
type EMELIA_INITIATE_EMAIL_VERIFICATION_JOB_INPUT = {
  /**
   * Email
   * @description The email address to verify asynchronously.
   */
  email?: string;
};

/**
 * Type of EMELIA's EMELIA_INITIATE_EMAIL_VERIFICATION_JOB tool output.
 */
type EMELIA_INITIATE_EMAIL_VERIFICATION_JOB_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Job Id
       * @description Identifier of the initiated email verification job.
       */
      jobId: string;
      /**
       * Success
       * @description Whether the API call was successful.
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
 * Type of EMELIA's EMELIA_INITIATE_PHONE_FIND_JOB tool input.
 */
type EMELIA_INITIATE_PHONE_FIND_JOB_INPUT = {
  /**
   * Linkedin Url
   * @description LinkedIn profile URL of the contact for which to find the phone number.
   */
  linkedinUrl?: string;
};

/**
 * Type of EMELIA's EMELIA_INITIATE_PHONE_FIND_JOB tool output.
 */
type EMELIA_INITIATE_PHONE_FIND_JOB_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Job Id
       * @description Identifier of the initiated phone-find job.
       */
      jobId: string;
      /**
       * Message
       * @description Confirmation message from the API.
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
 * Type of EMELIA's EMELIA_LIST_CAMPAIGNS tool input.
 */
type EMELIA_LIST_CAMPAIGNS_INPUT = {
  /**
   * Limit
   * @description Number of items per page
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination (1-based index)
   * @default null
   */
  page: number | null;
  /**
   * Search
   * @description Search string to filter campaigns by name or attributes
   * @default null
   */
  search: string | null;
};

/**
 * Type of EMELIA's EMELIA_LIST_CAMPAIGNS tool output.
 */
type EMELIA_LIST_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description List of campaign objects
   */
  data?: {
      /**
       * Created At
       * @description ISO-8601 timestamp when the campaign was created
       */
      createdAt: string;
      /**
       * Id
       * @description Unique identifier of the campaign
       */
      id: string;
      /**
       * Name
       * @description Name of the campaign
       */
      name: string;
      /**
       * Status
       * @description Current status of the campaign
       */
      status: string;
      /**
       * Updated At
       * @description ISO-8601 timestamp when the campaign was last updated
       */
      updatedAt: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Pagination details for the campaigns list
   */
  meta?: {
      /**
       * Limit
       * @description Number of items per page
       */
      limit: number;
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Pages
       * @description Total number of pages available
       */
      pages: number;
      /**
       * Total
       * @description Total number of campaigns
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
 * Type of EMELIA's EMELIA_LIST_CAMPAIGN_CONTACTS tool input.
 */
type EMELIA_LIST_CAMPAIGN_CONTACTS_INPUT = {
  /**
   * Campaign Id
   * @description Unique identifier of the email campaign.
   */
  campaignId?: string;
  /**
   * Page
   * @description Page number for pagination (1-based index).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of contacts per page.
   * @default null
   */
  perPage: number | null;
  /**
   * Search
   * @description Search keyword to filter contacts.
   * @default null
   */
  search: string | null;
};

/**
 * Type of EMELIA's EMELIA_LIST_CAMPAIGN_CONTACTS tool output.
 */
type EMELIA_LIST_CAMPAIGN_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of contact objects in the campaign.
       */
      contacts: {
          /**
           * Email
           * @description Contact's email address.
           */
          email: string;
          /**
           * First Name
           * @description Contact's first name.
           */
          firstName: string;
          /**
           * Id
           * @description Unique contact identifier.
           */
          id: string;
          /**
           * Last Name
           * @description Contact's last name.
           */
          lastName: string;
          /**
           * Status
           * @description Contact's status in campaign.
           */
          status: string;
      }[];
      /**
       * Pagination
       * @description Pagination details for the contact list.
       */
      pagination: {
          /**
           * Page
           * @description Current page number.
           */
          page: number;
          /**
           * Per Page
           * @description Number of contacts per page.
           */
          perPage: number;
          /**
           * Total
           * @description Total number of contacts.
           */
          total: number;
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
 * Type of EMELIA's EMELIA_LIST_EMAIL_PROVIDERS tool input.
 */
type EMELIA_LIST_EMAIL_PROVIDERS_INPUT = object;

/**
 * Type of EMELIA's EMELIA_LIST_EMAIL_PROVIDERS tool output.
 */
type EMELIA_LIST_EMAIL_PROVIDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Providers
       * @description Array of configured email providers
       */
      providers: {
          /**
           * Id
           * @description Unique identifier of the email provider
           */
          id: string;
          /**
           * Is Active
           * @description Whether the provider is active or not
           */
          is_active: boolean;
          /**
           * Name
           * @description Name of the email provider
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
 * Type of EMELIA's EMELIA_LIST_LINKEDIN_CAMPAIGNS tool input.
 */
type EMELIA_LIST_LINKEDIN_CAMPAIGNS_INPUT = {
  /**
   * Page
   * @description Page number for pagination (must be >= 1).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page (must be >= 1).
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of EMELIA's EMELIA_LIST_LINKEDIN_CAMPAIGNS tool output.
 */
type EMELIA_LIST_LINKEDIN_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Campaigns
       * @description List of LinkedIn campaigns.
       */
      campaigns: {
          /**
           * Created At
           * @description Creation timestamp in ISO 8601 format.
           */
          created_at: string;
          /**
           * Id
           * @description Campaign ID.
           */
          id: string;
          /**
           * Name
           * @description Campaign name.
           */
          name: string;
          /**
           * Status
           * @description Campaign status (e.g., active, paused).
           */
          status: string;
          /**
           * Updated At
           * @description Last updated timestamp in ISO 8601 format.
           */
          updated_at: string;
      }[];
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Per Page
       * @description Number of items per page.
       */
      per_page: number;
      /**
       * Total
       * @description Total number of campaigns.
       */
      total: number;
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
 * Type of EMELIA's EMELIA_LIST_WEBHOOKS tool input.
 */
type EMELIA_LIST_WEBHOOKS_INPUT = object;

/**
 * Type of EMELIA's EMELIA_LIST_WEBHOOKS tool output.
 */
type EMELIA_LIST_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Webhooks
       * @description List of webhook objects
       */
      webhooks: {
          /**
           * Created At
           * @description ISO-8601 timestamp when the webhook was created
           */
          createdAt: string;
          /**
           * Events
           * @description List of event names the webhook listens to
           */
          events: string[];
          /**
           * Id
           * @description Unique identifier of the webhook
           */
          id: string;
          /**
           * Is Active
           * @description Whether the webhook is currently active
           */
          isActive: boolean;
          /**
           * Name
           * @description Name of the webhook
           */
          name: string;
          /**
           * Updated At
           * @description ISO-8601 timestamp when the webhook was last updated
           */
          updatedAt: string;
          /**
           * Url
           * @description Target URL for the webhook
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
 * Type of EMELIA's EMELIA_REMOVE_CONTACT_FROM_BLACKLIST tool input.
 */
type EMELIA_REMOVE_CONTACT_FROM_BLACKLIST_INPUT = {
  /**
   * Email Or Domain
   * @description The email address or domain to remove from the blacklist.
   */
  email_or_domain?: string;
};

/**
 * Type of EMELIA's EMELIA_REMOVE_CONTACT_FROM_BLACKLIST tool output.
 */
type EMELIA_REMOVE_CONTACT_FROM_BLACKLIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Result message indicating success or failure of the removal operation.
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
 * Type map of all available tool input types for toolkit "EMELIA".
 */
export type EMELIA_TOOL_INPUTS = {
  ADD_CONTACT_TO_BLACKLIST: EMELIA_ADD_CONTACT_TO_BLACKLIST_INPUT
  ADD_CONTACT_TO_CAMPAIGN: EMELIA_ADD_CONTACT_TO_CAMPAIGN_INPUT
  CREATE_CAMPAIGN: EMELIA_CREATE_CAMPAIGN_INPUT
  CREATE_LINKEDIN_CAMPAIGN: EMELIA_CREATE_LINKEDIN_CAMPAIGN_INPUT
  CREATE_WEBHOOK: EMELIA_CREATE_WEBHOOK_INPUT
  DELETE_CONTACT_FROM_CAMPAIGN: EMELIA_DELETE_CONTACT_FROM_CAMPAIGN_INPUT
  DELETE_CONTACT_FROM_LINKEDIN_CAMPAIGN: EMELIA_DELETE_CONTACT_FROM_LINKEDIN_CAMPAIGN_INPUT
  DELETE_WEBHOOK: EMELIA_DELETE_WEBHOOK_INPUT
  FIND_EMAIL_SINGLE_CONTACT: EMELIA_FIND_EMAIL_SINGLE_CONTACT_INPUT
  GET_CAMPAIGN_ACTIVITIES: EMELIA_GET_CAMPAIGN_ACTIVITIES_INPUT
  GET_FIND_EMAIL_RESULT: EMELIA_GET_FIND_EMAIL_RESULT_INPUT
  GET_FIND_PHONE_RESULT: EMELIA_GET_FIND_PHONE_RESULT_INPUT
  GET_VERIFY_EMAIL_RESULT: EMELIA_GET_VERIFY_EMAIL_RESULT_INPUT
  INITIATE_EMAIL_VERIFICATION_JOB: EMELIA_INITIATE_EMAIL_VERIFICATION_JOB_INPUT
  INITIATE_PHONE_FIND_JOB: EMELIA_INITIATE_PHONE_FIND_JOB_INPUT
  LIST_CAMPAIGNS: EMELIA_LIST_CAMPAIGNS_INPUT
  LIST_CAMPAIGN_CONTACTS: EMELIA_LIST_CAMPAIGN_CONTACTS_INPUT
  LIST_EMAIL_PROVIDERS: EMELIA_LIST_EMAIL_PROVIDERS_INPUT
  LIST_LINKEDIN_CAMPAIGNS: EMELIA_LIST_LINKEDIN_CAMPAIGNS_INPUT
  LIST_WEBHOOKS: EMELIA_LIST_WEBHOOKS_INPUT
  REMOVE_CONTACT_FROM_BLACKLIST: EMELIA_REMOVE_CONTACT_FROM_BLACKLIST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "EMELIA".
 */
export type EMELIA_TOOL_OUTPUTS = {
  ADD_CONTACT_TO_BLACKLIST: EMELIA_ADD_CONTACT_TO_BLACKLIST_OUTPUT
  ADD_CONTACT_TO_CAMPAIGN: EMELIA_ADD_CONTACT_TO_CAMPAIGN_OUTPUT
  CREATE_CAMPAIGN: EMELIA_CREATE_CAMPAIGN_OUTPUT
  CREATE_LINKEDIN_CAMPAIGN: EMELIA_CREATE_LINKEDIN_CAMPAIGN_OUTPUT
  CREATE_WEBHOOK: EMELIA_CREATE_WEBHOOK_OUTPUT
  DELETE_CONTACT_FROM_CAMPAIGN: EMELIA_DELETE_CONTACT_FROM_CAMPAIGN_OUTPUT
  DELETE_CONTACT_FROM_LINKEDIN_CAMPAIGN: EMELIA_DELETE_CONTACT_FROM_LINKEDIN_CAMPAIGN_OUTPUT
  DELETE_WEBHOOK: EMELIA_DELETE_WEBHOOK_OUTPUT
  FIND_EMAIL_SINGLE_CONTACT: EMELIA_FIND_EMAIL_SINGLE_CONTACT_OUTPUT
  GET_CAMPAIGN_ACTIVITIES: EMELIA_GET_CAMPAIGN_ACTIVITIES_OUTPUT
  GET_FIND_EMAIL_RESULT: EMELIA_GET_FIND_EMAIL_RESULT_OUTPUT
  GET_FIND_PHONE_RESULT: EMELIA_GET_FIND_PHONE_RESULT_OUTPUT
  GET_VERIFY_EMAIL_RESULT: EMELIA_GET_VERIFY_EMAIL_RESULT_OUTPUT
  INITIATE_EMAIL_VERIFICATION_JOB: EMELIA_INITIATE_EMAIL_VERIFICATION_JOB_OUTPUT
  INITIATE_PHONE_FIND_JOB: EMELIA_INITIATE_PHONE_FIND_JOB_OUTPUT
  LIST_CAMPAIGNS: EMELIA_LIST_CAMPAIGNS_OUTPUT
  LIST_CAMPAIGN_CONTACTS: EMELIA_LIST_CAMPAIGN_CONTACTS_OUTPUT
  LIST_EMAIL_PROVIDERS: EMELIA_LIST_EMAIL_PROVIDERS_OUTPUT
  LIST_LINKEDIN_CAMPAIGNS: EMELIA_LIST_LINKEDIN_CAMPAIGNS_OUTPUT
  LIST_WEBHOOKS: EMELIA_LIST_WEBHOOKS_OUTPUT
  REMOVE_CONTACT_FROM_BLACKLIST: EMELIA_REMOVE_CONTACT_FROM_BLACKLIST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's EMELIA toolkit.
 */
export const EMELIA = {
  slug: "emelia",
  tools: {
    /**
     * Tool to add a contact to the email blacklist. use after confirming that no further emails should be sent to a specific address. example: 'add blocked user@example.com to blacklist.'
     */
    ADD_CONTACT_TO_BLACKLIST: "EMELIA_ADD_CONTACT_TO_BLACKLIST",
    /**
     * Tool to add a contact to an email campaign. use when you have collected subscriber details and want to enroll them in a campaign.
     */
    ADD_CONTACT_TO_CAMPAIGN: "EMELIA_ADD_CONTACT_TO_CAMPAIGN",
    /**
     * Tool to create a new email campaign. use after you have finalized the campaign name.
     */
    CREATE_CAMPAIGN: "EMELIA_CREATE_CAMPAIGN",
    /**
     * Tool to create a new linkedin campaign. use when you need to launch a linkedin outreach sequence.
     */
    CREATE_LINKEDIN_CAMPAIGN: "EMELIA_CREATE_LINKEDIN_CAMPAIGN",
    /**
     * Tool to create a new webhook for campaign events. use when you need to subscribe to activity updates after determining the campaign id and desired events.
     */
    CREATE_WEBHOOK: "EMELIA_CREATE_WEBHOOK",
    /**
     * Tool to remove a contact from an email campaign. use when you need to revoke a contact's subscription from a specific campaign. note: this operation is irreversible.
     */
    DELETE_CONTACT_FROM_CAMPAIGN: "EMELIA_DELETE_CONTACT_FROM_CAMPAIGN",
    /**
     * Tool to delete a contact from a linkedin campaign. use when you need to remove a contact by campaign id and contact url. call after confirming the contact exists in the campaign.
     */
    DELETE_CONTACT_FROM_LINKEDIN_CAMPAIGN: "EMELIA_DELETE_CONTACT_FROM_LINKEDIN_CAMPAIGN",
    /**
     * Tool to delete a specific webhook. use when you need to remove an existing webhook by url after identifying the campaign.
     */
    DELETE_WEBHOOK: "EMELIA_DELETE_WEBHOOK",
    /**
     * Tool to initiate a job to find the email address of a specific contact. use when you have the contact's full name and company details and want to retrieve their email address.
     */
    FIND_EMAIL_SINGLE_CONTACT: "EMELIA_FIND_EMAIL_SINGLE_CONTACT",
    /**
     * Tool to retrieve activities for a specific email campaign. use after obtaining the campaign id.
     */
    GET_CAMPAIGN_ACTIVITIES: "EMELIA_GET_CAMPAIGN_ACTIVITIES",
    /**
     * Tool to retrieve the result of a previously initiated email find job. use after initiating a find-email job to check its status and outcome.
     */
    GET_FIND_EMAIL_RESULT: "EMELIA_GET_FIND_EMAIL_RESULT",
    /**
     * Tool to retrieve the outcome of a previously initiated phone-find job. use after starting a job to fetch its status and details by job id.
     */
    GET_FIND_PHONE_RESULT: "EMELIA_GET_FIND_PHONE_RESULT",
    /**
     * Tool to get the result of an email verification job. use after initiating an email verification job to check its status and outcome.
     */
    GET_VERIFY_EMAIL_RESULT: "EMELIA_GET_VERIFY_EMAIL_RESULT",
    /**
     * Tool to initiate an asynchronous email verification job."
     */
    INITIATE_EMAIL_VERIFICATION_JOB: "EMELIA_INITIATE_EMAIL_VERIFICATION_JOB",
    /**
     * Tool to initiate a phone-find job for a single contact. use when you want to retrieve a contact's phone number based on their email address.
     */
    INITIATE_PHONE_FIND_JOB: "EMELIA_INITIATE_PHONE_FIND_JOB",
    /**
     * Tool to retrieve all email campaigns. use when you need to fetch the list of campaigns, with optional pagination or search filters.
     */
    LIST_CAMPAIGNS: "EMELIA_LIST_CAMPAIGNS",
    /**
     * Tool to list contacts in a specific email campaign. use when you need to retrieve campaign subscribers with optional pagination and search filters.
     */
    LIST_CAMPAIGN_CONTACTS: "EMELIA_LIST_CAMPAIGN_CONTACTS",
    /**
     * Tool to retrieve all configured email providers. use after setting up your email providers to view them.
     */
    LIST_EMAIL_PROVIDERS: "EMELIA_LIST_EMAIL_PROVIDERS",
    /**
     * Tool to list all linkedin campaigns. use when you need an overview of your linkedin campaigns and want to paginate results.
     */
    LIST_LINKEDIN_CAMPAIGNS: "EMELIA_LIST_LINKEDIN_CAMPAIGNS",
    /**
     * Tool to retrieve all webhooks. use when you need to fetch every configured webhook in emelia.
     */
    LIST_WEBHOOKS: "EMELIA_LIST_WEBHOOKS",
    /**
     * Tool to remove a contact or domain from the email blacklist. use after verifying that the address or domain should no longer be blocked.
     */
    REMOVE_CONTACT_FROM_BLACKLIST: "EMELIA_REMOVE_CONTACT_FROM_BLACKLIST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "EMELIA".
 */
export type EMELIA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "EMELIA".
 */
export type EMELIA_TRIGGER_EVENTS = {}
