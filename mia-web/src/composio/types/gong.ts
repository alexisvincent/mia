// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GONG's GONG_ADD_CALL_MEDIA_V2_CALLS_ID_MEDIA tool input.
 */
type GONG_ADD_CALL_MEDIA_V2_CALLS_ID_MEDIA_INPUT = {
  /**
   * Id
   * @description callId returned from "Add New Call" request
   */
  id?: string;
  /**
   * Media File
   * Format: binary
   * @description Mediafile
   */
  mediaFile?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
};

/**
 * Type of GONG's GONG_ADD_CALL_MEDIA_V2_CALLS_ID_MEDIA tool output.
 */
type GONG_ADD_CALL_MEDIA_V2_CALLS_ID_MEDIA_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Call Id
       * @description New call ID
       * @default null
       */
      callId: string | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
      /**
       * Url
       * @description The URL to the page in the Gong web application where the call is available.
       * @default null
       */
      url: string | null;
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
 * Type of GONG's GONG_ADD_NEW_CALL_V2_CALLS tool input.
 */
type GONG_ADD_NEW_CALL_V2_CALLS_INPUT = {
  /**
   * Actual Start
   * @description The actual date and time when the call started in the ISO-8601 format (e.g., "2018-02-18T02:30:00-07:00" or "2018-02-18T08:00:00Z", where Z stands for UTC);
   */
  actualStart?: string;
  /**
   * Call Provider Code
   * @description The code identifies the provider conferencing or telephony system. For example: zoom, clearslide, gotomeeting, ringcentral, outreach, insidesales, etc. These values are predefined by Gong, please contact help@gong.io to find the proper value for your system.
   */
  callProviderCode?: string;
  /**
   * Client Unique Id
   * @description A call"s unique identifier in the PBX or the recording system. Gong uses this identifier to prevent repeated attempts to upload the same recording.
   */
  clientUniqueId?: string;
  /**
   * Context
   * @description A list of references to external systems such as CRM, Telephony System, Case Management, etc.
   */
  context?: {
      /**
       * Objects
       * @description List of objects within the external system. Note: Multiple opportunities/deals belonging to the same account are not supported.
       */
      objects?: {
          /**
           * Fields
           * @description Object fields. Intended for future use only.
           */
          fields?: {
              /**
               * Name
               * @description Field name. For Account supported fields are: Name, Website, Industry and all the custom fields. For Opportunity supported fields are Name, LeadSource, Type, StageName, Probability, Amount, CloseDate and all the custom fields.
               */
              name?: string;
          }[];
          /**
           * Object Id
           * @description Object ID. For Salesforce both case-sensitive and case-insensitive formats are supported.
           */
          objectId: string;
          /**
           * Object Type
           * @description Object Type. e.g. Account.
           * @enum {string}
           */
          objectType: "Account" | "Contact" | "Lead" | "Opportunity" | "Opportunity,Account" | "User";
      }[];
      /**
       * System
       * @description External system name. Currently only Salesforce and Generic are supported.
       * @enum {string}
       */
      system: "Generic" | "HubSpot" | "MicrosoftDynamic" | "Salesforce";
  }[];
  /**
   * Custom Data
   * @description Optional metadata associated with the call (represented as text). Gong stores this metadata and it can be used for troubleshooting.
   */
  customData?: string;
  /**
   * Direction
   * @description Whether the call is inbound (someone called the company), outbound (a rep dialed someone outside the company), or a conference call.
   * @enum {string}
   */
  direction?: "Conference" | "Inbound" | "Outbound" | "Unknown";
  /**
   * Disposition
   * @description The disposition of the call. The disposition is free text of up to 255 characters.
   */
  disposition?: string;
  /**
   * Download Media Url
   * @description The URL from which Gong can download the media file. The URL must be unique, the audio or video file must be a maximum of 1.5GB. The content-type must either start with "audio" or "video," or should be "application/octet-stream" or "binary/octet-stream" followed by a subtype that specifies a supported file type (WAV, MP3, MP4, MKV and FLAC). If you provide this URL, you should not perform the "Add call media" step.
   */
  downloadMediaUrl?: string;
  /**
   * Duration
   * @description The actual call duration in seconds.
   */
  duration?: number;
  /**
   * Language Code
   * @description The language code the call should be transcribed to. This field is optional as Gong automatically detects the language spoken in the call and transcribes it accordingly. Set this field only if you are sure of the language the call is in. Valid values are: af-ZA, am-ET, ar-AE, ar-BH, ar-DZ, ar-EG, ar-IL, ar-IQ, ar-JO, ar-KW, ar-LB, ar-MA, ar-MR, ar-OM, ar-PS, ar-QA, ar-SA, ar-TN, ar-YE, az-AZ, bg-BG, bn-BD, bn-IN, bs-BA, ca-ES, cs-CZ, da-DK, de-AT, de-CH, de-DE, el-GR, en-AB, en-AU, en-CA, en-GB, en-IE, en-IN, en-NZ, en-PH, en-SG, en-US, en-WL, en-ZA, es-AR, es-BO, es-CL, es-CO, es-CR, es-DO, es-EC, es-ES, es-GT, es-HN, es-MX, es-NI, es-PA, es-PE, es-PR, es-PY, es-SV, es-US, es-UY, et-EE, eu-ES, fa-IR, fi-FI, fil-PH, fr-BE, fr-CA, fr-CH, fr-FR, gl-ES, gu-IN, he-IL, hi-IN, hr-HR, hu-HU, hy-AM, id-ID, is-IS, it-CH, it-IT, ja-JP, jv-ID, ka-GE, kk-KZ, km-KH, kn-IN, ko-KR, lo-LA, lt-LT, lv-LV, mk-MK, ml-IN, mn-MN, mr-IN, ms-MY, my-MM, ne-NP, nl-BE, nl-NL, no-NO, pa-Guru-IN, pl-PL, pt-BR, pt-PT, ro-RO, ru-RU, si-LK, sk-SK, sl-SI, sq-AL, sr-RS, su-ID, sv-SE, sw-KE, sw-TZ, ta-IN, ta-LK, ta-MY, ta-SG, te-IN, th-TH, tr-TR, uk-UA, ur-IN, ur-PK, uz-UZ, vi-VN, yue-Hant-HK, zh-CN, zh-TW, zu-ZA
   */
  languageCode?: string;
  /**
   * Meeting Url
   * @description The URL of the conference call by which users join the meeting
   */
  meetingUrl?: string;
  /**
   * Parties
   * @description A list of the call"s participants. A party must be provided for the primaryUser.
   */
  parties?: {
      /**
       * Context
       * @description A list of links to external systems such as CRM, Telephony System, Case Management, etc.
       */
      context?: {
          /**
           * Objects
           * @description List of objects within the external system
           */
          objects?: {
              /**
               * Fields
               * @description Object fields. Intended for future use only.
               */
              fields?: {
                  /**
                   * Name
                   * @description Field name
                   */
                  name?: string;
              }[];
              /**
               * Object Id
               * @description Object ID. For Salesforce both case-sensitive and case-insensitive formats are supported.
               */
              objectId: string;
              /**
               * Object Type
               * @description Object Type. Valid only for non-company parties. e.g. Lead.
               * @enum {string}
               */
              objectType: "Account" | "Contact" | "Lead" | "Lead,Contact" | "Opportunity" | "User";
          }[];
          /**
           * System
           * @description External system name. Currently only Salesforce and Generic are supported.
           * @enum {string}
           */
          system: "Generic" | "HubSpot" | "MicrosoftDynamic" | "Salesforce";
      }[];
      /**
       * Email Address
       * @description The email address of the party, if available.
       */
      emailAddress?: string;
      /**
       * Media Channel Id
       * @description The audio channel corresponding to the company team member (rep) used when the uploaded media file is multi-channel (stereo). The channel id is either 0 or 1 (representing left or right respectively)
       */
      mediaChannelId?: number;
      /**
       * Name
       * @description The name of the party, if available.
       */
      name?: string;
      /**
       * Party Id
       * @description An identifier that is only required when speakersTimeline is provided.  The partyId is used to recognize the speakers within the provided speakersTimeline.
       */
      partyId?: string;
      /**
       * Phone Number
       * @description The phone number of the party, if available.
       */
      phoneNumber?: string;
      /**
       * User Id
       * @description The user ID of the participant within the Gong system, if the participant is a user.
       */
      userId?: string;
  }[];
  /**
   * Primary User
   * @description The Gong internal user ID of the team member who hosted the call.
   */
  primaryUser?: string;
  /**
   * Purpose
   * @description The purpose of the call. This optional field is a free text of up to 255 characters.
   */
  purpose?: string;
  /**
   * Scheduled End
   * @description The date and time the call was scheduled to end in the ISO-8601 format (e.g., "2018-02-18T02:30:00-07:00" or "2018-02-18T08:00:00Z", where Z stands for UTC);
   */
  scheduledEnd?: string;
  /**
   * Scheduled Start
   * @description The date and time the call was scheduled to begin in the ISO-8601 format (e.g., "2018-02-18T02:30:00-07:00" or "2018-02-18T08:00:00Z", where Z stands for UTC);
   */
  scheduledStart?: string;
  /**
   * Speakers Timeline  Precise
   * @description Indicates whether the provided speech segments match the media precisely or need further refinement based on the media. "Precisely" here means that segments do not deviate from the actual speech in the media by more than 100ms.
   */
  speakersTimeline__precise?: boolean;
  /**
   * Speakers Timeline  Speech Segments
   * @description The audio recording speech segments (who spoke when).
   */
  speakersTimeline__speechSegments?: {
      /**
       * From Time
       * @description The start time of the segment in milliseconds from the beginning of the call.
       */
      fromTime: number;
      /**
       * Party Ids
       * @description The speaking parties in the segment, each must have a correlating partyId within "parties". It is allowed to provide overlapping segments, i.e. you can either specify multiple speakers in a segment or send several overlapping segments each marked with one speaker.
       */
      partyIds: string[];
      /**
       * To Time
       * @description The end time of the segment in milliseconds from the beginning of the call.
       */
      toTime: number;
  }[];
  /**
   * Title
   * @description The title of the call. This title is available in the Gong system for indexing and search.
   */
  title?: string;
  /**
   * Workspace Id
   * @description Optional workspace identifier. If specified, the call will be placed into this workspace, otherwise, the default algorithm for workspace placement will be applied.
   */
  workspaceId?: string;
};

/**
 * Type of GONG's GONG_ADD_NEW_CALL_V2_CALLS tool output.
 */
type GONG_ADD_NEW_CALL_V2_CALLS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Call Id
       * @description New call ID
       * @default null
       */
      callId: string | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_AGGREGATE_ACTIVITY_BY_PERIOD_VIA_API tool input.
 */
type GONG_AGGREGATE_ACTIVITY_BY_PERIOD_VIA_API_INPUT = {
  /**
   * Aggregation Period
   * @description Calendar time period for aggregating data. Note: First day of the week is Monday.
   * @enum {string}
   */
  aggregationPeriod?: "DAY" | "MONTH" | "QUARTER" | "WEEK" | "YEAR";
  /**
   * Cursor
   * @description When paging is needed, provide the value supplied by the previous API call to bring the following page of records.
   */
  cursor?: string;
  /**
   * Filter  Created From Date Time
   * Format: date-time
   * @description Createdfromdatetime
   */
  filter__createdFromDateTime?: string;
  /**
   * Filter  Created To Date Time
   * Format: date-time
   * @description Createdtodatetime
   */
  filter__createdToDateTime?: string;
  /**
   * Filter  From Date
   * @description The date (in the company"s time zone) from which to list a user"s activity. This value is inclusive. The date should be specified in the following format: YYYY-MM-DD.
   */
  filter__fromDate?: string;
  /**
   * Filter  To Date
   * @description The date (in the company"s time zone) until which to list a user"s activity. This value is exclusive. This value should not exceed the current day. The date should be specified in the following format: YYYY-MM-DD.
   */
  filter__toDate?: string;
  /**
   * Filter  User Ids
   * @description Set of Gong"s unique numeric identifiers for the users (up to 20 digits).
   */
  filter__userIds?: string[];
};

/**
 * Type of GONG's GONG_AGGREGATE_ACTIVITY_BY_PERIOD_VIA_API tool output.
 */
type GONG_AGGREGATE_ACTIVITY_BY_PERIOD_VIA_API_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Records
       * @description Information about the number of records that match the requested filter.
       * @default null
       */
      records: {
          /**
           * Current Page Number
           * @description Current page number.
           * @default null
           */
          currentPageNumber: number | null;
          /**
           * Current Page Size
           * @description Number of records in the current page.
           * @default null
           */
          currentPageSize: number | null;
          /**
           * Cursor
           * @description Returned only when there are more records to be retrieved. Repeat the API call and pass this cursor value in the request to retrieve the next page of records.
           * @default null
           */
          cursor: string | null;
          /**
           * Total Records
           * @description Total number of records.
           * @default null
           */
          totalRecords: number | null;
      } | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
      /**
       * Users Aggregate Activity
       * @description A list, in which each item contains details of one user's activities.
       * @default null
       */
      usersAggregateActivity: {
          /**
           * User Aggregate Activity
           * @description A list, in which each item contains aggregate user activity for consecutive time periods in the date range.
           * @default null
           */
          userAggregateActivity: {
              /**
               * Calls As Host
               * @description The number of recorded calls this user hosted.
               * @default null
               */
              callsAsHost: number | null;
              /**
               * Calls Attended
               * @description The number of calls in which this user is participant (not host).
               * @default null
               */
              callsAttended: number | null;
              /**
               * Calls Comments Given
               * @description The number of calls in which a user gave at least one comment.
               * @default null
               */
              callsCommentsGiven: number | null;
              /**
               * Calls Comments Received
               * @description The number of calls in which a user received at least one comment on the users calls.
               * @default null
               */
              callsCommentsReceived: number | null;
              /**
               * Calls Gave Feedback
               * @description The number of recorded calls the user gave feedback on.
               * @default null
               */
              callsGaveFeedback: number | null;
              /**
               * Calls Marked As Feedback Given
               * @description The number of calls in which someone pressed the "Mark as reviewed".
               * @default null
               */
              callsMarkedAsFeedbackGiven: number | null;
              /**
               * Calls Marked As Feedback Received
               * @description The number of calls in which someone pressed the “Mark as reviewed” on the users calls.
               * @default null
               */
              callsMarkedAsFeedbackReceived: number | null;
              /**
               * Calls Received Feedback
               * @description The number of recorded calls the user received feedback on.
               * @default null
               */
              callsReceivedFeedback: number | null;
              /**
               * Calls Requested Feedback
               * @description The number of recorded calls the user requested feedback on.
               * @default null
               */
              callsRequestedFeedback: number | null;
              /**
               * Calls Scorecards Filled
               * @description The number of scorecards the user completed.
               * @default null
               */
              callsScorecardsFilled: number | null;
              /**
               * Calls Scorecards Received
               * @description The number of calls in which someone filled a scorecard on the user's calls.
               * @default null
               */
              callsScorecardsReceived: number | null;
              /**
               * Calls Shared Externally
               * @description The number of calls the user shared with others outside the company.
               * @default null
               */
              callsSharedExternally: number | null;
              /**
               * Calls Shared Internally
               * @description The number of calls the user shared with others inside the company.
               * @default null
               */
              callsSharedInternally: number | null;
              /**
               * From Date
               * @description The start of the period, or the request filter's fromDate for the first period in the range, in the ISO-8601 format, for example: '2024-01-17T16:20:05-03:00' or '2016-02-16T03:57:04.834+05:30' or '2020-11-20T21:30:07.233692Z', where Z stands for UTC.
               * @default null
               */
              fromDate: string | null;
              /**
               * Others Calls Listened To
               * @description The number of other users' calls the user listened to.
               * @default null
               */
              othersCallsListenedTo: number | null;
              /**
               * Own Calls Listened To
               * @description The number of the user's own calls the user listened to.
               * @default null
               */
              ownCallsListenedTo: number | null;
              /**
               * To Date
               * @description The end of the period, or the request filter's toDate for the last period in the range,  in the ISO-8601 format, for example: '2024-01-17T16:20:05-03:00' or '2016-02-16T03:57:04.834+05:30' or '2020-11-20T21:30:07.233692Z', where Z stands for UTC.
               * @default null
               */
              toDate: string | null;
          }[] | null;
          /**
           * User Email Address
           * @description The email address of the Gong user.
           * @default null
           */
          userEmailAddress: string | null;
          /**
           * User Id
           * @description Gong's unique numeric identifier for the user (up to 20 digits).
           * @default null
           */
          userId: string | null;
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
 * Type of GONG's GONG_AGGREGATE_USER_ACTIVITY_STATISTICS tool input.
 */
type GONG_AGGREGATE_USER_ACTIVITY_STATISTICS_INPUT = {
  /**
   * Cursor
   * @description When paging is needed, provide the value supplied by the previous API call to bring the following page of records.
   */
  cursor?: string;
  /**
   * Filter  Created From Date Time
   * Format: date-time
   * @description Createdfromdatetime
   */
  filter__createdFromDateTime?: string;
  /**
   * Filter  Created To Date Time
   * Format: date-time
   * @description Createdtodatetime
   */
  filter__createdToDateTime?: string;
  /**
   * Filter  From Date
   * @description The date (in the company"s time zone) from which to list a user"s activity. This value is inclusive. The date should be specified in the following format: YYYY-MM-DD.
   */
  filter__fromDate?: string;
  /**
   * Filter  To Date
   * @description The date (in the company"s time zone) until which to list a user"s activity. This value is exclusive. This value should not exceed the current day. The date should be specified in the following format: YYYY-MM-DD.
   */
  filter__toDate?: string;
  /**
   * Filter  User Ids
   * @description Set of Gong"s unique numeric identifiers for the users (up to 20 digits).
   */
  filter__userIds?: string[];
};

/**
 * Type of GONG's GONG_AGGREGATE_USER_ACTIVITY_STATISTICS tool output.
 */
type GONG_AGGREGATE_USER_ACTIVITY_STATISTICS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * From Date Time
       * @description The date and time in the ISO-8601 format, for example: '2024-01-17T16:20:05-03:00' or '2016-02-16T03:57:04.834+05:30' or '2020-11-20T21:30:07.233692Z', where Z stands for UTC, when the list of results starts.
       * @default null
       */
      fromDateTime: string | null;
      /**
       * Records
       * @description Information about the number of records that match the requested filter.
       * @default null
       */
      records: {
          /**
           * Current Page Number
           * @description Current page number.
           * @default null
           */
          currentPageNumber: number | null;
          /**
           * Current Page Size
           * @description Number of records in the current page.
           * @default null
           */
          currentPageSize: number | null;
          /**
           * Cursor
           * @description Returned only when there are more records to be retrieved. Repeat the API call and pass this cursor value in the request to retrieve the next page of records.
           * @default null
           */
          cursor: string | null;
          /**
           * Total Records
           * @description Total number of records.
           * @default null
           */
          totalRecords: number | null;
      } | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
      /**
       * Time Zone
       * @description The company's defined timezone in Gong.
       * @default null
       */
      timeZone: string | null;
      /**
       * To Date Time
       * @description The date and time in the ISO-8601 format, for example: '2024-01-17T16:20:05-03:00' or '2016-02-16T03:57:04.834+05:30' or '2020-11-20T21:30:07.233692Z', where Z stands for UTC, when the list of results ends.
       * @default null
       */
      toDateTime: string | null;
      /**
       * Users Aggregate Activity Stats
       * @description A list, in which each item specifies one user's activities.
       * @default null
       */
      usersAggregateActivityStats: {
          /**
           * UserAggregateActivityStats
           * @description Aggregated activity for a user within a time period
           * @default null
           */
          userAggregateActivityStats: {
              /**
               * Calls As Host
               * @description The number of recorded calls this user hosted.
               * @default null
               */
              callsAsHost: number | null;
              /**
               * Calls Attended
               * @description The number of calls in which this user is participant (not host).
               * @default null
               */
              callsAttended: number | null;
              /**
               * Calls Comments Given
               * @description The number of calls in which a user gave at least one comment.
               * @default null
               */
              callsCommentsGiven: number | null;
              /**
               * Calls Comments Received
               * @description The number of calls in which a user received at least one comment on the users calls.
               * @default null
               */
              callsCommentsReceived: number | null;
              /**
               * Calls Gave Feedback
               * @description The number of recorded calls the user gave feedback on.
               * @default null
               */
              callsGaveFeedback: number | null;
              /**
               * Calls Marked As Feedback Given
               * @description The number of calls in which someone pressed the "Mark as reviewed".
               * @default null
               */
              callsMarkedAsFeedbackGiven: number | null;
              /**
               * Calls Marked As Feedback Received
               * @description The number of calls in which someone pressed the “Mark as reviewed” on the users calls.
               * @default null
               */
              callsMarkedAsFeedbackReceived: number | null;
              /**
               * Calls Received Feedback
               * @description The number of recorded calls the user received feedback on.
               * @default null
               */
              callsReceivedFeedback: number | null;
              /**
               * Calls Requested Feedback
               * @description The number of recorded calls the user requested feedback on.
               * @default null
               */
              callsRequestedFeedback: number | null;
              /**
               * Calls Scorecards Filled
               * @description The number of scorecards the user completed.
               * @default null
               */
              callsScorecardsFilled: number | null;
              /**
               * Calls Scorecards Received
               * @description The number of calls in which someone filled a scorecard on the user's calls.
               * @default null
               */
              callsScorecardsReceived: number | null;
              /**
               * Calls Shared Externally
               * @description The number of calls the user shared with others outside the company.
               * @default null
               */
              callsSharedExternally: number | null;
              /**
               * Calls Shared Internally
               * @description The number of calls the user shared with others inside the company.
               * @default null
               */
              callsSharedInternally: number | null;
              /**
               * Others Calls Listened To
               * @description The number of other users' calls the user listened to.
               * @default null
               */
              othersCallsListenedTo: number | null;
              /**
               * Own Calls Listened To
               * @description The number of the user's own calls the user listened to.
               * @default null
               */
              ownCallsListenedTo: number | null;
          } | null;
          /**
           * User Email Address
           * @description The email address of the Gong user.
           * @default null
           */
          userEmailAddress: string | null;
          /**
           * User Id
           * @description Gong's unique numeric identifier for the user (up to 20 digits).
           * @default null
           */
          userId: string | null;
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
 * Type of GONG's GONG_ASSIGN_PROSPECTS_TO_FLOW tool input.
 */
type GONG_ASSIGN_PROSPECTS_TO_FLOW_INPUT = {
  /**
   * Crm Prospects Ids
   * @description The CRM IDs of the contact or lead that should be assigned to a flow
   */
  crmProspectsIds?: string[];
  /**
   * Flow Id
   * @description The Engage Flow ID to assign the contacts to.
   */
  flowId?: string;
  /**
   * Flow Instance Owner Email
   * @description The email of the Gong user who owns the flow to-dos.
   */
  flowInstanceOwnerEmail?: string;
};

/**
 * Type of GONG's GONG_ASSIGN_PROSPECTS_TO_FLOW tool output.
 */
type GONG_ASSIGN_PROSPECTS_TO_FLOW_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Prospects Assigned
       * @default null
       */
      prospectsAssigned: {
          /**
           * Crm Prospect Id
           * @description The CRM ID of the prospect that was assigned to a Gong Engage flow.
           * @default null
           */
          crmProspectId: string | null;
          /**
           * Exclusive
           * @description Indicates whether a prospect in this flow can be added to other flows
           * @default null
           */
          exclusive: boolean | null;
          /**
           * Flow Id
           * @description The Gong Engage Flow ID the prospect was assigned to.
           * @default null
           */
          flowId: string | null;
          /**
           * Flow Instance Create Date
           * @description The creation date of the flow instance in the ISO-8601 format, for example: '2024-01-17T16:20:05-03:00' or '2016-02-16T03:57:04.834+05:30' or '2020-11-20T21:30:07.233692Z', where Z stands for UTC.
           * @default null
           */
          flowInstanceCreateDate: string | null;
          /**
           * Flow Instance Id
           * @description The newly created flow instance id.
           * @default null
           */
          flowInstanceId: string | null;
          /**
           * Flow Instance Owner Email
           * @description The email address of the Gong user who owns the flow instance tasks.
           * @default null
           */
          flowInstanceOwnerEmail: string | null;
          /**
           * Flow Instance Owner Full Name
           * @description The full name of the Gong user who owns the flow instance tasks.
           *
           * @default null
           */
          flowInstanceOwnerFullName: string | null;
          /**
           * FlowInstanceStatus
           * @description The status of the flow instance.
           * @default null
           * @enum {string|null}
           */
          flowInstanceStatus: "Running" | "Pending" | "Paused" | null;
          /**
           * Flow Name
           * @description The Gong Engage Flow name the prospect was assigned to.
           * @default null
           */
          flowName: string | null;
          /**
           * Workspace Id
           * @description The workspace ID this flow belongs to.
           * @default null
           */
          workspaceId: string | null;
      }[] | null;
      /**
       * Prospects Not Assigned
       * @default null
       */
      prospectsNotAssigned: {
          /**
           * Crm Prospect Id
           * @description The CRM ID of the prospect that failed to get assigned to a Gong Engage flow.
           * @default null
           */
          crmProspectId: string | null;
          /**
           * ErrorCode
           * @description The code of the assignment error
           * @default null
           * @enum {string|null}
           */
          errorCode: "InvalidArgument" | "InvalidState" | "UnexpectedError" | null;
          /**
           * Error Message
           * @description A message describing the assignment error
           * @default null
           */
          errorMessage: string | null;
          /**
           * Flow Id
           * @description The flow ID to which the assignment failed
           * @default null
           */
          flowId: string | null;
      }[] | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_CREATE_ACTIVITY_SCORECARDS_REPORT tool input.
 */
type GONG_CREATE_ACTIVITY_SCORECARDS_REPORT_INPUT = {
  /**
   * Cursor
   * @description When paging is needed, provide the value supplied by the previous API call to bring the following page of records.
   */
  cursor?: string;
  /**
   * Filter  Call From Date
   * @description The date (in the company"s time zone) of the call from when to list calls. This value is inclusive. The date should be specified in the following format: YYYY-MM-DD; if not specified, it starts with the earliest recorded call.
   */
  filter__callFromDate?: string;
  /**
   * Filter  Call To Date
   * @description The date (in the company"s time zone) of the call until when to list calls. This value is exclusive. The date should be specified in the following format: YYYY-MM-DD; if not specified, it ends with the latest recorded call.
   */
  filter__callToDate?: string;
  /**
   * Filter  Review From Date
   * @description The review date (in the company"s time zone) from when to list calls. This value is inclusive. The date should be specified in the following format: YYYY-MM-DD; if not specified, it starts with the earliest reviewed call.
   */
  filter__reviewFromDate?: string;
  /**
   * Filter  Review Method
   * @description Select whether to return scorecards that have been reviewed manually, automatically, or both. Default value: MANUAL
   * @enum {string}
   */
  filter__reviewMethod?: "AUTOMATIC" | "BOTH" | "MANUAL";
  /**
   * Filter  Review To Date
   * @description The review date (in the company"s time zone) until when to list calls. This value is exclusive. The date should be specified in the following format: YYYY-MM-DD; if not specified, it ends with the latest reviewed call.
   */
  filter__reviewToDate?: string;
  /**
   * Filter  Reviewed User Ids
   * @description List of user Ids of the team members being reviewed. If not specified, it returns all answered scorecards in the corresponding filter.
   */
  filter__reviewedUserIds?: string[];
  /**
   * Filter  Scorecard Ids
   * @description List of scorecards Ids. If not specified, it returns all answered scorecards in the corresponding filter.
   */
  filter__scorecardIds?: string[];
};

/**
 * Type of GONG's GONG_CREATE_ACTIVITY_SCORECARDS_REPORT tool output.
 */
type GONG_CREATE_ACTIVITY_SCORECARDS_REPORT_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Answered Scorecards
       * @description A list, in which each item contains one answered scorecard.
       * @default null
       */
      answeredScorecards: {
          /**
           * Answered Scorecard Id
           * @description The identifier of the answer of the scorecard.
           * @default null
           */
          answeredScorecardId: number | null;
          /**
           * Answers
           * @description The answers in the answered scorecard.
           * @default null
           */
          answers: {
              /**
               * Answer Text
               * @description The answer's text, if answered. Null otherwise.
               * @default null
               */
              answerText: string | null;
              /**
               * Is Overall
               * @description If the question is the main overall question or not.
               * @default null
               */
              isOverall: boolean | null;
              /**
               * Not Applicable
               * @description If the question is irrelevant for the call.
               * @default null
               */
              notApplicable: boolean | null;
              /**
               * Question Id
               * @description The identifier of the question.
               * @default null
               */
              questionId: number | null;
              /**
               * Question Revision Id
               * @description The identifier of the revision version of the question.
               * @default null
               */
              questionRevisionId: number | null;
              /**
               * Score
               * @description Score between 1 to 50, if answered. Null otherwise.
               * @default null
               */
              score: number | null;
              /**
               * Selected Options
               * @description The identifier of the options selected. Null otherwise
               * @default null
               */
              selectedOptions: string[] | null;
          }[] | null;
          /**
           * Call Id
           * @description Gong's unique numeric identifier for the call (up to 20 digits).
           * @default null
           */
          callId: number | null;
          /**
           * Call Start Time
           * Format: date-time
           * @description The date and time when the call was recorded in the ISO-8601 format, for example: '2024-01-17T16:20:05-03:00' or '2016-02-16T03:57:04.834+05:30' or '2020-11-20T21:30:07.233692Z', where Z stands for UTC.
           * @default null
           */
          callStartTime: string | null;
          /**
           * Editor User Id
           * @description The user Id of the last team member to edit the answer. Null when no-one has edited the scorecard, or when the original team member to fill in the scorecard has edited the answers.
           * @default null
           */
          editorUserId: number | null;
          /**
           * ReviewMethod
           * @description The method used to review the scorecard.
           * @default null
           * @enum {string|null}
           */
          reviewMethod: "AUTOMATIC" | "MANUAL" | null;
          /**
           * Review Time
           * Format: date-time
           * @description The date and time when the review was completed and published in the ISO-8601 format, for example: '2024-01-17T16:20:05-03:00' or '2016-02-16T03:57:04.834+05:30' or '2020-11-20T21:30:07.233692Z', where Z stands for UTC.
           * @default null
           */
          reviewTime: string | null;
          /**
           * Reviewed User Id
           * @description The user Id of the team member being reviewed, who hosted the call.
           * @default null
           */
          reviewedUserId: number | null;
          /**
           * Reviewer User Id
           * @description The user Id of the team member who answered the scorecard for the call, if the scorecard reviewMethod is AUTOMATIC this id would be null
           * @default null
           */
          reviewerUserId: number | null;
          /**
           * Scorecard Id
           * @description The identifier of the scorecard.
           * @default null
           */
          scorecardId: number | null;
          /**
           * Scorecard Name
           * @description Scorecard name.
           * @default null
           */
          scorecardName: string | null;
          /**
           * VisibilityType
           * @default null
           * @enum {string|null}
           */
          visibilityType: "PUBLIC" | "PRIVATE" | "OPT_IN_USERS" | null;
      }[] | null;
      /**
       * Records
       * @description Information about the number of records that match the requested filter.
       * @default null
       */
      records: {
          /**
           * Current Page Number
           * @description Current page number.
           * @default null
           */
          currentPageNumber: number | null;
          /**
           * Current Page Size
           * @description Number of records in the current page.
           * @default null
           */
          currentPageSize: number | null;
          /**
           * Cursor
           * @description Returned only when there are more records to be retrieved. Repeat the API call and pass this cursor value in the request to retrieve the next page of records.
           * @default null
           */
          cursor: string | null;
          /**
           * Total Records
           * @description Total number of records.
           * @default null
           */
          totalRecords: number | null;
      } | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_CREATE_A_NEW_GONG_MEETING_V2_MEETINGS tool input.
 */
type GONG_CREATE_A_NEW_GONG_MEETING_V2_MEETINGS_INPUT = {
  /**
   * End Time
   * @description The meeting end time in ISO-8601 format (e.g., "2018-02-18T02:30:00-07:00" or "2018-02-18T08:00:00Z", where Z stands for UTC).
   */
  endTime?: string;
  /**
   * External Id
   * @description The ID as it is formed on the external system.
   */
  externalId?: string;
  /**
   * Invitees
   * @description A list of email addresses of invitees to the event (not including the organizer).
   */
  invitees?: {
      /**
       * Display Name
       * @description The name of the person.
       */
      displayName?: string;
      /**
       * Email
       * @description The unique meeting to identify the meeting.
       */
      email?: string;
      /**
       * First Name
       * @description The first name of the person, if available.
       */
      firstName?: string;
      /**
       * Last Name
       * @description The last name of the person, if available.
       */
      lastName?: string;
  }[];
  /**
   * Organizer Email
   * @description The email address of the user creating the meeting, the Gong consent page link will be used according to the settings of this user.
   */
  organizerEmail?: string;
  /**
   * Start Time
   * @description The meeting start time in ISO-8601 format (e.g., "2018-02-18T02:30:00-07:00" or "2018-02-18T08:00:00Z", where Z stands for UTC).
   */
  startTime?: string;
  /**
   * Title
   * @description Title of the event.
   */
  title?: string;
};

/**
 * Type of GONG's GONG_CREATE_A_NEW_GONG_MEETING_V2_MEETINGS tool output.
 */
type GONG_CREATE_A_NEW_GONG_MEETING_V2_MEETINGS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Additional Invitees
       * @description Attendees the requesting party should add to the invitation, this should support adding email addresses such as coordinator@gong.io for Gong to schedule the recording of the meeting.
       * @default null
       */
      additionalInvitees: {
          /**
           * Display Name
           * @description The name of the person.
           * @default null
           */
          displayName: string | null;
          /**
           * Email
           * @description The unique meeting to identify the meeting.
           * @default null
           */
          email: string | null;
          /**
           * First Name
           * @description The first name of the person, if available.
           * @default null
           */
          firstName: string | null;
          /**
           * Last Name
           * @description The last name of the person, if available.
           * @default null
           */
          lastName: string | null;
      }[] | null;
      /**
       * Meeting Id
       * @description Gong's unique identifier for the meeting (up to 20 digits).
       * @default null
       */
      meetingId: string | null;
      /**
       * Meeting Url
       * @description The Gong URL of the meeting, should be used to enter the meeting.
       * @default null
       */
      meetingUrl: string | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_CREATE_PERMISSION_PROFILE_V2_PERMISSION_PROFILE tool input.
 */
type GONG_CREATE_PERMISSION_PROFILE_V2_PERMISSION_PROFILE_INPUT = {
  /**
   * Account
   * @description User can view account pages.
   */
  account?: boolean;
  /**
   * Activity
   * @description User can view activity pages.
   */
  activity?: boolean;
  /**
   * Calls Access  Permission Level
   * @description Permission access scope.
   * @enum {string}
   */
  callsAccess__permissionLevel?: "all" | "all / managers-team / report-to-them / own / none" | "managers-team" | "none" | "own" | "report-to-them";
  /**
   * Calls Access  Team Lead Ids
   * @description List of user IDs to populate the managers-team permission level You can retrieve the user ids by using the “Users” API.
   */
  callsAccess__teamLeadIds?: string[];
  /**
   * Calls And Search
   * @description User can view and search calls.
   */
  callsAndSearch?: boolean;
  /**
   * Coaching
   * @description User can view coaching pages.
   */
  coaching?: boolean;
  /**
   * Coaching Access  Permission Level
   * @description Permission access scope.
   * @enum {string}
   */
  coachingAccess__permissionLevel?: "all" | "all / managers-team / report-to-them / own / none" | "managers-team" | "none" | "own" | "report-to-them";
  /**
   * Coaching Access  Team Lead Ids
   * @description List of user IDs to populate the managers-team permission level You can retrieve the user ids by using the “Users” API.
   */
  coachingAccess__teamLeadIds?: string[];
  /**
   * Create Edit And Delete Deals Boards
   * @description User can create/edit/delete deals boards.
   */
  createEditAndDeleteDealsBoards?: boolean;
  /**
   * Crm Data Import
   * @description User can perform import of crm data.
   */
  crmDataImport?: boolean;
  /**
   * Crm Data Inline Editing
   * @description User can perform inline editing of crm data.
   */
  crmDataInlineEditing?: boolean;
  /**
   * Deals
   * @description User can view deals pages.
   */
  deals?: boolean;
  /**
   * Deals Access  Permission Level
   * @description Permission access scope.
   * @enum {string}
   */
  dealsAccess__permissionLevel?: "all" | "all / managers-team / report-to-them / own / none" | "managers-team" | "none" | "own" | "report-to-them";
  /**
   * Deals Access  Team Lead Ids
   * @description List of user IDs to populate the managers-team permission level You can retrieve the user ids by using the “Users” API.
   */
  dealsAccess__teamLeadIds?: string[];
  /**
   * Deals Inline Editing
   * @description User can perform inline editing of deals.
   */
  dealsInlineEditing?: boolean;
  /**
   * Delete Calls
   * @description User can delete calls.
   */
  deleteCalls?: boolean;
  /**
   * Delete Emails
   * @description User can delete emails.
   */
  deleteEmails?: boolean;
  /**
   * Description
   * @description Permission profile description.
   */
  description?: string;
  /**
   * Download Call Media
   * @description User can download call media.
   */
  downloadCallMedia?: boolean;
  /**
   * Emails Access  Permission Level
   * @description Permission access scope.
   * @enum {string}
   */
  emailsAccess__permissionLevel?: "all" | "all / managers-team / report-to-them / own / none" | "managers-team" | "none" | "own" | "report-to-them";
  /**
   * Emails Access  Team Lead Ids
   * @description List of user IDs to populate the managers-team permission level You can retrieve the user ids by using the “Users” API.
   */
  emailsAccess__teamLeadIds?: string[];
  /**
   * Engage Create And Manage Rulesets
   * @description User can create and manage rulesets.
   */
  engageCreateAndManageRulesets?: boolean;
  /**
   * Engage Manage Company Sequences
   * @description User can manage company sequences.
   */
  engageManageCompanySequences?: boolean;
  /**
   * Engage Manage Company Templates
   * @description User can manage company email templates.
   */
  engageManageCompanyTemplates?: boolean;
  /**
   * Engage Snooze Flow To Dos For Others
   * @description User can snooze flow in to dos for others
   */
  engageSnoozeFlowToDosForOthers?: boolean;
  /**
   * Export Calls And Coaching Data To Csv
   * @description User can export calls and coaching metrics data to CSV.
   */
  exportCallsAndCoachingDataToCSV?: boolean;
  /**
   * Forecast
   * @description User can view forecast pages.
   */
  forecast?: boolean;
  /**
   * Forecast Manage
   * @description User can manage forecast boards and upload targets.
   */
  forecastManage?: boolean;
  /**
   * Forecast Permissions  Forecast Access  Permission Level
   * @description Permission access scope.
   * @enum {string}
   */
  forecastPermissions__forecastAccess__permissionLevel?: "all" | "all / managers-team / report-to-them / own / none" | "managers-team" | "none" | "own" | "report-to-them";
  /**
   * Forecast Permissions  Forecast Access  Team Lead Ids
   * @description List of user IDs to populate the managers-team permission level You can retrieve the user ids by using the “Users” API.
   */
  forecastPermissions__forecastAccess__teamLeadIds?: string[];
  /**
   * Forecast Permissions  Forecast Edit Submissions  Permission Level
   * @description Permission access scope.
   * @enum {string}
   */
  forecastPermissions__forecastEditSubmissions__permissionLevel?: "all" | "all / managers-team / report-to-them / own / none" | "managers-team" | "none" | "own" | "report-to-them";
  /**
   * Forecast Permissions  Forecast Edit Submissions  Team Lead Ids
   * @description List of user IDs to populate the managers-team permission level You can retrieve the user ids by using the “Users” API.
   */
  forecastPermissions__forecastEditSubmissions__teamLeadIds?: string[];
  /**
   * Forecast Permissions  Forecast Edit Targets  Permission Level
   * @description Permission access scope.
   * @enum {string}
   */
  forecastPermissions__forecastEditTargets__permissionLevel?: "all" | "all / managers-team / report-to-them / own / none" | "managers-team" | "none" | "own" | "report-to-them";
  /**
   * Forecast Permissions  Forecast Edit Targets  Team Lead Ids
   * @description List of user IDs to populate the managers-team permission level You can retrieve the user ids by using the “Users” API.
   */
  forecastPermissions__forecastEditTargets__teamLeadIds?: string[];
  /**
   * Id
   * @description Unique numeric identifier of the permission profile (up to 20 digits).
   */
  id?: string;
  /**
   * Initiatives
   * @description User can view initiatives page.
   */
  initiatives?: boolean;
  /**
   * Insights Access  Permission Level
   * @description Permission access scope.
   * @enum {string}
   */
  insightsAccess__permissionLevel?: "all" | "all / managers-team / report-to-them / own / none" | "managers-team" | "none" | "own" | "report-to-them";
  /**
   * Insights Access  Team Lead Ids
   * @description List of user IDs to populate the managers-team permission level You can retrieve the user ids by using the “Users” API.
   */
  insightsAccess__teamLeadIds?: string[];
  /**
   * Library
   * @description User can view library pages.
   */
  library?: boolean;
  /**
   * Library Folder Access  Library Folder Ids
   * @description List of library folder Ids, if set, "permissionLevel" must not be "none".
   */
  libraryFolderAccess__libraryFolderIds?: string[];
  /**
   * Library Folder Access  Manage Folder Calls
   * @description A user with this profile can add calls to folders, archive calls, if set, "permissionLevel" must not be "none".
   */
  libraryFolderAccess__manageFolderCalls?: boolean;
  /**
   * Library Folder Access  Manage Public Folder
   * @description A user with this profile can manage public folder, if set, "permissionLevel" must not be "none".
   */
  libraryFolderAccess__managePublicFolder?: boolean;
  /**
   * Library Folder Access  Manage Streams
   * @description A user with this profile can manage streams, if set, "permissionLevel" must not be "none".
   */
  libraryFolderAccess__manageStreams?: boolean;
  /**
   * Library Folder Access  Permission Level
   * @description Library folder permission level - mandatory value.
   * @enum {string}
   */
  libraryFolderAccess__permissionLevel?: "all" | "none" | "none, all, specific-folders" | "specific-folders";
  /**
   * Library Folder Access  Share Folders And Streams
   * @description A user with this profile can share folders and streams from Your Library with other team members, if set, "permissionLevel" must not be "none".
   */
  libraryFolderAccess__shareFoldersAndStreams?: boolean;
  /**
   * Listen In Calls
   * @description User can listen in calls.
   */
  listenInCalls?: boolean;
  /**
   * Manage General Business Settings
   * @description User can manage general business settings.
   */
  manageGeneralBusinessSettings?: boolean;
  /**
   * Manage Revenue Analytics
   * @description User can manage revenue analytics.
   */
  manageRevenueAnalytics?: boolean;
  /**
   * Manage Scorecards
   * @description User can manage scorecards.
   */
  manageScorecards?: boolean;
  /**
   * Manually Schedule And Upload Calls
   * @description User can manually schedule and upload calls.
   */
  manuallyScheduleAndUploadCalls?: boolean;
  /**
   * Market
   * @description User can view market page.
   */
  market?: boolean;
  /**
   * Name
   * @description Permission profile name.
   */
  name?: string;
  /**
   * Override Score
   * @description User can override someone else score.
   */
  overrideScore?: boolean;
  /**
   * Private Calls
   * @description User can set their own calls as private.
   */
  privateCalls?: boolean;
  /**
   * Score Calls
   * @description User can score calls.
   */
  scoreCalls?: boolean;
  /**
   * Share Calls With Customers
   * @description User can share calls with customers.
   */
  shareCallsWithCustomers?: boolean;
  /**
   * Team Stats
   * @description User can view team stats page.
   */
  teamStats?: boolean;
  /**
   * Trim Calls
   * @description User can trim calls.
   */
  trimCalls?: boolean;
  /**
   * Usage
   * @description User can view usage pages.
   */
  usage?: boolean;
  /**
   * Usage Access  Permission Level
   * @description Permission access scope.
   * @enum {string}
   */
  usageAccess__permissionLevel?: "all" | "all / managers-team / report-to-them / own / none" | "managers-team" | "none" | "own" | "report-to-them";
  /**
   * Usage Access  Team Lead Ids
   * @description List of user IDs to populate the managers-team permission level You can retrieve the user ids by using the “Users” API.
   */
  usageAccess__teamLeadIds?: string[];
  /**
   * View Engage Analytics Activity
   * @description User can view engage analytics activity page.
   */
  viewEngageAnalyticsActivity?: boolean;
  /**
   * View Engage Analytics Flows
   * @description User can view engage analytics flows page.
   */
  viewEngageAnalyticsFlows?: boolean;
  /**
   * View Engage Analytics Performance
   * @description User can view engage analytics performance page.
   */
  viewEngageAnalyticsPerformance?: boolean;
  /**
   * View Revenue Analytics
   * @description User can view dashboards page.
   */
  viewRevenueAnalytics?: boolean;
  /**
   * Workspace Id
   * @description Workspace identifier. You can retrieve the workspace using the "workspaces" (under "Settings") API.
   */
  workspaceId?: string;
};

/**
 * Type of GONG's GONG_CREATE_PERMISSION_PROFILE_V2_PERMISSION_PROFILE tool output.
 */
type GONG_CREATE_PERMISSION_PROFILE_V2_PERMISSION_PROFILE_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Profile
       * @description Permission profile
       * @default null
       */
      profile: {
          /**
           * Account
           * @description User can view account pages.
           * @default null
           */
          account: boolean | null;
          /**
           * Activity
           * @description User can view activity pages.
           * @default null
           */
          activity: boolean | null;
          /**
           * CallsAccess
           * @description Calls access permission.
           * @default null
           */
          callsAccess: {
              /**
               * PermissionLevel
               * @description Permission access scope.
               * @default null
               * @enum {string|null}
               */
              permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
              /**
               * Team Lead Ids
               * @description List of user IDs to populate the managers-team permission level
               *
               *     You can retrieve the user ids by using the “Users” API.
               * @default null
               */
              teamLeadIds: string[] | null;
          } | null;
          /**
           * Calls And Search
           * @description User can view and search calls.
           * @default null
           */
          callsAndSearch: boolean | null;
          /**
           * Coaching
           * @description User can view coaching pages.
           * @default null
           */
          coaching: boolean | null;
          /**
           * CoachingAccess
           * @description Coaching access permission.
           * @default null
           */
          coachingAccess: {
              /**
               * PermissionLevel2
               * @description Permission access scope.
               * @default null
               * @enum {string|null}
               */
              permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
              /**
               * Team Lead Ids
               * @description List of user IDs to populate the managers-team permission level
               *
               *     You can retrieve the user ids by using the “Users” API.
               * @default null
               */
              teamLeadIds: string[] | null;
          } | null;
          /**
           * Create Edit And Delete Deals Boards
           * @description User can create/edit/delete deals boards.
           * @default null
           */
          createEditAndDeleteDealsBoards: boolean | null;
          /**
           * Crm Data Import
           * @description User can perform import of crm data.
           * @default null
           */
          crmDataImport: boolean | null;
          /**
           * Crm Data Inline Editing
           * @description User can perform inline editing of crm data.
           * @default null
           */
          crmDataInlineEditing: boolean | null;
          /**
           * Deals
           * @description User can view deals pages.
           * @default null
           */
          deals: boolean | null;
          /**
           * DealsAccess
           * @description Deals access permission.
           * @default null
           */
          dealsAccess: {
              /**
               * PermissionLevel2
               * @description Permission access scope.
               * @default null
               * @enum {string|null}
               */
              permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
              /**
               * Team Lead Ids
               * @description List of user IDs to populate the managers-team permission level
               *
               *     You can retrieve the user ids by using the “Users” API.
               * @default null
               */
              teamLeadIds: string[] | null;
          } | null;
          /**
           * Deals Inline Editing
           * @description User can perform inline editing of deals.
           * @default null
           */
          dealsInlineEditing: boolean | null;
          /**
           * Delete Calls
           * @description User can delete calls.
           * @default null
           */
          deleteCalls: boolean | null;
          /**
           * Delete Emails
           * @description User can delete emails.
           * @default null
           */
          deleteEmails: boolean | null;
          /**
           * Description
           * @description Permission profile description.
           * @default null
           */
          description: string | null;
          /**
           * Download Call Media
           * @description User can download call media.
           * @default null
           */
          downloadCallMedia: boolean | null;
          /**
           * EmailsAccess
           * @description Emails access permission.
           * @default null
           */
          emailsAccess: {
              /**
               * PermissionLevel2
               * @description Permission access scope.
               * @default null
               * @enum {string|null}
               */
              permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
              /**
               * Team Lead Ids
               * @description List of user IDs to populate the managers-team permission level
               *
               *     You can retrieve the user ids by using the “Users” API.
               * @default null
               */
              teamLeadIds: string[] | null;
          } | null;
          /**
           * Engage Create And Manage Rulesets
           * @description User can create and manage rulesets.
           * @default null
           */
          engageCreateAndManageRulesets: boolean | null;
          /**
           * Engage Manage Company Sequences
           * @description User can manage company sequences.
           * @default null
           */
          engageManageCompanySequences: boolean | null;
          /**
           * Engage Manage Company Templates
           * @description User can manage company email templates.
           * @default null
           */
          engageManageCompanyTemplates: boolean | null;
          /**
           * Engage Snooze Flow To Dos For Others
           * @description User can snooze flow in to dos for others
           * @default null
           */
          engageSnoozeFlowToDosForOthers: boolean | null;
          /**
           * Export Calls And Coaching Data To Csv
           * @description User can export calls and coaching metrics data to CSV.
           * @default null
           */
          exportCallsAndCoachingDataToCSV: boolean | null;
          /**
           * Forecast
           * @description User can view forecast pages.
           * @default null
           */
          forecast: boolean | null;
          /**
           * Forecast Manage
           * @description User can manage forecast boards and upload targets.
           * @default null
           */
          forecastManage: boolean | null;
          /**
           * ForecastPermissions
           * @description All forecast permissions.
           * @default null
           */
          forecastPermissions: {
              /**
               * ForecastAccess
               * @description User can view forecast submissions.
               * @default null
               */
              forecastAccess: {
                  /**
                   * PermissionLevel2
                   * @description Permission access scope.
                   * @default null
                   * @enum {string|null}
                   */
                  permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
                  /**
                   * Team Lead Ids
                   * @description List of user IDs to populate the managers-team permission level
                   *
                   *     You can retrieve the user ids by using the “Users” API.
                   * @default null
                   */
                  teamLeadIds: string[] | null;
              } | null;
              /**
               * ForecastEditSubmissions
               * @description User can edit forecasts submissions.
               * @default null
               */
              forecastEditSubmissions: {
                  /**
                   * PermissionLevel2
                   * @description Permission access scope.
                   * @default null
                   * @enum {string|null}
                   */
                  permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
                  /**
                   * Team Lead Ids
                   * @description List of user IDs to populate the managers-team permission level
                   *
                   *     You can retrieve the user ids by using the “Users” API.
                   * @default null
                   */
                  teamLeadIds: string[] | null;
              } | null;
              /**
               * ForecastEditTargets
               * @description User can edit forecast Targets.
               * @default null
               */
              forecastEditTargets: {
                  /**
                   * PermissionLevel2
                   * @description Permission access scope.
                   * @default null
                   * @enum {string|null}
                   */
                  permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
                  /**
                   * Team Lead Ids
                   * @description List of user IDs to populate the managers-team permission level
                   *
                   *     You can retrieve the user ids by using the “Users” API.
                   * @default null
                   */
                  teamLeadIds: string[] | null;
              } | null;
          } | null;
          /**
           * Id
           * @description Unique numeric identifier of the permission profile (up to 20 digits).
           * @default null
           */
          id: string | null;
          /**
           * Initiatives
           * @description User can view initiatives page.
           * @default null
           */
          initiatives: boolean | null;
          /**
           * InsightsAccess
           * @description Insights access permission.
           * @default null
           */
          insightsAccess: {
              /**
               * PermissionLevel2
               * @description Permission access scope.
               * @default null
               * @enum {string|null}
               */
              permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
              /**
               * Team Lead Ids
               * @description List of user IDs to populate the managers-team permission level
               *
               *     You can retrieve the user ids by using the “Users” API.
               * @default null
               */
              teamLeadIds: string[] | null;
          } | null;
          /**
           * Library
           * @description User can view library pages.
           * @default null
           */
          library: boolean | null;
          /**
           * LibraryFolderAccess
           * @description Library folder access permission.
           * @default null
           */
          libraryFolderAccess: {
              /**
               * Library Folder Ids
               * @description List of library folder Ids, if set, "permissionLevel" must not be "none".
               * @default null
               */
              libraryFolderIds: string[] | null;
              /**
               * Manage Folder Calls
               * @description A user with this profile can add calls to folders, archive calls, if set, "permissionLevel" must not be "none".
               * @default null
               */
              manageFolderCalls: boolean | null;
              /**
               * Manage Public Folder
               * @description A user with this profile can manage public folder, if set, "permissionLevel" must not be "none".
               * @default null
               */
              managePublicFolder: boolean | null;
              /**
               * Manage Streams
               * @description A user with this profile can manage streams, if set, "permissionLevel" must not be "none".
               * @default null
               */
              manageStreams: boolean | null;
              /**
               * PermissionLevel1
               * @description Library folder permission level - mandatory value.
               * @default null
               * @enum {string|null}
               */
              permissionLevel: "none" | "all" | "specific-folders" | "none, all, specific-folders" | null;
              /**
               * Share Folders And Streams
               * @description A user with this profile can share folders and streams from Your Library with other team members, if set, "permissionLevel" must not be "none".
               * @default null
               */
              shareFoldersAndStreams: boolean | null;
          } | null;
          /**
           * Listen In Calls
           * @description User can listen in calls.
           * @default null
           */
          listenInCalls: boolean | null;
          /**
           * Manage General Business Settings
           * @description User can manage general business settings.
           * @default null
           */
          manageGeneralBusinessSettings: boolean | null;
          /**
           * Manage Revenue Analytics
           * @description User can manage revenue analytics.
           * @default null
           */
          manageRevenueAnalytics: boolean | null;
          /**
           * Manage Scorecards
           * @description User can manage scorecards.
           * @default null
           */
          manageScorecards: boolean | null;
          /**
           * Manually Schedule And Upload Calls
           * @description User can manually schedule and upload calls.
           * @default null
           */
          manuallyScheduleAndUploadCalls: boolean | null;
          /**
           * Market
           * @description User can view market page.
           * @default null
           */
          market: boolean | null;
          /**
           * Name
           * @description Permission profile name.
           * @default null
           */
          name: string | null;
          /**
           * Override Score
           * @description User can override someone else score.
           * @default null
           */
          overrideScore: boolean | null;
          /**
           * Private Calls
           * @description User can set their own calls as private.
           * @default null
           */
          privateCalls: boolean | null;
          /**
           * Score Calls
           * @description User can score calls.
           * @default null
           */
          scoreCalls: boolean | null;
          /**
           * Share Calls With Customers
           * @description User can share calls with customers.
           * @default null
           */
          shareCallsWithCustomers: boolean | null;
          /**
           * Team Stats
           * @description User can view team stats page.
           * @default null
           */
          teamStats: boolean | null;
          /**
           * Trim Calls
           * @description User can trim calls.
           * @default null
           */
          trimCalls: boolean | null;
          /**
           * Usage
           * @description User can view usage pages.
           * @default null
           */
          usage: boolean | null;
          /**
           * UsageAccess
           * @description Usage access permission.
           * @default null
           */
          usageAccess: {
              /**
               * PermissionLevel2
               * @description Permission access scope.
               * @default null
               * @enum {string|null}
               */
              permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
              /**
               * Team Lead Ids
               * @description List of user IDs to populate the managers-team permission level
               *
               *     You can retrieve the user ids by using the “Users” API.
               * @default null
               */
              teamLeadIds: string[] | null;
          } | null;
          /**
           * View Engage Analytics Activity
           * @description User can view engage analytics activity page.
           * @default null
           */
          viewEngageAnalyticsActivity: boolean | null;
          /**
           * View Engage Analytics Flows
           * @description User can view engage analytics flows page.
           * @default null
           */
          viewEngageAnalyticsFlows: boolean | null;
          /**
           * View Engage Analytics Performance
           * @description User can view engage analytics performance page.
           * @default null
           */
          viewEngageAnalyticsPerformance: boolean | null;
          /**
           * View Revenue Analytics
           * @description User can view dashboards page.
           * @default null
           */
          viewRevenueAnalytics: boolean | null;
      } | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_DATA_PRIVACY_FOR_PHONE_NUMBER tool input.
 */
type GONG_DATA_PRIVACY_FOR_PHONE_NUMBER_INPUT = {
  /**
   * Phone Number
   * @description The phone number. This number must start with a + (plus) sign followed by the country code, area code, and local phone number. All other non-digits are ignored. The following are examples of permitted phone numbers: +1 425 555 2671, +1-425-555-2671, +1 425 5552671, +14255552671, +1 425 555 26 71, +1(425) 555-2671, etc. Note: This parameter should be URL-encoded.
   */
  phoneNumber?: string;
};

/**
 * Type of GONG's GONG_DATA_PRIVACY_FOR_PHONE_NUMBER tool output.
 */
type GONG_DATA_PRIVACY_FOR_PHONE_NUMBER_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Calls
       * @description Related calls.
       * @default null
       */
      calls: {
          /**
           * External Systems
           * @description A list of links to external systems such as CRM, Telephony System, Case Management, etc.
           * @default null
           */
          externalSystems: {
              /**
               * Objects
               * @description List of objects within the external system.
               * @default null
               */
              objects: {
                  /**
                   * External Id
                   * @description External ID.
                   * @default null
                   */
                  externalId: string | null;
                  /**
                   * ObjectType
                   * @description Object Type.
                   * @default null
                   * @enum {string|null}
                   */
                  objectType: "Conversation" | "Task" | null;
              }[] | null;
              /**
               * System
               * @description External system name.
               * @default null
               * @enum {string|null}
               */
              system: "Salesforce" | "HubSpot" | "MicrosoftDynamic" | "Generic" | null;
          }[] | null;
          /**
           * Id
           * @description Gong's unique numeric identifier for the call (up to 20 digits).
           * @default null
           */
          id: string | null;
          /**
           * Status
           * @description Call status
           * @default null
           */
          status: string | null;
      }[] | null;
      /**
       * Customer Data
       * @description A list of links to data from external systems (such as CRM, Telephony System, Case Management, etc.) that reference the email address and that Gong stores.
       * @default null
       */
      customerData: {
          /**
           * Objects
           * @description List of objects in the external system.
           * @default null
           */
          objects: {
              /**
               * External Id
               * @description External ID.
               * @default null
               */
              externalId: string | null;
              /**
               * Fields
               * @description Object fields.
               * @default null
               */
              fields: {
                  /**
                   * Name
                   * @description Field name. For Account supported fields are: Name, Website, Industry and all the custom fields. For Opportunity supported fields are Name, LeadSource, Type, StageName, Probability, Amount, CloseDate and all the custom fields.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Value
                   * @description Field value
                   * @default null
                   */
                  value: {
                      [key: string]: unknown;
                  } | null;
              }[] | null;
              /**
               * Id
               * @description Gong's unique numeric identifier (up to 20 digits) for the Lead or Contact.
               * @default null
               */
              id: string | null;
              /**
               * Mirror Id
               * @description Crm Mirror ID.
               * @default null
               */
              mirrorId: string | null;
              /**
               * ObjectType1
               * @description Object Type.
               * @default null
               * @enum {string|null}
               */
              objectType: "Lead" | "Contact" | null;
          }[] | null;
          /**
           * System
           * @description External system name.
           * @default null
           * @enum {string|null}
           */
          system: "Salesforce" | "HubSpot" | "MicrosoftDynamic" | "Generic" | null;
      }[] | null;
      /**
       * Email Addresses
       * @description Related email addresses.
       * @default null
       */
      emailAddresses: string[] | null;
      /**
       * Emails
       * @description Related email messages.
       * @default null
       */
      emails: {
          /**
           * From
           * @description The sender's email address.
           * @default null
           */
          from: string | null;
          /**
           * Id
           * @description Gong's unique 32 character identifier for the email message.
           * @default null
           */
          id: string | null;
          /**
           * Mailbox
           * @description The mailbox from which the email was retrieved.
           * @default null
           */
          mailbox: string | null;
          /**
           * Message Hash
           * @description Hash code of the email message.
           * @default null
           */
          messageHash: string | null;
          /**
           * Sent Time
           * @description The date and time the email message was sent in the ISO-8601 format, for example: '2024-01-17T16:20:05-03:00' or '2016-02-16T03:57:04.834+05:30' or '2020-11-20T21:30:07.233692Z', where Z stands for UTC.
           * @default null
           */
          sentTime: string | null;
      }[] | null;
      /**
       * Matching Phone Numbers
       * @description Matching phone numbers found.
       * @default null
       */
      matchingPhoneNumbers: string[] | null;
      /**
       * Meetings
       * @description Related meetings.
       * @default null
       */
      meetings: {
          /**
           * Id
           * @description Gong's unique identifier for the meeting.
           * @default null
           */
          id: string | null;
      }[] | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
      /**
       * Supplied Phone Number
       * @description The supplied phone number.
       * @default null
       */
      suppliedPhoneNumber: string | null;
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
 * Type of GONG's GONG_DELETE_A_GENERIC_CRM_INTEGRATION_V2_CRM_INTEGRATIONS tool input.
 */
type GONG_DELETE_A_GENERIC_CRM_INTEGRATION_V2_CRM_INTEGRATIONS_INPUT = {
  /**
   * Client Request Id
   * @description A unique identifier generated and sent by you to allow troubleshooting. Valid characters are letters, numbers, dashes and underscores.
   */
  clientRequestId?: string;
  /**
   * Integration Id
   * @description The ID of the integration to delete
   */
  integrationId?: number;
};

/**
 * Type of GONG's GONG_DELETE_A_GENERIC_CRM_INTEGRATION_V2_CRM_INTEGRATIONS tool output.
 */
type GONG_DELETE_A_GENERIC_CRM_INTEGRATION_V2_CRM_INTEGRATIONS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Client Request Id
       * @description The clientRequestId sent in the request - used to monitor the request process
       * @default null
       */
      clientRequestId: string | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_DELETE_A_GONG_MEETING_V2_MEETINGS tool input.
 */
type GONG_DELETE_A_GONG_MEETING_V2_MEETINGS_INPUT = {
  /**
   * Meeting Id
   * @description Gong"s unique identifier for the meeting (up to 20 digits).
   */
  meetingId?: number;
  /**
   * Organizer Email
   * @description The email address of the user who created the meeting.
   */
  organizerEmail?: string;
};

/**
 * Type of GONG's GONG_DELETE_A_GONG_MEETING_V2_MEETINGS tool output.
 */
type GONG_DELETE_A_GONG_MEETING_V2_MEETINGS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Organizer Email
       * @description The email address of the user who created the meeting.
       * @default null
       */
      organizerEmail: string | null;
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
 * Type of GONG's GONG_DELETE_USERS_FROM_CALL_ACCESS_LIST tool input.
 */
type GONG_DELETE_USERS_FROM_CALL_ACCESS_LIST_INPUT = {
  /**
   * Call Access List
   * @description A list, in which each item specifies a call and a list of users to be removed from the call.
   */
  callAccessList?: {
      /**
       * Call Id
       * @description Gong"s unique numeric call ID.
       */
      callId: string;
      /**
       * User Ids
       * @description Array of Gong"s unique numeric user IDs.
       */
      userIds: string[];
  }[];
};

/**
 * Type of GONG's GONG_DELETE_USERS_FROM_CALL_ACCESS_LIST tool output.
 */
type GONG_DELETE_USERS_FROM_CALL_ACCESS_LIST_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_ERASE_DATA_FOR_EMAIL_ADDRESS tool input.
 */
type GONG_ERASE_DATA_FOR_EMAIL_ADDRESS_INPUT = {
  /**
   * Email Address
   * @description The email address.
   */
  emailAddress?: string;
};

/**
 * Type of GONG's GONG_ERASE_DATA_FOR_EMAIL_ADDRESS tool output.
 */
type GONG_ERASE_DATA_FOR_EMAIL_ADDRESS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_ERASE_DATA_FOR_PHONE_NUMBER tool input.
 */
type GONG_ERASE_DATA_FOR_PHONE_NUMBER_INPUT = {
  /**
   * Phone Number
   * @description The phone number. This number must start with a + (plus) sign followed by the country code, area code, and local phone number. All other non-digits are ignored. The following are examples of permitted phone numbers: +1 425 555 2671, +1-425-555-2671, +1 425 5552671, +14255552671, +1 425 555 26 71, +1(425) 555-2671, etc. Note: This parameter should be URL-encoded.
   */
  phoneNumber?: string;
};

/**
 * Type of GONG's GONG_ERASE_DATA_FOR_PHONE_NUMBER tool output.
 */
type GONG_ERASE_DATA_FOR_PHONE_NUMBER_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_FETCH_ALL_PERMISSION_PROFILES tool input.
 */
type GONG_FETCH_ALL_PERMISSION_PROFILES_INPUT = {
  /**
   * Workspace Id
   * @description Workspace identifier, the API will return only the profiles belonging to this workspace. You can retrieve the workspace using the "workspaces" (under "Settings") API.
   */
  workspaceId?: string;
};

/**
 * Type of GONG's GONG_FETCH_ALL_PERMISSION_PROFILES tool output.
 */
type GONG_FETCH_ALL_PERMISSION_PROFILES_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Profiles
       * @description A list, in which each item specifies a permission profile.
       * @default null
       */
      profiles: {
          /**
           * Account
           * @description User can view account pages.
           * @default null
           */
          account: boolean | null;
          /**
           * Activity
           * @description User can view activity pages.
           * @default null
           */
          activity: boolean | null;
          /**
           * CallsAccess
           * @description Calls access permission.
           * @default null
           */
          callsAccess: {
              /**
               * PermissionLevel
               * @description Permission access scope.
               * @default null
               * @enum {string|null}
               */
              permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
              /**
               * Team Lead Ids
               * @description List of user IDs to populate the managers-team permission level
               *
               *     You can retrieve the user ids by using the “Users” API.
               * @default null
               */
              teamLeadIds: string[] | null;
          } | null;
          /**
           * Calls And Search
           * @description User can view and search calls.
           * @default null
           */
          callsAndSearch: boolean | null;
          /**
           * Coaching
           * @description User can view coaching pages.
           * @default null
           */
          coaching: boolean | null;
          /**
           * CoachingAccess
           * @description Coaching access permission.
           * @default null
           */
          coachingAccess: {
              /**
               * PermissionLevel2
               * @description Permission access scope.
               * @default null
               * @enum {string|null}
               */
              permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
              /**
               * Team Lead Ids
               * @description List of user IDs to populate the managers-team permission level
               *
               *     You can retrieve the user ids by using the “Users” API.
               * @default null
               */
              teamLeadIds: string[] | null;
          } | null;
          /**
           * Create Edit And Delete Deals Boards
           * @description User can create/edit/delete deals boards.
           * @default null
           */
          createEditAndDeleteDealsBoards: boolean | null;
          /**
           * Crm Data Import
           * @description User can perform import of crm data.
           * @default null
           */
          crmDataImport: boolean | null;
          /**
           * Crm Data Inline Editing
           * @description User can perform inline editing of crm data.
           * @default null
           */
          crmDataInlineEditing: boolean | null;
          /**
           * Deals
           * @description User can view deals pages.
           * @default null
           */
          deals: boolean | null;
          /**
           * DealsAccess
           * @description Deals access permission.
           * @default null
           */
          dealsAccess: {
              /**
               * PermissionLevel2
               * @description Permission access scope.
               * @default null
               * @enum {string|null}
               */
              permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
              /**
               * Team Lead Ids
               * @description List of user IDs to populate the managers-team permission level
               *
               *     You can retrieve the user ids by using the “Users” API.
               * @default null
               */
              teamLeadIds: string[] | null;
          } | null;
          /**
           * Deals Inline Editing
           * @description User can perform inline editing of deals.
           * @default null
           */
          dealsInlineEditing: boolean | null;
          /**
           * Delete Calls
           * @description User can delete calls.
           * @default null
           */
          deleteCalls: boolean | null;
          /**
           * Delete Emails
           * @description User can delete emails.
           * @default null
           */
          deleteEmails: boolean | null;
          /**
           * Description
           * @description Permission profile description.
           * @default null
           */
          description: string | null;
          /**
           * Download Call Media
           * @description User can download call media.
           * @default null
           */
          downloadCallMedia: boolean | null;
          /**
           * EmailsAccess
           * @description Emails access permission.
           * @default null
           */
          emailsAccess: {
              /**
               * PermissionLevel2
               * @description Permission access scope.
               * @default null
               * @enum {string|null}
               */
              permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
              /**
               * Team Lead Ids
               * @description List of user IDs to populate the managers-team permission level
               *
               *     You can retrieve the user ids by using the “Users” API.
               * @default null
               */
              teamLeadIds: string[] | null;
          } | null;
          /**
           * Engage Create And Manage Rulesets
           * @description User can create and manage rulesets.
           * @default null
           */
          engageCreateAndManageRulesets: boolean | null;
          /**
           * Engage Manage Company Sequences
           * @description User can manage company sequences.
           * @default null
           */
          engageManageCompanySequences: boolean | null;
          /**
           * Engage Manage Company Templates
           * @description User can manage company email templates.
           * @default null
           */
          engageManageCompanyTemplates: boolean | null;
          /**
           * Engage Snooze Flow To Dos For Others
           * @description User can snooze flow in to dos for others
           * @default null
           */
          engageSnoozeFlowToDosForOthers: boolean | null;
          /**
           * Export Calls And Coaching Data To Csv
           * @description User can export calls and coaching metrics data to CSV.
           * @default null
           */
          exportCallsAndCoachingDataToCSV: boolean | null;
          /**
           * Forecast
           * @description User can view forecast pages.
           * @default null
           */
          forecast: boolean | null;
          /**
           * Forecast Manage
           * @description User can manage forecast boards and upload targets.
           * @default null
           */
          forecastManage: boolean | null;
          /**
           * ForecastPermissions
           * @description All forecast permissions.
           * @default null
           */
          forecastPermissions: {
              /**
               * ForecastAccess
               * @description User can view forecast submissions.
               * @default null
               */
              forecastAccess: {
                  /**
                   * PermissionLevel2
                   * @description Permission access scope.
                   * @default null
                   * @enum {string|null}
                   */
                  permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
                  /**
                   * Team Lead Ids
                   * @description List of user IDs to populate the managers-team permission level
                   *
                   *     You can retrieve the user ids by using the “Users” API.
                   * @default null
                   */
                  teamLeadIds: string[] | null;
              } | null;
              /**
               * ForecastEditSubmissions
               * @description User can edit forecasts submissions.
               * @default null
               */
              forecastEditSubmissions: {
                  /**
                   * PermissionLevel2
                   * @description Permission access scope.
                   * @default null
                   * @enum {string|null}
                   */
                  permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
                  /**
                   * Team Lead Ids
                   * @description List of user IDs to populate the managers-team permission level
                   *
                   *     You can retrieve the user ids by using the “Users” API.
                   * @default null
                   */
                  teamLeadIds: string[] | null;
              } | null;
              /**
               * ForecastEditTargets
               * @description User can edit forecast Targets.
               * @default null
               */
              forecastEditTargets: {
                  /**
                   * PermissionLevel2
                   * @description Permission access scope.
                   * @default null
                   * @enum {string|null}
                   */
                  permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
                  /**
                   * Team Lead Ids
                   * @description List of user IDs to populate the managers-team permission level
                   *
                   *     You can retrieve the user ids by using the “Users” API.
                   * @default null
                   */
                  teamLeadIds: string[] | null;
              } | null;
          } | null;
          /**
           * Id
           * @description Unique numeric identifier of the permission profile (up to 20 digits).
           * @default null
           */
          id: string | null;
          /**
           * Initiatives
           * @description User can view initiatives page.
           * @default null
           */
          initiatives: boolean | null;
          /**
           * InsightsAccess
           * @description Insights access permission.
           * @default null
           */
          insightsAccess: {
              /**
               * PermissionLevel2
               * @description Permission access scope.
               * @default null
               * @enum {string|null}
               */
              permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
              /**
               * Team Lead Ids
               * @description List of user IDs to populate the managers-team permission level
               *
               *     You can retrieve the user ids by using the “Users” API.
               * @default null
               */
              teamLeadIds: string[] | null;
          } | null;
          /**
           * Library
           * @description User can view library pages.
           * @default null
           */
          library: boolean | null;
          /**
           * LibraryFolderAccess
           * @description Library folder access permission.
           * @default null
           */
          libraryFolderAccess: {
              /**
               * Library Folder Ids
               * @description List of library folder Ids, if set, "permissionLevel" must not be "none".
               * @default null
               */
              libraryFolderIds: string[] | null;
              /**
               * Manage Folder Calls
               * @description A user with this profile can add calls to folders, archive calls, if set, "permissionLevel" must not be "none".
               * @default null
               */
              manageFolderCalls: boolean | null;
              /**
               * Manage Public Folder
               * @description A user with this profile can manage public folder, if set, "permissionLevel" must not be "none".
               * @default null
               */
              managePublicFolder: boolean | null;
              /**
               * Manage Streams
               * @description A user with this profile can manage streams, if set, "permissionLevel" must not be "none".
               * @default null
               */
              manageStreams: boolean | null;
              /**
               * PermissionLevel1
               * @description Library folder permission level - mandatory value.
               * @default null
               * @enum {string|null}
               */
              permissionLevel: "none" | "all" | "specific-folders" | "none, all, specific-folders" | null;
              /**
               * Share Folders And Streams
               * @description A user with this profile can share folders and streams from Your Library with other team members, if set, "permissionLevel" must not be "none".
               * @default null
               */
              shareFoldersAndStreams: boolean | null;
          } | null;
          /**
           * Listen In Calls
           * @description User can listen in calls.
           * @default null
           */
          listenInCalls: boolean | null;
          /**
           * Manage General Business Settings
           * @description User can manage general business settings.
           * @default null
           */
          manageGeneralBusinessSettings: boolean | null;
          /**
           * Manage Revenue Analytics
           * @description User can manage revenue analytics.
           * @default null
           */
          manageRevenueAnalytics: boolean | null;
          /**
           * Manage Scorecards
           * @description User can manage scorecards.
           * @default null
           */
          manageScorecards: boolean | null;
          /**
           * Manually Schedule And Upload Calls
           * @description User can manually schedule and upload calls.
           * @default null
           */
          manuallyScheduleAndUploadCalls: boolean | null;
          /**
           * Market
           * @description User can view market page.
           * @default null
           */
          market: boolean | null;
          /**
           * Name
           * @description Permission profile name.
           * @default null
           */
          name: string | null;
          /**
           * Override Score
           * @description User can override someone else score.
           * @default null
           */
          overrideScore: boolean | null;
          /**
           * Private Calls
           * @description User can set their own calls as private.
           * @default null
           */
          privateCalls: boolean | null;
          /**
           * Score Calls
           * @description User can score calls.
           * @default null
           */
          scoreCalls: boolean | null;
          /**
           * Share Calls With Customers
           * @description User can share calls with customers.
           * @default null
           */
          shareCallsWithCustomers: boolean | null;
          /**
           * Team Stats
           * @description User can view team stats page.
           * @default null
           */
          teamStats: boolean | null;
          /**
           * Trim Calls
           * @description User can trim calls.
           * @default null
           */
          trimCalls: boolean | null;
          /**
           * Usage
           * @description User can view usage pages.
           * @default null
           */
          usage: boolean | null;
          /**
           * UsageAccess
           * @description Usage access permission.
           * @default null
           */
          usageAccess: {
              /**
               * PermissionLevel2
               * @description Permission access scope.
               * @default null
               * @enum {string|null}
               */
              permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
              /**
               * Team Lead Ids
               * @description List of user IDs to populate the managers-team permission level
               *
               *     You can retrieve the user ids by using the “Users” API.
               * @default null
               */
              teamLeadIds: string[] | null;
          } | null;
          /**
           * View Engage Analytics Activity
           * @description User can view engage analytics activity page.
           * @default null
           */
          viewEngageAnalyticsActivity: boolean | null;
          /**
           * View Engage Analytics Flows
           * @description User can view engage analytics flows page.
           * @default null
           */
          viewEngageAnalyticsFlows: boolean | null;
          /**
           * View Engage Analytics Performance
           * @description User can view engage analytics performance page.
           * @default null
           */
          viewEngageAnalyticsPerformance: boolean | null;
          /**
           * View Revenue Analytics
           * @description User can view dashboards page.
           * @default null
           */
          viewRevenueAnalytics: boolean | null;
      }[] | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_GET_CRM_INTEGRATION_DETAILS tool input.
 */
type GONG_GET_CRM_INTEGRATION_DETAILS_INPUT = object;

/**
 * Type of GONG's GONG_GET_CRM_INTEGRATION_DETAILS tool output.
 */
type GONG_GET_CRM_INTEGRATION_DETAILS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Integrations
       * @description A list of integration objects
       * @default null
       */
      integrations: {
          /**
           * Integration Id
           * @description The ID of the integration.<br><b>Note:</b> Parse the integrationId as Long or BigInt. Parsing the integrationId as an Integer truncates the integrationId to trailing zeros and returns an incorrect ID.
           * @default null
           */
          integrationId: number | null;
          /**
           * Name
           * @description The name of the integration
           * @default null
           */
          name: string | null;
          /**
           * Owner Email
           * @description Email address of the person responsible for the integration
           * @default null
           */
          ownerEmail: string | null;
      }[] | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_GET_CRM_OBJECTS_V2_CRM_ENTITIES tool input.
 */
type GONG_GET_CRM_OBJECTS_V2_CRM_ENTITIES_INPUT = {
  /**
   * Integration Id
   * @description Integration ID generated when creating the integration
   */
  integrationId?: number;
  /**
   * Object Type
   * @description Requested objects type
   * @enum {string}
   */
  objectType?: "ACCOUNT" | "CONTACT" | "DEAL" | "LEAD";
  /**
   * Objects Crm Ids
   * @description <b>Request Body:</b> The requested objects crm ids (should be sent in the request body)
   */
  objectsCrmIds?: string[];
};

/**
 * Type of GONG's GONG_GET_CRM_OBJECTS_V2_CRM_ENTITIES tool output.
 */
type GONG_GET_CRM_OBJECTS_V2_CRM_ENTITIES_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Crm Objects Map
       * @description crmObjects
       * @default null
       */
      crmObjectsMap: {
          [key: string]: {
              [key: string]: {
                  [key: string]: unknown;
              };
          };
      } | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_GET_PERMISSION_PROFILE tool input.
 */
type GONG_GET_PERMISSION_PROFILE_INPUT = {
  /**
   * Profile Id
   * @description Permission profile identifier.
   */
  profileId?: string;
};

/**
 * Type of GONG's GONG_GET_PERMISSION_PROFILE tool output.
 */
type GONG_GET_PERMISSION_PROFILE_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Profile
       * @description Permission profile
       * @default null
       */
      profile: {
          /**
           * Account
           * @description User can view account pages.
           * @default null
           */
          account: boolean | null;
          /**
           * Activity
           * @description User can view activity pages.
           * @default null
           */
          activity: boolean | null;
          /**
           * CallsAccess
           * @description Calls access permission.
           * @default null
           */
          callsAccess: {
              /**
               * PermissionLevel
               * @description Permission access scope.
               * @default null
               * @enum {string|null}
               */
              permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
              /**
               * Team Lead Ids
               * @description List of user IDs to populate the managers-team permission level
               *
               *     You can retrieve the user ids by using the “Users” API.
               * @default null
               */
              teamLeadIds: string[] | null;
          } | null;
          /**
           * Calls And Search
           * @description User can view and search calls.
           * @default null
           */
          callsAndSearch: boolean | null;
          /**
           * Coaching
           * @description User can view coaching pages.
           * @default null
           */
          coaching: boolean | null;
          /**
           * CoachingAccess
           * @description Coaching access permission.
           * @default null
           */
          coachingAccess: {
              /**
               * PermissionLevel2
               * @description Permission access scope.
               * @default null
               * @enum {string|null}
               */
              permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
              /**
               * Team Lead Ids
               * @description List of user IDs to populate the managers-team permission level
               *
               *     You can retrieve the user ids by using the “Users” API.
               * @default null
               */
              teamLeadIds: string[] | null;
          } | null;
          /**
           * Create Edit And Delete Deals Boards
           * @description User can create/edit/delete deals boards.
           * @default null
           */
          createEditAndDeleteDealsBoards: boolean | null;
          /**
           * Crm Data Import
           * @description User can perform import of crm data.
           * @default null
           */
          crmDataImport: boolean | null;
          /**
           * Crm Data Inline Editing
           * @description User can perform inline editing of crm data.
           * @default null
           */
          crmDataInlineEditing: boolean | null;
          /**
           * Deals
           * @description User can view deals pages.
           * @default null
           */
          deals: boolean | null;
          /**
           * DealsAccess
           * @description Deals access permission.
           * @default null
           */
          dealsAccess: {
              /**
               * PermissionLevel2
               * @description Permission access scope.
               * @default null
               * @enum {string|null}
               */
              permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
              /**
               * Team Lead Ids
               * @description List of user IDs to populate the managers-team permission level
               *
               *     You can retrieve the user ids by using the “Users” API.
               * @default null
               */
              teamLeadIds: string[] | null;
          } | null;
          /**
           * Deals Inline Editing
           * @description User can perform inline editing of deals.
           * @default null
           */
          dealsInlineEditing: boolean | null;
          /**
           * Delete Calls
           * @description User can delete calls.
           * @default null
           */
          deleteCalls: boolean | null;
          /**
           * Delete Emails
           * @description User can delete emails.
           * @default null
           */
          deleteEmails: boolean | null;
          /**
           * Description
           * @description Permission profile description.
           * @default null
           */
          description: string | null;
          /**
           * Download Call Media
           * @description User can download call media.
           * @default null
           */
          downloadCallMedia: boolean | null;
          /**
           * EmailsAccess
           * @description Emails access permission.
           * @default null
           */
          emailsAccess: {
              /**
               * PermissionLevel2
               * @description Permission access scope.
               * @default null
               * @enum {string|null}
               */
              permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
              /**
               * Team Lead Ids
               * @description List of user IDs to populate the managers-team permission level
               *
               *     You can retrieve the user ids by using the “Users” API.
               * @default null
               */
              teamLeadIds: string[] | null;
          } | null;
          /**
           * Engage Create And Manage Rulesets
           * @description User can create and manage rulesets.
           * @default null
           */
          engageCreateAndManageRulesets: boolean | null;
          /**
           * Engage Manage Company Sequences
           * @description User can manage company sequences.
           * @default null
           */
          engageManageCompanySequences: boolean | null;
          /**
           * Engage Manage Company Templates
           * @description User can manage company email templates.
           * @default null
           */
          engageManageCompanyTemplates: boolean | null;
          /**
           * Engage Snooze Flow To Dos For Others
           * @description User can snooze flow in to dos for others
           * @default null
           */
          engageSnoozeFlowToDosForOthers: boolean | null;
          /**
           * Export Calls And Coaching Data To Csv
           * @description User can export calls and coaching metrics data to CSV.
           * @default null
           */
          exportCallsAndCoachingDataToCSV: boolean | null;
          /**
           * Forecast
           * @description User can view forecast pages.
           * @default null
           */
          forecast: boolean | null;
          /**
           * Forecast Manage
           * @description User can manage forecast boards and upload targets.
           * @default null
           */
          forecastManage: boolean | null;
          /**
           * ForecastPermissions
           * @description All forecast permissions.
           * @default null
           */
          forecastPermissions: {
              /**
               * ForecastAccess
               * @description User can view forecast submissions.
               * @default null
               */
              forecastAccess: {
                  /**
                   * PermissionLevel2
                   * @description Permission access scope.
                   * @default null
                   * @enum {string|null}
                   */
                  permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
                  /**
                   * Team Lead Ids
                   * @description List of user IDs to populate the managers-team permission level
                   *
                   *     You can retrieve the user ids by using the “Users” API.
                   * @default null
                   */
                  teamLeadIds: string[] | null;
              } | null;
              /**
               * ForecastEditSubmissions
               * @description User can edit forecasts submissions.
               * @default null
               */
              forecastEditSubmissions: {
                  /**
                   * PermissionLevel2
                   * @description Permission access scope.
                   * @default null
                   * @enum {string|null}
                   */
                  permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
                  /**
                   * Team Lead Ids
                   * @description List of user IDs to populate the managers-team permission level
                   *
                   *     You can retrieve the user ids by using the “Users” API.
                   * @default null
                   */
                  teamLeadIds: string[] | null;
              } | null;
              /**
               * ForecastEditTargets
               * @description User can edit forecast Targets.
               * @default null
               */
              forecastEditTargets: {
                  /**
                   * PermissionLevel2
                   * @description Permission access scope.
                   * @default null
                   * @enum {string|null}
                   */
                  permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
                  /**
                   * Team Lead Ids
                   * @description List of user IDs to populate the managers-team permission level
                   *
                   *     You can retrieve the user ids by using the “Users” API.
                   * @default null
                   */
                  teamLeadIds: string[] | null;
              } | null;
          } | null;
          /**
           * Id
           * @description Unique numeric identifier of the permission profile (up to 20 digits).
           * @default null
           */
          id: string | null;
          /**
           * Initiatives
           * @description User can view initiatives page.
           * @default null
           */
          initiatives: boolean | null;
          /**
           * InsightsAccess
           * @description Insights access permission.
           * @default null
           */
          insightsAccess: {
              /**
               * PermissionLevel2
               * @description Permission access scope.
               * @default null
               * @enum {string|null}
               */
              permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
              /**
               * Team Lead Ids
               * @description List of user IDs to populate the managers-team permission level
               *
               *     You can retrieve the user ids by using the “Users” API.
               * @default null
               */
              teamLeadIds: string[] | null;
          } | null;
          /**
           * Library
           * @description User can view library pages.
           * @default null
           */
          library: boolean | null;
          /**
           * LibraryFolderAccess
           * @description Library folder access permission.
           * @default null
           */
          libraryFolderAccess: {
              /**
               * Library Folder Ids
               * @description List of library folder Ids, if set, "permissionLevel" must not be "none".
               * @default null
               */
              libraryFolderIds: string[] | null;
              /**
               * Manage Folder Calls
               * @description A user with this profile can add calls to folders, archive calls, if set, "permissionLevel" must not be "none".
               * @default null
               */
              manageFolderCalls: boolean | null;
              /**
               * Manage Public Folder
               * @description A user with this profile can manage public folder, if set, "permissionLevel" must not be "none".
               * @default null
               */
              managePublicFolder: boolean | null;
              /**
               * Manage Streams
               * @description A user with this profile can manage streams, if set, "permissionLevel" must not be "none".
               * @default null
               */
              manageStreams: boolean | null;
              /**
               * PermissionLevel1
               * @description Library folder permission level - mandatory value.
               * @default null
               * @enum {string|null}
               */
              permissionLevel: "none" | "all" | "specific-folders" | "none, all, specific-folders" | null;
              /**
               * Share Folders And Streams
               * @description A user with this profile can share folders and streams from Your Library with other team members, if set, "permissionLevel" must not be "none".
               * @default null
               */
              shareFoldersAndStreams: boolean | null;
          } | null;
          /**
           * Listen In Calls
           * @description User can listen in calls.
           * @default null
           */
          listenInCalls: boolean | null;
          /**
           * Manage General Business Settings
           * @description User can manage general business settings.
           * @default null
           */
          manageGeneralBusinessSettings: boolean | null;
          /**
           * Manage Revenue Analytics
           * @description User can manage revenue analytics.
           * @default null
           */
          manageRevenueAnalytics: boolean | null;
          /**
           * Manage Scorecards
           * @description User can manage scorecards.
           * @default null
           */
          manageScorecards: boolean | null;
          /**
           * Manually Schedule And Upload Calls
           * @description User can manually schedule and upload calls.
           * @default null
           */
          manuallyScheduleAndUploadCalls: boolean | null;
          /**
           * Market
           * @description User can view market page.
           * @default null
           */
          market: boolean | null;
          /**
           * Name
           * @description Permission profile name.
           * @default null
           */
          name: string | null;
          /**
           * Override Score
           * @description User can override someone else score.
           * @default null
           */
          overrideScore: boolean | null;
          /**
           * Private Calls
           * @description User can set their own calls as private.
           * @default null
           */
          privateCalls: boolean | null;
          /**
           * Score Calls
           * @description User can score calls.
           * @default null
           */
          scoreCalls: boolean | null;
          /**
           * Share Calls With Customers
           * @description User can share calls with customers.
           * @default null
           */
          shareCallsWithCustomers: boolean | null;
          /**
           * Team Stats
           * @description User can view team stats page.
           * @default null
           */
          teamStats: boolean | null;
          /**
           * Trim Calls
           * @description User can trim calls.
           * @default null
           */
          trimCalls: boolean | null;
          /**
           * Usage
           * @description User can view usage pages.
           * @default null
           */
          usage: boolean | null;
          /**
           * UsageAccess
           * @description Usage access permission.
           * @default null
           */
          usageAccess: {
              /**
               * PermissionLevel2
               * @description Permission access scope.
               * @default null
               * @enum {string|null}
               */
              permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
              /**
               * Team Lead Ids
               * @description List of user IDs to populate the managers-team permission level
               *
               *     You can retrieve the user ids by using the “Users” API.
               * @default null
               */
              teamLeadIds: string[] | null;
          } | null;
          /**
           * View Engage Analytics Activity
           * @description User can view engage analytics activity page.
           * @default null
           */
          viewEngageAnalyticsActivity: boolean | null;
          /**
           * View Engage Analytics Flows
           * @description User can view engage analytics flows page.
           * @default null
           */
          viewEngageAnalyticsFlows: boolean | null;
          /**
           * View Engage Analytics Performance
           * @description User can view engage analytics performance page.
           * @default null
           */
          viewEngageAnalyticsPerformance: boolean | null;
          /**
           * View Revenue Analytics
           * @description User can view dashboards page.
           * @default null
           */
          viewRevenueAnalytics: boolean | null;
      } | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_GET_REQUEST_STATUS_V2_CRM_REQUEST_STATUS tool input.
 */
type GONG_GET_REQUEST_STATUS_V2_CRM_REQUEST_STATUS_INPUT = {
  /**
   * Client Request Id
   * @description The client request ID used in the asynchronous endpoint you want to get a status for
   */
  clientRequestId?: string;
  /**
   * Integration Id
   * @description Integration ID generated when creating the integration
   */
  integrationId?: number;
};

/**
 * Type of GONG's GONG_GET_REQUEST_STATUS_V2_CRM_REQUEST_STATUS tool output.
 */
type GONG_GET_REQUEST_STATUS_V2_CRM_REQUEST_STATUS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Errors
       * @default null
       */
      errors: {
          /**
           * Description
           * @description Error description
           * @default null
           */
          description: string | null;
          /**
           * Line
           * @description Line number of failed object
           * @default null
           */
          line: number | null;
      }[] | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
      /**
       * Status
       * @description Request status
       * @default null
       * @enum {string|null}
       */
      status: "PENDING" | "IN_PROGRESS" | "DONE" | "FAILED" | null;
      /**
       * Total Error Count
       * @description Number of objects that failed parsing
       * @default null
       */
      totalErrorCount: number | null;
      /**
       * Total Success Count
       * @description Number of valid objects
       * @default null
       */
      totalSuccessCount: number | null;
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
 * Type of GONG's GONG_LIST_ALL_COACHING_METRICS_V2_COACHING tool input.
 */
type GONG_LIST_ALL_COACHING_METRICS_V2_COACHING_INPUT = {
  /**
   * From
   * @description Association time filter - only the associations made after that time will be listed. The time is in the ISO-8601 format (e.g., "2018-02-18T02:30:00-07:00" or "2018-02-18T08:00:00Z", where Z stands for UTC); if not specified all association events will be listed.
   */
  from?: string;
  /**
   * Manager  Id
   * @description Manager Id
   */
  manager__id?: number;
  /**
   * To
   * @description Association time filter - only the associations made after that time will be listed. The time is in the ISO-8601 format (e.g., "2018-02-18T02:30:00-07:00" or "2018-02-18T08:00:00Z", where Z stands for UTC); if not specified all association events will be listed.
   */
  to?: string;
  /**
   * Workspace  Id
   * @description Workspace Id
   */
  workspace__id?: number;
};

/**
 * Type of GONG's GONG_LIST_ALL_COACHING_METRICS_V2_COACHING tool output.
 */
type GONG_LIST_ALL_COACHING_METRICS_V2_COACHING_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Coaching Data
       * @description A list, in which each item specifies one managers coaching data
       * @default null
       */
      coachingData: {
          /**
           * Direct Reports Metrics
           * @default null
           */
          directReportsMetrics: {
              /**
               * Metrics
               * @default null
               */
              metrics: {
                  [key: string]: string[];
              } | null;
              /**
               * Report
               * @default null
               */
              report: {
                  /**
                   * Email Address
                   * @description The email address of the Gong user.
                   * @default null
                   */
                  emailAddress: string | null;
                  /**
                   * First Name
                   * @description The first name of the Gong user.
                   * @default null
                   */
                  firstName: string | null;
                  /**
                   * Id
                   * @description Gong's unique numeric identifier for the user (up to 20 digits).
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Last Name
                   * @description The last name of the Gong user.
                   * @default null
                   */
                  lastName: string | null;
                  /**
                   * Title
                   * @description The job title of the Gong user.
                   * @default null
                   */
                  title: string | null;
              } | null;
          }[] | null;
          /**
           * Manager
           * @default null
           */
          manager: {
              /**
               * Email Address
               * @description The email address of the Gong user.
               * @default null
               */
              emailAddress: string | null;
              /**
               * First Name
               * @description The first name of the Gong user.
               * @default null
               */
              firstName: string | null;
              /**
               * Id
               * @description Gong's unique numeric identifier for the user (up to 20 digits).
               * @default null
               */
              id: string | null;
              /**
               * Last Name
               * @description The last name of the Gong user.
               * @default null
               */
              lastName: string | null;
              /**
               * Title
               * @description The job title of the Gong user.
               * @default null
               */
              title: string | null;
          } | null;
      }[] | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_LIST_ALL_COMPANY_WORKSPACES_V2_WORKSPACES tool input.
 */
type GONG_LIST_ALL_COMPANY_WORKSPACES_V2_WORKSPACES_INPUT = object;

/**
 * Type of GONG's GONG_LIST_ALL_COMPANY_WORKSPACES_V2_WORKSPACES tool output.
 */
type GONG_LIST_ALL_COMPANY_WORKSPACES_V2_WORKSPACES_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
      /**
       * Workspaces
       * @description A list, in which each item provides a workspace metadata.
       * @default null
       */
      workspaces: {
          /**
           * Description
           * @description The description of the workspace.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Gong's unique numeric identifier for the workspace (up to 20 digits).
           * @default null
           */
          id: string | null;
          /**
           * Name
           * @description The name of the workspace.
           * @default null
           */
          name: string | null;
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
 * Type of GONG's GONG_LIST_ALL_USERS_V2_USERS tool input.
 */
type GONG_LIST_ALL_USERS_V2_USERS_INPUT = {
  /**
   * Cursor
   * @description When paging is needed, provide the value supplied by the previous API call to bring the following page of records.
   */
  cursor?: string;
  /**
   * Include Avatars
   * @description Avatars are synthetic users representing Gong employees (CSMs and support providers) when they access your instance. References to avatars" IDs may be found in the outputs of other API endpoints. This parameter is optional, if not provided avatars will not be included in the results.
   */
  includeAvatars?: boolean;
};

/**
 * Type of GONG's GONG_LIST_ALL_USERS_V2_USERS tool output.
 */
type GONG_LIST_ALL_USERS_V2_USERS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Records
       * @description Information about the number of records that match the requested filter.
       * @default null
       */
      records: {
          /**
           * Current Page Number
           * @description Current page number.
           * @default null
           */
          currentPageNumber: number | null;
          /**
           * Current Page Size
           * @description Number of records in the current page.
           * @default null
           */
          currentPageSize: number | null;
          /**
           * Cursor
           * @description Returned only when there are more records to be retrieved. Repeat the API call and pass this cursor value in the request to retrieve the next page of records.
           * @default null
           */
          cursor: string | null;
          /**
           * Total Records
           * @description Total number of records.
           * @default null
           */
          totalRecords: number | null;
      } | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
      /**
       * Users
       * @description A list, in which each item specifies one user's metadata.
       * @default null
       */
      users: {
          /**
           * Active
           * @description True if the user is active, false if not.
           * @default null
           */
          active: boolean | null;
          /**
           * Created
           * @description Creation time in the ISO-8601 format (e.g., '2018-02-18T02:30:00-07:00' or '2018-02-18T08:00:00Z', where Z stands for UTC);of the Gong user.
           * @default null
           */
          created: string | null;
          /**
           * Email Address
           * @description The email address of the Gong user.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Email Aliases
           * @description List of email address aliases of the Gong user.
           * @default null
           */
          emailAliases: string[] | null;
          /**
           * Extension
           * @description The extension number of the Gong user.
           * @default null
           */
          extension: string | null;
          /**
           * First Name
           * @description The first name of the Gong user.
           * @default null
           */
          firstName: string | null;
          /**
           * Id
           * @description Gong's unique numeric identifier for the user (up to 20 digits).
           * @default null
           */
          id: string | null;
          /**
           * Last Name
           * @description The last name of the Gong user.
           * @default null
           */
          lastName: string | null;
          /**
           * Manager Id
           * @description The manager ID of the Gong user.
           * @default null
           */
          managerId: string | null;
          /**
           * Meeting Consent Page Url
           * @description The Gong recording consent meeting link
           * @default null
           */
          meetingConsentPageUrl: string | null;
          /**
           * Personal Meeting Urls
           * @description The list of personal meeting URLs of the Gong user.
           * @default null
           */
          personalMeetingUrls: string[] | null;
          /**
           * Phone Number
           * @description The phone number of the Gong user.
           * @default null
           */
          phoneNumber: string | null;
          /**
           * Settings
           * @description The user's settings in the Gong system.
           * @default null
           */
          settings: {
              /**
               * Emails Imported
               * @description True if the team member is set to import emails by Gong, false if not.
               * @default null
               */
              emailsImported: boolean | null;
              /**
               * Gong Connect Enabled
               * @description True if the team member has Gong Connect enabled, false if not.
               * @default null
               */
              gongConnectEnabled: boolean | null;
              /**
               * Non Recorded Meetings Imported
               * @description True if the team member is set to import non recorded meetings by Gong, false if not.
               * @default null
               */
              nonRecordedMeetingsImported: boolean | null;
              /**
               * Prevent Email Import
               * @description True if the team member is set to prevent import of emails by Gong, false if not.
               * @default null
               */
              preventEmailImport: boolean | null;
              /**
               * Prevent Web Conference Recording
               * @description If true, invitation of this user to a web conference will prevent its recording (even if other users invited are set to record).
               * @default null
               */
              preventWebConferenceRecording: boolean | null;
              /**
               * Telephony Calls Imported
               * @description True if the team member is set to import telephony calls from by Gong, false if not.
               * @default null
               */
              telephonyCallsImported: boolean | null;
              /**
               * Web Conferences Recorded
               * @description True if the team member is set to be recorded by Gong, false if not.
               * @default null
               */
              webConferencesRecorded: boolean | null;
          } | null;
          /**
           * Spoken Languages
           * @default null
           */
          spokenLanguages: {
              /**
               * Language
               * @description Language spoken by the user encoded according to the BCP-47 standard.
               * @default null
               */
              language: string | null;
              /**
               * Primary
               * @description Indicates the primary language (one per user). The language will be assumed when the system cannot identify the language of a call, e.g., due to poor quality or the call being too short.
               * @default null
               */
              primary: boolean | null;
          }[] | null;
          /**
           * Title
           * @description The job title of the Gong user.
           * @default null
           */
          title: string | null;
          /**
           * Trusted Email Address
           * @description The trusted authentication email assigned to the Gong user
           * @default null
           */
          trustedEmailAddress: string | null;
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
 * Type of GONG's GONG_LIST_FLOWS_FOR_CRM_PROSPECTS tool input.
 */
type GONG_LIST_FLOWS_FOR_CRM_PROSPECTS_INPUT = {
  /**
   * Crm Prospects Ids
   * @description The CRM IDs of the prospects to list assigned flows for
   */
  crmProspectsIds?: string[];
};

/**
 * Type of GONG's GONG_LIST_FLOWS_FOR_CRM_PROSPECTS tool output.
 */
type GONG_LIST_FLOWS_FOR_CRM_PROSPECTS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Prospects Assigned
       * @description The flow instances assigned to the given prospects
       * @default null
       */
      prospectsAssigned: {
          /**
           * Crm Prospect Id
           * @description The CRM ID of the prospect that was assigned to a Gong Engage flow.
           * @default null
           */
          crmProspectId: string | null;
          /**
           * Exclusive
           * @description Indicates whether a prospect in this flow can be added to other flows
           * @default null
           */
          exclusive: boolean | null;
          /**
           * Flow Id
           * @description The Gong Engage Flow ID the prospect was assigned to.
           * @default null
           */
          flowId: string | null;
          /**
           * Flow Instance Create Date
           * @description The creation date of the flow instance in the ISO-8601 format, for example: '2024-01-17T16:20:05-03:00' or '2016-02-16T03:57:04.834+05:30' or '2020-11-20T21:30:07.233692Z', where Z stands for UTC.
           * @default null
           */
          flowInstanceCreateDate: string | null;
          /**
           * Flow Instance Id
           * @description The newly created flow instance id.
           * @default null
           */
          flowInstanceId: string | null;
          /**
           * Flow Instance Owner Email
           * @description The email address of the Gong user who owns the flow instance tasks.
           * @default null
           */
          flowInstanceOwnerEmail: string | null;
          /**
           * Flow Instance Owner Full Name
           * @description The full name of the Gong user who owns the flow instance tasks.
           *
           * @default null
           */
          flowInstanceOwnerFullName: string | null;
          /**
           * FlowInstanceStatus
           * @description The status of the flow instance.
           * @default null
           * @enum {string|null}
           */
          flowInstanceStatus: "Running" | "Pending" | "Paused" | null;
          /**
           * Flow Name
           * @description The Gong Engage Flow name the prospect was assigned to.
           * @default null
           */
          flowName: string | null;
          /**
           * Workspace Id
           * @description The workspace ID this flow belongs to.
           * @default null
           */
          workspaceId: string | null;
      }[] | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_LIST_FOLDER_CALLS tool input.
 */
type GONG_LIST_FOLDER_CALLS_INPUT = {
  /**
   * Folder Id
   * @description Gong"s unique numeric identifier for the folder (up to 20 digits).
   */
  folderId?: string;
};

/**
 * Type of GONG's GONG_LIST_FOLDER_CALLS tool output.
 */
type GONG_LIST_FOLDER_CALLS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Calls
       * @description A list, in which each item represents one library call.
       * @default null
       */
      calls: {
          /**
           * Added By
           * @description Gong's unique numeric identifier for the user who added the call to folder.
           * @default null
           */
          addedBy: string | null;
          /**
           * Created
           * Format: date-time
           * @description The date and time when the call was added to folder in the ISO-8601 format (e.g., '2020-01-12T14:30:00-08:00').
           * @default null
           */
          created: string | null;
          /**
           * Id
           * @description Gong's unique numeric identifier of a call (up to 20 digits).
           * @default null
           */
          id: string | null;
          /**
           * Note
           * @description A note attached to the call in the folder. The note is optional.
           * @default null
           */
          note: string | null;
          /**
           * Snippet
           * @description Snippet of call
           * @default null
           */
          snippet: {
              /**
               * From Sec
               * @description Call snippet start in seconds relative to the call start time. For example 305 is a snippet that starts after 5 minutes and 5 seconds after the beginning of the call.
               * @default null
               */
              fromSec: number | null;
              /**
               * To Sec
               * @description Call snippet end in seconds relative to the call start time. For example 900 means that this snippet ends after exactly 15 minutes after the beginning of the call.
               * @default null
               */
              toSec: number | null;
          } | null;
          /**
           * Title
           * @description The title of the call.
           * @default null
           */
          title: string | null;
          /**
           * Url
           * @description URL of the call.
           * @default null
           */
          url: string | null;
      }[] | null;
      /**
       * Created By
       * @description Gong's unique numeric identifier for the user who added the folder.
       * @default null
       */
      createdBy: string | null;
      /**
       * Id
       * @description Gong's unique numeric identifier for a library's folder (up to 20 digits).
       * @default null
       */
      id: string | null;
      /**
       * Name
       * @description Display name of the folder.
       * @default null
       */
      name: string | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
      /**
       * Updated
       * Format: date-time
       * @description Folder's last update time in the ISO-8601 format (e.g., '2020-03-14T05:30:00-08:00').
       * @default null
       */
      updated: string | null;
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
 * Type of GONG's GONG_LIST_GONG_ENGAGE_FLOWS_V2_FLOWS tool input.
 */
type GONG_LIST_GONG_ENGAGE_FLOWS_V2_FLOWS_INPUT = {
  /**
   * Cursor
   * @description When paging is needed, provide the value supplied by the previous API call to bring the following page of records.
   */
  cursor?: string;
  /**
   * Flow Owner Email
   * @description Email of the Gong user whose personal flows and flows shared with the user you want to return.
   */
  flowOwnerEmail?: string;
  /**
   * Workspace Id
   * @description Optional Workspace identifier, if supplied the API will return only the flows belonging to this workspace.
   */
  workspaceId?: string;
};

/**
 * Type of GONG's GONG_LIST_GONG_ENGAGE_FLOWS_V2_FLOWS tool output.
 */
type GONG_LIST_GONG_ENGAGE_FLOWS_V2_FLOWS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Flows
       * @description A list, in which each item specifies one Flow.
       * @default null
       */
      flows: {
          /**
           * Creation Date
           * @description Creation time of the flow in ISO-8601 format (e.g., '2018-02-18T02:30:00-07:00' or '2018-02-18T08:00:00Z', where Z stands for UTC).
           * @default null
           */
          creationDate: string | null;
          /**
           * Exclusive
           * @description indicates whether a prospect in this flow can be added to other flows
           * @default null
           */
          exclusive: boolean | null;
          /**
           * Folder Id
           * @description The id of the folder this flow is under
           * @default null
           */
          folderId: string | null;
          /**
           * Folder Name
           * @description The name of the folder this flow is under
           * @default null
           */
          folderName: string | null;
          /**
           * Id
           * @description The id of the flow
           * @default null
           */
          id: string | null;
          /**
           * Name
           * @description The name of the flow
           * @default null
           */
          name: string | null;
          /**
           * Visibility
           * @description The flow visibility type
           * @default null
           * @enum {string|null}
           */
          visibility: "Company" | "Personal" | "Shared" | null;
      }[] | null;
      /**
       * Records
       * @description Information about the number of records that match the requested filter.
       * @default null
       */
      records: {
          /**
           * Current Page Number
           * @description Current page number.
           * @default null
           */
          currentPageNumber: number | null;
          /**
           * Current Page Size
           * @description Number of records in the current page.
           * @default null
           */
          currentPageSize: number | null;
          /**
           * Cursor
           * @description Returned only when there are more records to be retrieved. Repeat the API call and pass this cursor value in the request to retrieve the next page of records.
           * @default null
           */
          cursor: string | null;
          /**
           * Total Records
           * @description Total number of records.
           * @default null
           */
          totalRecords: number | null;
      } | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_LIST_SCHEMA_FIELDS_V2_CRM_ENTITY_SCHEMA tool input.
 */
type GONG_LIST_SCHEMA_FIELDS_V2_CRM_ENTITY_SCHEMA_INPUT = {
  /**
   * Integration Id
   * @description Integration ID generated when creating the integration
   */
  integrationId?: number;
  /**
   * Object Type
   * @description Type of object to retrieve the schema fields for (case-sensitive). <br>Omitting this parameter returns the schema for all object types.
   * @enum {string}
   */
  objectType?: "ACCOUNT" | "CONTACT" | "DEAL" | "LEAD";
};

/**
 * Type of GONG's GONG_LIST_SCHEMA_FIELDS_V2_CRM_ENTITY_SCHEMA tool output.
 */
type GONG_LIST_SCHEMA_FIELDS_V2_CRM_ENTITY_SCHEMA_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Object Type To Selected Fields
       * @description selectedFields
       * @default null
       */
      objectTypeToSelectedFields: {
          [key: string]: {
              /**
               * Isdeleted
               * @description When true, deletes the field from the schema and its value is removed from all objects. Use with caution
               * @default null
               */
              isDeleted: boolean | null;
              /**
               * Label
               * @description The label to use in the UI for this field
               */
              label: string;
              /**
               * Lastmodified
               * @description The date and time the schema was last modified. <br>Valid format: ISO-8601 format without milliseconds e.g., "2020-12-17T13:45:01Z"
               * @default null
               */
              lastModified: string | null;
              /**
               * Orderedvaluelist
               * @description The list of values for the field. Required for PICKLIST fields
               * @default null
               */
              orderedValueList: string[] | null;
              /**
               * Referenceto
               * @description The object type this field refers to. Required for field of type REFERENCE. Must be one of "ACCOUNT", "CONTACT", "DEAL", "LEAD" or "USER"
               * @default null
               */
              referenceTo: string | null;
              /**
               * Type
               * @description The field type (case-sensitive). Must be one of the types listed above.
               * @enum {string}
               */
              type: "DATE" | "DATETIME" | "NUMBER" | "PERCENT" | "CURRENCY" | "ID" | "URL" | "STRING" | "BOOLEAN" | "PHONENUMBER" | "EMAILADDRESS" | "PICKLIST" | "REFERENCE" | "STRINGARRAY";
              /**
               * Uniquename
               * @description The unique name of the field in the CRM system
               */
              uniqueName: string;
          }[];
      } | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_LIST_USERS_BY_FILTER_V2_USERS_EXTENSIVE tool input.
 */
type GONG_LIST_USERS_BY_FILTER_V2_USERS_EXTENSIVE_INPUT = {
  /**
   * Cursor
   * @description When paging is needed, provide the value supplied by the previous API call to bring the following page of records.
   */
  cursor?: string;
  /**
   * Filter  Created From Date Time
   * @description An optional user creation time lower limit, if supplied the API will return only the users created at or after this time. The filed is in the ISO-8601 format (e.g., "2018-02-18T02:30:00-07:00" or "2018-02-18T08:00:00Z", where Z stands for UTC).
   */
  filter__createdFromDateTime?: string;
  /**
   * Filter  Created To Date Time
   * @description An optional user creation time upper limit, if supplied the API will return only the users created before this time. The filed is in the ISO-8601 format (e.g., "2018-02-18T02:30:00-07:00" or "2018-02-18T08:00:00Z", where Z stands for UTC).
   */
  filter__createdToDateTime?: string;
  /**
   * Filter  Include Avatars
   * @description Avatars are synthetic users representing Gong employees (CSMs and support providers) when they access your instance. References to avatars" IDs may be found in the outputs of other API endpoints. This parameter is optional, if not provided avatars will not be included in the results.
   */
  filter__includeAvatars?: boolean;
  /**
   * Filter  User Ids
   * @description Set of Gong"s unique numeric identifiers for the users (up to 20 digits).
   */
  filter__userIds?: string[];
};

/**
 * Type of GONG's GONG_LIST_USERS_BY_FILTER_V2_USERS_EXTENSIVE tool output.
 */
type GONG_LIST_USERS_BY_FILTER_V2_USERS_EXTENSIVE_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Records
       * @description Information about the number of records that match the requested filter.
       * @default null
       */
      records: {
          /**
           * Current Page Number
           * @description Current page number.
           * @default null
           */
          currentPageNumber: number | null;
          /**
           * Current Page Size
           * @description Number of records in the current page.
           * @default null
           */
          currentPageSize: number | null;
          /**
           * Cursor
           * @description Returned only when there are more records to be retrieved. Repeat the API call and pass this cursor value in the request to retrieve the next page of records.
           * @default null
           */
          cursor: string | null;
          /**
           * Total Records
           * @description Total number of records.
           * @default null
           */
          totalRecords: number | null;
      } | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
      /**
       * Users
       * @description A list, in which each item specifies one user's metadata.
       * @default null
       */
      users: {
          /**
           * Active
           * @description True if the user is active, false if not.
           * @default null
           */
          active: boolean | null;
          /**
           * Created
           * @description Creation time in the ISO-8601 format (e.g., '2018-02-18T02:30:00-07:00' or '2018-02-18T08:00:00Z', where Z stands for UTC);of the Gong user.
           * @default null
           */
          created: string | null;
          /**
           * Email Address
           * @description The email address of the Gong user.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Email Aliases
           * @description List of email address aliases of the Gong user.
           * @default null
           */
          emailAliases: string[] | null;
          /**
           * Extension
           * @description The extension number of the Gong user.
           * @default null
           */
          extension: string | null;
          /**
           * First Name
           * @description The first name of the Gong user.
           * @default null
           */
          firstName: string | null;
          /**
           * Id
           * @description Gong's unique numeric identifier for the user (up to 20 digits).
           * @default null
           */
          id: string | null;
          /**
           * Last Name
           * @description The last name of the Gong user.
           * @default null
           */
          lastName: string | null;
          /**
           * Manager Id
           * @description The manager ID of the Gong user.
           * @default null
           */
          managerId: string | null;
          /**
           * Meeting Consent Page Url
           * @description The Gong recording consent meeting link
           * @default null
           */
          meetingConsentPageUrl: string | null;
          /**
           * Personal Meeting Urls
           * @description The list of personal meeting URLs of the Gong user.
           * @default null
           */
          personalMeetingUrls: string[] | null;
          /**
           * Phone Number
           * @description The phone number of the Gong user.
           * @default null
           */
          phoneNumber: string | null;
          /**
           * Settings
           * @description The user's settings in the Gong system.
           * @default null
           */
          settings: {
              /**
               * Emails Imported
               * @description True if the team member is set to import emails by Gong, false if not.
               * @default null
               */
              emailsImported: boolean | null;
              /**
               * Gong Connect Enabled
               * @description True if the team member has Gong Connect enabled, false if not.
               * @default null
               */
              gongConnectEnabled: boolean | null;
              /**
               * Non Recorded Meetings Imported
               * @description True if the team member is set to import non recorded meetings by Gong, false if not.
               * @default null
               */
              nonRecordedMeetingsImported: boolean | null;
              /**
               * Prevent Email Import
               * @description True if the team member is set to prevent import of emails by Gong, false if not.
               * @default null
               */
              preventEmailImport: boolean | null;
              /**
               * Prevent Web Conference Recording
               * @description If true, invitation of this user to a web conference will prevent its recording (even if other users invited are set to record).
               * @default null
               */
              preventWebConferenceRecording: boolean | null;
              /**
               * Telephony Calls Imported
               * @description True if the team member is set to import telephony calls from by Gong, false if not.
               * @default null
               */
              telephonyCallsImported: boolean | null;
              /**
               * Web Conferences Recorded
               * @description True if the team member is set to be recorded by Gong, false if not.
               * @default null
               */
              webConferencesRecorded: boolean | null;
          } | null;
          /**
           * Spoken Languages
           * @default null
           */
          spokenLanguages: {
              /**
               * Language
               * @description Language spoken by the user encoded according to the BCP-47 standard.
               * @default null
               */
              language: string | null;
              /**
               * Primary
               * @description Indicates the primary language (one per user). The language will be assumed when the system cannot identify the language of a call, e.g., due to poor quality or the call being too short.
               * @default null
               */
              primary: boolean | null;
          }[] | null;
          /**
           * Title
           * @description The job title of the Gong user.
           * @default null
           */
          title: string | null;
          /**
           * Trusted Email Address
           * @description The trusted authentication email assigned to the Gong user
           * @default null
           */
          trustedEmailAddress: string | null;
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
 * Type of GONG's GONG_MANAGE_USER_CALL_ACCESS tool input.
 */
type GONG_MANAGE_USER_CALL_ACCESS_INPUT = {
  /**
   * Filter  Call Ids
   * @description Array of Gong"s unique numeric call IDs.
   */
  filter__callIds?: string[];
};

/**
 * Type of GONG's GONG_MANAGE_USER_CALL_ACCESS tool output.
 */
type GONG_MANAGE_USER_CALL_ACCESS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Call Access List
       * @description A list, in which each item specifies a call & users with access to this call.
       * @default null
       */
      callAccessList: {
          /**
           * Call Id
           * @description Gong's unique numeric call ID.
           * @default null
           */
          callId: string | null;
          /**
           * Users
           * @description A list of users having access.
           * @default null
           */
          users: {
              /**
               * User Id
               * @description Gong's unique numeric user ID.
               * @default null
               */
              userId: string | null;
          }[] | null;
      }[] | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_POST_A_DIGITAL_INTERACTION_V2_DIGITAL_INTERACTION tool input.
 */
type GONG_POST_A_DIGITAL_INTERACTION_V2_DIGITAL_INTERACTION_INPUT = {
  /**
   * Content  Content Additional Info Url
   * @description The URL for additional details provided by the website or external app, such as analysis of the content viewed
   */
  content__contentAdditionalInfoUrl?: string;
  /**
   * Content  Content Custom Fields
   * @description Include additional custom data about the content
   */
  content__contentCustomFields?: {
      /**
       * Data Type
       * @description The data type of the custom field: NUMBER, STRING, DATE (ISO 8601), URL, DURATION (in Seconds). Default value: STRING
       * @enum {string}
       */
      dataType?: "BOOLEAN" | "DATE" | "DURATION" | "NUMBER" | "STRING" | "URL";
      /**
       * Name
       * @description The name of the custom field
       */
      name: string;
      /**
       * Value
       * @description The value of the custom field
       */
      value: string;
  }[];
  /**
   * Content  Content Id
   * @description A unique identifier for the content in the partner"s system
   */
  content__contentId?: string;
  /**
   * Content  Content Label
   * @description A list of tags defined for the content
   */
  content__contentLabel?: string[];
  /**
   * Content  Content Title
   * @description The title of the content
   */
  content__contentTitle?: string;
  /**
   * Content  Content Url
   * @description The URL for the content the person looked at
   */
  content__contentUrl?: string;
  /**
   * Content  Numeric Content Details  Numeric Type
   * @description The type of numeric value
   * @enum {string}
   */
  content__numericContentDetails__numericType?: "NPS" | "OTHER" | "PERCENTAGE" | "RATING";
  /**
   * Content  Numeric Content Details  Range From
   * @description The lowest value that can be given to the content
   */
  content__numericContentDetails__rangeFrom?: number;
  /**
   * Content  Numeric Content Details  Range To
   * @description The highest value that can be given to the content
   */
  content__numericContentDetails__rangeTo?: number;
  /**
   * Content  Numeric Content Details  Value
   * @description The numeric value for the content
   */
  content__numericContentDetails__value?: number;
  /**
   * Content  Search Object Details  Domain
   * @description The domain of the entity
   */
  content__searchObjectDetails__domain?: string;
  /**
   * Content  Search Object Details  Name
   * @description The name of the entity the person searched for
   */
  content__searchObjectDetails__name?: string;
  /**
   * Content  Search Object Details  Object Id
   * @description The ID of the entity in the partner system
   */
  content__searchObjectDetails__objectId?: string;
  /**
   * Content  Search Object Details  Object Type
   * @description The type of the entity the person searched for
   * @enum {string}
   */
  content__searchObjectDetails__objectType?: "CATEGORY" | "PRODUCT" | "VENDOR";
  /**
   * Content  Search Object Details  Url
   * @description The URL of the entity in the partner system
   */
  content__searchObjectDetails__url?: string;
  /**
   * Content  Step Content Details  Available Steps
   * @description A list of all available steps in the process
   */
  content__stepContentDetails__availableSteps?: string[];
  /**
   * Content  Step Content Details  Value
   * @description The current step the person is in, in the process
   */
  content__stepContentDetails__value?: string;
  /**
   * Custom Fields
   * @description Include additional custom data about the event
   */
  customFields?: {
      /**
       * Data Type
       * @description The data type of the custom field: NUMBER, STRING, DATE (ISO 8601), URL, DURATION (in Seconds). Default value: STRING
       * @enum {string}
       */
      dataType?: "BOOLEAN" | "DATE" | "DURATION" | "NUMBER" | "STRING" | "URL";
      /**
       * Name
       * @description The name of the custom field
       */
      name: string;
      /**
       * Value
       * @description The value of the custom field
       */
      value: string;
  }[];
  /**
   * Device
   * @description The device used during the event
   * @enum {string}
   */
  device?: "MOBILE" | "PC";
  /**
   * Event Id
   * @description The provider"s unique identifier for the event used for deduplication
   */
  eventId?: string;
  /**
   * Event Type
   * @description The type of the event, explaining the content and action performed. Values may be partner-aligned, for example, "link clicked", "page viewed"
   */
  eventType?: string;
  /**
   * Person  Company  Company Business Contexts
   * @description The company"s details in an external system such as the CRM. If the domain is empty, to enable association, send the crmAccountId or crmOpportunityId
   */
  person__company__companyBusinessContexts?: {
      /**
       * Object Id
       * @description The ID of the business context object
       */
      objectId: string;
      /**
       * Object Type
       * @description The object type in the external system
       * @enum {string}
       */
      objectType: "ACCOUNT" | "OPPORTUNITY";
      /**
       * System Name
       * @description The name of the external system
       */
      systemName?: string;
  }[];
  /**
   * Person  Company  Company Id
   * @description The company ID in the partner"s source system
   */
  person__company__companyId?: string;
  /**
   * Person  Company  Domain
   * @description The domain of the person"s company. Used to associate the person with the company ("acme.com"). Mandatory for anonymous person, when the name, email, phoneNumber and personBusinessContext are empty
   */
  person__company__domain?: string;
  /**
   * Person  Company  Name
   * @description The name of the company
   */
  person__company__name?: string;
  /**
   * Person  Email
   * @description The email address of the person. Used for business context association
   */
  person__email?: string;
  /**
   * Person  Location  City
   * @description The city of the person
   */
  person__location__city?: string;
  /**
   * Person  Location  Country
   * @description The country of the person in ISO 3166. If not available in ISO 3166, then send as string
   */
  person__location__country?: string;
  /**
   * Person  Location  Region
   * @description The region of the person in ISO 3166-2. If not available in ISO 3166-2, then send as string
   */
  person__location__region?: string;
  /**
   * Person  Location  State
   * @description The state of the person in ISO 3166-2. If not available in ISO 3166-2, then send as string
   */
  person__location__state?: string;
  /**
   * Person  Name
   * @description The name of the person
   */
  person__name?: string;
  /**
   * Person  Person Business Context  Object Id
   * @description The ID of the object in the external system
   */
  person__personBusinessContext__objectId?: string;
  /**
   * Person  Person Business Context  Object Type
   * @description The object type in the external system
   * @enum {string}
   */
  person__personBusinessContext__objectType?: "CONTACT" | "LEAD";
  /**
   * Person  Person Business Context  System Name
   * @description The name of the external system
   */
  person__personBusinessContext__systemName?: string;
  /**
   * Person  Person Custom Fields
   * @description Include additional custom data about the person
   */
  person__personCustomFields?: {
      /**
       * Data Type
       * @description The data type of the custom field: NUMBER, STRING, DATE (ISO 8601), URL, DURATION (in Seconds). Default value: STRING
       * @enum {string}
       */
      dataType?: "BOOLEAN" | "DATE" | "DURATION" | "NUMBER" | "STRING" | "URL";
      /**
       * Name
       * @description The name of the custom field
       */
      name: string;
      /**
       * Value
       * @description The value of the custom field
       */
      value: string;
  }[];
  /**
   * Person  Person Id
   * @description A unique person identifier in the partner system. Mandatory for anonymous person, when the name, email, phoneNumber and personBusinessContext are empty
   */
  person__personId?: string;
  /**
   * Person  Phone Number
   * @description The phone number of the person. Used for business context association
   */
  person__phoneNumber?: string;
  /**
   * Session Id
   * @description The identifier for the session, useful for tying related events together
   */
  sessionId?: string;
  /**
   * Source System Name
   * @description When integrating via IPaaS, the name of the technology partner the customer set up a Gong integration with via an IPaaS. When integrating directly with Gong: the name of the company setting up the integration with Gong
   */
  sourceSystemName?: string;
  /**
   * Timestamp
   * Format: date-time
   * @description The date and time of the event in ISO 8601 format
   */
  timestamp?: string;
  /**
   * Tracking Id
   * @description The ID used for tracking the person who did the event. Must be null if a person is sent instead.
   */
  trackingId?: string;
};

/**
 * Type of GONG's GONG_POST_A_DIGITAL_INTERACTION_V2_DIGITAL_INTERACTION tool output.
 */
type GONG_POST_A_DIGITAL_INTERACTION_V2_DIGITAL_INTERACTION_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_POST_DAY_BY_DAY_ACTIVITY_STATS tool input.
 */
type GONG_POST_DAY_BY_DAY_ACTIVITY_STATS_INPUT = {
  /**
   * Cursor
   * @description When paging is needed, provide the value supplied by the previous API call to bring the following page of records.
   */
  cursor?: string;
  /**
   * Filter  Created From Date Time
   * Format: date-time
   * @description Createdfromdatetime
   */
  filter__createdFromDateTime?: string;
  /**
   * Filter  Created To Date Time
   * Format: date-time
   * @description Createdtodatetime
   */
  filter__createdToDateTime?: string;
  /**
   * Filter  From Date
   * @description The date (in the company"s time zone) from which to list a user"s activity. This value is inclusive. The date should be specified in the following format: YYYY-MM-DD.
   */
  filter__fromDate?: string;
  /**
   * Filter  To Date
   * @description The date (in the company"s time zone) until which to list a user"s activity. This value is exclusive. This value should not exceed the current day. The date should be specified in the following format: YYYY-MM-DD.
   */
  filter__toDate?: string;
  /**
   * Filter  User Ids
   * @description Set of Gong"s unique numeric identifiers for the users (up to 20 digits).
   */
  filter__userIds?: string[];
};

/**
 * Type of GONG's GONG_POST_DAY_BY_DAY_ACTIVITY_STATS tool output.
 */
type GONG_POST_DAY_BY_DAY_ACTIVITY_STATS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Records
       * @description Information about the number of records that match the requested filter.
       * @default null
       */
      records: {
          /**
           * Current Page Number
           * @description Current page number.
           * @default null
           */
          currentPageNumber: number | null;
          /**
           * Current Page Size
           * @description Number of records in the current page.
           * @default null
           */
          currentPageSize: number | null;
          /**
           * Cursor
           * @description Returned only when there are more records to be retrieved. Repeat the API call and pass this cursor value in the request to retrieve the next page of records.
           * @default null
           */
          cursor: string | null;
          /**
           * Total Records
           * @description Total number of records.
           * @default null
           */
          totalRecords: number | null;
      } | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
      /**
       * Users Detailed Activities
       * @description A list, in which each item contains one user's activity.
       * @default null
       */
      usersDetailedActivities: {
          /**
           * User Daily Activity Stats
           * @description Array of daily activity records, one for every day in the date range.
           * @default null
           */
          userDailyActivityStats: {
              /**
               * Calls As Host
               * @description List of IDs of calls in which this user is the host.
               * @default null
               */
              callsAsHost: string[] | null;
              /**
               * Calls Attended
               * @description List of IDs of calls in which this user is participant (not host)
               * @default null
               */
              callsAttended: string[] | null;
              /**
               * Calls Comments Given
               * @description List of IDs of calls in which a user gave at least one comment.
               * @default null
               */
              callsCommentsGiven: string[] | null;
              /**
               * Calls Comments Received
               * @description List of IDs of calls in which a user received at least one comment on the users calls.
               * @default null
               */
              callsCommentsReceived: string[] | null;
              /**
               * Calls Gave Feedback
               * @description List of IDs of calls where the user gave feedback.
               * @default null
               */
              callsGaveFeedback: string[] | null;
              /**
               * Calls Marked As Feedback Given
               * @description  List of IDs of calls in which someone pressed the "Mark as reviewed".
               * @default null
               */
              callsMarkedAsFeedbackGiven: string[] | null;
              /**
               * Calls Marked As Feedback Received
               * @description List of IDs of calls in which someone pressed the "Mark as reviewed" on the users calls.
               * @default null
               */
              callsMarkedAsFeedbackReceived: string[] | null;
              /**
               * Calls Received Feedback
               * @description  List of IDs of calls where the user received feedback.
               * @default null
               */
              callsReceivedFeedback: string[] | null;
              /**
               * Calls Requested Feedback
               * @description  List of IDs of calls where the user requested feedback.
               * @default null
               */
              callsRequestedFeedback: string[] | null;
              /**
               * Calls Scorecards Filled
               * @description List of IDs of calls in which the user filled scorecards.
               * @default null
               */
              callsScorecardsFilled: string[] | null;
              /**
               * Calls Scorecards Received
               * @description List of IDs of calls in which someone filled a scorecard on the users calls.
               * @default null
               */
              callsScorecardsReceived: string[] | null;
              /**
               * Calls Shared Externally
               * @description List of IDs of calls the user shared with people outside the company.
               * @default null
               */
              callsSharedExternally: string[] | null;
              /**
               * Calls Shared Internally
               * @description List of IDs of calls the user shared with other users inside the company.
               * @default null
               */
              callsSharedInternally: string[] | null;
              /**
               * From Date
               * @description The start of the day in the ISO-8601 format, for example: '2024-01-17T16:20:05-03:00' or '2016-02-16T03:57:04.834+05:30' or '2020-11-20T21:30:07.233692Z', where Z stands for UTC.
               * @default null
               */
              fromDate: string | null;
              /**
               * Others Calls Listened To
               * @description List of IDs of calls, not belonging to this user, that the user listened to.
               * @default null
               */
              othersCallsListenedTo: string[] | null;
              /**
               * Own Calls Listened To
               * @description List of IDs of the user's own calls, that the user listened to.
               * @default null
               */
              ownCallsListenedTo: string[] | null;
              /**
               * To Date
               * @description The end of the day in the ISO-8601 format, for example: '2024-01-17T16:20:05-03:00' or '2016-02-16T03:57:04.834+05:30' or '2020-11-20T21:30:07.233692Z', where Z stands for UTC.
               * @default null
               */
              toDate: string | null;
          }[] | null;
          /**
           * User Email Address
           * @description The email address of the Gong user.
           * @default null
           */
          userEmailAddress: string | null;
          /**
           * User Id
           * @description Gong's unique numeric identifier for the user (up to 20 digits).
           * @default null
           */
          userId: string | null;
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
 * Type of GONG's GONG_POST_INTERACTION_FILTER_STATS tool input.
 */
type GONG_POST_INTERACTION_FILTER_STATS_INPUT = {
  /**
   * Cursor
   * @description When paging is needed, provide the value supplied by the previous API call to bring the following page of records.
   */
  cursor?: string;
  /**
   * Filter  Created From Date Time
   * Format: date-time
   * @description Createdfromdatetime
   */
  filter__createdFromDateTime?: string;
  /**
   * Filter  Created To Date Time
   * Format: date-time
   * @description Createdtodatetime
   */
  filter__createdToDateTime?: string;
  /**
   * Filter  From Date
   * @description The date (in the company"s time zone) from which to list a user"s activity. This value is inclusive. The date should be specified in the following format: YYYY-MM-DD.
   */
  filter__fromDate?: string;
  /**
   * Filter  To Date
   * @description The date (in the company"s time zone) until which to list a user"s activity. This value is exclusive. This value should not exceed the current day. The date should be specified in the following format: YYYY-MM-DD.
   */
  filter__toDate?: string;
  /**
   * Filter  User Ids
   * @description Set of Gong"s unique numeric identifiers for the users (up to 20 digits).
   */
  filter__userIds?: string[];
};

/**
 * Type of GONG's GONG_POST_INTERACTION_FILTER_STATS tool output.
 */
type GONG_POST_INTERACTION_FILTER_STATS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * From Date Time
       * @description The date and time in the ISO-8601 format, for example: '2024-01-17T16:20:05-03:00' or '2016-02-16T03:57:04.834+05:30' or '2020-11-20T21:30:07.233692Z', where Z stands for UTC, when the list of results starts.
       * @default null
       */
      fromDateTime: string | null;
      /**
       * People Interaction Stats
       * @description A list of interaction statistics. Applicable values: 'Longest Monologue', 'Longest Customer Story', 'Interactivity', 'Patience', 'Question Rate'.
       * @default null
       */
      peopleInteractionStats: {
          /**
           * Person Interaction Stats
           * @default null
           */
          personInteractionStats: {
              /**
               * Name
               * @description Stat name
               * @default null
               */
              name: string | null;
              /**
               * Value
               * @description Stat measurement (Can be either a double or integer)
               * @default null
               */
              value: number | null;
          }[] | null;
          /**
           * User Email Address
           * @description The email address of the Gong user.
           * @default null
           */
          userEmailAddress: string | null;
          /**
           * User Id
           * @description Gong's unique numeric identifier for the user (up to 20 digits).
           * @default null
           */
          userId: string | null;
      }[] | null;
      /**
       * Records
       * @description Information about the number of records that match the requested filter.
       * @default null
       */
      records: {
          /**
           * Current Page Number
           * @description Current page number.
           * @default null
           */
          currentPageNumber: number | null;
          /**
           * Current Page Size
           * @description Number of records in the current page.
           * @default null
           */
          currentPageSize: number | null;
          /**
           * Cursor
           * @description Returned only when there are more records to be retrieved. Repeat the API call and pass this cursor value in the request to retrieve the next page of records.
           * @default null
           */
          cursor: string | null;
          /**
           * Total Records
           * @description Total number of records.
           * @default null
           */
          totalRecords: number | null;
      } | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
      /**
       * Time Zone
       * @description The company's defined timezone in Gong.
       * @default null
       */
      timeZone: string | null;
      /**
       * To Date Time
       * @description The date and time in the ISO-8601 format, for example: '2024-01-17T16:20:05-03:00' or '2016-02-16T03:57:04.834+05:30' or '2020-11-20T21:30:07.233692Z', where Z stands for UTC, when the list of results ends.
       * @default null
       */
      toDateTime: string | null;
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
 * Type of GONG's GONG_POST_MEETING_INTEGRATION_STATUS tool input.
 */
type GONG_POST_MEETING_INTEGRATION_STATUS_INPUT = {
  /**
   * Emails
   * @description String array of emails of users (max 100)
   */
  emails?: string[];
};

/**
 * Type of GONG's GONG_POST_MEETING_INTEGRATION_STATUS tool output.
 */
type GONG_POST_MEETING_INTEGRATION_STATUS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
      /**
       * Users
       * @description The integration status for the request users
       * @default null
       */
      users: {
          /**
           * Email
           * @description The email address meeting organizer
           * @default null
           */
          email: string | null;
          /**
           * Exists
           * @description Whether the user exists in Gong
           * @default null
           */
          exists: boolean | null;
          /**
           * Fix Url
           * @description A URL to place in the application to fix the problem
           * @default null
           */
          fixUrl: string | null;
          /**
           * Help Url
           * @description A URL to the Gong help center where more information can be found about the error
           * @default null
           */
          helpUrl: string | null;
          /**
           * User Facing Error
           * @description The message explaining in case the integration is currently not connected
           * @default null
           */
          userFacingError: string | null;
          /**
           * Valid
           * @description Whether the integration is connected for the user
           * @default null
           */
          valid: boolean | null;
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
 * Type of GONG's GONG_REGISTER_CRM_INTEGRATION tool input.
 */
type GONG_REGISTER_CRM_INTEGRATION_INPUT = {
  /**
   * Name
   * @description The name of the integration
   */
  name?: string;
  /**
   * Owner Email
   * @description Email address of the person responsible for the integration
   */
  ownerEmail?: string;
};

/**
 * Type of GONG's GONG_REGISTER_CRM_INTEGRATION tool output.
 */
type GONG_REGISTER_CRM_INTEGRATION_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Integration Id
       * @description <style>.public-api-info {    background: rgb(222, 235, 255);}.public-api-tip {    background: rgb(227, 252, 239);}.public-api-parameter {    background: rgba(9,30,66,0.08);}.public-api-note {    background: rgb(234, 230, 255);}.public-api-important {    background: rgb(255, 250, 230);}.public-api-critical {    background: rgb(255, 235, 230);}table, th, td {  border: 1px solid gray;  border-collapse: collapse;}th, td {  padding: 5px;}th {  text-align: left;}img {  border: 2px solid #D3D5D9;}</style>Your integration ID to be used in requests to the API. This ensures you are accessing the correct integration.<br><b>Note:</b> Parse the integrationId as Long or BigInt. Parsing the integrationId as an Integer will truncate the integrationId to trailing zeros and will return an incorrect ID.
       * @default null
       */
      integrationId: number | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_REPORT_CONTENT_VIEWED_EVENT tool input.
 */
type GONG_REPORT_CONTENT_VIEWED_EVENT_INPUT = {
  /**
   * Action Name
   * @description Actionname
   */
  actionName?: string;
  /**
   * Agent Platform
   * @description Platform on which the interaction was made
   * @enum {string}
   */
  agentPlatform?: "Windows, Linux, MacOS, iOS, Android";
  /**
   * Content Id
   * @description The id of the content that was viewed in the reporting system.
   */
  contentId?: string;
  /**
   * Content Properties
   * @description A list of additional properties for the content
   */
  contentProperties?: {
      /**
       * Data Type
       * @description Property data type.
       * @enum {string}
       */
      dataType: "number, string, url, date";
      /**
       * Name
       * @description Property name.
       */
      name: string;
      /**
       * Value
       * @description Property value. Value format should match dataType. If dataType is "number", value should be passed in JSON number format, e.g. 3.14. If dataType is "date", the value should be passed in JSON date format, e.g. 2021-02-17T02:30:00-08:00. If the dataType is "url", the value should be valid URL, e.g. "https://example.com/example?q=v"
       */
      value: string;
  }[];
  /**
   * Content Title
   * @description Human readable title of the content.
   */
  contentTitle?: string;
  /**
   * Content Url
   * @description The url of the content that was viewed in the reporting system. This is the url that is was accessed by the viewer.
   */
  contentUrl?: string;
  /**
   * Crm Context
   * @description A list of references to external systems such as CRM, Telephony System, Case Management, etc.
   */
  crmContext?: {
      /**
       * Objects
       * @description List of objects within the external system. Note: Multiple opportunities/deals belonging to the same account are not supported.
       */
      objects?: {
          /**
           * Fields
           * @description Object fields. Intended for future use only.
           */
          fields?: {
              /**
               * Name
               * @description Field name. For Account supported fields are: Name, Website, Industry and all the custom fields. For Opportunity supported fields are Name, LeadSource, Type, StageName, Probability, Amount, CloseDate and all the custom fields.
               */
              name?: string;
          }[];
          /**
           * Object Id
           * @description Object ID. For Salesforce both case-sensitive and case-insensitive formats are supported.
           */
          objectId: string;
          /**
           * Object Type
           * @description Object Type. e.g. Account.
           * @enum {string}
           */
          objectType: "Account" | "Contact" | "Lead" | "Opportunity" | "Opportunity,Account" | "User";
      }[];
      /**
       * System
       * @description External system name. Currently only Salesforce and Generic are supported.
       * @enum {string}
       */
      system: "Generic" | "HubSpot" | "MicrosoftDynamic" | "Salesforce";
  }[];
  /**
   * Event Id
   * @description The original id of the event as designated in the reporting system.
   */
  eventId?: string;
  /**
   * Event Properties
   * @description A list of additional properties for the event
   */
  eventProperties?: {
      /**
       * Data Type
       * @description Property data type.
       * @enum {string}
       */
      dataType: "number, string, url, date";
      /**
       * Name
       * @description Property name.
       */
      name: string;
      /**
       * Value
       * @description Property value. Value format should match dataType. If dataType is "number", value should be passed in JSON number format, e.g. 3.14. If dataType is "date", the value should be passed in JSON date format, e.g. 2021-02-17T02:30:00-08:00. If the dataType is "url", the value should be valid URL, e.g. "https://example.com/example?q=v"
       */
      value: string;
  }[];
  /**
   * Event Timestamp
   * @description The date and time when the event happened in the ISO-8601 format (e.g., "2021-08-01T02:30:00+05:00" or "2021-08-01T08:00:00Z", where Z stands for UTC);
   */
  eventTimestamp?: string;
  /**
   * Mobile App Id
   * @description The application identification string in case of interaction via mobile application (bundle identifier or package name).
   */
  mobileAppId?: string;
  /**
   * More Info Url
   * @description Moreinfourl
   */
  moreInfoUrl?: string;
  /**
   * Non Company Participants
   * @description Noncompanyparticipants
   */
  nonCompanyParticipants?: {
      /**
       * Context
       * @description A list of links to external systems such as CRM, Telephony System, Case Management, etc.
       */
      context?: {
          /**
           * Objects
           * @description List of objects within the external system
           */
          objects?: {
              /**
               * Fields
               * @description Object fields. Intended for future use only.
               */
              fields?: {
                  /**
                   * Name
                   * @description Field name
                   */
                  name?: string;
              }[];
              /**
               * Object Id
               * @description Object ID. For Salesforce both case-sensitive and case-insensitive formats are supported.
               */
              objectId: string;
              /**
               * Object Type
               * @description Object Type. Valid only for non-company parties. e.g. Lead.
               * @enum {string}
               */
              objectType: "Account" | "Contact" | "Lead" | "Lead,Contact" | "Opportunity" | "User";
          }[];
          /**
           * System
           * @description External system name. Currently only Salesforce and Generic are supported.
           * @enum {string}
           */
          system: "Generic" | "HubSpot" | "MicrosoftDynamic" | "Salesforce";
      }[];
      /**
       * Email
       * @description The email address of the person, if available.
       */
      email?: string;
      /**
       * Name
       * @description The name of the person, if available.
       */
      name?: string;
      /**
       * Title
       * @description The title of the person, if available.
       */
      title?: string;
  }[];
  /**
   * Reporting System
   * @description The unique identifier of the reporting system. It is the same value in all events originating from the same system.
   */
  reportingSystem?: string;
  /**
   * Share Id
   * @description The id of the share action that corresponds to this view event, in case there can be more than one share per content.
   */
  shareId?: string;
  /**
   * Sharer  Email
   * @description The email address of the person, if available.
   */
  sharer__email?: string;
  /**
   * Sharer  Id
   * @description The user id in Gong, if available.
   */
  sharer__id?: string;
  /**
   * Sharer  Name
   * @description The name of the person, if available.
   */
  sharer__name?: string;
  /**
   * Sharing Message Body
   * @description Sharingmessagebody
   */
  sharingMessageBody?: string;
  /**
   * Sharing Message Subject
   * @description Sharingmessagesubject
   */
  sharingMessageSubject?: string;
  /**
   * Tracking Id
   * @description The ID used for tracking the person who did the event. Must be null if a viewer is sent instead.
   */
  trackingId?: string;
  /**
   * User Agent
   * @description "User-Agent" header value for browser based interaction
   */
  userAgent?: string;
  /**
   * View Action Title
   * @description The name of the action like "Document Viewed" or "Presentation Opened".
   */
  viewActionTitle?: string;
  /**
   * View Info Url
   * @description The link to a page that presents additional information about this event.
   */
  viewInfoUrl?: string;
  /**
   * Viewer  Context
   * @description A list of links to external systems such as CRM, Telephony System, Case Management, etc.
   */
  viewer__context?: {
      /**
       * Objects
       * @description List of objects within the external system
       */
      objects?: {
          /**
           * Fields
           * @description Object fields. Intended for future use only.
           */
          fields?: {
              /**
               * Name
               * @description Field name
               */
              name?: string;
          }[];
          /**
           * Object Id
           * @description Object ID. For Salesforce both case-sensitive and case-insensitive formats are supported.
           */
          objectId: string;
          /**
           * Object Type
           * @description Object Type. Valid only for non-company parties. e.g. Lead.
           * @enum {string}
           */
          objectType: "Account" | "Contact" | "Lead" | "Lead,Contact" | "Opportunity" | "User";
      }[];
      /**
       * System
       * @description External system name. Currently only Salesforce and Generic are supported.
       * @enum {string}
       */
      system: "Generic" | "HubSpot" | "MicrosoftDynamic" | "Salesforce";
  }[];
  /**
   * Viewer  Email
   * @description The email address of the person, if available.
   */
  viewer__email?: string;
  /**
   * Viewer  Name
   * @description The name of the person, if available.
   */
  viewer__name?: string;
  /**
   * Viewer  Title
   * @description The title of the person, if available.
   */
  viewer__title?: string;
  /**
   * Workspace Id
   * @description Optional workspace identifier. If specified, the event will be placed into this workspace, otherwise, the default algorithm for workspace placement will be applied.
   */
  workspaceId?: string;
};

/**
 * Type of GONG's GONG_REPORT_CONTENT_VIEWED_EVENT tool output.
 */
type GONG_REPORT_CONTENT_VIEWED_EVENT_OUTPUT = {
  /** Data */
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
};

/**
 * Type of GONG's GONG_REPORT_CUSTOM_ENGAGEMENT_EVENT tool input.
 */
type GONG_REPORT_CUSTOM_ENGAGEMENT_EVENT_INPUT = {
  /**
   * Action Name
   * @description The name of the action like "Document Viewed" or "Presentation Opened".
   */
  actionName?: string;
  /**
   * Actor  Context
   * @description A list of links to external systems such as CRM, Telephony System, Case Management, etc.
   */
  actor__context?: {
      /**
       * Objects
       * @description List of objects within the external system
       */
      objects?: {
          /**
           * Fields
           * @description Object fields. Intended for future use only.
           */
          fields?: {
              /**
               * Name
               * @description Field name
               */
              name?: string;
          }[];
          /**
           * Object Id
           * @description Object ID. For Salesforce both case-sensitive and case-insensitive formats are supported.
           */
          objectId: string;
          /**
           * Object Type
           * @description Object Type. Valid only for non-company parties. e.g. Lead.
           * @enum {string}
           */
          objectType: "Account" | "Contact" | "Lead" | "Lead,Contact" | "Opportunity" | "User";
      }[];
      /**
       * System
       * @description External system name. Currently only Salesforce and Generic are supported.
       * @enum {string}
       */
      system: "Generic" | "HubSpot" | "MicrosoftDynamic" | "Salesforce";
  }[];
  /**
   * Actor  Email
   * @description The email address of the person, if available.
   */
  actor__email?: string;
  /**
   * Actor  Name
   * @description The name of the person, if available.
   */
  actor__name?: string;
  /**
   * Actor  Title
   * @description The title of the person, if available.
   */
  actor__title?: string;
  /**
   * Agent Platform
   * @description Platform on which the interaction was made
   * @enum {string}
   */
  agentPlatform?: "Windows, Linux, MacOS, iOS, Android";
  /**
   * Content Id
   * @description The id of the content that was viewed in the reporting system.
   */
  contentId?: string;
  /**
   * Content Properties
   * @description A list of additional properties for the content
   */
  contentProperties?: {
      /**
       * Data Type
       * @description Property data type.
       * @enum {string}
       */
      dataType: "number, string, url, date";
      /**
       * Name
       * @description Property name.
       */
      name: string;
      /**
       * Value
       * @description Property value. Value format should match dataType. If dataType is "number", value should be passed in JSON number format, e.g. 3.14. If dataType is "date", the value should be passed in JSON date format, e.g. 2021-02-17T02:30:00-08:00. If the dataType is "url", the value should be valid URL, e.g. "https://example.com/example?q=v"
       */
      value: string;
  }[];
  /**
   * Content Title
   * @description Human readable title of the content.
   */
  contentTitle?: string;
  /**
   * Content Url
   * @description The url of the content that was viewed in the reporting system. This is the url that is was accessed by the viewer.
   */
  contentUrl?: string;
  /**
   * Crm Context
   * @description A list of references to external systems such as CRM, Telephony System, Case Management, etc.
   */
  crmContext?: {
      /**
       * Objects
       * @description List of objects within the external system. Note: Multiple opportunities/deals belonging to the same account are not supported.
       */
      objects?: {
          /**
           * Fields
           * @description Object fields. Intended for future use only.
           */
          fields?: {
              /**
               * Name
               * @description Field name. For Account supported fields are: Name, Website, Industry and all the custom fields. For Opportunity supported fields are Name, LeadSource, Type, StageName, Probability, Amount, CloseDate and all the custom fields.
               */
              name?: string;
          }[];
          /**
           * Object Id
           * @description Object ID. For Salesforce both case-sensitive and case-insensitive formats are supported.
           */
          objectId: string;
          /**
           * Object Type
           * @description Object Type. e.g. Account.
           * @enum {string}
           */
          objectType: "Account" | "Contact" | "Lead" | "Opportunity" | "Opportunity,Account" | "User";
      }[];
      /**
       * System
       * @description External system name. Currently only Salesforce and Generic are supported.
       * @enum {string}
       */
      system: "Generic" | "HubSpot" | "MicrosoftDynamic" | "Salesforce";
  }[];
  /**
   * Event Id
   * @description The original id of the event as designated in the reporting system.
   */
  eventId?: string;
  /**
   * Event Info Url
   * @description The link to a page that presents additional information about this event.
   */
  eventInfoUrl?: string;
  /**
   * Event Properties
   * @description A list of additional properties for the event
   */
  eventProperties?: {
      /**
       * Data Type
       * @description Property data type.
       * @enum {string}
       */
      dataType: "number, string, url, date";
      /**
       * Name
       * @description Property name.
       */
      name: string;
      /**
       * Value
       * @description Property value. Value format should match dataType. If dataType is "number", value should be passed in JSON number format, e.g. 3.14. If dataType is "date", the value should be passed in JSON date format, e.g. 2021-02-17T02:30:00-08:00. If the dataType is "url", the value should be valid URL, e.g. "https://example.com/example?q=v"
       */
      value: string;
  }[];
  /**
   * Event Timestamp
   * @description The date and time when the event happened in the ISO-8601 format (e.g., "2021-08-01T02:30:00+05:00" or "2021-08-01T08:00:00Z", where Z stands for UTC);
   */
  eventTimestamp?: string;
  /**
   * Mobile App Id
   * @description The application identification string in case of interaction via mobile application (bundle identifier or package name).
   */
  mobileAppId?: string;
  /**
   * More Info Url
   * @description Moreinfourl
   */
  moreInfoUrl?: string;
  /**
   * Non Company Participants
   * @description Noncompanyparticipants
   */
  nonCompanyParticipants?: {
      /**
       * Context
       * @description A list of links to external systems such as CRM, Telephony System, Case Management, etc.
       */
      context?: {
          /**
           * Objects
           * @description List of objects within the external system
           */
          objects?: {
              /**
               * Fields
               * @description Object fields. Intended for future use only.
               */
              fields?: {
                  /**
                   * Name
                   * @description Field name
                   */
                  name?: string;
              }[];
              /**
               * Object Id
               * @description Object ID. For Salesforce both case-sensitive and case-insensitive formats are supported.
               */
              objectId: string;
              /**
               * Object Type
               * @description Object Type. Valid only for non-company parties. e.g. Lead.
               * @enum {string}
               */
              objectType: "Account" | "Contact" | "Lead" | "Lead,Contact" | "Opportunity" | "User";
          }[];
          /**
           * System
           * @description External system name. Currently only Salesforce and Generic are supported.
           * @enum {string}
           */
          system: "Generic" | "HubSpot" | "MicrosoftDynamic" | "Salesforce";
      }[];
      /**
       * Email
       * @description The email address of the person, if available.
       */
      email?: string;
      /**
       * Name
       * @description The name of the person, if available.
       */
      name?: string;
      /**
       * Title
       * @description The title of the person, if available.
       */
      title?: string;
  }[];
  /**
   * Reporting System
   * @description The unique identifier of the reporting system. It is the same value in all events originating from the same system.
   */
  reportingSystem?: string;
  /**
   * Share Id
   * @description Shareid
   */
  shareId?: string;
  /**
   * Sharer  Email
   * @description The email address of the person, if available.
   */
  sharer__email?: string;
  /**
   * Sharer  Id
   * @description The user id in Gong, if available.
   */
  sharer__id?: string;
  /**
   * Sharer  Name
   * @description The name of the person, if available.
   */
  sharer__name?: string;
  /**
   * Sharing Message Body
   * @description Sharingmessagebody
   */
  sharingMessageBody?: string;
  /**
   * Sharing Message Subject
   * @description Sharingmessagesubject
   */
  sharingMessageSubject?: string;
  /**
   * Tracking Id
   * @description Trackingid
   */
  trackingId?: string;
  /**
   * User Agent
   * @description "User-Agent" header value for browser based interaction
   */
  userAgent?: string;
  /**
   * Workspace Id
   * @description Optional workspace identifier. If specified, the event will be placed into this workspace, otherwise, the default algorithm for workspace placement will be applied.
   */
  workspaceId?: string;
};

/**
 * Type of GONG's GONG_REPORT_CUSTOM_ENGAGEMENT_EVENT tool output.
 */
type GONG_REPORT_CUSTOM_ENGAGEMENT_EVENT_OUTPUT = {
  /** Data */
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
};

/**
 * Type of GONG's GONG_RETRIEVE_CALL_DATA_BY_DATE_RANGE_V2_CALLS tool input.
 */
type GONG_RETRIEVE_CALL_DATA_BY_DATE_RANGE_V2_CALLS_INPUT = {
  /**
   * Cursor
   * @description When paging is needed, provide the value supplied by the previous API call to bring the following page of records.
   */
  cursor?: string;
  /**
   * From Date Time
   * @description Date and time (in ISO-8601 format: "2018-02-18T02:30:00-07:00" or "2018-02-18T08:00:00Z", where Z stands for UTC) from which to list recorded calls. Returns calls that started on or after the specified date and time. If not provided, list starts with earliest call. For web-conference calls recorded by Gong, the date denotes its scheduled time, otherwise, it denotes its actual start time.
   */
  fromDateTime?: string;
  /**
   * To Date Time
   * @description Date and time (in ISO-8601 format: "2018-02-18T02:30:00-07:00" or "2018-02-18T08:00:00Z", where Z stands for UTC) until which to list recorded calls. Returns calls that started up to but excluding specified date and time. If not provided, list ends with most recent call. For web-conference calls recorded by Gong, the date denotes its scheduled time, otherwise, it denotes its actual start time.
   */
  toDateTime?: string;
  /**
   * Workspace Id
   * @description Optional Workspace identifier, if supplied the API will return only the calls belonging to this workspace.
   */
  workspaceId?: string;
};

/**
 * Type of GONG's GONG_RETRIEVE_CALL_DATA_BY_DATE_RANGE_V2_CALLS tool output.
 */
type GONG_RETRIEVE_CALL_DATA_BY_DATE_RANGE_V2_CALLS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Calls
       * @description A list, in which each item specifies one call.
       * @default null
       */
      calls: {
          /**
           * Calendar Event Id
           * @description The Id of the meeting in Google or Outlook Calendar.
           * @default null
           */
          calendarEventId: string | null;
          /**
           * Client Unique Id
           * @description The call's unique identifier in the origin recording system (typically a telephony recording system). The identifier is provided to Gong during the call creation via the Public API or through telephony systems integrations.
           * @default null
           */
          clientUniqueId: string | null;
          /**
           * Custom Data
           * @description Metadata as was provided to Gong during the call creation via the Public API.
           * @default null
           */
          customData: string | null;
          /**
           * Direction
           * @description Call direction.
           * @default null
           * @enum {string|null}
           */
          direction: "Inbound" | "Outbound" | "Conference" | "Unknown" | null;
          /**
           * Duration
           * @description The duration of the call, in seconds.
           * @default null
           */
          duration: number | null;
          /**
           * Id
           * @description Gong's unique numeric identifier for the call (up to 20 digits).
           * @default null
           */
          id: string | null;
          /**
           * Is Private
           * @description If the call is private.
           * @default null
           */
          isPrivate: boolean | null;
          /**
           * Language
           * @description The language codes (as defined by ISO-639-2B). E.g., eng, fre, spa, ger, and ita. Also used are und (unsupported language), and zxx (not enough speech content for identification).
           * @default null
           */
          language: string | null;
          /**
           * Media
           * @description Media type
           * @default null
           * @enum {string|null}
           */
          media: "Video" | "Audio" | null;
          /**
           * Meeting Url
           * @description The meeting provider URL on which the web conference was recorded.
           * @default null
           */
          meetingUrl: string | null;
          /**
           * Primary User Id
           * @description The primary user ID of the team member who hosted the call.
           * @default null
           */
          primaryUserId: string | null;
          /**
           * Purpose
           * @description The purpose of the call.
           * @default null
           */
          purpose: string | null;
          /**
           * Scheduled
           * Format: date-time
           * @description Scheduled date and time of the call in the ISO-8601 format (e.g., '2018-02-18T02:30:00-07:00' or '2018-02-18T08:00:00Z', where Z stands for UTC).
           * @default null
           */
          scheduled: string | null;
          /**
           * Scope
           * @description The scope of the call: 'internal' if all the participants are from the company, 'external' if some participants are not from the company, or 'unknown' if the scope is unknown.
           * @default null
           * @enum {string|null}
           */
          scope: "Internal" | "External" | "Unknown" | null;
          /**
           * Sdr Disposition
           * @description The SDR disposition of the call. This can be an automated value provided by the provider, or manually entered by the rep.
           * @default null
           */
          sdrDisposition: string | null;
          /**
           * Started
           * Format: date-time
           * @description The date and time when the call was recorded in the ISO-8601 format (e.g., '2018-02-18T02:30:00-07:00' or '2018-02-18T08:00:00Z', where Z stands for UTC).
           * @default null
           */
          started: string | null;
          /**
           * System
           * @description The system with which the call was carried out (e.g., WebEx, ShoreTel, etc.).
           * @default null
           */
          system: string | null;
          /**
           * Title
           * @description The title of the call.
           * @default null
           */
          title: string | null;
          /**
           * Url
           * @description The URL to the page in the Gong web application where the call is available.
           * @default null
           */
          url: string | null;
          /**
           * Workspace Id
           * @description Gong's unique numeric identifier for the call's workspace (up to 20 digits).
           * @default null
           */
          workspaceId: string | null;
      }[] | null;
      /**
       * Records
       * @description Information about the number of records that match the requested filter.
       * @default null
       */
      records: {
          /**
           * Current Page Number
           * @description Current page number.
           * @default null
           */
          currentPageNumber: number | null;
          /**
           * Current Page Size
           * @description Number of records in the current page.
           * @default null
           */
          currentPageSize: number | null;
          /**
           * Cursor
           * @description Returned only when there are more records to be retrieved. Repeat the API call and pass this cursor value in the request to retrieve the next page of records.
           * @default null
           */
          cursor: string | null;
          /**
           * Total Records
           * @description Total number of records.
           * @default null
           */
          totalRecords: number | null;
      } | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_RETRIEVE_DATA_FOR_A_SPECIFIC_CALL_V2_CALLS_ID tool input.
 */
type GONG_RETRIEVE_DATA_FOR_A_SPECIFIC_CALL_V2_CALLS_ID_INPUT = {
  /**
   * Id
   * @description Gong"s unique numeric identifier for the call (up to 20 digits).
   */
  id?: string;
};

/**
 * Type of GONG's GONG_RETRIEVE_DATA_FOR_A_SPECIFIC_CALL_V2_CALLS_ID tool output.
 */
type GONG_RETRIEVE_DATA_FOR_A_SPECIFIC_CALL_V2_CALLS_ID_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Call
       * @description call's metadata.
       * @default null
       */
      call: {
          /**
           * Calendar Event Id
           * @description The Id of the meeting in Google or Outlook Calendar.
           * @default null
           */
          calendarEventId: string | null;
          /**
           * Client Unique Id
           * @description The call's unique identifier in the origin recording system (typically a telephony recording system). The identifier is provided to Gong during the call creation via the Public API or through telephony systems integrations.
           * @default null
           */
          clientUniqueId: string | null;
          /**
           * Custom Data
           * @description Metadata as was provided to Gong during the call creation via the Public API.
           * @default null
           */
          customData: string | null;
          /**
           * Direction
           * @description Call direction.
           * @default null
           * @enum {string|null}
           */
          direction: "Inbound" | "Outbound" | "Conference" | "Unknown" | null;
          /**
           * Duration
           * @description The duration of the call, in seconds.
           * @default null
           */
          duration: number | null;
          /**
           * Id
           * @description Gong's unique numeric identifier for the call (up to 20 digits).
           * @default null
           */
          id: string | null;
          /**
           * Is Private
           * @description If the call is private.
           * @default null
           */
          isPrivate: boolean | null;
          /**
           * Language
           * @description The language codes (as defined by ISO-639-2B). E.g., eng, fre, spa, ger, and ita. Also used are und (unsupported language), and zxx (not enough speech content for identification).
           * @default null
           */
          language: string | null;
          /**
           * Media
           * @description Media type
           * @default null
           * @enum {string|null}
           */
          media: "Video" | "Audio" | null;
          /**
           * Meeting Url
           * @description The meeting provider URL on which the web conference was recorded.
           * @default null
           */
          meetingUrl: string | null;
          /**
           * Primary User Id
           * @description The primary user ID of the team member who hosted the call.
           * @default null
           */
          primaryUserId: string | null;
          /**
           * Purpose
           * @description The purpose of the call.
           * @default null
           */
          purpose: string | null;
          /**
           * Scheduled
           * Format: date-time
           * @description Scheduled date and time of the call in the ISO-8601 format (e.g., '2018-02-18T02:30:00-07:00' or '2018-02-18T08:00:00Z', where Z stands for UTC).
           * @default null
           */
          scheduled: string | null;
          /**
           * Scope
           * @description The scope of the call: 'internal' if all the participants are from the company, 'external' if some participants are not from the company, or 'unknown' if the scope is unknown.
           * @default null
           * @enum {string|null}
           */
          scope: "Internal" | "External" | "Unknown" | null;
          /**
           * Sdr Disposition
           * @description The SDR disposition of the call. This can be an automated value provided by the provider, or manually entered by the rep.
           * @default null
           */
          sdrDisposition: string | null;
          /**
           * Started
           * Format: date-time
           * @description The date and time when the call was recorded in the ISO-8601 format (e.g., '2018-02-18T02:30:00-07:00' or '2018-02-18T08:00:00Z', where Z stands for UTC).
           * @default null
           */
          started: string | null;
          /**
           * System
           * @description The system with which the call was carried out (e.g., WebEx, ShoreTel, etc.).
           * @default null
           */
          system: string | null;
          /**
           * Title
           * @description The title of the call.
           * @default null
           */
          title: string | null;
          /**
           * Url
           * @description The URL to the page in the Gong web application where the call is available.
           * @default null
           */
          url: string | null;
          /**
           * Workspace Id
           * @description Gong's unique numeric identifier for the call's workspace (up to 20 digits).
           * @default null
           */
          workspaceId: string | null;
      } | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_RETRIEVE_DATA_PRIVACY_INFO_FOR_EMAIL_ADDRESS tool input.
 */
type GONG_RETRIEVE_DATA_PRIVACY_INFO_FOR_EMAIL_ADDRESS_INPUT = {
  /**
   * Email Address
   * @description The email address.
   */
  emailAddress?: string;
};

/**
 * Type of GONG's GONG_RETRIEVE_DATA_PRIVACY_INFO_FOR_EMAIL_ADDRESS tool output.
 */
type GONG_RETRIEVE_DATA_PRIVACY_INFO_FOR_EMAIL_ADDRESS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Calls
       * @description Related calls.
       * @default null
       */
      calls: {
          /**
           * External Systems
           * @description A list of links to external systems such as CRM, Telephony System, Case Management, etc.
           * @default null
           */
          externalSystems: {
              /**
               * Objects
               * @description List of objects within the external system.
               * @default null
               */
              objects: {
                  /**
                   * External Id
                   * @description External ID.
                   * @default null
                   */
                  externalId: string | null;
                  /**
                   * ObjectType
                   * @description Object Type.
                   * @default null
                   * @enum {string|null}
                   */
                  objectType: "Conversation" | "Task" | null;
              }[] | null;
              /**
               * System
               * @description External system name.
               * @default null
               * @enum {string|null}
               */
              system: "Salesforce" | "HubSpot" | "MicrosoftDynamic" | "Generic" | null;
          }[] | null;
          /**
           * Id
           * @description Gong's unique numeric identifier for the call (up to 20 digits).
           * @default null
           */
          id: string | null;
          /**
           * Status
           * @description Call status
           * @default null
           */
          status: string | null;
      }[] | null;
      /**
       * Customer Data
       * @description A list of links to data from external systems (such as CRM, Telephony System, Case Management, etc.) that reference the email address and that Gong stores.
       * @default null
       */
      customerData: {
          /**
           * Objects
           * @description List of objects in the external system.
           * @default null
           */
          objects: {
              /**
               * External Id
               * @description External ID.
               * @default null
               */
              externalId: string | null;
              /**
               * Fields
               * @description Object fields.
               * @default null
               */
              fields: {
                  /**
                   * Name
                   * @description Field name. For Account supported fields are: Name, Website, Industry and all the custom fields. For Opportunity supported fields are Name, LeadSource, Type, StageName, Probability, Amount, CloseDate and all the custom fields.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Value
                   * @description Field value
                   * @default null
                   */
                  value: {
                      [key: string]: unknown;
                  } | null;
              }[] | null;
              /**
               * Id
               * @description Gong's unique numeric identifier (up to 20 digits) for the Lead or Contact.
               * @default null
               */
              id: string | null;
              /**
               * Mirror Id
               * @description Crm Mirror ID.
               * @default null
               */
              mirrorId: string | null;
              /**
               * ObjectType1
               * @description Object Type.
               * @default null
               * @enum {string|null}
               */
              objectType: "Lead" | "Contact" | null;
          }[] | null;
          /**
           * System
           * @description External system name.
           * @default null
           * @enum {string|null}
           */
          system: "Salesforce" | "HubSpot" | "MicrosoftDynamic" | "Generic" | null;
      }[] | null;
      /**
       * Customer Engagement
       * @description A list of customer's engagement (such as viewing external share call)
       * @default null
       */
      customerEngagement: {
          /**
           * Content Id
           * @description Event content id
           * @default null
           */
          contentId: string | null;
          /**
           * Content Url
           * @description Event content url
           * @default null
           */
          contentUrl: string | null;
          /**
           * Event Name
           * @description Event name
           * @default null
           */
          eventName: string | null;
          /**
           * EventType
           * @description Event type
           * @default null
           * @enum {string|null}
           */
          eventType: "contentShared" | "contentViewed" | "customEvent" | "digitalInteraction" | null;
          /**
           * Reporting System
           * @description Event reporting system
           * @default null
           */
          reportingSystem: string | null;
          /**
           * Source Event Id
           * @description Source event Id
           * @default null
           */
          sourceEventId: string | null;
          /**
           * Timestamp
           * Format: date-time
           * @description The date and time the event occurred in the ISO-8601 format, for example: '2024-01-17T16:20:05-03:00' or '2016-02-16T03:57:04.834+05:30' or '2020-11-20T21:30:07.233692Z', where Z stands for UTC.
           * @default null
           */
          timestamp: string | null;
      }[] | null;
      /**
       * Emails
       * @description Related email messages.
       * @default null
       */
      emails: {
          /**
           * From
           * @description The sender's email address.
           * @default null
           */
          from: string | null;
          /**
           * Id
           * @description Gong's unique 32 character identifier for the email message.
           * @default null
           */
          id: string | null;
          /**
           * Mailbox
           * @description The mailbox from which the email was retrieved.
           * @default null
           */
          mailbox: string | null;
          /**
           * Message Hash
           * @description Hash code of the email message.
           * @default null
           */
          messageHash: string | null;
          /**
           * Sent Time
           * @description The date and time the email message was sent in the ISO-8601 format, for example: '2024-01-17T16:20:05-03:00' or '2016-02-16T03:57:04.834+05:30' or '2020-11-20T21:30:07.233692Z', where Z stands for UTC.
           * @default null
           */
          sentTime: string | null;
      }[] | null;
      /**
       * Meetings
       * @description Related meetings.
       * @default null
       */
      meetings: {
          /**
           * Id
           * @description Gong's unique identifier for the meeting.
           * @default null
           */
          id: string | null;
      }[] | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_RETRIEVE_FILTERED_CALL_DETAILS tool input.
 */
type GONG_RETRIEVE_FILTERED_CALL_DETAILS_INPUT = {
  /**
   * Content Selector  Context
   * @description If "Basic", add links to external systems (context objects) such as CRM, Telephony System, Case Management. If "Extended" include also data (context fields) for these links. Default value "None"
   * @enum {string}
   */
  contentSelector__context?: "Basic" | "Extended" | "None";
  /**
   * Content Selector  Context Timing
   * @description Timing for the context data. The field is optional and can contain either "Now" or "TimeOfCall" or both. The default value is ["Now"]. Can be provided only when the context field is set to "Extended"
   */
  contentSelector__contextTiming?: string[];
  /**
   * Content Selector  Exposed Fields  Collaboration  Public Comments
   * @description If true, add public comments made for this call
   */
  contentSelector__exposedFields__collaboration__publicComments?: boolean;
  /**
   * Content Selector  Exposed Fields  Content  Brief
   * @description When true, returns the spotlight call brief.
   */
  contentSelector__exposedFields__content__brief?: boolean;
  /**
   * Content Selector  Exposed Fields  Content  Call Outcome
   * @description When true, returns the outcome of the call.
   */
  contentSelector__exposedFields__content__callOutcome?: boolean;
  /**
   * Content Selector  Exposed Fields  Content  Highlights
   * @description When true, returns the call highlights.
   */
  contentSelector__exposedFields__content__highlights?: boolean;
  /**
   * Content Selector  Exposed Fields  Content  Key Points
   * @description When true, returns the key points of the call.
   */
  contentSelector__exposedFields__content__keyPoints?: boolean;
  /**
   * Content Selector  Exposed Fields  Content  Outline
   * @description When true, returns the call outline.
   */
  contentSelector__exposedFields__content__outline?: boolean;
  /**
   * Content Selector  Exposed Fields  Content  Points Of Interest
   * @description If true, add call points of interest
   */
  contentSelector__exposedFields__content__pointsOfInterest?: boolean;
  /**
   * Content Selector  Exposed Fields  Content  Structure
   * @description If true, add call agenda, if available
   */
  contentSelector__exposedFields__content__structure?: boolean;
  /**
   * Content Selector  Exposed Fields  Content  Topics
   * @description If true, add duration of call topics
   */
  contentSelector__exposedFields__content__topics?: boolean;
  /**
   * Content Selector  Exposed Fields  Content  Tracker Occurrences
   * @description If true, the API will return the timing and speaker ID of each occurrence of a tracker (in addition to other tracker data). This functionality must be used in combination with the "trackers" field. The occurrence data is available only for the calls recorded since Jan 1, 2023, contact Gong support if a backfill of this data is required.
   */
  contentSelector__exposedFields__content__trackerOccurrences?: boolean;
  /**
   * Content Selector  Exposed Fields  Content  Trackers
   * @description If true, returns smart tracker and keyword tracker information for the call.
   */
  contentSelector__exposedFields__content__trackers?: boolean;
  /**
   * Content Selector  Exposed Fields  Interaction  Person Interaction Stats
   * @description If true, add statistics for the host of the call.
   */
  contentSelector__exposedFields__interaction__personInteractionStats?: boolean;
  /**
   * Content Selector  Exposed Fields  Interaction  Questions
   * @description If true, add question counts
   */
  contentSelector__exposedFields__interaction__questions?: boolean;
  /**
   * Content Selector  Exposed Fields  Interaction  Speakers
   * @description If true, add the time each participant spoke.
   */
  contentSelector__exposedFields__interaction__speakers?: boolean;
  /**
   * Content Selector  Exposed Fields  Interaction  Video
   * @description If true, add video statistics
   */
  contentSelector__exposedFields__interaction__video?: boolean;
  /**
   * Content Selector  Exposed Fields  Media
   * @description If true and exist, add audio url and video url of the call. The urls will be available for 8 hours.
   */
  contentSelector__exposedFields__media?: boolean;
  /**
   * Content Selector  Exposed Fields  Parties
   * @description If true, add information about the parties of the call
   */
  contentSelector__exposedFields__parties?: boolean;
  /**
   * Cursor
   * @description When paging is needed, provide the value supplied by the previous API call to bring the following page of records.
   */
  cursor?: string;
  /**
   * Filter  Call Ids
   * @description List of calls Ids to be filtered. If not supplied, returns all calls between fromDateTime and toDateTime.
   */
  filter__callIds?: string[];
  /**
   * Filter  From Date Time
   * @description Date and time (in ISO-8601 format: "2018-02-18T02:30:00-07:00" or "2018-02-18T08:00:00Z", where Z stands for UTC) from which to list recorded calls. Returns calls that started on or after the specified date and time. If not provided, list starts with earliest call. The date applies to call start time.
   */
  filter__fromDateTime?: string;
  /**
   * Filter  Primary User Ids
   * @description An optional list of user identifiers, if supplied the API will return only the calls hosted by the specified users. The identifiers in this field match the primaryUserId field of the calls.
   */
  filter__primaryUserIds?: string[];
  /**
   * Filter  To Date Time
   * @description Date and time (in ISO-8601 format: "2018-02-18T02:30:00-07:00" or "2018-02-18T08:00:00Z", where Z stands for UTC) until which to list recorded calls. Returns calls that started up to but excluding specified date and time. If not provided, list ends with most recent call. The date applies to call start time.
   */
  filter__toDateTime?: string;
  /**
   * Filter  Workspace Id
   * @description Optional Workspace identifier, if supplied the API will return only the calls belonging to this workspace.
   */
  filter__workspaceId?: string;
};

/**
 * Type of GONG's GONG_RETRIEVE_FILTERED_CALL_DETAILS tool output.
 */
type GONG_RETRIEVE_FILTERED_CALL_DETAILS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Calls
       * @description A list with one entry per call.
       * @default null
       */
      calls: {
          /**
           * Collaboration
           * @description Collaboration information added to the call
           * @default null
           */
          collaboration: {
              /**
               * Public Comments
               * @description A list of public comments.
               * @default null
               */
              publicComments: {
                  /**
                   * Audio End Time
                   * @description The number of seconds from the beginning of the call that the comment ends refers to.
                   * @default null
                   */
                  audioEndTime: number | null;
                  /**
                   * Audio Start Time
                   * @description The number of seconds from the beginning of the call that the comment start refers to.
                   * @default null
                   */
                  audioStartTime: number | null;
                  /**
                   * Comment
                   * @description The comment itself. The comment may contains person tagging in this format @[user name](user Id)
                   * @default null
                   */
                  comment: string | null;
                  /**
                   * Commenter User Id
                   * @description Unique identifier of the user who wrote the comment.
                   * @default null
                   */
                  commenterUserId: string | null;
                  /**
                   * During Call
                   * @description True if the comment was written during the call, false if it was posted after the call.
                   * @default null
                   */
                  duringCall: boolean | null;
                  /**
                   * Id
                   * @description Unique identifier of the comment within the Gong's system.
                   * @default null
                   */
                  id: string | null;
                  /**
                   * In Reply To
                   * @description The unique identifier of the original comment in case the current comment is a reply to the original one.
                   * @default null
                   */
                  inReplyTo: string | null;
                  /**
                   * Posted
                   * Format: date-time
                   * @description The date and time in the ISO-8601 format (e.g., '2018-02-18T02:30:00-07:00' or '2018-02-18T08:00:00Z', where Z stands for UTC); in which the comment was posted.
                   * @default null
                   */
                  posted: string | null;
              }[] | null;
          } | null;
          /**
           * Content
           * @description Analysis of the interaction content.
           * @default null
           */
          content: {
              /**
               * Brief
               * @description The brief of the call. Returned when it is available and contentSelector.exposedFields.content.brief = true.
               * @default null
               */
              brief: string | null;
              /**
               * CallOutcome
               * @description The outcome of the call, as automatically set by Gong AI. Returned when it is available and contentSelector.exposedFields.content.callOutcome = true.
               * @default null
               */
              callOutcome: {
                  /**
                   * Category
                   * @description The category of the call outcome, as automatically set by Gong AI
                   * @default null
                   */
                  category: string | null;
                  /**
                   * Id
                   * @description The ID of the call outcome, as automatically set by Gong AI
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Name
                   * @description The name of the call outcome, as automatically set by Gong AI
                   * @default null
                   */
                  name: string | null;
              } | null;
              /**
               * Highlights
               * @description List of highlights of the call. Returned when it is available and contentSelector.exposedFields.content.highlights = true.
               * @default null
               */
              highlights: {
                  /**
                   * Items
                   * @description List of highlight items of the call in this section.
                   * @default null
                   */
                  items: {
                      /**
                       * Start Times
                       * @description List of starting times of the highlights section item, in seconds from the start of the call.
                       * @default null
                       */
                      startTimes: number[] | null;
                      /**
                       * Text
                       * @description The text of the highlights section item.
                       * @default null
                       */
                      text: string | null;
                  }[] | null;
                  /**
                   * Title
                   * @description The title of the highlights section.
                   * @default null
                   */
                  title: string | null;
              }[] | null;
              /**
               * Key Points
               * @description List of key points of the call. Returned when it is available and contentSelector.exposedFields.content.keyPoints = true.
               * @default null
               */
              keyPoints: {
                  /**
                   * Text
                   * @description The text of the key point.
                   * @default null
                   */
                  text: string | null;
              }[] | null;
              /**
               * Outline
               * @description Outline of the call, divided into sections. Returned when it is available and contentSelector.exposedFields.content.outline = true.
               * @default null
               */
              outline: {
                  /**
                   * Duration
                   * @description The duration of this section, in seconds.
                   * @default null
                   */
                  duration: number | null;
                  /**
                   * Items
                   * @description List of items of this section.
                   * @default null
                   */
                  items: {
                      /**
                       * Start Time
                       * @description The starting time of this section item, in seconds from the start of the call.
                       * @default null
                       */
                      startTime: number | null;
                      /**
                       * Text
                       * @description The text of this section item.
                       * @default null
                       */
                      text: string | null;
                  }[] | null;
                  /**
                   * Section
                   * @description The name of this section of the call.
                   * @default null
                   */
                  section: string | null;
                  /**
                   * Start Time
                   * @description The starting time of this section, in seconds, from the start of the call.
                   * @default null
                   */
                  startTime: number | null;
              }[] | null;
              /**
               * PointsOfInterest
               * @description Points of interest of the call.
               * @default null
               */
              pointsOfInterest: {
                  /**
                   * Action Items
                   * @default null
                   */
                  actionItems: {
                      /**
                       * Snippet
                       * @description The snippet including the action.
                       * @default null
                       */
                      snippet: string | null;
                      /**
                       * Snippet End Time
                       * @description The number of seconds from the beginning of the call that the snippet end refers to.
                       * @default null
                       */
                      snippetEndTime: number | null;
                      /**
                       * Snippet Start Time
                       * @description The number of seconds from the beginning of the call that the snippet start refers to.
                       * @default null
                       */
                      snippetStartTime: number | null;
                      /**
                       * Speaker Id
                       * @description Unique ID of the participant in the call.
                       * @default null
                       */
                      speakerID: string | null;
                  }[] | null;
              } | null;
              /**
               * Structure
               * @description A list of the agenda of each part of the call.
               * @default null
               */
              structure: {
                  /**
                   * Duration
                   * @description The duration of this part of the call
                   * @default null
                   */
                  duration: number | null;
                  /**
                   * Name
                   * @description The agenda name
                   * @default null
                   */
                  name: string | null;
              }[] | null;
              /**
               * Topics
               * @default null
               */
              topics: {
                  /**
                   * Duration
                   * @description The total time, in seconds, spent on this topic within the call.
                   * @default null
                   */
                  duration: number | null;
                  /**
                   * Name
                   * @description The name of the topic (e.g., Pricing).
                   * @default null
                   */
                  name: string | null;
              }[] | null;
              /**
               * Trackers
               * @default null
               */
              trackers: {
                  /**
                   * Count
                   * @description The number of times words in this Tracker occurred in the call.
                   * @default null
                   */
                  count: number | null;
                  /**
                   * Id
                   * @description The unique ID of the Tracker.
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Name
                   * @description The name of the Tracker (e.g., Stores).
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Occurrences
                   * @description Details when the smart or keyword tracker term came up in the call. The list does not specify each phrase defined in the tracker, rather it lists when any term relevant to the tracker was mentioned. Empty when keyword trackers are set to display each term in the tracker separately.
                   * @default null
                   */
                  occurrences: {
                      /**
                       * Speaker Id
                       * @description Unique ID of the speaker in the call who said the tracker term. Same as the speakerID in the "parties" field and in the transcript.
                       * @default null
                       */
                      speakerId: string | null;
                      /**
                       * Start Time
                       * @description The number of seconds from the beginning of the call when the tracker phrase was captured.
                       * @default null
                       */
                      startTime: number | null;
                  }[] | null;
                  /**
                   * Phrases
                   * @description Details when each specific phrase defined in the keyword tracker came up in the call. Smart trackers are not listed.
                   * @default null
                   */
                  phrases: {
                      /**
                       * Count
                       * @description The number of times this phrase was mentioned in the call.
                       * @default null
                       */
                      count: number | null;
                      /**
                       * Occurrences
                       * @description Lists when each keyword tracker phrase was mentioned in the call.
                       * @default null
                       */
                      occurrences: {
                          /**
                           * Speaker Id
                           * @description Unique ID of the speaker in the call who said the tracker term. Same as the speakerID in the "parties" field and in the transcript.
                           * @default null
                           */
                          speakerId: string | null;
                          /**
                           * Start Time
                           * @description The number of seconds from the beginning of the call when the tracker phrase was captured.
                           * @default null
                           */
                          startTime: number | null;
                      }[] | null;
                      /**
                       * Phrase
                       * @description The specific phrase within the tracker (e.g., Walmart).
                       * @default null
                       */
                      phrase: string | null;
                  }[] | null;
                  /**
                   * Type
                   * @description The type of the tracker - Keyword or Smart.
                   * @default null
                   * @enum {string|null}
                   */
                  type: "KEYWORD" | "SMART" | null;
              }[] | null;
          } | null;
          /**
           * Context
           * @description A list of the agenda of each part of the call.
           * @default null
           */
          context: {
              /**
               * Objects
               * @description List of objects within the external system
               * @default null
               */
              objects: {
                  /**
                   * Fields
                   * @default null
                   */
                  fields: {
                      /**
                       * Name
                       * @description Field name. For Account supported fields are: Name, Website, Industry and all the custom fields. For Opportunity supported fields are Name, LeadSource, Type, StageName, Probability, Amount, CloseDate and all the custom fields.
                       * @default null
                       */
                      name: string | null;
                      /**
                       * Value
                       * @description Field value
                       * @default null
                       */
                      value: {
                          [key: string]: unknown;
                      } | null;
                  }[] | null;
                  /**
                   * Object Id
                   * @description Object ID
                   * @default null
                   */
                  objectId: string | null;
                  /**
                   * ObjectType
                   * @description Object Type. e.g Opportunity.
                   * @default null
                   * @enum {string|null}
                   */
                  objectType: "Opportunity" | "Account" | null;
                  /**
                   * Timing
                   * @description Timing of object
                   * @default null
                   * @enum {string|null}
                   */
                  timing: "Now" | "TimeOfCall" | null;
              }[] | null;
              /**
               * System
               * @description External system name. e.g. Salesforce
               * @default null
               * @enum {string|null}
               */
              system: "Salesforce" | "HubSpot" | "MicrosoftDynamic" | "Generic" | null;
          }[] | null;
          /**
           * Interaction
           * @description Metrics collected around the interaction during the call.
           * @default null
           */
          interaction: {
              /**
               * Interaction Stats
               * @description A list of interaction statistics. Applicable values: 'Talk Ratio', 'Longest Monologue', 'Longest Customer Story', 'Interactivity', 'Patience'.
               * @default null
               */
              interactionStats: {
                  /**
                   * Name
                   * @description Stat name
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Value
                   * @description Stat measurement
                   * @default null
                   */
                  value: number | null;
              }[] | null;
              /**
               * Questions
               * @description Question counts of the call.
               * @default null
               */
              questions: {
                  /**
                   * Company Count
                   * @description The number of questions asked by company speakers.
                   * @default null
                   */
                  companyCount: number | null;
                  /**
                   * Non Company Count
                   * @description The number of questions asked by non-company speakers.
                   * @default null
                   */
                  nonCompanyCount: number | null;
              } | null;
              /**
               * Speakers
               * @description A list of the talk duration per speaker.
               * @default null
               */
              speakers: {
                  /**
                   * Id
                   * @description Unique ID of the participant in the call.
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Talk Time
                   * @description Talk duration in seconds
                   * @default null
                   */
                  talkTime: number | null;
                  /**
                   * User Id
                   * @description User Id within the Gong system
                   * @default null
                   */
                  userId: string | null;
              }[] | null;
              /**
               * Video
               * @description A list of video statistics about what's presented and for how long.
               * @default null
               */
              video: {
                  /**
                   * Duration
                   * @description Total video segments duration in seconds.
                   * @default null
                   */
                  duration: number | null;
                  /**
                   * Name
                   * @description Video segment type. Can have the values: 'Browser', 'Presentation', 'WebcamPrimaryUser', 'WebcamNonCompany', and 'Webcam'.
                   *
                   *     <b>'Browser'</b>: When the video segment shows a web browser.
                   *
                   *     <b>'Presentation'</b>: When the video segment shows a presentation (such as PowerPoint).
                   *
                   *     <b>'WebcamPrimaryUser'</b>: When the video segment shows the webcam of the primary user.
                   *
                   *     <b>'WebcamNonCompany'</b>: When the video segment shows webcam speakers that gong has identified as being non-company.
                   *
                   *     <b>'Webcam'</b>: When the video segment shows any webcam.
                   * @default null
                   */
                  name: string | null;
              }[] | null;
          } | null;
          /**
           * Media1
           * @description The media urls of the call.
           * @default null
           */
          media: {
              /**
               * Audio Url
               * @description If true and exist, add audio url of the call. The url will be available for 8 hours.
               * @default null
               */
              audioUrl: string | null;
              /**
               * Video Url
               * @description If true and exist, add video url of the call. The url will be available for 8 hours.
               * @default null
               */
              videoUrl: string | null;
          } | null;
          /**
           * MetaData
           * @description call's metadata.
           * @default null
           */
          metaData: {
              /**
               * Calendar Event Id
               * @description The Id of the meeting in Google or Outlook Calendar.
               * @default null
               */
              calendarEventId: string | null;
              /**
               * Client Unique Id
               * @description The call's unique identifier in the origin recording system (typically a telephony recording system). The identifier is provided to Gong during the call creation via the Public API or through telephony systems integrations.
               * @default null
               */
              clientUniqueId: string | null;
              /**
               * Custom Data
               * @description Metadata as was provided to Gong during the call creation via the Public API.
               * @default null
               */
              customData: string | null;
              /**
               * Direction
               * @description Call direction.
               * @default null
               * @enum {string|null}
               */
              direction: "Inbound" | "Outbound" | "Conference" | "Unknown" | null;
              /**
               * Duration
               * @description The duration of the call, in seconds.
               * @default null
               */
              duration: number | null;
              /**
               * Id
               * @description Gong's unique numeric identifier for the call (up to 20 digits).
               * @default null
               */
              id: string | null;
              /**
               * Is Private
               * @description If the call is private.
               * @default null
               */
              isPrivate: boolean | null;
              /**
               * Language
               * @description The language codes (as defined by ISO-639-2B). E.g., eng, fre, spa, ger, and ita. Also used are und (unsupported language), and zxx (not enough speech content for identification).
               * @default null
               */
              language: string | null;
              /**
               * Media
               * @description Media type
               * @default null
               * @enum {string|null}
               */
              media: "Video" | "Audio" | null;
              /**
               * Meeting Url
               * @description The meeting provider URL on which the web conference was recorded.
               * @default null
               */
              meetingUrl: string | null;
              /**
               * Primary User Id
               * @description The primary user ID of the team member who hosted the call.
               * @default null
               */
              primaryUserId: string | null;
              /**
               * Purpose
               * @description The purpose of the call.
               * @default null
               */
              purpose: string | null;
              /**
               * Scheduled
               * Format: date-time
               * @description Scheduled date and time of the call in the ISO-8601 format (e.g., '2018-02-18T02:30:00-07:00' or '2018-02-18T08:00:00Z', where Z stands for UTC).
               * @default null
               */
              scheduled: string | null;
              /**
               * Scope
               * @description The scope of the call: 'internal' if all the participants are from the company, 'external' if some participants are not from the company, or 'unknown' if the scope is unknown.
               * @default null
               * @enum {string|null}
               */
              scope: "Internal" | "External" | "Unknown" | null;
              /**
               * Sdr Disposition
               * @description The SDR disposition of the call. This can be an automated value provided by the provider, or manually entered by the rep.
               * @default null
               */
              sdrDisposition: string | null;
              /**
               * Started
               * Format: date-time
               * @description The date and time when the call was recorded in the ISO-8601 format (e.g., '2018-02-18T02:30:00-07:00' or '2018-02-18T08:00:00Z', where Z stands for UTC).
               * @default null
               */
              started: string | null;
              /**
               * System
               * @description The system with which the call was carried out (e.g., WebEx, ShoreTel, etc.).
               * @default null
               */
              system: string | null;
              /**
               * Title
               * @description The title of the call.
               * @default null
               */
              title: string | null;
              /**
               * Url
               * @description The URL to the page in the Gong web application where the call is available.
               * @default null
               */
              url: string | null;
              /**
               * Workspace Id
               * @description Gong's unique numeric identifier for the call's workspace (up to 20 digits).
               * @default null
               */
              workspaceId: string | null;
          } | null;
          /**
           * Parties
           * @description A list of the call's participants
           * @default null
           */
          parties: {
              /**
               * Affiliation
               * @description Whether the participant is from the company or not.
               * @default null
               * @enum {string|null}
               */
              affiliation: "Internal" | "External" | "Unknown" | null;
              /**
               * Context
               * @description A list of links to external systems such as CRM, Dialer, Case Management, etc.
               * @default null
               */
              context: {
                  /**
                   * Objects
                   * @description  List of objects within the external system
                   * @default null
                   */
                  objects: {
                      /**
                       * Fields
                       * @description Object fields
                       * @default null
                       */
                      fields: {
                          /**
                           * Name
                           * @description Field name. All custom fields are supported.
                           * @default null
                           */
                          name: string | null;
                          /**
                           * Value
                           * @description Object value
                           * @default null
                           */
                          value: {
                              [key: string]: unknown;
                          } | null;
                      }[] | null;
                      /**
                       * Object Id
                       * @description Object ID
                       * @default null
                       */
                      objectId: string | null;
                      /**
                       * ObjectType1
                       * @description Object Type. e.g. Lead
                       * @default null
                       * @enum {string|null}
                       */
                      objectType: "Contact" | "User" | "Lead" | null;
                      /**
                       * Timing
                       * @description Timing of object
                       * @default null
                       * @enum {string|null}
                       */
                      timing: "Now" | "TimeOfCall" | null;
                  }[] | null;
                  /**
                   * System
                   * @description External system name. e.g. Salesforce
                   * @default null
                   * @enum {string|null}
                   */
                  system: "Salesforce" | "HubSpot" | "MicrosoftDynamic" | "Generic" | null;
              }[] | null;
              /**
               * Email Address
               * @description Email address.
               * @default null
               */
              emailAddress: string | null;
              /**
               * Id
               * @description Unique ID of the participant in the call.
               * @default null
               */
              id: string | null;
              /**
               * Methods
               * @description Whether the participant was invited to the meeting or only attended the call.
               * @default null
               */
              methods: string[] | null;
              /**
               * Name
               * @description The name of the participant.
               * @default null
               */
              name: string | null;
              /**
               * Phone Number
               * @description The phone number of the participant.
               * @default null
               */
              phoneNumber: string | null;
              /**
               * Speaker Id
               * @description Unique ID of a participant that spoke in the call. References to this id will appear in the '/v2/calls/transcript' endpoint response.
               * @default null
               */
              speakerId: string | null;
              /**
               * Title
               * @description The job title of the participant
               * @default null
               */
              title: string | null;
              /**
               * User Id
               * @description The user ID of the participant within the Gong system, if the participant exists in the system.
               * @default null
               */
              userId: string | null;
          }[] | null;
      }[] | null;
      /**
       * Records
       * @description Information about the number of records that match the requested filter.
       * @default null
       */
      records: {
          /**
           * Current Page Number
           * @description Current page number.
           * @default null
           */
          currentPageNumber: number | null;
          /**
           * Current Page Size
           * @description Number of records in the current page.
           * @default null
           */
          currentPageSize: number | null;
          /**
           * Cursor
           * @description Returned only when there are more records to be retrieved. Repeat the API call and pass this cursor value in the request to retrieve the next page of records.
           * @default null
           */
          cursor: string | null;
          /**
           * Total Records
           * @description Total number of records.
           * @default null
           */
          totalRecords: number | null;
      } | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_RETRIEVE_LIBRARY_FOLDERS_V2_LIBRARY_FOLDERS tool input.
 */
type GONG_RETRIEVE_LIBRARY_FOLDERS_V2_LIBRARY_FOLDERS_INPUT = {
  /**
   * Workspace Id
   * @description Workspace identifier. We will retrieve folders which are related to this specific workspace.
   */
  workspaceId?: string;
};

/**
 * Type of GONG's GONG_RETRIEVE_LIBRARY_FOLDERS_V2_LIBRARY_FOLDERS tool output.
 */
type GONG_RETRIEVE_LIBRARY_FOLDERS_V2_LIBRARY_FOLDERS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Folders
       * @description A list, in which each item specifies one folder.
       * @default null
       */
      folders: {
          /**
           * Created By
           * @description Gong's unique numeric identifier for the user who added the folder.
           * @default null
           */
          createdBy: string | null;
          /**
           * Id
           * @description Gong's unique numeric identifier for a library's folder (up to 20 digits).
           * @default null
           */
          id: string | null;
          /**
           * Name
           * @description Display name of the folder.
           * @default null
           */
          name: string | null;
          /**
           * Parent Folder Id
           * @description Gong's unique numeric identifier for library's parent folder (null for root folder).
           * @default null
           */
          parentFolderId: string | null;
          /**
           * Updated
           * Format: date-time
           * @description Folder's last update time in the ISO-8601 format (e.g., '2020-03-14T05:30:00-08:00').
           * @default null
           */
          updated: string | null;
      }[] | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_RETRIEVE_LOGS_DATA_BY_TYPE_AND_TIME_RANGE_V2_LOGS tool input.
 */
type GONG_RETRIEVE_LOGS_DATA_BY_TYPE_AND_TIME_RANGE_V2_LOGS_INPUT = {
  /**
   * Cursor
   * @description When paging is needed, provide the value supplied by the previous API call to bring the following page of records.
   */
  cursor?: string;
  /**
   * From Date Time
   * @description The time from which to retrieve log records, in the ISO-8601 format (e.g., "2018-02-18T02:30:00-07:00" or "2018-02-18T08:00:00Z", where Z stands for UTC).
   */
  fromDateTime?: string;
  /**
   * Log Type
   * @description Type of logs requested.
   * @enum {string}
   */
  logType?: "AccessLog" | "ExternallySharedCallAccess" | "ExternallySharedCallPlay" | "UserActivityLog" | "UserCallPlay";
  /**
   * To Date Time
   * @description The time until which to retrieve log records, in the ISO-8601 format (e.g., "2018-02-18T02:30:00-07:00" or "2018-02-18T08:00:00Z", where Z stands for UTC); if not specified, the logs end with the latest recorded log.
   */
  toDateTime?: string;
};

/**
 * Type of GONG's GONG_RETRIEVE_LOGS_DATA_BY_TYPE_AND_TIME_RANGE_V2_LOGS tool output.
 */
type GONG_RETRIEVE_LOGS_DATA_BY_TYPE_AND_TIME_RANGE_V2_LOGS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Log Entries
       * @description A list, in which each item specifies one log.
       * @default null
       */
      logEntries: {
          /**
           * Event Time
           * @description The time in the ISO-8601 format (e.g., '2018-02-18T02:30:00-07:00' or '2018-02-18T08:00:00Z', where Z stands for UTC); when log was created.
           * @default null
           */
          eventTime: string | null;
          /**
           * Impersonator Company Id
           * @description Gong's unique numeric identifier for the impersonating user's company id (up to 20 digits), if available.
           * @default null
           */
          impersonatorCompanyId: string | null;
          /**
           * Impersonator Email Address
           * @description The email address of the impersonating user, if available.
           * @default null
           */
          impersonatorEmailAddress: string | null;
          /**
           * Impersonator Full Name
           * @description The full name of the impersonating user, if available.
           * @default null
           */
          impersonatorFullName: string | null;
          /**
           * Impersonator User Id
           * @description Gong's unique numeric identifier for the impersonating user (up to 20 digits), if available.
           * @default null
           */
          impersonatorUserId: string | null;
          /**
           * Log Record
           * @description The list of log fields and associated values. This element will be populated dynamically by the log record, depending on the type of log.
           * @default null
           */
          logRecord: {
              [key: string]: {
                  [key: string]: unknown;
              };
          } | null;
          /**
           * User Email Address
           * @description The email address of the user, if available.
           * @default null
           */
          userEmailAddress: string | null;
          /**
           * User Full Name
           * @description The full name of the user, if available.
           * @default null
           */
          userFullName: string | null;
          /**
           * User Id
           * @description Gong's unique numeric identifier for the user (up to 20 digits), if available.
           * @default null
           */
          userId: string | null;
      }[] | null;
      /**
       * Records
       * @description Information about the number of records that match the requested filter.
       * @default null
       */
      records: {
          /**
           * Current Page Number
           * @description Current page number.
           * @default null
           */
          currentPageNumber: number | null;
          /**
           * Current Page Size
           * @description Number of records in the current page.
           * @default null
           */
          currentPageSize: number | null;
          /**
           * Cursor
           * @description Returned only when there are more records to be retrieved. Repeat the API call and pass this cursor value in the request to retrieve the next page of records.
           * @default null
           */
          cursor: string | null;
          /**
           * Total Records
           * @description Total number of records.
           * @default null
           */
          totalRecords: number | null;
      } | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_RETRIEVE_MANUAL_CRM_CALL_ASSOCIATIONS tool input.
 */
type GONG_RETRIEVE_MANUAL_CRM_CALL_ASSOCIATIONS_INPUT = {
  /**
   * Cursor
   * @description When paging is needed, provide the value supplied by the previous API call to bring the following page of records.
   */
  cursor?: string;
  /**
   * From Date Time
   * @description Association time filter - only the associations made after that time will be listed. The time is in the ISO-8601 format (e.g., "2018-02-18T02:30:00-07:00" or "2018-02-18T08:00:00Z", where Z stands for UTC); if not specified all association events will be listed.
   */
  fromDateTime?: string;
};

/**
 * Type of GONG's GONG_RETRIEVE_MANUAL_CRM_CALL_ASSOCIATIONS tool output.
 */
type GONG_RETRIEVE_MANUAL_CRM_CALL_ASSOCIATIONS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Associations
       * @description A list, in which each item specifies one manual call association.
       * @default null
       */
      associations: {
          /**
           * Associated Crm Objects
           * @description List of all association objects.
           * @default null
           */
          associatedCrmObjects: {
              /**
               * Account Crm Id
               * @description CRM account Id.
               * @default null
               */
              accountCrmId: string | null;
              /**
               * Deal Crm Id
               * @description CRM deal Id, if deal/opportunity was associated.
               * @default null
               */
              dealCrmId: string | null;
          }[] | null;
          /**
           * Call Id
           * @description Gong's unique numeric identifier for the call (up to 20 digits).
           * @default null
           */
          callId: string | null;
          /**
           * Created
           * Format: date-time
           * @description The association date.
           * @default null
           */
          created: string | null;
          /**
           * User Id
           * @description The user Id who performed the association.
           * @default null
           */
          userId: string | null;
      }[] | null;
      /**
       * Records
       * @description Information about the number of records that match the requested filter.
       * @default null
       */
      records: {
          /**
           * Current Page Number
           * @description Current page number.
           * @default null
           */
          currentPageNumber: number | null;
          /**
           * Current Page Size
           * @description Number of records in the current page.
           * @default null
           */
          currentPageSize: number | null;
          /**
           * Cursor
           * @description Returned only when there are more records to be retrieved. Repeat the API call and pass this cursor value in the request to retrieve the next page of records.
           * @default null
           */
          cursor: string | null;
          /**
           * Total Records
           * @description Total number of records.
           * @default null
           */
          totalRecords: number | null;
      } | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_RETRIEVE_SCORECARDS_DETAILS_V2_SETTINGS_SCORECARDS tool input.
 */
type GONG_RETRIEVE_SCORECARDS_DETAILS_V2_SETTINGS_SCORECARDS_INPUT = object;

/**
 * Type of GONG's GONG_RETRIEVE_SCORECARDS_DETAILS_V2_SETTINGS_SCORECARDS tool output.
 */
type GONG_RETRIEVE_SCORECARDS_DETAILS_V2_SETTINGS_SCORECARDS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
      /**
       * Scorecards
       * @description A list, in which each item contains one scorecard.
       * @default null
       */
      scorecards: {
          /**
           * Created
           * Format: date-time
           * @description The date and time when the scorecard was created in the ISO-8601 format, for example: '2024-01-17T16:20:05-03:00' or '2016-02-16T03:57:04.834+05:30' or '2020-11-20T21:30:07.233692Z', where Z stands for UTC.
           * @default null
           */
          created: string | null;
          /**
           * Enabled
           * @description If the scorecard is enabled or not.
           * @default null
           */
          enabled: boolean | null;
          /**
           * Questions
           * @description The questions in the scorecard.
           * @default null
           */
          questions: {
              /**
               * Answer Guide
               * @description The guide for answering the question.
               * @default null
               */
              answerGuide: string | null;
              /**
               * Answer Options
               * @description The answer options in case of multi-select or single-select type question. Null otherwise.
               * @default null
               */
              answerOptions: {
                  /**
                   * Id
                   * @description The identifier of the option.
                   * @default null
                   */
                  id: number | null;
                  /**
                   * Text
                   * @description The option’s text.
                   * @default null
                   */
                  text: string | null;
              }[] | null;
              /**
               * Is Overall
               * @description If the question is the main overall question.
               * @default null
               */
              isOverall: boolean | null;
              /**
               * Max Range
               * @description The maximum value that can be selected in the answer. Null for questions with no range.
               * @default null
               */
              maxRange: number | null;
              /**
               * Min Range
               * @description The minimum value that can be selected in the answer. Null for questions with no range.
               * @default null
               */
              minRange: number | null;
              /**
               * Question Id
               * @description The identifier for the question.
               * @default null
               */
              questionId: number | null;
              /**
               * Question Revision Id
               * @description The identifier for the revision version of the question.
               * @default null
               */
              questionRevisionId: number | null;
              /**
               * Question Text
               * @description The question's text.
               * @default null
               */
              questionText: string | null;
              /**
               * Question Type
               * @description The type of question.
               * @default null
               */
              questionType: string | null;
          }[] | null;
          /**
           * ReviewMethod
           * @description The method used to review the scorecard.
           * @default null
           * @enum {string|null}
           */
          reviewMethod: "AUTOMATIC" | "MANUAL" | null;
          /**
           * Scorecard Id
           * @description The identifier of the scorecard.
           * @default null
           */
          scorecardId: number | null;
          /**
           * Scorecard Name
           * @description Scorecard name.
           * @default null
           */
          scorecardName: string | null;
          /**
           * Updated
           * Format: date-time
           * @description The date and time when the scorecard was updated in the ISO-8601 format, for example: '2024-01-17T16:20:05-03:00' or '2016-02-16T03:57:04.834+05:30' or '2020-11-20T21:30:07.233692Z', where Z stands for UTC.
           * @default null
           */
          updated: string | null;
          /**
           * Updater User Id
           * @description The user Id of the team member that updated the scorecard.
           * @default null
           */
          updaterUserId: number | null;
          /**
           * Workspace Id
           * @description Scorecard workspaceId.
           * @default null
           */
          workspaceId: number | null;
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
 * Type of GONG's GONG_RETRIEVE_TRACKER_DETAILS_V2_SETTINGS_TRACKERS tool input.
 */
type GONG_RETRIEVE_TRACKER_DETAILS_V2_SETTINGS_TRACKERS_INPUT = {
  /**
   * Workspace Id
   * @description The ID of the workspace the keyword trackers are in. When empty, all trackers in all workspaces are returned.
   */
  workspaceId?: string;
};

/**
 * Type of GONG's GONG_RETRIEVE_TRACKER_DETAILS_V2_SETTINGS_TRACKERS tool output.
 */
type GONG_RETRIEVE_TRACKER_DETAILS_V2_SETTINGS_TRACKERS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Keyword Trackers
       * @description A list of keyword trackers.
       * @default null
       */
      keywordTrackers: {
          /**
           * Affiliation
           * @description Sets whether to track the keywords when said by people affiliated to a specific company. Options are: "Anyone", "Company", "NonCompany".
           * @default null
           */
          affiliation: string | null;
          /**
           * Created
           * @description Sets the date and time the tracker was created, in the ISO-8601 format, for example: '2024-01-17T16:20:05-03:00' or '2016-02-16T03:57:04.834+05:30' or '2020-11-20T21:30:07.233692Z', where Z stands for UTC.
           * @default null
           */
          created: string | null;
          /**
           * Creator User Id
           * @description The Id of the team member who created the tracker. Null when the tracker is built-in.
           * @default null
           */
          creatorUserId: string | null;
          /**
           * Filter Query
           * @description A filter that defines which calls to include when searching for the keyword tracker. The filter is in JSON and is in the URL of the search page. Example: a filter for all outbound calls { "type": "And", "filters": [ { "type": "CallDirection", "terms": ["OUTBOUND"] } ] }
           * @default null
           */
          filterQuery: string | null;
          /**
           * Language Keywords
           * @description The words and phrases defined for the tracker. Each languagueKeywords object contains the words and phrases defined in the specified language.
           * @default null
           */
          languageKeywords: {
              /**
               * Include Related Forms
               * @description When true the tracker identifies words in different forms, for example, if the keyword is "organize", "organized" and "organizes" are also included.
               * @default null
               */
              includeRelatedForms: boolean | null;
              /**
               * Keywords
               * @description A list of words and phrases in the specified language.
               * @default null
               */
              keywords: string[] | null;
              /**
               * Language
               * @description The ISO 639-2/B language code for the language the keywords are in. When set to "mul" (ISO 639-2/B code for multiple languages), the keywords are relevant for all languages.
               * @default null
               */
              language: string | null;
          }[] | null;
          /**
           * Part Of Question
           * @description When true, only looks for the keywords when they are part of a question.
           * @default null
           */
          partOfQuestion: boolean | null;
          /**
           * Said At
           * @description Sets whether the words and phrases are tracked at the beginning, end or anytime in a call. Options are: "Anytime", "First", or "Last". For “First” and “Last” see the saidAtInterval and saidAtUnit fields to see how long to track the keywords for.
           * @default null
           */
          saidAt: string | null;
          /**
           * Said At Interval
           * @description Sets the period of time to check if the words or phrases came up in the call (according to the saidAt setting). This can be either minutes or percent depending on the value in the saidAtUnit parameter.
           * @default null
           */
          saidAtInterval: number | null;
          /**
           * Said At Unit
           * @description Sets whether the time to look for keywords is in minutes or a percentage of the call duration (according to the saidAt setting).
           * @default null
           */
          saidAtUnit: string | null;
          /**
           * Said In Topics
           * @description Sets the topics in the call the tracker terms should be picked up in.
           * @default null
           */
          saidInTopics: string[] | null;
          /**
           * Tracker Id
           * @description The unique identifier of the tracker.
           * @default null
           */
          trackerId: string | null;
          /**
           * Tracker Name
           * @description The name of the tracker.
           * @default null
           */
          trackerName: string | null;
          /**
           * Updated
           * @description The date and time the tracker settings were last updated, in the ISO-8601 format, for example: '2024-01-17T16:20:05-03:00' or '2016-02-16T03:57:04.834+05:30' or '2020-11-20T21:30:07.233692Z', where Z stands for UTC.
           * @default null
           */
          updated: string | null;
          /**
           * Updater User Id
           * @description The Id of the team member who updated the tracker. Null when the tracker is built-in.
           * @default null
           */
          updaterUserId: string | null;
          /**
           * Workspace Id
           * @description The id of the workspace the tracker is in.
           * @default null
           */
          workspaceId: string | null;
      }[] | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_RETRIEVE_TRANSCRIPTS_OF_CALLS_V2_CALLS_TRANSCRIPT tool input.
 */
type GONG_RETRIEVE_TRANSCRIPTS_OF_CALLS_V2_CALLS_TRANSCRIPT_INPUT = {
  /**
   * Cursor
   * @description When paging is needed, provide the value supplied by the previous API call to bring the following page of records.
   */
  cursor?: string;
  /**
   * Filter  Call Ids
   * @description List of calls Ids to be filtered. If not supplied, returns all calls between fromDateTime and toDateTime.
   */
  filter__callIds?: string[];
  /**
   * Filter  From Date Time
   * @description Date and time (in ISO-8601 format: "2018-02-18T02:30:00-07:00" or "2018-02-18T08:00:00Z", where Z stands for UTC) from which to list recorded calls. Returns calls that started on or after the specified date and time. If not provided, list starts with earliest call. The date applies to call start time.
   */
  filter__fromDateTime?: string;
  /**
   * Filter  To Date Time
   * @description Date and time (in ISO-8601 format: "2018-02-18T02:30:00-07:00" or "2018-02-18T08:00:00Z", where Z stands for UTC) until which to list recorded calls. Returns calls that started up to but excluding specified date and time. If not provided, list ends with most recent call. The date applies to call start time.
   */
  filter__toDateTime?: string;
  /**
   * Filter  Workspace Id
   * @description Optional Workspace identifier, if supplied the API will return only the calls belonging to this workspace.
   */
  filter__workspaceId?: string;
};

/**
 * Type of GONG's GONG_RETRIEVE_TRANSCRIPTS_OF_CALLS_V2_CALLS_TRANSCRIPT tool output.
 */
type GONG_RETRIEVE_TRANSCRIPTS_OF_CALLS_V2_CALLS_TRANSCRIPT_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Call Transcripts
       * @description A list with one entry per call.
       * @default null
       */
      callTranscripts: {
          /**
           * Call Id
           * @description Gong's unique numeric identifier for the call (up to 20 digits).
           * @default null
           */
          callId: string | null;
          /**
           * Transcript
           * @description List of monologues.
           * @default null
           */
          transcript: {
              /**
               * Sentences
               * @description A list of sentences spoken in the monologue.
               * @default null
               */
              sentences: {
                  /**
                   * End
                   * @description The end time of the sentence, in milliseconds from the start of the call.
                   * @default null
                   */
                  end: number | null;
                  /**
                   * Start
                   * @description The starting time of the sentence, in milliseconds from the start of the call.
                   * @default null
                   */
                  start: number | null;
                  /**
                   * Text
                   * @description The sentence.
                   * @default null
                   */
                  text: string | null;
              }[] | null;
              /**
               * Speaker Id
               * @description Unique ID of the speaker. Cross-reference this with the 'speakerId' field of objects in the 'parties' array returned from endpoint '/v2/calls/extensive' to identify the participant.
               * @default null
               */
              speakerId: string | null;
              /**
               * Topic
               * @description The name of the topic.
               * @default null
               */
              topic: string | null;
          }[] | null;
      }[] | null;
      /**
       * Records
       * @description Information about the number of records that match the requested filter.
       * @default null
       */
      records: {
          /**
           * Current Page Number
           * @description Current page number.
           * @default null
           */
          currentPageNumber: number | null;
          /**
           * Current Page Size
           * @description Number of records in the current page.
           * @default null
           */
          currentPageSize: number | null;
          /**
           * Cursor
           * @description Returned only when there are more records to be retrieved. Repeat the API call and pass this cursor value in the request to retrieve the next page of records.
           * @default null
           */
          cursor: string | null;
          /**
           * Total Records
           * @description Total number of records.
           * @default null
           */
          totalRecords: number | null;
      } | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_RETRIEVE_USERS_FROM_PERMISSION_PROFILE tool input.
 */
type GONG_RETRIEVE_USERS_FROM_PERMISSION_PROFILE_INPUT = {
  /**
   * Profile Id
   * @description Permission profile identifier.
   */
  profileId?: string;
};

/**
 * Type of GONG's GONG_RETRIEVE_USERS_FROM_PERMISSION_PROFILE tool output.
 */
type GONG_RETRIEVE_USERS_FROM_PERMISSION_PROFILE_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
      /**
       * Users
       * @description A list, in which each item specifies a user attached to the permission profile.
       * @default null
       */
      users: {
          /**
           * Email Address
           * @description The email address of the Gong user.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Full Name
           * @description The full name of the Gong user.
           * @default null
           */
          fullName: string | null;
          /**
           * Id
           * @description Gong's unique numeric identifier for the user (up to 20 digits).
           * @default null
           */
          id: string | null;
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
 * Type of GONG's GONG_RETRIEVE_USER_SETTINGS_HISTORY tool input.
 */
type GONG_RETRIEVE_USER_SETTINGS_HISTORY_INPUT = {
  /**
   * Id
   * @description Gong"s unique numeric identifier for the user (up to 20 digits).
   */
  id?: string;
};

/**
 * Type of GONG's GONG_RETRIEVE_USER_SETTINGS_HISTORY tool output.
 */
type GONG_RETRIEVE_USER_SETTINGS_HISTORY_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
      /**
       * User Settings History
       * @description User's settings history.
       * @default null
       */
      userSettingsHistory: {
          /**
           * Setting
           * @description The user capability that was changed
           * @default null
           * @enum {string|null}
           */
          setting: "webConferencesRecorded" | "preventWebConferenceRecording" | "emailsImported" | "preventEmailImport" | "active" | "nonRecordedMeetingsImported" | "gongConnectEnabled" | "callsImported" | "interviewsRecorded" | "preventInterviewRecording" | null;
          /**
           * Time
           * @description The date and time the action was set, in the ISO-8601 format (e.g., '2018-02-18T02:30:00-07:00' or '2018-02-18T08:00:00Z', where Z stands for UTC).
           * @default null
           */
          time: string | null;
          /**
           * Value
           * @description The new value that was set
           * @default null
           */
          value: boolean | null;
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
 * Type of GONG's GONG_RETRIEVE_USER_V2_USERS_ID tool input.
 */
type GONG_RETRIEVE_USER_V2_USERS_ID_INPUT = {
  /**
   * Id
   * @description Gong"s unique numeric identifier for the user (up to 20 digits).
   */
  id?: string;
};

/**
 * Type of GONG's GONG_RETRIEVE_USER_V2_USERS_ID tool output.
 */
type GONG_RETRIEVE_USER_V2_USERS_ID_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
      /**
       * User
       * @description User's metadata.
       * @default null
       */
      user: {
          /**
           * Active
           * @description True if the user is active, false if not.
           * @default null
           */
          active: boolean | null;
          /**
           * Created
           * @description Creation time in the ISO-8601 format (e.g., '2018-02-18T02:30:00-07:00' or '2018-02-18T08:00:00Z', where Z stands for UTC);of the Gong user.
           * @default null
           */
          created: string | null;
          /**
           * Email Address
           * @description The email address of the Gong user.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Email Aliases
           * @description List of email address aliases of the Gong user.
           * @default null
           */
          emailAliases: string[] | null;
          /**
           * Extension
           * @description The extension number of the Gong user.
           * @default null
           */
          extension: string | null;
          /**
           * First Name
           * @description The first name of the Gong user.
           * @default null
           */
          firstName: string | null;
          /**
           * Id
           * @description Gong's unique numeric identifier for the user (up to 20 digits).
           * @default null
           */
          id: string | null;
          /**
           * Last Name
           * @description The last name of the Gong user.
           * @default null
           */
          lastName: string | null;
          /**
           * Manager Id
           * @description The manager ID of the Gong user.
           * @default null
           */
          managerId: string | null;
          /**
           * Meeting Consent Page Url
           * @description The Gong recording consent meeting link
           * @default null
           */
          meetingConsentPageUrl: string | null;
          /**
           * Personal Meeting Urls
           * @description The list of personal meeting URLs of the Gong user.
           * @default null
           */
          personalMeetingUrls: string[] | null;
          /**
           * Phone Number
           * @description The phone number of the Gong user.
           * @default null
           */
          phoneNumber: string | null;
          /**
           * Settings
           * @description The user's settings in the Gong system.
           * @default null
           */
          settings: {
              /**
               * Emails Imported
               * @description True if the team member is set to import emails by Gong, false if not.
               * @default null
               */
              emailsImported: boolean | null;
              /**
               * Gong Connect Enabled
               * @description True if the team member has Gong Connect enabled, false if not.
               * @default null
               */
              gongConnectEnabled: boolean | null;
              /**
               * Non Recorded Meetings Imported
               * @description True if the team member is set to import non recorded meetings by Gong, false if not.
               * @default null
               */
              nonRecordedMeetingsImported: boolean | null;
              /**
               * Prevent Email Import
               * @description True if the team member is set to prevent import of emails by Gong, false if not.
               * @default null
               */
              preventEmailImport: boolean | null;
              /**
               * Prevent Web Conference Recording
               * @description If true, invitation of this user to a web conference will prevent its recording (even if other users invited are set to record).
               * @default null
               */
              preventWebConferenceRecording: boolean | null;
              /**
               * Telephony Calls Imported
               * @description True if the team member is set to import telephony calls from by Gong, false if not.
               * @default null
               */
              telephonyCallsImported: boolean | null;
              /**
               * Web Conferences Recorded
               * @description True if the team member is set to be recorded by Gong, false if not.
               * @default null
               */
              webConferencesRecorded: boolean | null;
          } | null;
          /**
           * Spoken Languages
           * @default null
           */
          spokenLanguages: {
              /**
               * Language
               * @description Language spoken by the user encoded according to the BCP-47 standard.
               * @default null
               */
              language: string | null;
              /**
               * Primary
               * @description Indicates the primary language (one per user). The language will be assumed when the system cannot identify the language of a call, e.g., due to poor quality or the call being too short.
               * @default null
               */
              primary: boolean | null;
          }[] | null;
          /**
           * Title
           * @description The job title of the Gong user.
           * @default null
           */
          title: string | null;
          /**
           * Trusted Email Address
           * @description The trusted authentication email assigned to the Gong user
           * @default null
           */
          trustedEmailAddress: string | null;
      } | null;
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
 * Type of GONG's GONG_SET_USER_CALL_ACCESS tool input.
 */
type GONG_SET_USER_CALL_ACCESS_INPUT = {
  /**
   * Call Access List
   * @description A list, in which each item specifies a call and a list of users to be given access to this call.
   */
  callAccessList?: {
      /**
       * Call Id
       * @description Gong"s unique numeric call ID.
       */
      callId: string;
      /**
       * User Ids
       * @description Array of Gong"s unique numeric user IDs.
       */
      userIds: string[];
  }[];
};

/**
 * Type of GONG's GONG_SET_USER_CALL_ACCESS tool output.
 */
type GONG_SET_USER_CALL_ACCESS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_UPDATE_A_GONG_MEETING_V2_MEETINGS_MEETING_ID tool input.
 */
type GONG_UPDATE_A_GONG_MEETING_V2_MEETINGS_MEETING_ID_INPUT = {
  /**
   * End Time
   * @description The meeting end time in ISO-8601 format (e.g., "2018-02-18T02:30:00-07:00" or "2018-02-18T08:00:00Z", where Z stands for UTC).
   */
  endTime?: string;
  /**
   * External Id
   * @description The ID as it is formed on the external system.
   */
  externalId?: string;
  /**
   * Invitees
   * @description A list of email addresses of invitees to the event (not including the organizer).
   */
  invitees?: {
      /**
       * Display Name
       * @description The name of the person.
       */
      displayName?: string;
      /**
       * Email
       * @description The unique meeting to identify the meeting.
       */
      email?: string;
      /**
       * First Name
       * @description The first name of the person, if available.
       */
      firstName?: string;
      /**
       * Last Name
       * @description The last name of the person, if available.
       */
      lastName?: string;
  }[];
  /**
   * Meeting Id
   * @description Gong"s unique identifier for the meeting (up to 20 digits).
   */
  meetingId?: number;
  /**
   * Organizer Email
   * @description The email address of the user who created the meeting.
   */
  organizerEmail?: string;
  /**
   * Start Time
   * @description The meeting start time in ISO-8601 format (e.g., "2018-02-18T02:30:00-07:00" or "2018-02-18T08:00:00Z", where Z stands for UTC).
   */
  startTime?: string;
  /**
   * Title
   * @description Title of the event.
   */
  title?: string;
};

/**
 * Type of GONG's GONG_UPDATE_A_GONG_MEETING_V2_MEETINGS_MEETING_ID tool output.
 */
type GONG_UPDATE_A_GONG_MEETING_V2_MEETINGS_MEETING_ID_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Meeting Id
       * @description The unique meeting identifier of the meeting.
       * @default null
       */
      meetingId: string | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_UPDATE_PERMISSION_PROFILE_V2_PERMISSION_PROFILE tool input.
 */
type GONG_UPDATE_PERMISSION_PROFILE_V2_PERMISSION_PROFILE_INPUT = {
  /**
   * Account
   * @description User can view account pages.
   */
  account?: boolean;
  /**
   * Activity
   * @description User can view activity pages.
   */
  activity?: boolean;
  /**
   * Calls Access  Permission Level
   * @description Permission access scope.
   * @enum {string}
   */
  callsAccess__permissionLevel?: "all" | "all / managers-team / report-to-them / own / none" | "managers-team" | "none" | "own" | "report-to-them";
  /**
   * Calls Access  Team Lead Ids
   * @description List of user IDs to populate the managers-team permission level You can retrieve the user ids by using the “Users” API.
   */
  callsAccess__teamLeadIds?: string[];
  /**
   * Calls And Search
   * @description User can view and search calls.
   */
  callsAndSearch?: boolean;
  /**
   * Coaching
   * @description User can view coaching pages.
   */
  coaching?: boolean;
  /**
   * Coaching Access  Permission Level
   * @description Permission access scope.
   * @enum {string}
   */
  coachingAccess__permissionLevel?: "all" | "all / managers-team / report-to-them / own / none" | "managers-team" | "none" | "own" | "report-to-them";
  /**
   * Coaching Access  Team Lead Ids
   * @description List of user IDs to populate the managers-team permission level You can retrieve the user ids by using the “Users” API.
   */
  coachingAccess__teamLeadIds?: string[];
  /**
   * Create Edit And Delete Deals Boards
   * @description User can create/edit/delete deals boards.
   */
  createEditAndDeleteDealsBoards?: boolean;
  /**
   * Crm Data Import
   * @description User can perform import of crm data.
   */
  crmDataImport?: boolean;
  /**
   * Crm Data Inline Editing
   * @description User can perform inline editing of crm data.
   */
  crmDataInlineEditing?: boolean;
  /**
   * Deals
   * @description User can view deals pages.
   */
  deals?: boolean;
  /**
   * Deals Access  Permission Level
   * @description Permission access scope.
   * @enum {string}
   */
  dealsAccess__permissionLevel?: "all" | "all / managers-team / report-to-them / own / none" | "managers-team" | "none" | "own" | "report-to-them";
  /**
   * Deals Access  Team Lead Ids
   * @description List of user IDs to populate the managers-team permission level You can retrieve the user ids by using the “Users” API.
   */
  dealsAccess__teamLeadIds?: string[];
  /**
   * Deals Inline Editing
   * @description User can perform inline editing of deals.
   */
  dealsInlineEditing?: boolean;
  /**
   * Delete Calls
   * @description User can delete calls.
   */
  deleteCalls?: boolean;
  /**
   * Delete Emails
   * @description User can delete emails.
   */
  deleteEmails?: boolean;
  /**
   * Description
   * @description Permission profile description.
   */
  description?: string;
  /**
   * Download Call Media
   * @description User can download call media.
   */
  downloadCallMedia?: boolean;
  /**
   * Emails Access  Permission Level
   * @description Permission access scope.
   * @enum {string}
   */
  emailsAccess__permissionLevel?: "all" | "all / managers-team / report-to-them / own / none" | "managers-team" | "none" | "own" | "report-to-them";
  /**
   * Emails Access  Team Lead Ids
   * @description List of user IDs to populate the managers-team permission level You can retrieve the user ids by using the “Users” API.
   */
  emailsAccess__teamLeadIds?: string[];
  /**
   * Engage Create And Manage Rulesets
   * @description User can create and manage rulesets.
   */
  engageCreateAndManageRulesets?: boolean;
  /**
   * Engage Manage Company Sequences
   * @description User can manage company sequences.
   */
  engageManageCompanySequences?: boolean;
  /**
   * Engage Manage Company Templates
   * @description User can manage company email templates.
   */
  engageManageCompanyTemplates?: boolean;
  /**
   * Engage Snooze Flow To Dos For Others
   * @description User can snooze flow in to dos for others
   */
  engageSnoozeFlowToDosForOthers?: boolean;
  /**
   * Export Calls And Coaching Data To Csv
   * @description User can export calls and coaching metrics data to CSV.
   */
  exportCallsAndCoachingDataToCSV?: boolean;
  /**
   * Forecast
   * @description User can view forecast pages.
   */
  forecast?: boolean;
  /**
   * Forecast Manage
   * @description User can manage forecast boards and upload targets.
   */
  forecastManage?: boolean;
  /**
   * Forecast Permissions  Forecast Access  Permission Level
   * @description Permission access scope.
   * @enum {string}
   */
  forecastPermissions__forecastAccess__permissionLevel?: "all" | "all / managers-team / report-to-them / own / none" | "managers-team" | "none" | "own" | "report-to-them";
  /**
   * Forecast Permissions  Forecast Access  Team Lead Ids
   * @description List of user IDs to populate the managers-team permission level You can retrieve the user ids by using the “Users” API.
   */
  forecastPermissions__forecastAccess__teamLeadIds?: string[];
  /**
   * Forecast Permissions  Forecast Edit Submissions  Permission Level
   * @description Permission access scope.
   * @enum {string}
   */
  forecastPermissions__forecastEditSubmissions__permissionLevel?: "all" | "all / managers-team / report-to-them / own / none" | "managers-team" | "none" | "own" | "report-to-them";
  /**
   * Forecast Permissions  Forecast Edit Submissions  Team Lead Ids
   * @description List of user IDs to populate the managers-team permission level You can retrieve the user ids by using the “Users” API.
   */
  forecastPermissions__forecastEditSubmissions__teamLeadIds?: string[];
  /**
   * Forecast Permissions  Forecast Edit Targets  Permission Level
   * @description Permission access scope.
   * @enum {string}
   */
  forecastPermissions__forecastEditTargets__permissionLevel?: "all" | "all / managers-team / report-to-them / own / none" | "managers-team" | "none" | "own" | "report-to-them";
  /**
   * Forecast Permissions  Forecast Edit Targets  Team Lead Ids
   * @description List of user IDs to populate the managers-team permission level You can retrieve the user ids by using the “Users” API.
   */
  forecastPermissions__forecastEditTargets__teamLeadIds?: string[];
  /**
   * Id
   * @description Unique numeric identifier of the permission profile (up to 20 digits).
   */
  id?: string;
  /**
   * Initiatives
   * @description User can view initiatives page.
   */
  initiatives?: boolean;
  /**
   * Insights Access  Permission Level
   * @description Permission access scope.
   * @enum {string}
   */
  insightsAccess__permissionLevel?: "all" | "all / managers-team / report-to-them / own / none" | "managers-team" | "none" | "own" | "report-to-them";
  /**
   * Insights Access  Team Lead Ids
   * @description List of user IDs to populate the managers-team permission level You can retrieve the user ids by using the “Users” API.
   */
  insightsAccess__teamLeadIds?: string[];
  /**
   * Library
   * @description User can view library pages.
   */
  library?: boolean;
  /**
   * Library Folder Access  Library Folder Ids
   * @description List of library folder Ids, if set, "permissionLevel" must not be "none".
   */
  libraryFolderAccess__libraryFolderIds?: string[];
  /**
   * Library Folder Access  Manage Folder Calls
   * @description A user with this profile can add calls to folders, archive calls, if set, "permissionLevel" must not be "none".
   */
  libraryFolderAccess__manageFolderCalls?: boolean;
  /**
   * Library Folder Access  Manage Public Folder
   * @description A user with this profile can manage public folder, if set, "permissionLevel" must not be "none".
   */
  libraryFolderAccess__managePublicFolder?: boolean;
  /**
   * Library Folder Access  Manage Streams
   * @description A user with this profile can manage streams, if set, "permissionLevel" must not be "none".
   */
  libraryFolderAccess__manageStreams?: boolean;
  /**
   * Library Folder Access  Permission Level
   * @description Library folder permission level - mandatory value.
   * @enum {string}
   */
  libraryFolderAccess__permissionLevel?: "all" | "none" | "none, all, specific-folders" | "specific-folders";
  /**
   * Library Folder Access  Share Folders And Streams
   * @description A user with this profile can share folders and streams from Your Library with other team members, if set, "permissionLevel" must not be "none".
   */
  libraryFolderAccess__shareFoldersAndStreams?: boolean;
  /**
   * Listen In Calls
   * @description User can listen in calls.
   */
  listenInCalls?: boolean;
  /**
   * Manage General Business Settings
   * @description User can manage general business settings.
   */
  manageGeneralBusinessSettings?: boolean;
  /**
   * Manage Revenue Analytics
   * @description User can manage revenue analytics.
   */
  manageRevenueAnalytics?: boolean;
  /**
   * Manage Scorecards
   * @description User can manage scorecards.
   */
  manageScorecards?: boolean;
  /**
   * Manually Schedule And Upload Calls
   * @description User can manually schedule and upload calls.
   */
  manuallyScheduleAndUploadCalls?: boolean;
  /**
   * Market
   * @description User can view market page.
   */
  market?: boolean;
  /**
   * Name
   * @description Permission profile name.
   */
  name?: string;
  /**
   * Override Score
   * @description User can override someone else score.
   */
  overrideScore?: boolean;
  /**
   * Private Calls
   * @description User can set their own calls as private.
   */
  privateCalls?: boolean;
  /**
   * Profile Id
   * @description Permission profile identifier.
   */
  profileId?: string;
  /**
   * Score Calls
   * @description User can score calls.
   */
  scoreCalls?: boolean;
  /**
   * Share Calls With Customers
   * @description User can share calls with customers.
   */
  shareCallsWithCustomers?: boolean;
  /**
   * Team Stats
   * @description User can view team stats page.
   */
  teamStats?: boolean;
  /**
   * Trim Calls
   * @description User can trim calls.
   */
  trimCalls?: boolean;
  /**
   * Usage
   * @description User can view usage pages.
   */
  usage?: boolean;
  /**
   * Usage Access  Permission Level
   * @description Permission access scope.
   * @enum {string}
   */
  usageAccess__permissionLevel?: "all" | "all / managers-team / report-to-them / own / none" | "managers-team" | "none" | "own" | "report-to-them";
  /**
   * Usage Access  Team Lead Ids
   * @description List of user IDs to populate the managers-team permission level You can retrieve the user ids by using the “Users” API.
   */
  usageAccess__teamLeadIds?: string[];
  /**
   * View Engage Analytics Activity
   * @description User can view engage analytics activity page.
   */
  viewEngageAnalyticsActivity?: boolean;
  /**
   * View Engage Analytics Flows
   * @description User can view engage analytics flows page.
   */
  viewEngageAnalyticsFlows?: boolean;
  /**
   * View Engage Analytics Performance
   * @description User can view engage analytics performance page.
   */
  viewEngageAnalyticsPerformance?: boolean;
  /**
   * View Revenue Analytics
   * @description User can view dashboards page.
   */
  viewRevenueAnalytics?: boolean;
};

/**
 * Type of GONG's GONG_UPDATE_PERMISSION_PROFILE_V2_PERMISSION_PROFILE tool output.
 */
type GONG_UPDATE_PERMISSION_PROFILE_V2_PERMISSION_PROFILE_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Profile
       * @description Permission profile
       * @default null
       */
      profile: {
          /**
           * Account
           * @description User can view account pages.
           * @default null
           */
          account: boolean | null;
          /**
           * Activity
           * @description User can view activity pages.
           * @default null
           */
          activity: boolean | null;
          /**
           * CallsAccess
           * @description Calls access permission.
           * @default null
           */
          callsAccess: {
              /**
               * PermissionLevel
               * @description Permission access scope.
               * @default null
               * @enum {string|null}
               */
              permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
              /**
               * Team Lead Ids
               * @description List of user IDs to populate the managers-team permission level
               *
               *     You can retrieve the user ids by using the “Users” API.
               * @default null
               */
              teamLeadIds: string[] | null;
          } | null;
          /**
           * Calls And Search
           * @description User can view and search calls.
           * @default null
           */
          callsAndSearch: boolean | null;
          /**
           * Coaching
           * @description User can view coaching pages.
           * @default null
           */
          coaching: boolean | null;
          /**
           * CoachingAccess
           * @description Coaching access permission.
           * @default null
           */
          coachingAccess: {
              /**
               * PermissionLevel2
               * @description Permission access scope.
               * @default null
               * @enum {string|null}
               */
              permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
              /**
               * Team Lead Ids
               * @description List of user IDs to populate the managers-team permission level
               *
               *     You can retrieve the user ids by using the “Users” API.
               * @default null
               */
              teamLeadIds: string[] | null;
          } | null;
          /**
           * Create Edit And Delete Deals Boards
           * @description User can create/edit/delete deals boards.
           * @default null
           */
          createEditAndDeleteDealsBoards: boolean | null;
          /**
           * Crm Data Import
           * @description User can perform import of crm data.
           * @default null
           */
          crmDataImport: boolean | null;
          /**
           * Crm Data Inline Editing
           * @description User can perform inline editing of crm data.
           * @default null
           */
          crmDataInlineEditing: boolean | null;
          /**
           * Deals
           * @description User can view deals pages.
           * @default null
           */
          deals: boolean | null;
          /**
           * DealsAccess
           * @description Deals access permission.
           * @default null
           */
          dealsAccess: {
              /**
               * PermissionLevel2
               * @description Permission access scope.
               * @default null
               * @enum {string|null}
               */
              permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
              /**
               * Team Lead Ids
               * @description List of user IDs to populate the managers-team permission level
               *
               *     You can retrieve the user ids by using the “Users” API.
               * @default null
               */
              teamLeadIds: string[] | null;
          } | null;
          /**
           * Deals Inline Editing
           * @description User can perform inline editing of deals.
           * @default null
           */
          dealsInlineEditing: boolean | null;
          /**
           * Delete Calls
           * @description User can delete calls.
           * @default null
           */
          deleteCalls: boolean | null;
          /**
           * Delete Emails
           * @description User can delete emails.
           * @default null
           */
          deleteEmails: boolean | null;
          /**
           * Description
           * @description Permission profile description.
           * @default null
           */
          description: string | null;
          /**
           * Download Call Media
           * @description User can download call media.
           * @default null
           */
          downloadCallMedia: boolean | null;
          /**
           * EmailsAccess
           * @description Emails access permission.
           * @default null
           */
          emailsAccess: {
              /**
               * PermissionLevel2
               * @description Permission access scope.
               * @default null
               * @enum {string|null}
               */
              permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
              /**
               * Team Lead Ids
               * @description List of user IDs to populate the managers-team permission level
               *
               *     You can retrieve the user ids by using the “Users” API.
               * @default null
               */
              teamLeadIds: string[] | null;
          } | null;
          /**
           * Engage Create And Manage Rulesets
           * @description User can create and manage rulesets.
           * @default null
           */
          engageCreateAndManageRulesets: boolean | null;
          /**
           * Engage Manage Company Sequences
           * @description User can manage company sequences.
           * @default null
           */
          engageManageCompanySequences: boolean | null;
          /**
           * Engage Manage Company Templates
           * @description User can manage company email templates.
           * @default null
           */
          engageManageCompanyTemplates: boolean | null;
          /**
           * Engage Snooze Flow To Dos For Others
           * @description User can snooze flow in to dos for others
           * @default null
           */
          engageSnoozeFlowToDosForOthers: boolean | null;
          /**
           * Export Calls And Coaching Data To Csv
           * @description User can export calls and coaching metrics data to CSV.
           * @default null
           */
          exportCallsAndCoachingDataToCSV: boolean | null;
          /**
           * Forecast
           * @description User can view forecast pages.
           * @default null
           */
          forecast: boolean | null;
          /**
           * Forecast Manage
           * @description User can manage forecast boards and upload targets.
           * @default null
           */
          forecastManage: boolean | null;
          /**
           * ForecastPermissions
           * @description All forecast permissions.
           * @default null
           */
          forecastPermissions: {
              /**
               * ForecastAccess
               * @description User can view forecast submissions.
               * @default null
               */
              forecastAccess: {
                  /**
                   * PermissionLevel2
                   * @description Permission access scope.
                   * @default null
                   * @enum {string|null}
                   */
                  permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
                  /**
                   * Team Lead Ids
                   * @description List of user IDs to populate the managers-team permission level
                   *
                   *     You can retrieve the user ids by using the “Users” API.
                   * @default null
                   */
                  teamLeadIds: string[] | null;
              } | null;
              /**
               * ForecastEditSubmissions
               * @description User can edit forecasts submissions.
               * @default null
               */
              forecastEditSubmissions: {
                  /**
                   * PermissionLevel2
                   * @description Permission access scope.
                   * @default null
                   * @enum {string|null}
                   */
                  permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
                  /**
                   * Team Lead Ids
                   * @description List of user IDs to populate the managers-team permission level
                   *
                   *     You can retrieve the user ids by using the “Users” API.
                   * @default null
                   */
                  teamLeadIds: string[] | null;
              } | null;
              /**
               * ForecastEditTargets
               * @description User can edit forecast Targets.
               * @default null
               */
              forecastEditTargets: {
                  /**
                   * PermissionLevel2
                   * @description Permission access scope.
                   * @default null
                   * @enum {string|null}
                   */
                  permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
                  /**
                   * Team Lead Ids
                   * @description List of user IDs to populate the managers-team permission level
                   *
                   *     You can retrieve the user ids by using the “Users” API.
                   * @default null
                   */
                  teamLeadIds: string[] | null;
              } | null;
          } | null;
          /**
           * Id
           * @description Unique numeric identifier of the permission profile (up to 20 digits).
           * @default null
           */
          id: string | null;
          /**
           * Initiatives
           * @description User can view initiatives page.
           * @default null
           */
          initiatives: boolean | null;
          /**
           * InsightsAccess
           * @description Insights access permission.
           * @default null
           */
          insightsAccess: {
              /**
               * PermissionLevel2
               * @description Permission access scope.
               * @default null
               * @enum {string|null}
               */
              permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
              /**
               * Team Lead Ids
               * @description List of user IDs to populate the managers-team permission level
               *
               *     You can retrieve the user ids by using the “Users” API.
               * @default null
               */
              teamLeadIds: string[] | null;
          } | null;
          /**
           * Library
           * @description User can view library pages.
           * @default null
           */
          library: boolean | null;
          /**
           * LibraryFolderAccess
           * @description Library folder access permission.
           * @default null
           */
          libraryFolderAccess: {
              /**
               * Library Folder Ids
               * @description List of library folder Ids, if set, "permissionLevel" must not be "none".
               * @default null
               */
              libraryFolderIds: string[] | null;
              /**
               * Manage Folder Calls
               * @description A user with this profile can add calls to folders, archive calls, if set, "permissionLevel" must not be "none".
               * @default null
               */
              manageFolderCalls: boolean | null;
              /**
               * Manage Public Folder
               * @description A user with this profile can manage public folder, if set, "permissionLevel" must not be "none".
               * @default null
               */
              managePublicFolder: boolean | null;
              /**
               * Manage Streams
               * @description A user with this profile can manage streams, if set, "permissionLevel" must not be "none".
               * @default null
               */
              manageStreams: boolean | null;
              /**
               * PermissionLevel1
               * @description Library folder permission level - mandatory value.
               * @default null
               * @enum {string|null}
               */
              permissionLevel: "none" | "all" | "specific-folders" | "none, all, specific-folders" | null;
              /**
               * Share Folders And Streams
               * @description A user with this profile can share folders and streams from Your Library with other team members, if set, "permissionLevel" must not be "none".
               * @default null
               */
              shareFoldersAndStreams: boolean | null;
          } | null;
          /**
           * Listen In Calls
           * @description User can listen in calls.
           * @default null
           */
          listenInCalls: boolean | null;
          /**
           * Manage General Business Settings
           * @description User can manage general business settings.
           * @default null
           */
          manageGeneralBusinessSettings: boolean | null;
          /**
           * Manage Revenue Analytics
           * @description User can manage revenue analytics.
           * @default null
           */
          manageRevenueAnalytics: boolean | null;
          /**
           * Manage Scorecards
           * @description User can manage scorecards.
           * @default null
           */
          manageScorecards: boolean | null;
          /**
           * Manually Schedule And Upload Calls
           * @description User can manually schedule and upload calls.
           * @default null
           */
          manuallyScheduleAndUploadCalls: boolean | null;
          /**
           * Market
           * @description User can view market page.
           * @default null
           */
          market: boolean | null;
          /**
           * Name
           * @description Permission profile name.
           * @default null
           */
          name: string | null;
          /**
           * Override Score
           * @description User can override someone else score.
           * @default null
           */
          overrideScore: boolean | null;
          /**
           * Private Calls
           * @description User can set their own calls as private.
           * @default null
           */
          privateCalls: boolean | null;
          /**
           * Score Calls
           * @description User can score calls.
           * @default null
           */
          scoreCalls: boolean | null;
          /**
           * Share Calls With Customers
           * @description User can share calls with customers.
           * @default null
           */
          shareCallsWithCustomers: boolean | null;
          /**
           * Team Stats
           * @description User can view team stats page.
           * @default null
           */
          teamStats: boolean | null;
          /**
           * Trim Calls
           * @description User can trim calls.
           * @default null
           */
          trimCalls: boolean | null;
          /**
           * Usage
           * @description User can view usage pages.
           * @default null
           */
          usage: boolean | null;
          /**
           * UsageAccess
           * @description Usage access permission.
           * @default null
           */
          usageAccess: {
              /**
               * PermissionLevel2
               * @description Permission access scope.
               * @default null
               * @enum {string|null}
               */
              permissionLevel: "all" | "managers-team" | "report-to-them" | "own" | "none" | "all / managers-team / report-to-them / own / none" | null;
              /**
               * Team Lead Ids
               * @description List of user IDs to populate the managers-team permission level
               *
               *     You can retrieve the user ids by using the “Users” API.
               * @default null
               */
              teamLeadIds: string[] | null;
          } | null;
          /**
           * View Engage Analytics Activity
           * @description User can view engage analytics activity page.
           * @default null
           */
          viewEngageAnalyticsActivity: boolean | null;
          /**
           * View Engage Analytics Flows
           * @description User can view engage analytics flows page.
           * @default null
           */
          viewEngageAnalyticsFlows: boolean | null;
          /**
           * View Engage Analytics Performance
           * @description User can view engage analytics performance page.
           * @default null
           */
          viewEngageAnalyticsPerformance: boolean | null;
          /**
           * View Revenue Analytics
           * @description User can view dashboards page.
           * @default null
           */
          viewRevenueAnalytics: boolean | null;
      } | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type of GONG's GONG_UPDATE_SHARED_CONTENT_EVENT tool input.
 */
type GONG_UPDATE_SHARED_CONTENT_EVENT_INPUT = {
  /**
   * Action Name
   * @description The name of the action like "Document Sent" or "Presentation Shared".
   */
  actionName?: string;
  /**
   * Agent Platform
   * @description Agentplatform
   */
  agentPlatform?: string;
  /**
   * Content Id
   * @description The id of the content that was shared in the reporting system.
   */
  contentId?: string;
  /**
   * Content Properties
   * @description A list of additional properties for the content
   */
  contentProperties?: {
      /**
       * Data Type
       * @description Property data type.
       * @enum {string}
       */
      dataType: "number, string, url, date";
      /**
       * Name
       * @description Property name.
       */
      name: string;
      /**
       * Value
       * @description Property value. Value format should match dataType. If dataType is "number", value should be passed in JSON number format, e.g. 3.14. If dataType is "date", the value should be passed in JSON date format, e.g. 2021-02-17T02:30:00-08:00. If the dataType is "url", the value should be valid URL, e.g. "https://example.com/example?q=v"
       */
      value: string;
  }[];
  /**
   * Content Title
   * @description Human readable title of the content.
   */
  contentTitle?: string;
  /**
   * Content Url
   * @description The url of the content that was shared in the reporting system. This is the url that is was accessed by the viewer.
   */
  contentUrl?: string;
  /**
   * Crm Context
   * @description A list of references to external systems such as CRM, Telephony System, Case Management, etc.
   */
  crmContext?: {
      /**
       * Objects
       * @description List of objects within the external system. Note: Multiple opportunities/deals belonging to the same account are not supported.
       */
      objects?: {
          /**
           * Fields
           * @description Object fields. Intended for future use only.
           */
          fields?: {
              /**
               * Name
               * @description Field name. For Account supported fields are: Name, Website, Industry and all the custom fields. For Opportunity supported fields are Name, LeadSource, Type, StageName, Probability, Amount, CloseDate and all the custom fields.
               */
              name?: string;
          }[];
          /**
           * Object Id
           * @description Object ID. For Salesforce both case-sensitive and case-insensitive formats are supported.
           */
          objectId: string;
          /**
           * Object Type
           * @description Object Type. e.g. Account.
           * @enum {string}
           */
          objectType: "Account" | "Contact" | "Lead" | "Opportunity" | "Opportunity,Account" | "User";
      }[];
      /**
       * System
       * @description External system name. Currently only Salesforce and Generic are supported.
       * @enum {string}
       */
      system: "Generic" | "HubSpot" | "MicrosoftDynamic" | "Salesforce";
  }[];
  /**
   * Event Id
   * @description The original id of the event as designated in the reporting system.
   */
  eventId?: string;
  /**
   * Event Properties
   * @description A list of additional properties for the event
   */
  eventProperties?: {
      /**
       * Data Type
       * @description Property data type.
       * @enum {string}
       */
      dataType: "number, string, url, date";
      /**
       * Name
       * @description Property name.
       */
      name: string;
      /**
       * Value
       * @description Property value. Value format should match dataType. If dataType is "number", value should be passed in JSON number format, e.g. 3.14. If dataType is "date", the value should be passed in JSON date format, e.g. 2021-02-17T02:30:00-08:00. If the dataType is "url", the value should be valid URL, e.g. "https://example.com/example?q=v"
       */
      value: string;
  }[];
  /**
   * Event Timestamp
   * @description The date and time when the event happened in the ISO-8601 format (e.g., "2021-08-01T02:30:00+05:00" or "2021-08-01T08:00:00Z", where Z stands for UTC);
   */
  eventTimestamp?: string;
  /**
   * Mobile App Id
   * @description Mobileappid
   */
  mobileAppId?: string;
  /**
   * More Info Url
   * @description Moreinfourl
   */
  moreInfoUrl?: string;
  /**
   * Non Company Participants
   * @description Noncompanyparticipants
   */
  nonCompanyParticipants?: {
      /**
       * Context
       * @description A list of links to external systems such as CRM, Telephony System, Case Management, etc.
       */
      context?: {
          /**
           * Objects
           * @description List of objects within the external system
           */
          objects?: {
              /**
               * Fields
               * @description Object fields. Intended for future use only.
               */
              fields?: {
                  /**
                   * Name
                   * @description Field name
                   */
                  name?: string;
              }[];
              /**
               * Object Id
               * @description Object ID. For Salesforce both case-sensitive and case-insensitive formats are supported.
               */
              objectId: string;
              /**
               * Object Type
               * @description Object Type. Valid only for non-company parties. e.g. Lead.
               * @enum {string}
               */
              objectType: "Account" | "Contact" | "Lead" | "Lead,Contact" | "Opportunity" | "User";
          }[];
          /**
           * System
           * @description External system name. Currently only Salesforce and Generic are supported.
           * @enum {string}
           */
          system: "Generic" | "HubSpot" | "MicrosoftDynamic" | "Salesforce";
      }[];
      /**
       * Email
       * @description The email address of the person, if available.
       */
      email?: string;
      /**
       * Name
       * @description The name of the person, if available.
       */
      name?: string;
      /**
       * Title
       * @description The title of the person, if available.
       */
      title?: string;
  }[];
  /**
   * Recipients
   * @description array of objects with  name + email of recipients. Email is required.
   */
  recipients?: {
      /**
       * Context
       * @description A list of links to external systems such as CRM, Telephony System, Case Management, etc.
       */
      context?: {
          /**
           * Objects
           * @description List of objects within the external system
           */
          objects?: {
              /**
               * Fields
               * @description Object fields. Intended for future use only.
               */
              fields?: {
                  /**
                   * Name
                   * @description Field name
                   */
                  name?: string;
              }[];
              /**
               * Object Id
               * @description Object ID. For Salesforce both case-sensitive and case-insensitive formats are supported.
               */
              objectId: string;
              /**
               * Object Type
               * @description Object Type. Valid only for non-company parties. e.g. Lead.
               * @enum {string}
               */
              objectType: "Account" | "Contact" | "Lead" | "Lead,Contact" | "Opportunity" | "User";
          }[];
          /**
           * System
           * @description External system name. Currently only Salesforce and Generic are supported.
           * @enum {string}
           */
          system: "Generic" | "HubSpot" | "MicrosoftDynamic" | "Salesforce";
      }[];
      /**
       * Email
       * @description The email address of the person, if available.
       */
      email?: string;
      /**
       * Name
       * @description The name of the person, if available.
       */
      name?: string;
      /**
       * Title
       * @description The title of the person, if available.
       */
      title?: string;
  }[];
  /**
   * Reporting System
   * @description The unique identifier of the reporting system. It is the same value in all events originating from the same system.
   */
  reportingSystem?: string;
  /**
   * Share Id
   * @description The id of the share action, in case there can be more than one share per content.
   */
  shareId?: string;
  /**
   * Share Info Url
   * @description The link to a page that presents additional information about this event.
   */
  shareInfoUrl?: string;
  /**
   * Sharer  Email
   * @description The email address of the person, if available.
   */
  sharer__email?: string;
  /**
   * Sharer  Id
   * @description The user id in Gong, if available.
   */
  sharer__id?: string;
  /**
   * Sharer  Name
   * @description The name of the person, if available.
   */
  sharer__name?: string;
  /**
   * Sharing Message Body
   * @description The share message body. Can contain HTML and will be cleaned when it is presented.
   */
  sharingMessageBody?: string;
  /**
   * Sharing Message Subject
   * @description The subject of share email / message.
   */
  sharingMessageSubject?: string;
  /**
   * Tracking Id
   * @description Trackingid
   */
  trackingId?: string;
  /**
   * User Agent
   * @description Useragent
   */
  userAgent?: string;
  /**
   * Workspace Id
   * @description Optional workspace identifier. If specified, the event will be placed into this workspace, otherwise, the default algorithm for workspace placement will be applied.
   */
  workspaceId?: string;
};

/**
 * Type of GONG's GONG_UPDATE_SHARED_CONTENT_EVENT tool output.
 */
type GONG_UPDATE_SHARED_CONTENT_EVENT_OUTPUT = {
  /** Data */
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
};

/**
 * Type of GONG's GONG_UPLOAD_CRM_OBJECTS_V2_CRM_ENTITIES tool input.
 */
type GONG_UPLOAD_CRM_OBJECTS_V2_CRM_ENTITIES_INPUT = {
  /**
   * Data File
   * Format: binary
   * @description Datafile
   */
  dataFile?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
};

/**
 * Type of GONG's GONG_UPLOAD_CRM_OBJECTS_V2_CRM_ENTITIES tool output.
 */
type GONG_UPLOAD_CRM_OBJECTS_V2_CRM_ENTITIES_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Client Request Id
       * @description The clientRequestId sent in the request - used to monitor the request process
       * @default null
       */
      clientRequestId: string | null;
      /**
       * Request Id
       * @description A Gong request reference Id, generated for this request. Can be used for troubleshooting purposes.
       * @default null
       */
      requestId: string | null;
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
 * Type map of all available tool input types for toolkit "GONG".
 */
export type GONG_TOOL_INPUTS = {
  ADD_CALL_MEDIA_V2_CALLS_ID_MEDIA: GONG_ADD_CALL_MEDIA_V2_CALLS_ID_MEDIA_INPUT
  ADD_NEW_CALL_V2_CALLS: GONG_ADD_NEW_CALL_V2_CALLS_INPUT
  AGGREGATE_ACTIVITY_BY_PERIOD_VIA_API: GONG_AGGREGATE_ACTIVITY_BY_PERIOD_VIA_API_INPUT
  AGGREGATE_USER_ACTIVITY_STATISTICS: GONG_AGGREGATE_USER_ACTIVITY_STATISTICS_INPUT
  ASSIGN_PROSPECTS_TO_FLOW: GONG_ASSIGN_PROSPECTS_TO_FLOW_INPUT
  CREATE_ACTIVITY_SCORECARDS_REPORT: GONG_CREATE_ACTIVITY_SCORECARDS_REPORT_INPUT
  CREATE_A_NEW_GONG_MEETING_V2_MEETINGS: GONG_CREATE_A_NEW_GONG_MEETING_V2_MEETINGS_INPUT
  CREATE_PERMISSION_PROFILE_V2_PERMISSION_PROFILE: GONG_CREATE_PERMISSION_PROFILE_V2_PERMISSION_PROFILE_INPUT
  DATA_PRIVACY_FOR_PHONE_NUMBER: GONG_DATA_PRIVACY_FOR_PHONE_NUMBER_INPUT
  DELETE_A_GENERIC_CRM_INTEGRATION_V2_CRM_INTEGRATIONS: GONG_DELETE_A_GENERIC_CRM_INTEGRATION_V2_CRM_INTEGRATIONS_INPUT
  DELETE_A_GONG_MEETING_V2_MEETINGS: GONG_DELETE_A_GONG_MEETING_V2_MEETINGS_INPUT
  DELETE_USERS_FROM_CALL_ACCESS_LIST: GONG_DELETE_USERS_FROM_CALL_ACCESS_LIST_INPUT
  ERASE_DATA_FOR_EMAIL_ADDRESS: GONG_ERASE_DATA_FOR_EMAIL_ADDRESS_INPUT
  ERASE_DATA_FOR_PHONE_NUMBER: GONG_ERASE_DATA_FOR_PHONE_NUMBER_INPUT
  FETCH_ALL_PERMISSION_PROFILES: GONG_FETCH_ALL_PERMISSION_PROFILES_INPUT
  GET_CRM_INTEGRATION_DETAILS: GONG_GET_CRM_INTEGRATION_DETAILS_INPUT
  GET_CRM_OBJECTS_V2_CRM_ENTITIES: GONG_GET_CRM_OBJECTS_V2_CRM_ENTITIES_INPUT
  GET_PERMISSION_PROFILE: GONG_GET_PERMISSION_PROFILE_INPUT
  GET_REQUEST_STATUS_V2_CRM_REQUEST_STATUS: GONG_GET_REQUEST_STATUS_V2_CRM_REQUEST_STATUS_INPUT
  LIST_ALL_COACHING_METRICS_V2_COACHING: GONG_LIST_ALL_COACHING_METRICS_V2_COACHING_INPUT
  LIST_ALL_COMPANY_WORKSPACES_V2_WORKSPACES: GONG_LIST_ALL_COMPANY_WORKSPACES_V2_WORKSPACES_INPUT
  LIST_ALL_USERS_V2_USERS: GONG_LIST_ALL_USERS_V2_USERS_INPUT
  LIST_FLOWS_FOR_CRM_PROSPECTS: GONG_LIST_FLOWS_FOR_CRM_PROSPECTS_INPUT
  LIST_FOLDER_CALLS: GONG_LIST_FOLDER_CALLS_INPUT
  LIST_GONG_ENGAGE_FLOWS_V2_FLOWS: GONG_LIST_GONG_ENGAGE_FLOWS_V2_FLOWS_INPUT
  LIST_SCHEMA_FIELDS_V2_CRM_ENTITY_SCHEMA: GONG_LIST_SCHEMA_FIELDS_V2_CRM_ENTITY_SCHEMA_INPUT
  LIST_USERS_BY_FILTER_V2_USERS_EXTENSIVE: GONG_LIST_USERS_BY_FILTER_V2_USERS_EXTENSIVE_INPUT
  MANAGE_USER_CALL_ACCESS: GONG_MANAGE_USER_CALL_ACCESS_INPUT
  POST_A_DIGITAL_INTERACTION_V2_DIGITAL_INTERACTION: GONG_POST_A_DIGITAL_INTERACTION_V2_DIGITAL_INTERACTION_INPUT
  POST_DAY_BY_DAY_ACTIVITY_STATS: GONG_POST_DAY_BY_DAY_ACTIVITY_STATS_INPUT
  POST_INTERACTION_FILTER_STATS: GONG_POST_INTERACTION_FILTER_STATS_INPUT
  POST_MEETING_INTEGRATION_STATUS: GONG_POST_MEETING_INTEGRATION_STATUS_INPUT
  REGISTER_CRM_INTEGRATION: GONG_REGISTER_CRM_INTEGRATION_INPUT
  REPORT_CONTENT_VIEWED_EVENT: GONG_REPORT_CONTENT_VIEWED_EVENT_INPUT
  REPORT_CUSTOM_ENGAGEMENT_EVENT: GONG_REPORT_CUSTOM_ENGAGEMENT_EVENT_INPUT
  RETRIEVE_CALL_DATA_BY_DATE_RANGE_V2_CALLS: GONG_RETRIEVE_CALL_DATA_BY_DATE_RANGE_V2_CALLS_INPUT
  RETRIEVE_DATA_FOR_A_SPECIFIC_CALL_V2_CALLS_ID: GONG_RETRIEVE_DATA_FOR_A_SPECIFIC_CALL_V2_CALLS_ID_INPUT
  RETRIEVE_DATA_PRIVACY_INFO_FOR_EMAIL_ADDRESS: GONG_RETRIEVE_DATA_PRIVACY_INFO_FOR_EMAIL_ADDRESS_INPUT
  RETRIEVE_FILTERED_CALL_DETAILS: GONG_RETRIEVE_FILTERED_CALL_DETAILS_INPUT
  RETRIEVE_LIBRARY_FOLDERS_V2_LIBRARY_FOLDERS: GONG_RETRIEVE_LIBRARY_FOLDERS_V2_LIBRARY_FOLDERS_INPUT
  RETRIEVE_LOGS_DATA_BY_TYPE_AND_TIME_RANGE_V2_LOGS: GONG_RETRIEVE_LOGS_DATA_BY_TYPE_AND_TIME_RANGE_V2_LOGS_INPUT
  RETRIEVE_MANUAL_CRM_CALL_ASSOCIATIONS: GONG_RETRIEVE_MANUAL_CRM_CALL_ASSOCIATIONS_INPUT
  RETRIEVE_SCORECARDS_DETAILS_V2_SETTINGS_SCORECARDS: GONG_RETRIEVE_SCORECARDS_DETAILS_V2_SETTINGS_SCORECARDS_INPUT
  RETRIEVE_TRACKER_DETAILS_V2_SETTINGS_TRACKERS: GONG_RETRIEVE_TRACKER_DETAILS_V2_SETTINGS_TRACKERS_INPUT
  RETRIEVE_TRANSCRIPTS_OF_CALLS_V2_CALLS_TRANSCRIPT: GONG_RETRIEVE_TRANSCRIPTS_OF_CALLS_V2_CALLS_TRANSCRIPT_INPUT
  RETRIEVE_USERS_FROM_PERMISSION_PROFILE: GONG_RETRIEVE_USERS_FROM_PERMISSION_PROFILE_INPUT
  RETRIEVE_USER_SETTINGS_HISTORY: GONG_RETRIEVE_USER_SETTINGS_HISTORY_INPUT
  RETRIEVE_USER_V2_USERS_ID: GONG_RETRIEVE_USER_V2_USERS_ID_INPUT
  SET_USER_CALL_ACCESS: GONG_SET_USER_CALL_ACCESS_INPUT
  UPDATE_A_GONG_MEETING_V2_MEETINGS_MEETING_ID: GONG_UPDATE_A_GONG_MEETING_V2_MEETINGS_MEETING_ID_INPUT
  UPDATE_PERMISSION_PROFILE_V2_PERMISSION_PROFILE: GONG_UPDATE_PERMISSION_PROFILE_V2_PERMISSION_PROFILE_INPUT
  UPDATE_SHARED_CONTENT_EVENT: GONG_UPDATE_SHARED_CONTENT_EVENT_INPUT
  UPLOAD_CRM_OBJECTS_V2_CRM_ENTITIES: GONG_UPLOAD_CRM_OBJECTS_V2_CRM_ENTITIES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GONG".
 */
export type GONG_TOOL_OUTPUTS = {
  ADD_CALL_MEDIA_V2_CALLS_ID_MEDIA: GONG_ADD_CALL_MEDIA_V2_CALLS_ID_MEDIA_OUTPUT
  ADD_NEW_CALL_V2_CALLS: GONG_ADD_NEW_CALL_V2_CALLS_OUTPUT
  AGGREGATE_ACTIVITY_BY_PERIOD_VIA_API: GONG_AGGREGATE_ACTIVITY_BY_PERIOD_VIA_API_OUTPUT
  AGGREGATE_USER_ACTIVITY_STATISTICS: GONG_AGGREGATE_USER_ACTIVITY_STATISTICS_OUTPUT
  ASSIGN_PROSPECTS_TO_FLOW: GONG_ASSIGN_PROSPECTS_TO_FLOW_OUTPUT
  CREATE_ACTIVITY_SCORECARDS_REPORT: GONG_CREATE_ACTIVITY_SCORECARDS_REPORT_OUTPUT
  CREATE_A_NEW_GONG_MEETING_V2_MEETINGS: GONG_CREATE_A_NEW_GONG_MEETING_V2_MEETINGS_OUTPUT
  CREATE_PERMISSION_PROFILE_V2_PERMISSION_PROFILE: GONG_CREATE_PERMISSION_PROFILE_V2_PERMISSION_PROFILE_OUTPUT
  DATA_PRIVACY_FOR_PHONE_NUMBER: GONG_DATA_PRIVACY_FOR_PHONE_NUMBER_OUTPUT
  DELETE_A_GENERIC_CRM_INTEGRATION_V2_CRM_INTEGRATIONS: GONG_DELETE_A_GENERIC_CRM_INTEGRATION_V2_CRM_INTEGRATIONS_OUTPUT
  DELETE_A_GONG_MEETING_V2_MEETINGS: GONG_DELETE_A_GONG_MEETING_V2_MEETINGS_OUTPUT
  DELETE_USERS_FROM_CALL_ACCESS_LIST: GONG_DELETE_USERS_FROM_CALL_ACCESS_LIST_OUTPUT
  ERASE_DATA_FOR_EMAIL_ADDRESS: GONG_ERASE_DATA_FOR_EMAIL_ADDRESS_OUTPUT
  ERASE_DATA_FOR_PHONE_NUMBER: GONG_ERASE_DATA_FOR_PHONE_NUMBER_OUTPUT
  FETCH_ALL_PERMISSION_PROFILES: GONG_FETCH_ALL_PERMISSION_PROFILES_OUTPUT
  GET_CRM_INTEGRATION_DETAILS: GONG_GET_CRM_INTEGRATION_DETAILS_OUTPUT
  GET_CRM_OBJECTS_V2_CRM_ENTITIES: GONG_GET_CRM_OBJECTS_V2_CRM_ENTITIES_OUTPUT
  GET_PERMISSION_PROFILE: GONG_GET_PERMISSION_PROFILE_OUTPUT
  GET_REQUEST_STATUS_V2_CRM_REQUEST_STATUS: GONG_GET_REQUEST_STATUS_V2_CRM_REQUEST_STATUS_OUTPUT
  LIST_ALL_COACHING_METRICS_V2_COACHING: GONG_LIST_ALL_COACHING_METRICS_V2_COACHING_OUTPUT
  LIST_ALL_COMPANY_WORKSPACES_V2_WORKSPACES: GONG_LIST_ALL_COMPANY_WORKSPACES_V2_WORKSPACES_OUTPUT
  LIST_ALL_USERS_V2_USERS: GONG_LIST_ALL_USERS_V2_USERS_OUTPUT
  LIST_FLOWS_FOR_CRM_PROSPECTS: GONG_LIST_FLOWS_FOR_CRM_PROSPECTS_OUTPUT
  LIST_FOLDER_CALLS: GONG_LIST_FOLDER_CALLS_OUTPUT
  LIST_GONG_ENGAGE_FLOWS_V2_FLOWS: GONG_LIST_GONG_ENGAGE_FLOWS_V2_FLOWS_OUTPUT
  LIST_SCHEMA_FIELDS_V2_CRM_ENTITY_SCHEMA: GONG_LIST_SCHEMA_FIELDS_V2_CRM_ENTITY_SCHEMA_OUTPUT
  LIST_USERS_BY_FILTER_V2_USERS_EXTENSIVE: GONG_LIST_USERS_BY_FILTER_V2_USERS_EXTENSIVE_OUTPUT
  MANAGE_USER_CALL_ACCESS: GONG_MANAGE_USER_CALL_ACCESS_OUTPUT
  POST_A_DIGITAL_INTERACTION_V2_DIGITAL_INTERACTION: GONG_POST_A_DIGITAL_INTERACTION_V2_DIGITAL_INTERACTION_OUTPUT
  POST_DAY_BY_DAY_ACTIVITY_STATS: GONG_POST_DAY_BY_DAY_ACTIVITY_STATS_OUTPUT
  POST_INTERACTION_FILTER_STATS: GONG_POST_INTERACTION_FILTER_STATS_OUTPUT
  POST_MEETING_INTEGRATION_STATUS: GONG_POST_MEETING_INTEGRATION_STATUS_OUTPUT
  REGISTER_CRM_INTEGRATION: GONG_REGISTER_CRM_INTEGRATION_OUTPUT
  REPORT_CONTENT_VIEWED_EVENT: GONG_REPORT_CONTENT_VIEWED_EVENT_OUTPUT
  REPORT_CUSTOM_ENGAGEMENT_EVENT: GONG_REPORT_CUSTOM_ENGAGEMENT_EVENT_OUTPUT
  RETRIEVE_CALL_DATA_BY_DATE_RANGE_V2_CALLS: GONG_RETRIEVE_CALL_DATA_BY_DATE_RANGE_V2_CALLS_OUTPUT
  RETRIEVE_DATA_FOR_A_SPECIFIC_CALL_V2_CALLS_ID: GONG_RETRIEVE_DATA_FOR_A_SPECIFIC_CALL_V2_CALLS_ID_OUTPUT
  RETRIEVE_DATA_PRIVACY_INFO_FOR_EMAIL_ADDRESS: GONG_RETRIEVE_DATA_PRIVACY_INFO_FOR_EMAIL_ADDRESS_OUTPUT
  RETRIEVE_FILTERED_CALL_DETAILS: GONG_RETRIEVE_FILTERED_CALL_DETAILS_OUTPUT
  RETRIEVE_LIBRARY_FOLDERS_V2_LIBRARY_FOLDERS: GONG_RETRIEVE_LIBRARY_FOLDERS_V2_LIBRARY_FOLDERS_OUTPUT
  RETRIEVE_LOGS_DATA_BY_TYPE_AND_TIME_RANGE_V2_LOGS: GONG_RETRIEVE_LOGS_DATA_BY_TYPE_AND_TIME_RANGE_V2_LOGS_OUTPUT
  RETRIEVE_MANUAL_CRM_CALL_ASSOCIATIONS: GONG_RETRIEVE_MANUAL_CRM_CALL_ASSOCIATIONS_OUTPUT
  RETRIEVE_SCORECARDS_DETAILS_V2_SETTINGS_SCORECARDS: GONG_RETRIEVE_SCORECARDS_DETAILS_V2_SETTINGS_SCORECARDS_OUTPUT
  RETRIEVE_TRACKER_DETAILS_V2_SETTINGS_TRACKERS: GONG_RETRIEVE_TRACKER_DETAILS_V2_SETTINGS_TRACKERS_OUTPUT
  RETRIEVE_TRANSCRIPTS_OF_CALLS_V2_CALLS_TRANSCRIPT: GONG_RETRIEVE_TRANSCRIPTS_OF_CALLS_V2_CALLS_TRANSCRIPT_OUTPUT
  RETRIEVE_USERS_FROM_PERMISSION_PROFILE: GONG_RETRIEVE_USERS_FROM_PERMISSION_PROFILE_OUTPUT
  RETRIEVE_USER_SETTINGS_HISTORY: GONG_RETRIEVE_USER_SETTINGS_HISTORY_OUTPUT
  RETRIEVE_USER_V2_USERS_ID: GONG_RETRIEVE_USER_V2_USERS_ID_OUTPUT
  SET_USER_CALL_ACCESS: GONG_SET_USER_CALL_ACCESS_OUTPUT
  UPDATE_A_GONG_MEETING_V2_MEETINGS_MEETING_ID: GONG_UPDATE_A_GONG_MEETING_V2_MEETINGS_MEETING_ID_OUTPUT
  UPDATE_PERMISSION_PROFILE_V2_PERMISSION_PROFILE: GONG_UPDATE_PERMISSION_PROFILE_V2_PERMISSION_PROFILE_OUTPUT
  UPDATE_SHARED_CONTENT_EVENT: GONG_UPDATE_SHARED_CONTENT_EVENT_OUTPUT
  UPLOAD_CRM_OBJECTS_V2_CRM_ENTITIES: GONG_UPLOAD_CRM_OBJECTS_V2_CRM_ENTITIES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GONG toolkit.
 */
export const GONG = {
  slug: "gong",
  tools: {
    /**
     * Adds a call media, recorded by a telephony system (pbx) or other media recording facility. gong accepts call recordings in various audio and video file formats, including wav, mp3, mp4, mkv and flac. if uploading a dual-channel (stereo) file separated by speaker, make sure to specify which channel correspondsto the company team member (rep) in the parties/mediachannelid parameter of the add new call operation. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:calls:create'.
     */
    ADD_CALL_MEDIA_V2_CALLS_ID_MEDIA: "GONG_ADD_CALL_MEDIA_V2_CALLS_ID_MEDIA",
    /**
     * When using this endpoint, either provide a downloadmediaurl or use the returned callid in a follow-up request to /v2/calls/{id}/media to upload the media file. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:calls:create'.
     */
    ADD_NEW_CALL_V2_CALLS: "GONG_ADD_NEW_CALL_V2_CALLS",
    /**
     * Lists the aggregated activity of multiple users within the gong system for each time period within the defined date range. this endpoint returns multiple records, one for each user. for each user there are items for every time period in the date range, including statistics about the user's activity. records are returned only for users with activity in the range. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:stats:user-actions'.
     */
    AGGREGATE_ACTIVITY_BY_PERIOD_VIA_API: "GONG_AGGREGATE_ACTIVITY_BY_PERIOD_VIA_API",
    /**
     * Lists the activity of multiple users within the gong system during a defined period. given the period, this endpoint returns multiple records, one for each user, with an applicable activity during the period. each record includes statistics about the user's activity. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:stats:user-actions'.
     */
    AGGREGATE_USER_ACTIVITY_STATISTICS: "GONG_AGGREGATE_USER_ACTIVITY_STATISTICS",
    /**
     * Use this endpoint to assign a number of prospects to a flow. prospects can be contacts or leads in your crm. generate a list of comma separated crm ids of the prospects you want to add to a flow. the flowinstanceowneremail parameter is the email address of the gong user who set up the flow instance and owns the flow to-dos. you can assign up to 200 prospects to a flow in a single request. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:flows:write'.
     */
    ASSIGN_PROSPECTS_TO_FLOW: "GONG_ASSIGN_PROSPECTS_TO_FLOW",
    /**
     * Retrieve all the answers for the scorecards that were reviewed during a specified date range, for calls that took place during a specified date range, for specific scorecards or for specific reviewed users. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:stats:scorecards'.
     */
    CREATE_ACTIVITY_SCORECARDS_REPORT: "GONG_CREATE_ACTIVITY_SCORECARDS_REPORT",
    /**
     * When accessed through a bearer token authorization method, this endpoint requires the scope 'api:meetings:user:create'.
     */
    CREATE_A_NEW_GONG_MEETING_V2_MEETINGS: "GONG_CREATE_A_NEW_GONG_MEETING_V2_MEETINGS",
    /**
     * Create a permission profile in a given workspace.
     */
    CREATE_PERMISSION_PROFILE_V2_PERMISSION_PROFILE: "GONG_CREATE_PERMISSION_PROFILE_V2_PERMISSION_PROFILE",
    /**
     * Shows the elements in the gong system that reference the given phone number. given a phone number, this endpoint returns details of any leads or contacts with this phone number and their associated calls and email messages. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:data-privacy:read'.
     */
    DATA_PRIVACY_FOR_PHONE_NUMBER: "GONG_DATA_PRIVACY_FOR_PHONE_NUMBER",
    /**
     * Deletes an existing crm integration from the gong platform. this endpoint should be used when you want to disconnect or remove a previously established integration between gong and a crm system, such as hubspot. it's particularly useful when you need to change crm providers, stop syncing data between gong and a specific crm, or troubleshoot integration issues by removing and re-adding the connection. the deletion is likely permanent, so use this endpoint with caution. it's important to note that this operation may affect data synchronization and potentially impact existing analytics or reports that rely on the integrated crm data.
     */
    DELETE_A_GENERIC_CRM_INTEGRATION_V2_CRM_INTEGRATIONS: "GONG_DELETE_A_GENERIC_CRM_INTEGRATION_V2_CRM_INTEGRATIONS",
    /**
     * When accessed through a bearer token authorization method, this endpoint requires the scope 'api:meetings:user:delete'.
     */
    DELETE_A_GONG_MEETING_V2_MEETINGS: "GONG_DELETE_A_GONG_MEETING_V2_MEETINGS",
    /**
     * Remove individual user access from calls. the request can only remove access previously given by the /v2/calls/users-access api. if a given user does not have access to the call, they will be unaffected. if a given user does have access to the call, but not through the pubic api (for example if the call was shared with the user), the user's access will remain unchanged. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:call-user-access:write'.
     */
    DELETE_USERS_FROM_CALL_ACCESS_LIST: "GONG_DELETE_USERS_FROM_CALL_ACCESS_LIST",
    /**
     * Given an email address, this endpoint deletes from the gong system any calls or email messages that reference this address. email messages sent to or from the address are deleted. calls where the email address appears (as a lead, contact, attendee or speaker) are deleted. leads or contacts with the email address are deleted. the deletion is not immediate, and may take several hours to complete. this endpoint contains a data integrity protection mechanism to prevent the deletion of an abnormal number of objects. if the deletion fails please contact support at help@gong.io delete the data from your crm and email system before performing this operation so that private data is not re-imported into gong. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:data-privacy:delete'.
     */
    ERASE_DATA_FOR_EMAIL_ADDRESS: "GONG_ERASE_DATA_FOR_EMAIL_ADDRESS",
    /**
     * Given a phone number, this endpoint deletes from the gong system any leads or contacts with a matching phone number or mobile phone number. email messages sent to or from these leads/contacts are deleted. calls where the leads/contacts appear are deleted. the deletion is not immediate, and may take several hours to complete. this endpoint contains a data integrity protection mechanism to prevent the deletion of an abnormal number of objects. if the deletion fails please contact support at help@gong.io delete the data from your crm and email system before performing this operation so that private data is not re-imported into gong. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:data-privacy:delete'.
     */
    ERASE_DATA_FOR_PHONE_NUMBER: "GONG_ERASE_DATA_FOR_PHONE_NUMBER",
    /**
     * Returns a list of all permission profiles. the listing is in the alphabetical order of the profile names.
     */
    FETCH_ALL_PERMISSION_PROFILES: "GONG_FETCH_ALL_PERMISSION_PROFILES",
    /**
     * <style>.public-api-info { background: rgb(222, 235, 255);}.public-api-tip { background: rgb(227, 252, 239);}.public-api-parameter { background: rgba(9,30,66,0.08);}.public-api-note { background: rgb(234, 230, 255);}.public-api-important { background: rgb(255, 250, 230);}.public-api-critical { background: rgb(255, 235, 230);}table, th, td { border: 1px solid gray; border-collapse: collapse;}th, td { padding: 5px;}th { text-align: left;}img { border: 2px solid #d3d5d9;}</style><p>returns the crm integration you set up using the <code>put /v2/crm/integrations</code> endpoint. you can only have one integration at a time. </p><p>when accessed using a bearer token, this endpoint requires the 'api:crm:integrations:read' scope.</p>
     */
    GET_CRM_INTEGRATION_DETAILS: "GONG_GET_CRM_INTEGRATION_DETAILS",
    /**
     * Retrieves crm entities from the gong platform. this endpoint allows users to fetch various crm objects such as accounts, deals, and contacts that have been integrated with gong's revenue intelligence system. it provides a way to access and utilize crm data within the context of gong's conversation analysis and insights. use this endpoint when you need to synchronize crm data with gong or when you want to retrieve the latest crm entity information for analysis or reporting purposes. the endpoint does not modify any data and is intended for read-only operations. note that the specific fields and structure of the returned entities may vary based on the crm system integrated with gong.
     */
    GET_CRM_OBJECTS_V2_CRM_ENTITIES: "GONG_GET_CRM_OBJECTS_V2_CRM_ENTITIES",
    /**
     * Returns a permission profile.
     */
    GET_PERMISSION_PROFILE: "GONG_GET_PERMISSION_PROFILE",
    /**
     * The getcrmrequeststatus endpoint retrieves the current status of crm integration requests in the gong platform. it allows users to check the progress and outcome of operations related to crm data uploads, synchronization, or other crm-related processes. this endpoint is particularly useful for monitoring the health and progress of crm integrations, troubleshooting issues, and ensuring data consistency between gong and connected crm systems. it should be used when you need to verify if a crm integration request has been completed, is still in progress, or has encountered any errors. the endpoint does not modify any data and is intended for status checking only. note that the specific details returned may vary depending on the type and complexity of the crm integration request being queried.
     */
    GET_REQUEST_STATUS_V2_CRM_REQUEST_STATUS: "GONG_GET_REQUEST_STATUS_V2_CRM_REQUEST_STATUS",
    /**
     * List all of the coaching metrics of a manager. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:coaching:read'.
     */
    LIST_ALL_COACHING_METRICS_V2_COACHING: "GONG_LIST_ALL_COACHING_METRICS_V2_COACHING",
    /**
     * Returns a list of all workspaces including their details. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:workspaces:read'.
     */
    LIST_ALL_COMPANY_WORKSPACES_V2_WORKSPACES: "GONG_LIST_ALL_COMPANY_WORKSPACES_V2_WORKSPACES",
    /**
     * List all of the company's users. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:users:read'.
     */
    LIST_ALL_USERS_V2_USERS: "GONG_LIST_ALL_USERS_V2_USERS",
    /**
     * Get the gong engage flows assigned to the given prospects. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:flows:read'.
     */
    LIST_FLOWS_FOR_CRM_PROSPECTS: "GONG_LIST_FLOWS_FOR_CRM_PROSPECTS",
    /**
     * Given a folder id, this endpoint retrieves a list of calls in it. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:library:read'.
     */
    LIST_FOLDER_CALLS: "GONG_LIST_FOLDER_CALLS",
    /**
     * Engage flows have the following visibility types: * company: visible to everyone in the company, can only be edited by users with edit permissions. * personal: reps can set up their own flows which are only available to them. * shared: reps can share a flow with other reps. those reps can then add leads to the flow. this endpoint returns all company flows, together with personal flows and flows shared with the user specified in the flowemailowner parameter. when accessed through a bearer token authorization method, use the 'api:flows:read' scope.
     */
    LIST_GONG_ENGAGE_FLOWS_V2_FLOWS: "GONG_LIST_GONG_ENGAGE_FLOWS_V2_FLOWS",
    /**
     * Retrieves the comprehensive schema of crm entities in the gong platform. this endpoint provides detailed metadata about the structure, attributes, and relationships of entities within the customer relationship management (crm) system. it is particularly useful for developers integrating with gong's api who need to understand the data model of the crm entities. the endpoint returns a complete view of all crm entity schemas, which can be used for data mapping, validation, or building dynamic forms. note that this endpoint does not accept any parameters, meaning it returns the full schema without filtering options. while powerful, be mindful of potential performance implications when dealing with large, complex crm structures.
     */
    LIST_SCHEMA_FIELDS_V2_CRM_ENTITY_SCHEMA: "GONG_LIST_SCHEMA_FIELDS_V2_CRM_ENTITY_SCHEMA",
    /**
     * List multiple users. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:users:read'.
     */
    LIST_USERS_BY_FILTER_V2_USERS_EXTENSIVE: "GONG_LIST_USERS_BY_FILTER_V2_USERS_EXTENSIVE",
    /**
     * Returns a list of users who have received individual access to calls through the api. this endpoint doesn't cover user that have access for other reasons (such as sharing recipients, or access through permission profiles). when accessed through a bearer token authorization method, this endpoint requires the scope 'api:call-user-access:read'.
     */
    MANAGE_USER_CALL_ACCESS: "GONG_MANAGE_USER_CALL_ACCESS",
    /**
     * When accessed through a bearer token authorization method, this endpoint requires the scope 'api:digital-interactions:write'.
     */
    POST_A_DIGITAL_INTERACTION_V2_DIGITAL_INTERACTION: "GONG_POST_A_DIGITAL_INTERACTION_V2_DIGITAL_INTERACTION",
    /**
     * Retrieve the daily activity of multiple users within the gong system for a range of dates. this endpoint returns records including statistics about each user's activity, on the daily level. records are returned only for users with activity in the range. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:stats:user-actions:detailed'.
     */
    POST_DAY_BY_DAY_ACTIVITY_STATS: "GONG_POST_DAY_BY_DAY_ACTIVITY_STATS",
    /**
     * Returns interaction stats for users based on calls that have whisper turned on. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:stats:interaction'.
     */
    POST_INTERACTION_FILTER_STATS: "GONG_POST_INTERACTION_FILTER_STATS",
    /**
     * When accessed through a bearer token authorization method, this endpoint requires the scope 'api:meetings:integration:status'.
     */
    POST_MEETING_INTEGRATION_STATUS: "GONG_POST_MEETING_INTEGRATION_STATUS",
    /**
     * Updates an existing crm integration in the gong platform. this endpoint allows you to modify the details of a previously set up integration between gong and your customer relationship management (crm) system. it's primarily used for changing the integration's name or reassigning the ownership to a different team member. this operation is crucial for maintaining accurate and up-to-date integration configurations, especially when there are changes in your organization's structure or integration strategies. note that this endpoint only updates the integration metadata and does not affect the actual data synchronization between gong and your crm.
     */
    REGISTER_CRM_INTEGRATION: "GONG_REGISTER_CRM_INTEGRATION",
    /**
     * Push engagement events into gong and display them as events in gong’s activity timeline, when a content is viewed by an external participant (for example, a contract was “viewed” by the prospect) when accessed through a bearer token authorization method, this endpoint requires the scope 'api:engagement-data:write'.
     */
    REPORT_CONTENT_VIEWED_EVENT: "GONG_REPORT_CONTENT_VIEWED_EVENT",
    /**
     * Push engagement events into gong and display them as events in gong’s activity timeline, when a content is engaged by an external participant (for example, a contract was “signed” by the prospect) when accessed through a bearer token authorization method, this endpoint requires the scope 'api:engagement-data:write'.
     */
    REPORT_CUSTOM_ENGAGEMENT_EVENT: "GONG_REPORT_CUSTOM_ENGAGEMENT_EVENT",
    /**
     * List calls that took place during a specified date range. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:calls:read:basic'.
     */
    RETRIEVE_CALL_DATA_BY_DATE_RANGE_V2_CALLS: "GONG_RETRIEVE_CALL_DATA_BY_DATE_RANGE_V2_CALLS",
    /**
     * Retrieve data for a specific call. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:calls:read:basic'.
     */
    RETRIEVE_DATA_FOR_A_SPECIFIC_CALL_V2_CALLS_ID: "GONG_RETRIEVE_DATA_FOR_A_SPECIFIC_CALL_V2_CALLS_ID",
    /**
     * Shows the elements in the gong system that reference the given email address. given an emails address, this endpoint returns details of all calls and email messages that reference this address, and any leads or contacts with this email address. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:data-privacy:read'.
     */
    RETRIEVE_DATA_PRIVACY_INFO_FOR_EMAIL_ADDRESS: "GONG_RETRIEVE_DATA_PRIVACY_INFO_FOR_EMAIL_ADDRESS",
    /**
     * Lists detailed call data for calls that took place during a specified date range, have specified call ids or hosted by specified users. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:calls:read:extensive'. moreover, clients requesting media download urls by the contentselector.exposedfields.media field should also have the scope 'api:calls:read:media-url'.
     */
    RETRIEVE_FILTERED_CALL_DETAILS: "GONG_RETRIEVE_FILTERED_CALL_DETAILS",
    /**
     * Use this endpoint to retrieve a list of public library folders. we do not allow retrieval of either private or archived folders. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:library:read'.
     */
    RETRIEVE_LIBRARY_FOLDERS_V2_LIBRARY_FOLDERS: "GONG_RETRIEVE_LIBRARY_FOLDERS_V2_LIBRARY_FOLDERS",
    /**
     * List log entries that took place during a specified time range. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:logs:read'.
     */
    RETRIEVE_LOGS_DATA_BY_TYPE_AND_TIME_RANGE_V2_LOGS: "GONG_RETRIEVE_LOGS_DATA_BY_TYPE_AND_TIME_RANGE_V2_LOGS",
    /**
     * Returns a list of all calls that were manually associated or re-associated with crm account and deal/opportunity since a given time. actions will be listed in the ascending order of their timing. notice if a call was associated and later re-associated the api will return both events. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:crm-calls:manual-association:read'.
     */
    RETRIEVE_MANUAL_CRM_CALL_ASSOCIATIONS: "GONG_RETRIEVE_MANUAL_CRM_CALL_ASSOCIATIONS",
    /**
     * Retrieve all the scorecards within the gong system. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:settings:scorecards:read'.
     */
    RETRIEVE_SCORECARDS_DETAILS_V2_SETTINGS_SCORECARDS: "GONG_RETRIEVE_SCORECARDS_DETAILS_V2_SETTINGS_SCORECARDS",
    /**
     * Retrieves details of all keyword trackers in the system or in a given workspace. when accessed through a bearer token authorization method, this endpoint requires the 'api:settings:trackers:read' scope.
     */
    RETRIEVE_TRACKER_DETAILS_V2_SETTINGS_TRACKERS: "GONG_RETRIEVE_TRACKER_DETAILS_V2_SETTINGS_TRACKERS",
    /**
     * Returns transcripts for calls that took place during the specified date period. if call ids are specified, only transcripts for calls with those ids that took place during the time period are returned. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:calls:read:transcript'.
     */
    RETRIEVE_TRANSCRIPTS_OF_CALLS_V2_CALLS_TRANSCRIPT: "GONG_RETRIEVE_TRANSCRIPTS_OF_CALLS_V2_CALLS_TRANSCRIPT",
    /**
     * Returns a list of all users whose access is controlled by the given permission profile. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:users:read'.
     */
    RETRIEVE_USERS_FROM_PERMISSION_PROFILE: "GONG_RETRIEVE_USERS_FROM_PERMISSION_PROFILE",
    /**
     * Retrieve a specific user's settings history. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:users:read'.
     */
    RETRIEVE_USER_SETTINGS_HISTORY: "GONG_RETRIEVE_USER_SETTINGS_HISTORY",
    /**
     * Retrieve a specific user. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:users:read'.
     */
    RETRIEVE_USER_V2_USERS_ID: "GONG_RETRIEVE_USER_V2_USERS_ID",
    /**
     * Give individual users access to calls. if a user already has access (perhaps the call was shared with them, or they have access through their permission profiles) the request will have no effect. when accessed through a bearer token authorization method, this endpoint requires the scope 'api:call-user-access:write'.
     */
    SET_USER_CALL_ACCESS: "GONG_SET_USER_CALL_ACCESS",
    /**
     * When accessed through a bearer token authorization method, this endpoint requires the scope 'api:meetings:user:update'.
     */
    UPDATE_A_GONG_MEETING_V2_MEETINGS_MEETING_ID: "GONG_UPDATE_A_GONG_MEETING_V2_MEETINGS_MEETING_ID",
    /**
     * Update a permission profile.
     */
    UPDATE_PERMISSION_PROFILE_V2_PERMISSION_PROFILE: "GONG_UPDATE_PERMISSION_PROFILE_V2_PERMISSION_PROFILE",
    /**
     * Push engagement events into gong and display them as events in gong’s activity timeline, when a gong user shares content with external participants (for example, a contract was “shared” by the account executive with his prospects) when accessed through a bearer token authorization method, this endpoint requires the scope 'api:engagement-data:write'.
     */
    UPDATE_SHARED_CONTENT_EVENT: "GONG_UPDATE_SHARED_CONTENT_EVENT",
    /**
     * Uploads crm data files to the gong platform for integration and analysis. this endpoint allows users to send large crm data files (up to 200mb) using a multipart/form-data request. it should be used when integrating crm systems with gong's revenue intelligence platform to provide up-to-date customer interaction data. the endpoint is specifically designed for file uploads and does not support other operations like querying or modifying existing data. ensure that the uploaded file contains properly structured crm data compatible with gong's system for successful integration and subsequent analysis.
     */
    UPLOAD_CRM_OBJECTS_V2_CRM_ENTITIES: "GONG_UPLOAD_CRM_OBJECTS_V2_CRM_ENTITIES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GONG".
 */
export type GONG_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GONG".
 */
export type GONG_TRIGGER_EVENTS = {}
