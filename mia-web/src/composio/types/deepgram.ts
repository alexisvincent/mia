// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DEEPGRAM's DEEPGRAM_GET_MODELS tool input.
 */
type DEEPGRAM_GET_MODELS_INPUT = {
  /**
   * Include Outdated
   * @description If true, include all versions of every model; otherwise only the latest.
   * @default false
   */
  include_outdated: boolean;
};

/**
 * Type of DEEPGRAM's DEEPGRAM_GET_MODELS tool output.
 */
type DEEPGRAM_GET_MODELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Models
       * @description List of model metadata objects.
       */
      models: {
          /**
           * Availability
           * @description Availability status of the model.
           */
          availability: string;
          /**
           * Created
           * @description ISO 8601 creation timestamp.
           */
          created: string;
          /**
           * Deprecated
           * @description True if the model is deprecated.
           */
          deprecated: boolean;
          /**
           * Description
           * @description Model description.
           */
          description: string;
          /**
           * Features
           * @description Supported features (e.g., 'punctuation', 'diarization').
           */
          features: string[];
          /**
           * Keywords
           * @description Keywords associated with the model.
           */
          keywords: string[];
          /**
           * Languages
           * @description Supported language codes.
           */
          languages: string[];
          /**
           * Model
           * @description Model name.
           */
          model: string;
          /**
           * Model Id
           * @description Deepgram-assigned model identifier.
           */
          model_id: string;
          /**
           * Sample Rate
           * @description Maximum supported sample rate (Hz).
           */
          sample_rate: number;
          /**
           * Type
           * @description Model type (e.g., 'asr').
           */
          type: string;
          /**
           * Updated
           * @description ISO 8601 last update timestamp.
           */
          updated: string;
          /**
           * Vendor
           * @description Vendor providing the model.
           */
          vendor: string;
          /**
           * Version
           * @description Model version.
           */
          version: string;
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
 * Type of DEEPGRAM's DEEPGRAM_GET_PROJECTS tool input.
 */
type DEEPGRAM_GET_PROJECTS_INPUT = object;

/**
 * Type of DEEPGRAM's DEEPGRAM_GET_PROJECTS tool output.
 */
type DEEPGRAM_GET_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Projects
       * @description List of projects accessible by the API key
       */
      projects: {
          /**
           * Created
           * @description ISO 8601 creation timestamp
           */
          created: string;
          /**
           * Id
           * @description Unique identifier for the project
           */
          id: string;
          /**
           * Modified
           * @description ISO 8601 last modification timestamp
           */
          modified: string;
          /**
           * Name
           * @description Name of the project
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
 * Type of DEEPGRAM's DEEPGRAM_GET_PROJECT_USAGE_SUMMARY tool input.
 */
type DEEPGRAM_GET_PROJECT_USAGE_SUMMARY_INPUT = {
  /**
   * Accessor Id
   * @description Filter results by accessor ID
   * @default null
   */
  accessor_id: string | null;
  /**
   * End
   * @description ISO 8601 end timestamp for the usage summary range
   * @default null
   */
  end: string | null;
  /**
   * Model
   * @description Filter results by model name
   * @default null
   */
  model: string | null;
  /**
   * Project Id
   * @description Unique identifier of the Deepgram project
   */
  project_id?: string;
  /**
   * Start
   * @description ISO 8601 start timestamp for the usage summary range
   * @default null
   */
  start: string | null;
  /**
   * Tag
   * @description Filter results by tag
   * @default null
   */
  tag: string | null;
};

/**
 * Type of DEEPGRAM's DEEPGRAM_GET_PROJECT_USAGE_SUMMARY tool output.
 */
type DEEPGRAM_GET_PROJECT_USAGE_SUMMARY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Total
       * @description Total aggregated usage metrics for the project
       */
      total: {
          /**
           * Speech
           * @description Aggregated speech metrics for the project
           */
          speech: {
              /**
               * Billable Duration
               * @description Total billable duration (in seconds)
               */
              billable_duration: number;
              /**
               * Channels
               * @description Total number of channels processed
               */
              channels: number;
              /**
               * Confidence
               * @description Average confidence of transcriptions
               */
              confidence: number;
              /**
               * Duration
               * @description Total duration of processed audio (in seconds)
               */
              duration: number;
              /**
               * Relevance
               * @description Average relevance score of transcriptions
               */
              relevance: number;
              /**
               * Requests
               * @description Total number of requests submitted
               */
              requests: number;
              /**
               * Submitted
               * @description Total duration of audio submitted (in seconds)
               */
              submitted: number;
          };
      };
      /**
       * Usage
       * @description Breakdown of usage entries by model/accessor/tag
       */
      usage: {
          /**
           * Accessor Id
           * @description Accessor ID for this usage entry
           * @default null
           */
          accessor_id: string | null;
          /**
           * Model
           * @description Model name used for this usage entry
           * @default null
           */
          model: string | null;
          /**
           * Speech
           * @description Speech metrics for this usage entry
           */
          speech: {
              /**
               * Billable Duration
               * @description Total billable duration (in seconds)
               */
              billable_duration: number;
              /**
               * Channels
               * @description Total number of channels processed
               */
              channels: number;
              /**
               * Confidence
               * @description Average confidence of transcriptions
               */
              confidence: number;
              /**
               * Duration
               * @description Total duration of processed audio (in seconds)
               */
              duration: number;
              /**
               * Relevance
               * @description Average relevance score of transcriptions
               */
              relevance: number;
              /**
               * Requests
               * @description Total number of requests submitted
               */
              requests: number;
              /**
               * Submitted
               * @description Total duration of audio submitted (in seconds)
               */
              submitted: number;
          };
          /**
           * Tag
           * @description Tag for this usage entry
           * @default null
           */
          tag: string | null;
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
 * Type of DEEPGRAM's DEEPGRAM_GET_PUBLIC_TTS_MODELS tool input.
 */
type DEEPGRAM_GET_PUBLIC_TTS_MODELS_INPUT = {
  /**
   * Include Outdated
   * @description If true, include all versions of every model; otherwise only the latest.
   * @default false
   */
  include_outdated: boolean;
};

/**
 * Type of DEEPGRAM's DEEPGRAM_GET_PUBLIC_TTS_MODELS tool output.
 */
type DEEPGRAM_GET_PUBLIC_TTS_MODELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tts
       * @description List of TTS voice models returned by Deepgram.
       */
      tts: {
          /**
           * Architecture
           * @description Underlying architecture of the model.
           */
          architecture: string;
          /**
           * Canonical Name
           * @description Deepgram's canonical identifier for the model.
           */
          canonical_name: string;
          /**
           * Languages
           * @description List of supported language or locale codes.
           */
          languages: string[];
          /**
           * Metadata
           * @description Supplemental metadata for the model.
           */
          metadata: {
              /**
               * Accent
               * @description Accent of the voice model.
               * @default null
               */
              accent: string | null;
              /**
               * Color
               * @description Hex color tag for the model.
               * @default null
               */
              color: string | null;
              /**
               * Image
               * @description URL to a representative image or avatar.
               * @default null
               */
              image: string | null;
              /**
               * Sample
               * @description URL to an example audio sample.
               * @default null
               */
              sample: string | null;
              /**
               * Tags
               * @description Tags associated with the model.
               * @default null
               */
              tags: string[] | null;
          };
          /**
           * Name
           * @description Human-readable name of the model.
           */
          name: string;
          /**
           * Uuid
           * @description Unique resource identifier for the model.
           */
          uuid: string;
          /**
           * Version
           * @description Version string of this model.
           */
          version: string;
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
 * Type of DEEPGRAM's DEEPGRAM_LIST_PROJECT_SCOPES tool input.
 */
type DEEPGRAM_LIST_PROJECT_SCOPES_INPUT = {
  /**
   * Project Id
   * @description Unique identifier of the Deepgram project to list scopes for.
   */
  project_id?: string;
};

/**
 * Type of DEEPGRAM's DEEPGRAM_LIST_PROJECT_SCOPES tool output.
 */
type DEEPGRAM_LIST_PROJECT_SCOPES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Scopes
       * @description List of available scope objects for the project.
       */
      scopes: {
          /**
           * Description
           * @description Description of what the scope allows.
           */
          description: string;
          /**
           * Scope Id
           * @description Unique identifier of the scope.
           */
          scope_id: string;
          /**
           * Scope Name
           * @description Name of the scope.
           */
          scope_name: string;
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
 * Type of DEEPGRAM's DEEPGRAM_SPEECH_TO_TEXT_PRE_RECORDED tool input.
 */
type DEEPGRAM_SPEECH_TO_TEXT_PRE_RECORDED_INPUT = {
  /**
   * Alternatives
   * @description Number of alternative transcripts to return.
   * @default null
   */
  alternatives: number | null;
  /**
   * Audio Url
   * Format: uri
   * @description Public URL of the audio file to transcribe.
   */
  audio_url?: string;
  /**
   * Content Type
   * @description MIME type of the audio file.
   * @enum {string}
   */
  content_type?: "audio/wav" | "audio/mp3" | "audio/mpeg" | "audio/flac" | "audio/webm";
  /**
   * Detect Language
   * @description Automatically detect language if true.
   * @default null
   */
  detect_language: boolean | null;
  /**
   * Diarize
   * @description Enable speaker diarization if true.
   * @default null
   */
  diarize: boolean | null;
  /**
   * Interim Results
   * @description Return interim results if true.
   * @default null
   */
  interim_results: boolean | null;
  /**
   * Keywords
   * @description List of keywords to spot in the transcript.
   * @default null
   */
  keywords: string[] | null;
  /**
   * Language
   * @description Language code for transcription (e.g., 'en-US').
   * @default null
   */
  language: string | null;
  /**
   * Model
   * @description Deepgram model to use (e.g., 'general', 'phonecall').
   * @default null
   */
  model: string | null;
  /**
   * Punctuate
   * @description Automatically punctuate transcript.
   * @default null
   */
  punctuate: boolean | null;
  /**
   * Smart Format
   * @description Apply smart formatting (capitalization/punctuation).
   * @default null
   */
  smart_format: boolean | null;
  /**
   * Tier
   * @description Enhanced tier for higher-accuracy recognition.
   * @default null
   * @constant
   */
  tier: "enhanced";
  /**
   * Version
   * @description Specific model version to use.
   * @default null
   */
  version: string | null;
};

/**
 * Type of DEEPGRAM's DEEPGRAM_SPEECH_TO_TEXT_PRE_RECORDED tool output.
 */
type DEEPGRAM_SPEECH_TO_TEXT_PRE_RECORDED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Metadata
       * @description Metadata about the audio file.
       */
      metadata: {
          /**
           * Channels
           * @description Number of audio channels.
           */
          channels: number;
          /**
           * Duration
           * @description Duration of the audio in seconds.
           */
          duration: number;
          /**
           * Sample Rate
           * @description Sample rate of the audio in Hz.
           */
          sample_rate: number;
      };
      /**
       * Request Id
       * @description Unique identifier for the transcription request.
       */
      request_id: string;
      /**
       * Results
       * @description Transcription results.
       */
      results: {
          /**
           * Channels
           * @description Transcription results by audio channel.
           */
          channels: {
              /**
               * Alternatives
               * @description List of alternative transcripts for this audio channel.
               */
              alternatives: {
                  /**
                   * Confidence
                   * @description Confidence score for the transcript.
                   */
                  confidence: number;
                  /**
                   * Transcript
                   * @description Transcript text.
                   */
                  transcript: string;
                  /**
                   * Words
                   * @description Word-level timing and confidence details.
                   */
                  words: {
                      /**
                       * Confidence
                       * @description Confidence score for the word.
                       */
                      confidence: number;
                      /**
                       * End
                       * @description End time in seconds.
                       */
                      end: number;
                      /**
                       * Start
                       * @description Start time in seconds.
                       */
                      start: number;
                      /**
                       * Word
                       * @description Recognized word.
                       */
                      word: string;
                  }[];
              }[];
          }[];
          /**
           * Utterances
           * @description Speaker-diarized utterances, if requested.
           * @default null
           */
          utterances: {
              /**
               * Confidence
               * @description Confidence score for the utterance.
               */
              confidence: number;
              /**
               * End
               * @description Utterance end time in seconds.
               */
              end: number;
              /**
               * Speaker
               * @description Speaker label index.
               */
              speaker: number;
              /**
               * Start
               * @description Utterance start time in seconds.
               */
              start: number;
              /**
               * Transcript
               * @description Utterance transcript.
               */
              transcript: string;
          }[] | null;
      };
      /**
       * Warnings
       * @description Any warnings returned by the API.
       * @default null
       */
      warnings: string[] | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DEEPGRAM's DEEPGRAM_SUMMARIZE_AUDIO tool input.
 */
type DEEPGRAM_SUMMARIZE_AUDIO_INPUT = {
  /**
   * Audio Url
   * Format: uri
   * @description Public URL of the audio file to summarize.
   */
  audio_url?: string;
  /**
   * Content Type
   * @description MIME type of the audio file.
   * @enum {string}
   */
  content_type?: "audio/wav" | "audio/mp3" | "audio/mpeg" | "audio/flac" | "audio/webm";
  /**
   * Language
   * @description Language code for the audio (e.g., 'en-US').
   * @default null
   */
  language: string | null;
  /**
   * Model
   * @description Deepgram model to use for summarization (e.g., 'general').
   * @default null
   */
  model: string | null;
  /**
   * Punctuate
   * @description Automatically punctuate transcript.
   * @default null
   */
  punctuate: boolean | null;
  /**
   * Smart Format
   * @description Apply smart formatting (capitalization and punctuation).
   * @default null
   */
  smart_format: boolean | null;
  /**
   * Tier
   * @description Set the accuracy tier for transcription.
   * @default null
   * @constant
   */
  tier: "enhanced";
};

/**
 * Type of DEEPGRAM's DEEPGRAM_SUMMARIZE_AUDIO tool output.
 */
type DEEPGRAM_SUMMARIZE_AUDIO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Metadata
       * @description Metadata about the audio file.
       */
      metadata: {
          /**
           * Channels
           * @description Number of audio channels.
           */
          channels: number;
          /**
           * Duration
           * @description Duration of the audio in seconds.
           */
          duration: number;
          /**
           * Sample Rate
           * @description Sample rate of the audio in Hz.
           */
          sample_rate: number;
      };
      /**
       * Request Id
       * @description Unique identifier for the request.
       */
      request_id: string;
      /**
       * Results
       * @description Summarization and transcription results.
       */
      results: {
          /**
           * Channels
           * @description Summarization and transcription results by channel.
           */
          channels: {
              /**
               * Alternatives
               * @description List of alternative transcripts for this audio channel.
               */
              alternatives: {
                  /**
                   * Confidence
                   * @description Confidence score for the transcript.
                   */
                  confidence: number;
                  /**
                   * Summary
                   * @description Generated summary of the audio content.
                   * @default null
                   */
                  summary: string | null;
                  /**
                   * Transcript
                   * @description Transcript text.
                   */
                  transcript: string;
                  /**
                   * Words
                   * @description Word-level timing and confidence details.
                   */
                  words: {
                      /**
                       * Confidence
                       * @description Confidence score for the word.
                       */
                      confidence: number;
                      /**
                       * End
                       * @description End time in seconds.
                       */
                      end: number;
                      /**
                       * Start
                       * @description Start time in seconds.
                       */
                      start: number;
                      /**
                       * Word
                       * @description Recognized word.
                       */
                      word: string;
                  }[];
              }[];
          }[];
          /**
           * Utterances
           * @description Speaker-diarized utterances, if requested.
           * @default null
           */
          utterances: {
              /**
               * Confidence
               * @description Confidence score for the utterance.
               */
              confidence: number;
              /**
               * End
               * @description Utterance end time in seconds.
               */
              end: number;
              /**
               * Speaker
               * @description Speaker label index.
               */
              speaker: number;
              /**
               * Start
               * @description Utterance start time in seconds.
               */
              start: number;
              /**
               * Transcript
               * @description Utterance transcript.
               */
              transcript: string;
          }[] | null;
      };
      /**
       * Warnings
       * @description Any warnings returned by the API.
       * @default null
       */
      warnings: string[] | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DEEPGRAM's DEEPGRAM_TEXT_TO_SPEECH_REST tool input.
 */
type DEEPGRAM_TEXT_TO_SPEECH_REST_INPUT = {
  /**
   * Container
   * @description Container format for audio (e.g., 'wav', 'mp3').
   * @default null
   */
  container: string | null;
  /**
   * Encoding
   * @description Audio encoding type (e.g., 'linear16', 'mp3').
   * @default null
   */
  encoding: string | null;
  /**
   * Language
   * @description Language code for synthesis (e.g., 'en-US').
   * @default null
   */
  language: string | null;
  /**
   * Model
   * @description Deepgram TTS model to use (e.g., 'aura-asteria-en').
   * @default null
   */
  model: string | null;
  /**
   * Pitch
   * @description Pitch adjustment multiplier (0.5–2.0).
   * @default 1
   */
  pitch: number;
  /**
   * Sample Rate
   * @description Desired sample rate for output audio in Hz (e.g., 16000).
   * @default null
   */
  sample_rate: number | null;
  /**
   * Speed
   * @description Speech rate multiplier (0.25–4.0).
   * @default 1
   */
  speed: number;
  /**
   * Text
   * @description The text to be synthesized into speech.
   */
  text?: string;
  /**
   * Version
   * @description Model version identifier.
   * @default null
   */
  version: string | null;
  /**
   * Voice
   * @description Desired voice within the selected model.
   * @default null
   */
  voice: string | null;
};

/**
 * Type of DEEPGRAM's DEEPGRAM_TEXT_TO_SPEECH_REST tool output.
 */
type DEEPGRAM_TEXT_TO_SPEECH_REST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Audio
       * @description Base64-encoded audio content returned by Deepgram.
       */
      audio: string;
      /**
       * Content Type
       * @description MIME type of the returned audio (e.g., 'audio/wav').
       */
      content_type: string;
      /**
       * Request Id
       * @description Deepgram x-request-id header for debugging.
       * @default null
       */
      request_id: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DEEPGRAM's DEEPGRAM_TOPIC_DETECTION tool input.
 */
type DEEPGRAM_TOPIC_DETECTION_INPUT = {
  /**
   * Audio Url
   * Format: uri
   * @description Public URL of the audio file to analyze.
   */
  audio_url?: string;
  /**
   * Content Type
   * @description MIME type of the audio file.
   * @enum {string}
   */
  content_type?: "audio/wav" | "audio/mp3" | "audio/mpeg" | "audio/flac" | "audio/webm";
  /**
   * Language
   * @description Language code for transcription (e.g., 'en-US').
   * @default null
   */
  language: string | null;
  /**
   * Model
   * @description Deepgram model to use for transcription (e.g., 'general').
   * @default null
   */
  model: string | null;
};

/**
 * Type of DEEPGRAM's DEEPGRAM_TOPIC_DETECTION tool output.
 */
type DEEPGRAM_TOPIC_DETECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Topics
       * @description Detected topics with confidence scores.
       */
      topics: {
          /**
           * Confidence
           * @description Confidence score for the detected topic (0.0 to 1.0).
           */
          confidence: number;
          /**
           * Topic
           * @description Label of the detected topic.
           */
          topic: string;
      }[];
      /**
       * Transcript
       * @description The primary transcript of the audio file.
       * @default null
       */
      transcript: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "DEEPGRAM".
 */
export type DEEPGRAM_TOOL_INPUTS = {
  GET_MODELS: DEEPGRAM_GET_MODELS_INPUT
  GET_PROJECTS: DEEPGRAM_GET_PROJECTS_INPUT
  GET_PROJECT_USAGE_SUMMARY: DEEPGRAM_GET_PROJECT_USAGE_SUMMARY_INPUT
  GET_PUBLIC_TTS_MODELS: DEEPGRAM_GET_PUBLIC_TTS_MODELS_INPUT
  LIST_PROJECT_SCOPES: DEEPGRAM_LIST_PROJECT_SCOPES_INPUT
  SPEECH_TO_TEXT_PRE_RECORDED: DEEPGRAM_SPEECH_TO_TEXT_PRE_RECORDED_INPUT
  SUMMARIZE_AUDIO: DEEPGRAM_SUMMARIZE_AUDIO_INPUT
  TEXT_TO_SPEECH_REST: DEEPGRAM_TEXT_TO_SPEECH_REST_INPUT
  TOPIC_DETECTION: DEEPGRAM_TOPIC_DETECTION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DEEPGRAM".
 */
export type DEEPGRAM_TOOL_OUTPUTS = {
  GET_MODELS: DEEPGRAM_GET_MODELS_OUTPUT
  GET_PROJECTS: DEEPGRAM_GET_PROJECTS_OUTPUT
  GET_PROJECT_USAGE_SUMMARY: DEEPGRAM_GET_PROJECT_USAGE_SUMMARY_OUTPUT
  GET_PUBLIC_TTS_MODELS: DEEPGRAM_GET_PUBLIC_TTS_MODELS_OUTPUT
  LIST_PROJECT_SCOPES: DEEPGRAM_LIST_PROJECT_SCOPES_OUTPUT
  SPEECH_TO_TEXT_PRE_RECORDED: DEEPGRAM_SPEECH_TO_TEXT_PRE_RECORDED_OUTPUT
  SUMMARIZE_AUDIO: DEEPGRAM_SUMMARIZE_AUDIO_OUTPUT
  TEXT_TO_SPEECH_REST: DEEPGRAM_TEXT_TO_SPEECH_REST_OUTPUT
  TOPIC_DETECTION: DEEPGRAM_TOPIC_DETECTION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DEEPGRAM toolkit.
 */
export const DEEPGRAM = {
  slug: "deepgram",
  tools: {
    /**
     * Tool to retrieve metadata on all the latest public deepgram speech-to-text models. use when you need to list available models; set include outdated to true to include deprecated versions.
     */
    GET_MODELS: "DEEPGRAM_GET_MODELS",
    /**
     * Tool to list all deepgram projects. use after authenticating with your api key.
     */
    GET_PROJECTS: "DEEPGRAM_GET_PROJECTS",
    /**
     * Tool to retrieve a summary of usage data for a specified deepgram project. use when you need high-level metrics (submitted, processed, billable durations, etc.) optionally filtered by time window, model, accessor, or tag.
     */
    GET_PROJECT_USAGE_SUMMARY: "DEEPGRAM_GET_PROJECT_USAGE_SUMMARY",
    /**
     * Tool to fetch metadata about all latest public tts voice models. use when you need to list available deepgram tts voices.
     */
    GET_PUBLIC_TTS_MODELS: "DEEPGRAM_GET_PUBLIC_TTS_MODELS",
    /**
     * Tool to list all scopes for a specified deepgram project. use when you need to retrieve all permission scopes for a project.
     */
    LIST_PROJECT_SCOPES: "DEEPGRAM_LIST_PROJECT_SCOPES",
    /**
     * Tool to transcribe pre-recorded audio files into text. use when you need to convert an audio file at a url to text after confirming the file url is publicly accessible.
     */
    SPEECH_TO_TEXT_PRE_RECORDED: "DEEPGRAM_SPEECH_TO_TEXT_PRE_RECORDED",
    /**
     * Tool to generate concise summaries from audio content. use when you need a quick summary of audio after confirming the file url is publicly accessible.
     */
    SUMMARIZE_AUDIO: "DEEPGRAM_SUMMARIZE_AUDIO",
    /**
     * Tool to convert text into natural-sounding speech. use when you need tts audio from text inputs.
     */
    TEXT_TO_SPEECH_REST: "DEEPGRAM_TEXT_TO_SPEECH_REST",
    /**
     * Tool to transcribe audio and detect topics. use when you need to identify the main topics discussed in an audio recording after confirming the file url is publicly accessible.
     */
    TOPIC_DETECTION: "DEEPGRAM_TOPIC_DETECTION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DEEPGRAM".
 */
export type DEEPGRAM_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DEEPGRAM".
 */
export type DEEPGRAM_TRIGGER_EVENTS = {}
