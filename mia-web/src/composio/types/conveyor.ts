// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CONVEYOR's CONVEYOR_DELETE_DOCUMENT tool input.
 */
type CONVEYOR_DELETE_DOCUMENT_INPUT = {
  /**
   * Document Id
   * @description Unique identifier of the document to delete
   */
  document_id?: string;
};

/**
 * Type of CONVEYOR's CONVEYOR_DELETE_DOCUMENT tool output.
 */
type CONVEYOR_DELETE_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of CONVEYOR's CONVEYOR_DELETE_FOLDER tool input.
 */
type CONVEYOR_DELETE_FOLDER_INPUT = {
  /**
   * Folder Id
   * @description Unique identifier of the folder to delete
   */
  folder_id?: string;
};

/**
 * Type of CONVEYOR's CONVEYOR_DELETE_FOLDER tool output.
 */
type CONVEYOR_DELETE_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of CONVEYOR's CONVEYOR_GENERATE_API_TOKEN tool input.
 */
type CONVEYOR_GENERATE_API_TOKEN_INPUT = {
  /**
   * Dry Run
   * @description If true, does not call the API; returns guidance only
   * @default false
   */
  dry_run: boolean | null;
  /**
   * Label
   * @description Optional label to tag this token validation attempt
   * @default null
   */
  label: string | null;
  /**
   * Note
   * @description Optional note; supports special characters and emojis
   * @default null
   */
  note: string | null;
  /**
   * Tags
   * @description Optional list of tags for testing parameter variations
   * @default null
   */
  tags: string[] | null;
};

/**
 * Type of CONVEYOR's CONVEYOR_GENERATE_API_TOKEN tool output.
 */
type CONVEYOR_GENERATE_API_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Connections Count
       * @description Number of connections returned when validating the token
       * @default null
       */
      connections_count: number | null;
      /**
       * Message
       * @description Human-readable guidance and outcome of the validation
       */
      message: string;
      /**
       * Request Label
       * @description Echo of the request label for traceability
       * @default null
       */
      request_label: string | null;
      /**
       * Token Status
       * @description Status of the token: 'valid' or 'invalid'
       * @default null
       */
      token_status: string | null;
      /**
       * Validated
       * @description Whether the provided API key was validated successfully
       */
      validated: boolean;
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
 * Type of CONVEYOR's CONVEYOR_GET_AUTHORIZATIONS tool input.
 */
type CONVEYOR_GET_AUTHORIZATIONS_INPUT = {
  /**
   * Status
   * @description Filter authorizations by status (e.g., 'pending', 'approved', 'denied')
   * @default null
   */
  status: string | null;
};

/**
 * Type of CONVEYOR's CONVEYOR_GET_AUTHORIZATIONS tool output.
 */
type CONVEYOR_GET_AUTHORIZATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Authorizations
       * @description List of authorization request objects returned by Conveyor
       */
      authorizations: {
          [key: string]: unknown;
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
 * Type of CONVEYOR's CONVEYOR_GET_AUTHORIZATION_REQUEST tool input.
 */
type CONVEYOR_GET_AUTHORIZATION_REQUEST_INPUT = {
  /**
   * Authorization Request Id
   * @description The ID of the authorization request to retrieve
   */
  authorization_request_id?: string;
};

/**
 * Type of CONVEYOR's CONVEYOR_GET_AUTHORIZATION_REQUEST tool output.
 */
type CONVEYOR_GET_AUTHORIZATION_REQUEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Connection Id
       * @description Identifier of the associated connection
       * @default null
       */
      connection_id: string | null;
      /**
       * Created At
       * @description ISO 8601 timestamp when the request was created
       * @default null
       */
      created_at: string | null;
      /**
       * Id
       * @description The unique identifier of the authorization request
       */
      id: string;
      /**
       * Redirect Uri
       * @description Redirect URI configured for the request
       * @default null
       */
      redirect_uri: string | null;
      /**
       * Scopes
       * @description List of OAuth scopes requested
       * @default null
       */
      scopes: string[] | null;
      /**
       * Status
       * @description Current status of the authorization request
       * @default null
       */
      status: string | null;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the request was last updated
       * @default null
       */
      updated_at: string | null;
      /**
       * User Id
       * @description Identifier of the user who created the request
       * @default null
       */
      user_id: string | null;
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
 * Type of CONVEYOR's CONVEYOR_GET_AUTHORIZATION_REQUESTS tool input.
 */
type CONVEYOR_GET_AUTHORIZATION_REQUESTS_INPUT = {
  /**
   * Status
   * @description Optional filter to return authorization requests with this status. Use 'requested' to fetch the authorization requests queue.
   * @default null
   */
  status: string | null;
};

/**
 * Type of CONVEYOR's CONVEYOR_GET_AUTHORIZATION_REQUESTS tool output.
 */
type CONVEYOR_GET_AUTHORIZATION_REQUESTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Authorization Requests
       * @description List of authorization request objects
       */
      authorization_requests: ({
          /**
           * Created At
           * @description Timestamp when the authorization request was created
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier for the authorization request
           */
          id: string;
          /**
           * Status
           * @description Current status of the authorization request
           */
          status: string;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of CONVEYOR's CONVEYOR_GET_CONNECTIONS tool input.
 */
type CONVEYOR_GET_CONNECTIONS_INPUT = object;

/**
 * Type of CONVEYOR's CONVEYOR_GET_CONNECTIONS tool output.
 */
type CONVEYOR_GET_CONNECTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Connections
       * @description List of connections retrieved from Conveyor
       */
      connections: {
          /**
           * Details
           * @description Additional details related to the connection
           * @default null
           */
          details: {
              [key: string]: unknown;
          } | null;
          /**
           * Id
           * @description Unique identifier of the connection
           */
          id: string;
          /**
           * Name
           * @description Name of the connection, if available
           * @default null
           */
          name: string | null;
          /**
           * Status
           * @description Current status of the connection (e.g., 'active', 'inactive')
           * @default null
           */
          status: string | null;
      }[];
      /**
       * Next Page
       * @description Cursor or URL for fetching the next page of results, if pagination is supported
       * @default null
       */
      next_page: string | null;
      /**
       * Total
       * @description Total number of connections available (if provided by API)
       * @default null
       */
      total: number | null;
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
 * Type of CONVEYOR's CONVEYOR_GET_DOCUMENTS tool input.
 */
type CONVEYOR_GET_DOCUMENTS_INPUT = object;

/**
 * Type of CONVEYOR's CONVEYOR_GET_DOCUMENTS tool output.
 */
type CONVEYOR_GET_DOCUMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Documents
       * @description List of documents retrieved from Conveyor
       */
      documents: {
          /**
           * Details
           * @description Additional details related to the document
           * @default null
           */
          details: {
              [key: string]: unknown;
          } | null;
          /**
           * Id
           * @description Unique identifier of the document
           */
          id: string;
          /**
           * Name
           * @description Name of the document, if available
           * @default null
           */
          name: string | null;
          /**
           * Status
           * @description Current status of the document
           * @default null
           */
          status: string | null;
      }[];
      /**
       * Next Page
       * @description Cursor or URL for fetching the next page of results, if pagination is supported
       * @default null
       */
      next_page: string | null;
      /**
       * Total
       * @description Total number of documents available (if provided by API)
       * @default null
       */
      total: number | null;
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
 * Type of CONVEYOR's CONVEYOR_GET_FOLDERS tool input.
 */
type CONVEYOR_GET_FOLDERS_INPUT = object;

/**
 * Type of CONVEYOR's CONVEYOR_GET_FOLDERS tool output.
 */
type CONVEYOR_GET_FOLDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Folders
       * @description List of folders retrieved from Conveyor
       */
      folders: {
          /**
           * Created At
           * @description Timestamp when the folder was created
           * @default null
           */
          created_at: string | null;
          /**
           * Details
           * @description Additional details related to the folder
           * @default null
           */
          details: {
              [key: string]: unknown;
          } | null;
          /**
           * Id
           * @description Unique identifier of the folder
           */
          id: string;
          /**
           * Name
           * @description Name of the folder, if available
           * @default null
           */
          name: string | null;
          /**
           * Parent Id
           * @description Identifier of the parent folder, if nested
           * @default null
           */
          parent_id: string | null;
          /**
           * Updated At
           * @description Timestamp when the folder was last updated
           * @default null
           */
          updated_at: string | null;
      }[];
      /**
       * Next Page
       * @description Cursor or URL for fetching the next page of results, if pagination is supported
       * @default null
       */
      next_page: string | null;
      /**
       * Total
       * @description Total number of folders available (if provided by API)
       * @default null
       */
      total: number | null;
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
 * Type of CONVEYOR's CONVEYOR_GET_INTERACTIONS_BY_DOCUMENT_ID tool input.
 */
type CONVEYOR_GET_INTERACTIONS_BY_DOCUMENT_ID_INPUT = {
  /**
   * Document Id
   * @description The unique ID of the document to retrieve its interactions.
   */
  document_id?: string;
};

/**
 * Type of CONVEYOR's CONVEYOR_GET_INTERACTIONS_BY_DOCUMENT_ID tool output.
 */
type CONVEYOR_GET_INTERACTIONS_BY_DOCUMENT_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Interactions
       * @description List of interaction objects for the specified document
       */
      interactions: {
          [key: string]: unknown;
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
 * Type of CONVEYOR's CONVEYOR_GET_KNOWLEDGE_BASE_QUESTIONS tool input.
 */
type CONVEYOR_GET_KNOWLEDGE_BASE_QUESTIONS_INPUT = {
  /**
   * Page
   * @description Page number for paginated results (1-indexed)
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page
   * @default null
   */
  per_page: number | null;
  /**
   * Search
   * @description Optional search term used to filter knowledge base questions (if supported by API)
   * @default null
   */
  search: string | null;
};

/**
 * Type of CONVEYOR's CONVEYOR_GET_KNOWLEDGE_BASE_QUESTIONS tool output.
 */
type CONVEYOR_GET_KNOWLEDGE_BASE_QUESTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page
       * @description Current page number
       * @default null
       */
      page: number | null;
      /**
       * Per Page
       * @description Number of items per page
       * @default null
       */
      per_page: number | null;
      /**
       * Questions
       * @description List of knowledge base questions
       */
      questions: {
          /**
           * Answer
           * @description The answer text to the question
           */
          answer: string;
          /**
           * Created At
           * @description Timestamp when the question was created
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier for the question
           */
          id: string;
          /**
           * Metadata
           * @description Additional metadata associated with the question
           * @default null
           */
          metadata: {
              [key: string]: unknown;
          } | null;
          /**
           * Question
           * @description The text of the knowledge base question
           */
          question: string;
          /**
           * Updated At
           * @description Timestamp when the question was last updated
           * @default null
           */
          updated_at: string | null;
      }[];
      /**
       * Total
       * @description Total number of questions
       * @default null
       */
      total: number | null;
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
 * Type of CONVEYOR's CONVEYOR_GET_PRODUCT_LINES tool input.
 */
type CONVEYOR_GET_PRODUCT_LINES_INPUT = object;

/**
 * Type of CONVEYOR's CONVEYOR_GET_PRODUCT_LINES tool output.
 */
type CONVEYOR_GET_PRODUCT_LINES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Product Lines
       * @description List of product lines
       */
      product_lines: {
          [key: string]: unknown;
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
 * Type of CONVEYOR's CONVEYOR_PATCH_AUTHORIZATION tool input.
 */
type CONVEYOR_PATCH_AUTHORIZATION_INPUT = {
  /**
   * Access Group Ids
   * @description List of access group IDs to assign to the authorization
   * @default null
   */
  access_group_ids: string[] | null;
  /**
   * Authorization Id
   * @description Unique identifier of the authorization to update
   */
  authorization_id?: string;
  /**
   * Revoke
   * @description Set to true to revoke the authorization
   * @default null
   */
  revoke: boolean | null;
};

/**
 * Type of CONVEYOR's CONVEYOR_PATCH_AUTHORIZATION tool output.
 */
type CONVEYOR_PATCH_AUTHORIZATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Authorization
       * @description The updated authorization object returned by Conveyor
       */
      authorization: {
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
 * Type of CONVEYOR's CONVEYOR_PATCH_DOCUMENT tool input.
 */
type CONVEYOR_PATCH_DOCUMENT_INPUT = {
  /**
   * Details
   * @description Additional details for the document
   * @default null
   */
  details: {
      [key: string]: unknown;
  } | null;
  /**
   * Document Id
   * @description Unique identifier of the document to update
   */
  document_id?: string;
  /**
   * Name
   * @description New name for the document
   * @default null
   */
  name: string | null;
  /**
   * Status
   * @description New status for the document
   * @default null
   */
  status: string | null;
};

/**
 * Type of CONVEYOR's CONVEYOR_PATCH_DOCUMENT tool output.
 */
type CONVEYOR_PATCH_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Details
       * @description Additional details of the document
       * @default null
       */
      details: {
          [key: string]: unknown;
      } | null;
      /**
       * Id
       * @description Unique identifier of the document
       */
      id: string;
      /**
       * Name
       * @description Name of the document
       * @default null
       */
      name: string | null;
      /**
       * Status
       * @description Status of the document
       * @default null
       */
      status: string | null;
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
 * Type of CONVEYOR's CONVEYOR_POST_AUTHORIZATION tool input.
 */
type CONVEYOR_POST_AUTHORIZATION_INPUT = {
  /**
   * Access Group Ids
   * @description List of access group IDs to assign during creation.
   * @default null
   */
  access_group_ids: string[] | null;
  /**
   * Authorization Request Id
   * @description ID of an existing authorization request to base this authorization on.
   * @default null
   */
  authorization_request_id: string | null;
  /**
   * Email
   * @description Email address to create the authorization for.
   * @default null
   */
  email: string | null;
};

/**
 * Type of CONVEYOR's CONVEYOR_POST_AUTHORIZATION tool output.
 */
type CONVEYOR_POST_AUTHORIZATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Authorization
       * @description The created authorization object returned by Conveyor.
       */
      authorization: {
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
 * Type of CONVEYOR's CONVEYOR_POST_DOCUMENT tool input.
 */
type CONVEYOR_POST_DOCUMENT_INPUT = {
  /**
   * File Path
   * @description Local path to the document file to upload; file size must be <=100MB
   */
  file_path?: string;
  /**
   * Name
   * @description Name to assign to the created document (required by API)
   */
  name?: string;
};

/**
 * Type of CONVEYOR's CONVEYOR_POST_DOCUMENT tool output.
 */
type CONVEYOR_POST_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Details
       * @description Additional details about the document
       * @default null
       */
      details: {
          [key: string]: unknown;
      } | null;
      /**
       * Id
       * @description Unique identifier of the created document
       */
      id: string;
      /**
       * Name
       * @description Name of the created document
       * @default null
       */
      name: string | null;
      /**
       * Status
       * @description Processing status of the document
       * @default null
       */
      status: string | null;
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
 * Type of CONVEYOR's CONVEYOR_POST_FOLDER tool input.
 */
type CONVEYOR_POST_FOLDER_INPUT = {
  /**
   * Name
   * @description Name of the folder to create
   */
  name?: string;
  /**
   * Parent Id
   * @description ID of an existing parent folder under which to nest this new folder; omit to create at the root level
   * @default null
   */
  parent_id: string | null;
};

/**
 * Type of CONVEYOR's CONVEYOR_POST_FOLDER tool output.
 */
type CONVEYOR_POST_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the created folder
       */
      id: string;
      /**
       * Name
       * @description Name of the created folder
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
 * Type of CONVEYOR's CONVEYOR_POST_SINGLE_QUESTION tool input.
 */
type CONVEYOR_POST_SINGLE_QUESTION_INPUT = {
  /**
   * Product Line Ids
   * @description List of product line IDs to scope the question (use GET Product Lines to retrieve valid IDs)
   */
  product_line_ids?: string[];
  /**
   * Question
   * @description The question to be answered by Conveyor AI
   */
  question?: string;
};

/**
 * Type of CONVEYOR's CONVEYOR_POST_SINGLE_QUESTION tool output.
 */
type CONVEYOR_POST_SINGLE_QUESTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Answer
       * @description The answer generated by Conveyor AI for the submitted question
       */
      answer: string;
      /**
       * Metadata
       * @description Additional metadata about the question processing
       * @default null
       */
      metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Sources
       * @description List of source document references used to generate the answer
       */
      sources: {
          /**
           * Id
           * @description Identifier of the source document
           */
          id: string;
          /**
           * Snippet
           * @description Excerpt from the source document used for the answer
           */
          snippet: string;
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
 * Type map of all available tool input types for toolkit "CONVEYOR".
 */
export type CONVEYOR_TOOL_INPUTS = {
  DELETE_DOCUMENT: CONVEYOR_DELETE_DOCUMENT_INPUT
  DELETE_FOLDER: CONVEYOR_DELETE_FOLDER_INPUT
  GENERATE_API_TOKEN: CONVEYOR_GENERATE_API_TOKEN_INPUT
  GET_AUTHORIZATIONS: CONVEYOR_GET_AUTHORIZATIONS_INPUT
  GET_AUTHORIZATION_REQUEST: CONVEYOR_GET_AUTHORIZATION_REQUEST_INPUT
  GET_AUTHORIZATION_REQUESTS: CONVEYOR_GET_AUTHORIZATION_REQUESTS_INPUT
  GET_CONNECTIONS: CONVEYOR_GET_CONNECTIONS_INPUT
  GET_DOCUMENTS: CONVEYOR_GET_DOCUMENTS_INPUT
  GET_FOLDERS: CONVEYOR_GET_FOLDERS_INPUT
  GET_INTERACTIONS_BY_DOCUMENT_ID: CONVEYOR_GET_INTERACTIONS_BY_DOCUMENT_ID_INPUT
  GET_KNOWLEDGE_BASE_QUESTIONS: CONVEYOR_GET_KNOWLEDGE_BASE_QUESTIONS_INPUT
  GET_PRODUCT_LINES: CONVEYOR_GET_PRODUCT_LINES_INPUT
  PATCH_AUTHORIZATION: CONVEYOR_PATCH_AUTHORIZATION_INPUT
  PATCH_DOCUMENT: CONVEYOR_PATCH_DOCUMENT_INPUT
  POST_AUTHORIZATION: CONVEYOR_POST_AUTHORIZATION_INPUT
  POST_DOCUMENT: CONVEYOR_POST_DOCUMENT_INPUT
  POST_FOLDER: CONVEYOR_POST_FOLDER_INPUT
  POST_SINGLE_QUESTION: CONVEYOR_POST_SINGLE_QUESTION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CONVEYOR".
 */
export type CONVEYOR_TOOL_OUTPUTS = {
  DELETE_DOCUMENT: CONVEYOR_DELETE_DOCUMENT_OUTPUT
  DELETE_FOLDER: CONVEYOR_DELETE_FOLDER_OUTPUT
  GENERATE_API_TOKEN: CONVEYOR_GENERATE_API_TOKEN_OUTPUT
  GET_AUTHORIZATIONS: CONVEYOR_GET_AUTHORIZATIONS_OUTPUT
  GET_AUTHORIZATION_REQUEST: CONVEYOR_GET_AUTHORIZATION_REQUEST_OUTPUT
  GET_AUTHORIZATION_REQUESTS: CONVEYOR_GET_AUTHORIZATION_REQUESTS_OUTPUT
  GET_CONNECTIONS: CONVEYOR_GET_CONNECTIONS_OUTPUT
  GET_DOCUMENTS: CONVEYOR_GET_DOCUMENTS_OUTPUT
  GET_FOLDERS: CONVEYOR_GET_FOLDERS_OUTPUT
  GET_INTERACTIONS_BY_DOCUMENT_ID: CONVEYOR_GET_INTERACTIONS_BY_DOCUMENT_ID_OUTPUT
  GET_KNOWLEDGE_BASE_QUESTIONS: CONVEYOR_GET_KNOWLEDGE_BASE_QUESTIONS_OUTPUT
  GET_PRODUCT_LINES: CONVEYOR_GET_PRODUCT_LINES_OUTPUT
  PATCH_AUTHORIZATION: CONVEYOR_PATCH_AUTHORIZATION_OUTPUT
  PATCH_DOCUMENT: CONVEYOR_PATCH_DOCUMENT_OUTPUT
  POST_AUTHORIZATION: CONVEYOR_POST_AUTHORIZATION_OUTPUT
  POST_DOCUMENT: CONVEYOR_POST_DOCUMENT_OUTPUT
  POST_FOLDER: CONVEYOR_POST_FOLDER_OUTPUT
  POST_SINGLE_QUESTION: CONVEYOR_POST_SINGLE_QUESTION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CONVEYOR toolkit.
 */
export const CONVEYOR = {
  slug: "conveyor",
  tools: {
    /**
     * Tool to delete a specific document. Use when you need to remove a document by its ID.
     */
    DELETE_DOCUMENT: "CONVEYOR_DELETE_DOCUMENT",
    /**
     * Tool to delete a folder by its ID. Use when you need to remove a specific folder after confirming its ID.
     */
    DELETE_FOLDER: "CONVEYOR_DELETE_FOLDER",
    /**
     * Tool to validate API token and provide guidance. Conveyor does not support API-based token creation; tokens must be created in the Conveyor UI. This action performs a real API call (using the provided metadata) to validate the existing API token and returns structured guidance.
     */
    GENERATE_API_TOKEN: "CONVEYOR_GENERATE_API_TOKEN",
    /**
     * Tool to retrieve all authorization requests. Use when you need to list all authorizations; optionally filter by status. Use after authenticating with a valid API token.
     */
    GET_AUTHORIZATIONS: "CONVEYOR_GET_AUTHORIZATIONS",
    /**
     * Tool to fetch details of a specific authorization request. Use when you need to retrieve metadata by authorization_request_id.
     */
    GET_AUTHORIZATION_REQUEST: "CONVEYOR_GET_AUTHORIZATION_REQUEST",
    /**
     * Tool to fetch authorization requests. Use when you need to list authorization requests, optionally filtered by status.
     */
    GET_AUTHORIZATION_REQUESTS: "CONVEYOR_GET_AUTHORIZATION_REQUESTS",
    /**
     * Tool to retrieve all connections. Use when you need to fetch the complete list of your Conveyor connections. Use after authenticating with a valid API key.
     */
    GET_CONNECTIONS: "CONVEYOR_GET_CONNECTIONS",
    /**
     * Tool to retrieve all documents. Use after authenticating with a valid API key.
     */
    GET_DOCUMENTS: "CONVEYOR_GET_DOCUMENTS",
    /**
     * Tool to retrieve all folders. Use after authenticating with a valid API key to fetch the complete list of your Conveyor folders.
     */
    GET_FOLDERS: "CONVEYOR_GET_FOLDERS",
    /**
     * Tool to fetch interactions associated with a specific document. Use when you need to list all interactions for a given document after validating its existence.
     */
    GET_INTERACTIONS_BY_DOCUMENT_ID: "CONVEYOR_GET_INTERACTIONS_BY_DOCUMENT_ID",
    /**
     * Tool to retrieve knowledge base questions. Use when you need to fetch all questions from the Conveyor knowledge base.
     */
    GET_KNOWLEDGE_BASE_QUESTIONS: "CONVEYOR_GET_KNOWLEDGE_BASE_QUESTIONS",
    /**
     * Tool to fetch all product lines. Use when you need to retrieve product lines after confirming API key validity.
     */
    GET_PRODUCT_LINES: "CONVEYOR_GET_PRODUCT_LINES",
    /**
     * Tool to update or revoke an existing authorization. Use when managing authorization access groups or revoking access.
     */
    PATCH_AUTHORIZATION: "CONVEYOR_PATCH_AUTHORIZATION",
    /**
     * Tool to update document attributes. Use when you need to modify fields of an existing document by its ID.
     */
    PATCH_DOCUMENT: "CONVEYOR_PATCH_DOCUMENT",
    /**
     * Tool to create a new authorization. Use when you need to grant access by email or from a prior authorization request.
     */
    POST_AUTHORIZATION: "CONVEYOR_POST_AUTHORIZATION",
    /**
     * Tool to upload a new document. Use when you have a local file (<=100MB) to send to Conveyor.
     */
    POST_DOCUMENT: "CONVEYOR_POST_DOCUMENT",
    /**
     * Tool to create a new folder in Conveyor Exchange. Use when you need to organize items into folders programmatically after obtaining an API key.
     */
    POST_FOLDER: "CONVEYOR_POST_FOLDER",
    /**
     * Tool to submit a single question. Use when you need an immediate AI-generated answer for a specific product line question.
     */
    POST_SINGLE_QUESTION: "CONVEYOR_POST_SINGLE_QUESTION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CONVEYOR".
 */
export type CONVEYOR_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CONVEYOR".
 */
export type CONVEYOR_TRIGGER_EVENTS = {}
