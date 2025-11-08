// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ENGINEMAILER's ENGINEMAILER_CHECK_EXPORT_STATUS_V2 tool input.
 */
type ENGINEMAILER_CHECK_EXPORT_STATUS_V2_INPUT = {
  /**
   * Id
   * @description The Export ID received from the export initiation method
   */
  ID?: number;
};

/**
 * Type of ENGINEMAILER's ENGINEMAILER_CHECK_EXPORT_STATUS_V2 tool output.
 */
type ENGINEMAILER_CHECK_EXPORT_STATUS_V2_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Wrapper around the standard result returned by Enginemailer.
       */
      Result: {
          /**
           * Data
           * @description Data payload returned when checking export status.
           */
          Data: {
              /**
               * Export Id
               * @description The Export ID
               */
              ExportID: number;
              /**
               * Status
               * @description Current status of the export (e.g., 'Processing', 'Complete')
               */
              Status: string;
              /**
               * Url
               * @description Download URL for the exported file; present only when status is 'Complete'
               * @default null
               */
              URL: string | null;
          };
          /**
           * Message
           * @description Additional human-readable info
           */
          Message: string;
          /**
           * Status
           * @description High-level result status message
           */
          Status: string;
          /**
           * Status Code
           * @description HTTP-like status code for this operation
           */
          StatusCode: string;
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
 * Type of ENGINEMAILER's ENGINEMAILER_CREATE_CAMPAIGN tool input.
 */
type ENGINEMAILER_CREATE_CAMPAIGN_INPUT = {
  /**
   * Attachments
   * @description List of attachment URLs or base64-encoded file data
   * @default null
   */
  attachments: string[] | null;
  /**
   * Campaign Content
   * @description HTML content of the email campaign
   */
  campaignContent?: string;
  /**
   * Campaign Name
   * @description Name of the campaign
   */
  campaignName?: string;
  /**
   * Campaign Subject
   * @description Subject of the email campaign
   */
  campaignSubject?: string;
  /**
   * Campaign Text
   * @description Plain-text content; auto-generated if omitted
   * @default null
   */
  campaignText: string | null;
  /**
   * From Email
   * Format: email
   * @description Valid sender email address
   */
  fromEmail?: unknown;
  /**
   * From Name
   * @description Sender's name as it will appear in the email
   */
  fromName?: string;
  /**
   * Reply To
   * Format: email
   * @description Reply-to email address; defaults to fromEmail if omitted
   * @default null
   */
  replyTo: unknown;
  /**
   * Send Date
   * Format: date-time
   * @description Scheduled send date/time in 'YYYY-MM-DD HH:MM:SS' format
   */
  sendDate?: unknown;
  /**
   * To List Id
   * @description ID of the recipient list
   */
  toListID?: number;
  /**
   * Track Clicks
   * @description Enable click tracking
   * @default false
   */
  trackClicks: boolean | null;
  /**
   * Track Opens
   * @description Enable open tracking
   * @default false
   */
  trackOpens: boolean | null;
};

/**
 * Type of ENGINEMAILER's ENGINEMAILER_CREATE_CAMPAIGN tool output.
 */
type ENGINEMAILER_CREATE_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Campaign Id
       * @description Unique ID of the newly created campaign when status is 'success'
       * @default null
       */
      campaignID: number | null;
      /**
       * Error Message
       * @description Error message when status is 'error'
       * @default null
       */
      errorMessage: string | null;
      /**
       * Status
       * @description Outcome of the request, e.g., 'success' or 'error'
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
 * Type of ENGINEMAILER's ENGINEMAILER_EXPORT_CSV_REPORT_V2 tool input.
 */
type ENGINEMAILER_EXPORT_CSV_REPORT_V2_INPUT = {
  /**
   * Domain Filter
   * @description Filter the export result by sender domain.
   * @default null
   */
  DomainFilter: string | null;
  /**
   * Email To Filter
   * @description Filter the export result by a specific email address.
   * @default null
   */
  EmailToFilter: string | null;
  /**
   * Period
   * @description Date range for the report in 'DD MMM YYYY - DD MMM YYYY' format; max window of 60 days.
   */
  Period?: string;
};

/**
 * Type of ENGINEMAILER's ENGINEMAILER_EXPORT_CSV_REPORT_V2 tool output.
 */
type ENGINEMAILER_EXPORT_CSV_REPORT_V2_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Wrapper for the standard Enginemailer result.
       */
      Result: {
          /**
           * Data
           * @description Data model for export CSV report initiation response.
           */
          Data: {
              /**
               * Export Id
               * @description Unique identifier for the export request.
               */
              ExportID: number;
              /**
               * Status
               * @description Status of the export request (e.g., 'Processing').
               */
              Status: string;
          };
          /**
           * Message
           * @description Additional human-readable info.
           */
          Message: string;
          /**
           * Status
           * @description High-level result status message.
           */
          Status: string;
          /**
           * Status Code
           * @description HTTP-like status code for this operation.
           */
          StatusCode: string;
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
 * Type of ENGINEMAILER's ENGINEMAILER_GET_SUBCATEGORY tool input.
 */
type ENGINEMAILER_GET_SUBCATEGORY_INPUT = {
  /**
   * Category Id
   * @description ID of the category to get subcategories for.
   */
  CategoryID?: number;
};

/**
 * Type of ENGINEMAILER's ENGINEMAILER_GET_SUBCATEGORY tool output.
 */
type ENGINEMAILER_GET_SUBCATEGORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Subcategories
       * @description List of subcategories for the specified category
       */
      Subcategories: {
          /**
           * Category Id
           * @description Parent category ID
           */
          CategoryID: number;
          /**
           * Description
           * @description Subcategory description
           */
          Description: string;
          /**
           * Id
           * @description Subcategory ID
           */
          ID: number;
          /**
           * Name
           * @description Subcategory name
           */
          Name: string;
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
 * Type of ENGINEMAILER's ENGINEMAILER_INSERT_SUBSCRIBER tool input.
 */
type ENGINEMAILER_INSERT_SUBSCRIBER_INPUT = {
  /**
   * Customfields
   * @description Custom fields for the subscriber as key-value pairs (optional).
   * @default null
   */
  customfields: {
      [key: string]: string;
  } | null;
  /**
   * Email
   * Format: email
   * @description Email address of the subscriber to add.
   */
  email?: string;
  /**
   * Listid
   * @description Identifier of the mailing list to which the subscriber will be added.
   */
  listid?: number | null;
  /**
   * Name
   * @description Name of the subscriber (optional).
   * @default null
   */
  name: string | null;
};

/**
 * Type of ENGINEMAILER's ENGINEMAILER_INSERT_SUBSCRIBER tool output.
 */
type ENGINEMAILER_INSERT_SUBSCRIBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Detailed message about the operation outcome.
       */
      message: string;
      /**
       * Status
       * @description Result status; 'success' if subscriber was added, 'error' otherwise.
       */
      status: string;
      /**
       * Subscriberid
       * @description Unique identifier of the newly created subscriber.
       */
      subscriberid: number | null;
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
 * Type of ENGINEMAILER's ENGINEMAILER_LIST_CAMPAIGN tool input.
 */
type ENGINEMAILER_LIST_CAMPAIGN_INPUT = object;

/**
 * Type of ENGINEMAILER's ENGINEMAILER_LIST_CAMPAIGN tool output.
 */
type ENGINEMAILER_LIST_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Wrapper for the standard result returned by ListCampaign endpoint.
       */
      Result: {
          /**
           * Data
           * @description List of undelivered campaigns.
           */
          Data: {
              /**
               * Campaignid
               * @description Unique identifier for the campaign.
               */
              campaignid: string;
              /**
               * Campaignname
               * @description Name of the campaign.
               */
              campaignname: string;
              /**
               * Isscheduled
               * @description Flag indicating if the campaign is scheduled (1) or sent (0).
               */
              isscheduled: number;
              /**
               * Scheduledatetime
               * @description Scheduled date and time of the campaign in M/D/YYYY h:mm:ss AM/PM format; present only if isscheduled = 1.
               * @default null
               */
              scheduledatetime: string | null;
              /**
               * Senderemail
               * @description Email address of the sender.
               */
              senderemail: string;
              /**
               * Sendername
               * @description Name of the sender.
               */
              sendername: string;
              /**
               * Subject
               * @description Subject line of the campaign email.
               */
              subject: string;
          }[];
          /**
           * Status
           * @description API call status, e.g., OK.
           */
          Status: string;
          /**
           * Status Code
           * @description Response code as string, e.g., 200.
           */
          StatusCode: string;
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
 * Type of ENGINEMAILER's ENGINEMAILER_PAUSE_CAMPAIGN tool input.
 */
type ENGINEMAILER_PAUSE_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description The unique identifier of the campaign to pause.
   */
  CampaignID?: string;
};

/**
 * Type of ENGINEMAILER's ENGINEMAILER_PAUSE_CAMPAIGN tool output.
 */
type ENGINEMAILER_PAUSE_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Result object returned after pausing a campaign.
       */
      Result: {
          /**
           * Status
           * @description Indicates the result of the operation (e.g., 'OK').
           */
          Status: string;
          /**
           * Status Code
           * @description HTTP status code corresponding to the operation result.
           */
          StatusCode: string;
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
 * Type of ENGINEMAILER's ENGINEMAILER_SEND_CAMPAIGN tool input.
 */
type ENGINEMAILER_SEND_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description Targeted Campaign ID to send immediately. Must be a positive integer. Ensure the campaign exists, is not scheduled/delivering/delivered, and has at least one recipient before calling this.
   */
  CampaignID?: number;
};

/**
 * Type of ENGINEMAILER's ENGINEMAILER_SEND_CAMPAIGN tool output.
 */
type ENGINEMAILER_SEND_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Wrapped object containing status, status code, and optional error message.
       */
      Result: {
          /**
           * Error Message
           * @description Error details if the send operation fails.
           * @default null
           */
          ErrorMessage: string | null;
          /**
           * Status
           * @description Indicates result status, e.g., 'OK'.
           */
          Status: string;
          /**
           * Status Code
           * @description HTTP status code returned by the API as a string (e.g., '200').
           */
          StatusCode: string;
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
 * Type map of all available tool input types for toolkit "ENGINEMAILER".
 */
export type ENGINEMAILER_TOOL_INPUTS = {
  CHECK_EXPORT_STATUS_V2: ENGINEMAILER_CHECK_EXPORT_STATUS_V2_INPUT
  CREATE_CAMPAIGN: ENGINEMAILER_CREATE_CAMPAIGN_INPUT
  EXPORT_CSV_REPORT_V2: ENGINEMAILER_EXPORT_CSV_REPORT_V2_INPUT
  GET_SUBCATEGORY: ENGINEMAILER_GET_SUBCATEGORY_INPUT
  INSERT_SUBSCRIBER: ENGINEMAILER_INSERT_SUBSCRIBER_INPUT
  LIST_CAMPAIGN: ENGINEMAILER_LIST_CAMPAIGN_INPUT
  PAUSE_CAMPAIGN: ENGINEMAILER_PAUSE_CAMPAIGN_INPUT
  SEND_CAMPAIGN: ENGINEMAILER_SEND_CAMPAIGN_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ENGINEMAILER".
 */
export type ENGINEMAILER_TOOL_OUTPUTS = {
  CHECK_EXPORT_STATUS_V2: ENGINEMAILER_CHECK_EXPORT_STATUS_V2_OUTPUT
  CREATE_CAMPAIGN: ENGINEMAILER_CREATE_CAMPAIGN_OUTPUT
  EXPORT_CSV_REPORT_V2: ENGINEMAILER_EXPORT_CSV_REPORT_V2_OUTPUT
  GET_SUBCATEGORY: ENGINEMAILER_GET_SUBCATEGORY_OUTPUT
  INSERT_SUBSCRIBER: ENGINEMAILER_INSERT_SUBSCRIBER_OUTPUT
  LIST_CAMPAIGN: ENGINEMAILER_LIST_CAMPAIGN_OUTPUT
  PAUSE_CAMPAIGN: ENGINEMAILER_PAUSE_CAMPAIGN_OUTPUT
  SEND_CAMPAIGN: ENGINEMAILER_SEND_CAMPAIGN_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ENGINEMAILER toolkit.
 */
export const ENGINEMAILER = {
  slug: "enginemailer",
  tools: {
    /**
     * Tool to check status of a previously requested csv report export. use after initiating an export to poll for completion.
     */
    CHECK_EXPORT_STATUS_V2: "ENGINEMAILER_CHECK_EXPORT_STATUS_V2",
    /**
     * Tool to create a new email campaign. use when you need to configure and schedule a campaign before sending.
     */
    CREATE_CAMPAIGN: "ENGINEMAILER_CREATE_CAMPAIGN",
    /**
     * Tool to export a transactional email report as csv. use when you need to initiate an export within a specific date range (max past 60 days).
     */
    EXPORT_CSV_REPORT_V2: "ENGINEMAILER_EXPORT_CSV_REPORT_V2",
    /**
     * Tool to retrieve subcategories for a given category. use when you need to list or choose subcategories after selecting a category.
     */
    GET_SUBCATEGORY: "ENGINEMAILER_GET_SUBCATEGORY",
    /**
     * Tool to add a new subscriber with optional custom fields. use when registering a user to a specific mailing list after verifying their email.
     */
    INSERT_SUBSCRIBER: "ENGINEMAILER_INSERT_SUBSCRIBER",
    /**
     * Tool to retrieve a list of undelivered campaigns. use when you need to fetch campaigns awaiting delivery.
     */
    LIST_CAMPAIGN: "ENGINEMAILER_LIST_CAMPAIGN",
    /**
     * Tool to pause a scheduled email campaign. use when you need to halt a campaign before sending to apply updates or adjust schedule.
     */
    PAUSE_CAMPAIGN: "ENGINEMAILER_PAUSE_CAMPAIGN",
    /**
     * Tool to send an email campaign immediately. use when the campaign exists, has at least one recipient, and is not scheduled or already delivered. e.g., 'send campaign 123 now'.
     */
    SEND_CAMPAIGN: "ENGINEMAILER_SEND_CAMPAIGN",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ENGINEMAILER".
 */
export type ENGINEMAILER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ENGINEMAILER".
 */
export type ENGINEMAILER_TRIGGER_EVENTS = {}
