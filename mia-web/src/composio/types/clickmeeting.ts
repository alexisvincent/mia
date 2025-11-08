// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CLICKMEETING's CLICKMEETING_CREATE_CONFERENCE tool input.
 */
type CLICKMEETING_CREATE_CONFERENCE_INPUT = {
  /**
   * Access Type
   * @description Access mode: 1=open; 2=password-protected (requires 'password'); 3=token-based.
   * @enum {integer}
   */
  access_type?: 1 | 2 | 3;
  /**
   * Custom Room Url Name
   * @description Custom URL path segment for the room (must be unique).
   * @default null
   */
  custom_room_url_name: string | null;
  /**
   * Duration
   * @description Duration in 'H:MM' format (required for scheduled rooms).
   * @default null
   */
  duration: string | null;
  /**
   * Lobby Description
   * @description Text shown in the lobby before participants join.
   * @default null
   */
  lobby_description: string | null;
  /**
   * Lobby Enabled
   * @description 1 to show a lobby page; 0 to bypass lobby.
   * @default null
   * @enum {integer|null}
   */
  lobby_enabled: 0 | 1 | null;
  /**
   * Name
   * @description The display name of the conference room.
   */
  name?: string;
  /**
   * Participants Limit
   * @description Maximum number of participants allowed in the conference room.
   */
  participants_limit?: number;
  /**
   * Password
   * @description Password for rooms with access_type=2.
   * @default null
   */
  password: string | null;
  /**
   * Permanent Room
   * @description 1 to create a permanent room; 0 to create a scheduled room.
   * @enum {integer}
   */
  permanent_room?: 0 | 1;
  /**
   * RegistrationSettings
   * @description Registration configuration for a conference.
   * @default null
   */
  registration: {
      /**
       * Enabled
       * @description Whether registration is enabled for this conference.
       */
      enabled: boolean;
      /**
       * Template
       * @description Identifier of the registration template to use.
       */
      template: number;
  } | null;
  /**
   * Room Type
   * @description Type of room: 'meeting' for collaborative sessions or 'webinar' for broadcast.
   * @enum {string}
   */
  room_type?: "meeting" | "webinar";
  /**
   * Settings
   * @description Additional arbitrary settings as key/value pairs.
   * @default null
   */
  settings: {
      [key: string]: unknown;
  } | null;
  /**
   * Skin Id
   * @description ID of the UI skin/theme to apply.
   * @default null
   */
  skin_id: number | null;
  /**
   * Starts At
   * @description Scheduled start date/time in ISO 8601 format (required if permanent_room=0).
   * @default null
   */
  starts_at: string | null;
  /**
   * Status
   * @description Initial status: 'active' or 'inactive'.
   * @default null
   * @enum {string|null}
   */
  status: "active" | "inactive" | null;
  /**
   * Time Zone
   * @description IANA time zone identifier, e.g. 'America/New_York'.
   * @default null
   */
  time_zone: string | null;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_CREATE_CONFERENCE tool output.
 */
type CLICKMEETING_CREATE_CONFERENCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Room
       * @description Details of the created conference room.
       */
      room: {
          /**
           * Access Type
           * @description Access mode of the room.
           */
          access_type: number;
          /**
           * Custom Room Url Name
           * @description Custom URL name of the room.
           * @default null
           */
          custom_room_url_name: string | null;
          /**
           * Duration
           * @description Duration of the scheduled room.
           * @default null
           */
          duration: string | null;
          /**
           * Id
           * @description Unique identifier of the conference room.
           */
          id: number;
          /**
           * Lobby Description
           * @description Lobby description text.
           * @default null
           */
          lobby_description: string | null;
          /**
           * Lobby Enabled
           * @description Indicator if lobby is enabled (1) or not (0).
           */
          lobby_enabled: number;
          /**
           * Name
           * @description Name of the conference room.
           */
          name: string;
          /**
           * Password
           * @description Password for the room, if applicable.
           * @default null
           */
          password: string | null;
          /**
           * Permanent Room
           * @description Indicates if the room is permanent (1) or scheduled (0).
           */
          permanent_room: number;
          /**
           * RegistrationSettings
           * @description Registration configuration for a conference.
           * @default null
           */
          registration: {
              /**
               * Enabled
               * @description Whether registration is enabled for this conference.
               */
              enabled: boolean;
              /**
               * Template
               * @description Identifier of the registration template to use.
               */
              template: number;
          } | null;
          /**
           * Room Type
           * @description Type of the room.
           */
          room_type: string;
          /**
           * Settings
           * @description Additional settings key/value pairs.
           * @default null
           */
          settings: {
              [key: string]: unknown;
          } | null;
          /**
           * Skin Id
           * @description ID of the room's UI skin.
           * @default null
           */
          skin_id: number | null;
          /**
           * Starts At
           * @description Scheduled start date/time of the room.
           * @default null
           */
          starts_at: string | null;
          /**
           * Status
           * @description Current status of the room.
           */
          status: string;
          /**
           * Time Zone
           * @description Time zone of the room.
           * @default null
           */
          time_zone: string | null;
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
 * Type of CLICKMEETING's CLICKMEETING_CREATE_CONTACT tool input.
 */
type CLICKMEETING_CREATE_CONTACT_INPUT = {
  /**
   * Company
   * @description Company name associated with the contact
   * @default null
   */
  company: string | null;
  /**
   * Custom Fields
   * @description List of custom fields to set for the contact
   * @default null
   */
  custom_fields: {
      /**
       * Id
       * @description Identifier of the custom field
       */
      id: number;
      /**
       * Value
       * @description Value assigned to the custom field
       */
      value: string;
  }[] | null;
  /**
   * Email
   * Format: email
   * @description Email address of the contact
   */
  email?: unknown;
  /**
   * Name
   * @description First name of the contact
   * @default null
   */
  name: string | null;
  /**
   * Phone
   * @description Phone number of the contact
   * @default null
   */
  phone: string | null;
  /**
   * Surname
   * @description Last name of the contact
   * @default null
   */
  surname: string | null;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_CREATE_CONTACT tool output.
 */
type CLICKMEETING_CREATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Company
       * @description Company name of the contact
       * @default null
       */
      company: string | null;
      /**
       * Contact Id
       * @description Unique identifier of the created contact
       */
      contact_id: number;
      /**
       * Custom Fields
       * @description Custom fields and their values for this contact
       * @default null
       */
      custom_fields: {
          /**
           * Id
           * @description Identifier of the custom field
           */
          id: number;
          /**
           * Value
           * @description Value assigned to the custom field
           */
          value: string;
      }[] | null;
      /**
       * Email
       * @description Email of the created contact
       */
      email: string;
      /**
       * Name
       * @description First name of the contact
       * @default null
       */
      name: string | null;
      /**
       * Phone
       * @description Phone number of the contact
       * @default null
       */
      phone: string | null;
      /**
       * Surname
       * @description Last name of the contact
       * @default null
       */
      surname: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_DELETE_CONFERENCE tool input.
 */
type CLICKMEETING_DELETE_CONFERENCE_INPUT = {
  /**
   * Conference Id
   * @description Unique identifier of the conference to delete
   */
  conference_id?: number;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_DELETE_CONFERENCE tool output.
 */
type CLICKMEETING_DELETE_CONFERENCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the conference was successfully deleted
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
 * Type of CLICKMEETING's CLICKMEETING_DELETE_RECORDING tool input.
 */
type CLICKMEETING_DELETE_RECORDING_INPUT = {
  /**
   * Conference Id
   * @description Unique identifier of the conference to delete the recording from
   */
  conference_id?: number;
  /**
   * Recording Id
   * @description Unique identifier of the recording to delete
   */
  recording_id?: number;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_DELETE_RECORDING tool output.
 */
type CLICKMEETING_DELETE_RECORDING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the recording was successfully deleted
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
 * Type of CLICKMEETING's CLICKMEETING_DELETE_RECORDINGS tool input.
 */
type CLICKMEETING_DELETE_RECORDINGS_INPUT = {
  /**
   * Conference Id
   * @description Unique identifier of the conference to delete recordings for
   */
  conference_id?: number;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_DELETE_RECORDINGS tool output.
 */
type CLICKMEETING_DELETE_RECORDINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the recordings were successfully deleted
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
 * Type of CLICKMEETING's CLICKMEETING_GENERATE_AUTOLOGIN_URL tool input.
 */
type CLICKMEETING_GENERATE_AUTOLOGIN_URL_INPUT = {
  /**
   * Conference Id
   * @description ID of the conference for which to generate the autologin URL.
   */
  conference_id?: number;
  /**
   * Participant
   * @description Participant details for the autologin URL generation.
   */
  participant?: {
      /**
       * Custom Params
       * @description Custom user-defined parameters passed to the autologin URL.
       * @default null
       */
      custom_params: {
          [key: string]: unknown;
      } | null;
      /**
       * Email
       * @description Email of the participant.
       * @default null
       */
      email: string | null;
      /**
       * Name
       * @description Name of the participant.
       */
      name: string;
      /**
       * Role
       * @description Role of the participant; one of 'viewer', 'presenter', or 'admin'.
       * @enum {string}
       */
      role: "viewer" | "presenter" | "admin";
  };
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GENERATE_AUTOLOGIN_URL tool output.
 */
type CLICKMEETING_GENERATE_AUTOLOGIN_URL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Autologin Url
       * @description The generated autologin URL.
       */
      autologin_url: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GENERATE_SESSION_PDF_REPORT tool input.
 */
type CLICKMEETING_GENERATE_SESSION_PDF_REPORT_INPUT = {
  /**
   * Conference Id
   * @description Unique identifier of the conference.
   */
  conference_id?: number;
  /**
   * Language
   * @default null
   */
  language: unknown;
  /**
   * Password
   * @description Password for signing the PDF generation request, if required.
   * @default null
   */
  password: string | null;
  /**
   * Session Id
   * @description Unique identifier of the session.
   */
  session_id?: number;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GENERATE_SESSION_PDF_REPORT tool output.
 */
type CLICKMEETING_GENERATE_SESSION_PDF_REPORT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File
       * @description URL to download the generated PDF report.
       */
      file: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_CHATS tool input.
 */
type CLICKMEETING_GET_CHATS_INPUT = object;

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_CHATS tool output.
 */
type CLICKMEETING_GET_CHATS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Chats
       * @description List of chat sessions retrieved
       */
      chats: {
          /**
           * Date
           * @description Date of the chat session in YYYY-MM-DD format
           */
          date: string;
          /**
           * Download Link
           * @description URL to download the chat session details
           */
          download_link: string;
          /**
           * Id
           * @description Unique identifier of the chat session
           */
          id: number;
          /**
           * Name
           * @description Name of the associated room
           */
          name: string;
          /**
           * Time
           * @description Time of the chat session with timezone information
           */
          time: string;
          /**
           * Timezone
           * @description Timezone of the chat session
           */
          timezone: string;
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
 * Type of CLICKMEETING's CLICKMEETING_GET_CHAT_DETAILS tool input.
 */
type CLICKMEETING_GET_CHAT_DETAILS_INPUT = {
  /**
   * Chat Id
   * @description Unique identifier for the chat session
   */
  chat_id?: string;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_CHAT_DETAILS tool output.
 */
type CLICKMEETING_GET_CHAT_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description ISO8601 timestamp when the chat was created
       */
      created_at: unknown;
      /**
       * Finished At
       * Format: date-time
       * @description ISO8601 timestamp when the chat finished, null if still active
       * @default null
       */
      finished_at: unknown;
      /**
       * Id
       * @description Chat session identifier
       */
      id: number;
      /**
       * Messages
       * @description List of messages in the chat session
       */
      messages: {
          /**
           * Created At
           * Format: date-time
           * @description ISO8601 timestamp when the message was created
           */
          created_at: unknown;
          /**
           * Id
           * @description Message identifier
           */
          id: number;
          /**
           * Name
           * @description Display name of the message sender
           */
          name: string;
          /**
           * Text
           * @description Content of the chat message
           */
          text: string;
          /**
           * User Id
           * @description User ID of the message sender, if available
           * @default null
           */
          user_id: number | null;
      }[];
      /**
       * Room Id
       * @description Identifier of the room where the chat occurred
       */
      room_id: number;
      /**
       * Status
       * @description Current status of the chat session
       */
      status: string;
      /**
       * Type
       * @description Type of the chat session (e.g., 'event')
       */
      type: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_CONFERENCES tool input.
 */
type CLICKMEETING_GET_CONFERENCES_INPUT = {
  /**
   * Page
   * @description Page number to retrieve, must be >= 1
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page, must be between 1 and 100
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_CONFERENCES tool output.
 */
type CLICKMEETING_GET_CONFERENCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Conferences
       * @description List of conferences returned for the request
       */
      conferences: {
          /**
           * Attendees Count
           * @description Number of current attendees
           */
          attendees_count: number;
          /**
           * Creator
           * @description Details of the conference creator
           */
          creator: {
              /**
               * Email
               * @description Creator email address
               */
              email: string;
              /**
               * Id
               * @description Creator user ID
               */
              id: number;
              /**
               * Name
               * @description Creator name
               */
              name: string;
          };
          /**
           * End Date
           * Format: date-time
           * @description ISO 8601 end date and time
           */
          end_date: string;
          /**
           * Id
           * @description Conference ID
           */
          id: number;
          /**
           * Name
           * @description Conference name
           */
          name: string;
          /**
           * Online
           * @description Whether the conference is currently online
           */
          online: boolean;
          /**
           * Registrations Count
           * @description Number of registrations
           */
          registrations_count: number;
          /**
           * Start Date
           * Format: date-time
           * @description ISO 8601 start date and time
           */
          start_date: string;
          /**
           * Status
           * @description Conference status, e.g., scheduled, ongoing, ended
           */
          status: string;
          /**
           * Type
           * @description Conference type, e.g., webinar, meeting
           */
          type: string;
          /**
           * Url
           * @description Conference access URL
           */
          url: string;
      }[];
      /**
       * Page
       * @description Current page number returned
       */
      page: number;
      /**
       * Per Page
       * @description Number of items returned per page
       */
      per_page: number;
      /**
       * Total Items
       * @description Total number of conferences available
       */
      total_items: number;
      /**
       * Total Pages
       * @description Total pages available based on per_page
       */
      total_pages: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_CONFERENCE_DETAILS tool input.
 */
type CLICKMEETING_GET_CONFERENCE_DETAILS_INPUT = {
  /**
   * Meeting Id
   * @description Unique ID of the conference (meeting) to retrieve.
   */
  meeting_id?: string;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_CONFERENCE_DETAILS tool output.
 */
type CLICKMEETING_GET_CONFERENCE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp in UTC (ISO8601)
       * @default null
       */
      created_at: string | null;
      /**
       * Description
       * @description Description of the conference
       * @default null
       */
      description: string | null;
      /**
       * Duration
       * @description Duration of the conference in minutes
       * @default null
       */
      duration: number | null;
      /**
       * End Time
       * @description End time of the conference in UTC (ISO8601), if ended
       * @default null
       */
      end_time: string | null;
      /**
       * Id
       * @description Unique conference ID
       */
      id: number;
      /**
       * Internal Name
       * @description Internal name of the conference, if any
       * @default null
       */
      internal_name: string | null;
      /**
       * Name
       * @description Name of the conference
       */
      name: string;
      /**
       * Room
       * @description Room connection details, including phone and login info
       */
      room: {
          [key: string]: unknown;
      };
      /**
       * Share Url
       * @description URL to share the conference with others
       * @default null
       */
      share_url: string | null;
      /**
       * Start Time
       * @description Start time of the conference in UTC (ISO8601)
       */
      start_time: string;
      /**
       * Status
       * @description Conference status (e.g., active, ended)
       */
      status: string;
      /**
       * Time Zone
       * @description Time zone of the conference
       * @default null
       */
      time_zone: string | null;
      /**
       * Type
       * @description Conference type (e.g., permanent, scheduled)
       */
      type: string;
      /**
       * Updated At
       * @description Last update timestamp in UTC (ISO8601)
       * @default null
       */
      updated_at: string | null;
      /**
       * Url
       * @description URL of the conference room
       */
      url: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_CONFERENCE_FILES tool input.
 */
type CLICKMEETING_GET_CONFERENCE_FILES_INPUT = {
  /**
   * Conference Id
   * @description Unique ID of the conference to list files for.
   */
  conference_id?: number;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_CONFERENCE_FILES tool output.
 */
type CLICKMEETING_GET_CONFERENCE_FILES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Files
       * @description List of files associated with the conference
       */
      files: {
          /**
           * Added At
           * @description Timestamp when the file was added (ISO 8601)
           */
          added_at: string;
          /**
           * Id
           * @description Unique file ID
           */
          id: number;
          /**
           * Name
           * @description File name
           */
          name: string;
          /**
           * Size
           * @description File size in bytes
           */
          size: number;
          /**
           * Type
           * @description File type or extension (e.g., 'pdf', 'jpg')
           */
          type: string;
          /**
           * Url
           * @description Download URL for the file
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
 * Type of CLICKMEETING's CLICKMEETING_GET_CONFERENCE_SESSIONS tool input.
 */
type CLICKMEETING_GET_CONFERENCE_SESSIONS_INPUT = {
  /**
   * Conference Id
   * @description Unique ID of the conference to list sessions for.
   */
  conference_id?: number;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_CONFERENCE_SESSIONS tool output.
 */
type CLICKMEETING_GET_CONFERENCE_SESSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Sessions
       * @description List of sessions for the specified conference.
       */
      sessions: {
          /**
           * Attendees
           * @description Session attendees counts keyed by type (e.g., registered, joined).
           */
          attendees: {
              [key: string]: number;
          };
          /**
           * Created At
           * Format: date-time
           * @description Timestamp when the session was created (ISO 8601).
           */
          created_at: string;
          /**
           * End Time
           * Format: date-time
           * @description Session end time (ISO 8601).
           */
          end_time: string;
          /**
           * Id
           * @description Session ID.
           */
          id: number;
          /**
           * Start Time
           * Format: date-time
           * @description Session start time (ISO 8601).
           */
          start_time: string;
          /**
           * Status
           * @description Status of the session.
           */
          status: string;
          /**
           * Updated At
           * Format: date-time
           * @description Timestamp when the session was last updated (ISO 8601).
           */
          updated_at: string;
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
 * Type of CLICKMEETING's CLICKMEETING_GET_CONFERENCE_SKINS tool input.
 */
type CLICKMEETING_GET_CONFERENCE_SKINS_INPUT = object;

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_CONFERENCE_SKINS tool output.
 */
type CLICKMEETING_GET_CONFERENCE_SKINS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Skins
       * @description List of available conference room skins
       */
      skins: {
          /**
           * Id
           * @description Unique skin ID
           */
          id: number;
          /**
           * Name
           * @description Skin name
           */
          name: string;
          /**
           * Preview
           * @description URL to skin preview image
           */
          preview: string;
          /**
           * Type
           * @description Skin type, e.g., 'color', 'image'
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
 * Type of CLICKMEETING's CLICKMEETING_GET_FILE_LIBRARY tool input.
 */
type CLICKMEETING_GET_FILE_LIBRARY_INPUT = {
  /**
   * Page
   * @description Page number for pagination (1-based).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page for pagination.
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_FILE_LIBRARY tool output.
 */
type CLICKMEETING_GET_FILE_LIBRARY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Files
       * @description List of files returned for the request
       */
      files: {
          /**
           * Content Type
           * @description MIME type of the file
           */
          content_type: string;
          /**
           * Created At
           * Format: date-time
           * @description ISO 8601 timestamp when file was added
           */
          created_at: unknown;
          /**
           * Id
           * @description ID of the file
           */
          id: number;
          /**
           * Link
           * @description Link to download or preview the file
           */
          link: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * Size
           * @description Size of the file in bytes
           */
          size: number;
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
 * Type of CLICKMEETING's CLICKMEETING_GET_PHONE_GATEWAYS tool input.
 */
type CLICKMEETING_GET_PHONE_GATEWAYS_INPUT = object;

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_PHONE_GATEWAYS tool output.
 */
type CLICKMEETING_GET_PHONE_GATEWAYS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Gateways
       * @description List of phone gateways available to your account
       */
      gateways: {
          /**
           * Countries
           * @description List of ISO country codes supported by this gateway
           */
          countries: string[];
          /**
           * Id
           * @description Unique identifier for the phone gateway
           */
          id: number;
          /**
           * Name
           * @description Name of the phone gateway
           */
          name: string;
          /**
           * Numbers
           * @description List of available phone numbers for this gateway
           */
          numbers: {
              /**
               * Country
               * @description ISO country code for this number
               */
              country: string;
              /**
               * Id
               * @description ID of the phone number
               */
              id: number;
              /**
               * Number
               * @description The phone number in international format
               */
              number: string;
          }[];
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
 * Type of CLICKMEETING's CLICKMEETING_GET_PING tool input.
 */
type CLICKMEETING_GET_PING_INPUT = object;

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_PING tool output.
 */
type CLICKMEETING_GET_PING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Always returns 'pong'
       */
      result: string;
      /**
       * Success
       * @description Indicates if the connection and authentication were successful
       */
      success: boolean;
      /**
       * Timestamp
       * @description Current server timestamp (UNIX time)
       */
      timestamp: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_RECORDINGS tool input.
 */
type CLICKMEETING_GET_RECORDINGS_INPUT = {
  /**
   * Conference Id
   * @description Unique ID of the conference to retrieve recordings for
   */
  conference_id?: number;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_RECORDINGS tool output.
 */
type CLICKMEETING_GET_RECORDINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Recordings
       * @description List of recordings for the specified conference
       */
      recordings: {
          /**
           * Conference Id
           * @description ID of the conference this recording belongs to
           */
          conference_id: number;
          /**
           * Date
           * Format: date-time
           * @description Creation date of the recording (ISO 8601)
           */
          date: string;
          /**
           * Description
           * @description Description of the recording
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Recording unique identifier
           */
          id: number;
          /**
           * Length
           * @description Length of the recording in seconds
           */
          length: number;
          /**
           * Title
           * @description Title of the recording
           * @default null
           */
          title: string | null;
          /**
           * Type
           * @description Type of the recording, e.g., 'webinar'
           */
          type: string;
          /**
           * Url
           * @description URL to view the recording
           */
          url: string;
          /**
           * Url Download
           * @description Download link for the recording file
           */
          url_download: string;
          /**
           * Url Streaming
           * @description Streaming link for the recording
           */
          url_streaming: string;
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
 * Type of CLICKMEETING's CLICKMEETING_GET_REGISTRATIONS tool input.
 */
type CLICKMEETING_GET_REGISTRATIONS_INPUT = {
  /**
   * Conference Id
   * @description Unique identifier of the conference to list registrations for.
   */
  conference_id?: string;
  /**
   * Page
   * @description Page number of results, must be >= 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of registrations per page, must be >= 1.
   * @default null
   */
  per_page: number | null;
  /**
   * Status
   * @description Filter registrations by status. Accepted values: 'pending', 'accepted', 'declined', 'all'. If omitted, all statuses are returned.
   * @default null
   * @enum {string|null}
   */
  status: "pending" | "accepted" | "declined" | "all" | null;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_REGISTRATIONS tool output.
 */
type CLICKMEETING_GET_REGISTRATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Registrations
       * @description List of registrations returned by the API.
       */
      registrations: {
          /**
           * Conference Id
           * @description ID of the associated conference.
           */
          conference_id: number;
          /**
           * Created At
           * @description Timestamp when registration was created (ISO 8601).
           */
          created_at: string;
          /**
           * Custom Fields
           * @description List of custom fields provided during registration.
           */
          custom_fields?: {
              [key: string]: unknown;
          }[];
          /**
           * Email
           * @description Registrant's email address.
           */
          email: string;
          /**
           * Id
           * @description Unique registration ID.
           */
          id: number;
          /**
           * Name
           * @description Registrant's full name.
           */
          name: string;
          /**
           * Status
           * @description Current registration status.
           * @enum {string}
           */
          status: "pending" | "accepted" | "declined";
          /**
           * Updated At
           * @description Timestamp when registration was last updated (ISO 8601).
           */
          updated_at: string;
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
 * Type of CLICKMEETING's CLICKMEETING_GET_SESSION_ATTENDEES tool input.
 */
type CLICKMEETING_GET_SESSION_ATTENDEES_INPUT = {
  /**
   * Conference Id
   * @description Unique identifier of the conference
   */
  conference_id?: string;
  /**
   * Session Id
   * @description Unique identifier of the session
   */
  session_id?: string;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_SESSION_ATTENDEES tool output.
 */
type CLICKMEETING_GET_SESSION_ATTENDEES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attendees
       * @description List of attendees for the specified session
       */
      attendees: {
          /**
           * City
           * @description City of the attendee
           */
          city: string;
          /**
           * Country
           * @description Country of the attendee
           */
          country: string;
          /**
           * Email
           * @description Email address of the attendee
           */
          email: string;
          /**
           * Entered At
           * Format: date-time
           * @description Timestamp when attendee joined
           */
          entered_at: unknown;
          /**
           * Guest
           * @description True if attendee joined as guest
           */
          guest: boolean;
          /**
           * Id
           * @description Attendee unique identifier
           */
          id: number;
          /**
           * Ip
           * @description IP address of the attendee
           */
          ip: string;
          /**
           * Left At
           * Format: date-time
           * @description Timestamp when attendee left
           * @default null
           */
          left_at: unknown;
          /**
           * Login
           * @description Login name if attendee registered
           * @default null
           */
          login: string | null;
          /**
           * Name
           * @description Name of the attendee
           */
          name: string;
          /**
           * Time In Room
           * @description Total seconds attendee spent in session
           */
          time_in_room: number;
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
 * Type of CLICKMEETING's CLICKMEETING_GET_SESSION_ATTENDEE_DETAILS tool input.
 */
type CLICKMEETING_GET_SESSION_ATTENDEE_DETAILS_INPUT = {
  /**
   * Attendee Id
   * @description Unique identifier of the attendee
   */
  attendee_id?: string;
  /**
   * Conference Id
   * @description Unique identifier of the conference
   */
  conference_id?: string;
  /**
   * Session Id
   * @description Unique identifier of the session
   */
  session_id?: string;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_SESSION_ATTENDEE_DETAILS tool output.
 */
type CLICKMEETING_GET_SESSION_ATTENDEE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Country
       * @description Country of the attendee
       */
      country: string;
      /**
       * Duration
       * @description Time spent in session in seconds
       */
      duration: number;
      /**
       * Email
       * @description Email address of the attendee
       */
      email: string;
      /**
       * Entered At
       * Format: date-time
       * @description Timestamp when attendee joined
       */
      entered_at: unknown;
      /**
       * Id
       * @description Attendee unique identifier
       */
      id: number;
      /**
       * Ip
       * @description IP address of the attendee
       */
      ip: string;
      /**
       * Left At
       * Format: date-time
       * @description Timestamp when attendee left
       * @default null
       */
      left_at: unknown;
      /**
       * Name
       * @description Name of the attendee
       */
      name: string;
      /**
       * Status
       * @description Attendance status (e.g., present, absent)
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
 * Type of CLICKMEETING's CLICKMEETING_GET_SESSION_DETAILS tool input.
 */
type CLICKMEETING_GET_SESSION_DETAILS_INPUT = {
  /**
   * Conference Id
   * @description Unique ID of the conference to which the session belongs
   */
  conference_id?: number;
  /**
   * Session Id
   * @description Unique ID of the session to retrieve
   */
  session_id?: number;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_SESSION_DETAILS tool output.
 */
type CLICKMEETING_GET_SESSION_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attendees Count
       * @description Number of attendees who joined this session
       */
      attendees_count: number;
      /**
       * Duration
       * @description Duration of the session in seconds
       */
      duration: number;
      /**
       * End Time
       * @description End time of the session in UTC (ISO8601)
       */
      end_time: string;
      /**
       * Id
       * @description Unique identifier of the session
       */
      id: number;
      /**
       * Recording Url
       * @description URL to access the session recording, if available
       * @default null
       */
      recording_url: string | null;
      /**
       * Room Id
       * @description Unique identifier of the conference room
       */
      room_id: number;
      /**
       * Start Time
       * @description Start time of the session in UTC (ISO8601)
       */
      start_time: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_SESSION_POLLS tool input.
 */
type CLICKMEETING_GET_SESSION_POLLS_INPUT = {
  /**
   * Session Id
   * @description Unique identifier of the session to fetch polls from
   */
  session_id?: string;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_SESSION_POLLS tool output.
 */
type CLICKMEETING_GET_SESSION_POLLS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Polls
       * @description List of polls for the specified session
       */
      polls: {
          /**
           * Answers
           * @description List of possible answers
           */
          answers: {
              /**
               * Answer
               * @description Answer text
               */
              answer: string;
              /**
               * Id
               * @description Answer ID
               */
              id: number;
          }[];
          /**
           * Ended At
           * @description Poll end time in ISO8601 format, if ended
           * @default null
           */
          ended_at: string | null;
          /**
           * Id
           * @description Poll ID
           */
          id: number;
          /**
           * Question
           * @description Poll question text
           */
          question: string;
          /**
           * Started At
           * @description Poll start time in ISO8601 format
           */
          started_at: string;
          /**
           * Status
           * @description Status of the poll (e.g., 'ended', 'in_progress')
           */
          status: string;
          /**
           * Type
           * @description Type of poll (e.g., single-choice)
           */
          type: string;
          /**
           * Votes
           * @description Vote summary for each answer
           */
          votes: {
              /**
               * Answer Id
               * @description Answer ID
               */
              answer_id: number;
              /**
               * Votes
               * @description Number of votes for this answer
               */
              votes: number;
          }[];
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
 * Type of CLICKMEETING's CLICKMEETING_GET_SESSION_POLL_DETAILS tool input.
 */
type CLICKMEETING_GET_SESSION_POLL_DETAILS_INPUT = {
  /**
   * Conference Id
   * @description Unique ID of the conference to which the session belongs
   */
  conference_id?: number;
  /**
   * Poll Id
   * @description Unique ID of the poll to retrieve details for
   */
  poll_id?: number;
  /**
   * Session Id
   * @description Unique ID of the session in which the poll was conducted
   */
  session_id?: number;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_SESSION_POLL_DETAILS tool output.
 */
type CLICKMEETING_GET_SESSION_POLL_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Answers
       * @description List of poll answer options with vote counts
       */
      answers: {
          /**
           * Value
           * @description Text of the answer option
           */
          value: string;
          /**
           * Votes
           * @description Number of votes for this answer
           */
          votes: number;
          /**
           * Votes Percent
           * @description Percentage of total votes for this answer
           */
          votes_percent: number;
      }[];
      /**
       * Attendees Total
       * @description Total number of attendees in the session
       */
      attendees_total: number;
      /**
       * Attendees Voted
       * @description Number of attendees who voted in the poll
       */
      attendees_voted: number;
      /**
       * Closed At
       * @description Timestamp when the poll was closed (ISO8601), if applicable
       * @default null
       */
      closed_at: string | null;
      /**
       * Conference Id
       * @description Conference room identifier
       */
      conference_id: number;
      /**
       * Id
       * @description Unique identifier of the poll
       */
      id: number;
      /**
       * Opened At
       * @description Timestamp when the poll was opened (ISO8601)
       */
      opened_at: string;
      /**
       * Question
       * @description Poll question text
       */
      question: string;
      /**
       * Session Id
       * @description Session identifier where poll was conducted
       */
      session_id: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_SESSION_QA_HISTORY tool input.
 */
type CLICKMEETING_GET_SESSION_QA_HISTORY_INPUT = {
  /**
   * Session Id
   * @description Unique identifier of the session to retrieve Q&A history for
   */
  session_id?: string;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_SESSION_QA_HISTORY tool output.
 */
type CLICKMEETING_GET_SESSION_QA_HISTORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Qa History
       * @description List of Q&A entries for the specified session
       */
      qa_history: {
          /**
           * Answer
           * @description The answer content, if provided
           * @default null
           */
          answer: string | null;
          /**
           * Answered At
           * Format: date-time
           * @description Timestamp of answer (ISO 8601), nullable if unanswered
           * @default null
           */
          answered_at: unknown;
          /**
           * Created At
           * Format: date-time
           * @description Timestamp of question creation (ISO 8601)
           */
          created_at: unknown;
          /**
           * Email
           * @description Email of the user
           */
          email: string;
          /**
           * Id
           * @description Q&A item unique identifier
           */
          id: number;
          /**
           * Name
           * @description Name of the user
           */
          name: string;
          /**
           * Question
           * @description The question content
           */
          question: string;
          /**
           * Session Id
           * @description Associated session ID
           */
          session_id: number;
          /**
           * User Id
           * @description User ID who asked the question
           */
          user_id: number;
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
 * Type of CLICKMEETING's CLICKMEETING_GET_SESSION_RECORDINGS tool input.
 */
type CLICKMEETING_GET_SESSION_RECORDINGS_INPUT = {
  /**
   * Session Id
   * @description Unique identifier of the session to fetch recordings from
   */
  session_id?: string;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_SESSION_RECORDINGS tool output.
 */
type CLICKMEETING_GET_SESSION_RECORDINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Recordings
       * @description List of recordings for the specified session
       */
      recordings: {
          /**
           * Added At
           * Format: date-time
           * @description Timestamp when recording was added (ISO 8601)
           */
          added_at: unknown;
          /**
           * Duration
           * @description Duration of the recording in seconds
           */
          duration: number;
          /**
           * Id
           * @description Recording ID
           */
          id: number;
          /**
           * Name
           * @description Name of the recording
           */
          name: string;
          /**
           * Size
           * @description File size in bytes
           */
          size: number;
          /**
           * Url
           * @description Direct download link for the recording
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
 * Type of CLICKMEETING's CLICKMEETING_GET_SESSION_RECORDING_DETAILS tool input.
 */
type CLICKMEETING_GET_SESSION_RECORDING_DETAILS_INPUT = {
  /**
   * Recording Id
   * @description Unique ID of the recording to retrieve details for
   */
  recording_id?: number;
  /**
   * Session Id
   * @description Unique ID of the session to which the recording belongs
   */
  session_id?: number;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_SESSION_RECORDING_DETAILS tool output.
 */
type CLICKMEETING_GET_SESSION_RECORDING_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation date and time in ISO 8601 format
       */
      created_at: string;
      /**
       * Id
       * @description Recording identifier
       */
      id: number;
      /**
       * Name
       * @description Name of the recording
       */
      name: string;
      /**
       * Size
       * @description Size of the recording in bytes
       */
      size: number;
      /**
       * Status
       * @description Status of the recording, e.g., 'available', 'processing'
       */
      status: string;
      /**
       * Updated At
       * @description Last update date and time in ISO 8601 format
       */
      updated_at: string;
      /**
       * Url
       * @description Download URL for the recording file
       */
      url: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_SESSION_REGISTRATIONS tool input.
 */
type CLICKMEETING_GET_SESSION_REGISTRATIONS_INPUT = {
  /**
   * Page
   * @description Page number for pagination, must be >= 1
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of registrations per page, must be between 1 and 1000
   * @default null
   */
  per_page: number | null;
  /**
   * Session Id
   * @description Unique identifier of the session
   */
  session_id?: string;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_SESSION_REGISTRATIONS tool output.
 */
type CLICKMEETING_GET_SESSION_REGISTRATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Registrations
       * @description List of registrations for the specified session
       */
      registrations: {
          /**
           * Confirmation
           * @description Whether the registrant has confirmed
           */
          confirmation: boolean;
          /**
           * Created At
           * Format: date-time
           * @description Registration creation timestamp in ISO 8601 format
           */
          created_at: unknown;
          /**
           * Email
           * @description Email address of the registrant
           */
          email: string;
          /**
           * Id
           * @description Registration ID
           */
          id: number;
          /**
           * Joined At
           * Format: date-time
           * @description Timestamp when the registrant joined (ISO 8601 format)
           * @default null
           */
          joined_at: unknown;
          /**
           * Language
           * @description Language chosen during registration
           */
          language: string;
          /**
           * Name
           * @description Name of the registrant
           */
          name: string;
          /**
           * Password
           * @description Password for session access if set; null otherwise
           * @default null
           */
          password: string | null;
          /**
           * Status
           * @description Registration status (e.g., 'registered')
           */
          status: string;
          /**
           * User Id
           * @description User ID if available (null for guests)
           * @default null
           */
          user_id: number | null;
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
 * Type of CLICKMEETING's CLICKMEETING_GET_SESSION_SURVEYS tool input.
 */
type CLICKMEETING_GET_SESSION_SURVEYS_INPUT = {
  /**
   * Session Id
   * @description Unique identifier of the session to fetch surveys from
   */
  session_id?: string;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_SESSION_SURVEYS tool output.
 */
type CLICKMEETING_GET_SESSION_SURVEYS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Surveys
       * @description List of surveys for the specified session
       */
      surveys: {
          /**
           * Created At
           * @description Survey creation datetime in ISO 8601 format
           */
          created_at: string;
          /**
           * Description
           * @description Survey description
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Survey ID
           */
          id: number;
          /**
           * Name
           * @description Survey name
           */
          name: string;
          /**
           * Questions
           * @description List of questions in the survey
           */
          questions: {
              /**
               * Answers
               * @description List of possible answers for this question
               */
              answers: {
                  /**
                   * Answer
                   * @description Answer text
                   */
                  answer: string;
                  /**
                   * Id
                   * @description Answer ID
                   */
                  id: number;
              }[];
              /**
               * Id
               * @description Question ID
               */
              id: number;
              /**
               * Position
               * @description Position of the question in the survey
               */
              position: number;
              /**
               * Question
               * @description Question text
               */
              question: string;
              /**
               * Required
               * @description Whether answering the question is required
               */
              required: boolean;
              /**
               * Type
               * @description Type of the question (e.g., 'text', 'single-choice')
               */
              type: string;
          }[];
          /**
           * Updated At
           * @description Last update datetime in ISO 8601 format
           * @default null
           */
          updated_at: string | null;
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
 * Type of CLICKMEETING's CLICKMEETING_GET_SESSION_SURVEY_DETAILS tool input.
 */
type CLICKMEETING_GET_SESSION_SURVEY_DETAILS_INPUT = {
  /**
   * Session Id
   * @description Unique identifier of the session
   */
  session_id?: string;
  /**
   * Survey Id
   * @description Unique identifier of the survey within the session
   */
  survey_id?: string;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_SESSION_SURVEY_DETAILS tool output.
 */
type CLICKMEETING_GET_SESSION_SURVEY_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Answers
       * @description List of respondents' answers to the survey
       */
      answers: {
          /**
           * Respondent Id
           * @description Unique identifier for the respondent
           */
          respondent_id: number;
          /**
           * Responses
           * @description List of responses given by the respondent
           */
          responses: {
              /**
               * Answer Id
               * @description ID of the selected answer option
               */
              answer_id: number;
              /**
               * Question Id
               * @description ID of the question answered
               */
              question_id: number;
          }[];
      }[];
      /**
       * Datetime
       * @description Survey creation timestamp in ISO8601 format
       */
      datetime: string;
      /**
       * Id
       * @description Survey ID
       */
      id: number;
      /**
       * Name
       * @description Survey name
       */
      name: string;
      /**
       * Questions
       * @description List of questions in the survey
       */
      questions: {
          /**
           * Answers
           * @description List of answer options for this question
           */
          answers: {
              /**
               * Answer
               * @description Answer text
               */
              answer: string;
              /**
               * Id
               * @description Answer option ID
               */
              id: number;
          }[];
          /**
           * Id
           * @description Question ID
           */
          id: number;
          /**
           * Text
           * @description Question text
           */
          text: string;
          /**
           * Type
           * @description Type of question, e.g., single-choice or multiple-choice
           */
          type: string;
      }[];
      /**
       * Status
       * @description Survey status, e.g., active or closed
       */
      status: string;
      /**
       * Type
       * @description Survey type
       */
      type: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_TIME_ZONE_LIST tool input.
 */
type CLICKMEETING_GET_TIME_ZONE_LIST_INPUT = object;

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_TIME_ZONE_LIST tool output.
 */
type CLICKMEETING_GET_TIME_ZONE_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Time Zones
       * @description List of available time zones
       */
      time_zones: {
          /**
           * Current
           * @description Indicates if this is the current time zone of the requester
           */
          current: boolean;
          /**
           * Id
           * @description Time zone ID
           */
          id: number;
          /**
           * Name
           * @description Time zone name, e.g., 'Europe/Warsaw'
           */
          name: string;
          /**
           * Offset
           * @description UTC offset, e.g., '+02:00'
           */
          offset: string;
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
 * Type of CLICKMEETING's CLICKMEETING_GET_TIME_ZONE_LIST_BY_COUNTRY tool input.
 */
type CLICKMEETING_GET_TIME_ZONE_LIST_BY_COUNTRY_INPUT = {
  /**
   * Country Code
   * @description ISO 3166-1 alpha-2 country code
   */
  country_code?: string;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_GET_TIME_ZONE_LIST_BY_COUNTRY tool output.
 */
type CLICKMEETING_GET_TIME_ZONE_LIST_BY_COUNTRY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Timezones
       * @description List of time zone objects associated with the specified country
       */
      timezones: {
          /**
           * Label
           * @description Human-readable name of the time zone
           */
          label: string;
          /**
           * Timezone
           * @description Time zone identifier (e.g., 'Europe/Warsaw')
           */
          timezone: string;
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
 * Type of CLICKMEETING's CLICKMEETING_REGISTER_PARTICIPANT tool input.
 */
type CLICKMEETING_REGISTER_PARTICIPANT_INPUT = {
  /**
   * ConfirmationEmail
   * @description Settings for sending a confirmation email to the participant.
   * @default null
   */
  confirmation_email: {
      /**
       * Enabled
       * @description 1 to enable the confirmation email, 0 to disable
       * @default 1
       * @enum {integer}
       */
      enabled: 0 | 1;
      /**
       * Lang
       * @description Two-letter language code for the confirmation email
       * @default null
       */
      lang: string | null;
  } | null;
  /**
   * Registration
   * @description Participant registration details
   */
  registration?: {
      /**
       * Email
       * Format: email
       * @description Email address of the participant
       */
      email: unknown;
      /**
       * First Name
       * @description First name of the participant
       */
      first_name: string;
      /**
       * Last Name
       * @description Last name of the participant
       */
      last_name: string;
  };
  /**
   * Room Id
   * @description Unique identifier of the conference room
   */
  room_id?: number;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_REGISTER_PARTICIPANT tool output.
 */
type CLICKMEETING_REGISTER_PARTICIPANT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Status of the registration, e.g., 'OK'
       */
      status: string;
      /**
       * Url
       * @description URL for the participant to join the conference
       */
      url: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_SEND_INVITATION tool input.
 */
type CLICKMEETING_SEND_INVITATION_INPUT = {
  /**
   * Conference Id
   * @description Unique identifier of the conference to invite participants to
   */
  conference_id?: number;
  /**
   * Custom Message
   * @description Custom message to include in the invitation email
   * @default null
   */
  custom_message: string | null;
  /**
   * Emails
   * @description List of email addresses to send invitations to
   */
  emails?: unknown[];
};

/**
 * Type of CLICKMEETING's CLICKMEETING_SEND_INVITATION tool output.
 */
type CLICKMEETING_SEND_INVITATION_OUTPUT = {
  /**
   * Data
   * @description Results of individual invitations
   */
  data?: {
      /**
       * Invitations
       * @description List of invitation result objects
       */
      invitations: {
          /**
           * Email
           * Format: email
           * @description Invited email address
           */
          email: unknown;
          /**
           * Error
           * @description Error message if sending the invitation failed
           * @default null
           */
          error: string | null;
          /**
           * Invitation Status
           * @description Status of the invitation, e.g., sent, failed
           */
          invitation_status: string;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Overall status of the invitation request, e.g., success
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_SEND_INVITATION_EMAIL tool input.
 */
type CLICKMEETING_SEND_INVITATION_EMAIL_INPUT = {
  /**
   * Attendees
   * @description List of one or more attendees to invite via email
   */
  attendees?: {
      /**
       * Email
       * @description Email address of the attendee to invite
       */
      email: string;
  }[];
  /**
   * Conference Id
   * @description Unique identifier of the conference
   */
  conference_id?: string;
  /**
   * Template
   * @description Optional template type for the invitation email
   * @default null
   */
  template: string | null;
};

/**
 * Type of CLICKMEETING's CLICKMEETING_SEND_INVITATION_EMAIL tool output.
 */
type CLICKMEETING_SEND_INVITATION_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional descriptive message from the API
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Status of the email invitation request
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
 * Type of CLICKMEETING's CLICKMEETING_UPLOAD_FILE tool input.
 */
type CLICKMEETING_UPLOAD_FILE_INPUT = {
  /**
   * File
   * Format: binary
   * @description Binary content of the file to upload as multipart/form-data.
   */
  file?: string;
  /**
   * Name
   * @description Custom name to assign to the file. If omitted, original filename is used.
   * @default null
   */
  name: string | null;
  /**
   * Type
   * @description Type of the file. Must be either 'presentation' or 'video'.
   * @enum {string}
   */
  type?: "presentation" | "video";
};

/**
 * Type of CLICKMEETING's CLICKMEETING_UPLOAD_FILE tool output.
 */
type CLICKMEETING_UPLOAD_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the uploaded file.
       */
      id: number;
      /**
       * Name
       * @description Name of the uploaded file.
       */
      name: string;
      /**
       * Size
       * @description Size of the uploaded file in bytes.
       */
      size: number;
      /**
       * Success
       * @description Indicates whether the upload was successful.
       */
      success: boolean;
      /**
       * Type
       * @description Type of the file as stored.
       * @enum {string}
       */
      type: "presentation" | "video";
      /**
       * Url
       * @description Direct URL to download the uploaded file.
       */
      url: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "CLICKMEETING".
 */
export type CLICKMEETING_TOOL_INPUTS = {
  CREATE_CONFERENCE: CLICKMEETING_CREATE_CONFERENCE_INPUT
  CREATE_CONTACT: CLICKMEETING_CREATE_CONTACT_INPUT
  DELETE_CONFERENCE: CLICKMEETING_DELETE_CONFERENCE_INPUT
  DELETE_RECORDING: CLICKMEETING_DELETE_RECORDING_INPUT
  DELETE_RECORDINGS: CLICKMEETING_DELETE_RECORDINGS_INPUT
  GENERATE_AUTOLOGIN_URL: CLICKMEETING_GENERATE_AUTOLOGIN_URL_INPUT
  GENERATE_SESSION_PDF_REPORT: CLICKMEETING_GENERATE_SESSION_PDF_REPORT_INPUT
  GET_CHATS: CLICKMEETING_GET_CHATS_INPUT
  GET_CHAT_DETAILS: CLICKMEETING_GET_CHAT_DETAILS_INPUT
  GET_CONFERENCES: CLICKMEETING_GET_CONFERENCES_INPUT
  GET_CONFERENCE_DETAILS: CLICKMEETING_GET_CONFERENCE_DETAILS_INPUT
  GET_CONFERENCE_FILES: CLICKMEETING_GET_CONFERENCE_FILES_INPUT
  GET_CONFERENCE_SESSIONS: CLICKMEETING_GET_CONFERENCE_SESSIONS_INPUT
  GET_CONFERENCE_SKINS: CLICKMEETING_GET_CONFERENCE_SKINS_INPUT
  GET_FILE_LIBRARY: CLICKMEETING_GET_FILE_LIBRARY_INPUT
  GET_PHONE_GATEWAYS: CLICKMEETING_GET_PHONE_GATEWAYS_INPUT
  GET_PING: CLICKMEETING_GET_PING_INPUT
  GET_RECORDINGS: CLICKMEETING_GET_RECORDINGS_INPUT
  GET_REGISTRATIONS: CLICKMEETING_GET_REGISTRATIONS_INPUT
  GET_SESSION_ATTENDEES: CLICKMEETING_GET_SESSION_ATTENDEES_INPUT
  GET_SESSION_ATTENDEE_DETAILS: CLICKMEETING_GET_SESSION_ATTENDEE_DETAILS_INPUT
  GET_SESSION_DETAILS: CLICKMEETING_GET_SESSION_DETAILS_INPUT
  GET_SESSION_POLLS: CLICKMEETING_GET_SESSION_POLLS_INPUT
  GET_SESSION_POLL_DETAILS: CLICKMEETING_GET_SESSION_POLL_DETAILS_INPUT
  GET_SESSION_QA_HISTORY: CLICKMEETING_GET_SESSION_QA_HISTORY_INPUT
  GET_SESSION_RECORDINGS: CLICKMEETING_GET_SESSION_RECORDINGS_INPUT
  GET_SESSION_RECORDING_DETAILS: CLICKMEETING_GET_SESSION_RECORDING_DETAILS_INPUT
  GET_SESSION_REGISTRATIONS: CLICKMEETING_GET_SESSION_REGISTRATIONS_INPUT
  GET_SESSION_SURVEYS: CLICKMEETING_GET_SESSION_SURVEYS_INPUT
  GET_SESSION_SURVEY_DETAILS: CLICKMEETING_GET_SESSION_SURVEY_DETAILS_INPUT
  GET_TIME_ZONE_LIST: CLICKMEETING_GET_TIME_ZONE_LIST_INPUT
  GET_TIME_ZONE_LIST_BY_COUNTRY: CLICKMEETING_GET_TIME_ZONE_LIST_BY_COUNTRY_INPUT
  REGISTER_PARTICIPANT: CLICKMEETING_REGISTER_PARTICIPANT_INPUT
  SEND_INVITATION: CLICKMEETING_SEND_INVITATION_INPUT
  SEND_INVITATION_EMAIL: CLICKMEETING_SEND_INVITATION_EMAIL_INPUT
  UPLOAD_FILE: CLICKMEETING_UPLOAD_FILE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CLICKMEETING".
 */
export type CLICKMEETING_TOOL_OUTPUTS = {
  CREATE_CONFERENCE: CLICKMEETING_CREATE_CONFERENCE_OUTPUT
  CREATE_CONTACT: CLICKMEETING_CREATE_CONTACT_OUTPUT
  DELETE_CONFERENCE: CLICKMEETING_DELETE_CONFERENCE_OUTPUT
  DELETE_RECORDING: CLICKMEETING_DELETE_RECORDING_OUTPUT
  DELETE_RECORDINGS: CLICKMEETING_DELETE_RECORDINGS_OUTPUT
  GENERATE_AUTOLOGIN_URL: CLICKMEETING_GENERATE_AUTOLOGIN_URL_OUTPUT
  GENERATE_SESSION_PDF_REPORT: CLICKMEETING_GENERATE_SESSION_PDF_REPORT_OUTPUT
  GET_CHATS: CLICKMEETING_GET_CHATS_OUTPUT
  GET_CHAT_DETAILS: CLICKMEETING_GET_CHAT_DETAILS_OUTPUT
  GET_CONFERENCES: CLICKMEETING_GET_CONFERENCES_OUTPUT
  GET_CONFERENCE_DETAILS: CLICKMEETING_GET_CONFERENCE_DETAILS_OUTPUT
  GET_CONFERENCE_FILES: CLICKMEETING_GET_CONFERENCE_FILES_OUTPUT
  GET_CONFERENCE_SESSIONS: CLICKMEETING_GET_CONFERENCE_SESSIONS_OUTPUT
  GET_CONFERENCE_SKINS: CLICKMEETING_GET_CONFERENCE_SKINS_OUTPUT
  GET_FILE_LIBRARY: CLICKMEETING_GET_FILE_LIBRARY_OUTPUT
  GET_PHONE_GATEWAYS: CLICKMEETING_GET_PHONE_GATEWAYS_OUTPUT
  GET_PING: CLICKMEETING_GET_PING_OUTPUT
  GET_RECORDINGS: CLICKMEETING_GET_RECORDINGS_OUTPUT
  GET_REGISTRATIONS: CLICKMEETING_GET_REGISTRATIONS_OUTPUT
  GET_SESSION_ATTENDEES: CLICKMEETING_GET_SESSION_ATTENDEES_OUTPUT
  GET_SESSION_ATTENDEE_DETAILS: CLICKMEETING_GET_SESSION_ATTENDEE_DETAILS_OUTPUT
  GET_SESSION_DETAILS: CLICKMEETING_GET_SESSION_DETAILS_OUTPUT
  GET_SESSION_POLLS: CLICKMEETING_GET_SESSION_POLLS_OUTPUT
  GET_SESSION_POLL_DETAILS: CLICKMEETING_GET_SESSION_POLL_DETAILS_OUTPUT
  GET_SESSION_QA_HISTORY: CLICKMEETING_GET_SESSION_QA_HISTORY_OUTPUT
  GET_SESSION_RECORDINGS: CLICKMEETING_GET_SESSION_RECORDINGS_OUTPUT
  GET_SESSION_RECORDING_DETAILS: CLICKMEETING_GET_SESSION_RECORDING_DETAILS_OUTPUT
  GET_SESSION_REGISTRATIONS: CLICKMEETING_GET_SESSION_REGISTRATIONS_OUTPUT
  GET_SESSION_SURVEYS: CLICKMEETING_GET_SESSION_SURVEYS_OUTPUT
  GET_SESSION_SURVEY_DETAILS: CLICKMEETING_GET_SESSION_SURVEY_DETAILS_OUTPUT
  GET_TIME_ZONE_LIST: CLICKMEETING_GET_TIME_ZONE_LIST_OUTPUT
  GET_TIME_ZONE_LIST_BY_COUNTRY: CLICKMEETING_GET_TIME_ZONE_LIST_BY_COUNTRY_OUTPUT
  REGISTER_PARTICIPANT: CLICKMEETING_REGISTER_PARTICIPANT_OUTPUT
  SEND_INVITATION: CLICKMEETING_SEND_INVITATION_OUTPUT
  SEND_INVITATION_EMAIL: CLICKMEETING_SEND_INVITATION_EMAIL_OUTPUT
  UPLOAD_FILE: CLICKMEETING_UPLOAD_FILE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CLICKMEETING toolkit.
 */
export const CLICKMEETING = {
  slug: "clickmeeting",
  tools: {
    /**
     * Tool to create a new conference. use when you need to schedule or start a meeting/webinar after authentication.
     */
    CREATE_CONFERENCE: "CLICKMEETING_CREATE_CONFERENCE",
    /**
     * Tool to create a new contact in your clickmeeting account. use when you need to add or pre-register an attendee before scheduling an event.
     */
    CREATE_CONTACT: "CLICKMEETING_CREATE_CONTACT",
    /**
     * Tool to delete a specific conference. use after confirming the conference is no longer needed.
     */
    DELETE_CONFERENCE: "CLICKMEETING_DELETE_CONFERENCE",
    /**
     * Tool to delete a specific recording for a conference room. use when you need to remove an unwanted or outdated recording after confirming the conference and recording ids. deletion is irreversible.
     */
    DELETE_RECORDING: "CLICKMEETING_DELETE_RECORDING",
    /**
     * Tool to delete all recordings for a conference room. use when you need to clear all saved recordings for a specific conference before archiving or reusing it.
     */
    DELETE_RECORDINGS: "CLICKMEETING_DELETE_RECORDINGS",
    /**
     * Tool to generate an autologin url for a conference participant. use when you need to provide direct access to a conference room without separate login.
     */
    GENERATE_AUTOLOGIN_URL: "CLICKMEETING_GENERATE_AUTOLOGIN_URL",
    /**
     * Tool to generate a pdf report for a specific session. use when you need to download session analytics as a pdf file.
     */
    GENERATE_SESSION_PDF_REPORT: "CLICKMEETING_GENERATE_SESSION_PDF_REPORT",
    /**
     * Tool to retrieve a list of all chat sessions. use when you need to list available chats in your account.
     */
    GET_CHATS: "CLICKMEETING_GET_CHATS",
    /**
     * Tool to retrieve details of a specific chat session. use when you have the chat id and need its metadata and messages.
     */
    GET_CHAT_DETAILS: "CLICKMEETING_GET_CHAT_DETAILS",
    /**
     * Tool to retrieve a paginated list of conference rooms. use when you need to list all conferences.
     */
    GET_CONFERENCES: "CLICKMEETING_GET_CONFERENCES",
    /**
     * Tool to retrieve details of a specific conference. use after confirming the meeting id. example: "get details for conference with meeting id='123456'".
     */
    GET_CONFERENCE_DETAILS: "CLICKMEETING_GET_CONFERENCE_DETAILS",
    /**
     * Tool to retrieve files associated with a conference. use after creating or updating a conference to list or download files uploaded to it.
     */
    GET_CONFERENCE_FILES: "CLICKMEETING_GET_CONFERENCE_FILES",
    /**
     * Tool to retrieve a list of sessions for a conference room. use when you need detailed session information after scheduling a conference.
     */
    GET_CONFERENCE_SESSIONS: "CLICKMEETING_GET_CONFERENCE_SESSIONS",
    /**
     * Tool to retrieve a list of available conference room skins. use when customizing or selecting skin options before creating a conference.
     */
    GET_CONFERENCE_SKINS: "CLICKMEETING_GET_CONFERENCE_SKINS",
    /**
     * Tool to retrieve a list of files in the file library. use when you need to browse available files with optional pagination.
     */
    GET_FILE_LIBRARY: "CLICKMEETING_GET_FILE_LIBRARY",
    /**
     * Tool to retrieve a list of available phone gateways. use when you need dial-in options for participants before starting a session.
     */
    GET_PHONE_GATEWAYS: "CLICKMEETING_GET_PHONE_GATEWAYS",
    /**
     * Tool to check api service status. use when verifying the clickmeeting api connection before making requests.
     */
    GET_PING: "CLICKMEETING_GET_PING",
    /**
     * Tool to retrieve recordings for a specific conference room. use after the conference has ended to fetch available recordings.
     */
    GET_RECORDINGS: "CLICKMEETING_GET_RECORDINGS",
    /**
     * Tool to retrieve registrations for a conference room by status. use after obtaining the conference id to fetch registrations filtered by state.
     */
    GET_REGISTRATIONS: "CLICKMEETING_GET_REGISTRATIONS",
    /**
     * Tool to retrieve the attendee list for a specific session. use after confirming conference id and session id to list participants in that session.
     */
    GET_SESSION_ATTENDEES: "CLICKMEETING_GET_SESSION_ATTENDEES",
    /**
     * Tool to retrieve details of a specific session attendee. use after obtaining conference id, session id, and attendee id to fetch attendance details.
     */
    GET_SESSION_ATTENDEE_DETAILS: "CLICKMEETING_GET_SESSION_ATTENDEE_DETAILS",
    /**
     * Tool to retrieve details of a specific session in a conference room. use after confirming both conference id and session id to get timing, attendance, and recording info.
     */
    GET_SESSION_DETAILS: "CLICKMEETING_GET_SESSION_DETAILS",
    /**
     * Tool to retrieve a list of polls conducted during a specific session. use after confirming session id to list available polls.
     */
    GET_SESSION_POLLS: "CLICKMEETING_GET_SESSION_POLLS",
    /**
     * Tool to retrieve details of a specific poll conducted during a session. use after confirming conference id, session id, and poll id to analyze poll results.
     */
    GET_SESSION_POLL_DETAILS: "CLICKMEETING_GET_SESSION_POLL_DETAILS",
    /**
     * Tool to retrieve the q&a history for a specific session. use after confirming session id to list all questions and answers asked during the session.
     */
    GET_SESSION_QA_HISTORY: "CLICKMEETING_GET_SESSION_QA_HISTORY",
    /**
     * Tool to retrieve a list of recordings for a specific session. use after confirming session id to fetch available recordings.
     */
    GET_SESSION_RECORDINGS: "CLICKMEETING_GET_SESSION_RECORDINGS",
    /**
     * Tool to retrieve details of a specific recording for a session. use after confirming both session id and recording id to obtain metadata like status, url, and size.
     */
    GET_SESSION_RECORDING_DETAILS: "CLICKMEETING_GET_SESSION_RECORDING_DETAILS",
    /**
     * Tool to retrieve registrations for a specific session. use after confirming session id to list its registrants.
     */
    GET_SESSION_REGISTRATIONS: "CLICKMEETING_GET_SESSION_REGISTRATIONS",
    /**
     * Tool to retrieve a list of surveys conducted during a specific session. use after confirming session id to list available surveys.
     */
    GET_SESSION_SURVEYS: "CLICKMEETING_GET_SESSION_SURVEYS",
    /**
     * Tool to retrieve details of a specific survey conducted during a session. use after session completion to fetch survey results.
     */
    GET_SESSION_SURVEY_DETAILS: "CLICKMEETING_GET_SESSION_SURVEY_DETAILS",
    /**
     * Tool to retrieve a list of available time zones. use when you need to select a time zone before scheduling events.
     */
    GET_TIME_ZONE_LIST: "CLICKMEETING_GET_TIME_ZONE_LIST",
    /**
     * Tool to retrieve time zones for a specific country. use when you need to list available time zones by iso 3166-1 alpha-2 country code. example: 'get time zones for country code=us'.
     */
    GET_TIME_ZONE_LIST_BY_COUNTRY: "CLICKMEETING_GET_TIME_ZONE_LIST_BY_COUNTRY",
    /**
     * Tool to register a participant for a conference room. use after obtaining a valid room id.
     */
    REGISTER_PARTICIPANT: "CLICKMEETING_REGISTER_PARTICIPANT",
    /**
     * Tool to send invitation emails to a clickmeeting conference. use after scheduling a conference to invite participants by email.
     */
    SEND_INVITATION: "CLICKMEETING_SEND_INVITATION",
    /**
     * Tool to send invitation emails to participants of a clickmeeting conference.
     */
    SEND_INVITATION_EMAIL: "CLICKMEETING_SEND_INVITATION_EMAIL",
    /**
     * Tool to upload a new file to the file library. use when you need to add presentation or video files before scheduling or sharing.
     */
    UPLOAD_FILE: "CLICKMEETING_UPLOAD_FILE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CLICKMEETING".
 */
export type CLICKMEETING_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CLICKMEETING".
 */
export type CLICKMEETING_TRIGGER_EVENTS = {}
