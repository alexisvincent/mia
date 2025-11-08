// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DICTIONARY_API's DICTIONARY_API_GET_WORD_DEFINITION_V2 tool input.
 */
type DICTIONARY_API_GET_WORD_DEFINITION_V2_INPUT = {
  /**
   * Language
   * @description Two-letter ISO 639-1 language code, e.g., 'en'
   */
  language?: string;
  /**
   * Word
   * @description Word to define, e.g., 'test'
   */
  word?: string;
};

/**
 * Type of DICTIONARY_API's DICTIONARY_API_GET_WORD_DEFINITION_V2 tool output.
 */
type DICTIONARY_API_GET_WORD_DEFINITION_V2_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Entries
       * @description List of dictionary entries returned by the API
       */
      entries: {
          /**
           * License
           * @description License information with 'name' and 'url'
           * @default null
           */
          license: {
              [key: string]: string;
          } | null;
          /**
           * Meanings
           * @description Meanings grouped by part of speech
           */
          meanings: {
              /**
               * Definitions
               * @description List of definitions for this part of speech
               */
              definitions: {
                  /**
                   * Antonyms
                   * @description List of antonyms
                   * @default null
                   */
                  antonyms: string[] | null;
                  /**
                   * Definition
                   * @description Definition of the word
                   */
                  definition: string;
                  /**
                   * Example
                   * @description Example sentence illustrating the definition
                   * @default null
                   */
                  example: string | null;
                  /**
                   * Synonyms
                   * @description List of synonyms
                   * @default null
                   */
                  synonyms: string[] | null;
              }[];
              /**
               * Part Of Speech
               * @description Part of speech, e.g., 'noun', 'verb'
               */
              partOfSpeech: string;
          }[];
          /**
           * Origin
           * @description Etymology or origin of the word if available
           * @default null
           */
          origin: string | null;
          /**
           * Phonetics
           * @description Pronunciations and audio details
           */
          phonetics: {
              /**
               * Audio
               * Format: uri
               * @description URL to pronunciation audio file
               * @default null
               */
              audio: string | null;
              /**
               * Text
               * @description Phonetic transcription, e.g., '/tɛst/'
               * @default null
               */
              text: string | null;
          }[];
          /**
           * Source Urls
           * @description Source URLs for this entry
           */
          sourceUrls: string[];
          /**
           * Word
           * @description The queried word
           */
          word: string;
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
 * Type map of all available tool input types for toolkit "DICTIONARY_API".
 */
export type DICTIONARY_API_TOOL_INPUTS = {
  GET_WORD_DEFINITION_V2: DICTIONARY_API_GET_WORD_DEFINITION_V2_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DICTIONARY_API".
 */
export type DICTIONARY_API_TOOL_OUTPUTS = {
  GET_WORD_DEFINITION_V2: DICTIONARY_API_GET_WORD_DEFINITION_V2_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DICTIONARY_API toolkit.
 */
export const DICTIONARY_API = {
  slug: "dictionary_api",
  tools: {
    /**
     * Tool to retrieve definitions, phonetics, origin, and meanings of a given word using freedictionaryapi v2. use when you need comprehensive lexical data for a specific word.
     */
    GET_WORD_DEFINITION_V2: "DICTIONARY_API_GET_WORD_DEFINITION_V2",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DICTIONARY_API".
 */
export type DICTIONARY_API_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DICTIONARY_API".
 */
export type DICTIONARY_API_TRIGGER_EVENTS = {}
