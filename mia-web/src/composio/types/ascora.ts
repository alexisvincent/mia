// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ASCORA's ASCORA_ASCORA_DELETE_CUSTOMER tool input.
 */
type ASCORA_ASCORA_DELETE_CUSTOMER_INPUT = {
  /**
   * Customer Id
   * @description Unique identifier of the customer to delete
   */
  customer_id?: string;
};

/**
 * Type of ASCORA's ASCORA_ASCORA_DELETE_CUSTOMER tool output.
 */
type ASCORA_ASCORA_DELETE_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message returned by the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description True if the customer was deleted successfully
       * @default null
       */
      success: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ASCORA's ASCORA_CREATE_QUOTATION tool input.
 */
type ASCORA_CREATE_QUOTATION_INPUT = {
  /**
   * Address Country
   * @description Country of the address
   * @default null
   */
  addressCountry: string | null;
  /**
   * Address Line1
   * @description First line of the address, e.g., street and number
   * @default null
   */
  addressLine1: string | null;
  /**
   * Address Line2
   * @description Second line of the address, e.g., unit or suite
   * @default null
   */
  addressLine2: string | null;
  /**
   * Address Postcode
   * @description Postal code for the address
   * @default null
   */
  addressPostcode: string | null;
  /**
   * Address State
   * @description State or territory of the address, e.g., 'WA', 'NSW'
   * @default null
   */
  addressState: string | null;
  /**
   * Address Suburb
   * @description Suburb or city of the address
   * @default null
   */
  addressSuburb: string | null;
  /**
   * Company Name
   * @description Name of the customer's company
   */
  companyName?: string;
  /**
   * Custom Fields
   * @description List of custom field name/value pairs to include with the request
   * @default null
   */
  customFields: {
      /**
       * Field Name
       * @description Custom field name
       */
      fieldName: string;
      /**
       * Field Value
       * @description Custom field value
       */
      fieldValue: string;
  }[] | null;
  /**
   * Email
   * Format: email
   * @description Customer's email address
   */
  email?: unknown;
  /**
   * Enquiry Description
   * @description Description of the quote request
   * @default null
   */
  enquiryDescription: string | null;
  /**
   * First Name
   * @description Customer's first name
   */
  firstName?: string;
  /**
   * Last Name
   * @description Customer's last name
   */
  lastName?: string;
  /**
   * Mobile
   * @description Customer's mobile phone number
   * @default null
   */
  mobile: string | null;
  /**
   * Phone
   * @description Customer's landline phone number
   * @default null
   */
  phone: string | null;
};

/**
 * Type of ASCORA's ASCORA_CREATE_QUOTATION tool output.
 */
type ASCORA_CREATE_QUOTATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Enquiry Id
       * @description Unique identifier of the created enquiry
       */
      EnquiryID: number;
      /**
       * Message
       * @description Optional message returned by the API
       * @default null
       */
      Message: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ASCORA's ASCORA_DELETE_CUSTOMER tool input.
 */
type ASCORA_DELETE_CUSTOMER_INPUT = {
  /**
   * Customer Id
   * @description Unique identifier of the customer to delete
   */
  customer_id?: string;
};

/**
 * Type of ASCORA's ASCORA_DELETE_CUSTOMER tool output.
 */
type ASCORA_DELETE_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message returned by the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description True if the customer was deleted successfully
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
 * Type of ASCORA's ASCORA_GET_CUSTOMERS tool input.
 */
type ASCORA_GET_CUSTOMERS_INPUT = object;

/**
 * Type of ASCORA's ASCORA_GET_CUSTOMERS tool output.
 */
type ASCORA_GET_CUSTOMERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Customers
       * @description List of customers returned by the API
       */
      customers: {
          /**
           * Address Line1
           * @description First line of the address
           * @default null
           */
          AddressLine1: string | null;
          /**
           * City
           * @description City of the address
           * @default null
           */
          City: string | null;
          /**
           * Country
           * @description Country
           * @default null
           */
          Country: string | null;
          /**
           * Customer Id
           * @description Unique identifier for the customer
           */
          CustomerID: number;
          /**
           * Email
           * Format: email
           * @description Email address of the customer
           */
          Email: unknown;
          /**
           * First Name
           * @description First name of the customer
           */
          FirstName: string;
          /**
           * Last Name
           * @description Last name of the customer
           */
          LastName: string;
          /**
           * Phone
           * @description Phone number of the customer
           * @default null
           */
          Phone: string | null;
          /**
           * Postcode
           * @description Postal code
           * @default null
           */
          Postcode: string | null;
          /**
           * State
           * @description State or territory
           * @default null
           */
          State: string | null;
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
 * Type of ASCORA's ASCORA_GET_JOBS tool input.
 */
type ASCORA_GET_JOBS_INPUT = {
  /**
   * End Date
   * @description Filter jobs created on or before this date (ISO 8601 date, YYYY-MM-DD).
   * @default null
   */
  endDate: string | null;
  /**
   * Job Status
   * @description Filter by main job status, e.g., 'Open', 'Closed'.
   * @default null
   */
  jobStatus: string | null;
  /**
   * Job Type
   * @description Filter by job type, e.g., 'Installation' or 'Service'.
   * @default null
   */
  jobType: string | null;
  /**
   * Page
   * @description Page number for pagination (1-based).
   * @default 1
   */
  page: number;
  /**
   * Page Size
   * @description Number of jobs per page, between 1 and 1000.
   * @default 50
   */
  pageSize: number;
  /**
   * Secondary Status
   * @description Filter by secondary status of the job.
   * @default null
   */
  secondaryStatus: string | null;
  /**
   * Start Date
   * @description Filter jobs created on or after this date (ISO 8601 date, YYYY-MM-DD).
   * @default null
   */
  startDate: string | null;
};

/**
 * Type of ASCORA's ASCORA_GET_JOBS tool output.
 */
type ASCORA_GET_JOBS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Jobs
       * @description List of job records for this page.
       */
      jobs: {
          /**
           * Assigned To
           * @description Username or ID of the user assigned to the job.
           * @default null
           */
          assignedTo: string | null;
          /**
           * Customer Name
           * @description Name of the customer associated with the job.
           * @default null
           */
          customerName: string | null;
          /**
           * Date Created
           * @description ISO 8601 datetime when the job was created.
           */
          dateCreated: string;
          /**
           * Due Date
           * @description ISO 8601 datetime when the job is due.
           * @default null
           */
          dueDate: string | null;
          /**
           * Job Number
           * @description Unique identifier for the job.
           */
          jobNumber: string;
          /**
           * Name
           * @description Name or title of the job.
           */
          name: string;
          /**
           * Secondary Status
           * @description Secondary status of the job, if any.
           * @default null
           */
          secondaryStatus: string | null;
          /**
           * Status
           * @description Current status of the job.
           */
          status: string;
          /**
           * Type
           * @description Type/category of the job.
           * @default null
           */
          type: string | null;
      }[];
      /**
       * Page
       * @description Current page number of the result set.
       */
      page: number;
      /**
       * Page Size
       * @description Number of jobs returned per page.
       */
      pageSize: number;
      /**
       * Total Records
       * @description Total number of matching jobs.
       */
      totalRecords: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "ASCORA".
 */
export type ASCORA_TOOL_INPUTS = {
  ASCORA_DELETE_CUSTOMER: ASCORA_ASCORA_DELETE_CUSTOMER_INPUT
  CREATE_QUOTATION: ASCORA_CREATE_QUOTATION_INPUT
  DELETE_CUSTOMER: ASCORA_DELETE_CUSTOMER_INPUT
  GET_CUSTOMERS: ASCORA_GET_CUSTOMERS_INPUT
  GET_JOBS: ASCORA_GET_JOBS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ASCORA".
 */
export type ASCORA_TOOL_OUTPUTS = {
  ASCORA_DELETE_CUSTOMER: ASCORA_ASCORA_DELETE_CUSTOMER_OUTPUT
  CREATE_QUOTATION: ASCORA_CREATE_QUOTATION_OUTPUT
  DELETE_CUSTOMER: ASCORA_DELETE_CUSTOMER_OUTPUT
  GET_CUSTOMERS: ASCORA_GET_CUSTOMERS_OUTPUT
  GET_JOBS: ASCORA_GET_JOBS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ASCORA toolkit.
 */
export const ASCORA = {
  slug: "ascora",
  tools: {
    /**
     * Tool to delete a specific customer by id. use when you need to remove a customer after confirming its existence.
     */
    ASCORA_DELETE_CUSTOMER: "ASCORA_ASCORA_DELETE_CUSTOMER",
    /**
     * Tool to create a new quotation. use when submitting a customer quote request via the ascora api.
     */
    CREATE_QUOTATION: "ASCORA_CREATE_QUOTATION",
    /**
     * Tool to delete a specific customer by id. use after confirming the customer exists.
     */
    DELETE_CUSTOMER: "ASCORA_DELETE_CUSTOMER",
    /**
     * Tool to retrieve a list of customers. use after authenticating with your api key.
     */
    GET_CUSTOMERS: "ASCORA_GET_CUSTOMERS",
    /**
     * Tool to retrieve jobs. use when you need to filter and paginate job listings from ascora.
     */
    GET_JOBS: "ASCORA_GET_JOBS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ASCORA".
 */
export type ASCORA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ASCORA".
 */
export type ASCORA_TRIGGER_EVENTS = {}
