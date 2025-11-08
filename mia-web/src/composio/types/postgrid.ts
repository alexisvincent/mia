// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of POSTGRID's POSTGRID_CREATE_BANK_ACCOUNT tool input.
 */
type POSTGRID_CREATE_BANK_ACCOUNT_INPUT = {
  /**
   * Account Holder Name
   * @description Name of the bank account holder
   */
  accountHolderName?: string;
  /**
   * Account Number
   * @description Bank account number
   */
  accountNumber?: string;
  /**
   * Account Type
   * @description Type of bank account
   * @enum {string}
   */
  accountType?: "checking" | "savings";
  /**
   * Bank Country Code
   * @description Country code (ISO 3166-1 alpha-2)
   */
  bankCountryCode?: string;
  /**
   * Bank Name
   * @description Name of the bank
   */
  bankName?: string;
  /**
   * Contact Email
   * @description Contact email for the account
   */
  contactEmail?: string;
  /**
   * Contact Phone
   * @description Contact phone number
   * @default null
   */
  contactPhone: string | null;
  /**
   * Routing Number
   * @description 9-digit bank routing number
   */
  routingNumber?: string;
  /**
   * Signature Image
   * @description URL or file path for signature image
   * @default null
   */
  signatureImage: string | null;
  /**
   * Signature Text
   * @description Signature text
   * @default null
   */
  signatureText: string | null;
};

/**
 * Type of POSTGRID's POSTGRID_CREATE_BANK_ACCOUNT tool output.
 */
type POSTGRID_CREATE_BANK_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Account Holder Name */
      accountHolderName: string;
      /** Account Number */
      accountNumber: string;
      /** Account Type */
      accountType: string;
      /** Bank Name */
      bankName: string;
      /** Contact Email */
      contactEmail: string;
      /**
       * Contact Phone
       * @default null
       */
      contactPhone: string | null;
      /** Created At */
      createdAt: string;
      /** Id */
      id: string;
      /** Object */
      object: string;
      /** Routing Number */
      routingNumber: string;
      /** Status */
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
 * Type of POSTGRID's POSTGRID_CREATE_CONTACT tool input.
 */
type POSTGRID_CREATE_CONTACT_INPUT = {
  /**
   * Address Line1
   * @description Street address line 1
   */
  addressLine1?: string;
  /**
   * Address Line2
   * @description Street address line 2
   * @default null
   */
  addressLine2: string | null;
  /**
   * City
   * @description City name
   */
  city?: string;
  /**
   * Country Code
   * @description Country ISO code
   */
  countryCode?: string;
  /**
   * Email
   * @description Email address
   * @default null
   */
  email: string | null;
  /**
   * First Name
   * @description First name of the contact
   */
  firstName?: string;
  /**
   * Last Name
   * @description Last name of the contact
   */
  lastName?: string;
  /**
   * Metadata
   * @description Custom metadata as key-value pairs
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Organization
   * @description Organization name
   * @default null
   */
  organization: string | null;
  /**
   * Phone Number
   * @description Phone number in E.164 format
   * @default null
   */
  phoneNumber: string | null;
  /**
   * Postal Or Zip
   * @description Postal or ZIP code
   */
  postalOrZip?: string;
  /**
   * Province Or State
   * @description Province or state
   */
  provinceOrState?: string;
};

/**
 * Type of POSTGRID's POSTGRID_CREATE_CONTACT tool output.
 */
type POSTGRID_CREATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address Line1
       * @description Street address line 1
       */
      addressLine1: string;
      /**
       * Address Line2
       * @description Street address line 2
       * @default null
       */
      addressLine2: string | null;
      /**
       * City
       * @description City name
       */
      city: string;
      /**
       * Country Code
       * @description Country ISO code
       */
      countryCode: string;
      /**
       * Created At
       * @description Timestamp when contact was created
       */
      createdAt: string;
      /**
       * Email
       * @description Email address of the contact
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description First name of the contact
       */
      firstName: string;
      /**
       * Id
       * @description Unique identifier for the contact
       */
      id: string;
      /**
       * Last Name
       * @description Last name of the contact
       */
      lastName: string;
      /**
       * Metadata
       * @description Custom metadata
       * @default null
       */
      metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Object
       * @description Object type, e.g., 'contact'
       */
      object: string;
      /**
       * Organization
       * @description Organization name
       * @default null
       */
      organization: string | null;
      /**
       * Phone Number
       * @description Phone number of the contact
       * @default null
       */
      phoneNumber: string | null;
      /**
       * Postal Or Zip
       * @description Postal or ZIP code
       */
      postalOrZip: string;
      /**
       * Province Or State
       * @description Province or state
       */
      provinceOrState: string;
      /**
       * Updated At
       * @description Timestamp when contact was last updated
       */
      updatedAt: string;
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
 * Type of POSTGRID's POSTGRID_CREATE_LETTER tool input.
 */
type POSTGRID_CREATE_LETTER_INPUT = {
  /**
   * Description
   * @description Description of the letter
   * @default null
   */
  description: string | null;
  /**
   * Express
   * @description Request express shipping
   * @default null
   */
  express: boolean | null;
  /**
   * From Address
   * @description Sender's address details
   */
  from_address?: {
      /**
       * Address Line1
       * @description First line of the address
       */
      addressLine1: string;
      /**
       * Address Line2
       * @description Second line of the address
       * @default null
       */
      addressLine2: string | null;
      /**
       * City
       * @description City of the address
       */
      city: string;
      /**
       * Country
       * @description Country of the address
       */
      country: string;
      /**
       * First Name
       * @description First name of the contact
       * @default null
       */
      firstName: string | null;
      /**
       * Last Name
       * @description Last name of the contact
       * @default null
       */
      lastName: string | null;
      /**
       * Organization
       * @description Company or organization name
       * @default null
       */
      organization: string | null;
      /**
       * Postal Or Zip
       * @description Postal or ZIP code of the address
       */
      postalOrZip: string;
      /**
       * Province Or State
       * @description State or province of the address
       */
      provinceOrState: string;
  };
  /**
   * Html
   * @description HTML content of the letter. Required if pdf is not provided
   * @default null
   */
  html: string | null;
  /**
   * Merge Variables
   * @description Key-value pairs for merging data into the letter content
   * @default null
   */
  mergeVariables: {
      [key: string]: unknown;
  } | null;
  /**
   * Metadata
   * @description Custom metadata associated with the letter
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Pdf
   * @description URL to a PDF file for the letter content. Required if html is not provided
   * @default null
   */
  pdf: string | null;
  /**
   * Perforated Page
   * @description Page number to be perforated
   * @default null
   */
  perforatedPage: number | null;
  /**
   * Return Envelope
   * @description Include a return envelope
   * @default null
   */
  returnEnvelope: boolean | null;
  /**
   * To
   * @description Recipient's address details
   */
  to?: {
      /**
       * Address Line1
       * @description First line of the address
       */
      addressLine1: string;
      /**
       * Address Line2
       * @description Second line of the address
       * @default null
       */
      addressLine2: string | null;
      /**
       * City
       * @description City of the address
       */
      city: string;
      /**
       * Country
       * @description Country of the address
       */
      country: string;
      /**
       * First Name
       * @description First name of the contact
       * @default null
       */
      firstName: string | null;
      /**
       * Last Name
       * @description Last name of the contact
       * @default null
       */
      lastName: string | null;
      /**
       * Organization
       * @description Company or organization name
       * @default null
       */
      organization: string | null;
      /**
       * Postal Or Zip
       * @description Postal or ZIP code of the address
       */
      postalOrZip: string;
      /**
       * Province Or State
       * @description State or province of the address
       */
      provinceOrState: string;
  };
};

/**
 * Type of POSTGRID's POSTGRID_CREATE_LETTER tool output.
 */
type POSTGRID_CREATE_LETTER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the letter was created
       */
      createdAt: string;
      /**
       * Description
       * @description Description of the letter
       * @default null
       */
      description: string | null;
      /**
       * From Address
       * @description Sender's address details
       */
      from_address: {
          /**
           * Address Line1
           * @description First line of the address
           */
          addressLine1: string;
          /**
           * Address Line2
           * @description Second line of the address
           * @default null
           */
          addressLine2: string | null;
          /**
           * City
           * @description City of the address
           */
          city: string;
          /**
           * Country
           * @description Country of the address
           */
          country: string;
          /**
           * First Name
           * @description First name of the contact
           * @default null
           */
          firstName: string | null;
          /**
           * Last Name
           * @description Last name of the contact
           * @default null
           */
          lastName: string | null;
          /**
           * Organization
           * @description Company or organization name
           * @default null
           */
          organization: string | null;
          /**
           * Postal Or Zip
           * @description Postal or ZIP code of the address
           */
          postalOrZip: string;
          /**
           * Province Or State
           * @description State or province of the address
           */
          provinceOrState: string;
      };
      /**
       * Id
       * @description Unique identifier for the created letter
       */
      id: string;
      /**
       * Live
       * @description Indicates if the letter was created in live mode
       */
      live: boolean;
      /**
       * Metadata
       * @description Custom metadata associated with the letter
       * @default null
       */
      metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Object
       * @description Type of object, e.g., 'letter'
       */
      object: string;
      /**
       * Status
       * @description Current status of the letter
       */
      status: string;
      /**
       * To
       * @description Recipient's address details
       */
      to: {
          /**
           * Address Line1
           * @description First line of the address
           */
          addressLine1: string;
          /**
           * Address Line2
           * @description Second line of the address
           * @default null
           */
          addressLine2: string | null;
          /**
           * City
           * @description City of the address
           */
          city: string;
          /**
           * Country
           * @description Country of the address
           */
          country: string;
          /**
           * First Name
           * @description First name of the contact
           * @default null
           */
          firstName: string | null;
          /**
           * Last Name
           * @description Last name of the contact
           * @default null
           */
          lastName: string | null;
          /**
           * Organization
           * @description Company or organization name
           * @default null
           */
          organization: string | null;
          /**
           * Postal Or Zip
           * @description Postal or ZIP code of the address
           */
          postalOrZip: string;
          /**
           * Province Or State
           * @description State or province of the address
           */
          provinceOrState: string;
      };
      /**
       * Updated At
       * @description Timestamp when the letter was last updated
       */
      updatedAt: string;
      /**
       * Url
       * @description URL to the letter's PDF
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
 * Type of POSTGRID's POSTGRID_CREATE_TEMPLATE tool input.
 */
type POSTGRID_CREATE_TEMPLATE_INPUT = {
  /**
   * Description
   * @description Description of the template
   * @default null
   */
  description: string | null;
  /**
   * Html
   * @description HTML content of the template (supports Handlebars/Mustache syntax)
   */
  html?: string;
  /**
   * Name
   * @description Name of the template
   */
  name?: string;
  /**
   * Test Render Model
   * @description Data model used for testing the template rendering
   * @default null
   */
  testRenderModel: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of POSTGRID's POSTGRID_CREATE_TEMPLATE tool output.
 */
type POSTGRID_CREATE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the template was created
       */
      createdAt: string;
      /**
       * Description
       * @description Description of the template
       * @default null
       */
      description: string | null;
      /**
       * Html
       * @description HTML content of the template
       */
      html: string;
      /**
       * Id
       * @description Unique identifier for the template
       */
      id: string;
      /**
       * Name
       * @description Template name
       */
      name: string;
      /**
       * Object
       * @description Object type identifier, typically 'template'
       */
      object: string;
      /**
       * Type
       * @description Resource type, e.g., 'template'
       */
      type: string;
      /**
       * Updated At
       * @description Timestamp when the template was last updated
       */
      updatedAt: string;
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
 * Type of POSTGRID's POSTGRID_CREATE_WEBHOOK tool input.
 */
type POSTGRID_CREATE_WEBHOOK_INPUT = {
  /**
   * Enabled Events
   * @description List of events that trigger the webhook. Possible values include: 'letter.created', 'letter.updated', 'postcard.created', 'postcard.updated', 'cheque.created', 'cheque.updated', 'self_mailer.created', 'self_mailer.updated', 'return_envelope_order.created', 'return_envelope_order.updated'.
   */
  enabledEvents?: string[];
  /**
   * Payload Format
   * @description Format of the webhook payload: 'jwt' (signed) or 'json' (plain JSON). Defaults to 'jwt'.
   * @default null
   * @enum {string|null}
   */
  payloadFormat: "jwt" | "json" | null;
  /**
   * Url
   * @description The URL where webhook payloads will be sent.
   */
  url?: string;
};

/**
 * Type of POSTGRID's POSTGRID_CREATE_WEBHOOK tool output.
 */
type POSTGRID_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the webhook was created.
       */
      createdAt: string;
      /**
       * Enabled
       * @description Indicates if the webhook is currently enabled.
       */
      enabled: boolean;
      /**
       * Enabled Events
       * @description List of events that trigger the webhook.
       */
      enabledEvents: string[];
      /**
       * Id
       * @description Unique identifier for the webhook.
       */
      id: string;
      /**
       * Live
       * @description Indicates if the webhook is in live mode.
       */
      live: boolean;
      /**
       * Object
       * @description Object type, always 'webhook'.
       */
      object: string;
      /**
       * Payload Format
       * @description Format of the webhook payload ('jwt' or 'json').
       */
      payloadFormat: string;
      /**
       * Secret
       * @description Secret key used to sign webhook payloads.
       */
      secret: string;
      /**
       * Updated At
       * @description Timestamp when the webhook was last updated.
       */
      updatedAt: string;
      /**
       * Url
       * @description The URL where webhook payloads are sent.
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
 * Type of POSTGRID's POSTGRID_DELETE_BANK_ACCOUNT tool input.
 */
type POSTGRID_DELETE_BANK_ACCOUNT_INPUT = {
  /**
   * Id
   * @description Unique identifier of the bank account to delete
   */
  id?: string;
};

/**
 * Type of POSTGRID's POSTGRID_DELETE_BANK_ACCOUNT tool output.
 */
type POSTGRID_DELETE_BANK_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description True if the bank account was deleted
       */
      deleted: boolean;
      /**
       * Id
       * @description The bank account ID that was deleted
       */
      id: string;
      /**
       * Object
       * @description The type of the object returned, typically 'bank_account'
       */
      object: string;
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
 * Type of POSTGRID's POSTGRID_DELETE_CONTACT tool input.
 */
type POSTGRID_DELETE_CONTACT_INPUT = {
  /**
   * Id
   * @description Unique identifier of the contact to delete
   */
  id?: string;
};

/**
 * Type of POSTGRID's POSTGRID_DELETE_CONTACT tool output.
 */
type POSTGRID_DELETE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description True if the contact was deleted
       */
      deleted: boolean;
      /**
       * Id
       * @description The contact ID that was deleted
       */
      id: string;
      /**
       * Object
       * @description The type of the object returned, typically 'contact'
       */
      object: string;
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
 * Type of POSTGRID's POSTGRID_DELETE_TEMPLATE tool input.
 */
type POSTGRID_DELETE_TEMPLATE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the template to delete
   */
  id?: string;
};

/**
 * Type of POSTGRID's POSTGRID_DELETE_TEMPLATE tool output.
 */
type POSTGRID_DELETE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description True if the template was deleted
       */
      deleted: boolean;
      /**
       * Id
       * @description The template ID that was deleted
       */
      id: string;
      /**
       * Object
       * @description The type of the object returned, typically 'template'
       */
      object: string;
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
 * Type of POSTGRID's POSTGRID_DELETE_WEBHOOK tool input.
 */
type POSTGRID_DELETE_WEBHOOK_INPUT = {
  /**
   * Id
   * @description Unique identifier of the webhook to delete
   */
  id?: string;
};

/**
 * Type of POSTGRID's POSTGRID_DELETE_WEBHOOK tool output.
 */
type POSTGRID_DELETE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description True if the webhook was deleted
       */
      deleted: boolean;
      /**
       * Id
       * @description The webhook ID that was deleted
       */
      id: string;
      /**
       * Object
       * @description The type of the object returned, typically 'webhook'
       */
      object: string;
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
 * Type of POSTGRID's POSTGRID_GET_BANK_ACCOUNT tool input.
 */
type POSTGRID_GET_BANK_ACCOUNT_INPUT = {
  /**
   * Id
   * @description Unique identifier of the bank account to retrieve
   */
  id?: string;
};

/**
 * Type of POSTGRID's POSTGRID_GET_BANK_ACCOUNT tool output.
 */
type POSTGRID_GET_BANK_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Holder Name
       * @description Name on the account
       */
      accountHolderName: string;
      /**
       * Account Number
       * @description Masked bank account number
       */
      accountNumber: string;
      /**
       * Bank Name
       * @description Name of the bank
       */
      bankName: string;
      /**
       * Country
       * @description Bank country ISO code
       */
      country: string;
      /**
       * Created At
       * @description ISO 8601 timestamp when the account was created
       */
      createdAt: string;
      /**
       * Currency
       * @description Currency code, e.g. 'USD'
       */
      currency: string;
      /**
       * Id
       * @description Bank account ID
       */
      id: string;
      /**
       * Object
       * @description Object type, should be 'bank_account'
       */
      object: string;
      /**
       * Routing Number
       * @description Bank routing number
       */
      routingNumber: string;
      /**
       * Status
       * @description Account status, e.g. 'active' or 'inactive'
       */
      status: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the account was last updated
       */
      updatedAt: string;
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
 * Type of POSTGRID's POSTGRID_GET_CONTACT tool input.
 */
type POSTGRID_GET_CONTACT_INPUT = {
  /**
   * Id
   * @description Unique identifier of the contact to retrieve
   */
  id?: string;
};

/**
 * Type of POSTGRID's POSTGRID_GET_CONTACT tool output.
 */
type POSTGRID_GET_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address Line1
       * @description Address line 1 of the contact
       */
      addressLine1: string;
      /**
       * Address Line2
       * @description Address line 2 of the contact, if provided
       * @default null
       */
      addressLine2: string | null;
      /**
       * City
       * @description City of the contact
       */
      city: string;
      /**
       * Company Name
       * @description Company name of the contact, if provided
       * @default null
       */
      companyName: string | null;
      /**
       * Country
       * @description Country of the contact
       */
      country: string;
      /**
       * Created At
       * @description Creation timestamp of the contact record
       */
      createdAt: string;
      /**
       * Email
       * @description Email address of the contact, if provided
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description First name of the contact
       */
      firstName: string;
      /**
       * Id
       * @description Unique identifier for the contact
       */
      id: string;
      /**
       * Last Name
       * @description Last name of the contact
       */
      lastName: string;
      /**
       * Metadata
       * @description Custom metadata assigned to the contact
       * @default null
       */
      metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Phone Number
       * @description Phone number of the contact, if provided
       * @default null
       */
      phoneNumber: string | null;
      /**
       * Postal Or Zip
       * @description Postal or ZIP code of the contact
       */
      postalOrZip: string;
      /**
       * Province Or State
       * @description Province or state of the contact
       */
      provinceOrState: string;
      /**
       * Updated At
       * @description Last update timestamp of the contact record
       */
      updatedAt: string;
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
 * Type of POSTGRID's POSTGRID_GET_LETTER tool input.
 */
type POSTGRID_GET_LETTER_INPUT = {
  /**
   * Id
   * @description Unique identifier of the letter to retrieve
   */
  id?: string;
};

/**
 * Type of POSTGRID's POSTGRID_GET_LETTER tool output.
 */
type POSTGRID_GET_LETTER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO8601 timestamp when the letter was created
       */
      created_at: string;
      /**
       * Description
       * @description Description of the letter
       * @default null
       */
      description: string | null;
      /**
       * Expected Delivery Date
       * @description Expected delivery date in YYYY-MM-DD format
       * @default null
       */
      expected_delivery_date: string | null;
      /**
       * From Address
       * @description Sender address details
       */
      from_address: {
          /**
           * Address Line1
           * @description First line of the address
           */
          addressLine1: string;
          /**
           * Address Line2
           * @description Second line of the address
           * @default null
           */
          addressLine2: string | null;
          /**
           * City
           * @description City of the address
           */
          city: string;
          /**
           * Country
           * @description Country of the address
           */
          country: string;
          /**
           * Postal Or Zip
           * @description Postal or ZIP code of the address
           */
          postalOrZip: string;
          /**
           * Province Or State
           * @description State or province of the address
           */
          provinceOrState: string;
      };
      /**
       * Id
       * @description Unique identifier for the letter
       */
      id: string;
      /**
       * Mail Type
       * @description Mail type used (e.g., 'first_class')
       */
      mail_type: string;
      /**
       * Metadata
       * @description Custom metadata set by user
       * @default null
       */
      metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Object
       * @description Type of object returned, should be 'letter'
       */
      object: string;
      /**
       * Pdf
       * @description URL to access PDF of the letter
       */
      pdf: string;
      /**
       * Print Mode
       * @description Print configuration (e.g., color, simplex/duplex)
       */
      print_mode: string;
      /**
       * Status
       * @description Current status of the letter
       */
      status: string;
      /**
       * Template Id
       * @description Template ID used for the letter
       */
      template_id: string;
      /**
       * To
       * @description Recipient address details
       */
      to: {
          /**
           * Address Line1
           * @description First line of the address
           */
          addressLine1: string;
          /**
           * Address Line2
           * @description Second line of the address
           * @default null
           */
          addressLine2: string | null;
          /**
           * City
           * @description City of the address
           */
          city: string;
          /**
           * Country
           * @description Country of the address
           */
          country: string;
          /**
           * Postal Or Zip
           * @description Postal or ZIP code of the address
           */
          postalOrZip: string;
          /**
           * Province Or State
           * @description State or province of the address
           */
          provinceOrState: string;
      };
      /**
       * Tracking Events
       * @description List of tracking event objects
       * @default null
       */
      tracking_events: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Tracking Number
       * @description Postal tracking number
       * @default null
       */
      tracking_number: string | null;
      /**
       * Updated At
       * @description ISO8601 timestamp when the letter was last updated
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
 * Type of POSTGRID's POSTGRID_GET_TEMPLATE tool input.
 */
type POSTGRID_GET_TEMPLATE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the template to retrieve
   */
  id?: string;
};

/**
 * Type of POSTGRID's POSTGRID_GET_TEMPLATE tool output.
 */
type POSTGRID_GET_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO8601 timestamp when the template was created
       */
      created_at: string;
      /**
       * Description
       * @description Description of the template
       * @default null
       */
      description: string | null;
      /**
       * File Url
       * @description URL to the template file
       */
      file_url: string;
      /**
       * Id
       * @description Unique identifier for the template
       */
      id: string;
      /**
       * Name
       * @description Name of the template
       */
      name: string;
      /**
       * Status
       * @description Current status of the template
       */
      status: string;
      /**
       * Type
       * @description Type of template, e.g., 'letter' or 'postcard'
       */
      type: string;
      /**
       * Updated At
       * @description ISO8601 timestamp when the template was last updated
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
 * Type of POSTGRID's POSTGRID_GET_WEBHOOK tool input.
 */
type POSTGRID_GET_WEBHOOK_INPUT = {
  /**
   * Id
   * @description Unique identifier of the webhook to retrieve
   */
  id?: string;
};

/**
 * Type of POSTGRID's POSTGRID_GET_WEBHOOK tool output.
 */
type POSTGRID_GET_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the webhook was created
       */
      createdAt: string;
      /**
       * Enabled
       * @description Status of the webhook (enabled or disabled)
       */
      enabled: boolean;
      /**
       * Enabled Events
       * @description List of events that trigger the webhook
       */
      enabledEvents: string[];
      /**
       * Id
       * @description Unique identifier for the webhook
       */
      id: string;
      /**
       * Live
       * @description Indicates if the webhook is in live mode
       */
      live: boolean;
      /**
       * Object
       * @description Type of object returned, should be 'webhook'
       */
      object: string;
      /**
       * Payload Format
       * @description Format of the webhook payload, e.g., 'jwt'
       */
      payloadFormat: string;
      /**
       * Secret
       * @description Secret key used for verifying webhook payloads
       */
      secret: string;
      /**
       * Updated At
       * @description Timestamp of the last update to the webhook
       */
      updatedAt: string;
      /**
       * Url
       * @description URL where the webhook sends events
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
 * Type of POSTGRID's POSTGRID_LIST_BANK_ACCOUNTS tool input.
 */
type POSTGRID_LIST_BANK_ACCOUNTS_INPUT = {
  /**
   * After
   * @description Cursor for pagination to fetch records after a specific ID
   * @default null
   */
  after: string | null;
  /**
   * Before
   * @description Cursor for pagination to fetch records before a specific ID
   * @default null
   */
  before: string | null;
  /**
   * Limit
   * @description Maximum number of bank accounts to return (default 10, max 100)
   * @default null
   */
  limit: number | null;
  /**
   * Status
   * @description Filter bank accounts by status
   * @default null
   * @enum {string|null}
   */
  status: "active" | "inactive" | null;
};

/**
 * Type of POSTGRID's POSTGRID_LIST_BANK_ACCOUNTS tool output.
 */
type POSTGRID_LIST_BANK_ACCOUNTS_OUTPUT = {
  /**
   * Data
   * @description List of bank account objects.
   */
  data?: {
      /**
       * Account Holder Name
       * @description Name of the account holder.
       * @default null
       */
      accountHolderName: string | null;
      /**
       * Created At
       * @description Timestamp when the bank account was created.
       * @default null
       */
      createdAt: string | null;
      /**
       * Id
       * @description Unique identifier for the bank account.
       */
      id: string;
      /**
       * Last4
       * @description Last four digits of the bank account number.
       * @default null
       */
      last4: string | null;
      /**
       * Object
       * @description Object type, should be 'bank_account'.
       */
      object: string;
      /**
       * Routing Number
       * @description Routing number of the bank.
       * @default null
       */
      routingNumber: string | null;
      /**
       * Status
       * @description Status of the bank account.
       */
      status: string;
      /**
       * Updated At
       * @description Timestamp when the bank account was last updated.
       * @default null
       */
      updatedAt: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Next Cursor
   * @description Cursor for the next page of results, if any.
   * @default null
   */
  next_cursor: string | null;
  /**
   * Object
   * @description Response object type, should be 'list'.
   */
  object?: string;
  /**
   * Previous Cursor
   * @description Cursor for the previous page of results, if any.
   * @default null
   */
  previous_cursor: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of POSTGRID's POSTGRID_LIST_CHEQUES tool input.
 */
type POSTGRID_LIST_CHEQUES_INPUT = {
  /**
   * After
   * @description Cursor for pagination. Fetch items after this cursor.
   * @default null
   */
  after: string | null;
  /**
   * Count
   * @description Number of items to return per page. Maximum is 100.
   * @default null
   */
  count: number | null;
  /**
   * From Date
   * @description ISO-8601 timestamp. Only return cheques created after this time.
   * @default null
   */
  from_date: string | null;
  /**
   * Status
   * @description Filter by cheque status.
   * @default null
   * @enum {string|null}
   */
  status: "created" | "mailed" | "failed" | null;
  /**
   * To Date
   * @description ISO-8601 timestamp. Only return cheques created before this time.
   * @default null
   */
  to_date: string | null;
};

/**
 * Type of POSTGRID's POSTGRID_LIST_CHEQUES tool output.
 */
type POSTGRID_LIST_CHEQUES_OUTPUT = {
  /**
   * Data
   * @description List of Cheque objects
   */
  data?: {
      /**
       * Amount
       * @description Amount on the cheque
       */
      amount: number;
      /**
       * Bank Account
       * @description Bank account details for the cheque
       */
      bankAccount: {
          /**
           * Account Holder Name
           * @description Name of the account holder
           * @default null
           */
          accountHolderName: string | null;
          /**
           * Last4
           * @description Last four digits of the bank account number
           */
          last4: string;
          /**
           * Routing Number
           * @description Routing number of the bank
           */
          routingNumber: string;
      };
      /**
       * Created At
       * @description ISO 8601 timestamp when the cheque was created
       */
      createdAt: string;
      /**
       * Currency
       * @description ISO currency code of the cheque
       */
      currency: string;
      /**
       * Description
       * @description Description provided for the cheque
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier for the cheque
       */
      id: string;
      /**
       * Mail
       * @description Mail job details associated with this cheque
       */
      mail: {
          /**
           * Expected Delivery Date
           * @description Estimated delivery date in ISO 8601 format
           * @default null
           */
          expectedDeliveryDate: string | null;
          /**
           * Id
           * @description Unique identifier of the mail object
           */
          id: string;
          /**
           * Object
           * @description Object type, should be 'mail'
           */
          object: string;
          /**
           * Status
           * @description Status of the mail job
           */
          status: string;
      };
      /**
       * Metadata
       * @description Custom key-value pairs associated with the cheque
       * @default null
       */
      metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Object
       * @description Object type, should be 'cheque'
       */
      object: string;
      /**
       * Payee
       * @description Details of the payee
       */
      payee: {
          /**
           * Address
           * @description Mailing address of the payee
           */
          address: {
              /**
               * Address Line1
               * @description First line of the address
               */
              addressLine1: string;
              /**
               * Address Line2
               * @description Second line of the address
               * @default null
               */
              addressLine2: string | null;
              /**
               * City
               * @description City of the address
               */
              city: string;
              /**
               * Country
               * @description Country of the address
               */
              country: string;
              /**
               * Postal Or Zip
               * @description Postal or ZIP code of the address
               */
              postalOrZip: string;
              /**
               * Province Or State
               * @description State or province of the address
               */
              provinceOrState: string;
          };
          /**
           * Name
           * @description Name of the payee
           */
          name: string;
      };
      /**
       * Status
       * @description Status of the cheque
       */
      status: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the cheque was last updated
       */
      updatedAt: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Next
   * @description Cursor for next page of results
   * @default null
   */
  next: string | null;
  /**
   * Object
   * @description Response object type, should be 'list'
   */
  object?: string;
  /**
   * Previous
   * @description Cursor for previous page of results
   * @default null
   */
  previous: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of POSTGRID's POSTGRID_LIST_CONTACTS tool input.
 */
type POSTGRID_LIST_CONTACTS_INPUT = {
  /**
   * After
   * @description Cursor for pagination to fetch records after this cursor
   * @default null
   */
  after: string | null;
  /**
   * Contact Name
   * @description Filter by contact's full or partial name
   * @default null
   */
  contact_name: string | null;
  /**
   * Email
   * @description Filter by contact email address
   * @default null
   */
  email: string | null;
  /**
   * From Date
   * @description Filter contacts created on or after this ISO8601 timestamp
   * @default null
   */
  from_date: string | null;
  /**
   * Limit
   * @description Maximum number of contacts to return per page (1-100)
   * @default null
   */
  limit: number | null;
  /**
   * Metadata
   * @description Filter by metadata key-value pairs
   * @default null
   */
  metadata: {
      [key: string]: string;
  } | null;
  /**
   * To Date
   * @description Filter contacts created on or before this ISO8601 timestamp
   * @default null
   */
  to_date: string | null;
};

/**
 * Type of POSTGRID's POSTGRID_LIST_CONTACTS tool output.
 */
type POSTGRID_LIST_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description List of contact objects
   */
  data?: {
      /**
       * Addresses
       * @description List of addresses associated with the contact
       * @default null
       */
      addresses: {
          /**
           * Address Line1
           * @description First line of the address
           */
          addressLine1: string;
          /**
           * Address Line2
           * @description Second line of the address
           * @default null
           */
          addressLine2: string | null;
          /**
           * City
           * @description City of the address
           */
          city: string;
          /**
           * Country
           * @description Country of the address (ISO 3166-1 alpha-2 code)
           */
          country: string;
          /**
           * Postal Or Zip
           * @description Postal or ZIP code of the address
           */
          postalOrZip: string;
          /**
           * Province Or State
           * @description State or province of the address
           */
          provinceOrState: string;
      }[] | null;
      /**
       * Company
       * @description Company associated with the contact
       * @default null
       */
      company: string | null;
      /**
       * Created At
       * @description ISO8601 timestamp when created
       * @default null
       */
      createdAt: string | null;
      /**
       * Email
       * @description Email address of the contact
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description First name of the contact
       * @default null
       */
      firstName: string | null;
      /**
       * Id
       * @description Unique identifier for the contact
       */
      id: string;
      /**
       * Last Name
       * @description Last name of the contact
       * @default null
       */
      lastName: string | null;
      /**
       * Metadata
       * @description Custom metadata for the contact
       * @default null
       */
      metadata: {
          [key: string]: string;
      } | null;
      /**
       * Name
       * @description Full name of the contact
       * @default null
       */
      name: string | null;
      /**
       * Object
       * @description Object type, should be 'contact'
       */
      object: string;
      /**
       * Phone
       * @description Phone number of the contact
       * @default null
       */
      phone: string | null;
      /**
       * Updated At
       * @description ISO8601 timestamp when last updated
       * @default null
       */
      updatedAt: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Next Cursor
   * @description Cursor for the next page of results
   * @default null
   */
  next_cursor: string | null;
  /**
   * Object
   * @description Response object type, should be 'list'
   */
  object?: string;
  /**
   * Prev Cursor
   * @description Cursor for the previous page of results
   * @default null
   */
  prev_cursor: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total Count
   * @description Total number of contacts matching query
   */
  total_count?: number;
};

/**
 * Type of POSTGRID's POSTGRID_LIST_LETTERS tool input.
 */
type POSTGRID_LIST_LETTERS_INPUT = {
  /**
   * After
   * @description Cursor for pagination to fetch records created after a specific ID
   * @default null
   */
  after: string | null;
  /**
   * Before
   * @description Cursor for pagination to fetch records created before a specific ID
   * @default null
   */
  before: string | null;
  /**
   * Date From
   * @description Filter letters created on or after this date (ISO 8601)
   * @default null
   */
  date_from: string | null;
  /**
   * Date To
   * @description Filter letters created on or before this date (ISO 8601)
   * @default null
   */
  date_to: string | null;
  /**
   * Limit
   * @description Maximum number of records to return (default 10, max 100)
   * @default null
   */
  limit: number | null;
  /**
   * Status
   * @description Filter letters by status
   * @default null
   * @enum {string|null}
   */
  status: "draft" | "submitted" | "processed" | null;
};

/**
 * Type of POSTGRID's POSTGRID_LIST_LETTERS tool output.
 */
type POSTGRID_LIST_LETTERS_OUTPUT = {
  /**
   * Data
   * @description List of letter objects
   */
  data?: {
      /**
       * File
       * @description URL to the letter file or PDF
       * @default null
       */
      file: string | null;
      /**
       * From Address
       * @description Sender's address details
       */
      from_address: {
          /**
           * Address Line1
           * @description First line of the address
           */
          addressLine1: string;
          /**
           * Address Line2
           * @description Second line of the address
           * @default null
           */
          addressLine2: string | null;
          /**
           * City
           * @description City of the address
           */
          city: string;
          /**
           * Country
           * @description Country of the address
           */
          country: string;
          /**
           * Postal Or Zip
           * @description Postal or ZIP code of the address
           */
          postalOrZip: string;
          /**
           * Province Or State
           * @description State or province of the address
           */
          provinceOrState: string;
      };
      /**
       * Id
       * @description Unique identifier for the letter
       */
      id: string;
      /**
       * Metadata
       * @description Custom metadata associated with the letter
       * @default null
       */
      metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Object
       * @description Object type, should be 'letter'
       */
      object: string;
      /**
       * Status
       * @description Current status of the letter
       */
      status: string;
      /**
       * To
       * @description Recipient's address details
       */
      to: {
          /**
           * Address Line1
           * @description First line of the address
           */
          addressLine1: string;
          /**
           * Address Line2
           * @description Second line of the address
           * @default null
           */
          addressLine2: string | null;
          /**
           * City
           * @description City of the address
           */
          city: string;
          /**
           * Country
           * @description Country of the address
           */
          country: string;
          /**
           * Postal Or Zip
           * @description Postal or ZIP code of the address
           */
          postalOrZip: string;
          /**
           * Province Or State
           * @description State or province of the address
           */
          provinceOrState: string;
      };
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Next Url
   * @description URL to fetch the next set of results
   * @default null
   */
  next_url: string | null;
  /**
   * Object
   * @description Response object type, should be 'list'
   */
  object?: string;
  /**
   * Previous Url
   * @description URL to fetch the previous set of results
   * @default null
   */
  previous_url: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of POSTGRID's POSTGRID_LIST_POSTCARDS tool input.
 */
type POSTGRID_LIST_POSTCARDS_INPUT = {
  /**
   * Contact Id
   * @description Filter by the contact's unique ID.
   * @default null
   */
  contact_id: string | null;
  /**
   * From Date
   * @description Return postcards created after this ISO8601 timestamp.
   * @default null
   */
  from_date: string | null;
  /**
   * Limit
   * @description Number of records per page (1-100).
   * @default null
   */
  limit: number | null;
  /**
   * Metadata
   * @description Filter by custom metadata key-value pairs.
   * @default null
   */
  metadata: {
      [key: string]: string;
  } | null;
  /**
   * Skip
   * @description Number of records to skip (offset).
   * @default null
   */
  skip: number | null;
  /**
   * Status
   * @description Filter by postcard status.
   * @default null
   * @enum {string|null}
   */
  status: "draft" | "queued" | "processing" | "completed" | "failed" | null;
  /**
   * To Date
   * @description Return postcards created before this ISO8601 timestamp.
   * @default null
   */
  to_date: string | null;
};

/**
 * Type of POSTGRID's POSTGRID_LIST_POSTCARDS tool output.
 */
type POSTGRID_LIST_POSTCARDS_OUTPUT = {
  /**
   * Data
   * @description List of postcard objects.
   */
  data?: {
      /**
       * Created At
       * @description ISO8601 timestamp when the postcard was created.
       */
      created_at: string;
      /**
       * Description
       * @description Description of the postcard, if provided.
       * @default null
       */
      description: string | null;
      /**
       * From Address
       * @description Sender address details.
       */
      from_address: {
          /**
           * Address Line1
           * @description First line of the address.
           */
          addressLine1: string;
          /**
           * Address Line2
           * @description Second line of the address.
           * @default null
           */
          addressLine2: string | null;
          /**
           * City
           * @description City of the address.
           */
          city: string;
          /**
           * Country Code
           * @description ISO3166-1 alpha-2 country code.
           */
          countryCode: string;
          /**
           * Name
           * @description Full name for the address.
           * @default null
           */
          name: string | null;
          /**
           * Postal Or Zip
           * @description Postal or ZIP code of the address.
           */
          postalOrZip: string;
          /**
           * Province Or State
           * @description State or province of the address.
           */
          provinceOrState: string;
      };
      /**
       * Id
       * @description Unique identifier for the postcard.
       */
      id: string;
      /**
       * Mailpiece
       * @description Mailpiece details for the postcard.
       */
      mailpiece: {
          /**
           * Size
           * @description Dimensions of the postcard, e.g., '4x6'.
           */
          size: string;
          /**
           * Type
           * @description Type of the mailpiece, should be 'postcard'.
           */
          type: string;
          /**
           * Weight
           * @description Weight of the mailpiece in ounces, if available.
           * @default null
           */
          weight: number | null;
      };
      /**
       * Metadata
       * @description User-defined metadata for the postcard.
       * @default null
       */
      metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Object
       * @description Type of object returned, should be 'postcard'.
       */
      object: string;
      /**
       * Proofs
       * @description List of proof assets associated with the postcard.
       */
      proofs: {
          /**
           * Type
           * @description Type of the proof asset, e.g., 'job' or 'asset'.
           */
          type: string;
          /**
           * Url
           * @description URL to the proof asset.
           */
          url: string;
      }[];
      /**
       * Status
       * @description Current status of the postcard.
       */
      status: string;
      /**
       * To
       * @description Recipient address details.
       */
      to: {
          /**
           * Address Line1
           * @description First line of the address.
           */
          addressLine1: string;
          /**
           * Address Line2
           * @description Second line of the address.
           * @default null
           */
          addressLine2: string | null;
          /**
           * City
           * @description City of the address.
           */
          city: string;
          /**
           * Country Code
           * @description ISO3166-1 alpha-2 country code.
           */
          countryCode: string;
          /**
           * Name
           * @description Full name for the address.
           * @default null
           */
          name: string | null;
          /**
           * Postal Or Zip
           * @description Postal or ZIP code of the address.
           */
          postalOrZip: string;
          /**
           * Province Or State
           * @description State or province of the address.
           */
          provinceOrState: string;
      };
      /**
       * Updated At
       * @description ISO8601 timestamp when the postcard was updated.
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
   * Limit
   * @description Number of records requested per page.
   */
  limit?: number;
  /**
   * Next Url
   * @description URL for the next page of results, if any.
   * @default null
   */
  next_url: string | null;
  /**
   * Object
   * @description Type of the response object, should be 'list'.
   */
  object?: string;
  /**
   * Previous Url
   * @description URL for the previous page of results, if any.
   * @default null
   */
  previous_url: string | null;
  /**
   * Skip
   * @description Number of records skipped (offset).
   */
  skip?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of POSTGRID's POSTGRID_LIST_SELF_MAILERS tool input.
 */
type POSTGRID_LIST_SELF_MAILERS_INPUT = {
  /**
   * Count
   * @description Limit number of items returned
   * @default null
   */
  count: number | null;
  /**
   * From Date
   * @description Filter self-mailers created on or after this ISO 8601 timestamp (inclusive)
   * @default null
   */
  from_date: string | null;
  /**
   * Metadata
   * @description Key-value metadata pairs to filter self-mailers
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Offset
   * @description Number of items to skip before starting to collect result set
   * @default null
   */
  offset: number | null;
  /**
   * Status
   * @description Filter by status (e.g., 'draft', 'queued', 'processing')
   * @default null
   */
  status: string | null;
  /**
   * To Date
   * @description Filter self-mailers created on or before this ISO 8601 timestamp (inclusive)
   * @default null
   */
  to_date: string | null;
};

/**
 * Type of POSTGRID's POSTGRID_LIST_SELF_MAILERS tool output.
 */
type POSTGRID_LIST_SELF_MAILERS_OUTPUT = {
  /**
   * Count
   * @description Number of results returned in this call
   */
  count?: number;
  /**
   * Data
   * @description List of self-mailer objects
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
   * Next Url
   * @description URL for the next page of results
   * @default null
   */
  next_url: string | null;
  /**
   * Object
   * @description Fixed value: 'list'
   */
  object?: string;
  /**
   * Offset
   * @description Number of resources skipped
   */
  offset?: number;
  /**
   * Previous Url
   * @description URL for the previous page of results
   * @default null
   */
  previous_url: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total Count
   * @description Total number of matching resources
   */
  total_count?: number;
  /**
   * Url
   * @description API endpoint that was called
   */
  url?: string;
};

/**
 * Type of POSTGRID's POSTGRID_LIST_TEMPLATES tool input.
 */
type POSTGRID_LIST_TEMPLATES_INPUT = {
  /**
   * Limit
   * @description Number of results per page, must be >= 1
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination, must be >= 1
   * @default null
   */
  page: number | null;
  /**
   * Type
   * @description Filter templates by type (e.g., 'letter', 'postcard')
   * @default null
   */
  type: string | null;
};

/**
 * Type of POSTGRID's POSTGRID_LIST_TEMPLATES tool output.
 */
type POSTGRID_LIST_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description List of template objects
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the template was created
       */
      createdAt: string;
      /**
       * Id
       * @description Unique identifier for the template
       */
      id: string;
      /**
       * Name
       * @description Name of the template
       */
      name: string;
      /**
       * Type
       * @description Type of the template, e.g., 'letter', 'postcard'
       */
      type: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the template was last updated
       */
      updatedAt: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Pagination metadata for the templates
   */
  meta?: {
      /**
       * Limit
       * @description Number of templates per page
       */
      limit: number;
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Total
       * @description Total number of templates
       */
      total: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of POSTGRID's POSTGRID_LIST_WEBHOOKS tool input.
 */
type POSTGRID_LIST_WEBHOOKS_INPUT = {
  /**
   * Event
   * @description Filter webhooks by event type, e.g., 'letter.created'.
   * @default null
   */
  event: string | null;
  /**
   * Limit
   * @description Number of results per page, must be >= 1.
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number of results to retrieve, must be >= 1.
   * @default null
   */
  page: number | null;
  /**
   * Target Url
   * @description Filter webhooks by the target URL.
   * @default null
   */
  target_url: string | null;
};

/**
 * Type of POSTGRID's POSTGRID_LIST_WEBHOOKS tool output.
 */
type POSTGRID_LIST_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Webhooks
       * @description List of webhooks matching the query.
       */
      webhooks: {
          /**
           * Created At
           * @description Timestamp when the webhook was created.
           */
          createdAt: string;
          /**
           * Event
           * @description Event type the webhook listens for.
           */
          event: string;
          /**
           * Id
           * @description Unique identifier for the webhook.
           */
          id: string;
          /**
           * Target Url
           * @description URL where the webhook sends event data.
           */
          targetUrl: string;
          /**
           * Updated At
           * @description Timestamp when the webhook was last updated.
           */
          updatedAt: string;
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
 * Type map of all available tool input types for toolkit "POSTGRID".
 */
export type POSTGRID_TOOL_INPUTS = {
  CREATE_BANK_ACCOUNT: POSTGRID_CREATE_BANK_ACCOUNT_INPUT
  CREATE_CONTACT: POSTGRID_CREATE_CONTACT_INPUT
  CREATE_LETTER: POSTGRID_CREATE_LETTER_INPUT
  CREATE_TEMPLATE: POSTGRID_CREATE_TEMPLATE_INPUT
  CREATE_WEBHOOK: POSTGRID_CREATE_WEBHOOK_INPUT
  DELETE_BANK_ACCOUNT: POSTGRID_DELETE_BANK_ACCOUNT_INPUT
  DELETE_CONTACT: POSTGRID_DELETE_CONTACT_INPUT
  DELETE_TEMPLATE: POSTGRID_DELETE_TEMPLATE_INPUT
  DELETE_WEBHOOK: POSTGRID_DELETE_WEBHOOK_INPUT
  GET_BANK_ACCOUNT: POSTGRID_GET_BANK_ACCOUNT_INPUT
  GET_CONTACT: POSTGRID_GET_CONTACT_INPUT
  GET_LETTER: POSTGRID_GET_LETTER_INPUT
  GET_TEMPLATE: POSTGRID_GET_TEMPLATE_INPUT
  GET_WEBHOOK: POSTGRID_GET_WEBHOOK_INPUT
  LIST_BANK_ACCOUNTS: POSTGRID_LIST_BANK_ACCOUNTS_INPUT
  LIST_CHEQUES: POSTGRID_LIST_CHEQUES_INPUT
  LIST_CONTACTS: POSTGRID_LIST_CONTACTS_INPUT
  LIST_LETTERS: POSTGRID_LIST_LETTERS_INPUT
  LIST_POSTCARDS: POSTGRID_LIST_POSTCARDS_INPUT
  LIST_SELF_MAILERS: POSTGRID_LIST_SELF_MAILERS_INPUT
  LIST_TEMPLATES: POSTGRID_LIST_TEMPLATES_INPUT
  LIST_WEBHOOKS: POSTGRID_LIST_WEBHOOKS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "POSTGRID".
 */
export type POSTGRID_TOOL_OUTPUTS = {
  CREATE_BANK_ACCOUNT: POSTGRID_CREATE_BANK_ACCOUNT_OUTPUT
  CREATE_CONTACT: POSTGRID_CREATE_CONTACT_OUTPUT
  CREATE_LETTER: POSTGRID_CREATE_LETTER_OUTPUT
  CREATE_TEMPLATE: POSTGRID_CREATE_TEMPLATE_OUTPUT
  CREATE_WEBHOOK: POSTGRID_CREATE_WEBHOOK_OUTPUT
  DELETE_BANK_ACCOUNT: POSTGRID_DELETE_BANK_ACCOUNT_OUTPUT
  DELETE_CONTACT: POSTGRID_DELETE_CONTACT_OUTPUT
  DELETE_TEMPLATE: POSTGRID_DELETE_TEMPLATE_OUTPUT
  DELETE_WEBHOOK: POSTGRID_DELETE_WEBHOOK_OUTPUT
  GET_BANK_ACCOUNT: POSTGRID_GET_BANK_ACCOUNT_OUTPUT
  GET_CONTACT: POSTGRID_GET_CONTACT_OUTPUT
  GET_LETTER: POSTGRID_GET_LETTER_OUTPUT
  GET_TEMPLATE: POSTGRID_GET_TEMPLATE_OUTPUT
  GET_WEBHOOK: POSTGRID_GET_WEBHOOK_OUTPUT
  LIST_BANK_ACCOUNTS: POSTGRID_LIST_BANK_ACCOUNTS_OUTPUT
  LIST_CHEQUES: POSTGRID_LIST_CHEQUES_OUTPUT
  LIST_CONTACTS: POSTGRID_LIST_CONTACTS_OUTPUT
  LIST_LETTERS: POSTGRID_LIST_LETTERS_OUTPUT
  LIST_POSTCARDS: POSTGRID_LIST_POSTCARDS_OUTPUT
  LIST_SELF_MAILERS: POSTGRID_LIST_SELF_MAILERS_OUTPUT
  LIST_TEMPLATES: POSTGRID_LIST_TEMPLATES_OUTPUT
  LIST_WEBHOOKS: POSTGRID_LIST_WEBHOOKS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's POSTGRID toolkit.
 */
export const POSTGRID = {
  slug: "postgrid",
  tools: {
    /**
     * Tool to create a new bank account for print & mail service.
     */
    CREATE_BANK_ACCOUNT: "POSTGRID_CREATE_BANK_ACCOUNT",
    /**
     * Tool to create a new contact in postgrid. use after collecting contact's name, address, and optional metadata.
     */
    CREATE_CONTACT: "POSTGRID_CREATE_CONTACT",
    /**
     * Tool to create and send a letter via postgrid. use when recipient, sender, and content details are ready.
     */
    CREATE_LETTER: "POSTGRID_CREATE_LETTER",
    /**
     * Tool to create a new mail template in postgrid. use when you need to define reusable html content with dynamic placeholders. use after confirming required template details.
     */
    CREATE_TEMPLATE: "POSTGRID_CREATE_TEMPLATE",
    /**
     * Tool to create a new webhook to receive order event notifications. use after configuring your endpoint to handle webhook payloads.
     */
    CREATE_WEBHOOK: "POSTGRID_CREATE_WEBHOOK",
    /**
     * Tool to delete a bank account by its id. use when you need to remove a bank account after confirming its identifier.
     */
    DELETE_BANK_ACCOUNT: "POSTGRID_DELETE_BANK_ACCOUNT",
    /**
     * Tool to delete a contact by its id. use when you need to remove obsolete contacts after confirming their identifier.
     */
    DELETE_CONTACT: "POSTGRID_DELETE_CONTACT",
    /**
     * Tool to delete a template by its id. use when you need to remove an existing template after confirming its identifier.
     */
    DELETE_TEMPLATE: "POSTGRID_DELETE_TEMPLATE",
    /**
     * Tool to delete a webhook subscription. use when you need to remove an existing webhook by its id.
     */
    DELETE_WEBHOOK: "POSTGRID_DELETE_WEBHOOK",
    /**
     * Tool to retrieve a bank account. use after obtaining the bank account id to fetch its details.
     */
    GET_BANK_ACCOUNT: "POSTGRID_GET_BANK_ACCOUNT",
    /**
     * Tool to retrieve a contact. use after obtaining the contact id to fetch its details.
     */
    GET_CONTACT: "POSTGRID_GET_CONTACT",
    /**
     * Tool to retrieve a letter. use after you have the letter id to fetch its details.
     */
    GET_LETTER: "POSTGRID_GET_LETTER",
    /**
     * Tool to retrieve a template. use when you have the template id and need its details.
     */
    GET_TEMPLATE: "POSTGRID_GET_TEMPLATE",
    /**
     * Tool to retrieve details of a specific webhook by its id. use after creating a webhook to fetch its configuration and status.
     */
    GET_WEBHOOK: "POSTGRID_GET_WEBHOOK",
    /**
     * Tool to list bank accounts. use when retrieving bank accounts with optional status filter and pagination.
     */
    LIST_BANK_ACCOUNTS: "POSTGRID_LIST_BANK_ACCOUNTS",
    /**
     * Tool to list cheques with optional filters and pagination. use when you need to retrieve batches of cheque records for processing or reporting.
     */
    LIST_CHEQUES: "POSTGRID_LIST_CHEQUES",
    /**
     * Tool to list contacts. use when you need to retrieve a paginated list of contacts with optional filters like date range, metadata, name, or email.
     */
    LIST_CONTACTS: "POSTGRID_LIST_CONTACTS",
    /**
     * Tool to list letters. use when retrieving letters with optional filters and pagination.
     */
    LIST_LETTERS: "POSTGRID_LIST_LETTERS",
    /**
     * Tool to retrieve a list of postcards with optional filtering and pagination. use when you need to browse or filter postcards list.
     */
    LIST_POSTCARDS: "POSTGRID_LIST_POSTCARDS",
    /**
     * Tool to list self-mailers. use when you need to fetch self-mailers with filters and pagination.
     */
    LIST_SELF_MAILERS: "POSTGRID_LIST_SELF_MAILERS",
    /**
     * Tool to list templates. use when you need to retrieve a paginated list of templates with optional type filtering.
     */
    LIST_TEMPLATES: "POSTGRID_LIST_TEMPLATES",
    /**
     * Tool to retrieve a list of configured webhooks with optional filtering and pagination. use when you need to view your webhooks.
     */
    LIST_WEBHOOKS: "POSTGRID_LIST_WEBHOOKS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "POSTGRID".
 */
export type POSTGRID_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "POSTGRID".
 */
export type POSTGRID_TRIGGER_EVENTS = {}
