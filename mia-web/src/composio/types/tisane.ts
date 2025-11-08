// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TISANE's TISANE_ANALYZE_TEXT tool input.
 */
type TISANE_ANALYZE_TEXT_INPUT = {
  /**
   * Content
   * @description Text content to be analyzed
   */
  content?: string;
  /**
   * Language
   * @description IETF BCP-47 language tag for the input text
   */
  language?: string;
  /**
   * Settings
   * @description Optional analysis settings. Empty dict for defaults (see Tisane API Configuration Guide).
   */
  settings?: {
      [key: string]: unknown;
  };
};

/**
 * Type of TISANE's TISANE_ANALYZE_TEXT tool output.
 */
type TISANE_ANALYZE_TEXT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Abuse
       * @description List of problematic content items detected
       * @default null
       */
      abuse: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Entities Summary
       * @description Summary of named entities detected
       * @default null
       */
      entities_summary: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Language
       * @description Detected language code, only present if language identification was invoked
       * @default null
       */
      language: string | null;
      /**
       * Memory
       * @description Memory analysis output
       * @default null
       */
      memory: {
          [key: string]: unknown;
      } | null;
      /**
       * Sentence List
       * @description Sentence-level analysis results
       * @default null
       */
      sentence_list: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Sentiment Expressions
       * @description Extracted sentiment snippets
       * @default null
       */
      sentiment_expressions: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Text
       * @description Original input text
       */
      text: string;
      /**
       * Topics
       * @description Detected topics as strings or detailed objects
       * @default null
       */
      topics: (string | {
          [key: string]: unknown;
      })[] | null;
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
 * Type of TISANE's TISANE_CALCULATE_SIMILARITY tool input.
 */
type TISANE_CALCULATE_SIMILARITY_INPUT = {
  /**
   * Content1
   * @description First text fragment to compare.
   */
  content1?: string;
  /**
   * Content2
   * @description Second text fragment to compare.
   */
  content2?: string;
  /**
   * Language1
   * @description IETF language code for content1 (e.g., 'en').
   */
  language1?: string;
  /**
   * Language2
   * @description IETF language code for content2 (e.g., 'en').
   */
  language2?: string;
  /**
   * Settings
   * @description Additional settings for similarity calculation, leave empty for defaults.
   */
  settings?: {
      [key: string]: unknown;
  };
};

/**
 * Type of TISANE's TISANE_CALCULATE_SIMILARITY tool output.
 */
type TISANE_CALCULATE_SIMILARITY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Similarity
       * @description Semantic similarity score between 0.0 and 1.0.
       */
      similarity: number;
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
 * Type of TISANE's TISANE_DETECT_LANGUAGE tool input.
 */
type TISANE_DETECT_LANGUAGE_INPUT = {
  /**
   * Text
   * @description The text whose language needs to be detected.
   */
  text?: string;
};

/**
 * Type of TISANE's TISANE_DETECT_LANGUAGE tool output.
 */
type TISANE_DETECT_LANGUAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Language
       * @description Detected language code, e.g., 'en', 'fr'.
       */
      language: string;
      /**
       * Score
       * @description Confidence score for the detected language, range 0.0 to 1.0.
       */
      score: number;
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
 * Type of TISANE's TISANE_EXTRACT_TEXT tool input.
 */
type TISANE_EXTRACT_TEXT_INPUT = {
  /**
   * Content
   * @description The markup (HTML, CSS, JS, JSON) to strip and decode into plain text. Must be UTF-8 text; binary content is not supported.
   */
  content?: string;
};

/**
 * Type of TISANE's TISANE_EXTRACT_TEXT tool output.
 */
type TISANE_EXTRACT_TEXT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Text
       * @description The extracted plain text from the provided content.
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
 * Type of TISANE's TISANE_GET_SUPPORTED_LANGUAGES tool input.
 */
type TISANE_GET_SUPPORTED_LANGUAGES_INPUT = object;

/**
 * Type of TISANE's TISANE_GET_SUPPORTED_LANGUAGES tool output.
 */
type TISANE_GET_SUPPORTED_LANGUAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Languages
       * @description List of supported language objects
       */
      languages: {
          /**
           * English Name
           * @description English name of the language
           */
          englishName: string;
          /**
           * Font Face
           * @description Recommended font for display
           */
          fontFace: string;
          /**
           * Iso Code
           * @description IETF language tag (e.g., 'en', 'fr')
           */
          isoCode: string;
          /**
           * Latin
           * @description Whether the language uses Latin script
           */
          latin: boolean;
          /**
           * Name
           * @description Native name of the language
           */
          name: string;
          /**
           * Native Encoding
           * @description Encoding of the language (e.g., 'utf-8')
           */
          nativeEncoding: string;
          /**
           * Right To Left
           * @description Whether the language uses right-to-left script
           */
          rightToLeft: boolean;
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
 * Type of TISANE's TISANE_TRANSFORM_TEXT tool input.
 */
type TISANE_TRANSFORM_TEXT_INPUT = {
  /**
   * Content
   * @description Text content to transform (UTF-8).
   */
  content?: string;
  /**
   * From
   * @description Source language IETF tag. Use '*' or 'lang1|lang2' to auto-detect.
   */
  from?: string;
  /**
   * Settings
   * @description Optional translation settings (see Tisane API Configuration).
   */
  settings?: {
      [key: string]: unknown;
  };
  /**
   * To
   * @description Target language IETF tag. If same as source, text will be paraphrased.
   */
  to?: string;
};

/**
 * Type of TISANE's TISANE_TRANSFORM_TEXT tool output.
 */
type TISANE_TRANSFORM_TEXT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Text
       * @description Transformed text (translated or paraphrased).
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
 * Type map of all available tool input types for toolkit "TISANE".
 */
export type TISANE_TOOL_INPUTS = {
  ANALYZE_TEXT: TISANE_ANALYZE_TEXT_INPUT
  CALCULATE_SIMILARITY: TISANE_CALCULATE_SIMILARITY_INPUT
  DETECT_LANGUAGE: TISANE_DETECT_LANGUAGE_INPUT
  EXTRACT_TEXT: TISANE_EXTRACT_TEXT_INPUT
  GET_SUPPORTED_LANGUAGES: TISANE_GET_SUPPORTED_LANGUAGES_INPUT
  TRANSFORM_TEXT: TISANE_TRANSFORM_TEXT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TISANE".
 */
export type TISANE_TOOL_OUTPUTS = {
  ANALYZE_TEXT: TISANE_ANALYZE_TEXT_OUTPUT
  CALCULATE_SIMILARITY: TISANE_CALCULATE_SIMILARITY_OUTPUT
  DETECT_LANGUAGE: TISANE_DETECT_LANGUAGE_OUTPUT
  EXTRACT_TEXT: TISANE_EXTRACT_TEXT_OUTPUT
  GET_SUPPORTED_LANGUAGES: TISANE_GET_SUPPORTED_LANGUAGES_OUTPUT
  TRANSFORM_TEXT: TISANE_TRANSFORM_TEXT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TISANE toolkit.
 */
export const TISANE = {
  slug: "tisane",
  tools: {
    /**
     * Tool to analyze input text for detailed nlu insights. use after preparing text when you need to detect sentiment, entities, topics, and other linguistic features.
     */
    ANALYZE_TEXT: "TISANE_ANALYZE_TEXT",
    /**
     * Tool to calculate semantic similarity between two text fragments. use when you need a numeric similarity score (0-1) for two texts.
     */
    CALCULATE_SIMILARITY: "TISANE_CALCULATE_SIMILARITY",
    /**
     * Tool to detect the language of the provided text. use when you need to identify the language code.
     */
    DETECT_LANGUAGE: "TISANE_DETECT_LANGUAGE",
    /**
     * Tool to extract raw text from markup content. use when cleaning html, css, js, or json to get pure decoded text. use after confirming the input is utf-8 text; this does not process binary content.
     */
    EXTRACT_TEXT: "TISANE_EXTRACT_TEXT",
    /**
     * Tool to list all languages supported by the api. use when needing to discover available languages for text analysis or processing. call before submitting text to ensure support.
     */
    GET_SUPPORTED_LANGUAGES: "TISANE_GET_SUPPORTED_LANGUAGES",
    /**
     * Tool to translate or paraphrase text. use when you need to convert content between languages or paraphrase within the same language.
     */
    TRANSFORM_TEXT: "TISANE_TRANSFORM_TEXT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TISANE".
 */
export type TISANE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TISANE".
 */
export type TISANE_TRIGGER_EVENTS = {}
