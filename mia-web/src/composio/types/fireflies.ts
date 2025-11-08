import { type TriggerEvent } from "@composio/core"

// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FIREFLIES's FIREFLIES_ADD_TO_LIVE tool input.
 */
type FIREFLIES_ADD_TO_LIVE_INPUT = {
  /**
   * Attendees
   * @description Array of Attendees for expected meeting participants.
   */
  attendees?: {
      /**
       * Display Name
       * @description The name of the attendee
       */
      displayName: string;
      /**
       * Email
       * @description The email of the attendee
       */
      email: string;
      /**
       * Phone Number
       * @description The phone number of the attendee
       */
      phoneNumber: string;
  }[];
  /**
   * Duration
   * @description Meeting duration in minutes. Minimum of 15 and maximum of 120 minutes. Defaults to 60 minutes if param is not provided
   * @default 60
   */
  duration: number;
  /**
   * Language
   * @description Language of the meeting. Defaults to English if not provided. For a complete list of language codes, please view Language Codes
   * @default English
   */
  language: string;
  /**
   * Meeting Link
   * @description A valid http URL for the meeting link, i.e. Google Meet, Zoom, etc
   */
  meeting_link?: string;
  /**
   * Meeting Password
   * @description Password for the meeting, if applicable.
   * @default null
   */
  meeting_password: string | null;
  /**
   * Title
   * @description Title or name of the meeting, this will be used to identify the transcribed file. If title is not provided, a default title will be set automatically
   * @default null
   */
  title: string | null;
};

/**
 * Type of FIREFLIES's FIREFLIES_ADD_TO_LIVE tool output.
 */
type FIREFLIES_ADD_TO_LIVE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Outputs
       * @description A list of transcripts
       */
      outputs: {
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
 * Type of FIREFLIES's FIREFLIES_DELETE_TRANSCRIPT_BY_ID tool input.
 */
type FIREFLIES_DELETE_TRANSCRIPT_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the transcript to fetch.
   */
  id?: string;
};

/**
 * Type of FIREFLIES's FIREFLIES_DELETE_TRANSCRIPT_BY_ID tool output.
 */
type FIREFLIES_DELETE_TRANSCRIPT_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Outputs
       * @description A list of transcripts
       */
      outputs: {
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
 * Type of FIREFLIES's FIREFLIES_FETCH_AI_APP_OUTPUTS tool input.
 */
type FIREFLIES_FETCH_AI_APP_OUTPUTS_INPUT = {
  /**
   * App Id
   * @description The app_id parameter retrieves all outputs against a specific AI App.
   */
  app_id?: string;
  /**
   * Limit
   * @description Maximum number of apps outputs to fetch in a single query. The default query fetches 10 records, which is the maximum for a single request.
   * @default 10
   */
  limit: number;
  /**
   * Skip
   * @description Number of records to skip over. Helps paginate results when used in combination with the limit param.
   * @default 0
   */
  skip: number;
  /**
   * Transcript Id
   * @description The transcript_id parameter retrieves all outputs against a specific meeting/transcript.
   */
  transcript_id?: string;
};

/**
 * Type of FIREFLIES's FIREFLIES_FETCH_AI_APP_OUTPUTS tool output.
 */
type FIREFLIES_FETCH_AI_APP_OUTPUTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Outputs
       * @description A list of outputs for the specified AI App or meeting/transcript.
       */
      outputs: {
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
 * Type of FIREFLIES's FIREFLIES_GET_BITES tool input.
 */
type FIREFLIES_GET_BITES_INPUT = {
  /**
   * Limit
   * @description Maximum number of bites to fetch.
   */
  limit?: number;
  /**
   * Mine
   * @description Filter to include only the user's own bites.
   */
  mine?: boolean;
  /**
   * My Team
   * @description Filter to include bites from the user's team.
   */
  my_team?: boolean;
  /**
   * Skip
   * @description Number of bites to skip.
   */
  skip?: number;
  /**
   * Transcript Id
   * @description The ID of the transcript to fetch bites for.
   */
  transcript_id?: string;
};

/**
 * Type of FIREFLIES's FIREFLIES_GET_BITES tool output.
 */
type FIREFLIES_GET_BITES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Outputs
       * @description A list of bites
       */
      outputs: {
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
 * Type of FIREFLIES's FIREFLIES_GET_BITE_BY_ID tool input.
 */
type FIREFLIES_GET_BITE_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the bite to fetch.
   */
  id?: string;
};

/**
 * Type of FIREFLIES's FIREFLIES_GET_BITE_BY_ID tool output.
 */
type FIREFLIES_GET_BITE_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Outputs
       * @description A list of transcripts
       */
      outputs: {
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
 * Type of FIREFLIES's FIREFLIES_GET_TRANSCRIPTS tool input.
 */
type FIREFLIES_GET_TRANSCRIPTS_INPUT = {
  /**
   * From Date
   * @description Start date for filtering transcripts. Accepts formats: 'YYYY-MM-DD' or ISO 8601 format 'YYYY-MM-DDTHH:MM:SS'. Simple dates will be converted to start of day in ISO format.
   */
  from_date?: string;
  /**
   * Host Email
   * @description Email of the host of the meeting.
   */
  host_email?: string;
  /**
   * Limit
   * @description Maximum number of transcripts to fetch.
   */
  limit?: number;
  /**
   * Organizer Email
   * @description Email of the organizer of the meeting.
   */
  organizer_email?: string;
  /**
   * Participant Email
   * @description Email of a participant in the meeting.
   */
  participant_email?: string;
  /**
   * Skip
   * @description Number of transcripts to skip.
   */
  skip?: number;
  /**
   * Title
   * @description Title of the meeting.
   */
  title?: string;
  /**
   * To Date
   * @description End date for filtering transcripts. Accepts formats: 'YYYY-MM-DD' or ISO 8601 format 'YYYY-MM-DDTHH:MM:SS'. Simple dates will be converted to end of day in ISO format.
   */
  to_date?: string;
  /**
   * User Id
   * @description The User ID to fetch the transcripts of.
   */
  user_id?: string;
};

/**
 * Type of FIREFLIES's FIREFLIES_GET_TRANSCRIPTS tool output.
 */
type FIREFLIES_GET_TRANSCRIPTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Outputs
       * @description A list of transcripts
       */
      outputs: {
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
 * Type of FIREFLIES's FIREFLIES_GET_TRANSCRIPT_BY_ID tool input.
 */
type FIREFLIES_GET_TRANSCRIPT_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the transcript to fetch.
   */
  id?: string;
};

/**
 * Type of FIREFLIES's FIREFLIES_GET_TRANSCRIPT_BY_ID tool output.
 */
type FIREFLIES_GET_TRANSCRIPT_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Outputs
       * @description The complete transcript data including all available fields and sentences
       */
      outputs: {
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
 * Type of FIREFLIES's FIREFLIES_GET_USERS tool input.
 */
type FIREFLIES_GET_USERS_INPUT = object;

/**
 * Type of FIREFLIES's FIREFLIES_GET_USERS tool output.
 */
type FIREFLIES_GET_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Outputs
       * @description A list of outputs for the specified AI App or meeting/transcript.
       */
      outputs: {
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
 * Type of FIREFLIES's FIREFLIES_GET_USER_BY_ID tool input.
 */
type FIREFLIES_GET_USER_BY_ID_INPUT = {
  /**
   * Id
   * @description The User ID to the details of.
   */
  id?: string;
};

/**
 * Type of FIREFLIES's FIREFLIES_GET_USER_BY_ID tool output.
 */
type FIREFLIES_GET_USER_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Outputs
       * @description A list of outputs for the specified AI App or meeting/transcript.
       */
      outputs: {
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
 * Type of FIREFLIES's FIREFLIES_UPLOAD_AUDIO tool input.
 */
type FIREFLIES_UPLOAD_AUDIO_INPUT = {
  /**
   * Attendees
   * @description An array of objects containing Attendee objects. This is relevant if you have active integrations like Salesforce, Hubspot etc. Fireflies uses the attendees value to push meeting notes to your active CRM integrations where notes are added to an existing contact or a new contact is created. Each object contains - displayName, email, phoneNumber, client_reference_id
   */
  attendees?: {
      /**
       * Display Name
       * @description The name of the attendee
       */
      displayName: string;
      /**
       * Email
       * @description The email of the attendee
       */
      email: string;
      /**
       * Phone Number
       * @description The phone number of the attendee
       */
      phoneNumber: string;
  }[];
  /**
   * Client Reference Id
   * @description The client reference id of the attendee
   */
  client_reference_id?: string;
  /**
   * Custom Language
   * @description Specify a custom language code for your meeting, e.g. es for Spanish or de for German. For a complete list of language codes, please view Language Codes
   */
  custom_language?: string;
  /**
   * Save Video
   * @description Specify whether the video should be saved or not.
   * @default false
   */
  save_video: boolean;
  /**
   * Title
   * @description Title or name of the meeting, this will be used to identify the transcribed file
   */
  title?: string;
  /**
   * Url
   * @description The url of media file to be transcribed. It MUST be a valid https string and publicly accessible to enable us download the audio / video file. Double check to see if the media file is downloadable and that the link is not a preview link before making the request. The media file must be either of these formats - mp3, mp4, wav, m4a, ogg
   */
  url?: string;
  /**
   * Webhook
   * @description URL for the webhook that receives notifications when transcription completes
   */
  webhook?: string;
};

/**
 * Type of FIREFLIES's FIREFLIES_UPLOAD_AUDIO tool output.
 */
type FIREFLIES_UPLOAD_AUDIO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Outputs
       * @description A list of transcripts
       */
      outputs: {
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
 * Type map of all available tool input types for toolkit "FIREFLIES".
 */
export type FIREFLIES_TOOL_INPUTS = {
  ADD_TO_LIVE: FIREFLIES_ADD_TO_LIVE_INPUT
  DELETE_TRANSCRIPT_BY_ID: FIREFLIES_DELETE_TRANSCRIPT_BY_ID_INPUT
  FETCH_AI_APP_OUTPUTS: FIREFLIES_FETCH_AI_APP_OUTPUTS_INPUT
  GET_BITES: FIREFLIES_GET_BITES_INPUT
  GET_BITE_BY_ID: FIREFLIES_GET_BITE_BY_ID_INPUT
  GET_TRANSCRIPTS: FIREFLIES_GET_TRANSCRIPTS_INPUT
  GET_TRANSCRIPT_BY_ID: FIREFLIES_GET_TRANSCRIPT_BY_ID_INPUT
  GET_USERS: FIREFLIES_GET_USERS_INPUT
  GET_USER_BY_ID: FIREFLIES_GET_USER_BY_ID_INPUT
  UPLOAD_AUDIO: FIREFLIES_UPLOAD_AUDIO_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FIREFLIES".
 */
export type FIREFLIES_TOOL_OUTPUTS = {
  ADD_TO_LIVE: FIREFLIES_ADD_TO_LIVE_OUTPUT
  DELETE_TRANSCRIPT_BY_ID: FIREFLIES_DELETE_TRANSCRIPT_BY_ID_OUTPUT
  FETCH_AI_APP_OUTPUTS: FIREFLIES_FETCH_AI_APP_OUTPUTS_OUTPUT
  GET_BITES: FIREFLIES_GET_BITES_OUTPUT
  GET_BITE_BY_ID: FIREFLIES_GET_BITE_BY_ID_OUTPUT
  GET_TRANSCRIPTS: FIREFLIES_GET_TRANSCRIPTS_OUTPUT
  GET_TRANSCRIPT_BY_ID: FIREFLIES_GET_TRANSCRIPT_BY_ID_OUTPUT
  GET_USERS: FIREFLIES_GET_USERS_OUTPUT
  GET_USER_BY_ID: FIREFLIES_GET_USER_BY_ID_OUTPUT
  UPLOAD_AUDIO: FIREFLIES_UPLOAD_AUDIO_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Type of FIREFLIES's TRANSCRIPTION_COMPLETE trigger payload.
 */
type FIREFLIES_TRANSCRIPTION_COMPLETE_PAYLOAD = {
  /**
   * Event Type
   * @description Type of transcript event
   * @default transcription_complete
   */
  event_type: string;
  /**
   * Transcript
   * @description The transcript that was completed
   */
  transcript?: {
      /**
       * Id
       * @description The ID of the transcript
       */
      id: string;
      /**
       * Summary
       * @description The summary of the transcript
       * @default null
       */
      summary: {
          [key: string]: unknown;
      } | null;
  };
};

/**
 * Map of Composio's FIREFLIES toolkit.
 */
export const FIREFLIES = {
  slug: "fireflies",
  tools: {
    /**
     * The addtolive action allows you to add the fireflies.ai bot to an ongoing meeting. note: this action requires a paid fireflies plan to add bots to meetings.
     */
    ADD_TO_LIVE: "FIREFLIES_ADD_TO_LIVE",
    /**
     * The deletetranscriptbyid action is designed to delete a specific transcript by its id.
     */
    DELETE_TRANSCRIPT_BY_ID: "FIREFLIES_DELETE_TRANSCRIPT_BY_ID",
    /**
     * Fetch outputs for a specific ai app or meeting/transcript.
     */
    FETCH_AI_APP_OUTPUTS: "FIREFLIES_FETCH_AI_APP_OUTPUTS",
    /**
     * The getbites action is designed to fetch a list of bites against input arguments.
     */
    GET_BITES: "FIREFLIES_GET_BITES",
    /**
     * The getbite action is designed to fetch details associated with a specific bite id.
     */
    GET_BITE_BY_ID: "FIREFLIES_GET_BITE_BY_ID",
    /**
     * The gettranscripts action is designed to fetch a list of transcripts against input arguments.
     */
    GET_TRANSCRIPTS: "FIREFLIES_GET_TRANSCRIPTS",
    /**
     * The gettranscriptbyid action is designed to fetch details associated with a specific transcript id. note: this action requires a paid fireflies plan to access transcript details.
     */
    GET_TRANSCRIPT_BY_ID: "FIREFLIES_GET_TRANSCRIPT_BY_ID",
    /**
     * The getusers action is designed to fetch a list of all users within the team.
     */
    GET_USERS: "FIREFLIES_GET_USERS",
    /**
     * The getuser action is designed to fetch details associated with a specific user id.
     */
    GET_USER_BY_ID: "FIREFLIES_GET_USER_BY_ID",
    /**
     * The uploadaudio action allows you to upload audio files to fireflies.ai for transcription. note: this action requires a paid fireflies plan to upload and transcribe audio files.
     */
    UPLOAD_AUDIO: "FIREFLIES_UPLOAD_AUDIO",
  },
  triggerTypes: {
    /**
     * Triggers when a transcription is complete. Polls Fireflies API for transcripts
     *     created or updated since the last poll time. Handles rate limiting gracefully.
     */
    TRANSCRIPTION_COMPLETE: "FIREFLIES_TRANSCRIPTION_COMPLETE",
  },
}

/**
 * Type map of all available trigger payloads for toolkit "FIREFLIES".
 */
export type FIREFLIES_TRIGGER_PAYLOADS = {
  TRANSCRIPTION_COMPLETE: FIREFLIES_TRANSCRIPTION_COMPLETE_PAYLOAD
}

/**
 * Type map of all available trigger events for toolkit "FIREFLIES".
 */
export type FIREFLIES_TRIGGER_EVENTS = {
  TRANSCRIPTION_COMPLETE: TriggerEvent<FIREFLIES_TRANSCRIPTION_COMPLETE_PAYLOAD>
}
