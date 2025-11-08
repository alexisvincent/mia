// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ELORUS's ELORUS_CREATE_INVOICE tool input.
 */
type ELORUS_CREATE_INVOICE_INPUT = {
  /**
   * Client Id
   * @description ID of the client, e.g., '42'
   */
  client_id?: string;
  /**
   * Contact Address Id
   * @description Alternate client address ID
   * @default null
   */
  contact_address_id: string | null;
  /**
   * Currency Id
   * @description ID of the currency to use, e.g., '1'
   */
  currency_id?: string;
  /**
   * Discount
   * @description Invoice-level discount amount, must be non-negative
   * @default null
   */
  discount: number | null;
  /**
   * Document Number
   * @description Custom document number override
   * @default null
   */
  document_number: string | null;
  /**
   * Issue Date
   * @description ISO-8601 date when invoice is issued, e.g., '2023-01-01'
   */
  issue_date?: string;
  /**
   * Items
   * @description Line items for the invoice
   */
  items?: {
      /**
       * Description
       * @description Longer line description
       * @default null
       */
      description: string | null;
      /**
       * Discount
       * @description Line-level discount amount, must be non-negative
       * @default null
       */
      discount: number | null;
      /**
       * Name
       * @description Item name or description
       */
      name: string;
      /**
       * Quantity
       * @description Quantity, must be non-negative
       */
      quantity: number;
      /**
       * Tax Id
       * @description ID of the tax rate to apply
       * @default null
       */
      tax_id: string | null;
      /**
       * Unit Price
       * @description Price per unit, must be non-negative
       */
      unit_price: number;
  }[];
  /**
   * Kind
   * @description Invoice type; one of 'invoice' or 'receipt'
   * @enum {string}
   */
  kind?: "invoice" | "receipt";
  /**
   * Notes
   * @description Internal or client-facing notes
   * @default null
   */
  notes: string | null;
  /**
   * Payable Date
   * @description Due date (ISO-8601), e.g., '2023-02-01'
   * @default null
   */
  payable_date: string | null;
  /**
   * Series Id
   * @description Series identifier, e.g., '3'
   */
  series_id?: string;
  /**
   * Tags
   * @description List of tag labels
   * @default null
   */
  tags: string[] | null;
};

/**
 * Type of ELORUS's ELORUS_CREATE_INVOICE tool output.
 */
type ELORUS_CREATE_INVOICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Amount
       * @description Total amount after taxes and discounts
       */
      amount: number;
      /**
       * Client Id
       * @description Client's ID
       */
      client_id: string;
      /**
       * Contact Address Id
       * @description Alternate client address ID
       * @default null
       */
      contact_address_id: string | null;
      /**
       * Creation Date
       * @description Timestamp of resource creation
       */
      creation_date: string;
      /**
       * Currency Id
       * @description Currency ID used
       */
      currency_id: string;
      /**
       * Discount
       * @description Invoice-level discount applied
       * @default null
       */
      discount: number | null;
      /**
       * Document Number
       * @description Document number
       */
      document_number: string;
      /**
       * Id
       * @description Unique identifier for the invoice
       */
      id: string;
      /**
       * Issue Date
       * @description The issue date of the invoice
       */
      issue_date: string;
      /**
       * Items
       * @description List of line items with details
       */
      items: {
          /**
           * Description
           * @description Line description
           * @default null
           */
          description: string | null;
          /**
           * Discount
           * @description Line-level discount applied
           * @default null
           */
          discount: number | null;
          /**
           * Id
           * @description Unique identifier for the line item
           */
          id: string;
          /**
           * Name
           * @description Item name or description
           */
          name: string;
          /**
           * Quantity
           * @description Quantity of items
           */
          quantity: number;
          /**
           * Tax Id
           * @description Applied tax ID
           * @default null
           */
          tax_id: string | null;
          /**
           * Total
           * @description Total price for this line after calculations
           */
          total: number;
          /**
           * Unit Price
           * @description Price per unit
           */
          unit_price: number;
      }[];
      /**
       * Kind
       * @description Invoice type
       */
      kind: string;
      /**
       * Notes
       * @description Notes on the invoice
       * @default null
       */
      notes: string | null;
      /**
       * Payable Date
       * @description Due date of the invoice
       * @default null
       */
      payable_date: string | null;
      /**
       * Series Id
       * @description Series ID used for the document
       */
      series_id: string;
      /**
       * Status
       * @description Invoice status, e.g., 'draft', 'sent'
       */
      status: string;
      /**
       * Tags
       * @description List of tag labels
       * @default null
       */
      tags: string[] | null;
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
 * Type of ELORUS's ELORUS_CREATE_PRODUCT tool input.
 */
type ELORUS_CREATE_PRODUCT_INPUT = {
  /**
   * Code
   * @description Product code (internal reference).
   * @default null
   */
  code: string | null;
  /**
   * Description
   * @description Product description.
   * @default null
   */
  description: string | null;
  /**
   * Is Active
   * @description Whether the product is active.
   * @default null
   */
  is_active: boolean | null;
  /**
   * Name
   * @description Product name.
   */
  name?: string;
  /**
   * Price
   * @description Product price (tax exclusive).
   * @default null
   */
  price: number | null;
  /**
   * Sku
   * @description Stock keeping unit.
   * @default null
   */
  sku: string | null;
  /**
   * Tax Category Id
   * @description Tax category ID.
   * @default null
   */
  tax_category_id: number | null;
  /**
   * Type
   * @description Product type.
   * @enum {string}
   */
  type?: "item" | "service";
};

/**
 * Type of ELORUS's ELORUS_CREATE_PRODUCT tool output.
 */
type ELORUS_CREATE_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Product code.
       * @default null
       */
      code: string | null;
      /**
       * Created At
       * @description Creation timestamp (ISO 8601).
       */
      created_at: string;
      /**
       * Description
       * @description Product description.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier for the product.
       */
      id: number;
      /**
       * Is Active
       * @description Indicates if the product is active.
       */
      is_active: boolean;
      /**
       * Name
       * @description Product name.
       */
      name: string;
      /**
       * Price
       * @description Product price (tax exclusive).
       */
      price: number;
      /**
       * Sku
       * @description Stock keeping unit.
       * @default null
       */
      sku: string | null;
      /**
       * Tax Category Id
       * @description Tax category ID.
       * @default null
       */
      tax_category_id: number | null;
      /**
       * Type
       * @description Product type.
       */
      type: string;
      /**
       * Updated At
       * @description Last update timestamp (ISO 8601).
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
 * Type of ELORUS's ELORUS_EMAIL_INVOICE tool input.
 */
type ELORUS_EMAIL_INVOICE_INPUT = {
  /**
   * Bcc
   * @description Optional list of email addresses to BCC on the invoice email
   * @default null
   */
  bcc: string[] | null;
  /**
   * Cc
   * @description Optional list of email addresses to CC on the invoice email
   * @default null
   */
  cc: string[] | null;
  /**
   * Contacts
   * @description List of contact IDs to send the invoice email to
   */
  contacts?: number[];
  /**
   * Email Body
   * @description Body text for the invoice email
   */
  email_body?: string;
  /**
   * Email Subject
   * @description Subject line for the invoice email
   */
  email_subject?: string;
  /**
   * Invoice Id
   * @description ID of the invoice to send via email
   */
  invoice_id?: number;
};

/**
 * Type of ELORUS's ELORUS_EMAIL_INVOICE tool output.
 */
type ELORUS_EMAIL_INVOICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description ID of the invoice that was emailed
       */
      id: string;
      /**
       * Status
       * @description Status of the email job, e.g., 'queued'
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
 * Type of ELORUS's ELORUS_GET_BILLS tool input.
 */
type ELORUS_GET_BILLS_INPUT = {
  /**
   * Due Date  Gte
   * @description Filter bills due on or after this date (ISO 8601)
   * @default null
   */
  due_date__gte: string | null;
  /**
   * Due Date  Lte
   * @description Filter bills due on or before this date (ISO 8601)
   * @default null
   */
  due_date__lte: string | null;
  /**
   * Issued At  Gte
   * @description Filter bills issued on or after this date (ISO 8601)
   * @default null
   */
  issued_at__gte: string | null;
  /**
   * Issued At  Lte
   * @description Filter bills issued on or before this date (ISO 8601)
   * @default null
   */
  issued_at__lte: string | null;
  /**
   * Page
   * @description Page number to retrieve, must be >= 1
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page, must be between 1 and 100
   * @default null
   */
  page_size: number | null;
  /**
   * Search
   * @description Search term to filter bills
   * @default null
   */
  search: string | null;
  /**
   * Status
   * @description Filter by bill status
   * @default null
   * @enum {string|null}
   */
  status: "issued" | "paid" | "overdue" | "void" | null;
  /**
   * Supplier
   * @description Filter by supplier ID
   * @default null
   */
  supplier: string | null;
};

/**
 * Type of ELORUS's ELORUS_GET_BILLS tool output.
 */
type ELORUS_GET_BILLS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of bills matching the filter
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of bill summaries returned for the current page
       */
      results: {
          /**
           * Amount
           * @description Total amount of the bill
           */
          amount: number;
          /**
           * Due Date
           * @description Date when the bill is due (ISO 8601)
           */
          due_date: string;
          /**
           * Id
           * @description Unique identifier of the bill
           */
          id: string;
          /**
           * Issued At
           * @description Date when the bill was issued (ISO 8601)
           */
          issued_at: string;
          /**
           * Status
           * @description Current status of the bill
           * @enum {string}
           */
          status: "issued" | "paid" | "overdue" | "void";
          /**
           * Supplier
           * @description Identifier of the supplier
           */
          supplier: string;
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
 * Type of ELORUS's ELORUS_GET_CONTACTS tool input.
 */
type ELORUS_GET_CONTACTS_INPUT = {
  /**
   * Contact Ids
   * @description List of contact IDs to filter (will be comma-separated).
   * @default null
   */
  contact_ids: number[] | null;
  /**
   * Custom Fields
   * @description Filter by custom fields; map each custom field ID to a value. E.g., {'42': 'Gold member'} => custom_fields[42]=Gold member.
   * @default null
   */
  custom_fields: {
      [key: string]: string;
  } | null;
  /**
   * Is Company
   * @description Filter by contact type: true=company, false=individual.
   * @default null
   */
  is_company: boolean | null;
  /**
   * Items Per Page
   * @description Number of results per page (maximum 200).
   * @default null
   */
  items_per_page: number | null;
  /**
   * Order By
   * @description Field to sort by (e.g., 'name', 'created').
   * @default null
   */
  order_by: string | null;
  /**
   * Page
   * @description Results page number (minimum 1).
   * @default null
   */
  page: number | null;
  /**
   * Search
   * @description Full-text search across name, code, VAT, etc.
   * @default null
   */
  search: string | null;
  /**
   * Show Archived
   * @description Include archived contacts when true.
   * @default null
   */
  show_archived: boolean | null;
  /**
   * Sort Order
   * @description Sort direction: 'asc' or 'desc'.
   * @default null
   * @enum {string|null}
   */
  sort_order: "asc" | "desc" | null;
  /**
   * Statuses
   * @description Filter by status values (e.g., ['active','archived']).
   * @default null
   */
  statuses: string[] | null;
};

/**
 * Type of ELORUS's ELORUS_GET_CONTACTS tool output.
 */
type ELORUS_GET_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of contacts found
       */
      count: number;
      /**
       * Next
       * @description URL to next page of results
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to previous page of results
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of contacts matching the query
       */
      results: {
          /**
           * Address
           * @description Street address of the contact
           * @default null
           */
          address: string | null;
          /**
           * City
           * @description City of the contact
           * @default null
           */
          city: string | null;
          /**
           * Code
           * @description Assigned contact code
           * @default null
           */
          code: string | null;
          /**
           * Comments
           * @description Additional notes about the contact
           * @default null
           */
          comments: string | null;
          /**
           * ContactPerson
           * @description Nested contact person details
           * @default null
           */
          contact_person: {
              /**
               * Email
               * @description Email of the contact person
               * @default null
               */
              email: string | null;
              /**
               * Mobile
               * @description Mobile phone number of the contact person
               * @default null
               */
              mobile: string | null;
              /**
               * Name
               * @description Full name of the contact person
               * @default null
               */
              name: string | null;
              /**
               * Phone
               * @description Phone number of the contact person
               * @default null
               */
              phone: string | null;
              /**
               * Position
               * @description Job title or position of the contact person
               * @default null
               */
              position: string | null;
              /**
               * Skype
               * @description Skype username of the contact person
               * @default null
               */
              skype: string | null;
          } | null;
          /**
           * Contact Type
           * @description Type of contact
           * @enum {string}
           */
          contact_type: "client" | "supplier" | "client_and_supplier";
          /**
           * Country
           * @description ISO 3166-1 alpha-2 country code of the contact
           * @default null
           */
          country: string | null;
          /**
           * Creation Date
           * @description ISO timestamp when the contact was created
           */
          creation_date: string;
          /**
           * Currency Id
           * @description Default currency ID of the contact
           */
          currency_id: string;
          /**
           * Email
           * @description Email address of the contact
           * @default null
           */
          email: string | null;
          /**
           * Fax
           * @description Fax number of the contact
           * @default null
           */
          fax: string | null;
          /**
           * Id
           * @description Unique identifier of the contact
           */
          id: string;
          /**
           * Is Active
           * @description Whether the contact is active
           */
          is_active: boolean;
          /**
           * Name
           * @description Name of the contact
           */
          name: string;
          /**
           * Phone
           * @description Phone number of the contact
           * @default null
           */
          phone: string | null;
          /**
           * State
           * @description State or region of the contact
           * @default null
           */
          state: string | null;
          /**
           * Tax Authority
           * @description Issuing tax authority of the contact
           * @default null
           */
          tax_authority: string | null;
          /**
           * Tax Number
           * @description Tax identification number of the contact
           * @default null
           */
          tax_number: string | null;
          /**
           * Update Date
           * @description ISO timestamp when the contact was last updated
           * @default null
           */
          update_date: string | null;
          /**
           * Website
           * @description Website URL of the contact
           * @default null
           */
          website: string | null;
          /**
           * Zip
           * @description Postal / ZIP code of the contact
           * @default null
           */
          zip: string | null;
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
 * Type of ELORUS's ELORUS_GET_CREDIT_NOTES tool input.
 */
type ELORUS_GET_CREDIT_NOTES_INPUT = {
  /**
   * Contact
   * @description Filter results by contact ID
   * @default null
   */
  contact: number | null;
  /**
   * Currency
   * @description Filter results by ISO 4217 currency code
   * @default null
   */
  currency: string | null;
  /**
   * Issued On  Gte
   * @description Only include credit notes issued on or after this date (YYYY-MM-DD)
   * @default null
   */
  issued_on__gte: string | null;
  /**
   * Issued On  Lte
   * @description Only include credit notes issued on or before this date (YYYY-MM-DD)
   * @default null
   */
  issued_on__lte: string | null;
  /**
   * Page
   * @description Page number to return, must be >= 1
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of results per page, must be >= 1
   * @default null
   */
  page_size: number | null;
};

/**
 * Type of ELORUS's ELORUS_GET_CREDIT_NOTES tool output.
 */
type ELORUS_GET_CREDIT_NOTES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of matching credit notes
       */
      count: number;
      /**
       * Next
       * @description URL for next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL for previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of credit notes returned
       */
      results: {
          /**
           * Contact
           * @description Embedded contact details
           */
          contact: {
              /**
               * Id
               * @description Contact ID associated with the credit note
               */
              id: string;
              /**
               * Name
               * @description Contact name associated with the credit note
               */
              name: string;
          };
          /**
           * Currency
           * @description Currency code (ISO 4217)
           */
          currency: string;
          /**
           * Due On
           * @description Due date in YYYY-MM-DD format
           */
          due_on: string;
          /**
           * Id
           * @description Credit note ID
           */
          id: string;
          /**
           * Issued On
           * @description Issue date in YYYY-MM-DD format
           */
          issued_on: string;
          /**
           * Number
           * @description Credit note number
           */
          number: string;
          /**
           * Status
           * @description Status of the credit note, e.g., draft or finalized
           */
          status: string;
          /**
           * Total
           * @description Total amount of the credit note
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
 * Type of ELORUS's ELORUS_GET_EMAIL_TEMPLATES tool input.
 */
type ELORUS_GET_EMAIL_TEMPLATES_INPUT = {
  /**
   * Page
   * @description Page number to retrieve; defaults to first page if omitted
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of templates per page; defaults to server-side default if omitted
   * @default null
   */
  page_size: number | null;
};

/**
 * Type of ELORUS's ELORUS_GET_EMAIL_TEMPLATES tool output.
 */
type ELORUS_GET_EMAIL_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of email templates available
       */
      count: number;
      /**
       * Next
       * @description URL for the next page of results
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL for the previous page of results
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of email template objects
       */
      results: {
          /**
           * Body
           * @description Body content of the email template
           */
          body: string;
          /**
           * Created
           * @description Timestamp when the template was created (ISO 8601)
           */
          created: string;
          /**
           * Id
           * @description Unique identifier of the template
           */
          id: string;
          /**
           * Name
           * @description Name of the email template
           */
          name: string;
          /**
           * Subject
           * @description Subject line of the email template
           */
          subject: string;
          /**
           * Updated
           * @description Timestamp when the template was last updated (ISO 8601)
           */
          updated: string;
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
 * Type of ELORUS's ELORUS_GET_ESTIMATES tool input.
 */
type ELORUS_GET_ESTIMATES_INPUT = {
  /**
   * Page
   * @description Page number to retrieve, must be >= 1
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page, must be between 1 and 100
   * @default null
   */
  page_size: number | null;
};

/**
 * Type of ELORUS's ELORUS_GET_ESTIMATES tool output.
 */
type ELORUS_GET_ESTIMATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of estimates matching the filter
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of estimate summaries returned for current page
       */
      results: {
          /**
           * Contact
           * @description Identifier of the contact associated with the estimate
           */
          contact: string;
          /**
           * Date
           * @description Date when the estimate was created (ISO 8601)
           */
          date: string;
          /**
           * Id
           * @description Unique identifier of the estimate
           */
          id: string;
          /**
           * Number
           * @description Estimate number
           */
          number: string;
          /**
           * Status
           * @description Current status of the estimate
           */
          status: string;
          /**
           * Total
           * @description Total amount of the estimate
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
 * Type of ELORUS's ELORUS_GET_INVOICES tool input.
 */
type ELORUS_GET_INVOICES_INPUT = {
  /**
   * Contact
   * @description Filter by contact ID
   * @default null
   */
  contact: string | null;
  /**
   * Currency
   * @description Filter by ISO currency code, e.g., 'USD'
   * @default null
   */
  currency: string | null;
  /**
   * Due Date  Gte
   * @description Filter invoices due on or after this date (ISO 8601)
   * @default null
   */
  due_date__gte: string | null;
  /**
   * Due Date  Lte
   * @description Filter invoices due on or before this date (ISO 8601)
   * @default null
   */
  due_date__lte: string | null;
  /**
   * Issue Date  Gte
   * @description Filter invoices issued on or after this date (ISO 8601)
   * @default null
   */
  issue_date__gte: string | null;
  /**
   * Issue Date  Lte
   * @description Filter invoices issued on or before this date (ISO 8601)
   * @default null
   */
  issue_date__lte: string | null;
  /**
   * Number
   * @description Filter by invoice number
   * @default null
   */
  number: string | null;
  /**
   * Ordering
   * @description Field to sort by (prefix with '-' for descending), e.g., '-due_date'
   * @default null
   */
  ordering: string | null;
  /**
   * Page
   * @description Page number to retrieve, must be >= 1
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page, must be between 1 and 100
   * @default null
   */
  page_size: number | null;
  /**
   * Status
   * @description Filter by invoice status
   * @default null
   * @enum {string|null}
   */
  status: "draft" | "issued" | "paid" | "cancelled" | null;
  /**
   * Tags
   * @description Comma-separated tags to filter by, e.g., 'urgent,consulting'
   * @default null
   */
  tags: string | null;
};

/**
 * Type of ELORUS's ELORUS_GET_INVOICES tool output.
 */
type ELORUS_GET_INVOICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of invoices matching the filter
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of invoice summaries returned for current page
       */
      results: {
          /**
           * Amount
           * @description Total amount of the invoice
           */
          amount: number;
          /**
           * Contact
           * @description Identifier of the contact associated with the invoice
           */
          contact: string;
          /**
           * Due Date
           * @description Date when the invoice is due (ISO 8601)
           */
          due_date: string;
          /**
           * Id
           * @description Unique identifier of the invoice
           */
          id: string;
          /**
           * Issue Date
           * @description Date when the invoice was issued (ISO 8601)
           */
          issue_date: string;
          /**
           * Number
           * @description Invoice number
           */
          number: string;
          /**
           * Status
           * @description Current status of the invoice
           * @enum {string}
           */
          status: "draft" | "issued" | "paid" | "cancelled";
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
 * Type of ELORUS's ELORUS_GET_PRODUCTS tool input.
 */
type ELORUS_GET_PRODUCTS_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of fields to include in the response, e.g. 'id,name,price'
   * @default null
   */
  fields: string | null;
  /**
   * Filter
   * @description Filter by matching code or name (partial, case-insensitive)
   * @default null
   */
  filter: string | null;
  /**
   * Limit
   * @description Number of items per page, must be >= 1
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number to retrieve, must be >= 1
   * @default null
   */
  page: number | null;
  /**
   * Sort
   * @description Field to sort by; prefix with '-' for descending, e.g. '-name'
   * @default null
   */
  sort: string | null;
};

/**
 * Type of ELORUS's ELORUS_GET_PRODUCTS tool output.
 */
type ELORUS_GET_PRODUCTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of products matching the filter
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of products returned for the current page
       */
      results: {
          /**
           * Code
           * @description Product code
           * @default null
           */
          code: string | null;
          /**
           * Description
           * @description Product description
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the product
           */
          id: string;
          /**
           * Name
           * @description Product name
           * @default null
           */
          name: string | null;
          /**
           * Price
           * @description Product price
           * @default null
           */
          price: number | null;
          /**
           * Status
           * @description Product status
           * @default null
           */
          status: string | null;
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
 * Type of ELORUS's ELORUS_GET_TAXES tool input.
 */
type ELORUS_GET_TAXES_INPUT = {
  /**
   * Page
   * @description Page number to retrieve, must be >= 1
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page, must be between 1 and 100
   * @default null
   */
  per_page: number | null;
  /**
   * Q
   * @description Search query to filter taxes
   * @default null
   */
  q: string | null;
};

/**
 * Type of ELORUS's ELORUS_GET_TAXES tool output.
 */
type ELORUS_GET_TAXES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of taxes matching the filter
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of taxes returned for the current page
       */
      results: {
          /**
           * Archived
           * @description Whether the tax is archived
           */
          archived: boolean;
          /**
           * Code
           * @description Tax code
           */
          code: string;
          /**
           * Country
           * @description ISO 3166-1 alpha-2 country code
           */
          country: string;
          /**
           * Created At
           * @description Creation datetime (ISO 8601)
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the tax
           */
          id: number;
          /**
           * Name
           * @description Name of the tax
           */
          name: string;
          /**
           * Rate
           * @description Tax rate as a percentage
           */
          rate: number;
          /**
           * Type
           * @description Type of tax, either inclusive or exclusive
           * @enum {string}
           */
          type: "inclusive" | "exclusive";
          /**
           * Updated At
           * @description Last update datetime (ISO 8601)
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
 * Type of ELORUS's ELORUS_GET_TEMPLATES tool input.
 */
type ELORUS_GET_TEMPLATES_INPUT = {
  /**
   * Page
   * @description Page number of results to fetch (must be >= 1)
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page (1–200)
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of ELORUS's ELORUS_GET_TEMPLATES tool output.
 */
type ELORUS_GET_TEMPLATES_OUTPUT = {
  /**
   * Current Page
   * @description Current page number
   */
  current_page?: number;
  /**
   * Data
   * @description List of document templates
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the template
       */
      id: number;
      /**
       * Is Default
       * @description Indicates if this is the default template
       */
      is_default: boolean;
      /**
       * Name
       * @description Name of the template
       */
      name: string;
      /**
       * Type
       * @description Type of the template
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
   * From Index
   * @description Index of first item in current page
   */
  from_index?: number;
  /**
   * Last Page
   * @description Last available page number
   */
  last_page?: number;
  /**
   * Next Page Url
   * @description URL to next page of results, if any
   * @default null
   */
  next_page_url: string | null;
  /**
   * Per Page
   * @description Number of results per page returned
   */
  per_page?: number;
  /**
   * Prev Page Url
   * @description URL to previous page of results, if any
   * @default null
   */
  prev_page_url: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * To
   * @description Index of last item in current page
   */
  to?: number;
  /**
   * Total
   * @description Total number of templates available
   */
  total?: number;
};

/**
 * Type of ELORUS's ELORUS_UPDATE_CONTACT tool input.
 */
type ELORUS_UPDATE_CONTACT_INPUT = {
  /**
   * Address
   * @description Street address of the contact
   * @default null
   */
  address: string | null;
  /**
   * City
   * @description City of the contact
   * @default null
   */
  city: string | null;
  /**
   * Code
   * @description Unique code for the contact
   * @default null
   */
  code: string | null;
  /**
   * Contact Persons
   * @description List of contact persons for the contact
   * @default null
   */
  contact_persons: {
      /**
       * Email
       * @description Email address of the contact person
       * @default null
       */
      email: string | null;
      /**
       * Mobile
       * @description Mobile phone number of the contact person
       * @default null
       */
      mobile: string | null;
      /**
       * Name
       * @description Full name of the contact person
       * @default null
       */
      name: string | null;
      /**
       * Phone
       * @description Phone number of the contact person
       * @default null
       */
      phone: string | null;
      /**
       * Position
       * @description Job title or position of the contact person
       * @default null
       */
      position: string | null;
      /**
       * Skype
       * @description Skype username of the contact person
       * @default null
       */
      skype: string | null;
  }[] | null;
  /**
   * Country Id
   * @description Identifier of the contact's country
   * @default null
   */
  country_id: number | null;
  /**
   * Currency Id
   * @description Identifier of the contact's preferred currency
   * @default null
   */
  currency_id: number | null;
  /**
   * Email
   * @description Email address of the contact
   * @default null
   */
  email: string | null;
  /**
   * Id
   * @description Unique identifier of the contact to update
   */
  id?: number;
  /**
   * Name
   * @description Contact's name
   * @default null
   */
  name: string | null;
  /**
   * Notes
   * @description Additional notes about the contact
   * @default null
   */
  notes: string | null;
  /**
   * Phone
   * @description Phone number of the contact
   * @default null
   */
  phone: string | null;
  /**
   * Postal Code
   * @description Postal / ZIP code of the contact
   * @default null
   */
  postal_code: string | null;
  /**
   * Tax Number
   * @description Contact's tax number
   * @default null
   */
  tax_number: string | null;
  /**
   * Tax Office
   * @description Contact's tax office
   * @default null
   */
  tax_office: string | null;
  /**
   * Vat Status
   * @description VAT status; either 'registered' or 'not_registered'
   * @default null
   * @enum {string|null}
   */
  vat_status: "registered" | "not_registered" | null;
};

/**
 * Type of ELORUS's ELORUS_UPDATE_CONTACT tool output.
 */
type ELORUS_UPDATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Street address of the contact
       * @default null
       */
      address: string | null;
      /**
       * City
       * @description City of the contact
       * @default null
       */
      city: string | null;
      /**
       * Code
       * @description Contact's code
       * @default null
       */
      code: string | null;
      /**
       * Contact Persons
       * @description List of contact persons for the contact
       * @default null
       */
      contact_persons: {
          /**
           * Email
           * @description Email address of the contact person
           * @default null
           */
          email: string | null;
          /**
           * Mobile
           * @description Mobile phone number of the contact person
           * @default null
           */
          mobile: string | null;
          /**
           * Name
           * @description Full name of the contact person
           * @default null
           */
          name: string | null;
          /**
           * Phone
           * @description Phone number of the contact person
           * @default null
           */
          phone: string | null;
          /**
           * Position
           * @description Job title or position of the contact person
           * @default null
           */
          position: string | null;
          /**
           * Skype
           * @description Skype username of the contact person
           * @default null
           */
          skype: string | null;
      }[] | null;
      /**
       * Country Id
       * @description Identifier of the contact's country
       * @default null
       */
      country_id: number | null;
      /**
       * Created
       * @description ISO 8601 timestamp when the contact was created
       * @default null
       */
      created: string | null;
      /**
       * Currency Id
       * @description Identifier of the contact's preferred currency
       * @default null
       */
      currency_id: number | null;
      /**
       * Email
       * @description Contact's email address
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description Unique identifier of the contact
       */
      id: number;
      /**
       * Name
       * @description Contact's name
       * @default null
       */
      name: string | null;
      /**
       * Notes
       * @description Additional notes about the contact
       * @default null
       */
      notes: string | null;
      /**
       * Phone
       * @description Contact's phone number
       * @default null
       */
      phone: string | null;
      /**
       * Postal Code
       * @description Postal / ZIP code of the contact
       * @default null
       */
      postal_code: string | null;
      /**
       * Tax Number
       * @description Contact's tax number
       * @default null
       */
      tax_number: string | null;
      /**
       * Tax Office
       * @description Contact's tax office
       * @default null
       */
      tax_office: string | null;
      /**
       * Updated
       * @description ISO 8601 timestamp when the contact was last updated
       * @default null
       */
      updated: string | null;
      /**
       * Vat Status
       * @description VAT status of the contact
       * @default null
       */
      vat_status: string | null;
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
 * Type map of all available tool input types for toolkit "ELORUS".
 */
export type ELORUS_TOOL_INPUTS = {
  CREATE_INVOICE: ELORUS_CREATE_INVOICE_INPUT
  CREATE_PRODUCT: ELORUS_CREATE_PRODUCT_INPUT
  EMAIL_INVOICE: ELORUS_EMAIL_INVOICE_INPUT
  GET_BILLS: ELORUS_GET_BILLS_INPUT
  GET_CONTACTS: ELORUS_GET_CONTACTS_INPUT
  GET_CREDIT_NOTES: ELORUS_GET_CREDIT_NOTES_INPUT
  GET_EMAIL_TEMPLATES: ELORUS_GET_EMAIL_TEMPLATES_INPUT
  GET_ESTIMATES: ELORUS_GET_ESTIMATES_INPUT
  GET_INVOICES: ELORUS_GET_INVOICES_INPUT
  GET_PRODUCTS: ELORUS_GET_PRODUCTS_INPUT
  GET_TAXES: ELORUS_GET_TAXES_INPUT
  GET_TEMPLATES: ELORUS_GET_TEMPLATES_INPUT
  UPDATE_CONTACT: ELORUS_UPDATE_CONTACT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ELORUS".
 */
export type ELORUS_TOOL_OUTPUTS = {
  CREATE_INVOICE: ELORUS_CREATE_INVOICE_OUTPUT
  CREATE_PRODUCT: ELORUS_CREATE_PRODUCT_OUTPUT
  EMAIL_INVOICE: ELORUS_EMAIL_INVOICE_OUTPUT
  GET_BILLS: ELORUS_GET_BILLS_OUTPUT
  GET_CONTACTS: ELORUS_GET_CONTACTS_OUTPUT
  GET_CREDIT_NOTES: ELORUS_GET_CREDIT_NOTES_OUTPUT
  GET_EMAIL_TEMPLATES: ELORUS_GET_EMAIL_TEMPLATES_OUTPUT
  GET_ESTIMATES: ELORUS_GET_ESTIMATES_OUTPUT
  GET_INVOICES: ELORUS_GET_INVOICES_OUTPUT
  GET_PRODUCTS: ELORUS_GET_PRODUCTS_OUTPUT
  GET_TAXES: ELORUS_GET_TAXES_OUTPUT
  GET_TEMPLATES: ELORUS_GET_TEMPLATES_OUTPUT
  UPDATE_CONTACT: ELORUS_UPDATE_CONTACT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ELORUS toolkit.
 */
export const ELORUS = {
  slug: "elorus",
  tools: {
    /**
     * Tool to create a new invoice. use after gathering all invoice details.
     */
    CREATE_INVOICE: "ELORUS_CREATE_INVOICE",
    /**
     * Tool to create a new product or service in elorus. use when you need to add or configure items/services in your product catalog.
     */
    CREATE_PRODUCT: "ELORUS_CREATE_PRODUCT",
    /**
     * Tool to email an existing invoice to specified contacts. use after generating an invoice and obtaining contact ids.
     */
    EMAIL_INVOICE: "ELORUS_EMAIL_INVOICE",
    /**
     * Tool to retrieve a list of bills. use when you need to list bills with optional filters after creation.
     */
    GET_BILLS: "ELORUS_GET_BILLS",
    /**
     * Tool to retrieve a list of contacts. use after authentication to fetch contacts in batches. example: 'list page 2 of active company contacts sorted by name.'
     */
    GET_CONTACTS: "ELORUS_GET_CONTACTS",
    /**
     * Tool to retrieve a list of credit notes. use when you need to fetch credit notes filtered by page, contact, date range, or currency.
     */
    GET_CREDIT_NOTES: "ELORUS_GET_CREDIT_NOTES",
    /**
     * Tool to retrieve a list of email templates. use when you need to fetch and page through existing templates in the organization.
     */
    GET_EMAIL_TEMPLATES: "ELORUS_GET_EMAIL_TEMPLATES",
    /**
     * Tool to retrieve a list of estimates. use when you need to list estimates with pagination after creation.
     */
    GET_ESTIMATES: "ELORUS_GET_ESTIMATES",
    /**
     * Tool to retrieve a list of invoices. use when you need to list invoices with filtering and pagination options.
     */
    GET_INVOICES: "ELORUS_GET_INVOICES",
    /**
     * Tool to retrieve a list of products/services with optional filtering, sorting, and pagination. use when you need to fetch products for reports, ui lists, or inventory management.
     */
    GET_PRODUCTS: "ELORUS_GET_PRODUCTS",
    /**
     * Tool to retrieve a list of taxes. use after authentication to list taxes with optional filters.
     */
    GET_TAXES: "ELORUS_GET_TAXES",
    /**
     * Tool to retrieve a list of document templates. use when you need to list and paginate available templates.
     */
    GET_TEMPLATES: "ELORUS_GET_TEMPLATES",
    /**
     * Tool to update an existing contact by id. use when you need to modify contact details after retrieving current information.
     */
    UPDATE_CONTACT: "ELORUS_UPDATE_CONTACT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ELORUS".
 */
export type ELORUS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ELORUS".
 */
export type ELORUS_TRIGGER_EVENTS = {}
