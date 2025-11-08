// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ANTHROPIC_ADMINISTRATOR's ANTHROPIC_ADMINISTRATOR_CREATE_MESSAGE tool input.
 */
type ANTHROPIC_ADMINISTRATOR_CREATE_MESSAGE_INPUT = {
  /**
   * Max Tokens
   * @description Maximum number of tokens to generate
   * @default null
   */
  max_tokens: number | null;
  /**
   * Messages
   * @description List of messages forming the conversation so far
   */
  messages?: {
      /**
       * Content
       * @description Content of the message
       */
      content: string;
      /**
       * Role
       * @description Role of the message sender
       * @enum {string}
       */
      role: "user" | "assistant";
  }[];
  /**
   * Model
   * @description Model to use for completion, e.g., 'claude-2' or 'claude-3.5'
   */
  model?: string;
  /**
   * Temperature
   * @description Sampling temperature between 0 (deterministic) and 1 (most random)
   * @default null
   */
  temperature: number | null;
  /**
   * Top K
   * @description Sample from the top K tokens during generation
   * @default null
   */
  top_k: number | null;
  /**
   * Top P
   * @description Nucleus sampling cutoff probability
   * @default null
   */
  top_p: number | null;
};

/**
 * Type of ANTHROPIC_ADMINISTRATOR's ANTHROPIC_ADMINISTRATOR_CREATE_MESSAGE tool output.
 */
type ANTHROPIC_ADMINISTRATOR_CREATE_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Generated message content blocks
       */
      content: {
          /**
           * Text
           * @description Text content of the block, if applicable.
           * @default null
           */
          text: string | null;
          /**
           * Type
           * @description Type of content block.
           * @enum {string}
           */
          type: "text" | "thinking" | "tool_use" | "container_upload";
      }[];
      /**
       * Id
       * @description Unique identifier for the message
       */
      id: string;
      /**
       * Model
       * @description Model used for generation
       */
      model: string;
      /**
       * Role
       * @description Role of the returned message
       * @constant
       */
      role: "assistant";
      /**
       * Stop Reason
       * @description Reason generation stopped
       * @enum {string}
       */
      stop_reason: "end_turn" | "max_tokens" | "stop_sequence" | "tool_use" | "pause_turn" | "refusal";
      /**
       * Stop Sequence
       * @description Sequence that caused generation to stop, if any
       * @default null
       */
      stop_sequence: string | null;
      /**
       * Type
       * @description Object type, always 'message'
       * @constant
       */
      type: "message";
      /**
       * Usage
       * @description Token usage statistics
       */
      usage: {
          /**
           * Cache Creation Input Tokens
           * @description Number of tokens for cache creation input
           */
          cache_creation_input_tokens: number;
          /**
           * Cache Read Input Tokens
           * @description Number of tokens read from cache for input
           */
          cache_read_input_tokens: number;
          /**
           * Input Tokens
           * @description Number of tokens in input prompt
           */
          input_tokens: number;
          /**
           * Output Tokens
           * @description Number of tokens generated in output
           */
          output_tokens: number;
          /**
           * Service Tier
           * @description Service tier for the request, e.g., 'standard'
           */
          service_tier: string;
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
 * Type of ANTHROPIC_ADMINISTRATOR's ANTHROPIC_ADMINISTRATOR_GET_MODEL tool input.
 */
type ANTHROPIC_ADMINISTRATOR_GET_MODEL_INPUT = {
  /**
   * Model Id
   * @description ID of the model to retrieve.
   */
  model_id?: string;
};

/**
 * Type of ANTHROPIC_ADMINISTRATOR's ANTHROPIC_ADMINISTRATOR_GET_MODEL tool output.
 */
type ANTHROPIC_ADMINISTRATOR_GET_MODEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Time the model was created (ISO8601).
       */
      created_at: string;
      /**
       * Display Name
       * @description Human-readable display name of the model.
       */
      display_name: string;
      /**
       * Id
       * @description Unique identifier of the model.
       */
      id: string;
      /**
       * Type
       * @description Type of the object returned.
       */
      type: string;
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
 * Type of ANTHROPIC_ADMINISTRATOR's ANTHROPIC_ADMINISTRATOR_LIST_MODELS tool input.
 */
type ANTHROPIC_ADMINISTRATOR_LIST_MODELS_INPUT = object;

/**
 * Type of ANTHROPIC_ADMINISTRATOR's ANTHROPIC_ADMINISTRATOR_LIST_MODELS tool output.
 */
type ANTHROPIC_ADMINISTRATOR_LIST_MODELS_OUTPUT = {
  /**
   * Data
   * @description List of available models with metadata.
   */
  data?: {
      /**
       * Created At
       * @description Time the model was created (ISO8601).
       */
      created_at: string;
      /**
       * Display Name
       * @description Human-readable display name of the model.
       */
      display_name: string;
      /**
       * Id
       * @description Unique identifier for the model.
       */
      id: string;
      /**
       * Type
       * @description Type of the object returned.
       */
      type: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * First Id
   * @description Identifier of the first model in the list.
   * @default null
   */
  first_id: string | null;
  /**
   * Has More
   * @description Whether more results are available.
   */
  has_more?: boolean;
  /**
   * Last Id
   * @description Identifier of the last model in the list.
   * @default null
   */
  last_id: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ANTHROPIC_ADMINISTRATOR's ANTHROPIC_ADMINISTRATOR_PROMPT_CACHING tool input.
 */
type ANTHROPIC_ADMINISTRATOR_PROMPT_CACHING_INPUT = {
  /**
   * Max Tokens
   * @description Max tokens to generate in the response.
   * @default null
   */
  max_tokens: number | null;
  /**
   * Messages
   * @description List of message blocks (user and assistant turns).
   */
  messages?: {
      /**
       * CacheControl
       * @description Parameters to control prompt caching behavior.
       * @default null
       */
      cache_control: {
          /**
           * Ttl
           * @description Cache time-to-live: 5 minutes or 1 hour.
           * @enum {string}
           */
          ttl: "5m" | "1h";
          /**
           * Type
           * @description Cache type. Currently only 'ephemeral' (default 5m TTL) supported.
           * @constant
           */
          type: "ephemeral";
      } | null;
      /**
       * Content
       * @description Block content. Can be a text string or structured blocks.
       */
      content: string | null;
      /**
       * Role
       * @description Role of the speaker in this block.
       * @enum {string}
       */
      role: "user" | "assistant";
  }[];
  /**
   * Model
   * @description Which Claude model to use, e.g., 'claude-3.5'.
   */
  model?: string;
  /**
   * Stream
   * @description Stream back tokens if true.
   * @default null
   */
  stream: boolean | null;
  /**
   * System
   * @description Optional system blocks preceding the conversation. Useful for static instructions or context.
   * @default null
   */
  system: {
      /**
       * CacheControl
       * @description Parameters to control prompt caching behavior.
       * @default null
       */
      cache_control: {
          /**
           * Ttl
           * @description Cache time-to-live: 5 minutes or 1 hour.
           * @enum {string}
           */
          ttl: "5m" | "1h";
          /**
           * Type
           * @description Cache type. Currently only 'ephemeral' (default 5m TTL) supported.
           * @constant
           */
          type: "ephemeral";
      } | null;
      /**
       * Content
       * @description Block content. Can be a text string or structured blocks.
       */
      content: string | null;
      /**
       * Role
       * @description Role of the speaker in this block.
       * @enum {string}
       */
      role: "user" | "assistant";
  }[] | null;
  /**
   * Temperature
   * @description Sampling temperature between 0 and 1.
   * @default null
   */
  temperature: number | null;
  /**
   * Top P
   * @description Nucleus sampling cutoff probability.
   * @default null
   */
  top_p: number | null;
};

/**
 * Type of ANTHROPIC_ADMINISTRATOR's ANTHROPIC_ADMINISTRATOR_PROMPT_CACHING tool output.
 */
type ANTHROPIC_ADMINISTRATOR_PROMPT_CACHING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Generated content blocks.
       */
      content: {
          [key: string]: unknown;
      }[];
      /**
       * Id
       * @description Unique ID of the generated message.
       */
      id: string;
      /**
       * Model
       * @description Model used for generation.
       */
      model: string;
      /**
       * Role
       * @description Role of the actor, always 'assistant'.
       * @constant
       */
      role: "assistant";
      /**
       * Stop Reason
       * @description Reason generation stopped.
       * @default null
       */
      stop_reason: string | null;
      /**
       * Stop Sequence
       * @description Sequence that triggered stop, if any.
       * @default null
       */
      stop_sequence: string | null;
      /**
       * Type
       * @description Object type, always 'message'.
       * @constant
       */
      type: "message";
      /**
       * Usage
       * @description Token usage metrics, includes cache fields.
       */
      usage: {
          /**
           * Cache Creation
           * @description Breakdown of tokens billed per cache TTL write (e.g. 'ephemeral_1h_input_tokens').
           * @default null
           */
          cache_creation: {
              [key: string]: number;
          } | null;
          /**
           * Cache Creation Input Tokens
           * @description Tokens billed to create cache entries.
           */
          cache_creation_input_tokens: number;
          /**
           * Cache Read Input Tokens
           * @description Tokens read from cache.
           */
          cache_read_input_tokens: number;
          /**
           * Input Tokens
           * @description Number of input tokens.
           */
          input_tokens: number;
          /**
           * Output Tokens
           * @description Number of tokens generated.
           */
          output_tokens: number;
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
 * Type map of all available tool input types for toolkit "ANTHROPIC_ADMINISTRATOR".
 */
export type ANTHROPIC_ADMINISTRATOR_TOOL_INPUTS = {
  CREATE_MESSAGE: ANTHROPIC_ADMINISTRATOR_CREATE_MESSAGE_INPUT
  GET_MODEL: ANTHROPIC_ADMINISTRATOR_GET_MODEL_INPUT
  LIST_MODELS: ANTHROPIC_ADMINISTRATOR_LIST_MODELS_INPUT
  PROMPT_CACHING: ANTHROPIC_ADMINISTRATOR_PROMPT_CACHING_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ANTHROPIC_ADMINISTRATOR".
 */
export type ANTHROPIC_ADMINISTRATOR_TOOL_OUTPUTS = {
  CREATE_MESSAGE: ANTHROPIC_ADMINISTRATOR_CREATE_MESSAGE_OUTPUT
  GET_MODEL: ANTHROPIC_ADMINISTRATOR_GET_MODEL_OUTPUT
  LIST_MODELS: ANTHROPIC_ADMINISTRATOR_LIST_MODELS_OUTPUT
  PROMPT_CACHING: ANTHROPIC_ADMINISTRATOR_PROMPT_CACHING_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ANTHROPIC_ADMINISTRATOR toolkit.
 */
export const ANTHROPIC_ADMINISTRATOR = {
  slug: "anthropic_administrator",
  tools: {
    /**
     * Tool to create a new message completion. use when you need to generate assistant text given a conversation history.
     */
    CREATE_MESSAGE: "ANTHROPIC_ADMINISTRATOR_CREATE_MESSAGE",
    /**
     * Tool to retrieve details of a specific model by its id. use after confirming the model id is valid.
     */
    GET_MODEL: "ANTHROPIC_ADMINISTRATOR_GET_MODEL",
    /**
     * Tool to list available models. use when you need to see which models are available before selection.
     */
    LIST_MODELS: "ANTHROPIC_ADMINISTRATOR_LIST_MODELS",
    /**
     * Tool to cache and reuse prompt content to reduce costs and latency. use after you have static prompt portions you intend to reuse across calls.
     */
    PROMPT_CACHING: "ANTHROPIC_ADMINISTRATOR_PROMPT_CACHING",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ANTHROPIC_ADMINISTRATOR".
 */
export type ANTHROPIC_ADMINISTRATOR_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ANTHROPIC_ADMINISTRATOR".
 */
export type ANTHROPIC_ADMINISTRATOR_TRIGGER_EVENTS = {}
