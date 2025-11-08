// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BUGSNAG's BUGSNAG_BULK_UPDATE_ERRORS tool input.
 */
type BUGSNAG_BULK_UPDATE_ERRORS_INPUT = {
  /**
   * Assigned Collaborator Id
   * @description ID of collaborator to assign the errors to (mutually exclusive with assigned_team_id)
   * @default null
   */
  assigned_collaborator_id: string | null;
  /**
   * Assigned Team Id
   * @description ID of team to assign the errors to (mutually exclusive with assigned_collaborator_id)
   * @default null
   */
  assigned_team_id: string | null;
  /**
   * Error Ids
   * @description List of error IDs to update
   */
  error_ids?: string[];
  /**
   * Issue Title
   * @description Title to set on a created or linked issue
   * @default null
   */
  issue_title: string | null;
  /**
   * Issue Url
   * @description HTTP link to an external issue when linking or creating an issue
   * @default null
   */
  issue_url: string | null;
  /**
   * Notification Id
   * @description ID of the issue tracker to use for issue operations
   * @default null
   */
  notification_id: string | null;
  /**
   * Operation
   * @description Operation to perform on the errors (e.g. 'overriden_severity', 'assign_collaborator')
   */
  operation?: string;
  /**
   * Project Id
   * @description Identifier of the project containing the errors
   */
  project_id?: string;
  /**
   * ReopenRules
   * @description Rules for automatically reopening the error
   * @default null
   */
  reopen_rules: {
      /**
       * Additional Occurrences
       * @description Additional occurrences beyond threshold to trigger reopening, must be non-negative
       * @default null
       */
      additional_occurrences: number | null;
      /**
       * Hours
       * @description Number of hours in reopen rule, must be non-negative
       * @default null
       */
      hours: number | null;
      /**
       * Occurrence Threshold
       * @description Threshold of occurrences to trigger reopening, must be non-negative
       * @default null
       */
      occurrence_threshold: number | null;
      /**
       * Occurrences
       * @description Number of occurrences in reopen rule, must be non-negative
       * @default null
       */
      occurrences: number | null;
      /**
       * Reopen After
       * @description Time after which to reopen errors
       * @default null
       */
      reopen_after: string | null;
      /**
       * Reopen If
       * @description Condition under which to reopen errors (e.g. 'n_additional_occurrences')
       * @default null
       */
      reopen_if: string | null;
      /**
       * Seconds
       * @description Number of seconds in reopen rule, must be non-negative
       * @default null
       */
      seconds: number | null;
  } | null;
  /**
   * Severity
   * @description New severity level when operation is 'overriden_severity'
   * @default null
   */
  severity: string | null;
  /**
   * Verify Issue Url
   * @description Whether to verify the issue_url with the configured issue tracker
   * @default null
   */
  verify_issue_url: boolean | null;
};

/**
 * Type of BUGSNAG's BUGSNAG_BULK_UPDATE_ERRORS tool output.
 */
type BUGSNAG_BULK_UPDATE_ERRORS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Operation
       * @description Operation applied to the errors
       */
      operation: string;
      /**
       * Results
       * @description Mapping of error IDs to their update results
       */
      results: {
          [key: string]: {
              /**
               * Assigned Collaborator Id
               * @description ID of collaborator assigned
               * @default null
               */
              assigned_collaborator_id: string | null;
              /**
               * Assigned Team Id
               * @description ID of team assigned
               * @default null
               */
              assigned_team_id: string | null;
              /**
               * @description Details of issue created during update
               * @default null
               */
              created_issue: {
                  /**
                   * Id
                   * @description Issue identifier
                   */
                  id: string;
                  /**
                   * Key
                   * @description Issue key (e.g. ticket number)
                   */
                  key: string;
                  /**
                   * Number
                   * @description Issue number
                   */
                  number: number;
                  /**
                   * Type
                   * @description Issue tracker type (e.g. 'jira')
                   */
                  type: string;
                  /**
                   * Url
                   * @description URL to the issue
                   */
                  url: string;
              } | null;
              /**
               * Discarded
               * @description Whether the error is discarded
               * @default null
               */
              discarded: boolean | null;
              /**
               * Linked Issues
               * @description List of linked issues
               */
              linked_issues?: {
                  /**
                   * Id
                   * @description Issue identifier
                   */
                  id: string;
                  /**
                   * Key
                   * @description Issue key (e.g. ticket number)
                   */
                  key: string;
                  /**
                   * Number
                   * @description Issue number
                   */
                  number: number;
                  /**
                   * Type
                   * @description Issue tracker type (e.g. 'jira')
                   */
                  type: string;
                  /**
                   * Url
                   * @description URL to the issue
                   */
                  url: string;
              }[];
              /**
               * @description Reopen rules applied to the error
               * @default null
               */
              reopen_rules: {
                  /**
                   * Additional Occurrences
                   * @description Additional occurrences beyond threshold to trigger reopening, must be non-negative
                   * @default null
                   */
                  additional_occurrences: number | null;
                  /**
                   * Hours
                   * @description Number of hours in reopen rule, must be non-negative
                   * @default null
                   */
                  hours: number | null;
                  /**
                   * Occurrence Threshold
                   * @description Threshold of occurrences to trigger reopening, must be non-negative
                   * @default null
                   */
                  occurrence_threshold: number | null;
                  /**
                   * Occurrences
                   * @description Number of occurrences in reopen rule, must be non-negative
                   * @default null
                   */
                  occurrences: number | null;
                  /**
                   * Reopen After
                   * @description Time after which to reopen errors
                   * @default null
                   */
                  reopen_after: string | null;
                  /**
                   * Reopen If
                   * @description Condition under which to reopen errors (e.g. 'n_additional_occurrences')
                   * @default null
                   */
                  reopen_if: string | null;
                  /**
                   * Seconds
                   * @description Number of seconds in reopen rule, must be non-negative
                   * @default null
                   */
                  seconds: number | null;
              } | null;
              /**
               * Status
               * @description Updated status of the error
               * @default null
               */
              status: string | null;
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
 * Type of BUGSNAG's BUGSNAG_CONFIGURE_INTEGRATION tool input.
 */
type BUGSNAG_CONFIGURE_INTEGRATION_INPUT = {
  /**
   * Configuration
   * @description Integration-specific configuration object, such as credentials or connection parameters
   */
  configuration?: {
      [key: string]: unknown;
  };
  /**
   * Disable Release Stages
   * @description Optional list of release stages for which this integration should be disabled
   * @default null
   */
  disable_release_stages: string[] | null;
  /**
   * Disable Severities
   * @description Optional list of severity levels to disable for this integration
   * @default null
   */
  disable_severities: string[] | null;
  /**
   * Disable Unhandled States
   * @description Optional list of unhandled states to disable for this integration
   * @default null
   */
  disable_unhandled_states: string[] | null;
  /**
   * Integration Connection Id
   * @description Optional ID of an existing integration connection to base this configuration on
   * @default null
   */
  integration_connection_id: string | null;
  /**
   * Integration Key
   * @description Key identifying the integration service
   */
  integration_key?: string;
  /**
   * Issue Automation
   * @description Optional settings for automatic issue-tracker triggers
   * @default null
   */
  issue_automation: {
      [key: string]: unknown;
  } | null;
  /**
   * Label
   * @description Optional human-readable label for this configured integration
   * @default null
   */
  label: string | null;
  /**
   * Project Id
   * @description ID of the project to configure the integration for
   */
  project_id?: string;
};

/**
 * Type of BUGSNAG's BUGSNAG_CONFIGURE_INTEGRATION tool output.
 */
type BUGSNAG_CONFIGURE_INTEGRATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Additional Setup Required
       * @description Additional setup required, if any
       * @default null
       */
      additional_setup_required: string | null;
      /**
       * Configuration
       * @description Saved integration configuration details
       */
      configuration: {
          [key: string]: unknown;
      };
      /**
       * Description
       * @description Description of the configured integration
       * @default null
       */
      description: string | null;
      /**
       * Disable Release Stages
       * @description List of release stages disabled for this integration
       */
      disable_release_stages: string[];
      /**
       * Disable Severities
       * @description List of severity levels disabled for this integration
       */
      disable_severities: string[];
      /**
       * Disable Unhandled States
       * @description List of unhandled states disabled for this integration
       */
      disable_unhandled_states: string[];
      /**
       * Id
       * @description ID of the configured integration
       */
      id: string;
      /**
       * Integration Connection Id
       * @description ID of the associated integration connection
       * @default null
       */
      integration_connection_id: string | null;
      /**
       * Integration Key
       * @description Key identifying the integration service
       */
      integration_key: string;
      /**
       * Issue Automation
       * @description Issue automation settings
       */
      issue_automation: {
          [key: string]: unknown;
      };
      /**
       * Label
       * @description Label identifying the integration instance
       * @default null
       */
      label: string | null;
      /**
       * Last Failure Message
       * @description Error message from the most recent integration failure
       * @default null
       */
      last_failure_message: string | null;
      /**
       * Last Successful Usage At
       * @description ISO8601 timestamp of the last successful integration call
       * @default null
       */
      last_successful_usage_at: string | null;
      /**
       * Project Id
       * @description ID of the project this integration belongs to
       */
      project_id: string;
      /**
       * Status
       * @description Current status of the integration
       */
      status: string;
      /**
       * Total Rate Limits
       * @description Total count of rate-limit failures
       * @default null
       */
      total_rate_limits: number | null;
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
 * Type of BUGSNAG's BUGSNAG_CREATE_COLLABORATOR tool input.
 */
type BUGSNAG_CREATE_COLLABORATOR_INPUT = {
  /**
   * Admin
   * @description Whether the collaborator should have admin privileges
   * @default false
   */
  admin: boolean | null;
  /**
   * Email
   * Format: email
   * @description Email address of the collaborator to invite
   */
  email?: unknown;
  /**
   * Organization Id
   * @description ID of the Bugsnag organization to which the user will be invited
   */
  organization_id?: string;
  /**
   * Project Ids
   * @description Optional list of project IDs the collaborator should have access to. If omitted, no project-specific permissions are set.
   * @default null
   */
  project_ids: string[] | null;
};

/**
 * Type of BUGSNAG's BUGSNAG_CREATE_COLLABORATOR tool output.
 */
type BUGSNAG_CREATE_COLLABORATOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the collaborator was invited
       */
      created_at: string;
      /**
       * Email
       * Format: email
       * @description Email address of the collaborator
       */
      email: unknown;
      /**
       * Id
       * @description Unique identifier for the collaborator
       */
      id: string;
      /**
       * Is Admin
       * @description Indicates if the collaborator has admin privileges
       */
      is_admin: boolean;
      /**
       * Name
       * @description Name of the collaborator, if available
       * @default null
       */
      name: string | null;
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
 * Type of BUGSNAG's BUGSNAG_CREATE_CUSTOM_EVENT_FIELD tool input.
 */
type BUGSNAG_CREATE_CUSTOM_EVENT_FIELD_INPUT = {
  /**
   * Filter Options
   * @description Configuration for filter behavior
   */
  filter_options?: {
      /**
       * Aliases
       * @description Alternative keys for this field
       * @default null
       */
      aliases: string[] | null;
      /**
       * Description
       * @description Description of the event field
       * @default null
       */
      description: string | null;
      /**
       * Hint Text
       * @description Helper text shown in UI
       * @default null
       */
      hint_text: string | null;
      /**
       * Hint Url
       * @description URL for documentation
       * @default null
       */
      hint_url: string | null;
      /**
       * Match Types
       * @description Supported match operations
       * @default null
       */
      match_types: string[] | null;
      /**
       * Name
       * @description Display name for this event field
       */
      name: string;
      /**
       * Values
       * @description Allowed discrete values
       * @default null
       */
      values: {
          /**
           * Id
           * @description Identifier for this filter value
           */
          id: string;
          /**
           * Name
           * @description Display name for this filter value
           */
          name: string;
      }[] | null;
  };
  /**
   * Path
   * @description Path to the field in the event JSON, e.g. 'metaData.user.id'
   */
  path?: string;
  /**
   * PivotOptions
   * @description Configuration for pivot behavior
   * @default null
   */
  pivot_options: {
      /**
       * Average
       * @description Show average in pivot
       * @default false
       */
      average: boolean;
      /**
       * Cardinality
       * @description Show cardinality in pivot
       * @default true
       */
      cardinality: boolean;
      /**
       * Fields
       * @description Mapping of pivot value IDs to display names
       */
      fields: {
          [key: string]: string;
      };
      /**
       * Name
       * @description Name used for pivot summaries
       */
      name: string;
      /**
       * Summary
       * @description Include aggregate summary in pivot
       * @default false
       */
      summary: boolean;
      /**
       * Values
       * @description Include value counts in pivot
       * @default true
       */
      values: boolean;
  } | null;
  /**
   * Project Id
   * @description ID of the project
   */
  project_id?: string;
  /**
   * Reindex
   * @description Whether to reindex historical events for this field
   * @default false
   */
  reindex: boolean;
};

/**
 * Type of BUGSNAG's BUGSNAG_CREATE_CUSTOM_EVENT_FIELD tool output.
 */
type BUGSNAG_CREATE_CUSTOM_EVENT_FIELD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Custom
       * @description Whether this is a custom event field
       */
      custom: boolean;
      /**
       * Display Id
       * @description Identifier used for filtering by this field
       */
      display_id: string;
      /** Filter Options */
      filter_options: {
          /**
           * Aliases
           * @description Alternative keys for this field
           * @default null
           */
          aliases: string[] | null;
          /**
           * Description
           * @description Description of the event field
           * @default null
           */
          description: string | null;
          /**
           * Hint Text
           * @description Helper text shown in UI
           * @default null
           */
          hint_text: string | null;
          /**
           * Hint Url
           * @description URL for documentation
           * @default null
           */
          hint_url: string | null;
          /**
           * Match Types
           * @description Supported match operations
           * @default null
           */
          match_types: string[] | null;
          /**
           * Name
           * @description Display name for this event field
           */
          name: string;
          /**
           * Values
           * @description Allowed discrete values
           * @default null
           */
          values: {
              /**
               * Id
               * @description Identifier for this filter value
               */
              id: string;
              /**
               * Name
               * @description Display name for this filter value
               */
              name: string;
          }[] | null;
      };
      /** Pivot Options */
      pivot_options: {
          /**
           * Average
           * @description Show average in pivot
           * @default false
           */
          average: boolean;
          /**
           * Cardinality
           * @description Show cardinality in pivot
           * @default true
           */
          cardinality: boolean;
          /**
           * Fields
           * @description Mapping of pivot value IDs to display names
           */
          fields: {
              [key: string]: string;
          };
          /**
           * Name
           * @description Name used for pivot summaries
           */
          name: string;
          /**
           * Summary
           * @description Include aggregate summary in pivot
           * @default false
           */
          summary: boolean;
          /**
           * Values
           * @description Include value counts in pivot
           * @default true
           */
          values: boolean;
      };
      /**
       * Reindex In Progress
       * @description Whether reindex is in progress
       */
      reindex_in_progress: boolean;
      /**
       * Reindex Percentage
       * @description Percentage completion of reindex
       */
      reindex_percentage: number;
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
 * Type of BUGSNAG's BUGSNAG_CREATE_SAVED_SEARCH tool input.
 */
type BUGSNAG_CREATE_SAVED_SEARCH_INPUT = {
  /**
   * Filters
   * @description Filters mapping field names to a list of filter items
   */
  filters?: {
      [key: string]: {
          /**
           * Type
           * @description Type of comparison to perform
           * @enum {string}
           */
          type: "eq" | "ne" | "empty";
          /**
           * Value
           * @description Value to compare against
           */
          value: string;
      }[];
  };
  /**
   * Name
   * @description Name of the saved search
   */
  name?: string;
  /**
   * Project Default
   * @description Whether this saved search is the project default for the current user
   */
  project_default?: boolean;
  /**
   * Project Id
   * @description ID of the project this saved search is for
   */
  project_id?: string;
  /**
   * Shared
   * @description Whether this saved search is shared among collaborators
   * @default false
   */
  shared: boolean;
  /**
   * Sort
   * @description Sort order for the saved search, e.g., 'events'
   * @default null
   */
  sort: string | null;
};

/**
 * Type of BUGSNAG's BUGSNAG_CREATE_SAVED_SEARCH tool output.
 */
type BUGSNAG_CREATE_SAVED_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when this saved search was created
       */
      created_at?: string;
      /**
       * Filters
       * @description Filters in the saved search
       */
      filters?: {
          [key: string]: {
              /**
               * Type
               * @description Type of comparison to perform
               * @enum {string}
               */
              type: "eq" | "ne" | "empty";
              /**
               * Value
               * @description Value to compare against
               */
              value: string;
          }[];
      };
      /**
       * Fixed Error Inclusion
       * @description Inclusion criteria for fixed errors
       */
      fixed_error_inclusion?: string;
      /**
       * For Review Error Inclusion
       * @description Inclusion criteria for errors marked for review
       */
      for_review_error_inclusion?: string;
      /**
       * Has Assigned To
       * @description Indicates if the saved search has a filter with `assigned_to` set to anything other than `me`
       */
      has_assigned_to?: boolean;
      /**
       * Has Assigned To Me
       * @description Indicates if the saved search has a filter with `assigned_to` set to `me`
       */
      has_assigned_to_me?: boolean;
      /**
       * Has Created Issue Filter
       * @description Indicates if the saved search has a filter with any criteria related to created issues
       */
      has_created_issue_filter?: boolean;
      /**
       * Has Status Filter
       * @description Indicates if the saved search contains an explicit error status filter
       */
      has_status_filter?: boolean;
      /**
       * Id
       * @description ID of the created saved search
       */
      id?: string;
      /**
       * Ignored Error Inclusion
       * @description Inclusion criteria for ignored errors
       */
      ignored_error_inclusion?: string;
      /**
       * Name
       * @description Name of the saved search
       */
      name?: string;
      /**
       * New Error Inclusion
       * @description Inclusion criteria for new errors
       */
      new_error_inclusion?: string;
      /**
       * Open Error Inclusion
       * @description Inclusion criteria for open errors
       */
      open_error_inclusion?: string;
      /**
       * Project Default
       * @description Whether this saved search is the project default for the current user
       */
      project_default?: boolean;
      /**
       * Project Id
       * @description ID of project this saved search is for
       */
      project_id?: string;
      /**
       * Shared
       * @description Whether this saved search is shared among collaborators
       */
      shared?: boolean;
      /**
       * Snoozed Error Inclusion
       * @description Inclusion criteria for snoozed errors
       */
      snoozed_error_inclusion?: string;
      /**
       * Sort
       * @description Sort order for the saved search
       * @default null
       */
      sort: string | null;
      /**
       * Updated At
       * @description Timestamp when this saved search was last updated
       */
      updated_at?: string;
      /**
       * Updated By Id
       * @description ID of user who last updated this saved search
       */
      updated_by_id?: string;
      /**
       * User Id
       * @description ID of user who created the saved search
       */
      user_id?: string;
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
 * Type of BUGSNAG's BUGSNAG_DELETE_ALL_ERRORS_IN_PROJECT tool input.
 */
type BUGSNAG_DELETE_ALL_ERRORS_IN_PROJECT_INPUT = {
  /**
   * Project Id
   * @description ID of the project from which to delete all errors
   */
  project_id?: string;
};

/**
 * Type of BUGSNAG's BUGSNAG_DELETE_ALL_ERRORS_IN_PROJECT tool output.
 */
type BUGSNAG_DELETE_ALL_ERRORS_IN_PROJECT_OUTPUT = {
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
 * Type of BUGSNAG's BUGSNAG_DELETE_COLLABORATOR tool input.
 */
type BUGSNAG_DELETE_COLLABORATOR_INPUT = {
  /**
   * Collaborator Id
   * @description ID of the collaborator to remove
   */
  collaborator_id?: string;
  /**
   * Organization Id
   * @description ID of the Bugsnag organization from which to remove the collaborator
   */
  organization_id?: string;
};

/**
 * Type of BUGSNAG's BUGSNAG_DELETE_COLLABORATOR tool output.
 */
type BUGSNAG_DELETE_COLLABORATOR_OUTPUT = {
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
 * Type of BUGSNAG's BUGSNAG_DELETE_CONFIGURED_INTEGRATION tool input.
 */
type BUGSNAG_DELETE_CONFIGURED_INTEGRATION_INPUT = {
  /**
   * Id
   * @description ID of the configured integration to delete
   */
  id?: string;
};

/**
 * Type of BUGSNAG's BUGSNAG_DELETE_CONFIGURED_INTEGRATION tool output.
 */
type BUGSNAG_DELETE_CONFIGURED_INTEGRATION_OUTPUT = {
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
 * Type of BUGSNAG's BUGSNAG_DELETE_EVENT_FIELD tool input.
 */
type BUGSNAG_DELETE_EVENT_FIELD_INPUT = {
  /**
   * Display Id
   * @description Display identifier of the event field to delete
   */
  display_id?: string;
  /**
   * Project Id
   * @description ID of the project containing the custom event field
   */
  project_id?: string;
};

/**
 * Type of BUGSNAG's BUGSNAG_DELETE_EVENT_FIELD tool output.
 */
type BUGSNAG_DELETE_EVENT_FIELD_OUTPUT = {
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
 * Type of BUGSNAG's BUGSNAG_DELETE_PROJECT tool input.
 */
type BUGSNAG_DELETE_PROJECT_INPUT = {
  /**
   * Project Id
   * @description ID of the project to delete
   */
  project_id?: string;
};

/**
 * Type of BUGSNAG's BUGSNAG_DELETE_PROJECT tool output.
 */
type BUGSNAG_DELETE_PROJECT_OUTPUT = {
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
 * Type of BUGSNAG's BUGSNAG_DELETE_SAVED_SEARCH tool input.
 */
type BUGSNAG_DELETE_SAVED_SEARCH_INPUT = {
  /**
   * Saved Search Id
   * @description ID of the saved search to delete
   */
  saved_search_id?: string;
};

/**
 * Type of BUGSNAG's BUGSNAG_DELETE_SAVED_SEARCH tool output.
 */
type BUGSNAG_DELETE_SAVED_SEARCH_OUTPUT = {
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
 * Type of BUGSNAG's BUGSNAG_GET_SAVED_SEARCH tool input.
 */
type BUGSNAG_GET_SAVED_SEARCH_INPUT = {
  /**
   * Id
   * @description ID of the saved search to retrieve
   */
  id?: string;
};

/**
 * Type of BUGSNAG's BUGSNAG_GET_SAVED_SEARCH tool output.
 */
type BUGSNAG_GET_SAVED_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when this saved search was created
       * @default null
       */
      created_at: string | null;
      /**
       * Filters
       * @description Filters defining the saved search criteria
       * @default null
       */
      filters: {
          [key: string]: {
              /**
               * Type
               * @description Type of comparison to perform
               * @enum {string}
               */
              type: "eq" | "ne" | "empty";
              /**
               * Value
               * @description Value to compare against
               */
              value: string;
          }[];
      } | null;
      /**
       * Fixed Error Inclusion
       * @description Inclusion criteria for fixed errors
       * @default null
       */
      fixed_error_inclusion: string | null;
      /**
       * For Review Error Inclusion
       * @description Inclusion criteria for errors marked for review
       * @default null
       */
      for_review_error_inclusion: string | null;
      /**
       * Has Assigned To
       * @description Indicates if the saved search has a filter with `assigned_to` set to anything other than `me`
       * @default null
       */
      has_assigned_to: boolean | null;
      /**
       * Has Assigned To Me
       * @description Indicates if the saved search has a filter with `assigned_to` set to `me`
       * @default null
       */
      has_assigned_to_me: boolean | null;
      /**
       * Has Created Issue Filter
       * @description Indicates if the saved search has a filter with any criteria related to created issues
       * @default null
       */
      has_created_issue_filter: boolean | null;
      /**
       * Has Status Filter
       * @description Indicates if the saved search contains an explicit error status filter
       * @default null
       */
      has_status_filter: boolean | null;
      /**
       * Id
       * @description ID of the saved search
       * @default null
       */
      id: string | null;
      /**
       * Ignored Error Inclusion
       * @description Inclusion criteria for ignored errors
       * @default null
       */
      ignored_error_inclusion: string | null;
      /**
       * Name
       * @description Name of the saved search
       * @default null
       */
      name: string | null;
      /**
       * New Error Inclusion
       * @description Inclusion criteria for new errors
       * @default null
       */
      new_error_inclusion: string | null;
      /**
       * Open Error Inclusion
       * @description Inclusion criteria for open errors
       * @default null
       */
      open_error_inclusion: string | null;
      /**
       * Project Default
       * @description Whether this saved search is the project default for the current user
       * @default null
       */
      project_default: boolean | null;
      /**
       * Project Id
       * @description ID of the project this saved search is for
       * @default null
       */
      project_id: string | null;
      /**
       * Shared
       * @description Whether this saved search is shared among collaborators
       * @default null
       */
      shared: boolean | null;
      /**
       * Snoozed Error Inclusion
       * @description Inclusion criteria for snoozed errors
       * @default null
       */
      snoozed_error_inclusion: string | null;
      /**
       * Sort
       * @description Sort order of the saved search
       * @default null
       */
      sort: string | null;
      /**
       * Updated At
       * @description Timestamp when this saved search was last updated
       * @default null
       */
      updated_at: string | null;
      /**
       * Updated By Id
       * @description ID of user who last updated this saved search
       * @default null
       */
      updated_by_id: string | null;
      /**
       * User Id
       * @description ID of user who created the saved search
       * @default null
       */
      user_id: string | null;
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
 * Type of BUGSNAG's BUGSNAG_GET_SAVED_SEARCH_USAGE_SUMMARY tool input.
 */
type BUGSNAG_GET_SAVED_SEARCH_USAGE_SUMMARY_INPUT = {
  /**
   * Id
   * @description The ID of the saved search to get a usage summary for
   */
  id?: string;
};

/**
 * Type of BUGSNAG's BUGSNAG_GET_SAVED_SEARCH_USAGE_SUMMARY tool output.
 */
type BUGSNAG_GET_SAVED_SEARCH_USAGE_SUMMARY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Collaborator Email Notifications Count
       * @description The number of other users using this saved search for email notifications
       */
      collaborator_email_notifications_count: number;
      /**
       * Current User Using For Email Notification
       * @description Whether the current user is using this saved search for email notifications
       */
      current_user_using_for_email_notification: boolean;
      /**
       * Performance Monitor Count
       * @description The number of performance monitors using this saved search
       */
      performance_monitor_count: number;
      /**
       * Project Notifications Count
       * @description The number of project notifications using this saved search
       */
      project_notifications_count: number;
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
 * Type of BUGSNAG's BUGSNAG_LIST_COLLABORATORS tool input.
 */
type BUGSNAG_LIST_COLLABORATORS_INPUT = {
  /**
   * Organization Id
   * @description ID of the Bugsnag organization to list collaborators for
   */
  organization_id?: string;
};

/**
 * Type of BUGSNAG's BUGSNAG_LIST_COLLABORATORS tool output.
 */
type BUGSNAG_LIST_COLLABORATORS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Collaborators
       * @description List of collaborator objects.
       */
      collaborators: {
          /**
           * Created At
           * @description Timestamp when the collaborator was created (ISO 8601).
           */
          created_at: string;
          /**
           * Email
           * @description Email address of the collaborator.
           */
          email: string;
          /**
           * Heroku
           * @description Whether the collaborator's account is linked with Heroku.
           */
          heroku: boolean;
          /**
           * Id
           * @description Unique identifier of the collaborator.
           */
          id: string;
          /**
           * Is Admin
           * @description Whether the collaborator has admin permissions for the organization.
           */
          is_admin: boolean;
          /**
           * Last Request At
           * @description Timestamp of the collaborator's last interaction with Bugsnag (ISO 8601).
           * @default null
           */
          last_request_at: string | null;
          /**
           * Managed By Smartbear Id
           * @description Whether collaborator is managed by SmartBear ID.
           */
          managed_by_smartbear_id: boolean;
          /**
           * Name
           * @description Full name of the collaborator.
           * @default null
           */
          name: string | null;
          /**
           * Paid For
           * @description Whether the collaborator's access is paid for under the current plan.
           */
          paid_for: boolean;
          /**
           * Password Updated On
           * @description Timestamp when the collaborator's password was last updated (ISO 8601).
           * @default null
           */
          password_updated_on: string | null;
          /**
           * Pending Invitation
           * @description True if the invitation is pending acceptance.
           */
          pending_invitation: boolean;
          /**
           * Project Ids
           * @description List of project IDs the collaborator has access to.
           */
          project_ids: string[];
          /**
           * Project Roles
           * @description Mapping of project IDs to roles (project_member or project_admin).
           */
          project_roles: {
              [key: string]: "project_member" | "project_admin";
          };
          /**
           * Recovery Codes Remaining
           * @description Number of two-factor recovery codes remaining.
           * @default null
           */
          recovery_codes_remaining: number | null;
          /**
           * Show Time In Utc
           * @description Whether the collaborator prefers times displayed in UTC.
           */
          show_time_in_utc: boolean;
          /**
           * Two Factor Enabled
           * @description Whether two-factor authentication is enabled for the collaborator.
           * @default null
           */
          two_factor_enabled: boolean | null;
          /**
           * Two Factor Enabled On
           * @description Timestamp when two-factor authentication was enabled (ISO 8601).
           * @default null
           */
          two_factor_enabled_on: string | null;
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
 * Type of BUGSNAG's BUGSNAG_LIST_COLLABORATORS_ON_PROJECT tool input.
 */
type BUGSNAG_LIST_COLLABORATORS_ON_PROJECT_INPUT = {
  /**
   * Per Page
   * @description Number of results per page (max 100). Defaults to 30 if not set.
   * @default null
   */
  per_page: number | null;
  /**
   * Project Id
   * @description ID of the project to list collaborators for
   */
  project_id?: string;
};

/**
 * Type of BUGSNAG's BUGSNAG_LIST_COLLABORATORS_ON_PROJECT tool output.
 */
type BUGSNAG_LIST_COLLABORATORS_ON_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Collaborators
       * @description List of collaborators on the project
       */
      collaborators: {
          /**
           * Created At
           * @description Timestamp when the collaborator was added (ISO 8601).
           */
          created_at: string;
          /**
           * Email
           * @description Email address of the collaborator.
           * @default null
           */
          email: string | null;
          /**
           * Heroku
           * @description Whether the collaborator's account is linked with Heroku.
           */
          heroku: boolean;
          /**
           * Id
           * @description Unique identifier of the collaborator.
           */
          id: string;
          /**
           * Is Admin
           * @description Whether the collaborator has admin permissions for the organization.
           */
          is_admin: boolean;
          /**
           * Last Request At
           * @description Timestamp of the collaborator's last interaction with Bugsnag (ISO 8601).
           * @default null
           */
          last_request_at: string | null;
          /**
           * Managed By Smartbear Id
           * @description Whether collaborator is managed by SmartBear single sign-on.
           */
          managed_by_smartbear_id: boolean;
          /**
           * Name
           * @description Full name of the collaborator.
           * @default null
           */
          name: string | null;
          /**
           * Paid For
           * @description Whether the collaborator's access is paid for under the current plan.
           */
          paid_for: boolean;
          /**
           * Password Updated On
           * @description Timestamp when the collaborator's password was last updated (ISO 8601).
           * @default null
           */
          password_updated_on: string | null;
          /**
           * Pending Invitation
           * @description True if the invitation is pending acceptance.
           */
          pending_invitation: boolean;
          /**
           * Project Ids
           * @description List of project IDs the collaborator has access to.
           */
          project_ids: string[];
          /**
           * Project Roles
           * @description Mapping of project IDs to roles on each project.
           */
          project_roles: {
              [key: string]: string;
          };
          /**
           * Recovery Codes Remaining
           * @description Number of two-factor recovery codes remaining.
           * @default null
           */
          recovery_codes_remaining: number | null;
          /**
           * Show Time In Utc
           * @description Whether the collaborator prefers times displayed in UTC.
           */
          show_time_in_utc: boolean;
          /**
           * Two Factor Enabled
           * @description Whether two-factor authentication is enabled for the collaborator.
           * @default null
           */
          two_factor_enabled: boolean | null;
          /**
           * Two Factor Enabled On
           * @description Timestamp when two-factor authentication was enabled (ISO 8601).
           * @default null
           */
          two_factor_enabled_on: string | null;
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
 * Type of BUGSNAG's BUGSNAG_LIST_COLLABORATOR_ACCESS_DETAILS_FOR_PROJECTS tool input.
 */
type BUGSNAG_LIST_COLLABORATOR_ACCESS_DETAILS_FOR_PROJECTS_INPUT = {
  /**
   * Collaborator Id
   * @description ID of the collaborator.
   */
  collaborator_id?: string;
  /**
   * Inaccessible
   * @description If true, return only inaccessible projects. Defaults to false.
   * @default false
   */
  inaccessible: boolean | null;
  /**
   * Individual Only
   * @description If true, return only individual project access (exclude team-based access).
   * @default false
   */
  individual_only: boolean | null;
  /**
   * Organization Id
   * @description ID of the organization.
   */
  organization_id?: string;
  /**
   * Per Page
   * @description Number of results per page, 1-30.
   * @default null
   */
  per_page: number | null;
  /**
   * Q
   * @description Query term to filter project names by.
   * @default null
   */
  q: string | null;
};

/**
 * Type of BUGSNAG's BUGSNAG_LIST_COLLABORATOR_ACCESS_DETAILS_FOR_PROJECTS tool output.
 */
type BUGSNAG_LIST_COLLABORATOR_ACCESS_DETAILS_FOR_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Project Accesses
       * @description List of project access details for the collaborator.
       */
      project_accesses: {
          /**
           * Individual Project Role
           * @description Role granted individually to the collaborator.
           * @enum {string}
           */
          individual_project_role: "project_owner" | "project_member";
          /**
           * Is Admin
           * @description Whether the collaborator is an organization admin.
           */
          is_admin: boolean;
          /**
           * Project Role
           * @description Overall project role for the collaborator.
           * @enum {string}
           */
          project_role: "project_owner" | "project_member";
          /**
           * Project Summary
           * @description Summary details of the project.
           */
          project_summary: {
              /**
               * Id
               * @description ID of the project.
               */
              id: string;
              /**
               * Name
               * @description Name of the project.
               */
              name: string;
              /**
               * Slug
               * @description Slug of the project.
               */
              slug: string;
              /**
               * Type
               * @description Type of the project.
               */
              type: string;
          };
          /**
           * Team Count
           * @description Number of teams the collaborator belongs to on this project.
           */
          team_count: number;
          /**
           * Team Project Role
           * @description Role granted via team membership.
           * @enum {string}
           */
          team_project_role: "project_owner" | "project_member";
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
 * Type of BUGSNAG's BUGSNAG_LIST_CONFIGURED_INTEGRATIONS_FOR_PROJECT tool input.
 */
type BUGSNAG_LIST_CONFIGURED_INTEGRATIONS_FOR_PROJECT_INPUT = {
  /**
   * Project Id
   * @description The unique identifier for the Bugsnag project
   */
  project_id?: string;
};

/**
 * Type of BUGSNAG's BUGSNAG_LIST_CONFIGURED_INTEGRATIONS_FOR_PROJECT tool output.
 */
type BUGSNAG_LIST_CONFIGURED_INTEGRATIONS_FOR_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Integrations
       * @description List of configured integrations summaries for the project
       */
      integrations: {
          /**
           * Enabled
           * @description Whether the integration is enabled
           */
          enabled: boolean;
          /**
           * Id
           * @description Identifier of the configured integration
           */
          id: string;
          /**
           * Options
           * @description Integration-specific configuration options
           */
          options: {
              [key: string]: unknown;
          };
          /**
           * Type
           * @description Type of the integration (e.g., 'slack', 'jira')
           */
          type: string;
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
 * Type of BUGSNAG's BUGSNAG_LIST_ERRORS_ON_PROJECT tool input.
 */
type BUGSNAG_LIST_ERRORS_ON_PROJECT_INPUT = {
  /**
   * Direction
   * @description Sort direction: ascending ('asc') or descending ('desc').
   * @default null
   * @enum {string|null}
   */
  direction: "asc" | "desc" | null;
  /**
   * Project Id
   * @description ID of the project to list errors for.
   */
  project_id?: string;
  /**
   * Sort
   * @description Field to sort the returned error list by.
   * @default null
   * @enum {string|null}
   */
  sort: "last_seen" | "first_seen" | "users" | "events" | "unsorted" | null;
  /**
   * Version Seen In
   * @description Optional list of version filters. Each filter applies to 'version.seen_in' property.
   * @default null
   */
  version_seen_in: {
      /**
       * Type
       * @description Comparison operator; only 'eq' is supported.
       * @default eq
       * @constant
       */
      type: "eq";
      /**
       * Value
       * @description App version to filter errors by (e.g., '1.2.3').
       */
      value: string;
  }[] | null;
};

/**
 * Type of BUGSNAG's BUGSNAG_LIST_ERRORS_ON_PROJECT tool output.
 */
type BUGSNAG_LIST_ERRORS_ON_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors for the specified project.
       */
      errors: {
          /**
           * Context
           * @description Context in which the error occurred.
           * @default null
           */
          context: string | null;
          /**
           * Error Class
           * @description Class of the error.
           */
          error_class: string;
          /**
           * First Seen
           * @description Timestamp when the error was first seen (ISO 8601).
           */
          first_seen: string;
          /**
           * Id
           * @description Unique identifier of the error.
           */
          id: string;
          /**
           * Last Seen
           * @description Timestamp when the error was last seen (ISO 8601).
           */
          last_seen: string;
          /**
           * Message
           * @description Error message.
           */
          message: string;
          /**
           * Release Stages
           * @description Release stages in which the error occurred.
           */
          release_stages: string[];
          /**
           * Severity
           * @description Severity level of the error (e.g., 'error').
           */
          severity: string;
          /**
           * Status
           * @description Status of the error (e.g., 'open').
           */
          status: string;
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
 * Type of BUGSNAG's BUGSNAG_LIST_EVENTS_ON_PROJECT tool input.
 */
type BUGSNAG_LIST_EVENTS_ON_PROJECT_INPUT = {
  /**
   * Base
   * @description Only events occurring before this ISO 8601 timestamp will be considered
   * @default null
   */
  base: string | null;
  /**
   * Direction
   * @description Direction to sort results by: 'asc' or 'desc'. Default is 'desc'
   * @default null
   */
  direction: string | null;
  /**
   * Filters
   * @description Filters object to restrict events. Should be a JSON-serializable dict, see API docs for URL encoding format: e.g. {"event.since":[{type,value}]}
   * @default null
   */
  filters: {
      [key: string]: unknown;
  } | null;
  /**
   * Full Reports
   * @description Whether to include full reports payloads for each event. Default is false
   * @default null
   */
  full_reports: boolean | null;
  /**
   * Per Page
   * @description Number of results per page (max 30). Default is 30
   * @default null
   */
  per_page: number | null;
  /**
   * Project Id
   * @description Identifier of the project to retrieve events for
   */
  project_id?: string;
  /**
   * Sort
   * @description Field to sort results by. Default is 'timestamp'
   * @default null
   */
  sort: string | null;
};

/**
 * Type of BUGSNAG's BUGSNAG_LIST_EVENTS_ON_PROJECT tool output.
 */
type BUGSNAG_LIST_EVENTS_ON_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Events
       * @description List of events for the specified project
       */
      events: {
          /**
           * AppInfo
           * @description Application state details when the event occurred
           * @default null
           */
          app: {
              /**
               * Release Stage
               * @description Release stage of the application when the event occurred
               * @default null
               */
              releaseStage: string | null;
              /**
               * Type
               * @description Type of the application or notifier used
               * @default null
               */
              type: string | null;
          } | null;
          /**
           * Context
           * @description Context or action name when the event occurred
           * @default null
           */
          context: string | null;
          /**
           * Error Id
           * @description Identifier of the error this event is for
           */
          error_id: string;
          /**
           * Exceptions
           * @description List of exception details as received in the event payload
           */
          exceptions: unknown[];
          /**
           * Id
           * @description Unique identifier of the event
           */
          id: string;
          /**
           * Is Full Report
           * @description Whether this item is a full report payload
           */
          is_full_report: boolean;
          /**
           * Project Url
           * @description URL of the associated project resource
           */
          project_url: string;
          /**
           * Received At
           * @description Timestamp when Bugsnag received the event (ISO 8601)
           */
          received_at: string;
          /**
           * Severity
           * @description Severity level of the event (e.g., 'info', 'warning', 'error')
           * @default null
           */
          severity: string | null;
          /**
           * Unhandled
           * @description Whether the event was from an unhandled exception
           * @default null
           */
          unhandled: boolean | null;
          /**
           * Url
           * @description URL of the event resource
           */
          url: string;
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
 * Type of BUGSNAG's BUGSNAG_LIST_EVENT_FIELDS_FOR_PROJECT tool input.
 */
type BUGSNAG_LIST_EVENT_FIELDS_FOR_PROJECT_INPUT = {
  /**
   * Project Id
   * @description ID of the project to list event fields for
   */
  project_id?: string;
};

/**
 * Type of BUGSNAG's BUGSNAG_LIST_EVENT_FIELDS_FOR_PROJECT tool output.
 */
type BUGSNAG_LIST_EVENT_FIELDS_FOR_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Event Fields
       * @description List of event field definitions
       */
      event_fields: {
          /**
           * Custom
           * @description Whether this is a custom event field
           */
          custom: boolean;
          /**
           * Display Id
           * @description Identifier used for filtering by this field
           */
          display_id: string;
          /**
           * Filter Options
           * @description Configuration options for filtering
           */
          filter_options: {
              /**
               * Aliases
               * @description Alternative keys for this field
               * @default null
               */
              aliases: string[] | null;
              /**
               * Description
               * @description Description of the event field
               * @default null
               */
              description: string | null;
              /**
               * Hint Text
               * @description Helper text shown in UI
               * @default null
               */
              hint_text: string | null;
              /**
               * Hint Url
               * @description URL for documentation
               * @default null
               */
              hint_url: string | null;
              /**
               * Match Types
               * @description Supported match operations for this field
               */
              match_types: string[];
              /**
               * Name
               * @description Display name for this event field
               */
              name: string;
              /**
               * Values
               * @description Allowed discrete values for filtering
               * @default null
               */
              values: {
                  /**
                   * Id
                   * @description Identifier for this filter value
                   */
                  id: string;
                  /**
                   * Name
                   * @description Display name for this filter value
                   */
                  name: string;
              }[] | null;
          };
          /**
           * Pivot Options
           * @description Configuration options for pivoting
           */
          pivot_options: {
              /**
               * Average
               * @description Show average in pivot
               * @default false
               */
              average: boolean;
              /**
               * Cardinality
               * @description Show cardinality in pivot
               * @default true
               */
              cardinality: boolean;
              /**
               * Fields
               * @description Mapping of pivot value IDs to display names
               */
              fields: {
                  [key: string]: string;
              };
              /**
               * Name
               * @description Name used for pivot summaries
               */
              name: string;
              /**
               * Summary
               * @description Include aggregate summary in pivot
               * @default false
               */
              summary: boolean;
              /**
               * Values
               * @description Include value counts in pivot
               * @default true
               */
              values: boolean;
          };
          /**
           * Reindex In Progress
           * @description Whether a reindex is in progress for this field
           */
          reindex_in_progress: boolean;
          /**
           * Reindex Percentage
           * @description Percentage completion of reindex
           */
          reindex_percentage: number;
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
 * Type of BUGSNAG's BUGSNAG_LIST_ORGANIZATIONS tool input.
 */
type BUGSNAG_LIST_ORGANIZATIONS_INPUT = {
  /**
   * Page
   * @description Page number to retrieve (1-based).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of organizations per page (maximum 100).
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of BUGSNAG's BUGSNAG_LIST_ORGANIZATIONS tool output.
 */
type BUGSNAG_LIST_ORGANIZATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Organizations
       * @description List of organizations accessible by the authenticated user.
       */
      organizations: {
          /**
           * Auto Upgrade
           * @description Indicates if the organization is set to auto-upgrade.
           */
          auto_upgrade: boolean;
          /**
           * Billing Emails
           * @description List of billing email addresses associated with the organization.
           */
          billing_emails: string[];
          /**
           * Created At
           * @description ISO 8601 timestamp when the organization was created.
           */
          created_at: string;
          /**
           * Creator
           * @description Information about the creator of the organization.
           */
          creator: {
              /**
               * Email
               * @description Email address of the organization creator.
               */
              email: string;
              /**
               * Id
               * @description Unique identifier for the organization creator.
               */
              id: string;
              /**
               * Name
               * @description Name of the organization creator.
               */
              name: string;
          };
          /**
           * Id
           * @description Unique identifier for the organization.
           */
          id: string;
          /**
           * Name
           * @description Name of the organization.
           */
          name: string;
          /**
           * Slug
           * @description URL-friendly slug for the organization.
           */
          slug: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the organization was last updated.
           */
          updated_at: string;
          /**
           * Upgrade Url
           * @description URL to upgrade the organization plan.
           */
          upgrade_url: string;
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
 * Type of BUGSNAG's BUGSNAG_LIST_PIVOTS_ON_PROJECT tool input.
 */
type BUGSNAG_LIST_PIVOTS_ON_PROJECT_INPUT = {
  /**
   * Project Id
   * @description ID of the project to list pivot definitions for
   */
  project_id?: string;
};

/**
 * Type of BUGSNAG's BUGSNAG_LIST_PIVOTS_ON_PROJECT tool output.
 */
type BUGSNAG_LIST_PIVOTS_ON_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pivots
       * @description List of pivot definitions for the project
       */
      pivots: {
          /**
           * Display Id
           * @description Display identifier of the pivot field
           */
          display_id: string;
          /**
           * Filters
           * @description Filter options for the pivot field
           */
          filters: {
              /**
               * Match Types
               * @description Supported match operations for the pivot field
               */
              match_types: string[];
              /**
               * Values
               * @description Allowed values for filtering the pivot field
               * @default null
               */
              values: {
                  /**
                   * Id
                   * @description Identifier of the filter value
                   */
                  id: string;
                  /**
                   * Name
                   * @description Display name of the filter value
                   */
                  name: string;
              }[] | null;
          };
          /**
           * Name
           * @description Name of the pivot field
           */
          name: string;
          /**
           * Path
           * @description JSON path to the field in the event payload
           */
          path: string;
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
 * Type of BUGSNAG's BUGSNAG_LIST_PROJECTS tool input.
 */
type BUGSNAG_LIST_PROJECTS_INPUT = {
  /**
   * Organization Id
   * @description ID of the Bugsnag organization to list projects for
   */
  organization_id?: string;
};

/**
 * Type of BUGSNAG's BUGSNAG_LIST_PROJECTS tool output.
 */
type BUGSNAG_LIST_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Projects
       * @description List of project objects for the specified organization.
       */
      projects: {
          /**
           * Api Key
           * @description Public API key associated with the project.
           */
          api_key: string;
          /**
           * Created At
           * @description Timestamp when the project was created (ISO 8601).
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the project.
           */
          id: string;
          /**
           * Name
           * @description Name of the project.
           */
          name: string;
          /**
           * Organization Id
           * @description Identifier of the organization this project belongs to.
           */
          organization_id: string;
          /**
           * Type
           * @description Type of the project (e.g., 'rails', 'node').
           */
          type: string;
          /**
           * Updated At
           * @description Timestamp when the project was last updated (ISO 8601).
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
 * Type of BUGSNAG's BUGSNAG_LIST_RELEASES tool input.
 */
type BUGSNAG_LIST_RELEASES_INPUT = {
  /**
   * After
   * @description Only include releases created after this ISO 8601 timestamp
   * @default null
   */
  after: string | null;
  /**
   * Before
   * @description Only include releases created before this ISO 8601 timestamp
   * @default null
   */
  before: string | null;
  /**
   * Limit
   * @description Maximum number of releases to return per page
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of releases to skip before returning results
   * @default null
   */
  offset: number | null;
  /**
   * Project Id
   * @description ID of the Bugsnag project to list releases for
   */
  project_id?: string;
  /**
   * Release Stage
   * @description Filter releases by a specific release stage
   * @default null
   */
  release_stage: string | null;
};

/**
 * Type of BUGSNAG's BUGSNAG_LIST_RELEASES tool output.
 */
type BUGSNAG_LIST_RELEASES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Releases
       * @description List of release objects for the specified project.
       */
      releases: {
          /**
           * Created At
           * @description Timestamp when the release was created (ISO 8601).
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the release.
           */
          id: string;
          /**
           * Project Id
           * @description Identifier of the project this release belongs to.
           */
          project_id: string;
          /**
           * Release Stage
           * @description Release stage of the release.
           */
          release_stage: string;
          /**
           * Updated At
           * @description Timestamp when the release was last updated (ISO 8601).
           */
          updated_at: string;
          /**
           * Url
           * @description URL associated with this release.
           */
          url: string;
          /**
           * Version
           * @description Version number of the release.
           */
          version: string;
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
 * Type of BUGSNAG's BUGSNAG_LIST_RELEASE_GROUPS tool input.
 */
type BUGSNAG_LIST_RELEASE_GROUPS_INPUT = {
  /**
   * Project Id
   * @description ID of the Bugsnag project to list release groups for
   */
  project_id?: string;
  /**
   * Release Stage Name
   * @description Filter release groups by a specific release stage (e.g., 'production').
   */
  release_stage_name?: string;
};

/**
 * Type of BUGSNAG's BUGSNAG_LIST_RELEASE_GROUPS tool output.
 */
type BUGSNAG_LIST_RELEASE_GROUPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Release Groups
       * @description List of release group objects for the specified project.
       */
      release_groups: {
          /**
           * Id
           * @description Unique identifier of the release group.
           */
          id: string;
          /**
           * Metadata
           * @description Metadata associated with the release group (key/value pairs).
           */
          metadata: {
              [key: string]: unknown;
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
 * Type of BUGSNAG's BUGSNAG_LIST_SAVED_SEARCHES_ON_PROJECT tool input.
 */
type BUGSNAG_LIST_SAVED_SEARCHES_ON_PROJECT_INPUT = {
  /**
   * Project Id
   * @description ID of the project to list saved searches for
   */
  project_id?: string;
  /**
   * Shared
   * @description Limit saved searches returned to only those with this shared property
   * @default null
   */
  shared: boolean | null;
};

/**
 * Type of BUGSNAG's BUGSNAG_LIST_SAVED_SEARCHES_ON_PROJECT tool output.
 */
type BUGSNAG_LIST_SAVED_SEARCHES_ON_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Saved Searches
       * @description List of saved searches on the project
       */
      saved_searches: {
          /**
           * Created At
           * @description Timestamp when this saved search was created (ISO 8601)
           */
          created_at: string;
          /**
           * Filters
           * @description Filters in the saved search
           */
          filters: {
              [key: string]: {
                  /**
                   * Type
                   * @description Type of comparison to perform
                   * @enum {string}
                   */
                  type: "eq" | "ne" | "empty";
                  /**
                   * Value
                   * @description Value to compare against
                   */
                  value: string;
              }[];
          };
          /**
           * Fixed Error Inclusion
           * @description Inclusion criteria for fixed errors
           */
          fixed_error_inclusion: string;
          /**
           * For Review Error Inclusion
           * @description Inclusion criteria for errors marked for review
           */
          for_review_error_inclusion: string;
          /**
           * Has Assigned To
           * @description Indicates if the saved search has a filter with `assigned_to` set to anything other than `me`
           */
          has_assigned_to: boolean;
          /**
           * Has Assigned To Me
           * @description Indicates if the saved search has a filter with `assigned_to` set to `me`
           */
          has_assigned_to_me: boolean;
          /**
           * Has Created Issue Filter
           * @description Indicates if the saved search has a filter with any criteria related to created issues
           */
          has_created_issue_filter: boolean;
          /**
           * Has Status Filter
           * @description Indicates if the saved search contains an explicit error status filter
           */
          has_status_filter: boolean;
          /**
           * Id
           * @description Unique identifier of the saved search
           */
          id: string;
          /**
           * Ignored Error Inclusion
           * @description Inclusion criteria for ignored errors
           */
          ignored_error_inclusion: string;
          /**
           * Name
           * @description Name of the saved search
           */
          name: string;
          /**
           * New Error Inclusion
           * @description Inclusion criteria for new errors
           */
          new_error_inclusion: string;
          /**
           * Open Error Inclusion
           * @description Inclusion criteria for open errors
           */
          open_error_inclusion: string;
          /**
           * Project Default
           * @description Whether this saved search is the project default for the current user
           */
          project_default: boolean;
          /**
           * Project Id
           * @description ID of project this saved search is for
           */
          project_id: string;
          /**
           * Shared
           * @description Whether this saved search is shared among collaborators
           */
          shared: boolean;
          /**
           * Snoozed Error Inclusion
           * @description Inclusion criteria for snoozed errors
           */
          snoozed_error_inclusion: string;
          /**
           * Sort
           * @description Sort order for the saved search
           */
          sort: string;
          /**
           * Updated At
           * @description Timestamp when this saved search was last updated (ISO 8601)
           */
          updated_at: string;
          /**
           * Updated By Id
           * @description ID of user who last updated this saved search
           */
          updated_by_id: string;
          /**
           * User Id
           * @description ID of user who created the saved search
           */
          user_id: string;
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
 * Type of BUGSNAG's BUGSNAG_LIST_SUPPORTED_INTEGRATIONS tool input.
 */
type BUGSNAG_LIST_SUPPORTED_INTEGRATIONS_INPUT = object;

/**
 * Type of BUGSNAG's BUGSNAG_LIST_SUPPORTED_INTEGRATIONS tool output.
 */
type BUGSNAG_LIST_SUPPORTED_INTEGRATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Integrations
       * @description List of supported integration definitions.
       */
      integrations: {
          /**
           * Actions
           * @description Mapping of action names to descriptions.
           */
          actions: {
              [key: string]: string;
          };
          /**
           * Created Entity Name
           * @description Name of the entity created by this integration (issue-tracker only).
           */
          created_entity_name: string;
          /**
           * Description
           * @description Brief explanation of the integration.
           */
          description: string;
          /**
           * Fields
           * @description List of input fields required for configuring the integration.
           */
          fields: {
              /**
               * Allowed Values
               * @description Allowed values for the field if restricted.
               */
              allowed_values: string[];
              /**
               * Conditions
               * @description List of conditions under which this field is required.
               * @default null
               */
              conditions: {
                  /**
                   * Field
                   * @description Field to check for the condition.
                   */
                  field: string;
                  /**
                   * Value
                   * @description Value that triggers the condition.
                   */
                  value: string;
              }[] | null;
              /**
               * Description
               * @description Description of the field.
               */
              description: string;
              /**
               * Label
               * @description Human-readable label for the field.
               */
              label: string;
              /**
               * Name
               * @description Field name for the integration's configuration.
               */
              name: string;
              /**
               * Type
               * @description Type of the field (e.g., 'password', 'string').
               */
              type: string;
          }[];
          /**
           * Icon Url
           * @description URL to an icon representing the integration.
           */
          icon_url: string;
          /**
           * Issue Automation Options
           * @description Options for issue automation triggers.
           */
          issue_automation_options: {
              /**
               * Automation Style
               * @description Automation style configuration.
               */
              automation_style: {
                  /**
                   * Type
                   * @description Type of automation style (e.g., 'default').
                   */
                  type: string;
              };
              /**
               * Error Fixed
               * @description Settings for automation when an error is fixed.
               */
              error_fixed: {
                  /**
                   * Default Options
                   * @description List of default options selected.
                   */
                  default_options: string[];
                  /**
                   * Options
                   * @description List of available options.
                   */
                  options: string[];
              };
              /**
               * Error New
               * @description Settings for automation when a new error occurs.
               */
              error_new: {
                  /**
                   * Default Options
                   * @description List of default options selected.
                   */
                  default_options: string[];
                  /**
                   * Options
                   * @description List of available options.
                   */
                  options: string[];
              };
              /**
               * Error Reopened
               * @description Settings for automation when an error is reopened.
               */
              error_reopened: {
                  /**
                   * Default Options
                   * @description List of default options selected.
                   */
                  default_options: string[];
                  /**
                   * Options
                   * @description List of available options.
                   */
                  options: string[];
              };
              /**
               * Issue Resolved
               * @description Settings for automation when an issue is resolved.
               */
              issue_resolved: {
                  /**
                   * Default Options
                   * @description List of default options selected.
                   */
                  default_options: string[];
                  /**
                   * Options
                   * @description List of available options.
                   */
                  options: string[];
              };
              /**
               * Issue Unresolved
               * @description Settings for automation when an issue is unresolved.
               */
              issue_unresolved: {
                  /**
                   * Default Options
                   * @description List of default options selected.
                   */
                  default_options: string[];
                  /**
                   * Options
                   * @description List of available options.
                   */
                  options: string[];
              };
          }[];
          /**
           * Key
           * @description Unique key identifying the integration service.
           */
          key: string;
          /**
           * Name
           * @description Name of the integration service.
           */
          name: string;
          /**
           * Two Way Sync
           * @description Whether the integration supports two-way sync.
           */
          two_way_sync: boolean;
          /**
           * Type
           * @description Type of integration.
           * @enum {string}
           */
          type: "issue-tracker" | "team-notification" | "data-forwarding" | "on-call";
          /**
           * Url
           * @description URL of the integration service.
           */
          url: string;
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
 * Type of BUGSNAG's BUGSNAG_LIST_TRENDS_FOR_PROJECT_BUCKETS tool input.
 */
type BUGSNAG_LIST_TRENDS_FOR_PROJECT_BUCKETS_INPUT = {
  /**
   * Buckets Count
   * @description Number of buckets to group trend data into (1-50)
   */
  buckets_count?: number;
  /**
   * Filters
   * @description Optional filters to restrict the events reported in the trend. Each key is an event field name, and each value is a list of filter objects.
   * @default null
   */
  filters: {
      [key: string]: {
          /**
           * Type
           * @description Comparison operator for the filter
           * @enum {string}
           */
          type: "eq" | "ne" | "empty";
          /**
           * Value
           * @description Filter value, either a relative time (e.g., '7d') or ISO 8601 timestamp
           */
          value: string;
      }[];
  } | null;
  /**
   * Project Id
   * @description ID of the project to retrieve trend buckets for
   */
  project_id?: string;
};

/**
 * Type of BUGSNAG's BUGSNAG_LIST_TRENDS_FOR_PROJECT_BUCKETS tool output.
 */
type BUGSNAG_LIST_TRENDS_FOR_PROJECT_BUCKETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Buckets
       * @description List of trend buckets for the specified project
       */
      buckets: {
          /**
           * Events Count
           * @description Number of events in this time bucket
           */
          events_count: number;
          /**
           * From
           * @description Start time of the bucket in ISO 8601 format
           */
          from: string;
          /**
           * To
           * @description End time of the bucket in ISO 8601 format
           */
          to: string;
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
 * Type of BUGSNAG's BUGSNAG_REGENERATE_PROJECT_API_KEY tool input.
 */
type BUGSNAG_REGENERATE_PROJECT_API_KEY_INPUT = {
  /**
   * Project Id
   * @description ID of the project whose API key will be regenerated
   */
  project_id?: string;
};

/**
 * Type of BUGSNAG's BUGSNAG_REGENERATE_PROJECT_API_KEY tool output.
 */
type BUGSNAG_REGENERATE_PROJECT_API_KEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Key
       * @description The newly generated API key for the project
       */
      api_key: string;
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
 * Type of BUGSNAG's BUGSNAG_SHOW_COLLABORATOR_ACCESS_DETAILS_FOR_PROJECT tool input.
 */
type BUGSNAG_SHOW_COLLABORATOR_ACCESS_DETAILS_FOR_PROJECT_INPUT = {
  /**
   * Collaborator Id
   * @description ID of the collaborator.
   */
  collaborator_id?: string;
  /**
   * Organization Id
   * @description ID of the Bugsnag organization.
   */
  organization_id?: string;
  /**
   * Project Id
   * @description ID of the project.
   */
  project_id?: string;
};

/**
 * Type of BUGSNAG's BUGSNAG_SHOW_COLLABORATOR_ACCESS_DETAILS_FOR_PROJECT tool output.
 */
type BUGSNAG_SHOW_COLLABORATOR_ACCESS_DETAILS_FOR_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Individual Project Role
       * @description Role of the collaborator on the project as an individual.
       * @enum {string}
       */
      individual_project_role: "project_owner" | "project_member";
      /**
       * Is Admin
       * @description Indicates if the collaborator is an administrator for the organization.
       */
      is_admin: boolean;
      /**
       * Project Role
       * @description Overall role of the collaborator on the project.
       * @enum {string}
       */
      project_role: "project_owner" | "project_member";
      /**
       * Project Summary
       * @description Summary of the project details.
       */
      project_summary: {
          /**
           * Id
           * @description Unique identifier of the project.
           */
          id: string;
          /**
           * Name
           * @description Name of the project.
           */
          name: string;
          /**
           * Slug
           * @description URL-friendly slug of the project.
           */
          slug: string;
          /**
           * Type
           * @description Type of the project (e.g., 'rails', 'android').
           */
          type: string;
      };
      /**
       * Team Count
       * @description Number of teams the collaborator belongs to that have access to the project.
       */
      team_count: number;
      /**
       * Team Project Role
       * @description Role of the collaborator on the project via team memberships.
       * @enum {string}
       */
      team_project_role: "project_owner" | "project_member";
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
 * Type of BUGSNAG's BUGSNAG_SHOW_COLLABORATOR_ON_ORGANIZATION tool input.
 */
type BUGSNAG_SHOW_COLLABORATOR_ON_ORGANIZATION_INPUT = {
  /**
   * Collaborator Id
   * @description ID of the collaborator to show
   */
  collaborator_id?: string;
  /**
   * Organization Id
   * @description ID of the Bugsnag organization to fetch the collaborator from
   */
  organization_id?: string;
};

/**
 * Type of BUGSNAG's BUGSNAG_SHOW_COLLABORATOR_ON_ORGANIZATION tool output.
 */
type BUGSNAG_SHOW_COLLABORATOR_ON_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the collaborator was created (ISO 8601).
       */
      created_at: string;
      /**
       * Email
       * @description Email address of the collaborator.
       */
      email: string;
      /**
       * Heroku
       * @description Whether the collaborator's account is linked with Heroku.
       */
      heroku: boolean;
      /**
       * Id
       * @description Unique identifier of the collaborator.
       */
      id: string;
      /**
       * Is Admin
       * @description Whether the collaborator has admin permissions for the organization.
       */
      is_admin: boolean;
      /**
       * Last Request At
       * @description Timestamp of the collaborator's last interaction with Bugsnag (ISO 8601).
       * @default null
       */
      last_request_at: string | null;
      /**
       * Managed By Smartbear Id
       * @description Whether the collaborator is managed by SmartBear ID.
       */
      managed_by_smartbear_id: boolean;
      /**
       * Name
       * @description Full name of the collaborator.
       * @default null
       */
      name: string | null;
      /**
       * Paid For
       * @description Whether the collaborator's access is paid for under the current plan.
       */
      paid_for: boolean;
      /**
       * Password Updated On
       * @description Timestamp when the collaborator's password was last updated (ISO 8601).
       * @default null
       */
      password_updated_on: string | null;
      /**
       * Pending Invitation
       * @description True if the invitation is pending acceptance.
       */
      pending_invitation: boolean;
      /**
       * Project Ids
       * @description List of project IDs the collaborator has access to.
       */
      project_ids: string[];
      /**
       * Project Roles
       * @description Mapping of project IDs to roles ('project_member' or 'project_admin').
       */
      project_roles: {
          [key: string]: "project_member" | "project_admin";
      };
      /**
       * Recovery Codes Remaining
       * @description Number of two-factor recovery codes remaining.
       * @default null
       */
      recovery_codes_remaining: number | null;
      /**
       * Show Time In Utc
       * @description Whether the collaborator prefers times displayed in UTC.
       */
      show_time_in_utc: boolean;
      /**
       * Two Factor Enabled
       * @description Whether two-factor authentication is enabled for the collaborator.
       * @default null
       */
      two_factor_enabled: boolean | null;
      /**
       * Two Factor Enabled On
       * @description Timestamp when two-factor authentication was enabled (ISO 8601).
       * @default null
       */
      two_factor_enabled_on: string | null;
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
 * Type of BUGSNAG's BUGSNAG_SHOW_COLLABORATOR_ON_PROJECT tool input.
 */
type BUGSNAG_SHOW_COLLABORATOR_ON_PROJECT_INPUT = {
  /**
   * Id
   * @description ID of the collaborator to retrieve
   */
  id?: string;
  /**
   * Project Id
   * @description ID of the project to show the collaborator for
   */
  project_id?: string;
};

/**
 * Type of BUGSNAG's BUGSNAG_SHOW_COLLABORATOR_ON_PROJECT tool output.
 */
type BUGSNAG_SHOW_COLLABORATOR_ON_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the collaborator was added (ISO 8601)
       */
      created_at: string;
      /**
       * Email
       * @description Email address of the collaborator
       */
      email: string;
      /**
       * Heroku
       * @description Whether the collaborator's account is linked with Heroku
       */
      heroku: boolean;
      /**
       * Id
       * @description Unique identifier of the collaborator
       */
      id: string;
      /**
       * Is Admin
       * @description Whether the collaborator has admin permissions for the organization
       */
      is_admin: boolean;
      /**
       * Last Request At
       * @description Timestamp of the collaborator's last interaction with Bugsnag (ISO 8601)
       * @default null
       */
      last_request_at: string | null;
      /**
       * Managed By Smartbear Id
       * @description Whether the collaborator is managed by SmartBear single sign-on
       */
      managed_by_smartbear_id: boolean;
      /**
       * Name
       * @description Full name of the collaborator
       * @default null
       */
      name: string | null;
      /**
       * Paid For
       * @description Whether the collaborator's access is paid for under the current plan
       */
      paid_for: boolean;
      /**
       * Password Updated On
       * @description Timestamp when the collaborator's password was last changed (ISO 8601)
       * @default null
       */
      password_updated_on: string | null;
      /**
       * Pending Invitation
       * @description True if the collaborator has not yet accepted their invitation
       */
      pending_invitation: boolean;
      /**
       * Project Ids
       * @description List of project IDs the collaborator has access to
       */
      project_ids: string[];
      /**
       * Project Roles
       * @description Mapping of project IDs to roles for each project
       */
      project_roles: {
          [key: string]: string;
      };
      /**
       * Recovery Codes Remaining
       * @description Number of two-factor recovery codes remaining
       * @default null
       */
      recovery_codes_remaining: number | null;
      /**
       * Show Time In Utc
       * @description Whether the collaborator prefers times displayed in UTC
       */
      show_time_in_utc: boolean;
      /**
       * Two Factor Enabled
       * @description Whether two-factor authentication is enabled for the collaborator
       * @default null
       */
      two_factor_enabled: boolean | null;
      /**
       * Two Factor Enabled On
       * @description Timestamp when two-factor authentication was enabled (ISO 8601)
       * @default null
       */
      two_factor_enabled_on: string | null;
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
 * Type of BUGSNAG's BUGSNAG_UPDATE_COLLABORATOR_PERMISSIONS tool input.
 */
type BUGSNAG_UPDATE_COLLABORATOR_PERMISSIONS_INPUT = {
  /**
   * Id
   * @description ID of the collaborator to update
   */
  id?: string;
  /**
   * Organization Id
   * @description ID of the Bugsnag organization containing the collaborator
   */
  organization_id?: string;
  /**
   * Project Ids
   * @description List of project IDs to grant access; mutually exclusive with project_roles
   * @default null
   */
  project_ids: string[] | null;
  /**
   * Project Roles
   * @description Mapping of project IDs to roles (project_member or project_admin); mutually exclusive with project_ids
   * @default null
   */
  project_roles: {
      [key: string]: "project_member" | "project_admin";
  } | null;
};

/**
 * Type of BUGSNAG's BUGSNAG_UPDATE_COLLABORATOR_PERMISSIONS tool output.
 */
type BUGSNAG_UPDATE_COLLABORATOR_PERMISSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the collaborator was created (ISO 8601)
       */
      created_at: string;
      /**
       * Email
       * @description Email address of the collaborator
       */
      email: string;
      /**
       * Heroku
       * @description Whether the collaborator's account is linked with Heroku
       */
      heroku: boolean;
      /**
       * Id
       * @description Unique identifier for the collaborator
       */
      id: string;
      /**
       * Is Admin
       * @description Whether the collaborator has organization admin permissions
       */
      is_admin: boolean;
      /**
       * Last Request At
       * @description Timestamp of the collaborator's last interaction (ISO 8601)
       * @default null
       */
      last_request_at: string | null;
      /**
       * Managed By Smartbear Id
       * @description Whether the collaborator is managed by SmartBear ID
       */
      managed_by_smartbear_id: boolean;
      /**
       * Name
       * @description Full name of the collaborator if available
       * @default null
       */
      name: string | null;
      /**
       * Paid For
       * @description Whether the collaborator's access is paid for under the current plan
       */
      paid_for: boolean;
      /**
       * Password Updated On
       * @description Timestamp when the collaborator's password was last updated (ISO 8601)
       * @default null
       */
      password_updated_on: string | null;
      /**
       * Pending Invitation
       * @description True if the invitation is pending acceptance
       */
      pending_invitation: boolean;
      /**
       * Project Ids
       * @description List of project IDs the collaborator has access to
       */
      project_ids: string[];
      /**
       * Project Roles
       * @description Mapping of project IDs to roles (project_member or project_admin)
       */
      project_roles: {
          [key: string]: "project_member" | "project_admin";
      };
      /**
       * Recovery Codes Remaining
       * @description Number of two-factor recovery codes remaining
       * @default null
       */
      recovery_codes_remaining: number | null;
      /**
       * Show Time In Utc
       * @description Whether the collaborator prefers times displayed in UTC
       */
      show_time_in_utc: boolean;
      /**
       * Two Factor Enabled
       * @description Whether two-factor authentication is enabled for the collaborator
       * @default null
       */
      two_factor_enabled: boolean | null;
      /**
       * Two Factor Enabled On
       * @description Timestamp when two-factor authentication was enabled (ISO 8601)
       * @default null
       */
      two_factor_enabled_on: string | null;
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
 * Type map of all available tool input types for toolkit "BUGSNAG".
 */
export type BUGSNAG_TOOL_INPUTS = {
  BULK_UPDATE_ERRORS: BUGSNAG_BULK_UPDATE_ERRORS_INPUT
  CONFIGURE_INTEGRATION: BUGSNAG_CONFIGURE_INTEGRATION_INPUT
  CREATE_COLLABORATOR: BUGSNAG_CREATE_COLLABORATOR_INPUT
  CREATE_CUSTOM_EVENT_FIELD: BUGSNAG_CREATE_CUSTOM_EVENT_FIELD_INPUT
  CREATE_SAVED_SEARCH: BUGSNAG_CREATE_SAVED_SEARCH_INPUT
  DELETE_ALL_ERRORS_IN_PROJECT: BUGSNAG_DELETE_ALL_ERRORS_IN_PROJECT_INPUT
  DELETE_COLLABORATOR: BUGSNAG_DELETE_COLLABORATOR_INPUT
  DELETE_CONFIGURED_INTEGRATION: BUGSNAG_DELETE_CONFIGURED_INTEGRATION_INPUT
  DELETE_EVENT_FIELD: BUGSNAG_DELETE_EVENT_FIELD_INPUT
  DELETE_PROJECT: BUGSNAG_DELETE_PROJECT_INPUT
  DELETE_SAVED_SEARCH: BUGSNAG_DELETE_SAVED_SEARCH_INPUT
  GET_SAVED_SEARCH: BUGSNAG_GET_SAVED_SEARCH_INPUT
  GET_SAVED_SEARCH_USAGE_SUMMARY: BUGSNAG_GET_SAVED_SEARCH_USAGE_SUMMARY_INPUT
  LIST_COLLABORATORS: BUGSNAG_LIST_COLLABORATORS_INPUT
  LIST_COLLABORATORS_ON_PROJECT: BUGSNAG_LIST_COLLABORATORS_ON_PROJECT_INPUT
  LIST_COLLABORATOR_ACCESS_DETAILS_FOR_PROJECTS: BUGSNAG_LIST_COLLABORATOR_ACCESS_DETAILS_FOR_PROJECTS_INPUT
  LIST_CONFIGURED_INTEGRATIONS_FOR_PROJECT: BUGSNAG_LIST_CONFIGURED_INTEGRATIONS_FOR_PROJECT_INPUT
  LIST_ERRORS_ON_PROJECT: BUGSNAG_LIST_ERRORS_ON_PROJECT_INPUT
  LIST_EVENTS_ON_PROJECT: BUGSNAG_LIST_EVENTS_ON_PROJECT_INPUT
  LIST_EVENT_FIELDS_FOR_PROJECT: BUGSNAG_LIST_EVENT_FIELDS_FOR_PROJECT_INPUT
  LIST_ORGANIZATIONS: BUGSNAG_LIST_ORGANIZATIONS_INPUT
  LIST_PIVOTS_ON_PROJECT: BUGSNAG_LIST_PIVOTS_ON_PROJECT_INPUT
  LIST_PROJECTS: BUGSNAG_LIST_PROJECTS_INPUT
  LIST_RELEASES: BUGSNAG_LIST_RELEASES_INPUT
  LIST_RELEASE_GROUPS: BUGSNAG_LIST_RELEASE_GROUPS_INPUT
  LIST_SAVED_SEARCHES_ON_PROJECT: BUGSNAG_LIST_SAVED_SEARCHES_ON_PROJECT_INPUT
  LIST_SUPPORTED_INTEGRATIONS: BUGSNAG_LIST_SUPPORTED_INTEGRATIONS_INPUT
  LIST_TRENDS_FOR_PROJECT_BUCKETS: BUGSNAG_LIST_TRENDS_FOR_PROJECT_BUCKETS_INPUT
  REGENERATE_PROJECT_API_KEY: BUGSNAG_REGENERATE_PROJECT_API_KEY_INPUT
  SHOW_COLLABORATOR_ACCESS_DETAILS_FOR_PROJECT: BUGSNAG_SHOW_COLLABORATOR_ACCESS_DETAILS_FOR_PROJECT_INPUT
  SHOW_COLLABORATOR_ON_ORGANIZATION: BUGSNAG_SHOW_COLLABORATOR_ON_ORGANIZATION_INPUT
  SHOW_COLLABORATOR_ON_PROJECT: BUGSNAG_SHOW_COLLABORATOR_ON_PROJECT_INPUT
  UPDATE_COLLABORATOR_PERMISSIONS: BUGSNAG_UPDATE_COLLABORATOR_PERMISSIONS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BUGSNAG".
 */
export type BUGSNAG_TOOL_OUTPUTS = {
  BULK_UPDATE_ERRORS: BUGSNAG_BULK_UPDATE_ERRORS_OUTPUT
  CONFIGURE_INTEGRATION: BUGSNAG_CONFIGURE_INTEGRATION_OUTPUT
  CREATE_COLLABORATOR: BUGSNAG_CREATE_COLLABORATOR_OUTPUT
  CREATE_CUSTOM_EVENT_FIELD: BUGSNAG_CREATE_CUSTOM_EVENT_FIELD_OUTPUT
  CREATE_SAVED_SEARCH: BUGSNAG_CREATE_SAVED_SEARCH_OUTPUT
  DELETE_ALL_ERRORS_IN_PROJECT: BUGSNAG_DELETE_ALL_ERRORS_IN_PROJECT_OUTPUT
  DELETE_COLLABORATOR: BUGSNAG_DELETE_COLLABORATOR_OUTPUT
  DELETE_CONFIGURED_INTEGRATION: BUGSNAG_DELETE_CONFIGURED_INTEGRATION_OUTPUT
  DELETE_EVENT_FIELD: BUGSNAG_DELETE_EVENT_FIELD_OUTPUT
  DELETE_PROJECT: BUGSNAG_DELETE_PROJECT_OUTPUT
  DELETE_SAVED_SEARCH: BUGSNAG_DELETE_SAVED_SEARCH_OUTPUT
  GET_SAVED_SEARCH: BUGSNAG_GET_SAVED_SEARCH_OUTPUT
  GET_SAVED_SEARCH_USAGE_SUMMARY: BUGSNAG_GET_SAVED_SEARCH_USAGE_SUMMARY_OUTPUT
  LIST_COLLABORATORS: BUGSNAG_LIST_COLLABORATORS_OUTPUT
  LIST_COLLABORATORS_ON_PROJECT: BUGSNAG_LIST_COLLABORATORS_ON_PROJECT_OUTPUT
  LIST_COLLABORATOR_ACCESS_DETAILS_FOR_PROJECTS: BUGSNAG_LIST_COLLABORATOR_ACCESS_DETAILS_FOR_PROJECTS_OUTPUT
  LIST_CONFIGURED_INTEGRATIONS_FOR_PROJECT: BUGSNAG_LIST_CONFIGURED_INTEGRATIONS_FOR_PROJECT_OUTPUT
  LIST_ERRORS_ON_PROJECT: BUGSNAG_LIST_ERRORS_ON_PROJECT_OUTPUT
  LIST_EVENTS_ON_PROJECT: BUGSNAG_LIST_EVENTS_ON_PROJECT_OUTPUT
  LIST_EVENT_FIELDS_FOR_PROJECT: BUGSNAG_LIST_EVENT_FIELDS_FOR_PROJECT_OUTPUT
  LIST_ORGANIZATIONS: BUGSNAG_LIST_ORGANIZATIONS_OUTPUT
  LIST_PIVOTS_ON_PROJECT: BUGSNAG_LIST_PIVOTS_ON_PROJECT_OUTPUT
  LIST_PROJECTS: BUGSNAG_LIST_PROJECTS_OUTPUT
  LIST_RELEASES: BUGSNAG_LIST_RELEASES_OUTPUT
  LIST_RELEASE_GROUPS: BUGSNAG_LIST_RELEASE_GROUPS_OUTPUT
  LIST_SAVED_SEARCHES_ON_PROJECT: BUGSNAG_LIST_SAVED_SEARCHES_ON_PROJECT_OUTPUT
  LIST_SUPPORTED_INTEGRATIONS: BUGSNAG_LIST_SUPPORTED_INTEGRATIONS_OUTPUT
  LIST_TRENDS_FOR_PROJECT_BUCKETS: BUGSNAG_LIST_TRENDS_FOR_PROJECT_BUCKETS_OUTPUT
  REGENERATE_PROJECT_API_KEY: BUGSNAG_REGENERATE_PROJECT_API_KEY_OUTPUT
  SHOW_COLLABORATOR_ACCESS_DETAILS_FOR_PROJECT: BUGSNAG_SHOW_COLLABORATOR_ACCESS_DETAILS_FOR_PROJECT_OUTPUT
  SHOW_COLLABORATOR_ON_ORGANIZATION: BUGSNAG_SHOW_COLLABORATOR_ON_ORGANIZATION_OUTPUT
  SHOW_COLLABORATOR_ON_PROJECT: BUGSNAG_SHOW_COLLABORATOR_ON_PROJECT_OUTPUT
  UPDATE_COLLABORATOR_PERMISSIONS: BUGSNAG_UPDATE_COLLABORATOR_PERMISSIONS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BUGSNAG toolkit.
 */
export const BUGSNAG = {
  slug: "bugsnag",
  tools: {
    /**
     * Tool to bulk update multiple errors in a project. use when batching identical updates across many errors.
     */
    BULK_UPDATE_ERRORS: "BUGSNAG_BULK_UPDATE_ERRORS",
    /**
     * Tool to configure a new integration for a bugsnag project. use after selecting integration key and preparing credentials.
     */
    CONFIGURE_INTEGRATION: "BUGSNAG_CONFIGURE_INTEGRATION",
    /**
     * Tool to invite a collaborator to an organization. use when you need to add a new user by email to grant them access. ensure the organization id is correct before calling.
     */
    CREATE_COLLABORATOR: "BUGSNAG_CREATE_COLLABORATOR",
    /**
     * Tool to create a custom event field for a project. use after confirming the project id to add a new filterable field. example: "create a field 'user.id' mapping to 'metadata.user.id' for project 515fb..."
     */
    CREATE_CUSTOM_EVENT_FIELD: "BUGSNAG_CREATE_CUSTOM_EVENT_FIELD",
    /**
     * Tool to create a new saved search for a project. use when you need to persist a set of filters and sort order as a saved search for a project after confirming project details.
     */
    CREATE_SAVED_SEARCH: "BUGSNAG_CREATE_SAVED_SEARCH",
    /**
     * Tool to delete all errors in a project. use when you need to remove all error and event data for a given project. use with caution after confirming the project id, as this action is irreversible and requires project owner or organization administrator permissions.
     */
    DELETE_ALL_ERRORS_IN_PROJECT: "BUGSNAG_DELETE_ALL_ERRORS_IN_PROJECT",
    /**
     * Tool to remove a collaborator from an organization. use when revoking collaborator access after confirming both organization and collaborator ids. requires organization administrator privileges.
     */
    DELETE_COLLABORATOR: "BUGSNAG_DELETE_COLLABORATOR",
    /**
     * Tool to delete a configured integration. use when you need to remove an existing integration from a project after confirming the integration id. this action cannot be undone and requires organization administrator or project owner permissions.
     */
    DELETE_CONFIGURED_INTEGRATION: "BUGSNAG_DELETE_CONFIGURED_INTEGRATION",
    /**
     * Tool to delete a custom event field. use when you need to remove a specific event field after confirming the project id and display id.
     */
    DELETE_EVENT_FIELD: "BUGSNAG_DELETE_EVENT_FIELD",
    /**
     * Tool to delete a project. use when you need to permanently remove a project after confirming the project id. requires appropriate permissions.
     */
    DELETE_PROJECT: "BUGSNAG_DELETE_PROJECT",
    /**
     * Tool to delete a saved search. use when you need to permanently remove a saved filterset by its id after confirming the saved search identifier.
     */
    DELETE_SAVED_SEARCH: "BUGSNAG_DELETE_SAVED_SEARCH",
    /**
     * Tool to retrieve a saved search by id. use when you need to fetch details of a saved search after confirming its id.
     */
    GET_SAVED_SEARCH: "BUGSNAG_GET_SAVED_SEARCH",
    /**
     * Tool to get usage summary for a saved search. use after confirming the saved search id. example: "get usage summary for saved search 515fb9337c1074f6fd000003".
     */
    GET_SAVED_SEARCH_USAGE_SUMMARY: "BUGSNAG_GET_SAVED_SEARCH_USAGE_SUMMARY",
    /**
     * Tool to list collaborators in an organization. use when you need to retrieve all collaborators for a specified organization. example: "list collaborators for organization 515fb9337c1074f6fd000001".
     */
    LIST_COLLABORATORS: "BUGSNAG_LIST_COLLABORATORS",
    /**
     * Tool to list collaborators on a project. use when you need to retrieve all users with access to a given project after confirming its id. example: "list collaborators for project 515fb9337c1074f6fd000001".
     */
    LIST_COLLABORATORS_ON_PROJECT: "BUGSNAG_LIST_COLLABORATORS_ON_PROJECT",
    /**
     * Tool to list summary details of the projects a collaborator has access to. use when reviewing a collaborator's access across an organization.
     */
    LIST_COLLABORATOR_ACCESS_DETAILS_FOR_PROJECTS: "BUGSNAG_LIST_COLLABORATOR_ACCESS_DETAILS_FOR_PROJECTS",
    /**
     * Tool to list configured integrations for a project. use after confirming the project id to retrieve all integration summaries.
     */
    LIST_CONFIGURED_INTEGRATIONS_FOR_PROJECT: "BUGSNAG_LIST_CONFIGURED_INTEGRATIONS_FOR_PROJECT",
    /**
     * Tool to list all errors in a project. use when you need to retrieve errors with optional filtering by version and sorting.
     */
    LIST_ERRORS_ON_PROJECT: "BUGSNAG_LIST_ERRORS_ON_PROJECT",
    /**
     * Tool to list events for a project. use when you need to retrieve all error occurrences (events) for a given project after confirming its id. example: "list events for project 515fb9337c1074f6fd000003".
     */
    LIST_EVENTS_ON_PROJECT: "BUGSNAG_LIST_EVENTS_ON_PROJECT",
    /**
     * Tool to list event fields for a project. use when you need to discover all available fields for filtering events in a specified project. example: "list event fields for project 515fb9337c1074f6fd000001".
     */
    LIST_EVENT_FIELDS_FOR_PROJECT: "BUGSNAG_LIST_EVENT_FIELDS_FOR_PROJECT",
    /**
     * Tool to list organizations for the authenticated user. use after validating the api token when you need to retrieve all organizations the current user has access to.
     */
    LIST_ORGANIZATIONS: "BUGSNAG_LIST_ORGANIZATIONS",
    /**
     * Tool to list pivots for a project. use when you need to retrieve all pivot definitions available in a specified project.
     */
    LIST_PIVOTS_ON_PROJECT: "BUGSNAG_LIST_PIVOTS_ON_PROJECT",
    /**
     * Tool to list projects in an organization. use when you need to retrieve all projects under a specified bugsnag organization after confirming the organization id.
     */
    LIST_PROJECTS: "BUGSNAG_LIST_PROJECTS",
    /**
     * Tool to list releases for a project. use when you need to retrieve all releases of a specific bugsnag project after confirming the project id.
     */
    LIST_RELEASES: "BUGSNAG_LIST_RELEASES",
    /**
     * Tool to list release groups for a project. use when you need to retrieve all release groups of a specific bugsnag project after confirming the project id.
     */
    LIST_RELEASE_GROUPS: "BUGSNAG_LIST_RELEASE_GROUPS",
    /**
     * Tool to list saved searches for a project. use after confirming project id to retrieve all saved searches, optionally filtering by shared flag.
     */
    LIST_SAVED_SEARCHES_ON_PROJECT: "BUGSNAG_LIST_SAVED_SEARCHES_ON_PROJECT",
    /**
     * Tool to list all supported integrations. use when discovering available integration services before configuring a project.
     */
    LIST_SUPPORTED_INTEGRATIONS: "BUGSNAG_LIST_SUPPORTED_INTEGRATIONS",
    /**
     * Tool to list trend buckets for a project. use when you need time-segmented event counts to analyze occurrence patterns.
     */
    LIST_TRENDS_FOR_PROJECT_BUCKETS: "BUGSNAG_LIST_TRENDS_FOR_PROJECT_BUCKETS",
    /**
     * Tool to regenerate a project's api key. use after confirming the project id and when you need to rotate the notifier api key.
     */
    REGENERATE_PROJECT_API_KEY: "BUGSNAG_REGENERATE_PROJECT_API_KEY",
    /**
     * Tool to show a collaborator's access details for a project. use after confirming organization, collaborator, and project ids have been obtained and you have access rights.
     */
    SHOW_COLLABORATOR_ACCESS_DETAILS_FOR_PROJECT: "BUGSNAG_SHOW_COLLABORATOR_ACCESS_DETAILS_FOR_PROJECT",
    /**
     * Tool to show a collaborator in an organization. use after confirming organization and collaborator ids; requires organization administrator access.
     */
    SHOW_COLLABORATOR_ON_ORGANIZATION: "BUGSNAG_SHOW_COLLABORATOR_ON_ORGANIZATION",
    /**
     * Tool to show a collaborator in a project. use when you need detailed information about a specific collaborator after confirming both project and collaborator ids.
     */
    SHOW_COLLABORATOR_ON_PROJECT: "BUGSNAG_SHOW_COLLABORATOR_ON_PROJECT",
    /**
     * Tool to update a collaborator's project access permissions. use when you need to change which projects a collaborator can access or their roles within each project. supply only project ids or project roles.
     */
    UPDATE_COLLABORATOR_PERMISSIONS: "BUGSNAG_UPDATE_COLLABORATOR_PERMISSIONS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BUGSNAG".
 */
export type BUGSNAG_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BUGSNAG".
 */
export type BUGSNAG_TRIGGER_EVENTS = {}
