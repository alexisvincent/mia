// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CLICKUP's CLICKUP_ADD_DEPENDENCY tool input.
 */
type CLICKUP_ADD_DEPENDENCY_INPUT = {
  /**
   * Custom Task Ids
   * @description If true, `task_id` and related task IDs are custom (text-based), requiring `team_id`.
   */
  custom_task_ids?: boolean;
  /**
   * Depedency Of
   * @description ID of the task that will depend on `task_id` ('blocking' relationship). Use this or `depends_on`, not both.
   */
  depedency_of?: string;
  /**
   * Depends On
   * @description ID of the task that `task_id` will depend on ('waiting on' relationship). Use this or `dependency_of`, not both.
   */
  depends_on?: string;
  /**
   * Task Id
   * @description Unique identifier of the task to which a dependency relationship will be added.
   */
  task_id?: string;
  /**
   * Team Id
   * @description Team ID, required if `custom_task_ids` is true to look up tasks by custom IDs (unique per team).
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_ADD_DEPENDENCY tool output.
 */
type CLICKUP_ADD_DEPENDENCY_OUTPUT = {
  /**
   * Data
   * @description Confirms successful dependency creation, often an empty object `{}` on success.
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
 * Type of CLICKUP's CLICKUP_ADD_GUEST_TO_FOLDER tool input.
 */
type CLICKUP_ADD_GUEST_TO_FOLDER_INPUT = {
  /**
   * Folder Id
   * @description The unique identifier of the folder to which the guest will be added.
   */
  folder_id?: number;
  /**
   * Guest Id
   * @description The unique identifier of the guest user to be added to the folder.
   */
  guest_id?: number;
  /**
   * Include Shared
   * @description If `true`, include shared item details (API default if parameter is omitted); if `false`, exclude them.
   */
  include_shared?: boolean;
  /**
   * Permission Level
   * @description Permission level for the guest. Options are 'read' (view only), 'comment', 'edit', or 'create' (full access).
   */
  permission_level?: string;
};

/**
 * Type of CLICKUP's CLICKUP_ADD_GUEST_TO_FOLDER tool output.
 */
type CLICKUP_ADD_GUEST_TO_FOLDER_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the response from the API, typically confirming the successful addition of the guest to the folder and providing details of the shared folder and guest.
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
 * Type of CLICKUP's CLICKUP_ADD_GUEST_TO_LIST tool input.
 */
type CLICKUP_ADD_GUEST_TO_LIST_INPUT = {
  /**
   * Guest Id
   * @description The unique numerical identifier of the guest user to be added to the List.
   */
  guest_id?: number;
  /**
   * Include Shared
   * @description A boolean indicating whether to include details of items shared with the guest in the response. Set to `false` to exclude these details. If not provided or set to `true` (the API default), shared item details are included.
   */
  include_shared?: boolean;
  /**
   * List Id
   * @description The unique numerical identifier of the List to which the guest will be added.
   */
  list_id?: number;
  /**
   * Permission Level
   * @description The permission level to be granted to the guest on this List. Accepted values are: `read` (view-only), `comment` (can add comments), `edit` (can edit existing items), or `create` (full access, including creating new items).
   */
  permission_level?: string;
};

/**
 * Type of CLICKUP's CLICKUP_ADD_GUEST_TO_LIST tool output.
 */
type CLICKUP_ADD_GUEST_TO_LIST_OUTPUT = {
  /**
   * Data
   * @description Confirmation response after adding the guest, typically including list details and the guest's new permissions.
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
 * Type of CLICKUP's CLICKUP_ADD_GUEST_TO_TASK tool input.
 */
type CLICKUP_ADD_GUEST_TO_TASK_INPUT = {
  /**
   * Custom Task Ids
   * @description Optional. Set to `true` if you are referencing the task by its custom task ID. If `true`, `team_id` must also be provided.
   */
  custom_task_ids?: boolean;
  /**
   * Guest Id
   * @description The unique identifier of the guest user to be added to the task.
   */
  guest_id?: number;
  /**
   * Include Shared
   * @description Optional. If set to `false`, details of items already shared with the guest will be excluded. The API defaults to `true` if this parameter is not explicitly set to `false`.
   */
  include_shared?: boolean;
  /**
   * Permission Level
   * @description Permission level for the guest on this task. Must be one of: `read` (view only), `comment` (view and comment), `edit` (view, comment, and edit), or `create` (full permissions).
   */
  permission_level?: string;
  /**
   * Task Id
   * @description The unique identifier of the task to which the guest will be added.
   */
  task_id?: string;
  /**
   * Team Id
   * @description Required if `custom_task_ids` is `true` to correctly identify the task when using a custom task ID.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_ADD_GUEST_TO_TASK tool output.
 */
type CLICKUP_ADD_GUEST_TO_TASK_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_ADD_TAGS_FROM_TIME_ENTRIES tool input.
 */
type CLICKUP_ADD_TAGS_FROM_TIME_ENTRIES_INPUT = {
  /**
   * Tags
   * @description A list of tag objects to add to the time entries. Each object should define the tag, typically including a 'name', and optionally 'tag_fg' (foreground color hex code) and 'tag_bg' (background color hex code).
   */
  tags?: {
      [key: string]: unknown;
  }[];
  /**
   * Team Id
   * @description The ID of the Team (Workspace) where the time entries are located.
   */
  team_id?: number;
  /**
   * Time Entry Ids
   * @description A list of unique string identifiers for the time entries to which the tags will be added.
   */
  time_entry_ids?: string[];
};

/**
 * Type of CLICKUP's CLICKUP_ADD_TAGS_FROM_TIME_ENTRIES tool output.
 */
type CLICKUP_ADD_TAGS_FROM_TIME_ENTRIES_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the response from the ClickUp API, typically indicating the success or status of the tag addition operation.
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
 * Type of CLICKUP's CLICKUP_ADD_TAG_TO_TASK tool input.
 */
type CLICKUP_ADD_TAG_TO_TASK_INPUT = {
  /**
   * Custom Task Ids
   * @description A boolean flag indicating whether the `task_id` provided is a custom task ID. If `true`, the `team_id` must also be provided.
   */
  custom_task_ids?: boolean;
  /**
   * Tag Name
   * @description The name of the tag to add to the task. The tag must already exist in the workspace.
   */
  tag_name?: string;
  /**
   * Task Id
   * @description The ID of the task to which the tag will be added. This can be the standard task ID or a custom task ID if `custom_task_ids` is set to `true`.
   */
  task_id?: string;
  /**
   * Team Id
   * @description The ID of the team (formerly Workspace) to which the task belongs. This is required only if `custom_task_ids` is set to `true`. For example: `custom_task_ids=true&team_id=123`.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_ADD_TAG_TO_TASK tool output.
 */
type CLICKUP_ADD_TAG_TO_TASK_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_ADD_TASK_LINK tool input.
 */
type CLICKUP_ADD_TASK_LINK_INPUT = {
  /**
   * Custom Task Ids
   * @description Set to `true` to indicate that `task_id` and `links_to` are custom task IDs rather than standard numerical IDs. If `true`, `team_id` must also be provided.
   */
  custom_task_ids?: boolean;
  /**
   * Links To
   * @description The ID of the target task.
   */
  links_to?: string;
  /**
   * Task Id
   * @description The ID of the source task.
   */
  task_id?: string;
  /**
   * Team Id
   * @description The ID of the team, used when `custom_task_ids` is true to identify tasks by custom IDs. For example: `custom_task_ids=true&team_id=123`.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_ADD_TASK_LINK tool output.
 */
type CLICKUP_ADD_TASK_LINK_OUTPUT = {
  /**
   * Data
   * @description Response data, typically confirming the task link.
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
 * Type of CLICKUP's CLICKUP_ADD_TASK_TO_LIST tool input.
 */
type CLICKUP_ADD_TASK_TO_LIST_INPUT = {
  /**
   * List Id
   * @description Unique identifier of the List to which the task will be added.
   */
  list_id?: number;
  /**
   * Task Id
   * @description Unique identifier of the task to add to the List (actual task ID, not Custom Task ID).
   */
  task_id?: string;
};

/**
 * Type of CLICKUP's CLICKUP_ADD_TASK_TO_LIST tool output.
 */
type CLICKUP_ADD_TASK_TO_LIST_OUTPUT = {
  /**
   * Data
   * @description API response confirming task addition; structure may vary.
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
 * Type of CLICKUP's CLICKUP_ATTACHMENTS_UPLOAD_FILE_TO_TASK_AS_ATTACHMENT tool input.
 */
type CLICKUP_ATTACHMENTS_UPLOAD_FILE_TO_TASK_AS_ATTACHMENT_INPUT = {
  /**
   * Attachment
   * @description The file to be uploaded, sent as part of a `multipart/form-data` request. This field should contain the raw file data.
   */
  attachment?: unknown[];
  /**
   * Custom Task Ids
   * @description If `true`, indicates that `task_id` should be interpreted as a custom task ID instead of the default ClickUp task ID. If this is `true`, `team_id` must also be provided.
   */
  custom_task_ids?: boolean;
  /**
   * Task Id
   * @description The unique identifier of the task to which the attachment will be added.
   */
  task_id?: string;
  /**
   * Team Id
   * @description The ID of the team. This is required and used only if `custom_task_ids` is `true` to help locate the task by its custom ID. For example: `custom_task_ids=true&team_id=123`.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_ATTACHMENTS_UPLOAD_FILE_TO_TASK_AS_ATTACHMENT tool output.
 */
type CLICKUP_ATTACHMENTS_UPLOAD_FILE_TO_TASK_AS_ATTACHMENT_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_AUTHORIZATION_GET_ACCESS_TOKEN tool input.
 */
type CLICKUP_AUTHORIZATION_GET_ACCESS_TOKEN_INPUT = {
  /**
   * Client Id
   * @description Client ID for your registered ClickUp OAuth application.
   */
  client_id?: string;
  /**
   * Client Secret
   * @description Client Secret for your registered ClickUp OAuth application.
   */
  client_secret?: string;
  /**
   * Code
   * @description Authorization code from ClickUp's authorization server, typically a query parameter to your redirect URI after user consent.
   */
  code?: string;
};

/**
 * Type of CLICKUP's CLICKUP_AUTHORIZATION_GET_ACCESS_TOKEN tool output.
 */
type CLICKUP_AUTHORIZATION_GET_ACCESS_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Contains the `access_token` and other token-related details (e.g., token type, expiry time); `access_token` is the primary field.
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
 * Type of CLICKUP's CLICKUP_AUTHORIZATION_GET_WORK_SPACE_LIST tool input.
 */
type CLICKUP_AUTHORIZATION_GET_WORK_SPACE_LIST_INPUT = object;

/**
 * Type of CLICKUP's CLICKUP_AUTHORIZATION_GET_WORK_SPACE_LIST tool output.
 */
type CLICKUP_AUTHORIZATION_GET_WORK_SPACE_LIST_OUTPUT = {
  /**
   * Data
   * @description Contains a list of authorized Workspaces (Teams), where each Workspace object includes details like 'id', 'name', 'color', and 'avatar'.
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
 * Type of CLICKUP's CLICKUP_AUTHORIZATION_VIEW_ACCOUNT_DETAILS tool input.
 */
type CLICKUP_AUTHORIZATION_VIEW_ACCOUNT_DETAILS_INPUT = object;

/**
 * Type of CLICKUP's CLICKUP_AUTHORIZATION_VIEW_ACCOUNT_DETAILS tool output.
 */
type CLICKUP_AUTHORIZATION_VIEW_ACCOUNT_DETAILS_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_CHANGE_TAG_NAMES_FROM_TIME_ENTRIES tool input.
 */
type CLICKUP_CHANGE_TAG_NAMES_FROM_TIME_ENTRIES_INPUT = {
  /**
   * Name
   * @description The current name of the time entry tag to be modified.
   */
  name?: string;
  /**
   * New Name
   * @description The new name to be assigned to the time entry tag.
   */
  new_name?: string;
  /**
   * Tag Bg
   * @description The new background color for the tag, specified as a hexadecimal color code.
   */
  tag_bg?: string;
  /**
   * Tag Fg
   * @description The new foreground (text) color for the tag, specified as a hexadecimal color code.
   */
  tag_fg?: string;
  /**
   * Team Id
   * @description The unique identifier of the Team (Workspace) where the time entry tag exists.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_CHANGE_TAG_NAMES_FROM_TIME_ENTRIES tool output.
 */
type CLICKUP_CHANGE_TAG_NAMES_FROM_TIME_ENTRIES_OUTPUT = {
  /**
   * Data
   * @description An empty dictionary confirming the successful renaming and/or recoloring of the tag.
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
 * Type of CLICKUP's CLICKUP_CREATE_A_TIME_ENTRY tool input.
 */
type CLICKUP_CREATE_A_TIME_ENTRY_INPUT = {
  /**
   * Assignee
   * @description The user ID of the person to assign this time entry to. Workspace owners and admins can assign to any user ID. Workspace members can only assign to their own user ID.
   */
  assignee?: number;
  /**
   * Billable
   * @description Indicates whether the time entry is billable. Set to `true` if billable, `false` or omit if not.
   */
  billable?: boolean;
  /**
   * Custom Task Ids
   * @description If `true`, the `tid` parameter will be interpreted as a custom task ID. If this is `true`, the `team_id` query parameter must also be provided to specify the team context for the custom task ID.
   */
  custom_task_ids?: boolean;
  /**
   * Description
   * @description An optional description for the time entry.
   */
  description?: string;
  /**
   * Duration
   * @description The duration of the time entry in milliseconds. Note: If `start` and `end` (or `stop`) times are also provided in the request, the ClickUp API will calculate the duration based on `start` and `end`/`stop`, and this `duration` field's value might be ignored or overridden by the server.
   */
  duration?: number;
  /**
   * End
   * @description Alias for `stop`. The end time of the time entry, as a Unix timestamp in milliseconds. If both `start` and `end` are provided, the API will use these to determine the entry's actual duration, potentially overriding the `duration` field sent in the request.
   */
  end?: number;
  /**
   * Start
   * @description The start time of the time entry, as a Unix timestamp in milliseconds.
   */
  start?: number;
  /**
   * Stop
   * @description The stop time of the time entry, as a Unix timestamp in milliseconds. If both `start` and `stop` are provided, the API will use these to determine the entry's actual duration, potentially overriding the `duration` field sent in the request.
   */
  stop?: number;
  /**
   * Tags
   * @description An array of Tag objects to apply to the time entry. Each Tag object should define 'name' (string), 'tag_fg' (hex color string for foreground), and 'tag_bg' (hex color string for background). This feature is available for users on the ClickUp Business Plan and above.
   */
  tags?: {
      [key: string]: unknown;
  }[];
  /**
   * Team Id
   * @description The ID of the Team (Workspace) to which the time entry will be added.
   */
  team_Id?: number;
  /**
   * Team Id
   * @description The ID of the Team, required only if `custom_task_ids` is set to `true`. This specifies the team context for the custom task ID. Example: `custom_task_ids=true&team_id=123`.
   */
  team_id?: number;
  /**
   * Tid
   * @description The ID of the task to associate this time entry with. If `custom_task_ids` is `true`, this should be the custom task ID.
   */
  tid?: string;
};

/**
 * Type of CLICKUP's CLICKUP_CREATE_A_TIME_ENTRY tool output.
 */
type CLICKUP_CREATE_A_TIME_ENTRY_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the created time entry.
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
 * Type of CLICKUP's CLICKUP_CREATE_CHAT_VIEW_COMMENT tool input.
 */
type CLICKUP_CREATE_CHAT_VIEW_COMMENT_INPUT = {
  /**
   * Comment Text
   * @description The text content of the comment to be added.
   */
  comment_text?: string;
  /**
   * Notify All
   * @description If `True`, notifications for this comment will be sent to all members of the Chat view, including the comment creator. If `False`, notifications will follow standard ClickUp behavior.
   */
  notify_all?: boolean;
  /**
   * View Id
   * @description The unique identifier of the Chat view where the comment will be posted.
   */
  view_id?: string;
};

/**
 * Type of CLICKUP's CLICKUP_CREATE_CHAT_VIEW_COMMENT tool output.
 */
type CLICKUP_CREATE_CHAT_VIEW_COMMENT_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_CREATE_CHECKLIST tool input.
 */
type CLICKUP_CREATE_CHECKLIST_INPUT = {
  /**
   * Custom Task Ids
   * @description If true, `task_id` is treated as a custom task ID, requiring `team_id`.
   */
  custom_task_ids?: boolean;
  /**
   * Name
   * @description Name for the new checklist.
   */
  name?: string;
  /**
   * Task Id
   * @description Unique identifier of the task for the new checklist; can be a standard or custom task ID (if `custom_task_ids` is true).
   */
  task_id?: string;
  /**
   * Team Id
   * @description Team's unique identifier; required only if `custom_task_ids` is true.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_CREATE_CHECKLIST tool output.
 */
type CLICKUP_CREATE_CHECKLIST_OUTPUT = {
  /**
   * Data
   * @description Dictionary representing the created checklist, including its ID and other attributes.
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
 * Type of CLICKUP's CLICKUP_CREATE_CHECKLIST_ITEM tool input.
 */
type CLICKUP_CREATE_CHECKLIST_ITEM_INPUT = {
  /**
   * Assignee
   * @description User ID of the ClickUp user to whom this item will be assigned. If omitted, the item will be unassigned.
   */
  assignee?: number;
  /**
   * Checklist Id
   * @description UUID of the parent checklist where the new item will be created; this checklist must already exist.
   */
  checklist_id?: string;
  /**
   * Name
   * @description Name for the new checklist item. If not provided, the item might be created with a default or empty name.
   */
  name?: string;
};

/**
 * Type of CLICKUP's CLICKUP_CREATE_CHECKLIST_ITEM tool output.
 */
type CLICKUP_CREATE_CHECKLIST_ITEM_OUTPUT = {
  /**
   * Data
   * @description Details of the newly created checklist item, typically including its ID, name, task ID, resolved status, and assignee information.
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
 * Type of CLICKUP's CLICKUP_CREATE_FOLDER tool input.
 */
type CLICKUP_CREATE_FOLDER_INPUT = {
  /**
   * Name
   * @description The name of the Folder to be created.
   */
  name?: string;
  /**
   * Space Id
   * @description Numerical ID of the Space in which to create the Folder.
   */
  space_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_CREATE_FOLDER tool output.
 */
type CLICKUP_CREATE_FOLDER_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_CREATE_FOLDERLESS_LIST tool input.
 */
type CLICKUP_CREATE_FOLDERLESS_LIST_INPUT = {
  /**
   * Assignee
   * @description `user_id` of the list owner. Null for no specific owner.
   */
  assignee?: number;
  /**
   * Content
   * @description Description for the list (plain text or markdown).
   */
  content?: string;
  /**
   * Due Date
   * @description Due date for the list (POSIX timestamp in milliseconds).
   */
  due_date?: number;
  /**
   * Due Date Time
   * @description Indicates if `due_date` includes time (`true`) or is all-day (`false`). Required if `due_date` is set.
   */
  due_date_time?: boolean;
  /**
   * Name
   * @description Name for the new folderless list.
   */
  name?: string;
  /**
   * Priority
   * @description Priority level: `1` (Urgent), `2` (High), `3` (Normal), `4` (Low). Null to remove priority.
   */
  priority?: number;
  /**
   * Space Id
   * @description Identifier of the Space for the new folderless list.
   */
  space_id?: number;
  /**
   * Status
   * @description List color (e.g., 'red', 'blue_blended'), distinct from task statuses within the list. Null for no color.
   */
  status?: string;
};

/**
 * Type of CLICKUP's CLICKUP_CREATE_FOLDERLESS_LIST tool output.
 */
type CLICKUP_CREATE_FOLDERLESS_LIST_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_CREATE_FOLDER_VIEW tool input.
 */
type CLICKUP_CREATE_FOLDER_VIEW_INPUT = {
  /**
   * Columns  Fields
   * @description Array of field names to display as columns in the view. Custom Fields require the `_cf` prefix followed by the Custom Field ID (e.g., `_cf_xxxxxxxx`).
   */
  columns__fields?: string[];
  /**
   * Divide  Collapsed
   * @description If `true`, and if the view type supports division and is configured with `divide__field`, divided sections will be collapsed by default.
   */
  divide__collapsed?: boolean;
  /**
   * Divide  Dir
   * @description This field must be `null` (None). It is intended for specifying sort direction within divided sections, but its configuration is not fully detailed.
   */
  divide__dir?: null;
  /**
   * Divide  Field
   * @description This field must be `null` (None). It is intended for view division features (e.g., swimlanes) whose specific configuration via this parameter is not fully detailed.
   */
  divide__field?: null;
  /**
   * Filters  Fields
   * @description Fields to filter by. Each element represents a filter condition. View the list of available fields in ClickUp's API documentation.
   */
  filters__fields?: string[];
  /**
   * Filters  Op
   * @description Operator for combining filters. The available operator (`op`) values are `AND` and `OR`.
   */
  filters__op?: string;
  /**
   * Filters  Search
   * @description Text string to search for within tasks, comments, and subtasks in the view.
   */
  filters__search?: string;
  /**
   * Filters  Show  Closed
   * @description If `true`, tasks with a closed status are included in the view.
   */
  filters__show__closed?: boolean;
  /**
   * Folder Id
   * @description Numeric ID of the folder where the new view will be created.
   */
  folder_id?: number;
  /**
   * Grouping  Collapsed
   * @description An array of group identifiers (e.g., status names like 'Open', assignee IDs as strings like '123') that should be initially collapsed in the view. These identifiers depend on the `grouping__field` used.
   */
  grouping__collapsed?: string[];
  /**
   * Grouping  Dir
   * @description Set a group sort order. Use `1` for ascending (e.g., urgent priority at top of the view, and tasks with no priority at the bottom) or `-1` to reverse the order (e.g., tasks with no priority at the top).
   */
  grouping__dir?: number;
  /**
   * Grouping  Field
   * @description Field to group tasks by. Options include: `none`, `status`, `priority`, `assignee`, `tag`, or `dueDate`.
   */
  grouping__field?: string;
  /**
   * Grouping  Ignore
   * @description If `true`, tasks with no value for the `grouping__field` will not be grouped and will appear in a separate 'Ungrouped' section.
   */
  grouping__ignore?: boolean;
  /**
   * Name
   * @description Name for the new view.
   */
  name?: string;
  /**
   * Settings  Collapse  Empty  Columns
   * @description Specifies whether to collapse columns with no tasks (e.g., in Board view). Common string values are 'true' or 'false'.
   */
  settings__collapse__empty__columns?: string;
  /**
   * Settings  Me  Checklists
   * @description In 'Me Mode', if `true`, show only checklists assigned to the current user.
   */
  settings__me__checklists?: boolean;
  /**
   * Settings  Me  Comments
   * @description In 'Me Mode', if `true`, show only comments where the current user is mentioned or assigned.
   */
  settings__me__comments?: boolean;
  /**
   * Settings  Me  Subtasks
   * @description In 'Me Mode', if `true`, show only subtasks assigned to the current user.
   */
  settings__me__subtasks?: boolean;
  /**
   * Settings  Show  Assignees
   * @description If `true`, display task assignees.
   */
  settings__show__assignees?: boolean;
  /**
   * Settings  Show  Closed  Subtasks
   * @description If `true`, include closed subtasks in the view.
   */
  settings__show__closed__subtasks?: boolean;
  /**
   * Settings  Show  Images
   * @description If `true`, display task cover images or image attachments.
   */
  settings__show__images?: boolean;
  /**
   * Settings  Show  Subtask  Parent  Names
   * @description If `true`, display parent task names for subtasks.
   */
  settings__show__subtask__parent__names?: boolean;
  /**
   * Settings  Show  Subtasks
   * @description Controls subtask visibility. Acceptable integer values are `1` (show subtasks as separate tasks), `2` (expand subtasks under parent tasks), or `3` (collapse subtasks under parent tasks).
   */
  settings__show__subtasks?: number;
  /**
   * Settings  Show  Task  Locations
   * @description If `true`, display the List, Folder, and Space location for tasks.
   */
  settings__show__task__locations?: boolean;
  /**
   * Sorting  Fields
   * @description Fields to sort tasks by. Elements can be a field name or a JSON string for custom fields. You can sort by the same fields available when filtering a view.
   */
  sorting__fields?: string[];
  /**
   * Team  Sidebar  Assigned  Comments
   * @description If `true`, comments assigned to users will be shown in the team sidebar.
   */
  team__sidebar__assigned__comments?: boolean;
  /**
   * Team  Sidebar  Assignees
   * @description List of user IDs (as strings). Tasks assigned to these users will appear in the 'Assignees' section of the team sidebar.
   */
  team__sidebar__assignees?: string[];
  /**
   * Team  Sidebar  Unassigned  Tasks
   * @description If `true`, unassigned tasks will be shown in the team sidebar.
   */
  team__sidebar__unassigned__tasks?: boolean;
  /**
   * Type
   * @description The type of view to create. Options include: `list`, `board`, `calendar`, `table`, `timeline`, `workload`, `activity`, `map`, `conversation`, or `gantt`.
   */
  type?: string;
};

/**
 * Type of CLICKUP's CLICKUP_CREATE_FOLDER_VIEW tool output.
 */
type CLICKUP_CREATE_FOLDER_VIEW_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_CREATE_GOAL tool input.
 */
type CLICKUP_CREATE_GOAL_INPUT = {
  /**
   * Color
   * @description Hex color string to associate with the goal.
   */
  color?: string;
  /**
   * Description
   * @description Detailed description for the goal.
   */
  description?: string;
  /**
   * Due Date
   * @description Due date for the goal, as a Unix timestamp in milliseconds.
   */
  due_date?: number;
  /**
   * Multiple Owners
   * @description Set to `true` if the goal will have multiple owners; `false` for a single owner.
   */
  multiple_owners?: boolean;
  /**
   * Name
   * @description Name for the goal.
   */
  name?: string;
  /**
   * Owners
   * @description List of user IDs to be assigned as owners of the goal.
   */
  owners?: number[];
  /**
   * Team Id
   * @description Numeric ID of the ClickUp Team (Workspace) where the goal will be created.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_CREATE_GOAL tool output.
 */
type CLICKUP_CREATE_GOAL_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_CREATE_KEY_RESULT tool input.
 */
type CLICKUP_CREATE_KEY_RESULT_INPUT = {
  /**
   * Goal Id
   * @description The unique identifier (UUID) of the parent Goal for which this Key Result is being created.
   */
  goal_id?: string;
  /**
   * List Ids
   * @description An array of List UUIDs to link to this Key Result. Can be used with 'automatic' type Key Results to track progress based on tasks within these lists.
   */
  list_ids?: string[];
  /**
   * Name
   * @description The name for the new Key Result.
   */
  name?: string;
  /**
   * Owners
   * @description A list of numerical user IDs to be assigned as owners of this Key Result.
   */
  owners?: number[];
  /**
   * Steps End
   * @description The target value indicating Key Result completion. For 'boolean' type, use 1 for true/complete. For 'automatic' type, this is often the total count of items to complete (e.g., number of linked tasks).
   */
  steps_end?: number;
  /**
   * Steps Start
   * @description The initial value for tracking Key Result progress. For 'boolean' type, use 0 for false/incomplete, 1 for true/complete. For 'automatic' type, this is often the initial count (e.g., 0).
   */
  steps_start?: number;
  /**
   * Task Ids
   * @description An array of task UUIDs to link to this Key Result. Often used when `type` is 'automatic' to track progress via the completion status of these linked tasks.
   */
  task_ids?: string[];
  /**
   * Type
   * @description Specifies the type of the Key Result, which determines how progress is tracked. Supported types: 'number', 'currency', 'boolean', 'percentage', 'automatic'.
   */
  type?: string;
  /**
   * Unit
   * @description The unit of measurement for Key Results of type 'number', 'currency', or 'percentage' (e.g., '$', '%', 'items'). This may not be applicable for 'boolean' or 'automatic' types where progress is count-based.
   */
  unit?: string;
};

/**
 * Type of CLICKUP's CLICKUP_CREATE_KEY_RESULT tool output.
 */
type CLICKUP_CREATE_KEY_RESULT_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the full data of the newly created Key Result.
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
 * Type of CLICKUP's CLICKUP_CREATE_LIST tool input.
 */
type CLICKUP_CREATE_LIST_INPUT = {
  /**
   * Assignee
   * @description Optional. Numerical user ID of the assignee.
   */
  assignee?: number;
  /**
   * Content
   * @description Optional descriptive content or notes for the list.
   */
  content?: string;
  /**
   * Due Date
   * @description Optional due date for the list, represented as a POSIX timestamp in milliseconds. For example, `1695110307000` for September 19, 2023, 07:58:27 AM GMT.
   */
  due_date?: number;
  /**
   * Due Date Time
   * @description Optional. A boolean flag indicating whether the `due_date` includes a specific time. If `True`, the time component of `due_date` is respected. If `False` or not provided, the list is considered due on the entire day specified by `due_date`.
   */
  due_date_time?: boolean;
  /**
   * Folder Id
   * @description The unique numerical identifier of the folder where the new list will be created.
   */
  folder_id?: number;
  /**
   * Name
   * @description The name to be assigned to the new list.
   */
  name?: string;
  /**
   * Priority
   * @description Optional priority level for the list. Integer values map to: 1 (Urgent), 2 (High), 3 (Normal), 4 (Low).
   */
  priority?: number;
  /**
   * Status
   * @description Optional. Defines the list's color in the ClickUp UI (e.g., 'red', 'blue'). **Important:** This 'status' refers to the visual color of the list itself, not the workflow statuses (like 'To Do', 'In Progress') of tasks within the list.
   */
  status?: string;
};

/**
 * Type of CLICKUP's CLICKUP_CREATE_LIST tool output.
 */
type CLICKUP_CREATE_LIST_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the full details of the newly created list.
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
 * Type of CLICKUP's CLICKUP_CREATE_LIST_COMMENT tool input.
 */
type CLICKUP_CREATE_LIST_COMMENT_INPUT = {
  /**
   * Assignee
   * @description The User ID of the ClickUp user to whom this comment should be assigned, turning it into an actionable item.
   */
  assignee?: number;
  /**
   * Comment Text
   * @description The textual content of the comment to be posted.
   */
  comment_text?: string;
  /**
   * List Id
   * @description The numerical ID of the ClickUp List where the comment will be posted.
   */
  list_id?: number;
  /**
   * Notify All
   * @description If `true`, notifications about this comment will be sent to all members of the list, including the comment's creator. If `false` or omitted, default notification rules (e.g., based on mentions or assignments) will apply.
   */
  notify_all?: boolean;
};

/**
 * Type of CLICKUP's CLICKUP_CREATE_LIST_COMMENT tool output.
 */
type CLICKUP_CREATE_LIST_COMMENT_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing details of the successfully created comment, typically including its ID, text, creation date, and the user who posted it.
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
 * Type of CLICKUP's CLICKUP_CREATE_LIST_VIEW tool input.
 */
type CLICKUP_CREATE_LIST_VIEW_INPUT = {
  /**
   * Columns  Fields
   * @description List of field names for columns. Use `_cf_FIELD_ID` for Custom Fields. Refer to ClickUp API for complex JSON format with Custom Fields.
   */
  columns__fields?: string[];
  /**
   * Divide  Collapsed
   * @description If `true`, collapses divided sections (secondary groups) by default if view division is active.
   */
  divide__collapsed?: boolean;
  /**
   * Divide  Dir
   * @description Direction for secondary grouping (`1` for ascending, `-1` for descending). Type is `None`; consult API documentation for usage.
   */
  divide__dir?: null;
  /**
   * Divide  Field
   * @description Field for secondary grouping (dividing tasks within primary groups). Type is `None`; consult API documentation for usage.
   */
  divide__field?: null;
  /**
   * Filters  Fields
   * @description List of field conditions for filtering tasks. Refer to ClickUp API for available fields and syntax.
   */
  filters__fields?: string[];
  /**
   * Filters  Op
   * @description Logical operator for combining filters: `AND` for all conditions, `OR` for any condition.
   */
  filters__op?: string;
  /**
   * Filters  Search
   * @description Search string to filter tasks by name or content.
   */
  filters__search?: string;
  /**
   * Filters  Show  Closed
   * @description If `true`, includes closed tasks in the view.
   */
  filters__show__closed?: boolean;
  /**
   * Grouping  Collapsed
   * @description List of group identifiers (e.g., status names, assignee IDs) to collapse by default.
   */
  grouping__collapsed?: string[];
  /**
   * Grouping  Dir
   * @description Group sort order: `1` for ascending (e.g., urgent priority top), `-1` for descending (e.g., no priority top).
   */
  grouping__dir?: number;
  /**
   * Grouping  Field
   * @description Field for grouping tasks (e.g., `none`, `status`, `priority`, `assignee`, `tag`, `dueDate`).
   */
  grouping__field?: string;
  /**
   * Grouping  Ignore
   * @description If `true`, hides tasks not falling into any specified group.
   */
  grouping__ignore?: boolean;
  /**
   * List Id
   * @description Numeric ID of the List where the new view will be created.
   */
  list_id?: number;
  /**
   * Name
   * @description Name for the new view.
   */
  name?: string;
  /**
   * Settings  Collapse  Empty  Columns
   * @description Controls collapsing of empty columns. Values like 'true', 'false', or specific keywords (see ClickUp API).
   */
  settings__collapse__empty__columns?: string;
  /**
   * Settings  Me  Checklists
   * @description If `true`, enables 'Me Mode' for checklists, filtering to tasks with checklists assigned to the current user.
   */
  settings__me__checklists?: boolean;
  /**
   * Settings  Me  Comments
   * @description If `true`, enables 'Me Mode' for comments, filtering to tasks where the current user is involved in comments.
   */
  settings__me__comments?: boolean;
  /**
   * Settings  Me  Subtasks
   * @description If `true`, enables 'Me Mode' for subtasks, filtering to subtasks assigned to the current user.
   */
  settings__me__subtasks?: boolean;
  /**
   * Settings  Show  Assignees
   * @description If `true`, shows assignees' avatars or names on tasks.
   */
  settings__show__assignees?: boolean;
  /**
   * Settings  Show  Closed  Subtasks
   * @description If `true`, displays closed subtasks in the view.
   */
  settings__show__closed__subtasks?: boolean;
  /**
   * Settings  Show  Images
   * @description If `true`, displays cover images or image attachments for tasks.
   */
  settings__show__images?: boolean;
  /**
   * Settings  Show  Subtask  Parent  Names
   * @description If `true`, displays parent task names alongside subtasks.
   */
  settings__show__subtask__parent__names?: boolean;
  /**
   * Settings  Show  Subtasks
   * @description Subtask visibility: `1` (separate tasks), `2` (expanded under parent), `3` (collapsed under parent).
   */
  settings__show__subtasks?: number;
  /**
   * Settings  Show  Task  Locations
   * @description If `true`, displays task's location (e.g., List, Folder, Space) in the view.
   */
  settings__show__task__locations?: boolean;
  /**
   * Sorting  Fields
   * @description Array of field names for task sorting (e.g., 'dueDate asc'). Refer to ClickUp API for available fields and syntax.
   */
  sorting__fields?: string[];
  /**
   * Team  Sidebar  Assigned  Comments
   * @description If `true`, team sidebar includes filter for tasks with assigned comments.
   */
  team__sidebar__assigned__comments?: boolean;
  /**
   * Team  Sidebar  Assignees
   * @description List of user IDs for quick assignee filtering in the team sidebar.
   */
  team__sidebar__assignees?: string[];
  /**
   * Team  Sidebar  Unassigned  Tasks
   * @description If `true`, team sidebar includes filter for unassigned tasks.
   */
  team__sidebar__unassigned__tasks?: boolean;
  /**
   * Type
   * @description View type (e.g., `list`, `board`, `calendar`, `table`, `timeline`, `workload`, `activity`, `map`, `conversation`, `gantt`).
   */
  type?: string;
};

/**
 * Type of CLICKUP's CLICKUP_CREATE_LIST_VIEW tool output.
 */
type CLICKUP_CREATE_LIST_VIEW_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_CREATE_SPACE tool input.
 */
type CLICKUP_CREATE_SPACE_INPUT = {
  /**
   * Color
   * @description Hexadecimal color code for the space (e.g., '#FF0000').
   * @default null
   */
  color: string | null;
  /**
   * Features
   * @description Detailed configuration for features to be enabled or customized for the space.
   */
  features?: {
      /**
       * Checklists
       * @description Configuration for the checklists feature.
       */
      checklists?: {
          /**
           * Enabled
           * @description Whether the checklists feature is enabled.
           * @default false
           */
          enabled: boolean;
      };
      /**
       * Custom Fields
       * @description Configuration for the custom fields feature.
       */
      custom_fields?: {
          /**
           * Enabled
           * @description Whether the custom fields feature is enabled.
           * @default false
           */
          enabled: boolean;
      };
      /**
       * Dependency Warning
       * @description Configuration for the dependency warning feature.
       */
      dependency_warning?: {
          /**
           * Dependency Warning
           * @description Specifies if warnings for task dependencies should be displayed.
           * @default false
           */
          dependency_warning: boolean;
          /**
           * Enabled
           * @description Whether the dependency warning feature group is enabled.
           * @default false
           */
          enabled: boolean;
      };
      /**
       * Due Dates
       * @description Configuration for the due dates feature.
       */
      due_dates?: {
          /**
           * Enabled
           * @description Whether the due dates feature is enabled.
           * @default false
           */
          enabled: boolean;
          /**
           * Remap Closed Due Date
           * @description Whether due dates for closed tasks are remapped.
           * @default false
           */
          remap_closed_due_date: boolean;
          /**
           * Remap Due Dates
           * @description Whether due dates for subtasks remap based on parent task changes.
           * @default true
           */
          remap_due_dates: boolean;
          /**
           * Start Date
           * @description Whether start dates are enabled for tasks.
           * @default false
           */
          start_date: boolean;
      };
      /**
       * Portfolios
       * @description Configuration for the portfolios feature.
       */
      portfolios?: {
          /**
           * Enabled
           * @description Whether the portfolios feature is enabled.
           * @default false
           */
          enabled: boolean;
      };
      /**
       * Remap Dependencies
       * @description Configuration for the remap dependencies feature.
       */
      remap_dependencies?: {
          /**
           * Enabled
           * @description Whether the remap dependencies feature group is enabled.
           * @default false
           */
          enabled: boolean;
          /**
           * Remap Dependencies
           * @description Specifies if task dependencies should be automatically remapped.
           * @default false
           */
          remap_dependencies: boolean;
      };
      /**
       * Tags
       * @description Configuration for the tags feature.
       */
      tags?: {
          /**
           * Enabled
           * @description Whether the tags feature is enabled.
           * @default false
           */
          enabled: boolean;
      };
      /**
       * Time Estimates
       * @description Configuration for the time estimates feature.
       */
      time_estimates?: {
          /**
           * Enabled
           * @description Whether the time estimates feature is enabled.
           * @default false
           */
          enabled: boolean;
      };
      /**
       * Time Tracking
       * @description Configuration for the time tracking feature.
       */
      time_tracking?: {
          /**
           * Enabled
           * @description Whether the time tracking feature is enabled.
           * @default false
           */
          enabled: boolean;
      };
  };
  /**
   * Multiple Assignees
   * @description Whether tasks in this space can have multiple assignees.
   * @default true
   */
  multiple_assignees: boolean;
  /**
   * Name
   * @description Desired name for the new space.
   */
  name?: string;
  /**
   * Private
   * @description Whether the space should be private (accessible only to invited members).
   * @default false
   */
  private: boolean;
  /**
   * Team Id
   * @description Unique identifier of the team (workspace) in which to create the space.
   */
  team_id?: string;
};

/**
 * Type of CLICKUP's CLICKUP_CREATE_SPACE tool output.
 */
type CLICKUP_CREATE_SPACE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Archived
       * @description Whether the created space is marked as archived.
       */
      archived: boolean;
      /**
       * Features
       * @description Dictionary detailing enabled features and their settings for the created space.
       */
      features: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description Unique identifier of the created space.
       */
      id: string;
      /**
       * Multiple Assignees
       * @description Whether multiple assignees are enabled for tasks in the created space.
       */
      multiple_assignees: boolean;
      /**
       * Name
       * @description Name of the created space.
       */
      name: string;
      /**
       * Private
       * @description Whether the created space is private.
       */
      private: boolean;
      /**
       * Statuses
       * @description List of status configurations for the newly created space.
       */
      statuses?: {
          [key: string]: unknown;
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
 * Type of CLICKUP's CLICKUP_CREATE_SPACE_TAG tool input.
 */
type CLICKUP_CREATE_SPACE_TAG_INPUT = {
  /**
   * Space Id
   * @description Numeric ID of the Space to create the tag in.
   */
  space_id?: number;
  /**
   * Tag  Name
   * @description Name for the new tag.
   */
  tag__name?: string;
  /**
   * Tag  Tag  Bg
   * @description Hexadecimal background color for the tag.
   */
  tag__tag__bg?: string;
  /**
   * Tag  Tag  Fg
   * @description Hexadecimal foreground (text) color for the tag.
   */
  tag__tag__fg?: string;
};

/**
 * Type of CLICKUP's CLICKUP_CREATE_SPACE_TAG tool output.
 */
type CLICKUP_CREATE_SPACE_TAG_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_CREATE_SPACE_VIEW tool input.
 */
type CLICKUP_CREATE_SPACE_VIEW_INPUT = {
  /**
   * Columns  Fields
   * @description Field identifiers for columns. Use standard field names (e.g., 'status') or Custom Field IDs with `_cf` prefix (e.g., 'ID_cf').
   */
  columns__fields?: string[];
  /**
   * Divide  Collapsed
   * @description If `True`, divided sections are collapsed by default. Required if division is configured.
   */
  divide__collapsed?: boolean;
  /**
   * Divide  Dir
   * @description Sort order for divided sections. Must be `None` if included, as sort direction for divisions may not be applicable here.
   */
  divide__dir?: null;
  /**
   * Divide  Field
   * @description Field to divide tasks by. Must be `None` if included, as division by field may not be applicable for Space views via this action.
   */
  divide__field?: null;
  /**
   * Filters  Fields
   * @description Fields to apply filters on. Refer to ClickUp API documentation for available filterable fields and their syntax.
   */
  filters__fields?: string[];
  /**
   * Filters  Op
   * @description Logical operator (`AND` or `OR`) for combining filters. Required if multiple `filters__fields` are specified.
   */
  filters__op?: string;
  /**
   * Filters  Search
   * @description A search string to filter tasks by keywords or specific criteria within the view.
   */
  filters__search?: string;
  /**
   * Filters  Show  Closed
   * @description If `True`, closed tasks are included in the view.
   */
  filters__show__closed?: boolean;
  /**
   * Grouping  Collapsed
   * @description A list of string identifiers for groups that should be collapsed by default (e.g., status names like 'Closed', or assignee user IDs if grouping by assignee).
   */
  grouping__collapsed?: string[];
  /**
   * Grouping  Dir
   * @description Group sort order: `1` for ascending, `-1` for descending. Required if `grouping__field` is set and not 'none'.
   */
  grouping__dir?: number;
  /**
   * Grouping  Field
   * @description The field to group tasks by. Options include: `none`, `status`, `priority`, `assignee`, `tag`, or `dueDate`.
   */
  grouping__field?: string;
  /**
   * Grouping  Ignore
   * @description If `True`, tasks not matching grouping criteria are hidden; otherwise, they are shown in a default group.
   */
  grouping__ignore?: boolean;
  /**
   * Name
   * @description The name for the new view.
   */
  name?: string;
  /**
   * Settings  Collapse  Empty  Columns
   * @description If 'true', collapses empty columns (e.g., status columns with no tasks). Use string 'true' or 'false'.
   */
  settings__collapse__empty__columns?: string;
  /**
   * Settings  Me  Checklists
   * @description If `True`, in 'Me Mode', this setting filters for or highlights tasks with checklist items assigned to the current user.
   */
  settings__me__checklists?: boolean;
  /**
   * Settings  Me  Comments
   * @description If `True`, in 'Me Mode', this setting filters for or highlights tasks where the current user has made comments.
   */
  settings__me__comments?: boolean;
  /**
   * Settings  Me  Subtasks
   * @description If `True`, in 'Me Mode', this setting filters for or highlights subtasks assigned to the current user.
   */
  settings__me__subtasks?: boolean;
  /**
   * Settings  Show  Assignees
   * @description If `True`, displays task assignees in the view (e.g., on task cards).
   */
  settings__show__assignees?: boolean;
  /**
   * Settings  Show  Closed  Subtasks
   * @description If `True`, includes closed subtasks in the view according to other filter criteria.
   */
  settings__show__closed__subtasks?: boolean;
  /**
   * Settings  Show  Images
   * @description If `True`, displays cover images or image attachments directly on task cards in the view.
   */
  settings__show__images?: boolean;
  /**
   * Settings  Show  Subtask  Parent  Names
   * @description If `True`, displays the parent task name next to subtasks for clarity.
   */
  settings__show__subtask__parent__names?: boolean;
  /**
   * Settings  Show  Subtasks
   * @description How subtasks are displayed: `1` (show as separate tasks), `2` (show expanded under parent task), or `3` (show collapsed under parent task).
   */
  settings__show__subtasks?: number;
  /**
   * Settings  Show  Task  Locations
   * @description If `True`, displays the task's location (List, Folder, Space).
   */
  settings__show__task__locations?: boolean;
  /**
   * Sorting  Fields
   * @description Fields to sort tasks by (e.g., `dueDate`, `priority`). Refer to ClickUp API documentation for a complete list of sortable fields.
   */
  sorting__fields?: string[];
  /**
   * Space Id
   * @description The unique identifier of the Space where the new view will be created.
   */
  space_id?: number;
  /**
   * Team  Sidebar  Assigned  Comments
   * @description If `True`, shows tasks with comments assigned to the current user in the team sidebar.
   */
  team__sidebar__assigned__comments?: boolean;
  /**
   * Team  Sidebar  Assignees
   * @description A list of user IDs (as strings) to filter by in the team sidebar.
   */
  team__sidebar__assignees?: string[];
  /**
   * Team  Sidebar  Unassigned  Tasks
   * @description If `True`, shows unassigned tasks in the team sidebar.
   */
  team__sidebar__unassigned__tasks?: boolean;
  /**
   * Type
   * @description The type of view to create. Valid options include: `list`, `board`, `calendar`, `table`, `timeline`, `workload`, `activity`, `map`, `conversation`, or `gantt`.
   */
  type?: string;
};

/**
 * Type of CLICKUP's CLICKUP_CREATE_SPACE_VIEW tool output.
 */
type CLICKUP_CREATE_SPACE_VIEW_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the full details of the newly created Space view object.
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
 * Type of CLICKUP's CLICKUP_CREATE_TASK tool input.
 */
type CLICKUP_CREATE_TASK_INPUT = {
  /**
   * Assignees
   * @description User IDs to assign to the task.
   */
  assignees?: number[];
  /**
   * Check Required Custom Fields
   * @description `True` to enforce filling all required Custom Fields upon creation.
   */
  check_required_custom_fields?: boolean;
  /**
   * Custom Fields
   * @description Custom fields to apply. See ClickUp API for structure.
   */
  custom_fields?: {
      [key: string]: unknown;
  }[];
  /**
   * Custom Item Id
   * @description Custom task type ID. Omit or use `null` for standard task, `1` for Milestone, or Workspace-defined ID for others.
   */
  custom_item_id?: number;
  /**
   * Custom Task Ids
   * @description Enables referencing tasks by custom task ID; requires `team_id` if `true`.
   */
  custom_task_ids?: boolean;
  /**
   * Description
   * @description Task's detailed description.
   */
  description?: string;
  /**
   * Due Date
   * @description Due date as a Unix timestamp in milliseconds.
   */
  due_date?: number;
  /**
   * Due Date Time
   * @description `True` if `due_date` includes a specific time, `false` if it's an all-day task.
   */
  due_date_time?: boolean;
  /**
   * Links To
   * @description ID of an existing task to link as a dependency.
   */
  links_to?: string;
  /**
   * List Id
   * @description The ID of the list where the task will be created.
   */
  list_id?: number;
  /**
   * Name
   * @description The name of the new task.
   */
  name?: string;
  /**
   * Notify All
   * @description `True` to send notifications to all task watchers, including the creator.
   */
  notify_all?: boolean;
  /**
   * Parent
   * @description ID of an existing task to be the parent (creating a subtask). Parent must not be a subtask and must be in the same list.
   */
  parent?: string;
  /**
   * Priority
   * @description Priority level: 1 (Urgent), 2 (High), 3 (Normal), 4 (Low).
   */
  priority?: number;
  /**
   * Start Date
   * @description Start date as a Unix timestamp in milliseconds.
   */
  start_date?: number;
  /**
   * Start Date Time
   * @description `True` if `start_date` includes a specific time, `false` if it's an all-day task.
   */
  start_date_time?: boolean;
  /**
   * Status
   * @description Status to set for the task.
   */
  status?: string;
  /**
   * Tags
   * @description Tag names to apply.
   */
  tags?: string[];
  /**
   * Team Id
   * @description Team ID, required only if `custom_task_ids` is `true`.
   */
  team_id?: number;
  /**
   * Time Estimate
   * @description Estimated time to complete, in milliseconds.
   */
  time_estimate?: number;
};

/**
 * Type of CLICKUP's CLICKUP_CREATE_TASK tool output.
 */
type CLICKUP_CREATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Full details of the newly created task.
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
 * Type of CLICKUP's CLICKUP_CREATE_TASK_ATTACHMENT tool input.
 */
type CLICKUP_CREATE_TASK_ATTACHMENT_INPUT = {
  /**
   * Attachment
   * @description The file to be uploaded, sent as part of a `multipart/form-data` request. This field should contain the raw file data.
   */
  attachment?: unknown[];
  /**
   * Custom Task Ids
   * @description If `true`, indicates that `task_id` should be interpreted as a custom task ID instead of the default ClickUp task ID. If this is `true`, `team_id` must also be provided.
   */
  custom_task_ids?: boolean;
  /**
   * Task Id
   * @description The unique identifier of the task to which the attachment will be added.
   */
  task_id?: string;
  /**
   * Team Id
   * @description The ID of the team. This is required and used only if `custom_task_ids` is `true` to help locate the task by its custom ID. For example: `custom_task_ids=true&team_id=123`.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_CREATE_TASK_ATTACHMENT tool output.
 */
type CLICKUP_CREATE_TASK_ATTACHMENT_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_CREATE_TASK_COMMENT tool input.
 */
type CLICKUP_CREATE_TASK_COMMENT_INPUT = {
  /**
   * Assignee
   * @description The user ID of the person to whom this specific comment should be assigned or mentioned. This assigns the comment, not the task.
   */
  assignee?: number;
  /**
   * Comment Text
   * @description The text content for the comment. Supports ClickUp's comment formatting (e.g., mentions, markdown).
   */
  comment_text?: string;
  /**
   * Custom Task Ids
   * @description Set to `true` to indicate that the `task_id` provided is a custom task ID. If `true`, the `team_id` must also be provided.
   */
  custom_task_ids?: boolean;
  /**
   * Notify All
   * @description If `true`, notifications for this comment will be sent to all users watching the task, including the comment's creator. If `false`, notifications will be sent according to standard ClickUp notification rules (e.g., to mentioned users, comment assignee).
   */
  notify_all?: boolean;
  /**
   * Task Id
   * @description Unique task identifier for the comment. Can be standard or custom if `custom_task_ids` is true.
   */
  task_id?: string;
  /**
   * Team Id
   * @description Team ID, required if `custom_task_ids` is true to locate the task by its custom ID.
   * @default null
   */
  team_id: number | null;
};

/**
 * Type of CLICKUP's CLICKUP_CREATE_TASK_COMMENT tool output.
 */
type CLICKUP_CREATE_TASK_COMMENT_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the response data from the API, typically including the ID of the created comment, its content, and other relevant details.
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
 * Type of CLICKUP's CLICKUP_CREATE_TASK_FROM_TEMPLATE tool input.
 */
type CLICKUP_CREATE_TASK_FROM_TEMPLATE_INPUT = {
  /**
   * List Id
   * @description Numeric ID of the ClickUp list for task creation, found in the list's URL.
   */
  list_id?: number;
  /**
   * Name
   * @description Name for the new task created from the template.
   */
  name?: string;
  /**
   * Template Id
   * @description Unique string ID of the task template to use.
   */
  template_id?: string;
};

/**
 * Type of CLICKUP's CLICKUP_CREATE_TASK_FROM_TEMPLATE tool output.
 */
type CLICKUP_CREATE_TASK_FROM_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Details of the newly created task.
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
 * Type of CLICKUP's CLICKUP_CREATE_TEAM tool input.
 */
type CLICKUP_CREATE_TEAM_INPUT = {
  /**
   * Members
   * @description User IDs to be initial members of the new team (user group).
   */
  members?: number[];
  /**
   * Name
   * @description Name for the new team (user group).
   */
  name?: string;
  /**
   * Team Id
   * @description Workspace ID where the team (user group) will be created (this is referred to as 'Team ID' in the ClickUp API).
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_CREATE_TEAM tool output.
 */
type CLICKUP_CREATE_TEAM_OUTPUT = {
  /**
   * Data
   * @description Details of the newly created team (user group).
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
 * Type of CLICKUP's CLICKUP_CREATE_WEBHOOK tool input.
 */
type CLICKUP_CREATE_WEBHOOK_INPUT = {
  /**
   * Endpoint
   * @description Publicly accessible URL for ClickUp to send POST notifications for subscribed events.
   */
  endpoint?: string;
  /**
   * Events
   * @description Event types to subscribe to; use '*' for all events on the resource. Examples: 'taskCreated', 'taskUpdated'.
   */
  events?: string[];
  /**
   * Folder Id
   * @description Optional. ID of the Folder to scope the webhook; triggers only for events in this Folder.
   */
  folder_id?: number;
  /**
   * List Id
   * @description Optional. ID of the List to scope the webhook; triggers only for events in this List.
   */
  list_id?: number;
  /**
   * Space Id
   * @description Optional. ID of the Space to scope the webhook; triggers only for events in this Space.
   */
  space_id?: number;
  /**
   * Task Id
   * @description Optional. ID of the Task to scope the webhook; triggers only for events for this Task.
   */
  task_id?: string;
  /**
   * Team Id
   * @description ID of the Team (Workspace) for the webhook.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_CREATE_WEBHOOK tool output.
 */
type CLICKUP_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response. Typically includes the 'id' of the created webhook and a 'webhook' object detailing its configuration (endpoint, events, resource scope), health status, and secret.
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
 * Type of CLICKUP's CLICKUP_CREATE_WORKSPACE_EVERYTHING_LEVEL_VIEW tool input.
 */
type CLICKUP_CREATE_WORKSPACE_EVERYTHING_LEVEL_VIEW_INPUT = {
  /**
   * Columns  Fields
   * @description Columns to display and their order. Prefix Custom Fields with `_cf`. For specific configurations, use a JSON object string.
   */
  columns__fields?: string[];
  /**
   * Divide  Collapsed
   * @description If true, divided sections are collapsed by default.
   */
  divide__collapsed?: boolean;
  /**
   * Divide  Dir
   * @description Sort direction for divided sections: `1` for ascending, `-1` for descending.
   */
  divide__dir?: null;
  /**
   * Divide  Field
   * @description Field to divide the view by, creating separate sections (e.g., 'priority', 'status').
   */
  divide__field?: null;
  /**
   * Filters  Fields
   * @description Fields to apply filters on. See ClickUp API docs for filterable fields.
   */
  filters__fields?: string[];
  /**
   * Filters  Op
   * @description Logical operator for combining filters (`AND` or `OR`).
   */
  filters__op?: string;
  /**
   * Filters  Search
   * @description Search term to filter tasks by name, description, etc.
   */
  filters__search?: string;
  /**
   * Filters  Show  Closed
   * @description If true, include tasks with 'Closed' status in the view.
   */
  filters__show__closed?: boolean;
  /**
   * Grouping  Collapsed
   * @description List of group identifiers (e.g., status names, assignee IDs) to be collapsed by default.
   */
  grouping__collapsed?: string[];
  /**
   * Grouping  Dir
   * @description Sort order for grouped tasks: `1` for ascending, `-1` for descending.
   */
  grouping__dir?: number;
  /**
   * Grouping  Field
   * @description Field to group tasks by (e.g., status, priority).
   */
  grouping__field?: string;
  /**
   * Grouping  Ignore
   * @description If true, tasks in closed statuses are excluded from grouping.
   */
  grouping__ignore?: boolean;
  /**
   * Name
   * @description Name for the new view.
   */
  name?: string;
  /**
   * Settings  Collapse  Empty  Columns
   * @description If true, collapse or hide empty columns.
   */
  settings__collapse__empty__columns?: string;
  /**
   * Settings  Me  Checklists
   * @description If true, 'Me Mode' filters for tasks where current user is assigned to checklist items.
   */
  settings__me__checklists?: boolean;
  /**
   * Settings  Me  Comments
   * @description If true, 'Me Mode' filters for tasks commented on by the current user.
   */
  settings__me__comments?: boolean;
  /**
   * Settings  Me  Subtasks
   * @description If true, 'Me Mode' filters for subtasks assigned to the current user.
   */
  settings__me__subtasks?: boolean;
  /**
   * Settings  Show  Assignees
   * @description If true, display task assignees.
   */
  settings__show__assignees?: boolean;
  /**
   * Settings  Show  Closed  Subtasks
   * @description If true, show closed subtasks according to `settings_show_subtasks`.
   */
  settings__show__closed__subtasks?: boolean;
  /**
   * Settings  Show  Images
   * @description If true, show task cover images or attachment previews.
   */
  settings__show__images?: boolean;
  /**
   * Settings  Show  Subtask  Parent  Names
   * @description If true, display parent task name next to subtasks.
   */
  settings__show__subtask__parent__names?: boolean;
  /**
   * Settings  Show  Subtasks
   * @description Subtask display mode: `1` (separate), `2` (expand), `3` (collapse).
   */
  settings__show__subtasks?: number;
  /**
   * Settings  Show  Task  Locations
   * @description If true, display breadcrumb path (Space > Folder > List) for each task.
   */
  settings__show__task__locations?: boolean;
  /**
   * Sorting  Fields
   * @description Fields to sort tasks by. See ClickUp API docs for sortable fields.
   */
  sorting__fields?: string[];
  /**
   * Team  Sidebar  Assigned  Comments
   * @description If true, team sidebar includes filter for tasks with assigned comments.
   */
  team__sidebar__assigned__comments?: boolean;
  /**
   * Team  Sidebar  Assignees
   * @description List of user IDs to filter tasks by in the team sidebar.
   */
  team__sidebar__assignees?: string[];
  /**
   * Team  Sidebar  Unassigned  Tasks
   * @description If true, team sidebar includes filter for unassigned tasks.
   */
  team__sidebar__unassigned__tasks?: boolean;
  /**
   * Team Id
   * @description Team (Workspace) ID where the 'Everything' level view will be created.
   */
  team_id?: number;
  /**
   * Type
   * @description Type of view to create (e.g., list, board, calendar).
   */
  type?: string;
};

/**
 * Type of CLICKUP's CLICKUP_CREATE_WORKSPACE_EVERYTHING_LEVEL_VIEW tool output.
 */
type CLICKUP_CREATE_WORKSPACE_EVERYTHING_LEVEL_VIEW_OUTPUT = {
  /**
   * Data
   * @description Details of the newly created view, including ID and configuration.
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
 * Type of CLICKUP's CLICKUP_DELETE_A_TIME_ENTRY tool input.
 */
type CLICKUP_DELETE_A_TIME_ENTRY_INPUT = {
  /**
   * Team Id
   * @description Unique identifier of the Workspace from which the time entry will be deleted.
   */
  team_id?: number;
  /**
   * Timer Id
   * @description Unique identifier of the time entry to be deleted.
   */
  timer_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_DELETE_A_TIME_ENTRY tool output.
 */
type CLICKUP_DELETE_A_TIME_ENTRY_OUTPUT = {
  /**
   * Data
   * @description Response data from the API. For a successful deletion, this may be an empty object or a confirmation message.
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
 * Type of CLICKUP's CLICKUP_DELETE_CHECKLIST tool input.
 */
type CLICKUP_DELETE_CHECKLIST_INPUT = {
  /**
   * Checklist Id
   * @description The unique identifier (UUID) of the checklist to be deleted.
   */
  checklist_id?: string;
};

/**
 * Type of CLICKUP's CLICKUP_DELETE_CHECKLIST tool output.
 */
type CLICKUP_DELETE_CHECKLIST_OUTPUT = {
  /**
   * Data
   * @description An empty object is typically returned upon successful deletion of the checklist.
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
 * Type of CLICKUP's CLICKUP_DELETE_CHECKLIST_ITEM tool input.
 */
type CLICKUP_DELETE_CHECKLIST_ITEM_INPUT = {
  /**
   * Checklist Id
   * @description Unique identifier (UUID) of the checklist containing the item to be deleted.
   */
  checklist_id?: string;
  /**
   * Checklist Item Id
   * @description Unique identifier (UUID) of the specific checklist item to be deleted.
   */
  checklist_item_id?: string;
};

/**
 * Type of CLICKUP's CLICKUP_DELETE_CHECKLIST_ITEM tool output.
 */
type CLICKUP_DELETE_CHECKLIST_ITEM_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_DELETE_COMMENT tool input.
 */
type CLICKUP_DELETE_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description The unique identifier of the comment to be deleted.
   */
  comment_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_DELETE_COMMENT tool output.
 */
type CLICKUP_DELETE_COMMENT_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_DELETE_DEPENDENCY tool input.
 */
type CLICKUP_DELETE_DEPENDENCY_INPUT = {
  /**
   * Custom Task Ids
   * @description If true, interprets `task_id`, `depends_on`, and `dependency_of` as custom task IDs; `team_id` also required.
   */
  custom_task_ids?: boolean;
  /**
   * Dependency Of
   * @description Identifier of the task that depends on `task_id` (i.e., this task is blocked by `task_id`).
   */
  dependency_of?: string;
  /**
   * Depends On
   * @description Identifier of the task that `task_id` depends on (i.e., `task_id` is blocked by this task).
   */
  depends_on?: string;
  /**
   * Task Id
   * @description Identifier of the primary task whose dependency relationships with `depends_on` and `dependency_of` tasks will be removed.
   */
  task_id?: string;
  /**
   * Team Id
   * @description Numeric team ID, required only when `custom_task_ids` is true to scope custom task IDs.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_DELETE_DEPENDENCY tool output.
 */
type CLICKUP_DELETE_DEPENDENCY_OUTPUT = {
  /**
   * Data
   * @description API response; typically an empty object `{}` on successful deletion of a dependency.
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
 * Type of CLICKUP's CLICKUP_DELETE_FOLDER tool input.
 */
type CLICKUP_DELETE_FOLDER_INPUT = {
  /**
   * Folder Id
   * @description The unique numerical identifier of the folder to be deleted.
   */
  folder_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_DELETE_FOLDER tool output.
 */
type CLICKUP_DELETE_FOLDER_OUTPUT = {
  /**
   * Data
   * @description An empty dictionary upon successful deletion, or error details if deletion fails.
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
 * Type of CLICKUP's CLICKUP_DELETE_GOAL tool input.
 */
type CLICKUP_DELETE_GOAL_INPUT = {
  /**
   * Goal Id
   * @description The unique identifier (UUID) of the Goal to be deleted.
   */
  goal_id?: string;
};

/**
 * Type of CLICKUP's CLICKUP_DELETE_GOAL tool output.
 */
type CLICKUP_DELETE_GOAL_OUTPUT = {
  /**
   * Data
   * @description Response data from the API. Typically an empty object on successful deletion.
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
 * Type of CLICKUP's CLICKUP_DELETE_KEY_RESULT tool input.
 */
type CLICKUP_DELETE_KEY_RESULT_INPUT = {
  /**
   * Key Result Id
   * @description The unique identifier (UUID) of the Key Result to be deleted. This is often referred to as a 'Target' in the context of Goals.
   */
  key_result_id?: string;
};

/**
 * Type of CLICKUP's CLICKUP_DELETE_KEY_RESULT tool output.
 */
type CLICKUP_DELETE_KEY_RESULT_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response data. Typically, this will be an empty object for a successful deletion (indicating an HTTP 204 No Content response).
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
 * Type of CLICKUP's CLICKUP_DELETE_LIST tool input.
 */
type CLICKUP_DELETE_LIST_INPUT = {
  /**
   * List Id
   * @description The unique numerical identifier of the List to be deleted. This ID can be found by navigating to the List in ClickUp; the ID is often present in the URL.
   */
  list_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_DELETE_LIST tool output.
 */
type CLICKUP_DELETE_LIST_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the response from the ClickUp API. Typically, this will be an empty object on successful deletion, confirming the List has been removed.
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
 * Type of CLICKUP's CLICKUP_DELETE_SPACE tool input.
 */
type CLICKUP_DELETE_SPACE_INPUT = {
  /**
   * Space Id
   * @description Unique numerical ID of the Space to be deleted.
   */
  space_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_DELETE_SPACE tool output.
 */
type CLICKUP_DELETE_SPACE_OUTPUT = {
  /**
   * Data
   * @description An empty dictionary indicating successful deletion of the Space.
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
 * Type of CLICKUP's CLICKUP_DELETE_SPACE_TAG tool input.
 */
type CLICKUP_DELETE_SPACE_TAG_INPUT = {
  /**
   * Space Id
   * @description Numeric identifier of the Space from which the Tag will be deleted.
   */
  space_id?: number;
  /**
   * Tag  Name
   * @description Name of the Tag in the request body. Though schema-optional, generally required by the API to match the Tag's actual name for successful deletion.
   */
  tag__name?: string;
  /**
   * Tag  Tag  Bg
   * @description Background color of the Tag in HEX format (e.g., '#FF5733') in the request body. Though schema-optional, generally required by the API for successful deletion.
   */
  tag__tag__bg?: string;
  /**
   * Tag  Tag  Fg
   * @description Foreground (text) color of the Tag in HEX format (e.g., '#FFFFFF') in the request body. Though schema-optional, generally required by the API for successful deletion.
   */
  tag__tag__fg?: string;
  /**
   * Tag Name
   * @description Name of the Tag to be deleted, used in the URL path to identify it.
   */
  tag_name?: string;
};

/**
 * Type of CLICKUP's CLICKUP_DELETE_SPACE_TAG tool output.
 */
type CLICKUP_DELETE_SPACE_TAG_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response. For a successful deletion, this is typically an empty object or a minimal success confirmation.
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
 * Type of CLICKUP's CLICKUP_DELETE_TASK tool input.
 */
type CLICKUP_DELETE_TASK_INPUT = {
  /**
   * Custom Task Ids
   * @description Set to `true` if `task_id` is a custom ID (requires `team_id` if `true`).
   */
  custom_task_ids?: boolean;
  /**
   * Task Id
   * @description Unique ID of the task to delete. Can be a standard ID or a custom task ID (if custom, `custom_task_ids` must be `true`).
   */
  task_id?: string;
  /**
   * Team Id
   * @description Team ID. Required only if `custom_task_ids` is `true` to identify the team for the custom task ID.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_DELETE_TASK tool output.
 */
type CLICKUP_DELETE_TASK_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_DELETE_TASK_LINK tool input.
 */
type CLICKUP_DELETE_TASK_LINK_INPUT = {
  /**
   * Custom Task Ids
   * @description If `task_id` and `links_to` refer to custom task IDs (rather than standard ClickUp task IDs), this parameter must be set to `true`. Setting this to `true` also requires `team_id` to be provided. Defaults to `false` if not specified.
   */
  custom_task_ids?: boolean;
  /**
   * Links To
   * @description The ID of the second task involved in the link. If `custom_task_ids` is `true`, this should be its custom task ID.
   */
  links_to?: string;
  /**
   * Task Id
   * @description The ID of the first task involved in the link. If `custom_task_ids` is `true`, this should be its custom task ID.
   */
  task_id?: string;
  /**
   * Team Id
   * @description The numerical ID of the team. This parameter is required and used only when `custom_task_ids` is set to `true` to correctly scope the custom task IDs. For example: `custom_task_ids=true&team_id=123`.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_DELETE_TASK_LINK tool output.
 */
type CLICKUP_DELETE_TASK_LINK_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response. Typically, for a successful delete operation, this may be an empty object or include a success status.
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
 * Type of CLICKUP's CLICKUP_DELETE_TEAM tool input.
 */
type CLICKUP_DELETE_TEAM_INPUT = {
  /**
   * Group Id
   * @description The unique string identifier for the Team (user group) to be deleted.
   */
  group_id?: string;
};

/**
 * Type of CLICKUP's CLICKUP_DELETE_TEAM tool output.
 */
type CLICKUP_DELETE_TEAM_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API's response. Typically, this will be an empty object or include a status confirming successful deletion.
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
 * Type of CLICKUP's CLICKUP_DELETE_TIME_TRACKED tool input.
 */
type CLICKUP_DELETE_TIME_TRACKED_INPUT = {
  /**
   * Custom Task Ids
   * @description Set to `true` if `task_id` refers to a custom task ID. If `true`, `team_id` must also be provided. If omitted or `false`, `task_id` is treated as a standard ID.
   */
  custom_task_ids?: boolean;
  /**
   * Interval Id
   * @description ID of the time tracking interval (entry) to be deleted.
   */
  interval_id?: string;
  /**
   * Task Id
   * @description Task ID; can be standard or custom if `custom_task_ids` is set to true.
   */
  task_id?: string;
  /**
   * Team Id
   * @description The ID of the team. This is required only if `custom_task_ids` is set to `true` to correctly identify the task using its custom ID. For example: `custom_task_ids=true&team_id=123`.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_DELETE_TIME_TRACKED tool output.
 */
type CLICKUP_DELETE_TIME_TRACKED_OUTPUT = {
  /**
   * Data
   * @description An empty dictionary is typically returned upon successful deletion, in line with the legacy endpoint's behavior.
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
 * Type of CLICKUP's CLICKUP_DELETE_VIEW tool input.
 */
type CLICKUP_DELETE_VIEW_INPUT = {
  /**
   * View Id
   * @description The unique identifier of the View to be deleted.
   */
  view_id?: string;
};

/**
 * Type of CLICKUP's CLICKUP_DELETE_VIEW tool output.
 */
type CLICKUP_DELETE_VIEW_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_DELETE_WEBHOOK tool input.
 */
type CLICKUP_DELETE_WEBHOOK_INPUT = {
  /**
   * Webhook Id
   * @description The unique identifier (UUID) of the webhook to be deleted.
   */
  webhook_id?: string;
};

/**
 * Type of CLICKUP's CLICKUP_DELETE_WEBHOOK tool output.
 */
type CLICKUP_DELETE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Response data. Typically empty for a successful deletion (HTTP 204 No Content).
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
 * Type of CLICKUP's CLICKUP_EDIT_CHECKLIST tool input.
 */
type CLICKUP_EDIT_CHECKLIST_INPUT = {
  /**
   * Checklist Id
   * @description The unique identifier (UUID) of the checklist to be edited.
   */
  checklist_id?: string;
  /**
   * Name
   * @description New name for the checklist.
   */
  name?: string;
  /**
   * Position
   * @description New 0-indexed display order for the checklist on a task (e.g., 0 for top).
   */
  position?: number;
};

/**
 * Type of CLICKUP's CLICKUP_EDIT_CHECKLIST tool output.
 */
type CLICKUP_EDIT_CHECKLIST_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the updated checklist.
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
 * Type of CLICKUP's CLICKUP_EDIT_CHECKLIST_ITEM tool input.
 */
type CLICKUP_EDIT_CHECKLIST_ITEM_INPUT = {
  /**
   * Assignee
   * @description The integer user ID to assign to this checklist item. To unassign, consult ClickUp API documentation for the appropriate value (e.g., 0 or null).
   */
  assignee?: string;
  /**
   * Checklist Id
   * @description The unique identifier (UUID) of the checklist containing the item to be edited.
   */
  checklist_id?: string;
  /**
   * Checklist Item Id
   * @description The unique identifier (UUID) of the checklist item to be edited.
   */
  checklist_item_id?: string;
  /**
   * Name
   * @description The new name for the checklist item.
   */
  name?: string;
  /**
   * Parent
   * @description The `checklist_item_id` of an existing item within the same checklist to nest this item under.
   */
  parent?: string;
  /**
   * Resolved
   * @description Set to `true` to mark the item as resolved, or `false` to mark it as unresolved.
   */
  resolved?: boolean;
};

/**
 * Type of CLICKUP's CLICKUP_EDIT_CHECKLIST_ITEM tool output.
 */
type CLICKUP_EDIT_CHECKLIST_ITEM_OUTPUT = {
  /**
   * Data
   * @description Details of the updated checklist item.
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
 * Type of CLICKUP's CLICKUP_EDIT_GUEST_ON_WORKSPACE tool input.
 */
type CLICKUP_EDIT_GUEST_ON_WORKSPACE_INPUT = {
  /**
   * Can Create Views
   * @description Boolean flag to allow or disallow the guest to create views.
   */
  can_create_views?: boolean;
  /**
   * Can Edit Tags
   * @description Boolean flag to allow or disallow the guest to edit tags.
   */
  can_edit_tags?: boolean;
  /**
   * Can See Time Estimated
   * @description Boolean flag to allow or disallow the guest to see time estimated for tasks.
   */
  can_see_time_estimated?: boolean;
  /**
   * Can See Time Spent
   * @description Boolean flag to allow or disallow the guest to see time spent on tasks.
   */
  can_see_time_spent?: boolean;
  /**
   * Custom Role Id
   * @description Identifier of a custom role for the guest. Ensure this ID is valid within the workspace. (Note: Business Plus Plan supports one custom role; Enterprise Plan supports unlimited).
   */
  custom_role_id?: number;
  /**
   * Guest Id
   * @description The unique identifier of the guest user to be edited. Example: 98765.
   */
  guest_id?: number;
  /**
   * Team Id
   * @description The unique identifier of the Workspace (Team) where the guest belongs. Example: 123456.
   */
  team_id?: number;
  /**
   * Username
   * @description The new username to assign to the guest.
   */
  username?: string;
};

/**
 * Type of CLICKUP's CLICKUP_EDIT_GUEST_ON_WORKSPACE tool output.
 */
type CLICKUP_EDIT_GUEST_ON_WORKSPACE_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_EDIT_KEY_RESULT tool input.
 */
type CLICKUP_EDIT_KEY_RESULT_INPUT = {
  /**
   * Key Result Id
   * @description The unique identifier (UUID) of the key result to be edited.
   */
  key_result_id?: string;
  /**
   * Note
   * @description A note or comment to add or update for the key result.
   */
  note?: string;
  /**
   * Steps Current
   * @description The current progress of steps for the key result.
   */
  steps_current?: number;
};

/**
 * Type of CLICKUP's CLICKUP_EDIT_KEY_RESULT tool output.
 */
type CLICKUP_EDIT_KEY_RESULT_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_EDIT_SPACE_TAG tool input.
 */
type CLICKUP_EDIT_SPACE_TAG_INPUT = {
  /**
   * Space Id
   * @description Unique identifier of the Space containing the tag.
   */
  space_id?: number;
  /**
   * Tag  Bg  Color
   * @description New background color for the tag, specified as a hexadecimal string (e.g., '#000000').
   */
  tag__bg__color?: string;
  /**
   * Tag  Fg  Color
   * @description New foreground color for the tag, specified as a hexadecimal string (e.g., '#FFFFFF').
   */
  tag__fg__color?: string;
  /**
   * Tag  Name
   * @description New name to assign to the tag.
   */
  tag__name?: string;
  /**
   * Tag Name
   * @description Current name of the tag to edit. This tag must exist within the specified Space.
   */
  tag_name?: string;
};

/**
 * Type of CLICKUP's CLICKUP_EDIT_SPACE_TAG tool output.
 */
type CLICKUP_EDIT_SPACE_TAG_OUTPUT = {
  /**
   * Data
   * @description API response, typically detailing the updated tag.
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
 * Type of CLICKUP's CLICKUP_EDIT_TIME_TRACKED tool input.
 */
type CLICKUP_EDIT_TIME_TRACKED_INPUT = {
  /**
   * Custom Task Ids
   * @description If true, `task_id` is treated as a custom task ID, and `team_id` must be provided.
   */
  custom_task_ids?: boolean;
  /**
   * End
   * @description New end date and time for the interval as a Unix timestamp in milliseconds.
   */
  end?: number;
  /**
   * Interval Id
   * @description Unique identifier of the time interval record to edit.
   */
  interval_id?: string;
  /**
   * Start
   * @description New start date and time for the interval as a Unix timestamp in milliseconds.
   */
  start?: number;
  /**
   * Task Id
   * @description Unique task identifier; refers to custom task ID if `custom_task_ids` is true.
   */
  task_id?: string;
  /**
   * Team Id
   * @description Team ID, required if `custom_task_ids` is true.
   */
  team_id?: number;
  /**
   * Time
   * @description New total duration of the time interval in milliseconds; typically the difference between `end` and `start`.
   */
  time?: number;
};

/**
 * Type of CLICKUP's CLICKUP_EDIT_TIME_TRACKED tool output.
 */
type CLICKUP_EDIT_TIME_TRACKED_OUTPUT = {
  /**
   * Data
   * @description Details of the updated time entry.
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
 * Type of CLICKUP's CLICKUP_EDIT_USER_ON_WORKSPACE tool input.
 */
type CLICKUP_EDIT_USER_ON_WORKSPACE_INPUT = {
  /**
   * Admin
   * @description Set `true` to make user an admin, `false` to revoke admin privileges.
   */
  admin?: boolean;
  /**
   * Custom Role Id
   * @description ID of the custom role to assign, defining their permissions.
   */
  custom_role_id?: number;
  /**
   * Team Id
   * @description Workspace (formerly Team) ID where the user resides.
   */
  team_id?: number;
  /**
   * User Id
   * @description ID of the user whose details are to be edited.
   */
  user_id?: number;
  /**
   * Username
   * @description New username to assign.
   */
  username?: string;
};

/**
 * Type of CLICKUP's CLICKUP_EDIT_USER_ON_WORKSPACE tool output.
 */
type CLICKUP_EDIT_USER_ON_WORKSPACE_OUTPUT = {
  /**
   * Data
   * @description Contains the updated user object details.
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
 * Type of CLICKUP's CLICKUP_FOLDERS_CREATE_NEW_FOLDER tool input.
 */
type CLICKUP_FOLDERS_CREATE_NEW_FOLDER_INPUT = {
  /**
   * Name
   * @description The name of the Folder to be created.
   */
  name?: string;
  /**
   * Space Id
   * @description Numerical ID of the Space in which to create the Folder.
   */
  space_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_FOLDERS_CREATE_NEW_FOLDER tool output.
 */
type CLICKUP_FOLDERS_CREATE_NEW_FOLDER_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_FOLDERS_GET_CONTENTS_OF tool input.
 */
type CLICKUP_FOLDERS_GET_CONTENTS_OF_INPUT = {
  /**
   * Archived
   * @description Filter Folders by archived status. `True` for archived, `False` for unarchived. Omit to return both.
   */
  archived?: boolean;
  /**
   * Space Id
   * @description The unique numeric identifier of the Space from which to retrieve Folders.
   */
  space_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_FOLDERS_GET_CONTENTS_OF tool output.
 */
type CLICKUP_FOLDERS_GET_CONTENTS_OF_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response. This typically includes a key (e.g., 'folders') which holds a list of Folder objects and their associated details.
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
 * Type of CLICKUP's CLICKUP_FOLDERS_GET_FOLDER_CONTENT tool input.
 */
type CLICKUP_FOLDERS_GET_FOLDER_CONTENT_INPUT = {
  /**
   * Folder Id
   * @description The unique identifier of the folder.
   */
  folder_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_FOLDERS_GET_FOLDER_CONTENT tool output.
 */
type CLICKUP_FOLDERS_GET_FOLDER_CONTENT_OUTPUT = {
  /**
   * Data
   * @description Attributes and details of the specified folder, including its name, lists, and other properties.
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
 * Type of CLICKUP's CLICKUP_GET_ACCESSIBLE_CUSTOM_FIELDS tool input.
 */
type CLICKUP_GET_ACCESSIBLE_CUSTOM_FIELDS_INPUT = {
  /**
   * List Id
   * @description Numeric ID of the specific ClickUp List.
   */
  list_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_ACCESSIBLE_CUSTOM_FIELDS tool output.
 */
type CLICKUP_GET_ACCESSIBLE_CUSTOM_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Contains a 'fields' key: an array of Custom Field objects, each detailing an accessible field's ID, name, type, and configuration for the List.
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
 * Type of CLICKUP's CLICKUP_GET_ACCESS_TOKEN tool input.
 */
type CLICKUP_GET_ACCESS_TOKEN_INPUT = {
  /**
   * Client Id
   * @description Client ID for your registered ClickUp OAuth application.
   */
  client_id?: string;
  /**
   * Client Secret
   * @description Client Secret for your registered ClickUp OAuth application.
   */
  client_secret?: string;
  /**
   * Code
   * @description Authorization code from ClickUp's authorization server, typically a query parameter to your redirect URI after user consent.
   */
  code?: string;
};

/**
 * Type of CLICKUP's CLICKUP_GET_ACCESS_TOKEN tool output.
 */
type CLICKUP_GET_ACCESS_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Contains the `access_token` and other token-related details (e.g., token type, expiry time); `access_token` is the primary field.
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
 * Type of CLICKUP's CLICKUP_GET_ALL_TAGS_FROM_TIME_ENTRIES tool input.
 */
type CLICKUP_GET_ALL_TAGS_FROM_TIME_ENTRIES_INPUT = {
  /**
   * Team Id
   * @description The unique numerical identifier of the ClickUp Team (Workspace) for which to retrieve time entry tags.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_ALL_TAGS_FROM_TIME_ENTRIES tool output.
 */
type CLICKUP_GET_ALL_TAGS_FROM_TIME_ENTRIES_OUTPUT = {
  /**
   * Data
   * @description The API response data, typically a structure containing a list of tag objects. Each object describes a unique tag (name, colors, attributes) applied to time entries in the specified Workspace.
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
 * Type of CLICKUP's CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES tool input.
 */
type CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES_INPUT = object;

/**
 * Type of CLICKUP's CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES tool output.
 */
type CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES_OUTPUT = {
  /**
   * Data
   * @description Contains a list of authorized Workspaces (Teams), where each Workspace object includes details like 'id', 'name', 'color', and 'avatar'.
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
 * Type of CLICKUP's CLICKUP_GET_AUTHORIZED_USER tool input.
 */
type CLICKUP_GET_AUTHORIZED_USER_INPUT = object;

/**
 * Type of CLICKUP's CLICKUP_GET_AUTHORIZED_USER tool output.
 */
type CLICKUP_GET_AUTHORIZED_USER_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_GET_BULK_TASKS_TIME_IN_STATUS tool input.
 */
type CLICKUP_GET_BULK_TASKS_TIME_IN_STATUS_INPUT = {
  /**
   * Custom Task Ids
   * @description Set to `true` if `task_ids` refer to custom task IDs instead of standard task IDs. If `true`, `team_id` must also be provided.
   */
  custom_task_ids?: boolean;
  /**
   * Task Ids
   * @description A comma-separated string of task IDs (e.g., 'taskID1,taskID2') for which to retrieve time in status data. You can include up to 100 task IDs per request.
   */
  task_ids?: string;
  /**
   * Team Id
   * @description The ID of the team to which the custom task IDs belong. This field is required and used only when the `custom_task_ids` parameter is set to `true`.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_BULK_TASKS_TIME_IN_STATUS tool output.
 */
type CLICKUP_GET_BULK_TASKS_TIME_IN_STATUS_OUTPUT = {
  /**
   * Data
   * @description A dictionary where keys are task IDs and values are objects detailing the time spent in each status for that task.
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
 * Type of CLICKUP's CLICKUP_GET_CHAT_VIEW_COMMENTS tool input.
 */
type CLICKUP_GET_CHAT_VIEW_COMMENTS_INPUT = {
  /**
   * Start
   * @description Unix timestamp (milliseconds) to filter comments created at or after this time. For pagination, typically used with `start_id`.
   */
  start?: number;
  /**
   * Start Id
   * @description Comment ID to act as a cursor for pagination, used with `start` to retrieve comments after this ID that also meet the `start` time condition.
   */
  start_id?: string;
  /**
   * View Id
   * @description Unique identifier of the Chat view from which to retrieve comments.
   */
  view_id?: string;
};

/**
 * Type of CLICKUP's CLICKUP_GET_CHAT_VIEW_COMMENTS tool output.
 */
type CLICKUP_GET_CHAT_VIEW_COMMENTS_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_GET_CUSTOM_ROLES tool input.
 */
type CLICKUP_GET_CUSTOM_ROLES_INPUT = {
  /**
   * Include Members
   * @description If true, includes members assigned to each custom role in the response.
   */
  include_members?: boolean;
  /**
   * Team Id
   * @description The unique identifier of the Workspace (Team) for which to retrieve custom roles.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_CUSTOM_ROLES tool output.
 */
type CLICKUP_GET_CUSTOM_ROLES_OUTPUT = {
  /**
   * Data
   * @description The API response containing a list of custom roles. If `include_members` was true in the request, each role object also includes its assigned members.
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
 * Type of CLICKUP's CLICKUP_GET_CUSTOM_TASK_TYPES tool input.
 */
type CLICKUP_GET_CUSTOM_TASK_TYPES_INPUT = {
  /**
   * Team Id
   * @description Numeric ID of the Workspace (formerly Team) for which to retrieve custom task types.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_CUSTOM_TASK_TYPES tool output.
 */
type CLICKUP_GET_CUSTOM_TASK_TYPES_OUTPUT = {
  /**
   * Data
   * @description Dictionary where keys are custom task type identifiers and values are their details.
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
 * Type of CLICKUP's CLICKUP_GET_FILTERED_TEAM_TASKS tool input.
 */
type CLICKUP_GET_FILTERED_TEAM_TASKS_INPUT = {
  /**
   * Assignees
   * @description Filter by assignee User IDs.
   */
  assignees?: string[];
  /**
   * Custom Fields
   * @description Filter by custom fields. Each string in the list is a JSON object defining a single filter condition. Example for one string in the list: '''{"field_id": "unique_field_id", "operator": "=", "value": "desired_value"}'''.
   */
  custom_fields?: string[];
  /**
   * Custom Items
   * @description Filter by custom item types (e.g., 0 for tasks, 1 for Milestones, other numbers for custom types defined in Workspace).
   */
  custom_items?: number[];
  /**
   * Custom Task Ids
   * @description Set to true to use custom task IDs in filters instead of global task IDs. Requires `team_id` for context.
   */
  custom_task_ids?: boolean;
  /**
   * Date Created Gt
   * @description Filter by creation date greater than this Unix timestamp (milliseconds).
   */
  date_created_gt?: number;
  /**
   * Date Created Lt
   * @description Filter by creation date less than this Unix timestamp (milliseconds).
   */
  date_created_lt?: number;
  /**
   * Date Done Gt
   * @description Filter by completion date greater than this Unix timestamp (milliseconds).
   */
  date_done_gt?: number;
  /**
   * Date Done Lt
   * @description Filter by completion date less than this Unix timestamp (milliseconds).
   */
  date_done_lt?: number;
  /**
   * Date Updated Gt
   * @description Filter by update date greater than this Unix timestamp (milliseconds).
   */
  date_updated_gt?: number;
  /**
   * Date Updated Lt
   * @description Filter by update date less than this Unix timestamp (milliseconds).
   */
  date_updated_lt?: number;
  /**
   * Due Date Gt
   * @description Filter by due date greater than this Unix timestamp (milliseconds).
   */
  due_date_gt?: number;
  /**
   * Due Date Lt
   * @description Filter by due date less than this Unix timestamp (milliseconds).
   */
  due_date_lt?: number;
  /**
   * Include Closed
   * @description If true, include closed tasks. Excluded by default.
   */
  include_closed?: boolean;
  /**
   * Include Markdown Description
   * @description If true, return task descriptions in Markdown format.
   */
  include_markdown_description?: boolean;
  /**
   * List Ids
   * @description Filter by List IDs.
   */
  list_ids?: string[];
  /**
   * Order By
   * @description Order tasks by this field. Default: `created`. Options: `id`, `created`, `updated`, `due_date`.
   */
  order_by?: string;
  /**
   * Page
   * @description Page to fetch (starts at 0).
   */
  page?: number;
  /**
   * Parent
   * @description Filter by parent task ID to retrieve its subtasks.
   */
  parent?: string;
  /**
   * Project Ids
   * @description Filter by Folder (Project) IDs.
   */
  project_ids?: string[];
  /**
   * Reverse
   * @description If true, tasks are displayed in reverse order.
   */
  reverse?: boolean;
  /**
   * Space Ids
   * @description Filter by Space IDs.
   */
  space_ids?: string[];
  /**
   * Statuses
   * @description Filter by task statuses (e.g., 'to do', 'in progress').
   */
  statuses?: string[];
  /**
   * Subtasks
   * @description If true, include subtasks. Excluded by default.
   */
  subtasks?: boolean;
  /**
   * Tags
   * @description Filter by tag names.
   */
  tags?: string[];
  /**
   * Team Id
   * @description Team ID (Workspace).
   */
  team_Id?: string;
  /**
   * Team Id
   * @description Team ID, required if `custom_task_ids` is true, for custom task ID context.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_FILTERED_TEAM_TASKS tool output.
 */
type CLICKUP_GET_FILTERED_TEAM_TASKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Last Page */
      last_page: boolean;
      /** Tasks */
      tasks: {
          /** Archived */
          archived: boolean;
          /**
           * Assignees
           * @default []
           */
          assignees: {
              /** Color */
              color: string;
              /**
               * Email
               * @default null
               */
              email: string | null;
              /** Id */
              id: number;
              /**
               * Initials
               * @default null
               */
              initials: string | null;
              /**
               * Profile Picture
               * @default null
               */
              profilePicture: string | null;
              /** Username */
              username: string;
          }[];
          /**
           * Checklists
           * @default []
           */
          checklists: {
              /** Creator */
              creator: number;
              /** Date Created */
              date_created: string;
              /** Id */
              id: string;
              /**
               * Items
               * @default []
               */
              items: {
                  /**
                   * ClickUpUser
                   * @description ClickUp User model based on actual API response
                   * @default null
                   */
                  assignee: {
                      /** Color */
                      color: string;
                      /**
                       * Email
                       * @default null
                       */
                      email: string | null;
                      /** Id */
                      id: number;
                      /**
                       * Initials
                       * @default null
                       */
                      initials: string | null;
                      /**
                       * Profile Picture
                       * @default null
                       */
                      profilePicture: string | null;
                      /** Username */
                      username: string;
                  } | null;
                  /**
                   * Children
                   * @default []
                   */
                  children: unknown[];
                  /** Date Created */
                  date_created: string;
                  /**
                   * Due Date
                   * @default null
                   */
                  due_date: string | null;
                  /**
                   * Due Date Time
                   * @default null
                   */
                  due_date_time: boolean | null;
                  /**
                   * Group Assignee
                   * @default null
                   */
                  group_assignee: unknown;
                  /** Id */
                  id: string;
                  /** Name */
                  name: string;
                  /**
                   * Orderindex
                   * @default null
                   */
                  orderindex: number | null;
                  /**
                   * Parent
                   * @default null
                   */
                  parent: string | null;
                  /** Resolved */
                  resolved: boolean;
                  /**
                   * Sent Due Date Notif
                   * @default null
                   */
                  sent_due_date_notif: string | null;
                  /**
                   * Start Date
                   * @default null
                   */
                  start_date: string | null;
                  /**
                   * Start Date Time
                   * @default null
                   */
                  start_date_time: boolean | null;
              }[];
              /** Name */
              name: string;
              /** Orderindex */
              orderindex: number;
              /** Resolved */
              resolved: number;
              /** Task Id */
              task_id: string;
              /** Unresolved */
              unresolved: number;
          }[];
          /**
           * Creator
           * @description ClickUp User model based on actual API response
           */
          creator: {
              /** Color */
              color: string;
              /**
               * Email
               * @default null
               */
              email: string | null;
              /** Id */
              id: number;
              /**
               * Initials
               * @default null
               */
              initials: string | null;
              /**
               * Profile Picture
               * @default null
               */
              profilePicture: string | null;
              /** Username */
              username: string;
          };
          /**
           * Custom Fields
           * @default []
           */
          custom_fields: unknown[];
          /**
           * Custom Id
           * @default null
           */
          custom_id: string | null;
          /** Custom Item Id */
          custom_item_id: number;
          /**
           * Date Closed
           * @default null
           */
          date_closed: string | null;
          /** Date Created */
          date_created: string;
          /**
           * Date Done
           * @default null
           */
          date_done: string | null;
          /** Date Updated */
          date_updated: string;
          /**
           * Dependencies
           * @default []
           */
          dependencies: unknown[];
          /** Description */
          description: string;
          /**
           * Due Date
           * @default null
           */
          due_date: string | null;
          /**
           * Folder
           * @description Task Project/Folder model based on actual API response
           */
          folder: {
              /** Access */
              access: boolean;
              /** Hidden */
              hidden: boolean;
              /** Id */
              id: string;
              /** Name */
              name: string;
          };
          /**
           * Group Assignees
           * @default []
           */
          group_assignees: unknown[];
          /** Id */
          id: string;
          /**
           * Linked Tasks
           * @default []
           */
          linked_tasks: {
              /** Date Created */
              date_created: string;
              /** Link Id */
              link_id: string;
              /** Task Id */
              task_id: string;
              /** Userid */
              userid: string;
              /** Workspace Id */
              workspace_id: string;
          }[];
          /**
           * List
           * @description Task List model based on actual API response
           */
          list: {
              /** Access */
              access: boolean;
              /** Id */
              id: string;
              /** Name */
              name: string;
          };
          /**
           * Locations
           * @default []
           */
          locations: unknown[];
          /** Name */
          name: string;
          /** Orderindex */
          orderindex: string;
          /**
           * Parent
           * @default null
           */
          parent: string | null;
          /** Permission Level */
          permission_level: string;
          /**
           * Points
           * @default null
           */
          points: number | null;
          /**
           * TaskPriority
           * @description Task Priority model based on actual API response
           * @default null
           */
          priority: {
              /** Color */
              color: string;
              /** Id */
              id: string;
              /** Orderindex */
              orderindex: string;
              /** Priority */
              priority: string;
          } | null;
          /**
           * Project
           * @description Task Project/Folder model based on actual API response
           */
          project: {
              /** Access */
              access: boolean;
              /** Hidden */
              hidden: boolean;
              /** Id */
              id: string;
              /** Name */
              name: string;
          };
          /**
           * Sharing
           * @description Task Sharing model based on actual API response
           */
          sharing: {
              /** Public */
              public: boolean;
              /**
               * Public Fields
               * @default []
               */
              public_fields: string[];
              /**
               * Public Share Expires On
               * @default null
               */
              public_share_expires_on: string | null;
              /** Seo Optimized */
              seo_optimized: boolean;
              /**
               * Token
               * @default null
               */
              token: string | null;
          };
          /**
           * Space
           * @description Task Space model based on actual API response
           */
          space: {
              /** Id */
              id: string;
          };
          /**
           * Start Date
           * @default null
           */
          start_date: string | null;
          /**
           * Status
           * @description Task Status model based on actual API response
           */
          status: {
              /** Color */
              color: string;
              /** Id */
              id: string;
              /** Orderindex */
              orderindex: number;
              /** Status */
              status: string;
              /** Type */
              type: string;
          };
          /**
           * Tags
           * @default []
           */
          tags: {
              /** Creator */
              creator: number;
              /** Name */
              name: string;
              /** Tag Bg */
              tag_bg: string;
              /** Tag Fg */
              tag_fg: string;
          }[];
          /** Team Id */
          team_id: string;
          /** Text Content */
          text_content: string;
          /**
           * Time Estimate
           * @default null
           */
          time_estimate: number | null;
          /**
           * Time Spent
           * @default null
           */
          time_spent: number | null;
          /**
           * Top Level Parent
           * @default null
           */
          top_level_parent: string | null;
          /** Url */
          url: string;
          /**
           * Watchers
           * @default []
           */
          watchers: {
              /** Color */
              color: string;
              /**
               * Email
               * @default null
               */
              email: string | null;
              /** Id */
              id: number;
              /**
               * Initials
               * @default null
               */
              initials: string | null;
              /**
               * Profile Picture
               * @default null
               */
              profilePicture: string | null;
              /** Username */
              username: string;
          }[];
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
 * Type of CLICKUP's CLICKUP_GET_FOLDER tool input.
 */
type CLICKUP_GET_FOLDER_INPUT = {
  /**
   * Folder Id
   * @description The unique identifier of the folder.
   */
  folder_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_FOLDER tool output.
 */
type CLICKUP_GET_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Attributes and details of the specified folder, including its name, lists, and other properties.
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
 * Type of CLICKUP's CLICKUP_GET_FOLDERLESS_LISTS tool input.
 */
type CLICKUP_GET_FOLDERLESS_LISTS_INPUT = {
  /**
   * Archived
   * @description Filter by archived status. Set to `true` to retrieve archived Lists, `false` or omit to retrieve unarchived Lists.
   */
  archived?: boolean;
  /**
   * Space Id
   * @description The ID of the Space from which to retrieve folderless Lists.
   */
  space_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_FOLDERLESS_LISTS tool output.
 */
type CLICKUP_GET_FOLDERLESS_LISTS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the 'lists' key, which holds a list of List objects that are not in any folder within the specified Space.
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
 * Type of CLICKUP's CLICKUP_GET_FOLDERS tool input.
 */
type CLICKUP_GET_FOLDERS_INPUT = {
  /**
   * Archived
   * @description Filter Folders by archived status. `True` for archived, `False` for unarchived. Omit to return both.
   */
  archived?: boolean;
  /**
   * Space Id
   * @description The unique numeric identifier of the Space from which to retrieve Folders.
   */
  space_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_FOLDERS tool output.
 */
type CLICKUP_GET_FOLDERS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response. This typically includes a key (e.g., 'folders') which holds a list of Folder objects and their associated details.
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
 * Type of CLICKUP's CLICKUP_GET_FOLDER_VIEWS tool input.
 */
type CLICKUP_GET_FOLDER_VIEWS_INPUT = {
  /**
   * Folder Id
   * @description ID of the Folder.
   */
  folder_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_FOLDER_VIEWS tool output.
 */
type CLICKUP_GET_FOLDER_VIEWS_OUTPUT = {
  /**
   * Data
   * @description Contains a 'views' key holding a list of view objects, each detailing a configured view (e.g., List, Board, Calendar) for the Folder.
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
 * Type of CLICKUP's CLICKUP_GET_GOAL tool input.
 */
type CLICKUP_GET_GOAL_INPUT = {
  /**
   * Goal Id
   * @description The unique identifier (UUID) of the Goal to retrieve.
   */
  goal_id?: string;
};

/**
 * Type of CLICKUP's CLICKUP_GET_GOAL tool output.
 */
type CLICKUP_GET_GOAL_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the detailed information of the Goal. This typically includes fields such as `id`, `name`, `description`, `due_date`, `owners`, `key_results` (Targets), `percent_completed`, and `creation_date`.
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
 * Type of CLICKUP's CLICKUP_GET_GOALS tool input.
 */
type CLICKUP_GET_GOALS_INPUT = {
  /**
   * Include Completed
   * @description If true, include completed goals in the response.
   */
  include_completed?: boolean;
  /**
   * Team Id
   * @description The unique numerical identifier of the Workspace (Team) for which to retrieve goals.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_GOALS tool output.
 */
type CLICKUP_GET_GOALS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the response from the ClickUp API. This typically includes a list of goal objects under a key such as 'goals'.
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
 * Type of CLICKUP's CLICKUP_GET_GUEST tool input.
 */
type CLICKUP_GET_GUEST_INPUT = {
  /**
   * Guest Id
   * @description The unique identifier for the guest whose information is to be retrieved.
   */
  guest_id?: number;
  /**
   * Team Id
   * @description The unique identifier for the Team (Workspace) to which the guest belongs.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_GUEST tool output.
 */
type CLICKUP_GET_GUEST_OUTPUT = {
  /**
   * Data
   * @description Detailed information of the guest, such as their user object.
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
 * Type of CLICKUP's CLICKUP_GET_LIST tool input.
 */
type CLICKUP_GET_LIST_INPUT = {
  /**
   * List Id
   * @description The unique identifier for the List to retrieve. This ID can be found by right-clicking a List in the ClickUp sidebar, selecting 'Copy link', and the ID is the last part of the URL after '/l/' or '/li/'.
   */
  list_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_LIST tool output.
 */
type CLICKUP_GET_LIST_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the comprehensive details of the specified List.
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
 * Type of CLICKUP's CLICKUP_GET_LISTS tool input.
 */
type CLICKUP_GET_LISTS_INPUT = {
  /**
   * Archived
   * @description Filter lists by archived status. If `true`, returns archived lists; if `false` or omitted, returns unarchived lists.
   */
  archived?: boolean;
  /**
   * Folder Id
   * @description The unique identifier of the Folder from which to retrieve lists.
   */
  folder_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_LISTS tool output.
 */
type CLICKUP_GET_LISTS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the lists retrieved from the specified folder.
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
 * Type of CLICKUP's CLICKUP_GET_LIST_COMMENTS tool input.
 */
type CLICKUP_GET_LIST_COMMENTS_INPUT = {
  /**
   * List Id
   * @description The unique identifier for the list from which to retrieve comments.
   */
  list_id?: number;
  /**
   * Start
   * @description Unix timestamp (milliseconds) of a comment's creation date.
   */
  start?: number;
  /**
   * Start Id
   * @description ID of a specific comment.
   */
  start_id?: string;
};

/**
 * Type of CLICKUP's CLICKUP_GET_LIST_COMMENTS tool output.
 */
type CLICKUP_GET_LIST_COMMENTS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the array of comment objects retrieved for the list. Each comment object includes details such as commenter, content, and creation date.
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
 * Type of CLICKUP's CLICKUP_GET_LIST_MEMBERS tool input.
 */
type CLICKUP_GET_LIST_MEMBERS_INPUT = {
  /**
   * List Id
   * @description Unique identifier of the ClickUp List. Found by extracting the numerical ID from the List's URL in ClickUp.
   */
  list_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_LIST_MEMBERS tool output.
 */
type CLICKUP_GET_LIST_MEMBERS_OUTPUT = {
  /**
   * Data
   * @description Dictionary containing user objects with details about each member of the list.
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
 * Type of CLICKUP's CLICKUP_GET_LIST_VIEWS tool input.
 */
type CLICKUP_GET_LIST_VIEWS_INPUT = {
  /**
   * List Id
   * @description The ID of the List for which to retrieve views. This is the numeric ID of the list, often found at the end of the list's URL.
   */
  list_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_LIST_VIEWS tool output.
 */
type CLICKUP_GET_LIST_VIEWS_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_GET_RUNNING_TIME_ENTRY tool input.
 */
type CLICKUP_GET_RUNNING_TIME_ENTRY_INPUT = {
  /**
   * Assignee
   * @description Identifier of the user for the time entry; defaults to the authenticated user if not provided.
   */
  assignee?: number;
  /**
   * Team Id
   * @description Unique identifier for the Workspace (Team).
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_RUNNING_TIME_ENTRY tool output.
 */
type CLICKUP_GET_RUNNING_TIME_ENTRY_OUTPUT = {
  /**
   * Data
   * @description Details of the currently running time entry; a negative 'duration' in this data indicates an active timer.
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
 * Type of CLICKUP's CLICKUP_GET_SINGULAR_TIME_ENTRY tool input.
 */
type CLICKUP_GET_SINGULAR_TIME_ENTRY_INPUT = {
  /**
   * Include  Task
   * @description If true and the time entry is associated with a task, includes task details in the response.
   */
  include__task?: boolean;
  /**
   * Include Location Names
   * @description If true, includes names of the List, Folder, and Space associated with the time entry, alongside their IDs.
   */
  include_location_names?: boolean;
  /**
   * Team Id
   * @description Unique identifier for the Team (Workspace).
   */
  team_id?: number;
  /**
   * Timer Id
   * @description Unique identifier of the time entry. Can be obtained from the 'Get Time Entries Within a Date Range' action.
   */
  timer_id?: string;
};

/**
 * Type of CLICKUP's CLICKUP_GET_SINGULAR_TIME_ENTRY tool output.
 */
type CLICKUP_GET_SINGULAR_TIME_ENTRY_OUTPUT = {
  /**
   * Data
   * @description Detailed information of the singular time entry.
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
 * Type of CLICKUP's CLICKUP_GET_SPACE tool input.
 */
type CLICKUP_GET_SPACE_INPUT = {
  /**
   * Space Id
   * @description Unique ID of the Space to retrieve.
   */
  space_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_SPACE tool output.
 */
type CLICKUP_GET_SPACE_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the retrieved Space. Contents may vary based on the Space's configuration, enabled ClickApps (features), and custom fields.
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
 * Type of CLICKUP's CLICKUP_GET_SPACES tool input.
 */
type CLICKUP_GET_SPACES_INPUT = {
  /**
   * Archived
   * @description Filter by archived status (`true` for archived, `false` for active); API default if omitted.
   */
  archived?: boolean;
  /**
   * Team Id
   * @description Identifier for the Team (Workspace).
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_SPACES tool output.
 */
type CLICKUP_GET_SPACES_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_GET_SPACE_TAGS tool input.
 */
type CLICKUP_GET_SPACE_TAGS_INPUT = {
  /**
   * Space Id
   * @description The unique numerical identifier of the Space for which tags are to be retrieved.
   */
  space_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_SPACE_TAGS tool output.
 */
type CLICKUP_GET_SPACE_TAGS_OUTPUT = {
  /**
   * Data
   * @description Dictionary containing the tags from the specified Space. The 'tags' key holds a list of tag objects, each with details like 'id', 'name', 'tag_fg' (tag foreground color), and 'tag_bg' (tag background color).
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
 * Type of CLICKUP's CLICKUP_GET_SPACE_VIEWS tool input.
 */
type CLICKUP_GET_SPACE_VIEWS_INPUT = {
  /**
   * Space Id
   * @description ID of the Space to retrieve views from.
   */
  space_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_SPACE_VIEWS tool output.
 */
type CLICKUP_GET_SPACE_VIEWS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the views within the Space. The keys are view IDs and the values are objects containing view details such as name, type, and parent.
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
 * Type of CLICKUP's CLICKUP_GET_TASK tool input.
 */
type CLICKUP_GET_TASK_INPUT = {
  /**
   * Custom Task Ids
   * @description Set to `true` to indicate that the `task_id` provided is a custom task ID. If `true`, `team_id` must also be provided. If omitted or `false` (default), `task_id` is treated as a standard task ID.
   */
  custom_task_ids?: boolean;
  /**
   * Include Markdown Description
   * @description Set to `true` to return the task description in Markdown format. If omitted or `false` (default), the description is returned in plain text. For example: `?include_markdown_description=true`.
   */
  include_markdown_description?: boolean;
  /**
   * Include Subtasks
   * @description Set to `true` to include subtasks in the task details response. If omitted or `false` (default), subtasks are not included.
   */
  include_subtasks?: boolean;
  /**
   * Task Id
   * @description The unique identifier of the task to retrieve. This can be the standard ClickUp task ID or a custom task ID if `custom_task_ids` is set to `true` (in which case `team_id` is also required).
   */
  task_id?: string;
  /**
   * Team Id
   * @description The ID of the team. This parameter is required and used only when `custom_task_ids` is set to `true` to identify the custom task ID within that specific team. For example: `custom_task_ids=true&team_id=123`.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_TASK tool output.
 */
type CLICKUP_GET_TASK_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_GET_TASKS tool input.
 */
type CLICKUP_GET_TASKS_INPUT = {
  /**
   * Archived
   * @description Include or exclude archived tasks.
   */
  archived?: boolean;
  /**
   * Assignees
   * @description Filter tasks by a list of assignee IDs.
   */
  assignees?: string[];
  /**
   * Custom Fields
   * @description Filter tasks by custom field values. Provide a list of JSON strings, each defining a custom field filter. Example for a single filter: '[{"field_id":"field_id_1","operator":"=","value":"field_value_1"}]'. For multiple filters: '[{"field_id":"field_id_1","operator":"=","value":"field_value_1"}, {"field_id":"field_id_2","operator":"<","value":5}]'. See ClickUp API documentation for more on filtering with Custom Fields.
   */
  custom_fields?: string[];
  /**
   * Custom Items
   * @description Filter by custom task types. For example: `?custom_items[]=0&custom_items[]=1300`. Including `0` returns tasks. Including `1` returns Milestones. Including any other number returns the custom task type as defined in your Workspace.
   */
  custom_items?: number[];
  /**
   * Date Created Gt
   * @description Filter tasks with a creation date greater than the provided Unix timestamp in milliseconds.
   */
  date_created_gt?: number;
  /**
   * Date Created Lt
   * @description Filter tasks with a creation date less than the provided Unix timestamp in milliseconds.
   */
  date_created_lt?: number;
  /**
   * Date Done Gt
   * @description Filter tasks with a completion date greater than the provided Unix timestamp in milliseconds.
   */
  date_done_gt?: number;
  /**
   * Date Done Lt
   * @description Filter tasks with a completion date less than the provided Unix timestamp in milliseconds.
   */
  date_done_lt?: number;
  /**
   * Date Updated Gt
   * @description Filter tasks with an update date greater than the provided Unix timestamp in milliseconds.
   */
  date_updated_gt?: number;
  /**
   * Date Updated Lt
   * @description Filter tasks with an update date less than the provided Unix timestamp in milliseconds.
   */
  date_updated_lt?: number;
  /**
   * Due Date Gt
   * @description Filter tasks with a due date greater than the provided Unix timestamp in milliseconds.
   */
  due_date_gt?: number;
  /**
   * Due Date Lt
   * @description Filter tasks with a due date less than the provided Unix timestamp in milliseconds.
   */
  due_date_lt?: number;
  /**
   * Include Closed
   * @description Include tasks with a closed status.
   */
  include_closed?: boolean;
  /**
   * Include Markdown Description
   * @description Return task descriptions in Markdown format.
   */
  include_markdown_description?: boolean;
  /**
   * List Id
   * @description The ID of the list to retrieve tasks from. To find the list_id, copy the link to the list from the ClickUp UI; the list_id is the number following '/li' in the URL.
   */
  list_id?: number;
  /**
   * Order By
   * @description Field to order tasks by. Valid options are: 'id', 'created', 'updated', and 'due_date'.
   */
  order_by?: string;
  /**
   * Page
   * @description The page number of results to fetch, starting at 0. Each page can contain up to 100 tasks.
   */
  page?: number;
  /**
   * Reverse
   * @description Display tasks in reverse order based on the 'order_by' field.
   */
  reverse?: boolean;
  /**
   * Statuses
   * @description Filter tasks by their status. Pass a list of status strings. Use URL encoding for statuses with spaces (e.g., 'to%20do'). To include closed tasks, use the `include_closed` parameter.
   */
  statuses?: string[];
  /**
   * Subtasks
   * @description Include subtasks in the results.
   */
  subtasks?: boolean;
  /**
   * Tags
   * @description Filter tasks by a list of tag names. Use URL encoding for tags with spaces (e.g., 'this%20tag').
   */
  tags?: string[];
};

/**
 * Type of CLICKUP's CLICKUP_GET_TASKS tool output.
 */
type CLICKUP_GET_TASKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Last Page */
      last_page: boolean;
      /** Tasks */
      tasks: {
          /** Archived */
          archived: boolean;
          /**
           * Assignees
           * @default []
           */
          assignees: {
              /** Color */
              color: string;
              /**
               * Email
               * @default null
               */
              email: string | null;
              /** Id */
              id: number;
              /**
               * Initials
               * @default null
               */
              initials: string | null;
              /**
               * Profile Picture
               * @default null
               */
              profilePicture: string | null;
              /** Username */
              username: string;
          }[];
          /**
           * Checklists
           * @default []
           */
          checklists: {
              /** Creator */
              creator: number;
              /** Date Created */
              date_created: string;
              /** Id */
              id: string;
              /**
               * Items
               * @default []
               */
              items: {
                  /**
                   * ClickUpUser
                   * @description ClickUp User model based on actual API response
                   * @default null
                   */
                  assignee: {
                      /** Color */
                      color: string;
                      /**
                       * Email
                       * @default null
                       */
                      email: string | null;
                      /** Id */
                      id: number;
                      /**
                       * Initials
                       * @default null
                       */
                      initials: string | null;
                      /**
                       * Profile Picture
                       * @default null
                       */
                      profilePicture: string | null;
                      /** Username */
                      username: string;
                  } | null;
                  /**
                   * Children
                   * @default []
                   */
                  children: unknown[];
                  /** Date Created */
                  date_created: string;
                  /**
                   * Due Date
                   * @default null
                   */
                  due_date: string | null;
                  /**
                   * Due Date Time
                   * @default false
                   */
                  due_date_time: boolean;
                  /**
                   * Group Assignee
                   * @default null
                   */
                  group_assignee: unknown;
                  /** Id */
                  id: string;
                  /** Name */
                  name: string;
                  /**
                   * Orderindex
                   * @default null
                   */
                  orderindex: number | null;
                  /**
                   * Parent
                   * @default null
                   */
                  parent: string | null;
                  /** Resolved */
                  resolved: boolean;
                  /**
                   * Sent Due Date Notif
                   * @default null
                   */
                  sent_due_date_notif: string | null;
                  /**
                   * Start Date
                   * @default null
                   */
                  start_date: string | null;
                  /**
                   * Start Date Time
                   * @default false
                   */
                  start_date_time: boolean;
              }[];
              /** Name */
              name: string;
              /** Orderindex */
              orderindex: number;
              /** Resolved */
              resolved: number;
              /** Task Id */
              task_id: string;
              /** Unresolved */
              unresolved: number;
          }[];
          /**
           * Creator
           * @description ClickUp User model based on actual API response
           */
          creator: {
              /** Color */
              color: string;
              /**
               * Email
               * @default null
               */
              email: string | null;
              /** Id */
              id: number;
              /**
               * Initials
               * @default null
               */
              initials: string | null;
              /**
               * Profile Picture
               * @default null
               */
              profilePicture: string | null;
              /** Username */
              username: string;
          };
          /**
           * Custom Fields
           * @default []
           */
          custom_fields: unknown[];
          /**
           * Custom Id
           * @default null
           */
          custom_id: string | null;
          /** Custom Item Id */
          custom_item_id: number;
          /**
           * Date Closed
           * @default null
           */
          date_closed: string | null;
          /** Date Created */
          date_created: string;
          /**
           * Date Done
           * @default null
           */
          date_done: string | null;
          /** Date Updated */
          date_updated: string;
          /**
           * Dependencies
           * @default []
           */
          dependencies: unknown[];
          /** Description */
          description: string;
          /**
           * Due Date
           * @default null
           */
          due_date: string | null;
          /**
           * Folder
           * @description Task Project/Folder model based on actual API response
           */
          folder: {
              /** Access */
              access: boolean;
              /** Hidden */
              hidden: boolean;
              /** Id */
              id: string;
              /** Name */
              name: string;
          };
          /**
           * Group Assignees
           * @default []
           */
          group_assignees: unknown[];
          /** Id */
          id: string;
          /**
           * Linked Tasks
           * @default []
           */
          linked_tasks: {
              /** Date Created */
              date_created: string;
              /** Link Id */
              link_id: string;
              /** Task Id */
              task_id: string;
              /** Userid */
              userid: string;
              /** Workspace Id */
              workspace_id: string;
          }[];
          /**
           * List
           * @description Task List model based on actual API response
           */
          list: {
              /** Access */
              access: boolean;
              /** Id */
              id: string;
              /** Name */
              name: string;
          };
          /**
           * Locations
           * @default []
           */
          locations: unknown[];
          /** Name */
          name: string;
          /** Orderindex */
          orderindex: string;
          /**
           * Parent
           * @default null
           */
          parent: string | null;
          /** Permission Level */
          permission_level: string;
          /**
           * Points
           * @default null
           */
          points: number | null;
          /**
           * TaskPriority
           * @description Task Priority model based on actual API response
           * @default null
           */
          priority: {
              /** Color */
              color: string;
              /** Id */
              id: string;
              /** Orderindex */
              orderindex: string;
              /** Priority */
              priority: string;
          } | null;
          /**
           * Project
           * @description Task Project/Folder model based on actual API response
           */
          project: {
              /** Access */
              access: boolean;
              /** Hidden */
              hidden: boolean;
              /** Id */
              id: string;
              /** Name */
              name: string;
          };
          /**
           * Sharing
           * @description Task Sharing model based on actual API response
           */
          sharing: {
              /** Public */
              public: boolean;
              /**
               * Public Fields
               * @default []
               */
              public_fields: string[];
              /**
               * Public Share Expires On
               * @default null
               */
              public_share_expires_on: string | null;
              /** Seo Optimized */
              seo_optimized: boolean;
              /**
               * Token
               * @default null
               */
              token: string | null;
          };
          /**
           * Space
           * @description Task Space model based on actual API response
           */
          space: {
              /** Id */
              id: string;
          };
          /**
           * Start Date
           * @default null
           */
          start_date: string | null;
          /**
           * Status
           * @description Task Status model based on actual API response
           */
          status: {
              /** Color */
              color: string;
              /** Id */
              id: string;
              /** Orderindex */
              orderindex: number;
              /** Status */
              status: string;
              /** Type */
              type: string;
          };
          /**
           * Tags
           * @default []
           */
          tags: {
              /** Creator */
              creator: number;
              /** Name */
              name: string;
              /** Tag Bg */
              tag_bg: string;
              /** Tag Fg */
              tag_fg: string;
          }[];
          /** Team Id */
          team_id: string;
          /** Text Content */
          text_content: string;
          /**
           * Time Estimate
           * @default null
           */
          time_estimate: number | null;
          /**
           * Time Spent
           * @default null
           */
          time_spent: number | null;
          /**
           * Top Level Parent
           * @default null
           */
          top_level_parent: string | null;
          /** Url */
          url: string;
          /**
           * Watchers
           * @default []
           */
          watchers: {
              /** Color */
              color: string;
              /**
               * Email
               * @default null
               */
              email: string | null;
              /** Id */
              id: number;
              /**
               * Initials
               * @default null
               */
              initials: string | null;
              /**
               * Profile Picture
               * @default null
               */
              profilePicture: string | null;
              /** Username */
              username: string;
          }[];
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
 * Type of CLICKUP's CLICKUP_GET_TASK_COMMENTS tool input.
 */
type CLICKUP_GET_TASK_COMMENTS_INPUT = {
  /**
   * Custom Task Ids
   * @description Indicates if `task_id` is a custom task ID; if true, `team_id` is required.
   */
  custom_task_ids?: boolean;
  /**
   * Start
   * @description Unix timestamp (in milliseconds) of the oldest visible comment, used with `start_id` for paginating older comments.
   */
  start?: number;
  /**
   * Start Id
   * @description ID of the oldest visible comment, used with `start` for paginating older comments.
   */
  start_id?: string;
  /**
   * Task Id
   * @description Unique identifier of the task. Can be a standard or custom task ID (if `custom_task_ids` is true).
   */
  task_id?: string;
  /**
   * Team Id
   * @description Team ID, required if `custom_task_ids` is true.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_TASK_COMMENTS tool output.
 */
type CLICKUP_GET_TASK_COMMENTS_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_GET_TASK_MEMBERS tool input.
 */
type CLICKUP_GET_TASK_MEMBERS_INPUT = {
  /**
   * Task Id
   * @description The unique identifier of the task for which to retrieve members.
   */
  task_id?: string;
};

/**
 * Type of CLICKUP's CLICKUP_GET_TASK_MEMBERS tool output.
 */
type CLICKUP_GET_TASK_MEMBERS_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_GET_TASK_S_TIME_IN_STATUS tool input.
 */
type CLICKUP_GET_TASK_S_TIME_IN_STATUS_INPUT = {
  /**
   * Custom Task Ids
   * @description If set to `true`, the `task_id` parameter will be interpreted as a custom task ID. When using custom task IDs, the `team_id` must also be provided.
   */
  custom_task_ids?: boolean;
  /**
   * Task Id
   * @description The unique identifier of the task. This can be the standard task ID or a custom task ID if `custom_task_ids` is true.
   */
  task_id?: string;
  /**
   * Team Id
   * @description The ID of the team (Workspace) to which the task belongs. This is required only when `custom_task_ids` is set to `true`. For example: `custom_task_ids=true&team_id=1234567`.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_TASK_S_TIME_IN_STATUS tool output.
 */
type CLICKUP_GET_TASK_S_TIME_IN_STATUS_OUTPUT = {
  /**
   * Data
   * @description An object detailing the time spent in various statuses. It includes `current_status` (object with status name, color, order index, and total time in current status), `status_history` (array of objects, each representing a past status with its details and total time spent), and `total_time_in_workflow` (total time spent across all statuses in minutes).
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
 * Type of CLICKUP's CLICKUP_GET_TASK_TEMPLATES tool input.
 */
type CLICKUP_GET_TASK_TEMPLATES_INPUT = {
  /**
   * Page
   * @description Page number for paginating through templates (starts from 0).
   */
  page?: number;
  /**
   * Team Id
   * @description Unique identifier of the Workspace (Team) to retrieve task templates from.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_TASK_TEMPLATES tool output.
 */
type CLICKUP_GET_TASK_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Raw API response, typically including a 'templates' key with a list of task template objects.
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
 * Type of CLICKUP's CLICKUP_GET_TEAMS tool input.
 */
type CLICKUP_GET_TEAMS_INPUT = {
  /**
   * Group Ids
   * @description Comma-separated string of user group IDs to filter results; if omitted, all user groups in the Workspace are returned.
   */
  group_ids?: string;
  /**
   * Team Id
   * @description ID of the ClickUp Workspace (Team ID) from which to retrieve user groups.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_TEAMS tool output.
 */
type CLICKUP_GET_TEAMS_OUTPUT = {
  /**
   * Data
   * @description Raw API response. Typically includes a 'groups' key with a list of user group objects, each detailing its ID, name, members, and Workspace ID.
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
 * Type of CLICKUP's CLICKUP_GET_TIME_ENTRIES_WITHIN_A_DATE_RANGE tool input.
 */
type CLICKUP_GET_TIME_ENTRIES_WITHIN_A_DATE_RANGE_INPUT = {
  /**
   * Assignee
   * @description Filter time entries by user ID(s). For multiple assignees, provide a comma-separated string of user IDs. Example: `1234,9876`. Note: Access to other users' time entries typically requires Workspace Owner/Admin privileges.
   */
  assignee?: string;
  /**
   * Custom Task Ids
   * @description Set to `true` if the `task_id` parameter refers to a custom task ID. If `true`, the `team_id` query parameter must also be provided for context.
   */
  custom_task_ids?: boolean;
  /**
   * End Date
   * @description The end date of the date range for filtering time entries, specified as a Unix timestamp in milliseconds. If omitted, defaults to the current date.
   */
  end_date?: number;
  /**
   * Folder Id
   * @description Filter time entries to include only those associated with tasks in a specific Folder ID.
   */
  folder_id?: number;
  /**
   * Include Location Names
   * @description If true, includes the names of the List, Folder, and Space in the response, along with their respective IDs (`list_id`, `folder_id`, `space_id`).
   */
  include_location_names?: boolean;
  /**
   * Include Task Tags
   * @description If true, includes task tags in the response for time entries associated with tasks.
   */
  include_task_tags?: boolean;
  /**
   * List Id
   * @description Filter time entries to include only those associated with tasks in a specific List ID.
   */
  list_id?: number;
  /**
   * Space Id
   * @description Filter time entries to include only those associated with tasks in a specific Space ID.
   */
  space_id?: number;
  /**
   * Start Date
   * @description The start date of the date range for filtering time entries, specified as a Unix timestamp in milliseconds. If omitted, defaults to 30 days prior to the current date.
   */
  start_date?: number;
  /**
   * Task Id
   * @description Filter time entries to include only those associated with a specific task ID. Use with `custom_task_ids` if referring to a custom ID.
   */
  task_id?: string;
  /**
   * Team Id
   * @description The ID of the Team (Workspace) for which to retrieve time entries.
   */
  team_Id?: number;
  /**
   * Team Id
   * @description The ID of the Team (Workspace) to use for context when `custom_task_ids` is `true`. This helps resolve custom task IDs. Example: `custom_task_ids=true&team_id=123`.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_TIME_ENTRIES_WITHIN_A_DATE_RANGE tool output.
 */
type CLICKUP_GET_TIME_ENTRIES_WITHIN_A_DATE_RANGE_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_GET_TIME_ENTRY_HISTORY tool input.
 */
type CLICKUP_GET_TIME_ENTRY_HISTORY_INPUT = {
  /**
   * Team Id
   * @description Unique identifier for the Team (Workspace) containing the time entry.
   */
  team_id?: number;
  /**
   * Timer Id
   * @description Unique identifier of the time entry for which to retrieve history.
   */
  timer_id?: string;
};

/**
 * Type of CLICKUP's CLICKUP_GET_TIME_ENTRY_HISTORY tool output.
 */
type CLICKUP_GET_TIME_ENTRY_HISTORY_OUTPUT = {
  /**
   * Data
   * @description The API response dictionary, which typically includes an array of history items detailing changes to the time entry (e.g., field modified, previous/current values, user, timestamp).
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
 * Type of CLICKUP's CLICKUP_GET_TRACKED_TIME tool input.
 */
type CLICKUP_GET_TRACKED_TIME_INPUT = {
  /**
   * Custom Task Ids
   * @description Set to `true` if the `task_id` provided is a custom task ID. If `true`, the `team_id` must also be provided.
   */
  custom_task_ids?: boolean;
  /**
   * Task Id
   * @description The ID of the task for which to retrieve tracked time. This can be the standard task ID or a custom task ID if `custom_task_ids` is set to `true`.
   */
  task_id?: string;
  /**
   * Team Id
   * @description The ID of the team. This is required and used only when the `custom_task_ids` parameter is set to `true`. For example: `custom_task_ids=true&team_id=123`.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_TRACKED_TIME tool output.
 */
type CLICKUP_GET_TRACKED_TIME_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the tracked time details for the task. This typically includes total time tracked in various units (e.g., milliseconds, hours).
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
 * Type of CLICKUP's CLICKUP_GET_USER tool input.
 */
type CLICKUP_GET_USER_INPUT = {
  /**
   * Team Id
   * @description ID of the Team (Workspace) containing the user.
   */
  team_id?: number;
  /**
   * User Id
   * @description ID of the user whose details are to be retrieved.
   */
  user_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_USER tool output.
 */
type CLICKUP_GET_USER_OUTPUT = {
  /**
   * Data
   * @description Retrieved user's information, including ID, username, email, profile picture, and role.
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
 * Type of CLICKUP's CLICKUP_GET_VIEW tool input.
 */
type CLICKUP_GET_VIEW_INPUT = {
  /**
   * View Id
   * @description The unique identifier for the ClickUp view to retrieve.
   */
  view_id?: string;
};

/**
 * Type of CLICKUP's CLICKUP_GET_VIEW tool output.
 */
type CLICKUP_GET_VIEW_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_GET_VIEW_TASKS tool input.
 */
type CLICKUP_GET_VIEW_TASKS_INPUT = {
  /**
   * Page
   * @description The page number of the results to retrieve. Used for pagination if the number of tasks exceeds the limit per page. Starts at 0.
   */
  page?: number;
  /**
   * View Id
   * @description The unique identifier for the view from which to retrieve tasks. Example: "105".
   */
  view_id?: string;
};

/**
 * Type of CLICKUP's CLICKUP_GET_VIEW_TASKS tool output.
 */
type CLICKUP_GET_VIEW_TASKS_OUTPUT = {
  /**
   * Data
   * @description Tasks from the specified view, structured according to ClickUp's API specifications.
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
 * Type of CLICKUP's CLICKUP_GET_WEBHOOKS tool input.
 */
type CLICKUP_GET_WEBHOOKS_INPUT = {
  /**
   * Team Id
   * @description Unique numerical ID of the Team (Workspace) to retrieve webhooks for.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_WEBHOOKS tool output.
 */
type CLICKUP_GET_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Dictionary with a 'webhooks' key, containing an array of webhook objects for the Workspace.
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
 * Type of CLICKUP's CLICKUP_GET_WORKSPACE_EVERYTHING_LEVEL_VIEWS tool input.
 */
type CLICKUP_GET_WORKSPACE_EVERYTHING_LEVEL_VIEWS_INPUT = {
  /**
   * Team Id
   * @description Numeric ID of the Workspace (often referred to as Team ID) for which to retrieve Everything Level views.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_GET_WORKSPACE_EVERYTHING_LEVEL_VIEWS tool output.
 */
type CLICKUP_GET_WORKSPACE_EVERYTHING_LEVEL_VIEWS_OUTPUT = {
  /**
   * Data
   * @description Details of the Everything Level views, typically including a list of view objects with properties like id, name, type (e.g., list, board, calendar), and view-specific settings.
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
 * Type of CLICKUP's CLICKUP_GET_WORKSPACE_PLAN tool input.
 */
type CLICKUP_GET_WORKSPACE_PLAN_INPUT = {
  /**
   * Team Id
   * @description The unique identifier for the Workspace (formerly known as Team).
   */
  team_id?: string;
};

/**
 * Type of CLICKUP's CLICKUP_GET_WORKSPACE_PLAN tool output.
 */
type CLICKUP_GET_WORKSPACE_PLAN_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing information about the current plan of the Workspace. This may include details like the plan name, features, limits, and usage statistics.
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
 * Type of CLICKUP's CLICKUP_GET_WORKSPACE_SEATS tool input.
 */
type CLICKUP_GET_WORKSPACE_SEATS_INPUT = {
  /**
   * Team Id
   * @description Numeric ID of the Workspace (Team).
   */
  team_id?: string;
};

/**
 * Type of CLICKUP's CLICKUP_GET_WORKSPACE_SEATS tool output.
 */
type CLICKUP_GET_WORKSPACE_SEATS_OUTPUT = {
  /**
   * Data
   * @description Details on workspace seats: number of used, total, and available seats for members and guests.
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
 * Type of CLICKUP's CLICKUP_INVITE_GUEST_TO_WORKSPACE tool input.
 */
type CLICKUP_INVITE_GUEST_TO_WORKSPACE_INPUT = {
  /**
   * Can Create Views
   * @description If `true`, the guest has permission to create views.
   */
  can_create_views?: boolean;
  /**
   * Can Edit Tags
   * @description If `true`, the guest has permission to edit tags.
   */
  can_edit_tags?: boolean;
  /**
   * Can See Time Estimated
   * @description If `true`, the guest has permission to see time estimated for tasks.
   */
  can_see_time_estimated?: boolean;
  /**
   * Can See Time Spent
   * @description If `true`, the guest has permission to see time spent on tasks.
   */
  can_see_time_spent?: boolean;
  /**
   * Custom Role Id
   * @description ID of a custom role to assign to the guest, for granular permission control beyond default guest permissions.
   */
  custom_role_id?: number;
  /**
   * Email
   * @description Email address of the guest to invite to the Workspace.
   */
  email?: string;
  /**
   * Team Id
   * @description Unique identifier for the Workspace (Team) to which the guest will be invited.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_INVITE_GUEST_TO_WORKSPACE tool output.
 */
type CLICKUP_INVITE_GUEST_TO_WORKSPACE_OUTPUT = {
  /**
   * Data
   * @description API response, typically including invited guest details or invitation status.
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
 * Type of CLICKUP's CLICKUP_INVITE_USER_TO_WORKSPACE tool input.
 */
type CLICKUP_INVITE_USER_TO_WORKSPACE_INPUT = {
  /**
   * Admin
   * @description Grant administrative privileges to the invited user.
   */
  admin?: boolean;
  /**
   * Custom Role Id
   * @description Optional custom role ID to assign; if omitted and custom roles are enabled, the default member role is used.
   */
  custom_role_id?: number;
  /**
   * Email
   * @description Email address of the user to invite.
   */
  email?: string;
  /**
   * Team Id
   * @description Unique identifier of the Workspace (Team) to which the user will be invited.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_INVITE_USER_TO_WORKSPACE tool output.
 */
type CLICKUP_INVITE_USER_TO_WORKSPACE_OUTPUT = {
  /**
   * Data
   * @description API response data for the user invitation.
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
 * Type of CLICKUP's CLICKUP_LISTS_GET_FOLDER_LISTS tool input.
 */
type CLICKUP_LISTS_GET_FOLDER_LISTS_INPUT = {
  /**
   * Archived
   * @description Filter lists by archived status. If `true`, returns archived lists; if `false` or omitted, returns unarchived lists.
   */
  archived?: boolean;
  /**
   * Folder Id
   * @description The unique identifier of the Folder from which to retrieve lists.
   */
  folder_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_LISTS_GET_FOLDER_LISTS tool output.
 */
type CLICKUP_LISTS_GET_FOLDER_LISTS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the lists retrieved from the specified folder.
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
 * Type of CLICKUP's CLICKUP_MEMBERS_GET_LIST_USERS tool input.
 */
type CLICKUP_MEMBERS_GET_LIST_USERS_INPUT = {
  /**
   * List Id
   * @description Unique identifier of the ClickUp List. Found by extracting the numerical ID from the List's URL in ClickUp.
   */
  list_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_MEMBERS_GET_LIST_USERS tool output.
 */
type CLICKUP_MEMBERS_GET_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description Dictionary containing user objects with details about each member of the list.
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
 * Type of CLICKUP's CLICKUP_REMOVE_CUSTOM_FIELD_VALUE tool input.
 */
type CLICKUP_REMOVE_CUSTOM_FIELD_VALUE_INPUT = {
  /**
   * Custom Task Ids
   * @description If true, `task_id` is a custom task ID, and `team_id` must also be provided.
   */
  custom_task_ids?: boolean;
  /**
   * Field Id
   * @description UUID of the Custom Field whose value will be removed from the task.
   */
  field_id?: string;
  /**
   * Task Id
   * @description Identifier of the task. If `custom_task_ids` is true, this is the custom task ID; otherwise, it's the standard task ID.
   */
  task_id?: string;
  /**
   * Team Id
   * @description Numeric ID of the team, required only if `custom_task_ids` is true to identify the task by its custom ID.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_REMOVE_CUSTOM_FIELD_VALUE tool output.
 */
type CLICKUP_REMOVE_CUSTOM_FIELD_VALUE_OUTPUT = {
  /**
   * Data
   * @description API response, typically an empty object `{}` on successful removal of the custom field value.
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
 * Type of CLICKUP's CLICKUP_REMOVE_GUEST_FROM_FOLDER tool input.
 */
type CLICKUP_REMOVE_GUEST_FROM_FOLDER_INPUT = {
  /**
   * Folder Id
   * @description Unique identifier of the Folder from which to remove the guest.
   */
  folder_id?: number;
  /**
   * Guest Id
   * @description Unique identifier of the guest to remove from the Folder.
   */
  guest_id?: number;
  /**
   * Include Shared
   * @description If `true`, items explicitly shared with the guest within this Folder are also unshared.
   * @default true
   */
  include_shared: boolean;
};

/**
 * Type of CLICKUP's CLICKUP_REMOVE_GUEST_FROM_FOLDER tool output.
 */
type CLICKUP_REMOVE_GUEST_FROM_FOLDER_OUTPUT = {
  /**
   * Data
   * @description An empty dictionary, `{}`, indicating successful removal.
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
 * Type of CLICKUP's CLICKUP_REMOVE_GUEST_FROM_LIST tool input.
 */
type CLICKUP_REMOVE_GUEST_FROM_LIST_INPUT = {
  /**
   * Guest Id
   * @description The unique identifier of the guest to be removed from the List.
   */
  guest_id?: number;
  /**
   * Include Shared
   * @description If `false`, may alter how items shared with the guest are handled or reported during removal.
   * @default true
   */
  include_shared: boolean;
  /**
   * List Id
   * @description The unique identifier of the List from which the guest will be removed.
   */
  list_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_REMOVE_GUEST_FROM_LIST tool output.
 */
type CLICKUP_REMOVE_GUEST_FROM_LIST_OUTPUT = {
  /**
   * Data
   * @description An empty object confirming the successful removal of the guest.
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
 * Type of CLICKUP's CLICKUP_REMOVE_GUEST_FROM_TASK tool input.
 */
type CLICKUP_REMOVE_GUEST_FROM_TASK_INPUT = {
  /**
   * Custom Task Ids
   * @description Set to `true` if you are using a custom task ID for the `task_id` parameter. If `true`, `team_id` must also be provided.
   */
  custom_task_ids?: boolean;
  /**
   * Guest Id
   * @description The numeric ID of the guest to be removed from the task.
   */
  guest_id?: number;
  /**
   * Include Shared
   * @description Determines whether to include details of items shared with the guest. Set to `false` to exclude these details. Defaults to `true`.
   */
  include_shared?: boolean;
  /**
   * Task Id
   * @description The ID of the task from which the guest will be removed. This can be the standard task ID or a custom task ID if `custom_task_ids` is set to `true`.
   */
  task_id?: string;
  /**
   * Team Id
   * @description The ID of the team. This is required only when `custom_task_ids` is set to `true` and you are using a custom task ID. For example: `custom_task_ids=true&team_id=123`.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_REMOVE_GUEST_FROM_TASK tool output.
 */
type CLICKUP_REMOVE_GUEST_FROM_TASK_OUTPUT = {
  /**
   * Data
   * @description A dictionary typically confirming the successful removal of the guest. May be an empty object on success.
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
 * Type of CLICKUP's CLICKUP_REMOVE_GUEST_FROM_WORKSPACE tool input.
 */
type CLICKUP_REMOVE_GUEST_FROM_WORKSPACE_INPUT = {
  /**
   * Guest Id
   * @description Unique numerical identifier for the guest user whose access to the specified Workspace will be revoked. This ID targets the specific guest for removal.
   */
  guest_id?: number;
  /**
   * Team Id
   * @description Unique numerical identifier for the Workspace (often referred to as 'Team' in the ClickUp API) from which the guest is to be removed. This ID specifies the scope of the removal operation.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_REMOVE_GUEST_FROM_WORKSPACE tool output.
 */
type CLICKUP_REMOVE_GUEST_FROM_WORKSPACE_OUTPUT = {
  /**
   * Data
   * @description The response payload from the ClickUp API. Upon successful guest removal, this is typically an empty JSON object `{}` or a minimal confirmation object.
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
 * Type of CLICKUP's CLICKUP_REMOVE_TAGS_FROM_TIME_ENTRIES tool input.
 */
type CLICKUP_REMOVE_TAGS_FROM_TIME_ENTRIES_INPUT = {
  /**
   * Tags
   * @description List of tags to remove, typically identified by name (e.g., `{'name': 'tag_name'}`).
   */
  tags?: {
      [key: string]: unknown;
  }[];
  /**
   * Team Id
   * @description The unique identifier for the Team (Workspace) that owns the time entries.
   */
  team_id?: number;
  /**
   * Time Entry Ids
   * @description List of time entry IDs from which to remove tags.
   */
  time_entry_ids?: string[];
};

/**
 * Type of CLICKUP's CLICKUP_REMOVE_TAGS_FROM_TIME_ENTRIES tool output.
 */
type CLICKUP_REMOVE_TAGS_FROM_TIME_ENTRIES_OUTPUT = {
  /**
   * Data
   * @description API response; typically an empty object `{}` on success, or contains error details on failure.
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
 * Type of CLICKUP's CLICKUP_REMOVE_TAG_FROM_TASK tool input.
 */
type CLICKUP_REMOVE_TAG_FROM_TASK_INPUT = {
  /**
   * Custom Task Ids
   * @description Set to `true` if you are using a custom task ID (instead of the default task ID) to identify the task. If `true`, the `team_id` must also be provided.
   */
  custom_task_ids?: boolean;
  /**
   * Tag Name
   * @description The name of the tag to remove from the task. Tag names are case-sensitive.
   */
  tag_name?: string;
  /**
   * Task Id
   * @description The ID of the task from which the tag will be removed. This can be the standard task ID or a custom task ID if `custom_task_ids` is set to `true`.
   */
  task_id?: string;
  /**
   * Team Id
   * @description The Workspace (Team) ID associated with the task.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_REMOVE_TAG_FROM_TASK tool output.
 */
type CLICKUP_REMOVE_TAG_FROM_TASK_OUTPUT = {
  /**
   * Data
   * @description An empty object indicating the successful removal of the tag.
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
 * Type of CLICKUP's CLICKUP_REMOVE_TASK_FROM_LIST tool input.
 */
type CLICKUP_REMOVE_TASK_FROM_LIST_INPUT = {
  /**
   * List Id
   * @description Unique numerical identifier of the list from which the task will be removed. This must be an extra list for the task, not its home list.
   */
  list_id?: number;
  /**
   * Task Id
   * @description Unique identifier of the task to be removed from the specified list.
   */
  task_id?: string;
};

/**
 * Type of CLICKUP's CLICKUP_REMOVE_TASK_FROM_LIST tool output.
 */
type CLICKUP_REMOVE_TASK_FROM_LIST_OUTPUT = {
  /**
   * Data
   * @description Typically an empty dictionary upon successful removal, confirming the operation's success.
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
 * Type of CLICKUP's CLICKUP_REMOVE_USER_FROM_WORKSPACE tool input.
 */
type CLICKUP_REMOVE_USER_FROM_WORKSPACE_INPUT = {
  /**
   * Team Id
   * @description The unique numeric identifier of the Workspace (Team) from which the user will be deactivated.
   */
  team_id?: number;
  /**
   * User Id
   * @description The unique numeric identifier of the user to be deactivated from the Workspace.
   */
  user_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_REMOVE_USER_FROM_WORKSPACE tool output.
 */
type CLICKUP_REMOVE_USER_FROM_WORKSPACE_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the response data. Typically, this is an empty dictionary {} upon successful deactivation of the user, as the primary confirmation is often a 204 HTTP status code with no content.
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
 * Type of CLICKUP's CLICKUP_SET_CUSTOM_FIELD_VALUE tool input.
 */
type CLICKUP_SET_CUSTOM_FIELD_VALUE_INPUT = {
  /**
   * Custom Task Ids
   * @description If true, `task_id` is treated as a Custom Task ID, and `team_id` is required.
   */
  custom_task_ids?: boolean;
  /**
   * Field Id
   * @description UUID of the Custom Field to update. Obtainable via 'Get Accessible Custom Fields' or 'Get Task' endpoints.
   */
  field_id?: string;
  /**
   * Task Id
   * @description Task ID to update. Standard ID, or Custom Task ID if `custom_task_ids` is true.
   */
  task_id?: string;
  /**
   * Team Id
   * @description Team ID, required if `custom_task_ids` is true.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_SET_CUSTOM_FIELD_VALUE tool output.
 */
type CLICKUP_SET_CUSTOM_FIELD_VALUE_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_SHARED_HIERARCHY tool input.
 */
type CLICKUP_SHARED_HIERARCHY_INPUT = {
  /**
   * Team Id
   * @description Unique numerical ID of the ClickUp Team (Workspace) for which to fetch the shared hierarchy.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_SHARED_HIERARCHY tool output.
 */
type CLICKUP_SHARED_HIERARCHY_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_SPACES_GET_DETAILS tool input.
 */
type CLICKUP_SPACES_GET_DETAILS_INPUT = {
  /**
   * Space Id
   * @description Unique ID of the Space to retrieve.
   */
  space_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_SPACES_GET_DETAILS tool output.
 */
type CLICKUP_SPACES_GET_DETAILS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the retrieved Space. Contents may vary based on the Space's configuration, enabled ClickApps (features), and custom fields.
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
 * Type of CLICKUP's CLICKUP_SPACES_GET_SPACE_DETAILS tool input.
 */
type CLICKUP_SPACES_GET_SPACE_DETAILS_INPUT = {
  /**
   * Archived
   * @description Filter by archived status (`true` for archived, `false` for active); API default if omitted.
   */
  archived?: boolean;
  /**
   * Team Id
   * @description Identifier for the Team (Workspace).
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_SPACES_GET_SPACE_DETAILS tool output.
 */
type CLICKUP_SPACES_GET_SPACE_DETAILS_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_START_A_TIME_ENTRY tool input.
 */
type CLICKUP_START_A_TIME_ENTRY_INPUT = {
  /**
   * Billable
   * @description Specifies if the time entry is billable.
   */
  billable?: boolean;
  /**
   * Custom Task Ids
   * @description If set to `true`, the `tid` field will be interpreted as a custom task ID. Requires `team_id` query parameter to be set for custom task ID resolution.
   */
  custom_task_ids?: boolean;
  /**
   * Description
   * @description Description for the time entry.
   */
  description?: string;
  /**
   * Tags
   * @description Array of tag objects (each with "name", optionally "tag_bg", "tag_fg" for colors) to apply. This feature requires Business Plan or higher. E.g., `[{"name": "Urgent", "tag_bg": "#FF0000"}]`.
   */
  tags?: {
      [key: string]: string;
  }[];
  /**
   * Team Id
   * @description Identifier of the Team (Workspace) for this time entry.
   */
  team_Id?: number;
  /**
   * Team Id
   * @description The ID of the team for resolving custom task IDs. Required only if `custom_task_ids` is set to `true`. For example: `custom_task_ids=true&team_id=123`.
   */
  team_id?: number;
  /**
   * Tid
   * @description The ID of the task to associate with this time entry. If `custom_task_ids` is true, this should be the custom task ID.
   */
  tid?: string;
};

/**
 * Type of CLICKUP's CLICKUP_START_A_TIME_ENTRY tool output.
 */
type CLICKUP_START_A_TIME_ENTRY_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_STOP_A_TIME_ENTRY tool input.
 */
type CLICKUP_STOP_A_TIME_ENTRY_INPUT = {
  /**
   * Team Id
   * @description The unique numeric identifier of the Team (Workspace) where the time entry is being tracked.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_STOP_A_TIME_ENTRY tool output.
 */
type CLICKUP_STOP_A_TIME_ENTRY_OUTPUT = {
  /**
   * Data
   * @description Details of the stopped time entry. The exact structure can vary.
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
 * Type of CLICKUP's CLICKUP_TASKS_GET_TASK_DETAILS tool input.
 */
type CLICKUP_TASKS_GET_TASK_DETAILS_INPUT = {
  /**
   * Custom Task Ids
   * @description Set to `true` to indicate that the `task_id` provided is a custom task ID. If `true`, `team_id` must also be provided. If omitted or `false` (default), `task_id` is treated as a standard task ID.
   */
  custom_task_ids?: boolean;
  /**
   * Include Markdown Description
   * @description Set to `true` to return the task description in Markdown format. If omitted or `false` (default), the description is returned in plain text. For example: `?include_markdown_description=true`.
   */
  include_markdown_description?: boolean;
  /**
   * Include Subtasks
   * @description Set to `true` to include subtasks in the task details response. If omitted or `false` (default), subtasks are not included.
   */
  include_subtasks?: boolean;
  /**
   * Task Id
   * @description The unique identifier of the task to retrieve. This can be the standard ClickUp task ID or a custom task ID if `custom_task_ids` is set to `true` (in which case `team_id` is also required).
   */
  task_id?: string;
  /**
   * Team Id
   * @description The ID of the team. This parameter is required and used only when `custom_task_ids` is set to `true` to identify the custom task ID within that specific team. For example: `custom_task_ids=true&team_id=123`.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_TASKS_GET_TASK_DETAILS tool output.
 */
type CLICKUP_TASKS_GET_TASK_DETAILS_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_TASK_CHECKLISTS_CREATE_NEW_CHECKLIST tool input.
 */
type CLICKUP_TASK_CHECKLISTS_CREATE_NEW_CHECKLIST_INPUT = {
  /**
   * Custom Task Ids
   * @description If true, `task_id` is treated as a custom task ID, requiring `team_id`.
   */
  custom_task_ids?: boolean;
  /**
   * Name
   * @description Name for the new checklist.
   */
  name?: string;
  /**
   * Task Id
   * @description Unique identifier of the task for the new checklist; can be a standard or custom task ID (if `custom_task_ids` is true).
   */
  task_id?: string;
  /**
   * Team Id
   * @description Team's unique identifier; required only if `custom_task_ids` is true.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_TASK_CHECKLISTS_CREATE_NEW_CHECKLIST tool output.
 */
type CLICKUP_TASK_CHECKLISTS_CREATE_NEW_CHECKLIST_OUTPUT = {
  /**
   * Data
   * @description Dictionary representing the created checklist, including its ID and other attributes.
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
 * Type of CLICKUP's CLICKUP_TEAMS_USER_GROUPS_CREATE_TEAM tool input.
 */
type CLICKUP_TEAMS_USER_GROUPS_CREATE_TEAM_INPUT = {
  /**
   * Members
   * @description User IDs to be initial members of the new team (user group).
   */
  members?: number[];
  /**
   * Name
   * @description Name for the new team (user group).
   */
  name?: string;
  /**
   * Team Id
   * @description Workspace ID where the team (user group) will be created (this is referred to as 'Team ID' in the ClickUp API).
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_TEAMS_USER_GROUPS_CREATE_TEAM tool output.
 */
type CLICKUP_TEAMS_USER_GROUPS_CREATE_TEAM_OUTPUT = {
  /**
   * Data
   * @description Details of the newly created team (user group).
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
 * Type of CLICKUP's CLICKUP_TEAMS_WORK_SPACES_GET_WORK_SPACE_PLAN tool input.
 */
type CLICKUP_TEAMS_WORK_SPACES_GET_WORK_SPACE_PLAN_INPUT = {
  /**
   * Team Id
   * @description The unique identifier for the Workspace (formerly known as Team).
   */
  team_id?: string;
};

/**
 * Type of CLICKUP's CLICKUP_TEAMS_WORK_SPACES_GET_WORK_SPACE_PLAN tool output.
 */
type CLICKUP_TEAMS_WORK_SPACES_GET_WORK_SPACE_PLAN_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing information about the current plan of the Workspace. This may include details like the plan name, features, limits, and usage statistics.
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
 * Type of CLICKUP's CLICKUP_TEAMS_WORK_SPACES_GET_WORK_SPACE_SEATS tool input.
 */
type CLICKUP_TEAMS_WORK_SPACES_GET_WORK_SPACE_SEATS_INPUT = {
  /**
   * Team Id
   * @description Numeric ID of the Workspace (Team).
   */
  team_id?: string;
};

/**
 * Type of CLICKUP's CLICKUP_TEAMS_WORK_SPACES_GET_WORK_SPACE_SEATS tool output.
 */
type CLICKUP_TEAMS_WORK_SPACES_GET_WORK_SPACE_SEATS_OUTPUT = {
  /**
   * Data
   * @description Details on workspace seats: number of used, total, and available seats for members and guests.
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
 * Type of CLICKUP's CLICKUP_TRACK_TIME tool input.
 */
type CLICKUP_TRACK_TIME_INPUT = {
  /**
   * Custom Task Ids
   * @description If `true`, the `task_id` is treated as a custom task ID. Requires `team_id` to be provided.
   */
  custom_task_ids?: boolean;
  /**
   * End
   * @description The end time of the time entry, as a Unix timestamp in milliseconds.
   */
  end?: number;
  /**
   * Start
   * @description The start time of the time entry, as a Unix timestamp in milliseconds.
   */
  start?: number;
  /**
   * Task Id
   * @description The unique identifier of the task to track time for.
   */
  task_id?: string;
  /**
   * Team Id
   * @description The ID of the team. Required and used only if `custom_task_ids` is set to `true` to identify the task by its custom ID. For example: `custom_task_ids=true&team_id=123`.
   */
  team_id?: number;
  /**
   * Time
   * @description The duration of the time entry, in milliseconds. If `start` and `end` are both provided, this `time` field is ignored. If `time` is passed with `start` but no `end`, then `end` will be calculated. If `time` is passed with `end` but no `start`, then `start` will be calculated.
   */
  time?: number;
};

/**
 * Type of CLICKUP's CLICKUP_TRACK_TIME tool output.
 */
type CLICKUP_TRACK_TIME_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the successfully created time entry.
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
 * Type of CLICKUP's CLICKUP_UPDATE_A_TIME_ENTRY tool input.
 */
type CLICKUP_UPDATE_A_TIME_ENTRY_INPUT = {
  /**
   * Billable
   * @description Indicates whether the time entry is billable.
   */
  billable?: boolean;
  /**
   * Custom Task Ids
   * @description If `true`, `tid` is interpreted as a custom task ID, and the `team_id` query parameter (request field `team_id_1`) must also be provided.
   */
  custom_task_ids?: boolean;
  /**
   * Description
   * @description A new description for the time entry.
   */
  description?: string;
  /**
   * Duration
   * @description New duration of the time entry in milliseconds; can be an alternative to `start` and `end` times.
   */
  duration?: number;
  /**
   * End
   * @description New end time (Unix timestamp in milliseconds). If provided, `start` must also be provided.
   */
  end?: number;
  /**
   * Start
   * @description New start time (Unix timestamp in milliseconds). If provided, `end` must also be provided.
   */
  start?: number;
  /**
   * Tag Action
   * @description Specifies how to handle `tags` (e.g., 'add', 'remove').
   */
  tag_action?: string;
  /**
   * Tags
   * @description List of tag objects (e.g., `{'name': 'your-tag'}`) for the time entry. Time tracking labels are for Business Plan and above users.
   */
  tags?: {
      [key: string]: unknown;
  }[];
  /**
   * Team Id
   * @description The Team (Workspace) ID, as a query parameter; required if `custom_task_ids` is `true`.
   */
  team_id?: number;
  /**
   * Tid
   * @description The ID of the task for this time entry; if `custom_task_ids` is `true`, this should be the custom task ID.
   */
  tid?: string;
  /**
   * Timer Id
   * @description The unique identifier of the time entry to update. Path parameter.
   */
  timer_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_UPDATE_A_TIME_ENTRY tool output.
 */
type CLICKUP_UPDATE_A_TIME_ENTRY_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_UPDATE_COMMENT tool input.
 */
type CLICKUP_UPDATE_COMMENT_INPUT = {
  /**
   * Assignee
   * @description User ID of the assignee for the comment.
   */
  assignee?: number;
  /**
   * Comment Id
   * @description The unique identifier of the comment to be updated.
   */
  comment_id?: number;
  /**
   * Comment Text
   * @description The new text content for the comment.
   */
  comment_text?: string;
  /**
   * Resolved
   * @description Set to `true` to mark the comment as resolved, or `false` to mark it as unresolved.
   */
  resolved?: boolean;
};

/**
 * Type of CLICKUP's CLICKUP_UPDATE_COMMENT tool output.
 */
type CLICKUP_UPDATE_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Response data, typically including details of the updated comment or a success indicator.
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
 * Type of CLICKUP's CLICKUP_UPDATE_FOLDER tool input.
 */
type CLICKUP_UPDATE_FOLDER_INPUT = {
  /**
   * Folder Id
   * @description Unique identifier of the folder to update.
   */
  folder_id?: number;
  /**
   * Name
   * @description New name for the folder.
   */
  name?: string;
};

/**
 * Type of CLICKUP's CLICKUP_UPDATE_FOLDER tool output.
 */
type CLICKUP_UPDATE_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Complete representation of the updated folder from ClickUp.
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
 * Type of CLICKUP's CLICKUP_UPDATE_GOAL tool input.
 */
type CLICKUP_UPDATE_GOAL_INPUT = {
  /**
   * Add Owners
   * @description User IDs to add as owners.
   */
  add_owners?: number[];
  /**
   * Color
   * @description New color (hex code).
   */
  color?: string;
  /**
   * Description
   * @description New description for the goal.
   */
  description?: string;
  /**
   * Due Date
   * @description New due date (Unix timestamp in milliseconds).
   */
  due_date?: number;
  /**
   * Goal Id
   * @description Unique identifier (UUID) of the goal to update.
   */
  goal_id?: string;
  /**
   * Name
   * @description New name for the goal.
   */
  name?: string;
  /**
   * Rem Owners
   * @description User IDs to remove as owners.
   */
  rem_owners?: number[];
};

/**
 * Type of CLICKUP's CLICKUP_UPDATE_GOAL tool output.
 */
type CLICKUP_UPDATE_GOAL_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_UPDATE_LIST tool input.
 */
type CLICKUP_UPDATE_LIST_INPUT = {
  /**
   * Assignee
   * @description User ID to be set as the assignee for the list, replacing any existing assignee.
   */
  assignee?: string;
  /**
   * Content
   * @description New description or informational content for the list.
   */
  content?: string;
  /**
   * Due Date
   * @description New due date for the list, as a Unix timestamp in milliseconds (e.g., `1672531199000` for Dec 31, 2022, 11:59:59 PM UTC).
   */
  due_date?: number;
  /**
   * Due Date Time
   * @description Indicates if `due_date` includes a specific time; if `false`, it's an all-day event.
   */
  due_date_time?: boolean;
  /**
   * List Id
   * @description ID of the list to be updated.
   */
  list_id?: string;
  /**
   * Name
   * @description New name for the list.
   */
  name?: string;
  /**
   * Priority
   * @description Priority level: `1` (Urgent), `2` (High), `3` (Normal), `4` (Low), or `0` to unset.
   */
  priority?: number;
  /**
   * Status
   * @description Color for the list (e.g., 'red' or '#FF0000'), visually representing its status (not task status).
   */
  status?: string;
  /**
   * Unset Status
   * @description Set to `true` to remove the list's color, overriding `status`; if `false`, `status` updates or maintains current color.
   */
  unset_status?: boolean;
};

/**
 * Type of CLICKUP's CLICKUP_UPDATE_LIST tool output.
 */
type CLICKUP_UPDATE_LIST_OUTPUT = {
  /**
   * Data
   * @description API response containing the full updated list object with its modified attributes.
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
 * Type of CLICKUP's CLICKUP_UPDATE_SPACE tool input.
 */
type CLICKUP_UPDATE_SPACE_INPUT = {
  /**
   * Admin Can Manage
   * @description Whether admins can manage this private Space. ***Note:** This is an [Enterprise Plan](https://clickup.com/pricing) feature.*
   */
  admin_can_manage?: boolean;
  /**
   * Color
   * @description The new color for the Space, in hexadecimal format.
   */
  color?: string;
  /**
   * Features  Checklists  Enabled
   * @description Enable or disable the Checklists ClickApp.
   */
  features__checklists__enabled?: boolean;
  /**
   * Features  Custom  Fields  Enabled
   * @description Enable or disable the Custom Fields ClickApp.
   */
  features__custom__fields__enabled?: boolean;
  /**
   * Features  Dependency  Warning  Enabled
   * @description Enable or disable Dependency Warning for the Task Dependencies ClickApp.
   */
  features__dependency__warning__enabled?: boolean;
  /**
   * Features  Due  Dates  Enabled
   * @description Enable or disable the Due Dates ClickApp.
   */
  features__due__dates__enabled?: boolean;
  /**
   * Features  Due  Dates  Remap  Closed  Due  Date
   * @description Enable or disable remapping of closed due dates for the Due Dates ClickApp.
   */
  features__due__dates__remap__closed__due__date?: boolean;
  /**
   * Features  Due  Dates  Remap  Due  Dates
   * @description Enable or disable remapping of due dates for the Due Dates ClickApp.
   */
  features__due__dates__remap__due__dates?: boolean;
  /**
   * Features  Due  Dates  Start  Date
   * @description Enable or disable Start Dates for the Due Dates ClickApp.
   */
  features__due__dates__start__date?: boolean;
  /**
   * Features  Portfolios  Enabled
   * @description Enable or disable the Portfolios ClickApp.
   */
  features__portfolios__enabled?: boolean;
  /**
   * Features  Remap  Dependencies  Enabled
   * @description Enable or disable Remap Dependencies for the Task Dependencies ClickApp.
   */
  features__remap__dependencies__enabled?: boolean;
  /**
   * Features  Tags  Enabled
   * @description Enable or disable the Tags ClickApp.
   */
  features__tags__enabled?: boolean;
  /**
   * Features  Time  Estimates  Enabled
   * @description Enable or disable the Time Estimates ClickApp.
   */
  features__time__estimates__enabled?: boolean;
  /**
   * Features  Time  Tracking  Enabled
   * @description Enable or disable the Time Tracking ClickApp.
   */
  features__time__tracking__enabled?: boolean;
  /**
   * Multiple Assignees
   * @description Whether tasks in this Space can have multiple assignees.
   */
  multiple_assignees?: boolean;
  /**
   * Name
   * @description The new name for the Space.
   */
  name?: string;
  /**
   * Private
   * @description Whether the Space should be private.
   */
  private?: boolean;
  /**
   * Space Id
   * @description The ID of the Space to update.
   */
  space_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_UPDATE_SPACE tool output.
 */
type CLICKUP_UPDATE_SPACE_OUTPUT = {
  /**
   * Data
   * @description Details of the updated Space.
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
 * Type of CLICKUP's CLICKUP_UPDATE_TASK tool input.
 */
type CLICKUP_UPDATE_TASK_INPUT = {
  /**
   * Archived
   * @description True to archive, false to unarchive.
   */
  archived?: boolean;
  /**
   * Assignees  Add
   * @description List of user IDs to add as assignees.
   */
  assignees__add?: number[];
  /**
   * Assignees  Rem
   * @description List of user IDs to remove as assignees.
   */
  assignees__rem?: number[];
  /**
   * Custom Item Id
   * @description Custom task type ID. Use `1` for Milestone, its ID for custom type. Omit/`None` to make regular task (API's 'null' equivalent).
   */
  custom_item_id?: number;
  /**
   * Custom Task Ids
   * @description If true, `task_id` is a custom ID and `team_id` is required.
   */
  custom_task_ids?: boolean;
  /**
   * Description
   * @description New task description; use a single space (" ") to clear.
   */
  description?: string;
  /**
   * Due Date
   * @description New due date (Unix timestamp in milliseconds).
   */
  due_date?: number;
  /**
   * Due Date Time
   * @description True if `due_date` includes time, false if all-day.
   */
  due_date_time?: boolean;
  /**
   * Name
   * @description New task name.
   */
  name?: string;
  /**
   * Parent
   * @description ID of new parent task to make this a subtask; cannot convert subtask to regular task this way.
   */
  parent?: string;
  /**
   * Priority
   * @description Priority: 1 (Urgent), 2 (High), 3 (Normal), 4 (Low). Omit or `None` to remove.
   */
  priority?: number;
  /**
   * Start Date
   * @description New start date (Unix timestamp in milliseconds).
   */
  start_date?: number;
  /**
   * Start Date Time
   * @description True if `start_date` includes time, false if all-day.
   */
  start_date_time?: boolean;
  /**
   * Status
   * @description New task status (case-sensitive, must be valid in Workspace).
   */
  status?: string;
  /**
   * Task Id
   * @description Unique task identifier; use custom task ID if `custom_task_ids` is true.
   */
  task_id?: string;
  /**
   * Team Id
   * @description Team ID, required if `custom_task_ids` is true.
   */
  team_id?: number;
  /**
   * Time Estimate
   * @description New time estimate in milliseconds.
   */
  time_estimate?: number;
};

/**
 * Type of CLICKUP's CLICKUP_UPDATE_TASK tool output.
 */
type CLICKUP_UPDATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Dictionary containing the updated task object.
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
 * Type of CLICKUP's CLICKUP_UPDATE_TEAM tool input.
 */
type CLICKUP_UPDATE_TEAM_INPUT = {
  /**
   * Group Id
   * @description The ID of the User Group (Team) to update.
   */
  group_id?: string;
  /**
   * Handle
   * @description The new handle for the User Group (Team), used for @mentions (e.g., '@developers').
   */
  handle?: string;
  /**
   * Members  Add
   * @description A list of user IDs to add to the User Group (Team).
   */
  members__add?: number[];
  /**
   * Members  Rem
   * @description A list of user IDs to remove from the User Group (Team).
   */
  members__rem?: number[];
  /**
   * Name
   * @description The new name for the User Group (Team).
   */
  name?: string;
};

/**
 * Type of CLICKUP's CLICKUP_UPDATE_TEAM tool output.
 */
type CLICKUP_UPDATE_TEAM_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_UPDATE_VIEW tool input.
 */
type CLICKUP_UPDATE_VIEW_INPUT = {
  /**
   * Columns  Fields
   * @description Fields to display as columns in the view. Custom Fields require the `_cf` prefix and their ID (e.g., `_cf_custom_field_id`).
   */
  columns__fields?: string[];
  /**
   * Divide  Collapsed
   * @description Indicates if divided sections should be collapsed. Currently, this field may not be actively used or may be deprecated.
   */
  divide__collapsed?: boolean;
  /**
   * Divide  Dir
   * @description The direction for dividing the view. Currently, this field may not be actively used or may be deprecated.
   */
  divide__dir?: null;
  /**
   * Divide  Field
   * @description The field to divide the view by (e.g., to create swimlanes in a board view). Currently, this field may not be actively used or may be deprecated.
   */
  divide__field?: null;
  /**
   * Filters  Fields
   * @description Fields to apply filters on; refer to ClickUp API documentation for available fields.
   */
  filters__fields?: string[];
  /**
   * Filters  Op
   * @description The operator for combining filters. Available values are `AND` and `OR`.
   */
  filters__op?: string;
  /**
   * Filters  Search
   * @description A search string to filter tasks by name or content.
   */
  filters__search?: string;
  /**
   * Filters  Show  Closed
   * @description If true, closed tasks will be included in the view.
   */
  filters__show__closed?: boolean;
  /**
   * Grouping  Collapsed
   * @description A list of group identifiers (e.g., status names or assignee IDs) that should be collapsed by default in the view.
   */
  grouping__collapsed?: string[];
  /**
   * Grouping  Dir
   * @description The sort order for grouping. Use `1` for ascending (e.g., urgent priority at the top) or `-1` for descending (e.g., no priority at the top).
   */
  grouping__dir?: number;
  /**
   * Grouping  Field
   * @description The field to group tasks by. Options include: `none`, `status`, `priority`, `assignee`, `tag`, or `dueDate`.
   */
  grouping__field?: string;
  /**
   * Grouping  Ignore
   * @description If true, tasks with no value for the `grouping_field` will not be grouped.
   */
  grouping__ignore?: boolean;
  /**
   * Name
   * @description The new name for the view.
   */
  name?: string;
  /**
   * Parent  Id
   * @description The ID of the Workspace, Space, Folder, or List where the view is located.
   */
  parent__id?: string;
  /**
   * Parent  Type
   * @description The level of the Hierarchy where the view is created. Options include: Workspace (Everything Level): `7`, Space: `4`, Folder: `5`, List: `6`.
   */
  parent__type?: number;
  /**
   * Settings  Collapse  Empty  Columns
   * @description If true, columns with no tasks will be collapsed (e.g., in Board view). This might accept boolean as a string like 'true' or 'false'.
   */
  settings__collapse__empty__columns?: string;
  /**
   * Settings  Me  Checklists
   * @description If true, in 'Me Mode', only checklists assigned to the current user will be shown.
   */
  settings__me__checklists?: boolean;
  /**
   * Settings  Me  Comments
   * @description If true, in 'Me Mode', only comments where the current user is mentioned or involved will be shown.
   */
  settings__me__comments?: boolean;
  /**
   * Settings  Me  Subtasks
   * @description If true, in 'Me Mode', only subtasks assigned to the current user will be shown.
   */
  settings__me__subtasks?: boolean;
  /**
   * Settings  Show  Assignees
   * @description If true, assignees will be displayed on tasks.
   */
  settings__show__assignees?: boolean;
  /**
   * Settings  Show  Closed  Subtasks
   * @description If true, closed subtasks will be included in the view.
   */
  settings__show__closed__subtasks?: boolean;
  /**
   * Settings  Show  Images
   * @description If true, images attached to tasks will be displayed in the view (e.g. cover images in card view).
   */
  settings__show__images?: boolean;
  /**
   * Settings  Show  Subtask  Parent  Names
   * @description If true, parent task names will be displayed for subtasks.
   */
  settings__show__subtask__parent__names?: boolean;
  /**
   * Settings  Show  Subtasks
   * @description Controls how subtasks are displayed. Acceptable values are `1` (show subtasks as separate tasks), `2` (show subtasks expanded under parent task), or `3` (show subtasks collapsed under parent task).
   */
  settings__show__subtasks?: number;
  /**
   * Settings  Show  Task  Locations
   * @description If true, task locations (List, Folder, Space) will be displayed.
   */
  settings__show__task__locations?: boolean;
  /**
   * Sorting  Fields
   * @description Fields to sort tasks by; refer to ClickUp API documentation for available filter fields.
   */
  sorting__fields?: string[];
  /**
   * Team  Sidebar  Assigned  Comments
   * @description If true, assigned comments will be shown in the team sidebar.
   */
  team__sidebar__assigned__comments?: boolean;
  /**
   * Team  Sidebar  Assignees
   * @description A list of assignee user IDs to feature in the team sidebar.
   */
  team__sidebar__assignees?: string[];
  /**
   * Team  Sidebar  Unassigned  Tasks
   * @description If true, unassigned tasks will be shown in the team sidebar.
   */
  team__sidebar__unassigned__tasks?: boolean;
  /**
   * Type
   * @description The type of the view.
   */
  type?: string;
  /**
   * View Id
   * @description The unique identifier of the view to be updated.
   */
  view_id?: string;
};

/**
 * Type of CLICKUP's CLICKUP_UPDATE_VIEW tool output.
 */
type CLICKUP_UPDATE_VIEW_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the updated view.
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
 * Type of CLICKUP's CLICKUP_UPDATE_WEBHOOK tool input.
 */
type CLICKUP_UPDATE_WEBHOOK_INPUT = {
  /**
   * Endpoint
   * @description The new URL where the webhook payloads will be sent.
   */
  endpoint?: string;
  /**
   * Events
   * @description A JSON array of strings representing the events to monitor, or '["*"]' for all events. For example, '["taskCreated", "taskUpdated"]'.
   */
  events?: string;
  /**
   * Status
   * @description The desired status of the webhook after the update.
   */
  status?: string;
  /**
   * Webhook Id
   * @description The unique identifier of the webhook to be updated. Example: 'e506-4a29-9d42-26e504e3435e'.
   */
  webhook_id?: string;
};

/**
 * Type of CLICKUP's CLICKUP_UPDATE_WEBHOOK tool output.
 */
type CLICKUP_UPDATE_WEBHOOK_OUTPUT = {
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
 * Type of CLICKUP's CLICKUP_VIEWS_GET_EVERYTHING_LEVEL tool input.
 */
type CLICKUP_VIEWS_GET_EVERYTHING_LEVEL_INPUT = {
  /**
   * Team Id
   * @description Numeric ID of the Workspace (often referred to as Team ID) for which to retrieve Everything Level views.
   */
  team_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_VIEWS_GET_EVERYTHING_LEVEL tool output.
 */
type CLICKUP_VIEWS_GET_EVERYTHING_LEVEL_OUTPUT = {
  /**
   * Data
   * @description Details of the Everything Level views, typically including a list of view objects with properties like id, name, type (e.g., list, board, calendar), and view-specific settings.
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
 * Type of CLICKUP's CLICKUP_VIEWS_SPACE_VIEWS_GET tool input.
 */
type CLICKUP_VIEWS_SPACE_VIEWS_GET_INPUT = {
  /**
   * Space Id
   * @description ID of the Space to retrieve views from.
   */
  space_id?: number;
};

/**
 * Type of CLICKUP's CLICKUP_VIEWS_SPACE_VIEWS_GET tool output.
 */
type CLICKUP_VIEWS_SPACE_VIEWS_GET_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the views within the Space. The keys are view IDs and the values are objects containing view details such as name, type, and parent.
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
 * Type map of all available tool input types for toolkit "CLICKUP".
 */
export type CLICKUP_TOOL_INPUTS = {
  ADD_DEPENDENCY: CLICKUP_ADD_DEPENDENCY_INPUT
  ADD_GUEST_TO_FOLDER: CLICKUP_ADD_GUEST_TO_FOLDER_INPUT
  ADD_GUEST_TO_LIST: CLICKUP_ADD_GUEST_TO_LIST_INPUT
  ADD_GUEST_TO_TASK: CLICKUP_ADD_GUEST_TO_TASK_INPUT
  ADD_TAGS_FROM_TIME_ENTRIES: CLICKUP_ADD_TAGS_FROM_TIME_ENTRIES_INPUT
  ADD_TAG_TO_TASK: CLICKUP_ADD_TAG_TO_TASK_INPUT
  ADD_TASK_LINK: CLICKUP_ADD_TASK_LINK_INPUT
  ADD_TASK_TO_LIST: CLICKUP_ADD_TASK_TO_LIST_INPUT
  ATTACHMENTS_UPLOAD_FILE_TO_TASK_AS_ATTACHMENT: CLICKUP_ATTACHMENTS_UPLOAD_FILE_TO_TASK_AS_ATTACHMENT_INPUT
  AUTHORIZATION_GET_ACCESS_TOKEN: CLICKUP_AUTHORIZATION_GET_ACCESS_TOKEN_INPUT
  AUTHORIZATION_GET_WORK_SPACE_LIST: CLICKUP_AUTHORIZATION_GET_WORK_SPACE_LIST_INPUT
  AUTHORIZATION_VIEW_ACCOUNT_DETAILS: CLICKUP_AUTHORIZATION_VIEW_ACCOUNT_DETAILS_INPUT
  CHANGE_TAG_NAMES_FROM_TIME_ENTRIES: CLICKUP_CHANGE_TAG_NAMES_FROM_TIME_ENTRIES_INPUT
  CREATE_A_TIME_ENTRY: CLICKUP_CREATE_A_TIME_ENTRY_INPUT
  CREATE_CHAT_VIEW_COMMENT: CLICKUP_CREATE_CHAT_VIEW_COMMENT_INPUT
  CREATE_CHECKLIST: CLICKUP_CREATE_CHECKLIST_INPUT
  CREATE_CHECKLIST_ITEM: CLICKUP_CREATE_CHECKLIST_ITEM_INPUT
  CREATE_FOLDER: CLICKUP_CREATE_FOLDER_INPUT
  CREATE_FOLDERLESS_LIST: CLICKUP_CREATE_FOLDERLESS_LIST_INPUT
  CREATE_FOLDER_VIEW: CLICKUP_CREATE_FOLDER_VIEW_INPUT
  CREATE_GOAL: CLICKUP_CREATE_GOAL_INPUT
  CREATE_KEY_RESULT: CLICKUP_CREATE_KEY_RESULT_INPUT
  CREATE_LIST: CLICKUP_CREATE_LIST_INPUT
  CREATE_LIST_COMMENT: CLICKUP_CREATE_LIST_COMMENT_INPUT
  CREATE_LIST_VIEW: CLICKUP_CREATE_LIST_VIEW_INPUT
  CREATE_SPACE: CLICKUP_CREATE_SPACE_INPUT
  CREATE_SPACE_TAG: CLICKUP_CREATE_SPACE_TAG_INPUT
  CREATE_SPACE_VIEW: CLICKUP_CREATE_SPACE_VIEW_INPUT
  CREATE_TASK: CLICKUP_CREATE_TASK_INPUT
  CREATE_TASK_ATTACHMENT: CLICKUP_CREATE_TASK_ATTACHMENT_INPUT
  CREATE_TASK_COMMENT: CLICKUP_CREATE_TASK_COMMENT_INPUT
  CREATE_TASK_FROM_TEMPLATE: CLICKUP_CREATE_TASK_FROM_TEMPLATE_INPUT
  CREATE_TEAM: CLICKUP_CREATE_TEAM_INPUT
  CREATE_WEBHOOK: CLICKUP_CREATE_WEBHOOK_INPUT
  CREATE_WORKSPACE_EVERYTHING_LEVEL_VIEW: CLICKUP_CREATE_WORKSPACE_EVERYTHING_LEVEL_VIEW_INPUT
  DELETE_A_TIME_ENTRY: CLICKUP_DELETE_A_TIME_ENTRY_INPUT
  DELETE_CHECKLIST: CLICKUP_DELETE_CHECKLIST_INPUT
  DELETE_CHECKLIST_ITEM: CLICKUP_DELETE_CHECKLIST_ITEM_INPUT
  DELETE_COMMENT: CLICKUP_DELETE_COMMENT_INPUT
  DELETE_DEPENDENCY: CLICKUP_DELETE_DEPENDENCY_INPUT
  DELETE_FOLDER: CLICKUP_DELETE_FOLDER_INPUT
  DELETE_GOAL: CLICKUP_DELETE_GOAL_INPUT
  DELETE_KEY_RESULT: CLICKUP_DELETE_KEY_RESULT_INPUT
  DELETE_LIST: CLICKUP_DELETE_LIST_INPUT
  DELETE_SPACE: CLICKUP_DELETE_SPACE_INPUT
  DELETE_SPACE_TAG: CLICKUP_DELETE_SPACE_TAG_INPUT
  DELETE_TASK: CLICKUP_DELETE_TASK_INPUT
  DELETE_TASK_LINK: CLICKUP_DELETE_TASK_LINK_INPUT
  DELETE_TEAM: CLICKUP_DELETE_TEAM_INPUT
  DELETE_TIME_TRACKED: CLICKUP_DELETE_TIME_TRACKED_INPUT
  DELETE_VIEW: CLICKUP_DELETE_VIEW_INPUT
  DELETE_WEBHOOK: CLICKUP_DELETE_WEBHOOK_INPUT
  EDIT_CHECKLIST: CLICKUP_EDIT_CHECKLIST_INPUT
  EDIT_CHECKLIST_ITEM: CLICKUP_EDIT_CHECKLIST_ITEM_INPUT
  EDIT_GUEST_ON_WORKSPACE: CLICKUP_EDIT_GUEST_ON_WORKSPACE_INPUT
  EDIT_KEY_RESULT: CLICKUP_EDIT_KEY_RESULT_INPUT
  EDIT_SPACE_TAG: CLICKUP_EDIT_SPACE_TAG_INPUT
  EDIT_TIME_TRACKED: CLICKUP_EDIT_TIME_TRACKED_INPUT
  EDIT_USER_ON_WORKSPACE: CLICKUP_EDIT_USER_ON_WORKSPACE_INPUT
  FOLDERS_CREATE_NEW_FOLDER: CLICKUP_FOLDERS_CREATE_NEW_FOLDER_INPUT
  FOLDERS_GET_CONTENTS_OF: CLICKUP_FOLDERS_GET_CONTENTS_OF_INPUT
  FOLDERS_GET_FOLDER_CONTENT: CLICKUP_FOLDERS_GET_FOLDER_CONTENT_INPUT
  GET_ACCESSIBLE_CUSTOM_FIELDS: CLICKUP_GET_ACCESSIBLE_CUSTOM_FIELDS_INPUT
  GET_ACCESS_TOKEN: CLICKUP_GET_ACCESS_TOKEN_INPUT
  GET_ALL_TAGS_FROM_TIME_ENTRIES: CLICKUP_GET_ALL_TAGS_FROM_TIME_ENTRIES_INPUT
  GET_AUTHORIZED_TEAMS_WORKSPACES: CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES_INPUT
  GET_AUTHORIZED_USER: CLICKUP_GET_AUTHORIZED_USER_INPUT
  GET_BULK_TASKS_TIME_IN_STATUS: CLICKUP_GET_BULK_TASKS_TIME_IN_STATUS_INPUT
  GET_CHAT_VIEW_COMMENTS: CLICKUP_GET_CHAT_VIEW_COMMENTS_INPUT
  GET_CUSTOM_ROLES: CLICKUP_GET_CUSTOM_ROLES_INPUT
  GET_CUSTOM_TASK_TYPES: CLICKUP_GET_CUSTOM_TASK_TYPES_INPUT
  GET_FILTERED_TEAM_TASKS: CLICKUP_GET_FILTERED_TEAM_TASKS_INPUT
  GET_FOLDER: CLICKUP_GET_FOLDER_INPUT
  GET_FOLDERLESS_LISTS: CLICKUP_GET_FOLDERLESS_LISTS_INPUT
  GET_FOLDERS: CLICKUP_GET_FOLDERS_INPUT
  GET_FOLDER_VIEWS: CLICKUP_GET_FOLDER_VIEWS_INPUT
  GET_GOAL: CLICKUP_GET_GOAL_INPUT
  GET_GOALS: CLICKUP_GET_GOALS_INPUT
  GET_GUEST: CLICKUP_GET_GUEST_INPUT
  GET_LIST: CLICKUP_GET_LIST_INPUT
  GET_LISTS: CLICKUP_GET_LISTS_INPUT
  GET_LIST_COMMENTS: CLICKUP_GET_LIST_COMMENTS_INPUT
  GET_LIST_MEMBERS: CLICKUP_GET_LIST_MEMBERS_INPUT
  GET_LIST_VIEWS: CLICKUP_GET_LIST_VIEWS_INPUT
  GET_RUNNING_TIME_ENTRY: CLICKUP_GET_RUNNING_TIME_ENTRY_INPUT
  GET_SINGULAR_TIME_ENTRY: CLICKUP_GET_SINGULAR_TIME_ENTRY_INPUT
  GET_SPACE: CLICKUP_GET_SPACE_INPUT
  GET_SPACES: CLICKUP_GET_SPACES_INPUT
  GET_SPACE_TAGS: CLICKUP_GET_SPACE_TAGS_INPUT
  GET_SPACE_VIEWS: CLICKUP_GET_SPACE_VIEWS_INPUT
  GET_TASK: CLICKUP_GET_TASK_INPUT
  GET_TASKS: CLICKUP_GET_TASKS_INPUT
  GET_TASK_COMMENTS: CLICKUP_GET_TASK_COMMENTS_INPUT
  GET_TASK_MEMBERS: CLICKUP_GET_TASK_MEMBERS_INPUT
  GET_TASK_S_TIME_IN_STATUS: CLICKUP_GET_TASK_S_TIME_IN_STATUS_INPUT
  GET_TASK_TEMPLATES: CLICKUP_GET_TASK_TEMPLATES_INPUT
  GET_TEAMS: CLICKUP_GET_TEAMS_INPUT
  GET_TIME_ENTRIES_WITHIN_A_DATE_RANGE: CLICKUP_GET_TIME_ENTRIES_WITHIN_A_DATE_RANGE_INPUT
  GET_TIME_ENTRY_HISTORY: CLICKUP_GET_TIME_ENTRY_HISTORY_INPUT
  GET_TRACKED_TIME: CLICKUP_GET_TRACKED_TIME_INPUT
  GET_USER: CLICKUP_GET_USER_INPUT
  GET_VIEW: CLICKUP_GET_VIEW_INPUT
  GET_VIEW_TASKS: CLICKUP_GET_VIEW_TASKS_INPUT
  GET_WEBHOOKS: CLICKUP_GET_WEBHOOKS_INPUT
  GET_WORKSPACE_EVERYTHING_LEVEL_VIEWS: CLICKUP_GET_WORKSPACE_EVERYTHING_LEVEL_VIEWS_INPUT
  GET_WORKSPACE_PLAN: CLICKUP_GET_WORKSPACE_PLAN_INPUT
  GET_WORKSPACE_SEATS: CLICKUP_GET_WORKSPACE_SEATS_INPUT
  INVITE_GUEST_TO_WORKSPACE: CLICKUP_INVITE_GUEST_TO_WORKSPACE_INPUT
  INVITE_USER_TO_WORKSPACE: CLICKUP_INVITE_USER_TO_WORKSPACE_INPUT
  LISTS_GET_FOLDER_LISTS: CLICKUP_LISTS_GET_FOLDER_LISTS_INPUT
  MEMBERS_GET_LIST_USERS: CLICKUP_MEMBERS_GET_LIST_USERS_INPUT
  REMOVE_CUSTOM_FIELD_VALUE: CLICKUP_REMOVE_CUSTOM_FIELD_VALUE_INPUT
  REMOVE_GUEST_FROM_FOLDER: CLICKUP_REMOVE_GUEST_FROM_FOLDER_INPUT
  REMOVE_GUEST_FROM_LIST: CLICKUP_REMOVE_GUEST_FROM_LIST_INPUT
  REMOVE_GUEST_FROM_TASK: CLICKUP_REMOVE_GUEST_FROM_TASK_INPUT
  REMOVE_GUEST_FROM_WORKSPACE: CLICKUP_REMOVE_GUEST_FROM_WORKSPACE_INPUT
  REMOVE_TAGS_FROM_TIME_ENTRIES: CLICKUP_REMOVE_TAGS_FROM_TIME_ENTRIES_INPUT
  REMOVE_TAG_FROM_TASK: CLICKUP_REMOVE_TAG_FROM_TASK_INPUT
  REMOVE_TASK_FROM_LIST: CLICKUP_REMOVE_TASK_FROM_LIST_INPUT
  REMOVE_USER_FROM_WORKSPACE: CLICKUP_REMOVE_USER_FROM_WORKSPACE_INPUT
  SET_CUSTOM_FIELD_VALUE: CLICKUP_SET_CUSTOM_FIELD_VALUE_INPUT
  SHARED_HIERARCHY: CLICKUP_SHARED_HIERARCHY_INPUT
  SPACES_GET_DETAILS: CLICKUP_SPACES_GET_DETAILS_INPUT
  SPACES_GET_SPACE_DETAILS: CLICKUP_SPACES_GET_SPACE_DETAILS_INPUT
  START_A_TIME_ENTRY: CLICKUP_START_A_TIME_ENTRY_INPUT
  STOP_A_TIME_ENTRY: CLICKUP_STOP_A_TIME_ENTRY_INPUT
  TASKS_GET_TASK_DETAILS: CLICKUP_TASKS_GET_TASK_DETAILS_INPUT
  TASK_CHECKLISTS_CREATE_NEW_CHECKLIST: CLICKUP_TASK_CHECKLISTS_CREATE_NEW_CHECKLIST_INPUT
  TEAMS_USER_GROUPS_CREATE_TEAM: CLICKUP_TEAMS_USER_GROUPS_CREATE_TEAM_INPUT
  TEAMS_WORK_SPACES_GET_WORK_SPACE_PLAN: CLICKUP_TEAMS_WORK_SPACES_GET_WORK_SPACE_PLAN_INPUT
  TEAMS_WORK_SPACES_GET_WORK_SPACE_SEATS: CLICKUP_TEAMS_WORK_SPACES_GET_WORK_SPACE_SEATS_INPUT
  TRACK_TIME: CLICKUP_TRACK_TIME_INPUT
  UPDATE_A_TIME_ENTRY: CLICKUP_UPDATE_A_TIME_ENTRY_INPUT
  UPDATE_COMMENT: CLICKUP_UPDATE_COMMENT_INPUT
  UPDATE_FOLDER: CLICKUP_UPDATE_FOLDER_INPUT
  UPDATE_GOAL: CLICKUP_UPDATE_GOAL_INPUT
  UPDATE_LIST: CLICKUP_UPDATE_LIST_INPUT
  UPDATE_SPACE: CLICKUP_UPDATE_SPACE_INPUT
  UPDATE_TASK: CLICKUP_UPDATE_TASK_INPUT
  UPDATE_TEAM: CLICKUP_UPDATE_TEAM_INPUT
  UPDATE_VIEW: CLICKUP_UPDATE_VIEW_INPUT
  UPDATE_WEBHOOK: CLICKUP_UPDATE_WEBHOOK_INPUT
  VIEWS_GET_EVERYTHING_LEVEL: CLICKUP_VIEWS_GET_EVERYTHING_LEVEL_INPUT
  VIEWS_SPACE_VIEWS_GET: CLICKUP_VIEWS_SPACE_VIEWS_GET_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CLICKUP".
 */
export type CLICKUP_TOOL_OUTPUTS = {
  ADD_DEPENDENCY: CLICKUP_ADD_DEPENDENCY_OUTPUT
  ADD_GUEST_TO_FOLDER: CLICKUP_ADD_GUEST_TO_FOLDER_OUTPUT
  ADD_GUEST_TO_LIST: CLICKUP_ADD_GUEST_TO_LIST_OUTPUT
  ADD_GUEST_TO_TASK: CLICKUP_ADD_GUEST_TO_TASK_OUTPUT
  ADD_TAGS_FROM_TIME_ENTRIES: CLICKUP_ADD_TAGS_FROM_TIME_ENTRIES_OUTPUT
  ADD_TAG_TO_TASK: CLICKUP_ADD_TAG_TO_TASK_OUTPUT
  ADD_TASK_LINK: CLICKUP_ADD_TASK_LINK_OUTPUT
  ADD_TASK_TO_LIST: CLICKUP_ADD_TASK_TO_LIST_OUTPUT
  ATTACHMENTS_UPLOAD_FILE_TO_TASK_AS_ATTACHMENT: CLICKUP_ATTACHMENTS_UPLOAD_FILE_TO_TASK_AS_ATTACHMENT_OUTPUT
  AUTHORIZATION_GET_ACCESS_TOKEN: CLICKUP_AUTHORIZATION_GET_ACCESS_TOKEN_OUTPUT
  AUTHORIZATION_GET_WORK_SPACE_LIST: CLICKUP_AUTHORIZATION_GET_WORK_SPACE_LIST_OUTPUT
  AUTHORIZATION_VIEW_ACCOUNT_DETAILS: CLICKUP_AUTHORIZATION_VIEW_ACCOUNT_DETAILS_OUTPUT
  CHANGE_TAG_NAMES_FROM_TIME_ENTRIES: CLICKUP_CHANGE_TAG_NAMES_FROM_TIME_ENTRIES_OUTPUT
  CREATE_A_TIME_ENTRY: CLICKUP_CREATE_A_TIME_ENTRY_OUTPUT
  CREATE_CHAT_VIEW_COMMENT: CLICKUP_CREATE_CHAT_VIEW_COMMENT_OUTPUT
  CREATE_CHECKLIST: CLICKUP_CREATE_CHECKLIST_OUTPUT
  CREATE_CHECKLIST_ITEM: CLICKUP_CREATE_CHECKLIST_ITEM_OUTPUT
  CREATE_FOLDER: CLICKUP_CREATE_FOLDER_OUTPUT
  CREATE_FOLDERLESS_LIST: CLICKUP_CREATE_FOLDERLESS_LIST_OUTPUT
  CREATE_FOLDER_VIEW: CLICKUP_CREATE_FOLDER_VIEW_OUTPUT
  CREATE_GOAL: CLICKUP_CREATE_GOAL_OUTPUT
  CREATE_KEY_RESULT: CLICKUP_CREATE_KEY_RESULT_OUTPUT
  CREATE_LIST: CLICKUP_CREATE_LIST_OUTPUT
  CREATE_LIST_COMMENT: CLICKUP_CREATE_LIST_COMMENT_OUTPUT
  CREATE_LIST_VIEW: CLICKUP_CREATE_LIST_VIEW_OUTPUT
  CREATE_SPACE: CLICKUP_CREATE_SPACE_OUTPUT
  CREATE_SPACE_TAG: CLICKUP_CREATE_SPACE_TAG_OUTPUT
  CREATE_SPACE_VIEW: CLICKUP_CREATE_SPACE_VIEW_OUTPUT
  CREATE_TASK: CLICKUP_CREATE_TASK_OUTPUT
  CREATE_TASK_ATTACHMENT: CLICKUP_CREATE_TASK_ATTACHMENT_OUTPUT
  CREATE_TASK_COMMENT: CLICKUP_CREATE_TASK_COMMENT_OUTPUT
  CREATE_TASK_FROM_TEMPLATE: CLICKUP_CREATE_TASK_FROM_TEMPLATE_OUTPUT
  CREATE_TEAM: CLICKUP_CREATE_TEAM_OUTPUT
  CREATE_WEBHOOK: CLICKUP_CREATE_WEBHOOK_OUTPUT
  CREATE_WORKSPACE_EVERYTHING_LEVEL_VIEW: CLICKUP_CREATE_WORKSPACE_EVERYTHING_LEVEL_VIEW_OUTPUT
  DELETE_A_TIME_ENTRY: CLICKUP_DELETE_A_TIME_ENTRY_OUTPUT
  DELETE_CHECKLIST: CLICKUP_DELETE_CHECKLIST_OUTPUT
  DELETE_CHECKLIST_ITEM: CLICKUP_DELETE_CHECKLIST_ITEM_OUTPUT
  DELETE_COMMENT: CLICKUP_DELETE_COMMENT_OUTPUT
  DELETE_DEPENDENCY: CLICKUP_DELETE_DEPENDENCY_OUTPUT
  DELETE_FOLDER: CLICKUP_DELETE_FOLDER_OUTPUT
  DELETE_GOAL: CLICKUP_DELETE_GOAL_OUTPUT
  DELETE_KEY_RESULT: CLICKUP_DELETE_KEY_RESULT_OUTPUT
  DELETE_LIST: CLICKUP_DELETE_LIST_OUTPUT
  DELETE_SPACE: CLICKUP_DELETE_SPACE_OUTPUT
  DELETE_SPACE_TAG: CLICKUP_DELETE_SPACE_TAG_OUTPUT
  DELETE_TASK: CLICKUP_DELETE_TASK_OUTPUT
  DELETE_TASK_LINK: CLICKUP_DELETE_TASK_LINK_OUTPUT
  DELETE_TEAM: CLICKUP_DELETE_TEAM_OUTPUT
  DELETE_TIME_TRACKED: CLICKUP_DELETE_TIME_TRACKED_OUTPUT
  DELETE_VIEW: CLICKUP_DELETE_VIEW_OUTPUT
  DELETE_WEBHOOK: CLICKUP_DELETE_WEBHOOK_OUTPUT
  EDIT_CHECKLIST: CLICKUP_EDIT_CHECKLIST_OUTPUT
  EDIT_CHECKLIST_ITEM: CLICKUP_EDIT_CHECKLIST_ITEM_OUTPUT
  EDIT_GUEST_ON_WORKSPACE: CLICKUP_EDIT_GUEST_ON_WORKSPACE_OUTPUT
  EDIT_KEY_RESULT: CLICKUP_EDIT_KEY_RESULT_OUTPUT
  EDIT_SPACE_TAG: CLICKUP_EDIT_SPACE_TAG_OUTPUT
  EDIT_TIME_TRACKED: CLICKUP_EDIT_TIME_TRACKED_OUTPUT
  EDIT_USER_ON_WORKSPACE: CLICKUP_EDIT_USER_ON_WORKSPACE_OUTPUT
  FOLDERS_CREATE_NEW_FOLDER: CLICKUP_FOLDERS_CREATE_NEW_FOLDER_OUTPUT
  FOLDERS_GET_CONTENTS_OF: CLICKUP_FOLDERS_GET_CONTENTS_OF_OUTPUT
  FOLDERS_GET_FOLDER_CONTENT: CLICKUP_FOLDERS_GET_FOLDER_CONTENT_OUTPUT
  GET_ACCESSIBLE_CUSTOM_FIELDS: CLICKUP_GET_ACCESSIBLE_CUSTOM_FIELDS_OUTPUT
  GET_ACCESS_TOKEN: CLICKUP_GET_ACCESS_TOKEN_OUTPUT
  GET_ALL_TAGS_FROM_TIME_ENTRIES: CLICKUP_GET_ALL_TAGS_FROM_TIME_ENTRIES_OUTPUT
  GET_AUTHORIZED_TEAMS_WORKSPACES: CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES_OUTPUT
  GET_AUTHORIZED_USER: CLICKUP_GET_AUTHORIZED_USER_OUTPUT
  GET_BULK_TASKS_TIME_IN_STATUS: CLICKUP_GET_BULK_TASKS_TIME_IN_STATUS_OUTPUT
  GET_CHAT_VIEW_COMMENTS: CLICKUP_GET_CHAT_VIEW_COMMENTS_OUTPUT
  GET_CUSTOM_ROLES: CLICKUP_GET_CUSTOM_ROLES_OUTPUT
  GET_CUSTOM_TASK_TYPES: CLICKUP_GET_CUSTOM_TASK_TYPES_OUTPUT
  GET_FILTERED_TEAM_TASKS: CLICKUP_GET_FILTERED_TEAM_TASKS_OUTPUT
  GET_FOLDER: CLICKUP_GET_FOLDER_OUTPUT
  GET_FOLDERLESS_LISTS: CLICKUP_GET_FOLDERLESS_LISTS_OUTPUT
  GET_FOLDERS: CLICKUP_GET_FOLDERS_OUTPUT
  GET_FOLDER_VIEWS: CLICKUP_GET_FOLDER_VIEWS_OUTPUT
  GET_GOAL: CLICKUP_GET_GOAL_OUTPUT
  GET_GOALS: CLICKUP_GET_GOALS_OUTPUT
  GET_GUEST: CLICKUP_GET_GUEST_OUTPUT
  GET_LIST: CLICKUP_GET_LIST_OUTPUT
  GET_LISTS: CLICKUP_GET_LISTS_OUTPUT
  GET_LIST_COMMENTS: CLICKUP_GET_LIST_COMMENTS_OUTPUT
  GET_LIST_MEMBERS: CLICKUP_GET_LIST_MEMBERS_OUTPUT
  GET_LIST_VIEWS: CLICKUP_GET_LIST_VIEWS_OUTPUT
  GET_RUNNING_TIME_ENTRY: CLICKUP_GET_RUNNING_TIME_ENTRY_OUTPUT
  GET_SINGULAR_TIME_ENTRY: CLICKUP_GET_SINGULAR_TIME_ENTRY_OUTPUT
  GET_SPACE: CLICKUP_GET_SPACE_OUTPUT
  GET_SPACES: CLICKUP_GET_SPACES_OUTPUT
  GET_SPACE_TAGS: CLICKUP_GET_SPACE_TAGS_OUTPUT
  GET_SPACE_VIEWS: CLICKUP_GET_SPACE_VIEWS_OUTPUT
  GET_TASK: CLICKUP_GET_TASK_OUTPUT
  GET_TASKS: CLICKUP_GET_TASKS_OUTPUT
  GET_TASK_COMMENTS: CLICKUP_GET_TASK_COMMENTS_OUTPUT
  GET_TASK_MEMBERS: CLICKUP_GET_TASK_MEMBERS_OUTPUT
  GET_TASK_S_TIME_IN_STATUS: CLICKUP_GET_TASK_S_TIME_IN_STATUS_OUTPUT
  GET_TASK_TEMPLATES: CLICKUP_GET_TASK_TEMPLATES_OUTPUT
  GET_TEAMS: CLICKUP_GET_TEAMS_OUTPUT
  GET_TIME_ENTRIES_WITHIN_A_DATE_RANGE: CLICKUP_GET_TIME_ENTRIES_WITHIN_A_DATE_RANGE_OUTPUT
  GET_TIME_ENTRY_HISTORY: CLICKUP_GET_TIME_ENTRY_HISTORY_OUTPUT
  GET_TRACKED_TIME: CLICKUP_GET_TRACKED_TIME_OUTPUT
  GET_USER: CLICKUP_GET_USER_OUTPUT
  GET_VIEW: CLICKUP_GET_VIEW_OUTPUT
  GET_VIEW_TASKS: CLICKUP_GET_VIEW_TASKS_OUTPUT
  GET_WEBHOOKS: CLICKUP_GET_WEBHOOKS_OUTPUT
  GET_WORKSPACE_EVERYTHING_LEVEL_VIEWS: CLICKUP_GET_WORKSPACE_EVERYTHING_LEVEL_VIEWS_OUTPUT
  GET_WORKSPACE_PLAN: CLICKUP_GET_WORKSPACE_PLAN_OUTPUT
  GET_WORKSPACE_SEATS: CLICKUP_GET_WORKSPACE_SEATS_OUTPUT
  INVITE_GUEST_TO_WORKSPACE: CLICKUP_INVITE_GUEST_TO_WORKSPACE_OUTPUT
  INVITE_USER_TO_WORKSPACE: CLICKUP_INVITE_USER_TO_WORKSPACE_OUTPUT
  LISTS_GET_FOLDER_LISTS: CLICKUP_LISTS_GET_FOLDER_LISTS_OUTPUT
  MEMBERS_GET_LIST_USERS: CLICKUP_MEMBERS_GET_LIST_USERS_OUTPUT
  REMOVE_CUSTOM_FIELD_VALUE: CLICKUP_REMOVE_CUSTOM_FIELD_VALUE_OUTPUT
  REMOVE_GUEST_FROM_FOLDER: CLICKUP_REMOVE_GUEST_FROM_FOLDER_OUTPUT
  REMOVE_GUEST_FROM_LIST: CLICKUP_REMOVE_GUEST_FROM_LIST_OUTPUT
  REMOVE_GUEST_FROM_TASK: CLICKUP_REMOVE_GUEST_FROM_TASK_OUTPUT
  REMOVE_GUEST_FROM_WORKSPACE: CLICKUP_REMOVE_GUEST_FROM_WORKSPACE_OUTPUT
  REMOVE_TAGS_FROM_TIME_ENTRIES: CLICKUP_REMOVE_TAGS_FROM_TIME_ENTRIES_OUTPUT
  REMOVE_TAG_FROM_TASK: CLICKUP_REMOVE_TAG_FROM_TASK_OUTPUT
  REMOVE_TASK_FROM_LIST: CLICKUP_REMOVE_TASK_FROM_LIST_OUTPUT
  REMOVE_USER_FROM_WORKSPACE: CLICKUP_REMOVE_USER_FROM_WORKSPACE_OUTPUT
  SET_CUSTOM_FIELD_VALUE: CLICKUP_SET_CUSTOM_FIELD_VALUE_OUTPUT
  SHARED_HIERARCHY: CLICKUP_SHARED_HIERARCHY_OUTPUT
  SPACES_GET_DETAILS: CLICKUP_SPACES_GET_DETAILS_OUTPUT
  SPACES_GET_SPACE_DETAILS: CLICKUP_SPACES_GET_SPACE_DETAILS_OUTPUT
  START_A_TIME_ENTRY: CLICKUP_START_A_TIME_ENTRY_OUTPUT
  STOP_A_TIME_ENTRY: CLICKUP_STOP_A_TIME_ENTRY_OUTPUT
  TASKS_GET_TASK_DETAILS: CLICKUP_TASKS_GET_TASK_DETAILS_OUTPUT
  TASK_CHECKLISTS_CREATE_NEW_CHECKLIST: CLICKUP_TASK_CHECKLISTS_CREATE_NEW_CHECKLIST_OUTPUT
  TEAMS_USER_GROUPS_CREATE_TEAM: CLICKUP_TEAMS_USER_GROUPS_CREATE_TEAM_OUTPUT
  TEAMS_WORK_SPACES_GET_WORK_SPACE_PLAN: CLICKUP_TEAMS_WORK_SPACES_GET_WORK_SPACE_PLAN_OUTPUT
  TEAMS_WORK_SPACES_GET_WORK_SPACE_SEATS: CLICKUP_TEAMS_WORK_SPACES_GET_WORK_SPACE_SEATS_OUTPUT
  TRACK_TIME: CLICKUP_TRACK_TIME_OUTPUT
  UPDATE_A_TIME_ENTRY: CLICKUP_UPDATE_A_TIME_ENTRY_OUTPUT
  UPDATE_COMMENT: CLICKUP_UPDATE_COMMENT_OUTPUT
  UPDATE_FOLDER: CLICKUP_UPDATE_FOLDER_OUTPUT
  UPDATE_GOAL: CLICKUP_UPDATE_GOAL_OUTPUT
  UPDATE_LIST: CLICKUP_UPDATE_LIST_OUTPUT
  UPDATE_SPACE: CLICKUP_UPDATE_SPACE_OUTPUT
  UPDATE_TASK: CLICKUP_UPDATE_TASK_OUTPUT
  UPDATE_TEAM: CLICKUP_UPDATE_TEAM_OUTPUT
  UPDATE_VIEW: CLICKUP_UPDATE_VIEW_OUTPUT
  UPDATE_WEBHOOK: CLICKUP_UPDATE_WEBHOOK_OUTPUT
  VIEWS_GET_EVERYTHING_LEVEL: CLICKUP_VIEWS_GET_EVERYTHING_LEVEL_OUTPUT
  VIEWS_SPACE_VIEWS_GET: CLICKUP_VIEWS_SPACE_VIEWS_GET_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CLICKUP toolkit.
 */
export const CLICKUP = {
  slug: "clickup",
  tools: {
    /**
     * Adds a 'waiting on' or 'blocking' dependency to a task, requiring either `depends on` (task becomes waiting on) or `dependency of` (task becomes blocking), but not both; `team id` is required if `custom task ids` is true.
     */
    ADD_DEPENDENCY: "CLICKUP_ADD_DEPENDENCY",
    /**
     * Adds a guest to a folder with specified permissions; requires a clickup enterprise plan.
     */
    ADD_GUEST_TO_FOLDER: "CLICKUP_ADD_GUEST_TO_FOLDER",
    /**
     * Shares a clickup list with an existing guest user, granting them specified permissions; requires the workspace to be on the clickup enterprise plan.
     */
    ADD_GUEST_TO_LIST: "CLICKUP_ADD_GUEST_TO_LIST",
    /**
     * Assigns a guest to a task with specified permissions; requires clickup enterprise plan, and `team id` if `custom task ids` is true.
     */
    ADD_GUEST_TO_TASK: "CLICKUP_ADD_GUEST_TO_TASK",
    /**
     * Associates a list of specified tags with one or more time entries within a given team (workspace).
     */
    ADD_TAGS_FROM_TIME_ENTRIES: "CLICKUP_ADD_TAGS_FROM_TIME_ENTRIES",
    /**
     * Adds an existing tag to a specified task; team id is required if custom task ids is true.
     */
    ADD_TAG_TO_TASK: "CLICKUP_ADD_TAG_TO_TASK",
    /**
     * Links two existing and accessible clickup tasks, identified by `task id` (source) and `links to` (target).
     */
    ADD_TASK_LINK: "CLICKUP_ADD_TASK_LINK",
    /**
     * Adds an existing task to an additional clickup list; the "tasks in multiple lists" clickapp must be enabled in the workspace for this.
     */
    ADD_TASK_TO_LIST: "CLICKUP_ADD_TASK_TO_LIST",
    /**
     * Deprecated: use `create task attachment` to upload a file to a task; requires `multipart/form-data`.
     */
    ATTACHMENTS_UPLOAD_FILE_TO_TASK_AS_ATTACHMENT: "CLICKUP_ATTACHMENTS_UPLOAD_FILE_TO_TASK_AS_ATTACHMENT",
    /**
     * Deprecated: use `get access token` instead. exchanges a clickup oauth 2.0 authorization code for an access token.
     */
    AUTHORIZATION_GET_ACCESS_TOKEN: "CLICKUP_AUTHORIZATION_GET_ACCESS_TOKEN",
    /**
     * Deprecated: use `get authorized teams workspaces` instead to retrieve workspaces (teams) accessible to the authenticated user.
     */
    AUTHORIZATION_GET_WORK_SPACE_LIST: "CLICKUP_AUTHORIZATION_GET_WORK_SPACE_LIST",
    /**
     * Deprecated: use `get authorized user` instead. retrieves details of the authenticated user's clickup account.
     */
    AUTHORIZATION_VIEW_ACCOUNT_DETAILS: "CLICKUP_AUTHORIZATION_VIEW_ACCOUNT_DETAILS",
    /**
     * Updates the name, background color, and/or foreground color for an existing time entry tag, identified by its current `name` and `team id`.
     */
    CHANGE_TAG_NAMES_FROM_TIME_ENTRIES: "CLICKUP_CHANGE_TAG_NAMES_FROM_TIME_ENTRIES",
    /**
     * Creates a new time entry for a specified team.
     */
    CREATE_A_TIME_ENTRY: "CLICKUP_CREATE_A_TIME_ENTRY",
    /**
     * Posts a new comment to a specified clickup chat view; the 'view id' must correspond to an existing and accessible chat view.
     */
    CREATE_CHAT_VIEW_COMMENT: "CLICKUP_CREATE_CHAT_VIEW_COMMENT",
    /**
     * Creates a new checklist with a specified name within an existing task, which can be identified by its standard id or a custom task id (if `custom task ids` is true, `team id` is also required).
     */
    CREATE_CHECKLIST: "CLICKUP_CREATE_CHECKLIST",
    /**
     * Creates a new checklist item within a specified, existing checklist, optionally setting the item's name and assigning it to a user.
     */
    CREATE_CHECKLIST_ITEM: "CLICKUP_CREATE_CHECKLIST_ITEM",
    /**
     * Creates a new clickup folder within the specified space, which must exist and be accessible.
     */
    CREATE_FOLDER: "CLICKUP_CREATE_FOLDER",
    /**
     * Creates a new folderless list (a list not part of any folder) directly within a specified clickup space.
     */
    CREATE_FOLDERLESS_LIST: "CLICKUP_CREATE_FOLDERLESS_LIST",
    /**
     * Creates a new, highly customizable view within a specific clickup folder using its `folder id`.
     */
    CREATE_FOLDER_VIEW: "CLICKUP_CREATE_FOLDER_VIEW",
    /**
     * Creates a new goal in a clickup team (workspace).
     */
    CREATE_GOAL: "CLICKUP_CREATE_GOAL",
    /**
     * Creates a new key result (target) for a specified goal in clickup to define and track measurable objectives towards achieving that goal.
     */
    CREATE_KEY_RESULT: "CLICKUP_CREATE_KEY_RESULT",
    /**
     * Creates a new list in clickup within a specified, existing folder.
     */
    CREATE_LIST: "CLICKUP_CREATE_LIST",
    /**
     * Adds a new comment with specific text to an existing and accessible clickup list, assigns it to a user, and sets notification preferences for all list members.
     */
    CREATE_LIST_COMMENT: "CLICKUP_CREATE_LIST_COMMENT",
    /**
     * Creates a new, customizable view (e.g., list, board, calendar) within a specified clickup list, requiring an existing list id accessible by the user.
     */
    CREATE_LIST_VIEW: "CLICKUP_CREATE_LIST_VIEW",
    /**
     * Creates a new space in a clickup team, with customizable name, privacy, color, and feature settings.
     */
    CREATE_SPACE: "CLICKUP_CREATE_SPACE",
    /**
     * Creates a new tag (name, foreground color, background color) in an existing clickup space.
     */
    CREATE_SPACE_TAG: "CLICKUP_CREATE_SPACE_TAG",
    /**
     * Creates a customizable view (e.g., list, board, gantt) within a specified clickup space, allowing configuration of grouping, sorting, filtering, and display settings.
     */
    CREATE_SPACE_VIEW: "CLICKUP_CREATE_SPACE_VIEW",
    /**
     * Creates a new clickup task in a specific list, optionally as a subtask if a `parent` task id (which cannot be a subtask itself and must be in the same list) is provided.
     */
    CREATE_TASK: "CLICKUP_CREATE_TASK",
    /**
     * Uploads a file as an attachment to a specified clickup task, requiring `multipart/form-data` for file upload.
     */
    CREATE_TASK_ATTACHMENT: "CLICKUP_CREATE_TASK_ATTACHMENT",
    /**
     * Adds a comment to a clickup task; `team id` is required if `custom task ids` is true.
     */
    CREATE_TASK_COMMENT: "CLICKUP_CREATE_TASK_COMMENT",
    /**
     * Creates a new task in a specified clickup list from a task template, using the provided name for the new task.
     */
    CREATE_TASK_FROM_TEMPLATE: "CLICKUP_CREATE_TASK_FROM_TEMPLATE",
    /**
     * Creates a new team (user group) with specified members in a workspace; member ids must be for existing users, and be aware that adding view-only guests as paid members may incur extra charges.
     */
    CREATE_TEAM: "CLICKUP_CREATE_TEAM",
    /**
     * Creates a clickup webhook for a team (workspace) to notify a public url on specified events (at least one, or '*' for all), optionally scoped to a space, folder, list, or task; the endpoint must accept requests from dynamic ips.
     */
    CREATE_WEBHOOK: "CLICKUP_CREATE_WEBHOOK",
    /**
     * Creates a new, customizable view (e.g., list, board) at the 'everything' level for a specified team (workspace id), encompassing all tasks within that workspace.
     */
    CREATE_WORKSPACE_EVERYTHING_LEVEL_VIEW: "CLICKUP_CREATE_WORKSPACE_EVERYTHING_LEVEL_VIEW",
    /**
     * Deletes an existing time entry, specified by `timer id`, from a workspace identified by `team id`.
     */
    DELETE_A_TIME_ENTRY: "CLICKUP_DELETE_A_TIME_ENTRY",
    /**
     * Permanently deletes an existing checklist identified by its `checklist id`.
     */
    DELETE_CHECKLIST: "CLICKUP_DELETE_CHECKLIST",
    /**
     * Permanently deletes an existing item, identified by `checklist item id`, from an existing checklist, identified by `checklist id`.
     */
    DELETE_CHECKLIST_ITEM: "CLICKUP_DELETE_CHECKLIST_ITEM",
    /**
     * Deletes an existing comment from a task using its `comment id`.
     */
    DELETE_COMMENT: "CLICKUP_DELETE_COMMENT",
    /**
     * Removes two dependency links for `task id`: one where `task id` is blocked by `depends on`, and another where `dependency of` is blocked by `task id`; `team id` is required if `custom task ids` is true.
     */
    DELETE_DEPENDENCY: "CLICKUP_DELETE_DEPENDENCY",
    /**
     * Permanently and irreversibly deletes a specified folder and all its contents (lists, tasks) if the folder id exists.
     */
    DELETE_FOLDER: "CLICKUP_DELETE_FOLDER",
    /**
     * Permanently removes an existing goal, identified by its `goal id`, from the workspace.
     */
    DELETE_GOAL: "CLICKUP_DELETE_GOAL",
    /**
     * Deletes an existing key result, also referred to as a target within a goal, identified by its `key result id`.
     */
    DELETE_KEY_RESULT: "CLICKUP_DELETE_KEY_RESULT",
    /**
     * Permanently deletes an existing list and all its contents; this action is destructive and irreversible via the api.
     */
    DELETE_LIST: "CLICKUP_DELETE_LIST",
    /**
     * Permanently deletes a specified space in clickup; this action is irreversible as the space cannot be recovered via the api.
     */
    DELETE_SPACE: "CLICKUP_DELETE_SPACE",
    /**
     * Deletes a tag from a space, identified by `tag name` in path; precise matching of tag details in the request body (`tag name 1`, `tag tag fg`, `tag tag bg`) is generally required for successful deletion.
     */
    DELETE_SPACE_TAG: "CLICKUP_DELETE_SPACE_TAG",
    /**
     * Permanently deletes a task, using its standard id or a custom task id (requires `custom task ids=true` and `team id`).
     */
    DELETE_TASK: "CLICKUP_DELETE_TASK",
    /**
     * Deletes an existing link, effectively a dependency or relationship, between two clickup tasks; set `custom task ids=true` and provide `team id` if using custom task ids.
     */
    DELETE_TASK_LINK: "CLICKUP_DELETE_TASK_LINK",
    /**
     * Permanently deletes an existing team (user group) from the workspace using its `group id`.
     */
    DELETE_TEAM: "CLICKUP_DELETE_TEAM",
    /**
     * Deletes a time-tracked interval from a task; use this legacy endpoint for older time tracking systems.
     */
    DELETE_TIME_TRACKED: "CLICKUP_DELETE_TIME_TRACKED",
    /**
     * Permanently and irreversibly deletes an existing view in clickup, identified by its `view id`.
     */
    DELETE_VIEW: "CLICKUP_DELETE_VIEW",
    /**
     * Permanently removes an existing webhook, specified by its id, thereby ceasing all its event monitoring and notifications.
     */
    DELETE_WEBHOOK: "CLICKUP_DELETE_WEBHOOK",
    /**
     * Updates an existing checklist's name or position, identified by its `checklist id`.
     */
    EDIT_CHECKLIST: "CLICKUP_EDIT_CHECKLIST",
    /**
     * Updates an existing checklist item, allowing modification of its name, assignee, resolution status, or parent item for nesting.
     */
    EDIT_CHECKLIST_ITEM: "CLICKUP_EDIT_CHECKLIST_ITEM",
    /**
     * Modifies the details and permissions of an existing guest user within a specific workspace.
     */
    EDIT_GUEST_ON_WORKSPACE: "CLICKUP_EDIT_GUEST_ON_WORKSPACE",
    /**
     * Updates an existing key result's progress or note in clickup, where the key result measures progress towards a goal.
     */
    EDIT_KEY_RESULT: "CLICKUP_EDIT_KEY_RESULT",
    /**
     * Updates an existing tag's name and colors in a clickup space; requires current tag name for identification, and new values for tag name, foreground color, and background color, all of which are mandatory for the update.
     */
    EDIT_SPACE_TAG: "CLICKUP_EDIT_SPACE_TAG",
    /**
     * Edits a legacy time-tracked interval for a task (identified by `task id` and `interval id`) to update its start/end times and duration; `team id` is required if `custom task ids` is true.
     */
    EDIT_TIME_TRACKED: "CLICKUP_EDIT_TIME_TRACKED",
    /**
     * Updates a user's username, admin status, or custom role in a workspace; requires the workspace to be on an enterprise plan.
     */
    EDIT_USER_ON_WORKSPACE: "CLICKUP_EDIT_USER_ON_WORKSPACE",
    /**
     * Deprecated: creates a new folder in a clickup space; use `create folder` instead.
     */
    FOLDERS_CREATE_NEW_FOLDER: "CLICKUP_FOLDERS_CREATE_NEW_FOLDER",
    /**
     * Deprecated: use `get folders`. retrieves folders within a specified clickup space, ensuring `space id` is valid, with an option to filter by archived status.
     */
    FOLDERS_GET_CONTENTS_OF: "CLICKUP_FOLDERS_GET_CONTENTS_OF",
    /**
     * Deprecated: retrieves detailed information about a specific folder in clickup; use `get folder` instead.
     */
    FOLDERS_GET_FOLDER_CONTENT: "CLICKUP_FOLDERS_GET_FOLDER_CONTENT",
    /**
     * Retrieves all accessible custom field definitions for a specified clickup list using its `list id`.
     */
    GET_ACCESSIBLE_CUSTOM_FIELDS: "CLICKUP_GET_ACCESSIBLE_CUSTOM_FIELDS",
    /**
     * Exchanges a clickup oauth 2.0 authorization code (obtained after user consent) for an access token.
     */
    GET_ACCESS_TOKEN: "CLICKUP_GET_ACCESS_TOKEN",
    /**
     * Retrieves all unique tags applied to time entries within a specified clickup team (workspace).
     */
    GET_ALL_TAGS_FROM_TIME_ENTRIES: "CLICKUP_GET_ALL_TAGS_FROM_TIME_ENTRIES",
    /**
     * Retrieves a list of workspaces (teams) the authenticated user can access.
     */
    GET_AUTHORIZED_TEAMS_WORKSPACES: "CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES",
    /**
     * Retrieves the details of the currently authenticated clickup user.
     */
    GET_AUTHORIZED_USER: "CLICKUP_GET_AUTHORIZED_USER",
    /**
     * Retrieves the time spent in each status for multiple tasks; requires the 'total time in status' clickapp to be enabled in the workspace.
     */
    GET_BULK_TASKS_TIME_IN_STATUS: "CLICKUP_GET_BULK_TASKS_TIME_IN_STATUS",
    /**
     * Retrieves comments from a specified chat view in clickup, supporting pagination via `start` and `start id` to fetch comments older than the default 25 most recent.
     */
    GET_CHAT_VIEW_COMMENTS: "CLICKUP_GET_CHAT_VIEW_COMMENTS",
    /**
     * Retrieves all custom roles, which allow granular permission configurations, for a specified workspace (team).
     */
    GET_CUSTOM_ROLES: "CLICKUP_GET_CUSTOM_ROLES",
    /**
     * Retrieves all custom task types available within a specified workspace (team id).
     */
    GET_CUSTOM_TASK_TYPES: "CLICKUP_GET_CUSTOM_TASK_TYPES",
    /**
     * Retrieves a paginated list of tasks (up to 100 per page) from a specified team (workspace id in `team id`) based on various filter criteria, respecting user access permissions.
     */
    GET_FILTERED_TEAM_TASKS: "CLICKUP_GET_FILTERED_TEAM_TASKS",
    /**
     * Retrieves detailed information about a specific folder in clickup.
     */
    GET_FOLDER: "CLICKUP_GET_FOLDER",
    /**
     * Retrieves all lists within a specified space that are not located in any folder.
     */
    GET_FOLDERLESS_LISTS: "CLICKUP_GET_FOLDERLESS_LISTS",
    /**
     * Retrieves folders within a specified clickup space, ensuring `space id` is valid, with an option to filter by archived status.
     */
    GET_FOLDERS: "CLICKUP_GET_FOLDERS",
    /**
     * Retrieves all configured views (like list, board, calendar) for a specified, existing folder in clickup.
     */
    GET_FOLDER_VIEWS: "CLICKUP_GET_FOLDER_VIEWS",
    /**
     * Retrieves detailed information for an existing clickup goal, specified by its unique `goal id`.
     */
    GET_GOAL: "CLICKUP_GET_GOAL",
    /**
     * Retrieves goals for a specified clickup workspace (team); the `team id` must be valid and accessible.
     */
    GET_GOALS: "CLICKUP_GET_GOALS",
    /**
     * Call this to retrieve detailed information for a specific guest within a team (workspace), ensuring the `guest id` is valid for the given `team id`; this action requires the clickup enterprise plan.
     */
    GET_GUEST: "CLICKUP_GET_GUEST",
    /**
     * Retrieves detailed information for an existing list in clickup, identified by its unique `list id`.
     */
    GET_LIST: "CLICKUP_GET_LIST",
    /**
     * Retrieves all lists within a specified, existing clickup folder, optionally filtering by archived status.
     */
    GET_LISTS: "CLICKUP_GET_LISTS",
    /**
     * Retrieves comments for a specific clickup list, supporting pagination using `start` (timestamp) and `start id` (comment id) to fetch earlier comments; omits them for the latest 25.
     */
    GET_LIST_COMMENTS: "CLICKUP_GET_LIST_COMMENTS",
    /**
     * Retrieves all members of a specific, existing clickup list by its id.
     */
    GET_LIST_MEMBERS: "CLICKUP_GET_LIST_MEMBERS",
    /**
     * Retrieves all task and page views for a specified and accessible clickup list.
     */
    GET_LIST_VIEWS: "CLICKUP_GET_LIST_VIEWS",
    /**
     * Retrieves the currently active time entry for a user in a workspace; a negative 'duration' in its data indicates it's running, and the response may be empty if no entry is active.
     */
    GET_RUNNING_TIME_ENTRY: "CLICKUP_GET_RUNNING_TIME_ENTRY",
    /**
     * Fetches a specific time entry by its id for a given team; a negative duration in the response indicates an active timer.
     */
    GET_SINGULAR_TIME_ENTRY: "CLICKUP_GET_SINGULAR_TIME_ENTRY",
    /**
     * Retrieves detailed information for an existing space in a clickup workspace, identified by its unique space id.
     */
    GET_SPACE: "CLICKUP_GET_SPACE",
    /**
     * Retrieves spaces for a team id; member information for private spaces is returned only if the authenticated user is a member.
     */
    GET_SPACES: "CLICKUP_GET_SPACES",
    /**
     * Retrieves all tags for tasks within a specified clickup space, requiring a valid `space id`.
     */
    GET_SPACE_TAGS: "CLICKUP_GET_SPACE_TAGS",
    /**
     * Retrieves all task and page views for a specified space id in clickup.
     */
    GET_SPACE_VIEWS: "CLICKUP_GET_SPACE_VIEWS",
    /**
     * Retrieves comprehensive details for a clickup task by its id, supporting standard or custom task ids (requires `team id` for custom ids).
     */
    GET_TASK: "CLICKUP_GET_TASK",
    /**
     * Retrieves tasks from a specified clickup list; only tasks whose home is the given list id are returned.
     */
    GET_TASKS: "CLICKUP_GET_TASKS",
    /**
     * Retrieves up to 25 comments for a specified task, supporting pagination using `start` and `start id` to fetch older comments.
     */
    GET_TASK_COMMENTS: "CLICKUP_GET_TASK_COMMENTS",
    /**
     * Retrieves users with explicit access (directly assigned or shared) to a specific existing task, excluding users with inherited permissions.
     */
    GET_TASK_MEMBERS: "CLICKUP_GET_TASK_MEMBERS",
    /**
     * Retrieves the duration a task has spent in each status, provided the 'total time in status' clickapp is enabled for the workspace.
     */
    GET_TASK_S_TIME_IN_STATUS: "CLICKUP_GET_TASK_S_TIME_IN_STATUS",
    /**
     * Retrieves task templates for a specified workspace (team id), supporting pagination.
     */
    GET_TASK_TEMPLATES: "CLICKUP_GET_TASK_TEMPLATES",
    /**
     * Retrieves user groups (teams) from a clickup workspace, typically requiring `team id` (workspace id), with an option to filter by `group ids`.
     */
    GET_TEAMS: "CLICKUP_GET_TEAMS",
    /**
     * Retrieves time entries for a specified team (workspace id) within a date range (defaults to the last 30 days for the authenticated user if dates are omitted); active timers are indicated by negative durations in the response.
     */
    GET_TIME_ENTRIES_WITHIN_A_DATE_RANGE: "CLICKUP_GET_TIME_ENTRIES_WITHIN_A_DATE_RANGE",
    /**
     * Retrieves the modification history for an existing time entry within a specific clickup team (workspace).
     */
    GET_TIME_ENTRY_HISTORY: "CLICKUP_GET_TIME_ENTRY_HISTORY",
    /**
     * Retrieves tracked time for a task using a legacy endpoint; prefer newer time tracking api endpoints for managing time entries.
     */
    GET_TRACKED_TIME: "CLICKUP_GET_TRACKED_TIME",
    /**
     * Retrieves detailed information for a specific user within a clickup workspace (team), available only for workspaces on the clickup enterprise plan.
     */
    GET_USER: "CLICKUP_GET_USER",
    /**
     * Fetches details for a specific clickup view, identified by its `view id`, which must exist.
     */
    GET_VIEW: "CLICKUP_GET_VIEW",
    /**
     * Retrieves all tasks visible in a specified clickup view, respecting its applied filters, sorting, and grouping.
     */
    GET_VIEW_TASKS: "CLICKUP_GET_VIEW_TASKS",
    /**
     * Fetches webhooks for a team (workspace), returning only those created by the authenticated user via api, for a `team id` they can access.
     */
    GET_WEBHOOKS: "CLICKUP_GET_WEBHOOKS",
    /**
     * Retrieves all task and page views at the 'everything level' (a comprehensive overview of all tasks across all spaces) for a specified clickup workspace.
     */
    GET_WORKSPACE_EVERYTHING_LEVEL_VIEWS: "CLICKUP_GET_WORKSPACE_EVERYTHING_LEVEL_VIEWS",
    /**
     * Retrieves the details of the current subscription plan for a specified clickup workspace.
     */
    GET_WORKSPACE_PLAN: "CLICKUP_GET_WORKSPACE_PLAN",
    /**
     * Retrieves seat utilization (used, total, available for members/guests) for a clickup workspace (team) id, which must be for an existing workspace.
     */
    GET_WORKSPACE_SEATS: "CLICKUP_GET_WORKSPACE_SEATS",
    /**
     * Invites a guest by email to a clickup workspace (team) on an enterprise plan, setting initial permissions and optionally a custom role; further access configuration for specific items may require separate actions.
     */
    INVITE_GUEST_TO_WORKSPACE: "CLICKUP_INVITE_GUEST_TO_WORKSPACE",
    /**
     * Invites a user via email to a clickup workspace (team), optionally granting admin rights or a custom role; requires an enterprise plan for the workspace.
     */
    INVITE_USER_TO_WORKSPACE: "CLICKUP_INVITE_USER_TO_WORKSPACE",
    /**
     * Deprecated: use `get lists` instead. retrieves lists from a specified, existing clickup folder.
     */
    LISTS_GET_FOLDER_LISTS: "CLICKUP_LISTS_GET_FOLDER_LISTS",
    /**
     * Deprecated: retrieves users with access to a specific list; use `get list members` instead.
     */
    MEMBERS_GET_LIST_USERS: "CLICKUP_MEMBERS_GET_LIST_USERS",
    /**
     * Removes an existing value from a custom field on a specific task; this does not delete the custom field definition or its predefined options.
     */
    REMOVE_CUSTOM_FIELD_VALUE: "CLICKUP_REMOVE_CUSTOM_FIELD_VALUE",
    /**
     * Revokes a guest's access to a specific clickup folder, optionally unsharing items explicitly shared with them within it; requires an enterprise plan.
     */
    REMOVE_GUEST_FROM_FOLDER: "CLICKUP_REMOVE_GUEST_FROM_FOLDER",
    /**
     * Revokes a guest's access to a specific list, provided the guest currently has access to this list and the workspace is on the clickup enterprise plan.
     */
    REMOVE_GUEST_FROM_LIST: "CLICKUP_REMOVE_GUEST_FROM_LIST",
    /**
     * Revokes a guest's access to a specific task; only available for workspaces on the clickup enterprise plan.
     */
    REMOVE_GUEST_FROM_TASK: "CLICKUP_REMOVE_GUEST_FROM_TASK",
    /**
     * Permanently removes a guest from a specified workspace, revoking all their access; this destructive operation requires the workspace to be on the clickup enterprise plan.
     */
    REMOVE_GUEST_FROM_WORKSPACE: "CLICKUP_REMOVE_GUEST_FROM_WORKSPACE",
    /**
     * Removes tags from specified time entries in a team, without deleting the tags from the workspace.
     */
    REMOVE_TAGS_FROM_TIME_ENTRIES: "CLICKUP_REMOVE_TAGS_FROM_TIME_ENTRIES",
    /**
     * Removes a tag from a specified task by disassociating it (does not delete the tag from workspace), succeeding even if the tag is not on the task.
     */
    REMOVE_TAG_FROM_TASK: "CLICKUP_REMOVE_TAG_FROM_TASK",
    /**
     * Removes a task from an extra list (not its home list); the 'tasks in multiple lists' clickapp must be enabled.
     */
    REMOVE_TASK_FROM_LIST: "CLICKUP_REMOVE_TASK_FROM_LIST",
    /**
     * Deactivates a user from a specified clickup workspace, revoking their access (user can be reactivated later); requires the workspace to be on an enterprise plan.
     */
    REMOVE_USER_FROM_WORKSPACE: "CLICKUP_REMOVE_USER_FROM_WORKSPACE",
    /**
     * Sets or updates a custom field's value for a task; the new value (with type-dependent structure, e.g., `{"value": "text"}` or `{"value": 123, "value options": {"currency type":"usd"}}`) is provided in the json request body.
     */
    SET_CUSTOM_FIELD_VALUE: "CLICKUP_SET_CUSTOM_FIELD_VALUE",
    /**
     * Retrieves the hierarchy of tasks, lists, and folders shared with the authenticated user within an existing clickup team (workspace), identified by its `team id`.
     */
    SHARED_HIERARCHY: "CLICKUP_SHARED_HIERARCHY",
    /**
     * Deprecated: retrieves detailed information about a specific space; use the getspace action instead.
     */
    SPACES_GET_DETAILS: "CLICKUP_SPACES_GET_DETAILS",
    /**
     * Deprecated: use `get spaces` instead; retrieves spaces, with member info for private spaces accessible only if the user is a member.
     */
    SPACES_GET_SPACE_DETAILS: "CLICKUP_SPACES_GET_SPACE_DETAILS",
    /**
     * Starts a new time entry (timer) in the specified team (workspace), optionally associating it with a task, adding a description, setting billable status, or applying tags (tags feature requires business plan or higher).
     */
    START_A_TIME_ENTRY: "CLICKUP_START_A_TIME_ENTRY",
    /**
     * Stops the authenticated user's currently active time entry in the specified team (workspace), which requires an existing time entry to be running.
     */
    STOP_A_TIME_ENTRY: "CLICKUP_STOP_A_TIME_ENTRY",
    /**
     * Retrieves details for a task by its id, supporting standard or custom ids (requires `team id` for custom ids). <<deprecated: this action is deprecated. please use 'get task' instead.>>
     */
    TASKS_GET_TASK_DETAILS: "CLICKUP_TASKS_GET_TASK_DETAILS",
    /**
     * (deprecated: use `create checklist` instead) creates a new checklist with a specified name within an existing task, identifiable by standard id or custom task id (if `custom task ids` is true, `team id` is also required).
     */
    TASK_CHECKLISTS_CREATE_NEW_CHECKLIST: "CLICKUP_TASK_CHECKLISTS_CREATE_NEW_CHECKLIST",
    /**
     * Deprecated: use 'create team'. creates a team (user group) in a workspace; adding a view-only guest as a paid member may incur extra charges.
     */
    TEAMS_USER_GROUPS_CREATE_TEAM: "CLICKUP_TEAMS_USER_GROUPS_CREATE_TEAM",
    /**
     * Deprecated: retrieves the current plan for the specified workspace; use `get workspace plan` instead.
     */
    TEAMS_WORK_SPACES_GET_WORK_SPACE_PLAN: "CLICKUP_TEAMS_WORK_SPACES_GET_WORK_SPACE_PLAN",
    /**
     * Deprecated: use `get workspace seats` to retrieve seat utilization for a clickup workspace (team) id.
     */
    TEAMS_WORK_SPACES_GET_WORK_SPACE_SEATS: "CLICKUP_TEAMS_WORK_SPACES_GET_WORK_SPACE_SEATS",
    /**
     * Records a time entry for a task using clickup's legacy time tracking system; newer endpoints are generally recommended.
     */
    TRACK_TIME: "CLICKUP_TRACK_TIME",
    /**
     * Updates an existing clickup time entry; provide `start` and `end` times together, and include `team id` as a query param (request field `team id 1`) if `custom task ids` is true.
     */
    UPDATE_A_TIME_ENTRY: "CLICKUP_UPDATE_A_TIME_ENTRY",
    /**
     * Updates an existing task comment's text, assignee (who must be a valid workspace member), or resolution status, requiring a valid existing comment id.
     */
    UPDATE_COMMENT: "CLICKUP_UPDATE_COMMENT",
    /**
     * Updates the name of an existing folder in clickup.
     */
    UPDATE_FOLDER: "CLICKUP_UPDATE_FOLDER",
    /**
     * Updates attributes of an existing clickup goal, identified by its `goal id`.
     */
    UPDATE_GOAL: "CLICKUP_UPDATE_GOAL",
    /**
     * Updates attributes of an existing clickup list, such as its name, content, due date, priority, assignee, or color status, identified by its `list id`.
     */
    UPDATE_LIST: "CLICKUP_UPDATE_LIST",
    /**
     * Updates an existing clickup space, allowing modification of its name, color, privacy, and feature settings (clickapps).
     */
    UPDATE_SPACE: "CLICKUP_UPDATE_SPACE",
    /**
     * Updates attributes of an existing task; `team id` is required if `custom task ids` is true, use a single space (" ") for `description` to clear it, and provide at least one modifiable field.
     */
    UPDATE_TASK: "CLICKUP_UPDATE_TASK",
    /**
     * Updates an existing clickup user group (team) using its `group id`; note that adding a view-only guest as a paid member may incur charges.
     */
    UPDATE_TEAM: "CLICKUP_UPDATE_TEAM",
    /**
     * Updates an existing clickup view's settings such as name, type, grouping, or filters; ensure `parent id` and `parent type` define a valid hierarchy, and that specified field names (e.g. for sorting, columns) are valid within the clickup workspace.
     */
    UPDATE_VIEW: "CLICKUP_UPDATE_VIEW",
    /**
     * Updates the endpoint url, monitored events, and status of an existing webhook, identified by its `webhook id`.
     */
    UPDATE_WEBHOOK: "CLICKUP_UPDATE_WEBHOOK",
    /**
     * Deprecated: retrieves task and page views at the everything level of a workspace; use `get workspace everything level views` instead.
     */
    VIEWS_GET_EVERYTHING_LEVEL: "CLICKUP_VIEWS_GET_EVERYTHING_LEVEL",
    /**
     * (deprecated: use get space views instead) retrieves all task and page views for a specified space id in clickup.
     */
    VIEWS_SPACE_VIEWS_GET: "CLICKUP_VIEWS_SPACE_VIEWS_GET",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CLICKUP".
 */
export type CLICKUP_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CLICKUP".
 */
export type CLICKUP_TRIGGER_EVENTS = {}
