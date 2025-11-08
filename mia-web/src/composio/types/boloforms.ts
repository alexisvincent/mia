// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BOLOFORMS's BOLOFORMS_GET_DOCUMENTS_LIST tool input.
 */
type BOLOFORMS_GET_DOCUMENTS_LIST_INPUT = object;

/**
 * Type of BOLOFORMS's BOLOFORMS_GET_DOCUMENTS_LIST tool output.
 */
type BOLOFORMS_GET_DOCUMENTS_LIST_OUTPUT = {
  /**
   * Data
   * @description List of documents associated with the account.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the document was created.
       * @default null
       */
      createdAt: string | null;
      /**
       * Document Id
       * @description Unique identifier of the document.
       */
      documentId: string;
      /**
       * Document Name
       * @description Name of the document.
       */
      documentName: string;
      /**
       * Signing Type
       * @description Type of signing workflow.
       */
      signingType: string;
      /**
       * Status
       * @description Current status of the document.
       * @default null
       */
      status: string | null;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the document was last updated.
       * @default null
       */
      updatedAt: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Message returned by the API.
   * @default null
   */
  message: string | null;
  /**
   * Status
   * @description Indicates if the API call was successful.
   */
  status?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "BOLOFORMS".
 */
export type BOLOFORMS_TOOL_INPUTS = {
  GET_DOCUMENTS_LIST: BOLOFORMS_GET_DOCUMENTS_LIST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BOLOFORMS".
 */
export type BOLOFORMS_TOOL_OUTPUTS = {
  GET_DOCUMENTS_LIST: BOLOFORMS_GET_DOCUMENTS_LIST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BOLOFORMS toolkit.
 */
export const BOLOFORMS = {
  slug: "boloforms",
  tools: {
    /**
     * Tool to retrieve a list of documents associated with the account. use when you need to list all documents.
     */
    GET_DOCUMENTS_LIST: "BOLOFORMS_GET_DOCUMENTS_LIST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BOLOFORMS".
 */
export type BOLOFORMS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BOLOFORMS".
 */
export type BOLOFORMS_TRIGGER_EVENTS = {}
