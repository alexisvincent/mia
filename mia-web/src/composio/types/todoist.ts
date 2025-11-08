import { type TriggerEvent } from "@composio/core"

// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TODOIST's TODOIST_ADD_WORKSPACE tool input.
 */
type TODOIST_ADD_WORKSPACE_INPUT = {
  /**
   * Color
   * @description Color ID for the workspace (optional).
   * @default null
   */
  color: number | null;
  /**
   * Icon
   * @description Icon for the workspace (optional).
   * @default null
   */
  icon: string | null;
  /**
   * Name
   * @description Name of the new workspace.
   */
  name?: string;
  /**
   * Temp Id
   * @description Temporary identifier to map the command to the created resource. If omitted, a new UUID is generated.
   * @default null
   */
  temp_id: string | null;
  /**
   * Uuid
   * @description UUID for this command for idempotency. If omitted, a new UUID is generated.
   * @default null
   */
  uuid: string | null;
};

/**
 * Type of TODOIST's TODOIST_ADD_WORKSPACE tool output.
 */
type TODOIST_ADD_WORKSPACE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Sync status of the command, typically 'ok'.
       */
      status: string;
      /**
       * Workspace Id
       * @description ID of the newly created workspace.
       */
      workspace_id: string;
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
 * Type of TODOIST's TODOIST_CLOSE_TASK tool input.
 */
type TODOIST_CLOSE_TASK_INPUT = {
  /**
   * Task Id
   * @description The ID of the task to close.
   */
  task_id?: string;
};

/**
 * Type of TODOIST's TODOIST_CLOSE_TASK tool output.
 */
type TODOIST_CLOSE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Whether the task was closed successfully.
       * @default true
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
 * Type of TODOIST's TODOIST_CREATE_COMMENT tool input.
 */
type TODOIST_CREATE_COMMENT_INPUT = {
  /**
   * Content
   * @description The content of the comment.
   */
  content?: string;
  /**
   * Project Id
   * @description The ID of the project to attach the comment to. Required if task_id is not provided.
   * @default null
   */
  project_id: string | null;
  /**
   * Task Id
   * @description The ID of the task to attach the comment to. Required if project_id is not provided.
   * @default null
   */
  task_id: string | null;
};

/**
 * Type of TODOIST's TODOIST_CREATE_COMMENT tool output.
 */
type TODOIST_CREATE_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attachment
       * @description Attachment info if present.
       * @default null
       */
      attachment: {
          /**
           * File Name
           * @description The name of the attached file.
           * @default null
           */
          file_name: string | null;
          /**
           * File Type
           * @description The MIME type of the attached file.
           * @default null
           */
          file_type: string | null;
          /**
           * File Url
           * @description The URL to download the attached file.
           * @default null
           */
          file_url: string | null;
          /**
           * Resource Type
           * @description The type of the resource (e.g., 'file').
           * @default null
           */
          resource_type: string | null;
      } | null;
      /**
       * Content
       * @description The content of the comment.
       */
      content: string;
      /**
       * Id
       * @description The ID of the created comment.
       */
      id: string;
      /**
       * Posted At
       * @description The date and time when the comment was posted (ISO 8601 format).
       */
      posted_at: string;
      /**
       * Project Id
       * @description The ID of the project the comment belongs to.
       * @default null
       */
      project_id: string | null;
      /**
       * Task Id
       * @description The ID of the task the comment belongs to.
       * @default null
       */
      task_id: string | null;
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
 * Type of TODOIST's TODOIST_CREATE_LABEL tool input.
 */
type TODOIST_CREATE_LABEL_INPUT = {
  /**
   * TodoistColor
   * @description Color of the label. See https://developer.todoist.com/guides/#colors for available colors.
   * @default null
   * @enum {integer|null}
   */
  color: 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | null;
  /**
   * Is Favorite
   * @description Whether the label is a favorite.
   * @default null
   */
  is_favorite: boolean | null;
  /**
   * Name
   * @description Name of the label.
   */
  name?: string;
  /**
   * Order
   * @description The order of the label in the list.
   * @default null
   */
  order: number | null;
};

/**
 * Type of TODOIST's TODOIST_CREATE_LABEL tool output.
 */
type TODOIST_CREATE_LABEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Color
       * @description The color ID of the label.
       */
      color: number;
      /**
       * Id
       * @description The ID of the newly created label.
       */
      id: number;
      /**
       * Is Deleted
       * @description Whether the label is deleted.
       */
      is_deleted: boolean;
      /**
       * Is Favorite
       * @description Whether the label is a favorite.
       */
      is_favorite: boolean;
      /**
       * Name
       * @description The name of the label.
       */
      name: string;
      /**
       * Order
       * @description The order of the label in the list.
       */
      order: number;
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
 * Type of TODOIST's TODOIST_CREATE_PROJECT tool input.
 */
type TODOIST_CREATE_PROJECT_INPUT = {
  /**
   * ProjectColor
   * @description Enum for project colors. Names are based on Todoist's standard palette.
   * @default null
   * @enum {string|null}
   */
  color: "berry_red" | "red" | "orange" | "yellow" | "olive_green" | "lime_green" | "green" | "mint_green" | "teal" | "sky_blue" | "light_blue" | "blue" | "grape" | "violet" | "lavender" | "magenta" | "salmon" | "charcoal" | "gray" | "taupe" | null;
  /**
   * Favorite
   * @description Whether the project should be marked as a favorite.
   * @default null
   */
  favorite: boolean | null;
  /**
   * Name
   * @description Name of the project.
   */
  name?: string;
  /**
   * Parent Id
   * @description ID of the parent project to create a sub-project. If not set, it's a top-level project.
   * @default null
   */
  parent_id: string | null;
  /**
   * ProjectViewStyle
   * @description Enum for project view styles.
   * @default null
   * @enum {string|null}
   */
  view_style: "list" | "board" | null;
};

/**
 * Type of TODOIST's TODOIST_CREATE_PROJECT tool output.
 */
type TODOIST_CREATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Color
       * @description Project color name or ID.
       */
      color: string;
      /**
       * Comment Count
       * @description Number of comments in the project.
       */
      comment_count: number;
      /**
       * Favorite
       * @description Whether the project is a favorite.
       */
      favorite: boolean;
      /**
       * Id
       * @description Project ID.
       */
      id: string;
      /**
       * Inbox Project
       * @description True if the project is the user's inbox.
       * @default null
       */
      inbox_project: boolean | null;
      /**
       * Is Archived
       * @description Whether the project is archived (usually false for new projects).
       * @default null
       */
      is_archived: boolean | null;
      /**
       * Is Deleted
       * @description Whether the project is deleted (usually false for new projects).
       * @default null
       */
      is_deleted: boolean | null;
      /**
       * Name
       * @description Project name.
       */
      name: string;
      /**
       * Order
       * @description Project's order in the list.
       * @default null
       */
      order: number | null;
      /**
       * Parent Id
       * @description Parent project ID, or null if top-level.
       * @default null
       */
      parent_id: string | null;
      /**
       * Shared
       * @description Whether the project is shared.
       */
      shared: boolean;
      /**
       * Sync Id
       * @description Sync ID for shared projects.
       * @default null
       */
      sync_id: string | null;
      /**
       * Team Inbox
       * @description True if the project is a team inbox.
       * @default null
       */
      team_inbox: boolean | null;
      /**
       * Url
       * @description URL to access this project in Todoist.
       * @default null
       */
      url: string | null;
      /**
       * ProjectViewStyle
       * @description Enum for project view styles.
       * @default null
       * @enum {string|null}
       */
      view_style: "list" | "board" | null;
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
 * Type of TODOIST's TODOIST_CREATE_SECTION tool input.
 */
type TODOIST_CREATE_SECTION_INPUT = {
  /**
   * Name
   * @description Name of the new section.
   */
  name?: string;
  /**
   * Order
   * @description Position of this section within the project. Sections with lower values appear first.
   * @default null
   */
  order: number | null;
  /**
   * Project Id
   * @description ID of the project to create the section in.
   */
  project_id?: number;
};

/**
 * Type of TODOIST's TODOIST_CREATE_SECTION tool output.
 */
type TODOIST_CREATE_SECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the section.
       */
      id: number;
      /**
       * Name
       * @description Name of the section.
       */
      name: string;
      /**
       * Order
       * @description Order of the section within the project.
       */
      order: number;
      /**
       * Project Id
       * @description Project ID this section belongs to.
       */
      project_id: number;
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
 * Type of TODOIST's TODOIST_CREATE_TASK tool input.
 */
type TODOIST_CREATE_TASK_INPUT = {
  /**
   * Assignee Id
   * @description The responsible user ID (only for shared tasks).
   * @default null
   */
  assignee_id: string | null;
  /**
   * Content
   * @description Task content/title. Can contain markdown-formatted text and hyperlinks.
   */
  content?: string;
  /**
   * Description
   * @description Task description. Can contain markdown-formatted text and hyperlinks.
   * @default null
   */
  description: string | null;
  /**
   * Due Date
   * @description Specific date in YYYY-MM-DD format relative to user's timezone.
   * @default null
   */
  due_date: string | null;
  /**
   * Due Datetime
   * @description Specific date and time in RFC3339 format in UTC.
   * @default null
   */
  due_datetime: string | null;
  /**
   * Due Lang
   * @description 2-letter code specifying language if due_string is not in English.
   * @default null
   */
  due_lang: string | null;
  /**
   * Due String
   * @description Human defined task due date (e.g., 'next Monday', 'Tomorrow'). Value is set using local time.
   * @default null
   */
  due_string: string | null;
  /**
   * Duration
   * @description Positive integer for task duration amount.
   * @default null
   */
  duration: number | null;
  /**
   * Duration Unit
   * @description Unit for duration - either 'minute' or 'day'.
   * @default null
   */
  duration_unit: string | null;
  /**
   * Labels
   * @description The task's labels (list of names for personal/shared labels).
   * @default null
   */
  labels: string[] | null;
  /**
   * Order
   * @description Non-zero integer value used to sort tasks under the same parent.
   * @default null
   */
  order: number | null;
  /**
   * Parent Id
   * @description Parent task ID.
   * @default null
   */
  parent_id: string | null;
  /**
   * Priority
   * @description Task priority from 1 (normal) to 4 (urgent).
   * @default null
   */
  priority: number | null;
  /**
   * Project Id
   * @description Project ID of the task. If not set, task is put to user's Inbox.
   * @default null
   */
  project_id: string | null;
  /**
   * Section Id
   * @description ID of section to put task into.
   * @default null
   */
  section_id: string | null;
};

/**
 * Type of TODOIST's TODOIST_CREATE_TASK tool output.
 */
type TODOIST_CREATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Task content.
       */
      content: string;
      /**
       * Description
       * @description Task description.
       */
      description: string;
      /**
       * Id
       * @description Task ID.
       */
      id: string;
      /**
       * Is Completed
       * @description Whether the task is completed.
       */
      is_completed: boolean;
      /**
       * Labels
       * @description List of task labels.
       */
      labels: string[];
      /**
       * Priority
       * @description Task priority from 1 (normal) to 4 (urgent).
       */
      priority: number;
      /**
       * Url
       * @description URL to access this task in Todoist.
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
 * Type of TODOIST's TODOIST_DELETE_LABEL tool input.
 */
type TODOIST_DELETE_LABEL_INPUT = {
  /**
   * Label Id
   * @description The ID of the label to delete.
   */
  label_id?: string;
};

/**
 * Type of TODOIST's TODOIST_DELETE_LABEL tool output.
 */
type TODOIST_DELETE_LABEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Whether the label was successfully deleted.
       * @default true
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
 * Type of TODOIST's TODOIST_DELETE_PROJECT tool input.
 */
type TODOIST_DELETE_PROJECT_INPUT = {
  /**
   * Project Id
   * @description The ID of the project to delete.
   */
  project_id?: string;
};

/**
 * Type of TODOIST's TODOIST_DELETE_PROJECT tool output.
 */
type TODOIST_DELETE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Whether the project was successfully deleted.
       * @default true
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
 * Type of TODOIST's TODOIST_DELETE_SECTION tool input.
 */
type TODOIST_DELETE_SECTION_INPUT = {
  /**
   * Section Id
   * @description The ID of the section to delete.
   */
  section_id?: string;
};

/**
 * Type of TODOIST's TODOIST_DELETE_SECTION tool output.
 */
type TODOIST_DELETE_SECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Whether the section was successfully deleted.
       * @default true
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
 * Type of TODOIST's TODOIST_DELETE_TASK tool input.
 */
type TODOIST_DELETE_TASK_INPUT = {
  /**
   * Task Id
   * @description The ID of the task to delete.
   */
  task_id?: string;
};

/**
 * Type of TODOIST's TODOIST_DELETE_TASK tool output.
 */
type TODOIST_DELETE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Whether the task was successfully deleted.
       * @default true
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
 * Type of TODOIST's TODOIST_GET_ALL_COMMENTS tool input.
 */
type TODOIST_GET_ALL_COMMENTS_INPUT = {
  /**
   * Project Id
   * @description The ID of the project for which to retrieve comments.
   * @default null
   */
  project_id: string | null;
  /**
   * Task Id
   * @description The ID of the task for which to retrieve comments.
   * @default null
   */
  task_id: string | null;
};

/**
 * Type of TODOIST's TODOIST_GET_ALL_COMMENTS tool output.
 */
type TODOIST_GET_ALL_COMMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Comments
       * @description A list of comment objects.
       */
      comments: {
          /**
           * Attachment
           * @description An object containing information about the attachment if one exists.
           * @default null
           */
          attachment: {
              /**
               * File Name
               * @description The name of the attached file.
               * @default null
               */
              file_name: string | null;
              /**
               * File Type
               * @description The MIME type of the attached file.
               * @default null
               */
              file_type: string | null;
              /**
               * File Url
               * @description The URL to download the attached file.
               * @default null
               */
              file_url: string | null;
              /**
               * Resource Type
               * @description The type of the resource (e.g., "file").
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * Content
           * @description The content of the comment.
           */
          content: string;
          /**
           * Id
           * @description The ID of the comment.
           */
          id: string;
          /**
           * Posted At
           * @description The date and time when the comment was posted (ISO 8601 format).
           */
          posted_at: string;
          /**
           * Project Id
           * @description The ID of the project the comment belongs to (null if it's a task comment).
           * @default null
           */
          project_id: string | null;
          /**
           * Task Id
           * @description The ID of the task the comment belongs to (null if it's a project comment).
           * @default null
           */
          task_id: string | null;
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
 * Type of TODOIST's TODOIST_GET_ALL_LABELS tool input.
 */
type TODOIST_GET_ALL_LABELS_INPUT = object;

/**
 * Type of TODOIST's TODOIST_GET_ALL_LABELS tool output.
 */
type TODOIST_GET_ALL_LABELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Labels
       * @description List of all labels.
       */
      labels: {
          /**
           * Color
           * @description The color of the label icon.
           */
          color: string;
          /**
           * Id
           * @description Label ID.
           */
          id: string;
          /**
           * Is Favorite
           * @description Whether the label is a favorite.
           */
          is_favorite: boolean;
          /**
           * Name
           * @description Label name.
           */
          name: string;
          /**
           * Order
           * @description Number used by clients to sort list of labels.
           */
          order: number;
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
 * Type of TODOIST's TODOIST_GET_ALL_PROJECTS tool input.
 */
type TODOIST_GET_ALL_PROJECTS_INPUT = object;

/**
 * Type of TODOIST's TODOIST_GET_ALL_PROJECTS tool output.
 */
type TODOIST_GET_ALL_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Projects
       * @description List of all projects
       */
      projects: {
          /**
           * Color
           * @description The color of the project icon
           */
          color: string;
          /**
           * Comment Count
           * @description Number of project comments
           */
          comment_count: number;
          /**
           * Id
           * @description Project ID
           */
          id: string;
          /**
           * Is Favorite
           * @description Whether the project is a favorite
           */
          is_favorite: boolean;
          /**
           * Is Inbox Project
           * @description Whether the project is the user's Inbox
           */
          is_inbox_project: boolean;
          /**
           * Is Shared
           * @description Whether the project is shared
           */
          is_shared: boolean;
          /**
           * Is Team Inbox
           * @description Whether the project is the Team Inbox
           */
          is_team_inbox: boolean;
          /**
           * Name
           * @description Project name
           */
          name: string;
          /**
           * Order
           * @description Project position under the same parent
           */
          order: number;
          /**
           * Parent Id
           * @description ID of parent project (null for top-level projects)
           * @default null
           */
          parent_id: string | null;
          /**
           * Url
           * @description URL to access the project in Todoist
           */
          url: string;
          /**
           * View Style
           * @description Display style ('list' or 'board')
           */
          view_style: string;
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
 * Type of TODOIST's TODOIST_GET_ALL_SECTIONS tool input.
 */
type TODOIST_GET_ALL_SECTIONS_INPUT = {
  /**
   * Project Id
   * @description The ID of the project to retrieve sections from.
   */
  project_id?: string;
};

/**
 * Type of TODOIST's TODOIST_GET_ALL_SECTIONS tool output.
 */
type TODOIST_GET_ALL_SECTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Sections
       * @description List of sections in the specified project.
       */
      sections: {
          /**
           * Id
           * @description Section ID.
           */
          id: string;
          /**
           * Is Deleted
           * @description Whether the section is deleted.
           */
          is_deleted: boolean;
          /**
           * Name
           * @description Name of the section.
           */
          name: string;
          /**
           * Order
           * @description Order of the section.
           */
          order: number;
          /**
           * Project Id
           * @description The ID of the project this section belongs to.
           */
          project_id: string;
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
 * Type of TODOIST's TODOIST_GET_ALL_TASKS tool input.
 */
type TODOIST_GET_ALL_TASKS_INPUT = {
  /**
   * Filter
   * @description Filter tasks based on filter query (same as UI).
   * @default null
   */
  filter: string | null;
  /**
   * Ids
   * @description List of task IDs to retrieve.
   * @default null
   */
  ids: number[] | null;
  /**
   * Lang
   * @description Language code for parsing date/times in queries.
   * @default null
   */
  lang: string | null;
};

/**
 * Type of TODOIST's TODOIST_GET_ALL_TASKS tool output.
 */
type TODOIST_GET_ALL_TASKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tasks
       * @description List of tasks.
       */
      tasks: {
          /**
           * Assignee Id
           * @description The ID of the user to whom the task is assigned.
           * @default null
           */
          assignee_id: string | null;
          /**
           * Assigner Id
           * @description The ID of the user who assigned the task.
           * @default null
           */
          assigner_id: string | null;
          /**
           * Comment Count
           * @description Number of comments on the task.
           * @default null
           */
          comment_count: number | null;
          /**
           * Content
           * @description Content of the task.
           */
          content: string;
          /**
           * Created At
           * @description The date and time when the task was created.
           * @default null
           */
          created_at: string | null;
          /**
           * Creator Id
           * @description The ID of the user who created the task.
           * @default null
           */
          creator_id: string | null;
          /**
           * Description
           * @description Description of the task.
           * @default null
           */
          description: string | null;
          /**
           * DueDate
           * @description Due date info (null if none).
           * @default null
           */
          due: {
              /** Date */
              date: string;
              /**
               * Datetime
               * @default null
               */
              datetime: string | null;
              /** String */
              string: string;
              /**
               * Timezone
               * @default null
               */
              timezone: string | null;
          } | null;
          /**
           * Id
           * @description Task ID.
           */
          id: string;
          /**
           * Is Completed
           * @description Completion status.
           */
          is_completed: boolean;
          /**
           * Label Ids
           * @description List of label IDs.
           * @default null
           */
          label_ids: string[] | null;
          /**
           * Order
           * @description Task order in the list.
           * @default null
           */
          order: number | null;
          /**
           * Parent Id
           * @description Parent task ID (if any).
           * @default null
           */
          parent_id: string | null;
          /**
           * Priority
           * @description Task priority (1-4).
           * @default null
           */
          priority: number | null;
          /**
           * Project Id
           * @description Project ID the task belongs to.
           * @default null
           */
          project_id: string | null;
          /**
           * Section Id
           * @description Section ID.
           * @default null
           */
          section_id: string | null;
          /**
           * Url
           * @description URL to open task in browser.
           * @default null
           */
          url: string | null;
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
 * Type of TODOIST's TODOIST_GET_BACKUPS tool input.
 */
type TODOIST_GET_BACKUPS_INPUT = object;

/**
 * Type of TODOIST's TODOIST_GET_BACKUPS tool output.
 */
type TODOIST_GET_BACKUPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Backups
       * @description List of available backup archive entries.
       */
      backups: {
          /**
           * Added Date
           * @description ISO 8601 timestamp when the backup was created.
           */
          added_date: string;
          /**
           * Backup Id
           * @description Unique ID of the backup file.
           */
          backup_id: number;
          /**
           * File Url
           * @description URL to download the backup file.
           */
          file_url: string;
          /**
           * Project Name
           * @description Name of the backed-up project.
           */
          project_name: string;
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
 * Type of TODOIST's TODOIST_GET_COMMENT tool input.
 */
type TODOIST_GET_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description The ID of the comment to retrieve.
   */
  comment_id?: string;
};

/**
 * Type of TODOIST's TODOIST_GET_COMMENT tool output.
 */
type TODOIST_GET_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attachment
       * @description An object containing information about the attachment if one exists.
       * @default null
       */
      attachment: {
          /**
           * File Name
           * @description The name of the attached file.
           * @default null
           */
          file_name: string | null;
          /**
           * File Type
           * @description The MIME type of the attached file.
           * @default null
           */
          file_type: string | null;
          /**
           * File Url
           * @description The URL to download the attached file.
           * @default null
           */
          file_url: string | null;
          /**
           * Resource Type
           * @description The type of the resource (e.g., "file").
           * @default null
           */
          resource_type: string | null;
      } | null;
      /**
       * Content
       * @description The content of the comment.
       */
      content: string;
      /**
       * Id
       * @description The ID of the comment.
       */
      id: string;
      /**
       * Posted At
       * @description The date and time when the comment was posted (ISO 8601 format).
       */
      posted_at: string;
      /**
       * Project Id
       * @description The ID of the project the comment belongs to (null if it's a task comment).
       * @default null
       */
      project_id: string | null;
      /**
       * Task Id
       * @description The ID of the task the comment belongs to (null if it's a project comment).
       * @default null
       */
      task_id: string | null;
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
 * Type of TODOIST's TODOIST_GET_LABEL tool input.
 */
type TODOIST_GET_LABEL_INPUT = {
  /**
   * Id
   * @description The ID of the label to retrieve (numeric string).
   */
  id?: string;
};

/**
 * Type of TODOIST's TODOIST_GET_LABEL tool output.
 */
type TODOIST_GET_LABEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Color
       * @description The color of the label icon.
       */
      color: string;
      /**
       * Id
       * @description Label ID.
       */
      id: string;
      /**
       * Is Favorite
       * @description Whether the label is a favorite.
       */
      is_favorite: boolean;
      /**
       * Name
       * @description Label name.
       */
      name: string;
      /**
       * Order
       * @description Number used to sort the label in lists.
       */
      order: number;
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
 * Type of TODOIST's TODOIST_GET_PROJECT tool input.
 */
type TODOIST_GET_PROJECT_INPUT = {
  /**
   * Project Id
   * @description The ID of the project to retrieve.
   */
  project_id?: string;
};

/**
 * Type of TODOIST's TODOIST_GET_PROJECT tool output.
 */
type TODOIST_GET_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Color
       * @description Color of the project icon.
       */
      color: string;
      /**
       * Comment Count
       * @description Number of comments in the project.
       */
      comment_count: number;
      /**
       * Id
       * @description Unique identifier of the project.
       */
      id: string;
      /**
       * Is Favorite
       * @description Whether the project is marked as a favorite.
       */
      is_favorite: boolean;
      /**
       * Is Inbox Project
       * @description Whether this project is the user's Inbox.
       */
      is_inbox_project: boolean;
      /**
       * Is Shared
       * @description Whether the project is shared.
       */
      is_shared: boolean;
      /**
       * Is Team Inbox
       * @description Whether this project is a Team Inbox.
       */
      is_team_inbox: boolean;
      /**
       * Name
       * @description Name of the project.
       */
      name: string;
      /**
       * Order
       * @description Order of the project among siblings.
       */
      order: number;
      /**
       * Parent Id
       * @description ID of the parent project, if any.
       * @default null
       */
      parent_id: string | null;
      /**
       * Url
       * @description URL to access this project in Todoist.
       */
      url: string;
      /**
       * View Style
       * @description Display style of the project ('list' or 'board').
       */
      view_style: string;
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
 * Type of TODOIST's TODOIST_GET_SECTION tool input.
 */
type TODOIST_GET_SECTION_INPUT = {
  /**
   * Section Id
   * @description The ID of the section to retrieve.
   */
  section_id?: string;
};

/**
 * Type of TODOIST's TODOIST_GET_SECTION tool output.
 */
type TODOIST_GET_SECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the section.
       */
      id: string;
      /**
       * Is Deleted
       * @description Whether the section has been deleted.
       */
      is_deleted: boolean;
      /**
       * Name
       * @description Name of the section.
       */
      name: string;
      /**
       * Order
       * @description Order of the section within the project.
       */
      order: number;
      /**
       * Parent Id
       * @description ID of the parent section, if nested.
       * @default null
       */
      parent_id: string | null;
      /**
       * Project Id
       * @description ID of the project this section belongs to.
       */
      project_id: string;
      /**
       * Sync Id
       * @description External sync identifier, if any.
       * @default null
       */
      sync_id: number | null;
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
 * Type of TODOIST's TODOIST_GET_SPECIAL_BACKUPS tool input.
 */
type TODOIST_GET_SPECIAL_BACKUPS_INPUT = object;

/**
 * Type of TODOIST's TODOIST_GET_SPECIAL_BACKUPS tool output.
 */
type TODOIST_GET_SPECIAL_BACKUPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Backups
       * @description List of special backup archives for the user.
       */
      backups: {
          /**
           * Added Date
           * @description ISO 8601 timestamp when the backup was created.
           */
          added_date: string;
          /**
           * Backup Id
           * @description Unique ID of the backup archive.
           */
          backup_id: number;
          /**
           * File Url
           * @description URL to download the backup file.
           */
          file_url: string;
          /**
           * Project Name
           * @description Name of the project included in the backup.
           */
          project_name: string;
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
 * Type of TODOIST's TODOIST_GET_TASK tool input.
 */
type TODOIST_GET_TASK_INPUT = {
  /**
   * Task Id
   * @description The ID of the task to retrieve.
   */
  task_id?: string;
};

/**
 * Type of TODOIST's TODOIST_GET_TASK tool output.
 */
type TODOIST_GET_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assignee Id
       * @description ID of the user assigned to the task, if any.
       * @default null
       */
      assignee_id: string | null;
      /**
       * Assigner Id
       * @description ID of the user who assigned the task, if any.
       * @default null
       */
      assigner_id: string | null;
      /**
       * Comment Count
       * @description Number of comments on the task.
       */
      comment_count: number;
      /**
       * Completed
       * @description Whether the task is completed.
       */
      completed: boolean;
      /**
       * Content
       * @description Content of the task.
       */
      content: string;
      /**
       * Created At
       * @description ISO 8601 timestamp when the task was created.
       */
      created_at: string;
      /**
       * Creator Id
       * @description ID of the user who created the task.
       */
      creator_id: string;
      /**
       * Description
       * @description Detailed description of the task.
       * @default null
       */
      description: string | null;
      /**
       * DueDate
       * @description Model for due date information of a task.
       * @default null
       */
      due: {
          /**
           * Date
           * @description Due date in YYYY-MM-DD format.
           */
          date: string;
          /**
           * Datetime
           * @description Exact due date & time in ISO 8601 format.
           * @default null
           */
          datetime: string | null;
          /**
           * String
           * @description Human-readable due date string (e.g., 'tomorrow at 12').
           */
          string: string;
          /**
           * Timezone
           * @description Timezone for the due datetime (e.g., 'America/New_York').
           * @default null
           */
          timezone: string | null;
      } | null;
      /**
       * Id
       * @description Unique identifier of the task.
       */
      id: string;
      /**
       * Label Ids
       * @description List of label IDs assigned to this task.
       */
      label_ids: string[];
      /**
       * Order
       * @description Order of the task among its siblings.
       */
      order: number;
      /**
       * Parent Id
       * @description ID of the parent task if this is a sub-task.
       * @default null
       */
      parent_id: string | null;
      /**
       * Priority
       * @description Priority level of the task (1 = highest, 4 = lowest).
       */
      priority: number;
      /**
       * Project Id
       * @description ID of the project this task belongs to.
       */
      project_id: string;
      /**
       * Section Id
       * @description ID of the section this task belongs to, if any.
       * @default null
       */
      section_id: string | null;
      /**
       * Url
       * @description URL to access this task in Todoist.
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
 * Type of TODOIST's TODOIST_LIST_ARCHIVED_WORKSPACE_PROJECTS tool input.
 */
type TODOIST_LIST_ARCHIVED_WORKSPACE_PROJECTS_INPUT = {
  /**
   * Limit
   * @description Limit the number of returned projects.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset for pagination.
   * @default null
   */
  offset: number | null;
  /**
   * Project Ids
   * @description List of project IDs to filter the results.
   * @default null
   */
  project_ids: string[] | null;
  /**
   * Since
   * @description Return archived projects updated after this datetime (ISO 8601).
   * @default null
   */
  since: string | null;
  /**
   * Until
   * @description Return archived projects updated before this datetime (ISO 8601).
   * @default null
   */
  until: string | null;
};

/**
 * Type of TODOIST's TODOIST_LIST_ARCHIVED_WORKSPACE_PROJECTS tool output.
 */
type TODOIST_LIST_ARCHIVED_WORKSPACE_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Offset
       * @description Offset for next page, if more results are available.
       * @default null
       */
      next_offset: number | null;
      /**
       * Projects
       * @description List of archived projects.
       */
      projects: {
          /**
           * Color
           * @description The color of the project icon.
           */
          color: string;
          /**
           * Comment Count
           * @description Number of project comments.
           */
          comment_count: number;
          /**
           * Id
           * @description Project ID.
           */
          id: string;
          /**
           * Is Favorite
           * @description Whether the project is a favorite.
           */
          is_favorite: boolean;
          /**
           * Is Inbox Project
           * @description Whether the project is the user's Inbox.
           */
          is_inbox_project: boolean;
          /**
           * Is Shared
           * @description Whether the project is shared.
           */
          is_shared: boolean;
          /**
           * Is Team Inbox
           * @description Whether the project is the Team Inbox.
           */
          is_team_inbox: boolean;
          /**
           * Name
           * @description Project name.
           */
          name: string;
          /**
           * Order
           * @description Project position under the same parent.
           */
          order: number;
          /**
           * Parent Id
           * @description ID of parent project (null for top-level projects).
           * @default null
           */
          parent_id: string | null;
          /**
           * Url
           * @description URL to access the project in Todoist.
           */
          url: string;
          /**
           * View Style
           * @description Display style ('list' or 'board').
           */
          view_style: string;
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
 * Type of TODOIST's TODOIST_LIST_FILTERS tool input.
 */
type TODOIST_LIST_FILTERS_INPUT = {
  /**
   * Sync Token
   * @description Token for incremental sync. Use '*' for full sync.
   * @default *
   */
  sync_token: string;
};

/**
 * Type of TODOIST's TODOIST_LIST_FILTERS tool output.
 */
type TODOIST_LIST_FILTERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Filters
       * @description List of filters for the authenticated user.
       */
      filters: {
          /**
           * Color
           * @description Color code associated with the filter.
           */
          color: number;
          /**
           * Id
           * @description Unique identifier of the filter.
           */
          id: number;
          /**
           * Name
           * @description Name of the filter.
           */
          name: string;
          /**
           * Query
           * @description Query string of the filter.
           */
          query: string;
      }[];
      /**
       * Sync Token
       * @description Next token for incremental sync.
       */
      sync_token: string;
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
 * Type of TODOIST's TODOIST_LIST_PENDING_WORKSPACE_INVITATIONS tool input.
 */
type TODOIST_LIST_PENDING_WORKSPACE_INVITATIONS_INPUT = {
  /**
   * Workspace Id
   * @description ID of the workspace to list pending invitations for.
   */
  workspace_id?: string;
};

/**
 * Type of TODOIST's TODOIST_LIST_PENDING_WORKSPACE_INVITATIONS tool output.
 */
type TODOIST_LIST_PENDING_WORKSPACE_INVITATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Invitations
       * @description List of pending workspace invitation objects.
       */
      invitations: {
          /**
           * Id
           * @description Unique ID of the invitation.
           */
          id: number;
          /**
           * Invitee
           * @description Details of the invitee.
           */
          invitee: {
              /**
               * Email
               * @description Email address of the invitee.
               */
              email: string;
              /**
               * Name
               * @description Name of the invitee (may be null until they accept).
               * @default null
               */
              name: string | null;
          };
          /**
           * Inviter
           * @description Details of the user who sent the invitation.
           */
          inviter: {
              /**
               * Email
               * @description Email address of the inviter.
               */
              email: string;
              /**
               * Id
               * @description User ID of the inviter.
               */
              id: number;
              /**
               * Name
               * @description Name of the inviter.
               */
              name: string;
          };
          /**
           * Sent At
           * @description ISO 8601 timestamp when the invitation was sent.
           */
          sent_at: string;
          /**
           * Status
           * @description Current status of the invitation (e.g., 'pending').
           */
          status: string;
          /**
           * Workspace Id
           * @description Workspace ID the invitation applies to.
           */
          workspace_id: string;
          /**
           * Workspace Name
           * @description Name of the workspace.
           */
          workspace_name: string;
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
 * Type of TODOIST's TODOIST_REOPEN_TASK tool input.
 */
type TODOIST_REOPEN_TASK_INPUT = {
  /**
   * Task Id
   * @description The ID of the task to reopen.
   */
  task_id?: string;
};

/**
 * Type of TODOIST's TODOIST_REOPEN_TASK tool output.
 */
type TODOIST_REOPEN_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Success message after reopening the task.
       * @default Task reopened successfully.
       */
      message: string;
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
 * Type of TODOIST's TODOIST_UPDATE_COMMENT tool input.
 */
type TODOIST_UPDATE_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description The ID of the comment to update.
   */
  comment_id?: string;
  /**
   * Content
   * @description New text content for the comment.
   */
  content?: string;
};

/**
 * Type of TODOIST's TODOIST_UPDATE_COMMENT tool output.
 */
type TODOIST_UPDATE_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description The updated text content of the comment.
       */
      content: string;
      /**
       * Id
       * @description The ID of the updated comment.
       */
      id: string;
      /**
       * Posted At
       * @description Timestamp when the comment was originally posted (ISO 8601).
       */
      posted_at: string;
      /**
       * Posted By Id
       * @description The user ID who originally posted the comment.
       * @default null
       */
      posted_by_id: string | null;
      /**
       * Project Id
       * @description The project ID this comment is associated with, if any.
       * @default null
       */
      project_id: string | null;
      /**
       * Task Id
       * @description The task ID this comment is associated with, if any.
       * @default null
       */
      task_id: string | null;
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
 * Type of TODOIST's TODOIST_UPDATE_PROJECT tool input.
 */
type TODOIST_UPDATE_PROJECT_INPUT = {
  /**
   * Color
   * @description New color ID for the project.
   * @default null
   */
  color: number | null;
  /**
   * Indent
   * @description New indent level for the project (1-4).
   * @default null
   */
  indent: number | null;
  /**
   * Name
   * @description New name for the project.
   * @default null
   */
  name: string | null;
  /**
   * Order
   * @description New order position for the project.
   * @default null
   */
  order: number | null;
  /**
   * Project Id
   * @description The ID of the project to update.
   */
  project_id?: string;
};

/**
 * Type of TODOIST's TODOIST_UPDATE_PROJECT tool output.
 */
type TODOIST_UPDATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Color
       * @description Updated project color ID.
       */
      color: number;
      /**
       * Comment Count
       * @description Number of comments in the project.
       */
      comment_count: number;
      /**
       * Favorite
       * @description Whether the project is a favorite.
       */
      favorite: boolean;
      /**
       * Id
       * @description Project ID.
       */
      id: string;
      /**
       * Indent
       * @description Updated project indent level.
       */
      indent: number;
      /**
       * Name
       * @description Updated project name.
       */
      name: string;
      /**
       * Order
       * @description Updated project order position.
       */
      order: number;
      /**
       * Shared
       * @description Whether the project is shared.
       */
      shared: boolean;
      /**
       * Sync Id
       * @description External sync ID or null.
       * @default null
       */
      sync_id: number | null;
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
 * Type of TODOIST's TODOIST_UPDATE_SECTION tool input.
 */
type TODOIST_UPDATE_SECTION_INPUT = {
  /**
   * Name
   * @description New name for the section. If omitted, the name remains unchanged.
   * @default null
   */
  name: string | null;
  /**
   * Order
   * @description New position of the section within its project (0 is first).
   * @default null
   */
  order: number | null;
  /**
   * Section Id
   * @description The ID of the section to update.
   */
  section_id?: string;
};

/**
 * Type of TODOIST's TODOIST_UPDATE_SECTION tool output.
 */
type TODOIST_UPDATE_SECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The ID of the section.
       */
      id: string;
      /**
       * Name
       * @description The name of the section.
       */
      name: string;
      /**
       * Order
       * @description The section's position in the project.
       */
      order: number;
      /**
       * Project Id
       * @description The ID of the parent project.
       */
      project_id: string;
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
 * Type of TODOIST's TODOIST_UPDATE_TASK tool input.
 */
type TODOIST_UPDATE_TASK_INPUT = {
  /**
   * Assignee Id
   * @description User ID to assign the task to.
   * @default null
   */
  assignee_id: string | null;
  /**
   * Content
   * @description New content for the task.
   * @default null
   */
  content: string | null;
  /**
   * Description
   * @description New description for the task.
   * @default null
   */
  description: string | null;
  /**
   * Due Date
   * @description Due date in YYYY-MM-DD format.
   * @default null
   */
  due_date: string | null;
  /**
   * Due Datetime
   * @description Due date and time in RFC3339 format.
   * @default null
   */
  due_datetime: string | null;
  /**
   * Due Lang
   * @description Language code for parsing `due_string`, e.g., 'en'.
   * @default null
   */
  due_lang: string | null;
  /**
   * Due String
   * @description Human-readable due date string, e.g., 'tomorrow at 12:00'.
   * @default null
   */
  due_string: string | null;
  /**
   * Label Ids
   * @description List of label IDs to assign to the task.
   * @default null
   */
  label_ids: number[] | null;
  /**
   * Priority
   * @description Task priority from 1 (normal) to 4 (urgent).
   * @default null
   */
  priority: number | null;
  /**
   * Task Id
   * @description The ID of the task to update.
   */
  task_id?: string;
};

/**
 * Type of TODOIST's TODOIST_UPDATE_TASK tool output.
 */
type TODOIST_UPDATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Whether the task was updated successfully.
       * @default true
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
 * Type map of all available tool input types for toolkit "TODOIST".
 */
export type TODOIST_TOOL_INPUTS = {
  ADD_WORKSPACE: TODOIST_ADD_WORKSPACE_INPUT
  CLOSE_TASK: TODOIST_CLOSE_TASK_INPUT
  CREATE_COMMENT: TODOIST_CREATE_COMMENT_INPUT
  CREATE_LABEL: TODOIST_CREATE_LABEL_INPUT
  CREATE_PROJECT: TODOIST_CREATE_PROJECT_INPUT
  CREATE_SECTION: TODOIST_CREATE_SECTION_INPUT
  CREATE_TASK: TODOIST_CREATE_TASK_INPUT
  DELETE_LABEL: TODOIST_DELETE_LABEL_INPUT
  DELETE_PROJECT: TODOIST_DELETE_PROJECT_INPUT
  DELETE_SECTION: TODOIST_DELETE_SECTION_INPUT
  DELETE_TASK: TODOIST_DELETE_TASK_INPUT
  GET_ALL_COMMENTS: TODOIST_GET_ALL_COMMENTS_INPUT
  GET_ALL_LABELS: TODOIST_GET_ALL_LABELS_INPUT
  GET_ALL_PROJECTS: TODOIST_GET_ALL_PROJECTS_INPUT
  GET_ALL_SECTIONS: TODOIST_GET_ALL_SECTIONS_INPUT
  GET_ALL_TASKS: TODOIST_GET_ALL_TASKS_INPUT
  GET_BACKUPS: TODOIST_GET_BACKUPS_INPUT
  GET_COMMENT: TODOIST_GET_COMMENT_INPUT
  GET_LABEL: TODOIST_GET_LABEL_INPUT
  GET_PROJECT: TODOIST_GET_PROJECT_INPUT
  GET_SECTION: TODOIST_GET_SECTION_INPUT
  GET_SPECIAL_BACKUPS: TODOIST_GET_SPECIAL_BACKUPS_INPUT
  GET_TASK: TODOIST_GET_TASK_INPUT
  LIST_ARCHIVED_WORKSPACE_PROJECTS: TODOIST_LIST_ARCHIVED_WORKSPACE_PROJECTS_INPUT
  LIST_FILTERS: TODOIST_LIST_FILTERS_INPUT
  LIST_PENDING_WORKSPACE_INVITATIONS: TODOIST_LIST_PENDING_WORKSPACE_INVITATIONS_INPUT
  REOPEN_TASK: TODOIST_REOPEN_TASK_INPUT
  UPDATE_COMMENT: TODOIST_UPDATE_COMMENT_INPUT
  UPDATE_PROJECT: TODOIST_UPDATE_PROJECT_INPUT
  UPDATE_SECTION: TODOIST_UPDATE_SECTION_INPUT
  UPDATE_TASK: TODOIST_UPDATE_TASK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TODOIST".
 */
export type TODOIST_TOOL_OUTPUTS = {
  ADD_WORKSPACE: TODOIST_ADD_WORKSPACE_OUTPUT
  CLOSE_TASK: TODOIST_CLOSE_TASK_OUTPUT
  CREATE_COMMENT: TODOIST_CREATE_COMMENT_OUTPUT
  CREATE_LABEL: TODOIST_CREATE_LABEL_OUTPUT
  CREATE_PROJECT: TODOIST_CREATE_PROJECT_OUTPUT
  CREATE_SECTION: TODOIST_CREATE_SECTION_OUTPUT
  CREATE_TASK: TODOIST_CREATE_TASK_OUTPUT
  DELETE_LABEL: TODOIST_DELETE_LABEL_OUTPUT
  DELETE_PROJECT: TODOIST_DELETE_PROJECT_OUTPUT
  DELETE_SECTION: TODOIST_DELETE_SECTION_OUTPUT
  DELETE_TASK: TODOIST_DELETE_TASK_OUTPUT
  GET_ALL_COMMENTS: TODOIST_GET_ALL_COMMENTS_OUTPUT
  GET_ALL_LABELS: TODOIST_GET_ALL_LABELS_OUTPUT
  GET_ALL_PROJECTS: TODOIST_GET_ALL_PROJECTS_OUTPUT
  GET_ALL_SECTIONS: TODOIST_GET_ALL_SECTIONS_OUTPUT
  GET_ALL_TASKS: TODOIST_GET_ALL_TASKS_OUTPUT
  GET_BACKUPS: TODOIST_GET_BACKUPS_OUTPUT
  GET_COMMENT: TODOIST_GET_COMMENT_OUTPUT
  GET_LABEL: TODOIST_GET_LABEL_OUTPUT
  GET_PROJECT: TODOIST_GET_PROJECT_OUTPUT
  GET_SECTION: TODOIST_GET_SECTION_OUTPUT
  GET_SPECIAL_BACKUPS: TODOIST_GET_SPECIAL_BACKUPS_OUTPUT
  GET_TASK: TODOIST_GET_TASK_OUTPUT
  LIST_ARCHIVED_WORKSPACE_PROJECTS: TODOIST_LIST_ARCHIVED_WORKSPACE_PROJECTS_OUTPUT
  LIST_FILTERS: TODOIST_LIST_FILTERS_OUTPUT
  LIST_PENDING_WORKSPACE_INVITATIONS: TODOIST_LIST_PENDING_WORKSPACE_INVITATIONS_OUTPUT
  REOPEN_TASK: TODOIST_REOPEN_TASK_OUTPUT
  UPDATE_COMMENT: TODOIST_UPDATE_COMMENT_OUTPUT
  UPDATE_PROJECT: TODOIST_UPDATE_PROJECT_OUTPUT
  UPDATE_SECTION: TODOIST_UPDATE_SECTION_OUTPUT
  UPDATE_TASK: TODOIST_UPDATE_TASK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Type of TODOIST's NEW_TASK_CREATED trigger payload.
 */
type TODOIST_NEW_TASK_CREATED_PAYLOAD = {
  /**
   * Event Type
   * @description Type of event
   * @default task_added
   */
  event_type: string;
  /**
   * Task
   * @description The Todoist task object
   */
  task?: {
      [key: string]: unknown;
  };
};

/**
 * Map of Composio's TODOIST toolkit.
 */
export const TODOIST = {
  slug: "todoist",
  tools: {
    /**
     * Tool to create a new workspace in todoist. use when you need a separate workspace to organize projects. generates uuid and temp id automatically.
     */
    ADD_WORKSPACE: "TODOIST_ADD_WORKSPACE",
    /**
     * This tool marks an existing task as completed in todoist. it requires the `task id` of the task to be closed.
     */
    CLOSE_TASK: "TODOIST_CLOSE_TASK",
    /**
     * Tool to create a new comment in todoist. use when you need to add a note to a specific task or project after confirming its id.
     */
    CREATE_COMMENT: "TODOIST_CREATE_COMMENT",
    /**
     * Creates a new label.
     */
    CREATE_LABEL: "TODOIST_CREATE_LABEL",
    /**
     * Creates a new project in todoist.
     */
    CREATE_PROJECT: "TODOIST_CREATE_PROJECT",
    /**
     * Tool to create a new section within a specific project. use when you need to group tasks under a new heading in a project.
     */
    CREATE_SECTION: "TODOIST_CREATE_SECTION",
    /**
     * Create a new task in todoist. this action allows users to create tasks with various parameters including content, due dates, priority, and more. the task can be created in a specific project, section, or as a subtask of another task.
     */
    CREATE_TASK: "TODOIST_CREATE_TASK",
    /**
     * Tool to delete a specific label. use when you need to permanently remove an unused label by its id after confirming it's not in use. example: "delete label with id 2298391482".
     */
    DELETE_LABEL: "TODOIST_DELETE_LABEL",
    /**
     * Tool to delete a specific todoist project. use when you need to permanently remove a project by its id.
     */
    DELETE_PROJECT: "TODOIST_DELETE_PROJECT",
    /**
     * Tool to delete a specific section. use when you need to permanently remove an unused section by its id after confirming it's not in use. example: "delete section with id 82181370".
     */
    DELETE_SECTION: "TODOIST_DELETE_SECTION",
    /**
     * Delete a task from todoist. this action permanently removes the task and all its subtasks.
     */
    DELETE_TASK: "TODOIST_DELETE_TASK",
    /**
     * This tool retrieves all comments associated with a specific task or project in todoist. it requires either a task id or a project id to fetch the comments, and it returns a json array of comment objects with details such as id, posted at, content, and attachment information.
     */
    GET_ALL_COMMENTS: "TODOIST_GET_ALL_COMMENTS",
    /**
     * Get all personal labels from todoist. this action retrieves all personal labels from a user's todoist account. each label contains information like name, color, order and favorite status. api documentation: https://developer.todoist.com/rest/v2/#get-all-personal-labels
     */
    GET_ALL_LABELS: "TODOIST_GET_ALL_LABELS",
    /**
     * Get all projects from a user's todoist account. this tool retrieves all projects from the authenticated user's todoist account. the response includes details like project id, name, color, parent project, sharing status, and other metadata for each project.
     */
    GET_ALL_PROJECTS: "TODOIST_GET_ALL_PROJECTS",
    /**
     * Tool to retrieve all sections for a specific project in todoist. use when you need to list section structure within a project after selecting the project.
     */
    GET_ALL_SECTIONS: "TODOIST_GET_ALL_SECTIONS",
    /**
     * Fetches all tasks from todoist and returns their details.
     */
    GET_ALL_TASKS: "TODOIST_GET_ALL_TASKS",
    /**
     * Tool to list all available backup archives for the user. use when you need to retrieve and review all existing backups.
     */
    GET_BACKUPS: "TODOIST_GET_BACKUPS",
    /**
     * Tool to retrieve details of a specific comment by its comment id. use when you need full information (content, timestamp, or attachment) about a known comment.
     */
    GET_COMMENT: "TODOIST_GET_COMMENT",
    /**
     * Tool to retrieve a specific label by its id. use when you need detailed info about a label after you have its id.
     */
    GET_LABEL: "TODOIST_GET_LABEL",
    /**
     * Tool to retrieve a specific project by its id. use when you have a project id and need its metadata before display or update.
     */
    GET_PROJECT: "TODOIST_GET_PROJECT",
    /**
     * Tool to retrieve a specific section by its id. use when you have a section id and need its metadata before display or update.
     */
    GET_SECTION: "TODOIST_GET_SECTION",
    /**
     * Tool to list special backup archives for the user. use when you need to retrieve all project backups for the authenticated user after creating or managing projects.
     */
    GET_SPECIAL_BACKUPS: "TODOIST_GET_SPECIAL_BACKUPS",
    /**
     * Tool to retrieve a specific task by its id. use when you need to fetch all details of an existing task before processing or display.
     */
    GET_TASK: "TODOIST_GET_TASK",
    /**
     * Tool to list all archived projects in a workspace. use when you need to retrieve archived workspace projects with optional filters or pagination.
     */
    LIST_ARCHIVED_WORKSPACE_PROJECTS: "TODOIST_LIST_ARCHIVED_WORKSPACE_PROJECTS",
    /**
     * Tool to list all filters for the authenticated user. use when you need to retrieve the current set of custom filters.
     */
    LIST_FILTERS: "TODOIST_LIST_FILTERS",
    /**
     * Tool to list pending invitation emails in a workspace. use when you need to check which email invites are still pending acceptance in a workspace.
     */
    LIST_PENDING_WORKSPACE_INVITATIONS: "TODOIST_LIST_PENDING_WORKSPACE_INVITATIONS",
    /**
     * This tool reopens a previously completed task.
     */
    REOPEN_TASK: "TODOIST_REOPEN_TASK",
    /**
     * Tool to update a specific comment's content. use when you need to correct or clarify an existing comment after confirming its id and the new text.
     */
    UPDATE_COMMENT: "TODOIST_UPDATE_COMMENT",
    /**
     * Tool to update a specific project's attributes such as name, color, indent, and order. use when you need to rename or reorder a project after reviewing its current settings. example: "update project 2203306141 name to 'q1 goals'."
     */
    UPDATE_PROJECT: "TODOIST_UPDATE_PROJECT",
    /**
     * Tool to update a specific section's attributes such as name and order. use when you need to rename or reorder a section after confirming its id.
     */
    UPDATE_SECTION: "TODOIST_UPDATE_SECTION",
    /**
     * Tool to update an existing task's properties. use when you need to modify a task's details after confirming its id and new values.
     */
    UPDATE_TASK: "TODOIST_UPDATE_TASK",
  },
  triggerTypes: {
    /**
     * Trigger when a new task is added to Todoist.
     */
    NEW_TASK_CREATED: "TODOIST_NEW_TASK_CREATED",
  },
}

/**
 * Type map of all available trigger payloads for toolkit "TODOIST".
 */
export type TODOIST_TRIGGER_PAYLOADS = {
  NEW_TASK_CREATED: TODOIST_NEW_TASK_CREATED_PAYLOAD
}

/**
 * Type map of all available trigger events for toolkit "TODOIST".
 */
export type TODOIST_TRIGGER_EVENTS = {
  NEW_TASK_CREATED: TriggerEvent<TODOIST_NEW_TASK_CREATED_PAYLOAD>
}
