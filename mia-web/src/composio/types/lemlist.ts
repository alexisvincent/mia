// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of LEMLIST's LEMLIST_DELETE_DELETE_SCHEDULE tool input.
 */
type LEMLIST_DELETE_DELETE_SCHEDULE_INPUT = {
  /**
   * Schedule Id
   * @description The unique ID of the schedule to delete
   */
  scheduleId?: string;
};

/**
 * Type of LEMLIST's LEMLIST_DELETE_DELETE_SCHEDULE tool output.
 */
type LEMLIST_DELETE_DELETE_SCHEDULE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description The ID of the deleted schedule
       */
      _id: string;
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
 * Type of LEMLIST's LEMLIST_DELETE_DELETE_UNSUBSCRIBE_EMAIL tool input.
 */
type LEMLIST_DELETE_DELETE_UNSUBSCRIBE_EMAIL_INPUT = {
  /**
   * Email
   * @description The email address to remove from the unsubscribed list
   */
  email?: string;
};

/**
 * Type of LEMLIST's LEMLIST_DELETE_DELETE_UNSUBSCRIBE_EMAIL tool output.
 */
type LEMLIST_DELETE_DELETE_UNSUBSCRIBE_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description Unique unsubscribe record identifier
       */
      _id: string;
      /**
       * Value
       * @description Email of the unsubscribed user
       */
      value: string;
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
 * Type of LEMLIST's LEMLIST_DELETE_UNSUBSCRIBE_LEAD_FROM_CAMPAIGN tool input.
 */
type LEMLIST_DELETE_UNSUBSCRIBE_LEAD_FROM_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description The unique ID of the campaign from which the lead will be unsubscribed
   */
  campaignId?: string;
  /**
   * Lead Id
   * @description The unique ID of the lead to unsubscribe
   */
  leadId?: string;
};

/**
 * Type of LEMLIST's LEMLIST_DELETE_UNSUBSCRIBE_LEAD_FROM_CAMPAIGN tool output.
 */
type LEMLIST_DELETE_UNSUBSCRIBE_LEAD_FROM_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Payload data returned by API
   */
  data?: {
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
  /**
   * Successfull
   * @description True if the lead was successfully unsubscribed
   */
  successfull?: boolean;
};

/**
 * Type of LEMLIST's LEMLIST_GET_ALL_WEBHOOKS tool input.
 */
type LEMLIST_GET_ALL_WEBHOOKS_INPUT = object;

/**
 * Type of LEMLIST's LEMLIST_GET_ALL_WEBHOOKS tool output.
 */
type LEMLIST_GET_ALL_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Webhooks
       * @description List of webhooks
       */
      webhooks: {
          /**
           * Created At
           * @description ISO-8601 timestamp when webhook was created
           */
          createdAt: string;
          /**
           * Events
           * @description List of event names triggering the webhook
           */
          events: string[];
          /**
           * Id
           * @description Unique identifier for the webhook
           */
          id: string;
          /**
           * Updated At
           * @description ISO-8601 timestamp when webhook was last updated
           */
          updatedAt: string;
          /**
           * Url
           * @description Destination URL for webhook payloads
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
 * Type of LEMLIST's LEMLIST_GET_CAMPAIGN_BY_ID tool input.
 */
type LEMLIST_GET_CAMPAIGN_BY_ID_INPUT = {
  /**
   * Campaign Id
   * @description Unique identifier of the campaign to retrieve.
   */
  campaignId?: string;
};

/**
 * Type of LEMLIST's LEMLIST_GET_CAMPAIGN_BY_ID tool output.
 */
type LEMLIST_GET_CAMPAIGN_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description Unique identifier of the campaign.
       */
      _id: string;
      /**
       * Created At
       * @description ISO 8601 timestamp when the campaign was created.
       */
      createdAt: string;
      /**
       * Creator
       * @description Creator details of the campaign.
       */
      creator: {
          [key: string]: unknown;
      };
      /**
       * Name
       * @description Name of the campaign.
       */
      name: string;
      /**
       * Senders
       * @description List of senders associated with the campaign.
       */
      senders: {
          [key: string]: unknown;
      }[];
      /**
       * Status
       * @description Current status of the campaign.
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
 * Type of LEMLIST's LEMLIST_GET_CAMPAIGN_EXPORT_START tool input.
 */
type LEMLIST_GET_CAMPAIGN_EXPORT_START_INPUT = {
  /**
   * Campaign Id
   * @description Unique identifier of the campaign to export.
   */
  campaignId?: string;
};

/**
 * Type of LEMLIST's LEMLIST_GET_CAMPAIGN_EXPORT_START tool output.
 */
type LEMLIST_GET_CAMPAIGN_EXPORT_START_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Campaign Id
       * @description Identifier of the campaign being exported.
       */
      campaignId: string;
      /**
       * Campaign Name
       * @description Name of the campaign being exported.
       */
      campaignName: string;
      /**
       * Id
       * @description Identifier of the export process.
       */
      id: string;
      /**
       * Progress
       * @description Completion percentage of the export.
       */
      progress: number;
      /**
       * Progress Index
       * @description Current workflow step index.
       */
      progressIndex: number;
      /**
       * Progress Last Step Duration
       * @description Duration in ms of the last step executed.
       */
      progressLastStepDuration: number;
      /**
       * Progress Time
       * @description Epoch ms of last progress update.
       */
      progressTime: number;
      /**
       * Progress Type
       * @description Descriptive name of the current step.
       */
      progressType: string;
      /**
       * Started At
       * @description ISO 8601 timestamp when the export started.
       */
      startedAt: string;
      /**
       * Status
       * @description Current export status (pending, done, error).
       */
      status: string;
      /**
       * Team Id
       * @description Identifier of the team owning the campaign.
       */
      teamId: string;
      /**
       * Total
       * @description Total items to export.
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
 * Type of LEMLIST's LEMLIST_GET_CAMPAIGN_EXPORT_STATUS tool input.
 */
type LEMLIST_GET_CAMPAIGN_EXPORT_STATUS_INPUT = {
  /**
   * Campaign Id
   * @description The ID of the campaign whose export is being checked.
   */
  campaignId?: string;
  /**
   * Export Id
   * @description The ID of the export job returned from the start export endpoint.
   */
  exportId?: string;
};

/**
 * Type of LEMLIST's LEMLIST_GET_CAMPAIGN_EXPORT_STATUS tool output.
 */
type LEMLIST_GET_CAMPAIGN_EXPORT_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ok
       * @description True if request was successful.
       */
      ok: boolean;
      /**
       * Status
       * @description Detailed status of the export job.
       */
      status: {
          /**
           * Campaign Id
           * @description ID of the campaign exported.
           */
          campaignId: string;
          /**
           * Campaign Name
           * @description Name of the campaign exported.
           */
          campaignName: string;
          /**
           * Ended At
           * @description ISO timestamp when export ended, present only if status is done or error.
           * @default null
           */
          endedAt: string | null;
          /**
           * Id
           * @description Unique identifier of the export job.
           */
          id: string;
          /**
           * Progress
           * @description Completion percentage of export process.
           */
          progress: number;
          /**
           * Progress Index
           * @description Current step index in the export process.
           */
          progressIndex: number;
          /**
           * Progress Last Step Duration
           * @description Duration in ms of the last completed step.
           */
          progressLastStepDuration: number;
          /**
           * Progress Time
           * @description Timestamp in ms of last progress update.
           */
          progressTime: number;
          /**
           * Progress Type
           * @description Type of current progress step.
           */
          progressType: string;
          /**
           * Started At
           * @description ISO timestamp when export started.
           */
          startedAt: string;
          /**
           * Status
           * @description Current status of the export: pending, done, or error.
           */
          status: string;
          /**
           * Team Id
           * @description ID of the team that owns the export.
           */
          teamId: string;
          /**
           * Total
           * @description Total number of items to export.
           */
          total: number;
          /**
           * Url
           * @description Download URL for the CSV if status is done.
           * @default null
           */
          url: string | null;
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
 * Type of LEMLIST's LEMLIST_GET_CAMPAIGN_SEQUENCES tool input.
 */
type LEMLIST_GET_CAMPAIGN_SEQUENCES_INPUT = {
  /**
   * Campaign Id
   * @description Unique identifier of the campaign to fetch sequences for.
   */
  campaignId?: string;
};

/**
 * Type of LEMLIST's LEMLIST_GET_CAMPAIGN_SEQUENCES tool output.
 */
type LEMLIST_GET_CAMPAIGN_SEQUENCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Sequences
       * @description Dictionary of sequence_id to CampaignSequence object.
       */
      sequences: {
          [key: string]: {
              /**
               * Id
               * @description Unique sequence identifier.
               */
              _id: string;
              /**
               * Conditionalstepindex
               * @description Index of the conditional step that created this branch.
               * @default null
               */
              conditionalStepIndex: number | null;
              /**
               * Level
               * @description Hierarchy level of this sequence branch, 0 for root.
               */
              level: number;
              /**
               * Parentid
               * @description Parent sequence ID if this is a nested branch.
               * @default null
               */
              parentId: string | null;
              /**
               * Steps
               * @description Ordered list of steps in this sequence.
               */
              steps: {
                  /**
                   * Id
                   * @description Unique identifier of the step.
                   */
                  _id: string;
                  /**
                   * Conditions
                   * @description List of branching conditions, present if type is 'conditional'.
                   * @default null
                   */
                  conditions: {
                      /**
                       * Delay
                       * @description Delay before executing the branch, in hours.
                       * @default null
                       */
                      delay: number | null;
                      /**
                       * Delaytype
                       * @description Type of delay, e.g., 'waitUntil' or 'within'.
                       * @default null
                       */
                      delayType: string | null;
                      /**
                       * Fallback
                       * @description Indicates this branch is a fallback path if no other conditions match.
                       * @default null
                       */
                      fallback: boolean | null;
                      /**
                       * Key
                       * @description Condition key to match an event, e.g., 'linkedinInviteAccepted'.
                       * @default null
                       */
                      key: string | null;
                      /**
                       * Label
                       * @description Label for the condition branch, e.g., 'Accepted invite'.
                       * @default null
                       */
                      label: string | null;
                      /**
                       * Sequenceid
                       * @description ID of the target sequence for this condition.
                       */
                      sequenceId: string;
                  }[] | null;
                  /**
                   * Delay
                   * @description Delay before this step executes, in hours.
                   */
                  delay: number;
                  /**
                   * Emailtemplateid
                   * @description ID of the email template for email steps, if applicable.
                   * @default null
                   */
                  emailTemplateId: string | null;
                  /**
                   * Index
                   * @description Position index of this step in the sequence.
                   */
                  index: number;
                  /**
                   * Message
                   * @description Message content for steps that send messages (email/LinkedIn).
                   * @default null
                   */
                  message: string | null;
                  /**
                   * Type
                   * @description Type of step, e.g., 'email', 'linkedinInvite', 'conditional'.
                   */
                  type: string;
              }[];
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
 * Type of LEMLIST's LEMLIST_GET_EXPORT_CAMPAIGN_LEADS tool input.
 */
type LEMLIST_GET_EXPORT_CAMPAIGN_LEADS_INPUT = {
  /**
   * Campaign Id
   * @description The ID of the campaign to export leads from.
   */
  campaignId?: string;
  /**
   * Format
   * @description Output format for the export. Choose 'json' or 'csv'.
   * @default json
   * @enum {string}
   */
  format: "json" | "csv";
  /**
   * State
   * @description Filter to export only the specified leads' last state. Specify one of the global states: imported, scanned, skipped, reviewed, contacted, hooked, attracted, warmed, interested, notInterested, emailsBounced, emailsUnsubscribed, meetingBooked, paused, failed; or detailed states: emailsSent, emailsOpened, emailsClicked, emailsReplied, emailsInterested, emailsNotInterested, emailsFailed, opportunitiesDone, aircallDone, aircallInterested, aircallNotInterested, apiDone, apiInterested, apiNotInterested, linkedinVisitDone, linkedinVisitFailed, linkedinInviteDone, linkedinInviteAccepted, linkedinInviteFailed, linkedinSent, linkedinOpened, linkedinReplied, linkedinInterested, linkedinNotInterested, linkedinSendFailed, manualInterested, manualNotInterested. Use 'all' to export all leads regardless of state.
   */
  state?: string;
};

/**
 * Type of LEMLIST's LEMLIST_GET_EXPORT_CAMPAIGN_LEADS tool output.
 */
type LEMLIST_GET_EXPORT_CAMPAIGN_LEADS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Csv
       * @description Raw CSV content when format is csv
       * @default null
       */
      csv: string | null;
      /**
       * Leads
       * @description List of leads when format is json
       * @default null
       */
      leads: {
          /**
           * Company Domain
           * @description Domain of the lead's company
           * @default null
           */
          companyDomain: string | null;
          /**
           * Company Name
           * @description Lead's company name
           * @default null
           */
          companyName: string | null;
          /**
           * Email
           * @description Lead's email address
           */
          email: string;
          /**
           * Email Status
           * @description Deliverability status of the lead's email (deliverable, risky, undeliverable)
           * @default null
           */
          emailStatus: string | null;
          /**
           * First Name
           * @description Lead's first name
           * @default null
           */
          firstName: string | null;
          /**
           * Icebreaker
           * @description Personalized icebreaker text for the lead
           * @default null
           */
          icebreaker: string | null;
          /**
           * Job Title
           * @description Lead's job title
           * @default null
           */
          jobTitle: string | null;
          /**
           * Last Name
           * @description Lead's last name
           * @default null
           */
          lastName: string | null;
          /**
           * Last State
           * @description The last detailed state of the lead
           * @default null
           */
          lastState: string | null;
          /**
           * Linkedin Url
           * @description URL to the lead's LinkedIn profile
           * @default null
           */
          linkedinUrl: string | null;
          /**
           * Phone
           * @description Lead's phone number
           * @default null
           */
          phone: string | null;
          /**
           * Picture
           * @description URL to the lead's profile picture
           * @default null
           */
          picture: string | null;
          /**
           * Status
           * @description Global state category of the lead
           * @default null
           */
          status: string | null;
      }[] | null;
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
 * Type of LEMLIST's LEMLIST_GET_EXPORT_UNSUBSCRIBES tool input.
 */
type LEMLIST_GET_EXPORT_UNSUBSCRIBES_INPUT = object;

/**
 * Type of LEMLIST's LEMLIST_GET_EXPORT_UNSUBSCRIBES tool output.
 */
type LEMLIST_GET_EXPORT_UNSUBSCRIBES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Csv
       * @description Raw CSV content of all unsubscribed email addresses, each line with value,source,createdAt
       */
      csv: string;
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
 * Type of LEMLIST's LEMLIST_GET_GET_UNSUBSCRIBE_EMAIL tool input.
 */
type LEMLIST_GET_GET_UNSUBSCRIBE_EMAIL_INPUT = {
  /**
   * Email
   * @description Email address of the unsubscribed user to retrieve
   */
  email?: string;
};

/**
 * Type of LEMLIST's LEMLIST_GET_GET_UNSUBSCRIBE_EMAIL tool output.
 */
type LEMLIST_GET_GET_UNSUBSCRIBE_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Unsubscribe
       * @description Unsubscribe record for the given email
       */
      unsubscribe: {
          /**
           *  Id
           * @description Unique unsubscribe record identifier
           */
          _id: string;
          /**
           * Created At
           * @description ISO 8601 timestamp when the unsubscribe occurred
           */
          createdAt: string;
          /**
           * Source
           * @description Source of the unsubscribe entry, e.g., 'api' or 'campaign'
           */
          source: string;
          /**
           * Value
           * @description Email address or domain of the unsubscribed entry
           */
          value: string;
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
 * Type of LEMLIST's LEMLIST_GET_RETRIEVE_ACTIVITIES tool input.
 */
type LEMLIST_GET_RETRIEVE_ACTIVITIES_INPUT = {
  /**
   * Campaign Id
   * @description Filter activities by specific campaign ID.
   * @default null
   */
  campaignId: string | null;
  /**
   * Limit
   * @description Maximum number of activities to retrieve.
   * @default null
   */
  limit: number | null;
  /**
   * Type
   * @description Filter activities by type, e.g., 'linkedinInviteAccepted', 'emailSent'.
   * @default null
   */
  type: string | null;
};

/**
 * Type of LEMLIST's LEMLIST_GET_RETRIEVE_ACTIVITIES tool output.
 */
type LEMLIST_GET_RETRIEVE_ACTIVITIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Activities
       * @description List of retrieved activity records.
       */
      activities: {
          /**
           *  Id
           * @description Unique identifier for the activity.
           */
          _id: string;
          /**
           * Campaign Id
           * @description ID of the associated campaign.
           */
          campaignId: string;
          /**
           * Created At
           * @description ISO 8601 timestamp when the activity was created.
           */
          createdAt: string;
          /**
           * Created By
           * @description ID of the user who triggered the activity.
           */
          createdBy: string;
          /**
           * Error Message
           * @description Error details if the activity failed.
           * @default null
           */
          errorMessage: string | null;
          /**
           * Lead Id
           * @description ID of the lead associated with the activity.
           */
          leadId: string;
          /**
           * Message
           * @description Content or message of the activity, if any.
           * @default null
           */
          message: string | null;
          /**
           * Meta Data
           * @description Additional metadata related to the activity.
           * @default null
           */
          metaData: {
              [key: string]: unknown;
          } | null;
          /**
           * Type
           * @description Type of activity, e.g., 'linkedinInviteDone'.
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
 * Type of LEMLIST's LEMLIST_GET_RETRIEVE_LEAD_BY_EMAIL tool input.
 */
type LEMLIST_GET_RETRIEVE_LEAD_BY_EMAIL_INPUT = {
  /**
   * Email
   * @description Email address of the lead to retrieve.
   */
  email?: string;
};

/**
 * Type of LEMLIST's LEMLIST_GET_RETRIEVE_LEAD_BY_EMAIL tool output.
 */
type LEMLIST_GET_RETRIEVE_LEAD_BY_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description Unique identifier of the lead
       */
      _id: string;
      /**
       * Campaign Id
       * @description Campaign ID associated with the lead
       * @default null
       */
      campaignId: string | null;
      /**
       * Campaign Name
       * @description Name of the campaign associated with the lead
       * @default null
       */
      campaignName: string | null;
      /**
       * Email
       * @description Email address of the lead
       */
      email: string;
      /**
       * First Name
       * @description First name of the lead
       * @default null
       */
      firstName: string | null;
      /**
       * Is Paused
       * @description True if the lead is paused in the campaign
       * @default null
       */
      isPaused: boolean | null;
      /**
       * Last Name
       * @description Last name of the lead
       * @default null
       */
      lastName: string | null;
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
 * Type of LEMLIST's LEMLIST_GET_RETRIEVE_UNSUBSCRIBES tool input.
 */
type LEMLIST_GET_RETRIEVE_UNSUBSCRIBES_INPUT = object;

/**
 * Type of LEMLIST's LEMLIST_GET_RETRIEVE_UNSUBSCRIBES tool output.
 */
type LEMLIST_GET_RETRIEVE_UNSUBSCRIBES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Unsubscribes
       * @description List of unsubscribe records returned by the API
       */
      unsubscribes: {
          /**
           *  Id
           * @description Unique unsubscribe record identifier
           */
          _id: string;
          /**
           * Campaign Id
           * @description ID of the campaign from which the user unsubscribed
           */
          campaignId: string;
          /**
           * Date
           * @description ISO 8601 timestamp when the unsubscribe occurred
           */
          date: string;
          /**
           * Email
           * @description Email of the unsubscribed user
           */
          email: string;
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
 * Type of LEMLIST's LEMLIST_GET_TEAM_CREDITS tool input.
 */
type LEMLIST_GET_TEAM_CREDITS_INPUT = object;

/**
 * Type of LEMLIST's LEMLIST_GET_TEAM_CREDITS tool output.
 */
type LEMLIST_GET_TEAM_CREDITS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Credits
       * @description Total credits left in the team
       */
      credits: number;
      /**
       * Details
       * @description Detailed breakdown of credits
       */
      details: {
          /**
           * Remaining
           * @description Breakdown of remaining credits by source
           */
          remaining: {
              /**
               * Freemium
               * @description Credits from freemium plan
               */
              freemium: number;
              /**
               * Gifted
               * @description Gifted credits
               */
              gifted: number;
              /**
               * Paid
               * @description Paid credits
               */
              paid: number;
              /**
               * Subscription
               * @description Credits from subscription plan
               */
              subscription: number;
              /**
               * Total
               * @description Total remaining credits
               */
              total: number;
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
 * Type of LEMLIST's LEMLIST_GET_TEAM_INFO tool input.
 */
type LEMLIST_GET_TEAM_INFO_INPUT = object;

/**
 * Type of LEMLIST's LEMLIST_GET_TEAM_INFO tool output.
 */
type LEMLIST_GET_TEAM_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description Unique team identifier
       */
      _id: string;
      /**
       * Agency
       * @description Agency user ID if this team is managed by an agency
       * @default null
       */
      agency: string | null;
      /**
       * Beta
       * @description Beta features enabled for the team
       */
      beta?: string[];
      /**
       * Created At
       * Format: date-time
       * @description Timestamp when the team was created
       */
      createdAt: string;
      /**
       * Created By
       * @description User ID that created this team
       */
      createdBy: string;
      /**
       * Hooks
       * @description Configured webhooks for team-level events
       */
      hooks?: {
          /**
           *  Id
           * @description Unique identifier of the hook
           */
          _id: string;
          /**
           * Campaign Id
           * @description Campaign ID this hook is scoped to, if any
           * @default null
           */
          campaignId: string | null;
          /**
           * Created At
           * Format: date-time
           * @description Timestamp when this hook was created
           */
          createdAt: string;
          /**
           * Target Url
           * @description URL invoked when the event fires
           */
          targetUrl: string;
          /**
           * Type
           * @description Event type triggering this hook, e.g., 'emailsOpened'; null if listening to all events
           * @default null
           */
          type: string | null;
          /**
           * Zap Id
           * @description Zapier ID if this hook is tied to a Zap integration
           * @default null
           */
          zapId: number | null;
      }[];
      /**
       * Invited Users
       * @description Pending invites to join the team
       */
      invitedUsers?: {
          /**
           * Email
           * @description Email address of the invited user
           */
          email: string;
          /**
           * Invited At
           * Format: date-time
           * @description Timestamp when the invitation was sent
           */
          invitedAt: string;
          /**
           * Invited By
           * @description User ID who sent the invitation
           */
          invitedBy: string;
          /**
           * Role
           * @description Role granted to the invited user ('admin' or 'member')
           * @enum {string}
           */
          role: "admin" | "member";
      }[];
      /**
       * Name
       * @description Team name
       */
      name: string;
      /**
       * Picture Id
       * @description File ID for the team's avatar/picture
       * @default null
       */
      pictureId: string | null;
      /**
       * Slack Webhook
       * @description Slack incoming-webhook URL for team notifications
       * @default null
       */
      slackWebhook: string | null;
      /**
       * User Ids
       * @description List of user IDs who belong to this team
       */
      userIds: string[];
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
 * Type of LEMLIST's LEMLIST_GET_USER_INFO tool input.
 */
type LEMLIST_GET_USER_INFO_INPUT = object;

/**
 * Type of LEMLIST's LEMLIST_GET_USER_INFO tool output.
 */
type LEMLIST_GET_USER_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description Unique identifier for the user
       */
      _id: string;
      /**
       * Company
       * @description Company information object for the user
       * @default null
       */
      company: {
          [key: string]: string;
      } | null;
      /**
       * Email
       * @description User's email address
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
       * Picture
       * @description URL to the user's profile picture
       * @default null
       */
      picture: string | null;
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
 * Type of LEMLIST's LEMLIST_PATCH_MARK_LEAD_AS_NOT_INTERESTED_IN_CAMPAIGN tool input.
 */
type LEMLIST_PATCH_MARK_LEAD_AS_NOT_INTERESTED_IN_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description The unique identifier of the campaign.
   */
  campaignId?: string;
  /**
   * Lead Id
   * @description The unique identifier of the lead.
   */
  leadId?: string;
  /**
   * Status
   * @description The status to set for the lead; must be 'not_interested'.
   * @constant
   */
  status?: "not_interested";
};

/**
 * Type of LEMLIST's LEMLIST_PATCH_MARK_LEAD_AS_NOT_INTERESTED_IN_CAMPAIGN tool output.
 */
type LEMLIST_PATCH_MARK_LEAD_AS_NOT_INTERESTED_IN_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email
       * @description The email address of the lead.
       */
      email: string;
      /**
       * Id
       * @description The unique identifier of the lead.
       */
      id: string;
      /**
       * Status
       * @description The updated status of the lead.
       */
      status: string;
      /**
       * Updated At
       * @description Timestamp when the lead status was updated.
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
 * Type of LEMLIST's LEMLIST_PATCH_UPDATE_CAMPAIGN tool input.
 */
type LEMLIST_PATCH_UPDATE_CAMPAIGN_INPUT = {
  /**
   * Auto Lead Interest
   * @description Automatically determine lead interest.
   * @default null
   */
  autoLeadInterest: boolean | null;
  /**
   * Campaign Id
   * @description Identifier of the campaign to update.
   */
  campaignId?: string;
  /**
   * Disable Track Click
   * @description Disable email click tracking.
   * @default null
   */
  disableTrackClick: boolean | null;
  /**
   * Disable Track Open
   * @description Disable email open tracking.
   * @default null
   */
  disableTrackOpen: boolean | null;
  /**
   * Disable Track Reply
   * @description Disable reply tracking.
   * @default null
   */
  disableTrackReply: boolean | null;
  /**
   * Leads Paused By Interest
   * @description Pause leads when they show interest.
   * @default null
   */
  leadsPausedByInterest: boolean | null;
  /**
   * Name
   * @description New name for the campaign.
   * @default null
   */
  name: string | null;
  /**
   * Opportunity Clicked
   * @description Mark opportunity when clicked.
   * @default null
   */
  opportunityClicked: boolean | null;
  /**
   * Opportunity Replied
   * @description Mark opportunity when replied.
   * @default null
   */
  opportunityReplied: boolean | null;
  /**
   * Sequence Sharing
   * @description Enable or disable sharing of the sequence.
   * @default null
   */
  sequenceSharing: boolean | null;
  /**
   * Stop On Email Replied
   * @description Whether the campaign should stop when an email is replied to.
   * @default null
   */
  stopOnEmailReplied: boolean | null;
  /**
   * Stop On Link Clicked
   * @description Whether the campaign should stop on any link click.
   * @default null
   */
  stopOnLinkClicked: boolean | null;
  /**
   * Stop On Link Clicked Filter
   * @description URL filter for stopping on link click; set to null to unset.
   * @default null
   */
  stopOnLinkClickedFilter: string | null;
  /**
   * Stop On Meeting Booked
   * @description Whether the campaign should stop when a meeting is booked.
   * @default null
   */
  stopOnMeetingBooked: boolean | null;
};

/**
 * Type of LEMLIST's LEMLIST_PATCH_UPDATE_CAMPAIGN tool output.
 */
type LEMLIST_PATCH_UPDATE_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Auto Lead Interest
       * @description Updated autoLeadInterest setting.
       * @default null
       */
      autoLeadInterest: boolean | null;
      /**
       * Disable Track Click
       * @description Updated disableTrackClick setting.
       * @default null
       */
      disableTrackClick: boolean | null;
      /**
       * Disable Track Open
       * @description Updated disableTrackOpen setting.
       * @default null
       */
      disableTrackOpen: boolean | null;
      /**
       * Disable Track Reply
       * @description Updated disableTrackReply setting.
       * @default null
       */
      disableTrackReply: boolean | null;
      /**
       * Leads Paused By Interest
       * @description Updated leadsPausedByInterest setting.
       * @default null
       */
      leadsPausedByInterest: boolean | null;
      /**
       * Name
       * @description Updated campaign name.
       * @default null
       */
      name: string | null;
      /**
       * Opportunity Clicked
       * @description Updated opportunityClicked setting.
       * @default null
       */
      opportunityClicked: boolean | null;
      /**
       * Opportunity Replied
       * @description Updated opportunityReplied setting.
       * @default null
       */
      opportunityReplied: boolean | null;
      /**
       * Sequence Sharing
       * @description Updated sequenceSharing setting.
       * @default null
       */
      sequenceSharing: boolean | null;
      /**
       * Stop On Email Replied
       * @description Updated stopOnEmailReplied setting.
       * @default null
       */
      stopOnEmailReplied: boolean | null;
      /**
       * Stop On Link Clicked
       * @description Updated stopOnLinkClicked setting.
       * @default null
       */
      stopOnLinkClicked: boolean | null;
      /**
       * Stop On Link Clicked Filter
       * @description Updated stopOnLinkClickedFilter setting.
       * @default null
       */
      stopOnLinkClickedFilter: string | null;
      /**
       * Stop On Meeting Booked
       * @description Updated stopOnMeetingBooked setting.
       * @default null
       */
      stopOnMeetingBooked: boolean | null;
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
 * Type of LEMLIST's LEMLIST_PATCH_UPDATE_SCHEDULE tool input.
 */
type LEMLIST_PATCH_UPDATE_SCHEDULE_INPUT = {
  /**
   * Days
   * @description List of weekdays when sends are allowed. e.g., ['monday','tuesday','wednesday'].
   * @default null
   */
  days: string[] | null;
  /**
   * Enabled
   * @description Whether the schedule is active (true) or paused (false).
   * @default null
   */
  enabled: boolean | null;
  /**
   * Max Per Day
   * @description Maximum number of sends allowed per day.
   * @default null
   */
  maxPerDay: number | null;
  /**
   * Name
   * @description New name for the schedule.
   * @default null
   */
  name: string | null;
  /**
   * Schedule Id
   * @description Identifier of the schedule to update.
   */
  scheduleId?: string;
  /**
   * Send End
   * @description Daily send window end time in HH:mm format. e.g., '17:30'.
   * @default null
   */
  sendEnd: string | null;
  /**
   * Send Start
   * @description Daily send window start time in HH:mm format. e.g., '09:00'.
   * @default null
   */
  sendStart: string | null;
  /**
   * Timezone
   * @description IANA timezone for the schedule. e.g., 'Europe/Paris'.
   * @default null
   */
  timezone: string | null;
};

/**
 * Type of LEMLIST's LEMLIST_PATCH_UPDATE_SCHEDULE tool output.
 */
type LEMLIST_PATCH_UPDATE_SCHEDULE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description Unique identifier of the schedule.
       */
      _id: string;
      /**
       * Created At
       * @description Timestamp when the schedule was created.
       */
      createdAt: string;
      /**
       * Created By
       * @description Identifier of the user who created the schedule.
       */
      createdBy: string;
      /**
       * End
       * @description End time of the schedule in HH:mm format.
       */
      end: string;
      /**
       * Name
       * @description Name of the schedule.
       */
      name: string;
      /**
       * Seconds To Wait
       * @description Delay in seconds between operations.
       */
      secondsToWait: number;
      /**
       * Start
       * @description Start time of the schedule in HH:mm format.
       */
      start: string;
      /**
       * Team Id
       * @description Identifier of the team to which the schedule belongs.
       */
      teamId: string;
      /**
       * Timezone
       * @description Timezone of the schedule.
       */
      timezone: string;
      /**
       * Updated At
       * @description Timestamp when the schedule was last updated.
       * @default null
       */
      updatedAt: string | null;
      /**
       * Weekdays
       * @description Active weekdays for the schedule (1=Monday .. 7=Sunday).
       */
      weekdays: number[];
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
 * Type of LEMLIST's LEMLIST_POST_ADD_UNSUBSCRIBE_EMAIL_DOMAIN tool input.
 */
type LEMLIST_POST_ADD_UNSUBSCRIBE_EMAIL_DOMAIN_INPUT = {
  /**
   * Email
   * @description Email address or domain to add to the unsubscribed list. Domain entries must start with '@', e.g. '@example.com'.
   */
  email?: string;
};

/**
 * Type of LEMLIST's LEMLIST_POST_ADD_UNSUBSCRIBE_EMAIL_DOMAIN tool output.
 */
type LEMLIST_POST_ADD_UNSUBSCRIBE_EMAIL_DOMAIN_OUTPUT = {
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
 * Type of LEMLIST's LEMLIST_POST_ADD_VARIABLES_TO_LEAD tool input.
 */
type LEMLIST_POST_ADD_VARIABLES_TO_LEAD_INPUT = {
  /**
   * Company
   * @description Namespace for these variables; must match your company name in Lemlist.
   */
  company?: string;
  /**
   * Lead Id
   * @description Unique identifier of the lead to which the variables will be added.
   */
  leadId?: string;
  /**
   * Variables
   * @description Mapping of variable names to values. Keys must be unique and not override existing variables.
   */
  variables?: {
      [key: string]: string;
  };
};

/**
 * Type of LEMLIST's LEMLIST_POST_ADD_VARIABLES_TO_LEAD tool output.
 */
type LEMLIST_POST_ADD_VARIABLES_TO_LEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ok
       * @description True if variables were successfully added.
       */
      ok: boolean;
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
 * Type of LEMLIST's LEMLIST_POST_ASSOCIATE_SCHEDULE_WITH_CAMPAIGN tool input.
 */
type LEMLIST_POST_ASSOCIATE_SCHEDULE_WITH_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description ID of the campaign to which the schedule will be associated
   */
  campaignId?: string;
  /**
   * Schedule Id
   * @description ID of the schedule to associate with the campaign
   */
  scheduleId?: string;
};

/**
 * Type of LEMLIST's LEMLIST_POST_ASSOCIATE_SCHEDULE_WITH_CAMPAIGN tool output.
 */
type LEMLIST_POST_ASSOCIATE_SCHEDULE_WITH_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Campaign Id
       * @description ID of the campaign with which the schedule is associated
       */
      campaignId: string;
      /**
       * Schedule Id
       * @description ID of the schedule associated with the campaign
       */
      scheduleId: string;
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
 * Type of LEMLIST's LEMLIST_POST_CREATE_CAMPAIGN tool input.
 */
type LEMLIST_POST_CREATE_CAMPAIGN_INPUT = {
  /**
   * Name
   * @description The name of the campaign to create
   */
  name?: string;
  /**
   * Team Id
   * @description The ID of the team under which the campaign will be created
   */
  teamId?: string;
};

/**
 * Type of LEMLIST's LEMLIST_POST_CREATE_CAMPAIGN tool output.
 */
type LEMLIST_POST_CREATE_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Campaign Id
       * @description The unique identifier of the newly created campaign
       */
      campaignId: string;
      /**
       * Schedule Id
       * @description The unique identifier of the schedule created with this campaign
       * @default null
       */
      scheduleId: string | null;
      /**
       * Sequence Id
       * @description The unique identifier of the sequence created with this campaign
       * @default null
       */
      sequenceId: string | null;
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
 * Type of LEMLIST's LEMLIST_POST_CREATE_SCHEDULE tool input.
 */
type LEMLIST_POST_CREATE_SCHEDULE_INPUT = {
  /**
   * End
   * @description Optional end time in HH:mm format. Defaults to '18:00'.
   * @default null
   */
  end: string | null;
  /**
   * Name
   * @description Optional name for the schedule. Defaults to 'Default schedule'.
   * @default null
   */
  name: string | null;
  /**
   * Seconds To Wait
   * @description Optional delay in seconds between operations. Defaults to 1200 seconds.
   * @default null
   */
  secondsToWait: number | null;
  /**
   * Start
   * @description Optional start time in HH:mm format. Defaults to '09:00'.
   * @default null
   */
  start: string | null;
  /**
   * Timezone
   * @description Optional timezone for the schedule (IANA timezone identifier). Defaults to 'Europe/Paris'.
   * @default null
   */
  timezone: string | null;
  /**
   * Weekdays
   * @description Optional list of active weekdays (1=Monday .. 7=Sunday). Defaults to [1,2,3,4,5].
   * @default null
   */
  weekdays: number[] | null;
};

/**
 * Type of LEMLIST's LEMLIST_POST_CREATE_SCHEDULE tool output.
 */
type LEMLIST_POST_CREATE_SCHEDULE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description Unique identifier of the created schedule.
       */
      _id: string;
      /**
       * Created At
       * @description Timestamp when the schedule was created.
       */
      createdAt: string;
      /**
       * Created By
       * @description Identifier of the user who created the schedule.
       */
      createdBy: string;
      /**
       * End
       * @description End time of the schedule in HH:mm format.
       */
      end: string;
      /**
       * Name
       * @description Name of the schedule.
       */
      name: string;
      /**
       * Seconds To Wait
       * @description Delay in seconds between operations.
       */
      secondsToWait: number;
      /**
       * Start
       * @description Start time of the schedule in HH:mm format.
       */
      start: string;
      /**
       * Team Id
       * @description Identifier of the team to which the schedule belongs.
       */
      teamId: string;
      /**
       * Timezone
       * @description Timezone of the schedule.
       */
      timezone: string;
      /**
       * Weekdays
       * @description Active weekdays for the schedule (1=Monday .. 7=Sunday).
       */
      weekdays: number[];
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
 * Type of LEMLIST's LEMLIST_POST_MARK_LEAD_AS_INTERESTED tool input.
 */
type LEMLIST_POST_MARK_LEAD_AS_INTERESTED_INPUT = {
  /**
   * Email
   * @description Email address of the lead to mark as interested.
   */
  email?: string;
};

/**
 * Type of LEMLIST's LEMLIST_POST_MARK_LEAD_AS_INTERESTED tool output.
 */
type LEMLIST_POST_MARK_LEAD_AS_INTERESTED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Leads
       * @description List of leads updated to 'interested' status across campaigns
       */
      leads: {
          /**
           *  Id
           * @description Unique identifier of the lead
           */
          _id: string;
          /**
           * Campaign Id
           * @description ID of the campaign associated with this lead entry
           */
          campaignId: string;
          /**
           * Company Domain
           * @description Domain of the lead's company
           * @default null
           */
          companyDomain: string | null;
          /**
           * Company Name
           * @description Lead's company name
           * @default null
           */
          companyName: string | null;
          /**
           * Email
           * @description Lead's email address
           */
          email: string;
          /**
           * First Name
           * @description Lead's first name
           * @default null
           */
          firstName: string | null;
          /**
           * Icebreaker
           * @description Personalized icebreaker text for the lead
           * @default null
           */
          icebreaker: string | null;
          /**
           * Is Paused
           * @description Indicates if the lead is paused in any campaign
           */
          isPaused: boolean;
          /**
           * Job Title
           * @description Lead's job title
           * @default null
           */
          jobTitle: string | null;
          /**
           * Last Name
           * @description Lead's last name
           * @default null
           */
          lastName: string | null;
          /**
           * Linkedin Url
           * @description URL to the lead's LinkedIn profile
           * @default null
           */
          linkedinUrl: string | null;
          /**
           * Phone
           * @description Lead's phone number
           * @default null
           */
          phone: string | null;
          /**
           * Picture
           * @description URL to the lead's profile picture
           * @default null
           */
          picture: string | null;
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
 * Type of LEMLIST's LEMLIST_POST_MARK_LEAD_AS_INTERESTED_IN_CAMPAIGN tool input.
 */
type LEMLIST_POST_MARK_LEAD_AS_INTERESTED_IN_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description Unique identifier of the campaign.
   */
  campaignId?: string;
  /**
   * Lead Email
   * @description Email address of the lead to mark as interested.
   */
  leadEmail?: string;
};

/**
 * Type of LEMLIST's LEMLIST_POST_MARK_LEAD_AS_INTERESTED_IN_CAMPAIGN tool output.
 */
type LEMLIST_POST_MARK_LEAD_AS_INTERESTED_IN_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description Unique identifier of the lead.
       */
      _id: string;
      /**
       * Campaign Id
       * @description Identifier of the campaign associated with this lead.
       */
      campaignId: string;
      /**
       * Company Domain
       * @description Domain of the lead's company.
       * @default null
       */
      companyDomain: string | null;
      /**
       * Company Name
       * @description Lead's company name.
       * @default null
       */
      companyName: string | null;
      /**
       * Email
       * @description Email address of the lead.
       */
      email: string;
      /**
       * First Name
       * @description Lead's first name.
       * @default null
       */
      firstName: string | null;
      /**
       * Icebreaker
       * @description Personalized icebreaker text for the lead.
       * @default null
       */
      icebreaker: string | null;
      /**
       * Is Paused
       * @description Indicates if the lead is paused in any campaign.
       */
      isPaused: boolean;
      /**
       * Job Title
       * @description Lead's job title.
       * @default null
       */
      jobTitle: string | null;
      /**
       * Last Name
       * @description Lead's last name.
       * @default null
       */
      lastName: string | null;
      /**
       * Linkedin Url
       * @description URL to the lead's LinkedIn profile.
       * @default null
       */
      linkedinUrl: string | null;
      /**
       * Phone
       * @description Lead's phone number.
       * @default null
       */
      phone: string | null;
      /**
       * Picture
       * @description URL to the lead's profile picture.
       * @default null
       */
      picture: string | null;
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
 * Type of LEMLIST's LEMLIST_POST_MARK_LEAD_AS_NOT_INTERESTED tool input.
 */
type LEMLIST_POST_MARK_LEAD_AS_NOT_INTERESTED_INPUT = {
  /**
   * Lead Id Or Email
   * @description Email address or lead ID ('lea_...') to mark as not interested.
   */
  lead_id_or_email?: string;
};

/**
 * Type of LEMLIST's LEMLIST_POST_MARK_LEAD_AS_NOT_INTERESTED tool output.
 */
type LEMLIST_POST_MARK_LEAD_AS_NOT_INTERESTED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Leads
       * @description List of lead entries updated to 'not interested' status across campaigns
       */
      leads: {
          /**
           *  Id
           * @description Unique identifier of the lead entry
           */
          _id: string;
          /**
           * Campaign Id
           * @description ID of the campaign associated with this lead entry
           */
          campaignId: string;
          /**
           * Company Domain
           * @description Domain of the lead's company
           * @default null
           */
          companyDomain: string | null;
          /**
           * Company Name
           * @description Lead's company name
           * @default null
           */
          companyName: string | null;
          /**
           * Email
           * @description Lead's email address
           */
          email: string;
          /**
           * First Name
           * @description Lead's first name
           * @default null
           */
          firstName: string | null;
          /**
           * Icebreaker
           * @description Personalized icebreaker text for the lead
           * @default null
           */
          icebreaker: string | null;
          /**
           * Is Paused
           * @description Indicates if the lead is paused in any campaign
           */
          isPaused: boolean;
          /**
           * Job Title
           * @description Lead's job title
           * @default null
           */
          jobTitle: string | null;
          /**
           * Last Name
           * @description Lead's last name
           * @default null
           */
          lastName: string | null;
          /**
           * Linkedin Url
           * @description URL to the lead's LinkedIn profile
           * @default null
           */
          linkedinUrl: string | null;
          /**
           * Phone
           * @description Lead's phone number
           * @default null
           */
          phone: string | null;
          /**
           * Picture
           * @description URL to the lead's profile picture
           * @default null
           */
          picture: string | null;
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
 * Type of LEMLIST's LEMLIST_POST_PAUSE_CAMPAIGN tool input.
 */
type LEMLIST_POST_PAUSE_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description ID of the campaign to pause
   */
  campaignId?: string;
};

/**
 * Type of LEMLIST's LEMLIST_POST_PAUSE_CAMPAIGN tool output.
 */
type LEMLIST_POST_PAUSE_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description The ID of the campaign that was paused
       */
      _id: string;
      /**
       * State
       * @description New state of the campaign after pausing
       * @constant
       */
      state: "paused";
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
 * Type of LEMLIST's LEMLIST_POST_PAUSE_LEAD tool input.
 */
type LEMLIST_POST_PAUSE_LEAD_INPUT = {
  /**
   * Campaign Id
   * @description ID of the campaign to pause the lead in. If omitted, pauses in all campaigns.
   * @default null
   */
  campaignId: string | null;
  /**
   * Lead Id Or Email
   * @description Email address of the lead or the lead's Lemlist ID (e.g., lea_xxx)
   */
  leadIdOrEmail?: string;
};

/**
 * Type of LEMLIST's LEMLIST_POST_PAUSE_LEAD tool output.
 */
type LEMLIST_POST_PAUSE_LEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Leads
       * @description List of paused lead information for each campaign
       */
      leads: {
          /**
           *  Id
           * @description Unique Lemlist lead identifier
           */
          _id: string;
          /**
           * Campaign Id
           * @description Campaign ID in which the lead was paused
           */
          campaignId: string;
          /**
           * Company Domain
           * @description Lead's company domain
           * @default null
           */
          companyDomain: string | null;
          /**
           * Company Name
           * @description Lead's company name
           * @default null
           */
          companyName: string | null;
          /**
           * Email
           * @description Lead's email address
           */
          email: string;
          /**
           * First Name
           * @description Lead's first name
           * @default null
           */
          firstName: string | null;
          /**
           * Icebreaker
           * @description Lead's icebreaker text
           * @default null
           */
          icebreaker: string | null;
          /**
           * Is Paused
           * @description Whether the lead is paused; should be true after pausing
           */
          isPaused: boolean;
          /**
           * Job Title
           * @description Lead's job title
           * @default null
           */
          jobTitle: string | null;
          /**
           * Last Name
           * @description Lead's last name
           * @default null
           */
          lastName: string | null;
          /**
           * Linkedin Url
           * @description Lead's LinkedIn profile URL
           * @default null
           */
          linkedinUrl: string | null;
          /**
           * Phone
           * @description Lead's phone number
           * @default null
           */
          phone: string | null;
          /**
           * Picture
           * @description URL to lead's profile picture
           * @default null
           */
          picture: string | null;
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
 * Type map of all available tool input types for toolkit "LEMLIST".
 */
export type LEMLIST_TOOL_INPUTS = {
  DELETE_DELETE_SCHEDULE: LEMLIST_DELETE_DELETE_SCHEDULE_INPUT
  DELETE_DELETE_UNSUBSCRIBE_EMAIL: LEMLIST_DELETE_DELETE_UNSUBSCRIBE_EMAIL_INPUT
  DELETE_UNSUBSCRIBE_LEAD_FROM_CAMPAIGN: LEMLIST_DELETE_UNSUBSCRIBE_LEAD_FROM_CAMPAIGN_INPUT
  GET_ALL_WEBHOOKS: LEMLIST_GET_ALL_WEBHOOKS_INPUT
  GET_CAMPAIGN_BY_ID: LEMLIST_GET_CAMPAIGN_BY_ID_INPUT
  GET_CAMPAIGN_EXPORT_START: LEMLIST_GET_CAMPAIGN_EXPORT_START_INPUT
  GET_CAMPAIGN_EXPORT_STATUS: LEMLIST_GET_CAMPAIGN_EXPORT_STATUS_INPUT
  GET_CAMPAIGN_SEQUENCES: LEMLIST_GET_CAMPAIGN_SEQUENCES_INPUT
  GET_EXPORT_CAMPAIGN_LEADS: LEMLIST_GET_EXPORT_CAMPAIGN_LEADS_INPUT
  GET_EXPORT_UNSUBSCRIBES: LEMLIST_GET_EXPORT_UNSUBSCRIBES_INPUT
  GET_GET_UNSUBSCRIBE_EMAIL: LEMLIST_GET_GET_UNSUBSCRIBE_EMAIL_INPUT
  GET_RETRIEVE_ACTIVITIES: LEMLIST_GET_RETRIEVE_ACTIVITIES_INPUT
  GET_RETRIEVE_LEAD_BY_EMAIL: LEMLIST_GET_RETRIEVE_LEAD_BY_EMAIL_INPUT
  GET_RETRIEVE_UNSUBSCRIBES: LEMLIST_GET_RETRIEVE_UNSUBSCRIBES_INPUT
  GET_TEAM_CREDITS: LEMLIST_GET_TEAM_CREDITS_INPUT
  GET_TEAM_INFO: LEMLIST_GET_TEAM_INFO_INPUT
  GET_USER_INFO: LEMLIST_GET_USER_INFO_INPUT
  PATCH_MARK_LEAD_AS_NOT_INTERESTED_IN_CAMPAIGN: LEMLIST_PATCH_MARK_LEAD_AS_NOT_INTERESTED_IN_CAMPAIGN_INPUT
  PATCH_UPDATE_CAMPAIGN: LEMLIST_PATCH_UPDATE_CAMPAIGN_INPUT
  PATCH_UPDATE_SCHEDULE: LEMLIST_PATCH_UPDATE_SCHEDULE_INPUT
  POST_ADD_UNSUBSCRIBE_EMAIL_DOMAIN: LEMLIST_POST_ADD_UNSUBSCRIBE_EMAIL_DOMAIN_INPUT
  POST_ADD_VARIABLES_TO_LEAD: LEMLIST_POST_ADD_VARIABLES_TO_LEAD_INPUT
  POST_ASSOCIATE_SCHEDULE_WITH_CAMPAIGN: LEMLIST_POST_ASSOCIATE_SCHEDULE_WITH_CAMPAIGN_INPUT
  POST_CREATE_CAMPAIGN: LEMLIST_POST_CREATE_CAMPAIGN_INPUT
  POST_CREATE_SCHEDULE: LEMLIST_POST_CREATE_SCHEDULE_INPUT
  POST_MARK_LEAD_AS_INTERESTED: LEMLIST_POST_MARK_LEAD_AS_INTERESTED_INPUT
  POST_MARK_LEAD_AS_INTERESTED_IN_CAMPAIGN: LEMLIST_POST_MARK_LEAD_AS_INTERESTED_IN_CAMPAIGN_INPUT
  POST_MARK_LEAD_AS_NOT_INTERESTED: LEMLIST_POST_MARK_LEAD_AS_NOT_INTERESTED_INPUT
  POST_PAUSE_CAMPAIGN: LEMLIST_POST_PAUSE_CAMPAIGN_INPUT
  POST_PAUSE_LEAD: LEMLIST_POST_PAUSE_LEAD_INPUT
}

/**
 * Type map of all available tool input types for toolkit "LEMLIST".
 */
export type LEMLIST_TOOL_OUTPUTS = {
  DELETE_DELETE_SCHEDULE: LEMLIST_DELETE_DELETE_SCHEDULE_OUTPUT
  DELETE_DELETE_UNSUBSCRIBE_EMAIL: LEMLIST_DELETE_DELETE_UNSUBSCRIBE_EMAIL_OUTPUT
  DELETE_UNSUBSCRIBE_LEAD_FROM_CAMPAIGN: LEMLIST_DELETE_UNSUBSCRIBE_LEAD_FROM_CAMPAIGN_OUTPUT
  GET_ALL_WEBHOOKS: LEMLIST_GET_ALL_WEBHOOKS_OUTPUT
  GET_CAMPAIGN_BY_ID: LEMLIST_GET_CAMPAIGN_BY_ID_OUTPUT
  GET_CAMPAIGN_EXPORT_START: LEMLIST_GET_CAMPAIGN_EXPORT_START_OUTPUT
  GET_CAMPAIGN_EXPORT_STATUS: LEMLIST_GET_CAMPAIGN_EXPORT_STATUS_OUTPUT
  GET_CAMPAIGN_SEQUENCES: LEMLIST_GET_CAMPAIGN_SEQUENCES_OUTPUT
  GET_EXPORT_CAMPAIGN_LEADS: LEMLIST_GET_EXPORT_CAMPAIGN_LEADS_OUTPUT
  GET_EXPORT_UNSUBSCRIBES: LEMLIST_GET_EXPORT_UNSUBSCRIBES_OUTPUT
  GET_GET_UNSUBSCRIBE_EMAIL: LEMLIST_GET_GET_UNSUBSCRIBE_EMAIL_OUTPUT
  GET_RETRIEVE_ACTIVITIES: LEMLIST_GET_RETRIEVE_ACTIVITIES_OUTPUT
  GET_RETRIEVE_LEAD_BY_EMAIL: LEMLIST_GET_RETRIEVE_LEAD_BY_EMAIL_OUTPUT
  GET_RETRIEVE_UNSUBSCRIBES: LEMLIST_GET_RETRIEVE_UNSUBSCRIBES_OUTPUT
  GET_TEAM_CREDITS: LEMLIST_GET_TEAM_CREDITS_OUTPUT
  GET_TEAM_INFO: LEMLIST_GET_TEAM_INFO_OUTPUT
  GET_USER_INFO: LEMLIST_GET_USER_INFO_OUTPUT
  PATCH_MARK_LEAD_AS_NOT_INTERESTED_IN_CAMPAIGN: LEMLIST_PATCH_MARK_LEAD_AS_NOT_INTERESTED_IN_CAMPAIGN_OUTPUT
  PATCH_UPDATE_CAMPAIGN: LEMLIST_PATCH_UPDATE_CAMPAIGN_OUTPUT
  PATCH_UPDATE_SCHEDULE: LEMLIST_PATCH_UPDATE_SCHEDULE_OUTPUT
  POST_ADD_UNSUBSCRIBE_EMAIL_DOMAIN: LEMLIST_POST_ADD_UNSUBSCRIBE_EMAIL_DOMAIN_OUTPUT
  POST_ADD_VARIABLES_TO_LEAD: LEMLIST_POST_ADD_VARIABLES_TO_LEAD_OUTPUT
  POST_ASSOCIATE_SCHEDULE_WITH_CAMPAIGN: LEMLIST_POST_ASSOCIATE_SCHEDULE_WITH_CAMPAIGN_OUTPUT
  POST_CREATE_CAMPAIGN: LEMLIST_POST_CREATE_CAMPAIGN_OUTPUT
  POST_CREATE_SCHEDULE: LEMLIST_POST_CREATE_SCHEDULE_OUTPUT
  POST_MARK_LEAD_AS_INTERESTED: LEMLIST_POST_MARK_LEAD_AS_INTERESTED_OUTPUT
  POST_MARK_LEAD_AS_INTERESTED_IN_CAMPAIGN: LEMLIST_POST_MARK_LEAD_AS_INTERESTED_IN_CAMPAIGN_OUTPUT
  POST_MARK_LEAD_AS_NOT_INTERESTED: LEMLIST_POST_MARK_LEAD_AS_NOT_INTERESTED_OUTPUT
  POST_PAUSE_CAMPAIGN: LEMLIST_POST_PAUSE_CAMPAIGN_OUTPUT
  POST_PAUSE_LEAD: LEMLIST_POST_PAUSE_LEAD_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's LEMLIST toolkit.
 */
export const LEMLIST = {
  slug: "lemlist",
  tools: {
    /**
     * Tool to delete a specific schedule by scheduleid. use when you need to remove a schedule permanently after confirming its id.
     */
    DELETE_DELETE_SCHEDULE: "LEMLIST_DELETE_DELETE_SCHEDULE",
    /**
     * Tool to delete an email from the unsubscribed list. use when restoring a subscriber who has opted back in and you need to remove them from the suppressed contacts.
     */
    DELETE_DELETE_UNSUBSCRIBE_EMAIL: "LEMLIST_DELETE_DELETE_UNSUBSCRIBE_EMAIL",
    /**
     * Tool to unsubscribe a lead from a campaign. use when you need to stop further outreach by removing a lead from the specified campaign.
     */
    DELETE_UNSUBSCRIBE_LEAD_FROM_CAMPAIGN: "LEMLIST_DELETE_UNSUBSCRIBE_LEAD_FROM_CAMPAIGN",
    /**
     * Tool to retrieve the list of all webhooks configured for the team. use when you need to sync or audit active webhooks.
     */
    GET_ALL_WEBHOOKS: "LEMLIST_GET_ALL_WEBHOOKS",
    /**
     * Tool to retrieve a specific campaign by campaignid. use when you need detailed campaign information by id.
     */
    GET_CAMPAIGN_BY_ID: "LEMLIST_GET_CAMPAIGN_BY_ID",
    /**
     * Tool to start an asynchronous export of all campaign statistics (csv). use when you need to initiate a csv export for a given campaign and track its progress.
     */
    GET_CAMPAIGN_EXPORT_START: "LEMLIST_GET_CAMPAIGN_EXPORT_START",
    /**
     * Tool to check the status of an asynchronous campaign export. use after starting an export to poll until done or error.
     */
    GET_CAMPAIGN_EXPORT_STATUS: "LEMLIST_GET_CAMPAIGN_EXPORT_STATUS",
    /**
     * Tool to retrieve a list of all sequences for a campaign with steps and conditions. use after fetching campaign to inspect its nested sequences and branching rules.
     */
    GET_CAMPAIGN_SEQUENCES: "LEMLIST_GET_CAMPAIGN_SEQUENCES",
    /**
     * Tool to export campaign leads with state filtering and choose between json or csv output. use when you need to download leads and their statuses for reporting or analysis.
     */
    GET_EXPORT_CAMPAIGN_LEADS: "LEMLIST_GET_EXPORT_CAMPAIGN_LEADS",
    /**
     * Tool to download a csv file containing all unsubscribed email addresses. use when you need to export the full unsubscribes list for analysis or archival.
     */
    GET_EXPORT_UNSUBSCRIBES: "LEMLIST_GET_EXPORT_UNSUBSCRIBES",
    /**
     * Tool to retrieve a single unsubscribed email record. use when you need to verify if a specific email has opted out of campaigns before re-subscribing them.
     */
    GET_GET_UNSUBSCRIBE_EMAIL: "LEMLIST_GET_GET_UNSUBSCRIBE_EMAIL",
    /**
     * Tool to fetch recent campaign activities. use after authentication to retrieve activities filtered by campaignid, type, or limit.
     */
    GET_RETRIEVE_ACTIVITIES: "LEMLIST_GET_RETRIEVE_ACTIVITIES",
    /**
     * Tool to retrieve a lead by their email address. use when you have a lead's email to fetch complete lead details.
     */
    GET_RETRIEVE_LEAD_BY_EMAIL: "LEMLIST_GET_RETRIEVE_LEAD_BY_EMAIL",
    /**
     * Tool to retrieve the list of all people who are unsubscribed. use when you need to sync or audit unsubscribed contacts across your campaigns.
     */
    GET_RETRIEVE_UNSUBSCRIBES: "LEMLIST_GET_RETRIEVE_UNSUBSCRIBES",
    /**
     * Tool to retrieve credits left in the team. use after authenticating your session.
     */
    GET_TEAM_CREDITS: "LEMLIST_GET_TEAM_CREDITS",
    /**
     * Tool to retrieve information about your team. use after authentication to inspect current team settings, members, webhooks, and enabled features.
     */
    GET_TEAM_INFO: "LEMLIST_GET_TEAM_INFO",
    /**
     * Tool to retrieve all information of the authenticated user. use after confirming a valid access token.
     */
    GET_USER_INFO: "LEMLIST_GET_USER_INFO",
    /**
     * Tool to mark a lead as not interested in a specific campaign. use after confirming campaign and lead ids to set status to not interested.
     */
    PATCH_MARK_LEAD_AS_NOT_INTERESTED_IN_CAMPAIGN: "LEMLIST_PATCH_MARK_LEAD_AS_NOT_INTERESTED_IN_CAMPAIGN",
    /**
     * Tool to update settings of a campaign. use after fetching or creating a campaign to adjust name, stop-on behaviors, and other campaign flags.
     */
    PATCH_UPDATE_CAMPAIGN: "LEMLIST_PATCH_UPDATE_CAMPAIGN",
    /**
     * Tool to update an existing schedule with new parameters. use after retrieving schedule details to adjust days, time window, and limits.
     */
    PATCH_UPDATE_SCHEDULE: "LEMLIST_PATCH_UPDATE_SCHEDULE",
    /**
     * Tool to add an email or domain to the unsubscribed list. use when you need to globally block sending to a specific recipient or domain.
     */
    POST_ADD_UNSUBSCRIBE_EMAIL_DOMAIN: "LEMLIST_POST_ADD_UNSUBSCRIBE_EMAIL_DOMAIN",
    /**
     * Tool to add one or more variables to a lead. use when you need to enrich a lead with custom data after its creation or retrieval.
     */
    POST_ADD_VARIABLES_TO_LEAD: "LEMLIST_POST_ADD_VARIABLES_TO_LEAD",
    /**
     * Tool to associate a schedule with a campaign. use after confirming both campaignid and scheduleid to bind a schedule to its campaign.
     */
    POST_ASSOCIATE_SCHEDULE_WITH_CAMPAIGN: "LEMLIST_POST_ASSOCIATE_SCHEDULE_WITH_CAMPAIGN",
    /**
     * Tool to create a new campaign. use after confirming the team id. returns campaign, sequence, and schedule ids.
     */
    POST_CREATE_CAMPAIGN: "LEMLIST_POST_CREATE_CAMPAIGN",
    /**
     * Tool to create a new schedule for the team. use when you need to define custom active times or delays for outreach operations.
     */
    POST_CREATE_SCHEDULE: "LEMLIST_POST_CREATE_SCHEDULE",
    /**
     * Tool to mark a lead as interested in all campaigns. use when a lead responds positively and you want to advance or personalize your outreach.
     */
    POST_MARK_LEAD_AS_INTERESTED: "LEMLIST_POST_MARK_LEAD_AS_INTERESTED",
    /**
     * Tool to mark a lead as interested in a specific campaign. use after confirming the lead's positive engagement in that campaign.
     */
    POST_MARK_LEAD_AS_INTERESTED_IN_CAMPAIGN: "LEMLIST_POST_MARK_LEAD_AS_INTERESTED_IN_CAMPAIGN",
    /**
     * Tool to mark a lead as not interested in all campaigns. use when a lead explicitly declines outreach and should be paused across campaigns.
     */
    POST_MARK_LEAD_AS_NOT_INTERESTED: "LEMLIST_POST_MARK_LEAD_AS_NOT_INTERESTED",
    /**
     * Tool to pause a running campaign. use after confirming you have the correct campaign id and that the campaign is currently running.
     */
    POST_PAUSE_CAMPAIGN: "LEMLIST_POST_PAUSE_CAMPAIGN",
    /**
     * Tool to pause a lead in all campaigns or a specific campaign. use when you want to temporarily halt outreach to a lead.
     */
    POST_PAUSE_LEAD: "LEMLIST_POST_PAUSE_LEAD",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "LEMLIST".
 */
export type LEMLIST_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "LEMLIST".
 */
export type LEMLIST_TRIGGER_EVENTS = {}
