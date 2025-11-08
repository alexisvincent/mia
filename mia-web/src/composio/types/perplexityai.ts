// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PERPLEXITYAI's PERPLEXITYAI_PERPLEXITY_AI_SEARCH tool input.
 */
type PERPLEXITYAI_PERPLEXITY_AI_SEARCH_INPUT = {
  /**
   * Frequency Penalty
   * @description Multiplicative penalty for new tokens based on their frequency in the text to avoid repetition. Mutually exclusive with the 'presence_penalty' parameter. For example: 0.5, 1.0, 1.5.
   */
  frequency_penalty?: number;
  /**
   * Max Tokens
   * @description The maximum number of tokens to generate. Sum of max_tokens and prompt tokens should not exceed the model's context window limit. Unspecified leads to generation until stop token or context window end. For e.g 100, 150, 200
   */
  max_tokens?: number;
  /**
   * Model
   * @description The name of the model to use for generating completions. Choose a model based on the desired balance between performance and resource usage. For more information check https://docs.perplexity.ai/guides/model-cards
   * @default sonar
   * @enum {string}
   */
  model: "sonar" | "sonar-reasoning-pro" | "sonar-reasoning" | "sonar-pro";
  /**
   * Presence Penalty
   * @description Penalty for new tokens based on their current presence in the text, encouraging topic variety. Mutually exclusive with the 'frequency_penalty' parameter. For example: -2.0, 0.0, 2.0.
   */
  presence_penalty?: number;
  /**
   * Return Citations
   * @description Whether to include citations in the model's response. Citations feature is in closed beta. For e.g True, False
   */
  return_citations?: boolean;
  /**
   * Return Images
   * @description Whether to include images in the model's response. Image generation feature is in closed beta. For e.g True, False
   */
  return_images?: boolean;
  /**
   * Stream
   * @description Whether to stream the response incrementally using server-sent events.  For e.g True, False
   */
  stream?: boolean;
  /**
   * System Content
   * @description The system's Content for specifying instructions. For e.g Be precise and concise., Be elaborate and descriptive
   */
  systemContent?: string;
  /**
   * Temperature
   * @description Controls generation randomness, with 0 being deterministic and values approaching 2 being more random. For e.g 0.0, 0.7, 1.5
   */
  temperature?: number;
  /**
   * Top K
   * @description Limits the number of high-probability tokens to consider for generation. Set to 0 to disable. For e.g 0, 40, 80
   */
  top_k?: number;
  /**
   * Top P
   * @description Nucleus sampling threshold, controlling the token selection pool based on cumulative probability. For e.g 0.1, 0.9, 1.0
   */
  top_p?: number;
  /**
   * User Content
   * @description The user's Content for asking questions or providing input. For e.g How many stars are there in our galaxy?
   */
  userContent?: string;
};

/**
 * Type of PERPLEXITYAI's PERPLEXITYAI_PERPLEXITY_AI_SEARCH tool output.
 */
type PERPLEXITYAI_PERPLEXITY_AI_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response
       * @description A list of completions returned by the API.
       * @default {}
       */
      response: {
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
 * Type map of all available tool input types for toolkit "PERPLEXITYAI".
 */
export type PERPLEXITYAI_TOOL_INPUTS = {
  PERPLEXITY_AI_SEARCH: PERPLEXITYAI_PERPLEXITY_AI_SEARCH_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PERPLEXITYAI".
 */
export type PERPLEXITYAI_TOOL_OUTPUTS = {
  PERPLEXITY_AI_SEARCH: PERPLEXITYAI_PERPLEXITY_AI_SEARCH_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PERPLEXITYAI toolkit.
 */
export const PERPLEXITYAI = {
  slug: "perplexityai",
  tools: {
    /**
     * Perplexity ai search interfaces with perplexity ai to perform search queries and return responses from a range of models. this action manages requests to perplexity ai and processes the resulting completions, which may include text, citations, and images based on selected models and settings. key features include: autoprompting to enhance and refine queries, choice of ai models for various content and performance requirements, temperature settings to manage response randomness, top k and top p filters to fine-tune response generation. beta features include citations and images in results, and response streaming for dynamic interaction. note: the parameters 'presence penalty' and 'frequency penalty' are mutually exclusive and cannot be used simultaneously.
     */
    PERPLEXITY_AI_SEARCH: "PERPLEXITYAI_PERPLEXITY_AI_SEARCH",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PERPLEXITYAI".
 */
export type PERPLEXITYAI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PERPLEXITYAI".
 */
export type PERPLEXITYAI_TRIGGER_EVENTS = {}
