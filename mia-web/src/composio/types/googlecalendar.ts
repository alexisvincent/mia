import { type TriggerEvent } from "@composio/core"

// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_CALENDARS_DELETE tool input.
 */
type GOOGLECALENDAR_CALENDARS_DELETE_INPUT = {
  /**
   * Calendar Id
   * @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   */
  calendar_id?: string;
};

/**
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_CALENDARS_DELETE tool output.
 */
type GOOGLECALENDAR_CALENDARS_DELETE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Message indicating the successful deletion of the calendar.
       * @default Calendar deleted successfully.
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
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_CALENDARS_UPDATE tool input.
 */
type GOOGLECALENDAR_CALENDARS_UPDATE_INPUT = {
  /**
   * Calendar Id
   * @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   */
  calendarId?: string;
  /**
   * Description
   * @description Description of the calendar. Optional.
   * @default null
   */
  description: string | null;
  /**
   * Location
   * @description Geographic location of the calendar as free-form text. Optional.
   * @default null
   */
  location: string | null;
  /**
   * Summary
   * @description Title of the calendar.
   */
  summary?: string;
  /**
   * Time Zone
   * @description The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) Optional.
   * @default null
   */
  timeZone: string | null;
};

/**
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_CALENDARS_UPDATE tool output.
 */
type GOOGLECALENDAR_CALENDARS_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Conference Properties
       * @description The conferenceProperties of the calendar. Optional.
       * @default null
       */
      conferenceProperties: {
          [key: string]: unknown;
      } | null;
      /**
       * Description
       * @description Description of the calendar. Optional.
       * @default null
       */
      description: string | null;
      /**
       * Etag
       * @description ETag of the resource.
       * @default null
       */
      etag: string | null;
      /**
       * Id
       * @description Identifier of the calendar.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Type of the resource. "calendar#calendar".
       * @default null
       */
      kind: string | null;
      /**
       * Location
       * @description Geographic location of the calendar as free-form text. Optional.
       * @default null
       */
      location: string | null;
      /**
       * Summary
       * @description Title of the calendar.
       * @default null
       */
      summary: string | null;
      /**
       * Time Zone
       * @description The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) Optional.
       * @default null
       */
      timeZone: string | null;
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
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_CALENDAR_LIST_INSERT tool input.
 */
type GOOGLECALENDAR_CALENDAR_LIST_INSERT_INPUT = {
  /**
   * Background Color
   * @description The background color of the calendar in the Web UI. (Hexadecimal color code)
   * @default null
   */
  background_color: string | null;
  /**
   * Color Id
   * @description The color of the calendar. This is an ID referring to an entry in the calendarCore color palette.
   * @default null
   */
  color_id: string | null;
  /**
   * Color Rgb Format
   * @description Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
   * @default null
   */
  color_rgb_format: boolean | null;
  /**
   * Default Reminders
   * @description The default reminders that the authenticated user has for this calendar.
   * @default null
   */
  default_reminders: {
      /**
       * Method
       * @description The method used by this reminder (e.g., 'email', 'popup').
       */
      method: string;
      /**
       * Minutes
       * @description Number of minutes before the start of the event when the reminder should trigger.
       */
      minutes: number;
  }[] | null;
  /**
   * Foreground Color
   * @description The foreground color of the calendar in the Web UI. (Hexadecimal color code)
   * @default null
   */
  foreground_color: string | null;
  /**
   * Hidden
   * @description Whether the calendar has been hidden from the list. Default is False.
   * @default null
   */
  hidden: boolean | null;
  /**
   * Id
   * @description The identifier of the calendar to insert.
   */
  id?: string;
  /**
   * NotificationSetting
   * @description The notifications that the authenticated user is receiving for this calendar.
   * @default null
   */
  notification_settings: {
      /**
       * Notifications
       * @description The list of notifications.
       * @default null
       */
      notifications: {
          /**
           * Method
           * @description The method used by this notification (e.g., 'email').
           */
          method: string;
          /**
           * Type
           * @description The type of notification (e.g., 'eventCreation', 'eventChange').
           */
          type: string;
      }[] | null;
  } | null;
  /**
   * Selected
   * @description Whether the calendar is selected and visible in the calendar list. Default is True.
   * @default null
   */
  selected: boolean | null;
  /**
   * Summary Override
   * @description The summary that the authenticated user has set for this calendar.
   * @default null
   */
  summary_override: string | null;
};

/**
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_CALENDAR_LIST_INSERT tool output.
 */
type GOOGLECALENDAR_CALENDAR_LIST_INSERT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Role
       * @description The effective access role that the authenticated user has on the calendar. Read-only. Possible values are: "freeBusyReader", "reader", "writer", "owner".
       * @default null
       */
      access_role: string | null;
      /**
       * Background Color
       * @description The main color of the calendar in the hexadecimal format "#0088aa". This property supersedes the index-based colorId property.
       * @default null
       */
      background_color: string | null;
      /**
       * Color Id
       * @description The color of the calendar. This is an ID referring to an entry in the calendarCore color palette.
       * @default null
       */
      color_id: string | null;
      /**
       * Conference Properties
       * @description The conferenceProperties of the calendar.
       * @default null
       */
      conference_properties: {
          [key: string]: unknown;
      } | null;
      /**
       * Default Reminders
       * @description The default reminders that the authenticated user has for this calendar.
       * @default null
       */
      default_reminders: {
          /**
           * Method
           * @description The method used by this reminder (e.g., 'email', 'popup').
           */
          method: string;
          /**
           * Minutes
           * @description Number of minutes before the start of the event when the reminder should trigger.
           */
          minutes: number;
      }[] | null;
      /**
       * Deleted
       * @description Whether this calendar list entry has been deleted from the calendar list. Read-only. Optional. The default is False.
       * @default null
       */
      deleted: boolean | null;
      /**
       * Description
       * @description Description of the calendar.
       * @default null
       */
      description: string | null;
      /**
       * Etag
       * @description ETag of the resource.
       * @default null
       */
      etag: string | null;
      /**
       * Foreground Color
       * @description The foreground color of the calendar in the hexadecimal format "#ffffff". This property supersedes the index-based colorId property.
       * @default null
       */
      foreground_color: string | null;
      /**
       * Hidden
       * @description Whether the calendar has been hidden from the list. Optional. The default is False.
       * @default null
       */
      hidden: boolean | null;
      /**
       * Id
       * @description Identifier of the calendar list entry.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Type of the resource ('calendar#calendarListEntry').
       * @default null
       */
      kind: string | null;
      /**
       * Location
       * @description GeographicSigned location of the calendar like "Paris, France" or "New York, NY".
       * @default null
       */
      location: string | null;
      /**
       * NotificationSetting
       * @description The notifications that the authenticated user is receiving for this calendar.
       * @default null
       */
      notification_settings: {
          /**
           * Notifications
           * @description The list of notifications.
           * @default null
           */
          notifications: {
              /**
               * Method
               * @description The method used by this notification (e.g., 'email').
               */
              method: string;
              /**
               * Type
               * @description The type of notification (e.g., 'eventCreation', 'eventChange').
               */
              type: string;
          }[] | null;
      } | null;
      /**
       * Primary
       * @description Whether the calendar is the primary calendar of the authenticated user. Read-only. Optional. The default is False.
       * @default null
       */
      primary: boolean | null;
      /**
       * Selected
       * @description Whether the calendar is selected and visible in the calendar list. Optional. The default is True.
       * @default null
       */
      selected: boolean | null;
      /**
       * Summary
       * @description Title of the calendar.
       * @default null
       */
      summary: string | null;
      /**
       * Summary Override
       * @description The summary that the authenticated user has set for this calendar (if any).
       * @default null
       */
      summary_override: string | null;
      /**
       * Time Zone
       * @description The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".)
       * @default null
       */
      time_zone: string | null;
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
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_CALENDAR_LIST_UPDATE tool input.
 */
type GOOGLECALENDAR_CALENDAR_LIST_UPDATE_INPUT = {
  /**
   * Background Color
   * @description Hex color for calendar background.
   * @default null
   */
  backgroundColor: string | null;
  /**
   * Calendar Id
   * @description Calendar identifier. Use "primary" for the primary calendar.
   */
  calendar_id?: string;
  /**
   * Color Id
   * @description ID for calendar color from colors endpoint.
   * @default null
   */
  colorId: string | null;
  /**
   * Color Rgb Format
   * @description Whether to use RGB for foreground/background colors.
   * @default null
   */
  colorRgbFormat: boolean | null;
  /**
   * Default Reminders
   * @description List of default reminders.
   * @default null
   */
  defaultReminders: {
      /**
       * Method
       * @description Method for the reminder (e.g., email, popup).
       */
      method: string;
      /**
       * Minutes
       * @description Minutes before event for reminder.
       */
      minutes: number;
  }[] | null;
  /**
   * Foreground Color
   * @description Hex color for calendar foreground.
   * @default null
   */
  foregroundColor: string | null;
  /**
   * Hidden
   * @description Whether calendar is hidden.
   * @default null
   */
  hidden: boolean | null;
  /**
   * NotificationSettings
   * @description Notification settings for the calendar.
   * @default null
   */
  notificationSettings: {
      /**
       * Notifications
       * @description List of notifications.
       * @default null
       */
      notifications: {
          /**
           * Method
           * @description Method for the notification (e.g., email).
           */
          method: string;
          /**
           * Type
           * @description Type of notification (e.g., eventCreation).
           */
          type: string;
      }[] | null;
  } | null;
  /**
   * Selected
   * @description Whether calendar content shows in UI.
   * @default null
   */
  selected: boolean | null;
  /**
   * Summary Override
   * @description User-set summary for the calendar.
   * @default null
   */
  summaryOverride: string | null;
};

/**
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_CALENDAR_LIST_UPDATE tool output.
 */
type GOOGLECALENDAR_CALENDAR_LIST_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Role
       * @description The effective access role that the authenticated user has on the calendar.
       * @default null
       */
      accessRole: string | null;
      /**
       * Background Color
       * @description The main color of the calendar in the hexadecimal format "#0088aa".
       * @default null
       */
      backgroundColor: string | null;
      /**
       * Color Id
       * @description The color of the calendar. This is an ID referring to an entry in the calendar section of the colors definition.
       * @default null
       */
      colorId: string | null;
      /**
       * Conference Properties
       * @description The conferenceProperties of the calendar.
       * @default null
       */
      conferenceProperties: {
          [key: string]: unknown;
      } | null;
      /**
       * Default Reminders
       * @description The default reminders that the authenticated user has for this calendar.
       * @default null
       */
      defaultReminders: {
          /**
           * Method
           * @description Method for the reminder (e.g., email, popup).
           */
          method: string;
          /**
           * Minutes
           * @description Minutes before event for reminder.
           */
          minutes: number;
      }[] | null;
      /**
       * Deleted
       * @description Whether the calendar has been deleted from the user\'s list. Optional.
       * @default null
       */
      deleted: boolean | null;
      /**
       * Description
       * @description Description of the calendar. Optional.
       * @default null
       */
      description: string | null;
      /**
       * Etag
       * @description ETag of the resource.
       * @default null
       */
      etag: string | null;
      /**
       * Foreground Color
       * @description The foreground color of the calendar in the hexadecimal format "#ffffff".
       * @default null
       */
      foregroundColor: string | null;
      /**
       * Hidden
       * @description Whether the calendar has been hidden from the list. Optional.
       * @default null
       */
      hidden: boolean | null;
      /**
       * Id
       * @description Identifier of the calendar.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Type of the resource ("calendar#calendarListEntry").
       * @default null
       */
      kind: string | null;
      /**
       * Location
       * @description Geographic location of the calendar as free-text. Optional.
       * @default null
       */
      location: string | null;
      /**
       * NotificationSettings
       * @description The notifications that the authenticated user is receiving for this calendar.
       * @default null
       */
      notificationSettings: {
          /**
           * Notifications
           * @description List of notifications.
           * @default null
           */
          notifications: {
              /**
               * Method
               * @description Method for the notification (e.g., email).
               */
              method: string;
              /**
               * Type
               * @description Type of notification (e.g., eventCreation).
               */
              type: string;
          }[] | null;
      } | null;
      /**
       * Primary
       * @description Whether the calendar is the primary calendar of the authenticated user. Optional.
       * @default null
       */
      primary: boolean | null;
      /**
       * Selected
       * @description Whether the calendar content shows up in the calendar UI. Optional.
       * @default null
       */
      selected: boolean | null;
      /**
       * Summary
       * @description Title of the calendar.
       * @default null
       */
      summary: string | null;
      /**
       * Summary Override
       * @description The summary that the authenticated user has set for this calendar. Optional.
       * @default null
       */
      summaryOverride: string | null;
      /**
       * Time Zone
       * @description The time zone of the calendar. Optional.
       * @default null
       */
      timeZone: string | null;
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
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_CLEAR_CALENDAR tool input.
 */
type GOOGLECALENDAR_CLEAR_CALENDAR_INPUT = {
  /**
   * Calendar Id
   * @description Calendar identifier. To retrieve calendar IDs call the `calendarList.list` method. If you want to access the primary calendar of the currently logged in user, use the "`primary`" keyword.
   */
  calendar_id?: string;
};

/**
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_CLEAR_CALENDAR tool output.
 */
type GOOGLECALENDAR_CLEAR_CALENDAR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Success message indicating the calendar was cleared.
       * @default Calendar cleared successfully.
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
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_CREATE_EVENT tool input.
 */
type GOOGLECALENDAR_CREATE_EVENT_INPUT = {
  /**
   * Attendees
   * @description List of attendee emails (strings).
   * @default null
   */
  attendees: string[] | null;
  /**
   * Calendar Id
   * @description Target calendar: 'primary' for the user's main calendar, or the calendar's email address.
   * @default primary
   */
  calendar_id: string;
  /**
   * Create Meeting Room
   * @description If true, a Google Meet link is created and added to the event. CRITICAL: As of 2024, this REQUIRES a paid Google Workspace account ($13+/month). Personal Gmail accounts will fail with 'Invalid conference type value' error. Solutions: 1) Upgrade to Workspace, 2) Use domain-wide delegation with Workspace user, 3) Use the new Google Meet REST API, or 4) Create events without conferences. See https://github.com/googleapis/google-api-nodejs-client/issues/3234
   * @default null
   */
  create_meeting_room: boolean | null;
  /**
   * Description
   * @description Description of the event. Can contain HTML. Optional.
   * @default null
   */
  description: string | null;
  /**
   * Event Type
   * @description Type of the event, immutable post-creation. Supported types: 'birthday' (all-day with annual recurrence), 'default' (regular event), 'focusTime' (focus-time event), 'outOfOffice' (out-of-office event), 'workingLocation' (working location event). Note: 'fromGmail' events cannot be created via API.
   * @default default
   * @enum {string}
   */
  eventType: "birthday" | "default" | "focusTime" | "outOfOffice" | "workingLocation";
  /**
   * Event Duration Hour
   * @description Number of hours (0-24). Increase by 1 here rather than passing 60 in `event_duration_minutes`
   * @default 0
   */
  event_duration_hour: number;
  /**
   * Event Duration Minutes
   * @description Duration in minutes (0-59 ONLY). NEVER use 60+ minutes - use event_duration_hour=1 instead. Maximum value is 59.
   * @default 30
   */
  event_duration_minutes: number;
  /**
   * Exclude Organizer
   * @description If True, the organizer will NOT be added as an attendee. Default is False (organizer is included).
   * @default false
   */
  exclude_organizer: boolean;
  /**
   * Guests Can Invite Others
   * @description Whether attendees other than the organizer can invite others to the event.
   * @default null
   */
  guestsCanInviteOthers: boolean | null;
  /**
   * Guests Can See Other Guests
   * @description Whether attendees other than the organizer can see who the event's attendees are.
   * @default null
   */
  guestsCanSeeOtherGuests: boolean | null;
  /**
   * Guests Can Modify
   * @description If True, guests can modify the event.
   * @default false
   */
  guests_can_modify: boolean;
  /**
   * Location
   * @description Geographic location of the event as free-form text.
   * @default null
   */
  location: string | null;
  /**
   * Recurrence
   * @description List of RRULE, EXRULE, RDATE, EXDATE lines for recurring events. Supported frequencies are DAILY, WEEKLY, MONTHLY, YEARLY.
   * @default null
   */
  recurrence: string[] | null;
  /**
   * Send Updates
   * @description Defaults to True. Whether to send updates to the attendees.
   * @default null
   */
  send_updates: boolean | null;
  /**
   * Start Datetime
   * @description Naive date/time (YYYY-MM-DDTHH:MM:SS) with NO offsets or Z. e.g. '2025-01-16T13:00:00'
   */
  start_datetime?: string;
  /**
   * Summary
   * @description Summary (title) of the event.
   * @default null
   */
  summary: string | null;
  /**
   * Timezone
   * @description IANA timezone name (e.g., 'America/New_York'). Required if datetime is naive. If datetime includes timezone info (Z or offset), this field is optional and defaults to UTC.
   * @default null
   */
  timezone: string | null;
  /**
   * Transparency
   * @description 'opaque' (busy) or 'transparent' (available).
   * @default opaque
   * @enum {string}
   */
  transparency: "opaque" | "transparent";
  /**
   * Visibility
   * @description Event visibility: 'default', 'public', 'private', or 'confidential'.
   * @default default
   * @enum {string}
   */
  visibility: "default" | "public" | "private" | "confidential";
};

/**
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_CREATE_EVENT tool output.
 */
type GOOGLECALENDAR_CREATE_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full representation of the created event resource from Google Calendar API, including ID, summary, times, attendees, etc.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_DELETE_EVENT tool input.
 */
type GOOGLECALENDAR_DELETE_EVENT_INPUT = {
  /**
   * Calendar Id
   * @description Identifier of the Google Calendar (e.g., email address, specific ID, or 'primary' for the authenticated user's main calendar) from which the event will be deleted.
   * @default primary
   */
  calendar_id: string;
  /**
   * Event Id
   * @description Unique identifier of the event to delete, typically obtained upon event creation.
   */
  event_id?: string;
};

/**
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_DELETE_EVENT tool output.
 */
type GOOGLECALENDAR_DELETE_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Details the deletion outcome: `{'status': 'success'}` for a standard 204 No Content, or `{'message': <API_JSON_response>}` if the API returns a body on other success statuses.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_DUPLICATE_CALENDAR tool input.
 */
type GOOGLECALENDAR_DUPLICATE_CALENDAR_INPUT = {
  /**
   * Summary
   * @description Title for the new Google Calendar to be created. If an empty string is provided, the calendar will be created without a title.
   * @default
   */
  summary: string;
};

/**
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_DUPLICATE_CALENDAR tool output.
 */
type GOOGLECALENDAR_DUPLICATE_CALENDAR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Calendar Data
       * @description A dictionary representing the newly created Google Calendar resource, including its ID, summary, and other properties as returned by the Google Calendar API.
       */
      calendar_data: {
          [key: string]: unknown;
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
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_EVENTS_INSTANCES tool input.
 */
type GOOGLECALENDAR_EVENTS_INSTANCES_INPUT = {
  /**
   * Calendar Id
   * @description Calendar identifier. To retrieve calendar IDs call the `calendarList.list` method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   */
  calendarId?: string;
  /**
   * Event Id
   * @description Recurring event identifier.
   */
  eventId?: string;
  /**
   * Max Attendees
   * @description The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
   * @default null
   */
  maxAttendees: number | null;
  /**
   * Max Results
   * @description Maximum number of events returned on one result page. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
   * @default null
   */
  maxResults: number | null;
  /**
   * Original Start
   * @description The original start time of the instance in the result. Optional.
   * @default null
   */
  originalStart: string | null;
  /**
   * Page Token
   * @description Token specifying which result page to return. Optional.
   * @default null
   */
  pageToken: string | null;
  /**
   * Show Deleted
   * @description Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events will still be included if `singleEvents` is False. Optional. The default is False.
   * @default null
   */
  showDeleted: boolean | null;
  /**
   * Time Max
   * @description Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset.
   * @default null
   */
  timeMax: string | null;
  /**
   * Time Min
   * @description Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset.
   * @default null
   */
  timeMin: string | null;
  /**
   * Time Zone
   * @description Time zone used in the response. Optional. The default is the time zone of the calendar.
   * @default null
   */
  timeZone: string | null;
};

/**
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_EVENTS_INSTANCES tool output.
 */
type GOOGLECALENDAR_EVENTS_INSTANCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Role
       * @description The user's access role for this calendar. Read-only.
       * @default null
       */
      accessRole: string | null;
      /**
       * Default Reminders
       * @description The default reminders on the calendar for the authenticated user.
       * @default null
       */
      defaultReminders: {
          /**
           * Method
           * @description The method used by this reminder. Possible values are: 'email', 'popup'.
           * @default null
           */
          method: string | null;
          /**
           * Minutes
           * @description Number of minutes before the start of the event when the reminder should trigger.
           * @default null
           */
          minutes: number | null;
      }[] | null;
      /**
       * Description
       * @description Description of the calendar. Read-only.
       * @default null
       */
      description: string | null;
      /**
       * Etag
       * @description ETag of the collection.
       * @default null
       */
      etag: string | null;
      /**
       * Items
       * @description List of event instances.
       * @default null
       */
      items: {
          /**
           * Attachments
           * @description File attachments for the event.
           * @default null
           */
          attachments: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Attendees
           * @default null
           */
          attendees: {
              /**
               * Display Name
               * @default null
               */
              displayName: string | null;
              /**
               * Email
               * @default null
               */
              email: string | null;
              /**
               * Self
               * @description Whether this is the authenticated user.
               * @default null
               */
              self: boolean | null;
          }[] | null;
          /**
           * Attendees Omitted
           * @default null
           */
          attendeesOmitted: boolean | null;
          /**
           * Color Id
           * @description The color of the event.
           * @default null
           */
          colorId: string | null;
          /**
           * ConferenceData
           * @default null
           */
          conferenceData: {
              /**
               * Conference Id
               * @default null
               */
              conferenceId: string | null;
              /**
               * Conference Solution
               * @default null
               */
              conferenceSolution: {
                  [key: string]: unknown;
              } | null;
              /**
               * CreateRequest
               * @default null
               */
              createRequest: {
                  /**
                   * ConferenceSolutionKey
                   * @default null
                   */
                  conferenceSolutionKey: {
                      /**
                       * Type
                       * @default null
                       */
                      type: string | null;
                  } | null;
                  /**
                   * Request Id
                   * @default null
                   */
                  requestId: string | null;
                  /**
                   * Status
                   * @default null
                   */
                  status: string | null;
              } | null;
              /**
               * Entry Points
               * @default null
               */
              entryPoints: {
                  /**
                   * Entry Point Type
                   * @default null
                   */
                  entryPointType: string | null;
                  /**
                   * Label
                   * @default null
                   */
                  label: string | null;
                  /**
                   * Uri
                   * @default null
                   */
                  uri: string | null;
              }[] | null;
              /**
               * Notes
               * @default null
               */
              notes: string | null;
              /**
               * Signature
               * @default null
               */
              signature: string | null;
          } | null;
          /**
           * Created
           * @description Creation time of the event (as a RFC3339 timestamp). Read-only.
           * @default null
           */
          created: string | null;
          /**
           * EventPerson
           * @default null
           */
          creator: {
              /**
               * Display Name
               * @default null
               */
              displayName: string | null;
              /**
               * Email
               * @default null
               */
              email: string | null;
              /**
               * Self
               * @description Whether this is the authenticated user.
               * @default null
               */
              self: boolean | null;
          } | null;
          /**
           * Description
           * @description Description of the event. Can contain HTML. Optional.
           * @default null
           */
          description: string | null;
          /**
           * EventDateTime
           * @default null
           */
          end: {
              /**
               * Date
               * @default null
               */
              date: string | null;
              /**
               * Date Time
               * @default null
               */
              dateTime: string | null;
              /**
               * Time Zone
               * @default null
               */
              timeZone: string | null;
          } | null;
          /**
           * End Time Unspecified
           * @default null
           */
          endTimeUnspecified: boolean | null;
          /**
           * Etag
           * @description ETag of the resource.
           * @default null
           */
          etag: string | null;
          /**
           * Event Type
           * @default null
           */
          eventType: string | null;
          /**
           * Hangout Link
           * @default null
           */
          hangoutLink: string | null;
          /**
           * Html Link
           * @description An absolute link to this event in the Google Calendar Web UI. Read-only.
           * @default null
           */
          htmlLink: string | null;
          /**
           * I Cal Uid
           * @default null
           */
          iCalUID: string | null;
          /**
           * Id
           * @description Opaque identifier of the event.
           * @default null
           */
          id: string | null;
          /**
           * Kind
           * @description Type of the resource ('calendar#event').
           * @default null
           */
          kind: string | null;
          /**
           * Location
           * @description Geographic location of the event as free-form text. Optional.
           * @default null
           */
          location: string | null;
          /**
           * EventPerson
           * @default null
           */
          organizer: {
              /**
               * Display Name
               * @default null
               */
              displayName: string | null;
              /**
               * Email
               * @default null
               */
              email: string | null;
              /**
               * Self
               * @description Whether this is the authenticated user.
               * @default null
               */
              self: boolean | null;
          } | null;
          /**
           * EventDateTime
           * @default null
           */
          originalStartTime: {
              /**
               * Date
               * @default null
               */
              date: string | null;
              /**
               * Date Time
               * @default null
               */
              dateTime: string | null;
              /**
               * Time Zone
               * @default null
               */
              timeZone: string | null;
          } | null;
          /**
           * Recurrence
           * @default null
           */
          recurrence: string[] | null;
          /**
           * Recurring Event Id
           * @default null
           */
          recurringEventId: string | null;
          /**
           * EventReminders
           * @default null
           */
          reminders: {
              /**
               * Overrides
               * @description If the event doesn't use the default reminders, this lists the reminders specific to the event, or, if also omitted, indicates that no reminders are set for this event.
               * @default null
               */
              overrides: {
                  /**
                   * Method
                   * @description The method used by this reminder. Possible values are: 'email', 'popup'.
                   * @default null
                   */
                  method: string | null;
                  /**
                   * Minutes
                   * @description Number of minutes before the start of the event when the reminder should trigger.
                   * @default null
                   */
                  minutes: number | null;
              }[] | null;
              /**
               * Use Default
               * @description Whether the default reminders of the calendar apply to the event.
               * @default null
               */
              useDefault: boolean | null;
          } | null;
          /**
           * Sequence
           * @default null
           */
          sequence: number | null;
          /**
           * Source
           * @description Source from which the event was created.
           * @default null
           */
          source: {
              [key: string]: string;
          } | null;
          /**
           * EventDateTime
           * @default null
           */
          start: {
              /**
               * Date
               * @default null
               */
              date: string | null;
              /**
               * Date Time
               * @default null
               */
              dateTime: string | null;
              /**
               * Time Zone
               * @default null
               */
              timeZone: string | null;
          } | null;
          /**
           * Status
           * @description Status of the event. Optional. Possible values are: 'confirmed', 'tentative', 'cancelled'.
           * @default null
           */
          status: string | null;
          /**
           * Summary
           * @description Title of the event.
           * @default null
           */
          summary: string | null;
          /**
           * Transparency
           * @default null
           */
          transparency: string | null;
          /**
           * Updated
           * @description Last modification time of the event (as a RFC3339 timestamp). Read-only.
           * @default null
           */
          updated: string | null;
          /**
           * Visibility
           * @default null
           */
          visibility: string | null;
      }[] | null;
      /**
       * Kind
       * @description Type of the collection ("calendar#events").
       * @default null
       */
      kind: string | null;
      /**
       * Next Page Token
       * @description Token used to access the next page of this result.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Next Sync Token
       * @description Token used at a later point in time to retrieve only the entries that have changed since this result was returned.
       * @default null
       */
      nextSyncToken: string | null;
      /**
       * Summary
       * @description Title of the calendar. Read-only.
       * @default null
       */
      summary: string | null;
      /**
       * Time Zone
       * @description The time zone of the calendar. Read-only.
       * @default null
       */
      timeZone: string | null;
      /**
       * Updated
       * @description Last modification time of the calendar (as a RFC3339 timestamp). Read-only.
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
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_EVENTS_LIST tool input.
 */
type GOOGLECALENDAR_EVENTS_LIST_INPUT = {
  /**
   * Always Include Email
   * @description Deprecated and ignored.
   * @default null
   */
  alwaysIncludeEmail: boolean | null;
  /**
   * Calendar Id
   * @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   */
  calendarId?: string;
  /**
   * Event Types
   * @description Event types to return. Optional. This parameter can be repeated multiple times to return events of different types. If unset, returns all event types. Acceptable values are: "birthday", "default", "focusTime", "fromGmail", "outOfOffice", "workingLocation".
   * @default null
   */
  eventTypes: string | null;
  /**
   * I Cal Uid
   * @description Specifies an event ID in the iCalendar format to be provided in the response. Optional. Use this if you want to search for an event by its iCalendar ID.
   * @default null
   */
  iCalUID: string | null;
  /**
   * Max Attendees
   * @description The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
   * @default null
   */
  maxAttendees: number | null;
  /**
   * Max Results
   * @description Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
   * @default null
   */
  maxResults: number | null;
  /**
   * Order By
   * @description The order of the events returned in the result. Optional. The default is an unspecified, stable order. Acceptable values are: "startTime", "updated".
   * @default null
   */
  orderBy: string | null;
  /**
   * Page Token
   * @description Token specifying which result page to return. Optional.
   * @default null
   */
  pageToken: string | null;
  /**
   * Private Extended Property
   * @description Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints.
   * @default null
   */
  privateExtendedProperty: string | null;
  /**
   * Q
   * @description Free text search terms to find events that match these terms in various fields. Optional.
   * @default null
   */
  q: string | null;
  /**
   * Shared Extended Property
   * @description Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints.
   * @default null
   */
  sharedExtendedProperty: string | null;
  /**
   * Show Deleted
   * @description Whether to include deleted events (with status equals "cancelled") in the result. Optional. The default is False.
   * @default null
   */
  showDeleted: boolean | null;
  /**
   * Show Hidden Invitations
   * @description Whether to include hidden invitations in the result. Optional. The default is False.
   * @default null
   */
  showHiddenInvitations: boolean | null;
  /**
   * Single Events
   * @description Whether to expand recurring events into instances and only return single one-off events and instances of recurring events. Optional. The default is False.
   * @default null
   */
  singleEvents: boolean | null;
  /**
   * Sync Token
   * @description Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. Optional. The default is to return all entries.
   * @default null
   */
  syncToken: string | null;
  /**
   * Time Max
   * @description Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMin is set, timeMax must be greater than timeMin.
   * @default 2025-09-01T08:20:14.636699Z
   */
  timeMax: string | null;
  /**
   * Time Min
   * @description Lower bound (exclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMax is set, timeMin must be smaller than timeMax.
   * @default 2025-08-25T08:20:14.636762Z
   */
  timeMin: string | null;
  /**
   * Time Zone
   * @description Time zone used in the response. Optional. The default is the user's primary time zone.
   * @default null
   */
  timeZone: string | null;
  /**
   * Updated Min
   * @description Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.
   * @default null
   */
  updatedMin: string | null;
};

/**
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_EVENTS_LIST tool output.
 */
type GOOGLECALENDAR_EVENTS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Role
       * @description The user's access role for this calendar. Read-only. Possible values are:
       *     - "freeBusyReader" - Provides read access to free/busy information.
       *     - "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
       *     - "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
       *     - "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role and additionally allows any user with this role to modify and revoke access to the calendar.
       * @default null
       */
      accessRole: string | null;
      /**
       * Default Reminders
       * @description The default reminders on the calendar for the authenticated user. These reminders apply to all events on this calendar that do not explicitly override them (i.e. do not have reminders.useDefault set to True).
       * @default null
       */
      defaultReminders: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Description
       * @description Description of the calendar. Read-only.
       * @default null
       */
      description: string | null;
      /**
       * Etag
       * @description ETag of the resource.
       * @default null
       */
      etag: string | null;
      /**
       * Items
       * @description List of events on the calendar.
       * @default null
       */
      items: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Kind
       * @description Type of the resource ("calendar#events").
       * @default null
       */
      kind: string | null;
      /**
       * Next Page Token
       * @description Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Next Sync Token
       * @description Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided.
       * @default null
       */
      nextSyncToken: string | null;
      /**
       * Summary
       * @description Title of the calendar. Read-only.
       * @default null
       */
      summary: string | null;
      /**
       * Time Zone
       * @description The time zone of the calendar. Read-only.
       * @default null
       */
      timeZone: string | null;
      /**
       * Updated
       * @description Last modification time of the calendar (as a RFC3339 timestamp). Read-only.
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
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_EVENTS_MOVE tool input.
 */
type GOOGLECALENDAR_EVENTS_MOVE_INPUT = {
  /**
   * Calendar Id
   * @description Calendar identifier of the source calendar. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   */
  calendar_id?: string;
  /**
   * Destination
   * @description Calendar identifier of the destination calendar. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   */
  destination?: string;
  /**
   * Event Id
   * @description Event identifier. To retrieve event identifiers call the events.list method.
   */
  event_id?: string;
  /**
   * Send Updates
   * @description Guests who should receive notifications about the change of the event's organizer. Acceptable values are: "all": Notifications are sent to all guests. "externalOnly": Notifications are sent to non-Google Calendar guests only. "none": No notifications are sent. This is the default value if left unspecified.
   * @default null
   */
  send_updates: string | null;
};

/**
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_EVENTS_MOVE tool output.
 */
type GOOGLECALENDAR_EVENTS_MOVE_OUTPUT = {
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
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_EVENTS_WATCH tool input.
 */
type GOOGLECALENDAR_EVENTS_WATCH_INPUT = {
  /**
   * Address
   * @description The address where notifications are delivered for this channel.
   */
  address?: string;
  /**
   * Calendar Id
   * @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   */
  calendarId?: string;
  /**
   * Id
   * @description A UUID or similar unique string that identifies this channel.
   */
  id?: string;
  /**
   * EventsWatchRequestParams
   * @description Additional parameters controlling delivery channel behavior. Optional.
   * @default null
   */
  params: {
      /**
       * Ttl
       * @description Time To Live for the notification channel.
       * @default null
       */
      ttl: string | null;
  } | null;
  /**
   * Payload
   * @description A Boolean value to indicate whether payload is wanted. Optional.
   * @default null
   */
  payload: boolean | null;
  /**
   * Token
   * @description An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
   * @default null
   */
  token: string | null;
  /**
   * Type
   * @description The type of delivery mechanism used for this channel.
   * @default web_hook
   */
  type: string;
};

/**
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_EVENTS_WATCH tool output.
 */
type GOOGLECALENDAR_EVENTS_WATCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expiration
       * @description Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
       * @default null
       */
      expiration: string | null;
      /**
       * Id
       * @description A UUID or similar unique string that identifies this channel.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Identifies this as a notification channel. Value: "api#channel".
       * @default null
       */
      kind: string | null;
      /**
       * Resource Id
       * @description An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
       * @default null
       */
      resourceId: string | null;
      /**
       * Resource Uri
       * @description A version-specific identifier for the watched resource.
       * @default null
       */
      resourceUri: string | null;
      /**
       * Token
       * @description An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
       * @default null
       */
      token: string | null;
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
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_FIND_EVENT tool input.
 */
type GOOGLECALENDAR_FIND_EVENT_INPUT = {
  /**
   * Calendar Id
   * @description Identifier of the Google Calendar to query. Use 'primary' for the primary calendar of the authenticated user, an email address for a specific user's calendar, or a calendar ID for other calendars.
   * @default primary
   */
  calendar_id: string;
  /**
   * Event Types
   * @description Event types to include: 'default' (regular event), 'focusTime' (focused work time), 'outOfOffice' (out-of-office time).
   * @default [
   *       "birthday",
   *       "default",
   *       "focusTime",
   *       "outOfOffice",
   *       "workingLocation"
   *     ]
   */
  event_types: string[];
  /**
   * Max Results
   * @description Maximum number of events per page (1-2500).
   * @default 10
   */
  max_results: number;
  /**
   * Order By
   * @description Order of events: 'startTime' (ascending by start time) or 'updated' (ascending by last modification time).
   * @default null
   */
  order_by: string | null;
  /**
   * Page Token
   * @description Token from a previous response's `nextPageToken` to fetch the subsequent page of results.
   * @default null
   */
  page_token: string | null;
  /**
   * Query
   * @description Free-text search terms to find events. This query is matched against various event fields including summary, description, location, attendees' details (displayName, email), and organizer's details.
   * @default null
   */
  query: string | null;
  /**
   * Show Deleted
   * @description Include deleted events (status 'cancelled') in the result.
   * @default null
   */
  show_deleted: boolean | null;
  /**
   * Single Events
   * @description Expand recurring events into individual instances. If false, returns master recurring events.
   * @default true
   */
  single_events: boolean;
  /**
   * Time Max
   * @description Upper bound (exclusive) for an event's start time to filter by. Only events starting before this time are included. Accepts multiple formats:
   *     1. RFC3339 timestamp (e.g., '2024-12-06T13:00:00Z')
   *     2. Comma-separated date/time parts (e.g., '2024,12,06,13,00,00')
   *     3. Simple datetime string (e.g., '2024-12-06 13:00:00')
   * @default null
   */
  timeMax: string | null;
  /**
   * Time Min
   * @description Lower bound (exclusive) for an event's end time to filter by. Only events ending after this time are included. Accepts multiple formats:
   *     1. RFC3339 timestamp (e.g., '2024-12-06T13:00:00Z')
   *     2. Comma-separated date/time parts (e.g., '2024,12,06,13,00,00')
   *     3. Simple datetime string (e.g., '2024-12-06 13:00:00')
   * @default null
   */
  timeMin: string | null;
  /**
   * Updated Min
   * @description Lower bound (exclusive) for an event's last modification time to filter by. Only events updated after this time are included. When specified, events deleted since this time are also included, regardless of the `show_deleted` parameter. Accepts multiple formats:
   *     1. RFC3339 timestamp (e.g., '2024-12-06T13:00:00Z')
   *     2. Comma-separated date/time parts (e.g., '2024,12,06,13,00,00')
   *     3. Simple datetime string (e.g., '2024-12-06 13:00:00')
   * @default null
   */
  updated_min: string | null;
};

/**
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_FIND_EVENT tool output.
 */
type GOOGLECALENDAR_FIND_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Event Data
       * @description A dictionary containing the search results. Keys include: 'event_data' (a list of the found event objects matching Google Calendar API's event resource schema), 'nextPageToken' (string token for fetching the next page of results, null if no more pages), 'nextSyncToken' (string token for future incremental synchronization, may not always be present), and 'note' (an optional string with contextual information about the search).
       */
      event_data: {
          [key: string]: unknown;
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
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_FIND_FREE_SLOTS tool input.
 */
type GOOGLECALENDAR_FIND_FREE_SLOTS_INPUT = {
  /**
   * Calendar Expansion Max
   * @description Maximum calendars for which FreeBusy information is provided. Max allowed: 50.
   * @default 50
   */
  calendar_expansion_max: number;
  /**
   * Group Expansion Max
   * @description Maximum calendar identifiers to return for a single group; exceeding this causes an error. Max allowed: 100.
   * @default 100
   */
  group_expansion_max: number;
  /**
   * Items
   * @description List of calendar identifiers (primary ID 'primary', user/calendar email, or unique calendar ID) to query for free/busy information.
   * @default [
   *       "primary"
   *     ]
   */
  items: string[];
  /**
   * Time Max
   * @description End datetime for the query interval. Accepts ISO, comma-separated, or simple datetime formats.
   * @default null
   */
  time_max: string | null;
  /**
   * Time Min
   * @description Start datetime for the query interval. Accepts ISO, comma-separated, or simple datetime formats.
   * @default null
   */
  time_min: string | null;
  /**
   * Timezone
   * @description IANA timezone identifier (e.g., 'America/New_York', 'Europe/London') for interpreting `time_min` and `time_max` if they lack timezone info, and for expanding recurring events.
   * @default UTC
   */
  timezone: string;
};

/**
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_FIND_FREE_SLOTS tool output.
 */
type GOOGLECALENDAR_FIND_FREE_SLOTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Free/busy schedule for requested calendars, with busy intervals enriched with corresponding event details if found.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_FREE_BUSY_QUERY tool input.
 */
type GOOGLECALENDAR_FREE_BUSY_QUERY_INPUT = {
  /**
   * Calendar Expansion Max
   * @description Maximal number of calendars for which FreeBusy information is to be provided. Optional. Maximum value is 50.
   * @default null
   */
  calendarExpansionMax: number | null;
  /**
   * Group Expansion Max
   * @description Maximal number of calendar identifiers to be provided for a single group. Optional. An error is returned for a group with more members than this value. Maximum value is 100.
   * @default null
   */
  groupExpansionMax: number | null;
  /**
   * Items
   * @description List of calendars and/or groups to query.
   */
  items?: {
      /**
       * Id
       * @description The identifier of a calendar or a group.
       */
      id: string;
  }[];
  /**
   * Time Max
   * Format: date-time
   * @description The end of the interval for the query formatted as per RFC3339.
   */
  timeMax?: string;
  /**
   * Time Min
   * Format: date-time
   * @description The start of the interval for the query formatted as per RFC3339.
   */
  timeMin?: string;
  /**
   * Time Zone
   * @description Time zone used in the response. Optional. The default is UTC.
   * @default null
   */
  timeZone: string | null;
};

/**
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_FREE_BUSY_QUERY tool output.
 */
type GOOGLECALENDAR_FREE_BUSY_QUERY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Calendars
       * @description List of free/busy information for calendars.
       * @default null
       */
      calendars: {
          [key: string]: {
              /**
               * Busy
               * @description List of time ranges during which this calendar should be regarded as busy.
               * @default null
               */
              busy: {
                  /**
                   * End
                   * Format: date-time
                   * @description The (exclusive) end of the time period.
                   */
                  end: string;
                  /**
                   * Start
                   * Format: date-time
                   * @description The (inclusive) start of the time period.
                   */
                  start: string;
              }[] | null;
              /**
               * Errors
               * @description Optional error(s) (if computation for the calendar failed).
               * @default null
               */
              errors: {
                  /**
                   * Domain
                   * @description Domain, or broad category, of the error.
                   * @default null
                   */
                  domain: string | null;
                  /**
                   * Reason
                   * @description Specific reason for the error.
                   * @default null
                   */
                  reason: string | null;
              }[] | null;
          };
      } | null;
      /**
       * Groups
       * @description Expansion of groups.
       * @default null
       */
      groups: {
          [key: string]: {
              /**
               * Calendars
               * @description List of calendars' identifiers within a group.
               * @default null
               */
              calendars: string[] | null;
              /**
               * Errors
               * @description Optional error(s) (if computation for the group failed).
               * @default null
               */
              errors: {
                  /**
                   * Domain
                   * @description Domain, or broad category, of the error.
                   * @default null
                   */
                  domain: string | null;
                  /**
                   * Reason
                   * @description Specific reason for the error.
                   * @default null
                   */
                  reason: string | null;
              }[] | null;
          };
      } | null;
      /**
       * Kind
       * @description Type of the resource ("calendar#freeBusy").
       */
      kind: string;
      /**
       * Time Max
       * Format: date-time
       * @description The end of the interval.
       */
      timeMax: string;
      /**
       * Time Min
       * Format: date-time
       * @description The start of the interval.
       */
      timeMin: string;
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
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_GET_CALENDAR tool input.
 */
type GOOGLECALENDAR_GET_CALENDAR_INPUT = {
  /**
   * Calendar Id
   * @description Identifier of the Google Calendar to retrieve. 'primary' (the default) represents the user's main calendar; other valid identifiers include the calendar's email address.
   * @default primary
   */
  calendar_id: string;
};

/**
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_GET_CALENDAR tool output.
 */
type GOOGLECALENDAR_GET_CALENDAR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Calendar Data
       * @description A dictionary representing the Google Calendar resource that was fetched. This object contains various details about the calendar, such as its ID, summary (title), description, time zone, and other metadata. For a detailed structure, refer to the 'Calendars' resource in the Google Calendar API documentation.
       */
      calendar_data: {
          [key: string]: unknown;
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
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_GET_CURRENT_DATE_TIME tool input.
 */
type GOOGLECALENDAR_GET_CURRENT_DATE_TIME_INPUT = {
  /**
   * Timezone
   * @description Timezone offset from UTC in hours (e.g., 6 for UTC+6, -9 for UTC-9, 5.5 for UTC+5:30). Default 0 is UTC.
   * @default 0
   */
  timezone: number;
};

/**
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_GET_CURRENT_DATE_TIME tool output.
 */
type GOOGLECALENDAR_GET_CURRENT_DATE_TIME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Current Datetime
       * @description Current date and time in ISO 8601 format (e.g., '2024-07-15T10:30:00+05:30').
       */
      current_datetime: string;
      /**
       * Yyyymmdd Datetime
       * @description Current date and time as 'YYYY,MM,DD,hh,mm,ss' (e.g., '2024,07,15,10,30,00').
       */
      yyyymmdd_datetime: string;
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
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_LIST_ACL_RULES tool input.
 */
type GOOGLECALENDAR_LIST_ACL_RULES_INPUT = {
  /**
   * Calendar Id
   * @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   */
  calendar_id?: string;
  /**
   * Max Results
   * @description Maximum number of entries returned on one result page. Optional. The default is 100.
   * @default null
   */
  max_results: number | null;
  /**
   * Page Token
   * @description Token specifying which result page to return. Optional.
   * @default null
   */
  page_token: string | null;
  /**
   * Show Deleted
   * @description Whether to include deleted ACLs in the result. Optional. The default is False.
   * @default null
   */
  show_deleted: boolean | null;
  /**
   * Sync Token
   * @description Token obtained from the nextSyncToken field returned on the last page of a previous list operation. It makes the result of this list operation contain only entries that have changed since then. Optional. The default is to retrieve all entries.
   * @default null
   */
  sync_token: string | null;
};

/**
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_LIST_ACL_RULES tool output.
 */
type GOOGLECALENDAR_LIST_ACL_RULES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Etag
       * @description ETag of the collection.
       */
      etag: string;
      /**
       * Items
       * @description List of rules on the access control list.
       */
      items: {
          /**
           * Etag
           * @description ETag of the resource.
           */
          etag: string;
          /**
           * Id
           * @description Identifier of the ACL rule.
           */
          id: string;
          /**
           * Kind
           * @description Type of the resource ("calendar#aclRule").
           */
          kind: string;
          /**
           * Role
           * @description The role assigned to the scope. Possible values are: "none", "freeBusyReader", "reader", "writer", "owner".
           */
          role: string;
          /**
           * Scope
           * @description The scope of the rule.
           */
          scope: {
              /**
               * Type
               * @description The type of the scope. Possible values are: "default", "user", "group", "domain".
               */
              type: string;
              /**
               * Value
               * @description The email address or domain name in the scope. Optional.
               * @default null
               */
              value: string | null;
          };
      }[];
      /**
       * Kind
       * @description Type of the collection ("calendar#acl").
       */
      kind: string;
      /**
       * Next Page Token
       * @description Token used to access the next page of this result. Omitted if the backend doesn't support query token.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Next Sync Token
       * @description Token used to access the next page of this result. Omitted if the backend doesn't support query token.
       * @default null
       */
      nextSyncToken: string | null;
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
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_LIST_CALENDARS tool input.
 */
type GOOGLECALENDAR_LIST_CALENDARS_INPUT = {
  /**
   * Max Results
   * @description Maximum number of calendars to return per page. Max 250.
   * @default 10
   */
  max_results: number;
  /**
   * Min Access Role
   * @description Minimum access role for calendars returned. Valid values: 'freeBusyReader', 'owner', 'reader', 'writer'.
   * @default null
   */
  min_access_role: string | null;
  /**
   * Page Token
   * @description Token for the page of results to return, from a previous response.
   * @default null
   */
  page_token: string | null;
  /**
   * Show Deleted
   * @description Include deleted calendars in the result.
   * @default false
   */
  show_deleted: boolean;
  /**
   * Show Hidden
   * @description Include calendars not typically shown in the UI.
   * @default false
   */
  show_hidden: boolean;
  /**
   * Sync Token
   * @description Sync token from a previous list request to get only changed entries; showDeleted, showHidden, and pageToken are ignored if provided.
   * @default null
   */
  sync_token: string | null;
};

/**
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_LIST_CALENDARS tool output.
 */
type GOOGLECALENDAR_LIST_CALENDARS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Calendars
       * @description List of calendar entries, each a dictionary with calendar details.
       */
      calendars: {
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
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_PATCH_CALENDAR tool input.
 */
type GOOGLECALENDAR_PATCH_CALENDAR_INPUT = {
  /**
   * Calendar Id
   * @description Identifier of the Google Calendar to update; use 'primary' for the main calendar or a specific ID.
   */
  calendar_id?: string;
  /**
   * Description
   * @description New description for the calendar.
   * @default null
   */
  description: string | null;
  /**
   * Location
   * @description New geographic location of the calendar (e.g., 'Paris, France').
   * @default null
   */
  location: string | null;
  /**
   * Summary
   * @description New title for the calendar; cannot be an empty string.
   */
  summary?: string;
  /**
   * Timezone
   * @description New IANA Time Zone Database name for the calendar (e.g., 'Europe/Zurich', 'America/New_York').
   * @default null
   */
  timezone: string | null;
};

/**
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_PATCH_CALENDAR tool output.
 */
type GOOGLECALENDAR_PATCH_CALENDAR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary representing the full calendar resource that was updated, conforming to the Google Calendar API's calendar resource structure.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_PATCH_EVENT tool input.
 */
type GOOGLECALENDAR_PATCH_EVENT_INPUT = {
  /**
   * Attendees
   * @description List of email addresses for attendees. Replaces existing attendees. Provide an empty list to remove all.
   * @default null
   */
  attendees: string[] | null;
  /**
   * Calendar Id
   * @description Identifier of the calendar. Use 'primary' for the primary calendar of the logged-in user. To find other calendar IDs, use the `calendarList.list` method.
   */
  calendar_id?: string;
  /**
   * Conference Data Version
   * @description API client's conference data support version. Set to 1 to manage conference details (e.g., Google Meet links); 0 (default) ignores conference data.
   * @default null
   */
  conference_data_version: number | null;
  /**
   * Description
   * @description New description for the event; can include HTML.
   * @default null
   */
  description: string | null;
  /**
   * End Time
   * @description New end time (RFC3339 timestamp, e.g., '2024-07-01T11:00:00-07:00'). Uses `timezone` if provided, otherwise UTC. For all-day events, use YYYY-MM-DD format (exclusive end date).
   * @default null
   */
  end_time: string | null;
  /**
   * Event Id
   * @description Identifier of the event to update.
   */
  event_id?: string;
  /**
   * Location
   * @description New geographic location (physical address or virtual meeting link).
   * @default null
   */
  location: string | null;
  /**
   * Max Attendees
   * @description Maximum attendees in response; does not affect invited count. If more, response includes organizer only. Must be positive.
   * @default null
   */
  max_attendees: number | null;
  /**
   * Rsvp Response
   * @description RSVP response status for the authenticated user. Updates only the current user's response status without affecting other attendees. Possible values: 'needsAction', 'declined', 'tentative', 'accepted'.
   * @default null
   */
  rsvp_response: string | null;
  /**
   * Send Updates
   * @description Whether to send update notifications to attendees: 'all', 'externalOnly', or 'none'. Uses default user behavior if unspecified.
   * @default null
   */
  send_updates: string | null;
  /**
   * Start Time
   * @description New start time (RFC3339 timestamp, e.g., '2024-07-01T10:00:00-07:00'). Uses `timezone` if provided, otherwise UTC. For all-day events, use YYYY-MM-DD format.
   * @default null
   */
  start_time: string | null;
  /**
   * Summary
   * @description New title for the event.
   * @default null
   */
  summary: string | null;
  /**
   * Supports Attachments
   * @description Client application supports event attachments. Set to `True` if so.
   * @default null
   */
  supports_attachments: boolean | null;
  /**
   * Timezone
   * @description IANA Time Zone Database name for start/end times (e.g., 'America/Los_Angeles'). Used if `start_time` and `end_time` are provided and not all-day dates; defaults to UTC if unset.
   * @default null
   */
  timezone: string | null;
};

/**
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_PATCH_EVENT tool output.
 */
type GOOGLECALENDAR_PATCH_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attendees
       * @description List of attendees, with details like 'email', 'displayName', 'responseStatus'.
       * @default null
       */
      attendees: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Created
       * @description Event creation time (RFC3339 timestamp, e.g., '2024-07-01T09:00:00.000Z').
       */
      created: string;
      /**
       * Creator
       * @description User who created the event, including 'email' and 'displayName'.
       */
      creator: {
          [key: string]: unknown;
      };
      /**
       * Description
       * @description Description of the event; may contain HTML.
       * @default null
       */
      description: string | null;
      /**
       * End
       * @description Event end time: 'dateTime' (RFC3339 timestamp) or 'date' (YYYY-MM-DD for all-day, exclusive), and 'timeZone'.
       */
      end: {
          [key: string]: unknown;
      };
      /**
       * Html Link
       * @description URL to access the event in Google Calendar web interface.
       */
      htmlLink: string;
      /**
       * Id
       * @description Unique identifier of the event.
       */
      id: string;
      /**
       * Location
       * @description Geographic location of the event.
       * @default null
       */
      location: string | null;
      /**
       * Organizer
       * @description Event organizer, including 'email', 'displayName', and 'self' (boolean: is authenticated user the organizer).
       */
      organizer: {
          [key: string]: unknown;
      };
      /**
       * Start
       * @description Event start time: 'dateTime' (RFC3339 timestamp) or 'date' (YYYY-MM-DD for all-day), and 'timeZone'.
       */
      start: {
          [key: string]: unknown;
      };
      /**
       * Status
       * @description Event status: 'confirmed', 'tentative', or 'cancelled'.
       */
      status: string;
      /**
       * Summary
       * @description Title of the event.
       * @default null
       */
      summary: string | null;
      /**
       * Updated
       * @description Event last modification time (RFC3339 timestamp, e.g., '2024-07-01T09:30:00.000Z').
       */
      updated: string;
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
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_QUICK_ADD tool input.
 */
type GOOGLECALENDAR_QUICK_ADD_INPUT = {
  /**
   * Calendar Id
   * @description Identifier of the calendar for the event. Use 'primary' for the main calendar, or provide a specific calendar ID (e.g., email address).
   * @default primary
   */
  calendar_id: string;
  /**
   * Send Updates
   * @description Controls whether email notifications about the event creation are sent to attendees.
   * @default none
   * @enum {string}
   */
  send_updates: "all" | "externalOnly" | "none";
  /**
   * Text
   * @description Natural language input describing the event; Google Calendar parses this for event details like title, date, and time.
   * @default
   */
  text: string;
};

/**
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_QUICK_ADD tool output.
 */
type GOOGLECALENDAR_QUICK_ADD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Event
       * @description The Google Calendar event resource created by the API, including details such as 'id', 'summary' (title), 'start' and 'end' times/dates.
       */
      event: {
          [key: string]: unknown;
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
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_REMOVE_ATTENDEE tool input.
 */
type GOOGLECALENDAR_REMOVE_ATTENDEE_INPUT = {
  /**
   * Attendee Email
   * @description Email address of the attendee to remove; if the email does not match an existing attendee, the event remains unchanged.
   */
  attendee_email?: string;
  /**
   * Calendar Id
   * @description Identifier of the Google Calendar to which the event belongs; 'primary' signifies the user's main calendar.
   * @default primary
   */
  calendar_id: string;
  /**
   * Event Id
   * @description Unique identifier of the event.
   */
  event_id?: string;
};

/**
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_REMOVE_ATTENDEE tool output.
 */
type GOOGLECALENDAR_REMOVE_ATTENDEE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Event
       * @description The event resource, updated after the attendee removal operation.
       */
      event: {
          [key: string]: unknown;
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
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_SETTINGS_LIST tool input.
 */
type GOOGLECALENDAR_SETTINGS_LIST_INPUT = {
  /**
   * Max Results
   * @description Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries.
   * @default null
   */
  maxResults: number | null;
  /**
   * Page Token
   * @description Token specifying which result page to return.
   * @default null
   */
  pageToken: string | null;
  /**
   * Sync Token
   * @description Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
   * @default null
   */
  syncToken: string | null;
};

/**
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_SETTINGS_LIST tool output.
 */
type GOOGLECALENDAR_SETTINGS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Etag
       * @description Etag of the collection.
       */
      etag: string;
      /**
       * Items
       * @description List of user settings.
       */
      items: {
          /**
           * Etag
           * @description Etag of the resource.
           */
          etag: string;
          /**
           * Id
           * @description The id of the user setting.
           */
          id: string;
          /**
           * Kind
           * @description Type of the resource ("calendar#setting").
           * @default calendar#setting
           */
          kind: string;
          /**
           * Value
           * @description The value of the user setting. The format of the value depends on the ID of the setting. It must always be a UTF-8 string of length up to 1024 characters.
           */
          value: string;
      }[];
      /**
       * Kind
       * @description Type of the collection ("calendar#settings").
       * @default calendar#settings
       */
      kind: string;
      /**
       * Next Page Token
       * @description Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Next Sync Token
       * @description Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided.
       * @default null
       */
      nextSyncToken: string | null;
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
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_SETTINGS_WATCH tool input.
 */
type GOOGLECALENDAR_SETTINGS_WATCH_INPUT = {
  /**
   * Address
   * @description The address where notifications are delivered for this channel.
   */
  address?: string;
  /**
   * Id
   * @description A UUID or similar unique string that identifies this channel.
   */
  id?: string;
  /**
   * SettingsWatchRequestParams
   * @description Additional parameters controlling delivery channel behavior.
   * @default null
   */
  params: {
      /**
       * Ttl
       * @description The time-to-live in seconds for the notification channel. Default is 604800 seconds.
       * @default null
       */
      ttl: string | null;
  } | null;
  /**
   * Token
   * @description An arbitrary string delivered to the target address with each notification delivered over this channel.
   * @default null
   */
  token: string | null;
  /**
   * Type
   * @description The type of delivery mechanism used for this channel. Valid values are "web_hook" (or "webhook").
   */
  type?: string;
};

/**
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_SETTINGS_WATCH tool output.
 */
type GOOGLECALENDAR_SETTINGS_WATCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expiration
       * @description Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds.
       * @default null
       */
      expiration: number | null;
      /**
       * Id
       * @description A UUID or similar unique string that identifies this channel.
       */
      id: string;
      /**
       * Kind
       * @description Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".
       */
      kind: string;
      /**
       * Resource Id
       * @description An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
       */
      resourceId: string;
      /**
       * Resource Uri
       * @description A version-specific identifier for the watched resource.
       */
      resourceUri: string;
      /**
       * Token
       * @description An arbitrary string delivered to the target address with each notification delivered over this channel.
       * @default null
       */
      token: string | null;
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
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_SYNC_EVENTS tool input.
 */
type GOOGLECALENDAR_SYNC_EVENTS_INPUT = {
  /**
   * Calendar Id
   * @description Google Calendar identifier; 'primary' refers to the authenticated user's main calendar.
   * @default primary
   */
  calendar_id: string;
  /**
   * Event Types
   * @description Filters events by specified types (e.g., 'default', 'focusTime', 'outOfOffice', 'workingLocation'). All types returned if omitted.
   * @default null
   */
  event_types: string[] | null;
  /**
   * Max Results
   * @description Max events per page (max 2500); Google Calendar's default is used if unspecified.
   * @default null
   */
  max_results: number | null;
  /**
   * Page Token
   * @description Token for paginating results, from a previous response's `nextPageToken`.
   * @default null
   */
  pageToken: string | null;
  /**
   * Single Events
   * @description If True, expands recurring events into individual instances (excluding master event); otherwise, Google's default handling applies.
   * @default null
   */
  single_events: boolean | null;
  /**
   * Sync Token
   * @description Token for incremental sync, retrieving only changes since issued. A 410 GONE response indicates an expired token, requiring a full sync.
   * @default null
   */
  sync_token: string | null;
};

/**
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_SYNC_EVENTS tool output.
 */
type GOOGLECALENDAR_SYNC_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Event Data
       * @description Dictionary with synchronized data: 'event_data' (list of changed event resources), 'nextPageToken' (for pagination), and 'nextSyncToken' (for next incremental sync).
       */
      event_data: {
          [key: string]: unknown;
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
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_UPDATE_ACL_RULE tool input.
 */
type GOOGLECALENDAR_UPDATE_ACL_RULE_INPUT = {
  /**
   * Calendar Id
   * @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   */
  calendar_id?: string;
  /**
   * Role
   * @description The role assigned to the scope. Possible values are:
   *     - "none" - Provides no access.
   *     - "freeBusyReader" - Provides read access to free/busy information.
   *     - "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
   *     - "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
   *     - "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.
   */
  role?: string;
  /**
   * Rule Id
   * @description ACL rule identifier.
   */
  rule_id?: string;
  /**
   * Send Notifications
   * @description Whether to send notifications about the calendar sharing change. Note that there are no notifications on access removal. Optional. The default is True.
   * @default true
   */
  send_notifications: boolean | null;
};

/**
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_UPDATE_ACL_RULE tool output.
 */
type GOOGLECALENDAR_UPDATE_ACL_RULE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Etag
       * @description ETag of the resource.
       * @default null
       */
      etag: string | null;
      /**
       * Id
       * @description Identifier of the ACL rule.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Type of the resource ("calendar#aclRule").
       * @default null
       */
      kind: string | null;
      /**
       * Role
       * @description The role assigned to the scope. Possible values are:
       *     - "none" - Provides no access.
       *     - "freeBusyReader" - Provides read access to free/busy information.
       *     - "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
       *     - "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
       *     - "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.
       * @default null
       */
      role: string | null;
      /**
       * Type
       * @description The type of the scope. Possible values are:
       *     - "default" - The public scope. This is the default value.
       *     - "user" - Limits the scope to a single user.
       *     - "group" - Limits the scope to a group.
       *     - "domain" - Limits the scope to a domain.  Note: This requires ownership of the domain.
       * @default null
       */
      type: string | null;
      /**
       * Value
       * @description The email address or domain name in the scope. If left blank, the scope is of type "default", meaning it is public. Optional.
       * @default null
       */
      value: string | null;
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
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_UPDATE_EVENT tool input.
 */
type GOOGLECALENDAR_UPDATE_EVENT_INPUT = {
  /**
   * Attendees
   * @description List of attendee emails (strings).
   * @default null
   */
  attendees: string[] | null;
  /**
   * Calendar Id
   * @description Identifier of the Google Calendar where the event resides. The value 'primary' targets the user's primary calendar.
   * @default primary
   */
  calendar_id: string;
  /**
   * Create Meeting Room
   * @description If true, a Google Meet link is created and added to the event. CRITICAL: As of 2024, this REQUIRES a paid Google Workspace account ($13+/month). Personal Gmail accounts will fail with 'Invalid conference type value' error. Solutions: 1) Upgrade to Workspace, 2) Use domain-wide delegation with Workspace user, 3) Use the new Google Meet REST API, or 4) Create events without conferences. See https://github.com/googleapis/google-api-nodejs-client/issues/3234
   * @default null
   */
  create_meeting_room: boolean | null;
  /**
   * Description
   * @description Description of the event. Can contain HTML. Optional.
   * @default null
   */
  description: string | null;
  /**
   * Event Type
   * @description Type of the event, immutable post-creation. Supported types: 'birthday' (all-day with annual recurrence), 'default' (regular event), 'focusTime' (focus-time event), 'outOfOffice' (out-of-office event), 'workingLocation' (working location event). Note: 'fromGmail' events cannot be created via API.
   * @default default
   * @enum {string}
   */
  eventType: "birthday" | "default" | "focusTime" | "outOfOffice" | "workingLocation";
  /**
   * Event Duration Hour
   * @description Number of hours (0-24). Increase by 1 here rather than passing 60 in `event_duration_minutes`
   * @default 0
   */
  event_duration_hour: number;
  /**
   * Event Duration Minutes
   * @description Duration in minutes (0-59 ONLY). NEVER use 60+ minutes - use event_duration_hour=1 instead. Maximum value is 59.
   * @default 30
   */
  event_duration_minutes: number;
  /**
   * Event Id
   * @description The unique identifier of the event to be updated.
   */
  event_id?: string;
  /**
   * Guests Can Invite Others
   * @description Whether attendees other than the organizer can invite others to the event.
   * @default null
   */
  guestsCanInviteOthers: boolean | null;
  /**
   * Guests Can See Other Guests
   * @description Whether attendees other than the organizer can see who the event's attendees are.
   * @default null
   */
  guestsCanSeeOtherGuests: boolean | null;
  /**
   * Guests Can Modify
   * @description If True, guests can modify the event.
   * @default false
   */
  guests_can_modify: boolean;
  /**
   * Location
   * @description Geographic location of the event as free-form text.
   * @default null
   */
  location: string | null;
  /**
   * Recurrence
   * @description List of RRULE, EXRULE, RDATE, EXDATE lines for recurring events. Supported frequencies are DAILY, WEEKLY, MONTHLY, YEARLY.
   * @default null
   */
  recurrence: string[] | null;
  /**
   * Send Updates
   * @description Defaults to True. Whether to send updates to the attendees.
   * @default null
   */
  send_updates: boolean | null;
  /**
   * Start Datetime
   * @description Naive date/time (YYYY-MM-DDTHH:MM:SS) with NO offsets or Z. e.g. '2025-01-16T13:00:00'
   */
  start_datetime?: string;
  /**
   * Summary
   * @description Summary (title) of the event.
   * @default null
   */
  summary: string | null;
  /**
   * Timezone
   * @description IANA timezone name (e.g., 'America/New_York'). Required if datetime is naive. If datetime includes timezone info (Z or offset), this field is optional and defaults to UTC.
   * @default null
   */
  timezone: string | null;
  /**
   * Transparency
   * @description 'opaque' (busy) or 'transparent' (available).
   * @default opaque
   * @enum {string}
   */
  transparency: "opaque" | "transparent";
  /**
   * Visibility
   * @description Event visibility: 'default', 'public', 'private', or 'confidential'.
   * @default default
   * @enum {string}
   */
  visibility: "default" | "public" | "private" | "confidential";
};

/**
 * Type of GOOGLECALENDAR's GOOGLECALENDAR_UPDATE_EVENT tool output.
 */
type GOOGLECALENDAR_UPDATE_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Complete representation of the updated event resource from the Google Calendar API.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type map of all available tool input types for toolkit "GOOGLECALENDAR".
 */
export type GOOGLECALENDAR_TOOL_INPUTS = {
  CALENDARS_DELETE: GOOGLECALENDAR_CALENDARS_DELETE_INPUT
  CALENDARS_UPDATE: GOOGLECALENDAR_CALENDARS_UPDATE_INPUT
  CALENDAR_LIST_INSERT: GOOGLECALENDAR_CALENDAR_LIST_INSERT_INPUT
  CALENDAR_LIST_UPDATE: GOOGLECALENDAR_CALENDAR_LIST_UPDATE_INPUT
  CLEAR_CALENDAR: GOOGLECALENDAR_CLEAR_CALENDAR_INPUT
  CREATE_EVENT: GOOGLECALENDAR_CREATE_EVENT_INPUT
  DELETE_EVENT: GOOGLECALENDAR_DELETE_EVENT_INPUT
  DUPLICATE_CALENDAR: GOOGLECALENDAR_DUPLICATE_CALENDAR_INPUT
  EVENTS_INSTANCES: GOOGLECALENDAR_EVENTS_INSTANCES_INPUT
  EVENTS_LIST: GOOGLECALENDAR_EVENTS_LIST_INPUT
  EVENTS_MOVE: GOOGLECALENDAR_EVENTS_MOVE_INPUT
  EVENTS_WATCH: GOOGLECALENDAR_EVENTS_WATCH_INPUT
  FIND_EVENT: GOOGLECALENDAR_FIND_EVENT_INPUT
  FIND_FREE_SLOTS: GOOGLECALENDAR_FIND_FREE_SLOTS_INPUT
  FREE_BUSY_QUERY: GOOGLECALENDAR_FREE_BUSY_QUERY_INPUT
  GET_CALENDAR: GOOGLECALENDAR_GET_CALENDAR_INPUT
  GET_CURRENT_DATE_TIME: GOOGLECALENDAR_GET_CURRENT_DATE_TIME_INPUT
  LIST_ACL_RULES: GOOGLECALENDAR_LIST_ACL_RULES_INPUT
  LIST_CALENDARS: GOOGLECALENDAR_LIST_CALENDARS_INPUT
  PATCH_CALENDAR: GOOGLECALENDAR_PATCH_CALENDAR_INPUT
  PATCH_EVENT: GOOGLECALENDAR_PATCH_EVENT_INPUT
  QUICK_ADD: GOOGLECALENDAR_QUICK_ADD_INPUT
  REMOVE_ATTENDEE: GOOGLECALENDAR_REMOVE_ATTENDEE_INPUT
  SETTINGS_LIST: GOOGLECALENDAR_SETTINGS_LIST_INPUT
  SETTINGS_WATCH: GOOGLECALENDAR_SETTINGS_WATCH_INPUT
  SYNC_EVENTS: GOOGLECALENDAR_SYNC_EVENTS_INPUT
  UPDATE_ACL_RULE: GOOGLECALENDAR_UPDATE_ACL_RULE_INPUT
  UPDATE_EVENT: GOOGLECALENDAR_UPDATE_EVENT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GOOGLECALENDAR".
 */
export type GOOGLECALENDAR_TOOL_OUTPUTS = {
  CALENDARS_DELETE: GOOGLECALENDAR_CALENDARS_DELETE_OUTPUT
  CALENDARS_UPDATE: GOOGLECALENDAR_CALENDARS_UPDATE_OUTPUT
  CALENDAR_LIST_INSERT: GOOGLECALENDAR_CALENDAR_LIST_INSERT_OUTPUT
  CALENDAR_LIST_UPDATE: GOOGLECALENDAR_CALENDAR_LIST_UPDATE_OUTPUT
  CLEAR_CALENDAR: GOOGLECALENDAR_CLEAR_CALENDAR_OUTPUT
  CREATE_EVENT: GOOGLECALENDAR_CREATE_EVENT_OUTPUT
  DELETE_EVENT: GOOGLECALENDAR_DELETE_EVENT_OUTPUT
  DUPLICATE_CALENDAR: GOOGLECALENDAR_DUPLICATE_CALENDAR_OUTPUT
  EVENTS_INSTANCES: GOOGLECALENDAR_EVENTS_INSTANCES_OUTPUT
  EVENTS_LIST: GOOGLECALENDAR_EVENTS_LIST_OUTPUT
  EVENTS_MOVE: GOOGLECALENDAR_EVENTS_MOVE_OUTPUT
  EVENTS_WATCH: GOOGLECALENDAR_EVENTS_WATCH_OUTPUT
  FIND_EVENT: GOOGLECALENDAR_FIND_EVENT_OUTPUT
  FIND_FREE_SLOTS: GOOGLECALENDAR_FIND_FREE_SLOTS_OUTPUT
  FREE_BUSY_QUERY: GOOGLECALENDAR_FREE_BUSY_QUERY_OUTPUT
  GET_CALENDAR: GOOGLECALENDAR_GET_CALENDAR_OUTPUT
  GET_CURRENT_DATE_TIME: GOOGLECALENDAR_GET_CURRENT_DATE_TIME_OUTPUT
  LIST_ACL_RULES: GOOGLECALENDAR_LIST_ACL_RULES_OUTPUT
  LIST_CALENDARS: GOOGLECALENDAR_LIST_CALENDARS_OUTPUT
  PATCH_CALENDAR: GOOGLECALENDAR_PATCH_CALENDAR_OUTPUT
  PATCH_EVENT: GOOGLECALENDAR_PATCH_EVENT_OUTPUT
  QUICK_ADD: GOOGLECALENDAR_QUICK_ADD_OUTPUT
  REMOVE_ATTENDEE: GOOGLECALENDAR_REMOVE_ATTENDEE_OUTPUT
  SETTINGS_LIST: GOOGLECALENDAR_SETTINGS_LIST_OUTPUT
  SETTINGS_WATCH: GOOGLECALENDAR_SETTINGS_WATCH_OUTPUT
  SYNC_EVENTS: GOOGLECALENDAR_SYNC_EVENTS_OUTPUT
  UPDATE_ACL_RULE: GOOGLECALENDAR_UPDATE_ACL_RULE_OUTPUT
  UPDATE_EVENT: GOOGLECALENDAR_UPDATE_EVENT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Type of GOOGLECALENDAR's GOOGLE_CALENDAR_EVENT_CHANGE_TRIGGER trigger payload.
 */
type GOOGLECALENDAR_GOOGLE_CALENDAR_EVENT_CHANGE_TRIGGER_PAYLOAD = {
  /**
   * Channel Id
   * @description The unique identifier passed to identify this channel
   */
  channel_id?: string;
  /**
   * Resource Id
   * @description The unique identifier of the resource
   */
  resource_id?: string;
  /**
   * Resource State
   * @description The state of the resource
   */
  resource_state?: string;
  /**
   * Resource Url
   * @description The url for the resource
   */
  resource_url?: string;
};

/**
 * Type of GOOGLECALENDAR's GOOGLE_CALENDAR_EVENT_SYNC_TRIGGER trigger payload.
 */
type GOOGLECALENDAR_GOOGLE_CALENDAR_EVENT_SYNC_TRIGGER_PAYLOAD = {
  /**
   * Attendees
   * @description List of attendees
   */
  attendees?: {
      [key: string]: unknown;
  }[];
  /**
   * Calendar Id
   * @description The calendar identifier
   */
  calendar_id?: string;
  /**
   * Conference Data
   * @description Conference data structure containing details about the meeting
   * @default null
   */
  conference_data: {
      [key: string]: unknown;
  } | null;
  /**
   * Created At
   * @description When the event was created
   * @default null
   */
  created_at: string | null;
  /**
   * Creator Email
   * @description Email of the event creator
   * @default null
   */
  creator_email: string | null;
  /**
   * Creator Name
   * @description Name of the event creator
   * @default null
   */
  creator_name: string | null;
  /**
   * Description
   * @description Event description
   * @default null
   */
  description: string | null;
  /**
   * End Time
   * @description Event end time in ISO format
   * @default null
   */
  end_time: string | null;
  /**
   * Event Id
   * @description The unique identifier of the event
   */
  event_id?: string;
  /**
   * Event Type
   * @description Type of change: created, updated, or deleted
   */
  event_type?: string;
  /**
   * Hangout Link
   * @description Google Meet link for the conference, if available
   * @default null
   */
  hangout_link: string | null;
  /**
   * Html Link
   * @description Link to the event in Google Calendar
   * @default null
   */
  html_link: string | null;
  /**
   * Location
   * @description Event location
   * @default null
   */
  location: string | null;
  /**
   * Organizer Email
   * @description Email of the event organizer
   * @default null
   */
  organizer_email: string | null;
  /**
   * Organizer Name
   * @description Name of the event organizer
   * @default null
   */
  organizer_name: string | null;
  /**
   * Recurring Event Id
   * @description ID of recurring event if applicable
   * @default null
   */
  recurring_event_id: string | null;
  /**
   * Start Time
   * @description Event start time in ISO format
   * @default null
   */
  start_time: string | null;
  /**
   * Status
   * @description Event status (confirmed, tentative, cancelled)
   * @default null
   */
  status: string | null;
  /**
   * Summary
   * @description Event title/summary
   * @default null
   */
  summary: string | null;
  /**
   * Updated At
   * @description When the event was last updated
   * @default null
   */
  updated_at: string | null;
  /**
   * Visibility
   * @description Event visibility
   * @default null
   */
  visibility: string | null;
};

/**
 * Map of Composio's GOOGLECALENDAR toolkit.
 */
export const GOOGLECALENDAR = {
  slug: "googlecalendar",
  tools: {
    /**
     * Deletes a secondary calendar. use calendars.clear for clearing all events on primary calendars.
     */
    CALENDARS_DELETE: "GOOGLECALENDAR_CALENDARS_DELETE",
    /**
     * Updates metadata for a calendar.
     */
    CALENDARS_UPDATE: "GOOGLECALENDAR_CALENDARS_UPDATE",
    /**
     * Inserts an existing calendar into the user's calendar list.
     */
    CALENDAR_LIST_INSERT: "GOOGLECALENDAR_CALENDAR_LIST_INSERT",
    /**
     * Updates an existing entry on the user\'s calendar list.
     */
    CALENDAR_LIST_UPDATE: "GOOGLECALENDAR_CALENDAR_LIST_UPDATE",
    /**
     * Clears a primary calendar. this operation deletes all events associated with the primary calendar of an account.
     */
    CLEAR_CALENDAR: "GOOGLECALENDAR_CLEAR_CALENDAR",
    /**
     * Creates an event on a google calendar, needing rfc3339 utc start/end times (end after start) and write access to the calendar. by default, adds the organizer as an attendee unless exclude organizer is set to true.
     */
    CREATE_EVENT: "GOOGLECALENDAR_CREATE_EVENT",
    /**
     * Deletes a specified event by `event id` from a google calendar (`calendar id`); this action is idempotent and raises a 404 error if the event is not found.
     */
    DELETE_EVENT: "GOOGLECALENDAR_DELETE_EVENT",
    /**
     * Creates a new, empty google calendar with the specified title (summary).
     */
    DUPLICATE_CALENDAR: "GOOGLECALENDAR_DUPLICATE_CALENDAR",
    /**
     * Returns instances of the specified recurring event.
     */
    EVENTS_INSTANCES: "GOOGLECALENDAR_EVENTS_INSTANCES",
    /**
     * Returns events on the specified calendar.
     */
    EVENTS_LIST: "GOOGLECALENDAR_EVENTS_LIST",
    /**
     * Moves an event to another calendar, i.e., changes an event's organizer.
     */
    EVENTS_MOVE: "GOOGLECALENDAR_EVENTS_MOVE",
    /**
     * Watch for changes to events resources.
     */
    EVENTS_WATCH: "GOOGLECALENDAR_EVENTS_WATCH",
    /**
     * Finds events in a specified google calendar using text query, time ranges (event start/end, last modification), and event types; ensure `timemin` is not chronologically after `timemax` if both are provided.
     */
    FIND_EVENT: "GOOGLECALENDAR_FIND_EVENT",
    /**
     * Finds free/busy time slots in google calendars for specified calendars within a defined time range (defaults to the current day utc if `time min`/`time max` are omitted), enhancing busy intervals with event details; `time min` must precede `time max` if both are provided.
     */
    FIND_FREE_SLOTS: "GOOGLECALENDAR_FIND_FREE_SLOTS",
    /**
     * Returns free/busy information for a set of calendars.
     */
    FREE_BUSY_QUERY: "GOOGLECALENDAR_FREE_BUSY_QUERY",
    /**
     * Retrieves a specific google calendar, identified by `calendar id`, to which the authenticated user has access.
     */
    GET_CALENDAR: "GOOGLECALENDAR_GET_CALENDAR",
    /**
     * Gets the current date and time, allowing for a specific timezone offset.
     */
    GET_CURRENT_DATE_TIME: "GOOGLECALENDAR_GET_CURRENT_DATE_TIME",
    /**
     * Retrieves the list of access control rules (acls) for a specified calendar, providing the necessary 'rule id' values required for updating specific acl rules.
     */
    LIST_ACL_RULES: "GOOGLECALENDAR_LIST_ACL_RULES",
    /**
     * Retrieves calendars from the user's google calendar list, with options for pagination and filtering.
     */
    LIST_CALENDARS: "GOOGLECALENDAR_LIST_CALENDARS",
    /**
     * Partially updates (patches) an existing google calendar, modifying only the fields provided; `summary` is mandatory and cannot be an empty string, and an empty string for `description` or `location` clears them.
     */
    PATCH_CALENDAR: "GOOGLECALENDAR_PATCH_CALENDAR",
    /**
     * Updates specified fields of an existing event in a google calendar using patch semantics (array fields like `attendees` are fully replaced if provided); ensure the `calendar id` and `event id` are valid and the user has write access to the calendar.
     */
    PATCH_EVENT: "GOOGLECALENDAR_PATCH_EVENT",
    /**
     * Parses natural language text to quickly create a basic google calendar event with its title, date, and time, suitable for simple scheduling; does not support direct attendee addition or recurring events, and `calendar id` must be valid if not 'primary'.
     */
    QUICK_ADD: "GOOGLECALENDAR_QUICK_ADD",
    /**
     * Removes an attendee from a specified event in a google calendar; the calendar and event must exist.
     */
    REMOVE_ATTENDEE: "GOOGLECALENDAR_REMOVE_ATTENDEE",
    /**
     * Returns all user settings for the authenticated user.
     */
    SETTINGS_LIST: "GOOGLECALENDAR_SETTINGS_LIST",
    /**
     * Watch for changes to settings resources.
     */
    SETTINGS_WATCH: "GOOGLECALENDAR_SETTINGS_WATCH",
    /**
     * Synchronizes google calendar events, performing a full sync if no `sync token` is provided or if a 410 gone error (due to an expired token) necessitates it, otherwise performs an incremental sync for events changed since the `sync token` was issued.
     */
    SYNC_EVENTS: "GOOGLECALENDAR_SYNC_EVENTS",
    /**
     * Updates an access control rule for the specified calendar.
     */
    UPDATE_ACL_RULE: "GOOGLECALENDAR_UPDATE_ACL_RULE",
    /**
     * Updates an existing event by `event id` in a google calendar; this is a full put replacement, so provide all desired fields as unspecified ones may be cleared or reset.
     */
    UPDATE_EVENT: "GOOGLECALENDAR_UPDATE_EVENT",
  },
  triggerTypes: {
    /**
     * **SOON TO BE DEPRECATED** - Use Calendar Event Sync (polling trigger) instead.
     *     Real-time webhook trigger for calendar event changes. Returns event metadata only.
     *     For full event data, use Calendar Event Sync (polling trigger).
     */
    GOOGLE_CALENDAR_EVENT_CHANGE_TRIGGER: "GOOGLECALENDAR_GOOGLE_CALENDAR_EVENT_CHANGE_TRIGGER",
    /**
     * Polling trigger that returns full event data including details, attendees, and metadata.
     *     For real-time notifications with basic info, use Calendar Event Changes (webhook).
     */
    GOOGLE_CALENDAR_EVENT_SYNC_TRIGGER: "GOOGLECALENDAR_GOOGLE_CALENDAR_EVENT_SYNC_TRIGGER",
  },
}

/**
 * Type map of all available trigger payloads for toolkit "GOOGLECALENDAR".
 */
export type GOOGLECALENDAR_TRIGGER_PAYLOADS = {
  GOOGLE_CALENDAR_EVENT_CHANGE_TRIGGER: GOOGLECALENDAR_GOOGLE_CALENDAR_EVENT_CHANGE_TRIGGER_PAYLOAD
  GOOGLE_CALENDAR_EVENT_SYNC_TRIGGER: GOOGLECALENDAR_GOOGLE_CALENDAR_EVENT_SYNC_TRIGGER_PAYLOAD
}

/**
 * Type map of all available trigger events for toolkit "GOOGLECALENDAR".
 */
export type GOOGLECALENDAR_TRIGGER_EVENTS = {
  GOOGLE_CALENDAR_EVENT_CHANGE_TRIGGER: TriggerEvent<GOOGLECALENDAR_GOOGLE_CALENDAR_EVENT_CHANGE_TRIGGER_PAYLOAD>
  GOOGLE_CALENDAR_EVENT_SYNC_TRIGGER: TriggerEvent<GOOGLECALENDAR_GOOGLE_CALENDAR_EVENT_SYNC_TRIGGER_PAYLOAD>
}
