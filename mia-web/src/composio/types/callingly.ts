// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CALLINGLY's CALLINGLY_ACTIVATE_DEACTIVATE_CLIENT tool input.
 */
type CALLINGLY_ACTIVATE_DEACTIVATE_CLIENT_INPUT = {
  /**
   * Client Id
   * @description Unique identifier of the client account to modify.
   */
  client_id?: number;
  /**
   * Is Active
   * @description Set to 1 to activate the client account or 0 to deactivate it.
   * @enum {integer}
   */
  is_active?: 0 | 1;
};

/**
 * Type of CALLINGLY's CALLINGLY_ACTIVATE_DEACTIVATE_CLIENT tool output.
 */
type CALLINGLY_ACTIVATE_DEACTIVATE_CLIENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Billed Numbers
       * @description Number of phone numbers billed under this client account.
       */
      billed_numbers: number;
      /**
       * Billed Users
       * @description Number of users billed under this client account.
       */
      billed_users: number;
      /**
       * Email
       * @description Email address of the client.
       */
      email: string;
      /**
       * Id
       * @description Unique identifier of the client account.
       */
      id: number;
      /**
       * Name
       * @description Name of the client.
       */
      name: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLINGLY's CALLINGLY_CREATE_AGENT tool input.
 */
type CALLINGLY_CREATE_AGENT_INPUT = {
  /**
   * Account Id
   * @description Client's account ID under which the agent will be created
   */
  account_id?: number;
  /**
   * Email
   * @description Agent's email address
   */
  email?: string;
  /**
   * Ext
   * @description Agent's phone extension if applicable
   * @default null
   */
  ext: string | null;
  /**
   * Fname
   * @description Agent's first name
   */
  fname?: string;
  /**
   * Lname
   * @description Agent's last name
   */
  lname?: string;
  /**
   * Phone Number
   * @description Agent's phone number, in E.164 or local format
   */
  phone_number?: string;
  /**
   * Timezone
   * @description Agent's timezone, IANA format (e.g., 'America/Phoenix')
   */
  timezone?: string;
};

/**
 * Type of CALLINGLY's CALLINGLY_CREATE_AGENT tool output.
 */
type CALLINGLY_CREATE_AGENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Client's account ID under which the agent was created
       * @default null
       */
      account_id: number | null;
      /**
       * Ext
       * @description Agent's phone extension if applicable
       * @default null
       */
      ext: string | null;
      /**
       * Fname
       * @description Agent's first name
       * @default null
       */
      fname: string | null;
      /**
       * Lname
       * @description Agent's last name
       * @default null
       */
      lname: string | null;
      /**
       * Phone Number
       * @description Agent's phone number
       * @default null
       */
      phone_number: string | null;
      /**
       * Timezone
       * @description Agent's timezone
       * @default null
       */
      timezone: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLINGLY's CALLINGLY_CREATE_CALL tool input.
 */
type CALLINGLY_CREATE_CALL_INPUT = {
  /**
   * Account Id
   * @description Your Callingly account ID
   */
  account_id?: number;
  /**
   * Category
   * @description Category of the call (e.g., 'Pools')
   * @default null
   */
  category: string | null;
  /**
   * Company
   * @description Lead's company name
   * @default null
   */
  company: string | null;
  /**
   * Crm Id
   * @description CRM ID for the lead
   * @default null
   */
  crm_id: number | null;
  /**
   * Email
   * @description Lead's email address
   */
  email?: string;
  /**
   * First Name
   * @description Lead's first name
   */
  first_name?: string;
  /**
   * Last Name
   * @description Lead's last name
   */
  last_name?: string;
  /**
   * Phone Number
   * @description Lead's phone number in E.164 format
   */
  phone_number?: string;
  /**
   * Source
   * @description Source of the call (e.g., 'HubSpot')
   * @default null
   */
  source: string | null;
  /**
   * Team Id
   * @description ID of the team to place the call
   */
  team_id?: number;
};

/**
 * Type of CALLINGLY's CALLINGLY_CREATE_CALL tool output.
 */
type CALLINGLY_CREATE_CALL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Direction
       * @description Call direction, e.g., 'outbound'
       */
      direction: string;
      /**
       * Duration
       * @description Total duration of the call, e.g., '5s'
       */
      duration: string;
      /**
       * Error Code
       * @description Error code if any occurred
       */
      error_code: string;
      /**
       * Error Message
       * @description Error message if any occurred
       * @default null
       */
      error_message: string | null;
      /**
       * From Formatted
       * @description Formatted caller number
       * @default null
       */
      from_formatted: string | null;
      /**
       * Human Result
       * @description Result of the call, e.g., 'contacted'
       * @default null
       */
      human_result: string | null;
      /**
       * Id
       * @description Unique identifier for the call
       */
      id: number;
      /**
       * Is Error
       * @description Flag indicating if an error occurred
       */
      is_error: number;
      /**
       * Is Queue
       * @description Flag indicating if call was queued
       */
      is_queue: number;
      /**
       * Is Team Offline
       * @description Flag if team was offline
       */
      is_team_offline: number;
      /**
       * Is Voicemail
       * @description Flag indicating if call was voicemail
       */
      is_voicemail: number;
      /**
       * Lead
       * @description Lead details for the call
       */
      lead: {
          /**
           * Crm
           * @description Lead CRM name or ID
           * @default null
           */
          crm: string | null;
          /**
           * Deleted At
           * @description Deletion timestamp if lead was deleted
           * @default null
           */
          deleted_at: string | null;
          /**
           * Email
           * @description Lead email address
           */
          email: string;
          /**
           * Fname
           * @description Lead first name
           */
          fname: string;
          /**
           * Id
           * @description Lead ID
           */
          id: number;
          /**
           * Label
           * @description Lead label
           */
          label: string;
          /**
           * Lname
           * @description Lead last name
           */
          lname: string;
          /**
           * Name
           * @description Lead full name
           */
          name: string;
          /**
           * Phone Number
           * @description Lead phone number
           */
          phone_number: string;
          /**
           * Phone Number Formatted
           * @description Formatted lead phone number
           */
          phone_number_formatted: string;
          /**
           * Source
           * @description Lead source
           * @default null
           */
          source: string | null;
          /**
           * Source Id
           * @description Source-specific ID for the lead
           * @default null
           */
          source_id: number | null;
      };
      /**
       * Lead Retry
       * @description Number of lead retry attempts
       */
      lead_retry: number;
      /**
       * Lead Status
       * @description Internal lead status
       * @default null
       */
      lead_status: string | null;
      /**
       * Lead Status Formatted
       * @description Formatted lead status
       * @default null
       */
      lead_status_formatted: string | null;
      /**
       * Notes
       * @description List of notes attached to the call
       */
      notes?: {
          [key: string]: number | string | boolean | null;
      }[];
      /**
       * Number
       * @description Phone number object or null
       * @default null
       */
      number: {
          [key: string]: number | string | boolean | null;
      } | null;
      /**
       * Old Lead Owner Id
       * @description Previous owner ID for the lead if changed
       * @default null
       */
      old_lead_owner_id: number | null;
      /**
       * Phone Number Formatted
       * @description Formatted phone number of the lead
       * @default null
       */
      phone_number_formatted: string | null;
      /**
       * Profile
       * @description Profile details for the call
       */
      profile: {
          /**
           * Id
           * @description Team profile ID
           */
          id: number;
          /**
           * Name
           * @description Team profile name
           */
          name: string;
      };
      /**
       * Recording Url
       * @description URL to the call recording
       * @default null
       */
      recording_url: string | null;
      /**
       * Retry
       * @description Number of retry attempts for the call
       */
      retry: number;
      /**
       * Ring Status
       * @description Ring status of the call
       * @default null
       */
      ring_status: string | null;
      /**
       * Sales Advice
       * @description Sales advice generated for the call
       * @default null
       */
      sales_advice: string | null;
      /**
       * Scheduled Call Type
       * @description Type of scheduled call if applicable
       * @default null
       */
      scheduled_call_type: string | null;
      /**
       * Seconds
       * @description Duration of ringing in seconds
       */
      seconds: number;
      /**
       * Source
       * @description Origin of the call, e.g., 'App'
       */
      source: string;
      /**
       * Started At
       * @description Timestamp when the call started
       */
      started_at: string;
      /**
       * Status
       * @description Call status, e.g., 'completed'
       */
      status: string;
      /**
       * Status Formatted
       * @description Human-readable call status
       */
      status_formatted: string;
      /**
       * Tag
       * @description Tag object or null
       * @default null
       */
      tag: {
          [key: string]: number | string | boolean | null;
      } | null;
      /**
       * Time Formatted
       * @description Formatted time of the call, e.g., '11/11/20 12:08pm'
       */
      time_formatted: string;
      /**
       * Transcript
       * @description Transcription text of the call
       * @default null
       */
      transcript: string | null;
      /**
       * User
       * @description Agent details for the call
       */
      user: {
          /**
           * Email
           * @description Agent email address
           */
          email: string;
          /**
           * Fname
           * @description Agent first name
           */
          fname: string;
          /**
           * Id
           * @description Agent ID who handled the call
           */
          id: number;
          /**
           * Lname
           * @description Agent last name
           */
          lname: string;
          /**
           * Name
           * @description Agent full name
           */
          name: string;
          /**
           * Phone Number
           * @description Agent phone number
           */
          phone_number: string;
      };
      /**
       * Waveform Url
       * @description URL to the call waveform image
       * @default null
       */
      waveform_url: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLINGLY's CALLINGLY_CREATE_CLIENT tool input.
 */
type CALLINGLY_CREATE_CLIENT_INPUT = {
  /**
   * Company
   * @description Client's company name.
   */
  company?: string;
  /**
   * Email
   * Format: email
   * @description Client's email address.
   */
  email?: unknown;
  /**
   * Fname
   * @description Client's first name.
   */
  fname?: string;
  /**
   * Lname
   * @description Client's last name.
   */
  lname?: string;
  /**
   * Password
   * @description Password for the client's account.
   */
  password?: string;
  /**
   * Phone Number
   * @description Client's phone number.
   */
  phone_number?: string;
};

/**
 * Type of CALLINGLY's CALLINGLY_CREATE_CLIENT tool output.
 */
type CALLINGLY_CREATE_CLIENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Billed Numbers
       * @description Number of phone numbers billed to the client.
       * @default null
       */
      billed_numbers: number | null;
      /**
       * Billed Users
       * @description Number of billed users for the client.
       * @default null
       */
      billed_users: number | null;
      /**
       * Email
       * @description Email address of the created client.
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description Unique identifier of the created client.
       * @default null
       */
      id: number | null;
      /**
       * Name
       * @description Display name of the created client.
       * @default null
       */
      name: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLINGLY's CALLINGLY_CREATE_TEAM tool input.
 */
type CALLINGLY_CREATE_TEAM_INPUT = {
  /**
   * Account Id
   * @description Account ID under which to create the team.
   */
  account_id?: number;
  /**
   * Call Mode
   * @description Call distribution mode. Only 'simultaneous' supported currently.
   * @default null
   * @constant
   */
  call_mode: "simultaneous";
  /**
   * Delay
   * @description Delay in seconds before dialing team members.
   * @default null
   */
  delay: number | null;
  /**
   * Is Record
   * @description Whether calls should be recorded: 1 to record, 0 otherwise.
   * @default null
   * @enum {integer|null}
   */
  is_record: 0 | 1 | null;
  /**
   * Is Reschedule
   * @description Enable rescheduling on no-answer: 1 to enable, 0 to disable.
   * @default null
   * @enum {integer|null}
   */
  is_reschedule: 0 | 1 | null;
  /**
   * Is Retry
   * @description Enable per-agent retries: 1 to enable, 0 to disable.
   * @default null
   * @enum {integer|null}
   */
  is_retry: 0 | 1 | null;
  /**
   * Is Retry Lead
   * @description Enable lead-level retries: 1 to enable, 0 to disable.
   * @default null
   * @enum {integer|null}
   */
  is_retry_lead: 0 | 1 | null;
  /**
   * Language
   * @description Language code for team messages (e.g., 'en').
   * @default null
   */
  language: string | null;
  /**
   * Lead Retries
   * @description Number of retries at the lead level.
   * @default null
   */
  lead_retries: number | null;
  /**
   * Lead Retry Schedule
   * @description Schedule for lead-level retries in minutes.
   * @default null
   */
  lead_retry_schedule: number[] | null;
  /**
   * Name
   * @description Name of the team.
   */
  name?: string;
  /**
   * Retries
   * @description Number of retry attempts per agent.
   * @default null
   */
  retries: number | null;
  /**
   * Retry Schedule
   * @description Schedule for per-agent retries in minutes.
   * @default null
   */
  retry_schedule: number[] | null;
  /**
   * Whispertext
   * @description Pre-call whisper message template.
   * @default null
   */
  whispertext: string | null;
};

/**
 * Type of CALLINGLY's CALLINGLY_CREATE_TEAM tool output.
 */
type CALLINGLY_CREATE_TEAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Account ID under which the team was created.
       */
      account_id: number;
      /**
       * Call Mode
       * @description Call distribution mode.
       */
      call_mode: string;
      /**
       * Delay
       * @description Delay in seconds before dialing team members.
       */
      delay: number;
      /**
       * Id
       * @description Unique identifier for the team.
       */
      id: number;
      /**
       * Is Record
       * @description Whether calls are recorded (1) or not (0).
       */
      is_record: number;
      /**
       * Is Reschedule
       * @description Whether rescheduling on no-answer is enabled.
       */
      is_reschedule: number;
      /**
       * Is Retry
       * @description Whether per-agent retries are enabled.
       */
      is_retry: number;
      /**
       * Is Retry Lead
       * @description Whether lead-level retries are enabled.
       */
      is_retry_lead: number;
      /**
       * Is Sms
       * @description Whether SMS is enabled (1) or not (0).
       */
      is_sms: number;
      /**
       * Is Users Available For Call
       * @description Whether users availability check is enabled.
       */
      is_users_available_for_call: boolean;
      /**
       * Language
       * @description Language code for team messages.
       */
      language: string;
      /**
       * Lead Retries
       * @description Number of retries at the lead level.
       */
      lead_retries: number;
      /**
       * Lead Retry Schedule
       * @description Schedule for lead-level retries in minutes.
       */
      lead_retry_schedule: number[];
      /**
       * Name
       * @description Name of the team.
       */
      name: string;
      /**
       * Post Whispertext
       * @description Post-call whisper message template.
       */
      post_whispertext: string;
      /**
       * Retries
       * @description Number of retry attempts per agent.
       */
      retries: number;
      /**
       * Retry Schedule
       * @description Schedule for per-agent retries in minutes.
       */
      retry_schedule: number[];
      /**
       * Sms Body
       * @description SMS body content when SMS is enabled.
       */
      sms_body: string;
      /**
       * Whispertext
       * @description Pre-call whisper message template.
       */
      whispertext: string;
      /**
       * Whispertext Voice
       * @description Voice setting for the whisper message.
       */
      whispertext_voice: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLINGLY's CALLINGLY_CREATE_WEBHOOK tool input.
 */
type CALLINGLY_CREATE_WEBHOOK_INPUT = {
  /**
   * Call Direction
   * @description For call_completed events only: whether to trigger on outbound or inbound calls.
   * @default null
   * @enum {string|null}
   */
  call_direction: "outbound" | "inbound" | null;
  /**
   * Call Lead Status
   * @description For call_completed events only: lead outcome filter.
   * @default null
   * @enum {string|null}
   */
  call_lead_status: "contacted" | "missed" | "removed" | "voicemail" | null;
  /**
   * Call Status
   * @description For call_completed events only: status filter.
   * @default null
   * @enum {string|null}
   */
  call_status: "completed" | "missed" | "offline" | null;
  /**
   * Event
   * @description Event that triggers this webhook.
   * @enum {string}
   */
  event?: "call_completed" | "lead_created" | "lead_updated";
  /**
   * Field
   * @description For lead_created or lead_updated events only: field to watch for changes.
   * @default null
   * @enum {string|null}
   */
  field: "lead_owner" | "result" | "stage" | "status" | "tags" | null;
  /**
   * Filter
   * @description For lead_created or lead_updated events only: value the watched field must match.
   * @default null
   */
  filter: string | null;
  /**
   * Name
   * @description A descriptive name for the webhook.
   */
  name?: string;
  /**
   * Number Id
   * @description For call_completed events only when call_direction is inbound: the number ID to filter on.
   * @default null
   */
  number_id: number | null;
  /**
   * Target Url
   * @description The callback URL to receive the webhook.
   */
  target_url?: string;
  /**
   * Team Id
   * @description For call_completed events only when call_direction is outbound: the team ID to filter on.
   * @default null
   */
  team_id: number | null;
};

/**
 * Type of CALLINGLY's CALLINGLY_CREATE_WEBHOOK tool output.
 */
type CALLINGLY_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Account ID associated with the webhook.
       */
      account_id: number;
      /**
       * Call Lead Status
       * @description For call_completed events: lead outcome filter returned, if any.
       * @default null
       */
      call_lead_status: string | null;
      /**
       * Call Status
       * @description For call_completed events: status filter returned, if any.
       * @default null
       */
      call_status: string | null;
      /**
       * Event
       * @description Event type for the webhook.
       */
      event: string;
      /**
       * Field
       * @description Field filter configured for lead events, if any.
       * @default null
       */
      field: string | null;
      /**
       * Filter
       * @description Value filter configured for lead events, if any.
       * @default null
       */
      filter: string | null;
      /**
       * Id
       * @description Unique identifier of the webhook.
       */
      id: number;
      /**
       * Name
       * @description Name of the webhook.
       */
      name: string;
      /**
       * Number Id
       * @description Number ID configured for the webhook, if any.
       * @default null
       */
      number_id: number | null;
      /**
       * Target Url
       * @description Callback URL configured for the webhook.
       */
      target_url: string;
      /**
       * Team Id
       * @description Team ID configured for the webhook, if any.
       * @default null
       */
      team_id: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLINGLY's CALLINGLY_DELETE_AGENT tool input.
 */
type CALLINGLY_DELETE_AGENT_INPUT = {
  /**
   * Id
   * @description Unique identifier of the agent to delete.
   */
  id?: number;
};

/**
 * Type of CALLINGLY's CALLINGLY_DELETE_AGENT tool output.
 */
type CALLINGLY_DELETE_AGENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the agent was successfully deleted.
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
 * Type of CALLINGLY's CALLINGLY_DELETE_CLIENT tool input.
 */
type CALLINGLY_DELETE_CLIENT_INPUT = {
  /**
   * Id
   * @description Positive integer ID of the client to delete
   */
  id?: number;
};

/**
 * Type of CALLINGLY's CALLINGLY_DELETE_CLIENT tool output.
 */
type CALLINGLY_DELETE_CLIENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the client was successfully deleted
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
 * Type of CALLINGLY's CALLINGLY_DELETE_WEBHOOK tool input.
 */
type CALLINGLY_DELETE_WEBHOOK_INPUT = {
  /**
   * Id
   * @description Unique identifier of the webhook to delete.
   */
  id?: number;
};

/**
 * Type of CALLINGLY's CALLINGLY_DELETE_WEBHOOK tool output.
 */
type CALLINGLY_DELETE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message indicating the webhook was deleted.
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
 * Type of CALLINGLY's CALLINGLY_GET_AGENT_SCHEDULE tool input.
 */
type CALLINGLY_GET_AGENT_SCHEDULE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the agent
   */
  id?: number;
};

/**
 * Type of CALLINGLY's CALLINGLY_GET_AGENT_SCHEDULE tool output.
 */
type CALLINGLY_GET_AGENT_SCHEDULE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Schedules
       * @description List of availability schedules for the agent
       */
      schedules: {
          /**
           * Day
           * @description Numeric day of the week, where 0=Sunday and 6=Saturday
           */
          day: number;
          /**
           * Is Available
           * @description Whether the agent is available on this day
           */
          is_available: boolean;
          /**
           * Label
           * @description Name of the day, e.g., 'Sunday'
           */
          label: string;
          /**
           * Times
           * @description List of available time periods for the day
           */
          times: {
              /**
               * End
               * @description End time in HH:MM:SS format
               */
              end: string;
              /**
               * Start
               * @description Start time in HH:MM:SS format or 'allday'
               */
              start: string;
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
 * Type of CALLINGLY's CALLINGLY_GET_CALL tool input.
 */
type CALLINGLY_GET_CALL_INPUT = {
  /**
   * Call Id
   * @description Unique identifier of the call to retrieve.
   */
  call_id?: number;
};

/**
 * Type of CALLINGLY's CALLINGLY_GET_CALL tool output.
 */
type CALLINGLY_GET_CALL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Direction
       * @description Call direction, e.g., 'outbound'.
       */
      direction: string;
      /**
       * Duration
       * @description Total duration of the call, e.g., '5s'.
       */
      duration: string;
      /**
       * Error Code
       * @description Error code if any occurred.
       */
      error_code: string;
      /**
       * Error Message
       * @description Error message if any occurred.
       * @default null
       */
      error_message: string | null;
      /**
       * From Formatted
       * @description Formatted caller number.
       * @default null
       */
      from_formatted: string | null;
      /**
       * Human Result
       * @description Result of the call, e.g., 'contacted'.
       */
      human_result: string;
      /**
       * Id
       * @description Unique identifier for the call.
       */
      id: number;
      /**
       * Is Error
       * @description Flag indicating if an error occurred.
       */
      is_error: number;
      /**
       * Is Queue
       * @description Flag indicating if call was queued.
       */
      is_queue: number;
      /**
       * Is Team Offline
       * @description Flag indicating if team was offline.
       */
      is_team_offline: number;
      /**
       * Is Voicemail
       * @description Flag indicating if call was voicemail.
       */
      is_voicemail: number;
      /**
       * Lead
       * @description Lead details for the call.
       */
      lead: {
          /**
           * Crm
           * @description Lead CRM name or ID.
           * @default null
           */
          crm: string | null;
          /**
           * Deleted At
           * @description Deletion timestamp if lead was deleted.
           * @default null
           */
          deleted_at: string | null;
          /**
           * Email
           * @description Lead email address.
           */
          email: string;
          /**
           * Fname
           * @description Lead first name.
           */
          fname: string;
          /**
           * Id
           * @description Lead ID.
           */
          id: number;
          /**
           * Label
           * @description Lead label.
           */
          label: string;
          /**
           * Lname
           * @description Lead last name.
           */
          lname: string;
          /**
           * Name
           * @description Lead full name.
           */
          name: string;
          /**
           * Phone Number
           * @description Lead phone number.
           */
          phone_number: string;
          /**
           * Phone Number Formatted
           * @description Formatted lead phone number.
           */
          phone_number_formatted: string;
          /**
           * Source
           * @description Lead source.
           * @default null
           */
          source: string | null;
          /**
           * Source Id
           * @description Source-specific ID for the lead.
           * @default null
           */
          source_id: number | null;
      };
      /**
       * Lead Retry
       * @description Number of lead retry attempts.
       */
      lead_retry: number;
      /**
       * Lead Status
       * @description Internal lead status.
       * @default null
       */
      lead_status: string | null;
      /**
       * Lead Status Formatted
       * @description Formatted lead status.
       * @default null
       */
      lead_status_formatted: string | null;
      /**
       * Notes
       * @description List of notes attached to the call.
       */
      notes?: {
          [key: string]: number | string | boolean | null;
      }[];
      /**
       * Number
       * @description Phone number object or null.
       * @default null
       */
      number: {
          [key: string]: number | string | boolean | null;
      } | null;
      /**
       * Old Lead Owner Id
       * @description Previous owner ID for the lead if changed.
       * @default null
       */
      old_lead_owner_id: number | null;
      /**
       * Phone Number Formatted
       * @description Formatted phone number of the lead.
       */
      phone_number_formatted: string;
      /**
       * Profile
       * @description Profile details for the call.
       */
      profile: {
          /**
           * Id
           * @description Team profile ID.
           */
          id: number;
          /**
           * Name
           * @description Team profile name.
           */
          name: string;
      };
      /**
       * Recording Url
       * @description URL to the call recording.
       * @default null
       */
      recording_url: string | null;
      /**
       * Retry
       * @description Number of retry attempts for the call.
       */
      retry: number;
      /**
       * Ring Status
       * @description Ring status of the call.
       * @default null
       */
      ring_status: string | null;
      /**
       * Sales Advice
       * @description Sales advice generated for the call.
       * @default null
       */
      sales_advice: string | null;
      /**
       * Scheduled Call Type
       * @description Type of scheduled call if applicable.
       * @default null
       */
      scheduled_call_type: string | null;
      /**
       * Seconds
       * @description Duration of ringing in seconds.
       */
      seconds: number;
      /**
       * Source
       * @description Origin of the call, e.g., 'App'.
       */
      source: string;
      /**
       * Started At
       * @description Timestamp when the call started.
       */
      started_at: string;
      /**
       * Status
       * @description Call status, e.g., 'completed'.
       */
      status: string;
      /**
       * Status Formatted
       * @description Human-readable call status.
       */
      status_formatted: string;
      /**
       * Tag
       * @description Tag object or null.
       * @default null
       */
      tag: {
          [key: string]: number | string | boolean | null;
      } | null;
      /**
       * Time Formatted
       * @description Formatted time of the call, e.g., '11/11/20 12:08pm'.
       */
      time_formatted: string;
      /**
       * Transcript
       * @description Transcription text of the call.
       * @default null
       */
      transcript: string | null;
      /**
       * User
       * @description Agent details for the call.
       */
      user: {
          /**
           * Email
           * @description Agent email address.
           */
          email: string;
          /**
           * Fname
           * @description Agent first name.
           */
          fname: string;
          /**
           * Id
           * @description Agent ID who handled the call.
           */
          id: number;
          /**
           * Lname
           * @description Agent last name.
           */
          lname: string;
          /**
           * Name
           * @description Agent full name.
           */
          name: string;
          /**
           * Phone Number
           * @description Agent phone number.
           */
          phone_number: string;
      };
      /**
       * Waveform Url
       * @description URL to the call waveform image.
       * @default null
       */
      waveform_url: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLINGLY's CALLINGLY_GET_LEAD tool input.
 */
type CALLINGLY_GET_LEAD_INPUT = {
  /**
   * Id
   * @description Positive integer ID of the lead to retrieve.
   */
  id?: number;
};

/**
 * Type of CALLINGLY's CALLINGLY_GET_LEAD tool output.
 */
type CALLINGLY_GET_LEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description ID of the account associated with the lead.
       */
      account_id: number;
      /**
       * Category
       * @description Category of the lead, if provided.
       * @default null
       */
      category: string | null;
      /**
       * Company
       * @description Company name associated with the lead.
       */
      company: string;
      /**
       * Created At
       * @description Timestamp when the lead was created (YYYY-MM-DD HH:MM:SS).
       */
      created_at: string;
      /**
       * Email
       * @description Email address of the lead.
       * @default null
       */
      email: string | null;
      /**
       * Fname
       * @description First name of the lead.
       */
      fname: string;
      /**
       * Id
       * @description Unique identifier of the lead.
       */
      id: number;
      /**
       * Lead Owner Id
       * @description ID of the user who owns the lead.
       */
      lead_owner_id: number;
      /**
       * Lname
       * @description Last name of the lead.
       */
      lname: string;
      /**
       * Phone Number
       * @description Phone number of the lead in E.164 format.
       */
      phone_number: string;
      /**
       * Result
       * @description Outcome/result after call or follow-up.
       * @default null
       */
      result: string | null;
      /**
       * Scheduled Call At
       * @description Scheduled call time, e.g., '06/13/24 3:48pm MST'.
       * @default null
       */
      scheduled_call_at: string | null;
      /**
       * Source
       * @description Origin/source of the lead.
       */
      source: string;
      /**
       * Source Id
       * @description External CRM source ID, if any.
       * @default null
       */
      source_id: number | null;
      /**
       * Stage
       * @description Current stage in the pipeline.
       * @default null
       */
      stage: string | null;
      /**
       * Status
       * @description Current status of the lead.
       */
      status: string;
      /**
       * Tags
       * @description List of tags associated with the lead.
       */
      tags?: string[];
      /**
       * Team
       * @description Team assigned to the lead.
       */
      team: {
          /**
           * Id
           * @description Unique identifier of the team.
           */
          id: number;
          /**
           * Name
           * @description Name of the team.
           */
          name: string;
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
 * Type of CALLINGLY's CALLINGLY_GET_TEAM tool input.
 */
type CALLINGLY_GET_TEAM_INPUT = {
  /**
   * Id
   * @description Unique identifier of the team to retrieve
   */
  id?: number;
};

/**
 * Type of CALLINGLY's CALLINGLY_GET_TEAM tool output.
 */
type CALLINGLY_GET_TEAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Account ID under which the team exists.
       */
      account_id: number;
      /**
       * Call Mode
       * @description Call distribution mode for the team.
       */
      call_mode: string;
      /**
       * Delay
       * @description Delay in seconds before dialing team members.
       */
      delay: number;
      /**
       * Id
       * @description Unique identifier for the team.
       */
      id: number;
      /**
       * Is Record
       * @description Whether calls should be recorded: 1 for yes, 0 for no.
       */
      is_record: number;
      /**
       * Is Reschedule
       * @description Whether rescheduling on no-answer is enabled: 1 for yes, 0 for no.
       */
      is_reschedule: number;
      /**
       * Is Retry
       * @description Whether per-agent retries are enabled: 1 for yes, 0 for no.
       */
      is_retry: number;
      /**
       * Is Retry Lead
       * @description Whether lead-level retries are enabled: 1 for yes, 0 for no.
       */
      is_retry_lead: number;
      /**
       * Is Sms
       * @description Whether SMS notifications are enabled: 1 for yes, 0 for no.
       */
      is_sms: number;
      /**
       * Is Users Available For Call
       * @description Indicator if user availability is checked before calling.
       */
      is_users_available_for_call: boolean;
      /**
       * Language
       * @description Language code for team messages.
       */
      language: string;
      /**
       * Lead Retries
       * @description Number of retries at the lead level.
       */
      lead_retries: number;
      /**
       * Lead Retry Schedule
       * @description Schedule for lead-level retries in minutes.
       */
      lead_retry_schedule: number[];
      /**
       * Name
       * @description Name of the team.
       */
      name: string;
      /**
       * Post Whispertext
       * @description Post-call whisper message template.
       */
      post_whispertext: string;
      /**
       * Retries
       * @description Number of retry attempts per agent.
       */
      retries: number;
      /**
       * Retry Schedule
       * @description Schedule for per-agent retries in minutes.
       */
      retry_schedule: number[];
      /**
       * Sms Body
       * @description SMS message body when SMS is enabled.
       */
      sms_body: string;
      /**
       * Whispertext
       * @description Pre-call whisper message template.
       */
      whispertext: string;
      /**
       * Whispertext Voice
       * @description Voice setting for the whisper message.
       */
      whispertext_voice: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLINGLY's CALLINGLY_GET_WEBHOOK tool input.
 */
type CALLINGLY_GET_WEBHOOK_INPUT = {
  /**
   * Id
   * @description Unique identifier of the webhook to retrieve.
   */
  id?: number;
};

/**
 * Type of CALLINGLY's CALLINGLY_GET_WEBHOOK tool output.
 */
type CALLINGLY_GET_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Account ID associated with the webhook.
       */
      account_id: number;
      /**
       * Call Lead Status
       * @description For call_completed events: lead outcome filter, if any.
       * @default null
       */
      call_lead_status: string | null;
      /**
       * Call Status
       * @description For call_completed events: status filter, if any.
       * @default null
       */
      call_status: string | null;
      /**
       * Event
       * @description Event type that triggers the webhook.
       */
      event: string;
      /**
       * Field
       * @description For lead events: field to watch for changes, if any.
       * @default null
       */
      field: string | null;
      /**
       * Filter
       * @description For lead events: value filter, if any.
       * @default null
       */
      filter: string | null;
      /**
       * Id
       * @description Unique identifier of the webhook.
       */
      id: number;
      /**
       * Name
       * @description Name of the webhook.
       */
      name: string;
      /**
       * Number Id
       * @description Number ID configured for inbound call filters, if any.
       * @default null
       */
      number_id: number | null;
      /**
       * Target Url
       * @description Callback URL configured for the webhook.
       */
      target_url: string;
      /**
       * Team Id
       * @description Team ID configured for outbound call filters, if any.
       * @default null
       */
      team_id: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLINGLY's CALLINGLY_LIST_CALLS tool input.
 */
type CALLINGLY_LIST_CALLS_INPUT = {
  /**
   * End
   * @description End date for filtering calls (YYYY-MM-DD).
   * @default null
   */
  end: string | null;
  /**
   * Limit
   * @description Number of records per page.
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination.
   * @default null
   */
  page: number | null;
  /**
   * Start
   * @description Start date for filtering calls (YYYY-MM-DD).
   * @default null
   */
  start: string | null;
  /**
   * Team Id
   * @description Filter calls by team ID.
   * @default null
   */
  team_id: number | null;
};

/**
 * Type of CALLINGLY's CALLINGLY_LIST_CALLS tool output.
 */
type CALLINGLY_LIST_CALLS_OUTPUT = {
  /**
   * Data
   * @description List of call records.
   */
  data?: {
      /**
       * Direction
       * @description Call direction, e.g., 'outbound'.
       */
      direction: string;
      /**
       * Duration
       * @description Total duration of the call, e.g., '37s'.
       */
      duration: string;
      /**
       * Id
       * @description Unique identifier for the call.
       */
      id: number;
      /**
       * Lead
       * @description List of lead objects associated with the call.
       */
      lead: {
          [key: string]: number | string | boolean | null;
      }[];
      /**
       * Lead Retry
       * @description Number of lead retry attempts.
       */
      lead_retry: number;
      /**
       * Lead Status
       * @description Lead status of the call, if available.
       * @default null
       */
      lead_status: string | null;
      /**
       * Member
       * @description List of member objects associated with the call.
       */
      member: {
          [key: string]: number | string | boolean | null;
      }[];
      /**
       * Profile
       * @description List of profile objects associated with the call.
       */
      profile: {
          [key: string]: number | string | boolean | null;
      }[];
      /**
       * Recording Url
       * @description URL of the call recording.
       * @default null
       */
      recording_url: string | null;
      /**
       * Retry
       * @description Number of retry attempts for the call.
       */
      retry: number;
      /**
       * Seconds
       * @description Duration of ringing in seconds.
       */
      seconds: number;
      /**
       * Source
       * @description Origin of the call, e.g., 'Dashboard'.
       */
      source: string;
      /**
       * Started At
       * @description Timestamp when the call started.
       */
      started_at: string;
      /**
       * Status
       * @description Call status, e.g., 'completed'.
       */
      status: string;
      /**
       * Time Formatted
       * @description Formatted time of the call, e.g., '11/30/20 10:54am'.
       */
      time_formatted: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLINGLY's CALLINGLY_LIST_CLIENTS tool input.
 */
type CALLINGLY_LIST_CLIENTS_INPUT = object;

/**
 * Type of CALLINGLY's CALLINGLY_LIST_CLIENTS tool output.
 */
type CALLINGLY_LIST_CLIENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Clients
       * @description List of clients associated with the account.
       */
      clients: {
          /**
           * Billed Numbers
           * @description Number of phone numbers billed for the client.
           */
          billed_numbers: number;
          /**
           * Billed Users
           * @description Number of users billed for the client.
           */
          billed_users: number;
          /**
           * Email
           * @description Email address of the client.
           */
          email: string;
          /**
           * Id
           * @description Unique identifier for the client.
           */
          id: number;
          /**
           * Name
           * @description Name of the client.
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
 * Type of CALLINGLY's CALLINGLY_LIST_LEADS tool input.
 */
type CALLINGLY_LIST_LEADS_INPUT = {
  /**
   * Account Id
   * @description Account ID for agency partner context
   * @default null
   */
  account_id: number | null;
  /**
   * End
   * @description Date (YYYY-MM-DD) to filter leads created on or before this date
   * @default null
   */
  end: string | null;
  /**
   * Phone Number
   * @description Phone number to filter leads by, e.g., '+14801234567'
   * @default null
   */
  phone_number: string | null;
  /**
   * Start
   * @description Date (YYYY-MM-DD) to filter leads created on or after this date
   * @default null
   */
  start: string | null;
};

/**
 * Type of CALLINGLY's CALLINGLY_LIST_LEADS tool output.
 */
type CALLINGLY_LIST_LEADS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Leads
       * @description List of leads matching the provided filters
       */
      leads: {
          /**
           * Account Id
           * @description Account ID associated with the lead
           */
          account_id: number;
          /**
           * Calls
           * @description List of calls for the lead
           */
          calls: {
              /**
               * Agent Retry
               * @description Number of agent retry attempts
               */
              agent_retry: number;
              /**
               * Direction
               * @description Call direction, e.g., 'outbound'
               */
              direction: string;
              /**
               * Id
               * @description Call ID
               */
              id: number;
              /**
               * Lead Retry
               * @description Number of lead retry attempts
               */
              lead_retry: number;
              /**
               * Recording Url
               * @description URL to the call recording
               * @default null
               */
              recording_url: string | null;
              /**
               * Result
               * @description Call result
               * @default null
               */
              result: string | null;
              /**
               * Seconds
               * @description Duration of the call in seconds
               */
              seconds: number;
              /**
               * Source
               * @description Call source
               * @default null
               */
              source: string | null;
              /**
               * Started At
               * @description Timestamp when the call started
               */
              started_at: string;
              /**
               * Status
               * @description Call status
               * @default null
               */
              status: string | null;
          }[];
          /**
           * Category
           * @description Lead category
           * @default null
           */
          category: string | null;
          /**
           * Company
           * @description Company name for the lead
           */
          company: string;
          /**
           * Created At
           * @description Timestamp when the lead was created
           */
          created_at: string;
          /**
           * Email
           * @description Lead email address
           */
          email: string;
          /**
           * Fname
           * @description Lead first name
           */
          fname: string;
          /**
           * Id
           * @description Lead ID
           */
          id: number;
          /**
           * Lead Owner
           * @description Lead owner information
           */
          lead_owner: {
              /**
               * Custom Id
               * @description Custom ID for the lead owner
               * @default null
               */
              custom_id: string | null;
              /**
               * Name
               * @description Lead owner's name
               */
              name: string;
              /**
               * Phone Number
               * @description Lead owner's phone number
               */
              phone_number: string;
          };
          /**
           * Lead Owner Id
           * @description User ID of the lead owner
           */
          lead_owner_id: number;
          /**
           * Lname
           * @description Lead last name
           */
          lname: string;
          /**
           * Phone Number
           * @description Lead phone number
           */
          phone_number: string;
          /**
           * Result
           * @description Result for the lead
           * @default null
           */
          result: string | null;
          /**
           * Scheduled Call At
           * @description Scheduled call time formatted string
           */
          scheduled_call_at: string;
          /**
           * Source
           * @description Lead source
           */
          source: string;
          /**
           * Source Id
           * @description Source-specific ID for the lead
           * @default null
           */
          source_id: number | null;
          /**
           * Stage
           * @description Lead stage
           * @default null
           */
          stage: string | null;
          /**
           * Status
           * @description Lead status, e.g., 'missed'
           */
          status: string;
          /**
           * Tags
           * @description List of tags for the lead
           */
          tags?: {
              [key: string]: number | string | boolean | null;
          }[];
          /**
           * Team
           * @description Associated team info
           */
          team: {
              /**
               * Id
               * @description Team ID associated with the lead
               */
              id: number;
              /**
               * Name
               * @description Team name associated with the lead
               */
              name: string;
          };
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
 * Type of CALLINGLY's CALLINGLY_LIST_TEAMS tool input.
 */
type CALLINGLY_LIST_TEAMS_INPUT = object;

/**
 * Type of CALLINGLY's CALLINGLY_LIST_TEAMS tool output.
 */
type CALLINGLY_LIST_TEAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Teams
       * @description List of teams associated with the account.
       */
      teams: {
          /**
           * Account Id
           * @description Identifier for the account to which the team belongs.
           */
          account_id: number;
          /**
           * Id
           * @description Unique identifier for the team.
           */
          id: number;
          /**
           * Name
           * @description Name of the team.
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
 * Type of CALLINGLY's CALLINGLY_LIST_TEAM_USERS tool input.
 */
type CALLINGLY_LIST_TEAM_USERS_INPUT = {
  /**
   * Id
   * @description Unique identifier of the team to list users for.
   */
  id?: number;
};

/**
 * Type of CALLINGLY's CALLINGLY_LIST_TEAM_USERS tool output.
 */
type CALLINGLY_LIST_TEAM_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Agents
       * @description List of agents in the team.
       */
      agents: {
          /**
           * Cap
           * @description Maximum number of calls (cap) for the agent, if any.
           * @default null
           */
          cap: number | null;
          /**
           * Id
           * @description Unique identifier of the agent.
           */
          id: number;
          /**
           * Name
           * @description Full name of the agent.
           */
          name: string;
          /**
           * Priority
           * @description Agent's calling priority within the team.
           */
          priority: number;
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
 * Type of CALLINGLY's CALLINGLY_LIST_USERS tool input.
 */
type CALLINGLY_LIST_USERS_INPUT = {
  /**
   * Account Id
   * @description Filter users by client account ID (required for agency partners)
   * @default null
   */
  account_id: number | null;
};

/**
 * Type of CALLINGLY's CALLINGLY_LIST_USERS tool output.
 */
type CALLINGLY_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Account ID under which the user exists.
       */
      account_id: number;
      /**
       * Donotdisturb
       * @description Do-not-disturb flag: 1 for enabled, 0 for disabled.
       */
      donotdisturb: number;
      /**
       * Ext
       * @description Phone extension of the user, if any.
       */
      ext: string;
      /**
       * Fname
       * @description User's first name.
       */
      fname: string;
      /**
       * Id
       * @description Unique identifier for the user.
       */
      id: number;
      /**
       * Is Available
       * @description Indicates if the user is available for calls.
       */
      is_available: boolean;
      /**
       * Lname
       * @description User's last name.
       */
      lname: string;
      /**
       * Phone Number
       * @description User's phone number in E.164 or local format.
       */
      phone_number: string;
      /**
       * Priority
       * @description User's dialing priority within teams.
       */
      priority: number;
      /**
       * Timezone
       * @description User's timezone in IANA format.
       */
      timezone: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLINGLY's CALLINGLY_LIST_WEBHOOKS tool input.
 */
type CALLINGLY_LIST_WEBHOOKS_INPUT = {
  /**
   * Account Id
   * @description Filter webhooks by client account ID (required for agency partners)
   * @default null
   */
  account_id: number | null;
};

/**
 * Type of CALLINGLY's CALLINGLY_LIST_WEBHOOKS tool output.
 */
type CALLINGLY_LIST_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Webhooks
       * @description List of configured webhooks.
       */
      webhooks: {
          /**
           * Account Id
           * @description Account ID associated with the webhook.
           */
          account_id: number;
          /**
           * Call Lead Status
           * @description For call_completed events: lead outcome filter, if set.
           * @default null
           * @enum {string|null}
           */
          call_lead_status: "contacted" | "missed" | "removed" | "voicemail" | null;
          /**
           * Call Status
           * @description For call_completed events: status filter, if set.
           * @default null
           * @enum {string|null}
           */
          call_status: "completed" | "missed" | "offline" | null;
          /**
           * Event
           * @description Event type that triggers the webhook.
           * @enum {string}
           */
          event: "call_completed" | "lead_created" | "lead_updated";
          /**
           * Field
           * @description For lead events: field to watch for changes, if set.
           * @default null
           * @enum {string|null}
           */
          field: "lead_owner" | "result" | "stage" | "status" | "tags" | null;
          /**
           * Filter
           * @description For lead events: value the watched field must match, if set.
           * @default null
           */
          filter: string | null;
          /**
           * Id
           * @description Unique identifier for the webhook.
           */
          id: number;
          /**
           * Name
           * @description Name of the webhook.
           */
          name: string;
          /**
           * Number Id
           * @description Number ID associated with the webhook, if any.
           * @default null
           */
          number_id: number | null;
          /**
           * Target Url
           * @description Callback URL configured for the webhook.
           */
          target_url: string;
          /**
           * Team Id
           * @description Team ID associated with the webhook, if any.
           * @default null
           */
          team_id: number | null;
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
 * Type of CALLINGLY's CALLINGLY_REMOVE_TEAM_AGENT tool input.
 */
type CALLINGLY_REMOVE_TEAM_AGENT_INPUT = {
  /**
   * Agent Id
   * @description Unique identifier of the agent to remove from the team.
   */
  agent_id?: number;
  /**
   * Team Id
   * @description Unique identifier of the team to remove the agent from.
   */
  team_id?: number;
};

/**
 * Type of CALLINGLY's CALLINGLY_REMOVE_TEAM_AGENT tool output.
 */
type CALLINGLY_REMOVE_TEAM_AGENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the agent was successfully removed from the team.
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
 * Type of CALLINGLY's CALLINGLY_UPDATE_AGENT tool input.
 */
type CALLINGLY_UPDATE_AGENT_INPUT = {
  /**
   * Account Id
   * @description Client's account ID under which the agent exists
   * @default null
   */
  account_id: number | null;
  /**
   * Donotdisturb
   * @description Do-not-disturb flag: 1 to enable, 0 to disable
   * @default null
   */
  donotdisturb: number | null;
  /**
   * Donotdisturb Until
   * @description Datetime until which do-not-disturb is active, required if donotdisturb=1
   * @default null
   */
  donotdisturb_until: string | null;
  /**
   * Ext
   * @description Agent's phone extension if applicable
   * @default null
   */
  ext: string | null;
  /**
   * Fname
   * @description Agent's first name
   * @default null
   */
  fname: string | null;
  /**
   * Id
   * @description Unique identifier of the agent to update
   */
  id?: number;
  /**
   * Lname
   * @description Agent's last name
   * @default null
   */
  lname: string | null;
  /**
   * Phone Number
   * @description Agent's phone number, in E.164 or local format
   * @default null
   */
  phone_number: string | null;
  /**
   * Timezone
   * @description Agent's timezone, IANA format (e.g., 'America/Phoenix')
   * @default null
   */
  timezone: string | null;
};

/**
 * Type of CALLINGLY's CALLINGLY_UPDATE_AGENT tool output.
 */
type CALLINGLY_UPDATE_AGENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Account ID under which the agent exists
       */
      account_id: number;
      /**
       * Donotdisturb
       * @description Do-not-disturb flag: 1 for enabled, 0 for disabled
       */
      donotdisturb: number;
      /**
       * Ext
       * @description Agent's phone extension if applicable
       * @default null
       */
      ext: string | null;
      /**
       * Fname
       * @description Agent's first name
       */
      fname: string;
      /**
       * Id
       * @description Unique identifier of the agent
       */
      id: number;
      /**
       * Is Available
       * @description Indicates if the agent is available for calls
       */
      is_available: boolean;
      /**
       * Lname
       * @description Agent's last name
       */
      lname: string;
      /**
       * Phone Number
       * @description Agent's phone number in E.164 or local format
       */
      phone_number: string;
      /**
       * Priority
       * @description Agent's dialing priority within teams
       */
      priority: number;
      /**
       * Timezone
       * @description Agent's timezone in IANA format
       */
      timezone: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLINGLY's CALLINGLY_UPDATE_SCHEDULE tool input.
 */
type CALLINGLY_UPDATE_SCHEDULE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the agent whose schedule is being updated
   */
  id?: number;
  /**
   * Schedule
   * @description Array of daily availability objects defining the new schedule
   */
  schedule?: {
      /**
       * Day
       * @description Numeric day of the week, where 0=Sunday and 6=Saturday
       */
      day: number;
      /**
       * Is Available
       * @description Whether the agent is available on this day
       */
      is_available: boolean;
      /**
       * Label
       * @description Name of the day, e.g., 'Sunday'
       */
      label: string;
      /**
       * Times
       * @description List of available time periods for the day
       */
      times: {
          /**
           * End
           * @description End time in HH:MM:SS format
           */
          end: string;
          /**
           * Start
           * @description Start time in HH:MM:SS format or 'allday'
           */
          start: string;
      }[];
  }[];
};

/**
 * Type of CALLINGLY's CALLINGLY_UPDATE_SCHEDULE tool output.
 */
type CALLINGLY_UPDATE_SCHEDULE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Schedules
       * @description List of availability schedules for the agent
       */
      schedules: {
          /**
           * Day
           * @description Numeric day of the week, where 0=Sunday and 6=Saturday
           */
          day: number;
          /**
           * Is Available
           * @description Whether the agent is available on this day
           */
          is_available: boolean;
          /**
           * Label
           * @description Name of the day, e.g., 'Sunday'
           */
          label: string;
          /**
           * Times
           * @description List of available time periods for the day
           */
          times: {
              /**
               * End
               * @description End time in HH:MM:SS format
               */
              end: string;
              /**
               * Start
               * @description Start time in HH:MM:SS format or 'allday'
               */
              start: string;
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
 * Type of CALLINGLY's CALLINGLY_UPDATE_TEAM_AGENT_SETTINGS tool input.
 */
type CALLINGLY_UPDATE_TEAM_AGENT_SETTINGS_INPUT = {
  /**
   * Agent Id
   * @description Unique identifier of the agent within the team.
   */
  agent_id?: number;
  /**
   * Cap
   * @description Maximum number of calls cap for the agent. Set to null for unlimited capacity.
   */
  cap?: number | null;
  /**
   * Priority
   * @description Calling priority of the agent within the team, where 1 is highest priority.
   */
  priority?: number;
  /**
   * Team Id
   * @description Unique identifier of the team.
   */
  team_id?: number;
};

/**
 * Type of CALLINGLY's CALLINGLY_UPDATE_TEAM_AGENT_SETTINGS tool output.
 */
type CALLINGLY_UPDATE_TEAM_AGENT_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cap
       * @description Maximum number of calls cap for the agent, if any (null means unlimited).
       * @default null
       */
      cap: number | null;
      /**
       * Id
       * @description Unique identifier of the agent.
       */
      id: number;
      /**
       * Name
       * @description Full name of the agent.
       */
      name: string;
      /**
       * Priority
       * @description Calling priority of the agent within the team.
       */
      priority: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLINGLY's CALLINGLY_UPDATE_TEAM_USERS tool input.
 */
type CALLINGLY_UPDATE_TEAM_USERS_INPUT = {
  /**
   * Agents
   * @description List of agent IDs to assign to the team.
   */
  agents?: number[];
  /**
   * Id
   * @description Unique identifier of the team to update users for.
   */
  id?: number;
};

/**
 * Type of CALLINGLY's CALLINGLY_UPDATE_TEAM_USERS tool output.
 */
type CALLINGLY_UPDATE_TEAM_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Agents
       * @description Updated list of agents assigned to the team.
       */
      agents: {
          /**
           * Cap
           * @description Maximum number of calls cap for the agent, if any.
           * @default null
           */
          cap: number | null;
          /**
           * Id
           * @description Unique identifier of the agent.
           */
          id: number;
          /**
           * Name
           * @description Full name of the agent.
           */
          name: string;
          /**
           * Priority
           * @description Agent's calling priority within the team.
           */
          priority: number;
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
 * Type of CALLINGLY's CALLINGLY_UPDATE_WEBHOOK tool input.
 */
type CALLINGLY_UPDATE_WEBHOOK_INPUT = {
  /**
   * Call Direction
   * @description For call_completed events only: whether to trigger on outbound or inbound calls.
   * @default null
   * @enum {string|null}
   */
  call_direction: "outbound" | "inbound" | null;
  /**
   * Call Lead Status
   * @description For call_completed events only: lead outcome filter.
   * @default null
   * @enum {string|null}
   */
  call_lead_status: "contacted" | "missed" | "removed" | "voicemail" | null;
  /**
   * Call Status
   * @description For call_completed events only: status filter.
   * @default null
   * @enum {string|null}
   */
  call_status: "completed" | "missed" | "offline" | null;
  /**
   * Event
   * @description Event that triggers this webhook.
   * @default null
   * @enum {string|null}
   */
  event: "call_completed" | "lead_created" | "lead_updated" | null;
  /**
   * Field
   * @description For lead_created or lead_updated events only: field to watch for changes.
   * @default null
   * @enum {string|null}
   */
  field: "lead_owner" | "result" | "stage" | "status" | "tags" | null;
  /**
   * Filter
   * @description For lead_created or lead_updated events only: value the watched field must match.
   * @default null
   */
  filter: string | null;
  /**
   * Id
   * @description Unique identifier of the webhook to update
   */
  id?: number;
  /**
   * Name
   * @description A descriptive name for the webhook.
   * @default null
   */
  name: string | null;
  /**
   * Number Id
   * @description For call_completed events only when call_direction is inbound: the number ID to filter on.
   * @default null
   */
  number_id: number | null;
  /**
   * Target Url
   * @description The callback URL to receive the webhook.
   * @default null
   */
  target_url: string | null;
  /**
   * Team Id
   * @description For call_completed events only when call_direction is outbound: the team ID to filter on.
   * @default null
   */
  team_id: number | null;
};

/**
 * Type of CALLINGLY's CALLINGLY_UPDATE_WEBHOOK tool output.
 */
type CALLINGLY_UPDATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Account ID associated with the webhook.
       */
      account_id: number;
      /**
       * Call Lead Status
       * @description For call_completed events: lead outcome filter returned, if any.
       * @default null
       */
      call_lead_status: string | null;
      /**
       * Call Status
       * @description For call_completed events: status filter returned, if any.
       * @default null
       */
      call_status: string | null;
      /**
       * Event
       * @description Event type for the webhook.
       */
      event: string;
      /**
       * Field
       * @description Field filter configured for lead events, if any.
       * @default null
       */
      field: string | null;
      /**
       * Filter
       * @description Value filter configured for lead events, if any.
       * @default null
       */
      filter: string | null;
      /**
       * Id
       * @description Unique identifier of the webhook.
       */
      id: number;
      /**
       * Name
       * @description Name of the webhook.
       */
      name: string;
      /**
       * Number Id
       * @description Number ID configured for the webhook, if any.
       * @default null
       */
      number_id: number | null;
      /**
       * Target Url
       * @description Callback URL configured for the webhook.
       */
      target_url: string;
      /**
       * Team Id
       * @description Team ID configured for the webhook, if any.
       * @default null
       */
      team_id: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "CALLINGLY".
 */
export type CALLINGLY_TOOL_INPUTS = {
  ACTIVATE_DEACTIVATE_CLIENT: CALLINGLY_ACTIVATE_DEACTIVATE_CLIENT_INPUT
  CREATE_AGENT: CALLINGLY_CREATE_AGENT_INPUT
  CREATE_CALL: CALLINGLY_CREATE_CALL_INPUT
  CREATE_CLIENT: CALLINGLY_CREATE_CLIENT_INPUT
  CREATE_TEAM: CALLINGLY_CREATE_TEAM_INPUT
  CREATE_WEBHOOK: CALLINGLY_CREATE_WEBHOOK_INPUT
  DELETE_AGENT: CALLINGLY_DELETE_AGENT_INPUT
  DELETE_CLIENT: CALLINGLY_DELETE_CLIENT_INPUT
  DELETE_WEBHOOK: CALLINGLY_DELETE_WEBHOOK_INPUT
  GET_AGENT_SCHEDULE: CALLINGLY_GET_AGENT_SCHEDULE_INPUT
  GET_CALL: CALLINGLY_GET_CALL_INPUT
  GET_LEAD: CALLINGLY_GET_LEAD_INPUT
  GET_TEAM: CALLINGLY_GET_TEAM_INPUT
  GET_WEBHOOK: CALLINGLY_GET_WEBHOOK_INPUT
  LIST_CALLS: CALLINGLY_LIST_CALLS_INPUT
  LIST_CLIENTS: CALLINGLY_LIST_CLIENTS_INPUT
  LIST_LEADS: CALLINGLY_LIST_LEADS_INPUT
  LIST_TEAMS: CALLINGLY_LIST_TEAMS_INPUT
  LIST_TEAM_USERS: CALLINGLY_LIST_TEAM_USERS_INPUT
  LIST_USERS: CALLINGLY_LIST_USERS_INPUT
  LIST_WEBHOOKS: CALLINGLY_LIST_WEBHOOKS_INPUT
  REMOVE_TEAM_AGENT: CALLINGLY_REMOVE_TEAM_AGENT_INPUT
  UPDATE_AGENT: CALLINGLY_UPDATE_AGENT_INPUT
  UPDATE_SCHEDULE: CALLINGLY_UPDATE_SCHEDULE_INPUT
  UPDATE_TEAM_AGENT_SETTINGS: CALLINGLY_UPDATE_TEAM_AGENT_SETTINGS_INPUT
  UPDATE_TEAM_USERS: CALLINGLY_UPDATE_TEAM_USERS_INPUT
  UPDATE_WEBHOOK: CALLINGLY_UPDATE_WEBHOOK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CALLINGLY".
 */
export type CALLINGLY_TOOL_OUTPUTS = {
  ACTIVATE_DEACTIVATE_CLIENT: CALLINGLY_ACTIVATE_DEACTIVATE_CLIENT_OUTPUT
  CREATE_AGENT: CALLINGLY_CREATE_AGENT_OUTPUT
  CREATE_CALL: CALLINGLY_CREATE_CALL_OUTPUT
  CREATE_CLIENT: CALLINGLY_CREATE_CLIENT_OUTPUT
  CREATE_TEAM: CALLINGLY_CREATE_TEAM_OUTPUT
  CREATE_WEBHOOK: CALLINGLY_CREATE_WEBHOOK_OUTPUT
  DELETE_AGENT: CALLINGLY_DELETE_AGENT_OUTPUT
  DELETE_CLIENT: CALLINGLY_DELETE_CLIENT_OUTPUT
  DELETE_WEBHOOK: CALLINGLY_DELETE_WEBHOOK_OUTPUT
  GET_AGENT_SCHEDULE: CALLINGLY_GET_AGENT_SCHEDULE_OUTPUT
  GET_CALL: CALLINGLY_GET_CALL_OUTPUT
  GET_LEAD: CALLINGLY_GET_LEAD_OUTPUT
  GET_TEAM: CALLINGLY_GET_TEAM_OUTPUT
  GET_WEBHOOK: CALLINGLY_GET_WEBHOOK_OUTPUT
  LIST_CALLS: CALLINGLY_LIST_CALLS_OUTPUT
  LIST_CLIENTS: CALLINGLY_LIST_CLIENTS_OUTPUT
  LIST_LEADS: CALLINGLY_LIST_LEADS_OUTPUT
  LIST_TEAMS: CALLINGLY_LIST_TEAMS_OUTPUT
  LIST_TEAM_USERS: CALLINGLY_LIST_TEAM_USERS_OUTPUT
  LIST_USERS: CALLINGLY_LIST_USERS_OUTPUT
  LIST_WEBHOOKS: CALLINGLY_LIST_WEBHOOKS_OUTPUT
  REMOVE_TEAM_AGENT: CALLINGLY_REMOVE_TEAM_AGENT_OUTPUT
  UPDATE_AGENT: CALLINGLY_UPDATE_AGENT_OUTPUT
  UPDATE_SCHEDULE: CALLINGLY_UPDATE_SCHEDULE_OUTPUT
  UPDATE_TEAM_AGENT_SETTINGS: CALLINGLY_UPDATE_TEAM_AGENT_SETTINGS_OUTPUT
  UPDATE_TEAM_USERS: CALLINGLY_UPDATE_TEAM_USERS_OUTPUT
  UPDATE_WEBHOOK: CALLINGLY_UPDATE_WEBHOOK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CALLINGLY toolkit.
 */
export const CALLINGLY = {
  slug: "callingly",
  tools: {
    /**
     * Tool to activate or deactivate a client account. use when you need to toggle client access after onboarding or offboarding. example: "activate client 123" or "deactivate client 456".
     */
    ACTIVATE_DEACTIVATE_CLIENT: "CALLINGLY_ACTIVATE_DEACTIVATE_CLIENT",
    /**
     * Tool to create a new agent. use when you need to register an agent in callingly after gathering their account id and contact details.
     */
    CREATE_AGENT: "CALLINGLY_CREATE_AGENT",
    /**
     * Tool to create a new outbound call record. use after gathering call and lead details.
     */
    CREATE_CALL: "CALLINGLY_CREATE_CALL",
    /**
     * Tool to create a new client. use when adding a new client to your callingly account.
     */
    CREATE_CLIENT: "CALLINGLY_CREATE_CLIENT",
    /**
     * Tool to create a new team. use when setting up a team configuration before adding agents.
     */
    CREATE_TEAM: "CALLINGLY_CREATE_TEAM",
    /**
     * Tool to create a new webhook for call or lead events. use when you need to receive real-time notifications on specific events. example: "create a webhook for call completed events to http://example.com/callback".
     */
    CREATE_WEBHOOK: "CALLINGLY_CREATE_WEBHOOK",
    /**
     * Tool to delete an agent. use when permanently removing an agent after confirming the agent id.
     */
    DELETE_AGENT: "CALLINGLY_DELETE_AGENT",
    /**
     * Tool to delete a client. use when you need to remove an existing client from your account after confirming its id.
     */
    DELETE_CLIENT: "CALLINGLY_DELETE_CLIENT",
    /**
     * Tool to delete a webhook. use when permanently removing a webhook by its id.
     */
    DELETE_WEBHOOK: "CALLINGLY_DELETE_WEBHOOK",
    /**
     * Tool to retrieve the availability schedule for a specific agent. use when you need to know which days and times the agent is available.
     */
    GET_AGENT_SCHEDULE: "CALLINGLY_GET_AGENT_SCHEDULE",
    /**
     * Tool to retrieve details of a specific call by its id. use when you need detailed metadata of a call record after confirming call id.
     */
    GET_CALL: "CALLINGLY_GET_CALL",
    /**
     * Tool to retrieve details of a specific lead by its id. use when you need full lead details before follow-up actions.
     */
    GET_LEAD: "CALLINGLY_GET_LEAD",
    /**
     * Tool to retrieve details of a specific team. use after obtaining the team id to fetch its configuration details.
     */
    GET_TEAM: "CALLINGLY_GET_TEAM",
    /**
     * Tool to retrieve details of a specific webhook by its id. use when you need to inspect a webhook's configuration before modifying or deleting it.
     */
    GET_WEBHOOK: "CALLINGLY_GET_WEBHOOK",
    /**
     * Tool to list calls. use when you need to retrieve multiple call records with optional filters such as date range, team, and pagination after identifying the need for a collection of calls.
     */
    LIST_CALLS: "CALLINGLY_LIST_CALLS",
    /**
     * Tool to list clients. use when you need to retrieve all clients associated with your account.
     */
    LIST_CLIENTS: "CALLINGLY_LIST_CLIENTS",
    /**
     * Tool to list leads based on provided filters like date range or phone number. use after confirming filter criteria when bulk lead retrieval is needed.
     */
    LIST_LEADS: "CALLINGLY_LIST_LEADS",
    /**
     * Tool to list teams. use when you need to retrieve all teams associated with your account.
     */
    LIST_TEAMS: "CALLINGLY_LIST_TEAMS",
    /**
     * Tool to retrieve a list of agents associated with a specific team. use when you need to inspect the team's users before further agent management tasks.
     */
    LIST_TEAM_USERS: "CALLINGLY_LIST_TEAM_USERS",
    /**
     * Tool to retrieve a list of agents. use when you need to see all agents available under the authenticated account, optionally filtering by a specific client account.
     */
    LIST_USERS: "CALLINGLY_LIST_USERS",
    /**
     * Tool to list configured webhooks. use when you need to retrieve all webhooks configured in your account to review or manage them.
     */
    LIST_WEBHOOKS: "CALLINGLY_LIST_WEBHOOKS",
    /**
     * Tool to remove a specific agent from a team. use when you need to disassociate an agent from a team after confirming both team and agent ids.
     */
    REMOVE_TEAM_AGENT: "CALLINGLY_REMOVE_TEAM_AGENT",
    /**
     * Tool to update an existing agent's details. use when you need to modify agent information post-creation.
     */
    UPDATE_AGENT: "CALLINGLY_UPDATE_AGENT",
    /**
     * Tool to update an agent's availability schedule. use when you need to set or override an agent's daily availability times.
     */
    UPDATE_SCHEDULE: "CALLINGLY_UPDATE_SCHEDULE",
    /**
     * Tool to update settings (priority, capacity) for a specific team agent. use when adjusting an agent's priority or call capacity after team configuration.
     */
    UPDATE_TEAM_AGENT_SETTINGS: "CALLINGLY_UPDATE_TEAM_AGENT_SETTINGS",
    /**
     * Tool to update the list of agents assigned to a team. use when reassigning team members before call dispatch.
     */
    UPDATE_TEAM_USERS: "CALLINGLY_UPDATE_TEAM_USERS",
    /**
     * Tool to update an existing webhook's configuration. use when you need to change settings like target url or filters after confirming webhook id.
     */
    UPDATE_WEBHOOK: "CALLINGLY_UPDATE_WEBHOOK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CALLINGLY".
 */
export type CALLINGLY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CALLINGLY".
 */
export type CALLINGLY_TRIGGER_EVENTS = {}
