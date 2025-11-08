// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_ACTIVITY_LOGS_LIST tool input.
 */
type DOPPLER_SECRETOPS_ACTIVITY_LOGS_LIST_INPUT = object;

/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_ACTIVITY_LOGS_LIST tool output.
 */
type DOPPLER_SECRETOPS_ACTIVITY_LOGS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Config
       * @description Configuration name involved in the event
       */
      config: string;
      /**
       * Created At
       * @description Timestamp when the log was created, in ISO 8601 format
       */
      created_at: string;
      /**
       * Environment
       * @description Environment identifier
       */
      environment: string;
      /**
       * Html
       * @description HTML-formatted description of the event
       */
      html: string;
      /**
       * Id
       * @description Unique identifier for the log entry
       */
      id: string;
      /**
       * Project
       * @description Project identifier
       */
      project: string;
      /**
       * Text
       * @description Plain-text description of the event
       */
      text: string;
      /**
       * User
       * @description Details of the user who performed the action
       */
      user: {
          /**
           * Email
           * @description User's email address
           */
          email: string;
          /**
           * Name
           * @description User's full name
           */
          name: string;
          /**
           * Profile Image Url
           * @description URL of user's profile image
           */
          profile_image_url: string;
      };
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
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_ACTIVITY_LOGS_RETRIEVE tool input.
 */
type DOPPLER_SECRETOPS_ACTIVITY_LOGS_RETRIEVE_INPUT = {
  /**
   * Id
   * @description The Activity Log's unique identifier
   */
  id?: string;
};

/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_ACTIVITY_LOGS_RETRIEVE tool output.
 */
type DOPPLER_SECRETOPS_ACTIVITY_LOGS_RETRIEVE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Config
       * @description Config name associated with the event
       */
      config: string;
      /**
       * Created At
       * @description Timestamp when the log was created
       */
      created_at: string;
      /**
       * Environment
       * @description Environment identifier associated with the event
       */
      environment: string;
      /**
       * Html
       * @description HTML version of the event description
       */
      html: string;
      /**
       * Id
       * @description Unique identifier for the Activity Log
       */
      id: string;
      /**
       * Project
       * @description Project identifier associated with the event
       */
      project: string;
      /**
       * Text
       * @description Human-readable description of the event
       */
      text: string;
      /**
       * User
       * @description Information about the user who performed the action
       */
      user: {
          /**
           * Email
           * @description User's email address
           */
          email: string;
          /**
           * Name
           * @description User's full name
           */
          name: string;
          /**
           * Profile Image Url
           * @description URL to the user's profile image
           */
          profile_image_url: string;
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
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_CONFIGS_CLONE tool input.
 */
type DOPPLER_SECRETOPS_CONFIGS_CLONE_INPUT = {
  /**
   * Config
   * @description Name of the config to clone (e.g., 'dev', 'stg').
   */
  config?: string;
  /**
   * Environment
   * @description Identifier of the environment of the source config.
   */
  environment?: string;
  /**
   * Name
   * @description Name of the new cloned config (branch name).
   */
  name?: string;
  /**
   * Project
   * @description Identifier of the project where the source config resides.
   */
  project?: string;
};

/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_CONFIGS_CLONE tool output.
 */
type DOPPLER_SECRETOPS_CONFIGS_CLONE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Date and time of the object's creation.
       */
      created_at: string;
      /**
       * Environment
       * @description Identifier of the environment the config belongs to.
       */
      environment: string;
      /**
       * Initial Fetch At
       * @description Date and time of the first secrets fetch.
       */
      initial_fetch_at: string;
      /**
       * Last Fetch At
       * @description Date and time of the last secrets fetch.
       */
      last_fetch_at: string;
      /**
       * Locked
       * @description Whether the config can be renamed and/or deleted.
       */
      locked: boolean;
      /**
       * Name
       * @description Name of the cloned config.
       */
      name: string;
      /**
       * Project
       * @description Identifier of the project the config belongs to.
       */
      project: string;
      /**
       * Root
       * @description Whether the config is the root of the environment.
       */
      root: boolean;
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
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_CONFIGS_CREATE tool input.
 */
type DOPPLER_SECRETOPS_CONFIGS_CREATE_INPUT = {
  /**
   * Environment
   * @description Identifier of the environment to which this config will belong
   */
  environment?: string;
  /**
   * Name
   * @description Unique name for the new branch config, e.g., 'dev_feature_branch'
   */
  name?: string;
  /**
   * Project
   * @description Identifier of the project to which this config will belong
   */
  project?: string;
};

/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_CONFIGS_CREATE tool output.
 */
type DOPPLER_SECRETOPS_CONFIGS_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the config was created
       */
      created_at: string;
      /**
       * Environment
       * @description Environment identifier
       */
      environment: string;
      /**
       * Initial Fetch At
       * @description Timestamp of the first secrets fetch
       */
      initial_fetch_at: string;
      /**
       * Last Fetch At
       * @description Timestamp of the most recent secrets fetch
       */
      last_fetch_at: string;
      /**
       * Locked
       * @description Whether the config is locked from renaming or deletion
       */
      locked: boolean;
      /**
       * Name
       * @description Name of the created config
       */
      name: string;
      /**
       * Project
       * @description Project identifier
       */
      project: string;
      /**
       * Root
       * @description Whether the config is the root of the environment
       */
      root: boolean;
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
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_CONFIGS_DELETE tool input.
 */
type DOPPLER_SECRETOPS_CONFIGS_DELETE_INPUT = {
  /**
   * Config
   * @description Name (slug) of the config to delete.
   */
  config?: string;
  /**
   * Project
   * @description Unique identifier (slug) of the project that contains the config.
   */
  project?: string;
};

/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_CONFIGS_DELETE tool output.
 */
type DOPPLER_SECRETOPS_CONFIGS_DELETE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the config was created
       */
      created_at: string;
      /**
       * Environment
       * @description Environment identifier
       */
      environment: string;
      /**
       * Initial Fetch At
       * @description Timestamp of the first secrets fetch
       */
      initial_fetch_at: string;
      /**
       * Last Fetch At
       * @description Timestamp of the most recent secrets fetch
       */
      last_fetch_at: string;
      /**
       * Locked
       * @description Whether the config is locked from renaming or deletion
       */
      locked: boolean;
      /**
       * Name
       * @description Name of the deleted config
       */
      name: string;
      /**
       * Project
       * @description Project identifier
       */
      project: string;
      /**
       * Root
       * @description Whether the config is the root of the environment
       */
      root: boolean;
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
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_CONFIGS_GET tool input.
 */
type DOPPLER_SECRETOPS_CONFIGS_GET_INPUT = {
  /**
   * Config
   * @description Name of the config to retrieve. Required unless using a Service Token.
   */
  config?: string;
  /**
   * Project
   * @description Unique identifier for the project. Required unless using a Service Token.
   */
  project?: string;
};

/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_CONFIGS_GET tool output.
 */
type DOPPLER_SECRETOPS_CONFIGS_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Config
       * @description The requested config resource.
       */
      config: {
          /**
           * Created At
           * Format: date-time
           * @description ISO-8601 timestamp when the config was created.
           */
          created_at: string;
          /**
           * Environment
           * @description Identifier of the environment that the config belongs to.
           */
          environment: string;
          /**
           * Initial Fetch At
           * Format: date-time
           * @description ISO-8601 timestamp of first secrets fetch.
           */
          initial_fetch_at: string;
          /**
           * Last Fetch At
           * Format: date-time
           * @description ISO-8601 timestamp of last secrets fetch.
           */
          last_fetch_at: string;
          /**
           * Locked
           * @description Whether this config can be renamed or deleted.
           */
          locked: boolean;
          /**
           * Name
           * @description Name of the config.
           */
          name: string;
          /**
           * Project
           * @description Identifier of the project that the config belongs to.
           */
          project: string;
          /**
           * Root
           * @description Whether this config is the root of its environment.
           */
          root: boolean;
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
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_CONFIGS_LOCK tool input.
 */
type DOPPLER_SECRETOPS_CONFIGS_LOCK_INPUT = {
  /**
   * Config
   * @description Name of the config to lock.
   */
  config?: string;
  /**
   * Project
   * @description Unique identifier for the project containing the config to lock.
   */
  project?: string;
};

/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_CONFIGS_LOCK tool output.
 */
type DOPPLER_SECRETOPS_CONFIGS_LOCK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Config
       * @description The updated config resource after locking.
       */
      config: {
          /**
           * Created At
           * Format: date-time
           * @description ISO-8601 timestamp when the config was created.
           */
          created_at: string;
          /**
           * Environment
           * @description Identifier of the environment that the config belongs to.
           */
          environment: string;
          /**
           * Initial Fetch At
           * Format: date-time
           * @description ISO-8601 timestamp of first secrets fetch.
           */
          initial_fetch_at: string;
          /**
           * Last Fetch At
           * Format: date-time
           * @description ISO-8601 timestamp of last secrets fetch.
           */
          last_fetch_at: string;
          /**
           * Locked
           * @description Whether this config can be renamed or deleted.
           */
          locked: boolean;
          /**
           * Name
           * @description Name of the config.
           */
          name: string;
          /**
           * Project
           * @description Identifier of the project that the config belongs to.
           */
          project: string;
          /**
           * Root
           * @description Whether this config is the root of its environment.
           */
          root: boolean;
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
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_CONFIGS_UNLOCK tool input.
 */
type DOPPLER_SECRETOPS_CONFIGS_UNLOCK_INPUT = {
  /**
   * Config
   * @description Name of the config to unlock. Required unless using a Service Token.
   */
  config?: string;
  /**
   * Project
   * @description Unique identifier for the project. Required unless using a Service Token.
   */
  project?: string;
};

/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_CONFIGS_UNLOCK tool output.
 */
type DOPPLER_SECRETOPS_CONFIGS_UNLOCK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description ISO-8601 timestamp when the config was created.
       */
      created_at: string;
      /**
       * Environment
       * @description Identifier of the environment that the config belongs to.
       */
      environment: string;
      /**
       * Initial Fetch At
       * Format: date-time
       * @description ISO-8601 timestamp of the first secrets fetch.
       */
      initial_fetch_at: string;
      /**
       * Last Fetch At
       * Format: date-time
       * @description ISO-8601 timestamp of the most recent secrets fetch.
       */
      last_fetch_at: string;
      /**
       * Locked
       * @description Whether this config can be renamed or deleted.
       */
      locked: boolean;
      /**
       * Name
       * @description Name of the config.
       */
      name: string;
      /**
       * Project
       * @description Identifier of the project that the config belongs to.
       */
      project: string;
      /**
       * Root
       * @description Whether this config is the root of its environment.
       */
      root: boolean;
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
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_CONFIGS_UPDATE tool input.
 */
type DOPPLER_SECRETOPS_CONFIGS_UPDATE_INPUT = {
  /**
   * Config
   * @description Name/slug of the existing config to modify.
   */
  config?: string;
  /**
   * Name
   * @description New name for the config.
   */
  name?: string;
  /**
   * Project
   * @description Unique identifier for the project that the config belongs to.
   */
  project?: string;
};

/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_CONFIGS_UPDATE tool output.
 */
type DOPPLER_SECRETOPS_CONFIGS_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description ISO-8601 timestamp when the config was created.
       */
      created_at: string;
      /**
       * Environment
       * @description Identifier of the environment that the config belongs to.
       */
      environment: string;
      /**
       * Initial Fetch At
       * Format: date-time
       * @description ISO-8601 timestamp of first secrets fetch.
       */
      initial_fetch_at: string;
      /**
       * Last Fetch At
       * Format: date-time
       * @description ISO-8601 timestamp of last secrets fetch.
       */
      last_fetch_at: string;
      /**
       * Locked
       * @description Whether this config can be renamed or deleted.
       */
      locked: boolean;
      /**
       * Name
       * @description Name of the config.
       */
      name: string;
      /**
       * Project
       * @description Identifier of the project that the config belongs to.
       */
      project: string;
      /**
       * Root
       * @description Whether this config is the root of its environment.
       */
      root: boolean;
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
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_CONFIG_LOGS_GET tool input.
 */
type DOPPLER_SECRETOPS_CONFIG_LOGS_GET_INPUT = {
  /**
   * Config
   * @description Name of the configuration.
   */
  config?: string;
  /**
   * Log
   * @description Unique identifier of the config log to retrieve.
   */
  log?: string;
  /**
   * Project
   * @description Unique identifier for the project.
   */
  project?: string;
};

/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_CONFIG_LOGS_GET tool output.
 */
type DOPPLER_SECRETOPS_CONFIG_LOGS_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Config
       * @description Configuration name associated with this log.
       */
      config: string;
      /**
       * Created At
       * @description Timestamp when the log was created.
       */
      created_at: string;
      /**
       * Diff
       * @description List of changes.
       */
      diff: {
          /**
           * Added
           * @description Value that was added.
           */
          added: string;
          /**
           * Name
           * @description Name of the secret.
           */
          name: string;
          /**
           * Removed
           * @description Value that was removed.
           */
          removed: string;
      }[];
      /**
       * Environment
       * @description Environment identifier where the event occurred.
       */
      environment: string;
      /**
       * Html
       * @description HTML describing the event.
       */
      html: string;
      /**
       * Id
       * @description Unique identifier for the config log.
       */
      id: string;
      /**
       * Project
       * @description Unique identifier for the project of this log.
       */
      project: string;
      /**
       * Rollback
       * @description Indicates whether this log entry is a rollback.
       */
      rollback: boolean;
      /**
       * Text
       * @description Text describing the event.
       */
      text: string;
      /**
       * User
       * @description Information about the user who performed the action.
       */
      user: {
          /**
           * Email
           * @description Email of the user who performed the action.
           */
          email: string;
          /**
           * Name
           * @description Name of the user who performed the action.
           */
          name: string;
          /**
           * Profile Image Url
           * @description URL of the user's profile image.
           */
          profile_image_url: string;
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
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_CONFIG_LOGS_LIST tool input.
 */
type DOPPLER_SECRETOPS_CONFIG_LOGS_LIST_INPUT = {
  /**
   * Config
   * @description Name/slug of the config to list logs for
   */
  config?: string;
  /**
   * Page
   * @description Page number for pagination
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page
   * @default 25
   */
  per_page: number | null;
  /**
   * Project
   * @description Unique identifier for the project
   */
  project?: string;
};

/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_CONFIG_LOGS_LIST tool output.
 */
type DOPPLER_SECRETOPS_CONFIG_LOGS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Logs
       * @description Array of config change log entries
       */
      logs: {
          /**
           * Config
           * @description Config name associated with this log
           */
          config: string;
          /**
           * Created At
           * Format: date-time
           * @description Timestamp when this log entry was created
           */
          created_at: string;
          /**
           * Diff
           * @description List of individual field changes in this entry
           */
          diff: {
              /**
               * Added
               * @description Value added in this change, if any
               * @default null
               */
              added: string | null;
              /**
               * Name
               * @description Name of the changed field
               */
              name: string;
              /**
               * Removed
               * @description Value removed in this change, if any
               * @default null
               */
              removed: string | null;
          }[];
          /**
           * Environment
           * @description Environment identifier associated with this log
           */
          environment: string;
          /**
           * Html
           * @description HTML formatted description of the event
           */
          html: string;
          /**
           * Id
           * @description Unique identifier for the log entry
           */
          id: string;
          /**
           * Project
           * @description Project identifier associated with this log
           */
          project: string;
          /**
           * Rollback
           * @description True if this entry represents a rollback
           */
          rollback: boolean;
          /**
           * Text
           * @description Plain-text description of the event
           */
          text: string;
          /**
           * User
           * @description Information about the user who triggered this change
           */
          user: {
              /**
               * Email
               * @description Email of the user who made the change
               */
              email: string;
              /**
               * Name
               * @description Full name of the user who made the change
               */
              name: string;
              /**
               * Profile Image Url
               * @description URL to the user's profile image
               * @default null
               */
              profile_image_url: string | null;
          };
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
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_CONFIG_LOGS_ROLLBACK tool input.
 */
type DOPPLER_SECRETOPS_CONFIG_LOGS_ROLLBACK_INPUT = {
  /**
   * Config
   * @description Name of the config where the log occurred
   */
  config?: string;
  /**
   * Log
   * @description The Config Log ID to roll back
   */
  log?: string;
  /**
   * Project
   * @description Unique identifier of the project containing the config
   */
  project?: string;
};

/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_CONFIG_LOGS_ROLLBACK tool output.
 */
type DOPPLER_SECRETOPS_CONFIG_LOGS_ROLLBACK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Config
       * @description Config name
       */
      config: string;
      /**
       * Created At
       * Format: date-time
       * @description Creation timestamp of the log entry
       */
      created_at: string;
      /**
       * Diff
       * @description List of diff entries for the change
       */
      diff: {
          /**
           * Added
           * @description New value added in this change
           */
          added: string;
          /**
           * Name
           * @description Name of the configuration entry changed
           */
          name: string;
          /**
           * Removed
           * @description Previous value removed in this change
           */
          removed: string;
      }[];
      /**
       * Environment
       * @description Environment identifier
       */
      environment: string;
      /**
       * Html
       * @description HTML description of the event
       */
      html: string;
      /**
       * Id
       * @description Unique identifier for the config log
       */
      id: string;
      /**
       * Project
       * @description Project identifier
       */
      project: string;
      /**
       * Rollback
       * @description Whether this log entry itself is a rollback action
       */
      rollback: boolean;
      /**
       * Text
       * @description Human-readable description of the event
       */
      text: string;
      /**
       * User
       * @description User who performed the action
       */
      user: {
          /**
           * Email
           * @description Email of the user who performed the action
           */
          email: string;
          /**
           * Name
           * @description Name of the user
           */
          name: string;
          /**
           * Profile Image Url
           * @description URL to the user's profile image
           */
          profile_image_url: string;
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
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_DYNAMIC_SECRETS_REVOKE_LEASE tool input.
 */
type DOPPLER_SECRETOPS_DYNAMIC_SECRETS_REVOKE_LEASE_INPUT = {
  /**
   * Config
   * @description Identifier of the config containing the dynamic secret (name or slug).
   */
  config?: string;
  /**
   * Dynamic Secret
   * @description Identifier of the dynamic secret for which to revoke the lease (name in uppercase, numbers, underscores).
   */
  dynamic_secret?: string;
  /**
   * Lease
   * @description Identifier of the lease to revoke.
   */
  lease?: string;
  /**
   * Project
   * @description Project identifier. Required unless using a Service Token scoped to a project.
   * @default null
   */
  project: string | null;
};

/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_DYNAMIC_SECRETS_REVOKE_LEASE tool output.
 */
type DOPPLER_SECRETOPS_DYNAMIC_SECRETS_REVOKE_LEASE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status Code
       * @description HTTP status code returned by the revoke lease operation
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
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_ENVIRONMENTS_CREATE tool input.
 */
type DOPPLER_SECRETOPS_ENVIRONMENTS_CREATE_INPUT = {
  /**
   * Name
   * @description Display name for the new environment
   */
  name?: string;
  /**
   * Project
   * @description Project identifier (slug) to associate the new environment with
   */
  project?: string;
  /**
   * Slug
   * @description Optional slug for the environment; if omitted, generated from the name
   * @default null
   */
  slug: string | null;
};

/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_ENVIRONMENTS_CREATE tool output.
 */
type DOPPLER_SECRETOPS_ENVIRONMENTS_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Environment
       * @description The created environment object
       */
      environment: {
          /**
           * Created At
           * @description Timestamp when the environment was created
           */
          created_at: string;
          /**
           * Id
           * @description Identifier/slug of the environment (e.g., 'dev')
           */
          id: string;
          /**
           * Initial Fetch At
           * @description Timestamp of the first secrets fetch in this environment, null until first fetch
           * @default null
           */
          initial_fetch_at: string | null;
          /**
           * Name
           * @description Display name of the environment
           */
          name: string;
          /**
           * Project
           * @description Identifier of the project the environment belongs to
           */
          project: string;
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
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_ENVIRONMENTS_DELETE tool input.
 */
type DOPPLER_SECRETOPS_ENVIRONMENTS_DELETE_INPUT = {
  /**
   * Environment
   * @description Slug of the environment to delete (e.g., 'production').
   */
  environment?: string;
  /**
   * Project
   * @description Name of the project containing the environment to delete.
   */
  project?: string;
};

/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_ENVIRONMENTS_DELETE tool output.
 */
type DOPPLER_SECRETOPS_ENVIRONMENTS_DELETE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Response
       * @description Raw response body from the API, if any.
       * @default null
       */
      raw_response: string | null;
      /**
       * Status Code
       * @description HTTP status code returned by the API.
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
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_ENVIRONMENTS_GET tool input.
 */
type DOPPLER_SECRETOPS_ENVIRONMENTS_GET_INPUT = {
  /**
   * Environment
   * @description Slug of the environment to retrieve.
   */
  environment?: string;
  /**
   * Project
   * @description Unique identifier for the project containing the environment.
   */
  project?: string;
};

/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_ENVIRONMENTS_GET tool output.
 */
type DOPPLER_SECRETOPS_ENVIRONMENTS_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Environment
       * @description The requested environment resource.
       */
      environment: {
          /**
           * Created At
           * Format: date-time
           * @description ISO-8601 timestamp when the environment was created.
           */
          created_at: string;
          /**
           * Id
           * @description Identifier for the environment.
           */
          id: string;
          /**
           * Initial Fetch At
           * Format: date-time
           * @description ISO-8601 timestamp of first secrets fetch from a config in the environment.
           */
          initial_fetch_at: string;
          /**
           * Name
           * @description Name of the environment.
           */
          name: string;
          /**
           * Project
           * @description Identifier of the project the environment belongs to.
           */
          project: string;
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
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_ENVIRONMENTS_LIST tool input.
 */
type DOPPLER_SECRETOPS_ENVIRONMENTS_LIST_INPUT = {
  /**
   * Project
   * @description Slug identifier of the project to list environments for
   */
  project?: string;
};

/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_ENVIRONMENTS_LIST tool output.
 */
type DOPPLER_SECRETOPS_ENVIRONMENTS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Environments
       * @description List of environment objects belonging to the specified project
       */
      environments: {
          /**
           * Created At
           * Format: date-time
           * @description ISO-8601 timestamp when the environment was created
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier (slug) of the environment
           */
          id: string;
          /**
           * Initial Fetch At
           * Format: date-time
           * @description ISO-8601 timestamp of first secrets fetch in this environment
           */
          initial_fetch_at: string;
          /**
           * Name
           * @description Human-readable name of the environment
           */
          name: string;
          /**
           * Project
           * @description Slug identifier of the project this environment belongs to
           */
          project: string;
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
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_ENVIRONMENTS_RENAME tool input.
 */
type DOPPLER_SECRETOPS_ENVIRONMENTS_RENAME_INPUT = {
  /**
   * Environment
   * @description Slug of the environment to rename (e.g., 'production').
   */
  environment?: string;
  /**
   * Name
   * @description New display name for the environment.
   */
  name?: string;
  /**
   * Project
   * @description Identifier of the project containing the environment to rename.
   */
  project?: string;
};

/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_ENVIRONMENTS_RENAME tool output.
 */
type DOPPLER_SECRETOPS_ENVIRONMENTS_RENAME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Environment
       * @description The updated environment resource.
       */
      environment: {
          /**
           * Created At
           * Format: date-time
           * @description ISO-8601 timestamp when the environment was created.
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier for the environment.
           */
          id: string;
          /**
           * Initial Fetch At
           * Format: date-time
           * @description ISO-8601 timestamp of the first secrets fetch in this environment.
           */
          initial_fetch_at: string;
          /**
           * Name
           * @description Display name of the environment.
           */
          name: string;
          /**
           * Project
           * @description Identifier of the project this environment belongs to.
           */
          project: string;
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
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_GROUPS_DELETE_MEMBER tool input.
 */
type DOPPLER_SECRETOPS_GROUPS_DELETE_MEMBER_INPUT = {
  /**
   * Member Slug
   * @description Slug identifier of the member to remove
   */
  member_slug?: string;
  /**
   * Slug
   * @description Slug identifier of the group
   */
  slug?: string;
  /**
   * Type
   * @description Member type (e.g., 'user' or 'team')
   */
  type?: string;
};

/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_GROUPS_DELETE_MEMBER tool output.
 */
type DOPPLER_SECRETOPS_GROUPS_DELETE_MEMBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status Code
       * @description HTTP status code returned by the delete operation
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
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_INTEGRATIONS_LIST tool input.
 */
type DOPPLER_SECRETOPS_INTEGRATIONS_LIST_INPUT = object;

/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_INTEGRATIONS_LIST tool output.
 */
type DOPPLER_SECRETOPS_INTEGRATIONS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the integration was created, in ISO-8601 format.
       */
      created_at: string;
      /**
       * Data
       * @description Configuration details for the integration.
       */
      data: {
          /**
           * Api Key
           * @description API key for Fly.io or Terraform Cloud integration.
           * @default null
           */
          api_key: string | null;
          /**
           * Api Token
           * @description API token for CircleCI integration.
           * @default null
           */
          api_token: string | null;
          /**
           * Aws Assume Role Arn
           * @description ARN of the AWS role that Doppler assumes for the integration.
           * @default null
           */
          aws_assume_role_arn: string | null;
          /**
           * Client Id
           * @description Service Principal Client ID for Azure integration.
           * @default null
           */
          client_id: string | null;
          /**
           * Client Secret
           * @description Service Principal Client Secret for Azure integration.
           * @default null
           */
          client_secret: string | null;
          /**
           * Gcp Key
           * @description IAM Service Account JSON key for GCP Secret Manager integration.
           * @default null
           */
          gcp_key: string | null;
          /**
           * Gcp Secret Prefix
           * @description Prefix for secrets created in GCP Secret Manager.
           * @default null
           */
          gcp_secret_prefix: string | null;
          /**
           * Tenant Id
           * @description Service Principal Tenant ID for Azure integration.
           * @default null
           */
          tenant_id: string | null;
      };
      /**
       * Id
       * @description Unique identifier for the integration.
       */
      id: string;
      /**
       * Type
       * @description Type of the integration.
       * @enum {string}
       */
      type: "aws_secrets_manager" | "aws_parameter_store" | "azure_vault_service_principal" | "circleci" | "flyio" | "gcp_secret_manager" | "terraform_cloud";
      /**
       * Updated At
       * @description Timestamp when the integration was last updated, in ISO-8601 format.
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
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_INVITES_LIST tool input.
 */
type DOPPLER_SECRETOPS_INVITES_LIST_INPUT = object;

/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_INVITES_LIST tool output.
 */
type DOPPLER_SECRETOPS_INVITES_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Accept Url
       * @description URL the invitee uses to accept the invitation
       */
      accept_url: string;
      /**
       * Email
       * @description Email address of the invitee
       */
      email: string;
      /**
       * Id
       * @description Unique identifier of the invite
       */
      id: string;
      /**
       * Role
       * @description Role assigned to the invitee (e.g., 'viewer', 'editor', 'owner')
       */
      role: string;
      /**
       * Sent At
       * @description ISO-8601 timestamp when the invite was sent
       */
      sent_at: string;
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
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_PROJECTS_CREATE tool input.
 */
type DOPPLER_SECRETOPS_PROJECTS_CREATE_INPUT = {
  /**
   * Description
   * @description Optional project description.
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Project name. Recommended hyphen-separated lowercase. Must be 2-80 characters.
   */
  name?: string;
};

/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_PROJECTS_CREATE tool output.
 */
type DOPPLER_SECRETOPS_PROJECTS_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the project was created.
       */
      created_at: string;
      /**
       * Description
       * @description Description of the project.
       */
      description: string;
      /**
       * Id
       * @description Unique identifier for the project.
       */
      id: string;
      /**
       * Name
       * @description Name of the project.
       */
      name: string;
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
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_PROJECTS_DELETE tool input.
 */
type DOPPLER_SECRETOPS_PROJECTS_DELETE_INPUT = {
  /**
   * Project
   * @description Unique identifier (name/slug) of the project to delete.
   */
  project?: string;
};

/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_PROJECTS_DELETE tool output.
 */
type DOPPLER_SECRETOPS_PROJECTS_DELETE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the project was created.
       */
      created_at: string;
      /**
       * Description
       * @description Description of the project, if any.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier for the project.
       */
      id: string;
      /**
       * Name
       * @description Name of the project.
       */
      name: string;
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
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_PROJECTS_LIST tool input.
 */
type DOPPLER_SECRETOPS_PROJECTS_LIST_INPUT = {
  /**
   * Page
   * @description Page number for pagination (1-indexed). Defaults to 1.
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of projects per page. Defaults to 25, max 100.
   * @default 25
   */
  per_page: number | null;
};

/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_PROJECTS_LIST tool output.
 */
type DOPPLER_SECRETOPS_PROJECTS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Projects
       * @description Array of project objects
       */
      projects: {
          /**
           * Created At
           * @description ISO-8601 timestamp when the project was created
           */
          created_at: string;
          /**
           * Description
           * @description Description of the project, if any
           * @default null
           */
          description: string | null;
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
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_PROJECT_MEMBERS_DELETE tool input.
 */
type DOPPLER_SECRETOPS_PROJECT_MEMBERS_DELETE_INPUT = {
  /**
   * Project
   * @description Project slug identifier from which to remove the member.
   */
  project?: string;
  /**
   * Slug
   * @description Member slug identifier to delete.
   */
  slug?: string;
  /**
   * Type
   * @description Member type segment in the URL path.
   */
  type?: string;
};

/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_PROJECT_MEMBERS_DELETE tool output.
 */
type DOPPLER_SECRETOPS_PROJECT_MEMBERS_DELETE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status Code
       * @description HTTP status code returned by the delete operation
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
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_PROJECT_MEMBERS_GET tool input.
 */
type DOPPLER_SECRETOPS_PROJECT_MEMBERS_GET_INPUT = {
  /**
   * Project
   * @description Project slug identifier to which the member belongs.
   */
  project?: string;
  /**
   * Slug
   * @description Member slug identifier to retrieve.
   */
  slug?: string;
  /**
   * Type
   * @description Member type segment in the URL path (e.g., 'users', 'service-accounts').
   */
  type?: string;
};

/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_PROJECT_MEMBERS_GET tool output.
 */
type DOPPLER_SECRETOPS_PROJECT_MEMBERS_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Member
       * @description Full JSON object representing the project membership record
       */
      member: {
          [key: string]: unknown;
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
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_PROJECT_PERMISSIONS_LIST tool input.
 */
type DOPPLER_SECRETOPS_PROJECT_PERMISSIONS_LIST_INPUT = object;

/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_PROJECT_PERMISSIONS_LIST tool output.
 */
type DOPPLER_SECRETOPS_PROJECT_PERMISSIONS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Category
       * @description Category or grouping of the permission
       */
      category: string;
      /**
       * Description
       * @description Detailed description of what the permission allows
       */
      description: string;
      /**
       * Id
       * @description Unique identifier for the permission
       */
      id: string;
      /**
       * Name
       * @description Human-readable name of the permission
       */
      name: string;
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
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_PROJECT_ROLES_GET tool input.
 */
type DOPPLER_SECRETOPS_PROJECT_ROLES_GET_INPUT = {
  /**
   * Role
   * @description Slug identifier of the project role to retrieve
   */
  role?: string;
};

/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_PROJECT_ROLES_GET tool output.
 */
type DOPPLER_SECRETOPS_PROJECT_ROLES_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO-8601 timestamp when the role was created
       */
      created_at: string;
      /**
       * Description
       * @description Description of the project role
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the project role
       */
      id: string;
      /**
       * Name
       * @description Name of the project role
       */
      name: string;
      /**
       * Permissions
       * @description List of permissions assigned to the project role
       */
      permissions: string[];
      /**
       * Updated At
       * @description ISO-8601 timestamp when the role was last updated
       */
      updated_at: string;
      /**
       * Workspace
       * @description Workspace identifier the role belongs to
       */
      workspace: string;
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
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_SECRETS_UPDATE tool input.
 */
type DOPPLER_SECRETOPS_SECRETS_UPDATE_INPUT = {
  /**
   * Config
   * @description Identifier of the config whose secrets will be updated.
   */
  config?: string;
  /**
   * Project
   * @description Identifier of the project containing the config.
   */
  project?: string;
  /**
   * Secrets
   * @description Mapping of secret names to their new values.
   */
  secrets?: {
      [key: string]: string;
  };
};

/**
 * Type of DOPPLER_SECRETOPS's DOPPLER_SECRETOPS_SECRETS_UPDATE tool output.
 */
type DOPPLER_SECRETOPS_SECRETS_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Secrets
       * @description Map of secret names to their updated details.
       */
      secrets: {
          [key: string]: {
              /**
               * Computed
               * @description The computed or derived secret value, if any.
               * @default null
               */
              computed: string | null;
              /**
               * Note
               * @description Optional annotation or comment for the secret.
               * @default null
               */
              note: string | null;
              /**
               * Raw
               * @description The raw secret value as stored.
               * @default null
               */
              raw: string | null;
          };
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
 * Type map of all available tool input types for toolkit "DOPPLER_SECRETOPS".
 */
export type DOPPLER_SECRETOPS_TOOL_INPUTS = {
  ACTIVITY_LOGS_LIST: DOPPLER_SECRETOPS_ACTIVITY_LOGS_LIST_INPUT
  ACTIVITY_LOGS_RETRIEVE: DOPPLER_SECRETOPS_ACTIVITY_LOGS_RETRIEVE_INPUT
  CONFIGS_CLONE: DOPPLER_SECRETOPS_CONFIGS_CLONE_INPUT
  CONFIGS_CREATE: DOPPLER_SECRETOPS_CONFIGS_CREATE_INPUT
  CONFIGS_DELETE: DOPPLER_SECRETOPS_CONFIGS_DELETE_INPUT
  CONFIGS_GET: DOPPLER_SECRETOPS_CONFIGS_GET_INPUT
  CONFIGS_LOCK: DOPPLER_SECRETOPS_CONFIGS_LOCK_INPUT
  CONFIGS_UNLOCK: DOPPLER_SECRETOPS_CONFIGS_UNLOCK_INPUT
  CONFIGS_UPDATE: DOPPLER_SECRETOPS_CONFIGS_UPDATE_INPUT
  CONFIG_LOGS_GET: DOPPLER_SECRETOPS_CONFIG_LOGS_GET_INPUT
  CONFIG_LOGS_LIST: DOPPLER_SECRETOPS_CONFIG_LOGS_LIST_INPUT
  CONFIG_LOGS_ROLLBACK: DOPPLER_SECRETOPS_CONFIG_LOGS_ROLLBACK_INPUT
  DYNAMIC_SECRETS_REVOKE_LEASE: DOPPLER_SECRETOPS_DYNAMIC_SECRETS_REVOKE_LEASE_INPUT
  ENVIRONMENTS_CREATE: DOPPLER_SECRETOPS_ENVIRONMENTS_CREATE_INPUT
  ENVIRONMENTS_DELETE: DOPPLER_SECRETOPS_ENVIRONMENTS_DELETE_INPUT
  ENVIRONMENTS_GET: DOPPLER_SECRETOPS_ENVIRONMENTS_GET_INPUT
  ENVIRONMENTS_LIST: DOPPLER_SECRETOPS_ENVIRONMENTS_LIST_INPUT
  ENVIRONMENTS_RENAME: DOPPLER_SECRETOPS_ENVIRONMENTS_RENAME_INPUT
  GROUPS_DELETE_MEMBER: DOPPLER_SECRETOPS_GROUPS_DELETE_MEMBER_INPUT
  INTEGRATIONS_LIST: DOPPLER_SECRETOPS_INTEGRATIONS_LIST_INPUT
  INVITES_LIST: DOPPLER_SECRETOPS_INVITES_LIST_INPUT
  PROJECTS_CREATE: DOPPLER_SECRETOPS_PROJECTS_CREATE_INPUT
  PROJECTS_DELETE: DOPPLER_SECRETOPS_PROJECTS_DELETE_INPUT
  PROJECTS_LIST: DOPPLER_SECRETOPS_PROJECTS_LIST_INPUT
  PROJECT_MEMBERS_DELETE: DOPPLER_SECRETOPS_PROJECT_MEMBERS_DELETE_INPUT
  PROJECT_MEMBERS_GET: DOPPLER_SECRETOPS_PROJECT_MEMBERS_GET_INPUT
  PROJECT_PERMISSIONS_LIST: DOPPLER_SECRETOPS_PROJECT_PERMISSIONS_LIST_INPUT
  PROJECT_ROLES_GET: DOPPLER_SECRETOPS_PROJECT_ROLES_GET_INPUT
  SECRETS_UPDATE: DOPPLER_SECRETOPS_SECRETS_UPDATE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DOPPLER_SECRETOPS".
 */
export type DOPPLER_SECRETOPS_TOOL_OUTPUTS = {
  ACTIVITY_LOGS_LIST: DOPPLER_SECRETOPS_ACTIVITY_LOGS_LIST_OUTPUT
  ACTIVITY_LOGS_RETRIEVE: DOPPLER_SECRETOPS_ACTIVITY_LOGS_RETRIEVE_OUTPUT
  CONFIGS_CLONE: DOPPLER_SECRETOPS_CONFIGS_CLONE_OUTPUT
  CONFIGS_CREATE: DOPPLER_SECRETOPS_CONFIGS_CREATE_OUTPUT
  CONFIGS_DELETE: DOPPLER_SECRETOPS_CONFIGS_DELETE_OUTPUT
  CONFIGS_GET: DOPPLER_SECRETOPS_CONFIGS_GET_OUTPUT
  CONFIGS_LOCK: DOPPLER_SECRETOPS_CONFIGS_LOCK_OUTPUT
  CONFIGS_UNLOCK: DOPPLER_SECRETOPS_CONFIGS_UNLOCK_OUTPUT
  CONFIGS_UPDATE: DOPPLER_SECRETOPS_CONFIGS_UPDATE_OUTPUT
  CONFIG_LOGS_GET: DOPPLER_SECRETOPS_CONFIG_LOGS_GET_OUTPUT
  CONFIG_LOGS_LIST: DOPPLER_SECRETOPS_CONFIG_LOGS_LIST_OUTPUT
  CONFIG_LOGS_ROLLBACK: DOPPLER_SECRETOPS_CONFIG_LOGS_ROLLBACK_OUTPUT
  DYNAMIC_SECRETS_REVOKE_LEASE: DOPPLER_SECRETOPS_DYNAMIC_SECRETS_REVOKE_LEASE_OUTPUT
  ENVIRONMENTS_CREATE: DOPPLER_SECRETOPS_ENVIRONMENTS_CREATE_OUTPUT
  ENVIRONMENTS_DELETE: DOPPLER_SECRETOPS_ENVIRONMENTS_DELETE_OUTPUT
  ENVIRONMENTS_GET: DOPPLER_SECRETOPS_ENVIRONMENTS_GET_OUTPUT
  ENVIRONMENTS_LIST: DOPPLER_SECRETOPS_ENVIRONMENTS_LIST_OUTPUT
  ENVIRONMENTS_RENAME: DOPPLER_SECRETOPS_ENVIRONMENTS_RENAME_OUTPUT
  GROUPS_DELETE_MEMBER: DOPPLER_SECRETOPS_GROUPS_DELETE_MEMBER_OUTPUT
  INTEGRATIONS_LIST: DOPPLER_SECRETOPS_INTEGRATIONS_LIST_OUTPUT
  INVITES_LIST: DOPPLER_SECRETOPS_INVITES_LIST_OUTPUT
  PROJECTS_CREATE: DOPPLER_SECRETOPS_PROJECTS_CREATE_OUTPUT
  PROJECTS_DELETE: DOPPLER_SECRETOPS_PROJECTS_DELETE_OUTPUT
  PROJECTS_LIST: DOPPLER_SECRETOPS_PROJECTS_LIST_OUTPUT
  PROJECT_MEMBERS_DELETE: DOPPLER_SECRETOPS_PROJECT_MEMBERS_DELETE_OUTPUT
  PROJECT_MEMBERS_GET: DOPPLER_SECRETOPS_PROJECT_MEMBERS_GET_OUTPUT
  PROJECT_PERMISSIONS_LIST: DOPPLER_SECRETOPS_PROJECT_PERMISSIONS_LIST_OUTPUT
  PROJECT_ROLES_GET: DOPPLER_SECRETOPS_PROJECT_ROLES_GET_OUTPUT
  SECRETS_UPDATE: DOPPLER_SECRETOPS_SECRETS_UPDATE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DOPPLER_SECRETOPS toolkit.
 */
export const DOPPLER_SECRETOPS = {
  slug: "doppler_secretops",
  tools: {
    /**
     * Tool to list workplace activity logs. Use when you need to fetch recent activity logs.
     */
    ACTIVITY_LOGS_LIST: "DOPPLER_SECRETOPS_ACTIVITY_LOGS_LIST",
    /**
     * Tool to retrieve a single activity log entry by id. Use when you have a valid Activity Log id.
     */
    ACTIVITY_LOGS_RETRIEVE: "DOPPLER_SECRETOPS_ACTIVITY_LOGS_RETRIEVE",
    /**
     * Tool to clone a branch config including all its secrets. Use after confirming the source config details.
     */
    CONFIGS_CLONE: "DOPPLER_SECRETOPS_CONFIGS_CLONE",
    /**
     * Tool to create a branch config. Use when you need to programmatically establish a new branch-based configuration for a specified project and environment. Use after selecting the target project and environment.
     */
    CONFIGS_CREATE: "DOPPLER_SECRETOPS_CONFIGS_CREATE",
    /**
     * Tool to delete a config permanently. Use when you need to remove a config that is no longer needed.
     */
    CONFIGS_DELETE: "DOPPLER_SECRETOPS_CONFIGS_DELETE",
    /**
     * Tool to fetch a config's details. Use when you need metadata for a specific config after specifying the project and config names. Example: "Get details for config 'staging-config' in project 'proj-123'."
     */
    CONFIGS_GET: "DOPPLER_SECRETOPS_CONFIGS_GET",
    /**
     * Tool to lock a config. Use when you need to prevent a config from being renamed or deleted after confirming the project and config names. Example: "Lock config 'staging-config' in project 'proj-123' after finalizing environment setup."
     */
    CONFIGS_LOCK: "DOPPLER_SECRETOPS_CONFIGS_LOCK",
    /**
     * Tool to unlock a config. Use when you need to allow renaming or deletion of a previously locked config. Example: "Unlock config 'staging-config' in project 'proj-123'."
     */
    CONFIGS_UNLOCK: "DOPPLER_SECRETOPS_CONFIGS_UNLOCK",
    /**
     * Tool to modify an existing config. Use when you need to rename a config after confirming project and config names.
     */
    CONFIGS_UPDATE: "DOPPLER_SECRETOPS_CONFIGS_UPDATE",
    /**
     * Tool to retrieve a specific config log entry. Use when needing details of a single config log; call after specifying project, config, and log identifiers.
     */
    CONFIG_LOGS_GET: "DOPPLER_SECRETOPS_CONFIG_LOGS_GET",
    /**
     * Tool to list config change logs for a specific config. Use when you need the audit trail for a config after confirming its identity.
     */
    CONFIG_LOGS_LIST: "DOPPLER_SECRETOPS_CONFIG_LOGS_LIST",
    /**
     * Tool to rollback a config to a selected log version. Use when needing to undo a specific change by its log ID, after confirming project, config, and log ID.
     */
    CONFIG_LOGS_ROLLBACK: "DOPPLER_SECRETOPS_CONFIG_LOGS_ROLLBACK",
    /**
     * Tool to revoke a dynamic secret lease. Use when you need to invalidate an active lease by its ID after confirming the config and dynamic secret identifiers.
     */
    DYNAMIC_SECRETS_REVOKE_LEASE: "DOPPLER_SECRETOPS_DYNAMIC_SECRETS_REVOKE_LEASE",
    /**
     * Tool to create a new environment. Use when you need to programmatically create an environment for a specified project.
     */
    ENVIRONMENTS_CREATE: "DOPPLER_SECRETOPS_ENVIRONMENTS_CREATE",
    /**
     * Tool to delete an environment. Use when you need to remove an environment from a project after confirming it's no longer in use.
     */
    ENVIRONMENTS_DELETE: "DOPPLER_SECRETOPS_ENVIRONMENTS_DELETE",
    /**
     * Tool to retrieve an environment. Use when you need metadata for a specific environment after specifying the project and environment slug.
     */
    ENVIRONMENTS_GET: "DOPPLER_SECRETOPS_ENVIRONMENTS_GET",
    /**
     * Tool to list environments in a Doppler project. Use when you need environment metadata for a specific project after providing the project slug.
     */
    ENVIRONMENTS_LIST: "DOPPLER_SECRETOPS_ENVIRONMENTS_LIST",
    /**
     * Tool to rename an environment. Use when you need to update an environment's display name after confirming project and environment identifiers.
     */
    ENVIRONMENTS_RENAME: "DOPPLER_SECRETOPS_ENVIRONMENTS_RENAME",
    /**
     * Tool to remove a member from a group. Use after confirming the group slug and member identifiers.
     */
    GROUPS_DELETE_MEMBER: "DOPPLER_SECRETOPS_GROUPS_DELETE_MEMBER",
    /**
     * Tool to list all external integrations. Use when you need to retrieve all configured external integrations after authentication.
     */
    INTEGRATIONS_LIST: "DOPPLER_SECRETOPS_INTEGRATIONS_LIST",
    /**
     * Tool to list open workplace invites. Use when you need to retrieve all pending invitations for the current Doppler workplace after authenticating.
     */
    INVITES_LIST: "DOPPLER_SECRETOPS_INVITES_LIST",
    /**
     * Tool to create a project. Use when you need to programmatically initialize a new Doppler project after authentication.
     */
    PROJECTS_CREATE: "DOPPLER_SECRETOPS_PROJECTS_CREATE",
    /**
     * Tool to delete a project permanently. Use after confirming irreversible removal.
     */
    PROJECTS_DELETE: "DOPPLER_SECRETOPS_PROJECTS_DELETE",
    /**
     * Tool to list Doppler projects. Use when you need to retrieve all projects with optional pagination.
     */
    PROJECTS_LIST: "DOPPLER_SECRETOPS_PROJECTS_LIST",
    /**
     * Tool to remove a member from a project. Use after confirming project slug, member type, and slug. Example: "Delete member 'jdoe' of type 'users' from project 'my-project-slug'."
     */
    PROJECT_MEMBERS_DELETE: "DOPPLER_SECRETOPS_PROJECT_MEMBERS_DELETE",
    /**
     * Tool to retrieve a project member by type and slug. Use after confirming project slug, member type, and slug.
     */
    PROJECT_MEMBERS_GET: "DOPPLER_SECRETOPS_PROJECT_MEMBERS_GET",
    /**
     * Tool to list project-level permissions. Use when you need to fetch all available permissions for projects after authentication.
     */
    PROJECT_PERMISSIONS_LIST: "DOPPLER_SECRETOPS_PROJECT_PERMISSIONS_LIST",
    /**
     * Tool to retrieve a project role. Use when you need details of a specific project role after authenticating.
     */
    PROJECT_ROLES_GET: "DOPPLER_SECRETOPS_PROJECT_ROLES_GET",
    /**
     * Tool to update secrets in a config. Use when you need to change secret values for deployments.
     */
    SECRETS_UPDATE: "DOPPLER_SECRETOPS_SECRETS_UPDATE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DOPPLER_SECRETOPS".
 */
export type DOPPLER_SECRETOPS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DOPPLER_SECRETOPS".
 */
export type DOPPLER_SECRETOPS_TRIGGER_EVENTS = {}
