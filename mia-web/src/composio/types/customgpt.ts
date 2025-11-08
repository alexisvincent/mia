// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CUSTOMGPT's CUSTOMGPT_DELETE_PROJECT tool input.
 */
type CUSTOMGPT_DELETE_PROJECT_INPUT = {
  /**
   * Project Id
   * @description Unique ID of the agent (project) to delete
   */
  projectId?: string;
};

/**
 * Type of CUSTOMGPT's CUSTOMGPT_DELETE_PROJECT tool output.
 */
type CUSTOMGPT_DELETE_PROJECT_OUTPUT = {
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
 * Type of CUSTOMGPT's CUSTOMGPT_DELETE_PROJECT_LICENSE tool input.
 */
type CUSTOMGPT_DELETE_PROJECT_LICENSE_INPUT = {
  /**
   * License Id
   * @description Unique ID of the license to delete
   */
  licenseId?: string;
  /**
   * Project Id
   * @description Unique ID of the agent (project) that owns the license
   */
  projectId?: string;
};

/**
 * Type of CUSTOMGPT's CUSTOMGPT_DELETE_PROJECT_LICENSE tool output.
 */
type CUSTOMGPT_DELETE_PROJECT_LICENSE_OUTPUT = {
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
 * Type of CUSTOMGPT's CUSTOMGPT_GET_PROJECT_LICENSE tool input.
 */
type CUSTOMGPT_GET_PROJECT_LICENSE_INPUT = {
  /**
   * License Id
   * @description Unique identifier of the license to retrieve.
   */
  licenseId?: string;
  /**
   * Project Id
   * @description Unique identifier of the project to which the license belongs.
   */
  projectId?: string;
};

/**
 * Type of CUSTOMGPT's CUSTOMGPT_GET_PROJECT_LICENSE tool output.
 */
type CUSTOMGPT_GET_PROJECT_LICENSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the license was created.
       * @default null
       */
      createdAt: string | null;
      /**
       * Expires At
       * @description ISO 8601 timestamp when the license expires, if applicable.
       * @default null
       */
      expiresAt: string | null;
      /**
       * Id
       * @description Unique identifier of the license.
       * @default null
       */
      id: string | null;
      /**
       * Project Id
       * @description Identifier of the associated project.
       * @default null
       */
      projectId: string | null;
      /**
       * Status
       * @description Current status of the license (e.g., active, expired).
       * @default null
       */
      status: string | null;
      /**
       * Type
       * @description Type of the license.
       * @default null
       */
      type: string | null;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the license was last updated.
       * @default null
       */
      updatedAt: string | null;
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
 * Type of CUSTOMGPT's CUSTOMGPT_GET_PROJECT_SETTINGS tool input.
 */
type CUSTOMGPT_GET_PROJECT_SETTINGS_INPUT = {
  /**
   * Project Id
   * @description The unique ID of the agent/project whose settings to retrieve
   */
  projectId?: string;
};

/**
 * Type of CUSTOMGPT's CUSTOMGPT_GET_PROJECT_SETTINGS tool output.
 */
type CUSTOMGPT_GET_PROJECT_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
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
 * Type of CUSTOMGPT's CUSTOMGPT_GET_USAGE_LIMITS tool input.
 */
type CUSTOMGPT_GET_USAGE_LIMITS_INPUT = object;

/**
 * Type of CUSTOMGPT's CUSTOMGPT_GET_USAGE_LIMITS tool output.
 */
type CUSTOMGPT_GET_USAGE_LIMITS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Agents
       * @description Usage details for number of agents
       */
      agents: {
          /**
           * Limit
           * @description Maximum allowed amount of the resource
           */
          limit: number;
          /**
           * Used
           * @description Amount of the resource already used
           */
          used: number;
      };
      /**
       * Queries
       * @description Usage details for query count
       */
      queries: {
          /**
           * Limit
           * @description Maximum allowed amount of the resource
           */
          limit: number;
          /**
           * Used
           * @description Amount of the resource already used
           */
          used: number;
      };
      /**
       * Words
       * @description Usage details for word count
       */
      words: {
          /**
           * Limit
           * @description Maximum allowed amount of the resource
           */
          limit: number;
          /**
           * Used
           * @description Amount of the resource already used
           */
          used: number;
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
 * Type of CUSTOMGPT's CUSTOMGPT_GET_USER_PROFILE tool input.
 */
type CUSTOMGPT_GET_USER_PROFILE_INPUT = object;

/**
 * Type of CUSTOMGPT's CUSTOMGPT_GET_USER_PROFILE tool output.
 */
type CUSTOMGPT_GET_USER_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the user was created.
       * @default null
       */
      createdAt: string | null;
      /**
       * Email
       * @description Email address of the user.
       */
      email: string;
      /**
       * Id
       * @description Unique identifier for the user.
       */
      id: string;
      /**
       * Name
       * @description Full name of the user.
       * @default null
       */
      name: string | null;
      /**
       * Role
       * @description Role of the user within the system.
       * @default null
       */
      role: string | null;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the user was last updated.
       * @default null
       */
      updatedAt: string | null;
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
 * Type of CUSTOMGPT's CUSTOMGPT_LIST_CONVERSATION_MESSAGES tool input.
 */
type CUSTOMGPT_LIST_CONVERSATION_MESSAGES_INPUT = {
  /**
   * Project Id
   * @description The unique identifier of the CustomGPT project (agent).
   */
  projectId?: string;
  /**
   * Session Id
   * @description The unique identifier of the conversation session.
   */
  sessionId?: string;
};

/**
 * Type of CUSTOMGPT's CUSTOMGPT_LIST_CONVERSATION_MESSAGES tool output.
 */
type CUSTOMGPT_LIST_CONVERSATION_MESSAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Messages
       * @description List of messages exchanged in the conversation.
       */
      messages: {
          /**
           * Citations
           * @description List of citation references for the message.
           * @default null
           */
          citations: string[] | null;
          /**
           * Created At
           * @description ISO 8601 datetime when the message was created.
           */
          createdAt: string;
          /**
           * Id
           * @description Unique identifier of the message.
           */
          id: string;
          /**
           * MessageMetadata
           * @description Metadata associated with a conversation message.
           * @default null
           */
          metadata: {
              /**
               * External Id
               * @description External identifier linked to the message.
               * @default null
               */
              externalId: string | null;
              /**
               * Request Source
               * @description Origin of the request (e.g., web, api).
               * @default null
               */
              requestSource: string | null;
              /**
               * User Agent
               * @description User agent string of the client that sent the message.
               * @default null
               */
              userAgent: string | null;
              /**
               * User Ip
               * @description IP address recorded when the message was sent.
               * @default null
               */
              userIp: string | null;
          } | null;
          /**
           * Openai Response
           * @description AI's response text.
           * @default null
           */
          openaiResponse: string | null;
          /**
           * Updated At
           * @description ISO 8601 datetime when the message was last updated.
           */
          updatedAt: string;
          /**
           * User Id
           * @description ID of the user who sent the message.
           * @default null
           */
          userId: string | null;
          /**
           * User Query
           * @description User's input text.
           * @default null
           */
          userQuery: string | null;
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
 * Type of CUSTOMGPT's CUSTOMGPT_LIST_PROJECTS tool input.
 */
type CUSTOMGPT_LIST_PROJECTS_INPUT = {
  /**
   * Page
   * @description Page number for pagination; must be ≥1. Default page size is 10; results sorted by creation date (newest first).
   * @default null
   */
  page: number | null;
};

/**
 * Type of CUSTOMGPT's CUSTOMGPT_LIST_PROJECTS tool output.
 */
type CUSTOMGPT_LIST_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 datetime when project was created.
       */
      created_at: string;
      /**
       * Description
       * @description Description of the project.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier for the project/agent.
       */
      id: string;
      /**
       * Name
       * @description Name of the project/agent.
       */
      name: string;
      /**
       * Project Type
       * @description Type of the project.
       * @default null
       */
      project_type: string | null;
      /**
       * Status
       * @description Status of the project.
       * @default null
       */
      status: string | null;
      /**
       * Updated At
       * @description ISO 8601 datetime when project was last updated.
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CUSTOMGPT's CUSTOMGPT_LIST_PROJECT_LICENSES tool input.
 */
type CUSTOMGPT_LIST_PROJECT_LICENSES_INPUT = {
  /**
   * Project Id
   * @description The unique identifier of the CustomGPT project (agent).
   */
  projectId?: string;
};

/**
 * Type of CUSTOMGPT's CUSTOMGPT_LIST_PROJECT_LICENSES tool output.
 */
type CUSTOMGPT_LIST_PROJECT_LICENSES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: ({
      /**
       * Created At
       * @description ISO 8601 timestamp when the license was created.
       * @default null
       */
      createdAt: string | null;
      /**
       * Expires At
       * @description ISO 8601 timestamp when the license expires, if applicable.
       * @default null
       */
      expiresAt: string | null;
      /**
       * Id
       * @description Unique identifier of the license.
       */
      id: string;
      /**
       * Project Id
       * @description Identifier of the associated project.
       */
      projectId: string;
      /**
       * Status
       * @description Current status of the license (e.g., active, expired).
       * @default null
       */
      status: string | null;
      /**
       * Type
       * @description Type of the license.
       * @default null
       */
      type: string | null;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the license was last updated.
       * @default null
       */
      updatedAt: string | null;
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CUSTOMGPT's CUSTOMGPT_UPDATE_PROJECT_LICENSE tool input.
 */
type CUSTOMGPT_UPDATE_PROJECT_LICENSE_INPUT = {
  /**
   * License Id
   * @description The unique identifier of the license to update
   */
  licenseId?: string;
  /**
   * Name
   * @description New name for the license
   */
  name?: string;
  /**
   * Project Id
   * @description The unique identifier of the project (agent) the license belongs to
   */
  projectId?: string;
};

/**
 * Type of CUSTOMGPT's CUSTOMGPT_UPDATE_PROJECT_LICENSE tool output.
 */
type CUSTOMGPT_UPDATE_PROJECT_LICENSE_OUTPUT = {
  /**
   * Data
   * @description Represents a license object associated with a project.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the license was created
       * @default null
       */
      createdAt: string | null;
      /**
       * Id
       * @description Unique identifier of the license
       */
      id: string;
      /**
       * Name
       * @description Name of the license
       */
      name: string;
      /**
       * Project Id
       * @description The ID of the project this license belongs to
       */
      projectId: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the license was last updated
       * @default null
       */
      updatedAt: string | null;
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
   * Status
   * @description Operation status, e.g., 'success'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CUSTOMGPT's CUSTOMGPT_UPDATE_USER_PROFILE tool input.
 */
type CUSTOMGPT_UPDATE_USER_PROFILE_INPUT = {
  /**
   * Avatar Url
   * @description URL of the user's avatar image.
   * @default null
   */
  avatarUrl: string | null;
  /**
   * Email
   * @description Email address of the user.
   * @default null
   */
  email: string | null;
  /**
   * Name
   * @description Full name of the user.
   * @default null
   */
  name: string | null;
};

/**
 * Type of CUSTOMGPT's CUSTOMGPT_UPDATE_USER_PROFILE tool output.
 */
type CUSTOMGPT_UPDATE_USER_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avatar Url
       * @description URL of the user's avatar image.
       * @default null
       */
      avatarUrl: string | null;
      /**
       * Created At
       * @description ISO 8601 timestamp when the user was created.
       */
      createdAt: string;
      /**
       * Email
       * @description Email address of the user.
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description Unique identifier of the user.
       */
      id: string;
      /**
       * Name
       * @description Full name of the user.
       * @default null
       */
      name: string | null;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the user was last updated.
       */
      updatedAt: string;
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
 * Type map of all available tool input types for toolkit "CUSTOMGPT".
 */
export type CUSTOMGPT_TOOL_INPUTS = {
  DELETE_PROJECT: CUSTOMGPT_DELETE_PROJECT_INPUT
  DELETE_PROJECT_LICENSE: CUSTOMGPT_DELETE_PROJECT_LICENSE_INPUT
  GET_PROJECT_LICENSE: CUSTOMGPT_GET_PROJECT_LICENSE_INPUT
  GET_PROJECT_SETTINGS: CUSTOMGPT_GET_PROJECT_SETTINGS_INPUT
  GET_USAGE_LIMITS: CUSTOMGPT_GET_USAGE_LIMITS_INPUT
  GET_USER_PROFILE: CUSTOMGPT_GET_USER_PROFILE_INPUT
  LIST_CONVERSATION_MESSAGES: CUSTOMGPT_LIST_CONVERSATION_MESSAGES_INPUT
  LIST_PROJECTS: CUSTOMGPT_LIST_PROJECTS_INPUT
  LIST_PROJECT_LICENSES: CUSTOMGPT_LIST_PROJECT_LICENSES_INPUT
  UPDATE_PROJECT_LICENSE: CUSTOMGPT_UPDATE_PROJECT_LICENSE_INPUT
  UPDATE_USER_PROFILE: CUSTOMGPT_UPDATE_USER_PROFILE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CUSTOMGPT".
 */
export type CUSTOMGPT_TOOL_OUTPUTS = {
  DELETE_PROJECT: CUSTOMGPT_DELETE_PROJECT_OUTPUT
  DELETE_PROJECT_LICENSE: CUSTOMGPT_DELETE_PROJECT_LICENSE_OUTPUT
  GET_PROJECT_LICENSE: CUSTOMGPT_GET_PROJECT_LICENSE_OUTPUT
  GET_PROJECT_SETTINGS: CUSTOMGPT_GET_PROJECT_SETTINGS_OUTPUT
  GET_USAGE_LIMITS: CUSTOMGPT_GET_USAGE_LIMITS_OUTPUT
  GET_USER_PROFILE: CUSTOMGPT_GET_USER_PROFILE_OUTPUT
  LIST_CONVERSATION_MESSAGES: CUSTOMGPT_LIST_CONVERSATION_MESSAGES_OUTPUT
  LIST_PROJECTS: CUSTOMGPT_LIST_PROJECTS_OUTPUT
  LIST_PROJECT_LICENSES: CUSTOMGPT_LIST_PROJECT_LICENSES_OUTPUT
  UPDATE_PROJECT_LICENSE: CUSTOMGPT_UPDATE_PROJECT_LICENSE_OUTPUT
  UPDATE_USER_PROFILE: CUSTOMGPT_UPDATE_USER_PROFILE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CUSTOMGPT toolkit.
 */
export const CUSTOMGPT = {
  slug: "customgpt",
  tools: {
    /**
     * Tool to delete a CustomGPT project by ID. Use when you need to permanently remove an existing agent after confirming the ID.
     */
    DELETE_PROJECT: "CUSTOMGPT_DELETE_PROJECT",
    /**
     * Tool to delete a CustomGPT project license by ID. Use after confirming both projectId and licenseId; this permanently removes the license.
     */
    DELETE_PROJECT_LICENSE: "CUSTOMGPT_DELETE_PROJECT_LICENSE",
    /**
     * Tool to retrieve a license for a specific project. Use when you need to fetch license details by license ID.
     */
    GET_PROJECT_LICENSE: "CUSTOMGPT_GET_PROJECT_LICENSE",
    /**
     * Tool to retrieve a specific agent's settings. Use when inspecting or auditing an agent's configuration after setup.
     */
    GET_PROJECT_SETTINGS: "CUSTOMGPT_GET_PROJECT_SETTINGS",
    /**
     * Tool to get user's agents, words, and queries usage limits. Use when you need to check current account quotas after authentication.
     */
    GET_USAGE_LIMITS: "CUSTOMGPT_GET_USAGE_LIMITS",
    /**
     * Tool to retrieve the current user's profile information. Use when you need to display or verify authenticated user details after login.
     */
    GET_USER_PROFILE: "CUSTOMGPT_GET_USER_PROFILE",
    /**
     * Tool to list messages in a conversation. Use when you need to retrieve the full chat history after starting a conversation session.
     */
    LIST_CONVERSATION_MESSAGES: "CUSTOMGPT_LIST_CONVERSATION_MESSAGES",
    /**
     * Tool to list all CustomGPT agents. Use when you need to retrieve agent projects with pagination support after setting your API key.
     */
    LIST_PROJECTS: "CUSTOMGPT_LIST_PROJECTS",
    /**
     * Tool to list all licenses for a CustomGPT project. Use when you have a project ID and want to fetch its license entries.
     */
    LIST_PROJECT_LICENSES: "CUSTOMGPT_LIST_PROJECT_LICENSES",
    /**
     * Tool to update a license's name for a specific project. Use after confirming both projectId and licenseId.
     */
    UPDATE_PROJECT_LICENSE: "CUSTOMGPT_UPDATE_PROJECT_LICENSE",
    /**
     * Tool to update the current user's profile. Use after authentication to modify user details such as name, email, or avatar.
     */
    UPDATE_USER_PROFILE: "CUSTOMGPT_UPDATE_USER_PROFILE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CUSTOMGPT".
 */
export type CUSTOMGPT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CUSTOMGPT".
 */
export type CUSTOMGPT_TRIGGER_EVENTS = {}
