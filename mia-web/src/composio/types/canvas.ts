import { type TriggerEvent } from "@composio/core"

// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CANVAS's CANVAS_CREATE_ACCOUNT_NOTIFICATION tool input.
 */
type CANVAS_CREATE_ACCOUNT_NOTIFICATION_INPUT = {
  /**
   * Account Id
   * @description Canvas account ID for the notification.
   */
  account_id?: string;
  /**
   * End At
   * @description End date/time for visibility (ISO8601 format); must be after `start_at`.
   */
  end_at?: string;
  /**
   * Icon
   * @description Icon to display with the notification.
   * @default warning
   * @enum {string}
   */
  icon: "warning" | "information" | "question" | "error" | "calendar";
  /**
   * Message
   * @description Main content/body of the notification.
   */
  message?: string;
  /**
   * Notification Roles
   * @description Optional list of specific user role(s) to receive the notification (e.g., 'StudentEnrollment', 'TeacherEnrollment'); roles must be valid for the account. If omitted, Canvas defaults to broader visibility.
   * @default null
   */
  notification_roles: string[] | null;
  /**
   * Start At
   * @description Start date/time for visibility (ISO8601 format).
   */
  start_at?: string;
  /**
   * Subject
   * @description Subject line of the notification.
   */
  subject?: string;
};

/**
 * Type of CANVAS's CANVAS_CREATE_ACCOUNT_NOTIFICATION tool output.
 */
type CANVAS_CREATE_ACCOUNT_NOTIFICATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Details of the created account notification from the Canvas API, including its ID.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_CREATE_APPOINTMENT_GROUP tool input.
 */
type CANVAS_CREATE_APPOINTMENT_GROUP_INPUT = {
  /**
   * Allow Observer Signup
   * @description If `True`, allows users with an observer role (e.g., parents, mentors) to sign up.
   * @default false
   */
  allow_observer_signup: boolean;
  /**
   * Context Codes
   * @description Context codes (e.g., 'course_123') to link this appointment group; at least one is required.
   */
  context_codes?: string[];
  /**
   * Description
   * @description Longer description or instructions for participants.
   */
  description?: string;
  /**
   * Location Address
   * @description Address for the location (e.g., physical address or meeting URL).
   */
  location_address?: string;
  /**
   * Location Name
   * @description Name of the location (e.g., 'Room 301', 'Online via Zoom').
   */
  location_name?: string;
  /**
   * Max Appointments Per Participant
   * @description Maximum time slots a participant can sign up for; prevents overbooking.
   */
  max_appointments_per_participant?: number;
  /**
   * Min Appointments Per Participant
   * @description Minimum time slots a participant must sign up for; useful for requiring multiple sessions.
   */
  min_appointments_per_participant?: number;
  /**
   * Participant Visibility
   * @description Controls sign-up visibility: 'private' (organizers only see sign-ups) or 'protected' (participants see others in the same slot).
   * @default private
   * @enum {string}
   */
  participant_visibility: "private" | "protected";
  /**
   * Participants Per Appointment
   * @description Maximum participants per time slot. If unspecified, Canvas may apply a default or allow unlimited.
   */
  participants_per_appointment?: number;
  /**
   * Publish
   * @description If `True`, publishes the appointment group making it visible for sign-ups.
   * @default false
   */
  publish: boolean;
  /**
   * Sub Context Codes
   * @description Sub-context codes (e.g., 'section_789') to further restrict the group within primary `context_codes`.
   */
  sub_context_codes?: string[];
  /**
   * Title
   * @description Title for the appointment group (e.g., 'Office Hours').
   */
  title?: string;
};

/**
 * Type of CANVAS's CANVAS_CREATE_APPOINTMENT_GROUP tool output.
 */
type CANVAS_CREATE_APPOINTMENT_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full Canvas API response detailing the newly created appointment group and its attributes.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_CREATE_ASSIGNMENT tool input.
 */
type CANVAS_CREATE_ASSIGNMENT_INPUT = {
  /**
   * Allowed Attempts
   * @description Number of submission attempts allowed. Use -1 for unlimited. Defaults to -1 (unlimited) if unspecified by the system.
   */
  allowed_attempts?: number;
  /**
   * Allowed Extensions
   * @description File extensions allowed if 'online_upload' is a submission type. If unspecified, all file types are allowed.
   */
  allowed_extensions?: string[];
  /**
   * Assignment Group Id
   * @description ID of the assignment group for this assignment. If unspecified, may be added to a default or first available group.
   */
  assignment_group_id?: number;
  /**
   * Course Id
   * @description ID of the course for the new assignment.
   */
  course_id?: number;
  /**
   * Description
   * @description Detailed HTML description, including instructions or requirements.
   */
  description?: string;
  /**
   * Due At
   * @description Due date in ISO 8601 format.
   */
  due_at?: string;
  /**
   * Grading Type
   * @description Grading type. Supported: 'pass_fail', 'percent', 'letter_grade', 'gpa_scale', 'points', 'not_graded'. Defaults to 'points' if unspecified.
   */
  grading_type?: string;
  /**
   * Integration Id
   * @description Unique identifier if managed by a third-party integration (e.g., LTI ID).
   */
  integration_id?: string;
  /**
   * Name
   * @description Name of the assignment.
   */
  name?: string;
  /**
   * Points Possible
   * @description Maximum points possible. Required unless grading_type is 'pass_fail' or 'not_graded'.
   */
  points_possible?: number;
  /**
   * Position
   * @description Position in the assignment group's list; lower numbers appear first. If unspecified, added to the end.
   */
  position?: number;
  /**
   * Published
   * @description If true, assignment is published and visible to students. Defaults to false (draft).
   * @default false
   */
  published: boolean;
  /**
   * Submission Types
   * @description Submission types allowed. Common: 'online_text_entry', 'online_upload', 'on_paper', 'none', 'external_tool'. If unspecified, Canvas often assumes 'none'.
   */
  submission_types?: string[];
  /**
   * Unlock At
   * @description Date assignment becomes available to students, in ISO 8601 format.
   */
  unlock_at?: string;
};

/**
 * Type of CANVAS's CANVAS_CREATE_ASSIGNMENT tool output.
 */
type CANVAS_CREATE_ASSIGNMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Complete JSON response from Canvas API, with all details of the created assignment.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_CREATE_ASSIGNMENT_OVERRIDE tool input.
 */
type CANVAS_CREATE_ASSIGNMENT_OVERRIDE_INPUT = {
  /**
   * Assignment Id
   * @description The ID of the assignment for which this override is being created.
   */
  assignment_id?: string;
  /**
   * Course Id
   * @description The ID of the course where the assignment exists and the override will be applied.
   */
  course_id?: string;
  /**
   * Course Section Id
   * @description The ID of the course section to target with this override. All students in this section will be affected.
   */
  course_section_id?: number;
  /**
   * Due At
   * @description The new due date for the assignment for the targeted entity (students, group, or section). Must be in ISO 8601 format.
   */
  due_at?: string;
  /**
   * Group Id
   * @description The ID of the group to target with this override. All students in this group will be affected.
   */
  group_id?: number;
  /**
   * Lock At
   * @description The new lock date (when the assignment becomes unavailable) for the targeted entity. Must be in ISO 8601 format.
   */
  lock_at?: string;
  /**
   * Student Ids
   * @description A list of student IDs to target with this override. If specified, a `title` is also required.
   */
  student_ids?: number[];
  /**
   * Title
   * @description The title for this assignment override. Required if `student_ids` are specified to identify the ad-hoc group.
   */
  title?: string;
  /**
   * Unlock At
   * @description The new unlock date (when the assignment becomes available) for the targeted entity. Must be in ISO 8601 format.
   */
  unlock_at?: string;
};

/**
 * Type of CANVAS's CANVAS_CREATE_ASSIGNMENT_OVERRIDE tool output.
 */
type CANVAS_CREATE_ASSIGNMENT_OVERRIDE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the full JSON response for the newly created assignment override object.
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
 * Type of CANVAS's CANVAS_CREATE_CALENDAR_EVENT tool input.
 */
type CANVAS_CREATE_CALENDAR_EVENT_INPUT = {
  /**
   * All Day
   * @description If true, event spans the entire day; `start_at` and `end_at` times are ignored (date portion only).
   */
  all_day?: boolean;
  /**
   * Blackout Date
   * @description If true, marks a blackout date not considered in course pacing calculations.
   */
  blackout_date?: boolean;
  /**
   * Child Event Data
   * @description Section-specific start/end times. Keys are arbitrary identifiers; values are `ChildEventData` objects.
   */
  child_event_data?: {
      [key: string]: {
          /**
           * Context Code
           * @description Context code (e.g., 'course_123') for section-specific timings. Required if `child_event_data` is used.
           * @default null
           */
          context_code: string;
          /**
           * End At
           * Format: date-time
           * @description End date/time for a specific section (ISO 8601 'YYYY-MM-DDTHH:MM:SSZ').
           * @default null
           */
          end_at: string;
          /**
           * Start At
           * Format: date-time
           * @description Start date/time for a specific section (ISO 8601 'YYYY-MM-DDTHH:MM:SSZ').
           * @default null
           */
          start_at: string;
      };
  };
  /**
   * Context Code
   * @description Context code for the calendar, e.g., 'course_123' (course), 'group_456' (group), 'user_789' (user), or 'account_1' (account).
   */
  context_code?: string;
  /**
   * Description
   * @description Detailed description; HTML allowed for rich formatting.
   */
  description?: string;
  /**
   * Duplicate
   * @description Settings for creating a series of identical events. See `DuplicateSettings`.
   */
  duplicate?: {
      /**
       * Append Iterator
       * @description If true, appends an increasing number (e.g., ' (1)') to duplicated event titles.
       * @default false
       */
      append_iterator: boolean;
      /**
       * Count
       * @description Number of times the event should be duplicated (max 200).
       */
      count?: number;
      /**
       * Frequency
       * @description Frequency for event duplication.
       * @default weekly
       * @enum {string}
       */
      frequency: "daily" | "weekly" | "monthly";
      /**
       * Interval
       * @description Interval between duplicated events, based on `frequency` (e.g., if `frequency` is 'weekly' and `interval` is 2, event occurs every 2 weeks).
       * @default 1
       */
      interval: number;
  };
  /**
   * End At
   * Format: date-time
   * @description End date/time of the event (ISO 8601 'YYYY-MM-DDTHH:MM:SSZ').
   */
  end_at?: string;
  /**
   * Location Address
   * @description Physical address of the event's location.
   */
  location_address?: string;
  /**
   * Location Name
   * @description Name of the event's location (e.g., 'Conference Room A', 'Online').
   */
  location_name?: string;
  /**
   * Rrule
   * @description iCalendar Recurrence Rule (RRULE) string for recurring events (e.g., 'FREQ=WEEKLY;BYDAY=MO,WE,FR'). Must define a finite series (include 'UNTIL' or 'COUNT').
   */
  rrule?: string;
  /**
   * Start At
   * Format: date-time
   * @description Start date/time of the event (ISO 8601 'YYYY-MM-DDTHH:MM:SSZ').
   */
  start_at?: string;
  /**
   * Time Zone Edited
   * @description Time zone for event creation/editing (IANA Time Zone Database or Rails TimeZone format, e.g., 'America/New_York').
   */
  time_zone_edited?: string;
  /**
   * Title
   * @description Short, descriptive title for the event.
   */
  title?: string;
};

/**
 * Type of CANVAS's CANVAS_CREATE_CALENDAR_EVENT tool output.
 */
type CANVAS_CREATE_CALENDAR_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Details of the newly created calendar event.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_CREATE_COMMUNICATION_CHANNEL tool input.
 */
type CANVAS_CREATE_COMMUNICATION_CHANNEL_INPUT = {
  /**
   * Address
   * @description The address of the communication channel. For 'email' type, this is an email address. For 'sms' type, this is a phone number in E.164 format (e.g., +15551234567).
   */
  address?: string;
  /**
   * Token
   * @description A registration ID, device token, or equivalent. This is required if 'type' is 'push' and is provided by a push notification service when an app registers.
   */
  token?: string;
  /**
   * Type
   * @description The type of communication channel to create.
   */
  type?: string;
  /**
   * User Id
   * @description The ID of the Canvas user for whom this communication channel will be created.
   */
  user_id?: string;
};

/**
 * Type of CANVAS's CANVAS_CREATE_COMMUNICATION_CHANNEL tool output.
 */
type CANVAS_CREATE_COMMUNICATION_CHANNEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the full response data from the Canvas API, detailing the created communication channel.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_CREATE_CONTENT_SHARE tool input.
 */
type CANVAS_CREATE_CONTENT_SHARE_INPUT = {
  /**
   * Content Id
   * @description Unique numerical identifier of the content item to be shared.
   */
  content_id?: number;
  /**
   * Content Type
   * @description Type of content being shared.
   * @enum {string}
   */
  content_type?: "assignment" | "discussion_topic" | "page" | "quiz" | "module" | "module_item";
  /**
   * Receiver Ids
   * @description List of unique Canvas user IDs for recipients; must not be empty.
   */
  receiver_ids?: string[];
  /**
   * User Id
   * @description ID of the user initiating the share; 'self' can be used for the authenticated user.
   */
  user_id?: string;
};

/**
 * Type of CANVAS's CANVAS_CREATE_CONTENT_SHARE tool output.
 */
type CANVAS_CREATE_CONTENT_SHARE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw response dictionary from the Canvas API.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_CREATE_CONVERSATION tool input.
 */
type CANVAS_CREATE_CONVERSATION_INPUT = {
  /**
   * Attachment Ids
   * @description Array of attachment IDs from the sender's conversation attachments folder. These are IDs of files previously uploaded by the sender.
   */
  attachment_ids?: string[];
  /**
   * Body
   * @description The content of the message to be sent.
   */
  body?: string;
  /**
   * Context Code
   * @description The course or group ID that provides context for this conversation (e.g., 'course_123', 'group_456'). This associates the conversation with a specific course or group.
   */
  context_code?: string;
  /**
   * Filter
   * @description Array of conversation IDs or user IDs. Used with `scope` and `filter_mode` to find an existing conversation to reuse. If a match is found and `force_new` is not true, that conversation is used/updated instead of creating a new one.
   */
  filter?: string[];
  /**
   * Filter Mode
   * @description Specifies how the `filter` criteria are combined ('and', 'or'). Used in conjunction with `scope` and `filter` to identify an existing conversation for reuse. 'default' typically implies 'and'.
   * @enum {string}
   */
  filter_mode?: "and" | "or" | "default";
  /**
   * Force New
   * @description If true, forces the creation of a new conversation, even if an existing private conversation with the same recipients, scope, and filters is found. If false or not provided, an existing matching conversation may be reused.
   */
  force_new?: boolean;
  /**
   * Group Conversation
   * @description If true, a single group conversation is created with all recipients. If false or not provided, individual private conversations will be created with each recipient. Ignored if `force_new` is true and a new conversation is created.
   */
  group_conversation?: boolean;
  /**
   * Media Comment Id
   * @description Media comment ID of an audio or video file to be associated with this message. This ID refers to a media object previously created.
   */
  media_comment_id?: string;
  /**
   * Media Comment Type
   * @description Type of the associated media file. Must be 'audio' or 'video' if `media_comment_id` is provided.
   * @enum {string}
   */
  media_comment_type?: "audio" | "video";
  /**
   * Mode
   * @description Determines whether messages will be created/sent synchronously or asynchronously. 'sync' means the action waits for completion, 'async' means it returns immediately. Defaults to 'sync'.
   * @enum {string}
   */
  mode?: "sync" | "async";
  /**
   * Recipients
   * @description Array of recipient IDs. User IDs are numeric strings. Course/group IDs are strings prefixed with 'course_' or 'group_' respectively, followed by the ID (e.g., 'course_123', 'group_456').
   */
  recipients?: string[];
  /**
   * Scope
   * @description Filters conversations by a specific scope (e.g., 'unread', 'starred', 'archived') to potentially reuse an existing conversation matching this scope and other filter criteria. Affects which conversation is returned or updated if not forcing new.
   * @enum {string}
   */
  scope?: "unread" | "starred" | "archived";
  /**
   * Subject
   * @description The subject of the conversation. Maximum length is 255 characters.
   */
  subject?: string;
};

/**
 * Type of CANVAS's CANVAS_CREATE_CONVERSATION tool output.
 */
type CANVAS_CREATE_CONVERSATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A list of conversation objects created or updated as a result of this action. Each object contains details of a conversation.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_CREATE_COURSE tool input.
 */
type CANVAS_CREATE_COURSE_INPUT = {
  /**
   * Account Id
   * @description The ID of the account in which the course will be created. This is a mandatory field.
   */
  account_id?: string;
  /**
   * Allow Student Forum Attachments
   * @description If set to true, students can attach files to their posts in course discussion forums and announcements.
   * @default null
   */
  allow_student_forum_attachments: boolean | null;
  /**
   * Allow Student Wiki Edits
   * @description If set to true, students enrolled in the course will be able to edit and contribute to course wiki pages.
   * @default null
   */
  allow_student_wiki_edits: boolean | null;
  /**
   * Allow Wiki Comments
   * @description If set to true, course members (students and instructors) will be able to add comments to wiki pages.
   * @default null
   */
  allow_wiki_comments: boolean | null;
  /**
   * Apply Assignment Group Weights
   * @description If set to true, the final grade for the course will be calculated based on weighted assignment groups (e.g., Homework 30%, Exams 70%).
   * @default null
   */
  apply_assignment_group_weights: boolean | null;
  /**
   * Course Code
   * @description The course code or abbreviation (e.g., 'CS101', 'HIST-202').
   * @default null
   */
  course_code: string | null;
  /**
   * CourseFormat
   * @description The delivery format of the course.
   * @default null
   * @enum {string|null}
   */
  course_format: "on_campus" | "online" | "blended" | null;
  /**
   * CourseDefaultView
   * @description The default landing page for the course after a user navigates to it.
   * @default null
   * @enum {string|null}
   */
  default_view: "feed" | "wiki" | "modules" | "syllabus" | "assignments" | null;
  /**
   * Enable Sis Reactivation
   * @description If true, and a course with the same `sis_course_id` was previously deleted, this action will attempt to reactivate and update that course instead of creating a new one. Requires `sis_course_id` to be provided.
   * @default null
   */
  enable_sis_reactivation: boolean | null;
  /**
   * End At
   * @description The end date and time for the course, in ISO8601 format (e.g., '2024-12-15T23:59:59Z'). If omitted, the course will not have a specific end date.
   * @default null
   */
  end_at: string | null;
  /**
   * Enroll Me
   * @description If true, the user making this API request will be automatically enrolled in the newly created course as a teacher.
   * @default null
   */
  enroll_me: boolean | null;
  /**
   * Grade Passback Setting
   * @description Configures how grades are passed back to an external system, typically an SIS. Valid options are 'nightly_sync' (grades sync daily), 'disabled' (no grade passback), or an empty string (often defaults to 'disabled').
   * @default null
   */
  grade_passback_setting: string | null;
  /**
   * Grading Standard Id
   * @description The ID of an existing grading standard to be used for the course. This defines the mapping from percentage scores to letter grades (e.g., A, B, C).
   * @default null
   */
  grading_standard_id: number | null;
  /**
   * Hide Final Grades
   * @description If set to true, the totals in the student grades summary page will be hidden from students, preventing them from seeing their final calculated grade.
   * @default null
   */
  hide_final_grades: boolean | null;
  /**
   * Integration Id
   * @description A unique identifier for the course from an external integration or third-party tool.
   * @default null
   */
  integration_id: string | null;
  /**
   * Is Public
   * @description If set to true, the course will be publicly visible to both authenticated and unauthenticated users. Otherwise, visibility is restricted.
   * @default null
   */
  is_public: boolean | null;
  /**
   * Is Public To Auth Users
   * @description If set to true, the course is publicly visible only to authenticated users on the platform.
   * @default null
   */
  is_public_to_auth_users: boolean | null;
  /**
   * CourseLicense
   * @description Specifies the license for the course content.
   * @default null
   * @enum {string|null}
   */
  license: "private" | "cc_by_nc_nd" | "cc_by_nc_sa" | "cc_by_nc" | "cc_by_nd" | "cc_by_sa" | "cc_by" | "public_domain" | null;
  /**
   * Name
   * @description The name of the course. If omitted, Canvas will default to 'Unnamed Course'.
   * @default null
   */
  name: string | null;
  /**
   * Offer
   * @description If true, the course will be made available to students (published) immediately upon creation. If false, it remains unpublished and hidden from students until explicitly published.
   * @default null
   */
  offer: boolean | null;
  /**
   * Open Enrollment
   * @description If set to true, the course allows open enrollment, meaning users can join without an invitation or instructor approval.
   * @default null
   */
  open_enrollment: boolean | null;
  /**
   * Post Manually
   * @description If true, all grades for assignments must be manually posted by an instructor before they are visible to students. This enables the 'manual grading policy' feature for the course.
   * @default null
   */
  post_manually: boolean | null;
  /**
   * Public Description
   * @description A short, publicly visible description or summary of the course.
   * @default null
   */
  public_description: string | null;
  /**
   * Public Syllabus
   * @description If set to true, the course syllabus will be publicly visible to all users, including those not logged in.
   * @default null
   */
  public_syllabus: boolean | null;
  /**
   * Public Syllabus To Auth
   * @description If set to true, the course syllabus will be visible to any authenticated user on the platform, even if they are not enrolled.
   * @default null
   */
  public_syllabus_to_auth: boolean | null;
  /**
   * Restrict Enrollments To Course Dates
   * @description If set to true, student enrollments will be active only between the course's `start_at` and `end_at` dates. Access outside these dates may be restricted.
   * @default null
   */
  restrict_enrollments_to_course_dates: boolean | null;
  /**
   * Self Enrollment
   * @description If set to true, students can self-enroll in the course, potentially using a join code or public course listing.
   * @default null
   */
  self_enrollment: boolean | null;
  /**
   * Sis Course Id
   * @description A unique identifier for the course from an external Student Information System (SIS). Used for synchronization.
   * @default null
   */
  sis_course_id: string | null;
  /**
   * Start At
   * @description The start date and time for the course, in ISO8601 format (e.g., '2024-09-01T00:00:00Z'). If omitted, the course will not have a specific start date.
   * @default null
   */
  start_at: string | null;
  /**
   * Syllabus Body
   * @description The HTML content for the course's syllabus page. This can include text, images, links, and other rich content.
   * @default null
   */
  syllabus_body: string | null;
  /**
   * Term Id
   * @description The unique identifier of the academic term (e.g., Fall 2024) to associate this course with.
   * @default null
   */
  term_id: string | null;
  /**
   * Time Zone
   * @description The time zone for the course, used for displaying deadlines and scheduling events. Accepts IANA time zone names (e.g., 'America/New_York') or Rails time zone names.
   * @default null
   */
  time_zone: string | null;
};

/**
 * Type of CANVAS's CANVAS_CREATE_COURSE tool output.
 */
type CANVAS_CREATE_COURSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the detailed information of the newly created course object as returned by the Canvas API.
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
 * Type of CANVAS's CANVAS_CREATE_DISCUSSION_ENTRY tool input.
 */
type CANVAS_CREATE_DISCUSSION_ENTRY_INPUT = {
  /**
   * Attachment Ids
   * @description A list of file attachment IDs to include with the new entry, if any.
   * @default null
   */
  attachment_ids: number[] | null;
  /**
   * Course Id
   * @description The unique identifier of the Canvas course.
   */
  course_id?: number;
  /**
   * Message
   * @description The content of the discussion entry. Supports HTML formatting.
   */
  message?: string;
  /**
   * Topic Id
   * @description The unique identifier of the discussion topic within the course.
   */
  topic_id?: number;
};

/**
 * Type of CANVAS's CANVAS_CREATE_DISCUSSION_ENTRY tool output.
 */
type CANVAS_CREATE_DISCUSSION_ENTRY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The created DiscussionEntry object returned by Canvas, including id, user_id, message, created_at, updated_at, and other metadata.
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
 * Type of CANVAS's CANVAS_CREATE_DISCUSSION_TOPIC tool input.
 */
type CANVAS_CREATE_DISCUSSION_TOPIC_INPUT = {
  /**
   * Allow Rating
   * @description Set to `true` to allow users to rate entries in this topic. Defaults to `false`.
   */
  allow_rating?: boolean;
  /**
   * Course Id
   * @description The unique identifier for the course where the discussion topic will be created.
   */
  course_id?: number;
  /**
   * Delayed Post At
   * Format: date-time
   * @description The datetime (ISO 8601 format) when the topic should be automatically published. If set, `published` should ideally be `false` or omitted.
   */
  delayed_post_at?: string;
  /**
   * Discussion Type
   * @description The type of discussion. Accepted values: 'side_comment' (allows replies to any message), 'threaded' (allows threaded replies), 'not_threaded' (linear discussion). Defaults to 'side_comment' if not specified.
   */
  discussion_type?: string;
  /**
   * Group Category Id
   * @description The ID of a group category within the course. If provided, the discussion topic will be associated with this group category, potentially creating group-specific discussions or restricting access. Example: A group discussion.
   */
  group_category_id?: number;
  /**
   * Is Announcement
   * @description Set to `true` to mark this topic as an announcement. Announcements may appear in a special section or have different notification behavior. Defaults to `false`.
   */
  is_announcement?: boolean;
  /**
   * Lock At
   * Format: date-time
   * @description The datetime (ISO 8601 format) when the topic should be automatically locked, preventing further replies. If omitted, the topic will not automatically lock.
   */
  lock_at?: string;
  /**
   * Message
   * @description The main content/message of the discussion topic. While not explicitly stated for this API endpoint, Canvas discussions generally support HTML for rich content formatting.
   */
  message?: string;
  /**
   * Only Graders Can Rate
   * @description If `allow_rating` is `true`, set this to `true` to restrict rating privileges to graders only. Defaults to `false` (meaning any user can rate if `allow_rating` is true).
   */
  only_graders_can_rate?: boolean;
  /**
   * Pinned
   * @description Set to `true` to pin the topic, listing it in a 'Pinned Discussions' section for higher visibility. Defaults to `false`.
   */
  pinned?: boolean;
  /**
   * Podcast Enabled
   * @description Set to `true` to enable an associated podcast feed for this topic. Defaults to `false`.
   */
  podcast_enabled?: boolean;
  /**
   * Podcast Has Student Posts
   * @description If `podcast_enabled` is `true`, set this to `true` to include student posts in the podcast feed. Defaults to `false`.
   */
  podcast_has_student_posts?: boolean;
  /**
   * Position After
   * @description The ID of another discussion topic within the same course. If provided, this new topic will be positioned immediately after the specified topic in the discussion list.
   */
  position_after?: string;
  /**
   * Published
   * @description Set to `true` to publish the topic immediately, or `false` to save it as a draft. Defaults to `false` if not provided, creating a draft.
   */
  published?: boolean;
  /**
   * Require Initial Post
   * @description Set to `true` to require users to make an initial post before they can view other replies in the topic. Defaults to `false`.
   */
  require_initial_post?: boolean;
  /**
   * Sort By Rating
   * @description If `allow_rating` is `true`, set this to `true` to sort discussion entries by their ratings. Defaults to `false`.
   */
  sort_by_rating?: boolean;
  /**
   * Specific Sections
   * @description A comma-separated string of section IDs to which this discussion topic should be restricted. If omitted, or an empty string is provided, the topic is available to all sections in the course.
   */
  specific_sections?: string;
  /**
   * Title
   * @description The title of the new discussion topic.
   */
  title?: string;
};

/**
 * Type of CANVAS's CANVAS_CREATE_DISCUSSION_TOPIC tool output.
 */
type CANVAS_CREATE_DISCUSSION_TOPIC_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the full API response from Canvas, which includes details of the newly created discussion topic such as its ID, title, creation timestamp, and all other attributes as configured.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_CREATE_ENROLLMENT tool input.
 */
type CANVAS_CREATE_ENROLLMENT_INPUT = {
  /**
   * Associated User Id
   * @description For 'ObserverEnrollment', the ID of the student to be observed.
   */
  associated_user_id?: number;
  /**
   * Course Id
   * @description The ID of the course in which to enroll the user.
   */
  course_id?: number;
  /**
   * Course Section Id
   * @description ID of a specific course section for enrollment. If omitted, user enrolls in the course generally.
   */
  course_section_id?: number;
  /**
   * End At
   * @description ISO8601 end date/time for enrollment. If unspecified, may follow course/term dates or be indefinite.
   */
  end_at?: string;
  /**
   * Enrollment State
   * @description State of enrollment: 'active', 'invited' (requires user acceptance), or 'inactive'.
   * @default invited
   * @enum {string}
   */
  enrollment_state: "active" | "invited" | "inactive";
  /**
   * Enrollment Type
   * @description Enrollment type determining role/permissions. Canvas defaults to 'StudentEnrollment' if unspecified.
   * @enum {string}
   */
  enrollment_type?: "StudentEnrollment" | "TeacherEnrollment" | "TaEnrollment" | "ObserverEnrollment" | "DesignerEnrollment";
  /**
   * Integration Id
   * @description External unique identifier for linking with third-party systems.
   */
  integration_id?: string;
  /**
   * Limit Privileges To Course Section
   * @description If true, confines user access to `course_section_id` (requires `course_section_id` to be set).
   */
  limit_privileges_to_course_section?: boolean;
  /**
   * Notify
   * @description If true, sends notification to user. Default notification behavior varies if null/false.
   */
  notify?: boolean;
  /**
   * Role Id
   * @description ID of a custom course-level role, potentially overriding `enrollment_type`.
   */
  role_id?: number;
  /**
   * Self Enrolled
   * @description True if self-initiated enrollment, typically with `self_enrollment_code`.
   */
  self_enrolled?: boolean;
  /**
   * Self Enrollment Code
   * @description Code for self-enrollment if `self_enrolled` is true.
   */
  self_enrollment_code?: string;
  /**
   * Sis User Id
   * @description SIS (Student Information System) ID for the user; an alternative identifier.
   */
  sis_user_id?: string;
  /**
   * Start At
   * @description ISO8601 start date/time for enrollment. If unspecified, may start immediately or align with course/term settings.
   */
  start_at?: string;
  /**
   * User Id
   * @description The ID of the user to be enrolled in the course.
   */
  user_id?: string;
};

/**
 * Type of CANVAS's CANVAS_CREATE_ENROLLMENT tool output.
 */
type CANVAS_CREATE_ENROLLMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Detailed information of the newly created enrollment from the Canvas API.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_CREATE_FOLDER tool input.
 */
type CANVAS_CREATE_FOLDER_INPUT = {
  /**
   * Context Type
   * @description Specifies the context in which to create the folder. Valid contexts are 'courses', 'users', 'groups', 'folders', or 'accounts'.
   * @enum {string}
   */
  context_type?: "courses" | "users" | "groups" | "folders" | "accounts";
  /**
   * Hidden
   * @description A boolean flag indicating whether the folder should be hidden upon creation. A hidden folder is typically not visible in the standard folder listings.
   */
  hidden?: boolean;
  /**
   * Id
   * @description The unique identifier of the context entity (e.g., course ID, user ID, group ID, folder ID, or account ID) where the folder will be created.
   */
  id?: string;
  /**
   * Lock At
   * @description The date and time at which the folder should become locked, specified in ISO 8601 format (e.g., '2011-10-21T18:48Z').
   */
  lock_at?: string;
  /**
   * Locked
   * @description A boolean flag indicating whether the folder should be locked upon creation. A locked folder typically restricts access or modifications.
   */
  locked?: boolean;
  /**
   * Name
   * @description The desired name for the new folder.
   */
  name?: string;
  /**
   * Parent Folder Id
   * @description The ID of an existing parent folder within the specified context. If provided, the new folder will be created inside this parent folder. Cannot be used simultaneously with `parent_folder_path`.
   */
  parent_folder_id?: string;
  /**
   * Parent Folder Path
   * @description The full path to an existing parent folder within the specified context (e.g., 'course files/week 1/assignments'). If provided, the new folder will be created inside this parent folder. Cannot be used simultaneously with `parent_folder_id`.
   */
  parent_folder_path?: string;
  /**
   * Position
   * @description An integer value to explicitly set the sort order or position of the folder among its siblings.
   */
  position?: number;
  /**
   * Unlock At
   * @description The date and time at which the folder should become unlocked, specified in ISO 8601 format (e.g., '2011-10-21T18:48Z').
   */
  unlock_at?: string;
};

/**
 * Type of CANVAS's CANVAS_CREATE_FOLDER tool output.
 */
type CANVAS_CREATE_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the details of the newly created folder, as returned by the Canvas API.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_CREATE_MODULE tool input.
 */
type CANVAS_CREATE_MODULE_INPUT = {
  /**
   * Course Id
   * @description ID of the course for the new module.
   */
  course_id?: string;
  /**
   * Name
   * @description Name for the new module.
   */
  name?: string;
  /**
   * Position
   * @description 1-based position in the course's module list.
   */
  position?: number;
  /**
   * Prerequisite Module Ids
   * @description List of module IDs that are prerequisites for accessing this module.
   */
  prerequisite_module_ids?: string[];
  /**
   * Publish Final Grade
   * @description If true, automatically publishes the student's final course grade upon module completion.
   */
  publish_final_grade?: boolean;
  /**
   * Require Sequential Progress
   * @description If true, students must complete items sequentially; if false, any order is allowed.
   */
  require_sequential_progress?: boolean;
  /**
   * Unlock At
   * @description ISO 8601 datetime for module availability to students. If omitted, availability follows course settings.
   */
  unlock_at?: string;
};

/**
 * Type of CANVAS's CANVAS_CREATE_MODULE tool output.
 */
type CANVAS_CREATE_MODULE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full Canvas API response data for the newly created module.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_CREATE_PAGE_FOR_COURSE tool input.
 */
type CANVAS_CREATE_PAGE_FOR_COURSE_INPUT = {
  /**
   * Body
   * @description HTML content of the new page. Must be valid HTML.
   */
  body?: string;
  /**
   * Course Id
   * @description Unique identifier for the course.
   */
  course_id?: number;
  /**
   * Editing Roles
   * @description Comma-separated string of roles allowed to edit: 'teachers', 'students', 'members', 'public'. Defaults to 'teachers'.
   */
  editing_roles?: string;
  /**
   * Front Page
   * @description Set as the front page for the course; page must also be published. Defaults to false.
   */
  front_page?: boolean;
  /**
   * Notify Of Update
   * @description Notify users of changes to this page. Defaults to false.
   */
  notify_of_update?: boolean;
  /**
   * Published
   * @description Publish the page upon creation. Defaults to false (draft).
   */
  published?: boolean;
  /**
   * Title
   * @description Title for the new wiki page.
   */
  title?: string;
};

/**
 * Type of CANVAS's CANVAS_CREATE_PAGE_FOR_COURSE tool output.
 */
type CANVAS_CREATE_PAGE_FOR_COURSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full JSON response from the Canvas API, representing the created page.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_CREATE_QUIZ tool input.
 */
type CANVAS_CREATE_QUIZ_INPUT = {
  /**
   * Access Code
   * @description An optional password students must enter to start the quiz.
   */
  access_code?: string;
  /**
   * Allowed Attempts
   * @description The number of times a student is allowed to take the quiz. Use -1 for unlimited attempts. Omit for course/quiz default.
   */
  allowed_attempts?: number;
  /**
   * Assignment Group Id
   * @description The ID of the assignment group to associate the quiz with. This is applicable only if the quiz is graded (e.g., 'assignment' or 'graded_survey' type).
   */
  assignment_group_id?: number;
  /**
   * Cant Go Back
   * @description If true and `one_question_at_a_time` is also true, students cannot return to previous questions after submitting an answer for the current question. Default is false.
   */
  cant_go_back?: boolean;
  /**
   * Course Id
   * @description The ID of the course where the quiz will be created.
   */
  course_id?: string;
  /**
   * Description
   * @description A textual description of the quiz content and instructions.
   */
  description?: string;
  /**
   * Due At
   * @description The date and time (ISO 8601 format) by which the quiz should be submitted.
   */
  due_at?: string;
  /**
   * Hide Correct Answers At
   * @description The date and time (ISO 8601 format) after which correct answers will be hidden from students. Requires `show_correct_answers` to be true.
   */
  hide_correct_answers_at?: string;
  /**
   * Hide Results
   * @description Controls when students can see their quiz results. If null or omitted, results are shown immediately after submission.
   * @enum {string}
   */
  hide_results?: "always" | "until_after_last_attempt";
  /**
   * Ip Filter
   * @description An optional comma-separated list of IP addresses or CIDR ranges (e.g., '192.168.1.0/24', '203.0.113.42') to restrict quiz access.
   */
  ip_filter?: string;
  /**
   * Lock At
   * @description The date and time (ISO 8601 format) after which students can no longer submit the quiz.
   */
  lock_at?: string;
  /**
   * One Question At A Time
   * @description If true, students will see one question at a time and must navigate sequentially. Default is false.
   */
  one_question_at_a_time?: boolean;
  /**
   * One Time Results
   * @description If true and `hide_results` is also set (not null), students can only view their results once, immediately after submitting the quiz. Has no effect if `hide_results` is null. Default is false.
   * @default false
   */
  one_time_results: boolean;
  /**
   * Only Visible To Overrides
   * @description If true, the quiz is hidden from the general student population and only accessible to students with specific assignment overrides. Default is false.
   * @default false
   */
  only_visible_to_overrides: boolean;
  /**
   * Published
   * @description If true, the quiz will be published and visible to students according to availability dates and override settings. Default is typically false for new quizzes.
   */
  published?: boolean;
  /**
   * Quiz Type
   * @description Specifies the type of quiz.
   * @enum {string}
   */
  quiz_type?: "practice_quiz" | "assignment" | "graded_survey" | "survey";
  /**
   * Scoring Policy
   * @description If multiple attempts are allowed, this determines which attempt's score is recorded.
   * @enum {string}
   */
  scoring_policy?: "keep_highest" | "keep_latest";
  /**
   * Show Correct Answers
   * @description If true, students will be able to see the correct answers when viewing their results (subject to other settings like `show_correct_answers_at` and `hide_correct_answers_at`). Default is typically true.
   */
  show_correct_answers?: boolean;
  /**
   * Show Correct Answers At
   * @description The date and time (ISO 8601 format) when correct answers will become visible to students. Requires `show_correct_answers` to be true.
   */
  show_correct_answers_at?: string;
  /**
   * Show Correct Answers Last Attempt
   * @description If true, correct answers will only be shown to students after their last allowed attempt. Requires `show_correct_answers` to be true.
   */
  show_correct_answers_last_attempt?: boolean;
  /**
   * Shuffle Answers
   * @description If true, the order of answers for questions will be randomized for each student. Default is typically false.
   */
  shuffle_answers?: boolean;
  /**
   * Time Limit
   * @description The time limit for the quiz in minutes. Use null or omit for no time limit.
   */
  time_limit?: number;
  /**
   * Title
   * @description The title of the quiz.
   */
  title?: string;
  /**
   * Unlock At
   * @description The date and time (ISO 8601 format) when the quiz becomes available for students to take.
   */
  unlock_at?: string;
};

/**
 * Type of CANVAS's CANVAS_CREATE_QUIZ tool output.
 */
type CANVAS_CREATE_QUIZ_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the complete response from the Canvas API, detailing the attributes of the newly created quiz (e.g., ID, title, settings).
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_CREATE_QUIZ_QUESTION tool input.
 */
type CANVAS_CREATE_QUIZ_QUESTION_INPUT = {
  /**
   * Answers
   * @description Answer objects, if provided. Structure is critical and must align with `question_type`. Refer to Canvas API documentation for format details per type.
   */
  answers?: {
      [key: string]: unknown;
  }[];
  /**
   * Correct Comments
   * @description Feedback (text/HTML) for a correct answer.
   */
  correct_comments?: string;
  /**
   * Course Id
   * @description Identifier of the course containing the quiz.
   */
  course_id?: number;
  /**
   * Incorrect Comments
   * @description Feedback (text/HTML) for an incorrect answer.
   */
  incorrect_comments?: string;
  /**
   * Neutral Comments
   * @description Feedback (text/HTML) regardless of answer correctness.
   */
  neutral_comments?: string;
  /**
   * Points Possible
   * @description Maximum points for a correct answer.
   */
  points_possible?: number;
  /**
   * Position
   * @description 1-based display order in the quiz; defaults to end if omitted.
   */
  position?: number;
  /**
   * Question Name
   * @description Descriptive name for identification, especially in question banks.
   */
  question_name?: string;
  /**
   * Question Text
   * @description Main question content, presented to the student; supports HTML.
   */
  question_text?: string;
  /**
   * Question Type
   * @description Question format and answer options. See `QuestionType` enum.
   * @enum {string}
   */
  question_type?: "calculated_question" | "essay_question" | "file_upload_question" | "fill_in_multiple_blanks_question" | "matching_question" | "multiple_answers_question" | "multiple_choice_question" | "multiple_dropdowns_question" | "numerical_question" | "short_answer_question" | "text_only_question" | "true_false_question";
  /**
   * Quiz Group Id
   * @description ID of an existing quiz group for this question; for organization within the quiz.
   */
  quiz_group_id?: number;
  /**
   * Quiz Id
   * @description Identifier of the quiz to add the question to.
   */
  quiz_id?: number;
  /**
   * Text After Answers
   * @description Additional text/HTML displayed post-submission (e.g., explanations).
   */
  text_after_answers?: string;
};

/**
 * Type of CANVAS's CANVAS_CREATE_QUIZ_QUESTION tool output.
 */
type CANVAS_CREATE_QUIZ_QUESTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description API response for the created quiz question, usually including its ID, text, type, and other properties.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_DELETE_APPOINTMENT_GROUP tool input.
 */
type CANVAS_DELETE_APPOINTMENT_GROUP_INPUT = {
  /**
   * Appointment Group Id
   * @description The unique identifier of the appointment group to be deleted.
   */
  appointment_group_id?: string;
  /**
   * Cancel Reason
   * @description An optional reason for deleting the appointment group.
   */
  cancel_reason?: string;
};

/**
 * Type of CANVAS's CANVAS_DELETE_APPOINTMENT_GROUP tool output.
 */
type CANVAS_DELETE_APPOINTMENT_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the detailed response from the Canvas API upon successful deletion.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_DELETE_ASSIGNMENT tool input.
 */
type CANVAS_DELETE_ASSIGNMENT_INPUT = {
  /**
   * Assignment Id
   * @description The unique identifier of the assignment to be deleted.
   */
  assignment_id?: number;
  /**
   * Course Id
   * @description The unique identifier of the course to which the assignment belongs.
   */
  course_id?: number;
};

/**
 * Type of CANVAS's CANVAS_DELETE_ASSIGNMENT tool output.
 */
type CANVAS_DELETE_ASSIGNMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The Assignment object reflecting its state after a soft delete, typically with its `workflow_state` updated to 'deleted'.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_DELETE_FOLDER tool input.
 */
type CANVAS_DELETE_FOLDER_INPUT = {
  /**
   * Force
   * @description If `true`, deletes the folder even if it contains items. If `false` (default), the folder must be empty for deletion.
   * @default false
   */
  force: boolean;
  /**
   * Id
   * @description Unique identifier of the folder to be deleted.
   */
  id?: string;
};

/**
 * Type of CANVAS's CANVAS_DELETE_FOLDER tool output.
 */
type CANVAS_DELETE_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Dictionary with attributes of the deleted folder, e.g., `id`, `name`, `parent_folder_id`, `files_count`, `folders_count`.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_DELETE_QUIZ tool input.
 */
type CANVAS_DELETE_QUIZ_INPUT = {
  /**
   * Course Id
   * @description The unique identifier for the course from which the quiz will be deleted.
   */
  course_id?: string;
  /**
   * Quiz Id
   * @description The unique identifier for the quiz to be deleted.
   */
  quiz_id?: string;
};

/**
 * Type of CANVAS's CANVAS_DELETE_QUIZ tool output.
 */
type CANVAS_DELETE_QUIZ_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the details of the quiz that was deleted, as returned by the Canvas API.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_DEPARTMENT_LEVEL_GRADE_DATA_FOR_CURRENT_GRADES tool input.
 */
type CANVAS_DEPARTMENT_LEVEL_GRADE_DATA_FOR_CURRENT_GRADES_INPUT = {
  /**
   * Account Id
   * @description Unique Canvas account ID (often a department or sub-account) for which to retrieve current grade analytics.
   */
  account_id?: number;
};

/**
 * Type of CANVAS's CANVAS_DEPARTMENT_LEVEL_GRADE_DATA_FOR_CURRENT_GRADES tool output.
 */
type CANVAS_DEPARTMENT_LEVEL_GRADE_DATA_FOR_CURRENT_GRADES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Complete JSON response from the Canvas API, representing current grade data analytics for the specified account.
       * @default null
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of CANVAS's CANVAS_DEPARTMENT_LEVEL_GRADE_DATA_FOR_TERM_GRADES tool input.
 */
type CANVAS_DEPARTMENT_LEVEL_GRADE_DATA_FOR_TERM_GRADES_INPUT = {
  /**
   * Account Id
   * @description Unique identifier for the Canvas account to retrieve analytics data from.
   */
  account_id?: number;
  /**
   * Term Id
   * @description Unique identifier for the academic term to request grade data for.
   */
  term_id?: number;
};

/**
 * Type of CANVAS's CANVAS_DEPARTMENT_LEVEL_GRADE_DATA_FOR_TERM_GRADES tool output.
 */
type CANVAS_DEPARTMENT_LEVEL_GRADE_DATA_FOR_TERM_GRADES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from the Canvas API, typically including department-level aggregated grade statistics for the specified term and account.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_EDIT_ASSIGNMENT tool input.
 */
type CANVAS_EDIT_ASSIGNMENT_INPUT = {
  /**
   * Allowed Attempts
   * @description The new number of submission attempts allowed for the assignment. Use -1 for unlimited attempts.
   */
  allowed_attempts?: number;
  /**
   * Allowed Extensions
   * @description File extensions (e.g., 'pdf', 'docx') allowed if `submission_types` includes 'online_upload'.
   */
  allowed_extensions?: string[];
  /**
   * Assignment Group Id
   * @description The unique identifier of the assignment group to which this assignment should be moved or associated.
   */
  assignment_group_id?: number;
  /**
   * Assignment Id
   * @description The unique identifier for the assignment to be edited.
   */
  assignment_id?: number;
  /**
   * Course Id
   * @description The unique identifier for the course containing the assignment.
   */
  course_id?: number;
  /**
   * Description
   * @description The new HTML content for the assignment's description.
   */
  description?: string;
  /**
   * Due At
   * @description The new due date for the assignment, formatted in ISO 8601 (e.g., '2025-10-21T18:48:00Z').
   */
  due_at?: string;
  /**
   * Grading Type
   * @description The new grading type for the assignment. Supported types include 'pass_fail', 'percent', 'letter_grade', 'gpa_scale', 'points', 'not_graded'.
   */
  grading_type?: string;
  /**
   * Integration Id
   * @description The new unique identifier for the assignment from a third-party integration (e.g., an external tool).
   */
  integration_id?: string;
  /**
   * Name
   * @description The new name for the assignment.
   */
  name?: string;
  /**
   * Points Possible
   * @description The new maximum number of points possible for the assignment.
   */
  points_possible?: number;
  /**
   * Position
   * @description The new position of this assignment within its assignment group when displayed in lists. Lower numbers appear first.
   */
  position?: number;
  /**
   * Published
   * @description Whether the assignment should be published. Set to `True` to publish, `False` to unpublish. If not provided, the existing published status may be retained or it might default to `False` depending on the API's behavior for partial updates.
   * @default false
   */
  published: boolean;
  /**
   * Submission Types
   * @description A list of new submission types supported for the assignment. Valid types include 'online_quiz', 'none', 'on_paper', 'discussion_topic', 'external_tool', 'online_upload', 'online_text_entry', 'online_url'.
   */
  submission_types?: string[];
  /**
   * Unlock At
   * @description The new date when the assignment becomes available to students, formatted in ISO 8601 (e.g., '2025-10-21T18:48:00Z').
   */
  unlock_at?: string;
};

/**
 * Type of CANVAS's CANVAS_EDIT_ASSIGNMENT tool output.
 */
type CANVAS_EDIT_ASSIGNMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the full response data from the Canvas API, representing the updated assignment object with its current attributes.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_EDIT_QUIZ tool input.
 */
type CANVAS_EDIT_QUIZ_INPUT = {
  /**
   * Access Code
   * @description A password to restrict access to the quiz. Setting this to an empty string will remove an existing access code. If None, the access code will not be updated.
   */
  access_code?: string;
  /**
   * Allowed Attempts
   * @description Number of attempts a student is allowed to take for the quiz. Use -1 for unlimited attempts. If None, this setting will not be updated.
   */
  allowed_attempts?: number;
  /**
   * Assignment Group Id
   * @description The ID of the assignment group to associate with the quiz. This is relevant for graded quizzes (e.g., 'assignment', 'graded_survey'). If None, the assignment group will not be updated.
   */
  assignment_group_id?: number;
  /**
   * Cant Go Back
   * @description If true, students cannot go back to previous questions after answering them (only applicable if `one_question_at_a_time` is true). If None, this setting will not be updated.
   */
  cant_go_back?: boolean;
  /**
   * Course Id
   * @description Identifier for the course in which the quiz resides.
   */
  course_id?: string;
  /**
   * Description
   * @description New HTML description for the quiz. If None, the description will not be updated.
   */
  description?: string;
  /**
   * Due At
   * @description Due date/time for the quiz (ISO 8601 format). No update if None.
   */
  due_at?: string;
  /**
   * Hide Correct Answers At
   * @description When correct answers will be hidden (ISO 8601 format). No update if None.
   */
  hide_correct_answers_at?: string;
  /**
   * Hide Results
   * @description Specifies when results should be hidden from students. Use 'always' to hide results completely or 'until_after_last_attempt' to hide them until the student has completed their final attempt. If None, this setting will not be updated.
   * @enum {string}
   */
  hide_results?: "always" | "until_after_last_attempt";
  /**
   * Ip Filter
   * @description A comma-separated list of IP addresses or CIDR netmasks (e.g., '192.168.1.1/24') that are allowed to access the quiz. If None, this setting will not be updated.
   */
  ip_filter?: string;
  /**
   * Lock At
   * @description When students can no longer take the quiz (ISO 8601 format). No update if None.
   */
  lock_at?: string;
  /**
   * Notify Of Update
   * @description If true, sends notifications to users about the quiz update.
   * @default true
   */
  notify_of_update: boolean;
  /**
   * One Question At A Time
   * @description If true, students will see one question at a time. If None, this setting will not be updated.
   */
  one_question_at_a_time?: boolean;
  /**
   * One Time Results
   * @description If true, students can only view their quiz results once (this option is disabled if `allowed_attempts` > 1). If None, this setting will not be updated.
   */
  one_time_results?: boolean;
  /**
   * Only Visible To Overrides
   * @description If true, the quiz is only visible to students with specific overridden due dates. If None, this setting will not be updated.
   */
  only_visible_to_overrides?: boolean;
  /**
   * Published
   * @description If true, the quiz is published and visible to students. If false, it is unpublished. If None, the publication status will not be updated.
   */
  published?: boolean;
  /**
   * Quiz Id
   * @description Identifier for the quiz to be updated.
   */
  quiz_id?: string;
  /**
   * Quiz Type
   * @description The type of the quiz. If None, the type will not be updated.
   * @enum {string}
   */
  quiz_type?: "practice_quiz" | "assignment" | "graded_survey" | "survey";
  /**
   * Scoring Policy
   * @description Determines which score is kept if multiple attempts are allowed ('keep_highest' or 'keep_latest'). If None, this setting will not be updated.
   * @enum {string}
   */
  scoring_policy?: "keep_highest" | "keep_latest";
  /**
   * Show Correct Answers
   * @description If true, students can see the correct answers after submitting the quiz (subject to other restrictions like `hide_results`, `show_correct_answers_at`, `hide_correct_answers_at`). If None, this setting will not be updated.
   */
  show_correct_answers?: boolean;
  /**
   * Show Correct Answers At
   * @description When correct answers become visible (ISO 8601 format). No update if None.
   */
  show_correct_answers_at?: string;
  /**
   * Show Correct Answers Last Attempt
   * @description If true, correct answers will only be shown after the student's final attempt for quizzes that allow multiple attempts. If None, this setting will not be updated.
   */
  show_correct_answers_last_attempt?: boolean;
  /**
   * Shuffle Answers
   * @description If true, answers to quiz questions will be shuffled for each student. If None, this setting will not be updated.
   */
  shuffle_answers?: boolean;
  /**
   * Time Limit
   * @description Time limit for the quiz in minutes. Use null or omit to remove an existing time limit, effectively setting no time limit. If None, the time limit will not be updated.
   */
  time_limit?: number;
  /**
   * Title
   * @description New title for the quiz. If None, the title will not be updated.
   */
  title?: string;
  /**
   * Unlock At
   * @description When the quiz becomes available (ISO 8601 format). No update if None.
   */
  unlock_at?: string;
};

/**
 * Type of CANVAS's CANVAS_EDIT_QUIZ tool output.
 */
type CANVAS_EDIT_QUIZ_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the detailed response from the Canvas API after attempting to edit the quiz, including the updated quiz object on success.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_EXPORT_CONTENT tool input.
 */
type CANVAS_EXPORT_CONTENT_INPUT = {
  /**
   * Course Id
   * @description The unique identifier for the course whose content is to be exported.
   */
  course_id?: string;
  /**
   * Export Type
   * @description Format for the exported content.
   * @enum {string}
   */
  export_type?: "common_cartridge" | "qti" | "zip";
  /**
   * Skip Notifications
   * @description If true, suppresses progress notifications to the initiating user.
   * @default false
   */
  skip_notifications: boolean;
};

/**
 * Type of CANVAS's CANVAS_EXPORT_CONTENT tool output.
 */
type CANVAS_EXPORT_CONTENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Details of the initiated export, including export ID, progress URL, and current workflow state (e.g., 'created', 'exporting').
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_FETCH_DATA tool input.
 */
type CANVAS_FETCH_DATA_INPUT = {
  /**
   * Account Id
   * @description Canvas account ID (e.g., numerical ID or 'self'), required when `get_users` is true for an account. Can be found via `get_accounts` or use 'self'.
   * @default null
   */
  account_id: number | null;
  /**
   * Assignment Id
   * @description Canvas assignment ID, required when `get_submissions` is true.
   * @default null
   */
  assignment_id: number | null;
  /**
   * Course Id
   * @description Canvas course ID, required if fetching course-specific data (e.g., assignments, files, users for a course).
   * @default null
   */
  course_id: number | null;
  /**
   * Enrollment State
   * @description Filter for `get_courses` or `get_user_courses` by enrollment state.
   * @default null
   */
  enrollment_state: string | null;
  /**
   * Enrollment Type
   * @description Filter for `get_courses` or `get_user_courses` by enrollment type.
   * @default null
   */
  enrollment_type: string | null;
  /**
   * Get Accounts
   * @description Fetches Canvas accounts accessible to the current user.
   * @default false
   */
  get_accounts: boolean;
  /**
   * Get Assignments
   * @description Fetches assignments for a specific course (requires `course_id`).
   * @default false
   */
  get_assignments: boolean;
  /**
   * Get Courses
   * @description Fetches courses for the current user, optionally filtered by `enrollment_type` and `enrollment_state`.
   * @default false
   */
  get_courses: boolean;
  /**
   * Get Discussion Topics
   * @description Fetches discussion topics for a specific course (requires `course_id`). Use `only_announcements` to control whether to fetch announcements only (true), discussion topics only (false), or use default behavior (None). Can be filtered by `search_term`.
   * @default false
   */
  get_discussion_topics: boolean;
  /**
   * Get Files
   * @description Fetches files for a specific course (requires `course_id`).
   * @default false
   */
  get_files: boolean;
  /**
   * Get Pages
   * @description Fetches pages for a specific course (requires `course_id`).
   * @default false
   */
  get_pages: boolean;
  /**
   * Get Quizzes
   * @description Fetches quizzes for a specific course (requires `course_id`).
   * @default false
   */
  get_quizzes: boolean;
  /**
   * Get Submissions
   * @description Fetches submissions for an assignment within a course (requires `course_id` and `assignment_id`).
   * @default false
   */
  get_submissions: boolean;
  /**
   * Get User Courses
   * @description Fetches courses for a specific user (requires `user_id`), optionally filtered by `enrollment_type` and `enrollment_state`.
   * @default false
   */
  get_user_courses: boolean;
  /**
   * Get Users
   * @description Fetches users for an account (requires `account_id`) or a course (requires `course_id`), optionally filter course users by `search_term`.
   * @default false
   */
  get_users: boolean;
  /**
   * Only Announcements
   * @description When `get_discussion_topics` is true: if true, retrieves only announcements; if false, retrieves only discussion topics; if not specified, retrieves discussion topics (defaults to false).
   * @default null
   */
  only_announcements: boolean | null;
  /**
   * Page
   * @description Page number to fetch (1-indexed). Use to get results beyond the first page.
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items to return per page. Maximum is typically 100. Higher values fetch more data in a single request.
   * @default 100
   */
  per_page: number | null;
  /**
   * Search Term
   * @description Search term to filter results when `get_users` (for a course) or `get_discussion_topics` is true.
   * @default null
   */
  search_term: string | null;
  /**
   * User Id
   * @description Canvas user ID, required when `get_user_courses` is true.
   * @default null
   */
  user_id: number | null;
};

/**
 * Type of CANVAS's CANVAS_FETCH_DATA tool output.
 */
type CANVAS_FETCH_DATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Values
       * @description List of fetched items, each a dictionary typically including 'id' and 'name' extracted from the Canvas API response. Use pagination parameters to fetch more than 100 items.
       */
      values?: {
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
 * Type of CANVAS's CANVAS_GET_ACCOUNTS tool input.
 */
type CANVAS_GET_ACCOUNTS_INPUT = object;

/**
 * Type of CANVAS's CANVAS_GET_ACCOUNTS tool output.
 */
type CANVAS_GET_ACCOUNTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Accounts
       * @description Canvas accounts accessible to the authenticated user. Each account is an organizational unit (e.g., institution, school, department) that can form a hierarchy and contain sub-accounts, courses, and users.
       */
      accounts: {
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
 * Type of CANVAS's CANVAS_GET_ALL_ASSIGNMENTS tool input.
 */
type CANVAS_GET_ALL_ASSIGNMENTS_INPUT = {
  /**
   * Course Id
   * @description The unique identifier of the course from which to retrieve assignments.
   */
  course_id?: number;
  /**
   * Per Page
   * @description The number of assignments to return per page.
   * @default 10
   */
  per_page: number;
};

/**
 * Type of CANVAS's CANVAS_GET_ALL_ASSIGNMENTS tool output.
 */
type CANVAS_GET_ALL_ASSIGNMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A list of assignment objects.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_GET_ALL_USERS tool input.
 */
type CANVAS_GET_ALL_USERS_INPUT = {
  /**
   * Account Id
   * @description Unique identifier for the Canvas account; use 'self' for the current user's root account.
   */
  account_id?: string;
  /**
   * Enrollment Type
   * @description Filter users by enrollment type (e.g., 'student', 'teacher', 'ta', 'observer', 'designer').
   * @default null
   */
  enrollment_type: string[] | null;
  /**
   * Include Deleted Users
   * @description If true, include users marked as deleted.
   * @default false
   */
  include_deleted_users: boolean | null;
  /**
   * Order
   * @description Sort direction: 'asc' (ascending) or 'desc' (descending).
   * @default null
   */
  order: string | null;
  /**
   * Page
   * @description Page number for pagination (1-indexed).
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of users per page (max 100).
   * @default 100
   */
  per_page: number | null;
  /**
   * Search Term
   * @description Filter users by name, username, or email.
   * @default null
   */
  search_term: string | null;
  /**
   * Sort
   * @description Field to sort users by (e.g., 'username', 'email', 'sis_id', 'integration_id', 'last_login').
   * @default null
   */
  sort: string | null;
};

/**
 * Type of CANVAS's CANVAS_GET_ALL_USERS tool output.
 */
type CANVAS_GET_ALL_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Users
       * @description List of user objects, each containing detailed user information from the Canvas API.
       */
      users: {
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
 * Type of CANVAS's CANVAS_GET_ASSIGNMENT tool input.
 */
type CANVAS_GET_ASSIGNMENT_INPUT = {
  /**
   * Assignment Id
   * @description Unique identifier for the assignment to retrieve.
   */
  assignment_id?: number;
  /**
   * Course Id
   * @description Unique identifier for the course containing the assignment.
   */
  course_id?: number;
};

/**
 * Type of CANVAS's CANVAS_GET_ASSIGNMENT tool output.
 */
type CANVAS_GET_ASSIGNMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Dictionary containing complete and detailed information of the retrieved assignment.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_GET_ASSIGNMENT_RUBRIC tool input.
 */
type CANVAS_GET_ASSIGNMENT_RUBRIC_INPUT = {
  /**
   * Assignment Id
   * @description Unique identifier for the assignment.
   */
  assignment_id?: string;
  /**
   * Course Id
   * @description Unique identifier for the course.
   */
  course_id?: string;
};

/**
 * Type of CANVAS's CANVAS_GET_ASSIGNMENT_RUBRIC tool output.
 */
type CANVAS_GET_ASSIGNMENT_RUBRIC_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Rubric
       * @description All criteria making up the rubric, with their details and rating levels.
       */
      rubric: {
          /**
           * Criterion Use Range
           * @description If true, this criterion allows a range of scores instead of fixed rating points.
           * @default false
           */
          criterion_use_range: boolean;
          /**
           * Description
           * @description Concise description of the criterion.
           */
          description: string;
          /**
           * Id
           * @description Unique identifier for the criterion.
           */
          id: string;
          /**
           * Long Description
           * @description Comprehensive explanation of the criterion.
           * @default
           */
          long_description: string;
          /**
           * Points
           * @description Maximum points for this criterion.
           */
          points: number;
          /**
           * Ratings
           * @description Possible rating levels and their points for this criterion.
           */
          ratings: {
              /**
               * Description
               * @description Concise description of the rating.
               */
              description: string;
              /**
               * Id
               * @description Unique identifier for the rating level.
               */
              id: string;
              /**
               * Long Description
               * @description Comprehensive explanation of the rating.
               * @default
               */
              long_description: string;
              /**
               * Points
               * @description Numerical score for this rating.
               */
              points: number;
          }[];
      }[];
      /**
       * Rubric Settings
       * @description Overall configuration and metadata of the rubric.
       */
      rubric_settings: {
          /**
           * Free Form Criterion Comments
           * @description If true, assessors can add free-form comments for each criterion.
           * @default false
           */
          free_form_criterion_comments: boolean;
          /**
           * Hide Points
           * @description If true, individual criterion points are hidden from students.
           * @default false
           */
          hide_points: boolean;
          /**
           * Hide Score Total
           * @description If true, the total rubric score is hidden from students.
           * @default false
           */
          hide_score_total: boolean;
          /**
           * Id
           * @description Unique identifier for the rubric; type may vary per Canvas API.
           */
          id: unknown;
          /**
           * Points Possible
           * @description Maximum total score for the entire rubric.
           */
          points_possible: number;
          /**
           * Title
           * @description Display name or title of the rubric.
           */
          title: string;
      };
      /**
       * Use Rubric For Grading
       * @description If true, this rubric is actively used for grading the assignment.
       */
      use_rubric_for_grading: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVAS's CANVAS_GET_COURSE_LEVEL_PARTICIPATION_DATA tool input.
 */
type CANVAS_GET_COURSE_LEVEL_PARTICIPATION_DATA_INPUT = {
  /**
   * Course Id
   * @description The unique numerical identifier of the Canvas course.
   */
  course_id?: number;
};

/**
 * Type of CANVAS's CANVAS_GET_COURSE_LEVEL_PARTICIPATION_DATA tool output.
 */
type CANVAS_GET_COURSE_LEVEL_PARTICIPATION_DATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary or list containing the course activity analytics. This includes data such as daily page view counts ('views') and participation events ('participations') throughout the course's history.
       * @default null
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of CANVAS's CANVAS_GET_CURRENT_USER tool input.
 */
type CANVAS_GET_CURRENT_USER_INPUT = object;

/**
 * Type of CANVAS's CANVAS_GET_CURRENT_USER tool output.
 */
type CANVAS_GET_CURRENT_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Complete user object for the currently authenticated user, as returned by the Canvas API.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_GET_DEPARTMENT_LEVEL_COMPLETED_STATISTICS tool input.
 */
type CANVAS_GET_DEPARTMENT_LEVEL_COMPLETED_STATISTICS_INPUT = {
  /**
   * Account Id
   * @description Unique identifier for the Canvas account.
   */
  account_id?: number;
};

/**
 * Type of CANVAS's CANVAS_GET_DEPARTMENT_LEVEL_COMPLETED_STATISTICS tool output.
 */
type CANVAS_GET_DEPARTMENT_LEVEL_COMPLETED_STATISTICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Numeric statistics for completed courses; keys and values are determined by the Canvas API.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_GET_DEPARTMENT_LEVEL_CURRENT_STATISTICS tool input.
 */
type CANVAS_GET_DEPARTMENT_LEVEL_CURRENT_STATISTICS_INPUT = {
  /**
   * Account Id
   * @description The unique identifier for the Canvas account (which may represent a department) for which to retrieve current statistics.
   */
  account_id?: number;
};

/**
 * Type of CANVAS's CANVAS_GET_DEPARTMENT_LEVEL_CURRENT_STATISTICS tool output.
 */
type CANVAS_GET_DEPARTMENT_LEVEL_CURRENT_STATISTICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the full response data from the API. This typically includes current department-level statistics such as counts of active courses, teachers, students, discussion topics, media objects, attachments, and assignments for the specified account.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_GET_DEPARTMENT_LEVEL_GRADE_DATA_COMPLETED_GRADES tool input.
 */
type CANVAS_GET_DEPARTMENT_LEVEL_GRADE_DATA_COMPLETED_GRADES_INPUT = {
  /**
   * Account Id
   * @description Unique identifier of the Canvas account.
   */
  account_id?: number;
};

/**
 * Type of CANVAS's CANVAS_GET_DEPARTMENT_LEVEL_GRADE_DATA_COMPLETED_GRADES tool output.
 */
type CANVAS_GET_DEPARTMENT_LEVEL_GRADE_DATA_COMPLETED_GRADES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Distribution of final grades from completed courses. Keys are grade scores (as strings, '0'-'100'), and values are non-negative counts of students who received each grade.
       */
      response_data: {
          [key: string]: number;
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
 * Type of CANVAS's CANVAS_GET_DEPARTMENT_LEVEL_TERM_STATISTICS tool input.
 */
type CANVAS_GET_DEPARTMENT_LEVEL_TERM_STATISTICS_INPUT = {
  /**
   * Account Id
   * @description The unique identifier for the Canvas account (e.g., a specific department).
   */
  account_id?: number;
  /**
   * Term Id
   * @description The unique identifier for the academic term.
   */
  term_id?: number;
};

/**
 * Type of CANVAS's CANVAS_GET_DEPARTMENT_LEVEL_TERM_STATISTICS tool output.
 */
type CANVAS_GET_DEPARTMENT_LEVEL_TERM_STATISTICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing various term-level statistics (e.g., enrollment, activity, grades). Specific keys and values depend on the data available in Canvas.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_GET_ENROLLMENT_BY_ID tool input.
 */
type CANVAS_GET_ENROLLMENT_BY_ID_INPUT = {
  /**
   * Account Id
   * @description The unique identifier for the account in which the enrollment exists. Often 'self' can be used for the current user's account.
   */
  account_id?: string;
  /**
   * Id
   * @description The unique identifier for the enrollment object to be retrieved.
   */
  id?: string;
};

/**
 * Type of CANVAS's CANVAS_GET_ENROLLMENT_BY_ID tool output.
 */
type CANVAS_GET_ENROLLMENT_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary representing the Enrollment object. This object typically includes details such as 'id', 'user_id', 'course_id', 'type' (e.g., 'StudentEnrollment', 'TeacherEnrollment'), 'enrollment_state' (e.g., 'active', 'completed'), 'role', and various timestamps related to the enrollment.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_GET_GRADEBOOK_HISTORY_DAYS tool input.
 */
type CANVAS_GET_GRADEBOOK_HISTORY_DAYS_INPUT = {
  /**
   * Course Id
   * @description The unique identifier for the course for which to retrieve the gradebook history days.
   */
  course_id?: string;
};

/**
 * Type of CANVAS's CANVAS_GET_GRADEBOOK_HISTORY_DAYS tool output.
 */
type CANVAS_GET_GRADEBOOK_HISTORY_DAYS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description List of 'Day' objects, each with a 'date' (ISO8601) of grading activity and an array of 'graders' active on that day.
       * @default null
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of CANVAS's CANVAS_GET_PAGE_FOR_COURSE tool input.
 */
type CANVAS_GET_PAGE_FOR_COURSE_INPUT = {
  /**
   * Course Id
   * @description The unique identifier for the Canvas course.
   */
  course_id?: string;
  /**
   * Url Or Id
   * @description The URL (e.g., 'my-first-page') or the numeric ID of the page. If a page URL might be identical to another page's numeric ID, prefix the ID with 'page_id:' (e.g., 'page_id:5678').
   */
  url_or_id?: string;
};

/**
 * Type of CANVAS's CANVAS_GET_PAGE_FOR_COURSE tool output.
 */
type CANVAS_GET_PAGE_FOR_COURSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full page object from the Canvas API, including ID, title, body (HTML content), creation/update dates, and other metadata.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_GET_QUIZ_SUBMISSIONS tool input.
 */
type CANVAS_GET_QUIZ_SUBMISSIONS_INPUT = {
  /**
   * Course Id
   * @description The unique ID of the course.
   */
  course_id?: string;
  /**
   * Include
   * @description Optional. Specifies related resources like 'submission', 'quiz', or 'user' to include with each submission. If omitted or empty, minimal data is returned.
   */
  include?: string[];
  /**
   * Quiz Id
   * @description The unique ID of the quiz.
   */
  quiz_id?: string;
};

/**
 * Type of CANVAS's CANVAS_GET_QUIZ_SUBMISSIONS tool output.
 */
type CANVAS_GET_QUIZ_SUBMISSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The list of quiz submissions and any included associated data from the Canvas API.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_GET_REPORT_STATUS tool input.
 */
type CANVAS_GET_REPORT_STATUS_INPUT = {
  /**
   * Account Id
   * @description Unique identifier for the Canvas account.
   */
  account_id?: number;
  /**
   * Id
   * @description Unique identifier of the specific report instance, usually obtained when report generation is initiated.
   */
  id?: number;
  /**
   * Report
   * @description Type or name of the report, typically a predefined report type within Canvas.
   */
  report?: string;
};

/**
 * Type of CANVAS's CANVAS_GET_REPORT_STATUS tool output.
 */
type CANVAS_GET_REPORT_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full JSON response data from the API, detailing the status and other relevant information about the specified report. This may include progress, completion status, and a download link if the report is ready.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_GET_SINGLE_COURSE tool input.
 */
type CANVAS_GET_SINGLE_COURSE_INPUT = {
  /**
   * Course Id
   * @description The unique identifier for the Canvas course to retrieve.
   */
  course_id?: number;
  /**
   * Include
   * @description Specifies optional additional data to include with the course response. Allowed values: 'needs_grading_count', 'syllabus_body', 'public_description', 'total_scores', 'current_grading_period_scores', 'term', 'account', 'course_progress', 'sections', 'storage_quota_used_mb', 'total_students', 'passback_status', 'favorites', 'teachers', 'observed_users', 'all_courses', 'permissions', 'course_image', 'banner_image', 'concluded', 'lti_context_id', 'post_manually'.
   */
  include?: string[];
  /**
   * Teacher Limit
   * @description If 'teachers' is in `include`, limits the number of teacher enrollments returned; API default applies otherwise.
   */
  teacher_limit?: number;
};

/**
 * Type of CANVAS's CANVAS_GET_SINGLE_COURSE tool output.
 */
type CANVAS_GET_SINGLE_COURSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the detailed information for the retrieved course, including any additionally requested data specified in the 'include' parameter.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_GET_SINGLE_SUBMISSION tool input.
 */
type CANVAS_GET_SINGLE_SUBMISSION_INPUT = {
  /**
   * Assignment Id
   * @description ID of the assignment.
   */
  assignment_id?: number;
  /**
   * Course Id
   * @description ID of the course.
   */
  course_id?: number;
  /**
   * Include
   * @description Additional related resources to include with the submission. Common values: 'submission_history', 'submission_comments', 'rubric_assessment', 'assignment', 'course', 'user', 'group', 'visibility', 'read_status'.
   */
  include?: string[];
  /**
   * User Id
   * @description ID of the user whose submission is being retrieved, or 'self' for the current authenticated user.
   */
  user_id?: number;
};

/**
 * Type of CANVAS's CANVAS_GET_SINGLE_SUBMISSION tool output.
 */
type CANVAS_GET_SINGLE_SUBMISSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Detailed information of the retrieved submission. Includes the submission's attributes and any associated resources requested via the 'include' parameter.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_GET_SUBMISSION_FILES tool input.
 */
type CANVAS_GET_SUBMISSION_FILES_INPUT = {
  /**
   * Assignment Id
   * @description ID of the assignment.
   */
  assignment_id?: string;
  /**
   * Course Id
   * @description ID of the Canvas course.
   */
  course_id?: string;
  /**
   * User Id
   * @description ID of the user (student) whose submission files are sought.
   */
  user_id?: string;
};

/**
 * Type of CANVAS's CANVAS_GET_SUBMISSION_FILES tool output.
 */
type CANVAS_GET_SUBMISSION_FILES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Files
       * @description Dictionary mapping filenames from the submission to their `FileContent` details.
       */
      files: {
          [key: string]: {
              /**
               * Content
               * @description Textual content of a 'file' (UTF-8 decoded) or '[Binary file content]' for binary files; null if type is 'zip'.
               * @default null
               */
              content: string | null;
              /**
               * Contents
               * @description For 'zip' type, a dictionary of filenames to their textual contents (UTF-8 decoded or '[Binary file content]'); null if type is 'file'.
               * @default null
               */
              contents: {
                  [key: string]: string;
              } | null;
              /**
               * File Url
               * @description S3 URL to download the original file, often for binary files or original ZIPs; null if content is fully provided, S3 is disabled, or upload failed.
               * @default null
               */
              file_url: string | null;
              /**
               * Type
               * @description Indicates if the item is a 'file' or 'zip' archive; if 'zip', `contents` provides extracted text.
               */
              type: string;
          };
      };
      /**
       * Submission Id
       * @description ID of the retrieved submission.
       */
      submission_id: string;
      /**
       * Submitted At
       * @description ISO 8601 timestamp of when the submission was made.
       */
      submitted_at: string;
      /**
       * Zip Download Url
       * @description S3 URL for a ZIP archive of all submission files; provided if multiple files exist and S3 is enabled and functional, otherwise null.
       * @default null
       */
      zip_download_url: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVAS's CANVAS_GET_USER_ASSIGNMENT_ANALYTICS tool input.
 */
type CANVAS_GET_USER_ASSIGNMENT_ANALYTICS_INPUT = {
  /**
   * Course Id
   * @description The unique identifier for the course.
   */
  course_id?: number;
  /**
   * Student Id
   * @description The unique identifier for the student.
   */
  student_id?: number;
};

/**
 * Type of CANVAS's CANVAS_GET_USER_ASSIGNMENT_ANALYTICS tool output.
 */
type CANVAS_GET_USER_ASSIGNMENT_ANALYTICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description List of assignment analytics objects, each with assignment details, student's submission information, and overall class performance statistics.
       */
      response_data: {
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
 * Type of CANVAS's CANVAS_GET_USER_COURSE_PROGRESS tool input.
 */
type CANVAS_GET_USER_COURSE_PROGRESS_INPUT = {
  /**
   * Course Id
   * @description The unique numerical identifier of the course for which progress is being requested.
   */
  course_id?: number;
  /**
   * User Id
   * @description The unique identifier of the user whose course progress is being requested. Use 'self' to fetch progress for the currently authenticated user.
   */
  user_id?: string;
};

/**
 * Type of CANVAS's CANVAS_GET_USER_COURSE_PROGRESS tool output.
 */
type CANVAS_GET_USER_COURSE_PROGRESS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing detailed information about the user's course progress, such as completion status of modules, assignments, and other activities.
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
 * Type of CANVAS's CANVAS_GET_USER_PARTICIPATION_ANALYTICS tool input.
 */
type CANVAS_GET_USER_PARTICIPATION_ANALYTICS_INPUT = {
  /**
   * Course Id
   * @description The unique identifier of the course for which to retrieve analytics.
   */
  course_id?: number;
  /**
   * Student Id
   * @description The unique identifier of the student for whom to retrieve analytics.
   */
  student_id?: number;
};

/**
 * Type of CANVAS's CANVAS_GET_USER_PARTICIPATION_ANALYTICS tool output.
 */
type CANVAS_GET_USER_PARTICIPATION_ANALYTICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the student's activity analytics. This includes 'page_views', a hash with ISO 8601 dates as keys (bucketed by hour) and hit counts as values, and 'participations', an array of objects detailing participation events, sorted oldest to newest.
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
 * Type of CANVAS's CANVAS_GET_USER_PROFILE tool input.
 */
type CANVAS_GET_USER_PROFILE_INPUT = {
  /**
   * User Id
   * @description Unique identifier for the user.
   */
  user_id?: number;
};

/**
 * Type of CANVAS's CANVAS_GET_USER_PROFILE tool output.
 */
type CANVAS_GET_USER_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Dictionary containing the user's profile information. The specific fields returned may vary based on user permissions and institutional settings.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_GRADE_COMMENT_SUBMISSION tool input.
 */
type CANVAS_GRADE_COMMENT_SUBMISSION_INPUT = {
  /**
   * Assignment Id
   * @description The unique identifier for the assignment within the course.
   */
  assignment_id?: number;
  /**
   * Attempt
   * @description Specific attempt number for the comment, if multiple attempts allowed.
   */
  attempt?: number;
  /**
   * Course Id
   * @description The unique identifier for the course.
   */
  course_id?: number;
  /**
   * Excuse
   * @description If true, marks submission 'excused'. Excused assignments typically don't affect total grade.
   */
  excuse?: boolean;
  /**
   * Group Comment
   * @description If true, comment is visible to student's group (if a group assignment).
   */
  group_comment?: boolean;
  /**
   * Late Policy Status
   * @description Sets late policy status. If omitted, existing status is unchanged.
   */
  late_policy_status?: string;
  /**
   * Media Comment Id
   * @description Identifier for a pre-existing media comment. Obtaining this ID may require UI interaction due to Canvas API limitations for its management.
   */
  media_comment_id?: string;
  /**
   * Media Comment Type
   * @description Type of media comment (e.g., 'audio', 'video'), relevant if `media_comment_id` is provided.
   */
  media_comment_type?: string;
  /**
   * Posted Grade
   * @description Grade/score to assign (e.g., '95', 'A-'). Updates 'score' and 'grade' in Canvas.
   */
  posted_grade?: string;
  /**
   * Seconds Late Override
   * @description Overrides calculated lateness in seconds; used with `late_policy_status` or for manual adjustment.
   */
  seconds_late_override?: number;
  /**
   * Sticker
   * @description The name of a sticker to apply to the submission (e.g., 'apple', 'star').
   */
  sticker?: string;
  /**
   * Text Comment
   * @description A textual comment to add to the submission.
   */
  text_comment?: string;
  /**
   * User Id
   * @description The unique identifier for the user (student) whose submission is being addressed.
   */
  user_id?: number;
};

/**
 * Type of CANVAS's CANVAS_GRADE_COMMENT_SUBMISSION tool output.
 */
type CANVAS_GRADE_COMMENT_SUBMISSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description API response confirming the operation and reflecting updated submission data.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_LIST_ACCOUNTS_FOR_COURSE_ADMINS tool input.
 */
type CANVAS_LIST_ACCOUNTS_FOR_COURSE_ADMINS_INPUT = object;

/**
 * Type of CANVAS's CANVAS_LIST_ACCOUNTS_FOR_COURSE_ADMINS tool output.
 */
type CANVAS_LIST_ACCOUNTS_FOR_COURSE_ADMINS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description List of account objects from the Canvas API accessible to the user based on their course admin roles, each containing details like ID and name.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_LIST_ALL_FOLDERS tool input.
 */
type CANVAS_LIST_ALL_FOLDERS_INPUT = {
  /**
   * Id
   * @description The unique identifier of the Canvas course for which to list folders. This ID must correspond to an existing course.
   */
  id?: string;
};

/**
 * Type of CANVAS's CANVAS_LIST_ALL_FOLDERS tool output.
 */
type CANVAS_LIST_ALL_FOLDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A list of dictionaries, where each dictionary represents a folder object from the specified course. Folder objects typically include attributes such as `id`, `name`, `parent_folder_id`, `created_at`, `updated_at`, `files_count`, and `folders_count`. Note: If the API results are paginated, this list may represent the first page of folders.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_LIST_APPOINTMENT_GROUPS tool input.
 */
type CANVAS_LIST_APPOINTMENT_GROUPS_INPUT = {
  /**
   * Context Codes
   * @description List of context codes (e.g., 'course_123' or 'group_456') to filter appointment groups by specific courses or groups. If omitted, groups from all relevant contexts are returned.
   */
  context_codes?: string[];
  /**
   * Include
   * @description List of additional data to include with each appointment group. Possible values: 'appointments', 'child_events', 'participant_count', 'reserved_times', 'all_context_codes'.
   */
  include?: string[];
  /**
   * Include Past Appointments
   * @description If true, appointment groups that have already passed will be included in the results. Defaults to false.
   * @default false
   */
  include_past_appointments: boolean;
  /**
   * Scope
   * @description Determines the scope of appointment groups to retrieve. For example, 'reservable' returns groups the user can sign up for.
   * @default reservable
   */
  scope: string;
};

/**
 * Type of CANVAS's CANVAS_LIST_APPOINTMENT_GROUPS tool output.
 */
type CANVAS_LIST_APPOINTMENT_GROUPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A list of appointment group objects matching the criteria.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_LIST_ASSIGNMENT_SUBMISSIONS tool input.
 */
type CANVAS_LIST_ASSIGNMENT_SUBMISSIONS_INPUT = {
  /**
   * Assignment Id
   * @description The unique identifier of the assignment.
   */
  assignment_id?: number;
  /**
   * Course Id
   * @description The unique identifier of the course.
   */
  course_id?: number;
  /**
   * Grouped
   * @description If set to true, and the assignment is a group assignment, the submissions will be grouped by student group. Otherwise, submissions are returned ungrouped. Defaults to false if not provided.
   * @default null
   */
  grouped: boolean | null;
  /**
   * Include
   * @description A list of optional related resources to include in the response for each submission. Common values include 'submission_history', 'submission_comments', 'user', and 'assignment'.
   * @default null
   */
  include: string[] | null;
  /**
   * Page
   * @description Page number for pagination (1-indexed). Use to get results beyond the first page.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of submissions to return per page (max 100). If omitted, Canvas default (10) is used. Set to a higher value (e.g., 100) to get more submissions.
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of CANVAS's CANVAS_LIST_ASSIGNMENT_SUBMISSIONS tool output.
 */
type CANVAS_LIST_ASSIGNMENT_SUBMISSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A list of submission objects, each represented as a dictionary, containing details about the submissions for the specified assignment. Note: Canvas returns pagination links in the response headers for retrieving additional pages.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_LIST_AVAILABLE_REPORTS tool input.
 */
type CANVAS_LIST_AVAILABLE_REPORTS_INPUT = {
  /**
   * Account Id
   * @description The unique identifier for the Canvas account for which to list available reports. This ID can typically be found in the Canvas URL or account settings.
   */
  account_id?: number;
};

/**
 * Type of CANVAS's CANVAS_LIST_AVAILABLE_REPORTS tool output.
 */
type CANVAS_LIST_AVAILABLE_REPORTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A list of dictionaries, where each dictionary represents an available report and its details. The exact structure of each dictionary depends on the Canvas API version and report type.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_LIST_CALENDAR_EVENTS_FOR_USER tool input.
 */
type CANVAS_LIST_CALENDAR_EVENTS_FOR_USER_INPUT = {
  /**
   * All Events
   * @description If true, returns all calendar events for the user, overriding 'start_date', 'end_date', and 'undated' filters.
   * @default false
   */
  all_events: boolean;
  /**
   * Blackout Date
   * @description If true, retrieves only 'blackout dates' (e.g., dates when a course might be unavailable).
   * @default false
   */
  blackout_date: boolean;
  /**
   * Context Codes
   * @description Context codes (e.g., 'course_123', 'group_456', 'user_self') to filter events by. If omitted, events from all contexts visible to the user are returned.
   */
  context_codes?: string[];
  /**
   * End Date
   * @description The end date for filtering events, in ISO 8601 format (e.g., 'YYYY-MM-DDTHH:MM:SSZ' or 'YYYY-MM-DD'). Events occurring on or before this date will be returned. This filter is ignored if 'all_events' is true.
   */
  end_date?: string;
  /**
   * Exclude Submission Types
   * @description Submission types to exclude if item is an assignment. No effect if 'type' is not 'assignment'.
   */
  exclude_submission_types?: string[];
  /**
   * Excludes
   * @description Assignment attributes to exclude (e.g., 'description', 'html_url') if items are assignments. No effect on non-assignment events.
   */
  excludes?: string[];
  /**
   * Important Dates
   * @description If true, retrieves only events marked 'important_dates' (e.g., course announcements with specific dates).
   * @default false
   */
  important_dates: boolean;
  /**
   * Includes
   * @description Optional related resources to include in the response (e.g., 'submission', 'assignment_visibility'). E.g., 'submission' adds submission data for assignments.
   */
  includes?: string[];
  /**
   * Start Date
   * @description The start date for filtering events, in ISO 8601 format (e.g., 'YYYY-MM-DDTHH:MM:SSZ' or 'YYYY-MM-DD'). Events occurring on or after this date will be returned. This filter is ignored if 'all_events' is true.
   */
  start_date?: string;
  /**
   * Submission Types
   * @description Submission types (e.g., 'online_quiz', 'on_paper') to filter by if item is an assignment. No effect if 'type' is not 'assignment'.
   */
  submission_types?: string[];
  /**
   * Type
   * @description Type of calendar item to filter by. Use 'event' for general calendar events or 'assignment' for assignments.
   * @default event
   */
  type: string;
  /**
   * Undated
   * @description If true, only undated events will be returned. This filter is ignored if 'all_events' is true.
   * @default false
   */
  undated: boolean;
  /**
   * User Id
   * @description The unique identifier for the Canvas user whose calendar events are to be listed.
   */
  user_id?: number;
};

/**
 * Type of CANVAS's CANVAS_LIST_CALENDAR_EVENTS_FOR_USER tool output.
 */
type CANVAS_LIST_CALENDAR_EVENTS_FOR_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description List of calendar event objects from Canvas API, each detailing an event or assignment matching query filters.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_LIST_COMMUNICATION_CHANNELS tool input.
 */
type CANVAS_LIST_COMMUNICATION_CHANNELS_INPUT = {
  /**
   * User Id
   * @description The ID of the user for whom to list communication channels. This can be the numeric ID or the SIS User ID.
   */
  user_id?: string;
};

/**
 * Type of CANVAS's CANVAS_LIST_COMMUNICATION_CHANNELS tool output.
 */
type CANVAS_LIST_COMMUNICATION_CHANNELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A list of communication channel objects for the specified user. Each object includes details such as the channel ID, type (e.g., 'email', 'sms'), address, and workflow state.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_LIST_COMM_MESSAGES tool input.
 */
type CANVAS_LIST_COMM_MESSAGES_INPUT = {
  /**
   * End Time
   * @description End of the time filter (inclusive), as an ISO 8601 timestamp. Includes messages sent on or before this time.
   */
  end_time?: string;
  /**
   * Start Time
   * @description Start of the time filter (inclusive), as an ISO 8601 timestamp. Includes messages sent on or after this time.
   */
  start_time?: string;
  /**
   * User Id
   * @description Identifier for the user whose messages are listed. Defaults to the authenticated user if omitted.
   */
  user_id?: string;
};

/**
 * Type of CANVAS's CANVAS_LIST_COMM_MESSAGES tool output.
 */
type CANVAS_LIST_COMM_MESSAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description List of dictionaries, each detailing a communication message.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_LIST_CONTENT_EXPORTS tool input.
 */
type CANVAS_LIST_CONTENT_EXPORTS_INPUT = {
  /**
   * Course Id
   * @description The unique identifier for the course.
   */
  course_id?: string;
};

/**
 * Type of CANVAS's CANVAS_LIST_CONTENT_EXPORTS tool output.
 */
type CANVAS_LIST_CONTENT_EXPORTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Content export objects, each potentially including details such as export ID, creation date, export type, progress URL, user ID, and workflow state.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_LIST_COURSES tool input.
 */
type CANVAS_LIST_COURSES_INPUT = {
  /**
   * Enrollment State
   * @description Filters courses by the enrollment state. If omitted, courses are not filtered by enrollment state.
   * @default null
   */
  enrollment_state: string | null;
  /**
   * Enrollment Type
   * @description Filters courses by the user's enrollment type. If omitted, courses are not filtered by enrollment type.
   * @default null
   */
  enrollment_type: string | null;
  /**
   * Per Page
   * @description Number of courses to return per page. If omitted, Canvas default (10) is used. Set to a higher value (e.g., 100) to get more courses.
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of CANVAS's CANVAS_LIST_COURSES tool output.
 */
type CANVAS_LIST_COURSES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Contains courses matching the filter criteria, or all accessible courses if no filters are applied; returns an empty list if no courses match.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_LIST_COURSES_FOR_USER tool input.
 */
type CANVAS_LIST_COURSES_FOR_USER_INPUT = {
  /**
   * Account Id
   * @description Filters the results to include only courses associated with the specified account ID.
   * @default null
   */
  account_id: string | null;
  /**
   * Enrollment State
   * @description Filters courses by the user's enrollment status (e.g., 'active'). All allowed values are defined in the `validate_enrollment_state` method.
   * @default null
   */
  enrollment_state: string | null;
  /**
   * Homeroom
   * @description If true, filters the results to include only homeroom courses. Set to false or omit to include all course types.
   * @default null
   */
  homeroom: boolean | null;
  /**
   * Include
   * @description Specifies additional details to include for each course (e.g., 'syllabus_body', 'term'). All allowed values are defined in the `validate_include` method.
   * @default null
   */
  include: string[] | null;
  /**
   * State
   * @description Filters courses by specified states (e.g., 'available', 'completed'). All allowed values are defined in the `validate_state` method.
   * @default null
   */
  state: string[] | null;
  /**
   * User Id
   * @description The unique identifier of the user for whom to retrieve the list of courses.
   */
  user_id?: number;
};

/**
 * Type of CANVAS's CANVAS_LIST_COURSES_FOR_USER tool output.
 */
type CANVAS_LIST_COURSES_FOR_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A list of course objects, where each object is a dictionary containing details about a course associated with the user. The structure of each course object depends on the 'include' parameter from the request.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_LIST_COURSE_USERS tool input.
 */
type CANVAS_LIST_COURSE_USERS_INPUT = {
  /**
   * Course Id
   * @description The unique identifier for the Canvas course from which to list users.
   */
  course_id?: string;
  /**
   * Enrollment Role
   * @description Deprecated: Filters users by a specific course-level role name. Use `enrollment_role_id` instead for better precision.
   * @default null
   */
  enrollment_role: string | null;
  /**
   * Enrollment Role Id
   * @description Filters the list to include only users enrolled with the specified course-level role ID.
   * @default null
   */
  enrollment_role_id: number | null;
  /**
   * Enrollment State
   * @description Filters the list to include only users with the specified enrollment states (e.g., 'active', 'invited').
   * @default null
   */
  enrollment_state: string[] | null;
  /**
   * Enrollment Type
   * @description Filters the list to include only users with the specified enrollment types (e.g., 'student', 'teacher').
   * @default null
   */
  enrollment_type: string[] | null;
  /**
   * Include
   * @description Specifies additional details to include for each user in the response (e.g., 'enrollments', 'avatar_url').
   * @default null
   */
  include: string[] | null;
  /**
   * Page
   * @description Page number to fetch (1-indexed). Use to get results beyond the first page.
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of users to return per page (max 100). Higher values fetch more data in a single request.
   * @default 100
   */
  per_page: number;
  /**
   * Search Term
   * @description A partial name or full ID to filter users. If provided, only users matching the search term will be returned.
   * @default null
   */
  search_term: string | null;
  /**
   * SortOption
   * @description The field to sort the list of users by. Results are sorted in ascending order.
   * @default null
   * @enum {string|null}
   */
  sort: "username" | "last_login" | "email" | "sis_id" | null;
  /**
   * User Id
   * @description If provided, the response will be paginated to the page where this specific user ID appears. Useful for finding a user within a large list.
   * @default null
   */
  user_id: string | null;
  /**
   * User Ids
   * @description A list of user IDs to filter the results. Only users whose IDs are in this list will be returned.
   * @default null
   */
  user_ids: number[] | null;
};

/**
 * Type of CANVAS's CANVAS_LIST_COURSE_USERS tool output.
 */
type CANVAS_LIST_COURSE_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A list of user objects retrieved from the course, matching the specified filters and including requested additional data. Each object contains details about a user.
       * @default null
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of CANVAS's CANVAS_LIST_DISCUSSION_ENTRIES tool input.
 */
type CANVAS_LIST_DISCUSSION_ENTRIES_INPUT = {
  /**
   * Course Id
   * @description The unique identifier of the course containing the discussion topic.
   */
  course_id?: number;
  /**
   * Page
   * @description Page number to retrieve (pagination).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of entries to return per page (pagination).
   * @default null
   */
  per_page: number | null;
  /**
   * Topic Id
   * @description The unique identifier of the discussion topic.
   */
  topic_id?: number;
};

/**
 * Type of CANVAS's CANVAS_LIST_DISCUSSION_ENTRIES tool output.
 */
type CANVAS_LIST_DISCUSSION_ENTRIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description List of discussion entry objects matching the request criteria.
       */
      response_data: {
          /**
           * Attachments
           * @description List of files attached to this entry.
           */
          attachments: {
              /**
               * Display Name
               * @description Friendly name for the attachment.
               * @default null
               */
              display_name: string | null;
              /**
               * Filename
               * @description Name of the attached file.
               * @default null
               */
              filename: string | null;
              /**
               * Id
               * @description Attachment file ID.
               */
              id: number;
              /**
               * Url
               * @description URL to download the attachment.
               * @default null
               */
              url: string | null;
          }[];
          /**
           * Created At
           * Format: date-time
           * @description Timestamp when the entry was created.
           */
          created_at: string;
          /**
           * Delayed Post At
           * Format: date-time
           * @description If posting was delayed, the scheduled timestamp.
           * @default null
           */
          delayed_post_at: string | null;
          /**
           * Deleted
           * @description True if this entry has been deleted.
           */
          deleted: boolean;
          /**
           * Discussion Topic Id
           * @description ID of the parent discussion topic.
           */
          discussion_topic_id: number;
          /**
           * Id
           * @description Unique identifier for the discussion entry.
           */
          id: number;
          /**
           * Message
           * @description Body content of the discussion entry.
           */
          message: string;
          /**
           * Parent Id
           * @description If this entry is a reply, the ID of the parent entry.
           * @default null
           */
          parent_id: number | null;
          /**
           * Rating Count
           * @description Number of ratings this entry has received.
           */
          rating_count: number;
          /**
           * Rating Sum
           * @description Sum of all rating values applied.
           */
          rating_sum: number;
          /**
           * Subscribed
           * @description True if the user is subscribed to this entry.
           */
          subscribed: boolean;
          /**
           * Updated At
           * Format: date-time
           * @description Timestamp when the entry was last updated.
           */
          updated_at: string;
          /**
           * User Id
           * @description ID of the user who posted the entry.
           */
          user_id: number;
          /**
           * User Name
           * @description Display name of the entry author.
           */
          user_name: string;
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
 * Type of CANVAS's CANVAS_LIST_DISCUSSION_TOPICS tool input.
 */
type CANVAS_LIST_DISCUSSION_TOPICS_INPUT = {
  /**
   * Course Id
   * @description The unique identifier of the course for which to list discussion topics.
   */
  course_id?: number;
  /**
   * Exclude Context Module Locked Topics
   * @description If true, and the requester is a student, excludes topics that are locked by module progression. Defaults to false.
   * @default null
   */
  exclude_context_module_locked_topics: boolean | null;
  /**
   * Filter By
   * @description Filters topics based on a characteristic, typically read status. Use 'unread' to get only unread topics. Valid options: 'all', 'unread'.
   * @default null
   */
  filter_by: string | null;
  /**
   * Include
   * @description Specifies additional data to return for each discussion topic. Valid options: 'all_dates', 'sections', 'sections_user_count', 'overrides'. Multiple options can be provided as a list of strings.
   * @default null
   */
  include: string[] | null;
  /**
   * Only Announcements
   * @description If true, retrieves only announcements; otherwise, retrieves discussion topics. Defaults to false.
   * @default null
   */
  only_announcements: boolean | null;
  /**
   * Order By
   * @description The criteria for ordering discussion topics. Defaults to 'position' if not specified. Valid options: 'position', 'recent_activity', 'title'.
   * @default null
   */
  order_by: string | null;
  /**
   * Scope
   * @description Filters topics by a specific state. Only one state can be specified. Valid options: 'locked', 'unlocked', 'pinned', 'unpinned'.
   * @default null
   */
  scope: string | null;
  /**
   * Search Term
   * @description A search string to match against discussion topic titles. Returns topics with partially matching titles.
   * @default null
   */
  search_term: string | null;
};

/**
 * Type of CANVAS's CANVAS_LIST_DISCUSSION_TOPICS tool output.
 */
type CANVAS_LIST_DISCUSSION_TOPICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A list of discussion topic objects matching the request criteria.
       */
      response_data: unknown[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVAS's CANVAS_LIST_FILES tool input.
 */
type CANVAS_LIST_FILES_INPUT = {
  /**
   * Course Id
   * @description The unique Canvas identifier for the course whose files are to be listed.
   */
  course_id?: string;
};

/**
 * Type of CANVAS's CANVAS_LIST_FILES tool output.
 */
type CANVAS_LIST_FILES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description List of file objects, each a dictionary with metadata (ID, name, size, type, URLs); empty if no files.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_LIST_FOLDERS tool input.
 */
type CANVAS_LIST_FOLDERS_INPUT = {
  /**
   * Folder Id
   * @description ID of the parent folder for which to list direct sub-folders.
   */
  folder_id?: string;
};

/**
 * Type of CANVAS's CANVAS_LIST_FOLDERS tool output.
 */
type CANVAS_LIST_FOLDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description List of folder objects, each a dictionary detailing a sub-folder; empty if no sub-folders exist.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_LIST_PAGES_FOR_COURSE tool input.
 */
type CANVAS_LIST_PAGES_FOR_COURSE_INPUT = {
  /**
   * Course Id
   * @description The unique identifier for the course for which to list pages.
   */
  course_id?: number;
  /**
   * Order
   * @description The order in which to sort the results. Use 'asc' for ascending order or 'desc' for descending order.
   * @default null
   */
  order: string | null;
  /**
   * Sort
   * @description The field to sort the list of pages by. Common options include 'created_at', 'updated_at', or 'title'.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of CANVAS's CANVAS_LIST_PAGES_FOR_COURSE tool output.
 */
type CANVAS_LIST_PAGES_FOR_COURSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A list of page objects retrieved for the specified course. Each object typically contains details such as page ID, title, creation date, and content.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_LIST_QUIZZES_IN_COURSE tool input.
 */
type CANVAS_LIST_QUIZZES_IN_COURSE_INPUT = {
  /**
   * Course Id
   * @description The unique identifier of the course from which to list quizzes.
   */
  course_id?: string;
  /**
   * Page
   * @description The page number for paginated results, starting from 1. If not specified, the first page is returned.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description The number of quizzes to return per page for paginated results. If not specified, a default number (e.g., 10) set by Canvas will be used.
   * @default null
   */
  per_page: number | null;
  /**
   * Search Term
   * @description A partial title to filter quizzes. Only quizzes whose titles contain this term will be returned.
   * @default null
   */
  search_term: string | null;
};

/**
 * Type of CANVAS's CANVAS_LIST_QUIZZES_IN_COURSE tool output.
 */
type CANVAS_LIST_QUIZZES_IN_COURSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Quiz objects, each a dictionary conforming to the Canvas API specification. Common fields include 'id', 'title', 'due_at', 'points_possible'.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_LIST_SENT_CONTENT_SHARES tool input.
 */
type CANVAS_LIST_SENT_CONTENT_SHARES_INPUT = {
  /**
   * User Id
   * @description The unique identifier of the user whose sent content shares are to be retrieved. This can be the numeric Canvas user ID or a SIS ID prefixed with 'sis_user_id:'. Use 'self' to represent the currently authenticated user.
   */
  user_id?: string;
};

/**
 * Type of CANVAS's CANVAS_LIST_SENT_CONTENT_SHARES tool output.
 */
type CANVAS_LIST_SENT_CONTENT_SHARES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A list of content share objects, where each object represents a resource (e.g., assignment, page, quiz, file) shared by the specified user. The structure of each object provides details such as the content type, name, and when it was shared.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_LIST_SUBMISSIONS tool input.
 */
type CANVAS_LIST_SUBMISSIONS_INPUT = {
  /**
   * Assignment Id
   * @description The unique identifier for the assignment.
   */
  assignment_id?: number;
  /**
   * Course Id
   * @description The unique identifier for the course.
   */
  course_id?: number;
  /**
   * Date
   * @description The specific date for which to retrieve submission history, in 'YYYY-MM-DD' format. This refers to the date the grading event occurred.
   */
  date?: string;
  /**
   * Grader Id
   * @description The unique identifier for the grader whose grading history is to be viewed.
   */
  grader_id?: number;
};

/**
 * Type of CANVAS's CANVAS_LIST_SUBMISSIONS tool output.
 */
type CANVAS_LIST_SUBMISSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Submission gradebook history entries from the Canvas API, detailing changes to submissions.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_LIST_SUBMISSIONSFOR_MULTIPLE_ASSIGNMENTS tool input.
 */
type CANVAS_LIST_SUBMISSIONSFOR_MULTIPLE_ASSIGNMENTS_INPUT = {
  /**
   * Assignment Ids
   * @description List of assignment identifiers (Canvas assignment IDs) for which to retrieve submissions. If this list is omitted or empty, submissions for all assignments in the course will be returned.
   */
  assignment_ids?: string[];
  /**
   * Course Id
   * @description The unique identifier for the Canvas course from which to retrieve submissions.
   */
  course_id?: number;
  /**
   * Student Ids
   * @description List of student identifiers to filter submissions. Accepts Canvas user IDs, SIS user IDs (e.g., 'sis_user_id:S123'), or the special keyword 'all'. If omitted, submissions for the current authenticated user are returned. Students can only retrieve their own submissions. Observers can only retrieve submissions for students they are associated with. The 'all' keyword retrieves submissions for all students in the specified course or section.
   */
  student_ids?: string[];
};

/**
 * Type of CANVAS's CANVAS_LIST_SUBMISSIONSFOR_MULTIPLE_ASSIGNMENTS tool output.
 */
type CANVAS_LIST_SUBMISSIONSFOR_MULTIPLE_ASSIGNMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A list containing the submission data. Each item in the list is a dictionary representing a submission object as defined by the Canvas API, including details like submission status, grade, submitted files, etc.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_LIST_UNCOLLATED_SUBMISSION_VERSIONS tool input.
 */
type CANVAS_LIST_UNCOLLATED_SUBMISSION_VERSIONS_INPUT = {
  /**
   * Ascending
   * @description If true, returns submission versions in ascending order by date (oldest first); defaults to descending (newest first).
   */
  ascending?: boolean;
  /**
   * Assignment Id
   * @description ID of the assignment to filter submission versions.
   */
  assignment_id?: number;
  /**
   * Course Id
   * @description ID of an existing course to fetch submission versions from.
   */
  course_id?: number;
  /**
   * User Id
   * @description ID of the user (student) to filter submission versions.
   */
  user_id?: number;
};

/**
 * Type of CANVAS's CANVAS_LIST_UNCOLLATED_SUBMISSION_VERSIONS tool output.
 */
type CANVAS_LIST_UNCOLLATED_SUBMISSION_VERSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description List of uncollated submission version events from the Gradebook history feed; specific fields are determined by the Canvas API.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_LIST_USERS_IN_ACCOUNT tool input.
 */
type CANVAS_LIST_USERS_IN_ACCOUNT_INPUT = {
  /**
   * Account Id
   * @description The unique identifier of the Canvas account from which to retrieve the list of users.
   */
  account_id?: number;
};

/**
 * Type of CANVAS's CANVAS_LIST_USERS_IN_ACCOUNT tool output.
 */
type CANVAS_LIST_USERS_IN_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A list of dictionaries, where each dictionary represents a user object from the specified Canvas account. User objects typically include attributes like `id`, `name`, `email`, and other profile information as returned by the Canvas API.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_REPLY_TO_DISCUSSION_ENTRY tool input.
 */
type CANVAS_REPLY_TO_DISCUSSION_ENTRY_INPUT = {
  /**
   * Attachment Ids
   * @description A list of file attachment IDs to include with the reply, if any.
   * @default null
   */
  attachment_ids: number[] | null;
  /**
   * Course Id
   * @description The unique identifier for the Canvas course containing the discussion topic.
   */
  course_id?: number;
  /**
   * Entry Id
   * @description The unique identifier for the discussion entry to which the reply will be posted.
   */
  entry_id?: number;
  /**
   * Message
   * @description The body content of the reply to create. Supports HTML formatting.
   */
  message?: string;
  /**
   * Topic Id
   * @description The unique identifier for the discussion topic within the course.
   */
  topic_id?: number;
};

/**
 * Type of CANVAS's CANVAS_REPLY_TO_DISCUSSION_ENTRY tool output.
 */
type CANVAS_REPLY_TO_DISCUSSION_ENTRY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The newly created DiscussionEntry object returned by Canvas, including id, user_id, message, created_at, updated_at, and other metadata.
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
 * Type of CANVAS's CANVAS_RETRIEVE_ENROLLMENT_TERM tool input.
 */
type CANVAS_RETRIEVE_ENROLLMENT_TERM_INPUT = {
  /**
   * Account Id
   * @description The unique identifier for the root account. Important: This must be the ID of a root-level account, not a sub-account, to avoid errors.
   */
  account_id?: string;
  /**
   * Term Id
   * @description The unique identifier of the enrollment term to be retrieved from the specified account.
   */
  term_id?: string;
};

/**
 * Type of CANVAS's CANVAS_RETRIEVE_ENROLLMENT_TERM tool output.
 */
type CANVAS_RETRIEVE_ENROLLMENT_TERM_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the detailed information of the retrieved enrollment term.
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
 * Type of CANVAS's CANVAS_START_REPORT tool input.
 */
type CANVAS_START_REPORT_INPUT = {
  /**
   * Account Id
   * @description The unique identifier for the Canvas account for which the report will be generated.
   */
  account_id?: number;
  /**
   * Parameters
   * @description Parameters specific to the chosen report type (e.g., a 'grade_export_csv' might need `courses[course_id]`). Consult 'List Available Reports' or API documentation for parameter details. Omit if none are needed.
   */
  parameters?: {
      [key: string]: unknown;
  };
  /**
   * Report
   * @description The type or name of the report to start. Use the 'List Available Reports' action or Canvas API documentation to get available report types.
   */
  report?: string;
};

/**
 * Type of CANVAS's CANVAS_START_REPORT tool output.
 */
type CANVAS_START_REPORT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the full JSON response from the Canvas API. This typically includes details about the report that has been initiated, such as its ID, status, progress, and potentially a URL to download the report once it is complete.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_TRANSLATE_FILE_REFERENCE tool input.
 */
type CANVAS_TRANSLATE_FILE_REFERENCE_INPUT = {
  /**
   * Course Id
   * @description Identifier for the Canvas course containing the file.
   */
  course_id?: string;
  /**
   * Migration Id
   * @description Identifier for a file reference, typically assigned during content import, used to find its current representation in the course.
   */
  migration_id?: string;
};

/**
 * Type of CANVAS's CANVAS_TRANSLATE_FILE_REFERENCE tool output.
 */
type CANVAS_TRANSLATE_FILE_REFERENCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full JSON response from the Canvas API, containing details of the translated file reference or an error if the reference is untranslated or invalid.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_UPDATE_APPOINTMENT_GROUP tool input.
 */
type CANVAS_UPDATE_APPOINTMENT_GROUP_INPUT = {
  /**
   * Allow Observer Signup
   * @description `True` allows observer sign-ups, `False` disallows. Omit to keep existing.
   */
  allow_observer_signup?: boolean;
  /**
   * Appointment Group Id
   * @description Unique identifier of the appointment group to update.
   */
  appointment_group_id?: string;
  /**
   * Context Codes
   * @description Codes (e.g., 'course_123') linking to contexts like courses/groups. Omit to keep existing.
   */
  context_codes?: string[];
  /**
   * Description
   * @description Detailed description. Omit to keep existing.
   */
  description?: string;
  /**
   * Location Address
   * @description Physical/virtual address for location. Omit to keep existing.
   */
  location_address?: string;
  /**
   * Location Name
   * @description Location name (e.g., 'Room 301', 'Online Zoom'). Omit to keep existing.
   */
  location_name?: string;
  /**
   * Max Appointments Per Participant
   * @description Max slots a user may book. Omit to keep existing.
   */
  max_appointments_per_participant?: number;
  /**
   * Min Appointments Per Participant
   * @description Min slots a user must book. Omit to keep existing.
   */
  min_appointments_per_participant?: number;
  /**
   * Participant Visibility
   * @description Participant list visibility ('private' or 'protected'). Omit to keep existing.
   * @enum {string}
   */
  participant_visibility?: "private" | "protected";
  /**
   * Participants Per Appointment
   * @description Max participants per slot. Omit to keep existing.
   */
  participants_per_appointment?: number;
  /**
   * Publish
   * @description Set `True` to publish; `False` for draft. Defaults to `False` if omitted.
   * @default false
   */
  publish: boolean;
  /**
   * Sub Context Codes
   * @description Codes (e.g., 'section_abc') for sub-contexts like course sections. Omit to keep existing.
   */
  sub_context_codes?: string[];
  /**
   * Title
   * @description Short title. Omit to keep existing.
   */
  title?: string;
};

/**
 * Type of CANVAS's CANVAS_UPDATE_APPOINTMENT_GROUP tool output.
 */
type CANVAS_UPDATE_APPOINTMENT_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Detailed Canvas API response, usually the updated appointment group JSON.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_UPDATE_COURSE tool input.
 */
type CANVAS_UPDATE_COURSE_INPUT = {
  /**
   * Account Id
   * @description The ID of the account to which the course will be reassigned.
   */
  account_id?: number;
  /**
   * Allow Student Forum Attachments
   * @description If `true`, students can attach files to forum posts.
   */
  allow_student_forum_attachments?: boolean;
  /**
   * Allow Student Wiki Edits
   * @description If `true`, enrolled students can edit wiki pages.
   */
  allow_student_wiki_edits?: boolean;
  /**
   * Allow Wiki Comments
   * @description If `true`, course members can add comments to wiki pages.
   */
  allow_wiki_comments?: boolean;
  /**
   * Course Code
   * @description New course code.
   */
  course_code?: string;
  /**
   * Default View
   * @description Default landing page view when users navigate to the course.
   * @enum {string}
   */
  default_view?: "feed" | "wiki" | "modules" | "syllabus" | "assignments";
  /**
   * End At
   * Format: date-time
   * @description New end date in ISO8601 format.
   */
  end_at?: string;
  /**
   * Event
   * @description Lifecycle action for the course (e.g., 'conclude', 'offer', 'delete').
   * @enum {string}
   */
  event?: "claim" | "offer" | "conclude" | "delete" | "undelete";
  /**
   * Id
   * @description The ID of the course to update.
   */
  id?: string;
  /**
   * Is Public
   * @description If `true`, course is visible to all users (authenticated and unauthenticated).
   */
  is_public?: boolean;
  /**
   * Is Public To Auth Users
   * @description If `true`, course is visible only to authenticated users.
   */
  is_public_to_auth_users?: boolean;
  /**
   * License
   * @description New license for course content, defining usage.
   * @enum {string}
   */
  license?: "private" | "cc_by_nc_nd" | "cc_by_nc_sa" | "cc_by_nc" | "cc_by_nd" | "cc_by_sa" | "cc_by" | "public_domain";
  /**
   * Name
   * @description New name for the course.
   */
  name?: string;
  /**
   * Open Enrollment
   * @description If `true`, allows open enrollment where users can self-enroll without approval.
   */
  open_enrollment?: boolean;
  /**
   * Override Sis Stickiness
   * @description If `true`, API updates can override SIS-controlled fields; if `false`, updates to 'sticky' SIS fields are prevented.
   * @default true
   */
  override_sis_stickiness: boolean;
  /**
   * Public Description
   * @description Publicly visible description of course content or objectives.
   */
  public_description?: string;
  /**
   * Public Syllabus
   * @description If `true`, syllabus is publicly visible to everyone.
   */
  public_syllabus?: boolean;
  /**
   * Public Syllabus To Auth
   * @description If `true`, syllabus is visible only to authenticated users.
   */
  public_syllabus_to_auth?: boolean;
  /**
   * Restrict Enrollments To Course Dates
   * @description If `true`, enrollment is restricted to the course's start and end dates.
   */
  restrict_enrollments_to_course_dates?: boolean;
  /**
   * Self Enrollment
   * @description If `true`, allows users to self-enroll, often via a URL or code.
   */
  self_enrollment?: boolean;
  /**
   * Start At
   * Format: date-time
   * @description New start date in ISO8601 format.
   */
  start_at?: string;
  /**
   * Syllabus Body
   * @description HTML content for the course syllabus, replacing existing content.
   */
  syllabus_body?: string;
  /**
   * Term Id
   * @description ID of the academic term to associate with the course.
   */
  term_id?: number;
};

/**
 * Type of CANVAS's CANVAS_UPDATE_COURSE tool output.
 */
type CANVAS_UPDATE_COURSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the full representation of the updated course object, reflecting the changes made.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_UPDATE_COURSE_SETTINGS tool input.
 */
type CANVAS_UPDATE_COURSE_SETTINGS_INPUT = {
  /**
   * Allow Final Grade Override
   * @description If true, allows instructors to override the final grade for students for a grading period or the entire course.
   */
  allow_final_grade_override?: boolean;
  /**
   * Allow Student Anonymous Discussion Topics
   * @description If true, allows students to create discussion topics anonymously.
   */
  allow_student_anonymous_discussion_topics?: boolean;
  /**
   * Allow Student Discussion Editing
   * @description If true, allows students to edit or delete their own discussion posts and replies.
   */
  allow_student_discussion_editing?: boolean;
  /**
   * Allow Student Discussion Reporting
   * @description If true, allows students to report discussion content they deem offensive or inappropriate.
   */
  allow_student_discussion_reporting?: boolean;
  /**
   * Allow Student Discussion Topics
   * @description If true, allows students to create new discussion topics.
   */
  allow_student_discussion_topics?: boolean;
  /**
   * Allow Student Forum Attachments
   * @description If true, allows students to attach files to their discussion posts and replies.
   */
  allow_student_forum_attachments?: boolean;
  /**
   * Allow Student Organized Groups
   * @description If true, allows students to create and manage their own groups within the course.
   */
  allow_student_organized_groups?: boolean;
  /**
   * Conditional Release
   * @description If true, enables individual learning paths for students, allowing content to be released based on their performance on assessments or other criteria.
   */
  conditional_release?: boolean;
  /**
   * Course Id
   * @description The unique identifier for the course whose settings are to be updated.
   */
  course_id?: number;
  /**
   * Default Due Time
   * @description Sets the default due time for new assignments. This time will be pre-selected in the Canvas UI. Does not affect existing assignments. Format: HH:MM:SS (24-hour). Default is '23:59:59'. Use 'inherit' to use the account-level setting.
   */
  default_due_time?: string;
  /**
   * Filter Speed Grader By Student Group
   * @description If true, SpeedGrader will be filtered to display students only from the currently selected group.
   */
  filter_speed_grader_by_student_group?: boolean;
  /**
   * Hide Distribution Graphs
   * @description If true, hides grade distribution graphs from students' view.
   */
  hide_distribution_graphs?: boolean;
  /**
   * Hide Final Grades
   * @description If true, hides the total grades in the student grades summary page.
   */
  hide_final_grades?: boolean;
  /**
   * Hide Sections On Course Users Page
   * @description If true, prevents students from viewing other students in sections they are not enrolled in on the course users page.
   */
  hide_sections_on_course_users_page?: boolean;
  /**
   * Home Page Announcement Limit
   * @description Specifies the maximum number of announcements to display on the home page when `show_announcements_on_home_page` is enabled. Only applicable if the home page is a Wiki.
   */
  home_page_announcement_limit?: number;
  /**
   * Lock All Announcements
   * @description If true, disables comments on all course announcements.
   */
  lock_all_announcements?: boolean;
  /**
   * Restrict Student Future View
   * @description If true, restricts students from viewing the course content before the official course start date.
   */
  restrict_student_future_view?: boolean;
  /**
   * Restrict Student Past View
   * @description If true, restricts students from viewing the course content after the official course end date.
   */
  restrict_student_past_view?: boolean;
  /**
   * Show Announcements On Home Page
   * @description If true, displays the most recent course announcements on the course home page. For Wiki home pages, this defaults to five announcements but can be configured via `home_page_announcement_limit`. This setting is ignored by Canvas for Elementary subjects.
   */
  show_announcements_on_home_page?: boolean;
  /**
   * Syllabus Course Summary
   * @description If true (default), shows the course summary, including a list of assignments and calendar events, on the syllabus page.
   */
  syllabus_course_summary?: boolean;
  /**
   * Usage Rights Required
   * @description If true, requires copyright and license information to be provided for files before they can be published.
   */
  usage_rights_required?: boolean;
};

/**
 * Type of CANVAS's CANVAS_UPDATE_COURSE_SETTINGS tool output.
 */
type CANVAS_UPDATE_COURSE_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the updated course settings as returned by the Canvas API.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_UPDATE_FILE tool input.
 */
type CANVAS_UPDATE_FILE_INPUT = {
  /**
   * File Id
   * @description The unique identifier of the file to be updated.
   */
  file_id?: string;
  /**
   * Name
   * @description The new display name for the file. If this field is not provided or is null, the file's current name will be preserved.
   */
  name?: string;
  /**
   * On Duplicate
   * @description Defines the action to take if a file with the specified `name` already exists in the target `parent_folder_id`. Valid options are: 'rename' (the uploaded file will be renamed to avoid conflict, e.g., 'filename (1).txt') or 'overwrite' (the existing file will be replaced). If not provided or null, the Canvas API's default behavior for handling duplicates will apply.
   */
  on_duplicate?: string;
  /**
   * Parent Folder Id
   * @description ID of the folder to move the file to. Must be an existing folder in the same context as the file's original parent. Ignored if the context lacks folders (e.g., root user files) or if null (file stays in current location).
   */
  parent_folder_id?: string;
};

/**
 * Type of CANVAS's CANVAS_UPDATE_FILE tool output.
 */
type CANVAS_UPDATE_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the full JSON response from the Canvas API, typically including the updated attributes of the file.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_UPDATE_PAGE_FOR_COURSE tool input.
 */
type CANVAS_UPDATE_PAGE_FOR_COURSE_INPUT = {
  /**
   * Body
   * @description New HTML content for the page body. Retains existing if None.
   */
  body?: string;
  /**
   * Course Id
   * @description Identifier of the course containing the page.
   */
  course_id?: string;
  /**
   * Editing Roles
   * @description Comma-separated list of roles ('teachers', 'students', 'members', 'public') allowed to edit. Retains existing if None.
   */
  editing_roles?: string;
  /**
   * Front Page
   * @description Set as course front page (must be published). Retains existing status if None.
   */
  front_page?: boolean;
  /**
   * Notify Of Update
   * @description Notify course participants of the update. Retains existing preference if None.
   */
  notify_of_update?: boolean;
  /**
   * Published
   * @description Publish or unpublish the page. Retains existing status if None.
   */
  published?: boolean;
  /**
   * Title
   * @description New title for the page. Retains existing if None.
   */
  title?: string;
  /**
   * Url Or Id
   * @description URL (hyphenated string from title) or numeric ID of the page to update.
   */
  url_or_id?: string;
};

/**
 * Type of CANVAS's CANVAS_UPDATE_PAGE_FOR_COURSE tool output.
 */
type CANVAS_UPDATE_PAGE_FOR_COURSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full Canvas API response data for the updated page object.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_UPDATE_QUIZ_SUBMISSION_SCORES tool input.
 */
type CANVAS_UPDATE_QUIZ_SUBMISSION_SCORES_INPUT = {
  /**
   * Attempt
   * @description The specific attempt number of the quiz submission to update. The attempt must have been completed before scores can be updated.
   */
  attempt?: number;
  /**
   * Course Id
   * @description The unique identifier for the course to which the quiz submission belongs.
   */
  course_id?: string;
  /**
   * Fudge Points
   * @description A numerical value (positive or negative) used to manually adjust the total score of the quiz submission. This can be used for applying discretionary bonuses or penalties.
   */
  fudge_points?: number;
  /**
   * Id
   * @description The unique identifier for the quiz submission to be updated.
   */
  id?: string;
  /**
   * Questions
   * @description Scores and comments for individual questions. Keys are question identifiers; values are objects detailing 'score' (float) and 'comment' (string) for feedback, enabling detailed per-question grading.
   */
  questions?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
  /**
   * Quiz Id
   * @description The unique identifier for the quiz to which the submission belongs.
   */
  quiz_id?: string;
};

/**
 * Type of CANVAS's CANVAS_UPDATE_QUIZ_SUBMISSION_SCORES tool output.
 */
type CANVAS_UPDATE_QUIZ_SUBMISSION_SCORES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the complete response data from the API after the quiz submission scores have been updated. This typically includes details of the updated submission.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_UPDATE_USER_SETTINGS tool input.
 */
type CANVAS_UPDATE_USER_SETTINGS_INPUT = {
  /**
   * Collapse Course Nav
   * @description If `true`, course navigation menus will load collapsed by default.
   */
  collapse_course_nav?: boolean;
  /**
   * Collapse Global Nav
   * @description If `true`, the global navigation menu will load collapsed by default.
   */
  collapse_global_nav?: boolean;
  /**
   * Comment Library Suggestions Enabled
   * @description If `true`, suggestions from the comment library will be displayed when commenting.
   */
  comment_library_suggestions_enabled?: boolean;
  /**
   * Elementary Dashboard Disabled
   * @description If `true`, the classic Canvas dashboard view is displayed; `false` displays the Canvas for Elementary view.
   */
  elementary_dashboard_disabled?: boolean;
  /**
   * Hide Dashcard Color Overlays
   * @description If `true`, color overlays on dashboard course card images will be hidden.
   */
  hide_dashcard_color_overlays?: boolean;
  /**
   * Manual Mark As Read
   * @description If `true`, user must manually mark discussion posts as read; `false` means posts are marked read automatically upon viewing.
   */
  manual_mark_as_read?: boolean;
  /**
   * Release Notes Badge Disabled
   * @description If `true`, the badge indicating new release notes will be hidden.
   */
  release_notes_badge_disabled?: boolean;
  /**
   * User Id
   * @description The unique identifier of the user whose settings are to be updated.
   */
  user_id?: number;
};

/**
 * Type of CANVAS's CANVAS_UPDATE_USER_SETTINGS tool output.
 */
type CANVAS_UPDATE_USER_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Dictionary of updated user settings from the Canvas API, reflecting applied changes.
       */
      response_data?: {
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
 * Type of CANVAS's CANVAS_UPLOAD_COURSE_FILE tool input.
 */
type CANVAS_UPLOAD_COURSE_FILE_INPUT = {
  /**
   * Course Id
   * @description Unique identifier of the accessible Canvas course.
   */
  course_id?: string;
  /**
   * FileUploadable
   * @description File containing its name and readable content buffer.
   */
  file?: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  };
  /**
   * On Duplicate
   * @description Action for duplicate filenames: 'overwrite' or 'rename'. If unspecified, Canvas's default behavior applies.
   * @default null
   */
  on_duplicate: string | null;
  /**
   * Parent Folder Id
   * @description Unique ID of the target folder. If omitted, uploads to the course's root folder. Mutually exclusive with `parent_folder_path`.
   * @default null
   */
  parent_folder_id: number | null;
  /**
   * Parent Folder Path
   * @description Full path to the target folder (e.g., 'course_materials/week1'). If omitted, uploads to the course's root folder. Mutually exclusive with `parent_folder_id`.
   * @default null
   */
  parent_folder_path: string | null;
};

/**
 * Type of CANVAS's CANVAS_UPLOAD_COURSE_FILE tool output.
 */
type CANVAS_UPLOAD_COURSE_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Canvas API response upon successful upload, including file metadata (ID, name, size, type, URL).
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
 * Type of CANVAS's CANVAS_UPLOAD_SUBMISSION_FILE tool input.
 */
type CANVAS_UPLOAD_SUBMISSION_FILE_INPUT = {
  /**
   * Assignment Id
   * @description Identifier of the assignment for the submission.
   */
  assignment_id?: string;
  /**
   * Course Id
   * @description Identifier of the course containing the assignment.
   */
  course_id?: string;
  /**
   * FileUploadable
   * @description The file to upload as the submission.
   */
  file?: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  };
  /**
   * User Id
   * @description Identifier of the user (e.g., student) making the submission; use 'self' for the currently authenticated user.
   */
  user_id?: string;
};

/**
 * Type of CANVAS's CANVAS_UPLOAD_SUBMISSION_FILE tool output.
 */
type CANVAS_UPLOAD_SUBMISSION_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Canvas API response upon successful file upload and submission, including details like file ID, name, size, content type, URLs, and submission status.
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
 * Type map of all available tool input types for toolkit "CANVAS".
 */
export type CANVAS_TOOL_INPUTS = {
  CREATE_ACCOUNT_NOTIFICATION: CANVAS_CREATE_ACCOUNT_NOTIFICATION_INPUT
  CREATE_APPOINTMENT_GROUP: CANVAS_CREATE_APPOINTMENT_GROUP_INPUT
  CREATE_ASSIGNMENT: CANVAS_CREATE_ASSIGNMENT_INPUT
  CREATE_ASSIGNMENT_OVERRIDE: CANVAS_CREATE_ASSIGNMENT_OVERRIDE_INPUT
  CREATE_CALENDAR_EVENT: CANVAS_CREATE_CALENDAR_EVENT_INPUT
  CREATE_COMMUNICATION_CHANNEL: CANVAS_CREATE_COMMUNICATION_CHANNEL_INPUT
  CREATE_CONTENT_SHARE: CANVAS_CREATE_CONTENT_SHARE_INPUT
  CREATE_CONVERSATION: CANVAS_CREATE_CONVERSATION_INPUT
  CREATE_COURSE: CANVAS_CREATE_COURSE_INPUT
  CREATE_DISCUSSION_ENTRY: CANVAS_CREATE_DISCUSSION_ENTRY_INPUT
  CREATE_DISCUSSION_TOPIC: CANVAS_CREATE_DISCUSSION_TOPIC_INPUT
  CREATE_ENROLLMENT: CANVAS_CREATE_ENROLLMENT_INPUT
  CREATE_FOLDER: CANVAS_CREATE_FOLDER_INPUT
  CREATE_MODULE: CANVAS_CREATE_MODULE_INPUT
  CREATE_PAGE_FOR_COURSE: CANVAS_CREATE_PAGE_FOR_COURSE_INPUT
  CREATE_QUIZ: CANVAS_CREATE_QUIZ_INPUT
  CREATE_QUIZ_QUESTION: CANVAS_CREATE_QUIZ_QUESTION_INPUT
  DELETE_APPOINTMENT_GROUP: CANVAS_DELETE_APPOINTMENT_GROUP_INPUT
  DELETE_ASSIGNMENT: CANVAS_DELETE_ASSIGNMENT_INPUT
  DELETE_FOLDER: CANVAS_DELETE_FOLDER_INPUT
  DELETE_QUIZ: CANVAS_DELETE_QUIZ_INPUT
  DEPARTMENT_LEVEL_GRADE_DATA_FOR_CURRENT_GRADES: CANVAS_DEPARTMENT_LEVEL_GRADE_DATA_FOR_CURRENT_GRADES_INPUT
  DEPARTMENT_LEVEL_GRADE_DATA_FOR_TERM_GRADES: CANVAS_DEPARTMENT_LEVEL_GRADE_DATA_FOR_TERM_GRADES_INPUT
  EDIT_ASSIGNMENT: CANVAS_EDIT_ASSIGNMENT_INPUT
  EDIT_QUIZ: CANVAS_EDIT_QUIZ_INPUT
  EXPORT_CONTENT: CANVAS_EXPORT_CONTENT_INPUT
  FETCH_DATA: CANVAS_FETCH_DATA_INPUT
  GET_ACCOUNTS: CANVAS_GET_ACCOUNTS_INPUT
  GET_ALL_ASSIGNMENTS: CANVAS_GET_ALL_ASSIGNMENTS_INPUT
  GET_ALL_USERS: CANVAS_GET_ALL_USERS_INPUT
  GET_ASSIGNMENT: CANVAS_GET_ASSIGNMENT_INPUT
  GET_ASSIGNMENT_RUBRIC: CANVAS_GET_ASSIGNMENT_RUBRIC_INPUT
  GET_COURSE_LEVEL_PARTICIPATION_DATA: CANVAS_GET_COURSE_LEVEL_PARTICIPATION_DATA_INPUT
  GET_CURRENT_USER: CANVAS_GET_CURRENT_USER_INPUT
  GET_DEPARTMENT_LEVEL_COMPLETED_STATISTICS: CANVAS_GET_DEPARTMENT_LEVEL_COMPLETED_STATISTICS_INPUT
  GET_DEPARTMENT_LEVEL_CURRENT_STATISTICS: CANVAS_GET_DEPARTMENT_LEVEL_CURRENT_STATISTICS_INPUT
  GET_DEPARTMENT_LEVEL_GRADE_DATA_COMPLETED_GRADES: CANVAS_GET_DEPARTMENT_LEVEL_GRADE_DATA_COMPLETED_GRADES_INPUT
  GET_DEPARTMENT_LEVEL_TERM_STATISTICS: CANVAS_GET_DEPARTMENT_LEVEL_TERM_STATISTICS_INPUT
  GET_ENROLLMENT_BY_ID: CANVAS_GET_ENROLLMENT_BY_ID_INPUT
  GET_GRADEBOOK_HISTORY_DAYS: CANVAS_GET_GRADEBOOK_HISTORY_DAYS_INPUT
  GET_PAGE_FOR_COURSE: CANVAS_GET_PAGE_FOR_COURSE_INPUT
  GET_QUIZ_SUBMISSIONS: CANVAS_GET_QUIZ_SUBMISSIONS_INPUT
  GET_REPORT_STATUS: CANVAS_GET_REPORT_STATUS_INPUT
  GET_SINGLE_COURSE: CANVAS_GET_SINGLE_COURSE_INPUT
  GET_SINGLE_SUBMISSION: CANVAS_GET_SINGLE_SUBMISSION_INPUT
  GET_SUBMISSION_FILES: CANVAS_GET_SUBMISSION_FILES_INPUT
  GET_USER_ASSIGNMENT_ANALYTICS: CANVAS_GET_USER_ASSIGNMENT_ANALYTICS_INPUT
  GET_USER_COURSE_PROGRESS: CANVAS_GET_USER_COURSE_PROGRESS_INPUT
  GET_USER_PARTICIPATION_ANALYTICS: CANVAS_GET_USER_PARTICIPATION_ANALYTICS_INPUT
  GET_USER_PROFILE: CANVAS_GET_USER_PROFILE_INPUT
  GRADE_COMMENT_SUBMISSION: CANVAS_GRADE_COMMENT_SUBMISSION_INPUT
  LIST_ACCOUNTS_FOR_COURSE_ADMINS: CANVAS_LIST_ACCOUNTS_FOR_COURSE_ADMINS_INPUT
  LIST_ALL_FOLDERS: CANVAS_LIST_ALL_FOLDERS_INPUT
  LIST_APPOINTMENT_GROUPS: CANVAS_LIST_APPOINTMENT_GROUPS_INPUT
  LIST_ASSIGNMENT_SUBMISSIONS: CANVAS_LIST_ASSIGNMENT_SUBMISSIONS_INPUT
  LIST_AVAILABLE_REPORTS: CANVAS_LIST_AVAILABLE_REPORTS_INPUT
  LIST_CALENDAR_EVENTS_FOR_USER: CANVAS_LIST_CALENDAR_EVENTS_FOR_USER_INPUT
  LIST_COMMUNICATION_CHANNELS: CANVAS_LIST_COMMUNICATION_CHANNELS_INPUT
  LIST_COMM_MESSAGES: CANVAS_LIST_COMM_MESSAGES_INPUT
  LIST_CONTENT_EXPORTS: CANVAS_LIST_CONTENT_EXPORTS_INPUT
  LIST_COURSES: CANVAS_LIST_COURSES_INPUT
  LIST_COURSES_FOR_USER: CANVAS_LIST_COURSES_FOR_USER_INPUT
  LIST_COURSE_USERS: CANVAS_LIST_COURSE_USERS_INPUT
  LIST_DISCUSSION_ENTRIES: CANVAS_LIST_DISCUSSION_ENTRIES_INPUT
  LIST_DISCUSSION_TOPICS: CANVAS_LIST_DISCUSSION_TOPICS_INPUT
  LIST_FILES: CANVAS_LIST_FILES_INPUT
  LIST_FOLDERS: CANVAS_LIST_FOLDERS_INPUT
  LIST_PAGES_FOR_COURSE: CANVAS_LIST_PAGES_FOR_COURSE_INPUT
  LIST_QUIZZES_IN_COURSE: CANVAS_LIST_QUIZZES_IN_COURSE_INPUT
  LIST_SENT_CONTENT_SHARES: CANVAS_LIST_SENT_CONTENT_SHARES_INPUT
  LIST_SUBMISSIONS: CANVAS_LIST_SUBMISSIONS_INPUT
  LIST_SUBMISSIONSFOR_MULTIPLE_ASSIGNMENTS: CANVAS_LIST_SUBMISSIONSFOR_MULTIPLE_ASSIGNMENTS_INPUT
  LIST_UNCOLLATED_SUBMISSION_VERSIONS: CANVAS_LIST_UNCOLLATED_SUBMISSION_VERSIONS_INPUT
  LIST_USERS_IN_ACCOUNT: CANVAS_LIST_USERS_IN_ACCOUNT_INPUT
  REPLY_TO_DISCUSSION_ENTRY: CANVAS_REPLY_TO_DISCUSSION_ENTRY_INPUT
  RETRIEVE_ENROLLMENT_TERM: CANVAS_RETRIEVE_ENROLLMENT_TERM_INPUT
  START_REPORT: CANVAS_START_REPORT_INPUT
  TRANSLATE_FILE_REFERENCE: CANVAS_TRANSLATE_FILE_REFERENCE_INPUT
  UPDATE_APPOINTMENT_GROUP: CANVAS_UPDATE_APPOINTMENT_GROUP_INPUT
  UPDATE_COURSE: CANVAS_UPDATE_COURSE_INPUT
  UPDATE_COURSE_SETTINGS: CANVAS_UPDATE_COURSE_SETTINGS_INPUT
  UPDATE_FILE: CANVAS_UPDATE_FILE_INPUT
  UPDATE_PAGE_FOR_COURSE: CANVAS_UPDATE_PAGE_FOR_COURSE_INPUT
  UPDATE_QUIZ_SUBMISSION_SCORES: CANVAS_UPDATE_QUIZ_SUBMISSION_SCORES_INPUT
  UPDATE_USER_SETTINGS: CANVAS_UPDATE_USER_SETTINGS_INPUT
  UPLOAD_COURSE_FILE: CANVAS_UPLOAD_COURSE_FILE_INPUT
  UPLOAD_SUBMISSION_FILE: CANVAS_UPLOAD_SUBMISSION_FILE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CANVAS".
 */
export type CANVAS_TOOL_OUTPUTS = {
  CREATE_ACCOUNT_NOTIFICATION: CANVAS_CREATE_ACCOUNT_NOTIFICATION_OUTPUT
  CREATE_APPOINTMENT_GROUP: CANVAS_CREATE_APPOINTMENT_GROUP_OUTPUT
  CREATE_ASSIGNMENT: CANVAS_CREATE_ASSIGNMENT_OUTPUT
  CREATE_ASSIGNMENT_OVERRIDE: CANVAS_CREATE_ASSIGNMENT_OVERRIDE_OUTPUT
  CREATE_CALENDAR_EVENT: CANVAS_CREATE_CALENDAR_EVENT_OUTPUT
  CREATE_COMMUNICATION_CHANNEL: CANVAS_CREATE_COMMUNICATION_CHANNEL_OUTPUT
  CREATE_CONTENT_SHARE: CANVAS_CREATE_CONTENT_SHARE_OUTPUT
  CREATE_CONVERSATION: CANVAS_CREATE_CONVERSATION_OUTPUT
  CREATE_COURSE: CANVAS_CREATE_COURSE_OUTPUT
  CREATE_DISCUSSION_ENTRY: CANVAS_CREATE_DISCUSSION_ENTRY_OUTPUT
  CREATE_DISCUSSION_TOPIC: CANVAS_CREATE_DISCUSSION_TOPIC_OUTPUT
  CREATE_ENROLLMENT: CANVAS_CREATE_ENROLLMENT_OUTPUT
  CREATE_FOLDER: CANVAS_CREATE_FOLDER_OUTPUT
  CREATE_MODULE: CANVAS_CREATE_MODULE_OUTPUT
  CREATE_PAGE_FOR_COURSE: CANVAS_CREATE_PAGE_FOR_COURSE_OUTPUT
  CREATE_QUIZ: CANVAS_CREATE_QUIZ_OUTPUT
  CREATE_QUIZ_QUESTION: CANVAS_CREATE_QUIZ_QUESTION_OUTPUT
  DELETE_APPOINTMENT_GROUP: CANVAS_DELETE_APPOINTMENT_GROUP_OUTPUT
  DELETE_ASSIGNMENT: CANVAS_DELETE_ASSIGNMENT_OUTPUT
  DELETE_FOLDER: CANVAS_DELETE_FOLDER_OUTPUT
  DELETE_QUIZ: CANVAS_DELETE_QUIZ_OUTPUT
  DEPARTMENT_LEVEL_GRADE_DATA_FOR_CURRENT_GRADES: CANVAS_DEPARTMENT_LEVEL_GRADE_DATA_FOR_CURRENT_GRADES_OUTPUT
  DEPARTMENT_LEVEL_GRADE_DATA_FOR_TERM_GRADES: CANVAS_DEPARTMENT_LEVEL_GRADE_DATA_FOR_TERM_GRADES_OUTPUT
  EDIT_ASSIGNMENT: CANVAS_EDIT_ASSIGNMENT_OUTPUT
  EDIT_QUIZ: CANVAS_EDIT_QUIZ_OUTPUT
  EXPORT_CONTENT: CANVAS_EXPORT_CONTENT_OUTPUT
  FETCH_DATA: CANVAS_FETCH_DATA_OUTPUT
  GET_ACCOUNTS: CANVAS_GET_ACCOUNTS_OUTPUT
  GET_ALL_ASSIGNMENTS: CANVAS_GET_ALL_ASSIGNMENTS_OUTPUT
  GET_ALL_USERS: CANVAS_GET_ALL_USERS_OUTPUT
  GET_ASSIGNMENT: CANVAS_GET_ASSIGNMENT_OUTPUT
  GET_ASSIGNMENT_RUBRIC: CANVAS_GET_ASSIGNMENT_RUBRIC_OUTPUT
  GET_COURSE_LEVEL_PARTICIPATION_DATA: CANVAS_GET_COURSE_LEVEL_PARTICIPATION_DATA_OUTPUT
  GET_CURRENT_USER: CANVAS_GET_CURRENT_USER_OUTPUT
  GET_DEPARTMENT_LEVEL_COMPLETED_STATISTICS: CANVAS_GET_DEPARTMENT_LEVEL_COMPLETED_STATISTICS_OUTPUT
  GET_DEPARTMENT_LEVEL_CURRENT_STATISTICS: CANVAS_GET_DEPARTMENT_LEVEL_CURRENT_STATISTICS_OUTPUT
  GET_DEPARTMENT_LEVEL_GRADE_DATA_COMPLETED_GRADES: CANVAS_GET_DEPARTMENT_LEVEL_GRADE_DATA_COMPLETED_GRADES_OUTPUT
  GET_DEPARTMENT_LEVEL_TERM_STATISTICS: CANVAS_GET_DEPARTMENT_LEVEL_TERM_STATISTICS_OUTPUT
  GET_ENROLLMENT_BY_ID: CANVAS_GET_ENROLLMENT_BY_ID_OUTPUT
  GET_GRADEBOOK_HISTORY_DAYS: CANVAS_GET_GRADEBOOK_HISTORY_DAYS_OUTPUT
  GET_PAGE_FOR_COURSE: CANVAS_GET_PAGE_FOR_COURSE_OUTPUT
  GET_QUIZ_SUBMISSIONS: CANVAS_GET_QUIZ_SUBMISSIONS_OUTPUT
  GET_REPORT_STATUS: CANVAS_GET_REPORT_STATUS_OUTPUT
  GET_SINGLE_COURSE: CANVAS_GET_SINGLE_COURSE_OUTPUT
  GET_SINGLE_SUBMISSION: CANVAS_GET_SINGLE_SUBMISSION_OUTPUT
  GET_SUBMISSION_FILES: CANVAS_GET_SUBMISSION_FILES_OUTPUT
  GET_USER_ASSIGNMENT_ANALYTICS: CANVAS_GET_USER_ASSIGNMENT_ANALYTICS_OUTPUT
  GET_USER_COURSE_PROGRESS: CANVAS_GET_USER_COURSE_PROGRESS_OUTPUT
  GET_USER_PARTICIPATION_ANALYTICS: CANVAS_GET_USER_PARTICIPATION_ANALYTICS_OUTPUT
  GET_USER_PROFILE: CANVAS_GET_USER_PROFILE_OUTPUT
  GRADE_COMMENT_SUBMISSION: CANVAS_GRADE_COMMENT_SUBMISSION_OUTPUT
  LIST_ACCOUNTS_FOR_COURSE_ADMINS: CANVAS_LIST_ACCOUNTS_FOR_COURSE_ADMINS_OUTPUT
  LIST_ALL_FOLDERS: CANVAS_LIST_ALL_FOLDERS_OUTPUT
  LIST_APPOINTMENT_GROUPS: CANVAS_LIST_APPOINTMENT_GROUPS_OUTPUT
  LIST_ASSIGNMENT_SUBMISSIONS: CANVAS_LIST_ASSIGNMENT_SUBMISSIONS_OUTPUT
  LIST_AVAILABLE_REPORTS: CANVAS_LIST_AVAILABLE_REPORTS_OUTPUT
  LIST_CALENDAR_EVENTS_FOR_USER: CANVAS_LIST_CALENDAR_EVENTS_FOR_USER_OUTPUT
  LIST_COMMUNICATION_CHANNELS: CANVAS_LIST_COMMUNICATION_CHANNELS_OUTPUT
  LIST_COMM_MESSAGES: CANVAS_LIST_COMM_MESSAGES_OUTPUT
  LIST_CONTENT_EXPORTS: CANVAS_LIST_CONTENT_EXPORTS_OUTPUT
  LIST_COURSES: CANVAS_LIST_COURSES_OUTPUT
  LIST_COURSES_FOR_USER: CANVAS_LIST_COURSES_FOR_USER_OUTPUT
  LIST_COURSE_USERS: CANVAS_LIST_COURSE_USERS_OUTPUT
  LIST_DISCUSSION_ENTRIES: CANVAS_LIST_DISCUSSION_ENTRIES_OUTPUT
  LIST_DISCUSSION_TOPICS: CANVAS_LIST_DISCUSSION_TOPICS_OUTPUT
  LIST_FILES: CANVAS_LIST_FILES_OUTPUT
  LIST_FOLDERS: CANVAS_LIST_FOLDERS_OUTPUT
  LIST_PAGES_FOR_COURSE: CANVAS_LIST_PAGES_FOR_COURSE_OUTPUT
  LIST_QUIZZES_IN_COURSE: CANVAS_LIST_QUIZZES_IN_COURSE_OUTPUT
  LIST_SENT_CONTENT_SHARES: CANVAS_LIST_SENT_CONTENT_SHARES_OUTPUT
  LIST_SUBMISSIONS: CANVAS_LIST_SUBMISSIONS_OUTPUT
  LIST_SUBMISSIONSFOR_MULTIPLE_ASSIGNMENTS: CANVAS_LIST_SUBMISSIONSFOR_MULTIPLE_ASSIGNMENTS_OUTPUT
  LIST_UNCOLLATED_SUBMISSION_VERSIONS: CANVAS_LIST_UNCOLLATED_SUBMISSION_VERSIONS_OUTPUT
  LIST_USERS_IN_ACCOUNT: CANVAS_LIST_USERS_IN_ACCOUNT_OUTPUT
  REPLY_TO_DISCUSSION_ENTRY: CANVAS_REPLY_TO_DISCUSSION_ENTRY_OUTPUT
  RETRIEVE_ENROLLMENT_TERM: CANVAS_RETRIEVE_ENROLLMENT_TERM_OUTPUT
  START_REPORT: CANVAS_START_REPORT_OUTPUT
  TRANSLATE_FILE_REFERENCE: CANVAS_TRANSLATE_FILE_REFERENCE_OUTPUT
  UPDATE_APPOINTMENT_GROUP: CANVAS_UPDATE_APPOINTMENT_GROUP_OUTPUT
  UPDATE_COURSE: CANVAS_UPDATE_COURSE_OUTPUT
  UPDATE_COURSE_SETTINGS: CANVAS_UPDATE_COURSE_SETTINGS_OUTPUT
  UPDATE_FILE: CANVAS_UPDATE_FILE_OUTPUT
  UPDATE_PAGE_FOR_COURSE: CANVAS_UPDATE_PAGE_FOR_COURSE_OUTPUT
  UPDATE_QUIZ_SUBMISSION_SCORES: CANVAS_UPDATE_QUIZ_SUBMISSION_SCORES_OUTPUT
  UPDATE_USER_SETTINGS: CANVAS_UPDATE_USER_SETTINGS_OUTPUT
  UPLOAD_COURSE_FILE: CANVAS_UPLOAD_COURSE_FILE_OUTPUT
  UPLOAD_SUBMISSION_FILE: CANVAS_UPLOAD_SUBMISSION_FILE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Type of CANVAS's ASSIGNMENT_GRADED_TRIGGER trigger payload.
 */
type CANVAS_ASSIGNMENT_GRADED_TRIGGER_PAYLOAD = {
  /**
   * Grade
   * @description The grade for the submission.
   * @default null
   */
  grade: string | null;
  /**
   * Is Graded
   * @description Whether the submission has been graded.
   */
  is_graded?: boolean;
  /**
   * User Id
   * @description The ID of the user who submitted the assignment.
   */
  user_id?: number;
};

/**
 * Type of CANVAS's NEW_ASSIGNMENT_SUBMISSION_TRIGGER trigger payload.
 */
type CANVAS_NEW_ASSIGNMENT_SUBMISSION_TRIGGER_PAYLOAD = {
  /**
   * Grade
   * @description The grade, if graded.
   * @default null
   */
  grade: string | null;
  /**
   * Id
   * @description The ID of the submission.
   */
  id?: number;
  /**
   * Late
   * @description Whether the submission was late.
   */
  late?: boolean;
  /**
   * Preview Url
   * @description URL to preview the submission.
   */
  preview_url?: string;
  /**
   * Submission Type
   * @description The type of submission (online_text_entry, online_upload, etc).
   * @default null
   */
  submission_type: string | null;
  /**
   * Submitted At
   * @description When the submission was made.
   * @default null
   */
  submitted_at: string | null;
  /**
   * User Id
   * @description The ID of the user who submitted the assignment.
   */
  user_id?: number;
  /**
   * Workflow State
   * @description The state of the submission (submitted, unsubmitted, graded, etc).
   */
  workflow_state?: string;
};

/**
 * Type of CANVAS's NEW_CANVAS_DISCUSSION_MESSAGE_TRIGGER trigger payload.
 */
type CANVAS_NEW_CANVAS_DISCUSSION_MESSAGE_TRIGGER_PAYLOAD = {
  /**
   * Course Id
   * @description The course ID the discussion belongs to.
   */
  course_id?: number;
  /**
   * Created At
   * @description When the entry was created.
   * @default null
   */
  created_at: string | null;
  /**
   * Id
   * @description The ID of the discussion entry.
   */
  id?: number;
  /**
   * Message
   * @description The content of the discussion entry.
   * @default
   */
  message: string;
  /**
   * Parent Id
   * @description Parent entry ID if this is a reply.
   * @default null
   */
  parent_id: number | null;
  /**
   * Raw Entry
   * @description The raw API response for this entry.
   */
  raw_entry?: {
      [key: string]: unknown;
  };
  /**
   * Topic Id
   * @description The discussion topic ID this entry belongs to.
   */
  topic_id?: number;
  /**
   * Updated At
   * @description When the entry was last updated.
   * @default null
   */
  updated_at: string | null;
  /**
   * User Id
   * @description User ID of the entry author.
   * @default null
   */
  user_id: number | null;
  /**
   * User Name
   * @description The name of the user who posted the entry.
   * @default null
   */
  user_name: string | null;
};

/**
 * Type of CANVAS's NEW_CANVAS_DISCUSSION_TRIGGER trigger payload.
 */
type CANVAS_NEW_CANVAS_DISCUSSION_TRIGGER_PAYLOAD = {
  /**
   * Event Type
   * @description Type of discussion event
   * @default new_discussion
   */
  event_type: string;
  /**
   * Topic
   * @description The discussion topic that was created
   */
  topic?: {
      /**
       * Author
       * @description Author information if available.
       * @default null
       */
      author: {
          [key: string]: unknown;
      } | null;
      /**
       * Course Id
       * @description The course ID the discussion belongs to.
       */
      course_id: number;
      /**
       * Id
       * @description The ID of the discussion topic.
       */
      id: number;
      /**
       * Posted At
       * @description When the discussion topic was posted.
       * @default null
       */
      posted_at: string | null;
      /**
       * Title
       * @description The title of the discussion topic.
       */
      title: string;
      /**
       * User Id
       * @description User ID of the discussion author.
       * @default null
       */
      user_id: number | null;
  };
};

/**
 * Type of CANVAS's NEW_COURSE_CREATED_TRIGGER trigger payload.
 */
type CANVAS_NEW_COURSE_CREATED_TRIGGER_PAYLOAD = {
  /**
   * Account Id
   * @description The account ID the course belongs to.
   * @default null
   */
  account_id: number | null;
  /**
   * Course Code
   * @description The course code.
   * @default null
   */
  course_code: string | null;
  /**
   * Created At
   * @description When the course was created.
   * @default null
   */
  created_at: string | null;
  /**
   * End At
   * @description When the course ends.
   * @default null
   */
  end_at: string | null;
  /**
   * Enrollment Term Id
   * @description The term ID for this course.
   * @default null
   */
  enrollment_term_id: number | null;
  /**
   * Id
   * @description The ID of the course.
   */
  id?: number;
  /**
   * Name
   * @description The name of the course.
   */
  name?: string;
  /**
   * Start At
   * @description When the course starts.
   * @default null
   */
  start_at: string | null;
  /**
   * Time Zone
   * @description The time zone of the course.
   * @default null
   */
  time_zone: string | null;
  /**
   * Workflow State
   * @description The state of the course.
   * @default null
   */
  workflow_state: string | null;
};

/**
 * Type of CANVAS's NEW_FILE_UPLOADED_TRIGGER trigger payload.
 */
type CANVAS_NEW_FILE_UPLOADED_TRIGGER_PAYLOAD = {
  /**
   * New Files
   * @description The new files uploaded to Canvas.
   */
  new_files?: {
      /**
       * Content Type
       * @description The content type of the file.
       * @default null
       */
      content_type: string | null;
      /**
       * Created At
       * @description When the file was created.
       * @default null
       */
      created_at: string | null;
      /**
       * Display Name
       * @description The display name of the file.
       */
      display_name: string;
      /**
       * Filename
       * @description The filename of the uploaded file.
       */
      filename: string;
      /**
       * Folder Id
       * @description The ID of the folder containing the file.
       * @default null
       */
      folder_id: number | null;
      /**
       * Id
       * @description The ID of the file.
       */
      id: number;
      /**
       * Size
       * @description The size of the file in bytes.
       * @default null
       */
      size: number | null;
      /**
       * Url
       * @description The URL to download the file.
       * @default null
       */
      url: string | null;
  }[];
};

/**
 * Map of Composio's CANVAS toolkit.
 */
export const CANVAS = {
  slug: "canvas",
  tools: {
    /**
     * Creates a global notification within a canvas account, ensuring `end at` is after `start at` and any specified `notification roles` are valid.
     */
    CREATE_ACCOUNT_NOTIFICATION: "CANVAS_CREATE_ACCOUNT_NOTIFICATION",
    /**
     * Creates a new appointment group in canvas for schedulable time slots within specified course or group contexts.
     */
    CREATE_APPOINTMENT_GROUP: "CANVAS_CREATE_APPOINTMENT_GROUP",
    /**
     * Creates a new assignment within a specified course in canvas lms.
     */
    CREATE_ASSIGNMENT: "CANVAS_CREATE_ASSIGNMENT",
    /**
     * Creates an assignment override to adjust due/unlock/lock dates for an assignment in a course, targeting specific students (requires `title`), a group, or a course section; at least one target (`student ids`, `group id`, or `course section id`) is required.
     */
    CREATE_ASSIGNMENT_OVERRIDE: "CANVAS_CREATE_ASSIGNMENT_OVERRIDE",
    /**
     * Creates a calendar event with options for recurrence (finite `rrule` series only), section-specific timings, and blackout dates within a specified context.
     */
    CREATE_CALENDAR_EVENT: "CANVAS_CREATE_CALENDAR_EVENT",
    /**
     * Creates a new communication channel (e.g., email, sms, push) for an existing canvas user to receive notifications.
     */
    CREATE_COMMUNICATION_CHANNEL: "CANVAS_CREATE_COMMUNICATION_CHANNEL",
    /**
     * Shares a canvas content item to specified users, if the sender has necessary permissions and receiver ids are valid.
     */
    CREATE_CONTENT_SHARE: "CANVAS_CREATE_CONTENT_SHARE",
    /**
     * Use to send messages in canvas by creating a new conversation or adding to an existing one; an existing conversation with the same recipients (and matching scope/filter, if specified) may be reused unless `force new` is true.
     */
    CREATE_CONVERSATION: "CANVAS_CREATE_CONVERSATION",
    /**
     * Creates a new course in canvas within a specified account, with comprehensive configuration options.
     */
    CREATE_COURSE: "CANVAS_CREATE_COURSE",
    /**
     * Tool to create a new entry in a canvas discussion topic. use when posting a message with optional attachments to a discussion topic.
     */
    CREATE_DISCUSSION_ENTRY: "CANVAS_CREATE_DISCUSSION_ENTRY",
    /**
     * Creates a new discussion topic in a specified canvas course, allowing comprehensive configuration of its content, type, publication settings, engagement features, and associations.
     */
    CREATE_DISCUSSION_TOPIC: "CANVAS_CREATE_DISCUSSION_TOPIC",
    /**
     * Enrolls a user in a canvas course with a specified role and status; `associated user id` is required if `enrollment type` is 'observerenrollment'.
     */
    CREATE_ENROLLMENT: "CANVAS_CREATE_ENROLLMENT",
    /**
     * Creates a new folder in canvas within a specified context (e.g., course, user) and optional parent folder; ensure the context and any parent folder (specified by id or path, not both) already exist.
     */
    CREATE_FOLDER: "CANVAS_CREATE_FOLDER",
    /**
     * Creates a new organizational module within a specified canvas lms course, with options for availability, sequencing, and prerequisites.
     */
    CREATE_MODULE: "CANVAS_CREATE_MODULE",
    /**
     * Creates a new wiki page in a specified canvas course, with options for title, html body, editing permissions, publication, and designation as front page (which also requires publication).
     */
    CREATE_PAGE_FOR_COURSE: "CANVAS_CREATE_PAGE_FOR_COURSE",
    /**
     * Creates a new quiz with various settings in a specified existing canvas course; `assignment group id` applies only to graded quiz types.
     */
    CREATE_QUIZ: "CANVAS_CREATE_QUIZ",
    /**
     * Creates a new question for an existing quiz within a course; if `answers` are provided, their structure must align with `question type`, and any `quiz group id` must be valid for an existing group in the quiz.
     */
    CREATE_QUIZ_QUESTION: "CANVAS_CREATE_QUIZ_QUESTION",
    /**
     * Permanently deletes an existing appointment group by its id; associated appointments may also be canceled or affected.
     */
    DELETE_APPOINTMENT_GROUP: "CANVAS_DELETE_APPOINTMENT_GROUP",
    /**
     * Soft-deletes a specific assignment within a course, returning the assignment object with its `workflow state` updated to 'deleted'.
     */
    DELETE_ASSIGNMENT: "CANVAS_DELETE_ASSIGNMENT",
    /**
     * Permanently deletes an existing folder specified by its unique id.
     */
    DELETE_FOLDER: "CANVAS_DELETE_FOLDER",
    /**
     * Permanently deletes the quiz identified by `quiz id` from the course identified by `course id`; this action cannot be undone.
     */
    DELETE_QUIZ: "CANVAS_DELETE_QUIZ",
    /**
     * Fetches current, aggregated grade data from canvas analytics for a specified account id.
     */
    DEPARTMENT_LEVEL_GRADE_DATA_FOR_CURRENT_GRADES: "CANVAS_DEPARTMENT_LEVEL_GRADE_DATA_FOR_CURRENT_GRADES",
    /**
     * Retrieves department-level aggregated grade data for a specific academic term within a canvas account.
     */
    DEPARTMENT_LEVEL_GRADE_DATA_FOR_TERM_GRADES: "CANVAS_DEPARTMENT_LEVEL_GRADE_DATA_FOR_TERM_GRADES",
    /**
     * Updates an existing assignment in a canvas course (identified by `course id` and `assignment id`); only attributes explicitly provided in the request are modified.
     */
    EDIT_ASSIGNMENT: "CANVAS_EDIT_ASSIGNMENT",
    /**
     * Modifies an existing canvas quiz; only attributes with provided values in the request are updated.
     */
    EDIT_QUIZ: "CANVAS_EDIT_QUIZ",
    /**
     * Use to initiate an asynchronous export of content (e.g., common cartridge, qti, zip) from an existing canvas course, returning an export id and progress url.
     */
    EXPORT_CONTENT: "CANVAS_EXPORT_CONTENT",
    /**
     * Fetches a specific category of canvas data (e.g., accounts, courses, users) by setting exactly one `get *` boolean flag to true and providing any associated ids. supports pagination with per page (default 100, max 100) and page (default 1) parameters to fetch large datasets.
     */
    FETCH_DATA: "CANVAS_FETCH_DATA",
    /**
     * Retrieves all canvas accounts accessible to the authenticated user.
     */
    GET_ACCOUNTS: "CANVAS_GET_ACCOUNTS",
    /**
     * Retrieves assignments for a specified canvas course.
     */
    GET_ALL_ASSIGNMENTS: "CANVAS_GET_ALL_ASSIGNMENTS",
    /**
     * Retrieves a list of users for a specified canvas `account id` (use 'self' for the current user's root account), supporting filtering, sorting, and pagination.
     */
    GET_ALL_USERS: "CANVAS_GET_ALL_USERS",
    /**
     * Retrieves detailed information for a specific assignment within a given course in canvas.
     */
    GET_ASSIGNMENT: "CANVAS_GET_ASSIGNMENT",
    /**
     * Fetches the detailed rubric for a specified assignment within a canvas course; fails if the assignment has no associated rubric.
     */
    GET_ASSIGNMENT_RUBRIC: "CANVAS_GET_ASSIGNMENT_RUBRIC",
    /**
     * Retrieves daily activity analytics, such as page views and participation events, for a specified canvas course.
     */
    GET_COURSE_LEVEL_PARTICIPATION_DATA: "CANVAS_GET_COURSE_LEVEL_PARTICIPATION_DATA",
    /**
     * Retrieves detailed information about the currently authenticated user from the canvas lms.
     */
    GET_CURRENT_USER: "CANVAS_GET_CURRENT_USER",
    /**
     * Retrieves numeric statistics for all completed courses for a specified canvas account id; the account must exist.
     */
    GET_DEPARTMENT_LEVEL_COMPLETED_STATISTICS: "CANVAS_GET_DEPARTMENT_LEVEL_COMPLETED_STATISTICS",
    /**
     * Fetches a snapshot of current numerical statistics for a canvas account, requiring its valid id.
     */
    GET_DEPARTMENT_LEVEL_CURRENT_STATISTICS: "CANVAS_GET_DEPARTMENT_LEVEL_CURRENT_STATISTICS",
    /**
     * Retrieves the distribution of final grades (0-100, binned to whole numbers) for all completed courses in a canvas account, where each data point represents one student's final grade in one course.
     */
    GET_DEPARTMENT_LEVEL_GRADE_DATA_COMPLETED_GRADES: "CANVAS_GET_DEPARTMENT_LEVEL_GRADE_DATA_COMPLETED_GRADES",
    /**
     * Retrieves department-level academic term statistics (e.g., enrollment, activity, grades) for a specified account and term in canvas, provided analytics data is available.
     */
    GET_DEPARTMENT_LEVEL_TERM_STATISTICS: "CANVAS_GET_DEPARTMENT_LEVEL_TERM_STATISTICS",
    /**
     * Retrieves a specific enrollment by its id within a given account.
     */
    GET_ENROLLMENT_BY_ID: "CANVAS_GET_ENROLLMENT_BY_ID",
    /**
     * Retrieves a chronological list of dates with grading activity and the active graders for a specified course.
     */
    GET_GRADEBOOK_HISTORY_DAYS: "CANVAS_GET_GRADEBOOK_HISTORY_DAYS",
    /**
     * Retrieves a specific content page (wiki or content page) by its url or numeric id from a specified canvas course.
     */
    GET_PAGE_FOR_COURSE: "CANVAS_GET_PAGE_FOR_COURSE",
    /**
     * Retrieves all submissions for a specific quiz within a course; ensure `course id` and `quiz id` are valid and the quiz belongs to the course.
     */
    GET_QUIZ_SUBMISSIONS: "CANVAS_GET_QUIZ_SUBMISSIONS",
    /**
     * Retrieves the status of a previously initiated report in a canvas account, specified by its type and id.
     */
    GET_REPORT_STATUS: "CANVAS_GET_REPORT_STATUS",
    /**
     * Retrieves detailed information for a specific canvas course using its `course id`, which must be valid, and allows for including additional data fields in the response via the `include` parameter.
     */
    GET_SINGLE_COURSE: "CANVAS_GET_SINGLE_COURSE",
    /**
     * Retrieves a specific submission for an assignment made by a particular user within a designated course.
     */
    GET_SINGLE_SUBMISSION: "CANVAS_GET_SINGLE_SUBMISSION",
    /**
     * Retrieves files from a student's canvas assignment submission, processing text, binary, and zip files, and providing s3 download urls if s3 integration is active and uploads are successful.
     */
    GET_SUBMISSION_FILES: "CANVAS_GET_SUBMISSION_FILES",
    /**
     * Fetches detailed assignment-level analytics for a specific student in a designated course, including submission details and class performance statistics.
     */
    GET_USER_ASSIGNMENT_ANALYTICS: "CANVAS_GET_USER_ASSIGNMENT_ANALYTICS",
    /**
     * Retrieves the academic progress of a specific user within a given course.
     */
    GET_USER_COURSE_PROGRESS: "CANVAS_GET_USER_COURSE_PROGRESS",
    /**
     * Retrieves page view activity and participation details for a specific student enrolled in a designated course.
     */
    GET_USER_PARTICIPATION_ANALYTICS: "CANVAS_GET_USER_PARTICIPATION_ANALYTICS",
    /**
     * Retrieves profile information for an existing canvas user.
     */
    GET_USER_PROFILE: "CANVAS_GET_USER_PROFILE",
    /**
     * Updates a student's assignment submission with a grade, comment, sticker, or status change; requires `course id`, `assignment id`, `user id`, and at least one update field.
     */
    GRADE_COMMENT_SUBMISSION: "CANVAS_GRADE_COMMENT_SUBMISSION",
    /**
     * Retrieves canvas accounts visible to the current user due to their course-level administrative roles; no request parameters are needed.
     */
    LIST_ACCOUNTS_FOR_COURSE_ADMINS: "CANVAS_LIST_ACCOUNTS_FOR_COURSE_ADMINS",
    /**
     * Retrieves the first page of folders for a specified canvas course id; this action is scoped to courses only.
     */
    LIST_ALL_FOLDERS: "CANVAS_LIST_ALL_FOLDERS",
    /**
     * Retrieves a list of canvas appointment groups based on specified filters; any provided `context codes` must be valid and accessible by the user.
     */
    LIST_APPOINTMENT_GROUPS: "CANVAS_LIST_APPOINTMENT_GROUPS",
    /**
     * Retrieves submissions for a specific assignment within a course, optionally including related resources or grouping by student group for group assignments. supports pagination to retrieve more than the default 10 submissions.
     */
    LIST_ASSIGNMENT_SUBMISSIONS: "CANVAS_LIST_ASSIGNMENT_SUBMISSIONS",
    /**
     * Lists available reports (including those that can be or have been generated) for a valid canvas account id.
     */
    LIST_AVAILABLE_REPORTS: "CANVAS_LIST_AVAILABLE_REPORTS",
    /**
     * Retrieves calendar events and assignments for a specific user from canvas lms, supporting extensive filtering options detailed in the request schema.
     */
    LIST_CALENDAR_EVENTS_FOR_USER: "CANVAS_LIST_CALENDAR_EVENTS_FOR_USER",
    /**
     * Retrieves a list of communication channels associated with a specific user in canvas.
     */
    LIST_COMMUNICATION_CHANNELS: "CANVAS_LIST_COMMUNICATION_CHANNELS",
    /**
     * Retrieves communication messages from canvas.
     */
    LIST_COMM_MESSAGES: "CANVAS_LIST_COMM_MESSAGES",
    /**
     * Retrieves a paginated list of content exports from canvas for a specified, existing course.
     */
    LIST_CONTENT_EXPORTS: "CANVAS_LIST_CONTENT_EXPORTS",
    /**
     * Retrieves a list of the current user's courses from canvas, optionally filtered by enrollment type and state.
     */
    LIST_COURSES: "CANVAS_LIST_COURSES",
    /**
     * Retrieves a list of courses in canvas for a specified `user id`, requiring observer or admin permissions to view courses for others.
     */
    LIST_COURSES_FOR_USER: "CANVAS_LIST_COURSES_FOR_USER",
    /**
     * Retrieves a paginated list of users for a given canvas `course id` (which must be an existing course), supporting various filtering, sorting, and data inclusion options.
     */
    LIST_COURSE_USERS: "CANVAS_LIST_COURSE_USERS",
    /**
     * Tool to retrieve paginated discussion entries for a specific discussion topic in a course. use when needing to list all posts and replies under a given topic, supports pagination.
     */
    LIST_DISCUSSION_ENTRIES: "CANVAS_LIST_DISCUSSION_ENTRIES",
    /**
     * Retrieves a paginated list of discussion topics or announcements for a specified course.
     */
    LIST_DISCUSSION_TOPICS: "CANVAS_LIST_DISCUSSION_TOPICS",
    /**
     * Fetches metadata (id, name, size, type, urls) for all files within a specified canvas course.
     */
    LIST_FILES: "CANVAS_LIST_FILES",
    /**
     * Retrieves a list of immediate sub-folders within the specified `folder id`.
     */
    LIST_FOLDERS: "CANVAS_LIST_FOLDERS",
    /**
     * Retrieves a list of wiki pages associated with a specific, existing course in canvas.
     */
    LIST_PAGES_FOR_COURSE: "CANVAS_LIST_PAGES_FOR_COURSE",
    /**
     * Retrieves a paginated list of quizzes for a specified, valid canvas course, optionally filtering by a search term in the quiz title.
     */
    LIST_QUIZZES_IN_COURSE: "CANVAS_LIST_QUIZZES_IN_COURSE",
    /**
     * Retrieves content shares sent by the specified user to other users or courses within canvas.
     */
    LIST_SENT_CONTENT_SHARES: "CANVAS_LIST_SENT_CONTENT_SHARES",
    /**
     * Fetches gradebook history submissions for a specific course, assignment, grader, and date from canvas.
     */
    LIST_SUBMISSIONS: "CANVAS_LIST_SUBMISSIONS",
    /**
     * Retrieves submissions from a canvas course for specified assignments and/or students; the course must be accessible.
     */
    LIST_SUBMISSIONSFOR_MULTIPLE_ASSIGNMENTS: "CANVAS_LIST_SUBMISSIONSFOR_MULTIPLE_ASSIGNMENTS",
    /**
     * Retrieves a feed of uncollated submission versions from the gradebook history for a course; any provided `assignment id` must be valid for the course, and any `user id` must be for a user enrolled in the course.
     */
    LIST_UNCOLLATED_SUBMISSION_VERSIONS: "CANVAS_LIST_UNCOLLATED_SUBMISSION_VERSIONS",
    /**
     * Use this action to retrieve all users associated with a specific, existing canvas account id.
     */
    LIST_USERS_IN_ACCOUNT: "CANVAS_LIST_USERS_IN_ACCOUNT",
    /**
     * Tool to reply to a discussion entry. use when you need to send a message to a discussion entry with optional attachments.
     */
    REPLY_TO_DISCUSSION_ENTRY: "CANVAS_REPLY_TO_DISCUSSION_ENTRY",
    /**
     * Retrieves detailed information for a specific enrollment term within a given root account in canvas.
     */
    RETRIEVE_ENROLLMENT_TERM: "CANVAS_RETRIEVE_ENROLLMENT_TERM",
    /**
     * Initiates an asynchronous report generation for a canvas account, using a valid report type for the account; the response confirms initiation and may include progress tracking details.
     */
    START_REPORT: "CANVAS_START_REPORT",
    /**
     * Resolves a file's migration id to its current representation within a specific canvas course.
     */
    TRANSLATE_FILE_REFERENCE: "CANVAS_TRANSLATE_FILE_REFERENCE",
    /**
     * Updates an existing canvas appointment group by its id; only provided fields are modified, but `publish` defaults to `false` if omitted. the `appointment group id` must be valid.
     */
    UPDATE_APPOINTMENT_GROUP: "CANVAS_UPDATE_APPOINTMENT_GROUP",
    /**
     * Updates an existing course, specified by its id, with new attributes or triggers a lifecycle event like 'conclude' or 'delete'.
     */
    UPDATE_COURSE: "CANVAS_UPDATE_COURSE",
    /**
     * Updates various settings for an existing course in canvas, identified by `course id`.
     */
    UPDATE_COURSE_SETTINGS: "CANVAS_UPDATE_COURSE_SETTINGS",
    /**
     * Modifies an existing file's name or relocates it to a new parent folder; the target folder, if specified, must be valid and in the file's original context.
     */
    UPDATE_FILE: "CANVAS_UPDATE_FILE",
    /**
     * Updates an existing wiki page in a canvas course; if setting as front page, it must also be or be made published.
     */
    UPDATE_PAGE_FOR_COURSE: "CANVAS_UPDATE_PAGE_FOR_COURSE",
    /**
     * Updates scores, comments for questions, and/or applies fudge points to a specific quiz submission attempt; the attempt must be completed and referenced by valid, existing course, quiz, and submission ids.
     */
    UPDATE_QUIZ_SUBMISSION_SCORES: "CANVAS_UPDATE_QUIZ_SUBMISSION_SCORES",
    /**
     * Updates a canvas user's preferences for various interface elements and content interaction behaviors.
     */
    UPDATE_USER_SETTINGS: "CANVAS_UPDATE_USER_SETTINGS",
    /**
     * Uploads a file to an accessible canvas course, optionally to a specific folder (created if a non-existent `parent folder path` is provided) and with defined behavior for duplicate filenames.
     */
    UPLOAD_COURSE_FILE: "CANVAS_UPLOAD_COURSE_FILE",
    /**
     * Uploads a submission file for an assignment in a canvas course for a specified `user id`; this user must be enrolled, the assignment open for them, and 'masquerade' permissions may be needed if `user id` isn't 'self'.
     */
    UPLOAD_SUBMISSION_FILE: "CANVAS_UPLOAD_SUBMISSION_FILE",
  },
  triggerTypes: {
    /**
     * Polls Canvas for newly graded submissions for a specific assignment.
     */
    ASSIGNMENT_GRADED_TRIGGER: "CANVAS_ASSIGNMENT_GRADED_TRIGGER",
    /**
     * Polls Canvas for new submissions to a specific assignment.
     */
    NEW_ASSIGNMENT_SUBMISSION_TRIGGER: "CANVAS_NEW_ASSIGNMENT_SUBMISSION_TRIGGER",
    /**
     * Polls a Canvas discussion topic for new messages.
     */
    NEW_CANVAS_DISCUSSION_MESSAGE_TRIGGER: "CANVAS_NEW_CANVAS_DISCUSSION_MESSAGE_TRIGGER",
    /**
     * Polls a Canvas course for new discussion topics.
     */
    NEW_CANVAS_DISCUSSION_TRIGGER: "CANVAS_NEW_CANVAS_DISCUSSION_TRIGGER",
    /**
     * Polls Canvas for newly created courses for a specific user.
     */
    NEW_COURSE_CREATED_TRIGGER: "CANVAS_NEW_COURSE_CREATED_TRIGGER",
    /**
     * Polls a Canvas course for new file uploads.
     */
    NEW_FILE_UPLOADED_TRIGGER: "CANVAS_NEW_FILE_UPLOADED_TRIGGER",
  },
}

/**
 * Type map of all available trigger payloads for toolkit "CANVAS".
 */
export type CANVAS_TRIGGER_PAYLOADS = {
  ASSIGNMENT_GRADED_TRIGGER: CANVAS_ASSIGNMENT_GRADED_TRIGGER_PAYLOAD
  NEW_ASSIGNMENT_SUBMISSION_TRIGGER: CANVAS_NEW_ASSIGNMENT_SUBMISSION_TRIGGER_PAYLOAD
  NEW_CANVAS_DISCUSSION_MESSAGE_TRIGGER: CANVAS_NEW_CANVAS_DISCUSSION_MESSAGE_TRIGGER_PAYLOAD
  NEW_CANVAS_DISCUSSION_TRIGGER: CANVAS_NEW_CANVAS_DISCUSSION_TRIGGER_PAYLOAD
  NEW_COURSE_CREATED_TRIGGER: CANVAS_NEW_COURSE_CREATED_TRIGGER_PAYLOAD
  NEW_FILE_UPLOADED_TRIGGER: CANVAS_NEW_FILE_UPLOADED_TRIGGER_PAYLOAD
}

/**
 * Type map of all available trigger events for toolkit "CANVAS".
 */
export type CANVAS_TRIGGER_EVENTS = {
  ASSIGNMENT_GRADED_TRIGGER: TriggerEvent<CANVAS_ASSIGNMENT_GRADED_TRIGGER_PAYLOAD>
  NEW_ASSIGNMENT_SUBMISSION_TRIGGER: TriggerEvent<CANVAS_NEW_ASSIGNMENT_SUBMISSION_TRIGGER_PAYLOAD>
  NEW_CANVAS_DISCUSSION_MESSAGE_TRIGGER: TriggerEvent<CANVAS_NEW_CANVAS_DISCUSSION_MESSAGE_TRIGGER_PAYLOAD>
  NEW_CANVAS_DISCUSSION_TRIGGER: TriggerEvent<CANVAS_NEW_CANVAS_DISCUSSION_TRIGGER_PAYLOAD>
  NEW_COURSE_CREATED_TRIGGER: TriggerEvent<CANVAS_NEW_COURSE_CREATED_TRIGGER_PAYLOAD>
  NEW_FILE_UPLOADED_TRIGGER: TriggerEvent<CANVAS_NEW_FILE_UPLOADED_TRIGGER_PAYLOAD>
}
