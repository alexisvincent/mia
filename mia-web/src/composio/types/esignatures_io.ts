// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ESIGNATURES_IO's ESIGNATURES_IO_CREATE_CONTRACT tool input.
 */
type ESIGNATURES_IO_CREATE_CONTRACT_INPUT = {
  /**
   * Custom Requester Email
   * Format: email
   * @description Alternate sender email address
   * @default null
   */
  custom_requester_email: unknown;
  /**
   * Custom Requester Name
   * @description Alternate sender name
   * @default null
   */
  custom_requester_name: string | null;
  /**
   * Files
   * @description Additional files to attach to the contract
   * @default null
   */
  files: {
      /**
       * Url
       * Format: uri
       * @description Publicly accessible URL of the document
       */
      url: unknown;
  }[] | null;
  /**
   * Message
   * @description Email message sent to signers
   * @default null
   */
  message: string | null;
  /**
   * Signers
   * @description List of signer details; at least one required
   */
  signers?: {
      /**
       * Access Code
       * @description Access code for added security
       * @default null
       */
      access_code: string | null;
      /**
       * Company
       * @description Company name of the signer
       * @default null
       */
      company: string | null;
      /**
       * Email
       * Format: email
       * @description Email address of the signer
       */
      email: unknown;
      /**
       * Locale
       * @description Locale code for notifications, e.g., 'en-US'
       * @default null
       */
      locale: string | null;
      /**
       * Name
       * @description Full name of the signer
       */
      name: string;
      /**
       * Phone
       * @description Phone number in E.164 format for SMS authentication
       * @default null
       */
      phone: string | null;
      /**
       * Redirect Url
       * @description URL to redirect signer after signing
       * @default null
       */
      redirect_url: string | null;
      /**
       * Signing Order
       * @description Order in which signer must sign (1-indexed)
       * @default null
       */
      signing_order: number | null;
  }[];
  /**
   * Subject
   * @description Email subject sent to signers
   * @default null
   */
  subject: string | null;
  /**
   * Template Id
   * @description ID of the template to use for the contract
   */
  template_id?: string;
  /**
   * Test
   * @description Run in test mode without sending real emails
   * @default false
   */
  test: boolean | null;
  /**
   * Title
   * @description Title of the contract
   * @default null
   */
  title: string | null;
};

/**
 * Type of ESIGNATURES_IO's ESIGNATURES_IO_CREATE_CONTRACT tool output.
 */
type ESIGNATURES_IO_CREATE_CONTRACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Timestamp when the contract was created
       */
      created_at: string;
      /**
       * Id
       * @description Unique contract identifier
       */
      id: string;
      /**
       * Signers
       * @description Details and status of each signer in the contract
       */
      signers: {
          /**
           * Access Code
           * @description Access code used by the signer in response
           * @default null
           */
          access_code: string | null;
          /**
           * Company
           * @description Company of the signer in response
           * @default null
           */
          company: string | null;
          /**
           * Email
           * Format: email
           * @description Email of the signer
           */
          email: unknown;
          /**
           * Locale
           * @description Locale of the signer in response
           * @default null
           */
          locale: string | null;
          /**
           * Name
           * @description Full name of the signer
           */
          name: string;
          /**
           * Phone
           * @description Phone number of the signer in response
           * @default null
           */
          phone: string | null;
          /**
           * Redirect Url
           * @description Redirect URL for the signer in response
           * @default null
           */
          redirect_url: string | null;
          /**
           * Signed At
           * Format: date-time
           * @description Timestamp when the signer completed signing
           * @default null
           */
          signed_at: string | null;
          /**
           * Signing Order
           * @description Signing order of the signer in the contract
           * @default null
           */
          signing_order: number | null;
          /**
           * Status
           * @description Current signing status of the signer
           */
          status: string;
      }[];
      /**
       * Status
       * @description Current status of the contract
       */
      status: string;
      /**
       * Url
       * Format: uri
       * @description Web URL to view or sign the contract
       */
      url: unknown;
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
 * Type of ESIGNATURES_IO's ESIGNATURES_IO_CREATE_SIGNER tool input.
 */
type ESIGNATURES_IO_CREATE_SIGNER_INPUT = {
  /**
   * Company Name
   * @description Optional company name of the signer
   * @default null
   */
  company_name: string | null;
  /**
   * Custom Fields
   * @description Optional custom key/value fields for the signer
   * @default null
   */
  custom_fields: {
      [key: string]: unknown;
  } | null;
  /**
   * Email
   * Format: email
   * @description Email address of the signer
   */
  email?: unknown;
  /**
   * Lang
   * @description Optional two-letter language code for the signer interface
   * @default null
   */
  lang: string | null;
  /**
   * Name
   * @description Full name of the signer
   */
  name?: string;
  /**
   * Phone Number
   * @description Optional phone number in E.164 format for SMS verification
   * @default null
   */
  phone_number: string | null;
  /**
   * Redirect Url
   * @description Optional URL to redirect the signer after signing
   * @default null
   */
  redirect_url: string | null;
  /**
   * Signature Request Id
   * @description ID of the existing signature request to add the signer to
   */
  signature_request_id?: string;
};

/**
 * Type of ESIGNATURES_IO's ESIGNATURES_IO_CREATE_SIGNER tool output.
 */
type ESIGNATURES_IO_CREATE_SIGNER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Timestamp when the signer was created
       */
      created_at: string;
      /**
       * Email
       * Format: email
       * @description Email address of the signer
       */
      email: unknown;
      /**
       * Id
       * @description Unique identifier of the signer
       */
      id: string;
      /**
       * Name
       * @description Full name of the signer
       */
      name: string;
      /**
       * Signature Request Id
       * @description ID of the signature request associated with the signer
       */
      signature_request_id: string;
      /**
       * Signing Url
       * Format: uri
       * @description URL where the signer can sign the document
       */
      signing_url: unknown;
      /**
       * Status
       * @description Current status of the signer
       */
      status: string;
      /**
       * Updated At
       * Format: date-time
       * @description Timestamp when the signer was last updated
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
 * Type of ESIGNATURES_IO's ESIGNATURES_IO_CREATE_TEMPLATE tool input.
 */
type ESIGNATURES_IO_CREATE_TEMPLATE_INPUT = {
  /**
   * Document Elements
   * @description Ordered list of document elements comprising the template.
   */
  document_elements?: {
      /**
       * Text
       * @description Text content for text-based elements.
       * @default null
       */
      text: string | null;
      /**
       * Type
       * @description Element type, e.g. 'text_header_one', 'text_normal', 'signer_field', etc., defines how content is rendered.
       */
      type: string;
  }[];
  /**
   * Labels
   * @description Optional list of labels to organize templates and contracts.
   * @default null
   */
  labels: string[] | null;
  /**
   * Title
   * @description Title of the new template.
   */
  title?: string;
};

/**
 * Type of ESIGNATURES_IO's ESIGNATURES_IO_CREATE_TEMPLATE tool output.
 */
type ESIGNATURES_IO_CREATE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description List containing the created template's details.
   */
  data?: {
      /**
       * Template Id
       * @description Unique identifier of the created template.
       */
      template_id: string;
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
 * Type of ESIGNATURES_IO's ESIGNATURES_IO_DELETE_TEMPLATE tool input.
 */
type ESIGNATURES_IO_DELETE_TEMPLATE_INPUT = {
  /**
   * Template Id
   * @description Unique identifier of the template to delete
   */
  template_id?: string;
};

/**
 * Type of ESIGNATURES_IO's ESIGNATURES_IO_DELETE_TEMPLATE tool output.
 */
type ESIGNATURES_IO_DELETE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Additional details about the deletion result, if applicable
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the template was deleted successfully
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
 * Type of ESIGNATURES_IO's ESIGNATURES_IO_GET_TEMPLATE tool input.
 */
type ESIGNATURES_IO_GET_TEMPLATE_INPUT = {
  /**
   * Template Id
   * @description Unique identifier of the template to retrieve
   */
  template_id?: string;
};

/**
 * Type of ESIGNATURES_IO's ESIGNATURES_IO_GET_TEMPLATE tool output.
 */
type ESIGNATURES_IO_GET_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Template details wrapper
   */
  data?: {
      /**
       * Created At
       * @description Template creation timestamp in ISO8601 format
       */
      created_at: string;
      /**
       * Placeholder Fields
       * @description List of placeholder field keys present in the template
       */
      placeholder_fields: string[];
      /**
       * Signer Fields
       * @description List of signer field keys assigned in the template
       */
      signer_fields: string[];
      /**
       * Template Id
       * @description The unique ID of the template
       */
      template_id: string;
      /**
       * Template Name
       * @description The name of the template
       */
      template_name: string;
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
 * Type of ESIGNATURES_IO's ESIGNATURES_IO_LIST_TEMPLATES tool input.
 */
type ESIGNATURES_IO_LIST_TEMPLATES_INPUT = object;

/**
 * Type of ESIGNATURES_IO's ESIGNATURES_IO_LIST_TEMPLATES tool output.
 */
type ESIGNATURES_IO_LIST_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Templates
       * @description List of template objects
       */
      templates: {
          /**
           * Created At
           * @description Template creation timestamp in ISO8601 format
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the template
           */
          id: string;
          /**
           * Name
           * @description Name of the template
           */
          name: string;
          /**
           * Updated At
           * @description Template last updated timestamp in ISO8601 format
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
 * Type of ESIGNATURES_IO's ESIGNATURES_IO_WITHDRAW_CONTRACT tool input.
 */
type ESIGNATURES_IO_WITHDRAW_CONTRACT_INPUT = {
  /**
   * Contract Id
   * @description Unique identifier of the contract to withdraw
   */
  contract_id?: string;
};

/**
 * Type of ESIGNATURES_IO's ESIGNATURES_IO_WITHDRAW_CONTRACT tool output.
 */
type ESIGNATURES_IO_WITHDRAW_CONTRACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Status of the withdrawal request, typically 'queued'
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
 * Type map of all available tool input types for toolkit "ESIGNATURES_IO".
 */
export type ESIGNATURES_IO_TOOL_INPUTS = {
  CREATE_CONTRACT: ESIGNATURES_IO_CREATE_CONTRACT_INPUT
  CREATE_SIGNER: ESIGNATURES_IO_CREATE_SIGNER_INPUT
  CREATE_TEMPLATE: ESIGNATURES_IO_CREATE_TEMPLATE_INPUT
  DELETE_TEMPLATE: ESIGNATURES_IO_DELETE_TEMPLATE_INPUT
  GET_TEMPLATE: ESIGNATURES_IO_GET_TEMPLATE_INPUT
  LIST_TEMPLATES: ESIGNATURES_IO_LIST_TEMPLATES_INPUT
  WITHDRAW_CONTRACT: ESIGNATURES_IO_WITHDRAW_CONTRACT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ESIGNATURES_IO".
 */
export type ESIGNATURES_IO_TOOL_OUTPUTS = {
  CREATE_CONTRACT: ESIGNATURES_IO_CREATE_CONTRACT_OUTPUT
  CREATE_SIGNER: ESIGNATURES_IO_CREATE_SIGNER_OUTPUT
  CREATE_TEMPLATE: ESIGNATURES_IO_CREATE_TEMPLATE_OUTPUT
  DELETE_TEMPLATE: ESIGNATURES_IO_DELETE_TEMPLATE_OUTPUT
  GET_TEMPLATE: ESIGNATURES_IO_GET_TEMPLATE_OUTPUT
  LIST_TEMPLATES: ESIGNATURES_IO_LIST_TEMPLATES_OUTPUT
  WITHDRAW_CONTRACT: ESIGNATURES_IO_WITHDRAW_CONTRACT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ESIGNATURES_IO toolkit.
 */
export const ESIGNATURES_IO = {
  slug: "esignatures_io",
  tools: {
    /**
     * Tool to create a new contract using a specified template and signer details. use after selecting a template when you need to send a contract for signature.
     */
    CREATE_CONTRACT: "ESIGNATURES_IO_CREATE_CONTRACT",
    /**
     * Tool to create a new signer profile. use when you need to add a signer to an existing signature request.
     */
    CREATE_SIGNER: "ESIGNATURES_IO_CREATE_SIGNER",
    /**
     * Tool to create a new template. use when you want to register a reusable contract template after defining document elements.
     */
    CREATE_TEMPLATE: "ESIGNATURES_IO_CREATE_TEMPLATE",
    /**
     * Tool to delete a specific template by its id. use when you need to remove an unused or outdated template after confirming its id.
     */
    DELETE_TEMPLATE: "ESIGNATURES_IO_DELETE_TEMPLATE",
    /**
     * Tool to retrieve details of a specific template by its id. use when you need to fetch a template’s metadata after selecting its id.
     */
    GET_TEMPLATE: "ESIGNATURES_IO_GET_TEMPLATE",
    /**
     * Tool to retrieve a list of all templates. use when you need to browse available templates before selecting one.
     */
    LIST_TEMPLATES: "ESIGNATURES_IO_LIST_TEMPLATES",
    /**
     * Tool to withdraw a contract by its id. use when you need to prevent further signing of a contract that hasn't been fully signed.
     */
    WITHDRAW_CONTRACT: "ESIGNATURES_IO_WITHDRAW_CONTRACT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ESIGNATURES_IO".
 */
export type ESIGNATURES_IO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ESIGNATURES_IO".
 */
export type ESIGNATURES_IO_TRIGGER_EVENTS = {}
