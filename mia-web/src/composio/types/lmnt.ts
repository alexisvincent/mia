// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of LMNT's LMNT_CREATE_VOICE tool input.
 */
type LMNT_CREATE_VOICE_INPUT = {
  /**
   * Description
   * @description A text description of this voice.
   */
  description?: string;
  /**
   * Enhance
   * @description For unclean audio with background noise, applies processing to attempt to improve quality.
   * @default false
   */
  enhance: boolean;
  /**
   * FileUploadable
   * @description One or more input audio files to train the voice
   */
  files?: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  };
  /**
   * Gender
   * @description A tag describing the gender of this voice. Has no effect on voice creation.
   */
  gender?: string;
  /**
   * Name
   * @description The display name for this voice
   */
  name?: string;
  /**
   * Type
   * @description The type of voice to create.
   * @default instant
   */
  type: string;
};

/**
 * Type of LMNT's LMNT_CREATE_VOICE tool output.
 */
type LMNT_CREATE_VOICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full response data from the API
       */
      response_data?: {
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
 * Type of LMNT's LMNT_DELETE_VOICE_INFO tool input.
 */
type LMNT_DELETE_VOICE_INFO_INPUT = {
  /**
   * Id
   * @description The ID of the voice
   */
  id?: string;
};

/**
 * Type of LMNT's LMNT_DELETE_VOICE_INFO tool output.
 */
type LMNT_DELETE_VOICE_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full response data from the API
       */
      response_data?: {
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
 * Type of LMNT's LMNT_GET_ACCOUNT tool input.
 */
type LMNT_GET_ACCOUNT_INPUT = object;

/**
 * Type of LMNT's LMNT_GET_ACCOUNT tool output.
 */
type LMNT_GET_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full response data from the API
       */
      response_data?: {
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
 * Type of LMNT's LMNT_GET_VOICES_LIST tool input.
 */
type LMNT_GET_VOICES_LIST_INPUT = {
  /**
   * Owner
   * @description Which owner's voices to return. Choose from system, me, or all.
   * @default all
   */
  owner: string;
  /**
   * Starred
   * @description If true, only returns voices that you have starred.
   * @default false
   */
  starred: boolean;
};

/**
 * Type of LMNT's LMNT_GET_VOICES_LIST tool output.
 */
type LMNT_GET_VOICES_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full response data from the API
       */
      response_data?: unknown[];
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
 * Type of LMNT's LMNT_GET_VOICE_INFO tool input.
 */
type LMNT_GET_VOICE_INFO_INPUT = {
  /**
   * Id
   * @description The ID of the voice
   */
  id?: string;
};

/**
 * Type of LMNT's LMNT_GET_VOICE_INFO tool output.
 */
type LMNT_GET_VOICE_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full response data from the API
       */
      response_data?: {
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
 * Type of LMNT's LMNT_SYNTHESIZE_SPEECH tool input.
 */
type LMNT_SYNTHESIZE_SPEECH_INPUT = {
  /**
   * Conversational
   * @description Whether to use a conversational tone
   * @default false
   */
  conversational: boolean;
  /**
   * Text
   * @description The text to be synthesized into speech
   */
  text?: string;
  /**
   * Voice
   * @description The ID of the voice to use for speech synthesis
   */
  voice?: string;
};

/**
 * Type of LMNT's LMNT_SYNTHESIZE_SPEECH tool output.
 */
type LMNT_SYNTHESIZE_SPEECH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full response data from the API
       */
      response_data?: {
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
 * Type of LMNT's LMNT_UPDATE_VOICE tool input.
 */
type LMNT_UPDATE_VOICE_INPUT = {
  /**
   * Description
   * @description A description of this voice.
   */
  description?: string;
  /**
   * Gender
   * @description A tag describing the gender of this voice, e.g. male, female, nonbinary.
   */
  gender?: string;
  /**
   * Id
   * @description The ID of the voice
   */
  id?: string;
  /**
   * Name
   * @description The display name for this voice.
   */
  name?: string;
  /**
   * Starred
   * @description If true, adds this voice to your starred list.
   */
  starred?: boolean;
  /**
   * Unfreeze
   * @description If true, unfreezes this voice and upgrades it to the latest model.
   */
  unfreeze?: boolean;
};

/**
 * Type of LMNT's LMNT_UPDATE_VOICE tool output.
 */
type LMNT_UPDATE_VOICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full response data from the API
       */
      response_data?: {
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
 * Type map of all available tool input types for toolkit "LMNT".
 */
export type LMNT_TOOL_INPUTS = {
  CREATE_VOICE: LMNT_CREATE_VOICE_INPUT
  DELETE_VOICE_INFO: LMNT_DELETE_VOICE_INFO_INPUT
  GET_ACCOUNT: LMNT_GET_ACCOUNT_INPUT
  GET_VOICES_LIST: LMNT_GET_VOICES_LIST_INPUT
  GET_VOICE_INFO: LMNT_GET_VOICE_INFO_INPUT
  SYNTHESIZE_SPEECH: LMNT_SYNTHESIZE_SPEECH_INPUT
  UPDATE_VOICE: LMNT_UPDATE_VOICE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "LMNT".
 */
export type LMNT_TOOL_OUTPUTS = {
  CREATE_VOICE: LMNT_CREATE_VOICE_OUTPUT
  DELETE_VOICE_INFO: LMNT_DELETE_VOICE_INFO_OUTPUT
  GET_ACCOUNT: LMNT_GET_ACCOUNT_OUTPUT
  GET_VOICES_LIST: LMNT_GET_VOICES_LIST_OUTPUT
  GET_VOICE_INFO: LMNT_GET_VOICE_INFO_OUTPUT
  SYNTHESIZE_SPEECH: LMNT_SYNTHESIZE_SPEECH_OUTPUT
  UPDATE_VOICE: LMNT_UPDATE_VOICE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's LMNT toolkit.
 */
export const LMNT = {
  slug: "lmnt",
  tools: {
    /**
     * Creates a voice in lmnt.
     */
    CREATE_VOICE: "LMNT_CREATE_VOICE",
    /**
     * Deletes information about a specific voice in lmnt.
     */
    DELETE_VOICE_INFO: "LMNT_DELETE_VOICE_INFO",
    /**
     * Gets an account in lmnt.
     */
    GET_ACCOUNT: "LMNT_GET_ACCOUNT",
    /**
     * Gets a list of voices in lmnt.
     */
    GET_VOICES_LIST: "LMNT_GET_VOICES_LIST",
    /**
     * Gets information about a specific voice in lmnt.
     */
    GET_VOICE_INFO: "LMNT_GET_VOICE_INFO",
    /**
     * Synthesizes speech from text using a specific voice in lmnt.
     */
    SYNTHESIZE_SPEECH: "LMNT_SYNTHESIZE_SPEECH",
    /**
     * Updates information about a specific voice in lmnt.
     */
    UPDATE_VOICE: "LMNT_UPDATE_VOICE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "LMNT".
 */
export type LMNT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "LMNT".
 */
export type LMNT_TRIGGER_EVENTS = {}
