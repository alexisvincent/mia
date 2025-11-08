// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MEM0's MEM0_ADD_MEMBER_TO_PROJECT tool input.
 */
type MEM0_ADD_MEMBER_TO_PROJECT_INPUT = {
  /**
   * Org Id
   * @description Identifier of the organization owning the project.
   */
  org_id?: string;
  /**
   * Project Id
   * @description Identifier of the project to add the member to.
   */
  project_id?: string;
  /**
   * Role
   * @description Role defining the new member's project permissions (e.g., 'Admin', 'Editor').
   */
  role?: string;
  /**
   * Username
   * @description Username of the user to add to the project.
   */
  username?: string;
};

/**
 * Type of MEM0's MEM0_ADD_MEMBER_TO_PROJECT tool output.
 */
type MEM0_ADD_MEMBER_TO_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Server's response, typically including details of the added member or a success confirmation.
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
 * Type of MEM0's MEM0_ADD_NEW_MEMORY_RECORDS tool input.
 */
type MEM0_ADD_NEW_MEMORY_RECORDS_INPUT = {
  /**
   * Agent Id
   * @description Unique identifier for the agent associated with this memory.
   */
  agent_id?: string;
  /**
   * App Id
   * @description Unique identifier for the application associated with this memory.
   */
  app_id?: string;
  /**
   * Excludes
   * @description Comma-separated keywords to exclude specific topics, aiding in filtering out irrelevant information.
   */
  excludes?: string;
  /**
   * Includes
   * @description Comma-separated keywords to include specific topics, aiding filtering and prioritization.
   */
  includes?: string;
  /**
   * Infer
   * @description If true, infers structured memories from messages; otherwise, stores messages directly.
   * @default true
   */
  infer: boolean;
  /**
   * Messages
   * @description List of message objects forming the memory's content, representing conversations or multi-part memories.
   */
  messages?: {
      /**
       * Content
       * @description The textual content of the message.
       */
      content?: string;
      /**
       * Role
       * @description The role of the message sender, e.g., 'user' or 'assistant'.
       */
      role?: string;
  }[];
  /**
   * Org Id
   * @description Optional unique identifier for the organization associated with this memory.
   */
  org_id?: string;
  /**
   * Org Name
   * @description The name of the organization for this memory. Deprecated: use `org_id` instead.
   */
  org_name?: string;
  /**
   * Output Format
   * @description Specifies the response output format. 'v1.1' offers enhanced detail; 'v1.0' (default) will be deprecated.
   */
  output_format?: string;
  /**
   * Project Id
   * @description Optional unique identifier for the project associated with this memory.
   */
  project_id?: string;
  /**
   * Project Name
   * @description The name of the project for this memory. Deprecated: use `project_id` instead.
   */
  project_name?: string;
  /**
   * Run Id
   * @description Unique identifier for the run associated with this memory.
   */
  run_id?: string;
  /**
   * User Id
   * @description Unique identifier for the user associated with this memory.
   */
  user_id?: string;
};

/**
 * Type of MEM0's MEM0_ADD_NEW_MEMORY_RECORDS tool output.
 */
type MEM0_ADD_NEW_MEMORY_RECORDS_OUTPUT = {
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
 * Type of MEM0's MEM0_ADD_ORGANIZATION_MEMBER tool input.
 */
type MEM0_ADD_ORGANIZATION_MEMBER_INPUT = {
  /**
   * Email
   * @description The email of the user to be added to the organization.
   */
  email?: string;
  /**
   * Org Id
   * @description Unique identifier of the organization to which the member will be added.
   */
  org_id?: string;
  /**
   * Role
   * @description The role (should be in uppercase) to be assigned to the user within the organization (allowed values: 'OWNER' and 'READER'). This dictates the user's permissions.
   */
  role?: string;
};

/**
 * Type of MEM0's MEM0_ADD_ORGANIZATION_MEMBER tool output.
 */
type MEM0_ADD_ORGANIZATION_MEMBER_OUTPUT = {
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
 * Type of MEM0's MEM0_CREATE_AN_EXPORT_JOB_WITH_SCHEMA tool input.
 */
type MEM0_CREATE_AN_EXPORT_JOB_WITH_SCHEMA_INPUT = {
  /**
   * App Id
   * @description Filters memories for export; if provided, only memories from this application are included.
   */
  app_id?: string;
  /**
   * Org Id
   * @description Filters memories for export; if provided, only memories from this organization are included.
   */
  org_id?: string;
  /**
   * Project Id
   * @description Filters memories for export; if provided, only memories from this project are included.
   */
  project_id?: string;
  /**
   * Run Id
   * @description Filters memories for export; if provided, only memories from this run are included.
   */
  run_id?: string;
  /**
   * Session Id
   * @description Filters memories for export; if provided, only memories from this session are included.
   */
  session_id?: string;
  /**
   * User Id
   * @description Filters memories for export; if provided, only memories of this user are included.
   */
  user_id?: string;
};

/**
 * Type of MEM0's MEM0_CREATE_AN_EXPORT_JOB_WITH_SCHEMA tool output.
 */
type MEM0_CREATE_AN_EXPORT_JOB_WITH_SCHEMA_OUTPUT = {
  /**
   * Data
   * @description Information about the created export job, such as its `job_id` and status, used for tracking and retrieving results.
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
 * Type of MEM0's MEM0_CREATE_A_NEW_AGENT tool input.
 */
type MEM0_CREATE_A_NEW_AGENT_INPUT = {
  /**
   * Agent Id
   * @description Unique identifier for the agent, used for referencing in subsequent API calls.
   */
  agent_id?: string;
  /**
   * Name
   * @description Human-readable name for the agent, used for display or easier identification.
   */
  name?: string;
};

/**
 * Type of MEM0's MEM0_CREATE_A_NEW_AGENT tool output.
 */
type MEM0_CREATE_A_NEW_AGENT_OUTPUT = {
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
 * Type of MEM0's MEM0_CREATE_A_NEW_AGENT_RUN tool input.
 */
type MEM0_CREATE_A_NEW_AGENT_RUN_INPUT = {
  /**
   * Name
   * @description Human-readable name for the agent run.
   */
  name?: string;
  /**
   * Run Id
   * @description Client-defined identifier for the agent run. Should be unique for distinct identification.
   */
  run_id?: string;
};

/**
 * Type of MEM0's MEM0_CREATE_A_NEW_AGENT_RUN tool output.
 */
type MEM0_CREATE_A_NEW_AGENT_RUN_OUTPUT = {
  /**
   * Data
   * @description Details and data of the newly created agent run; specific contents can vary.
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
 * Type of MEM0's MEM0_CREATE_A_NEW_APPLICATION tool input.
 */
type MEM0_CREATE_A_NEW_APPLICATION_INPUT = {
  /**
   * App Id
   * @description The unique identifier for the application to be created. This ID will be used to reference the application in subsequent API calls.
   */
  app_id?: string;
  /**
   * Name
   * @description An optional, human-readable name for the application. If not provided, the application might be created without a specific name or with a default one.
   */
  name?: string;
};

/**
 * Type of MEM0's MEM0_CREATE_A_NEW_APPLICATION tool output.
 */
type MEM0_CREATE_A_NEW_APPLICATION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the attributes of the newly created application. This typically includes the `app_id`, `name` (if provided), and any other relevant information or metadata returned by the API upon successful creation.
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
 * Type of MEM0's MEM0_CREATE_A_NEW_ORGANIZATION_ENTRY tool input.
 */
type MEM0_CREATE_A_NEW_ORGANIZATION_ENTRY_INPUT = {
  /**
   * Name
   * @description The name for the new organization.
   */
  name?: string;
};

/**
 * Type of MEM0's MEM0_CREATE_A_NEW_ORGANIZATION_ENTRY tool output.
 */
type MEM0_CREATE_A_NEW_ORGANIZATION_ENTRY_OUTPUT = {
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
 * Type of MEM0's MEM0_CREATE_A_NEW_USER tool input.
 */
type MEM0_CREATE_A_NEW_USER_INPUT = {
  /**
   * User Id
   * @description The unique identifier for the new user. This ID will be used for future references to this user.
   */
  user_id?: string;
};

/**
 * Type of MEM0's MEM0_CREATE_A_NEW_USER tool output.
 */
type MEM0_CREATE_A_NEW_USER_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the successfully created user, which may include the `user_id` and other attributes returned by the API.
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
 * Type of MEM0's MEM0_CREATE_MEMORY_ENTRY tool input.
 */
type MEM0_CREATE_MEMORY_ENTRY_INPUT = {
  /**
   * Filters
   * @description Key-value pairs to filter memories (e.g., 'user_id', 'custom_data.key'), enabling complex, multi-field searches.
   */
  filters?: {
      [key: string]: unknown;
  };
  /**
   * Org Id
   * @description Unique organization ID to filter memories. Preferred over the deprecated `org_name`.
   */
  org_id?: string;
  /**
   * Org Name
   * @description DEPRECATED: Organization name to filter memories. Use `org_id` instead for improved stability and future compatibility.
   */
  org_name?: string;
  /**
   * Page
   * @description Page number for paginated results (1-indexed).
   */
  page?: number;
  /**
   * Page Size
   * @description Number of memory entries per page.
   */
  page_size?: number;
  /**
   * Project Id
   * @description Unique project ID to filter memories. Preferred over the deprecated `project_name`.
   */
  project_id?: string;
  /**
   * Project Name
   * @description DEPRECATED: Project name to filter memories. Use `project_id` instead for improved stability and future compatibility.
   */
  project_name?: string;
};

/**
 * Type of MEM0's MEM0_CREATE_MEMORY_ENTRY tool output.
 */
type MEM0_CREATE_MEMORY_ENTRY_OUTPUT = {
  /**
   * Data
   * @description Data from the memory listing, typically including a list of matching memory entries and pagination metadata.
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
 * Type of MEM0's MEM0_CREATE_PROJECT tool input.
 */
type MEM0_CREATE_PROJECT_INPUT = {
  /**
   * Name
   * @description The name to be assigned to the new project.
   */
  name?: string;
  /**
   * Org Id
   * @description The unique identifier of the organization under which the new project will be created.
   */
  org_id?: string;
};

/**
 * Type of MEM0's MEM0_CREATE_PROJECT tool output.
 */
type MEM0_CREATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the attributes and information of the successfully created project. The specific keys and values will depend on the project details stored by the system, typically including 'id', 'name', 'org_id', and creation timestamps.
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
 * Type of MEM0's MEM0_DELETE_AN_ORGANIZATION tool input.
 */
type MEM0_DELETE_AN_ORGANIZATION_INPUT = {
  /**
   * Org Id
   * @description The unique identifier of the organization that is to be deleted.
   */
  org_id?: string;
};

/**
 * Type of MEM0's MEM0_DELETE_AN_ORGANIZATION tool output.
 */
type MEM0_DELETE_AN_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API's response data. For a successful deletion, this might be an empty dictionary or include a confirmation message.
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
 * Type of MEM0's MEM0_DELETE_A_SPECIFIC_MEMORY_BY_ID tool input.
 */
type MEM0_DELETE_A_SPECIFIC_MEMORY_BY_ID_INPUT = {
  /**
   * Memory Id
   * @description The unique identifier of the memory to be deleted.
   */
  memory_id?: string;
};

/**
 * Type of MEM0's MEM0_DELETE_A_SPECIFIC_MEMORY_BY_ID tool output.
 */
type MEM0_DELETE_A_SPECIFIC_MEMORY_BY_ID_OUTPUT = {
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
 * Type of MEM0's MEM0_DELETE_ENTITY_BY_TYPE_AND_ID tool input.
 */
type MEM0_DELETE_ENTITY_BY_TYPE_AND_ID_INPUT = {
  /**
   * Entity Id
   * @description Unique identifier (ID) of the entity for deletion.
   */
  entity_id?: string;
  /**
   * Entity Type
   * @description Type of the entity to be deleted.
   * @enum {string}
   */
  entity_type?: "user" | "agent" | "app" | "run";
};

/**
 * Type of MEM0's MEM0_DELETE_ENTITY_BY_TYPE_AND_ID tool output.
 */
type MEM0_DELETE_ENTITY_BY_TYPE_AND_ID_OUTPUT = {
  /**
   * Data
   * @description May contain a success message or status about the deletion.
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
 * Type of MEM0's MEM0_DELETE_MEMORIES_ENDPOINT tool input.
 */
type MEM0_DELETE_MEMORIES_ENDPOINT_INPUT = {
  /**
   * Agent Id
   * @description Deletes memories associated with this agent ID.
   */
  agent_id?: string;
  /**
   * App Id
   * @description Deletes memories associated with this app ID.
   */
  app_id?: string;
  /**
   * Metadata
   * @description Deletes memories matching this metadata (JSON string).
   */
  metadata?: {
      [key: string]: unknown;
  };
  /**
   * Org Id
   * @description Deletes memories for this organization ID.
   */
  org_id?: string;
  /**
   * Org Name
   * @description Deletes memories for this organization name. Deprecated: use `org_id`.
   */
  org_name?: string;
  /**
   * Project Id
   * @description Deletes memories for this project ID.
   */
  project_id?: string;
  /**
   * Project Name
   * @description Deletes memories for this project name. Deprecated: use `project_id`.
   */
  project_name?: string;
  /**
   * Run Id
   * @description Deletes memories associated with this run ID.
   */
  run_id?: string;
  /**
   * User Id
   * @description Deletes memories associated with this user ID.
   */
  user_id?: string;
};

/**
 * Type of MEM0's MEM0_DELETE_MEMORIES_ENDPOINT tool output.
 */
type MEM0_DELETE_MEMORIES_ENDPOINT_OUTPUT = {
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
 * Type of MEM0's MEM0_DELETE_MEMORY_BATCH_WITH_UUIDS tool input.
 */
type MEM0_DELETE_MEMORY_BATCH_WITH_UUIDS_INPUT = {
  /**
   * Memory Ids
   * @description A list of unique memory identifiers (UUIDs) corresponding to the memories to be deleted.
   */
  memory_ids?: string[];
};

/**
 * Type of MEM0's MEM0_DELETE_MEMORY_BATCH_WITH_UUIDS tool output.
 */
type MEM0_DELETE_MEMORY_BATCH_WITH_UUIDS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the outcome of the batch delete operation. This may include a summary of successes, failures, or simply a confirmation message.
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
 * Type of MEM0's MEM0_DELETE_PROJECT tool input.
 */
type MEM0_DELETE_PROJECT_INPUT = {
  /**
   * Org Id
   * @description The unique identifier of the organization to which the project belongs.
   */
  org_id?: string;
  /**
   * Project Id
   * @description The unique identifier of the project to be deleted.
   */
  project_id?: string;
};

/**
 * Type of MEM0's MEM0_DELETE_PROJECT tool output.
 */
type MEM0_DELETE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the result of the delete operation, typically confirming success.
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
 * Type of MEM0's MEM0_DELETE_PROJECT_MEMBER tool input.
 */
type MEM0_DELETE_PROJECT_MEMBER_INPUT = {
  /**
   * Org Id
   * @description Unique identifier of the organization containing the project.
   */
  org_id?: string;
  /**
   * Project Id
   * @description Unique identifier of the project from which the member will be removed.
   */
  project_id?: string;
  /**
   * Username
   * @description Username of the member to be removed from the project.
   */
  username?: string;
};

/**
 * Type of MEM0's MEM0_DELETE_PROJECT_MEMBER tool output.
 */
type MEM0_DELETE_PROJECT_MEMBER_OUTPUT = {
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
 * Type of MEM0's MEM0_EXPORT_DATA_BASED_ON_FILTERS tool input.
 */
type MEM0_EXPORT_DATA_BASED_ON_FILTERS_INPUT = {
  /**
   * App Id
   * @description Filters exports by the specified App ID.
   */
  app_id?: string;
  /**
   * Org Id
   * @description Filters exports by the specified Organization ID.
   */
  org_id?: string;
  /**
   * Project Id
   * @description Filters exports by the specified Project ID.
   */
  project_id?: string;
  /**
   * Run Id
   * @description Filters exports by the specified Run ID.
   */
  run_id?: string;
  /**
   * Session Id
   * @description Filters exports by the specified Session ID.
   */
  session_id?: string;
  /**
   * User Id
   * @description Filters exports by the specified User ID.
   */
  user_id?: string;
};

/**
 * Type of MEM0's MEM0_EXPORT_DATA_BASED_ON_FILTERS tool output.
 */
type MEM0_EXPORT_DATA_BASED_ON_FILTERS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the resulting export data. The exact structure and content of this dictionary will depend on the specific export and the filters applied. It may represent a single export's data or a collection/summary if multiple exports are matched.
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
 * Type of MEM0's MEM0_FETCH_DETAILED_LIST_OF_ORGANIZATIONS tool input.
 */
type MEM0_FETCH_DETAILED_LIST_OF_ORGANIZATIONS_INPUT = object;

/**
 * Type of MEM0's MEM0_FETCH_DETAILED_LIST_OF_ORGANIZATIONS tool output.
 */
type MEM0_FETCH_DETAILED_LIST_OF_ORGANIZATIONS_OUTPUT = {
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
 * Type of MEM0's MEM0_FETCH_DETAILS_OF_A_SPECIFIC_ORGANIZATION tool input.
 */
type MEM0_FETCH_DETAILS_OF_A_SPECIFIC_ORGANIZATION_INPUT = {
  /**
   * Org Id
   * @description Unique identifier of the organization.
   */
  org_id?: string;
};

/**
 * Type of MEM0's MEM0_FETCH_DETAILS_OF_A_SPECIFIC_ORGANIZATION tool output.
 */
type MEM0_FETCH_DETAILS_OF_A_SPECIFIC_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description Organization attributes and details; structure varies by organization data model.
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
 * Type of MEM0's MEM0_FETCH_LIST_OF_ENTITY_FILTERS tool input.
 */
type MEM0_FETCH_LIST_OF_ENTITY_FILTERS_INPUT = object;

/**
 * Type of MEM0's MEM0_FETCH_LIST_OF_ENTITY_FILTERS tool output.
 */
type MEM0_FETCH_LIST_OF_ENTITY_FILTERS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing predefined filter definitions for entities. Keys typically represent filter names or categories, and values describe the filter's specifics, such as applicable fields (e.g., entity type, creation date, modification date) and how they can be used.
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
 * Type of MEM0's MEM0_FETCH_SPECIFIC_ENTITY_DETAILS_WITH_OPTIONAL_FILTERS tool input.
 */
type MEM0_FETCH_SPECIFIC_ENTITY_DETAILS_WITH_OPTIONAL_FILTERS_INPUT = {
  /**
   * Entity Id
   * @description The unique identifier (ID) of the entity to retrieve.
   */
  entity_id?: string;
  /**
   * Entity Type
   * @description The type of the entity (user, agent, app, or run).
   * @enum {string}
   */
  entity_type?: "user" | "agent" | "app" | "run";
};

/**
 * Type of MEM0's MEM0_FETCH_SPECIFIC_ENTITY_DETAILS_WITH_OPTIONAL_FILTERS tool output.
 */
type MEM0_FETCH_SPECIFIC_ENTITY_DETAILS_WITH_OPTIONAL_FILTERS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the detailed attributes and information of the fetched entity. The structure of this dictionary varies depending on the `entity_type`.
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
 * Type of MEM0's MEM0_GET_ORGANIZATION_MEMBERS tool input.
 */
type MEM0_GET_ORGANIZATION_MEMBERS_INPUT = {
  /**
   * Org Id
   * @description The unique identifier of the organization for which members are to be listed.
   */
  org_id?: string;
};

/**
 * Type of MEM0's MEM0_GET_ORGANIZATION_MEMBERS tool output.
 */
type MEM0_GET_ORGANIZATION_MEMBERS_OUTPUT = {
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
 * Type of MEM0's MEM0_GET_PROJECTS tool input.
 */
type MEM0_GET_PROJECTS_INPUT = {
  /**
   * Org Id
   * @description The unique identifier of the organization for which to retrieve projects.
   */
  org_id?: string;
};

/**
 * Type of MEM0's MEM0_GET_PROJECTS tool output.
 */
type MEM0_GET_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the retrieved list of projects and their associated details for the specified organization. The exact structure within this dictionary is determined by the API.
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
 * Type of MEM0's MEM0_GET_PROJECT_DETAILS tool input.
 */
type MEM0_GET_PROJECT_DETAILS_INPUT = {
  /**
   * Org Id
   * @description The unique identifier for the organization to which the project belongs.
   */
  org_id?: string;
  /**
   * Project Id
   * @description The unique identifier for the project whose details are to be retrieved.
   */
  project_id?: string;
};

/**
 * Type of MEM0's MEM0_GET_PROJECT_DETAILS tool output.
 */
type MEM0_GET_PROJECT_DETAILS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the detailed attributes and information of the specified project.
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
 * Type of MEM0's MEM0_GET_PROJECT_MEMBERS tool input.
 */
type MEM0_GET_PROJECT_MEMBERS_INPUT = {
  /**
   * Org Id
   * @description Unique identifier of the organization.
   */
  org_id?: string;
  /**
   * Project Id
   * @description Unique identifier of the project.
   */
  project_id?: string;
};

/**
 * Type of MEM0's MEM0_GET_PROJECT_MEMBERS tool output.
 */
type MEM0_GET_PROJECT_MEMBERS_OUTPUT = {
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
 * Type of MEM0's MEM0_GET_USER_MEMORY_STATS tool input.
 */
type MEM0_GET_USER_MEMORY_STATS_INPUT = object;

/**
 * Type of MEM0's MEM0_GET_USER_MEMORY_STATS tool output.
 */
type MEM0_GET_USER_MEMORY_STATS_OUTPUT = {
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
 * Type of MEM0's MEM0_LIST_ENTITIES_WITH_OPTIONAL_ORG_AND_PROJECT_FILTERS tool input.
 */
type MEM0_LIST_ENTITIES_WITH_OPTIONAL_ORG_AND_PROJECT_FILTERS_INPUT = {
  /**
   * Org Id
   * @description Filter entities by the unique identifier of the organization.
   */
  org_id?: string;
  /**
   * Org Name
   * @description Filter entities by organization name; this field is deprecated, prefer using `org_id` for more stable filtering.
   */
  org_name?: string;
  /**
   * Project Id
   * @description Filter entities by the unique identifier of the project.
   */
  project_id?: string;
  /**
   * Project Name
   * @description Filter entities by project name; this field is deprecated, prefer using `project_id` for more stable filtering.
   */
  project_name?: string;
};

/**
 * Type of MEM0's MEM0_LIST_ENTITIES_WITH_OPTIONAL_ORG_AND_PROJECT_FILTERS tool output.
 */
type MEM0_LIST_ENTITIES_WITH_OPTIONAL_ORG_AND_PROJECT_FILTERS_OUTPUT = {
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
 * Type of MEM0's MEM0_PERFORM_SEMANTIC_SEARCH_ON_MEMORIES tool input.
 */
type MEM0_PERFORM_SEMANTIC_SEARCH_ON_MEMORIES_INPUT = {
  /**
   * Agent Id
   * @description Filter memories by agent ID.
   */
  agent_id?: string;
  /**
   * App Id
   * @description Filter memories by application ID.
   */
  app_id?: string;
  /**
   * Categories
   * @description Filter memories by a list of categories; returns memories matching at least one category.
   */
  categories?: string[];
  /**
   * Fields
   * @description Specific field names for inclusion in response for each memory; if empty/unprovided, all fields are returned.
   */
  fields?: string[];
  /**
   * Filter Memories
   * @description If true, strictly applies all provided metadata filters (e.g., `user_id`, `agent_id`, `categories`).
   * @default false
   */
  filter_memories: boolean;
  /**
   * Metadata
   * @description A dictionary of key-value pairs to filter memories. Only memories matching all key-value pairs in the provided metadata will be returned.
   */
  metadata?: {
      [key: string]: unknown;
  };
  /**
   * Only Metadata Based Search
   * @description If true, search uses only metadata fields, and the `query` field is ignored.
   * @default false
   */
  only_metadata_based_search: boolean;
  /**
   * Org Id
   * @description Filter memories by organization ID.
   */
  org_id?: string;
  /**
   * Org Name
   * @description Filter memories by organization name (deprecated; use `org_id` instead).
   */
  org_name?: string;
  /**
   * Output Format
   * @description Specifies the output format for results. 'v1.0' is used if not provided. Supported: 'v1.0', 'v1.1'.
   */
  output_format?: string;
  /**
   * Project Id
   * @description Filter memories by project ID.
   */
  project_id?: string;
  /**
   * Project Name
   * @description Filter memories by project name (deprecated; use `project_id` instead).
   */
  project_name?: string;
  /**
   * Query
   * @description Natural language query to search memories; required if `only_metadata_based_search` is false.
   */
  query?: string;
  /**
   * Rerank
   * @description If true, applies an additional reranking step to search results for potentially improved relevance.
   * @default false
   */
  rerank: boolean;
  /**
   * Run Id
   * @description Filter memories by run ID.
   */
  run_id?: string;
  /**
   * Top K
   * @description Maximum number of relevant memory results to return.
   * @default 10
   */
  top_k: number;
  /**
   * User Id
   * @description Filter memories by user ID.
   */
  user_id?: string;
};

/**
 * Type of MEM0's MEM0_PERFORM_SEMANTIC_SEARCH_ON_MEMORIES tool output.
 */
type MEM0_PERFORM_SEMANTIC_SEARCH_ON_MEMORIES_OUTPUT = {
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
 * Type of MEM0's MEM0_REMOVE_A_MEMBER_FROM_THE_ORGANIZATION tool input.
 */
type MEM0_REMOVE_A_MEMBER_FROM_THE_ORGANIZATION_INPUT = {
  /**
   * Org Id
   * @description Unique identifier of the organization from which the member will be removed.
   */
  org_id?: string;
  /**
   * Username
   * @description The username of the member to be removed from the organization.
   */
  username?: string;
};

/**
 * Type of MEM0's MEM0_REMOVE_A_MEMBER_FROM_THE_ORGANIZATION tool output.
 */
type MEM0_REMOVE_A_MEMBER_FROM_THE_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description A dictionary which is typically empty or not populated on successful member removal. In case of errors, this field may contain diagnostic details.
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
 * Type of MEM0's MEM0_RETRIEVE_ALL_EVENTS_FOR_THE_CURRENTLY_LOGGED_IN_USER tool input.
 */
type MEM0_RETRIEVE_ALL_EVENTS_FOR_THE_CURRENTLY_LOGGED_IN_USER_INPUT = object;

/**
 * Type of MEM0's MEM0_RETRIEVE_ALL_EVENTS_FOR_THE_CURRENTLY_LOGGED_IN_USER tool output.
 */
type MEM0_RETRIEVE_ALL_EVENTS_FOR_THE_CURRENTLY_LOGGED_IN_USER_OUTPUT = {
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
 * Type of MEM0's MEM0_RETRIEVE_ENTITY_SPECIFIC_MEMORIES tool input.
 */
type MEM0_RETRIEVE_ENTITY_SPECIFIC_MEMORIES_INPUT = {
  /**
   * Entity Id
   * @description The unique identifier of the entity for which memories are to be retrieved.
   */
  entity_id?: string;
  /**
   * Entity Type
   * @description Type of the entity for which memories are to be retrieved.
   */
  entity_type?: string;
};

/**
 * Type of MEM0's MEM0_RETRIEVE_ENTITY_SPECIFIC_MEMORIES tool output.
 */
type MEM0_RETRIEVE_ENTITY_SPECIFIC_MEMORIES_OUTPUT = {
  /**
   * Data
   * @description Dictionary of retrieved memories associated with the entity; structure and content vary based on stored information.
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
 * Type of MEM0's MEM0_RETRIEVE_LIST_OF_MEMORY_EVENTS tool input.
 */
type MEM0_RETRIEVE_LIST_OF_MEMORY_EVENTS_INPUT = object;

/**
 * Type of MEM0's MEM0_RETRIEVE_LIST_OF_MEMORY_EVENTS tool output.
 */
type MEM0_RETRIEVE_LIST_OF_MEMORY_EVENTS_OUTPUT = {
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
 * Type of MEM0's MEM0_RETRIEVE_MEMORY_BY_UNIQUE_IDENTIFIER tool input.
 */
type MEM0_RETRIEVE_MEMORY_BY_UNIQUE_IDENTIFIER_INPUT = {
  /**
   * Memory Id
   * @description Unique identifier of the memory to retrieve.
   */
  memory_id?: string;
};

/**
 * Type of MEM0's MEM0_RETRIEVE_MEMORY_BY_UNIQUE_IDENTIFIER tool output.
 */
type MEM0_RETRIEVE_MEMORY_BY_UNIQUE_IDENTIFIER_OUTPUT = {
  /**
   * Data
   * @description Dictionary containing all stored attributes and information of the retrieved memory.
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
 * Type of MEM0's MEM0_RETRIEVE_MEMORY_HISTORY_BY_ID tool input.
 */
type MEM0_RETRIEVE_MEMORY_HISTORY_BY_ID_INPUT = {
  /**
   * Memory Id
   * @description Unique identifier of the memory for which history is to be retrieved.
   */
  memory_id?: string;
};

/**
 * Type of MEM0's MEM0_RETRIEVE_MEMORY_HISTORY_BY_ID tool output.
 */
type MEM0_RETRIEVE_MEMORY_HISTORY_BY_ID_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the historical data and changes for the specified memory; its structure varies by memory type and history nature.
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
 * Type of MEM0's MEM0_RETRIEVE_MEMORY_LIST tool input.
 */
type MEM0_RETRIEVE_MEMORY_LIST_INPUT = {
  /**
   * Agent Id
   * @description The unique identifier of the agent associated with the memories to be retrieved.
   */
  agent_id?: string;
  /**
   * App Id
   * @description The unique identifier of the application associated with the memories.
   */
  app_id?: string;
  /**
   * Categories
   * @description A list of categories to filter memories by. Memories matching any of the specified categories will be returned.
   */
  categories?: string[];
  /**
   * End Date
   * @description The end date (inclusive) for filtering memories, typically in ISO 8601 format (e.g., 'YYYY-MM-DDTHH:MM:SSZ' or 'YYYY-MM-DD').
   */
  end_date?: string;
  /**
   * Fields
   * @description A list of specific field names to consider during filtering. This might involve checking for the existence of these fields or scoping other filters (e.g., keywords) to them.
   */
  fields?: string[];
  /**
   * Keywords
   * @description Keywords to search for within the memories. The search might be across all text fields or restricted by the `fields` parameter if specified.
   */
  keywords?: string;
  /**
   * Metadata
   * @description A dictionary of key-value pairs to filter memories. Only memories matching all key-value pairs in the provided metadata will be returned.
   */
  metadata?: {
      [key: string]: unknown;
  };
  /**
   * Org Id
   * @description The unique identifier of the organization to filter memories by.
   */
  org_id?: string;
  /**
   * Org Name
   * @description The name of the organization to filter memories by. This field is deprecated and will be removed in a future version; please use `org_id` instead.
   */
  org_name?: string;
  /**
   * Page
   * @description The page number for pagination, starting from 1. Default: 1.
   */
  page?: number;
  /**
   * Page Size
   * @description The number of memories to return per page. Default: 100.
   */
  page_size?: number;
  /**
   * Project Id
   * @description The unique identifier of the project to filter memories by.
   */
  project_id?: string;
  /**
   * Project Name
   * @description The name of the project to filter memories by. This field is deprecated and will be removed in a future version; please use `project_id` instead.
   */
  project_name?: string;
  /**
   * Run Id
   * @description The unique identifier of a specific run or session to filter memories by.
   */
  run_id?: string;
  /**
   * Start Date
   * @description The start date (inclusive) for filtering memories, typically in ISO 8601 format (e.g., 'YYYY-MM-DDTHH:MM:SSZ' or 'YYYY-MM-DD').
   */
  start_date?: string;
  /**
   * User Id
   * @description The unique identifier of the user whose memories are to be retrieved.
   */
  user_id?: string;
};

/**
 * Type of MEM0's MEM0_RETRIEVE_MEMORY_LIST tool output.
 */
type MEM0_RETRIEVE_MEMORY_LIST_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the retrieved memories, typically under a key like 'items' or 'memories', along with pagination details such as total count, current page, and page size.
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
 * Type of MEM0's MEM0_SEARCH_MEMORIES_WITH_QUERY_FILTERS tool input.
 */
type MEM0_SEARCH_MEMORIES_WITH_QUERY_FILTERS_INPUT = {
  /**
   * Fields
   * @description Specific field names to include in returned memory objects (e.g., 'text', 'source', 'metadata.custom_field'). If omitted, all fields are returned.
   */
  fields?: string[];
  /**
   * Filters
   * @description Filters to refine search results. Keys are fields to filter (e.g., 'user_id', 'metadata.source'). Values are dictionaries specifying the filter operator and value(s) for that field. Supported operators: `AND`, `OR`, `IN`, `gte` (greater than or equal to), `lte` (less than or equal to), `gt` (greater than), `lt` (less than), `ne` (not equal), `icontains` (case-insensitive contains).
   */
  filters?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
  /**
   * Org Id
   * @description UUID of the organization to scope the memory search; preferred over `org_name`.
   */
  org_id?: string;
  /**
   * Org Name
   * @description Deprecated: Name of the organization to scope the memory search. Use `org_id` instead for improved accuracy and stability.
   */
  org_name?: string;
  /**
   * Project Id
   * @description UUID of the project to scope the memory search; preferred over `project_name`.
   */
  project_id?: string;
  /**
   * Project Name
   * @description Deprecated: Name of the project to scope the memory search. Use `project_id` instead for improved accuracy and stability.
   */
  project_name?: string;
  /**
   * Query
   * @description Natural language query for searching memories; primary text for matching.
   */
  query?: string;
  /**
   * Rerank
   * @description If true, applies a secondary reranking model to initial search results for improved relevance.
   * @default false
   */
  rerank: boolean;
  /**
   * Top K
   * @description Maximum number of most relevant search results to return.
   * @default 10
   */
  top_k: number;
};

/**
 * Type of MEM0's MEM0_SEARCH_MEMORIES_WITH_QUERY_FILTERS tool output.
 */
type MEM0_SEARCH_MEMORIES_WITH_QUERY_FILTERS_OUTPUT = {
  /**
   * Data
   * @description Contains the search results, typically including a list of matching memories (e.g., under 'memories' or 'results'), their relevance scores, and search metadata like total hits or pagination.
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
 * Type of MEM0's MEM0_UPDATE_MEMORY_BATCH_WITH_UUID tool input.
 */
type MEM0_UPDATE_MEMORY_BATCH_WITH_UUID_INPUT = {
  /**
   * Memories
   * @description List of memory update operations, each specifying a memory ID and its new text.
   */
  memories?: {
      /**
       * Memory Id
       * Format: uuid
       * @description The unique identifier (UUID) of the memory to be updated.
       */
      memory_id: string;
      /**
       * Text
       * @description The new text content to replace the existing content of the memory.
       */
      text: string;
  }[];
};

/**
 * Type of MEM0's MEM0_UPDATE_MEMORY_BATCH_WITH_UUID tool output.
 */
type MEM0_UPDATE_MEMORY_BATCH_WITH_UUID_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the response from the batch update operation. This typically includes a status message or details about the success or failure of the updates for each memory.
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
 * Type of MEM0's MEM0_UPDATE_MEMORY_DETAILS_BY_ID tool input.
 */
type MEM0_UPDATE_MEMORY_DETAILS_BY_ID_INPUT = {
  /**
   * Memory Id
   * @description The unique identifier of the memory whose text content is to be updated.
   */
  memory_id?: string;
  /**
   * Text
   * @description New text content to replace the memory's existing text.
   */
  text?: string;
};

/**
 * Type of MEM0's MEM0_UPDATE_MEMORY_DETAILS_BY_ID tool output.
 */
type MEM0_UPDATE_MEMORY_DETAILS_BY_ID_OUTPUT = {
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
 * Type of MEM0's MEM0_UPDATE_ORGANIZATION_MEMBER_ROLE tool input.
 */
type MEM0_UPDATE_ORGANIZATION_MEMBER_ROLE_INPUT = {
  /**
   * Org Id
   * @description Identifier of the existing organization.
   */
  org_id?: string;
  /**
   * Role
   * @description New, valid role to assign to the member (e.g., 'admin', 'member').
   */
  role?: string;
  /**
   * Username
   * @description Username of the existing member whose role will be updated.
   */
  username?: string;
};

/**
 * Type of MEM0's MEM0_UPDATE_ORGANIZATION_MEMBER_ROLE tool output.
 */
type MEM0_UPDATE_ORGANIZATION_MEMBER_ROLE_OUTPUT = {
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
 * Type of MEM0's MEM0_UPDATE_PROJECT tool input.
 */
type MEM0_UPDATE_PROJECT_INPUT = {
  /**
   * Custom Categories
   * @description New list of custom category objects. Fully replaces existing categories; an empty list (`[]`) clears them.
   */
  custom_categories?: Record<string, never>[];
  /**
   * Custom Instructions
   * @description New list of custom instructions to guide memory processing. Fully replaces existing instructions; an empty list (`[]`) clears them.
   */
  custom_instructions?: string[];
  /**
   * Description
   * @description New description for the project.
   */
  description?: string;
  /**
   * Name
   * @description New name for the project.
   */
  name?: string;
  /**
   * Org Id
   * @description Organization's unique identifier.
   */
  org_id?: string;
  /**
   * Project Id
   * @description Project's unique identifier to be updated.
   */
  project_id?: string;
};

/**
 * Type of MEM0's MEM0_UPDATE_PROJECT tool output.
 */
type MEM0_UPDATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data of the updated project.
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
 * Type of MEM0's MEM0_UPDATE_PROJECT_MEMBER_ROLE tool input.
 */
type MEM0_UPDATE_PROJECT_MEMBER_ROLE_INPUT = {
  /**
   * Org Id
   * @description Unique identifier of the organization where the project resides.
   */
  org_id?: string;
  /**
   * Project Id
   * @description Unique identifier of the project where the member's role will be updated.
   */
  project_id?: string;
  /**
   * Role
   * @description The new role to assign to the member within the project.
   */
  role?: string;
  /**
   * Username
   * @description The username of the member whose role is to be updated within the specified project.
   */
  username?: string;
};

/**
 * Type of MEM0's MEM0_UPDATE_PROJECT_MEMBER_ROLE tool output.
 */
type MEM0_UPDATE_PROJECT_MEMBER_ROLE_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the update operation, typically confirming the successful role change or providing error information.
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
 * Type map of all available tool input types for toolkit "MEM0".
 */
export type MEM0_TOOL_INPUTS = {
  ADD_MEMBER_TO_PROJECT: MEM0_ADD_MEMBER_TO_PROJECT_INPUT
  ADD_NEW_MEMORY_RECORDS: MEM0_ADD_NEW_MEMORY_RECORDS_INPUT
  ADD_ORGANIZATION_MEMBER: MEM0_ADD_ORGANIZATION_MEMBER_INPUT
  CREATE_AN_EXPORT_JOB_WITH_SCHEMA: MEM0_CREATE_AN_EXPORT_JOB_WITH_SCHEMA_INPUT
  CREATE_A_NEW_AGENT: MEM0_CREATE_A_NEW_AGENT_INPUT
  CREATE_A_NEW_AGENT_RUN: MEM0_CREATE_A_NEW_AGENT_RUN_INPUT
  CREATE_A_NEW_APPLICATION: MEM0_CREATE_A_NEW_APPLICATION_INPUT
  CREATE_A_NEW_ORGANIZATION_ENTRY: MEM0_CREATE_A_NEW_ORGANIZATION_ENTRY_INPUT
  CREATE_A_NEW_USER: MEM0_CREATE_A_NEW_USER_INPUT
  CREATE_MEMORY_ENTRY: MEM0_CREATE_MEMORY_ENTRY_INPUT
  CREATE_PROJECT: MEM0_CREATE_PROJECT_INPUT
  DELETE_AN_ORGANIZATION: MEM0_DELETE_AN_ORGANIZATION_INPUT
  DELETE_A_SPECIFIC_MEMORY_BY_ID: MEM0_DELETE_A_SPECIFIC_MEMORY_BY_ID_INPUT
  DELETE_ENTITY_BY_TYPE_AND_ID: MEM0_DELETE_ENTITY_BY_TYPE_AND_ID_INPUT
  DELETE_MEMORIES_ENDPOINT: MEM0_DELETE_MEMORIES_ENDPOINT_INPUT
  DELETE_MEMORY_BATCH_WITH_UUIDS: MEM0_DELETE_MEMORY_BATCH_WITH_UUIDS_INPUT
  DELETE_PROJECT: MEM0_DELETE_PROJECT_INPUT
  DELETE_PROJECT_MEMBER: MEM0_DELETE_PROJECT_MEMBER_INPUT
  EXPORT_DATA_BASED_ON_FILTERS: MEM0_EXPORT_DATA_BASED_ON_FILTERS_INPUT
  FETCH_DETAILED_LIST_OF_ORGANIZATIONS: MEM0_FETCH_DETAILED_LIST_OF_ORGANIZATIONS_INPUT
  FETCH_DETAILS_OF_A_SPECIFIC_ORGANIZATION: MEM0_FETCH_DETAILS_OF_A_SPECIFIC_ORGANIZATION_INPUT
  FETCH_LIST_OF_ENTITY_FILTERS: MEM0_FETCH_LIST_OF_ENTITY_FILTERS_INPUT
  FETCH_SPECIFIC_ENTITY_DETAILS_WITH_OPTIONAL_FILTERS: MEM0_FETCH_SPECIFIC_ENTITY_DETAILS_WITH_OPTIONAL_FILTERS_INPUT
  GET_ORGANIZATION_MEMBERS: MEM0_GET_ORGANIZATION_MEMBERS_INPUT
  GET_PROJECTS: MEM0_GET_PROJECTS_INPUT
  GET_PROJECT_DETAILS: MEM0_GET_PROJECT_DETAILS_INPUT
  GET_PROJECT_MEMBERS: MEM0_GET_PROJECT_MEMBERS_INPUT
  GET_USER_MEMORY_STATS: MEM0_GET_USER_MEMORY_STATS_INPUT
  LIST_ENTITIES_WITH_OPTIONAL_ORG_AND_PROJECT_FILTERS: MEM0_LIST_ENTITIES_WITH_OPTIONAL_ORG_AND_PROJECT_FILTERS_INPUT
  PERFORM_SEMANTIC_SEARCH_ON_MEMORIES: MEM0_PERFORM_SEMANTIC_SEARCH_ON_MEMORIES_INPUT
  REMOVE_A_MEMBER_FROM_THE_ORGANIZATION: MEM0_REMOVE_A_MEMBER_FROM_THE_ORGANIZATION_INPUT
  RETRIEVE_ALL_EVENTS_FOR_THE_CURRENTLY_LOGGED_IN_USER: MEM0_RETRIEVE_ALL_EVENTS_FOR_THE_CURRENTLY_LOGGED_IN_USER_INPUT
  RETRIEVE_ENTITY_SPECIFIC_MEMORIES: MEM0_RETRIEVE_ENTITY_SPECIFIC_MEMORIES_INPUT
  RETRIEVE_LIST_OF_MEMORY_EVENTS: MEM0_RETRIEVE_LIST_OF_MEMORY_EVENTS_INPUT
  RETRIEVE_MEMORY_BY_UNIQUE_IDENTIFIER: MEM0_RETRIEVE_MEMORY_BY_UNIQUE_IDENTIFIER_INPUT
  RETRIEVE_MEMORY_HISTORY_BY_ID: MEM0_RETRIEVE_MEMORY_HISTORY_BY_ID_INPUT
  RETRIEVE_MEMORY_LIST: MEM0_RETRIEVE_MEMORY_LIST_INPUT
  SEARCH_MEMORIES_WITH_QUERY_FILTERS: MEM0_SEARCH_MEMORIES_WITH_QUERY_FILTERS_INPUT
  UPDATE_MEMORY_BATCH_WITH_UUID: MEM0_UPDATE_MEMORY_BATCH_WITH_UUID_INPUT
  UPDATE_MEMORY_DETAILS_BY_ID: MEM0_UPDATE_MEMORY_DETAILS_BY_ID_INPUT
  UPDATE_ORGANIZATION_MEMBER_ROLE: MEM0_UPDATE_ORGANIZATION_MEMBER_ROLE_INPUT
  UPDATE_PROJECT: MEM0_UPDATE_PROJECT_INPUT
  UPDATE_PROJECT_MEMBER_ROLE: MEM0_UPDATE_PROJECT_MEMBER_ROLE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MEM0".
 */
export type MEM0_TOOL_OUTPUTS = {
  ADD_MEMBER_TO_PROJECT: MEM0_ADD_MEMBER_TO_PROJECT_OUTPUT
  ADD_NEW_MEMORY_RECORDS: MEM0_ADD_NEW_MEMORY_RECORDS_OUTPUT
  ADD_ORGANIZATION_MEMBER: MEM0_ADD_ORGANIZATION_MEMBER_OUTPUT
  CREATE_AN_EXPORT_JOB_WITH_SCHEMA: MEM0_CREATE_AN_EXPORT_JOB_WITH_SCHEMA_OUTPUT
  CREATE_A_NEW_AGENT: MEM0_CREATE_A_NEW_AGENT_OUTPUT
  CREATE_A_NEW_AGENT_RUN: MEM0_CREATE_A_NEW_AGENT_RUN_OUTPUT
  CREATE_A_NEW_APPLICATION: MEM0_CREATE_A_NEW_APPLICATION_OUTPUT
  CREATE_A_NEW_ORGANIZATION_ENTRY: MEM0_CREATE_A_NEW_ORGANIZATION_ENTRY_OUTPUT
  CREATE_A_NEW_USER: MEM0_CREATE_A_NEW_USER_OUTPUT
  CREATE_MEMORY_ENTRY: MEM0_CREATE_MEMORY_ENTRY_OUTPUT
  CREATE_PROJECT: MEM0_CREATE_PROJECT_OUTPUT
  DELETE_AN_ORGANIZATION: MEM0_DELETE_AN_ORGANIZATION_OUTPUT
  DELETE_A_SPECIFIC_MEMORY_BY_ID: MEM0_DELETE_A_SPECIFIC_MEMORY_BY_ID_OUTPUT
  DELETE_ENTITY_BY_TYPE_AND_ID: MEM0_DELETE_ENTITY_BY_TYPE_AND_ID_OUTPUT
  DELETE_MEMORIES_ENDPOINT: MEM0_DELETE_MEMORIES_ENDPOINT_OUTPUT
  DELETE_MEMORY_BATCH_WITH_UUIDS: MEM0_DELETE_MEMORY_BATCH_WITH_UUIDS_OUTPUT
  DELETE_PROJECT: MEM0_DELETE_PROJECT_OUTPUT
  DELETE_PROJECT_MEMBER: MEM0_DELETE_PROJECT_MEMBER_OUTPUT
  EXPORT_DATA_BASED_ON_FILTERS: MEM0_EXPORT_DATA_BASED_ON_FILTERS_OUTPUT
  FETCH_DETAILED_LIST_OF_ORGANIZATIONS: MEM0_FETCH_DETAILED_LIST_OF_ORGANIZATIONS_OUTPUT
  FETCH_DETAILS_OF_A_SPECIFIC_ORGANIZATION: MEM0_FETCH_DETAILS_OF_A_SPECIFIC_ORGANIZATION_OUTPUT
  FETCH_LIST_OF_ENTITY_FILTERS: MEM0_FETCH_LIST_OF_ENTITY_FILTERS_OUTPUT
  FETCH_SPECIFIC_ENTITY_DETAILS_WITH_OPTIONAL_FILTERS: MEM0_FETCH_SPECIFIC_ENTITY_DETAILS_WITH_OPTIONAL_FILTERS_OUTPUT
  GET_ORGANIZATION_MEMBERS: MEM0_GET_ORGANIZATION_MEMBERS_OUTPUT
  GET_PROJECTS: MEM0_GET_PROJECTS_OUTPUT
  GET_PROJECT_DETAILS: MEM0_GET_PROJECT_DETAILS_OUTPUT
  GET_PROJECT_MEMBERS: MEM0_GET_PROJECT_MEMBERS_OUTPUT
  GET_USER_MEMORY_STATS: MEM0_GET_USER_MEMORY_STATS_OUTPUT
  LIST_ENTITIES_WITH_OPTIONAL_ORG_AND_PROJECT_FILTERS: MEM0_LIST_ENTITIES_WITH_OPTIONAL_ORG_AND_PROJECT_FILTERS_OUTPUT
  PERFORM_SEMANTIC_SEARCH_ON_MEMORIES: MEM0_PERFORM_SEMANTIC_SEARCH_ON_MEMORIES_OUTPUT
  REMOVE_A_MEMBER_FROM_THE_ORGANIZATION: MEM0_REMOVE_A_MEMBER_FROM_THE_ORGANIZATION_OUTPUT
  RETRIEVE_ALL_EVENTS_FOR_THE_CURRENTLY_LOGGED_IN_USER: MEM0_RETRIEVE_ALL_EVENTS_FOR_THE_CURRENTLY_LOGGED_IN_USER_OUTPUT
  RETRIEVE_ENTITY_SPECIFIC_MEMORIES: MEM0_RETRIEVE_ENTITY_SPECIFIC_MEMORIES_OUTPUT
  RETRIEVE_LIST_OF_MEMORY_EVENTS: MEM0_RETRIEVE_LIST_OF_MEMORY_EVENTS_OUTPUT
  RETRIEVE_MEMORY_BY_UNIQUE_IDENTIFIER: MEM0_RETRIEVE_MEMORY_BY_UNIQUE_IDENTIFIER_OUTPUT
  RETRIEVE_MEMORY_HISTORY_BY_ID: MEM0_RETRIEVE_MEMORY_HISTORY_BY_ID_OUTPUT
  RETRIEVE_MEMORY_LIST: MEM0_RETRIEVE_MEMORY_LIST_OUTPUT
  SEARCH_MEMORIES_WITH_QUERY_FILTERS: MEM0_SEARCH_MEMORIES_WITH_QUERY_FILTERS_OUTPUT
  UPDATE_MEMORY_BATCH_WITH_UUID: MEM0_UPDATE_MEMORY_BATCH_WITH_UUID_OUTPUT
  UPDATE_MEMORY_DETAILS_BY_ID: MEM0_UPDATE_MEMORY_DETAILS_BY_ID_OUTPUT
  UPDATE_ORGANIZATION_MEMBER_ROLE: MEM0_UPDATE_ORGANIZATION_MEMBER_ROLE_OUTPUT
  UPDATE_PROJECT: MEM0_UPDATE_PROJECT_OUTPUT
  UPDATE_PROJECT_MEMBER_ROLE: MEM0_UPDATE_PROJECT_MEMBER_ROLE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MEM0 toolkit.
 */
export const MEM0 = {
  slug: "mem0",
  tools: {
    /**
     * Adds an existing user to a project (identified by `project id` within organization `org id`), assigning a valid system role.
     */
    ADD_MEMBER_TO_PROJECT: "MEM0_ADD_MEMBER_TO_PROJECT",
    /**
     * Stores new memory records from a list of messages, optionally inferring structured content; requires association via `agent id`, `user id`, `app id`, or `run id`.
     */
    ADD_NEW_MEMORY_RECORDS: "MEM0_ADD_NEW_MEMORY_RECORDS",
    /**
     * Adds a new member, who must be a registered user, to an organization, assigning them a specific role.
     */
    ADD_ORGANIZATION_MEMBER: "MEM0_ADD_ORGANIZATION_MEMBER",
    /**
     * Initiates an asynchronous job to export memories, structured by a schema provided in the request body and allowing optional filters.
     */
    CREATE_AN_EXPORT_JOB_WITH_SCHEMA: "MEM0_CREATE_AN_EXPORT_JOB_WITH_SCHEMA",
    /**
     * Creates a new agent with a unique `agent id` and an optional `name`; additional metadata may be assigned by the system.
     */
    CREATE_A_NEW_AGENT: "MEM0_CREATE_A_NEW_AGENT",
    /**
     * Creates a new agent run in the mem0.ai system.
     */
    CREATE_A_NEW_AGENT_RUN: "MEM0_CREATE_A_NEW_AGENT_RUN",
    /**
     * Creates a new application, allowing metadata to be passed in the request body (not an explicit field in this action's request model); ensure `app id` is unique to avoid potential errors or unintended updates.
     */
    CREATE_A_NEW_APPLICATION: "MEM0_CREATE_A_NEW_APPLICATION",
    /**
     * Creates a new organization entry using the provided name and returns its details.
     */
    CREATE_A_NEW_ORGANIZATION_ENTRY: "MEM0_CREATE_A_NEW_ORGANIZATION_ENTRY",
    /**
     * Creates a new user with the specified unique `user id` and supports associating `metadata` (not part of the request schema fields).
     */
    CREATE_A_NEW_USER: "MEM0_CREATE_A_NEW_USER",
    /**
     * Lists/searches existing memory entries with filtering and pagination; critically, this action retrieves memories and does *not* create new ones, despite its name.
     */
    CREATE_MEMORY_ENTRY: "MEM0_CREATE_MEMORY_ENTRY",
    /**
     * Creates a new project with a given name within an organization that must already exist.
     */
    CREATE_PROJECT: "MEM0_CREATE_PROJECT",
    /**
     * Permanently deletes an existing organization identified by its unique id.
     */
    DELETE_AN_ORGANIZATION: "MEM0_DELETE_AN_ORGANIZATION",
    /**
     * Permanently deletes a specific memory by its unique id; ensure the `memory id` exists as this operation is irreversible.
     */
    DELETE_A_SPECIFIC_MEMORY_BY_ID: "MEM0_DELETE_A_SPECIFIC_MEMORY_BY_ID",
    /**
     * Call to permanently and irreversibly hard-delete an existing entity (user, agent, app, or run) and all its associated data, using its type and id.
     */
    DELETE_ENTITY_BY_TYPE_AND_ID: "MEM0_DELETE_ENTITY_BY_TYPE_AND_ID",
    /**
     * Deletes memories matching specified filter criteria; omitting all filters may result in deleting all memories. required: at least one of agent id, user id, app id, or run id must be provided.
     */
    DELETE_MEMORIES_ENDPOINT: "MEM0_DELETE_MEMORIES_ENDPOINT",
    /**
     * Deletes a batch of up to 1000 existing memories, identified by their uuids, in a single api call.
     */
    DELETE_MEMORY_BATCH_WITH_UUIDS: "MEM0_DELETE_MEMORY_BATCH_WITH_UUIDS",
    /**
     * Permanently deletes a specific project and all its associated data from an organization; this action cannot be undone and requires the project to exist within the specified organization.
     */
    DELETE_PROJECT: "MEM0_DELETE_PROJECT",
    /**
     * Removes an existing member, specified by username, from a project, immediately revoking their project-specific access; the user is not removed from the organization.
     */
    DELETE_PROJECT_MEMBER: "MEM0_DELETE_PROJECT_MEMBER",
    /**
     * Retrieves memory export data, optionally filtered by various identifiers (e.g., user id); without filters, it may return all accessible or recent exports based on default behavior.
     */
    EXPORT_DATA_BASED_ON_FILTERS: "MEM0_EXPORT_DATA_BASED_ON_FILTERS",
    /**
     * Retrieves a summary list of organizations for administrative oversight; returns summary data (names, ids), not exhaustive details, despite 'detailed' in the name.
     */
    FETCH_DETAILED_LIST_OF_ORGANIZATIONS: "MEM0_FETCH_DETAILED_LIST_OF_ORGANIZATIONS",
    /**
     * Fetches comprehensive details for an organization using its `org id`; the `org id` must be valid and for an existing organization.
     */
    FETCH_DETAILS_OF_A_SPECIFIC_ORGANIZATION: "MEM0_FETCH_DETAILS_OF_A_SPECIFIC_ORGANIZATION",
    /**
     * Retrieves predefined filter definitions for entities (e.g., by type, creation/modification date); returns definitions only, not filtered entity data.
     */
    FETCH_LIST_OF_ENTITY_FILTERS: "MEM0_FETCH_LIST_OF_ENTITY_FILTERS",
    /**
     * Fetches detailed information for an existing entity (user, agent, app, or run) identified by its type and unique id.
     */
    FETCH_SPECIFIC_ENTITY_DETAILS_WITH_OPTIONAL_FILTERS: "MEM0_FETCH_SPECIFIC_ENTITY_DETAILS_WITH_OPTIONAL_FILTERS",
    /**
     * Fetches a list of members for a specified, existing organization.
     */
    GET_ORGANIZATION_MEMBERS: "MEM0_GET_ORGANIZATION_MEMBERS",
    /**
     * Retrieves all projects for a given organization `org id` to which the caller has access.
     */
    GET_PROJECTS: "MEM0_GET_PROJECTS",
    /**
     * Fetches comprehensive details for a specified project within an organization.
     */
    GET_PROJECT_DETAILS: "MEM0_GET_PROJECT_DETAILS",
    /**
     * Retrieves all members for a specified project within an organization.
     */
    GET_PROJECT_MEMBERS: "MEM0_GET_PROJECT_MEMBERS",
    /**
     * Retrieves a summary of the authenticated user's memory activity, including total memories created, search events, and add events.
     */
    GET_USER_MEMORY_STATS: "MEM0_GET_USER_MEMORY_STATS",
    /**
     * Retrieves a list of entities, optionally filtered by organization or project (prefer `org id`/`project id` over deprecated `org name`/`project name`), noting results may be summaries and subject to limits.
     */
    LIST_ENTITIES_WITH_OPTIONAL_ORG_AND_PROJECT_FILTERS: "MEM0_LIST_ENTITIES_WITH_OPTIONAL_ORG_AND_PROJECT_FILTERS",
    /**
     * Searches memories semantically using a natural language query (required if `only metadata based search` is false) and/or metadata filters. required: at least one of agent id, user id, app id, or run id must be provided. when `only metadata based search` is true, the `metadata` parameter is required.
     */
    PERFORM_SEMANTIC_SEARCH_ON_MEMORIES: "MEM0_PERFORM_SEMANTIC_SEARCH_ON_MEMORIES",
    /**
     * Removes a member, specified by their username, from an existing organization of which they are currently a member.
     */
    REMOVE_A_MEMBER_FROM_THE_ORGANIZATION: "MEM0_REMOVE_A_MEMBER_FROM_THE_ORGANIZATION",
    /**
     * Retrieves a paginated list of events for the authenticated user, filterable and paginable via url query parameters. this is a read-only operation that does not modify data. supported query parameters (applied directly to the request url): - `event type` (str, optional): filters events by their type (e.g., 'add', 'search'). - `start date` (str, optional): filters events on or after this date (format: yyyy-mm-dd). - `end date` (str, optional): filters events on or before this date (format: yyyy-mm-dd). - `page` (int, optional): specifies the page number for paginated results. - `page size` (int, optional): number of events per page (default: 50, max: 100).
     */
    RETRIEVE_ALL_EVENTS_FOR_THE_CURRENTLY_LOGGED_IN_USER: "MEM0_RETRIEVE_ALL_EVENTS_FOR_THE_CURRENTLY_LOGGED_IN_USER",
    /**
     * Retrieves all memories (e.g., user preferences, chat history) for a specific entity from the mem0 platform, using its `entity type` and `entity id`; ensure the entity exists.
     */
    RETRIEVE_ENTITY_SPECIFIC_MEMORIES: "MEM0_RETRIEVE_ENTITY_SPECIFIC_MEMORIES",
    /**
     * Retrieves a chronological list of all memory events (e.g., user inputs, ai responses) from the mem0 platform, providing interaction history and context for ai assistants.
     */
    RETRIEVE_LIST_OF_MEMORY_EVENTS: "MEM0_RETRIEVE_LIST_OF_MEMORY_EVENTS",
    /**
     * Retrieves a complete memory entry by its unique identifier; `memory id` must be valid and for an existing memory.
     */
    RETRIEVE_MEMORY_BY_UNIQUE_IDENTIFIER: "MEM0_RETRIEVE_MEMORY_BY_UNIQUE_IDENTIFIER",
    /**
     * Retrieves the complete version history for an existing memory, using its unique `memory id`, to inspect its evolution or audit changes.
     */
    RETRIEVE_MEMORY_HISTORY_BY_ID: "MEM0_RETRIEVE_MEMORY_HISTORY_BY_ID",
    /**
     * Retrieves a list of memories, supporting pagination and diverse filtering (e.g., by ids, metadata, keywords, date ranges); ensure dates are iso 8601 and `page`/`page size` (if used) are positive integers. required: at least one of agent id, user id, app id, or run id must be provided.
     */
    RETRIEVE_MEMORY_LIST: "MEM0_RETRIEVE_MEMORY_LIST",
    /**
     * Semantically searches memories using a natural language query and mandatory structured filters, offering options to rerank results and select specific fields; any provided `org id` or `project id` must reference a valid existing entity.
     */
    SEARCH_MEMORIES_WITH_QUERY_FILTERS: "MEM0_SEARCH_MEMORIES_WITH_QUERY_FILTERS",
    /**
     * Updates text for up to 1000 memories in a single batch, using their uuids.
     */
    UPDATE_MEMORY_BATCH_WITH_UUID: "MEM0_UPDATE_MEMORY_BATCH_WITH_UUID",
    /**
     * Updates the text content of an existing memory, identified by its `memory id`.
     */
    UPDATE_MEMORY_DETAILS_BY_ID: "MEM0_UPDATE_MEMORY_DETAILS_BY_ID",
    /**
     * Updates the role of an existing member to a new valid role within an existing organization.
     */
    UPDATE_ORGANIZATION_MEMBER_ROLE: "MEM0_UPDATE_ORGANIZATION_MEMBER_ROLE",
    /**
     * Updates a project by `project id` within an `org id`, modifying only provided fields (name, description, custom instructions, custom categories); list fields are fully replaced (cleared by `[]`), other omitted/null fields remain unchanged.
     */
    UPDATE_PROJECT: "MEM0_UPDATE_PROJECT",
    /**
     * Updates the role of a specific member within a designated project, ensuring the new role is valid and recognized by the system.
     */
    UPDATE_PROJECT_MEMBER_ROLE: "MEM0_UPDATE_PROJECT_MEMBER_ROLE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MEM0".
 */
export type MEM0_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MEM0".
 */
export type MEM0_TRIGGER_EVENTS = {}
