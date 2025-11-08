// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ENTELLIGENCE's ENTELLIGENCE_ADD_A_NEW_REPOSITORY tool input.
 */
type ENTELLIGENCE_ADD_A_NEW_REPOSITORY_INPUT = {
  /**
   * Access Token
   * @description Optional access token for private repositories
   */
  AccessToken?: string;
  /**
   * Branch
   * @description Optional branch name
   */
  Branch?: string;
  /**
   * Documentation Url
   * @description Optional URL for the repository"s documentation
   */
  DocumentationUrl?: string;
  /**
   * Ingest Docs
   * @description Optional flag to ingest documentation
   * @default false
   */
  IngestDocs: boolean;
  /**
   * Ingest Issues
   * @description Optional flag to ingest issues
   * @default false
   */
  IngestIssues: boolean;
  /**
   * Ingest Prs
   * @description Optional flag to ingest pull requests
   * @default false
   */
  IngestPrs: boolean;
  /**
   * Is Merged Repo
   * @description Optional flag indicating if this is a merged repository
   * @default false
   */
  IsMergedRepo: boolean;
  /**
   * Is Public
   * @description Whether the repository is public or private
   */
  IsPublic?: boolean;
  /**
   * Name
   * @description The name of the repository
   */
  Name?: string;
  /**
   * Organization Uuid
   * @description Optional UUID of the organization the repository belongs to
   */
  OrganizationUUID?: string;
  /**
   * Url
   * @description The URL of the repository
   */
  Url?: string;
  /**
   * User Uuid
   * @description Optional UUID of the user adding the repository
   */
  UserUUID?: string;
  /**
   * Vector Dburl
   * @description Optional URL of the vector database
   */
  VectorDBURL?: string;
};

/**
 * Type of ENTELLIGENCE's ENTELLIGENCE_ADD_A_NEW_REPOSITORY tool output.
 */
type ENTELLIGENCE_ADD_A_NEW_REPOSITORY_OUTPUT = {
  /** Data */
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
 * Type of ENTELLIGENCE's ENTELLIGENCE_INTERACT_WITH_THE_REPOSITORY_AGENT tool input.
 */
type ENTELLIGENCE_INTERACT_WITH_THE_REPOSITORY_AGENT_INPUT = {
  /**
   * Advanced Agent
   * @description Optional flag to use advanced agent features
   * @default true
   */
  advancedAgent: boolean;
  /**
   * Github Username
   * @description Optional GitHub username
   */
  githubUsername?: string;
  /**
   * History
   * @description List of previous interactions or context
   */
  history?: {
      [key: string]: unknown;
  }[];
  /**
   * Question
   * @description The question to ask the Repository Agent
   */
  question?: string;
  /**
   * Username
   * @description Optional username
   */
  username?: string;
  /**
   * Vector Db Url
   * @description URL of the vector database
   */
  vectorDBUrl?: string;
};

/**
 * Type of ENTELLIGENCE's ENTELLIGENCE_INTERACT_WITH_THE_REPOSITORY_AGENT tool output.
 */
type ENTELLIGENCE_INTERACT_WITH_THE_REPOSITORY_AGENT_OUTPUT = {
  /** Data */
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
 * Type map of all available tool input types for toolkit "ENTELLIGENCE".
 */
export type ENTELLIGENCE_TOOL_INPUTS = {
  ADD_A_NEW_REPOSITORY: ENTELLIGENCE_ADD_A_NEW_REPOSITORY_INPUT
  INTERACT_WITH_THE_REPOSITORY_AGENT: ENTELLIGENCE_INTERACT_WITH_THE_REPOSITORY_AGENT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ENTELLIGENCE".
 */
export type ENTELLIGENCE_TOOL_OUTPUTS = {
  ADD_A_NEW_REPOSITORY: ENTELLIGENCE_ADD_A_NEW_REPOSITORY_OUTPUT
  INTERACT_WITH_THE_REPOSITORY_AGENT: ENTELLIGENCE_INTERACT_WITH_THE_REPOSITORY_AGENT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ENTELLIGENCE toolkit.
 */
export const ENTELLIGENCE = {
  slug: "entelligence",
  tools: {
    /**
     * Add a new repository to the system with specified details
     */
    ADD_A_NEW_REPOSITORY: "ENTELLIGENCE_ADD_A_NEW_REPOSITORY",
    /**
     * Send a question and related information to the repository agent and receive a streaming response
     */
    INTERACT_WITH_THE_REPOSITORY_AGENT: "ENTELLIGENCE_INTERACT_WITH_THE_REPOSITORY_AGENT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ENTELLIGENCE".
 */
export type ENTELLIGENCE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ENTELLIGENCE".
 */
export type ENTELLIGENCE_TRIGGER_EVENTS = {}
