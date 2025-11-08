// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CLOSE's CLOSE_CLOSE_CREATE_SMS tool input.
 */
type CLOSE_CLOSE_CREATE_SMS_INPUT = {
  /**
   * Contact Id
   * @description The ID of the contact associated with the SMS
   * @default null
   */
  contact_id: string | null;
  /**
   * Date Scheduled
   * @description The date and time when the SMS should be sent (required if status is 'scheduled')
   * @default null
   */
  date_scheduled: string | null;
  /**
   * Direction
   * @description The direction of the SMS. Defaults to 'inbound' if status is inbox, otherwise 'outbound'
   * @default null
   * @enum {string|null}
   */
  direction: "inbound" | "outbound" | null;
  /**
   * Lead Id
   * @description The ID of the lead associated with the SMS
   */
  lead_id?: string;
  /**
   * Local Phone
   * @description The internal phone number used to send the SMS. Must be associated with a Phone Number of type 'internal'
   */
  local_phone?: string;
  /**
   * Remote Phone
   * @description The recipient's phone number
   */
  remote_phone?: string;
  /**
   * Send In
   * @description Number of seconds to delay sending the SMS when status is outbox. Must be less than 60
   * @default null
   */
  send_in: number | null;
  /**
   * Status
   * @description The status of the SMS. Must be one of: inbox, draft, scheduled, outbox, sent
   * @enum {string}
   */
  status?: "inbox" | "draft" | "scheduled" | "outbox" | "sent";
  /**
   * Template Id
   * @description The ID of an SMS Template to render and use as the message content
   * @default null
   */
  template_id: string | null;
  /**
   * Text
   * @description The content of the SMS message
   */
  text?: string;
};

/**
 * Type of CLOSE's CLOSE_CLOSE_CREATE_SMS tool output.
 */
type CLOSE_CLOSE_CREATE_SMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Date Created
       * @description The date and time when the SMS was created
       */
      date_created: string;
      /**
       * Id
       * @description The ID of the created SMS activity
       */
      id: string;
      /**
       * Lead Id
       * @description The ID of the lead associated with the SMS
       */
      lead_id: string;
      /**
       * Local Phone
       * @description The internal phone number used to send the SMS
       */
      local_phone: string;
      /**
       * Remote Phone
       * @description The recipient's phone number
       */
      remote_phone: string;
      /**
       * Status
       * @description The status of the created SMS
       */
      status: string;
      /**
       * Text
       * @description The content of the SMS message
       */
      text: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLOSE's CLOSE_CREATE_CALL tool input.
 */
type CLOSE_CREATE_CALL_INPUT = {
  /**
   * Contact Id
   * @description The ID of the contact associated with the call
   * @default null
   */
  contact_id: string | null;
  /**
   * Direction
   * @description The direction of the call (outbound or inbound)
   * @enum {string}
   */
  direction?: "outbound" | "inbound";
  /**
   * CallDisposition
   * @description The outcome of the call (answered, no-answer, vm-answer, vm-left, busy, blocked, error, abandoned)
   * @default null
   * @enum {string|null}
   */
  disposition: "answered" | "no-answer" | "vm-answer" | "vm-left" | "busy" | "blocked" | "error" | "abandoned" | null;
  /**
   * Duration
   * @description Duration of the call in seconds
   * @default null
   */
  duration: number | null;
  /**
   * Lead Id
   * @description The ID of the lead associated with the call
   */
  lead_id?: string;
  /**
   * Note
   * @description A text note about the call
   * @default null
   */
  note: string | null;
  /**
   * Phone
   * @description The phone number associated with the call
   * @default null
   */
  phone: string | null;
  /**
   * Recording Url
   * Format: uri
   * @description HTTPS URL pointing to the MP3 recording of the call
   * @default null
   */
  recording_url: string | null;
  /**
   * User Id
   * @description The ID of the user who made/received the call
   * @default null
   */
  user_id: string | null;
};

/**
 * Type of CLOSE's CLOSE_CREATE_CALL tool output.
 */
type CLOSE_CREATE_CALL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Date Created
       * @description Timestamp when the call was created
       */
      date_created: string;
      /**
       * Date Updated
       * @description Timestamp when the call was last updated
       */
      date_updated: string;
      /**
       * Direction
       * @description The direction of the call
       */
      direction: string;
      /**
       * Disposition
       * @description The outcome of the call
       * @default null
       */
      disposition: string | null;
      /**
       * Duration
       * @description Duration of the call in seconds
       * @default null
       */
      duration: number | null;
      /**
       * Id
       * @description ID of the created call activity
       */
      id: string;
      /**
       * Lead Id
       * @description The ID of the lead associated with the call
       */
      lead_id: string;
      /**
       * Note
       * @description Text note about the call
       * @default null
       */
      note: string | null;
      /**
       * Recording Url
       * @description URL of the call recording
       * @default null
       */
      recording_url: string | null;
      /**
       * Status
       * @description The status of the call
       */
      status: string;
      /**
       * User Id
       * @description ID of the user who made/received the call
       * @default null
       */
      user_id: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLOSE's CLOSE_CREATE_LEAD tool input.
 */
type CLOSE_CREATE_LEAD_INPUT = {
  /**
   * Addresses
   * @description List of addresses associated with the lead
   * @default null
   */
  addresses: {
      /**
       * Address
       * @description Street address
       */
      address: string;
      /**
       * City
       * @description City name
       * @default null
       */
      city: string | null;
      /**
       * Country
       * @description Country name
       * @default null
       */
      country: string | null;
      /**
       * State
       * @description State or province
       * @default null
       */
      state: string | null;
  }[] | null;
  /**
   * Contacts
   * @description List of contacts associated with the lead
   * @default null
   */
  contacts: {
      /**
       * Emails
       * @description List of email addresses for the contact
       * @default null
       */
      emails: {
          /**
           * Email
           * @description Email address of the contact
           */
          email: string;
      }[] | null;
      /**
       * Name
       * @description Name of the contact
       */
      name: string;
      /**
       * Phones
       * @description List of phone numbers for the contact
       * @default null
       */
      phones: {
          /**
           * Phone
           * @description Phone number of the contact
           */
          phone: string;
      }[] | null;
  }[] | null;
  /**
   * Description
   * @description Description of the lead
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Name of the company/lead
   */
  name?: string;
  /**
   * Status Id
   * @description ID of the lead status. If not provided, organization's default status will be used
   * @default null
   */
  status_id: string | null;
  /**
   * Url
   * @description Website URL of the company
   * @default null
   */
  url: string | null;
};

/**
 * Type of CLOSE's CLOSE_CREATE_LEAD tool output.
 */
type CLOSE_CREATE_LEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Description of the lead
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description ID of the created lead
       */
      id: string;
      /**
       * Name
       * @description Name of the created lead
       */
      name: string;
      /**
       * Status Id
       * @description Status ID of the lead
       */
      status_id: string;
      /**
       * Url
       * @description Website URL of the lead
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
 * Type of CLOSE's CLOSE_CREATE_TASK tool input.
 */
type CLOSE_CREATE_TASK_INPUT = {
  /**
   * Assigned To
   * @description User ID of the person the task is assigned to. If omitted, assigns to the API caller
   * @default null
   */
  assigned_to: string | null;
  /**
   * Date
   * @description The date when the task is actionable. Can be date-only (YYYY-MM-DD) or date-time (YYYY-MM-DDThh:mm:ss+00:00)
   */
  date?: string;
  /**
   * Is Complete
   * @description Whether the task is complete
   * @default false
   */
  is_complete: boolean | null;
  /**
   * Lead Id
   * @description The ID of the lead the task is associated with
   */
  lead_id?: string;
  /**
   * Text
   * @description Description of the task
   */
  text?: string;
};

/**
 * Type of CLOSE's CLOSE_CREATE_TASK tool output.
 */
type CLOSE_CREATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assigned To
       * @description User ID of the person the task is assigned to
       * @default null
       */
      assigned_to: string | null;
      /**
       * Date
       * @description The date when the task is actionable
       */
      date: string;
      /**
       * Id
       * @description ID of the created task
       */
      id: string;
      /**
       * Is Complete
       * @description Whether the task is complete
       */
      is_complete: boolean;
      /**
       * Lead Id
       * @description The ID of the lead the task is associated with
       */
      lead_id: string;
      /**
       * Text
       * @description Description of the task
       */
      text: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLOSE's CLOSE_DELETE_CALL tool input.
 */
type CLOSE_DELETE_CALL_INPUT = {
  /**
   * Call Id
   * @description The unique identifier of the call activity to delete
   */
  call_id?: string;
};

/**
 * Type of CLOSE's CLOSE_DELETE_CALL tool output.
 */
type CLOSE_DELETE_CALL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the call was successfully deleted
       * @default true
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
 * Type of CLOSE's CLOSE_GET_NOTE tool input.
 */
type CLOSE_GET_NOTE_INPUT = {
  /**
   * Date Created  Gt
   * @description Filter notes created after this date (ISO 8601 format)
   * @default null
   */
  date_created__gt: string | null;
  /**
   * Date Created  Lt
   * @description Filter notes created before this date (ISO 8601 format)
   * @default null
   */
  date_created__lt: string | null;
  /**
   * Lead Id
   * @description Filter notes by a specific lead ID
   * @default null
   */
  lead_id: string | null;
  /**
   * User Id
   * @description Filter notes by a specific user ID
   * @default null
   */
  user_id: string | null;
};

/**
 * Type of CLOSE's CLOSE_GET_NOTE tool output.
 */
type CLOSE_GET_NOTE_OUTPUT = {
  /**
   * Data
   * @description Array of notes matching the search criteria
   */
  data?: {
      /**
       * Activity At
       * @description The timestamp when the activity occurred
       */
      activity_at: string;
      /**
       * Attachments
       * @description Array of attachments associated with the note
       * @default null
       */
      attachments: {
          /**
           * Content Type
           * @description The MIME type of the attachment
           */
          content_type: string;
          /**
           * Filename
           * @description The name of the attachment file
           */
          filename: string;
          /**
           * Url
           * @description The URL of the attachment
           */
          url: string;
      }[] | null;
      /**
       * Content
       * @description The text content of the note
       */
      content: string;
      /**
       * Date Created
       * @description The timestamp when the note was created
       */
      date_created: string;
      /**
       * Id
       * @description The unique identifier of the note activity
       */
      id: string;
      /**
       * Lead Id
       * @description The ID of the lead associated with the note
       * @default null
       */
      lead_id: string | null;
      /**
       * User Id
       * @description The ID of the user who created the note
       */
      user_id: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Has More
   * @description Whether there are more results available
   */
  has_more?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "CLOSE".
 */
export type CLOSE_TOOL_INPUTS = {
  CLOSE_CREATE_SMS: CLOSE_CLOSE_CREATE_SMS_INPUT
  CREATE_CALL: CLOSE_CREATE_CALL_INPUT
  CREATE_LEAD: CLOSE_CREATE_LEAD_INPUT
  CREATE_TASK: CLOSE_CREATE_TASK_INPUT
  DELETE_CALL: CLOSE_DELETE_CALL_INPUT
  GET_NOTE: CLOSE_GET_NOTE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CLOSE".
 */
export type CLOSE_TOOL_OUTPUTS = {
  CLOSE_CREATE_SMS: CLOSE_CLOSE_CREATE_SMS_OUTPUT
  CREATE_CALL: CLOSE_CREATE_CALL_OUTPUT
  CREATE_LEAD: CLOSE_CREATE_LEAD_OUTPUT
  CREATE_TASK: CLOSE_CREATE_TASK_OUTPUT
  DELETE_CALL: CLOSE_DELETE_CALL_OUTPUT
  GET_NOTE: CLOSE_GET_NOTE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CLOSE toolkit.
 */
export const CLOSE = {
  slug: "close",
  tools: {
    /**
     * This tool creates a new sms message in close. the tool allows sending immediate sms messages or logging received sms messages using the provided phone numbers and message content. it includes parameters such as local phone, remote phone, text, status, and source.
     */
    CLOSE_CREATE_SMS: "CLOSE_CLOSE_CREATE_SMS",
    /**
     * Creates a new call record in close.com. this tool allows you to log both inbound and outbound calls associated with a lead, supporting parameters such as lead id, direction, and optional support for contact id, phone, duration, note, recording url, and user id.
     */
    CREATE_CALL: "CLOSE_CREATE_CALL",
    /**
     * This tool creates a new lead in close crm. it allows users to create a lead with basic company information and optional contact details, including company name, description, website url, lead status, contacts, and addresses. it operates by sending a request to the api endpoint /lead/ on the close crm platform.
     */
    CREATE_LEAD: "CLOSE_CREATE_LEAD",
    /**
     * This tool creates a new task in close.com. tasks are used to track to-do items and can be associated with leads. the tool will create a task with the specified parameters using the provided text, due date, and is complete flags.
     */
    CREATE_TASK: "CLOSE_CREATE_TASK",
    /**
     * This tool allows you to delete a specific call activity in close.com. it is useful for removing incorrectly logged calls or cleaning up call records. the action deletes a call activity using its unique call id and cannot be undone.
     */
    DELETE_CALL: "CLOSE_DELETE_CALL",
    /**
     * This tool retrieves a list of note activities from close. it allows users to fetch notes with optional filtering parameters, including filtering by lead id, user id, and date ranges. the tool returns details such as note content, creation and update dates, and any associated attachments.
     */
    GET_NOTE: "CLOSE_GET_NOTE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CLOSE".
 */
export type CLOSE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CLOSE".
 */
export type CLOSE_TRIGGER_EVENTS = {}
