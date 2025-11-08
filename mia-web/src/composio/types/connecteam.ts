// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CONNECTEAM's CONNECTEAM_ARCHIVE_USERS tool input.
 */
type CONNECTEAM_ARCHIVE_USERS_INPUT = {
  /**
   * User Ids
   * @description List of unique user IDs to archive.
   */
  userIds?: number[];
};

/**
 * Type of CONNECTEAM's CONNECTEAM_ARCHIVE_USERS tool output.
 */
type CONNECTEAM_ARCHIVE_USERS_OUTPUT = {
  /**
   * Data
   * @description Response data including operation success status.
   */
  data?: {
      /**
       * Success
       * @description Whether the users were archived successfully.
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
   * Request Id
   * @description Unique identifier for this request.
   */
  requestId?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CONNECTEAM's CONNECTEAM_CREATE_USERS tool input.
 */
type CONNECTEAM_CREATE_USERS_INPUT = {
  /**
   * Users
   * @description List of users to create in batch
   */
  users?: {
      /**
       * Custom Fields
       * @description Optional list of custom fields to assign to the user
       * @default null
       */
      customFields: {
          /**
           * Custom Field Id
           * @description ID of the custom field defined in Connecteam
           */
          customFieldId: number;
          /**
           * Value
           * @description Value for the custom field; type must match field definition
           */
          value: string | null;
      }[] | null;
      /**
       * Email
       * Format: email
       * @description User's email address. Required if userType is 'admin'
       * @default null
       */
      email: unknown;
      /**
       * First Name
       * @description User's first name
       */
      firstName: string;
      /**
       * Is Archived
       * @description Whether the user is archived. Defaults to false
       * @default false
       */
      isArchived: boolean | null;
      /**
       * Last Name
       * @description User's last name
       */
      lastName: string;
      /**
       * Phone Number
       * @description Phone number in E.164 format, e.g., '+11234567890'
       */
      phoneNumber: unknown;
      /**
       * User Type
       * @description Role of the new user: 'user' or 'admin'
       * @enum {string}
       */
      userType: "user" | "admin";
  }[];
};

/**
 * Type of CONNECTEAM's CONNECTEAM_CREATE_USERS tool output.
 */
type CONNECTEAM_CREATE_USERS_OUTPUT = {
  /**
   * Data
   * @description Container for created user objects
   */
  data?: {
      /**
       * Results
       * @description Array of created user objects
       */
      results: {
          /** Custom Fields */
          customFields: {
              /**
               * Custom Field Id
               * @description ID of the custom field defined in Connecteam
               */
              customFieldId: number;
              /**
               * Value
               * @description Value for the custom field; type must match field definition
               */
              value: string | null;
          }[];
          /** First Name */
          firstName: string;
          /** Is Archived */
          isArchived: boolean;
          /** Last Name */
          lastName: string;
          /** Phone Number */
          phoneNumber: string;
          /** User Id */
          userId: number;
          /** User Type */
          userType: string;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Request Id
   * @description Unique request identifier
   */
  requestId?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CONNECTEAM's CONNECTEAM_GENERATE_UPLOAD_URL tool input.
 */
type CONNECTEAM_GENERATE_UPLOAD_URL_INPUT = {
  /**
   * Feature Type
   * @description Application feature associated with the file, such as 'chat'
   */
  featureType?: string;
  /**
   * File Name
   * @description Name of the file to be uploaded, e.g., 'document.pdf'
   */
  fileName?: string;
  /**
   * File Type Hint
   * @description Optional MIME type hint for the file, e.g., 'image/jpeg' or 'application/pdf'
   * @default null
   */
  fileTypeHint: string | null;
};

/**
 * Type of CONNECTEAM's CONNECTEAM_GENERATE_UPLOAD_URL tool output.
 */
type CONNECTEAM_GENERATE_UPLOAD_URL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Id
       * @description Unique identifier for the uploaded file
       */
      fileId: string;
      /**
       * Upload Url
       * @description Pre-signed URL for uploading the file
       */
      uploadUrl: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CONNECTEAM's CONNECTEAM_GET_CHAT tool input.
 */
type CONNECTEAM_GET_CHAT_INPUT = object;

/**
 * Type of CONNECTEAM's CONNECTEAM_GET_CHAT tool output.
 */
type CONNECTEAM_GET_CHAT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Conversations
       * @description List of chat conversations for the account
       */
      conversations: {
          /**
           * Created At
           * Format: date-time
           * @description Creation timestamp of the conversation
           */
          createdAt: string;
          /**
           * Id
           * @description Conversation ID
           */
          id: string;
          /**
           * Last Message
           * @description Last message in the conversation
           */
          lastMessage: {
              /**
               * Content
               * @description Content of the last message
               */
              content: string;
              /**
               * Message Id
               * @description Message ID of the last message
               */
              messageId: string;
              /**
               * Sender Id
               * @description User ID of the sender of the last message
               */
              senderId: string;
              /**
               * Timestamp
               * Format: date-time
               * @description Timestamp of the last message in ISO 8601 format
               */
              timestamp: string;
          };
          /**
           * Name
           * @description Name of the conversation (team chat or channel)
           * @default null
           */
          name: string | null;
          /**
           * Participants
           * @description List of participants
           */
          participants: {
              /**
               * Name
               * @description Name of the participant
               */
              name: string;
              /**
               * User Id
               * @description User ID of the participant
               */
              userId: string;
          }[];
          /**
           * Type
           * @description Type of the conversation
           * @enum {string}
           */
          type: "team" | "channel" | "private";
          /**
           * Unread Count
           * @description Number of unread messages in the conversation
           */
          unreadCount: number;
          /**
           * Updated At
           * Format: date-time
           * @description Last updated timestamp of the conversation
           */
          updatedAt: string;
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
 * Type of CONNECTEAM's CONNECTEAM_GET_CUSTOM_FIELDS tool input.
 */
type CONNECTEAM_GET_CUSTOM_FIELDS_INPUT = {
  /**
   * Category Ids
   * @description Custom field category IDs to filter by
   * @default null
   */
  categoryIds: number[] | null;
  /**
   * Custom Field Ids
   * @description Custom field IDs to filter by
   * @default null
   */
  customFieldIds: number[] | null;
  /**
   * Custom Field Names
   * @description Custom field names to filter by
   * @default null
   */
  customFieldNames: string[] | null;
  /**
   * Custom Field Types
   * @description Custom field types to filter by
   * @default null
   */
  customFieldTypes: string[] | null;
  /**
   * Limit
   * @description Maximum number of results per page (1-500)
   * @default 10
   */
  limit: number | null;
  /**
   * Offset
   * @description Resource offset for pagination (>=0)
   * @default 0
   */
  offset: number | null;
  /**
   * Order
   * @description Sort order, only honored if 'sort' is set
   * @default asc
   * @enum {string}
   */
  order: "asc" | "desc";
  /**
   * Sort
   * @description Sort key: 'id', 'name', or 'type'
   * @default null
   * @enum {string|null}
   */
  sort: "id" | "name" | "type" | null;
};

/**
 * Type of CONNECTEAM's CONNECTEAM_GET_CUSTOM_FIELDS tool output.
 */
type CONNECTEAM_GET_CUSTOM_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Response data payload
   */
  data?: {
      /**
       * Custom Fields
       * @description List of custom fields matching the filter criteria
       */
      customFields: {
          /**
           * Category Id
           * @description Category ID this field belongs to
           */
          categoryId: number;
          /**
           * Dropdown Options
           * @description Dropdown options if the field type is 'dropdown'
           * @default null
           */
          dropdownOptions: {
              /**
               * Id
               * @description ID of the dropdown option
               */
              id: number;
              /**
               * Is Deleted
               * @description Whether the option is deleted
               */
              isDeleted: boolean;
              /**
               * Is Disabled
               * @description Whether the option is disabled
               */
              isDisabled: boolean;
              /**
               * Value
               * @description Value of the dropdown option
               */
              value: string;
          }[] | null;
          /**
           * Id
           * @description Unique identifier for the custom field
           */
          id: number;
          /**
           * Is Editable For All Admins
           * @description Editable by all admins flag
           */
          isEditableForAllAdmins: boolean;
          /**
           * Is Editable For Users
           * @description Editable by end users flag
           */
          isEditableForUsers: boolean;
          /**
           * Is Multi Select
           * @description Whether multiple options can be selected
           * @default null
           */
          isMultiSelect: boolean | null;
          /**
           * Is Required
           * @description Whether the field is required for all users
           */
          isRequired: boolean;
          /**
           * Is Visible To All Admins
           * @description Visible to all admins flag
           */
          isVisibleToAllAdmins: boolean;
          /**
           * Is Visible To Users
           * @description Visible to end users flag
           */
          isVisibleToUsers: boolean;
          /**
           * Name
           * @description Name of the custom field
           */
          name: string;
          /**
           * Type
           * @description Type of the custom field
           */
          type: string;
      }[];
      /**
       * Paging
       * @description Pagination information
       */
      paging: {
          /**
           * Offset
           * @description Offset for the next set of results
           */
          offset: number;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Request Id
   * @description Unique request identifier
   */
  requestId?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CONNECTEAM's CONNECTEAM_GET_CUSTOM_FIELD_CATEGORIES tool input.
 */
type CONNECTEAM_GET_CUSTOM_FIELD_CATEGORIES_INPUT = {
  /**
   * Category Ids
   * @description List of custom field category IDs to filter results
   * @default null
   */
  categoryIds: number[] | null;
  /**
   * Limit
   * @description Maximum number of custom field categories to retrieve
   * @default null
   */
  limit: number | null;
  /**
   * Names
   * @description List of custom field category names to filter results
   * @default null
   */
  names: string[] | null;
};

/**
 * Type of CONNECTEAM's CONNECTEAM_GET_CUSTOM_FIELD_CATEGORIES tool output.
 */
type CONNECTEAM_GET_CUSTOM_FIELD_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Response data including categories
   */
  data?: {
      /**
       * Categories
       * @description List of custom field category objects
       */
      categories: {
          /**
           * Id
           * @description Unique identifier of the custom field category
           */
          id: number;
          /**
           * Name
           * @description Name of the custom field category
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
   * Paging
   * @description Pagination details
   */
  paging?: {
      /**
       * Offset
       * @description Offset for the next set of results
       */
      offset: number;
  };
  /**
   * Request Id
   * @description Unique identifier for the request
   */
  requestId?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CONNECTEAM's CONNECTEAM_GET_FORMS tool input.
 */
type CONNECTEAM_GET_FORMS_INPUT = object;

/**
 * Type of CONNECTEAM's CONNECTEAM_GET_FORMS tool output.
 */
type CONNECTEAM_GET_FORMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Forms
       * @description List of form objects retrieved from Connecteam
       */
      forms: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the form was created
           */
          createdAt: string;
          /**
           * Description
           * @description Description of the form, if provided
           * @default null
           */
          description: string | null;
          /**
           * Fields
           * @description List of fields defined in the form
           */
          fields: {
              /**
               * Id
               * @description Unique identifier of the form field
               */
              id: string;
              /**
               * Label
               * @description Label of the form field
               */
              label: string;
              /**
               * Options
               * @description List of options for select-type fields, if applicable
               * @default null
               */
              options: string[] | null;
              /**
               * Required
               * @description Whether the field is required
               */
              required: boolean;
              /**
               * Type
               * @description Type of the form field (e.g., 'text', 'select')
               */
              type: string;
          }[];
          /**
           * Id
           * @description Unique identifier of the form
           */
          id: string;
          /**
           * Name
           * @description Name of the form
           */
          name: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the form was last updated
           */
          updatedAt: string;
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
 * Type of CONNECTEAM's CONNECTEAM_GET_JOBS tool input.
 */
type CONNECTEAM_GET_JOBS_INPUT = {
  /**
   * Include Deleted
   * @description Whether to include deleted jobs in the response. Defaults to true.
   * @default true
   */
  includeDeleted: boolean | null;
  /**
   * Instance Ids
   * @description List of instance IDs (scheduler or time clock) to filter by. Only one allowed.
   * @default null
   */
  instanceIds: string[] | null;
  /**
   * Job Codes
   * @description List of job codes to filter by. Returns matching sub-jobs and their parents.
   * @default null
   */
  jobCodes: string[] | null;
  /**
   * Job Ids
   * @description List of job IDs to filter by. Includes nested sub-jobs under each parent.
   * @default null
   */
  jobIds: string[] | null;
  /**
   * Job Names
   * @description List of job names to filter by. Returns matching sub-jobs and their parents.
   * @default null
   */
  jobNames: string[] | null;
  /**
   * Limit
   * @description Maximum number of records to return per page.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of records to skip before starting to collect the result set.
   * @default null
   */
  offset: number | null;
  /**
   * Order
   * @description Sort direction. Defaults to ascending.
   * @default asc
   * @enum {string}
   */
  order: "asc" | "desc";
  /**
   * Sort
   * @description Sort key for ordering results. Currently only 'name' is supported.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of CONNECTEAM's CONNECTEAM_GET_JOBS tool output.
 */
type CONNECTEAM_GET_JOBS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Jobs
       * @description List of jobs matching the filter criteria
       */
      jobs: {
          /**
           * Code
           * @description Code associated with the job
           */
          code: string;
          /**
           * Created At
           * @description ISO8601 timestamp when the job was created
           */
          createdAt: string;
          /**
           * Id
           * @description Unique identifier for the job
           */
          id: string;
          /**
           * Instance Id
           * @description Instance ID (scheduler or time clock) associated with this job
           */
          instanceId: string;
          /**
           * Is Deleted
           * @description Indicates if the job has been deleted
           */
          isDeleted: boolean;
          /**
           * Name
           * @description Name of the job
           */
          name: string;
          /**
           * Parent Id
           * @description ID of the parent job if this is a sub-job
           * @default null
           */
          parentId: string | null;
          /**
           * Updated At
           * @description ISO8601 timestamp when the job was last updated
           */
          updatedAt: string;
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
 * Type of CONNECTEAM's CONNECTEAM_GET_PERFORMANCE_INDICATORS tool input.
 */
type CONNECTEAM_GET_PERFORMANCE_INDICATORS_INPUT = {
  /**
   * Limit
   * @description Maximum number of performance indicators to return per page (1-100, default is 10)
   * @default 10
   */
  limit: number | null;
  /**
   * Offset
   * @description Resource offset for pagination (>=0, default is 0)
   * @default 0
   */
  offset: number | null;
};

/**
 * Type of CONNECTEAM's CONNECTEAM_GET_PERFORMANCE_INDICATORS tool output.
 */
type CONNECTEAM_GET_PERFORMANCE_INDICATORS_OUTPUT = {
  /**
   * Data
   * @description Response data payload with indicators and paging
   */
  data?: {
      /**
       * Indicators
       * @description List of performance metric indicators
       */
      indicators: {
          /**
           * Description
           * @description Detailed description of the performance indicator
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the performance indicator
           */
          id: string;
          /**
           * Name
           * @description Display name of the performance indicator
           */
          name: string;
          /**
           * Unit
           * @description Unit of measurement for the indicator
           * @default null
           */
          unit: string | null;
      }[];
      /**
       * Paging
       * @description Pagination details
       */
      paging: {
          /**
           * Offset
           * @description Offset for the next set of results
           */
          offset: number;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Request Id
   * @description Unique request identifier, if returned by the API
   * @default null
   */
  requestId: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CONNECTEAM's CONNECTEAM_GET_POLICY_TYPES tool input.
 */
type CONNECTEAM_GET_POLICY_TYPES_INPUT = object;

/**
 * Type of CONNECTEAM's CONNECTEAM_GET_POLICY_TYPES tool output.
 */
type CONNECTEAM_GET_POLICY_TYPES_OUTPUT = {
  /**
   * Data
   * @description Container for policy types list
   */
  data?: {
      /**
       * Policy Types
       * @description List of available time-off policy types
       */
      policyTypes: {
          /**
           * Id
           * @description Unique identifier of the time-off policy type
           */
          id: string;
          /**
           * Name
           * @description Name of the time-off policy type (e.g., 'Paid Time Off')
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
   * Request Id
   * @description Internal request identifier returned by Connecteam
   */
  requestId?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CONNECTEAM's CONNECTEAM_GET_PUBLISHERS tool input.
 */
type CONNECTEAM_GET_PUBLISHERS_INPUT = {
  /**
   * Limit
   * @description Maximum number of publishers to return per page (1-100).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset for pagination; the number of items to skip.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of CONNECTEAM's CONNECTEAM_GET_PUBLISHERS tool output.
 */
type CONNECTEAM_GET_PUBLISHERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Publishers
       * @description List of custom publishers associated with the account
       */
      publishers: {
          /**
           * Id
           * @description Unique identifier of the publisher
           */
          id: number;
          /**
           * Image Url
           * @description URL of the publisher’s image
           */
          imageUrl: string;
          /**
           * Name
           * @description Name of the publisher
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
 * Type of CONNECTEAM's CONNECTEAM_GET_SCHEDULERS tool input.
 */
type CONNECTEAM_GET_SCHEDULERS_INPUT = object;

/**
 * Type of CONNECTEAM's CONNECTEAM_GET_SCHEDULERS tool output.
 */
type CONNECTEAM_GET_SCHEDULERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Schedulers
       * @description List of scheduler objects associated with the account
       */
      schedulers: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the scheduler was created
           */
          createdAt: string;
          /**
           * Id
           * @description Unique identifier of the scheduler
           */
          id: string;
          /**
           * Name
           * @description Name of the scheduler
           */
          name: string;
          /**
           * Timezone
           * @description IANA timezone identifier of the scheduler
           */
          timezone: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the scheduler was last updated
           */
          updatedAt: string;
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
 * Type of CONNECTEAM's CONNECTEAM_GET_SMART_GROUPS tool input.
 */
type CONNECTEAM_GET_SMART_GROUPS_INPUT = object;

/**
 * Type of CONNECTEAM's CONNECTEAM_GET_SMART_GROUPS tool output.
 */
type CONNECTEAM_GET_SMART_GROUPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Smart Groups
       * @description List of smart group objects associated with the account
       */
      smartGroups: {
          /**
           * Condition
           * @description Filtering conditions for dynamic smart groups, if applicable
           * @default null
           */
          condition: {
              [key: string]: unknown;
          } | null;
          /**
           * Created At
           * @description Unix timestamp when the smart group was created
           * @default null
           */
          createdAt: number | null;
          /**
           * Id
           * @description Unique identifier for the smart group
           */
          id: number;
          /**
           * Name
           * @description Name of the smart group
           */
          name: string;
          /**
           * Number Of Users
           * @description Number of users in the smart group
           * @default null
           */
          numberOfUsers: number | null;
          /**
           * Type
           * @description Type of the smart group (e.g., 'static' or 'dynamic')
           * @default null
           */
          type: string | null;
          /**
           * Updated At
           * @description Unix timestamp when the smart group was last updated
           * @default null
           */
          updatedAt: number | null;
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
 * Type of CONNECTEAM's CONNECTEAM_GET_TASK_BOARDS tool input.
 */
type CONNECTEAM_GET_TASK_BOARDS_INPUT = object;

/**
 * Type of CONNECTEAM's CONNECTEAM_GET_TASK_BOARDS tool output.
 */
type CONNECTEAM_GET_TASK_BOARDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Task Boards
       * @description List of task boards associated with the account
       */
      taskBoards: {
          /**
           * Archived
           * @description Whether the task board is archived
           */
          archived: boolean;
          /**
           * Created At
           * @description ISO 8601 timestamp when the task board was created
           */
          createdAt: string;
          /**
           * Description
           * @description Description of the task board
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the task board
           */
          id: string;
          /**
           * Name
           * @description Name of the task board
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
 * Type of CONNECTEAM's CONNECTEAM_GET_USERS tool input.
 */
type CONNECTEAM_GET_USERS_INPUT = {
  /**
   * Created At
   * @description Filter users created after a specific Unix timestamp
   * @default null
   */
  createdAt: number | null;
  /**
   * Email Addresses
   * @description Filter by email addresses
   * @default null
   */
  emailAddresses: string[] | null;
  /**
   * Full Names
   * @description Filter by exact full names
   * @default null
   */
  fullNames: string[] | null;
  /**
   * Limit
   * @description Maximum number of results per page (1 to 500, default is 10)
   * @default null
   */
  limit: number | null;
  /**
   * Modified At
   * @description Filter users modified after a specific Unix timestamp
   * @default null
   */
  modifiedAt: number | null;
  /**
   * Offset
   * @description Resource offset for pagination (>= 0, default is 0)
   * @default null
   */
  offset: number | null;
  /**
   * Order
   * @description Order of results. Defaults to ascending.
   * @default asc
   * @enum {string}
   */
  order: "asc" | "desc";
  /**
   * Phone Numbers
   * @description Filter by phone numbers in E.164 format (e.g., +1234567890)
   * @default null
   */
  phoneNumbers: string[] | null;
  /**
   * Sort
   * @description Sorting criteria (e.g., creation time)
   * @default null
   */
  sort: string | null;
  /**
   * User Ids
   * @description List of user IDs to filter results
   * @default null
   */
  userIds: number[] | null;
  /**
   * User Status
   * @description Filter users by status (e.g., 'active')
   * @default null
   */
  userStatus: string | null;
};

/**
 * Type of CONNECTEAM's CONNECTEAM_GET_USERS tool output.
 */
type CONNECTEAM_GET_USERS_OUTPUT = {
  /**
   * Data
   * @description Response data including users and paging
   */
  data?: {
      /**
       * Paging
       * @description Pagination details
       */
      paging: {
          /**
           * Offset
           * @description Current offset for pagination
           */
          offset: number;
      };
      /**
       * Users
       * @description List of user objects
       */
      users: {
          /**
           * Created At
           * @description Unix timestamp of user creation
           */
          createdAt: number;
          /**
           * Custom Fields
           * @description List of custom fields assigned to the user
           */
          customFields?: {
              /**
               * Custom Field Id
               * @description ID of the custom field
               */
              customFieldId: number;
              /**
               * Name
               * @description Name of the custom field
               */
              name: string;
              /**
               * Type
               * @description Type of the custom field (e.g., 'str', 'date')
               */
              type: string;
              /**
               * Value
               * @description Value of the custom field
               */
              value: string;
          }[];
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
           * Is Archived
           * @description Indicates if the user is archived
           */
          isArchived: boolean;
          /**
           * Last Login
           * @description Unix timestamp of last login, if available
           * @default null
           */
          lastLogin: number | null;
          /**
           * Last Name
           * @description User's last name
           */
          lastName: string;
          /**
           * Modified At
           * @description Unix timestamp of last modification
           */
          modifiedAt: number;
          /**
           * Phone Number
           * @description User's phone number
           */
          phoneNumber: string;
          /**
           * Smart Groups Ids
           * @description IDs of smart groups the user belongs to
           */
          smartGroupsIds?: number[];
          /**
           * User Id
           * @description Unique identifier for the user
           */
          userId: number;
          /**
           * User Type
           * @description User's role (e.g., 'owner', 'admin', 'user')
           */
          userType: string;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Request Id
   * @description Unique identifier for the request
   */
  requestId?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "CONNECTEAM".
 */
export type CONNECTEAM_TOOL_INPUTS = {
  ARCHIVE_USERS: CONNECTEAM_ARCHIVE_USERS_INPUT
  CREATE_USERS: CONNECTEAM_CREATE_USERS_INPUT
  GENERATE_UPLOAD_URL: CONNECTEAM_GENERATE_UPLOAD_URL_INPUT
  GET_CHAT: CONNECTEAM_GET_CHAT_INPUT
  GET_CUSTOM_FIELDS: CONNECTEAM_GET_CUSTOM_FIELDS_INPUT
  GET_CUSTOM_FIELD_CATEGORIES: CONNECTEAM_GET_CUSTOM_FIELD_CATEGORIES_INPUT
  GET_FORMS: CONNECTEAM_GET_FORMS_INPUT
  GET_JOBS: CONNECTEAM_GET_JOBS_INPUT
  GET_PERFORMANCE_INDICATORS: CONNECTEAM_GET_PERFORMANCE_INDICATORS_INPUT
  GET_POLICY_TYPES: CONNECTEAM_GET_POLICY_TYPES_INPUT
  GET_PUBLISHERS: CONNECTEAM_GET_PUBLISHERS_INPUT
  GET_SCHEDULERS: CONNECTEAM_GET_SCHEDULERS_INPUT
  GET_SMART_GROUPS: CONNECTEAM_GET_SMART_GROUPS_INPUT
  GET_TASK_BOARDS: CONNECTEAM_GET_TASK_BOARDS_INPUT
  GET_USERS: CONNECTEAM_GET_USERS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CONNECTEAM".
 */
export type CONNECTEAM_TOOL_OUTPUTS = {
  ARCHIVE_USERS: CONNECTEAM_ARCHIVE_USERS_OUTPUT
  CREATE_USERS: CONNECTEAM_CREATE_USERS_OUTPUT
  GENERATE_UPLOAD_URL: CONNECTEAM_GENERATE_UPLOAD_URL_OUTPUT
  GET_CHAT: CONNECTEAM_GET_CHAT_OUTPUT
  GET_CUSTOM_FIELDS: CONNECTEAM_GET_CUSTOM_FIELDS_OUTPUT
  GET_CUSTOM_FIELD_CATEGORIES: CONNECTEAM_GET_CUSTOM_FIELD_CATEGORIES_OUTPUT
  GET_FORMS: CONNECTEAM_GET_FORMS_OUTPUT
  GET_JOBS: CONNECTEAM_GET_JOBS_OUTPUT
  GET_PERFORMANCE_INDICATORS: CONNECTEAM_GET_PERFORMANCE_INDICATORS_OUTPUT
  GET_POLICY_TYPES: CONNECTEAM_GET_POLICY_TYPES_OUTPUT
  GET_PUBLISHERS: CONNECTEAM_GET_PUBLISHERS_OUTPUT
  GET_SCHEDULERS: CONNECTEAM_GET_SCHEDULERS_OUTPUT
  GET_SMART_GROUPS: CONNECTEAM_GET_SMART_GROUPS_OUTPUT
  GET_TASK_BOARDS: CONNECTEAM_GET_TASK_BOARDS_OUTPUT
  GET_USERS: CONNECTEAM_GET_USERS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CONNECTEAM toolkit.
 */
export const CONNECTEAM = {
  slug: "connecteam",
  tools: {
    /**
     * Tool to archive one or more users by their unique ids. use when you need to deactivate users without deleting their records.
     */
    ARCHIVE_USERS: "CONNECTEAM_ARCHIVE_USERS",
    /**
     * Tool to create multiple users in connecteam. use when you need to add several staff or admin accounts at once.
     */
    CREATE_USERS: "CONNECTEAM_CREATE_USERS",
    /**
     * Tool to generate a pre-signed url for uploading a file. use when you need a secure, time-limited url prior to file upload.
     */
    GENERATE_UPLOAD_URL: "CONNECTEAM_GENERATE_UPLOAD_URL",
    /**
     * Tool to retrieve chat conversations. use when you need to list all team chats/channels after confirming your communications hub is on expert plan.
     */
    GET_CHAT: "CONNECTEAM_GET_CHAT",
    /**
     * Tool to retrieve all custom fields associated with the account. use when you need to filter, sort, or page through custom fields after authentication.
     */
    GET_CUSTOM_FIELDS: "CONNECTEAM_GET_CUSTOM_FIELDS",
    /**
     * Tool to retrieve all custom field categories. use when you need to list or filter custom field categories in your connecteam account.
     */
    GET_CUSTOM_FIELD_CATEGORIES: "CONNECTEAM_GET_CUSTOM_FIELD_CATEGORIES",
    /**
     * Tool to retrieve all form definitions from connecteam. use when you need to list all existing forms after enabling the forms api.
     */
    GET_FORMS: "CONNECTEAM_GET_FORMS",
    /**
     * Tool to retrieve a list of job objects relevant to a specific instance id. use after confirming scheduler or time clock instance id when you need to filter and page through jobs.
     */
    GET_JOBS: "CONNECTEAM_GET_JOBS",
    /**
     * Tool to retrieve the list of performance metric indicators. use when you need to list available performance indicators for data analysis. examples: "list performance metrics".
     */
    GET_PERFORMANCE_INDICATORS: "CONNECTEAM_GET_PERFORMANCE_INDICATORS",
    /**
     * Tool to retrieve available time-off policy types. use before filtering or creating time-off requests by policytypeid.
     */
    GET_POLICY_TYPES: "CONNECTEAM_GET_POLICY_TYPES",
    /**
     * Tool to retrieve a list of all custom publishers. use when you need to list custom publishers after confirming api access.
     */
    GET_PUBLISHERS: "CONNECTEAM_GET_PUBLISHERS",
    /**
     * Tool to retrieve a list of job schedulers associated with the account. use after authentication when you need to enumerate all schedulers.
     */
    GET_SCHEDULERS: "CONNECTEAM_GET_SCHEDULERS",
    /**
     * Tool to retrieve all smart groups associated with the account. use when you need to list all smart groups after authenticating with a valid api key.
     */
    GET_SMART_GROUPS: "CONNECTEAM_GET_SMART_GROUPS",
    /**
     * Tool to retrieve all task boards. use after authenticating with a valid api key to list available task boards.
     */
    GET_TASK_BOARDS: "CONNECTEAM_GET_TASK_BOARDS",
    /**
     * Tool to retrieve a list of all users associated with your account. use when you need to fetch and filter user data.
     */
    GET_USERS: "CONNECTEAM_GET_USERS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CONNECTEAM".
 */
export type CONNECTEAM_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CONNECTEAM".
 */
export type CONNECTEAM_TRIGGER_EVENTS = {}
