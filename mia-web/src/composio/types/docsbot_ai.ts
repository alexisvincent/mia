// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DOCSBOT_AI's DOCSBOT_AI_CREATE_BOT tool input.
 */
type DOCSBOT_AI_CREATE_BOT_INPUT = {
  /**
   * Description
   * @description Optional description for the bot
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Name of the new bot
   */
  name?: string;
  /**
   * Settings
   * @description Optional settings object for additional bot configuration
   * @default null
   */
  settings: {
      [key: string]: unknown;
  } | null;
  /**
   * Sources
   * @description Optional list of source configuration objects for bot knowledge
   * @default null
   */
  sources: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Team Id
   * @description ID of the team to create the bot in
   */
  team_id?: string;
  /**
   * Visibility
   * @description Visibility level of the bot, either 'public' or 'private'
   * @enum {string}
   */
  visibility?: "public" | "private";
};

/**
 * Type of DOCSBOT_AI's DOCSBOT_AI_CREATE_BOT tool output.
 */
type DOCSBOT_AI_CREATE_BOT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO8601 timestamp when the bot was created
       */
      created_at: string;
      /**
       * Description
       * @description Description of the created bot
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the created bot
       */
      id: string;
      /**
       * Name
       * @description Name of the created bot
       */
      name: string;
      /**
       * Settings
       * @description Settings object reflecting bot configuration
       */
      settings: {
          [key: string]: unknown;
      };
      /**
       * Sources
       * @description List of source configurations associated with the bot
       */
      sources: {
          [key: string]: unknown;
      }[];
      /**
       * Updated At
       * @description ISO8601 timestamp when the bot was last updated
       */
      updated_at: string;
      /**
       * Visibility
       * @description Visibility level of the created bot
       * @enum {string}
       */
      visibility: "public" | "private";
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
 * Type of DOCSBOT_AI's DOCSBOT_AI_DELETE_BOT tool input.
 */
type DOCSBOT_AI_DELETE_BOT_INPUT = {
  /**
   * Bot Id
   * @description The unique identifier of the bot to be deleted
   */
  bot_id?: string;
  /**
   * Team Id
   * @description ID of the team containing the bot
   */
  team_id?: string;
};

/**
 * Type of DOCSBOT_AI's DOCSBOT_AI_DELETE_BOT tool output.
 */
type DOCSBOT_AI_DELETE_BOT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Additional information or error message
       */
      message: string;
      /**
       * Success
       * @description Indicates whether the bot was successfully deleted
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
 * Type of DOCSBOT_AI's DOCSBOT_AI_DOCSBOT_CONVERSATION_TICKET_CREATION tool input.
 */
type DOCSBOT_AI_DOCSBOT_CONVERSATION_TICKET_CREATION_INPUT = {
  /**
   * Bot Id
   * @description The bot ID (path parameter)
   */
  bot_id?: string;
  /**
   * Conversation Id
   * @description The conversation ID to generate a ticket from (path parameter)
   */
  conversation_id?: string;
  /**
   * Team Id
   * @description The team ID (path parameter)
   */
  team_id?: string;
};

/**
 * Type of DOCSBOT_AI's DOCSBOT_AI_DOCSBOT_CONVERSATION_TICKET_CREATION tool output.
 */
type DOCSBOT_AI_DOCSBOT_CONVERSATION_TICKET_CREATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Content of the support ticket from the user's perspective
       */
      message: string;
      /**
       * Subject
       * @description Subject of the support ticket
       */
      subject: string;
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
 * Type of DOCSBOT_AI's DOCSBOT_AI_GET_BOT tool input.
 */
type DOCSBOT_AI_GET_BOT_INPUT = {
  /**
   * Bot Id
   * @description ID of the bot to retrieve
   */
  bot_id?: string;
  /**
   * Team Id
   * @description ID of the team the bot belongs to
   */
  team_id?: string;
};

/**
 * Type of DOCSBOT_AI's DOCSBOT_AI_GET_BOT tool output.
 */
type DOCSBOT_AI_GET_BOT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp in ISO8601 format
       */
      created_at: string;
      /**
       * Description
       * @description Description of the bot
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier for the bot
       */
      id: string;
      /**
       * Name
       * @description Name of the bot
       */
      name: string;
      /**
       * Status
       * @description Status of the bot, e.g., 'active'
       */
      status: string;
      /**
       * Team Id
       * @description Team ID the bot belongs to
       */
      team_id: string;
      /**
       * Updated At
       * @description Last update timestamp in ISO8601 format
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
 * Type of DOCSBOT_AI's DOCSBOT_AI_GET_TEAM tool input.
 */
type DOCSBOT_AI_GET_TEAM_INPUT = {
  /**
   * Team Id
   * @description The unique identifier of the team to retrieve
   */
  team_id?: string;
};

/**
 * Type of DOCSBOT_AI's DOCSBOT_AI_GET_TEAM tool output.
 */
type DOCSBOT_AI_GET_TEAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the team was created (ISO 8601 format)
       */
      created_at: string;
      /**
       * Description
       * @description Description of the team
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the team
       */
      id: string;
      /**
       * Members
       * @description List of team member details
       */
      members: {
          /**
           * Role
           * @description Role of the user within the team
           */
          role: string;
          /**
           * User Id
           * @description User's unique identifier
           */
          user_id: string;
      }[];
      /**
       * Name
       * @description Name of the team
       */
      name: string;
      /**
       * Settings
       * @description Key-value map of team settings
       */
      settings: {
          [key: string]: unknown;
      };
      /**
       * Updated At
       * @description Timestamp when the team was last updated (ISO 8601 format)
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
 * Type of DOCSBOT_AI's DOCSBOT_AI_LIST_BOTS tool input.
 */
type DOCSBOT_AI_LIST_BOTS_INPUT = {
  /**
   * Team Id
   * @description ID of the team to list bots for
   */
  team_id?: string;
};

/**
 * Type of DOCSBOT_AI's DOCSBOT_AI_LIST_BOTS tool output.
 */
type DOCSBOT_AI_LIST_BOTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bots
       * @description Array of bots belonging to the team
       */
      bots: ({
          /**
           * Created At
           * @description ISO8601 timestamp when the bot was created
           */
          createdAt: string;
          /**
           * Id
           * @description Bot ID
           */
          id: string;
          /**
           * Name
           * @description Human-readable bot name
           */
          name: string;
          /**
           * Status
           * @description Current status of the bot
           */
          status: string;
          /**
           * Updated At
           * @description ISO8601 timestamp when the bot was last updated
           */
          updatedAt: string;
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
 * Type of DOCSBOT_AI's DOCSBOT_AI_LIST_QUESTIONS tool input.
 */
type DOCSBOT_AI_LIST_QUESTIONS_INPUT = {
  /**
   * Bot Id
   * @description The unique identifier of the bot.
   */
  bot_id?: string;
  /**
   * Limit
   * @description Number of items to return.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip before starting to collect results.
   * @default null
   */
  offset: number | null;
  /**
   * Search
   * @description Search term to filter the questions.
   * @default null
   */
  search: string | null;
  /**
   * Status
   * @description Filter by question status.
   * @default null
   * @enum {string|null}
   */
  status: "answered" | "unanswered" | null;
  /**
   * Team Id
   * @description The unique identifier of the team.
   */
  team_id?: string;
};

/**
 * Type of DOCSBOT_AI's DOCSBOT_AI_LIST_QUESTIONS tool output.
 */
type DOCSBOT_AI_LIST_QUESTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limit
       * @description Limit value from the response.
       * @default null
       */
      limit: number | null;
      /**
       * Pagination
       * @description Pagination metadata for the result set.
       */
      pagination: {
          /**
           * Has More Pages
           * @description Flag indicating if more pages are available.
           */
          hasMorePages: boolean;
          /**
           * Page
           * @description Current page index.
           */
          page: number;
          /**
           * Per Page
           * @description Number of items per page.
           */
          perPage: number;
          /**
           * Plan Limit
           * @description Plan limit for items.
           */
          planLimit: number;
          /**
           * Total Count
           * @description Total number of items matching criteria.
           */
          totalCount: number;
          /**
           * Viewable Count
           * @description Number of items viewable.
           */
          viewableCount: number;
      };
      /**
       * Questions
       * @description List of question objects returned.
       */
      questions: {
          /**
           * Answer
           * @description The answer text, if answered.
           * @default null
           */
          answer: string | null;
          /**
           * Created At
           * @description Creation timestamp in ISO 8601 format.
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier for the question.
           */
          id: string;
          /**
           * Question
           * @description The question text.
           */
          question: string;
          /**
           * Status
           * @description The status of the question.
           * @enum {string}
           */
          status: "answered" | "unanswered";
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
 * Type of DOCSBOT_AI's DOCSBOT_AI_LIST_SOURCES tool input.
 */
type DOCSBOT_AI_LIST_SOURCES_INPUT = {
  /**
   * Bot Id
   * @description The unique identifier of the bot.
   */
  bot_id?: string;
  /**
   * Page
   * @description Page number for pagination.
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of sources per page.
   * @default null
   */
  pageSize: number | null;
  /**
   * Team Id
   * @description The unique identifier of the team.
   */
  team_id?: string;
};

/**
 * Type of DOCSBOT_AI's DOCSBOT_AI_LIST_SOURCES tool output.
 */
type DOCSBOT_AI_LIST_SOURCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page
       * @description Current page number.
       * @default null
       */
      page: number | null;
      /**
       * Page Size
       * @description Number of sources per page.
       * @default null
       */
      pageSize: number | null;
      /**
       * Sources
       * @description List of source objects.
       */
      sources: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the source was created.
           */
          createdAt: string;
          /**
           * Id
           * @description Unique identifier of the source.
           */
          id: string;
          /**
           * Name
           * @description Name of the source.
           */
          name: string;
          /**
           * Status
           * @description Status of the source (e.g., active, inactive).
           */
          status: string;
          /**
           * Type
           * @description Type of the source (e.g., website, file).
           */
          type: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the source was last updated.
           */
          updatedAt: string;
      }[];
      /**
       * Total
       * @description Total number of sources found.
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
 * Type of DOCSBOT_AI's DOCSBOT_AI_LIST_TEAMS tool input.
 */
type DOCSBOT_AI_LIST_TEAMS_INPUT = object;

/**
 * Type of DOCSBOT_AI's DOCSBOT_AI_LIST_TEAMS tool output.
 */
type DOCSBOT_AI_LIST_TEAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Teams
       * @description List of all teams associated with the authenticated user
       */
      teams: {
          /**
           * Created At
           * @description ISO 8601 datetime when the team was created
           */
          created_at: string;
          /**
           * Id
           * @description The unique identifier of the team
           */
          id: string;
          /**
           * Name
           * @description The name of the team
           */
          name: string;
          /**
           * Updated At
           * @description ISO 8601 datetime when the team was last updated
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
 * Type of DOCSBOT_AI's DOCSBOT_AI_UPDATE_BOT tool input.
 */
type DOCSBOT_AI_UPDATE_BOT_INPUT = {
  /**
   * Avatar Url
   * @description URL of the bot's avatar image
   * @default null
   */
  avatarUrl: string | null;
  /**
   * Bot Id
   * @description ID of the bot to update
   */
  bot_id?: string;
  /**
   * Description
   * @description New description for the bot
   * @default null
   */
  description: string | null;
  /**
   * Instructions
   * @description Updated system instructions for the bot's behavior
   * @default null
   */
  instructions: string | null;
  /**
   * Model
   * @description Model identifier the bot should use
   * @default null
   */
  model: string | null;
  /**
   * Name
   * @description New name for the bot
   * @default null
   */
  name: string | null;
  /**
   * Team Id
   * @description ID of the team the bot belongs to
   */
  team_id?: string;
  /**
   * Temperature
   * @description Sampling temperature for model responses, between 0 and 2
   * @default null
   */
  temperature: number | null;
};

/**
 * Type of DOCSBOT_AI's DOCSBOT_AI_UPDATE_BOT tool output.
 */
type DOCSBOT_AI_UPDATE_BOT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avatar Url
       * @description URL of the bot's avatar image
       * @default null
       */
      avatar_url: string | null;
      /**
       * Created At
       * @description Timestamp when the bot was created
       */
      created_at: string;
      /**
       * Description
       * @description Description of the bot
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier for the bot
       */
      id: string;
      /**
       * Instructions
       * @description System instructions of the bot
       * @default null
       */
      instructions: string | null;
      /**
       * Model
       * @description Model used by the bot
       */
      model: string;
      /**
       * Name
       * @description Name of the bot
       */
      name: string;
      /**
       * Temperature
       * @description Sampling temperature for the bot
       */
      temperature: number;
      /**
       * Updated At
       * @description Timestamp when the bot was last updated
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
 * Type of DOCSBOT_AI's DOCSBOT_AI_UPDATE_TEAM tool input.
 */
type DOCSBOT_AI_UPDATE_TEAM_INPUT = {
  /**
   * Avatar Url
   * @description URL to a new avatar image for the team
   * @default null
   */
  avatarUrl: string | null;
  /**
   * Description
   * @description New description for the team
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description New name for the team
   * @default null
   */
  name: string | null;
  /**
   * Team Id
   * @description The unique identifier of the team to update
   */
  team_id?: string;
};

/**
 * Type of DOCSBOT_AI's DOCSBOT_AI_UPDATE_TEAM tool output.
 */
type DOCSBOT_AI_UPDATE_TEAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avatar Url
       * @description Team's avatar URL
       * @default null
       */
      avatarUrl: string | null;
      /**
       * Created At
       * @description Timestamp when the team was created (ISO 8601 format)
       */
      createdAt: string;
      /**
       * Description
       * @description Team's description
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description The team's unique identifier
       */
      id: string;
      /**
       * Name
       * @description Team's name
       */
      name: string;
      /**
       * Updated At
       * @description Timestamp when the team was last updated (ISO 8601 format)
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
 * Type of DOCSBOT_AI's DOCSBOT_AI_UPLOAD_FILE_TO_CLOUD_STORAGE tool input.
 */
type DOCSBOT_AI_UPLOAD_FILE_TO_CLOUD_STORAGE_INPUT = {
  /**
   * Fields
   * @description Additional form fields required for S3 POST uploads
   * @default null
   */
  fields: {
      [key: string]: string;
  } | null;
  /**
   * File Path
   * @description Local filesystem path to the file to be uploaded
   */
  file_path?: string;
  /**
   * Headers
   * @description Additional headers required for the upload request
   * @default null
   */
  headers: {
      [key: string]: string;
  } | null;
  /**
   * Upload Url
   * @description Presigned URL to upload the file
   */
  upload_url?: string;
};

/**
 * Type of DOCSBOT_AI's DOCSBOT_AI_UPLOAD_FILE_TO_CLOUD_STORAGE tool output.
 */
type DOCSBOT_AI_UPLOAD_FILE_TO_CLOUD_STORAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response
       * @description Response body returned by the upload request
       * @default null
       */
      response: string | null;
      /**
       * Status Code
       * @description HTTP status code returned by the upload request
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
 * Type map of all available tool input types for toolkit "DOCSBOT_AI".
 */
export type DOCSBOT_AI_TOOL_INPUTS = {
  CREATE_BOT: DOCSBOT_AI_CREATE_BOT_INPUT
  DELETE_BOT: DOCSBOT_AI_DELETE_BOT_INPUT
  DOCSBOT_CONVERSATION_TICKET_CREATION: DOCSBOT_AI_DOCSBOT_CONVERSATION_TICKET_CREATION_INPUT
  GET_BOT: DOCSBOT_AI_GET_BOT_INPUT
  GET_TEAM: DOCSBOT_AI_GET_TEAM_INPUT
  LIST_BOTS: DOCSBOT_AI_LIST_BOTS_INPUT
  LIST_QUESTIONS: DOCSBOT_AI_LIST_QUESTIONS_INPUT
  LIST_SOURCES: DOCSBOT_AI_LIST_SOURCES_INPUT
  LIST_TEAMS: DOCSBOT_AI_LIST_TEAMS_INPUT
  UPDATE_BOT: DOCSBOT_AI_UPDATE_BOT_INPUT
  UPDATE_TEAM: DOCSBOT_AI_UPDATE_TEAM_INPUT
  UPLOAD_FILE_TO_CLOUD_STORAGE: DOCSBOT_AI_UPLOAD_FILE_TO_CLOUD_STORAGE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DOCSBOT_AI".
 */
export type DOCSBOT_AI_TOOL_OUTPUTS = {
  CREATE_BOT: DOCSBOT_AI_CREATE_BOT_OUTPUT
  DELETE_BOT: DOCSBOT_AI_DELETE_BOT_OUTPUT
  DOCSBOT_CONVERSATION_TICKET_CREATION: DOCSBOT_AI_DOCSBOT_CONVERSATION_TICKET_CREATION_OUTPUT
  GET_BOT: DOCSBOT_AI_GET_BOT_OUTPUT
  GET_TEAM: DOCSBOT_AI_GET_TEAM_OUTPUT
  LIST_BOTS: DOCSBOT_AI_LIST_BOTS_OUTPUT
  LIST_QUESTIONS: DOCSBOT_AI_LIST_QUESTIONS_OUTPUT
  LIST_SOURCES: DOCSBOT_AI_LIST_SOURCES_OUTPUT
  LIST_TEAMS: DOCSBOT_AI_LIST_TEAMS_OUTPUT
  UPDATE_BOT: DOCSBOT_AI_UPDATE_BOT_OUTPUT
  UPDATE_TEAM: DOCSBOT_AI_UPDATE_TEAM_OUTPUT
  UPLOAD_FILE_TO_CLOUD_STORAGE: DOCSBOT_AI_UPLOAD_FILE_TO_CLOUD_STORAGE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DOCSBOT_AI toolkit.
 */
export const DOCSBOT_AI = {
  slug: "docsbot_ai",
  tools: {
    /**
     * Tool to create a new bot within a team. use when you have a valid team id and want to provision a new bot.
     */
    CREATE_BOT: "DOCSBOT_AI_CREATE_BOT",
    /**
     * Tool to delete a specific bot by its id. use after confirming the bot id is correct to permanently remove a bot from the system.
     */
    DELETE_BOT: "DOCSBOT_AI_DELETE_BOT",
    /**
     * Tool to generate a structured support ticket from a chat agent conversation. use when you need to convert an existing conversation into a ready-to-submit helpdesk ticket.
     */
    DOCSBOT_CONVERSATION_TICKET_CREATION: "DOCSBOT_AI_DOCSBOT_CONVERSATION_TICKET_CREATION",
    /**
     * Tool to fetch details of a specific bot by id within a team. use after confirming valid team and bot ids.
     */
    GET_BOT: "DOCSBOT_AI_GET_BOT",
    /**
     * Tool to fetch details of a specific team by its id. use when you need full team info including members and settings after confirming the team id.
     */
    GET_TEAM: "DOCSBOT_AI_GET_TEAM",
    /**
     * Tool to list all bots for a given team. use after confirming the team id to retrieve all associated bots for that team.
     */
    LIST_BOTS: "DOCSBOT_AI_LIST_BOTS",
    /**
     * Tool to list all questions asked of a specific bot. use after confirming the bot's identifier. example: "list questions for bot abc123 with status 'unanswered'."
     */
    LIST_QUESTIONS: "DOCSBOT_AI_LIST_QUESTIONS",
    /**
     * Tool to list all sources for a specific bot. use when you need to retrieve paginated source lists after confirming the bot's identifier.
     */
    LIST_SOURCES: "DOCSBOT_AI_LIST_SOURCES",
    /**
     * Tool to list all teams. use when you need to retrieve every team associated with the authenticated user.
     */
    LIST_TEAMS: "DOCSBOT_AI_LIST_TEAMS",
    /**
     * Tool to update specific fields for a bot (e.g., name, description, settings). use after confirming valid team and bot ids.
     */
    UPDATE_BOT: "DOCSBOT_AI_UPDATE_BOT",
    /**
     * Tool to update specific fields for a team. use after confirming the team id when you need to change the team's name, description, or avatar url. returns the updated team record.
     */
    UPDATE_TEAM: "DOCSBOT_AI_UPDATE_TEAM",
    /**
     * Tool to upload a file to cloud storage via a presigned url. use after generating a presigned url for file upload.
     */
    UPLOAD_FILE_TO_CLOUD_STORAGE: "DOCSBOT_AI_UPLOAD_FILE_TO_CLOUD_STORAGE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DOCSBOT_AI".
 */
export type DOCSBOT_AI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DOCSBOT_AI".
 */
export type DOCSBOT_AI_TRIGGER_EVENTS = {}
