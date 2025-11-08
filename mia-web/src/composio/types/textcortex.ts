// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TEXTCORTEX's TEXTCORTEX_GENERATE_EMAIL tool input.
 */
type TEXTCORTEX_GENERATE_EMAIL_INPUT = {
  /**
   * Context
   * @description Main prompt or context for generating the email.
   */
  context?: string;
  /**
   * Creativity
   * @description Level of creativity for the generated email. One of 'default', 'more', or 'less'.
   * @default null
   * @enum {string|null}
   */
  creativity: "default" | "more" | "less" | null;
  /**
   * Language
   * @description IETF language tag for the output (e.g., 'en', 'de').
   * @default null
   */
  language: string | null;
  /**
   * Tone
   * @description Desired tone of the email. Either 'formal' or 'informal'.
   * @default null
   * @enum {string|null}
   */
  tone: "formal" | "informal" | null;
  /**
   * User Email
   * Format: email
   * @description Email address for personalization. Must be a valid email format.
   * @default null
   */
  user_email: string | null;
  /**
   * Word Count
   * @description Approximate target word count for the email. Must be >= 1 if provided.
   * @default null
   */
  word_count: number | null;
};

/**
 * Type of TEXTCORTEX's TEXTCORTEX_GENERATE_EMAIL tool output.
 */
type TEXTCORTEX_GENERATE_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Completion Tokens
       * @description Number of tokens in the AI completion.
       */
      completion_tokens: number;
      /**
       * Created
       * @description Unix timestamp (seconds) when the request was created.
       */
      created: number;
      /**
       * Id
       * @description Unique identifier for the generation request.
       */
      id: string;
      /**
       * Language
       * @description IETF language tag of the generated output.
       */
      language: string;
      /**
       * Text
       * @description The generated email content (subject and body).
       */
      text: string;
      /**
       * Total Tokens
       * @description Total tokens consumed (prompt + completion).
       */
      total_tokens: number;
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
 * Type of TEXTCORTEX's TEXTCORTEX_SUMMARIZE_TEXT tool input.
 */
type TEXTCORTEX_SUMMARIZE_TEXT_INPUT = {
  /**
   * Language
   * @description Desired output language (ISO code, e.g., 'en'). If omitted, API detects from input.
   * @default null
   */
  language: string | null;
  /**
   * Sentence Num
   * @description Number of sentences in the summary (>=1).
   * @default null
   */
  sentence_num: number | null;
  /**
   * Temperature
   * @description Sampling temperature between 0.0 (deterministic) and 1.0 (creative).
   * @default 0.7
   */
  temperature: number | null;
  /**
   * Text
   * @description The input text to be summarized.
   */
  text?: string;
};

/**
 * Type of TEXTCORTEX's TEXTCORTEX_SUMMARIZE_TEXT tool output.
 */
type TEXTCORTEX_SUMMARIZE_TEXT_OUTPUT = {
  /**
   * Data
   * @description Result data containing the summary and language.
   */
  data?: {
      /**
       * Language
       * @description Language code of the generated summary.
       */
      language: string;
      /**
       * Summary
       * @description The generated summary of the input text.
       */
      summary: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Additional information or error message from API.
   * @default null
   */
  message: string | null;
  /**
   * Status
   * @description API response status: 'success' or 'error'.
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "TEXTCORTEX".
 */
export type TEXTCORTEX_TOOL_INPUTS = {
  GENERATE_EMAIL: TEXTCORTEX_GENERATE_EMAIL_INPUT
  SUMMARIZE_TEXT: TEXTCORTEX_SUMMARIZE_TEXT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TEXTCORTEX".
 */
export type TEXTCORTEX_TOOL_OUTPUTS = {
  GENERATE_EMAIL: TEXTCORTEX_GENERATE_EMAIL_OUTPUT
  SUMMARIZE_TEXT: TEXTCORTEX_SUMMARIZE_TEXT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TEXTCORTEX toolkit.
 */
export const TEXTCORTEX = {
  slug: "textcortex",
  tools: {
    /**
     * Tool to generate email body and subject based on provided details. use when you need to compose or personalize an email from a prompt.
     */
    GENERATE_EMAIL: "TEXTCORTEX_GENERATE_EMAIL",
    /**
     * Tool to summarize text. use when you need a concise summary of longer content. use after confirming the full input text.
     */
    SUMMARIZE_TEXT: "TEXTCORTEX_SUMMARIZE_TEXT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TEXTCORTEX".
 */
export type TEXTCORTEX_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TEXTCORTEX".
 */
export type TEXTCORTEX_TRIGGER_EVENTS = {}
