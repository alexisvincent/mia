// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FIRMAO's FIRMAO_CREATE_INVOICE tool input.
 */
type FIRMAO_CREATE_INVOICE_INPUT = {
  /**
   * Auto Number
   * @description Let system assign invoice number automatically
   * @default null
   */
  autoNumber: boolean | null;
  /**
   * Calculate From Gross
   * @description If true, calculate netto values from brutto
   * @default null
   */
  calculateFromGross: boolean | null;
  /**
   * Create New Customer If Needed
   * @description Auto-create customer if they do not exist
   * @default null
   */
  createNewCustomerIfNeeded: boolean | null;
  /**
   * Currency
   * @description Invoice currency code, e.g., 'PLN'
   */
  currency?: string;
  /**
   * Customer
   * @description Existing customer ID (if not creating new customer)
   * @default null
   */
  customer: number | null;
  /**
   * CustomerAddress
   * @description Address object for the customer on this invoice
   * @default null
   */
  customerAddress: {
      /**
       * City
       * @description City
       * @default null
       */
      city: string | null;
      /**
       * Country
       * @description Country
       * @default null
       */
      country: string | null;
      /**
       * Post Code
       * @description Postal code
       * @default null
       */
      postCode: string | null;
      /**
       * Street
       * @description Street and number
       * @default null
       */
      street: string | null;
  } | null;
  /**
   * Customer Name
   * @description Name for new customer (if auto-creating)
   * @default null
   */
  customerName: string | null;
  /**
   * Emails
   * @description List of emails for new customer
   * @default null
   */
  emails: string[] | null;
  /**
   * Invoice Annotations
   * @description Free-text annotation or note on the invoice
   * @default null
   */
  invoiceAnnotations: string | null;
  /**
   * Invoice Date
   * Format: date
   * @description Invoice issue date (YYYY-MM-DD)
   */
  invoiceDate?: string;
  /**
   * Invoice Pattern Id
   * @description Numbering series identifier
   * @default null
   */
  invoicePatternId: number | null;
  /**
   * Issuing Person
   * @description Person responsible for issuing this invoice
   * @default null
   */
  issuingPerson: string | null;
  /**
   * Mode
   * @description Document mode; 'SALE' for sales invoices
   * @default SALE
   * @enum {string}
   */
  mode: "SALE" | "PURCHASE";
  /**
   * Organization Id
   * @description Firmao Organization ID used as path parameter
   */
  organization_id?: string;
  /**
   * Paid
   * @description Whether the invoice is already paid
   * @default null
   */
  paid: boolean | null;
  /**
   * Paid Value
   * @description Amount already paid
   * @default null
   */
  paidValue: number | null;
  /**
   * Payment Date
   * Format: date
   * @description Payment/due date (YYYY-MM-DD)
   * @default null
   */
  paymentDate: string | null;
  /**
   * Payment Type
   * @description Payment method, e.g., 'CASH' or 'TRANSFER'
   * @default null
   */
  paymentType: string | null;
  /**
   * Phones
   * @description List of phone numbers for new customer
   * @default null
   */
  phones: string[] | null;
  /**
   * Rest Of Paid Value
   * @description Remaining amount due
   * @default null
   */
  restOfPaidValue: number | null;
  /**
   * Split Payment
   * @description Flag for split payment (if applicable)
   * @default null
   */
  splitPayment: boolean | null;
  /**
   * Transaction Brutto Price
   * @description Total gross amount of the invoice
   */
  transactionBruttoPrice?: number;
  /**
   * Transaction Date
   * Format: date
   * @description Accounting date for the transaction (YYYY-MM-DD)
   */
  transactionDate?: string;
  /**
   * Transaction Entries
   * @description List of invoice line items
   */
  transactionEntries?: {
      /**
       * Classification Number
       * @description Product classification code
       */
      classificationNumber: string;
      /**
       * Discount
       * @description Discount amount on this line item
       */
      discount: number;
      /**
       * Product
       * @description Existing product ID or free-text product name
       */
      product: number | null;
      /**
       * Product Code
       * @description Internal product code
       */
      productCode: string;
      /**
       * Quantity
       * @description Quantity of items
       */
      quantity: number;
      /**
       * Unit
       * @description Unit of measure for the quantity
       */
      unit: string;
      /**
       * Unit Netto Price
       * @description Net unit price
       */
      unitNettoPrice: number;
      /**
       * Vat Percent
       * @description VAT rate percent
       */
      vatPercent: number;
  }[];
  /**
   * Transaction Netto Price
   * @description Total net amount of the invoice
   */
  transactionNettoPrice?: number;
  /**
   * Transaction Number
   * @description Explicit document number (if not using auto numbering)
   * @default null
   */
  transactionNumber: string | null;
  /**
   * Transaction Vat Price
   * @description Total VAT amount on the invoice
   */
  transactionVatPrice?: number;
  /**
   * Type
   * @description Fixed to 'INVOICE' to create an invoice
   * @default INVOICE
   * @constant
   */
  type: "INVOICE";
};

/**
 * Type of FIRMAO's FIRMAO_CREATE_INVOICE tool output.
 */
type FIRMAO_CREATE_INVOICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Changelog
       * @description List of changelog entries for the created invoice
       */
      changelog: {
          /**
           * Object Class
           * @description Class of the changed object
           */
          objectClass: string;
          /**
           * Object Id
           * @description ID of the created invoice
           */
          objectId: number;
          /**
           * Object Label
           * @description Invoice number or label
           */
          objectLabel: string;
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
 * Type of FIRMAO's FIRMAO_DELETE_COMPANY_SETTING tool input.
 */
type FIRMAO_DELETE_COMPANY_SETTING_INPUT = {
  /**
   * Organization Id
   * @description Firmao organization identifier used in the URL path
   * @default null
   */
  organization_id: string | null;
  /**
   * Setting Id
   * @description Unique identifier of the company setting to delete
   */
  setting_id?: string | null;
};

/**
 * Type of FIRMAO's FIRMAO_DELETE_COMPANY_SETTING tool output.
 */
type FIRMAO_DELETE_COMPANY_SETTING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message returned by the API after deletion
       * @default null
       */
      message: string | null;
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
 * Type of FIRMAO's FIRMAO_DELETE_CONTACT tool input.
 */
type FIRMAO_DELETE_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description Numeric ID of the contact to delete
   */
  contact_id?: number;
  /**
   * Organization Id
   * @description Your organization identifier (found in URL after login)
   */
  organization_id?: string;
};

/**
 * Type of FIRMAO's FIRMAO_DELETE_CONTACT tool output.
 */
type FIRMAO_DELETE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Changelog
       * @description List of change-log entries resulting from the delete operation
       */
      changelog: {
          /**
           * Deleted With
           * @description Source of deletion event
           * @default null
           */
          deletedWith: string | null;
          /**
           * Modification
           * @description Type of modification, e.g. update
           * @default null
           */
          modification: string | null;
          /**
           * New Value Class
           * @description Class of the new value
           * @default null
           */
          newValueClass: string | null;
          /**
           * New Value Display
           * @description Display value of the new value
           * @default null
           */
          newValueDisplay: string | null;
          /**
           * New Value Is Dictionary
           * @description Whether new value is a dictionary
           * @default null
           */
          newValueIsDictionary: boolean | null;
          /**
           * Object Class
           * @description Class of the object
           * @default null
           */
          objectClass: string | null;
          /**
           * Object Id
           * @description ID of the object
           * @default null
           */
          objectId: number | null;
          /**
           * Object Label
           * @description Label of the object
           * @default null
           */
          objectLabel: string | null;
          /**
           * Old Value Class
           * @description Class of the old value
           * @default null
           */
          oldValueClass: string | null;
          /**
           * Old Value Display
           * @description Display value of the old value
           * @default null
           */
          oldValueDisplay: string | null;
          /**
           * Old Value Is Dictionary
           * @description Whether old value is a dictionary
           * @default null
           */
          oldValueIsDictionary: boolean | null;
          /**
           * Property
           * @description Name of the modified property
           * @default null
           */
          property: string | null;
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
 * Type of FIRMAO's FIRMAO_DELETE_INVOICE tool input.
 */
type FIRMAO_DELETE_INVOICE_INPUT = {
  /**
   * Invoice Id
   * @description ID of the invoice (transaction) to delete
   */
  invoice_id?: number;
  /**
   * Organization Id
   * @description Your organization identifier (found in URL after login)
   */
  organization_id?: string;
};

/**
 * Type of FIRMAO's FIRMAO_DELETE_INVOICE tool output.
 */
type FIRMAO_DELETE_INVOICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Changelog
       * @description List of change events for the deletion
       */
      changelog: {
          /**
           * Deleted With
           * @description Source of deletion event
           * @default null
           */
          deletedWith: string | null;
          /**
           * Modification
           * @description Type of modification, e.g. update
           * @default null
           */
          modification: string | null;
          /**
           * New Value Class
           * @description Class of the new value
           * @default null
           */
          newValueClass: string | null;
          /**
           * New Value Display
           * @description Display value of the new value
           * @default null
           */
          newValueDisplay: string | null;
          /**
           * New Value Is Dictionary
           * @description Whether new value is a dictionary
           * @default null
           */
          newValueIsDictionary: boolean | null;
          /**
           * Object Class
           * @description Class of the object
           * @default null
           */
          objectClass: string | null;
          /**
           * Object Id
           * @description ID of the object
           * @default null
           */
          objectId: number | null;
          /**
           * Object Label
           * @description Label of the object
           * @default null
           */
          objectLabel: string | null;
          /**
           * Old Value Class
           * @description Class of the old value
           * @default null
           */
          oldValueClass: string | null;
          /**
           * Old Value Display
           * @description Display value of the old value
           * @default null
           */
          oldValueDisplay: string | null;
          /**
           * Old Value Is Dictionary
           * @description Whether old value is a dictionary
           * @default null
           */
          oldValueIsDictionary: boolean | null;
          /**
           * Property
           * @description Name of the modified property
           * @default null
           */
          property: string | null;
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
 * Type of FIRMAO's FIRMAO_DELETE_OFFER tool input.
 */
type FIRMAO_DELETE_OFFER_INPUT = {
  /**
   * Offer Id
   * @description Numeric ID of the offer to delete.
   */
  offer_id?: number;
  /**
   * Organization Id
   * @description Identifier of the organization (as used in the API URL).
   */
  organization_id?: string;
};

/**
 * Type of FIRMAO's FIRMAO_DELETE_OFFER tool output.
 */
type FIRMAO_DELETE_OFFER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Changelog
       * @description List of changes applied to the offer.
       */
      changelog: {
          /**
           * Modification
           * @description Type of change performed (e.g., 'modify').
           */
          modification: string;
          /**
           * New Value
           * @description New value of the property after deletion.
           */
          newValue: boolean;
          /**
           * Object Class
           * @description Class of the modified object (e.g., 'offer').
           */
          objectClass: string;
          /**
           * Object Id
           * @description ID of the modified object.
           */
          objectId: number;
          /**
           * Old Value
           * @description Previous value of the property before deletion.
           */
          oldValue: boolean;
          /**
           * Property
           * @description Name of the property changed (e.g., 'deleted').
           */
          property: string;
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
 * Type of FIRMAO's FIRMAO_GET_INVOICE tool input.
 */
type FIRMAO_GET_INVOICE_INPUT = {
  /**
   * Invoice Id
   * @description ID of the invoice (transaction) to retrieve
   */
  invoice_id?: number;
  /**
   * Organization Id
   * @description Firmao organization identifier used in the path
   */
  organization_id?: string;
};

/**
 * Type of FIRMAO's FIRMAO_GET_INVOICE tool output.
 */
type FIRMAO_GET_INVOICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created By
       * @description Information about who created the invoice
       */
      createdBy: {
          /**
           * Id
           * @description Creator user ID
           */
          id: number;
          /**
           * Name
           * @description Creator user name
           */
          name: string;
      };
      /**
       * Creation Date
       * Format: date-time
       * @description Record creation timestamp
       */
      creationDate: string;
      /**
       * Currency
       * @description Currency code
       */
      currency: string;
      /**
       * Customer
       * @description Customer summary information
       */
      customer: {
          /**
           * Emails
           * @description List of customer emails
           */
          emails: string[];
          /**
           * Id
           * @description Customer ID
           */
          id: number;
          /**
           * Label
           * @description Customer display name
           */
          label: string;
      };
      /**
       * Customer Address
       * @description Customer address details
       * @default null
       */
      customerAddress: {
          [key: string]: unknown;
      } | null;
      /**
       * Description
       * @description Invoice description or notes
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Transaction (invoice) ID
       */
      id: number;
      /**
       * Invoice Date
       * Format: date
       * @description Invoice issuance date (YYYY-MM-DD)
       */
      invoiceDate: string;
      /**
       * Issuing Person
       * @description Name of the person issuing the invoice
       * @default null
       */
      issuingPerson: string | null;
      /**
       * Last Update Date
       * Format: date-time
       * @description Record last update timestamp
       */
      lastUpdateDate: string;
      /**
       * Mode
       * @description Mode of the transaction, e.g., SALE
       */
      mode: string;
      /**
       * Paid
       * @description Whether the invoice is fully paid
       */
      paid: boolean;
      /**
       * Paid Value
       * @description Amount already paid
       */
      paidValue: number;
      /**
       * Parcel Courier Name
       * @description Courier name for shipment
       * @default null
       */
      parcelCourierName: string | null;
      /**
       * Parcel Number
       * @description Courier parcel number
       * @default null
       */
      parcelNumber: string | null;
      /**
       * Payment Date
       * Format: date
       * @description Payment due or paid date
       * @default null
       */
      paymentDate: string | null;
      /**
       * Payment Status
       * @description Current payment status
       * @default null
       */
      paymentStatus: string | null;
      /**
       * Payment Type
       * @description Invoice payment type
       * @default null
       */
      paymentType: string | null;
      /**
       * Permissions
       * @description Available operations and permissions
       */
      permissions: {
          [key: string]: boolean;
      };
      /**
       * ProjectSummary
       * @description Project basic information
       * @default null
       */
      project: {
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
      } | null;
      /**
       * Rest Of Paid Value
       * @description Remaining unpaid amount
       */
      restOfPaidValue: number;
      /**
       * Tags
       * @description List of tags associated with the invoice
       */
      tags: string[];
      /**
       * TaskSummary
       * @description Task basic information
       * @default null
       */
      task: {
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
      } | null;
      /**
       * Transaction Date
       * Format: date
       * @description Transaction date (YYYY-MM-DD)
       */
      transactionDate: string;
      /**
       * Transaction Gross Price
       * @description Total gross amount
       */
      transactionGrossPrice: number;
      /**
       * Transaction Netto Price
       * @description Total net amount
       */
      transactionNettoPrice: number;
      /**
       * Transaction Number
       * @description Invoice document number
       */
      transactionNumber: string;
      /**
       * Transaction Vat Price
       * @description Total VAT amount
       */
      transactionVatPrice: number;
      /**
       * Type
       * @description Document type, e.g., INVOICE
       */
      type: string;
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
 * Type of FIRMAO's FIRMAO_GET_OFFER tool input.
 */
type FIRMAO_GET_OFFER_INPUT = {
  /**
   * Data Format
   * @description Response verbosity level
   * @default MEDIUM
   * @enum {string}
   */
  dataFormat: "SHORT" | "MEDIUM" | "FULL";
  /**
   * Offer Id
   * @description Numeric ID of the offer to retrieve
   */
  offer_id?: number;
  /**
   * Organization Id
   * @description Firmao organization ID used in the URL path
   */
  organization_id?: string;
};

/**
 * Type of FIRMAO's FIRMAO_GET_OFFER tool output.
 */
type FIRMAO_GET_OFFER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Date
       * @description Array of offers matching the filter; should contain one element
       */
      date: {
          /**
           * Annotations
           * @description Free-text annotations
           * @default null
           */
          annotations: string | null;
          /**
           * Calculate From Gross
           * @description Whether prices are calculated from gross values
           */
          calculateFromGross: boolean;
          /**
           * LabelId
           * @description Generic summary with ID and label.
           * @default null
           */
          contact: {
              /**
               * Id
               * @description Unique identifier of the entity
               */
              id: number;
              /**
               * Label
               * @description Display label or name of the entity
               */
              label: string;
          } | null;
          /**
           * Created By
           * @description User who created the offer
           */
          createdBy: {
              /**
               * Id
               * @description Unique identifier of the entity
               */
              id: number;
              /**
               * Label
               * @description Display label or name of the entity
               */
              label: string;
          };
          /**
           * Creation Date
           * @description ISO timestamp of when the offer was created
           */
          creationDate: string;
          /**
           * Currency
           * @description Currency code, e.g., 'PLN'
           */
          currency: string;
          /**
           * Custom Fields
           * @description Custom fields container
           * @default null
           */
          customFields: {
              [key: string]: string;
          } | null;
          /**
           * Customer
           * @description Linked customer summary
           */
          customer: {
              /**
               * Email
               * @description Customer email address
               */
              email: string;
              /**
               * Id
               * @description Customer identifier
               */
              id: number;
              /**
               * Label
               * @description Customer display name or label
               */
              label: string;
          };
          /**
           * Customer Address
           * @description Address snapshot of the customer
           */
          customerAddress: {
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
               * County
               * @description County or district name
               * @default null
               */
              county: string | null;
              /**
               * Post Code
               * @description Postal code
               * @default null
               */
              postCode: string | null;
              /**
               * Street
               * @description Street and building number
               * @default null
               */
              street: string | null;
          };
          /**
           * Customer Name
           * @description Customer name snapshot
           */
          customerName: string;
          /**
           * Days To Due Date
           * @description Days until due date
           */
          daysToDueDate: number;
          /**
           * Description
           * @description Offer description
           * @default null
           */
          description: string | null;
          /**
           * Gross Price
           * @description Total gross price of the offer
           */
          grossPrice: number;
          /**
           * Has Reminder
           * @description Whether a reminder is set
           */
          hasReminder: boolean;
          /**
           * Id
           * @description Offer identifier
           */
          id: number;
          /**
           * Issuing Person
           * @description Name of the issuing person
           */
          issuingPerson: string;
          /**
           * Last Update Date
           * @description ISO timestamp of the last update
           */
          lastUpdateDate: string;
          /**
           * LabelId
           * @description Generic summary with ID and label.
           * @default null
           */
          mail: {
              /**
               * Id
               * @description Unique identifier of the entity
               */
              id: number;
              /**
               * Label
               * @description Display label or name of the entity
               */
              label: string;
          } | null;
          /**
           * Mode
           * @description Transaction mode, e.g., 'SALE'
           */
          mode: string;
          /**
           * Name
           * @description Offer name if set
           * @default null
           */
          name: string | null;
          /**
           * Netto Price
           * @description Net total price of the offer
           */
          nettoPrice: number;
          /**
           * Nip Number
           * @description Tax identification number of the customer
           */
          nipNumber: string;
          /**
           * Number
           * @description Offer number string
           */
          number: string;
          /**
           * Offer Date
           * @description Offer date in format YYYY-MM-DD
           */
          offerDate: string;
          /**
           * Offer Status
           * @description Current status of the offer
           */
          offerStatus: string;
          /**
           * Parcel Courier Name
           * @description Name of the courier
           * @default null
           */
          parcelCourierName: string | null;
          /**
           * Parcel Delivery Type
           * @description Type of parcel delivery
           * @default null
           */
          parcelDeliveryType: string | null;
          /**
           * Parcel Description
           * @description Description of the parcel
           * @default null
           */
          parcelDescription: string | null;
          /**
           * Parcel Number
           * @description Parcel tracking number
           * @default null
           */
          parcelNumber: string | null;
          /**
           * Parcel Shipment Date
           * @description Date of parcel shipment
           * @default null
           */
          parcelShipmentDate: string | null;
          /**
           * Payment Date
           * @description Payment date in format YYYY-MM-DD
           */
          paymentDate: string;
          /**
           * Payment Type
           * @description Payment type, e.g., 'CASH'
           */
          paymentType: string;
          /**
           * Permissions
           * @description Permission flags for the offer
           */
          permissions: {
              /**
               * Offer
               * @description List of allowed operations on the offer
               */
              offer: string[];
              /**
               * Transactionentry
               * @description List of allowed operations on the transaction entries
               */
              transactionentry: string[];
          };
          /**
           * LabelId
           * @description Generic summary with ID and label.
           * @default null
           */
          project: {
              /**
               * Id
               * @description Unique identifier of the entity
               */
              id: number;
              /**
               * Label
               * @description Display label or name of the entity
               */
              label: string;
          } | null;
          /**
           * Reminder Advance
           * @description Reminder advance amount
           * @default null
           */
          reminderAdvance: number | null;
          /**
           * Seller Address
           * @description Address details of the seller
           */
          sellerAddress: {
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
               * County
               * @description County or district name
               * @default null
               */
              county: string | null;
              /**
               * Post Code
               * @description Postal code
               * @default null
               */
              postCode: string | null;
              /**
               * Street
               * @description Street and building number
               * @default null
               */
              street: string | null;
          };
          /**
           * Tags
           * @description List of tags attached to the offer
           */
          tags: string[];
          /**
           * LabelId
           * @description Generic summary with ID and label.
           * @default null
           */
          task: {
              /**
               * Id
               * @description Unique identifier of the entity
               */
              id: number;
              /**
               * Label
               * @description Display label or name of the entity
               */
              label: string;
          } | null;
          /**
           * Type
           * @description Document type, e.g., 'AGREEMENT'
           */
          type: string;
          /**
           * Valid From
           * @description Validity start date of the offer
           */
          validFrom: string;
          /**
           * Vat Price
           * @description Total VAT amount of the offer
           */
          vatPrice: number;
      }[];
      /**
       * Dir
       * @description Sort direction used in the response
       * @default null
       */
      dir: string | null;
      /**
       * Sort
       * @description Sort field used in the response
       * @default null
       */
      sort: string | null;
      /**
       * Total Size
       * @description Total number of matching offers
       */
      totalSize: number;
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
 * Type of FIRMAO's FIRMAO_GET_TASK tool input.
 */
type FIRMAO_GET_TASK_INPUT = {
  /**
   * Data Format
   * @description Detail level of the returned data, e.g., MEDIUM
   * @default null
   */
  dataFormat: string | null;
  /**
   * Dir
   * @description Sort direction: ASC or DESC
   * @default null
   */
  dir: string | null;
  /**
   * Limit
   * @description Maximum number of items to return
   * @default null
   */
  limit: number | null;
  /**
   * Organization Id
   * @description Firmao organization identifier (as shown in the URL)
   */
  organization_id?: string;
  /**
   * Sort
   * @description Field to sort by
   * @default null
   */
  sort: string | null;
  /**
   * Start
   * @description Pagination start index
   * @default null
   */
  start: number | null;
  /**
   * Task Id
   * @description ID of the task to retrieve
   */
  task_id?: number;
};

/**
 * Type of FIRMAO's FIRMAO_GET_TASK tool output.
 */
type FIRMAO_GET_TASK_OUTPUT = {
  /**
   * Data
   * @description List containing the requested task
   */
  data?: {
      /**
       * Actual Cost
       * @description Actual cost incurred on the task
       */
      actualCost: number;
      /**
       * Actual Work Hours
       * @description Actual work hours logged on the task
       */
      actualWorkHours: number;
      /**
       * Additional Costs
       * @description Additional costs incurred
       */
      additionalCosts: number;
      /**
       * Address
       * @description Address or location for the task
       * @default null
       */
      address: string | null;
      /**
       * Attachments Count
       * @description Number of attachments on the task
       */
      attachmentsCount: number;
      /**
       * Auto Calc Actual Cost
       * @description Flag for auto-calculation of actual cost
       */
      autoCalcActualCost: boolean;
      /**
       * Auto Calc Income
       * @description Flag for auto-calculation of income
       */
      autoCalcIncome: boolean;
      /**
       * Auto Calc Planned Cost
       * @description Flag for auto-calculation of planned cost
       */
      autoCalcPlannedCost: boolean;
      /**
       * Auto Calc Planned Income
       * @description Flag for auto-calculation of planned income
       */
      autoCalcPlannedIncome: boolean;
      /**
       * Balance
       * @description Balance value (income minus costs)
       */
      balance: number;
      /**
       * RelatedEntity
       * @description Related contact entity, if any
       * @default null
       */
      contact: {
          /**
           * Id
           * @description ID of the related entity
           */
          id: number;
          /**
           * Label
           * @description Label or name of the related entity
           */
          label: string;
      } | null;
      /**
       * Created By
       * @description Information about the creator of the task
       */
      createdBy: {
          /**
           * Id
           * @description ID of the user who created the task
           */
          id: number;
          /**
           * Label
           * @description Name of the user who created the task
           */
          label: string;
      };
      /**
       * Creation Date
       * @description ISO-8601 creation datetime of the task
       */
      creationDate: string;
      /**
       * RelatedEntity
       * @description Related customer entity, if any
       * @default null
       */
      customer: {
          /**
           * Id
           * @description ID of the related entity
           */
          id: number;
          /**
           * Label
           * @description Label or name of the related entity
           */
          label: string;
      } | null;
      /**
       * Description
       * @description Task description
       * @default null
       */
      description: string | null;
      /**
       * Estimated Hours
       * @description Estimated hours for task completion
       */
      estimatedHours: number;
      /**
       * Has End Date Reminder
       * @description Flag indicating if end date reminder is enabled
       */
      hasEndDateReminder: boolean;
      /**
       * Id
       * @description Task ID
       */
      id: number;
      /**
       * Income
       * @description Income earned from the task
       */
      income: number;
      /**
       * Last Update Date
       * @description ISO-8601 last update datetime of the task
       */
      lastUpdateDate: string;
      /**
       * Name
       * @description Task name
       */
      name: string;
      /**
       * RelatedEntity
       * @description Parent task entity, if this is a subtask
       * @default null
       */
      parent: {
          /**
           * Id
           * @description ID of the related entity
           */
          id: number;
          /**
           * Label
           * @description Label or name of the related entity
           */
          label: string;
      } | null;
      /**
       * Percent Done
       * @description Percent completion of the task
       */
      percentDone: number;
      /**
       * Planned End Date
       * @description ISO-8601 planned end datetime
       * @default null
       */
      plannedEndDate: string | null;
      /**
       * Planned End Date Type
       * @description Type of the planned end date
       */
      plannedEndDateType: string;
      /**
       * Planned Start Date
       * @description ISO-8601 planned start datetime
       * @default null
       */
      plannedStartDate: string | null;
      /**
       * Planned Start Date Type
       * @description Type of the planned start date
       */
      plannedStartDateType: string;
      /**
       * RelatedEntity
       * @description Related project entity, if any
       * @default null
       */
      project: {
          /**
           * Id
           * @description ID of the related entity
           */
          id: number;
          /**
           * Label
           * @description Label or name of the related entity
           */
          label: string;
      } | null;
      /**
       * Responsible Users
       * @description List of users assigned to the task
       */
      responsibleUsers: {
          /**
           * Id
           * @description ID of a user responsible for the task
           */
          id: number;
          /**
           * Label
           * @description Name of a user responsible for the task
           */
          label: string;
      }[];
      /**
       * Status
       * @description Current status metadata of the task
       */
      status: {
          /**
           * Group
           * @description Status group identifier
           */
          group: string;
          /**
           * Icon
           * @description URL or identifier of the status icon
           * @default null
           */
          icon: string | null;
          /**
           * Key
           * @description Status key
           */
          key: string;
          /**
           * Label De
           * @description Status label in German
           */
          label_de: string;
          /**
           * Label En
           * @description Status label in English
           */
          label_en: string;
      };
      /**
       * Tags
       * @description List of tags associated with the task
       */
      tags: {
          /**
           * Color
           * @description Hex code or name of the tag color
           */
          color: string;
          /**
           * Id
           * @description ID of the tag
           */
          id: number;
          /**
           * Label
           * @description Label of the tag
           */
          label: string;
      }[];
  }[];
  /**
   * Dir
   * @description Echoed sort direction
   * @default null
   */
  dir: string | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Sort
   * @description Echoed sort field
   * @default null
   */
  sort: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total Size
   * @description Total number of matching tasks
   * @default null
   */
  totalSize: number | null;
};

/**
 * Type of FIRMAO's FIRMAO_LIST_COMPANY_SETTINGS tool input.
 */
type FIRMAO_LIST_COMPANY_SETTINGS_INPUT = {
  /**
   * Company Id
   * @description Optional filter to return settings for a specific company
   * @default null
   */
  company_id: number | null;
  /**
   * Limit
   * @description Maximum number of settings to return
   * @default null
   */
  limit: number | null;
  /**
   * Organization Id
   * @description Optional Firmao organization identifier used in the URL path
   * @default null
   */
  organization_id: string | null;
  /**
   * Start
   * @description Zero-based offset of the first setting to return
   * @default null
   */
  start: number | null;
};

/**
 * Type of FIRMAO's FIRMAO_LIST_COMPANY_SETTINGS tool output.
 */
type FIRMAO_LIST_COMPANY_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Date
       * @description List of company setting records
       */
      date: {
          /**
           * Company Id
           * @description Company ID associated with this setting
           */
          company_id: number;
          /**
           * Created At
           * @description Timestamp when setting was created (ISO8601)
           * @default null
           */
          created_at: string | null;
          /**
           * Id
           * @description Unique setting identifier
           */
          id: number;
          /**
           * Key
           * @description Internal key/name of the setting
           * @default null
           */
          key: string | null;
          /**
           * Name
           * @description Human-readable name of the setting
           * @default null
           */
          name: string | null;
          /**
           * Updated At
           * @description Timestamp when setting was last updated (ISO8601)
           * @default null
           */
          updated_at: string | null;
          /**
           * Value
           * @description Value of the setting
           */
          value: string;
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
 * Type of FIRMAO's FIRMAO_LIST_INVOICES tool input.
 */
type FIRMAO_LIST_INVOICES_INPUT = {
  /**
   * Customer(Eq)
   * @description Filter by customer ID
   * @default null
   */
  "customer(eq)": number | null;
  /**
   * Data Format
   * @description Response size preset, e.g., 'MEDIUM'
   * @default null
   */
  dataFormat: string | null;
  /**
   * Dir
   * @description Sort direction
   * @default null
   * @enum {string|null}
   */
  dir: "ASC" | "DESC" | null;
  /**
   * Limit
   * @description Max results per page
   * @default null
   */
  limit: number | null;
  /**
   * Mode(Eq)
   * @description Filter by invoice mode, e.g., 'SALE'
   * @default null
   */
  "mode(eq)": string | null;
  /**
   * Organization Id
   * @description Firmao Organization ID used as path parameter
   */
  organization_id?: string;
  /**
   * Sort
   * @description Field to sort by
   * @default null
   */
  sort: string | null;
  /**
   * Start
   * @description Pagination start index
   * @default null
   */
  start: number | null;
};

/**
 * Type of FIRMAO's FIRMAO_LIST_INVOICES tool output.
 */
type FIRMAO_LIST_INVOICES_OUTPUT = {
  /**
   * Data
   * @description Paged list of invoices
   */
  data?: {
      /**
       * Creation Date
       * Format: date-time
       * @description Creation timestamp
       */
      creationDate: string;
      /**
       * Currency
       * @description Currency code (e.g., 'PLN')
       */
      currency: string;
      /**
       * Customer
       * @description Linked customer object
       * @default null
       */
      customer: {
          /**
           * Emails
           * @description List of customer email addresses
           */
          emails: string[];
          /**
           * Id
           * @description Customer identifier
           */
          id: number;
          /**
           * Label
           * @description Customer label or name
           */
          label: string;
      } | null;
      /**
       * CustomerAddress
       * @description Linked customer address
       * @default null
       */
      customerAddress: {
          /**
           * City
           * @description City
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Country
           * @default null
           */
          country: string | null;
          /**
           * Post Code
           * @description Postal code
           * @default null
           */
          postCode: string | null;
          /**
           * Street
           * @description Street and number
           * @default null
           */
          street: string | null;
      } | null;
      /**
       * Customer Name
       * @description Customer name if not linked
       * @default null
       */
      customerName: string | null;
      /**
       * Description
       * @description Free-text description
       * @default null
       */
      description: string | null;
      /**
       * Has Reminder
       * @description Payment reminder flag
       */
      hasReminder: boolean;
      /**
       * Id
       * @description Internal transaction identifier
       */
      id: number;
      /**
       * Invoice Annotations
       * @description Additional invoice notes
       * @default null
       */
      invoiceAnnotations: string | null;
      /**
       * Invoice Date
       * Format: date
       * @description Invoice date (YYYY-MM-DD)
       */
      invoiceDate: string;
      /**
       * Issuing Person
       * @description Issuer's name or object
       * @default null
       */
      issuingPerson: string | null;
      /**
       * Last Update Date
       * Format: date-time
       * @description Last update timestamp
       */
      lastUpdateDate: string;
      /**
       * Mail
       * @description Email field
       * @default null
       */
      mail: string | null;
      /**
       * Mode
       * @description Transaction mode (e.g., 'SALE')
       */
      mode: string;
      /**
       * Name
       * @description Title or description name
       * @default null
       */
      name: string | null;
      /**
       * Nip Number
       * @description Customer tax ID
       * @default null
       */
      nipNumber: string | null;
      /**
       * Paid
       * @description Whether the invoice is paid
       */
      paid: boolean;
      /**
       * Paid Value
       * @description Amount already paid
       */
      paidValue: number;
      /**
       * Payment Date
       * Format: date
       * @description Payment due or actual date
       * @default null
       */
      paymentDate: string | null;
      /**
       * Payment Status
       * @description Payment status
       * @default null
       */
      paymentStatus: string | null;
      /**
       * Payment Type
       * @description Payment method
       * @default null
       */
      paymentType: string | null;
      /**
       * Permissions
       * @description Allowed actions
       */
      permissions: {
          /**
           * Transaction
           * @description Allowed actions on the transaction object
           */
          transaction: string[];
          /**
           * Transactionentry
           * @description Allowed actions on transaction entries
           */
          transactionentry: string[];
      };
      /**
       * Project
       * @description Linked project details
       * @default null
       */
      project: {
          /**
           * Id
           * @description Project identifier
           */
          id: number;
          /**
           * Name
           * @description Project name
           */
          name: string;
      } | null;
      /**
       * Rest Of Paid Value
       * @description Remaining amount due
       */
      restOfPaidValue: number;
      /**
       * Storage State Update
       * @description Warehouse update mode
       */
      storageStateUpdate: string;
      /**
       * Tags
       * @description Tags assigned to the invoice
       */
      tags: string[];
      /**
       * Task
       * @description Linked task details
       * @default null
       */
      task: {
          /**
           * Id
           * @description Task identifier
           */
          id: number;
          /**
           * Name
           * @description Task name
           */
          name: string;
          /**
           * Status
           * @description Status details of the task
           */
          status: {
              /**
               * Group
               * @description Task status group
               */
              group: string;
          };
      } | null;
      /**
       * Transaction Date
       * Format: date
       * @description Transaction date (YYYY-MM-DD)
       */
      transactionDate: string;
      /**
       * Transaction Gross Price
       * @description Gross amount
       */
      transactionGrossPrice: number;
      /**
       * Transaction Netto Price
       * @description Net amount
       */
      transactionNettoPrice: number;
      /**
       * Transaction Number
       * @description Document number
       */
      transactionNumber: string;
      /**
       * Transaction Vat Price
       * @description VAT amount
       */
      transactionVatPrice: number;
      /**
       * Type
       * @description Transaction type (e.g., 'INVOICE')
       */
      type: string;
  }[];
  /**
   * Dir
   * @description Sort direction
   */
  dir?: string;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Sort
   * @description Sort field
   */
  sort?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total Size
   * @description Total number of matching invoices
   */
  totalSize?: number;
};

/**
 * Type of FIRMAO's FIRMAO_LIST_TASKS tool input.
 */
type FIRMAO_LIST_TASKS_INPUT = {
  /**
   * Data Format
   * @description Level of detail for returned fields
   * @default null
   * @enum {string|null}
   */
  dataFormat: "MINIMAL" | "MEDIUM" | "FULL" | null;
  /**
   * Dir
   * @description Sort direction
   * @default null
   * @enum {string|null}
   */
  dir: "ASC" | "DESC" | null;
  /**
   * Filters
   * @description Filters in the form FieldName(ComparisonType)=value
   * @default null
   */
  filters: {
      [key: string]: string | number | boolean;
  } | null;
  /**
   * Limit
   * @description Maximum number of records per page
   * @default null
   */
  limit: number | null;
  /**
   * Organization Id
   * @description Firmao organization identifier (as shown in the URL)
   */
  organization_id?: string;
  /**
   * Sort
   * @description Field name to sort by
   * @default null
   */
  sort: string | null;
  /**
   * Start
   * @description 0-based offset of the first record
   * @default null
   */
  start: number | null;
};

/**
 * Type of FIRMAO's FIRMAO_LIST_TASKS tool output.
 */
type FIRMAO_LIST_TASKS_OUTPUT = {
  /**
   * Data
   * @description List of returned tasks
   */
  data?: {
      /**
       * Actual Cost
       * @description Actual cost
       */
      actualCost: number;
      /**
       * Actual End Date
       * @description Actual end date (ISO8601)
       * @default null
       */
      actualEndDate: string | null;
      /**
       * Actual Start Date
       * @description Actual start date (ISO8601)
       * @default null
       */
      actualStartDate: string | null;
      /**
       * Actual Work Hours
       * @description Actual work hours logged
       */
      actualWorkHours: number;
      /**
       * Additional Costs
       * @description Additional costs
       */
      additionalCosts: number;
      /**
       * Address
       * @description Address related to the task
       * @default null
       */
      address: string | null;
      /**
       * Attachments Count
       * @description Number of attachments
       */
      attachmentsCount: number;
      /**
       * Auto Calc Actual Cost
       * @description Auto-calculate actual cost flag
       */
      autoCalcActualCost: boolean;
      /**
       * Auto Calc Income
       * @description Auto-calculate income flag
       */
      autoCalcIncome: boolean;
      /**
       * Auto Calc Planned Cost
       * @description Auto-calculate planned cost flag
       */
      autoCalcPlannedCost: boolean;
      /**
       * Auto Calc Planned Income
       * @description Auto-calculate planned income flag
       */
      autoCalcPlannedIncome: boolean;
      /**
       * Auto Status
       * @description Auto status flag
       */
      autoStatus: boolean;
      /**
       * Balance
       * @description Balance (income - costs)
       */
      balance: number;
      /**
       * Contact
       * @description Contact person for the task
       * @default null
       */
      contact: string | null;
      /**
       * Created By
       * @description User who created the task
       */
      createdBy: {
          /**
           * Id
           * @description Identifier of the item
           */
          id: number;
          /**
           * Label
           * @description Human-readable label of the item
           */
          label: string;
      };
      /**
       * Creation Date
       * @description Creation date (ISO8601)
       */
      creationDate: string;
      /**
       * Description
       * @description Description of the task
       * @default null
       */
      description: string | null;
      /**
       * Has Subtasks
       * @description Flag indicating if the task has subtasks
       */
      hasSubtasks: boolean;
      /**
       * Id
       * @description Task identifier
       */
      id: number;
      /**
       * Income
       * @description Income
       */
      income: number;
      /**
       * Last Update Date
       * @description Last update date (ISO8601)
       */
      lastUpdateDate: string;
      /**
       * Name
       * @description Name of the task
       */
      name: string;
      /**
       * Order Brutto Price
       * @description Brutto unit price for orders
       * @default null
       */
      orderBruttoPrice: number | null;
      /**
       * Order Netto Price
       * @description Netto unit price for orders
       * @default null
       */
      orderNettoPrice: number | null;
      /**
       * Order Quantity
       * @description Quantity for orders
       * @default null
       */
      orderQuantity: number | null;
      /**
       * Order Unit
       * @description Unit of measure for orders
       * @default null
       */
      orderUnit: string | null;
      /**
       * Percent Done
       * @description Completion percentage of the task
       */
      percentDone: number;
      /**
       * Permissions
       * @description Permissions for the task
       */
      permissions: {
          [key: string]: string[];
      };
      /**
       * Planned Cost
       * @description Planned cost
       */
      plannedCost: number;
      /**
       * Planned End Date
       * @description Planned end date (ISO8601)
       * @default null
       */
      plannedEndDate: string | null;
      /**
       * Planned End Date Type
       * @description Type of planned end date, e.g., 'EXACTLY'
       * @default null
       */
      plannedEndDateType: string | null;
      /**
       * Planned Start Date
       * @description Planned start date (ISO8601)
       * @default null
       */
      plannedStartDate: string | null;
      /**
       * Planned Start Date Type
       * @description Type of planned start date, e.g., 'EXACTLY'
       * @default null
       */
      plannedStartDateType: string | null;
      /**
       * Priority
       * @description Priority of the task
       */
      priority: number;
      /**
       * Responsible Users
       * @description Users responsible for the task
       */
      responsibleUsers: {
          /**
           * Id
           * @description Identifier of the item
           */
          id: number;
          /**
           * Label
           * @description Human-readable label of the item
           */
          label: string;
      }[];
      /**
       * Status
       * @description Current status of the task
       */
      status: {
          /**
           * Group
           * @description Status group identifier
           */
          group: string;
          /**
           * Icon
           * @description Icon name for the status
           */
          icon: string;
          /**
           * Key
           * @description Internal status key
           */
          key: string;
          /**
           * Label De
           * @description German status label
           */
          label_de: string;
          /**
           * Label En
           * @description English status label
           */
          label_en: string;
      };
      /**
       * Tags
       * @description Tags associated with the task
       */
      tags: {
          /**
           * Color
           * @description Tag color code
           */
          color: string;
          /**
           * Id
           * @description Tag identifier
           */
          id: number;
          /**
           * Label
           * @description Tag label
           */
          label: string;
      }[];
      /**
       * Task Type
       * @description Type of the task, e.g., 'PROJECT'
       */
      taskType: string;
  }[];
  /**
   * Dir
   * @description Direction used for sorting (ASC/DESC)
   * @default null
   */
  dir: string | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Sort
   * @description Field used for sorting
   * @default null
   */
  sort: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total Size
   * @description Total number of records matching the query
   */
  totalSize?: number;
};

/**
 * Type of FIRMAO's FIRMAO_UPDATE_CONTACT tool input.
 */
type FIRMAO_UPDATE_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description ID of the contact to update
   */
  contact_id?: number;
  /**
   * Customer
   * @description Customer ID to link this contact to
   * @default null
   */
  customer: number | null;
  /**
   * Description
   * @description Free-text description about the contact
   * @default null
   */
  description: string | null;
  /**
   * Emails
   * @description List of email addresses for the contact
   * @default null
   */
  emails: string[] | null;
  /**
   * First Name
   * @description Contact's first name
   * @default null
   */
  firstName: string | null;
  /**
   * Label
   * @description Display label for the contact
   * @default null
   */
  label: string | null;
  /**
   * Last Name
   * @description Contact's last name
   * @default null
   */
  lastName: string | null;
  /**
   * Organization Id
   * @description Firmao Organization ID used as path parameter
   */
  organization_id?: string;
  /**
   * Phones
   * @description List of phone numbers for the contact
   * @default null
   */
  phones: string[] | null;
  /**
   * Position
   * @description Contact's position or job title
   * @default null
   */
  position: string | null;
  /**
   * Tags
   * @description List of tags associated with the contact
   * @default null
   */
  tags: string[] | null;
};

/**
 * Type of FIRMAO's FIRMAO_UPDATE_CONTACT tool output.
 */
type FIRMAO_UPDATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Changelog
       * @description List of change log entries for the updated contact
       */
      changelog: {
          /**
           * Deleted With
           * @default null
           */
          deletedWith: string | null;
          /**
           * Modification
           * @description Type of modification, e.g., 'CHANGE'
           */
          modification: string;
          /**
           * New Value Class
           * @default null
           */
          newValueClass: string | null;
          /**
           * New Value Display
           * @default null
           */
          newValueDisplay: string | null;
          /** New Value Is Dictionary */
          newValueIsDictionary: boolean;
          /** Object Class */
          objectClass: string;
          /** Object Id */
          objectId: number;
          /**
           * Object Label
           * @default null
           */
          objectLabel: string | null;
          /**
           * Old Value Class
           * @default null
           */
          oldValueClass: string | null;
          /**
           * Old Value Display
           * @default null
           */
          oldValueDisplay: string | null;
          /** Old Value Is Dictionary */
          oldValueIsDictionary: boolean;
          /**
           * Property
           * @description Name of the property that changed
           */
          property: string;
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
 * Type of FIRMAO's FIRMAO_UPDATE_INVOICE tool input.
 */
type FIRMAO_UPDATE_INVOICE_INPUT = {
  /**
   * Auto Number
   * @description Let system auto-number invoice
   * @default null
   */
  autoNumber: boolean | null;
  /**
   * Calculate From Gross
   * @description Calculate netto from gross
   * @default null
   */
  calculateFromGross: boolean | null;
  /**
   * Create New Customer If Needed
   * @description Auto-create customer if not existing
   * @default null
   */
  createNewCustomerIfNeeded: boolean | null;
  /**
   * Currency
   * @default null
   */
  currency: string | null;
  /**
   * Customer
   * @description Existing customer ID
   * @default null
   */
  customer: number | null;
  /**
   * CustomerAddress
   * @description Address for the customer
   * @default null
   */
  customerAddress: {
      /**
       * City
       * @description City of the customer
       * @default null
       */
      city: string | null;
      /**
       * Country
       * @description Country of the customer
       * @default null
       */
      country: string | null;
      /**
       * Post Code
       * @description Postal code of the customer
       * @default null
       */
      postCode: string | null;
      /**
       * Street
       * @description Street address of the customer
       * @default null
       */
      street: string | null;
  } | null;
  /**
   * Customer Name
   * @description Name for new customer if created
   * @default null
   */
  customerName: string | null;
  /**
   * Emails
   * @default null
   */
  emails: string[] | null;
  /**
   * Invoice Annotations
   * @description Custom notes on the invoice
   * @default null
   */
  invoiceAnnotations: string | null;
  /**
   * Invoice Date
   * Format: date
   * @description Invoice issue date (YYYY-MM-DD)
   * @default null
   */
  invoiceDate: string | null;
  /**
   * Invoice Pattern Id
   * @description Numbering series identifier
   * @default null
   */
  invoicePatternId: number | null;
  /**
   * Invoice Id
   * @description ID of the invoice (transaction) to update
   */
  invoice_id?: number;
  /**
   * Issuing Person
   * @description Person issuing the invoice
   * @default null
   */
  issuingPerson: string | null;
  /**
   * Mode
   * @enum {string|null}
   */
  mode?: "SALE" | "PURCHASE" | null;
  /**
   * Nip Number
   * @description Tax identification number
   * @default null
   */
  nipNumber: string | null;
  /**
   * Organization Id
   * @description Firmao Organization ID used as path parameter
   */
  organization_id?: string;
  /**
   * Paid
   * @default null
   */
  paid: boolean | null;
  /**
   * Paid Value
   * @description Amount already paid
   * @default null
   */
  paidValue: number | null;
  /**
   * Payment Date
   * Format: date
   * @description Payment due date (YYYY-MM-DD)
   * @default null
   */
  paymentDate: string | null;
  /**
   * Payment Type
   * @description Payment method, e.g., 'CASH'
   * @default null
   */
  paymentType: string | null;
  /**
   * Phones
   * @default null
   */
  phones: string[] | null;
  /**
   * Rest Of Paid Value
   * @description Remaining amount due
   * @default null
   */
  restOfPaidValue: number | null;
  /**
   * Split Payment
   * @description Flag for split payment
   * @default null
   */
  splitPayment: boolean | null;
  /**
   * Transaction Brutto Price
   * @description Total gross amount
   * @default null
   */
  transactionBruttoPrice: number | null;
  /**
   * Transaction Date
   * Format: date
   * @description Accounting date (YYYY-MM-DD)
   * @default null
   */
  transactionDate: string | null;
  /**
   * Transaction Entries
   * @description List of invoice line items to update
   * @default null
   */
  transactionEntries: {
      /**
       * Discount
       * @description Discount amount for this line item, if any
       * @default null
       */
      discount: number | null;
      /**
       * Product
       * @description Existing product ID in Firmao
       */
      product: number;
      /**
       * Product Code
       * @description Internal product code
       */
      productCode: string;
      /**
       * Quantity
       * @description Quantity of items, must be greater than zero
       */
      quantity: number;
      /**
       * Unit
       * @description Unit of measure for the quantity
       * @default null
       */
      unit: string | null;
      /**
       * Unit Netto Price
       * @description Net unit price
       */
      unitNettoPrice: number;
      /**
       * Vat Percent
       * @description VAT rate percent
       */
      vatPercent: number;
  }[] | null;
  /**
   * Transaction Netto Price
   * @description Total net amount
   * @default null
   */
  transactionNettoPrice: number | null;
  /**
   * Transaction Number
   * @description Custom invoice number
   * @default null
   */
  transactionNumber: string | null;
  /**
   * Transaction Vat Price
   * @description Total VAT amount
   * @default null
   */
  transactionVatPrice: number | null;
  /**
   * Type
   * @description Fixed to 'INVOICE' to designate invoice
   * @default INVOICE
   * @constant
   */
  type: "INVOICE";
};

/**
 * Type of FIRMAO's FIRMAO_UPDATE_INVOICE tool output.
 */
type FIRMAO_UPDATE_INVOICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Changelog
       * @description List of change events after invoice update
       */
      changelog: {
          /**
           * Modification
           * @description Type of modification, e.g., CHANGE
           * @default null
           */
          modification: string | null;
          /**
           * New Value Class
           * @description Class of the new value
           * @default null
           */
          newValueClass: string | null;
          /**
           * New Value Display
           * @description Display of the new value
           * @default null
           */
          newValueDisplay: string | null;
          /**
           * Object Class
           * @description Class of the modified object
           * @default null
           */
          objectClass: string | null;
          /**
           * Object Id
           * @description ID of the modified object
           * @default null
           */
          objectId: number | null;
          /**
           * Old Value Class
           * @description Class of the old value
           * @default null
           */
          oldValueClass: string | null;
          /**
           * Old Value Display
           * @description Display of the old value
           * @default null
           */
          oldValueDisplay: string | null;
          /**
           * Property
           * @description Name of the modified property
           * @default null
           */
          property: string | null;
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
 * Type of FIRMAO's FIRMAO_UPDATE_OFFER tool input.
 */
type FIRMAO_UPDATE_OFFER_INPUT = {
  /**
   * Annotations
   * @description Offer annotations
   * @default null
   */
  annotations: string | null;
  /**
   * Calculate From Gross
   * @description Whether totals are calculated from gross
   * @default null
   */
  calculateFromGross: boolean | null;
  /**
   * Contact
   * @description Linked contact object as in GET response
   * @default null
   */
  contact: {
      [key: string]: unknown;
  } | null;
  /**
   * Currency
   * @description Currency code, e.g., 'PLN'
   * @default null
   */
  currency: string | null;
  /**
   * Customer
   * @description Customer ID to link
   * @default null
   */
  customer: number | null;
  /**
   * CustomerAddress
   * @description Customer postal data
   * @default null
   */
  customerAddress: {
      /**
       * City
       * @description City name
       * @default null
       */
      city: string | null;
      /**
       * Country
       * @description Country
       * @default null
       */
      country: string | null;
      /**
       * Post Code
       * @description Postal code
       * @default null
       */
      postCode: string | null;
      /**
       * Street
       * @description Street address
       * @default null
       */
      street: string | null;
  } | null;
  /**
   * Customer Name
   * @description Free-text customer name
   * @default null
   */
  customerName: string | null;
  /**
   * Days To Due Date
   * @description Days until due date
   * @default null
   */
  daysToDueDate: number | null;
  /**
   * Description
   * @description Offer description
   * @default null
   */
  description: string | null;
  /**
   * Entries
   * @description List of line items; send only entries to update
   * @default null
   */
  entries: {
      /**
       * Classification Number
       * @description Classification number or CN code
       * @default null
       */
      classificationNumber: string | null;
      /**
       * Product
       * @description Product ID or free-text name
       * @default null
       */
      product: number | null;
      /**
       * Product Code
       * @description Product code, e.g., 'ST0002'
       * @default null
       */
      productCode: string | null;
      /**
       * Quantity
       * @description Quantity of items, must be non-negative
       * @default null
       */
      quantity: number | null;
      /**
       * Unit
       * @description Unit of measure, e.g., 'pcs'
       * @default null
       */
      unit: string | null;
      /**
       * Unit Netto Price
       * @description Net unit price as string to preserve precision, e.g., '818.85'
       * @default null
       */
      unitNettoPrice: string | null;
      /**
       * Vat Percent
       * @description VAT rate in percent
       * @default null
       */
      vatPercent: number | null;
  }[] | null;
  /**
   * Issuing Person
   * @description Name of issuing person
   * @default null
   */
  issuingPerson: string | null;
  /**
   * Mode
   * @description Transaction mode; one of SALE, PURCHASE
   * @default null
   * @enum {string|null}
   */
  mode: "SALE" | "PURCHASE" | null;
  /**
   * Name
   * @description Offer name or label
   * @default null
   */
  name: string | null;
  /**
   * Number
   * @description Offer number
   * @default null
   */
  number: string | null;
  /**
   * Offer Date
   * @description Date of the offer, format YYYY-MM-DD
   * @default null
   */
  offerDate: string | null;
  /**
   * Offer Status
   * @description Current offer status
   * @default null
   * @enum {string|null}
   */
  offerStatus: "NEW" | "SENT" | "DURING_NEGOTIATIONS" | "ACCEPTED" | "REJECTED" | "EXECUTED" | null;
  /**
   * Offer Id
   * @description Identifier of the offer to update
   */
  offer_id?: number;
  /**
   * Organization Id
   * @description Organization ID used in the path
   */
  organization_id?: string;
  /**
   * Payment Date
   * @description Payment date, format YYYY-MM-DD
   * @default null
   */
  paymentDate: string | null;
  /**
   * Payment Type
   * @description Payment method, e.g., 'CASH'
   * @default null
   */
  paymentType: string | null;
  /**
   * Project
   * @description Project ID to link
   * @default null
   */
  project: number | null;
  /**
   * Reminder Advance
   * @description Reminder advance value
   * @default null
   */
  reminderAdvance: string | null;
  /**
   * Tags
   * @description List of tags
   * @default null
   */
  tags: string[] | null;
  /**
   * Task
   * @description Task ID to link
   * @default null
   */
  task: number | null;
  /**
   * Type
   * @description Document type; one of OFFER, ORDER, AGREEMENT
   * @default null
   * @enum {string|null}
   */
  type: "OFFER" | "ORDER" | "AGREEMENT" | null;
  /**
   * Valid From
   * @description Valid-from date, format YYYY-MM-DD
   * @default null
   */
  validFrom: string | null;
};

/**
 * Type of FIRMAO's FIRMAO_UPDATE_OFFER tool output.
 */
type FIRMAO_UPDATE_OFFER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Changelog
       * @description List of change log entries for the updated offer
       */
      changelog: {
          /**
           * Deleted With
           * @default null
           */
          deletedWith: string | null;
          /**
           * Modification
           * @description Action performed, e.g., 'CHANGE'
           */
          modification: string;
          /**
           * New Value Class
           * @default null
           */
          newValueClass: string | null;
          /**
           * New Value Display
           * @default null
           */
          newValueDisplay: string | null;
          /** New Value Is Dictionary */
          newValueIsDictionary: boolean;
          /** Object Class */
          objectClass: string;
          /** Object Id */
          objectId: number;
          /**
           * Object Label
           * @default null
           */
          objectLabel: string | null;
          /**
           * Old Value Class
           * @default null
           */
          oldValueClass: string | null;
          /**
           * Old Value Display
           * @default null
           */
          oldValueDisplay: string | null;
          /** Old Value Is Dictionary */
          oldValueIsDictionary: boolean;
          /**
           * Property
           * @description Name of the property that changed
           */
          property: string;
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
 * Type of FIRMAO's FIRMAO_UPDATE_TASK tool input.
 */
type FIRMAO_UPDATE_TASK_INPUT = {
  /**
   * Description
   * @description Task description
   * @default null
   */
  description: string | null;
  /**
   * Estimated Hours
   * @description Estimated hours for task completion
   * @default null
   */
  estimatedHours: number | null;
  /**
   * Name
   * @description Task name
   * @default null
   */
  name: string | null;
  /**
   * Organization Id
   * @description Organization identifier (string or numeric as in Firmao URL)
   */
  organization_id?: string;
  /**
   * Parent
   * @description Parent task ID, for subtasks
   * @default null
   */
  parent: number | null;
  /**
   * Percent Done
   * @description Percent completion of the task
   * @default null
   */
  percentDone: number | null;
  /**
   * Planned End Date
   * @description Planned end date (ISO-8601)
   * @default null
   */
  plannedEndDate: string | null;
  /**
   * Planned End Date Type
   * @description Type for planned end date
   * @default null
   */
  plannedEndDateType: string | null;
  /**
   * Planned Start Date
   * @description Planned start date (ISO-8601)
   * @default null
   */
  plannedStartDate: string | null;
  /**
   * Planned Start Date Type
   * @description Type for planned start date
   * @default null
   */
  plannedStartDateType: string | null;
  /**
   * Priority
   * @description Priority value
   * @default null
   */
  priority: number | null;
  /**
   * Responsible Users
   * @description List of responsible users
   * @default null
   */
  responsibleUsers: {
      /**
       * Id
       * @description ID of a responsible user
       */
      id: number;
  }[] | null;
  /**
   * Status
   * @description Task status key
   * @default null
   */
  status: string | null;
  /**
   * Tags
   * @description List of tag IDs
   * @default null
   */
  tags: {
      /**
       * Id
       * @description ID of the tag
       */
      id: number;
  }[] | null;
  /**
   * Task Id
   * @description ID of the task to update
   */
  task_id?: number;
};

/**
 * Type of FIRMAO's FIRMAO_UPDATE_TASK tool output.
 */
type FIRMAO_UPDATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Changelog
       * @description List of change records for the update
       */
      changelog: {
          /**
           * Deleted With
           * @description Entity with which this was deleted, empty if none
           */
          deletedWith: string;
          /**
           * Modification
           * @description Type of modification, e.g., CHANGE
           */
          modification: string;
          /**
           * New Value Class
           * @description Type of new value, e.g., 'string'
           * @default null
           */
          newValueClass: string | null;
          /**
           * New Value Display
           * @description Human-readable new value
           * @default null
           */
          newValueDisplay: string | null;
          /**
           * New Value Is Dictionary
           * @description Indicates if new value is a dictionary
           */
          newValueIsDictionary: boolean;
          /**
           * Object Class
           * @description Class of the object, e.g., 'task'
           */
          objectClass: string;
          /**
           * Object Id
           * @description ID of the modified object
           */
          objectId: number;
          /**
           * Object Label
           * @description Label/name of the object
           */
          objectLabel: string;
          /**
           * Old Value Class
           * @description Type of old value
           * @default null
           */
          oldValueClass: string | null;
          /**
           * Old Value Display
           * @description Human-readable old value
           * @default null
           */
          oldValueDisplay: string | null;
          /**
           * Old Value Is Dictionary
           * @description Indicates if old value is a dictionary
           */
          oldValueIsDictionary: boolean;
          /**
           * Property
           * @description Property changed, empty for composite changes
           */
          property: string;
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
 * Type map of all available tool input types for toolkit "FIRMAO".
 */
export type FIRMAO_TOOL_INPUTS = {
  CREATE_INVOICE: FIRMAO_CREATE_INVOICE_INPUT
  DELETE_COMPANY_SETTING: FIRMAO_DELETE_COMPANY_SETTING_INPUT
  DELETE_CONTACT: FIRMAO_DELETE_CONTACT_INPUT
  DELETE_INVOICE: FIRMAO_DELETE_INVOICE_INPUT
  DELETE_OFFER: FIRMAO_DELETE_OFFER_INPUT
  GET_INVOICE: FIRMAO_GET_INVOICE_INPUT
  GET_OFFER: FIRMAO_GET_OFFER_INPUT
  GET_TASK: FIRMAO_GET_TASK_INPUT
  LIST_COMPANY_SETTINGS: FIRMAO_LIST_COMPANY_SETTINGS_INPUT
  LIST_INVOICES: FIRMAO_LIST_INVOICES_INPUT
  LIST_TASKS: FIRMAO_LIST_TASKS_INPUT
  UPDATE_CONTACT: FIRMAO_UPDATE_CONTACT_INPUT
  UPDATE_INVOICE: FIRMAO_UPDATE_INVOICE_INPUT
  UPDATE_OFFER: FIRMAO_UPDATE_OFFER_INPUT
  UPDATE_TASK: FIRMAO_UPDATE_TASK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FIRMAO".
 */
export type FIRMAO_TOOL_OUTPUTS = {
  CREATE_INVOICE: FIRMAO_CREATE_INVOICE_OUTPUT
  DELETE_COMPANY_SETTING: FIRMAO_DELETE_COMPANY_SETTING_OUTPUT
  DELETE_CONTACT: FIRMAO_DELETE_CONTACT_OUTPUT
  DELETE_INVOICE: FIRMAO_DELETE_INVOICE_OUTPUT
  DELETE_OFFER: FIRMAO_DELETE_OFFER_OUTPUT
  GET_INVOICE: FIRMAO_GET_INVOICE_OUTPUT
  GET_OFFER: FIRMAO_GET_OFFER_OUTPUT
  GET_TASK: FIRMAO_GET_TASK_OUTPUT
  LIST_COMPANY_SETTINGS: FIRMAO_LIST_COMPANY_SETTINGS_OUTPUT
  LIST_INVOICES: FIRMAO_LIST_INVOICES_OUTPUT
  LIST_TASKS: FIRMAO_LIST_TASKS_OUTPUT
  UPDATE_CONTACT: FIRMAO_UPDATE_CONTACT_OUTPUT
  UPDATE_INVOICE: FIRMAO_UPDATE_INVOICE_OUTPUT
  UPDATE_OFFER: FIRMAO_UPDATE_OFFER_OUTPUT
  UPDATE_TASK: FIRMAO_UPDATE_TASK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FIRMAO toolkit.
 */
export const FIRMAO = {
  slug: "firmao",
  tools: {
    /**
     * Tool to create an invoice. Use after gathering all invoice details.
     */
    CREATE_INVOICE: "FIRMAO_CREATE_INVOICE",
    /**
     * Tool to delete a specific company setting. Use when you need to remove a company setting by its unique ID after confirming the ID is valid.
     */
    DELETE_COMPANY_SETTING: "FIRMAO_DELETE_COMPANY_SETTING",
    /**
     * Tool to delete a contact by marking it as deleted. Use when you need to soft-delete a contact after confirming its existence.
     */
    DELETE_CONTACT: "FIRMAO_DELETE_CONTACT",
    /**
     * Tool to delete an invoice. Use when you need to soft-delete a specific invoice by marking it deleted=true. Implements robust endpoint fallbacks and graceful degradation to ensure a validated response even when the API denies access or returns unexpected shapes.
     */
    DELETE_INVOICE: "FIRMAO_DELETE_INVOICE",
    /**
     * Tool to delete an offer. Use when you need to soft-delete an existing offer by marking its deleted flag to true. After this call, the offer is considered deleted within the system.
     */
    DELETE_OFFER: "FIRMAO_DELETE_OFFER",
    /**
     * Tool to retrieve a specific invoice by its ID. Use when you need the full invoice data by its unique ID.
     */
    GET_INVOICE: "FIRMAO_GET_INVOICE",
    /**
     * Tool to retrieve offer details. Use when you need complete information for a specific offer by ID.
     */
    GET_OFFER: "FIRMAO_GET_OFFER",
    /**
     * Tool to retrieve details of a specific task by its ID. Use when you need to fetch a task after knowing its ID.
     */
    GET_TASK: "FIRMAO_GET_TASK",
    /**
     * Tool to list company settings. Use when retrieving custom configurations for a company, optionally filtered by organization or company ID.
     */
    LIST_COMPANY_SETTINGS: "FIRMAO_LIST_COMPANY_SETTINGS",
    /**
     * Tool to list invoices. Use when retrieving a list of invoices with optional pagination and filtering.
     */
    LIST_INVOICES: "FIRMAO_LIST_INVOICES",
    /**
     * Tool to retrieve a list of tasks. Use when browsing tasks with pagination, sorting, or filters after confirming organization ID.
     */
    LIST_TASKS: "FIRMAO_LIST_TASKS",
    /**
     * Tool to update a contact. Use when you need to modify an existing contact by its ID after retrieving its details.
     */
    UPDATE_CONTACT: "FIRMAO_UPDATE_CONTACT",
    /**
     * Tool to update an invoice. Use when you need to modify an existing invoice by its ID after retrieving its details.
     */
    UPDATE_INVOICE: "FIRMAO_UPDATE_INVOICE",
    /**
     * Tool to update an existing offer. Use when you need to modify offer fields after creation.
     */
    UPDATE_OFFER: "FIRMAO_UPDATE_OFFER",
    /**
     * Tool to update an existing task. Use when you need to modify one or more fields of a task after confirming its current details.
     */
    UPDATE_TASK: "FIRMAO_UPDATE_TASK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FIRMAO".
 */
export type FIRMAO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FIRMAO".
 */
export type FIRMAO_TRIGGER_EVENTS = {}
