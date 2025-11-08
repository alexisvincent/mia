// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of WRITER's WRITER_ASK_QUESTION_TO_KNOWLEDGE_GRAPH tool input.
 */
type WRITER_ASK_QUESTION_TO_KNOWLEDGE_GRAPH_INPUT = {
  /**
   * Context
   * @description Optional list of context key/value pairs to provide additional information
   * @default null
   */
  context: {
      /**
       * Key
       * @description Context key to guide the answer generation
       */
      key: string;
      /**
       * Value
       * @description Context value corresponding to the key
       */
      value: string;
  }[] | null;
  /**
   * Graph Ids
   * @description List of knowledge graph identifiers to target
   */
  graph_ids?: string[];
  /**
   * Question
   * @description The question to ask the knowledge graph
   */
  question?: string;
};

/**
 * Type of WRITER's WRITER_ASK_QUESTION_TO_KNOWLEDGE_GRAPH tool output.
 */
type WRITER_ASK_QUESTION_TO_KNOWLEDGE_GRAPH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Answer
       * @description The answer returned by the knowledge graph API
       */
      answer: string;
      /**
       * Sources
       * @description List of sources that informed the answer
       */
      sources: {
          /**
           * Excerpt
           * @description Excerpt from the source document
           * @default null
           */
          excerpt: string | null;
          /**
           * Title
           * @description Title of the source document
           * @default null
           */
          title: string | null;
          /**
           * Url
           * Format: uri
           * @description The source URL used to generate the answer
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
 * Type of WRITER's WRITER_CHAT_COMPLETION tool input.
 */
type WRITER_CHAT_COMPLETION_INPUT = {
  /**
   * Frequency Penalty
   * @description Penalty for new tokens based on their frequency in the text so far
   * @default 0
   */
  frequency_penalty: number | null;
  /**
   * Max Tokens
   * @description Maximum number of tokens to generate
   * @default null
   */
  max_tokens: number | null;
  /**
   * Messages
   * @description Conversation history in order. Required.
   */
  messages?: {
      /**
       * Content
       * @description The text content of the message
       */
      content: string;
      /**
       * Role
       * @description Role of the message sender
       * @enum {string}
       */
      role: "system" | "user" | "assistant";
  }[];
  /**
   * Model
   * @description Model identifier to use for the chat completion
   * @default null
   */
  model: string | null;
  /**
   * N
   * @description Number of chat completion choices to generate
   * @default 1
   */
  n: number | null;
  /**
   * Presence Penalty
   * @description Penalty for new tokens based on presence in the text so far
   * @default 0
   */
  presence_penalty: number | null;
  /**
   * Stop
   * @description Up to 4 sequences where the API will stop generating further tokens
   * @default null
   */
  stop: string | null;
  /**
   * Stream
   * @description Whether to stream back partial progress as server-sent events
   * @default false
   */
  stream: boolean | null;
  /**
   * Temperature
   * @description Sampling temperature; higher values produce more random output
   * @default 1
   */
  temperature: number | null;
  /**
   * Top P
   * @description Nucleus sampling probability threshold
   * @default 1
   */
  top_p: number | null;
};

/**
 * Type of WRITER's WRITER_CHAT_COMPLETION tool output.
 */
type WRITER_CHAT_COMPLETION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Choices
       * @description Generated completion choices
       */
      choices: {
          /**
           * Finish Reason
           * @description Reason why the completion finished
           * @default null
           */
          finish_reason: string | null;
          /**
           * Index
           * @description Choice index
           */
          index: number;
          /**
           * Message
           * @description Generated message for this choice
           */
          message: {
              /**
               * Content
               * @description The text content of the message
               */
              content: string;
              /**
               * Role
               * @description Role of the message sender
               * @enum {string}
               */
              role: "system" | "user" | "assistant";
          };
      }[];
      /**
       * Created
       * @description Unix timestamp of creation
       */
      created: number;
      /**
       * Id
       * @description Unique identifier for this completion
       */
      id: string;
      /**
       * Model
       * @description Model identifier used
       */
      model: string;
      /**
       * Object
       * @description Object type, e.g., 'chat.completion'
       */
      object: string;
      /**
       * Usage
       * @description Token usage statistics
       */
      usage: {
          /**
           * Completion Tokens
           * @description Number of tokens generated
           */
          completion_tokens: number;
          /**
           * Prompt Tokens
           * @description Number of tokens in the prompt
           */
          prompt_tokens: number;
          /**
           * Total Tokens
           * @description Total tokens used
           */
          total_tokens: number;
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
 * Type of WRITER's WRITER_CREATE_KNOWLEDGE_GRAPH tool input.
 */
type WRITER_CREATE_KNOWLEDGE_GRAPH_INPUT = {
  /**
   * Description
   * @description A short description for the knowledge graph
   * @default null
   */
  description: string | null;
  /**
   * Edges
   * @description List of edges in the knowledge graph
   */
  edges?: {
      /**
       * Properties
       * @description Key-value pairs defining edge properties
       * @default null
       */
      properties: {
          [key: string]: string | number | boolean;
      } | null;
      /**
       * Source
       * @description ID of the source node
       */
      source: string;
      /**
       * Target
       * @description ID of the target node
       */
      target: string;
      /**
       * Type
       * @description Relation type for the edge
       */
      type: string;
  }[];
  /**
   * Name
   * @description The name of the knowledge graph
   */
  name?: string;
  /**
   * Nodes
   * @description List of nodes in the knowledge graph
   */
  nodes?: {
      /**
       * Id
       * @description Node identifier
       */
      id: string;
      /**
       * Properties
       * @description Key-value pairs defining node properties
       * @default null
       */
      properties: {
          [key: string]: string | number | boolean;
      } | null;
      /**
       * Type
       * @description Node type
       */
      type: string;
  }[];
};

/**
 * Type of WRITER's WRITER_CREATE_KNOWLEDGE_GRAPH tool output.
 */
type WRITER_CREATE_KNOWLEDGE_GRAPH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp of creation in ISO 8601 format
       */
      created_at: string;
      /**
       * Description
       * @description Description of the knowledge graph
       * @default null
       */
      description: string | null;
      /**
       * Edges
       * @description Edges in the created graph
       */
      edges: {
          /**
           * Properties
           * @description Key-value pairs defining edge properties
           * @default null
           */
          properties: {
              [key: string]: string | number | boolean;
          } | null;
          /**
           * Source
           * @description ID of the source node
           */
          source: string;
          /**
           * Target
           * @description ID of the target node
           */
          target: string;
          /**
           * Type
           * @description Relation type for the edge
           */
          type: string;
      }[];
      /**
       * Id
       * @description Unique identifier of the created knowledge graph
       */
      id: string;
      /**
       * Name
       * @description Name of the knowledge graph
       */
      name: string;
      /**
       * Nodes
       * @description Nodes in the created graph
       */
      nodes: {
          /**
           * Id
           * @description Node identifier
           */
          id: string;
          /**
           * Properties
           * @description Key-value pairs defining node properties
           * @default null
           */
          properties: {
              [key: string]: string | number | boolean;
          } | null;
          /**
           * Type
           * @description Node type
           */
          type: string;
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
 * Type of WRITER's WRITER_DELETE_GRAPH tool input.
 */
type WRITER_DELETE_GRAPH_INPUT = {
  /**
   * Graph Id
   * @description Unique identifier of the graph to delete.
   */
  graph_id?: string;
};

/**
 * Type of WRITER's WRITER_DELETE_GRAPH tool output.
 */
type WRITER_DELETE_GRAPH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if deletion fails.
       * @default null
       */
      error: string | null;
      /**
       * Message
       * @description Confirmation message upon successful deletion.
       */
      message: string;
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
 * Type of WRITER's WRITER_LIST_APPLICATIONS tool input.
 */
type WRITER_LIST_APPLICATIONS_INPUT = object;

/**
 * Type of WRITER's WRITER_LIST_APPLICATIONS tool output.
 */
type WRITER_LIST_APPLICATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Applications
       * @description List of registered applications.
       */
      applications: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the application was created.
           */
          created_at: string;
          /**
           * Description
           * @description Description of the application.
           */
          description: string;
          /**
           * Id
           * @description Unique identifier for the application.
           */
          id: string;
          /**
           * Name
           * @description Name of the application.
           */
          name: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the application was last updated.
           */
          updated_at: string;
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
 * Type of WRITER's WRITER_LIST_FILES tool input.
 */
type WRITER_LIST_FILES_INPUT = {
  /**
   * After
   * @description Cursor for returning the next page of results; set to the last file ID of the prior page.
   * @default null
   */
  after: string | null;
  /**
   * Before
   * @description Cursor for returning the previous page of results; set to the first file ID of the prior page.
   * @default null
   */
  before: string | null;
  /**
   * File Types
   * @description Comma-separated list of file extensions to include, e.g. 'pdf,docx,jpg'.
   * @default null
   */
  file_types: string | null;
  /**
   * Graph Id
   * @description Filter files by a specific knowledge graph ID.
   * @default null
   */
  graph_id: string | null;
  /**
   * Limit
   * @description Max number of files to return (1-100). Defaults to 50.
   * @default 50
   */
  limit: number | null;
  /**
   * Order
   * @description Sorting order for results: 'asc' (oldest first) or 'desc' (newest first).
   * @default desc
   * @enum {string}
   */
  order: "asc" | "desc";
  /**
   * Status
   * @description Filter files by status.
   * @default null
   * @enum {string|null}
   */
  status: "in_progress" | "completed" | "failed" | null;
};

/**
 * Type of WRITER's WRITER_LIST_FILES tool output.
 */
type WRITER_LIST_FILES_OUTPUT = {
  /**
   * Data
   * @description Page of file objects.
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description ISO 8601 timestamp when the file was created.
       */
      created_at: unknown;
      /**
       * Graph Ids
       * @description List of knowledge graph IDs this file is attached to.
       */
      graph_ids: string[];
      /**
       * Id
       * @description Unique file ID.
       */
      id: string;
      /**
       * Name
       * @description Original filename.
       */
      name: string;
      /**
       * Status
       * @description Current processing status of the file.
       * @enum {string}
       */
      status: "in_progress" | "completed" | "failed";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * First Id
   * @description ID of the first file in this page.
   * @default null
   */
  first_id: string | null;
  /**
   * Has More
   * @description True if more files are available beyond this page.
   */
  has_more?: boolean;
  /**
   * Last Id
   * @description ID of the last file in this page.
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
 * Type of WRITER's WRITER_LIST_GRAPHS tool input.
 */
type WRITER_LIST_GRAPHS_INPUT = object;

/**
 * Type of WRITER's WRITER_LIST_GRAPHS tool output.
 */
type WRITER_LIST_GRAPHS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Graphs
       * @description List of knowledge graph objects.
       */
      graphs: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the graph was created.
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier for the graph.
           */
          id: string;
          /**
           * Name
           * @description Name of the graph.
           */
          name: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the graph was last updated.
           */
          updated_at: string;
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
 * Type of WRITER's WRITER_LIST_MODELS tool input.
 */
type WRITER_LIST_MODELS_INPUT = object;

/**
 * Type of WRITER's WRITER_LIST_MODELS tool output.
 */
type WRITER_LIST_MODELS_OUTPUT = {
  /**
   * Data
   * @description Array of available models information
   */
  data?: {
      /**
       * Created
       * @description Unix timestamp when the model was created
       */
      created: number;
      /**
       * Id
       * @description The model's unique identifier
       */
      id: string;
      /**
       * Object
       * @description The type of object returned, e.g., 'model'
       */
      object: string;
      /**
       * Owned By
       * @description Organization that owns the model
       */
      owned_by: string;
      /**
       * Permission
       * @description List of permission objects for the model
       */
      permission: {
          [key: string]: unknown;
      }[];
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Object
   * @description Top-level object type, e.g., 'list'
   */
  object?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of WRITER's WRITER_MEDICAL_COMPREHEND tool input.
 */
type WRITER_MEDICAL_COMPREHEND_INPUT = {
  /**
   * Text
   * @description The clinical or medical text to analyze (max 20,000 characters).
   */
  text?: string;
};

/**
 * Type of WRITER's WRITER_MEDICAL_COMPREHEND tool output.
 */
type WRITER_MEDICAL_COMPREHEND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Concepts
       * @description Standardized medical concepts mapped from entities.
       */
      concepts: {
          /**
           * Id
           * @description Identifier of the medical concept.
           */
          id: string;
          /**
           * Name
           * @description Name of the medical concept.
           */
          name: string;
          /**
           * Ontology
           * @description Source ontology or coding system, e.g., SNOMEDCT.
           */
          ontology: string;
      }[];
      /**
       * Entities
       * @description Detected medical entities within the text.
       */
      entities: {
          /**
           * Confidence
           * @description Confidence score for the entity detection between 0 and 1.
           */
          confidence: number;
          /**
           * End
           * @description Character offset where the entity ends.
           */
          end: number;
          /**
           * Id
           * @description Unique identifier for the entity.
           */
          id: string;
          /**
           * Start
           * @description Character offset where the entity starts.
           */
          start: number;
          /**
           * Text
           * @description The text span of the entity.
           */
          text: string;
          /**
           * Type
           * @description The entity type, e.g., medication or condition.
           */
          type: string;
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
 * Type of WRITER's WRITER_RETRIEVE_GRAPH tool input.
 */
type WRITER_RETRIEVE_GRAPH_INPUT = {
  /**
   * Graph Id
   * @description Unique identifier of the knowledge graph to retrieve
   */
  graph_id?: string;
};

/**
 * Type of WRITER's WRITER_RETRIEVE_GRAPH tool output.
 */
type WRITER_RETRIEVE_GRAPH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO8601 timestamp when the graph was created
       */
      created_at: string;
      /**
       * Description
       * @description Description of the knowledge graph
       * @default null
       */
      description: string | null;
      /**
       * Edges
       * @description List of edges within the knowledge graph
       */
      edges: {
          /**
           * Properties
           * @description Additional key-value properties of the edge
           * @default null
           */
          properties: {
              [key: string]: string | number | boolean;
          } | null;
          /**
           * Source
           * @description ID of the source node
           */
          source: string;
          /**
           * Target
           * @description ID of the target node
           */
          target: string;
          /**
           * Type
           * @description Relation type between source and target
           */
          type: string;
      }[];
      /**
       * Id
       * @description Unique identifier of the knowledge graph
       */
      id: string;
      /**
       * Name
       * @description Name of the knowledge graph
       */
      name: string;
      /**
       * Nodes
       * @description List of nodes within the knowledge graph
       */
      nodes: {
          /**
           * Id
           * @description Node identifier
           */
          id: string;
          /**
           * Properties
           * @description Additional key-value properties of the node
           * @default null
           */
          properties: {
              [key: string]: string | number | boolean;
          } | null;
          /**
           * Type
           * @description Type of the node
           */
          type: string;
      }[];
      /**
       * Updated At
       * @description ISO8601 timestamp when the graph was last updated
       */
      updated_at: string;
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
 * Type of WRITER's WRITER_TEXT_GENERATION tool input.
 */
type WRITER_TEXT_GENERATION_INPUT = {
  /**
   * Max Tokens
   * @description Maximum number of tokens in the generated output.
   * @default null
   */
  max_tokens: number | null;
  /**
   * Model
   * @description The name of the model to use for generation.
   */
  model?: string;
  /**
   * Prompt
   * @description The text prompt for the model.
   */
  prompt?: string;
  /**
   * Stop
   * @description Sequences where the API will stop generating.
   * @default null
   */
  stop: string[] | null;
  /**
   * Temperature
   * @description Sampling temperature between 0 and 2.
   * @default 1
   */
  temperature: number | null;
  /**
   * Top P
   * @description Nucleus sampling parameter between 0 and 1.
   * @default 1
   */
  top_p: number | null;
};

/**
 * Type of WRITER's WRITER_TEXT_GENERATION tool output.
 */
type WRITER_TEXT_GENERATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Choices
       * @description Generated completions.
       */
      choices: {
          /**
           * Finish Reason
           * @description Why the completion stopped.
           */
          finish_reason: string;
          /**
           * Index
           * @description The index of the completion.
           */
          index: number;
          /**
           * Text
           * @description The generated text.
           */
          text: string;
      }[];
      /**
       * Created
       * @description Creation timestamp.
       */
      created: number;
      /**
       * Id
       * @description Unique identifier for the completion.
       */
      id: string;
      /**
       * Model
       * @description Model used for generation.
       */
      model: string;
      /**
       * Object
       * @description Object type, usually 'text_completion'.
       */
      object: string;
      /**
       * Usage
       * @description Token usage details.
       */
      usage: {
          /**
           * Completion Tokens
           * @description Number of tokens in the completion.
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
 * Type of WRITER's WRITER_UPDATE_GRAPH tool input.
 */
type WRITER_UPDATE_GRAPH_INPUT = {
  /**
   * Data
   * @description Updated data structure or points for the graph
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Description
   * @description New description for the graph
   * @default null
   */
  description: string | null;
  /**
   * Graph Id
   * @description The unique identifier of the graph to update
   */
  graph_id?: string;
  /**
   * Name
   * @description New name for the graph
   * @default null
   */
  name: string | null;
};

/**
 * Type of WRITER's WRITER_UPDATE_GRAPH tool output.
 */
type WRITER_UPDATE_GRAPH_OUTPUT = {
  /**
   * Created At
   * @description ISO timestamp when the graph was created
   */
  created_at?: string;
  /**
   * Data
   * @description Data structure of the graph
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Description
   * @description Description of the graph
   * @default null
   */
  description: string | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Id
   * @description Unique identifier of the graph
   */
  id?: string;
  /**
   * Name
   * @description Name of the graph
   */
  name?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Updated At
   * @description ISO timestamp when the graph was last updated
   */
  updated_at?: string;
};

/**
 * Type of WRITER's WRITER_WEB_SEARCH tool input.
 */
type WRITER_WEB_SEARCH_INPUT = {
  /**
   * Limit
   * @description Maximum number of results to return
   * @default null
   */
  limit: number | null;
  /**
   * Query
   * @description The search query string
   */
  query?: string;
};

/**
 * Type of WRITER's WRITER_WEB_SEARCH tool output.
 */
type WRITER_WEB_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of search results
       */
      results: {
          /**
           * Score
           * @description Relevance score for the result
           */
          score: number;
          /**
           * Snippet
           * @description A snippet of text from the page
           */
          snippet: string;
          /**
           * Title
           * @description Title of the result page
           */
          title: string;
          /**
           * Url
           * @description URL of the result page
           */
          url: string;
      }[];
      /**
       * Total
       * @description Total number of results found
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
 * Type map of all available tool input types for toolkit "WRITER".
 */
export type WRITER_TOOL_INPUTS = {
  ASK_QUESTION_TO_KNOWLEDGE_GRAPH: WRITER_ASK_QUESTION_TO_KNOWLEDGE_GRAPH_INPUT
  CHAT_COMPLETION: WRITER_CHAT_COMPLETION_INPUT
  CREATE_KNOWLEDGE_GRAPH: WRITER_CREATE_KNOWLEDGE_GRAPH_INPUT
  DELETE_GRAPH: WRITER_DELETE_GRAPH_INPUT
  LIST_APPLICATIONS: WRITER_LIST_APPLICATIONS_INPUT
  LIST_FILES: WRITER_LIST_FILES_INPUT
  LIST_GRAPHS: WRITER_LIST_GRAPHS_INPUT
  LIST_MODELS: WRITER_LIST_MODELS_INPUT
  MEDICAL_COMPREHEND: WRITER_MEDICAL_COMPREHEND_INPUT
  RETRIEVE_GRAPH: WRITER_RETRIEVE_GRAPH_INPUT
  TEXT_GENERATION: WRITER_TEXT_GENERATION_INPUT
  UPDATE_GRAPH: WRITER_UPDATE_GRAPH_INPUT
  WEB_SEARCH: WRITER_WEB_SEARCH_INPUT
}

/**
 * Type map of all available tool input types for toolkit "WRITER".
 */
export type WRITER_TOOL_OUTPUTS = {
  ASK_QUESTION_TO_KNOWLEDGE_GRAPH: WRITER_ASK_QUESTION_TO_KNOWLEDGE_GRAPH_OUTPUT
  CHAT_COMPLETION: WRITER_CHAT_COMPLETION_OUTPUT
  CREATE_KNOWLEDGE_GRAPH: WRITER_CREATE_KNOWLEDGE_GRAPH_OUTPUT
  DELETE_GRAPH: WRITER_DELETE_GRAPH_OUTPUT
  LIST_APPLICATIONS: WRITER_LIST_APPLICATIONS_OUTPUT
  LIST_FILES: WRITER_LIST_FILES_OUTPUT
  LIST_GRAPHS: WRITER_LIST_GRAPHS_OUTPUT
  LIST_MODELS: WRITER_LIST_MODELS_OUTPUT
  MEDICAL_COMPREHEND: WRITER_MEDICAL_COMPREHEND_OUTPUT
  RETRIEVE_GRAPH: WRITER_RETRIEVE_GRAPH_OUTPUT
  TEXT_GENERATION: WRITER_TEXT_GENERATION_OUTPUT
  UPDATE_GRAPH: WRITER_UPDATE_GRAPH_OUTPUT
  WEB_SEARCH: WRITER_WEB_SEARCH_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's WRITER toolkit.
 */
export const WRITER = {
  slug: "writer",
  tools: {
    /**
     * Tool to send a question to the knowledge graph and retrieve the answer. use after defining your question and optional context.
     */
    ASK_QUESTION_TO_KNOWLEDGE_GRAPH: "WRITER_ASK_QUESTION_TO_KNOWLEDGE_GRAPH",
    /**
     * Tool to generate chat-based completions. use when you need conversational ai responses; call after assembling system and user messages.
     */
    CHAT_COMPLETION: "WRITER_CHAT_COMPLETION",
    /**
     * Tool to create a new knowledge graph. use after defining nodes and edges to persist the graph.
     */
    CREATE_KNOWLEDGE_GRAPH: "WRITER_CREATE_KNOWLEDGE_GRAPH",
    /**
     * Tool to delete a knowledge graph by its id. use when you need to remove a graph after confirming its identifier.
     */
    DELETE_GRAPH: "WRITER_DELETE_GRAPH",
    /**
     * Tool to list all no-code agent applications. use when you need to retrieve all registered applications.
     */
    LIST_APPLICATIONS: "WRITER_LIST_APPLICATIONS",
    /**
     * Tool to list all uploaded files. use when you need to retrieve a paginated set of user files, optionally filtered by status, graph, or type. use after uploading files to inspect available files.
     */
    LIST_FILES: "WRITER_LIST_FILES",
    /**
     * Tool to retrieve a list of knowledge graphs. use when you need an overview of existing graphs.
     */
    LIST_GRAPHS: "WRITER_LIST_GRAPHS",
    /**
     * Tool to list all available language models. use when you need to discover which models can be used for completions.
     */
    LIST_MODELS: "WRITER_LIST_MODELS",
    /**
     * Tool to extract medical entities and concepts from unstructured clinical text. use when you need to label medical text with standardized codes such as snomed ct.
     */
    MEDICAL_COMPREHEND: "WRITER_MEDICAL_COMPREHEND",
    /**
     * Tool to retrieve a knowledge graph by its id. use when you need details of an existing graph.
     */
    RETRIEVE_GRAPH: "WRITER_RETRIEVE_GRAPH",
    /**
     * Tool to generate text based on a given prompt. use when you need model-driven completions after crafting a prompt.
     */
    TEXT_GENERATION: "WRITER_TEXT_GENERATION",
    /**
     * Tool to update an existing knowledge graph. use after confirming the graph id. specify at least one of name, data, or description to modify.
     */
    UPDATE_GRAPH: "WRITER_UPDATE_GRAPH",
    /**
     * Tool to perform a web search. use when you need relevant web page results for a given query.
     */
    WEB_SEARCH: "WRITER_WEB_SEARCH",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "WRITER".
 */
export type WRITER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "WRITER".
 */
export type WRITER_TRIGGER_EVENTS = {}
