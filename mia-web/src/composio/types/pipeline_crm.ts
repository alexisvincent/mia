// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PIPELINE_CRM's PIPELINE_CRM_DELETE_COMPANY tool input.
 */
type PIPELINE_CRM_DELETE_COMPANY_INPUT = {
  /**
   * Id
   * @description Unique integer ID of the company to delete
   */
  id?: number;
};

/**
 * Type of PIPELINE_CRM's PIPELINE_CRM_DELETE_COMPANY tool output.
 */
type PIPELINE_CRM_DELETE_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Success or error message returned by Pipeline CRM
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the deletion was successful
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
 * Type of PIPELINE_CRM's PIPELINE_CRM_DELETE_DEAL tool input.
 */
type PIPELINE_CRM_DELETE_DEAL_INPUT = {
  /**
   * Id
   * @description Unique identifier of the deal to delete
   */
  id?: number;
};

/**
 * Type of PIPELINE_CRM's PIPELINE_CRM_DELETE_DEAL tool output.
 */
type PIPELINE_CRM_DELETE_DEAL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description API response message or error details
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the deal was deleted successfully
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
 * Type of PIPELINE_CRM's PIPELINE_CRM_GET_COMPANY tool input.
 */
type PIPELINE_CRM_GET_COMPANY_INPUT = {
  /**
   * Id
   * @description ID of the company to retrieve
   */
  id?: number;
};

/**
 * Type of PIPELINE_CRM's PIPELINE_CRM_GET_COMPANY tool output.
 */
type PIPELINE_CRM_GET_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description The company's address
       * @default null
       */
      address: string | null;
      /**
       * Created At
       * @description Timestamp when the company was created
       */
      created_at: string;
      /**
       * Email
       * @description The company's email address
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description Unique ID of the company
       */
      id: number;
      /**
       * Name
       * @description The company's name
       */
      name: string;
      /**
       * Phone
       * @description The company's phone number
       * @default null
       */
      phone: string | null;
      /**
       * Updated At
       * @description Timestamp when the company was last updated
       */
      updated_at: string;
      /**
       * Website Url
       * @description The company's website URL
       * @default null
       */
      website_url: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PIPELINE_CRM's PIPELINE_CRM_GET_DEAL tool input.
 */
type PIPELINE_CRM_GET_DEAL_INPUT = {
  /**
   * Id
   * @description Unique identifier of the deal to retrieve
   */
  id?: number;
};

/**
 * Type of PIPELINE_CRM's PIPELINE_CRM_GET_DEAL tool output.
 */
type PIPELINE_CRM_GET_DEAL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the deal was created
       */
      created_at: string;
      /**
       * Currency
       * @description Currency code or object for the deal's currency
       * @default null
       */
      currency: string | null;
      /**
       * Custom Fields
       * @description Custom field values map
       * @default null
       */
      custom_fields: {
          [key: string]: string | number | boolean | null;
      } | null;
      /**
       * Deal Stage Id
       * @description ID of the stage for this deal
       * @default null
       */
      deal_stage_id: number | null;
      /**
       * Expected Close Date
       * @description Expected close date of the deal
       * @default null
       */
      expected_close_date: string | null;
      /**
       * Id
       * @description Unique ID of the deal
       */
      id: number;
      /**
       * Linked Org Id
       * @description ID of an associated organization
       * @default null
       */
      linked_org_id: number | null;
      /**
       * Linked Person Id
       * @description ID of an associated person
       * @default null
       */
      linked_person_id: number | null;
      /**
       * Name
       * @description Name of the deal
       */
      name: string;
      /**
       * Owner Id
       * @description ID of the user who owns the deal
       * @default null
       */
      owner_id: number | null;
      /**
       * Probability
       * @description Probability of winning (0-100 percent)
       * @default null
       */
      probability: number | null;
      /**
       * Products
       * @description Products linked to the deal
       * @default null
       */
      products: string[] | null;
      /**
       * Summary
       * @description Short description of the deal
       * @default null
       */
      summary: string | null;
      /**
       * Tag Ids
       * @description Tag IDs assigned to the deal
       * @default null
       */
      tag_ids: number[] | null;
      /**
       * Updated At
       * @description Timestamp when the deal was last updated
       */
      updated_at: string;
      /**
       * Value
       * @description Monetary value of the deal
       * @default null
       */
      value: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PIPELINE_CRM's PIPELINE_CRM_GET_STAGE tool input.
 */
type PIPELINE_CRM_GET_STAGE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the stage to retrieve
   */
  id?: number;
};

/**
 * Type of PIPELINE_CRM's PIPELINE_CRM_GET_STAGE tool output.
 */
type PIPELINE_CRM_GET_STAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the stage was created in YYYY-MM-DD HH:MM:SS format
       */
      created_at: string;
      /**
       * Deal Pipeline Id
       * @description Identifier of the pipeline this stage belongs to
       */
      deal_pipeline_id: number;
      /**
       * Id
       * @description Unique ID of the stage
       */
      id: number;
      /**
       * Name
       * @description Name of the stage, e.g., 'Proposal'
       */
      name: string;
      /**
       * Percent
       * @description Probability percentage for the stage (0-100)
       */
      percent: number;
      /**
       * Updated At
       * @description Timestamp when the stage was last updated in YYYY-MM-DD HH:MM:SS format
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
 * Type of PIPELINE_CRM's PIPELINE_CRM_GET_TASK tool input.
 */
type PIPELINE_CRM_GET_TASK_INPUT = {
  /**
   * Id
   * @description ID of the calendar task to retrieve
   */
  id?: number;
};

/**
 * Type of PIPELINE_CRM's PIPELINE_CRM_GET_TASK tool output.
 */
type PIPELINE_CRM_GET_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * All Day
       * @description Whether the entry is all-day (tasks have no time)
       */
      all_day: boolean;
      /**
       * CalendarEntryPriority
       * @description Priority information for the calendar entry.
       * @default null
       */
      calendar_entry_priority: {
          /**
           * Hex Color
           * @description Hex color code of the priority
           */
          hex_color: string;
          /**
           * Id
           * @description ID of the calendar entry priority
           */
          id: number;
          /**
           * Name
           * @description Name of the calendar entry priority
           */
          name: string;
          /**
           * Position
           * @description Position/order of the priority
           */
          position: number;
      } | null;
      /**
       * Calendar Entry Priority Id
       * @description Priority ID of the calendar entry
       * @default null
       */
      calendar_entry_priority_id: number | null;
      /**
       * CalendarEntryCategory
       * @description Category information for the calendar entry.
       * @default null
       */
      category: {
          /**
           * Id
           * @description ID of the calendar entry category
           */
          id: number;
          /**
           * Name
           * @description Name of the calendar entry category
           */
          name: string;
      } | null;
      /**
       * Category Id
       * @description Category ID of the calendar entry
       * @default null
       */
      category_id: number | null;
      /**
       * Complete
       * @description Whether the task is marked complete
       * @default null
       */
      complete: boolean | null;
      /**
       * Created At
       * @description Timestamp when the entry was created
       */
      created_at: string;
      /**
       * Description
       * @description Description or notes for the calendar entry
       * @default null
       */
      description: string | null;
      /**
       * Due Date
       * @description Due date for tasks in ISO 8601 format
       * @default null
       */
      due_date: string | null;
      /**
       * End Time
       * @description End time for events in ISO 8601 format
       * @default null
       */
      end_time: string | null;
      /**
       * Id
       * @description Unique identifier of the calendar entry
       */
      id: number;
      /**
       * Name
       * @description Title or name of the calendar entry
       */
      name: string;
      /**
       * Owner
       * @description Owner details of the calendar entry
       */
      owner: {
          /**
           * Full Name
           * @description Full name of the entry owner
           */
          full_name: string;
          /**
           * Id
           * @description ID of the entry owner
           */
          id: number;
      };
      /**
       * Owner Id
       * @description User ID who owns the entry
       */
      owner_id: number;
      /**
       * Start Time
       * @description Start time for events in ISO 8601 format
       * @default null
       */
      start_time: string | null;
      /**
       * Type
       * @description Type of the calendar entry; 'CalendarTask' for tasks
       * @enum {string}
       */
      type: "CalendarEvent" | "CalendarTask";
      /**
       * Updated At
       * @description Timestamp when the entry was last updated
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
 * Type of PIPELINE_CRM's PIPELINE_CRM_LIST_COMPANIES tool input.
 */
type PIPELINE_CRM_LIST_COMPANIES_INPUT = {
  /**
   * Page
   * @description Page number to retrieve, must be ≥ 1
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of companies per page, must be ≥ 1
   * @default null
   */
  per_page: number | null;
  /**
   * Search
   * @description Search term to filter companies by relevant fields
   * @default null
   */
  search: string | null;
  /**
   * Sort By
   * @description Field name to sort by (e.g., "name")
   * @default null
   */
  sort_by: string | null;
  /**
   * Sort Direction
   * @description Sort order: asc for ascending or desc for descending
   * @default null
   * @enum {string|null}
   */
  sort_direction: "asc" | "desc" | null;
};

/**
 * Type of PIPELINE_CRM's PIPELINE_CRM_LIST_COMPANIES tool output.
 */
type PIPELINE_CRM_LIST_COMPANIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Companies
       * @description List of companies returned
       */
      companies: {
          /**
           * Address
           * @description Address of the company, if available
           * @default null
           */
          address: string | null;
          /**
           * Created At
           * @description Timestamp when the company was created (ISO8601)
           */
          created_at: string;
          /**
           * Email
           * @description Email of the company, if available
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique identifier of the company
           */
          id: number;
          /**
           * Name
           * @description Name of the company
           */
          name: string;
          /**
           * Phone
           * @description Phone number of the company, if available
           * @default null
           */
          phone: string | null;
          /**
           * Updated At
           * @description Timestamp when the company was last updated (ISO8601)
           */
          updated_at: string;
          /**
           * Website Url
           * @description Website URL of the company, if available
           * @default null
           */
          website_url: string | null;
      }[];
      /**
       * Pagination
       * @description Pagination details for the returned list
       */
      pagination: {
          /**
           * Page
           * @description Current page number
           */
          page: number;
          /**
           * Per Page
           * @description Number of entries per page
           */
          per_page: number;
          /**
           * Total Entries
           * @description Total number of entries across all pages
           */
          total_entries: number;
          /**
           * Total Pages
           * @description Total number of pages available
           */
          total_pages: number;
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
 * Type of PIPELINE_CRM's PIPELINE_CRM_LIST_LEADS tool input.
 */
type PIPELINE_CRM_LIST_LEADS_INPUT = {
  /**
   * Created From Date
   * @description Only include leads created on or after this date (YYYY-MM-DD)
   * @default null
   */
  created_from_date: string | null;
  /**
   * Created To Date
   * @description Only include leads created on or before this date (YYYY-MM-DD)
   * @default null
   */
  created_to_date: string | null;
  /**
   * Page
   * @description Page number to retrieve, must be ≥ 1
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of leads per page, must be ≥ 1
   * @default null
   */
  per_page: number | null;
  /**
   * Updated From Date
   * @description Only include leads updated on or after this date (YYYY-MM-DD)
   * @default null
   */
  updated_from_date: string | null;
  /**
   * Updated To Date
   * @description Only include leads updated on or before this date (YYYY-MM-DD)
   * @default null
   */
  updated_to_date: string | null;
};

/**
 * Type of PIPELINE_CRM's PIPELINE_CRM_LIST_LEADS tool output.
 */
type PIPELINE_CRM_LIST_LEADS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Leads
       * @description List of lead objects
       */
      leads: {
          /**
           * Company Id
           * @description Associated company ID
           * @default null
           */
          company_id: number | null;
          /**
           * Company Name
           * @description Associated company name
           * @default null
           */
          company_name: string | null;
          /**
           * Created At
           * @description Timestamp when the lead was created
           */
          created_at: string;
          /**
           * Email
           * @description Primary email address
           * @default null
           */
          email: string | null;
          /**
           * First Name
           * @description First name of the lead
           * @default null
           */
          first_name: string | null;
          /**
           * Full Name
           * @description Full name of the lead
           * @default null
           */
          full_name: string | null;
          /**
           * Id
           * @description Unique identifier of the lead
           */
          id: number;
          /**
           * Image Thumb Url
           * @description Thumbnail URL for lead image
           * @default null
           */
          image_thumb_url: string | null;
          /**
           * Last Name
           * @description Last name of the lead
           * @default null
           */
          last_name: string | null;
          /**
           * Lead Source Id
           * @description Lead source ID
           * @default null
           */
          lead_source_id: number | null;
          /**
           * Lead Status Id
           * @description Lead status ID
           * @default null
           */
          lead_status_id: number | null;
          /**
           * Mobile
           * @description Mobile phone number
           * @default null
           */
          mobile: string | null;
          /**
           * Phone
           * @description Primary phone number
           * @default null
           */
          phone: string | null;
          /**
           * Summary
           * @description Summary or notes about the lead
           * @default null
           */
          summary: string | null;
          /**
           * Updated At
           * @description Timestamp when the lead was last updated
           */
          updated_at: string;
          /**
           * User Id
           * @description User ID assigned to this lead
           * @default null
           */
          user_id: number | null;
      }[];
      /**
       * Pagination
       * @description Pagination details for the returned list
       */
      pagination: {
          /**
           * Page
           * @description Current page number
           */
          page: number;
          /**
           * Per Page
           * @description Number of entries per page
           */
          per_page: number;
          /**
           * Total Entries
           * @description Total number of entries across all pages
           */
          total_entries: number;
          /**
           * Total Pages
           * @description Total number of pages available
           */
          total_pages: number;
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
 * Type of PIPELINE_CRM's PIPELINE_CRM_LIST_STAGES tool input.
 */
type PIPELINE_CRM_LIST_STAGES_INPUT = {
  /**
   * Page
   * @description Page number for pagination (must be >=1)
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page for pagination (1-200)
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of PIPELINE_CRM's PIPELINE_CRM_LIST_STAGES tool output.
 */
type PIPELINE_CRM_LIST_STAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Entries
       * @description Array of deal stage objects
       */
      entries: {
          /**
           * Created At
           * @description Timestamp when the stage was created in YYYY-MM-DD HH:MM:SS format
           */
          created_at: string;
          /**
           * Deal Pipeline Id
           * @description Identifier of the pipeline this stage belongs to
           */
          deal_pipeline_id: number;
          /**
           * Id
           * @description Unique ID of the deal stage
           */
          id: number;
          /**
           * Name
           * @description Name of the stage, e.g., 'Proposal'
           */
          name: string;
          /**
           * Percent
           * @description Probability percentage for the stage (0-100)
           */
          percent: number;
          /**
           * Updated At
           * @description Timestamp when the stage was last updated in YYYY-MM-DD HH:MM:SS format
           */
          updated_at: string;
      }[];
      /**
       * Pagination
       * @description Pagination details
       */
      pagination: {
          /**
           * Page
           * @description Current page number
           */
          page: number;
          /**
           * Pages
           * @description Total number of pages available
           */
          pages: number;
          /**
           * Per Page
           * @description Number of items per page
           */
          per_page: number;
          /**
           * Total
           * @description Total number of items available
           */
          total: number;
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
 * Type of PIPELINE_CRM's PIPELINE_CRM_LIST_TASKS tool input.
 */
type PIPELINE_CRM_LIST_TASKS_INPUT = {
  /**
   * Company Id
   * @description Filter tasks by company ID.
   * @default null
   */
  company_id: number | null;
  /**
   * Deal Id
   * @description Filter tasks by deal ID.
   * @default null
   */
  deal_id: number | null;
  /**
   * From Date
   * @description Filter tasks due on or after this date (YYYY-MM-DD).
   * @default null
   */
  from_date: string | null;
  /**
   * Page
   * @description Page number to fetch (default 1).
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of items per page (max 200, default 200).
   * @default 200
   */
  per_page: number;
  /**
   * Person Id
   * @description Filter tasks by person ID.
   * @default null
   */
  person_id: number | null;
  /**
   * To Date
   * @description Filter tasks due on or before this date (YYYY-MM-DD).
   * @default null
   */
  to_date: string | null;
};

/**
 * Type of PIPELINE_CRM's PIPELINE_CRM_LIST_TASKS tool output.
 */
type PIPELINE_CRM_LIST_TASKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Entries
       * @description List of calendar task entries
       */
      entries: {
          /**
           * All Day
           * @description Whether the entry is all-day (tasks have no time)
           */
          all_day: boolean;
          /**
           * CalendarEntryPriority
           * @description Priority details of the calendar entry
           * @default null
           */
          calendar_entry_priority: {
              /**
               * Position
               * @description Position/order of the priority
               */
              position: number;
          } | null;
          /**
           * Calendar Entry Priority Id
           * @description Priority ID of the calendar entry
           * @default null
           */
          calendar_entry_priority_id: number | null;
          /**
           * CalendarEntryCategory
           * @description Category information for the calendar entry.
           * @default null
           */
          category: {
              /**
               * Id
               * @description ID of the calendar entry category
               */
              id: number;
              /**
               * Name
               * @description Name of the calendar entry category
               */
              name: string;
          } | null;
          /**
           * Category Id
           * @description Category ID of the calendar entry
           * @default null
           */
          category_id: number | null;
          /**
           * Complete
           * @description Whether the task is marked complete
           * @default null
           */
          complete: boolean | null;
          /**
           * Created At
           * @description Timestamp when the entry was created
           */
          created_at: string;
          /**
           * Description
           * @description Description or notes for the calendar entry
           * @default null
           */
          description: string | null;
          /**
           * Due Date
           * @description Due date for tasks in ISO 8601 format
           * @default null
           */
          due_date: string | null;
          /**
           * End Time
           * @description End time for events in ISO 8601 format
           * @default null
           */
          end_time: string | null;
          /**
           * Id
           * @description Unique identifier of the calendar entry
           */
          id: number;
          /**
           * Name
           * @description Title or name of the calendar entry
           */
          name: string;
          /**
           * Owner
           * @description Owner details of the calendar entry
           */
          owner: {
              /**
               * First Name
               * @description First name of the entry owner
               * @default null
               */
              first_name: string | null;
              /**
               * Full Name
               * @description Full name of the entry owner
               * @default null
               */
              full_name: string | null;
              /**
               * Id
               * @description ID of the entry owner
               */
              id: number;
              /**
               * Last Name
               * @description Last name of the entry owner
               * @default null
               */
              last_name: string | null;
          };
          /**
           * Owner Id
           * @description User ID who owns the entry
           */
          owner_id: number;
          /**
           * Start Time
           * @description Start time for events in ISO 8601 format
           * @default null
           */
          start_time: string | null;
          /**
           * Type
           * @description Type of entry; 'CalendarTask' for tasks
           * @enum {string}
           */
          type: "CalendarEvent" | "CalendarTask";
          /**
           * Updated At
           * @description Timestamp when the entry was last updated
           */
          updated_at: string;
      }[];
      /**
       * Pagination
       * @description Pagination details
       */
      pagination: {
          /**
           * Page
           * @description Current page number
           */
          page: number;
          /**
           * Per Page
           * @description Number of items per page
           */
          per_page: number;
          /**
           * Total
           * @description Total number of items available
           */
          total: number;
          /**
           * Url
           * @description Request URL for this pagination page
           * @default null
           */
          url: string | null;
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
 * Type of PIPELINE_CRM's PIPELINE_CRM_LIST_USERS tool input.
 */
type PIPELINE_CRM_LIST_USERS_INPUT = object;

/**
 * Type of PIPELINE_CRM's PIPELINE_CRM_LIST_USERS tool output.
 */
type PIPELINE_CRM_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Users
       * @description List of users returned
       */
      users: {
          /**
           * Email
           * @description Primary email address of the user
           */
          email: string;
          /**
           * First Name
           * @description First name of the user
           */
          first_name: string;
          /**
           * Id
           * @description Unique identifier of the user
           */
          id: number;
          /**
           * Last Name
           * @description Last name of the user
           */
          last_name: string;
          /**
           * Role
           * @description Role assigned to the user
           */
          role: string;
          /**
           * Status
           * @description Status of the user (e.g., active, inactive)
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
 * Type of PIPELINE_CRM's PIPELINE_CRM_PIPELINE_CRM_CREATE_COMPANY tool input.
 */
type PIPELINE_CRM_PIPELINE_CRM_CREATE_COMPANY_INPUT = {
  /**
   * Check For Duplicates
   * @description If true, return an error when a company with the same name exists
   * @default false
   */
  check_for_duplicates: boolean | null;
  /**
   * Company
   * @description Payload object for the new company, must include 'name' and any other optional fields
   */
  company?: {
      [key: string]: unknown;
  };
  /**
   * Deliver Assignment Email
   * @description If true, send assignment email to the new owner of the company
   * @default true
   */
  deliver_assignment_email: boolean | null;
  /**
   * Todo Template Id
   * @description ID of the todo template to apply to this company
   * @default null
   */
  todo_template_id: number | null;
  /**
   * Todo Template User Id
   * @description Owner of tasks created by applying the given todo template
   * @default null
   */
  todo_template_user_id: number | null;
};

/**
 * Type of PIPELINE_CRM's PIPELINE_CRM_PIPELINE_CRM_CREATE_COMPANY tool output.
 */
type PIPELINE_CRM_PIPELINE_CRM_CREATE_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address 1
       * @description Primary address line for the company
       * @default null
       */
      address_1: string | null;
      /**
       * Address 2
       * @description Secondary address line for the company
       * @default null
       */
      address_2: string | null;
      /**
       * City
       * @description City of the company's address
       * @default null
       */
      city: string | null;
      /**
       * Company Country
       * @description Company-specific country field
       * @default null
       */
      company_country: string | null;
      /**
       * Country
       * @description Country of the company's address
       * @default null
       */
      country: string | null;
      /**
       * Created At
       * @description Timestamp when the company was created
       */
      created_at: string;
      /**
       * Custom Fields
       * @description Custom field values for the company
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
       * Email
       * @description Email address for the company
       * @default null
       */
      email: string | null;
      /**
       * Facebook Url
       * @description Facebook URL of the company
       * @default null
       */
      facebook_url: string | null;
      /**
       * Fax
       * @description Fax number for the company
       * @default null
       */
      fax: string | null;
      /**
       * Id
       * @description Unique ID of the created company
       */
      id: number;
      /**
       * Image Mobile Url
       * @description Mobile image URL for the company
       * @default null
       */
      image_mobile_url: string | null;
      /**
       * Image Thumb Url
       * @description Thumbnail image URL for the company
       * @default null
       */
      image_thumb_url: string | null;
      /**
       * Instant Message
       * @description Instant messaging contact for the company
       * @default null
       */
      instant_message: string | null;
      /**
       * Linked In Url
       * @description LinkedIn URL of the company
       * @default null
       */
      linked_in_url: string | null;
      /**
       * Name
       * @description Name of the company
       */
      name: string;
      /**
       * Next Task All Day
       * @description All-day flag for the next task
       * @default null
       */
      next_task_all_day: boolean | null;
      /**
       * Next Task Due
       * @description Due date of the next task
       * @default null
       */
      next_task_due: string | null;
      /**
       * Next Task Id
       * @description ID of the next task
       * @default null
       */
      next_task_id: number | null;
      /**
       * Next Task Name
       * @description Name of the next task
       * @default null
       */
      next_task_name: string | null;
      /**
       * Owner
       * @description Owner user of the company
       */
      owner: {
          /**
           * Full Name
           * @description Full name of the owner user
           */
          full_name: string;
          /**
           * Id
           * @description ID of the owner user
           */
          id: number;
      };
      /**
       * Owner Id
       * @description User ID of the company owner
       * @default null
       */
      owner_id: number | null;
      /**
       * Phone1
       * @description Primary phone number of the company
       * @default null
       */
      phone1: string | null;
      /**
       * Phone1 Desc
       * @description Description for phone1
       * @default null
       */
      phone1_desc: string | null;
      /**
       * Phone2
       * @description Secondary phone number of the company
       * @default null
       */
      phone2: string | null;
      /**
       * Phone2 Desc
       * @description Description for phone2
       * @default null
       */
      phone2_desc: string | null;
      /**
       * Phone3
       * @description Tertiary phone number of the company
       * @default null
       */
      phone3: string | null;
      /**
       * Phone3 Desc
       * @description Description for phone3
       * @default null
       */
      phone3_desc: string | null;
      /**
       * Phone4
       * @description Quaternary phone number of the company
       * @default null
       */
      phone4: string | null;
      /**
       * Phone4 Desc
       * @description Description for phone4
       * @default null
       */
      phone4_desc: string | null;
      /**
       * Possible Notify User Ids
       * @description List of user IDs that can be notified about this company
       */
      possible_notify_user_ids: number[];
      /**
       * Postal Code
       * @description Postal code of the company's address
       * @default null
       */
      postal_code: number | null;
      /**
       * Shared User Ids
       * @description IDs of users sharing the company
       * @default null
       */
      shared_user_ids: number[] | null;
      /**
       * State
       * @description State of the company's address
       * @default null
       */
      state: string | null;
      /**
       * Tag Ids
       * @description IDs of tags applied to the company
       * @default null
       */
      tag_ids: number[] | null;
      /**
       * Tags
       * @description List of tags assigned to the company
       */
      tags: {
          /**
           * Id
           * @description Tag ID
           */
          id: number;
          /**
           * Name
           * @description Tag name
           */
          name: string;
      }[];
      /**
       * Twitter
       * @description Twitter handle of the company
       * @default null
       */
      twitter: string | null;
      /**
       * Updated At
       * @description Timestamp when the company was updated
       */
      updated_at: string;
      /**
       * Web
       * @description Website URL for the company
       * @default null
       */
      web: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PIPELINE_CRM's PIPELINE_CRM_PIPELINE_CRM_CREATE_DEAL tool input.
 */
type PIPELINE_CRM_PIPELINE_CRM_CREATE_DEAL_INPUT = {
  /**
   * Deal
   * @description Deal attributes payload
   */
  deal?: {
      /**
       * Currency
       * @description ISO currency code for the deal value
       * @default null
       */
      currency: string | null;
      /**
       * Custom Fields
       * @description Custom field ID to value mapping
       * @default null
       */
      custom_fields: {
          [key: string]: unknown;
      } | null;
      /**
       * Deal Stage Id
       * @description ID of the stage for this deal
       * @default null
       */
      deal_stage_id: number | null;
      /**
       * Expected Close Date
       * Format: date
       * @description Expected close date in 'YYYY-MM-DD' format
       * @default null
       */
      expected_close_date: unknown;
      /**
       * Linked Org Id
       * @description Organization ID linked to the deal
       * @default null
       */
      linked_org_id: number | null;
      /**
       * Linked Person Id
       * @description Person ID linked to the deal
       * @default null
       */
      linked_person_id: number | null;
      /**
       * Name
       * @description Name of the deal
       */
      name: string;
      /**
       * Owner Id
       * @description User ID who owns the deal
       * @default null
       */
      owner_id: number | null;
      /**
       * Probability
       * @description Win probability percentage (0-100)
       * @default null
       */
      probability: number | null;
      /**
       * Products
       * @description List of product names linked to the deal
       * @default null
       */
      products: string[] | null;
      /**
       * Summary
       * @description Short description of the deal
       * @default null
       */
      summary: string | null;
      /**
       * Tag Ids
       * @description Tags to apply, by ID matrix
       * @default null
       */
      tag_ids: number[] | null;
      /**
       * Value
       * @description Monetary value of the deal
       * @default null
       */
      value: number | null;
  };
  /**
   * Deliver Assignment Email
   * @description Send assignment email if assigned to a user; set false to suppress
   * @default true
   */
  deliver_assignment_email: boolean;
  /**
   * Todo Template Id
   * @description ID of a todo template to apply
   * @default null
   */
  todo_template_id: number | null;
  /**
   * Todo Template User Id
   * @description Owner ID for tasks generated by todo template
   * @default null
   */
  todo_template_user_id: number | null;
};

/**
 * Type of PIPELINE_CRM's PIPELINE_CRM_PIPELINE_CRM_CREATE_DEAL tool output.
 */
type PIPELINE_CRM_PIPELINE_CRM_CREATE_DEAL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Created deal ID
       */
      id: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PIPELINE_CRM's PIPELINE_CRM_PIPELINE_CRM_PIPELINE_CRM_DELETE_TASK tool input.
 */
type PIPELINE_CRM_PIPELINE_CRM_PIPELINE_CRM_DELETE_TASK_INPUT = {
  /**
   * Id
   * @description ID of the calendar entry (task) to delete
   */
  id?: number;
};

/**
 * Type of PIPELINE_CRM's PIPELINE_CRM_PIPELINE_CRM_PIPELINE_CRM_DELETE_TASK tool output.
 */
type PIPELINE_CRM_PIPELINE_CRM_PIPELINE_CRM_DELETE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * All Day
       * @description Whether the entry is all day (tasks have no time)
       */
      all_day: boolean;
      /**
       * CalendarEntryPriority
       * @description Priority details
       * @default null
       */
      calendar_entry_priority: {
          /**
           * Hex Color
           * @description Priority hex color code
           */
          hex_color: string;
          /**
           * Id
           * @description Priority ID of the calendar entry
           */
          id: number;
          /**
           * Name
           * @description Priority name
           */
          name: string;
          /**
           * Position
           * @description Priority position/order
           */
          position: number;
      } | null;
      /**
       * Calendar Entry Priority Id
       * @description Priority ID of the calendar entry
       * @default null
       */
      calendar_entry_priority_id: number | null;
      /**
       * CalendarEntryCategory
       * @description Category details
       * @default null
       */
      category: {
          /**
           * Id
           * @description Category ID of the calendar entry
           */
          id: number;
          /**
           * Name
           * @description Category name
           */
          name: string;
      } | null;
      /**
       * Category Id
       * @description Category ID of the calendar entry
       * @default null
       */
      category_id: number | null;
      /**
       * Complete
       * @description Whether the task is marked complete
       * @default null
       */
      complete: boolean | null;
      /**
       * Created At
       * @description Timestamp when the entry was created
       */
      created_at: string;
      /**
       * Description
       * @description Description or notes for the entry
       * @default null
       */
      description: string | null;
      /**
       * Due Date
       * @description Due date for tasks in ISO 8601
       * @default null
       */
      due_date: string | null;
      /**
       * End Time
       * @description End time for events in ISO 8601
       * @default null
       */
      end_time: string | null;
      /**
       * Id
       * @description ID of the deleted calendar entry
       */
      id: number;
      /**
       * Name
       * @description Title of the calendar entry
       */
      name: string;
      /**
       * CalendarEntryOwner
       * @description Owner details
       * @default null
       */
      owner: {
          /**
           * Avatar Thumb Url
           * @description URL of the user's avatar thumbnail
           * @default null
           */
          avatar_thumb_url: string | null;
          /**
           * First Name
           * @description First name of the user
           */
          first_name: string;
          /**
           * Id
           * @description User ID of the task owner
           */
          id: number;
          /**
           * Last Name
           * @description Last name of the user
           */
          last_name: string;
      } | null;
      /**
       * Owner Id
       * @description User ID who owns the entry
       */
      owner_id: number;
      /**
       * Start Time
       * @description Start time for events in ISO 8601
       * @default null
       */
      start_time: string | null;
      /**
       * Type
       * @description Type of the calendar entry
       * @enum {string}
       */
      type: "CalendarEvent" | "CalendarTask";
      /**
       * Updated At
       * @description Timestamp when the entry was last updated
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
 * Type of PIPELINE_CRM's PIPELINE_CRM_UPDATE_COMPANY tool input.
 */
type PIPELINE_CRM_UPDATE_COMPANY_INPUT = {
  /**
   * Company
   * @description Dictionary of company fields to update
   */
  company?: {
      [key: string]: unknown;
  };
  /**
   * Deliver Reassignment Email
   * @description If false, suppresses sending reassignment email when changing owner_id; default is true
   * @default null
   */
  deliver_reassignment_email: boolean | null;
  /**
   * Id
   * @description ID of the company to update
   */
  id?: number;
};

/**
 * Type of PIPELINE_CRM's PIPELINE_CRM_UPDATE_COMPANY tool output.
 */
type PIPELINE_CRM_UPDATE_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address 1
       * @description Primary address line for the company
       * @default null
       */
      address_1: string | null;
      /**
       * Address 2
       * @description Secondary address line for the company
       * @default null
       */
      address_2: string | null;
      /**
       * City
       * @description City of the company's address
       * @default null
       */
      city: string | null;
      /**
       * Company Country
       * @description Company-specific country field
       * @default null
       */
      company_country: string | null;
      /**
       * Country
       * @description Country of the company's address
       * @default null
       */
      country: string | null;
      /**
       * Created At
       * @description Timestamp when the company was created
       */
      created_at: string;
      /**
       * Custom Fields
       * @description Custom field values for the company
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
       * Email
       * @description Email address for the company
       * @default null
       */
      email: string | null;
      /**
       * Facebook Url
       * @description Facebook URL of the company
       * @default null
       */
      facebook_url: string | null;
      /**
       * Fax
       * @description Fax number for the company
       * @default null
       */
      fax: string | null;
      /**
       * Id
       * @description Unique ID of the company
       */
      id: number;
      /**
       * Image Mobile Url
       * @description Mobile image URL for the company
       * @default null
       */
      image_mobile_url: string | null;
      /**
       * Image Thumb Url
       * @description Thumbnail image URL for the company
       * @default null
       */
      image_thumb_url: string | null;
      /**
       * Instant Message
       * @description Instant messaging contact for the company
       * @default null
       */
      instant_message: string | null;
      /**
       * Linked In Url
       * @description LinkedIn URL of the company
       * @default null
       */
      linked_in_url: string | null;
      /**
       * Name
       * @description Name of the company
       */
      name: string;
      /**
       * Next Task All Day
       * @description All-day flag for the next task
       * @default null
       */
      next_task_all_day: boolean | null;
      /**
       * Next Task Due
       * @description Due date of the next task
       * @default null
       */
      next_task_due: string | null;
      /**
       * Next Task Id
       * @description ID of the next task
       * @default null
       */
      next_task_id: number | null;
      /**
       * Next Task Name
       * @description Name of the next task
       * @default null
       */
      next_task_name: string | null;
      /**
       * Owner
       * @description Owner user of the company
       */
      owner: {
          /**
           * Full Name
           * @description Full name of the owner user
           */
          full_name: string;
          /**
           * Id
           * @description ID of the owner user
           */
          id: number;
      };
      /**
       * Owner Id
       * @description User ID of the company owner
       * @default null
       */
      owner_id: number | null;
      /**
       * Phone1
       * @description Primary phone number of the company
       * @default null
       */
      phone1: string | null;
      /**
       * Phone1 Desc
       * @description Description for phone1
       * @default null
       */
      phone1_desc: string | null;
      /**
       * Phone2
       * @description Secondary phone number of the company
       * @default null
       */
      phone2: string | null;
      /**
       * Phone2 Desc
       * @description Description for phone2
       * @default null
       */
      phone2_desc: string | null;
      /**
       * Phone3
       * @description Tertiary phone number of the company
       * @default null
       */
      phone3: string | null;
      /**
       * Phone3 Desc
       * @description Description for phone3
       * @default null
       */
      phone3_desc: string | null;
      /**
       * Phone4
       * @description Quaternary phone number of the company
       * @default null
       */
      phone4: string | null;
      /**
       * Phone4 Desc
       * @description Description for phone4
       * @default null
       */
      phone4_desc: string | null;
      /**
       * Possible Notify User Ids
       * @description List of user IDs that can be notified about this company
       */
      possible_notify_user_ids: number[];
      /**
       * Postal Code
       * @description Postal code of the company's address
       * @default null
       */
      postal_code: number | null;
      /**
       * Shared User Ids
       * @description IDs of users sharing the company
       * @default null
       */
      shared_user_ids: number[] | null;
      /**
       * State
       * @description State of the company's address
       * @default null
       */
      state: string | null;
      /**
       * Tag Ids
       * @description IDs of tags applied to the company
       * @default null
       */
      tag_ids: number[] | null;
      /**
       * Tags
       * @description List of tags assigned to the company
       */
      tags: {
          /**
           * Id
           * @description Tag ID
           */
          id: number;
          /**
           * Name
           * @description Tag name
           */
          name: string;
      }[];
      /**
       * Twitter
       * @description Twitter handle of the company
       * @default null
       */
      twitter: string | null;
      /**
       * Updated At
       * @description Timestamp when the company was updated
       */
      updated_at: string;
      /**
       * Web
       * @description Website URL for the company
       * @default null
       */
      web: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "PIPELINE_CRM".
 */
export type PIPELINE_CRM_TOOL_INPUTS = {
  DELETE_COMPANY: PIPELINE_CRM_DELETE_COMPANY_INPUT
  DELETE_DEAL: PIPELINE_CRM_DELETE_DEAL_INPUT
  GET_COMPANY: PIPELINE_CRM_GET_COMPANY_INPUT
  GET_DEAL: PIPELINE_CRM_GET_DEAL_INPUT
  GET_STAGE: PIPELINE_CRM_GET_STAGE_INPUT
  GET_TASK: PIPELINE_CRM_GET_TASK_INPUT
  LIST_COMPANIES: PIPELINE_CRM_LIST_COMPANIES_INPUT
  LIST_LEADS: PIPELINE_CRM_LIST_LEADS_INPUT
  LIST_STAGES: PIPELINE_CRM_LIST_STAGES_INPUT
  LIST_TASKS: PIPELINE_CRM_LIST_TASKS_INPUT
  LIST_USERS: PIPELINE_CRM_LIST_USERS_INPUT
  PIPELINE_CRM_CREATE_COMPANY: PIPELINE_CRM_PIPELINE_CRM_CREATE_COMPANY_INPUT
  PIPELINE_CRM_CREATE_DEAL: PIPELINE_CRM_PIPELINE_CRM_CREATE_DEAL_INPUT
  PIPELINE_CRM_PIPELINE_CRM_DELETE_TASK: PIPELINE_CRM_PIPELINE_CRM_PIPELINE_CRM_DELETE_TASK_INPUT
  UPDATE_COMPANY: PIPELINE_CRM_UPDATE_COMPANY_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PIPELINE_CRM".
 */
export type PIPELINE_CRM_TOOL_OUTPUTS = {
  DELETE_COMPANY: PIPELINE_CRM_DELETE_COMPANY_OUTPUT
  DELETE_DEAL: PIPELINE_CRM_DELETE_DEAL_OUTPUT
  GET_COMPANY: PIPELINE_CRM_GET_COMPANY_OUTPUT
  GET_DEAL: PIPELINE_CRM_GET_DEAL_OUTPUT
  GET_STAGE: PIPELINE_CRM_GET_STAGE_OUTPUT
  GET_TASK: PIPELINE_CRM_GET_TASK_OUTPUT
  LIST_COMPANIES: PIPELINE_CRM_LIST_COMPANIES_OUTPUT
  LIST_LEADS: PIPELINE_CRM_LIST_LEADS_OUTPUT
  LIST_STAGES: PIPELINE_CRM_LIST_STAGES_OUTPUT
  LIST_TASKS: PIPELINE_CRM_LIST_TASKS_OUTPUT
  LIST_USERS: PIPELINE_CRM_LIST_USERS_OUTPUT
  PIPELINE_CRM_CREATE_COMPANY: PIPELINE_CRM_PIPELINE_CRM_CREATE_COMPANY_OUTPUT
  PIPELINE_CRM_CREATE_DEAL: PIPELINE_CRM_PIPELINE_CRM_CREATE_DEAL_OUTPUT
  PIPELINE_CRM_PIPELINE_CRM_DELETE_TASK: PIPELINE_CRM_PIPELINE_CRM_PIPELINE_CRM_DELETE_TASK_OUTPUT
  UPDATE_COMPANY: PIPELINE_CRM_UPDATE_COMPANY_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PIPELINE_CRM toolkit.
 */
export const PIPELINE_CRM = {
  slug: "pipeline_crm",
  tools: {
    /**
     * Tool to delete a company by id in pipeline crm. use after confirming the company id is correct. example: "delete company with id 123".
     */
    DELETE_COMPANY: "PIPELINE_CRM_DELETE_COMPANY",
    /**
     * Tool to delete a deal by id. use when you need to remove a deal from pipeline crm.
     */
    DELETE_DEAL: "PIPELINE_CRM_DELETE_DEAL",
    /**
     * Tool to retrieve details for a specific company by id. use after you have the company id.
     */
    GET_COMPANY: "PIPELINE_CRM_GET_COMPANY",
    /**
     * Tool to retrieve details for a specific deal by id in pipeline crm. use after confirming the deal id.
     */
    GET_DEAL: "PIPELINE_CRM_GET_DEAL",
    /**
     * Tool to retrieve details for a specific stage by id in pipeline crm. use after confirming the stage id.
     */
    GET_STAGE: "PIPELINE_CRM_GET_STAGE",
    /**
     * Tool to retrieve details for a specific task by id in pipeline crm. use after confirming the task id.
     */
    GET_TASK: "PIPELINE_CRM_GET_TASK",
    /**
     * Tool to list companies in pipeline crm. use when you need to fetch multiple companies with optional filtering and pagination.
     */
    LIST_COMPANIES: "PIPELINE_CRM_LIST_COMPANIES",
    /**
     * Tool to list leads in pipeline crm. use when you need to fetch multiple leads with optional filtering and pagination.
     */
    LIST_LEADS: "PIPELINE_CRM_LIST_LEADS",
    /**
     * Tool to list deal stages. use when you need to enumerate all stages for deals in pipeline crm.
     */
    LIST_STAGES: "PIPELINE_CRM_LIST_STAGES",
    /**
     * Tool to list calendar tasks. use when retrieving tasks for a deal, company, or person with optional date filters and pagination.
     */
    LIST_TASKS: "PIPELINE_CRM_LIST_TASKS",
    /**
     * Tool to list users in pipeline crm. use when you need to retrieve all users in your account.
     */
    LIST_USERS: "PIPELINE_CRM_LIST_USERS",
    /**
     * Tool to create a new company in pipeline crm. use when you need to add a company after gathering its details.
     */
    PIPELINE_CRM_CREATE_COMPANY: "PIPELINE_CRM_PIPELINE_CRM_CREATE_COMPANY",
    /**
     * Tool to create a new deal in pipeline crm. use after gathering all details. example: create a deal named 'big partnership' worth 50000 usd in stage 2.
     */
    PIPELINE_CRM_CREATE_DEAL: "PIPELINE_CRM_PIPELINE_CRM_CREATE_DEAL",
    /**
     * Tool to delete a calendar task by id. use after confirming the task exists in pipeline crm.
     */
    PIPELINE_CRM_PIPELINE_CRM_DELETE_TASK: "PIPELINE_CRM_PIPELINE_CRM_PIPELINE_CRM_DELETE_TASK",
    /**
     * Tool to update an existing company by id in pipeline crm. use after confirming the company id and fields to change.
     */
    UPDATE_COMPANY: "PIPELINE_CRM_UPDATE_COMPANY",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PIPELINE_CRM".
 */
export type PIPELINE_CRM_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PIPELINE_CRM".
 */
export type PIPELINE_CRM_TRIGGER_EVENTS = {}
