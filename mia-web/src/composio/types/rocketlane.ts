// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ROCKETLANE's ROCKETLANE_ARCHIVE_PROJECT_BY_ID tool input.
 */
type ROCKETLANE_ARCHIVE_PROJECT_BY_ID_INPUT = {
  /**
   * Project Id
   * @description The unique identifier of the project to be archived.
   */
  project_id?: string;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_ARCHIVE_PROJECT_BY_ID tool output.
 */
type ROCKETLANE_ARCHIVE_PROJECT_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A message indicating the result of the archive operation.
       * @default null
       */
      message: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_CREATE_COMPANY tool input.
 */
type ROCKETLANE_CREATE_COMPANY_INPUT = {
  /**
   * Billing Name
   * @description Billing name for the company
   * @default null
   */
  billing_name: string | null;
  /**
   * Company Code
   * @description Unique company code
   * @default null
   */
  company_code: string | null;
  /**
   * Default Currency
   * @description Default currency code for the company
   * @default null
   */
  default_currency: string | null;
  /**
   * Description
   * @description Description of the company
   * @default null
   */
  description: string | null;
  /**
   * Domain
   * @description Company's domain
   * @default null
   */
  domain: string | null;
  /**
   * Name
   * @description Name of the company
   */
  name?: string;
  /**
   * Vat
   * @description VAT number of the company
   * @default null
   */
  vat: string | null;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_CREATE_COMPANY tool output.
 */
type ROCKETLANE_CREATE_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Company Id
       * @description The company's unique identifier
       */
      companyId: number;
      /**
       * Company Name
       * @description The name of the company
       */
      companyName: string;
      /**
       * Company Type
       * @description The type of company
       * @default null
       */
      companyType: string | null;
      /**
       * Created At
       * @description Company creation timestamp
       * @default null
       */
      createdAt: number | null;
      /**
       * Updated At
       * @description Company last update timestamp
       * @default null
       */
      updatedAt: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_CREATE_TASK tool input.
 */
type ROCKETLANE_CREATE_TASK_INPUT = {
  /**
   * At Risk
   * @description Indicates if the task is at risk.
   * @default null
   */
  atRisk: boolean | null;
  /**
   * Due Date
   * @description Task due date in YYYY-MM-DD format.
   * @default null
   */
  dueDate: string | null;
  /**
   * Effort In Minutes
   * @description Expected time in minutes to complete the task.
   * @default null
   */
  effortInMinutes: number | null;
  /**
   * External Reference Id
   * @description Unique identifier for linking with external systems.
   * @default null
   */
  externalReferenceId: string | null;
  /**
   * Fields
   * @description Custom fields for the task.
   * @default null
   */
  fields: {
      /**
       * Field Id
       * @description ID of the custom field.
       */
      fieldId: string;
      /**
       * Field Value
       * @description Value of the custom field.
       */
      fieldValue: string | null;
  }[] | null;
  /**
   * Followers
   * @description Task followers (members or placeholders).
   * @default null
   */
  followers: {
      /**
       * Members
       * @description List of followers.
       * @default null
       */
      members: {
          /**
           * Id
           * @description ID of the member.
           */
          id: string;
          /**
           * Type
           * @description Type of the follower.
           * @enum {string}
           */
          type: "member" | "placeholder";
      }[] | null;
  } | null;
  /**
   * ParentTask
   * @description Parent task.
   * @default null
   */
  parent: {
      /**
       * Id
       * @description ID of the parent task.
       */
      id: string;
  } | null;
  /**
   * Phase
   * @description The phase associated with the task.
   * @default null
   */
  phase: {
      /**
       * Id
       * @description ID of the phase.
       */
      id: string;
  } | null;
  /**
   * Private
   * @description Indicates if the task is private.
   * @default null
   */
  private: boolean | null;
  /**
   * Progress
   * @description Task progress (0-100).
   * @default null
   */
  progress: number | null;
  /**
   * Project
   * @description The project associated with the task.
   */
  project?: {
      /**
       * Id
       * @description ID of the project.
       */
      id: string;
  };
  /**
   * Start Date
   * @description Task start date in YYYY-MM-DD format.
   * @default null
   */
  startDate: string | null;
  /**
   * Status
   * @description The status of the task.
   * @default null
   */
  status: {
      /**
       * Id
       * @description ID of the status.
       */
      id: string;
  } | null;
  /**
   * Task Description
   * @description HTML formatted description of the task.
   * @default null
   */
  taskDescription: string | null;
  /**
   * Task Name
   * @description The name of the task.
   */
  taskName?: string;
  /**
   * Task Private Note
   * @description HTML formatted private note for team members.
   * @default null
   */
  taskPrivateNote: string | null;
  /**
   * Type
   * @description Task type (MILESTONE or TASK). Defaults to TASK.
   * @default TASK
   * @enum {string|null}
   */
  type: "MILESTONE" | "TASK" | null;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_CREATE_TASK tool output.
 */
type ROCKETLANE_CREATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Task Id
       * @description ID of the created task.
       */
      taskId: number;
      /**
       * Task Name
       * @description Name of the task.
       */
      taskName: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_CREATE_TIME_ENTRY tool input.
 */
type ROCKETLANE_CREATE_TIME_ENTRY_INPUT = {
  /**
   * Activity Name
   * @description Name of the activity for the time entry
   * @default General Work
   */
  activity_name: string | null;
  /**
   * Billable
   * @description Whether the time entry is billable
   * @default null
   */
  billable: boolean | null;
  /**
   * Date
   * Format: date
   * @description The date for which the time entry is being logged (format: YYYY-MM-DD)
   */
  date?: string;
  /**
   * Minutes
   * @description The amount of time spent, expressed in minutes
   */
  minutes?: number;
  /**
   * Notes
   * @description Additional notes or description for the time entry
   * @default null
   */
  notes: string | null;
  /**
   * Project Id
   * @description The ID of the project associated with the time entry
   * @default null
   */
  project_id: string | null;
  /**
   * Source
   * @description The source of the time entry (manual or imported)
   * @default manual
   */
  source: string;
  /**
   * Task Id
   * @description The ID of the task associated with the time entry
   * @default null
   */
  task_id: string | null;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_CREATE_TIME_ENTRY tool output.
 */
type ROCKETLANE_CREATE_TIME_ENTRY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Activity Name
       * @description Name of the activity
       */
      activityName: string;
      /**
       * Billable
       * @description Whether the time entry is billable
       * @default false
       */
      billable: boolean;
      /**
       * Created At
       * @description Creation timestamp
       */
      createdAt: number;
      /**
       * Date
       * Format: date
       * @description The date of the time entry
       */
      date: string;
      /**
       * Minutes
       * @description Duration in minutes
       */
      minutes: number;
      /**
       * Notes
       * @description Description of the time entry
       * @default null
       */
      notes: string | null;
      /**
       * Project Id
       * @description ID of the associated project
       * @default null
       */
      projectId: string | null;
      /**
       * Task Id
       * @description ID of the associated task
       * @default null
       */
      taskId: string | null;
      /**
       * Time Entry Id
       * @description The unique identifier of the created time entry
       */
      timeEntryId: number;
      /**
       * Updated At
       * @description Last update timestamp
       */
      updatedAt: number;
      /**
       * User Id
       * @description ID of the user who created the entry
       */
      user_id: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_DELETE_PROJECT tool input.
 */
type ROCKETLANE_DELETE_PROJECT_INPUT = {
  /**
   * Project Id
   * @description The ID of the project to delete
   */
  project_id?: string;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_DELETE_PROJECT tool output.
 */
type ROCKETLANE_DELETE_PROJECT_OUTPUT = {
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
 * Type of ROCKETLANE's ROCKETLANE_DELETE_TASK_BY_ID tool input.
 */
type ROCKETLANE_DELETE_TASK_BY_ID_INPUT = {
  /**
   * Task Id
   * @description The unique identifier of the task to be deleted.
   */
  task_id?: string;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_DELETE_TASK_BY_ID tool output.
 */
type ROCKETLANE_DELETE_TASK_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A message indicating the result of the delete operation.
       * @default null
       */
      message: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_DELETE_TIME_ENTRY_BY_ID tool input.
 */
type ROCKETLANE_DELETE_TIME_ENTRY_BY_ID_INPUT = {
  /**
   * Time Entry Id
   * @description The ID of the time entry to delete.
   */
  timeEntryId?: string;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_DELETE_TIME_ENTRY_BY_ID tool output.
 */
type ROCKETLANE_DELETE_TIME_ENTRY_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A message indicating the success of the deletion.
       * @default
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
 * Type of ROCKETLANE's ROCKETLANE_GET_ALL_FIELDS tool input.
 */
type ROCKETLANE_GET_ALL_FIELDS_INPUT = {
  /**
   * Include Fields
   * @description Comma-separated list of fields to include in the response.
   * @default null
   */
  includeFields: string | null;
  /**
   * Limit
   * @description Limit the number of results returned.
   * @default null
   */
  limit: number | null;
  /**
   * Object Type
   * @description Filter results based on object type.
   * @default null
   */
  objectType: string | null;
  /**
   * Page Token
   * @description Token for pagination.
   * @default null
   */
  pageToken: string | null;
  /**
   * Sort By
   * @description Sort results by a specific field.
   * @default null
   */
  sortBy: string | null;
  /**
   * SortOrder
   * @description Order of sorting (ascending or descending).
   * @default null
   * @enum {string|null}
   */
  sortOrder: "asc" | "desc" | null;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_GET_ALL_FIELDS tool output.
 */
type ROCKETLANE_GET_ALL_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Fields
       * @description List of custom fields.
       */
      fields: {
          /**
           * Description
           * @description Description of the field.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier for the field.
           */
          id: string;
          /**
           * Name
           * @description Name of the field.
           */
          name: string;
          /**
           * Required
           * @description Indicates if the field is required.
           */
          required: boolean;
          /**
           * Type
           * @description Data type of the field.
           */
          type: string;
      }[];
      /**
       * Next Page Token
       * @description Token for the next page of results.
       * @default null
       */
      nextPageToken: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_GET_COMPANY tool input.
 */
type ROCKETLANE_GET_COMPANY_INPUT = {
  /**
   * Company Id
   * @description The unique identifier of the company to retrieve
   */
  company_id?: string;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_GET_COMPANY tool output.
 */
type ROCKETLANE_GET_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Company Id
       * @description Unique identifier of the company
       */
      companyId: number;
      /**
       * Company Name
       * @description Name of the company
       */
      companyName: string;
      /**
       * Company Type
       * @description Type of the company
       */
      companyType: string;
      /**
       * Created At
       * @description Company creation timestamp
       */
      createdAt: number;
      /**
       * Updated At
       * @description Company last update timestamp
       */
      updatedAt: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_GET_FIELD_BY_ID tool input.
 */
type ROCKETLANE_GET_FIELD_BY_ID_INPUT = {
  /**
   * Field Id
   * @description The unique identifier for the field.
   */
  field_id?: string;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_GET_FIELD_BY_ID tool output.
 */
type ROCKETLANE_GET_FIELD_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Field Details
       * @description Detailed information about the field.
       */
      field_details: {
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
 * Type of ROCKETLANE's ROCKETLANE_GET_PROJECT_BY_ID tool input.
 */
type ROCKETLANE_GET_PROJECT_BY_ID_INPUT = {
  /**
   * Include Fields
   * @description Comma-separated list of fields to include in the response. For example, 'name,status,owner'.
   * @default null
   */
  include_fields: string | null;
  /**
   * Project Id
   * @description The unique identifier for the project.
   */
  project_id?: string;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_GET_PROJECT_BY_ID tool output.
 */
type ROCKETLANE_GET_PROJECT_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Project Details
       * @description Detailed information about the project.
       */
      project_details: {
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
 * Type of ROCKETLANE's ROCKETLANE_GET_TASK_BY_ID tool input.
 */
type ROCKETLANE_GET_TASK_BY_ID_INPUT = {
  /**
   * Include Fields
   * @description Fields to include in the response. Use comma separated values.
   * @default null
   */
  include_fields: string | null;
  /**
   * Task Id
   * @description The unique identifier for the task.
   */
  task_id?: string;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_GET_TASK_BY_ID tool output.
 */
type ROCKETLANE_GET_TASK_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Task Details
       * @description Detailed information about the task.
       */
      task_details: {
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
 * Type of ROCKETLANE's ROCKETLANE_GET_TEMPLATE_BY_ID tool input.
 */
type ROCKETLANE_GET_TEMPLATE_BY_ID_INPUT = {
  /**
   * Template Id
   * @description The unique identifier of the template to retrieve.
   */
  template_id?: string;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_GET_TEMPLATE_BY_ID tool output.
 */
type ROCKETLANE_GET_TEMPLATE_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Template Details
       * @description Detailed information about the template.
       * @default null
       */
      template_details: {
          [key: string]: unknown;
      } | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_GET_TIME_ENTRIES tool input.
 */
type ROCKETLANE_GET_TIME_ENTRIES_INPUT = {
  /**
   * End Date
   * Format: date
   * @description Filter time entries before this date (inclusive)
   * @default null
   */
  end_date: string | null;
  /**
   * Page
   * @description Page number for pagination
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page
   * @default 100
   */
  per_page: number | null;
  /**
   * Project Id
   * @description Filter time entries by project ID
   * @default null
   */
  project_id: string | null;
  /**
   * Sort By
   * @description Field to sort by (e.g., date, minutes)
   * @default date
   */
  sort_by: string | null;
  /**
   * Sort Order
   * @description Sort order (asc or desc)
   * @default desc
   */
  sort_order: string | null;
  /**
   * Start Date
   * Format: date
   * @description Filter time entries after this date (inclusive)
   * @default null
   */
  start_date: string | null;
  /**
   * User Id
   * @description Filter time entries by user ID
   * @default null
   */
  user_id: string | null;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_GET_TIME_ENTRIES tool output.
 */
type ROCKETLANE_GET_TIME_ENTRIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Data
       * @description List of time entries
       */
      data: {
          /**
           * Activity Name
           * @description Name of the activity
           */
          activityName: string;
          /**
           * Billable
           * @description Whether the time entry is billable
           */
          billable: boolean;
          /**
           * Created At
           * @description Creation timestamp
           */
          createdAt: number;
          /**
           * Date
           * @description The date of the time entry
           */
          date: string;
          /**
           * Minutes
           * @description Duration in minutes
           */
          minutes: number;
          /**
           * Time Entry Id
           * @description The unique identifier of the time entry
           */
          timeEntryId: number;
          /**
           * Updated At
           * @description Last update timestamp
           */
          updatedAt: number;
          /**
           * User
           * @description User who created the entry
           */
          user: {
              /** Email Id */
              emailId: string;
              /** First Name */
              firstName: string;
              /**
               * Last Name
               * @default null
               */
              lastName: string | null;
              /** User Id */
              userId: number;
          };
      }[];
      /**
       * Pagination
       * @description Pagination information
       */
      pagination: {
          /** Has More */
          hasMore: boolean;
          /** Page Size */
          pageSize: number;
          /** Total Record Count */
          totalRecordCount: number;
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
 * Type of ROCKETLANE's ROCKETLANE_GET_TIME_ENTRY_BY_ID tool input.
 */
type ROCKETLANE_GET_TIME_ENTRY_BY_ID_INPUT = {
  /**
   * Time Entry Id
   * @description The unique identifier of the time entry to retrieve.
   */
  timeEntryId?: string;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_GET_TIME_ENTRY_BY_ID tool output.
 */
type ROCKETLANE_GET_TIME_ENTRY_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Time Entry
       * @description Detailed information about the time entry.
       */
      timeEntry: {
          /**
           * Billable
           * @description Indicates whether the time entry is billable.
           */
          billable: boolean;
          /**
           * Created At
           * @description The timestamp when the time entry was created.
           */
          createdAt: string;
          /**
           * Date
           * Format: date
           * @description The date when the time was logged (format: YYYY-MM-DD).
           */
          date: string;
          /**
           * Description
           * @description A description of the work performed during the time entry.
           * @default null
           */
          description: string | null;
          /**
           * Duration
           * @description The duration of the time entry in minutes.
           */
          duration: number;
          /**
           * Id
           * @description The unique identifier of the time entry.
           */
          id: string;
          /**
           * Project Id
           * @description The unique identifier of the associated project.
           * @default null
           */
          projectId: string | null;
          /**
           * Task Id
           * @description The unique identifier of the associated task.
           * @default null
           */
          taskId: string | null;
          /**
           * Updated At
           * @description The timestamp when the time entry was last updated.
           */
          updatedAt: string;
          /**
           * User Id
           * @description The unique identifier of the user who logged the time.
           */
          userId: string;
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
 * Type of ROCKETLANE's ROCKETLANE_GET_USER_BY_ID tool input.
 */
type ROCKETLANE_GET_USER_BY_ID_INPUT = {
  /**
   * Include Fields
   * @description Comma-separated list of fields to include in the response. For example, 'email,status'
   * @default null
   */
  include_fields: string | null;
  /**
   * User Id
   * @description The unique identifier of the user.
   */
  user_id?: string;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_GET_USER_BY_ID tool output.
 */
type ROCKETLANE_GET_USER_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Custom Fields
       * @description Custom fields associated with the user.
       * @default null
       */
      custom_fields: {
          [key: string]: unknown;
      } | null;
      /**
       * Email
       * @description Email address of the user.
       * @default null
       */
      email: string | null;
      /**
       * Permission Levels
       * @description List of permission levels for the user.
       * @default null
       */
      permission_levels: string[] | null;
      /**
       * Status
       * @description Status of the user (e.g., active, invited, inactive).
       * @default null
       */
      status: string | null;
      /**
       * Type
       * @description Type of the user (e.g., team member, partner, customer).
       * @default null
       */
      type: string | null;
      /**
       * User Id
       * @description Unique identifier of the user.
       * @default null
       */
      userId: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_LIST_COMPANIES tool input.
 */
type ROCKETLANE_LIST_COMPANIES_INPUT = object;

/**
 * Type of ROCKETLANE's ROCKETLANE_LIST_COMPANIES tool output.
 */
type ROCKETLANE_LIST_COMPANIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Companies
       * @description List of companies with their details
       */
      companies: {
          /**
           * Domain
           * @description The domain associated with the company
           * @default null
           */
          domain: string | null;
          /**
           * Id
           * @description The unique identifier of the company
           */
          id: string;
          /**
           * Name
           * @description The name of the company
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
 * Type of ROCKETLANE's ROCKETLANE_LIST_COMPANY_FIELDS tool input.
 */
type ROCKETLANE_LIST_COMPANY_FIELDS_INPUT = object;

/**
 * Type of ROCKETLANE's ROCKETLANE_LIST_COMPANY_FIELDS tool output.
 */
type ROCKETLANE_LIST_COMPANY_FIELDS_OUTPUT = {
  /**
   * Data
   * @description List of available company fields
   */
  data?: {
      /**
       * Enabled
       * @description Whether the field is enabled
       */
      enabled: boolean;
      /**
       * Field Id
       * @description Unique identifier of the field
       */
      fieldId: number;
      /**
       * Field Label
       * @description Display label of the field
       */
      fieldLabel: string;
      /**
       * Field Type
       * @description Type of the field (e.g., TEXT, NUMBER, SINGLE_CHOICE)
       * @default null
       */
      fieldType: string | null;
      /**
       * Object Type
       * @description Type of object this field belongs to
       */
      objectType: string;
      /**
       * Private
       * @description Whether the field is private
       */
      private: boolean;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Pagination
   * @description Pagination information
   */
  pagination?: {
      /**
       * Has More
       * @description Whether there are more pages
       */
      hasMore: boolean;
      /**
       * Page Size
       * @description Number of items per page
       */
      pageSize: number;
      /**
       * Total Record Count
       * @description Total number of records
       */
      totalRecordCount: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_LIST_COMPANY_NOTE_FIELDS tool input.
 */
type ROCKETLANE_LIST_COMPANY_NOTE_FIELDS_INPUT = object;

/**
 * Type of ROCKETLANE's ROCKETLANE_LIST_COMPANY_NOTE_FIELDS tool output.
 */
type ROCKETLANE_LIST_COMPANY_NOTE_FIELDS_OUTPUT = {
  /**
   * Data
   * @description List of available company note fields
   */
  data?: {
      /**
       * Description
       * @description Description of the field
       * @default null
       */
      description: string | null;
      /**
       * Enabled
       * @description Whether the field is enabled
       */
      enabled: boolean;
      /**
       * Field Id
       * @description Unique identifier of the field
       */
      fieldId: number;
      /**
       * Field Label
       * @description Display label of the field
       */
      fieldLabel: string;
      /**
       * Field Type
       * @description Type of the field (e.g., TEXT, NUMBER, SINGLE_CHOICE)
       * @default null
       */
      fieldType: string | null;
      /**
       * Options
       * @description List of options for SINGLE_CHOICE or MULTIPLE_CHOICE fields
       * @default null
       */
      options: string[] | null;
      /**
       * Private
       * @description Whether the field is private
       */
      private: boolean;
      /**
       * Required
       * @description Whether the field is required
       * @default false
       */
      required: boolean;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Pagination
   * @description Pagination information
   */
  pagination?: {
      /**
       * Has More
       * @description Whether there are more pages
       */
      hasMore: boolean;
      /**
       * Page Size
       * @description Number of items per page
       */
      pageSize: number;
      /**
       * Total Record Count
       * @description Total number of records
       */
      totalRecordCount: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_LIST_CURRENCIES tool input.
 */
type ROCKETLANE_LIST_CURRENCIES_INPUT = object;

/**
 * Type of ROCKETLANE's ROCKETLANE_LIST_CURRENCIES tool output.
 */
type ROCKETLANE_LIST_CURRENCIES_OUTPUT = {
  /**
   * Currencies
   * @description List of available currencies with their details
   */
  currencies?: {
      /**
       * Code
       * @description The currency code (e.g., USD, EUR)
       */
      code: string;
      /**
       * Name
       * @description The full name of the currency
       */
      name: string;
      /**
       * Symbol
       * @description The currency symbol
       */
      symbol: string;
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
 * Type of ROCKETLANE's ROCKETLANE_LIST_CUSTOMER_USERS tool input.
 */
type ROCKETLANE_LIST_CUSTOMER_USERS_INPUT = {
  /**
   * Filter
   * @description Filtering criteria for users. To list only customer users, use a filter like 'type:CUSTOMER'.
   * @default null
   */
  filter: string | null;
  /**
   * Limit
   * @description Number of users to return per page.
   * @default null
   */
  limit: number | null;
  /**
   * Page Token
   * @description Token for fetching the next page of results.
   * @default null
   */
  pageToken: string | null;
  /**
   * Sort By
   * @description Field to sort the results by.
   * @default null
   */
  sortBy: string | null;
  /**
   * Sort Order
   * @description Order of sorting (asc or desc).
   * @default null
   */
  sortOrder: string | null;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_LIST_CUSTOMER_USERS tool output.
 */
type ROCKETLANE_LIST_CUSTOMER_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page Token
       * @description Token for the next page of results, if any.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Users
       * @description List of user objects.
       */
      users: {
          /**
           * Capacity
           * @description Capacity of the user.
           * @default null
           */
          capacity: number | null;
          /**
           * Custom Fields
           * @description Custom fields associated with the user.
           * @default null
           */
          customFields: {
              [key: string]: unknown;
          } | null;
          /**
           * Email
           * @description Email address of the user.
           */
          email: string;
          /**
           * Id
           * @description Unique identifier for the user.
           */
          id: string;
          /**
           * Permissions
           * @description Permissions assigned to the user.
           * @default null
           */
          permissions: {
              [key: string]: unknown;
          } | null;
          /**
           * Status
           * @description Status of the user (e.g., ACTIVE, INVITED, INACTIVE).
           */
          status: string;
          /**
           * Type
           * @description Type of user (e.g., TEAM_MEMBER, PARTNER, CUSTOMER).
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
 * Type of ROCKETLANE's ROCKETLANE_LIST_PROJECTS tool input.
 */
type ROCKETLANE_LIST_PROJECTS_INPUT = {
  /**
   * Include All Fields
   * @description Whether to include all fields in the response
   * @default null
   */
  include_all_fields: boolean | null;
  /**
   * Include Archive
   * @description Whether to include archived projects
   * @default null
   */
  include_archive: boolean | null;
  /**
   * Page Size
   * @description Maximum number of projects to return per page (default: 100)
   * @default null
   */
  page_size: number | null;
  /**
   * Page Token
   * @description Token for pagination
   * @default null
   */
  page_token: string | null;
  /**
   * Sort By
   * @description Field to sort by
   * @default null
   */
  sort_by: string | null;
  /**
   * Sort Order
   * @description Sort order (ASC or DESC)
   * @default null
   */
  sort_order: string | null;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_LIST_PROJECTS tool output.
 */
type ROCKETLANE_LIST_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description List of projects
   */
  data?: {
      /**
       * Archived
       * @description Whether the project is archived
       * @default null
       */
      archived: boolean | null;
      /**
       * Created At
       * @description Project creation timestamp
       * @default null
       */
      createdAt: number | null;
      /**
       * Currency
       * @description Project currency
       * @default null
       */
      currency: string | null;
      /**
       * CustomerInfo
       * @description Model for customer information.
       * @default null
       */
      customer: {
          /**
           * Id
           * @description The customer's ID
           * @default null
           */
          id: number | null;
          /**
           * Name
           * @description The customer's name
           * @default null
           */
          name: string | null;
          /**
           * Url
           * @description The customer's URL
           * @default null
           */
          url: string | null;
      } | null;
      /**
       * Due Date
       * @description Project due date (YYYY-MM-DD)
       * @default null
       */
      dueDate: string | null;
      /**
       * ProjectFinancials
       * @description Model for project financial information.
       * @default null
       */
      financials: {
          /**
           * Annualized Recurring Revenue
           * @description Annual recurring revenue
           * @default null
           */
          annualizedRecurringRevenue: number | null;
          /**
           * Billable Hours
           * @description Billable hours
           * @default null
           */
          billableHours: number | null;
          /**
           * Budgeted Hours
           * @description Budgeted hours
           * @default null
           */
          budgetedHours: number | null;
          /**
           * Non Billable Hours
           * @description Non-billable hours
           * @default null
           */
          nonBillableHours: number | null;
          /**
           * Project Fee
           * @description Project fee
           * @default null
           */
          projectFee: number | null;
          /**
           * Tracked Hours
           * @description Tracked hours
           * @default null
           */
          trackedHours: number | null;
      } | null;
      /**
       * ProjectOwner
       * @description Model for project owner information.
       * @default null
       */
      owner: {
          /**
           * Email
           * @description The owner's email
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description The owner's ID
           * @default null
           */
          id: number | null;
          /**
           * Name
           * @description The owner's name
           * @default null
           */
          name: string | null;
      } | null;
      /**
       * Progress Percentage
       * @description Project progress percentage
       * @default null
       */
      progressPercentage: number | null;
      /**
       * Project Id
       * @description The project's unique identifier
       * @default null
       */
      projectId: number | null;
      /**
       * Project Name
       * @description The name of the project
       * @default null
       */
      projectName: string | null;
      /**
       * Start Date
       * @description Project start date (YYYY-MM-DD)
       * @default null
       */
      startDate: string | null;
      /**
       * ProjectStatus
       * @description Model for project status information.
       * @default null
       */
      status: {
          /**
           * Label
           * @description The status label
           * @default null
           */
          label: string | null;
          /**
           * Value
           * @description The status value
           * @default null
           */
          value: string | null;
      } | null;
      /**
       * Updated At
       * @description Project last update timestamp
       * @default null
       */
      updatedAt: number | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * PaginationInfo
   * @description Model for pagination information.
   * @default null
   */
  pagination: {
      /**
       * Has More
       * @description Whether there are more pages
       * @default null
       */
      hasMore: boolean | null;
      /**
       * Next Page
       * @description URL for the next page
       * @default null
       */
      nextPage: string | null;
      /**
       * Next Page Token
       * @description Token for the next page
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Page Size
       * @description Number of items per page
       * @default null
       */
      pageSize: number | null;
      /**
       * Total Record Count
       * @description Total number of records
       * @default null
       */
      totalRecordCount: number | null;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_LIST_PROJECT_FIELDS tool input.
 */
type ROCKETLANE_LIST_PROJECT_FIELDS_INPUT = object;

/**
 * Type of ROCKETLANE's ROCKETLANE_LIST_PROJECT_FIELDS tool output.
 */
type ROCKETLANE_LIST_PROJECT_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Fields
       * @description List of project fields including both default and custom fields
       */
      fields: {
          /**
           * Default Value
           * @description Default value of the field
           * @default null
           */
          default_value: unknown;
          /**
           * Description
           * @description Description of the field
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the field
           * @default null
           */
          id: string | null;
          /**
           * Is Custom
           * @description Whether the field is a custom field or system default
           * @default null
           */
          is_custom: boolean | null;
          /**
           * Name
           * @description Name of the field
           * @default null
           */
          name: string | null;
          /**
           * Options
           * @description List of options for choice fields
           * @default null
           */
          options: {
              /**
               * Id
               * @description Unique identifier of the field option
               * @default null
               */
              id: string | null;
              /**
               * Label
               * @description Display label of the field option
               * @default null
               */
              label: string | null;
              /**
               * Value
               * @description Value of the field option
               * @default null
               */
              value: string | null;
          }[] | null;
          /**
           * Required
           * @description Whether the field is required
           * @default null
           */
          required: boolean | null;
          /**
           * Type
           * @description Type of the field (TEXT, MULTI_LINE_TEXT, YES_OR_NO, DATE, SINGLE_CHOICE, MULTIPLE_CHOICE, SINGLE_USER, MULTIPLE_USER, RATING, NUMBER)
           * @default null
           */
          type: string | null;
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
 * Type of ROCKETLANE's ROCKETLANE_LIST_PROJECT_PHASES tool input.
 */
type ROCKETLANE_LIST_PROJECT_PHASES_INPUT = {
  /**
   * Due Date
   * @description Filter phases by due date (YYYY-MM-DD)
   * @default null
   */
  due_date: string | null;
  /**
   * Due Date Actual
   * @description Filter phases by actual due date (YYYY-MM-DD)
   * @default null
   */
  due_date_actual: string | null;
  /**
   * Limit
   * @description Number of results per page
   * @default null
   */
  limit: number | null;
  /**
   * Page Token
   * @description Token for pagination
   * @default null
   */
  page_token: string | null;
  /**
   * Phase Name
   * @description Filter phases by name
   * @default null
   */
  phase_name: string | null;
  /**
   * Project Id
   * @description Filter phases by project ID
   * @default null
   */
  project_id: string | null;
  /**
   * Sort By
   * @description Field to sort the results by
   * @default null
   */
  sort_by: string | null;
  /**
   * SortOrder
   * @description Sort order (asc or desc)
   * @default null
   * @enum {string|null}
   */
  sort_order: "asc" | "desc" | null;
  /**
   * Start Date
   * @description Filter phases by start date (YYYY-MM-DD)
   * @default null
   */
  start_date: string | null;
  /**
   * Start Date Actual
   * @description Filter phases by actual start date (YYYY-MM-DD)
   * @default null
   */
  start_date_actual: string | null;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_LIST_PROJECT_PHASES tool output.
 */
type ROCKETLANE_LIST_PROJECT_PHASES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page Token
       * @description Token for fetching the next page of results
       * @default null
       */
      next_page_token: string | null;
      /**
       * Phases
       * @description List of phases
       */
      phases: {
          /**
           * Created At
           * Format: date
           * @description Date when the phase was created
           */
          created_at: string;
          /**
           * Due Date
           * Format: date
           * @description Planned due date of the phase
           * @default null
           */
          due_date: string | null;
          /**
           * Due Date Actual
           * Format: date
           * @description Actual due date of the phase
           * @default null
           */
          due_date_actual: string | null;
          /**
           * Id
           * @description Unique identifier of the phase
           */
          id: string;
          /**
           * Name
           * @description Name of the phase
           */
          name: string;
          /**
           * Project Id
           * @description ID of the project this phase belongs to
           */
          project_id: string;
          /**
           * Start Date
           * Format: date
           * @description Planned start date of the phase
           * @default null
           */
          start_date: string | null;
          /**
           * Start Date Actual
           * Format: date
           * @description Actual start date of the phase
           * @default null
           */
          start_date_actual: string | null;
          /**
           * Status
           * @description Current status of the phase
           */
          status: string;
          /**
           * Updated At
           * Format: date
           * @description Date when the phase was last updated
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
 * Type of ROCKETLANE's ROCKETLANE_LIST_TASK_FIELDS tool input.
 */
type ROCKETLANE_LIST_TASK_FIELDS_INPUT = {
  /**
   * Enabled
   * @description Filter by enabled/disabled fields
   * @default null
   */
  enabled: boolean | null;
  /**
   * Include All Fields
   * @description Whether to include all field properties
   * @default null
   */
  include_all_fields: boolean | null;
  /**
   * Page Size
   * @description Maximum number of responses per page (defaults to 100)
   * @default null
   */
  page_size: number | null;
  /**
   * Page Token
   * @description Token for pagination, valid for 15 minutes
   * @default null
   */
  page_token: string | null;
  /**
   * Private
   * @description Filter by private/shared fields
   * @default null
   */
  private: boolean | null;
  /**
   * Sort By
   * @description Field to sort by
   * @default null
   */
  sort_by: string | null;
  /**
   * Sort Order
   * @description Sort order (ASC or DESC)
   * @default null
   */
  sort_order: string | null;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_LIST_TASK_FIELDS tool output.
 */
type ROCKETLANE_LIST_TASK_FIELDS_OUTPUT = {
  /**
   * Data
   * @description List of task fields
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp in epoch millis
       * @default null
       */
      created_at: number | null;
      /**
       * Enabled
       * @description Whether the field is enabled
       * @default null
       */
      enabled: boolean | null;
      /**
       * Field Description
       * @description Description of the field
       * @default null
       */
      field_description: string | null;
      /**
       * Field Id
       * @description Unique identifier for the field
       * @default null
       */
      field_id: number | null;
      /**
       * Field Label
       * @description Display label for the field
       * @default null
       */
      field_label: string | null;
      /**
       * Field Options
       * @description Options for single/multiple choice fields
       * @default null
       */
      field_options: {
          /**
           * Option Color
           * @description Color of the option (RED, YELLOW, GREEN, TEAL, CYAN, BLUE, PURPLE, MAGENTA, GRAY, COOL_GRAY)
           * @default null
           */
          option_color: string | null;
          /**
           * Option Label
           * @description Display label for the option
           * @default null
           */
          option_label: string | null;
          /**
           * Option Value
           * @description Unique identifier for the option
           * @default null
           */
          option_value: number | null;
      }[] | null;
      /**
       * Field Type
       * @description Type of the field (TEXT, MULTI_LINE_TEXT, YES_OR_NO, DATE, SINGLE_CHOICE, MULTIPLE_CHOICE, SINGLE_USER, MULTIPLE_USER, RATING)
       * @default null
       */
      field_type: string | null;
      /**
       * Object Type
       * @description Type of object (TASK)
       * @default null
       */
      object_type: string | null;
      /**
       * Private
       * @description Whether the field is private
       * @default null
       */
      private: boolean | null;
      /**
       * Rating Scale
       * @description Scale for rating fields (THREE, FIVE, SEVEN, TEN)
       * @default null
       */
      rating_scale: string | null;
      /**
       * Updated At
       * @description Last update timestamp in epoch millis
       * @default null
       */
      updated_at: number | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Pagination
   * @description Model for pagination data.
   * @default null
   */
  pagination: {
      /**
       * Has More
       * @description Whether there are more pages
       * @default null
       */
      has_more: boolean | null;
      /**
       * Next Page
       * @description URL for the next page
       * @default null
       */
      next_page: string | null;
      /**
       * Next Page Token
       * @description Token for the next page
       * @default null
       */
      next_page_token: string | null;
      /**
       * Page Size
       * @description Number of items per page
       * @default null
       */
      page_size: number | null;
      /**
       * Total Record Count
       * @description Total number of records
       * @default null
       */
      total_record_count: number | null;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_LIST_TEMPLATES tool input.
 */
type ROCKETLANE_LIST_TEMPLATES_INPUT = {
  /**
   * Include Automations
   * @description Whether to include templates with automations in the response
   * @default null
   */
  include_automations: boolean | null;
  /**
   * Include Dynamic
   * @description Whether to include dynamic templates in the response
   * @default null
   */
  include_dynamic: boolean | null;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_LIST_TEMPLATES tool output.
 */
type ROCKETLANE_LIST_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Templates
       * @description List of templates
       */
      templates: {
          /**
           * Created At
           * @description Template creation timestamp
           */
          createdAt: number;
          /**
           * Has Automations
           * @default false
           */
          has_automations: boolean | null;
          /**
           * Is Dynamic
           * @default false
           */
          is_dynamic: boolean | null;
          /**
           * Object Type
           * @description Type of the template
           */
          objectType: string;
          /**
           * Template Id
           * @description The template's unique identifier
           */
          templateId: number;
          /**
           * Template Name
           * @description The name of the template
           */
          templateName: string;
          /**
           * Updated At
           * @default null
           */
          updated_at: number | null;
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
 * Type of ROCKETLANE's ROCKETLANE_LIST_USERS tool input.
 */
type ROCKETLANE_LIST_USERS_INPUT = {
  /**
   * Limit
   * @description Number of results per page
   * @default null
   */
  limit: number | null;
  /**
   * Page Token
   * @description Token for pagination
   * @default null
   */
  page_token: string | null;
  /**
   * Sort By
   * @description Field to sort by (e.g., firstName, lastName, email)
   * @default null
   */
  sort_by: string | null;
  /**
   * Sort Order
   * @description Sort direction (asc/desc)
   * @default null
   */
  sort_order: string | null;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_LIST_USERS tool output.
 */
type ROCKETLANE_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page Token
       * @description Token for the next page of results
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Users
       * @description List of users in the Rocketlane instance
       */
      users: {
          /**
           * Created At
           * @description Creation timestamp of the user
           */
          createdAt: number;
          /**
           * Created By
           * @description User who created this user
           * @default null
           */
          createdBy: {
              [key: string]: unknown;
          } | null;
          /**
           * Email
           * @description Email address of the user
           */
          email: string;
          /**
           * Fields
           * @description Custom fields of the user
           */
          fields: unknown[];
          /**
           * First Name
           * @description First name of the user
           */
          firstName: string;
          /**
           * Last Name
           * @description Last name of the user
           * @default null
           */
          lastName: string | null;
          /**
           * Status
           * @description Status of the user
           */
          status: string;
          /**
           * Type
           * @description Type of the user
           */
          type: string;
          /**
           * Updated At
           * @description Last update timestamp of the user
           */
          updatedAt: number;
          /**
           * Updated By
           * @description User who last updated this user
           */
          updatedBy: {
              [key: string]: unknown;
          };
          /**
           * User Id
           * @description Unique identifier of the user
           */
          userId: number;
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
 * Type of ROCKETLANE's ROCKETLANE_LIST_VENDOR_USERS tool input.
 */
type ROCKETLANE_LIST_VENDOR_USERS_INPUT = {
  /**
   * Limit
   * @description Number of user records to return. Default is 10, Max is 100.
   * @default 10
   */
  limit: number | null;
  /**
   * Page Token
   * @description Token to fetch a specific page of results.
   * @default null
   */
  pageToken: string | null;
  /**
   * Sort By
   * @description Field to sort the results by (e.g., email, firstName).
   * @default null
   */
  sortBy: string | null;
  /**
   * Sort Order
   * @description Order of sorting (asc/desc). Allowed values: 'asc', 'desc'.
   * @default null
   */
  sortOrder: string | null;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_LIST_VENDOR_USERS tool output.
 */
type ROCKETLANE_LIST_VENDOR_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page Token
       * @description Token for the next page of results, if available.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Users
       * @description List of vendor user objects (type 'PARTNER').
       */
      users: {
          /**
           * Capacity
           * @description User's capacity.
           * @default null
           */
          capacity: number | null;
          /**
           * Created At
           * @description Creation timestamp of the user (epoch millis).
           * @default null
           */
          createdAt: number | null;
          /**
           * Custom Fields
           * @description Custom fields associated with the user.
           * @default null
           */
          customFields: unknown;
          /**
           * Email
           * @description Email address of the user.
           */
          email: string;
          /**
           * First Name
           * @description First name of the user.
           * @default null
           */
          firstName: string | null;
          /**
           * Id
           * @description Unique identifier of the user (maps to 'id' from API).
           */
          id: string;
          /**
           * Last Name
           * @description Last name of the user.
           * @default null
           */
          lastName: string | null;
          /**
           * Permission Level
           * @description User's permission level.
           * @default null
           */
          permissionLevel: string | null;
          /**
           * Status
           * @description User status (e.g., ACTIVE, INVITED, INACTIVE).
           */
          status: string;
          /**
           * Type
           * @description User type (e.g., TEAM_MEMBER, PARTNER, CUSTOMER).
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
 * Type of ROCKETLANE's ROCKETLANE_RETRIEVE_SUBSCRIPTION_DETAILS tool input.
 */
type ROCKETLANE_RETRIEVE_SUBSCRIPTION_DETAILS_INPUT = object;

/**
 * Type of ROCKETLANE's ROCKETLANE_RETRIEVE_SUBSCRIPTION_DETAILS tool output.
 */
type ROCKETLANE_RETRIEVE_SUBSCRIPTION_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Addons
       * @description List of addons for the subscription.
       * @default null
       */
      addons: {
          /**
           * Addon Id
           * @description ID of the addon.
           * @default null
           */
          addon_id: string | null;
          /**
           * Name
           * @description Name of the addon.
           * @default null
           */
          name: string | null;
          /**
           * Price
           * @description Price of the addon.
           * @default null
           */
          price: number | null;
          /**
           * Quantity
           * @description Quantity of the addon.
           * @default null
           */
          quantity: number | null;
      }[] | null;
      /**
       * Current Term End
       * @description End of the current term.
       * @default null
       */
      current_term_end: string | null;
      /**
       * Current Term Start
       * @description Start of the current term.
       * @default null
       */
      current_term_start: string | null;
      /**
       * Customer Id
       * @description ID of the customer.
       * @default null
       */
      customer_id: string | null;
      /**
       * Message
       * @description A message indicating the status of the response, if any.
       * @default null
       */
      message: string | null;
      /**
       * Next Billing At
       * @description Next billing date.
       * @default null
       */
      next_billing_at: string | null;
      /**
       * SubscriptionPlan
       * @description Details of the subscription plan.
       * @default null
       */
      plan: {
          /**
           * Name
           * @description Name of the plan.
           * @default null
           */
          name: string | null;
          /**
           * Period
           * @description Period of the plan.
           * @default null
           */
          period: number | null;
          /**
           * Period Unit
           * @description Unit of the period (e.g., month, year).
           * @default null
           */
          period_unit: string | null;
          /**
           * Plan Id
           * @description ID of the plan.
           * @default null
           */
          plan_id: string | null;
          /**
           * Price
           * @description Price of the plan.
           * @default null
           */
          price: number | null;
          /**
           * Status
           * @description Status of the plan.
           * @default null
           */
          status: string | null;
      } | null;
      /**
       * Start Date
       * @description Start date of the subscription.
       * @default null
       */
      start_date: string | null;
      /**
       * Status
       * @description Status of the subscription.
       * @default null
       */
      status: string | null;
      /**
       * Subscription Id
       * @description ID of the subscription.
       * @default null
       */
      subscription_id: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_SEARCH_USER_BY_EMAIL tool input.
 */
type ROCKETLANE_SEARCH_USER_BY_EMAIL_INPUT = {
  /**
   * Email
   * @description Email address of the user to search for.
   */
  email?: string;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_SEARCH_USER_BY_EMAIL tool output.
 */
type ROCKETLANE_SEARCH_USER_BY_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page Token
       * @description Token for the next page of results, if applicable.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Users
       * @description List of user objects matching the filter criteria.
       */
      users: {
          /**
           * Capacity
           * @description User's capacity.
           * @default null
           */
          capacity: number | null;
          /**
           * Email
           * @description User's email address.
           */
          email: string;
          /**
           * Id
           * @description Unique identifier for the user.
           */
          id: string;
          /**
           * Permission Levels
           * @description User's permission levels.
           * @default null
           */
          permissionLevels: string[] | null;
          /**
           * Status
           * @description User status (e.g., ACTIVE, INVITED, INACTIVE).
           */
          status: string;
          /**
           * Type
           * @description User type (e.g., TEAM_MEMBER, PARTNER, CUSTOMER).
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
 * Type of ROCKETLANE's ROCKETLANE_UPDATE_COMPANY tool input.
 */
type ROCKETLANE_UPDATE_COMPANY_INPUT = {
  /**
   * Company Id
   * @description The unique identifier of the company to update
   */
  company_id?: string;
  /**
   * Custom Fields
   * @description Custom fields associated with the company
   * @default null
   */
  custom_fields: {
      [key: string]: unknown;
  } | null;
  /**
   * Description
   * @description Description of the company
   * @default null
   */
  description: string | null;
  /**
   * Industry
   * @description Company's industry
   * @default null
   */
  industry: string | null;
  /**
   * Name
   * @description Name of the company
   * @default null
   */
  name: string | null;
  /**
   * Size
   * @description Company size
   * @default null
   */
  size: string | null;
  /**
   * Website
   * @description Company's website URL
   * @default null
   */
  website: string | null;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_UPDATE_COMPANY tool output.
 */
type ROCKETLANE_UPDATE_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Company Id
       * @description The company's unique identifier
       */
      companyId: number;
      /**
       * Company Name
       * @description The name of the company
       */
      companyName: string;
      /**
       * Company Type
       * @description Type of the company
       * @default null
       */
      companyType: string | null;
      /**
       * Created At
       * @description Company creation timestamp
       * @default null
       */
      createdAt: number | null;
      /**
       * Updated At
       * @description Company last update timestamp
       * @default null
       */
      updatedAt: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_UPDATE_PROJECT_BY_ID tool input.
 */
type ROCKETLANE_UPDATE_PROJECT_BY_ID_INPUT = {
  /**
   * Annualized Recurring Revenue
   * @description Indicates the value of the recurring revenue of the customer's subscriptions for a single calendar year.
   * @default null
   */
  annualizedRecurringRevenue: number | null;
  /**
   * Auto Allocation
   * @description Defines whether Auto Allocation is enabled for the project.
   * @default null
   */
  autoAllocation: boolean | null;
  /**
   * Budgeted Hours
   * @description Budgeted hours represent the total hours allocated for project execution.
   * @default null
   */
  budgetedHours: number | null;
  /**
   * Due Date
   * @description The day on which the project's execution is planned to be completed. Format: YYYY-MM-DD.
   * @default null
   */
  dueDate: string | null;
  /**
   * External Reference Id
   * @description An externalReferenceId is a unique identifier that links entities or transactions between external systems and Rocketlane.
   * @default null
   */
  externalReferenceId: string | null;
  /**
   * Fields
   * @description Custom fields for the project.
   * @default null
   */
  fields: {
      /**
       * Field Id
       * @description The field identifier.
       */
      fieldId: number;
      /**
       * Field Value
       * @description The value provided while creation or updating. The fieldValue can be a string, an integer, or an array and it must match the type of the field.
       */
      fieldValue: string | null;
  }[] | null;
  /**
   * Include All Fields
   * @description Specify if all the fields should be returned in the response body.
   * @default null
   */
  includeAllFields: boolean | null;
  /**
   * Include Fields
   * @description Specify which fields should be returned in the response body.
   * @default null
   */
  includeFields: string[] | null;
  /**
   * UpdateProjectByIdRequestOwner
   * @description The project owner details.
   * @default null
   */
  owner: {
      /**
       * Email Id
       * @description The project owner's email identifier.
       * @default null
       */
      emailId: string | null;
      /**
       * First Name
       * @description The first name of the project owner.
       * @default null
       */
      firstName: string | null;
      /**
       * Last Name
       * @description The last name of the project owner.
       * @default null
       */
      lastName: string | null;
      /**
       * User Id
       * @description The unique identifier for project owner.
       * @default null
       */
      userId: number | null;
  } | null;
  /**
   * Project Fee
   * @description The total fee that is charged for the project.
   * @default null
   */
  projectFee: number | null;
  /**
   * Project Id
   * @description The project’s unique, system-generated identifier, which can be used to identify the project globally.
   */
  projectId?: number;
  /**
   * Project Name
   * @description The name of the project.
   * @default null
   */
  projectName: string | null;
  /**
   * Start Date
   * @description On this date the project's execution officially begins. Format: YYYY-MM-DD.
   * @default null
   */
  startDate: string | null;
  /**
   * UpdateProjectByIdRequestStatus
   * @description The project status details.
   * @default null
   */
  status: {
      /**
       * Label
       * @description The label is the name of the status.
       * @default null
       */
      label: string | null;
      /**
       * Value
       * @description The value of the status field is the unique identifier for status fields.
       * @default null
       */
      value: number | null;
  } | null;
  /**
   * Visibility
   * @description Set visibility parameters to restrict who can see your project. Options: EVERYONE, MEMBERS.
   * @default null
   */
  visibility: string | null;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_UPDATE_PROJECT_BY_ID tool output.
 */
type ROCKETLANE_UPDATE_PROJECT_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Project Id
       * @description The project’s unique, system-generated identifier.
       * @default null
       */
      projectId: number | null;
      /**
       * Project Name
       * @description The name of the project.
       * @default null
       */
      projectName: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_UPDATE_TIME_ENTRY_BY_ID tool input.
 */
type ROCKETLANE_UPDATE_TIME_ENTRY_BY_ID_INPUT = {
  /**
   * Activity Name
   * @description The name of the activity.
   * @default null
   */
  activity_name: string | null;
  /**
   * Billable
   * @description Whether the time entry is billable.
   * @default null
   */
  billable: boolean | null;
  /**
   * Date
   * @description The date of the time entry in YYYY-MM-DD format.
   */
  date?: string;
  /**
   * Minutes
   * @description The duration of the time entry in minutes.
   */
  minutes?: number;
  /**
   * Notes
   * @description Any notes associated with the time entry.
   * @default null
   */
  notes: string | null;
  /**
   * Time Entry Id
   * @description The ID of the time entry to update.
   */
  time_entry_id?: string;
};

/**
 * Type of ROCKETLANE's ROCKETLANE_UPDATE_TIME_ENTRY_BY_ID tool output.
 */
type ROCKETLANE_UPDATE_TIME_ENTRY_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A message indicating the result of the operation.
       * @default null
       */
      message: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "ROCKETLANE".
 */
export type ROCKETLANE_TOOL_INPUTS = {
  ARCHIVE_PROJECT_BY_ID: ROCKETLANE_ARCHIVE_PROJECT_BY_ID_INPUT
  CREATE_COMPANY: ROCKETLANE_CREATE_COMPANY_INPUT
  CREATE_TASK: ROCKETLANE_CREATE_TASK_INPUT
  CREATE_TIME_ENTRY: ROCKETLANE_CREATE_TIME_ENTRY_INPUT
  DELETE_PROJECT: ROCKETLANE_DELETE_PROJECT_INPUT
  DELETE_TASK_BY_ID: ROCKETLANE_DELETE_TASK_BY_ID_INPUT
  DELETE_TIME_ENTRY_BY_ID: ROCKETLANE_DELETE_TIME_ENTRY_BY_ID_INPUT
  GET_ALL_FIELDS: ROCKETLANE_GET_ALL_FIELDS_INPUT
  GET_COMPANY: ROCKETLANE_GET_COMPANY_INPUT
  GET_FIELD_BY_ID: ROCKETLANE_GET_FIELD_BY_ID_INPUT
  GET_PROJECT_BY_ID: ROCKETLANE_GET_PROJECT_BY_ID_INPUT
  GET_TASK_BY_ID: ROCKETLANE_GET_TASK_BY_ID_INPUT
  GET_TEMPLATE_BY_ID: ROCKETLANE_GET_TEMPLATE_BY_ID_INPUT
  GET_TIME_ENTRIES: ROCKETLANE_GET_TIME_ENTRIES_INPUT
  GET_TIME_ENTRY_BY_ID: ROCKETLANE_GET_TIME_ENTRY_BY_ID_INPUT
  GET_USER_BY_ID: ROCKETLANE_GET_USER_BY_ID_INPUT
  LIST_COMPANIES: ROCKETLANE_LIST_COMPANIES_INPUT
  LIST_COMPANY_FIELDS: ROCKETLANE_LIST_COMPANY_FIELDS_INPUT
  LIST_COMPANY_NOTE_FIELDS: ROCKETLANE_LIST_COMPANY_NOTE_FIELDS_INPUT
  LIST_CURRENCIES: ROCKETLANE_LIST_CURRENCIES_INPUT
  LIST_CUSTOMER_USERS: ROCKETLANE_LIST_CUSTOMER_USERS_INPUT
  LIST_PROJECTS: ROCKETLANE_LIST_PROJECTS_INPUT
  LIST_PROJECT_FIELDS: ROCKETLANE_LIST_PROJECT_FIELDS_INPUT
  LIST_PROJECT_PHASES: ROCKETLANE_LIST_PROJECT_PHASES_INPUT
  LIST_TASK_FIELDS: ROCKETLANE_LIST_TASK_FIELDS_INPUT
  LIST_TEMPLATES: ROCKETLANE_LIST_TEMPLATES_INPUT
  LIST_USERS: ROCKETLANE_LIST_USERS_INPUT
  LIST_VENDOR_USERS: ROCKETLANE_LIST_VENDOR_USERS_INPUT
  RETRIEVE_SUBSCRIPTION_DETAILS: ROCKETLANE_RETRIEVE_SUBSCRIPTION_DETAILS_INPUT
  SEARCH_USER_BY_EMAIL: ROCKETLANE_SEARCH_USER_BY_EMAIL_INPUT
  UPDATE_COMPANY: ROCKETLANE_UPDATE_COMPANY_INPUT
  UPDATE_PROJECT_BY_ID: ROCKETLANE_UPDATE_PROJECT_BY_ID_INPUT
  UPDATE_TIME_ENTRY_BY_ID: ROCKETLANE_UPDATE_TIME_ENTRY_BY_ID_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ROCKETLANE".
 */
export type ROCKETLANE_TOOL_OUTPUTS = {
  ARCHIVE_PROJECT_BY_ID: ROCKETLANE_ARCHIVE_PROJECT_BY_ID_OUTPUT
  CREATE_COMPANY: ROCKETLANE_CREATE_COMPANY_OUTPUT
  CREATE_TASK: ROCKETLANE_CREATE_TASK_OUTPUT
  CREATE_TIME_ENTRY: ROCKETLANE_CREATE_TIME_ENTRY_OUTPUT
  DELETE_PROJECT: ROCKETLANE_DELETE_PROJECT_OUTPUT
  DELETE_TASK_BY_ID: ROCKETLANE_DELETE_TASK_BY_ID_OUTPUT
  DELETE_TIME_ENTRY_BY_ID: ROCKETLANE_DELETE_TIME_ENTRY_BY_ID_OUTPUT
  GET_ALL_FIELDS: ROCKETLANE_GET_ALL_FIELDS_OUTPUT
  GET_COMPANY: ROCKETLANE_GET_COMPANY_OUTPUT
  GET_FIELD_BY_ID: ROCKETLANE_GET_FIELD_BY_ID_OUTPUT
  GET_PROJECT_BY_ID: ROCKETLANE_GET_PROJECT_BY_ID_OUTPUT
  GET_TASK_BY_ID: ROCKETLANE_GET_TASK_BY_ID_OUTPUT
  GET_TEMPLATE_BY_ID: ROCKETLANE_GET_TEMPLATE_BY_ID_OUTPUT
  GET_TIME_ENTRIES: ROCKETLANE_GET_TIME_ENTRIES_OUTPUT
  GET_TIME_ENTRY_BY_ID: ROCKETLANE_GET_TIME_ENTRY_BY_ID_OUTPUT
  GET_USER_BY_ID: ROCKETLANE_GET_USER_BY_ID_OUTPUT
  LIST_COMPANIES: ROCKETLANE_LIST_COMPANIES_OUTPUT
  LIST_COMPANY_FIELDS: ROCKETLANE_LIST_COMPANY_FIELDS_OUTPUT
  LIST_COMPANY_NOTE_FIELDS: ROCKETLANE_LIST_COMPANY_NOTE_FIELDS_OUTPUT
  LIST_CURRENCIES: ROCKETLANE_LIST_CURRENCIES_OUTPUT
  LIST_CUSTOMER_USERS: ROCKETLANE_LIST_CUSTOMER_USERS_OUTPUT
  LIST_PROJECTS: ROCKETLANE_LIST_PROJECTS_OUTPUT
  LIST_PROJECT_FIELDS: ROCKETLANE_LIST_PROJECT_FIELDS_OUTPUT
  LIST_PROJECT_PHASES: ROCKETLANE_LIST_PROJECT_PHASES_OUTPUT
  LIST_TASK_FIELDS: ROCKETLANE_LIST_TASK_FIELDS_OUTPUT
  LIST_TEMPLATES: ROCKETLANE_LIST_TEMPLATES_OUTPUT
  LIST_USERS: ROCKETLANE_LIST_USERS_OUTPUT
  LIST_VENDOR_USERS: ROCKETLANE_LIST_VENDOR_USERS_OUTPUT
  RETRIEVE_SUBSCRIPTION_DETAILS: ROCKETLANE_RETRIEVE_SUBSCRIPTION_DETAILS_OUTPUT
  SEARCH_USER_BY_EMAIL: ROCKETLANE_SEARCH_USER_BY_EMAIL_OUTPUT
  UPDATE_COMPANY: ROCKETLANE_UPDATE_COMPANY_OUTPUT
  UPDATE_PROJECT_BY_ID: ROCKETLANE_UPDATE_PROJECT_BY_ID_OUTPUT
  UPDATE_TIME_ENTRY_BY_ID: ROCKETLANE_UPDATE_TIME_ENTRY_BY_ID_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ROCKETLANE toolkit.
 */
export const ROCKETLANE = {
  slug: "rocketlane",
  tools: {
    /**
     * Archives a specific project based on its unique identifier.
     */
    ARCHIVE_PROJECT_BY_ID: "ROCKETLANE_ARCHIVE_PROJECT_BY_ID",
    /**
     * Creates a new company (account) in rocketlane. this action allows you to create a new company/account in your rocketlane workspace. it complements existing company-related actions by providing the ability to register new accounts using the post /api/v2/companies endpoint.
     */
    CREATE_COMPANY: "ROCKETLANE_CREATE_COMPANY",
    /**
     * Creates a new task.
     */
    CREATE_TASK: "ROCKETLANE_CREATE_TASK",
    /**
     * Tool to create a new time entry in rocketlane. this endpoint allows users to log time spent on tasks or projects. it complements the existing rocketlane get time entries action and enables complete time tracking functionality within the rocketlane integration.
     */
    CREATE_TIME_ENTRY: "ROCKETLANE_CREATE_TIME_ENTRY",
    /**
     * This tool allows users to permanently delete a project in rocketlane. it requires a valid project id and appropriate permissions (admins, super users, and project owners). note that deletion is irreversible; therefore, consider using archival if future access might be needed.
     */
    DELETE_PROJECT: "ROCKETLANE_DELETE_PROJECT",
    /**
     * Delete a specific task using its unique identifier (taskid).
     */
    DELETE_TASK_BY_ID: "ROCKETLANE_DELETE_TASK_BY_ID",
    /**
     * Delete a specific time entry using its unique identifier (timeentryid).
     */
    DELETE_TIME_ENTRY_BY_ID: "ROCKETLANE_DELETE_TIME_ENTRY_BY_ID",
    /**
     * Retrieve all custom fields available in the system.
     */
    GET_ALL_FIELDS: "ROCKETLANE_GET_ALL_FIELDS",
    /**
     * This tool retrieves detailed information about a specific company/account in rocketlane by its id. it provides comprehensive information about the company including its status, address, currency, created date, updated date, custom fields, and other relevant metadata.
     */
    GET_COMPANY: "ROCKETLANE_GET_COMPANY",
    /**
     * Retrieve detailed information about a specific custom field using its unique identifier (fieldid).
     */
    GET_FIELD_BY_ID: "ROCKETLANE_GET_FIELD_BY_ID",
    /**
     * Retrieves detailed information about a specific project using its unique identifier.
     */
    GET_PROJECT_BY_ID: "ROCKETLANE_GET_PROJECT_BY_ID",
    /**
     * Retrieve extensive information about a specific task using the task's unique identifier (taskid).
     */
    GET_TASK_BY_ID: "ROCKETLANE_GET_TASK_BY_ID",
    /**
     * Retrieve detailed information about a specific template using its unique identifier (templateid). note: the exact api endpoint and response structure need to be verified from the official rocketlane api documentation.
     */
    GET_TEMPLATE_BY_ID: "ROCKETLANE_GET_TEMPLATE_BY_ID",
    /**
     * Tool to retrieve all time entries from rocketlane. it provides endpoints to get time entries with support for pagination, filtering by project id, user id, start and end dates. this allows tracking of time spent on various tasks, generating reports, and analyzing team productivity.
     */
    GET_TIME_ENTRIES: "ROCKETLANE_GET_TIME_ENTRIES",
    /**
     * Retrieve detailed information about a specific time entry using its unique identifier (timeentryid).
     */
    GET_TIME_ENTRY_BY_ID: "ROCKETLANE_GET_TIME_ENTRY_BY_ID",
    /**
     * Retrieve detailed information about a specific user using their unique identifier (userid).
     */
    GET_USER_BY_ID: "ROCKETLANE_GET_USER_BY_ID",
    /**
     * This tool retrieves a list of all companies/accounts in rocketlane. it's a basic get endpoint that returns all companies without requiring any specific resource ids or additional parameters. the endpoint is independent and can be executed with just the authentication token.
     */
    LIST_COMPANIES: "ROCKETLANE_LIST_COMPANIES",
    /**
     * This tool retrieves a list of all available company/account fields in rocketlane. these fields represent the various attributes and properties that can be associated with companies/accounts in the rocketlane system.
     */
    LIST_COMPANY_FIELDS: "ROCKETLANE_LIST_COMPANY_FIELDS",
    /**
     * This tool retrieves a list of all available note fields for companies in rocketlane. company note fields are custom fields that can be added to company/account notes for better organization and data collection. it provides details such as field id, name, type, required, options, and description for each note field.
     */
    LIST_COMPANY_NOTE_FIELDS: "ROCKETLANE_LIST_COMPANY_NOTE_FIELDS",
    /**
     * Returns a predefined list of commonly used currencies since rocketlane api doesn't provide a dedicated currencies endpoint. this list includes major global currencies with their codes, names, and symbols.
     */
    LIST_CURRENCIES: "ROCKETLANE_LIST_CURRENCIES",
    /**
     * List customer users.
     */
    LIST_CUSTOMER_USERS: "ROCKETLANE_LIST_CUSTOMER_USERS",
    /**
     * This tool retrieves a list of all projects in the rocketlane instance. it provides project details including project id, project name, project status, created date, owner information, customer information, and other metadata.
     */
    LIST_PROJECTS: "ROCKETLANE_LIST_PROJECTS",
    /**
     * This tool retrieves a list of all project fields in rocketlane, including both default and custom fields. it provides definitions, metadata, and configuration details for each field, which is essential for understanding project structure, managing projects, and integrating project management workflows.
     */
    LIST_PROJECT_FIELDS: "ROCKETLANE_LIST_PROJECT_FIELDS",
    /**
     * This tool retrieves a list of project phases from rocketlane. it allows users to fetch and filter phases based on various parameters including projectid, startdate, duedate, startdateactual, duedateactual, phasename, sortby, sortorder, limit, and pagetoken. the api supports various operators for filtering such as .gt, .eq, .lt, .ge, .le, .cn, and .nc.
     */
    LIST_PROJECT_PHASES: "ROCKETLANE_LIST_PROJECT_PHASES",
    /**
     * This tool retrieves a list of all task fields in rocketlane. it allows users to get comprehensive field data and details for tasks, and supports various query parameters for filtering, pagination, and sorting.
     */
    LIST_TASK_FIELDS: "ROCKETLANE_LIST_TASK_FIELDS",
    /**
     * This tool retrieves a list of all available templates in rocketlane. it fetches all available templates in the account and returns a list of template objects containing details like template id, name, description, created at, updated at, is dynamic, and has automations.
     */
    LIST_TEMPLATES: "ROCKETLANE_LIST_TEMPLATES",
    /**
     * This tool retrieves all users in the rocketlane instance. it is an independent action that does not require any resource ids or external dependencies. the endpoint returns detailed user information including user ids, emails, names, roles, and statuses.
     */
    LIST_USERS: "ROCKETLANE_LIST_USERS",
    /**
     * List vendor users by filtering users with type 'partner'. this action retrieves users from the /api/1.0/users endpoint and applies a filter. the filter used is "type:equal:partner".
     */
    LIST_VENDOR_USERS: "ROCKETLANE_LIST_VENDOR_USERS",
    /**
     * Retrieves detailed information about the current subscription.
     */
    RETRIEVE_SUBSCRIPTION_DETAILS: "ROCKETLANE_RETRIEVE_SUBSCRIPTION_DETAILS",
    /**
     * Search user by email id.
     */
    SEARCH_USER_BY_EMAIL: "ROCKETLANE_SEARCH_USER_BY_EMAIL",
    /**
     * This tool updates an existing company/account in rocketlane. it uses the put endpoint to update the company details identified by companyid. the action complements the existing create company action and is essential for maintaining up-to-date company information, relying on rocketlane's api specifications and company management endpoints.
     */
    UPDATE_COMPANY: "ROCKETLANE_UPDATE_COMPANY",
    /**
     * Updates an existing project's details using its unique identifier.
     */
    UPDATE_PROJECT_BY_ID: "ROCKETLANE_UPDATE_PROJECT_BY_ID",
    /**
     * Update existing time entry details using its unique identifier (timeentryid).
     */
    UPDATE_TIME_ENTRY_BY_ID: "ROCKETLANE_UPDATE_TIME_ENTRY_BY_ID",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ROCKETLANE".
 */
export type ROCKETLANE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ROCKETLANE".
 */
export type ROCKETLANE_TRIGGER_EVENTS = {}
