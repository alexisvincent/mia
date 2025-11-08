// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MAGNETIC's MAGNETIC_CLIENTS_GET_CURRENT_FOLLOWUPS tool input.
 */
type MAGNETIC_CLIENTS_GET_CURRENT_FOLLOWUPS_INPUT = object;

/**
 * Type of MAGNETIC's MAGNETIC_CLIENTS_GET_CURRENT_FOLLOWUPS tool output.
 */
type MAGNETIC_CLIENTS_GET_CURRENT_FOLLOWUPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Follow Ups
       * @description List of upcoming follow-ups assigned to the user.
       */
      followUps: {
          /**
           * Assigned To
           * @description Name of the user assigned to the follow-up.
           */
          assignedTo: string;
          /**
           * Assigned To Id
           * @description ID of the user assigned to the follow-up.
           */
          assignedToId: number;
          /**
           * Client Id
           * @description ID of the client.
           */
          clientId: number;
          /**
           * Client Name
           * @description Name of the client.
           */
          clientName: string;
          /**
           * Comment
           * @description Additional notes or comments.
           */
          comment: string;
          /**
           * Followup Date
           * @description Date/time of the follow-up in ISO 8601 format.
           */
          followupDate: string;
          /**
           * Followup Id
           * @description ID of the follow-up.
           */
          followupId: number;
          /**
           * Status
           * @description Status of the follow-up (e.g., 'Pending').
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
 * Type of MAGNETIC's MAGNETIC_CLIENTS_SEARCH_CONTACTS tool input.
 */
type MAGNETIC_CLIENTS_SEARCH_CONTACTS_INPUT = {
  /**
   * Client Id
   * @description Filter results to contacts belonging to this client ID.
   * @default null
   */
  clientId: number | null;
  /**
   * Field
   * @description The contact field to search by (e.g., 'email', 'name').
   * @default null
   */
  field: string | null;
  /**
   * Limit
   * @description Maximum number of results to return.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip for pagination.
   * @default null
   */
  offset: number | null;
  /**
   * Value
   * @description The value to match in the specified field.
   * @default null
   */
  value: string | null;
};

/**
 * Type of MAGNETIC's MAGNETIC_CLIENTS_SEARCH_CONTACTS tool output.
 */
type MAGNETIC_CLIENTS_SEARCH_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of contacts matching the search criteria.
       */
      contacts: {
          /**
           * Client Id
           * @description ID of associated client.
           * @default null
           */
          clientId: number | null;
          /**
           * Contact Id
           * @description Unique identifier for the contact.
           */
          contactId: number;
          /**
           * Email
           * @description Email address of the contact.
           * @default null
           */
          email: string | null;
          /**
           * First Name
           * @description First name of the contact.
           * @default null
           */
          firstName: string | null;
          /**
           * Last Name
           * @description Last name of the contact.
           * @default null
           */
          lastName: string | null;
          /**
           * Phone
           * @description Phone number of the contact.
           * @default null
           */
          phone: string | null;
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
 * Type of MAGNETIC's MAGNETIC_GET_CONTACT_TAGS tool input.
 */
type MAGNETIC_GET_CONTACT_TAGS_INPUT = {
  /**
   * Contact Id
   * @description Unique ID of the contact whose tags to retrieve.
   */
  contactId?: number;
};

/**
 * Type of MAGNETIC's MAGNETIC_GET_CONTACT_TAGS tool output.
 */
type MAGNETIC_GET_CONTACT_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact Tags
       * @description List of tags for the contact.
       */
      contactTags: {
          /**
           * Contact Id
           * @description The contact's ID.
           */
          contactId: number;
          /**
           * Contact Tag Id
           * @description Unique identifier for the contact tag.
           */
          contactTagId: number;
          /**
           * Tag
           * @description Name of the tag.
           */
          tag: string;
          /**
           * Tag Id
           * @description Unique identifier for the tag.
           */
          tagId: number;
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
 * Type of MAGNETIC's MAGNETIC_GET_GROUPINGS tool input.
 */
type MAGNETIC_GET_GROUPINGS_INPUT = object;

/**
 * Type of MAGNETIC's MAGNETIC_GET_GROUPINGS tool output.
 */
type MAGNETIC_GET_GROUPINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Groupings
       * @description List of available groupings
       */
      groupings: {
          /**
           * Id
           * @description Unique identifier for the grouping
           */
          id: number;
          /**
           * Name
           * @description Name of the grouping
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
 * Type of MAGNETIC's MAGNETIC_GET_GROUPING_STATUSES tool input.
 */
type MAGNETIC_GET_GROUPING_STATUSES_INPUT = object;

/**
 * Type of MAGNETIC's MAGNETIC_GET_GROUPING_STATUSES tool output.
 */
type MAGNETIC_GET_GROUPING_STATUSES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Statuses
       * @description List of available statuses for signed groupings
       */
      statuses: {
          /**
           * Group Type
           * @description Type of grouping (e.g., 'task', 'job')
           */
          groupType: string;
          /**
           * Is Default
           * @description Indicates if this status is the default
           */
          isDefault: boolean;
          /**
           * Status Id
           * @description Unique identifier for the status
           */
          statusId: number;
          /**
           * Status Name
           * @description Name of the status
           */
          statusName: string;
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
 * Type of MAGNETIC's MAGNETIC_GET_GROUPING_TAGS tool input.
 */
type MAGNETIC_GET_GROUPING_TAGS_INPUT = object;

/**
 * Type of MAGNETIC's MAGNETIC_GET_GROUPING_TAGS tool output.
 */
type MAGNETIC_GET_GROUPING_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tags
       * @description List of available grouping tags
       */
      tags: {
          /**
           * Colour
           * @description Color code associated with the tag (e.g., '#FF0000')
           */
          colour: string;
          /**
           * Display Order
           * @description Display order for sorting tags
           */
          displayOrder: number;
          /**
           * Id
           * @description Unique identifier for the tag
           */
          id: number;
          /**
           * Name
           * @description Name of the grouping tag
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
 * Type of MAGNETIC's MAGNETIC_GET_OPPORTUNITY_STATUSES tool input.
 */
type MAGNETIC_GET_OPPORTUNITY_STATUSES_INPUT = object;

/**
 * Type of MAGNETIC's MAGNETIC_GET_OPPORTUNITY_STATUSES tool output.
 */
type MAGNETIC_GET_OPPORTUNITY_STATUSES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Statuses
       * @description List of opportunity statuses
       */
      statuses: {
          /**
           * Color
           * @description Color code for the status (optional)
           * @default null
           */
          color: string | null;
          /**
           * Id
           * @description ID of the opportunity status
           */
          id: number;
          /**
           * Is Active
           * @description Indicates if the status is active
           */
          isActive: boolean;
          /**
           * Is Default
           * @description Indicates if this is the default status
           */
          isDefault: boolean;
          /**
           * Name
           * @description Name of the status
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
 * Type of MAGNETIC's MAGNETIC_GET_TASK tool input.
 */
type MAGNETIC_GET_TASK_INPUT = {
  /**
   * Task Id
   * @description The unique ID of the task to retrieve (must be positive).
   */
  taskId?: number;
};

/**
 * Type of MAGNETIC's MAGNETIC_GET_TASK tool output.
 */
type MAGNETIC_GET_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assigned To
       * @description User ID the task is assigned to.
       */
      assignedTo: number;
      /**
       * Created Date
       * @description Date/time when the task was created (ISO 8601).
       */
      createdDate: string;
      /**
       * Description
       * @description Detailed description of the task.
       * @default null
       */
      description: string | null;
      /**
       * Due Date
       * @description Due date/time of the task (ISO 8601 format).
       */
      dueDate: string;
      /**
       * Id
       * @description Unique identifier of the task.
       */
      id: number;
      /**
       * Modified Date
       * @description Date/time when the task was last modified (ISO 8601).
       */
      modifiedDate: string;
      /**
       * Name
       * @description Name of the task.
       */
      name: string;
      /**
       * Status
       * @description Current status of the task.
       */
      status: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MAGNETIC's MAGNETIC_GET_USER tool input.
 */
type MAGNETIC_GET_USER_INPUT = {
  /**
   * Id
   * @description Unique identifier of the user to retrieve
   */
  id?: number;
};

/**
 * Type of MAGNETIC's MAGNETIC_GET_USER tool output.
 */
type MAGNETIC_GET_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email
       * @description The user’s email address
       */
      email: string;
      /**
       * First Name
       * @description The user's first name
       */
      firstName: string;
      /**
       * Id
       * @description The user’s unique identifier
       */
      id: number;
      /**
       * Is Active
       * @description Indicates if the user is active
       */
      isActive: boolean;
      /**
       * Last Name
       * @description The user's last name
       */
      lastName: string;
      /**
       * Username
       * @description The user’s system username
       */
      username: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MAGNETIC's MAGNETIC_GET_USERS tool input.
 */
type MAGNETIC_GET_USERS_INPUT = object;

/**
 * Type of MAGNETIC's MAGNETIC_GET_USERS tool output.
 */
type MAGNETIC_GET_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Users
       * @description List of user objects
       */
      users: {
          /**
           * Email
           * @description User's email address
           */
          email: string;
          /**
           * Name
           * @description Full name of the user
           */
          name: string;
          /**
           * Role
           * @description Role assigned to the user
           */
          role: string;
          /**
           * Status
           * @description Current user status (e.g., 'active', 'inactive')
           */
          status: string;
          /**
           * User Id
           * @description Unique identifier for the user
           */
          userId: number | null;
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
 * Type of MAGNETIC's MAGNETIC_MAGNETIC_TASKS_GET_GROUPING_CUSTOM_FIELD_DEFINITIONS tool input.
 */
type MAGNETIC_MAGNETIC_TASKS_GET_GROUPING_CUSTOM_FIELD_DEFINITIONS_INPUT = object;

/**
 * Type of MAGNETIC's MAGNETIC_MAGNETIC_TASKS_GET_GROUPING_CUSTOM_FIELD_DEFINITIONS tool output.
 */
type MAGNETIC_MAGNETIC_TASKS_GET_GROUPING_CUSTOM_FIELD_DEFINITIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Grouping Custom Field Definitions
       * @description List of custom field definitions for groupings
       */
      groupingCustomFieldDefinitions: {
          /**
           * Id
           * @description Unique identifier for the custom field definition
           */
          id: number;
          /**
           * Name
           * @description Name of the custom field
           */
          name: string;
          /**
           * Options
           * @description Available options if the field type is 'select'
           * @default null
           */
          options: string[] | null;
          /**
           * Type
           * @description Field type (e.g., 'text', 'select')
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
 * Type of MAGNETIC's MAGNETIC_MAGNETIC_TASKS_SEARCH_TASKS tool input.
 */
type MAGNETIC_MAGNETIC_TASKS_SEARCH_TASKS_INPUT = {
  /**
   * Field Name
   * @description The task field to filter by (e.g., 'status', 'name').
   * @default null
   */
  field_name: string | null;
  /**
   * Field Value
   * @description The value to search for in the specified field.
   * @default null
   */
  field_value: string | null;
  /**
   * Page
   * @description Page number for paginated results.
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of tasks to return per page.
   * @default null
   */
  page_size: number | null;
  /**
   * Sort Field
   * @description Field to sort the task results by.
   * @default null
   */
  sort_field: string | null;
  /**
   * Sort Order
   * @description Sort direction: 'asc' for ascending or 'desc' for descending.
   * @default null
   * @enum {string|null}
   */
  sort_order: "asc" | "desc" | null;
};

/**
 * Type of MAGNETIC's MAGNETIC_MAGNETIC_TASKS_SEARCH_TASKS tool output.
 */
type MAGNETIC_MAGNETIC_TASKS_SEARCH_TASKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Page Size
       * @description Number of tasks returned per page.
       */
      pageSize: number;
      /**
       * Tasks
       * @description List of tasks matching the search criteria.
       */
      tasks: {
          /**
           * AssignedUser
           * @description User assigned to the task.
           * @default null
           */
          assignedTo: {
              /**
               * Id
               * @description Unique identifier for the user.
               */
              id: number;
              /**
               * Name
               * @description Name of the user.
               */
              name: string;
          } | null;
          /**
           * Description
           * @description Description of the task.
           * @default null
           */
          description: string | null;
          /**
           * Due Date
           * @description Due date of the task in ISO8601 format.
           * @default null
           */
          dueDate: string | null;
          /**
           * Id
           * @description Unique identifier for the task.
           */
          id: number;
          /**
           * Name
           * @description Name or title of the task.
           * @default null
           */
          name: string | null;
          /**
           * Status
           * @description Current status of the task.
           * @default null
           */
          status: string | null;
      }[];
      /**
       * Total
       * @description Total number of matching tasks.
       */
      total: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "MAGNETIC".
 */
export type MAGNETIC_TOOL_INPUTS = {
  CLIENTS_GET_CURRENT_FOLLOWUPS: MAGNETIC_CLIENTS_GET_CURRENT_FOLLOWUPS_INPUT
  CLIENTS_SEARCH_CONTACTS: MAGNETIC_CLIENTS_SEARCH_CONTACTS_INPUT
  GET_CONTACT_TAGS: MAGNETIC_GET_CONTACT_TAGS_INPUT
  GET_GROUPINGS: MAGNETIC_GET_GROUPINGS_INPUT
  GET_GROUPING_STATUSES: MAGNETIC_GET_GROUPING_STATUSES_INPUT
  GET_GROUPING_TAGS: MAGNETIC_GET_GROUPING_TAGS_INPUT
  GET_OPPORTUNITY_STATUSES: MAGNETIC_GET_OPPORTUNITY_STATUSES_INPUT
  GET_TASK: MAGNETIC_GET_TASK_INPUT
  GET_USER: MAGNETIC_GET_USER_INPUT
  GET_USERS: MAGNETIC_GET_USERS_INPUT
  MAGNETIC_TASKS_GET_GROUPING_CUSTOM_FIELD_DEFINITIONS: MAGNETIC_MAGNETIC_TASKS_GET_GROUPING_CUSTOM_FIELD_DEFINITIONS_INPUT
  MAGNETIC_TASKS_SEARCH_TASKS: MAGNETIC_MAGNETIC_TASKS_SEARCH_TASKS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MAGNETIC".
 */
export type MAGNETIC_TOOL_OUTPUTS = {
  CLIENTS_GET_CURRENT_FOLLOWUPS: MAGNETIC_CLIENTS_GET_CURRENT_FOLLOWUPS_OUTPUT
  CLIENTS_SEARCH_CONTACTS: MAGNETIC_CLIENTS_SEARCH_CONTACTS_OUTPUT
  GET_CONTACT_TAGS: MAGNETIC_GET_CONTACT_TAGS_OUTPUT
  GET_GROUPINGS: MAGNETIC_GET_GROUPINGS_OUTPUT
  GET_GROUPING_STATUSES: MAGNETIC_GET_GROUPING_STATUSES_OUTPUT
  GET_GROUPING_TAGS: MAGNETIC_GET_GROUPING_TAGS_OUTPUT
  GET_OPPORTUNITY_STATUSES: MAGNETIC_GET_OPPORTUNITY_STATUSES_OUTPUT
  GET_TASK: MAGNETIC_GET_TASK_OUTPUT
  GET_USER: MAGNETIC_GET_USER_OUTPUT
  GET_USERS: MAGNETIC_GET_USERS_OUTPUT
  MAGNETIC_TASKS_GET_GROUPING_CUSTOM_FIELD_DEFINITIONS: MAGNETIC_MAGNETIC_TASKS_GET_GROUPING_CUSTOM_FIELD_DEFINITIONS_OUTPUT
  MAGNETIC_TASKS_SEARCH_TASKS: MAGNETIC_MAGNETIC_TASKS_SEARCH_TASKS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MAGNETIC toolkit.
 */
export const MAGNETIC = {
  slug: "magnetic",
  tools: {
    /**
     * Tool to retrieve upcoming follow-ups assigned to the authenticated user. use after authentication to view scheduled tasks.
     */
    CLIENTS_GET_CURRENT_FOLLOWUPS: "MAGNETIC_CLIENTS_GET_CURRENT_FOLLOWUPS",
    /**
     * Tool to search contacts by field or client id. use when you need to retrieve client contacts matching given criteria after authentication.
     */
    CLIENTS_SEARCH_CONTACTS: "MAGNETIC_CLIENTS_SEARCH_CONTACTS",
    /**
     * Tool to get all tags associated with a contact. use after confirming the contactid to list contact tags.
     */
    GET_CONTACT_TAGS: "MAGNETIC_GET_CONTACT_TAGS",
    /**
     * Tool to retrieve a list of groupings. use after authentication when you need to select a grouping to comment on.
     */
    GET_GROUPINGS: "MAGNETIC_GET_GROUPINGS",
    /**
     * Tool to retrieve the list of statuses for signed groupings. use after authentication when you need available grouping status options for tasks or jobs.
     */
    GET_GROUPING_STATUSES: "MAGNETIC_GET_GROUPING_STATUSES",
    /**
     * Tool to retrieve tags associated with any groupings owned by the company. use after authentication when grouping tags are needed.
     */
    GET_GROUPING_TAGS: "MAGNETIC_GET_GROUPING_TAGS",
    /**
     * Tool to retrieve opportunity statuses. use when you need current status options for unsigned groupings (opportunities).
     */
    GET_OPPORTUNITY_STATUSES: "MAGNETIC_GET_OPPORTUNITY_STATUSES",
    /**
     * Tool to retrieve a task by its id. use after confirming you have the taskid.
     */
    GET_TASK: "MAGNETIC_GET_TASK",
    /**
     * Tool to get a magnetic user's details by id. use after confirming a valid user id to fetch their profile.
     */
    GET_USER: "MAGNETIC_GET_USER",
    /**
     * Tool to retrieve the list of all users in the authenticated user's company. use after authentication to audit or manage user accounts.
     */
    GET_USERS: "MAGNETIC_GET_USERS",
    /**
     * Tool to retrieve all custom field definitions for groupings. use after authentication when you need to fetch available grouping custom field definitions for tasks.
     */
    MAGNETIC_TASKS_GET_GROUPING_CUSTOM_FIELD_DEFINITIONS: "MAGNETIC_MAGNETIC_TASKS_GET_GROUPING_CUSTOM_FIELD_DEFINITIONS",
    /**
     * Tool to search tasks by a specified field and value. use when you need to filter and page tasks after authentication.
     */
    MAGNETIC_TASKS_SEARCH_TASKS: "MAGNETIC_MAGNETIC_TASKS_SEARCH_TASKS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MAGNETIC".
 */
export type MAGNETIC_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MAGNETIC".
 */
export type MAGNETIC_TRIGGER_EVENTS = {}
