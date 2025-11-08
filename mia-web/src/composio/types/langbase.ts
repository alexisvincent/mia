// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of LANGBASE's LANGBASE_CHUNKER_SPLIT_CONTENT tool input.
 */
type LANGBASE_CHUNKER_SPLIT_CONTENT_INPUT = {
  /**
   * Chunk Size
   * @description Desired size of each chunk in characters. Must be ≥1 if provided.
   * @default null
   */
  chunk_size: number | null;
  /**
   * Chunker Type
   * @description Mode for chunking. Use 'semantic' to preserve sentence boundaries; 'basic' for fixed-size splits.
   * @default basic
   * @enum {string|null}
   */
  chunker_type: "basic" | "semantic" | null;
  /**
   * Content
   * @description The input text content to be chunked.
   */
  content?: string;
  /**
   * Overlap
   * @description Number of characters to overlap between consecutive chunks. Must be ≥0.
   * @default null
   */
  overlap: number | null;
};

/**
 * Type of LANGBASE's LANGBASE_CHUNKER_SPLIT_CONTENT tool output.
 */
type LANGBASE_CHUNKER_SPLIT_CONTENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Chunks
       * @description List of text chunks with their positions in the original content.
       */
      chunks: {
          /**
           * End
           * @description End position (character offset) in original content.
           */
          end: number;
          /**
           * Start
           * @description Start position (character offset) in original content.
           */
          start: number;
          /**
           * Text
           * @description The chunked text content.
           */
          text: string;
      }[];
      /**
       * Total Chunks
       * @description Total number of chunks produced.
       */
      total_chunks: number;
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
 * Type of LANGBASE's LANGBASE_CREATE_THREAD tool input.
 */
type LANGBASE_CREATE_THREAD_INPUT = {
  /**
   * Messages
   * @description Optional initial messages for the thread
   * @default null
   */
  messages: {
      /**
       * Content
       * @description Message content
       */
      content: string;
      /**
       * FunctionCall
       * @description Details of a function invocation within a message.
       * @default null
       */
      function_call: {
          /**
           * Arguments
           * @description Arguments for the function call
           */
          arguments: {
              [key: string]: unknown;
          };
          /**
           * Name
           * @description Name of the function to call
           */
          name: string;
      } | null;
      /**
       * Name
       * @description Name of the sender (for function role)
       * @default null
       */
      name: string | null;
      /**
       * Role
       * @description Role of the message sender
       * @enum {string}
       */
      role: "user" | "assistant" | "function";
  }[] | null;
};

/**
 * Type of LANGBASE's LANGBASE_CREATE_THREAD tool output.
 */
type LANGBASE_CREATE_THREAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Unix timestamp when the thread was created
       */
      created_at: number;
      /**
       * Id
       * @description Unique identifier of the created thread
       */
      id: string;
      /**
       * Messages
       * @description List of messages in the thread
       */
      messages: {
          /**
           * Content
           * @description Message content
           */
          content: string;
          /**
           * FunctionCall
           * @description Details of a function invocation within a message.
           * @default null
           */
          function_call: {
              /**
               * Arguments
               * @description Arguments for the function call
               */
              arguments: {
                  [key: string]: unknown;
              };
              /**
               * Name
               * @description Name of the function to call
               */
              name: string;
          } | null;
          /**
           * Name
           * @description Name of the sender (for function role)
           * @default null
           */
          name: string | null;
          /**
           * Role
           * @description Role of the message sender
           * @enum {string}
           */
          role: "user" | "assistant" | "function";
      }[];
      /**
       * Object
       * @description Object type, should be 'thread'
       */
      object: string;
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
 * Type of LANGBASE's LANGBASE_DOCUMENT_LIST tool input.
 */
type LANGBASE_DOCUMENT_LIST_INPUT = {
  /**
   * Include Vectors
   * @description Whether to include vector embeddings in each document
   * @default false
   */
  includeVectors: boolean | null;
  /**
   * Limit
   * @description Maximum number of documents to return
   * @default null
   */
  limit: number | null;
  /**
   * Memory Name
   * @description Name of the memory to list documents from
   */
  memoryName?: string;
  /**
   * Start After
   * @description Pagination token to start after a specific document
   * @default null
   */
  startAfter: string | null;
};

/**
 * Type of LANGBASE's LANGBASE_DOCUMENT_LIST tool output.
 */
type LANGBASE_DOCUMENT_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Documents
       * @description List of document metadata objects
       */
      documents: {
          /**
           * Content
           * @description Raw text/content of the document
           */
          content: string;
          /**
           * Id
           * @description Unique document identifier
           */
          id: string;
          /**
           * Meta
           * @description Custom metadata associated with the document
           */
          meta: {
              [key: string]: unknown;
          };
          /**
           * Vector
           * @description Optional vector embedding (only present if includeVectors=true)
           * @default null
           */
          vector: number[] | null;
      }[];
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results, if any
       * @default null
       */
      nextPageToken: string | null;
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
 * Type of LANGBASE's LANGBASE_GET_THREAD tool input.
 */
type LANGBASE_GET_THREAD_INPUT = {
  /**
   * Thread Id
   * @description The unique identifier of the thread to retrieve
   */
  threadId?: string;
};

/**
 * Type of LANGBASE's LANGBASE_GET_THREAD tool output.
 */
type LANGBASE_GET_THREAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Timestamp when the thread was created (ISO 8601)
       */
      createdAt: unknown;
      /**
       * Id
       * @description Unique identifier of the thread
       */
      id: string;
      /**
       * Messages
       * @description List of messages in the thread
       */
      messages: {
          /**
           * Content
           * @description Content of the message
           */
          content: string;
          /**
           * Created At
           * Format: date-time
           * @description Timestamp of message creation (ISO 8601)
           */
          createdAt: unknown;
          /**
           * Id
           * @description Unique message identifier
           */
          id: string;
          /**
           * Role
           * @description Role of the sender, e.g., 'user' or 'assistant'
           */
          role: string;
      }[];
      /**
       * Metadata
       * @description Additional metadata associated with the thread
       * @default null
       */
      metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Status
       * @description Current status of the thread
       */
      status: string;
      /**
       * Updated At
       * Format: date-time
       * @description Timestamp when the thread was last updated (ISO 8601)
       */
      updatedAt: unknown;
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
 * Type of LANGBASE's LANGBASE_LIST_THREAD_MESSAGES tool input.
 */
type LANGBASE_LIST_THREAD_MESSAGES_INPUT = {
  /**
   * Before
   * @description Return messages created before this message ID.
   * @default null
   */
  before: string | null;
  /**
   * Limit
   * @description Number of messages to return per page.
   * @default null
   */
  limit: number | null;
  /**
   * Thread Id
   * @description Unique identifier of the conversation thread.
   */
  threadId?: string;
};

/**
 * Type of LANGBASE's LANGBASE_LIST_THREAD_MESSAGES tool output.
 */
type LANGBASE_LIST_THREAD_MESSAGES_OUTPUT = {
  /**
   * Data
   * @description Array of message objects.
   */
  data?: {
      /**
       * Content
       * @description Structured content of the message.
       */
      content: {
          [key: string]: unknown;
      };
      /**
       * Created At
       * @description Timestamp for message creation (Unix time).
       */
      created_at: number;
      /**
       * Id
       * @description Message unique identifier.
       */
      id: string;
      /**
       * Metadata
       * @description Custom metadata associated with the message.
       */
      metadata: {
          [key: string]: unknown;
      };
      /**
       * Object
       * @description Object type, value is 'message'.
       */
      object: string;
      /**
       * Role
       * @description Role of the message sender (e.g., 'user', 'assistant').
       */
      role: string;
      /**
       * Thread Id
       * @description Identifier of the thread this message belongs to.
       */
      thread_id: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Has More
   * @description Whether there are more messages available.
   */
  has_more?: boolean;
  /**
   * Object
   * @description Response object type, value is 'list'.
   */
  object?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of LANGBASE's LANGBASE_MEMORY_CREATE tool input.
 */
type LANGBASE_MEMORY_CREATE_INPUT = {
  /**
   * Description
   * @description A description of the memory.
   * @default null
   */
  description: string | null;
  /**
   * Metadata
   * @description Arbitrary metadata for the memory.
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Name
   * @description The name of the memory.
   */
  name?: string;
};

/**
 * Type of LANGBASE's LANGBASE_MEMORY_CREATE tool output.
 */
type LANGBASE_MEMORY_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO8601 timestamp of creation.
       */
      created_at: string;
      /**
       * Description
       * @description The memory description.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description The unique identifier of the created memory.
       */
      id: string;
      /**
       * Metadata
       * @description Metadata for the memory.
       */
      metadata: {
          [key: string]: unknown;
      };
      /**
       * Name
       * @description The name of the memory.
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
 * Type of LANGBASE's LANGBASE_MEMORY_DELETE tool input.
 */
type LANGBASE_MEMORY_DELETE_INPUT = {
  /**
   * Memory Name
   * @description Name of the memory to delete
   */
  memory_name?: string;
};

/**
 * Type of LANGBASE's LANGBASE_MEMORY_DELETE tool output.
 */
type LANGBASE_MEMORY_DELETE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the deletion was successful
       */
      success: boolean;
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
 * Type of LANGBASE's LANGBASE_MEMORY_LIST tool input.
 */
type LANGBASE_MEMORY_LIST_INPUT = {
  /**
   * Limit
   * @description Maximum number of memory objects to return
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of memory objects to skip for pagination
   * @default null
   */
  offset: number | null;
};

/**
 * Type of LANGBASE's LANGBASE_MEMORY_LIST tool output.
 */
type LANGBASE_MEMORY_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Memories
       * @description List of memory objects
       */
      memories: {
          /**
           * Content
           * @description Content of the memory
           */
          content: string;
          /**
           * Created At
           * Format: date-time
           * @description ISO 8601 datetime of creation
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier for the memory object
           */
          id: string;
          /**
           * Updated At
           * Format: date-time
           * @description ISO 8601 datetime of last update
           */
          updated_at: string;
      }[];
      /**
       * Total
       * @description Total number of memory objects available
       */
      total: number;
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
 * Type of LANGBASE's LANGBASE_PIPE_CREATE tool input.
 */
type LANGBASE_PIPE_CREATE_INPUT = {
  /**
   * Description
   * @description Short description of the pipe
   * @default
   */
  description: string | null;
  /**
   * Frequency Penalty
   * @description Penalizes a word based on how frequently it appears in the training data
   * @default 1
   */
  frequency_penalty: number;
  /**
   * Json
   * @description Enforce the output to be in JSON format
   * @default false
   */
  json: boolean;
  /**
   * Max Tokens
   * @description Maximum number of tokens in the response
   * @default 1000
   */
  max_tokens: number;
  /**
   * Model
   * @description Pipe LLM model in format 'provider:model_id'
   * @default openai:gpt-4o-mini
   */
  model: string;
  /**
   * Moderate
   * @description If enabled, Langbase blocks flagged requests automatically
   * @default false
   */
  moderate: boolean;
  /**
   * Name
   * @description Name of the pipe
   */
  name?: string;
  /**
   * Parallel Tool Calls
   * @description If true, calls multiple tools in parallel
   * @default true
   */
  parallel_tool_calls: boolean;
  /**
   * Presence Penalty
   * @description Penalizes a word based on its occurrence in the input text
   * @default 1
   */
  presence_penalty: number;
  /**
   * Status
   * @description Visibility status of the pipe
   * @default public
   * @enum {string}
   */
  status: "public" | "private";
  /**
   * Stop
   * @description Up to 4 sequences where the API will stop generating further tokens
   * @default null
   */
  stop: string[] | null;
  /**
   * Store
   * @description If enabled, both prompt and completions will be stored
   * @default true
   */
  store: boolean;
  /**
   * Stream
   * @description If enabled, the output will be streamed in real-time
   * @default true
   */
  stream: boolean;
  /**
   * Temperature
   * @description Sampling temperature between 0.0 and 2.0
   * @default 0.7
   */
  temperature: number;
  /**
   * Tool Choice
   * @description Controls which (if any) tool is called by the model
   * @default auto
   * @enum {string}
   */
  tool_choice: "auto" | "required" | "object";
  /**
   * Top P
   * @description Nucleus sampling parameter between 0.0 and 1.0
   * @default 1
   */
  top_p: number;
  /**
   * Upsert
   * @description Upsert pipe. If true, updates existing pipe with same name
   * @default false
   */
  upsert: boolean;
};

/**
 * Type of LANGBASE's LANGBASE_PIPE_CREATE tool output.
 */
type LANGBASE_PIPE_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Key
       * @description API key for pipe access
       */
      api_key: string;
      /**
       * Description
       * @description Description of the pipe
       */
      description: string;
      /**
       * Name
       * @description Name of the pipe
       */
      name: string;
      /**
       * Owner Login
       * @description Login of the pipe owner
       */
      owner_login: string;
      /**
       * Status
       * @description Pipe visibility status
       * @enum {string}
       */
      status: "public" | "private";
      /**
       * Type
       * @description The type of the pipe
       */
      type: string;
      /**
       * Url
       * @description Pipe studio URL
       */
      url: string;
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
 * Type of LANGBASE's LANGBASE_PIPE_LIST tool input.
 */
type LANGBASE_PIPE_LIST_INPUT = object;

/**
 * Type of LANGBASE's LANGBASE_PIPE_LIST tool output.
 */
type LANGBASE_PIPE_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pipes
       * @description List of pipes
       */
      pipes: {
          /**
           * Created At
           * @description ISO 8601 datetime when the pipe was created
           */
          created_at: string;
          /**
           * Description
           * @description Description of the pipe
           */
          description: string;
          /**
           * Id
           * @description ID of the pipe
           */
          id: string;
          /**
           * Name
           * @description Name of the pipe
           */
          name: string;
          /**
           * Status
           * @description Status of the pipe
           * @enum {string}
           */
          status: "active" | "inactive";
          /**
           * Updated At
           * @description ISO 8601 datetime when the pipe was updated
           */
          updated_at: string;
      }[];
      /**
       * Total
       * @description Total number of pipes
       */
      total: number;
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
 * Type map of all available tool input types for toolkit "LANGBASE".
 */
export type LANGBASE_TOOL_INPUTS = {
  CHUNKER_SPLIT_CONTENT: LANGBASE_CHUNKER_SPLIT_CONTENT_INPUT
  CREATE_THREAD: LANGBASE_CREATE_THREAD_INPUT
  DOCUMENT_LIST: LANGBASE_DOCUMENT_LIST_INPUT
  GET_THREAD: LANGBASE_GET_THREAD_INPUT
  LIST_THREAD_MESSAGES: LANGBASE_LIST_THREAD_MESSAGES_INPUT
  MEMORY_CREATE: LANGBASE_MEMORY_CREATE_INPUT
  MEMORY_DELETE: LANGBASE_MEMORY_DELETE_INPUT
  MEMORY_LIST: LANGBASE_MEMORY_LIST_INPUT
  PIPE_CREATE: LANGBASE_PIPE_CREATE_INPUT
  PIPE_LIST: LANGBASE_PIPE_LIST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "LANGBASE".
 */
export type LANGBASE_TOOL_OUTPUTS = {
  CHUNKER_SPLIT_CONTENT: LANGBASE_CHUNKER_SPLIT_CONTENT_OUTPUT
  CREATE_THREAD: LANGBASE_CREATE_THREAD_OUTPUT
  DOCUMENT_LIST: LANGBASE_DOCUMENT_LIST_OUTPUT
  GET_THREAD: LANGBASE_GET_THREAD_OUTPUT
  LIST_THREAD_MESSAGES: LANGBASE_LIST_THREAD_MESSAGES_OUTPUT
  MEMORY_CREATE: LANGBASE_MEMORY_CREATE_OUTPUT
  MEMORY_DELETE: LANGBASE_MEMORY_DELETE_OUTPUT
  MEMORY_LIST: LANGBASE_MEMORY_LIST_OUTPUT
  PIPE_CREATE: LANGBASE_PIPE_CREATE_OUTPUT
  PIPE_LIST: LANGBASE_PIPE_LIST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's LANGBASE toolkit.
 */
export const LANGBASE = {
  slug: "langbase",
  tools: {
    /**
     * Tool to split content into smaller chunks. use when processing large text segments to fit downstream limits.
     */
    CHUNKER_SPLIT_CONTENT: "LANGBASE_CHUNKER_SPLIT_CONTENT",
    /**
     * Tool to create a new conversation thread. use when starting a fresh chat session or grouping messages into a distinct thread.
     */
    CREATE_THREAD: "LANGBASE_CREATE_THREAD",
    /**
     * Tool to list documents in a specific memory. use when you need to fetch document metadata (and optionally vectors) from a memory after confirming its name. supports pagination via limit and startafter parameters.
     */
    DOCUMENT_LIST: "LANGBASE_DOCUMENT_LIST",
    /**
     * Tool to retrieve details of a specific conversation thread. use when you need the full thread details by its id after confirming its existence.
     */
    GET_THREAD: "LANGBASE_GET_THREAD",
    /**
     * Tool to list all messages in a conversation thread. use after obtaining the thread id to fetch its messages.
     */
    LIST_THREAD_MESSAGES: "LANGBASE_LIST_THREAD_MESSAGES",
    /**
     * Tool to create a new memory. use when storing a new memory record in langbase after confirming memory details.
     */
    MEMORY_CREATE: "LANGBASE_MEMORY_CREATE",
    /**
     * Tool to delete a specific memory. use when you need to permanently remove a stored memory by its name.
     */
    MEMORY_DELETE: "LANGBASE_MEMORY_DELETE",
    /**
     * Tool to list all memory objects. use when you need to fetch stored memories for context retrieval.
     */
    MEMORY_LIST: "LANGBASE_MEMORY_LIST",
    /**
     * Tool to create a new pipe. use after configuring pipe parameters. returns pipe details including api key and url.
     */
    PIPE_CREATE: "LANGBASE_PIPE_CREATE",
    /**
     * Tool to list all pipes. use after authentication to retrieve the complete list of pipes.
     */
    PIPE_LIST: "LANGBASE_PIPE_LIST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "LANGBASE".
 */
export type LANGBASE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "LANGBASE".
 */
export type LANGBASE_TRIGGER_EVENTS = {}
