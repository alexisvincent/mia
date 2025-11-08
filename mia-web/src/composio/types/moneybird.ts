// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MONEYBIRD's MONEYBIRD_ADD_NOTE_TO_CONTACT tool input.
 */
type MONEYBIRD_ADD_NOTE_TO_CONTACT_INPUT = {
  /**
   * Administration Id
   * @description Numeric administration ID, part of the Moneybird URL path.
   */
  administration_id?: number;
  /**
   * Contact Id
   * @description ID of the contact to which the note will be added
   */
  contact_id?: string;
  /**
   * Note
   * @description Payload containing the note details
   */
  note?: {
      /**
       * Assignee Id
       * @description Assigns the to-do to a specific user ID.
       * @default null
       */
      assignee_id: number | null;
      /**
       * Note
       * @description Text for the note or to-do.
       */
      note: string;
      /**
       * Todo
       * @description If true, the note is marked as a to-do.
       * @default false
       */
      todo: boolean;
  };
};

/**
 * Type of MONEYBIRD's MONEYBIRD_ADD_NOTE_TO_CONTACT tool output.
 */
type MONEYBIRD_ADD_NOTE_TO_CONTACT_OUTPUT = {
  /**
   * Administration Id
   * @description Administration ID the note belongs to
   */
  administration_id?: number;
  /**
   * Assignee Id
   * @description ID of the user assigned to the to-do, if applicable
   * @default null
   */
  assignee_id: string | null;
  /**
   * Completed At
   * @description Timestamp when the to-do was completed, if applicable
   * @default null
   */
  completed_at: string | null;
  /**
   * Completed By Id
   * @description ID of the user who completed the to-do, if applicable
   * @default null
   */
  completed_by_id: string | null;
  /**
   * Created At
   * @description Timestamp when the note was created
   */
  created_at?: string;
  /**
   * Data
   * @description Additional data associated with the note
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Entity Id
   * @description ID of the associated contact entity
   */
  entity_id?: string;
  /**
   * Entity Type
   * @description Type of the associated entity, e.g., 'Contact'
   */
  entity_type?: string;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Id
   * @description Unique identifier of the note
   */
  id?: string;
  /**
   * Note
   * @description Text content of the note
   */
  note?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Todo
   * @description Indicates if this note is a to-do
   */
  todo?: boolean;
  /**
   * Todo Type
   * @description Type of the to-do, if applicable
   * @default null
   */
  todo_type: string | null;
  /**
   * Updated At
   * @description Timestamp when the note was last updated
   */
  updated_at?: string;
  /**
   * User Id
   * @description ID of the user who created the note
   */
  user_id?: number;
};

/**
 * Type of MONEYBIRD's MONEYBIRD_ARCHIVE_CONTACT tool input.
 */
type MONEYBIRD_ARCHIVE_CONTACT_INPUT = {
  /**
   * Administration Id
   * @description The unique identifier of the administration
   */
  administration_id?: number;
  /**
   * Contact Id
   * @description The unique identifier of the contact to archive
   */
  contact_id?: number;
};

/**
 * Type of MONEYBIRD's MONEYBIRD_ARCHIVE_CONTACT tool output.
 */
type MONEYBIRD_ARCHIVE_CONTACT_OUTPUT = {
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
 * Type of MONEYBIRD's MONEYBIRD_CREATE_CONTACT tool input.
 */
type MONEYBIRD_CREATE_CONTACT_INPUT = {
  /**
   * Address1
   * @description Street and number
   * @default null
   */
  address1: string | null;
  /**
   * Address2
   * @description Additional address line
   * @default null
   */
  address2: string | null;
  /**
   * Administration Id
   * @description ID of the administration
   */
  administration_id?: number;
  /**
   * Bank Account
   * @description Bank account number
   * @default null
   */
  bank_account: string | null;
  /**
   * Chamber Of Commerce
   * @description Chamber of Commerce number
   * @default null
   */
  chamber_of_commerce: string | null;
  /**
   * City
   * @description City name
   * @default null
   */
  city: string | null;
  /**
   * Company Name
   * @description Company name; required if firstname and lastname are blank
   * @default null
   */
  company_name: string | null;
  /**
   * Country
   * @description ISO 3166-1 alpha-2 country code, e.g., NL
   * @default null
   */
  country: unknown;
  /**
   * Custom Fields Attributes
   * @description Custom fields as dict of {index:{id, value}}
   * @default null
   */
  custom_fields_attributes: {
      [key: string]: {
          [key: string]: string;
      };
  } | null;
  /**
   * Customer Id
   * @description Unique customer identifier; autogenerated if empty
   * @default null
   */
  customer_id: string | null;
  /**
   * Delivery Method
   * @description Delivery method
   * @default null
   * @enum {string|null}
   */
  delivery_method: "Email" | "Simplerinvoicing" | "Peppol" | "Manual" | "Post" | null;
  /**
   * Estimate Workflow Id
   * @description Estimate workflow ID
   * @default null
   */
  estimate_workflow_id: number | null;
  /**
   * Firstname
   * @description First name; required if company_name is blank
   * @default null
   */
  firstname: string | null;
  /**
   * Invoice Workflow Id
   * @description Invoice workflow ID
   * @default null
   */
  invoice_workflow_id: number | null;
  /**
   * Lastname
   * @description Last name; required if company_name is blank
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
   * Send Estimates To Email
   * Format: email
   * @description Comma-separated emails to send estimates to
   * @default null
   */
  send_estimates_to_email: unknown;
  /**
   * Send Invoices To Email
   * Format: email
   * @description Comma-separated emails to send invoices to
   * @default null
   */
  send_invoices_to_email: unknown;
  /**
   * Sepa Active
   * @description Enable SEPA direct debit; when true, other SEPA fields are required
   * @default null
   */
  sepa_active: boolean | null;
  /**
   * Sepa Bic
   * @description Valid BIC; required if sepa_active
   * @default null
   */
  sepa_bic: string | null;
  /**
   * Sepa Iban
   * @description Valid IBAN; required if sepa_active
   * @default null
   */
  sepa_iban: string | null;
  /**
   * Sepa Iban Account Name
   * @description Account holder name for SEPA
   * @default null
   */
  sepa_iban_account_name: string | null;
  /**
   * Sepa Mandate Date
   * @description Mandate date (YYYY-MM-DD); required if sepa_active
   * @default null
   */
  sepa_mandate_date: string | null;
  /**
   * Sepa Mandate Id
   * @description Mandate ID; required if sepa_active
   * @default null
   */
  sepa_mandate_id: string | null;
  /**
   * Sepa Sequence Type
   * @description SEPA sequence type; required if sepa_active
   * @default null
   * @enum {string|null}
   */
  sepa_sequence_type: "RCUR" | "FRST" | "OOFF" | "FNAL" | null;
  /**
   * Si Identifier
   * @description SEPA identifier
   * @default null
   */
  si_identifier: string | null;
  /**
   * Si Identifier Type
   * @description SEPA identifier type
   * @default null
   */
  si_identifier_type: string | null;
  /**
   * Tax Number
   * @description Tax/VAT number
   * @default null
   */
  tax_number: string | null;
  /**
   * Zipcode
   * @description Postal code
   * @default null
   */
  zipcode: string | null;
};

/**
 * Type of MONEYBIRD's MONEYBIRD_CREATE_CONTACT tool output.
 */
type MONEYBIRD_CREATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Administration Id
       * @description ID of the administration
       */
      administration_id: number;
      /**
       * Company Name
       * @description Company name
       * @default null
       */
      company_name: string | null;
      /**
       * Created At
       * @description Creation timestamp
       */
      created_at: string;
      /**
       * Firstname
       * @description First name
       * @default null
       */
      firstname: string | null;
      /**
       * Id
       * @description ID of the created contact
       */
      id: string;
      /**
       * Lastname
       * @description Last name
       * @default null
       */
      lastname: string | null;
      /**
       * Updated At
       * @description Last update timestamp
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
 * Type of MONEYBIRD's MONEYBIRD_CREATE_CONTACT_PERSON tool input.
 */
type MONEYBIRD_CREATE_CONTACT_PERSON_INPUT = {
  /**
   * Administration Id
   * @description ID of the administration under which the contact person will be created
   */
  administration_id?: number;
  /**
   * Contact Id
   * @description ID of the contact under which the person will be created
   */
  contact_id?: number;
  /**
   * Contact Person
   * @description Container for all contact person fields
   */
  contact_person?: {
      /**
       * Department
       * @description Department of the contact person
       * @default null
       */
      department: string | null;
      /**
       * Email
       * Format: email
       * @description Email address of the contact person
       */
      email?: unknown;
      /**
       * Firstname
       * @description First name of the contact person
       */
      firstname: string;
      /**
       * Lastname
       * @description Last name of the contact person
       */
      lastname: string;
      /**
       * Phone
       * @description Phone number of the contact person
       * @default null
       */
      phone: string | null;
  };
};

/**
 * Type of MONEYBIRD's MONEYBIRD_CREATE_CONTACT_PERSON tool output.
 */
type MONEYBIRD_CREATE_CONTACT_PERSON_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Administration Id
       * @description ID of the administration under which this contact person was created
       */
      administration_id: number;
      /**
       * Created At
       * @description Timestamp when the contact person was created
       */
      created_at: string;
      /**
       * Department
       * @description Department of the contact person
       * @default null
       */
      department: string | null;
      /**
       * Email
       * @description Email address of the contact person
       * @default null
       */
      email: string | null;
      /**
       * Firstname
       * @description First name of the contact person
       */
      firstname: string;
      /**
       * Id
       * @description Unique identifier of the created contact person
       */
      id: string;
      /**
       * Lastname
       * @description Last name of the contact person
       */
      lastname: string;
      /**
       * Phone
       * @description Phone number of the contact person
       * @default null
       */
      phone: string | null;
      /**
       * Updated At
       * @description Timestamp when the contact person was last updated
       */
      updated_at: string;
      /**
       * Version
       * @description Version number of the contact person record
       */
      version: number;
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
 * Type of MONEYBIRD's MONEYBIRD_CREATE_SALES_INVOICE tool input.
 */
type MONEYBIRD_CREATE_SALES_INVOICE_INPUT = {
  /**
   * Administration Id
   * @description Numeric administration ID, part of the Moneybird URL path
   */
  administration_id?: number;
  /**
   * Sales Invoice
   * @description Sales invoice data to create
   */
  sales_invoice?: {
      /**
       * Contact Id
       * @description ID of the contact for this invoice
       */
      contact_id: number;
      /**
       * Contact Person Id
       * @description ID of the contact person
       * @default null
       */
      contact_person_id: number | null;
      /**
       * Currency
       * @description ISO currency code, e.g., 'EUR'
       * @default null
       */
      currency: string | null;
      /**
       * Custom Fields Attributes
       * @description List of custom field values
       * @default null
       */
      custom_fields_attributes: {
          /**
           * Id
           * @description ID of the custom field
           */
          id: number;
          /**
           * Value
           * @description Value for the custom field
           */
          value: string;
      }[] | null;
      /**
       * Details Attributes
       * @description List of line items, at least one item is required
       */
      details_attributes: {
          /**
           * Amount
           * @description Quantity, e.g., '1 x'
           * @default null
           */
          amount: string | null;
          /**
           * Description
           * @description Description of the item
           */
          description: string;
          /**
           * Ledger Account Id
           * @description ID of a valid ledger account
           * @default null
           */
          ledger_account_id: number | null;
          /**
           * Period
           * @description Date range, e.g., '20250101..20250131'
           * @default null
           */
          period: string | null;
          /**
           * Price
           * @description Price per item, must be positive
           */
          price: number | null;
          /**
           * Product Id
           * @description ID of a product
           * @default null
           */
          product_id: number | null;
          /**
           * Project Id
           * @description ID of a project
           * @default null
           */
          project_id: number | null;
          /**
           * Row Order
           * @description Order of this line in the invoice
           * @default null
           */
          row_order: number | null;
          /**
           * Tax Rate Id
           * @description ID of a valid tax rate
           * @default null
           */
          tax_rate_id: number | null;
      }[];
      /**
       * Discount
       * @description Discount percentage, must be non-negative
       * @default null
       */
      discount: number | null;
      /**
       * Document Style Id
       * @description ID of the document style
       * @default null
       */
      document_style_id: number | null;
      /**
       * First Due Interval
       * @description Days until due date if not specified
       * @default null
       */
      first_due_interval: number | null;
      /**
       * From Payment Request
       * @description Flag indicating invoice originates from payment request
       * @default null
       */
      from_payment_request: boolean | null;
      /**
       * Invoice Date
       * @description Invoice date in YYYY-MM-DD format
       * @default null
       */
      invoice_date: string | null;
      /**
       * Invoice Sequence Id
       * @description Sequence ID for the invoice
       * @default null
       */
      invoice_sequence_id: string | null;
      /**
       * Original Estimate Id
       * @description ID of the original estimate
       * @default null
       */
      original_estimate_id: number | null;
      /**
       * Payment Conditions
       * @description Payment conditions text
       * @default null
       */
      payment_conditions: string | null;
      /**
       * Prices Are Incl Tax
       * @description Whether line prices include tax
       * @default null
       */
      prices_are_incl_tax: boolean | null;
      /**
       * Reference
       * @description Invoice reference
       * @default null
       */
      reference: string | null;
      /**
       * Time Entry Ids
       * @description List of time entry IDs to include
       * @default null
       */
      time_entry_ids: number[] | null;
      /**
       * Workflow Id
       * @description ID of the workflow
       * @default null
       */
      workflow_id: number | null;
  };
};

/**
 * Type of MONEYBIRD's MONEYBIRD_CREATE_SALES_INVOICE tool output.
 */
type MONEYBIRD_CREATE_SALES_INVOICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Administration Id
       * @description Administration ID of the invoice
       */
      administration_id: number;
      /**
       * Contact Id
       * @description Contact ID associated with the invoice
       */
      contact_id: string;
      /**
       * Created At
       * @description Timestamp when the invoice was created
       */
      created_at: string;
      /**
       * Currency
       * @description Currency code used
       */
      currency: string;
      /**
       * Details
       * @description List of line items created
       */
      details: {
          /**
           * Amount
           * @description Quantity, e.g., '1 x'
           * @default null
           */
          amount: string | null;
          /**
           * Description
           * @description Description of the item
           */
          description: string;
          /**
           * Ledger Account Id
           * @description ID of a valid ledger account
           * @default null
           */
          ledger_account_id: number | null;
          /**
           * Period
           * @description Date range, e.g., '20250101..20250131'
           * @default null
           */
          period: string | null;
          /**
           * Price
           * @description Price per item, must be positive
           */
          price: number | null;
          /**
           * Product Id
           * @description ID of a product
           * @default null
           */
          product_id: number | null;
          /**
           * Project Id
           * @description ID of a project
           * @default null
           */
          project_id: number | null;
          /**
           * Row Order
           * @description Order of this line in the invoice
           * @default null
           */
          row_order: number | null;
          /**
           * Tax Rate Id
           * @description ID of a valid tax rate
           * @default null
           */
          tax_rate_id: number | null;
      }[];
      /**
       * Due Date
       * @description Due date of the invoice
       * @default null
       */
      due_date: string | null;
      /**
       * Id
       * @description Unique ID of the created sales invoice
       */
      id: string;
      /**
       * Invoice Date
       * @description Date of the invoice
       * @default null
       */
      invoice_date: string | null;
      /**
       * Invoice Id
       * @description Invoice number if assigned
       * @default null
       */
      invoice_id: string | null;
      /**
       * State
       * @description State of the invoice, e.g., 'draft' or 'open'
       */
      state: string;
      /**
       * Total Price Excl Tax
       * @description Total price excluding tax
       */
      total_price_excl_tax: string;
      /**
       * Total Price Incl Tax
       * @description Total price including tax
       */
      total_price_incl_tax: string;
      /**
       * Updated At
       * @description Timestamp when the invoice was last updated
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
 * Type of MONEYBIRD's MONEYBIRD_DELETE_CONTACT tool input.
 */
type MONEYBIRD_DELETE_CONTACT_INPUT = {
  /**
   * Administration Id
   * @description ID of the administration
   */
  administration_id?: number;
  /**
   * Contact Id
   * @description ID of the contact to delete
   */
  contact_id?: number;
};

/**
 * Type of MONEYBIRD's MONEYBIRD_DELETE_CONTACT tool output.
 */
type MONEYBIRD_DELETE_CONTACT_OUTPUT = {
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
 * Type of MONEYBIRD's MONEYBIRD_DELETE_CONTACT_NOTE tool input.
 */
type MONEYBIRD_DELETE_CONTACT_NOTE_INPUT = {
  /**
   * Administration Id
   * @description The unique identifier of the administration
   */
  administration_id?: number;
  /**
   * Contact Id
   * @description The unique identifier of the contact
   */
  contact_id?: number;
  /**
   * Note Id
   * @description The unique identifier of the note to delete
   */
  note_id?: number;
};

/**
 * Type of MONEYBIRD's MONEYBIRD_DELETE_CONTACT_NOTE tool output.
 */
type MONEYBIRD_DELETE_CONTACT_NOTE_OUTPUT = {
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
 * Type of MONEYBIRD's MONEYBIRD_DELETE_CONTACT_PERSON tool input.
 */
type MONEYBIRD_DELETE_CONTACT_PERSON_INPUT = {
  /**
   * Administration Id
   * @description The Moneybird administration ID under which the contact resides
   */
  administration_id?: number;
  /**
   * Contact Id
   * @description The ID of the contact from which to remove a person
   */
  contact_id?: number;
  /**
   * Contact Person Id
   * @description The ID of the contact person to delete
   */
  contact_person_id?: number;
};

/**
 * Type of MONEYBIRD's MONEYBIRD_DELETE_CONTACT_PERSON tool output.
 */
type MONEYBIRD_DELETE_CONTACT_PERSON_OUTPUT = {
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
 * Type of MONEYBIRD's MONEYBIRD_FILTER_CONTACTS tool input.
 */
type MONEYBIRD_FILTER_CONTACTS_INPUT = {
  /**
   * Administration Id
   * @description Numeric administration ID for the Moneybird URL path.
   */
  administration_id?: number;
  /**
   * Created After
   * @description Select contacts created after this ISO 8601 UTC datetime (exclusive), e.g., '2025-05-06T07:27:49Z'
   * @default null
   */
  created_after: string | null;
  /**
   * First Name
   * @description Filter contacts by first name (case-insensitive)
   * @default null
   */
  first_name: string | null;
  /**
   * Include Archived
   * @description Include archived contacts in the results
   * @default false
   */
  include_archived: boolean;
  /**
   * Last Name
   * @description Filter contacts by last name (case-insensitive)
   * @default null
   */
  last_name: string | null;
  /**
   * Per Page
   * @description Number of contacts to return per page (1-100)
   * @default null
   */
  per_page: number | null;
  /**
   * Updated After
   * @description Select contacts updated after this ISO 8601 UTC datetime (exclusive), e.g., '2025-05-07T07:27:54Z'
   * @default null
   */
  updated_after: string | null;
};

/**
 * Type of MONEYBIRD's MONEYBIRD_FILTER_CONTACTS tool output.
 */
type MONEYBIRD_FILTER_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MONEYBIRD's MONEYBIRD_GET_ADDITIONAL_CHARGES tool input.
 */
type MONEYBIRD_GET_ADDITIONAL_CHARGES_INPUT = {
  /**
   * Administration Id
   * @description Numeric administration ID, as part of the Moneybird URL path.
   */
  administration_id?: number;
  /**
   * Contact Id
   * @description ID of the contact to retrieve additional charges for
   */
  contact_id?: string;
  /**
   * Include Billed
   * @description If true, includes additional charges that have already been billed. Default is false.
   * @default false
   */
  include_billed: boolean;
};

/**
 * Type of MONEYBIRD's MONEYBIRD_GET_ADDITIONAL_CHARGES tool output.
 */
type MONEYBIRD_GET_ADDITIONAL_CHARGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Administration Id
       * @description Administration ID
       * @default null
       */
      administration_id: number | null;
      /**
       * Amount
       * @description Amount or units charged, e.g., '1 x'
       * @default null
       */
      amount: string | null;
      /**
       * Contact Id
       * @description Contact ID
       * @default null
       */
      contact_id: string | null;
      /**
       * Detail Id
       * @description Associated detail ID, if any
       * @default null
       */
      detail_id: string | null;
      /**
       * Id
       * @description ID of the additional charge
       * @default null
       */
      id: string | null;
      /**
       * Period
       * @description Period covered by the charge
       * @default null
       */
      period: string | null;
      /**
       * Price
       * @description Unit price for the charge
       * @default null
       */
      price: string | null;
      /**
       * Product Id
       * @description Product ID for this charge
       * @default null
       */
      product_id: string | null;
      /**
       * Subscription Id
       * @description Associated subscription ID, if any
       * @default null
       */
      subscription_id: string | null;
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
 * Type of MONEYBIRD's MONEYBIRD_GET_CONTACT tool input.
 */
type MONEYBIRD_GET_CONTACT_INPUT = {
  /**
   * Administration Id
   * @description Numeric administration ID, part of the Moneybird URL path
   */
  administration_id?: number;
  /**
   * Contact Id
   * @description ID of the contact to retrieve
   */
  contact_id?: string;
  /**
   * Include Archived
   * @description Return archived contact when true (default false)
   * @default false
   */
  include_archived: boolean;
};

/**
 * Type of MONEYBIRD's MONEYBIRD_GET_CONTACT tool output.
 */
type MONEYBIRD_GET_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact
       * @description Full contact object returned by Moneybird
       */
      contact: {
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
 * Type of MONEYBIRD's MONEYBIRD_GET_CONTACT_BY_CUSTOMER_ID tool input.
 */
type MONEYBIRD_GET_CONTACT_BY_CUSTOMER_ID_INPUT = {
  /**
   * Administration Id
   * @description Numeric administration ID, used in the URL path.
   */
  administration_id?: number;
  /**
   * Customer Id
   * @description Unique customer identifier for the contact.
   */
  customer_id?: string;
};

/**
 * Type of MONEYBIRD's MONEYBIRD_GET_CONTACT_BY_CUSTOMER_ID tool output.
 */
type MONEYBIRD_GET_CONTACT_BY_CUSTOMER_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address1
       * @description Address line 1
       * @default null
       */
      address1: string | null;
      /**
       * Address2
       * @description Address line 2
       * @default null
       */
      address2: string | null;
      /**
       * Administration Id
       * @description Administration ID
       */
      administration_id: number;
      /**
       * Archived
       * @description Whether the contact is archived
       */
      archived: boolean;
      /**
       * Attention
       * @description Billing attention line
       * @default null
       */
      attention: string | null;
      /**
       * Bank Account
       * @description Bank account number of contact
       * @default null
       */
      bank_account: string | null;
      /**
       * Chamber Of Commerce
       * @description Chamber of Commerce number
       * @default null
       */
      chamber_of_commerce: string | null;
      /**
       * City
       * @description City name
       * @default null
       */
      city: string | null;
      /**
       * Company Name
       * @description Company name of the contact
       * @default null
       */
      company_name: string | null;
      /**
       * Contact People
       * @description List of contact person records
       */
      contact_people: {
          /**
           * Administration Id
           * @description Administration ID
           */
          administration_id: number;
          /**
           * Contact Id
           * @description Parent contact ID
           */
          contact_id: string;
          /**
           * Created At
           * @description Creation timestamp of contact person
           */
          created_at: string;
          /**
           * Department
           * @description Department of contact person
           * @default null
           */
          department: string | null;
          /**
           * Email
           * @description Email of contact person
           * @default null
           */
          email: string | null;
          /**
           * Firstname
           * @description First name of contact person
           * @default null
           */
          firstname: string | null;
          /**
           * Id
           * @description Contact person ID
           */
          id: string;
          /**
           * Lastname
           * @description Last name of contact person
           * @default null
           */
          lastname: string | null;
          /**
           * Phone
           * @description Phone number of contact person
           * @default null
           */
          phone: string | null;
          /**
           * Updated At
           * @description Last update timestamp of contact person
           */
          updated_at: string;
          /**
           * Version
           * @description Version of contact person record
           */
          version: number;
      }[];
      /**
       * Country
       * @description Country code (ISO 3166-1 alpha-2)
       * @default null
       */
      country: string | null;
      /**
       * Created At
       * @description Creation timestamp of contact
       */
      created_at: string;
      /**
       * Credit Card Number
       * @description Credit card number token
       * @default null
       */
      credit_card_number: string | null;
      /**
       * Credit Card Reference
       * @description Credit card reference
       * @default null
       */
      credit_card_reference: string | null;
      /**
       * Credit Card Type
       * @description Type of credit card
       * @default null
       */
      credit_card_type: string | null;
      /**
       * Custom Fields
       * @description List of custom fields and values
       */
      custom_fields: {
          /**
           * Id
           * @description Custom field ID
           */
          id: string;
          /**
           * Name
           * @description Name of the custom field
           * @default null
           */
          name: string | null;
          /**
           * Value
           * @description Value of the custom field
           * @default null
           */
          value: string | null;
      }[];
      /**
       * Customer Id
       * @description Customer identifier of the contact
       */
      customer_id: string;
      /**
       * Delivery Method
       * @description Delivery method for invoices
       * @default null
       */
      delivery_method: string | null;
      /**
       * Email
       * @description Primary email address
       * @default null
       */
      email: string | null;
      /**
       * Email Ubl
       * @description Whether to send UBL invoices
       */
      email_ubl: boolean;
      /**
       * Estimate Workflow Id
       * @description Estimate workflow ID
       * @default null
       */
      estimate_workflow_id: number | null;
      /**
       * Events
       * @description List of events related to the contact
       */
      events: {
          /**
           * Action
           * @description Action type of the event
           */
          action: string;
          /**
           * Administration Id
           * @description Administration ID
           */
          administration_id: number;
          /**
           * Created At
           * @description Event creation timestamp
           */
          created_at: string;
          /**
           * Data
           * @description Additional data for the event
           */
          data: {
              [key: string]: unknown;
          };
          /**
           * Link Entity Id
           * @description Linked entity ID if any
           * @default null
           */
          link_entity_id: string | null;
          /**
           * Link Entity Type
           * @description Linked entity type if any
           * @default null
           */
          link_entity_type: string | null;
          /**
           * Updated At
           * @description Event update timestamp
           */
          updated_at: string;
          /**
           * User Id
           * @description User ID who triggered the event
           */
          user_id: number;
      }[];
      /**
       * Firstname
       * @description First name of the contact
       * @default null
       */
      firstname: string | null;
      /**
       * Id
       * @description Contact ID
       */
      id: string;
      /**
       * Invoice Workflow Id
       * @description Invoice workflow ID
       * @default null
       */
      invoice_workflow_id: number | null;
      /**
       * Is Trusted
       * @description Whether the contact is trusted
       */
      is_trusted: boolean;
      /**
       * Lastname
       * @description Last name of the contact
       * @default null
       */
      lastname: string | null;
      /**
       * Max Transfer Amount
       * @description Maximum transfer amount allowed
       * @default null
       */
      max_transfer_amount: string | null;
      /**
       * Moneybird Payments Mandate
       * @description Moneybird Payments mandate active
       */
      moneybird_payments_mandate: boolean;
      /**
       * Notes
       * @description List of notes associated with the contact
       */
      notes: {
          /**
           * Administration Id
           * @description Administration ID
           */
          administration_id: number;
          /**
           * Assignee Id
           * @description Assigned user ID if to-do
           * @default null
           */
          assignee_id: string | null;
          /**
           * Completed At
           * @description Timestamp when to-do was completed
           * @default null
           */
          completed_at: string | null;
          /**
           * Completed By Id
           * @description User ID who completed the to-do
           * @default null
           */
          completed_by_id: string | null;
          /**
           * Created At
           * @description Creation timestamp of the note
           */
          created_at: string;
          /**
           * Data
           * @description Additional data for the note
           */
          data: {
              [key: string]: unknown;
          };
          /**
           * Entity Id
           * @description ID of the related entity (contact)
           */
          entity_id: string;
          /**
           * Entity Type
           * @description Type of the related entity
           */
          entity_type: string;
          /**
           * Id
           * @description ID of the note
           */
          id: string;
          /**
           * Note
           * @description Text content of the note
           */
          note: string;
          /**
           * Todo
           * @description Whether this note is a to-do item
           */
          todo: boolean;
          /**
           * Todo Type
           * @description Type of to-do
           * @default null
           */
          todo_type: string | null;
          /**
           * Updated At
           * @description Last update timestamp of the note
           */
          updated_at: string;
          /**
           * User Id
           * @description User ID who created the note
           */
          user_id: number;
      }[];
      /**
       * Phone
       * @description Phone number
       * @default null
       */
      phone: string | null;
      /**
       * Sales Invoices Url
       * @description URL for contact's sales invoices
       * @default null
       */
      sales_invoices_url: string | null;
      /**
       * Send Estimates To Attention
       * @description Attention line for sending estimates
       * @default null
       */
      send_estimates_to_attention: string | null;
      /**
       * Send Estimates To Email
       * @description Email addresses for sending estimates
       * @default null
       */
      send_estimates_to_email: string | null;
      /**
       * Send Invoices To Attention
       * @description Attention line for sending invoices
       * @default null
       */
      send_invoices_to_attention: string | null;
      /**
       * Send Invoices To Email
       * @description Email addresses for sending invoices
       * @default null
       */
      send_invoices_to_email: string | null;
      /**
       * Sepa Active
       * @description SEPA direct debit active
       */
      sepa_active: boolean;
      /**
       * Sepa Bic
       * @description SEPA BIC code
       * @default null
       */
      sepa_bic: string | null;
      /**
       * Sepa Iban
       * @description SEPA IBAN number
       * @default null
       */
      sepa_iban: string | null;
      /**
       * Sepa Iban Account Name
       * @description SEPA IBAN account name
       * @default null
       */
      sepa_iban_account_name: string | null;
      /**
       * Sepa Mandate Date
       * @description SEPA mandate date
       * @default null
       */
      sepa_mandate_date: string | null;
      /**
       * Sepa Mandate Id
       * @description SEPA mandate ID
       * @default null
       */
      sepa_mandate_id: string | null;
      /**
       * Sepa Sequence Type
       * @description SEPA sequence type
       */
      sepa_sequence_type: string;
      /**
       * Si Identifier
       * @description SEPA identifier
       * @default null
       */
      si_identifier: string | null;
      /**
       * Si Identifier Type
       * @description SEPA identifier type
       * @default null
       */
      si_identifier_type: string | null;
      /**
       * Tax Number
       * @description Tax or VAT number
       * @default null
       */
      tax_number: string | null;
      /**
       * Tax Number Valid
       * @description Whether tax number is valid
       * @default null
       */
      tax_number_valid: boolean | null;
      /**
       * Tax Number Validated At
       * @description Timestamp when tax number was validated
       * @default null
       */
      tax_number_validated_at: string | null;
      /**
       * Updated At
       * @description Last update timestamp of contact
       */
      updated_at: string;
      /**
       * Version
       * @description Version number of contact record
       */
      version: number;
      /**
       * Zipcode
       * @description Postal code
       * @default null
       */
      zipcode: string | null;
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
 * Type of MONEYBIRD's MONEYBIRD_GET_CONTACT_PERSON tool input.
 */
type MONEYBIRD_GET_CONTACT_PERSON_INPUT = {
  /**
   * Administration Id
   * @description Numeric administration ID, used in the URL path.
   */
  administration_id?: number;
  /**
   * Contact Id
   * @description The ID of the contact to which the person belongs.
   */
  contact_id?: number;
  /**
   * Contact Person Id
   * @description The ID of the contact person to retrieve.
   */
  contact_person_id?: number;
};

/**
 * Type of MONEYBIRD's MONEYBIRD_GET_CONTACT_PERSON tool output.
 */
type MONEYBIRD_GET_CONTACT_PERSON_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Administration Id
       * @description ID of the administration the contact person belongs to
       */
      administration_id: number;
      /**
       * Created At
       * @description Timestamp when the contact person was created
       */
      created_at: string;
      /**
       * Email
       * @description Email address of the contact person
       * @default null
       */
      email: string | null;
      /**
       * Firstname
       * @description First name of the contact person
       */
      firstname: string;
      /**
       * Id
       * @description Unique identifier of the contact person
       */
      id: string;
      /**
       * Lastname
       * @description Last name of the contact person
       */
      lastname: string;
      /**
       * Phone
       * @description Phone number of the contact person
       * @default null
       */
      phone: string | null;
      /**
       * Updated At
       * @description Timestamp when the contact person was last updated
       */
      updated_at: string;
      /**
       * Version
       * @description Version number of the contact person record
       */
      version: number;
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
 * Type of MONEYBIRD's MONEYBIRD_GET_SALES_INVOICE tool input.
 */
type MONEYBIRD_GET_SALES_INVOICE_INPUT = {
  /**
   * Administration Id
   * @description Numeric administration ID, part of the Moneybird URL path
   */
  administration_id?: number;
  /**
   * Invoice Id
   * @description ID of the sales invoice to retrieve
   */
  invoice_id?: string;
};

/**
 * Type of MONEYBIRD's MONEYBIRD_GET_SALES_INVOICE tool output.
 */
type MONEYBIRD_GET_SALES_INVOICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Invoice
       * @description Full sales invoice object returned by Moneybird
       */
      invoice: {
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
 * Type of MONEYBIRD's MONEYBIRD_LIST_ADMINISTRATIONS tool input.
 */
type MONEYBIRD_LIST_ADMINISTRATIONS_INPUT = object;

/**
 * Type of MONEYBIRD's MONEYBIRD_LIST_ADMINISTRATIONS tool output.
 */
type MONEYBIRD_LIST_ADMINISTRATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Country
       * @description Country code of the administration, ISO 3166-1 alpha-2
       */
      country: string;
      /**
       * Currency
       * @description Default currency of the administration, ISO 4217 code
       */
      currency: string;
      /**
       * Id
       * @description Unique identifier of the administration
       */
      id: number;
      /**
       * Language
       * @description Default language of the administration, e.g., 'en', 'nl'
       */
      language: string;
      /**
       * Name
       * @description Name of the administration
       */
      name: string;
      /**
       * Time Zone
       * @description Time zone of the administration, e.g., 'Europe/Amsterdam'
       */
      time_zone: string;
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
 * Type of MONEYBIRD's MONEYBIRD_LIST_CONTACTS_SYNCHRONIZATION tool input.
 */
type MONEYBIRD_LIST_CONTACTS_SYNCHRONIZATION_INPUT = {
  /**
   * Administration Id
   * @description The unique identifier of the administration
   */
  administration_id?: number;
  /**
   * Filter
   * @description Optional filter expression to narrow results, e.g., 'first_name:henk'
   * @default null
   */
  filter: string | null;
  /**
   * Include Archived
   * @description If true, include archived contacts in the synchronization list
   * @default null
   */
  include_archived: boolean | null;
};

/**
 * Type of MONEYBIRD's MONEYBIRD_LIST_CONTACTS_SYNCHRONIZATION tool output.
 */
type MONEYBIRD_LIST_CONTACTS_SYNCHRONIZATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the contact
       */
      id: string;
      /**
       * Version
       * @description Version number of the contact resource
       */
      version: number;
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
 * Type of MONEYBIRD's MONEYBIRD_LIST_SALES_INVOICES tool input.
 */
type MONEYBIRD_LIST_SALES_INVOICES_INPUT = {
  /**
   * Administration Id
   * @description Numeric administration ID, part of the Moneybird URL path
   */
  administration_id?: number;
  /**
   * Filter
   * @description Filter expression to limit invoices. See Moneybird docs for supported filters, e.g., 'state=sent' or 'period=current_year'.
   * @default null
   */
  filter: string | null;
  /**
   * Page
   * @description Page number for pagination (must be >= 1).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of invoices per page (max 100).
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of MONEYBIRD's MONEYBIRD_LIST_SALES_INVOICES tool output.
 */
type MONEYBIRD_LIST_SALES_INVOICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Administration Id
       * @description Administration ID of the invoice
       */
      administration_id: number;
      /**
       * Contact Id
       * @description Contact ID associated with the invoice
       */
      contact_id: number;
      /**
       * Created At
       * @description Timestamp when the invoice was created (ISO8601)
       */
      created_at: string;
      /**
       * Currency
       * @description Currency code for amounts, e.g., 'EUR'
       * @default null
       */
      currency: string | null;
      /**
       * Due Date
       * @description Due date of the invoice (YYYY-MM-DD)
       * @default null
       */
      due_date: string | null;
      /**
       * Id
       * @description Unique identifier of the sales invoice
       */
      id: number;
      /**
       * Invoice Date
       * @description Invoice date (YYYY-MM-DD)
       */
      invoice_date: string;
      /**
       * Invoice Id
       * @description Invoice number
       */
      invoice_id: string;
      /**
       * Language
       * @description Language code of the invoice document
       * @default null
       */
      language: string | null;
      /**
       * Paid At
       * @description Timestamp when invoice was paid (ISO8601)
       * @default null
       */
      paid_at: string | null;
      /**
       * Payment Conditions
       * @description Payment conditions text
       * @default null
       */
      payment_conditions: string | null;
      /**
       * Reference
       * @description Reference text for the invoice
       * @default null
       */
      reference: string | null;
      /**
       * Sales Invoice Url
       * @description URL where the sales invoice can be viewed
       * @default null
       */
      sales_invoice_url: string | null;
      /**
       * Sequence Id
       * @description Sequence ID assigned to this invoice
       * @default null
       */
      sequence_id: number | null;
      /**
       * State
       * @description Current state of the invoice, e.g., 'open', 'sent', 'paid'
       */
      state: string;
      /**
       * Subject
       * @description Subject or title of the invoice
       * @default null
       */
      subject: string | null;
      /**
       * Updated At
       * @description Timestamp when the invoice was last updated (ISO8601)
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
 * Type of MONEYBIRD's MONEYBIRD_REQUEST_CONTACT_PAYMENTS_MANDATE_URL tool input.
 */
type MONEYBIRD_REQUEST_CONTACT_PAYMENTS_MANDATE_URL_INPUT = {
  /**
   * Administration Id
   * @description Numeric administration ID, as part of the Moneybird URL path.
   */
  administration_id?: number;
  /**
   * Contact Id
   * @description ID of the contact for which to generate a payments mandate URL
   */
  contact_id?: number;
  /**
   * Identity Id
   * @description Optional identity ID when multiple identities exist; must be a valid identity.
   * @default null
   */
  identity_id: number | null;
};

/**
 * Type of MONEYBIRD's MONEYBIRD_REQUEST_CONTACT_PAYMENTS_MANDATE_URL tool output.
 */
type MONEYBIRD_REQUEST_CONTACT_PAYMENTS_MANDATE_URL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Url
       * @description One-time URL to set up a Moneybird Payments mandate. Valid for 14 days.
       */
      url: string;
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
 * Type of MONEYBIRD's MONEYBIRD_UPDATE_CONTACT tool input.
 */
type MONEYBIRD_UPDATE_CONTACT_INPUT = {
  /**
   * Administration Id
   * @description Numeric administration ID, part of the Moneybird URL path
   */
  administration_id?: number;
  /**
   * Contact
   * @description Key-value map of contact fields to update
   */
  contact?: {
      [key: string]: unknown;
  };
  /**
   * Contact Id
   * @description ID of the contact to update
   */
  contact_id?: string;
};

/**
 * Type of MONEYBIRD's MONEYBIRD_UPDATE_CONTACT tool output.
 */
type MONEYBIRD_UPDATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact
       * @description Updated contact object returned by Moneybird
       */
      contact: {
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
 * Type of MONEYBIRD's MONEYBIRD_UPDATE_CONTACT_PERSON tool input.
 */
type MONEYBIRD_UPDATE_CONTACT_PERSON_INPUT = {
  /**
   * Administration Id
   * @description Numeric administration ID, part of the Moneybird URL path.
   */
  administration_id?: number;
  /**
   * Contact Id
   * @description ID of the contact containing the person to update.
   */
  contact_id?: string;
  /**
   * Contact Person Id
   * @description ID of the contact person to update.
   */
  contact_person_id?: string;
  /**
   * Department
   * @description Department of the contact person.
   * @default null
   */
  department: string | null;
  /**
   * Email
   * @description Email address of the contact person.
   * @default null
   */
  email: string | null;
  /**
   * Firstname
   * @description First name of the contact person.
   * @default null
   */
  firstname: string | null;
  /**
   * Lastname
   * @description Last name of the contact person.
   * @default null
   */
  lastname: string | null;
  /**
   * Phone
   * @description Phone number of the contact person.
   * @default null
   */
  phone: string | null;
};

/**
 * Type of MONEYBIRD's MONEYBIRD_UPDATE_CONTACT_PERSON tool output.
 */
type MONEYBIRD_UPDATE_CONTACT_PERSON_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Administration Id
       * @description Administration ID the contact person belongs to.
       */
      administration_id: number;
      /**
       * Contact Id
       * @description ID of the associated contact.
       */
      contact_id: string;
      /**
       * Created At
       * @description Timestamp when the contact person was created.
       */
      created_at: string;
      /**
       * Department
       * @description Department of the contact person.
       * @default null
       */
      department: string | null;
      /**
       * Email
       * @description Email address of the contact person.
       * @default null
       */
      email: string | null;
      /**
       * Firstname
       * @description First name of the contact person.
       */
      firstname: string;
      /**
       * Id
       * @description Unique identifier of the contact person.
       */
      id: string;
      /**
       * Lastname
       * @description Last name of the contact person.
       */
      lastname: string;
      /**
       * Phone
       * @description Phone number of the contact person.
       * @default null
       */
      phone: string | null;
      /**
       * Updated At
       * @description Timestamp when the contact person was last updated.
       */
      updated_at: string;
      /**
       * Version
       * @description Version number of the contact person.
       */
      version: number;
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
 * Type of MONEYBIRD's MONEYBIRD_UPDATE_SALES_INVOICE tool input.
 */
type MONEYBIRD_UPDATE_SALES_INVOICE_INPUT = {
  /**
   * Administration Id
   * @description Administration ID in Moneybird URL path
   */
  administration_id?: number;
  /**
   * Sales Invoice
   * @description Fields to update on the invoice
   */
  sales_invoice?: {
      /**
       * Contact Id
       * @description Valid contact ID to set
       * @default null
       */
      contact_id: number | null;
      /**
       * Contact Person Id
       * @description Valid contact person ID to set
       * @default null
       */
      contact_person_id: number | null;
      /**
       * Currency
       * @description ISO currency code, e.g., 'EUR'
       * @default null
       */
      currency: string | null;
      /**
       * Custom Fields Attributes
       * @description List of custom fields to update
       * @default null
       */
      custom_fields_attributes: {
          /**
           * Id
           * @description Custom field ID
           */
          id: number;
          /**
           * Value
           * @description Value for the custom field
           */
          value: string;
      }[] | null;
      /**
       * Details Attributes
       * @description List of line items to update
       * @default null
       */
      details_attributes: {
          /**
           *  Destroy
           * @description Set true to delete this line item
           * @default null
           */
          _destroy: boolean | null;
          /**
           * Amount
           * @description Quantity string, e.g., '1 x'
           * @default null
           */
          amount: string | null;
          /**
           * Automated Tax Enabled
           * @description Enable automated tax calculation for this line
           * @default null
           */
          automated_tax_enabled: boolean | null;
          /**
           * Description
           * @description Line item description
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Existing detail record ID
           * @default null
           */
          id: number | null;
          /**
           * Ledger Account Id
           * @description Valid ledger account ID
           * @default null
           */
          ledger_account_id: number | null;
          /**
           * Period
           * @description Date range for the line, e.g., '20250101..20250131' or presets.
           * @default null
           */
          period: string | null;
          /**
           * Price
           * @description Unit price (decimal)
           * @default null
           */
          price: number | null;
          /**
           * Product Id
           * @description Valid product ID
           * @default null
           */
          product_id: number | null;
          /**
           * Project Id
           * @description Valid project ID
           * @default null
           */
          project_id: number | null;
          /**
           * Row Order
           * @description Order index of this line item
           * @default null
           */
          row_order: number | null;
          /**
           * Tax Rate Id
           * @description Valid tax rate ID
           * @default null
           */
          tax_rate_id: number | null;
          /**
           * Time Entry Ids
           * @description List of time entry IDs
           * @default null
           */
          time_entry_ids: number[] | null;
          /**
           * Trip Ids
           * @description List of trip IDs
           * @default null
           */
          trip_ids: number[] | null;
      }[] | null;
      /**
       * Discount
       * @description Discount percent (>= 0)
       * @default null
       */
      discount: number | null;
      /**
       * Document Style Id
       * @description Document style ID to apply
       * @default null
       */
      document_style_id: number | null;
      /**
       * First Due Interval
       * @description Days until due date
       * @default null
       */
      first_due_interval: number | null;
      /**
       * Invoice Date
       * @description Invoice date (YYYY-MM-DD)
       * @default null
       */
      invoice_date: string | null;
      /**
       * Invoice Sequence Id
       * @description Invoice sequence ID to set
       * @default null
       */
      invoice_sequence_id: string | null;
      /**
       * Original Estimate Id
       * @description Link to an existing estimate ID
       * @default null
       */
      original_estimate_id: number | null;
      /**
       * Payment Conditions
       * @description Custom payment conditions text
       * @default null
       */
      payment_conditions: string | null;
      /**
       * Prices Are Incl Tax
       * @description True if prices include tax
       * @default null
       */
      prices_are_incl_tax: boolean | null;
      /**
       * Reference
       * @description Invoice reference string
       * @default null
       */
      reference: string | null;
      /**
       * Remove Invoice Sequence Id
       * @description Unset the sequence ID when true
       * @default null
       */
      remove_invoice_sequence_id: boolean | null;
      /**
       * Time Entry Ids
       * @description List of time entry IDs to attach
       * @default null
       */
      time_entry_ids: number[] | null;
      /**
       * Update Contact
       * @description If true, sync contact fields from invoice
       * @default null
       */
      update_contact: boolean | null;
      /**
       * Workflow Id
       * @description Workflow ID to apply
       * @default null
       */
      workflow_id: number | null;
  };
  /**
   * Sales Invoice Id
   * @description ID of the sales invoice to update
   */
  sales_invoice_id?: string;
};

/**
 * Type of MONEYBIRD's MONEYBIRD_UPDATE_SALES_INVOICE tool output.
 */
type MONEYBIRD_UPDATE_SALES_INVOICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Sales Invoice
       * @description The updated invoice object returned by Moneybird
       */
      sales_invoice: {
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
 * Type map of all available tool input types for toolkit "MONEYBIRD".
 */
export type MONEYBIRD_TOOL_INPUTS = {
  ADD_NOTE_TO_CONTACT: MONEYBIRD_ADD_NOTE_TO_CONTACT_INPUT
  ARCHIVE_CONTACT: MONEYBIRD_ARCHIVE_CONTACT_INPUT
  CREATE_CONTACT: MONEYBIRD_CREATE_CONTACT_INPUT
  CREATE_CONTACT_PERSON: MONEYBIRD_CREATE_CONTACT_PERSON_INPUT
  CREATE_SALES_INVOICE: MONEYBIRD_CREATE_SALES_INVOICE_INPUT
  DELETE_CONTACT: MONEYBIRD_DELETE_CONTACT_INPUT
  DELETE_CONTACT_NOTE: MONEYBIRD_DELETE_CONTACT_NOTE_INPUT
  DELETE_CONTACT_PERSON: MONEYBIRD_DELETE_CONTACT_PERSON_INPUT
  FILTER_CONTACTS: MONEYBIRD_FILTER_CONTACTS_INPUT
  GET_ADDITIONAL_CHARGES: MONEYBIRD_GET_ADDITIONAL_CHARGES_INPUT
  GET_CONTACT: MONEYBIRD_GET_CONTACT_INPUT
  GET_CONTACT_BY_CUSTOMER_ID: MONEYBIRD_GET_CONTACT_BY_CUSTOMER_ID_INPUT
  GET_CONTACT_PERSON: MONEYBIRD_GET_CONTACT_PERSON_INPUT
  GET_SALES_INVOICE: MONEYBIRD_GET_SALES_INVOICE_INPUT
  LIST_ADMINISTRATIONS: MONEYBIRD_LIST_ADMINISTRATIONS_INPUT
  LIST_CONTACTS_SYNCHRONIZATION: MONEYBIRD_LIST_CONTACTS_SYNCHRONIZATION_INPUT
  LIST_SALES_INVOICES: MONEYBIRD_LIST_SALES_INVOICES_INPUT
  REQUEST_CONTACT_PAYMENTS_MANDATE_URL: MONEYBIRD_REQUEST_CONTACT_PAYMENTS_MANDATE_URL_INPUT
  UPDATE_CONTACT: MONEYBIRD_UPDATE_CONTACT_INPUT
  UPDATE_CONTACT_PERSON: MONEYBIRD_UPDATE_CONTACT_PERSON_INPUT
  UPDATE_SALES_INVOICE: MONEYBIRD_UPDATE_SALES_INVOICE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MONEYBIRD".
 */
export type MONEYBIRD_TOOL_OUTPUTS = {
  ADD_NOTE_TO_CONTACT: MONEYBIRD_ADD_NOTE_TO_CONTACT_OUTPUT
  ARCHIVE_CONTACT: MONEYBIRD_ARCHIVE_CONTACT_OUTPUT
  CREATE_CONTACT: MONEYBIRD_CREATE_CONTACT_OUTPUT
  CREATE_CONTACT_PERSON: MONEYBIRD_CREATE_CONTACT_PERSON_OUTPUT
  CREATE_SALES_INVOICE: MONEYBIRD_CREATE_SALES_INVOICE_OUTPUT
  DELETE_CONTACT: MONEYBIRD_DELETE_CONTACT_OUTPUT
  DELETE_CONTACT_NOTE: MONEYBIRD_DELETE_CONTACT_NOTE_OUTPUT
  DELETE_CONTACT_PERSON: MONEYBIRD_DELETE_CONTACT_PERSON_OUTPUT
  FILTER_CONTACTS: MONEYBIRD_FILTER_CONTACTS_OUTPUT
  GET_ADDITIONAL_CHARGES: MONEYBIRD_GET_ADDITIONAL_CHARGES_OUTPUT
  GET_CONTACT: MONEYBIRD_GET_CONTACT_OUTPUT
  GET_CONTACT_BY_CUSTOMER_ID: MONEYBIRD_GET_CONTACT_BY_CUSTOMER_ID_OUTPUT
  GET_CONTACT_PERSON: MONEYBIRD_GET_CONTACT_PERSON_OUTPUT
  GET_SALES_INVOICE: MONEYBIRD_GET_SALES_INVOICE_OUTPUT
  LIST_ADMINISTRATIONS: MONEYBIRD_LIST_ADMINISTRATIONS_OUTPUT
  LIST_CONTACTS_SYNCHRONIZATION: MONEYBIRD_LIST_CONTACTS_SYNCHRONIZATION_OUTPUT
  LIST_SALES_INVOICES: MONEYBIRD_LIST_SALES_INVOICES_OUTPUT
  REQUEST_CONTACT_PAYMENTS_MANDATE_URL: MONEYBIRD_REQUEST_CONTACT_PAYMENTS_MANDATE_URL_OUTPUT
  UPDATE_CONTACT: MONEYBIRD_UPDATE_CONTACT_OUTPUT
  UPDATE_CONTACT_PERSON: MONEYBIRD_UPDATE_CONTACT_PERSON_OUTPUT
  UPDATE_SALES_INVOICE: MONEYBIRD_UPDATE_SALES_INVOICE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MONEYBIRD toolkit.
 */
export const MONEYBIRD = {
  slug: "moneybird",
  tools: {
    /**
     * Tool to add a note or to-do to a contact. use when you need to record a comment or assign a task to a contact.
     */
    ADD_NOTE_TO_CONTACT: "MONEYBIRD_ADD_NOTE_TO_CONTACT",
    /**
     * Tool to archive a contact. use when a contact is no longer needed and should be hidden permanently.
     */
    ARCHIVE_CONTACT: "MONEYBIRD_ARCHIVE_CONTACT",
    /**
     * Tool to create a new contact in moneybird. use after you have an administration id and need to onboard a new company/person. provide either company name or both firstname and lastname.
     */
    CREATE_CONTACT: "MONEYBIRD_CREATE_CONTACT",
    /**
     * Tool to create a new contact person. use when you have the contact id and need to add a person after confirming their firstname and lastname.
     */
    CREATE_CONTACT_PERSON: "MONEYBIRD_CREATE_CONTACT_PERSON",
    /**
     * Tool to create a new sales invoice. use when you need to bill a contact with specified line items.
     */
    CREATE_SALES_INVOICE: "MONEYBIRD_CREATE_SALES_INVOICE",
    /**
     * Tool to delete a contact. use after confirming that contact should be removed.
     */
    DELETE_CONTACT: "MONEYBIRD_DELETE_CONTACT",
    /**
     * Tool to delete a note from a contact. use when a note is no longer needed and should be removed permanently.
     */
    DELETE_CONTACT_NOTE: "MONEYBIRD_DELETE_CONTACT_NOTE",
    /**
     * Tool to delete a contact person from a contact. use after confirming the administration id, contact id, and contact person id.
     */
    DELETE_CONTACT_PERSON: "MONEYBIRD_DELETE_CONTACT_PERSON",
    /**
     * Tool to filter contacts. use when you need to retrieve contacts matching specific criteria like created after or first name.
     */
    FILTER_CONTACTS: "MONEYBIRD_FILTER_CONTACTS",
    /**
     * Tool to get additional charges for a contact. use when you need to view pending (or optionally billed) usage or recurring charges.
     */
    GET_ADDITIONAL_CHARGES: "MONEYBIRD_GET_ADDITIONAL_CHARGES",
    /**
     * Tool to retrieve all information about a specific contact by id. use when you need the full details of a contact, for example before generating invoices.
     */
    GET_CONTACT: "MONEYBIRD_GET_CONTACT",
    /**
     * Tool to retrieve full contact details by customer id. use when you need all fields of a contact given its customer id.
     */
    GET_CONTACT_BY_CUSTOMER_ID: "MONEYBIRD_GET_CONTACT_BY_CUSTOMER_ID",
    /**
     * Tool to get all information about a contact person. use when you have the administration, contact, and contact person ids and need full details before updating.
     */
    GET_CONTACT_PERSON: "MONEYBIRD_GET_CONTACT_PERSON",
    /**
     * Tool to get a single sales invoice by id. use when you need detailed invoice data for a known invoice id.
     */
    GET_SALES_INVOICE: "MONEYBIRD_GET_SALES_INVOICE",
    /**
     * Tool to list all administrations accessible by the authenticated user. use when you need to obtain administration id for subsequent operations like create contact.
     */
    LIST_ADMINISTRATIONS: "MONEYBIRD_LIST_ADMINISTRATIONS",
    /**
     * Tool to list all contact ids and versions for synchronization. use when you need to detect which contacts have changed and update local data accordingly.
     */
    LIST_CONTACTS_SYNCHRONIZATION: "MONEYBIRD_LIST_CONTACTS_SYNCHRONIZATION",
    /**
     * Tool to list all sales invoices in an administration. use when you need an overview of invoices for a given administration.
     */
    LIST_SALES_INVOICES: "MONEYBIRD_LIST_SALES_INVOICES",
    /**
     * Tool to request a url for setting up a payments mandate. use when you need to generate a direct-debit authorization link for a contact (valid for 14 days).
     */
    REQUEST_CONTACT_PAYMENTS_MANDATE_URL: "MONEYBIRD_REQUEST_CONTACT_PAYMENTS_MANDATE_URL",
    /**
     * Tool to update a contact. use when you need to modify existing contact details by id. only provided fields will be changed.
     */
    UPDATE_CONTACT: "MONEYBIRD_UPDATE_CONTACT",
    /**
     * Tool to update a contact person. use after selecting a specific contact person when you need to change their details.
     */
    UPDATE_CONTACT_PERSON: "MONEYBIRD_UPDATE_CONTACT_PERSON",
    /**
     * Tool to update an existing sales invoice by id. use when modifying invoice header or line items.
     */
    UPDATE_SALES_INVOICE: "MONEYBIRD_UPDATE_SALES_INVOICE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MONEYBIRD".
 */
export type MONEYBIRD_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MONEYBIRD".
 */
export type MONEYBIRD_TRIGGER_EVENTS = {}
