// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ALTOVIZ's ALTOVIZ_CREATE_PRODUCT tool input.
 */
type ALTOVIZ_CREATE_PRODUCT_INPUT = {
  /**
   * Active
   * @description Whether the product is active
   */
  active?: boolean;
  /**
   * Default Quantity
   * @description Default quantity for the product
   */
  default_quantity?: number;
  /**
   * Description
   * @description Product description
   */
  description?: string;
  /**
   * Family
   * @description Product family details
   * @default null
   */
  family: {
      [key: string]: unknown;
  } | null;
  /**
   * Internal Id
   * @description Internal ID used in your system
   * @default null
   */
  internal_id: string | null;
  /**
   * Internal Notes
   * @description Internal notes about the product
   * @default null
   */
  internal_notes: string | null;
  /**
   * Is Unit Price Tax Included
   * @description Whether the unit price includes VAT
   */
  is_unit_price_tax_included?: boolean;
  /**
   * Name
   * @description Name of the product
   */
  name?: string;
  /**
   * Number
   * @description Product number/SKU
   */
  number?: string;
  /**
   * Product Type
   * @description Type of product (Product or Service)
   * @enum {string}
   */
  product_type?: "Product" | "Service";
  /**
   * Purchase Price
   * @description Purchase price of the product
   */
  purchase_price?: number;
  /**
   * Unit
   * @description Unit of measurement details
   * @default null
   */
  unit: {
      [key: string]: unknown;
  } | null;
  /**
   * Unit Price
   * @description Unit price of the product
   */
  unit_price?: number;
  /**
   * Vat
   * @description VAT details containing rate and region
   * @default null
   */
  vat: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of ALTOVIZ's ALTOVIZ_CREATE_PRODUCT tool output.
 */
type ALTOVIZ_CREATE_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Whether the product is active
       */
      active: boolean;
      /**
       * Default Quantity
       * @description Default quantity for the product
       */
      defaultQuantity: number;
      /**
       * Description
       * @description Product description
       */
      description: string;
      /**
       * Id
       * @description The unique identifier of the created product
       */
      id: number;
      /**
       * Is Unit Price Tax Included
       * @description Whether the unit price includes VAT
       */
      isUnitPriceTaxIncluded: boolean;
      /**
       * Name
       * @description Name of the product
       */
      name: string;
      /**
       * Number
       * @description Product number/SKU
       */
      number: string;
      /**
       * Purchase Price
       * @description Purchase price of the product
       */
      purchasePrice: number;
      /**
       * Type
       * @description Type of product
       */
      type: string;
      /**
       * Unit Price
       * @description Unit price of the product
       */
      unitPrice: number;
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
 * Type of ALTOVIZ's ALTOVIZ_DELETE_PRODUCT tool input.
 */
type ALTOVIZ_DELETE_PRODUCT_INPUT = {
  /**
   * Product Id
   * @description The unique identifier of the product to delete
   */
  product_id?: string;
};

/**
 * Type of ALTOVIZ's ALTOVIZ_DELETE_PRODUCT tool output.
 */
type ALTOVIZ_DELETE_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the product was successfully deleted
       * @default true
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
 * Type of ALTOVIZ's ALTOVIZ_FIND_CONTACT tool input.
 */
type ALTOVIZ_FIND_CONTACT_INPUT = {
  /**
   * Email
   * Format: email
   * @description The email address to search for in contacts
   */
  email?: string;
};

/**
 * Type of ALTOVIZ's ALTOVIZ_FIND_CONTACT tool output.
 */
type ALTOVIZ_FIND_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact
       * @description Contact details if found, null if not found
       * @default null
       */
      contact: {
          /**
           * Address
           * @description Address of the contact
           * @default null
           */
          address: string | null;
          /**
           * Company
           * @description Company name of the contact
           * @default null
           */
          company: string | null;
          /**
           * Email
           * @description Email address of the contact
           */
          email: string;
          /**
           * Id
           * @description Unique identifier of the contact
           */
          id: number;
          /**
           * Name
           * @description Name of the contact
           * @default null
           */
          name: string | null;
          /**
           * Phone
           * @description Phone number of the contact
           * @default null
           */
          phone: string | null;
      } | null;
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
 * Type of ALTOVIZ's ALTOVIZ_FIND_CUSTOMER tool input.
 */
type ALTOVIZ_FIND_CUSTOMER_INPUT = {
  /**
   * Email
   * Format: email
   * @description The email address of the customer to find
   */
  email?: string;
};

/**
 * Type of ALTOVIZ's ALTOVIZ_FIND_CUSTOMER tool output.
 */
type ALTOVIZ_FIND_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Customer
       * @description Customer details if found, null if not found
       * @default null
       */
      customer: {
          /**
           * Active
           * @description Customer account status
           * @default null
           */
          active: boolean | null;
          /**
           * BillingAddress
           * @description Billing address details
           * @default null
           */
          billingAddress: {
              /**
               * City
               * @description City name
               * @default null
               */
              city: string | null;
              /**
               * Country Iso
               * @description Country ISO code
               * @default null
               */
              countryIso: string | null;
              /**
               * Country Name
               * @description Country name
               * @default null
               */
              countryName: string | null;
              /**
               * Formatted Address
               * @description Full formatted address
               * @default null
               */
              formattedAddress: string | null;
              /**
               * Inline Address
               * @description Inline formatted address
               * @default null
               */
              inlineAddress: string | null;
              /**
               * Street
               * @description Street address
               * @default null
               */
              street: string | null;
              /**
               * Zipcode
               * @description Zip/Postal code
               * @default null
               */
              zipcode: string | null;
          } | null;
          /**
           * BillingOptions
           * @description Billing options
           * @default null
           */
          billingOptions: {
              /**
               * Vat Reverse Charge
               * @description VAT reverse charge status
               * @default null
               */
              vatReverseCharge: boolean | null;
              /**
               * Vendor Reference
               * @description Vendor reference
               * @default null
               */
              vendorReference: string | null;
          } | null;
          /**
           * Cell Phone
           * @description Cell phone number
           * @default null
           */
          cellPhone: string | null;
          /**
           * CompanyInformation
           * @description Company information
           * @default null
           */
          companyInformations: {
              /**
               * Siret
               * @description SIRET number
               * @default null
               */
              siret: string | null;
              /**
               * Vat Number
               * @description VAT number
               * @default null
               */
              vatNumber: string | null;
          } | null;
          /**
           * Company Name
           * @description Company name
           * @default null
           */
          companyName: string | null;
          /**
           * Email
           * @description Email address of the customer
           */
          email: string;
          /**
           * First Name
           * @description First name of the customer
           * @default null
           */
          firstName: string | null;
          /**
           * Id
           * @description Unique identifier of the customer
           */
          id: number;
          /**
           * Internal Id
           * @description Internal ID of the customer
           * @default null
           */
          internalId: string | null;
          /**
           * Internal Notes
           * @description Internal notes
           * @default null
           */
          internalNotes: string | null;
          /**
           * Last Name
           * @description Last name of the customer
           * @default null
           */
          lastName: string | null;
          /**
           * Name
           * @description Full name of the customer
           * @default null
           */
          name: string | null;
          /**
           * Number
           * @description Customer number
           * @default null
           */
          number: string | null;
          /**
           * Phone
           * @description Phone number
           * @default null
           */
          phone: string | null;
          /**
           * BillingAddress
           * @description Shipping address details
           * @default null
           */
          shippingAddress: {
              /**
               * City
               * @description City name
               * @default null
               */
              city: string | null;
              /**
               * Country Iso
               * @description Country ISO code
               * @default null
               */
              countryIso: string | null;
              /**
               * Country Name
               * @description Country name
               * @default null
               */
              countryName: string | null;
              /**
               * Formatted Address
               * @description Full formatted address
               * @default null
               */
              formattedAddress: string | null;
              /**
               * Inline Address
               * @description Inline formatted address
               * @default null
               */
              inlineAddress: string | null;
              /**
               * Street
               * @description Street address
               * @default null
               */
              street: string | null;
              /**
               * Zipcode
               * @description Zip/Postal code
               * @default null
               */
              zipcode: string | null;
          } | null;
          /**
           * Title
           * @description Customer title
           * @default null
           */
          title: string | null;
          /**
           * Type
           * @description Customer type
           * @default null
           */
          type: string | null;
      } | null;
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
 * Type of ALTOVIZ's ALTOVIZ_FIND_PRODUCT tool input.
 */
type ALTOVIZ_FIND_PRODUCT_INPUT = {
  /**
   * Product Number
   * @description The product number to search for
   */
  product_number?: string;
};

/**
 * Type of ALTOVIZ's ALTOVIZ_FIND_PRODUCT tool output.
 */
type ALTOVIZ_FIND_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Product
       * @description Product details if found, null if not found
       * @default null
       */
      product: {
          /**
           * Active
           * @description Product active status
           * @default null
           */
          active: boolean | null;
          /**
           * Default Quantity
           * @description Default quantity
           * @default null
           */
          defaultQuantity: number | null;
          /**
           * Description
           * @description Product description
           * @default null
           */
          description: string | null;
          /**
           * ProductFamily
           * @description Product family information
           * @default null
           */
          family: {
              /**
               * Label
               * @description Product family label
               * @default null
               */
              label: string | null;
              /**
               * Number
               * @description Product family number
               * @default null
               */
              number: string | null;
          } | null;
          /**
           * Id
           * @description Unique identifier of the product
           */
          id: number;
          /**
           * Internal Id
           * @description Internal identifier
           * @default null
           */
          internalId: string | null;
          /**
           * Internal Notes
           * @description Internal notes
           * @default null
           */
          internalNotes: string | null;
          /**
           * Is Unit Price Tax Included
           * @description Whether unit price includes tax
           * @default null
           */
          isUnitPriceTaxIncluded: boolean | null;
          /**
           * Name
           * @description Name of the product
           */
          name: string;
          /**
           * Number
           * @description Product number
           */
          number: string;
          /**
           * Purchase Price
           * @description Purchase price
           * @default null
           */
          purchasePrice: number | null;
          /**
           * Type
           * @description Product type
           * @default null
           */
          type: string | null;
          /**
           * ProductUnit
           * @description Product unit information
           * @default null
           */
          unit: {
              /**
               * Code
               * @description Unit code
               * @default null
               */
              code: string | null;
              /**
               * Type
               * @description Unit type
               * @default null
               */
              type: string | null;
          } | null;
          /**
           * Unit Price
           * @description Unit price
           * @default null
           */
          unitPrice: number | null;
          /**
           * ProductVAT
           * @description VAT information
           * @default null
           */
          vat: {
              /**
               * Rate
               * @description VAT rate
               * @default null
               */
              rate: number | null;
              /**
               * Region
               * @description VAT region
               * @default null
               */
              region: string | null;
          } | null;
      } | null;
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
 * Type of ALTOVIZ's ALTOVIZ_GET_CLASSIFICATIONS tool input.
 */
type ALTOVIZ_GET_CLASSIFICATIONS_INPUT = {
  /**
   * Type
   * @description Filter classifications by type. Allowed values are 'Sale', 'Expense', or 'Other'.
   * @default null
   * @enum {string|null}
   */
  type: "Sale" | "Expense" | "Other" | null;
};

/**
 * Type of ALTOVIZ's ALTOVIZ_GET_CLASSIFICATIONS tool output.
 */
type ALTOVIZ_GET_CLASSIFICATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Classifications
       * @description List of classifications retrieved from Altoviz
       */
      classifications: {
          /**
           * Account Number
           * @description Associated account number
           */
          accountNumber: string;
          /**
           * DefaultVat
           * @description Default VAT settings
           * @default null
           */
          defaultVat: {
              /**
               * Id
               * @description The ID of the VAT rate
               */
              id: number;
              /**
               * Label
               * @description The display label for the VAT rate
               */
              label: string;
              /**
               * Rate
               * @description The VAT rate value
               */
              rate: number;
              /**
               * Region
               * @description The region code for the VAT rate
               */
              region: string;
          } | null;
          /**
           * Description
           * @description Detailed description of the classification
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the classification
           */
          id: number;
          /**
           * Is Product
           * @description Indicates if classification is for products
           */
          isProduct: boolean;
          /**
           * Is Service
           * @description Indicates if classification is for services
           */
          isService: boolean;
          /**
           * Label
           * @description Display label of the classification
           */
          label: string;
          /**
           * Micro Business Declaration Type
           * @description Declaration type for micro businesses
           * @default null
           */
          microBusinessDeclarationType: string | null;
          /**
           * Type
           * @description Type of classification (Sale/Expense/Other)
           */
          type: string;
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
 * Type of ALTOVIZ's ALTOVIZ_GET_UNITS tool input.
 */
type ALTOVIZ_GET_UNITS_INPUT = object;

/**
 * Type of ALTOVIZ's ALTOVIZ_GET_UNITS tool output.
 */
type ALTOVIZ_GET_UNITS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Units
       * @description List of units retrieved from Altoviz
       */
      units: {
          /**
           * Code
           * @description Code of the unit
           */
          code: string;
          /**
           * Conversion
           * @description Conversion factor of the unit
           */
          conversion: number;
          /**
           * Decimals
           * @description Number of decimal places for the unit
           */
          decimals: number;
          /**
           * Id
           * @description Unique identifier of the unit
           */
          id: number;
          /**
           * Name
           * @description Name of the unit
           */
          name: string;
          /**
           * Symbol
           * @description Symbol of the unit
           */
          symbol: string;
          /**
           * Type
           * @description Type of the unit
           */
          type: string;
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
 * Type of ALTOVIZ's ALTOVIZ_GET_VATS tool input.
 */
type ALTOVIZ_GET_VATS_INPUT = object;

/**
 * Type of ALTOVIZ's ALTOVIZ_GET_VATS tool output.
 */
type ALTOVIZ_GET_VATS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Vat Rates
       * @description List of available VAT rates
       */
      vat_rates: {
          /**
           * Id
           * @description Unique identifier for the VAT rate
           */
          id: number;
          /**
           * Label
           * @description A descriptive label for the VAT rate
           */
          label: string;
          /**
           * Rate
           * @description The VAT rate percentage
           */
          rate: number;
          /**
           * Region
           * @description The region code associated with the VAT rate
           */
          region: string;
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
 * Type of ALTOVIZ's ALTOVIZ_UPDATE_CUSTOMER tool input.
 */
type ALTOVIZ_UPDATE_CUSTOMER_INPUT = {
  /**
   * Cell Phone
   * @description Customer's cell phone number
   * @default null
   */
  cell_phone: string | null;
  /**
   * Company Name
   * @description Customer's company name
   * @default null
   */
  company_name: string | null;
  /**
   * Customer Id
   * @description The unique identifier of the customer to update
   */
  customer_id?: string;
  /**
   * Email
   * Format: email
   * @description Customer's email address
   * @default null
   */
  email: string | null;
  /**
   * First Name
   * @description Customer's first name
   * @default null
   */
  first_name: string | null;
  /**
   * Internal Id
   * @description Customer's internal ID
   * @default null
   */
  internal_id: string | null;
  /**
   * Last Name
   * @description Customer's last name
   * @default null
   */
  last_name: string | null;
  /**
   * Phone
   * @description Customer's phone number
   * @default null
   */
  phone: string | null;
  /**
   * Title
   * @description Customer's title
   * @default null
   */
  title: string | null;
};

/**
 * Type of ALTOVIZ's ALTOVIZ_UPDATE_CUSTOMER tool output.
 */
type ALTOVIZ_UPDATE_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cell Phone
       * @description Cell phone number
       * @default null
       */
      cell_phone: string | null;
      /**
       * Company Name
       * @description Company name
       * @default null
       */
      company_name: string | null;
      /**
       * Email
       * @description Email address of the customer
       */
      email: string;
      /**
       * First Name
       * @description First name of the customer
       * @default null
       */
      first_name: string | null;
      /**
       * Id
       * @description The unique identifier of the updated customer
       */
      id: number;
      /**
       * Internal Id
       * @description Internal ID
       * @default null
       */
      internal_id: string | null;
      /**
       * Last Name
       * @description Last name of the customer
       * @default null
       */
      last_name: string | null;
      /**
       * Phone
       * @description Phone number
       * @default null
       */
      phone: string | null;
      /**
       * Title
       * @description Customer title
       * @default null
       */
      title: string | null;
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
 * Type map of all available tool input types for toolkit "ALTOVIZ".
 */
export type ALTOVIZ_TOOL_INPUTS = {
  CREATE_PRODUCT: ALTOVIZ_CREATE_PRODUCT_INPUT
  DELETE_PRODUCT: ALTOVIZ_DELETE_PRODUCT_INPUT
  FIND_CONTACT: ALTOVIZ_FIND_CONTACT_INPUT
  FIND_CUSTOMER: ALTOVIZ_FIND_CUSTOMER_INPUT
  FIND_PRODUCT: ALTOVIZ_FIND_PRODUCT_INPUT
  GET_CLASSIFICATIONS: ALTOVIZ_GET_CLASSIFICATIONS_INPUT
  GET_UNITS: ALTOVIZ_GET_UNITS_INPUT
  GET_VATS: ALTOVIZ_GET_VATS_INPUT
  UPDATE_CUSTOMER: ALTOVIZ_UPDATE_CUSTOMER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ALTOVIZ".
 */
export type ALTOVIZ_TOOL_OUTPUTS = {
  CREATE_PRODUCT: ALTOVIZ_CREATE_PRODUCT_OUTPUT
  DELETE_PRODUCT: ALTOVIZ_DELETE_PRODUCT_OUTPUT
  FIND_CONTACT: ALTOVIZ_FIND_CONTACT_OUTPUT
  FIND_CUSTOMER: ALTOVIZ_FIND_CUSTOMER_OUTPUT
  FIND_PRODUCT: ALTOVIZ_FIND_PRODUCT_OUTPUT
  GET_CLASSIFICATIONS: ALTOVIZ_GET_CLASSIFICATIONS_OUTPUT
  GET_UNITS: ALTOVIZ_GET_UNITS_OUTPUT
  GET_VATS: ALTOVIZ_GET_VATS_OUTPUT
  UPDATE_CUSTOMER: ALTOVIZ_UPDATE_CUSTOMER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ALTOVIZ toolkit.
 */
export const ALTOVIZ = {
  slug: "altoviz",
  tools: {
    /**
     * Creates a new product in the altoviz system. this tool allows for the independent creation of a product with all necessary details.
     */
    CREATE_PRODUCT: "ALTOVIZ_CREATE_PRODUCT",
    /**
     * This tool allows you to delete an existing product from altoviz. the action permanently removes the product from the system.
     */
    DELETE_PRODUCT: "ALTOVIZ_DELETE_PRODUCT",
    /**
     * This tool allows searching for contacts in altoviz using an email address. the action is independently executable and returns contact details if found.
     */
    FIND_CONTACT: "ALTOVIZ_FIND_CONTACT",
    /**
     * This tool allows you to find a customer in altoviz by their email address. this is a standalone action that doesn't require any resource ids or dependencies on other tools.
     */
    FIND_CUSTOMER: "ALTOVIZ_FIND_CUSTOMER",
    /**
     * This tool allows users to find products in altoviz using the product number. it retrieves detailed product information including id, name, number, description, price, and other relevant metadata. it is a critical operation for product management in altoviz.
     */
    FIND_PRODUCT: "ALTOVIZ_FIND_PRODUCT",
    /**
     * This tool retrieves a list of classifications from the altoviz platform. classifications are essential for producing accounting registers from user-created invoices. it can fetch all classifications or filter them by type.
     */
    GET_CLASSIFICATIONS: "ALTOVIZ_GET_CLASSIFICATIONS",
    /**
     * This tool retrieves a list of all available units in the altoviz system. units are used for product measurements and quantity specifications in various transactions.
     */
    GET_UNITS: "ALTOVIZ_GET_UNITS",
    /**
     * This tool retrieves a list of all available vat rates from altoviz. it's essential for creating and managing invoices and quotes where vat calculations are required. it supports retrieving vat rates, validating them for different regions, and ensuring correct tax calculations in financial documents.
     */
    GET_VATS: "ALTOVIZ_GET_VATS",
    /**
     * This tool updates an existing customer's information in altoviz. it enables modification of various customer details including contact information, company details, and personal information.
     */
    UPDATE_CUSTOMER: "ALTOVIZ_UPDATE_CUSTOMER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ALTOVIZ".
 */
export type ALTOVIZ_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ALTOVIZ".
 */
export type ALTOVIZ_TRIGGER_EVENTS = {}
