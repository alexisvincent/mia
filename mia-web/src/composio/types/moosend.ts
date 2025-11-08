// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MOOSEND's MOOSEND_ADD_SUBSCRIBER tool input.
 */
type MOOSEND_ADD_SUBSCRIBER_INPUT = {
  /**
   * Custom Fields
   * @description List of custom field values in 'FieldName=Value' format.
   * @default null
   */
  CustomFields: string[] | null;
  /**
   * Has External Double Opt In
   * @description Flag indicating external double opt-in consent.
   * @default null
   */
  HasExternalDoubleOptIn: boolean | null;
  /**
   * Name
   * @description Display name of the subscriber.
   * @default null
   */
  Name: string | null;
  /**
   * Preferences
   * @description Preference values for the subscriber.
   * @default null
   */
  Preferences: string[] | null;
  /**
   * Tags
   * @description Tags to apply to the subscriber.
   * @default null
   */
  Tags: string[] | null;
  /**
   * Email
   * Format: email
   * @description Email address of the subscriber.
   */
  email?: unknown;
  /**
   * Format
   * @description Response format. Possible values: 'json' or 'xml'.
   * @default json
   * @enum {string}
   */
  format: "json" | "xml";
  /**
   * Mailing List Id
   * @description The unique identifier of the mailing list to add the subscriber to.
   */
  mailingListID?: string;
};

/**
 * Type of MOOSEND's MOOSEND_ADD_SUBSCRIBER tool output.
 */
type MOOSEND_ADD_SUBSCRIBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Response code; 0 indicates success.
       */
      Code: number;
      /**
       * Context
       * @description Full subscriber context including ID, status, custom fields, and timestamps.
       */
      Context: {
          [key: string]: unknown;
      };
      /**
       * Error
       * @description Error message; null if successful.
       * @default null
       */
      Error: string | null;
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
 * Type of MOOSEND's MOOSEND_CREATE_CUSTOM_FIELD tool input.
 */
type MOOSEND_CREATE_CUSTOM_FIELD_INPUT = {
  /**
   * Custom Field Type
   * @description The data type of the custom field.
   * @default Text
   * @enum {string}
   */
  custom_field_type: "Text" | "Number" | "DateTime" | "SingleSelectDropdown" | "CheckBox";
  /**
   * Format
   * @description The response format. Use 'json' for JSON responses and 'xml' for XML responses.
   * @default json
   * @enum {string}
   */
  format: "json" | "xml";
  /**
   * Is Hidden
   * @description Whether the custom field is hidden from subscribers on the update profile page.
   * @default false
   */
  is_hidden: boolean | null;
  /**
   * Is Required
   * @description Whether the custom field is mandatory when adding a subscriber.
   * @default false
   */
  is_required: boolean | null;
  /**
   * Mailing List Id
   * @description The ID of the mailing list where the custom field will be created.
   */
  mailing_list_id?: string;
  /**
   * Name
   * @description The name of the custom field.
   */
  name?: string;
  /**
   * Options
   * @description Comma-separated options for a SingleSelectDropdown field.
   * @default null
   */
  options: string | null;
};

/**
 * Type of MOOSEND's MOOSEND_CREATE_CUSTOM_FIELD tool output.
 */
type MOOSEND_CREATE_CUSTOM_FIELD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Response code. 0 indicates success.
       */
      Code: number;
      /**
       * Context
       * @description The ID of the custom field created.
       * @default null
       */
      Context: string | null;
      /**
       * Error
       * @description Error message if the request fails. Null when successful.
       * @default null
       */
      Error: string | null;
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
 * Type of MOOSEND's MOOSEND_CREATE_MAILING_LIST tool input.
 */
type MOOSEND_CREATE_MAILING_LIST_INPUT = {
  /**
   * Confirmation Page
   * @description URL displayed after subscription confirmation.
   * @default null
   */
  ConfirmationPage: string | null;
  /**
   * Name
   * @description Name of the mailing list.
   */
  Name?: string;
  /**
   * Preference Page Id
   * @description Optional preference page identifier.
   * @default null
   */
  PreferencePageId: string | null;
  /**
   * Preferences
   * @description Preferences configuration for the mailing list.
   */
  Preferences?: {
      /**
       * Is Required
       * @description Whether the preference field is required.
       * @default false
       */
      IsRequired: boolean | null;
      /**
       * Options
       * @description List of preference options (1 to 10 items).
       */
      Options: string[];
      /**
       * Select Type
       * @description Type of preferences field: 'SingleSelect' or 'MultiSelect'.
       * @enum {string}
       */
      SelectType: "SingleSelect" | "MultiSelect";
  };
  /**
   * Redirect After Unsubscribe Page
   * @description URL users are redirected to after unsubscribing.
   * @default null
   */
  RedirectAfterUnsubscribePage: string | null;
};

/**
 * Type of MOOSEND's MOOSEND_CREATE_MAILING_LIST tool output.
 */
type MOOSEND_CREATE_MAILING_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Response code; 0 indicates success.
       */
      Code: number;
      /**
       * Context
       * @description ID of the newly created mailing list.
       */
      Context: string;
      /**
       * Error
       * @description Error message; null if successful.
       * @default null
       */
      Error: string | null;
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
 * Type of MOOSEND's MOOSEND_DELETE_CAMPAIGN tool input.
 */
type MOOSEND_DELETE_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description The ID of the draft or sent campaign to delete.
   */
  campaign_id?: string;
  /**
   * Format
   * @description Response format, either 'json' or 'xml'.
   * @default json
   */
  format: string;
};

/**
 * Type of MOOSEND's MOOSEND_DELETE_CAMPAIGN tool output.
 */
type MOOSEND_DELETE_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Response code, 0 indicates success.
       * @default null
       */
      Code: number | null;
      /**
       * Context
       * @description Additional context, always null if deletion was successful.
       * @default null
       */
      Context: string | null;
      /**
       * Error
       * @description Error message returned by the API, null if successful.
       * @default null
       */
      Error: string | null;
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
 * Type of MOOSEND's MOOSEND_DELETE_CUSTOM_FIELD tool input.
 */
type MOOSEND_DELETE_CUSTOM_FIELD_INPUT = {
  /**
   * Custom Field Id
   * @description The ID of the custom field to delete.
   */
  custom_field_id?: string;
  /**
   * Format
   * @description The response format. Use 'json' for JSON responses and 'xml' for XML responses.
   * @default json
   * @enum {string}
   */
  format: "json" | "xml";
  /**
   * Mailing List Id
   * @description The ID of the mailing list containing the custom field to delete.
   */
  mailing_list_id?: string;
};

/**
 * Type of MOOSEND's MOOSEND_DELETE_CUSTOM_FIELD tool output.
 */
type MOOSEND_DELETE_CUSTOM_FIELD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Response code. 0 indicates success.
       */
      Code: number;
      /**
       * Context
       * @description Additional context information. Null when successful.
       * @default null
       */
      Context: string | null;
      /**
       * Error
       * @description Error message, if any. Null when successful.
       * @default null
       */
      Error: string | null;
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
 * Type of MOOSEND's MOOSEND_DELETE_MAILING_LIST tool input.
 */
type MOOSEND_DELETE_MAILING_LIST_INPUT = {
  /**
   * Format
   * @description Response format, either 'json' or 'xml'.
   * @default json
   */
  format: string;
  /**
   * Mailing List Id
   * @description The ID of the mailing list to delete.
   */
  mailing_list_id?: string;
};

/**
 * Type of MOOSEND's MOOSEND_DELETE_MAILING_LIST tool output.
 */
type MOOSEND_DELETE_MAILING_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Response code. 0 indicates success.
       */
      Code: number;
      /**
       * Context
       * @description Always null if deletion was successful.
       * @default null
       */
      Context: string | null;
      /**
       * Error
       * @description Error message if deletion failed; null when successful.
       * @default null
       */
      Error: string | null;
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
 * Type of MOOSEND's MOOSEND_GET_ALL_CAMPAIGNS tool input.
 */
type MOOSEND_GET_ALL_CAMPAIGNS_INPUT = {
  /**
   * Format
   * @description Response format. Use 'json' for JSON responses and 'xml' for XML responses.
   * @default json
   * @enum {string}
   */
  format: "json" | "xml";
  /**
   * Page
   * @description Page number of campaign results to retrieve. Defaults to 1.
   * @default 1
   */
  page: number | null;
};

/**
 * Type of MOOSEND's MOOSEND_GET_ALL_CAMPAIGNS tool output.
 */
type MOOSEND_GET_ALL_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Response code; 0 indicates success.
       */
      Code: number;
      /**
       * Context
       * @description Context object containing paging info and list of campaigns.
       */
      Context: {
          [key: string]: unknown | null;
      };
      /**
       * Error
       * @description Error message, if any; null on success.
       * @default null
       */
      Error: string | null;
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
 * Type of MOOSEND's MOOSEND_GET_ALL_SUBSCRIBERS tool input.
 */
type MOOSEND_GET_ALL_SUBSCRIBERS_INPUT = {
  /**
   * Page
   * @description Page number of subscriber results to retrieve.
   * @default null
   */
  Page: number | null;
  /**
   * Page Size
   * @description Number of subscriber records per page.
   * @default null
   */
  PageSize: number | null;
  /**
   * Format
   * @description Response format: 'json' or 'xml'.
   * @default json
   * @enum {string}
   */
  format: "json" | "xml";
  /**
   * Mailing List Id
   * @description The ID of the mailing list containing the subscribers.
   */
  mailingListID?: string;
  /**
   * Status
   * @description The type of subscribers to retrieve: 'Subscribed', 'Unsubscribed', 'Bounced', or 'Removed'.
   * @enum {string}
   */
  status?: "Subscribed" | "Unsubscribed" | "Bounced" | "Removed";
};

/**
 * Type of MOOSEND's MOOSEND_GET_ALL_SUBSCRIBERS tool output.
 */
type MOOSEND_GET_ALL_SUBSCRIBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Response code; 0 indicates success.
       */
      Code: number;
      /**
       * Context
       * @description Context containing paging and subscriber list.
       */
      Context: {
          /**
           * Paging
           * @description Paging information for the response.
           */
          Paging: {
              /**
               * Current Page
               * @description Current page number.
               */
              CurrentPage: number;
              /**
               * Page Size
               * @description Number of items per page.
               */
              PageSize: number;
              /**
               * Sort Expression
               * @description Sort expression used.
               * @default null
               */
              SortExpression: string | null;
              /**
               * Sort Is Ascending
               * @description True if sorted ascending.
               */
              SortIsAscending: boolean;
              /**
               * Total Page Count
               * @description Total number of pages available.
               */
              TotalPageCount: number;
              /**
               * Total Results
               * @description Total number of results.
               */
              TotalResults: number;
          };
          /**
           * Subscribers
           * @description List of subscribers on the mailing list.
           */
          Subscribers: {
              /**
               * Created On
               * @description Timestamp when the subscriber was created.
               */
              CreatedOn: string;
              /**
               * Custom Fields
               * @description List of custom fields for the subscriber.
               */
              CustomFields: {
                  /**
                   * Custom Field Id
                   * @description The ID of the custom field.
                   */
                  CustomFieldID: string;
                  /**
                   * Name
                   * @description The name of the custom field.
                   */
                  Name: string;
                  /**
                   * Value
                   * @description The value of the custom field.
                   */
                  Value: string | null;
              }[];
              /**
               * Email
               * @description Email address of the subscriber.
               */
              Email: string;
              /**
               * Id
               * @description Subscriber unique identifier.
               */
              ID: string;
              /**
               * Mobile
               * @description Mobile number of the subscriber.
               * @default null
               */
              Mobile: string | null;
              /**
               * Name
               * @description Name of the subscriber.
               * @default null
               */
              Name: string | null;
              /**
               * Preferences
               * @description Preference values for the subscriber.
               * @default null
               */
              Preferences: string[] | null;
              /**
               * Removed On
               * @description Timestamp when the subscriber was removed; null if not removed.
               * @default null
               */
              RemovedOn: string | null;
              /**
               * Subscribe Method
               * @description Method used to subscribe the member.
               */
              SubscribeMethod: number;
              /**
               * Subscribe Type
               * @description Subscription status code.
               */
              SubscribeType: number;
              /**
               * Tags
               * @description Tags associated with the subscriber.
               */
              Tags: string[];
              /**
               * Unsubscribed From Id
               * @description ID from which unsubscribed; null if not applicable.
               * @default null
               */
              UnsubscribedFromID: string | null;
              /**
               * Unsubscribed On
               * @description Timestamp when unsubscribed; null if still subscribed.
               * @default null
               */
              UnsubscribedOn: string | null;
              /**
               * Updated On
               * @description Timestamp when the subscriber was last updated.
               * @default null
               */
              UpdatedOn: string | null;
          }[];
      };
      /**
       * Error
       * @description Error message if the request failed; null on success.
       * @default null
       */
      Error: string | null;
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
 * Type of MOOSEND's MOOSEND_GET_CAMPAIGN_DETAILS tool input.
 */
type MOOSEND_GET_CAMPAIGN_DETAILS_INPUT = {
  /**
   * Campaign Id
   * @description The unique identifier of the campaign whose details are to be retrieved.
   */
  campaign_id?: string;
  /**
   * Format
   * @description Response format. Possible values: 'json' or 'xml'.
   * @default json
   * @enum {string}
   */
  format: "json" | "xml";
};

/**
 * Type of MOOSEND's MOOSEND_GET_CAMPAIGN_DETAILS tool output.
 */
type MOOSEND_GET_CAMPAIGN_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Response code; 0 indicates success.
       */
      Code: number;
      /**
       * Context
       * @description Detailed properties of the campaign as returned by Moosend.
       */
      Context: {
          [key: string]: unknown;
      };
      /**
       * Error
       * @description Error message; null if the request is successful.
       * @default null
       */
      Error: string | null;
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
 * Type of MOOSEND's MOOSEND_GET_SUBSCRIBER_BY_EMAIL tool input.
 */
type MOOSEND_GET_SUBSCRIBER_BY_EMAIL_INPUT = {
  /**
   * Email
   * Format: email
   * @description Email address of the subscriber to retrieve.
   */
  Email?: unknown;
  /**
   * Format
   * @description Response format. Possible values: 'json' or 'xml'.
   * @default json
   * @enum {string}
   */
  format: "json" | "xml";
  /**
   * Mailing List Id
   * @description The ID of the mailing list to search in.
   */
  mailingListID?: string;
};

/**
 * Type of MOOSEND's MOOSEND_GET_SUBSCRIBER_BY_EMAIL tool output.
 */
type MOOSEND_GET_SUBSCRIBER_BY_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Response code; 0 indicates success
       */
      Code: number;
      /**
       * Context
       * @description Context containing subscriber details
       */
      Context: {
          /**
           * Created On
           * @description Timestamp when subscriber was added, in /Date(...) format
           */
          CreatedOn: string;
          /**
           * Custom Fields
           * @description List of custom field name/value pairs for this subscriber
           */
          CustomFields: {
              /**
               * Custom Field Id
               * @description Custom field unique identifier
               */
              CustomFieldID: string;
              /**
               * Name
               * @description Custom field name
               */
              Name: string;
              /**
               * Value
               * @description Value of the custom field; type depends on field definition
               */
              Value: string | null;
          }[];
          /**
           * Email
           * @description Subscriber email address
           */
          Email: string;
          /**
           * Id
           * @description Subscriber unique identifier
           */
          ID: string;
          /**
           * Name
           * @description Subscriber name
           * @default null
           */
          Name: string | null;
          /**
           * Preferences
           * @description List of preference options selected by subscriber
           * @default null
           */
          Preferences: string[] | null;
          /**
           * Removed On
           * @description Timestamp when subscriber was removed, or null if not removed
           * @default null
           */
          RemovedOn: string | null;
          /**
           * Subscribe Method
           * @description Method by which subscription occurred (integer code)
           */
          SubscribeMethod: number;
          /**
           * Subscribe Type
           * @description Type of subscription (integer code)
           */
          SubscribeType: number;
          /**
           * Tags
           * @description List of tags associated with subscriber
           */
          Tags: string[];
          /**
           * Unsubscribed From Id
           * @description Mailing list ID from which unsubscribed, or null
           * @default null
           */
          UnsubscribedFromID: string | null;
          /**
           * Unsubscribed On
           * @description Timestamp when subscriber unsubscribed, or null if still active
           * @default null
           */
          UnsubscribedOn: string | null;
          /**
           * Updated On
           * @description Timestamp when subscriber was last updated
           * @default null
           */
          UpdatedOn: string | null;
      };
      /**
       * Error
       * @description Error message if the request failed
       * @default null
       */
      Error: string | null;
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
 * Type of MOOSEND's MOOSEND_SCHEDULE_CAMPAIGN tool input.
 */
type MOOSEND_SCHEDULE_CAMPAIGN_INPUT = {
  /**
   * Scheduled Date Time
   * @description Scheduled date and time for delivery in 'yyyy-MM-dd HH:mm:ss' format.
   */
  ScheduledDateTime?: string;
  /**
   * Time Zone
   * @description Time zone for the scheduled date and time in IANA format (e.g., 'Europe/London'). Defaults to UTC if omitted.
   * @default null
   */
  TimeZone: string | null;
  /**
   * Campaign Id
   * @description The ID of the campaign to schedule.
   */
  campaign_id?: string;
  /**
   * Format
   * @description Response format, either 'json' or 'xml'.
   * @default json
   * @enum {string}
   */
  format: "json" | "xml";
};

/**
 * Type of MOOSEND's MOOSEND_SCHEDULE_CAMPAIGN tool output.
 */
type MOOSEND_SCHEDULE_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Response code, 0 indicates success.
       * @default null
       */
      Code: number | null;
      /**
       * Context
       * @description Additional context, always null on success.
       * @default null
       */
      Context: string | null;
      /**
       * Error
       * @description Error message returned by the API, null if successful.
       * @default null
       */
      Error: string | null;
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
 * Type of MOOSEND's MOOSEND_SEND_CAMPAIGN tool input.
 */
type MOOSEND_SEND_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description The unique identifier of the draft campaign to send.
   */
  CampaignID?: string;
  /**
   * Format
   * @description Response format, either 'json' or 'xml'.
   * @default json
   * @enum {string}
   */
  Format: "json" | "xml";
};

/**
 * Type of MOOSEND's MOOSEND_SEND_CAMPAIGN tool output.
 */
type MOOSEND_SEND_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Response code; 0 indicates success.
       */
      Code: number;
      /**
       * Context
       * @description Additional context returned by the API.
       */
      Context: {
          [key: string]: unknown;
      };
      /**
       * Error
       * @description Error message; null if the request was successful.
       * @default null
       */
      Error: string | null;
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
 * Type of MOOSEND's MOOSEND_UPDATE_CAMPAIGN tool input.
 */
type MOOSEND_UPDATE_CAMPAIGN_INPUT = {
  /**
   * Ab Campaign Type
   * @description Type of A/B test: Subjectline, Content, or Sender.
   * @default null
   * @enum {string|null}
   */
  ABCampaignType: "Subjectline" | "Content" | "Sender" | null;
  /**
   * Ab Winner Selection Type
   * @description Metric to choose A/B winner: OpenRate or TotalUniqueClicks.
   * @default null
   * @enum {string|null}
   */
  ABWinnerSelectionType: "OpenRate" | "TotalUniqueClicks" | null;
  /**
   * Campaign Id
   * @description ID of the draft campaign to update.
   */
  CampaignID?: string;
  /**
   * Confirmation To Email
   * @description Email address to receive send confirmations.
   * @default null
   */
  ConfirmationToEmail: string | null;
  /**
   * Html Content B
   * @description HTML content for version B of the campaign.
   * @default null
   */
  HTMLContentB: string | null;
  /**
   * Hours To Test
   * @description Number of hours to run A/B test (1-24).
   * @default null
   */
  HoursToTest: number | null;
  /**
   * Is Ab
   * @description Flag to indicate an A/B split campaign.
   * @default null
   */
  IsAB: boolean | null;
  /**
   * List Percentage
   * @description Percentage of list to use for A/B testing (5-40).
   * @default null
   */
  ListPercentage: number | null;
  /**
   * Mailing Lists
   * @description List of mailing lists and optional segments to send the campaign to.
   * @default null
   */
  MailingLists: {
      /**
       * Mailing List Id
       * @description ID of the mailing list to target.
       */
      MailingListID: string;
      /**
       * Segment Id
       * @description Optional segment ID within the mailing list.
       * @default null
       */
      SegmentID: string | null;
  }[] | null;
  /**
   * Name
   * @description New name of the campaign.
   */
  Name?: string;
  /**
   * Reply To Email
   * @description Reply-to email address for the campaign.
   * @default null
   */
  ReplyToEmail: string | null;
  /**
   * Sender Email
   * @description Sender email address for the campaign.
   * @default null
   */
  SenderEmail: string | null;
  /**
   * Sender Email B
   * @description Sender email for version B of the campaign.
   * @default null
   */
  SenderEmailB: string | null;
  /**
   * Subject
   * @description Subject line of the campaign.
   * @default null
   */
  Subject: string | null;
  /**
   * Subject B
   * @description Second subject line for A/B tests.
   * @default null
   */
  SubjectB: string | null;
  /**
   * Track In Google Analytics
   * @description Enable Google Analytics tracking if configured.
   * @default null
   */
  TrackInGoogleAnalytics: boolean | null;
  /**
   * Web Location
   * @description URL to fetch campaign HTML content; CSS will be inlined.
   * @default null
   */
  WebLocation: string | null;
  /**
   * Web Location B
   * @description Web location for version B of the campaign.
   * @default null
   */
  WebLocationB: string | null;
  /**
   * Format
   * @description Response format: 'json' or 'xml'.
   * @default json
   * @enum {string}
   */
  format: "json" | "xml";
};

/**
 * Type of MOOSEND's MOOSEND_UPDATE_CAMPAIGN tool output.
 */
type MOOSEND_UPDATE_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description API response code; 0 indicates success.
       */
      Code: number;
      /**
       * Context
       * @description Reserved; always null for update.
       * @default null
       */
      Context: {
          [key: string]: unknown;
      } | null;
      /**
       * Error
       * @description Error message if any.
       * @default null
       */
      Error: string | null;
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
 * Type of MOOSEND's MOOSEND_UPDATE_CUSTOM_FIELD tool input.
 */
type MOOSEND_UPDATE_CUSTOM_FIELD_INPUT = {
  /**
   * Custom Field Id
   * @description The ID of the custom field to update.
   */
  custom_field_id?: string;
  /**
   * Custom Field Type
   * @description Specifies the data type of the custom field; one of 'Text', 'Number', 'DateTime', 'SingleSelectDropdown', 'CheckBox'.
   * @default null
   * @enum {string|null}
   */
  custom_field_type: "Text" | "Number" | "DateTime" | "SingleSelectDropdown" | "CheckBox" | null;
  /**
   * Format
   * @description The response format. Use 'json' for JSON responses and 'xml' for XML responses.
   * @default json
   * @enum {string}
   */
  format: "json" | "xml";
  /**
   * Is Hidden
   * @description Whether the custom field is hidden from subscribers on the update profile page.
   * @default false
   */
  is_hidden: boolean;
  /**
   * Is Required
   * @description Whether the custom field is mandatory when adding a subscriber.
   * @default false
   */
  is_required: boolean;
  /**
   * Mailing List Id
   * @description The ID of the mailing list containing the custom field.
   */
  mailing_list_id?: string;
  /**
   * Name
   * @description The new name for the custom field.
   */
  name?: string;
  /**
   * Options
   * @description Comma-separated options for 'SingleSelectDropdown'; required if custom_field_type is 'SingleSelectDropdown'.
   * @default null
   */
  options: string | null;
};

/**
 * Type of MOOSEND's MOOSEND_UPDATE_CUSTOM_FIELD tool output.
 */
type MOOSEND_UPDATE_CUSTOM_FIELD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Response code; 0 indicates success.
       */
      Code: number;
      /**
       * Context
       * @description Additional context or details; null if successful.
       * @default null
       */
      Context: string | null;
      /**
       * Error
       * @description Error message if the request failed; null if successful.
       * @default null
       */
      Error: string | null;
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
 * Type of MOOSEND's MOOSEND_UPDATE_MAILING_LIST tool input.
 */
type MOOSEND_UPDATE_MAILING_LIST_INPUT = {
  /**
   * Description
   * @description A description for the mailing list.
   * @default null
   */
  description: string | null;
  /**
   * Format
   * @description Response format, either 'json' or 'xml'.
   * @default json
   */
  format: string;
  /**
   * Mailing List Id
   * @description The unique identifier of the mailing list to update.
   */
  mailing_list_id?: string;
  /**
   * Name
   * @description New name for the mailing list.
   * @default null
   */
  name: string | null;
  /**
   * Reply To Email
   * @description Reply-to email address for the mailing list.
   * @default null
   */
  reply_to_email: string | null;
  /**
   * Sender Email
   * @description Sender email address for the mailing list.
   * @default null
   */
  sender_email: string | null;
  /**
   * Sender Name
   * @description Sender name for the mailing list.
   * @default null
   */
  sender_name: string | null;
};

/**
 * Type of MOOSEND's MOOSEND_UPDATE_MAILING_LIST tool output.
 */
type MOOSEND_UPDATE_MAILING_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Response code; 0 indicates success.
       */
      Code: number;
      /**
       * MailingListContext
       * @description Context schema containing updated mailing list details
       * @default null
       */
      Context: {
          /**
           * Created On
           * @description Date-time when the list was created.
           */
          CreatedOn: string;
          /**
           * Description
           * @description Mailing list description.
           * @default null
           */
          Description: string | null;
          /**
           * Id
           * @description The mailing list ID.
           */
          ID: string;
          /**
           * Name
           * @description Mailing list name.
           */
          Name: string;
          /**
           * Reply To Email
           * @description Reply-to email address.
           */
          ReplyToEmail: string;
          /**
           * Sender Email
           * @description Sender email address.
           */
          SenderEmail: string;
          /**
           * Sender Name
           * @description Sender name.
           */
          SenderName: string;
          /**
           * Updated On
           * @description Date-time when the list was last updated.
           */
          UpdatedOn: string;
      } | null;
      /**
       * Error
       * @description Error message if any.
       * @default null
       */
      Error: string | null;
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
 * Type map of all available tool input types for toolkit "MOOSEND".
 */
export type MOOSEND_TOOL_INPUTS = {
  ADD_SUBSCRIBER: MOOSEND_ADD_SUBSCRIBER_INPUT
  CREATE_CUSTOM_FIELD: MOOSEND_CREATE_CUSTOM_FIELD_INPUT
  CREATE_MAILING_LIST: MOOSEND_CREATE_MAILING_LIST_INPUT
  DELETE_CAMPAIGN: MOOSEND_DELETE_CAMPAIGN_INPUT
  DELETE_CUSTOM_FIELD: MOOSEND_DELETE_CUSTOM_FIELD_INPUT
  DELETE_MAILING_LIST: MOOSEND_DELETE_MAILING_LIST_INPUT
  GET_ALL_CAMPAIGNS: MOOSEND_GET_ALL_CAMPAIGNS_INPUT
  GET_ALL_SUBSCRIBERS: MOOSEND_GET_ALL_SUBSCRIBERS_INPUT
  GET_CAMPAIGN_DETAILS: MOOSEND_GET_CAMPAIGN_DETAILS_INPUT
  GET_SUBSCRIBER_BY_EMAIL: MOOSEND_GET_SUBSCRIBER_BY_EMAIL_INPUT
  SCHEDULE_CAMPAIGN: MOOSEND_SCHEDULE_CAMPAIGN_INPUT
  SEND_CAMPAIGN: MOOSEND_SEND_CAMPAIGN_INPUT
  UPDATE_CAMPAIGN: MOOSEND_UPDATE_CAMPAIGN_INPUT
  UPDATE_CUSTOM_FIELD: MOOSEND_UPDATE_CUSTOM_FIELD_INPUT
  UPDATE_MAILING_LIST: MOOSEND_UPDATE_MAILING_LIST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MOOSEND".
 */
export type MOOSEND_TOOL_OUTPUTS = {
  ADD_SUBSCRIBER: MOOSEND_ADD_SUBSCRIBER_OUTPUT
  CREATE_CUSTOM_FIELD: MOOSEND_CREATE_CUSTOM_FIELD_OUTPUT
  CREATE_MAILING_LIST: MOOSEND_CREATE_MAILING_LIST_OUTPUT
  DELETE_CAMPAIGN: MOOSEND_DELETE_CAMPAIGN_OUTPUT
  DELETE_CUSTOM_FIELD: MOOSEND_DELETE_CUSTOM_FIELD_OUTPUT
  DELETE_MAILING_LIST: MOOSEND_DELETE_MAILING_LIST_OUTPUT
  GET_ALL_CAMPAIGNS: MOOSEND_GET_ALL_CAMPAIGNS_OUTPUT
  GET_ALL_SUBSCRIBERS: MOOSEND_GET_ALL_SUBSCRIBERS_OUTPUT
  GET_CAMPAIGN_DETAILS: MOOSEND_GET_CAMPAIGN_DETAILS_OUTPUT
  GET_SUBSCRIBER_BY_EMAIL: MOOSEND_GET_SUBSCRIBER_BY_EMAIL_OUTPUT
  SCHEDULE_CAMPAIGN: MOOSEND_SCHEDULE_CAMPAIGN_OUTPUT
  SEND_CAMPAIGN: MOOSEND_SEND_CAMPAIGN_OUTPUT
  UPDATE_CAMPAIGN: MOOSEND_UPDATE_CAMPAIGN_OUTPUT
  UPDATE_CUSTOM_FIELD: MOOSEND_UPDATE_CUSTOM_FIELD_OUTPUT
  UPDATE_MAILING_LIST: MOOSEND_UPDATE_MAILING_LIST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MOOSEND toolkit.
 */
export const MOOSEND = {
  slug: "moosend",
  tools: {
    /**
     * Tool to add or update a subscriber in a mailing list. use after obtaining the mailing list id to manage subscribers.
     */
    ADD_SUBSCRIBER: "MOOSEND_ADD_SUBSCRIBER",
    /**
     * Tool to create a custom field in a mailing list. use when you need to define a new custom field for subscriber data.
     */
    CREATE_CUSTOM_FIELD: "MOOSEND_CREATE_CUSTOM_FIELD",
    /**
     * Tool to create a new empty mailing list in moosend. use after obtaining api key.
     */
    CREATE_MAILING_LIST: "MOOSEND_CREATE_MAILING_LIST",
    /**
     * Tool to delete a campaign. use when you need to permanently remove a draft or sent campaign from your moosend account after confirming its id. deletion is irreversible.
     */
    DELETE_CAMPAIGN: "MOOSEND_DELETE_CAMPAIGN",
    /**
     * Tool to remove a custom field definition from a mailing list. use when you have confirmed the custom field id to delete.
     */
    DELETE_CUSTOM_FIELD: "MOOSEND_DELETE_CUSTOM_FIELD",
    /**
     * Tool to delete a mailing list. use when you need to permanently remove a mailing list from your moosend account after confirming its id. deletion is irreversible.
     */
    DELETE_MAILING_LIST: "MOOSEND_DELETE_MAILING_LIST",
    /**
     * Tool to retrieve a list of all campaigns in your account. use after acquiring valid api credentials to explore campaign data.
     */
    GET_ALL_CAMPAIGNS: "MOOSEND_GET_ALL_CAMPAIGNS",
    /**
     * Tool to retrieve subscribers in a specified mailing list by status. use when you need to paginate subscribers after confirming list id and status.
     */
    GET_ALL_SUBSCRIBERS: "MOOSEND_GET_ALL_SUBSCRIBERS",
    /**
     * Tool to retrieve detailed properties of a specific campaign. use when you need to inspect a campaign's full configuration after creation or scheduling.
     */
    GET_CAMPAIGN_DETAILS: "MOOSEND_GET_CAMPAIGN_DETAILS",
    /**
     * Tool to search for a subscriber by email in a mailing list. use when you need subscriber details after confirming the list exists. example: "get subscriber details for jane.doe@example.com in list 04fad8e2-..."
     */
    GET_SUBSCRIBER_BY_EMAIL: "MOOSEND_GET_SUBSCRIBER_BY_EMAIL",
    /**
     * Tool to schedule a campaign. use when you want to set a specific date and time for campaign delivery after confirming its id.
     */
    SCHEDULE_CAMPAIGN: "MOOSEND_SCHEDULE_CAMPAIGN",
    /**
     * Tool to send an existing draft campaign immediately. use when you want to dispatch a campaign to all recipients after final review.
     */
    SEND_CAMPAIGN: "MOOSEND_SEND_CAMPAIGN",
    /**
     * Tool to update a draft campaign. use when you want to modify properties of an existing draft campaign before sending.
     */
    UPDATE_CAMPAIGN: "MOOSEND_UPDATE_CAMPAIGN",
    /**
     * Tool to update properties of an existing custom field in a mailing list. use after confirming mailing list and custom field ids.
     */
    UPDATE_CUSTOM_FIELD: "MOOSEND_UPDATE_CUSTOM_FIELD",
    /**
     * Tool to update the properties of an existing mailing list. use when you need to change list metadata after confirming the list id.
     */
    UPDATE_MAILING_LIST: "MOOSEND_UPDATE_MAILING_LIST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MOOSEND".
 */
export type MOOSEND_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MOOSEND".
 */
export type MOOSEND_TRIGGER_EVENTS = {}
