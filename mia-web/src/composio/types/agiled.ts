// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of AGILED's AGILED_CREATE_EXPENSE tool input.
 */
type AGILED_CREATE_EXPENSE_INPUT = {
  /**
   * Currency Id
   * @description Currency ID used for the expense
   */
  currency_id?: number;
  /**
   * Distance Category
   * @description Category or purpose of the distance expense
   */
  distance_category?: string;
  /**
   * Distance Cost
   * @description Calculated distance cost (distance_value x distance_unit_rate)
   * @default null
   */
  distance_cost: number | null;
  /**
   * Distance Description
   * @description Additional notes about the distance traveled
   * @default null
   */
  distance_description: string | null;
  /**
   * Distance Unit
   * @description Unit for distance (e.g., kilometer or mile)
   * @default null
   */
  distance_unit: string | null;
  /**
   * Distance Unit Rate
   * @description Rate per distance unit (must be non-negative)
   * @default null
   */
  distance_unit_rate: number | null;
  /**
   * Distance Value
   * @description Distance traveled, numeric value (must be non-negative)
   */
  distance_value?: number;
  /**
   * How Often
   * @description Recurring frequency (e.g., daily, weekly, monthly)
   * @default null
   */
  how_often: string | null;
  /**
   * Include Distance
   * @description Include distance cost (yes/no)
   * @default null
   */
  include_distance: string | null;
  /**
   * Is Infinite
   * @description Whether the recurrence is infinite (yes/no)
   * @default null
   */
  is_infinite: string | null;
  /**
   * Item Name
   * @description Name of the expense item
   */
  item_name?: string;
  /**
   * Make Recurring
   * @description Mark this expense as recurring (yes/no)
   * @default null
   */
  make_recurring: string | null;
  /**
   * Next Purchase Date
   * @description Next scheduled date for recurring expense (YYYY-MM-DD)
   * @default null
   */
  next_purchase_date: string | null;
  /**
   * Often Terms
   * @description Number of intervals between recurrences
   * @default null
   */
  often_terms: number | null;
  /**
   * Price
   * @description Price of the expense (must be non-negative)
   */
  price?: number;
  /**
   * Project Id
   * @description Associated project ID, if applicable
   * @default null
   */
  project_id: number | null;
  /**
   * Purchase Date
   * @description Date when the expense was made (YYYY-MM-DD)
   */
  purchase_date?: string;
  /**
   * Purchased From
   * @description Vendor or source of the expense
   * @default null
   */
  purchased_from: string | null;
  /**
   * Remaining Cycles
   * @description Remaining number of recurrence cycles
   * @default null
   */
  remaining_cycles: number | null;
  /**
   * Status
   * @description Status of the expense (e.g., approved)
   * @default null
   */
  status: string | null;
  /**
   * Term Duration
   * @description Unit for recurrence intervals (e.g., day, week, month)
   * @default null
   */
  term_duration: string | null;
  /**
   * User Id
   * @description User ID of the expense owner
   */
  user_id?: number;
};

/**
 * Type of AGILED's AGILED_CREATE_EXPENSE tool output.
 */
type AGILED_CREATE_EXPENSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Company Id
       * @description Company ID associated with the expense
       */
      company_id: number;
      /**
       * Created At
       * @description Timestamp when the expense was created
       */
      created_at: string;
      /**
       * Currency Id
       * @description Currency ID used for the expense
       */
      currency_id: number;
      /**
       * Deleted At
       * @description Timestamp when the expense was deleted, if applicable
       * @default null
       */
      deleted_at: string | null;
      /**
       * Id
       * @description Unique identifier of the created expense
       */
      id: number;
      /**
       * Item Name
       * @description Name of the expense item
       */
      item_name: string;
      /**
       * Price
       * @description Price of the expense
       */
      price: number;
      /**
       * Project Id
       * @description Associated project ID, if applicable
       * @default null
       */
      project_id: number | null;
      /**
       * Purchased Date
       * @description Date when the expense was made (YYYY-MM-DD)
       */
      purchased_date: string;
      /**
       * Purchased From
       * @description Vendor or source of the expense
       * @default null
       */
      purchased_from: string | null;
      /**
       * Status
       * @description Status of the expense (e.g., approved)
       * @default null
       */
      status: string | null;
      /**
       * Updated At
       * @description Timestamp when the expense was last updated
       */
      updated_at: string;
      /**
       * User Id
       * @description User ID of the expense owner
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
 * Type of AGILED's AGILED_CREATE_PROJECT tool input.
 */
type AGILED_CREATE_PROJECT_INPUT = {
  /**
   * Deadline
   * @description Deadline of the project in YYYY-MM-DD format
   * @default null
   */
  deadline: string | null;
  /**
   * Notes
   * @description Internal notes or comments for the project
   * @default null
   */
  notes: string | null;
  /**
   * Project Name
   * @description Title of the project
   */
  project_name?: string;
  /**
   * Project Summary
   * @description Brief summary of the project
   * @default null
   */
  project_summary: string | null;
  /**
   * Start Date
   * @description Start date of the project in YYYY-MM-DD format
   */
  start_date?: string;
  /**
   * Status
   * @description Current status of the project
   * @enum {string}
   */
  status?: "in progress" | "on hold" | "canceled" | "finished" | "not started";
};

/**
 * Type of AGILED's AGILED_CREATE_PROJECT tool output.
 */
type AGILED_CREATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deadline
       * @description Deadline of the project in YYYY-MM-DD format
       * @default null
       */
      deadline: string | null;
      /**
       * Id
       * @description Unique identifier of the created project
       */
      id: number;
      /**
       * Notes
       * @description Internal notes or comments for the project
       * @default null
       */
      notes: string | null;
      /**
       * Project Name
       * @description Title of the project
       */
      project_name: string;
      /**
       * Project Summary
       * @description Brief summary of the project
       * @default null
       */
      project_summary: string | null;
      /**
       * Start Date
       * @description Start date of the project in YYYY-MM-DD format
       */
      start_date: string;
      /**
       * Status
       * @description Current status of the project
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
 * Type of AGILED's AGILED_CREATE_TASK tool input.
 */
type AGILED_CREATE_TASK_INPUT = {
  /**
   * Assigned To
   * @description User ID to assign this task to
   * @default null
   */
  assigned_to: number | null;
  /**
   * Description
   * @description Detailed description of the task
   * @default null
   */
  description: string | null;
  /**
   * Due Date
   * @description Due date of the task in YYYY-MM-DD format
   * @default null
   */
  due_date: string | null;
  /**
   * Followers
   * @description List of user IDs who will follow the task
   * @default null
   */
  followers: number[] | null;
  /**
   * List Id
   * @description ID of the task list/column (e.g., backlog, in_progress)
   * @default null
   */
  list_id: number | null;
  /**
   * Priority
   * @description Priority level of the task
   * @default null
   * @enum {string|null}
   */
  priority: "low" | "normal" | "high" | null;
  /**
   * Project Id
   * @description ID of the project to which this task belongs
   * @default null
   */
  project_id: number | null;
  /**
   * Start Date
   * @description Start date of the task in YYYY-MM-DD format
   * @default null
   */
  start_date: string | null;
  /**
   * Status
   * @description Current status of the task
   * @default null
   * @enum {string|null}
   */
  status: "to_do" | "in_progress" | "done" | null;
  /**
   * Title
   * @description Title or summary of the task
   */
  title?: string;
};

/**
 * Type of AGILED's AGILED_CREATE_TASK tool output.
 */
type AGILED_CREATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assigned To
       * @description User ID assigned to this task
       * @default null
       */
      assigned_to: number | null;
      /**
       * Created At
       * @description Timestamp when the task was created in ISO-8601 format
       */
      created_at: string;
      /**
       * Description
       * @description Detailed description of the task
       * @default null
       */
      description: string | null;
      /**
       * Due Date
       * @description Due date of the task in YYYY-MM-DD format
       * @default null
       */
      due_date: string | null;
      /**
       * Followers
       * @description List of user IDs following the task
       * @default null
       */
      followers: number[] | null;
      /**
       * Id
       * @description Unique identifier of the created task
       */
      id: number;
      /**
       * List Id
       * @description ID of the task list/column
       * @default null
       */
      list_id: number | null;
      /**
       * Priority
       * @description Priority level of the task
       */
      priority: string;
      /**
       * Project Id
       * @description ID of the project to which this task belongs
       * @default null
       */
      project_id: number | null;
      /**
       * Start Date
       * @description Start date of the task in YYYY-MM-DD format
       * @default null
       */
      start_date: string | null;
      /**
       * Status
       * @description Current status of the task
       */
      status: string;
      /**
       * Title
       * @description Title or summary of the task
       */
      title: string;
      /**
       * Updated At
       * @description Timestamp when the task was last updated in ISO-8601 format
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
 * Type of AGILED's AGILED_CREATE_TICKET tool input.
 */
type AGILED_CREATE_TICKET_INPUT = {
  /**
   * Agent Id
   * @description ID of the agent assigned to this ticket.
   * @default null
   */
  agent_id: number | null;
  /**
   * Channel Id
   * @description ID of the communication channel (e.g., email, chat).
   * @default null
   */
  channel_id: number | null;
  /**
   * File
   * @description Attachment URL or identifier.
   * @default null
   */
  file: string | null;
  /**
   * Message
   * @description Initial message describing the issue.
   */
  message?: string;
  /**
   * Priority
   * @description Priority level of the ticket.
   * @enum {string}
   */
  priority?: "low" | "medium" | "high";
  /**
   * Subject
   * @description Title of the support ticket.
   */
  subject?: string;
  /**
   * Type Id
   * @description ID of the ticket type or category.
   * @default null
   */
  type_id: number | null;
  /**
   * User Id
   * @description ID of the user creating the ticket.
   */
  user_id?: number;
};

/**
 * Type of AGILED's AGILED_CREATE_TICKET tool output.
 */
type AGILED_CREATE_TICKET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Agent Id
       * @description Assigned agent ID if any.
       * @default null
       */
      agent_id: number | null;
      /**
       * Channel Id
       * @description Ticket channel ID if any.
       * @default null
       */
      channel_id: number | null;
      /**
       * Created At
       * @description Timestamp when ticket was created.
       * @default null
       */
      created_at: string | null;
      /**
       * File
       * @description Attachment identifier if any.
       * @default null
       */
      file: string | null;
      /**
       * Id
       * @description Unique identifier of the created ticket.
       */
      id: number;
      /**
       * Message
       * @description Initial message for the ticket.
       */
      message: string;
      /**
       * Priority
       * @description Priority level of the ticket.
       */
      priority: string;
      /**
       * Status
       * @description Current status of the ticket.
       * @default null
       */
      status: string | null;
      /**
       * Subject
       * @description Title of the support ticket.
       */
      subject: string;
      /**
       * Type Id
       * @description Ticket type ID if any.
       * @default null
       */
      type_id: number | null;
      /**
       * Updated At
       * @description Timestamp when ticket was last updated.
       * @default null
       */
      updated_at: string | null;
      /**
       * User Id
       * @description ID of the user who created the ticket.
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
 * Type of AGILED's AGILED_GET_CONTACTS tool input.
 */
type AGILED_GET_CONTACTS_INPUT = {
  /**
   * Page
   * @description Page number for pagination (must be >= 1)
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of contacts to retrieve per page (must be >= 1)
   * @default 30
   */
  per_page: number;
  /**
   * Search
   * @description Search query to filter contacts by name or email
   * @default null
   */
  search: string | null;
};

/**
 * Type of AGILED's AGILED_GET_CONTACTS tool output.
 */
type AGILED_GET_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description List of contact records
   */
  data?: {
      /**
       * Company
       * @description Company name associated with the contact
       */
      company: string;
      /**
       * Created At
       * @description ISO8601 timestamp when the contact was created
       */
      created_at: string;
      /**
       * Email
       * @description Email address of the contact
       */
      email: string;
      /**
       * First Name
       * @description First name of the contact
       */
      first_name: string;
      /**
       * Id
       * @description Unique identifier of the contact
       */
      id: number;
      /**
       * Last Name
       * @description Last name of the contact
       */
      last_name: string;
      /**
       * Phone
       * @description Phone number of the contact
       */
      phone: string;
      /**
       * Updated At
       * @description ISO8601 timestamp when the contact was last updated
       */
      updated_at: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Per Page
       * @description Number of contacts per page
       */
      per_page: number;
      /**
       * Total
       * @description Total number of contacts available
       */
      total: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGILED's AGILED_GET_CURRENCIES tool input.
 */
type AGILED_GET_CURRENCIES_INPUT = object;

/**
 * Type of AGILED's AGILED_GET_CURRENCIES tool output.
 */
type AGILED_GET_CURRENCIES_OUTPUT = {
  /**
   * Data
   * @description List of currency definitions
   */
  data?: {
      /**
       * Code
       * @description Three-letter currency code, e.g., 'USD'
       */
      code: string;
      /**
       * Id
       * @description Unique identifier of the currency
       */
      id: number;
      /**
       * Name
       * @description Full name of the currency, e.g., 'US Dollar'
       */
      name: string;
      /**
       * Position
       * @description Position of the symbol relative to the amount: 'before' or 'after'
       * @enum {string}
       */
      position: "before" | "after";
      /**
       * Symbol
       * @description Currency symbol, e.g., '$'
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
 * Type of AGILED's AGILED_GET_DEALS tool input.
 */
type AGILED_GET_DEALS_INPUT = object;

/**
 * Type of AGILED's AGILED_GET_DEALS tool output.
 */
type AGILED_GET_DEALS_OUTPUT = {
  /**
   * Data
   * @description List of deal records
   */
  data?: {
      /**
       * Amount
       * @description Deal amount
       */
      amount: string;
      /**
       * Close Date
       * @description Deal close date in ISO format
       */
      close_date: string;
      /**
       * Created At
       * @description ISO8601 timestamp when the deal was created
       */
      created_at: string;
      /**
       * Deal Name
       * @description Name of the deal
       */
      deal_name: string;
      /**
       * Deal Owner
       * @description Sales agent ID who owns the deal
       */
      deal_owner: number;
      /**
       * Deal Type
       * @description Type of the deal
       */
      deal_type: string;
      /**
       * Id
       * @description Unique deal identifier
       */
      id: number;
      /**
       * Pipeline Id
       * @description Pipeline ID associated with the deal
       */
      pipeline_id: number;
      /**
       * Pipelinestage Id
       * @description Pipeline stage ID of the deal
       */
      pipelinestage_id: number;
      /**
       * Updated At
       * @description ISO8601 timestamp when the deal was last updated
       */
      updated_at: string;
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
 * Type of AGILED's AGILED_GET_EMPLOYEES tool input.
 */
type AGILED_GET_EMPLOYEES_INPUT = object;

/**
 * Type of AGILED's AGILED_GET_EMPLOYEES tool output.
 */
type AGILED_GET_EMPLOYEES_OUTPUT = {
  /**
   * Data
   * @description List of employees retrieved from Agiled
   */
  data?: {
      /**
       * Address
       * @description Employee's address
       * @default null
       */
      address: string | null;
      /**
       * Company Id
       * @description ID of the company the employee belongs to
       */
      company_id: number;
      /**
       * Created At
       * @description Timestamp when the employee record was created
       */
      created_at: string;
      /**
       * Deleted At
       * @description Timestamp when the employee was deleted, if applicable
       * @default null
       */
      deleted_at: string | null;
      /**
       * Department Id
       * @description ID of the employee's department
       */
      department_id: number;
      /**
       * Designation Id
       * @description ID of the employee's designation/title
       */
      designation_id: number;
      /**
       * Employee Id
       * @description Custom employee code or identifier
       */
      employee_id: string;
      /**
       * Hourly Rate
       * @description Employee's hourly billing rate
       * @default null
       */
      hourly_rate: number | null;
      /**
       * Id
       * @description ID of the employee
       */
      id: number;
      /**
       * Joining Date
       * @description Date the employee joined (YYYY-MM-DD)
       */
      joining_date: string;
      /**
       * Slack Username
       * @description Employee's Slack username
       * @default null
       */
      slack_username: string | null;
      /**
       * Updated At
       * @description Timestamp when the employee record was last updated
       */
      updated_at: string;
      /**
       * User Id
       * @description ID of the user account for the employee
       */
      user_id: number;
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
 * Type of AGILED's AGILED_GET_ESTIMATES tool input.
 */
type AGILED_GET_ESTIMATES_INPUT = {
  /**
   * Page
   * @description Page number for pagination (must be >= 1)
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of estimates to retrieve per page (must be >= 1)
   * @default 30
   */
  per_page: number;
};

/**
 * Type of AGILED's AGILED_GET_ESTIMATES tool output.
 */
type AGILED_GET_ESTIMATES_OUTPUT = {
  /**
   * Data
   * @description List of estimate records
   */
  data?: {
      /**
       * Client Id
       * @description ID of the client
       */
      client_id: number;
      /**
       * Created At
       * @description ISO8601 timestamp when the estimate was created
       */
      created_at: string;
      /**
       * Currency
       * @description Currency code
       */
      currency: string;
      /**
       * Due Date
       * @description ISO8601 due date for the estimate
       * @default null
       */
      due_date: string | null;
      /**
       * Estimate Number
       * @description Estimate number
       */
      estimate_number: string;
      /**
       * Id
       * @description Unique identifier of the estimate
       */
      id: number;
      /**
       * Issue Date
       * @description ISO8601 date when the estimate was issued
       */
      issue_date: string;
      /**
       * Project Id
       * @description ID of the associated project, if any
       * @default null
       */
      project_id: number | null;
      /**
       * Status
       * @description Status of the estimate
       */
      status: string;
      /**
       * Subtotal
       * @description Subtotal amount
       */
      subtotal: number;
      /**
       * Total
       * @description Total amount
       */
      total: number;
      /**
       * Updated At
       * @description ISO8601 timestamp when the estimate was last updated
       */
      updated_at: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Per Page
       * @description Number of estimates per page
       */
      per_page: number;
      /**
       * Total
       * @description Total number of estimates available
       */
      total: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGILED's AGILED_GET_EXPENSES tool input.
 */
type AGILED_GET_EXPENSES_INPUT = object;

/**
 * Type of AGILED's AGILED_GET_EXPENSES tool output.
 */
type AGILED_GET_EXPENSES_OUTPUT = {
  /**
   * Data
   * @description List of expense records
   */
  data?: {
      /**
       * Company Id
       * @description Company ID associated with the expense
       */
      company_id: number;
      /**
       * Created At
       * @description Timestamp when expense was created
       */
      created_at: string;
      /**
       * Currency Id
       * @description Currency ID used for the expense
       */
      currency_id: number;
      /**
       * Deleted At
       * @description Timestamp when expense was deleted, if applicable
       * @default null
       */
      deleted_at: string | null;
      /**
       * Id
       * @description Unique identifier of the expense
       */
      id: number;
      /**
       * Item Name
       * @description Name of the expense item
       */
      item_name: string;
      /**
       * Price
       * @description Price of the expense
       */
      price: number;
      /**
       * Project Id
       * @description Associated project ID
       */
      project_id: number;
      /**
       * Purchased Date
       * @description Date when the expense was made (YYYY-MM-DD)
       */
      purchased_date: string;
      /**
       * Purchased From
       * @description Vendor or source of the expense
       */
      purchased_from: string;
      /**
       * Status
       * @description Status of the expense (e.g., approved)
       */
      status: string;
      /**
       * Updated At
       * @description Timestamp when expense was last updated
       */
      updated_at: string;
      /**
       * User Id
       * @description User ID of the expense owner
       */
      user_id: number;
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
 * Type of AGILED's AGILED_GET_INVOICES tool input.
 */
type AGILED_GET_INVOICES_INPUT = object;

/**
 * Type of AGILED's AGILED_GET_INVOICES tool output.
 */
type AGILED_GET_INVOICES_OUTPUT = {
  /**
   * Data
   * @description List of invoices returned by the API
   */
  data?: {
      /**
       * Billing Cycle
       * @description Number of billing cycles
       * @default null
       */
      billing_cycle: string | null;
      /**
       * Billing Frequency
       * @description Frequency of billing (day, week, month, year)
       * @default null
       */
      billing_frequency: string | null;
      /**
       * Billing Interval
       * @description Interval count for recurring billing
       * @default null
       */
      billing_interval: string | null;
      /**
       * Client Id
       * @description Identifier of the client for the invoice
       */
      client_id: number;
      /**
       * Company Id
       * @description Identifier of the company
       */
      company_id: number;
      /**
       * Created At
       * @description Timestamp when the invoice was created
       * @default null
       */
      created_at: string | null;
      /**
       * Credit Note
       * @description Amount credited or refunded
       * @default 0
       */
      credit_note: number;
      /**
       * Currency Id
       * @description Currency identifier used for the invoice
       */
      currency_id: number;
      /**
       * Custom Fields
       * @description Custom fields attached to the invoice
       * @default []
       */
      custom_fields: {
          /**
           * Key
           * @description Custom field key
           */
          key: string;
          /**
           * Value
           * @description Custom field value
           */
          value: string;
      }[];
      /**
       * Deleted At
       * @description Timestamp when the invoice was deleted, if applicable
       * @default null
       */
      deleted_at: string | null;
      /**
       * Discount
       * @description Discount amount applied to the invoice
       * @default 0
       */
      discount: number;
      /**
       * Discount Type
       * @description Type of discount (fixed or percent)
       * @default null
       */
      discount_type: string | null;
      /**
       * Due Date
       * @description Date by which payment is due
       */
      due_date: string;
      /**
       * Estimate Id
       * @description Associated estimate identifier, if any
       * @default null
       */
      estimate_id: number | null;
      /**
       * Id
       * @description Unique identifier of the invoice
       */
      id: number;
      /**
       * Invoice Number
       * @description Invoice number string including prefix
       */
      invoice_number: string;
      /**
       * Issue Date
       * @description Date when the invoice was issued
       */
      issue_date: string;
      /**
       * Items
       * @description List of line items in the invoice
       * @default []
       */
      items: {
          /**
           * Amount
           * @description Total amount for this line item (quantity * unit_price)
           */
          amount: number;
          /**
           * Id
           * @description Unique identifier of the invoice item
           */
          id: number;
          /**
           * Invoice Id
           * @description Identifier of the parent invoice
           */
          invoice_id: number;
          /**
           * Item Name
           * @description Name of the invoice item
           */
          item_name: string;
          /**
           * Item Summary
           * @description Summary or description of the invoice item
           * @default null
           */
          item_summary: string | null;
          /**
           * Item Type
           * @description Type or category of the invoice item
           * @default null
           */
          item_type: string | null;
          /**
           * Quantity
           * @description Quantity of the invoice item
           */
          quantity: number;
          /**
           * Taxes
           * @description List of tax IDs applied to this item
           * @default []
           */
          taxes: number[];
          /**
           * Unit Price
           * @description Unit price for the invoice item
           */
          unit_price: number;
      }[];
      /**
       * Note
       * @description Internal notes for the invoice
       * @default null
       */
      note: string | null;
      /**
       * Project Id
       * @description Identifier of the project, if associated
       * @default null
       */
      project_id: number | null;
      /**
       * Recurring
       * @description Indicates if the invoice is recurring (yes or no)
       * @default null
       */
      recurring: string | null;
      /**
       * Status
       * @description Current status of the invoice (e.g., paid, unpaid)
       */
      status: string;
      /**
       * Sub Total
       * @description Subtotal amount before discounts and taxes
       */
      sub_total: number;
      /**
       * Total
       * @description Total amount after discounts and taxes
       */
      total: number;
      /**
       * Total Amount
       * @description Final total amount including credit notes
       */
      total_amount: number;
      /**
       * Updated At
       * @description Timestamp when the invoice was last updated
       * @default null
       */
      updated_at: string | null;
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
 * Type of AGILED's AGILED_GET_PRODUCTS tool input.
 */
type AGILED_GET_PRODUCTS_INPUT = object;

/**
 * Type of AGILED's AGILED_GET_PRODUCTS tool output.
 */
type AGILED_GET_PRODUCTS_OUTPUT = {
  /**
   * Data
   * @description List of available products
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when product was created
       */
      created_at: string;
      /**
       * Description
       * @description Detailed product description
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique product identifier
       */
      id: number;
      /**
       * Name
       * @description Product name
       */
      name: string;
      /**
       * Price
       * @description Product price in USD
       */
      price: number;
      /**
       * Updated At
       * @description ISO 8601 timestamp when product was last updated
       */
      updated_at: string;
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
 * Type of AGILED's AGILED_GET_PROJECTS tool input.
 */
type AGILED_GET_PROJECTS_INPUT = object;

/**
 * Type of AGILED's AGILED_GET_PROJECTS tool output.
 */
type AGILED_GET_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Projects
       * @description List of projects returned by the API
       */
      projects: {
          /**
           * Deadline
           * @description ISO date string for project deadline
           * @default null
           */
          deadline: string | null;
          /**
           * Id
           * @description Unique project identifier
           */
          id: number;
          /**
           * Name
           * @description Name of the project
           */
          name: string;
          /**
           * Notes
           * @description Additional notes related to the project
           * @default null
           */
          notes: string | null;
          /**
           * Project Summary
           * @description Brief summary of the project
           * @default null
           */
          project_summary: string | null;
          /**
           * Start Date
           * @description ISO date string for when the project started
           * @default null
           */
          start_date: string | null;
          /**
           * Status
           * @description Current status of the project
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
 * Type of AGILED's AGILED_GET_PROJECT_CATEGORIES tool input.
 */
type AGILED_GET_PROJECT_CATEGORIES_INPUT = object;

/**
 * Type of AGILED's AGILED_GET_PROJECT_CATEGORIES tool output.
 */
type AGILED_GET_PROJECT_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description List of project categories
   */
  data?: {
      /**
       * Color
       * @description Hex code or name of the category color, if available
       * @default null
       */
      color: string | null;
      /**
       * Created At
       * @description ISO8601 timestamp when the category was created
       * @default null
       */
      created_at: string | null;
      /**
       * Id
       * @description Unique identifier of the project category
       */
      id: number;
      /**
       * Name
       * @description Name of the project category
       */
      name: string;
      /**
       * Updated At
       * @description ISO8601 timestamp when the category was last updated
       * @default null
       */
      updated_at: string | null;
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
 * Type of AGILED's AGILED_GET_TASKS tool input.
 */
type AGILED_GET_TASKS_INPUT = object;

/**
 * Type of AGILED's AGILED_GET_TASKS tool output.
 */
type AGILED_GET_TASKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tasks
       * @description List of tasks retrieved from the API
       */
      tasks: {
          /**
           * Created At
           * @description Creation timestamp in ISO format
           */
          created_at: string;
          /**
           * Description
           * @description Detailed description of the task
           * @default null
           */
          description: string | null;
          /**
           * Due Date
           * @description Due date of the task in ISO format
           * @default null
           */
          due_date: string | null;
          /**
           * Id
           * @description Unique identifier of the task
           */
          id: number;
          /**
           * Priority
           * @description Priority level of the task
           * @default null
           */
          priority: string | null;
          /**
           * Status
           * @description Current status of the task
           */
          status: string;
          /**
           * Title
           * @description Title of the task
           */
          title: string;
          /**
           * Updated At
           * @description Last updated timestamp in ISO format
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
 * Type of AGILED's AGILED_GET_TICKETS tool input.
 */
type AGILED_GET_TICKETS_INPUT = object;

/**
 * Type of AGILED's AGILED_GET_TICKETS tool output.
 */
type AGILED_GET_TICKETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tickets
       * @description List of tickets retrieved from Agiled
       */
      tickets: {
          /**
           * Assignee Id
           * @description ID of the user assigned to the ticket
           * @default null
           */
          assignee_id: number | null;
          /**
           * Created At
           * @description ISO8601 timestamp when the ticket was created
           */
          created_at: string;
          /**
           * Description
           * @description Detailed description of the ticket
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the ticket
           */
          id: number;
          /**
           * Priority
           * @description Priority level of the ticket
           * @default null
           */
          priority: string | null;
          /**
           * Status
           * @description Current status of the ticket (e.g., open, pending, closed)
           */
          status: string;
          /**
           * Subject
           * @description Subject of the ticket
           */
          subject: string;
          /**
           * Updated At
           * @description ISO8601 timestamp when the ticket was last updated
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
 * Type of AGILED's AGILED_GET_TIMESHEETS tool input.
 */
type AGILED_GET_TIMESHEETS_INPUT = {
  /**
   * Project Id
   * @description ID of the project to retrieve timesheets for (must be >= 1)
   */
  project_id?: number;
};

/**
 * Type of AGILED's AGILED_GET_TIMESHEETS tool output.
 */
type AGILED_GET_TIMESHEETS_OUTPUT = {
  /**
   * Data
   * @description List of time log entries for the project
   */
  data?: {
      /**
       * Company Id
       * @description Identifier of the company
       */
      company_id: number;
      /**
       * Created At
       * @description Timestamp when the entry was created
       */
      created_at: string;
      /**
       * End Date
       * @description Date when the time log ended, ISO8601 date
       */
      end_date: string;
      /**
       * End Time
       * @description Time when the time log ended
       */
      end_time: string;
      /**
       * Id
       * @description Unique identifier of the time log entry
       */
      id: number;
      /**
       * Memo
       * @description Memo or description of the time log entry
       */
      memo: string;
      /**
       * Project Id
       * @description Identifier of the project
       */
      project_id: number;
      /**
       * Start Date
       * @description Date when the time log started, ISO8601 date
       */
      start_date: string;
      /**
       * Start Time
       * @description Time when the time log started
       */
      start_time: string;
      /**
       * Task Id
       * @description Identifier of the associated task
       */
      task_id: number;
      /**
       * Updated At
       * @description Timestamp when the entry was last updated
       */
      updated_at: string;
      /**
       * User Id
       * @description Identifier of the user who logged the time
       */
      user_id: number;
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
 * Type of AGILED's AGILED_GET_USERS tool input.
 */
type AGILED_GET_USERS_INPUT = object;

/**
 * Type of AGILED's AGILED_GET_USERS tool output.
 */
type AGILED_GET_USERS_OUTPUT = {
  /**
   * Data
   * @description List of users retrieved from Agiled
   */
  data?: {
      /**
       * Api Token
       * @description API token of the user
       */
      api_token: string;
      /**
       * Company Id
       * @description ID of the company the user belongs to
       */
      company_id: number;
      /**
       * Created At
       * @description Timestamp when the user was created
       */
      created_at: string;
      /**
       * Deleted At
       * @description Timestamp when the user was deleted, if applicable
       * @default null
       */
      deleted_at: string | null;
      /**
       * Email
       * @description Email address of the user
       */
      email: string;
      /**
       * Id
       * @description ID of the user
       */
      id: number;
      /**
       * Updated At
       * @description Timestamp when the user was last updated
       */
      updated_at: string;
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
 * Type map of all available tool input types for toolkit "AGILED".
 */
export type AGILED_TOOL_INPUTS = {
  CREATE_EXPENSE: AGILED_CREATE_EXPENSE_INPUT
  CREATE_PROJECT: AGILED_CREATE_PROJECT_INPUT
  CREATE_TASK: AGILED_CREATE_TASK_INPUT
  CREATE_TICKET: AGILED_CREATE_TICKET_INPUT
  GET_CONTACTS: AGILED_GET_CONTACTS_INPUT
  GET_CURRENCIES: AGILED_GET_CURRENCIES_INPUT
  GET_DEALS: AGILED_GET_DEALS_INPUT
  GET_EMPLOYEES: AGILED_GET_EMPLOYEES_INPUT
  GET_ESTIMATES: AGILED_GET_ESTIMATES_INPUT
  GET_EXPENSES: AGILED_GET_EXPENSES_INPUT
  GET_INVOICES: AGILED_GET_INVOICES_INPUT
  GET_PRODUCTS: AGILED_GET_PRODUCTS_INPUT
  GET_PROJECTS: AGILED_GET_PROJECTS_INPUT
  GET_PROJECT_CATEGORIES: AGILED_GET_PROJECT_CATEGORIES_INPUT
  GET_TASKS: AGILED_GET_TASKS_INPUT
  GET_TICKETS: AGILED_GET_TICKETS_INPUT
  GET_TIMESHEETS: AGILED_GET_TIMESHEETS_INPUT
  GET_USERS: AGILED_GET_USERS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "AGILED".
 */
export type AGILED_TOOL_OUTPUTS = {
  CREATE_EXPENSE: AGILED_CREATE_EXPENSE_OUTPUT
  CREATE_PROJECT: AGILED_CREATE_PROJECT_OUTPUT
  CREATE_TASK: AGILED_CREATE_TASK_OUTPUT
  CREATE_TICKET: AGILED_CREATE_TICKET_OUTPUT
  GET_CONTACTS: AGILED_GET_CONTACTS_OUTPUT
  GET_CURRENCIES: AGILED_GET_CURRENCIES_OUTPUT
  GET_DEALS: AGILED_GET_DEALS_OUTPUT
  GET_EMPLOYEES: AGILED_GET_EMPLOYEES_OUTPUT
  GET_ESTIMATES: AGILED_GET_ESTIMATES_OUTPUT
  GET_EXPENSES: AGILED_GET_EXPENSES_OUTPUT
  GET_INVOICES: AGILED_GET_INVOICES_OUTPUT
  GET_PRODUCTS: AGILED_GET_PRODUCTS_OUTPUT
  GET_PROJECTS: AGILED_GET_PROJECTS_OUTPUT
  GET_PROJECT_CATEGORIES: AGILED_GET_PROJECT_CATEGORIES_OUTPUT
  GET_TASKS: AGILED_GET_TASKS_OUTPUT
  GET_TICKETS: AGILED_GET_TICKETS_OUTPUT
  GET_TIMESHEETS: AGILED_GET_TIMESHEETS_OUTPUT
  GET_USERS: AGILED_GET_USERS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's AGILED toolkit.
 */
export const AGILED = {
  slug: "agiled",
  tools: {
    /**
     * Tool to create a new expense in agiled. use after gathering expense details and authenticating with your api key.
     */
    CREATE_EXPENSE: "AGILED_CREATE_EXPENSE",
    /**
     * Tool to create a new project in agiled. use when you have collected all project details and need to set up the project before assigning tasks. example: "create a new project named website redesign with start date 2023-09-01 and status in progress."
     */
    CREATE_PROJECT: "AGILED_CREATE_PROJECT",
    /**
     * Tool to create a new task in agiled. use when you have all task details and want to add it to your project board. example: "create a task titled 'draft specs' for project 45, assigned to user 7, priority normal, due date 2025-11-05."
     */
    CREATE_TASK: "AGILED_CREATE_TASK",
    /**
     * Tool to create a new support ticket in agiled. use after gathering all required ticket details (subject, message, priority, user id).
     */
    CREATE_TICKET: "AGILED_CREATE_TICKET",
    /**
     * Tool to retrieve a list of all contacts. use after configuring the api key to fetch contacts with optional pagination or search filters.
     */
    GET_CONTACTS: "AGILED_GET_CONTACTS",
    /**
     * Tool to list currencies. use when you need to fetch available currency options after authentication.
     */
    GET_CURRENCIES: "AGILED_GET_CURRENCIES",
    /**
     * Tool to retrieve a list of all deals. use after confirming your api key to list all deals for crm reporting.
     */
    GET_DEALS: "AGILED_GET_DEALS",
    /**
     * Tool to retrieve a list of all employees. use when you need up-to-date employee directory from agiled.
     */
    GET_EMPLOYEES: "AGILED_GET_EMPLOYEES",
    /**
     * Tool to retrieve a list of all estimates. use after configuring the api key to list estimates for reporting.
     */
    GET_ESTIMATES: "AGILED_GET_ESTIMATES",
    /**
     * Tool to retrieve a list of all expenses. use after authenticating with your agiled api key to fetch all expense records.
     */
    GET_EXPENSES: "AGILED_GET_EXPENSES",
    /**
     * Tool to retrieve a list of all invoices from agiled. use after obtaining valid api credentials.
     */
    GET_INVOICES: "AGILED_GET_INVOICES",
    /**
     * Tool to retrieve a list of all products. use when you need to display all available offerings.
     */
    GET_PRODUCTS: "AGILED_GET_PRODUCTS",
    /**
     * Tool to retrieve a list of all projects. use after obtaining the api token.
     */
    GET_PROJECTS: "AGILED_GET_PROJECTS",
    /**
     * Tool to retrieve a list of all project categories. use when you need to fetch category options before creating or filtering projects after authentication.
     */
    GET_PROJECT_CATEGORIES: "AGILED_GET_PROJECT_CATEGORIES",
    /**
     * Tool to retrieve a list of all tasks. use when you need to fetch all tasks across your account after authentication.
     */
    GET_TASKS: "AGILED_GET_TASKS",
    /**
     * Tool to retrieve a list of all tickets. use after obtaining api token when you need an overview of support or issue tickets.
     */
    GET_TICKETS: "AGILED_GET_TICKETS",
    /**
     * Tool to retrieve timesheets for a project. use when you have a valid project id to fetch all its time logs.
     */
    GET_TIMESHEETS: "AGILED_GET_TIMESHEETS",
    /**
     * Tool to retrieve a list of users from agiled. use when you need the full user directory for selection or validation.
     */
    GET_USERS: "AGILED_GET_USERS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "AGILED".
 */
export type AGILED_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "AGILED".
 */
export type AGILED_TRIGGER_EVENTS = {}
