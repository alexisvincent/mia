// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of APIPIE_AI's APIPIE_AI_DELETE_VECTORS tool input.
 */
type APIPIE_AI_DELETE_VECTORS_INPUT = {
  /**
   * Collection Name
   * @description Name of the vector collection to delete from.
   */
  collection_name?: string;
  /**
   * Delete All
   * @description Whether to delete all vectors in the collection; if true, ignores ids and filter.
   * @default false
   */
  delete_all: boolean;
  /**
   * Filter
   * @description Metadata filter for selecting vectors to delete; only used when delete_all is false.
   * @default null
   */
  filter: {
      [key: string]: unknown;
  } | null;
  /**
   * Ids
   * @description List of vector IDs to delete; required when delete_all is false.
   * @default null
   */
  ids: string[] | null;
};

/**
 * Type of APIPIE_AI's APIPIE_AI_DELETE_VECTORS tool output.
 */
type APIPIE_AI_DELETE_VECTORS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Collection Name
       * @description Name of the vector collection acted upon.
       */
      collection_name: string;
      /**
       * Delete All
       * @description Whether all vectors were deleted.
       */
      delete_all: boolean;
      /**
       * Filter
       * @description Filter criteria applied for deletion.
       * @default null
       */
      filter: {
          [key: string]: unknown;
      } | null;
      /**
       * Ids
       * @description List of vector IDs deleted.
       * @default null
       */
      ids: string[] | null;
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
 * Type of APIPIE_AI's APIPIE_AI_FETCH_MODEL_RESTRICTIONS tool input.
 */
type APIPIE_AI_FETCH_MODEL_RESTRICTIONS_INPUT = {
  /**
   * Restrictions
   * @description Flag to list country restrictions; include ?restrictions in the query.
   * @default
   * @constant
   */
  restrictions: "";
};

/**
 * Type of APIPIE_AI's APIPIE_AI_FETCH_MODEL_RESTRICTIONS tool output.
 */
type APIPIE_AI_FETCH_MODEL_RESTRICTIONS_OUTPUT = {
  /**
   * Data
   * @description List of model provider restriction records.
   */
  data?: {
      /**
       * Countries
       * @description JSON-encoded string of restricted countries. Each entry has 'name' and 'alpha-2' fields. JSON parse if needed.
       */
      countries: string;
      /**
       * Name
       * @description Name of the model provider (e.g., 'openai').
       */
      name: string;
      /**
       * Restrict Id
       * @description Unique identifier for this restriction entry.
       */
      restrict_id: number;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Object
   * @description The type of this object, always 'list'.
   * @constant
   */
  object?: "list";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of APIPIE_AI's APIPIE_AI_GET_QUERY_HISTORY tool input.
 */
type APIPIE_AI_GET_QUERY_HISTORY_INPUT = {
  /**
   * Limit
   * @description Limits the number of returned queries per page.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset used for pagination.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of APIPIE_AI's APIPIE_AI_GET_QUERY_HISTORY tool output.
 */
type APIPIE_AI_GET_QUERY_HISTORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of historic query records.
       */
      items: {
          /**
           * App
           * @description Name of the application or API key used.
           */
          app: string;
          /**
           * Chat Id
           * @description Chat session ID if applicable, otherwise null.
           * @default null
           */
          chat_id: number | null;
          /**
           * Cost
           * @description Total cost of the query as a decimal string.
           */
          cost: string;
          /**
           * Id
           * @description Unique internal ID of the query.
           */
          id: number;
          /**
           * Latency Ms
           * @description Latency of the query in milliseconds.
           */
          latency_ms: number;
          /**
           * Prompt Char
           * @description Number of characters in the prompt.
           */
          prompt_char: number;
          /**
           * Prompt Tokens
           * @description Number of tokens in the prompt.
           */
          prompt_tokens: number;
          /**
           * Provider
           * @description AI provider used for the query.
           */
          provider: string;
          /**
           * Response Char
           * @description Number of characters in the response.
           */
          response_char: number;
          /**
           * Response Tokens
           * @description Number of tokens generated in the response.
           */
          response_tokens: number;
          /**
           * Route
           * @description Route or model identifier used in the query.
           */
          route: string;
          /**
           * Source Ip
           * @description Source IP address of the request.
           */
          source_ip: string;
          /**
           * Timestamp
           * @description ISO 8601 timestamp when the query was made.
           */
          timestamp: string;
          /**
           * Unit
           * @description Unit used for cost calculations (token, char, image).
           */
          unit: string;
          /**
           * Username
           * @description Username associated with the API key.
           */
          username: string;
      }[];
      /**
       * Limit
       * @description The 'limit' value applied to this response.
       */
      limit: number;
      /**
       * Offset
       * @description The 'offset' value applied to this response.
       */
      offset: number;
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
 * Type of APIPIE_AI's APIPIE_AI_LIST_MODELS tool input.
 */
type APIPIE_AI_LIST_MODELS_INPUT = {
  /**
   * Combination
   * @description Filter by provider and subtype combination (e.g., 'provider=openrouter&subtype=chat')
   * @default null
   */
  combination: string | null;
  /**
   * Enabled
   * @description Filter by enabled status (1 for enabled, 0 for disabled)
   * @default null
   * @enum {integer|null}
   */
  enabled: 0 | 1 | null;
  /**
   * Provider
   * @description Filter by provider (e.g., 'openrouter')
   * @default null
   */
  provider: string | null;
  /**
   * Restrictions
   * @description Set to true to retrieve only country restrictions list (use as flag)
   * @default null
   */
  restrictions: boolean | null;
  /**
   * Subtype
   * @description Filter by model subtype (e.g., 'chat')
   * @default null
   * @enum {string|null}
   */
  subtype: "chat" | "fill-mask" | "question-answering" | "tts" | "stt" | "multimodal" | null;
  /**
   * Type
   * @description Filter by model type (e.g., 'llm' for language models)
   * @default null
   * @enum {string|null}
   */
  type: "llm" | "vision" | "embedding" | "image" | "voice" | "moderation" | "coding" | "free" | null;
  /**
   * Voices
   * @description Set to true to retrieve only voice models list (use as flag)
   * @default null
   */
  voices: boolean | null;
};

/**
 * Type of APIPIE_AI's APIPIE_AI_LIST_MODELS tool output.
 */
type APIPIE_AI_LIST_MODELS_OUTPUT = {
  /**
   * Data
   * @description Array of models, voices, or restriction records
   */
  data?: ({
      /**
       * Available
       * @description Whether the model is currently available
       */
      available: boolean;
      /**
       * Avg Cost
       * @description Average cost of usage (per 1000 characters) computed over time
       * @default null
       */
      avg_cost: string | null;
      /**
       * Description
       * @description Description of the model's capabilities
       * @default null
       */
      description: string | null;
      /**
       * Enabled
       * @description Whether the model is enabled (true=enabled, false=disabled)
       */
      enabled: boolean;
      /**
       * Latency
       * @description Average latency string by prompt/response size (e.g., '2000/4000/8000/...')
       */
      latency: string;
      /**
       * Max Response Tokens
       * @description Maximum tokens the model can return in the response
       */
      max_response_tokens: number;
      /**
       * Max Tokens
       * @description Maximum cumulative tokens supported by the model
       */
      max_tokens: number;
      /**
       * Model
       * @description Base model name identifier
       */
      model: string;
      /**
       * Price Type
       * @description Type of pricing applied to this model
       * @default null
       */
      price_type: ("token" | "char" | "request" | "tokens" | "image" | "minute" | "characters" | "character" | "provider") | null;
      /**
       * Price Unit
       * @description Unit in which price is denominated
       * @default null
       */
      price_unit: string | null;
      /**
       * Provider
       * @description Provider of the model
       */
      provider: string;
      /**
       * Query Count
       * @description Total number of queries made to this model
       */
      query_count: string;
      /**
       * Req Price
       * @description Price for request per unit, if provided by API
       * @default null
       */
      req_price: string | null;
      /**
       * Res Price
       * @description Price for response per unit, if provided by API
       * @default null
       */
      res_price: string | null;
      /**
       * Route
       * @description Provider-specific route or model identifier
       */
      route: string;
      /**
       * Subtype
       * @description Subtype of the model
       * @default null
       */
      subtype: ("chat" | "fill-mask" | "question-answering" | "tts" | "stt" | "multimodal") | null;
      /**
       * Type
       * @description Type of the model
       * @enum {string}
       */
      type: "llm" | "vision" | "embedding" | "image" | "voice" | "moderation" | "coding" | "free";
  } | {
      /**
       * Description
       * @description Additional attributes for the voice sample (e.g., accent, age, gender)
       * @default null
       */
      description: string | null;
      /**
       * Model
       * @description Voice model name
       */
      model: string;
      /**
       * Name
       * @description Readable name for the voice sample
       */
      name: string;
      /**
       * Provider
       * @description Voice provider name
       */
      provider: string;
      /**
       * Voice Id
       * @description Unique ID for the voice sample
       */
      voice_id: string;
  } | {
      /**
       * Countries
       * @description JSON string of countries allowed for this restriction group
       */
      countries: string;
      /**
       * Name
       * @description Provider or region name for restriction
       */
      name: string;
      /**
       * Restrict Id
       * @description Unique restriction record identifier
       */
      restrict_id: number;
  })[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Object
   * @description Type of the list returned (always 'list')
   */
  object?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "APIPIE_AI".
 */
export type APIPIE_AI_TOOL_INPUTS = {
  DELETE_VECTORS: APIPIE_AI_DELETE_VECTORS_INPUT
  FETCH_MODEL_RESTRICTIONS: APIPIE_AI_FETCH_MODEL_RESTRICTIONS_INPUT
  GET_QUERY_HISTORY: APIPIE_AI_GET_QUERY_HISTORY_INPUT
  LIST_MODELS: APIPIE_AI_LIST_MODELS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "APIPIE_AI".
 */
export type APIPIE_AI_TOOL_OUTPUTS = {
  DELETE_VECTORS: APIPIE_AI_DELETE_VECTORS_OUTPUT
  FETCH_MODEL_RESTRICTIONS: APIPIE_AI_FETCH_MODEL_RESTRICTIONS_OUTPUT
  GET_QUERY_HISTORY: APIPIE_AI_GET_QUERY_HISTORY_OUTPUT
  LIST_MODELS: APIPIE_AI_LIST_MODELS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's APIPIE_AI toolkit.
 */
export const APIPIE_AI = {
  slug: "apipie_ai",
  tools: {
    /**
     * Tool to delete an entire vector collection or specific vectors. use when you need to remove vector data after identifying your target collection or vectors.
     */
    DELETE_VECTORS: "APIPIE_AI_DELETE_VECTORS",
    /**
     * Tool to retrieve a list of country restrictions for models. use when you need to verify allowed deployment countries before final model selection.
     */
    FETCH_MODEL_RESTRICTIONS: "APIPIE_AI_FETCH_MODEL_RESTRICTIONS",
    /**
     * Tool to retrieve historic api usage logs including latency, token counts, costs, and source ip. use after authenticating to analyze past queries for cost management, performance monitoring, or auditing.
     */
    GET_QUERY_HISTORY: "APIPIE_AI_GET_QUERY_HISTORY",
    /**
     * Tool to fetch a list of available ai models. use when you need up-to-date model listings and want to filter by. model type, subtype, provider, or retrieve specialized lists like voices or restrictions.
     */
    LIST_MODELS: "APIPIE_AI_LIST_MODELS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "APIPIE_AI".
 */
export type APIPIE_AI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "APIPIE_AI".
 */
export type APIPIE_AI_TRIGGER_EVENTS = {}
