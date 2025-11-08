// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of REV_AI's REV_AI_DELETE_CUSTOM_VOCABULARY tool input.
 */
type REV_AI_DELETE_CUSTOM_VOCABULARY_INPUT = {
  /**
   * Id
   * @description Unique identifier of the custom vocabulary to delete
   */
  id?: string;
};

/**
 * Type of REV_AI's REV_AI_DELETE_CUSTOM_VOCABULARY tool output.
 */
type REV_AI_DELETE_CUSTOM_VOCABULARY_OUTPUT = {
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
 * Type of REV_AI's REV_AI_DELETE_JOB_BY_ID tool input.
 */
type REV_AI_DELETE_JOB_BY_ID_INPUT = {
  /**
   * Id
   * @description The unique identifier of the job to delete
   */
  id?: string;
};

/**
 * Type of REV_AI's REV_AI_DELETE_JOB_BY_ID tool output.
 */
type REV_AI_DELETE_JOB_BY_ID_OUTPUT = {
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
 * Type of REV_AI's REV_AI_GET_ACCOUNT tool input.
 */
type REV_AI_GET_ACCOUNT_INPUT = object;

/**
 * Type of REV_AI's REV_AI_GET_ACCOUNT tool output.
 */
type REV_AI_GET_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Balance Minutes
       * @description Remaining credit balance in minutes
       */
      balance_minutes: number;
      /**
       * Balance Seconds
       * @description Remaining credit balance in seconds
       */
      balance_seconds: number;
      /**
       * Email
       * @description Email address associated with the Rev AI account
       */
      email: string;
      /**
       * Hipaa Enabled
       * @description Whether HIPAA compliance is enabled for the account
       */
      hipaa_enabled: boolean;
      /**
       * Type
       * @description Account type, e.g., 'full_access'
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
 * Type of REV_AI's REV_AI_GET_CAPTIONS tool input.
 */
type REV_AI_GET_CAPTIONS_INPUT = {
  /**
   * Accept
   * @description Caption format: SRT (application/x-subrip) or WebVTT (text/vtt).
   * @default application/x-subrip
   * @enum {string}
   */
  accept: "application/x-subrip" | "text/vtt";
  /**
   * Channel Id
   * @description Optional audio channel number for multi-channel jobs.
   * @default null
   */
  channel_id: number | null;
  /**
   * Job Id
   * @description The ID of the completed transcription job.
   */
  job_id?: string;
};

/**
 * Type of REV_AI's REV_AI_GET_CAPTIONS tool output.
 */
type REV_AI_GET_CAPTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Captions
       * @description Raw caption file content in the requested format.
       */
      captions: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of REV_AI's REV_AI_GET_CUSTOM_VOCABULARY_DETAILS tool input.
 */
type REV_AI_GET_CUSTOM_VOCABULARY_DETAILS_INPUT = {
  /**
   * Id
   * @description Unique identifier of the custom vocabulary to retrieve.
   */
  id?: string;
};

/**
 * Type of REV_AI's REV_AI_GET_CUSTOM_VOCABULARY_DETAILS tool output.
 */
type REV_AI_GET_CUSTOM_VOCABULARY_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Callback Url
       * @description Callback URL for notifications, if set.
       * @default null
       */
      callback_url: string | null;
      /**
       * Created On
       * @description Creation date-time in RFC 3339 format.
       */
      created_on: string;
      /**
       * CustomVocabularyFailure
       * @description Details about a failure when processing the custom vocabulary.
       * @default null
       */
      failure: {
          /**
           * Detail
           * @description Failure detail message.
           * @default null
           */
          detail: string | null;
      } | null;
      /**
       * Id
       * @description Unique identifier for the custom vocabulary.
       */
      id: string;
      /**
       * Phrases
       * @description List of phrases submitted for the custom vocabulary.
       */
      phrases: string[];
      /**
       * Status
       * @description Current status of the custom vocabulary (e.g., 'IN_PROGRESS', 'FAILED', 'COMPLETE').
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
 * Type of REV_AI's REV_AI_GET_JOB_BY_ID tool input.
 */
type REV_AI_GET_JOB_BY_ID_INPUT = {
  /**
   * Id
   * @description Unique identifier of the transcription job to retrieve.
   */
  id?: string;
};

/**
 * Type of REV_AI's REV_AI_GET_JOB_BY_ID tool output.
 */
type REV_AI_GET_JOB_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Callback Url
       * @description Callback URL for job notifications, if set.
       * @default null
       */
      callback_url: string | null;
      /**
       * Completed On
       * @description Job completion date-time in RFC 3339 format, if completed.
       * @default null
       */
      completed_on: string | null;
      /**
       * Created On
       * @description Job creation date-time in RFC 3339 format.
       */
      created_on: string;
      /**
       * Custom Vocabulary Id
       * @description Custom vocabulary ID used for the job.
       * @default null
       */
      custom_vocabulary_id: string | null;
      /**
       * Delete After Seconds
       * @description Time in seconds after which the job will be deleted.
       * @default null
       */
      delete_after_seconds: number | null;
      /**
       * Duration Seconds
       * @description Duration of the media in seconds, if available.
       * @default null
       */
      duration_seconds: number | null;
      /**
       * Failure
       * @description Details about a failed transcription job.
       * @default null
       */
      failure: {
          /**
           * Code
           * @description Error code of the failed job.
           */
          code: string;
          /**
           * Detail
           * @description Additional details about the failure.
           * @default null
           */
          detail: string | null;
          /**
           * Message
           * @description Error message detailing the failure.
           */
          message: string;
      } | null;
      /**
       * Id
       * @description Unique identifier for the job.
       */
      id: string;
      /**
       * Language
       * @description Language code of the job, if set.
       * @default null
       */
      language: string | null;
      /**
       * Metadata
       * @description User-provided metadata, if set.
       * @default null
       */
      metadata: string | null;
      /**
       * Name
       * @description Name of the job, if provided.
       * @default null
       */
      name: string | null;
      /**
       * Status
       * @description Current status of the job.
       */
      status: string;
      /**
       * TranscriptionConfig
       * @description Advanced transcription configuration for the job.
       * @default null
       */
      transcription_config: {
          /**
           * Filter Profanity
           * @description If true, profanity will be filtered.
           * @default null
           */
          filter_profanity: boolean | null;
          /**
           * Remove Disfluencies
           * @description If true, filler disfluencies will be removed.
           * @default null
           */
          remove_disfluencies: boolean | null;
          /**
           * Remove Punctuation
           * @description If true, punctuation will be removed.
           * @default null
           */
          remove_punctuation: boolean | null;
          /**
           * Speaker Channels Count
           * @description Number of speaker channels in the media.
           * @default null
           */
          speaker_channels_count: number | null;
      } | null;
      /**
       * Type
       * @description Type of job (e.g., asynchronous).
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
 * Type of REV_AI's REV_AI_GET_LIST_OF_JOBS tool input.
 */
type REV_AI_GET_LIST_OF_JOBS_INPUT = {
  /**
   * Ending Before
   * @description Only return jobs created before the given job ID.
   * @default null
   */
  ending_before: string | null;
  /**
   * Limit
   * @description Maximum number of jobs to return (default 100, max 1000)
   * @default null
   */
  limit: number | null;
  /**
   * Starting After
   * @description Only return jobs created after the given job ID.
   * @default null
   */
  starting_after: string | null;
};

/**
 * Type of REV_AI's REV_AI_GET_LIST_OF_JOBS tool output.
 */
type REV_AI_GET_LIST_OF_JOBS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Jobs
       * @description List of transcription jobs retrieved.
       */
      jobs: {
          /**
           * Callback Url
           * @description Callback URL provided for job notifications.
           * @default null
           */
          callback_url: string | null;
          /**
           * Completed On
           * Format: date-time
           * @description Timestamp when the job was completed.
           * @default null
           */
          completed_on: string | null;
          /**
           * Created On
           * Format: date-time
           * @description Timestamp when the job was created.
           */
          created_on: string;
          /**
           * Custom Vocabularies
           * @description List of custom vocabulary names used for the job.
           * @default null
           */
          custom_vocabularies: string[] | null;
          /**
           * Delete After Seconds
           * @description Seconds after completion when the job will be deleted.
           * @default null
           */
          delete_after_seconds: number | null;
          /**
           * Id
           * @description Unique job identifier.
           */
          id: string;
          /**
           * Language
           * @description Language code of the submitted media.
           * @default null
           */
          language: string | null;
          /**
           * Media Url
           * @description URL of the media file submitted for transcription.
           * @default null
           */
          media_url: string | null;
          /**
           * Metadata
           * @description User-provided metadata for the job.
           * @default null
           */
          metadata: string | null;
          /**
           * Name
           * @description Name assigned to the job, if any.
           * @default null
           */
          name: string | null;
          /**
           * Status
           * @description Status of the job (e.g., 'in_progress', 'transcribed').
           */
          status: string;
          /**
           * Type
           * @description Type of the job.
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
 * Type of REV_AI's REV_AI_GET_TRANSCRIPT_BY_ID tool input.
 */
type REV_AI_GET_TRANSCRIPT_BY_ID_INPUT = {
  /**
   * Accept
   * @description Output format. Supported values: application/vnd.rev.transcript.v1.0+json (default), text/plain, text/vtt, application/x-subrip.
   * @default application/vnd.rev.transcript.v1.0+json
   * @enum {string|null}
   */
  accept: "application/vnd.rev.transcript.v1.0+json" | "text/plain" | "text/vtt" | "application/x-subrip" | null;
  /**
   * Id
   * @description Identifier for the transcription job.
   */
  id?: string;
};

/**
 * Type of REV_AI's REV_AI_GET_TRANSCRIPT_BY_ID tool output.
 */
type REV_AI_GET_TRANSCRIPT_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Monologues
       * @description List of monologues for JSON transcripts.
       * @default null
       */
      monologues: {
          /**
           * Elements
           * @description Sequence of transcript elements.
           */
          elements: {
              /**
               * End Ts
               * @description End timestamp in seconds (if provided).
               * @default null
               */
              end_ts: number | null;
              /**
               * Ts
               * @description Start timestamp in seconds.
               */
              ts: number;
              /**
               * Type
               * @description Type of element, e.g., 'text' or 'punct'.
               */
              type: string;
              /**
               * Value
               * @description Element content.
               */
              value: string;
          }[];
          /**
           * Speaker
           * @description Speaker identifier.
           */
          speaker: number;
      }[] | null;
      /**
       * Text
       * @description Raw transcript for non-JSON formats.
       * @default null
       */
      text: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of REV_AI's REV_AI_START_STREAM_TRANSCRIPTION tool input.
 */
type REV_AI_START_STREAM_TRANSCRIPTION_INPUT = {
  /**
   * Content Type
   * @description Audio MIME type and parameters (e.g., 'audio/x-raw;layout=interleaved;rate=16000;format=S16LE;channels=1', 'audio/x-wav', 'audio/x-flac').
   */
  content_type?: string;
  /**
   * Custom Vocabulary Id
   * @description ID of a custom vocabulary to apply, if available.
   * @default null
   */
  custom_vocabulary_id: string | null;
  /**
   * Delete After Seconds
   * @description If set, server will delete the stream results after given seconds.
   * @default null
   */
  delete_after_seconds: number | null;
  /**
   * Detailed Partials
   * @description Whether to send detailed partial results.
   * @default false
   */
  detailed_partials: boolean | null;
  /**
   * Enable Speaker Switch
   * @description Whether to enable speaker-switch detection.
   * @default false
   */
  enable_speaker_switch: boolean | null;
  /**
   * Filter Profanity
   * @description Whether to filter profanity from transcripts.
   * @default false
   */
  filter_profanity: boolean | null;
  /**
   * Language
   * @description Language code in ISO 639-1 format for transcription, default 'en'.
   * @default en
   */
  language: string | null;
  /**
   * Max Connection Wait Seconds
   * @description Maximum seconds to wait for WebSocket connection establishment.
   * @default 60
   */
  max_connection_wait_seconds: number | null;
  /**
   * Max Segment Duration Seconds
   * @description Maximum duration in seconds of each transcription segment.
   * @default null
   */
  max_segment_duration_seconds: number | null;
  /**
   * Metadata
   * @description Optional user metadata string to associate with the stream.
   * @default null
   */
  metadata: string | null;
  /**
   * Priority
   * @description Priority of transcription processing: 'speed' or 'quality'.
   * @default speed
   * @enum {string|null}
   */
  priority: "speed" | "quality" | null;
  /**
   * Remove Disfluencies
   * @description Whether to remove disfluencies (um, uh) from transcripts.
   * @default false
   */
  remove_disfluencies: boolean | null;
  /**
   * Skip Postprocessing
   * @description Whether to skip post-processing phase.
   * @default false
   */
  skip_postprocessing: boolean | null;
  /**
   * Start Ts
   * @description Initial timestamp (in seconds) from which to start transcription.
   * @default null
   */
  start_ts: number | null;
  /**
   * Transcriber
   * @description Select a transcriber model, if multiple are available.
   * @default null
   */
  transcriber: string | null;
};

/**
 * Type of REV_AI's REV_AI_START_STREAM_TRANSCRIPTION tool output.
 */
type REV_AI_START_STREAM_TRANSCRIPTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Url
       * @description WebSocket URL with query parameters to connect for real-time transcription.
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
 * Type of REV_AI's REV_AI_SUBMIT_CUSTOM_VOCABULARY tool input.
 */
type REV_AI_SUBMIT_CUSTOM_VOCABULARY_INPUT = {
  /**
   * Custom Vocabulary Id
   * @description Optional unique identifier for the custom vocabulary.
   * @default null
   */
  custom_vocabulary_id: string | null;
  /**
   * Metadata
   * @description Optional user-defined metadata for the custom vocabulary.
   * @default null
   */
  metadata: string | null;
  /**
   * Phrases
   * @description List of phrases or words to include in the custom vocabulary.
   */
  phrases?: string[];
};

/**
 * Type of REV_AI's REV_AI_SUBMIT_CUSTOM_VOCABULARY tool output.
 */
type REV_AI_SUBMIT_CUSTOM_VOCABULARY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Completed On
       * @description ISO 8601 UTC timestamp when processing completed, null if still in progress.
       * @default null
       */
      completed_on: string | null;
      /**
       * Created On
       * @description ISO 8601 UTC timestamp when the custom vocabulary was created.
       */
      created_on: string;
      /**
       * Id
       * @description Unique custom vocabulary identifier assigned by Rev.ai.
       */
      id: string;
      /**
       * Metadata
       * @description User-provided metadata associated with the custom vocabulary.
       * @default null
       */
      metadata: string | null;
      /**
       * Phrases
       * @description List of phrases submitted.
       */
      phrases: string[];
      /**
       * Status
       * @description Processing status of the custom vocabulary (e.g., 'IN_PROGRESS', 'FAILED', 'COMPLETE').
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
 * Type of REV_AI's REV_AI_SUBMIT_TRANSCRIPTION_JOB tool input.
 */
type REV_AI_SUBMIT_TRANSCRIPTION_JOB_INPUT = {
  /**
   * Callback Url
   * @description Webhook URL called on job completion
   * @default null
   */
  callback_url: string | null;
  /**
   * Custom Vocabularies
   * @description List of custom vocabularies to apply
   * @default null
   */
  custom_vocabularies: {
      /**
       * Vocabulary Id
       * @description Identifier of a custom vocabulary resource
       */
      vocabulary_id: string;
  }[] | null;
  /**
   * Delete After Seconds
   * @description Automatically delete job this many seconds after completion
   * @default null
   */
  delete_after_seconds: number | null;
  /**
   * File
   * Format: binary
   * @description Binary audio content to upload if media_url is not used
   * @default null
   */
  file: string | null;
  /**
   * Filter Profanity
   * @description If true, filter profanity from the transcript
   * @default false
   */
  filter_profanity: boolean;
  /**
   * Language
   * @description ISO 639-1 or BCP-47 code to override default language
   * @default null
   */
  language: string | null;
  /**
   * Media Url
   * @description HTTP(S) URL of the media file to transcribe
   * @default null
   */
  media_url: string | null;
  /**
   * Metadata
   * @description Arbitrary string returned verbatim with job status
   * @default null
   */
  metadata: string | null;
  /**
   * Skip Diarization
   * @description If true, do NOT perform speaker diarization
   * @default false
   */
  skip_diarization: boolean;
  /**
   * Skip Punctuation
   * @description If true, do NOT auto-punctuate transcript
   * @default false
   */
  skip_punctuation: boolean;
  /**
   * Speaker Channel Count
   * @description Number of audio channels to treat as separate speakers
   * @default null
   */
  speaker_channel_count: number | null;
  /**
   * TranscriptionConfig
   * @description Settings for advanced transcription options.
   * @default null
   */
  transcription_config: {
      /**
       * Language
       * @description ISO 639-1 or BCP-47 language code for transcription
       * @default null
       */
      language: string | null;
      /**
       * Operating Point
       * @description Processing operating point: 'standard' or 'enhanced'
       * @default null
       * @enum {string|null}
       */
      operating_point: "standard" | "enhanced" | null;
      /**
       * Output Locale
       * @description BCP-47 locale tag for transcript output
       * @default null
       */
      output_locale: string | null;
  } | null;
};

/**
 * Type of REV_AI's REV_AI_SUBMIT_TRANSCRIPTION_JOB tool output.
 */
type REV_AI_SUBMIT_TRANSCRIPTION_JOB_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Callback Url
       * @description Callback URL for job completion
       * @default null
       */
      callback_url: string | null;
      /**
       * Created On
       * @description ISO timestamp when job was created
       */
      created_on: string;
      /**
       * Custom Vocabulary Id
       * @description Applied custom vocabulary ID
       * @default null
       */
      custom_vocabulary_id: string | null;
      /**
       * Delete After Seconds
       * @description Auto-delete seconds after completion
       * @default null
       */
      delete_after_seconds: number | null;
      /**
       * Duration Seconds
       * @description Duration of audio in seconds
       * @default null
       */
      duration_seconds: number | null;
      /**
       * Failure
       * @description Failure details if job failed
       * @default null
       */
      failure: unknown;
      /**
       * Id
       * @description Unique job identifier
       */
      id: string;
      /**
       * Language
       * @description Language code used for job
       * @default null
       */
      language: string | null;
      /**
       * Metadata
       * @description User-provided metadata string
       * @default null
       */
      metadata: string | null;
      /**
       * Name
       * @description File name or media identifier
       * @default null
       */
      name: string | null;
      /**
       * Status
       * @description Transcription job status, e.g. 'in_progress'
       */
      status: string;
      /**
       * TranscriptionConfig
       * @description Settings for advanced transcription options.
       * @default null
       */
      transcription_config: {
          /**
           * Language
           * @description ISO 639-1 or BCP-47 language code for transcription
           * @default null
           */
          language: string | null;
          /**
           * Operating Point
           * @description Processing operating point: 'standard' or 'enhanced'
           * @default null
           * @enum {string|null}
           */
          operating_point: "standard" | "enhanced" | null;
          /**
           * Output Locale
           * @description BCP-47 locale tag for transcript output
           * @default null
           */
          output_locale: string | null;
      } | null;
      /**
       * Type
       * @description Job type, e.g. 'async'
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
 * Type map of all available tool input types for toolkit "REV_AI".
 */
export type REV_AI_TOOL_INPUTS = {
  DELETE_CUSTOM_VOCABULARY: REV_AI_DELETE_CUSTOM_VOCABULARY_INPUT
  DELETE_JOB_BY_ID: REV_AI_DELETE_JOB_BY_ID_INPUT
  GET_ACCOUNT: REV_AI_GET_ACCOUNT_INPUT
  GET_CAPTIONS: REV_AI_GET_CAPTIONS_INPUT
  GET_CUSTOM_VOCABULARY_DETAILS: REV_AI_GET_CUSTOM_VOCABULARY_DETAILS_INPUT
  GET_JOB_BY_ID: REV_AI_GET_JOB_BY_ID_INPUT
  GET_LIST_OF_JOBS: REV_AI_GET_LIST_OF_JOBS_INPUT
  GET_TRANSCRIPT_BY_ID: REV_AI_GET_TRANSCRIPT_BY_ID_INPUT
  START_STREAM_TRANSCRIPTION: REV_AI_START_STREAM_TRANSCRIPTION_INPUT
  SUBMIT_CUSTOM_VOCABULARY: REV_AI_SUBMIT_CUSTOM_VOCABULARY_INPUT
  SUBMIT_TRANSCRIPTION_JOB: REV_AI_SUBMIT_TRANSCRIPTION_JOB_INPUT
}

/**
 * Type map of all available tool input types for toolkit "REV_AI".
 */
export type REV_AI_TOOL_OUTPUTS = {
  DELETE_CUSTOM_VOCABULARY: REV_AI_DELETE_CUSTOM_VOCABULARY_OUTPUT
  DELETE_JOB_BY_ID: REV_AI_DELETE_JOB_BY_ID_OUTPUT
  GET_ACCOUNT: REV_AI_GET_ACCOUNT_OUTPUT
  GET_CAPTIONS: REV_AI_GET_CAPTIONS_OUTPUT
  GET_CUSTOM_VOCABULARY_DETAILS: REV_AI_GET_CUSTOM_VOCABULARY_DETAILS_OUTPUT
  GET_JOB_BY_ID: REV_AI_GET_JOB_BY_ID_OUTPUT
  GET_LIST_OF_JOBS: REV_AI_GET_LIST_OF_JOBS_OUTPUT
  GET_TRANSCRIPT_BY_ID: REV_AI_GET_TRANSCRIPT_BY_ID_OUTPUT
  START_STREAM_TRANSCRIPTION: REV_AI_START_STREAM_TRANSCRIPTION_OUTPUT
  SUBMIT_CUSTOM_VOCABULARY: REV_AI_SUBMIT_CUSTOM_VOCABULARY_OUTPUT
  SUBMIT_TRANSCRIPTION_JOB: REV_AI_SUBMIT_TRANSCRIPTION_JOB_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's REV_AI toolkit.
 */
export const REV_AI = {
  slug: "rev_ai",
  tools: {
    /**
     * Tool to delete a completed custom vocabulary and its data. use when you need to remove an unused vocabulary after confirming it's no longer needed.
     */
    DELETE_CUSTOM_VOCABULARY: "REV_AI_DELETE_CUSTOM_VOCABULARY",
    /**
     * Tool to delete a completed transcription job and its data. use when you need to permanently remove a finished job after confirming it's no longer needed.
     */
    DELETE_JOB_BY_ID: "REV_AI_DELETE_JOB_BY_ID",
    /**
     * Tool to retrieve developer account details. use after authenticating with rev ai.
     */
    GET_ACCOUNT: "REV_AI_GET_ACCOUNT",
    /**
     * Tool to retrieve captions (srt or vtt) for a completed rev.ai transcription job. use after confirming the job status is 'completed'.
     */
    GET_CAPTIONS: "REV_AI_GET_CAPTIONS",
    /**
     * Tool to retrieve custom vocabulary processing details. use when needing to fetch the status and submitted phrases for a specific custom vocabulary after creation.
     */
    GET_CUSTOM_VOCABULARY_DETAILS: "REV_AI_GET_CUSTOM_VOCABULARY_DETAILS",
    /**
     * Tool to fetch details of a transcription job by its id. use when confirming job status and metadata are accurate.
     */
    GET_JOB_BY_ID: "REV_AI_GET_JOB_BY_ID",
    /**
     * Tool to get list of transcription jobs from the past 30 days. use when you need to retrieve and paginate through recent transcription tasks.
     */
    GET_LIST_OF_JOBS: "REV_AI_GET_LIST_OF_JOBS",
    /**
     * Tool to retrieve the transcript of a completed rev.ai job. use after confirming job is complete. supports json, plaintext, vtt or srt formats.
     */
    GET_TRANSCRIPT_BY_ID: "REV_AI_GET_TRANSCRIPT_BY_ID",
    /**
     * Tool to start a websocket transcription stream. use when you need real-time speech-to-text streaming via rev.ai.
     */
    START_STREAM_TRANSCRIPTION: "REV_AI_START_STREAM_TRANSCRIPTION",
    /**
     * Tool to submit a custom vocabulary for improved speech recognition. use when you want to process domain-specific terms asynchronously.
     */
    SUBMIT_CUSTOM_VOCABULARY: "REV_AI_SUBMIT_CUSTOM_VOCABULARY",
    /**
     * Tool to submit a new transcription job. use when you have a media url or file bytes ready for async processing.
     */
    SUBMIT_TRANSCRIPTION_JOB: "REV_AI_SUBMIT_TRANSCRIPTION_JOB",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "REV_AI".
 */
export type REV_AI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "REV_AI".
 */
export type REV_AI_TRIGGER_EVENTS = {}
