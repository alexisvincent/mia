// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICS365_GET_ALL_INVOICES_ACTION tool input.
 */
type DYNAMICS365_DYNAMICS365_GET_ALL_INVOICES_ACTION_INPUT = {
  /**
   * Filter
   * @description Filter criteria for invoices
   */
  filter?: string;
};

/**
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICS365_GET_ALL_INVOICES_ACTION tool output.
 */
type DYNAMICS365_DYNAMICS365_GET_ALL_INVOICES_ACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Value
       * @description List of invoice objects returned from the query
       */
      value: {
          /**
           * Bill To Address Line1
           * @default null
           */
          billToAddressLine1: string | null;
          /**
           * Bill To Address Line2
           * @default null
           */
          billToAddressLine2: string | null;
          /**
           * Bill To City
           * @default null
           */
          billToCity: string | null;
          /**
           * Bill To Country
           * @default null
           */
          billToCountry: string | null;
          /**
           * Bill To Customer Id
           * @default null
           */
          billToCustomerId: string | null;
          /**
           * Bill To Customer Number
           * @default null
           */
          billToCustomerNumber: string | null;
          /**
           * Bill To Name
           * @default null
           */
          billToName: string | null;
          /**
           * Bill To Post Code
           * @default null
           */
          billToPostCode: string | null;
          /**
           * Bill To State
           * @default null
           */
          billToState: string | null;
          /**
           * Currency Code
           * @default null
           */
          currencyCode: string | null;
          /**
           * Currency Id
           * @default null
           */
          currencyId: string | null;
          /**
           * Customer Id
           * @default null
           */
          customerId: string | null;
          /**
           * Customer Name
           * @default null
           */
          customerName: string | null;
          /**
           * Customer Number
           * @default null
           */
          customerNumber: string | null;
          /**
           * Customer Purchase Order Reference
           * @default null
           */
          customerPurchaseOrderReference: string | null;
          /**
           * Discount Amount
           * @default null
           */
          discountAmount: number | null;
          /**
           * Discount Applied Before Tax
           * @default null
           */
          discountAppliedBeforeTax: boolean | null;
          /**
           * Due Date
           * @default null
           */
          dueDate: string | null;
          /**
           * Email
           * @default null
           */
          email: string | null;
          /**
           * External Document Number
           * @default null
           */
          externalDocumentNumber: string | null;
          /**
           * Id
           * @default null
           */
          id: string | null;
          /**
           * Invoice Date
           * @default null
           */
          invoiceDate: string | null;
          /**
           * Last Modified Date Time
           * @default null
           */
          lastModifiedDateTime: string | null;
          /**
           * Number
           * @default null
           */
          number: string | null;
          /**
           * Order Id
           * @default null
           */
          orderId: string | null;
          /**
           * Order Number
           * @default null
           */
          orderNumber: string | null;
          /**
           * Payment Terms Id
           * @default null
           */
          paymentTermsId: string | null;
          /**
           * Phone Number
           * @default null
           */
          phoneNumber: string | null;
          /**
           * Posting Date
           * @default null
           */
          postingDate: string | null;
          /**
           * Prices Include Tax
           * @default null
           */
          pricesIncludeTax: boolean | null;
          /**
           * Remaining Amount
           * @default null
           */
          remainingAmount: number | null;
          /**
           * Salesperson
           * @default null
           */
          salesperson: string | null;
          /**
           * Sell To Address Line1
           * @default null
           */
          sellToAddressLine1: string | null;
          /**
           * Sell To Address Line2
           * @default null
           */
          sellToAddressLine2: string | null;
          /**
           * Sell To City
           * @default null
           */
          sellToCity: string | null;
          /**
           * Sell To Country
           * @default null
           */
          sellToCountry: string | null;
          /**
           * Sell To Post Code
           * @default null
           */
          sellToPostCode: string | null;
          /**
           * Sell To State
           * @default null
           */
          sellToState: string | null;
          /**
           * Ship To Address Line1
           * @default null
           */
          shipToAddressLine1: string | null;
          /**
           * Ship To Address Line2
           * @default null
           */
          shipToAddressLine2: string | null;
          /**
           * Ship To City
           * @default null
           */
          shipToCity: string | null;
          /**
           * Ship To Contact
           * @default null
           */
          shipToContact: string | null;
          /**
           * Ship To Country
           * @default null
           */
          shipToCountry: string | null;
          /**
           * Ship To Name
           * @default null
           */
          shipToName: string | null;
          /**
           * Ship To Post Code
           * @default null
           */
          shipToPostCode: string | null;
          /**
           * Ship To State
           * @default null
           */
          shipToState: string | null;
          /**
           * Shipment Method Id
           * @default null
           */
          shipmentMethodId: string | null;
          /**
           * Status
           * @default null
           */
          status: string | null;
          /**
           * Total Amount Excluding Tax
           * @default null
           */
          totalAmountExcludingTax: number | null;
          /**
           * Total Amount Including Tax
           * @default null
           */
          totalAmountIncludingTax: number | null;
          /**
           * Total Tax Amount
           * @default null
           */
          totalTaxAmount: number | null;
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
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_CREATE_ACCOUNT tool input.
 */
type DYNAMICS365_DYNAMICSCRM_CREATE_ACCOUNT_INPUT = {
  /**
   * Accountcategorycode
   * @description The category code of the account.
   * @default 1
   */
  accountcategorycode: number;
  /**
   * Creditonhold
   * @description Indicates whether the account is on credit hold.
   * @default false
   */
  creditonhold: boolean;
  /**
   * Description
   * @description A description of the account.
   * @default
   */
  description: string;
  /**
   * Name
   * @description The name of the new account to be created.
   * @default
   */
  name: string;
  /**
   * Revenue
   * @description The revenue associated with the account.
   * @default 0
   */
  revenue: number;
  /**
   * User Id
   * @description The user's ID or 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_CREATE_ACCOUNT tool output.
 */
type DYNAMICS365_DYNAMICSCRM_CREATE_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Success message indicating account creation
       */
      message: string;
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
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_CREATE_CASE tool input.
 */
type DYNAMICS365_DYNAMICSCRM_CREATE_CASE_INPUT = {
  /**
   * Caseorigincode
   * @description The source of the case (e.g., 1 for Phone Call, 2 for Email).
   * @default 0
   */
  caseorigincode: number;
  /**
   * Customerid Account
   * @description A reference to the related account. Format: '/accounts(GUID)'
   * @default
   */
  customerid_account: string;
  /**
   * Description
   * @description A detailed description of the issue or inquiry.
   * @default
   */
  description: string;
  /**
   * Prioritycode
   * @description The priority level of the case (e.g., 1 for Low, 2 for Normal, 3 for High).
   * @default 1
   */
  prioritycode: number;
  /**
   * Title
   * @description The subject or title of the case.
   * @default
   */
  title: string;
  /**
   * User Id
   * @description The user's ID or 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_CREATE_CASE tool output.
 */
type DYNAMICS365_DYNAMICSCRM_CREATE_CASE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Success message indicating case creation
       */
      message: string;
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
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_CREATE_CONTACT tool input.
 */
type DYNAMICS365_DYNAMICSCRM_CREATE_CONTACT_INPUT = {
  /**
   * Address1 City
   * @description The city of the contact's address.
   * @default
   */
  address1_city: string;
  /**
   * Address1 Country
   * @description The country of the contact's address.
   * @default
   */
  address1_country: string;
  /**
   * Address1 Postalcode
   * @description The postal code of the contact's address.
   * @default
   */
  address1_postalcode: string;
  /**
   * Address1 Stateorprovince
   * @description The state or province of the contact's address.
   * @default
   */
  address1_stateorprovince: string;
  /**
   * Emailaddress1
   * @description The primary email address of the contact.
   * @default
   */
  emailaddress1: string;
  /**
   * Firstname
   * @description The first name of the contact.
   * @default
   */
  firstname: string;
  /**
   * Jobtitle
   * @description The job title of the contact.
   * @default
   */
  jobtitle: string;
  /**
   * Lastname
   * @description The last name of the contact.
   * @default
   */
  lastname: string;
  /**
   * Mobilephone
   * @description The mobile phone number of the contact.
   * @default
   */
  mobilephone: string;
  /**
   * Telephone1
   * @description The primary telephone number of the contact.
   * @default
   */
  telephone1: string;
  /**
   * User Id
   * @description The user's ID or 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_CREATE_CONTACT tool output.
 */
type DYNAMICS365_DYNAMICSCRM_CREATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Success message indicating contact creation
       */
      message: string;
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
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_CREATE_INVOICE tool input.
 */
type DYNAMICS365_DYNAMICSCRM_CREATE_INVOICE_INPUT = {
  /**
   * Account Id
   * @description A reference to the related account. Format: '/accounts(GUID)'
   * @default
   */
  account_id: string;
  /**
   * Currency Id
   * @description A reference to the currency for the transaction. Format: '/transactioncurrencies(GUID)'
   * @default
   */
  currency_id: string;
  /**
   * Description
   * @description A description of the invoice.
   * @default
   */
  description: string;
  /**
   * Name
   * @description The name or number of the invoice.
   * @default
   */
  name: string;
  /**
   * Price Level Id
   * @description A reference to the price list. Format: '/pricelevels(GUID)'
   * @default
   */
  price_level_id: string;
  /**
   * User Id
   * @description The user's ID or 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_CREATE_INVOICE tool output.
 */
type DYNAMICS365_DYNAMICSCRM_CREATE_INVOICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Invoice Id
       * @description The unique identifier (GUID) of the created invoice.
       */
      invoice_id: string;
      /**
       * Message
       * @description Success message indicating invoice creation
       */
      message: string;
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
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_CREATE_LEAD tool input.
 */
type DYNAMICS365_DYNAMICSCRM_CREATE_LEAD_INPUT = {
  /**
   * Companyname
   * @description The company name associated with the lead.
   * @default
   */
  companyname: string;
  /**
   * Emailaddress1
   * @description The primary email address of the lead.
   * @default
   */
  emailaddress1: string;
  /**
   * Firstname
   * @description The first name of the lead.
   * @default
   */
  firstname: string;
  /**
   * Lastname
   * @description The last name of the lead.
   * @default
   */
  lastname: string;
  /**
   * Subject
   * @description A brief description or title for the lead.
   * @default
   */
  subject: string;
  /**
   * Telephone1
   * @description The primary telephone number of the lead.
   * @default
   */
  telephone1: string;
  /**
   * User Id
   * @description The user's ID or 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_CREATE_LEAD tool output.
 */
type DYNAMICS365_DYNAMICSCRM_CREATE_LEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Success message indicating lead creation
       */
      message: string;
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
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_CREATE_OPPORTUNITY tool input.
 */
type DYNAMICS365_DYNAMICSCRM_CREATE_OPPORTUNITY_INPUT = {
  /**
   * Customer Account
   * @description A reference to the related account. Format: '/accounts(GUID)'
   * @default
   */
  customer_account: string;
  /**
   * Description
   * @description A brief description of the opportunity.
   * @default
   */
  description: string;
  /**
   * Estimatedclosedate
   * @description The expected close date of the opportunity in 'YYYY-MM-DD' format.
   * @default
   */
  estimatedclosedate: string;
  /**
   * Estimatedvalue
   * @description The anticipated revenue from the opportunity.
   * @default 0
   */
  estimatedvalue: number;
  /**
   * Name
   * @description The name or title of the opportunity.
   * @default
   */
  name: string;
  /**
   * User Id
   * @description The user's ID or 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_CREATE_OPPORTUNITY tool output.
 */
type DYNAMICS365_DYNAMICSCRM_CREATE_OPPORTUNITY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Success message indicating opportunity creation
       */
      message: string;
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
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_CREATE_SALES_ORDER tool input.
 */
type DYNAMICS365_DYNAMICSCRM_CREATE_SALES_ORDER_INPUT = {
  /**
   * Account Id
   * @description A reference to the related account. Format: '/accounts(GUID)'
   * @default
   */
  account_id: string;
  /**
   * Currency Id
   * @description A reference to the currency for the transaction. Format: '/transactioncurrencies(GUID)'
   * @default
   */
  currency_id: string;
  /**
   * Description
   * @description A description of the sales order.
   * @default
   */
  description: string;
  /**
   * Name
   * @description The name of the sales order.
   * @default
   */
  name: string;
  /**
   * Price Level Id
   * @description A reference to the price list. Format: '/pricelevels(GUID)'
   * @default
   */
  price_level_id: string;
  /**
   * User Id
   * @description The user's ID or 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_CREATE_SALES_ORDER tool output.
 */
type DYNAMICS365_DYNAMICSCRM_CREATE_SALES_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Success message indicating sales order creation
       */
      message: string;
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
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_GET_ALL_LEADS tool input.
 */
type DYNAMICS365_DYNAMICSCRM_GET_ALL_LEADS_INPUT = {
  /**
   * Filter
   * @description Filter criteria for leads
   */
  filter?: string;
};

/**
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_GET_ALL_LEADS tool output.
 */
type DYNAMICS365_DYNAMICSCRM_GET_ALL_LEADS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Value
       * @description List of lead objects returned from the query
       */
      value: {
          /**
           * Address Line1
           * @default null
           */
          addressLine1: string | null;
          /**
           * Address Line2
           * @default null
           */
          addressLine2: string | null;
          /**
           * Business Relation
           * @default null
           */
          businessRelation: string | null;
          /**
           * City
           * @default null
           */
          city: string | null;
          /**
           * Company Name
           * @default null
           */
          companyName: string | null;
          /**
           * Company Number
           * @default null
           */
          companyNumber: string | null;
          /**
           * Country
           * @default null
           */
          country: string | null;
          /**
           * Display Name
           * @default null
           */
          displayName: string | null;
          /**
           * Email
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @default null
           */
          id: string | null;
          /**
           * Last Interaction Date
           * @default null
           */
          lastInteractionDate: string | null;
          /**
           * Last Modified Date Time
           * @default null
           */
          lastModifiedDateTime: string | null;
          /**
           * Mobile Phone Number
           * @default null
           */
          mobilePhoneNumber: string | null;
          /**
           * Number
           * @default null
           */
          number: string | null;
          /**
           * Phone Number
           * @default null
           */
          phoneNumber: string | null;
          /**
           * Postal Code
           * @default null
           */
          postalCode: string | null;
          /**
           * Privacy Blocked
           * @default null
           */
          privacyBlocked: boolean | null;
          /**
           * Search Name
           * @default null
           */
          searchName: string | null;
          /**
           * State
           * @default null
           */
          state: string | null;
          /**
           * Type
           * @default null
           */
          type: string | null;
          /**
           * Website
           * @default null
           */
          website: string | null;
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
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_GET_A_INVOICE tool input.
 */
type DYNAMICS365_DYNAMICSCRM_GET_A_INVOICE_INPUT = {
  /**
   * Invoice Id
   * @description The ID of the invoice to retrieve
   */
  invoice_id?: string;
};

/**
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_GET_A_INVOICE tool output.
 */
type DYNAMICS365_DYNAMICSCRM_GET_A_INVOICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bill To Address Line1
       * @description First line of billing address
       * @default null
       */
      billToAddressLine1: string | null;
      /**
       * Bill To Address Line2
       * @description Second line of billing address
       * @default null
       */
      billToAddressLine2: string | null;
      /**
       * Bill To City
       * @description City of billing address
       * @default null
       */
      billToCity: string | null;
      /**
       * Bill To Country
       * @description Country of billing address
       * @default null
       */
      billToCountry: string | null;
      /**
       * Bill To Customer Id
       * @description ID of the billing customer
       * @default null
       */
      billToCustomerId: string | null;
      /**
       * Bill To Customer Number
       * @description Number of the billing customer
       * @default null
       */
      billToCustomerNumber: string | null;
      /**
       * Bill To Name
       * @description Name on the billing address
       * @default null
       */
      billToName: string | null;
      /**
       * Bill To Post Code
       * @description Postal code of billing address
       * @default null
       */
      billToPostCode: string | null;
      /**
       * Bill To State
       * @description State of billing address
       * @default null
       */
      billToState: string | null;
      /**
       * Currency Code
       * @description Code of the currency used
       * @default null
       */
      currencyCode: string | null;
      /**
       * Currency Id
       * @description ID of the currency used
       * @default null
       */
      currencyId: string | null;
      /**
       * Customer Id
       * @description The unique identifier of the customer
       * @default null
       */
      customerId: string | null;
      /**
       * Customer Name
       * @description The name of the customer
       * @default null
       */
      customerName: string | null;
      /**
       * Customer Number
       * @description The customer's number
       * @default null
       */
      customerNumber: string | null;
      /**
       * Customer Purchase Order Reference
       * @description Customer's purchase order reference
       * @default null
       */
      customerPurchaseOrderReference: string | null;
      /**
       * Discount Amount
       * @description Amount of discount applied
       * @default null
       */
      discountAmount: number | null;
      /**
       * Discount Applied Before Tax
       * @description Whether discount was applied before tax
       * @default null
       */
      discountAppliedBeforeTax: boolean | null;
      /**
       * Due Date
       * @description The date payment is due
       * @default null
       */
      dueDate: string | null;
      /**
       * Email
       * @description Contact email address
       * @default null
       */
      email: string | null;
      /**
       * External Document Number
       * @description External document number reference
       * @default null
       */
      externalDocumentNumber: string | null;
      /**
       * Id
       * @description The unique identifier of the invoice
       * @default null
       */
      id: string | null;
      /**
       * Invoice Date
       * @description The date the invoice was created
       * @default null
       */
      invoiceDate: string | null;
      /**
       * Last Modified Date Time
       * @description When the invoice was last modified
       * @default null
       */
      lastModifiedDateTime: string | null;
      /**
       * Number
       * @description The invoice number
       * @default null
       */
      number: string | null;
      /**
       * Order Id
       * @description ID of the related order
       * @default null
       */
      orderId: string | null;
      /**
       * Order Number
       * @description Number of the related order
       * @default null
       */
      orderNumber: string | null;
      /**
       * Payment Terms Id
       * @description ID of the payment terms
       * @default null
       */
      paymentTermsId: string | null;
      /**
       * Phone Number
       * @description Contact phone number
       * @default null
       */
      phoneNumber: string | null;
      /**
       * Posting Date
       * @description The date the invoice was posted
       * @default null
       */
      postingDate: string | null;
      /**
       * Prices Include Tax
       * @description Whether prices include tax
       * @default null
       */
      pricesIncludeTax: boolean | null;
      /**
       * Remaining Amount
       * @description Remaining amount to be paid
       * @default null
       */
      remainingAmount: number | null;
      /**
       * Salesperson
       * @description Name of the salesperson
       * @default null
       */
      salesperson: string | null;
      /**
       * Sell To Address Line1
       * @description First line of selling address
       * @default null
       */
      sellToAddressLine1: string | null;
      /**
       * Sell To Address Line2
       * @description Second line of selling address
       * @default null
       */
      sellToAddressLine2: string | null;
      /**
       * Sell To City
       * @description City of selling address
       * @default null
       */
      sellToCity: string | null;
      /**
       * Sell To Country
       * @description Country of selling address
       * @default null
       */
      sellToCountry: string | null;
      /**
       * Sell To Post Code
       * @description Postal code of selling address
       * @default null
       */
      sellToPostCode: string | null;
      /**
       * Sell To State
       * @description State of selling address
       * @default null
       */
      sellToState: string | null;
      /**
       * Ship To Address Line1
       * @description First line of shipping address
       * @default null
       */
      shipToAddressLine1: string | null;
      /**
       * Ship To Address Line2
       * @description Second line of shipping address
       * @default null
       */
      shipToAddressLine2: string | null;
      /**
       * Ship To City
       * @description City of shipping address
       * @default null
       */
      shipToCity: string | null;
      /**
       * Ship To Contact
       * @description Contact person for shipping
       * @default null
       */
      shipToContact: string | null;
      /**
       * Ship To Country
       * @description Country of shipping address
       * @default null
       */
      shipToCountry: string | null;
      /**
       * Ship To Name
       * @description Name on the shipping address
       * @default null
       */
      shipToName: string | null;
      /**
       * Ship To Post Code
       * @description Postal code of shipping address
       * @default null
       */
      shipToPostCode: string | null;
      /**
       * Ship To State
       * @description State of shipping address
       * @default null
       */
      shipToState: string | null;
      /**
       * Shipment Method Id
       * @description ID of the shipment method
       * @default null
       */
      shipmentMethodId: string | null;
      /**
       * Status
       * @description Current status of the invoice
       * @default null
       */
      status: string | null;
      /**
       * Total Amount Excluding Tax
       * @description Total amount before tax
       * @default null
       */
      totalAmountExcludingTax: number | null;
      /**
       * Total Amount Including Tax
       * @description Total amount including tax
       * @default null
       */
      totalAmountIncludingTax: number | null;
      /**
       * Total Tax Amount
       * @description Total amount of tax
       * @default null
       */
      totalTaxAmount: number | null;
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
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_GET_A_LEAD tool input.
 */
type DYNAMICS365_DYNAMICSCRM_GET_A_LEAD_INPUT = {
  /**
   * Lead Id
   * @description The ID of the lead to retrieve
   */
  lead_id?: string;
};

/**
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_GET_A_LEAD tool output.
 */
type DYNAMICS365_DYNAMICSCRM_GET_A_LEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address Line1
       * @description First line of address
       * @default null
       */
      addressLine1: string | null;
      /**
       * Address Line2
       * @description Second line of address
       * @default null
       */
      addressLine2: string | null;
      /**
       * Business Relation
       * @description The business relationship type
       * @default null
       */
      businessRelation: string | null;
      /**
       * City
       * @description City
       * @default null
       */
      city: string | null;
      /**
       * Company Name
       * @description The name of the company
       * @default null
       */
      companyName: string | null;
      /**
       * Company Number
       * @description The company number
       * @default null
       */
      companyNumber: string | null;
      /**
       * Country
       * @description Country
       * @default null
       */
      country: string | null;
      /**
       * Display Name
       * @description The display name of the lead
       * @default null
       */
      displayName: string | null;
      /**
       * Email
       * @description Email address
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description The unique identifier of the lead
       * @default null
       */
      id: string | null;
      /**
       * Last Interaction Date
       * @description Date of last interaction
       * @default null
       */
      lastInteractionDate: string | null;
      /**
       * Last Modified Date Time
       * @description When the lead was last modified
       * @default null
       */
      lastModifiedDateTime: string | null;
      /**
       * Mobile Phone Number
       * @description Mobile phone number
       * @default null
       */
      mobilePhoneNumber: string | null;
      /**
       * Number
       * @description The lead number
       * @default null
       */
      number: string | null;
      /**
       * Phone Number
       * @description Primary phone number
       * @default null
       */
      phoneNumber: string | null;
      /**
       * Postal Code
       * @description Postal or ZIP code
       * @default null
       */
      postalCode: string | null;
      /**
       * Privacy Blocked
       * @description Whether privacy is blocked
       * @default null
       */
      privacyBlocked: boolean | null;
      /**
       * Search Name
       * @description Search name
       * @default null
       */
      searchName: string | null;
      /**
       * State
       * @description State or province
       * @default null
       */
      state: string | null;
      /**
       * Type
       * @description The type of lead
       * @default null
       */
      type: string | null;
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
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_UPDATE_CASE tool input.
 */
type DYNAMICS365_DYNAMICSCRM_UPDATE_CASE_INPUT = {
  /**
   * Case Id
   * @description The unique identifier (GUID) of the case to update.
   */
  case_id?: string;
  /**
   * Description
   * @description A detailed description of the issue or inquiry.
   * @default
   */
  description: string;
  /**
   * Prioritycode
   * @description The priority level of the case (e.g., 1 for High, 2 for Normal, 3 for Low).
   * @default 1
   */
  prioritycode: number;
  /**
   * Statuscode
   * @description The current status of the case (e.g., 1 for Active, 2 for In Progress, 3 for Resolved).
   * @default 1
   */
  statuscode: number;
  /**
   * Title
   * @description The subject or title of the case.
   * @default
   */
  title: string;
  /**
   * User Id
   * @description The user's ID or 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_UPDATE_CASE tool output.
 */
type DYNAMICS365_DYNAMICSCRM_UPDATE_CASE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Success message indicating case update
       */
      message: string;
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
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_UPDATE_INVOICE tool input.
 */
type DYNAMICS365_DYNAMICSCRM_UPDATE_INVOICE_INPUT = {
  /**
   * Description
   * @description The updated description of the invoice.
   * @default
   */
  description: string;
  /**
   * Duedate
   * @description The updated due date for the invoice in YYYY-MM-DD format.
   * @default
   */
  duedate: string;
  /**
   * Invoice Id
   * @description The unique identifier (GUID) of the invoice to update.
   */
  invoice_id?: string;
  /**
   * Name
   * @description The updated name or number of the invoice.
   * @default
   */
  name: string;
  /**
   * Totalamount
   * @description The updated total amount for the invoice.
   * @default 0
   */
  totalamount: number;
  /**
   * User Id
   * @description The user's ID or 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_UPDATE_INVOICE tool output.
 */
type DYNAMICS365_DYNAMICSCRM_UPDATE_INVOICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Success message indicating invoice update
       */
      message: string;
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
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_UPDATE_LEAD tool input.
 */
type DYNAMICS365_DYNAMICSCRM_UPDATE_LEAD_INPUT = {
  /**
   * Companyname
   * @description Name of the company associated with the lead.
   * @default
   */
  companyname: string;
  /**
   * Emailaddress1
   * @description Primary email address of the lead.
   * @default
   */
  emailaddress1: string;
  /**
   * Firstname
   * @description First name of the lead.
   * @default
   */
  firstname: string;
  /**
   * Lastname
   * @description Last name of the lead.
   * @default
   */
  lastname: string;
  /**
   * Lead Id
   * @description The unique identifier (GUID) of the lead to update.
   */
  lead_id?: string;
  /**
   * Subject
   * @description A brief description or title for the lead.
   * @default
   */
  subject: string;
  /**
   * Telephone1
   * @description Primary phone number of the lead.
   * @default
   */
  telephone1: string;
  /**
   * User Id
   * @description The user's ID or 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_UPDATE_LEAD tool output.
 */
type DYNAMICS365_DYNAMICSCRM_UPDATE_LEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Success message indicating lead update
       */
      message: string;
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
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_UPDATE_OPPORTUNITY tool input.
 */
type DYNAMICS365_DYNAMICSCRM_UPDATE_OPPORTUNITY_INPUT = {
  /**
   * Description
   * @description A brief description of the opportunity.
   * @default
   */
  description: string;
  /**
   * Estimatedclosedate
   * @description The expected close date of the opportunity in 'YYYY-MM-DD' format.
   * @default
   */
  estimatedclosedate: string;
  /**
   * Estimatedvalue
   * @description The anticipated revenue from the opportunity.
   * @default 0
   */
  estimatedvalue: number;
  /**
   * Name
   * @description The name or title of the opportunity.
   * @default
   */
  name: string;
  /**
   * Opportunity Id
   * @description The unique identifier (GUID) of the opportunity to update.
   */
  opportunity_id?: string;
  /**
   * Opportunityratingcode
   * @description The rating of the opportunity (e.g., 1 for Cold, 2 for Warm, 3 for Hot).
   * @default 0
   */
  opportunityratingcode: number;
  /**
   * Salesstagecode
   * @description The current sales stage (e.g., 1 for Qualify, 2 for Develop, 3 for Propose).
   * @default 0
   */
  salesstagecode: number;
  /**
   * User Id
   * @description The user's ID or 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_UPDATE_OPPORTUNITY tool output.
 */
type DYNAMICS365_DYNAMICSCRM_UPDATE_OPPORTUNITY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Success message indicating opportunity update
       */
      message: string;
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
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_UPDATE_SALES_ORDER tool input.
 */
type DYNAMICS365_DYNAMICSCRM_UPDATE_SALES_ORDER_INPUT = {
  /**
   * Description
   * @description The updated description of the sales order.
   * @default
   */
  description: string;
  /**
   * Discountamount
   * @description The updated discount amount for the order.
   * @default 0
   */
  discountamount: number;
  /**
   * Freightamount
   * @description The updated freight or shipping cost for the order.
   * @default 0
   */
  freightamount: number;
  /**
   * Name
   * @description The updated name of the sales order.
   * @default
   */
  name: string;
  /**
   * Salesorder Id
   * @description The unique identifier (GUID) of the sales order to update.
   */
  salesorder_id?: string;
  /**
   * User Id
   * @description The user's ID or 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of DYNAMICS365's DYNAMICS365_DYNAMICSCRM_UPDATE_SALES_ORDER tool output.
 */
type DYNAMICS365_DYNAMICSCRM_UPDATE_SALES_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Success message indicating sales order update
       */
      message: string;
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
 * Type map of all available tool input types for toolkit "DYNAMICS365".
 */
export type DYNAMICS365_TOOL_INPUTS = {
  DYNAMICS365_GET_ALL_INVOICES_ACTION: DYNAMICS365_DYNAMICS365_GET_ALL_INVOICES_ACTION_INPUT
  DYNAMICSCRM_CREATE_ACCOUNT: DYNAMICS365_DYNAMICSCRM_CREATE_ACCOUNT_INPUT
  DYNAMICSCRM_CREATE_CASE: DYNAMICS365_DYNAMICSCRM_CREATE_CASE_INPUT
  DYNAMICSCRM_CREATE_CONTACT: DYNAMICS365_DYNAMICSCRM_CREATE_CONTACT_INPUT
  DYNAMICSCRM_CREATE_INVOICE: DYNAMICS365_DYNAMICSCRM_CREATE_INVOICE_INPUT
  DYNAMICSCRM_CREATE_LEAD: DYNAMICS365_DYNAMICSCRM_CREATE_LEAD_INPUT
  DYNAMICSCRM_CREATE_OPPORTUNITY: DYNAMICS365_DYNAMICSCRM_CREATE_OPPORTUNITY_INPUT
  DYNAMICSCRM_CREATE_SALES_ORDER: DYNAMICS365_DYNAMICSCRM_CREATE_SALES_ORDER_INPUT
  DYNAMICSCRM_GET_ALL_LEADS: DYNAMICS365_DYNAMICSCRM_GET_ALL_LEADS_INPUT
  DYNAMICSCRM_GET_A_INVOICE: DYNAMICS365_DYNAMICSCRM_GET_A_INVOICE_INPUT
  DYNAMICSCRM_GET_A_LEAD: DYNAMICS365_DYNAMICSCRM_GET_A_LEAD_INPUT
  DYNAMICSCRM_UPDATE_CASE: DYNAMICS365_DYNAMICSCRM_UPDATE_CASE_INPUT
  DYNAMICSCRM_UPDATE_INVOICE: DYNAMICS365_DYNAMICSCRM_UPDATE_INVOICE_INPUT
  DYNAMICSCRM_UPDATE_LEAD: DYNAMICS365_DYNAMICSCRM_UPDATE_LEAD_INPUT
  DYNAMICSCRM_UPDATE_OPPORTUNITY: DYNAMICS365_DYNAMICSCRM_UPDATE_OPPORTUNITY_INPUT
  DYNAMICSCRM_UPDATE_SALES_ORDER: DYNAMICS365_DYNAMICSCRM_UPDATE_SALES_ORDER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DYNAMICS365".
 */
export type DYNAMICS365_TOOL_OUTPUTS = {
  DYNAMICS365_GET_ALL_INVOICES_ACTION: DYNAMICS365_DYNAMICS365_GET_ALL_INVOICES_ACTION_OUTPUT
  DYNAMICSCRM_CREATE_ACCOUNT: DYNAMICS365_DYNAMICSCRM_CREATE_ACCOUNT_OUTPUT
  DYNAMICSCRM_CREATE_CASE: DYNAMICS365_DYNAMICSCRM_CREATE_CASE_OUTPUT
  DYNAMICSCRM_CREATE_CONTACT: DYNAMICS365_DYNAMICSCRM_CREATE_CONTACT_OUTPUT
  DYNAMICSCRM_CREATE_INVOICE: DYNAMICS365_DYNAMICSCRM_CREATE_INVOICE_OUTPUT
  DYNAMICSCRM_CREATE_LEAD: DYNAMICS365_DYNAMICSCRM_CREATE_LEAD_OUTPUT
  DYNAMICSCRM_CREATE_OPPORTUNITY: DYNAMICS365_DYNAMICSCRM_CREATE_OPPORTUNITY_OUTPUT
  DYNAMICSCRM_CREATE_SALES_ORDER: DYNAMICS365_DYNAMICSCRM_CREATE_SALES_ORDER_OUTPUT
  DYNAMICSCRM_GET_ALL_LEADS: DYNAMICS365_DYNAMICSCRM_GET_ALL_LEADS_OUTPUT
  DYNAMICSCRM_GET_A_INVOICE: DYNAMICS365_DYNAMICSCRM_GET_A_INVOICE_OUTPUT
  DYNAMICSCRM_GET_A_LEAD: DYNAMICS365_DYNAMICSCRM_GET_A_LEAD_OUTPUT
  DYNAMICSCRM_UPDATE_CASE: DYNAMICS365_DYNAMICSCRM_UPDATE_CASE_OUTPUT
  DYNAMICSCRM_UPDATE_INVOICE: DYNAMICS365_DYNAMICSCRM_UPDATE_INVOICE_OUTPUT
  DYNAMICSCRM_UPDATE_LEAD: DYNAMICS365_DYNAMICSCRM_UPDATE_LEAD_OUTPUT
  DYNAMICSCRM_UPDATE_OPPORTUNITY: DYNAMICS365_DYNAMICSCRM_UPDATE_OPPORTUNITY_OUTPUT
  DYNAMICSCRM_UPDATE_SALES_ORDER: DYNAMICS365_DYNAMICSCRM_UPDATE_SALES_ORDER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DYNAMICS365 toolkit.
 */
export const DYNAMICS365 = {
  slug: "dynamics365",
  tools: {
    /**
     * Get all invoices action
     */
    DYNAMICS365_GET_ALL_INVOICES_ACTION: "DYNAMICS365_DYNAMICS365_GET_ALL_INVOICES_ACTION",
    /**
     * Creates a new account entity record in dynamics crm using the web api.
     */
    DYNAMICSCRM_CREATE_ACCOUNT: "DYNAMICS365_DYNAMICSCRM_CREATE_ACCOUNT",
    /**
     * Creates a new case (incident) entity record in dynamics crm using the web api.
     */
    DYNAMICSCRM_CREATE_CASE: "DYNAMICS365_DYNAMICSCRM_CREATE_CASE",
    /**
     * Creates a new contact entity record in dynamics crm using the web api.
     */
    DYNAMICSCRM_CREATE_CONTACT: "DYNAMICS365_DYNAMICSCRM_CREATE_CONTACT",
    /**
     * Creates a new invoice entity record in dynamics crm using the web api.
     */
    DYNAMICSCRM_CREATE_INVOICE: "DYNAMICS365_DYNAMICSCRM_CREATE_INVOICE",
    /**
     * Creates a new lead entity record in dynamics crm using the web api.
     */
    DYNAMICSCRM_CREATE_LEAD: "DYNAMICS365_DYNAMICSCRM_CREATE_LEAD",
    /**
     * Creates a new opportunity entity record in dynamics crm using the web api.
     */
    DYNAMICSCRM_CREATE_OPPORTUNITY: "DYNAMICS365_DYNAMICSCRM_CREATE_OPPORTUNITY",
    /**
     * Creates a new sales order entity record in dynamics crm using the web api.
     */
    DYNAMICSCRM_CREATE_SALES_ORDER: "DYNAMICS365_DYNAMICSCRM_CREATE_SALES_ORDER",
    /**
     * Dynamicscrm get all leads
     */
    DYNAMICSCRM_GET_ALL_LEADS: "DYNAMICS365_DYNAMICSCRM_GET_ALL_LEADS",
    /**
     * Dynamicscrm get a invoice
     */
    DYNAMICSCRM_GET_A_INVOICE: "DYNAMICS365_DYNAMICSCRM_GET_A_INVOICE",
    /**
     * Dynamicscrm get a lead
     */
    DYNAMICSCRM_GET_A_LEAD: "DYNAMICS365_DYNAMICSCRM_GET_A_LEAD",
    /**
     * Updates an existing case (incident) entity record in dynamics crm using the web api.
     */
    DYNAMICSCRM_UPDATE_CASE: "DYNAMICS365_DYNAMICSCRM_UPDATE_CASE",
    /**
     * Updates an existing invoice entity record in dynamics crm using the web api.
     */
    DYNAMICSCRM_UPDATE_INVOICE: "DYNAMICS365_DYNAMICSCRM_UPDATE_INVOICE",
    /**
     * Updates an existing lead entity record in dynamics crm using the web api.
     */
    DYNAMICSCRM_UPDATE_LEAD: "DYNAMICS365_DYNAMICSCRM_UPDATE_LEAD",
    /**
     * Updates an existing opportunity entity record in dynamics crm using the web api.
     */
    DYNAMICSCRM_UPDATE_OPPORTUNITY: "DYNAMICS365_DYNAMICSCRM_UPDATE_OPPORTUNITY",
    /**
     * Updates an existing sales order entity record in dynamics crm using the web api.
     */
    DYNAMICSCRM_UPDATE_SALES_ORDER: "DYNAMICS365_DYNAMICSCRM_UPDATE_SALES_ORDER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DYNAMICS365".
 */
export type DYNAMICS365_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DYNAMICS365".
 */
export type DYNAMICS365_TRIGGER_EVENTS = {}
