// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CHATBOTKIT's CHATBOTKIT_COMPLETE_CONVERSATION tool input.
 */
type CHATBOTKIT_COMPLETE_CONVERSATION_INPUT = {
  /**
   * Accept
   * @description Optional response format header value; set to 'application/jsonl' to enable streaming responses
   * @default null
   * @enum {string|null}
   */
  accept: "application/json" | "application/jsonl" | null;
  /**
   * Conversation Id
   * @description The unique identifier of the conversation
   */
  conversation_id?: string;
  /**
   * Text
   * @description The user's input message to send to the conversation
   */
  text?: string;
};

/**
 * Type of CHATBOTKIT's CHATBOTKIT_COMPLETE_CONVERSATION tool output.
 */
type CHATBOTKIT_COMPLETE_CONVERSATION_OUTPUT = {
  /**
   * Data
   * @description Contains the AI's response data
   */
  data?: {
      /**
       * Message
       * @description The AI's reply to the input message
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
   * Success
   * @description Indicates if the request was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CHATBOTKIT's CHATBOTKIT_CREATE_INTEGRATION tool input.
 */
type CHATBOTKIT_CREATE_INTEGRATION_INPUT = {
  /**
   * Bot Id
   * @description ID of the bot to attach the integration.
   */
  botId?: string;
  /**
   * Description
   * @description Optional description of the integration.
   * @default null
   */
  description: string | null;
  /**
   * Email
   * @description Email address for the support integration channel.
   */
  email?: string;
  /**
   * Meta
   * @description Optional metadata for the integration.
   * @default null
   */
  meta: {
      [key: string]: unknown;
  } | null;
  /**
   * Name
   * @description Name for the integration.
   */
  name?: string;
};

/**
 * Type of CHATBOTKIT's CHATBOTKIT_CREATE_INTEGRATION tool output.
 */
type CHATBOTKIT_CREATE_INTEGRATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the created integration.
       */
      id: string;
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
 * Type of CHATBOTKIT's CHATBOTKIT_CREATE_SKILLSET tool input.
 */
type CHATBOTKIT_CREATE_SKILLSET_INPUT = {
  /**
   * Data
   * @description Optional data for the skillset
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Description
   * @description Optional description for the skillset
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Name of the new skillset
   */
  name?: string;
};

/**
 * Type of CHATBOTKIT's CHATBOTKIT_CREATE_SKILLSET tool output.
 */
type CHATBOTKIT_CREATE_SKILLSET_OUTPUT = {
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
       * @description Description of the created skillset
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier for the created skillset
       */
      id: string;
      /**
       * Name
       * @description Name of the created skillset
       */
      name: string;
      /**
       * Skills
       * @description List of skills included in the skillset
       */
      skills: {
          /**
           * Config
           * @description Optional configuration for the skill
           * @default null
           */
          config: {
              [key: string]: unknown;
          } | null;
          /**
           * Id
           * @description Identifier of the skill
           */
          id: string;
      }[];
      /**
       * Updated At
       * @description Timestamp of last update in ISO 8601 format
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
 * Type of CHATBOTKIT's CHATBOTKIT_LIST_BOTS tool input.
 */
type CHATBOTKIT_LIST_BOTS_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor. Provide to retrieve the next page of results.
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Maximum number of bots to return in one page.
   * @default null
   */
  limit: number | null;
};

/**
 * Type of CHATBOTKIT's CHATBOTKIT_LIST_BOTS tool output.
 */
type CHATBOTKIT_LIST_BOTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bots
       * @description List of bot objects for the current page.
       */
      bots: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the bot was created
           */
          created_at: string;
          /**
           * Description
           * @description Optional human-readable description of the bot
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the bot
           */
          id: string;
          /**
           * Metadata
           * @description Optional metadata key/value pairs for the bot
           * @default null
           */
          metadata: {
              [key: string]: unknown;
          } | null;
          /**
           * Name
           * @description Name of the bot
           */
          name: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the bot was last updated
           * @default null
           */
          updated_at: string | null;
      }[];
      /**
       * Next Cursor
       * @description Cursor to use for fetching the next page of results, if available.
       * @default null
       */
      next_cursor: string | null;
      /**
       * Total
       * @description Total number of bots available (if provided by the API).
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
 * Type of CHATBOTKIT's CHATBOTKIT_LIST_CONVERSATIONS tool input.
 */
type CHATBOTKIT_LIST_CONVERSATIONS_INPUT = {
  /**
   * Accept
   * @description Response format header; set to 'application/jsonl' for streaming JSON Lines.
   * @default null
   * @enum {string|null}
   */
  accept: "application/json" | "application/jsonl" | null;
  /**
   * Cursor
   * @description Pagination cursor; the ID of the last item from the previous page.
   * @default null
   */
  cursor: string | null;
  /**
   * Order
   * @description Sort order of returned items: 'asc' or 'desc'.
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Take
   * @description Number of items to retrieve; must be ≥ 1.
   * @default null
   */
  take: number | null;
};

/**
 * Type of CHATBOTKIT's CHATBOTKIT_LIST_CONVERSATIONS tool output.
 */
type CHATBOTKIT_LIST_CONVERSATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of conversation objects.
       */
      items: {
          /**
           * Bot Id
           * @description ID of the associated bot.
           */
          botId: string;
          /**
           * Contact Id
           * @description ID of the associated contact.
           */
          contactId: string;
          /**
           * Created At
           * @description Timestamp when the conversation was created.
           */
          createdAt: number;
          /**
           * Description
           * @description Description of the conversation.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the conversation.
           */
          id: string;
          /**
           * Meta
           * @description Metadata associated with the conversation.
           */
          meta?: {
              [key: string]: unknown;
          };
          /**
           * Name
           * @description Name of the conversation.
           */
          name: string;
          /**
           * Updated At
           * @description Timestamp when the conversation was last updated.
           */
          updatedAt: number;
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
 * Type of CHATBOTKIT's CHATBOTKIT_LIST_CONVERSATION_MESSAGES tool input.
 */
type CHATBOTKIT_LIST_CONVERSATION_MESSAGES_INPUT = {
  /**
   * Conversation Id
   * @description Unique identifier of the conversation whose messages are to be listed
   */
  conversationId?: string;
  /**
   * Cursor
   * @description Pagination cursor to retrieve the next page of results
   * @default null
   */
  cursor: string | null;
  /**
   * Order
   * @description Sort order of returned messages: 'asc' or 'desc'.
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Take
   * @description Number of messages to retrieve; must be at least 1
   * @default null
   */
  take: number | null;
};

/**
 * Type of CHATBOTKIT's CHATBOTKIT_LIST_CONVERSATION_MESSAGES tool output.
 */
type CHATBOTKIT_LIST_CONVERSATION_MESSAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of messages in the conversation
       */
      items: {
          /**
           * Attachments
           * @description List of attachments associated with the message, if any
           */
          attachments?: {
              [key: string]: unknown;
          }[];
          /**
           * Content
           * @description Content of the message
           */
          content: string;
          /**
           * Conversation Id
           * @description Identifier of the conversation to which this message belongs
           */
          conversation_id: string;
          /**
           * Id
           * @description Unique identifier of the message
           */
          id: string;
          /**
           * Metadata
           * @description Additional metadata related to the message
           */
          metadata?: {
              [key: string]: unknown;
          };
          /**
           * Sender Id
           * @description Identifier of the sender of the message
           */
          sender_id: string;
          /**
           * Timestamp
           * @description ISO 8601 timestamp when the message was created
           */
          timestamp: string;
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
 * Type of CHATBOTKIT's CHATBOTKIT_LIST_DATASETS tool input.
 */
type CHATBOTKIT_LIST_DATASETS_INPUT = {
  /**
   * Limit
   * @description Number of datasets per page (must be between 1 and 100)
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination (must be >= 1)
   * @default null
   */
  page: number | null;
};

/**
 * Type of CHATBOTKIT's CHATBOTKIT_LIST_DATASETS tool output.
 */
type CHATBOTKIT_LIST_DATASETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Datasets
       * @description List of dataset objects on this page
       */
      datasets: {
          /**
           * Created At
           * @description ISO-8601 timestamp when the dataset was created
           */
          createdAt: string;
          /**
           * Id
           * @description Unique identifier for the dataset
           */
          id: string;
          /**
           * Name
           * @description Human-readable name of the dataset
           */
          name: string;
          /**
           * Updated At
           * @description ISO-8601 timestamp when the dataset was last updated
           */
          updatedAt: string;
      }[];
      /**
       * Limit
       * @description Number of datasets returned per page
       */
      limit: number;
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Total
       * @description Total number of datasets available
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
 * Type of CHATBOTKIT's CHATBOTKIT_LIST_INTEGRATIONS tool input.
 */
type CHATBOTKIT_LIST_INTEGRATIONS_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor. Provide to retrieve the next page of results.
   * @default null
   */
  cursor: string | null;
  /**
   * Order
   * @description Order of the returned items ('asc' or 'desc').
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Take
   * @description Number of integrations to return in one page.
   * @default null
   */
  take: number | null;
};

/**
 * Type of CHATBOTKIT's CHATBOTKIT_LIST_INTEGRATIONS tool output.
 */
type CHATBOTKIT_LIST_INTEGRATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of integration objects for the current page.
       */
      items: {
          /**
           * Authenticate
           * @description Indicates if authentication is required for the integration.
           */
          authenticate: boolean;
          /**
           * Bot Id
           * @description ID of the associated bot.
           */
          botId: string;
          /**
           * Created At
           * @description Timestamp when the integration was created.
           */
          createdAt: number;
          /**
           * Description
           * @description Human-readable description of the integration.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the integration.
           */
          id: string;
          /**
           * Meta
           * @description Metadata associated with the integration.
           * @default null
           */
          meta: {
              [key: string]: unknown;
          } | null;
          /**
           * Name
           * @description Name of the integration.
           */
          name: string;
          /**
           * Secret
           * @description Secret key associated with the integration.
           * @default null
           */
          secret: string | null;
          /**
           * Session Duration
           * @description Session duration in seconds.
           * @default null
           */
          sessionDuration: number | null;
          /**
           * Updated At
           * @description Timestamp when the integration was last updated.
           */
          updatedAt: number;
      }[];
      /**
       * Next Cursor
       * @description Cursor to use for fetching the next page of results, if available.
       * @default null
       */
      nextCursor: string | null;
      /**
       * Total
       * @description Total number of integrations available (if provided by the API).
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
 * Type of CHATBOTKIT's CHATBOTKIT_LIST_PARTNERS tool input.
 */
type CHATBOTKIT_LIST_PARTNERS_INPUT = object;

/**
 * Type of CHATBOTKIT's CHATBOTKIT_LIST_PARTNERS tool output.
 */
type CHATBOTKIT_LIST_PARTNERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Partners
       * @description List of partner account objects.
       */
      partners: {
          /**
           * Id
           * @description Unique identifier of the partner account
           */
          id: string;
          /**
           * Name
           * @description Name of the partner account
           */
          name: string;
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
 * Type of CHATBOTKIT's CHATBOTKIT_LIST_SKILLSETS tool input.
 */
type CHATBOTKIT_LIST_SKILLSETS_INPUT = object;

/**
 * Type of CHATBOTKIT's CHATBOTKIT_LIST_SKILLSETS tool output.
 */
type CHATBOTKIT_LIST_SKILLSETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Skillsets
       * @description List of all skillsets available
       */
      skillsets: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the skillset was created
           */
          createdAt: string;
          /**
           * Description
           * @description Description of the skillset
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the skillset
           */
          id: string;
          /**
           * Name
           * @description Name of the skillset
           */
          name: string;
          /**
           * Skills
           * @description List of skills included in the skillset
           */
          skills: {
              /**
               * Config
               * @description Optional configuration for the skill
               * @default null
               */
              config: {
                  [key: string]: unknown;
              } | null;
              /**
               * Id
               * @description Identifier of the skill
               */
              id: string;
          }[];
          /**
           * Updated At
           * @description ISO 8601 timestamp when the skillset was last updated
           */
          updatedAt: string;
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
 * Type of CHATBOTKIT's CHATBOTKIT_LIST_TOKENS tool input.
 */
type CHATBOTKIT_LIST_TOKENS_INPUT = object;

/**
 * Type of CHATBOTKIT's CHATBOTKIT_LIST_TOKENS tool output.
 */
type CHATBOTKIT_LIST_TOKENS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tokens
       * @description List of API tokens associated with the account.
       */
      tokens: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the token was created.
           */
          createdAt: string;
          /**
           * Id
           * @description Unique identifier of the API token.
           */
          id: string;
          /**
           * Last Used At
           * @description ISO 8601 timestamp when the token was last used, or null if never used.
           * @default null
           */
          lastUsedAt: string | null;
          /**
           * Name
           * @description Name assigned to the token.
           */
          name: string;
          /**
           * Scopes
           * @description List of scopes granted to the token.
           */
          scopes: string[];
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
 * Type map of all available tool input types for toolkit "CHATBOTKIT".
 */
export type CHATBOTKIT_TOOL_INPUTS = {
  COMPLETE_CONVERSATION: CHATBOTKIT_COMPLETE_CONVERSATION_INPUT
  CREATE_INTEGRATION: CHATBOTKIT_CREATE_INTEGRATION_INPUT
  CREATE_SKILLSET: CHATBOTKIT_CREATE_SKILLSET_INPUT
  LIST_BOTS: CHATBOTKIT_LIST_BOTS_INPUT
  LIST_CONVERSATIONS: CHATBOTKIT_LIST_CONVERSATIONS_INPUT
  LIST_CONVERSATION_MESSAGES: CHATBOTKIT_LIST_CONVERSATION_MESSAGES_INPUT
  LIST_DATASETS: CHATBOTKIT_LIST_DATASETS_INPUT
  LIST_INTEGRATIONS: CHATBOTKIT_LIST_INTEGRATIONS_INPUT
  LIST_PARTNERS: CHATBOTKIT_LIST_PARTNERS_INPUT
  LIST_SKILLSETS: CHATBOTKIT_LIST_SKILLSETS_INPUT
  LIST_TOKENS: CHATBOTKIT_LIST_TOKENS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CHATBOTKIT".
 */
export type CHATBOTKIT_TOOL_OUTPUTS = {
  COMPLETE_CONVERSATION: CHATBOTKIT_COMPLETE_CONVERSATION_OUTPUT
  CREATE_INTEGRATION: CHATBOTKIT_CREATE_INTEGRATION_OUTPUT
  CREATE_SKILLSET: CHATBOTKIT_CREATE_SKILLSET_OUTPUT
  LIST_BOTS: CHATBOTKIT_LIST_BOTS_OUTPUT
  LIST_CONVERSATIONS: CHATBOTKIT_LIST_CONVERSATIONS_OUTPUT
  LIST_CONVERSATION_MESSAGES: CHATBOTKIT_LIST_CONVERSATION_MESSAGES_OUTPUT
  LIST_DATASETS: CHATBOTKIT_LIST_DATASETS_OUTPUT
  LIST_INTEGRATIONS: CHATBOTKIT_LIST_INTEGRATIONS_OUTPUT
  LIST_PARTNERS: CHATBOTKIT_LIST_PARTNERS_OUTPUT
  LIST_SKILLSETS: CHATBOTKIT_LIST_SKILLSETS_OUTPUT
  LIST_TOKENS: CHATBOTKIT_LIST_TOKENS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CHATBOTKIT toolkit.
 */
export const CHATBOTKIT = {
  slug: "chatbotkit",
  tools: {
    /**
     * Tool to send a message to a conversation and receive the bot’s reply. use after retrieving or initiating a conversation id.
     */
    COMPLETE_CONVERSATION: "CHATBOTKIT_COMPLETE_CONVERSATION",
    /**
     * Tool to create a new integration. use when you need to set up a support channel integration for a bot after collecting the integration details.
     */
    CREATE_INTEGRATION: "CHATBOTKIT_CREATE_INTEGRATION",
    /**
     * Tool to create a new skillset. use when you need to group multiple skills into a single reusable unit.
     */
    CREATE_SKILLSET: "CHATBOTKIT_CREATE_SKILLSET",
    /**
     * Tool to retrieve a paginated list of all bots. use when you need to browse or manage multiple bots, and iterate pages via cursor.
     */
    LIST_BOTS: "CHATBOTKIT_LIST_BOTS",
    /**
     * Tool to retrieve a paginated list of conversations. use when you need to page through conversation history.
     */
    LIST_CONVERSATIONS: "CHATBOTKIT_LIST_CONVERSATIONS",
    /**
     * Tool to list messages in a conversation with pagination. use after obtaining a conversation id to fetch messages page by page.
     */
    LIST_CONVERSATION_MESSAGES: "CHATBOTKIT_LIST_CONVERSATION_MESSAGES",
    /**
     * Tool to list datasets. use when you need to browse or paginate through available datasets.
     */
    LIST_DATASETS: "CHATBOTKIT_LIST_DATASETS",
    /**
     * Tool to retrieve a list of trigger integrations. use when you need to browse or manage configured trigger integrations and iterate pages via cursor.
     */
    LIST_INTEGRATIONS: "CHATBOTKIT_LIST_INTEGRATIONS",
    /**
     * Tool to retrieve a list of all partner accounts associated with the main account. use when you need to view or manage all sub-accounts under your partner umbrella.
     */
    LIST_PARTNERS: "CHATBOTKIT_LIST_PARTNERS",
    /**
     * Tool to retrieve a list of all skillsets available in the system. use when you need to enumerate existing skillsets.
     */
    LIST_SKILLSETS: "CHATBOTKIT_LIST_SKILLSETS",
    /**
     * Tool to retrieve a list of all api tokens. use when you need to audit or manage existing tokens.
     */
    LIST_TOKENS: "CHATBOTKIT_LIST_TOKENS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CHATBOTKIT".
 */
export type CHATBOTKIT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CHATBOTKIT".
 */
export type CHATBOTKIT_TRIGGER_EVENTS = {}
