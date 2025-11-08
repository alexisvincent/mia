// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of NEURONWRITER's NEURONWRITER_IMPORT_CONTENT tool input.
 */
type NEURONWRITER_IMPORT_CONTENT_INPUT = {
  /**
   * Accept
   * @description Override Accept header (defaults to application/json).
   * @default null
   */
  accept: string | null;
  /**
   * Api Key
   * @description Override X-API-KEY header for authentication.
   * @default null
   */
  api_key: string | null;
  /**
   * Container Class
   * @description When using URL, the class of the container that holds the content.
   * @default null
   */
  container_class: string | null;
  /**
   * Content Type
   * @description Override Content-Type header (defaults to application/json).
   * @default null
   */
  content_type: string | null;
  /**
   * Description
   * @description Meta description; overwrites description from HTML/URL if provided.
   * @default null
   */
  description: string | null;
  /**
   * Extra Headers
   * @description Additional headers to merge into the request (for testing).
   * @default null
   */
  extra_headers: {
      [key: string]: string;
  } | null;
  /**
   * Html
   * @description HTML content to import. Required if 'url' not provided.
   * @default null
   */
  html: string | null;
  /**
   * Id
   * @description When using URL, the id of the container that holds the content.
   * @default null
   */
  id: string | null;
  /**
   * Query
   * @description The ID of your query.
   */
  query?: string;
  /**
   * Title
   * @description Title of your article; overwrites title from HTML/URL if provided.
   * @default null
   */
  title: string | null;
  /**
   * Url
   * @description URL to import and parse content from. Required if 'html' not provided.
   * @default null
   */
  url: string | null;
};

/**
 * Type of NEURONWRITER's NEURONWRITER_IMPORT_CONTENT tool output.
 */
type NEURONWRITER_IMPORT_CONTENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content Score
       * @description Content score returned after import, if available.
       * @default null
       */
      content_score: number | null;
      /**
       * Error
       * @description Error message if import fails.
       * @default null
       */
      error: string | null;
      /**
       * Status
       * @description Import status (e.g., 'ok').
       */
      status: string;
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
 * Type map of all available tool input types for toolkit "NEURONWRITER".
 */
export type NEURONWRITER_TOOL_INPUTS = {
  IMPORT_CONTENT: NEURONWRITER_IMPORT_CONTENT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "NEURONWRITER".
 */
export type NEURONWRITER_TOOL_OUTPUTS = {
  IMPORT_CONTENT: NEURONWRITER_IMPORT_CONTENT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's NEURONWRITER toolkit.
 */
export const NEURONWRITER = {
  slug: "neuronwriter",
  tools: {
    /**
     * Tool to import content into the editor. use when updating editor content via html or url.
     */
    IMPORT_CONTENT: "NEURONWRITER_IMPORT_CONTENT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "NEURONWRITER".
 */
export type NEURONWRITER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "NEURONWRITER".
 */
export type NEURONWRITER_TRIGGER_EVENTS = {}
