// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MEM's MEM_CREATE_COLLECTION tool input.
 */
type MEM_CREATE_COLLECTION_INPUT = {
  /**
   * Content
   * @description Optional body/content of the collection.
   * @default null
   */
  content: string | null;
  /**
   * Is Read Only
   * @description Whether the collection should be read-only.
   * @default null
   */
  isReadOnly: boolean | null;
  /**
   * Parent Id
   * @description Parent collection's ID for creating a sub-collection.
   * @default null
   */
  parentId: string | null;
  /**
   * Publish On
   * @description Scheduled publish time in ISO 8601 format (e.g., '2023-10-01T10:00:00Z').
   * @default null
   */
  publishOn: string | null;
  /**
   * Title
   * @description Title of the new collection (must be non-empty).
   */
  title?: string;
};

/**
 * Type of MEM's MEM_CREATE_COLLECTION tool output.
 */
type MEM_CREATE_COLLECTION_OUTPUT = {
  /** Data */
  data?: {
      /**
       * Content
       * @description Content/body of the collection.
       * @default null
       */
      content: string | null;
      /**
       * Created At
       * @description ISO 8601 creation timestamp.
       */
      createdAt: string;
      /**
       * Id
       * @description Unique identifier for the collection.
       */
      id: string;
      /**
       * Is Read Only
       * @description Indicates if the collection is read-only.
       */
      isReadOnly: boolean;
      /**
       * Parent Id
       * @description ID of parent collection, if applicable.
       * @default null
       */
      parentId: string | null;
      /**
       * Publish On
       * @description Scheduled publish date, if set.
       * @default null
       */
      publishOn: string | null;
      /**
       * Title
       * @description Title of the collection.
       */
      title: string;
      /**
       * Updated At
       * @description ISO 8601 last update timestamp.
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
 * Type of MEM's MEM_CREATE_NOTE tool input.
 */
type MEM_CREATE_NOTE_INPUT = {
  /**
   * Content
   * @description Markdown-formatted content of the note
   */
  content?: string;
  /**
   * Created At
   * @description ISO 8601 timestamp for the note's creation time.
   * @default null
   */
  createdAt: string | null;
  /**
   * Is Read
   * @description Whether the note should be marked as read upon creation.
   * @default null
   */
  isRead: boolean | null;
  /**
   * Mem Id
   * @description Client-provided unique identifier for idempotency.
   * @default null
   */
  memId: string | null;
  /**
   * Source
   * @description Identifier for the source of the note (e.g., 'slack', 'bot').
   * @default null
   */
  source: string | null;
};

/**
 * Type of MEM's MEM_CREATE_NOTE tool output.
 */
type MEM_CREATE_NOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Mem Id
       * @description Unique identifier of the created note in Mem.
       */
      memId: string;
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
 * Type of MEM's MEM_DELETE_COLLECTION tool input.
 */
type MEM_DELETE_COLLECTION_INPUT = {
  /**
   * Collection Id
   * @description Unique identifier of the collection to delete
   */
  collection_id?: string;
};

/**
 * Type of MEM's MEM_DELETE_COLLECTION tool output.
 */
type MEM_DELETE_COLLECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the deletion was successful
       * @default true
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
 * Type of MEM's MEM_DELETE_NOTE tool input.
 */
type MEM_DELETE_NOTE_INPUT = {
  /**
   * Note Id
   * @description Unique identifier of the note to delete
   */
  note_id?: string;
};

/**
 * Type of MEM's MEM_DELETE_NOTE tool output.
 */
type MEM_DELETE_NOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status Code
       * @description HTTP status code returned by the API (204 on success)
       */
      status_code: number;
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
 * Type of MEM's MEM_READ_NOTE tool input.
 */
type MEM_READ_NOTE_INPUT = {
  /**
   * Note Id
   * @description Unique identifier of the note to retrieve
   */
  note_id?: string;
};

/**
 * Type of MEM's MEM_READ_NOTE tool output.
 */
type MEM_READ_NOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description Unique identifier of the note
       */
      _id: string;
      /**
       * Content
       * @description Markdown content of the note
       */
      content: string;
      /**
       * Created At
       * Format: date-time
       * @description ISO date-time when the note was created
       */
      createdAt: string;
      /**
       * Full Document
       * @description Complete note payload, may include extra fields
       * @default null
       */
      fullDocument: {
          [key: string]: unknown;
      } | null;
      /**
       * NoteSource
       * @description Metadata on how this note was created
       * @default null
       */
      source: {
          /**
           * Details
           * @description Additional source details, if available
           * @default null
           */
          details: {
              [key: string]: unknown;
          } | null;
          /**
           * Type
           * @description Type of source that created the note
           * @default null
           */
          type: string | null;
      } | null;
      /**
       * Updated At
       * Format: date-time
       * @description ISO date-time when the note was last updated
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
 * Type map of all available tool input types for toolkit "MEM".
 */
export type MEM_TOOL_INPUTS = {
  CREATE_COLLECTION: MEM_CREATE_COLLECTION_INPUT
  CREATE_NOTE: MEM_CREATE_NOTE_INPUT
  DELETE_COLLECTION: MEM_DELETE_COLLECTION_INPUT
  DELETE_NOTE: MEM_DELETE_NOTE_INPUT
  READ_NOTE: MEM_READ_NOTE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MEM".
 */
export type MEM_TOOL_OUTPUTS = {
  CREATE_COLLECTION: MEM_CREATE_COLLECTION_OUTPUT
  CREATE_NOTE: MEM_CREATE_NOTE_OUTPUT
  DELETE_COLLECTION: MEM_DELETE_COLLECTION_OUTPUT
  DELETE_NOTE: MEM_DELETE_NOTE_OUTPUT
  READ_NOTE: MEM_READ_NOTE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MEM toolkit.
 */
export const MEM = {
  slug: "mem",
  tools: {
    /**
     * Tool to create a new collection in mem. use when you want to group related notes into a dedicated collection after confirming the title.
     */
    CREATE_COLLECTION: "MEM_CREATE_COLLECTION",
    /**
     * Tool to create a new note in mem. use when you have note content and optional metadata ready to be saved. supports idempotent creation via memid.
     */
    CREATE_NOTE: "MEM_CREATE_NOTE",
    /**
     * Tool to delete a mem collection. use after confirming the collection id you wish to remove.
     */
    DELETE_COLLECTION: "MEM_DELETE_COLLECTION",
    /**
     * Tool to delete a specific note. use when you need to remove a note by its unique identifier after confirming the note id.
     */
    DELETE_NOTE: "MEM_DELETE_NOTE",
    /**
     * Tool to retrieve the content and metadata of a mem note. use after confirming you have the note's id.
     */
    READ_NOTE: "MEM_READ_NOTE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MEM".
 */
export type MEM_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MEM".
 */
export type MEM_TRIGGER_EVENTS = {}
