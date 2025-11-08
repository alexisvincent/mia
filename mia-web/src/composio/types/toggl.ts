// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TOGGL's TOGGL_CREATE_CLIENT tool input.
 */
type TOGGL_CREATE_CLIENT_INPUT = {
  /**
   * Name
   * @description Name of the client to create
   */
  name?: string;
  /**
   * Workspace Id
   * @description ID of the workspace where the client will be created
   */
  workspace_id?: number;
};

/**
 * Type of TOGGL's TOGGL_CREATE_CLIENT tool output.
 */
type TOGGL_CREATE_CLIENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * At
       * @description Last update timestamp (ISO 8601)
       */
      at: string;
      /**
       * Id
       * @description ID of the created client
       */
      id: number;
      /**
       * Name
       * @description Name of the client
       */
      name: string;
      /**
       * Wid
       * @description Workspace ID that the client belongs to
       */
      wid: number;
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
 * Type of TOGGL's TOGGL_CREATE_ORGANIZATION tool input.
 */
type TOGGL_CREATE_ORGANIZATION_INPUT = {
  /**
   * Name
   * @description Name of the new organization; 1–140 characters.
   */
  name?: string;
  /**
   * Workspace Name
   * @description Name of the default workspace; 1–140 characters.
   */
  workspace_name?: string;
};

/**
 * Type of TOGGL's TOGGL_CREATE_ORGANIZATION tool output.
 */
type TOGGL_CREATE_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description ID of the created organization
       */
      id: number;
      /**
       * Name
       * @description Name of the created organization
       */
      name: string;
      /**
       * Permissions
       * @description Permissions associated with the organization
       */
      permissions: string;
      /**
       * Workspace Id
       * @description ID of the created default workspace
       */
      workspace_id: number;
      /**
       * Workspace Name
       * @description Name of the created default workspace
       */
      workspace_name: string;
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
 * Type of TOGGL's TOGGL_CREATE_PROJECT tool input.
 */
type TOGGL_CREATE_PROJECT_INPUT = {
  /**
   * Active
   * @description Whether the project is active (true) or archived (false)
   * @default true
   */
  active: boolean;
  /**
   * Billable
   * @description Default billable status for entries in this project
   * @default null
   */
  billable: boolean | null;
  /**
   * Client Id
   * @description ID of the client the project belongs to
   * @default null
   */
  client_id: number | null;
  /**
   * Color
   * @description Project color code as integer
   * @default null
   */
  color: number | null;
  /**
   * Currency
   * @description ISO currency code for fixed fee and hourly rate
   * @default null
   */
  currency: string | null;
  /**
   * Estimated Hours
   * @description Estimated total hours for the project
   * @default null
   */
  estimated_hours: number | null;
  /**
   * Fixed Fee
   * @description Fixed-price fee for this project in chosen currency
   * @default null
   */
  fixed_fee: number | null;
  /**
   * Hourly Rate
   * @description Default hourly rate for this project in chosen currency
   * @default null
   */
  hourly_rate: number | null;
  /**
   * Is Private
   * @description Whether the project is private (true) or public (false)
   * @default false
   */
  is_private: boolean;
  /**
   * Is Template
   * @description Mark this project as a template for future use
   * @default false
   */
  is_template: boolean;
  /**
   * Name
   * @description Name of the new project
   */
  name?: string;
  /**
   * Template Id
   * @description ID of an existing template project to base this project on
   * @default null
   */
  template_id: number | null;
  /**
   * Workspace Id
   * @description ID of the workspace where the project will be created
   */
  workspace_id?: number;
};

/**
 * Type of TOGGL's TOGGL_CREATE_PROJECT tool output.
 */
type TOGGL_CREATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Whether project is active
       */
      active: boolean;
      /**
       * At
       * @description Last updated timestamp
       */
      at: string;
      /**
       * Auto Estimates
       * @description Auto estimate flag
       * @default null
       */
      auto_estimates: boolean | null;
      /**
       * Billable
       * @description Billable setting of project
       */
      billable: boolean;
      /**
       * Cid
       * @description Client ID if assigned
       * @default null
       */
      cid: number | null;
      /**
       * Color
       * @description Hex or integer color code
       * @default null
       */
      color: string | null;
      /**
       * Created At
       * @description Creation timestamp
       */
      created_at: string;
      /**
       * Currency
       * @description Currency code used
       * @default null
       */
      currency: string | null;
      /**
       * Estimated Hours
       * @description Estimated hours for project
       * @default null
       */
      estimated_hours: number | null;
      /**
       * Fixed Fee
       * @description Fixed fee of project
       * @default null
       */
      fixed_fee: number | null;
      /**
       * Hex Color
       * @description Hex color code with #
       * @default null
       */
      hex_color: string | null;
      /**
       * Hourly Rate
       * @description Hourly rate of project
       * @default null
       */
      hourly_rate: number | null;
      /**
       * Id
       * @description ID of the created project
       */
      id: number;
      /**
       * Is Completed
       * @description Completion status
       * @default null
       */
      is_completed: boolean | null;
      /**
       * Is Private
       * @description Privacy setting of project
       */
      is_private: boolean;
      /**
       * Is Template
       * @description Whether project is a template
       */
      is_template: boolean;
      /**
       * Name
       * @description Name of the project
       */
      name: string;
      /**
       * Rate
       * @description Rate used by API (alias of hourly_rate)
       * @default null
       */
      rate: number | null;
      /**
       * Template Id
       * @description Template project ID if used
       * @default null
       */
      template_id: number | null;
      /**
       * Wid
       * @description Workspace ID
       */
      wid: number;
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
 * Type of TOGGL's TOGGL_CREATE_TAG tool input.
 */
type TOGGL_CREATE_TAG_INPUT = {
  /**
   * Client Id
   * @description Optional client ID to associate with the tag
   * @default null
   */
  client_id: number | null;
  /**
   * Name
   * @description Name of the new tag
   */
  name?: string;
  /**
   * Workspace Id
   * @description ID of the workspace where the tag will be created
   */
  workspace_id?: number;
};

/**
 * Type of TOGGL's TOGGL_CREATE_TAG tool output.
 */
type TOGGL_CREATE_TAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Archived
       * @description Whether the tag is archived
       */
      archived: boolean;
      /**
       * Id
       * @description ID of the created tag
       */
      id: number;
      /**
       * Name
       * @description Name of the tag
       */
      name: string;
      /**
       * Workspace Id
       * @description ID of the workspace for the tag
       */
      workspace_id: number;
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
 * Type of TOGGL's TOGGL_CREATE_TIME_ENTRY tool input.
 */
type TOGGL_CREATE_TIME_ENTRY_INPUT = {
  /**
   * Billable
   * @description Whether the entry is billable
   * @default null
   */
  billable: boolean | null;
  /**
   * Created With
   * @description Name of the client application creating this entry
   */
  created_with?: string;
  /**
   * Description
   * @description Description of the time entry
   * @default null
   */
  description: string | null;
  /**
   * Duration
   * @description Duration in seconds; omit for running entries
   * @default null
   */
  duration: number | null;
  /**
   * Project Id
   * @description Project ID to associate the entry with
   * @default null
   */
  project_id: number | null;
  /**
   * Start
   * @description ISO 8601 timestamp when the entry started
   */
  start?: string;
  /**
   * Stop
   * @description ISO 8601 timestamp when the entry stopped; omit to leave running
   * @default null
   */
  stop: string | null;
  /**
   * Tags
   * @description List of tags to attach to the entry
   * @default null
   */
  tags: string[] | null;
  /**
   * Task Id
   * @description Task ID associated with the time entry
   * @default null
   */
  task_id: number | null;
  /**
   * Workspace Id
   * @description Workspace ID where the time entry will be created
   */
  workspace_id?: number;
};

/**
 * Type of TOGGL's TOGGL_CREATE_TIME_ENTRY tool output.
 */
type TOGGL_CREATE_TIME_ENTRY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Billable
       * @description Whether the entry is billable
       */
      billable: boolean;
      /**
       * Created With
       * @description Client application name used to create the entry
       */
      created_with: string;
      /**
       * Description
       * @description Description of the time entry
       */
      description: string;
      /**
       * Duration
       * @description Duration in seconds; negative if running
       */
      duration: number;
      /**
       * Id
       * @description Unique ID of the time entry
       */
      id: number;
      /**
       * Project Id
       * @description Associated project ID, if any
       * @default null
       */
      project_id: number | null;
      /**
       * Start
       * @description ISO 8601 start timestamp of the entry
       */
      start: string;
      /**
       * Stop
       * @description ISO 8601 stop timestamp, or null if still running
       * @default null
       */
      stop: string | null;
      /**
       * Tags
       * @description List of tags attached to the entry
       */
      tags: string[];
      /**
       * Task Id
       * @description Associated task ID, if any
       * @default null
       */
      task_id: number | null;
      /**
       * User Id
       * @description ID of the user who created the entry
       */
      user_id: number;
      /**
       * Workspace Id
       * @description Workspace ID where the entry was created
       */
      workspace_id: number;
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
 * Type of TOGGL's TOGGL_DELETE_CLIENT tool input.
 */
type TOGGL_DELETE_CLIENT_INPUT = {
  /**
   * Client Id
   * @description The ID of the client to delete.
   */
  client_id?: string;
  /**
   * Workspace Id
   * @description The ID of the workspace where the client resides.
   */
  workspace_id?: string;
};

/**
 * Type of TOGGL's TOGGL_DELETE_CLIENT tool output.
 */
type TOGGL_DELETE_CLIENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the client was deleted successfully.
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
 * Type of TOGGL's TOGGL_DELETE_TAG tool input.
 */
type TOGGL_DELETE_TAG_INPUT = {
  /**
   * Tag Id
   * @description The tag's unique identifier within the workspace.
   */
  tag_id?: string;
  /**
   * Workspace Id
   * @description The workspace's unique identifier.
   */
  workspace_id?: string;
};

/**
 * Type of TOGGL's TOGGL_DELETE_TAG tool output.
 */
type TOGGL_DELETE_TAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description True if the tag was successfully deleted.
       */
      deleted: boolean;
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
 * Type of TOGGL's TOGGL_GET_CLIENT_DETAILS tool input.
 */
type TOGGL_GET_CLIENT_DETAILS_INPUT = {
  /**
   * Client Id
   * @description The unique ID of the client to retrieve details for
   */
  client_id?: number;
  /**
   * Workspace Id
   * @description The workspace ID the client belongs to
   */
  workspace_id?: number;
};

/**
 * Type of TOGGL's TOGGL_GET_CLIENT_DETAILS tool output.
 */
type TOGGL_GET_CLIENT_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Client
       * @description Client object containing detailed information
       */
      client: {
          /**
           * Actual Hourly Rate
           * @description Actual hourly rate for the client
           * @default null
           */
          actual_hourly_rate: number | null;
          /**
           * Archived
           * @description Archive status of the client
           */
          archived: boolean;
          /**
           * At
           * @description Timestamp when the client was last updated (ISO 8601)
           */
          at: string;
          /**
           * Currency
           * @description Client's default currency
           * @default null
           */
          currency: string | null;
          /**
           * Default Hourly Rate
           * @description Default hourly rate for the client
           * @default null
           */
          default_hourly_rate: number | null;
          /**
           * Id
           * @description The client's unique ID
           */
          id: number;
          /**
           * Name
           * @description The name of the client
           */
          name: string;
          /**
           * Notes
           * @description Notes about the client
           * @default null
           */
          notes: string | null;
          /**
           * Server Deleted At
           * @description Deletion timestamp if deleted, else null
           * @default null
           */
          server_deleted_at: string | null;
          /**
           * Vat Id
           * @description VAT or tax ID of the client
           * @default null
           */
          vat_id: string | null;
          /**
           * Wid
           * @description The workspace ID the client belongs to
           */
          wid: number;
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
 * Type of TOGGL's TOGGL_GET_CURRENT_TIME_ENTRY tool input.
 */
type TOGGL_GET_CURRENT_TIME_ENTRY_INPUT = object;

/**
 * Type of TOGGL's TOGGL_GET_CURRENT_TIME_ENTRY tool output.
 */
type TOGGL_GET_CURRENT_TIME_ENTRY_OUTPUT = {
  /**
   * TimeEntry
   * @description Model representing a Toggl time entry object.
   * @default null
   */
  data: {
      /**
       * At
       * @description Last updated timestamp (ISO 8601 format)
       */
      at: string;
      /**
       * Billable
       * @description Whether this entry is billable
       */
      billable: boolean;
      /**
       * Description
       * @description Time entry description
       * @default null
       */
      description: string | null;
      /**
       * Duration
       * @description Duration in seconds; negative values indicate a running entry
       */
      duration: number;
      /**
       * Duronly
       * @description True if the entry uses duration-only mode
       */
      duronly: boolean;
      /**
       * Id
       * @description Unique time entry ID
       */
      id: number;
      /**
       * Project Id
       * @description Associated project ID if any
       * @default null
       */
      project_id: number | null;
      /**
       * Start
       * @description Start time (ISO 8601 format)
       */
      start: string;
      /**
       * Stop
       * @description Stop time (ISO 8601 format) if stopped
       * @default null
       */
      stop: string | null;
      /**
       * Tag Ids
       * @description List of tag IDs
       */
      tag_ids?: number[];
      /**
       * Tags
       * @description List of tag names
       */
      tags?: string[];
      /**
       * Task Id
       * @description Associated task ID if any
       * @default null
       */
      task_id: number | null;
      /**
       * Workspace Id
       * @description Workspace ID the entry belongs to
       */
      workspace_id: number;
  } | null;
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
 * Type of TOGGL's TOGGL_GET_LIST_CLIENTS tool input.
 */
type TOGGL_GET_LIST_CLIENTS_INPUT = {
  /**
   * Active
   * @description Filter by active status. True for active clients, False for inactive.
   * @default null
   */
  active: boolean | null;
  /**
   * Page
   * @description Page number for pagination (minimum is 1)
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of clients per page (1-200)
   * @default null
   */
  per_page: number | null;
  /**
   * Since
   * @description Return clients modified after this timestamp (ISO 8601 format)
   * @default null
   */
  since: string | null;
  /**
   * Until
   * @description Return clients modified before this timestamp (ISO 8601 format)
   * @default null
   */
  until: string | null;
  /**
   * Workspace Id
   * @description The unique ID of the workspace to list clients from
   */
  workspace_id?: number;
};

/**
 * Type of TOGGL's TOGGL_GET_LIST_CLIENTS tool output.
 */
type TOGGL_GET_LIST_CLIENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Clients
       * @description List of clients retrieved for the workspace
       */
      clients: {
          /**
           * Active
           * @description Whether the client is active
           */
          active: boolean;
          /**
           * At
           * @description Last update timestamp (ISO 8601)
           */
          at: string;
          /**
           * Currency
           * @description Client currency code
           */
          currency: string;
          /**
           * Id
           * @description Client ID
           */
          id: number;
          /**
           * Name
           * @description Client name
           */
          name: string;
          /**
           * Notes
           * @description Notes for the client
           * @default null
           */
          notes: string | null;
          /**
           * Wid
           * @description Workspace ID to which the client belongs
           */
          wid: number;
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
 * Type of TOGGL's TOGGL_GET_ORGANIZATION_DETAILS tool input.
 */
type TOGGL_GET_ORGANIZATION_DETAILS_INPUT = {
  /**
   * Organization Id
   * @description Unique ID of the organization to retrieve
   */
  organization_id?: number;
};

/**
 * Type of TOGGL's TOGGL_GET_ORGANIZATION_DETAILS tool output.
 */
type TOGGL_GET_ORGANIZATION_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the organization was created (ISO 8601)
       */
      created_at: string;
      /**
       * Id
       * @description Organization ID
       */
      id: number;
      /**
       * Is Active
       * @description Whether the organization is active
       */
      is_active: boolean;
      /**
       * Name
       * @description Organization name
       */
      name: string;
      /**
       * Updated At
       * @description Timestamp when the organization was last updated (ISO 8601)
       */
      updated_at: string;
      /**
       * Workspace Id
       * @description Associated workspace ID
       */
      workspace_id: number;
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
 * Type of TOGGL's TOGGL_GET_ORGANIZATION_GROUPS tool input.
 */
type TOGGL_GET_ORGANIZATION_GROUPS_INPUT = {
  /**
   * Organization Id
   * @description Unique identifier of the organization
   */
  organization_id?: number;
};

/**
 * Type of TOGGL's TOGGL_GET_ORGANIZATION_GROUPS tool output.
 */
type TOGGL_GET_ORGANIZATION_GROUPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Groups
       * @description List of groups within the specified organization
       */
      groups: {
          /**
           * Created At
           * @description Creation timestamp in ISO 8601 format
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the group
           */
          id: number;
          /**
           * Name
           * @description Name of the group
           */
          name: string;
          /**
           * Organization Id
           * @description Identifier of the parent organization
           */
          organization_id: number;
          /**
           * Updated At
           * @description Last update timestamp in ISO 8601 format
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
 * Type of TOGGL's TOGGL_GET_ORGANIZATION_USERS tool input.
 */
type TOGGL_GET_ORGANIZATION_USERS_INPUT = {
  /**
   * Organization Id
   * @description The unique ID of the organization to list users for
   */
  organization_id?: number;
};

/**
 * Type of TOGGL's TOGGL_GET_ORGANIZATION_USERS tool output.
 */
type TOGGL_GET_ORGANIZATION_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Users
       * @description List of users belonging to the specified organization
       */
      users: {
          /**
           * Active
           * @description Whether the user is active
           */
          active: boolean;
          /**
           * Created At
           * @description ISO 8601 timestamp when user was added
           */
          created_at: string;
          /**
           * Email
           * @description Email address of the user
           */
          email: string;
          /**
           * Id
           * @description Unique identifier of the user
           */
          id: number;
          /**
           * Invitation Status
           * @description Invitation state (e.g., accepted, pending)
           */
          invitation_status: string;
          /**
           * Inviter Id
           * @description ID of the user who invited them, null if direct signup
           * @default null
           */
          inviter_id: number | null;
          /**
           * Membership Type
           * @description Role in the organization (e.g., admin, regular)
           */
          membership_type: string;
          /**
           * Name
           * @description Full name of the user
           */
          name: string;
          /**
           * Organization Id
           * @description Organization ID (echoed back, matches request)
           */
          organization_id: number;
          /**
           * Updated At
           * @description ISO 8601 timestamp of last user update
           */
          updated_at: string;
          /**
           * Workspace Id
           * @description Home workspace ID
           */
          workspace_id: number;
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
 * Type of TOGGL's TOGGL_GET_PROJECTS tool input.
 */
type TOGGL_GET_PROJECTS_INPUT = {
  /**
   * Clients
   * @description Include full client details when true
   * @default null
   */
  clients: boolean | null;
  /**
   * Page
   * @description Page number for pagination (minimum is 1)
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of projects per page (1-200)
   * @default null
   */
  page_size: number | null;
  /**
   * Project Ids
   * @description Comma-separated list of project IDs to filter (max 200 IDs)
   * @default null
   */
  project_ids: string | null;
  /**
   * Since
   * @description Return projects modified after this timestamp (ISO 8601 format)
   * @default null
   */
  since: string | null;
  /**
   * Until
   * @description Return projects modified before this timestamp (ISO 8601 format)
   * @default null
   */
  until: string | null;
  /**
   * User Id
   * @description Filter projects visible by this user ID
   * @default null
   */
  user_id: number | null;
  /**
   * Workspace Id
   * @description The unique ID of the workspace to list projects from
   */
  workspace_id?: number;
};

/**
 * Type of TOGGL's TOGGL_GET_PROJECTS tool output.
 */
type TOGGL_GET_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Projects
       * @description List of projects retrieved for the workspace
       */
      projects: {
          /**
           * Active
           * @description Whether the project is active
           */
          active: boolean;
          /**
           * At
           * @description Last update timestamp (ISO 8601)
           */
          at: string;
          /**
           * Auto Estimates
           * @description Whether auto estimates are enabled
           * @default null
           */
          auto_estimates: boolean | null;
          /**
           * Billable
           * @description Default billable status for project
           */
          billable: boolean;
          /**
           * Cid
           * @description Client ID if assigned
           * @default null
           */
          cid: number | null;
          /**
           * Color
           * @description Color code as string
           * @default null
           */
          color: string | null;
          /**
           * Created At
           * @description Creation timestamp (ISO 8601)
           */
          created_at: string;
          /**
           * Currency
           * @description Currency code for rates
           * @default null
           */
          currency: string | null;
          /**
           * Estimated Hours
           * @description Estimated total hours for project
           * @default null
           */
          estimated_hours: number | null;
          /**
           * Fixed Fee
           * @description Fixed fee for project
           * @default null
           */
          fixed_fee: number | null;
          /**
           * Hex Color
           * @description Hex color code with #
           * @default null
           */
          hex_color: string | null;
          /**
           * Hourly Rate
           * @description Default hourly rate
           * @default null
           */
          hourly_rate: number | null;
          /**
           * Id
           * @description Project ID
           */
          id: number;
          /**
           * Is Completed
           * @description Completion status
           * @default null
           */
          is_completed: boolean | null;
          /**
           * Is Private
           * @description Whether the project is private
           */
          is_private: boolean;
          /**
           * Is Template
           * @description Whether this project is a template
           */
          is_template: boolean;
          /**
           * Name
           * @description Project name
           */
          name: string;
          /**
           * Rate
           * @description Rate used by API (alias of hourly_rate)
           * @default null
           */
          rate: number | null;
          /**
           * Template Id
           * @description ID of template used
           * @default null
           */
          template_id: number | null;
          /**
           * Wid
           * @description Workspace ID to which the project belongs
           */
          wid: number;
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
 * Type of TOGGL's TOGGL_GET_PROJECT_DETAILS tool input.
 */
type TOGGL_GET_PROJECT_DETAILS_INPUT = {
  /**
   * Project Id
   * @description Unique identifier of the project to retrieve
   */
  project_id?: number;
  /**
   * Workspace Id
   * @description Workspace ID the project belongs to
   */
  workspace_id?: number;
};

/**
 * Type of TOGGL's TOGGL_GET_PROJECT_DETAILS tool output.
 */
type TOGGL_GET_PROJECT_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Active status of the project
       */
      active: boolean;
      /**
       * At
       * @description Last updated timestamp (ISO 8601)
       */
      at: string;
      /**
       * Auto Estimates
       * @description Auto estimates flag
       * @default null
       */
      auto_estimates: boolean | null;
      /**
       * Billable
       * @description Billable status of the project
       */
      billable: boolean;
      /**
       * Cid
       * @description Client ID associated with the project
       * @default null
       */
      cid: number | null;
      /**
       * Created At
       * @description Creation timestamp (ISO 8601)
       */
      created_at: string;
      /**
       * Currency
       * @description Currency code for the project
       * @default null
       */
      currency: string | null;
      /**
       * Estimated Hours
       * @description Estimated hours for the project
       * @default null
       */
      estimated_hours: number | null;
      /**
       * Fixed Fee
       * @description Fixed fee of the project
       * @default null
       */
      fixed_fee: number | null;
      /**
       * Hex Color
       * @description Hex color code with #
       * @default null
       */
      hex_color: string | null;
      /**
       * Hourly Rate
       * @description Hourly rate of the project
       * @default null
       */
      hourly_rate: number | null;
      /**
       * Id
       * @description Unique identifier of the project
       */
      id: number;
      /**
       * Is Completed
       * @description Completion status of the project
       * @default null
       */
      is_completed: boolean | null;
      /**
       * Is Private
       * @description Privacy setting of the project
       */
      is_private: boolean;
      /**
       * Is Template
       * @description Indicates if the project is a template
       */
      is_template: boolean;
      /**
       * Name
       * @description Name of the project
       */
      name: string;
      /**
       * Rate
       * @description Rate used by API (alias of hourly_rate)
       * @default null
       */
      rate: number | null;
      /**
       * Server Deleted At
       * @description Deletion timestamp if project was deleted
       * @default null
       */
      server_deleted_at: string | null;
      /**
       * Template Id
       * @description Template project ID if used
       * @default null
       */
      template_id: number | null;
      /**
       * Wid
       * @description Workspace ID the project belongs to
       */
      wid: number;
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
 * Type of TOGGL's TOGGL_GET_TAGS tool input.
 */
type TOGGL_GET_TAGS_INPUT = {
  /**
   * Workspace Id
   * @description The ID of the workspace to retrieve tags for
   */
  workspace_id?: number;
};

/**
 * Type of TOGGL's TOGGL_GET_TAGS tool output.
 */
type TOGGL_GET_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tags
       * @description List of tags in the workspace
       */
      tags: {
          /**
           * Archived
           * @description Whether the tag is archived
           */
          archived: boolean;
          /**
           * Id
           * @description Unique identifier of the tag
           */
          id: number;
          /**
           * Name
           * @description Name of the tag
           */
          name: string;
          /**
           * Workspace Id
           * @description ID of the workspace the tag belongs to
           */
          workspace_id: number;
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
 * Type of TOGGL's TOGGL_GET_TASKS tool input.
 */
type TOGGL_GET_TASKS_INPUT = {
  /**
   * Active
   * @description If true, returns only active tasks
   * @default null
   */
  active: boolean | null;
  /**
   * Billable
   * @description If true, returns only billable tasks
   * @default null
   */
  billable: boolean | null;
  /**
   * Page
   * @description Page number for pagination (minimum is 1)
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of tasks per page (1-1000)
   * @default null
   */
  page_size: number | null;
  /**
   * Project Id
   * @description Filter tasks to only those belonging to this project ID
   * @default null
   */
  project_id: number | null;
  /**
   * Workspace Id
   * @description Workspace ID to list tasks from
   */
  workspace_id?: number;
};

/**
 * Type of TOGGL's TOGGL_GET_TASKS tool output.
 */
type TOGGL_GET_TASKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tasks
       * @description List of tasks retrieved
       */
      tasks: {
          /**
           * Active
           * @description Whether the task is active
           */
          active: boolean;
          /**
           * At
           * @description Last update timestamp (ISO 8601)
           */
          at: string;
          /**
           * Billable
           * @description Whether the task is billable
           */
          billable: boolean;
          /**
           * Estimated Seconds
           * @description Estimated seconds for the task
           */
          estimated_seconds: number;
          /**
           * Id
           * @description Task ID
           */
          id: number;
          /**
           * Name
           * @description Task name
           */
          name: string;
          /**
           * Project Id
           * @description Project ID of the task
           */
          project_id: number;
          /**
           * Recurring
           * @description Whether the task is recurring
           */
          recurring: boolean;
          /**
           * Tracked Seconds
           * @description Seconds tracked for the task so far
           */
          tracked_seconds: number;
          /**
           * User Id
           * @description ID of the user assigned to the task, or null if unassigned
           * @default null
           */
          user_id: number | null;
          /**
           * Workspace Id
           * @description Workspace ID of the task
           */
          workspace_id: number;
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
 * Type of TOGGL's TOGGL_GET_TIME_ENTRIES tool input.
 */
type TOGGL_GET_TIME_ENTRIES_INPUT = {
  /**
   * End Date
   * @description Only include entries before this timestamp (ISO 8601 format)
   * @default null
   */
  end_date: string | null;
  /**
   * Start Date
   * @description Only include entries after this timestamp (ISO 8601 format)
   * @default null
   */
  start_date: string | null;
};

/**
 * Type of TOGGL's TOGGL_GET_TIME_ENTRIES tool output.
 */
type TOGGL_GET_TIME_ENTRIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Time Entries
       * @description List of time entries retrieved
       */
      time_entries: {
          /**
           * At
           * @description Last updated timestamp (ISO 8601 format)
           */
          at: string;
          /**
           * Billable
           * @description Whether this entry is billable
           */
          billable: boolean;
          /**
           * Description
           * @description Entry description
           * @default null
           */
          description: string | null;
          /**
           * Duration
           * @description Duration in seconds; negative if running
           */
          duration: number;
          /**
           * Duronly
           * @description True if time entry uses duration-only mode
           */
          duronly: boolean;
          /**
           * Id
           * @description Unique time entry ID
           */
          id: number;
          /**
           * Project Id
           * @description Associated project ID if any
           * @default null
           */
          project_id: number | null;
          /**
           * Start
           * @description Start time (ISO 8601 format)
           */
          start: string;
          /**
           * Stop
           * @description Stop time (ISO 8601 format), null if running
           * @default null
           */
          stop: string | null;
          /**
           * Tag Ids
           * @description List of tag IDs
           */
          tag_ids?: number[];
          /**
           * Tags
           * @description List of tags
           */
          tags?: string[];
          /**
           * Task Id
           * @description Associated task ID if any
           * @default null
           */
          task_id: number | null;
          /**
           * User Id
           * @description ID of the user who logged time
           */
          user_id: number;
          /**
           * Workspace Id
           * @description Workspace ID the entry belongs to
           */
          workspace_id: number;
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
 * Type of TOGGL's TOGGL_GET_TIME_ENTRY tool input.
 */
type TOGGL_GET_TIME_ENTRY_INPUT = {
  /**
   * Time Entry Id
   * @description The unique ID of the time entry to retrieve
   */
  time_entry_id?: number;
};

/**
 * Type of TOGGL's TOGGL_GET_TIME_ENTRY tool output.
 */
type TOGGL_GET_TIME_ENTRY_OUTPUT = {
  /**
   * Data
   * @description The requested time entry object
   */
  data?: {
      /**
       * At
       * @description Last updated timestamp (ISO 8601 format)
       */
      at: string;
      /**
       * Billable
       * @description Whether this entry is billable
       */
      billable: boolean;
      /**
       * Description
       * @description Time entry description
       * @default null
       */
      description: string | null;
      /**
       * Duration
       * @description Duration in seconds; negative values indicate a running entry
       */
      duration: number;
      /**
       * Duronly
       * @description True if the entry uses duration-only mode
       */
      duronly: boolean;
      /**
       * Id
       * @description Unique time entry ID
       */
      id: number;
      /**
       * Project Id
       * @description Associated project ID if any
       * @default null
       */
      project_id: number | null;
      /**
       * Start
       * @description Start time (ISO 8601 format)
       */
      start: string;
      /**
       * Stop
       * @description Stop time (ISO 8601 format) if stopped
       * @default null
       */
      stop: string | null;
      /**
       * Tag Ids
       * @description List of tag IDs
       */
      tag_ids?: number[];
      /**
       * Tags
       * @description List of tag names
       */
      tags?: string[];
      /**
       * Task Id
       * @description Associated task ID if any
       * @default null
       */
      task_id: number | null;
      /**
       * User Id
       * @description ID of the user who logged the time entry
       */
      user_id: number;
      /**
       * Workspace Id
       * @description Workspace ID the entry belongs to
       */
      workspace_id: number;
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
 * Type of TOGGL's TOGGL_GET_USER_CLIENTS tool input.
 */
type TOGGL_GET_USER_CLIENTS_INPUT = object;

/**
 * Type of TOGGL's TOGGL_GET_USER_CLIENTS tool output.
 */
type TOGGL_GET_USER_CLIENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Clients
       * @description List of clients accessible by the user
       */
      clients: {
          /**
           * Actual Hours
           * @description Total tracked hours for this client
           * @default null
           */
          actual_hours: number | null;
          /**
           * At
           * @description Last update timestamp (ISO 8601 format)
           */
          at: string;
          /**
           * Id
           * @description Client ID
           */
          id: number;
          /**
           * Inactive
           * @description Indicates whether the client is inactive
           */
          inactive: boolean;
          /**
           * Name
           * @description Client name
           */
          name: string;
          /**
           * Notes
           * @description Notes about the client
           * @default null
           */
          notes: string | null;
          /**
           * Wid
           * @description Workspace ID
           */
          wid: number;
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
 * Type of TOGGL's TOGGL_GET_USER_PREFERENCES tool input.
 */
type TOGGL_GET_USER_PREFERENCES_INPUT = object;

/**
 * Type of TOGGL's TOGGL_GET_USER_PREFERENCES tool output.
 */
type TOGGL_GET_USER_PREFERENCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Preferences
       * @description Raw user preferences and alpha features response as dict
       */
      preferences: {
          [key: string]: unknown;
      };
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
 * Type of TOGGL's TOGGL_GET_USER_PROJECTS tool input.
 */
type TOGGL_GET_USER_PROJECTS_INPUT = {
  /**
   * Workspace Id
   * @description Only return projects for the specified workspace ID
   * @default null
   */
  workspace_id: number | null;
};

/**
 * Type of TOGGL's TOGGL_GET_USER_PROJECTS tool output.
 */
type TOGGL_GET_USER_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Projects
       * @description List of projects available to the user
       */
      projects: {
          /**
           * Active
           * @description Whether the project is active
           */
          active: boolean;
          /**
           * At
           * @description Last update timestamp in ISO 8601 format
           */
          at: string;
          /**
           * Auto Estimates
           * @description Whether auto-estimates are enabled
           */
          auto_estimates: boolean;
          /**
           * Billable
           * @description Whether the project is billable
           */
          billable: boolean;
          /**
           * Cid
           * @description Client ID, if assigned
           * @default null
           */
          cid: number | null;
          /**
           * Color
           * @description Color code of the project
           */
          color: string;
          /**
           * Created At
           * @description Creation timestamp in ISO 8601 format
           */
          created_at: string;
          /**
           * Estimated Hours
           * @description Estimated hours for the project
           * @default null
           */
          estimated_hours: number | null;
          /**
           * Id
           * @description Project ID
           */
          id: number;
          /**
           * Is Private
           * @description Whether the project is private
           */
          is_private: boolean;
          /**
           * Name
           * @description Project name
           */
          name: string;
          /**
           * Rate
           * @description Hourly rate for the project
           * @default null
           */
          rate: number | null;
          /**
           * Rate Last Updated
           * @description Timestamp when rate was last updated in ISO 8601 format
           * @default null
           */
          rate_last_updated: string | null;
          /**
           * Recurring
           * @description Whether the project is recurring
           */
          recurring: boolean;
          /**
           * Recurring Parameters
           * @description Parameters defining the recurrence schedule
           * @default null
           */
          recurring_parameters: {
              [key: string]: string | number | boolean;
          } | null;
          /**
           * Template
           * @description Whether the project is a template
           */
          template: boolean;
          /**
           * Wid
           * @description Workspace ID
           */
          wid: number;
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
 * Type of TOGGL's TOGGL_GET_USER_TAGS tool input.
 */
type TOGGL_GET_USER_TAGS_INPUT = {
  /**
   * Workspace Id
   * @description Optional workspace ID to filter tags by a specific workspace.
   * @default null
   */
  workspace_id: number | null;
};

/**
 * Type of TOGGL's TOGGL_GET_USER_TAGS tool output.
 */
type TOGGL_GET_USER_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tags
       * @description List of tags visible to the current user
       */
      tags: {
          /**
           * At
           * @description Timestamp of last update in ISO 8601 format
           */
          at: string;
          /**
           * Client Id
           * @description ID of the client associated with this tag, if any
           * @default null
           */
          client_id: number | null;
          /**
           * Gid
           * @description Global unique identifier for the tag
           */
          gid: string;
          /**
           * Id
           * @description Unique identifier of the tag
           */
          id: number;
          /**
           * Name
           * @description Name of the tag
           */
          name: string;
          /**
           * Workspace Id
           * @description ID of the workspace this tag belongs to
           */
          workspace_id: number;
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
 * Type of TOGGL's TOGGL_GET_USER_TASKS tool input.
 */
type TOGGL_GET_USER_TASKS_INPUT = object;

/**
 * Type of TOGGL's TOGGL_GET_USER_TASKS tool output.
 */
type TOGGL_GET_USER_TASKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tasks
       * @description Aggregate list of tasks across all accessible workspaces
       */
      tasks: {
          /**
           * Active
           * @description Whether the task is active
           */
          active: boolean;
          /**
           * Id
           * @description Unique identifier of the task
           */
          id: number;
          /**
           * Name
           * @description Name of the task
           */
          name: string;
          /**
           * Project Id
           * @description ID of the project the task belongs to
           */
          project_id: number;
          /**
           * Workspace Id
           * @description ID of the workspace the task belongs to
           */
          workspace_id: number;
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
 * Type of TOGGL's TOGGL_GET_USER_WORKSPACES tool input.
 */
type TOGGL_GET_USER_WORKSPACES_INPUT = object;

/**
 * Type of TOGGL's TOGGL_GET_USER_WORKSPACES tool output.
 */
type TOGGL_GET_USER_WORKSPACES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Workspaces
       * @description List of workspaces the user belongs to
       */
      workspaces: {
          /**
           * Admin
           * @description Whether the user is an admin in this workspace
           */
          admin: boolean;
          /**
           * Business Ws
           * @description Whether the workspace is a business workspace
           */
          business_ws: boolean;
          /**
           * Id
           * @description Workspace ID
           */
          id: number;
          /**
           * Name
           * @description Name of the workspace
           */
          name: string;
          /**
           * Premium
           * @description Whether the workspace is premium
           */
          premium: boolean;
          /**
           * Profile
           * @description Workspace profile identifier
           */
          profile: number;
          /**
           * Server Deleted At
           * @description ISO8601 deletion timestamp, or null if not deleted
           * @default null
           */
          server_deleted_at: string | null;
          /**
           * Suspended At
           * @description ISO8601 suspension timestamp, or null if not suspended
           * @default null
           */
          suspended_at: string | null;
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
 * Type of TOGGL's TOGGL_GET_WORKSPACE_DETAILS tool input.
 */
type TOGGL_GET_WORKSPACE_DETAILS_INPUT = {
  /**
   * Workspace Id
   * @description Unique ID of the workspace to retrieve details for
   */
  workspace_id?: number;
};

/**
 * Type of TOGGL's TOGGL_GET_WORKSPACE_DETAILS tool output.
 */
type TOGGL_GET_WORKSPACE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Admin
       * @description Whether the current user is an admin in this workspace
       */
      admin: boolean;
      /**
       * Api Token
       * @description API token associated with this workspace
       */
      api_token: string;
      /**
       * Business Ws
       * @description Whether the workspace is a business workspace
       */
      business_ws: boolean;
      /**
       * Default Currency
       * @description Default currency used in this workspace
       */
      default_currency: string;
      /**
       * Default Hourly Rate
       * @description Default hourly rate for projects in this workspace
       */
      default_hourly_rate: number;
      /**
       * Id
       * @description Workspace ID
       */
      id: number;
      /**
       * Name
       * @description Name of the workspace
       */
      name: string;
      /**
       * Only Admins May Create Projects
       * @description Whether only admins may create projects
       */
      only_admins_may_create_projects: boolean;
      /**
       * Only Admins See Billable Rates
       * @description Whether only admins can view billable rates
       */
      only_admins_see_billable_rates: boolean;
      /**
       * Only Admins See Team Dashboard
       * @description Whether only admins can view the team dashboard
       */
      only_admins_see_team_dashboard: boolean;
      /**
       * Premium
       * @description Whether the workspace is premium
       */
      premium: boolean;
      /**
       * Profile
       * @description Workspace profile identifier
       */
      profile: number;
      /**
       * Projects Billable By Default
       * @description Whether projects are billable by default
       */
      projects_billable_by_default: boolean;
      /**
       * Rounding
       * @description Rounding option for time entries
       */
      rounding: number;
      /**
       * Rounding Minutes
       * @description Interval in minutes for rounding time entries
       */
      rounding_minutes: number;
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
 * Type of TOGGL's TOGGL_GET_WORKSPACE_PREFERENCES tool input.
 */
type TOGGL_GET_WORKSPACE_PREFERENCES_INPUT = {
  /**
   * Workspace Id
   * @description The unique identifier of the workspace
   */
  workspace_id?: number;
};

/**
 * Type of TOGGL's TOGGL_GET_WORKSPACE_PREFERENCES tool output.
 */
type TOGGL_GET_WORKSPACE_PREFERENCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Admin Only Projects
       * @description Whether only admins can create projects
       */
      admin_only_projects: boolean;
      /**
       * Project Creation
       * @description Whether project creation is allowed in the workspace
       */
      project_creation: boolean;
      /**
       * Reports
       * @description Workspace reporting settings
       */
      reports: {
          /**
           * Rounded Minutes
           * @description Rounding increment in minutes for reports
           */
          rounded_minutes: number;
          /**
           * Rounding
           * @description Rounding settings for reports
           */
          rounding: {
              /**
               * Entries
               * @description Whether entry-level rounding in reports is applied
               */
              entries: boolean;
              /**
               * Report
               * @description Whether report-level rounding is applied
               */
              report: boolean;
          };
      };
      /**
       * Time Tracking
       * @description Workspace time tracking settings
       */
      time_tracking: {
          /**
           * Auto Stop Entry
           * @description Whether the time entry auto-stops at its expected end
           */
          auto_stop_entry: boolean;
          /**
           * Desktop Onboarding
           * @description Whether the desktop onboarding is enabled for time tracking
           */
          desktop_onboarding: boolean;
          /**
           * Rounding
           * @description Rounding preferences for time entries
           */
          rounding: {
              /**
               * Default
               * @description Whether default rounding is applied
               */
              default: boolean;
              /**
               * Specific
               * @description Whether specific rounding rules are applied
               */
              specific: boolean;
          };
          /**
           * Rounding Minutes
           * @description Rounding increment in minutes for time entries
           */
          rounding_minutes: number;
      };
      /**
       * Week Start
       * @description First day of the week in the workspace, e.g., 'monday'
       */
      week_start: string;
      /**
       * Workspace Id
       * @description The unique identifier of the workspace
       */
      workspace_id: number;
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
 * Type of TOGGL's TOGGL_GET_WORKSPACE_USERS tool input.
 */
type TOGGL_GET_WORKSPACE_USERS_INPUT = {
  /**
   * Workspace Id
   * @description The unique ID of the workspace to list users for
   */
  workspace_id?: number;
};

/**
 * Type of TOGGL's TOGGL_GET_WORKSPACE_USERS tool output.
 */
type TOGGL_GET_WORKSPACE_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Users
       * @description List of users belonging to the specified workspace
       */
      users: {
          /**
           * Active
           * @description Whether the user is active
           */
          active: boolean;
          /**
           * Admin
           * @description Whether the user has admin privileges in the workspace
           */
          admin: boolean;
          /**
           * Created At
           * @description ISO 8601 timestamp when the user was created
           */
          created_at: string;
          /**
           * Email
           * @description Email address of the user
           */
          email: string;
          /**
           * Id
           * @description Unique identifier of the user
           */
          id: number;
          /**
           * Name
           * @description Full name of the user
           */
          name: string;
          /**
           * Owner
           * @description Whether the user is the owner of the workspace
           */
          owner: boolean;
          /**
           * Timezone
           * @description The user's timezone in IANA format
           */
          timezone: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the user was last updated
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
 * Type of TOGGL's TOGGL_PATCH_STOP_TIME_ENTRY tool input.
 */
type TOGGL_PATCH_STOP_TIME_ENTRY_INPUT = {
  /**
   * Time Entry Id
   * @description ID of the time entry to stop
   */
  time_entry_id?: number;
  /**
   * Workspace Id
   * @description ID of the workspace containing the time entry
   */
  workspace_id?: number;
};

/**
 * Type of TOGGL's TOGGL_PATCH_STOP_TIME_ENTRY tool output.
 */
type TOGGL_PATCH_STOP_TIME_ENTRY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * At
       * @description Timestamp of the last update in ISO 8601 format
       */
      at: string;
      /**
       * Billable
       * @description Whether the entry is billable
       */
      billable: boolean;
      /**
       * Client Name
       * @description Name of the associated client
       * @default null
       */
      client_name: string | null;
      /**
       * Description
       * @description Description of the time entry
       * @default null
       */
      description: string | null;
      /**
       * Duration
       * @description Duration in seconds
       */
      duration: number;
      /**
       * Id
       * @description ID of the time entry
       */
      id: number;
      /**
       * Project Id
       * @description ID of the associated project
       * @default null
       */
      project_id: number | null;
      /**
       * Project Name
       * @description Name of the associated project
       * @default null
       */
      project_name: string | null;
      /**
       * Start
       * @description Start time in ISO 8601 format
       */
      start: string;
      /**
       * Stop
       * @description Stop time in ISO 8601 format
       */
      stop: string;
      /**
       * Tag Ids
       * @description List of tag IDs
       */
      tag_ids?: number[];
      /**
       * Tags
       * @description List of tag names
       */
      tags?: string[];
      /**
       * Task Id
       * @description ID of the associated task
       * @default null
       */
      task_id: number | null;
      /**
       * Task Name
       * @description Name of the associated task
       * @default null
       */
      task_name: string | null;
      /**
       * User Id
       * @description User ID who created the entry
       */
      user_id: number;
      /**
       * User Name
       * @description Name of the user who created the entry
       * @default null
       */
      user_name: string | null;
      /**
       * Workspace Id
       * @description Workspace ID of the time entry
       */
      workspace_id: number;
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
 * Type of TOGGL's TOGGL_PUT_UPDATE_TAG tool input.
 */
type TOGGL_PUT_UPDATE_TAG_INPUT = {
  /**
   * Name
   * @description New name for the tag
   */
  name?: string;
  /**
   * Tag Id
   * @description Numeric ID of the tag to update
   */
  tag_id?: number;
  /**
   * Workspace Id
   * @description Numeric ID of the workspace containing the tag
   */
  workspace_id?: number;
};

/**
 * Type of TOGGL's TOGGL_PUT_UPDATE_TAG tool output.
 */
type TOGGL_PUT_UPDATE_TAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * At
       * @description Timestamp when the tag was created or last modified
       */
      at: string;
      /**
       * Creator Id
       * @description ID of the user who created the tag
       */
      creator_id: number;
      /**
       * Deleted At
       * @description Timestamp when the tag was deleted, if applicable
       * @default null
       */
      deleted_at: string | null;
      /**
       * Id
       * @description Unique identifier of the tag
       */
      id: number;
      /**
       * Integration Ext Id
       * @description External ID of the linked entity in an external system, if any
       * @default null
       */
      integration_ext_id: string | null;
      /**
       * Integration Ext Type
       * @description External type of the linked entity in an external system, if any
       * @default null
       */
      integration_ext_type: string | null;
      /**
       * Integration Provider
       * @description Provider of the linked external system, if any
       * @default null
       */
      integration_provider: string | null;
      /**
       * Name
       * @description Name of the tag
       */
      name: string;
      /**
       * Permissions
       * @description Permissions associated with the tag
       */
      permissions: string[];
      /**
       * Workspace Id
       * @description ID of the workspace the tag belongs to
       */
      workspace_id: number;
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
 * Type of TOGGL's TOGGL_UPDATE_CLIENT tool input.
 */
type TOGGL_UPDATE_CLIENT_INPUT = {
  /**
   * Client Id
   * @description The unique ID of the client to update
   */
  client_id?: number;
  /**
   * Name
   * @description New name for the client
   * @default null
   */
  name: string | null;
  /**
   * Notes
   * @description Additional notes for the client
   * @default null
   */
  notes: string | null;
  /**
   * Wid
   * @description Workspace ID (must match workspace_id) if provided
   * @default null
   */
  wid: number | null;
  /**
   * Workspace Id
   * @description The unique ID of the workspace that owns the client
   */
  workspace_id?: number;
};

/**
 * Type of TOGGL's TOGGL_UPDATE_CLIENT tool output.
 */
type TOGGL_UPDATE_CLIENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Archived
       * @description Indicates if the client is archived
       */
      archived: boolean;
      /**
       * At
       * @description Timestamp when the client was last updated (ISO 8601)
       */
      at: string;
      /**
       * Creator Id
       * @description ID of the user who created the client
       */
      creator_id: number;
      /**
       * External Reference
       * @description External reference for the client
       * @default null
       */
      external_reference: string | null;
      /**
       * Id
       * @description Client ID
       */
      id: number;
      /**
       * Integration Ext Id
       * @description External ID of the linked entity in an external system
       * @default null
       */
      integration_ext_id: string | null;
      /**
       * Integration Ext Type
       * @description External type of the linked entity in an external system
       * @default null
       */
      integration_ext_type: string | null;
      /**
       * Integration Provider
       * @description Provider of the linked entity in an external system
       * @default null
       */
      integration_provider: string | null;
      /**
       * Name
       * @description Name of the client
       */
      name: string;
      /**
       * Notes
       * @description Additional notes for the client
       * @default null
       */
      notes: string | null;
      /**
       * Permissions
       * @description List of authorization permissions for the client
       */
      permissions: string[];
      /**
       * Wid
       * @description Workspace ID the client belongs to
       */
      wid: number;
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
 * Type map of all available tool input types for toolkit "TOGGL".
 */
export type TOGGL_TOOL_INPUTS = {
  CREATE_CLIENT: TOGGL_CREATE_CLIENT_INPUT
  CREATE_ORGANIZATION: TOGGL_CREATE_ORGANIZATION_INPUT
  CREATE_PROJECT: TOGGL_CREATE_PROJECT_INPUT
  CREATE_TAG: TOGGL_CREATE_TAG_INPUT
  CREATE_TIME_ENTRY: TOGGL_CREATE_TIME_ENTRY_INPUT
  DELETE_CLIENT: TOGGL_DELETE_CLIENT_INPUT
  DELETE_TAG: TOGGL_DELETE_TAG_INPUT
  GET_CLIENT_DETAILS: TOGGL_GET_CLIENT_DETAILS_INPUT
  GET_CURRENT_TIME_ENTRY: TOGGL_GET_CURRENT_TIME_ENTRY_INPUT
  GET_LIST_CLIENTS: TOGGL_GET_LIST_CLIENTS_INPUT
  GET_ORGANIZATION_DETAILS: TOGGL_GET_ORGANIZATION_DETAILS_INPUT
  GET_ORGANIZATION_GROUPS: TOGGL_GET_ORGANIZATION_GROUPS_INPUT
  GET_ORGANIZATION_USERS: TOGGL_GET_ORGANIZATION_USERS_INPUT
  GET_PROJECTS: TOGGL_GET_PROJECTS_INPUT
  GET_PROJECT_DETAILS: TOGGL_GET_PROJECT_DETAILS_INPUT
  GET_TAGS: TOGGL_GET_TAGS_INPUT
  GET_TASKS: TOGGL_GET_TASKS_INPUT
  GET_TIME_ENTRIES: TOGGL_GET_TIME_ENTRIES_INPUT
  GET_TIME_ENTRY: TOGGL_GET_TIME_ENTRY_INPUT
  GET_USER_CLIENTS: TOGGL_GET_USER_CLIENTS_INPUT
  GET_USER_PREFERENCES: TOGGL_GET_USER_PREFERENCES_INPUT
  GET_USER_PROJECTS: TOGGL_GET_USER_PROJECTS_INPUT
  GET_USER_TAGS: TOGGL_GET_USER_TAGS_INPUT
  GET_USER_TASKS: TOGGL_GET_USER_TASKS_INPUT
  GET_USER_WORKSPACES: TOGGL_GET_USER_WORKSPACES_INPUT
  GET_WORKSPACE_DETAILS: TOGGL_GET_WORKSPACE_DETAILS_INPUT
  GET_WORKSPACE_PREFERENCES: TOGGL_GET_WORKSPACE_PREFERENCES_INPUT
  GET_WORKSPACE_USERS: TOGGL_GET_WORKSPACE_USERS_INPUT
  PATCH_STOP_TIME_ENTRY: TOGGL_PATCH_STOP_TIME_ENTRY_INPUT
  PUT_UPDATE_TAG: TOGGL_PUT_UPDATE_TAG_INPUT
  UPDATE_CLIENT: TOGGL_UPDATE_CLIENT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TOGGL".
 */
export type TOGGL_TOOL_OUTPUTS = {
  CREATE_CLIENT: TOGGL_CREATE_CLIENT_OUTPUT
  CREATE_ORGANIZATION: TOGGL_CREATE_ORGANIZATION_OUTPUT
  CREATE_PROJECT: TOGGL_CREATE_PROJECT_OUTPUT
  CREATE_TAG: TOGGL_CREATE_TAG_OUTPUT
  CREATE_TIME_ENTRY: TOGGL_CREATE_TIME_ENTRY_OUTPUT
  DELETE_CLIENT: TOGGL_DELETE_CLIENT_OUTPUT
  DELETE_TAG: TOGGL_DELETE_TAG_OUTPUT
  GET_CLIENT_DETAILS: TOGGL_GET_CLIENT_DETAILS_OUTPUT
  GET_CURRENT_TIME_ENTRY: TOGGL_GET_CURRENT_TIME_ENTRY_OUTPUT
  GET_LIST_CLIENTS: TOGGL_GET_LIST_CLIENTS_OUTPUT
  GET_ORGANIZATION_DETAILS: TOGGL_GET_ORGANIZATION_DETAILS_OUTPUT
  GET_ORGANIZATION_GROUPS: TOGGL_GET_ORGANIZATION_GROUPS_OUTPUT
  GET_ORGANIZATION_USERS: TOGGL_GET_ORGANIZATION_USERS_OUTPUT
  GET_PROJECTS: TOGGL_GET_PROJECTS_OUTPUT
  GET_PROJECT_DETAILS: TOGGL_GET_PROJECT_DETAILS_OUTPUT
  GET_TAGS: TOGGL_GET_TAGS_OUTPUT
  GET_TASKS: TOGGL_GET_TASKS_OUTPUT
  GET_TIME_ENTRIES: TOGGL_GET_TIME_ENTRIES_OUTPUT
  GET_TIME_ENTRY: TOGGL_GET_TIME_ENTRY_OUTPUT
  GET_USER_CLIENTS: TOGGL_GET_USER_CLIENTS_OUTPUT
  GET_USER_PREFERENCES: TOGGL_GET_USER_PREFERENCES_OUTPUT
  GET_USER_PROJECTS: TOGGL_GET_USER_PROJECTS_OUTPUT
  GET_USER_TAGS: TOGGL_GET_USER_TAGS_OUTPUT
  GET_USER_TASKS: TOGGL_GET_USER_TASKS_OUTPUT
  GET_USER_WORKSPACES: TOGGL_GET_USER_WORKSPACES_OUTPUT
  GET_WORKSPACE_DETAILS: TOGGL_GET_WORKSPACE_DETAILS_OUTPUT
  GET_WORKSPACE_PREFERENCES: TOGGL_GET_WORKSPACE_PREFERENCES_OUTPUT
  GET_WORKSPACE_USERS: TOGGL_GET_WORKSPACE_USERS_OUTPUT
  PATCH_STOP_TIME_ENTRY: TOGGL_PATCH_STOP_TIME_ENTRY_OUTPUT
  PUT_UPDATE_TAG: TOGGL_PUT_UPDATE_TAG_OUTPUT
  UPDATE_CLIENT: TOGGL_UPDATE_CLIENT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TOGGL toolkit.
 */
export const TOGGL = {
  slug: "toggl",
  tools: {
    /**
     * Tool to create a new client in a workspace. use when you need to add a client to a workspace after workspace setup.
     */
    CREATE_CLIENT: "TOGGL_CREATE_CLIENT",
    /**
     * Tool to create a new organization with a default workspace. use when initializing a werklog organization and workspace in one step.
     */
    CREATE_ORGANIZATION: "TOGGL_CREATE_ORGANIZATION",
    /**
     * Tool to create a new project in a workspace. use after confirming workspace id and desired project parameters.
     */
    CREATE_PROJECT: "TOGGL_CREATE_PROJECT",
    /**
     * Tool to create a new tag in a workspace. use when you need to add a tag after confirming workspace id and desired tag name.
     */
    CREATE_TAG: "TOGGL_CREATE_TAG",
    /**
     * Tool to create a new time entry in the specified workspace. use when you have workspace id, start time, and client name ready.
     */
    CREATE_TIME_ENTRY: "TOGGL_CREATE_TIME_ENTRY",
    /**
     * Tool to delete a client in toggl. use when you have confirmed the workspace and client ids and want to remove a client permanently.
     */
    DELETE_CLIENT: "TOGGL_DELETE_CLIENT",
    /**
     * Tool to delete a tag from a workspace. use when you need to remove an unused tag after confirming its workspace and tag ids.
     */
    DELETE_TAG: "TOGGL_DELETE_TAG",
    /**
     * Tool to retrieve details of a specific client. use when you need to fetch client metadata by its id from toggl.
     */
    GET_CLIENT_DETAILS: "TOGGL_GET_CLIENT_DETAILS",
    /**
     * Tool to retrieve the current running time entry for the authenticated user. use after starting the timer to fetch the active time entry.
     */
    GET_CURRENT_TIME_ENTRY: "TOGGL_GET_CURRENT_TIME_ENTRY",
    /**
     * Tool to retrieve a list of clients from a toggl workspace. use when you need to list all clients with optional filters.
     */
    GET_LIST_CLIENTS: "TOGGL_GET_LIST_CLIENTS",
    /**
     * Tool to retrieve details of a specific organization by its id. use when you need organizational metadata after confirming the organization id.
     */
    GET_ORGANIZATION_DETAILS: "TOGGL_GET_ORGANIZATION_DETAILS",
    /**
     * Tool to retrieve list of groups in a specified organization. use after confirming organization id.
     */
    GET_ORGANIZATION_GROUPS: "TOGGL_GET_ORGANIZATION_GROUPS",
    /**
     * Tool to retrieve all users in a toggl organization by organization id. use after confirming the target organization id.
     */
    GET_ORGANIZATION_USERS: "TOGGL_GET_ORGANIZATION_USERS",
    /**
     * Tool to retrieve a list of projects from a toggl workspace. use after confirming workspace id. returns filtered and paginated projects with optional client details.
     */
    GET_PROJECTS: "TOGGL_GET_PROJECTS",
    /**
     * Tool to retrieve details of a specific project. use after confirming the workspace id and project id.
     */
    GET_PROJECT_DETAILS: "TOGGL_GET_PROJECT_DETAILS",
    /**
     * Tool to retrieve all tags in a toggl workspace. use after confirming the workspace id.
     */
    GET_TAGS: "TOGGL_GET_TAGS",
    /**
     * Tool to list tasks in a workspace or within a specific project.
     */
    GET_TASKS: "TOGGL_GET_TASKS",
    /**
     * Tool to list the latest time entries for the authenticated user. use when you need to fetch or filter your logged time entries by start date or end date.
     */
    GET_TIME_ENTRIES: "TOGGL_GET_TIME_ENTRIES",
    /**
     * Tool to retrieve a specific time entry by its id. use when you have the entry id and need its full details.
     */
    GET_TIME_ENTRY: "TOGGL_GET_TIME_ENTRY",
    /**
     * Tool to fetch the list of clients accessible by the authenticated user. use when you need to see all clients available to the current toggl user.
     */
    GET_USER_CLIENTS: "TOGGL_GET_USER_CLIENTS",
    /**
     * Tool to retrieve current user's preferences and alpha features. use when you need to access user settings for customized experiences.
     */
    GET_USER_PREFERENCES: "TOGGL_GET_USER_PREFERENCES",
    /**
     * Tool to retrieve all projects for the authenticated user. use after authenticating to list available projects.
     */
    GET_USER_PROJECTS: "TOGGL_GET_USER_PROJECTS",
    /**
     * Tool to retrieve tags associated with the current user. use when you need to list all tags visible to your account.
     */
    GET_USER_TAGS: "TOGGL_GET_USER_TAGS",
    /**
     * Tool to retrieve tasks from projects in which the authenticated user is participating. use after authenticating to list all tasks across workspaces.
     */
    GET_USER_TASKS: "TOGGL_GET_USER_TASKS",
    /**
     * Tool to retrieve all workspaces the authenticated user belongs to. use when you need to list accessible workspaces before performing workspace-specific operations.
     */
    GET_USER_WORKSPACES: "TOGGL_GET_USER_WORKSPACES",
    /**
     * Tool to retrieve details of a specific workspace. use when you need to fetch workspace configuration and settings by its id.
     */
    GET_WORKSPACE_DETAILS: "TOGGL_GET_WORKSPACE_DETAILS",
    /**
     * Tool to retrieve workspace preferences. use after confirming workspace id to inspect settings like week start, project creation rules, and time tracking options.
     */
    GET_WORKSPACE_PREFERENCES: "TOGGL_GET_WORKSPACE_PREFERENCES",
    /**
     * Tool to retrieve all users in a toggl workspace by workspace id. use after confirming the target workspace id.
     */
    GET_WORKSPACE_USERS: "TOGGL_GET_WORKSPACE_USERS",
    /**
     * Tool to stop a running time entry in a workspace. use when a time entry needs to be ended.
     */
    PATCH_STOP_TIME_ENTRY: "TOGGL_PATCH_STOP_TIME_ENTRY",
    /**
     * Tool to update an existing tag in a specified workspace. use after confirming the workspace id and tag id when renaming a tag. example: rename tag 'urgent' to 'high priority'.
     */
    PUT_UPDATE_TAG: "TOGGL_PUT_UPDATE_TAG",
    /**
     * Tool to update details of a specific client. use when you need to modify a client's name, notes, or other details after confirming workspace and client ids.
     */
    UPDATE_CLIENT: "TOGGL_UPDATE_CLIENT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TOGGL".
 */
export type TOGGL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TOGGL".
 */
export type TOGGL_TRIGGER_EVENTS = {}
