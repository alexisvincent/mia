// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ZOOM's ZOOM_ADD_A_MEETING_REGISTRANT tool input.
 */
type ZOOM_ADD_A_MEETING_REGISTRANT_INPUT = {
  /**
   * Address
   * @description The registrant"s address.
   */
  address?: string;
  /**
   * Auto Approve
   * @description If a meeting was scheduled with the `approval_type` field value of `1` (manual approval) but you want to automatically approve meeting registrants, set the value of this field to `true`.  **Note:** You cannot use this field to change approval setting for a meeting originally scheduled with the `approval_type` field value of `0` (automatic approval).
   */
  auto_approve?: boolean;
  /**
   * City
   * @description The registrant"s city.
   */
  city?: string;
  /**
   * Comments
   * @description The registrant"s questions and comments.
   */
  comments?: string;
  /**
   * Country
   * @description The registrant"s two-letter [country code](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries).
   */
  country?: string;
  /**
   * Custom Questions
   * @description Information about custom questions.
   */
  custom_questions?: {
      [key: string]: unknown;
  }[];
  /**
   * Email
   * Format: email
   * @description The registrant"s email address.
   */
  email?: string;
  /**
   * First Name
   * @description The registrant"s first name.
   */
  first_name?: string;
  /**
   * Industry
   * @description The registrant"s industry.
   */
  industry?: string;
  /**
   * Job Title
   * @description The registrant"s job title.
   */
  job_title?: string;
  /**
   * Language
   * @description The registrant"s language preference for confirmation emails:  * `en-US` &mdash; English (US)  * `de-DE` &mdash; German (Germany)  * `es-ES` &mdash; Spanish (Spain)  * `fr-FR` &mdash; French (France)  * `jp-JP` &mdash; Japanese  * `pt-PT` &mdash; Portuguese (Portugal)  * `ru-RU` &mdash; Russian  * `zh-CN` &mdash; Chinese (PRC)  * `zh-TW` &mdash; Chinese (Taiwan)  * `ko-KO` &mdash; Korean  * `it-IT` &mdash; Italian (Italy)  * `vi-VN` &mdash; Vietnamese  * `pl-PL` &mdash; Polish  * `Tr-TR` &mdash; Turkish
   * @enum {string}
   */
  language?: "en-US" | "de-DE" | "es-ES" | "fr-FR" | "jp-JP" | "pt-PT" | "ru-RU" | "zh-CN" | "zh-TW" | "ko-KO" | "it-IT" | "vi-VN" | "pl-PL" | "Tr-TR";
  /**
   * Last Name
   * @description The registrant"s last name.
   */
  last_name?: string;
  /**
   * Meeting Id
   * @description The meeting"s ID.   When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
   */
  meetingId?: number;
  /**
   * No Of Employees
   * @description The registrant"s number of employees:  * `1-20`  * `21-50`  * `51-100`  * `101-500`  * `500-1,000`  * `1,001-5,000`  * `5,001-10,000`  * `More than 10,000`
   * @enum {string}
   */
  no_of_employees?: "" | "1-20" | "21-50" | "51-100" | "101-500" | "500-1,000" | "1,001-5,000" | "5,001-10,000" | "More than 10,000";
  /**
   * Occurrence Ids
   * @description A comma-separated list of meeting occurrence IDs. You can get this value with the [Get a meeting](https://developers.zoom.us) API.
   */
  occurrence_ids?: string;
  /**
   * Org
   * @description The registrant"s organization.
   */
  org?: string;
  /**
   * Phone
   * @description The registrant"s phone number.
   */
  phone?: string;
  /**
   * Purchasing Time Frame
   * @description The registrant"s purchasing time frame:  * `Within a month`  * `1-3 months`  * `4-6 months`  * `More than 6 months`  * `No timeframe`
   * @enum {string}
   */
  purchasing_time_frame?: "" | "Within a month" | "1-3 months" | "4-6 months" | "More than 6 months" | "No timeframe";
  /**
   * Role In Purchase Process
   * @description The registrant"s role in the purchase process:  * `Decision Maker`  * `Evaluator/Recommender`  * `Influencer`  * `Not involved`
   * @enum {string}
   */
  role_in_purchase_process?: "" | "Decision Maker" | "Evaluator/Recommender" | "Influencer" | "Not involved";
  /**
   * State
   * @description The registrant"s state or province.
   */
  state?: string;
  /**
   * Zip
   * @description The registrant"s ZIP or postal code.
   */
  zip?: string;
};

/**
 * Type of ZOOM's ZOOM_ADD_A_MEETING_REGISTRANT tool output.
 */
type ZOOM_ADD_A_MEETING_REGISTRANT_OUTPUT = {
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
 * Type of ZOOM's ZOOM_ADD_A_WEBINAR_REGISTRANT tool input.
 */
type ZOOM_ADD_A_WEBINAR_REGISTRANT_INPUT = {
  /**
   * Address
   * @description The registrant"s address.
   */
  address?: string;
  /**
   * City
   * @description The registrant"s city.
   */
  city?: string;
  /**
   * Comments
   * @description The registrant"s questions and comments.
   */
  comments?: string;
  /**
   * Country
   * @description The registrant"s two-letter [country code](https://developers.zoom.us/docs/api/rest/other-references/abbreviation-lists/#countries).
   */
  country?: string;
  /**
   * Custom Questions
   * @description Information about custom questions.
   */
  custom_questions?: {
      [key: string]: unknown;
  }[];
  /**
   * Email
   * Format: email
   * @description The registrant"s email address.
   */
  email?: string;
  /**
   * First Name
   * @description The registrant"s first name.
   */
  first_name?: string;
  /**
   * Industry
   * @description The registrant"s industry.
   */
  industry?: string;
  /**
   * Job Title
   * @description The registrant"s job title.
   */
  job_title?: string;
  /**
   * Language
   * @description The registrant"s language preference for confirmation emails:  * `en-US` - English (US)  * `de-DE` - German (Germany)  * `es-ES` - Spanish (Spain)  * `fr-FR` - French (France)  * `jp-JP` - Japanese  * `pt-PT` - Portuguese (Portugal)  * `ru-RU` - Russian  * `zh-CN` - Chinese (PRC)  * `zh-TW` - Chinese (Taiwan)  * `ko-KO` - Korean  * `it-IT` - Italian (Italy)  * `vi-VN` - Vietnamese  * `pl-PL` - Polish  * `Tr-TR` - Turkish
   * @enum {string}
   */
  language?: "en-US" | "de-DE" | "es-ES" | "fr-FR" | "jp-JP" | "pt-PT" | "ru-RU" | "zh-CN" | "zh-TW" | "ko-KO" | "it-IT" | "vi-VN" | "pl-PL" | "Tr-TR";
  /**
   * Last Name
   * @description The registrant"s last name.
   */
  last_name?: string;
  /**
   * No Of Employees
   * @description The registrant"s number of employees:  * `1-20`  * `21-50`  * `51-100`  * `101-500`  * `500-1,000`  * `1,001-5,000`  * `5,001-10,000`  * `More than 10,000`
   * @enum {string}
   */
  no_of_employees?: "" | "1-20" | "21-50" | "51-100" | "101-500" | "500-1,000" | "1,001-5,000" | "5,001-10,000" | "More than 10,000";
  /**
   * Occurrence Ids
   * @description A comma-separated list of webinar occurrence IDs. Get this value with the [Get a webinar](https://developers.zoom.us) API. Make sure the `registration_type` is 3 if updating multiple occurrences with this API.
   */
  occurrence_ids?: string;
  /**
   * Org
   * @description The registrant"s organization.
   */
  org?: string;
  /**
   * Phone
   * @description The registrant"s phone number.
   */
  phone?: string;
  /**
   * Purchasing Time Frame
   * @description The registrant"s purchasing time frame:  * `Within a month`  * `1-3 months`  * `4-6 months`  * `More than 6 months`  * `No timeframe`
   * @enum {string}
   */
  purchasing_time_frame?: "" | "Within a month" | "1-3 months" | "4-6 months" | "More than 6 months" | "No timeframe";
  /**
   * Role In Purchase Process
   * @description The registrant"s role in the purchase process:  * `Decision Maker`  * `Evaluator/Recommender`  * `Influencer`  * `Not involved`
   * @enum {string}
   */
  role_in_purchase_process?: "" | "Decision Maker" | "Evaluator/Recommender" | "Influencer" | "Not involved";
  /**
   * Source Id
   * @description The tracking source"s unique identifier.
   */
  source_id?: string;
  /**
   * State
   * @description The registrant"s state or province.
   */
  state?: string;
  /**
   * Webinar Id
   * @description The webinar"s ID.
   */
  webinarId?: number;
  /**
   * Zip
   * @description The registrant"s ZIP or postal code.
   */
  zip?: string;
};

/**
 * Type of ZOOM's ZOOM_ADD_A_WEBINAR_REGISTRANT tool output.
 */
type ZOOM_ADD_A_WEBINAR_REGISTRANT_OUTPUT = {
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
 * Type of ZOOM's ZOOM_CREATE_A_MEETING tool input.
 */
type ZOOM_CREATE_A_MEETING_INPUT = {
  /**
   * Agenda
   * @description The meeting"s agenda. This value has a maximum length of 2,000 characters.
   */
  agenda?: string;
  /**
   * Default Password
   * @description Whether to generate a default passcode using the user"s settings. This value defaults to `false`.  If this value is `true` and the user has the PMI setting enabled with a passcode, then the user"s meetings will use the PMI passcode. It will **not** use a default passcode.
   * @default false
   */
  default_password: boolean;
  /**
   * Duration
   * @description The meeting"s scheduled duration, in minutes. This field is only used for scheduled meetings (`2`).
   */
  duration?: number;
  /**
   * Password
   * @description The passcode required to join the meeting. By default, a passcode can **only** have a maximum length of 10 characters and only contain alphanumeric characters and the `@`, `-`, `_`, and `*` characters.  * If the account owner or administrator has configured [minimum passcode requirement settings](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604), the passcode **must** meet those requirements.  * If passcode requirements are enabled, use the [**Get user settings**](https://developers.zoom.us/docs/api-reference/zoom-api/methods#operation/userSettings) API or the [**Get account settings**](https://developers.zoom.us/docs/api-reference/zoom-api/ma#operation/accountSettings) API to get the requirements.
   */
  password?: string;
  /**
   * Pre Schedule
   * @description Whether to create a prescheduled meeting via the [GSuite app](https://support.zoom.us/hc/en-us/articles/360020187492-Zoom-for-GSuite-add-on). This **only** supports the meeting `type` value of `2` (scheduled meetings) and `3` (recurring meetings with no fixed time).  * `true` - Create a prescheduled meeting.  * `false` - Create a regular meeting.
   * @default false
   */
  pre_schedule: boolean;
  /**
   * Recurrence  End  Date  Time
   * Format: date-time
   * @description Select the final date when the meeting will recur before it is canceled. Should be in UTC time, such as 2017-11-25T12:00:00Z. Cannot be used with `end_times`.
   */
  recurrence__end__date__time?: string;
  /**
   * Recurrence  End  Times
   * @description Select how many times the meeting should recur before it is canceled. If `end_times` is set to 0, it means there is no end time. The maximum number of recurring is 60. Cannot be used with `end_date_time`.
   * @default 1
   */
  recurrence__end__times: number;
  /**
   * Recurrence  Monthly  Day
   * @description Use this field **only if you"re scheduling a recurring meeting of type** `3` to state the day in a month when the meeting should recur. The value range is from 1 to 31. For the meeting to recur on 23rd of each month, provide `23` as this field"s value and `1` as the `repeat_interval` field"s value. Instead, if you would like the meeting to recur every three months, on 23rd of the month, change the value of the `repeat_interval` field to `3`.
   * @default 1
   */
  recurrence__monthly__day: number;
  /**
   * Recurrence  Monthly  Week
   * @description Use this field **only if you"re scheduling a recurring meeting of type** `3` to state the week of the month when the meeting should recur. If you use this field, you must also use the `monthly_week_day` field to state the day of the week when the meeting should recur.     `-1` - Last week of the month.    `1` - First week of the month.    `2` - Second week of the month.    `3` - Third week of the month.    `4` - Fourth week of the month.
   */
  recurrence__monthly__week?: number;
  /**
   * Recurrence  Monthly  Week  Day
   * @description Use this field **only if you"re scheduling a recurring meeting of type** `3` to state a specific day in a week when the monthly meeting should recur. To use this field, you must also use the `monthly_week` field.      `1` - Sunday.    `2` - Monday.    `3` - Tuesday.    `4` -  Wednesday.    `5` - Thursday.    `6` - Friday.    `7` - Saturday.
   */
  recurrence__monthly__week__day?: number;
  /**
   * Recurrence  Repeat  Interval
   * @description Define the interval when the meeting should recur. For instance, to schedule a meeting that recurs every two months, set this field"s value as `2` and the value of the `type` parameter as `3`.  For a daily meeting, the maximum interval you can set is `90` days. For a weekly meeting the maximum interval that you can set is  of `12` weeks. For a monthly meeting, there is a maximum of `3` months.
   */
  recurrence__repeat__interval?: number;
  /**
   * Recurrence  Type
   * @description Recurrence meeting types.  `1` - Daily.    `2` - Weekly.    `3` - Monthly.
   * @default 2
   */
  recurrence__type: number;
  /**
   * Recurrence  Weekly  Days
   * @description This field is required if you"re scheduling a recurring meeting of type `2` to state the days of the week when the meeting should repeat.       The value for this field could be a number between `1` to `7` in string format. For instance, if the meeting should recur on Sunday, provide `1` as this field"s value.         **Note:** To set the meeting to occur on multiple days of a week, provide comma separated values for this field. For instance, if the meeting should recur on Sundays and Tuesdays, provide `1,3` as this field"s value.      `1` - Sunday.     `2` - Monday.    `3` - Tuesday.    `4` -  Wednesday.    `5` -  Thursday.    `6` - Friday.    `7` - Saturday.
   * @default 1
   * @enum {string}
   */
  recurrence__weekly__days: "1" | "2" | "3" | "4" | "5" | "6" | "7";
  /**
   * Schedule For
   * @description The email address or user ID of the user to schedule a meeting for.
   */
  schedule_for?: string;
  /**
   * Settings  Additional  Data  Center  Regions
   * @description Add additional meeting [data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars). Provide this value as an array of [country codes](https://developers.zoom.us/docs/api/rest/other-references/abbreviation-lists/#countries) for the countries available as data center regions in the [**Account Profile**](https://zoom.us/account/setting) interface but have been opted out of in the [user settings](https://zoom.us/profile). For example, the data center regions selected in your [**Account Profile**](https://zoom.us/account) are `Europe`, `Hong Kong SAR`, `Australia`, `India`, `Japan`, `China`, `United States`, and `Canada`. However, in the [**My Profile**](https://zoom.us/profile) settings, you did **not** select `India` and `Japan` for meeting and webinar traffic routing. To include `India` and `Japan` as additional data centers, use the `[IN, TY]` value for this field.
   */
  settings__additional__data__center__regions?: string[];
  /**
   * Settings  Allow  Multiple  Devices
   * @description Whether to allow attendees to join a meeting from multiple devices. This setting is only applied to meetings with registration enabled.
   */
  settings__allow__multiple__devices?: boolean;
  /**
   * Settings  Alternative  Host  Update  Polls
   * @description Whether the **Allow alternative hosts to add or edit polls** feature is enabled. This requires Zoom version 5.8.0 or higher.
   */
  settings__alternative__host__update__polls?: boolean;
  /**
   * Settings  Alternative  Hosts
   * @description A semicolon-separated list of the meeting"s alternative hosts" email addresses or IDs.
   */
  settings__alternative__hosts?: string;
  /**
   * Settings  Alternative  Hosts  Email  Notification
   * @description Whether to send email notifications to alternative hosts. This value defaults to `true`.
   * @default true
   */
  settings__alternative__hosts__email__notification: boolean;
  /**
   * Settings  Approval  Type
   * @description Enable meeting registration approval. * `0` - Automatically approve registration. * `1` - Manually approve registration. * `2` - No registration required. This value defaults to `2`.
   * @default 2
   */
  settings__approval__type: number;
  /**
   * Settings  Approved  Or  Denied  Countries  Or  Regions  Approved  List
   * @description The list of approved countries or regions.
   */
  settings__approved__or__denied__countries__or__regions__approved__list?: string[];
  /**
   * Settings  Approved  Or  Denied  Countries  Or  Regions  Denied  List
   * @description The list of blocked countries or regions.
   */
  settings__approved__or__denied__countries__or__regions__denied__list?: string[];
  /**
   * Settings  Approved  Or  Denied  Countries  Or  Regions  Enable
   * @description Whether to enable the [**Approve or block entry for users from specific countries/regions**](https://support.zoom.us/hc/en-us/articles/360060086231-Approve-or-block-entry-for-users-from-specific-countries-regions) setting.
   */
  settings__approved__or__denied__countries__or__regions__enable?: boolean;
  /**
   * Settings  Approved  Or  Denied  Countries  Or  Regions  Method
   * @description Whether to allow or block users from specific countries or regions. * `approve` - Allow users from specific countries or regions to join the meeting. If you select this setting, include the approved countries or regions in the `approved_list` field.  * `deny` - Block users from specific countries or regions from joining the meeting. If you select this setting, include the blocked countries or regions in the `denied_list` field.
   * @enum {string}
   */
  settings__approved__or__denied__countries__or__regions__method?: "approve" | "deny";
  /**
   * Settings  Audio
   * @description How participants join the audio portion of the meeting. * `both` - Both telephony and VoIP.  * `telephony` - Telephony only.  * `voip` - VoIP only.  * `thirdParty` - Third party audio conference.
   * @default both
   * @enum {string}
   */
  settings__audio: "both" | "telephony" | "voip" | "thirdParty";
  /**
   * Settings  Audio  Conference  Info
   * @description Third party audio conference info.
   */
  settings__audio__conference__info?: string;
  /**
   * Settings  Authentication  Domains
   * @description The meeting"s authenticated domains. Only Zoom users whose email address contains an authenticated domain can join the meeting. Comma-separate multiple domains or use a wildcard for listing domains.
   */
  settings__authentication__domains?: string;
  /**
   * Settings  Authentication  Exception
   * @description A list of participants that can bypass meeting authentication. These participants will receive a unique meeting invite.
   */
  settings__authentication__exception?: {
      [key: string]: unknown;
  }[];
  /**
   * Settings  Authentication  Option
   * @description If the `meeting_authentication` value is `true`, the type of authentication required for users to join a meeting. To get this value, use the `authentication_options` array"s `id` value in the [**Get user settings**](https://developers.zoom.us/docs/api-reference/zoom-api/methods#operation/userSettings) API response.
   */
  settings__authentication__option?: string;
  /**
   * Settings  Auto  Recording
   * @description The automatic recording settings.  * `local` - Record the meeting locally.  * `cloud` - Record the meeting to the cloud.  * `none` - Auto-recording disabled. This value defaults to `none`.
   * @default none
   * @enum {string}
   */
  settings__auto__recording: "local" | "cloud" | "none";
  /**
   * Settings  Auto  Start  Ai  Companion  Questions
   * @description Whether to automatically start AI Companion questions.
   * @default false
   */
  settings__auto__start__ai__companion__questions: boolean;
  /**
   * Settings  Auto  Start  Meeting  Summary
   * @description Whether to automatically start a meeting summary.
   * @default false
   */
  settings__auto__start__meeting__summary: boolean;
  /**
   * Settings  Breakout  Room  Enable
   * @description Whether to enable the [**Breakout Room pre-assign**](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms) option.
   */
  settings__breakout__room__enable?: boolean;
  /**
   * Settings  Breakout  Room  Rooms
   * @description Information about the breakout rooms.
   */
  settings__breakout__room__rooms?: {
      [key: string]: unknown;
  }[];
  /**
   * Settings  Calendar  Type
   * @description Indicates the type of calendar integration used to schedule the meeting. * `1` - [Zoom Outlook add-in](https://support.zoom.us/hc/en-us/articles/360031592971-Getting-started-with-Outlook-plugin-and-add-in)  * `2` - [Zoom for Google Workspace add-on](https://support.zoom.us/hc/en-us/articles/360020187492-Using-the-Zoom-for-Google-Workspace-add-on) Works with the `private_meeting` field to determine whether to share details of meetings or not.
   */
  settings__calendar__type?: number;
  /**
   * Settings  Close  Registration
   * @description Whether to close registration after the event date. This value defaults to `false`.
   * @default false
   */
  settings__close__registration: boolean;
  /**
   * Settings  Cn  Meeting
   * @description Whether to host the meeting in China (CN). This value defaults to `false`.
   * @default false
   */
  settings__cn__meeting: boolean;
  /**
   * Settings  Contact  Email
   * @description The contact email address for meeting registration.
   */
  settings__contact__email?: string;
  /**
   * Settings  Contact  Name
   * @description The contact name for meeting registration.
   */
  settings__contact__name?: string;
  /**
   * Settings  Continuous  Meeting  Chat  Auto  Add  Invited  External  Users
   * @description Whether to enable the **Automatically add invited external users** setting.
   */
  settings__continuous__meeting__chat__auto__add__invited__external__users?: boolean;
  /**
   * Settings  Continuous  Meeting  Chat  Enable
   * @description Whether to enable the **Enable continuous meeting chat** setting.
   */
  settings__continuous__meeting__chat__enable?: boolean;
  /**
   * Settings  Email  Notification
   * @description Whether to send email notifications to [alternative hosts](https://support.zoom.us/hc/en-us/articles/208220166) and [users with scheduling privileges](https://support.zoom.us/hc/en-us/articles/201362803-Scheduling-privilege). This value defaults to `true`.
   * @default true
   */
  settings__email__notification: boolean;
  /**
   * Settings  Encryption  Type
   * @description The type of [end-to-end (E2EE) encryption](https://support.zoom.us/hc/en-us/articles/360048660871) to use for the meeting.  * `enhanced_encryption` - Enhanced encryption. Encryption is stored in the cloud when you enable this option.  * `e2ee` - End-to-end encryption. The encryption key is stored on your local device and **cannot** be obtained by anyone else. When you use E2EE encryption, [certain features](https://support.zoom.us/hc/en-us/articles/360048660871), such as cloud recording or phone and SIP/H.323 dial-in, are **disabled**.
   * @enum {string}
   */
  settings__encryption__type?: "enhanced_encryption" | "e2ee";
  /**
   * Settings  Focus  Mode
   * @description Whether to enable the [**Focus Mode** feature](https://support.zoom.us/hc/en-us/articles/360061113751-Using-focus-mode) when the meeting starts.
   */
  settings__focus__mode?: boolean;
  /**
   * Settings  Global  Dial  In  Countries
   * @description A list of available global dial-in countries.
   */
  settings__global__dial__in__countries?: string[];
  /**
   * Settings  Host  Save  Video  Order
   * @description Whether the **Allow host to save video order** feature is enabled.
   */
  settings__host__save__video__order?: boolean;
  /**
   * Settings  Host  Video
   * @description Whether to start meetings with the host video on.
   */
  settings__host__video?: boolean;
  /**
   * Settings  In  Meeting
   * @description Whether to host the meeting in India (IN). This value defaults to `false`.
   * @default false
   */
  settings__in__meeting: boolean;
  /**
   * Settings  Internal  Meeting
   * @description Whether to set the meeting as an internal meeting.
   * @default false
   */
  settings__internal__meeting: boolean;
  /**
   * Settings  Jbh  Time
   * @description If the value of the `join_before_host` field is `true`, this field indicates the time limits when a participant can join a meeting before the meeting"s host. * `0` - Allow the participant to join the meeting at anytime. * `5` - Allow the participant to join 5 minutes before the meeting"s start time. * `10` - Allow the participant to join 10 minutes before the meeting"s start time.
   */
  settings__jbh__time?: number;
  /**
   * Settings  Join  Before  Host
   * @description Whether participants can join the meeting before its host. This field is only used for scheduled meetings (`2`) or recurring meetings (`3` and `8`). This value defaults to `false`. If the [**Waiting Room** feature](https://support.zoom.us/hc/en-us/articles/115000332726-Waiting-Room) is enabled, this setting is **disabled**.
   * @default false
   */
  settings__join__before__host: boolean;
  /**
   * Settings  Language  Interpretation  Enable
   * @description Whether to enable [language interpretation](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars) for the meeting.
   */
  settings__language__interpretation__enable?: boolean;
  /**
   * Settings  Language  Interpretation  Interpreters
   * @description Information about the meeting"s language interpreters.
   */
  settings__language__interpretation__interpreters?: {
      [key: string]: unknown;
  }[];
  /**
   * Settings  Meeting  Authentication
   * @description If true, only [authenticated](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) users can join the meeting.
   */
  settings__meeting__authentication?: boolean;
  /**
   * Settings  Meeting  Invitees
   * @description A list of the meeting"s invitees.
   */
  settings__meeting__invitees?: {
      [key: string]: unknown;
  }[];
  /**
   * Settings  Mute  Upon  Entry
   * @description Whether to mute participants upon entry.
   * @default false
   */
  settings__mute__upon__entry: boolean;
  /**
   * Settings  Participant  Focused  Meeting
   * @description Whether to set the meeting as a participant focused meeting.
   * @default false
   */
  settings__participant__focused__meeting: boolean;
  /**
   * Settings  Participant  Video
   * @description Whether to start meetings with the participant video on.
   */
  settings__participant__video?: boolean;
  /**
   * Settings  Private  Meeting
   * @description Whether to set the meeting as private.
   */
  settings__private__meeting?: boolean;
  /**
   * Settings  Push  Change  To  Calendar
   * @description Whether to push meeting changes to the calendar.   To enable this feature, configure the **Configure Calendar and Contacts Service** in the user"s profile page of the Zoom web portal and enable the **Automatically sync Zoom calendar events information bi-directionally between Zoom and integrated calendars.** setting in the **Settings** page of the Zoom web portal. * `true` - Push meeting changes to the calendar. * `false` - Do not push meeting changes to the calendar.
   * @default false
   */
  settings__push__change__to__calendar: boolean;
  /**
   * Settings  Registrants  Confirmation  Email
   * @description Whether to send registrants an email confirmation.  * `true` - Send a confirmation email.  * `false` - Do not send a confirmation email.
   */
  settings__registrants__confirmation__email?: boolean;
  /**
   * Settings  Registrants  Email  Notification
   * @description Whether to send registrants email notifications about their registration approval, cancellation, or rejection. * `true` - Send an email notification. * `false` - Do not send an email notification.  Set this value to `true` to also use the `registrants_confirmation_email` parameter.
   */
  settings__registrants__email__notification?: boolean;
  /**
   * Settings  Registration  Type
   * @description The meeting"s registration type.  * `1` - Attendees register once and can attend any meeting occurrence.  * `2` - Attendees must register for each meeting occurrence.  * `3` - Attendees register once and can select one or more meeting occurrences to attend. This field is only for recurring meetings with fixed times (`8`). This value defaults to `1`.
   * @default 1
   */
  settings__registration__type: number;
  /**
   * Settings  Resources
   * @description The meeting"s resources.
   */
  settings__resources?: {
      [key: string]: unknown;
  }[];
  /**
   * Settings  Show  Share  Button
   * @description Whether to include social media sharing buttons on the meeting"s registration page. This setting is only applied to meetings with registration enabled.
   */
  settings__show__share__button?: boolean;
  /**
   * Settings  Sign  Language  Interpretation  Enable
   * @description Whether to enable [sign language interpretation](https://support.zoom.us/hc/en-us/articles/9644962487309-Using-sign-language-interpretation-in-a-meeting-or-webinar) for the meeting.
   */
  settings__sign__language__interpretation__enable?: boolean;
  /**
   * Settings  Sign  Language  Interpretation  Interpreters
   * @description Information about the meeting"s sign language interpreters.
   */
  settings__sign__language__interpretation__interpreters?: {
      [key: string]: unknown;
  }[];
  /**
   * Settings  Use  Pmi
   * @description Whether to use a [Personal Meeting ID (PMI)](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#understanding-personal-meeting-id-pmi) instead of a generated meeting ID. This field is only used for scheduled meetings (`2`), instant meetings (`1`), or recurring meetings with no fixed time (`3`). This value defaults to `false`.
   * @default false
   */
  settings__use__pmi: boolean;
  /**
   * Settings  Waiting  Room
   * @description Whether to enable the [**Waiting Room** feature](https://support.zoom.us/hc/en-us/articles/115000332726-Waiting-Room). If this value is `true`, this **disables** the `join_before_host` setting.
   */
  settings__waiting__room?: boolean;
  /**
   * Settings  Watermark
   * @description Whether to add a watermark when viewing a shared screen.
   * @default false
   */
  settings__watermark: boolean;
  /**
   * Start Time
   * Format: date-time
   * @description The meeting"s start time. This field is only used for scheduled or recurring meetings with a fixed time. This supports local time and GMT formats.  * To set a meeting"s start time in GMT, use the `yyyy-MM-ddTHH:mm:ssZ` date-time format. For example, `2020-03-31T12:02:00Z`.  * To set a meeting"s start time using a specific timezone, use the `yyyy-MM-ddTHH:mm:ss` date-time format and specify the [timezone ID](https://developers.zoom.us/docs/api/rest/other-references/abbreviation-lists/#timezones) in the `timezone` field. If you do not specify a timezone, the `timezone` value defaults to your Zoom account"s timezone. You can also use `UTC` for the `timezone` value. **Note:** If no `start_time` is set for a scheduled meeting, the `start_time` is set at the current time and the meeting type changes to an instant meeting, which expires after 30 days.
   */
  start_time?: string;
  /**
   * Template Id
   * @description The account admin meeting template ID used to schedule a meeting using a [meeting template](https://support.zoom.us/hc/en-us/articles/360036559151-Meeting-templates). For a list of account admin-provided meeting templates, use the [**List meeting templates**](https://developers.zoom.us/docs/api-reference/zoom-api/methods#operation/listMeetingTemplates) API.  * At this time, this field **only** accepts account admin meeting template IDs.  * To enable the account admin meeting templates feature, [contact Zoom support](https://support.zoom.us/hc/en-us).
   */
  template_id?: string;
  /**
   * Timezone
   * @description The timezone to assign to the `start_time` value. This field is only used for scheduled or recurring meetings with a fixed time. For a list of supported timezones and their formats, see our [timezone list](https://developers.zoom.us/docs/api/rest/other-references/abbreviation-lists/#timezones).
   */
  timezone?: string;
  /**
   * Topic
   * @description The meeting"s topic.
   */
  topic?: string;
  /**
   * Tracking Fields
   * @description Information about the meeting"s tracking fields.
   */
  tracking_fields?: {
      [key: string]: unknown;
  }[];
  /**
   * Type
   * @description The type of meeting. * `1` - An instant meeting.  * `2` - A scheduled meeting.  * `3` - A recurring meeting with no fixed time.  * `8` - A recurring meeting with fixed time.
   * @default 2
   */
  type: number;
  /**
   * User Id
   * @description The user"s user ID or email address. For user-level apps, pass the `me` value.
   */
  userId?: string;
};

/**
 * Type of ZOOM's ZOOM_CREATE_A_MEETING tool output.
 */
type ZOOM_CREATE_A_MEETING_OUTPUT = {
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
 * Type of ZOOM's ZOOM_DELETE_MEETING_RECORDINGS tool input.
 */
type ZOOM_DELETE_MEETING_RECORDINGS_INPUT = {
  /**
   * Action
   * @description The recording delete actions:    `trash` - Move recording to trash.    `delete` - Delete recording permanently.
   * @default trash
   * @enum {string}
   */
  action: "trash" | "delete";
  /**
   * Meeting Id
   * @description To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance.  To get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance.  If a UUID starts with &quot;/&quot; or contains &quot;//&quot; (example: &quot;/ajXp112QmuoKj4854875==&quot;), you must **[double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid)** the UUID before making an API request.
   */
  meetingId?: string;
};

/**
 * Type of ZOOM's ZOOM_DELETE_MEETING_RECORDINGS tool output.
 */
type ZOOM_DELETE_MEETING_RECORDINGS_OUTPUT = {
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
 * Type of ZOOM's ZOOM_GET_A_MEETING tool input.
 */
type ZOOM_GET_A_MEETING_INPUT = {
  /**
   * Meeting Id
   * @description The meeting"s ID.   When storing this value in your database, store it as a long format integer and **not** an integer. Meeting IDs can be more than 10 digits.
   */
  meetingId?: number;
  /**
   * Occurrence Id
   * @description Meeting occurrence ID. Provide this field to view meeting details of a particular occurrence of the [recurring meeting](https://support.zoom.us/hc/en-us/articles/214973206-Scheduling-Recurring-Meetings).
   */
  occurrence_id?: string;
  /**
   * Show Previous Occurrences
   * @description Set this field"s value to `true` to view meeting details of all previous occurrences of a [recurring meeting](https://support.zoom.us/hc/en-us/articles/214973206-Scheduling-Recurring-Meetings).
   */
  show_previous_occurrences?: boolean;
};

/**
 * Type of ZOOM's ZOOM_GET_A_MEETING tool output.
 */
type ZOOM_GET_A_MEETING_OUTPUT = {
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
 * Type of ZOOM's ZOOM_GET_A_MEETING_SUMMARY tool input.
 */
type ZOOM_GET_A_MEETING_SUMMARY_INPUT = {
  /**
   * Meeting Id
   * @description The meeting"s universally unique ID (UUID). When you provide a meeting UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the meeting UUID before making an API request.
   */
  meetingId?: string;
};

/**
 * Type of ZOOM's ZOOM_GET_A_MEETING_SUMMARY tool output.
 */
type ZOOM_GET_A_MEETING_SUMMARY_OUTPUT = {
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
 * Type of ZOOM's ZOOM_GET_A_WEBINAR tool input.
 */
type ZOOM_GET_A_WEBINAR_INPUT = {
  /**
   * Occurrence Id
   * @description Unique identifier for an occurrence of a recurring webinar. [Recurring webinars](https://support.zoom.us/hc/en-us/articles/216354763-How-to-Schedule-A-Recurring-Webinar) can have a maximum of 50 occurrences. When you create a recurring Webinar using [**Create a webinar**](https://developers.zoom.us) API, you can retrieve the Occurrence ID from the response of the API call.
   */
  occurrence_id?: string;
  /**
   * Show Previous Occurrences
   * @description Set the value of this field to `true` if you would like to view Webinar details of all previous occurrences of a recurring Webinar.
   */
  show_previous_occurrences?: boolean;
  /**
   * Webinar Id
   * @description The webinar"s ID or universally unique ID (UUID).
   */
  webinarId?: string;
};

/**
 * Type of ZOOM's ZOOM_GET_A_WEBINAR tool output.
 */
type ZOOM_GET_A_WEBINAR_OUTPUT = {
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
 * Type of ZOOM's ZOOM_GET_DAILY_USAGE_REPORT tool input.
 */
type ZOOM_GET_DAILY_USAGE_REPORT_INPUT = {
  /**
   * Group Id
   * @description The group ID. To get a group ID, use the [**List groups**](https://developers.zoom.us) API.   **Note:** The API response will only contain users who are members of the queried group ID.
   */
  group_id?: string;
  /**
   * Month
   * @description Month for this report
   */
  month?: number;
  /**
   * Year
   * @description Year for this report
   */
  year?: number;
};

/**
 * Type of ZOOM's ZOOM_GET_DAILY_USAGE_REPORT tool output.
 */
type ZOOM_GET_DAILY_USAGE_REPORT_OUTPUT = {
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
 * Type of ZOOM's ZOOM_GET_MEETING_RECORDINGS tool input.
 */
type ZOOM_GET_MEETING_RECORDINGS_INPUT = {
  /**
   * Include Fields
   * @description The `download_access_token` value for downloading the meeting"s recordings.
   */
  include_fields?: string;
  /**
   * Meeting Id
   * @description To get a meeting"s cloud recordings, provide the meeting ID or UUID. If providing the meeting ID instead of UUID, the response will be for the latest meeting instance.  To get a webinar"s cloud recordings, provide the webinar"s ID or UUID. If providing the webinar ID instead of UUID, the response will be for the latest webinar instance.  If a UUID starts with `/` or contains `//` (example: `/ajXp112QmuoKj4854875==`), **[double encode](https://developers.zoom.us) the UUID** before making an API request.
   */
  meetingId?: string;
  /**
   * Ttl
   * @description The `download_access_token` Time to Live (TTL) value. This parameter is only valid if the `include_fields` query parameter contains the `download_access_token` value.
   */
  ttl?: number;
};

/**
 * Type of ZOOM's ZOOM_GET_MEETING_RECORDINGS tool output.
 */
type ZOOM_GET_MEETING_RECORDINGS_OUTPUT = {
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
 * Type of ZOOM's ZOOM_GET_PAST_MEETING_PARTICIPANTS tool input.
 */
type ZOOM_GET_PAST_MEETING_PARTICIPANTS_INPUT = {
  /**
   * Meeting Id
   * @description The meeting"s ID or universally unique ID (UUID).  * If you provide a meeting ID, the API will return a response for the latest meeting instance.  * If you provide a meeting UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the meeting UUID before making an API request.
   */
  meetingId?: string;
  /**
   * Next Page Token
   * @description Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token"s expiration period is 15 minutes.
   */
  next_page_token?: string;
  /**
   * Page Size
   * @description The number of records returned within a single API call.
   * @default 30
   */
  page_size: number;
};

/**
 * Type of ZOOM's ZOOM_GET_PAST_MEETING_PARTICIPANTS tool output.
 */
type ZOOM_GET_PAST_MEETING_PARTICIPANTS_OUTPUT = {
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
 * Type of ZOOM's ZOOM_LIST_ALL_RECORDINGS tool input.
 */
type ZOOM_LIST_ALL_RECORDINGS_INPUT = {
  /**
   * From
   * @description The start date in "yyyy-mm-dd" UTC format for the date range where you would like to retrieve recordings. The maximum range can be a month. If no value is provided for this field, the default will be current date.  For example, if you make the API request on June 30, 2020, without providing the `from` and `to` parameters, by default the value of "from" field will be `2020-06-30` and the value of the "to" field will be `2020-07-01`.  **Note**: The `trash` files cannot be filtered by date range and thus, the `from` and `to` fields should not be used for trash files.
   */
  from?: string;
  /**
   * Mc
   * @description The query metadata of the recording if using an on-premise meeting connector for the meeting.
   * @default false
   */
  mc: string;
  /**
   * Meeting Id
   * @description The meeting ID.
   */
  meeting_id?: number;
  /**
   * Next Page Token
   * @description The next page token paginates through a large set of results. A next page token returns whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
   */
  next_page_token?: string;
  /**
   * Page Size
   * @description The number of records returned within a single API call.
   * @default 30
   */
  page_size: number;
  /**
   * To
   * @description The end date in "yyyy-mm-dd" "yyyy-mm-dd" UTC format.
   */
  to?: string;
  /**
   * Trash
   * @description The query trash. * `true` - List recordings from trash.   * `false` - Do not list recordings from the trash.   The default value is `false`. If you set it to `true`, you can use the `trash_type` property to indicate the type of Cloud recording that you need to retrieve.
   * @default false
   */
  trash: boolean;
  /**
   * Trash Type
   * @description The type of cloud recording to retrieve from the trash.     *   `meeting_recordings`: List all meeting recordings from the trash.    *  `recording_file`: List all individual recording files from the trash.
   * @default meeting_recordings
   */
  trash_type: string;
  /**
   * User Id
   * @description The user"s ID or email address. For user-level apps, pass the `me` value.
   */
  userId?: string;
};

/**
 * Type of ZOOM's ZOOM_LIST_ALL_RECORDINGS tool output.
 */
type ZOOM_LIST_ALL_RECORDINGS_OUTPUT = {
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
 * Type of ZOOM's ZOOM_LIST_ARCHIVED_FILES tool input.
 */
type ZOOM_LIST_ARCHIVED_FILES_INPUT = {
  /**
   * From
   * @description The query start date, in `yyyy-MM-dd"T"HH:mm:ssZ` format. This value and the `to` query parameter value cannot exceed seven days.
   */
  from?: string;
  /**
   * Group Id
   * @description The group ID. To get a group ID, use the [List groups](https://developers.zoom.us/docs/api/rest/reference/scim-api/methods/#operation/groupSCIM2List) API.
   */
  group_id?: string;
  /**
   * Next Page Token
   * @description Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token"s expiration period is 15 minutes.
   */
  next_page_token?: string;
  /**
   * Page Size
   * @description The number of records returned within a single API call.
   * @default 30
   */
  page_size: number;
  /**
   * Query Date Type
   * @description The type of query date. * `meeting_start_time`  * `archive_complete_time`   This value defaults to `meeting_start_time`.
   * @default meeting_start_time
   * @enum {string}
   */
  query_date_type: "meeting_start_time" | "archive_complete_time";
  /**
   * To
   * @description The query end date, in `yyyy-MM-dd"T"HH:mm:ssZ` format. This value and the `from` query parameter value cannot exceed seven days.
   */
  to?: string;
};

/**
 * Type of ZOOM's ZOOM_LIST_ARCHIVED_FILES tool output.
 */
type ZOOM_LIST_ARCHIVED_FILES_OUTPUT = {
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
 * Type of ZOOM's ZOOM_LIST_DEVICES tool input.
 */
type ZOOM_LIST_DEVICES_INPUT = {
  /**
   * Device Model
   * @description Filter devices by model.
   */
  device_model?: string;
  /**
   * Device Status
   * @description Filter devices by status.      Device Status:    `0` - offline.    `1` - online.    `-1` - unlink
   * @default -1
   */
  device_status: number;
  /**
   * Device Type
   * @description Filter devices by device type.     Device Type:    `-1` - All Zoom Room device(0,1,2,3,4,6).    `0` - Zoom Rooms Computer.    `1` - Zoom Rooms Controller.    `2` - Zoom Rooms Scheduling Display.    `3` - Zoom Rooms Control System.    `4` -  Zoom Rooms Whiteboard.    `5` - Zoom Phone Appliance.    `6` - Zoom Rooms Computer (with Controller).
   * @default -1
   */
  device_type: number;
  /**
   * Device Vendor
   * @description Filter devices by vendor.
   */
  device_vendor?: string;
  /**
   * Is Enrolled In Zdm
   * @description Filter devices by enrollment of ZDM (Zoom Device Management).
   * @default true
   */
  is_enrolled_in_zdm: boolean;
  /**
   * Next Page Token
   * @description Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token"s expiration period is 15 minutes.
   */
  next_page_token?: string;
  /**
   * Page Size
   * @description The number of records returned within a single API call.
   * @default 30
   */
  page_size: number;
  /**
   * Platform Os
   * @description Filter devices by platform operating system.
   * @enum {string}
   */
  platform_os?: "win" | "mac" | "ipad" | "iphone" | "android" | "linux";
  /**
   * Search Text
   * @description Filter devices by name or serial number.
   */
  search_text?: string;
};

/**
 * Type of ZOOM's ZOOM_LIST_DEVICES tool output.
 */
type ZOOM_LIST_DEVICES_OUTPUT = {
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
 * Type of ZOOM's ZOOM_LIST_MEETINGS tool input.
 */
type ZOOM_LIST_MEETINGS_INPUT = {
  /**
   * From
   * @description The start date.
   */
  from?: string;
  /**
   * Next Page Token
   * @description Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token"s expiration period is 15 minutes.
   */
  next_page_token?: string;
  /**
   * Page Number
   * @description The page number of the current page in the returned records.
   */
  page_number?: number;
  /**
   * Page Size
   * @description The number of records returned within a single API call.
   * @default 30
   */
  page_size: number;
  /**
   * Timezone
   * @description The timezone to assign to the `from` and `to` value. For a list of supported timezones and their formats, see our [timezone list](https://developers.zoom.us/docs/api/rest/other-references/abbreviation-lists/#timezones).
   */
  timezone?: string;
  /**
   * To
   * @description The end date.
   */
  to?: string;
  /**
   * Type
   * @description The type of meeting.  * `scheduled` - All valid previous (unexpired) meetings, live meetings, and upcoming scheduled meetings.  * `live` - All the ongoing meetings.  * `upcoming` - All upcoming meetings, including live meetings.  * `upcoming_meetings` - All upcoming meetings, including live meetings.  * `previous_meetings` - All the previous meetings.
   * @default scheduled
   * @enum {string}
   */
  type: "scheduled" | "live" | "upcoming" | "upcoming_meetings" | "previous_meetings";
  /**
   * User Id
   * @description The user"s user ID or email address. For user-level apps, pass the `me` value.
   */
  userId?: string;
};

/**
 * Type of ZOOM's ZOOM_LIST_MEETINGS tool output.
 */
type ZOOM_LIST_MEETINGS_OUTPUT = {
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
 * Type of ZOOM's ZOOM_LIST_WEBINARS tool input.
 */
type ZOOM_LIST_WEBINARS_INPUT = {
  /**
   * Page Number
   * @description **Deprecated** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination.
   * @default 1
   */
  page_number: number;
  /**
   * Page Size
   * @description The number of records returned within a single API call.
   * @default 30
   */
  page_size: number;
  /**
   * Type
   * @description The type of webinar.  * `scheduled` - All valid previous (unexpired) webinars, live webinars, and upcoming scheduled webinars.  * `upcoming` - All upcoming webinars, including live webinars.
   * @default scheduled
   * @enum {string}
   */
  type: "scheduled" | "upcoming";
  /**
   * User Id
   * @description The user"s user ID or email address. For user-level apps, pass the `me` value.
   */
  userId?: string;
};

/**
 * Type of ZOOM's ZOOM_LIST_WEBINARS tool output.
 */
type ZOOM_LIST_WEBINARS_OUTPUT = {
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
 * Type of ZOOM's ZOOM_LIST_WEBINAR_PARTICIPANTS tool input.
 */
type ZOOM_LIST_WEBINAR_PARTICIPANTS_INPUT = {
  /**
   * Next Page Token
   * @description Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token"s expiration period is 15 minutes.
   */
  next_page_token?: string;
  /**
   * Page Size
   * @description The number of records returned within a single API call.
   * @default 30
   */
  page_size: number;
  /**
   * Webinar Id
   * @description The webinar"s ID or universally unique ID (UUID).  * If you provide a webinar ID, the API returns a response for the latest webinar instance.  * If you provide a webinar UUID that begins with a `/` character or contains the `//` characters, you **must** [double encode](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#meeting-id-and-uuid) the webinar UUID before making an API request.
   */
  webinarId?: string;
};

/**
 * Type of ZOOM's ZOOM_LIST_WEBINAR_PARTICIPANTS tool output.
 */
type ZOOM_LIST_WEBINAR_PARTICIPANTS_OUTPUT = {
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
 * Type of ZOOM's ZOOM_UPDATE_A_MEETING tool input.
 */
type ZOOM_UPDATE_A_MEETING_INPUT = {
  /**
   * Agenda
   * @description Meeting description.
   */
  agenda?: string;
  /**
   * Duration
   * @description Meeting duration in minutes. Used for scheduled meetings only.
   */
  duration?: number;
  /**
   * Meeting Id
   * @description The meeting"s ID.   When storing this value in your database, store it as a long format integer and **not** an integer. Meeting IDs can be greater than 10 digits.
   */
  meetingId?: number;
  /**
   * Occurrence Id
   * @description Meeting occurrence ID. Support change of agenda, `start_time`, duration, or settings {`host_video`, `participant_video`, `join_before_host`, `mute_upon_entry`, `waiting_room`, `watermark`, `auto_recording`}.
   */
  occurrence_id?: string;
  /**
   * Password
   * @description Meeting passcode. Passcodes may only contain these characters [a-z A-Z 0-9 @ - _ *] and can have a maximum of 10 characters. **Note** If the account owner or the admin has configured [minimum passcode requirement settings](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604), the passcode value provided here must meet those requirements.         If the requirements are enabled, view those requirements by calling either the [**Get user settings**](https://developers.zoom.us) API or the [**Get account settings**](https://developers.zoom.us) API.
   */
  password?: string;
  /**
   * Pre Schedule
   * @description Whether to create a prescheduled meeting through the [GSuite app](https://support.zoom.us/hc/en-us/articles/360020187492-Zoom-for-GSuite-add-on). This **only** supports the meeting `type` value of `2` - scheduled meetings- and `3` - recurring meetings with no fixed time.  * `true` - Create a prescheduled meeting.  * `false` - Create a regular meeting.
   * @default false
   */
  pre_schedule: boolean;
  /**
   * Recurrence  End  Date  Time
   * Format: date-time
   * @description Select the final date when the meeting recurs before it is canceled. Should be in UTC time, such as 2017-11-25T12:00:00Z. Cannot be used with `end_times`.
   */
  recurrence__end__date__time?: string;
  /**
   * Recurrence  End  Times
   * @description Select how many times the meeting should recur before it is canceled. If `end_times` is set to 0, it means there is no end time. The maximum number of recurrences is 60. Cannot be used with `end_date_time`.
   * @default 1
   */
  recurrence__end__times: number;
  /**
   * Recurrence  Monthly  Day
   * @description Use this field **only if you"re scheduling a recurring meeting of type** `3` to state the day in a month when the meeting should recur. The value range is from 1 to 31. For instance, if the meeting should recur on 23rd of each month, provide `23` as this field"s value and `1` as the `repeat_interval` field"s value. If the meeting should recur every three months on 23rd of the month, change the `repeat_interval` field"s value to `3`.
   * @default 1
   */
  recurrence__monthly__day: number;
  /**
   * Recurrence  Monthly  Week
   * @description Use this field **only if you"re scheduling a recurring meeting of type** `3` to state the week of the month when the meeting should recur. If you use this field, you must also use the `monthly_week_day` field to state the day of the week when the meeting should recur.     `-1` - Last week of the month.    `1` - First week of the month.    `2` - Second week of the month.    `3` - Third week of the month.    `4` - Fourth week of the month.
   */
  recurrence__monthly__week?: number;
  /**
   * Recurrence  Monthly  Week  Day
   * @description Use this field only if you"re scheduling a recurring meeting of type `3` to state a specific day in a week when a monthly meeting should recur. To use this field, you must also use the `monthly_week` field.      `1` - Sunday.    `2` - Monday.    `3` - Tuesday.    `4` -  Wednesday.    `5` - Thursday.    `6` - Friday.    `7` - Saturday.
   */
  recurrence__monthly__week__day?: number;
  /**
   * Recurrence  Repeat  Interval
   * @description Define the interval when the meeting should recur. For instance, to schedule a meeting that recurs every two months, set this field"s value as `2` and the `type` parameter"s value to `3`.  For a daily meeting, the maximum interval is `90` days. For a weekly meeting, the maximum interval is `12` weeks. For a monthly meeting, the maximum value is `3` months.
   */
  recurrence__repeat__interval?: number;
  /**
   * Recurrence  Type
   * @description Recurrence meeting types.   `1` - Daily.    `2` - Weekly.    `3` - Monthly.
   */
  recurrence__type?: number;
  /**
   * Recurrence  Weekly  Days
   * @description This field is required if you"re scheduling a recurring meeting of type `2`, to state which days of the week the meeting should repeat.    Thiw field"s value could be a number between `1` to `7` in string format. For instance, if the meeting should recur on Sunday, provide `1` as this field"s value.         **Note** If you would like the meeting to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the meeting should recur on Sundays and Tuesdays provide `1,3` as this field"s value.      `1`  - Sunday.     `2` - Monday.    `3` - Tuesday.    `4` -  Wednesday.    `5` -  Thursday.    `6` - Friday.    `7` - Saturday.
   * @default 1
   * @enum {string}
   */
  recurrence__weekly__days: "1" | "2" | "3" | "4" | "5" | "6" | "7";
  /**
   * Schedule For
   * @description The email address or `userId` of the user to schedule a meeting for.
   */
  schedule_for?: string;
  /**
   * Settings  Allow  Multiple  Devices
   * @description Allow attendees to join the meeting from multiple devices. This setting only works for meetings that require [registration](https://support.zoom.us/hc/en-us/articles/211579443-Setting-up-registration-for-a-meeting).
   */
  settings__allow__multiple__devices?: boolean;
  /**
   * Settings  Alternative  Host  Update  Polls
   * @description Whether the **Allow alternative hosts to add or edit polls** feature is enabled. This requires Zoom version 5.8.0 or higher.
   */
  settings__alternative__host__update__polls?: boolean;
  /**
   * Settings  Alternative  Hosts
   * @description A semicolon-separated list of the meeting"s alternative hosts" email addresses or IDs.
   */
  settings__alternative__hosts?: string;
  /**
   * Settings  Alternative  Hosts  Email  Notification
   * @description Flag to determine whether to send email notifications to alternative hosts, default value is true.
   * @default true
   */
  settings__alternative__hosts__email__notification: boolean;
  /**
   * Settings  Approval  Type
   * @description Enable registration and set approval for the registration. Note that this feature requires the host to be of **Licensed** user type. **Registration cannot be enabled for a basic user.**          `0` - Automatically approve.    `1` - Manually approve.    `2` - No registration required.
   * @default 2
   */
  settings__approval__type: number;
  /**
   * Settings  Approved  Or  Denied  Countries  Or  Regions  Approved  List
   * @description List of countries or regions from where participants can join this meeting.
   */
  settings__approved__or__denied__countries__or__regions__approved__list?: string[];
  /**
   * Settings  Approved  Or  Denied  Countries  Or  Regions  Denied  List
   * @description List of countries or regions from where participants can not join this meeting.
   */
  settings__approved__or__denied__countries__or__regions__denied__list?: string[];
  /**
   * Settings  Approved  Or  Denied  Countries  Or  Regions  Enable
   * @description `true` - Setting enabled to either allow users or block users from specific regions to join your meetings.   `false` - Setting disabled.
   */
  settings__approved__or__denied__countries__or__regions__enable?: boolean;
  /**
   * Settings  Approved  Or  Denied  Countries  Or  Regions  Method
   * @description Specify whether to allow users from specific regions to join this meeting, or block users from specific regions from joining this meeting.   `approve` - Allow users from specific regions or countries to join this meeting. If this setting is selected, include the approved regions or countries in the `approved_list`.    `deny` - Block users from specific regions or countries from joining this meeting. If this setting is selected, include the approved regions orcountries in the `denied_list`
   * @enum {string}
   */
  settings__approved__or__denied__countries__or__regions__method?: "approve" | "deny";
  /**
   * Settings  Audio
   * @description Determine how participants can join the audio portion of the meeting.    `both` - Both Telephony and VoIP.    `telephony` - Telephony only.    `voip` - VoIP only.    `thirdParty` - Third party audio conference.
   * @default both
   * @enum {string}
   */
  settings__audio: "both" | "telephony" | "voip" | "thirdParty";
  /**
   * Settings  Audio  Conference  Info
   * @description Third party audio conference info.
   */
  settings__audio__conference__info?: string;
  /**
   * Settings  Authentication  Domains
   * @description If user has configured [Sign Into Zoom with Specified Domains](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f) option, this will list the domains that are authenticated.
   */
  settings__authentication__domains?: string;
  /**
   * Settings  Authentication  Exception
   * @description The participants added here will receive unique meeting invite links and bypass authentication.
   */
  settings__authentication__exception?: {
      [key: string]: unknown;
  }[];
  /**
   * Settings  Authentication  Name
   * @description Authentication name set in the [authentication profile](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f).
   */
  settings__authentication__name?: string;
  /**
   * Settings  Authentication  Option
   * @description Meeting authentication option ID.
   */
  settings__authentication__option?: string;
  /**
   * Settings  Auto  Recording
   * @description Automatic recording.   `local` - Record on local.    `cloud` -  Record on cloud.    `none` - Disabled.
   * @default none
   * @enum {string}
   */
  settings__auto__recording: "local" | "cloud" | "none";
  /**
   * Settings  Auto  Start  Ai  Companion  Questions
   * @description Whether to automatically start AI Companion questions.
   * @default false
   */
  settings__auto__start__ai__companion__questions: boolean;
  /**
   * Settings  Auto  Start  Meeting  Summary
   * @description Whether to automatically start meeting summary.
   * @default false
   */
  settings__auto__start__meeting__summary: boolean;
  /**
   * Settings  Breakout  Room  Enable
   * @description Set this field"s value to `true` to enable the [breakout room pre-assign](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4) option.
   */
  settings__breakout__room__enable?: boolean;
  /**
   * Settings  Breakout  Room  Rooms
   * @description Create room(s).
   */
  settings__breakout__room__rooms?: {
      [key: string]: unknown;
  }[];
  /**
   * Settings  Calendar  Type
   * @description The type of calendar integration used to schedule the meeting.  * `1` - [Zoom Outlook add-in](https://support.zoom.us/hc/en-us/articles/360031592971-Getting-started-with-Outlook-plugin-and-add-in)  * `2` - [Zoom for Google Workspace add-on](https://support.zoom.us/hc/en-us/articles/360020187492-Using-the-Zoom-for-Google-Workspace-add-on) Works with the `private_meeting` field to determine whether to share details of meetings.
   */
  settings__calendar__type?: number;
  /**
   * Settings  Close  Registration
   * @description Close registration after the event date.
   * @default false
   */
  settings__close__registration: boolean;
  /**
   * Settings  Cn  Meeting
   * @description Host the meeting in China.
   * @default false
   */
  settings__cn__meeting: boolean;
  /**
   * Settings  Contact  Email
   * @description Contact email for registration.
   */
  settings__contact__email?: string;
  /**
   * Settings  Contact  Name
   * @description Contact name for registration.
   */
  settings__contact__name?: string;
  /**
   * Settings  Continuous  Meeting  Chat  Auto  Add  Invited  External  Users
   * @description Whether to enable the **Automatically add invited external users** setting.
   */
  settings__continuous__meeting__chat__auto__add__invited__external__users?: boolean;
  /**
   * Settings  Continuous  Meeting  Chat  Enable
   * @description Whether to enable the **Enable continuous meeting chat** setting.
   */
  settings__continuous__meeting__chat__enable?: boolean;
  /**
   * Settings  Custom  Keys
   * @description Custom keys and values assigned to the meeting.
   */
  settings__custom__keys?: {
      [key: string]: unknown;
  }[];
  /**
   * Settings  Email  Notification
   * @description Whether to send email notifications to [alternative hosts](https://support.zoom.us/hc/en-us/articles/208220166) and [users with scheduling privileges](https://support.zoom.us/hc/en-us/articles/201362803-Scheduling-privilege). This value defaults to `true`.
   * @default true
   */
  settings__email__notification: boolean;
  /**
   * Settings  Encryption  Type
   * @description Choose between enhanced encryption and [end-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871) when starting or a meeting. When using end-to-end encryption, several features such cloud recording and phone/SIP/H.323 dial-in, will be **automatically disabled**.    `enhanced_encryption` - Enhanced encryption. Encryption is stored in the cloud if you enable this option.      `e2ee` - [End-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871). The encryption key is stored in your local device and can not be obtained by anyone else. Enabling this setting also **disables** the features join before host, cloud recording, streaming, live transcription, breakout rooms, polling, 1:1 private chat, and meeting reactions.
   * @enum {string}
   */
  settings__encryption__type?: "enhanced_encryption" | "e2ee";
  /**
   * Settings  Enforce  Login
   * @description Only signed in users can join this meeting. **This field is deprecated and will not be supported in the future.**          As an alternative, use the `meeting_authentication`, `authentication_option`, and `authentication_domains` fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the meeting.
   */
  settings__enforce__login?: boolean;
  /**
   * Settings  Enforce  Login  Domains
   * @description Only signed in users with specified domains can join meetings. **This field is deprecated and will not be supported in the future.**          As an alternative, use the `meeting_authentication`, `authentication_option`. and `authentication_domains` fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the meeting.
   */
  settings__enforce__login__domains?: string;
  /**
   * Settings  Focus  Mode
   * @description Whether the [**Focus Mode** feature](https://support.zoom.us/hc/en-us/articles/360061113751-Using-focus-mode) is enabled when the meeting starts.
   */
  settings__focus__mode?: boolean;
  /**
   * Settings  Global  Dial  In  Countries
   * @description List of global dial-in countries
   */
  settings__global__dial__in__countries?: string[];
  /**
   * Settings  Global  Dial  In  Numbers
   * @description Global dial-in countries or regions
   */
  settings__global__dial__in__numbers?: {
      [key: string]: unknown;
  }[];
  /**
   * Settings  Host  Save  Video  Order
   * @description Whether the **Allow host to save video order** feature is enabled.
   */
  settings__host__save__video__order?: boolean;
  /**
   * Settings  Host  Video
   * @description Start video when the host joins the meeting.
   */
  settings__host__video?: boolean;
  /**
   * Settings  In  Meeting
   * @description Host meeting in India.
   * @default false
   */
  settings__in__meeting: boolean;
  /**
   * Settings  Internal  Meeting
   * @description Whether to set the meeting as an internal meeting.
   * @default false
   */
  settings__internal__meeting: boolean;
  /**
   * Settings  Jbh  Time
   * @description If the value of `join_before_host` field is set to true, use this field to indicate time limits for a participant to join a meeting before a host. *  `0` - Allow participant to join anytime. *  `5` - Allow participant to join 5 minutes before meeting start time.  * `10` - Allow participant to join 10 minutes before meeting start time.
   */
  settings__jbh__time?: number;
  /**
   * Settings  Join  Before  Host
   * @description Allow participants to join the meeting before the host starts the meeting. Only used for scheduled or recurring meetings.
   * @default false
   */
  settings__join__before__host: boolean;
  /**
   * Settings  Language  Interpretation  Enable
   * @description Whether to enable [language interpretation](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars) for the meeting.
   */
  settings__language__interpretation__enable?: boolean;
  /**
   * Settings  Language  Interpretation  Interpreters
   * @description Information about the meeting"s language interpreters.
   */
  settings__language__interpretation__interpreters?: {
      [key: string]: unknown;
  }[];
  /**
   * Settings  Meeting  Authentication
   * @description `true`- Only authenticated users can join meetings.
   */
  settings__meeting__authentication?: boolean;
  /**
   * Settings  Meeting  Invitees
   * @description A list of the meeting"s invitees.
   */
  settings__meeting__invitees?: {
      [key: string]: unknown;
  }[];
  /**
   * Settings  Mute  Upon  Entry
   * @description Mute participants upon entry.
   * @default false
   */
  settings__mute__upon__entry: boolean;
  /**
   * Settings  Participant  Focused  Meeting
   * @description Whether to set the meeting as a participant focused meeting.
   * @default false
   */
  settings__participant__focused__meeting: boolean;
  /**
   * Settings  Participant  Video
   * @description Start video when participants join the meeting.
   */
  settings__participant__video?: boolean;
  /**
   * Settings  Private  Meeting
   * @description Whether the meeting is set as private.
   */
  settings__private__meeting?: boolean;
  /**
   * Settings  Registrants  Confirmation  Email
   * @description Whether to send registrants an email confirmation. * `true` - Send a confirmation email. * `false` - Do not send a confirmation email.
   */
  settings__registrants__confirmation__email?: boolean;
  /**
   * Settings  Registrants  Email  Notification
   * @description Whether to send registrants email notifications about their registration approval, cancellation, or rejection. * `true` - Send an email notification. * `false` - Do not send an email notification.  Set this value to `true` to also use the `registrants_confirmation_email` parameter.
   */
  settings__registrants__email__notification?: boolean;
  /**
   * Settings  Registration  Type
   * @description Registration type. Used for recurring meeting with fixed time only.  `1` - Attendees register once and can attend any of the occurrences.    `2` - Attendees need to register for each occurrence to attend.    `3` - Attendees register once and can choose one or more occurrences to attend.
   * @default 1
   */
  settings__registration__type: number;
  /**
   * Settings  Resources
   * @description The meeting"s resources.
   */
  settings__resources?: {
      [key: string]: unknown;
  }[];
  /**
   * Settings  Show  Share  Button
   * @description Show social share buttons on the meeting registration page. This setting only works for meetings that require [registration](https://support.zoom.us/hc/en-us/articles/211579443-Setting-up-registration-for-a-meeting).
   */
  settings__show__share__button?: boolean;
  /**
   * Settings  Sign  Language  Interpretation  Enable
   * @description Whether to enable [sign language interpretation](https://support.zoom.us/hc/en-us/articles/9644962487309-Using-sign-language-interpretation-in-a-meeting-or-webinar) for the meeting.
   */
  settings__sign__language__interpretation__enable?: boolean;
  /**
   * Settings  Sign  Language  Interpretation  Interpreters
   * @description Information about the meeting"s sign language interpreters.
   */
  settings__sign__language__interpretation__interpreters?: {
      [key: string]: unknown;
  }[];
  /**
   * Settings  Use  Pmi
   * @description Use a [personal meeting ID (PMI)](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#understanding-personal-meeting-id-pmi). Only used for scheduled meetings and recurring meetings with no fixed time.
   * @default false
   */
  settings__use__pmi: boolean;
  /**
   * Settings  Waiting  Room
   * @description Enable waiting room.
   * @default false
   */
  settings__waiting__room: boolean;
  /**
   * Settings  Watermark
   * @description Add a watermark when viewing a shared screen.
   * @default false
   */
  settings__watermark: boolean;
  /**
   * Start Time
   * Format: date-time
   * @description Meeting start time. When using a format like `yyyy-MM-dd"T"HH:mm:ss"Z"`, always use GMT time. When using a format like `yyyy-MM-dd"T"HH:mm:ss`, use local time and specify the time zone. Only used for scheduled meetings and recurring meetings with a fixed time.
   */
  start_time?: string;
  /**
   * Template Id
   * @description Unique identifier of the meeting template.  [Schedule the meeting from a meeting template](https://support.zoom.us/hc/en-us/articles/360036559151-Meeting-templates#h_86f06cff-0852-4998-81c5-c83663c176fb). Retrieve this field"s value by calling the [List meeting templates](https://developers.zoom.us/docs/api/rest/reference/zoom-api/methods/#operation/listMeetingTemplates) API.
   */
  template_id?: string;
  /**
   * Timezone
   * @description The timezone to assign to the `start_time` value. Only use this field ifor scheduled or recurring meetings with a fixed time. For a list of supported timezones and their formats, see our [timezone list](https://developers.zoom.us/docs/api/rest/other-references/abbreviation-lists/#timezones).
   */
  timezone?: string;
  /**
   * Topic
   * @description Meeting topic.
   */
  topic?: string;
  /**
   * Tracking Fields
   * @description Tracking fields.
   */
  tracking_fields?: {
      [key: string]: unknown;
  }[];
  /**
   * Type
   * @description Meeting types.  `1` - Instant meeting.    `2` - Scheduled meeting.    `3` - Recurring meeting with no fixed time.    `8` - Recurring meeting with a fixed time.
   * @default 2
   */
  type: number;
};

/**
 * Type of ZOOM's ZOOM_UPDATE_A_MEETING tool output.
 */
type ZOOM_UPDATE_A_MEETING_OUTPUT = {
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
 * Type map of all available tool input types for toolkit "ZOOM".
 */
export type ZOOM_TOOL_INPUTS = {
  ADD_A_MEETING_REGISTRANT: ZOOM_ADD_A_MEETING_REGISTRANT_INPUT
  ADD_A_WEBINAR_REGISTRANT: ZOOM_ADD_A_WEBINAR_REGISTRANT_INPUT
  CREATE_A_MEETING: ZOOM_CREATE_A_MEETING_INPUT
  DELETE_MEETING_RECORDINGS: ZOOM_DELETE_MEETING_RECORDINGS_INPUT
  GET_A_MEETING: ZOOM_GET_A_MEETING_INPUT
  GET_A_MEETING_SUMMARY: ZOOM_GET_A_MEETING_SUMMARY_INPUT
  GET_A_WEBINAR: ZOOM_GET_A_WEBINAR_INPUT
  GET_DAILY_USAGE_REPORT: ZOOM_GET_DAILY_USAGE_REPORT_INPUT
  GET_MEETING_RECORDINGS: ZOOM_GET_MEETING_RECORDINGS_INPUT
  GET_PAST_MEETING_PARTICIPANTS: ZOOM_GET_PAST_MEETING_PARTICIPANTS_INPUT
  LIST_ALL_RECORDINGS: ZOOM_LIST_ALL_RECORDINGS_INPUT
  LIST_ARCHIVED_FILES: ZOOM_LIST_ARCHIVED_FILES_INPUT
  LIST_DEVICES: ZOOM_LIST_DEVICES_INPUT
  LIST_MEETINGS: ZOOM_LIST_MEETINGS_INPUT
  LIST_WEBINARS: ZOOM_LIST_WEBINARS_INPUT
  LIST_WEBINAR_PARTICIPANTS: ZOOM_LIST_WEBINAR_PARTICIPANTS_INPUT
  UPDATE_A_MEETING: ZOOM_UPDATE_A_MEETING_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ZOOM".
 */
export type ZOOM_TOOL_OUTPUTS = {
  ADD_A_MEETING_REGISTRANT: ZOOM_ADD_A_MEETING_REGISTRANT_OUTPUT
  ADD_A_WEBINAR_REGISTRANT: ZOOM_ADD_A_WEBINAR_REGISTRANT_OUTPUT
  CREATE_A_MEETING: ZOOM_CREATE_A_MEETING_OUTPUT
  DELETE_MEETING_RECORDINGS: ZOOM_DELETE_MEETING_RECORDINGS_OUTPUT
  GET_A_MEETING: ZOOM_GET_A_MEETING_OUTPUT
  GET_A_MEETING_SUMMARY: ZOOM_GET_A_MEETING_SUMMARY_OUTPUT
  GET_A_WEBINAR: ZOOM_GET_A_WEBINAR_OUTPUT
  GET_DAILY_USAGE_REPORT: ZOOM_GET_DAILY_USAGE_REPORT_OUTPUT
  GET_MEETING_RECORDINGS: ZOOM_GET_MEETING_RECORDINGS_OUTPUT
  GET_PAST_MEETING_PARTICIPANTS: ZOOM_GET_PAST_MEETING_PARTICIPANTS_OUTPUT
  LIST_ALL_RECORDINGS: ZOOM_LIST_ALL_RECORDINGS_OUTPUT
  LIST_ARCHIVED_FILES: ZOOM_LIST_ARCHIVED_FILES_OUTPUT
  LIST_DEVICES: ZOOM_LIST_DEVICES_OUTPUT
  LIST_MEETINGS: ZOOM_LIST_MEETINGS_OUTPUT
  LIST_WEBINARS: ZOOM_LIST_WEBINARS_OUTPUT
  LIST_WEBINAR_PARTICIPANTS: ZOOM_LIST_WEBINAR_PARTICIPANTS_OUTPUT
  UPDATE_A_MEETING: ZOOM_UPDATE_A_MEETING_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ZOOM toolkit.
 */
export const ZOOM = {
  slug: "zoom",
  tools: {
    /**
     * This text guides on creating and customizing a user's registration for a zoom meeting, with a max of 4,999 registrants. preconditions include the host being licensed. api scopes and a light rate limit apply.
     */
    ADD_A_MEETING_REGISTRANT: "ZOOM_ADD_A_MEETING_REGISTRANT",
    /**
     * Zoom users with a webinar plan can create and manage webinars, broadcasting to up to 10,000 attendees. registration requires a pro plan, specific permissions, and is governed by a "light" rate limit.
     */
    ADD_A_WEBINAR_REGISTRANT: "ZOOM_ADD_A_WEBINAR_REGISTRANT",
    /**
     * Enable zoom meeting creation via user-level apps with "me". "start url" for hosts expires in 2 hours, or 90 days for "custcreate" users. renew via api, capped at 100 requests/day. requires "meeting:write" permission, subject to medium rate limit.
     */
    CREATE_A_MEETING: "ZOOM_CREATE_A_MEETING",
    /**
     * Summary: to delete all meeting recordings, ensure the user's account has cloud recording enabled. required permissions include `recording:write:admin` and `recording:write` with a `light` rate limit label.
     */
    DELETE_MEETING_RECORDINGS: "ZOOM_DELETE_MEETING_RECORDINGS",
    /**
     * The text provides details on api permissions for reading meeting information, categorizing permissions into general and granular scopes, and labels the rate limit as 'light'.
     */
    GET_A_MEETING: "ZOOM_GET_A_MEETING",
    /**
     * Meeting summary info requires a pro+ host plan, ai companion enabled, excluding e2ee meetings. scopes include meeting summary:read and admin versions. rate limit: light.
     */
    GET_A_MEETING_SUMMARY: "ZOOM_GET_A_MEETING_SUMMARY",
    /**
     * Access zoom webinar details requires pro or higher plan and webinar add-on. scopes include `webinar:read:admin` and `webinar:read`. granular scopes and a 'light' rate limit also apply.
     */
    GET_A_WEBINAR: "ZOOM_GET_A_WEBINAR",
    /**
     * The daily report provides zoom service usage details, like new users, meetings, participants, and minutes per day for a month, requiring a pro plan or higher. it has a 'heavy' rate limit.
     */
    GET_DAILY_USAGE_REPORT: "ZOOM_GET_DAILY_USAGE_REPORT",
    /**
     * To download meeting recordings, use `download url`. include oauth token in the header for passcode-protected ones. supports `recording:read` and `phone recording:read:admin` scopes, with a `light` rate limit.
     */
    GET_MEETING_RECORDINGS: "ZOOM_GET_MEETING_RECORDINGS",
    /**
     * Api allows paid users (pro+) to fetch past meeting attendee info, excluding solo participants. requires double encoding for certain uuids, with `meeting:read` scope and others. rate limit is medium.
     */
    GET_PAST_MEETING_PARTICIPANTS: "ZOOM_GET_PAST_MEETING_PARTICIPANTS",
    /**
     * This text details how to list zoom cloud recordings for a user, notably by using "me" for user-level apps and requiring an oauth token for access. it requires a pro plan, cloud recording enabled, and has a medium rate limit.
     */
    LIST_ALL_RECORDINGS: "ZOOM_LIST_ALL_RECORDINGS",
    /**
     * Zoom's archiving solution enables administrators to automatically record and archive meeting data to third-party platforms for compliance, needing the meeting and webinar archiving feature enabled.
     */
    LIST_ARCHIVED_FILES: "ZOOM_LIST_ARCHIVED_FILES",
    /**
     * This api lets you list devices. **scopes:** `device:read:admin`,`device:write:admin` **[rate limit label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `heavy`
     */
    LIST_DEVICES: "ZOOM_LIST_DEVICES",
    /**
     * This zoom api lists a user's scheduled meetings using the `me` value for user-level apps, excluding instant meetings and only showing unexpired ones. it requires specific scopes and has a `medium` rate limit.
     */
    LIST_MEETINGS: "ZOOM_LIST_MEETINGS",
    /**
     * The api lists all scheduled webinars for zoom users with a webinar plan, using `me` for user-level apps. it only shows unexpired webinars for hosts broadcasting to up to 10,000 attendees. requires pro plan upwards and specific scopes. rate limit: medium.
     */
    LIST_WEBINARS: "ZOOM_LIST_WEBINARS",
    /**
     * Get a list of past webinar participants with a pro plan or above plus an add-on. requires specific scopes and has a medium rate limit.
     */
    LIST_WEBINAR_PARTICIPANTS: "ZOOM_LIST_WEBINAR_PARTICIPANTS",
    /**
     * To update a meeting via api, ensure `start time` is future-dated; `recurrence` is needed. limit: 100 requests/day, 100 updates/meeting in 24 hrs. requires `meeting:write` and `meeting:write:admin` scopes, with a `light` rate limit.
     */
    UPDATE_A_MEETING: "ZOOM_UPDATE_A_MEETING",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ZOOM".
 */
export type ZOOM_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ZOOM".
 */
export type ZOOM_TRIGGER_EVENTS = {}
