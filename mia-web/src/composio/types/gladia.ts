// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GLADIA's GLADIA_GET_LIVE_TRANSCRIPTION_RESULT tool input.
 */
type GLADIA_GET_LIVE_TRANSCRIPTION_RESULT_INPUT = {
  /**
   * Id
   * @description Unique identifier of the live transcription job
   */
  id?: string;
};

/**
 * Type of GLADIA's GLADIA_GET_LIVE_TRANSCRIPTION_RESULT tool output.
 */
type GLADIA_GET_LIVE_TRANSCRIPTION_RESULT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Completed At
       * @description Completion date when status is done or error
       * @default null
       */
      completed_at: string | null;
      /**
       * Created At
       * @description Creation date
       */
      created_at: string;
      /**
       * Custom Metadata
       * @description Custom metadata provided at initiation
       * @default null
       */
      custom_metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Error Code
       * @description HTTP status code when status is error
       * @default null
       */
      error_code: number | null;
      /**
       * FileModel
       * @description The uploaded file data (null if status is error)
       * @default null
       */
      file: {
          /**
           * Audio Duration
           * @description Duration of the audio in seconds
           */
          audio_duration: number;
          /**
           * Filename
           * @description Original filename of the audio source
           */
          filename: string;
          /**
           * Id
           * @description Unique file identifier
           */
          id: string;
          /**
           * Number Of Channels
           * @description Number of audio channels
           */
          number_of_channels: number;
          /**
           * Source
           * @description Audio source URL or identifier
           */
          source: string;
      } | null;
      /**
       * Id
       * @description Id of the job
       */
      id: string;
      /**
       * Kind
       * @description Kind of job, e.g., 'live'
       */
      kind: string;
      /**
       * Request Id
       * @description Debug id
       */
      request_id: string;
      /**
       * RequestParamsModel
       * @description Parameters used for this live transcription (null if status is error)
       * @default null
       */
      request_params: {
          /** Bit Depth */
          bit_depth: number;
          /** Callback */
          callback: boolean;
          /**
           * CallbackConfigModel
           * @default null
           */
          callback_config: {
              /** Receive Acknowledgments */
              receive_acknowledgments: boolean;
              /** Receive Errors */
              receive_errors: boolean;
              /** Receive Final Transcripts */
              receive_final_transcripts: boolean;
              /** Receive Lifecycle Events */
              receive_lifecycle_events: boolean;
              /** Receive Partial Transcripts */
              receive_partial_transcripts: boolean;
              /** Receive Post Processing Events */
              receive_post_processing_events: boolean;
              /** Receive Pre Processing Events */
              receive_pre_processing_events: boolean;
              /** Receive Realtime Processing Events */
              receive_realtime_processing_events: boolean;
              /** Receive Speech Events */
              receive_speech_events: boolean;
              /**
               * Url
               * @description Callback URL to receive events
               */
              url: string;
          } | null;
          /** Channels */
          channels: number;
          /** Encoding */
          encoding: string;
          /** Endpointing */
          endpointing: number;
          /** Language Config */
          language_config: {
              /**
               * Code Switching
               * @description Whether to allow code switching
               */
              code_switching: boolean;
              /**
               * Languages
               * @description List of language codes to recognize
               */
              languages: string[];
          };
          /** Maximum Duration Without Endpointing */
          maximum_duration_without_endpointing: number;
          /** Messages Config */
          messages_config: {
              /** Receive Acknowledgments */
              receive_acknowledgments: boolean;
              /** Receive Errors */
              receive_errors: boolean;
              /** Receive Final Transcripts */
              receive_final_transcripts: boolean;
              /** Receive Lifecycle Events */
              receive_lifecycle_events: boolean;
              /** Receive Partial Transcripts */
              receive_partial_transcripts: boolean;
              /** Receive Post Processing Events */
              receive_post_processing_events: boolean;
              /** Receive Pre Processing Events */
              receive_pre_processing_events: boolean;
              /** Receive Realtime Processing Events */
              receive_realtime_processing_events: boolean;
              /** Receive Speech Events */
              receive_speech_events: boolean;
          };
          /** Model */
          model: string;
          /** Post Processing */
          post_processing: {
              /**
               * Chapterization
               * @description Whether to detect chapters
               */
              chapterization: boolean;
              /**
               * Summarization
               * @description Whether to summarize transcription
               */
              summarization: boolean;
              /**
               * Summarization Config
               * @default null
               */
              summarization_config: {
                  [key: string]: unknown;
              } | null;
          };
          /** Pre Processing */
          pre_processing: {
              /**
               * Audio Enhancer
               * @description Whether to apply audio enhancement
               */
              audio_enhancer: boolean;
              /**
               * Speech Threshold
               * @description Speech detection threshold
               */
              speech_threshold: number;
          };
          /** Realtime Processing */
          realtime_processing: {
              /**
               * Custom Spelling
               * @description Whether to apply custom spelling
               */
              custom_spelling: boolean;
              /**
               * CustomSpellingConfigModel
               * @default null
               */
              custom_spelling_config: {
                  /**
                   * Spelling Dictionary
                   * @description Custom spelling overrides
                   */
                  spelling_dictionary: {
                      [key: string]: unknown;
                  };
              } | null;
              /**
               * Custom Vocabulary
               * @description Whether to use custom vocabulary
               */
              custom_vocabulary: boolean;
              /**
               * CustomVocabularyConfigModel
               * @default null
               */
              custom_vocabulary_config: {
                  /**
                   * Default Intensity
                   * @description Default intensity for vocabulary items
                   */
                  default_intensity: number;
                  /**
                   * Vocabulary
                   * @description Custom vocabulary list
                   */
                  vocabulary: {
                      /**
                       * Intensity
                       * @description Intensity weight
                       * @default null
                       */
                      intensity: number | null;
                      /**
                       * Language
                       * @description Language code for this entry
                       * @default null
                       */
                      language: string | null;
                      /**
                       * Pronunciations
                       * @description List of pronunciations
                       * @default null
                       */
                      pronunciations: string[] | null;
                      /**
                       * Value
                       * @description Vocabulary item string
                       */
                      value: string;
                  }[];
              } | null;
              /**
               * Named Entity Recognition
               * @description Whether to run named entity recognition
               */
              named_entity_recognition: boolean;
              /**
               * Sentiment Analysis
               * @description Whether to perform sentiment analysis
               */
              sentiment_analysis: boolean;
              /**
               * Translation
               * @description Whether to enable translation
               */
              translation: boolean;
              /**
               * Translation Config
               * @default null
               */
              translation_config: {
                  [key: string]: unknown;
              } | null;
          };
          /** Sample Rate */
          sample_rate: number;
      } | null;
      /**
       * ResultModel
       * @description Live transcription result when status is done
       * @default null
       */
      result: {
          /**
           * Chapterization
           * @default null
           */
          chapterization: {
              [key: string]: unknown;
          } | null;
          /** Messages */
          messages: string[];
          /** Metadata */
          metadata: {
              /** Audio Duration */
              audio_duration: number;
              /** Billing Time */
              billing_time: number;
              /** Number Of Distinct Channels */
              number_of_distinct_channels: number;
              /** Transcription Time */
              transcription_time: number;
          };
          /**
           * Named Entity Recognition
           * @default null
           */
          named_entity_recognition: {
              [key: string]: unknown;
          } | null;
          /**
           * Sentiment Analysis
           * @default null
           */
          sentiment_analysis: {
              [key: string]: unknown;
          } | null;
          /**
           * Summarization
           * @default null
           */
          summarization: {
              [key: string]: unknown;
          } | null;
          /** Transcription */
          transcription: {
              /** Full Transcript */
              full_transcript: string;
              /** Languages */
              languages: string[];
              /** Sentences */
              sentences: {
                  [key: string]: unknown;
              }[];
              /** Subtitles */
              subtitles: {
                  [key: string]: unknown;
              }[];
              /** Utterances */
              utterances: {
                  [key: string]: unknown;
              }[];
          };
          /**
           * Translation
           * @default null
           */
          translation: {
              [key: string]: unknown;
          } | null;
      } | null;
      /**
       * Status
       * @description Job state
       */
      status: string;
      /**
       * Version
       * @description API version
       */
      version: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GLADIA's GLADIA_GET_PRE_RECORDED_TRANSCRIPTION_RESULT tool input.
 */
type GLADIA_GET_PRE_RECORDED_TRANSCRIPTION_RESULT_INPUT = {
  /**
   * Id
   * @description UUID of the pre-recorded transcription job
   */
  id?: string;
};

/**
 * Type of GLADIA's GLADIA_GET_PRE_RECORDED_TRANSCRIPTION_RESULT tool output.
 */
type GLADIA_GET_PRE_RECORDED_TRANSCRIPTION_RESULT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Completed At
       * @description Completion timestamp when job is done or error
       * @default null
       */
      completed_at: string | null;
      /**
       * Created At
       * @description Creation timestamp in RFC3339 format
       */
      created_at: string;
      /**
       * Custom Metadata
       * @description Custom metadata provided at job creation
       * @default null
       */
      custom_metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Error Code
       * @description HTTP error code if job encountered an error
       * @default null
       */
      error_code: number | null;
      /**
       * FileInfo
       * @description Information about the uploaded file; may be null on error
       * @default null
       */
      file: {
          /**
           * Audio Duration
           * @description Duration of the audio in seconds
           */
          audio_duration: number;
          /**
           * Filename
           * @description Original filename
           */
          filename: string;
          /**
           * Id
           * @description Gladia-internal file identifier
           */
          id: string;
          /**
           * Number Of Channels
           * @description Number of audio channels
           */
          number_of_channels: number;
          /**
           * Source
           * @description Original URI or source, if provided
           * @default null
           */
          source: string | null;
      } | null;
      /**
       * Id
       * @description ID of the transcription job
       */
      id: string;
      /**
       * Kind
       * @description Kind of job
       * @constant
       */
      kind: "pre-recorded";
      /**
       * Request Id
       * @description Debug request identifier
       */
      request_id: string;
      /**
       * Request Params
       * @description Parameters used when creating the transcription job; may be null on error
       * @default null
       */
      request_params: {
          [key: string]: unknown;
      } | null;
      /**
       * Result
       * @description Transcription results and related metadata; present when status is 'done'
       * @default null
       */
      result: {
          [key: string]: unknown;
      } | null;
      /**
       * Status
       * @description Current status of the job
       * @enum {string}
       */
      status: "queued" | "processing" | "done" | "error";
      /**
       * Version
       * @description API version used for this job
       */
      version: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GLADIA's GLADIA_INITIATE_LIVE_SESSION tool input.
 */
type GLADIA_INITIATE_LIVE_SESSION_INPUT = {
  /**
   * Bit Depth
   * @description Audio sample bit depth.
   * @default 16
   * @enum {integer}
   */
  bit_depth: 8 | 16 | 24 | 32;
  /**
   * Callback
   * @description Whether to enable callback delivery.
   * @default false
   */
  callback: boolean;
  /**
   * Callback Config
   * @description Callback delivery settings if callback is true.
   * @default null
   */
  callback_config: {
      [key: string]: unknown;
  } | null;
  /**
   * Channels
   * @description Number of audio channels (1-8).
   * @default 1
   */
  channels: number;
  /**
   * Custom Metadata
   * @description Arbitrary key/value metadata for the session.
   * @default null
   */
  custom_metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Encoding
   * @description Audio encoding format.
   * @default wav/pcm
   * @enum {string}
   */
  encoding: "wav/pcm" | "wav/alaw" | "wav/ulaw";
  /**
   * Endpointing
   * @description Silence duration in seconds to end an utterance.
   * @default 0.05
   */
  endpointing: number;
  /**
   * Language Config
   * @description Optional language settings object.
   * @default null
   */
  language_config: {
      [key: string]: unknown;
  } | null;
  /**
   * Maximum Duration Without Endpointing
   * @description Maximum seconds before forcing utterance end.
   * @default 5
   */
  maximum_duration_without_endpointing: number;
  /**
   * Messages Config
   * @description Optional WebSocket message delivery configuration.
   * @default null
   */
  messages_config: {
      [key: string]: unknown;
  } | null;
  /**
   * Model
   * @description Transcription model to use.
   * @default solaria-1
   * @enum {string}
   */
  model: "solaria-1" | "solaria-2";
  /**
   * Post Processing
   * @description Optional post-processing settings object.
   * @default null
   */
  post_processing: {
      [key: string]: unknown;
  } | null;
  /**
   * Pre Processing
   * @description Optional pre-processing settings object.
   * @default null
   */
  pre_processing: {
      [key: string]: unknown;
  } | null;
  /**
   * Realtime Processing
   * @description Optional realtime processing settings object.
   * @default null
   */
  realtime_processing: {
      [key: string]: unknown;
  } | null;
  /**
   * Region
   * @description Processing region; one of 'us-west' or 'eu-west'.
   * @default null
   * @enum {string|null}
   */
  region: "us-west" | "eu-west" | null;
  /**
   * Sample Rate
   * @description Audio sample rate in Hz.
   * @default 16000
   * @enum {integer}
   */
  sample_rate: 8000 | 16000 | 32000 | 44100 | 48000;
};

/**
 * Type of GLADIA's GLADIA_INITIATE_LIVE_SESSION tool output.
 */
type GLADIA_INITIATE_LIVE_SESSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Session creation timestamp in ISO 8601 format.
       */
      created_at: string;
      /**
       * Id
       * @description Unique session identifier (UUID).
       */
      id: string;
      /**
       * Url
       * @description WebSocket URL to stream audio.
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
 * Type of GLADIA's GLADIA_INITIATE_PRE_RECORDED_TRANSCRIPTION tool input.
 */
type GLADIA_INITIATE_PRE_RECORDED_TRANSCRIPTION_INPUT = {
  /**
   * Audio Url
   * @description URL to an audio or video file (public URL or previously uploaded Gladia file).
   */
  audio_url?: string;
  /**
   * Custom Metadata
   * @description Optional arbitrary metadata to attach to the job.
   * @default null
   */
  custom_metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * DiarizationConfig
   * @description Configuration for speaker diarization.
   * @default null
   */
  diarization_config: {
      /**
       * Enhanced
       * @description Whether to enable enhanced diarization model.
       * @default null
       */
      enhanced: boolean | null;
      /**
       * Max Speakers
       * @description Maximum number of speakers in diarization.
       * @default null
       */
      max_speakers: number | null;
      /**
       * Min Speakers
       * @description Minimum number of speakers in diarization.
       * @default null
       */
      min_speakers: number | null;
      /**
       * Number Of Speakers
       * @description Estimated number of speakers to detect.
       * @default null
       */
      number_of_speakers: number | null;
  } | null;
  /**
   * LanguageConfig
   * @description Configuration for preferred language handling.
   * @default null
   */
  language_config: {
      /**
       * Code Switching
       * @description Whether to enable multilingual (code switching) detection.
       */
      code_switching: boolean;
      /**
       * Languages
       * @description Target language codes to recognize (ISO 639 codes).
       */
      languages: string[];
  } | null;
  /**
   * Model
   * @description Transcription model to use.
   * @default solaria-1
   * @enum {string}
   */
  model: "solaria-1" | "solaria-2";
  /**
   * SubtitlesConfig
   * @description Configuration for subtitle generation.
   * @default null
   */
  subtitles_config: {
      /**
       * Formats
       * @description Subtitle formats to generate, e.g., ['srt', 'vtt'].
       * @default null
       */
      formats: string[] | null;
      /**
       * Maximum Characters Per Row
       * @description Maximum characters per subtitle row.
       * @default null
       */
      maximum_characters_per_row: number | null;
      /**
       * Maximum Duration
       * @description Maximum caption duration in seconds.
       * @default null
       */
      maximum_duration: number | null;
      /**
       * Maximum Rows Per Caption
       * @description Maximum rows per subtitle caption.
       * @default null
       */
      maximum_rows_per_caption: number | null;
      /**
       * Minimum Duration
       * @description Minimum caption duration in seconds.
       * @default null
       */
      minimum_duration: number | null;
      /**
       * Style
       * @description Subtitle styling option, e.g., 'default'.
       * @default null
       */
      style: string | null;
  } | null;
  /**
   * SummarizationConfig
   * @description Configuration for summarization of transcription.
   * @default null
   */
  summarization_config: {
      /**
       * Type
       * @description Summarization type, e.g., 'general'.
       * @default null
       */
      type: string | null;
  } | null;
  /**
   * TranslationConfig
   * @description Configuration for translation of transcription.
   * @default null
   */
  translation_config: {
      /**
       * Context
       * @description Contextual prompt for translation model.
       * @default null
       */
      context: string | null;
      /**
       * Context Adaptation
       * @description Enable context adaptation for translation.
       * @default null
       */
      context_adaptation: boolean | null;
      /**
       * Informal
       * @description Whether to use informal tone in translation.
       * @default null
       */
      informal: boolean | null;
      /**
       * Lipsync
       * @description Whether to include lipsync metadata for subtitles.
       * @default null
       */
      lipsync: boolean | null;
      /**
       * Match Original Utterances
       * @description Whether to match segmentation of original utterances.
       * @default null
       */
      match_original_utterances: boolean | null;
      /**
       * Model
       * @description Translation model to use, e.g., 'base'.
       * @default null
       */
      model: string | null;
      /**
       * Target Languages
       * @description Target language codes for translation (ISO 639 codes).
       * @default null
       */
      target_languages: string[] | null;
  } | null;
};

/**
 * Type of GLADIA's GLADIA_INITIATE_PRE_RECORDED_TRANSCRIPTION tool output.
 */
type GLADIA_INITIATE_PRE_RECORDED_TRANSCRIPTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Identifier of the created transcription job.
       */
      id: string;
      /**
       * Result Url
       * @description URL to fetch the transcription results.
       */
      result_url: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GLADIA's GLADIA_LIST_LIVE_TRANSCRIPTIONS tool input.
 */
type GLADIA_LIST_LIVE_TRANSCRIPTIONS_INPUT = {
  /**
   * After Date
   * @description Filter for items after the specified ISO date-time (use with before_date for a range).
   * @default null
   */
  after_date: string | null;
  /**
   * Before Date
   * @description Include items that occurred before the specified ISO date-time.
   * @default null
   */
  before_date: string | null;
  /**
   * Custom Metadata
   * @description Filter by custom metadata object (e.g., {'user': 'John Doe'}).
   * @default null
   */
  custom_metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Date
   * @description Filter items relevant to a specific date in ISO format (YYYY-MM-DD).
   * @default null
   */
  date: string | null;
  /**
   * Limit
   * @description Max number of items to return.
   * @default 20
   */
  limit: number;
  /**
   * Offset
   * @description The starting point for pagination; 0 starts from the first item.
   * @default 0
   */
  offset: number;
  /**
   * Status
   * @description Filter by item status; accepts multiple values (e.g., ['running','completed']).
   * @default null
   */
  status: string[] | null;
};

/**
 * Type of GLADIA's GLADIA_LIST_LIVE_TRANSCRIPTIONS tool output.
 */
type GLADIA_LIST_LIVE_TRANSCRIPTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Current
       * @description URL to fetch the current page
       */
      current: string;
      /**
       * First
       * @description URL to fetch the first page
       */
      first: string;
      /**
       * Items
       * @description List of live transcriptions
       */
      items: {
          /**
           * Completed At
           * @default null
           */
          completed_at: string | null;
          /** Created At */
          created_at: string;
          /**
           * Custom Metadata
           * @default null
           */
          custom_metadata: {
              [key: string]: unknown;
          } | null;
          /**
           * Error Code
           * @default null
           */
          error_code: number | null;
          /** File */
          file: {
              /**
               * Audio Duration
               * @description Duration of the audio in seconds.
               */
              audio_duration: number;
              /**
               * Filename
               * @description Original filename of the audio source.
               */
              filename: string;
              /**
               * Id
               * @description Unique file identifier.
               */
              id: string;
              /**
               * Number Of Channels
               * @description Number of audio channels.
               */
              number_of_channels: number;
              /**
               * Source
               * @description Audio source URL or identifier.
               */
              source: string;
          };
          /** Id */
          id: string;
          /** Kind */
          kind: string;
          /** Request Id */
          request_id: string;
          /** Request Params */
          request_params: {
              /** Bit Depth */
              bit_depth: number;
              /** Callback */
              callback: boolean;
              /**
               * CallbackConfigModel
               * @default null
               */
              callback_config: {
                  /** Receive Acknowledgments */
                  receive_acknowledgments: boolean;
                  /** Receive Errors */
                  receive_errors: boolean;
                  /** Receive Final Transcripts */
                  receive_final_transcripts: boolean;
                  /** Receive Lifecycle Events */
                  receive_lifecycle_events: boolean;
                  /** Receive Partial Transcripts */
                  receive_partial_transcripts: boolean;
                  /** Receive Post Processing Events */
                  receive_post_processing_events: boolean;
                  /** Receive Pre Processing Events */
                  receive_pre_processing_events: boolean;
                  /** Receive Realtime Processing Events */
                  receive_realtime_processing_events: boolean;
                  /** Receive Speech Events */
                  receive_speech_events: boolean;
                  /**
                   * Url
                   * @description Callback URL to receive events.
                   */
                  url: string;
              } | null;
              /** Channels */
              channels: number;
              /** Encoding */
              encoding: string;
              /** Endpointing */
              endpointing: number;
              /** Language Config */
              language_config: {
                  /**
                   * Code Switching
                   * @description Whether to allow code switching.
                   */
                  code_switching: boolean;
                  /**
                   * Languages
                   * @description List of language codes to recognize.
                   */
                  languages: string[];
              };
              /** Maximum Duration Without Endpointing */
              maximum_duration_without_endpointing: number;
              /** Messages Config */
              messages_config: {
                  /** Receive Acknowledgments */
                  receive_acknowledgments: boolean;
                  /** Receive Errors */
                  receive_errors: boolean;
                  /** Receive Final Transcripts */
                  receive_final_transcripts: boolean;
                  /** Receive Lifecycle Events */
                  receive_lifecycle_events: boolean;
                  /** Receive Partial Transcripts */
                  receive_partial_transcripts: boolean;
                  /** Receive Post Processing Events */
                  receive_post_processing_events: boolean;
                  /** Receive Pre Processing Events */
                  receive_pre_processing_events: boolean;
                  /** Receive Realtime Processing Events */
                  receive_realtime_processing_events: boolean;
                  /** Receive Speech Events */
                  receive_speech_events: boolean;
              };
              /** Model */
              model: string;
              /** Post Processing */
              post_processing: {
                  /**
                   * Chapterization
                   * @description Whether to detect chapters.
                   */
                  chapterization: boolean;
                  /**
                   * Summarization
                   * @description Whether to summarize transcription.
                   */
                  summarization: boolean;
                  /**
                   * Summarization Config
                   * @default null
                   */
                  summarization_config: {
                      [key: string]: unknown;
                  } | null;
              };
              /** Pre Processing */
              pre_processing: {
                  /**
                   * Audio Enhancer
                   * @description Whether to apply audio enhancement.
                   */
                  audio_enhancer: boolean;
                  /**
                   * Speech Threshold
                   * @description Speech detection threshold.
                   */
                  speech_threshold: number;
              };
              /** Realtime Processing */
              realtime_processing: {
                  /**
                   * Custom Spelling
                   * @description Whether to apply custom spelling.
                   */
                  custom_spelling: boolean;
                  /**
                   * CustomSpellingConfigModel
                   * @default null
                   */
                  custom_spelling_config: {
                      /**
                       * Spelling Dictionary
                       * @description Custom spelling overrides.
                       */
                      spelling_dictionary: {
                          [key: string]: unknown;
                      };
                  } | null;
                  /**
                   * Custom Vocabulary
                   * @description Whether to use custom vocabulary.
                   */
                  custom_vocabulary: boolean;
                  /**
                   * CustomVocabularyConfigModel
                   * @default null
                   */
                  custom_vocabulary_config: {
                      /**
                       * Default Intensity
                       * @description Default intensity for vocabulary items.
                       */
                      default_intensity: number;
                      /**
                       * Vocabulary
                       * @description Custom vocabulary list.
                       */
                      vocabulary: {
                          /**
                           * Intensity
                           * @description Intensity weight.
                           * @default null
                           */
                          intensity: number | null;
                          /**
                           * Language
                           * @description Language code for this entry.
                           * @default null
                           */
                          language: string | null;
                          /**
                           * Pronunciations
                           * @description List of pronunciations.
                           * @default null
                           */
                          pronunciations: string[] | null;
                          /**
                           * Value
                           * @description Vocabulary item string.
                           */
                          value: string;
                      }[];
                  } | null;
                  /**
                   * Named Entity Recognition
                   * @description Whether to run named entity recognition.
                   */
                  named_entity_recognition: boolean;
                  /**
                   * Sentiment Analysis
                   * @description Whether to perform sentiment analysis.
                   */
                  sentiment_analysis: boolean;
                  /**
                   * Translation
                   * @description Whether to enable translation.
                   */
                  translation: boolean;
                  /**
                   * Translation Config
                   * @default null
                   */
                  translation_config: {
                      [key: string]: unknown;
                  } | null;
              };
              /** Sample Rate */
              sample_rate: number;
          };
          /**
           * ResultModel
           * @default null
           */
          result: {
              /**
               * Chapterization
               * @default null
               */
              chapterization: {
                  [key: string]: unknown;
              } | null;
              /** Messages */
              messages: string[];
              /** Metadata */
              metadata: {
                  /** Audio Duration */
                  audio_duration: number;
                  /** Billing Time */
                  billing_time: number;
                  /** Number Of Distinct Channels */
                  number_of_distinct_channels: number;
                  /** Transcription Time */
                  transcription_time: number;
              };
              /**
               * Named Entity Recognition
               * @default null
               */
              named_entity_recognition: {
                  [key: string]: unknown;
              } | null;
              /**
               * Sentiment Analysis
               * @default null
               */
              sentiment_analysis: {
                  [key: string]: unknown;
              } | null;
              /**
               * Summarization
               * @default null
               */
              summarization: {
                  [key: string]: unknown;
              } | null;
              /** Transcription */
              transcription: {
                  /** Full Transcript */
                  full_transcript: string;
                  /** Languages */
                  languages: string[];
                  /** Sentences */
                  sentences: {
                      [key: string]: unknown;
                  }[];
                  /** Subtitles */
                  subtitles: {
                      [key: string]: unknown;
                  }[];
                  /** Utterances */
                  utterances: {
                      [key: string]: unknown;
                  }[];
              };
              /**
               * Translation
               * @default null
               */
              translation: {
                  [key: string]: unknown;
              } | null;
          } | null;
          /** Status */
          status: string;
          /** Version */
          version: number;
      }[];
      /**
       * Next
       * @description URL to fetch the next page (or null)
       * @default null
       */
      next: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GLADIA's GLADIA_LIST_PRE_RECORDED_TRANSCRIPTIONS tool input.
 */
type GLADIA_LIST_PRE_RECORDED_TRANSCRIPTIONS_INPUT = {
  /**
   * After Date
   * @description Include items after this ISO date-time (e.g., 2023-08-01T00:00:00Z)
   * @default null
   */
  after_date: string | null;
  /**
   * Before Date
   * @description Include items before this ISO date-time (e.g., 2023-08-15T13:45:30Z)
   * @default null
   */
  before_date: string | null;
  /**
   * Custom Metadata
   * @description Custom metadata filter, e.g., {"user": "John Doe"}
   * @default null
   */
  custom_metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Date
   * @description Filter for a specific date in ISO format (YYYY-MM-DD)
   * @default null
   */
  date: string | null;
  /**
   * Limit
   * @description Maximum number of items to return; must be >= 1
   * @default 20
   */
  limit: number | null;
  /**
   * Offset
   * @description Start index for pagination; must be >= 0
   * @default 0
   */
  offset: number | null;
  /**
   * Status
   * @description Filter by one or more job statuses
   * @default null
   */
  status: string[] | null;
};

/**
 * Type of GLADIA's GLADIA_LIST_PRE_RECORDED_TRANSCRIPTIONS tool output.
 */
type GLADIA_LIST_PRE_RECORDED_TRANSCRIPTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Current
       * @description URL for current page
       */
      current: string;
      /**
       * First
       * @description URL for first page
       */
      first: string;
      /**
       * Items
       * @description List of pre-recorded transcription jobs
       */
      items: {
          /** Completed At */
          completed_at: string | null;
          /** Created At */
          created_at: string;
          /** Custom Metadata */
          custom_metadata: {
              [key: string]: unknown;
          };
          /** Error Code */
          error_code: number | null;
          /** File */
          file: {
              /** Audio Duration */
              audio_duration: number;
              /** Filename */
              filename: string;
              /** Id */
              id: string;
              /** Number Of Channels */
              number_of_channels: number;
              /** Source */
              source: string;
          };
          /** Id */
          id: string;
          /**
           * Kind
           * @constant
           */
          kind: "pre-recorded";
          /** Request Id */
          request_id: string;
          /** Request Params */
          request_params: {
              [key: string]: unknown;
          };
          /** Result */
          result: {
              [key: string]: unknown;
          };
          /** Status */
          status: string;
          /** Version */
          version: number;
      }[];
      /**
       * Next
       * @description URL for next page, or null
       * @default null
       */
      next: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GLADIA's GLADIA_UPLOAD_AUDIO_VIDEO_FILE tool input.
 */
type GLADIA_UPLOAD_AUDIO_VIDEO_FILE_INPUT = {
  /**
   * File Path
   * @description Absolute or relative path to the audio/video file
   */
  file_path?: string;
};

/**
 * Type of GLADIA's GLADIA_UPLOAD_AUDIO_VIDEO_FILE tool output.
 */
type GLADIA_UPLOAD_AUDIO_VIDEO_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Audio Metadata
       * @description Detected metadata for the uploaded file
       */
      audio_metadata: {
          /**
           * Audio Duration
           * @description Duration of the audio in seconds
           */
          audio_duration: number;
          /**
           * Extension
           * @description File extension (e.g., mp3, wav)
           */
          extension: string;
          /**
           * Filename
           * @description Original filename
           */
          filename: string;
          /**
           * Id
           * @description Gladia-internal file identifier
           */
          id: string;
          /**
           * Number Of Channels
           * @description Number of audio channels
           */
          number_of_channels: number;
          /**
           * Size
           * @description File size in bytes
           */
          size: number;
          /**
           * Source
           * @description Original URI or source, if provided by server
           * @default null
           */
          source: string | null;
      };
      /**
       * Audio Url
       * @description Public URL of the uploaded file on Gladia servers
       */
      audio_url: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "GLADIA".
 */
export type GLADIA_TOOL_INPUTS = {
  GET_LIVE_TRANSCRIPTION_RESULT: GLADIA_GET_LIVE_TRANSCRIPTION_RESULT_INPUT
  GET_PRE_RECORDED_TRANSCRIPTION_RESULT: GLADIA_GET_PRE_RECORDED_TRANSCRIPTION_RESULT_INPUT
  INITIATE_LIVE_SESSION: GLADIA_INITIATE_LIVE_SESSION_INPUT
  INITIATE_PRE_RECORDED_TRANSCRIPTION: GLADIA_INITIATE_PRE_RECORDED_TRANSCRIPTION_INPUT
  LIST_LIVE_TRANSCRIPTIONS: GLADIA_LIST_LIVE_TRANSCRIPTIONS_INPUT
  LIST_PRE_RECORDED_TRANSCRIPTIONS: GLADIA_LIST_PRE_RECORDED_TRANSCRIPTIONS_INPUT
  UPLOAD_AUDIO_VIDEO_FILE: GLADIA_UPLOAD_AUDIO_VIDEO_FILE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GLADIA".
 */
export type GLADIA_TOOL_OUTPUTS = {
  GET_LIVE_TRANSCRIPTION_RESULT: GLADIA_GET_LIVE_TRANSCRIPTION_RESULT_OUTPUT
  GET_PRE_RECORDED_TRANSCRIPTION_RESULT: GLADIA_GET_PRE_RECORDED_TRANSCRIPTION_RESULT_OUTPUT
  INITIATE_LIVE_SESSION: GLADIA_INITIATE_LIVE_SESSION_OUTPUT
  INITIATE_PRE_RECORDED_TRANSCRIPTION: GLADIA_INITIATE_PRE_RECORDED_TRANSCRIPTION_OUTPUT
  LIST_LIVE_TRANSCRIPTIONS: GLADIA_LIST_LIVE_TRANSCRIPTIONS_OUTPUT
  LIST_PRE_RECORDED_TRANSCRIPTIONS: GLADIA_LIST_PRE_RECORDED_TRANSCRIPTIONS_OUTPUT
  UPLOAD_AUDIO_VIDEO_FILE: GLADIA_UPLOAD_AUDIO_VIDEO_FILE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GLADIA toolkit.
 */
export const GLADIA = {
  slug: "gladia",
  tools: {
    /**
     * Tool to retrieve metadata and results of a live transcription job. Use when you need detailed status or results for a specific live transcription session.
     */
    GET_LIVE_TRANSCRIPTION_RESULT: "GLADIA_GET_LIVE_TRANSCRIPTION_RESULT",
    /**
     * Tool to retrieve metadata for a pre-recorded transcription job. Use when checking the status or retrieving results of a specific job ID.
     */
    GET_PRE_RECORDED_TRANSCRIPTION_RESULT: "GLADIA_GET_PRE_RECORDED_TRANSCRIPTION_RESULT",
    /**
     * Tool to initiate a live transcription session. Use before streaming audio to get a WebSocket URL.
     */
    INITIATE_LIVE_SESSION: "GLADIA_INITIATE_LIVE_SESSION",
    /**
     * Tool to initiate a pre-recorded transcription job. Use when you have an audio URL and need asynchronous transcription results.
     */
    INITIATE_PRE_RECORDED_TRANSCRIPTION: "GLADIA_INITIATE_PRE_RECORDED_TRANSCRIPTION",
    /**
     * Tool to list live transcription jobs. Use when you need an overview of live transcription sessions with optional filtering and pagination. Use after setting up live transcription.
     */
    LIST_LIVE_TRANSCRIPTIONS: "GLADIA_LIST_LIVE_TRANSCRIPTIONS",
    /**
     * Tool to list pre-recorded transcription jobs with optional filters. Use after submitting or querying jobs to retrieve paginated results.
     */
    LIST_PRE_RECORDED_TRANSCRIPTIONS: "GLADIA_LIST_PRE_RECORDED_TRANSCRIPTIONS",
    /**
     * Tool to upload an audio or video file to Gladia's servers. Use when preparing a file for transcription.
     */
    UPLOAD_AUDIO_VIDEO_FILE: "GLADIA_UPLOAD_AUDIO_VIDEO_FILE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GLADIA".
 */
export type GLADIA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GLADIA".
 */
export type GLADIA_TRIGGER_EVENTS = {}
