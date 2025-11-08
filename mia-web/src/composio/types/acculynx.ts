// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ACCULYNX's ACCULYNX_ADD_JOB_APPOINTMENT tool input.
 */
type ACCULYNX_ADD_JOB_APPOINTMENT_INPUT = {
  /**
   * End Date
   * @description Enddate
   */
  endDate?: string;
  /**
   * Job Id
   * @description Job id
   */
  jobId?: string;
  /**
   * Start Date
   * @description Startdate
   */
  startDate?: string;
};

/**
 * Type of ACCULYNX's ACCULYNX_ADD_JOB_APPOINTMENT tool output.
 */
type ACCULYNX_ADD_JOB_APPOINTMENT_OUTPUT = {
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
 * Type of ACCULYNX's ACCULYNX_CREATE_A_CONTACT tool input.
 */
type ACCULYNX_CREATE_A_CONTACT_INPUT = {
  /**
   * Billing Address Same As Mailing Address
   * @description Billingaddresssameasmailingaddress
   */
  billingAddressSameAsMailingAddress?: boolean;
  /**
   * Billing Address  City
   * @description City
   */
  billingAddress__city?: string;
  /**
   * Billing Address  Country  Id
   * @description Id
   */
  billingAddress__country__id?: number;
  /**
   * Billing Address  State  Id
   * @description Id
   */
  billingAddress__state__id?: number;
  /**
   * Billing Address  Street1
   * @description Street1
   */
  billingAddress__street1?: string;
  /**
   * Billing Address  Street2
   * @description Street2
   */
  billingAddress__street2?: string;
  /**
   * Billing Address  Zip Code
   * @description Zipcode
   */
  billingAddress__zipCode?: string;
  /**
   * Company Job Title
   * @description Companyjobtitle
   */
  companyJobTitle?: string;
  /**
   * Company Name
   * @description Companyname
   */
  companyName?: string;
  /**
   * Contact Type Ids
   * @description Contacttypeids
   */
  contactTypeIds?: string[];
  /**
   * Cross Reference
   * @description Crossreference
   */
  crossReference?: string;
  /**
   * Email Addresses
   * @description Emailaddresses
   */
  emailAddresses?: {
      /**
       * Address
       * @description Address
       */
      address?: string;
      /**
       * Primary
       * @description Primary
       */
      primary?: boolean;
  }[];
  /**
   * First Name
   * @description Firstname
   */
  firstName?: string;
  /**
   * Last Name
   * @description Lastname
   */
  lastName?: string;
  /**
   * Mailing Address  City
   * @description City
   */
  mailingAddress__city?: string;
  /**
   * Mailing Address  Country  Id
   * @description Id
   */
  mailingAddress__country__id?: number;
  /**
   * Mailing Address  State  Id
   * @description Id
   */
  mailingAddress__state__id?: number;
  /**
   * Mailing Address  Street1
   * @description Street1
   */
  mailingAddress__street1?: string;
  /**
   * Mailing Address  Street2
   * @description Street2
   */
  mailingAddress__street2?: string;
  /**
   * Mailing Address  Zip Code
   * @description Zipcode
   */
  mailingAddress__zipCode?: string;
  /**
   * Note
   * @description Note
   */
  note?: string;
  /**
   * Phone Numbers
   * @description Phonenumbers
   */
  phoneNumbers?: {
      /**
       * Ext
       * @description Ext
       */
      ext?: string;
      /**
       * Has Texting Available
       * @description Hastextingavailable
       */
      hasTextingAvailable?: boolean;
      /**
       * Number
       * @description Number
       */
      number?: number;
      /**
       * Primary
       * @description Primary
       */
      primary?: boolean;
  }[];
};

/**
 * Type of ACCULYNX's ACCULYNX_CREATE_A_CONTACT tool output.
 */
type ACCULYNX_CREATE_A_CONTACT_OUTPUT = {
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
 * Type of ACCULYNX's ACCULYNX_CREATE_A_JOB tool input.
 */
type ACCULYNX_CREATE_A_JOB_INPUT = {
  /**
   * Contact  Id
   * @description Id
   */
  contact__id?: string;
  /**
   * Job Category  Id
   * @description Id
   */
  jobCategory__id?: number;
  /**
   * Lead Source  Id
   * @description Id
   */
  leadSource__id?: string;
  /**
   * Location Address  City
   * @description City
   */
  locationAddress__city?: string;
  /**
   * Location Address  Country
   * @description Country
   */
  locationAddress__country?: string;
  /**
   * Location Address  State
   * @description State
   */
  locationAddress__state?: string;
  /**
   * Location Address  Street1
   * @description Street1
   */
  locationAddress__street1?: string;
  /**
   * Location Address  Street2
   * @description Street2
   */
  locationAddress__street2?: string;
  /**
   * Location Address  Zip Code
   * @description Zipcode
   */
  locationAddress__zipCode?: string;
  /**
   * Notes
   * @description Notes
   */
  notes?: string;
  /**
   * Priority
   * @description Priority
   */
  priority?: string;
  /**
   * Trade Types
   * @description Tradetypes
   */
  tradeTypes?: {
      /**
       * Id
       * @description Id
       */
      id: string;
  }[];
  /**
   * Work Type  Id
   * @description Id
   */
  workType__id?: number;
};

/**
 * Type of ACCULYNX's ACCULYNX_CREATE_A_JOB tool output.
 */
type ACCULYNX_CREATE_A_JOB_OUTPUT = {
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
 * Type of ACCULYNX's ACCULYNX_CREATE_A_LEAD tool input.
 */
type ACCULYNX_CREATE_A_LEAD_INPUT = {
  /**
   * Email Address
   * @description Emailaddress
   */
  emailAddress?: string;
  /**
   * First Name
   * @description Firstname
   */
  firstName?: string;
  /**
   * Last Name
   * @description Lastname
   */
  lastName?: string;
};

/**
 * Type of ACCULYNX's ACCULYNX_CREATE_A_LEAD tool output.
 */
type ACCULYNX_CREATE_A_LEAD_OUTPUT = {
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
 * Type of ACCULYNX's ACCULYNX_JOB_APPOINTMENT_SUMMARY tool input.
 */
type ACCULYNX_JOB_APPOINTMENT_SUMMARY_INPUT = {
  /**
   * End Date
   * @description The end date in yyyy-mm-dd format
   */
  endDate?: string;
  /**
   * Job Id
   * @description Job id
   */
  jobId?: string;
  /**
   * Page Start Index
   * @description The index of the first element to return
   * @default 0
   */
  pageStartIndex: number;
  /**
   * Start Date
   * @description The start date in yyyy-mm-dd format
   */
  startDate?: string;
};

/**
 * Type of ACCULYNX's ACCULYNX_JOB_APPOINTMENT_SUMMARY tool output.
 */
type ACCULYNX_JOB_APPOINTMENT_SUMMARY_OUTPUT = {
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
 * Type of ACCULYNX's ACCULYNX_LIST_OF_CALENDARS_FOR_THE_LOCATION tool input.
 */
type ACCULYNX_LIST_OF_CALENDARS_FOR_THE_LOCATION_INPUT = {
  /**
   * Page Size
   * @description How many items to return at one time (max 50)
   */
  pageSize?: number;
  /**
   * Page Start Index
   * @description The index of the first element to return
   * @default 0
   */
  pageStartIndex: number;
};

/**
 * Type of ACCULYNX's ACCULYNX_LIST_OF_CALENDARS_FOR_THE_LOCATION tool output.
 */
type ACCULYNX_LIST_OF_CALENDARS_FOR_THE_LOCATION_OUTPUT = {
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
 * Type of ACCULYNX's ACCULYNX_LIST_OF_CONTACT_TYPES_RELATED_TO_THE_COMPANY tool input.
 */
type ACCULYNX_LIST_OF_CONTACT_TYPES_RELATED_TO_THE_COMPANY_INPUT = {
  /**
   * Page Size
   * @description How many items to return at one time (max 50)
   */
  pageSize?: number;
  /**
   * Page Start Index
   * @description The index of the first element to return
   * @default 0
   */
  pageStartIndex: number;
};

/**
 * Type of ACCULYNX's ACCULYNX_LIST_OF_CONTACT_TYPES_RELATED_TO_THE_COMPANY tool output.
 */
type ACCULYNX_LIST_OF_CONTACT_TYPES_RELATED_TO_THE_COMPANY_OUTPUT = {
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
 * Type of ACCULYNX's ACCULYNX_UPDATE_COMPANY_REPRESENTATIVE tool input.
 */
type ACCULYNX_UPDATE_COMPANY_REPRESENTATIVE_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Job Id
   * @description Job id
   */
  jobId?: string;
};

/**
 * Type of ACCULYNX's ACCULYNX_UPDATE_COMPANY_REPRESENTATIVE tool output.
 */
type ACCULYNX_UPDATE_COMPANY_REPRESENTATIVE_OUTPUT = {
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
 * Type map of all available tool input types for toolkit "ACCULYNX".
 */
export type ACCULYNX_TOOL_INPUTS = {
  ADD_JOB_APPOINTMENT: ACCULYNX_ADD_JOB_APPOINTMENT_INPUT
  CREATE_A_CONTACT: ACCULYNX_CREATE_A_CONTACT_INPUT
  CREATE_A_JOB: ACCULYNX_CREATE_A_JOB_INPUT
  CREATE_A_LEAD: ACCULYNX_CREATE_A_LEAD_INPUT
  JOB_APPOINTMENT_SUMMARY: ACCULYNX_JOB_APPOINTMENT_SUMMARY_INPUT
  LIST_OF_CALENDARS_FOR_THE_LOCATION: ACCULYNX_LIST_OF_CALENDARS_FOR_THE_LOCATION_INPUT
  LIST_OF_CONTACT_TYPES_RELATED_TO_THE_COMPANY: ACCULYNX_LIST_OF_CONTACT_TYPES_RELATED_TO_THE_COMPANY_INPUT
  UPDATE_COMPANY_REPRESENTATIVE: ACCULYNX_UPDATE_COMPANY_REPRESENTATIVE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ACCULYNX".
 */
export type ACCULYNX_TOOL_OUTPUTS = {
  ADD_JOB_APPOINTMENT: ACCULYNX_ADD_JOB_APPOINTMENT_OUTPUT
  CREATE_A_CONTACT: ACCULYNX_CREATE_A_CONTACT_OUTPUT
  CREATE_A_JOB: ACCULYNX_CREATE_A_JOB_OUTPUT
  CREATE_A_LEAD: ACCULYNX_CREATE_A_LEAD_OUTPUT
  JOB_APPOINTMENT_SUMMARY: ACCULYNX_JOB_APPOINTMENT_SUMMARY_OUTPUT
  LIST_OF_CALENDARS_FOR_THE_LOCATION: ACCULYNX_LIST_OF_CALENDARS_FOR_THE_LOCATION_OUTPUT
  LIST_OF_CONTACT_TYPES_RELATED_TO_THE_COMPANY: ACCULYNX_LIST_OF_CONTACT_TYPES_RELATED_TO_THE_COMPANY_OUTPUT
  UPDATE_COMPANY_REPRESENTATIVE: ACCULYNX_UPDATE_COMPANY_REPRESENTATIVE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ACCULYNX toolkit.
 */
export const ACCULYNX = {
  slug: "acculynx",
  tools: {
    /**
     * This endpoint allows users to schedule the initial appointment for a specific job in the acculynx system. it is used to set up the first meeting or site visit for a construction or roofing project. the endpoint requires the job id, start date and time, and end date and time for the appointment. this is crucial for initiating the project workflow and ensuring that all parties involved are aware of the scheduled time for the first interaction. the appointment details are set in the context of the company's timezone unless otherwise specified. use this endpoint when a new job has been created and the first appointment needs to be scheduled with the client or at the job site.
     */
    ADD_JOB_APPOINTMENT: "ACCULYNX_ADD_JOB_APPOINTMENT",
    /**
     * Creates a new contact in the acculynx system with detailed information for use in roofing and construction project management. this endpoint allows for the addition of comprehensive contact details including personal information, company affiliation, communication preferences, and address information. it's particularly useful for adding new customers, leads, vendors, or any other type of contact relevant to construction projects. the endpoint provides flexibility in the amount of information that can be added, with only the contact type being required. use this when you need to add a new contact to your acculynx database or update your system with new lead information. note that while many fields are optional, providing as much information as possible will enhance the usefulness of the contact record for future project management and communication purposes.
     */
    CREATE_A_CONTACT: "ACCULYNX_CREATE_A_CONTACT",
    /**
     * Creates a new job in the acculynx system with the provided details. this endpoint allows you to initialize a job with essential information such as the associated contact, location, job category, work type, priority, and trade types. it's particularly useful for setting up new projects or tasks within the acculynx platform for the roofing and construction industries. the endpoint requires at minimum a contact id and location address, with several optional fields to further customize the job entry. use this when you need to programmatically create new jobs in acculynx, such as when integrating with other systems or automating job creation processes.
     */
    CREATE_A_JOB: "ACCULYNX_CREATE_A_JOB",
    /**
     * This endpoint creates a new lead in the acculynx system, specifically for residential roofing projects. it should be used when a new potential customer expresses interest in roofing services or when importing lead data from external sources. the endpoint captures essential contact information to initiate the lead management process. while it creates the lead, it does not assign priorities or sales representatives; these actions would need to be performed separately. the endpoint is designed for simplicity and quick lead entry, focusing on the most crucial identifying information.
     */
    CREATE_A_LEAD: "ACCULYNX_CREATE_A_LEAD",
    /**
     * Retrieves a list of appointments from the calendar associated with a specific job in acculynx. this endpoint is used to fetch scheduled events, such as site visits, inspections, or project milestones, for a particular roofing or construction job. it provides valuable information for project management and scheduling purposes. the endpoint should be used when you need to view or manage the timeline of events for a specific job. it will not provide general calendar information or appointments unrelated to the specified job id. the response likely includes details such as appointment dates, times, descriptions, and associated team members, though the exact structure is not specified in the given schema.
     */
    JOB_APPOINTMENT_SUMMARY: "ACCULYNX_JOB_APPOINTMENT_SUMMARY",
    /**
     * Retrieves a list of calendars associated with the authenticated user or organization in acculynx. this endpoint provides access to the calendar data, which is crucial for scheduling and organizing tasks in the roofing and construction project management context. it should be used when you need to obtain an overview of all available calendars or to gather calendar ids for use in other api operations. the endpoint returns basic information about each calendar, likely including identifiers, names, and possibly associated metadata. it does not modify any calendar data and is intended for read-only operations. keep in mind that the response may be paginated for large datasets, and additional parameters might be available for filtering or sorting the results, although they are not specified in the current schema.
     */
    LIST_OF_CALENDARS_FOR_THE_LOCATION: "ACCULYNX_LIST_OF_CALENDARS_FOR_THE_LOCATION",
    /**
     * Retrieves a list of all available contact types in the acculynx system. this endpoint is used to fetch the predefined categories or classifications for contacts, such as residential, repair, property management, and other job categories. it's essential for organizing and filtering contact information within the acculynx platform. the endpoint should be used when setting up new contacts, updating existing ones, or when needing to populate dropdown menus or filter options in the user interface. it does not create, modify, or delete contact types; it only provides the current list of available options. the response will likely include unique identifiers and names for each contact type, allowing for easy integration with other parts of the acculynx api or external systems.
     */
    LIST_OF_CONTACT_TYPES_RELATED_TO_THE_COMPANY: "ACCULYNX_LIST_OF_CONTACT_TYPES_RELATED_TO_THE_COMPANY",
    /**
     * This endpoint allows you to add a company representative to a specific job within the acculynx system. it is used when you need to associate a representative with a particular project or task. the endpoint requires the job's unique identifier and the representative's id to establish the connection. this operation is useful for assigning personnel to projects, tracking responsibilities, and maintaining accurate job records. it's important to note that this endpoint only adds the association and doesn't create new representative or job entries.
     */
    UPDATE_COMPANY_REPRESENTATIVE: "ACCULYNX_UPDATE_COMPANY_REPRESENTATIVE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ACCULYNX".
 */
export type ACCULYNX_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ACCULYNX".
 */
export type ACCULYNX_TRIGGER_EVENTS = {}
