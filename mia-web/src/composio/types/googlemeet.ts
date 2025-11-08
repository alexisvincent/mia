// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GOOGLEMEET's GOOGLEMEET_CREATE_MEET tool input.
 */
type GOOGLEMEET_CREATE_MEET_INPUT = {
  /**
   * Access Type
   * @description Access control level for the meeting space.
   * @enum {string}
   */
  access_type?: "OPEN" | "TRUSTED" | "RESTRICTED" | "ACCESS_TYPE_UNSPECIFIED";
  /**
   * Entry Point Access
   * @description Access control for meeting entry points.
   * @enum {string}
   */
  entry_point_access?: "ENTRY_POINT_ACCESS_UNSPECIFIED" | "ALL" | "CREATOR_APP_ONLY";
};

/**
 * Type of GOOGLEMEET's GOOGLEMEET_CREATE_MEET tool output.
 */
type GOOGLEMEET_CREATE_MEET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full JSON response from the Google Meet API upon successful space creation.
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
 * Type of GOOGLEMEET's GOOGLEMEET_GET_CONFERENCE_RECORD_FOR_MEET tool input.
 */
type GOOGLEMEET_GET_CONFERENCE_RECORD_FOR_MEET_INPUT = {
  /**
   * End Time
   * @description The end time of the meeting.
   * @default null
   */
  end_time: string | null;
  /**
   * Meeting Code
   * @description The meeting code of the Google Meet space.
   * @default null
   */
  meeting_code: string | null;
  /**
   * Space Name
   * @description The name of the Google Meet space.
   * @default null
   */
  space_name: string | null;
  /**
   * Start Time
   * @description The start time of the meeting.
   * @default null
   */
  start_time: string | null;
};

/**
 * Type of GOOGLEMEET's GOOGLEMEET_GET_CONFERENCE_RECORD_FOR_MEET tool output.
 */
type GOOGLEMEET_GET_CONFERENCE_RECORD_FOR_MEET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full response data returned by the Google Meet API.
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
 * Type of GOOGLEMEET's GOOGLEMEET_GET_MEET tool input.
 */
type GOOGLEMEET_GET_MEET_INPUT = {
  /**
   * Space Name
   * @description The unique identifier for the Google Meet space.
   */
  space_name?: string;
};

/**
 * Type of GOOGLEMEET's GOOGLEMEET_GET_MEET tool output.
 */
type GOOGLEMEET_GET_MEET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full response data returned by the Google Meet API.
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
 * Type of GOOGLEMEET's GOOGLEMEET_GET_PARTICIPANT_SESSION tool input.
 */
type GOOGLEMEET_GET_PARTICIPANT_SESSION_INPUT = {
  /**
   * Name
   * @description Required. Resource name of the participant. Format: conferenceRecords/{conference_record}/participants/{participant}
   */
  name?: string;
};

/**
 * Type of GOOGLEMEET's GOOGLEMEET_GET_PARTICIPANT_SESSION tool output.
 */
type GOOGLEMEET_GET_PARTICIPANT_SESSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * AnonymousUser
       * @description Anonymous user.
       * @default null
       */
      anonymousUser: {
          /**
           * Display Name
           * @description User's display name that's visible in the Google Meet app.
           * @default null
           */
          displayName: string | null;
      } | null;
      /**
       * Duration
       * @description Total duration the participant was in the meeting.
       * @default null
       */
      duration: string | null;
      /**
       * Earliest Start Time
       * Format: date-time
       * @description Time when the participant first joined the meeting.
       * @default null
       */
      earliestStartTime: string | null;
      /**
       * Latest End Time
       * Format: date-time
       * @description Time when the participant left the meeting for the last time.
       * @default null
       */
      latestEndTime: string | null;
      /**
       * Participant Id
       * @description Output only. Participant's unique ID.
       * @default null
       */
      participantId: string | null;
      /**
       * PhoneUser
       * @description User who joins from their phone.
       * @default null
       */
      phoneUser: {
          /**
           * Display Name
           * @description User's display name that's visible in the Google Meet app.
           * @default null
           */
          displayName: string | null;
      } | null;
      /**
       * SignedinUser
       * @description Signed-in user.
       * @default null
       */
      signedInUser: {
          /**
           * Display Name
           * @description For people from Google Workspace organizations, this is the user's display name. For other types of users, this is the user's name that's visible in the Google Meet app.
           * @default null
           */
          displayName: string | null;
          /**
           * User Id
           * @description Unique ID for the user.
           * @default null
           */
          userId: string | null;
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
 * Type of GOOGLEMEET's GOOGLEMEET_GET_RECORDINGS_BY_CONFERENCE_RECORD_ID tool input.
 */
type GOOGLEMEET_GET_RECORDINGS_BY_CONFERENCE_RECORD_ID_INPUT = {
  /**
   * Conference Record Id
   * @description Unique identifier for the conference record.
   */
  conferenceRecord_id?: string;
};

/**
 * Type of GOOGLEMEET's GOOGLEMEET_GET_RECORDINGS_BY_CONFERENCE_RECORD_ID tool output.
 */
type GOOGLEMEET_GET_RECORDINGS_BY_CONFERENCE_RECORD_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Complete API response from Google Meet, detailing the recordings.
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
 * Type of GOOGLEMEET's GOOGLEMEET_GET_TRANSCRIPTS_BY_CONFERENCE_RECORD_ID tool input.
 */
type GOOGLEMEET_GET_TRANSCRIPTS_BY_CONFERENCE_RECORD_ID_INPUT = {
  /**
   * Conference Record Id
   * @description Unique identifier of the conference record.
   */
  conferenceRecord_id?: string;
};

/**
 * Type of GOOGLEMEET's GOOGLEMEET_GET_TRANSCRIPTS_BY_CONFERENCE_RECORD_ID tool output.
 */
type GOOGLEMEET_GET_TRANSCRIPTS_BY_CONFERENCE_RECORD_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full API response from Google Meet containing the transcript data.
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
 * Type of GOOGLEMEET's GOOGLEMEET_LIST_CONFERENCE_RECORDS tool input.
 */
type GOOGLEMEET_LIST_CONFERENCE_RECORDS_INPUT = {
  /**
   * Filter
   * @description Optional. User specified filtering condition in EBNF format. Filterable fields: `space.meeting_code`, `space.name`, `start_time`, `end_time`. Examples: `space.name = "spaces/NAME"`, `space.meeting_code = "abc-mnop-xyz"`, `start_time>="2024-01-01T00:00:00.000Z" AND start_time<="2024-01-02T00:00:00.000Z"`, `end_time IS NULL`
   * @default null
   */
  filter: string | null;
  /**
   * Page Size
   * @description Maximum number of conference records to return. The service might return fewer than this value. If unspecified, at most 25 conference records are returned. The maximum value is 100; values above 100 are coerced to 100.
   * @default null
   */
  page_size: number | null;
  /**
   * Page Token
   * @description Page token returned from previous List Call.
   * @default null
   */
  page_token: string | null;
};

/**
 * Type of GOOGLEMEET's GOOGLEMEET_LIST_CONFERENCE_RECORDS tool output.
 */
type GOOGLEMEET_LIST_CONFERENCE_RECORDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Conference Records
       * @description List of conferences in one page.
       * @default null
       */
      conference_records: {
          /**
           * End Time
           * @description Timestamp when the conference ended.
           * @default null
           */
          end_time: string | null;
          /**
           * Expire Time
           * @description Timestamp when the conference record is deleted. See [Google Meet retention policy](https://support.google.com/meet/answer/10697001) for more details.
           * @default null
           */
          expire_time: string | null;
          /**
           * Name
           * @description Resource name of the conference record. Format: `conferenceRecords/{conference_record}` where `{conference_record}` is a unique ID.
           * @default null
           */
          name: string | null;
          /**
           * Start Time
           * @description Timestamp when the conference started.
           * @default null
           */
          start_time: string | null;
      }[] | null;
      /**
       * Next Page Token
       * @description Token to be circulated back for further List call if current List does NOT include all the Conferences. Unset if all conferences have been returned.
       * @default null
       */
      next_page_token: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLEMEET's GOOGLEMEET_LIST_PARTICIPANT_SESSIONS tool input.
 */
type GOOGLEMEET_LIST_PARTICIPANT_SESSIONS_INPUT = {
  /**
   * Filter
   * @description Optional. User-specified filtering condition in EBNF format. Filterable fields include `earliest_start_time` and `latest_end_time`.
   * @default null
   */
  filter: string | null;
  /**
   * Page Size
   * @description Optional. Maximum number of participants to return. The service might return fewer than this value. If unspecified, at most 100 participants are returned. The maximum value is 250; values above 250 are coerced to 250.
   * @default null
   */
  page_size: number | null;
  /**
   * Page Token
   * @description Optional. Page token returned from a previous list call, used to retrieve the next page of results.
   * @default null
   */
  page_token: string | null;
  /**
   * Parent
   * @description Required. The identifier of the conference record, in the format `conferenceRecords/{conferenceRecord}`.
   */
  parent?: string;
};

/**
 * Type of GOOGLEMEET's GOOGLEMEET_LIST_PARTICIPANT_SESSIONS tool output.
 */
type GOOGLEMEET_LIST_PARTICIPANT_SESSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page Token
       * @description Token to be circulated back for further List call if current List doesn't include all the participants. Unset if all participants are returned.
       * @default null
       */
      next_page_token: string | null;
      /**
       * Participants
       * @description List of participants in one page.
       * @default null
       */
      participants: {
          /**
           * Anonymous User
           * @description Output only. The anonymous user that is at the beginning of the session. This is only populated if the user is not signed-in.
           * @default null
           */
          anonymous_user: {
              [key: string]: string;
          } | null;
          /**
           * Earliest Start Time
           * @description Output only. Time when the participant first joined the meeting.
           * @default null
           */
          earliest_start_time: string | null;
          /**
           * Latest End Time
           * @description Output only. Time when the participant left the meeting for the last time. This can be null if the participant is still in the meeting.
           * @default null
           */
          latest_end_time: string | null;
          /**
           * Participant
           * @description Output only. The unique participant ID.
           * @default null
           */
          participant: string | null;
          /**
           * Phone User
           * @description Output only. The user that is dialing in by phone at the beginning of the session. This is only populated if the user is dialing in by phone, and if the user grants the oAuth scope `https://www.googleapis.com/auth/meetings.space.profile.readonly`.
           * @default null
           */
          phone_user: {
              [key: string]: string;
          } | null;
          /**
           * Signed In User
           * @description Output only. The user that is signed-in at the beginning of the session. This is only populated if the user is signed-in, and if the user grants the oAuth scope `https://www.googleapis.com/auth/meetings.space.profile.readonly`.
           * @default null
           */
          signed_in_user: {
              [key: string]: string;
          } | null;
      }[] | null;
      /**
       * Total Size
       * @description Total, exact number of `participants`. By default, this field isn't included in the response. Set the field mask in [SystemParameterContext](https://cloud.google.com/apis/docs/system-parameters) to receive this field in the response.
       * @default null
       */
      total_size: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLEMEET's GOOGLEMEET_UPDATE_SPACE tool input.
 */
type GOOGLEMEET_UPDATE_SPACE_INPUT = {
  /**
   * SpaceConfig
   * @description Configuration pertaining to the meeting space.
   * @default null
   */
  config: {
      /**
       * AccessType
       * @description Access type of the meeting space.
       * @default null
       * @enum {string|null}
       */
      accessType: "OPEN" | "TRUSTED" | "RESTRICTED" | null;
      /**
       * ArtifactConfig
       * @description Configuration pertaining to the auto-generated artifacts.
       * @default null
       */
      artifactConfig: {
          /**
           * RecordingConfig
           * @description Configuration for recording.
           * @default null
           */
          recordingConfig: {
              /**
               * AutoGenerationType
               * @description Defines whether a meeting space is automatically recorded.
               * @default null
               * @enum {string|null}
               */
              autoRecordingGeneration: "ON" | "OFF" | null;
          } | null;
          /**
           * SmartNotesConfig
           * @description Configuration for auto-smart-notes.
           * @default null
           */
          smartNotesConfig: {
              /**
               * AutoGenerationType
               * @description Defines whether to automatically generate a summary and recap of the meeting.
               * @default null
               * @enum {string|null}
               */
              autoSmartNotesGeneration: "ON" | "OFF" | null;
          } | null;
          /**
           * TranscriptionConfig
           * @description Configuration for auto-transcript.
           * @default null
           */
          transcriptionConfig: {
              /**
               * AutoGenerationType
               * @description Defines whether the content of a meeting is automatically transcribed.
               * @default null
               * @enum {string|null}
               */
              autoTranscriptionGeneration: "ON" | "OFF" | null;
          } | null;
      } | null;
      /**
       * AttendanceReportGenerationType
       * @description Whether attendance report is enabled for the meeting space.
       * @default null
       * @enum {string|null}
       */
      attendanceReportGenerationType: "GENERATE_REPORT" | "DO_NOT_GENERATE" | null;
      /**
       * EntryPointAccess
       * @description Defines the entry points that can be used to join meetings.
       * @default null
       * @enum {string|null}
       */
      entryPointAccess: "ALL" | "CREATOR_APP_ONLY" | null;
      /**
       * ModerationMode
       * @description The pre-configured moderation mode for the Meeting.
       * @default null
       * @enum {string|null}
       */
      moderation: "OFF" | "ON" | null;
      /**
       * ModerationRestrictions
       * @description When moderation.ON, these restrictions go into effect.
       * @default null
       */
      moderationRestrictions: {
          /**
           * RestrictionType
           * @description Defines who has permission to send chat messages.
           * @default null
           * @enum {string|null}
           */
          chatRestriction: "HOSTS_ONLY" | "NO_RESTRICTION" | null;
          /**
           * DefaultJoinAsViewerType
           * @description Defines whether to restrict the default role assigned to users as viewer.
           * @default null
           * @enum {string|null}
           */
          defaultJoinAsViewerType: "ON" | "OFF" | null;
          /**
           * RestrictionType
           * @description Defines who has permission to share their screen.
           * @default null
           * @enum {string|null}
           */
          presentRestriction: "HOSTS_ONLY" | "NO_RESTRICTION" | null;
          /**
           * RestrictionType
           * @description Defines who has permission to send reactions.
           * @default null
           * @enum {string|null}
           */
          reactionRestriction: "HOSTS_ONLY" | "NO_RESTRICTION" | null;
      } | null;
  } | null;
  /**
   * Name
   * @description Immutable. Resource name of the space. Format: `spaces/{space}`.
   */
  name?: string;
  /**
   * Update Mask
   * @description Optional. Field mask used to specify the fields to be updated. Comma-separated list of fully qualified field names. Example: "config.accessType,config.moderationRestrictions.chatRestriction". Use "*" to update all fields.
   * @default null
   */
  updateMask: string | null;
};

/**
 * Type of GOOGLEMEET's GOOGLEMEET_UPDATE_SPACE tool output.
 */
type GOOGLEMEET_UPDATE_SPACE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ActiveConference
       * @description Active conference, if it exists.
       * @default null
       */
      activeConference: {
          /**
           * Conference Record
           * @description Reference to 'ConferenceRecord' resource.
           * @default null
           */
          conferenceRecord: string | null;
      } | null;
      /**
       * SpaceConfig
       * @description Configuration pertaining to the meeting space.
       * @default null
       */
      config: {
          /**
           * AccessType
           * @description Access type of the meeting space.
           * @default null
           * @enum {string|null}
           */
          accessType: "OPEN" | "TRUSTED" | "RESTRICTED" | null;
          /**
           * ArtifactConfig
           * @description Configuration pertaining to the auto-generated artifacts.
           * @default null
           */
          artifactConfig: {
              /**
               * RecordingConfig
               * @description Configuration for recording.
               * @default null
               */
              recordingConfig: {
                  /**
                   * AutoGenerationType
                   * @description Defines whether a meeting space is automatically recorded.
                   * @default null
                   * @enum {string|null}
                   */
                  autoRecordingGeneration: "ON" | "OFF" | null;
              } | null;
              /**
               * SmartNotesConfig
               * @description Configuration for auto-smart-notes.
               * @default null
               */
              smartNotesConfig: {
                  /**
                   * AutoGenerationType
                   * @description Defines whether to automatically generate a summary and recap of the meeting.
                   * @default null
                   * @enum {string|null}
                   */
                  autoSmartNotesGeneration: "ON" | "OFF" | null;
              } | null;
              /**
               * TranscriptionConfig
               * @description Configuration for auto-transcript.
               * @default null
               */
              transcriptionConfig: {
                  /**
                   * AutoGenerationType
                   * @description Defines whether the content of a meeting is automatically transcribed.
                   * @default null
                   * @enum {string|null}
                   */
                  autoTranscriptionGeneration: "ON" | "OFF" | null;
              } | null;
          } | null;
          /**
           * AttendanceReportGenerationType
           * @description Whether attendance report is enabled for the meeting space.
           * @default null
           * @enum {string|null}
           */
          attendanceReportGenerationType: "GENERATE_REPORT" | "DO_NOT_GENERATE" | null;
          /**
           * EntryPointAccess
           * @description Defines the entry points that can be used to join meetings.
           * @default null
           * @enum {string|null}
           */
          entryPointAccess: "ALL" | "CREATOR_APP_ONLY" | null;
          /**
           * ModerationMode
           * @description The pre-configured moderation mode for the Meeting.
           * @default null
           * @enum {string|null}
           */
          moderation: "OFF" | "ON" | null;
          /**
           * ModerationRestrictions
           * @description When moderation.ON, these restrictions go into effect.
           * @default null
           */
          moderationRestrictions: {
              /**
               * RestrictionType
               * @description Defines who has permission to send chat messages.
               * @default null
               * @enum {string|null}
               */
              chatRestriction: "HOSTS_ONLY" | "NO_RESTRICTION" | null;
              /**
               * DefaultJoinAsViewerType
               * @description Defines whether to restrict the default role assigned to users as viewer.
               * @default null
               * @enum {string|null}
               */
              defaultJoinAsViewerType: "ON" | "OFF" | null;
              /**
               * RestrictionType
               * @description Defines who has permission to share their screen.
               * @default null
               * @enum {string|null}
               */
              presentRestriction: "HOSTS_ONLY" | "NO_RESTRICTION" | null;
              /**
               * RestrictionType
               * @description Defines who has permission to send reactions.
               * @default null
               * @enum {string|null}
               */
              reactionRestriction: "HOSTS_ONLY" | "NO_RESTRICTION" | null;
          } | null;
      } | null;
      /**
       * Meeting Code
       * @description Type friendly unique string used to join the meeting.
       * @default null
       */
      meetingCode: string | null;
      /**
       * Meeting Uri
       * @description URI used to join meetings.
       * @default null
       */
      meetingUri: string | null;
      /**
       * Name
       * @description Resource name of the space.
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
 * Type map of all available tool input types for toolkit "GOOGLEMEET".
 */
export type GOOGLEMEET_TOOL_INPUTS = {
  CREATE_MEET: GOOGLEMEET_CREATE_MEET_INPUT
  GET_CONFERENCE_RECORD_FOR_MEET: GOOGLEMEET_GET_CONFERENCE_RECORD_FOR_MEET_INPUT
  GET_MEET: GOOGLEMEET_GET_MEET_INPUT
  GET_PARTICIPANT_SESSION: GOOGLEMEET_GET_PARTICIPANT_SESSION_INPUT
  GET_RECORDINGS_BY_CONFERENCE_RECORD_ID: GOOGLEMEET_GET_RECORDINGS_BY_CONFERENCE_RECORD_ID_INPUT
  GET_TRANSCRIPTS_BY_CONFERENCE_RECORD_ID: GOOGLEMEET_GET_TRANSCRIPTS_BY_CONFERENCE_RECORD_ID_INPUT
  LIST_CONFERENCE_RECORDS: GOOGLEMEET_LIST_CONFERENCE_RECORDS_INPUT
  LIST_PARTICIPANT_SESSIONS: GOOGLEMEET_LIST_PARTICIPANT_SESSIONS_INPUT
  UPDATE_SPACE: GOOGLEMEET_UPDATE_SPACE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GOOGLEMEET".
 */
export type GOOGLEMEET_TOOL_OUTPUTS = {
  CREATE_MEET: GOOGLEMEET_CREATE_MEET_OUTPUT
  GET_CONFERENCE_RECORD_FOR_MEET: GOOGLEMEET_GET_CONFERENCE_RECORD_FOR_MEET_OUTPUT
  GET_MEET: GOOGLEMEET_GET_MEET_OUTPUT
  GET_PARTICIPANT_SESSION: GOOGLEMEET_GET_PARTICIPANT_SESSION_OUTPUT
  GET_RECORDINGS_BY_CONFERENCE_RECORD_ID: GOOGLEMEET_GET_RECORDINGS_BY_CONFERENCE_RECORD_ID_OUTPUT
  GET_TRANSCRIPTS_BY_CONFERENCE_RECORD_ID: GOOGLEMEET_GET_TRANSCRIPTS_BY_CONFERENCE_RECORD_ID_OUTPUT
  LIST_CONFERENCE_RECORDS: GOOGLEMEET_LIST_CONFERENCE_RECORDS_OUTPUT
  LIST_PARTICIPANT_SESSIONS: GOOGLEMEET_LIST_PARTICIPANT_SESSIONS_OUTPUT
  UPDATE_SPACE: GOOGLEMEET_UPDATE_SPACE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GOOGLEMEET toolkit.
 */
export const GOOGLEMEET = {
  slug: "googlemeet",
  tools: {
    /**
     * Creates a new google meet space, optionally configuring its access type and entry point access controls.
     */
    CREATE_MEET: "GOOGLEMEET_CREATE_MEET",
    /**
     * Get conference record
     */
    GET_CONFERENCE_RECORD_FOR_MEET: "GOOGLEMEET_GET_CONFERENCE_RECORD_FOR_MEET",
    /**
     * Retrieve details of a google meet space using its unique identifier.
     */
    GET_MEET: "GOOGLEMEET_GET_MEET",
    /**
     * Tool to get a specific participant session from a conference record. use when you need to retrieve details about a particular participant in a past meeting.
     */
    GET_PARTICIPANT_SESSION: "GOOGLEMEET_GET_PARTICIPANT_SESSION",
    /**
     * Retrieves recordings from google meet for a given conference record id.
     */
    GET_RECORDINGS_BY_CONFERENCE_RECORD_ID: "GOOGLEMEET_GET_RECORDINGS_BY_CONFERENCE_RECORD_ID",
    /**
     * Retrieves all transcripts for a specific google meet conference using its conferencerecord id.
     */
    GET_TRANSCRIPTS_BY_CONFERENCE_RECORD_ID: "GOOGLEMEET_GET_TRANSCRIPTS_BY_CONFERENCE_RECORD_ID",
    /**
     * Tool to list conference records. use when you need to retrieve a list of past conferences, optionally filtering them by criteria like meeting code, space name, or time range.
     */
    LIST_CONFERENCE_RECORDS: "GOOGLEMEET_LIST_CONFERENCE_RECORDS",
    /**
     * Tool to list all participant sessions for a specific conference record in google meet. use this when you need to retrieve a list of participants who joined a particular meeting.
     */
    LIST_PARTICIPANT_SESSIONS: "GOOGLEMEET_LIST_PARTICIPANT_SESSIONS",
    /**
     * Updates a meeting space. use this tool to modify the settings of an existing google meet space. requires the space resource in the request body and the space name in the path.
     */
    UPDATE_SPACE: "GOOGLEMEET_UPDATE_SPACE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GOOGLEMEET".
 */
export type GOOGLEMEET_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GOOGLEMEET".
 */
export type GOOGLEMEET_TRIGGER_EVENTS = {}
