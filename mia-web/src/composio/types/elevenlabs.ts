// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ELEVENLABS's ELEVENLABS_ADD_A_PRONUNCIATION_DICTIONARY tool input.
 */
type ELEVENLABS_ADD_A_PRONUNCIATION_DICTIONARY_INPUT = {
  /**
   * Description
   * @description Optional detailed description of the pronunciation dictionary and its purpose.
   */
  description?: string;
  /**
   * File
   * Format: binary
   * @description A lexicon file (typically .pls XML) containing pronunciation rules.
   */
  file?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
  /**
   * Name
   * @description A descriptive name for the pronunciation dictionary.
   */
  name?: string;
  /**
   * Workspace Access
   * @description Access level for the pronunciation dictionary within the workspace (admin, editor, or viewer).
   * @enum {string}
   */
  workspace_access?: "admin" | "editor" | "viewer";
};

/**
 * Type of ELEVENLABS's ELEVENLABS_ADD_A_PRONUNCIATION_DICTIONARY tool output.
 */
type ELEVENLABS_ADD_A_PRONUNCIATION_DICTIONARY_OUTPUT = {
  /**
   * Data
   * @description Details of the newly created pronunciation dictionary.
   */
  data?: {
      /**
       * Created By
       * @description Identifier of the user or entity that created the dictionary.
       */
      created_by: string;
      /**
       * Creation Time Unix
       * @description The Unix timestamp indicating when the pronunciation dictionary was created.
       */
      creation_time_unix: number;
      /**
       * Description
       * @description The optional description provided for the pronunciation dictionary.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description The unique identifier for the pronunciation dictionary.
       */
      id: string;
      /**
       * Name
       * @description The name assigned to the pronunciation dictionary.
       */
      name: string;
      /**
       * Version Id
       * @description The unique version identifier for this specific iteration of the pronunciation dictionary.
       */
      version_id: string;
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
 * Type of ELEVENLABS's ELEVENLABS_ADD_PROJECT tool input.
 */
type ELEVENLABS_ADD_PROJECT_INPUT = {
  /**
   * Acx Volume Normalization
   * @description Apply ACX (Audiobook Creation Exchange) volume normalization to audio output.
   * @default false
   */
  acx_volume_normalization: boolean;
  /**
   * Author
   * @description Optional author for the project (e.g., for a book).
   */
  author?: string;
  /**
   * Callback Url
   * @description Optional URL for a POST request with project conversion status updates.
   */
  callback_url?: string;
  /**
   * Default Model Id
   * @description Model ID for synthesis (e.g., 'eleven_multilingual_v2'; see GET /v1/models); uses default model if unspecified.
   */
  default_model_id?: string;
  /**
   * Default Paragraph Voice Id
   * @description Voice ID for paragraphs (see GET /v1/voices); uses ElevenLabs default if unspecified.
   */
  default_paragraph_voice_id?: string;
  /**
   * Default Title Voice Id
   * @description Voice ID for titles (see GET /v1/voices); uses ElevenLabs default if unspecified.
   */
  default_title_voice_id?: string;
  /**
   * From Document
   * Format: binary
   * @description Document file (e.g., .txt, .epub, .pdf) to upload for initializing project content. Use instead of `from_url`.
   */
  from_document?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
  /**
   * From Url
   * @description URL to extract content for initializing the project. Use instead of `from_document`.
   */
  from_url?: string;
  /**
   * Isbn Number
   * @description Optional ISBN for the project, typically for audiobooks.
   */
  isbn_number?: string;
  /**
   * Name
   * @description A unique name for the project, crucial for its identification and management.
   */
  name?: string;
  /**
   * Pronunciation Dictionary Locators
   * @description List of pronunciation dictionary locators (format: 'dictionary_id@version_id') for custom pronunciations.
   */
  pronunciation_dictionary_locators?: string[];
  /**
   * Quality Preset
   * @description Output quality of generated audio.
   * @default standard
   */
  quality_preset: string;
  /**
   * Title
   * @description Optional title for the project, distinct from `name` (e.g., for a book title).
   */
  title?: string;
  /**
   * Volume Normalization
   * @description Apply general volume normalization to audio output.
   * @default false
   */
  volume_normalization: boolean;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_ADD_PROJECT tool output.
 */
type ELEVENLABS_ADD_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Detailed information of the newly created project.
   */
  data?: {
      /** Project */
      project: {
          /** Author */
          author: string;
          /** Can Be Downloaded */
          can_be_downloaded: boolean;
          /** Create Date Unix */
          create_date_unix: number;
          /** Default Model Id */
          default_model_id: string;
          /** Default Paragraph Voice Id */
          default_paragraph_voice_id: string;
          /** Default Title Voice Id */
          default_title_voice_id: string;
          /** Isbn Number */
          isbn_number: string;
          /** Last Conversion Date Unix */
          last_conversion_date_unix: number;
          /** Name */
          name: string;
          /** Project Id */
          project_id: string;
          /**
           * State
           * @enum {string}
           */
          state: "default" | "converting";
          /** Title */
          title: string;
          /** Volume Normalization */
          volume_normalization: boolean;
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
 * Type of ELEVENLABS's ELEVENLABS_ADD_RULES_TO_THE_PRONUNCIATION_DICTIONARY tool input.
 */
type ELEVENLABS_ADD_RULES_TO_THE_PRONUNCIATION_DICTIONARY_INPUT = {
  /**
   * Pronunciation Dictionary Id
   * @description Identifier of an existing pronunciation dictionary to which rules will be added.
   */
  pronunciation_dictionary_id?: string;
  /**
   * Rules
   * @description List of pronunciation rule objects, each defining an 'alias' or 'phoneme' transformation for a specific string.
   *     - **Alias Rule**: Use `type: "alias"`, `string_to_replace`, and `alias` (replacement text). Example: `{"type": "alias", "string_to_replace": "ASAP", "alias": "as soon as possible"}`.
   *     - **Phoneme Rule**: Use `type: "phoneme"`, `string_to_replace`, `phoneme` (phonetic transcription), and `alphabet` (e.g., 'ipa'). Example: `{"type": "phoneme", "string_to_replace": "gnocchi", "phoneme": "ˈɲɔkki", "alphabet": "ipa"}`.
   */
  rules?: {
      [key: string]: unknown;
  }[];
};

/**
 * Type of ELEVENLABS's ELEVENLABS_ADD_RULES_TO_THE_PRONUNCIATION_DICTIONARY tool output.
 */
type ELEVENLABS_ADD_RULES_TO_THE_PRONUNCIATION_DICTIONARY_OUTPUT = {
  /**
   * Data
   * @description Contains details of the pronunciation dictionary after the rules have been added, including its ID and the new version ID.
   */
  data?: {
      /** Id */
      id: string;
      /** Version Id */
      version_id: string;
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
 * Type of ELEVENLABS's ELEVENLABS_ADD_SHARING_VOICE tool input.
 */
type ELEVENLABS_ADD_SHARING_VOICE_INPUT = {
  /**
   * New Name
   * @description Name to assign the shared voice in the user's library, displayed on the ElevenLabs website.
   */
  new_name?: string;
  /**
   * Public User Id
   * @description Public user ID of the ElevenLabs user to whom the shared voice will be added.
   */
  public_user_id?: string;
  /**
   * Voice Id
   * @description Unique identifier of the shared voice to be added.
   */
  voice_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_ADD_SHARING_VOICE tool output.
 */
type ELEVENLABS_ADD_SHARING_VOICE_OUTPUT = {
  /**
   * Data
   * @description Contains the `voice_id` of the voice successfully added.
   */
  data?: {
      /**
       * Voice Id
       * @description Unique identifier of the voice successfully added to the user's account.
       */
      voice_id: string;
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
 * Type of ELEVENLABS's ELEVENLABS_ADD_VOICE tool input.
 */
type ELEVENLABS_ADD_VOICE_INPUT = {
  /**
   * Description
   * @description Optional description for the voice, detailing its characteristics or intended use cases.
   */
  description?: string;
  /**
   * Files
   * @description List of audio file names (e.g., 'audio1.mp3', 'audio2.wav') for voice cloning; at least one file is required.
   */
  files?: string[];
  /**
   * Labels
   * @description Optional stringified JSON object of key-value pairs for categorizing the voice.
   */
  labels?: string;
  /**
   * Name
   * @description Name for the new voice, used as its identifier in the platform.
   */
  name?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_ADD_VOICE tool output.
 */
type ELEVENLABS_ADD_VOICE_OUTPUT = {
  /**
   * Data
   * @description Contains the `voice_id` of the newly created voice.
   */
  data?: {
      /**
       * Voice Id
       * @description The unique identifier for the newly added voice.
       */
      voice_id: string;
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
 * Type of ELEVENLABS's ELEVENLABS_CONVERT_CHAPTER tool input.
 */
type ELEVENLABS_CONVERT_CHAPTER_INPUT = {
  /**
   * Chapter Id
   * @description Identifier of the chapter to be converted.
   */
  chapter_id?: string;
  /**
   * Project Id
   * @description Identifier of the project containing the chapter to be converted.
   */
  project_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_CONVERT_CHAPTER tool output.
 */
type ELEVENLABS_CONVERT_CHAPTER_OUTPUT = {
  /**
   * Data
   * @description The response data from the chapter conversion request, typically indicating the status of the conversion initiation.
   */
  data?: unknown;
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
 * Type of ELEVENLABS's ELEVENLABS_CONVERT_PROJECT tool input.
 */
type ELEVENLABS_CONVERT_PROJECT_INPUT = {
  /**
   * Project Id
   * @description Identifier of the project to convert; find available IDs via the GET /v1/projects endpoint.
   */
  project_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_CONVERT_PROJECT tool output.
 */
type ELEVENLABS_CONVERT_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Status of the conversion initiation, e.g., 'ok' for success.
   */
  data?: unknown;
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
 * Type of ELEVENLABS's ELEVENLABS_CREATES_AUDIONATIVE_ENABLED_PROJECT tool input.
 */
type ELEVENLABS_CREATES_AUDIONATIVE_ENABLED_PROJECT_INPUT = {
  /**
   * Author
   * @description Author of the content, for display in the AudioNative player.
   */
  author?: string;
  /**
   * Auto Convert
   * @description If `True`, automatically converts content to audio after project creation; `False` (default).
   * @default false
   */
  auto_convert: boolean;
  /**
   * Background Color
   * @description CSS-compatible background color for the AudioNative player (e.g., '#RRGGBB', 'black').
   */
  background_color?: string;
  /**
   * File
   * Format: binary
   * @description Content file (e.g., TXT, HTML) to be converted into audio.
   */
  file?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
  /**
   * Image
   * @description URL for an image in the AudioNative player; a default or no image is used if omitted.
   */
  image?: string;
  /**
   * Model Id
   * @description Identifier for the ElevenLabs TTS model (e.g., 'eleven_multilingual_v2'); a default is used if omitted. See '/v1/models' for available IDs.
   */
  model_id?: string;
  /**
   * Name
   * @description User-defined name for the AudioNative project.
   */
  name?: string;
  /**
   * Sessionization
   * @description Interval in days for automatic audio reconversion; `0` (default) disables it (e.g., `1` daily, `7` weekly).
   * @default 0
   */
  sessionization: number;
  /**
   * Small
   * @description Set to `True` for a compact player; `False` (default) for standard size.
   * @default false
   */
  small: boolean;
  /**
   * Text Color
   * @description CSS-compatible text color for the AudioNative player (e.g., '#RRGGBB', 'white').
   */
  text_color?: string;
  /**
   * Title
   * @description Title of the content, for display in the AudioNative player.
   */
  title?: string;
  /**
   * Voice Id
   * @description Identifier for the ElevenLabs voice; a default is used if omitted. See '/v1/voices' for available IDs.
   */
  voice_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_CREATES_AUDIONATIVE_ENABLED_PROJECT tool output.
 */
type ELEVENLABS_CREATES_AUDIONATIVE_ENABLED_PROJECT_OUTPUT = {
  /**
   * Data
   * @description The response data containing details of the created AudioNative project, including its ID, conversion status, and HTML embed snippet.
   */
  data?: {
      /** Converting */
      converting: boolean;
      /** Html Snippet */
      html_snippet: string;
      /** Project Id */
      project_id: string;
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
 * Type of ELEVENLABS's ELEVENLABS_CREATE_A_PREVIOUSLY_GENERATED_VOICE tool input.
 */
type ELEVENLABS_CREATE_A_PREVIOUSLY_GENERATED_VOICE_INPUT = {
  /**
   * Generated Voice Id
   * @description Identifier of a previously generated voice (e.g., from POST /v1/voice-generation/generate-voice), used to finalize its creation.
   */
  generated_voice_id?: string;
  /**
   * Labels
   * @description Key-value metadata to associate with the voice.
   */
  labels?: {
      [key: string]: string;
  };
  /**
   * Voice Description
   * @description Detailed description for the newly created voice, its characteristics, or intended use.
   */
  voice_description?: string;
  /**
   * Voice Name
   * @description Name for the newly created voice.
   */
  voice_name?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_CREATE_A_PREVIOUSLY_GENERATED_VOICE tool output.
 */
type ELEVENLABS_CREATE_A_PREVIOUSLY_GENERATED_VOICE_OUTPUT = {
  /**
   * Data
   * @description Contains the full details of the newly created voice.
   */
  data?: {
      /**
       * Available For Tiers
       * @description List of subscription tiers that can access this voice.
       */
      available_for_tiers: string[];
      /**
       * Category
       * @description Category of the voice (e.g., 'cloned', 'generated').
       */
      category: string;
      /**
       * Description
       * @description Description of the voice.
       */
      description: string;
      /**
       * Fine Tuning
       * @description Fine-tuning details and status for the voice.
       */
      fine_tuning: {
          /**
           * Dataset Duration Seconds
           * @description Duration of the dataset used for fine-tuning in seconds.
           * @default null
           */
          dataset_duration_seconds: number | null;
          /**
           * Finetuning Progress
           * @description Progress of the fine-tuning process, often represented as a dictionary of percentages.
           * @default null
           */
          finetuning_progress: {
              [key: string]: number;
          } | null;
          /**
           * Finetuning State
           * @description Current state of the fine-tuning process. Possible states: 'not_started', 'queued', 'fine_tuning', 'fine_tuned', 'failed', 'delayed'.
           * @enum {string}
           */
          finetuning_state: "not_started" | "queued" | "fine_tuning" | "fine_tuned" | "failed" | "delayed";
          /**
           * Is Allowed To Fine Tune
           * @description Indicates if fine-tuning is allowed for this voice.
           */
          is_allowed_to_fine_tune: boolean;
          /**
           * Language
           * @description Language used for fine-tuning, if applicable.
           * @default null
           */
          language: string | null;
          /**
           * ManualVerification
           * @description Details of the manual verification process, if requested.
           * @default null
           */
          manual_verification: {
              /**
               * Extra Text
               * @description Additional text provided for manual verification.
               */
              extra_text: string;
              /**
               * Files
               * @description List of files submitted for manual verification.
               */
              files: {
                  /**
                   * File Id
                   * @description Unique identifier for the file.
                   */
                  file_id: string;
                  /**
                   * File Name
                   * @description Name of the file.
                   */
                  file_name: string;
                  /**
                   * Mime Type
                   * @description MIME type of the file.
                   */
                  mime_type: string;
                  /**
                   * Size Bytes
                   * @description Size of the file in bytes.
                   */
                  size_bytes: number;
                  /**
                   * Upload Date Unix
                   * @description Timestamp (Unix epoch seconds) of when the file was uploaded.
                   */
                  upload_date_unix: number;
              }[];
              /**
               * Request Time Unix
               * @description Timestamp (Unix epoch seconds) of when the manual verification was requested.
               */
              request_time_unix: number;
          } | null;
          /**
           * Manual Verification Requested
           * @description Indicates if manual verification has been requested.
           */
          manual_verification_requested: boolean;
          /**
           * Message
           * @description A message providing additional information about the fine-tuning state.
           * @default null
           */
          message: string | null;
          /**
           * Slice Ids
           * @description List of slice IDs used in fine-tuning, if applicable.
           * @default null
           */
          slice_ids: string[] | null;
          /**
           * Verification Attempts
           * @description List of verification attempts made during fine-tuning.
           * @default null
           */
          verification_attempts: {
              /**
               * Accepted
               * @description Indicates if the verification attempt was accepted.
               */
              accepted: boolean;
              /**
               * Date Unix
               * @description Timestamp (Unix epoch seconds) of the verification attempt.
               */
              date_unix: number;
              /**
               * Levenshtein Distance
               * @description Levenshtein distance calculated for the verification attempt.
               */
              levenshtein_distance: number;
              /**
               * Recording
               * @description Details of the recording used for this verification attempt, if available.
               * @default null
               */
              recording: {
                  /**
                   * Mime Type
                   * @description MIME type of the recording file.
                   */
                  mime_type: string;
                  /**
                   * Recording Id
                   * @description Unique identifier for the recording.
                   */
                  recording_id: string;
                  /**
                   * Size Bytes
                   * @description Size of the recording file in bytes.
                   */
                  size_bytes: number;
                  /**
                   * Transcription
                   * @description Transcription of the recording.
                   */
                  transcription: string;
                  /**
                   * Upload Date Unix
                   * @description Timestamp (Unix epoch seconds) of when the recording was uploaded.
                   */
                  upload_date_unix: number;
              } | null;
              /**
               * Similarity
               * @description Similarity score of the verification attempt.
               */
              similarity: number;
              /**
               * Text
               * @description Text used for the verification attempt.
               */
              text: string;
          }[] | null;
          /**
           * Verification Attempts Count
           * @description Number of verification attempts made.
           */
          verification_attempts_count: number;
          /**
           * Verification Failures
           * @description List of reasons for any verification failures.
           */
          verification_failures: string[];
      };
      /**
       * High Quality Base Model Ids
       * @description List of high-quality base model IDs compatible with this voice.
       */
      high_quality_base_model_ids: string[];
      /**
       * Labels
       * @description Key-value labels associated with the voice.
       */
      labels: {
          [key: string]: string;
      };
      /**
       * Name
       * @description Name of the voice.
       */
      name: string;
      /**
       * Owner Id
       * @description Identifier of the user who owns this voice, if applicable.
       * @default null
       */
      owner_id: string | null;
      /**
       * Permission On Resource
       * @description Permissions the current user has on this voice resource, if applicable.
       * @default null
       */
      permission_on_resource: string | null;
      /**
       * Preview Url
       * @description URL to a preview audio sample of the voice.
       */
      preview_url: string;
      /**
       * SafetyControl
       * @description Safety control settings applied to the voice. Possible values: 'NONE', 'BAN', 'CAPTCHA', 'CAPTCHA_AND_MODERATION'.
       * @default null
       * @enum {string|null}
       */
      safety_control: "NONE" | "BAN" | "CAPTCHA" | "CAPTCHA_AND_MODERATION" | null;
      /**
       * Samples
       * @description List of voice samples associated with this voice.
       */
      samples: {
          /**
           * File Name
           * @description Name of the sample file.
           */
          file_name: string;
          /**
           * Hash
           * @description Hash of the sample file.
           */
          hash: string;
          /**
           * Mime Type
           * @description MIME type of the sample file (e.g., 'audio/mpeg').
           */
          mime_type: string;
          /**
           * Sample Id
           * @description Unique identifier for the voice sample.
           */
          sample_id: string;
          /**
           * Size Bytes
           * @description Size of the sample file in bytes.
           */
          size_bytes: number;
      }[];
      /**
       * Settings
       * @description Settings configured for this voice, such as stability and similarity boost.
       */
      settings: {
          /**
           * Similarity Boost
           * @description Similarity boost setting for the voice (0.0 to 1.0). Higher values make the voice more similar to the original.
           */
          similarity_boost: number;
          /**
           * Stability
           * @description Stability setting for the voice (0.0 to 1.0). Higher values make the voice more stable but might reduce expressiveness.
           */
          stability: number;
          /**
           * Style
           * @description Style exaggeration setting for the voice (0.0 to 1.0). Controls how much the style of the input text is exaggerated.
           * @default 0
           */
          style: number | null;
          /**
           * Use Speaker Boost
           * @description Indicates if speaker boost is enabled, which can enhance clarity and speaker characteristics.
           * @default true
           */
          use_speaker_boost: boolean | null;
      };
      /**
       * Sharing
       * @description Sharing details and status for this voice, if applicable.
       * @default null
       */
      sharing: {
          /**
           * Ban Reason
           * @description Reason for banning the voice from sharing, if applicable.
           */
          ban_reason: string;
          /**
           * Category
           * @description Category of the shared voice. Possible values: 'generated', 'professional', 'high_quality'.
           * @enum {string}
           */
          category: "generated" | "professional" | "high_quality";
          /**
           * Cloned By Count
           * @description Number of times the voice has been cloned.
           */
          cloned_by_count: number;
          /**
           * Date Unix
           * @description Timestamp (Unix epoch seconds) related to the sharing status update.
           */
          date_unix: number;
          /**
           * Description
           * @description Description of the shared voice.
           */
          description: string;
          /**
           * Disable At Unix
           * @description Timestamp (Unix epoch seconds) when sharing will be disabled.
           */
          disable_at_unix: number;
          /**
           * Enabled In Library
           * @description Indicates if the voice is enabled in the voice library.
           */
          enabled_in_library: boolean;
          /**
           * Featured
           * @description Indicates if the voice is featured in the library.
           */
          featured: boolean;
          /**
           * Financial Rewards Enabled
           * @description Indicates if financial rewards are enabled for this shared voice.
           */
          financial_rewards_enabled: boolean;
          /**
           * Free Users Allowed
           * @description Indicates if free users are allowed to use this shared voice.
           */
          free_users_allowed: boolean;
          /**
           * History Item Sample Id
           * @description ID of the history item sample used for sharing.
           */
          history_item_sample_id: string;
          /**
           * Instagram Username
           * @description Associated Instagram username, if any.
           * @default null
           */
          instagram_username: string | null;
          /**
           * Labels
           * @description Labels associated with the shared voice.
           */
          labels: {
              [key: string]: string;
          };
          /**
           * Liked By Count
           * @description Number of times the voice has been liked.
           */
          liked_by_count: number;
          /**
           * Live Moderation Enabled
           * @description Indicates if live moderation is enabled for this shared voice.
           */
          live_moderation_enabled: boolean;
          /**
           * Name
           * @description Name of the shared voice.
           */
          name: string;
          /**
           * Notice Period
           * @description Notice period in days for changes to sharing status.
           */
          notice_period: number;
          /**
           * Original Voice Id
           * @description Identifier of the original voice if this is a copy.
           */
          original_voice_id: string;
          /**
           * Public Owner Id
           * @description Public identifier of the voice owner.
           */
          public_owner_id: string;
          /**
           * Rate
           * @description Rate associated with the shared voice, if applicable.
           */
          rate: number;
          /**
           * Reader App Enabled
           * @description Indicates if the voice is enabled for use in the reader app.
           */
          reader_app_enabled: boolean;
          /**
           * Review Message
           * @description Message from the review process.
           */
          review_message: string;
          /**
           * Review Status
           * @description Review status of the shared voice. Possible values: 'not_requested', 'pending', 'declined', 'allowed', 'allowed_with_changes'.
           * @enum {string}
           */
          review_status: "not_requested" | "pending" | "declined" | "allowed" | "allowed_with_changes";
          /**
           * Status
           * @description Sharing status of the voice. Possible values: 'enabled', 'disabled', 'copied', 'copied_disabled'.
           * @enum {string}
           */
          status: "enabled" | "disabled" | "copied" | "copied_disabled";
          /**
           * Tiktok Username
           * @description Associated TikTok username, if any.
           * @default null
           */
          tiktok_username: string | null;
          /**
           * Twitter Username
           * @description Associated Twitter username, if any.
           * @default null
           */
          twitter_username: string | null;
          /**
           * Voice Mixing Allowed
           * @description Indicates if voice mixing is allowed for this shared voice.
           */
          voice_mixing_allowed: boolean;
          /**
           * Whitelisted Emails
           * @description List of email addresses whitelisted for sharing.
           */
          whitelisted_emails: string[];
          /**
           * Youtube Username
           * @description Associated YouTube username, if any.
           * @default null
           */
          youtube_username: string | null;
      } | null;
      /**
       * Voice Id
       * @description Unique identifier of the created voice.
       */
      voice_id: string;
      /**
       * VoiceVerification
       * @description Voice verification status and details.
       * @default null
       */
      voice_verification: {
          /**
           * Is Verified
           * @description Indicates if the voice has been successfully verified.
           */
          is_verified: boolean;
          /**
           * Language
           * @description Language of the voice verification, if specified.
           * @default null
           */
          language: string | null;
          /**
           * Requires Verification
           * @description Indicates if the voice requires verification.
           */
          requires_verification: boolean;
          /**
           * Verification Attempts
           * @description List of individual verification attempts.
           * @default null
           */
          verification_attempts: {
              /**
               * Accepted
               * @description Indicates if this verification attempt was accepted.
               */
              accepted: boolean;
              /**
               * Date Unix
               * @description Timestamp (Unix epoch seconds) of this verification attempt.
               */
              date_unix: number;
              /**
               * Levenshtein Distance
               * @description Levenshtein distance for this verification attempt.
               */
              levenshtein_distance: number;
              /**
               * Recording
               * @description Recording details for this verification attempt, if applicable.
               * @default null
               */
              recording: {
                  /**
                   * Mime Type
                   * @description MIME type of the recording file.
                   */
                  mime_type: string;
                  /**
                   * Recording Id
                   * @description Unique identifier for the recording.
                   */
                  recording_id: string;
                  /**
                   * Size Bytes
                   * @description Size of the recording file in bytes.
                   */
                  size_bytes: number;
                  /**
                   * Transcription
                   * @description Transcription of the recording.
                   */
                  transcription: string;
                  /**
                   * Upload Date Unix
                   * @description Timestamp (Unix epoch seconds) of when the recording was uploaded.
                   */
                  upload_date_unix: number;
              } | null;
              /**
               * Similarity
               * @description Similarity score of this verification attempt.
               */
              similarity: number;
              /**
               * Text
               * @description Text used for this specific verification attempt.
               */
              text: string;
          }[] | null;
          /**
           * Verification Attempts Count
           * @description Total number of verification attempts made for the voice.
           */
          verification_attempts_count: number;
          /**
           * Verification Failures
           * @description List of reasons for any verification failures.
           */
          verification_failures: string[];
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
 * Type of ELEVENLABS's ELEVENLABS_DELETE_CHAPTER tool input.
 */
type ELEVENLABS_DELETE_CHAPTER_INPUT = {
  /**
   * Chapter Id
   * @description Identifier of the chapter to be deleted. To find available `chapter_id`s for a project, you can query GET `https://api.elevenlabs.io/v1/projects/{project_id}/chapters`.
   */
  chapter_id?: string;
  /**
   * Project Id
   * @description Identifier of the project. To find available `project_id`s, you can query GET `https://api.elevenlabs.io/v1/projects`.
   */
  project_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_DELETE_CHAPTER tool output.
 */
type ELEVENLABS_DELETE_CHAPTER_OUTPUT = {
  /**
   * Data
   * @description Indicates success, typically an empty response or a success status message.
   */
  data?: unknown;
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
 * Type of ELEVENLABS's ELEVENLABS_DELETE_DUBBING_PROJECT tool input.
 */
type ELEVENLABS_DELETE_DUBBING_PROJECT_INPUT = {
  /**
   * Dubbing Id
   * @description The unique identifier for the dubbing project to be deleted. This ID is typically obtained when the dubbing project is created or listed.
   */
  dubbing_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_DELETE_DUBBING_PROJECT tool output.
 */
type ELEVENLABS_DELETE_DUBBING_PROJECT_OUTPUT = {
  /**
   * Data
   * @description The response from the API, typically an empty object or a status message indicating the successful deletion of the dubbing project. An empty object or a specific status (e.g., {'status': 'ok'}) confirms deletion.
   */
  data?: unknown;
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
 * Type of ELEVENLABS's ELEVENLABS_DELETE_HISTORY_ITEM tool input.
 */
type ELEVENLABS_DELETE_HISTORY_ITEM_INPUT = {
  /**
   * History Item Id
   * @description Unique identifier of the history item to be deleted. This ID is obtainable by listing history items, for example, via the GET `/v1/history` endpoint.
   */
  history_item_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_DELETE_HISTORY_ITEM tool output.
 */
type ELEVENLABS_DELETE_HISTORY_ITEM_OUTPUT = {
  /**
   * Data
   * @description The body of the API response. For a successful deletion, this usually contains a status message (e.g., 'ok') or may be an empty response.
   */
  data?: unknown;
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
 * Type of ELEVENLABS's ELEVENLABS_DELETE_PROJECT tool input.
 */
type ELEVENLABS_DELETE_PROJECT_INPUT = {
  /**
   * Project Id
   * @description Identifier of the project to delete. Obtain by listing projects (e.g., via GET /v1/projects).
   */
  project_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_DELETE_PROJECT tool output.
 */
type ELEVENLABS_DELETE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Confirms deletion; typically an empty response or status message, as no project data is returned post-deletion.
   */
  data?: unknown;
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
 * Type of ELEVENLABS's ELEVENLABS_DELETE_SAMPLE tool input.
 */
type ELEVENLABS_DELETE_SAMPLE_INPUT = {
  /**
   * Sample Id
   * @description Sample ID to be used, you can use GET https://api.elevenlabs.io/v1/voices/{voice_id} to list all the available samples for a voice.
   */
  sample_id?: string;
  /**
   * Voice Id
   * @description Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
   */
  voice_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_DELETE_SAMPLE tool output.
 */
type ELEVENLABS_DELETE_SAMPLE_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: unknown;
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
 * Type of ELEVENLABS's ELEVENLABS_DELETE_VOICE tool input.
 */
type ELEVENLABS_DELETE_VOICE_INPUT = {
  /**
   * Voice Id
   * @description The unique identifier of the voice to be deleted.
   */
  voice_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_DELETE_VOICE tool output.
 */
type ELEVENLABS_DELETE_VOICE_OUTPUT = {
  /**
   * Data
   * @description A confirmation object indicating the status of the deletion. Expect `{'status': 'ok'}` on success.
   */
  data?: unknown;
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
 * Type of ELEVENLABS's ELEVENLABS_DOWNLOAD_HISTORY_ITEMS tool input.
 */
type ELEVENLABS_DOWNLOAD_HISTORY_ITEMS_INPUT = {
  /**
   * History Item Ids
   * @description A list of unique string identifiers for the history items to be downloaded. These IDs can be obtained using the `GET /v1/history` endpoint.
   */
  history_item_ids?: string[];
  /**
   * Output Format
   * @description Optional. Specifies the desired output audio format. Accepts 'wav' to convert the audio to WAV format. If omitted, 'default', or an unsupported value is provided, the audio is returned in its original synthesized format (e.g., mp3). This formatting applies to each audio file, even when multiple files are downloaded and returned as a ZIP archive.
   */
  output_format?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_DOWNLOAD_HISTORY_ITEMS tool output.
 */
type ELEVENLABS_DOWNLOAD_HISTORY_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Contains the binary data of the downloaded audio. This will be a single audio file if one history item ID was provided, or a ZIP archive if multiple IDs were provided.
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
 * Type of ELEVENLABS's ELEVENLABS_DUB_A_VIDEO_OR_AN_AUDIOFILE_V_1_DUBBING_POST tool input.
 */
type ELEVENLABS_DUB_A_VIDEO_OR_AN_AUDIOFILE_V_1_DUBBING_POST_INPUT = {
  /**
   * Background Audio File
   * Format: binary
   * @description Background audio track for 'manual' mode with a CSV file.
   */
  background_audio_file?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
  /**
   * Csv File
   * Format: binary
   * @description CSV file with guidance for 'manual' mode dubbing. Required if 'mode' is 'manual'.
   */
  csv_file?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
  /**
   * Dubbing Studio
   * @description Enable Dubbing Studio features for advanced editing capabilities, if available.
   * @default false
   */
  dubbing_studio: boolean;
  /**
   * End Time
   * @description End time (seconds) for the audio portion to dub. API defaults to audio end if unspecified.
   */
  end_time?: number;
  /**
   * File
   * Format: binary
   * @description Video or audio file to dub. Required if 'source_url' is not provided.
   */
  file?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
  /**
   * Foreground Audio File
   * Format: binary
   * @description Foreground audio track for 'manual' mode with a CSV file.
   */
  foreground_audio_file?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
  /**
   * Highest Resolution
   * @description Process dubbing at highest possible resolution; may increase processing time.
   * @default false
   */
  highest_resolution: boolean;
  /**
   * Mode
   * @description Specifies dubbing mode: 'automatic' for AI-driven dubbing, or 'manual' using a .csv file for timestamped transcriptions. API defaults to 'automatic' if unspecified.
   */
  mode?: string;
  /**
   * Name
   * @description Name for the dubbing project.
   */
  name?: string;
  /**
   * Num Speakers
   * @description Number of speakers in the audio. Use 0 for automatic detection; otherwise, model attempts to differentiate this many speakers.
   * @default 0
   */
  num_speakers: number;
  /**
   * Source Lang
   * @description Language of the original audio. Use 'auto' for automatic detection or provide a language code (e.g., 'en', 'es').
   * @default auto
   */
  source_lang: string;
  /**
   * Source Url
   * @description URL of the video or audio file to dub. Required if 'file' is not provided.
   */
  source_url?: string;
  /**
   * Start Time
   * @description Start time (seconds) for the audio portion to dub. API defaults to audio start if unspecified.
   */
  start_time?: number;
  /**
   * Target Lang
   * @description Required target language code for dubbing (e.g., 'en', 'es').
   */
  target_lang?: string;
  /**
   * Watermark
   * @description Include a watermark in the dubbed audio.
   * @default false
   */
  watermark: boolean;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_DUB_A_VIDEO_OR_AN_AUDIOFILE_V_1_DUBBING_POST tool output.
 */
type ELEVENLABS_DUB_A_VIDEO_OR_AN_AUDIOFILE_V_1_DUBBING_POST_OUTPUT = {
  /**
   * Data
   * @description Response data including dubbing ID and expected duration.
   */
  data?: {
      /**
       * Dubbing Id
       * @description Unique identifier for the dubbing project.
       */
      dubbing_id: string;
      /**
       * Expected Duration Sec
       * @description Expected duration of the dubbed audio in seconds.
       */
      expected_duration_sec: number;
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
 * Type of ELEVENLABS's ELEVENLABS_DUB_A_VIDEO_OR_AN_AUDIO_FILE tool input.
 */
type ELEVENLABS_DUB_A_VIDEO_OR_AN_AUDIO_FILE_INPUT = {
  /**
   * Background Audio File
   * Format: binary
   * @description Background audio track for 'manual' mode with a CSV file.
   */
  background_audio_file?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
  /**
   * Csv File
   * Format: binary
   * @description CSV file with guidance for 'manual' mode dubbing. Required if 'mode' is 'manual'.
   */
  csv_file?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
  /**
   * Dubbing Studio
   * @description Enable Dubbing Studio features for advanced editing capabilities, if available.
   * @default false
   */
  dubbing_studio: boolean;
  /**
   * End Time
   * @description End time (seconds) for the audio portion to dub. API defaults to audio end if unspecified.
   */
  end_time?: number;
  /**
   * File
   * Format: binary
   * @description Video or audio file to dub. Required if 'source_url' is not provided.
   */
  file?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
  /**
   * Foreground Audio File
   * Format: binary
   * @description Foreground audio track for 'manual' mode with a CSV file.
   */
  foreground_audio_file?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
  /**
   * Highest Resolution
   * @description Process dubbing at highest possible resolution; may increase processing time.
   * @default false
   */
  highest_resolution: boolean;
  /**
   * Mode
   * @description Specifies dubbing mode: 'automatic' for AI-driven dubbing, or 'manual' using a .csv file for timestamped transcriptions. API defaults to 'automatic' if unspecified.
   */
  mode?: string;
  /**
   * Name
   * @description Name for the dubbing project.
   */
  name?: string;
  /**
   * Num Speakers
   * @description Number of speakers in the audio. Use 0 for automatic detection; otherwise, model attempts to differentiate this many speakers.
   * @default 0
   */
  num_speakers: number;
  /**
   * Source Lang
   * @description Language of the original audio. Use 'auto' for automatic detection or provide a language code (e.g., 'en', 'es').
   * @default auto
   */
  source_lang: string;
  /**
   * Source Url
   * @description URL of the video or audio file to dub. Required if 'file' is not provided.
   */
  source_url?: string;
  /**
   * Start Time
   * @description Start time (seconds) for the audio portion to dub. API defaults to audio start if unspecified.
   */
  start_time?: number;
  /**
   * Target Lang
   * @description Required target language code for dubbing (e.g., 'en', 'es').
   */
  target_lang?: string;
  /**
   * Watermark
   * @description Include a watermark in the dubbed audio.
   * @default false
   */
  watermark: boolean;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_DUB_A_VIDEO_OR_AN_AUDIO_FILE tool output.
 */
type ELEVENLABS_DUB_A_VIDEO_OR_AN_AUDIO_FILE_OUTPUT = {
  /**
   * Data
   * @description Response data including dubbing ID and expected duration.
   */
  data?: {
      /**
       * Dubbing Id
       * @description Unique identifier for the dubbing project.
       */
      dubbing_id: string;
      /**
       * Expected Duration Sec
       * @description Expected duration of the dubbed audio in seconds.
       */
      expected_duration_sec: number;
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
 * Type of ELEVENLABS's ELEVENLABS_EDIT_VOICE tool input.
 */
type ELEVENLABS_EDIT_VOICE_INPUT = {
  /**
   * Description
   * @description New description for the voice model.
   */
  description?: string;
  /**
   * Files
   * @description File paths or URLs of new audio samples to train or refine the voice model.
   */
  files?: string[];
  /**
   * Labels
   * @description JSON string of key-value pairs for categorization; new labels overwrite existing ones.
   */
  labels?: string;
  /**
   * Name
   * @description New name for the voice model.
   */
  name?: string;
  /**
   * Voice Id
   * @description Identifier of the voice to be edited; retrieve available IDs via the `/v1/voices` endpoint.
   */
  voice_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_EDIT_VOICE tool output.
 */
type ELEVENLABS_EDIT_VOICE_OUTPUT = {
  /**
   * Data
   * @description API response, typically confirming success and may include updated voice details or a status message.
   */
  data?: unknown;
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
 * Type of ELEVENLABS's ELEVENLABS_EDIT_VOICE_SETTINGS tool input.
 */
type ELEVENLABS_EDIT_VOICE_SETTINGS_INPUT = {
  /**
   * Voice Id
   * @description Identifier of the voice whose settings are to be modified. Obtain available voice IDs via the GET /v1/voices endpoint.
   */
  voice_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_EDIT_VOICE_SETTINGS tool output.
 */
type ELEVENLABS_EDIT_VOICE_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Confirmation of the settings update. A successful request returns an HTTP 200 status, typically with an empty response body.
   */
  data?: unknown;
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
 * Type of ELEVENLABS's ELEVENLABS_ELEVENLABS_TEXT_TO_SPEECH tool input.
 */
type ELEVENLABS_ELEVENLABS_TEXT_TO_SPEECH_INPUT = {
  /**
   * Model Id
   * @description Identifier of the model for synthesis. List available models via `/v1/models`; ensure chosen model's `can_do_text_to_speech` is true.
   * @default eleven_monolingual_v1
   */
  model_id: string;
  /**
   * Optimize Streaming Latency
   * @description Controls latency optimizations for streaming. Higher values reduce latency, potentially affecting quality.
   *     0: No optimizations.
   *     1: Normal (approx. 50% of max improvement vs option 3).
   *     2: Strong (approx. 75% of max improvement vs option 3).
   *     3: Maximum.
   *     4: Maximum with text normalizer disabled (affects number/date pronunciation, best latency).
   * @default 0
   */
  optimize_streaming_latency: number;
  /**
   * Output Format
   * @description Output audio format. Supported formats include:
   *     - `mp3_22050_32`: 22.05kHz, 32kbps MP3.
   *     - `mp3_44100_32`: 44.1kHz, 32kbps MP3.
   *     - `mp3_44100_64`: 44.1kHz, 64kbps MP3.
   *     - `mp3_44100_96`: 44.1kHz, 96kbps MP3.
   *     - `mp3_44100_128`: 44.1kHz, 128kbps MP3.
   *     - `mp3_44100_192`: 44.1kHz, 192kbps MP3 (Creator tier+).
   *     - `pcm_16000`: 16kHz PCM (S16LE).
   *     - `pcm_22050`: 22.05kHz PCM (S16LE).
   *     - `pcm_24000`: 24kHz PCM (S16LE).
   *     - `pcm_44100`: 44.1kHz PCM (S16LE) (Pro tier+).
   *     - `ulaw_8000`: 8kHz μ-law (for Twilio audio inputs).
   * @default mp3_44100_128
   */
  output_format: string;
  /**
   * Pronunciation Dictionary Locators
   * @description List of up to 3 pronunciation dictionary locators, applied sequentially. Each dictionary must contain `pronunciation_dictionary_id` and `version_id`.
   * @default []
   */
  pronunciation_dictionary_locators: {
      [key: string]: unknown;
  }[];
  /**
   * Seed
   * @description Integer seed for potentially deterministic audio generation. Repeatability with the same seed and parameters is aimed for but not guaranteed.
   * @default null
   */
  seed: number | null;
  /**
   * Text
   * @description Input text for speech conversion. Max 20,000 characters; texts under 2,500 characters recommended for optimal performance.
   */
  text?: string;
  /**
   * Voice Id
   * @description Identifier of the voice for speech generation. Obtainable from the `/v1/voices` endpoint.
   */
  voice_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_ELEVENLABS_TEXT_TO_SPEECH tool output.
 */
type ELEVENLABS_ELEVENLABS_TEXT_TO_SPEECH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File
       * @description Generated downloadable audio file.
       */
      file: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description URL of the file.
           */
          s3url: string;
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
 * Type of ELEVENLABS's ELEVENLABS_ELEVENLABS_TEXT_TO_SPEECH_STREAM tool input.
 */
type ELEVENLABS_ELEVENLABS_TEXT_TO_SPEECH_STREAM_INPUT = {
  /**
   * Model Id
   * @description Identifier of the model to be used for text-to-speech conversion. Available models can be listed using the `GET /v1/models` endpoint. Ensure the chosen model supports text-to-speech by verifying its `can_do_text_to_speech` property.
   * @default eleven_monolingual_v1
   */
  model_id: string;
  /**
   * Optimize Streaming Latency
   * @description Controls latency optimization for the streaming audio. Higher values prioritize lower latency, potentially at the cost of audio quality. Possible values:
   *     - 0: Default mode (no latency optimizations).
   *     - 1: Normal latency optimizations (reduces latency by approximately 50% of option 3's improvement).
   *     - 2: Strong latency optimizations (reduces latency by approximately 75% of option 3's improvement).
   *     - 3: Maximum latency optimizations.
   *     - 4: Maximum latency optimizations with text normalizer disabled (offers the lowest latency but may lead to mispronunciations of numbers, dates, etc.).
   * @default 0
   */
  optimize_streaming_latency: number;
  /**
   * Output Format
   * @description Specifies the desired output format for the generated audio stream.
   *     Supported MP3 formats:
   *     - mp3_22050_32: MP3, 22.05kHz, 32kbps.
   *     - mp3_44100_32: MP3, 44.1kHz, 32kbps.
   *     - mp3_44100_64: MP3, 44.1kHz, 64kbps.
   *     - mp3_44100_96: MP3, 44.1kHz, 96kbps.
   *     - mp3_44100_128: MP3, 44.1kHz, 128kbps.
   *     - mp3_44100_192: MP3, 44.1kHz, 192kbps (Creator tier or above required).
   *     Supported PCM formats (S16LE):
   *     - pcm_16000: PCM, 16kHz.
   *     - pcm_22050: PCM, 22.05kHz.
   *     - pcm_24000: PCM, 24kHz.
   *     - pcm_44100: PCM, 44.1kHz (Pro tier or above required).
   *     Supported μ-law format:
   *     - ulaw_8000: μ-law, 8kHz (commonly used for Twilio audio inputs).
   * @default mp3_44100_128
   */
  output_format: string;
  /**
   * Pronunciation Dictionary Locators
   * @description A list of pronunciation dictionary locators to be applied to the text. Each locator should be a dictionary containing 'pronunciation_dictionary_id' (string) and 'version_id' (string). Dictionaries are applied in the provided order. A maximum of 3 locators can be used per request.
   * @default []
   */
  pronunciation_dictionary_locators: {
      [key: string]: unknown;
  }[];
  /**
   * Seed
   * @description If specified, the system will attempt to sample deterministically, meaning that repeated requests with the same seed and parameters should ideally return the same audio result. However, complete determinism is not guaranteed.
   * @default null
   */
  seed: number | null;
  /**
   * Text
   * @description The text that will be converted into speech. It is recommended to keep the text length under 5000 characters, as longer texts might face limitations.
   */
  text?: string;
  /**
   * Voice Id
   * @description Identifier of the voice to be used for speech generation. A list of available voice IDs can be retrieved from the `GET /v1/voices` endpoint.
   */
  voice_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_ELEVENLABS_TEXT_TO_SPEECH_STREAM tool output.
 */
type ELEVENLABS_ELEVENLABS_TEXT_TO_SPEECH_STREAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File
       * @description The generated audio stream as a downloadable file.
       */
      file: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description URL of the file.
           */
          s3url: string;
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
 * Type of ELEVENLABS's ELEVENLABS_GENERATE_A_RANDOM_VOICE tool input.
 */
type ELEVENLABS_GENERATE_A_RANDOM_VOICE_INPUT = {
  /**
   * Accent
   * @description Specifies the accent of the generated voice. Accepted values include 'american', 'british', 'african', 'australian', 'indian'.
   */
  accent?: string;
  /**
   * Accent Strength
   * @description Controls the strength of the accent for the generated voice. Must be a numeric value between 0.3 and 2.0, inclusive.
   */
  accent_strength?: number;
  /**
   * Age
   * @description Specifies the age category of the generated voice. Possible values are 'young', 'middle_aged', or 'old'.
   * @enum {string}
   */
  age?: "middle_aged" | "old" | "young";
  /**
   * Gender
   * @description Specifies the gender of the generated voice. Possible values are 'female' or 'male'.
   * @enum {string}
   */
  gender?: "female" | "male";
  /**
   * Text
   * @description The text to be synthesized into speech. The length of the text must be between 100 and 1000 characters, inclusive.
   */
  text?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_GENERATE_A_RANDOM_VOICE tool output.
 */
type ELEVENLABS_GENERATE_A_RANDOM_VOICE_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the response from the voice generation API. This may include the generated audio (e.g., Base64 encoded within the dictionary), links to audio, or metadata. The exact structure depends on the API's specific output for this endpoint.
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
 * Type of ELEVENLABS's ELEVENLABS_GET_AUDIO_FROM_HISTORY_ITEM tool input.
 */
type ELEVENLABS_GET_AUDIO_FROM_HISTORY_ITEM_INPUT = {
  /**
   * History Item Id
   * @description The unique identifier for the history item. This ID can be obtained by listing your history items (e.g., via an action that calls GET /v1/history).
   */
  history_item_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_GET_AUDIO_FROM_HISTORY_ITEM tool output.
 */
type ELEVENLABS_GET_AUDIO_FROM_HISTORY_ITEM_OUTPUT = {
  /**
   * Data
   * @description API response payload. For successful audio retrieval (HTTP 200), the primary content is the raw audio data (typically in MPEG format). This dictionary may be populated with error details or metadata if the response is not the direct audio stream.
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
 * Type of ELEVENLABS's ELEVENLABS_GET_AUDIO_FROM_SAMPLE tool input.
 */
type ELEVENLABS_GET_AUDIO_FROM_SAMPLE_INPUT = {
  /**
   * Sample Id
   * @description Identifier for the sample. A list of available sample IDs for a specific voice can be obtained from the GET https://api.elevenlabs.io/v1/voices/{voice_id} endpoint.
   */
  sample_id?: string;
  /**
   * Voice Id
   * @description Identifier for the voice. A list of available voice IDs can be obtained from the GET https://api.elevenlabs.io/v1/voices endpoint.
   */
  voice_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_GET_AUDIO_FROM_SAMPLE tool output.
 */
type ELEVENLABS_GET_AUDIO_FROM_SAMPLE_OUTPUT = {
  /**
   * Data
   * @description The API response payload. For this endpoint, the primary content is audio. This dictionary may contain metadata or an encoded version of the audio, depending on the server's response packaging.
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
 * Type of ELEVENLABS's ELEVENLABS_GET_A_PROFILE_PAGE tool input.
 */
type ELEVENLABS_GET_A_PROFILE_PAGE_INPUT = {
  /**
   * Handle
   * @description The unique handle (username) of the ElevenLabs user whose public profile is to be retrieved.
   */
  handle?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_GET_A_PROFILE_PAGE tool output.
 */
type ELEVENLABS_GET_A_PROFILE_PAGE_OUTPUT = {
  /**
   * Data
   * @description Object containing the public profile details of the user.
   */
  data?: {
      /**
       * Bio
       * @description The biography or profile description provided by the user.
       */
      bio: string;
      /**
       * Handle
       * @description The user's unique handle or username.
       */
      handle: string;
      /**
       * Name
       * @description The display name of the user.
       */
      name: string;
      /**
       * Profile Picture
       * @description The URL of the user's profile picture.
       */
      profile_picture: string;
      /**
       * Public User Id
       * @description The public unique identifier for the user.
       */
      public_user_id: string;
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
 * Type of ELEVENLABS's ELEVENLABS_GET_CHAPTERS tool input.
 */
type ELEVENLABS_GET_CHAPTERS_INPUT = {
  /**
   * Project Id
   * @description Identifier of the project for which to retrieve chapters. You can find available `project_id`s by listing all projects (e.g., via GET https://api.elevenlabs.io/v1/projects).
   */
  project_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_GET_CHAPTERS tool output.
 */
type ELEVENLABS_GET_CHAPTERS_OUTPUT = {
  /**
   * Data
   * @description The main response payload containing the list of chapters for the project.
   */
  data?: {
      /**
       * Chapters
       * @description List of chapter details for the specified project.
       */
      chapters: {
          /**
           * Can Be Downloaded
           * @description Indicates if the chapter's converted audio is ready for download.
           */
          can_be_downloaded: boolean;
          /**
           * Chapter Id
           * @description Unique identifier for the chapter.
           */
          chapter_id: string;
          /**
           * Conversion Progress
           * @description Audio conversion progress, ranging from 0.0 (not started) to 1.0 (completed).
           */
          conversion_progress: number;
          /**
           * Last Conversion Date Unix
           * @description Timestamp, in Unix epoch seconds, of when the chapter was last converted or its content updated.
           */
          last_conversion_date_unix: number;
          /**
           * Name
           * @description The name assigned to the chapter.
           */
          name: string;
          /**
           * State
           * @description Current processing state of the chapter; e.g., 'default' or 'converting'.
           * @enum {string}
           */
          state: "default" | "converting";
          /**
           * Statistics
           * @description Detailed conversion statistics for this chapter.
           */
          statistics: {
              /**
               * Characters Converted
               * @description Total characters in this chapter successfully converted to speech.
               */
              characters_converted: number;
              /**
               * Characters Unconverted
               * @description Total characters in this chapter awaiting speech conversion.
               */
              characters_unconverted: number;
              /**
               * Paragraphs Converted
               * @description Total paragraphs in this chapter successfully converted to speech.
               */
              paragraphs_converted: number;
              /**
               * Paragraphs Unconverted
               * @description Total paragraphs in this chapter awaiting speech conversion.
               */
              paragraphs_unconverted: number;
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
 * Type of ELEVENLABS's ELEVENLABS_GET_CHAPTER_BY_ID tool input.
 */
type ELEVENLABS_GET_CHAPTER_BY_ID_INPUT = {
  /**
   * Chapter Id
   * @description Identifier of the chapter. You can find `chapter_id` by listing all available chapters for a project via the `/v1/projects/{project_id}/chapters` endpoint.
   */
  chapter_id?: string;
  /**
   * Project Id
   * @description Identifier of the project. You can find `project_id` by listing all available projects via the `/v1/projects` endpoint.
   */
  project_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_GET_CHAPTER_BY_ID tool output.
 */
type ELEVENLABS_GET_CHAPTER_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Contains the detailed information for the retrieved chapter, including its metadata, conversion status, and statistics.
   */
  data?: {
      /**
       * Can Be Downloaded
       * @description A boolean indicating if the converted audio for this chapter is available for download.
       */
      can_be_downloaded: boolean;
      /**
       * Chapter Id
       * @description The unique identifier for the chapter.
       */
      chapter_id: string;
      /**
       * Conversion Progress
       * @description A float representing the progress of the chapter's audio conversion, typically ranging from 0.0 (not started) to 1.0 (completed).
       */
      conversion_progress: number;
      /**
       * Last Conversion Date Unix
       * @description Timestamp (Unix epoch seconds) of when the chapter was last converted to speech.
       */
      last_conversion_date_unix: number;
      /**
       * Name
       * @description The name assigned to the chapter.
       */
      name: string;
      /**
       * State
       * @description The current processing state of the chapter. Possible values are 'default' (conversion not started or completed) and 'converting'.
       * @enum {string}
       */
      state: "default" | "converting";
      /**
       * Statistics
       * @description Detailed statistics about the chapter's content conversion, including counts of converted and unconverted characters and paragraphs.
       */
      statistics: {
          /**
           * Characters Converted
           * @description The number of characters in the chapter that have already been converted to speech.
           */
          characters_converted: number;
          /**
           * Characters Unconverted
           * @description The number of characters in the chapter that are yet to be converted to speech.
           */
          characters_unconverted: number;
          /**
           * Paragraphs Converted
           * @description The number of paragraphs in the chapter that have already been converted to speech.
           */
          paragraphs_converted: number;
          /**
           * Paragraphs Unconverted
           * @description The number of paragraphs in the chapter that are yet to be converted to speech.
           */
          paragraphs_unconverted: number;
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
 * Type of ELEVENLABS's ELEVENLABS_GET_CHAPTER_SNAPSHOTS tool input.
 */
type ELEVENLABS_GET_CHAPTER_SNAPSHOTS_INPUT = {
  /**
   * Chapter Id
   * @description Identifier of the chapter for which snapshots are to be retrieved.
   */
  chapter_id?: string;
  /**
   * Project Id
   * @description Identifier of the project containing the chapter.
   */
  project_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_GET_CHAPTER_SNAPSHOTS tool output.
 */
type ELEVENLABS_GET_CHAPTER_SNAPSHOTS_OUTPUT = {
  /**
   * Data
   * @description The main data object in the response, containing the list of chapter snapshots.
   */
  data?: {
      /**
       * Snapshots
       * @description A list of snapshot objects, each representing a distinct saved version of the chapter.
       */
      snapshots: {
          /**
           * Chapter Id
           * @description Identifier of the chapter to which this chapter snapshot belongs.
           */
          chapter_id: string;
          /**
           * Chapter Snapshot Id
           * @description Unique identifier for this specific chapter snapshot.
           */
          chapter_snapshot_id: string;
          /**
           * Created At Unix
           * @description Timestamp indicating when the chapter snapshot was created, in Unix epoch seconds.
           */
          created_at_unix: number;
          /**
           * Name
           * @description Name assigned to this chapter snapshot.
           */
          name: string;
          /**
           * Project Id
           * @description Identifier of the project to which this chapter snapshot belongs.
           */
          project_id: string;
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
 * Type of ELEVENLABS's ELEVENLABS_GET_DEFAULT_VOICE_SETTINGS tool input.
 */
type ELEVENLABS_GET_DEFAULT_VOICE_SETTINGS_INPUT = object;

/**
 * Type of ELEVENLABS's ELEVENLABS_GET_DEFAULT_VOICE_SETTINGS tool output.
 */
type ELEVENLABS_GET_DEFAULT_VOICE_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Default voice settings configuration.
   */
  data?: {
      /**
       * Similarity Boost
       * @description Resemblance to original voice, especially for cloned voices. Higher values boost similarity/clarity but risk artifacts with low-quality audio. Recommended: 0.0-1.0.
       */
      similarity_boost: number;
      /**
       * Stability
       * @description Sets voice stability. Lower values (e.g., 0.0) increase randomness/expression, higher values (e.g., 1.0) increase consistency/monotony. Recommended: 0.0-1.0.
       */
      stability: number;
      /**
       * Style
       * @description Exaggeration of the voice's speaking style. Higher values enhance expressiveness. Range: 0.0-1.0 (0 for no exaggeration). Available for select voice models only.
       * @default 0
       */
      style: number | null;
      /**
       * Use Speaker Boost
       * @description Apply speaker boost to enhance voice clarity/quality (especially for cloned voices) or optimize streaming latency.
       * @default true
       */
      use_speaker_boost: boolean | null;
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
 * Type of ELEVENLABS's ELEVENLABS_GET_DUBBED_FILE tool input.
 */
type ELEVENLABS_GET_DUBBED_FILE_INPUT = {
  /**
   * Dubbing Id
   * @description The unique identifier for the dubbing project from which to retrieve the audio.
   */
  dubbing_id?: string;
  /**
   * Language Code
   * @description The language code specifying the desired language of the dubbed audio file (e.g., 'en', 'es', 'de-DE').
   */
  language_code?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_GET_DUBBED_FILE tool output.
 */
type ELEVENLABS_GET_DUBBED_FILE_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing data returned by the API. If the audio file is streamed directly upon success, this field may be empty or provide supplementary metadata. In case of an error, it will contain error details.
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
 * Type of ELEVENLABS's ELEVENLABS_GET_DUBBING_PROJECT_METADATA tool input.
 */
type ELEVENLABS_GET_DUBBING_PROJECT_METADATA_INPUT = {
  /**
   * Dubbing Id
   * @description The unique identifier of the dubbing project whose metadata is to be retrieved.
   */
  dubbing_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_GET_DUBBING_PROJECT_METADATA tool output.
 */
type ELEVENLABS_GET_DUBBING_PROJECT_METADATA_OUTPUT = {
  /**
   * Data
   * @description Contains the detailed metadata of the specified dubbing project.
   */
  data?: {
      /**
       * Dubbing Id
       * @description The unique identifier of the dubbing project.
       */
      dubbing_id: string;
      /**
       * Error
       * @description Details of any error that occurred during the dubbing process. This field is present only if an error was encountered.
       * @default null
       */
      error: string | null;
      /**
       * Name
       * @description The name assigned to the dubbing project.
       */
      name: string;
      /**
       * Status
       * @description The current status of the dubbing project (e.g., 'dubbing', 'dubbed', 'pending', 'failed').
       */
      status: string;
      /**
       * Target Languages
       * @description A list of language codes targeted for dubbing in this project.
       */
      target_languages: string[];
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
 * Type of ELEVENLABS's ELEVENLABS_GET_GENERATED_ITEMS tool input.
 */
type ELEVENLABS_GET_GENERATED_ITEMS_INPUT = {
  /**
   * Page Size
   * @description Specifies the maximum number of history items to return per page. The value must be between 1 and 1000, inclusive.
   * @default 100
   */
  page_size: number;
  /**
   * Start After History Item Id
   * @description The ID of the history item to start fetching results after, for pagination. If not provided, items are fetched from the most recent, ordered by creation date in descending order.
   */
  start_after_history_item_id?: string;
  /**
   * Voice Id
   * @description Filters the history items to only include those generated with the specified voice ID. You can obtain voice IDs by listing available voices (e.g., using an action to get voices from `https://api.elevenlabs.io/v1/voices`).
   */
  voice_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_GET_GENERATED_ITEMS tool output.
 */
type ELEVENLABS_GET_GENERATED_ITEMS_OUTPUT = {
  /**
   * Data
   * @description The structured response containing the list of history items and pagination details.
   */
  data?: {
      /**
       * Has More
       * @description A boolean indicating whether there are more history items available beyond the current list. `true` if more items can be fetched, `false` otherwise.
       */
      has_more: boolean;
      /**
       * History
       * @description A list of `HistoryItem` objects, each representing a generated audio item.
       */
      history: {
          /**
           * Character Count Change From
           * @description The character count of the input before any transformation or generation.
           */
          character_count_change_from: number;
          /**
           * Character Count Change To
           * @description The character count of the input after transformation or as used for billing.
           */
          character_count_change_to: number;
          /**
           * Content Type
           * @description The MIME type of the generated audio (e.g., 'audio/mpeg').
           */
          content_type: string;
          /**
           * Date Unix
           * @description Timestamp of the history item's creation, in Unix epoch seconds.
           */
          date_unix: number;
          /**
           * Feedback
           * @description An object containing feedback details, if any, provided for this generated item.
           */
          feedback: {
              /**
               * Audio Quality
               * @description Indicates if the feedback pertains to the overall audio quality.
               */
              audio_quality: boolean;
              /**
               * Emotions
               * @description Indicates if the feedback pertains to the emotional delivery of the audio.
               */
              emotions: boolean;
              /**
               * Feedback
               * @description The textual content of the feedback provided by the user.
               */
              feedback: string;
              /**
               * Glitches
               * @description Indicates if the feedback reports glitches or artifacts in the audio.
               */
              glitches: boolean;
              /**
               * Inaccurate Clone
               * @description Indicates if the feedback pertains to the accuracy of a cloned voice.
               */
              inaccurate_clone: boolean;
              /**
               * Other
               * @description Indicates if the feedback falls into a category not otherwise specified.
               */
              other: boolean;
              /**
               * Review Status
               * @description The review status of the feedback (e.g., 'not_reviewed', 'reviewed'). Defaults to 'not_reviewed'.
               * @default not_reviewed
               */
              review_status: string | null;
              /**
               * Thumbs Up
               * @description Indicates if the feedback given was positive (thumbs up).
               */
              thumbs_up: boolean;
          };
          /**
           * History Item Id
           * @description Unique identifier for this specific history entry.
           */
          history_item_id: string;
          /**
           * Model Id
           * @description Identifier of the model used for the generation (e.g., 'eleven_multilingual_v2').
           */
          model_id: string;
          /**
           * Request Id
           * @description Identifier of the API request that generated this history item.
           */
          request_id: string;
          /**
           * Settings
           * @description A dictionary of settings used during the audio generation process (e.g., stability, similarity_boost).
           */
          settings: {
              [key: string]: unknown;
          };
          /**
           * Share Link Id
           * @description Identifier for a shareable link to the audio, if one was created.
           */
          share_link_id: string;
          /**
           * Source
           * @description Indicates the source of the generation, such as 'TTS' (Text-to-Speech) or 'STS' (Speech-to-Speech).
           * @enum {string}
           */
          source: "TTS" | "STS";
          /**
           * State
           * @description The current state of the history item (e.g., 'created', 'deleted', 'processing').
           * @enum {string}
           */
          state: "created" | "deleted" | "processing";
          /**
           * Text
           * @description The input text that was processed to generate the audio.
           */
          text: string;
          /**
           * Voice Category
           * @description Category of the voice used (e.g., 'premade', 'cloned', 'generated', 'professional').
           * @enum {string}
           */
          voice_category: "premade" | "cloned" | "generated" | "professional";
          /**
           * Voice Id
           * @description Identifier of the voice used for the generation.
           */
          voice_id: string;
          /**
           * Voice Name
           * @description Name of the voice used for the generation.
           */
          voice_name: string;
      }[];
      /**
       * Last History Item Id
       * @description The ID of the last history item in the current list. This ID can be used as `start_after_history_item_id` in a subsequent request to fetch the next page of results.
       */
      last_history_item_id: string;
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
 * Type of ELEVENLABS's ELEVENLABS_GET_HISTORY_ITEM_BY_ID tool input.
 */
type ELEVENLABS_GET_HISTORY_ITEM_BY_ID_INPUT = {
  /**
   * History Item Id
   * @description Unique identifier of the history item to retrieve.
   */
  history_item_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_GET_HISTORY_ITEM_BY_ID tool output.
 */
type ELEVENLABS_GET_HISTORY_ITEM_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Detailed information about the retrieved history item.
   */
  data?: {
      /**
       * Character Count Change From
       * @description Original character count of the input text before any modifications or truncation.
       */
      character_count_change_from: number;
      /**
       * Character Count Change To
       * @description Final character count of the text that was actually synthesized, after any modifications.
       */
      character_count_change_to: number;
      /**
       * Content Type
       * @description Content type of the generated audio, typically 'audio/mpeg'.
       */
      content_type: string;
      /**
       * Date Unix
       * @description Timestamp of when the history item was created, in Unix seconds.
       */
      date_unix: number;
      /**
       * Feedback
       * @description User-provided feedback details for this history item.
       */
      feedback: {
          /**
           * Audio Quality
           * @description Indicates if the feedback is related to the overall audio quality.
           */
          audio_quality: boolean;
          /**
           * Emotions
           * @description Indicates if the feedback is related to the emotional delivery of the audio.
           */
          emotions: boolean;
          /**
           * Feedback
           * @description Textual feedback provided by the user for the audio generation.
           */
          feedback: string;
          /**
           * Glitches
           * @description Indicates if the feedback reports glitches or artifacts in the audio.
           */
          glitches: boolean;
          /**
           * Inaccurate Clone
           * @description Indicates if the feedback suggests the voice clone was not accurate.
           */
          inaccurate_clone: boolean;
          /**
           * Other
           * @description Indicates if the feedback pertains to other aspects not covered by specific categories.
           */
          other: boolean;
          /**
           * Review Status
           * @description The current review status of the feedback (e.g., 'not_reviewed', 'reviewed'). Default is 'not_reviewed'.
           * @default not_reviewed
           */
          review_status: string | null;
          /**
           * Thumbs Up
           * @description Indicates if the user gave a thumbs up for the audio quality.
           */
          thumbs_up: boolean;
      };
      /**
       * History Item Id
       * @description Unique identifier for the history item.
       */
      history_item_id: string;
      /**
       * Model Id
       * @description Identifier of the model used for the text-to-speech conversion (e.g., 'eleven_multilingual_v2').
       */
      model_id: string;
      /**
       * Request Id
       * @description Identifier of the request that generated this history item.
       */
      request_id: string;
      /**
       * Settings
       * @description A dictionary of the settings used for this speech synthesis job (e.g., stability, similarity_boost).
       */
      settings: {
          [key: string]: unknown;
      };
      /**
       * Share Link Id
       * @description Identifier for a publicly shareable link to this history item, if one exists.
       */
      share_link_id: string;
      /**
       * Source
       * @description Source of the audio generation, indicating if it was from Text-to-Speech (TTS) or Speech-to-Speech (STS).
       * @enum {string}
       */
      source: "TTS" | "STS";
      /**
       * State
       * @description Current processing state of the history item (e.g., 'created', 'deleted', 'processing').
       * @enum {string}
       */
      state: "created" | "deleted" | "processing";
      /**
       * Text
       * @description The input text that was converted to speech.
       */
      text: string;
      /**
       * Voice Category
       * @description Category of the voice used (e.g., 'premade', 'cloned', 'generated', 'professional').
       * @enum {string}
       */
      voice_category: "premade" | "cloned" | "generated" | "professional";
      /**
       * Voice Id
       * @description Identifier of the voice used for the text-to-speech conversion.
       */
      voice_id: string;
      /**
       * Voice Name
       * @description Name of the voice used.
       */
      voice_name: string;
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
 * Type of ELEVENLABS's ELEVENLABS_GET_METADATA_FOR_A_PRONUNCIATION_DICTIONARY tool input.
 */
type ELEVENLABS_GET_METADATA_FOR_A_PRONUNCIATION_DICTIONARY_INPUT = {
  /**
   * Pronunciation Dictionary Id
   * @description The unique identifier of the pronunciation dictionary for which to retrieve metadata.
   */
  pronunciation_dictionary_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_GET_METADATA_FOR_A_PRONUNCIATION_DICTIONARY tool output.
 */
type ELEVENLABS_GET_METADATA_FOR_A_PRONUNCIATION_DICTIONARY_OUTPUT = {
  /**
   * Data
   * @description Object containing the metadata of the pronunciation dictionary.
   */
  data?: {
      /**
       * Created By
       * @description Identifier of the user or entity that created the dictionary.
       */
      created_by: string;
      /**
       * Creation Time Unix
       * @description Timestamp (Unix epoch seconds) indicating when the pronunciation dictionary was created.
       */
      creation_time_unix: number;
      /**
       * Description
       * @description An optional description provided for the pronunciation dictionary.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description The unique identifier of the pronunciation dictionary.
       */
      id: string;
      /**
       * Latest Version Id
       * @description The unique identifier of the latest version of this pronunciation dictionary.
       */
      latest_version_id: string;
      /**
       * Name
       * @description The name assigned to the pronunciation dictionary.
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
 * Type of ELEVENLABS's ELEVENLABS_GET_MODELS tool input.
 */
type ELEVENLABS_GET_MODELS_INPUT = object;

/**
 * Type of ELEVENLABS's ELEVENLABS_GET_MODELS tool output.
 */
type ELEVENLABS_GET_MODELS_OUTPUT = {
  /**
   * Data
   * @description The response data containing a list of available text-to-speech models with their detailed attributes.
   */
  data?: {
      /**
       * Can Be Finetuned
       * @description Indicates whether the model can be fine-tuned.
       */
      can_be_finetuned: boolean;
      /**
       * Can Do Text To Speech
       * @description Indicates whether the model can perform text-to-speech synthesis.
       */
      can_do_text_to_speech: boolean;
      /**
       * Can Do Voice Conversion
       * @description Indicates whether the model can perform voice conversion.
       */
      can_do_voice_conversion: boolean;
      /**
       * Can Use Speaker Boost
       * @description Indicates whether the model supports speaker boost for enhancing voice characteristics.
       */
      can_use_speaker_boost: boolean;
      /**
       * Can Use Style
       * @description Indicates whether the model supports style options for speech generation.
       */
      can_use_style: boolean;
      /**
       * Description
       * @description A human-readable description of the model, outlining its features and capabilities.
       */
      description: string;
      /**
       * Languages
       * @description A list of languages supported by the model, including their IDs and names.
       */
      languages: {
          /**
           * Language Id
           * @description The unique identifier for the language.
           */
          language_id: string;
          /**
           * Name
           * @description The name of the language (e.g., 'English', 'Spanish').
           */
          name: string;
      }[];
      /**
       * Max Characters Request Free User
       * @description The maximum number of characters allowed in a single text-to-speech request for free-tier users.
       */
      max_characters_request_free_user: number;
      /**
       * Max Characters Request Subscribed User
       * @description The maximum number of characters allowed in a single text-to-speech request for subscribed users.
       */
      max_characters_request_subscribed_user: number;
      /**
       * Model Id
       * @description The unique identifier for the model.
       */
      model_id: string;
      /**
       * Name
       * @description The name of the model.
       */
      name: string;
      /**
       * Requires Alpha Access
       * @description Indicates whether access to this model is restricted to users with alpha access.
       */
      requires_alpha_access: boolean;
      /**
       * Serves Pro Voices
       * @description Indicates whether the model serves pro voices.
       */
      serves_pro_voices: boolean;
      /**
       * Token Cost Factor
       * @description The factor by which the token cost is multiplied when using this model.
       */
      token_cost_factor: number;
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
 * Type of ELEVENLABS's ELEVENLABS_GET_MODELS_V_1_MODELS_GET tool input.
 */
type ELEVENLABS_GET_MODELS_V_1_MODELS_GET_INPUT = object;

/**
 * Type of ELEVENLABS's ELEVENLABS_GET_MODELS_V_1_MODELS_GET tool output.
 */
type ELEVENLABS_GET_MODELS_V_1_MODELS_GET_OUTPUT = {
  /**
   * Data
   * @description The response data containing a list of available text-to-speech models with their detailed attributes.
   */
  data?: {
      /**
       * Can Be Finetuned
       * @description Indicates whether the model can be fine-tuned.
       */
      can_be_finetuned: boolean;
      /**
       * Can Do Text To Speech
       * @description Indicates whether the model can perform text-to-speech synthesis.
       */
      can_do_text_to_speech: boolean;
      /**
       * Can Do Voice Conversion
       * @description Indicates whether the model can perform voice conversion.
       */
      can_do_voice_conversion: boolean;
      /**
       * Can Use Speaker Boost
       * @description Indicates whether the model supports speaker boost for enhancing voice characteristics.
       */
      can_use_speaker_boost: boolean;
      /**
       * Can Use Style
       * @description Indicates whether the model supports style options for speech generation.
       */
      can_use_style: boolean;
      /**
       * Description
       * @description A human-readable description of the model, outlining its features and capabilities.
       */
      description: string;
      /**
       * Languages
       * @description A list of languages supported by the model, including their IDs and names.
       */
      languages: {
          /**
           * Language Id
           * @description The unique identifier for the language.
           */
          language_id: string;
          /**
           * Name
           * @description The name of the language (e.g., 'English', 'Spanish').
           */
          name: string;
      }[];
      /**
       * Max Characters Request Free User
       * @description The maximum number of characters allowed in a single text-to-speech request for free-tier users.
       */
      max_characters_request_free_user: number;
      /**
       * Max Characters Request Subscribed User
       * @description The maximum number of characters allowed in a single text-to-speech request for subscribed users.
       */
      max_characters_request_subscribed_user: number;
      /**
       * Model Id
       * @description The unique identifier for the model.
       */
      model_id: string;
      /**
       * Name
       * @description The name of the model.
       */
      name: string;
      /**
       * Requires Alpha Access
       * @description Indicates whether access to this model is restricted to users with alpha access.
       */
      requires_alpha_access: boolean;
      /**
       * Serves Pro Voices
       * @description Indicates whether the model serves pro voices.
       */
      serves_pro_voices: boolean;
      /**
       * Token Cost Factor
       * @description The factor by which the token cost is multiplied when using this model.
       */
      token_cost_factor: number;
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
 * Type of ELEVENLABS's ELEVENLABS_GET_PROJECTS tool input.
 */
type ELEVENLABS_GET_PROJECTS_INPUT = object;

/**
 * Type of ELEVENLABS's ELEVENLABS_GET_PROJECTS tool output.
 */
type ELEVENLABS_GET_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Contains the list of projects retrieved from the account.
   */
  data?: {
      /** Projects */
      projects: {
          /** Author */
          author: string;
          /** Can Be Downloaded */
          can_be_downloaded: boolean;
          /** Create Date Unix */
          create_date_unix: number;
          /** Default Model Id */
          default_model_id: string;
          /** Default Paragraph Voice Id */
          default_paragraph_voice_id: string;
          /** Default Title Voice Id */
          default_title_voice_id: string;
          /** Isbn Number */
          isbn_number: string;
          /** Last Conversion Date Unix */
          last_conversion_date_unix: number;
          /** Name */
          name: string;
          /** Project Id */
          project_id: string;
          /**
           * State
           * @enum {string}
           */
          state: "default" | "converting";
          /** Title */
          title: string;
          /** Volume Normalization */
          volume_normalization: boolean;
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
 * Type of ELEVENLABS's ELEVENLABS_GET_PROJECT_BY_ID tool input.
 */
type ELEVENLABS_GET_PROJECT_BY_ID_INPUT = {
  /**
   * Project Id
   * @description Unique identifier for the project. To list all available projects and their IDs, you can use the endpoint that lists all projects (e.g., GET /v1/projects).
   */
  project_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_GET_PROJECT_BY_ID tool output.
 */
type ELEVENLABS_GET_PROJECT_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Detailed information of the retrieved project.
   */
  data?: {
      /** Can Be Downloaded */
      can_be_downloaded: boolean;
      /** Chapters */
      chapters: {
          /** Can Be Downloaded */
          can_be_downloaded: boolean;
          /** Chapter Id */
          chapter_id: string;
          /** Conversion Progress */
          conversion_progress: number;
          /** Last Conversion Date Unix */
          last_conversion_date_unix: number;
          /** Name */
          name: string;
          /**
           * State
           * @enum {string}
           */
          state: "default" | "converting";
          /** Statistics */
          statistics: {
              /** Characters Converted */
              characters_converted: number;
              /** Characters Unconverted */
              characters_unconverted: number;
              /** Paragraphs Converted */
              paragraphs_converted: number;
              /** Paragraphs Unconverted */
              paragraphs_unconverted: number;
          };
      }[];
      /** Create Date Unix */
      create_date_unix: number;
      /** Default Model Id */
      default_model_id: string;
      /** Default Paragraph Voice Id */
      default_paragraph_voice_id: string;
      /** Default Title Voice Id */
      default_title_voice_id: string;
      /** Last Conversion Date Unix */
      last_conversion_date_unix: number;
      /** Name */
      name: string;
      /** Project Id */
      project_id: string;
      /**
       * State
       * @enum {string}
       */
      state: "default" | "converting" | "in_queue";
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
 * Type of ELEVENLABS's ELEVENLABS_GET_PROJECT_SNAPSHOTS tool input.
 */
type ELEVENLABS_GET_PROJECT_SNAPSHOTS_INPUT = {
  /**
   * Project Id
   * @description Identifier of the project for which to retrieve snapshots. You can obtain project_ids by querying the GET /v1/projects endpoint to list all available projects.
   */
  project_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_GET_PROJECT_SNAPSHOTS tool output.
 */
type ELEVENLABS_GET_PROJECT_SNAPSHOTS_OUTPUT = {
  /**
   * Data
   * @description The response data containing a list of project snapshots.
   */
  data?: {
      /** Snapshots */
      snapshots: {
          /** Created At Unix */
          created_at_unix: number;
          /** Name */
          name: string;
          /** Project Id */
          project_id: string;
          /** Project Snapshot Id */
          project_snapshot_id: string;
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
 * Type of ELEVENLABS's ELEVENLABS_GET_PRONUNCIATION_DICTIONARIES tool input.
 */
type ELEVENLABS_GET_PRONUNCIATION_DICTIONARIES_INPUT = {
  /**
   * Cursor
   * @description Cursor for pagination, obtained from a previous response, to fetch the next set of pronunciation dictionaries. Omit or leave empty to retrieve the first page.
   */
  cursor?: string;
  /**
   * Page Size
   * @description The number of pronunciation dictionaries to retrieve per page, with a maximum value of 100.
   * @default 30
   */
  page_size: number;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_GET_PRONUNCIATION_DICTIONARIES tool output.
 */
type ELEVENLABS_GET_PRONUNCIATION_DICTIONARIES_OUTPUT = {
  /**
   * Data
   * @description The payload containing the list of pronunciation dictionaries for the current page and pagination information.
   */
  data?: {
      /**
       * Has More
       * @description A boolean flag indicating if there are more pronunciation dictionaries to fetch beyond the current page.
       */
      has_more: boolean;
      /**
       * Next Cursor
       * @description The cursor to use for fetching the next page of results. If null, empty, or not present, it indicates no more pages are available.
       */
      next_cursor: string;
      /**
       * Pronunciation Dictionaries
       * @description A list of pronunciation dictionary objects retrieved for the current page.
       */
      pronunciation_dictionaries: {
          /**
           * Created By
           * @description Identifier of the user or system entity that created the pronunciation dictionary.
           */
          created_by: string;
          /**
           * Creation Time Unix
           * @description The Unix timestamp representing when the pronunciation dictionary was created, in seconds.
           */
          creation_time_unix: number;
          /**
           * Description
           * @description An optional user-provided description of the pronunciation dictionary.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description The unique identifier of the pronunciation dictionary.
           */
          id: string;
          /**
           * Latest Version Id
           * @description The unique identifier of the latest version of this pronunciation dictionary.
           */
          latest_version_id: string;
          /**
           * Name
           * @description The user-defined name of the pronunciation dictionary.
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
 * Type of ELEVENLABS's ELEVENLABS_GET_PRONUNCIATION_DICT_VERSION tool input.
 */
type ELEVENLABS_GET_PRONUNCIATION_DICT_VERSION_INPUT = {
  /**
   * Dictionary Id
   * @description The unique identifier of the pronunciation dictionary.
   */
  dictionary_id?: string;
  /**
   * Version Id
   * @description The unique identifier of the specific version of the pronunciation dictionary.
   */
  version_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_GET_PRONUNCIATION_DICT_VERSION tool output.
 */
type ELEVENLABS_GET_PRONUNCIATION_DICT_VERSION_OUTPUT = {
  /**
   * Data
   * @description The API response data. Specific content and structure may vary, particularly for file download results.
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
 * Type of ELEVENLABS's ELEVENLABS_GET_SHARED_VOICES tool input.
 */
type ELEVENLABS_GET_SHARED_VOICES_INPUT = {
  /**
   * Accent
   * @description Filters voices by accent.
   */
  accent?: string;
  /**
   * Age
   * @description Filters voices by age group.
   */
  age?: string;
  /**
   * Category
   * @description Filters voices by category.
   */
  category?: string;
  /**
   * Descriptives
   * @description Filters voices by descriptive tags.
   */
  descriptives?: string[];
  /**
   * Featured
   * @description Filters for voices that are marked as featured.
   * @default false
   */
  featured: boolean;
  /**
   * Gender
   * @description Filters voices by gender.
   */
  gender?: string;
  /**
   * Language
   * @description Filters voices by language (ISO 639-1 code).
   */
  language?: string;
  /**
   * Owner Id
   * @description Filters voices by the public ID of their owner.
   */
  owner_id?: string;
  /**
   * Page
   * @description Page number for pagination, starting from 0.
   * @default 0
   */
  page: number;
  /**
   * Page Size
   * @description Maximum number of shared voices per page (max 100).
   * @default 30
   */
  page_size: number;
  /**
   * Reader App Enabled
   * @description Filters for voices that are enabled for the reader application.
   * @default false
   */
  reader_app_enabled: boolean;
  /**
   * Search
   * @description A search term to filter voices by name or description.
   */
  search?: string;
  /**
   * Sort
   * @description Specifies the criteria for sorting the voices.
   */
  sort?: string;
  /**
   * Use Cases
   * @description Filters voices by their intended use cases.
   */
  use_cases?: string[];
};

/**
 * Type of ELEVENLABS's ELEVENLABS_GET_SHARED_VOICES tool output.
 */
type ELEVENLABS_GET_SHARED_VOICES_OUTPUT = {
  /**
   * Data
   * @description Data object containing the list of shared voices and pagination information.
   */
  data?: {
      /**
       * Has More
       * @description Indicates if there are more voices available beyond the current page, for pagination purposes.
       */
      has_more: boolean;
      /**
       * Last Sort Id
       * @description The sort ID of the last voice in the current page. This can be used for cursor-based pagination with some sort methods.
       * @default null
       */
      last_sort_id: string | null;
      /**
       * Voices
       * @description A list of shared voice objects matching the specified filters and pagination.
       */
      voices: {
          /**
           * Accent
           * @description Accent of the voice (e.g., american, british).
           */
          accent: string;
          /**
           * Age
           * @description Age category of the voice (e.g., young, old).
           */
          age: string;
          /**
           * Category
           * @description Category of the voice (e.g., professional, voice design).
           */
          category: string;
          /**
           * Cloned By Count
           * @description Number of times this voice has been cloned by other users.
           */
          cloned_by_count: number;
          /**
           * Date Unix
           * @description Timestamp (Unix epoch) of when the voice was added to the shared library.
           */
          date_unix: number;
          /**
           * Description
           * @description A description of the voice provided by its creator.
           */
          description: string;
          /**
           * Descriptive
           * @description Descriptive tags for the voice (e.g., calm, energetic).
           */
          descriptive: string;
          /**
           * Featured
           * @description Indicates if the voice is currently featured in the voice library.
           */
          featured: boolean;
          /**
           * Free Users Allowed
           * @description Indicates if free tier users are allowed to use this voice.
           */
          free_users_allowed: boolean;
          /**
           * Gender
           * @description Gender of the voice (e.g., male, female, neutral).
           */
          gender: string;
          /**
           * Instagram Username
           * @description Associated Instagram username of the voice creator, if provided.
           * @default null
           */
          instagram_username: string | null;
          /**
           * Language
           * @description Language of the voice, typically an ISO 639-1 code (e.g., en, es).
           */
          language: string;
          /**
           * Live Moderation Enabled
           * @description Indicates if live moderation is enabled for this voice, often for safety.
           */
          live_moderation_enabled: boolean;
          /**
           * Name
           * @description Name of the voice.
           */
          name: string;
          /**
           * Notice Period
           * @description Notice period in days before a voice is removed or undergoes significant changes, if applicable.
           * @default null
           */
          notice_period: number | null;
          /**
           * Play Api Usage Character Count 1Y
           * @description Total characters generated via the Play API using this voice in the last year.
           */
          play_api_usage_character_count_1y: number;
          /**
           * Preview Url
           * @description URL to an audio preview of the voice.
           */
          preview_url: string;
          /**
           * Public Owner Id
           * @description The public identifier of the voice's owner.
           */
          public_owner_id: string;
          /**
           * Rate
           * @description The rate or cost associated with using the voice, if applicable.
           */
          rate: number;
          /**
           * Tiktok Username
           * @description Associated TikTok username of the voice creator, if provided.
           * @default null
           */
          tiktok_username: string | null;
          /**
           * Twitter Username
           * @description Associated Twitter username of the voice creator, if provided.
           * @default null
           */
          twitter_username: string | null;
          /**
           * Usage Character Count 1Y
           * @description Total characters generated using this voice in the last year across all users.
           */
          usage_character_count_1y: number;
          /**
           * Usage Character Count 7D
           * @description Total characters generated using this voice in the last 7 days across all users.
           */
          usage_character_count_7d: number;
          /**
           * Use Case
           * @description Primary use case for the voice (e.g., narration, audiobook).
           */
          use_case: string;
          /**
           * Voice Id
           * @description Identifier of the voice.
           */
          voice_id: string;
          /**
           * Youtube Username
           * @description Associated YouTube username of the voice creator, if provided.
           * @default null
           */
          youtube_username: string | null;
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
 * Type of ELEVENLABS's ELEVENLABS_GET_SSO_PROVIDER_ADMIN tool input.
 */
type ELEVENLABS_GET_SSO_PROVIDER_ADMIN_INPUT = {
  /**
   * Workspace Id
   * @description The unique identifier of the workspace for which to retrieve the SSO provider configuration.
   */
  workspace_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_GET_SSO_PROVIDER_ADMIN tool output.
 */
type ELEVENLABS_GET_SSO_PROVIDER_ADMIN_OUTPUT = {
  /**
   * Data
   * @description Contains the detailed SSO provider configuration for the workspace.
   */
  data?: {
      /**
       * Domains
       * @description A list of email domains that are associated with this SSO provider configuration.
       */
      domains: string[];
      /**
       * Provider Id
       * @description The unique identifier assigned to the SSO provider by the configuration (e.g., a specific SAML or OIDC application ID).
       */
      provider_id: string;
      /**
       * Provider Type
       * @description The type of the SSO provider.
       * @enum {string}
       */
      provider_type: "saml" | "oidc";
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
 * Type of ELEVENLABS's ELEVENLABS_GET_TRANSCRIPT_FOR_DUB tool input.
 */
type ELEVENLABS_GET_TRANSCRIPT_FOR_DUB_INPUT = {
  /**
   * Dubbing Id
   * @description The unique identifier for the dubbing project.
   */
  dubbing_id?: string;
  /**
   * Language Code
   * @description The ISO 639-1 language code for which to retrieve the transcript.
   */
  language_code?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_GET_TRANSCRIPT_FOR_DUB tool output.
 */
type ELEVENLABS_GET_TRANSCRIPT_FOR_DUB_OUTPUT = {
  /**
   * Data
   * @description The transcript content for the specified dubbing project and language. The structure can vary, often a string or structured text.
   */
  data?: unknown;
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
 * Type of ELEVENLABS's ELEVENLABS_GET_USER_INFO tool input.
 */
type ELEVENLABS_GET_USER_INFO_INPUT = object;

/**
 * Type of ELEVENLABS's ELEVENLABS_GET_USER_INFO tool output.
 */
type ELEVENLABS_GET_USER_INFO_OUTPUT = {
  /**
   * Data
   * @description Detailed user account information, including subscription, API key, and usage stats.
   */
  data?: {
      /**
       * Can Use Delayed Payment Methods
       * @description Whether the user can use payment methods with delayed settlement (e.g., SEPA).
       */
      can_use_delayed_payment_methods: boolean;
      /**
       * First Name
       * @description User's first name, if available or provided during sign-up.
       * @default null
       */
      first_name: string | null;
      /**
       * Is New User
       * @description Whether this is a newly registered user.
       */
      is_new_user: boolean;
      /**
       * Is Onboarding Completed
       * @description Whether the user has completed initial onboarding.
       */
      is_onboarding_completed: boolean;
      /**
       * Subscription
       * @description Detailed information about the user's subscription plan and usage.
       */
      subscription: {
          /**
           * Allowed To Extend Character Limit
           * @description Whether the user is currently permitted to extend their character limit.
           */
          allowed_to_extend_character_limit: boolean;
          /**
           * Billing Period
           * @description Subscription billing cycle.
           * @enum {string}
           */
          billing_period: "monthly_period" | "annual_period";
          /**
           * Can Extend Character Limit
           * @description Whether the current plan allows purchasing additional characters.
           */
          can_extend_character_limit: boolean;
          /**
           * Can Extend Voice Limit
           * @description Whether the current plan allows increasing the voice limit.
           */
          can_extend_voice_limit: boolean;
          /**
           * Can Use Instant Voice Cloning
           * @description Whether the user has access to Instant Voice Cloning.
           */
          can_use_instant_voice_cloning: boolean;
          /**
           * Can Use Professional Voice Cloning
           * @description Whether the user has access to Professional Voice Cloning.
           */
          can_use_professional_voice_cloning: boolean;
          /**
           * Character Count
           * @description Characters used within the current billing or refresh period.
           */
          character_count: number;
          /**
           * Character Limit
           * @description Total character quota for the current billing or refresh period.
           */
          character_limit: number;
          /**
           * Character Refresh Period
           * @description Frequency at which the character quota refreshes.
           * @enum {string}
           */
          character_refresh_period: "monthly_period" | "annual_period";
          /**
           * Currency
           * @description Billing currency, if applicable.
           * @enum {string}
           */
          currency: "usd" | "eur";
          /**
           * Max Voice Add Edits
           * @description Maximum edits allowed when adding or modifying voices.
           */
          max_voice_add_edits: number;
          /**
           * Next Character Count Reset Unix
           * @description Unix timestamp (seconds) for when the character count resets.
           */
          next_character_count_reset_unix: number;
          /**
           * Professional Voice Limit
           * @description Maximum professional voices (e.g., for Professional Voice Cloning) the user can create.
           */
          professional_voice_limit: number;
          /**
           * Status
           * @description Current status of the user's subscription.
           * @enum {string}
           */
          status: "trialing" | "active" | "incomplete" | "incomplete_expired" | "past_due" | "canceled" | "unpaid" | "free";
          /**
           * Tier
           * @description User's subscription tier (e.g., 'free', 'starter', 'creator').
           */
          tier: string;
          /**
           * Voice Add Edit Counter
           * @description Number of edits used for adding or modifying voices.
           */
          voice_add_edit_counter: number;
          /**
           * Voice Limit
           * @description Maximum custom voices allowed under the current subscription.
           */
          voice_limit: number;
      };
      /**
       * Xi Api Key
       * @description User's unique API key for ElevenLabs services.
       */
      xi_api_key: string;
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
 * Type of ELEVENLABS's ELEVENLABS_GET_USER_INFO_V_1_USER_GET tool input.
 */
type ELEVENLABS_GET_USER_INFO_V_1_USER_GET_INPUT = object;

/**
 * Type of ELEVENLABS's ELEVENLABS_GET_USER_INFO_V_1_USER_GET tool output.
 */
type ELEVENLABS_GET_USER_INFO_V_1_USER_GET_OUTPUT = {
  /**
   * Data
   * @description Detailed user account information, including subscription, API key, and usage stats.
   */
  data?: {
      /**
       * Can Use Delayed Payment Methods
       * @description Whether the user can use payment methods with delayed settlement (e.g., SEPA).
       */
      can_use_delayed_payment_methods: boolean;
      /**
       * First Name
       * @description User's first name, if available or provided during sign-up.
       * @default null
       */
      first_name: string | null;
      /**
       * Is New User
       * @description Whether this is a newly registered user.
       */
      is_new_user: boolean;
      /**
       * Is Onboarding Completed
       * @description Whether the user has completed initial onboarding.
       */
      is_onboarding_completed: boolean;
      /**
       * Subscription
       * @description Detailed information about the user's subscription plan and usage.
       */
      subscription: {
          /**
           * Allowed To Extend Character Limit
           * @description Whether the user is currently permitted to extend their character limit.
           */
          allowed_to_extend_character_limit: boolean;
          /**
           * Billing Period
           * @description Subscription billing cycle.
           * @enum {string}
           */
          billing_period: "monthly_period" | "annual_period";
          /**
           * Can Extend Character Limit
           * @description Whether the current plan allows purchasing additional characters.
           */
          can_extend_character_limit: boolean;
          /**
           * Can Extend Voice Limit
           * @description Whether the current plan allows increasing the voice limit.
           */
          can_extend_voice_limit: boolean;
          /**
           * Can Use Instant Voice Cloning
           * @description Whether the user has access to Instant Voice Cloning.
           */
          can_use_instant_voice_cloning: boolean;
          /**
           * Can Use Professional Voice Cloning
           * @description Whether the user has access to Professional Voice Cloning.
           */
          can_use_professional_voice_cloning: boolean;
          /**
           * Character Count
           * @description Characters used within the current billing or refresh period.
           */
          character_count: number;
          /**
           * Character Limit
           * @description Total character quota for the current billing or refresh period.
           */
          character_limit: number;
          /**
           * Character Refresh Period
           * @description Frequency at which the character quota refreshes.
           * @enum {string}
           */
          character_refresh_period: "monthly_period" | "annual_period";
          /**
           * Currency
           * @description Billing currency, if applicable.
           * @enum {string}
           */
          currency: "usd" | "eur";
          /**
           * Max Voice Add Edits
           * @description Maximum edits allowed when adding or modifying voices.
           */
          max_voice_add_edits: number;
          /**
           * Next Character Count Reset Unix
           * @description Unix timestamp (seconds) for when the character count resets.
           */
          next_character_count_reset_unix: number;
          /**
           * Professional Voice Limit
           * @description Maximum professional voices (e.g., for Professional Voice Cloning) the user can create.
           */
          professional_voice_limit: number;
          /**
           * Status
           * @description Current status of the user's subscription.
           * @enum {string}
           */
          status: "trialing" | "active" | "incomplete" | "incomplete_expired" | "past_due" | "canceled" | "unpaid" | "free";
          /**
           * Tier
           * @description User's subscription tier (e.g., 'free', 'starter', 'creator').
           */
          tier: string;
          /**
           * Voice Add Edit Counter
           * @description Number of edits used for adding or modifying voices.
           */
          voice_add_edit_counter: number;
          /**
           * Voice Limit
           * @description Maximum custom voices allowed under the current subscription.
           */
          voice_limit: number;
      };
      /**
       * Xi Api Key
       * @description User's unique API key for ElevenLabs services.
       */
      xi_api_key: string;
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
 * Type of ELEVENLABS's ELEVENLABS_GET_USER_SUBSCRIPTION_INFO tool input.
 */
type ELEVENLABS_GET_USER_SUBSCRIPTION_INFO_INPUT = object;

/**
 * Type of ELEVENLABS's ELEVENLABS_GET_USER_SUBSCRIPTION_INFO tool output.
 */
type ELEVENLABS_GET_USER_SUBSCRIPTION_INFO_OUTPUT = {
  /**
   * Data
   * @description Detailed subscription information for the authenticated user.
   */
  data?: {
      /**
       * Allowed To Extend Character Limit
       * @description Whether the user is currently allowed to extend their character limit.
       */
      allowed_to_extend_character_limit: boolean;
      /**
       * Billing Period
       * @description Subscription billing frequency.
       * @enum {string}
       */
      billing_period: "monthly_period" | "annual_period";
      /**
       * Can Extend Character Limit
       * @description Whether the user can extend their character limit.
       */
      can_extend_character_limit: boolean;
      /**
       * Can Extend Voice Limit
       * @description Whether the user can extend their voice limit.
       */
      can_extend_voice_limit: boolean;
      /**
       * Can Use Instant Voice Cloning
       * @description Whether the subscription allows instant voice cloning.
       */
      can_use_instant_voice_cloning: boolean;
      /**
       * Can Use Professional Voice Cloning
       * @description Whether the subscription allows professional voice cloning.
       */
      can_use_professional_voice_cloning: boolean;
      /**
       * Character Count
       * @description Number of characters used in the current cycle.
       */
      character_count: number;
      /**
       * Character Limit
       * @description Total character quota allowed in the current cycle.
       */
      character_limit: number;
      /**
       * Character Refresh Period
       * @description Frequency of character count quota refresh.
       * @enum {string}
       */
      character_refresh_period: "monthly_period" | "annual_period";
      /**
       * Currency
       * @description Subscription currency.
       * @enum {string}
       */
      currency: "usd" | "eur";
      /**
       * Has Open Invoices
       * @description Whether the user has open invoices.
       */
      has_open_invoices: boolean;
      /**
       * Max Voice Add Edits
       * @description Maximum times the user can add or edit voices.
       */
      max_voice_add_edits: number;
      /**
       * Next Character Count Reset Unix
       * @description Unix timestamp for when the user's character count will reset.
       */
      next_character_count_reset_unix: number;
      /**
       * Next Invoice
       * @description Detailed information about the next upcoming invoice, if applicable.
       */
      next_invoice: {
          /**
           * Amount Due Cents
           * @description Amount due in cents for the next invoice.
           */
          amount_due_cents: number;
          /**
           * Next Payment Attempt Unix
           * @description Unix timestamp for the next scheduled payment attempt.
           */
          next_payment_attempt_unix: number;
      };
      /**
       * Professional Voice Limit
       * @description Maximum professional voices the user can create or use.
       */
      professional_voice_limit: number;
      /**
       * Status
       * @description Current subscription status.
       * @enum {string}
       */
      status: "trialing" | "active" | "incomplete" | "incomplete_expired" | "past_due" | "canceled" | "unpaid" | "free";
      /**
       * Tier
       * @description Name or identifier of the user's subscription tier.
       */
      tier: string;
      /**
       * Voice Add Edit Counter
       * @description Current count of voice additions or edits.
       */
      voice_add_edit_counter: number;
      /**
       * Voice Limit
       * @description Maximum custom voices the user can create or use.
       */
      voice_limit: number;
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
 * Type of ELEVENLABS's ELEVENLABS_GET_VOICE tool input.
 */
type ELEVENLABS_GET_VOICE_INPUT = {
  /**
   * Voice Id
   * @description Identifier of the voice. Use the `GET /v1/voices` endpoint to list available IDs.
   */
  voice_id?: string;
  /**
   * With Settings
   * @description If true, the response will include detailed settings information for the voice.
   * @default false
   */
  with_settings: boolean;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_GET_VOICE tool output.
 */
type ELEVENLABS_GET_VOICE_OUTPUT = {
  /**
   * Data
   * @description Detailed information and attributes of the requested voice.
   */
  data?: {
      /** Available For Tiers */
      available_for_tiers: string[];
      /** Category */
      category: string;
      /** Description */
      description: string;
      /** Fine Tuning */
      fine_tuning: {
          /** Dataset Duration Seconds */
          dataset_duration_seconds: number | null;
          /** Finetuning Progress */
          finetuning_progress: {
              [key: string]: number;
          } | null;
          /**
           * Finetuning State
           * @enum {string}
           */
          finetuning_state: "not_started" | "queued" | "fine_tuning" | "fine_tuned" | "failed" | "delayed";
          /** Is Allowed To Fine Tune */
          is_allowed_to_fine_tune: boolean;
          /** Language */
          language: string | null;
          /** ManualVerification */
          manual_verification: {
              /** Extra Text */
              extra_text: string;
              /** Files */
              files: {
                  /** File Id */
                  file_id: string;
                  /** File Name */
                  file_name: string;
                  /** Mime Type */
                  mime_type: string;
                  /** Size Bytes */
                  size_bytes: number;
                  /** Upload Date Unix */
                  upload_date_unix: number;
              }[];
              /** Request Time Unix */
              request_time_unix: number;
          } | null;
          /** Manual Verification Requested */
          manual_verification_requested: boolean;
          /** Message */
          message: string | null;
          /** Slice Ids */
          slice_ids: string[] | null;
          /** Verification Attempts */
          verification_attempts: {
              /** Accepted */
              accepted: boolean;
              /** Date Unix */
              date_unix: number;
              /** Levenshtein Distance */
              levenshtein_distance: number;
              /** Recording */
              recording: {
                  /** Mime Type */
                  mime_type: string;
                  /** Recording Id */
                  recording_id: string;
                  /** Size Bytes */
                  size_bytes: number;
                  /** Transcription */
                  transcription: string;
                  /** Upload Date Unix */
                  upload_date_unix: number;
              } | null;
              /** Similarity */
              similarity: number;
              /** Text */
              text: string;
          }[] | null;
          /** Verification Attempts Count */
          verification_attempts_count: number;
          /** Verification Failures */
          verification_failures: string[];
      };
      /** High Quality Base Model Ids */
      high_quality_base_model_ids: string[];
      /** Labels */
      labels: {
          [key: string]: string;
      };
      /** Name */
      name: string;
      /** Owner Id */
      owner_id: string | null;
      /** Permission On Resource */
      permission_on_resource: string | null;
      /** Preview Url */
      preview_url: string;
      /**
       * SafetyControl
       * @enum {string|null}
       */
      safety_control: "NONE" | "BAN" | "CAPTCHA" | "CAPTCHA_AND_MODERATION" | null;
      /** Samples */
      samples: {
          /** File Name */
          file_name: string;
          /** Hash */
          hash: string;
          /** Mime Type */
          mime_type: string;
          /** Sample Id */
          sample_id: string;
          /** Size Bytes */
          size_bytes: number;
      }[];
      /** Settings */
      settings: {
          /** Similarity Boost */
          similarity_boost: number;
          /** Stability */
          stability: number;
          /**
           * Style
           * @default 0
           */
          style: number | null;
          /**
           * Use Speaker Boost
           * @default true
           */
          use_speaker_boost: boolean | null;
      };
      /** Sharing */
      sharing: {
          /** Ban Reason */
          ban_reason: string;
          /**
           * Category
           * @enum {string}
           */
          category: "generated" | "professional" | "high_quality";
          /** Cloned By Count */
          cloned_by_count: number;
          /** Date Unix */
          date_unix: number;
          /** Description */
          description: string;
          /** Disable At Unix */
          disable_at_unix: number;
          /** Enabled In Library */
          enabled_in_library: boolean;
          /** Featured */
          featured: boolean;
          /** Financial Rewards Enabled */
          financial_rewards_enabled: boolean;
          /** Free Users Allowed */
          free_users_allowed: boolean;
          /** History Item Sample Id */
          history_item_sample_id: string;
          /** Instagram Username */
          instagram_username: string | null;
          /** Labels */
          labels: {
              [key: string]: string;
          };
          /** Liked By Count */
          liked_by_count: number;
          /** Live Moderation Enabled */
          live_moderation_enabled: boolean;
          /** Name */
          name: string;
          /** Notice Period */
          notice_period: number;
          /** Original Voice Id */
          original_voice_id: string;
          /** Public Owner Id */
          public_owner_id: string;
          /** Rate */
          rate: number;
          /** Reader App Enabled */
          reader_app_enabled: boolean;
          /** Review Message */
          review_message: string;
          /**
           * Review Status
           * @enum {string}
           */
          review_status: "not_requested" | "pending" | "declined" | "allowed" | "allowed_with_changes";
          /**
           * Status
           * @enum {string}
           */
          status: "enabled" | "disabled" | "copied" | "copied_disabled";
          /** Tiktok Username */
          tiktok_username: string | null;
          /** Twitter Username */
          twitter_username: string | null;
          /** Voice Mixing Allowed */
          voice_mixing_allowed: boolean;
          /** Whitelisted Emails */
          whitelisted_emails: string[];
          /** Youtube Username */
          youtube_username: string | null;
      };
      /** Voice Id */
      voice_id: string;
      /** VoiceVerification */
      voice_verification: {
          /** Is Verified */
          is_verified: boolean;
          /** Language */
          language: string | null;
          /** Requires Verification */
          requires_verification: boolean;
          /** Verification Attempts */
          verification_attempts: {
              /** Accepted */
              accepted: boolean;
              /** Date Unix */
              date_unix: number;
              /** Levenshtein Distance */
              levenshtein_distance: number;
              /** Recording */
              recording: {
                  /** Mime Type */
                  mime_type: string;
                  /** Recording Id */
                  recording_id: string;
                  /** Size Bytes */
                  size_bytes: number;
                  /** Transcription */
                  transcription: string;
                  /** Upload Date Unix */
                  upload_date_unix: number;
              } | null;
              /** Similarity */
              similarity: number;
              /** Text */
              text: string;
          }[] | null;
          /** Verification Attempts Count */
          verification_attempts_count: number;
          /** Verification Failures */
          verification_failures: string[];
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
 * Type of ELEVENLABS's ELEVENLABS_GET_VOICES tool input.
 */
type ELEVENLABS_GET_VOICES_INPUT = object;

/**
 * Type of ELEVENLABS's ELEVENLABS_GET_VOICES tool output.
 */
type ELEVENLABS_GET_VOICES_OUTPUT = {
  /**
   * Data
   * @description Primary data payload containing the list of available voices.
   */
  data?: {
      /**
       * Voices
       * @description List of Voice objects, each representing an available voice with its details.
       */
      voices: {
          /**
           * Available For Tiers
           * @description Subscription tier names or IDs that have access to use this voice.
           */
          available_for_tiers: string[];
          /**
           * Category
           * @description Category of the voice (e.g., 'cloned', 'premade', 'generated').
           */
          category: string;
          /**
           * Description
           * @description Textual description of the voice, its characteristics, style, or intended uses.
           */
          description: string;
          /**
           * Fine Tuning
           * @description Metadata for the fine-tuning status, progress, and history of this voice.
           */
          fine_tuning: {
              /**
               * Dataset Duration Seconds
               * @description Total duration (seconds) of the audio dataset used for fine-tuning.
               * @default null
               */
              dataset_duration_seconds: number | null;
              /**
               * Finetuning Progress
               * @description Progress of fine-tuning stages (e.g., {'transcription_alignment': 0.5}).
               * @default null
               */
              finetuning_progress: {
                  [key: string]: number;
              } | null;
              /**
               * Finetuning State
               * @description Current stage of the fine-tuning process for this voice.
               * @enum {string}
               */
              finetuning_state: "not_started" | "queued" | "fine_tuning" | "fine_tuned" | "failed" | "delayed";
              /**
               * Is Allowed To Fine Tune
               * @description Indicates if the voice is currently eligible for fine-tuning.
               */
              is_allowed_to_fine_tune: boolean;
              /**
               * Language
               * @description Language code (e.g., 'en') of the language model for fine-tuning, if applicable.
               * @default null
               */
              language: string | null;
              /**
               * ManualVerification
               * @description Details of the manual verification process for this voice, if initiated or completed.
               * @default null
               */
              manual_verification: {
                  /**
                   * Extra Text
                   * @description Additional text or notes provided with the manual verification request.
                   */
                  extra_text: string;
                  /**
                   * Files
                   * @description List of files submitted as part of this manual verification process.
                   */
                  files: {
                      /**
                       * File Id
                       * @description Unique ID for this file.
                       */
                      file_id: string;
                      /**
                       * File Name
                       * @description Original name of the file.
                       */
                      file_name: string;
                      /**
                       * Mime Type
                       * @description MIME type of the file (e.g., 'audio/mpeg', 'application/json').
                       */
                      mime_type: string;
                      /**
                       * Size Bytes
                       * @description Size of the file in bytes.
                       */
                      size_bytes: number;
                      /**
                       * Upload Date Unix
                       * @description Unix timestamp of when the file was uploaded.
                       */
                      upload_date_unix: number;
                  }[];
                  /**
                   * Request Time Unix
                   * @description Unix timestamp of when manual verification was requested.
                   */
                  request_time_unix: number;
              } | null;
              /**
               * Manual Verification Requested
               * @description Indicates if manual verification for fine-tuning eligibility has been requested.
               */
              manual_verification_requested: boolean;
              /**
               * Message
               * @description Human-readable message about the current fine-tuning process.
               * @default null
               */
              message: string | null;
              /**
               * Slice Ids
               * @description Sample IDs (slice IDs) used for the fine-tuning process of this voice.
               * @default null
               */
              slice_ids: string[] | null;
              /**
               * Verification Attempts
               * @description All verification attempts made for fine-tuning this voice.
               * @default null
               */
              verification_attempts: {
                  /**
                   * Accepted
                   * @description Indicates if this verification attempt was accepted as valid.
                   */
                  accepted: boolean;
                  /**
                   * Date Unix
                   * @description Unix timestamp of when this verification attempt was made.
                   */
                  date_unix: number;
                  /**
                   * Levenshtein Distance
                   * @description Levenshtein distance between expected and provided transcriptions for this attempt.
                   */
                  levenshtein_distance: number;
                  /**
                   * Recording
                   * @description Details of the audio recording used for this verification attempt, if available.
                   * @default null
                   */
                  recording: {
                      /**
                       * Mime Type
                       * @description MIME type of the recording's audio file (e.g., 'audio/webm').
                       */
                      mime_type: string;
                      /**
                       * Recording Id
                       * @description Unique ID for the audio recording.
                       */
                      recording_id: string;
                      /**
                       * Size Bytes
                       * @description Size of the recording's audio file in bytes.
                       */
                      size_bytes: number;
                      /**
                       * Transcription
                       * @description Text transcription of the recording's audio content.
                       */
                      transcription: string;
                      /**
                       * Upload Date Unix
                       * @description Unix timestamp of when the recording was uploaded.
                       */
                      upload_date_unix: number;
                  } | null;
                  /**
                   * Similarity
                   * @description Similarity score (0.0-1.0) between provided and reference audio for this attempt.
                   */
                  similarity: number;
                  /**
                   * Text
                   * @description Text content spoken or used during this verification attempt.
                   */
                  text: string;
              }[] | null;
              /**
               * Verification Attempts Count
               * @description Total fine-tuning verification attempts made for this voice.
               */
              verification_attempts_count: number;
              /**
               * Verification Failures
               * @description Reasons for any failed fine-tuning verification attempts for this voice.
               */
              verification_failures: string[];
          };
          /**
           * High Quality Base Model Ids
           * @description IDs of compatible high-quality base models for enhanced audio output.
           */
          high_quality_base_model_ids: string[];
          /**
           * Labels
           * @description Key-value labels for categorization or tags (e.g., {'accent': 'american', 'age': 'adult'}).
           */
          labels: {
              [key: string]: string;
          };
          /**
           * Name
           * @description Display name assigned to this voice.
           */
          name: string;
          /**
           * Owner Id
           * @description User ID of the account owning this voice; may not be present for premade voices.
           * @default null
           */
          owner_id: string | null;
          /**
           * Permission On Resource
           * @description Authenticated user's permission level on this voice (e.g., 'can_edit'); null if not applicable.
           * @default null
           */
          permission_on_resource: string | null;
          /**
           * Preview Url
           * @description Publicly accessible URL for an audio preview of the voice.
           */
          preview_url: string;
          /**
           * SafetyControl
           * @description Current safety control status (e.g., 'BAN', 'NONE'); null if not applicable.
           * @default null
           * @enum {string|null}
           */
          safety_control: "NONE" | "BAN" | "CAPTCHA" | "CAPTCHA_AND_MODERATION" | null;
          /**
           * Samples
           * @description Audio samples demonstrating the voice's characteristics and quality.
           */
          samples: {
              /**
               * File Name
               * @description Original name of the voice sample's audio file.
               */
              file_name: string;
              /**
               * Hash
               * @description Hash of the voice sample file for integrity or identification.
               */
              hash: string;
              /**
               * Mime Type
               * @description MIME type of the voice sample's audio file (e.g., 'audio/mpeg').
               */
              mime_type: string;
              /**
               * Sample Id
               * @description Unique ID for the voice sample.
               */
              sample_id: string;
              /**
               * Size Bytes
               * @description Size of the voice sample's audio file in bytes.
               */
              size_bytes: number;
          }[];
          /**
           * Settings
           * @description Default voice generation settings (stability, similarity boost, etc.) for this voice.
           */
          settings: {
              /**
               * Similarity Boost
               * @description Controls similarity to original voice (0.0-1.0); higher increases similarity.
               */
              similarity_boost: number;
              /**
               * Stability
               * @description Controls voice stability (0.0-1.0); higher is more consistent, less expressive.
               */
              stability: number;
              /**
               * Style
               * @description Controls intensity of the voice's speaking style or prosody (typically 0.0-1.0).
               * @default 0
               */
              style: number | null;
              /**
               * Use Speaker Boost
               * @description Indicates if speaker boost is enabled to enhance speaker similarity and clarity.
               * @default true
               */
              use_speaker_boost: boolean | null;
          };
          /**
           * Sharing
           * @description Metadata for sharing status and configuration, if shared; null otherwise.
           */
          sharing: {
              /**
               * Ban Reason
               * @description Reason for the sharing ban on this voice, if applicable; empty if not banned.
               */
              ban_reason: string;
              /**
               * Category
               * @description Category under which this voice is shared (e.g., 'generated', 'professional').
               * @enum {string}
               */
              category: "generated" | "professional" | "high_quality";
              /**
               * Cloned By Count
               * @description Total number of times this shared voice has been cloned by other users.
               */
              cloned_by_count: number;
              /**
               * Date Unix
               * @description Unix timestamp of the last update to sharing status or details.
               */
              date_unix: number;
              /**
               * Description
               * @description Textual description of the shared voice, its characteristics, or suggested uses.
               */
              description: string;
              /**
               * Disable At Unix
               * @description Unix timestamp for automatic disabling of voice sharing; 0 if not set.
               */
              disable_at_unix: number;
              /**
               * Enabled In Library
               * @description Indicates if the voice is enabled and visible in the main voice library.
               */
              enabled_in_library: boolean;
              /**
               * Featured
               * @description Indicates if this voice is currently featured in the voice library/marketplace.
               */
              featured: boolean;
              /**
               * Financial Rewards Enabled
               * @description Indicates if the owner is eligible for financial rewards from voice usage.
               */
              financial_rewards_enabled: boolean;
              /**
               * Free Users Allowed
               * @description Indicates if users on free tiers are permitted to use this voice.
               */
              free_users_allowed: boolean;
              /**
               * History Item Sample Id
               * @description ID of a representative history item sample for this shared voice.
               */
              history_item_sample_id: string;
              /**
               * Instagram Username
               * @description Instagram username of the voice owner/creator, if provided.
               * @default null
               */
              instagram_username: string | null;
              /**
               * Labels
               * @description Key-value labels for the shared voice (e.g., {'accent': 'british', 'gender': 'female'}).
               */
              labels: {
                  [key: string]: string;
              };
              /**
               * Liked By Count
               * @description Total number of users who have 'liked' or favorited this shared voice.
               */
              liked_by_count: number;
              /**
               * Live Moderation Enabled
               * @description Indicates if live moderation is active for content generated with this voice.
               */
              live_moderation_enabled: boolean;
              /**
               * Name
               * @description Display name of the shared voice as it appears to users.
               */
              name: string;
              /**
               * Notice Period
               * @description Notice period in seconds before changes (e.g., disabling) take effect; 0 if not applicable.
               */
              notice_period: number;
              /**
               * Original Voice Id
               * @description ID of the original voice, if this is a cloned or shared version.
               */
              original_voice_id: string;
              /**
               * Public Owner Id
               * @description Public ID of the user who owns this voice.
               */
              public_owner_id: string;
              /**
               * Rate
               * @description Rate or cost (e.g., per character/second) for using this voice, if applicable.
               */
              rate: number;
              /**
               * Reader App Enabled
               * @description Indicates if this voice is enabled for use in reader applications or similar TTS tools.
               */
              reader_app_enabled: boolean;
              /**
               * Review Message
               * @description Message related to the review status; empty if no message.
               */
              review_message: string;
              /**
               * Review Status
               * @description Current review status for this shared voice (e.g., 'not_requested', 'pending').
               * @enum {string}
               */
              review_status: "not_requested" | "pending" | "declined" | "allowed" | "allowed_with_changes";
              /**
               * Status
               * @description Current sharing status of the voice (e.g., 'enabled', 'disabled').
               * @enum {string}
               */
              status: "enabled" | "disabled" | "copied" | "copied_disabled";
              /**
               * Tiktok Username
               * @description TikTok username of the voice owner/creator, if provided.
               * @default null
               */
              tiktok_username: string | null;
              /**
               * Twitter Username
               * @description Twitter username of the voice owner/creator, if provided.
               * @default null
               */
              twitter_username: string | null;
              /**
               * Voice Mixing Allowed
               * @description Indicates if this voice can be mixed or blended with other voices.
               */
              voice_mixing_allowed: boolean;
              /**
               * Whitelisted Emails
               * @description Email addresses permitted to access this voice if not publicly available.
               */
              whitelisted_emails: string[];
              /**
               * Youtube Username
               * @description YouTube username of the voice owner/creator, if provided.
               * @default null
               */
              youtube_username: string | null;
          } | null;
          /**
           * Voice Id
           * @description Unique ID for this voice.
           */
          voice_id: string;
          /**
           * VoiceVerification
           * @description Metadata for voice verification status; null if not applicable.
           * @default null
           */
          voice_verification: {
              /**
               * Is Verified
               * @description Indicates if the voice has successfully passed the verification process.
               */
              is_verified: boolean;
              /**
               * Language
               * @description Language code (e.g., 'en') for voice verification, if applicable.
               * @default null
               */
              language: string | null;
              /**
               * Requires Verification
               * @description Indicates if the voice requires verification before full use or access.
               */
              requires_verification: boolean;
              /**
               * Verification Attempts
               * @description All individual verification attempts made for this voice.
               * @default null
               */
              verification_attempts: {
                  /**
                   * Accepted
                   * @description Indicates if this voice verification attempt was accepted.
                   */
                  accepted: boolean;
                  /**
                   * Date Unix
                   * @description Unix timestamp of when this voice verification attempt was made.
                   */
                  date_unix: number;
                  /**
                   * Levenshtein Distance
                   * @description Levenshtein distance for this voice verification attempt.
                   */
                  levenshtein_distance: number;
                  /**
                   * Recording
                   * @description Details of the audio recording used for voice verification, if available.
                   * @default null
                   */
                  recording: {
                      /**
                       * Mime Type
                       * @description MIME type of the recording's audio file (e.g., 'audio/webm').
                       */
                      mime_type: string;
                      /**
                       * Recording Id
                       * @description Unique ID for the audio recording.
                       */
                      recording_id: string;
                      /**
                       * Size Bytes
                       * @description Size of the recording's audio file in bytes.
                       */
                      size_bytes: number;
                      /**
                       * Transcription
                       * @description Text transcription of the recording's audio content.
                       */
                      transcription: string;
                      /**
                       * Upload Date Unix
                       * @description Unix timestamp of when the recording was uploaded.
                       */
                      upload_date_unix: number;
                  } | null;
                  /**
                   * Similarity
                   * @description Similarity score (0.0-1.0) for this voice verification attempt.
                   */
                  similarity: number;
                  /**
                   * Text
                   * @description Text content spoken or used for this voice verification attempt.
                   */
                  text: string;
              }[] | null;
              /**
               * Verification Attempts Count
               * @description Total verification attempts made for this specific voice.
               */
              verification_attempts_count: number;
              /**
               * Verification Failures
               * @description Reasons for any failed attempts to verify this voice.
               */
              verification_failures: string[];
          } | null;
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
 * Type of ELEVENLABS's ELEVENLABS_GET_VOICES_V_1_VOICES_GET tool input.
 */
type ELEVENLABS_GET_VOICES_V_1_VOICES_GET_INPUT = object;

/**
 * Type of ELEVENLABS's ELEVENLABS_GET_VOICES_V_1_VOICES_GET tool output.
 */
type ELEVENLABS_GET_VOICES_V_1_VOICES_GET_OUTPUT = {
  /**
   * Data
   * @description Primary data payload containing the list of available voices.
   */
  data?: {
      /**
       * Voices
       * @description List of Voice objects, each representing an available voice with its details.
       */
      voices: {
          /**
           * Available For Tiers
           * @description Subscription tier names or IDs that have access to use this voice.
           */
          available_for_tiers: string[];
          /**
           * Category
           * @description Category of the voice (e.g., 'cloned', 'premade', 'generated').
           */
          category: string;
          /**
           * Description
           * @description Textual description of the voice, its characteristics, style, or intended uses.
           */
          description: string;
          /**
           * Fine Tuning
           * @description Metadata for the fine-tuning status, progress, and history of this voice.
           */
          fine_tuning: {
              /**
               * Dataset Duration Seconds
               * @description Total duration (seconds) of the audio dataset used for fine-tuning.
               * @default null
               */
              dataset_duration_seconds: number | null;
              /**
               * Finetuning Progress
               * @description Progress of fine-tuning stages (e.g., {'transcription_alignment': 0.5}).
               * @default null
               */
              finetuning_progress: {
                  [key: string]: number;
              } | null;
              /**
               * Finetuning State
               * @description Current stage of the fine-tuning process for this voice.
               * @enum {string}
               */
              finetuning_state: "not_started" | "queued" | "fine_tuning" | "fine_tuned" | "failed" | "delayed";
              /**
               * Is Allowed To Fine Tune
               * @description Indicates if the voice is currently eligible for fine-tuning.
               */
              is_allowed_to_fine_tune: boolean;
              /**
               * Language
               * @description Language code (e.g., 'en') of the language model for fine-tuning, if applicable.
               * @default null
               */
              language: string | null;
              /**
               * ManualVerification
               * @description Details of the manual verification process for this voice, if initiated or completed.
               * @default null
               */
              manual_verification: {
                  /**
                   * Extra Text
                   * @description Additional text or notes provided with the manual verification request.
                   */
                  extra_text: string;
                  /**
                   * Files
                   * @description List of files submitted as part of this manual verification process.
                   */
                  files: {
                      /**
                       * File Id
                       * @description Unique ID for this file.
                       */
                      file_id: string;
                      /**
                       * File Name
                       * @description Original name of the file.
                       */
                      file_name: string;
                      /**
                       * Mime Type
                       * @description MIME type of the file (e.g., 'audio/mpeg', 'application/json').
                       */
                      mime_type: string;
                      /**
                       * Size Bytes
                       * @description Size of the file in bytes.
                       */
                      size_bytes: number;
                      /**
                       * Upload Date Unix
                       * @description Unix timestamp of when the file was uploaded.
                       */
                      upload_date_unix: number;
                  }[];
                  /**
                   * Request Time Unix
                   * @description Unix timestamp of when manual verification was requested.
                   */
                  request_time_unix: number;
              } | null;
              /**
               * Manual Verification Requested
               * @description Indicates if manual verification for fine-tuning eligibility has been requested.
               */
              manual_verification_requested: boolean;
              /**
               * Message
               * @description Human-readable message about the current fine-tuning process.
               * @default null
               */
              message: string | null;
              /**
               * Slice Ids
               * @description Sample IDs (slice IDs) used for the fine-tuning process of this voice.
               * @default null
               */
              slice_ids: string[] | null;
              /**
               * Verification Attempts
               * @description All verification attempts made for fine-tuning this voice.
               * @default null
               */
              verification_attempts: {
                  /**
                   * Accepted
                   * @description Indicates if this verification attempt was accepted as valid.
                   */
                  accepted: boolean;
                  /**
                   * Date Unix
                   * @description Unix timestamp of when this verification attempt was made.
                   */
                  date_unix: number;
                  /**
                   * Levenshtein Distance
                   * @description Levenshtein distance between expected and provided transcriptions for this attempt.
                   */
                  levenshtein_distance: number;
                  /**
                   * Recording
                   * @description Details of the audio recording used for this verification attempt, if available.
                   * @default null
                   */
                  recording: {
                      /**
                       * Mime Type
                       * @description MIME type of the recording's audio file (e.g., 'audio/webm').
                       */
                      mime_type: string;
                      /**
                       * Recording Id
                       * @description Unique ID for the audio recording.
                       */
                      recording_id: string;
                      /**
                       * Size Bytes
                       * @description Size of the recording's audio file in bytes.
                       */
                      size_bytes: number;
                      /**
                       * Transcription
                       * @description Text transcription of the recording's audio content.
                       */
                      transcription: string;
                      /**
                       * Upload Date Unix
                       * @description Unix timestamp of when the recording was uploaded.
                       */
                      upload_date_unix: number;
                  } | null;
                  /**
                   * Similarity
                   * @description Similarity score (0.0-1.0) between provided and reference audio for this attempt.
                   */
                  similarity: number;
                  /**
                   * Text
                   * @description Text content spoken or used during this verification attempt.
                   */
                  text: string;
              }[] | null;
              /**
               * Verification Attempts Count
               * @description Total fine-tuning verification attempts made for this voice.
               */
              verification_attempts_count: number;
              /**
               * Verification Failures
               * @description Reasons for any failed fine-tuning verification attempts for this voice.
               */
              verification_failures: string[];
          };
          /**
           * High Quality Base Model Ids
           * @description IDs of compatible high-quality base models for enhanced audio output.
           */
          high_quality_base_model_ids: string[];
          /**
           * Labels
           * @description Key-value labels for categorization or tags (e.g., {'accent': 'american', 'age': 'adult'}).
           */
          labels: {
              [key: string]: string;
          };
          /**
           * Name
           * @description Display name assigned to this voice.
           */
          name: string;
          /**
           * Owner Id
           * @description User ID of the account owning this voice; may not be present for premade voices.
           * @default null
           */
          owner_id: string | null;
          /**
           * Permission On Resource
           * @description Authenticated user's permission level on this voice (e.g., 'can_edit'); null if not applicable.
           * @default null
           */
          permission_on_resource: string | null;
          /**
           * Preview Url
           * @description Publicly accessible URL for an audio preview of the voice.
           */
          preview_url: string;
          /**
           * SafetyControl
           * @description Current safety control status (e.g., 'BAN', 'NONE'); null if not applicable.
           * @default null
           * @enum {string|null}
           */
          safety_control: "NONE" | "BAN" | "CAPTCHA" | "CAPTCHA_AND_MODERATION" | null;
          /**
           * Samples
           * @description Audio samples demonstrating the voice's characteristics and quality.
           */
          samples: {
              /**
               * File Name
               * @description Original name of the voice sample's audio file.
               */
              file_name: string;
              /**
               * Hash
               * @description Hash of the voice sample file for integrity or identification.
               */
              hash: string;
              /**
               * Mime Type
               * @description MIME type of the voice sample's audio file (e.g., 'audio/mpeg').
               */
              mime_type: string;
              /**
               * Sample Id
               * @description Unique ID for the voice sample.
               */
              sample_id: string;
              /**
               * Size Bytes
               * @description Size of the voice sample's audio file in bytes.
               */
              size_bytes: number;
          }[];
          /**
           * Settings
           * @description Default voice generation settings (stability, similarity boost, etc.) for this voice.
           */
          settings: {
              /**
               * Similarity Boost
               * @description Controls similarity to original voice (0.0-1.0); higher increases similarity.
               */
              similarity_boost: number;
              /**
               * Stability
               * @description Controls voice stability (0.0-1.0); higher is more consistent, less expressive.
               */
              stability: number;
              /**
               * Style
               * @description Controls intensity of the voice's speaking style or prosody (typically 0.0-1.0).
               * @default 0
               */
              style: number | null;
              /**
               * Use Speaker Boost
               * @description Indicates if speaker boost is enabled to enhance speaker similarity and clarity.
               * @default true
               */
              use_speaker_boost: boolean | null;
          };
          /**
           * Sharing
           * @description Metadata for sharing status and configuration, if shared; null otherwise.
           */
          sharing: {
              /**
               * Ban Reason
               * @description Reason for the sharing ban on this voice, if applicable; empty if not banned.
               */
              ban_reason: string;
              /**
               * Category
               * @description Category under which this voice is shared (e.g., 'generated', 'professional').
               * @enum {string}
               */
              category: "generated" | "professional" | "high_quality";
              /**
               * Cloned By Count
               * @description Total number of times this shared voice has been cloned by other users.
               */
              cloned_by_count: number;
              /**
               * Date Unix
               * @description Unix timestamp of the last update to sharing status or details.
               */
              date_unix: number;
              /**
               * Description
               * @description Textual description of the shared voice, its characteristics, or suggested uses.
               */
              description: string;
              /**
               * Disable At Unix
               * @description Unix timestamp for automatic disabling of voice sharing; 0 if not set.
               */
              disable_at_unix: number;
              /**
               * Enabled In Library
               * @description Indicates if the voice is enabled and visible in the main voice library.
               */
              enabled_in_library: boolean;
              /**
               * Featured
               * @description Indicates if this voice is currently featured in the voice library/marketplace.
               */
              featured: boolean;
              /**
               * Financial Rewards Enabled
               * @description Indicates if the owner is eligible for financial rewards from voice usage.
               */
              financial_rewards_enabled: boolean;
              /**
               * Free Users Allowed
               * @description Indicates if users on free tiers are permitted to use this voice.
               */
              free_users_allowed: boolean;
              /**
               * History Item Sample Id
               * @description ID of a representative history item sample for this shared voice.
               */
              history_item_sample_id: string;
              /**
               * Instagram Username
               * @description Instagram username of the voice owner/creator, if provided.
               * @default null
               */
              instagram_username: string | null;
              /**
               * Labels
               * @description Key-value labels for the shared voice (e.g., {'accent': 'british', 'gender': 'female'}).
               */
              labels: {
                  [key: string]: string;
              };
              /**
               * Liked By Count
               * @description Total number of users who have 'liked' or favorited this shared voice.
               */
              liked_by_count: number;
              /**
               * Live Moderation Enabled
               * @description Indicates if live moderation is active for content generated with this voice.
               */
              live_moderation_enabled: boolean;
              /**
               * Name
               * @description Display name of the shared voice as it appears to users.
               */
              name: string;
              /**
               * Notice Period
               * @description Notice period in seconds before changes (e.g., disabling) take effect; 0 if not applicable.
               */
              notice_period: number;
              /**
               * Original Voice Id
               * @description ID of the original voice, if this is a cloned or shared version.
               */
              original_voice_id: string;
              /**
               * Public Owner Id
               * @description Public ID of the user who owns this voice.
               */
              public_owner_id: string;
              /**
               * Rate
               * @description Rate or cost (e.g., per character/second) for using this voice, if applicable.
               */
              rate: number;
              /**
               * Reader App Enabled
               * @description Indicates if this voice is enabled for use in reader applications or similar TTS tools.
               */
              reader_app_enabled: boolean;
              /**
               * Review Message
               * @description Message related to the review status; empty if no message.
               */
              review_message: string;
              /**
               * Review Status
               * @description Current review status for this shared voice (e.g., 'not_requested', 'pending').
               * @enum {string}
               */
              review_status: "not_requested" | "pending" | "declined" | "allowed" | "allowed_with_changes";
              /**
               * Status
               * @description Current sharing status of the voice (e.g., 'enabled', 'disabled').
               * @enum {string}
               */
              status: "enabled" | "disabled" | "copied" | "copied_disabled";
              /**
               * Tiktok Username
               * @description TikTok username of the voice owner/creator, if provided.
               * @default null
               */
              tiktok_username: string | null;
              /**
               * Twitter Username
               * @description Twitter username of the voice owner/creator, if provided.
               * @default null
               */
              twitter_username: string | null;
              /**
               * Voice Mixing Allowed
               * @description Indicates if this voice can be mixed or blended with other voices.
               */
              voice_mixing_allowed: boolean;
              /**
               * Whitelisted Emails
               * @description Email addresses permitted to access this voice if not publicly available.
               */
              whitelisted_emails: string[];
              /**
               * Youtube Username
               * @description YouTube username of the voice owner/creator, if provided.
               * @default null
               */
              youtube_username: string | null;
          } | null;
          /**
           * Voice Id
           * @description Unique ID for this voice.
           */
          voice_id: string;
          /**
           * VoiceVerification
           * @description Metadata for voice verification status; null if not applicable.
           * @default null
           */
          voice_verification: {
              /**
               * Is Verified
               * @description Indicates if the voice has successfully passed the verification process.
               */
              is_verified: boolean;
              /**
               * Language
               * @description Language code (e.g., 'en') for voice verification, if applicable.
               * @default null
               */
              language: string | null;
              /**
               * Requires Verification
               * @description Indicates if the voice requires verification before full use or access.
               */
              requires_verification: boolean;
              /**
               * Verification Attempts
               * @description All individual verification attempts made for this voice.
               * @default null
               */
              verification_attempts: {
                  /**
                   * Accepted
                   * @description Indicates if this voice verification attempt was accepted.
                   */
                  accepted: boolean;
                  /**
                   * Date Unix
                   * @description Unix timestamp of when this voice verification attempt was made.
                   */
                  date_unix: number;
                  /**
                   * Levenshtein Distance
                   * @description Levenshtein distance for this voice verification attempt.
                   */
                  levenshtein_distance: number;
                  /**
                   * Recording
                   * @description Details of the audio recording used for voice verification, if available.
                   * @default null
                   */
                  recording: {
                      /**
                       * Mime Type
                       * @description MIME type of the recording's audio file (e.g., 'audio/webm').
                       */
                      mime_type: string;
                      /**
                       * Recording Id
                       * @description Unique ID for the audio recording.
                       */
                      recording_id: string;
                      /**
                       * Size Bytes
                       * @description Size of the recording's audio file in bytes.
                       */
                      size_bytes: number;
                      /**
                       * Transcription
                       * @description Text transcription of the recording's audio content.
                       */
                      transcription: string;
                      /**
                       * Upload Date Unix
                       * @description Unix timestamp of when the recording was uploaded.
                       */
                      upload_date_unix: number;
                  } | null;
                  /**
                   * Similarity
                   * @description Similarity score (0.0-1.0) for this voice verification attempt.
                   */
                  similarity: number;
                  /**
                   * Text
                   * @description Text content spoken or used for this voice verification attempt.
                   */
                  text: string;
              }[] | null;
              /**
               * Verification Attempts Count
               * @description Total verification attempts made for this specific voice.
               */
              verification_attempts_count: number;
              /**
               * Verification Failures
               * @description Reasons for any failed attempts to verify this voice.
               */
              verification_failures: string[];
          } | null;
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
 * Type of ELEVENLABS's ELEVENLABS_GET_VOICE_SETTINGS tool input.
 */
type ELEVENLABS_GET_VOICE_SETTINGS_INPUT = {
  /**
   * Voice Id
   * @description Identifier of the voice for which to retrieve settings. A list of available voice IDs can be obtained from the /v1/voices endpoint.
   */
  voice_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_GET_VOICE_SETTINGS tool output.
 */
type ELEVENLABS_GET_VOICE_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description The current voice settings, including stability, similarity boost, style exaggeration, and speaker boost status.
   */
  data?: {
      /**
       * Similarity Boost
       * @description Voice similarity boost setting. Higher values (range 0.0 to 1.0) make the AI voice closely match the original, but can introduce artifacts. Lower values create a more distinct voice, potentially less natural.
       */
      similarity_boost: number;
      /**
       * Stability
       * @description Voice stability setting. Higher values (range 0.0 to 1.0) result in more consistent speech, potentially more monotonous. Lower values increase expressiveness but may cause instability.
       */
      stability: number;
      /**
       * Style
       * @description Voice style exaggeration setting (range 0.0 to 1.0). Higher values yield a more expressive performance; lower values produce a more neutral tone. This parameter is optional and defaults to 0. It may only be applicable to certain voice models (e.g., V1 models).
       * @default 0
       */
      style: number | null;
      /**
       * Use Speaker Boost
       * @description Indicates if speaker boost is applied to enhance voice clarity and power. This is an optional boolean setting, defaulting to true. Recommended for use with challenging audio inputs.
       * @default true
       */
      use_speaker_boost: boolean | null;
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
 * Type of ELEVENLABS's ELEVENLABS_REDIRECT_TO_MINTLIFY tool input.
 */
type ELEVENLABS_REDIRECT_TO_MINTLIFY_INPUT = object;

/**
 * Type of ELEVENLABS's ELEVENLABS_REDIRECT_TO_MINTLIFY tool output.
 */
type ELEVENLABS_REDIRECT_TO_MINTLIFY_OUTPUT = {
  /**
   * Data
   * @description The content of the ElevenLabs API documentation page. This is typically HTML or a structured representation of the API specification.
   */
  data?: unknown;
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
 * Type of ELEVENLABS's ELEVENLABS_REMOVE_RULES_FROM_THE_PRONUNCIATION_DICTIONARY tool input.
 */
type ELEVENLABS_REMOVE_RULES_FROM_THE_PRONUNCIATION_DICTIONARY_INPUT = {
  /**
   * Pronunciation Dictionary Id
   * @description Identifier of the pronunciation dictionary from which rules will be removed.
   */
  pronunciation_dictionary_id?: string;
  /**
   * Rule Strings
   * @description A list of exact pronunciation rule strings to be removed from the dictionary (e.g., 'word -> wɜːd'). Non-matching strings will be ignored.
   */
  rule_strings?: string[];
};

/**
 * Type of ELEVENLABS's ELEVENLABS_REMOVE_RULES_FROM_THE_PRONUNCIATION_DICTIONARY tool output.
 */
type ELEVENLABS_REMOVE_RULES_FROM_THE_PRONUNCIATION_DICTIONARY_OUTPUT = {
  /**
   * Data
   * @description Contains details of the modified pronunciation dictionary, including its ID and new version ID, confirming the successful removal of rules.
   */
  data?: {
      /**
       * Id
       * @description The identifier of the pronunciation dictionary that was modified.
       */
      id: string;
      /**
       * Version Id
       * @description The new version identifier of the pronunciation dictionary after the rules have been successfully removed.
       */
      version_id: string;
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
 * Type of ELEVENLABS's ELEVENLABS_SPEECH_TO_SPEECH tool input.
 */
type ELEVENLABS_SPEECH_TO_SPEECH_INPUT = {
  /**
   * Audio
   * Format: binary
   * @description The audio file to be converted.
   */
  audio?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
  /**
   * Model Id
   * @description Identifier of the model. Must support speech-to-speech (where `can_do_voice_conversion` is true). Use /v1/models to list models.
   * @default eleven_english_sts_v2
   */
  model_id: string;
  /**
   * Optimize Streaming Latency
   * @description Latency optimization. Higher values reduce latency but may lower quality. Options: 0 (no optimizations), 1 (normal), 2 (strong), 3 (max), 4 (max, text normalizer disabled; best latency, can mispronounce numbers/dates).
   * @default 0
   */
  optimize_streaming_latency: number;
  /**
   * Output Format
   * @description Output audio format. Supported options:
   *     mp3_22050_32 (MP3 22.05kHz, 32kbps),
   *     mp3_44100_32 (MP3 44.1kHz, 32kbps),
   *     mp3_44100_64 (MP3 44.1kHz, 64kbps),
   *     mp3_44100_96 (MP3 44.1kHz, 96kbps),
   *     mp3_44100_128 (MP3 44.1kHz, 128kbps),
   *     mp3_44100_192 (MP3 44.1kHz, 192kbps; Requires Creator tier or above),
   *     pcm_16000 (PCM S16LE 16kHz),
   *     pcm_22050 (PCM S16LE 22.05kHz),
   *     pcm_24000 (PCM S16LE 24kHz),
   *     pcm_44100 (PCM S16LE 44.1kHz; Requires Pro tier or above),
   *     ulaw_8000 (μ-law 8kHz; for Twilio audio inputs).
   * @default mp3_44100_128
   */
  output_format: string;
  /**
   * Seed
   * @description Seed for deterministic audio generation (integer 0-4294967295). Same seed and parameters yield same audio.
   */
  seed?: number;
  /**
   * Voice Id
   * @description Identifier of the voice to be used. Available voices can be retrieved using the /v1/voices endpoint.
   */
  voice_id?: string;
  /**
   * Voice Settings
   * @description JSON string defining voice settings, such as `stability` (float) and `similarity_boost` (float).
   */
  voice_settings?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_SPEECH_TO_SPEECH tool output.
 */
type ELEVENLABS_SPEECH_TO_SPEECH_OUTPUT = {
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
 * Type of ELEVENLABS's ELEVENLABS_SPEECH_TO_SPEECH_STREAMING tool input.
 */
type ELEVENLABS_SPEECH_TO_SPEECH_STREAMING_INPUT = {
  /**
   * Audio
   * Format: binary
   * @description The input audio file (e.g., .wav, .mp3) to be converted. This is the speech that will be transformed into the specified voice.
   */
  audio?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
  /**
   * Model Id
   * @description Identifier of the speech-to-speech model (e.g., 'eleven_english_sts_v2'). Ensure the chosen model supports voice conversion. Available models can be fetched from the `/v1/models` endpoint.
   * @default eleven_english_sts_v2
   */
  model_id: string;
  /**
   * Optimize Streaming Latency
   * @description Controls latency optimizations for streaming audio. Higher values offer lower latency at a potential cost to audio quality. Supported values:
   *     0: Default mode (no latency optimizations).
   *     1: Normal latency optimizations (provides about 50% of the latency improvement of option 3).
   *     2: Strong latency optimizations (provides about 75% of the latency improvement of option 3).
   *     3: Maximum latency optimizations.
   *     4: Maximum latency optimizations, with text normalizer turned off (can mispronounce numbers and dates but offers the best latency).
   * @default 0
   */
  optimize_streaming_latency: number;
  /**
   * Output Format
   * @description Desired output audio stream format. Supported formats include:
   *     'mp3_22050_32': MP3 22.05kHz 32kbps.
   *     'mp3_44100_32': MP3 44.1kHz 32kbps.
   *     'mp3_44100_64': MP3 44.1kHz 64kbps.
   *     'mp3_44100_96': MP3 44.1kHz 96kbps.
   *     'mp3_44100_128': MP3 44.1kHz 128kbps.
   *     'mp3_44100_192': MP3 44.1kHz 192kbps (requires Creator tier or above).
   *     'pcm_16000': PCM (S16LE) 16kHz.
   *     'pcm_22050': PCM (S16LE) 22.05kHz.
   *     'pcm_24000': PCM (S16LE) 24kHz.
   *     'pcm_44100': PCM (S16LE) 44.1kHz (requires Pro tier or above).
   *     'ulaw_8000': μ-law 8kHz (commonly used for Twilio audio inputs).
   * @default mp3_44100_128
   */
  output_format: string;
  /**
   * Seed
   * @description An integer seed for deterministic audio generation. Using the same seed with identical input parameters aims to produce the same audio output, aiding reproducibility.
   */
  seed?: number;
  /**
   * Voice Id
   * @description Identifier for the voice to be used. A list of available voices can be fetched from the `https://api.elevenlabs.io/v1/voices` endpoint.
   */
  voice_id?: string;
  /**
   * Voice Settings
   * @description A JSON string containing voice settings, such as stability and similarity_boost, to fine-tune the characteristics of the generated voice. Example: '{"stability": 0.5, "similarity_boost": 0.75}'. If not provided, the default voice settings for the selected voice will be used.
   */
  voice_settings?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_SPEECH_TO_SPEECH_STREAMING tool output.
 */
type ELEVENLABS_SPEECH_TO_SPEECH_STREAMING_OUTPUT = {
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
 * Type of ELEVENLABS's ELEVENLABS_STREAMS_ARCHIVE_WITH_PROJECT_AUDIO tool input.
 */
type ELEVENLABS_STREAMS_ARCHIVE_WITH_PROJECT_AUDIO_INPUT = {
  /**
   * Project Id
   * @description The ID of the project whose snapshot is to be archived.
   */
  project_id?: string;
  /**
   * Project Snapshot Id
   * @description The ID of the project snapshot to archive.
   */
  project_snapshot_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_STREAMS_ARCHIVE_WITH_PROJECT_AUDIO tool output.
 */
type ELEVENLABS_STREAMS_ARCHIVE_WITH_PROJECT_AUDIO_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the result of the archive operation, typically including a status confirmation.
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
 * Type of ELEVENLABS's ELEVENLABS_STREAM_CHAPTER_AUDIO tool input.
 */
type ELEVENLABS_STREAM_CHAPTER_AUDIO_INPUT = {
  /**
   * Chapter Id
   * @description Identifier of the chapter. To list available chapters for a specific project, use the GET /v1/projects/{project_id}/chapters endpoint.
   */
  chapter_id?: string;
  /**
   * Chapter Snapshot Id
   * @description Identifier of the chapter snapshot (a specific version of the chapter). To list all available snapshots for a chapter, use the GET /v1/projects/{project_id}/chapters/{chapter_id}/snapshots endpoint.
   */
  chapter_snapshot_id?: string;
  /**
   * Convert To Mpeg
   * @description If true, the output audio stream will be converted to MPEG format. If false, the audio will be streamed in its original format (likely PCM).
   * @default false
   */
  convert_to_mpeg: boolean;
  /**
   * Project Id
   * @description Identifier of the project. To find available project IDs, you can list all projects using the GET /v1/projects endpoint.
   */
  project_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_STREAM_CHAPTER_AUDIO tool output.
 */
type ELEVENLABS_STREAM_CHAPTER_AUDIO_OUTPUT = {
  /**
   * Data
   * @description A dictionary that may contain metadata or status information related to the audio stream. The actual audio content is streamed directly as the response body of the HTTP request.
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
 * Type of ELEVENLABS's ELEVENLABS_STREAM_PROJECT_AUDIO tool input.
 */
type ELEVENLABS_STREAM_PROJECT_AUDIO_INPUT = {
  /**
   * Convert To Mpeg
   * @description If true, converts the output audio to MPEG format; otherwise, streams in its original or a default raw format.
   * @default false
   */
  convert_to_mpeg: boolean;
  /**
   * Project Id
   * @description Identifier of the project.
   */
  project_id?: string;
  /**
   * Project Snapshot Id
   * @description Identifier of the project snapshot.
   */
  project_snapshot_id?: string;
};

/**
 * Type of ELEVENLABS's ELEVENLABS_STREAM_PROJECT_AUDIO tool output.
 */
type ELEVENLABS_STREAM_PROJECT_AUDIO_OUTPUT = {
  /**
   * Data
   * @description Contains the streamed audio byte stream and any supplementary metadata; may be empty if no metadata is returned.
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
 * Type of ELEVENLABS's ELEVENLABS_UPDATE_PRONUNCIATION_DICTIONARIES tool input.
 */
type ELEVENLABS_UPDATE_PRONUNCIATION_DICTIONARIES_INPUT = {
  /**
   * Project Id
   * @description The ID of the project to which the pronunciation dictionaries will be applied.
   */
  project_id?: string;
  /**
   * Pronunciation Dictionary Locators
   * @description List of locators, each provided as a JSON string detailing `pronunciation_dictionary_id` and `version_id`, due to form-data requirements. The ElevenLabs UI currently displays only the first applied dictionary.
   */
  pronunciation_dictionary_locators?: {
      /**
       * Pronunciation Dictionary Id
       * @description The unique identifier of the pronunciation dictionary.
       */
      pronunciation_dictionary_id: string;
      /**
       * Version Id
       * @description The unique identifier of a specific version of the pronunciation dictionary.
       */
      version_id: string;
  }[];
};

/**
 * Type of ELEVENLABS's ELEVENLABS_UPDATE_PRONUNCIATION_DICTIONARIES tool output.
 */
type ELEVENLABS_UPDATE_PRONUNCIATION_DICTIONARIES_OUTPUT = {
  /**
   * Data
   * @description Detailed API response after updating dictionaries; its structure may vary.
   */
  data?: unknown;
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
 * Type of ELEVENLABS's ELEVENLABS_VOICE_GENERATION_PARAMETERS tool input.
 */
type ELEVENLABS_VOICE_GENERATION_PARAMETERS_INPUT = object;

/**
 * Type of ELEVENLABS's ELEVENLABS_VOICE_GENERATION_PARAMETERS tool output.
 */
type ELEVENLABS_VOICE_GENERATION_PARAMETERS_OUTPUT = {
  /**
   * Data
   * @description Detailed information on available voice generation parameters, including genders, accents, ages, character limits, and accent strength ranges.
   */
  data?: {
      /**
       * Accents
       * @description A list of supported accents, each with a name and code.
       */
      accents: {
          /**
           * Code
           * @description The unique identifier or code for the accent.
           */
          code: string;
          /**
           * Name
           * @description The descriptive name of the accent.
           */
          name: string;
      }[];
      /**
       * Ages
       * @description A list of supported age groups, each with a name and code.
       */
      ages: {
          /**
           * Code
           * @description The unique identifier or code for the age group.
           */
          code: string;
          /**
           * Name
           * @description The descriptive name of the age group.
           */
          name: string;
      }[];
      /**
       * Genders
       * @description A list of supported genders, each with a name and code.
       */
      genders: {
          /**
           * Code
           * @description The unique identifier or code for the gender.
           */
          code: string;
          /**
           * Name
           * @description The descriptive name of the gender.
           */
          name: string;
      }[];
      /**
       * Maximum Accent Strength
       * @description The maximum permissible value for accent strength.
       */
      maximum_accent_strength: number;
      /**
       * Maximum Characters
       * @description The maximum number of characters allowed in the input text for voice generation.
       */
      maximum_characters: number;
      /**
       * Minimum Accent Strength
       * @description The minimum permissible value for accent strength.
       */
      minimum_accent_strength: number;
      /**
       * Minimum Characters
       * @description The minimum number of characters required in the input text for voice generation.
       */
      minimum_characters: number;
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
 * Type map of all available tool input types for toolkit "ELEVENLABS".
 */
export type ELEVENLABS_TOOL_INPUTS = {
  ADD_A_PRONUNCIATION_DICTIONARY: ELEVENLABS_ADD_A_PRONUNCIATION_DICTIONARY_INPUT
  ADD_PROJECT: ELEVENLABS_ADD_PROJECT_INPUT
  ADD_RULES_TO_THE_PRONUNCIATION_DICTIONARY: ELEVENLABS_ADD_RULES_TO_THE_PRONUNCIATION_DICTIONARY_INPUT
  ADD_SHARING_VOICE: ELEVENLABS_ADD_SHARING_VOICE_INPUT
  ADD_VOICE: ELEVENLABS_ADD_VOICE_INPUT
  CONVERT_CHAPTER: ELEVENLABS_CONVERT_CHAPTER_INPUT
  CONVERT_PROJECT: ELEVENLABS_CONVERT_PROJECT_INPUT
  CREATES_AUDIONATIVE_ENABLED_PROJECT: ELEVENLABS_CREATES_AUDIONATIVE_ENABLED_PROJECT_INPUT
  CREATE_A_PREVIOUSLY_GENERATED_VOICE: ELEVENLABS_CREATE_A_PREVIOUSLY_GENERATED_VOICE_INPUT
  DELETE_CHAPTER: ELEVENLABS_DELETE_CHAPTER_INPUT
  DELETE_DUBBING_PROJECT: ELEVENLABS_DELETE_DUBBING_PROJECT_INPUT
  DELETE_HISTORY_ITEM: ELEVENLABS_DELETE_HISTORY_ITEM_INPUT
  DELETE_PROJECT: ELEVENLABS_DELETE_PROJECT_INPUT
  DELETE_SAMPLE: ELEVENLABS_DELETE_SAMPLE_INPUT
  DELETE_VOICE: ELEVENLABS_DELETE_VOICE_INPUT
  DOWNLOAD_HISTORY_ITEMS: ELEVENLABS_DOWNLOAD_HISTORY_ITEMS_INPUT
  DUB_A_VIDEO_OR_AN_AUDIOFILE_V_1_DUBBING_POST: ELEVENLABS_DUB_A_VIDEO_OR_AN_AUDIOFILE_V_1_DUBBING_POST_INPUT
  DUB_A_VIDEO_OR_AN_AUDIO_FILE: ELEVENLABS_DUB_A_VIDEO_OR_AN_AUDIO_FILE_INPUT
  EDIT_VOICE: ELEVENLABS_EDIT_VOICE_INPUT
  EDIT_VOICE_SETTINGS: ELEVENLABS_EDIT_VOICE_SETTINGS_INPUT
  ELEVENLABS_TEXT_TO_SPEECH: ELEVENLABS_ELEVENLABS_TEXT_TO_SPEECH_INPUT
  ELEVENLABS_TEXT_TO_SPEECH_STREAM: ELEVENLABS_ELEVENLABS_TEXT_TO_SPEECH_STREAM_INPUT
  GENERATE_A_RANDOM_VOICE: ELEVENLABS_GENERATE_A_RANDOM_VOICE_INPUT
  GET_AUDIO_FROM_HISTORY_ITEM: ELEVENLABS_GET_AUDIO_FROM_HISTORY_ITEM_INPUT
  GET_AUDIO_FROM_SAMPLE: ELEVENLABS_GET_AUDIO_FROM_SAMPLE_INPUT
  GET_A_PROFILE_PAGE: ELEVENLABS_GET_A_PROFILE_PAGE_INPUT
  GET_CHAPTERS: ELEVENLABS_GET_CHAPTERS_INPUT
  GET_CHAPTER_BY_ID: ELEVENLABS_GET_CHAPTER_BY_ID_INPUT
  GET_CHAPTER_SNAPSHOTS: ELEVENLABS_GET_CHAPTER_SNAPSHOTS_INPUT
  GET_DEFAULT_VOICE_SETTINGS: ELEVENLABS_GET_DEFAULT_VOICE_SETTINGS_INPUT
  GET_DUBBED_FILE: ELEVENLABS_GET_DUBBED_FILE_INPUT
  GET_DUBBING_PROJECT_METADATA: ELEVENLABS_GET_DUBBING_PROJECT_METADATA_INPUT
  GET_GENERATED_ITEMS: ELEVENLABS_GET_GENERATED_ITEMS_INPUT
  GET_HISTORY_ITEM_BY_ID: ELEVENLABS_GET_HISTORY_ITEM_BY_ID_INPUT
  GET_METADATA_FOR_A_PRONUNCIATION_DICTIONARY: ELEVENLABS_GET_METADATA_FOR_A_PRONUNCIATION_DICTIONARY_INPUT
  GET_MODELS: ELEVENLABS_GET_MODELS_INPUT
  GET_MODELS_V_1_MODELS_GET: ELEVENLABS_GET_MODELS_V_1_MODELS_GET_INPUT
  GET_PROJECTS: ELEVENLABS_GET_PROJECTS_INPUT
  GET_PROJECT_BY_ID: ELEVENLABS_GET_PROJECT_BY_ID_INPUT
  GET_PROJECT_SNAPSHOTS: ELEVENLABS_GET_PROJECT_SNAPSHOTS_INPUT
  GET_PRONUNCIATION_DICTIONARIES: ELEVENLABS_GET_PRONUNCIATION_DICTIONARIES_INPUT
  GET_PRONUNCIATION_DICT_VERSION: ELEVENLABS_GET_PRONUNCIATION_DICT_VERSION_INPUT
  GET_SHARED_VOICES: ELEVENLABS_GET_SHARED_VOICES_INPUT
  GET_SSO_PROVIDER_ADMIN: ELEVENLABS_GET_SSO_PROVIDER_ADMIN_INPUT
  GET_TRANSCRIPT_FOR_DUB: ELEVENLABS_GET_TRANSCRIPT_FOR_DUB_INPUT
  GET_USER_INFO: ELEVENLABS_GET_USER_INFO_INPUT
  GET_USER_INFO_V_1_USER_GET: ELEVENLABS_GET_USER_INFO_V_1_USER_GET_INPUT
  GET_USER_SUBSCRIPTION_INFO: ELEVENLABS_GET_USER_SUBSCRIPTION_INFO_INPUT
  GET_VOICE: ELEVENLABS_GET_VOICE_INPUT
  GET_VOICES: ELEVENLABS_GET_VOICES_INPUT
  GET_VOICES_V_1_VOICES_GET: ELEVENLABS_GET_VOICES_V_1_VOICES_GET_INPUT
  GET_VOICE_SETTINGS: ELEVENLABS_GET_VOICE_SETTINGS_INPUT
  REDIRECT_TO_MINTLIFY: ELEVENLABS_REDIRECT_TO_MINTLIFY_INPUT
  REMOVE_RULES_FROM_THE_PRONUNCIATION_DICTIONARY: ELEVENLABS_REMOVE_RULES_FROM_THE_PRONUNCIATION_DICTIONARY_INPUT
  SPEECH_TO_SPEECH: ELEVENLABS_SPEECH_TO_SPEECH_INPUT
  SPEECH_TO_SPEECH_STREAMING: ELEVENLABS_SPEECH_TO_SPEECH_STREAMING_INPUT
  STREAMS_ARCHIVE_WITH_PROJECT_AUDIO: ELEVENLABS_STREAMS_ARCHIVE_WITH_PROJECT_AUDIO_INPUT
  STREAM_CHAPTER_AUDIO: ELEVENLABS_STREAM_CHAPTER_AUDIO_INPUT
  STREAM_PROJECT_AUDIO: ELEVENLABS_STREAM_PROJECT_AUDIO_INPUT
  UPDATE_PRONUNCIATION_DICTIONARIES: ELEVENLABS_UPDATE_PRONUNCIATION_DICTIONARIES_INPUT
  VOICE_GENERATION_PARAMETERS: ELEVENLABS_VOICE_GENERATION_PARAMETERS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ELEVENLABS".
 */
export type ELEVENLABS_TOOL_OUTPUTS = {
  ADD_A_PRONUNCIATION_DICTIONARY: ELEVENLABS_ADD_A_PRONUNCIATION_DICTIONARY_OUTPUT
  ADD_PROJECT: ELEVENLABS_ADD_PROJECT_OUTPUT
  ADD_RULES_TO_THE_PRONUNCIATION_DICTIONARY: ELEVENLABS_ADD_RULES_TO_THE_PRONUNCIATION_DICTIONARY_OUTPUT
  ADD_SHARING_VOICE: ELEVENLABS_ADD_SHARING_VOICE_OUTPUT
  ADD_VOICE: ELEVENLABS_ADD_VOICE_OUTPUT
  CONVERT_CHAPTER: ELEVENLABS_CONVERT_CHAPTER_OUTPUT
  CONVERT_PROJECT: ELEVENLABS_CONVERT_PROJECT_OUTPUT
  CREATES_AUDIONATIVE_ENABLED_PROJECT: ELEVENLABS_CREATES_AUDIONATIVE_ENABLED_PROJECT_OUTPUT
  CREATE_A_PREVIOUSLY_GENERATED_VOICE: ELEVENLABS_CREATE_A_PREVIOUSLY_GENERATED_VOICE_OUTPUT
  DELETE_CHAPTER: ELEVENLABS_DELETE_CHAPTER_OUTPUT
  DELETE_DUBBING_PROJECT: ELEVENLABS_DELETE_DUBBING_PROJECT_OUTPUT
  DELETE_HISTORY_ITEM: ELEVENLABS_DELETE_HISTORY_ITEM_OUTPUT
  DELETE_PROJECT: ELEVENLABS_DELETE_PROJECT_OUTPUT
  DELETE_SAMPLE: ELEVENLABS_DELETE_SAMPLE_OUTPUT
  DELETE_VOICE: ELEVENLABS_DELETE_VOICE_OUTPUT
  DOWNLOAD_HISTORY_ITEMS: ELEVENLABS_DOWNLOAD_HISTORY_ITEMS_OUTPUT
  DUB_A_VIDEO_OR_AN_AUDIOFILE_V_1_DUBBING_POST: ELEVENLABS_DUB_A_VIDEO_OR_AN_AUDIOFILE_V_1_DUBBING_POST_OUTPUT
  DUB_A_VIDEO_OR_AN_AUDIO_FILE: ELEVENLABS_DUB_A_VIDEO_OR_AN_AUDIO_FILE_OUTPUT
  EDIT_VOICE: ELEVENLABS_EDIT_VOICE_OUTPUT
  EDIT_VOICE_SETTINGS: ELEVENLABS_EDIT_VOICE_SETTINGS_OUTPUT
  ELEVENLABS_TEXT_TO_SPEECH: ELEVENLABS_ELEVENLABS_TEXT_TO_SPEECH_OUTPUT
  ELEVENLABS_TEXT_TO_SPEECH_STREAM: ELEVENLABS_ELEVENLABS_TEXT_TO_SPEECH_STREAM_OUTPUT
  GENERATE_A_RANDOM_VOICE: ELEVENLABS_GENERATE_A_RANDOM_VOICE_OUTPUT
  GET_AUDIO_FROM_HISTORY_ITEM: ELEVENLABS_GET_AUDIO_FROM_HISTORY_ITEM_OUTPUT
  GET_AUDIO_FROM_SAMPLE: ELEVENLABS_GET_AUDIO_FROM_SAMPLE_OUTPUT
  GET_A_PROFILE_PAGE: ELEVENLABS_GET_A_PROFILE_PAGE_OUTPUT
  GET_CHAPTERS: ELEVENLABS_GET_CHAPTERS_OUTPUT
  GET_CHAPTER_BY_ID: ELEVENLABS_GET_CHAPTER_BY_ID_OUTPUT
  GET_CHAPTER_SNAPSHOTS: ELEVENLABS_GET_CHAPTER_SNAPSHOTS_OUTPUT
  GET_DEFAULT_VOICE_SETTINGS: ELEVENLABS_GET_DEFAULT_VOICE_SETTINGS_OUTPUT
  GET_DUBBED_FILE: ELEVENLABS_GET_DUBBED_FILE_OUTPUT
  GET_DUBBING_PROJECT_METADATA: ELEVENLABS_GET_DUBBING_PROJECT_METADATA_OUTPUT
  GET_GENERATED_ITEMS: ELEVENLABS_GET_GENERATED_ITEMS_OUTPUT
  GET_HISTORY_ITEM_BY_ID: ELEVENLABS_GET_HISTORY_ITEM_BY_ID_OUTPUT
  GET_METADATA_FOR_A_PRONUNCIATION_DICTIONARY: ELEVENLABS_GET_METADATA_FOR_A_PRONUNCIATION_DICTIONARY_OUTPUT
  GET_MODELS: ELEVENLABS_GET_MODELS_OUTPUT
  GET_MODELS_V_1_MODELS_GET: ELEVENLABS_GET_MODELS_V_1_MODELS_GET_OUTPUT
  GET_PROJECTS: ELEVENLABS_GET_PROJECTS_OUTPUT
  GET_PROJECT_BY_ID: ELEVENLABS_GET_PROJECT_BY_ID_OUTPUT
  GET_PROJECT_SNAPSHOTS: ELEVENLABS_GET_PROJECT_SNAPSHOTS_OUTPUT
  GET_PRONUNCIATION_DICTIONARIES: ELEVENLABS_GET_PRONUNCIATION_DICTIONARIES_OUTPUT
  GET_PRONUNCIATION_DICT_VERSION: ELEVENLABS_GET_PRONUNCIATION_DICT_VERSION_OUTPUT
  GET_SHARED_VOICES: ELEVENLABS_GET_SHARED_VOICES_OUTPUT
  GET_SSO_PROVIDER_ADMIN: ELEVENLABS_GET_SSO_PROVIDER_ADMIN_OUTPUT
  GET_TRANSCRIPT_FOR_DUB: ELEVENLABS_GET_TRANSCRIPT_FOR_DUB_OUTPUT
  GET_USER_INFO: ELEVENLABS_GET_USER_INFO_OUTPUT
  GET_USER_INFO_V_1_USER_GET: ELEVENLABS_GET_USER_INFO_V_1_USER_GET_OUTPUT
  GET_USER_SUBSCRIPTION_INFO: ELEVENLABS_GET_USER_SUBSCRIPTION_INFO_OUTPUT
  GET_VOICE: ELEVENLABS_GET_VOICE_OUTPUT
  GET_VOICES: ELEVENLABS_GET_VOICES_OUTPUT
  GET_VOICES_V_1_VOICES_GET: ELEVENLABS_GET_VOICES_V_1_VOICES_GET_OUTPUT
  GET_VOICE_SETTINGS: ELEVENLABS_GET_VOICE_SETTINGS_OUTPUT
  REDIRECT_TO_MINTLIFY: ELEVENLABS_REDIRECT_TO_MINTLIFY_OUTPUT
  REMOVE_RULES_FROM_THE_PRONUNCIATION_DICTIONARY: ELEVENLABS_REMOVE_RULES_FROM_THE_PRONUNCIATION_DICTIONARY_OUTPUT
  SPEECH_TO_SPEECH: ELEVENLABS_SPEECH_TO_SPEECH_OUTPUT
  SPEECH_TO_SPEECH_STREAMING: ELEVENLABS_SPEECH_TO_SPEECH_STREAMING_OUTPUT
  STREAMS_ARCHIVE_WITH_PROJECT_AUDIO: ELEVENLABS_STREAMS_ARCHIVE_WITH_PROJECT_AUDIO_OUTPUT
  STREAM_CHAPTER_AUDIO: ELEVENLABS_STREAM_CHAPTER_AUDIO_OUTPUT
  STREAM_PROJECT_AUDIO: ELEVENLABS_STREAM_PROJECT_AUDIO_OUTPUT
  UPDATE_PRONUNCIATION_DICTIONARIES: ELEVENLABS_UPDATE_PRONUNCIATION_DICTIONARIES_OUTPUT
  VOICE_GENERATION_PARAMETERS: ELEVENLABS_VOICE_GENERATION_PARAMETERS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ELEVENLABS toolkit.
 */
export const ELEVENLABS = {
  slug: "elevenlabs",
  tools: {
    /**
     * Adds a new pronunciation dictionary from a lexicon file to improve speech synthesis accuracy.
     */
    ADD_A_PRONUNCIATION_DICTIONARY: "ELEVENLABS_ADD_A_PRONUNCIATION_DICTIONARY",
    /**
     * Use to create a new elevenlabs project for text-to-speech synthesis (e.g., audiobooks); a project `name` is required by the api for creation, and content can be initialized using `from url` or `from document`.
     */
    ADD_PROJECT: "ELEVENLABS_ADD_PROJECT",
    /**
     * Adds one or more custom pronunciation rules (alias or phoneme) to an existing pronunciation dictionary.
     */
    ADD_RULES_TO_THE_PRONUNCIATION_DICTIONARY: "ELEVENLABS_ADD_RULES_TO_THE_PRONUNCIATION_DICTIONARY",
    /**
     * Adds an existing, shareable voice to a specified user's elevenlabs account library under a new custom name, requiring the user's public id and the voice id.
     */
    ADD_SHARING_VOICE: "ELEVENLABS_ADD_SHARING_VOICE",
    /**
     * Adds a custom voice, requiring a `name` and a `files` list with at least one audio sample, to initiate cloning; returns `voice id` but voice is not immediately usable for synthesis.
     */
    ADD_VOICE: "ELEVENLABS_ADD_VOICE",
    /**
     * Converts the textual content of a chapter, identified by `chapter id` within a `project id`, into audio format.
     */
    CONVERT_CHAPTER: "ELEVENLABS_CONVERT_CHAPTER",
    /**
     * Converts an existing elevenlabs studio project, including all its chapters and using its configured settings and voices, into speech.
     */
    CONVERT_PROJECT: "ELEVENLABS_CONVERT_PROJECT",
    /**
     * Creates an elevenlabs audionative project, generating an embeddable audio player from a provided content file using text-to-speech, allowing customization of player appearance, audio settings, and conversion options.
     */
    CREATES_AUDIONATIVE_ENABLED_PROJECT: "ELEVENLABS_CREATES_AUDIONATIVE_ENABLED_PROJECT",
    /**
     * Finalizes the creation of a voice using its `generated voice id` from a previous generation step by assigning a name, description, and optional labels.
     */
    CREATE_A_PREVIOUSLY_GENERATED_VOICE: "ELEVENLABS_CREATE_A_PREVIOUSLY_GENERATED_VOICE",
    /**
     * Irreversibly deletes a specific, existing chapter from an existing project, typically to remove unwanted or obsolete content.
     */
    DELETE_CHAPTER: "ELEVENLABS_DELETE_CHAPTER",
    /**
     * Permanently deletes a dubbing project by its id; this action is irreversible and the project cannot be recovered.
     */
    DELETE_DUBBING_PROJECT: "ELEVENLABS_DELETE_DUBBING_PROJECT",
    /**
     * Permanently deletes a specific history item (including its audio file and metadata) using its `history item id`; this operation is irreversible and should be used with caution.
     */
    DELETE_HISTORY_ITEM: "ELEVENLABS_DELETE_HISTORY_ITEM",
    /**
     * Use to irreversibly delete a specific project by its `project id`; the project must exist and be accessible, and this action cannot be undone.
     */
    DELETE_PROJECT: "ELEVENLABS_DELETE_PROJECT",
    /**
     * Permanently deletes a specific voice sample for a given voice id; this action is irreversible.
     */
    DELETE_SAMPLE: "ELEVENLABS_DELETE_SAMPLE",
    /**
     * Permanently and irreversibly deletes a specific custom voice using its `voice id`; the voice must exist and the authenticated user must have permission to delete it.
     */
    DELETE_VOICE: "ELEVENLABS_DELETE_VOICE",
    /**
     * Downloads audio clips from history by id(s), returning a single file or a zip archive, with an optional output format (e.g., 'wav'); provides only audio content, no metadata.
     */
    DOWNLOAD_HISTORY_ITEMS: "ELEVENLABS_DOWNLOAD_HISTORY_ITEMS",
    /**
     * Deprecated: use `dub a video or an audio file` instead; dubs a video/audio file, requiring 'file' or 'source url', 'target lang', and 'csv file' if 'mode' is 'manual'.
     */
    DUB_A_VIDEO_OR_AN_AUDIOFILE_V_1_DUBBING_POST: "ELEVENLABS_DUB_A_VIDEO_OR_AN_AUDIOFILE_V_1_DUBBING_POST",
    /**
     * Dub a video or audio file into a specified target language, requiring 'file' or 'source url', 'target lang', and 'csv file' if 'mode' is 'manual'.
     */
    DUB_A_VIDEO_OR_AN_AUDIO_FILE: "ELEVENLABS_DUB_A_VIDEO_OR_AN_AUDIO_FILE",
    /**
     * Updates the name, audio files, description, or labels for an existing voice model specified by `voice id`.
     */
    EDIT_VOICE: "ELEVENLABS_EDIT_VOICE",
    /**
     * Edits key voice settings (e.g., stability, similarity enhancement, style exaggeration, speaker boost) for an existing voice, affecting all future audio generated with that voice id.
     */
    EDIT_VOICE_SETTINGS: "ELEVENLABS_EDIT_VOICE_SETTINGS",
    /**
     * Converts text to speech using a specified elevenlabs voice and model, returning a downloadable audio file.
     */
    ELEVENLABS_TEXT_TO_SPEECH: "ELEVENLABS_ELEVENLABS_TEXT_TO_SPEECH",
    /**
     * Converts text to a spoken audio stream, allowing latency optimization, specific output formats (some tier-dependent), and custom pronunciations; ensure the chosen model supports text-to-speech and text is preferably under 5000 characters.
     */
    ELEVENLABS_TEXT_TO_SPEECH_STREAM: "ELEVENLABS_ELEVENLABS_TEXT_TO_SPEECH_STREAM",
    /**
     * Generates a unique, random elevenlabs text-to-speech voice based on input text and specified voice characteristics.
     */
    GENERATE_A_RANDOM_VOICE: "ELEVENLABS_GENERATE_A_RANDOM_VOICE",
    /**
     * Retrieves the audio content for a specific history item from elevenlabs, using a `history item id` that must correspond to a previously generated audio.
     */
    GET_AUDIO_FROM_HISTORY_ITEM: "ELEVENLABS_GET_AUDIO_FROM_HISTORY_ITEM",
    /**
     * Retrieves the audio for a given `sample id` that must belong to the specified `voice id`.
     */
    GET_AUDIO_FROM_SAMPLE: "ELEVENLABS_GET_AUDIO_FROM_SAMPLE",
    /**
     * Retrieves the public profile information for an existing elevenlabs user based on their unique handle.
     */
    GET_A_PROFILE_PAGE: "ELEVENLABS_GET_A_PROFILE_PAGE",
    /**
     * Retrieves a list of all chapters, their details, and conversion status for a project, useful for managing content or tracking progress.
     */
    GET_CHAPTERS: "ELEVENLABS_GET_CHAPTERS",
    /**
     * Fetches comprehensive details for a specific chapter within a given project, including its metadata (name, id), conversion status, progress, download availability, and content statistics.
     */
    GET_CHAPTER_BY_ID: "ELEVENLABS_GET_CHAPTER_BY_ID",
    /**
     * Retrieves all saved version snapshots for a specific chapter within a given project, enabling review of its history or reversion to prior states.
     */
    GET_CHAPTER_SNAPSHOTS: "ELEVENLABS_GET_CHAPTER_SNAPSHOTS",
    /**
     * Retrieves the elevenlabs text-to-speech service's default voice settings (stability, similarity boost, style, speaker boost) that are applied when no voice-specific or request-specific settings are provided.
     */
    GET_DEFAULT_VOICE_SETTINGS: "ELEVENLABS_GET_DEFAULT_VOICE_SETTINGS",
    /**
     * Retrieves an existing dubbed audio file for a specific `dubbing id` and `language code`.
     */
    GET_DUBBED_FILE: "ELEVENLABS_GET_DUBBED_FILE",
    /**
     * Retrieves metadata and status for a specific dubbing project by its id.
     */
    GET_DUBBING_PROJECT_METADATA: "ELEVENLABS_GET_DUBBING_PROJECT_METADATA",
    /**
     * Retrieves metadata for a list of generated audio items from history, supporting pagination and optional filtering by voice id.
     */
    GET_GENERATED_ITEMS: "ELEVENLABS_GET_GENERATED_ITEMS",
    /**
     * Retrieves detailed information (excluding the audio file) for a specific audio generation history item from elevenlabs, using its unique id.
     */
    GET_HISTORY_ITEM_BY_ID: "ELEVENLABS_GET_HISTORY_ITEM_BY_ID",
    /**
     * Retrieves metadata for a specific, existing pronunciation dictionary from elevenlabs using its id.
     */
    GET_METADATA_FOR_A_PRONUNCIATION_DICTIONARY: "ELEVENLABS_GET_METADATA_FOR_A_PRONUNCIATION_DICTIONARY",
    /**
     * Retrieves a detailed list of all available elevenlabs text-to-speech (tts) models and their capabilities.
     */
    GET_MODELS: "ELEVENLABS_GET_MODELS",
    /**
     * Deprecated: use the 'get models' action instead; formerly retrieved available elevenlabs text-to-speech (tts) models.
     */
    GET_MODELS_V_1_MODELS_GET: "ELEVENLABS_GET_MODELS_V_1_MODELS_GET",
    /**
     * Fetches a list of all projects and their details associated with the user's elevenlabs account; this is a read-only operation.
     */
    GET_PROJECTS: "ELEVENLABS_GET_PROJECTS",
    /**
     * Use to retrieve all details for a specific project, including its chapters and their conversion statuses, by providing the project's unique id.
     */
    GET_PROJECT_BY_ID: "ELEVENLABS_GET_PROJECT_BY_ID",
    /**
     * Retrieves all available snapshots (saved states or versions) for an existing project, enabling history tracking, version comparison, or accessing specific states for playback/processing, particularly in text-to-speech workflows.
     */
    GET_PROJECT_SNAPSHOTS: "ELEVENLABS_GET_PROJECT_SNAPSHOTS",
    /**
     * Retrieves a paginated list of pronunciation dictionaries, used to customize how specific words or phrases are pronounced by the text-to-speech (tts) engine.
     */
    GET_PRONUNCIATION_DICTIONARIES: "ELEVENLABS_GET_PRONUNCIATION_DICTIONARIES",
    /**
     * Downloads the pronunciation lexicon specification (pls) file for an existing version of a pronunciation dictionary from elevenlabs, used to customize tts pronunciation.
     */
    GET_PRONUNCIATION_DICT_VERSION: "ELEVENLABS_GET_PRONUNCIATION_DICT_VERSION",
    /**
     * Retrieves a paginated and filterable list of shared voices from the elevenlabs voice library.
     */
    GET_SHARED_VOICES: "ELEVENLABS_GET_SHARED_VOICES",
    /**
     * Retrieves the sso provider configuration for a specified workspace, typically for review purposes, and will indicate if no configuration exists.
     */
    GET_SSO_PROVIDER_ADMIN: "ELEVENLABS_GET_SSO_PROVIDER_ADMIN",
    /**
     * Retrieves the textual transcript for a specified dubbing project and language, if one exists for that language in the project.
     */
    GET_TRANSCRIPT_FOR_DUB: "ELEVENLABS_GET_TRANSCRIPT_FOR_DUB",
    /**
     * Retrieves detailed information about the authenticated elevenlabs user's account, including subscription, usage, api key, and status.
     */
    GET_USER_INFO: "ELEVENLABS_GET_USER_INFO",
    /**
     * Deprecated: retrieves authenticated user's account details; use 'get user info' instead.
     */
    GET_USER_INFO_V_1_USER_GET: "ELEVENLABS_GET_USER_INFO_V_1_USER_GET",
    /**
     * Retrieves detailed subscription information for the currently authenticated elevenlabs user.
     */
    GET_USER_SUBSCRIPTION_INFO: "ELEVENLABS_GET_USER_SUBSCRIPTION_INFO",
    /**
     * Retrieves comprehensive details for a specific, existing voice by its `voice id`, optionally including its settings.
     */
    GET_VOICE: "ELEVENLABS_GET_VOICE",
    /**
     * Retrieves a list of all available voices along with their detailed attributes and settings.
     */
    GET_VOICES: "ELEVENLABS_GET_VOICES",
    /**
     * Deprecated: use 'get voices' to retrieve a list of all available voices with their details.
     */
    GET_VOICES_V_1_VOICES_GET: "ELEVENLABS_GET_VOICES_V_1_VOICES_GET",
    /**
     * Retrieves the stability, similarity, style, and speaker boost settings for a specific, existing elevenlabs voice using its `voice id`.
     */
    GET_VOICE_SETTINGS: "ELEVENLABS_GET_VOICE_SETTINGS",
    /**
     * Retrieves the content of the official elevenlabs api documentation page hosted on mintlify.
     */
    REDIRECT_TO_MINTLIFY: "ELEVENLABS_REDIRECT_TO_MINTLIFY",
    /**
     * Permanently removes exact-match pronunciation rules from a specified elevenlabs pronunciation dictionary using a list of rule strings; non-matching rule strings are ignored and this action cannot add or modify rules.
     */
    REMOVE_RULES_FROM_THE_PRONUNCIATION_DICTIONARY: "ELEVENLABS_REMOVE_RULES_FROM_THE_PRONUNCIATION_DICTIONARY",
    /**
     * Converts an input audio file to speech using a specified voice; if a `model id` is provided, it must support speech-to-speech conversion.
     */
    SPEECH_TO_SPEECH: "ELEVENLABS_SPEECH_TO_SPEECH",
    /**
     * Converts an input audio stream to a different voice output stream in real-time, using a specified speech-to-speech model.
     */
    SPEECH_TO_SPEECH_STREAMING: "ELEVENLABS_SPEECH_TO_SPEECH_STREAMING",
    /**
     * Archives an existing project snapshot by its id, creating a permanent, immutable, and typically irreversible copy of its state.
     */
    STREAMS_ARCHIVE_WITH_PROJECT_AUDIO: "ELEVENLABS_STREAMS_ARCHIVE_WITH_PROJECT_AUDIO",
    /**
     * Streams the audio for a specified chapter snapshot from an elevenlabs project, optionally converting the output to mpeg format.
     */
    STREAM_CHAPTER_AUDIO: "ELEVENLABS_STREAM_CHAPTER_AUDIO",
    /**
     * Streams audio from a specific project snapshot, optionally converting it to mpeg format.
     */
    STREAM_PROJECT_AUDIO: "ELEVENLABS_STREAM_PROJECT_AUDIO",
    /**
     * Updates a project's pronunciation dictionaries on elevenlabs to improve text-to-speech accuracy for specialized terms; note that while multiple dictionaries can be applied, the ui only displays the first.
     */
    UPDATE_PRONUNCIATION_DICTIONARIES: "ELEVENLABS_UPDATE_PRONUNCIATION_DICTIONARIES",
    /**
     * Fetches configurable parameters for elevenlabs voice generation, used to determine available settings (e.g., accents, character limits) prior to audio synthesis; returns metadata only, not audio.
     */
    VOICE_GENERATION_PARAMETERS: "ELEVENLABS_VOICE_GENERATION_PARAMETERS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ELEVENLABS".
 */
export type ELEVENLABS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ELEVENLABS".
 */
export type ELEVENLABS_TRIGGER_EVENTS = {}
