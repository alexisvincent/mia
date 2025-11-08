// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of STANNP's STANNP_ADD_RECIPIENT_TO_GROUP tool input.
 */
type STANNP_ADD_RECIPIENT_TO_GROUP_INPUT = {
  /**
   * Address1
   * @description First line of recipient address.
   */
  address1?: string;
  /**
   * Address2
   * @description Second line of recipient address.
   * @default null
   */
  address2: string | null;
  /**
   * Address3
   * @description Third line of recipient address.
   * @default null
   */
  address3: string | null;
  /**
   * City
   * @description Recipient city.
   */
  city?: string;
  /**
   * Company
   * @description Recipient company name.
   * @default null
   */
  company: string | null;
  /**
   * Country
   * @description Recipient country code; defaults to 'GB'.
   * @default GB
   */
  country: string | null;
  /**
   * Custom1
   * @description Custom field 1.
   * @default null
   */
  custom1: string | null;
  /**
   * Custom2
   * @description Custom field 2.
   * @default null
   */
  custom2: string | null;
  /**
   * Custom3
   * @description Custom field 3.
   * @default null
   */
  custom3: string | null;
  /**
   * Email
   * @description Recipient email address.
   * @default null
   */
  email: string | null;
  /**
   * First Name
   * @description Recipient first name.
   */
  first_name?: string;
  /**
   * Group Id
   * @description The ID of the recipient group to add the recipient to.
   */
  group_id?: string;
  /**
   * Last Name
   * @description Recipient last name.
   */
  last_name?: string;
  /**
   * Postcode
   * @description Recipient postcode.
   */
  postcode?: string;
};

/**
 * Type of STANNP's STANNP_ADD_RECIPIENT_TO_GROUP tool output.
 */
type STANNP_ADD_RECIPIENT_TO_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of error messages if any occurred.
       * @default null
       */
      errors: string[] | null;
      /**
       * Id
       * @description The unique ID of the newly added recipient.
       */
      id: string;
      /**
       * Message
       * @description Confirmation message from the API.
       */
      message: string;
      /**
       * Result
       * @description True if the recipient was added successfully.
       */
      result: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of STANNP's STANNP_CREATE_GROUP tool input.
 */
type STANNP_CREATE_GROUP_INPUT = {
  /**
   * Description
   * @description Optional description for the group.
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Name of the group (must be unique within your account).
   */
  name?: string;
};

/**
 * Type of STANNP's STANNP_CREATE_GROUP tool output.
 */
type STANNP_CREATE_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description ISO8601 timestamp when the group was created.
       */
      created: string;
      /**
       * Description
       * @description Description of the created group.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique ID of the newly created group.
       */
      id: number;
      /**
       * Name
       * @description Name of the created group.
       */
      name: string;
      /**
       * Status
       * @description API status message, e.g. 'success'.
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
 * Type of STANNP's STANNP_GET_CONTACT tool input.
 */
type STANNP_GET_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description The ID of the contact to retrieve
   */
  contact_id?: string;
};

/**
 * Type of STANNP's STANNP_GET_CONTACT tool output.
 */
type STANNP_GET_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address1
       * @description Primary address line
       * @default null
       */
      address1: string | null;
      /**
       * Address2
       * @description Secondary address line
       * @default null
       */
      address2: string | null;
      /**
       * Address3
       * @description Tertiary address line
       * @default null
       */
      address3: string | null;
      /**
       * Address4
       * @description Quaternary address line
       * @default null
       */
      address4: string | null;
      /**
       * Company
       * @description Company name
       * @default null
       */
      company: string | null;
      /**
       * Country
       * @description Country code (ISO format)
       * @default null
       */
      country: string | null;
      /**
       * Created At
       * @description ISO datetime when contact was created
       */
      created_at: string;
      /**
       * Email
       * @description Email address
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description Contact's first name
       * @default null
       */
      first_name: string | null;
      /**
       * Id
       * @description Unique contact identifier
       */
      id: string;
      /**
       * Last Name
       * @description Contact's last name
       * @default null
       */
      last_name: string | null;
      /**
       * Metadata
       * @description Additional user-provided metadata
       * @default null
       */
      metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Postcode
       * @description Postcode or ZIP code
       * @default null
       */
      postcode: string | null;
      /**
       * Telephone
       * @description Telephone number
       * @default null
       */
      telephone: string | null;
      /**
       * Town
       * @description Town or city
       * @default null
       */
      town: string | null;
      /**
       * Updated At
       * @description ISO datetime when contact was last updated
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
 * Type of STANNP's STANNP_IMPORT_RECIPIENTS tool input.
 */
type STANNP_IMPORT_RECIPIENTS_INPUT = {
  /**
   * File
   * @description Base64-encoded CSV or XLS file content to upload
   */
  file?: string;
  /**
   * Group Id
   * @description ID of the recipient group to import into
   */
  group_id?: string;
  /**
   * Update Existing
   * @description Whether to update existing recipients if duplicates are found
   * @default false
   */
  update_existing: boolean | null;
};

/**
 * Type of STANNP's STANNP_IMPORT_RECIPIENTS tool output.
 */
type STANNP_IMPORT_RECIPIENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors encountered during import, with details per failed row
       * @default null
       */
      errors: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Import Id
       * @description Unique identifier for the import operation
       */
      import_id: string;
      /**
       * Imported
       * @description Number of recipients successfully imported
       */
      imported: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of STANNP's STANNP_LIST_CONTACTS tool input.
 */
type STANNP_LIST_CONTACTS_INPUT = {
  /**
   * Limit
   * @description Number of results per page
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for paginated results
   * @default null
   */
  page: number | null;
};

/**
 * Type of STANNP's STANNP_LIST_CONTACTS tool output.
 */
type STANNP_LIST_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description List of contact objects
   */
  data?: {
      /**
       * Address1
       * @description First address line
       * @default null
       */
      address1: string | null;
      /**
       * Address2
       * @description Second address line
       * @default null
       */
      address2: string | null;
      /**
       * Address3
       * @description Third address line
       * @default null
       */
      address3: string | null;
      /**
       * City
       * @description City
       * @default null
       */
      city: string | null;
      /**
       * Company
       * @description Company name if provided
       * @default null
       */
      company: string | null;
      /**
       * Country
       * @description Country
       * @default null
       */
      country: string | null;
      /**
       * Email
       * @description Email address
       * @default null
       */
      email: string | null;
      /**
       * Firstname
       * @description Contact's first name
       * @default null
       */
      firstname: string | null;
      /**
       * Id
       * @description Unique contact identifier
       */
      id: string;
      /**
       * Lastname
       * @description Contact's last name
       * @default null
       */
      lastname: string | null;
      /**
       * Phone
       * @description Phone number
       * @default null
       */
      phone: string | null;
      /**
       * Postcode
       * @description Postal code
       * @default null
       */
      postcode: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Success
   * @description Whether the request was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of STANNP's STANNP_LIST_TEMPLATES tool input.
 */
type STANNP_LIST_TEMPLATES_INPUT = {
  /**
   * Page
   * @description Page number for paginated results
   * @default null
   */
  page: number | null;
  /**
   * Size
   * @description Number of records per page
   * @default null
   */
  size: number | null;
};

/**
 * Type of STANNP's STANNP_LIST_TEMPLATES tool output.
 */
type STANNP_LIST_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description List of template objects
   */
  data?: {
      /**
       * Id
       * @description Template ID
       */
      id: string;
      /**
       * Name
       * @description Template name
       */
      name: string;
      /**
       * Preview
       * @description URL for template preview image
       * @default null
       */
      preview: string | null;
      /**
       * Type
       * @description Type of the template, e.g., 'postcard', 'sms', 'letter'
       */
      type: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Informational message from the API
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Indicates if the request was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "STANNP".
 */
export type STANNP_TOOL_INPUTS = {
  ADD_RECIPIENT_TO_GROUP: STANNP_ADD_RECIPIENT_TO_GROUP_INPUT
  CREATE_GROUP: STANNP_CREATE_GROUP_INPUT
  GET_CONTACT: STANNP_GET_CONTACT_INPUT
  IMPORT_RECIPIENTS: STANNP_IMPORT_RECIPIENTS_INPUT
  LIST_CONTACTS: STANNP_LIST_CONTACTS_INPUT
  LIST_TEMPLATES: STANNP_LIST_TEMPLATES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "STANNP".
 */
export type STANNP_TOOL_OUTPUTS = {
  ADD_RECIPIENT_TO_GROUP: STANNP_ADD_RECIPIENT_TO_GROUP_OUTPUT
  CREATE_GROUP: STANNP_CREATE_GROUP_OUTPUT
  GET_CONTACT: STANNP_GET_CONTACT_OUTPUT
  IMPORT_RECIPIENTS: STANNP_IMPORT_RECIPIENTS_OUTPUT
  LIST_CONTACTS: STANNP_LIST_CONTACTS_OUTPUT
  LIST_TEMPLATES: STANNP_LIST_TEMPLATES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's STANNP toolkit.
 */
export const STANNP = {
  slug: "stannp",
  tools: {
    /**
     * Tool to add a recipient to a recipient group. use when you need to add new mailing list subscribers.
     */
    ADD_RECIPIENT_TO_GROUP: "STANNP_ADD_RECIPIENT_TO_GROUP",
    /**
     * Tool to create a new recipient group in stannp. use when you need to organize contacts into a distinct group before sending campaigns.
     */
    CREATE_GROUP: "STANNP_CREATE_GROUP",
    /**
     * Tool to retrieve details of a specific contact. use when you need all stored fields of a contact by its id.
     */
    GET_CONTACT: "STANNP_GET_CONTACT",
    /**
     * Tool to import recipients from a csv or xls file into a stannp recipient group. use when you have a mailing list file ready to upload.
     */
    IMPORT_RECIPIENTS: "STANNP_IMPORT_RECIPIENTS",
    /**
     * Tool to list all contacts. use when you need to retrieve contacts with optional pagination filters.
     */
    LIST_CONTACTS: "STANNP_LIST_CONTACTS",
    /**
     * Tool to list all templates associated with the account. use when you need to retrieve available templates after authentication.
     */
    LIST_TEMPLATES: "STANNP_LIST_TEMPLATES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "STANNP".
 */
export type STANNP_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "STANNP".
 */
export type STANNP_TRIGGER_EVENTS = {}
