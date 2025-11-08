// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CALENDLY's CALENDLY_CANCEL_EVENT tool input.
 */
type CALENDLY_CANCEL_EVENT_INPUT = {
  /**
   * Reason
   * @description Reason for canceling the event; may be included in the cancellation notification to the invitee.
   */
  reason?: string;
  /**
   * Uuid
   * @description Unique identifier (UUID) of the event to be canceled.
   */
  uuid?: string;
};

/**
 * Type of CALENDLY's CALENDLY_CANCEL_EVENT tool output.
 */
type CALENDLY_CANCEL_EVENT_OUTPUT = {
  /**
   * Data
   * @description Details of the cancellation confirmation; typically indicates success and may include specifics of the canceled event.
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
};

/**
 * Type of CALENDLY's CALENDLY_CREATE_INVITEE_NO_SHOW tool input.
 */
type CALENDLY_CREATE_INVITEE_NO_SHOW_INPUT = {
  /**
   * Invitee
   * Format: uri
   * @description URI of the Invitee to be marked as a no-show.
   */
  invitee?: string;
};

/**
 * Type of CALENDLY's CALENDLY_CREATE_INVITEE_NO_SHOW tool output.
 */
type CALENDLY_CREATE_INVITEE_NO_SHOW_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the invitee no-show object that was created. It includes details such as the no-show URI, the original invitee URI, and timestamps.
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
};

/**
 * Type of CALENDLY's CALENDLY_CREATE_ONE_OFF_EVENT_TYPE tool input.
 */
type CALENDLY_CREATE_ONE_OFF_EVENT_TYPE_INPUT = {
  /**
   * DateRangeSetting
   * @description Date range setting for events available within a specific date range.
   */
  date_setting?: {
      /**
       * End Date
       * Format: date
       * @description End date for event availability in YYYY-MM-DD format
       */
      end_date: string;
      /**
       * Start Date
       * Format: date
       * @description Start date for event availability in YYYY-MM-DD format
       */
      start_date: string;
      /**
       * Type
       * @description Must be 'date_range' for this setting type
       * @constant
       */
      type: "date_range";
  } | null;
  /**
   * Duration
   * @description Duration of the event in minutes
   */
  duration?: number;
  /**
   * Host
   * @description The URI of the user who will be the host of the one-off event
   */
  host?: string;
  /**
   * Location
   * @description Location configuration for the event.
   * @default null
   */
  location: {
      /**
       * Connected
       * @description Whether the location service is connected to the host's account. Required for conference-type locations like Zoom, Google Meet, etc.
       * @default null
       */
      connected: boolean | null;
      /**
       * Kind
       * @description Type of location for the event. Determines how the meeting will be conducted.
       * @enum {string}
       */
      kind: "ask_invitee" | "custom" | "google_conference" | "gotomeeting_conference" | "inbound_call" | "microsoft_teams_conference" | "outbound_call" | "physical" | "webex_conference" | "zoom_conference";
  } | null;
  /**
   * Name
   * @description Name of the one-off event type
   */
  name?: string;
  /**
   * Only Weekdays
   * @description Excludes weekends and only counts Monday - Friday (required for days_in_future date_setting type)
   * @default null
   */
  only_weekdays: boolean | null;
  /**
   * Timezone
   * @description IANA timezone identifier for the event scheduling. Determines how times are interpreted and displayed to invitees.
   * @default UTC
   */
  timezone: string;
};

/**
 * Type of CALENDLY's CALENDLY_CREATE_ONE_OFF_EVENT_TYPE tool output.
 */
type CALENDLY_CREATE_ONE_OFF_EVENT_TYPE_OUTPUT = {
  /**
   * Data
   * @description One-off event type resource containing the created event type details
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
};

/**
 * Type of CALENDLY's CALENDLY_CREATE_SCHEDULING_LINK tool input.
 */
type CALENDLY_CREATE_SCHEDULING_LINK_INPUT = {
  /**
   * Max Event Count
   * @description The max number of events that can be scheduled using this scheduling link
   */
  max_event_count?: number;
  /**
   * Owner
   * @description Event type URI (e.g., 'https://api.calendly.com/event_types/...')
   */
  owner?: string;
  /**
   * Owner Type
   * @description Type of owner, typically 'EventType'
   * @default EventType
   */
  owner_type: string;
};

/**
 * Type of CALENDLY's CALENDLY_CREATE_SCHEDULING_LINK tool output.
 */
type CALENDLY_CREATE_SCHEDULING_LINK_OUTPUT = {
  /**
   * Data
   * @description Scheduling link resource containing the generated booking link
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
};

/**
 * Type of CALENDLY's CALENDLY_CREATE_SHARE tool input.
 */
type CALENDLY_CREATE_SHARE_INPUT = {
  /**
   * Availability  Rule  Rules
   * @description List of custom availability rules that override the event type's default schedule. Provide an array of objects EACH containing: `type`=`'wday'`, `wday` (weekday), and `intervals` (list of `{from, to}` times). Field names are case-sensitive – use **`wday`, `from`, `to`** exactly. Must be combined with `availability_rule_timezone`.
   * @default null
   */
  availability__rule__rules: {
      /**
       * Intervals
       * @description List of time intervals when the host is available on this weekday. Empty list means unavailable all day.
       */
      intervals: {
          /**
           * From
           * @description **Key must be exactly 'from'** – start time in 24-hour HH:MM format.
           */
          from: string;
          /**
           * To
           * @description **Key must be exactly 'to'** – end time in 24-hour HH:MM format.
           */
          to: string;
      }[];
      /**
       * Type
       * @description Rule type – must be the literal string `'wday'`
       * @constant
       */
      type: "wday";
      /**
       * Wday
       * @description Day of the week (field name **'wday'**, not 'weekday').
       * @enum {string}
       */
      wday: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
  }[] | null;
  /**
   * Availability  Rule  Timezone
   * @description IANA timezone (e.g., 'America/New_York') for custom availability rules. Required with `availability_rule_rules`.
   */
  availability__rule__timezone?: string;
  /**
   * Duration
   * @description Custom event duration in minutes, overriding event type default.
   */
  duration?: number;
  /**
   * Duration Options
   * @description Alternative selectable durations in minutes, overriding event type options.
   */
  duration_options?: number[];
  /**
   * End Date
   * Format: date
   * @description End date (YYYY-MM-DD) for shared link availability; required if `period_type` is 'fixed'.
   */
  end_date?: string;
  /**
   * Event Type
   * Format: uri
   * @description URI of the event type to base this share on.
   */
  event_type?: string;
  /**
   * Hide Location
   * @description If true, hides event location until booking (only if event type has a single custom location).
   */
  hide_location?: boolean;
  /**
   * Location Configurations
   * @description Custom location settings that override the event type's default locations. Each configuration specifies a location type and associated details.
   * @default null
   */
  location_configurations: {
      /**
       * Additional Info
       * @description Additional information about the location, such as instructions or details
       * @default null
       */
      additional_info: string | null;
      /**
       * Kind
       * @description Type of location. Common values include 'physical', 'zoom_conference', 'google_conference', 'microsoft_teams_conference', 'custom', 'ask_invitee'.
       */
      kind: string;
      /**
       * Location
       * @description Specific location details like address, phone number, or meeting room
       * @default null
       */
      location: string | null;
  }[] | null;
  /**
   * Max Booking Time
   * @description Max days in advance an invitee can book; required if `period_type` is 'moving' or 'available_moving'.
   */
  max_booking_time?: number;
  /**
   * Name
   * @description Custom name for the shared link; defaults to event type name if unspecified.
   */
  name?: string;
  /**
   * Period Type
   * @description Availability period type: 'available_moving' (shows actual available slots for `max_booking_time` days), 'moving' (available for `max_booking_time` days), 'fixed' (within `start_date`/`end_date`), 'unlimited'.
   * @enum {string}
   */
  period_type?: "available_moving" | "moving" | "fixed" | "unlimited";
  /**
   * Start Date
   * Format: date
   * @description Start date (YYYY-MM-DD) for shared link availability; required if `period_type` is 'fixed'.
   */
  start_date?: string;
};

/**
 * Type of CALENDLY's CALENDLY_CREATE_SHARE tool output.
 */
type CALENDLY_CREATE_SHARE_OUTPUT = {
  /**
   * Data
   * @description Details of the created share, including its URI and configuration.
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
};

/**
 * Type of CALENDLY's CALENDLY_CREATE_SINGLE_USE_SCHEDULING_LINK tool input.
 */
type CALENDLY_CREATE_SINGLE_USE_SCHEDULING_LINK_INPUT = {
  /**
   * Max Event Count
   * @description The maximum number of events that can be scheduled using this link. For a single-use link, this value must be 1.
   */
  max_event_count?: number;
  /**
   * Owner
   * Format: uri
   * @description The URI of the Calendly Event Type that will own this single-use scheduling link. This Event Type's settings (e.g., duration, availability) will apply to the scheduled meeting.
   */
  owner?: string;
  /**
   * Owner Type
   * @description Identifies the owner resource type, which is 'EventType'.
   * @enum {string}
   */
  owner_type?: "EventType";
};

/**
 * Type of CALENDLY's CALENDLY_CREATE_SINGLE_USE_SCHEDULING_LINK tool output.
 */
type CALENDLY_CREATE_SINGLE_USE_SCHEDULING_LINK_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the resource representation of the newly created single-use scheduling link. This typically includes `booking_url` (the URL to be shared with the invitee), `owner`, `owner_type`, `status`, and the `uri` of the scheduling link itself.
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
};

/**
 * Type of CALENDLY's CALENDLY_CREATE_WEBHOOK_SUBSCRIPTION tool input.
 */
type CALENDLY_CREATE_WEBHOOK_SUBSCRIPTION_INPUT = {
  /**
   * Events
   * @description Event types to subscribe to.
   */
  events?: string[];
  /**
   * Group
   * Format: uri
   * @description URI of the group for the webhook; required if 'scope' is 'group'.
   */
  group?: string;
  /**
   * Organization
   * Format: uri
   * @description URI of the organization for the webhook.
   */
  organization?: string;
  /**
   * Scope
   * @description Scope of the webhook: 'organization', 'user', or 'group'.
   * @enum {string}
   */
  scope?: "organization" | "user" | "group";
  /**
   * Signing Key
   * @description Optional secret key (6-24 characters) for signing webhook events to verify their authenticity.
   */
  signing_key?: string;
  /**
   * Url
   * Format: uri
   * @description Publicly accessible and active callback URL to receive POST requests for subscribed events.
   */
  url?: string;
  /**
   * User
   * Format: uri
   * @description URI of the user for the webhook; required if 'scope' is 'user'.
   */
  user?: string;
};

/**
 * Type of CALENDLY's CALENDLY_CREATE_WEBHOOK_SUBSCRIPTION tool output.
 */
type CALENDLY_CREATE_WEBHOOK_SUBSCRIPTION_OUTPUT = {
  /**
   * Data
   * @description Details of the created webhook subscription resource, including its URI, callback URL, subscribed events, scope, state, and timestamps.
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
};

/**
 * Type of CALENDLY's CALENDLY_DELETE_INVITEE_DATA tool input.
 */
type CALENDLY_DELETE_INVITEE_DATA_INPUT = {
  /**
   * Emails
   * @description Invitee email addresses for whom all associated data will be permanently removed.
   */
  emails?: string[];
};

/**
 * Type of CALENDLY's CALENDLY_DELETE_INVITEE_DATA tool output.
 */
type CALENDLY_DELETE_INVITEE_DATA_OUTPUT = {
  /**
   * Data
   * @description API response, potentially including confirmation or status of the data deletion request.
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
};

/**
 * Type of CALENDLY's CALENDLY_DELETE_INVITEE_NO_SHOW tool input.
 */
type CALENDLY_DELETE_INVITEE_NO_SHOW_INPUT = {
  /**
   * Uuid
   * @description The unique identifier (UUID) of the Invitee No-Show record to be removed.
   */
  uuid?: string;
};

/**
 * Type of CALENDLY's CALENDLY_DELETE_INVITEE_NO_SHOW tool output.
 */
type CALENDLY_DELETE_INVITEE_NO_SHOW_OUTPUT = {
  /**
   * Data
   * @description Typically empty upon successful deletion, as the API returns a 204 No Content status.
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
};

/**
 * Type of CALENDLY's CALENDLY_DELETE_SCHEDULED_EVENT_DATA tool input.
 */
type CALENDLY_DELETE_SCHEDULED_EVENT_DATA_INPUT = {
  /**
   * End Time
   * Format: date-time
   * @description Defines the end of the data deletion period (UTC). Events ending at or before this time will be included. Must be within the past 24 months.
   */
  end_time?: string;
  /**
   * Start Time
   * Format: date-time
   * @description Defines the start of the data deletion period (UTC). Events starting at or after this time will be included. Must be within the past 24 months.
   */
  start_time?: string;
};

/**
 * Type of CALENDLY's CALENDLY_DELETE_SCHEDULED_EVENT_DATA tool output.
 */
type CALENDLY_DELETE_SCHEDULED_EVENT_DATA_OUTPUT = {
  /**
   * Data
   * @description API response, typically an empty dictionary or a confirmation message on successful initiation of the data deletion request.
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
};

/**
 * Type of CALENDLY's CALENDLY_DELETE_WEBHOOK_SUBSCRIPTION tool input.
 */
type CALENDLY_DELETE_WEBHOOK_SUBSCRIPTION_INPUT = {
  /**
   * Webhook Uuid
   * @description The unique identifier (UUID) of the webhook subscription to be deleted.
   */
  webhook_uuid?: string;
};

/**
 * Type of CALENDLY's CALENDLY_DELETE_WEBHOOK_SUBSCRIPTION tool output.
 */
type CALENDLY_DELETE_WEBHOOK_SUBSCRIPTION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the response data. For a successful deletion (HTTP 204 No Content), this field is typically empty. In case of errors, it may contain error details.
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
};

/**
 * Type of CALENDLY's CALENDLY_GET_CURRENT_USER tool input.
 */
type CALENDLY_GET_CURRENT_USER_INPUT = object;

/**
 * Type of CALENDLY's CALENDLY_GET_CURRENT_USER tool output.
 */
type CALENDLY_GET_CURRENT_USER_OUTPUT = {
  /**
   * Data
   * @description User resource containing user information like URI, name, email, scheduling URL, timezone, and organization
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
};

/**
 * Type of CALENDLY's CALENDLY_GET_EVENT tool input.
 */
type CALENDLY_GET_EVENT_INPUT = {
  /**
   * Uuid
   * @description Unique identifier (UUID) of the Calendly event.
   */
  uuid?: string;
};

/**
 * Type of CALENDLY's CALENDLY_GET_EVENT tool output.
 */
type CALENDLY_GET_EVENT_OUTPUT = {
  /**
   * Data
   * @description Full details of the specified Calendly event.
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
};

/**
 * Type of CALENDLY's CALENDLY_GET_EVENT_INVITEE tool input.
 */
type CALENDLY_GET_EVENT_INVITEE_INPUT = {
  /**
   * Event Uuid
   * @description The unique identifier (UUID) of the scheduled event.
   */
  event_uuid?: string;
  /**
   * Invitee Uuid
   * @description The unique identifier (UUID) of the invitee for the specified event.
   */
  invitee_uuid?: string;
};

/**
 * Type of CALENDLY's CALENDLY_GET_EVENT_INVITEE tool output.
 */
type CALENDLY_GET_EVENT_INVITEE_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the invitee resource object. The resource object includes full details of the invitee such as `uri`, `email`, `name`, `status` (e.g., 'active', 'canceled'), `questions_and_answers`, `timezone`, `event_uri`, `cancel_url`, `reschedule_url`, `created_at`, `updated_at`, `payment`, `no_show`, and `reconfirmation`.
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
};

/**
 * Type of CALENDLY's CALENDLY_GET_EVENT_TYPE tool input.
 */
type CALENDLY_GET_EVENT_TYPE_INPUT = {
  /**
   * Uuid
   * @description Unique identifier (UUID) for the event type.
   */
  uuid?: string;
};

/**
 * Type of CALENDLY's CALENDLY_GET_EVENT_TYPE tool output.
 */
type CALENDLY_GET_EVENT_TYPE_OUTPUT = {
  /**
   * Data
   * @description Event type resource, including all its attributes and configuration details.
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
};

/**
 * Type of CALENDLY's CALENDLY_GET_GROUP tool input.
 */
type CALENDLY_GET_GROUP_INPUT = {
  /**
   * Uuid
   * @description Unique identifier (UUID) of the Calendly group.
   */
  uuid?: string;
};

/**
 * Type of CALENDLY's CALENDLY_GET_GROUP tool output.
 */
type CALENDLY_GET_GROUP_OUTPUT = {
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
 * Type of CALENDLY's CALENDLY_GET_GROUP_RELATIONSHIP tool input.
 */
type CALENDLY_GET_GROUP_RELATIONSHIP_INPUT = {
  /**
   * Uuid
   * @description The unique identifier (UUID) of the group relationship to be retrieved.
   */
  uuid?: string;
};

/**
 * Type of CALENDLY's CALENDLY_GET_GROUP_RELATIONSHIP tool output.
 */
type CALENDLY_GET_GROUP_RELATIONSHIP_OUTPUT = {
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
 * Type of CALENDLY's CALENDLY_GET_INVITEE_NO_SHOW tool input.
 */
type CALENDLY_GET_INVITEE_NO_SHOW_INPUT = {
  /**
   * Uuid
   * @description The unique identifier (UUID) of the Invitee No Show record to retrieve.
   */
  uuid?: string;
};

/**
 * Type of CALENDLY's CALENDLY_GET_INVITEE_NO_SHOW tool output.
 */
type CALENDLY_GET_INVITEE_NO_SHOW_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the Invitee No Show object. This object includes details such as when the no-show was recorded and the associated invitee.
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
};

/**
 * Type of CALENDLY's CALENDLY_GET_ORGANIZATION_INVITATION tool input.
 */
type CALENDLY_GET_ORGANIZATION_INVITATION_INPUT = {
  /**
   * Org Uuid
   * @description The unique identifier (UUID) of the Calendly organization to which the invitation belongs.
   */
  org_uuid?: string;
  /**
   * Uuid
   * @description The unique identifier (UUID) of the specific organization invitation to retrieve.
   */
  uuid?: string;
};

/**
 * Type of CALENDLY's CALENDLY_GET_ORGANIZATION_INVITATION tool output.
 */
type CALENDLY_GET_ORGANIZATION_INVITATION_OUTPUT = {
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
 * Type of CALENDLY's CALENDLY_GET_ORGANIZATION_MEMBERSHIP tool input.
 */
type CALENDLY_GET_ORGANIZATION_MEMBERSHIP_INPUT = {
  /**
   * Uuid
   * @description The unique identifier (UUID) of the organization membership to retrieve.
   */
  uuid?: string;
};

/**
 * Type of CALENDLY's CALENDLY_GET_ORGANIZATION_MEMBERSHIP tool output.
 */
type CALENDLY_GET_ORGANIZATION_MEMBERSHIP_OUTPUT = {
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
 * Type of CALENDLY's CALENDLY_GET_ROUTING_FORM tool input.
 */
type CALENDLY_GET_ROUTING_FORM_INPUT = {
  /**
   * Uuid
   * @description The unique identifier (UUID) of the routing form to retrieve.
   */
  uuid?: string;
};

/**
 * Type of CALENDLY's CALENDLY_GET_ROUTING_FORM tool output.
 */
type CALENDLY_GET_ROUTING_FORM_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the routing form object, containing its attributes and configuration.
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
};

/**
 * Type of CALENDLY's CALENDLY_GET_USER tool input.
 */
type CALENDLY_GET_USER_INPUT = {
  /**
   * Uuid
   * @description The unique identifier (UUID) of the user. Alternatively, use the literal string "me" to refer to the currently authenticated user (the caller).
   */
  uuid?: string;
};

/**
 * Type of CALENDLY's CALENDLY_GET_USER tool output.
 */
type CALENDLY_GET_USER_OUTPUT = {
  /**
   * Data
   * @description A dictionary object containing the detailed information for the retrieved user. Key fields typically include: `uri` (the user's unique canonical URI), `name` (full name), `email`, `avatar_url` (URL of the user's avatar image), `scheduling_url` (the user's main scheduling page URL), `timezone` (e.g., 'America/New_York'), `created_at` (ISO 8601 timestamp of user creation), `updated_at` (ISO 8601 timestamp of last update), and `organization_uri` (URI of the organization the user belongs to). Note: The exact set of fields returned may vary.
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
};

/**
 * Type of CALENDLY's CALENDLY_GET_USER_AVAILABILITY_SCHEDULE tool input.
 */
type CALENDLY_GET_USER_AVAILABILITY_SCHEDULE_INPUT = {
  /**
   * Uuid
   * @description Unique identifier (UUID) of the availability schedule.
   */
  uuid?: string;
};

/**
 * Type of CALENDLY's CALENDLY_GET_USER_AVAILABILITY_SCHEDULE tool output.
 */
type CALENDLY_GET_USER_AVAILABILITY_SCHEDULE_OUTPUT = {
  /**
   * Data
   * @description The availability schedule resource, including user URI, schedule name, timezone, default status, and rules for available time slots.
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
};

/**
 * Type of CALENDLY's CALENDLY_GET_WEBHOOK_SUBSCRIPTION tool input.
 */
type CALENDLY_GET_WEBHOOK_SUBSCRIPTION_INPUT = {
  /**
   * Webhook Uuid
   * @description Unique identifier (UUID) of the webhook subscription to retrieve.
   */
  webhook_uuid?: string;
};

/**
 * Type of CALENDLY's CALENDLY_GET_WEBHOOK_SUBSCRIPTION tool output.
 */
type CALENDLY_GET_WEBHOOK_SUBSCRIPTION_OUTPUT = {
  /**
   * Data
   * @description Webhook subscription resource. Includes `uri`, `callback_url`, `created_at`, `updated_at`, `state` (active or disabled), `events` (list of subscribed event types), `scope` (organization or user), `organization` URI, `user` URI, and `creator` URI.
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
};

/**
 * Type of CALENDLY's CALENDLY_INVITE_USER_TO_ORGANIZATION tool input.
 */
type CALENDLY_INVITE_USER_TO_ORGANIZATION_INPUT = {
  /**
   * Email
   * Format: email
   * @description The email address of the user to be invited to the organization. An invitation link will be sent to this email.
   */
  email?: string;
  /**
   * Uuid
   * @description Unique identifier (UUID) of the organization to which the user will be invited.
   */
  uuid?: string;
};

/**
 * Type of CALENDLY's CALENDLY_INVITE_USER_TO_ORGANIZATION tool output.
 */
type CALENDLY_INVITE_USER_TO_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the successfully created organization invitation. This includes fields like the invitation's URI, organization URI, user's email, status (e.g., 'pending'), and relevant timestamps (created_at, updated_at).
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
};

/**
 * Type of CALENDLY's CALENDLY_LIST_ACTIVITY_LOG_ENTRIES tool input.
 */
type CALENDLY_LIST_ACTIVITY_LOG_ENTRIES_INPUT = {
  /**
   * Action
   * @description Filters entries by the specific action performed (e.g., 'user.created', 'event_type.updated'). Provide a list of action strings.
   */
  action?: string[];
  /**
   * Actor
   * @description Filters activity log entries by the users who performed the actions. Provide a list of user URIs.
   */
  actor?: string[];
  /**
   * Count
   * @description The maximum number of activity log entries to return per page.
   * @default 20
   */
  count: number;
  /**
   * Max Occurred At
   * @description Timestamp in ISO 8601 UTC format (e.g., '2020-01-02T03:04:05.678Z'). Filters entries to include only those that occurred at or before this time.
   */
  max_occurred_at?: string;
  /**
   * Min Occurred At
   * @description Timestamp in ISO 8601 UTC format (e.g., '2020-01-02T03:04:05.678Z'). Filters entries to include only those that occurred at or after this time.
   */
  min_occurred_at?: string;
  /**
   * Namespace
   * @description Filters entries by their category or domain (namespace). Provide a list of namespace strings. Common examples include 'user_management' or 'event_type_management'.
   */
  namespace?: string[];
  /**
   * Organization
   * @description URI of the Calendly organization for which to retrieve activity log entries.
   */
  organization?: string;
  /**
   * Page Token
   * @description Token for pagination, used to fetch the next page of results if the collection spans multiple pages.
   */
  page_token?: string;
  /**
   * Search Term
   * @description Filters entries based on the search term. Supported operators: `|` (OR, e.g., `user.created | group.created`), `+` (AND, e.g., `user.created + user.invited`), `" "` (exact phrase, e.g., `"John Doe"`), `-` (exclude term, e.g., `user.created -admin`), `()` (precedence, e.g., `(user.created | user.invited) + team1`), and `*` (prefix search, e.g., `user.email_address:*@example.com`).
   */
  search_term?: string;
  /**
   * Sort
   * @description Specifies the sort order for the results. Provide a list of sort criteria strings, each in the format 'field:direction' (e.g., 'occurred_at:asc'). Valid fields and directions are defined by SortEnm.
   * @default [
   *       "occurred_at:desc"
   *     ]
   */
  sort: string[];
};

/**
 * Type of CALENDLY's CALENDLY_LIST_ACTIVITY_LOG_ENTRIES tool output.
 */
type CALENDLY_LIST_ACTIVITY_LOG_ENTRIES_OUTPUT = {
  /**
   * Data
   * @description The API response, typically a dictionary containing a 'collection' of activity log entries and 'pagination' details.
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
};

/**
 * Type of CALENDLY's CALENDLY_LIST_EVENTS tool input.
 */
type CALENDLY_LIST_EVENTS_INPUT = {
  /**
   * Count
   * @description The number of events to return per page.
   * @default 20
   */
  count: number;
  /**
   * Group
   * @description URI of the **group** (team) whose events you want to list. Exactly ONE of `user`, `organization`, or `group` must be provided.
   */
  group?: string;
  /**
   * Invitee Email
   * @description Invitee's email address to filter events by.
   */
  invitee_email?: string;
  /**
   * Max Start Time
   * @description Include events with start times at or before this UTC timestamp (e.g., '2020-01-02T03:04:05.678123Z').
   */
  max_start_time?: string;
  /**
   * Min Start Time
   * @description Include events with start times at or after this UTC timestamp (e.g., '2020-01-02T03:04:05.678123Z').
   */
  min_start_time?: string;
  /**
   * Organization
   * @description URI of the **organization** whose events you want to list. Exactly ONE of `user`, `organization`, or `group` is required. Admin privileges may be required.
   */
  organization?: string;
  /**
   * Page Token
   * @description Token for pagination to retrieve the next or previous set of results from the collection.
   */
  page_token?: string;
  /**
   * Sort
   * @description Sort order for the results. Accepts comma-separated `field:direction` values. Supported field: `start_time`. Supported directions: `asc` (ascending), `desc` (descending).
   */
  sort?: string;
  /**
   * Status
   * @description Filter events by their status.
   * @enum {string}
   */
  status?: "active" | "canceled";
  /**
   * User
   * @description URI of the **user** whose events you want to list. Exactly ONE of `user`, `organization`, or `group` must be supplied to scope the query.
   */
  user?: string;
};

/**
 * Type of CALENDLY's CALENDLY_LIST_EVENTS tool output.
 */
type CALENDLY_LIST_EVENTS_OUTPUT = {
  /**
   * Data
   * @description The response payload containing a 'collection' of event objects and 'pagination' details. Each event object typically includes details like event URI, name, start/end times, and status.
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
};

/**
 * Type of CALENDLY's CALENDLY_LIST_EVENT_INVITEES tool input.
 */
type CALENDLY_LIST_EVENT_INVITEES_INPUT = {
  /**
   * Count
   * @description The number of invitees to return per page. Default is 20.
   * @default 20
   */
  count: number;
  /**
   * Email
   * @description Filter results by a specific invitee's email address.
   */
  email?: string;
  /**
   * Page Token
   * @description A token to retrieve the next or previous page of results in a paginated collection.
   */
  page_token?: string;
  /**
   * Sort
   * @description Order results by the `created_at` field; use 'created_at:asc' for ascending or 'created_at:desc' for descending.
   * @default created_at:asc
   */
  sort: string;
  /**
   * Status
   * @description Filter invitees by their status. Can be 'active' or 'canceled'.
   * @enum {string}
   */
  status?: "active" | "canceled";
  /**
   * Uuid
   * @description The unique identifier (UUID) of the event for which to list invitees.
   */
  uuid?: string;
};

/**
 * Type of CALENDLY's CALENDLY_LIST_EVENT_INVITEES tool output.
 */
type CALENDLY_LIST_EVENT_INVITEES_OUTPUT = {
  /**
   * Data
   * @description The response payload, typically containing a 'collection' of invitee objects and 'pagination' information.
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
};

/**
 * Type of CALENDLY's CALENDLY_LIST_EVENT_TYPE_AVAILABLE_TIMES tool input.
 */
type CALENDLY_LIST_EVENT_TYPE_AVAILABLE_TIMES_INPUT = {
  /**
   * End Time
   * @description End datetime (exclusive) of the requested availability range, in UTC ISO 8601 format (e.g., 'YYYY-MM-DDTHH:MM:SSZ'). The duration between start_time and end_time cannot exceed 7 days.
   */
  end_time?: string;
  /**
   * Event Type
   * @description The URI of the event type for which to find available times. This can be obtained by listing event types or from an event type object.
   */
  event_type?: string;
  /**
   * Start Time
   * @description Start datetime (inclusive) of the requested availability range, in UTC ISO 8601 format (e.g., 'YYYY-MM-DDTHH:MM:SSZ').
   */
  start_time?: string;
};

/**
 * Type of CALENDLY's CALENDLY_LIST_EVENT_TYPE_AVAILABLE_TIMES tool output.
 */
type CALENDLY_LIST_EVENT_TYPE_AVAILABLE_TIMES_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the raw response data from the Calendly API. This typically includes a 'collection' key, which is a list of available time slot objects. Each object details an available slot, including its start time and scheduling URL.
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
};

/**
 * Type of CALENDLY's CALENDLY_LIST_EVENT_TYPE_HOSTS tool input.
 */
type CALENDLY_LIST_EVENT_TYPE_HOSTS_INPUT = {
  /**
   * Count
   * @description Number of event type hosts to return per page.
   * @default 20
   */
  count: number;
  /**
   * Event Type
   * @description URI of an existing event type for which to list hosts.
   */
  event_type?: string;
  /**
   * Page Token
   * @description Token from a previous list call to get the next/previous page of results.
   */
  page_token?: string;
};

/**
 * Type of CALENDLY's CALENDLY_LIST_EVENT_TYPE_HOSTS tool output.
 */
type CALENDLY_LIST_EVENT_TYPE_HOSTS_OUTPUT = {
  /**
   * Data
   * @description Contains the collection of event type hosts (users) and pagination details. Each host object details the assigned user.
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
};

/**
 * Type of CALENDLY's CALENDLY_LIST_GROUPS tool input.
 */
type CALENDLY_LIST_GROUPS_INPUT = {
  /**
   * Count
   * @description The maximum number of groups to return per page. The value can range from 1 to 100.
   * @default 20
   */
  count: number;
  /**
   * Organization
   * @description The URI of the organization to filter groups by. For example, 'https://api.calendly.com/organizations/ORGANIZATION_UUID'.
   */
  organization?: string;
  /**
   * Page Token
   * @description A token to retrieve a specific page of results. Pass this value from a previous response's 'next_page_token' to fetch the next set of groups, or 'previous_page_token' for the previous set.
   */
  page_token?: string;
};

/**
 * Type of CALENDLY's CALENDLY_LIST_GROUPS tool output.
 */
type CALENDLY_LIST_GROUPS_OUTPUT = {
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
 * Type of CALENDLY's CALENDLY_LIST_GROUP_RELATIONSHIPS tool input.
 */
type CALENDLY_LIST_GROUP_RELATIONSHIPS_INPUT = {
  /**
   * Count
   * @description Number of records per page (max 100).
   * @default 20
   */
  count: number;
  /**
   * Group
   * @description Filter results by group URI.
   */
  group?: string;
  /**
   * Organization
   * @description Filter results by organization URI.
   */
  organization?: string;
  /**
   * Owner
   * @description Filter results by owner URI (Organization Membership or Invitation URI).
   */
  owner?: string;
  /**
   * Page Token
   * @description Token for retrieving a specific page of results, obtained from `next_page_token` or `previous_page_token` in a previous response.
   */
  page_token?: string;
};

/**
 * Type of CALENDLY's CALENDLY_LIST_GROUP_RELATIONSHIPS tool output.
 */
type CALENDLY_LIST_GROUP_RELATIONSHIPS_OUTPUT = {
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
 * Type of CALENDLY's CALENDLY_LIST_ORGANIZATION_INVITATIONS tool input.
 */
type CALENDLY_LIST_ORGANIZATION_INVITATIONS_INPUT = {
  /**
   * Count
   * @description Number of results to return per page.
   * @default 20
   */
  count: number;
  /**
   * Email
   * @description Filter by the recipient's email address.
   */
  email?: string;
  /**
   * Page Token
   * @description Pagination token to access a specific page of results.
   */
  page_token?: string;
  /**
   * Sort
   * @description Order of results by field(s) and direction (asc/desc); e.g., 'created_at:asc' or 'email:desc,status:asc'.
   * @default created_at:asc
   */
  sort: string;
  /**
   * Status
   * @description Filter by invitation status.
   * @enum {string}
   */
  status?: "pending" | "accepted" | "declined";
  /**
   * Uuid
   * @description Unique identifier (UUID) of the organization.
   */
  uuid?: string;
};

/**
 * Type of CALENDLY's CALENDLY_LIST_ORGANIZATION_INVITATIONS tool output.
 */
type CALENDLY_LIST_ORGANIZATION_INVITATIONS_OUTPUT = {
  /**
   * Data
   * @description Dictionary with the 'collection' of organization invitations and 'pagination' information.
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
};

/**
 * Type of CALENDLY's CALENDLY_LIST_ORGANIZATION_MEMBERSHIPS tool input.
 */
type CALENDLY_LIST_ORGANIZATION_MEMBERSHIPS_INPUT = {
  /**
   * Count
   * @description The number of membership records to return per page. Must be an integer between 1 and 100, inclusive.
   * @default 20
   */
  count: number;
  /**
   * Email
   * @description Filter memberships by the email address of the user. For example, 'user@example.com'.
   */
  email?: string;
  /**
   * Organization
   * @description Filter memberships by the URI of the organization. For example, 'https://api.calendly.com/organizations/ORGANIZATION_UUID'.
   */
  organization?: string;
  /**
   * Page Token
   * @description The token to retrieve the next or previous page of results in a paginated collection.
   */
  page_token?: string;
  /**
   * User
   * @description Filter memberships by the URI of the user. For example, 'https://api.calendly.com/users/USER_UUID'.
   */
  user?: string;
};

/**
 * Type of CALENDLY's CALENDLY_LIST_ORGANIZATION_MEMBERSHIPS tool output.
 */
type CALENDLY_LIST_ORGANIZATION_MEMBERSHIPS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the list of organization memberships and pagination details.
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
};

/**
 * Type of CALENDLY's CALENDLY_LIST_OUTGOING_COMMUNICATIONS tool input.
 */
type CALENDLY_LIST_OUTGOING_COMMUNICATIONS_INPUT = {
  /**
   * Count
   * @description The number of records to return per page. Must be between 1 and 100, inclusive.
   * @default 20
   */
  count: number;
  /**
   * Max Created At
   * @description Include outgoing communications that were created before this timestamp. Formatted as "YYYY-MM-DDTHH:MM:SS.sssZ" in UTC.
   */
  max_created_at?: string;
  /**
   * Min Created At
   * @description Include outgoing communications that were created after this timestamp. Formatted as "YYYY-MM-DDTHH:MM:SS.sssZ" in UTC.
   */
  min_created_at?: string;
  /**
   * Organization
   * @description The URI of the organization whose outgoing communications are to be retrieved.
   */
  organization?: string;
  /**
   * Page Token
   * @description The token to retrieve the next page of results. Provided in the `next_page_token` field of a previous response.
   */
  page_token?: string;
};

/**
 * Type of CALENDLY's CALENDLY_LIST_OUTGOING_COMMUNICATIONS tool output.
 */
type CALENDLY_LIST_OUTGOING_COMMUNICATIONS_OUTPUT = {
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
 * Type of CALENDLY's CALENDLY_LIST_ROUTING_FORMS tool input.
 */
type CALENDLY_LIST_ROUTING_FORMS_INPUT = {
  /**
   * Count
   * @description The number of routing forms to return per page.
   * @default 20
   */
  count: number;
  /**
   * Organization
   * @description The URI of the organization for which to retrieve routing forms.
   */
  organization?: string;
  /**
   * Page Token
   * @description Token to retrieve a specific page of results, usually from a previous response's pagination details.
   */
  page_token?: string;
  /**
   * Sort
   * @description Specifies the order of results. Use a comma-separated list of `field:direction` pairs. Supported field: `created_at`. Supported directions: `asc` (ascending), `desc` (descending).
   */
  sort?: string;
};

/**
 * Type of CALENDLY's CALENDLY_LIST_ROUTING_FORMS tool output.
 */
type CALENDLY_LIST_ROUTING_FORMS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the list of routing forms under the 'collection' key and pagination details under the 'pagination' key. Each routing form object includes details such as its URI, name, status, questions, and owner information.
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
};

/**
 * Type of CALENDLY's CALENDLY_LIST_USER_AVAILABILITY_SCHEDULES tool input.
 */
type CALENDLY_LIST_USER_AVAILABILITY_SCHEDULES_INPUT = {
  /**
   * User
   * @description URI of the user whose availability schedules are to be listed; must be a valid Calendly user URI.
   */
  user?: string;
};

/**
 * Type of CALENDLY's CALENDLY_LIST_USER_AVAILABILITY_SCHEDULES tool output.
 */
type CALENDLY_LIST_USER_AVAILABILITY_SCHEDULES_OUTPUT = {
  /**
   * Data
   * @description A dictionary mapping schedule identifiers to the user's detailed availability schedule objects.
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
};

/**
 * Type of CALENDLY's CALENDLY_LIST_USER_BUSY_TIMES tool input.
 */
type CALENDLY_LIST_USER_BUSY_TIMES_INPUT = {
  /**
   * End Time
   * @description The end of the time range for which to fetch busy times, in RFC3339 format (e.g., '2023-10-26T11:00:00Z'). Must be after start_time.
   */
  end_time?: string;
  /**
   * Start Time
   * @description The start of the time range for which to fetch busy times, in RFC3339 format (e.g., '2023-10-26T10:00:00Z').
   */
  start_time?: string;
  /**
   * User
   * @description The URI of the user whose busy times are being queried. This is typically the user's Calendly API URI.
   */
  user?: string;
};

/**
 * Type of CALENDLY's CALENDLY_LIST_USER_BUSY_TIMES tool output.
 */
type CALENDLY_LIST_USER_BUSY_TIMES_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the raw response data from the Calendly API. This typically includes a 'collection' field, which is a list of objects detailing the user's busy time intervals (e.g., start time, end time, type of event).
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
};

/**
 * Type of CALENDLY's CALENDLY_LIST_USER_S_EVENT_TYPES tool input.
 */
type CALENDLY_LIST_USER_S_EVENT_TYPES_INPUT = {
  /**
   * Active
   * @description Filter by active status (true for active, false for inactive). If omitted, all event types are returned.
   */
  active?: boolean;
  /**
   * Admin Managed
   * @description Filter by admin management: true for admin-managed only, false to exclude admin-managed. If omitted, all types are returned (respecting other filters).
   */
  admin_managed?: boolean;
  /**
   * Count
   * @description Number of event types per page (max 100).
   * @default 20
   */
  count: number;
  /**
   * Organization
   * @description URI of the **organization** whose event types to list. Provide **either** `organization` **or** `user` (exactly one is required).
   */
  organization?: string;
  /**
   * Page Token
   * @description Token for retrieving the next or previous page of event types.
   */
  page_token?: string;
  /**
   * Sort
   * @description Order results by field(s) and direction ('asc' or 'desc'), e.g., 'name:asc,created_at:desc'. Supported fields: name, position, created_at, updated_at.
   * @default name:asc
   */
  sort: string;
  /**
   * User
   * @description URI of the **user** whose event types to list. Provide **either** `user` **or** `organization` (exactly one is required).
   */
  user?: string;
  /**
   * User Availability Schedule
   * @description URI of the user's availability schedule; use with `user` to filter event types by this primary schedule. Example: 'https://api.calendly.com/user_availability_schedules/SCHEDULE_UUID'.
   */
  user_availability_schedule?: string;
};

/**
 * Type of CALENDLY's CALENDLY_LIST_USER_S_EVENT_TYPES tool output.
 */
type CALENDLY_LIST_USER_S_EVENT_TYPES_OUTPUT = {
  /**
   * Data
   * @description API response dictionary, typically including 'collection' (list of event types) and 'pagination' details.
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
};

/**
 * Type of CALENDLY's CALENDLY_LIST_WEBHOOK_SUBSCRIPTIONS tool input.
 */
type CALENDLY_LIST_WEBHOOK_SUBSCRIPTIONS_INPUT = {
  /**
   * Count
   * @description Number of results per page (maximum 100).
   * @default 20
   */
  count: number;
  /**
   * Group
   * @description URI of the Calendly group; required if `scope` is 'group'.
   */
  group?: string;
  /**
   * Organization
   * @description URI of the Calendly organization for which to list webhook subscriptions.
   */
  organization?: string;
  /**
   * Page Token
   * @description Token for paginating to the next or previous page of results.
   */
  page_token?: string;
  /**
   * Scope
   * @description Scope of the webhook subscriptions: 'organization', 'user', or 'group'.
   * @enum {string}
   */
  scope?: "organization" | "user" | "group";
  /**
   * Sort
   * @description Sort order for results (e.g., 'created_at:asc'). Supported fields: `created_at`, `updated_at`. Supported directions: `asc`, `desc`.
   */
  sort?: string;
  /**
   * User
   * @description URI of the Calendly user; required if `scope` is 'user'.
   */
  user?: string;
};

/**
 * Type of CALENDLY's CALENDLY_LIST_WEBHOOK_SUBSCRIPTIONS tool output.
 */
type CALENDLY_LIST_WEBHOOK_SUBSCRIPTIONS_OUTPUT = {
  /**
   * Data
   * @description Collection of webhook subscriptions matching the request criteria.
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
};

/**
 * Type of CALENDLY's CALENDLY_REMOVE_USER_FROM_ORGANIZATION tool input.
 */
type CALENDLY_REMOVE_USER_FROM_ORGANIZATION_INPUT = {
  /**
   * Uuid
   * @description The unique identifier of the organization membership to be removed.
   */
  uuid?: string;
};

/**
 * Type of CALENDLY's CALENDLY_REMOVE_USER_FROM_ORGANIZATION tool output.
 */
type CALENDLY_REMOVE_USER_FROM_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing data related to the outcome of the operation; may be empty for successful deletions.
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
};

/**
 * Type of CALENDLY's CALENDLY_REVOKE_USER_S_ORGANIZATION_INVITATION tool input.
 */
type CALENDLY_REVOKE_USER_S_ORGANIZATION_INVITATION_INPUT = {
  /**
   * Org Uuid
   * @description The unique identifier of the organization.
   */
  org_uuid?: string;
  /**
   * Uuid
   * @description The unique identifier of the organization invitation to be revoked.
   */
  uuid?: string;
};

/**
 * Type of CALENDLY's CALENDLY_REVOKE_USER_S_ORGANIZATION_INVITATION tool output.
 */
type CALENDLY_REVOKE_USER_S_ORGANIZATION_INVITATION_OUTPUT = {
  /**
   * Data
   * @description An empty dictionary, as a successful revocation typically returns a 204 No Content response.
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
};

/**
 * Type map of all available tool input types for toolkit "CALENDLY".
 */
export type CALENDLY_TOOL_INPUTS = {
  CANCEL_EVENT: CALENDLY_CANCEL_EVENT_INPUT
  CREATE_INVITEE_NO_SHOW: CALENDLY_CREATE_INVITEE_NO_SHOW_INPUT
  CREATE_ONE_OFF_EVENT_TYPE: CALENDLY_CREATE_ONE_OFF_EVENT_TYPE_INPUT
  CREATE_SCHEDULING_LINK: CALENDLY_CREATE_SCHEDULING_LINK_INPUT
  CREATE_SHARE: CALENDLY_CREATE_SHARE_INPUT
  CREATE_SINGLE_USE_SCHEDULING_LINK: CALENDLY_CREATE_SINGLE_USE_SCHEDULING_LINK_INPUT
  CREATE_WEBHOOK_SUBSCRIPTION: CALENDLY_CREATE_WEBHOOK_SUBSCRIPTION_INPUT
  DELETE_INVITEE_DATA: CALENDLY_DELETE_INVITEE_DATA_INPUT
  DELETE_INVITEE_NO_SHOW: CALENDLY_DELETE_INVITEE_NO_SHOW_INPUT
  DELETE_SCHEDULED_EVENT_DATA: CALENDLY_DELETE_SCHEDULED_EVENT_DATA_INPUT
  DELETE_WEBHOOK_SUBSCRIPTION: CALENDLY_DELETE_WEBHOOK_SUBSCRIPTION_INPUT
  GET_CURRENT_USER: CALENDLY_GET_CURRENT_USER_INPUT
  GET_EVENT: CALENDLY_GET_EVENT_INPUT
  GET_EVENT_INVITEE: CALENDLY_GET_EVENT_INVITEE_INPUT
  GET_EVENT_TYPE: CALENDLY_GET_EVENT_TYPE_INPUT
  GET_GROUP: CALENDLY_GET_GROUP_INPUT
  GET_GROUP_RELATIONSHIP: CALENDLY_GET_GROUP_RELATIONSHIP_INPUT
  GET_INVITEE_NO_SHOW: CALENDLY_GET_INVITEE_NO_SHOW_INPUT
  GET_ORGANIZATION_INVITATION: CALENDLY_GET_ORGANIZATION_INVITATION_INPUT
  GET_ORGANIZATION_MEMBERSHIP: CALENDLY_GET_ORGANIZATION_MEMBERSHIP_INPUT
  GET_ROUTING_FORM: CALENDLY_GET_ROUTING_FORM_INPUT
  GET_USER: CALENDLY_GET_USER_INPUT
  GET_USER_AVAILABILITY_SCHEDULE: CALENDLY_GET_USER_AVAILABILITY_SCHEDULE_INPUT
  GET_WEBHOOK_SUBSCRIPTION: CALENDLY_GET_WEBHOOK_SUBSCRIPTION_INPUT
  INVITE_USER_TO_ORGANIZATION: CALENDLY_INVITE_USER_TO_ORGANIZATION_INPUT
  LIST_ACTIVITY_LOG_ENTRIES: CALENDLY_LIST_ACTIVITY_LOG_ENTRIES_INPUT
  LIST_EVENTS: CALENDLY_LIST_EVENTS_INPUT
  LIST_EVENT_INVITEES: CALENDLY_LIST_EVENT_INVITEES_INPUT
  LIST_EVENT_TYPE_AVAILABLE_TIMES: CALENDLY_LIST_EVENT_TYPE_AVAILABLE_TIMES_INPUT
  LIST_EVENT_TYPE_HOSTS: CALENDLY_LIST_EVENT_TYPE_HOSTS_INPUT
  LIST_GROUPS: CALENDLY_LIST_GROUPS_INPUT
  LIST_GROUP_RELATIONSHIPS: CALENDLY_LIST_GROUP_RELATIONSHIPS_INPUT
  LIST_ORGANIZATION_INVITATIONS: CALENDLY_LIST_ORGANIZATION_INVITATIONS_INPUT
  LIST_ORGANIZATION_MEMBERSHIPS: CALENDLY_LIST_ORGANIZATION_MEMBERSHIPS_INPUT
  LIST_OUTGOING_COMMUNICATIONS: CALENDLY_LIST_OUTGOING_COMMUNICATIONS_INPUT
  LIST_ROUTING_FORMS: CALENDLY_LIST_ROUTING_FORMS_INPUT
  LIST_USER_AVAILABILITY_SCHEDULES: CALENDLY_LIST_USER_AVAILABILITY_SCHEDULES_INPUT
  LIST_USER_BUSY_TIMES: CALENDLY_LIST_USER_BUSY_TIMES_INPUT
  LIST_USER_S_EVENT_TYPES: CALENDLY_LIST_USER_S_EVENT_TYPES_INPUT
  LIST_WEBHOOK_SUBSCRIPTIONS: CALENDLY_LIST_WEBHOOK_SUBSCRIPTIONS_INPUT
  REMOVE_USER_FROM_ORGANIZATION: CALENDLY_REMOVE_USER_FROM_ORGANIZATION_INPUT
  REVOKE_USER_S_ORGANIZATION_INVITATION: CALENDLY_REVOKE_USER_S_ORGANIZATION_INVITATION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CALENDLY".
 */
export type CALENDLY_TOOL_OUTPUTS = {
  CANCEL_EVENT: CALENDLY_CANCEL_EVENT_OUTPUT
  CREATE_INVITEE_NO_SHOW: CALENDLY_CREATE_INVITEE_NO_SHOW_OUTPUT
  CREATE_ONE_OFF_EVENT_TYPE: CALENDLY_CREATE_ONE_OFF_EVENT_TYPE_OUTPUT
  CREATE_SCHEDULING_LINK: CALENDLY_CREATE_SCHEDULING_LINK_OUTPUT
  CREATE_SHARE: CALENDLY_CREATE_SHARE_OUTPUT
  CREATE_SINGLE_USE_SCHEDULING_LINK: CALENDLY_CREATE_SINGLE_USE_SCHEDULING_LINK_OUTPUT
  CREATE_WEBHOOK_SUBSCRIPTION: CALENDLY_CREATE_WEBHOOK_SUBSCRIPTION_OUTPUT
  DELETE_INVITEE_DATA: CALENDLY_DELETE_INVITEE_DATA_OUTPUT
  DELETE_INVITEE_NO_SHOW: CALENDLY_DELETE_INVITEE_NO_SHOW_OUTPUT
  DELETE_SCHEDULED_EVENT_DATA: CALENDLY_DELETE_SCHEDULED_EVENT_DATA_OUTPUT
  DELETE_WEBHOOK_SUBSCRIPTION: CALENDLY_DELETE_WEBHOOK_SUBSCRIPTION_OUTPUT
  GET_CURRENT_USER: CALENDLY_GET_CURRENT_USER_OUTPUT
  GET_EVENT: CALENDLY_GET_EVENT_OUTPUT
  GET_EVENT_INVITEE: CALENDLY_GET_EVENT_INVITEE_OUTPUT
  GET_EVENT_TYPE: CALENDLY_GET_EVENT_TYPE_OUTPUT
  GET_GROUP: CALENDLY_GET_GROUP_OUTPUT
  GET_GROUP_RELATIONSHIP: CALENDLY_GET_GROUP_RELATIONSHIP_OUTPUT
  GET_INVITEE_NO_SHOW: CALENDLY_GET_INVITEE_NO_SHOW_OUTPUT
  GET_ORGANIZATION_INVITATION: CALENDLY_GET_ORGANIZATION_INVITATION_OUTPUT
  GET_ORGANIZATION_MEMBERSHIP: CALENDLY_GET_ORGANIZATION_MEMBERSHIP_OUTPUT
  GET_ROUTING_FORM: CALENDLY_GET_ROUTING_FORM_OUTPUT
  GET_USER: CALENDLY_GET_USER_OUTPUT
  GET_USER_AVAILABILITY_SCHEDULE: CALENDLY_GET_USER_AVAILABILITY_SCHEDULE_OUTPUT
  GET_WEBHOOK_SUBSCRIPTION: CALENDLY_GET_WEBHOOK_SUBSCRIPTION_OUTPUT
  INVITE_USER_TO_ORGANIZATION: CALENDLY_INVITE_USER_TO_ORGANIZATION_OUTPUT
  LIST_ACTIVITY_LOG_ENTRIES: CALENDLY_LIST_ACTIVITY_LOG_ENTRIES_OUTPUT
  LIST_EVENTS: CALENDLY_LIST_EVENTS_OUTPUT
  LIST_EVENT_INVITEES: CALENDLY_LIST_EVENT_INVITEES_OUTPUT
  LIST_EVENT_TYPE_AVAILABLE_TIMES: CALENDLY_LIST_EVENT_TYPE_AVAILABLE_TIMES_OUTPUT
  LIST_EVENT_TYPE_HOSTS: CALENDLY_LIST_EVENT_TYPE_HOSTS_OUTPUT
  LIST_GROUPS: CALENDLY_LIST_GROUPS_OUTPUT
  LIST_GROUP_RELATIONSHIPS: CALENDLY_LIST_GROUP_RELATIONSHIPS_OUTPUT
  LIST_ORGANIZATION_INVITATIONS: CALENDLY_LIST_ORGANIZATION_INVITATIONS_OUTPUT
  LIST_ORGANIZATION_MEMBERSHIPS: CALENDLY_LIST_ORGANIZATION_MEMBERSHIPS_OUTPUT
  LIST_OUTGOING_COMMUNICATIONS: CALENDLY_LIST_OUTGOING_COMMUNICATIONS_OUTPUT
  LIST_ROUTING_FORMS: CALENDLY_LIST_ROUTING_FORMS_OUTPUT
  LIST_USER_AVAILABILITY_SCHEDULES: CALENDLY_LIST_USER_AVAILABILITY_SCHEDULES_OUTPUT
  LIST_USER_BUSY_TIMES: CALENDLY_LIST_USER_BUSY_TIMES_OUTPUT
  LIST_USER_S_EVENT_TYPES: CALENDLY_LIST_USER_S_EVENT_TYPES_OUTPUT
  LIST_WEBHOOK_SUBSCRIPTIONS: CALENDLY_LIST_WEBHOOK_SUBSCRIPTIONS_OUTPUT
  REMOVE_USER_FROM_ORGANIZATION: CALENDLY_REMOVE_USER_FROM_ORGANIZATION_OUTPUT
  REVOKE_USER_S_ORGANIZATION_INVITATION: CALENDLY_REVOKE_USER_S_ORGANIZATION_INVITATION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CALENDLY toolkit.
 */
export const CALENDLY = {
  slug: "calendly",
  tools: {
    /**
     * Permanently cancels an existing, active scheduled event by its `uuid`, optionally providing a `reason`, which may trigger notifications to invitees.
     */
    CANCEL_EVENT: "CALENDLY_CANCEL_EVENT",
    /**
     * Marks an invitee, identified by their existing and valid uri, as a 'no show' for a scheduled event.
     */
    CREATE_INVITEE_NO_SHOW: "CALENDLY_CREATE_INVITEE_NO_SHOW",
    /**
     * Creates a temporary calendly one-off event type for unique meetings outside regular availability, requiring valid host/co-host uris, a future date/range for `date setting`, and a positive `duration`.
     */
    CREATE_ONE_OFF_EVENT_TYPE: "CALENDLY_CREATE_ONE_OFF_EVENT_TYPE",
    /**
     * Create a single-use scheduling link. creates a scheduling link that can be used to book an event. the link allows invitees to schedule up to the specified maximum number of events. once the limit is reached, the link becomes inactive.
     */
    CREATE_SCHEDULING_LINK: "CALENDLY_CREATE_SCHEDULING_LINK",
    /**
     * Creates a customizable, one-time share link for a calendly event type, allowing specific overrides to its settings (e.g., duration, availability, location) without altering the original event type.
     */
    CREATE_SHARE: "CALENDLY_CREATE_SHARE",
    /**
     * Creates a one-time, single-use scheduling link for an active calendly event type, expiring after one booking.
     */
    CREATE_SINGLE_USE_SCHEDULING_LINK: "CALENDLY_CREATE_SINGLE_USE_SCHEDULING_LINK",
    /**
     * Creates a calendly webhook subscription to notify a specified `url` (which must be a publicly accessible https endpoint) for selected `events` within a given `organization` and `scope`.
     */
    CREATE_WEBHOOK_SUBSCRIPTION: "CALENDLY_CREATE_WEBHOOK_SUBSCRIPTION",
    /**
     * Permanently removes all invitee data associated with the provided emails from past organization events, for data privacy compliance (requires enterprise subscription; deletion may take up to one week).
     */
    DELETE_INVITEE_DATA: "CALENDLY_DELETE_INVITEE_DATA",
    /**
     * Deletes an invitee no-show record by its `uuid` to reverse an invitee's 'no-show' status; the `uuid` must refer to an existing record.
     */
    DELETE_INVITEE_NO_SHOW: "CALENDLY_DELETE_INVITEE_NO_SHOW",
    /**
     * For enterprise users, initiates deletion of an organization's scheduled event data between a `start time` and `end time` (inclusive, where `start time` must be <= `end time`); actual data deletion may take up to 7 days to complete.
     */
    DELETE_SCHEDULED_EVENT_DATA: "CALENDLY_DELETE_SCHEDULED_EVENT_DATA",
    /**
     * Deletes an existing webhook subscription to stop calendly sending event notifications to its registered callback url; this operation is idempotent.
     */
    DELETE_WEBHOOK_SUBSCRIPTION: "CALENDLY_DELETE_WEBHOOK_SUBSCRIPTION",
    /**
     * Retrieves detailed information about the currently authenticated calendly user.
     */
    GET_CURRENT_USER: "CALENDLY_GET_CURRENT_USER",
    /**
     * Use to retrieve a specific calendly scheduled event by its uuid, provided the event exists in the user's calendly account.
     */
    GET_EVENT: "CALENDLY_GET_EVENT",
    /**
     * Retrieves detailed information about a specific invitee of a scheduled event, using their unique uuids.
     */
    GET_EVENT_INVITEE: "CALENDLY_GET_EVENT_INVITEE",
    /**
     * Retrieves details for a specific calendly event type, identified by its uuid, which must be valid and correspond to an existing event type.
     */
    GET_EVENT_TYPE: "CALENDLY_GET_EVENT_TYPE",
    /**
     * Retrieves all attributes of a specific calendly group by its uuid; the group must exist.
     */
    GET_GROUP: "CALENDLY_GET_GROUP",
    /**
     * Retrieves a specific calendly group relationship by its valid and existing uuid, providing details on user-group associations and membership.
     */
    GET_GROUP_RELATIONSHIP: "CALENDLY_GET_GROUP_RELATIONSHIP",
    /**
     * Retrieves details for a specific invitee no show record by its uuid; an invitee no show is marked when an invitee does not attend a scheduled event.
     */
    GET_INVITEE_NO_SHOW: "CALENDLY_GET_INVITEE_NO_SHOW",
    /**
     * Retrieves a specific calendly organization invitation using its uuid and the parent organization's uuid.
     */
    GET_ORGANIZATION_INVITATION: "CALENDLY_GET_ORGANIZATION_INVITATION",
    /**
     * Retrieves a specific calendly organization membership by its uuid, returning all its attributes.
     */
    GET_ORGANIZATION_MEMBERSHIP: "CALENDLY_GET_ORGANIZATION_MEMBERSHIP",
    /**
     * Retrieves a specific routing form by its uuid, providing its configuration details including questions and routing logic.
     */
    GET_ROUTING_FORM: "CALENDLY_GET_ROUTING_FORM",
    /**
     * Retrieves comprehensive details for an existing calendly user.
     */
    GET_USER: "CALENDLY_GET_USER",
    /**
     * Retrieves an existing user availability schedule by its uuid; this schedule defines the user's default hours of availability.
     */
    GET_USER_AVAILABILITY_SCHEDULE: "CALENDLY_GET_USER_AVAILABILITY_SCHEDULE",
    /**
     * Retrieves the details of an existing webhook subscription, identified by its uuid, including its callback url, subscribed events, scope, and state.
     */
    GET_WEBHOOK_SUBSCRIPTION: "CALENDLY_GET_WEBHOOK_SUBSCRIPTION",
    /**
     * Invites a user to the specified calendly organization by email, if they aren't already a member and lack a pending invitation to it.
     */
    INVITE_USER_TO_ORGANIZATION: "CALENDLY_INVITE_USER_TO_ORGANIZATION",
    /**
     * Retrieves a list of activity log entries for a specified calendly organization (requires an active enterprise subscription), supporting filtering, sorting, and pagination.
     */
    LIST_ACTIVITY_LOG_ENTRIES: "CALENDLY_LIST_ACTIVITY_LOG_ENTRIES",
    /**
     * Retrieves a list of scheduled calendly events; requires `user`, `organization`, `group`, or `invitee email` for scope, and admin rights may be needed when filtering by `organization` or `group`.
     */
    LIST_EVENTS: "CALENDLY_LIST_EVENTS",
    /**
     * Retrieves a list of invitees for a specified calendly event uuid, with options to filter by status or email, and sort by creation time.
     */
    LIST_EVENT_INVITEES: "CALENDLY_LIST_EVENT_INVITEES",
    /**
     * Fetches available time slots for a calendly event type within a specified time range; results are not paginated.
     */
    LIST_EVENT_TYPE_AVAILABLE_TIMES: "CALENDLY_LIST_EVENT_TYPE_AVAILABLE_TIMES",
    /**
     * Retrieves a list of hosts (users) assigned to a specific, existing calendly event type, identified by its uri.
     */
    LIST_EVENT_TYPE_HOSTS: "CALENDLY_LIST_EVENT_TYPE_HOSTS",
    /**
     * Returns a list of groups for a specified calendly organization uri, supporting pagination.
     */
    LIST_GROUPS: "CALENDLY_LIST_GROUPS",
    /**
     * Retrieves a list of group relationships defining an owner's role (e.g., member, admin) within a group; an owner can have one membership per group but multiple admin roles across different groups.
     */
    LIST_GROUP_RELATIONSHIPS: "CALENDLY_LIST_GROUP_RELATIONSHIPS",
    /**
     * Retrieves a list of invitations for a specific organization, identified by its uuid.
     */
    LIST_ORGANIZATION_INVITATIONS: "CALENDLY_LIST_ORGANIZATION_INVITATIONS",
    /**
     * Retrieves a list of organization memberships.
     */
    LIST_ORGANIZATION_MEMBERSHIPS: "CALENDLY_LIST_ORGANIZATION_MEMBERSHIPS",
    /**
     * Retrieves a list of outgoing sms communications for a specified organization; requires an enterprise subscription and if filtering by creation date, both `min created at` and `max created at` must be provided to form a valid range.
     */
    LIST_OUTGOING_COMMUNICATIONS: "CALENDLY_LIST_OUTGOING_COMMUNICATIONS",
    /**
     * Retrieves routing forms for a specified organization; routing forms are questionnaires used to direct invitees to appropriate booking pages or external urls.
     */
    LIST_ROUTING_FORMS: "CALENDLY_LIST_ROUTING_FORMS",
    /**
     * Retrieves all availability schedules for the specified calendly user.
     */
    LIST_USER_AVAILABILITY_SCHEDULES: "CALENDLY_LIST_USER_AVAILABILITY_SCHEDULES",
    /**
     * Fetches a user's busy time intervals (internal and external calendar events) in ascending order for a period up to 7 days; keyset pagination is not supported.
     */
    LIST_USER_BUSY_TIMES: "CALENDLY_LIST_USER_BUSY_TIMES",
    /**
     * Retrieves event types for a user or organization; requires either the `user` or `organization` uri.
     */
    LIST_USER_S_EVENT_TYPES: "CALENDLY_LIST_USER_S_EVENT_TYPES",
    /**
     * Retrieves webhook subscriptions for a calendly organization; `scope` determines if `user` or `group` uri is also required for filtering.
     */
    LIST_WEBHOOK_SUBSCRIPTIONS: "CALENDLY_LIST_WEBHOOK_SUBSCRIPTIONS",
    /**
     * Removes a user (who is not an owner) from an organization by their membership uuid, requiring administrative privileges.
     */
    REMOVE_USER_FROM_ORGANIZATION: "CALENDLY_REMOVE_USER_FROM_ORGANIZATION",
    /**
     * Revokes a pending and revokable (not yet accepted or expired) organization invitation using its uuid and the organization's uuid, rendering the invitation link invalid.
     */
    REVOKE_USER_S_ORGANIZATION_INVITATION: "CALENDLY_REVOKE_USER_S_ORGANIZATION_INVITATION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CALENDLY".
 */
export type CALENDLY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CALENDLY".
 */
export type CALENDLY_TRIGGER_EVENTS = {}
