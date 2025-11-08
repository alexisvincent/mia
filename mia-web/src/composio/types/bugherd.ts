// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BUGHERD's BUGHERD_ADD_GUEST_TO_PROJECT tool input.
 */
type BUGHERD_ADD_GUEST_TO_PROJECT_INPUT = {
  /**
   * Email
   * Format: email
   * @description Email address to invite a new guest (client). Mutually exclusive with 'user_id'.
   */
  email?: unknown;
  /**
   * Project Id
   * @description ID of the project to add the guest to
   */
  project_id?: number;
  /**
   * User Id
   * @description ID of an existing guest (client) to add. Mutually exclusive with 'email'.
   * @default null
   */
  user_id: number | null;
};

/**
 * Type of BUGHERD's BUGHERD_ADD_GUEST_TO_PROJECT tool output.
 */
type BUGHERD_ADD_GUEST_TO_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Guest
       * @description The added or invited guest (client)
       */
      guest: {
          /**
           * Avatar Url
           * @description URL to the guest's avatar
           * @default null
           */
          avatar_url: string | null;
          /**
           * Email
           * @description Email address of the guest
           */
          email: string;
          /**
           * First Name
           * @description First name of the guest
           * @default null
           */
          first_name: string | null;
          /**
           * Id
           * @description ID of the guest (client)
           */
          id: number;
          /**
           * Initial
           * @description Initials of the guest
           * @default null
           */
          initial: string | null;
          /**
           * Last Name
           * @description Last name of the guest
           * @default null
           */
          last_name: string | null;
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
 * Type of BUGHERD's BUGHERD_ADD_MEMBER_TO_PROJECT tool input.
 */
type BUGHERD_ADD_MEMBER_TO_PROJECT_INPUT = {
  /**
   * Project Id
   * @description The ID of the project to which the member will be added.
   */
  project_id?: number;
  /**
   * User Id
   * @description The ID of the existing user to add to the project.
   */
  user_id?: number;
};

/**
 * Type of BUGHERD's BUGHERD_ADD_MEMBER_TO_PROJECT tool output.
 */
type BUGHERD_ADD_MEMBER_TO_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Project
       * @description The project object after adding the member.
       */
      project: {
          /**
           * Guests See Guests
           * @description Whether guests can see feedback from other guests.
           */
          guests_see_guests: boolean;
          /**
           * Has Custom Columns
           * @description Whether the project uses custom columns.
           */
          has_custom_columns: boolean;
          /**
           * Id
           * @description Unique identifier of the project.
           */
          id: number;
          /**
           * Is Active
           * @description Whether the project is active.
           */
          is_active: boolean;
          /**
           * Is Public
           * @description Whether public feedback is enabled.
           */
          is_public: boolean;
          /**
           * Name
           * @description Name of the project.
           */
          name: string;
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
 * Type of BUGHERD's BUGHERD_CREATE_ATTACHMENT tool input.
 */
type BUGHERD_CREATE_ATTACHMENT_INPUT = {
  /**
   * File Name
   * @description Name of the attachment file (e.g., 'resolution.gif').
   */
  file_name?: string;
  /**
   * Project Id
   * @description Unique identifier of the project containing the task.
   */
  project_id?: number;
  /**
   * Task Id
   * @description Unique identifier of the task to which the attachment will be added.
   */
  task_id?: number;
  /**
   * Url
   * @description Public URL of the file to attach.
   */
  url?: string;
};

/**
 * Type of BUGHERD's BUGHERD_CREATE_ATTACHMENT tool output.
 */
type BUGHERD_CREATE_ATTACHMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attachment
       * @description Attachment object with all metadata.
       */
      attachment: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the attachment was created.
           */
          created_at: string;
          /**
           * File Name
           * @description Name of the attachment file.
           */
          file_name: string;
          /**
           * Id
           * @description Unique identifier of the attachment.
           */
          id: number;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the attachment was last updated.
           */
          updated_at: string;
          /**
           * Url
           * @description Direct URL where the file can be downloaded.
           */
          url: string;
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
 * Type of BUGHERD's BUGHERD_CREATE_COLUMN tool input.
 */
type BUGHERD_CREATE_COLUMN_INPUT = {
  /**
   * Name
   * @description Name of the new custom column.
   */
  name?: string;
  /**
   * Position
   * @description Zero-based position of the new column in the project's column list; defaults to appending if omitted.
   * @default null
   */
  position: number | null;
  /**
   * Project Id
   * @description ID of the project to which the column will be added.
   */
  project_id?: number;
};

/**
 * Type of BUGHERD's BUGHERD_CREATE_COLUMN tool output.
 */
type BUGHERD_CREATE_COLUMN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Column
       * @description The newly created column object.
       */
      column: {
          /**
           * Created At
           * @description ISO8601 timestamp when the column was created.
           */
          created_at: string;
          /**
           * Id
           * @description Globally unique ID of the column.
           */
          id: number;
          /**
           * Name
           * @description Name of the column.
           */
          name: string;
          /**
           * Position
           * @description Zero-based position of the column in the project.
           */
          position: number;
          /**
           * Project Id
           * @description ID of the project containing the column.
           */
          project_id: number;
          /**
           * Updated At
           * @description ISO8601 timestamp when the column was last updated.
           */
          updated_at: string;
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
 * Type of BUGHERD's BUGHERD_CREATE_COMMENT tool input.
 */
type BUGHERD_CREATE_COMMENT_INPUT = {
  /**
   * Email
   * Format: email
   * @description Email address of the commenter. Used if 'user_id' is not set.
   * @default null
   */
  email: unknown;
  /**
   * Project Id
   * @description ID of the project containing the task.
   */
  project_id?: number;
  /**
   * Task Id
   * @description ID of the task to which the comment will be added.
   */
  task_id?: number;
  /**
   * Text
   * @description Content of the comment to add.
   */
  text?: string;
  /**
   * User Id
   * @description ID of an existing user adding the comment. Mutually exclusive with 'email'.
   * @default null
   */
  user_id: number | null;
};

/**
 * Type of BUGHERD's BUGHERD_CREATE_COMMENT tool output.
 */
type BUGHERD_CREATE_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Comment
       * @description The newly created comment object.
       */
      comment: {
          /**
           * Created At
           * @description ISO8601 timestamp when the comment was created.
           */
          created_at: string;
          /**
           * Email
           * @description Email address of the commenter, if provided.
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique ID of the comment.
           */
          id: number;
          /**
           * Text
           * @description Text content of the comment.
           */
          text: string;
          /**
           * Updated At
           * @description ISO8601 timestamp when the comment was last updated, or null.
           * @default null
           */
          updated_at: string | null;
          /**
           * User Id
           * @description ID of the user who authored the comment, if available.
           * @default null
           */
          user_id: number | null;
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
 * Type of BUGHERD's BUGHERD_CREATE_PROJECT tool input.
 */
type BUGHERD_CREATE_PROJECT_INPUT = {
  /**
   * Project
   * @description Project fields for creating a new BugHerd project.
   */
  project?: {
      /**
       * Devurl
       * @description The full URL of the project's primary website.
       */
      devurl: string;
      /**
       * Guests See Guests
       * @description True if guests can see feedback created by other guests; defaults to false.
       * @default null
       */
      guests_see_guests: boolean | null;
      /**
       * Is Active
       * @description True if the project is active; defaults to true.
       * @default null
       */
      is_active: boolean | null;
      /**
       * Is Public
       * @description True if public feedback is enabled; defaults to false.
       * @default null
       */
      is_public: boolean | null;
      /**
       * Name
       * @description The name of the project.
       */
      name: string;
  };
};

/**
 * Type of BUGHERD's BUGHERD_CREATE_PROJECT tool output.
 */
type BUGHERD_CREATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Project */
      project: {
          /**
           * Devurl
           * @description The project's primary website URL.
           */
          devurl: string;
          /**
           * Guests See Guests
           * @description Whether guests can see other guests' feedback.
           */
          guests_see_guests: boolean;
          /**
           * Has Custom Columns
           * @description True if custom columns are enabled for the project.
           */
          has_custom_columns: boolean;
          /**
           * Id
           * @description Globally unique project ID.
           */
          id: number;
          /**
           * Is Active
           * @description Whether the project is active.
           */
          is_active: boolean;
          /**
           * Is Public
           * @description Whether public feedback is enabled.
           */
          is_public: boolean;
          /**
           * Name
           * @description Project name.
           */
          name: string;
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
 * Type of BUGHERD's BUGHERD_CREATE_TASK tool input.
 */
type BUGHERD_CREATE_TASK_INPUT = {
  /**
   * Assigned To Email
   * Format: email
   * @description Email of a project member to assign this task to. Must correspond to an existing member in the given project.
   * @default null
   */
  assigned_to_email: unknown;
  /**
   * Assigned To Id
   * @description ID of a project member to assign this task to. Mutually exclusive with 'assigned_to_email'.
   * @default null
   */
  assigned_to_id: number | null;
  /**
   * Description
   * @description Text describing the task or bug to be logged.
   */
  description?: string;
  /**
   * External Id
   * @description API-only field for correlating with external systems. Cannot be set from the BugHerd UI.
   * @default null
   */
  external_id: string | null;
  /**
   * Priority
   * @description Priority of the task. Defaults to 'not set' if omitted.
   * @default null
   * @enum {string|null}
   */
  priority: "not set" | "critical" | "important" | "normal" | "minor" | null;
  /**
   * Project Id
   * @description ID of the project to which the task will be added.
   */
  project_id?: number;
  /**
   * Requester Email
   * Format: email
   * @description Email address of the requester. Used if 'requester_id' is not set.
   * @default null
   */
  requester_email: unknown;
  /**
   * Requester Id
   * @description ID of an existing requester user. Mutually exclusive with 'requester_email'.
   * @default null
   */
  requester_id: number | null;
  /**
   * Status
   * @description Status or column for the task. Use one of the default statuses ('backlog','todo','doing','done','closed') or for custom columns pass the column name. Omit or set to null to send to the Feedback panel.
   * @default null
   */
  status: string | null;
  /**
   * Tag Names
   * @description List of tag strings to associate with the new task.
   * @default null
   */
  tag_names: string[] | null;
};

/**
 * Type of BUGHERD's BUGHERD_CREATE_TASK tool output.
 */
type BUGHERD_CREATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Task
       * @description The newly created task object.
       */
      task: {
          /**
           * Admin Link
           * @description URL to view the task in the task board (requires login).
           */
          admin_link: string;
          /**
           * TaskUser
           * @description User the task is assigned to.
           * @default null
           */
          assigned_to: {
              /**
               * Email
               * @description Email address of the user.
               * @default null
               */
              email: string | null;
              /**
               * Id
               * @description Unique ID of the user.
               */
              id: number;
              /**
               * Name
               * @description Full name of the user.
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Attachments
           * @description List of URLs for task attachments.
           */
          attachments: string[];
          /**
           * Closed At
           * @description ISO8601 timestamp when the task was closed, or null.
           * @default null
           */
          closed_at: string | null;
          /**
           * Created At
           * @description ISO8601 timestamp when the task was created.
           */
          created_at: string;
          /**
           * Deleted At
           * @description ISO8601 timestamp when the task was deleted, or null.
           * @default null
           */
          deleted_at: string | null;
          /**
           * Description
           * @description User-entered description of the task.
           */
          description: string;
          /**
           * External Id
           * @description External tracking ID, if set.
           * @default null
           */
          external_id: string | null;
          /**
           * Id
           * @description Globally unique ID of the task.
           */
          id: number;
          /**
           * Local Task Id
           * @description ID of the task within the project.
           */
          local_task_id: number;
          /**
           * Priority
           * @description Priority level of the task (e.g., 'normal').
           * @default null
           */
          priority: string | null;
          /**
           * Priority Id
           * @description Numeric ID for priority (0 = N/A).
           * @default null
           */
          priority_id: number | null;
          /**
           * Project Id
           * @description ID of the project containing the task.
           */
          project_id: number;
          /**
           * TaskUser
           * @description User who requested the task.
           * @default null
           */
          requester: {
              /**
               * Email
               * @description Email address of the user.
               * @default null
               */
              email: string | null;
              /**
               * Id
               * @description Unique ID of the user.
               */
              id: number;
              /**
               * Name
               * @description Full name of the user.
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Requester Email
           * @description Email of the requester, if provided.
           * @default null
           */
          requester_email: string | null;
          /**
           * Screenshot Url
           * @description URL of the screenshot image for the task.
           * @default null
           */
          screenshot_url: string | null;
          /**
           * Secret Link
           * @description Unguessable URL to view the task without login.
           */
          secret_link: string;
          /**
           * Site
           * @description Website URL where the task was reported.
           * @default null
           */
          site: string | null;
          /**
           * Status
           * @description Current status or column name of the task.
           * @default null
           */
          status: string | null;
          /**
           * Status Id
           * @description Numeric ID for status or column.
           * @default null
           */
          status_id: number | null;
          /**
           * Tag Names
           * @description List of tag names associated with the task.
           */
          tag_names: string[];
          /**
           * Updated At
           * @description ISO8601 timestamp when the task was last updated.
           */
          updated_at: string;
          /**
           * Url
           * @description URL pointing to the task details.
           */
          url: string;
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
 * Type of BUGHERD's BUGHERD_CREATE_WEBHOOK tool input.
 */
type BUGHERD_CREATE_WEBHOOK_INPUT = {
  /**
   * Event
   * @description Event that triggers the webhook. One of 'task_create', 'task_update', 'comment', or 'task_destroy'.
   * @enum {string}
   */
  event?: "task_create" | "task_update" | "comment" | "task_destroy";
  /**
   * Project Id
   * @description ID of the project to apply the webhook to. If omitted, applies to all projects.
   * @default null
   */
  project_id: number | null;
  /**
   * Target Url
   * Format: uri
   * @description URL to which webhook payloads will be delivered.
   */
  target_url?: unknown;
};

/**
 * Type of BUGHERD's BUGHERD_CREATE_WEBHOOK tool output.
 */
type BUGHERD_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Webhook
       * @description The newly created webhook object.
       */
      webhook: {
          /**
           * Created At
           * @description ISO8601 timestamp when the webhook was created.
           */
          created_at: string;
          /**
           * Event
           * @description Event that triggers the webhook.
           * @enum {string}
           */
          event: "task_create" | "task_update" | "comment" | "task_destroy";
          /**
           * Id
           * @description Unique ID of the webhook.
           */
          id: number;
          /**
           * Project Id
           * @description ID of the project associated with the webhook, if any.
           * @default null
           */
          project_id: number | null;
          /**
           * Target Url
           * @description URL to which webhook payloads are delivered.
           */
          target_url: string;
          /**
           * Updated At
           * @description ISO8601 timestamp when the webhook was last updated, if any.
           * @default null
           */
          updated_at: string | null;
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
 * Type of BUGHERD's BUGHERD_DELETE_PROJECT tool input.
 */
type BUGHERD_DELETE_PROJECT_INPUT = {
  /**
   * Project Id
   * @description The ID of the project to delete.
   */
  project_id?: number;
};

/**
 * Type of BUGHERD's BUGHERD_DELETE_PROJECT tool output.
 */
type BUGHERD_DELETE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the project was successfully deleted.
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
 * Type of BUGHERD's BUGHERD_LIST_ACTIVE_PROJECTS tool input.
 */
type BUGHERD_LIST_ACTIVE_PROJECTS_INPUT = {
  /**
   * Page
   * @description Page number for pagination (1-based). BugHerd returns up to 100 records per page; omit to fetch the first page.
   * @default null
   */
  page: number | null;
};

/**
 * Type of BUGHERD's BUGHERD_LIST_ACTIVE_PROJECTS tool output.
 */
type BUGHERD_LIST_ACTIVE_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Pagination details, including total count
       */
      meta: {
          /**
           * Count
           * @description Total number of projects in the organization
           */
          count: number;
      };
      /**
       * Projects
       * @description List of active projects (up to 100 per page)
       */
      projects: {
          /**
           * Guests See Guests
           * @description True if guests can see feedback from other guests
           */
          guests_see_guests: boolean;
          /**
           * Has Custom Columns
           * @description True if this project uses custom columns
           */
          has_custom_columns: boolean;
          /**
           * Id
           * @description Globally unique project ID
           */
          id: number;
          /**
           * Is Active
           * @description True if the project is active
           */
          is_active: boolean;
          /**
           * Is Public
           * @description True if public feedback is enabled
           */
          is_public: boolean;
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
 * Type of BUGHERD's BUGHERD_LIST_ATTACHMENTS tool input.
 */
type BUGHERD_LIST_ATTACHMENTS_INPUT = {
  /**
   * Page
   * @description Page number for pagination (each page returns up to 100 attachments).
   * @default 1
   */
  page: number | null;
  /**
   * Project Id
   * @description ID of the project containing the task.
   */
  project_id?: number;
  /**
   * Task Id
   * @description ID of the task to list attachments for.
   */
  task_id?: number;
};

/**
 * Type of BUGHERD's BUGHERD_LIST_ATTACHMENTS tool output.
 */
type BUGHERD_LIST_ATTACHMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attachments
       * @description List of attachments returned for this page.
       */
      attachments: {
          /**
           * Created At
           * @description ISO8601 timestamp when the attachment was created.
           */
          created_at: string;
          /**
           * File Name
           * @description Name of the attachment file.
           */
          file_name: string;
          /**
           * Id
           * @description Unique ID of the attachment.
           */
          id: number;
          /**
           * Updated At
           * @description ISO8601 timestamp when the attachment was last updated.
           */
          updated_at: string;
          /**
           * Url
           * @description Direct URL to download the file.
           */
          url: string;
      }[];
      /**
       * Meta
       * @description Pagination metadata including total count.
       */
      meta: {
          /**
           * Count
           * @description Total number of attachments matching the query.
           */
          count: number;
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
 * Type of BUGHERD's BUGHERD_LIST_COLUMNS tool input.
 */
type BUGHERD_LIST_COLUMNS_INPUT = {
  /**
   * Page
   * @description Page number for pagination (each page returns up to 100 columns).
   * @default 1
   */
  page: number | null;
  /**
   * Project Id
   * @description ID of the project to list columns for.
   */
  project_id?: number;
};

/**
 * Type of BUGHERD's BUGHERD_LIST_COLUMNS tool output.
 */
type BUGHERD_LIST_COLUMNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Columns
       * @description List of columns returned for this page.
       */
      columns: {
          /**
           * Id
           * @description Globally unique ID of the column.
           */
          id: number;
          /**
           * Name
           * @description Name of the column.
           */
          name: string;
          /**
           * Project Id
           * @description ID of the project containing the column.
           */
          project_id: number;
      }[];
      /**
       * Meta
       * @description Pagination metadata with total count.
       */
      meta: {
          /**
           * Count
           * @description Total number of columns in the project.
           */
          count: number;
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
 * Type of BUGHERD's BUGHERD_LIST_PROJECTS tool input.
 */
type BUGHERD_LIST_PROJECTS_INPUT = {
  /**
   * Page
   * @description Page number for pagination (each page returns up to 100 projects).
   * @default 1
   */
  page: number | null;
};

/**
 * Type of BUGHERD's BUGHERD_LIST_PROJECTS tool output.
 */
type BUGHERD_LIST_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Pagination details including total count
       */
      meta: {
          /**
           * Count
           * @description Total number of projects in the organization
           */
          count: number;
      };
      /**
       * Projects
       * @description List of projects returned for this page
       */
      projects: {
          /**
           * Guests See Guests
           * @description True if guests can see feedback from other guests
           */
          guests_see_guests: boolean;
          /**
           * Has Custom Columns
           * @description True if the project has custom columns configured
           */
          has_custom_columns: boolean;
          /**
           * Id
           * @description Globally unique project ID
           */
          id: number;
          /**
           * Is Active
           * @description True if the project is active
           */
          is_active: boolean;
          /**
           * Is Public
           * @description True if public feedback is enabled
           */
          is_public: boolean;
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
 * Type of BUGHERD's BUGHERD_LIST_USERS tool input.
 */
type BUGHERD_LIST_USERS_INPUT = {
  /**
   * Page
   * @description Page number (1-based) to retrieve.
   * @default null
   */
  page: number | null;
};

/**
 * Type of BUGHERD's BUGHERD_LIST_USERS tool output.
 */
type BUGHERD_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Paging metadata.
       */
      meta: {
          /**
           * Count
           * @description Total number of users in the account.
           */
          count: number;
      };
      /**
       * Users
       * @description List of users on this page.
       */
      users: {
          /**
           * Email
           * @description Email address of the user.
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique identifier for the user.
           */
          id: number;
          /**
           * Name
           * @description Full name of the user.
           * @default null
           */
          name: string | null;
          /**
           * Role
           * @description Role of the user (e.g., 'member' or 'client').
           * @default null
           */
          role: string | null;
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
 * Type of BUGHERD's BUGHERD_LIST_WEBHOOKS tool input.
 */
type BUGHERD_LIST_WEBHOOKS_INPUT = {
  /**
   * Page
   * @description Page number for pagination (each page returns up to 100 webhooks).
   * @default 1
   */
  page: number | null;
};

/**
 * Type of BUGHERD's BUGHERD_LIST_WEBHOOKS tool output.
 */
type BUGHERD_LIST_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Pagination details including total count.
       */
      meta: {
          /**
           * Count
           * @description Total number of webhooks in the account.
           */
          count: number;
      };
      /**
       * Webhooks
       * @description List of webhooks returned for this page.
       */
      webhooks: {
          /**
           * Created At
           * @description ISO8601 timestamp when the webhook was created.
           */
          created_at: string;
          /**
           * Event
           * @description Event type that this webhook is subscribed to.
           * @enum {string}
           */
          event: "task_create" | "task_update" | "comment" | "task_destroy";
          /**
           * Id
           * @description Globally unique webhook ID
           */
          id: number;
          /**
           * Project Id
           * @description ID of the project this webhook is scoped to, or null for all projects.
           * @default null
           */
          project_id: number | null;
          /**
           * Target Url
           * @description Destination URL for webhook payloads.
           */
          target_url: string;
          /**
           * Updated At
           * @description ISO8601 timestamp when the webhook was last updated.
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
 * Type of BUGHERD's BUGHERD_SHOW_ATTACHMENT tool input.
 */
type BUGHERD_SHOW_ATTACHMENT_INPUT = {
  /**
   * Attachment Id
   * @description Unique identifier of the attachment to retrieve.
   */
  attachment_id?: number;
  /**
   * Project Id
   * @description Unique identifier of the project containing the task.
   */
  project_id?: number;
  /**
   * Task Id
   * @description Unique identifier of the task containing the attachment.
   */
  task_id?: number;
};

/**
 * Type of BUGHERD's BUGHERD_SHOW_ATTACHMENT tool output.
 */
type BUGHERD_SHOW_ATTACHMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attachment
       * @description Attachment object with all metadata.
       */
      attachment: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the attachment was created.
           */
          created_at: string;
          /**
           * File Name
           * @description Name of the attachment file.
           */
          file_name: string;
          /**
           * Id
           * @description Unique identifier of the attachment.
           */
          id: number;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the attachment was last updated.
           */
          updated_at: string;
          /**
           * Url
           * @description Direct URL where the file can be downloaded.
           */
          url: string;
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
 * Type of BUGHERD's BUGHERD_SHOW_COLUMN tool input.
 */
type BUGHERD_SHOW_COLUMN_INPUT = {
  /**
   * Column Id
   * @description Unique identifier of the column to retrieve
   */
  column_id?: number;
  /**
   * Project Id
   * @description ID of the project containing the column
   */
  project_id?: number;
};

/**
 * Type of BUGHERD's BUGHERD_SHOW_COLUMN tool output.
 */
type BUGHERD_SHOW_COLUMN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Column
       * @description Column object containing detailed information
       */
      column: {
          /**
           * Id
           * @description Globally unique ID of the column.
           */
          id: number;
          /**
           * Name
           * @description Name of the column.
           */
          name: string;
          /**
           * Project Id
           * @description ID of the project containing the column.
           */
          project_id: number;
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
 * Type of BUGHERD's BUGHERD_SHOW_ORGANIZATION tool input.
 */
type BUGHERD_SHOW_ORGANIZATION_INPUT = object;

/**
 * Type of BUGHERD's BUGHERD_SHOW_ORGANIZATION tool output.
 */
type BUGHERD_SHOW_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Organization
       * @description Detailed information about the organization.
       */
      organization: {
          /**
           * Created At
           * @description Timestamp when the organization was created (ISO 8601 format).
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the organization.
           */
          id: number;
          /**
           * Name
           * @description Name of the organization.
           */
          name: string;
          /**
           * Updated At
           * @description Timestamp when the organization was last updated (ISO 8601 format).
           */
          updated_at: string;
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
 * Type of BUGHERD's BUGHERD_SHOW_PROJECT tool input.
 */
type BUGHERD_SHOW_PROJECT_INPUT = {
  /**
   * Project Id
   * @description Unique identifier of the project to retrieve
   */
  project_id?: number;
};

/**
 * Type of BUGHERD's BUGHERD_SHOW_PROJECT tool output.
 */
type BUGHERD_SHOW_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Project
       * @description Project object containing detailed information
       */
      project: {
          /**
           * Guests See Guests
           * @description True if guests can view feedback from other guests
           */
          guests_see_guests: boolean;
          /**
           * Has Custom Columns
           * @description True if this project uses custom columns
           */
          has_custom_columns: boolean;
          /**
           * Id
           * @description Unique project identifier
           */
          id: number;
          /**
           * Is Active
           * @description True if the project is currently active
           */
          is_active: boolean;
          /**
           * Is Public
           * @description True if the project is publicly visible
           */
          is_public: boolean;
          /**
           * Name
           * @description Name of the project
           */
          name: string;
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
 * Type of BUGHERD's BUGHERD_SHOW_USER_PROJECTS tool input.
 */
type BUGHERD_SHOW_USER_PROJECTS_INPUT = {
  /**
   * User Id
   * @description The unique ID of the user whose accessible projects you want to list.
   */
  user_id?: number;
};

/**
 * Type of BUGHERD's BUGHERD_SHOW_USER_PROJECTS tool output.
 */
type BUGHERD_SHOW_USER_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Pagination metadata for the list of projects.
       */
      meta: {
          /**
           * Count
           * @description Total number of resources available.
           */
          count: number;
      };
      /**
       * Projects
       * @description List of projects the user has access to.
       */
      projects: {
          /**
           * Devurl
           * @description The development URL associated with the project.
           * @default null
           */
          devurl: string | null;
          /**
           * Guests See Guests
           * @description Indicates if guests can see feedback from other guests.
           * @default null
           */
          guests_see_guests: boolean | null;
          /**
           * Has Custom Columns
           * @description Indicates if the project has custom columns.
           * @default null
           */
          has_custom_columns: boolean | null;
          /**
           * Id
           * @description The project's unique identifier.
           */
          id: number;
          /**
           * Is Active
           * @description Indicates if the project is active.
           */
          is_active: boolean;
          /**
           * Is Public
           * @description Indicates if the project is public.
           */
          is_public: boolean;
          /**
           * Name
           * @description The name of the project.
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
 * Type of BUGHERD's BUGHERD_SHOW_USER_TASKS tool input.
 */
type BUGHERD_SHOW_USER_TASKS_INPUT = {
  /**
   * Page
   * @description Pagination page number (each page returns up to 100 tasks).
   * @default 1
   */
  page: number | null;
  /**
   * User Id
   * @description Globally unique ID of the user whose tasks to list.
   */
  user_id?: number;
};

/**
 * Type of BUGHERD's BUGHERD_SHOW_USER_TASKS tool output.
 */
type BUGHERD_SHOW_USER_TASKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Pagination metadata including total count.
       */
      meta: {
          /**
           * Count
           * @description Total number of tasks matching the query.
           */
          count: number;
      };
      /**
       * Tasks
       * @description List of tasks created or assigned to the user.
       */
      tasks: {
          /**
           * Admin Link
           * @description URL to view the task in the task board (requires login).
           */
          admin_link: string;
          /**
           * TaskUser
           * @description User the task is assigned to.
           * @default null
           */
          assigned_to: {
              /**
               * Email
               * @description Email address of the user.
               * @default null
               */
              email: string | null;
              /**
               * Id
               * @description Unique ID of the user.
               */
              id: number;
              /**
               * Name
               * @description Full name of the user.
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Attachments
           * @description List of URLs for task attachments.
           */
          attachments: string[];
          /**
           * Closed At
           * @description ISO8601 timestamp when the task was closed, or null.
           * @default null
           */
          closed_at: string | null;
          /**
           * Created At
           * @description ISO8601 timestamp when the task was created.
           */
          created_at: string;
          /**
           * Deleted At
           * @description ISO8601 timestamp when the task was deleted, or null.
           * @default null
           */
          deleted_at: string | null;
          /**
           * Description
           * @description User-entered description of the task.
           */
          description: string;
          /**
           * External Id
           * @description External tracking ID, if set.
           * @default null
           */
          external_id: string | null;
          /**
           * Id
           * @description Globally unique ID of the task.
           */
          id: number;
          /**
           * Local Task Id
           * @description ID of the task within the project.
           */
          local_task_id: number;
          /**
           * Priority
           * @description Priority level of the task (e.g., 'normal').
           * @default null
           */
          priority: string | null;
          /**
           * Priority Id
           * @description Numeric ID for priority (0 = N/A).
           * @default null
           */
          priority_id: number | null;
          /**
           * Project Id
           * @description ID of the project containing the task.
           */
          project_id: number;
          /**
           * TaskUser
           * @description User who requested the task.
           * @default null
           */
          requester: {
              /**
               * Email
               * @description Email address of the user.
               * @default null
               */
              email: string | null;
              /**
               * Id
               * @description Unique ID of the user.
               */
              id: number;
              /**
               * Name
               * @description Full name of the user.
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Requester Email
           * @description Email of the requester, if provided.
           * @default null
           */
          requester_email: string | null;
          /**
           * Screenshot Url
           * @description URL of the screenshot image for the task.
           * @default null
           */
          screenshot_url: string | null;
          /**
           * Secret Link
           * @description Unguessable URL to view the task without login.
           */
          secret_link: string;
          /**
           * Site
           * @description Website URL where the task was reported.
           * @default null
           */
          site: string | null;
          /**
           * Status
           * @description Current status or column name of the task.
           * @default null
           */
          status: string | null;
          /**
           * Status Id
           * @description Numeric ID for status or column.
           * @default null
           */
          status_id: number | null;
          /**
           * Tag Names
           * @description List of tag names associated with the task.
           */
          tag_names: string[];
          /**
           * Updated At
           * @description ISO8601 timestamp when the task was last updated.
           */
          updated_at: string;
          /**
           * Url
           * @description URL pointing to the task details.
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
 * Type of BUGHERD's BUGHERD_UPDATE_COLUMN tool input.
 */
type BUGHERD_UPDATE_COLUMN_INPUT = {
  /**
   * Column
   * @description Column fields to update
   */
  column?: {
      /**
       * Name
       * @description New name for the column
       */
      name: string;
  };
  /**
   * Column Id
   * @description ID of the column to update
   */
  column_id?: number;
  /**
   * Project Id
   * @description ID of the project containing the column
   */
  project_id?: number;
};

/**
 * Type of BUGHERD's BUGHERD_UPDATE_COLUMN tool output.
 */
type BUGHERD_UPDATE_COLUMN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Column
       * @description Updated column object
       */
      column: {
          /**
           * Id
           * @description Globally unique ID of the column.
           */
          id: number;
          /**
           * Name
           * @description Name of the column.
           */
          name: string;
          /**
           * Project Id
           * @description ID of the project containing the column.
           */
          project_id: number;
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
 * Type of BUGHERD's BUGHERD_UPDATE_PROJECT tool input.
 */
type BUGHERD_UPDATE_PROJECT_INPUT = {
  /**
   * Project
   * @description Project fields for updating an existing BugHerd project.
   */
  project?: {
      /**
       * Devurl
       * @description The full URL of the project's primary website
       * @default null
       */
      devurl: string | null;
      /**
       * Guests See Guests
       * @description True to allow guests to see other guests' feedback; False otherwise
       * @default null
       */
      guests_see_guests: boolean | null;
      /**
       * Is Active
       * @description True to make the project active; False to disable
       * @default null
       */
      is_active: boolean | null;
      /**
       * Is Public
       * @description True to enable public feedback; False to disable
       * @default null
       */
      is_public: boolean | null;
      /**
       * Name
       * @description New name for the project
       * @default null
       */
      name: string | null;
  };
  /**
   * Project Id
   * @description Unique identifier of the project to update
   */
  project_id?: number;
};

/**
 * Type of BUGHERD's BUGHERD_UPDATE_PROJECT tool output.
 */
type BUGHERD_UPDATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Project
       * @description Updated project object
       */
      project: {
          /**
           * Guests See Guests
           * @description True if guests can view feedback from other guests
           */
          guests_see_guests: boolean;
          /**
           * Has Custom Columns
           * @description True if this project uses custom columns
           */
          has_custom_columns: boolean;
          /**
           * Id
           * @description Unique project identifier
           */
          id: number;
          /**
           * Is Active
           * @description True if the project is currently active
           */
          is_active: boolean;
          /**
           * Is Public
           * @description True if the project is publicly visible
           */
          is_public: boolean;
          /**
           * Name
           * @description Name of the project
           */
          name: string;
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
 * Type of BUGHERD's BUGHERD_UPDATE_TASK tool input.
 */
type BUGHERD_UPDATE_TASK_INPUT = {
  /**
   * Project Id
   * @description ID of the project containing the task
   */
  project_id?: number;
  /**
   * Task
   * @description Fields to update for the task
   */
  task?: {
      /**
       * Assigned To Id
       * @description User ID to assign this task to
       * @default null
       */
      assigned_to_id: number | null;
      /**
       * Description
       * @description Updated description of the task
       * @default null
       */
      description: string | null;
      /**
       * Priority
       * @description Priority level of the task
       * @default null
       * @enum {string|null}
       */
      priority: "critical" | "major" | "minor" | "trivial" | null;
      /**
       * Status
       * @description New status of the task
       * @default null
       * @enum {string|null}
       */
      status: "backlog" | "todo" | "doing" | "done" | "closed" | null;
      /**
       * Tag Names
       * @description List of tags to associate with the task
       * @default null
       */
      tag_names: string[] | null;
  };
  /**
   * Task Id
   * @description ID of the task to update
   */
  task_id?: number;
};

/**
 * Type of BUGHERD's BUGHERD_UPDATE_TASK tool output.
 */
type BUGHERD_UPDATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Task
       * @description The updated task object
       */
      task: {
          /**
           * Admin Link
           * @description URL to view the task in the task board (requires login).
           */
          admin_link: string;
          /**
           * TaskUser
           * @description User the task is assigned to.
           * @default null
           */
          assigned_to: {
              /**
               * Email
               * @description Email address of the user.
               * @default null
               */
              email: string | null;
              /**
               * Id
               * @description Unique ID of the user.
               */
              id: number;
              /**
               * Name
               * @description Full name of the user.
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Attachments
           * @description List of URLs for task attachments.
           */
          attachments: string[];
          /**
           * Closed At
           * @description ISO8601 timestamp when the task was closed, or null.
           * @default null
           */
          closed_at: string | null;
          /**
           * Created At
           * @description ISO8601 timestamp when the task was created.
           */
          created_at: string;
          /**
           * Deleted At
           * @description ISO8601 timestamp when the task was deleted, or null.
           * @default null
           */
          deleted_at: string | null;
          /**
           * Description
           * @description User-entered description of the task.
           */
          description: string;
          /**
           * External Id
           * @description External tracking ID, if set.
           * @default null
           */
          external_id: string | null;
          /**
           * Id
           * @description Globally unique ID of the task.
           */
          id: number;
          /**
           * Local Task Id
           * @description ID of the task within the project.
           */
          local_task_id: number;
          /**
           * Priority
           * @description Priority level of the task (e.g., 'normal').
           * @default null
           */
          priority: string | null;
          /**
           * Priority Id
           * @description Numeric ID for priority (0 = N/A).
           * @default null
           */
          priority_id: number | null;
          /**
           * Project Id
           * @description ID of the project containing the task.
           */
          project_id: number;
          /**
           * TaskUser
           * @description User who requested the task.
           * @default null
           */
          requester: {
              /**
               * Email
               * @description Email address of the user.
               * @default null
               */
              email: string | null;
              /**
               * Id
               * @description Unique ID of the user.
               */
              id: number;
              /**
               * Name
               * @description Full name of the user.
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Requester Email
           * @description Email of the requester, if provided.
           * @default null
           */
          requester_email: string | null;
          /**
           * Screenshot Url
           * @description URL of the screenshot image for the task.
           * @default null
           */
          screenshot_url: string | null;
          /**
           * Secret Link
           * @description Unguessable URL to view the task without login.
           */
          secret_link: string;
          /**
           * Site
           * @description Website URL where the task was reported.
           * @default null
           */
          site: string | null;
          /**
           * Status
           * @description Current status or column name of the task.
           * @default null
           */
          status: string | null;
          /**
           * Status Id
           * @description Numeric ID for status or column.
           * @default null
           */
          status_id: number | null;
          /**
           * Tag Names
           * @description List of tag names associated with the task.
           */
          tag_names: string[];
          /**
           * Updated At
           * @description ISO8601 timestamp when the task was last updated.
           */
          updated_at: string;
          /**
           * Url
           * @description URL pointing to the task details.
           */
          url: string;
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
 * Type of BUGHERD's BUGHERD_UPLOAD_ATTACHMENT tool input.
 */
type BUGHERD_UPLOAD_ATTACHMENT_INPUT = {
  /**
   * File Content
   * Format: binary
   * @description Raw binary content of the file to be uploaded.
   */
  file_content?: string;
  /**
   * File Name
   * @description Name of the attachment file including extension.
   */
  file_name?: string;
  /**
   * Project Id
   * @description ID of the project containing the task.
   */
  project_id?: number;
  /**
   * Task Id
   * @description ID of the task to attach the file to.
   */
  task_id?: number;
};

/**
 * Type of BUGHERD's BUGHERD_UPLOAD_ATTACHMENT tool output.
 */
type BUGHERD_UPLOAD_ATTACHMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attachment
       * @description The newly created attachment object returned by BugHerd.
       */
      attachment: {
          /**
           * Created At
           * @description ISO8601 timestamp when the attachment was created.
           */
          created_at: string;
          /**
           * File Name
           * @description Name of the uploaded file.
           */
          file_name: string;
          /**
           * Id
           * @description Unique identifier of the attachment.
           */
          id: number;
          /**
           * Updated At
           * @description ISO8601 timestamp when the attachment was last updated.
           */
          updated_at: string;
          /**
           * Url
           * @description URL of the uploaded attachment.
           */
          url: string;
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
 * Type map of all available tool input types for toolkit "BUGHERD".
 */
export type BUGHERD_TOOL_INPUTS = {
  ADD_GUEST_TO_PROJECT: BUGHERD_ADD_GUEST_TO_PROJECT_INPUT
  ADD_MEMBER_TO_PROJECT: BUGHERD_ADD_MEMBER_TO_PROJECT_INPUT
  CREATE_ATTACHMENT: BUGHERD_CREATE_ATTACHMENT_INPUT
  CREATE_COLUMN: BUGHERD_CREATE_COLUMN_INPUT
  CREATE_COMMENT: BUGHERD_CREATE_COMMENT_INPUT
  CREATE_PROJECT: BUGHERD_CREATE_PROJECT_INPUT
  CREATE_TASK: BUGHERD_CREATE_TASK_INPUT
  CREATE_WEBHOOK: BUGHERD_CREATE_WEBHOOK_INPUT
  DELETE_PROJECT: BUGHERD_DELETE_PROJECT_INPUT
  LIST_ACTIVE_PROJECTS: BUGHERD_LIST_ACTIVE_PROJECTS_INPUT
  LIST_ATTACHMENTS: BUGHERD_LIST_ATTACHMENTS_INPUT
  LIST_COLUMNS: BUGHERD_LIST_COLUMNS_INPUT
  LIST_PROJECTS: BUGHERD_LIST_PROJECTS_INPUT
  LIST_USERS: BUGHERD_LIST_USERS_INPUT
  LIST_WEBHOOKS: BUGHERD_LIST_WEBHOOKS_INPUT
  SHOW_ATTACHMENT: BUGHERD_SHOW_ATTACHMENT_INPUT
  SHOW_COLUMN: BUGHERD_SHOW_COLUMN_INPUT
  SHOW_ORGANIZATION: BUGHERD_SHOW_ORGANIZATION_INPUT
  SHOW_PROJECT: BUGHERD_SHOW_PROJECT_INPUT
  SHOW_USER_PROJECTS: BUGHERD_SHOW_USER_PROJECTS_INPUT
  SHOW_USER_TASKS: BUGHERD_SHOW_USER_TASKS_INPUT
  UPDATE_COLUMN: BUGHERD_UPDATE_COLUMN_INPUT
  UPDATE_PROJECT: BUGHERD_UPDATE_PROJECT_INPUT
  UPDATE_TASK: BUGHERD_UPDATE_TASK_INPUT
  UPLOAD_ATTACHMENT: BUGHERD_UPLOAD_ATTACHMENT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BUGHERD".
 */
export type BUGHERD_TOOL_OUTPUTS = {
  ADD_GUEST_TO_PROJECT: BUGHERD_ADD_GUEST_TO_PROJECT_OUTPUT
  ADD_MEMBER_TO_PROJECT: BUGHERD_ADD_MEMBER_TO_PROJECT_OUTPUT
  CREATE_ATTACHMENT: BUGHERD_CREATE_ATTACHMENT_OUTPUT
  CREATE_COLUMN: BUGHERD_CREATE_COLUMN_OUTPUT
  CREATE_COMMENT: BUGHERD_CREATE_COMMENT_OUTPUT
  CREATE_PROJECT: BUGHERD_CREATE_PROJECT_OUTPUT
  CREATE_TASK: BUGHERD_CREATE_TASK_OUTPUT
  CREATE_WEBHOOK: BUGHERD_CREATE_WEBHOOK_OUTPUT
  DELETE_PROJECT: BUGHERD_DELETE_PROJECT_OUTPUT
  LIST_ACTIVE_PROJECTS: BUGHERD_LIST_ACTIVE_PROJECTS_OUTPUT
  LIST_ATTACHMENTS: BUGHERD_LIST_ATTACHMENTS_OUTPUT
  LIST_COLUMNS: BUGHERD_LIST_COLUMNS_OUTPUT
  LIST_PROJECTS: BUGHERD_LIST_PROJECTS_OUTPUT
  LIST_USERS: BUGHERD_LIST_USERS_OUTPUT
  LIST_WEBHOOKS: BUGHERD_LIST_WEBHOOKS_OUTPUT
  SHOW_ATTACHMENT: BUGHERD_SHOW_ATTACHMENT_OUTPUT
  SHOW_COLUMN: BUGHERD_SHOW_COLUMN_OUTPUT
  SHOW_ORGANIZATION: BUGHERD_SHOW_ORGANIZATION_OUTPUT
  SHOW_PROJECT: BUGHERD_SHOW_PROJECT_OUTPUT
  SHOW_USER_PROJECTS: BUGHERD_SHOW_USER_PROJECTS_OUTPUT
  SHOW_USER_TASKS: BUGHERD_SHOW_USER_TASKS_OUTPUT
  UPDATE_COLUMN: BUGHERD_UPDATE_COLUMN_OUTPUT
  UPDATE_PROJECT: BUGHERD_UPDATE_PROJECT_OUTPUT
  UPDATE_TASK: BUGHERD_UPDATE_TASK_OUTPUT
  UPLOAD_ATTACHMENT: BUGHERD_UPLOAD_ATTACHMENT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BUGHERD toolkit.
 */
export const BUGHERD = {
  slug: "bugherd",
  tools: {
    /**
     * Tool to add a guest (client) to a project. use when you want to add an existing client by id or invite a new client by email.
     */
    ADD_GUEST_TO_PROJECT: "BUGHERD_ADD_GUEST_TO_PROJECT",
    /**
     * Tool to add a member to a project in bugherd. use when you need to add an existing user to a specific project.
     */
    ADD_MEMBER_TO_PROJECT: "BUGHERD_ADD_MEMBER_TO_PROJECT",
    /**
     * Tool to add a new attachment to a task using an existing url. use when you have project and task ids and the external file url ready.
     */
    CREATE_ATTACHMENT: "BUGHERD_CREATE_ATTACHMENT",
    /**
     * Tool to create a new column in a project. use when you need to add a custom workflow column after identifying the project id.
     */
    CREATE_COLUMN: "BUGHERD_CREATE_COLUMN",
    /**
     * Tool to add a new comment to a task. use when you need to record discussion or feedback on an existing task.
     */
    CREATE_COMMENT: "BUGHERD_CREATE_COMMENT",
    /**
     * Tool to create a new project. use when you need to initialize a project after gathering its name and url. example: "create a new project named 'my website' with url 'http://www.example.com'."
     */
    CREATE_PROJECT: "BUGHERD_CREATE_PROJECT",
    /**
     * Tool to add a new task in a project. use when you have the project id and full task details ready.
     */
    CREATE_TASK: "BUGHERD_CREATE_TASK",
    /**
     * Tool to create a new webhook for real-time event notifications. use when you need to configure a callback endpoint for task or comment events. example: "create a webhook for 'task create' events to be sent to 'https://example.com/webhook'."
     */
    CREATE_WEBHOOK: "BUGHERD_CREATE_WEBHOOK",
    /**
     * Tool to delete a project. use when you need to permanently remove a project and its associated data. this action cannot be undone, so confirm the project id before calling.
     */
    DELETE_PROJECT: "BUGHERD_DELETE_PROJECT",
    /**
     * Tool to list all active projects in your bugherd account. use when you need to retrieve the active projects list (e.g., for syncing or reporting).
     */
    LIST_ACTIVE_PROJECTS: "BUGHERD_LIST_ACTIVE_PROJECTS",
    /**
     * Tool to list all attachments for a task. use when you need to retrieve file attachments after fetching task details.
     */
    LIST_ATTACHMENTS: "BUGHERD_LIST_ATTACHMENTS",
    /**
     * Tool to list all columns for a project. use when you need the full set of default and custom columns for a project.
     */
    LIST_COLUMNS: "BUGHERD_LIST_COLUMNS",
    /**
     * Tool to list all projects in your account. use after setting up valid api credentials.
     */
    LIST_PROJECTS: "BUGHERD_LIST_PROJECTS",
    /**
     * Tool to list all users in your account. use after authenticating to fetch the current user roster. supports pagination via the `page` parameter.
     */
    LIST_USERS: "BUGHERD_LIST_USERS",
    /**
     * Tool to list all installed webhooks. use when you need to audit or verify existing webhooks after setup.
     */
    LIST_WEBHOOKS: "BUGHERD_LIST_WEBHOOKS",
    /**
     * Tool to retrieve details of a specific attachment. use after you have project id, task id, and attachment id to get filename, url, and timestamps.
     */
    SHOW_ATTACHMENT: "BUGHERD_SHOW_ATTACHMENT",
    /**
     * Tool to show details of a specific column. use when you need metadata for a particular column within a project.
     */
    SHOW_COLUMN: "BUGHERD_SHOW_COLUMN",
    /**
     * Tool to retrieve your bugherd organization details. use after authenticating to fetch account metadata.
     */
    SHOW_ORGANIZATION: "BUGHERD_SHOW_ORGANIZATION",
    /**
     * Tool to show details for a specific project. use when you have the project id and need to retrieve its metadata.
     */
    SHOW_PROJECT: "BUGHERD_SHOW_PROJECT",
    /**
     * Tool to list all projects a specific user has access to. use after obtaining the user's id.
     */
    SHOW_USER_PROJECTS: "BUGHERD_SHOW_USER_PROJECTS",
    /**
     * Tool to list tasks created or assigned to a specific user. use when you have a user's id and need their tasks. example: list tasks for user 123.
     */
    SHOW_USER_TASKS: "BUGHERD_SHOW_USER_TASKS",
    /**
     * Tool to update a column in a project. use when you have the project and column ids and need to rename a column. use after confirming the correct ids.
     */
    UPDATE_COLUMN: "BUGHERD_UPDATE_COLUMN",
    /**
     * Tool to update settings for an existing project. use when you have the project id and need to change its configuration.
     */
    UPDATE_PROJECT: "BUGHERD_UPDATE_PROJECT",
    /**
     * Tool to update a task in a project. use after confirming the project and task ids.
     */
    UPDATE_TASK: "BUGHERD_UPDATE_TASK",
    /**
     * Tool to upload a new attachment and add it to a specific task. use when you have binary file content ready and need to attach it to a bugherd task.
     */
    UPLOAD_ATTACHMENT: "BUGHERD_UPLOAD_ATTACHMENT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BUGHERD".
 */
export type BUGHERD_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BUGHERD".
 */
export type BUGHERD_TRIGGER_EVENTS = {}
