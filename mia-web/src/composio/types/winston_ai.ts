// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of WINSTON_AI's WINSTON_AI_AI_TEXT_DETECTION tool input.
 */
type WINSTON_AI_AI_TEXT_DETECTION_INPUT = {
  /**
   * Content
   * @description Text to analyze for AI-generated content
   */
  content?: string;
  /**
   * Include Sentences
   * @description Whether to include sentence-level breakdown in results
   * @default false
   */
  includeSentences: boolean;
};

/**
 * Type of WINSTON_AI's WINSTON_AI_AI_TEXT_DETECTION tool output.
 */
type WINSTON_AI_AI_TEXT_DETECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Model Version
       * @description AI detection model version used
       */
      modelVersion: string;
      /**
       * Score
       * @description Probability that the content is AI-generated
       */
      score: number;
      /**
       * Sentences
       * @description Per-sentence analysis if includeSentences=true
       * @default null
       */
      sentences: {
          /**
           * Score
           * @description Probability that the sentence is AI-generated
           */
          score: number;
          /**
           * Text
           * @description Sentence content
           */
          text: string;
          /**
           * Verdict
           * @description Sentence-level classification ('ai' or 'human')
           * @enum {string}
           */
          verdict: "ai" | "human";
      }[] | null;
      /**
       * Verdict
       * @description Overall classification ('ai' or 'human')
       * @enum {string}
       */
      verdict: "ai" | "human";
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
 * Type of WINSTON_AI's WINSTON_AI_PLAGIARISM_DETECTION tool input.
 */
type WINSTON_AI_PLAGIARISM_DETECTION_INPUT = {
  /**
   * Language
   * @description Language code of the text (e.g., 'en'). Defaults to English if omitted.
   * @default null
   */
  language: string | null;
  /**
   * Text
   * @description The text to analyze for plagiarism. Must be >100 characters.
   */
  text?: string;
};

/**
 * Type of WINSTON_AI's WINSTON_AI_PLAGIARISM_DETECTION tool output.
 */
type WINSTON_AI_PLAGIARISM_DETECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Is Plagiarized
       * @description True if text is considered plagiarized.
       */
      is_plagiarized: boolean;
      /**
       * Report Id
       * @description Unique identifier for this plagiarism check report.
       */
      report_id: string;
      /**
       * Score
       * @description Overall detected plagiarism percentage.
       */
      score: number;
      /**
       * Sources
       * @description List of matched sources with details.
       */
      sources: {
          /**
           * Fragment
           * @description Matched portion of the submitted text.
           */
          fragment: string;
          /**
           * Similarity
           * @description Similarity percentage for this source.
           */
          similarity: number;
          /**
           * Url
           * @description Link to the matched source.
           */
          url: string;
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
 * Type of WINSTON_AI's WINSTON_AI_TEXT_COMPARE tool input.
 */
type WINSTON_AI_TEXT_COMPARE_INPUT = {
  /**
   * Text 1
   * @description The first text to compare.
   */
  text_1?: string;
  /**
   * Text 2
   * @description The second text to compare.
   */
  text_2?: string;
};

/**
 * Type of WINSTON_AI's WINSTON_AI_TEXT_COMPARE tool output.
 */
type WINSTON_AI_TEXT_COMPARE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Credits Remaining
       * @description Remaining credits.
       */
      credits_remaining: number;
      /**
       * Credits Used
       * @description Number of credits used for this comparison.
       */
      credits_used: number;
      /**
       * First Text
       * @description Detailed info for first text comparison result.
       */
      first_text: {
          [key: string]: unknown;
      };
      /**
       * Second Text
       * @description Detailed info for second text comparison result.
       */
      second_text: {
          [key: string]: unknown;
      };
      /**
       * Similarity Score
       * @description Cosine similarity score between the texts (0 to 1).
       */
      similarity_score: number;
  } & {
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
 * Type map of all available tool input types for toolkit "WINSTON_AI".
 */
export type WINSTON_AI_TOOL_INPUTS = {
  AI_TEXT_DETECTION: WINSTON_AI_AI_TEXT_DETECTION_INPUT
  PLAGIARISM_DETECTION: WINSTON_AI_PLAGIARISM_DETECTION_INPUT
  TEXT_COMPARE: WINSTON_AI_TEXT_COMPARE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "WINSTON_AI".
 */
export type WINSTON_AI_TOOL_OUTPUTS = {
  AI_TEXT_DETECTION: WINSTON_AI_AI_TEXT_DETECTION_OUTPUT
  PLAGIARISM_DETECTION: WINSTON_AI_PLAGIARISM_DETECTION_OUTPUT
  TEXT_COMPARE: WINSTON_AI_TEXT_COMPARE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's WINSTON_AI toolkit.
 */
export const WINSTON_AI = {
  slug: "winston_ai",
  tools: {
    /**
     * Tool to detect ai-generated text. use when you need to assess whether a given text is ai-generated.
     */
    AI_TEXT_DETECTION: "WINSTON_AI_AI_TEXT_DETECTION",
    /**
     * Tool to detect plagiarism. use after preparing text to verify originality against online sources.
     */
    PLAGIARISM_DETECTION: "WINSTON_AI_PLAGIARISM_DETECTION",
    /**
     * Tool to compare two texts. use when you need to measure similarity between two final texts.
     */
    TEXT_COMPARE: "WINSTON_AI_TEXT_COMPARE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "WINSTON_AI".
 */
export type WINSTON_AI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "WINSTON_AI".
 */
export type WINSTON_AI_TRIGGER_EVENTS = {}
