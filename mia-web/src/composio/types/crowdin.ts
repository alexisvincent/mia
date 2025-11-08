// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CROWDIN's CROWDIN_ADD_BRANCH tool input.
 */
type CROWDIN_ADD_BRANCH_INPUT = {
  /**
   * Export Pattern
   * @description Export pattern for the branch
   * @default null
   */
  exportPattern: string | null;
  /**
   * Name
   * @description Name of the branch
   */
  name?: string;
  /**
   * Priority
   * @description Priority of the branch (normal, high, urgent)
   * @default null
   * @enum {string|null}
   */
  priority: "normal" | "high" | "urgent" | null;
  /**
   * Project Id
   * @description Identifier of the Crowdin project
   */
  projectId?: string;
  /**
   * Title
   * @description Displayed name of the branch
   * @default null
   */
  title: string | null;
};

/**
 * Type of CROWDIN's CROWDIN_ADD_BRANCH tool output.
 */
type CROWDIN_ADD_BRANCH_OUTPUT = {
  /** Data */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Branch creation timestamp
       */
      createdAt: string;
      /**
       * Export Pattern
       * @description Export pattern for the branch
       * @default null
       */
      exportPattern: string | null;
      /**
       * Id
       * @description Branch ID
       */
      id: number;
      /**
       * Name
       * @description Name of the branch
       */
      name: string;
      /**
       * Priority
       * @description Priority of the branch
       * @enum {string}
       */
      priority: "normal" | "high" | "urgent";
      /**
       * Project Id
       * @description Project ID
       */
      projectId: number;
      /**
       * Title
       * @description Displayed name of the branch
       * @default null
       */
      title: string | null;
      /**
       * Updated At
       * Format: date-time
       * @description Branch last update timestamp
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
 * Type of CROWDIN's CROWDIN_ADD_FILE tool input.
 */
type CROWDIN_ADD_FILE_INPUT = {
  /**
   * Branch Id
   * @description Branch identifier if adding to a specific branch
   * @default null
   */
  branchId: number | null;
  /**
   * Directory Id
   * @description Directory identifier if adding under a specific directory
   * @default null
   */
  directoryId: number | null;
  /**
   * Export Options
   * @description Export options specific to the file type
   * @default null
   */
  exportOptions: {
      [key: string]: unknown;
  } | null;
  /**
   * Import Options
   * @description Import options specific to the file type
   * @default null
   */
  importOptions: {
      [key: string]: unknown;
  } | null;
  /**
   * Name
   * @description Target file name in the project, including extension
   */
  name?: string;
  /**
   * Project Id
   * @description Unique identifier of the Crowdin project
   */
  projectId?: number;
  /**
   * Storage Id
   * @description Identifier of the previously uploaded file in Crowdin storage
   */
  storageId?: number;
  /**
   * Type
   * @description File format, e.g., 'android', 'ios'. If omitted, inferred from extension
   * @default null
   */
  type: string | null;
};

/**
 * Type of CROWDIN's CROWDIN_ADD_FILE tool output.
 */
type CROWDIN_ADD_FILE_OUTPUT = {
  /**
   * Data
   * @description Details of the created file
   */
  data?: {
      /**
       * Branch Id
       * @description Branch identifier
       * @default null
       */
      branchId: number | null;
      /**
       * Created At
       * @description Creation date (ISO 8601)
       */
      createdAt: string;
      /**
       * Directory Id
       * @description Directory identifier
       * @default null
       */
      directoryId: number | null;
      /**
       * Id
       * @description File identifier
       */
      id: number;
      /**
       * Name
       * @description File name
       */
      name: string;
      /**
       * Path
       * @description File path in the Crowdin project
       */
      path: string;
      /**
       * Project Id
       * @description Project identifier
       */
      projectId: number;
      /**
       * Revision
       * @description File revision number
       */
      revision: number;
      /**
       * Status
       * @description File status
       */
      status: string;
      /**
       * Storage Id
       * @description Storage identifier
       */
      storageId: number;
      /**
       * Title
       * @description File title
       */
      title: string;
      /**
       * Type
       * @description File type
       */
      type: string;
      /**
       * Updated At
       * @description Update date (ISO 8601)
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
 * Type of CROWDIN's CROWDIN_ADD_LABEL tool input.
 */
type CROWDIN_ADD_LABEL_INPUT = {
  /**
   * Description
   * @description Optional label description, up to 1000 characters
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Name of the label, 1-50 characters long
   */
  name?: string;
  /**
   * Project Id
   * @description ID of the Crowdin project where the label will be created
   */
  project_id?: number;
};

/**
 * Type of CROWDIN's CROWDIN_ADD_LABEL tool output.
 */
type CROWDIN_ADD_LABEL_OUTPUT = {
  /**
   * Data
   * @description Created label details
   */
  data?: {
      /**
       * Created At
       * @description Label creation timestamp in ISO 8601 format
       */
      createdAt: string;
      /**
       * Description
       * @description Label description
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Label ID
       */
      id: number;
      /**
       * Name
       * @description Label name
       */
      name: string;
      /**
       * Project Id
       * @description Project ID
       */
      projectId: number;
      /**
       * Updated At
       * @description Label last update timestamp in ISO 8601 format
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
 * Type of CROWDIN's CROWDIN_ADD_PROJECT tool input.
 */
type CROWDIN_ADD_PROJECT_INPUT = {
  /**
   * Cname
   * @description Custom domain name for Enterprise projects.
   * @default null
   */
  cname: string | null;
  /**
   * Description
   * @description Optional human-readable project description.
   * @default null
   */
  description: string | null;
  /**
   * Logo
   * @description Logo file name within Enterprise organization.
   * @default null
   */
  logo: string | null;
  /**
   * Name
   * @description Project name, e.g., 'My Website Localization'.
   */
  name?: string;
  /**
   * Normalize Placeholder
   * @description Enable placeholder normalization across languages.
   * @default null
   */
  normalizePlaceholder: boolean | null;
  /**
   * Notification Settings
   * @description Notification settings object specifying email triggers.
   * @default null
   */
  notificationSettings: {
      [key: string]: unknown;
  } | null;
  /**
   * Source Language Id
   * @description Source language identifier, for example 'en'.
   */
  sourceLanguageId?: string;
  /**
   * Source Language Mapping
   * @description Mapping of directory names to language identifiers.
   * @default null
   */
  sourceLanguageMapping: {
      [key: string]: string;
  } | null;
  /**
   * Target Language Ids
   * @description List of target language identifiers, for example ['fr', 'de'].
   */
  targetLanguageIds?: string[];
  /**
   * Type
   * @description Project type, integer code: 0 for file-based.
   * @default null
   */
  type: number | null;
  /**
   * Visibility
   * @description Project visibility, either 'private' or 'open'.
   * @default null
   * @enum {string|null}
   */
  visibility: "private" | "open" | null;
};

/**
 * Type of CROWDIN's CROWDIN_ADD_PROJECT tool output.
 */
type CROWDIN_ADD_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cname
       * @description Custom domain name for project.
       * @default null
       */
      cname: string | null;
      /**
       * Created At
       * @description Project creation timestamp in ISO 8601 format.
       */
      createdAt: string;
      /**
       * Description
       * @description Project description.
       * @default null
       */
      description: string | null;
      /**
       * Group Id
       * @description Group ID if the project belongs to a group.
       * @default null
       */
      groupId: number | null;
      /**
       * Id
       * @description Unique project identifier.
       */
      id: number;
      /**
       * Language Access Policy
       * @description Language access policy.
       * @default null
       */
      languageAccessPolicy: string | null;
      /**
       * Last Activity
       * @description Last activity timestamp in ISO 8601 format.
       */
      lastActivity: string;
      /**
       * Logo
       * @description Logo file name for project.
       * @default null
       */
      logo: string | null;
      /**
       * Name
       * @description Project name.
       */
      name: string;
      /**
       * Source Language Id
       * @description Source language identifier.
       */
      sourceLanguageId: string;
      /**
       * Target Language Ids
       * @description List of target language identifiers.
       */
      targetLanguageIds: string[];
      /**
       * Target Languages
       * @description List of target language detail objects.
       */
      targetLanguages: {
          [key: string]: unknown;
      }[];
      /**
       * Updated At
       * @description Last update timestamp in ISO 8601 format.
       */
      updatedAt: string;
      /**
       * User Id
       * @description User ID of the project owner.
       */
      userId: number;
      /**
       * Visibility
       * @description Project visibility.
       */
      visibility: string;
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
 * Type of CROWDIN's CROWDIN_ADD_WEBHOOK tool input.
 */
type CROWDIN_ADD_WEBHOOK_INPUT = {
  /**
   * Events
   * @description List of Crowdin event identifiers that trigger this webhook
   */
  events?: string[];
  /**
   * Headers
   * @description Additional HTTP headers sent with each webhook request
   * @default null
   */
  headers: {
      [key: string]: string;
  } | null;
  /**
   * Is Active
   * @description Whether the webhook is immediately active upon creation
   * @default true
   */
  isActive: boolean | null;
  /**
   * Name
   * @description Unique name of the webhook in the project
   */
  name?: string;
  /**
   * Payload
   * @description Custom JSON payload template for notifications (stringified JSON)
   * @default null
   */
  payload: string | null;
  /**
   * Project Id
   * @description Identifier of the Crowdin project
   */
  projectId?: string;
  /**
   * Request Type
   * @description HTTP method used to deliver webhook payloads (post or get)
   * @default null
   * @enum {string|null}
   */
  requestType: "post" | "get" | null;
  /**
   * Url
   * Format: uri
   * @description Destination endpoint URL for webhook notifications
   */
  url?: unknown;
};

/**
 * Type of CROWDIN's CROWDIN_ADD_WEBHOOK tool output.
 */
type CROWDIN_ADD_WEBHOOK_OUTPUT = {
  /** Data */
  data?: {
      /**
       * Batch
       * @description If true, notifications will be sent in batches
       */
      batch: boolean;
      /**
       * Created At
       * @description Creation timestamp in ISO 8601 format
       */
      createdAt: string;
      /**
       * Events
       * @description Events that trigger this webhook
       */
      events: string[];
      /**
       * Headers
       * @description Custom headers for the webhook request
       */
      headers: {
          [key: string]: string;
      };
      /**
       * Id
       * @description Unique identifier of the created webhook
       */
      id: number;
      /**
       * Is Active
       * @description Whether the webhook is enabled
       */
      isActive: boolean;
      /**
       * Name
       * @description Name of the webhook
       */
      name: string;
      /**
       * Payload
       * @description Custom payload or null if not set
       * @default null
       */
      payload: string | null;
      /**
       * Request Type
       * @description HTTP method used for payload delivery
       */
      requestType: string;
      /**
       * Retries
       * @description Number of retry attempts configured
       */
      retries: number;
      /**
       * Updated At
       * @description Last update timestamp in ISO 8601 format
       */
      updatedAt: string;
      /**
       * Url
       * @description Endpoint URL of the webhook
       */
      url: string;
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
 * Type of CROWDIN's CROWDIN_ASSIGN_LABEL_TO_STRINGS tool input.
 */
type CROWDIN_ASSIGN_LABEL_TO_STRINGS_INPUT = {
  /**
   * Label Id
   * @description Identifier of the label to assign
   */
  labelId?: number;
  /**
   * Project Id
   * @description Identifier of the Crowdin project
   */
  projectId?: string;
  /**
   * String Ids
   * @description List of string IDs to assign the label to
   */
  stringIds?: number[];
};

/**
 * Type of CROWDIN's CROWDIN_ASSIGN_LABEL_TO_STRINGS tool output.
 */
type CROWDIN_ASSIGN_LABEL_TO_STRINGS_OUTPUT = {
  /**
   * Data
   * @description List of strings with updated label assignments
   */
  data?: {
      /**
       * Id
       * @description String ID
       */
      id: number;
      /**
       * Labels
       * @description List of assigned label IDs
       */
      labels: number[];
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
 * Type of CROWDIN's CROWDIN_DELETE_BRANCH tool input.
 */
type CROWDIN_DELETE_BRANCH_INPUT = {
  /**
   * Branch Id
   * @description Unique identifier of the branch to delete
   */
  branchId?: number;
  /**
   * Project Id
   * @description Unique identifier of the Crowdin project
   */
  projectId?: number;
};

/**
 * Type of CROWDIN's CROWDIN_DELETE_BRANCH tool output.
 */
type CROWDIN_DELETE_BRANCH_OUTPUT = {
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
 * Type of CROWDIN's CROWDIN_DELETE_LABEL tool input.
 */
type CROWDIN_DELETE_LABEL_INPUT = {
  /**
   * Label Id
   * @description ID of the label to delete
   */
  label_id?: number;
  /**
   * Project Id
   * @description ID of the Crowdin project containing the label
   */
  project_id?: number;
};

/**
 * Type of CROWDIN's CROWDIN_DELETE_LABEL tool output.
 */
type CROWDIN_DELETE_LABEL_OUTPUT = {
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
 * Type of CROWDIN's CROWDIN_DELETE_PROJECT tool input.
 */
type CROWDIN_DELETE_PROJECT_INPUT = {
  /**
   * Project Id
   * @description ID of the Crowdin project to delete
   */
  project_id?: number;
};

/**
 * Type of CROWDIN's CROWDIN_DELETE_PROJECT tool output.
 */
type CROWDIN_DELETE_PROJECT_OUTPUT = {
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
 * Type of CROWDIN's CROWDIN_DELETE_WEBHOOK tool input.
 */
type CROWDIN_DELETE_WEBHOOK_INPUT = {
  /**
   * Project Id
   * @description Identifier of the Crowdin project
   */
  projectId?: string;
  /**
   * Webhook Id
   * @description Identifier of the webhook to delete
   */
  webhookId?: number;
};

/**
 * Type of CROWDIN's CROWDIN_DELETE_WEBHOOK tool output.
 */
type CROWDIN_DELETE_WEBHOOK_OUTPUT = {
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
 * Type of CROWDIN's CROWDIN_EDIT_FILE tool input.
 */
type CROWDIN_EDIT_FILE_INPUT = {
  /**
   * File Id
   * @description Unique identifier of the file to update
   */
  file_id?: number;
  /**
   * Operations
   * @description List of JSON-Patch operations to apply; at least one operation is required
   */
  operations?: {
      /**
       * Op
       * @description Operation type. Only 'replace' is supported.
       * @constant
       */
      op: "replace";
      /**
       * Path
       * @description JSON-Pointer path to the field to update. Only '/name' is supported.
       * @constant
       */
      path: "/name";
      /**
       * Value
       * @description New value for the specified field.
       */
      value: string;
  }[];
  /**
   * Project Id
   * @description Unique identifier of the Crowdin project
   */
  project_id?: number;
};

/**
 * Type of CROWDIN's CROWDIN_EDIT_FILE tool output.
 */
type CROWDIN_EDIT_FILE_OUTPUT = {
  /**
   * Data
   * @description Updated file details
   */
  data?: {
      /**
       * Branch Id
       * @description Branch identifier, if any
       * @default null
       */
      branchId: number | null;
      /**
       * Created At
       * @description Creation timestamp in ISO 8601 format
       */
      createdAt: string;
      /**
       * Directory Id
       * @description Directory identifier, if any
       * @default null
       */
      directoryId: number | null;
      /**
       * Export Options
       * @description Export options configuration
       * @default null
       */
      exportOptions: {
          [key: string]: unknown;
      } | null;
      /**
       * Id
       * @description File identifier
       */
      id: number;
      /**
       * Import Options
       * @description Import options configuration
       * @default null
       */
      importOptions: {
          [key: string]: unknown;
      } | null;
      /**
       * Name
       * @description File name
       */
      name: string;
      /**
       * Path
       * @description Full path of the file in project
       */
      path: string;
      /**
       * Priority
       * @description File priority setting
       */
      priority: string;
      /**
       * Project Id
       * @description Project identifier
       */
      projectId: number;
      /**
       * Revision Id
       * @description Current revision identifier
       */
      revisionId: number;
      /**
       * Status
       * @description Current status of the file
       */
      status: string;
      /**
       * Title
       * @description File title, if any
       * @default null
       */
      title: string | null;
      /**
       * Type
       * @description File type (e.g., 'json', 'po')
       */
      type: string;
      /**
       * Updated At
       * @description Last update timestamp in ISO 8601 format
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
 * Type of CROWDIN's CROWDIN_EDIT_LABEL tool input.
 */
type CROWDIN_EDIT_LABEL_INPUT = {
  /**
   * Description
   * @description New description for the label, up to 1000 characters
   * @default null
   */
  description: string | null;
  /**
   * Label Id
   * @description ID of the label to edit
   */
  label_id?: number;
  /**
   * Name
   * @description New name for the label, 1-50 characters long
   * @default null
   */
  name: string | null;
  /**
   * Project Id
   * @description ID of the Crowdin project containing the label
   */
  project_id?: number;
};

/**
 * Type of CROWDIN's CROWDIN_EDIT_LABEL tool output.
 */
type CROWDIN_EDIT_LABEL_OUTPUT = {
  /**
   * Data
   * @description Edited label details
   */
  data?: {
      /**
       * Created At
       * @description Label creation timestamp in ISO 8601 format
       */
      createdAt: string;
      /**
       * Description
       * @description Label description
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Label ID
       */
      id: number;
      /**
       * Name
       * @description Label name
       */
      name: string;
      /**
       * Project Id
       * @description Project ID
       */
      projectId: number;
      /**
       * Updated At
       * @description Label last update timestamp in ISO 8601 format
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
 * Type of CROWDIN's CROWDIN_EDIT_PROJECT tool input.
 */
type CROWDIN_EDIT_PROJECT_INPUT = {
  /**
   * Patch
   * @description List of JSON-Patch operations to apply.
   */
  patch?: {
      /**
       * Op
       * @description Operation type; only 'replace' is supported.
       * @constant
       */
      op: "replace";
      /**
       * Path
       * @description JSON-Pointer path to the project field to modify.
       * @enum {string}
       */
      path: "/name" | "/identifier" | "/description" | "/visibility" | "/targetLanguages" | "/assignOnlyConfiguredLanguages";
      /**
       * Value
       * @description New value for the given path. Use a string for '/name', '/identifier', '/description', '/visibility'; list of strings for '/targetLanguages'; boolean for '/assignOnlyConfiguredLanguages'.
       */
      value: string | null;
  }[];
  /**
   * Project Id
   * @description ID of the project to update.
   */
  projectId?: number;
};

/**
 * Type of CROWDIN's CROWDIN_EDIT_PROJECT tool output.
 */
type CROWDIN_EDIT_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Background
       * @description URL to background image if set.
       * @default null
       */
      background: string | null;
      /**
       * Cname
       * @description Custom domain (CNAME) if set.
       * @default null
       */
      cname: string | null;
      /**
       * Created At
       * @description Creation timestamp (ISO 8601).
       */
      createdAt: string;
      /**
       * Description
       * @description Project description.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique project identifier.
       */
      id: number;
      /**
       * Identifier
       * @description Project slug identifier.
       */
      identifier: string;
      /**
       * Language Access Policy
       * @description Translation access policy.
       */
      languageAccessPolicy: string;
      /**
       * Last Activity
       * @description Last activity timestamp (ISO 8601).
       */
      lastActivity: string;
      /**
       * Logo
       * @description URL to project logo if set.
       * @default null
       */
      logo: string | null;
      /**
       * Name
       * @description Project name.
       */
      name: string;
      /**
       * Source Language Id
       * @description Source language code.
       */
      sourceLanguageId: string;
      /**
       * Target Language Ids
       * @description List of target language codes.
       */
      targetLanguageIds: string[];
      /**
       * Updated At
       * @description Last update timestamp (ISO 8601).
       */
      updatedAt: string;
      /**
       * User Id
       * @description Owner user ID.
       */
      userId: number;
      /**
       * Visibility
       * @description Project visibility.
       * @enum {string}
       */
      visibility: "public" | "private";
      /**
       * Workflow Id
       * @description Workflow ID if assigned.
       * @default null
       */
      workflowId: number | null;
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
 * Type of CROWDIN's CROWDIN_EDIT_STRING tool input.
 */
type CROWDIN_EDIT_STRING_INPUT = {
  /**
   * Operations
   * @description List of JSON-Patch operations to apply to the string.
   */
  operations?: {
      /**
       * Op
       * @description JSON-Patch operation type: 'replace' to update a value, 'test' to verify current value.
       * @enum {string}
       */
      op: "replace" | "test";
      /**
       * Path
       * @description JSON Pointer to the field to update (e.g., '/text', '/context').
       */
      path: string;
      /**
       * Value
       * @description New value for 'replace' operations; omit for 'test'.
       * @default null
       */
      value: string | null;
  }[];
  /**
   * Project Id
   * @description Unique identifier of the Crowdin project.
   */
  projectId?: number;
  /**
   * String Id
   * @description Unique identifier of the string to update.
   */
  stringId?: number;
};

/**
 * Type of CROWDIN's CROWDIN_EDIT_STRING tool output.
 */
type CROWDIN_EDIT_STRING_OUTPUT = {
  /**
   * Data
   * @description Response data model for an edited string.
   */
  data?: {
      /**
       * Context
       * @description Context for translators.
       * @default null
       */
      context: string | null;
      /**
       * File Id
       * @description File identifier containing the string.
       */
      fileId: number;
      /**
       * Id
       * @description Identifier of the updated string.
       */
      id: number;
      /**
       * Is Duplicate
       * @description Whether this string is marked as a duplicate.
       */
      isDuplicate: boolean;
      /**
       * Is Hidden
       * @description Whether the string is hidden from contributors.
       */
      isHidden: boolean;
      /**
       * Label Ids
       * @description List of label IDs assigned to the string.
       */
      labelIds: number[];
      /**
       * Master String Id
       * @description Master string ID if this is a duplicate.
       * @default null
       */
      masterStringId: number | null;
      /**
       * Revision
       * @description Revision number after the update.
       */
      revision: number;
      /**
       * Text
       * @description Updated string text content.
       */
      text: string;
      /**
       * Type
       * @description Type of the string as defined in Crowdin.
       */
      type: string;
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
 * Type of CROWDIN's CROWDIN_GET_LABEL tool input.
 */
type CROWDIN_GET_LABEL_INPUT = {
  /**
   * Label Id
   * @description ID of the label to retrieve
   */
  label_id?: number;
  /**
   * Project Id
   * @description ID of the Crowdin project containing the label
   */
  project_id?: number;
};

/**
 * Type of CROWDIN's CROWDIN_GET_LABEL tool output.
 */
type CROWDIN_GET_LABEL_OUTPUT = {
  /**
   * Data
   * @description Details of the retrieved label
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the label was created, in ISO 8601 format
       */
      createdAt: string;
      /**
       * Description
       * @description Description of the label
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the label
       */
      id: number;
      /**
       * Project Id
       * @description Identifier of the project the label belongs to
       */
      projectId: number;
      /**
       * Title
       * @description Title of the label
       */
      title: string;
      /**
       * Updated At
       * @description Timestamp when the label was last updated, in ISO 8601 format
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
 * Type of CROWDIN's CROWDIN_GET_LANGUAGE tool input.
 */
type CROWDIN_GET_LANGUAGE_INPUT = {
  /**
   * Language Id
   * @description Language identifier (path parameter)
   */
  languageId?: string;
};

/**
 * Type of CROWDIN's CROWDIN_GET_LANGUAGE tool output.
 */
type CROWDIN_GET_LANGUAGE_OUTPUT = {
  /**
   * Data
   * @description Details of the retrieved language
   */
  data?: {
      /**
       * Android Code
       * @description Android locale code
       */
      androidCode: string;
      /**
       * Editor Code
       * @description Code used in the Crowdin Editor
       */
      editorCode: string;
      /**
       * Id
       * @description Language identifier
       */
      id: string;
      /**
       * Locale
       * @description Locale code (e.g., 'en-US')
       */
      locale: string;
      /**
       * Name
       * @description English name of the language
       */
      name: string;
      /**
       * Osx Code
       * @description macOS locale code
       */
      osxCode: string;
      /**
       * Osx Locale
       * @description macOS locale variant
       */
      osxLocale: string;
      /**
       * Plural Category Names
       * @description List of plural categories for this language
       */
      pluralCategoryNames: string[];
      /**
       * Plural Examples
       * @description Examples of plural forms per category
       */
      pluralExamples: {
          [key: string]: unknown;
      };
      /**
       * Plural Rules
       * @description Plural rules based on CLDR
       */
      pluralRules: string;
      /**
       * Three Letters Code
       * @description ISO 639-3 three-letter code
       */
      threeLettersCode: string;
      /**
       * Two Letters Code
       * @description ISO 639-1 two-letter code
       */
      twoLettersCode: string;
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
 * Type of CROWDIN's CROWDIN_GET_MEMBER_INFO tool input.
 */
type CROWDIN_GET_MEMBER_INFO_INPUT = {
  /**
   * Member Id
   * @description Unique identifier of the project member
   */
  memberId?: number;
  /**
   * Project Id
   * @description Unique identifier of the Crowdin project
   */
  projectId?: number;
};

/**
 * Type of CROWDIN's CROWDIN_GET_MEMBER_INFO tool output.
 */
type CROWDIN_GET_MEMBER_INFO_OUTPUT = {
  /**
   * Data
   * @description Details of the requested project member
   */
  data?: {
      /**
       * Access To All Languages
       * @description Whether the member has access to all languages
       */
      accessToAllLanguages: boolean;
      /**
       * Avatar Url
       * @description URL of the member's avatar image
       * @default null
       */
      avatarUrl: string | null;
      /**
       * Full Name
       * @description Full name of the member
       */
      fullName: string;
      /**
       * Id
       * @description Project member ID
       */
      id: number;
      /**
       * Joined At
       * @description ISO 8601 datetime when the member joined the project
       */
      joinedAt: string;
      /**
       * Manager Access
       * @description Whether the member has manager access
       */
      managerAccess: boolean;
      /**
       * Permissions
       * @description Language-specific permissions keyed by language ID
       */
      permissions: {
          [key: string]: {
              /**
               * Istranslator
               * @description Whether the user is a translator for this language
               */
              isTranslator: boolean;
              /**
               * Workflowstepids
               * @description List of workflow step IDs accessible for this language
               */
              workflowStepIds: number[];
          };
      };
      /**
       * Role
       * @description Role of the member in the project
       * @enum {string}
       */
      role: "owner" | "manager" | "proofreader" | "translator";
      /**
       * Timezone
       * @description Timezone of the member, if set
       * @default null
       */
      timezone: string | null;
      /**
       * Two Factor
       * @description Whether the member has two-factor authentication enabled
       */
      twoFactor: boolean;
      /**
       * Username
       * @description Crowdin username of the member
       */
      username: string;
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
 * Type of CROWDIN's CROWDIN_GET_PROJECT tool input.
 */
type CROWDIN_GET_PROJECT_INPUT = {
  /**
   * Project Id
   * @description ID of the Crowdin project to retrieve
   */
  projectId?: number;
};

/**
 * Type of CROWDIN's CROWDIN_GET_PROJECT tool output.
 */
type CROWDIN_GET_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Auto Screenshot
       * @description Is auto-screenshot enabled.
       */
      autoScreenshot: boolean;
      /**
       * Background
       * @description Project background color in HEX.
       * @default null
       */
      background: string | null;
      /**
       * Cname
       * @description Custom domain name for the project.
       * @default null
       */
      cname: string | null;
      /**
       * Created At
       * @description Project creation timestamp in ISO 8601 format.
       */
      createdAt: string;
      /**
       * Description
       * @description Project description.
       * @default null
       */
      description: string | null;
      /**
       * Has Crowdsourcing
       * @description Is crowdsourcing enabled.
       */
      hasCrowdsourcing: boolean;
      /**
       * Id
       * @description Project identifier.
       */
      id: number;
      /**
       * Identifier
       * @description Unique project identifier (slug).
       */
      identifier: string;
      /**
       * Internal
       * @description Indicates if the project is for internal use only.
       */
      internal: boolean;
      /**
       * Is Glossary Enabled
       * @description Is glossary enabled.
       */
      isGlossaryEnabled: boolean;
      /**
       * Is Machine Translation Enabled
       * @description Is machine translation enabled.
       */
      isMachineTranslationEnabled: boolean;
      /**
       * Is Translation Memory Enabled
       * @description Is translation memory enabled.
       */
      isTranslationMemoryEnabled: boolean;
      /**
       * Language Access Policy
       * @description Language access policy.
       */
      languageAccessPolicy: string;
      /**
       * Logo
       * @description Project logo file name.
       * @default null
       */
      logo: string | null;
      /**
       * Name
       * @description Project name.
       */
      name: string;
      /**
       * Project Languages
       * @description List of project language detail objects.
       */
      projectLanguages: {
          [key: string]: unknown;
      }[];
      /**
       * Source Language Id
       * @description Source language identifier.
       */
      sourceLanguageId: string;
      /**
       * Target Language Ids
       * @description List of target language identifiers.
       */
      targetLanguageIds: string[];
      /**
       * Type
       * @description Project type.
       * @default null
       */
      type: string | null;
      /**
       * Updated At
       * @description Last update timestamp in ISO 8601 format.
       */
      updatedAt: string;
      /**
       * User Id
       * @description Project owner identifier.
       */
      userId: number;
      /**
       * Visibility
       * @description Project visibility setting.
       * @enum {string}
       */
      visibility: "public" | "private";
      /**
       * Workflow Id
       * @description Workflow template identifier.
       * @default null
       */
      workflowId: number | null;
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
 * Type of CROWDIN's CROWDIN_GET_STRING tool input.
 */
type CROWDIN_GET_STRING_INPUT = {
  /**
   * Project Id
   * @description Project identifier
   */
  projectId?: number;
  /**
   * String Id
   * @description String identifier
   */
  stringId?: number;
};

/**
 * Type of CROWDIN's CROWDIN_GET_STRING tool output.
 */
type CROWDIN_GET_STRING_OUTPUT = {
  /**
   * Data
   * @description Details of the retrieved string
   */
  data?: {
      /**
       * Branch Id
       * @description Branch identifier, if applicable
       * @default null
       */
      branchId: number | null;
      /**
       * Context
       * @description Contextual information for translators
       * @default null
       */
      context: string | null;
      /**
       * Created At
       * @description Creation timestamp (ISO 8601)
       */
      createdAt: string;
      /**
       * File Id
       * @description File identifier containing the string
       */
      fileId: number;
      /**
       * Id
       * @description Unique string identifier
       */
      id: number;
      /**
       * Identifier
       * @description Custom key identifier for the string
       * @default null
       */
      identifier: string | null;
      /**
       * Is Duplicate
       * @description Indicates if the string is marked as duplicate
       */
      isDuplicate: boolean;
      /**
       * Is Hidden
       * @description Indicates if the string is hidden
       */
      isHidden: boolean;
      /**
       * Label Ids
       * @description List of label IDs assigned to the string
       */
      labelIds: number[];
      /**
       * Master String Id
       * @description ID of the master string if duplicate
       * @default null
       */
      masterStringId: number | null;
      /**
       * Max Length
       * @description Maximum allowed length of the string
       * @default null
       */
      maxLength: number | null;
      /**
       * Project Id
       * @description Project identifier
       */
      projectId: number;
      /**
       * Revision
       * @description Revision number of the string
       * @default null
       */
      revision: number | null;
      /**
       * Text
       * @description Text content of the string
       */
      text: string;
      /**
       * Type
       * @description Type of the string (e.g., text, asset)
       * @default null
       */
      type: string | null;
      /**
       * Updated At
       * @description Last update timestamp (ISO 8601)
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
 * Type of CROWDIN's CROWDIN_GET_WEBHOOK tool input.
 */
type CROWDIN_GET_WEBHOOK_INPUT = {
  /**
   * Project Id
   * @description ID of the Crowdin project containing the webhook
   */
  project_id?: number;
  /**
   * Webhook Id
   * @description ID of the webhook to retrieve
   */
  webhook_id?: number;
};

/**
 * Type of CROWDIN's CROWDIN_GET_WEBHOOK tool output.
 */
type CROWDIN_GET_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Details of the retrieved webhook
   */
  data?: {
      /**
       * Batching Enabled
       * @description Whether batching of notifications is enabled
       */
      batchingEnabled: boolean;
      /**
       * Created At
       * @description Timestamp when the webhook was created, in ISO 8601 format
       */
      createdAt: string;
      /**
       * Events
       * @description List of events that trigger this webhook
       */
      events: string[];
      /**
       * Headers
       * @description Custom HTTP headers sent with each webhook request
       */
      headers: {
          /**
           * Name
           * @description Header name
           */
          name: string;
          /**
           * Value
           * @description Header value
           */
          value: string;
      }[];
      /**
       * Id
       * @description Unique identifier of the webhook
       */
      id: number;
      /**
       * Is Active
       * @description Whether the webhook is currently active
       */
      isActive: boolean;
      /**
       * Name
       * @description Name of the webhook
       */
      name: string;
      /**
       * Payload
       * @description Custom payload template for the webhook or null if not set
       * @default null
       */
      payload: string | null;
      /**
       * Request Timeout
       * @description Timeout for webhook requests in seconds
       */
      requestTimeout: number;
      /**
       * Request Type
       * @description HTTP method used for delivering webhook payloads
       */
      requestType: string;
      /**
       * Retries
       * @description Number of retry attempts configured for the webhook
       */
      retries: number;
      /**
       * Updated At
       * @description Timestamp when the webhook was last updated, in ISO 8601 format
       */
      updatedAt: string;
      /**
       * Url
       * @description Endpoint URL of the webhook
       */
      url: string;
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
 * Type of CROWDIN's CROWDIN_LIST_BRANCHES tool input.
 */
type CROWDIN_LIST_BRANCHES_INPUT = {
  /**
   * Branch Id
   * @description Filter and return only the branch with this ID
   * @default null
   */
  branchId: number | null;
  /**
   * Limit
   * @description Maximum number of branches to return (default=25, max=500)
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip before starting to collect the result set (default=0)
   * @default null
   */
  offset: number | null;
  /**
   * Project Id
   * @description Identifier of the Crowdin project
   */
  projectId?: number;
};

/**
 * Type of CROWDIN's CROWDIN_LIST_BRANCHES tool output.
 */
type CROWDIN_LIST_BRANCHES_OUTPUT = {
  /**
   * Data
   * @description List of branch resources
   */
  data?: {
      /**
       * Created At
       * @description Branch creation date and time in ISO 8601 format
       */
      createdAt: string;
      /**
       * Id
       * @description Branch identifier
       */
      id: number;
      /**
       * Name
       * @description Branch name
       */
      name: string;
      /**
       * Project Id
       * @description Project identifier to which the branch belongs
       */
      projectId: number;
      /**
       * Updated At
       * @description Branch last update date and time in ISO 8601 format
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
   * Pagination
   * @description Pagination information
   */
  pagination?: {
      /**
       * Limit
       * @description Maximum number of items returned
       */
      limit: number;
      /**
       * Offset
       * @description Number of items skipped
       */
      offset: number;
      /**
       * Total Count
       * @description Total number of items available
       */
      totalCount: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CROWDIN's CROWDIN_LIST_FILES tool input.
 */
type CROWDIN_LIST_FILES_INPUT = {
  /**
   * Branch Id
   * @description Filter results by a specific branch ID
   * @default null
   */
  branchId: number | null;
  /**
   * Directory Id
   * @description Filter results by a specific directory ID
   * @default null
   */
  directoryId: number | null;
  /**
   * Group Id
   * @description Filter results by a specific group ID
   * @default null
   */
  groupId: number | null;
  /**
   * Limit
   * @description Maximum number of items to retrieve (default 25, max 500)
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip before starting to collect the result set
   * @default null
   */
  offset: number | null;
  /**
   * Project Id
   * @description Project identifier
   */
  projectId?: number;
};

/**
 * Type of CROWDIN's CROWDIN_LIST_FILES tool output.
 */
type CROWDIN_LIST_FILES_OUTPUT = {
  /**
   * Data
   * @description List of files
   */
  data?: {
      /**
       * Branch Id
       * @description Branch identifier
       * @default null
       */
      branchId: number | null;
      /**
       * Created At
       * @description Date and time when the file was created (ISO 8601)
       */
      createdAt: string;
      /**
       * Directory Id
       * @description Directory identifier
       * @default null
       */
      directoryId: number | null;
      /**
       * Id
       * @description File identifier
       */
      id: number;
      /**
       * Meta
       * @description File metadata
       */
      meta: {
          [key: string]: unknown;
      };
      /**
       * Name
       * @description File name
       */
      name: string;
      /**
       * Path
       * @description Full path to the file in the project
       */
      path: string;
      /**
       * Priority
       * @description Priority of the file
       * @enum {string}
       */
      priority: "low" | "normal" | "high";
      /**
       * Project Id
       * @description Project identifier
       */
      projectId: number;
      /**
       * Revision Id
       * @description Identifier of the file revision
       */
      revisionId: number;
      /**
       * Status
       * @description File status
       */
      status: string;
      /**
       * Title
       * @description File title
       * @default null
       */
      title: string | null;
      /**
       * Type
       * @description File type
       */
      type: string;
      /**
       * Updated At
       * @description Date and time when the file was last updated (ISO 8601)
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
   * Pagination
   * @description Pagination details
   */
  pagination?: {
      /**
       * Limit
       * @description Pagination limit
       */
      limit: number;
      /**
       * Offset
       * @description Pagination offset
       */
      offset: number;
      /**
       * Total Count
       * @description Total number of items
       */
      totalCount: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CROWDIN's CROWDIN_LIST_LABELS tool input.
 */
type CROWDIN_LIST_LABELS_INPUT = {
  /**
   * Limit
   * @description Maximum number of items to retrieve
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip for pagination
   * @default null
   */
  offset: number | null;
  /**
   * Project Id
   * @description ID of the Crowdin project to list labels in
   */
  project_id?: number;
};

/**
 * Type of CROWDIN's CROWDIN_LIST_LABELS tool output.
 */
type CROWDIN_LIST_LABELS_OUTPUT = {
  /**
   * Data
   * @description Array of label resources
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the label was created, in ISO 8601 format
       */
      createdAt: string;
      /**
       * Description
       * @description Description of the label
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Label ID
       */
      id: number;
      /**
       * Project Id
       * @description Project ID this label belongs to
       */
      projectId: number;
      /**
       * Title
       * @description Label title
       */
      title: string;
      /**
       * Updated At
       * @description Timestamp when the label was last updated, in ISO 8601 format
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
   * Pagination
   * @description Pagination details
   */
  pagination?: {
      /**
       * Limit
       * @description Limit of the collection
       */
      limit: number;
      /**
       * Offset
       * @description Offset of the collection
       */
      offset: number;
      /**
       * Total Count
       * @description Total number of items available
       */
      totalCount: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CROWDIN's CROWDIN_LIST_LANGUAGES tool input.
 */
type CROWDIN_LIST_LANGUAGES_INPUT = {
  /**
   * Limit
   * @description Maximum number of items to retrieve (default: server-side default)
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip before collecting the result set (default: server-side default)
   * @default null
   */
  offset: number | null;
};

/**
 * Type of CROWDIN's CROWDIN_LIST_LANGUAGES tool output.
 */
type CROWDIN_LIST_LANGUAGES_OUTPUT = {
  /**
   * Data
   * @description List of languages retrieved
   */
  data?: {
      /**
       * Android Code
       * @description Android locale code
       * @default null
       */
      androidCode: string | null;
      /**
       * Dialect Of
       * @description Identifier of parent dialect, if any
       * @default null
       */
      dialectOf: string | null;
      /**
       * Editor Code
       * @description Code used in the Crowdin Editor
       * @default null
       */
      editorCode: string | null;
      /**
       * Id
       * @description Language identifier
       */
      id: string;
      /**
       * Iso Code
       * @description ISO code of the language
       * @default null
       */
      isoCode: string | null;
      /**
       * Locale
       * @description Locale code (e.g., 'en-US')
       * @default null
       */
      locale: string | null;
      /**
       * Name
       * @description English name of the language
       */
      name: string;
      /**
       * Osx Code
       * @description macOS locale code
       * @default null
       */
      osxCode: string | null;
      /**
       * Osx Locale
       * @description macOS locale variant
       * @default null
       */
      osxLocale: string | null;
      /**
       * Plural Category Names
       * @description List of plural categories for this language
       * @default null
       */
      pluralCategoryNames: string[] | null;
      /**
       * Plural Examples
       * @description Examples of plural forms per category
       * @default null
       */
      pluralExamples: {
          [key: string]: unknown;
      } | null;
      /**
       * Plural Rules
       * @description Plural rules based on CLDR
       * @default null
       */
      pluralRules: string | null;
      /**
       * Text Direction
       * @description Text direction (e.g., 'ltr' or 'rtl')
       * @default null
       */
      textDirection: string | null;
      /**
       * Three Letters Code
       * @description ISO 639-3 three-letter code
       * @default null
       */
      threeLettersCode: string | null;
      /**
       * Two Letters Code
       * @description ISO 639-1 two-letter code
       * @default null
       */
      twoLettersCode: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Pagination
   * @description Pagination details of the response
   */
  pagination?: {
      /**
       * Limit
       * @description Maximum number of items per page
       */
      limit: number;
      /**
       * Offset
       * @description Number of items skipped to obtain current page
       */
      offset: number;
      /**
       * Total Count
       * @description Total number of available items
       */
      totalCount: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CROWDIN's CROWDIN_LIST_PROJECTS tool input.
 */
type CROWDIN_LIST_PROJECTS_INPUT = {
  /**
   * Group Id
   * @description Filter projects by group ID
   * @default null
   */
  groupId: number | null;
  /**
   * Has Manager Access
   * @description Filter projects where the user has manager access
   * @default null
   */
  hasManagerAccess: boolean | null;
  /**
   * Is Archived
   * @description Filter archived projects: true for archived, false for active
   * @default null
   */
  isArchived: boolean | null;
  /**
   * Language Id
   * @description Filter projects that include the specified language code
   * @default null
   */
  languageId: string | null;
  /**
   * Limit
   * @description Number of records to return (default is server-side default, max 500)
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset for pagination (default is server-side default)
   * @default null
   */
  offset: number | null;
  /**
   * User Id
   * @description Filter projects by owner user ID
   * @default null
   */
  userId: number | null;
};

/**
 * Type of CROWDIN's CROWDIN_LIST_PROJECTS tool output.
 */
type CROWDIN_LIST_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description List of project objects
   */
  data?: {
      /**
       * Background Url
       * @description URL of the project background image, if available
       * @default null
       */
      backgroundUrl: string | null;
      /**
       * Cname
       * @description Custom domain name for the project, if set
       * @default null
       */
      cname: string | null;
      /**
       * Created At
       * @description ISO datetime when the project was created
       * @default null
       */
      createdAt: string | null;
      /**
       * Description
       * @description Project description
       * @default null
       */
      description: string | null;
      /**
       * Group Id
       * @description Group ID the project belongs to
       * @default null
       */
      groupId: number | null;
      /**
       * Id
       * @description Project identifier
       */
      id: number;
      /**
       * Identifier
       * @description Project unique identifier (slug)
       */
      identifier: string;
      /**
       * Is Archived
       * @description Whether the project is archived
       */
      isArchived: boolean;
      /**
       * Last Activity
       * @description ISO datetime of last activity in the project
       * @default null
       */
      lastActivity: string | null;
      /**
       * Logo Url
       * @description URL of the project logo, if available
       * @default null
       */
      logoUrl: string | null;
      /**
       * Name
       * @description Project name
       */
      name: string;
      /**
       * Source Language Id
       * @description Source language code
       */
      sourceLanguageId: string;
      /**
       * Target Language Ids
       * @description Target language codes
       */
      targetLanguageIds: string[];
      /**
       * Updated At
       * @description ISO datetime when the project was last updated
       * @default null
       */
      updatedAt: string | null;
      /**
       * User Id
       * @description Project owner user ID
       */
      userId: number;
      /**
       * Visibility
       * @description Project visibility
       * @enum {string}
       */
      visibility: "public" | "private";
      /**
       * Workflow Id
       * @description Workflow ID associated with the project
       * @default null
       */
      workflowId: number | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Pagination
   * @description Pagination information
   */
  pagination?: {
      /**
       * Limit
       * @description Page size for the result set
       */
      limit: number;
      /**
       * Offset
       * @description Offset in the result set
       */
      offset: number;
      /**
       * Total Count
       * @description Total number of items matching the query
       */
      totalCount: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CROWDIN's CROWDIN_LIST_PROJECT_MEMBERS tool input.
 */
type CROWDIN_LIST_PROJECT_MEMBERS_INPUT = {
  /**
   * Language Id
   * @description Filter members by target language identifier (ISO code)
   * @default null
   */
  languageId: string | null;
  /**
   * Limit
   * @description Maximum number of items to return (min 1, max 500)
   * @default 25
   */
  limit: number;
  /**
   * Offset
   * @description Offset for pagination (starting from 0)
   * @default 0
   */
  offset: number;
  /**
   * Project Id
   * @description Unique identifier of the Crowdin project
   */
  projectId?: number;
  /**
   * Role
   * @description Filter members by role, e.g., 'translator' or 'proofreader'
   * @default null
   */
  role: string | null;
  /**
   * Search
   * @description Search term to filter members by username or email
   * @default null
   */
  search: string | null;
};

/**
 * Type of CROWDIN's CROWDIN_LIST_PROJECT_MEMBERS tool output.
 */
type CROWDIN_LIST_PROJECT_MEMBERS_OUTPUT = {
  /**
   * Data
   * @description List of project members
   */
  data?: {
      /**
       * Avatar Url
       * @description Avatar image URL of the member
       * @default null
       */
      avatarUrl: string | null;
      /**
       * Full Name
       * @description Full name of the member
       */
      fullName: string;
      /**
       * Id
       * @description Member identifier
       */
      id: number;
      /**
       * Joined At
       * @description ISO 8601 datetime when the member joined the project
       */
      joinedAt: string;
      /**
       * Languages
       * @description List of language-specific role assignments
       */
      languages: {
          /**
           * Id
           * @description Target language identifier (ISO code)
           */
          id: string;
          /**
           * Role
           * @description Role of the member for this language
           */
          role: string;
      }[];
      /**
       * Role
       * @description Role of the member in the project
       */
      role: string;
      /**
       * Two Factor
       * @description Whether the member has two-factor authentication enabled
       */
      twoFactor: boolean;
      /**
       * Username
       * @description Crowdin username of the member
       */
      username: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Pagination
   * @description Pagination details for the response
   */
  pagination?: {
      /**
       * Limit
       * @description Maximum number of items returned
       */
      limit: number;
      /**
       * Offset
       * @description Pagination offset
       */
      offset: number;
      /**
       * Total Count
       * @description Total number of members
       */
      totalCount: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CROWDIN's CROWDIN_LIST_REPORTS tool input.
 */
type CROWDIN_LIST_REPORTS_INPUT = {
  /**
   * Limit
   * @description Maximum number of reports to return (default=25, max=500)
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip before collecting the result set (default=0)
   * @default null
   */
  offset: number | null;
  /**
   * Project Id
   * @description Identifier of the Crowdin project
   */
  projectId?: number;
};

/**
 * Type of CROWDIN's CROWDIN_LIST_REPORTS tool output.
 */
type CROWDIN_LIST_REPORTS_OUTPUT = {
  /**
   * Data
   * @description List of report resources
   */
  data?: {
      /**
       * Created At
       * @description Report creation date and time in ISO 8601 format
       */
      createdAt: string;
      /**
       * Id
       * @description Report identifier
       */
      id: string;
      /**
       * Name
       * @description Report name
       */
      name: string;
      /**
       * Schema
       * @description Report schema details
       */
      schema: {
          [key: string]: unknown;
      };
      /**
       * Status
       * @description Report status
       */
      status: string;
      /**
       * Updated At
       * @description Report last update date and time in ISO 8601 format
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
   * Pagination
   * @description Pagination information
   */
  pagination?: {
      /**
       * Limit
       * @description Maximum number of items returned
       */
      limit: number;
      /**
       * Offset
       * @description Number of items skipped
       */
      offset: number;
      /**
       * Total Count
       * @description Total number of items available
       */
      totalCount: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CROWDIN's CROWDIN_UPLOAD_STORAGE tool input.
 */
type CROWDIN_UPLOAD_STORAGE_INPUT = {
  /**
   * Content Type
   * @description MIME type of the file, e.g., 'application/octet-stream'.
   */
  contentType?: string;
  /**
   * File
   * Format: binary
   * @description Binary content of the file to upload.
   */
  file?: string;
  /**
   * File Name
   * @description Name of the file including extension, e.g., 'example.txt'.
   */
  fileName?: string;
};

/**
 * Type of CROWDIN's CROWDIN_UPLOAD_STORAGE tool output.
 */
type CROWDIN_UPLOAD_STORAGE_OUTPUT = {
  /**
   * Data
   * @description Details of the uploaded storage.
   */
  data?: {
      /**
       * Content Type
       * @description MIME type of the uploaded file.
       */
      contentType: string;
      /**
       * File Name
       * @description Name of the uploaded file.
       */
      fileName: string;
      /**
       * Id
       * @description Unique identifier of the storage.
       */
      id: number;
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
 * Type map of all available tool input types for toolkit "CROWDIN".
 */
export type CROWDIN_TOOL_INPUTS = {
  ADD_BRANCH: CROWDIN_ADD_BRANCH_INPUT
  ADD_FILE: CROWDIN_ADD_FILE_INPUT
  ADD_LABEL: CROWDIN_ADD_LABEL_INPUT
  ADD_PROJECT: CROWDIN_ADD_PROJECT_INPUT
  ADD_WEBHOOK: CROWDIN_ADD_WEBHOOK_INPUT
  ASSIGN_LABEL_TO_STRINGS: CROWDIN_ASSIGN_LABEL_TO_STRINGS_INPUT
  DELETE_BRANCH: CROWDIN_DELETE_BRANCH_INPUT
  DELETE_LABEL: CROWDIN_DELETE_LABEL_INPUT
  DELETE_PROJECT: CROWDIN_DELETE_PROJECT_INPUT
  DELETE_WEBHOOK: CROWDIN_DELETE_WEBHOOK_INPUT
  EDIT_FILE: CROWDIN_EDIT_FILE_INPUT
  EDIT_LABEL: CROWDIN_EDIT_LABEL_INPUT
  EDIT_PROJECT: CROWDIN_EDIT_PROJECT_INPUT
  EDIT_STRING: CROWDIN_EDIT_STRING_INPUT
  GET_LABEL: CROWDIN_GET_LABEL_INPUT
  GET_LANGUAGE: CROWDIN_GET_LANGUAGE_INPUT
  GET_MEMBER_INFO: CROWDIN_GET_MEMBER_INFO_INPUT
  GET_PROJECT: CROWDIN_GET_PROJECT_INPUT
  GET_STRING: CROWDIN_GET_STRING_INPUT
  GET_WEBHOOK: CROWDIN_GET_WEBHOOK_INPUT
  LIST_BRANCHES: CROWDIN_LIST_BRANCHES_INPUT
  LIST_FILES: CROWDIN_LIST_FILES_INPUT
  LIST_LABELS: CROWDIN_LIST_LABELS_INPUT
  LIST_LANGUAGES: CROWDIN_LIST_LANGUAGES_INPUT
  LIST_PROJECTS: CROWDIN_LIST_PROJECTS_INPUT
  LIST_PROJECT_MEMBERS: CROWDIN_LIST_PROJECT_MEMBERS_INPUT
  LIST_REPORTS: CROWDIN_LIST_REPORTS_INPUT
  UPLOAD_STORAGE: CROWDIN_UPLOAD_STORAGE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CROWDIN".
 */
export type CROWDIN_TOOL_OUTPUTS = {
  ADD_BRANCH: CROWDIN_ADD_BRANCH_OUTPUT
  ADD_FILE: CROWDIN_ADD_FILE_OUTPUT
  ADD_LABEL: CROWDIN_ADD_LABEL_OUTPUT
  ADD_PROJECT: CROWDIN_ADD_PROJECT_OUTPUT
  ADD_WEBHOOK: CROWDIN_ADD_WEBHOOK_OUTPUT
  ASSIGN_LABEL_TO_STRINGS: CROWDIN_ASSIGN_LABEL_TO_STRINGS_OUTPUT
  DELETE_BRANCH: CROWDIN_DELETE_BRANCH_OUTPUT
  DELETE_LABEL: CROWDIN_DELETE_LABEL_OUTPUT
  DELETE_PROJECT: CROWDIN_DELETE_PROJECT_OUTPUT
  DELETE_WEBHOOK: CROWDIN_DELETE_WEBHOOK_OUTPUT
  EDIT_FILE: CROWDIN_EDIT_FILE_OUTPUT
  EDIT_LABEL: CROWDIN_EDIT_LABEL_OUTPUT
  EDIT_PROJECT: CROWDIN_EDIT_PROJECT_OUTPUT
  EDIT_STRING: CROWDIN_EDIT_STRING_OUTPUT
  GET_LABEL: CROWDIN_GET_LABEL_OUTPUT
  GET_LANGUAGE: CROWDIN_GET_LANGUAGE_OUTPUT
  GET_MEMBER_INFO: CROWDIN_GET_MEMBER_INFO_OUTPUT
  GET_PROJECT: CROWDIN_GET_PROJECT_OUTPUT
  GET_STRING: CROWDIN_GET_STRING_OUTPUT
  GET_WEBHOOK: CROWDIN_GET_WEBHOOK_OUTPUT
  LIST_BRANCHES: CROWDIN_LIST_BRANCHES_OUTPUT
  LIST_FILES: CROWDIN_LIST_FILES_OUTPUT
  LIST_LABELS: CROWDIN_LIST_LABELS_OUTPUT
  LIST_LANGUAGES: CROWDIN_LIST_LANGUAGES_OUTPUT
  LIST_PROJECTS: CROWDIN_LIST_PROJECTS_OUTPUT
  LIST_PROJECT_MEMBERS: CROWDIN_LIST_PROJECT_MEMBERS_OUTPUT
  LIST_REPORTS: CROWDIN_LIST_REPORTS_OUTPUT
  UPLOAD_STORAGE: CROWDIN_UPLOAD_STORAGE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CROWDIN toolkit.
 */
export const CROWDIN = {
  slug: "crowdin",
  tools: {
    /**
     * Tool to create a new branch in a crowdin project. use when you need to isolate translations for a new feature or release.
     */
    ADD_BRANCH: "CROWDIN_ADD_BRANCH",
    /**
     * Tool to add a new file to a crowdin project. use after uploading the file to storage to place it under the specified project, branch, or directory.
     */
    ADD_FILE: "CROWDIN_ADD_FILE",
    /**
     * Tool to create a new label in a crowdin project. use when you need to tag resources with a custom identifier, such as 'sprint-5'.
     */
    ADD_LABEL: "CROWDIN_ADD_LABEL",
    /**
     * Tool to create a new project in crowdin. use before uploading source files to initialize translation workflows.
     */
    ADD_PROJECT: "CROWDIN_ADD_PROJECT",
    /**
     * Tool to create a new webhook in a crowdin project. use after confirming the project id and desired event triggers.
     */
    ADD_WEBHOOK: "CROWDIN_ADD_WEBHOOK",
    /**
     * Tool to assign the specified label to provided string ids in a project. use after creating the label or verifying string ids to categorize content.
     */
    ASSIGN_LABEL_TO_STRINGS: "CROWDIN_ASSIGN_LABEL_TO_STRINGS",
    /**
     * Tool to delete a specific branch from a crowdin project. use when you need to remove an obsolete branch after it's fully merged.
     */
    DELETE_BRANCH: "CROWDIN_DELETE_BRANCH",
    /**
     * Tool to delete the label identified by the specified label id in a project. use when you need to remove outdated or incorrect labels. ensure no resources reference the label before deletion.
     */
    DELETE_LABEL: "CROWDIN_DELETE_LABEL",
    /**
     * Tool to delete a crowdin project by its id. use when you need to permanently remove a project after confirming no further usage. ensure all resources are no longer needed before deletion.
     */
    DELETE_PROJECT: "CROWDIN_DELETE_PROJECT",
    /**
     * Tool to delete the webhook identified by the specified webhook id in a crowdin project. use when you need to remove obsolete or incorrect webhooks after confirming project and webhook ids.
     */
    DELETE_WEBHOOK: "CROWDIN_DELETE_WEBHOOK",
    /**
     * Tool to update file details in a project. use after confirming valid project and file ids.
     */
    EDIT_FILE: "CROWDIN_EDIT_FILE",
    /**
     * Tool to edit a label in a crowdin project. use when you need to update the name or description of an existing label. ensure the label exists before using. example: edit label 42 to 'release-1.1'.
     */
    EDIT_LABEL: "CROWDIN_EDIT_LABEL",
    /**
     * Tool to update project details using json-patch. use after confirming project settings to modify metadata like name, description, visibility, or languages.
     */
    EDIT_PROJECT: "CROWDIN_EDIT_PROJECT",
    /**
     * Tool to update string details in a crowdin project. use when you need to modify a string's text or metadata after creation.
     */
    EDIT_STRING: "CROWDIN_EDIT_STRING",
    /**
     * Tool to retrieve information about the label identified by the specified label id in a project. use after confirming the project context to fetch label details.
     */
    GET_LABEL: "CROWDIN_GET_LABEL",
    /**
     * Tool to retrieve details of a specific language. use when you have a language identifier and need locale codes and plural rules before configuring translations.
     */
    GET_LANGUAGE: "CROWDIN_GET_LANGUAGE",
    /**
     * Tool to retrieve information about a project member. use when you need to inspect details for a specific user within a project after obtaining their member id.
     */
    GET_MEMBER_INFO: "CROWDIN_GET_MEMBER_INFO",
    /**
     * Tool to retrieve details of a specific crowdin project. use when you need to inspect project settings before making updates.
     */
    GET_PROJECT: "CROWDIN_GET_PROJECT",
    /**
     * Tool to retrieve details of a specific string in a crowdin project. use after confirming the project and string ids to fetch its metadata.
     */
    GET_STRING: "CROWDIN_GET_STRING",
    /**
     * Tool to retrieve information about the webhook identified by the specified webhook id in a project. use after confirming the project context to fetch webhook details.
     */
    GET_WEBHOOK: "CROWDIN_GET_WEBHOOK",
    /**
     * Tool to list all branches in a crowdin project. use after selecting a project to view its branch structure. supports pagination and optional filtering by branch id.
     */
    LIST_BRANCHES: "CROWDIN_LIST_BRANCHES",
    /**
     * Tool to list files in a crowdin project. use when you need to retrieve a list of project files with optional filters by directory, group, or branch before processing.
     */
    LIST_FILES: "CROWDIN_LIST_FILES",
    /**
     * Tool to list labels in a crowdin project. use when you need to retrieve all labels for a specific project with optional pagination.
     */
    LIST_LABELS: "CROWDIN_LIST_LABELS",
    /**
     * Tool to retrieve a list of supported languages. use when you need to fetch all languages crowdin supports before starting localization.
     */
    LIST_LANGUAGES: "CROWDIN_LIST_LANGUAGES",
    /**
     * Tool to retrieve a list of all crowdin projects with optional filters. use when you need to paginate through or filter projects by owner, group, language inclusion, or archive status.
     */
    LIST_PROJECTS: "CROWDIN_LIST_PROJECTS",
    /**
     * Tool to list members in a crowdin project. use when you need to retrieve project member list for management tasks after confirming the project id.
     */
    LIST_PROJECT_MEMBERS: "CROWDIN_LIST_PROJECT_MEMBERS",
    /**
     * Tool to list reports for a given crowdin project. use after confirming project id to retrieve available reports. supports pagination via limit and offset.
     */
    LIST_REPORTS: "CROWDIN_LIST_REPORTS",
    /**
     * Tool to upload a file to crowdin storage. use when you need to obtain a storageid for further operations like adding files to a project.
     */
    UPLOAD_STORAGE: "CROWDIN_UPLOAD_STORAGE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CROWDIN".
 */
export type CROWDIN_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CROWDIN".
 */
export type CROWDIN_TRIGGER_EVENTS = {}
