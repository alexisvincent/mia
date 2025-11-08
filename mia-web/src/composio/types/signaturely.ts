// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SIGNATURELY's SIGNATURELY_LIST_DOCUMENTS tool input.
 */
type SIGNATURELY_LIST_DOCUMENTS_INPUT = {
  /**
   * Created At From
   * @description Return documents created after this date (ISO 8601)
   * @default null
   */
  created_at_from: string | null;
  /**
   * Created At To
   * @description Return documents created before this date (ISO 8601)
   * @default null
   */
  created_at_to: string | null;
  /**
   * Limit
   * @description Number of results per page (1–100)
   * @default 10
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination (minimum 1)
   * @default 1
   */
  page: number | null;
  /**
   * Status
   * @description Filter by document status (draft, sent, signed, declined, canceled)
   * @default null
   * @enum {string|null}
   */
  status: "draft" | "sent" | "signed" | "declined" | "canceled" | null;
  /**
   * Template
   * @description Filter by template flag (true for templates, false for documents)
   * @default null
   */
  template: boolean | null;
  /**
   * User Id
   * @description Filter documents by user ID
   * @default null
   */
  user_id: number | null;
};

/**
 * Type of SIGNATURELY's SIGNATURELY_LIST_DOCUMENTS tool output.
 */
type SIGNATURELY_LIST_DOCUMENTS_OUTPUT = {
  /**
   * Data
   * @description List of document objects
   */
  data?: ({
      /**
       * Created At
       * @description Timestamp when the document was created
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier for the document
       */
      id: number;
      /**
       * Status
       * @description Current status of the document
       */
      status: string;
      /**
       * Title
       * @description Title of the document
       */
      title: string;
      /**
       * Updated At
       * @description Timestamp when the document was last updated
       */
      updated_at: string;
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
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Limit
       * @description Number of documents per page
       */
      limit: number;
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Total
       * @description Total number of documents
       */
      total: number;
      /**
       * Total Pages
       * @description Total number of pages available
       */
      total_pages: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SIGNATURELY's SIGNATURELY_LIST_TEMPLATES tool input.
 */
type SIGNATURELY_LIST_TEMPLATES_INPUT = {
  /**
   * Limit
   * @description Number of records per page
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination (1-based)
   * @default null
   */
  page: number | null;
};

/**
 * Type of SIGNATURELY's SIGNATURELY_LIST_TEMPLATES tool output.
 */
type SIGNATURELY_LIST_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Array of template objects
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp (ISO 8601)
       */
      created_at: string;
      /**
       * Description
       * @description Template description
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Template ID
       */
      id: string;
      /**
       * Title
       * @description Template title
       */
      title: string;
      /**
       * Updated At
       * @description Last update timestamp (ISO 8601)
       */
      updated_at: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Pagination
   * @description Pagination metadata
   */
  pagination?: {
      /**
       * Limit
       * @description Number of results per page
       */
      limit: number;
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Total
       * @description Total number of results
       */
      total: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "SIGNATURELY".
 */
export type SIGNATURELY_TOOL_INPUTS = {
  LIST_DOCUMENTS: SIGNATURELY_LIST_DOCUMENTS_INPUT
  LIST_TEMPLATES: SIGNATURELY_LIST_TEMPLATES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SIGNATURELY".
 */
export type SIGNATURELY_TOOL_OUTPUTS = {
  LIST_DOCUMENTS: SIGNATURELY_LIST_DOCUMENTS_OUTPUT
  LIST_TEMPLATES: SIGNATURELY_LIST_TEMPLATES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SIGNATURELY toolkit.
 */
export const SIGNATURELY = {
  slug: "signaturely",
  tools: {
    /**
     * Tool to list all documents. use after authenticating to retrieve documents with optional filters and pagination.
     */
    LIST_DOCUMENTS: "SIGNATURELY_LIST_DOCUMENTS",
    /**
     * Tool to list all templates. implemented via filtering documents endpoint with template flag.
     */
    LIST_TEMPLATES: "SIGNATURELY_LIST_TEMPLATES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SIGNATURELY".
 */
export type SIGNATURELY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SIGNATURELY".
 */
export type SIGNATURELY_TRIGGER_EVENTS = {}
