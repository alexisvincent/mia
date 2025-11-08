// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of AIVOOV's AIVOOV_LIST_VOICES tool input.
 */
type AIVOOV_LIST_VOICES_INPUT = {
  /**
   * Language Code
   * @description BCP-47 language code to filter voices, e.g., 'en-US'. Optional.
   * @default null
   */
  language_code: string | null;
};

/**
 * Type of AIVOOV's AIVOOV_LIST_VOICES tool output.
 */
type AIVOOV_LIST_VOICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Language
       * @description Language code of the voice, e.g., 'en-US'.
       */
      language: string;
      /**
       * Name
       * @description Human-readable name of the voice.
       */
      name: string;
      /**
       * Voice Id
       * @description Unique identifier of the voice.
       */
      voice_id: string;
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
 * Type map of all available tool input types for toolkit "AIVOOV".
 */
export type AIVOOV_TOOL_INPUTS = {
  LIST_VOICES: AIVOOV_LIST_VOICES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "AIVOOV".
 */
export type AIVOOV_TOOL_OUTPUTS = {
  LIST_VOICES: AIVOOV_LIST_VOICES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's AIVOOV toolkit.
 */
export const AIVOOV = {
  slug: "aivoov",
  tools: {
    /**
     * Tool to retrieve a list of available voices. use to filter voices by language after confirming api key is valid.
     */
    LIST_VOICES: "AIVOOV_LIST_VOICES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "AIVOOV".
 */
export type AIVOOV_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "AIVOOV".
 */
export type AIVOOV_TRIGGER_EVENTS = {}
