// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CONVOLO_AI's CONVOLO_AI_CREATE_CHARACTER tool input.
 */
type CONVOLO_AI_CREATE_CHARACTER_INPUT = {
  /**
   * Actions
   * @description Optional list of actions the character can perform.
   * @default null
   */
  actions: string[] | null;
  /**
   * Backstory
   * @description Background information or story for the character.
   */
  backstory?: string;
  /**
   * Char Name
   * @description Name of the character to create.
   */
  charName?: string;
  /**
   * Voice Type
   * @description Voice type to assign; see Voice List API for available values.
   */
  voiceType?: string;
};

/**
 * Type of CONVOLO_AI's CONVOLO_AI_CREATE_CHARACTER tool output.
 */
type CONVOLO_AI_CREATE_CHARACTER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Char Id
       * @description Identifier of the newly created character.
       */
      charID: string;
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
 * Type of CONVOLO_AI's CONVOLO_AI_DEFINE_ACTIONS tool input.
 */
type CONVOLO_AI_DEFINE_ACTIONS_INPUT = {
  /**
   * Actions
   * @description List of actions that the character can perform.
   * @default null
   */
  actions: string[] | null;
  /**
   * Backstory
   * @description Updated backstory for the character.
   * @default null
   */
  backstory: string | null;
  /**
   * Char Id
   * @description Character ID to update.
   */
  charID?: string;
  /**
   * Char Name
   * @description New name for the character, if updating.
   * @default null
   */
  charName: string | null;
  /**
   * Language Codes
   * @description List of language codes the character should support.
   * @default null
   */
  languageCodes: string[] | null;
  /**
   * Voice Type
   * @description New voice type for the character, refer to Voice List API.
   * @default null
   */
  voiceType: string | null;
};

/**
 * Type of CONVOLO_AI's CONVOLO_AI_DEFINE_ACTIONS tool output.
 */
type CONVOLO_AI_DEFINE_ACTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Error
       * @description Specific API error if provided.
       * @default null
       */
      API_ERROR: string | null;
      /**
       * Error
       * @description Error message if the update failed.
       * @default null
       */
      ERROR: string | null;
      /**
       * Status
       * @description Status of the update operation, expected to be 'SUCCESS'.
       */
      STATUS: string;
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
 * Type of CONVOLO_AI's CONVOLO_AI_EVALUATE_CHARACTER tool input.
 */
type CONVOLO_AI_EVALUATE_CHARACTER_INPUT = {
  /**
   * Character Id
   * @description The ID of the character performing the evaluation
   */
  character_id?: string;
  /**
   * Prompt
   * @description A predefined or custom prompt including [[conversation_history]].
   */
  prompt?: string;
  /**
   * Session Id
   * @description The ID of the session to evaluate
   */
  session_id?: string;
  /**
   * Variables
   * @description Key–value pairs for other variables referenced in the prompt (excluding [[conversation_history]]).
   * @default null
   */
  variables: {
      [key: string]: string;
  } | null;
};

/**
 * Type of CONVOLO_AI's CONVOLO_AI_EVALUATE_CHARACTER tool output.
 */
type CONVOLO_AI_EVALUATE_CHARACTER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Evaluation */
      evaluation: {
          /** Clarity Of Responses */
          clarity_of_responses: {
              /**
               * Feedback
               * @description Textual feedback corresponding to the rating.
               */
              feedback: string;
              /**
               * Rating
               * @description Rating for the attribute (e.g., 'excellent', 'poor').
               */
              rating: string;
          };
          /** Conciseness And Relevance */
          conciseness_and_relevance: {
              /**
               * Feedback
               * @description Textual feedback corresponding to the rating.
               */
              feedback: string;
              /**
               * Rating
               * @description Rating for the attribute (e.g., 'excellent', 'poor').
               */
              rating: string;
          };
          /** Courtesy And Respect */
          courtesy_and_respect: {
              /**
               * Feedback
               * @description Textual feedback corresponding to the rating.
               */
              feedback: string;
              /**
               * Rating
               * @description Rating for the attribute (e.g., 'excellent', 'poor').
               */
              rating: string;
          };
          /** Follow Up And Conversation Closure */
          follow_up_and_conversation_closure: {
              /**
               * Feedback
               * @description Textual feedback corresponding to the rating.
               */
              feedback: string;
              /**
               * Rating
               * @description Rating for the attribute (e.g., 'excellent', 'poor').
               */
              rating: string;
          };
          /** Listening Skills */
          listening_skills: {
              /**
               * Feedback
               * @description Textual feedback corresponding to the rating.
               */
              feedback: string;
              /**
               * Rating
               * @description Rating for the attribute (e.g., 'excellent', 'poor').
               */
              rating: string;
          };
          /** Order Accuracy */
          order_accuracy: {
              /**
               * Feedback
               * @description Textual feedback corresponding to the rating.
               */
              feedback: string;
              /**
               * Rating
               * @description Rating for the attribute (e.g., 'excellent', 'poor').
               */
              rating: string;
          };
          /** Overall Summary */
          overall_summary: {
              /**
               * Overall Feedback
               * @description Overall feedback summary.
               */
              overall_feedback: string;
              /**
               * Overall Rating
               * @description Overall rating across all attributes.
               */
              overall_rating: string;
          };
          /** Problem Solving And Issue Resolution */
          problem_solving_and_issue_resolution: {
              /**
               * Feedback
               * @description Textual feedback corresponding to the rating.
               */
              feedback: string;
              /**
               * Rating
               * @description Rating for the attribute (e.g., 'excellent', 'poor').
               */
              rating: string;
          };
          /** Product Knowledge */
          product_knowledge: {
              /**
               * Feedback
               * @description Textual feedback corresponding to the rating.
               */
              feedback: string;
              /**
               * Rating
               * @description Rating for the attribute (e.g., 'excellent', 'poor').
               */
              rating: string;
          };
          /** Response Time */
          response_time: {
              /**
               * Feedback
               * @description Textual feedback corresponding to the rating.
               */
              feedback: string;
              /**
               * Rating
               * @description Rating for the attribute (e.g., 'excellent', 'poor').
               */
              rating: string;
          };
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
 * Type of CONVOLO_AI's CONVOLO_AI_GENERATE_STARTER_CONVERSATION tool input.
 */
type CONVOLO_AI_GENERATE_STARTER_CONVERSATION_INPUT = {
  /**
   * Char Id
   * @description Character ID to generate options for
   */
  charId?: string;
  /**
   * Session Id
   * @description Session ID to generate suggestions; use "-1" for opening sessions
   */
  sessionId?: string;
};

/**
 * Type of CONVOLO_AI's CONVOLO_AI_GENERATE_STARTER_CONVERSATION tool output.
 */
type CONVOLO_AI_GENERATE_STARTER_CONVERSATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of generated starter conversation suggestions
       */
      suggestions: string[];
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
 * Type of CONVOLO_AI's CONVOLO_AI_GET_CHARACTER_RESPONSE tool input.
 */
type CONVOLO_AI_GET_CHARACTER_RESPONSE_INPUT = {
  /**
   * Char Id
   * @description ID of the character to interact with
   */
  charID?: string;
  /**
   * File
   * Format: binary
   * @description Mono WAV audio file bytes; provide only if not sending userText
   * @default null
   */
  file: string | null;
  /**
   * Sample Rate
   * @description Sample rate of the uploaded audio in Hz
   * @default null
   */
  sample_rate: string | null;
  /**
   * Session Id
   * @description Session identifier; use "-1" to start a new session
   */
  sessionID?: string;
  /**
   * Stream
   * @description Enable SSE streaming; "True" or "False"
   * @default null
   * @enum {string|null}
   */
  stream: "True" | "False" | null;
  /**
   * User Text
   * @description User text input; provide only if not sending audio
   * @default null
   */
  userText: string | null;
  /**
   * Voice Response
   * @description Whether to return response audio
   */
  voiceResponse?: boolean;
};

/**
 * Type of CONVOLO_AI's CONVOLO_AI_GET_CHARACTER_RESPONSE tool output.
 */
type CONVOLO_AI_GET_CHARACTER_RESPONSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Audio
       * @description Base64-encoded audio if requested, or null
       * @default null
       */
      audio: string | null;
      /**
       * Char Id
       * @description Echoes the character ID sent
       */
      charID: string;
      /**
       * Sample Rate
       * @description Audio sample rate in Hz if audio present
       * @default null
       */
      sample_rate: string | null;
      /**
       * Session Id
       * @description Returned session identifier
       */
      sessionID: string;
      /**
       * Text
       * @description Generated language-model response to the query
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
 * Type of CONVOLO_AI's CONVOLO_AI_LIST_VOICES tool input.
 */
type CONVOLO_AI_LIST_VOICES_INPUT = {
  /**
   * Accept
   * @description Override the Accept header if provided.
   * @default null
   */
  accept: string | null;
  /**
   * Content Type
   * @description Override the Content-Type header if provided.
   * @default null
   */
  contentType: string | null;
  /**
   * Use Alt Domain
   * @description If true, use https://api.convai.com as base URL instead of default.
   * @default false
   */
  use_alt_domain: boolean | null;
};

/**
 * Type of CONVOLO_AI's CONVOLO_AI_LIST_VOICES tool output.
 */
type CONVOLO_AI_LIST_VOICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Voices
       * @description List of available voice entries.
       */
      voices: ({
          /**
           * Name
           * @description Human-readable name for the voice.
           */
          name: string;
          /**
           * Voice Type
           * @description Unique identifier for the voice.
           */
          voice_type: string;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of CONVOLO_AI's CONVOLO_AI_SET_CORE_AI_SETTINGS tool input.
 */
type CONVOLO_AI_SET_CORE_AI_SETTINGS_INPUT = {
  /**
   * Char Id
   * @description Unique identifier of the character whose AI settings will be updated.
   */
  charID?: string;
  /**
   * Model Group Name
   * @description Model code to apply to the character. Provide only when changing the AI model.
   * @default null
   * @enum {string|null}
   */
  model_group_name: "claude-3-5-sonnet" | "gemini-1.5-pro" | "gemini-1.5-flash" | "llama3-70b" | "llama-2-13b" | "gpt-3.5-turbo" | "gpt-4o" | "gpt-4o-mini" | "uncensored-small" | null;
  /**
   * Temperature
   * @description Sampling temperature for the character (0-1). Provide only when adjusting temperature.
   * @default null
   */
  temperature: number | null;
};

/**
 * Type of CONVOLO_AI's CONVOLO_AI_SET_CORE_AI_SETTINGS tool output.
 */
type CONVOLO_AI_SET_CORE_AI_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Error
       * @description Specific API error details if provided by the server.
       * @default null
       */
      API_ERROR: string | null;
      /**
       * Error
       * @description Error message if the update failed.
       * @default null
       */
      ERROR: string | null;
      /**
       * Status
       * @description Returns 'SUCCESS' when the update is successful.
       */
      STATUS: string;
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
 * Type of CONVOLO_AI's CONVOLO_AI_UPDATE_BACKSTORY tool input.
 */
type CONVOLO_AI_UPDATE_BACKSTORY_INPUT = {
  /**
   * Action
   * @description New list of actions for the character, comma-separated.
   * @default null
   */
  action: string | null;
  /**
   * Backstory
   * @description Updated backstory. Include only to update backstory.
   * @default null
   */
  backstory: string | null;
  /**
   * Char Id
   * @description Character ID to update.
   */
  charID?: string;
  /**
   * Char Name
   * @description New character name. Include only to update name.
   * @default null
   */
  charName: string | null;
  /**
   * Language Codes
   * @description List of language codes to support (see Language List API).
   * @default null
   */
  languageCodes: string[] | null;
  /**
   * Voice Type
   * @description New voice type (see Voice List API).
   * @default null
   */
  voiceType: string | null;
};

/**
 * Type of CONVOLO_AI's CONVOLO_AI_UPDATE_BACKSTORY tool output.
 */
type CONVOLO_AI_UPDATE_BACKSTORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Status of the update (e.g., 'SUCCESS').
       */
      STATUS: string;
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
 * Type of CONVOLO_AI's CONVOLO_AI_UPDATE_CHARACTER tool input.
 */
type CONVOLO_AI_UPDATE_CHARACTER_INPUT = {
  /**
   * Action
   * @description Updated actions for the character as comma-separated list.
   * @default null
   */
  action: string | null;
  /**
   * Backstory
   * @description Updated backstory for the character.
   * @default null
   */
  backstory: string | null;
  /**
   * Char Id
   * @description Character ID to update.
   */
  charID?: string;
  /**
   * Char Name
   * @description New display name for the character.
   * @default null
   */
  charName: string | null;
  /**
   * Language Codes
   * @description Language codes the character should support.
   * @default null
   */
  languageCodes: string[] | null;
  /**
   * Voice Type
   * @description Identifier of the new voice profile.
   * @default null
   */
  voiceType: string | null;
};

/**
 * Type of CONVOLO_AI's CONVOLO_AI_UPDATE_CHARACTER tool output.
 */
type CONVOLO_AI_UPDATE_CHARACTER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Error
       * @description API key errors if invalid or missing.
       * @default null
       */
      API_ERROR: string | null;
      /**
       * Error
       * @description Error details if update failed.
       * @default null
       */
      ERROR: string | null;
      /**
       * Status
       * @description "SUCCESS" on successful update.
       */
      STATUS: string;
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
 * Type of CONVOLO_AI's CONVOLO_AI_UPLOAD_KNOWLEDGE_BANK tool input.
 */
type CONVOLO_AI_UPLOAD_KNOWLEDGE_BANK_INPUT = {
  /**
   * File
   * Format: binary
   * @description Raw bytes of the knowledge bank file to upload
   */
  file?: string;
  /**
   * File Name
   * @description Name of the file being uploaded
   */
  file_name?: string;
};

/**
 * Type of CONVOLO_AI's CONVOLO_AI_UPLOAD_KNOWLEDGE_BANK tool output.
 */
type CONVOLO_AI_UPLOAD_KNOWLEDGE_BANK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Name
       * @description Name of the uploaded file
       */
      file_name: string;
      /**
       * File Size
       * @description Size of the uploaded file in bytes as string
       */
      file_size: string;
      /**
       * Id
       * @description UUID assigned to the uploaded file
       */
      id: string;
      /**
       * Is Available
       * @description File availability after processing
       */
      is_available: boolean;
      /**
       * Status
       * @description Processing status, e.g., 'inactive'
       */
      status: string;
      /**
       * Timestamp
       * @description ISO-8601 upload timestamp
       */
      timestamp: string;
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
 * Type map of all available tool input types for toolkit "CONVOLO_AI".
 */
export type CONVOLO_AI_TOOL_INPUTS = {
  CREATE_CHARACTER: CONVOLO_AI_CREATE_CHARACTER_INPUT
  DEFINE_ACTIONS: CONVOLO_AI_DEFINE_ACTIONS_INPUT
  EVALUATE_CHARACTER: CONVOLO_AI_EVALUATE_CHARACTER_INPUT
  GENERATE_STARTER_CONVERSATION: CONVOLO_AI_GENERATE_STARTER_CONVERSATION_INPUT
  GET_CHARACTER_RESPONSE: CONVOLO_AI_GET_CHARACTER_RESPONSE_INPUT
  LIST_VOICES: CONVOLO_AI_LIST_VOICES_INPUT
  SET_CORE_AI_SETTINGS: CONVOLO_AI_SET_CORE_AI_SETTINGS_INPUT
  UPDATE_BACKSTORY: CONVOLO_AI_UPDATE_BACKSTORY_INPUT
  UPDATE_CHARACTER: CONVOLO_AI_UPDATE_CHARACTER_INPUT
  UPLOAD_KNOWLEDGE_BANK: CONVOLO_AI_UPLOAD_KNOWLEDGE_BANK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CONVOLO_AI".
 */
export type CONVOLO_AI_TOOL_OUTPUTS = {
  CREATE_CHARACTER: CONVOLO_AI_CREATE_CHARACTER_OUTPUT
  DEFINE_ACTIONS: CONVOLO_AI_DEFINE_ACTIONS_OUTPUT
  EVALUATE_CHARACTER: CONVOLO_AI_EVALUATE_CHARACTER_OUTPUT
  GENERATE_STARTER_CONVERSATION: CONVOLO_AI_GENERATE_STARTER_CONVERSATION_OUTPUT
  GET_CHARACTER_RESPONSE: CONVOLO_AI_GET_CHARACTER_RESPONSE_OUTPUT
  LIST_VOICES: CONVOLO_AI_LIST_VOICES_OUTPUT
  SET_CORE_AI_SETTINGS: CONVOLO_AI_SET_CORE_AI_SETTINGS_OUTPUT
  UPDATE_BACKSTORY: CONVOLO_AI_UPDATE_BACKSTORY_OUTPUT
  UPDATE_CHARACTER: CONVOLO_AI_UPDATE_CHARACTER_OUTPUT
  UPLOAD_KNOWLEDGE_BANK: CONVOLO_AI_UPLOAD_KNOWLEDGE_BANK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CONVOLO_AI toolkit.
 */
export const CONVOLO_AI = {
  slug: "convolo_ai",
  tools: {
    /**
     * Tool to create a new character. Use when you have name, voice type, backstory, and optional actions ready.
     */
    CREATE_CHARACTER: "CONVOLO_AI_CREATE_CHARACTER",
    /**
     * Tool to define or update the list of actions a character can perform. Use when you need to configure or adjust character capabilities before deployment.
     */
    DEFINE_ACTIONS: "CONVOLO_AI_DEFINE_ACTIONS",
    /**
     * Tool to evaluate a character's performance based on interactions. Use after fetching a conversation session and constructing your prompt.
     */
    EVALUATE_CHARACTER: "CONVOLO_AI_EVALUATE_CHARACTER",
    /**
     * Tool to generate starter conversation suggestions for a character. Use when you need opening or follow-up dialogue lines.
     */
    GENERATE_STARTER_CONVERSATION: "CONVOLO_AI_GENERATE_STARTER_CONVERSATION",
    /**
     * Tool to generate a response from a ConvAI character based on text or audio input. Use when needing a text or voice reply in an ongoing session.
     */
    GET_CHARACTER_RESPONSE: "CONVOLO_AI_GET_CHARACTER_RESPONSE",
    /**
     * Tool to retrieve the list of available voice types. Use when selecting voices before generating speech.
     */
    LIST_VOICES: "CONVOLO_AI_LIST_VOICES",
    /**
     * Tool to set core AI settings for a character. Use after confirming character existence.
     */
    SET_CORE_AI_SETTINGS: "CONVOLO_AI_SET_CORE_AI_SETTINGS",
    /**
     * Tool to update a character's backstory. Use when you need to modify the backstory of an existing character after confirming its ID. Only the provided fields will be updated.
     */
    UPDATE_BACKSTORY: "CONVOLO_AI_UPDATE_BACKSTORY",
    /**
     * Tool to update existing character details. Use when you have a character ID and need to modify its attributes.
     */
    UPDATE_CHARACTER: "CONVOLO_AI_UPDATE_CHARACTER",
    /**
     * Tool to upload a knowledge bank file. Use when you have a file ready to add to Convolo AI's knowledge bank (Enterprise plan only).
     */
    UPLOAD_KNOWLEDGE_BANK: "CONVOLO_AI_UPLOAD_KNOWLEDGE_BANK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CONVOLO_AI".
 */
export type CONVOLO_AI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CONVOLO_AI".
 */
export type CONVOLO_AI_TRIGGER_EVENTS = {}
