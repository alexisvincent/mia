// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of XERO's XERO_GET_CONNECTIONS tool input.
 */
type XERO_GET_CONNECTIONS_INPUT = object;

/**
 * Type of XERO's XERO_GET_CONNECTIONS tool output.
 */
type XERO_GET_CONNECTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Auth Event Id
       * @description Identifier for the authentication event that established the connection.
       */
      authEventId: string;
      /**
       * Created Date Utc
       * @description UTC timestamp when the connection was created.
       */
      createdDateUtc: string;
      /**
       * Id
       * @description Unique identifier for the connection.
       */
      id: string;
      /**
       * Tenant Id
       * @description Unique identifier for the tenant (organisation) in Xero.
       */
      tenantId: string;
      /**
       * Tenant Name
       * @description Name of the tenant organisation.
       */
      tenantName: string;
      /**
       * Tenant Type
       * @description Type of tenant, e.g., 'ORGANISATION'.
       */
      tenantType: string;
      /**
       * Updated Date Utc
       * @description UTC timestamp when the connection was last updated.
       */
      updatedDateUtc: string;
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
 * Type of XERO's XERO_GET_CONTACTS tool input.
 */
type XERO_GET_CONTACTS_INPUT = {
  /**
   * Contact Id
   * @description Xero ContactID. If provided, fetches a single contact at /Contacts/{ContactID}.
   * @default null
   */
  ContactID: string | null;
  /**
   * I Ds
   * @description Comma-separated list of ContactIDs to filter by.
   * @default null
   */
  IDs: string[] | null;
  /**
   * If Modified Since
   * Format: date-time
   * @description UTC timestamp (YYYY-MM-DDThh:mm:ss) to set as the If-Modified-Since header; returns only contacts created or modified since this timestamp.
   * @default null
   */
  "If-Modified-Since": string | null;
  /**
   * Include Archived
   * @description Include archived contacts when true.
   * @default null
   */
  includeArchived: boolean | null;
  /**
   * Order
   * @description Sort by field, e.g. UpdatedDateUTC DESC.
   * @default null
   */
  order: string | null;
  /**
   * Page
   * @description Page number for paginated results (requires pageSize).
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of contacts per page (requires page).
   * @default null
   */
  pageSize: number | null;
  /**
   * Search Term
   * @description Case-insensitive search across Name, FirstName, LastName, ContactNumber, CompanyNumber, EmailAddress.
   * @default null
   */
  searchTerm: string | null;
  /**
   * Summary Only
   * @description Return a lightweight summary-only response when true.
   * @default null
   */
  summaryOnly: boolean | null;
  /**
   * Where
   * @description OData-style filter on optimised fields, e.g. Name="ABC".
   * @default null
   */
  where: string | null;
};

/**
 * Type of XERO's XERO_GET_CONTACTS tool output.
 */
type XERO_GET_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of contacts returned.
       */
      Contacts: {
          /**
           * Accounts Payable Tax Type
           * @description Default AP tax type.
           * @default null
           */
          AccountsPayableTaxType: string | null;
          /**
           * Accounts Receivable Tax Type
           * @description Default AR tax type.
           * @default null
           */
          AccountsReceivableTaxType: string | null;
          /**
           * Addresses
           * @description List of addresses.
           * @default null
           */
          Addresses: {
              /**
               * Address Line1
               * @description First line of address.
               * @default null
               */
              AddressLine1: string | null;
              /**
               * Address Type
               * @description Type of address.
               */
              AddressType: string;
              /**
               * Attention To
               * @description Attention to person name.
               * @default null
               */
              AttentionTo: string | null;
              /**
               * City
               * @description City name.
               * @default null
               */
              City: string | null;
              /**
               * Postal Code
               * @description Postal or ZIP code.
               * @default null
               */
              PostalCode: string | null;
          }[] | null;
          /**
           * Bank Account Details
           * @description Bank account details.
           * @default null
           */
          BankAccountDetails: string | null;
          /**
           * Company Number
           * @description Company registration number.
           * @default null
           */
          CompanyNumber: string | null;
          /**
           * Contact Id
           * @description Xero identifier.
           */
          ContactID: string;
          /**
           * Contact Status
           * @description Status of the contact.
           * @default null
           */
          ContactStatus: string | null;
          /**
           * Default Currency
           * @description Default currency code.
           * @default null
           */
          DefaultCurrency: string | null;
          /**
           * Email Address
           * @description Contact email.
           * @default null
           */
          EmailAddress: string | null;
          /**
           * First Name
           * @description First name.
           * @default null
           */
          FirstName: string | null;
          /**
           * Is Customer
           * @description True if contact is customer.
           * @default null
           */
          IsCustomer: boolean | null;
          /**
           * Is Supplier
           * @description True if contact is supplier.
           * @default null
           */
          IsSupplier: boolean | null;
          /**
           * Last Name
           * @description Last name.
           * @default null
           */
          LastName: string | null;
          /**
           * Name
           * @description Full name of the contact or organization.
           * @default null
           */
          Name: string | null;
          /**
           * Phones
           * @description List of phone numbers.
           * @default null
           */
          Phones: {
              /**
               * Phone Area Code
               * @description Area code.
               * @default null
               */
              PhoneAreaCode: string | null;
              /**
               * Phone Country Code
               * @description Country code.
               * @default null
               */
              PhoneCountryCode: string | null;
              /**
               * Phone Number
               * @description Phone number.
               * @default null
               */
              PhoneNumber: string | null;
              /**
               * Phone Type
               * @description Type of phone.
               */
              PhoneType: string;
          }[] | null;
          /**
           * Tax Number
           * @description Tax number (VAT/ABN/GST).
           * @default null
           */
          TaxNumber: string | null;
          /**
           * Updated Date Utc
           * Format: date-time
           * @description UTC timestamp of last update.
           * @default null
           */
          UpdatedDateUTC: string | null;
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
 * Type of XERO's XERO_GET_QUOTES tool input.
 */
type XERO_GET_QUOTES_INPUT = {
  /**
   * Contact Id
   * @description Filter for quotes belonging to a particular contact by ContactID.
   * @default null
   */
  ContactID: string | null;
  /**
   * Date From
   * Format: date
   * @description Filter for quotes on or after this date (YYYY-MM-DD).
   * @default null
   */
  DateFrom: string | null;
  /**
   * Date To
   * Format: date
   * @description Filter for quotes on or before this date (YYYY-MM-DD).
   * @default null
   */
  DateTo: string | null;
  /**
   * Expiry Date From
   * Format: date
   * @description Filter for quotes expiring on or after this date (YYYY-MM-DD).
   * @default null
   */
  ExpiryDateFrom: string | null;
  /**
   * Expiry Date To
   * Format: date
   * @description Filter for quotes expiring on or before this date (YYYY-MM-DD).
   * @default null
   */
  ExpiryDateTo: string | null;
  /**
   * If Modified Since
   * @description Only return quotes modified after this UTC timestamp in RFC3339 format.
   * @default null
   */
  "If-Modified-Since": string | null;
  /**
   * Quote Number
   * @description Filter by quote number.
   * @default null
   */
  QuoteNumber: string | null;
  /**
   * Status
   * @description Filter for quotes of a particular status.
   * @default null
   */
  Status: string | null;
  /**
   * Order
   * @description Order by any element, e.g., ExpiryDate ASC.
   * @default null
   */
  order: string | null;
  /**
   * Page
   * @description Page number for paginated results (1-based).
   * @default null
   */
  page: number | null;
  /**
   * Xero Tenant Id
   * @description Xero Tenant ID header. Required to identify which organization's quotes to retrieve.
   */
  "xero-tenant-id"?: string;
};

/**
 * Type of XERO's XERO_GET_QUOTES tool output.
 */
type XERO_GET_QUOTES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Quotes
       * @description List of quotes returned.
       */
      Quotes: {
          /**
           * Branding Theme Id
           * @description Branding theme identifier.
           * @default null
           */
          BrandingThemeID: string | null;
          /**
           * Contact
           * @description Contact associated with the quote.
           */
          Contact: {
              /**
               * Contact Id
               * @description Unique identifier for the contact.
               */
              ContactID: string;
              /**
               * Name
               * @description Name of the contact.
               * @default null
               */
              Name: string | null;
          };
          /**
           * Currency Code
           * @description Currency code for the quote.
           * @default null
           */
          CurrencyCode: string | null;
          /**
           * Currency Rate
           * @description Currency rate for the quote.
           * @default null
           */
          CurrencyRate: number | null;
          /**
           * Date
           * Format: date
           * @description Date of the quote.
           */
          Date: string;
          /**
           * Expiry Date
           * Format: date
           * @description Expiry date of the quote.
           */
          ExpiryDate: string;
          /**
           * Line Amount Types
           * @description Line amount types setting.
           * @default null
           */
          LineAmountTypes: string | null;
          /**
           * Line Items
           * @description Line items on the quote.
           */
          LineItems: {
              /**
               * Account Code
               * @description Account code for the line item.
               * @default null
               */
              AccountCode: string | null;
              /**
               * Description
               * @description Description of the line item.
               * @default null
               */
              Description: string | null;
              /**
               * Discount Rate
               * @description Discount rate applied to the line item.
               * @default null
               */
              DiscountRate: number | null;
              /**
               * Item Code
               * @description Item code for the line item.
               * @default null
               */
              ItemCode: string | null;
              /**
               * Line Amount
               * @description Line amount (UnitAmount * Quantity minus discounts).
               * @default null
               */
              LineAmount: number | null;
              /**
               * Line Item Id
               * @description Unique identifier for the line item.
               * @default null
               */
              LineItemID: string | null;
              /**
               * Quantity
               * @description Quantity of the items.
               * @default null
               */
              Quantity: number | null;
              /**
               * Tax Amount
               * @description Tax amount for the line item.
               * @default null
               */
              TaxAmount: number | null;
              /**
               * Tax Type
               * @description Tax type applied to the line item.
               * @default null
               */
              TaxType: string | null;
              /**
               * Tracking
               * @description Tracking categories applied to the line item.
               * @default null
               */
              Tracking: {
                  /**
                   * Name
                   * @description Name of the tracking category.
                   * @default null
                   */
                  Name: string | null;
                  /**
                   * Option
                   * @description Selected tracking option.
                   * @default null
                   */
                  Option: string | null;
                  /**
                   * Tracking Category Id
                   * @description Unique identifier for the tracking category.
                   */
                  TrackingCategoryID: string;
                  /**
                   * Tracking Option Id
                   * @description Unique identifier for the tracking option.
                   */
                  TrackingOptionID: string;
              }[] | null;
              /**
               * Unit Amount
               * @description Unit amount for the line item.
               * @default null
               */
              UnitAmount: number | null;
          }[];
          /**
           * Quote Id
           * @description Unique identifier for the quote.
           */
          QuoteID: string;
          /**
           * Quote Number
           * @description Quote number.
           * @default null
           */
          QuoteNumber: string | null;
          /**
           * Reference
           * @description Reference for the quote.
           * @default null
           */
          Reference: string | null;
          /**
           * Status
           * @description Status of the quote.
           */
          Status: string;
          /**
           * Sub Total
           * @description Subtotal amount.
           * @default null
           */
          SubTotal: number | null;
          /**
           * Summary
           * @description Summary of the quote.
           * @default null
           */
          Summary: string | null;
          /**
           * Terms
           * @description Terms of the quote.
           * @default null
           */
          Terms: string | null;
          /**
           * Title
           * @description Title of the quote.
           * @default null
           */
          Title: string | null;
          /**
           * Total
           * @description Total amount.
           * @default null
           */
          Total: number | null;
          /**
           * Total Discount
           * @description Total discount amount.
           * @default null
           */
          TotalDiscount: number | null;
          /**
           * Total Tax
           * @description Total tax amount.
           * @default null
           */
          TotalTax: number | null;
          /**
           * Updated Date Utc
           * Format: date-time
           * @description Last updated UTC timestamp.
           * @default null
           */
          UpdatedDateUTC: string | null;
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
 * Type of XERO's XERO_POST_INVOICE_UPDATE tool input.
 */
type XERO_POST_INVOICE_UPDATE_INPUT = {
  /**
   * Invoice Id
   * @description Unique identifier (UUID) of the invoice.
   * @default null
   */
  InvoiceID: string | null;
  /**
   * Invoice Number
   * @description Invoice number identifier.
   * @default null
   */
  InvoiceNumber: string | null;
  /**
   * Invoices
   * @description List containing invoice update definitions (one item).
   */
  Invoices?: {
      /**
       * Branding Theme Id
       * @description Branding theme identifier.
       * @default null
       */
      BrandingThemeID: string | null;
      /**
       * ContactUpdate
       * @description Contact reference for updating an invoice.
       * @default null
       */
      Contact: {
          /**
           * Contact Id
           * @description Xero identifier for the contact.
           */
          ContactID: string;
      } | null;
      /**
       * Currency Code
       * @description Currency code (3-letter).
       * @default null
       */
      CurrencyCode: string | null;
      /**
       * Currency Rate
       * @description Currency exchange rate.
       * @default null
       */
      CurrencyRate: number | null;
      /**
       * Date
       * @description Issue date for the invoice (YYYY-MM-DD).
       * @default null
       */
      Date: string | null;
      /**
       * Due Date
       * @description Due date for the invoice (YYYY-MM-DD).
       * @default null
       */
      DueDate: string | null;
      /**
       * Expected Payment Date
       * @description Expected payment date (YYYY-MM-DD).
       * @default null
       */
      ExpectedPaymentDate: string | null;
      /**
       * Invoice Number
       * @description Invoice number identifier (if using number path).
       * @default null
       */
      InvoiceNumber: string | null;
      /**
       * Line Amount Types
       * @description Line amount calculation method.
       * @default null
       * @enum {string|null}
       */
      LineAmountTypes: "Exclusive" | "Inclusive" | "NoTax" | null;
      /**
       * Line Items
       * @description Line items for the invoice.
       * @default null
       */
      LineItems: {
          /**
           * Account Code
           * @description Account code for the line item.
           * @default null
           */
          AccountCode: string | null;
          /**
           * Description
           * @description Description of the line item.
           * @default null
           */
          Description: string | null;
          /**
           * Discount Amount
           * @description Discount amount for the line item.
           * @default null
           */
          DiscountAmount: number | null;
          /**
           * Discount Rate
           * @description Discount rate (%) for the line item.
           * @default null
           */
          DiscountRate: number | null;
          /**
           * Line Item Id
           * @description Xero identifier for the line item. Include to update existing items.
           * @default null
           */
          LineItemID: string | null;
          /**
           * Quantity
           * @description Quantity of the line item.
           * @default null
           */
          Quantity: number | null;
          /**
           * Tax Type
           * @description Tax type for the line item.
           * @default null
           */
          TaxType: string | null;
          /**
           * Tracking
           * @description Tracking categories for the line item.
           * @default null
           */
          Tracking: {
              /**
               * Name
               * @description Name of the tracking category.
               */
              Name: string;
              /**
               * Option
               * @description Tracking option name.
               */
              Option: string;
          }[] | null;
          /**
           * Unit Amount
           * @description Unit amount for the line item.
           * @default null
           */
          UnitAmount: number | null;
      }[] | null;
      /**
       * Planned Payment Date
       * @description Planned payment date (YYYY-MM-DD).
       * @default null
       */
      PlannedPaymentDate: string | null;
      /**
       * Sent To Contact
       * @description Mark invoice as sent to contact.
       * @default null
       */
      SentToContact: boolean | null;
      /**
       * Status
       * @description New status for the invoice.
       * @default null
       * @enum {string|null}
       */
      Status: "DRAFT" | "SUBMITTED" | "AUTHORISED" | "DELETED" | "VOIDED" | null;
      /**
       * Url
       * @description Reference URL for the invoice.
       * @default null
       */
      Url: string | null;
  }[];
  /**
   * Unitdp
   * @description Number of decimal places for unit amounts.
   * @default null
   */
  unitdp: number | null;
};

/**
 * Type of XERO's XERO_POST_INVOICE_UPDATE tool output.
 */
type XERO_POST_INVOICE_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Invoices
       * @description List of updated invoices.
       */
      Invoices: {
          [key: string]: unknown;
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
 * Type map of all available tool input types for toolkit "XERO".
 */
export type XERO_TOOL_INPUTS = {
  GET_CONNECTIONS: XERO_GET_CONNECTIONS_INPUT
  GET_CONTACTS: XERO_GET_CONTACTS_INPUT
  GET_QUOTES: XERO_GET_QUOTES_INPUT
  POST_INVOICE_UPDATE: XERO_POST_INVOICE_UPDATE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "XERO".
 */
export type XERO_TOOL_OUTPUTS = {
  GET_CONNECTIONS: XERO_GET_CONNECTIONS_OUTPUT
  GET_CONTACTS: XERO_GET_CONTACTS_OUTPUT
  GET_QUOTES: XERO_GET_QUOTES_OUTPUT
  POST_INVOICE_UPDATE: XERO_POST_INVOICE_UPDATE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's XERO toolkit.
 */
export const XERO = {
  slug: "xero",
  tools: {
    /**
     * Tool to list active xero connections. use when you need to retrieve all current tenant connections for the authenticated user.
     */
    GET_CONNECTIONS: "XERO_GET_CONNECTIONS",
    /**
     * Tool to retrieve a list of contacts. use when you need up-to-date contact information with filtering, paging, or incremental updates.
     */
    GET_CONTACTS: "XERO_GET_CONTACTS",
    /**
     * Tool to retrieve a list of quotes. use when you need to list, filter, or page through sales quotes. use after obtaining the tenant id via connections.
     */
    GET_QUOTES: "XERO_GET_QUOTES",
    /**
     * Tool to update an existing invoice. use when you need to modify the details of an invoice after it's been created.
     */
    POST_INVOICE_UPDATE: "XERO_POST_INVOICE_UPDATE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "XERO".
 */
export type XERO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "XERO".
 */
export type XERO_TRIGGER_EVENTS = {}
