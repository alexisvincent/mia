// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CHASER's CHASER_CREATE_INVOICE tool input.
 */
type CHASER_CREATE_INVOICE_INPUT = {
  /**
   * Amount Due
   * @description Amount left to pay on the invoice
   */
  amount_due?: number;
  /**
   * Amount Paid
   * @description Amount paid on the invoice
   */
  amount_paid?: number;
  /**
   * Currency Code
   * @description ISO 4217 currency code, 3 uppercase letters
   */
  currency_code?: string;
  /**
   * Customer External Id
   * @description External ID of the associated customer
   */
  customer_external_id?: string;
  /**
   * Date
   * Format: date-time
   * @description Date the invoice was issued (ISO 8601)
   */
  date?: string;
  /**
   * Due Date
   * Format: date-time
   * @description Date payment is due (ISO 8601)
   */
  due_date?: string;
  /**
   * Fully Paid Date
   * Format: date-time
   * @description Date the invoice was fully paid (ISO 8601), if applicable
   * @default null
   */
  fully_paid_date: string | null;
  /**
   * Invoice Id
   * @description External unique identifier for the invoice
   */
  invoice_id?: string;
  /**
   * Invoice Number
   * @description Invoice reference number (not necessarily unique)
   */
  invoice_number?: string;
  /**
   * Status
   * @description Status of the invoice
   * @enum {string}
   */
  status?: "DRAFT" | "SUBMITTED" | "AUTHORISED" | "PAID" | "VOIDED" | "DELETED";
  /**
   * Sub Total
   * @description Sub-total amount of the invoice
   * @default null
   */
  sub_total: number | null;
  /**
   * Total
   * @description Total amount of the invoice
   */
  total?: number;
};

/**
 * Type of CHASER's CHASER_CREATE_INVOICE tool output.
 */
type CHASER_CREATE_INVOICE_OUTPUT = {
  /**
   * Data
   * @description Detailed information of the created invoice
   */
  data?: {
      /** Amount Due */
      amount_due: number;
      /** Amount Paid */
      amount_paid: number;
      /**
       * Currency Code
       * @description ISO 4217 currency code, 3 uppercase letters
       */
      currency_code: string;
      /** Customer External Id */
      customer_external_id: string;
      /**
       * Date
       * Format: date-time
       */
      date: string;
      /**
       * Due Date
       * Format: date-time
       */
      due_date: string;
      /**
       * Fully Paid Date
       * Format: date-time
       */
      fully_paid_date: string | null;
      /**
       * Id
       * @description Internal Chaser ID of the invoice
       */
      id: string;
      /** Invoice Id */
      invoice_id: string;
      /** Invoice Number */
      invoice_number: string;
      /** Invoice Pdf Link */
      invoice_pdf_link: string | null;
      /**
       * Invoice Pdf Link Updated At
       * Format: date-time
       */
      invoice_pdf_link_updated_at: string | null;
      /** Payments */
      payments: {
          /**
           * Amount
           * @description Payment amount applied to the invoice
           */
          amount: number;
          /**
           * Date
           * Format: date-time
           * @description Date of the payment (ISO 8601)
           */
          date: string;
      }[];
      /**
       * Status
       * @enum {string}
       */
      status: "DRAFT" | "SUBMITTED" | "AUTHORISED" | "PAID" | "VOIDED" | "DELETED";
      /** Sub Total */
      sub_total: number | null;
      /** Total */
      total: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Object
   * @description Type of the returned object
   */
  object?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Url
   * @description URL of the newly created resource
   */
  url?: string;
};

/**
 * Type of CHASER's CHASER_GET_CREDIT_NOTES tool input.
 */
type CHASER_GET_CREDIT_NOTES_INPUT = {
  /**
   * Customer External Id
   * @description Filter by the external ID of the customer associated with the credit note.
   * @default null
   */
  customer_external_id: string | null;
  /**
   * Date From
   * Format: date
   * @description Filter to credit notes issued on or after this date (YYYY-MM-DD).
   * @default null
   */
  date_from: unknown;
  /**
   * Date To
   * Format: date
   * @description Filter to credit notes issued on or before this date (YYYY-MM-DD).
   * @default null
   */
  date_to: unknown;
  /**
   * Status
   * @description Filter by credit note status.
   * @default null
   * @enum {string|null}
   */
  status: "ACTIVE" | "SUBMITTED" | "AUTHORISED" | "PAID" | "VOIDED" | "DELETED" | null;
};

/**
 * Type of CHASER's CHASER_GET_CREDIT_NOTES tool output.
 */
type CHASER_GET_CREDIT_NOTES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Credit Notes
       * @description Array of credit note objects.
       */
      credit_notes: {
          /**
           * Credit Note Id
           * @description Unique identifier of the credit note.
           */
          credit_note_id: string;
          /**
           * Credit Note Number
           * @description Human-readable number of the credit note.
           */
          credit_note_number: string;
          /**
           * Currency
           * @description ISO 4217 currency code (e.g., USD, GBP).
           */
          currency: string;
          /**
           * Customer External Id
           * @description External ID of the customer associated with the credit note.
           */
          customer_external_id: string;
          /**
           * Date
           * Format: date
           * @description Date the credit note was issued (YYYY-MM-DD).
           */
          date: unknown;
          /**
           * Remaining Credit
           * @description Unallocated credit amount remaining on the credit note.
           */
          remaining_credit: number;
          /**
           * Status
           * @description Current status of the credit note.
           * @enum {string}
           */
          status: "ACTIVE" | "SUBMITTED" | "AUTHORISED" | "PAID" | "VOIDED" | "DELETED";
          /**
           * Total
           * @description Total amount of the credit note.
           */
          total: number;
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
 * Type of CHASER's CHASER_GET_CUSTOMERS tool input.
 */
type CHASER_GET_CUSTOMERS_INPUT = object;

/**
 * Type of CHASER's CHASER_GET_CUSTOMERS tool output.
 */
type CHASER_GET_CUSTOMERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Customers
       * @description List of all customers associated with the organization.
       */
      customers: {
          /**
           * Address
           * @description Customer address as displayed in Chaser statements.
           * @default null
           */
          Address: string | null;
          /**
           * Company Name
           * @description Name of the customer's company.
           */
          "Company Name": string;
          /**
           * Contact Email Address
           * @description Email address of the contact person for reminders.
           */
          "Contact Email Address": string;
          /**
           * Contact First Name
           * @description First name of the contact person who receives reminders.
           */
          "Contact First Name": string;
          /**
           * Contact Last Name
           * @description Last name of the contact person who receives reminders.
           */
          "Contact Last Name": string;
          /**
           * External Id
           * @description Unique identifier for the customer from the source system. Must be unique per customer.
           */
          ExternalID: string;
          /**
           * Mobile Number
           * @description Customer's mobile number with country code, e.g., +447261928377.
           * @default null
           */
          "Mobile number": string | null;
          /**
           * Phone Number
           * @description Customer's phone number. May include country code.
           * @default null
           */
          "Phone number": string | null;
          /**
           * Status
           * @description Customer visibility status in Chaser. ACTIVE means visible; ACHIEVED means archived/invisible.
           * @enum {string}
           */
          Status: "ACTIVE" | "ACHIEVED";
          /**
           * Tags
           * @description List of tags categorizing the customer in Chaser.
           * @default null
           */
          Tags: string[] | null;
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
 * Type of CHASER's CHASER_GET_CUSTOMER_BY_ID tool input.
 */
type CHASER_GET_CUSTOMER_BY_ID_INPUT = {
  /**
   * External Id
   * @description The unique external (source system) ID of the customer.
   */
  external_id?: string;
};

/**
 * Type of CHASER's CHASER_GET_CUSTOMER_BY_ID tool output.
 */
type CHASER_GET_CUSTOMER_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Customer address as displayed in Chaser statements.
       * @default null
       */
      Address: string | null;
      /**
       * Company Name
       * @description Name of the customer's company.
       */
      "Company Name": string;
      /**
       * Contact Email Address
       * Format: email
       * @description Email address of the contact person for reminders.
       */
      "Contact Email Address": string;
      /**
       * Contact First Name
       * @description First name of the contact person who receives reminders.
       */
      "Contact First Name": string;
      /**
       * Contact Last Name
       * @description Last name of the contact person who receives reminders.
       */
      "Contact Last Name": string;
      /**
       * External Id
       * @description Unique identifier for the customer from the source system.
       */
      ExternalID: string;
      /**
       * Mobile Number
       * @description Customer's mobile number with country code, e.g., +447261928377.
       * @default null
       */
      "Mobile number": string | null;
      /**
       * Phone Number
       * @description Customer's phone number. May include country code.
       * @default null
       */
      "Phone number": string | null;
      /**
       * Status
       * @description Customer visibility status in Chaser. ACTIVE means visible; ACHIEVED means archived/invisible.
       * @enum {string}
       */
      Status: "ACTIVE" | "ACHIEVED";
      /**
       * Tags
       * @description List of tags categorizing the customer in Chaser.
       * @default null
       */
      Tags: string[] | null;
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
 * Type of CHASER's CHASER_GET_ORGANIZATION tool input.
 */
type CHASER_GET_ORGANIZATION_INPUT = object;

/**
 * Type of CHASER's CHASER_GET_ORGANIZATION tool output.
 */
type CHASER_GET_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description Array of organization records.
   */
  data?: {
      /**
       * Base Currency
       * @description ISO 4217 currency code for the organization.
       */
      base_currency: string;
      /**
       * Country Code
       * @description ISO 3166-1 alpha-2 country code where the organization is registered.
       */
      country_code: string;
      /**
       * Id
       * @description Unique internal identifier for the organization.
       */
      id: string;
      /**
       * Last Sync Date
       * Format: date-time
       * @description Timestamp (ISO 8601) of the last successful data sync for this organization.
       */
      last_sync_date: string;
      /**
       * Legal Name
       * @description Registered legal name of the organization.
       */
      legal_name: string;
      /**
       * Name
       * @description Public-facing name of the organization.
       */
      name: string;
      /**
       * Organisation Id
       * @description External identifier for the organization.
       */
      organisation_id: string;
      /**
       * Timezone
       * @description IANA timezone string configured for the organization.
       */
      timezone: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Object
   * @description Response object type, e.g. 'list'.
   */
  object?: string;
  /**
   * Page Number
   * @description Current page index (zero-based).
   */
  page_number?: number;
  /**
   * Page Size
   * @description Number of items returned on this page.
   */
  page_size?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Url
   * @description Requested endpoint URL.
   */
  url?: string;
};

/**
 * Type of CHASER's CHASER_POST_CREDIT_NOTE tool input.
 */
type CHASER_POST_CREDIT_NOTE_INPUT = {
  /**
   * Credit Note Id
   * @description Unique identifier for the credit note.
   */
  credit_note_id?: string;
  /**
   * Credit Note Number
   * @description Reference number assigned to the credit note.
   */
  credit_note_number?: string;
  /**
   * Currency Code
   * @description Three-letter ISO currency code of the credit note.
   */
  currency_code?: unknown;
  /**
   * Customer External Id
   * @description External identifier of the customer linked to this credit note.
   */
  customer_external_id?: string;
  /**
   * Date
   * Format: date-time
   * @description ISO 8601 timestamp when the credit note was issued.
   */
  date?: unknown;
  /**
   * Remaining Credit
   * @description Unallocated credit amount remaining on the credit note.
   */
  remaining_credit?: number;
  /**
   * Status
   * @description Status of the credit note. Defaults to ACTIVE.
   * @default ACTIVE
   * @enum {string}
   */
  status: "ACTIVE" | "SUBMITTED" | "AUTHORISED" | "PAID" | "VOIDED" | "DELETED";
  /**
   * Total
   * @description Total amount of the credit note.
   */
  total?: number;
};

/**
 * Type of CHASER's CHASER_POST_CREDIT_NOTE tool output.
 */
type CHASER_POST_CREDIT_NOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Credit Note Id
       * @description Unique identifier for the created credit note.
       */
      credit_note_id: string;
      /**
       * Credit Note Number
       * @description Reference number assigned to the created credit note.
       */
      credit_note_number: string;
      /**
       * Currency
       * @description Three-letter ISO currency code for the credit note.
       */
      currency: string;
      /**
       * Customer External Id
       * @description External identifier of the customer associated with the credit note.
       */
      customer_external_id: string;
      /**
       * Date
       * @description ISO 8601 timestamp when the credit note was issued.
       */
      date: string;
      /**
       * Remaining Credit
       * @description Unallocated credit amount remaining on the created credit note.
       */
      remaining_credit: number;
      /**
       * Status
       * @description Status of the created credit note.
       */
      status: string;
      /**
       * Total
       * @description Total amount of the created credit note.
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
 * Type of CHASER's CHASER_POST_CUSTOMER tool input.
 */
type CHASER_POST_CUSTOMER_INPUT = {
  /**
   * Addresses
   * @description List of addresses to display on statements
   * @default null
   */
  addresses: {
      /**
       * Address Line1
       * @description Address line 1
       * @default null
       */
      address_line1: string | null;
      /**
       * Address Line2
       * @description Address line 2
       * @default null
       */
      address_line2: string | null;
      /**
       * Address Line3
       * @description Address line 3
       * @default null
       */
      address_line3: string | null;
      /**
       * Address Line4
       * @description Address line 4
       * @default null
       */
      address_line4: string | null;
      /**
       * Address Type
       * @description Address type
       * @default POBOX
       * @enum {string}
       */
      address_type: "POBOX" | "Unknown" | "Delivery" | "Billing";
      /**
       * City
       * @description City name
       * @default null
       */
      city: string | null;
      /**
       * Country
       * @description Country name or code
       * @default null
       */
      country: string | null;
      /**
       * Postal Code
       * @description Postal code
       * @default null
       */
      postal_code: string | null;
      /**
       * Region
       * @description Region or state
       * @default null
       */
      region: string | null;
  }[] | null;
  /**
   * Company Name
   * @description Name of the company for display in Chaser
   */
  company_name?: string;
  /**
   * Contact Email Address
   * Format: email
   * @description Email address to receive Chaser reminders
   * @default null
   */
  contact_email_address: string | null;
  /**
   * Contact First Name
   * @description Contact person's first name
   * @default null
   */
  contact_first_name: string | null;
  /**
   * Contact Last Name
   * @description Contact person's last name
   * @default null
   */
  contact_last_name: string | null;
  /**
   * External Id
   * @description Unique external (source system) ID for the customer
   */
  external_id?: string;
  /**
   * Groups
   * @description List of customer group objects
   * @default null
   */
  groups: {
      /**
       * Id
       * @description Chaser internal group ID (nullable)
       * @default null
       */
      id: string | null;
      /**
       * Name
       * @description Group name
       */
      name: string;
      /**
       * Status
       * @description Group status: ACTIVE or ARCHIVED
       * @default ACTIVE
       * @enum {string}
       */
      status: "ACTIVE" | "ARCHIVED";
  }[] | null;
  /**
   * Mobile Number
   * @description Mobile number (include country code)
   * @default null
   */
  mobile_number: string | null;
  /**
   * Phone Number
   * @description Main phone number
   * @default null
   */
  phone_number: string | null;
  /**
   * Status
   * @description Customer visibility status (ACTIVE or ARCHIVED)
   * @default ACTIVE
   * @enum {string}
   */
  status: "ACTIVE" | "ARCHIVED";
};

/**
 * Type of CHASER's CHASER_POST_CUSTOMER tool output.
 */
type CHASER_POST_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Created customer details
   */
  data?: {
      /**
       * Addresses
       * @description List of customer addresses
       */
      addresses: {
          /**
           * Address Line1
           * @description Address line 1
           * @default null
           */
          address_line1: string | null;
          /**
           * Address Line2
           * @description Address line 2
           * @default null
           */
          address_line2: string | null;
          /**
           * Address Line3
           * @description Address line 3
           * @default null
           */
          address_line3: string | null;
          /**
           * Address Line4
           * @description Address line 4
           * @default null
           */
          address_line4: string | null;
          /**
           * Address Type
           * @description Address type
           * @default POBOX
           * @enum {string}
           */
          address_type: "POBOX" | "Unknown" | "Delivery" | "Billing";
          /**
           * City
           * @description City name
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Country name or code
           * @default null
           */
          country: string | null;
          /**
           * Postal Code
           * @description Postal code
           * @default null
           */
          postal_code: string | null;
          /**
           * Region
           * @description Region or state
           * @default null
           */
          region: string | null;
      }[];
      /**
       * Company Name
       * @description Company name
       */
      company_name: string;
      /**
       * Contact Email Address
       * Format: email
       * @description Contact email address
       * @default null
       */
      contact_email_address: string | null;
      /**
       * Contact First Name
       * @description Contact first name
       * @default null
       */
      contact_first_name: string | null;
      /**
       * Contact Last Name
       * @description Contact last name
       * @default null
       */
      contact_last_name: string | null;
      /**
       * External Id
       * @description External customer ID
       */
      external_id: string;
      /**
       * Groups
       * @description List of customer groups
       */
      groups: {
          /**
           * Id
           * @description Chaser internal group ID (nullable)
           * @default null
           */
          id: string | null;
          /**
           * Name
           * @description Group name
           */
          name: string;
          /**
           * Status
           * @description Group status: ACTIVE or ARCHIVED
           * @default ACTIVE
           * @enum {string}
           */
          status: "ACTIVE" | "ARCHIVED";
      }[];
      /**
       * Id
       * @description Chaser internal customer ID
       */
      id: string;
      /**
       * Mobile Number
       * @description Mobile number
       * @default null
       */
      mobile_number: string | null;
      /**
       * Payment Portal Link
       * @description Payment portal link URL
       * @default null
       */
      payment_portal_link: string | null;
      /**
       * Phone Number
       * @description Phone number
       * @default null
       */
      phone_number: string | null;
      /**
       * Status
       * @description Customer status
       * @enum {string}
       */
      status: "ACTIVE" | "ARCHIVED";
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Object
   * @description Response object type
   */
  object?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Url
   * @description URL of the created resource
   */
  url?: string;
};

/**
 * Type of CHASER's CHASER_PUT_CUSTOMER tool input.
 */
type CHASER_PUT_CUSTOMER_INPUT = {
  /**
   * Company Name
   * @description Name of the company associated with the customer
   * @default null
   */
  companyName: string | null;
  /**
   * Contact Email Address
   * @description Email address of the primary contact
   * @default null
   */
  contactEmailAddress: string | null;
  /**
   * Contact First Name
   * @description First name of the primary contact
   * @default null
   */
  contactFirstName: string | null;
  /**
   * Contact Last Name
   * @description Last name of the primary contact
   * @default null
   */
  contactLastName: string | null;
  /**
   * External Id
   * @description The unique external identifier of the customer to update
   */
  externalID?: string;
  /**
   * Mobile Number
   * @description Mobile number including country code (e.g., +447261928377)
   * @default null
   */
  mobileNumber: string | null;
  /**
   * Phone Number
   * @description The phone number of the customer
   * @default null
   */
  phoneNumber: string | null;
  /**
   * Status
   * @description Customer status; either 'ACTIVE' or 'ARCHIVED'
   * @default null
   * @enum {string|null}
   */
  status: "ACTIVE" | "ARCHIVED" | null;
};

/**
 * Type of CHASER's CHASER_PUT_CUSTOMER tool output.
 */
type CHASER_PUT_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Company Name
       * @default null
       */
      companyName: string | null;
      /**
       * Contact Email Address
       * @default null
       */
      contactEmailAddress: string | null;
      /**
       * Contact First Name
       * @default null
       */
      contactFirstName: string | null;
      /**
       * Contact Last Name
       * @default null
       */
      contactLastName: string | null;
      /**
       * External Id
       * @description The unique external identifier of the customer
       */
      externalID: string;
      /**
       * Mobile Number
       * @default null
       */
      mobileNumber: string | null;
      /**
       * Phone Number
       * @default null
       */
      phoneNumber: string | null;
      /**
       * Status
       * @description Customer status
       * @default null
       */
      status: string | null;
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
 * Type of CHASER's CHASER_PUT_INVOICE tool input.
 */
type CHASER_PUT_INVOICE_INPUT = {
  /**
   * Amount Due
   * @description Remaining balance due
   * @default null
   */
  amount_due: number | null;
  /**
   * Amount Paid
   * @description Total amount paid
   * @default null
   */
  amount_paid: number | null;
  /**
   * Currency Code
   * @description ISO-4217 currency code, e.g., 'USD'
   * @default null
   */
  currency_code: string | null;
  /**
   * Customer External Id
   * @description External ID of the customer to associate
   * @default null
   */
  customer_external_id: string | null;
  /**
   * Date
   * @description Invoice issue date in ISO 8601 format
   * @default null
   */
  date: string | null;
  /**
   * Due Date
   * @description Payment due date in ISO 8601 format
   * @default null
   */
  due_date: string | null;
  /**
   * Fully Paid Date
   * @description Date the invoice was fully paid in ISO 8601 format
   * @default null
   */
  fully_paid_date: string | null;
  /**
   * Invoice Id
   * @description Unique identifier of the invoice to update
   */
  invoice_id?: string;
  /**
   * Invoice Number
   * @description Reference number assigned to the invoice
   * @default null
   */
  invoice_number: string | null;
  /**
   * Payments
   * @description List of payments applied to the invoice
   * @default null
   */
  payments: {
      /**
       * Amount
       * @description Amount of the payment
       */
      amount: number;
      /**
       * Date
       * @description Payment date in ISO 8601 format
       */
      date: string;
  }[] | null;
  /**
   * Status
   * @description Invoice status
   * @default null
   * @enum {string|null}
   */
  status: "DRAFT" | "SUBMITTED" | "AUTHORISED" | "PAID" | "VOIDED" | "DELETED" | null;
  /**
   * Sub Total
   * @description Subtotal before tax
   * @default null
   */
  sub_total: number | null;
  /**
   * Total
   * @description Total invoice amount
   * @default null
   */
  total: number | null;
};

/**
 * Type of CHASER's CHASER_PUT_INVOICE tool output.
 */
type CHASER_PUT_INVOICE_OUTPUT = {
  /** Data */
  data?: {
      /** Amount Due */
      amount_due: number;
      /** Amount Paid */
      amount_paid: number;
      /** Currency Code */
      currency_code: string;
      /** Customer External Id */
      customer_external_id: string;
      /** Date */
      date: string;
      /** Due Date */
      due_date: string;
      /** Fully Paid Date */
      fully_paid_date: string | null;
      /** Id */
      id: string;
      /** Invoice Id */
      invoice_id: string;
      /** Invoice Number */
      invoice_number: string;
      /** Invoice Pdf Link */
      invoice_pdf_link: string | null;
      /** Invoice Pdf Link Updated At */
      invoice_pdf_link_updated_at: string;
      /** Payments */
      payments: {
          /**
           * Amount
           * @description Amount of the payment
           */
          amount: number;
          /**
           * Date
           * @description Payment date in ISO 8601 format
           */
          date: string;
      }[];
      /**
       * Status
       * @enum {string}
       */
      status: "DRAFT" | "SUBMITTED" | "AUTHORISED" | "PAID" | "VOIDED" | "DELETED";
      /** Sub Total */
      sub_total: number;
      /** Total */
      total: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /** Object */
  object?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /** Url */
  url?: string;
};

/**
 * Type map of all available tool input types for toolkit "CHASER".
 */
export type CHASER_TOOL_INPUTS = {
  CREATE_INVOICE: CHASER_CREATE_INVOICE_INPUT
  GET_CREDIT_NOTES: CHASER_GET_CREDIT_NOTES_INPUT
  GET_CUSTOMERS: CHASER_GET_CUSTOMERS_INPUT
  GET_CUSTOMER_BY_ID: CHASER_GET_CUSTOMER_BY_ID_INPUT
  GET_ORGANIZATION: CHASER_GET_ORGANIZATION_INPUT
  POST_CREDIT_NOTE: CHASER_POST_CREDIT_NOTE_INPUT
  POST_CUSTOMER: CHASER_POST_CUSTOMER_INPUT
  PUT_CUSTOMER: CHASER_PUT_CUSTOMER_INPUT
  PUT_INVOICE: CHASER_PUT_INVOICE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CHASER".
 */
export type CHASER_TOOL_OUTPUTS = {
  CREATE_INVOICE: CHASER_CREATE_INVOICE_OUTPUT
  GET_CREDIT_NOTES: CHASER_GET_CREDIT_NOTES_OUTPUT
  GET_CUSTOMERS: CHASER_GET_CUSTOMERS_OUTPUT
  GET_CUSTOMER_BY_ID: CHASER_GET_CUSTOMER_BY_ID_OUTPUT
  GET_ORGANIZATION: CHASER_GET_ORGANIZATION_OUTPUT
  POST_CREDIT_NOTE: CHASER_POST_CREDIT_NOTE_OUTPUT
  POST_CUSTOMER: CHASER_POST_CUSTOMER_OUTPUT
  PUT_CUSTOMER: CHASER_PUT_CUSTOMER_OUTPUT
  PUT_INVOICE: CHASER_PUT_INVOICE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CHASER toolkit.
 */
export const CHASER = {
  slug: "chaser",
  tools: {
    /**
     * Tool to create a new invoice record in the organization. use after ensuring the customer exists in chaser.
     */
    CREATE_INVOICE: "CHASER_CREATE_INVOICE",
    /**
     * Tool to retrieve a list of credit notes. use after authenticating this detail.
     */
    GET_CREDIT_NOTES: "CHASER_GET_CREDIT_NOTES",
    /**
     * Tool to retrieve a list of all customers associated with the organization. use when you need to display or process complete customer contact and status information.
     */
    GET_CUSTOMERS: "CHASER_GET_CUSTOMERS",
    /**
     * Tool to retrieve details for a specific customer by their external (source system) id. use after obtaining the external id when you need specific customer information.
     */
    GET_CUSTOMER_BY_ID: "CHASER_GET_CUSTOMER_BY_ID",
    /**
     * Tool to retrieve information about the connected organizations. use when you need organization ids, currency, timezone, or legal details before other operations.
     */
    GET_ORGANIZATION: "CHASER_GET_ORGANIZATION",
    /**
     * Tool to create a new credit note record in the organization. use after confirming invoice adjustments.
     */
    POST_CREDIT_NOTE: "CHASER_POST_CREDIT_NOTE",
    /**
     * Tool to create a new customer record in chaser. use after obtaining basic auth credentials.
     */
    POST_CUSTOMER: "CHASER_POST_CUSTOMER",
    /**
     * Tool to update an existing customer's information using their unique externalid. use after confirming the customer's externalid. e.g., "update contactemailaddress for externalid cust abc123."
     */
    PUT_CUSTOMER: "CHASER_PUT_CUSTOMER",
    /**
     * Tool to update an existing invoice's information using its unique identifier. use after confirming the invoice exists when you need to modify fields like status, amounts, or dates.
     */
    PUT_INVOICE: "CHASER_PUT_INVOICE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CHASER".
 */
export type CHASER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CHASER".
 */
export type CHASER_TRIGGER_EVENTS = {}
