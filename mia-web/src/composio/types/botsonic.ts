// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BOTSONIC's BOTSONIC_BULK_UPLOAD_URLS tool input.
 */
type BOTSONIC_BULK_UPLOAD_URLS_INPUT = {
  /**
   * Bot Id
   * @description Identifier of the bot to upload URLs for.
   */
  bot_id?: string;
  /**
   * Urls
   * @description List of valid URLs to be upserted into the bot's data source.
   */
  urls?: string[];
};

/**
 * Type of BOTSONIC's BOTSONIC_BULK_UPLOAD_URLS tool output.
 */
type BOTSONIC_BULK_UPLOAD_URLS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Failed Urls
       * @description List of URLs that failed validation or upload.
       * @default null
       */
      failedUrls: string[] | null;
      /**
       * Message
       * @description API response message providing additional context.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the bulk upload operation succeeded.
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
 * Type of BOTSONIC's BOTSONIC_DELETE_BOT_DATA tool input.
 */
type BOTSONIC_DELETE_BOT_DATA_INPUT = {
  /**
   * Data Id
   * @description Unique identifier of the bot data to delete.
   */
  data_id?: string;
};

/**
 * Type of BOTSONIC's BOTSONIC_DELETE_BOT_DATA tool output.
 */
type BOTSONIC_DELETE_BOT_DATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message indicating successful deletion.
       * @default null
       */
      message: string | null;
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
 * Type of BOTSONIC's BOTSONIC_DELETE_STARTER_QUESTION tool input.
 */
type BOTSONIC_DELETE_STARTER_QUESTION_INPUT = {
  /**
   * Id
   * @description Unique identifier of the starter question to delete.
   */
  id?: string;
};

/**
 * Type of BOTSONIC's BOTSONIC_DELETE_STARTER_QUESTION tool output.
 */
type BOTSONIC_DELETE_STARTER_QUESTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Status or error message returned by the API.
       */
      message: string;
      /**
       * Success
       * @description Indicates if the deletion was successful.
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
 * Type of BOTSONIC's BOTSONIC_DELETE_UPLOADED_FILE tool input.
 */
type BOTSONIC_DELETE_UPLOADED_FILE_INPUT = {
  /**
   * File Id
   * @description The unique identifier of the uploaded file to delete.
   */
  file_id?: string;
};

/**
 * Type of BOTSONIC's BOTSONIC_DELETE_UPLOADED_FILE tool output.
 */
type BOTSONIC_DELETE_UPLOADED_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message indicating the file has been deleted.
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
 * Type of BOTSONIC's BOTSONIC_GET_ALL_BOTS tool input.
 */
type BOTSONIC_GET_ALL_BOTS_INPUT = object;

/**
 * Type of BOTSONIC's BOTSONIC_GET_ALL_BOTS tool output.
 */
type BOTSONIC_GET_ALL_BOTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bots
       * @description List of bots associated with the account.
       */
      bots: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the bot was created.
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the bot.
           */
          id: string;
          /**
           * Name
           * @description Name of the bot.
           */
          name: string;
          /**
           * Status
           * @description Current status of the bot.
           */
          status: string;
      }[];
      /**
       * Total
       * @description Total number of bots returned.
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
 * Type of BOTSONIC's BOTSONIC_GET_ALL_BOT_DATA tool input.
 */
type BOTSONIC_GET_ALL_BOT_DATA_INPUT = {
  /**
   * Page
   * @description Page number, minimum 1
   * @default 1
   */
  page: number | null;
  /**
   * Search Query
   * @description Search for data matching a particular query
   * @default null
   */
  search_query: string | null;
  /**
   * Size
   * @description Page size between 1 and 100
   * @default 50
   */
  size: number | null;
  /**
   * Sort By
   * @description Attribute to sort by
   * @default null
   */
  sort_by: string | null;
  /**
   * Sort Order
   * @description Sort order for results
   * @default null
   * @enum {string|null}
   */
  sort_order: "asc" | "desc" | null;
};

/**
 * Type of BOTSONIC's BOTSONIC_GET_ALL_BOT_DATA tool output.
 */
type BOTSONIC_GET_ALL_BOT_DATA_OUTPUT = {
  /**
   * Data
   * @description List of bot data items
   */
  data?: {
      /**
       * Bot Id
       * @description Identifier of the associated bot
       */
      bot_id: string;
      /**
       * Characters
       * @description Character count of the resource content
       * @default null
       */
      characters: number | null;
      /**
       * Container Id
       * @description Container identifier, if any
       * @default null
       */
      container_id: string | null;
      /**
       * Created At
       * @description Creation timestamp of the data record
       * @default null
       */
      created_at: string | null;
      /**
       * Error Reason
       * @description Reason for error if status indicates error
       * @default null
       */
      error_reason: string | null;
      /**
       * File Type
       * @description Type of file or resource
       * @default null
       */
      file_type: string | null;
      /**
       * Id
       * @description Unique identifier of the data record
       */
      id: string;
      /**
       * Integration Id
       * @description Integration identifier, if any
       * @default null
       */
      integration_id: string | null;
      /**
       * Is Added Via Ability
       * @description Flag indicating addition via ability feature
       * @default null
       */
      is_added_via_ability: boolean | null;
      /**
       * Is Deleted
       * @description Flag indicating deletion status
       * @default null
       */
      is_deleted: boolean | null;
      /**
       * Is In Waiting Room
       * @description Flag indicating waiting room status
       * @default null
       */
      is_in_waiting_room: boolean | null;
      /**
       * Is Paused
       * @description Flag indicating if processing is paused
       * @default null
       */
      is_paused: boolean | null;
      /**
       * Is Private
       * @description Whether the data is private
       * @default null
       */
      is_private: boolean | null;
      /**
       * Last Trained At
       * @description Timestamp of last training on this data
       * @default null
       */
      last_trained_at: string | null;
      /**
       * Migration Status
       * @description Status of migration process, if any
       * @default null
       */
      migration_status: string | null;
      /**
       * Resync Job Id
       * @description Resync job identifier, if any
       * @default null
       */
      resync_job_id: string | null;
      /**
       * Sitemap Id
       * @description Identifier of related sitemap, if any
       * @default null
       */
      sitemap_id: string | null;
      /**
       * Status
       * @description Processing status of the data
       * @default null
       */
      status: string | null;
      /**
       * Storage Account Id
       * @description Storage account identifier, if any
       * @default null
       */
      storage_account_id: string | null;
      /**
       * Third Party Id
       * @description Third party source identifier, if any
       * @default null
       */
      third_party_id: string | null;
      /**
       * Title
       * @description Title or name of the data item
       * @default null
       */
      title: string | null;
      /**
       * Updated At
       * @description Last update timestamp of the data record
       * @default null
       */
      updated_at: string | null;
      /**
       * Url
       * @description URL of the resource, if applicable
       * @default null
       */
      url: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Additional status message from the API
   * @default null
   */
  message: string | null;
  /**
   * Page
   * @description Current page number of the paginated result
   * @default null
   */
  page: number | null;
  /**
   * Size
   * @description Size of each page in the paginated result
   * @default null
   */
  size: number | null;
  /**
   * Success
   * @description Indicates if the request was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of items available
   * @default null
   */
  total: number | null;
};

/**
 * Type of BOTSONIC's BOTSONIC_GET_ALL_CONVERSATIONS tool input.
 */
type BOTSONIC_GET_ALL_CONVERSATIONS_INPUT = {
  /**
   * Page
   * @description Page number, minimum 1
   * @default 1
   */
  page: number | null;
  /**
   * Size
   * @description Page size between 1 and 100
   * @default 50
   */
  size: number | null;
};

/**
 * Type of BOTSONIC's BOTSONIC_GET_ALL_CONVERSATIONS tool output.
 */
type BOTSONIC_GET_ALL_CONVERSATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Conversations
       * @description List of conversations for the bot
       */
      conversations: {
          /**
           * Chat Id
           * @description Unique identifier of the conversation chat
           */
          chat_id: string;
          /**
           * Created At
           * @description Timestamp when the conversation was started
           */
          created_at: string;
          /**
           * Updated At
           * @description Timestamp when the conversation was last updated
           * @default null
           */
          updated_at: string | null;
      }[];
      /**
       * Message
       * @description Additional status message from the API
       * @default null
       */
      message: string | null;
      /**
       * Page
       * @description Current page number of the paginated result
       * @default null
       */
      page: number | null;
      /**
       * Size
       * @description Size of each page in the paginated result
       * @default null
       */
      size: number | null;
      /**
       * Success
       * @description Indicates if the request was successful
       */
      success: boolean;
      /**
       * Total
       * @description Total number of items available
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
 * Type of BOTSONIC's BOTSONIC_GET_ALL_FAQS tool input.
 */
type BOTSONIC_GET_ALL_FAQS_INPUT = {
  /**
   * Page
   * @description Page number, minimum 1
   * @default 1
   */
  page: number | null;
  /**
   * Search Query
   * @description Search for FAQs matching a particular query
   * @default null
   */
  search_query: string | null;
  /**
   * Size
   * @description Page size between 1 and 100
   * @default 50
   */
  size: number | null;
  /**
   * Sort By
   * @description Attribute to sort by
   * @default null
   */
  sort_by: string | null;
  /**
   * Sort Order
   * @description Sort order for results
   * @default null
   * @enum {string|null}
   */
  sort_order: "asc" | "desc" | null;
};

/**
 * Type of BOTSONIC's BOTSONIC_GET_ALL_FAQS tool output.
 */
type BOTSONIC_GET_ALL_FAQS_OUTPUT = {
  /**
   * Data
   * @description List of FAQ entries
   */
  data?: {
      /**
       * Answer
       * @description The FAQ answer text
       */
      answer: string;
      /**
       * Bot Id
       * @description Identifier of the bot associated with the FAQ
       */
      bot_id: string;
      /**
       * Characters
       * @description Character count of the FAQ content
       * @default null
       */
      characters: number | null;
      /**
       * Created At
       * @description Timestamp when the FAQ was created
       */
      created_at: string;
      /**
       * Error Reason
       * @description Reason for error if status indicates error
       * @default null
       */
      error_reason: string | null;
      /**
       * Id
       * @description Unique identifier of the FAQ entry
       */
      id: string;
      /**
       * Migration Status
       * @description Status of migration process, if any
       * @default null
       */
      migration_status: string | null;
      /**
       * Question
       * @description The FAQ question text
       */
      question: string;
      /**
       * Status
       * @description Status of the FAQ entry
       * @default null
       */
      status: string | null;
      /**
       * Updated At
       * @description Timestamp when the FAQ was last updated
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
   * Message
   * @description Additional status message from the API
   * @default null
   */
  message: string | null;
  /**
   * Page
   * @description Current page number of the paginated result
   * @default null
   */
  page: number | null;
  /**
   * Size
   * @description Size of each page in the paginated result
   * @default null
   */
  size: number | null;
  /**
   * Success
   * @description Indicates if the request was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of items available
   * @default null
   */
  total: number | null;
};

/**
 * Type of BOTSONIC's BOTSONIC_GET_ALL_STARTER_QUESTIONS tool input.
 */
type BOTSONIC_GET_ALL_STARTER_QUESTIONS_INPUT = object;

/**
 * Type of BOTSONIC's BOTSONIC_GET_ALL_STARTER_QUESTIONS tool output.
 */
type BOTSONIC_GET_ALL_STARTER_QUESTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Starter Questions
       * @description List of starter questions associated with the bot.
       */
      starter_questions: {
          /**
           * Answer
           * @description Answer corresponding to the starter question.
           */
          answer: string;
          /**
           * Bot Id
           * @description Identifier of the bot this question belongs to.
           */
          bot_id: string;
          /**
           * Created At
           * @description ISO8601 timestamp when the starter question was created.
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier for the starter question.
           */
          id: string;
          /**
           * Order
           * @description Position of this question among starter questions.
           */
          order: number;
          /**
           * Question
           * @description The text of the starter question.
           */
          question: string;
          /**
           * Updated At
           * @description ISO8601 timestamp when the starter question was last updated.
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
 * Type of BOTSONIC's BOTSONIC_UPDATE_STARTER_QUESTION tool input.
 */
type BOTSONIC_UPDATE_STARTER_QUESTION_INPUT = {
  /**
   * Answer
   * @description Updated answer for the starter question.
   * @default null
   */
  answer: string | null;
  /**
   * Id
   * @description Unique identifier of the starter question to update.
   */
  id?: string;
  /**
   * Question
   * @description Updated text for the starter question.
   * @default null
   */
  question: string | null;
};

/**
 * Type of BOTSONIC's BOTSONIC_UPDATE_STARTER_QUESTION tool output.
 */
type BOTSONIC_UPDATE_STARTER_QUESTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Answer
       * @description Updated answer for the starter question.
       */
      answer: string;
      /**
       * Created At
       * @description ISO8601 timestamp when the starter question was created.
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the starter question.
       */
      id: string;
      /**
       * Question
       * @description Updated text of the starter question.
       */
      question: string;
      /**
       * Updated At
       * @description ISO8601 timestamp when the starter question was last updated.
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
 * Type map of all available tool input types for toolkit "BOTSONIC".
 */
export type BOTSONIC_TOOL_INPUTS = {
  BULK_UPLOAD_URLS: BOTSONIC_BULK_UPLOAD_URLS_INPUT
  DELETE_BOT_DATA: BOTSONIC_DELETE_BOT_DATA_INPUT
  DELETE_STARTER_QUESTION: BOTSONIC_DELETE_STARTER_QUESTION_INPUT
  DELETE_UPLOADED_FILE: BOTSONIC_DELETE_UPLOADED_FILE_INPUT
  GET_ALL_BOTS: BOTSONIC_GET_ALL_BOTS_INPUT
  GET_ALL_BOT_DATA: BOTSONIC_GET_ALL_BOT_DATA_INPUT
  GET_ALL_CONVERSATIONS: BOTSONIC_GET_ALL_CONVERSATIONS_INPUT
  GET_ALL_FAQS: BOTSONIC_GET_ALL_FAQS_INPUT
  GET_ALL_STARTER_QUESTIONS: BOTSONIC_GET_ALL_STARTER_QUESTIONS_INPUT
  UPDATE_STARTER_QUESTION: BOTSONIC_UPDATE_STARTER_QUESTION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BOTSONIC".
 */
export type BOTSONIC_TOOL_OUTPUTS = {
  BULK_UPLOAD_URLS: BOTSONIC_BULK_UPLOAD_URLS_OUTPUT
  DELETE_BOT_DATA: BOTSONIC_DELETE_BOT_DATA_OUTPUT
  DELETE_STARTER_QUESTION: BOTSONIC_DELETE_STARTER_QUESTION_OUTPUT
  DELETE_UPLOADED_FILE: BOTSONIC_DELETE_UPLOADED_FILE_OUTPUT
  GET_ALL_BOTS: BOTSONIC_GET_ALL_BOTS_OUTPUT
  GET_ALL_BOT_DATA: BOTSONIC_GET_ALL_BOT_DATA_OUTPUT
  GET_ALL_CONVERSATIONS: BOTSONIC_GET_ALL_CONVERSATIONS_OUTPUT
  GET_ALL_FAQS: BOTSONIC_GET_ALL_FAQS_OUTPUT
  GET_ALL_STARTER_QUESTIONS: BOTSONIC_GET_ALL_STARTER_QUESTIONS_OUTPUT
  UPDATE_STARTER_QUESTION: BOTSONIC_UPDATE_STARTER_QUESTION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BOTSONIC toolkit.
 */
export const BOTSONIC = {
  slug: "botsonic",
  tools: {
    /**
     * Tool to bulk upload urls for bot training. use when you need to upsert multiple document urls into a bot in one request.
     */
    BULK_UPLOAD_URLS: "BOTSONIC_BULK_UPLOAD_URLS",
    /**
     * Tool to delete specific bot data using its id. use when you need to remove outdated or irrelevant data after confirming the data identifier.
     */
    DELETE_BOT_DATA: "BOTSONIC_DELETE_BOT_DATA",
    /**
     * Tool to delete a specific starter question by its unique identifier. use after confirming the id of the starter question you want to remove.
     */
    DELETE_STARTER_QUESTION: "BOTSONIC_DELETE_STARTER_QUESTION",
    /**
     * Tool to delete a specific uploaded file by its id. use when you need to remove a file from the bot's data repository after confirming the file id.
     */
    DELETE_UPLOADED_FILE: "BOTSONIC_DELETE_UPLOADED_FILE",
    /**
     * Tool to retrieve all bots associated with the account. use when you need to list existing bots after authentication.
     */
    GET_ALL_BOTS: "BOTSONIC_GET_ALL_BOTS",
    /**
     * Tool to retrieve all data associated with the bot, including files and resources. use when you need a comprehensive export of bot assets for backup or inspection.
     */
    GET_ALL_BOT_DATA: "BOTSONIC_GET_ALL_BOT_DATA",
    /**
     * Tool to retrieve all conversations related to the bot. use after authentication when you need a paginated list of conversation threads for review or analytics.
     */
    GET_ALL_CONVERSATIONS: "BOTSONIC_GET_ALL_CONVERSATIONS",
    /**
     * Tool to retrieve all frequently asked questions associated with the bot. use after authenticating the bot and when you need to list or manage its faq entries.
     */
    GET_ALL_FAQS: "BOTSONIC_GET_ALL_FAQS",
    /**
     * Tool to retrieve all starter questions. use after authenticating when you need to list the bot’s opening prompts.
     */
    GET_ALL_STARTER_QUESTIONS: "BOTSONIC_GET_ALL_STARTER_QUESTIONS",
    /**
     * Tool to update an existing starter question by its unique identifier. use after confirming the id and desired updates.
     */
    UPDATE_STARTER_QUESTION: "BOTSONIC_UPDATE_STARTER_QUESTION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BOTSONIC".
 */
export type BOTSONIC_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BOTSONIC".
 */
export type BOTSONIC_TRIGGER_EVENTS = {}
