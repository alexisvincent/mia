// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of V0's V0_V0_CHAT_COMPLETIONS tool input.
 */
type V0_V0_CHAT_COMPLETIONS_INPUT = {
  /**
   * Messages
   * @description List of messages describing the conversation so far
   */
  messages?: {
      /**
       * Content
       * @description The message content, either a string or list of content blocks
       */
      content: string | null;
      /**
       * Name
       * @description Optional name of the message sender, for example a user name or function name
       * @default null
       */
      name: string | null;
      /**
       * Role
       * @description The role of the message sender
       * @enum {string}
       */
      role: "user" | "assistant" | "system";
  }[];
  /**
   * Model
   * @description Model to use for generating the chat completion
   */
  model?: string;
  /**
   * Stream
   * @description If true, returns a stream of completion chunks. Streaming is not supported by this action wrapper.
   * @default false
   */
  stream: boolean | null;
  /**
   * Tool Choice
   * @description Identifier or definition of the tool to call, if tools are provided
   * @default null
   */
  tool_choice: string | null;
  /**
   * Tools
   * @description Optional list of tool definitions (functions) available to the model
   * @default null
   */
  tools: {
      [key: string]: unknown;
  }[] | null;
};

/**
 * Type of V0's V0_V0_CHAT_COMPLETIONS tool output.
 */
type V0_V0_CHAT_COMPLETIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Choices
       * @description List of generated completion choices
       */
      choices: {
          /**
           * Finish Reason
           * @description The reason the completion finished: 'stop', 'length', or other value
           * @default null
           */
          finish_reason: string | null;
          /**
           * Index
           * @description Position of this completion in the returned list
           */
          index: number;
          /**
           * Message
           * @description The generated message content and role
           */
          message: {
              /**
               * Content
               * @description The message content, either a string or list of content blocks
               */
              content: string | null;
              /**
               * Name
               * @description Optional name of the message sender, for example a user name or function name
               * @default null
               */
              name: string | null;
              /**
               * Role
               * @description The role of the message sender
               * @enum {string}
               */
              role: "user" | "assistant" | "system";
          };
      }[];
      /**
       * Created
       * @description Unix timestamp (in seconds) when the completion was created
       */
      created: number;
      /**
       * Id
       * @description Unique identifier for this completion
       */
      id: string;
      /**
       * Model
       * @description The model used to generate the completion
       */
      model: string;
      /**
       * Object
       * @description Type of the returned object, e.g., 'chat.completion'
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
 * Type of V0's V0_V0_FIND_CHATS tool input.
 */
type V0_V0_FIND_CHATS_INPUT = {
  /**
   * Is Favorite
   * @description If true, only favorite chats are returned; omit to fetch all
   * @default null
   */
  isFavorite: boolean | null;
  /**
   * Limit
   * @description Maximum number of chats to return; must be between 0 and 60
   * @default 60
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of chats to skip before returning results; must be non-negative
   * @default 0
   */
  offset: number | null;
};

/**
 * Type of V0's V0_V0_FIND_CHATS tool output.
 */
type V0_V0_FIND_CHATS_OUTPUT = {
  /**
   * Data
   * @description Array of chat objects
   */
  data?: {
      /**
       * Author Id
       * @description ID of the user who created the chat
       */
      authorId: string;
      /**
       * Favorite
       * @description Whether the chat is marked as favorite
       */
      favorite: boolean;
      /**
       * Id
       * @description Chat ID
       */
      id: string;
      /** Latest Version */
      latestVersion: {
          /**
           * Id
           * @description Version ID
           */
          id: string;
          /**
           * Object
           * @description Constant: 'version'
           * @constant
           */
          object: "version";
          /**
           * Status
           * @description Status of this version, e.g. 'pending'
           */
          status: string;
      };
      /**
       * Name
       * @description Internal name of the chat
       */
      name: string;
      /**
       * Object
       * @description Constant: 'chat'
       * @constant
       */
      object: "chat";
      /**
       * Privacy
       * @description Privacy level, e.g. 'public'
       */
      privacy: string;
      /**
       * Shareable
       * @description Whether the chat can be shared
       */
      shareable: boolean;
      /**
       * Title
       * @description User-facing title of the chat
       */
      title: string;
      /**
       * Updated At
       * @description Timestamp of last update, in ISO 8601 format
       */
      updatedAt: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Object
   * @description Constant: 'list'
   * @constant
   */
  object?: "list";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of V0's V0_V0_FIND_PROJECTS tool input.
 */
type V0_V0_FIND_PROJECTS_INPUT = {
  /**
   * After
   * @description Cursor for pagination to return items after this cursor
   * @default null
   */
  after: string | null;
  /**
   * Limit
   * @description Maximum number of projects to return; must be >= 1
   * @default null
   */
  limit: number | null;
};

/**
 * Type of V0's V0_V0_FIND_PROJECTS tool output.
 */
type V0_V0_FIND_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description List of project objects returned by the API
   */
  data?: {
      /**
       * Id
       * @description Unique identifier for the project
       */
      id: string;
      /**
       * Name
       * @description Name of the project
       */
      name: string;
      /**
       * Object
       * @description Literal 'project' denoting the object type
       */
      object: string;
      /**
       * Vercel Project Id
       * @description Associated Vercel project ID
       */
      vercelProjectId: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Object
   * @description Literal 'list' denoting the list object type
   */
  object?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "V0".
 */
export type V0_TOOL_INPUTS = {
  V0_CHAT_COMPLETIONS: V0_V0_CHAT_COMPLETIONS_INPUT
  V0_FIND_CHATS: V0_V0_FIND_CHATS_INPUT
  V0_FIND_PROJECTS: V0_V0_FIND_PROJECTS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "V0".
 */
export type V0_TOOL_OUTPUTS = {
  V0_CHAT_COMPLETIONS: V0_V0_CHAT_COMPLETIONS_OUTPUT
  V0_FIND_CHATS: V0_V0_FIND_CHATS_OUTPUT
  V0_FIND_PROJECTS: V0_V0_FIND_PROJECTS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's V0 toolkit.
 */
export const V0 = {
  slug: "v0",
  tools: {
    /**
     * Tool to generate a chat model response given a list of messages. use when you need ai-powered conversational replies via the v0 api.
     */
    V0_CHAT_COMPLETIONS: "V0_V0_CHAT_COMPLETIONS",
    /**
     * Tool to retrieve a list of chats. use when you need to list user chats with pagination and optional favorite filtering after authentication.
     */
    V0_FIND_CHATS: "V0_V0_FIND_CHATS",
    /**
     * Tool to retrieve a list of projects associated with the authenticated user. use after obtaining a valid api key.
     */
    V0_FIND_PROJECTS: "V0_V0_FIND_PROJECTS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "V0".
 */
export type V0_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "V0".
 */
export type V0_TRIGGER_EVENTS = {}
