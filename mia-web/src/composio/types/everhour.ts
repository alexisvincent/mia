// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of EVERHOUR's EVERHOUR_CLIENT_CREATE tool input.
 */
type EVERHOUR_CLIENT_CREATE_INPUT = {
  /**
   * Business Details
   * @description Additional business details for the client
   * @default null
   */
  business_details: string | null;
  /**
   * Name
   * @description The client name
   */
  name?: string;
  /**
   * Projects
   * @description List of project IDs to associate with the client
   * @default null
   */
  projects: string[] | null;
};

/**
 * Type of EVERHOUR's EVERHOUR_CLIENT_CREATE tool output.
 */
type EVERHOUR_CLIENT_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp in ISO 8601 format
       */
      created_at: string;
      /**
       * Email
       * @description Contact email of the client
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description Unique identifier for the client
       */
      id: string;
      /**
       * Name
       * @description The client name
       */
      name: string;
      /**
       * Note
       * @description Notes about the client
       * @default null
       */
      note: string | null;
      /**
       * Updated At
       * @description Last update timestamp in ISO 8601 format
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
 * Type of EVERHOUR's EVERHOUR_CLIENT_DELETE tool input.
 */
type EVERHOUR_CLIENT_DELETE_INPUT = {
  /**
   * Client Id
   * @description ID of the client to delete. Must be a valid Everhour client identifier.
   */
  client_id?: string;
};

/**
 * Type of EVERHOUR's EVERHOUR_CLIENT_DELETE tool output.
 */
type EVERHOUR_CLIENT_DELETE_OUTPUT = {
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
 * Type of EVERHOUR's EVERHOUR_CLIENT_LIST tool input.
 */
type EVERHOUR_CLIENT_LIST_INPUT = object;

/**
 * Type of EVERHOUR's EVERHOUR_CLIENT_LIST tool output.
 */
type EVERHOUR_CLIENT_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Clients
       * @description List of clients retrieved from the workspace
       */
      clients: {
          /**
           * Archived
           * @description Whether the client is archived
           */
          archived: boolean;
          /**
           * Created At
           * @description ISO 8601 timestamp when this client was created
           */
          created_at: string;
          /**
           * Id
           * @description The unique ID of the client
           */
          id: number;
          /**
           * Name
           * @description Name of the client
           */
          name: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when this client was last updated
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
 * Type of EVERHOUR's EVERHOUR_EXPENSES_LIST tool input.
 */
type EVERHOUR_EXPENSES_LIST_INPUT = object;

/**
 * Type of EVERHOUR's EVERHOUR_EXPENSES_LIST tool output.
 */
type EVERHOUR_EXPENSES_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expenses
       * @description List of expenses retrieved from the workspace
       */
      expenses: {
          /**
           * Category Id
           * @description Category ID for the expense
           */
          category_id: string;
          /**
           * Created At
           * @description Creation timestamp in ISO 8601 format
           */
          created_at: string;
          /**
           * Date
           * @description Date of the expense in YYYY-MM-DD format
           */
          date: string;
          /**
           * Id
           * @description Unique ID of the expense record
           */
          id: string;
          /**
           * Note
           * @description Description or note for the expense
           */
          note: string;
          /**
           * Project Id
           * @description Project ID associated with the expense
           */
          project_id: string;
          /**
           * Sum
           * @description Amount of the expense
           */
          sum: number;
          /**
           * Updated At
           * @description Last update timestamp in ISO 8601 format
           */
          updated_at: string;
          /**
           * User Id
           * @description User ID associated with the expense
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
 * Type of EVERHOUR's EVERHOUR_GET_CLIENT tool input.
 */
type EVERHOUR_GET_CLIENT_INPUT = {
  /**
   * Client Id
   * @description Unique identifier of the client
   */
  client_id?: string;
};

/**
 * Type of EVERHOUR's EVERHOUR_GET_CLIENT tool output.
 */
type EVERHOUR_GET_CLIENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Color
       * @description Client's color code (hex)
       */
      color: string;
      /**
       * Created At
       * Format: date-time
       * @description Timestamp when the client was created (ISO 8601)
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the client
       */
      id: string;
      /**
       * Is Active
       * @description Whether the client is active
       */
      is_active: boolean;
      /**
       * Name
       * @description Client's name
       */
      name: string;
      /**
       * Updated At
       * Format: date-time
       * @description Timestamp when the client was last updated (ISO 8601)
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
 * Type of EVERHOUR's EVERHOUR_GET_PROJECT tool input.
 */
type EVERHOUR_GET_PROJECT_INPUT = {
  /**
   * Project Id
   * @description ID of the project to retrieve
   */
  projectId?: string;
};

/**
 * Type of EVERHOUR's EVERHOUR_GET_PROJECT tool output.
 */
type EVERHOUR_GET_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Billable
       * @description Whether the project is billable (duplicate of isBillable)
       */
      billable: boolean;
      /**
       * Billing Type
       * @description Billing type for the project
       * @default null
       */
      billingType: string | null;
      /**
       * Budget
       * @description Budget information for the project, if any
       * @default null
       */
      budget: {
          /**
           * Amount
           * @description Allocated budget amount
           */
          amount: number;
          /**
           * Spent
           * @description Amount spent so far
           */
          spent: number;
          /**
           * Type
           * @description Type of budget
           */
          type: string;
      } | null;
      /**
       * Client Id
       * @description Client ID associated with the project, if any
       * @default null
       */
      clientId: string | null;
      /**
       * Color
       * @description Project color code
       */
      color: string;
      /**
       * Created At
       * @description Creation timestamp in ISO 8601 format
       */
      createdAt: string;
      /**
       * Id
       * @description Project ID
       */
      id: string;
      /**
       * Is Active
       * @description Whether the project is active
       */
      isActive: boolean;
      /**
       * Is Billable
       * @description Whether the project is billable
       */
      isBillable: boolean;
      /**
       * Members
       * @description List of project members, if any
       * @default null
       */
      members: {
          /**
           * Id
           * @description ID of the user
           */
          id: string;
          /**
           * Name
           * @description Name of the user
           */
          name: string;
          /**
           * Role
           * @description Role of the user in the project
           */
          role: string;
      }[] | null;
      /**
       * Name
       * @description Project name
       */
      name: string;
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
 * Type of EVERHOUR's EVERHOUR_GET_SECTION tool input.
 */
type EVERHOUR_GET_SECTION_INPUT = {
  /**
   * Section Id
   * @description ID of the section to retrieve
   */
  sectionId?: string;
};

/**
 * Type of EVERHOUR's EVERHOUR_GET_SECTION tool output.
 */
type EVERHOUR_GET_SECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the section was created
       */
      createdAt: string;
      /**
       * Id
       * @description Unique identifier of the section
       */
      id: string;
      /**
       * Name
       * @description Name of the section
       */
      name: string;
      /**
       * Project Id
       * @description ID of the project this section belongs to
       */
      projectId: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the section was last updated
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
 * Type of EVERHOUR's EVERHOUR_GET_USER_PROFILE tool input.
 */
type EVERHOUR_GET_USER_PROFILE_INPUT = object;

/**
 * Type of EVERHOUR's EVERHOUR_GET_USER_PROFILE tool output.
 */
type EVERHOUR_GET_USER_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Whether the user account is active
       */
      active: boolean;
      /**
       * Avatar Url
       * @description URL of the user's avatar image
       * @default null
       */
      avatarUrl: string | null;
      /**
       * Created At
       * @description Timestamp when the user profile was created (ISO 8601)
       */
      createdAt: string;
      /**
       * Email
       * @description User's email address
       */
      email: string;
      /**
       * First Name
       * @description User's first name
       */
      firstName: string;
      /**
       * Id
       * @description Unique identifier of the user
       */
      id: string;
      /**
       * Last Name
       * @description User's last name
       */
      lastName: string;
      /**
       * Role
       * @description User's role in the organization
       */
      role: string;
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
 * Type of EVERHOUR's EVERHOUR_LIST_EXPENSE_CATEGORIES tool input.
 */
type EVERHOUR_LIST_EXPENSE_CATEGORIES_INPUT = object;

/**
 * Type of EVERHOUR's EVERHOUR_LIST_EXPENSE_CATEGORIES tool output.
 */
type EVERHOUR_LIST_EXPENSE_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the expense category
       */
      id: number;
      /**
       * Name
       * @description Name of the expense category
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
 * Type of EVERHOUR's EVERHOUR_LIST_HOOKS tool input.
 */
type EVERHOUR_LIST_HOOKS_INPUT = object;

/**
 * Type of EVERHOUR's EVERHOUR_LIST_HOOKS tool output.
 */
type EVERHOUR_LIST_HOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the hook was created
       */
      createdAt: string;
      /**
       * Event
       * @description Event triggering the hook, e.g., 'time_entry.created'
       */
      event: string;
      /**
       * Id
       * @description Identifier of the hook
       */
      id: string;
      /**
       * Target
       * @description Target URL of the hook
       */
      target: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the hook was last updated
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of EVERHOUR's EVERHOUR_LIST_INVOICES tool input.
 */
type EVERHOUR_LIST_INVOICES_INPUT = object;

/**
 * Type of EVERHOUR's EVERHOUR_LIST_INVOICES tool output.
 */
type EVERHOUR_LIST_INVOICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Amount
       * @description Total amount for this invoice
       */
      amount: number;
      /**
       * Client Id
       * @description ID of the client for this invoice
       */
      clientId: number;
      /**
       * Created At
       * @description ISO 8601 timestamp when the invoice was created
       */
      createdAt: string;
      /**
       * Currency
       * @description Currency code for the invoice, e.g., 'USD'
       */
      currency: string;
      /**
       * Due Date
       * @description ISO 8601 date when the invoice is due
       */
      dueDate: string;
      /**
       * Id
       * @description Unique identifier of the invoice
       */
      id: number;
      /**
       * Issued Date
       * @description ISO 8601 date when the invoice was issued
       */
      issuedDate: string;
      /**
       * Number
       * @description Invoice number
       */
      number: string;
      /**
       * Pdf Url
       * @description URL to download the PDF of the invoice
       */
      pdfUrl: string;
      /**
       * Project Id
       * @description ID of the project for this invoice
       */
      projectId: number;
      /**
       * Status
       * @description Status of the invoice, e.g., 'paid', 'pending'
       */
      status: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the invoice was last updated
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of EVERHOUR's EVERHOUR_LIST_PROJECTS tool input.
 */
type EVERHOUR_LIST_PROJECTS_INPUT = object;

/**
 * Type of EVERHOUR's EVERHOUR_LIST_PROJECTS tool output.
 */
type EVERHOUR_LIST_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Projects
       * @description List of Everhour projects
       */
      projects: {
          /**
           * Billable
           * @description Indicates if the project is billable
           */
          billable: boolean;
          /**
           * Budget
           * @description Total budget for the project, or null if not set
           * @default null
           */
          budget: number | null;
          /**
           * Budget Spent
           * @description Amount of budget spent so far, or null if not set
           * @default null
           */
          budgetSpent: number | null;
          /**
           * Budget Type
           * @description Type of the project budget (e.g., 'project', 'task'), or null if not set
           * @default null
           */
          budgetType: string | null;
          /**
           * Client
           * @description Client name associated with the project, or null if not set
           * @default null
           */
          client: string | null;
          /**
           * Color
           * @description Hex color code for the project label
           */
          color: string;
          /**
           * Completed
           * @description Indicates if the project has been marked as completed
           */
          completed: boolean;
          /**
           * Created At
           * @description ISO 8601 timestamp when the project was created
           */
          createdAt: string;
          /**
           * Id
           * @description Unique identifier of the project
           */
          id: number;
          /**
           * Integration Id
           * @description Identifier of the connected integration
           */
          integrationId: number;
          /**
           * Name
           * @description Name of the project
           */
          name: string;
          /**
           * Time Allocated
           * @description Total time allocated in hours, or null if not set
           * @default null
           */
          timeAllocated: number | null;
          /**
           * Time Spent
           * @description Total time spent in hours, or null if not set
           * @default null
           */
          timeSpent: number | null;
          /**
           * Workspace Id
           * @description Workspace identifier this project belongs to
           */
          workspaceId: number;
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
 * Type of EVERHOUR's EVERHOUR_LIST_SECTIONS tool input.
 */
type EVERHOUR_LIST_SECTIONS_INPUT = {
  /**
   * Project Id
   * @description ID of the project to list sections for
   */
  projectId?: string;
};

/**
 * Type of EVERHOUR's EVERHOUR_LIST_SECTIONS tool output.
 */
type EVERHOUR_LIST_SECTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Archived
       * @description Whether the section is archived
       */
      archived: boolean;
      /**
       * Created At
       * @description ISO 8601 timestamp when the section was created
       */
      createdAt: string;
      /**
       * Id
       * @description Unique identifier of the section
       */
      id: string;
      /**
       * Name
       * @description Name of the section
       */
      name: string;
      /**
       * Project Id
       * @description ID of the project this section belongs to
       */
      projectId: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the section was last updated
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of EVERHOUR's EVERHOUR_LIST_TAGS tool input.
 */
type EVERHOUR_LIST_TAGS_INPUT = object;

/**
 * Type of EVERHOUR's EVERHOUR_LIST_TAGS tool output.
 */
type EVERHOUR_LIST_TAGS_OUTPUT = {
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
       * Color
       * @description Color code of the tag, e.g., '#ff0000'
       */
      color: string;
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
      workspaceId: number;
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
 * Type of EVERHOUR's EVERHOUR_LIST_TEAMS tool input.
 */
type EVERHOUR_LIST_TEAMS_INPUT = object;

/**
 * Type of EVERHOUR's EVERHOUR_LIST_TEAMS tool output.
 */
type EVERHOUR_LIST_TEAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the team.
       */
      id: string;
      /**
       * Name
       * @description Name of the team.
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
 * Type of EVERHOUR's EVERHOUR_LIST_TEAM_MEMBERS tool input.
 */
type EVERHOUR_LIST_TEAM_MEMBERS_INPUT = object;

/**
 * Type of EVERHOUR's EVERHOUR_LIST_TEAM_MEMBERS tool output.
 */
type EVERHOUR_LIST_TEAM_MEMBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Whether user is active
       */
      active: boolean;
      /**
       * Avatar Url
       * @description URL to user avatar
       */
      avatar_url: string;
      /**
       * Email
       * @description User email address
       */
      email: string;
      /**
       * External Id
       * @description External system ID if synced, null if not set
       * @default null
       */
      external_id: string | null;
      /**
       * Id
       * @description Unique member ID
       */
      id: number;
      /**
       * Invited
       * @description Whether user has accepted the invitation
       */
      invited: boolean;
      /**
       * Is Admin
       * @description Whether user is team admin
       */
      is_admin: boolean;
      /**
       * Name
       * @description Full name of the user
       */
      name: string;
      /**
       * Role
       * @description User's role within the team
       * @enum {string}
       */
      role: "MEMBER" | "ADMIN" | "OWNER";
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
 * Type of EVERHOUR's EVERHOUR_PROJECT_CREATE tool input.
 */
type EVERHOUR_PROJECT_CREATE_INPUT = {
  /**
   * Archived
   * @description Indicate if the project is archived
   * @default null
   */
  archived: boolean | null;
  /**
   * Billable
   * @description Specify whether the project is billable
   * @default null
   */
  billable: boolean | null;
  /**
   * Budget
   * @description Budget of the project, must be non-negative
   * @default null
   */
  budget: number | null;
  /**
   * Client
   * @description ID of the client associated with the project
   * @default null
   */
  client: string | null;
  /**
   * Color
   * @description Color code of the project in hex format
   * @default null
   */
  color: string | null;
  /**
   * Internal
   * @description Specify whether the project is internal
   * @default null
   */
  internal: boolean | null;
  /**
   * Name
   * @description The name of the project
   */
  name?: string;
};

/**
 * Type of EVERHOUR's EVERHOUR_PROJECT_CREATE tool output.
 */
type EVERHOUR_PROJECT_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Archived
       * @description Archive status of the project
       */
      archived: boolean;
      /**
       * Billable
       * @description Whether the project is billable
       */
      billable: boolean;
      /**
       * Budget
       * @description Project budget
       * @default null
       */
      budget: number | null;
      /**
       * Client
       * @description Associated client data
       */
      client: {
          /**
           * Id
           * @description Unique identifier of the client
           */
          id: string;
          /**
           * Name
           * @description Name of the client
           */
          name: string;
      };
      /**
       * Color
       * @description Project color code
       * @default null
       */
      color: string | null;
      /**
       * Created At
       * @description Project creation timestamp in ISO8601 format
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier for the project
       */
      id: string;
      /**
       * Internal
       * @description Whether the project is internal
       */
      internal: boolean;
      /**
       * Name
       * @description Name of the project
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
 * Type of EVERHOUR's EVERHOUR_PROJECT_DELETE tool input.
 */
type EVERHOUR_PROJECT_DELETE_INPUT = {
  /**
   * Project Id
   * @description Unique identifier of the project to delete. Must be a valid Everhour project identifier.
   */
  project_id?: string;
};

/**
 * Type of EVERHOUR's EVERHOUR_PROJECT_DELETE tool output.
 */
type EVERHOUR_PROJECT_DELETE_OUTPUT = {
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
 * Type of EVERHOUR's EVERHOUR_SECTION_CREATE tool input.
 */
type EVERHOUR_SECTION_CREATE_INPUT = {
  /**
   * Name
   * @description Name of the section to be created
   */
  name?: string;
  /**
   * Project Id
   * @description ID of the project to add the section to
   */
  project_id?: string;
};

/**
 * Type of EVERHOUR's EVERHOUR_SECTION_CREATE tool output.
 */
type EVERHOUR_SECTION_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the created section
       */
      id: string;
      /**
       * Name
       * @description Name of the created section
       */
      name: string;
      /**
       * Project Id
       * @description ID of the project this section belongs to
       */
      projectId: string;
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
 * Type of EVERHOUR's EVERHOUR_SECTION_DELETE tool input.
 */
type EVERHOUR_SECTION_DELETE_INPUT = {
  /**
   * Section Id
   * @description ID of the section to delete. Must be a valid Everhour section identifier.
   */
  section_id?: string;
};

/**
 * Type of EVERHOUR's EVERHOUR_SECTION_DELETE tool output.
 */
type EVERHOUR_SECTION_DELETE_OUTPUT = {
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
 * Type of EVERHOUR's EVERHOUR_TASK_CREATE tool input.
 */
type EVERHOUR_TASK_CREATE_INPUT = {
  /**
   * Assignee
   * @description User ID to assign the task to
   * @default null
   */
  assignee: string | null;
  /**
   * Estimate
   * @description Time estimate for the task in 'H:MM' format (e.g., '2:00' for 2 hours)
   * @default null
   */
  estimate: string | null;
  /**
   * Name
   * @description Name of the task
   */
  name?: string;
  /**
   * Parent
   * @description Parent task ID if this is a sub-task
   * @default null
   */
  parent: string | null;
  /**
   * Positions
   * @description Position/order data within the project structure. Use to set the task's ordering; see API docs for key structure.
   * @default null
   */
  positions: {
      [key: string]: number;
  } | null;
  /**
   * Project Id
   * @description ID of the project to attach the task to
   */
  projectId?: string;
  /**
   * Section
   * @description Section ID within the project, if organizing by sections
   * @default null
   */
  section: string | null;
  /**
   * Tags
   * @description List of tag IDs to associate with the task
   * @default null
   */
  tags: string[] | null;
};

/**
 * Type of EVERHOUR's EVERHOUR_TASK_CREATE tool output.
 */
type EVERHOUR_TASK_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assignee
       * @description Assigned user ID, if set
       * @default null
       */
      assignee: string | null;
      /**
       * Created At
       * @description Creation timestamp
       */
      createdAt: string;
      /**
       * Estimate
       * @description Time estimate, if set
       * @default null
       */
      estimate: string | null;
      /**
       * Id
       * @description Unique ID of the created task
       */
      id: string;
      /**
       * Name
       * @description Task name
       */
      name: string;
      /**
       * Parent
       * @description Parent task ID, if any
       * @default null
       */
      parent: string | null;
      /**
       * Positions
       * @description Position/order data
       */
      positions: {
          [key: string]: number;
      };
      /**
       * Project Id
       * @description Associated project ID
       */
      projectId: string;
      /**
       * Section
       * @description Section ID, if any
       * @default null
       */
      section: string | null;
      /**
       * Tags
       * @description List of applied tag IDs
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
 * Type of EVERHOUR's EVERHOUR_TIMER_START tool input.
 */
type EVERHOUR_TIMER_START_INPUT = {
  /**
   * Task
   * @description ID of the task to start a timer on
   */
  task?: string;
};

/**
 * Type of EVERHOUR's EVERHOUR_TIMER_START tool output.
 */
type EVERHOUR_TIMER_START_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the timer
       */
      id: string;
      /**
       * Running
       * @description Indicates if the timer is currently running
       */
      running: boolean;
      /**
       * Started At
       * @description ISO8601 timestamp when the timer was started
       */
      startedAt: string;
      /**
       * Task
       * @description ID of the task associated with the timer
       */
      task: string;
      /**
       * Time
       * @description Elapsed time in seconds since the timer started
       */
      time: number;
      /**
       * User
       * @description ID of the user for whom the timer was started
       */
      user: string;
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
 * Type of EVERHOUR's EVERHOUR_UPDATE_CLIENT tool input.
 */
type EVERHOUR_UPDATE_CLIENT_INPUT = {
  /**
   * Archived
   * @description Set to true to archive the client or false to unarchive
   * @default null
   */
  archived: boolean | null;
  /**
   * Hourly Rate
   * @description Default hourly rate for this client, must be non-negative
   * @default null
   */
  hourly_rate: number | null;
  /**
   * Id
   * @description ID of the client to update
   */
  id?: string;
  /**
   * Name
   * @description New client name
   * @default null
   */
  name: string | null;
};

/**
 * Type of EVERHOUR's EVERHOUR_UPDATE_CLIENT tool output.
 */
type EVERHOUR_UPDATE_CLIENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Archived
       * @description Whether the client is archived
       */
      archived: boolean;
      /**
       * Created At
       * @description ISO timestamp when client was created
       */
      created_at: string;
      /**
       * Hourly Rate
       * @description Client's default hourly rate or null if not set
       * @default null
       */
      hourly_rate: number | null;
      /**
       * Id
       * @description Unique identifier of the client
       */
      id: string;
      /**
       * Name
       * @description Client name
       */
      name: string;
      /**
       * Updated At
       * @description ISO timestamp when client was last updated
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
 * Type of EVERHOUR's EVERHOUR_UPDATE_PROJECT tool input.
 */
type EVERHOUR_UPDATE_PROJECT_INPUT = {
  /**
   * Billable
   * @description Whether the project is billable by default
   * @default null
   */
  billable: boolean | null;
  /**
   * Billing Method
   * @description Method of billing for the project
   * @default null
   * @enum {string|null}
   */
  billingMethod: "none" | "time" | "fixedFee" | null;
  /**
   * Budget
   * @description Total budget for the project (must be non-negative, in hours or amount depending on budgetType)
   * @default null
   */
  budget: number | null;
  /**
   * Budget Include Expenses
   * @description Whether to include expenses in the budget
   * @default null
   */
  budgetIncludeExpenses: boolean | null;
  /**
   * Budget Reset
   * @description Budget reset period
   * @default null
   * @enum {string|null}
   */
  budgetReset: "never" | "weekly" | "monthly" | null;
  /**
   * Budget Type
   * @description Type of budget
   * @default null
   * @enum {string|null}
   */
  budgetType: "hours" | "amount" | null;
  /**
   * Hourly Rate
   * @description Hourly rate (required if billingMethod is 'time'; must be non-negative)
   * @default null
   */
  hourlyRate: number | null;
  /**
   * Name
   * @description New name of the project
   * @default null
   */
  name: string | null;
  /**
   * Note
   * @description Additional notes about the project
   * @default null
   */
  note: string | null;
  /**
   * Project Id
   * @description The ID of the project to update
   */
  project_id?: string;
};

/**
 * Type of EVERHOUR's EVERHOUR_UPDATE_PROJECT tool output.
 */
type EVERHOUR_UPDATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Billable
       * @description Indicates if the project is billable
       */
      billable: boolean;
      /**
       * Billing Method
       * @description Project's billing method, or null if not set
       * @default null
       */
      billingMethod: string | null;
      /**
       * Budget
       * @description Total budget for the project, or null if not set
       * @default null
       */
      budget: number | null;
      /**
       * Budget Include Expenses
       * @description Whether expenses are included in the budget
       * @default null
       */
      budgetIncludeExpenses: boolean | null;
      /**
       * Budget Reset
       * @description Budget reset period, or null if not set
       * @default null
       */
      budgetReset: string | null;
      /**
       * Budget Spent
       * @description Amount of budget spent so far, or null if not set
       * @default null
       */
      budgetSpent: number | null;
      /**
       * Budget Type
       * @description Type of the project budget, or null if not set
       * @default null
       */
      budgetType: string | null;
      /**
       * Client
       * @description Client name associated with the project, or null if not set
       * @default null
       */
      client: string | null;
      /**
       * Color
       * @description Hex color code for the project label
       * @default null
       */
      color: string | null;
      /**
       * Completed
       * @description Indicates if the project is completed
       */
      completed: boolean;
      /**
       * Created At
       * @description ISO 8601 timestamp when the project was created
       * @default null
       */
      createdAt: string | null;
      /**
       * Hourly Rate
       * @description Project's hourly rate, or null if not set
       * @default null
       */
      hourlyRate: number | null;
      /**
       * Id
       * @description Unique identifier of the project
       */
      id: number;
      /**
       * Integration Id
       * @description Identifier of the connected integration
       * @default null
       */
      integrationId: number | null;
      /**
       * Name
       * @description Name of the project
       */
      name: string;
      /**
       * Note
       * @description Additional notes about the project
       * @default null
       */
      note: string | null;
      /**
       * Time Allocated
       * @description Total time allocated in hours, or null if not set
       * @default null
       */
      timeAllocated: number | null;
      /**
       * Time Spent
       * @description Total time spent in hours, or null if not set
       * @default null
       */
      timeSpent: number | null;
      /**
       * Workspace Id
       * @description Workspace ID this project belongs to
       * @default null
       */
      workspaceId: number | null;
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
 * Type map of all available tool input types for toolkit "EVERHOUR".
 */
export type EVERHOUR_TOOL_INPUTS = {
  CLIENT_CREATE: EVERHOUR_CLIENT_CREATE_INPUT
  CLIENT_DELETE: EVERHOUR_CLIENT_DELETE_INPUT
  CLIENT_LIST: EVERHOUR_CLIENT_LIST_INPUT
  EXPENSES_LIST: EVERHOUR_EXPENSES_LIST_INPUT
  GET_CLIENT: EVERHOUR_GET_CLIENT_INPUT
  GET_PROJECT: EVERHOUR_GET_PROJECT_INPUT
  GET_SECTION: EVERHOUR_GET_SECTION_INPUT
  GET_USER_PROFILE: EVERHOUR_GET_USER_PROFILE_INPUT
  LIST_EXPENSE_CATEGORIES: EVERHOUR_LIST_EXPENSE_CATEGORIES_INPUT
  LIST_HOOKS: EVERHOUR_LIST_HOOKS_INPUT
  LIST_INVOICES: EVERHOUR_LIST_INVOICES_INPUT
  LIST_PROJECTS: EVERHOUR_LIST_PROJECTS_INPUT
  LIST_SECTIONS: EVERHOUR_LIST_SECTIONS_INPUT
  LIST_TAGS: EVERHOUR_LIST_TAGS_INPUT
  LIST_TEAMS: EVERHOUR_LIST_TEAMS_INPUT
  LIST_TEAM_MEMBERS: EVERHOUR_LIST_TEAM_MEMBERS_INPUT
  PROJECT_CREATE: EVERHOUR_PROJECT_CREATE_INPUT
  PROJECT_DELETE: EVERHOUR_PROJECT_DELETE_INPUT
  SECTION_CREATE: EVERHOUR_SECTION_CREATE_INPUT
  SECTION_DELETE: EVERHOUR_SECTION_DELETE_INPUT
  TASK_CREATE: EVERHOUR_TASK_CREATE_INPUT
  TIMER_START: EVERHOUR_TIMER_START_INPUT
  UPDATE_CLIENT: EVERHOUR_UPDATE_CLIENT_INPUT
  UPDATE_PROJECT: EVERHOUR_UPDATE_PROJECT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "EVERHOUR".
 */
export type EVERHOUR_TOOL_OUTPUTS = {
  CLIENT_CREATE: EVERHOUR_CLIENT_CREATE_OUTPUT
  CLIENT_DELETE: EVERHOUR_CLIENT_DELETE_OUTPUT
  CLIENT_LIST: EVERHOUR_CLIENT_LIST_OUTPUT
  EXPENSES_LIST: EVERHOUR_EXPENSES_LIST_OUTPUT
  GET_CLIENT: EVERHOUR_GET_CLIENT_OUTPUT
  GET_PROJECT: EVERHOUR_GET_PROJECT_OUTPUT
  GET_SECTION: EVERHOUR_GET_SECTION_OUTPUT
  GET_USER_PROFILE: EVERHOUR_GET_USER_PROFILE_OUTPUT
  LIST_EXPENSE_CATEGORIES: EVERHOUR_LIST_EXPENSE_CATEGORIES_OUTPUT
  LIST_HOOKS: EVERHOUR_LIST_HOOKS_OUTPUT
  LIST_INVOICES: EVERHOUR_LIST_INVOICES_OUTPUT
  LIST_PROJECTS: EVERHOUR_LIST_PROJECTS_OUTPUT
  LIST_SECTIONS: EVERHOUR_LIST_SECTIONS_OUTPUT
  LIST_TAGS: EVERHOUR_LIST_TAGS_OUTPUT
  LIST_TEAMS: EVERHOUR_LIST_TEAMS_OUTPUT
  LIST_TEAM_MEMBERS: EVERHOUR_LIST_TEAM_MEMBERS_OUTPUT
  PROJECT_CREATE: EVERHOUR_PROJECT_CREATE_OUTPUT
  PROJECT_DELETE: EVERHOUR_PROJECT_DELETE_OUTPUT
  SECTION_CREATE: EVERHOUR_SECTION_CREATE_OUTPUT
  SECTION_DELETE: EVERHOUR_SECTION_DELETE_OUTPUT
  TASK_CREATE: EVERHOUR_TASK_CREATE_OUTPUT
  TIMER_START: EVERHOUR_TIMER_START_OUTPUT
  UPDATE_CLIENT: EVERHOUR_UPDATE_CLIENT_OUTPUT
  UPDATE_PROJECT: EVERHOUR_UPDATE_PROJECT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's EVERHOUR toolkit.
 */
export const EVERHOUR = {
  slug: "everhour",
  tools: {
    /**
     * Tool to create a new client in everhour. use when you need to add a client before tracking time or assigning it to projects.
     */
    CLIENT_CREATE: "EVERHOUR_CLIENT_CREATE",
    /**
     * Tool to delete a client. use when you need to permanently remove a client from everhour after confirming the client id.
     */
    CLIENT_DELETE: "EVERHOUR_CLIENT_DELETE",
    /**
     * Tool to list all clients. use when you need an overview of workspace clients.
     */
    CLIENT_LIST: "EVERHOUR_CLIENT_LIST",
    /**
     * Tool to retrieve all expenses. use when you need to review expense records across your workspace.
     */
    EXPENSES_LIST: "EVERHOUR_EXPENSES_LIST",
    /**
     * Tool to retrieve a specific client by id. use when you need detailed client information after obtaining the client's id.
     */
    GET_CLIENT: "EVERHOUR_GET_CLIENT",
    /**
     * Tool to retrieve a specific project. use after you have the project id if you need its details.
     */
    GET_PROJECT: "EVERHOUR_GET_PROJECT",
    /**
     * Tool to retrieve a specific section. use when you need detailed section data by its id.
     */
    GET_SECTION: "EVERHOUR_GET_SECTION",
    /**
     * Tool to retrieve profile information of the authenticated user. use after providing api key to fetch current user's profile details.
     */
    GET_USER_PROFILE: "EVERHOUR_GET_USER_PROFILE",
    /**
     * Tool to list all expense categories. use when you need to retrieve every category available for categorizing expenses after authenticating with your api key.
     */
    LIST_EXPENSE_CATEGORIES: "EVERHOUR_LIST_EXPENSE_CATEGORIES",
    /**
     * Tool to list all webhooks. use when you need to retrieve every configured webhook for the account after authenticating with your api key.
     */
    LIST_HOOKS: "EVERHOUR_LIST_HOOKS",
    /**
     * Tool to list all invoices. use when you need to retrieve every invoice in your everhour workspace after authenticating with your api key.
     */
    LIST_INVOICES: "EVERHOUR_LIST_INVOICES",
    /**
     * Tool to list all projects. use when you need to retrieve every project accessible by your authenticated api key.
     */
    LIST_PROJECTS: "EVERHOUR_LIST_PROJECTS",
    /**
     * Tool to list sections within a project. use when you need to retrieve all sections for a specified project after authenticating with your api key.
     */
    LIST_SECTIONS: "EVERHOUR_LIST_SECTIONS",
    /**
     * Tool to list all tags. use when you need to retrieve every tag in your everhour workspace after authenticating with your api key.
     */
    LIST_TAGS: "EVERHOUR_LIST_TAGS",
    /**
     * Tool to list all teams. use to retrieve available teams for your api key.
     */
    LIST_TEAMS: "EVERHOUR_LIST_TEAMS",
    /**
     * Tool to list all team members. use when you need to retrieve your everhour team's current roster after authenticating with your api key.
     */
    LIST_TEAM_MEMBERS: "EVERHOUR_LIST_TEAM_MEMBERS",
    /**
     * Tool to create a new project in everhour. use after gathering project details to persist a new project.
     */
    PROJECT_CREATE: "EVERHOUR_PROJECT_CREATE",
    /**
     * Tool to delete a project. use when you need to permanently remove a project from everhour after confirming the project id.
     */
    PROJECT_DELETE: "EVERHOUR_PROJECT_DELETE",
    /**
     * Tool to create a new section in a project. use when you need to organize tasks under an existing project after confirming the project id.
     */
    SECTION_CREATE: "EVERHOUR_SECTION_CREATE",
    /**
     * Tool to delete a section. use when you need to permanently remove a section from everhour after confirming the section id.
     */
    SECTION_DELETE: "EVERHOUR_SECTION_DELETE",
    /**
     * Tool to create a new task in a project. use when you need to quickly add a task under a specific project id. example: "create a task named 'write tests' in project proj 123456".
     */
    TASK_CREATE: "EVERHOUR_TASK_CREATE",
    /**
     * Tool to start a new timer for a task. use when you need to begin tracking time on a specific task.
     */
    TIMER_START: "EVERHOUR_TIMER_START",
    /**
     * Tool to update an existing client. use when you need to modify client details such as name, hourly rate, or archived status after confirming the client id.
     */
    UPDATE_CLIENT: "EVERHOUR_UPDATE_CLIENT",
    /**
     * Tool to update an existing project. use after confirming the project id when modifying project details.
     */
    UPDATE_PROJECT: "EVERHOUR_UPDATE_PROJECT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "EVERHOUR".
 */
export type EVERHOUR_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "EVERHOUR".
 */
export type EVERHOUR_TRIGGER_EVENTS = {}
