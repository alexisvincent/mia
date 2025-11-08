// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GROQCLOUD's GROQCLOUD_GROQ_CREATE_AUDIO_TRANSLATION tool input.
 */
type GROQCLOUD_GROQ_CREATE_AUDIO_TRANSLATION_INPUT = {
  /**
   * File Path
   * @description Path to the local audio file (mp3, wav, etc.) to translate. Alternatively, provide an http(s) URL or a data URL using Base64URL per Groq docs.
   */
  file_path?: string;
  /**
   * Model
   * @description Model ID for translation (e.g., 'whisper-large-v3'). whisper-large-v3-turbo may not support translations.
   * @default whisper-large-v3
   */
  model: string;
  /**
   * Prompt
   * @description Optional prompt to guide the translation output.
   * @default null
   */
  prompt: string | null;
  /**
   * Response Format
   * @description Output format: 'json', 'verbose_json', or 'text'.
   * @default json
   */
  response_format: string;
  /**
   * Temperature
   * @description Sampling temperature between 0.0 and 1.0 to control randomness.
   * @default 0
   */
  temperature: number | null;
};

/**
 * Type of GROQCLOUD's GROQCLOUD_GROQ_CREATE_AUDIO_TRANSLATION tool output.
 */
type GROQCLOUD_GROQ_CREATE_AUDIO_TRANSLATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Language
       * @description Detected source language (only included for 'verbose_json').
       * @default null
       */
      language: string | null;
      /**
       * Segments
       * @description List of segments with timing metadata (only for 'verbose_json').
       * @default null
       */
      segments: {
          /**
           * End
           * @description End time of the segment in seconds.
           */
          end: number;
          /**
           * Id
           * @description Segment index.
           */
          id: number;
          /**
           * Seek
           * @description Byte position in original audio stream.
           */
          seek: number;
          /**
           * Start
           * @description Start time of the segment in seconds.
           */
          start: number;
          /**
           * Text
           * @description Textual content of the segment.
           */
          text: string;
      }[] | null;
      /**
       * Text
       * @description Translated text or transcript.
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
 * Type of GROQCLOUD's GROQCLOUD_GROQ_CREATE_CHAT_COMPLETION tool input.
 */
type GROQCLOUD_GROQ_CREATE_CHAT_COMPLETION_INPUT = {
  /**
   * Max Completion Tokens
   * @description Maximum number of tokens to generate in the completion
   * @default null
   */
  max_completion_tokens: number | null;
  /**
   * Messages
   * @description Ordered list of messages comprising the conversation
   */
  messages?: {
      /**
       * Content
       * @description Text content of the message
       */
      content: string;
      /**
       * Role
       * @description Role of the message sender
       * @enum {string}
       */
      role: "system" | "user" | "assistant";
  }[];
  /**
   * Model
   * @description ID of the model to use
   */
  model?: string;
  /**
   * N
   * @description Number of chat completion choices to generate (must be 1)
   * @default 1
   */
  n: number;
  /**
   * Stop
   * @description Up to 4 stop sequences where the model will stop generating further tokens
   * @default null
   */
  stop: string | null;
  /**
   * Stream
   * @description Whether to return a streaming response (SSE of token deltas)
   * @default false
   */
  stream: boolean;
  /**
   * Temperature
   * @description Sampling temperature between 0 and 2
   * @default 1
   */
  temperature: number;
  /**
   * Top P
   * @description Nucleus sampling parameter (0 to 1)
   * @default 1
   */
  top_p: number;
  /**
   * User
   * @description Unique identifier for the end user for monitoring/abuse detection
   * @default null
   */
  user: string | null;
};

/**
 * Type of GROQCLOUD's GROQCLOUD_GROQ_CREATE_CHAT_COMPLETION tool output.
 */
type GROQCLOUD_GROQ_CREATE_CHAT_COMPLETION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Choices
       * @description List of chat completion choices
       */
      choices: {
          /**
           * Index
           * @description Choice index
           */
          index: number;
          /**
           * Message
           * @description Assistant message returned by the model
           */
          message: {
              /**
               * Content
               * @description Text content of the message
               */
              content: string;
              /**
               * Role
               * @description Role of the message sender
               * @enum {string}
               */
              role: "system" | "user" | "assistant";
          };
      }[];
      /**
       * Created
       * @description Unix timestamp (in seconds) when created
       */
      created: number;
      /**
       * Id
       * @description Chat completion ID
       */
      id: string;
      /**
       * Model
       * @description Model used to generate the completion
       */
      model: string;
      /**
       * Object
       * @description Object type returned by the API
       * @constant
       */
      object: "chat.completion";
      /**
       * System Fingerprint
       * @description Backend configuration fingerprint
       */
      system_fingerprint: string;
      /**
       * Usage
       * @description Usage statistics for the request
       */
      usage: {
          /**
           * Completion Tokens
           * @description Number of completion tokens generated
           * @default null
           */
          completion_tokens: number | null;
          /**
           * Prompt Tokens
           * @description Number of prompt tokens consumed
           * @default null
           */
          prompt_tokens: number | null;
          /**
           * Total Tokens
           * @description Total tokens consumed (prompt + completion)
           * @default null
           */
          total_tokens: number | null;
      };
      /**
       * Usage Breakdown
       * @description Usage stats for compound AI requests
       * @default null
       */
      usage_breakdown: {
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
 * Type of GROQCLOUD's GROQCLOUD_GROQ_RETRIEVE_MODEL tool input.
 */
type GROQCLOUD_GROQ_RETRIEVE_MODEL_INPUT = {
  /**
   * Model
   * @description Identifier of the model to retrieve
   */
  model?: string;
};

/**
 * Type of GROQCLOUD's GROQCLOUD_GROQ_RETRIEVE_MODEL tool output.
 */
type GROQCLOUD_GROQ_RETRIEVE_MODEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Whether the model is currently active.
       */
      active: boolean;
      /**
       * Context Window
       * @description Maximum number of tokens the model can process in one request.
       */
      context_window: number;
      /**
       * Created
       * @description Unix timestamp (seconds) when the model was created.
       */
      created: number;
      /**
       * Id
       * @description The model identifier, used in other API calls.
       */
      id: string;
      /**
       * Max Completion Tokens
       * @description Maximum tokens allowed for a single completion with this model.
       * @default null
       */
      max_completion_tokens: number | null;
      /**
       * Object
       * @description Object type; always 'model'.
       */
      object: string;
      /**
       * Owned By
       * @description The organization that owns the model.
       */
      owned_by: string;
      /**
       * Public Apps
       * @description List of public applications using this model, or null if none.
       * @default null
       */
      public_apps: unknown[] | null;
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
 * Type of GROQCLOUD's GROQCLOUD_LIST_MODELS tool input.
 */
type GROQCLOUD_LIST_MODELS_INPUT = object;

/**
 * Type of GROQCLOUD's GROQCLOUD_LIST_MODELS tool output.
 */
type GROQCLOUD_LIST_MODELS_OUTPUT = {
  /**
   * Data
   * @description List of model objects available
   */
  data?: {
      /**
       * Active
       * @description Whether the model is active
       * @default null
       */
      active: boolean | null;
      /**
       * Context Window
       * @description Context window size for the model
       * @default null
       */
      context_window: number | null;
      /**
       * Created
       * @description Unix timestamp (seconds) when model was created
       */
      created: number;
      /**
       * Id
       * @description Model identifier
       */
      id: string;
      /**
       * Max Completion Tokens
       * @description Maximum completion tokens for the model
       * @default null
       */
      max_completion_tokens: number | null;
      /**
       * Object
       * @description Object type, always 'model'
       */
      object: string;
      /**
       * Owned By
       * @description Owning organization
       */
      owned_by: string;
      /**
       * Public Apps
       * @description Public applications associated with the model
       * @default null
       */
      public_apps: unknown;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Object
   * @description Value is always 'list'
   */
  object?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GROQCLOUD's GROQCLOUD_LIST_VOICES tool input.
 */
type GROQCLOUD_LIST_VOICES_INPUT = object;

/**
 * Type of GROQCLOUD's GROQCLOUD_LIST_VOICES tool output.
 */
type GROQCLOUD_LIST_VOICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Voices
       * @description List of available TTS voices with their model and language
       */
      voices: {
          /**
           * Language
           * @description Language of the voice
           * @enum {string}
           */
          language: "English" | "Arabic";
          /**
           * Model
           * @description Model identifier for this voice
           * @enum {string}
           */
          model: "playai-tts" | "playai-tts-arabic";
          /**
           * Voice
           * @description Voice name exactly as shown in the official docs
           */
          voice: string;
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
 * Type map of all available tool input types for toolkit "GROQCLOUD".
 */
export type GROQCLOUD_TOOL_INPUTS = {
  GROQ_CREATE_AUDIO_TRANSLATION: GROQCLOUD_GROQ_CREATE_AUDIO_TRANSLATION_INPUT
  GROQ_CREATE_CHAT_COMPLETION: GROQCLOUD_GROQ_CREATE_CHAT_COMPLETION_INPUT
  GROQ_RETRIEVE_MODEL: GROQCLOUD_GROQ_RETRIEVE_MODEL_INPUT
  LIST_MODELS: GROQCLOUD_LIST_MODELS_INPUT
  LIST_VOICES: GROQCLOUD_LIST_VOICES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GROQCLOUD".
 */
export type GROQCLOUD_TOOL_OUTPUTS = {
  GROQ_CREATE_AUDIO_TRANSLATION: GROQCLOUD_GROQ_CREATE_AUDIO_TRANSLATION_OUTPUT
  GROQ_CREATE_CHAT_COMPLETION: GROQCLOUD_GROQ_CREATE_CHAT_COMPLETION_OUTPUT
  GROQ_RETRIEVE_MODEL: GROQCLOUD_GROQ_RETRIEVE_MODEL_OUTPUT
  LIST_MODELS: GROQCLOUD_LIST_MODELS_OUTPUT
  LIST_VOICES: GROQCLOUD_LIST_VOICES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GROQCLOUD toolkit.
 */
export const GROQCLOUD = {
  slug: "groqcloud",
  tools: {
    /**
     * Tool to translate an audio file into English text. Use when you have a non-English recording and need an accurate English transcript. Use after confirming the file path.
     */
    GROQ_CREATE_AUDIO_TRANSLATION: "GROQCLOUD_GROQ_CREATE_AUDIO_TRANSLATION",
    /**
     * Tool to generate a chat-based completion for a conversation. Use when you have a list of prior messages and need the model’s next reply.
     */
    GROQ_CREATE_CHAT_COMPLETION: "GROQCLOUD_GROQ_CREATE_CHAT_COMPLETION",
    /**
     * Tool to retrieve detailed information about a specific model. Use after listing models when you need metadata for a chosen model.
     */
    GROQ_RETRIEVE_MODEL: "GROQCLOUD_GROQ_RETRIEVE_MODEL",
    /**
     * Tool to list all available models. Use when you need to fetch supported models and their metadata.
     */
    LIST_MODELS: "GROQCLOUD_LIST_MODELS",
    /**
     * Tool to retrieve available TTS voices for Groq PlayAI models. Use when you need to discover voice options before calling text-to-speech. Note: static list maintained manually; no live endpoint exists.
     */
    LIST_VOICES: "GROQCLOUD_LIST_VOICES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GROQCLOUD".
 */
export type GROQCLOUD_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GROQCLOUD".
 */
export type GROQCLOUD_TRIGGER_EVENTS = {}
