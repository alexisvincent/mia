// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of OPENROUTER's OPENROUTER_CREATE_CHAT_COMPLETION tool input.
 */
type OPENROUTER_CREATE_CHAT_COMPLETION_INPUT = {
  /**
   * Frequency Penalty
   * @description Penalty for new tokens based on frequency in the text so far.
   * @default null
   */
  frequency_penalty: number | null;
  /**
   * Function Call
   * @description Control function call behavior: 'none', 'auto', or specify {'name': function_name}.
   * @default null
   * @enum {string|null}
   */
  function_call: "none" | "auto" | null;
  /**
   * Functions
   * @description List of functions the model may call.
   * @default null
   */
  functions: {
      /**
       * Description
       * @description Description of the function purpose.
       * @default null
       */
      description: string | null;
      /**
       * Name
       * @description Name of the function to be called by the model.
       */
      name: string;
      /**
       * Parameters
       * @description JSON schema describing function parameters.
       */
      parameters: {
          [key: string]: unknown;
      };
  }[] | null;
  /**
   * Logit Bias
   * @description Adjust the likelihood of specified tokens.
   * @default null
   */
  logit_bias: {
      [key: string]: number;
  } | null;
  /**
   * Max Tokens
   * @description Maximum number of tokens to generate.
   * @default null
   */
  max_tokens: number | null;
  /**
   * Messages
   * @description List of conversation messages to provide as context.
   */
  messages?: {
      /**
       * Content
       * @description Content of the message.
       */
      content: string;
      /**
       * Role
       * @description Role of the message sender.
       * @enum {string}
       */
      role: "system" | "user" | "assistant" | "tool";
  }[];
  /**
   * Model
   * @description ID of the model to use for the chat completion.
   */
  model?: string;
  /**
   * N
   * @description Number of completion choices to generate.
   * @default null
   */
  n: number | null;
  /**
   * Presence Penalty
   * @description Penalty for new tokens based on presence in the text so far.
   * @default null
   */
  presence_penalty: number | null;
  /**
   * Stop
   * @description Sequences where the API will stop generating further tokens.
   * @default null
   */
  stop: string | null;
  /**
   * Stream
   * @description Whether to stream back partial message deltas.
   * @default false
   */
  stream: boolean | null;
  /**
   * Temperature
   * @description Sampling temperature to use, between 0 and 2.
   * @default null
   */
  temperature: number | null;
  /**
   * Top P
   * @description Nucleus sampling probability, between 0 and 1.
   * @default null
   */
  top_p: number | null;
  /**
   * User
   * @description A unique identifier for the end-user to help detect abuse.
   * @default null
   */
  user: string | null;
};

/**
 * Type of OPENROUTER's OPENROUTER_CREATE_CHAT_COMPLETION tool output.
 */
type OPENROUTER_CREATE_CHAT_COMPLETION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Choices
       * @description List of generated completion choices.
       */
      choices: {
          /**
           * ErrorResponse
           * @description Error object if the choice resulted in an error.
           * @default null
           */
          error: {
              /**
               * Code
               * @description Error code from the provider.
               */
              code: number;
              /**
               * Message
               * @description Error message from the provider.
               */
              message: string;
              /**
               * Metadata
               * @description Additional error information.
               * @default null
               */
              metadata: {
                  [key: string]: unknown;
              } | null;
          } | null;
          /**
           * Finish Reason
           * @description The reason why the completion finished.
           * @default null
           */
          finish_reason: string | null;
          /**
           * Message
           * @description The message returned by the model.
           */
          message: {
              /**
               * Content
               * @description Content of the generated message.
               * @default null
               */
              content: string | null;
              /**
               * Role
               * @description Role of the generated message content.
               */
              role: string;
              /**
               * Tool Calls
               * @description Tool calls triggered by the model.
               * @default null
               */
              tool_calls: {
                  /**
                   * Function
                   * @description Function call details.
                   */
                  function: {
                      /**
                       * Arguments
                       * @description Arguments provided to the function call.
                       */
                      arguments: {
                          [key: string]: unknown;
                      };
                      /**
                       * Name
                       * @description Name of the function called by the model.
                       */
                      name: string;
                  };
                  /**
                   * Id
                   * @description Unique identifier for this tool call.
                   */
                  id: string;
                  /**
                   * Type
                   * @description Type of the call (function).
                   * @constant
                   */
                  type: "function";
              }[] | null;
          };
          /**
           * Native Finish Reason
           * @description Provider-specific finish reason.
           * @default null
           */
          native_finish_reason: string | null;
      }[];
      /**
       * Created
       * @description Unix timestamp when the completion was created.
       */
      created: number;
      /**
       * Id
       * @description Unique identifier for the completion.
       */
      id: string;
      /**
       * Model
       * @description Model ID used for the completion.
       */
      model: string;
      /**
       * Object
       * @description Object type returned.
       * @enum {string}
       */
      object: "chat.completion" | "chat.completion.chunk";
      /**
       * System Fingerprint
       * @description Provider fingerprint if supported.
       * @default null
       */
      system_fingerprint: string | null;
      /**
       * Usage
       * @description Token usage information for the request.
       * @default null
       */
      usage: {
          /**
           * Completion Tokens
           * @description Number of tokens generated in the completion.
           */
          completion_tokens: number;
          /**
           * Prompt Tokens
           * @description Number of tokens in the prompt.
           */
          prompt_tokens: number;
          /**
           * Total Tokens
           * @description Total number of tokens used.
           */
          total_tokens: number;
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
 * Type of OPENROUTER's OPENROUTER_CREATE_COMPLETION tool input.
 */
type OPENROUTER_CREATE_COMPLETION_INPUT = {
  /**
   * Max Tokens
   * @description Maximum number of tokens to generate (>=1).
   * @default null
   */
  max_tokens: number | null;
  /**
   * Messages
   * @description List of chat messages. Either 'prompt' or 'messages' must be provided.
   * @default null
   */
  messages: {
      /**
       * Content
       * @description Content of the message.
       */
      content: string;
      /**
       * Name
       * @description Optional name to include in the message.
       * @default null
       */
      name: string | null;
      /**
       * Role
       * @description Role of the message sender.
       * @enum {string}
       */
      role: "user" | "assistant" | "system" | "tool";
      /**
       * Tool Call Id
       * @description ID for tool call messages. Only present if role is 'tool'.
       * @default null
       */
      tool_call_id: string | null;
  }[] | null;
  /**
   * Model
   * @description Identifier of the model to use, e.g., 'openai/gpt-3.5-turbo'.
   */
  model?: string;
  /**
   * Prompt
   * @description Prompt text for completion. Either 'prompt' or 'messages' must be provided.
   * @default null
   */
  prompt: string | null;
  /**
   * Stop
   * @description Up to 4 sequences where the API will stop generating further tokens.
   * @default null
   */
  stop: string | null;
  /**
   * Stream
   * @description If true, stream back partial progress as SSE.
   * @default false
   */
  stream: boolean | null;
  /**
   * Temperature
   * @description Sampling temperature between 0 and 2.
   * @default null
   */
  temperature: number | null;
  /**
   * Top K
   * @description Top-k sampling limit (>=1).
   * @default null
   */
  top_k: number | null;
  /**
   * Top P
   * @description Nucleus sampling probability threshold between 0 and 1.
   * @default null
   */
  top_p: number | null;
};

/**
 * Type of OPENROUTER's OPENROUTER_CREATE_COMPLETION tool output.
 */
type OPENROUTER_CREATE_COMPLETION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Choices
       * @description List of generated completion choices.
       */
      choices: ({
          /**
           * @description Error object if an error occurred.
           * @default null
           */
          error: {
              /**
               * Code
               * @description Error code returned by the API.
               */
              code: number;
              /**
               * Message
               * @description Error message explaining the failure.
               */
              message: string;
              /**
               * Metadata
               * @description Additional error details from the provider.
               * @default null
               */
              metadata: {
                  [key: string]: unknown;
              } | null;
          } | null;
          /**
           * Finish Reason
           * @description Reason for completion finishing.
           * @default null
           */
          finish_reason: string | null;
          /**
           * MessageContent
           * @description Content of the returned message.
           */
          message: {
              /**
               * Content
               * @description Message content.
               * @default null
               */
              content: string | null;
              /**
               * Role
               * @description Role of the speaker.
               */
              role: string;
              /**
               * Tool Calls
               * @description Tool calls made in the message.
               * @default null
               */
              tool_calls: {
                  /**
                   * FunctionCall
                   * @description Function call details.
                   */
                  function: {
                      /**
                       * Arguments
                       * @description Function arguments as JSON schema object.
                       */
                      arguments: {
                          [key: string]: unknown;
                      };
                      /**
                       * Name
                       * @description Name of the function to call.
                       */
                      name: string;
                  };
                  /**
                   * Id
                   * @description Unique ID for the tool call.
                   */
                  id: string;
                  /**
                   * Type
                   * @description Type of the tool call, always 'function'.
                   * @constant
                   */
                  type: "function";
              }[] | null;
          };
          /**
           * Native Finish Reason
           * @description Original provider finish reason.
           * @default null
           */
          native_finish_reason: string | null;
      } | {
          /**
           * Delta
           * @description Delta object for streamed content.
           */
          delta: {
              /**
               * Content
               * @description Generated content fragment.
               * @default null
               */
              content: string | null;
              /**
               * Role
               * @description Role for this fragment, only on first patch.
               * @default null
               */
              role: string | null;
              /**
               * Tool Calls
               * @description List of tool calls in the delta.
               * @default null
               */
              tool_calls: {
                  /**
                   * FunctionCall
                   * @description Function call details.
                   */
                  function: {
                      /**
                       * Arguments
                       * @description Function arguments as JSON schema object.
                       */
                      arguments: {
                          [key: string]: unknown;
                      };
                      /**
                       * Name
                       * @description Name of the function to call.
                       */
                      name: string;
                  };
                  /**
                   * Id
                   * @description Unique ID for the tool call.
                   */
                  id: string;
                  /**
                   * Type
                   * @description Type of the tool call, always 'function'.
                   * @constant
                   */
                  type: "function";
              }[] | null;
          };
          /**
           * @description Error object if an error occurred.
           * @default null
           */
          error: {
              /**
               * Code
               * @description Error code returned by the API.
               */
              code: number;
              /**
               * Message
               * @description Error message explaining the failure.
               */
              message: string;
              /**
               * Metadata
               * @description Additional error details from the provider.
               * @default null
               */
              metadata: {
                  [key: string]: unknown;
              } | null;
          } | null;
          /**
           * Finish Reason
           * @description Reason for completion finishing.
           * @default null
           */
          finish_reason: string | null;
          /**
           * Native Finish Reason
           * @description Original provider finish reason.
           * @default null
           */
          native_finish_reason: string | null;
      })[];
      /**
       * Created
       * @description Unix timestamp of creation.
       */
      created: number;
      /**
       * Id
       * @description Unique ID for the completion.
       */
      id: string;
      /**
       * Model
       * @description Model used for generation.
       */
      model: string;
      /**
       * Object
       * @description API object type, e.g., 'chat.completion'.
       */
      object: string;
      /**
       * ResponseUsage
       * @description Token usage statistics.
       * @default null
       */
      usage: {
          /**
           * Completion Tokens
           * @description Number of completion tokens generated.
           */
          completion_tokens: number;
          /**
           * Prompt Tokens
           * @description Number of prompt tokens used.
           */
          prompt_tokens: number;
          /**
           * Total Tokens
           * @description Sum of prompt and completion tokens.
           */
          total_tokens: number;
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
 * Type of OPENROUTER's OPENROUTER_GET_CREDITS tool input.
 */
type OPENROUTER_GET_CREDITS_INPUT = object;

/**
 * Type of OPENROUTER's OPENROUTER_GET_CREDITS tool output.
 */
type OPENROUTER_GET_CREDITS_OUTPUT = {
  /**
   * Data
   * @description Container with total credits and usage information
   */
  data?: {
      /**
       * Total Credits
       * @description Total credits purchased by the authenticated user
       */
      total_credits: number;
      /**
       * Total Usage
       * @description Total credits used by the authenticated user
       */
      total_usage: number;
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
 * Type of OPENROUTER's OPENROUTER_GET_GENERATION tool input.
 */
type OPENROUTER_GET_GENERATION_INPUT = {
  /**
   * Id
   * @description Unique identifier of the generation to retrieve.
   */
  id?: string;
};

/**
 * Type of OPENROUTER's OPENROUTER_GET_GENERATION tool output.
 */
type OPENROUTER_GET_GENERATION_OUTPUT = {
  /**
   * Data
   * @description The detailed generation metadata.
   */
  data?: {
      /**
       * App Id
       * @description Application identifier associated with this generation.
       * @default null
       */
      app_id: number | null;
      /**
       * Cache Discount
       * @description Discount applied from cache hits, if any.
       * @default null
       */
      cache_discount: number | null;
      /**
       * Cancelled
       * @description Whether this generation was cancelled before completion.
       */
      cancelled: boolean;
      /**
       * Created At
       * @description Timestamp when the generation was created.
       */
      created_at: string;
      /**
       * Finish Reason
       * @description Normalized finish reason (e.g., 'stop', 'length').
       */
      finish_reason: string;
      /**
       * Generation Time
       * @description Time in milliseconds taken by the model to generate the content.
       */
      generation_time: number;
      /**
       * Id
       * @description Unique identifier of the generation.
       */
      id: string;
      /**
       * Is Byok
       * @description Indicates if a BYOK key was used.
       */
      is_byok: boolean;
      /**
       * Latency
       * @description Total latency in milliseconds for response generation.
       */
      latency: number;
      /**
       * Model
       * @description Model used to generate the response.
       */
      model: string;
      /**
       * Moderation Latency
       * @description Latency in milliseconds spent on moderation, if any.
       * @default null
       */
      moderation_latency: number | null;
      /**
       * Native Finish Reason
       * @description Raw finish reason returned by the model.
       */
      native_finish_reason: string;
      /**
       * Native Tokens Completion
       * @description Completion tokens counted by the provider's tokenizer.
       */
      native_tokens_completion: number;
      /**
       * Native Tokens Prompt
       * @description Prompt tokens counted by the provider's tokenizer.
       */
      native_tokens_prompt: number;
      /**
       * Native Tokens Reasoning
       * @description Tokens used for internal reasoning by the model.
       */
      native_tokens_reasoning: number;
      /**
       * Num Media Completion
       * @description Number of media items in the completion.
       * @default null
       */
      num_media_completion: number | null;
      /**
       * Num Media Prompt
       * @description Number of media items in the prompt.
       * @default null
       */
      num_media_prompt: number | null;
      /**
       * Num Search Results
       * @description Number of search results used, if any.
       * @default null
       */
      num_search_results: number | null;
      /**
       * Origin
       * @description Source/origin of the request.
       */
      origin: string;
      /**
       * Provider Name
       * @description Name of the upstream provider used.
       */
      provider_name: string;
      /**
       * Streamed
       * @description Whether this generation was streamed.
       */
      streamed: boolean;
      /**
       * Tokens Completion
       * @description Number of tokens in the completion.
       */
      tokens_completion: number;
      /**
       * Tokens Prompt
       * @description Number of tokens in the prompt.
       */
      tokens_prompt: number;
      /**
       * Total Cost
       * @description Total cost incurred for this generation.
       */
      total_cost: number;
      /**
       * Upstream Id
       * @description Upstream provider's generation ID, if any.
       * @default null
       */
      upstream_id: string | null;
      /**
       * Upstream Inference Cost
       * @description Cost charged by the upstream provider.
       * @default null
       */
      upstream_inference_cost: number | null;
      /**
       * Usage
       * @description Normalized token usage (sum of prompt and completion tokens).
       */
      usage: number;
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
 * Type of OPENROUTER's OPENROUTER_LIST_AVAILABLE_MODELS tool input.
 */
type OPENROUTER_LIST_AVAILABLE_MODELS_INPUT = {
  /**
   * Category
   * @description Filter models by category (e.g., 'programming'). Sorted from most to least used.
   * @default null
   */
  category: string | null;
  /**
   * Use Rss
   * @description Return RSS XML feed instead of JSON (BETA).
   * @default false
   */
  use_rss: boolean;
  /**
   * Use Rss Chat Links
   * @description Use chat URLs instead of model page URLs in RSS items (only applies when use_rss=true) (BETA).
   * @default false
   */
  use_rss_chat_links: boolean;
};

/**
 * Type of OPENROUTER's OPENROUTER_LIST_AVAILABLE_MODELS tool output.
 */
type OPENROUTER_LIST_AVAILABLE_MODELS_OUTPUT = {
  /**
   * Data
   * @description List of available models.
   */
  data?: {
      /**
       * Architecture
       * @description Technical architecture of the model.
       */
      architecture: {
          /**
           * Input Modalities
           * @description Supported input types (e.g., 'text', 'image').
           */
          input_modalities: string[];
          /**
           * Output Modalities
           * @description Supported output types (e.g., 'text').
           */
          output_modalities: string[];
          /**
           * Tokenizer
           * @description Tokenization method used.
           */
          tokenizer: string;
      };
      /**
       * Canonical Slug
       * @description Permanent slug for the model (immutable).
       */
      canonical_slug: string;
      /**
       * Context Length
       * @description Maximum context window size in tokens.
       */
      context_length: number;
      /**
       * Created
       * @description Unix timestamp when the model was added.
       */
      created: number;
      /**
       * Description
       * @description Detailed description of the model's capabilities.
       */
      description: string;
      /**
       * Hugging Face Id
       * @description Identifier for the model on Hugging Face.
       */
      hugging_face_id: string;
      /**
       * Id
       * @description Unique model identifier.
       */
      id: string;
      /**
       * Name
       * @description Human-readable display name for the model.
       */
      name: string;
      /**
       * Per Request Limits
       * @description Rate limiting information as a mapping of limit names to values, or null if no limits.
       * @default null
       */
      per_request_limits: {
          [key: string]: number;
      } | null;
      /**
       * Pricing
       * @description Pricing details for the model.
       */
      pricing: {
          /**
           * Completion
           * @description Price per completion token.
           */
          completion: string;
          /**
           * Image
           * @description Price per image.
           */
          image: string;
          /**
           * Internal Reasoning
           * @description Price per internal reasoning.
           */
          internal_reasoning: string;
          /**
           * Prompt
           * @description Price per prompt token.
           */
          prompt: string;
          /**
           * Request
           * @description Price per request.
           */
          request: string;
          /**
           * Web Search
           * @description Price per web search.
           */
          web_search: string;
      };
      /**
       * Supported Parameters
       * @description Supported API parameters for this model.
       */
      supported_parameters: string[];
      /**
       * Top Provider
       * @description Information about the primary provider.
       */
      top_provider: {
          /**
           * Is Moderated
           * @description Indicates if the content is moderated.
           */
          is_moderated: boolean;
      };
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
 * Type of OPENROUTER's OPENROUTER_OPENROUTER_LIST_MODEL_ENDPOINTS tool input.
 */
type OPENROUTER_OPENROUTER_LIST_MODEL_ENDPOINTS_INPUT = {
  /**
   * Author
   * @description Model author's username as it appears in the model URL (e.g., 'anon').
   */
  author?: string;
  /**
   * Slug
   * @description Model's unique slug under the author namespace (e.g., 'gpt4').
   */
  slug?: string;
};

/**
 * Type of OPENROUTER's OPENROUTER_OPENROUTER_LIST_MODEL_ENDPOINTS tool output.
 */
type OPENROUTER_OPENROUTER_LIST_MODEL_ENDPOINTS_OUTPUT = {
  /** Data */
  data?: {
      /**
       * Architecture
       * @description Model architecture details.
       */
      architecture: {
          /**
           * Input Modalities
           * @description List of modalities accepted as input (e.g., ['text', 'image']).
           */
          input_modalities: string[];
          /**
           * Instruct Type
           * @description Instruction style/type (e.g., 'instruct').
           * @default null
           */
          instruct_type: string | null;
          /**
           * Output Modalities
           * @description List of modalities produced as output (e.g., ['text']).
           */
          output_modalities: string[];
          /**
           * Tokenizer
           * @description Tokenizer name used by the model.
           */
          tokenizer: string;
      };
      /**
       * Created
       * @description UNIX timestamp when model was created.
       */
      created: number;
      /**
       * Description
       * @description Model description.
       * @default null
       */
      description: string | null;
      /** Endpoints */
      endpoints: {
          /**
           * Context Length
           * @description Maximum number of tokens in context.
           */
          context_length: number;
          /**
           * Name
           * @description Endpoint identifier.
           */
          name: string;
          /**
           * Pricing
           * @description Pricing rates for different usage metrics.
           */
          pricing: {
              /**
               * Completion
               * @description Cost per completion token.
               */
              completion: string;
              /**
               * Image
               * @description Cost per image operation.
               */
              image: string;
              /**
               * Prompt
               * @description Cost per prompt token.
               */
              prompt: string;
              /**
               * Request
               * @description Cost per request.
               */
              request: string;
          };
          /**
           * Provider Name
           * @description Name of the provider serving this endpoint.
           */
          provider_name: string;
          /**
           * Supported Parameters
           * @description List of supported parameter names for this endpoint.
           */
          supported_parameters: string[];
      }[];
      /**
       * Id
       * @description Unique model identifier.
       */
      id: string;
      /**
       * Name
       * @description Human-readable model name.
       */
      name: string;
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
 * Type of OPENROUTER's OPENROUTER_OPENROUTER_LIST_PROVIDERS tool input.
 */
type OPENROUTER_OPENROUTER_LIST_PROVIDERS_INPUT = object;

/**
 * Type of OPENROUTER's OPENROUTER_OPENROUTER_LIST_PROVIDERS tool output.
 */
type OPENROUTER_OPENROUTER_LIST_PROVIDERS_OUTPUT = {
  /**
   * Data
   * @description List of available AI model providers
   */
  data?: ({
      /**
       * Description
       * @description Description of the provider, if available
       * @default null
       */
      description: string | null;
      /**
       * Name
       * @description Human-readable name of the provider
       * @default null
       */
      name: string | null;
      /**
       * Slug
       * @description Unique identifier (slug) of the provider
       */
      slug: string;
  } & {
      [key: string]: unknown;
  })[];
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
 * Type map of all available tool input types for toolkit "OPENROUTER".
 */
export type OPENROUTER_TOOL_INPUTS = {
  CREATE_CHAT_COMPLETION: OPENROUTER_CREATE_CHAT_COMPLETION_INPUT
  CREATE_COMPLETION: OPENROUTER_CREATE_COMPLETION_INPUT
  GET_CREDITS: OPENROUTER_GET_CREDITS_INPUT
  GET_GENERATION: OPENROUTER_GET_GENERATION_INPUT
  LIST_AVAILABLE_MODELS: OPENROUTER_LIST_AVAILABLE_MODELS_INPUT
  OPENROUTER_LIST_MODEL_ENDPOINTS: OPENROUTER_OPENROUTER_LIST_MODEL_ENDPOINTS_INPUT
  OPENROUTER_LIST_PROVIDERS: OPENROUTER_OPENROUTER_LIST_PROVIDERS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "OPENROUTER".
 */
export type OPENROUTER_TOOL_OUTPUTS = {
  CREATE_CHAT_COMPLETION: OPENROUTER_CREATE_CHAT_COMPLETION_OUTPUT
  CREATE_COMPLETION: OPENROUTER_CREATE_COMPLETION_OUTPUT
  GET_CREDITS: OPENROUTER_GET_CREDITS_OUTPUT
  GET_GENERATION: OPENROUTER_GET_GENERATION_OUTPUT
  LIST_AVAILABLE_MODELS: OPENROUTER_LIST_AVAILABLE_MODELS_OUTPUT
  OPENROUTER_LIST_MODEL_ENDPOINTS: OPENROUTER_OPENROUTER_LIST_MODEL_ENDPOINTS_OUTPUT
  OPENROUTER_LIST_PROVIDERS: OPENROUTER_OPENROUTER_LIST_PROVIDERS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's OPENROUTER toolkit.
 */
export const OPENROUTER = {
  slug: "openrouter",
  tools: {
    /**
     * Tool to generate a chat-style completion. use after assembling messages and selecting a model. supports streaming and function calls.
     */
    CREATE_CHAT_COMPLETION: "OPENROUTER_CREATE_CHAT_COMPLETION",
    /**
     * Tool to generate a text completion for a given prompt or set of messages. use when you need a model-generated response from a specified model.
     */
    CREATE_COMPLETION: "OPENROUTER_CREATE_COMPLETION",
    /**
     * Tool to get the current api credit balance for the authenticated user. use after authenticating to monitor remaining credits before making further api calls.
     */
    GET_CREDITS: "OPENROUTER_GET_CREDITS",
    /**
     * Tool to retrieve a generation result by its unique id. use after a generation completes to fetch metadata like token counts, cost, and latency.
     */
    GET_GENERATION: "OPENROUTER_GET_GENERATION",
    /**
     * Tool to list available models via openrouter api. use after confirming authentication to fetch the model catalog.
     */
    LIST_AVAILABLE_MODELS: "OPENROUTER_LIST_AVAILABLE_MODELS",
    /**
     * Tool to list endpoints for a specific model. use after specifying model author and slug to get endpoint details including pricing, context length, and supported parameters.
     */
    OPENROUTER_LIST_MODEL_ENDPOINTS: "OPENROUTER_OPENROUTER_LIST_MODEL_ENDPOINTS",
    /**
     * Tool to list all ai model providers available through the openrouter api. use after authentication to retrieve available provider options for routing configuration.
     */
    OPENROUTER_LIST_PROVIDERS: "OPENROUTER_OPENROUTER_LIST_PROVIDERS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "OPENROUTER".
 */
export type OPENROUTER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "OPENROUTER".
 */
export type OPENROUTER_TRIGGER_EVENTS = {}
