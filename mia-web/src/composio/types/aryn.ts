// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ARYN's ARYN_ARYN_CREATE_DOCSET tool input.
 */
type ARYN_ARYN_CREATE_DOCSET_INPUT = {
  /**
   * Name
   * @description Name of the DocSet
   */
  name?: string;
  /**
   * Prompts
   * @description Optional dictionary of prompts for the DocSet
   * @default null
   */
  prompts: {
      [key: string]: unknown;
  } | null;
  /**
   * Properties
   * @description Optional dictionary of additional properties
   * @default null
   */
  properties: {
      [key: string]: unknown;
  } | null;
  /**
   * Schema
   * @description Optional schema object defining document properties
   * @default null
   */
  schema: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of ARYN's ARYN_ARYN_CREATE_DOCSET tool output.
 */
type ARYN_ARYN_CREATE_DOCSET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Account ID containing the DocSet
       */
      account_id: string;
      /**
       * Created At
       * @description Creation timestamp
       */
      created_at: string;
      /**
       * Docset Id
       * @description Unique identifier for the DocSet
       */
      docset_id: string;
      /**
       * Name
       * @description Name of the DocSet
       */
      name: string;
      /**
       * Prompts
       * @description Dictionary of prompts for the DocSet
       */
      prompts: {
          [key: string]: unknown;
      };
      /**
       * Properties
       * @description Dictionary of custom properties
       * @default null
       */
      properties: {
          [key: string]: unknown;
      } | null;
      /**
       * Readonly
       * @description Boolean indicating if DocSet is read-only
       */
      readonly: boolean;
      /**
       * Schema
       * @description Schema object defining document properties
       * @default null
       */
      schema: {
          [key: string]: unknown;
      } | null;
      /**
       * Size
       * @description Size of the DocSet in bytes
       * @default null
       */
      size: number | null;
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
 * Type of ARYN's ARYN_CREATE_DOCSET tool input.
 */
type ARYN_CREATE_DOCSET_INPUT = {
  /**
   * Name
   * @description String name for the DocSet
   */
  name?: string;
  /**
   * Prompts
   * @description Optional dictionary of prompts for the DocSet
   * @default null
   */
  prompts: {
      [key: string]: unknown;
  } | null;
  /**
   * Properties
   * @description Optional dictionary of additional properties
   * @default null
   */
  properties: {
      [key: string]: unknown;
  } | null;
  /**
   * Schema
   * @description Optional schema object defining document properties
   * @default null
   */
  schema: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of ARYN's ARYN_CREATE_DOCSET tool output.
 */
type ARYN_CREATE_DOCSET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description Creation timestamp
       */
      created: string;
      /**
       * Docset Id
       * @description Unique identifier for the DocSet
       */
      docset_id: string;
      /**
       * Name
       * @description Name of the DocSet
       */
      name: string;
      /**
       * Prompts
       * @description Dictionary of prompts for the DocSet
       * @default null
       */
      prompts: {
          [key: string]: unknown;
      } | null;
      /**
       * Properties
       * @description Dictionary of custom properties
       */
      properties: {
          [key: string]: unknown;
      };
      /**
       * Readonly
       * @description Boolean indicating if DocSet is read-only
       */
      readonly: boolean;
      /**
       * Schema
       * @description Schema object defining document properties
       * @default null
       */
      schema: {
          [key: string]: unknown;
      } | null;
      /**
       * Size
       * @description Size of the DocSet in bytes
       */
      size: number;
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
 * Type of ARYN's ARYN_DELETE_DOCSET tool input.
 */
type ARYN_DELETE_DOCSET_INPUT = {
  /**
   * Docset Id
   * @description The unique identifier of the DocSet to delete
   */
  docset_id?: string;
};

/**
 * Type of ARYN's ARYN_DELETE_DOCSET tool output.
 */
type ARYN_DELETE_DOCSET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description The account ID containing the DocSet
       */
      account_id: string;
      /**
       * Created At
       * @description The creation time of the DocSet
       */
      created_at: string;
      /**
       * Docset Id
       * @description The unique ID of the DocSet
       */
      docset_id: string;
      /**
       * Name
       * @description The name of the DocSet
       */
      name: string;
      /**
       * Prompts
       * @description Prompts associated with the DocSet
       */
      prompts: {
          [key: string]: unknown;
      };
      /**
       * Properties
       * @description Additional properties of the DocSet
       * @default null
       */
      properties: {
          [key: string]: unknown;
      } | null;
      /**
       * Readonly
       * @description Whether the DocSet is read-only
       */
      readonly: boolean;
      /**
       * Schema
       * @description Schema of the DocSet
       * @default null
       */
      schema: {
          [key: string]: unknown;
      } | null;
      /**
       * Size
       * @description Size of the DocSet in bytes
       * @default null
       */
      size: number | null;
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
 * Type of ARYN's ARYN_GENERATE_PLAN tool input.
 */
type ARYN_GENERATE_PLAN_INPUT = {
  /**
   * Docset Id
   * @description ID of the docset to generate the plan for.
   */
  docset_id?: string;
  /**
   * Query
   * @description Natural language query string to generate a plan for.
   */
  query?: string;
};

/**
 * Type of ARYN's ARYN_GENERATE_PLAN tool output.
 */
type ARYN_GENERATE_PLAN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Llm Plan
       * @description Raw plan text generated by the language model.
       */
      llm_plan: string;
      /**
       * Llm Prompt
       * @description Prompt sent to the language model to generate the plan.
       * @default null
       */
      llm_prompt: unknown;
      /**
       * Nodes
       * @description Mapping of node IDs to node definitions in the logical plan.
       */
      nodes: {
          [key: string]: unknown;
      };
      /**
       * Query
       * @description The original query string.
       */
      query: string;
      /**
       * Result Node
       * @description ID of the result node in the plan.
       */
      result_node: number;
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
 * Type of ARYN's ARYN_GET_DOCUMENT tool input.
 */
type ARYN_GET_DOCUMENT_INPUT = {
  /**
   * Doc Id
   * @description The unique identifier of the document to retrieve.
   */
  doc_id?: string;
  /**
   * Docset Id
   * @description The unique identifier of the DocSet containing the document.
   */
  docset_id?: string;
  /**
   * Include Binary
   * @description Boolean to include binary data.
   * @default false
   */
  include_binary: boolean;
  /**
   * Include Elements
   * @description Boolean to include document elements.
   * @default true
   */
  include_elements: boolean;
};

/**
 * Type of ARYN's ARYN_GET_DOCUMENT tool output.
 */
type ARYN_GET_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Binary Data
       * Format: binary
       * @description Optional raw binary content of the document
       * @default null
       */
      binary_data: string | null;
      /**
       * Elements
       * @description List of document elements (pages, blocks, etc.)
       */
      elements: unknown[];
      /**
       * Id
       * @description Document identifier
       */
      id: string;
      /**
       * Properties
       * @description Document custom properties
       */
      properties: {
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
 * Type of ARYN's ARYN_GET_DOCUMENT_BINARY tool input.
 */
type ARYN_GET_DOCUMENT_BINARY_INPUT = {
  /**
   * Docset Id
   * @description The unique identifier of the DocSet containing the document.
   */
  docsetId?: string;
  /**
   * Document Id
   * @description The unique identifier of the document to download.
   */
  documentId?: string;
};

/**
 * Type of ARYN's ARYN_GET_DOCUMENT_BINARY tool output.
 */
type ARYN_GET_DOCUMENT_BINARY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * Format: binary
       * @description Binary content of the document.
       */
      content: string;
      /**
       * Content Disposition
       * @description Content disposition header, including filename if provided.
       * @default null
       */
      content_disposition: string | null;
      /**
       * Content Type
       * @description MIME type of the document content.
       */
      content_type: string;
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
 * Type of ARYN's ARYN_GET_DOC_SET tool input.
 */
type ARYN_GET_DOC_SET_INPUT = {
  /**
   * Docset Id
   * @description Unique identifier of the DocSet to retrieve metadata for.
   */
  docsetId?: string;
  /**
   * Fields
   * @description Comma-separated list of metadata fields to include in the response (e.g., 'name,owner').
   * @default null
   */
  fields: string | null;
  /**
   * Include Stats
   * @description Whether to include usage statistics (documentsCount, storageUsed).
   * @default false
   */
  includeStats: boolean;
};

/**
 * Type of ARYN's ARYN_GET_DOC_SET tool output.
 */
type ARYN_GET_DOC_SET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description ISO 8601 timestamp when the DocSet was created.
       */
      createdAt: string;
      /**
       * Docset Id
       * @description Unique identifier of the DocSet.
       */
      docsetId: string;
      /**
       * Metadata
       * @description Additional metadata fields as key-value pairs.
       */
      metadata: {
          [key: string]: string;
      };
      /**
       * Name
       * @description Name of the DocSet.
       */
      name: string;
      /**
       * Owner
       * @description Identifier of the DocSet owner.
       */
      owner: string;
      /**
       * DocSetStats
       * @description Usage statistics for a DocSet.
       * @default null
       */
      stats: {
          /**
           * Documents Count
           * @description Total number of documents in the DocSet.
           */
          documentsCount: number;
          /**
           * Storage Used
           * @description Storage used by the DocSet in bytes.
           */
          storageUsed: number;
      } | null;
      /**
       * Updated At
       * Format: date-time
       * @description ISO 8601 timestamp of the last update to the DocSet.
       */
      updatedAt: string;
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
 * Type of ARYN's ARYN_LIST_ASYNC_TASKS tool input.
 */
type ARYN_LIST_ASYNC_TASKS_INPUT = object;

/**
 * Type of ARYN's ARYN_LIST_ASYNC_TASKS tool output.
 */
type ARYN_LIST_ASYNC_TASKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tasks
       * @description Map of task IDs to metadata for async tasks.
       */
      tasks: {
          [key: string]: {
              /**
               * Action
               * @description The path of the endpoint used to invoke the task.
               */
              action: string;
              /**
               * Task Status
               * @description The current status of the task.
               * @enum {string}
               */
              task_status: "queued" | "running" | "done" | "cancelled";
              /**
               * Userdata
               * @description Additional metadata associated with the task.
               * @default null
               */
              userdata: string | null;
          };
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
 * Type map of all available tool input types for toolkit "ARYN".
 */
export type ARYN_TOOL_INPUTS = {
  ARYN_CREATE_DOCSET: ARYN_ARYN_CREATE_DOCSET_INPUT
  CREATE_DOCSET: ARYN_CREATE_DOCSET_INPUT
  DELETE_DOCSET: ARYN_DELETE_DOCSET_INPUT
  GENERATE_PLAN: ARYN_GENERATE_PLAN_INPUT
  GET_DOCUMENT: ARYN_GET_DOCUMENT_INPUT
  GET_DOCUMENT_BINARY: ARYN_GET_DOCUMENT_BINARY_INPUT
  GET_DOC_SET: ARYN_GET_DOC_SET_INPUT
  LIST_ASYNC_TASKS: ARYN_LIST_ASYNC_TASKS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ARYN".
 */
export type ARYN_TOOL_OUTPUTS = {
  ARYN_CREATE_DOCSET: ARYN_ARYN_CREATE_DOCSET_OUTPUT
  CREATE_DOCSET: ARYN_CREATE_DOCSET_OUTPUT
  DELETE_DOCSET: ARYN_DELETE_DOCSET_OUTPUT
  GENERATE_PLAN: ARYN_GENERATE_PLAN_OUTPUT
  GET_DOCUMENT: ARYN_GET_DOCUMENT_OUTPUT
  GET_DOCUMENT_BINARY: ARYN_GET_DOCUMENT_BINARY_OUTPUT
  GET_DOC_SET: ARYN_GET_DOC_SET_OUTPUT
  LIST_ASYNC_TASKS: ARYN_LIST_ASYNC_TASKS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ARYN toolkit.
 */
export const ARYN = {
  slug: "aryn",
  tools: {
    /**
     * Tool to create a new docset. use when you need to allocate a storage container before adding documents.
     */
    ARYN_CREATE_DOCSET: "ARYN_ARYN_CREATE_DOCSET",
    /**
     * Tool to create a new docset. use when you need to allocate a storage container before adding documents.
     */
    CREATE_DOCSET: "ARYN_CREATE_DOCSET",
    /**
     * Tool to delete a docset and all its documents. use after confirming the docset id, when you need to permanently remove a docset and its contents.
     */
    DELETE_DOCSET: "ARYN_DELETE_DOCSET",
    /**
     * Tool to generate a query plan without executing it. use when you need to review the logical plan before running your query (e.g., "generate a plan for revenue breakdown by region").
     */
    GENERATE_PLAN: "ARYN_GENERATE_PLAN",
    /**
     * Tool to retrieve a document by id. use after both docset and document ids are available.
     */
    GET_DOCUMENT: "ARYN_GET_DOCUMENT",
    /**
     * Tool to retrieve the binary content of a document by docset id and document id.
     */
    GET_DOCUMENT_BINARY: "ARYN_GET_DOCUMENT_BINARY",
    /**
     * Tool to retrieve metadata for a specific docset. use when you have the docset id and optionally need usage statistics.
     */
    GET_DOC_SET: "ARYN_GET_DOC_SET",
    /**
     * Tool to list all outstanding asynchronous tasks for the account. use when you need to check pending or running tasks.
     */
    LIST_ASYNC_TASKS: "ARYN_LIST_ASYNC_TASKS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ARYN".
 */
export type ARYN_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ARYN".
 */
export type ARYN_TRIGGER_EVENTS = {}
