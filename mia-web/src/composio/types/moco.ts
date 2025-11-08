// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MOCO's MOCO_ACTIVITIES_LIST tool input.
 */
type MOCO_ACTIVITIES_LIST_INPUT = {
  /**
   * Billable
   * @description If true, only billable activities; false for non-billable.
   * @default null
   */
  billable: boolean | null;
  /**
   * Billed
   * @description If true, only already billed activities; false otherwise.
   * @default null
   */
  billed: boolean | null;
  /**
   * Company Id
   * @description Filter activities by company (customer) ID.
   * @default null
   */
  company_id: number | null;
  /**
   * From Date
   * @description Start date (YYYY-MM-DD) to filter activities.
   * @default null
   */
  from_date: string | null;
  /**
   * Page
   * @description Page number for pagination, must be >= 1.
   * @default 1
   */
  page: number | null;
  /**
   * Project Id
   * @description Filter activities by project ID.
   * @default null
   */
  project_id: number | null;
  /**
   * Sort By
   * @description Field name to sort by (e.g., 'date', 'hours').
   * @default null
   */
  sort_by: string | null;
  /**
   * Sort Order
   * @description Sort order: 'asc' (default) or 'desc'.
   * @default asc
   * @enum {string|null}
   */
  sort_order: "asc" | "desc" | null;
  /**
   * Task Id
   * @description Filter activities by task ID.
   * @default null
   */
  task_id: number | null;
  /**
   * Term
   * @description Search term matching tag, description, or remote_id.
   * @default null
   */
  term: string | null;
  /**
   * To Date
   * @description End date (YYYY-MM-DD) to filter activities.
   * @default null
   */
  to_date: string | null;
  /**
   * User Id
   * @description Filter activities by user ID.
   * @default null
   */
  user_id: number | null;
};

/**
 * Type of MOCO's MOCO_ACTIVITIES_LIST tool output.
 */
type MOCO_ACTIVITIES_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Activities
       * @description Activities matching criteria.
       */
      activities: {
          /**
           * Billable
           * @description Whether the activity is billable.
           */
          billable: boolean;
          /**
           * Billed
           * @description Whether the activity is billed.
           */
          billed: boolean;
          /**
           * Created At
           * @description Record creation timestamp.
           */
          created_at: string;
          /**
           * Customer
           * @description Associated customer data.
           */
          customer: {
              /**
               * Id
               * @description Customer unique identifier.
               */
              id: number;
              /**
               * Name
               * @description Customer name.
               */
              name: string;
          };
          /**
           * Date
           * @description Date of the activity (YYYY-MM-DD).
           */
          date: string;
          /**
           * Description
           * @description Description of the activity.
           */
          description: string;
          /**
           * Hourly Rate
           * @description Applied hourly rate.
           * @default null
           */
          hourly_rate: number | null;
          /**
           * Hours
           * @description Number of hours logged.
           */
          hours: number;
          /**
           * Id
           * @description Activity unique identifier.
           */
          id: number;
          /**
           * Invoice Id
           * @description Invoice ID if billed.
           * @default null
           */
          invoice_id: number | null;
          /**
           * Project
           * @description Associated project data.
           */
          project: {
              /**
               * Billable
               * @description Whether the project is billable.
               */
              billable: boolean;
              /**
               * Id
               * @description Project unique identifier.
               */
              id: number;
              /**
               * Name
               * @description Project name.
               */
              name: string;
          };
          /**
           * Remote Id
           * @description External service ID.
           * @default null
           */
          remote_id: string | null;
          /**
           * Remote Service
           * @description External service name.
           * @default null
           */
          remote_service: string | null;
          /**
           * Remote Url
           * @description External service URL.
           * @default null
           */
          remote_url: string | null;
          /**
           * Seconds
           * @description Number of seconds logged.
           */
          seconds: number;
          /**
           * Tag
           * @description Tag of the activity.
           */
          tag: string;
          /**
           * Task
           * @description Associated task data.
           */
          task: {
              /**
               * Billable
               * @description Whether the task is billable.
               */
              billable: boolean;
              /**
               * Id
               * @description Task unique identifier.
               */
              id: number;
              /**
               * Name
               * @description Task name.
               */
              name: string;
          };
          /**
           * Timer Started At
           * @description Timer start timestamp if running.
           * @default null
           */
          timer_started_at: string | null;
          /**
           * Updated At
           * @description Last update timestamp.
           */
          updated_at: string;
          /**
           * User
           * @description User who logged the activity.
           */
          user: {
              /**
               * Firstname
               * @description User first name.
               */
              firstname: string;
              /**
               * Id
               * @description User unique identifier.
               */
              id: number;
              /**
               * Lastname
               * @description User last name.
               */
              lastname: string;
          };
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
 * Type of MOCO's MOCO_ACTIVITY_GET tool input.
 */
type MOCO_ACTIVITY_GET_INPUT = {
  /**
   * Id
   * @description The unique identifier of the activity to retrieve.
   */
  id?: number;
};

/**
 * Type of MOCO's MOCO_ACTIVITY_GET tool output.
 */
type MOCO_ACTIVITY_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Billable
       * @description Indicates whether the activity is billable.
       */
      billable: boolean;
      /**
       * Date
       * @description The date of the activity in ISO 8601 format.
       */
      date: string;
      /**
       * Description
       * @description A description of the activity.
       * @default null
       */
      description: string | null;
      /**
       * Hours
       * @description The number of hours logged for the activity.
       */
      hours: number;
      /**
       * Id
       * @description The unique identifier of the activity.
       */
      id: number;
      /**
       * Project Id
       * @description The ID of the project associated with the activity.
       */
      project_id: number;
      /**
       * Remote Id
       * @description The ID of the activity in the remote service.
       * @default null
       */
      remote_id: string | null;
      /**
       * Remote Service
       * @description The name of the remote service, if applicable.
       * @default null
       */
      remote_service: string | null;
      /**
       * Remote Url
       * @description The URL of the activity in the remote service.
       * @default null
       */
      remote_url: string | null;
      /**
       * Tag
       * @description A tag associated with the activity.
       * @default null
       */
      tag: string | null;
      /**
       * Task Id
       * @description The ID of the task associated with the activity.
       */
      task_id: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MOCO's MOCO_ACTIVITY_UPDATE tool input.
 */
type MOCO_ACTIVITY_UPDATE_INPUT = {
  /**
   * Billable
   * @description Whether this activity is billable
   * @default null
   */
  billable: boolean | null;
  /**
   * Date
   * @description Date of the activity in YYYY-MM-DD format
   * @default null
   */
  date: string | null;
  /**
   * Description
   * @description Textual description of the work performed
   * @default null
   */
  description: string | null;
  /**
   * Id
   * @description ID of the activity to update
   */
  id?: number;
  /**
   * Project Id
   * @description ID of the project associated with the activity
   * @default null
   */
  project_id: number | null;
  /**
   * Remote Id
   * @description External system identifier
   * @default null
   */
  remote_id: string | null;
  /**
   * Remote Service
   * @description External system name
   * @default null
   * @enum {string|null}
   */
  remote_service: "trello" | "jira" | "asana" | "basecamp" | "wunderlist" | "basecamp2" | "basecamp3" | "toggl" | "mite" | "github" | "youtrack" | null;
  /**
   * Remote Url
   * @description URL pointing to the external system ticket
   * @default null
   */
  remote_url: string | null;
  /**
   * Seconds
   * @description Duration in seconds (e.g., 4500 = 1.25 hours)
   * @default null
   */
  seconds: number | null;
  /**
   * Tag
   * @description Tag assigned to this entry
   * @default null
   */
  tag: string | null;
  /**
   * Task Id
   * @description ID of the task associated with the activity
   * @default null
   */
  task_id: number | null;
};

/**
 * Type of MOCO's MOCO_ACTIVITY_UPDATE tool output.
 */
type MOCO_ACTIVITY_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Billable
       * @description Whether the entry is billable
       */
      billable: boolean;
      /**
       * Billed
       * @description Whether the entry is already billed
       */
      billed: boolean;
      /**
       * Created At
       * @description Timestamp when the activity was created
       */
      created_at: string;
      /**
       * Customer
       * @description Customer details of the activity
       */
      customer: {
          /**
           * Id
           * @description Customer ID
           */
          id: number;
          /**
           * Name
           * @description Customer name
           */
          name: string;
      };
      /**
       * Date
       * @description Date of the activity
       */
      date: string;
      /**
       * Description
       * @description Description of the work performed
       */
      description: string;
      /**
       * Hourly Rate
       * @description Applicable hourly rate
       */
      hourly_rate: number;
      /**
       * Hours
       * @description Hours calculated from seconds
       */
      hours: number;
      /**
       * Id
       * @description Activity ID
       */
      id: number;
      /**
       * Invoice Id
       * @description Associated invoice ID if billed
       * @default null
       */
      invoice_id: number | null;
      /**
       * Project
       * @description Project details of the activity
       */
      project: {
          /**
           * Billable
           * @description Whether the project is billable
           */
          billable: boolean;
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
      };
      /**
       * Remote Id
       * @description External system identifier, if any
       * @default null
       */
      remote_id: string | null;
      /**
       * Remote Service
       * @description External system name, if any
       * @default null
       */
      remote_service: string | null;
      /**
       * Remote Url
       * @description External system URL, if any
       * @default null
       */
      remote_url: string | null;
      /**
       * Seconds
       * @description Duration in seconds
       */
      seconds: number;
      /**
       * Tag
       * @description Tag assigned to the entry
       */
      tag: string;
      /**
       * Task
       * @description Task details of the activity
       */
      task: {
          /**
           * Billable
           * @description Whether the task is billable
           */
          billable: boolean;
          /**
           * Id
           * @description Task ID
           */
          id: number;
          /**
           * Name
           * @description Task name
           */
          name: string;
      };
      /**
       * Timer Started At
       * @description Timestamp if timer is running on this activity
       * @default null
       */
      timer_started_at: string | null;
      /**
       * Updated At
       * @description Timestamp when the activity was last updated
       */
      updated_at: string;
      /**
       * User
       * @description User details of the creator
       */
      user: {
          /**
           * Firstname
           * @description First name of the user
           */
          firstname: string;
          /**
           * Id
           * @description User ID
           */
          id: number;
          /**
           * Lastname
           * @description Last name of the user
           */
          lastname: string;
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
 * Type of MOCO's MOCO_COMMENTS_LIST tool input.
 */
type MOCO_COMMENTS_LIST_INPUT = {
  /**
   * Commentable Id
   * @description Filter by resource ID.
   * @default null
   */
  commentable_id: number | null;
  /**
   * Commentable Type
   * @description Filter by resource type (e.g., 'project', 'session').
   * @default null
   */
  commentable_type: string | null;
  /**
   * Manual
   * @description True for user-created comments; false for system-generated.
   * @default null
   */
  manual: boolean | null;
  /**
   * Page
   * @description Page number for paginated results.
   * @default null
   */
  page: number | null;
  /**
   * Sort By
   * @description Field to sort by (e.g., 'created_at').
   * @default null
   */
  sort_by: string | null;
  /**
   * Sort Order
   * @description Sort order: 'asc' or 'desc'.
   * @default null
   */
  sort_order: string | null;
  /**
   * User Id
   * @description Filter by creator user ID.
   * @default null
   */
  user_id: number | null;
};

/**
 * Type of MOCO's MOCO_COMMENTS_LIST tool output.
 */
type MOCO_COMMENTS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Comments
       * @description List of comment objects.
       */
      comments: {
          /**
           * Commentable Id
           * @description Resource ID this comment belongs to.
           */
          commentable_id: number;
          /**
           * Commentable Type
           * @description Resource type this comment belongs to.
           */
          commentable_type: string;
          /**
           * Created At
           * @description Timestamp when the comment was created.
           */
          created_at: string;
          /**
           * Id
           * @description Unique comment ID.
           */
          id: number;
          /**
           * Text
           * @description Content of the comment.
           */
          text: string;
          /**
           * Updated At
           * @description Timestamp when the comment was last updated.
           */
          updated_at: string;
          /**
           * User Id
           * @description User ID who created the comment.
           */
          user_id: number;
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
 * Type of MOCO's MOCO_COMPANY_CREATE tool input.
 */
type MOCO_COMPANY_CREATE_INPUT = {
  /**
   * Address
   * @description Postal address, lines separated by '
   *     '
   * @default null
   */
  address: string | null;
  /**
   * Alternative Correspondence Language
   * @description Indicates if sales documents should use the alternative correspondence language
   * @default null
   */
  alternative_correspondence_language: boolean | null;
  /**
   * Billing Email Cc
   * @description CC email address(es) for billing (comma-separated)
   * @default null
   */
  billing_email_cc: string | null;
  /**
   * Billing Notes
   * @description Notes to include on invoices
   * @default null
   */
  billing_notes: string | null;
  /**
   * Country Code
   * @description ISO Alpha-2 country code (e.g., 'DE', 'CH', 'AT')
   * @default null
   */
  country_code: string | null;
  /**
   * Credit Number
   * @description Credit number if bookkeeping is enabled
   * @default null
   */
  credit_number: number | null;
  /**
   * Currency
   * @description Currency code for customers (e.g., 'EUR'). Required if type is 'customer'
   * @default null
   */
  currency: string | null;
  /**
   * Custom Properties
   * @description Custom key/value properties
   * @default null
   */
  custom_properties: {
      [key: string]: string;
  } | null;
  /**
   * Customer Tax
   * @description Tax rate for the customer (percentage)
   * @default null
   */
  customer_tax: number | null;
  /**
   * Debit Number
   * @description Debit number if bookkeeping is enabled
   * @default null
   */
  debit_number: number | null;
  /**
   * Default Invoice Due Days
   * @description Default number of days until invoice is due
   * @default null
   */
  default_invoice_due_days: number | null;
  /**
   * Email
   * @description Primary email address for the company
   * @default null
   */
  email: string | null;
  /**
   * Fax
   * @description Company's fax number
   * @default null
   */
  fax: string | null;
  /**
   * Footer
   * @description HTML content for invoice footer
   * @default null
   */
  footer: string | null;
  /**
   * Iban
   * @description International Bank Account Number for suppliers
   * @default null
   */
  iban: string | null;
  /**
   * Identifier
   * @description Unique identifier/reference for the customer. Required if not automatically assigned
   * @default null
   */
  identifier: string | null;
  /**
   * Info
   * @description Additional information about the company
   * @default null
   */
  info: string | null;
  /**
   * Name
   * @description Name of the company
   */
  name?: string;
  /**
   * Phone
   * @description Company's phone number
   * @default null
   */
  phone: string | null;
  /**
   * Supplier Tax
   * @description Tax rate for the supplier (percentage)
   * @default null
   */
  supplier_tax: number | null;
  /**
   * Tags
   * @description Tags associated with the company
   * @default null
   */
  tags: string[] | null;
  /**
   * Type
   * @description Type of the company
   * @enum {string}
   */
  type?: "customer" | "supplier" | "organization";
  /**
   * User Id
   * @description ID of the responsible user
   * @default null
   */
  user_id: number | null;
  /**
   * Vat Identifier
   * @description European Union VAT identification number
   * @default null
   */
  vat_identifier: string | null;
  /**
   * Website
   * @description Company's website URL
   * @default null
   */
  website: string | null;
};

/**
 * Type of MOCO's MOCO_COMPANY_CREATE tool output.
 */
type MOCO_COMPANY_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Postal address
       * @default null
       */
      address: string | null;
      /**
       * Alternative Correspondence Language
       * @description Use alternative correspondence language
       * @default null
       */
      alternative_correspondence_language: boolean | null;
      /**
       * Billing Email Cc
       * @description Billing CC email
       * @default null
       */
      billing_email_cc: string | null;
      /**
       * Billing Notes
       * @description Notes related to billing
       * @default null
       */
      billing_notes: string | null;
      /**
       * Billing Tax
       * @description Billing tax percentage
       */
      billing_tax: number;
      /**
       * Country Code
       * @description ISO Alpha-2 country code
       * @default null
       */
      country_code: string | null;
      /**
       * Created At
       * @description Creation timestamp (ISO 8601)
       */
      created_at: string;
      /**
       * Credit Number
       * @description Credit number if bookkeeping is enabled
       * @default null
       */
      credit_number: number | null;
      /**
       * Currency
       * @description Currency code e.g., CHF
       * @default null
       */
      currency: string | null;
      /**
       * Custom Properties
       * @description Custom properties key/value
       * @default null
       */
      custom_properties: {
          [key: string]: string;
      } | null;
      /**
       * Custom Rates
       * @description Indicates if custom rates are used
       */
      custom_rates: boolean;
      /**
       * Debit Number
       * @description Debit number if bookkeeping is enabled
       * @default null
       */
      debit_number: number | null;
      /**
       * Default Cash Discount
       * @description Default cash discount %
       * @default null
       */
      default_cash_discount: number | null;
      /**
       * Default Cash Discount Days
       * @description Days allowed for cash discount
       * @default null
       */
      default_cash_discount_days: number | null;
      /**
       * Default Discount
       * @description Default discount %
       * @default null
       */
      default_discount: number | null;
      /**
       * Default Invoice Due Days
       * @description Default invoice due days
       * @default null
       */
      default_invoice_due_days: number | null;
      /**
       * Email
       * @description Primary email address
       * @default null
       */
      email: string | null;
      /**
       * Fax
       * @description Fax number
       * @default null
       */
      fax: string | null;
      /**
       * Footer
       * @description Footer text for invoices
       * @default null
       */
      footer: string | null;
      /**
       * Id
       * @description Company unique identifier
       */
      id: number;
      /**
       * Identifier
       * @description Company identifier/reference
       * @default null
       */
      identifier: string | null;
      /**
       * Include Time Report
       * @description Indicates if time reports are included
       */
      include_time_report: boolean;
      /**
       * Info
       * @description Additional info about the company
       * @default null
       */
      info: string | null;
      /**
       * Intern
       * @description Indicates if this company is internal
       */
      intern: boolean;
      /**
       * Name
       * @description Name of the company
       */
      name: string;
      /**
       * Phone
       * @description Phone number
       * @default null
       */
      phone: string | null;
      /**
       * Projects
       * @description Projects linked to the company
       */
      projects?: {
          /**
           * Active
           * @description Indicates if project is active
           */
          active: boolean;
          /**
           * Billable
           * @description Indicates if project is billable
           */
          billable: boolean;
          /**
           * Id
           * @description Project unique identifier
           */
          id: number;
          /**
           * Identifier
           * @description Project identifier
           */
          identifier: string;
          /**
           * Name
           * @description Project name
           */
          name: string;
      }[];
      /**
       * MOCOCompanyCreateResponseSupplierVAT
       * @description Supplier VAT details
       * @default null
       */
      supplier_vat: {
          /**
           * Active
           * @description Indicates if VAT is active
           */
          active: boolean;
          /**
           * Intra Eu
           * @description Indicates if intra-EU trade applies
           */
          intra_eu: boolean;
          /**
           * Reverse Charge
           * @description Indicates if reverse charge applies
           */
          reverse_charge: boolean;
          /**
           * Tax
           * @description Tax percentage
           */
          tax: number;
      } | null;
      /**
       * Tags
       * @description Tags associated with the company
       */
      tags?: string[];
      /**
       * Type
       * @description Type of the company
       */
      type: string;
      /**
       * Updated At
       * @description Last update timestamp (ISO 8601)
       */
      updated_at: string;
      /**
       * User
       * @description Responsible user
       */
      user: {
          /**
           * Firstname
           * @description User's first name
           */
          firstname: string;
          /**
           * Id
           * @description User's unique identifier
           */
          id: number;
          /**
           * Lastname
           * @description User's last name
           */
          lastname: string;
      };
      /**
       * Vat Identifier
       * @description VAT identification number
       * @default null
       */
      vat_identifier: string | null;
      /**
       * Website
       * @description Website URL
       * @default null
       */
      website: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MOCO's MOCO_COMPANY_DELETE tool input.
 */
type MOCO_COMPANY_DELETE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the company to delete
   */
  id?: number;
};

/**
 * Type of MOCO's MOCO_COMPANY_DELETE tool output.
 */
type MOCO_COMPANY_DELETE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the deletion was successful
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
 * Type of MOCO's MOCO_CONTACTS_LIST tool input.
 */
type MOCO_CONTACTS_LIST_INPUT = {
  /**
   * Page
   * @description Page number for pagination, must be >=1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of contacts per page, must be >=1.
   * @default null
   */
  per_page: number | null;
  /**
   * Phone
   * @description Reverse lookup in work_phone or mobile_phone.
   * @default null
   */
  phone: string | null;
  /**
   * Tags
   * @description Comma-separated tags to filter contacts.
   * @default null
   */
  tags: string | null;
  /**
   * Term
   * @description Full-text search for firstname, lastname, work_email, or company.
   * @default null
   */
  term: string | null;
};

/**
 * Type of MOCO's MOCO_CONTACTS_LIST tool output.
 */
type MOCO_CONTACTS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of contacts returned.
       */
      contacts: {
          /**
           * Avatar Url
           * Format: uri
           * @description URL to the contact's avatar image.
           * @default null
           */
          avatar_url: string | null;
          /**
           * Birthday
           * @description Birthday (YYYY-MM-DD).
           * @default null
           */
          birthday: string | null;
          /**
           * Company
           * @description Associated company.
           * @default null
           */
          company: {
              /**
               * Id
               * @description Unique company identifier.
               */
              id: number;
              /**
               * Name
               * @description Name of the company.
               */
              name: string;
              /**
               * Type
               * @description Company type, e.g., 'customer'.
               */
              type: string;
          } | null;
          /**
           * Created At
           * @description ISO8601 timestamp when created.
           */
          created_at: string;
          /**
           * Firstname
           * @description First name of the contact.
           */
          firstname: string;
          /**
           * Gender
           * @description Gender: 'M', 'F', or 'U'.
           * @enum {string}
           */
          gender: "M" | "F" | "U";
          /**
           * Home Address
           * @description Home address.
           * @default null
           */
          home_address: string | null;
          /**
           * Home Email
           * @description Home email address.
           * @default null
           */
          home_email: string | null;
          /**
           * Id
           * @description Contact unique identifier.
           */
          id: number;
          /**
           * Job Position
           * @description Job position or title.
           * @default null
           */
          job_position: string | null;
          /**
           * Lastname
           * @description Last name of the contact.
           */
          lastname: string;
          /**
           * Mobile Phone
           * @description Mobile phone number.
           * @default null
           */
          mobile_phone: string | null;
          /**
           * Tags
           * @description List of tags assigned to the contact.
           */
          tags?: string[];
          /**
           * Title
           * @description Title of the contact.
           * @default null
           */
          title: string | null;
          /**
           * Updated At
           * @description ISO8601 timestamp when updated.
           */
          updated_at: string;
          /**
           * Work Address
           * @description Work address.
           * @default null
           */
          work_address: string | null;
          /**
           * Work Email
           * @description Work email address.
           * @default null
           */
          work_email: string | null;
          /**
           * Work Fax
           * @description Work fax number.
           * @default null
           */
          work_fax: string | null;
          /**
           * Work Phone
           * @description Work phone number.
           * @default null
           */
          work_phone: string | null;
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
 * Type of MOCO's MOCO_DEALS_LIST tool input.
 */
type MOCO_DEALS_LIST_INPUT = {
  /**
   * Closed From
   * @description Include deals closed on or after this date (YYYY-MM-DD).
   * @default null
   */
  closed_from: string | null;
  /**
   * Closed To
   * @description Include deals closed on or before this date (YYYY-MM-DD).
   * @default null
   */
  closed_to: string | null;
  /**
   * Company Id
   * @description Filter deals by associated company ID.
   * @default null
   */
  company_id: number | null;
  /**
   * Status
   * @description Filter deals by status: one of 'potential', 'pending', 'won', 'lost', or 'dropped'.
   * @default null
   * @enum {string|null}
   */
  status: "potential" | "pending" | "won" | "lost" | "dropped" | null;
  /**
   * Tags
   * @description Comma-separated list of tags to filter by, e.g., 'Important,Strategic'.
   * @default null
   */
  tags: string | null;
};

/**
 * Type of MOCO's MOCO_DEALS_LIST tool output.
 */
type MOCO_DEALS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deals
       * @description List of deals returned by the API.
       */
      deals: {
          /**
           * Category
           * @description Deal category data.
           */
          category: {
              /**
               * Id
               * @description Category unique identifier.
               */
              id: number;
              /**
               * Name
               * @description Category name.
               */
              name: string;
              /**
               * Probability
               * @description Probability percentage of winning.
               */
              probability: number;
          };
          /**
           * Closed On
           * @description Deal close date (YYYY-MM-DD).
           * @default null
           */
          closed_on: string | null;
          /**
           * Company
           * @description Associated company data.
           * @default null
           */
          company: {
              /**
               * Id
               * @description Company unique identifier.
               */
              id: number;
              /**
               * Name
               * @description Company name.
               */
              name: string;
              /**
               * Type
               * @description Type of the company, e.g., 'customer'.
               */
              type: string;
          } | null;
          /**
           * Created At
           * @description Creation timestamp (ISO8601).
           */
          created_at: string;
          /**
           * Currency
           * @description Currency code, e.g., 'CHF'.
           */
          currency: string;
          /**
           * Custom Properties
           * @description Custom key/value properties for the deal.
           */
          custom_properties?: {
              [key: string]: string;
          };
          /**
           * Id
           * @description Deal unique identifier.
           */
          id: number;
          /**
           * Info
           * @description Additional deal information.
           * @default null
           */
          info: string | null;
          /**
           * Money
           * @description Monetary value of the deal.
           */
          money: number;
          /**
           * Name
           * @description Deal name.
           */
          name: string;
          /**
           * Person
           * @description Associated person data.
           * @default null
           */
          person: {
              /**
               * Id
               * @description Person unique identifier.
               */
              id: number;
              /**
               * Name
               * @description Person full name.
               */
              name: string;
          } | null;
          /**
           * Reminder Date
           * @description Reminder date (YYYY-MM-DD).
           * @default null
           */
          reminder_date: string | null;
          /**
           * Service Period From
           * @description Service start date (YYYY-MM-DD).
           * @default null
           */
          service_period_from: string | null;
          /**
           * Service Period To
           * @description Service end date (YYYY-MM-DD).
           * @default null
           */
          service_period_to: string | null;
          /**
           * Status
           * @description Deal status.
           */
          status: string;
          /**
           * Updated At
           * @description Last updated timestamp (ISO8601).
           */
          updated_at: string;
          /**
           * User
           * @description User responsible for the deal.
           */
          user: {
              /**
               * Firstname
               * @description User first name.
               */
              firstname: string;
              /**
               * Id
               * @description User unique identifier.
               */
              id: number;
              /**
               * Lastname
               * @description User last name.
               */
              lastname: string;
          };
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
 * Type of MOCO's MOCO_DEAL_CATEGORIES_LIST tool input.
 */
type MOCO_DEAL_CATEGORIES_LIST_INPUT = object;

/**
 * Type of MOCO's MOCO_DEAL_CATEGORIES_LIST tool output.
 */
type MOCO_DEAL_CATEGORIES_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deal Categories
       * @description List of deal category objects returned by the API.
       */
      deal_categories: {
          /**
           * Id
           * @description Unique identifier of the deal category.
           */
          id: number;
          /**
           * Name
           * @description Name of the deal category.
           */
          name: string;
          /**
           * Probability
           * @description Probability percentage of winning for this category (0-100).
           */
          probability: number;
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
 * Type of MOCO's MOCO_DEAL_DELETE tool input.
 */
type MOCO_DEAL_DELETE_INPUT = {
  /**
   * Id
   * @description The unique identifier of the deal to delete
   */
  id?: number;
};

/**
 * Type of MOCO's MOCO_DEAL_DELETE tool output.
 */
type MOCO_DEAL_DELETE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Category
       * @description Nested category information in a deal.
       * @default null
       */
      category: {
          /**
           * Id
           * @description Category ID
           */
          id: number;
          /**
           * Name
           * @description Category name
           * @default null
           */
          name: string | null;
          /**
           * Probability
           * @description Probability percentage for the category
           * @default null
           */
          probability: number | null;
      } | null;
      /**
       * Closed On
       * @description Date when the deal was closed (YYYY-MM-DD)
       * @default null
       */
      closed_on: string | null;
      /**
       * Company
       * @description Nested company information in a deal.
       * @default null
       */
      company: {
          /**
           * Id
           * @description Company ID
           */
          id: number;
          /**
           * Name
           * @description Company name
           * @default null
           */
          name: string | null;
          /**
           * Type
           * @description Type of the company
           * @default null
           */
          type: string | null;
      } | null;
      /**
       * Created At
       * @description Timestamp of creation (ISO 8601)
       * @default null
       */
      created_at: string | null;
      /**
       * Currency
       * @description Currency code (e.g., CHF, EUR)
       * @default null
       */
      currency: string | null;
      /**
       * Custom Properties
       * @description Custom properties set for the deal
       * @default null
       */
      custom_properties: {
          [key: string]: string;
      } | null;
      /**
       * Id
       * @description Unique identifier for the deal
       */
      id: number;
      /**
       * Info
       * @description Additional information about the deal
       * @default null
       */
      info: string | null;
      /**
       * Money
       * @description Monetary value of the deal
       * @default null
       */
      money: number | null;
      /**
       * Name
       * @description Name of the deal
       * @default null
       */
      name: string | null;
      /**
       * Person
       * @description Nested person information in a deal.
       * @default null
       */
      person: {
          /**
           * Id
           * @description Person ID
           */
          id: number;
          /**
           * Name
           * @description Person name
           * @default null
           */
          name: string | null;
      } | null;
      /**
       * Reminder Date
       * @description Reminder date (YYYY-MM-DD)
       * @default null
       */
      reminder_date: string | null;
      /**
       * Service Period From
       * @description Service period start date (YYYY-MM-DD)
       * @default null
       */
      service_period_from: string | null;
      /**
       * Service Period To
       * @description Service period end date (YYYY-MM-DD)
       * @default null
       */
      service_period_to: string | null;
      /**
       * Status
       * @description Status of the deal (e.g., potential, pending, won, lost, dropped)
       * @default null
       */
      status: string | null;
      /**
       * Updated At
       * @description Timestamp of last update (ISO 8601)
       * @default null
       */
      updated_at: string | null;
      /**
       * User
       * @description Nested user (representative) information in a deal.
       * @default null
       */
      user: {
          /**
           * Firstname
           * @description First name of the user
           * @default null
           */
          firstname: string | null;
          /**
           * Id
           * @description User ID
           */
          id: number;
          /**
           * Lastname
           * @description Last name of the user
           * @default null
           */
          lastname: string | null;
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
 * Type of MOCO's MOCO_DEAL_GET tool input.
 */
type MOCO_DEAL_GET_INPUT = {
  /**
   * Id
   * @description The unique identifier of the deal to retrieve
   */
  id?: number;
};

/**
 * Type of MOCO's MOCO_DEAL_GET tool output.
 */
type MOCO_DEAL_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Category
       * @description Nested category information in a deal.
       * @default null
       */
      category: {
          /**
           * Id
           * @description Category ID
           */
          id: number;
          /**
           * Name
           * @description Category name
           * @default null
           */
          name: string | null;
          /**
           * Probability
           * @description Probability percentage for the category
           * @default null
           */
          probability: number | null;
      } | null;
      /**
       * Closed On
       * @description Date when the deal was closed (YYYY-MM-DD)
       * @default null
       */
      closed_on: string | null;
      /**
       * Company
       * @description Nested company information in a deal.
       * @default null
       */
      company: {
          /**
           * Id
           * @description Company ID
           */
          id: number;
          /**
           * Name
           * @description Company name
           * @default null
           */
          name: string | null;
          /**
           * Type
           * @description Type of the company
           * @default null
           */
          type: string | null;
      } | null;
      /**
       * Created At
       * @description Timestamp of creation (ISO 8601)
       * @default null
       */
      created_at: string | null;
      /**
       * Currency
       * @description Currency code for the deal money (e.g., CHF, EUR)
       * @default null
       */
      currency: string | null;
      /**
       * Custom Properties
       * @description Custom properties set for the deal
       * @default null
       */
      custom_properties: {
          [key: string]: string;
      } | null;
      /**
       * Id
       * @description Unique identifier for the deal
       */
      id: number;
      /**
       * Info
       * @description Additional information about the deal
       * @default null
       */
      info: string | null;
      /**
       * Money
       * @description Monetary value of the deal
       * @default null
       */
      money: number | null;
      /**
       * Name
       * @description Name of the deal
       * @default null
       */
      name: string | null;
      /**
       * Person
       * @description Nested person information in a deal.
       * @default null
       */
      person: {
          /**
           * Id
           * @description Person ID
           */
          id: number;
          /**
           * Name
           * @description Person name
           * @default null
           */
          name: string | null;
      } | null;
      /**
       * Reminder Date
       * @description Reminder date (YYYY-MM-DD)
       * @default null
       */
      reminder_date: string | null;
      /**
       * Service Period From
       * @description Service period start date (YYYY-MM-DD)
       * @default null
       */
      service_period_from: string | null;
      /**
       * Service Period To
       * @description Service period end date (YYYY-MM-DD)
       * @default null
       */
      service_period_to: string | null;
      /**
       * Status
       * @description Status of the deal (e.g., potential, pending, won, lost, dropped)
       * @default null
       */
      status: string | null;
      /**
       * Updated At
       * @description Timestamp of last update (ISO 8601)
       * @default null
       */
      updated_at: string | null;
      /**
       * User
       * @description Nested user (representative) information in a deal.
       * @default null
       */
      user: {
          /**
           * Firstname
           * @description First name of the user
           * @default null
           */
          firstname: string | null;
          /**
           * Id
           * @description User ID
           */
          id: number;
          /**
           * Lastname
           * @description Last name of the user
           * @default null
           */
          lastname: string | null;
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
 * Type of MOCO's MOCO_DEAL_UPDATE tool input.
 */
type MOCO_DEAL_UPDATE_INPUT = {
  /**
   * Closed On
   * @description Date when the deal was closed (YYYY-MM-DD)
   * @default null
   */
  closed_on: string | null;
  /**
   * Company Id
   * @description ID of the associated company
   * @default null
   */
  company_id: number | null;
  /**
   * Currency
   * @description Three-letter currency code
   * @default null
   */
  currency: string | null;
  /**
   * Deal Category Id
   * @description ID of the deal category
   * @default null
   */
  deal_category_id: number | null;
  /**
   * Id
   * @description The unique identifier of the deal to update
   */
  id?: number;
  /**
   * Info
   * @description Additional information for the deal
   * @default null
   */
  info: string | null;
  /**
   * Money
   * @description Monetary value of the deal; must be non-negative
   * @default null
   */
  money: number | null;
  /**
   * Name
   * @description Name of the deal
   * @default null
   */
  name: string | null;
  /**
   * Person Id
   * @description ID of the associated person
   * @default null
   */
  person_id: number | null;
  /**
   * Reminder Date
   * @description Reminder date (YYYY-MM-DD)
   * @default null
   */
  reminder_date: string | null;
  /**
   * Service Period From
   * @description Service period start date (YYYY-MM-DD)
   * @default null
   */
  service_period_from: string | null;
  /**
   * Service Period To
   * @description Service period end date (YYYY-MM-DD)
   * @default null
   */
  service_period_to: string | null;
  /**
   * Status
   * @description Status of the deal
   * @default null
   * @enum {string|null}
   */
  status: "potential" | "pending" | "won" | "lost" | "dropped" | null;
  /**
   * Tags
   * @description List of tags
   * @default null
   */
  tags: string[] | null;
  /**
   * User Id
   * @description ID of the responsible user
   * @default null
   */
  user_id: number | null;
};

/**
 * Type of MOCO's MOCO_DEAL_UPDATE tool output.
 */
type MOCO_DEAL_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Category
       * @description Nested category information in a deal.
       * @default null
       */
      category: {
          /**
           * Id
           * @description Category ID
           */
          id: number;
          /**
           * Name
           * @description Category name
           * @default null
           */
          name: string | null;
          /**
           * Probability
           * @description Probability percentage for the category
           * @default null
           */
          probability: number | null;
      } | null;
      /**
       * Closed On
       * @description Date when the deal was closed (YYYY-MM-DD)
       * @default null
       */
      closed_on: string | null;
      /**
       * Company
       * @description Nested company information in a deal.
       * @default null
       */
      company: {
          /**
           * Id
           * @description Company ID
           */
          id: number;
          /**
           * Name
           * @description Company name
           * @default null
           */
          name: string | null;
          /**
           * Type
           * @description Type of the company
           * @default null
           */
          type: string | null;
      } | null;
      /**
       * Created At
       * @description Timestamp of creation (ISO 8601)
       * @default null
       */
      created_at: string | null;
      /**
       * Currency
       * @description Currency code (e.g., CHF, EUR)
       * @default null
       */
      currency: string | null;
      /**
       * Custom Properties
       * @description Custom properties set for the deal
       * @default null
       */
      custom_properties: {
          [key: string]: string;
      } | null;
      /**
       * Id
       * @description Unique identifier for the deal
       */
      id: number;
      /**
       * Info
       * @description Additional information about the deal
       * @default null
       */
      info: string | null;
      /**
       * Money
       * @description Monetary value of the deal
       * @default null
       */
      money: number | null;
      /**
       * Name
       * @description Name of the deal
       * @default null
       */
      name: string | null;
      /**
       * Person
       * @description Nested person information in a deal.
       * @default null
       */
      person: {
          /**
           * Id
           * @description Person ID
           */
          id: number;
          /**
           * Name
           * @description Person name
           * @default null
           */
          name: string | null;
      } | null;
      /**
       * Reminder Date
       * @description Reminder date (YYYY-MM-DD)
       * @default null
       */
      reminder_date: string | null;
      /**
       * Service Period From
       * @description Service period start date (YYYY-MM-DD)
       * @default null
       */
      service_period_from: string | null;
      /**
       * Service Period To
       * @description Service period end date (YYYY-MM-DD)
       * @default null
       */
      service_period_to: string | null;
      /**
       * Status
       * @description Status of the deal
       * @default null
       */
      status: string | null;
      /**
       * Updated At
       * @description Timestamp of last update (ISO 8601)
       * @default null
       */
      updated_at: string | null;
      /**
       * User
       * @description Nested user (representative) information in a deal.
       * @default null
       */
      user: {
          /**
           * Firstname
           * @description First name of the user
           * @default null
           */
          firstname: string | null;
          /**
           * Id
           * @description User ID
           */
          id: number;
          /**
           * Lastname
           * @description Last name of the user
           * @default null
           */
          lastname: string | null;
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
 * Type of MOCO's MOCO_INVOICES_LIST tool input.
 */
type MOCO_INVOICES_LIST_INPUT = {
  /**
   * Company Id
   * @description Filter invoices by associated company ID.
   * @default null
   */
  company_id: number | null;
  /**
   * Date From
   * @description Include invoices dated on or after this date (YYYY-MM-DD).
   * @default null
   */
  date_from: string | null;
  /**
   * Date To
   * @description Include invoices dated on or before this date (YYYY-MM-DD).
   * @default null
   */
  date_to: string | null;
  /**
   * Identifier
   * @description Filter by exact invoice identifier (invoice number).
   * @default null
   */
  identifier: string | null;
  /**
   * Include Disregarded
   * @description True to include disregarded (marked as billed) invoices, default is false.
   * @default null
   */
  include_disregarded: boolean | null;
  /**
   * Not Booked
   * @description True to include only non-booked invoices.
   * @default null
   */
  not_booked: boolean | null;
  /**
   * Page
   * @description Page number for paginated results.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of invoices per page for pagination.
   * @default null
   */
  per_page: number | null;
  /**
   * Project Id
   * @description Filter invoices by associated project ID.
   * @default null
   */
  project_id: number | null;
  /**
   * Service Period From
   * @description Include invoices with service period starting on or after this date (YYYY-MM-DD).
   * @default null
   */
  service_period_from: string | null;
  /**
   * Service Period To
   * @description Include invoices with service period ending on or before this date (YYYY-MM-DD).
   * @default null
   */
  service_period_to: string | null;
  /**
   * Status
   * @description Comma-separated list of invoice statuses to filter by (e.g., 'draft,paid').
   * @default null
   */
  status: string | null;
  /**
   * Tags
   * @description Comma-separated list of tags to filter invoices (e.g., 'Periodenfremd,Inkasso').
   * @default null
   */
  tags: string | null;
  /**
   * Term
   * @description Wildcard search term within title and identifier fields.
   * @default null
   */
  term: string | null;
};

/**
 * Type of MOCO's MOCO_INVOICES_LIST tool output.
 */
type MOCO_INVOICES_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Invoices
       * @description List of invoice summary objects.
       */
      invoices: {
          /**
           * Activity Hours Modified
           * @description True if any billed hours were modified.
           */
          activity_hours_modified: boolean;
          /**
           * Cash Discount
           * @description Cash discount percentage.
           * @default null
           */
          cash_discount: number | null;
          /**
           * Cash Discount Days
           * @description Days allowed for cash discount.
           * @default null
           */
          cash_discount_days: number | null;
          /**
           * Created At
           * @description Timestamp when the invoice was created (ISO8601).
           */
          created_at: string;
          /**
           * Credit Number
           * @description Credit note number if any.
           * @default null
           */
          credit_number: string | null;
          /**
           * Currency
           * @description Currency code, e.g., 'CHF'.
           */
          currency: string;
          /**
           * Custom Properties
           * @description Custom property key-value pairs.
           * @default null
           */
          custom_properties: {
              [key: string]: string;
          } | null;
          /**
           * Customer Id
           * @description ID of the invoice customer.
           */
          customer_id: number;
          /**
           * Date
           * @description Invoice date (YYYY-MM-DD).
           */
          date: string;
          /**
           * Debit Number
           * @description Debit note number if any.
           * @default null
           */
          debit_number: string | null;
          /**
           * Discount
           * @description Discount percentage applied.
           * @default null
           */
          discount: number | null;
          /**
           * Due Date
           * @description Invoice due date (YYYY-MM-DD).
           */
          due_date: string;
          /**
           * File Url
           * @description Temporary URL to the invoice file.
           * @default null
           */
          file_url: string | null;
          /**
           * Gross Total
           * @description Gross total amount including tax.
           */
          gross_total: number;
          /**
           * Id
           * @description Unique invoice ID.
           */
          id: number;
          /**
           * Identifier
           * @description Invoice number identifier.
           */
          identifier: string;
          /**
           * Locked
           * @description True if the invoice is locked.
           */
          locked: boolean;
          /**
           * Net Total
           * @description Net total amount.
           */
          net_total: number;
          /**
           * Offer Id
           * @description ID of the originating offer, if any.
           * @default null
           */
          offer_id: number | null;
          /**
           * Project Id
           * @description ID of the associated project.
           * @default null
           */
          project_id: number | null;
          /**
           * Recipient Address
           * @description Formatted recipient address.
           */
          recipient_address: string;
          /**
           * Reversal
           * @description True if this is a reversal (cancellation) invoice.
           */
          reversal: boolean;
          /**
           * Reversal Invoice Id
           * @description ID of the reversal invoice if canceled.
           * @default null
           */
          reversal_invoice_id: number | null;
          /**
           * Reversed
           * @description True if the invoice has been reversed (canceled).
           */
          reversed: boolean;
          /**
           * Reversed Invoice Id
           * @description ID of the original invoice if this is a reversal.
           * @default null
           */
          reversed_invoice_id: number | null;
          /**
           * Service Period
           * @description Service period label.
           * @default null
           */
          service_period: string | null;
          /**
           * Service Period From
           * @description Service period start date (YYYY-MM-DD).
           * @default null
           */
          service_period_from: string | null;
          /**
           * Service Period To
           * @description Service period end date (YYYY-MM-DD).
           * @default null
           */
          service_period_to: string | null;
          /**
           * Status
           * @description Current status of the invoice.
           */
          status: string;
          /**
           * Tags
           * @description List of tags assigned to the invoice.
           */
          tags: string[];
          /**
           * Tax
           * @description Tax rate percentage applied.
           */
          tax: number;
          /**
           * Title
           * @description Title of the invoice.
           */
          title: string;
          /**
           * Updated At
           * @description Timestamp when the invoice was last updated (ISO8601).
           */
          updated_at: string;
          /**
           * User
           * @description User who created the invoice.
           */
          user: {
              /**
               * Firstname
               * @description User first name.
               */
              firstname: string;
              /**
               * Id
               * @description User unique identifier.
               */
              id: number;
              /**
               * Lastname
               * @description User last name.
               */
              lastname: string;
          };
          /**
           * Vat
           * @description VAT details object.
           */
          vat: {
              /**
               * Active
               * @description True if VAT is active.
               */
              active: boolean;
              /**
               * Intra Eu
               * @description True if intra-EU transaction.
               */
              intra_eu: boolean;
              /**
               * Notice Tax Exemption
               * @description Tax exemption notice text.
               * @default null
               */
              notice_tax_exemption: string | null;
              /**
               * Notice Tax Exemption Alt
               * @description Alternate tax exemption notice text.
               * @default null
               */
              notice_tax_exemption_alt: string | null;
              /**
               * Print Gross Total
               * @description True to print gross total on invoice.
               */
              print_gross_total: boolean;
              /**
               * Reverse Charge
               * @description True if reverse charge applies.
               */
              reverse_charge: boolean;
              /**
               * Tax
               * @description Tax rate percentage.
               */
              tax: number;
          };
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
 * Type of MOCO's MOCO_MOCO_INVOICE_CREATE tool input.
 */
type MOCO_MOCO_INVOICE_CREATE_INPUT = {
  /**
   * Cash Discount
   * @description Cash discount percentage
   * @default null
   */
  cash_discount: number | null;
  /**
   * Cash Discount Days
   * @description Days cash discount valid
   * @default null
   */
  cash_discount_days: number | null;
  /**
   * Change Address
   * @enum {string|null}
   */
  change_address?: "invoice" | "project" | "customer" | null;
  /**
   * Currency
   * @description Three-letter currency code, e.g. 'CHF'
   */
  currency?: string;
  /**
   * Custom Properties
   * @description Custom key/value pairs
   * @default null
   */
  custom_properties: {
      [key: string]: string;
  } | null;
  /**
   * Customer Id
   * @description ID of the assigned client
   */
  customer_id?: number;
  /**
   * Date
   * @description Invoice date in YYYY-MM-DD format
   */
  date?: string;
  /**
   * Discount
   * @description Discount percentage
   * @default null
   */
  discount: number | null;
  /**
   * Due Date
   * @description Due date in YYYY-MM-DD format
   */
  due_date?: string;
  /**
   * Footer
   * @description Footer text (supports variables)
   * @default null
   */
  footer: string | null;
  /**
   * Internal Contact Id
   * @description ID of an internal user
   * @default null
   */
  internal_contact_id: number | null;
  /**
   * Items
   * @description List of invoice positions
   */
  items?: {
      /**
       * Activity Ids
       * @description Bind existing activity IDs to this position
       * @default null
       */
      activity_ids: number[] | null;
      /**
       * Description
       * @description Text for 'description' type
       * @default null
       */
      description: string | null;
      /**
       * Expense Ids
       * @description Bind existing expense IDs to this position
       * @default null
       */
      expense_ids: number[] | null;
      /**
       * Net Total
       * @description Fixed net total for flat-rate items
       * @default null
       */
      net_total: number | null;
      /**
       * Quantity
       * @description Multiplier for 'item' positions
       * @default null
       */
      quantity: number | null;
      /**
       * Subtotal Type
       * @enum {string|null}
       */
      subtotal_type: "part_total" | "sub_total" | null;
      /**
       * Title
       * @description Label for 'title' or 'item' types
       * @default null
       */
      title: string | null;
      /**
       * Type
       * @description Position type
       * @enum {string}
       */
      type: "title" | "description" | "item" | "subtotal" | "page-break" | "separator";
      /**
       * Unit
       * @description Unit label, e.g. 'h' or 'pcs'
       * @default null
       */
      unit: string | null;
      /**
       * Unit Price
       * @description Price per unit for 'item' positions
       * @default null
       */
      unit_price: number | null;
  }[];
  /**
   * Print Detail Columns
   * @description Show/hide detail columns
   * @default null
   */
  print_detail_columns: boolean | null;
  /**
   * Project Id
   * @description ID of the assigned project
   * @default null
   */
  project_id: number | null;
  /**
   * Recipient Address
   * @description Full recipient address, lines separated by '
   *     '
   */
  recipient_address?: string;
  /**
   * Salutation
   * @description Salutation text (supports variables)
   * @default null
   */
  salutation: string | null;
  /**
   * Service Period From
   * @description Service period start date (YYYY-MM-DD)
   * @default null
   */
  service_period_from: string | null;
  /**
   * Service Period To
   * @description Service period end date (YYYY-MM-DD)
   * @default null
   */
  service_period_to: string | null;
  /**
   * Status
   * @enum {string|null}
   */
  status?: "created" | "draft" | null;
  /**
   * Tags
   * @description Tags to attach to invoice
   * @default null
   */
  tags: string[] | null;
  /**
   * Tax
   * @description Tax percentage, e.g. 8.0
   */
  tax?: number;
  /**
   * Title
   * @description Invoice title
   */
  title?: string;
};

/**
 * Type of MOCO's MOCO_MOCO_INVOICE_CREATE tool output.
 */
type MOCO_MOCO_INVOICE_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Activity Hours Modified
       * @description True if any billed hours were modified
       */
      activity_hours_modified: boolean;
      /**
       * Cash Discount
       * @description Cash discount percentage
       * @default null
       */
      cash_discount: number | null;
      /**
       * Cash Discount Days
       * @description Days allowed for cash discount
       * @default null
       */
      cash_discount_days: number | null;
      /**
       * Created At
       * @description Timestamp when the invoice was created
       */
      created_at: string;
      /**
       * Credit Number
       * @description Credit note number if any
       * @default null
       */
      credit_number: string | null;
      /**
       * Currency
       * @description Currency code, e.g. 'CHF'
       */
      currency: string;
      /**
       * Custom Properties
       * @description Custom property key-value pairs
       * @default null
       */
      custom_properties: {
          [key: string]: string;
      } | null;
      /**
       * Customer Id
       * @description ID of the invoice customer
       */
      customer_id: number;
      /**
       * Date
       * @description Invoice date (YYYY-MM-DD)
       */
      date: string;
      /**
       * Debit Number
       * @description Debit note number if any
       * @default null
       */
      debit_number: string | null;
      /**
       * Discount
       * @description Discount percentage applied
       * @default null
       */
      discount: number | null;
      /**
       * Due Date
       * @description Invoice due date (YYYY-MM-DD)
       */
      due_date: string;
      /**
       * File Url
       * @description Temporary URL to the invoice file
       * @default null
       */
      file_url: string | null;
      /**
       * Footer
       * @description Footer text (HTML)
       * @default null
       */
      footer: string | null;
      /**
       * Gross Total
       * @description Gross total amount including tax
       */
      gross_total: number;
      /**
       * Id
       * @description Unique invoice ID
       */
      id: number;
      /**
       * Identifier
       * @description Invoice number identifier
       * @default null
       */
      identifier: string | null;
      /**
       * Items
       * @description List of itemized positions
       */
      items: {
          /**
           * Description
           * @description Text for 'description'
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Position ID
           */
          id: number;
          /**
           * Net Total
           * @description Net total for this position
           */
          net_total: number;
          /**
           * Quantity
           * @description Multiplier for 'item'
           * @default null
           */
          quantity: number | null;
          /**
           * Title
           * @description Label for 'title' or 'item'
           * @default null
           */
          title: string | null;
          /**
           * Type
           * @description Position type
           * @enum {string}
           */
          type: "title" | "description" | "item" | "subtotal" | "page-break" | "separator";
          /**
           * Unit
           * @description Unit label, e.g. 'h'
           * @default null
           */
          unit: string | null;
          /**
           * Unit Price
           * @description Price per unit
           * @default null
           */
          unit_price: number | null;
      }[];
      /**
       * Locked
       * @description True if the invoice is locked
       */
      locked: boolean;
      /**
       * Net Total
       * @description Net total amount
       */
      net_total: number;
      /**
       * Offer Id
       * @description ID of the originating offer, if any
       * @default null
       */
      offer_id: number | null;
      /**
       * Payments
       * @description List of payments for this invoice
       */
      payments: {
          /**
           * Created On
           * @description Payment creation timestamp
           */
          created_on: string;
          /**
           * Currency
           * @description Currency code
           */
          currency: string;
          /**
           * Date
           * @description Payment date
           */
          date: string;
          /**
           * Id
           * @description Payment ID
           */
          id: number;
          /**
           * Paid Total
           * @description Paid amount
           */
          paid_total: number;
          /**
           * Updated On
           * @description Payment update timestamp
           */
          updated_on: string;
      }[];
      /**
       * Project Id
       * @description ID of the associated project
       * @default null
       */
      project_id: number | null;
      /**
       * Recipient Address
       * @description Formatted recipient address
       */
      recipient_address: string;
      /**
       * Reminders
       * @description List of reminders for this invoice
       */
      reminders: {
          /**
           * Created On
           * @description Reminder creation timestamp
           */
          created_on: string;
          /**
           * Date
           * @description Reminder date
           */
          date: string;
          /**
           * Due Date
           * @description Reminder due date
           */
          due_date: string;
          /**
           * Fee
           * @description Reminder fee
           */
          fee: number;
          /**
           * Id
           * @description Reminder ID
           */
          id: number;
          /**
           * Text
           * @description Reminder text content
           */
          text: string;
          /**
           * Updated On
           * @description Reminder update timestamp
           */
          updated_on: string;
      }[];
      /**
       * Reversal
       * @description True if this is a reversal invoice
       */
      reversal: boolean;
      /**
       * Reversal Invoice Id
       * @description ID of the reversal invoice if canceled
       * @default null
       */
      reversal_invoice_id: number | null;
      /**
       * Reversed
       * @description True if the invoice has been reversed (canceled)
       */
      reversed: boolean;
      /**
       * Reversed Invoice Id
       * @description ID of the original invoice if reversal
       * @default null
       */
      reversed_invoice_id: number | null;
      /**
       * Salutation
       * @description Salutation text (HTML)
       * @default null
       */
      salutation: string | null;
      /**
       * Service Period
       * @description Service period label
       * @default null
       */
      service_period: string | null;
      /**
       * Service Period From
       * @description Service period start date
       * @default null
       */
      service_period_from: string | null;
      /**
       * Service Period To
       * @description Service period end date
       * @default null
       */
      service_period_to: string | null;
      /**
       * Status
       * @description Current status of the invoice
       */
      status: string;
      /**
       * Tags
       * @description List of tags assigned to the invoice
       */
      tags: string[];
      /**
       * Tax
       * @description Tax rate percentage applied
       */
      tax: number;
      /**
       * Title
       * @description Title of the invoice
       */
      title: string;
      /**
       * Updated At
       * @description Timestamp when the invoice was last updated
       */
      updated_at: string;
      /**
       * User
       * @description User who created the invoice
       */
      user: {
          /**
           * Firstname
           * @description User first name
           */
          firstname: string;
          /**
           * Id
           * @description User unique identifier
           */
          id: number;
          /**
           * Lastname
           * @description User last name
           */
          lastname: string;
      };
      /**
       * Vat
       * @description VAT details object
       */
      vat: {
          /**
           * Active
           * @description True if VAT is active
           */
          active: boolean;
          /**
           * Intra Eu
           * @description True if intra-EU transaction
           */
          intra_eu: boolean;
          /**
           * Notice Tax Exemption
           * @description Tax exemption notice text
           * @default null
           */
          notice_tax_exemption: string | null;
          /**
           * Notice Tax Exemption Alt
           * @description Alternate tax exemption notice text
           * @default null
           */
          notice_tax_exemption_alt: string | null;
          /**
           * Print Gross Total
           * @description True to print gross total
           */
          print_gross_total: boolean;
          /**
           * Reverse Charge
           * @description True if reverse charge applies
           */
          reverse_charge: boolean;
          /**
           * Tax
           * @description Tax rate percentage
           */
          tax: number;
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
 * Type of MOCO's MOCO_MOCO_PURCHASE_CREATE tool input.
 */
type MOCO_MOCO_PURCHASE_CREATE_INPUT = {
  /**
   * Company Id
   * @description ID of the supplier company
   * @default null
   */
  company_id: number | null;
  /**
   * Currency
   * @description Three-letter currency code (must be valid for the account)
   */
  currency?: string;
  /**
   * Custom Properties
   * @description Custom metadata fields
   * @default null
   */
  custom_properties: {
      [key: string]: string;
  } | null;
  /**
   * Date
   * @description Purchase date in YYYY-MM-DD format
   */
  date?: string;
  /**
   * Due Date
   * @description Due date in YYYY-MM-DD format
   * @default null
   */
  due_date: string | null;
  /**
   * FileUpload
   * @description A file to attach to the purchase as base64-encoded content.
   * @default null
   */
  file: {
      /**
       * Base64
       * @description Base64-encoded content of the file
       */
      base64: string;
      /**
       * Filename
       * @description Name of the file to attach, e.g., 'document.pdf'
       */
      filename: string;
  } | null;
  /**
   * Iban
   * @description Supplier IBAN for bank transfer
   * @default null
   */
  iban: string | null;
  /**
   * Info
   * @description Free text notes
   * @default null
   */
  info: string | null;
  /**
   * Items
   * @description List of purchase line items; at least one required
   */
  items?: {
      /**
       * Category Id
       * @description ID of the purchase category
       * @default null
       */
      category_id: number | null;
      /**
       * Tax
       * @description Tax percentage rate
       */
      tax: number;
      /**
       * Tax Included
       * @description Whether 'total' includes tax
       */
      tax_included: boolean;
      /**
       * Title
       * @description Description of this line item
       */
      title: string;
      /**
       * Total
       * @description Amount for this item (non-negative)
       */
      total: number;
  }[];
  /**
   * Payment Method
   * @description Payment method
   * @enum {string}
   */
  payment_method?: "bank_transfer" | "direct_debit" | "credit_card" | "paypal" | "cash" | "bank_transfer_swiss_qr_esr";
  /**
   * Receipt Identifier
   * @description Supplier receipt identifier
   * @default null
   */
  receipt_identifier: string | null;
  /**
   * Reference
   * @description Additional reference text
   * @default null
   */
  reference: string | null;
  /**
   * Service Period From
   * @description Service period start date
   * @default null
   */
  service_period_from: string | null;
  /**
   * Service Period To
   * @description Service period end date
   * @default null
   */
  service_period_to: string | null;
  /**
   * Status
   * @description Initial status (pending/archived)
   * @default null
   * @enum {string|null}
   */
  status: "pending" | "archived" | null;
  /**
   * Tags
   * @description List of tags to assign
   * @default null
   */
  tags: string[] | null;
  /**
   * Title
   * @description Title for the purchase; if omitted, generated from items
   * @default null
   */
  title: string | null;
  /**
   * User Id
   * @description ID of the responsible user
   * @default null
   */
  user_id: number | null;
};

/**
 * Type of MOCO's MOCO_MOCO_PURCHASE_CREATE tool output.
 */
type MOCO_MOCO_PURCHASE_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Approval Status
       * @description Approval status.
       * @enum {string}
       */
      approval_status: "none" | "approved" | "denied" | "pending";
      /**
       * PurchaseCompany
       * @description Supplier company info
       * @default null
       */
      company: {
          /**
           * Iban
           * @description Company IBAN if provided
           * @default null
           */
          iban: string | null;
          /**
           * Id
           * @description Company unique identifier
           */
          id: number;
          /**
           * Name
           * @description Company name
           */
          name: string;
      } | null;
      /**
       * Created At
       * @description Creation timestamp (ISO8601)
       */
      created_at: string;
      /**
       * PurchaseCreditCardTransaction
       * @description Credit card transaction info
       * @default null
       */
      credit_card_transaction: {
          /**
           * Source
           * @description Credit card transaction source
           */
          source: string;
          /**
           * Transaction Identifier
           * @description Transaction reference identifier
           */
          transaction_identifier: string;
      } | null;
      /**
       * Currency
       * @description Currency code, e.g., 'CHF'
       */
      currency: string;
      /**
       * Custom Properties
       * @description Custom properties.
       */
      custom_properties?: {
          [key: string]: string;
      };
      /**
       * Date
       * @description Purchase date (YYYY-MM-DD)
       */
      date: string;
      /**
       * Due Date
       * @description Due date (YYYY-MM-DD)
       * @default null
       */
      due_date: string | null;
      /**
       * File Url
       * @description URL to purchase document file
       * @default null
       */
      file_url: string | null;
      /**
       * Gross Total
       * @description Gross total amount including tax
       */
      gross_total: number;
      /**
       * Iban
       * @description IBAN used for payment
       * @default null
       */
      iban: string | null;
      /**
       * Id
       * @description Purchase unique identifier
       */
      id: number;
      /**
       * Identifier
       * @description Purchase identifier
       */
      identifier: string;
      /**
       * Info
       * @description Additional information
       * @default null
       */
      info: string | null;
      /**
       * Items
       * @description Line items of the purchase
       */
      items: {
          /**
           * Category
           * @description Associated category info
           */
          category: {
              /**
               * Credit Account
               * @description Accounting credit account code
               */
              credit_account: string;
              /**
               * Id
               * @description Category unique identifier
               */
              id: number;
              /**
               * Name
               * @description Category name
               */
              name: string;
          };
          /**
           * PurchaseExpense
           * @description Associated expense info if linked
           * @default null
           */
          expense: {
              /**
               * Id
               * @description Expense unique identifier
               */
              id: number;
              /**
               * Project
               * @description Associated project info
               */
              project: {
                  /**
                   * Company Id
                   * @description Company ID the project belongs to
                   */
                  company_id: number;
                  /**
                   * Id
                   * @description Project unique identifier
                   */
                  id: number;
              };
          } | null;
          /**
           * Gross Total
           * @description Gross amount including tax
           */
          gross_total: number;
          /**
           * Id
           * @description Purchase item unique identifier
           */
          id: number;
          /**
           * Net Total
           * @description Net amount for this item
           */
          net_total: number;
          /**
           * PurchaseReceipt
           * @description Associated receipt info if available
           * @default null
           */
          receipt: {
              /**
               * Attachment Url
               * @description URL to the receipt attachment
               */
              attachment_url: string;
              /**
               * Date
               * @description Receipt date (YYYY-MM-DD)
               */
              date: string;
              /**
               * Id
               * @description Receipt unique identifier
               */
              id: number;
              /**
               * Title
               * @description Receipt title
               */
              title: string;
          } | null;
          /**
           * Supplier Credit Number
           * @description Supplier credit note number if any
           * @default null
           */
          supplier_credit_number: number | null;
          /**
           * Tax
           * @description Tax percentage rate
           */
          tax: number;
          /**
           * Tax Included
           * @description True if the total includes tax
           */
          tax_included: boolean;
          /**
           * Tax Total
           * @description Total tax amount for this item
           */
          tax_total: number;
          /**
           * Title
           * @description Item title
           */
          title: string;
          /**
           * Vat
           * @description VAT details
           */
          vat: {
              /**
               * Active
               * @description True if VAT is active
               */
              active: boolean;
              /**
               * Intra Eu
               * @description True if intra-EU transaction
               */
              intra_eu: boolean;
              /**
               * Reverse Charge
               * @description True if reverse charge applies
               */
              reverse_charge: boolean;
              /**
               * Tax
               * @description VAT rate percentage
               */
              tax: number;
          };
      }[];
      /**
       * Net Total
       * @description Net total amount
       */
      net_total: number;
      /**
       * Payment Method
       * @description Payment method used
       */
      payment_method: string;
      /**
       * Payments
       * @description List of payments made for the purchase
       */
      payments: {
          [key: string]: unknown;
      }[];
      /**
       * Receipt Identifier
       * @description Receipt identifier
       * @default null
       */
      receipt_identifier: string | null;
      /**
       * Reference
       * @description Payment reference
       * @default null
       */
      reference: string | null;
      /**
       * PurchaseRefundRequest
       * @description Refund request info
       * @default null
       */
      refund_request: {
          /**
           * Comment
           * @description Comment on the refund request
           * @default null
           */
          comment: string | null;
          /**
           * Id
           * @description Refund request unique identifier
           */
          id: number;
          /**
           * User Id
           * @description User ID who requested the refund
           */
          user_id: number;
      } | null;
      /**
       * Service Period From
       * @description Service period start date
       * @default null
       */
      service_period_from: string | null;
      /**
       * Service Period To
       * @description Service period end date
       * @default null
       */
      service_period_to: string | null;
      /**
       * Status
       * @description Purchase status
       */
      status: string;
      /**
       * Tags
       * @description Tags associated with the purchase
       */
      tags: string[];
      /**
       * Title
       * @description Purchase title
       */
      title: string;
      /**
       * Updated At
       * @description Last update timestamp (ISO8601)
       */
      updated_at: string;
      /**
       * User
       * @description User who recorded the purchase
       */
      user: {
          /**
           * Firstname
           * @description User first name
           */
          firstname: string;
          /**
           * Id
           * @description User unique identifier
           */
          id: number;
          /**
           * Name
           * @description User last name
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
 * Type of MOCO's MOCO_OFFERS_LIST tool input.
 */
type MOCO_OFFERS_LIST_INPUT = {
  /**
   * Company Id
   * @description Comma-separated company IDs to filter, e.g., '123,456'.
   * @default null
   */
  company_id: string | null;
  /**
   * Deal Id
   * @description Comma-separated deal IDs to filter, e.g., '123,456'.
   * @default null
   */
  deal_id: string | null;
  /**
   * From Date
   * @description Include offers on or after this date (YYYY-MM-DD).
   * @default null
   */
  from_date: string | null;
  /**
   * Identifier
   * @description Filter by offer identifier, e.g., 'A1903-003'.
   * @default null
   */
  identifier: string | null;
  /**
   * Project Id
   * @description Comma-separated project IDs to filter, e.g., '123,456'.
   * @default null
   */
  project_id: string | null;
  /**
   * Sort
   * @description Sort offers by 'date', 'created_at', or 'title'.
   * @default null
   * @enum {string|null}
   */
  sort: "date" | "created_at" | "title" | null;
  /**
   * Status
   * @description Filter offers by status.
   * @default null
   * @enum {string|null}
   */
  status: "created" | "sent" | "accepted" | "partially_billed" | "billed" | "archived" | null;
  /**
   * To Date
   * @description Include offers on or before this date (YYYY-MM-DD).
   * @default null
   */
  to_date: string | null;
};

/**
 * Type of MOCO's MOCO_OFFERS_LIST tool output.
 */
type MOCO_OFFERS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Offers
       * @description List of offers returned by the API.
       */
      offers: {
          /**
           * Company
           * @description Associated company data.
           * @default null
           */
          company: {
              /**
               * Id
               * @description Company unique identifier.
               */
              id: number;
              /**
               * Name
               * @description Company name.
               */
              name: string;
          } | null;
          /**
           * Created At
           * @description Creation timestamp.
           */
          created_at: string;
          /**
           * Currency
           * @description Currency code, e.g., 'EUR'.
           */
          currency: string;
          /**
           * Custom Properties
           * @description Custom properties for the offer.
           */
          custom_properties?: {
              [key: string]: string;
          };
          /**
           * CustomerApproval
           * @description Customer approval details.
           * @default null
           */
          customer_approval: {
              /**
               * Active
               * @description Approval active flag.
               */
              active: boolean;
              /**
               * Id
               * @description Customer approval unique identifier.
               */
              id: number;
              /**
               * Url
               * @description URL to approve the offer.
               */
              url: string;
          } | null;
          /**
           * Date
           * @description Offer date (YYYY-MM-DD).
           */
          date: string;
          /**
           * Deal
           * @description Associated deal data.
           * @default null
           */
          deal: {
              /**
               * Id
               * @description Deal unique identifier.
               */
              id: number;
              /**
               * Name
               * @description Deal name.
               */
              name: string;
          } | null;
          /**
           * Discount
           * @description Discount percentage.
           */
          discount: number;
          /**
           * Due Date
           * @description Offer due date (YYYY-MM-DD).
           */
          due_date: string;
          /**
           * Gross Total
           * @description Gross total amount.
           */
          gross_total: number;
          /**
           * Id
           * @description Offer unique identifier.
           */
          id: number;
          /**
           * Identifier
           * @description Offer identifier.
           */
          identifier: string;
          /**
           * Invoice Id
           * @description Associated invoice ID, if billed.
           * @default null
           */
          invoice_id: number | null;
          /**
           * Net Total
           * @description Net total amount.
           */
          net_total: number;
          /**
           * OfferConfirmation
           * @description Offer confirmation details.
           * @default null
           */
          offer_confirmation: {
              /**
               * Created At
               * @description Confirmation creation timestamp.
               */
              created_at: string;
              /**
               * Date
               * @description Confirmation date (YYYY-MM-DD).
               */
              date: string;
              /**
               * Id
               * @description Offer confirmation unique identifier.
               */
              id: number;
              /**
               * Title
               * @description Confirmation title.
               */
              title: string;
              /**
               * Updated At
               * @description Confirmation update timestamp.
               */
              updated_at: string;
          } | null;
          /**
           * Project
           * @description Associated project data.
           * @default null
           */
          project: {
              /**
               * Id
               * @description Project unique identifier.
               */
              id: number;
              /**
               * Identifier
               * @description Project identifier.
               * @default null
               */
              identifier: string | null;
              /**
               * Name
               * @description Project name.
               */
              name: string;
          } | null;
          /**
           * Recipient Address
           * @description Offer recipient address.
           */
          recipient_address: string;
          /**
           * Status
           * @description Offer status.
           * @enum {string}
           */
          status: "created" | "sent" | "accepted" | "partially_billed" | "billed" | "archived";
          /**
           * Tags
           * @description List of tags associated with the offer.
           */
          tags: string[];
          /**
           * Tax
           * @description Tax percentage.
           */
          tax: number;
          /**
           * Title
           * @description Offer title.
           */
          title: string;
          /**
           * Updated At
           * @description Last updated timestamp.
           */
          updated_at: string;
          /**
           * User
           * @description User who created the offer.
           */
          user: {
              /**
               * Firstname
               * @description User first name.
               */
              firstname: string;
              /**
               * Id
               * @description User unique identifier.
               */
              id: number;
              /**
               * Lastname
               * @description User last name.
               */
              lastname: string;
          };
          /**
           * Vat
           * @description VAT details.
           */
          vat: {
              /**
               * Active
               * @description VAT active flag.
               */
              active: boolean;
              /**
               * Intra Eu
               * @description Intra EU trade flag.
               */
              intra_eu: boolean;
              /**
               * Notice Tax Exemption
               * @description Tax exemption notice.
               * @default null
               */
              notice_tax_exemption: string | null;
              /**
               * Notice Tax Exemption Alt
               * @description Alternative tax exemption notice.
               * @default null
               */
              notice_tax_exemption_alt: string | null;
              /**
               * Print Gross Total
               * @description Print gross total flag.
               */
              print_gross_total: boolean;
              /**
               * Reverse Charge
               * @description Reverse charge flag.
               */
              reverse_charge: boolean;
              /**
               * Tax
               * @description VAT tax rate.
               */
              tax: number;
          };
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
 * Type of MOCO's MOCO_OFFER_GET tool input.
 */
type MOCO_OFFER_GET_INPUT = {
  /**
   * Id
   * @description The unique identifier of the offer to retrieve.
   */
  id?: number;
};

/**
 * Type of MOCO's MOCO_OFFER_GET tool output.
 */
type MOCO_OFFER_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Company
       * @description Nested company information in an offer.
       * @default null
       */
      company: {
          /**
           * Id
           * @description Company ID
           */
          id: number;
          /**
           * Name
           * @description Company name
           */
          name: string;
      } | null;
      /**
       * Created At
       * @description Creation timestamp (ISO 8601)
       */
      created_at: string;
      /**
       * Currency
       * @description Currency code (e.g., EUR)
       */
      currency: string;
      /**
       * Custom Properties
       * @description Custom properties key-value store
       */
      custom_properties: {
          [key: string]: string;
      };
      /**
       * CustomerApproval
       * @description Customer approval details for an offer.
       * @default null
       */
      customer_approval: {
          /**
           * Active
           * @description Whether customer approval is active
           */
          active: boolean;
          /**
           * Id
           * @description Customer approval ID
           */
          id: number;
          /**
           * Url
           * @description URL for customer approval
           */
          url: string;
      } | null;
      /**
       * Date
       * @description Offer date (YYYY-MM-DD)
       */
      date: string;
      /**
       * Deal
       * @description Nested deal information in an offer.
       * @default null
       */
      deal: {
          /**
           * Id
           * @description Deal ID
           */
          id: number;
          /**
           * Name
           * @description Deal name
           */
          name: string;
      } | null;
      /**
       * Discount
       * @description Discount percentage
       */
      discount: number;
      /**
       * Due Date
       * @description Due date for the offer (YYYY-MM-DD)
       */
      due_date: string;
      /**
       * Footer
       * @description Footer text
       */
      footer: string;
      /**
       * Gross Total
       * @description Gross total amount
       */
      gross_total: number;
      /**
       * Id
       * @description Offer ID
       */
      id: number;
      /**
       * Identifier
       * @description Offer identifier
       */
      identifier: string;
      /**
       * Invoice Id
       * @description Linked invoice ID
       * @default null
       */
      invoice_id: number | null;
      /**
       * Items
       * @description List of line items
       */
      items: {
          /**
           * Description
           * @description Description for the position
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Item ID
           */
          id: number;
          /**
           * Net Total
           * @description Net total amount
           */
          net_total: number;
          /**
           * Optional
           * @description Whether the position is optional
           */
          optional: boolean;
          /**
           * Quantity
           * @description Quantity for the position
           */
          quantity: number;
          /**
           * Title
           * @description Title for the position
           * @default null
           */
          title: string | null;
          /**
           * Type
           * @description Type of the position (title, description, item, subtotal, page-break, separator)
           */
          type: string;
          /**
           * Unit
           * @description Unit of measure
           * @default null
           */
          unit: string | null;
          /**
           * Unit Price
           * @description Unit price
           */
          unit_price: number;
      }[];
      /**
       * Net Total
       * @description Net total amount
       */
      net_total: number;
      /**
       * OfferConfirmation
       * @description Offer confirmation details.
       * @default null
       */
      offer_confirmation: {
          /**
           * Created At
           * @description Timestamp when the confirmation was created (ISO 8601)
           */
          created_at: string;
          /**
           * Date
           * @description Confirmation date (YYYY-MM-DD)
           */
          date: string;
          /**
           * Id
           * @description Confirmation ID
           */
          id: number;
          /**
           * Title
           * @description Confirmation title
           */
          title: string;
          /**
           * Updated At
           * @description Timestamp when the confirmation was updated (ISO 8601)
           */
          updated_at: string;
      } | null;
      /**
       * Project
       * @description Nested project information in an offer.
       * @default null
       */
      project: {
          /**
           * Id
           * @description Project ID
           */
          id: number;
          /**
           * Identifier
           * @description Project identifier
           */
          identifier: string;
          /**
           * Name
           * @description Project name
           */
          name: string;
      } | null;
      /**
       * Recipient Address
       * @description Recipient address
       */
      recipient_address: string;
      /**
       * Salutation
       * @description Salutation text
       */
      salutation: string;
      /**
       * Status
       * @description Offer status
       */
      status: string;
      /**
       * Tags
       * @description List of tags
       */
      tags: string[];
      /**
       * Tax
       * @description Tax percentage
       */
      tax: number;
      /**
       * Title
       * @description Offer title
       */
      title: string;
      /**
       * Updated At
       * @description Last update timestamp (ISO 8601)
       */
      updated_at: string;
      /**
       * User
       * @description Creator user information
       */
      user: {
          /**
           * Firstname
           * @description First name of the user
           */
          firstname: string;
          /**
           * Id
           * @description User ID
           */
          id: number;
          /**
           * Lastname
           * @description Last name of the user
           */
          lastname: string;
      };
      /**
       * Vat
       * @description VAT details
       */
      vat: {
          /**
           * Active
           * @description Whether VAT is active
           */
          active: boolean;
          /**
           * Intra Eu
           * @description Whether intra-EU applies
           */
          intra_eu: boolean;
          /**
           * Notice Tax Exemption
           * @description Notice for tax exemption
           */
          notice_tax_exemption: string;
          /**
           * Notice Tax Exemption Alt
           * @description Alternate notice for tax exemption
           */
          notice_tax_exemption_alt: string;
          /**
           * Print Gross Total
           * @description Whether to print gross total
           */
          print_gross_total: boolean;
          /**
           * Reverse Charge
           * @description Whether reverse charge applies
           */
          reverse_charge: boolean;
          /**
           * Tax
           * @description Tax percentage
           */
          tax: number;
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
 * Type of MOCO's MOCO_PLANNING_ENTRIES_LIST tool input.
 */
type MOCO_PLANNING_ENTRIES_LIST_INPUT = {
  /**
   * Period
   * @description Date range in 'YYYY-MM-DD:YYYY-MM-DD' format to filter entries.
   * @default null
   */
  period: string | null;
  /**
   * Project Id
   * @description Filter by project ID.
   * @default null
   */
  project_id: number | null;
  /**
   * User Id
   * @description Filter by user ID.
   * @default null
   */
  user_id: number | null;
};

/**
 * Type of MOCO's MOCO_PLANNING_ENTRIES_LIST tool output.
 */
type MOCO_PLANNING_ENTRIES_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Planning Entries
       * @description List of planning entries returned by the API.
       */
      planning_entries: {
          /**
           * Color
           * @description Color code associated with the entry.
           */
          color: string;
          /**
           * Comment
           * @description Comment associated with the entry.
           * @default null
           */
          comment: string | null;
          /**
           * Created At
           * @description Entry creation timestamp (ISO8601).
           */
          created_at: string;
          /**
           * PlanningEntryDeal
           * @description Deal associated with the entry, if any.
           * @default null
           */
          deal: {
              /**
               * Color
               * @description Deal color code.
               */
              color: string;
              /**
               * Customer Name
               * @description Customer name.
               */
              customer_name: string;
              /**
               * Id
               * @description Deal unique identifier.
               */
              id: number;
              /**
               * Name
               * @description Deal name.
               */
              name: string;
          } | null;
          /**
           * Ends On
           * @description End date (YYYY-MM-DD).
           */
          ends_on: string;
          /**
           * Hours Per Day
           * @description Planned hours per day.
           */
          hours_per_day: number;
          /**
           * Id
           * @description Planning entry unique identifier.
           */
          id: number;
          /**
           * PlanningEntryProject
           * @description Project associated with the entry, if any.
           * @default null
           */
          project: {
              /**
               * Color
               * @description Project color code.
               */
              color: string;
              /**
               * Customer Name
               * @description Customer name.
               */
              customer_name: string;
              /**
               * Id
               * @description Project unique identifier.
               */
              id: number;
              /**
               * Identifier
               * @description Project identifier.
               */
              identifier: string;
              /**
               * Name
               * @description Project name.
               */
              name: string;
          } | null;
          /**
           * Read Only
           * @description Whether the entry is read-only.
           */
          read_only: boolean;
          /**
           * Series Id
           * @description Series ID if part of a series.
           * @default null
           */
          series_id: number | null;
          /**
           * Series Repeat
           * @description Series repeat pattern if part of a series.
           * @default null
           */
          series_repeat: string | null;
          /**
           * Starts On
           * @description Start date (YYYY-MM-DD).
           */
          starts_on: string;
          /**
           * Symbol
           * @description Symbol associated with the entry.
           * @default null
           */
          symbol: number | null;
          /**
           * Updated At
           * @description Entry last update timestamp (ISO8601).
           */
          updated_at: string;
          /**
           * User
           * @description User associated with the entry.
           */
          user: {
              /**
               * Firstname
               * @description User first name.
               */
              firstname: string;
              /**
               * Id
               * @description User unique identifier.
               */
              id: number;
              /**
               * Lastname
               * @description User last name.
               */
              lastname: string;
          };
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
 * Type of MOCO's MOCO_PLANNING_ENTRY_CREATE tool input.
 */
type MOCO_PLANNING_ENTRY_CREATE_INPUT = {
  /**
   * Comment
   * @description Additional comments for the planning entry.
   * @default null
   */
  comment: string | null;
  /**
   * Deal Id
   * @description ID of the deal. Required if no project_id is provided.
   * @default null
   */
  deal_id: number | null;
  /**
   * Ends On
   * @description End date in YYYY-MM-DD format.
   */
  ends_on?: string;
  /**
   * Hours Per Day
   * @description Number of hours planned per day; must be non-negative.
   */
  hours_per_day?: number;
  /**
   * Project Id
   * @description ID of the project. Required if no deal_id is provided.
   * @default null
   */
  project_id: number | null;
  /**
   * Starts On
   * @description Start date in YYYY-MM-DD format.
   */
  starts_on?: string;
  /**
   * Symbol
   * @description Symbol identifier (1-10) representing various icons.
   * @default null
   */
  symbol: number | null;
  /**
   * User Id
   * @description ID of the user; defaults to the requesting user if omitted.
   * @default null
   */
  user_id: number | null;
};

/**
 * Type of MOCO's MOCO_PLANNING_ENTRY_CREATE tool output.
 */
type MOCO_PLANNING_ENTRY_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Color
       * @description Color code associated with the entry.
       */
      color: string;
      /**
       * Comment
       * @description Comment associated with the entry.
       * @default null
       */
      comment: string | null;
      /**
       * Created At
       * @description Entry creation timestamp (ISO8601).
       */
      created_at: string;
      /**
       * PlanningEntryCreateResponseDeal
       * @description Deal associated with the entry, if any.
       * @default null
       */
      deal: {
          /**
           * Color
           * @description Deal color code.
           */
          color: string;
          /**
           * Customer Name
           * @description Customer name.
           */
          customer_name: string;
          /**
           * Id
           * @description Deal unique identifier.
           */
          id: number;
          /**
           * Name
           * @description Deal name.
           */
          name: string;
      } | null;
      /**
       * Ends On
       * @description End date (YYYY-MM-DD).
       */
      ends_on: string;
      /**
       * Hours Per Day
       * @description Planned hours per day.
       */
      hours_per_day: number;
      /**
       * Id
       * @description Planning entry unique identifier.
       */
      id: number;
      /**
       * PlanningEntryCreateResponseProject
       * @description Project associated with the entry, if any.
       * @default null
       */
      project: {
          /**
           * Color
           * @description Project color code.
           */
          color: string;
          /**
           * Customer Name
           * @description Customer name.
           */
          customer_name: string;
          /**
           * Id
           * @description Project unique identifier.
           */
          id: number;
          /**
           * Identifier
           * @description Project identifier.
           */
          identifier: string;
          /**
           * Name
           * @description Project name.
           */
          name: string;
      } | null;
      /**
       * Read Only
       * @description Whether the entry is read-only.
       */
      read_only: boolean;
      /**
       * Series Id
       * @description Series ID if part of a series.
       * @default null
       */
      series_id: number | null;
      /**
       * Series Repeat
       * @description Series repeat pattern if part of a series.
       * @default null
       */
      series_repeat: string | null;
      /**
       * Starts On
       * @description Start date (YYYY-MM-DD).
       */
      starts_on: string;
      /**
       * Symbol
       * @description Symbol associated with the entry.
       * @default null
       */
      symbol: number | null;
      /**
       * Updated At
       * @description Entry last update timestamp (ISO8601).
       */
      updated_at: string;
      /**
       * User
       * @description User associated with the entry.
       */
      user: {
          /**
           * Firstname
           * @description User first name.
           */
          firstname: string;
          /**
           * Id
           * @description User unique identifier.
           */
          id: number;
          /**
           * Lastname
           * @description User last name.
           */
          lastname: string;
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
 * Type of MOCO's MOCO_PLANNING_ENTRY_GET tool input.
 */
type MOCO_PLANNING_ENTRY_GET_INPUT = {
  /**
   * Id
   * @description The unique identifier of the planning entry to retrieve.
   */
  id?: number;
};

/**
 * Type of MOCO's MOCO_PLANNING_ENTRY_GET tool output.
 */
type MOCO_PLANNING_ENTRY_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Color
       * @description Hex color code for the planning entry.
       */
      color: string;
      /**
       * Comment
       * @description Comment for the planning entry.
       */
      comment: string;
      /**
       * Created At
       * @description Timestamp when the entry was created (ISO 8601).
       */
      created_at: string;
      /**
       * PlanningEntryDeal
       * @description Deal associated with the planning entry.
       * @default null
       */
      deal: {
          /**
           * Color
           * @description Deal's color code.
           */
          color: string;
          /**
           * Customer Name
           * @description Deal's customer name.
           */
          customer_name: string;
          /**
           * Id
           * @description Deal's unique identifier.
           */
          id: number;
          /**
           * Name
           * @description Deal's name.
           */
          name: string;
      } | null;
      /**
       * Ends On
       * @description End date of the entry (YYYY-MM-DD).
       */
      ends_on: string;
      /**
       * Hours Per Day
       * @description Number of hours planned per day.
       */
      hours_per_day: number;
      /**
       * Id
       * @description The planning entry's unique identifier.
       */
      id: number;
      /**
       * PlanningEntryProject
       * @description Project associated with the planning entry.
       * @default null
       */
      project: {
          /**
           * Color
           * @description Hex color code associated with the project.
           */
          color: string;
          /**
           * Customer Name
           * @description Name of the customer for the project.
           */
          customer_name: string;
          /**
           * Id
           * @description Project's unique identifier.
           */
          id: number;
          /**
           * Identifier
           * @description Project's identifier.
           */
          identifier: string;
          /**
           * Name
           * @description Project's name.
           */
          name: string;
      } | null;
      /**
       * Read Only
       * @description Indicates if the entry is read-only.
       */
      read_only: boolean;
      /**
       * Series Id
       * @description Series ID for repeating entries.
       * @default null
       */
      series_id: number | null;
      /**
       * Series Repeat
       * @description Repeat rule for series (e.g., 'weekly') or null.
       * @default null
       */
      series_repeat: string | null;
      /**
       * Starts On
       * @description Start date of the entry (YYYY-MM-DD).
       */
      starts_on: string;
      /**
       * Symbol
       * @description Symbol identifier or null.
       * @default null
       */
      symbol: number | null;
      /**
       * PlanningEntryTask
       * @description Task associated with the planning entry.
       * @default null
       */
      task: {
          /**
           * Id
           * @description Task's unique identifier.
           */
          id: number;
          /**
           * Name
           * @description Task's name.
           */
          name: string;
      } | null;
      /**
       * Tentative
       * @description Indicates if the entry is tentative.
       */
      tentative: boolean;
      /**
       * Updated At
       * @description Timestamp when the entry was last updated (ISO 8601).
       */
      updated_at: string;
      /**
       * User
       * @description Assigned user details.
       */
      user: {
          /**
           * Firstname
           * @description User's first name.
           */
          firstname: string;
          /**
           * Id
           * @description User's unique identifier.
           */
          id: number;
          /**
           * Lastname
           * @description User's last name.
           */
          lastname: string;
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
 * Type of MOCO's MOCO_PROJECTS_LIST tool input.
 */
type MOCO_PROJECTS_LIST_INPUT = {
  /**
   * Company Id
   * @description Filter by company ID.
   * @default null
   */
  company_id: number | null;
  /**
   * Created From
   * @description Filter projects created on or after this date (YYYY-MM-DD).
   * @default null
   */
  created_from: string | null;
  /**
   * Created To
   * @description Filter projects created on or before this date (YYYY-MM-DD).
   * @default null
   */
  created_to: string | null;
  /**
   * Identifier
   * @description Filter by project identifier.
   * @default null
   */
  identifier: string | null;
  /**
   * Include Archived
   * @description Include archived projects.
   * @default null
   */
  include_archived: boolean | null;
  /**
   * Include Company
   * @description Return complete company information instead of only ID and name.
   * @default null
   */
  include_company: boolean | null;
  /**
   * Leader Id
   * @description Filter by project (co-)leader user ID.
   * @default null
   */
  leader_id: number | null;
  /**
   * Project Group Id
   * @description Filter by project group ID.
   * @default null
   */
  project_group_id: number | null;
  /**
   * Retainer
   * @description Filter by retainer projects.
   * @default null
   */
  retainer: boolean | null;
  /**
   * Tags
   * @description Comma-separated list of tags to filter by.
   * @default null
   */
  tags: string | null;
  /**
   * Updated From
   * @description Filter projects updated on or after this date (YYYY-MM-DD).
   * @default null
   */
  updated_from: string | null;
  /**
   * Updated To
   * @description Filter projects updated on or before this date (YYYY-MM-DD).
   * @default null
   */
  updated_to: string | null;
};

/**
 * Type of MOCO's MOCO_PROJECTS_LIST tool output.
 */
type MOCO_PROJECTS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Projects
       * @description List of projects returned by the API.
       */
      projects: {
          /**
           * Active
           * @description Whether the project is active.
           */
          active: boolean;
          /**
           * Billable
           * @description Whether the project is billable.
           */
          billable: boolean;
          /**
           * Contract
           * @description Contract information for the project.
           */
          contract: {
              /**
               * Active
               * @description Whether the contract is active.
               */
              active: boolean;
              /**
               * User Id
               * @description User ID of the contract owner.
               */
              user_id: number;
          };
          /**
           * Customer
           * @description Associated customer information.
           */
          customer: {
              /**
               * Id
               * @description Unique customer identifier.
               */
              id: number;
              /**
               * Name
               * @description Name of the customer.
               */
              name: string;
          };
          /**
           * Id
           * @description Project unique identifier.
           */
          id: number;
          /**
           * Identifier
           * @description Project identifier.
           */
          identifier: string;
          /**
           * Name
           * @description Project name.
           */
          name: string;
          /**
           * Tasks
           * @description List of tasks associated with the project.
           */
          tasks: {
              /**
               * Billable
               * @description Whether the task is billable.
               */
              billable: boolean;
              /**
               * Id
               * @description Task unique identifier.
               */
              id: number;
              /**
               * Name
               * @description Task name.
               */
              name: string;
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
 * Type of MOCO's MOCO_PROJECT_CREATE tool input.
 */
type MOCO_PROJECT_CREATE_INPUT = {
  /**
   * Billing Address
   * @description Billing address, newline-separated
   * @default null
   */
  billing_address: string | null;
  /**
   * Billing Contact Id
   * @description Billing contact ID
   * @default null
   */
  billing_contact_id: number | null;
  /**
   * Billing Email Cc
   * @description CC billing recipient email
   * @default null
   */
  billing_email_cc: string | null;
  /**
   * Billing Email To
   * @description Primary billing recipient email
   * @default null
   */
  billing_email_to: string | null;
  /**
   * Billing Notes
   * @description Additional billing notes
   * @default null
   */
  billing_notes: string | null;
  /**
   * Billing Variant
   * @description Billing variant: 'project', 'task', or 'user' (default: 'project')
   * @default project
   * @enum {string|null}
   */
  billing_variant: "project" | "task" | "user" | null;
  /**
   * Budget
   * @description Total project budget
   * @default null
   */
  budget: number | null;
  /**
   * Budget Expenses
   * @description Expenses budget
   * @default null
   */
  budget_expenses: number | null;
  /**
   * Budget Monthly
   * @description Monthly budget (mandatory if retainer=true)
   * @default null
   */
  budget_monthly: number | null;
  /**
   * Co Leader Id
   * @description User ID of the co-leader
   * @default null
   */
  co_leader_id: number | null;
  /**
   * Contact Id
   * @description Primary contact ID
   * @default null
   */
  contact_id: number | null;
  /**
   * Currency
   * @description ISO 4217 currency code
   */
  currency?: string;
  /**
   * Custom Properties
   * @description Custom key/value property map
   * @default null
   */
  custom_properties: {
      [key: string]: string;
  } | null;
  /**
   * Customer Id
   * @description Company ID of the customer
   */
  customer_id?: number;
  /**
   * Deal Id
   * @description Deal ID
   * @default null
   */
  deal_id: number | null;
  /**
   * Finish Date
   * @description Project finish date in YYYY-MM-DD format
   */
  finish_date?: string;
  /**
   * Fixed Price
   * @description Whether this is a fixed-price project
   */
  fixed_price?: boolean;
  /**
   * Hourly Rate
   * @description Hourly rate if billing variant dictates
   * @default null
   */
  hourly_rate: number | null;
  /**
   * Identifier
   * @description Project identifier (mandatory only if number ranges are manual)
   * @default null
   */
  identifier: string | null;
  /**
   * Info
   * @description Additional project information
   * @default null
   */
  info: string | null;
  /**
   * Leader Id
   * @description User ID of the project leader
   */
  leader_id?: number;
  /**
   * Name
   * @description Name of the project
   */
  name?: string;
  /**
   * Project Group Id
   * @description Project group ID
   * @default null
   */
  project_group_id: number | null;
  /**
   * Retainer
   * @description Whether this is a retainer project. If true, start_date, finish_date, and budget_monthly are mandatory and must align to full months.
   */
  retainer?: boolean;
  /**
   * Secondary Contact Id
   * @description Secondary contact ID
   * @default null
   */
  secondary_contact_id: number | null;
  /**
   * Setting Include Time Report
   * @description Include detailed time reports in billing
   * @default null
   */
  setting_include_time_report: boolean | null;
  /**
   * Start Date
   * @description Project start date in YYYY-MM-DD format
   */
  start_date?: string;
  /**
   * Tags
   * @description List of tags (e.g., 'Print', 'Digital')
   * @default null
   */
  tags: string[] | null;
};

/**
 * Type of MOCO's MOCO_PROJECT_CREATE tool output.
 */
type MOCO_PROJECT_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Indicates if project is active
       */
      active: boolean;
      /**
       * Billable
       * @description Indicates if project is billable
       */
      billable: boolean;
      /**
       * Billing Address
       * @description Billing address
       * @default null
       */
      billing_address: string | null;
      /**
       * ProjectCreateResponseContact
       * @description Billing contact details
       * @default null
       */
      billing_contact: {
          /**
           * Firstname
           * @description Contact first name
           */
          firstname: string;
          /**
           * Id
           * @description Contact ID
           */
          id: number;
          /**
           * Lastname
           * @description Contact last name
           */
          lastname: string;
      } | null;
      /**
       * Billing Email Cc
       * @description CC billing email
       * @default null
       */
      billing_email_cc: string | null;
      /**
       * Billing Email To
       * @description Primary billing email
       * @default null
       */
      billing_email_to: string | null;
      /**
       * Billing Notes
       * @description Billing notes
       * @default null
       */
      billing_notes: string | null;
      /**
       * Billing Variant
       * @description Billing variant for project
       */
      billing_variant: string;
      /**
       * Budget
       * @description Total project budget
       * @default null
       */
      budget: number | null;
      /**
       * Budget Expenses
       * @description Expenses budget
       * @default null
       */
      budget_expenses: number | null;
      /**
       * Budget Monthly
       * @description Monthly budget
       * @default null
       */
      budget_monthly: number | null;
      /**
       * ProjectCreateResponseLeader
       * @description Project co-leader details
       * @default null
       */
      co_leader: {
          /**
           * Firstname
           * @description First name of the leader
           */
          firstname: string;
          /**
           * Id
           * @description User ID of the leader
           */
          id: number;
          /**
           * Lastname
           * @description Last name of the leader
           */
          lastname: string;
      } | null;
      /**
       * Color
       * @description Project color in hex code
       * @default null
       */
      color: string | null;
      /**
       * ProjectCreateResponseContact
       * @description Primary contact details
       * @default null
       */
      contact: {
          /**
           * Firstname
           * @description Contact first name
           */
          firstname: string;
          /**
           * Id
           * @description Contact ID
           */
          id: number;
          /**
           * Lastname
           * @description Contact last name
           */
          lastname: string;
      } | null;
      /**
       * Contracts
       * @description List of project contracts
       */
      contracts?: {
          /**
           * Active
           * @description Indicates if contract is active
           */
          active: boolean;
          /**
           * Billable
           * @description Indicates if contract is billable
           */
          billable: boolean;
          /**
           * Budget
           * @description Contract budget
           * @default null
           */
          budget: number | null;
          /**
           * Firstname
           * @description First name on the contract
           */
          firstname: string;
          /**
           * Hourly Rate
           * @description Hourly rate for the contract
           */
          hourly_rate: number;
          /**
           * Id
           * @description Contract ID
           */
          id: number;
          /**
           * Lastname
           * @description Last name on the contract
           */
          lastname: string;
          /**
           * User Id
           * @description User ID on the contract
           */
          user_id: number;
      }[];
      /**
       * Created At
       * @description Creation timestamp (ISO 8601)
       */
      created_at: string;
      /**
       * Currency
       * @description ISO 4217 currency code
       */
      currency: string;
      /**
       * Custom Properties
       * @description Custom properties map
       * @default null
       */
      custom_properties: {
          [key: string]: string;
      } | null;
      /**
       * Customer
       * @description Customer details
       */
      customer: {
          /**
           * Id
           * @description Company ID of the customer
           */
          id: number;
          /**
           * Name
           * @description Name of the customer
           */
          name: string;
      };
      /**
       * Customer Report Url
       * @description URL for customer report
       * @default null
       */
      customer_report_url: string | null;
      /**
       * ProjectCreateResponseDeal
       * @description Deal details
       * @default null
       */
      deal: {
          /**
           * Id
           * @description Deal ID
           */
          id: number;
          /**
           * Name
           * @description Name of the deal
           */
          name: string;
      } | null;
      /**
       * Finish Date
       * @description Project finish date (YYYY-MM-DD)
       * @default null
       */
      finish_date: string | null;
      /**
       * Fixed Price
       * @description Indicates if project is fixed price
       */
      fixed_price: boolean;
      /**
       * Hourly Rate
       * @description Hourly rate
       * @default null
       */
      hourly_rate: number | null;
      /**
       * Id
       * @description Unique project identifier
       */
      id: number;
      /**
       * Identifier
       * @description Project identifier
       * @default null
       */
      identifier: string | null;
      /**
       * Info
       * @description Additional project info
       * @default null
       */
      info: string | null;
      /**
       * Leader
       * @description Project leader details
       */
      leader: {
          /**
           * Firstname
           * @description First name of the leader
           */
          firstname: string;
          /**
           * Id
           * @description User ID of the leader
           */
          id: number;
          /**
           * Lastname
           * @description Last name of the leader
           */
          lastname: string;
      };
      /**
       * Name
       * @description Name of the project
       */
      name: string;
      /**
       * ProjectCreateResponseProjectGroup
       * @description Project group details
       * @default null
       */
      project_group: {
          /**
           * Id
           * @description Project group ID
           */
          id: number;
          /**
           * Name
           * @description Name of the project group
           */
          name: string;
      } | null;
      /**
       * Retainer
       * @description Indicates if project is a retainer
       */
      retainer: boolean;
      /**
       * ProjectCreateResponseContact
       * @description Secondary contact details
       * @default null
       */
      secondary_contact: {
          /**
           * Firstname
           * @description Contact first name
           */
          firstname: string;
          /**
           * Id
           * @description Contact ID
           */
          id: number;
          /**
           * Lastname
           * @description Contact last name
           */
          lastname: string;
      } | null;
      /**
       * Setting Include Time Report
       * @description Include time report in billing
       */
      setting_include_time_report: boolean;
      /**
       * Start Date
       * @description Project start date (YYYY-MM-DD)
       * @default null
       */
      start_date: string | null;
      /**
       * Tags
       * @description List of project tags
       */
      tags?: string[];
      /**
       * Tasks
       * @description List of project tasks
       */
      tasks?: {
          /**
           * Active
           * @description Indicates if task is active
           */
          active: boolean;
          /**
           * Billable
           * @description Indicates if task is billable
           */
          billable: boolean;
          /**
           * Budget
           * @description Task budget
           * @default null
           */
          budget: number | null;
          /**
           * Description
           * @description Task description
           * @default null
           */
          description: string | null;
          /**
           * Hourly Rate
           * @description Hourly rate for the task
           */
          hourly_rate: number;
          /**
           * Id
           * @description Task ID
           */
          id: number;
          /**
           * Name
           * @description Name of the task
           */
          name: string;
      }[];
      /**
       * Updated At
       * @description Last update timestamp (ISO 8601)
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
 * Type of MOCO's MOCO_PROJECT_GET tool input.
 */
type MOCO_PROJECT_GET_INPUT = {
  /**
   * Id
   * @description The unique identifier of the project to retrieve
   */
  id?: number;
};

/**
 * Type of MOCO's MOCO_PROJECT_GET tool output.
 */
type MOCO_PROJECT_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Indicates if the project is active.
       */
      active: boolean;
      /**
       * Billable
       * @description Indicates if the project is billable.
       */
      billable: boolean;
      /**
       * Contract
       * @description Contract details associated with this project.
       */
      contract: {
          /**
           * Active
           * @description Indicates if the contract is active.
           */
          active: boolean;
          /**
           * User Id
           * @description Identifier of the user assigned to the contract.
           */
          user_id: number;
      };
      /**
       * Customer
       * @description Details of the associated customer.
       */
      customer: {
          /**
           * Id
           * @description Unique identifier of the associated customer.
           */
          id: number;
          /**
           * Name
           * @description Name of the associated customer.
           */
          name: string;
      };
      /**
       * Id
       * @description Unique identifier of the project.
       */
      id: number;
      /**
       * Identifier
       * @description Project's external identifier.
       */
      identifier: string;
      /**
       * Name
       * @description Name of the project.
       */
      name: string;
      /**
       * Tasks
       * @description List of tasks under this project.
       */
      tasks: {
          /**
           * Active
           * @description Indicates if the task is active.
           */
          active: boolean;
          /**
           * Billable
           * @description Indicates if the task is billable.
           */
          billable: boolean;
          /**
           * Id
           * @description Unique identifier of the task.
           */
          id: number;
          /**
           * Name
           * @description Name of the task.
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
 * Type of MOCO's MOCO_PROJECT_UPDATE tool input.
 */
type MOCO_PROJECT_UPDATE_INPUT = {
  /**
   * Active
   * @description Whether the project is active
   * @default null
   */
  active: boolean | null;
  /**
   * Billable
   * @description Whether the project is billable
   * @default null
   */
  billable: boolean | null;
  /**
   * Billing Address
   * @description Billing address with '
   *     ' separators
   * @default null
   */
  billing_address: string | null;
  /**
   * Billing Contact Id
   * @description ID of the billing contact
   * @default null
   */
  billing_contact_id: number | null;
  /**
   * Billing Email Cc
   * @description CC billing email
   * @default null
   */
  billing_email_cc: string | null;
  /**
   * Billing Email To
   * @description Primary billing email
   * @default null
   */
  billing_email_to: string | null;
  /**
   * Billing Notes
   * @description Notes to include on billing documents
   * @default null
   */
  billing_notes: string | null;
  /**
   * Billing Variant
   * @description Billing variant; 'project', 'task', or 'user'
   * @default null
   * @enum {string|null}
   */
  billing_variant: "project" | "task" | "user" | null;
  /**
   * Budget
   * @description Total budget for the project
   * @default null
   */
  budget: number | null;
  /**
   * Budget Expenses
   * @description Budget allocated for expenses
   * @default null
   */
  budget_expenses: number | null;
  /**
   * Budget Monthly
   * @description Monthly budget (required if retainer)
   * @default null
   */
  budget_monthly: number | null;
  /**
   * Co Leader Id
   * @description User ID of the co-leader
   * @default null
   */
  co_leader_id: number | null;
  /**
   * Contact Id
   * @description ID of the primary contact
   * @default null
   */
  contact_id: number | null;
  /**
   * Custom Properties
   * @description Custom key/value properties
   * @default null
   */
  custom_properties: {
      [key: string]: string;
  } | null;
  /**
   * Customer Id
   * @description ID of the associated customer
   * @default null
   */
  customer_id: number | null;
  /**
   * Deal Id
   * @description ID of the associated deal
   * @default null
   */
  deal_id: number | null;
  /**
   * Finish Date
   * @description Project finish date in YYYY-MM-DD format
   * @default null
   */
  finish_date: string | null;
  /**
   * Fixed Price
   * @description Indicates if the project has a fixed price
   * @default null
   */
  fixed_price: boolean | null;
  /**
   * Hourly Rate
   * @description Hourly rate for the project
   * @default null
   */
  hourly_rate: number | null;
  /**
   * Id
   * @description Unique identifier of the project to update
   */
  id?: number;
  /**
   * Identifier
   * @description Project identifier (required if number ranges are manual)
   * @default null
   */
  identifier: string | null;
  /**
   * Info
   * @description Additional information about the project
   * @default null
   */
  info: string | null;
  /**
   * Leader Id
   * @description User ID of the project leader
   * @default null
   */
  leader_id: number | null;
  /**
   * Name
   * @description Project name
   * @default null
   */
  name: string | null;
  /**
   * Project Group Id
   * @description ID of the project group
   * @default null
   */
  project_group_id: number | null;
  /**
   * Retainer
   * @description Indicates if the project is a retainer; then start_date, finish_date, and budget_monthly (on first/last day of month) become mandatory
   * @default null
   */
  retainer: boolean | null;
  /**
   * Secondary Contact Id
   * @description ID of the secondary contact
   * @default null
   */
  secondary_contact_id: number | null;
  /**
   * Setting Include Time Report
   * @description Whether to include a time report
   * @default null
   */
  setting_include_time_report: boolean | null;
  /**
   * Start Date
   * @description Project start date in YYYY-MM-DD format
   * @default null
   */
  start_date: string | null;
  /**
   * Tags
   * @description List of tags associated with the project
   * @default null
   */
  tags: string[] | null;
};

/**
 * Type of MOCO's MOCO_PROJECT_UPDATE tool output.
 */
type MOCO_PROJECT_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Whether the project is active
       */
      active: boolean;
      /**
       * Billable
       * @description Whether the project is billable
       */
      billable: boolean;
      /**
       * Contract
       * @description Contract details of the project
       */
      contract: {
          /**
           * Active
           * @description Whether the contract is active
           */
          active: boolean;
          /**
           * User Id
           * @description User ID assigned to the contract
           */
          user_id: number;
      };
      /**
       * Customer
       * @description Customer details
       */
      customer: {
          /**
           * Id
           * @description Customer ID
           */
          id: number;
          /**
           * Name
           * @description Customer name
           */
          name: string;
      };
      /**
       * Id
       * @description Unique identifier of the project
       */
      id: number;
      /**
       * Identifier
       * @description External project identifier
       */
      identifier: string;
      /**
       * Name
       * @description Name of the project
       */
      name: string;
      /**
       * Tasks
       * @description List of tasks in the project
       */
      tasks: {
          /**
           * Active
           * @description Whether the task is active
           */
          active: boolean;
          /**
           * Billable
           * @description Whether the task is billable
           */
          billable: boolean;
          /**
           * Id
           * @description Task ID
           */
          id: number;
          /**
           * Name
           * @description Task name
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
 * Type of MOCO's MOCO_USERS_LIST tool input.
 */
type MOCO_USERS_LIST_INPUT = {
  /**
   * Include Archived
   * @description Include deactivated users when true.
   * @default null
   */
  include_archived: boolean | null;
  /**
   * Tags
   * @description Comma-separated list of tags to filter users.
   * @default null
   */
  tags: string | null;
};

/**
 * Type of MOCO's MOCO_USERS_LIST tool output.
 */
type MOCO_USERS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Users
       * @description List of users returned by the API.
       */
      users: {
          /**
           * Firstname
           * @description First name of the user.
           */
          firstname: string;
          /**
           * Id
           * @description Unique user identifier.
           */
          id: number;
          /**
           * Lastname
           * @description Last name of the user.
           */
          lastname: string;
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
 * Type map of all available tool input types for toolkit "MOCO".
 */
export type MOCO_TOOL_INPUTS = {
  ACTIVITIES_LIST: MOCO_ACTIVITIES_LIST_INPUT
  ACTIVITY_GET: MOCO_ACTIVITY_GET_INPUT
  ACTIVITY_UPDATE: MOCO_ACTIVITY_UPDATE_INPUT
  COMMENTS_LIST: MOCO_COMMENTS_LIST_INPUT
  COMPANY_CREATE: MOCO_COMPANY_CREATE_INPUT
  COMPANY_DELETE: MOCO_COMPANY_DELETE_INPUT
  CONTACTS_LIST: MOCO_CONTACTS_LIST_INPUT
  DEALS_LIST: MOCO_DEALS_LIST_INPUT
  DEAL_CATEGORIES_LIST: MOCO_DEAL_CATEGORIES_LIST_INPUT
  DEAL_DELETE: MOCO_DEAL_DELETE_INPUT
  DEAL_GET: MOCO_DEAL_GET_INPUT
  DEAL_UPDATE: MOCO_DEAL_UPDATE_INPUT
  INVOICES_LIST: MOCO_INVOICES_LIST_INPUT
  MOCO_INVOICE_CREATE: MOCO_MOCO_INVOICE_CREATE_INPUT
  MOCO_PURCHASE_CREATE: MOCO_MOCO_PURCHASE_CREATE_INPUT
  OFFERS_LIST: MOCO_OFFERS_LIST_INPUT
  OFFER_GET: MOCO_OFFER_GET_INPUT
  PLANNING_ENTRIES_LIST: MOCO_PLANNING_ENTRIES_LIST_INPUT
  PLANNING_ENTRY_CREATE: MOCO_PLANNING_ENTRY_CREATE_INPUT
  PLANNING_ENTRY_GET: MOCO_PLANNING_ENTRY_GET_INPUT
  PROJECTS_LIST: MOCO_PROJECTS_LIST_INPUT
  PROJECT_CREATE: MOCO_PROJECT_CREATE_INPUT
  PROJECT_GET: MOCO_PROJECT_GET_INPUT
  PROJECT_UPDATE: MOCO_PROJECT_UPDATE_INPUT
  USERS_LIST: MOCO_USERS_LIST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MOCO".
 */
export type MOCO_TOOL_OUTPUTS = {
  ACTIVITIES_LIST: MOCO_ACTIVITIES_LIST_OUTPUT
  ACTIVITY_GET: MOCO_ACTIVITY_GET_OUTPUT
  ACTIVITY_UPDATE: MOCO_ACTIVITY_UPDATE_OUTPUT
  COMMENTS_LIST: MOCO_COMMENTS_LIST_OUTPUT
  COMPANY_CREATE: MOCO_COMPANY_CREATE_OUTPUT
  COMPANY_DELETE: MOCO_COMPANY_DELETE_OUTPUT
  CONTACTS_LIST: MOCO_CONTACTS_LIST_OUTPUT
  DEALS_LIST: MOCO_DEALS_LIST_OUTPUT
  DEAL_CATEGORIES_LIST: MOCO_DEAL_CATEGORIES_LIST_OUTPUT
  DEAL_DELETE: MOCO_DEAL_DELETE_OUTPUT
  DEAL_GET: MOCO_DEAL_GET_OUTPUT
  DEAL_UPDATE: MOCO_DEAL_UPDATE_OUTPUT
  INVOICES_LIST: MOCO_INVOICES_LIST_OUTPUT
  MOCO_INVOICE_CREATE: MOCO_MOCO_INVOICE_CREATE_OUTPUT
  MOCO_PURCHASE_CREATE: MOCO_MOCO_PURCHASE_CREATE_OUTPUT
  OFFERS_LIST: MOCO_OFFERS_LIST_OUTPUT
  OFFER_GET: MOCO_OFFER_GET_OUTPUT
  PLANNING_ENTRIES_LIST: MOCO_PLANNING_ENTRIES_LIST_OUTPUT
  PLANNING_ENTRY_CREATE: MOCO_PLANNING_ENTRY_CREATE_OUTPUT
  PLANNING_ENTRY_GET: MOCO_PLANNING_ENTRY_GET_OUTPUT
  PROJECTS_LIST: MOCO_PROJECTS_LIST_OUTPUT
  PROJECT_CREATE: MOCO_PROJECT_CREATE_OUTPUT
  PROJECT_GET: MOCO_PROJECT_GET_OUTPUT
  PROJECT_UPDATE: MOCO_PROJECT_UPDATE_OUTPUT
  USERS_LIST: MOCO_USERS_LIST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MOCO toolkit.
 */
export const MOCO = {
  slug: "moco",
  tools: {
    /**
     * Tool to retrieve activities. use when you need to list time entries with filters like date range, user, project, or billing status.
     */
    ACTIVITIES_LIST: "MOCO_ACTIVITIES_LIST",
    /**
     * Tool to retrieve a single activity by id. use when you need to fetch details for a specific activity after confirming the activity id.
     */
    ACTIVITY_GET: "MOCO_ACTIVITY_GET",
    /**
     * Tool to update an existing activity. use when you need to adjust details of a recorded time entry after confirming the activity exists.
     */
    ACTIVITY_UPDATE: "MOCO_ACTIVITY_UPDATE",
    /**
     * Tool to retrieve a list of comments. use after confirming the resource type and id.
     */
    COMMENTS_LIST: "MOCO_COMMENTS_LIST",
    /**
     * Tool to create a new company. use when you need to add a company after gathering required fields.
     */
    COMPANY_CREATE: "MOCO_COMPANY_CREATE",
    /**
     * Tool to delete a company. use when you need to remove a company from moco after confirming no active dependencies.
     */
    COMPANY_DELETE: "MOCO_COMPANY_DELETE",
    /**
     * Tool to retrieve a list of contacts. use when you need to list contacts optionally filtered by tags, term, or phone after confirming criteria.
     */
    CONTACTS_LIST: "MOCO_CONTACTS_LIST",
    /**
     * Tool to retrieve a list of all deals (leads). use when you need an overview of deals filtered by status, tags, date range, or associated company.
     */
    DEALS_LIST: "MOCO_DEALS_LIST",
    /**
     * Tool to list deal categories with their ids and probabilities. use when you need a reference of available deal category types after authenticating.
     */
    DEAL_CATEGORIES_LIST: "MOCO_DEAL_CATEGORIES_LIST",
    /**
     * Tool to delete a deal. use when you have identified an obsolete or unwanted deal and confirmed its deletion. example: "delete the deal with id 123."
     */
    DEAL_DELETE: "MOCO_DEAL_DELETE",
    /**
     * Tool to retrieve a single deal by id. use when you have a deal id and need detailed deal information. use after confirming the deal id.
     */
    DEAL_GET: "MOCO_DEAL_GET",
    /**
     * Tool to update an existing deal. use when you need to modify one or more fields of a deal after retrieving its details.
     */
    DEAL_UPDATE: "MOCO_DEAL_UPDATE",
    /**
     * Tool to retrieve a list of all invoices. use when you need an overview of invoices, optionally filtered by status, date range, or client.
     */
    INVOICES_LIST: "MOCO_INVOICES_LIST",
    /**
     * Tool to create a new invoice. use after gathering complete invoice data (customer, dates, items, etc.).
     */
    MOCO_INVOICE_CREATE: "MOCO_MOCO_INVOICE_CREATE",
    /**
     * Tool to create a new purchase. use when you need to log an expense record after gathering date, items, and payment info.
     */
    MOCO_PURCHASE_CREATE: "MOCO_MOCO_PURCHASE_CREATE",
    /**
     * Tool to retrieve a list of all offers. use when you need an overview of offers filtered by status, date range, or identifiers.
     */
    OFFERS_LIST: "MOCO_OFFERS_LIST",
    /**
     * Tool to retrieve a single offer by id. use when you have an offer id and need detailed offer information. use after confirming the offer id.
     */
    OFFER_GET: "MOCO_OFFER_GET",
    /**
     * Tool to retrieve a list of all planning entries. use when you need an overview of planned hours filtered by period, user, or project.
     */
    PLANNING_ENTRIES_LIST: "MOCO_PLANNING_ENTRIES_LIST",
    /**
     * Tool to create a new planning entry. use when you need to allocate working hours to a project or deal.
     */
    PLANNING_ENTRY_CREATE: "MOCO_PLANNING_ENTRY_CREATE",
    /**
     * Tool to retrieve a single planning entry by id. use when you need detailed information for a specific planning entry after confirming its id.
     */
    PLANNING_ENTRY_GET: "MOCO_PLANNING_ENTRY_GET",
    /**
     * Tool to retrieve a list of all projects. use when you need an overview of projects optionally filtered by company, leader, date range, or tags after confirming criteria.
     */
    PROJECTS_LIST: "MOCO_PROJECTS_LIST",
    /**
     * Tool to create a new project in moco. use when you need to provision a project with validated parameters.
     */
    PROJECT_CREATE: "MOCO_PROJECT_CREATE",
    /**
     * Tool to retrieve a single project by id. use when you need detailed project information after confirming the project id.
     */
    PROJECT_GET: "MOCO_PROJECT_GET",
    /**
     * Tool to update an existing project. use when you need to modify project details after confirming the project id.
     */
    PROJECT_UPDATE: "MOCO_PROJECT_UPDATE",
    /**
     * Tool to list all users. use when you need valid 'leader id' or 'co leader id' for project creation after confirming available staff.
     */
    USERS_LIST: "MOCO_USERS_LIST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MOCO".
 */
export type MOCO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MOCO".
 */
export type MOCO_TRIGGER_EVENTS = {}
