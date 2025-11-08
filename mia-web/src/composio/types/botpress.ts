// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BOTPRESS's BOTPRESS_DELETE_FILE tool input.
 */
type BOTPRESS_DELETE_FILE_INPUT = {
  /**
   * Bot Id
   * @description The ID of the bot associated with the file
   */
  botId?: string;
  /**
   * Id
   * @description The unique identifier or key of the file to be deleted
   */
  id?: string;
};

/**
 * Type of BOTPRESS's BOTPRESS_DELETE_FILE tool output.
 */
type BOTPRESS_DELETE_FILE_OUTPUT = {
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
 * Type of BOTPRESS's BOTPRESS_GET_ACCOUNT tool input.
 */
type BOTPRESS_GET_ACCOUNT_INPUT = object;

/**
 * Type of BOTPRESS's BOTPRESS_GET_ACCOUNT tool output.
 */
type BOTPRESS_GET_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account
       * @description Account details
       */
      account: {
          /**
           * Created At
           * @description Timestamp when the account was created
           */
          createdAt: string;
          /**
           * Display Name
           * @description Display name of the account
           */
          displayName: string;
          /**
           * Email
           * @description Email address associated with the account
           */
          email: string;
          /**
           * Email Verified
           * @description Indicates if the email is verified
           */
          emailVerified: boolean;
          /**
           * Id
           * @description Unique identifier for the account
           */
          id: string;
          /**
           * Profile Picture
           * @description URL to the profile picture
           * @default null
           */
          profilePicture: string | null;
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
 * Type of BOTPRESS's BOTPRESS_LIST_BOT_ISSUES tool input.
 */
type BOTPRESS_LIST_BOT_ISSUES_INPUT = {
  /**
   * Id
   * @description Unique identifier of the bot to list issues for
   */
  id?: string;
  /**
   * Next Token
   * @description Pagination token from previous response to retrieve the next page of results
   * @default null
   */
  nextToken: string | null;
};

/**
 * Type of BOTPRESS's BOTPRESS_LIST_BOT_ISSUES tool output.
 */
type BOTPRESS_LIST_BOT_ISSUES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Issues
       * @description List of issues found for the bot
       */
      issues: {
          /**
           * Category
           * @description Category of the issue
           * @enum {string}
           */
          category: "user_code" | "limits" | "configuration" | "other";
          /**
           * Code
           * @description Code representing the issue
           */
          code: string;
          /**
           * Created At
           * @description ISO 8601 timestamp when the issue was created
           */
          createdAt: string;
          /**
           * Description
           * @description Detailed description of the issue
           */
          description: string;
          /**
           * Events Count
           * @description Number of events associated with the issue
           */
          eventsCount: number;
          /**
           * Grouped Data
           * @description Additional context or metadata about the issue
           */
          groupedData?: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Unique identifier for the issue
           */
          id: string;
          /**
           * Last Seen At
           * @description ISO 8601 timestamp when the issue was last observed
           */
          lastSeenAt: string;
          /**
           * Resolution Link
           * @description URL with information or steps to resolve the issue
           * @default null
           */
          resolutionLink: string | null;
          /**
           * Title
           * @description Title of the issue
           */
          title: string;
      }[];
      /**
       * Meta
       * @description Pagination metadata for the response
       */
      meta: {
          /**
           * Next Token
           * @description Token to retrieve the next page of results, if available
           * @default null
           */
          nextToken: string | null;
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
 * Type of BOTPRESS's BOTPRESS_LIST_CONVERSATIONS tool input.
 */
type BOTPRESS_LIST_CONVERSATIONS_INPUT = {
  /**
   * Bot Id
   * @description ID of the bot that the conversation belongs to. Used as x-bot-id header.
   */
  botId?: string;
  /**
   * Channel
   * @description Filter by channel name.
   * @default null
   */
  channel: string | null;
  /**
   * Integration Name
   * @description Filter by integration name.
   * @default null
   */
  integrationName: string | null;
  /**
   * Next Token
   * @description Pagination token from previous response to retrieve the next page of results.
   * @default null
   */
  nextToken: string | null;
  /**
   * Participant Ids
   * @description Filter by a list of participant IDs.
   * @default null
   */
  participantIds: string[] | null;
  /**
   * Sort Direction
   * @description Sort order direction: asc or desc.
   * @default null
   * @enum {string|null}
   */
  sortDirection: "asc" | "desc" | null;
  /**
   * Sort Field
   * @description Field to sort conversations by.
   * @default null
   * @enum {string|null}
   */
  sortField: "createdAt" | "updatedAt" | null;
  /**
   * Tags
   * @description Filter conversations by tags key-value pairs.
   * @default null
   */
  tags: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of BOTPRESS's BOTPRESS_LIST_CONVERSATIONS tool output.
 */
type BOTPRESS_LIST_CONVERSATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Conversations
       * @description List of conversation objects.
       */
      conversations: {
          /**
           * Channel
           * @description Channel name tied to this conversation.
           */
          channel: string;
          /**
           * Created At
           * @description ISO 8601 timestamp when created.
           */
          createdAt: string;
          /**
           * Current Task Id
           * @description ID of the current task in the conversation.
           * @default null
           */
          currentTaskId: string | null;
          /**
           * Current Workflow Id
           * @description ID of the current workflow in the conversation.
           * @default null
           */
          currentWorkflowId: string | null;
          /**
           * Id
           * @description Unique identifier of the conversation.
           */
          id: string;
          /**
           * Integration
           * @description Integration identifier associated with the conversation.
           */
          integration: string;
          /**
           * Tags
           * @description Tags associated with the conversation.
           */
          tags: {
              [key: string]: unknown;
          };
          /**
           * Updated At
           * @description ISO 8601 timestamp when last updated.
           */
          updatedAt: string;
      }[];
      /**
       * Meta
       * @description Pagination metadata for the results.
       */
      meta: {
          /**
           * Next Token
           * @description Token to retrieve the next page of results, if available.
           * @default null
           */
          nextToken: string | null;
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
 * Type of BOTPRESS's BOTPRESS_LIST_FILE_TAGS tool input.
 */
type BOTPRESS_LIST_FILE_TAGS_INPUT = {
  /**
   * Bot Id
   * @description ID of the bot whose file tags should be listed. Used as x-bot-id header.
   */
  botId?: string;
  /**
   * Next Token
   * @description Pagination token from a previous response to retrieve the next page of tags.
   * @default null
   */
  nextToken: string | null;
};

/**
 * Type of BOTPRESS's BOTPRESS_LIST_FILE_TAGS tool output.
 */
type BOTPRESS_LIST_FILE_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Pagination metadata for the result set.
       */
      meta: {
          /**
           * Next Token
           * @description Token to retrieve the next page of results, if any.
           * @default null
           */
          nextToken: string | null;
      };
      /**
       * Tags
       * @description List of tags used across all files of the bot.
       */
      tags: string[];
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
 * Type of BOTPRESS's BOTPRESS_LIST_FILE_TAG_VALUES tool input.
 */
type BOTPRESS_LIST_FILE_TAG_VALUES_INPUT = {
  /** Bot Id */
  botId?: string;
  /**
   * Next Token
   * @default null
   */
  nextToken: string | null;
  /** Tag */
  tag?: string;
};

/**
 * Type of BOTPRESS's BOTPRESS_LIST_FILE_TAG_VALUES tool output.
 */
type BOTPRESS_LIST_FILE_TAG_VALUES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Pagination metadata for listing file tag values.
       */
      meta: {
          /**
           * Next Token
           * @default null
           */
          nextToken: string | null;
      };
      /** Values */
      values: string[];
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
 * Type of BOTPRESS's BOTPRESS_LIST_PUBLIC_WORKSPACES tool input.
 */
type BOTPRESS_LIST_PUBLIC_WORKSPACES_INPUT = {
  /**
   * Next Token
   * @description Pagination token from previous response meta.nextToken.
   * @default null
   */
  nextToken: string | null;
  /**
   * Search
   * @description Filter workspaces by search string.
   * @default null
   */
  search: string | null;
  /**
   * Workspace Ids
   * @description Filter by list of workspace IDs.
   * @default null
   */
  workspaceIds: string[] | null;
};

/**
 * Type of BOTPRESS's BOTPRESS_LIST_PUBLIC_WORKSPACES tool output.
 */
type BOTPRESS_LIST_PUBLIC_WORKSPACES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Pagination metadata.
       */
      meta: {
          /**
           * Next Token
           * @description Token to retrieve the next page of results.
           * @default null
           */
          nextToken: string | null;
      };
      /**
       * Workspaces
       * @description List of public workspace objects.
       */
      workspaces: {
          /**
           * About
           * @description Description or about field of the workspace.
           * @default null
           */
          about: string | null;
          /**
           * Contact Email
           * @description Contact email address.
           * @default null
           */
          contactEmail: string | null;
          /**
           * Created At
           * @description ISO 8601 creation timestamp.
           */
          createdAt: string;
          /**
           * Handle
           * @description Unique handle for the workspace.
           */
          handle: string;
          /**
           * Id
           * @description Unique workspace identifier.
           */
          id: string;
          /**
           * Name
           * @description Workspace name.
           */
          name: string;
          /**
           * Profile Picture
           * @description URL of profile picture.
           * @default null
           */
          profilePicture: string | null;
          /**
           * Social Accounts
           * @description Social account links.
           * @default null
           */
          socialAccounts: string[] | null;
          /**
           * Updated At
           * @description ISO 8601 update timestamp.
           */
          updatedAt: string;
          /**
           * Website
           * @description Website URL.
           * @default null
           */
          website: string | null;
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
 * Type of BOTPRESS's BOTPRESS_LIST_WORKSPACES tool input.
 */
type BOTPRESS_LIST_WORKSPACES_INPUT = {
  /**
   * Handle
   * @description Workspace handle to filter by
   * @default null
   */
  handle: string | null;
  /**
   * Next Token
   * @description Pagination token from previous response meta.nextToken
   * @default null
   */
  nextToken: string | null;
};

/**
 * Type of BOTPRESS's BOTPRESS_LIST_WORKSPACES tool output.
 */
type BOTPRESS_LIST_WORKSPACES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Pagination metadata for the results
       */
      meta: {
          /**
           * Next Token
           * @description Token to retrieve the next page of results
           * @default null
           */
          nextToken: string | null;
      };
      /**
       * Workspaces
       * @description List of workspace objects
       */
      workspaces: {
          /**
           * About
           * @description Description of the workspace
           * @default null
           */
          about: string | null;
          /**
           * Billing Version
           * @description Billing version of the workspace
           */
          billingVersion: string;
          /**
           * Blocked
           * @description Indicates if the workspace is blocked
           */
          blocked: boolean;
          /**
           * Bot Count
           * @description Number of bots in the workspace
           */
          botCount: number;
          /**
           * Contact Email
           * @description Contact email for the workspace
           * @default null
           */
          contactEmail: string | null;
          /**
           * Created At
           * @description ISO 8601 creation timestamp
           */
          createdAt: string;
          /**
           * Handle
           * @description Handle of the workspace
           */
          handle: string;
          /**
           * Id
           * @description Unique identifier for the workspace
           */
          id: string;
          /**
           * Is Public
           * @description Indicates if the workspace is public
           */
          isPublic: boolean;
          /**
           * Name
           * @description Name of the workspace
           */
          name: string;
          /**
           * Owner Id
           * @description ID of the workspace owner
           */
          ownerId: string;
          /**
           * Plan
           * @description Plan type of the workspace (e.g., 'community')
           */
          plan: string;
          /**
           * Profile Picture
           * @description URL of the workspace's profile picture
           * @default null
           */
          profilePicture: string | null;
          /**
           * Social Accounts
           * @description List of social accounts associated with the workspace
           */
          socialAccounts: {
              [key: string]: unknown;
          }[];
          /**
           * Spending Limit
           * @description Spending limit for the workspace
           */
          spendingLimit: number;
          /**
           * Updated At
           * @description ISO 8601 last update timestamp
           */
          updatedAt: string;
          /**
           * Website
           * @description Website associated with the workspace
           * @default null
           */
          website: string | null;
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
 * Type map of all available tool input types for toolkit "BOTPRESS".
 */
export type BOTPRESS_TOOL_INPUTS = {
  DELETE_FILE: BOTPRESS_DELETE_FILE_INPUT
  GET_ACCOUNT: BOTPRESS_GET_ACCOUNT_INPUT
  LIST_BOT_ISSUES: BOTPRESS_LIST_BOT_ISSUES_INPUT
  LIST_CONVERSATIONS: BOTPRESS_LIST_CONVERSATIONS_INPUT
  LIST_FILE_TAGS: BOTPRESS_LIST_FILE_TAGS_INPUT
  LIST_FILE_TAG_VALUES: BOTPRESS_LIST_FILE_TAG_VALUES_INPUT
  LIST_PUBLIC_WORKSPACES: BOTPRESS_LIST_PUBLIC_WORKSPACES_INPUT
  LIST_WORKSPACES: BOTPRESS_LIST_WORKSPACES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BOTPRESS".
 */
export type BOTPRESS_TOOL_OUTPUTS = {
  DELETE_FILE: BOTPRESS_DELETE_FILE_OUTPUT
  GET_ACCOUNT: BOTPRESS_GET_ACCOUNT_OUTPUT
  LIST_BOT_ISSUES: BOTPRESS_LIST_BOT_ISSUES_OUTPUT
  LIST_CONVERSATIONS: BOTPRESS_LIST_CONVERSATIONS_OUTPUT
  LIST_FILE_TAGS: BOTPRESS_LIST_FILE_TAGS_OUTPUT
  LIST_FILE_TAG_VALUES: BOTPRESS_LIST_FILE_TAG_VALUES_OUTPUT
  LIST_PUBLIC_WORKSPACES: BOTPRESS_LIST_PUBLIC_WORKSPACES_OUTPUT
  LIST_WORKSPACES: BOTPRESS_LIST_WORKSPACES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BOTPRESS toolkit.
 */
export const BOTPRESS = {
  slug: "botpress",
  tools: {
    /**
     * Tool to delete a file by its id or key. use after confirming the file exists.
     */
    DELETE_FILE: "BOTPRESS_DELETE_FILE",
    /**
     * Tool to get details of the authenticated account. use after confirming valid credentials.
     */
    GET_ACCOUNT: "BOTPRESS_GET_ACCOUNT",
    /**
     * Tool to list issues associated with a specific bot. use when you need to discover errors or configuration problems tied to a bot, optionally paginating through results.
     */
    LIST_BOT_ISSUES: "BOTPRESS_LIST_BOT_ISSUES",
    /**
     * Tool to list all conversations. use when you need to retrieve and page through chat threads.
     */
    LIST_CONVERSATIONS: "BOTPRESS_LIST_CONVERSATIONS",
    /**
     * Tool to list all tags used across all bot files. use when you need to retrieve or display file tag metadata; supports pagination via nexttoken.
     */
    LIST_FILE_TAGS: "BOTPRESS_LIST_FILE_TAGS",
    /**
     * Tool to list all values for a given file tag across all files. use after determining the tag name; supports pagination via nexttoken.
     */
    LIST_FILE_TAG_VALUES: "BOTPRESS_LIST_FILE_TAG_VALUES",
    /**
     * Tool to retrieve a list of public workspaces. use when browsing publicly available workspaces before selection.
     */
    LIST_PUBLIC_WORKSPACES: "BOTPRESS_LIST_PUBLIC_WORKSPACES",
    /**
     * Tool to retrieve a list of workspaces. use when you need to list and page through your botpress workspaces, optionally filtering by handle.
     */
    LIST_WORKSPACES: "BOTPRESS_LIST_WORKSPACES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BOTPRESS".
 */
export type BOTPRESS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BOTPRESS".
 */
export type BOTPRESS_TRIGGER_EVENTS = {}
