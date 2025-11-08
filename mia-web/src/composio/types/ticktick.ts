// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TICKTICK's TICKTICK_COMPLETE_TASK tool input.
 */
type TICKTICK_COMPLETE_TASK_INPUT = {
  /**
   * Project Id
   * @description Project identifier containing the task to complete.
   */
  project_id?: string;
  /**
   * Task Id
   * @description Identifier of the task to mark as complete.
   */
  task_id?: string;
};

/**
 * Type of TICKTICK's TICKTICK_COMPLETE_TASK tool output.
 */
type TICKTICK_COMPLETE_TASK_OUTPUT = {
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
 * Type of TICKTICK's TICKTICK_CREATE_TASK tool input.
 */
type TICKTICK_CREATE_TASK_INPUT = {
  /**
   * Content
   * @description Main content or notes of the task
   * @default null
   */
  content: string | null;
  /**
   * Desc
   * @description Extended description of the task
   * @default null
   */
  desc: string | null;
  /**
   * Due Date
   * @description ISO 8601 due date/time, e.g., '2023-04-24T17:00:00+0000'
   * @default null
   */
  dueDate: string | null;
  /**
   * Is All Day
   * @description Set true for an all-day task
   * @default false
   */
  isAllDay: boolean | null;
  /**
   * Items
   * @description Checklist (subtask) items
   * @default null
   */
  items: {
      /**
       * Completed Time
       * @description Completion timestamp in ISO 8601 format
       * @default null
       */
      completedTime: string | null;
      /**
       * Id
       * @description ID of the checklist item (omit when creating new items)
       * @default null
       */
      id: string | null;
      /**
       * Is All Day
       * @description If true, this item is an all-day event
       * @default null
       */
      isAllDay: boolean | null;
      /**
       * Sort Order
       * @description Ordering index for the checklist item
       * @default null
       */
      sortOrder: number | null;
      /**
       * Start Date
       * @description Start date/time in ISO 8601 format
       * @default null
       */
      startDate: string | null;
      /**
       * Status
       * @description Completion status: 0=Normal, 1=Completed
       * @default null
       */
      status: number | null;
      /**
       * Time Zone
       * @description Time zone name, e.g., 'America/Los_Angeles'
       * @default null
       */
      timeZone: string | null;
      /**
       * Title
       * @description Title of the checklist item
       */
      title: string;
  }[] | null;
  /**
   * Priority
   * @description Task priority (0=None, 1=Low, 3=Medium, 5=High)
   * @default null
   */
  priority: number | null;
  /**
   * Project Id
   * @description ID of the project (list) to add the task to
   * @default null
   */
  projectId: string | null;
  /**
   * Reminders
   * @description List of reminder triggers in RFC 5545 format, e.g., ['TRIGGER:PT10M', 'TRIGGER:PT0S']
   * @default null
   */
  reminders: string[] | null;
  /**
   * Repeat Flag
   * @description RRULE string for recurrence, e.g., 'RRULE:FREQ=DAILY;INTERVAL=1'
   * @default null
   */
  repeatFlag: string | null;
  /**
   * Sort Order
   * @description Internal sort index
   * @default null
   */
  sortOrder: number | null;
  /**
   * Start Date
   * @description ISO 8601 start date/time, e.g., '2023-04-23T12:00:00+0000'
   * @default null
   */
  startDate: string | null;
  /**
   * Time Zone
   * @description Time zone identifier, e.g., 'America/Los_Angeles'
   * @default null
   */
  timeZone: string | null;
  /**
   * Title
   * @description Title of the task
   */
  title?: string;
};

/**
 * Type of TICKTICK's TICKTICK_CREATE_TASK tool output.
 */
type TICKTICK_CREATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Completed Time
       * @description Completion time in ISO 8601 format
       * @default null
       */
      completedTime: string | null;
      /**
       * Content
       * @description Content or details of the task
       * @default null
       */
      content: string | null;
      /**
       * Desc
       * @description Description of the task
       * @default null
       */
      desc: string | null;
      /**
       * Due Date
       * @description Due date/time in ISO 8601 format
       * @default null
       */
      dueDate: string | null;
      /**
       * Etag
       * @description Entity tag for the task
       * @default null
       */
      etag: string | null;
      /**
       * Id
       * @description ID of the created task
       */
      id: string;
      /**
       * Is All Day
       * @description If the task is an all-day event
       */
      isAllDay: boolean;
      /**
       * Items
       * @description Checklist items
       * @default null
       */
      items: {
          /**
           * Completed Time
           * @description Completion timestamp in ISO 8601 format
           * @default null
           */
          completedTime: string | null;
          /**
           * Id
           * @description ID of the checklist item (omit when creating new items)
           * @default null
           */
          id: string | null;
          /**
           * Is All Day
           * @description If true, this item is an all-day event
           * @default null
           */
          isAllDay: boolean | null;
          /**
           * Sort Order
           * @description Ordering index for the checklist item
           * @default null
           */
          sortOrder: number | null;
          /**
           * Start Date
           * @description Start date/time in ISO 8601 format
           * @default null
           */
          startDate: string | null;
          /**
           * Status
           * @description Completion status: 0=Normal, 1=Completed
           * @default null
           */
          status: number | null;
          /**
           * Time Zone
           * @description Time zone name, e.g., 'America/Los_Angeles'
           * @default null
           */
          timeZone: string | null;
          /**
           * Title
           * @description Title of the checklist item
           */
          title: string;
      }[] | null;
      /**
       * Kind
       * @description Type of the task, e.g., 'TEXT'
       * @default null
       */
      kind: string | null;
      /**
       * Priority
       * @description Priority of the task
       * @default null
       */
      priority: number | null;
      /**
       * Project Id
       * @description ID of the project containing the task
       * @default null
       */
      projectId: string | null;
      /**
       * Reminders
       * @description List of reminder triggers
       * @default null
       */
      reminders: string[] | null;
      /**
       * Repeat Flag
       * @description Recurrence rule string
       * @default null
       */
      repeatFlag: string | null;
      /**
       * Sort Order
       * @description Sort order value
       * @default null
       */
      sortOrder: number | null;
      /**
       * Start Date
       * @description Start date/time in ISO 8601 format
       * @default null
       */
      startDate: string | null;
      /**
       * Status
       * @description Completion status of the task
       * @default null
       */
      status: boolean | null;
      /**
       * Tags
       * @description Tags associated with the task
       * @default null
       */
      tags: string[] | null;
      /**
       * Time Zone
       * @description Time zone of the task
       * @default null
       */
      timeZone: string | null;
      /**
       * Title
       * @description Title of the task
       */
      title: string;
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
 * Type of TICKTICK's TICKTICK_DELETE_TASK tool input.
 */
type TICKTICK_DELETE_TASK_INPUT = {
  /**
   * Project Id
   * @description Project identifier containing the task to delete.
   */
  project_id?: string;
  /**
   * Task Id
   * @description Task identifier to delete.
   */
  task_id?: string;
};

/**
 * Type of TICKTICK's TICKTICK_DELETE_TASK tool output.
 */
type TICKTICK_DELETE_TASK_OUTPUT = {
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
 * Type of TICKTICK's TICKTICK_GET_USER_PROJECT tool input.
 */
type TICKTICK_GET_USER_PROJECT_INPUT = object;

/**
 * Type of TICKTICK's TICKTICK_GET_USER_PROJECT tool output.
 */
type TICKTICK_GET_USER_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Projects
       * @description List of user projects
       */
      projects: {
          /**
           * Closed
           * @description Whether the project is closed
           * @default null
           */
          closed: boolean | null;
          /**
           * Color
           * @description Project color in HEX format
           * @default null
           */
          color: string | null;
          /**
           * Group Id
           * @description Project group identifier
           * @default null
           */
          groupId: string | null;
          /**
           * Id
           * @description Project identifier
           */
          id: string;
          /**
           * Kind
           * @description Kind of the project
           */
          kind: string;
          /**
           * Name
           * @description Project name
           */
          name: string;
          /**
           * Parent Id
           * @description Parent project identifier for sub-projects
           * @default null
           */
          parentId: string | null;
          /**
           * Permission
           * @description User's permission on the project
           * @default null
           * @enum {string|null}
           */
          permission: "read" | "write" | "comment" | null;
          /**
           * Sort Order
           * @description Sort order value of the project
           * @default null
           */
          sortOrder: number | null;
          /**
           * Team Id
           * @description Team identifier if project belongs to a team
           * @default null
           */
          teamId: string | null;
          /**
           * View Mode
           * @description View mode of the project
           * @default null
           * @enum {string|null}
           */
          viewMode: "list" | "kanban" | "timeline" | null;
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
 * Type of TICKTICK's TICKTICK_TICKTICK_COMPLETE_TASK tool input.
 */
type TICKTICK_TICKTICK_COMPLETE_TASK_INPUT = {
  /**
   * Project Id
   * @description Project identifier containing the task to complete.
   */
  project_id?: string;
  /**
   * Task Id
   * @description Task identifier to mark complete.
   */
  task_id?: string;
};

/**
 * Type of TICKTICK's TICKTICK_TICKTICK_COMPLETE_TASK tool output.
 */
type TICKTICK_TICKTICK_COMPLETE_TASK_OUTPUT = {
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
 * Type of TICKTICK's TICKTICK_TICKTICK_CREATE_PROJECT tool input.
 */
type TICKTICK_TICKTICK_CREATE_PROJECT_INPUT = {
  /**
   * Color
   * @description Hex color code for the project, e.g., '#F18181'
   * @default null
   */
  color: string | null;
  /**
   * Kind
   * @description Optional project kind
   * @default null
   * @enum {string|null}
   */
  kind: "TASK" | "NOTE" | null;
  /**
   * Name
   * @description Name of the new project
   */
  name?: string;
  /**
   * Sort Order
   * @description Optional sort order value of the project
   * @default null
   */
  sortOrder: number | null;
  /**
   * View Mode
   * @description Optional view mode for the project
   * @default null
   * @enum {string|null}
   */
  viewMode: "list" | "kanban" | "timeline" | null;
};

/**
 * Type of TICKTICK's TICKTICK_TICKTICK_CREATE_PROJECT tool output.
 */
type TICKTICK_TICKTICK_CREATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Color
       * @description Hex color code of the project
       * @default null
       */
      color: string | null;
      /**
       * Id
       * @description The project's unique identifier
       */
      id: string;
      /**
       * Kind
       * @description Project kind, e.g., 'TASK' or 'NOTE'
       * @default null
       */
      kind: string | null;
      /**
       * Name
       * @description The project name
       */
      name: string;
      /**
       * Sort Order
       * @description Sort order of the project
       * @default null
       */
      sortOrder: number | null;
      /**
       * View Mode
       * @description View mode of the project
       * @default null
       */
      viewMode: string | null;
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
 * Type of TICKTICK's TICKTICK_TICKTICK_DELETE_PROJECT tool input.
 */
type TICKTICK_TICKTICK_DELETE_PROJECT_INPUT = {
  /**
   * Project Id
   * @description Project identifier to delete
   */
  project_id?: string;
};

/**
 * Type of TICKTICK's TICKTICK_TICKTICK_DELETE_PROJECT tool output.
 */
type TICKTICK_TICKTICK_DELETE_PROJECT_OUTPUT = {
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
 * Type of TICKTICK's TICKTICK_TICKTICK_GET_PROJECT_WITH_DATA tool input.
 */
type TICKTICK_TICKTICK_GET_PROJECT_WITH_DATA_INPUT = {
  /**
   * Project Id
   * @description Project identifier to retrieve data for
   */
  projectId?: string;
};

/**
 * Type of TICKTICK's TICKTICK_TICKTICK_GET_PROJECT_WITH_DATA tool output.
 */
type TICKTICK_TICKTICK_GET_PROJECT_WITH_DATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Columns
       * @description Columns under this project (e.g. Kanban columns)
       */
      columns: {
          /**
           * Id
           * @description Column identifier
           */
          id: string;
          /**
           * Name
           * @description Column name
           */
          name: string;
          /**
           * Project Id
           * @description Project identifier
           */
          projectId: string;
          /**
           * Sort Order
           * @description Column sort order
           */
          sortOrder: number;
      }[];
      /**
       * Project
       * @description The project details
       */
      project: {
          /**
           * Closed
           * @description Whether the project is closed
           * @default null
           */
          closed: boolean | null;
          /**
           * Color
           * @description Project color code
           * @default null
           */
          color: string | null;
          /**
           * Group Id
           * @description Group identifier
           * @default null
           */
          groupId: string | null;
          /**
           * Id
           * @description Project identifier
           */
          id: string;
          /**
           * Kind
           * @description Project kind: TASK or NOTE
           * @default null
           */
          kind: string | null;
          /**
           * Name
           * @description Project name
           */
          name: string;
          /**
           * Permission
           * @description Permission on project: read, write, or comment
           * @default null
           */
          permission: string | null;
          /**
           * Sort Order
           * @description Order value of project
           * @default null
           */
          sortOrder: number | null;
          /**
           * View Mode
           * @description View mode: list, kanban, or timeline
           * @default null
           */
          viewMode: string | null;
      };
      /**
       * Tasks
       * @description Undone tasks under this project
       */
      tasks: {
          /**
           * Completed Time
           * @description Task completed time in ISO8601
           * @default null
           */
          completedTime: string | null;
          /**
           * Content
           * @description Task content/body
           * @default null
           */
          content: string | null;
          /**
           * Desc
           * @description Task description of checklist
           * @default null
           */
          desc: string | null;
          /**
           * Due Date
           * @description Due date-time in ISO8601
           * @default null
           */
          dueDate: string | null;
          /**
           * Id
           * @description Task identifier
           */
          id: string;
          /**
           * Is All Day
           * @description Whether the task lasts all day
           */
          isAllDay: boolean;
          /**
           * Priority
           * @description Priority: 0=None, 1=Low, 3=Medium, 5=High
           */
          priority: number;
          /**
           * Project Id
           * @description ID of the project containing this task
           */
          projectId: string;
          /**
           * Reminders
           * @description List of reminder triggers, e.g. TRIGGER:P0DT9H0M0S
           */
          reminders?: string[];
          /**
           * Repeat Flag
           * @description Recurrence rule string, e.g. RRULE:FREQ=DAILY;INTERVAL=1
           * @default null
           */
          repeatFlag: string | null;
          /**
           * Sort Order
           * @description Task sort order
           */
          sortOrder: number;
          /**
           * Start Date
           * @description Start date-time in ISO8601
           * @default null
           */
          startDate: string | null;
          /**
           * Status
           * @description Completion status: 0=Normal, 2=Completed
           */
          status: number;
          /**
           * Time Zone
           * @description Timezone for start/due dates
           * @default null
           */
          timeZone: string | null;
          /**
           * Title
           * @description Task title
           */
          title: string;
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
 * Type of TICKTICK's TICKTICK_TICKTICK_OAUTH2_AUTHORIZATION_STEP1 tool input.
 */
type TICKTICK_TICKTICK_OAUTH2_AUTHORIZATION_STEP1_INPUT = {
  /**
   * Client Id
   * @description Your TickTick application's client ID obtained from the Developer Center.
   */
  client_id?: string;
  /**
   * Redirect Uri
   * @description The exact redirect URI registered with your TickTick application; the authorization code will be sent here after user approval.
   */
  redirect_uri?: string;
  /**
   * Scope
   * @description Space-separated permission scopes. Available scopes: 'tasks:read', 'tasks:write'.
   */
  scope?: string;
  /**
   * State
   * @description An opaque value passed back to your redirect URI for CSRF protection and to maintain request state (optional).
   * @default null
   */
  state: string | null;
};

/**
 * Type of TICKTICK's TICKTICK_TICKTICK_OAUTH2_AUTHORIZATION_STEP1 tool output.
 */
type TICKTICK_TICKTICK_OAUTH2_AUTHORIZATION_STEP1_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Authorization Url
       * @description The full URL to redirect the user to for granting OAuth2 authorization.
       */
      authorization_url: string;
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
 * Type of TICKTICK's TICKTICK_TICKTICK_OAUTH2_AUTHORIZATION_STEP_1 tool input.
 */
type TICKTICK_TICKTICK_OAUTH2_AUTHORIZATION_STEP_1_INPUT = {
  /**
   * Client Id
   * @description Your TickTick application's client ID obtained from the Developer Center.
   */
  client_id?: string;
  /**
   * Redirect Uri
   * Format: uri
   * @description The exact redirect URI registered with your TickTick application; the authorization code will be sent here.
   */
  redirect_uri?: unknown;
  /**
   * Scope
   * @description Space-separated permission scopes. Available scopes: 'tasks:read', 'tasks:write'.
   */
  scope?: string;
  /**
   * State
   * @description An opaque value passed back to your redirect URI for CSRF protection and to maintain request state.
   * @default null
   */
  state: string | null;
};

/**
 * Type of TICKTICK's TICKTICK_TICKTICK_OAUTH2_AUTHORIZATION_STEP_1 tool output.
 */
type TICKTICK_TICKTICK_OAUTH2_AUTHORIZATION_STEP_1_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Authorization Url
       * @description The full URL to redirect the user to for granting OAuth2 authorization.
       */
      authorization_url: string;
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
 * Type of TICKTICK's TICKTICK_TICKTICK_UPDATE_PROJECT tool input.
 */
type TICKTICK_TICKTICK_UPDATE_PROJECT_INPUT = {
  /**
   * Color
   * @description Hex color code for the project, e.g. '#F18181'
   * @default null
   */
  color: string | null;
  /**
   * Kind
   * @description Kind of the project, 'TASK' or 'NOTE'
   * @default null
   * @enum {string|null}
   */
  kind: "TASK" | "NOTE" | null;
  /**
   * Name
   * @description New name of the project
   * @default null
   */
  name: string | null;
  /**
   * Project Id
   * @description Project identifier to update
   */
  projectId?: string;
  /**
   * Sort Order
   * @description Sort order value of the project
   * @default null
   */
  sortOrder: number | null;
  /**
   * View Mode
   * @description View mode of the project
   * @default null
   * @enum {string|null}
   */
  viewMode: "list" | "kanban" | "timeline" | null;
};

/**
 * Type of TICKTICK's TICKTICK_TICKTICK_UPDATE_PROJECT tool output.
 */
type TICKTICK_TICKTICK_UPDATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Closed
       * @description Whether the project is closed
       * @default null
       */
      closed: boolean | null;
      /**
       * Color
       * @description Hex color code of the project
       * @default null
       */
      color: string | null;
      /**
       * Group Id
       * @description Project group identifier
       * @default null
       */
      groupId: string | null;
      /**
       * Id
       * @description Project identifier
       */
      id: string;
      /**
       * Kind
       * @description Kind of the project
       * @default null
       */
      kind: string | null;
      /**
       * Name
       * @description Project name
       */
      name: string;
      /**
       * Permission
       * @description User's permission on the project
       * @default null
       */
      permission: string | null;
      /**
       * Sort Order
       * @description Sort order value of the project
       * @default null
       */
      sortOrder: number | null;
      /**
       * View Mode
       * @description View mode of the project
       * @default null
       */
      viewMode: string | null;
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
 * Type of TICKTICK's TICKTICK_UPDATE_PROJECT tool input.
 */
type TICKTICK_UPDATE_PROJECT_INPUT = {
  /**
   * Color
   * @description Hex color code for the project, e.g. '#F18181'
   * @default null
   */
  color: string | null;
  /**
   * Kind
   * @description Kind of the project, 'TASK' or 'NOTE'
   * @default null
   * @enum {string|null}
   */
  kind: "TASK" | "NOTE" | null;
  /**
   * Name
   * @description New name of the project
   * @default null
   */
  name: string | null;
  /**
   * Project Id
   * @description Project identifier to update
   */
  projectId?: string;
  /**
   * Sort Order
   * @description Sort order value of the project
   * @default null
   */
  sortOrder: number | null;
  /**
   * View Mode
   * @description View mode for the project
   * @default null
   * @enum {string|null}
   */
  viewMode: "list" | "kanban" | "timeline" | null;
};

/**
 * Type of TICKTICK's TICKTICK_UPDATE_PROJECT tool output.
 */
type TICKTICK_UPDATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Closed
       * @description Whether the project is closed
       * @default null
       */
      closed: boolean | null;
      /**
       * Color
       * @description Hex color code of the project
       * @default null
       */
      color: string | null;
      /**
       * Group Id
       * @description Project group identifier
       * @default null
       */
      groupId: string | null;
      /**
       * Id
       * @description Project identifier
       */
      id: string;
      /**
       * Kind
       * @description Kind of the project
       * @default null
       */
      kind: string | null;
      /**
       * Name
       * @description Project name
       */
      name: string;
      /**
       * Permission
       * @description User's permission on the project
       * @default null
       */
      permission: string | null;
      /**
       * Sort Order
       * @description Sort order value of the project
       * @default null
       */
      sortOrder: number | null;
      /**
       * View Mode
       * @description View mode of the project
       * @default null
       */
      viewMode: string | null;
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
 * Type of TICKTICK's TICKTICK_UPDATE_TASK tool input.
 */
type TICKTICK_UPDATE_TASK_INPUT = {
  /**
   * Content
   * @description Content or notes of the task
   * @default null
   */
  content: string | null;
  /**
   * Desc
   * @description Extended description of the task
   * @default null
   */
  desc: string | null;
  /**
   * Due Date
   * @description ISO 8601 due date/time, e.g., '2023-04-24T17:00:00+0000'
   * @default null
   */
  dueDate: string | null;
  /**
   * Is All Day
   * @description Set true for an all-day task
   * @default null
   */
  isAllDay: boolean | null;
  /**
   * Items
   * @description Checklist (subtask) items
   * @default null
   */
  items: {
      /**
       * Completed Time
       * @description Completion timestamp in ISO 8601 format
       * @default null
       */
      completedTime: string | null;
      /**
       * Id
       * @description Checklist item ID (omit for new items)
       * @default null
       */
      id: string | null;
      /**
       * Is All Day
       * @description If true, this item is an all-day event
       * @default null
       */
      isAllDay: boolean | null;
      /**
       * Sort Order
       * @description Ordering index for the checklist item
       * @default null
       */
      sortOrder: number | null;
      /**
       * Start Date
       * @description Start date/time in ISO 8601 format
       * @default null
       */
      startDate: string | null;
      /**
       * Status
       * @description Completion status: 0=Normal, 1=Completed
       * @default null
       */
      status: number | null;
      /**
       * Time Zone
       * @description Time zone name, e.g., 'America/Los_Angeles'
       * @default null
       */
      timeZone: string | null;
      /**
       * Title
       * @description Title of the checklist item
       */
      title: string;
  }[] | null;
  /**
   * Priority
   * @description Task priority (0=None, 1=Low, 3=Medium, 5=High)
   * @default null
   */
  priority: number | null;
  /**
   * Project Id
   * @description Project identifier containing the task
   */
  projectId?: string;
  /**
   * Reminders
   * @description List of reminder triggers in RFC 5545 format, e.g., ['TRIGGER:PT10M']
   * @default null
   */
  reminders: string[] | null;
  /**
   * Repeat Flag
   * @description RRULE string for recurrence, e.g., 'RRULE:FREQ=DAILY;INTERVAL=1'
   * @default null
   */
  repeatFlag: string | null;
  /**
   * Sort Order
   * @description Internal sort index for ordering tasks
   * @default null
   */
  sortOrder: number | null;
  /**
   * Start Date
   * @description ISO 8601 start date/time, e.g., '2023-04-23T12:00:00+0000'
   * @default null
   */
  startDate: string | null;
  /**
   * Task Id
   * @description Task identifier to update
   */
  taskId?: string;
  /**
   * Time Zone
   * @description Time zone identifier, e.g., 'America/Los_Angeles'
   * @default null
   */
  timeZone: string | null;
  /**
   * Title
   * @description New title of the task
   * @default null
   */
  title: string | null;
};

/**
 * Type of TICKTICK's TICKTICK_UPDATE_TASK tool output.
 */
type TICKTICK_UPDATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Completed Time
       * @description Completion time in ISO 8601 format
       * @default null
       */
      completedTime: string | null;
      /**
       * Content
       * @description Content or details of the task
       * @default null
       */
      content: string | null;
      /**
       * Desc
       * @description Description of the task
       * @default null
       */
      desc: string | null;
      /**
       * Due Date
       * @description Due date/time in ISO 8601 format
       * @default null
       */
      dueDate: string | null;
      /**
       * Etag
       * @description Entity tag for the task
       * @default null
       */
      etag: string | null;
      /**
       * Id
       * @description ID of the task
       */
      id: string;
      /**
       * Is All Day
       * @description If the task is an all-day event
       */
      isAllDay: boolean;
      /**
       * Items
       * @description Checklist items
       * @default null
       */
      items: {
          /**
           * Completed Time
           * @description Completion timestamp in ISO 8601 format
           * @default null
           */
          completedTime: string | null;
          /**
           * Id
           * @description Checklist item ID (omit for new items)
           * @default null
           */
          id: string | null;
          /**
           * Is All Day
           * @description If true, this item is an all-day event
           * @default null
           */
          isAllDay: boolean | null;
          /**
           * Sort Order
           * @description Ordering index for the checklist item
           * @default null
           */
          sortOrder: number | null;
          /**
           * Start Date
           * @description Start date/time in ISO 8601 format
           * @default null
           */
          startDate: string | null;
          /**
           * Status
           * @description Completion status: 0=Normal, 1=Completed
           * @default null
           */
          status: number | null;
          /**
           * Time Zone
           * @description Time zone name, e.g., 'America/Los_Angeles'
           * @default null
           */
          timeZone: string | null;
          /**
           * Title
           * @description Title of the checklist item
           */
          title: string;
      }[] | null;
      /**
       * Kind
       * @description Type of the task, e.g., 'TEXT'
       * @default null
       */
      kind: string | null;
      /**
       * Priority
       * @description Priority of the task
       * @default null
       */
      priority: number | null;
      /**
       * Project Id
       * @description ID of the project containing the task
       * @default null
       */
      projectId: string | null;
      /**
       * Reminders
       * @description List of reminder triggers
       * @default null
       */
      reminders: string[] | null;
      /**
       * Repeat Flag
       * @description Recurrence rule string
       * @default null
       */
      repeatFlag: string | null;
      /**
       * Sort Order
       * @description Sort order value
       * @default null
       */
      sortOrder: number | null;
      /**
       * Start Date
       * @description Start date/time in ISO 8601 format
       * @default null
       */
      startDate: string | null;
      /**
       * Status
       * @description Completion status of the task
       * @default null
       */
      status: boolean | null;
      /**
       * Tags
       * @description Tags associated with the task
       * @default null
       */
      tags: string[] | null;
      /**
       * Time Zone
       * @description Time zone of the task
       * @default null
       */
      timeZone: string | null;
      /**
       * Title
       * @description Title of the task
       */
      title: string;
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
 * Type map of all available tool input types for toolkit "TICKTICK".
 */
export type TICKTICK_TOOL_INPUTS = {
  COMPLETE_TASK: TICKTICK_COMPLETE_TASK_INPUT
  CREATE_TASK: TICKTICK_CREATE_TASK_INPUT
  DELETE_TASK: TICKTICK_DELETE_TASK_INPUT
  GET_USER_PROJECT: TICKTICK_GET_USER_PROJECT_INPUT
  TICKTICK_COMPLETE_TASK: TICKTICK_TICKTICK_COMPLETE_TASK_INPUT
  TICKTICK_CREATE_PROJECT: TICKTICK_TICKTICK_CREATE_PROJECT_INPUT
  TICKTICK_DELETE_PROJECT: TICKTICK_TICKTICK_DELETE_PROJECT_INPUT
  TICKTICK_GET_PROJECT_WITH_DATA: TICKTICK_TICKTICK_GET_PROJECT_WITH_DATA_INPUT
  TICKTICK_OAUTH2_AUTHORIZATION_STEP1: TICKTICK_TICKTICK_OAUTH2_AUTHORIZATION_STEP1_INPUT
  TICKTICK_OAUTH2_AUTHORIZATION_STEP_1: TICKTICK_TICKTICK_OAUTH2_AUTHORIZATION_STEP_1_INPUT
  TICKTICK_UPDATE_PROJECT: TICKTICK_TICKTICK_UPDATE_PROJECT_INPUT
  UPDATE_PROJECT: TICKTICK_UPDATE_PROJECT_INPUT
  UPDATE_TASK: TICKTICK_UPDATE_TASK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TICKTICK".
 */
export type TICKTICK_TOOL_OUTPUTS = {
  COMPLETE_TASK: TICKTICK_COMPLETE_TASK_OUTPUT
  CREATE_TASK: TICKTICK_CREATE_TASK_OUTPUT
  DELETE_TASK: TICKTICK_DELETE_TASK_OUTPUT
  GET_USER_PROJECT: TICKTICK_GET_USER_PROJECT_OUTPUT
  TICKTICK_COMPLETE_TASK: TICKTICK_TICKTICK_COMPLETE_TASK_OUTPUT
  TICKTICK_CREATE_PROJECT: TICKTICK_TICKTICK_CREATE_PROJECT_OUTPUT
  TICKTICK_DELETE_PROJECT: TICKTICK_TICKTICK_DELETE_PROJECT_OUTPUT
  TICKTICK_GET_PROJECT_WITH_DATA: TICKTICK_TICKTICK_GET_PROJECT_WITH_DATA_OUTPUT
  TICKTICK_OAUTH2_AUTHORIZATION_STEP1: TICKTICK_TICKTICK_OAUTH2_AUTHORIZATION_STEP1_OUTPUT
  TICKTICK_OAUTH2_AUTHORIZATION_STEP_1: TICKTICK_TICKTICK_OAUTH2_AUTHORIZATION_STEP_1_OUTPUT
  TICKTICK_UPDATE_PROJECT: TICKTICK_TICKTICK_UPDATE_PROJECT_OUTPUT
  UPDATE_PROJECT: TICKTICK_UPDATE_PROJECT_OUTPUT
  UPDATE_TASK: TICKTICK_UPDATE_TASK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TICKTICK toolkit.
 */
export const TICKTICK = {
  slug: "ticktick",
  tools: {
    /**
     * Tool to mark a task as complete. use after confirming the task is done.
     */
    COMPLETE_TASK: "TICKTICK_COMPLETE_TASK",
    /**
     * Tool to create a new task in ticktick. use after you have task details such as title, dates, and optional reminders or subtasks.
     */
    CREATE_TASK: "TICKTICK_CREATE_TASK",
    /**
     * Tool to delete a specific task. use when you need to remove a task from a project after confirming both project and task ids.
     */
    DELETE_TASK: "TICKTICK_DELETE_TASK",
    /**
     * Tool to retrieve all projects for the user. use when you need to list available projects for selection.
     */
    GET_USER_PROJECT: "TICKTICK_GET_USER_PROJECT",
    /**
     * Tool to mark a specific task as complete. use after confirming the task is done.
     */
    TICKTICK_COMPLETE_TASK: "TICKTICK_TICKTICK_COMPLETE_TASK",
    /**
     * Tool to create a new project in ticktick. use when you need to programmatically add a project after obtaining a valid access token.
     */
    TICKTICK_CREATE_PROJECT: "TICKTICK_TICKTICK_CREATE_PROJECT",
    /**
     * Tool to delete a specific project. use when you have confirmed the project id and intend to permanently remove it. example: "delete the project with id 6226ff9877acee87727f6bca".
     */
    TICKTICK_DELETE_PROJECT: "TICKTICK_TICKTICK_DELETE_PROJECT",
    /**
     * Tool to retrieve a project and its associated data (tasks, columns). use when you need full project details including its tasks and columns after selecting a project id.
     */
    TICKTICK_GET_PROJECT_WITH_DATA: "TICKTICK_TICKTICK_GET_PROJECT_WITH_DATA",
    /**
     * Tool to generate the ticktick oauth2 authorization url. use to redirect the user to obtain the authorization code (step 1).
     */
    TICKTICK_OAUTH2_AUTHORIZATION_STEP1: "TICKTICK_TICKTICK_OAUTH2_AUTHORIZATION_STEP1",
    /**
     * Tool to redirect user to ticktick authorization page to obtain authorization code. use when initiating the oauth2 flow before exchanging the code.
     */
    TICKTICK_OAUTH2_AUTHORIZATION_STEP_1: "TICKTICK_TICKTICK_OAUTH2_AUTHORIZATION_STEP_1",
    /**
     * Tool to update an existing project. use when you need to modify project details like name, color, sort order, view mode, or kind after selecting a project id.
     */
    TICKTICK_UPDATE_PROJECT: "TICKTICK_TICKTICK_UPDATE_PROJECT",
    /**
     * Tool to update an existing project. use when you need to modify project details like name, color, sort order, view mode, or kind after selecting a project id.
     */
    UPDATE_PROJECT: "TICKTICK_UPDATE_PROJECT",
    /**
     * Tool to update an existing task. use after confirming the taskid and projectid.
     */
    UPDATE_TASK: "TICKTICK_UPDATE_TASK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TICKTICK".
 */
export type TICKTICK_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TICKTICK".
 */
export type TICKTICK_TRIGGER_EVENTS = {}
