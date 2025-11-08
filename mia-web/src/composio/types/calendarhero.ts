// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CALENDARHERO's CALENDARHERO_ADD_CALENDAR_CONNECTION tool input.
 */
type CALENDARHERO_ADD_CALENDAR_CONNECTION_INPUT = {
  /**
   * Directory
   * @description Directory object containing calendar connection details.
   */
  directory?: {
      /**
       * Code
       * @description Optional code for the directory integration.
       * @default null
       */
      code: string | null;
      /**
       * Directory Name
       * @description Unique name for the calendar connection integration.
       */
      directoryName: string;
      /**
       * Google Tracking Ids
       * @description Optional list of Google tracking IDs associated with this calendar connection.
       * @default null
       */
      googleTrackingIds: {
          /**
           * Id
           * @description The tracking ID value.
           */
          id: string;
          /**
           * Type
           * @description The tracking ID type, e.g., 'UA' or 'GTM'.
           */
          type: string;
      }[] | null;
      /**
       * Instructions
       * @description Optional instructions or notes for using this calendar connection.
       * @default null
       */
      instructions: string | null;
      /**
       * Is Default
       * @description Whether this calendar connection should be set as default.
       * @default null
       */
      isDefault: boolean | null;
      /**
       * Locked
       * @description If true, this directory is locked and cannot be modified.
       * @default null
       */
      locked: boolean | null;
      /**
       * Meeting Types
       * @description One or more meeting types to associate with this calendar connection.
       */
      meetingTypes: {
          /**
           * Name
           * @description The meeting type name as defined in the user's account.
           */
          name: string;
          /**
           * User Id
           * @description The user ID associated with this meeting type.
           */
          userId: string;
      }[];
      /**
       * Title
       * @description Optional title for the calendar connection.
       * @default null
       */
      title: string | null;
  };
};

/**
 * Type of CALENDARHERO's CALENDARHERO_ADD_CALENDAR_CONNECTION tool output.
 */
type CALENDARHERO_ADD_CALENDAR_CONNECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The unique identifier of the created calendar connection.
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
 * Type of CALENDARHERO's CALENDARHERO_CREATE_CONTACT tool input.
 */
type CALENDARHERO_CREATE_CONTACT_INPUT = {
  /**
   * Default Email
   * @description Email address from the list to set as default. Must match one provided.
   * @default null
   */
  defaultEmail: string | null;
  /**
   * Email
   * @description List of one or more email addresses for the contact.
   */
  email?: string[];
  /**
   * Name
   * @description Contact's full name in 'First Last' format.
   * @default null
   */
  name: string | null;
  /**
   * Organization
   * @description Contact's organization or company.
   * @default null
   */
  organization: string | null;
  /**
   * Telephone
   * @description List of phone numbers for the contact.
   * @default null
   */
  telephone: string[] | null;
  /**
   * Title
   * @description Contact's job title.
   * @default null
   */
  title: string | null;
};

/**
 * Type of CALENDARHERO's CALENDARHERO_CREATE_CONTACT tool output.
 */
type CALENDARHERO_CREATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The unique identifier of the created contact.
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
 * Type of CALENDARHERO's CALENDARHERO_CREATE_MEETING_REQUEST_V2 tool input.
 */
type CALENDARHERO_CREATE_MEETING_REQUEST_V2_INPUT = {
  /**
   * Capacity
   * @description The number of seats required for a meeting room. If zero, then no room will be booked.
   * @default null
   */
  capacity: number | null;
  /**
   * Contact Emails
   * @description List of contact emails to invite
   * @default null
   */
  contactEmails: string[] | null;
  /**
   * Contacts
   * @description List of contacts to invite by ID
   * @default null
   */
  contacts: {
      /**
       * Id
       * @description The contact's ID as returned from GET /contact
       */
      id: string;
  }[] | null;
  /**
   * Date End
   * @description The requested timeframe's ending date/time (YYYY-MM-DDTHH:mm:ssZ).
   */
  dateEnd?: string;
  /**
   * Date Start
   * @description The requested timeframe's start date/time (YYYY-MM-DDTHH:mm:ssZ).
   */
  dateStart?: string;
  /**
   * Description
   * @description The agenda/description of the meeting
   * @default null
   */
  description: string | null;
  /**
   * Location
   * @description The specific location for the meeting
   * @default null
   */
  location: string | null;
  /**
   * Locations
   * @description List of preferred meeting locations
   * @default null
   */
  locations: {
      /**
       * Name
       * @description Location name
       */
      name: string;
  }[] | null;
  /**
   * Meeting Length
   * @description The number of minutes of the requested meeting. If omitted, the meeting type's meeting duration will be used.
   * @default null
   */
  meetingLength: number | null;
  /**
   * RoomItem
   * @description Meeting room configuration with capacity
   * @default null
   */
  room: {
      /**
       * Capacity
       * @description The number of seats required for a meeting room. If zero, then no meeting room will be booked.
       */
      capacity: number;
  } | null;
  /**
   * Room Capacity
   * @description Alternate field for meeting room seats required.
   * @default null
   */
  roomCapacity: number | null;
  /**
   * Subject
   * @description The meeting topic/subject
   */
  subject?: string;
  /**
   * Type
   * @description The meeting type. Must be one of the user's defined meeting types returned from GET /user/meeting
   * @default null
   */
  type: string | null;
};

/**
 * Type of CALENDARHERO's CALENDARHERO_CREATE_MEETING_REQUEST_V2 tool output.
 */
type CALENDARHERO_CREATE_MEETING_REQUEST_V2_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: string;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALENDARHERO's CALENDARHERO_FETCH_CONTACT tool input.
 */
type CALENDARHERO_FETCH_CONTACT_INPUT = {
  /**
   * Id
   * @description Contact's unique identifier
   */
  id?: string;
};

/**
 * Type of CALENDARHERO's CALENDARHERO_FETCH_CONTACT tool output.
 */
type CALENDARHERO_FETCH_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avatar Url
       * @description URL of the contact's avatar image
       * @default null
       */
      avatar_url: string | null;
      /**
       * Email
       * @description Contact's email address
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description Unique identifier for the contact
       */
      id: string;
      /**
       * Job Title
       * @description Contact's job title
       * @default null
       */
      job_title: string | null;
      /**
       * Name
       * @description Full name of the contact
       * @default null
       */
      name: string | null;
      /**
       * Org
       * @description Organization the contact belongs to
       * @default null
       */
      org: string | null;
      /**
       * Phone
       * @description Contact's phone number
       * @default null
       */
      phone: string | null;
      /**
       * Updated At
       * @description Last updated timestamp in ISO 8601 format
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
 * Type of CALENDARHERO's CALENDARHERO_FETCH_MEETING_DETAILS tool input.
 */
type CALENDARHERO_FETCH_MEETING_DETAILS_INPUT = {
  /**
   * End
   * @description The end datetime of the time range to fetch meetings, in ISO 8601 format, e.g., '2025-03-14T18:00:00Z'
   */
  end?: string;
  /**
   * Start
   * @description The start datetime of the time range to fetch meetings, in ISO 8601 format, e.g., '2025-03-10T09:00:00Z'
   */
  start?: string;
};

/**
 * Type of CALENDARHERO's CALENDARHERO_FETCH_MEETING_DETAILS tool output.
 */
type CALENDARHERO_FETCH_MEETING_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meetings
       * @description Array of meeting details returned by the API.
       */
      meetings: {
          /**
           * Description
           * @description Detailed description of the meeting.
           * @default null
           */
          description: string | null;
          /**
           * End Time
           * @description End time of the meeting in ISO 8601 format.
           */
          end_time: string;
          /**
           * Id
           * @description Unique identifier for the meeting.
           */
          id: string;
          /**
           * Location
           * @description Location of the meeting.
           * @default null
           */
          location: string | null;
          /**
           * Participants
           * @description List of participants in the meeting.
           * @default null
           */
          participants: {
              /**
               * Email
               * @description Participant's email address.
               * @default null
               */
              email: string | null;
              /**
               * Id
               * @description Participant's unique identifier.
               * @default null
               */
              id: string | null;
              /**
               * Name
               * @description Participant's name.
               * @default null
               */
              name: string | null;
          }[] | null;
          /**
           * Start Time
           * @description Start time of the meeting in ISO 8601 format.
           */
          start_time: string;
          /**
           * Title
           * @description Title of the meeting.
           * @default null
           */
          title: string | null;
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
 * Type of CALENDARHERO's CALENDARHERO_FETCH_USER_PROFILE tool input.
 */
type CALENDARHERO_FETCH_USER_PROFILE_INPUT = object;

/**
 * Type of CALENDARHERO's CALENDARHERO_FETCH_USER_PROFILE tool output.
 */
type CALENDARHERO_FETCH_USER_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description User's address
       * @default null
       */
      address: string | null;
      /**
       * Associated Org Id
       * @description Associated organization ID
       * @default null
       */
      associatedOrgId: string | null;
      /**
       * Avatar
       * @description URL to the user's avatar image
       * @default null
       */
      avatar: string | null;
      /**
       * Auth
       * @description Placeholder for generic auth object returned by CalendarHero API.
       * @default null
       */
      branding: Record<string, never> | null;
      /**
       * Collaborators
       * @description List of collaborators
       * @default null
       */
      collaborators: string[] | null;
      /**
       * Country
       * @description User's country code
       * @default null
       */
      country: string | null;
      /**
       * Crm.Default Provider Id
       * @description CRM default provider ID
       * @default null
       */
      "crm.defaultProviderId": string | null;
      /**
       * Crm.Log Activity After Meeting
       * @description CRM log activity after meeting setting
       * @default null
       */
      "crm.logActivityAfterMeeting": string | null;
      /**
       * Currency
       * @description User's currency code
       * @default null
       */
      currency: string | null;
      /**
       * Date Added
       * @description Date when user was added (ISO format)
       * @default null
       */
      dateAdded: string | null;
      /**
       * Date Last Login
       * @description Date of last login in ISO format
       * @default null
       */
      dateLastLogin: string | null;
      /**
       * Date Plan Changed
       * @description Date when plan was last changed (ISO format)
       * @default null
       */
      datePlanChanged: string | null;
      /**
       * Date Updated
       * @description Date when user was last updated (ISO format)
       * @default null
       */
      dateUpdated: string | null;
      /**
       * Auth
       * @description Placeholder for generic auth object returned by CalendarHero API.
       * @default null
       */
      directories: Record<string, never> | null;
      /**
       * Email
       * @description User's email address
       */
      email: string;
      /**
       * Email Footer
       * @description Email footer content
       * @default null
       */
      email_footer: string | null;
      /**
       * Extra Emails
       * @description Additional emails associated with user
       * @default null
       */
      extraEmails: string[] | null;
      /**
       * Hide Automated Assistant
       * @description Flag if automated assistant is hidden
       * @default null
       */
      hideAutomatedAssistant: boolean | null;
      /**
       * Hide Negative Who Is
       * @description Hide negative WHOIS flag
       * @default null
       */
      hideNegativeWhoIs: boolean | null;
      /**
       * Inactive Until Date
       * @description Date until user is inactive (ISO format)
       * @default null
       */
      inactiveUntilDate: string | null;
      /**
       * Language
       * @description User's preferred language
       * @default null
       */
      language: string | null;
      /**
       * Location
       * @description User's location object
       * @default null
       */
      location: {
          /**
           * Work
           * @description User's work location details
           */
          work: Record<string, never>;
      } | null;
      /**
       * Logo Url
       * @description URL to the user's logo image
       * @default null
       */
      logoUrl: string | null;
      /**
       * Managed
       * @description Managed settings for user preferences
       * @default null
       */
      managed: {
          /**
           * Cc Meeting
           * @description CC meeting management flag
           */
          cc_meeting: boolean;
          /**
           * Days
           * @description Day preferences management flag
           */
          days: boolean;
          /**
           * Hourly Offsets
           * @description Hourly offsets management flag
           */
          hourly_offsets: boolean;
          /**
           * Meeting Length
           * @description Meeting length management flag
           */
          meeting_length: boolean;
          /**
           * Named
           * @description Named event management settings
           */
          named: {
              /**
               * Breakfast
               * @description Breakfast event managed flag
               */
              breakfast: boolean;
              /**
               * Call
               * @description Call event managed flag
               */
              call: boolean;
              /**
               * Coffee
               * @description Coffee event managed flag
               */
              coffee: boolean;
              /**
               * Dinner
               * @description Dinner event managed flag
               */
              dinner: boolean;
              /**
               * Drinks
               * @description Drinks event managed flag
               */
              drinks: boolean;
              /**
               * Lunch
               * @description Lunch event managed flag
               */
              lunch: boolean;
          };
          /**
           * Timezone
           * @description Timezone management flag
           */
          timezone: boolean;
          /**
           * Workday
           * @description Workday management flag
           */
          workday: boolean;
      } | null;
      /**
       * MeetingConfig
       * @description User's meeting configuration settings
       * @default null
       */
      meeting: {
          /**
           * Daily Free Ratio
           * @description Daily free ratio
           */
          dailyFreeRatio: number;
          /**
           * Days
           * @description Meeting days settings
           */
          days: Record<string, never>;
          /**
           * Default Meeting Minutes
           * @description Default meeting minutes
           */
          defaultMeetingMinutes: number;
          /**
           * Default Times
           * @description Default meeting times
           */
          defaultTimes: Record<string, never>;
          /**
           * Disable Travel Time
           * @description Disable travel time flag
           */
          disableTravelTime: boolean;
          /**
           * Email Hour
           * @description Email hour setting
           */
          emailHour: number;
          /**
           * Meeting Calendar Display
           * @description Calendar display settings
           */
          meetingCalendarDisplay: Record<string, never>;
          /**
           * Notice Period
           * @description Meeting notice period settings
           */
          noticePeriod: Record<string, never>;
          /**
           * Notify For Overlap
           * @description Overlap notification flag
           */
          notifyForOverlap: boolean;
          /**
           * Ondemand
           * @description On-demand meeting settings
           */
          ondemand: Record<string, never>;
          /**
           * Start Offsets
           * @description Meeting start offsets
           */
          startOffsets: Record<string, never>;
          /**
           * Work Day
           * @description Work day settings
           */
          workDay: Record<string, never>;
      } | null;
      /**
       * Messaging
       * @description Messaging configurations
       * @default null
       */
      messaging: string[] | null;
      /**
       * Name
       * @description User's full name
       */
      name: string;
      /**
       * Org Id
       * @description Organization ID
       * @default null
       */
      orgId: string | null;
      /**
       * Password
       * @description User's password metadata
       * @default null
       */
      password: string | null;
      /**
       * Plan
       * @description User's subscription plan
       * @default null
       */
      plan: string | null;
      /**
       * Preferred Notification Index
       * @description Preferred notification index
       * @default null
       */
      preferredNotificationIndex: number | null;
      /**
       * Preferred Notification Type
       * @description Preferred notification type
       * @default null
       */
      preferredNotificationType: string | null;
      /**
       * Restricted Apps
       * @description List of restricted applications
       * @default null
       */
      restrictedApps: string[] | null;
      /**
       * Rooms.Buildings
       * @description Buildings list for rooms
       * @default null
       */
      "rooms.buildings": string[] | null;
      /**
       * Rooms.Favourite
       * @description Favorite rooms list
       * @default null
       */
      "rooms.favourite": string[] | null;
      /**
       * ShowContact
       * @description User's contact display settings
       * @default null
       */
      showcontact: {
          /**
           * Crunchbase
           * @description Crunchbase display flag
           */
          crunchbase: boolean;
          /**
           * Email
           * @description Email display flag
           */
          email: boolean;
          /**
           * Location
           * @description Location display flag
           */
          location: boolean;
          /**
           * Organizations
           * @description Organizations display flag
           */
          organizations: boolean;
          /**
           * Photos
           * @description Photos display flag
           */
          photos: boolean;
          /**
           * Social Profiles
           * @description Social profiles display flag
           */
          socialProfiles: boolean;
          /**
           * Twitter Posts
           * @description Number of Twitter posts shown
           */
          twitter_posts: number;
          /**
           * Websites
           * @description Websites display flag
           */
          websites: boolean;
      } | null;
      /**
       * Stats
       * @description User's usage statistics
       * @default null
       */
      stats: {
          /**
           * Current
           * @description Current usage statistics
           */
          current: Record<string, never>;
          /**
           * Historical
           * @description Historical usage statistics
           */
          historical: string[];
      } | null;
      /**
       * Tags
       * @description List of user tags
       * @default null
       */
      tags: string[] | null;
      /**
       * Telephones
       * @description List of user's telephone numbers
       * @default null
       */
      telephones: string[] | null;
      /**
       * Auth
       * @description Placeholder for generic auth object returned by CalendarHero API.
       * @default null
       */
      templates: Record<string, never> | null;
      /**
       * Ticket.Default Provider Id
       * @description Ticket default provider ID
       * @default null
       */
      "ticket.defaultProviderId": string | null;
      /**
       * Timezone
       * @description User's timezone
       * @default null
       */
      timezone: string | null;
      /**
       * Vendasta Legacy User Id
       * @description Legacy Vendasta user ID
       * @default null
       */
      vendastaLegacyUserId: string | null;
      /**
       * Vendasta Top Nav Url
       * @description Vendasta top navigation URL
       * @default null
       */
      vendastaTopNavUrl: string | null;
      /**
       * Vendasta User Id
       * @description Vendasta user ID
       * @default null
       */
      vendastaUserId: string | null;
      /**
       * Versions.App Sumo
       * @description AppSumo version info
       * @default null
       */
      "versions.appSumo": string | null;
      /**
       * Versions.Beta
       * @description Beta feature flag
       * @default null
       */
      "versions.beta": boolean | null;
      /**
       * Versions.Nlp
       * @description NLU version info
       * @default null
       */
      "versions.nlp": string | null;
      /**
       * Versions.Plan.Billing Cycle Date
       * @description Billing cycle date (ISO format)
       * @default null
       */
      "versions.plan.billingCycleDate": string | null;
      /**
       * Versions.Plan.Is Downgrading
       * @description Plan downgrading flag
       * @default null
       */
      "versions.plan.isDowngrading": boolean | null;
      /**
       * Versions.Trial.Expiry
       * @description Trial expiry date (ISO format)
       * @default null
       */
      "versions.trial.expiry": string | null;
      /**
       * Versions.Trial.Trial Period Duration
       * @description Trial period duration in days
       * @default null
       */
      "versions.trial.trialPeriodDuration": number | null;
      /**
       * Weather
       * @description User's weather preference settings
       * @default null
       */
      weather: {
          /**
           * Unit
           * @description Weather unit setting
           */
          unit: string;
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
 * Type of CALENDARHERO's CALENDARHERO_LIST_MEETINGS tool input.
 */
type CALENDARHERO_LIST_MEETINGS_INPUT = {
  /**
   * End
   * @description The end of the timeframe in ISO 8601 format (YYYY-MM-DDTHH:mm:ssZ).
   */
  end?: string;
  /**
   * Start
   * @description The start of the timeframe in ISO 8601 format (YYYY-MM-DDTHH:mm:ssZ).
   */
  start?: string;
};

/**
 * Type of CALENDARHERO's CALENDARHERO_LIST_MEETINGS tool output.
 */
type CALENDARHERO_LIST_MEETINGS_OUTPUT = {
  /**
   * Data
   * @description Raw calendar data as returned by the API (e.g., ICS/vCalendar format).
   */
  data?: string;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALENDARHERO's CALENDARHERO_LIST_MEETING_TEMPLATES tool input.
 */
type CALENDARHERO_LIST_MEETING_TEMPLATES_INPUT = object;

/**
 * Type of CALENDARHERO's CALENDARHERO_LIST_MEETING_TEMPLATES tool output.
 */
type CALENDARHERO_LIST_MEETING_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Templates
       * @description List of meeting templates available for quick scheduling.
       */
      templates: {
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
 * Type of CALENDARHERO's CALENDARHERO_LIST_MEETING_TYPES tool input.
 */
type CALENDARHERO_LIST_MEETING_TYPES_INPUT = {
  /**
   * Only Types
   * @description Optional filter to return only the meeting type identifiers.
   * @default null
   */
  onlyTypes: boolean | null;
};

/**
 * Type of CALENDARHERO's CALENDARHERO_LIST_MEETING_TYPES tool output.
 */
type CALENDARHERO_LIST_MEETING_TYPES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meeting Types
       * @description List of meeting types available for the user.
       */
      meetingTypes: {
          /**
           * Meeting Type
           * @description Additional details of the meeting type.
           */
          meetingType: {
              [key: string]: unknown;
          };
          /**
           * Name
           * @description The display name of the meeting type.
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
 * Type of CALENDARHERO's CALENDARHERO_LIST_USER_CALENDARS tool input.
 */
type CALENDARHERO_LIST_USER_CALENDARS_INPUT = {
  /**
   * Org
   * @description When true, include organization-level calendar integrations.
   * @default null
   */
  org: boolean | null;
};

/**
 * Type of CALENDARHERO's CALENDARHERO_LIST_USER_CALENDARS tool output.
 */
type CALENDARHERO_LIST_USER_CALENDARS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Calendars
       * @description List of calendar integrations connected to the user's CalendarHero account.
       */
      calendars: ({
          /**
           * Auth
           * @description Authentication blob for an integration. Structure depends on provider.
           * @default null
           */
          auth: {
              [key: string]: unknown;
          } | null;
          /**
           * Auth
           * @description Authentication blob for an integration. Structure depends on provider.
           * @default null
           */
          calendar: {
              [key: string]: unknown;
          } | null;
          /**
           * Category Type
           * @description Categories associated with this calendar integration.
           */
          categoryType: string[];
          /**
           * Auth
           * @description Authentication blob for an integration. Structure depends on provider.
           * @default null
           */
          contacts: {
              [key: string]: unknown;
          } | null;
          /**
           * Date Added
           * @description Date this integration was added (YYYY-MM-DD).
           * @default null
           */
          dateAdded: string | null;
          /**
           * Date Last Import
           * @description Date of the last import of calendar events (YYYY-MM-DD).
           * @default null
           */
          dateLastImport: string | null;
          /**
           * Date Updated
           * @description Date this integration was last updated (YYYY-MM-DD).
           * @default null
           */
          dateUpdated: string | null;
          /**
           * E Auth
           * @description Encoded authentication token.
           * @default null
           */
          e_auth: string | null;
          /**
           * Auth
           * @description Authentication blob for an integration. Structure depends on provider.
           * @default null
           */
          faq: {
              [key: string]: unknown;
          } | null;
          /**
           * Auth
           * @description Authentication blob for an integration. Structure depends on provider.
           * @default null
           */
          group: {
              [key: string]: unknown;
          } | null;
          /**
           * Auth
           * @description Authentication blob for an integration. Structure depends on provider.
           * @default null
           */
          mail: {
              [key: string]: unknown;
          } | null;
          /**
           * Name
           * @description The display name of the calendar integration.
           */
          name: string;
          /**
           * Org Id
           * @description Organization's unique identifier in CalendarHero.
           * @default null
           */
          orgId: string | null;
          /**
           * Provider Type
           * @description The type of provider (e.g., 'calendar').
           */
          providerType: string;
          /**
           * Auth
           * @description Authentication blob for an integration. Structure depends on provider.
           * @default null
           */
          rooms: {
              [key: string]: unknown;
          } | null;
          /**
           * User Id
           * @description User's unique identifier in CalendarHero.
           * @default null
           */
          userId: string | null;
          /**
           * Xref
           * @description Cross-reference ID for the integration.
           * @default null
           */
          xref: string | null;
      } & {
          [key: string]: unknown;
      })[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALENDARHERO's CALENDARHERO_SEARCH_CONTACT tool input.
 */
type CALENDARHERO_SEARCH_CONTACT_INPUT = {
  /**
   * All
   * @description When true, do not remove duplicate contacts.
   * @default null
   */
  all: boolean | null;
  /**
   * Filter
   * @description Filter by predefined set: 'popular', 'recent', or a single letter a-z. Cannot be used with `search`.
   * @default null
   * @enum {string|null}
   */
  filter: "popular" | "recent" | "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z" | null;
  /**
   * Include Teams
   * @description When true, include matching team entities in the results.
   * @default null
   */
  includeTeams: boolean | null;
  /**
   * Search
   * @description Search term: email (name@domain.com), domain (@domain.com), or full name ('First Last'). Cannot be used with `filter`.
   * @default null
   */
  search: string | null;
};

/**
 * Type of CALENDARHERO's CALENDARHERO_SEARCH_CONTACT tool output.
 */
type CALENDARHERO_SEARCH_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of contacts matching the search criteria.
       */
      contacts: {
          /**
           * Default Email
           * @description Default email address of the contact.
           * @default null
           */
          defaultEmail: string | null;
          /**
           * Email
           * @description List of contact email addresses.
           */
          email: string[];
          /**
           * Id
           * @description Unique identifier of the contact.
           */
          id: string;
          /**
           * Name
           * @description Contact's full name.
           * @default null
           */
          name: string | null;
          /**
           * Organization
           * @description Company/organization of the contact.
           * @default null
           */
          organization: string | null;
          /**
           * Provider Id
           * @description Provider IDs associated with the contact.
           * @default null
           */
          providerId: string[] | null;
          /**
           * Telephone
           * @description List of contact phone numbers.
           * @default null
           */
          telephone: string[] | null;
          /**
           * Title
           * @description Contact's job title.
           * @default null
           */
          title: string | null;
          /**
           * User Id
           * @description User ID associated with the contact.
           * @default null
           */
          userId: string | null;
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
 * Type of CALENDARHERO's CALENDARHERO_SEND_REMINDER tool input.
 */
type CALENDARHERO_SEND_REMINDER_INPUT = {
  /**
   * Id
   * @description Meeting task ID to send a reminder for (24 hexadecimal characters)
   */
  id?: unknown;
};

/**
 * Type of CALENDARHERO's CALENDARHERO_SEND_REMINDER tool output.
 */
type CALENDARHERO_SEND_REMINDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description API confirmation message acknowledging reminder was sent
       * @default null
       */
      message: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALENDARHERO's CALENDARHERO_UPDATE_CONTACT tool input.
 */
type CALENDARHERO_UPDATE_CONTACT_INPUT = {
  /**
   * Default Email
   * @description Contact Default Email
   * @default null
   */
  defaultEmail: string | null;
  /**
   * Email
   * @description Contact Emails; must include at least one address
   */
  email?: string[];
  /**
   * Id
   * @description The contact's ID as returned from GET /contact
   */
  id?: string;
  /**
   * Name
   * @description Contact Name: "First Last"
   * @default null
   */
  name: string | null;
  /**
   * Organization
   * @description Contact Company/Organization
   * @default null
   */
  organization: string | null;
  /**
   * Provider Id
   * @description Associated Provider IDs
   * @default null
   */
  providerId: string[] | null;
  /**
   * Telephone
   * @description Contact Phone Numbers
   * @default null
   */
  telephone: string[] | null;
  /**
   * Title
   * @description Contact Title
   * @default null
   */
  title: string | null;
  /**
   * User Id
   * @description Associated User ID
   * @default null
   */
  userId: string | null;
};

/**
 * Type of CALENDARHERO's CALENDARHERO_UPDATE_CONTACT tool output.
 */
type CALENDARHERO_UPDATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Response body returned from CalendarHero
       */
      result: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "CALENDARHERO".
 */
export type CALENDARHERO_TOOL_INPUTS = {
  ADD_CALENDAR_CONNECTION: CALENDARHERO_ADD_CALENDAR_CONNECTION_INPUT
  CREATE_CONTACT: CALENDARHERO_CREATE_CONTACT_INPUT
  CREATE_MEETING_REQUEST_V2: CALENDARHERO_CREATE_MEETING_REQUEST_V2_INPUT
  FETCH_CONTACT: CALENDARHERO_FETCH_CONTACT_INPUT
  FETCH_MEETING_DETAILS: CALENDARHERO_FETCH_MEETING_DETAILS_INPUT
  FETCH_USER_PROFILE: CALENDARHERO_FETCH_USER_PROFILE_INPUT
  LIST_MEETINGS: CALENDARHERO_LIST_MEETINGS_INPUT
  LIST_MEETING_TEMPLATES: CALENDARHERO_LIST_MEETING_TEMPLATES_INPUT
  LIST_MEETING_TYPES: CALENDARHERO_LIST_MEETING_TYPES_INPUT
  LIST_USER_CALENDARS: CALENDARHERO_LIST_USER_CALENDARS_INPUT
  SEARCH_CONTACT: CALENDARHERO_SEARCH_CONTACT_INPUT
  SEND_REMINDER: CALENDARHERO_SEND_REMINDER_INPUT
  UPDATE_CONTACT: CALENDARHERO_UPDATE_CONTACT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CALENDARHERO".
 */
export type CALENDARHERO_TOOL_OUTPUTS = {
  ADD_CALENDAR_CONNECTION: CALENDARHERO_ADD_CALENDAR_CONNECTION_OUTPUT
  CREATE_CONTACT: CALENDARHERO_CREATE_CONTACT_OUTPUT
  CREATE_MEETING_REQUEST_V2: CALENDARHERO_CREATE_MEETING_REQUEST_V2_OUTPUT
  FETCH_CONTACT: CALENDARHERO_FETCH_CONTACT_OUTPUT
  FETCH_MEETING_DETAILS: CALENDARHERO_FETCH_MEETING_DETAILS_OUTPUT
  FETCH_USER_PROFILE: CALENDARHERO_FETCH_USER_PROFILE_OUTPUT
  LIST_MEETINGS: CALENDARHERO_LIST_MEETINGS_OUTPUT
  LIST_MEETING_TEMPLATES: CALENDARHERO_LIST_MEETING_TEMPLATES_OUTPUT
  LIST_MEETING_TYPES: CALENDARHERO_LIST_MEETING_TYPES_OUTPUT
  LIST_USER_CALENDARS: CALENDARHERO_LIST_USER_CALENDARS_OUTPUT
  SEARCH_CONTACT: CALENDARHERO_SEARCH_CONTACT_OUTPUT
  SEND_REMINDER: CALENDARHERO_SEND_REMINDER_OUTPUT
  UPDATE_CONTACT: CALENDARHERO_UPDATE_CONTACT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CALENDARHERO toolkit.
 */
export const CALENDARHERO = {
  slug: "calendarhero",
  tools: {
    /**
     * Tool to add a calendar integration to a user's account. use after gathering provider credentials.
     */
    ADD_CALENDAR_CONNECTION: "CALENDARHERO_ADD_CALENDAR_CONNECTION",
    /**
     * Tool to create a new contact. use after confirming contact details before making the api call.
     */
    CREATE_CONTACT: "CALENDARHERO_CREATE_CONTACT",
    /**
     * Tool to create a new meeting request in calendarhero. use when scheduling a meeting with participants, time range, and additional details.
     */
    CREATE_MEETING_REQUEST_V2: "CALENDARHERO_CREATE_MEETING_REQUEST_V2",
    /**
     * Fetch contact
     */
    FETCH_CONTACT: "CALENDARHERO_FETCH_CONTACT",
    /**
     * Tool to fetch details for meetings within a specified timeframe. use this after user provides start and end datetimes in iso8601.
     */
    FETCH_MEETING_DETAILS: "CALENDARHERO_FETCH_MEETING_DETAILS",
    /**
     * Tool to fetch the profile details of the authenticated user. use after obtaining a valid access token.
     */
    FETCH_USER_PROFILE: "CALENDARHERO_FETCH_USER_PROFILE",
    /**
     * Tool to retrieve the user's meetings within a specified timeframe. use after confirming date range to fetch raw calendar data.
     */
    LIST_MEETINGS: "CALENDARHERO_LIST_MEETINGS",
    /**
     * Tool to list all meeting templates available for quick scheduling. use after authenticating and when you need to retrieve available templates before scheduling.
     */
    LIST_MEETING_TEMPLATES: "CALENDARHERO_LIST_MEETING_TEMPLATES",
    /**
     * Tool to retrieve the user's configured meeting types. use after authenticating with calendarhero.
     */
    LIST_MEETING_TYPES: "CALENDARHERO_LIST_MEETING_TYPES",
    /**
     * Tool to list all calendar integrations connected to a user's calendarhero account. use after authenticating when you need to retrieve available calendars for scheduling.
     */
    LIST_USER_CALENDARS: "CALENDARHERO_LIST_USER_CALENDARS",
    /**
     * Tool to search for existing contacts. use after confirming a need to find contacts by email or name.
     */
    SEARCH_CONTACT: "CALENDARHERO_SEARCH_CONTACT",
    /**
     * Tool to send a reminder to a contact about their scheduled meeting. use after confirming the meeting task id to notify participants.
     */
    SEND_REMINDER: "CALENDARHERO_SEND_REMINDER",
    /**
     * Tool to update details of an existing contact. use when you have the contact's id and want to apply changes. example: 'update contact 507f1f77bcf86cd799439011 with a new email.'
     */
    UPDATE_CONTACT: "CALENDARHERO_UPDATE_CONTACT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CALENDARHERO".
 */
export type CALENDARHERO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CALENDARHERO".
 */
export type CALENDARHERO_TRIGGER_EVENTS = {}
