// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of WRIKE's WRIKE_BULK_MODIFY_GROUPS tool input.
 */
type WRIKE_BULK_MODIFY_GROUPS_INPUT = {
  /**
   * Members
   * @description List of group modification objects (max 20), each specifying a Wrike group and the members to add or remove.
   */
  members?: {
      /**
       * Add Members
       * @description User IDs to add to the group.
       */
      addMembers?: string[];
      /**
       * Id
       * @description Wrike group ID.
       */
      id: string;
      /**
       * Remove Members
       * @description User IDs to remove from the group.
       */
      removeMembers?: string[];
  }[];
};

/**
 * Type of WRIKE's WRIKE_BULK_MODIFY_GROUPS tool output.
 */
type WRIKE_BULK_MODIFY_GROUPS_OUTPUT = {
  /**
   * Data
   * @description Dictionary with response data. Structure varies by success/failure of individual operations.
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
 * Type of WRIKE's WRIKE_CREATE_FOLDER tool input.
 */
type WRIKE_CREATE_FOLDER_INPUT = {
  /**
   * Custom Columns
   * @description A list of custom field IDs to be associated with the folder as columns. These typically control the visibility and order of custom fields in a table view.
   */
  customColumns?: string[];
  /**
   * Custom Fields
   * @description A list of custom field entries (ID and value) to set for the new folder.
   */
  customFields?: Record<string, never>[];
  /**
   * Custom Item Type Id
   * @description The ID of a Custom Item Type. If provided, the created folder will be a project based on this type.
   */
  customItemTypeId?: string;
  /**
   * Description
   * @description An optional description for the new folder.
   */
  description?: string;
  /**
   * Fields
   * @description An optional list of field names to include in the response model, allowing for specific details about the created folder to be retrieved. Example fields include 'briefDescription', 'customFields', 'metadata', etc.
   */
  fields?: string[];
  /**
   * Folder Id
   * @description The unique identifier of the parent folder where the new subfolder will be created.
   */
  folderId?: string;
  /**
   * Metadata
   * @description A list of metadata entries (key-value pairs) to associate with the newly created folder.
   */
  metadata?: Record<string, never>[];
  /**
   * Plain Text Custom Fields
   * @description A boolean flag. If true, HTML tags will be stripped from custom field values.
   */
  plainTextCustomFields?: boolean;
  /**
   * Shareds
   * @description A list of user IDs or invited user emails to share the folder with.
   */
  shareds?: string[];
  /**
   * Title
   * @description The title for the new folder.
   */
  title?: string;
  /**
   * User Access Roles
   * @description A dictionary mapping user IDs to their access roles for this folder (e.g., 'Editor', 'Limited', 'Full', 'Owner'). The key is the user ID and the value is the access role name.
   */
  userAccessRoles?: {
      [key: string]: string;
  };
  /**
   * With Invitations
   * @description A boolean flag indicating whether to include invited (pending) users in the 'ownerIds' and 'sharedIds' lists in the response.
   */
  withInvitations?: boolean;
};

/**
 * Type of WRIKE's WRIKE_CREATE_FOLDER tool output.
 */
type WRIKE_CREATE_FOLDER_OUTPUT = {
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
 * Type of WRIKE's WRIKE_CREATE_GROUP tool input.
 */
type WRIKE_CREATE_GROUP_INPUT = {
  /**
   * Avatar  Color
   * @description The hex color code for the group's avatar background (e.g., '#FF0000' for red).
   */
  avatar__color?: string;
  /**
   * Avatar  Letters
   * @description Up to two characters to display as the group's avatar. For example, 'MT' for 'Marketing Team'.
   */
  avatar__letters?: string;
  /**
   * Members
   * @description List of Wrike user contact IDs to add as group members.
   */
  members?: string[];
  /**
   * Metadata
   * @description List of key-value metadata entries to associate with the group.
   */
  metadata?: {
      /**
       * Key
       * @description Key for the metadata entry (must be less than 50 characters).
       */
      key: string;
      /**
       * Value
       * @description Value for the metadata entry (must be less than 1000 characters). Use the string 'null' to remove an entry.
       */
      value: string;
  }[];
  /**
   * Parent
   * @description The contact ID of an existing group to set as the parent for this new group. If omitted, the group will be a top-level group.
   */
  parent?: string;
  /**
   * Title
   * @description The title or name of the new group.
   */
  title?: string;
};

/**
 * Type of WRIKE's WRIKE_CREATE_GROUP tool output.
 */
type WRIKE_CREATE_GROUP_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the newly created group.
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
 * Type of WRIKE's WRIKE_CREATE_INVITATION tool input.
 */
type WRIKE_CREATE_INVITATION_INPUT = {
  /**
   * Email
   * @description Email address of the user to invite.
   */
  email?: string;
  /**
   * External
   * @description Flags invited user as external. Cannot be used if `userTypeId` is specified. Can be combined with `role`.
   */
  external?: boolean;
  /**
   * First Name
   * @description First name of the invited user.
   */
  firstName?: string;
  /**
   * Last Name
   * @description Last name of the invited user.
   */
  lastName?: string;
  /**
   * Message
   * @description Custom message body for the invitation email (paid Wrike accounts only).
   */
  message?: string;
  /**
   * Role
   * @description Role for the invited user (e.g., 'Admin', 'Regular User', 'External User'). Cannot be used if `userTypeId` is specified. Can be combined with `external`.
   */
  role?: string;
  /**
   * Subject
   * @description Custom subject for the invitation email (paid Wrike accounts only).
   */
  subject?: string;
  /**
   * User Type Id
   * @description ID of the user type to assign (e.g., Admin, Regular User, External User). Cannot be used if `role` or `external` is specified.
   */
  userTypeId?: string;
};

/**
 * Type of WRIKE's WRIKE_CREATE_INVITATION tool output.
 */
type WRIKE_CREATE_INVITATION_OUTPUT = {
  /**
   * Data
   * @description Details of the created invitation, typically including the invitation ID and the email of the invitee.
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
 * Type of WRIKE's WRIKE_CREATE_TASK tool input.
 */
type WRIKE_CREATE_TASK_INPUT = {
  /**
   * Billing Type
   * @description Billing type for the task's timelogs.
   * @enum {string}
   */
  billingType?: "Billable" | "NonBillable" | "NonBillableAddToProjectReports";
  /**
   * Custom Fields
   * @description List of custom fields for the task. Each item requires `id` (custom field ID) and `value`. Refer to Wrike API documentation for value formatting based on type.
   */
  customFields?: Record<string, never>[];
  /**
   * Custom Item Type Id
   * @description Unique ID of a Custom Item Type to use as a template for the task; task inherits its properties.
   */
  customItemTypeId?: string;
  /**
   * Custom Status
   * @description Unique ID of a custom status for the task.
   */
  customStatus?: string;
  /**
   * Description
   * @description Detailed description of the task.
   */
  description?: string;
  /**
   * Fields
   * @description JSON string array specifying optional fields to include in the task details of the response.
   */
  fields?: string[];
  /**
   * Folder Id
   * @description Unique identifier of the folder where the task will be created.
   */
  folderId?: string;
  /**
   * Follow
   * @description If `True`, the creator automatically follows the task.
   */
  follow?: boolean;
  /**
   * Followers
   * @description List of user IDs to be added as task followers.
   */
  followers?: string[];
  /**
   * Importance
   * @description Importance level of the task.
   * @default Normal
   * @enum {string}
   */
  importance: "High" | "Low" | "Normal";
  /**
   * Metadata
   * @description List of key-value metadata pairs for the task. Each item requires 'key' and 'value'.
   */
  metadata?: {
      /**
       * Key
       * @description The key for the metadata item.
       */
      key: string;
      /**
       * Value
       * @description The value associated with the metadata key.
       */
      value: string;
  }[];
  /**
   * Parents
   * @description List of parent folder IDs for the task. Cannot include the recycleBinId.
   */
  parents?: string[];
  /**
   * Plain Text Custom Fields
   * @description If `True`, HTML tags will be stripped from custom field values before saving.
   */
  plainTextCustomFields?: boolean;
  /**
   * Priority After
   * @description ID of an existing task to place the new task after in the list.
   */
  priorityAfter?: string;
  /**
   * Priority Before
   * @description ID of an existing task to place the new task before in the list.
   */
  priorityBefore?: string;
  /**
   * Responsible Placeholders
   * @description List of placeholder IDs (Job Roles) to be assigned as responsible for the task.
   */
  responsiblePlaceholders?: string[];
  /**
   * Responsibles
   * @description List of user or invitation IDs to be assigned as responsible for the task.
   */
  responsibles?: string[];
  /**
   * Shareds
   * @description List of user or invitation IDs to share the task with; creator is auto-shared.
   */
  shareds?: string[];
  /**
   * Status
   * @description Status of the task. Note: This feature may not be available on the Team plan.
   * @default Active
   * @enum {string}
   */
  status: "Active" | "Cancelled" | "Completed" | "Deferred";
  /**
   * Super Tasks
   * @description List of task IDs to which this new task will be a subtask.
   */
  superTasks?: string[];
  /**
   * Title
   * @description Title of the task.
   */
  title?: string;
  /**
   * With Invitations
   * @description If `True`, include invited (unregistered) users in response's `shareds` and `responsibles`.
   */
  withInvitations?: boolean;
};

/**
 * Type of WRIKE's WRIKE_CREATE_TASK tool output.
 */
type WRIKE_CREATE_TASK_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the data of the created task. The structure of this dictionary depends on the fields requested and the task details.
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
 * Type of WRIKE's WRIKE_DELETE_CUSTOM_FIELD tool input.
 */
type WRIKE_DELETE_CUSTOM_FIELD_INPUT = {
  /**
   * Custom Field Id
   * @description The unique identifier of the custom field to be permanently deleted.
   */
  customFieldId?: string;
};

/**
 * Type of WRIKE's WRIKE_DELETE_CUSTOM_FIELD tool output.
 */
type WRIKE_DELETE_CUSTOM_FIELD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the response data from the delete operation, typically confirming success.
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
 * Type of WRIKE's WRIKE_DELETE_FOLDER tool input.
 */
type WRIKE_DELETE_FOLDER_INPUT = {
  /**
   * Folder Id
   * @description The unique identifier of the folder to be deleted.
   */
  folderId?: string;
};

/**
 * Type of WRIKE's WRIKE_DELETE_FOLDER tool output.
 */
type WRIKE_DELETE_FOLDER_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing data related to the outcome of the delete operation. This might include a confirmation or details of the deleted folder, though the specific structure can vary.
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
 * Type of WRIKE's WRIKE_DELETE_GROUP tool input.
 */
type WRIKE_DELETE_GROUP_INPUT = {
  /**
   * Group Id
   * @description The unique identifier of the group to be deleted.
   */
  groupId?: string;
};

/**
 * Type of WRIKE's WRIKE_DELETE_GROUP tool output.
 */
type WRIKE_DELETE_GROUP_OUTPUT = {
  /**
   * Data
   * @description Confirmation from the delete operation; typically an empty or minimal body upon successful deletion (e.g., 204 No Content).
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
 * Type of WRIKE's WRIKE_DELETE_INIVTATION tool input.
 */
type WRIKE_DELETE_INIVTATION_INPUT = {
  /**
   * Invitation Id
   * @description The unique identifier of the invitation to be deleted. This ID can be obtained when an invitation is created or by listing existing invitations.
   */
  invitationId?: string;
};

/**
 * Type of WRIKE's WRIKE_DELETE_INIVTATION tool output.
 */
type WRIKE_DELETE_INIVTATION_OUTPUT = {
  /**
   * Data
   * @description The response typically returns an empty body upon successful deletion, but this field is included for consistency with other API responses. It may contain a success message or be an empty dictionary.
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
 * Type of WRIKE's WRIKE_DELETE_TASK tool input.
 */
type WRIKE_DELETE_TASK_INPUT = {
  /**
   * Task Id
   * @description The unique identifier of the task to be deleted.
   */
  taskId?: string;
};

/**
 * Type of WRIKE's WRIKE_DELETE_TASK tool output.
 */
type WRIKE_DELETE_TASK_OUTPUT = {
  /**
   * Data
   * @description A dictionary that may contain information regarding the status of the deletion operation. The exact structure can vary.
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
 * Type of WRIKE's WRIKE_FETCH_ALL_TASKS tool input.
 */
type WRIKE_FETCH_ALL_TASKS_INPUT = {
  /**
   * Descendants
   * @description If true, tasks from all subfolders and subprojects are included. If false, only tasks from the specified folder/project are returned.
   * @default null
   */
  descendants: boolean | null;
  /**
   * DueDateFilter
   * @description Filter tasks by due date. Use 'equal' for an exact date match (yyyy-MM-dd), or 'start' and/or 'end' to define a date range (yyyy-MM-dd). If 'equal' is provided, 'start' and 'end' are ignored.
   * @default null
   */
  dueDate: {
      /**
       * End
       * @description End date for a due date range filter. Tasks due on or before this date will be included.
       * @default null
       */
      end: string | null;
      /**
       * Equal
       * @description Exact due date to filter tasks by. If provided, this overrides 'start' and 'end' date filters.
       * @default null
       */
      equal: string | null;
      /**
       * Start
       * @description Start date for a due date range filter. Tasks due on or after this date will be included.
       * @default null
       */
      start: string | null;
  } | null;
  /**
   * Fields
   * @description A list of field names to include for each task in the response. Author-related fields: 'responsibleIds' (assigned users), 'sharedIds' (users task is shared with), 'authorIds' (task creators), 'followerIds' (task followers). Other common fields: 'description', 'briefDescription', 'parentIds', 'superParentIds'. Custom fields can also be requested by their ID. If omitted, a default set of fields is returned. To include metadata in the response, add 'metadata' to this list.
   * @default null
   */
  fields: string[] | null;
  /**
   * Metadata
   * @description Filter tasks by metadata key-value pairs. Provide a dict of key-value pairs, e.g. {"department": "marketing", "region": "us"}. All pairs must match (AND logic).
   * @default null
   */
  metadata: {
      [key: string]: string;
  } | null;
  /**
   * Page Size
   * @description The number of tasks to return per page.
   * @default null
   */
  page_size: number | null;
  /**
   * Resolve User Names
   * @description If true, automatically adds all user-related fields (authorIds, responsibleIds, sharedIds, followerIds) to the request and resolves user IDs to include user names and details directly in each task.
   * @default true
   */
  resolve_user_names: boolean | null;
  /**
   * Status
   * @description Filter tasks by their status. Only tasks matching the specified status will be returned (e.g., Active, Completed).
   * @default null
   */
  status: string | null;
};

/**
 * Type of WRIKE's WRIKE_FETCH_ALL_TASKS tool output.
 */
type WRIKE_FETCH_ALL_TASKS_OUTPUT = {
  /**
   * Data
   * @description A list of task objects, where each object contains the details for a task according to the requested fields.
   */
  data?: {
      [key: string]: unknown;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Kind
   * @description Identifies the type of data in the response, typically 'tasks'.
   */
  kind?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of WRIKE's WRIKE_GET_ACCOUNT_INFORMATION tool input.
 */
type WRIKE_GET_ACCOUNT_INFORMATION_INPUT = {
  /**
   * Fields
   * @description Specifies field names to include in the response; if omitted, a default set of fields is returned.
   */
  fields?: string[];
};

/**
 * Type of WRIKE's WRIKE_GET_ACCOUNT_INFORMATION tool output.
 */
type WRIKE_GET_ACCOUNT_INFORMATION_OUTPUT = {
  /**
   * Data
   * @description Account data; its structure and included fields vary based on the 'fields' request parameter and account subscription level.
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
 * Type of WRIKE's WRIKE_GET_ALL_CUSTOM_FIELDS tool input.
 */
type WRIKE_GET_ALL_CUSTOM_FIELDS_INPUT = object;

/**
 * Type of WRIKE's WRIKE_GET_ALL_CUSTOM_FIELDS tool output.
 */
type WRIKE_GET_ALL_CUSTOM_FIELDS_OUTPUT = {
  /**
   * Data
   * @description The raw JSON response from the Wrike API. This dictionary typically includes a 'kind' key (e.g., 'customfields') and a 'data' key, where the 'data' key contains a list of custom field objects, each detailing a custom field's ID, title, type (e.g., Text, Dropdown, Numeric), and settings.
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
 * Type of WRIKE's WRIKE_GET_CONTACTS tool input.
 */
type WRIKE_GET_CONTACTS_INPUT = {
  /**
   * Deleted
   * @description Filter by deletion status: `true` for deleted, `false` or omitted (default) for active contacts.
   */
  deleted?: boolean;
  /**
   * Fields
   * @description List of contact fields to include (e.g., 'firstName', 'email'); defaults to a standard set if omitted.
   */
  fields?: string[];
  /**
   * Metadata
   * @description Filter by a dictionary of metadata key-value pairs; returns contacts matching all specified pairs.
   */
  metadata?: {
      [key: string]: unknown;
  };
};

/**
 * Type of WRIKE's WRIKE_GET_CONTACTS tool output.
 */
type WRIKE_GET_CONTACTS_OUTPUT = {
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
 * Type of WRIKE's WRIKE_GET_FOLDERS tool input.
 */
type WRIKE_GET_FOLDERS_INPUT = {
  /**
   * Contract Types
   * @description Filter folders by a list of contract type IDs.
   */
  contractTypes?: string[];
  /**
   * Custom Fields
   * @description Filter folders by custom field values. Provide a list of filters, each specifying the custom field ID and value, or ID, comparator, and value. Example: `[{"id": "IEAGAAAAKZ7A____", "value": "Value"}]`.
   */
  customFields?: Record<string, never>[];
  /**
   * Custom Item Types
   * @description Filter by a list of custom item type IDs. Standard types like 'project' or 'folder' IDs are not allowed.
   */
  customItemTypes?: string[];
  /**
   * Deleted
   * @description True to retrieve folders from the Recycle Bin; false or omitted to retrieve from Root.
   */
  deleted?: boolean;
  /**
   * Descendants
   * @description Include all descendant folders in the search scope; false to search only within the specified folder(s).
   * @default true
   */
  descendants: boolean;
  /**
   * Fields
   * @description List of optional fields to include in the response for each folder (Folders mode only).
   */
  fields?: string[];
  /**
   * Metadata
   * @description Filter folders based on their metadata. Provide a dictionary of metadata field names and their expected values.
   */
  metadata?: {
      [key: string]: unknown;
  };
  /**
   * Next Page Token
   * @description Pagination token from a previous response to retrieve the next page. All other filter parameters must match the initial request.
   */
  nextPageToken?: string;
  /**
   * Page Size
   * @description Maximum number of folders per page (1-1000). Only "folders" kind is supported for pagination.
   * @default 5
   */
  pageSize: number;
  /**
   * Permalink
   * @description Folder permalink for an exact match.
   */
  permalink?: string;
  /**
   * Plain Text Custom Fields
   * @description True to strip HTML tags from custom field values in the response.
   */
  plainTextCustomFields?: boolean;
  /**
   * Project
   * @description Filter by entity type: true for projects, false for folders. If omitted, both are returned.
   */
  project?: boolean;
  /**
   * Updated Date
   * @description Filter folders by their last updated date. Provide a dictionary with 'start', 'end', or 'equal' keys. Date format: yyyy-MM-dd'T'HH:mm:ss'Z' or yyyy-MM-dd'T'HH:mm:ssXXX.
   */
  updatedDate?: {
      [key: string]: unknown;
  };
  /**
   * With Invitations
   * @description Include invitations in the 'sharedIds' list of the response.
   */
  withInvitations?: boolean;
};

/**
 * Type of WRIKE's WRIKE_GET_FOLDERS tool output.
 */
type WRIKE_GET_FOLDERS_OUTPUT = {
  /**
   * Data
   * @description API response data, typically including a list of folders and pagination information.
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
 * Type of WRIKE's WRIKE_GET_INFORMATION_ABOUT_SPECIFIC_CONTACT tool input.
 */
type WRIKE_GET_INFORMATION_ABOUT_SPECIFIC_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description The unique identifier of the contact to retrieve information for.
   */
  contactId?: string;
  /**
   * Fields
   * @description Optional list of specific fields (e.g., `metadata`, `customFields`) to include; returns default fields if omitted.
   */
  fields?: string[];
};

/**
 * Type of WRIKE's WRIKE_GET_INFORMATION_ABOUT_SPECIFIC_CONTACT tool output.
 */
type WRIKE_GET_INFORMATION_ABOUT_SPECIFIC_CONTACT_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the information for the specified contact. The structure of this dictionary depends on the fields requested.
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
 * Type of WRIKE's WRIKE_GET_SPECIFIC_USER tool input.
 */
type WRIKE_GET_SPECIFIC_USER_INPUT = {
  /**
   * User Id
   * @description The unique identifier of the user whose details are to be retrieved.
   */
  userId?: string;
};

/**
 * Type of WRIKE's WRIKE_GET_SPECIFIC_USER tool output.
 */
type WRIKE_GET_SPECIFIC_USER_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the detailed information of the specified user.
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
 * Type of WRIKE's WRIKE_GET_TASK_BY_ID tool input.
 */
type WRIKE_GET_TASK_BY_ID_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of optional fields to include in the response (e.g., 'recurrence,customFields,attachmentCount'). If not provided, a default set of fields will be returned.
   */
  fields?: string;
  /**
   * Task Id
   * @description The unique identifier of the task to retrieve.
   */
  taskId?: string;
};

/**
 * Type of WRIKE's WRIKE_GET_TASK_BY_ID tool output.
 */
type WRIKE_GET_TASK_BY_ID_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the detailed information of the requested task.
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
 * Type of WRIKE's WRIKE_LAUNCH_FOLDER_BLUEPRINT_ASYNC tool input.
 */
type WRIKE_LAUNCH_FOLDER_BLUEPRINT_ASYNC_INPUT = {
  /**
   * Copy Attachments
   * @description If true, attachments from the blueprint will be copied. Defaults to true if not specified.
   */
  copy_attachments?: boolean;
  /**
   * Copy Custom Fields
   * @description If true, custom field values from the blueprint will be copied to the new tasks and folders. Defaults to true if not specified.
   */
  copy_custom_fields?: boolean;
  /**
   * Copy Descriptions
   * @description Specifies whether to copy descriptions from the blueprint's tasks and folders. If true, descriptions are copied; otherwise, they are left empty. Defaults to true if not specified.
   */
  copy_descriptions?: boolean;
  /**
   * Copy Responsibles
   * @description If true, responsible assignments from the blueprint will be copied to the new tasks. Defaults to true if not specified.
   */
  copy_responsibles?: boolean;
  /**
   * Entry Limit
   * @description The maximum number of tasks and folders that can be created from the blueprint. This limit must be between 1 and 250, inclusive. If the blueprint contains more items, the operation may fail or be partially completed.
   */
  entry_limit?: number;
  /**
   * Folder Blueprint Id
   * @description The unique identifier of the folder blueprint to be launched.
   */
  folder_blueprint_id?: string;
  /**
   * Notify Responsibles
   * @description If true, users assigned as responsibles for tasks in the blueprint will be notified. Defaults to true if not specified.
   */
  notify_responsibles?: boolean;
  /**
   * Parent
   * @description The unique identifier of the parent folder where the blueprint structure will be created.
   */
  parent?: string;
  /**
   * Reschedule Date
   * @description The new start date for all rescheduled tasks in the format YYYY-MM-DD. If provided, tasks will be rescheduled based on this date and the reschedule_mode.
   */
  reschedule_date?: string;
  /**
   * Reschedule Mode
   * @description Defines how tasks are rescheduled. Common modes might include shifting tasks relative to the reschedule_date or anchoring them. Consult Wrike API documentation for specific values. Examples: 'Preserve', 'Shift'.
   */
  reschedule_mode?: string;
  /**
   * Title
   * @description The title for the new root folder created from the blueprint.
   */
  title?: string;
  /**
   * Title Prefix
   * @description A prefix to be added to the titles of all tasks and folders copied from the blueprint. If not provided, original titles are used.
   */
  title_prefix?: string;
};

/**
 * Type of WRIKE's WRIKE_LAUNCH_FOLDER_BLUEPRINT_ASYNC tool output.
 */
type WRIKE_LAUNCH_FOLDER_BLUEPRINT_ASYNC_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the API response data upon successful asynchronous launch of the folder blueprint. This typically includes identifiers for the newly created entities or a task ID for tracking the asynchronous job.
       */
      response_data?: {
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
 * Type of WRIKE's WRIKE_LAUNCH_TASK_BLUEPRINT_ASYNC tool input.
 */
type WRIKE_LAUNCH_TASK_BLUEPRINT_ASYNC_INPUT = {
  /**
   * Copy Attachments
   * @description Copy attachments from blueprint tasks to new tasks.
   */
  copy_attachments?: boolean;
  /**
   * Copy Custom Fields
   * @description Copy custom field values from blueprint tasks to new tasks.
   */
  copy_custom_fields?: boolean;
  /**
   * Copy Descriptions
   * @description Copy blueprint task descriptions to new tasks; if false or omitted, new tasks will have empty descriptions.
   */
  copy_descriptions?: boolean;
  /**
   * Copy Responsibles
   * @description Assign users responsible for blueprint tasks to the newly created tasks.
   */
  copy_responsibles?: boolean;
  /**
   * Entry Limit
   * @description Maximum number of tasks/folders to copy from blueprint (1-250).
   */
  entry_limit?: number;
  /**
   * Notify Responsibles
   * @description Notify users responsible for blueprint tasks when new tasks are created.
   */
  notify_responsibles?: boolean;
  /**
   * Parent Id
   * @description ID of an existing parent folder/project for the new task(s); either this or `super_task_id` is required.
   */
  parent_id?: string;
  /**
   * Reschedule Date
   * @description Target date (yyyy-MM-dd) for rescheduling tasks; requires `reschedule_mode`.
   */
  reschedule_date?: string;
  /**
   * Reschedule Mode
   * @description How tasks are rescheduled if `reschedule_date` is set; valid values: `RescheduleStartDate`, `RescheduleFinishDate`.
   */
  reschedule_mode?: string;
  /**
   * Super Task Id
   * @description ID of an existing parent task for the new task(s); either this or `parent_id` is required.
   */
  super_task_id?: string;
  /**
   * Task Blueprint Id
   * @description Unique identifier of the task blueprint to launch.
   */
  task_blueprint_id?: string;
  /**
   * Title
   * @description Title for the root task created from the blueprint.
   */
  title?: string;
  /**
   * Title Prefix
   * @description Prefix for titles of all tasks created from this blueprint.
   */
  title_prefix?: string;
};

/**
 * Type of WRIKE's WRIKE_LAUNCH_TASK_BLUEPRINT_ASYNC tool output.
 */
type WRIKE_LAUNCH_TASK_BLUEPRINT_ASYNC_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description API response from the asynchronous blueprint launch, typically including a task ID for monitoring.
       */
      response_data?: {
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
 * Type of WRIKE's WRIKE_LIST_FOLDER_BLUEPRINTS tool input.
 */
type WRIKE_LIST_FOLDER_BLUEPRINTS_INPUT = object;

/**
 * Type of WRIKE's WRIKE_LIST_FOLDER_BLUEPRINTS tool output.
 */
type WRIKE_LIST_FOLDER_BLUEPRINTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from the Wrike API, detailing account-level Folder Blueprints and their attributes.
       */
      response_data?: {
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
 * Type of WRIKE's WRIKE_LIST_SPACE_FOLDER_BLUEPRINTS tool input.
 */
type WRIKE_LIST_SPACE_FOLDER_BLUEPRINTS_INPUT = {
  /**
   * Space Id
   * @description The unique identifier of the Wrike space from which to list folder blueprints.
   */
  space_id?: string;
};

/**
 * Type of WRIKE's WRIKE_LIST_SPACE_FOLDER_BLUEPRINTS tool output.
 */
type WRIKE_LIST_SPACE_FOLDER_BLUEPRINTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The API response, including a list of folder blueprints for the specified space.
       */
      response_data?: {
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
 * Type of WRIKE's WRIKE_LIST_SPACE_TASK_BLUEPRINTS tool input.
 */
type WRIKE_LIST_SPACE_TASK_BLUEPRINTS_INPUT = {
  /**
   * Limit
   * @description Maximum total number of task blueprints to return.
   * @default 1000
   */
  limit: number;
  /**
   * Next Page Token
   * @description Token from the previous page's response to retrieve the next page of results; if empty or omitted, fetches the first page.
   * @default
   */
  next_page_token: string;
  /**
   * Page Size
   * @description Number of task blueprints to return per page for pagination.
   * @default 100
   */
  page_size: number;
  /**
   * Space Id
   * @description Unique identifier of the Wrike space from which to list task blueprints.
   */
  space_id?: string;
};

/**
 * Type of WRIKE's WRIKE_LIST_SPACE_TASK_BLUEPRINTS tool output.
 */
type WRIKE_LIST_SPACE_TASK_BLUEPRINTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the API response. This typically includes a list of task blueprints found in the specified space and may contain a 'nextPageToken' for pagination if more results are available.
       */
      response_data?: {
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
 * Type of WRIKE's WRIKE_LIST_SUBFOLDERS_BY_FOLDER_ID tool input.
 */
type WRIKE_LIST_SUBFOLDERS_BY_FOLDER_ID_INPUT = {
  /**
   * Contract Types
   * @description Filters projects by contract type names; mainly used when `project` is true.
   */
  contractTypes?: string[];
  /**
   * Custom Fields
   * @description Filters folders by custom field values using a list of filter objects (e.g., `{'id': 'customFieldId', 'comparator': 'EqualTo', 'value': 'FieldValue'}`). Refer to Wrike API documentation for detailed structure.
   */
  customFields?: Record<string, never>[];
  /**
   * Custom Item Types
   * @description Filters by a list of custom item type IDs (standard types like 'Project' or 'Folder' are not applicable).
   */
  customItemTypes?: string[];
  /**
   * Descendants
   * @description Set to true to include all descendant subfolders; false for direct children only.
   * @default true
   */
  descendants: boolean;
  /**
   * Fields
   * @description Optional fields to include in the response for each folder (e.g., 'metadata', 'customFields').
   */
  fields?: string[];
  /**
   * Folder Id
   * @description ID of the parent folder.
   */
  folderId?: string;
  /**
   * Metadata
   * @description Filters folders by metadata using a dictionary of key-value pairs for exact match.
   */
  metadata?: {
      [key: string]: unknown;
  };
  /**
   * Next Page Token
   * @description Token from a previous response's `nextPageToken` field for pagination; other filters should match the initial request.
   */
  nextPageToken?: string;
  /**
   * Page Size
   * @description Maximum folders per page (API default e.g., 100, max 1000).
   */
  pageSize?: number;
  /**
   * Permalink
   * @description Permalink for an exact match search of the folder to fetch subfolders from.
   */
  permalink?: string;
  /**
   * Plain Text Custom Fields
   * @description If true, strips HTML tags from custom field values in the response.
   */
  plainTextCustomFields?: boolean;
  /**
   * Project
   * @description Set true for projects only, false for regular folders only; omit for both or API default.
   */
  project?: boolean;
  /**
   * Updated Date
   * @description Filters folders by last updated date using comparators (e.g., 'LessThan', 'EqualTo') or a date range ('start', 'end' keys). Dates: 'yyyy-MM-dd' or 'yyyy-MM-ddTHH:mm:ssZ'.
   */
  updatedDate?: {
      [key: string]: unknown;
  };
  /**
   * With Invitations
   * @description If true, includes invited (but not yet accepted) users in `sharedIds` of returned folders.
   */
  withInvitations?: boolean;
};

/**
 * Type of WRIKE's WRIKE_LIST_SUBFOLDERS_BY_FOLDER_ID tool output.
 */
type WRIKE_LIST_SUBFOLDERS_BY_FOLDER_ID_OUTPUT = {
  /**
   * Data
   * @description Complete JSON response from Wrike API, typically including `kind`, `data` (list of folder objects), and potentially `nextPageToken`.
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
 * Type of WRIKE's WRIKE_LIST_TASK_BLUEPRINTS tool input.
 */
type WRIKE_LIST_TASK_BLUEPRINTS_INPUT = {
  /**
   * Limit
   * @description The maximum number of Task Blueprints to be returned in the API response. The Wrike API enforces a maximum value of 1000 for this parameter. Default is 1000.
   * @default 1000
   */
  limit: number;
  /**
   * Next Page Token
   * @description An opaque token for fetching the next page of Task Blueprints. This token is obtained from the `nextPageToken` field in a previous API response. If omitted or empty, the first page is retrieved. Providing this token might cause the API to ignore other filter parameters.
   * @default
   */
  next_page_token: string;
  /**
   * Page Size
   * @description The number of Task Blueprints to include per page when paginating results. This parameter works in conjunction with `next_page_token`. Default is 100.
   * @default 100
   */
  page_size: number;
};

/**
 * Type of WRIKE's WRIKE_LIST_TASK_BLUEPRINTS tool output.
 */
type WRIKE_LIST_TASK_BLUEPRINTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary representing the raw JSON response from the Wrike API. It typically contains a 'kind' field (e.g., 'taskBlueprintList'), a 'data' field which is a list of Task Blueprint objects, and potentially a 'nextPageToken' field for pagination if more results are available.
       */
      response_data?: {
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
 * Type of WRIKE's WRIKE_MODIFY_ACCOUNT tool input.
 */
type WRIKE_MODIFY_ACCOUNT_INPUT = {
  /**
   * Metadata
   * @description A list of metadata key-value pairs to update or add to the account. Metadata entries are isolated on a per-client (application) basis. If an empty list is provided or the field is omitted, no metadata changes will occur.
   */
  metadata?: {
      /**
       * Key
       * @description The metadata key. Must be less than 50 characters and consist of alphanumeric characters, underscores, or hyphens (matches regex pattern: `^[A-Za-z0-9_-]+$`).
       */
      key: string;
      /**
       * Value
       * @description The metadata value. Must be a JSON-compatible string and less than 1000 characters. To remove an existing metadata entry, provide the JSON string `"null"` as its value.
       */
      value: string;
  }[];
};

/**
 * Type of WRIKE's WRIKE_MODIFY_ACCOUNT tool output.
 */
type WRIKE_MODIFY_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the account, including the updated metadata. The specific structure of the returned account data may vary based on the Wrike API version and account type.
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
 * Type of WRIKE's WRIKE_MODIFY_FOLDER tool input.
 */
type WRIKE_MODIFY_FOLDER_INPUT = {
  /**
   * Add Access Roles
   * @description User IDs mapped to Wrike access roles (e.g., 'Full', 'Editor', 'Limited', 'Read Only') to assign for this folder. Example: `{"KUAJ25LC": "Editor", "KUAJ25LD": "Full"}`.
   */
  addAccessRoles?: {
      [key: string]: string;
  };
  /**
   * Add Parents
   * @description Parent folder IDs to add. Must be from the same Wrike account and not be rootFolderId or recycleBinId.
   */
  addParents?: string[];
  /**
   * Add Shareds
   * @description A list of user IDs or invitation IDs with whom to share the folder.
   */
  addShareds?: string[];
  /**
   * Clear Custom Columns
   * @description Set to true to remove all custom field column associations from this folder.
   */
  clearCustomColumns?: boolean;
  /**
   * Convert To Custom Item Type
   * @description The ID of a Custom Item Type. If provided, the folder will be converted into a project of this specified custom item type.
   */
  convertToCustomItemType?: string;
  /**
   * Custom Columns
   * @description A list of custom field IDs to be displayed as columns for this folder in the Wrike interface.
   */
  customColumns?: string[];
  /**
   * Custom Fields
   * @description Custom fields to update or delete. Each object needs an 'id' and 'value'; pass the ID with a null value to clear.
   */
  customFields?: Record<string, never>[];
  /**
   * Description
   * @description The new description for the folder.
   */
  description?: string;
  /**
   * Fields
   * @description A list of optional field names to be included in the response model. Example: `["parentIds", "sharedIds", "customFields"]`.
   */
  fields?: string[];
  /**
   * Folder Id
   * @description Unique identifier of the folder to be modified.
   */
  folderId?: string;
  /**
   * Metadata
   * @description List of metadata entries (key-value pairs) to update for the folder.
   */
  metadata?: Record<string, never>[];
  /**
   * Plain Text Custom Fields
   * @description Set to true to strip any HTML tags from custom field values during the update operation, saving them as plain text.
   */
  plainTextCustomFields?: boolean;
  /**
   * Remove Access Roles
   * @description A list of user IDs whose specific access roles for this folder should be revoked.
   */
  removeAccessRoles?: string[];
  /**
   * Remove Parents
   * @description Parent folder IDs to remove. Must be from the same Wrike account and not be rootFolderId or recycleBinId.
   */
  removeParents?: string[];
  /**
   * Remove Shareds
   * @description A list of user IDs or invitation IDs from whom to unshare the folder.
   */
  removeShareds?: string[];
  /**
   * Restore
   * @description Set to true to restore the folder if it is currently in the Recycled Bin.
   */
  restore?: boolean;
  /**
   * Title
   * @description The new title for the folder.
   */
  title?: string;
  /**
   * With Invitations
   * @description Set to true to include pending invitations in the 'ownerIds' and 'sharedIds' lists within the response.
   */
  withInvitations?: boolean;
};

/**
 * Type of WRIKE's WRIKE_MODIFY_FOLDER tool output.
 */
type WRIKE_MODIFY_FOLDER_OUTPUT = {
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
 * Type of WRIKE's WRIKE_MODIFY_GROUP tool input.
 */
type WRIKE_MODIFY_GROUP_INPUT = {
  /**
   * Add Invitations
   * @description User IDs of invited users (pending Wrike invitation) to add to the group.
   */
  addInvitations?: string[];
  /**
   * Add Members
   * @description Wrike User IDs to add to the group. Users must exist.
   */
  addMembers?: string[];
  /**
   * Avatar  Color
   * @description New avatar background color (e.g., '#3AB795').
   */
  avatar__color?: string;
  /**
   * Avatar  Letters
   * @description New avatar letters for the group (max 2 chars, e.g., 'RD').
   */
  avatar__letters?: string;
  /**
   * Group Id
   * @description Unique ID of the group to modify.
   */
  groupId?: string;
  /**
   * Metadata
   * @description Custom metadata key-value pairs to update. Existing keys are updated, new ones added. To remove, set value to '"null"'.
   */
  metadata?: {
      /**
       * Key
       * @description Custom metadata key (max 50 chars).
       */
      key: string;
      /**
       * Value
       * @description Value for the metadata key (max 1000 chars); can be text, number, boolean, or stringified JSON. Use '"null"' to remove.
       */
      value: string;
  }[];
  /**
   * Parent
   * @description ID of an existing group to set as parent for hierarchical organization.
   */
  parent?: string;
  /**
   * Remove Invitations
   * @description User IDs of invited users to remove from the group.
   */
  removeInvitations?: string[];
  /**
   * Remove Members
   * @description Wrike User IDs to remove from the group.
   */
  removeMembers?: string[];
  /**
   * Title
   * @description New title for the group.
   */
  title?: string;
};

/**
 * Type of WRIKE's WRIKE_MODIFY_GROUP tool output.
 */
type WRIKE_MODIFY_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data of the updated group, reflecting all properties post-modification.
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
 * Type of WRIKE's WRIKE_MODIFY_TASK tool input.
 */
type WRIKE_MODIFY_TASK_INPUT = {
  /**
   * Add Followers
   * @description A list of user IDs to be added as followers to the task. Followers receive notifications about task updates.
   */
  addFollowers?: string[];
  /**
   * Add Parents
   * @description A list of folder IDs to which the task will be added (i.e., moved into). Cannot include the Recycle Bin folder ID.
   */
  addParents?: string[];
  /**
   * Add Responsible Placeholders
   * @description A list of placeholder IDs to be added to the task's placeholder assignee list. Placeholders represent roles or groups.
   */
  addResponsiblePlaceholders?: string[];
  /**
   * Add Responsibles
   * @description A list of user IDs or invitation IDs to be added to the task's assignee list.
   */
  addResponsibles?: string[];
  /**
   * Add Shareds
   * @description A list of user IDs or invitation IDs with whom the task will be shared.
   */
  addShareds?: string[];
  /**
   * Add Super Tasks
   * @description A list of task IDs that will become parent tasks to the current task, effectively making the current task a subtask of each specified task.
   */
  addSuperTasks?: string[];
  /**
   * Billing Type
   * @description Specifies the billing type for the task's timelogs.
   * @enum {string}
   */
  billingType?: "NonBillable" | "Billable" | "NonBillableAddToProjectReports";
  /**
   * Convert To Custom Item Type
   * @description The ID of a Custom Item Type to which this task should be converted. This changes the task's type and may alter its available custom fields and behavior.
   */
  convertToCustomItemType?: string;
  /**
   * Custom Fields
   * @description A list of custom field updates. Each object should specify the `id` of the custom field and its new `value`. To remove a custom field's value, set `value` to `null` (or an empty string for certain types). Example: `{"id": "customFieldId123", "value": "newValue"}`.
   */
  customFields?: Record<string, never>[];
  /**
   * Custom Status
   * @description The ID of the custom status to apply to the task. This is used when custom workflows are enabled in the Wrike account.
   */
  customStatus?: string;
  /**
   * Dates
   * @description A dictionary specifying the task's date-related attributes. Allowed keys include `type` (e.g., 'Planned', 'Actual'), `duration` (in minutes), `start` (YYYY-MM-DD), `due` (YYYY-MM-DD), and `workOnWeekends` (boolean).
   */
  dates?: {
      [key: string]: unknown;
  };
  /**
   * Description
   * @description The new detailed description for the task. Supports HTML formatting.
   */
  description?: string;
  /**
   * Fields
   * @description A list of optional field names to be included in the response object. Provide a list of strings, where each string is a valid field key. For example, `["recurrence", "responsibleIds"]`.
   */
  fields?: string[];
  /**
   * Follow
   * @description Set to `true` to make the current API user follow the task, or `false` to unfollow.
   */
  follow?: boolean;
  /**
   * Importance
   * @description The new importance level of the task.
   * @enum {string}
   */
  importance?: "High" | "Normal" | "Low";
  /**
   * Metadata
   * @description A list of metadata key-value pairs to update. Providing a `null` value for an existing key's `value` will remove that entry.
   */
  metadata?: {
      /**
       * Key
       * @description The key of the metadata entry. Must conform to the pattern: ^[A-Za-z0-9_-]+$.
       */
      key: string;
      /**
       * Value
       * @description The value associated with the metadata key.
       */
      value: string;
  }[];
  /**
   * Plain Text Custom Fields
   * @description Set to `true` to strip HTML tags from custom field values before saving. If `false`, HTML content is preserved. API defaults to `false` behavior if not provided.
   */
  plainTextCustomFields?: boolean;
  /**
   * Priority After
   * @description The ID of an existing task after which the current task should be placed in the task list, determining its priority. Mutually exclusive with `priorityBefore`.
   */
  priorityAfter?: string;
  /**
   * Priority Before
   * @description The ID of an existing task before which the current task should be placed in the task list, determining its priority. Mutually exclusive with `priorityAfter`.
   */
  priorityBefore?: string;
  /**
   * Remove Parents
   * @description A list of folder IDs from which the task will be removed. Cannot include the Recycle Bin folder ID.
   */
  removeParents?: string[];
  /**
   * Remove Responsible Placeholders
   * @description A list of placeholder IDs to be removed from the task's placeholder assignee list.
   */
  removeResponsiblePlaceholders?: string[];
  /**
   * Remove Responsibles
   * @description A list of user IDs or invitation IDs to be removed from the task's assignee list.
   */
  removeResponsibles?: string[];
  /**
   * Remove Shareds
   * @description A list of user IDs or invitation IDs from whom the task will be unshared.
   */
  removeShareds?: string[];
  /**
   * Remove Super Tasks
   * @description A list of task IDs from which the current task will be removed as a subtask.
   */
  removeSuperTasks?: string[];
  /**
   * Restore
   * @description Set to `true` to restore the task if it is currently in the Recycle Bin.
   */
  restore?: boolean;
  /**
   * Status
   * @description The new status of the task. This field is not available for accounts on the Team plan.
   * @enum {string}
   */
  status?: "Active" | "Completed" | "Deferred" | "Cancelled";
  /**
   * Task Id
   * @description The unique identifier of the task to be modified.
   */
  taskId?: string;
  /**
   * Title
   * @description The new title for the task.
   */
  title?: string;
  /**
   * With Invitations
   * @description Set to `true` to include pending invitations in the `sharedIds` and `responsibleIds` fields within the response data. Default is `false`.
   */
  withInvitations?: boolean;
};

/**
 * Type of WRIKE's WRIKE_MODIFY_TASK tool output.
 */
type WRIKE_MODIFY_TASK_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the updated task object, reflecting the changes made. The specific fields returned can be controlled using the `fields` parameter in the request.
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
 * Type of WRIKE's WRIKE_QUERY_CUSTOMFIELDS tool input.
 */
type WRIKE_QUERY_CUSTOMFIELDS_INPUT = {
  /**
   * Custom Field Id
   * @description Unique identifier of the custom field.
   */
  customFieldId?: string;
};

/**
 * Type of WRIKE's WRIKE_QUERY_CUSTOMFIELDS tool output.
 */
type WRIKE_QUERY_CUSTOMFIELDS_OUTPUT = {
  /**
   * Data
   * @description Detailed information of the retrieved custom field, including its properties, configuration, and metadata.
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
 * Type of WRIKE's WRIKE_QUERY_INVITATIONS tool input.
 */
type WRIKE_QUERY_INVITATIONS_INPUT = object;

/**
 * Type of WRIKE's WRIKE_QUERY_INVITATIONS tool output.
 */
type WRIKE_QUERY_INVITATIONS_OUTPUT = {
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
 * Type of WRIKE's WRIKE_QUERY_SPECIFIC_GROUP tool input.
 */
type WRIKE_QUERY_SPECIFIC_GROUP_INPUT = {
  /**
   * Fields
   * @description Specifies a list of optional fields to be included in the response. The only valid value to pass in the list is 'metadata', which will include group metadata. If omitted or an empty list is provided, a default representation of the group is returned.
   */
  fields?: string[];
  /**
   * Group Id
   * @description The unique identifier of the Wrike group whose details are to be retrieved.
   */
  groupId?: string;
};

/**
 * Type of WRIKE's WRIKE_QUERY_SPECIFIC_GROUP tool output.
 */
type WRIKE_QUERY_SPECIFIC_GROUP_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the detailed information of the queried group. The structure and content of this dictionary depend on the group's attributes and the 'fields' parameter specified in the request (if any).
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
 * Type of WRIKE's WRIKE_QUERY_WORKFLOWS tool input.
 */
type WRIKE_QUERY_WORKFLOWS_INPUT = object;

/**
 * Type of WRIKE's WRIKE_QUERY_WORKFLOWS tool output.
 */
type WRIKE_QUERY_WORKFLOWS_OUTPUT = {
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
 * Type of WRIKE's WRIKE_RETRIEVE_LIST_OF_GROUPS tool input.
 */
type WRIKE_RETRIEVE_LIST_OF_GROUPS_INPUT = {
  /**
   * Fields
   * @description Optional fields to include per group; only 'metadata' (custom key-value pairs) is currently supported. Default fields are returned if omitted.
   */
  fields?: string[];
  /**
   * Metadata
   * @description Filters groups by exact match on custom metadata; keys are field IDs/names, values are expected metadata.
   */
  metadata?: {
      [key: string]: unknown;
  };
  /**
   * Page Size
   * @description Maximum group entries per page for pagination; API default applies if omitted.
   */
  pageSize?: number;
  /**
   * Page Token
   * @description Token from a previous response's 'nextPageToken' to get the next page; typically overrides other query parameters.
   */
  pageToken?: string;
};

/**
 * Type of WRIKE's WRIKE_RETRIEVE_LIST_OF_GROUPS tool output.
 */
type WRIKE_RETRIEVE_LIST_OF_GROUPS_OUTPUT = {
  /**
   * Data
   * @description Complete JSON response body, typically including 'kind' (e.g., 'groups'), 'data' (list of group objects), and 'nextPageToken' for pagination.
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
 * Type of WRIKE's WRIKE_UPDATE_CUSTOM_FIELD_BY_ID tool input.
 */
type WRIKE_UPDATE_CUSTOM_FIELD_BY_ID_INPUT = {
  /**
   * Add Mirrors
   * @description List of custom field IDs to add as mirrors. Applicable only to 'LinkToDatabase' custom fields.
   */
  addMirrors?: string[];
  /**
   * Add Shareds
   * @description Obsolete: Use the `sharing` parameter instead.
   */
  addShareds?: string[];
  /**
   * Change Scope
   * @description Specifies if the custom field's scope should change. Use 'AccountToSpace' (requires `spaceId`) to convert an account-level field to space-level, or 'SpaceToAccount' to convert a space-level field to account-level.
   */
  changeScope?: string;
  /**
   * Custom Field Id
   * @description Identifier of the custom field to be updated.
   */
  customFieldId?: string;
  /**
   * Remove Mirrors
   * @description List of custom field IDs to remove as mirrors. Applicable only to 'LinkToDatabase' custom fields.
   */
  removeMirrors?: string[];
  /**
   * Remove Shareds
   * @description Obsolete: Use the `sharing` parameter instead.
   */
  removeShareds?: string[];
  /**
   * Settings
   * @description Settings specific to the custom field type, e.g., list values for 'DropDown', decimal places for 'Numeric'. Structure varies by 'type'.
   */
  settings?: {
      [key: string]: unknown;
  };
  /**
   * Sharing
   * @description Defines access settings, superseding `addShareds` and `removeShareds`. Expected format is an array of objects, e.g., `[{"accessorId": "ID", "accessType": "ReadOnly | ReadWrite"}]`.
   */
  sharing?: {
      [key: string]: unknown;
  };
  /**
   * Space Id
   * @description ID of the Space. Required if `changeScope` is 'AccountToSpace' or when changing a space-level custom field's space association.
   */
  spaceId?: string;
  /**
   * Title
   * @description New title for the custom field.
   */
  title?: string;
  /**
   * Type
   * @description New type for the custom field. Changing this can affect existing data.
   */
  type?: string;
};

/**
 * Type of WRIKE's WRIKE_UPDATE_CUSTOM_FIELD_BY_ID tool output.
 */
type WRIKE_UPDATE_CUSTOM_FIELD_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Details of the updated custom field.
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
 * Type of WRIKE's WRIKE_UPDATE_INVITATION tool input.
 */
type WRIKE_UPDATE_INVITATION_INPUT = {
  /**
   * External
   * @description [DEPRECATED] Marks user as external; prefer 'userTypeId'. Requires 'role' to be 'User'. Mutually exclusive with 'userTypeId'.
   */
  external?: boolean;
  /**
   * Invitation Id
   * @description Unique identifier of the invitation to modify.
   */
  invitationId?: string;
  /**
   * Resend
   * @description Resends the invitation email if true.
   */
  resend?: boolean;
  /**
   * Role
   * @description [DEPRECATED] User's role (e.g., 'User', 'Collaborator'); prefer 'userTypeId'. Mutually exclusive with 'userTypeId'.
   * @enum {string}
   */
  role?: "Collaborator" | "User";
  /**
   * User Type Id
   * @description User type ID determining role/permissions. Recommended; mutually exclusive with 'role'/'external'.
   */
  userTypeId?: string;
};

/**
 * Type of WRIKE's WRIKE_UPDATE_INVITATION tool output.
 */
type WRIKE_UPDATE_INVITATION_OUTPUT = {
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
 * Type of WRIKE's WRIKE_UPDATE_METADATA_ON_SPECIFIC_CONTACT tool input.
 */
type WRIKE_UPDATE_METADATA_ON_SPECIFIC_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description Unique identifier of the contact to update.
   */
  contactId?: string;
  /**
   * Custom Fields
   * @description List of custom field updates. Each item should specify the custom field and its new value. Providing a null value might remove the custom field, depending on API behavior.
   */
  customFields?: Record<string, never>[];
  /**
   * Fields
   * @description Optional list of field names to include in the response. If provided, only these fields will be returned.
   */
  fields?: string[];
  /**
   * Job Role Id
   * @description Unique identifier of the job role to assign, which updates the contact's current role.
   */
  jobRoleId?: string;
  /**
   * Metadata
   * @description List of metadata key-value pairs to update. Users typically have read/write access to their own metadata; other entries may be read-only.
   */
  metadata?: {
      /**
       * Key
       * @description Key of the metadata item.
       */
      key?: string;
      /**
       * Value
       * @description Value for the metadata key.
       */
      value?: string;
  }[];
};

/**
 * Type of WRIKE's WRIKE_UPDATE_METADATA_ON_SPECIFIC_CONTACT tool output.
 */
type WRIKE_UPDATE_METADATA_ON_SPECIFIC_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data of the updated contact. Specific fields returned depend on the request, particularly the `fields` parameter.
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
 * Type of WRIKE's WRIKE_UPDATE_SPECIFIC_USER tool input.
 */
type WRIKE_UPDATE_SPECIFIC_USER_INPUT = {
  /**
   * Profile  Account Id
   * @description Unique identifier of the account to associate with the user's profile.
   */
  profile__accountId?: string;
  /**
   * Profile  External
   * @description Indicates if the user is an external user.
   */
  profile__external?: boolean;
  /**
   * Profile  Role
   * @description Role to assign to the user's profile.
   */
  profile__role?: string;
  /**
   * User Id
   * @description Unique identifier for the user whose profile is to be updated.
   */
  userId?: string;
};

/**
 * Type of WRIKE's WRIKE_UPDATE_SPECIFIC_USER tool output.
 */
type WRIKE_UPDATE_SPECIFIC_USER_OUTPUT = {
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
 * Type map of all available tool input types for toolkit "WRIKE".
 */
export type WRIKE_TOOL_INPUTS = {
  BULK_MODIFY_GROUPS: WRIKE_BULK_MODIFY_GROUPS_INPUT
  CREATE_FOLDER: WRIKE_CREATE_FOLDER_INPUT
  CREATE_GROUP: WRIKE_CREATE_GROUP_INPUT
  CREATE_INVITATION: WRIKE_CREATE_INVITATION_INPUT
  CREATE_TASK: WRIKE_CREATE_TASK_INPUT
  DELETE_CUSTOM_FIELD: WRIKE_DELETE_CUSTOM_FIELD_INPUT
  DELETE_FOLDER: WRIKE_DELETE_FOLDER_INPUT
  DELETE_GROUP: WRIKE_DELETE_GROUP_INPUT
  DELETE_INIVTATION: WRIKE_DELETE_INIVTATION_INPUT
  DELETE_TASK: WRIKE_DELETE_TASK_INPUT
  FETCH_ALL_TASKS: WRIKE_FETCH_ALL_TASKS_INPUT
  GET_ACCOUNT_INFORMATION: WRIKE_GET_ACCOUNT_INFORMATION_INPUT
  GET_ALL_CUSTOM_FIELDS: WRIKE_GET_ALL_CUSTOM_FIELDS_INPUT
  GET_CONTACTS: WRIKE_GET_CONTACTS_INPUT
  GET_FOLDERS: WRIKE_GET_FOLDERS_INPUT
  GET_INFORMATION_ABOUT_SPECIFIC_CONTACT: WRIKE_GET_INFORMATION_ABOUT_SPECIFIC_CONTACT_INPUT
  GET_SPECIFIC_USER: WRIKE_GET_SPECIFIC_USER_INPUT
  GET_TASK_BY_ID: WRIKE_GET_TASK_BY_ID_INPUT
  LAUNCH_FOLDER_BLUEPRINT_ASYNC: WRIKE_LAUNCH_FOLDER_BLUEPRINT_ASYNC_INPUT
  LAUNCH_TASK_BLUEPRINT_ASYNC: WRIKE_LAUNCH_TASK_BLUEPRINT_ASYNC_INPUT
  LIST_FOLDER_BLUEPRINTS: WRIKE_LIST_FOLDER_BLUEPRINTS_INPUT
  LIST_SPACE_FOLDER_BLUEPRINTS: WRIKE_LIST_SPACE_FOLDER_BLUEPRINTS_INPUT
  LIST_SPACE_TASK_BLUEPRINTS: WRIKE_LIST_SPACE_TASK_BLUEPRINTS_INPUT
  LIST_SUBFOLDERS_BY_FOLDER_ID: WRIKE_LIST_SUBFOLDERS_BY_FOLDER_ID_INPUT
  LIST_TASK_BLUEPRINTS: WRIKE_LIST_TASK_BLUEPRINTS_INPUT
  MODIFY_ACCOUNT: WRIKE_MODIFY_ACCOUNT_INPUT
  MODIFY_FOLDER: WRIKE_MODIFY_FOLDER_INPUT
  MODIFY_GROUP: WRIKE_MODIFY_GROUP_INPUT
  MODIFY_TASK: WRIKE_MODIFY_TASK_INPUT
  QUERY_CUSTOMFIELDS: WRIKE_QUERY_CUSTOMFIELDS_INPUT
  QUERY_INVITATIONS: WRIKE_QUERY_INVITATIONS_INPUT
  QUERY_SPECIFIC_GROUP: WRIKE_QUERY_SPECIFIC_GROUP_INPUT
  QUERY_WORKFLOWS: WRIKE_QUERY_WORKFLOWS_INPUT
  RETRIEVE_LIST_OF_GROUPS: WRIKE_RETRIEVE_LIST_OF_GROUPS_INPUT
  UPDATE_CUSTOM_FIELD_BY_ID: WRIKE_UPDATE_CUSTOM_FIELD_BY_ID_INPUT
  UPDATE_INVITATION: WRIKE_UPDATE_INVITATION_INPUT
  UPDATE_METADATA_ON_SPECIFIC_CONTACT: WRIKE_UPDATE_METADATA_ON_SPECIFIC_CONTACT_INPUT
  UPDATE_SPECIFIC_USER: WRIKE_UPDATE_SPECIFIC_USER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "WRIKE".
 */
export type WRIKE_TOOL_OUTPUTS = {
  BULK_MODIFY_GROUPS: WRIKE_BULK_MODIFY_GROUPS_OUTPUT
  CREATE_FOLDER: WRIKE_CREATE_FOLDER_OUTPUT
  CREATE_GROUP: WRIKE_CREATE_GROUP_OUTPUT
  CREATE_INVITATION: WRIKE_CREATE_INVITATION_OUTPUT
  CREATE_TASK: WRIKE_CREATE_TASK_OUTPUT
  DELETE_CUSTOM_FIELD: WRIKE_DELETE_CUSTOM_FIELD_OUTPUT
  DELETE_FOLDER: WRIKE_DELETE_FOLDER_OUTPUT
  DELETE_GROUP: WRIKE_DELETE_GROUP_OUTPUT
  DELETE_INIVTATION: WRIKE_DELETE_INIVTATION_OUTPUT
  DELETE_TASK: WRIKE_DELETE_TASK_OUTPUT
  FETCH_ALL_TASKS: WRIKE_FETCH_ALL_TASKS_OUTPUT
  GET_ACCOUNT_INFORMATION: WRIKE_GET_ACCOUNT_INFORMATION_OUTPUT
  GET_ALL_CUSTOM_FIELDS: WRIKE_GET_ALL_CUSTOM_FIELDS_OUTPUT
  GET_CONTACTS: WRIKE_GET_CONTACTS_OUTPUT
  GET_FOLDERS: WRIKE_GET_FOLDERS_OUTPUT
  GET_INFORMATION_ABOUT_SPECIFIC_CONTACT: WRIKE_GET_INFORMATION_ABOUT_SPECIFIC_CONTACT_OUTPUT
  GET_SPECIFIC_USER: WRIKE_GET_SPECIFIC_USER_OUTPUT
  GET_TASK_BY_ID: WRIKE_GET_TASK_BY_ID_OUTPUT
  LAUNCH_FOLDER_BLUEPRINT_ASYNC: WRIKE_LAUNCH_FOLDER_BLUEPRINT_ASYNC_OUTPUT
  LAUNCH_TASK_BLUEPRINT_ASYNC: WRIKE_LAUNCH_TASK_BLUEPRINT_ASYNC_OUTPUT
  LIST_FOLDER_BLUEPRINTS: WRIKE_LIST_FOLDER_BLUEPRINTS_OUTPUT
  LIST_SPACE_FOLDER_BLUEPRINTS: WRIKE_LIST_SPACE_FOLDER_BLUEPRINTS_OUTPUT
  LIST_SPACE_TASK_BLUEPRINTS: WRIKE_LIST_SPACE_TASK_BLUEPRINTS_OUTPUT
  LIST_SUBFOLDERS_BY_FOLDER_ID: WRIKE_LIST_SUBFOLDERS_BY_FOLDER_ID_OUTPUT
  LIST_TASK_BLUEPRINTS: WRIKE_LIST_TASK_BLUEPRINTS_OUTPUT
  MODIFY_ACCOUNT: WRIKE_MODIFY_ACCOUNT_OUTPUT
  MODIFY_FOLDER: WRIKE_MODIFY_FOLDER_OUTPUT
  MODIFY_GROUP: WRIKE_MODIFY_GROUP_OUTPUT
  MODIFY_TASK: WRIKE_MODIFY_TASK_OUTPUT
  QUERY_CUSTOMFIELDS: WRIKE_QUERY_CUSTOMFIELDS_OUTPUT
  QUERY_INVITATIONS: WRIKE_QUERY_INVITATIONS_OUTPUT
  QUERY_SPECIFIC_GROUP: WRIKE_QUERY_SPECIFIC_GROUP_OUTPUT
  QUERY_WORKFLOWS: WRIKE_QUERY_WORKFLOWS_OUTPUT
  RETRIEVE_LIST_OF_GROUPS: WRIKE_RETRIEVE_LIST_OF_GROUPS_OUTPUT
  UPDATE_CUSTOM_FIELD_BY_ID: WRIKE_UPDATE_CUSTOM_FIELD_BY_ID_OUTPUT
  UPDATE_INVITATION: WRIKE_UPDATE_INVITATION_OUTPUT
  UPDATE_METADATA_ON_SPECIFIC_CONTACT: WRIKE_UPDATE_METADATA_ON_SPECIFIC_CONTACT_OUTPUT
  UPDATE_SPECIFIC_USER: WRIKE_UPDATE_SPECIFIC_USER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's WRIKE toolkit.
 */
export const WRIKE = {
  slug: "wrike",
  tools: {
    /**
     * Adds or removes members for multiple wrike groups in a single request; all specified user ids must correspond to existing wrike users.
     */
    BULK_MODIFY_GROUPS: "WRIKE_BULK_MODIFY_GROUPS",
    /**
     * Creates a new wrike subfolder within the specified `folderid`, optionally as a project if `customitemtypeid` is given; the folder is auto-shared with its creator.
     */
    CREATE_FOLDER: "WRIKE_CREATE_FOLDER",
    /**
     * Creates a new user group in wrike with a specified title, optionally setting members, parent group, avatar, and custom metadata.
     */
    CREATE_GROUP: "WRIKE_CREATE_GROUP",
    /**
     * Invites a user to a wrike workspace by email, optionally with name, specifying either `usertypeid` or a combination of `role`/`external`; custom email subject/message available for paid accounts.
     */
    CREATE_INVITATION: "WRIKE_CREATE_INVITATION",
    /**
     * Creates a new task in a specified wrike folder; if setting priority with `prioritybefore` or `priorityafter`, the referenced task must be in the same folder or project.
     */
    CREATE_TASK: "WRIKE_CREATE_TASK",
    /**
     * Permanently deletes a custom field by its id; this action is irreversible and requires a valid, existing custom field id.
     */
    DELETE_CUSTOM_FIELD: "WRIKE_DELETE_CUSTOM_FIELD",
    /**
     * Permanently deletes the folder specified by `folderid` and all its contents (e.g., tasks, documents, subfolders) from the wrike workspace; this irreversible action is for when the folder is no longer needed and has no active tasks or dependencies that would block deletion.
     */
    DELETE_FOLDER: "WRIKE_DELETE_FOLDER",
    /**
     * Permanently deletes a group by its `groupid`; this action is irreversible and does not affect user accounts that were members of the group.
     */
    DELETE_GROUP: "WRIKE_DELETE_GROUP",
    /**
     * Permanently deletes an existing invitation, specified by its unique `invitationid`; this action cannot be undone.
     */
    DELETE_INIVTATION: "WRIKE_DELETE_INIVTATION",
    /**
     * Permanently deletes a wrike task and all its associated data by its id; this action is irreversible and the task must exist.
     */
    DELETE_TASK: "WRIKE_DELETE_TASK",
    /**
     * Fetches tasks from a wrike account, allowing filtering by status, due date, and subfolder inclusion, with customizable response fields and pagination.
     */
    FETCH_ALL_TASKS: "WRIKE_FETCH_ALL_TASKS",
    /**
     * Retrieves detailed wrike account information, where the response content is influenced by selected fields, account subscription, and user permissions.
     */
    GET_ACCOUNT_INFORMATION: "WRIKE_GET_ACCOUNT_INFORMATION",
    /**
     * Retrieves all custom field definitions (including id, name, type, and settings) from the wrike account; this returns the definitions themselves, not their specific values on wrike items, and is useful for obtaining custom field ids.
     */
    GET_ALL_CUSTOM_FIELDS: "WRIKE_GET_ALL_CUSTOM_FIELDS",
    /**
     * Retrieves a list of wrike contacts (e.g., team members, clients, collaborators); response includes contact details but not their detailed task or project involvement.
     */
    GET_CONTACTS: "WRIKE_GET_CONTACTS",
    /**
     * Retrieves folders and/or projects from wrike, with filters; when using `nextpagetoken`, all other filter parameters must match the initial request.
     */
    GET_FOLDERS: "WRIKE_GET_FOLDERS",
    /**
     * Retrieves detailed information for a specific wrike contact using their unique `contactid`, optionally including `metadata` and `customfields` if specified in the `fields` parameter.
     */
    GET_INFORMATION_ABOUT_SPECIFIC_CONTACT: "WRIKE_GET_INFORMATION_ABOUT_SPECIFIC_CONTACT",
    /**
     * Retrieves detailed information about a specific user in wrike using their unique user id.
     */
    GET_SPECIFIC_USER: "WRIKE_GET_SPECIFIC_USER",
    /**
     * Retrieves read-only detailed information for a specific wrike task by its unique id, optionally allowing specification of fields to include in the response.
     */
    GET_TASK_BY_ID: "WRIKE_GET_TASK_BY_ID",
    /**
     * Asynchronously launches a new project or folder structure in wrike from a specified folder blueprint, typically returning a task id to track progress.
     */
    LAUNCH_FOLDER_BLUEPRINT_ASYNC: "WRIKE_LAUNCH_FOLDER_BLUEPRINT_ASYNC",
    /**
     * Asynchronously launches a wrike task blueprint to create tasks/projects, requiring either `super task id` (parent task) or `parent id` (parent folder/project) for placement.
     */
    LAUNCH_TASK_BLUEPRINT_ASYNC: "WRIKE_LAUNCH_TASK_BLUEPRINT_ASYNC",
    /**
     * Retrieves all account-level folder blueprints, which are templates for standardizing folder/project creation with predefined structures, custom fields, and workflows.
     */
    LIST_FOLDER_BLUEPRINTS: "WRIKE_LIST_FOLDER_BLUEPRINTS",
    /**
     * Lists all folder blueprints (templates for new folders/projects) within a specified wrike space, requiring a valid and accessible space id.
     */
    LIST_SPACE_FOLDER_BLUEPRINTS: "WRIKE_LIST_SPACE_FOLDER_BLUEPRINTS",
    /**
     * Lists task blueprints (templates for creating tasks with consistent structures) available in a specific, accessible wrike space.
     */
    LIST_SPACE_TASK_BLUEPRINTS: "WRIKE_LIST_SPACE_TASK_BLUEPRINTS",
    /**
     * Lists subfolders (metadata only, not their contents) for an existing wrike folder specified by `folderid`, supporting recursive descent, filtering, and pagination.
     */
    LIST_SUBFOLDERS_BY_FOLDER_ID: "WRIKE_LIST_SUBFOLDERS_BY_FOLDER_ID",
    /**
     * Retrieves a list of defined task blueprints (predefined task templates) from the wrike account, supporting pagination.
     */
    LIST_TASK_BLUEPRINTS: "WRIKE_LIST_TASK_BLUEPRINTS",
    /**
     * Updates or adds custom key-value metadata to the wrike account, useful for integrations, storing app-specific data, or mapping external system identifiers.
     */
    MODIFY_ACCOUNT: "WRIKE_MODIFY_ACCOUNT",
    /**
     * Modifies an existing wrike folder: updates title, description, parents (not root/recycle bin), sharing, metadata, custom fields/columns; restores, converts to project, or manages access roles.
     */
    MODIFY_FOLDER: "WRIKE_MODIFY_FOLDER",
    /**
     * Updates an existing wrike user group's attributes like title, members, parent, avatar, or metadata, using its `groupid` and specifying only the fields to change.
     */
    MODIFY_GROUP: "WRIKE_MODIFY_GROUP",
    /**
     * Modifies an existing wrike task by its id, allowing updates to attributes such as title, status, dates, assignees, and custom fields; `prioritybefore` and `priorityafter` are mutually exclusive, and parent folder ids for `addparents`/`removeparents` cannot be the recycle bin.
     */
    MODIFY_TASK: "WRIKE_MODIFY_TASK",
    /**
     * Retrieves a wrike custom field's detailed information (e.g., type, possible values for dropdowns), properties, and metadata; the `customfieldid` must correspond to an existing custom field.
     */
    QUERY_CUSTOMFIELDS: "WRIKE_QUERY_CUSTOMFIELDS",
    /**
     * Retrieves all active invitations in wrike, useful for viewing and auditing pending invitations or managing user onboarding.
     */
    QUERY_INVITATIONS: "WRIKE_QUERY_INVITATIONS",
    /**
     * Retrieves detailed information for a specific wrike group using its `groupid`, optionally including 'metadata'.
     */
    QUERY_SPECIFIC_GROUP: "WRIKE_QUERY_SPECIFIC_GROUP",
    /**
     * Fetches a list of all workflows with their detailed information from the wrike account; this is a read-only action and does not support pagination or filtering through its parameters.
     */
    QUERY_WORKFLOWS: "WRIKE_QUERY_WORKFLOWS",
    /**
     * Retrieves a list of user groups from the wrike account, supporting metadata filtering, pagination, and inclusion of specific fields; this is a read-only operation.
     */
    RETRIEVE_LIST_OF_GROUPS: "WRIKE_RETRIEVE_LIST_OF_GROUPS",
    /**
     * Updates properties of an existing wrike custom field by its id, such as its title, type, scope, or sharing settings.
     */
    UPDATE_CUSTOM_FIELD_BY_ID: "WRIKE_UPDATE_CUSTOM_FIELD_BY_ID",
    /**
     * Updates a pending wrike invitation (`invitationid`) to resend it or change user's role/type (use `usertypeid` over deprecated `role`/`external`).
     */
    UPDATE_INVITATION: "WRIKE_UPDATE_INVITATION",
    /**
     * Updates metadata, job role, or custom fields for an existing wrike contact specified by `contactid`; if `jobroleid` is provided, it must be a valid id.
     */
    UPDATE_METADATA_ON_SPECIFIC_CONTACT: "WRIKE_UPDATE_METADATA_ON_SPECIFIC_CONTACT",
    /**
     * Updates specified profile attributes (e.g., account id, role, external status) for an existing wrike user; unspecified fields remain unchanged.
     */
    UPDATE_SPECIFIC_USER: "WRIKE_UPDATE_SPECIFIC_USER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "WRIKE".
 */
export type WRIKE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "WRIKE".
 */
export type WRIKE_TRIGGER_EVENTS = {}
