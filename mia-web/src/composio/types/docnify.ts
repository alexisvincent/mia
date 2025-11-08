// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DOCNIFY's DOCNIFY_ADD_DOCUMENT_RECIPIENT tool input.
 */
type DOCNIFY_ADD_DOCUMENT_RECIPIENT_INPUT = {
  /**
   * AuthOptions
   * @description Recipient-level authentication options (Enterprise only).
   * @default null
   */
  authOptions: {
      /**
       * Action Auth
       * @description Authentication type for recipient-level action, e.g., ACCOUNT
       * @default null
       */
      actionAuth: string | null;
  } | null;
  /**
   * Document Id
   * @description ID of the document to add a recipient to
   */
  documentId?: number;
  /**
   * Email
   * @description Email address of the recipient
   */
  email?: string;
  /**
   * Name
   * @description Full name of the recipient
   */
  name?: string;
  /**
   * Role
   * @description Role of the recipient
   * @enum {string}
   */
  role?: "SIGNER" | "APPROVER" | "VIEWER" | "ASSISTANT" | "CC";
  /**
   * Signing Order
   * @description Zero-based order in which the recipient should act
   * @default null
   */
  signingOrder: number | null;
};

/**
 * Type of DOCNIFY's DOCNIFY_ADD_DOCUMENT_RECIPIENT tool output.
 */
type DOCNIFY_ADD_DOCUMENT_RECIPIENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message from the API response.
       * @default null
       */
      message: string | null;
      /**
       * RecipientDetails
       * @description Recipient object as returned by Docnify APIs.
       * @default null
       */
      recipient: {
          /**
           * Document Id
           * @description Associated document ID
           */
          documentId: number;
          /**
           * Email
           * @description Recipient email address
           */
          email: string;
          /**
           * Id
           * @description Recipient ID
           */
          id: number;
          /**
           * Name
           * @description Recipient name
           */
          name: string;
          /**
           * Read Status
           * @description Read status of the document for this recipient
           */
          readStatus: string;
          /**
           * Role
           * @description Recipient role
           */
          role: string;
          /**
           * Send Status
           * @description Send status of the recipient
           */
          sendStatus: string;
          /**
           * Signed At
           * Format: date-time
           * @description Timestamp when the recipient signed, if signed
           * @default null
           */
          signedAt: string | null;
          /**
           * Signing Order
           * @description Order in which the recipient should act
           * @default null
           */
          signingOrder: number | null;
          /**
           * Signing Status
           * @description Signing status of the recipient
           */
          signingStatus: string;
          /**
           * Signing Url
           * Format: uri
           * @description URL where the recipient can sign the document
           */
          signingUrl: string;
          /**
           * Token
           * @description Unique signing token for the recipient
           */
          token: string;
      } | null;
      /**
       * Status Code
       * @description HTTP status code returned by the API.
       */
      status_code: number;
      /**
       * Success
       * @description True if the add recipient call succeeded (HTTP 2xx).
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
 * Type of DOCNIFY's DOCNIFY_CREATE_DOCUMENT_FIELDS tool input.
 */
type DOCNIFY_CREATE_DOCUMENT_FIELDS_INPUT = {
  /**
   * Document Id
   * @description ID of the document to modify
   */
  documentId?: number;
  /**
   * Fields
   * @description List of field definitions to add to the document
   */
  fields?: {
      /**
       * FieldMeta
       * @description Metadata for advanced field types (e.g., text, checkbox, radio).
       * @default null
       */
      fieldMeta: {
          /**
           * Character Limit
           * @description Maximum characters for text fields
           * @default null
           */
          characterLimit: number | null;
          /**
           * Label
           * @description Label for the field, shown alongside input
           * @default null
           */
          label: string | null;
          /**
           * Placeholder
           * @description Placeholder text for text-like fields
           * @default null
           */
          placeholder: string | null;
          /**
           * Read Only
           * @description Whether the field is read-only
           * @default null
           */
          readOnly: boolean | null;
          /**
           * Required
           * @description Whether the field is required
           * @default null
           */
          required: boolean | null;
          /**
           * Text
           * @description Default text for text-like fields
           * @default null
           */
          text: string | null;
          /**
           * Type
           * @description Type of advanced field; required for advanced types
           * @default null
           * @enum {string|null}
           */
          type: "text" | "checkbox" | "radio" | "number" | "select" | null;
      } | null;
      /**
       * Page Height
       * @description Height of the field on the page
       */
      pageHeight: number;
      /**
       * Page Number
       * @description Page number where field will be placed
       */
      pageNumber: number;
      /**
       * Page Width
       * @description Width of the field on the page
       */
      pageWidth: number;
      /**
       * Page X
       * @description X coordinate on the page (e.g., percent or points)
       */
      pageX: number;
      /**
       * Page Y
       * @description Y coordinate on the page (e.g., percent or points)
       */
      pageY: number;
      /**
       * Recipient Id
       * @description ID of the recipient for this field
       */
      recipientId: number;
      /**
       * Type
       * @description Field type to create on document
       * @enum {string}
       */
      type: "SIGNATURE" | "TEXT" | "CHECKBOX" | "RADIO" | "NUMBER" | "SELECT";
  }[];
};

/**
 * Type of DOCNIFY's DOCNIFY_CREATE_DOCUMENT_FIELDS tool output.
 */
type DOCNIFY_CREATE_DOCUMENT_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Fields
       * @description List of created document fields when successful
       * @default null
       */
      fields: {
          /**
           * FieldMeta
           * @description Metadata for advanced field types (e.g., text, checkbox, radio).
           * @default null
           */
          fieldMeta: {
              /**
               * Character Limit
               * @description Maximum characters for text fields
               * @default null
               */
              characterLimit: number | null;
              /**
               * Label
               * @description Label for the field, shown alongside input
               * @default null
               */
              label: string | null;
              /**
               * Placeholder
               * @description Placeholder text for text-like fields
               * @default null
               */
              placeholder: string | null;
              /**
               * Read Only
               * @description Whether the field is read-only
               * @default null
               */
              readOnly: boolean | null;
              /**
               * Required
               * @description Whether the field is required
               * @default null
               */
              required: boolean | null;
              /**
               * Text
               * @description Default text for text-like fields
               * @default null
               */
              text: string | null;
              /**
               * Type
               * @description Type of advanced field; required for advanced types
               * @default null
               * @enum {string|null}
               */
              type: "text" | "checkbox" | "radio" | "number" | "select" | null;
          } | null;
          /**
           * Id
           * @description ID of the created field
           */
          id: number;
          /**
           * Page Height
           * @description Height of the field
           */
          pageHeight: number;
          /**
           * Page Number
           * @description Page number where the field is placed
           */
          pageNumber: number;
          /**
           * Page Width
           * @description Width of the field
           */
          pageWidth: number;
          /**
           * Page X
           * @description X coordinate on the page
           */
          pageX: number;
          /**
           * Page Y
           * @description Y coordinate on the page
           */
          pageY: number;
          /**
           * Recipient Id
           * @description ID of the recipient for this field
           */
          recipientId: number;
          /**
           * Type
           * @description Type of the field
           * @enum {string}
           */
          type: "SIGNATURE" | "TEXT" | "CHECKBOX" | "RADIO" | "NUMBER" | "SELECT";
      }[] | null;
      /**
       * Message
       * @description Optional message from the API (present on errors)
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description True if fields were created successfully
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
 * Type of DOCNIFY's DOCNIFY_DELETE_DOCUMENT tool input.
 */
type DOCNIFY_DELETE_DOCUMENT_INPUT = {
  /**
   * Id
   * @description The ID of the document to delete (must be >= 1).
   */
  id?: number;
};

/**
 * Type of DOCNIFY's DOCNIFY_DELETE_DOCUMENT tool output.
 */
type DOCNIFY_DELETE_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message from the API response.
       * @default null
       */
      message: string | null;
      /**
       * Status Code
       * @description HTTP status code returned by the API.
       */
      status_code: number;
      /**
       * Success
       * @description True if the deletion succeeded (HTTP 200).
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
 * Type of DOCNIFY's DOCNIFY_DELETE_DOCUMENT_FIELDS tool input.
 */
type DOCNIFY_DELETE_DOCUMENT_FIELDS_INPUT = {
  /**
   * Field Id
   * @description Identifier of the field to delete
   */
  fieldId?: string;
  /**
   * Id
   * @description Document ID
   */
  id?: number;
};

/**
 * Type of DOCNIFY's DOCNIFY_DELETE_DOCUMENT_FIELDS tool output.
 */
type DOCNIFY_DELETE_DOCUMENT_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description API response message on deletion
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
 * Type of DOCNIFY's DOCNIFY_DELETE_DOCUMENT_RECIPIENT tool input.
 */
type DOCNIFY_DELETE_DOCUMENT_RECIPIENT_INPUT = {
  /**
   * Document Id
   * @description Target document ID; must be a positive integer
   */
  document_id?: number;
  /**
   * Recipient Id
   * @description ID of the recipient to remove; must be a positive integer
   */
  recipient_id?: number;
};

/**
 * Type of DOCNIFY's DOCNIFY_DELETE_DOCUMENT_RECIPIENT tool output.
 */
type DOCNIFY_DELETE_DOCUMENT_RECIPIENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message returned by the API
       * @default null
       */
      message: string | null;
      /**
       * Status Code
       * @description HTTP status code returned by the API
       */
      status_code: number;
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
 * Type of DOCNIFY's DOCNIFY_GET_DOCUMENT tool input.
 */
type DOCNIFY_GET_DOCUMENT_INPUT = {
  /**
   * Id
   * @description The ID of the document to retrieve (must be >= 1).
   */
  id?: number;
};

/**
 * Type of DOCNIFY's DOCNIFY_GET_DOCUMENT tool output.
 */
type DOCNIFY_GET_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document
       * @description Raw document object as returned by the Docnify API
       */
      document: {
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
 * Type of DOCNIFY's DOCNIFY_GET_TEMPLATE tool input.
 */
type DOCNIFY_GET_TEMPLATE_INPUT = {
  /**
   * Template Id
   * @description The ID of the template to retrieve (must be >= 1).
   */
  template_id?: number;
};

/**
 * Type of DOCNIFY's DOCNIFY_GET_TEMPLATE tool output.
 */
type DOCNIFY_GET_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Template
       * @description Raw template object or error payload as returned by the Docnify API
       */
      template: {
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
 * Type of DOCNIFY's DOCNIFY_LIST_DOCUMENTS tool input.
 */
type DOCNIFY_LIST_DOCUMENTS_INPUT = {
  /**
   * Page
   * @description Page number for pagination
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of items per page
   * @default 10
   */
  perPage: number;
};

/**
 * Type of DOCNIFY's DOCNIFY_LIST_DOCUMENTS tool output.
 */
type DOCNIFY_LIST_DOCUMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Documents
       * @description List of document objects
       */
      documents: {
          [key: string]: unknown;
      }[];
      /**
       * Total Pages
       * @description Total number of pages available
       */
      totalPages: number;
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
 * Type of DOCNIFY's DOCNIFY_LIST_TEMPLATES tool input.
 */
type DOCNIFY_LIST_TEMPLATES_INPUT = {
  /**
   * Page
   * @description Page number for pagination
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of items per page
   * @default 10
   */
  perPage: number;
};

/**
 * Type of DOCNIFY's DOCNIFY_LIST_TEMPLATES tool output.
 */
type DOCNIFY_LIST_TEMPLATES_OUTPUT = {
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
          [key: string]: unknown;
      }[];
      /**
       * Total Pages
       * @description Total number of pages available
       */
      totalPages: number;
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
 * Type of DOCNIFY's DOCNIFY_RESEND_DOCUMENT tool input.
 */
type DOCNIFY_RESEND_DOCUMENT_INPUT = {
  /**
   * Id
   * @description ID of the document to resend
   */
  id?: number;
};

/**
 * Type of DOCNIFY's DOCNIFY_RESEND_DOCUMENT tool output.
 */
type DOCNIFY_RESEND_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message from the API response
       * @default null
       */
      message: string | null;
      /**
       * Status Code
       * @description HTTP status code returned by the API
       */
      status_code: number;
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
 * Type of DOCNIFY's DOCNIFY_SEND_DOCUMENT tool input.
 */
type DOCNIFY_SEND_DOCUMENT_INPUT = {
  /**
   * Id
   * @description ID of the document to send for signing
   */
  id?: number;
};

/**
 * Type of DOCNIFY's DOCNIFY_SEND_DOCUMENT tool output.
 */
type DOCNIFY_SEND_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message extracted from the API response
       * @default null
       */
      message: string | null;
      /**
       * Payload
       * @description Raw JSON payload returned by the API, if any
       * @default null
       */
      payload: {
          [key: string]: unknown;
      } | null;
      /**
       * Status Code
       * @description HTTP status code returned by the API
       */
      status_code: number;
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
 * Type of DOCNIFY's DOCNIFY_UPDATE_DOCUMENT_FIELDS tool input.
 */
type DOCNIFY_UPDATE_DOCUMENT_FIELDS_INPUT = {
  /**
   * Document Id
   * @description ID of the document containing fields to update
   */
  documentId?: number;
  /**
   * Fields
   * @description List of field metadata updates
   */
  fields?: {
      /**
       * Field Meta
       * @description Metadata updates for the field
       */
      fieldMeta: {
          /**
           * Character Limit
           * @description Max characters for text fields
           * @default null
           */
          characterLimit: number | null;
          /**
           * Label
           * @description Label for the field, shown alongside input
           * @default null
           */
          label: string | null;
          /**
           * Placeholder
           * @description Placeholder text for text-like fields
           * @default null
           */
          placeholder: string | null;
          /**
           * Read Only
           * @description Whether the field is read-only
           * @default null
           */
          readOnly: boolean | null;
          /**
           * Required
           * @description Whether the field is required
           * @default null
           */
          required: boolean | null;
          /**
           * Text
           * @description Default text for text-like fields
           * @default null
           */
          text: string | null;
          /**
           * Type
           * @description Type of advanced field; required for advanced types
           * @default null
           * @enum {string|null}
           */
          type: "text" | "checkbox" | "radio" | "number" | "select" | null;
      };
      /**
       * Id
       * @description ID of the field to update
       */
      id: number;
  }[];
};

/**
 * Type of DOCNIFY's DOCNIFY_UPDATE_DOCUMENT_FIELDS tool output.
 */
type DOCNIFY_UPDATE_DOCUMENT_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Fields
       * @description List of updated document fields
       */
      fields: {
          /**
           * UpdateFieldMeta
           * @description Metadata for advanced field types.
           * @default null
           */
          fieldMeta: {
              /**
               * Character Limit
               * @description Max characters for text fields
               * @default null
               */
              characterLimit: number | null;
              /**
               * Label
               * @description Label for the field, shown alongside input
               * @default null
               */
              label: string | null;
              /**
               * Placeholder
               * @description Placeholder text for text-like fields
               * @default null
               */
              placeholder: string | null;
              /**
               * Read Only
               * @description Whether the field is read-only
               * @default null
               */
              readOnly: boolean | null;
              /**
               * Required
               * @description Whether the field is required
               * @default null
               */
              required: boolean | null;
              /**
               * Text
               * @description Default text for text-like fields
               * @default null
               */
              text: string | null;
              /**
               * Type
               * @description Type of advanced field; required for advanced types
               * @default null
               * @enum {string|null}
               */
              type: "text" | "checkbox" | "radio" | "number" | "select" | null;
          } | null;
          /**
           * Id
           * @description ID of the updated field
           */
          id: number;
          /**
           * Page Height
           * @description Height of the field
           * @default null
           */
          pageHeight: number | null;
          /**
           * Page Number
           * @description Page number of the field placement
           * @default null
           */
          pageNumber: number | null;
          /**
           * Page Width
           * @description Width of the field
           * @default null
           */
          pageWidth: number | null;
          /**
           * Page X
           * @description X coordinate on the page
           * @default null
           */
          pageX: number | null;
          /**
           * Page Y
           * @description Y coordinate on the page
           * @default null
           */
          pageY: number | null;
          /**
           * Recipient Id
           * @description ID of the recipient for this field
           * @default null
           */
          recipientId: number | null;
          /**
           * Type
           * @description Type of the field
           * @default null
           * @enum {string|null}
           */
          type: "SIGNATURE" | "TEXT" | "CHECKBOX" | "RADIO" | "NUMBER" | "SELECT" | null;
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
 * Type of DOCNIFY's DOCNIFY_UPDATE_DOCUMENT_RECIPIENT tool input.
 */
type DOCNIFY_UPDATE_DOCUMENT_RECIPIENT_INPUT = {
  /**
   * Document Id
   * @description ID of the document to update; must be a positive integer
   */
  documentId?: number;
  /**
   * Email
   * @description Email address of the recipient
   * @default null
   */
  email: string | null;
  /**
   * Name
   * @description Full name of the recipient
   * @default null
   */
  name: string | null;
  /**
   * Recipient Id
   * @description ID of the recipient to update; must be a positive integer
   */
  recipientId?: number;
  /**
   * Role
   * @description Role of the recipient on the document
   * @default null
   * @enum {string|null}
   */
  role: "SIGNER" | "APPROVER" | "VIEWER" | "ASSISTANT" | "CC" | null;
};

/**
 * Type of DOCNIFY's DOCNIFY_UPDATE_DOCUMENT_RECIPIENT tool output.
 */
type DOCNIFY_UPDATE_DOCUMENT_RECIPIENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message from the API response.
       * @default null
       */
      message: string | null;
      /**
       * RecipientDetails
       * @description Recipient object as returned by Docnify APIs.
       * @default null
       */
      recipient: {
          /**
           * Document Id
           * @description Associated document ID
           */
          documentId: number;
          /**
           * Email
           * @description Recipient email address
           */
          email: string;
          /**
           * Id
           * @description Recipient ID
           */
          id: number;
          /**
           * Name
           * @description Recipient name
           */
          name: string;
          /**
           * Read Status
           * @description Read status of the document for this recipient
           */
          readStatus: string;
          /**
           * Role
           * @description Recipient role on the document
           */
          role: string;
          /**
           * Send Status
           * @description Send status of the recipient
           */
          sendStatus: string;
          /**
           * Signed At
           * Format: date-time
           * @description Timestamp when the recipient signed, if signed
           * @default null
           */
          signedAt: string | null;
          /**
           * Signing Order
           * @description Order in which the recipient should act
           * @default null
           */
          signingOrder: number | null;
          /**
           * Signing Status
           * @description Signing status of the recipient
           */
          signingStatus: string;
          /**
           * Signing Url
           * Format: uri
           * @description URL where the recipient can sign the document
           */
          signingUrl: string;
          /**
           * Token
           * @description Unique signing token for the recipient
           */
          token: string;
      } | null;
      /**
       * Status Code
       * @description HTTP status code returned by the API.
       */
      status_code: number;
      /**
       * Success
       * @description True if the update succeeded (HTTP 2xx).
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
 * Type map of all available tool input types for toolkit "DOCNIFY".
 */
export type DOCNIFY_TOOL_INPUTS = {
  ADD_DOCUMENT_RECIPIENT: DOCNIFY_ADD_DOCUMENT_RECIPIENT_INPUT
  CREATE_DOCUMENT_FIELDS: DOCNIFY_CREATE_DOCUMENT_FIELDS_INPUT
  DELETE_DOCUMENT: DOCNIFY_DELETE_DOCUMENT_INPUT
  DELETE_DOCUMENT_FIELDS: DOCNIFY_DELETE_DOCUMENT_FIELDS_INPUT
  DELETE_DOCUMENT_RECIPIENT: DOCNIFY_DELETE_DOCUMENT_RECIPIENT_INPUT
  GET_DOCUMENT: DOCNIFY_GET_DOCUMENT_INPUT
  GET_TEMPLATE: DOCNIFY_GET_TEMPLATE_INPUT
  LIST_DOCUMENTS: DOCNIFY_LIST_DOCUMENTS_INPUT
  LIST_TEMPLATES: DOCNIFY_LIST_TEMPLATES_INPUT
  RESEND_DOCUMENT: DOCNIFY_RESEND_DOCUMENT_INPUT
  SEND_DOCUMENT: DOCNIFY_SEND_DOCUMENT_INPUT
  UPDATE_DOCUMENT_FIELDS: DOCNIFY_UPDATE_DOCUMENT_FIELDS_INPUT
  UPDATE_DOCUMENT_RECIPIENT: DOCNIFY_UPDATE_DOCUMENT_RECIPIENT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DOCNIFY".
 */
export type DOCNIFY_TOOL_OUTPUTS = {
  ADD_DOCUMENT_RECIPIENT: DOCNIFY_ADD_DOCUMENT_RECIPIENT_OUTPUT
  CREATE_DOCUMENT_FIELDS: DOCNIFY_CREATE_DOCUMENT_FIELDS_OUTPUT
  DELETE_DOCUMENT: DOCNIFY_DELETE_DOCUMENT_OUTPUT
  DELETE_DOCUMENT_FIELDS: DOCNIFY_DELETE_DOCUMENT_FIELDS_OUTPUT
  DELETE_DOCUMENT_RECIPIENT: DOCNIFY_DELETE_DOCUMENT_RECIPIENT_OUTPUT
  GET_DOCUMENT: DOCNIFY_GET_DOCUMENT_OUTPUT
  GET_TEMPLATE: DOCNIFY_GET_TEMPLATE_OUTPUT
  LIST_DOCUMENTS: DOCNIFY_LIST_DOCUMENTS_OUTPUT
  LIST_TEMPLATES: DOCNIFY_LIST_TEMPLATES_OUTPUT
  RESEND_DOCUMENT: DOCNIFY_RESEND_DOCUMENT_OUTPUT
  SEND_DOCUMENT: DOCNIFY_SEND_DOCUMENT_OUTPUT
  UPDATE_DOCUMENT_FIELDS: DOCNIFY_UPDATE_DOCUMENT_FIELDS_OUTPUT
  UPDATE_DOCUMENT_RECIPIENT: DOCNIFY_UPDATE_DOCUMENT_RECIPIENT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DOCNIFY toolkit.
 */
export const DOCNIFY = {
  slug: "docnify",
  tools: {
    /**
     * Tool to add a recipient to a document. Use after confirming the document's ID. Optionally specify signing order and authentication options.
     */
    ADD_DOCUMENT_RECIPIENT: "DOCNIFY_ADD_DOCUMENT_RECIPIENT",
    /**
     * Tool to create one or more fields on a document. Use after fetching a document to add fields before sending.
     */
    CREATE_DOCUMENT_FIELDS: "DOCNIFY_CREATE_DOCUMENT_FIELDS",
    /**
     * Tool to delete a specific document by its ID. Use when you have confirmed the document should be permanently removed.
     */
    DELETE_DOCUMENT: "DOCNIFY_DELETE_DOCUMENT",
    /**
     * Tool to delete a field from a document. Use when you need to remove a specific field from an existing document.
     */
    DELETE_DOCUMENT_FIELDS: "DOCNIFY_DELETE_DOCUMENT_FIELDS",
    /**
     * Tool to remove a recipient from a document. Use after verifying document and recipient IDs to revoke access.
     */
    DELETE_DOCUMENT_RECIPIENT: "DOCNIFY_DELETE_DOCUMENT_RECIPIENT",
    /**
     * Tool to fetch a specific document by its ID. Use when you need to view a document's current state and metadata.
     */
    GET_DOCUMENT: "DOCNIFY_GET_DOCUMENT",
    /**
     * Tool to fetch a specific template by its ID. Use to view a template's details and metadata.
     */
    GET_TEMPLATE: "DOCNIFY_GET_TEMPLATE",
    /**
     * Tool to list documents in the Docnify account.
     */
    LIST_DOCUMENTS: "DOCNIFY_LIST_DOCUMENTS",
    /**
     * Tool to list templates in the Docnify account.
     */
    LIST_TEMPLATES: "DOCNIFY_LIST_TEMPLATES",
    /**
     * Tool to resend a document for signing. Use after verifying the document ID to re-trigger signing notifications.
     */
    RESEND_DOCUMENT: "DOCNIFY_RESEND_DOCUMENT",
    /**
     * Tool to send a document for signing. Use after confirming the document's ID, adding recipients, and uploading content.
     */
    SEND_DOCUMENT: "DOCNIFY_SEND_DOCUMENT",
    /**
     * Tool to update metadata of document fields. Use when you need to change labels or requirements of existing fields before sending.
     */
    UPDATE_DOCUMENT_FIELDS: "DOCNIFY_UPDATE_DOCUMENT_FIELDS",
    /**
     * Tool to update a recipient's details (name, email, role) on a document. Use after confirming document and recipient IDs. Provide at least one field to update.
     */
    UPDATE_DOCUMENT_RECIPIENT: "DOCNIFY_UPDATE_DOCUMENT_RECIPIENT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DOCNIFY".
 */
export type DOCNIFY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DOCNIFY".
 */
export type DOCNIFY_TRIGGER_EVENTS = {}
