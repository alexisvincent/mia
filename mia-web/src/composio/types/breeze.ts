// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BREEZE's BREEZE_ADD_PROJECT_PEOPLE tool input.
 */
type BREEZE_ADD_PROJECT_PEOPLE_INPUT = {
  /**
   * Invitees
   * @description List of email addresses to invite to the project
   */
  invitees?: string[];
  /**
   * Project Id
   * @description ID of the project to which people will be added
   */
  project_id?: number;
};

/**
 * Type of BREEZE's BREEZE_ADD_PROJECT_PEOPLE tool output.
 */
type BREEZE_ADD_PROJECT_PEOPLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Users
       * @description List of users added to the project
       */
      users: {
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
           * @description Full name of the user (may be null)
           * @default null
           */
          name: string | null;
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
 * Type of BREEZE's BREEZE_ARCHIVE_PROJECT tool input.
 */
type BREEZE_ARCHIVE_PROJECT_INPUT = {
  /**
   * Project Id
   * @description The unique ID of the project to archive
   */
  project_id?: number;
  /**
   * Team Id
   * @description Team ID to specify the target team when the user belongs to multiple teams. Provide this parameter if your account has multiple teams.
   * @default null
   */
  team_id: number | null;
};

/**
 * Type of BREEZE's BREEZE_ARCHIVE_PROJECT tool output.
 */
type BREEZE_ARCHIVE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Budget Amount
       * @description Monetary budget amount as a string (e.g., '1000.0')
       */
      budget_amount: string;
      /**
       * Budget Hours
       * @description Budgeted hours; may be null
       * @default null
       */
      budget_hours: number | null;
      /**
       * Created At
       * @description Timestamp when the project was created, in ISO 8601 format
       */
      created_at: string;
      /**
       * Currency Symbol
       * @description Symbol for the project currency (e.g., '$')
       */
      currency_symbol: string;
      /**
       * Description
       * @description Project description; may be null
       * @default null
       */
      description: string | null;
      /**
       * Hourly Rate
       * @description Hourly rate in smallest currency unit
       */
      hourly_rate: number;
      /**
       * Id
       * @description Project ID
       */
      id: number;
      /**
       * Name
       * @description Project name
       */
      name: string;
      /**
       * Star
       * @description Whether the project is starred
       */
      star: boolean;
      /**
       * Total Planned
       * @description Total planned time in minutes
       */
      total_planned: number;
      /**
       * Total Tracked
       * @description Total tracked time in minutes
       */
      total_tracked: number;
      /**
       * Users
       * @description List of users currently assigned to the project
       */
      users: {
          /**
           * Email
           * @description The user's email address
           */
          email: string;
          /**
           * Id
           * @description The user's unique ID
           */
          id: number;
          /**
           * Name
           * @description The user's display name; may be null if not set
           * @default null
           */
          name: string | null;
      }[];
      /**
       * Workspace Id
       * @description ID of the workspace the project belongs to
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
 * Type of BREEZE's BREEZE_CREATE_CARD tool input.
 */
type BREEZE_CREATE_CARD_INPUT = {
  /**
   * Custom Fields
   * @description List of custom fields for the card
   * @default null
   */
  custom_fields: {
      /**
       * Name
       * @description Name of the custom field
       */
      name: string;
      /**
       * Value
       * @description Value of the custom field
       */
      value: string;
  }[] | null;
  /**
   * Description
   * @description Optional description of the card
   * @default null
   */
  description: string | null;
  /**
   * Duedate
   * Format: date-time
   * @description Due date in ISO 8601 format (e.g., 2025-02-22T16:00:00Z)
   * @default null
   */
  duedate: unknown;
  /**
   * Invitees
   * @description List of email addresses to invite to the card
   * @default null
   */
  invitees: string[] | null;
  /**
   * Name
   * @description Name of the new card (task)
   */
  name?: string;
  /**
   * Planned Time
   * @description Planned time in minutes
   * @default null
   */
  planned_time: number | null;
  /**
   * Project Id
   * @description ID of the project where the card will be created
   */
  project_id?: number;
  /**
   * Stage Id
   * @description ID of the stage where the card will be placed
   * @default null
   */
  stage_id: number | null;
  /**
   * Startdate
   * Format: date-time
   * @description Start date in ISO 8601 format (e.g., 2025-02-20T16:00:00Z)
   * @default null
   */
  startdate: unknown;
  /**
   * Swimlane Id
   * @description ID of the swimlane where the card will be placed
   * @default null
   */
  swimlane_id: number | null;
  /**
   * Tags
   * @description List of tags to associate with the card
   * @default null
   */
  tags: string[] | null;
};

/**
 * Type of BREEZE's BREEZE_CREATE_CARD tool output.
 */
type BREEZE_CREATE_CARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Custom Fields
       * @description Custom fields of the card
       * @default null
       */
      custom_fields: {
          /**
           * Name
           * @description Name of the custom field
           */
          name: string;
          /**
           * Value
           * @description Value of the custom field
           */
          value: string;
      }[] | null;
      /**
       * Description
       * @description Description of the card
       * @default null
       */
      description: string | null;
      /**
       * Duedate
       * @description Due date of the card in ISO 8601 format
       * @default null
       */
      duedate: string | null;
      /**
       * Id
       * @description Unique identifier of the created card
       */
      id: number;
      /**
       * Invitees
       * @description Emails invited to the card
       * @default null
       */
      invitees: string[] | null;
      /**
       * Name
       * @description Name of the card
       */
      name: string;
      /**
       * Planned Time
       * @description Planned time in minutes
       * @default null
       */
      planned_time: number | null;
      /**
       * Stage Id
       * @description ID of the stage where the card is placed
       * @default null
       */
      stage_id: number | null;
      /**
       * Startdate
       * @description Start date of the card in ISO 8601 format
       * @default null
       */
      startdate: string | null;
      /**
       * Swimlane Id
       * @description ID of the swimlane where the card is placed
       * @default null
       */
      swimlane_id: number | null;
      /**
       * Tags
       * @description Tags associated with the card
       * @default null
       */
      tags: string[] | null;
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
 * Type of BREEZE's BREEZE_CREATE_LIST tool input.
 */
type BREEZE_CREATE_LIST_INPUT = {
  /**
   * Name
   * @description Name of the new list (stage) to create
   */
  name?: string;
  /**
   * Project Id
   * @description ID of the Breeze project to add the new list to
   */
  project_id?: number;
};

/**
 * Type of BREEZE's BREEZE_CREATE_LIST tool output.
 */
type BREEZE_CREATE_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the list was created in ISO 8601 format
       * @default null
       */
      created_at: string | null;
      /**
       * Id
       * @description Unique identifier of the newly created list
       * @default null
       */
      id: number | null;
      /**
       * Name
       * @description Name of the newly created list
       * @default null
       */
      name: string | null;
      /**
       * Position
       * @description Position of the newly created list within the project
       * @default null
       */
      position: number | null;
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
 * Type of BREEZE's BREEZE_CREATE_PROJECT tool input.
 */
type BREEZE_CREATE_PROJECT_INPUT = {
  /**
   * Name
   * @description The name of the new project.
   */
  name?: string;
};

/**
 * Type of BREEZE's BREEZE_CREATE_PROJECT tool output.
 */
type BREEZE_CREATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the project was created.
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier for the project.
       */
      id: number;
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
 * Type of BREEZE's BREEZE_CREATE_WORKSPACE tool input.
 */
type BREEZE_CREATE_WORKSPACE_INPUT = {
  /**
   * Name
   * @description Name of the new workspace (required, non-empty)
   */
  name?: string;
};

/**
 * Type of BREEZE's BREEZE_CREATE_WORKSPACE tool output.
 */
type BREEZE_CREATE_WORKSPACE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the workspace was created (ISO 8601 format)
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the workspace
       */
      id: number;
      /**
       * Name
       * @description Name of the workspace
       */
      name: string;
      /**
       * Position
       * @description Sort position assigned to the workspace
       */
      position: number;
      /**
       * Projects
       * @description List of projects in the workspace, initially empty
       */
      projects?: {
          /**
           * Id
           * @description Unique identifier of the project
           */
          id: number;
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
 * Type of BREEZE's BREEZE_DELETE_CARD tool input.
 */
type BREEZE_DELETE_CARD_INPUT = {
  /**
   * Card Id
   * @description ID of the card to delete
   */
  card_id?: number;
  /**
   * Project Id
   * @description ID of the project containing the card
   */
  project_id?: number;
};

/**
 * Type of BREEZE's BREEZE_DELETE_CARD tool output.
 */
type BREEZE_DELETE_CARD_OUTPUT = {
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
 * Type of BREEZE's BREEZE_DELETE_PROJECT tool input.
 */
type BREEZE_DELETE_PROJECT_INPUT = {
  /**
   * Project Id
   * @description Numeric ID of the project to delete. Must be a positive integer.
   */
  project_id?: number;
};

/**
 * Type of BREEZE's BREEZE_DELETE_PROJECT tool output.
 */
type BREEZE_DELETE_PROJECT_OUTPUT = {
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
 * Type of BREEZE's BREEZE_DELETE_PROJECT_PERSON tool input.
 */
type BREEZE_DELETE_PROJECT_PERSON_INPUT = {
  /**
   * Project Id
   * @description Numeric ID of the project from which the user will be removed
   */
  project_id?: number;
  /**
   * User Id
   * @description Numeric ID of the user/person to remove from the project
   */
  user_id?: number;
};

/**
 * Type of BREEZE's BREEZE_DELETE_PROJECT_PERSON tool output.
 */
type BREEZE_DELETE_PROJECT_PERSON_OUTPUT = {
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
 * Type of BREEZE's BREEZE_DELETE_WORKSPACE tool input.
 */
type BREEZE_DELETE_WORKSPACE_INPUT = {
  /**
   * Workspace Id
   * @description The numeric ID of the workspace to delete. Must be a positive integer.
   */
  workspace_id?: number;
};

/**
 * Type of BREEZE's BREEZE_DELETE_WORKSPACE tool output.
 */
type BREEZE_DELETE_WORKSPACE_OUTPUT = {
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
 * Type of BREEZE's BREEZE_GET_CARD tool input.
 */
type BREEZE_GET_CARD_INPUT = {
  /**
   * Card Id
   * @description ID of the card to retrieve
   */
  card_id?: number;
  /**
   * Project Id
   * @description ID of the project containing the card
   */
  project_id?: number;
};

/**
 * Type of BREEZE's BREEZE_GET_CARD tool output.
 */
type BREEZE_GET_CARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Color
       * @description Color associated with the card
       * @default null
       */
      color: string | null;
      /**
       * Created At
       * @description Creation timestamp in ISO 8601 format
       */
      created_at: string;
      /**
       * Description
       * @description Description of the card
       * @default null
       */
      description: string | null;
      /**
       * Done Todos
       * @description Number of completed todos
       */
      done_todos: number;
      /**
       * Duedate
       * @description Due date of the card in ISO 8601 format
       * @default null
       */
      duedate: string | null;
      /**
       * Id
       * @description Unique identifier of the card
       */
      id: number;
      /**
       * Name
       * @description Name of the card
       */
      name: string;
      /**
       * Planned Time
       * @description Planned time for the card in minutes
       * @default null
       */
      planned_time: number | null;
      /**
       * Position
       * @description Position of the card within its stage
       */
      position: number;
      /**
       * Stage Id
       * @description ID of the stage where the card is located
       */
      stage_id: number;
      /**
       * Startdate
       * @description Start date of the card in ISO 8601 format
       * @default null
       */
      startdate: string | null;
      /**
       * Tags
       * @description Tags associated with the card
       */
      tags: string[];
      /**
       * Time Entries
       * @description Time entries logged for the card
       */
      time_entries: {
          /**
           * Tracked
           * @description Tracked time in minutes
           */
          tracked: number;
          /**
           * User Email
           * @description Email of the user who logged time
           */
          user_email: string;
          /**
           * User Id
           * @description ID of the user who logged time
           */
          user_id: number;
          /**
           * User Name
           * @description Name of the user who logged time
           */
          user_name: string;
      }[];
      /**
       * Todos
       * @description Todo items on the card
       */
      todos: {
          /**
           * Done
           * @description Completion status of the todo
           */
          done: boolean;
          /**
           * Id
           * @description Todo ID
           */
          id: number;
          /**
           * Name
           * @description Todo name
           */
          name: string;
      }[];
      /**
       * Todos Count
       * @description Total number of todos on the card
       */
      todos_count: number;
      /**
       * Total Tracked
       * @description Total tracked time for the card in minutes
       * @default null
       */
      total_tracked: number | null;
      /**
       * Updated At
       * @description Last updated timestamp in ISO 8601 format
       */
      updated_at: string;
      /**
       * Users
       * @description Users assigned to the card
       */
      users: {
          /**
           * Email
           * @description User email
           */
          email: string;
          /**
           * Id
           * @description User ID
           */
          id: number;
          /**
           * Name
           * @description User name
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
 * Type of BREEZE's BREEZE_GET_CARDS tool input.
 */
type BREEZE_GET_CARDS_INPUT = {
  /**
   * Archived
   * @description If set to true, returns archived cards. Defaults to active cards only.
   * @default null
   */
  archived: boolean | null;
  /**
   * Project Id
   * @description ID of the Breeze project to retrieve cards for
   */
  project_id?: number;
};

/**
 * Type of BREEZE's BREEZE_GET_CARDS tool output.
 */
type BREEZE_GET_CARDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cards
       * @description Cards (tasks) grouped under this stage
       */
      cards: {
          /**
           * Color
           * @description Color label for the card, if set
           * @default null
           */
          color: string | null;
          /**
           * Created At
           * @description Timestamp when the card was created, in ISO 8601 format
           */
          created_at: string;
          /**
           * Custom Fields
           * @description List of custom fields and their values on this card
           * @default null
           */
          custom_fields: {
              /**
               * Name
               * @description Name of the custom field
               */
              name: string;
              /**
               * Value
               * @description Value of the custom field
               */
              value: string;
          }[] | null;
          /**
           * Description
           * @description Detailed description of the card
           * @default null
           */
          description: string | null;
          /**
           * Done Todos
           * @description Number of completed todos on this card
           */
          done_todos: number;
          /**
           * Duedate
           * @description Due date in ISO 8601 format, if set
           * @default null
           */
          duedate: string | null;
          /**
           * Id
           * @description Unique identifier for the card
           */
          id: number;
          /**
           * Name
           * @description Title of the card
           */
          name: string;
          /**
           * Planned Time
           * @description Planned time in minutes
           */
          planned_time: number;
          /**
           * Position
           * @description Position index of the card within its stage
           */
          position: number;
          /**
           * Stage Id
           * @description ID of the stage (list) this card belongs to
           */
          stage_id: number;
          /**
           * Startdate
           * @description Start date in ISO 8601 format, if set
           * @default null
           */
          startdate: string | null;
          /**
           * Swimlane Id
           * @description ID of the swimlane, if swimlanes are used
           * @default null
           */
          swimlane_id: number | null;
          /**
           * Tags
           * @description List of tag strings applied to this card
           */
          tags?: string[];
          /**
           * Time Entries
           * @description Time entries logged on this card
           */
          time_entries?: {
              /**
               * Tracked
               * @description Time tracked in minutes
               */
              tracked: number;
              /**
               * User Email
               * @description Email of the user who logged time
               */
              user_email: string;
              /**
               * User Id
               * @description ID of the user who logged this time entry
               */
              user_id: number;
              /**
               * User Name
               * @description Name of the user who logged time
               */
              user_name: string;
          }[];
          /**
           * Todos
           * @description Checklist todos for this card
           */
          todos?: {
              /**
               * Done
               * @description Completion status of the todo item
               */
              done: boolean;
              /**
               * Id
               * @description Unique identifier for the todo item
               */
              id: number;
              /**
               * Name
               * @description Text description of the todo item
               */
              name: string;
          }[];
          /**
           * Todos Count
           * @description Total number of todos on this card
           */
          todos_count: number;
          /**
           * Total Tracked
           * @description Total tracked time in minutes
           */
          total_tracked: number;
          /**
           * Updated At
           * @description Timestamp when the card was last updated, in ISO 8601 format
           */
          updated_at: string;
          /**
           * User
           * @description Model for a Breeze user assigned to cards or listed as creator.
           * @default null
           */
          user: {
              /**
               * Avatar
               * @description URL to the user's avatar image, if provided
               * @default null
               */
              avatar: string | null;
              /**
               * Email
               * @description Email address of the user
               */
              email: string;
              /**
               * Id
               * @description Unique identifier for the user
               */
              id: number;
              /**
               * Name
               * @description Full name of the user, if available
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Users
           * @description Users assigned to this card
           */
          users?: {
              /**
               * Avatar
               * @description URL to the user's avatar image, if provided
               * @default null
               */
              avatar: string | null;
              /**
               * Email
               * @description Email address of the user
               */
              email: string;
              /**
               * Id
               * @description Unique identifier for the user
               */
              id: number;
              /**
               * Name
               * @description Full name of the user, if available
               * @default null
               */
              name: string | null;
          }[];
      }[];
      /**
       * Id
       * @description Unique identifier for the stage
       */
      id: number;
      /**
       * Name
       * @description Name of the stage (list)
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
 * Type of BREEZE's BREEZE_GET_PROJECT tool input.
 */
type BREEZE_GET_PROJECT_INPUT = {
  /**
   * Project Id
   * @description Unique identifier of the project to retrieve
   */
  project_id?: number;
};

/**
 * Type of BREEZE's BREEZE_GET_PROJECT tool output.
 */
type BREEZE_GET_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Archived
       * @description Indicates if the project is archived
       */
      archived: boolean;
      /**
       * Budget
       * @description Budget allocated for the project
       * @default null
       */
      budget: number | null;
      /**
       * Client Id
       * @description Client ID associated with the project
       * @default null
       */
      client_id: number | null;
      /**
       * Created At
       * @description Timestamp when the project was created, in ISO 8601 format
       */
      created_at: string;
      /**
       * Currency
       * @description Currency used for the project's budget
       * @default null
       */
      currency: string | null;
      /**
       * Description
       * @description Brief description of the project
       * @default null
       */
      description: string | null;
      /**
       * End Date
       * @description End date of the project, in ISO 8601 format
       * @default null
       */
      end_date: string | null;
      /**
       * Hourly Rate
       * @description Hourly rate associated with the project
       * @default null
       */
      hourly_rate: number | null;
      /**
       * Id
       * @description Unique identifier of the project
       */
      id: number;
      /**
       * Members
       * @description List of members assigned to the project
       */
      members?: {
          /**
           * Email
           * @description Email address of the project member
           */
          email: string;
          /**
           * Id
           * @description User ID of the project member
           */
          id: number;
          /**
           * Name
           * @description Name of the project member
           */
          name: string;
          /**
           * Role
           * @description Role of the member in the project
           */
          role: string;
      }[];
      /**
       * Name
       * @description Name of the project
       */
      name: string;
      /**
       * Owner Id
       * @description User ID of the project's owner
       */
      owner_id: number;
      /**
       * Start Date
       * @description Start date of the project, in ISO 8601 format
       * @default null
       */
      start_date: string | null;
      /**
       * Status
       * @description Current status of the project
       * @default null
       */
      status: string | null;
      /**
       * Tags
       * @description Tags associated with the project
       */
      tags?: string[];
      /**
       * Updated At
       * @description Timestamp when the project was last updated, in ISO 8601 format
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
 * Type of BREEZE's BREEZE_GET_PROJECTS tool input.
 */
type BREEZE_GET_PROJECTS_INPUT = {
  /**
   * Team Id
   * @description Team ID to scope the projects. Required if the API token belongs to multiple teams.
   * @default null
   */
  team_id: number | null;
};

/**
 * Type of BREEZE's BREEZE_GET_PROJECTS tool output.
 */
type BREEZE_GET_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Budget Amount
       * @description Budget amount as a decimal string
       */
      budget_amount: string;
      /**
       * Budget Hours
       * @description Budgeted hours for the project, may be null
       * @default null
       */
      budget_hours: number | null;
      /**
       * Created At
       * @description Timestamp when the project was created, in ISO 8601 format
       */
      created_at: string;
      /**
       * Currency Symbol
       * @description Currency symbol for budget fields
       */
      currency_symbol: string;
      /**
       * Description
       * @description Project description, may be empty string
       */
      description: string;
      /**
       * Hourly Rate
       * @description Hourly billing rate for the project
       */
      hourly_rate: number;
      /**
       * Id
       * @description Unique identifier of the project
       */
      id: number;
      /**
       * Name
       * @description Name of the project
       */
      name: string;
      /**
       * Star
       * @description Whether the project is starred/favorited
       */
      star: boolean;
      /**
       * Total Planned
       * @description Total planned hours for the project
       */
      total_planned: number;
      /**
       * Total Tracked
       * @description Total tracked hours already logged
       */
      total_tracked: number;
      /**
       * Users
       * @description List of users assigned to the project
       */
      users: {
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
           * @description Full name of the user, may be null if not set
           * @default null
           */
          name: string | null;
      }[];
      /**
       * Workspace Id
       * @description Workspace ID that this project belongs to, if any
       * @default null
       */
      workspace_id: number | null;
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
 * Type of BREEZE's BREEZE_GET_PROJECT_PEOPLE tool input.
 */
type BREEZE_GET_PROJECT_PEOPLE_INPUT = {
  /**
   * Project Id
   * @description Numeric ID of the project whose users to retrieve
   */
  project_id?: number;
};

/**
 * Type of BREEZE's BREEZE_GET_PROJECT_PEOPLE tool output.
 */
type BREEZE_GET_PROJECT_PEOPLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Users
       * @description List of users assigned to the project
       */
      users: {
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
           * @description Full name of the user; may be null if not set
           * @default null
           */
          name: string | null;
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
 * Type of BREEZE's BREEZE_GET_WORKSPACE tool input.
 */
type BREEZE_GET_WORKSPACE_INPUT = {
  /**
   * Workspace Id
   * @description ID of the workspace to retrieve
   */
  workspace_id?: number;
};

/**
 * Type of BREEZE's BREEZE_GET_WORKSPACE tool output.
 */
type BREEZE_GET_WORKSPACE_OUTPUT = {
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
       * Id
       * @description Unique identifier of the workspace
       */
      id: number;
      /**
       * Name
       * @description Name of the workspace
       */
      name: string;
      /**
       * Position
       * @description Position of the workspace in the list
       */
      position: number;
      /**
       * Projects
       * @description List of projects in the workspace
       */
      projects: {
          /**
           * Id
           * @description Unique identifier of the project
           */
          id: number;
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
 * Type of BREEZE's BREEZE_GET_WORKSPACES tool input.
 */
type BREEZE_GET_WORKSPACES_INPUT = object;

/**
 * Type of BREEZE's BREEZE_GET_WORKSPACES tool output.
 */
type BREEZE_GET_WORKSPACES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the workspace was created (ISO 8601 format)
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the workspace
       */
      id: number;
      /**
       * Name
       * @description Name of the workspace
       */
      name: string;
      /**
       * Position
       * @description Position/order of the workspace in the list
       */
      position: number;
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
 * Type of BREEZE's BREEZE_MOVE_CARD tool input.
 */
type BREEZE_MOVE_CARD_INPUT = {
  /**
   * Card Id
   * @description ID of the card to move
   */
  card_id?: number;
  /**
   * Prev Id
   * @description ID of the card that should precede the moved card in the new stage
   * @default null
   */
  prev_id: number | null;
  /**
   * Project Id
   * @description ID of the project containing the card
   */
  project_id?: number;
  /**
   * Stage Id
   * @description ID of the stage to move the card to
   */
  stage_id?: number;
};

/**
 * Type of BREEZE's BREEZE_MOVE_CARD tool output.
 */
type BREEZE_MOVE_CARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Color
       * @description Color associated with the card
       * @default null
       */
      color: string | null;
      /**
       * Created At
       * @description Creation timestamp in ISO 8601 format
       */
      created_at: string;
      /**
       * Description
       * @description Description of the card
       * @default null
       */
      description: string | null;
      /**
       * Done Todos
       * @description Number of completed todos
       */
      done_todos: number;
      /**
       * Duedate
       * @description Due date of the card in ISO 8601 format
       * @default null
       */
      duedate: string | null;
      /**
       * Id
       * @description Unique identifier of the card
       */
      id: number;
      /**
       * Name
       * @description Name of the card
       */
      name: string;
      /**
       * Planned Time
       * @description Planned time for the card in minutes
       * @default null
       */
      planned_time: number | null;
      /**
       * Position
       * @description Position of the card within its stage
       */
      position: number;
      /**
       * Stage Id
       * @description ID of the stage where the card is located
       */
      stage_id: number;
      /**
       * Startdate
       * @description Start date of the card in ISO 8601 format
       * @default null
       */
      startdate: string | null;
      /**
       * Tags
       * @description Tags associated with the card
       */
      tags: string[];
      /**
       * Time Entries
       * @description Time entries logged for the card
       */
      time_entries: {
          /**
           * Tracked
           * @description Tracked time in minutes
           */
          tracked: number;
          /**
           * User Email
           * @description Email of the user who logged time
           */
          user_email: string;
          /**
           * User Id
           * @description ID of the user who logged time
           */
          user_id: number;
          /**
           * User Name
           * @description Name of the user who logged time
           */
          user_name: string;
      }[];
      /**
       * Todos
       * @description Todo items on the card
       */
      todos: {
          /**
           * Done
           * @description Completion status of the todo
           */
          done: boolean;
          /**
           * Id
           * @description Todo ID
           */
          id: number;
          /**
           * Name
           * @description Todo name
           */
          name: string;
      }[];
      /**
       * Todos Count
       * @description Total number of todos on the card
       */
      todos_count: number;
      /**
       * Total Tracked
       * @description Total tracked time for the card in minutes
       * @default null
       */
      total_tracked: number | null;
      /**
       * Updated At
       * @description Last updated timestamp in ISO 8601 format
       */
      updated_at: string;
      /**
       * Users
       * @description Users assigned to the card
       */
      users: {
          /**
           * Email
           * @description User email
           */
          email: string;
          /**
           * Id
           * @description User ID
           */
          id: number;
          /**
           * Name
           * @description User name
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
 * Type map of all available tool input types for toolkit "BREEZE".
 */
export type BREEZE_TOOL_INPUTS = {
  ADD_PROJECT_PEOPLE: BREEZE_ADD_PROJECT_PEOPLE_INPUT
  ARCHIVE_PROJECT: BREEZE_ARCHIVE_PROJECT_INPUT
  CREATE_CARD: BREEZE_CREATE_CARD_INPUT
  CREATE_LIST: BREEZE_CREATE_LIST_INPUT
  CREATE_PROJECT: BREEZE_CREATE_PROJECT_INPUT
  CREATE_WORKSPACE: BREEZE_CREATE_WORKSPACE_INPUT
  DELETE_CARD: BREEZE_DELETE_CARD_INPUT
  DELETE_PROJECT: BREEZE_DELETE_PROJECT_INPUT
  DELETE_PROJECT_PERSON: BREEZE_DELETE_PROJECT_PERSON_INPUT
  DELETE_WORKSPACE: BREEZE_DELETE_WORKSPACE_INPUT
  GET_CARD: BREEZE_GET_CARD_INPUT
  GET_CARDS: BREEZE_GET_CARDS_INPUT
  GET_PROJECT: BREEZE_GET_PROJECT_INPUT
  GET_PROJECTS: BREEZE_GET_PROJECTS_INPUT
  GET_PROJECT_PEOPLE: BREEZE_GET_PROJECT_PEOPLE_INPUT
  GET_WORKSPACE: BREEZE_GET_WORKSPACE_INPUT
  GET_WORKSPACES: BREEZE_GET_WORKSPACES_INPUT
  MOVE_CARD: BREEZE_MOVE_CARD_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BREEZE".
 */
export type BREEZE_TOOL_OUTPUTS = {
  ADD_PROJECT_PEOPLE: BREEZE_ADD_PROJECT_PEOPLE_OUTPUT
  ARCHIVE_PROJECT: BREEZE_ARCHIVE_PROJECT_OUTPUT
  CREATE_CARD: BREEZE_CREATE_CARD_OUTPUT
  CREATE_LIST: BREEZE_CREATE_LIST_OUTPUT
  CREATE_PROJECT: BREEZE_CREATE_PROJECT_OUTPUT
  CREATE_WORKSPACE: BREEZE_CREATE_WORKSPACE_OUTPUT
  DELETE_CARD: BREEZE_DELETE_CARD_OUTPUT
  DELETE_PROJECT: BREEZE_DELETE_PROJECT_OUTPUT
  DELETE_PROJECT_PERSON: BREEZE_DELETE_PROJECT_PERSON_OUTPUT
  DELETE_WORKSPACE: BREEZE_DELETE_WORKSPACE_OUTPUT
  GET_CARD: BREEZE_GET_CARD_OUTPUT
  GET_CARDS: BREEZE_GET_CARDS_OUTPUT
  GET_PROJECT: BREEZE_GET_PROJECT_OUTPUT
  GET_PROJECTS: BREEZE_GET_PROJECTS_OUTPUT
  GET_PROJECT_PEOPLE: BREEZE_GET_PROJECT_PEOPLE_OUTPUT
  GET_WORKSPACE: BREEZE_GET_WORKSPACE_OUTPUT
  GET_WORKSPACES: BREEZE_GET_WORKSPACES_OUTPUT
  MOVE_CARD: BREEZE_MOVE_CARD_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BREEZE toolkit.
 */
export const BREEZE = {
  slug: "breeze",
  tools: {
    /**
     * Tool to add people to a project. use when you have a valid project id and one or more email addresses to invite them.
     */
    ADD_PROJECT_PEOPLE: "BREEZE_ADD_PROJECT_PEOPLE",
    /**
     * Tool to archive a specific project. use when you need to hide a completed or inactive project from active views after confirming its details.
     */
    ARCHIVE_PROJECT: "BREEZE_ARCHIVE_PROJECT",
    /**
     * Tool to create a new card in a project. use after confirming the project id. creates a task with details like name, due date, and assignees.
     */
    CREATE_CARD: "BREEZE_CREATE_CARD",
    /**
     * Tool to create a new list (stage) in a breeze project. use when you've selected a project and need to add a new stage. example: "create a new todo list for project 42."
     */
    CREATE_LIST: "BREEZE_CREATE_LIST",
    /**
     * Tool to create a new project in breeze. use when you have the project name and want to initialize it via the api.
     */
    CREATE_PROJECT: "BREEZE_CREATE_PROJECT",
    /**
     * Tool to create a new workspace. use after deciding on the workspace name.
     */
    CREATE_WORKSPACE: "BREEZE_CREATE_WORKSPACE",
    /**
     * Tool to delete a specific card (task) by its id. use when you need to remove a task permanently; deletions cannot be undone.
     */
    DELETE_CARD: "BREEZE_DELETE_CARD",
    /**
     * Tool to delete a specific project by id. use when you need to remove a project after confirming its id.
     */
    DELETE_PROJECT: "BREEZE_DELETE_PROJECT",
    /**
     * Tool to delete a person from a project by user id. use after confirming the project and user details. example: "delete user 456 from project 123".
     */
    DELETE_PROJECT_PERSON: "BREEZE_DELETE_PROJECT_PERSON",
    /**
     * Tool to delete a specific workspace by id. use when permanently removing a workspace after confirming the correct workspace id.
     */
    DELETE_WORKSPACE: "BREEZE_DELETE_WORKSPACE",
    /**
     * Tool to retrieve detailed info for a specific card (task) in a project. use when you know the project id and card id and need all metadata like tags, users, todos, and time entries.
     */
    GET_CARD: "BREEZE_GET_CARD",
    /**
     * Tool to get all cards (tasks) for a specific project. use after confirming the project exists. example: "list all cards in project 42."
     */
    GET_CARDS: "BREEZE_GET_CARDS",
    /**
     * Tool to get a specific project by id. use when you need detailed project information after confirming the project id. example: "get project 123 details".
     */
    GET_PROJECT: "BREEZE_GET_PROJECT",
    /**
     * Tool to get all active projects. use when you need an overview of your team's current projects after confirming authentication.
     */
    GET_PROJECTS: "BREEZE_GET_PROJECTS",
    /**
     * Tool to get all users in a project. use when you have a valid project id and need to list its users.
     */
    GET_PROJECT_PEOPLE: "BREEZE_GET_PROJECT_PEOPLE",
    /**
     * Tool to get a specific workspace by id. use when you need workspace details including projects after confirming the workspace id.
     */
    GET_WORKSPACE: "BREEZE_GET_WORKSPACE",
    /**
     * Tool to get all workspaces. use when you need to list available workspaces for the authenticated user.
     */
    GET_WORKSPACES: "BREEZE_GET_WORKSPACES",
    /**
     * Tool to move a card to a different stage or position. use after confirming stage id and prev id.
     */
    MOVE_CARD: "BREEZE_MOVE_CARD",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BREEZE".
 */
export type BREEZE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BREEZE".
 */
export type BREEZE_TRIGGER_EVENTS = {}
