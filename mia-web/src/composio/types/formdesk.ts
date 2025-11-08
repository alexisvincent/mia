// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FORMDESK's FORMDESK_AUTOMATIC_LOGIN tool input.
 */
type FORMDESK_AUTOMATIC_LOGIN_INPUT = {
  /**
   * Password
   * @description Password for the Formdesk account
   */
  password?: string;
  /**
   * Username
   * @description Username or email of the Formdesk account
   */
  username?: string;
};

/**
 * Type of FORMDESK's FORMDESK_AUTOMATIC_LOGIN tool output.
 */
type FORMDESK_AUTOMATIC_LOGIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Token
       * @description Bearer token for authenticated requests
       */
      access_token: string;
      /**
       * Expires In
       * @description Time in seconds until the token expires
       */
      expires_in: number;
      /**
       * Token Type
       * @description Type of the token, typically 'Bearer'
       */
      token_type: string;
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
 * Type of FORMDESK's FORMDESK_CREATE_ENTRY tool input.
 */
type FORMDESK_CREATE_ENTRY_INPUT = {
  /**
   * Fields
   * @description Mapping of form field identifiers to their values. Must match the form's schema exactly and cannot be empty.
   */
  fields?: {
      [key: string]: string | number | boolean;
  };
  /**
   * Form Id
   * @description Identifier of the Formdesk form to which the entry will be submitted
   */
  formId?: string;
};

/**
 * Type of FORMDESK's FORMDESK_CREATE_ENTRY tool output.
 */
type FORMDESK_CREATE_ENTRY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Entry Id
       * @description Identifier of the newly created entry
       */
      entryId: string;
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
 * Type of FORMDESK's FORMDESK_CREATE_FIELD tool input.
 */
type FORMDESK_CREATE_FIELD_INPUT = {
  /**
   * Field
   * @description JSON object representing the field definition as per Formdesk API
   */
  field?: {
      [key: string]: unknown;
  };
  /**
   * Form Id
   * @description Unique identifier of the form to add the field to
   */
  formId?: string;
};

/**
 * Type of FORMDESK's FORMDESK_CREATE_FIELD tool output.
 */
type FORMDESK_CREATE_FIELD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Details
       * @description Complete JSON payload of the created field as returned by Formdesk
       */
      details: {
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
 * Type of FORMDESK's FORMDESK_CREATE_VISITOR tool input.
 */
type FORMDESK_CREATE_VISITOR_INPUT = {
  /**
   * Form Id
   * @description Unique identifier of the form to which the visitor will be added
   */
  formId?: string;
  /**
   * Visitor
   * @description Key/value pairs of visitor attributes as defined in your Formdesk form. Common keys: 'name', 'email', 'firstName', 'lastName', etc.
   */
  visitor?: {
      [key: string]: unknown;
  };
};

/**
 * Type of FORMDESK's FORMDESK_CREATE_VISITOR tool output.
 */
type FORMDESK_CREATE_VISITOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Details
       * @description Complete JSON payload of the created visitor as returned by Formdesk
       */
      details: {
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
 * Type of FORMDESK's FORMDESK_DELETE_ENTRY tool input.
 */
type FORMDESK_DELETE_ENTRY_INPUT = {
  /**
   * Entry Id
   * @description ID of the entry to delete
   */
  entryId?: string;
  /**
   * Form Id
   * @description ID of the form containing the entry
   */
  formId?: string;
};

/**
 * Type of FORMDESK's FORMDESK_DELETE_ENTRY tool output.
 */
type FORMDESK_DELETE_ENTRY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status Code
       * @description HTTP status code returned by the API
       */
      status_code: number;
      /**
       * Success
       * @description Whether the deletion was successful
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
 * Type of FORMDESK's FORMDESK_DELETE_FIELD tool input.
 */
type FORMDESK_DELETE_FIELD_INPUT = {
  /**
   * Field Id
   * @description The unique identifier of the field to delete from the form.
   */
  field_id?: string;
  /**
   * Form Id
   * @description The unique identifier of the form containing the field to delete.
   */
  form_id?: string;
};

/**
 * Type of FORMDESK's FORMDESK_DELETE_FIELD tool output.
 */
type FORMDESK_DELETE_FIELD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message returned by the API, such as confirmation or error details.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the field deletion was successful.
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
 * Type of FORMDESK's FORMDESK_DELETE_FORM tool input.
 */
type FORMDESK_DELETE_FORM_INPUT = {
  /**
   * Form Id
   * @description The unique identifier of the form to delete.
   */
  form_id?: string;
};

/**
 * Type of FORMDESK's FORMDESK_DELETE_FORM tool output.
 */
type FORMDESK_DELETE_FORM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message returned by the API, e.g., error details or confirmation.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the form deletion was successful.
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
 * Type of FORMDESK's FORMDESK_DELETE_VISITOR tool input.
 */
type FORMDESK_DELETE_VISITOR_INPUT = {
  /**
   * Form Id
   * @description The unique identifier of the form containing the visitor to delete.
   */
  form_id?: string;
  /**
   * Visitor Id
   * @description The unique identifier of the visitor to delete from the form.
   */
  visitor_id?: string;
};

/**
 * Type of FORMDESK's FORMDESK_DELETE_VISITOR tool output.
 */
type FORMDESK_DELETE_VISITOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message returned by the API, such as confirmation or error details.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the visitor deletion was successful.
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
 * Type of FORMDESK's FORMDESK_GET_ENTRY_DETAILS tool input.
 */
type FORMDESK_GET_ENTRY_DETAILS_INPUT = {
  /**
   * Entry Id
   * @description Identifier of the specific entry to retrieve
   */
  entry_id?: string;
  /**
   * Form Id
   * @description Identifier of the form under which the entry was submitted
   */
  form_id?: string;
};

/**
 * Type of FORMDESK's FORMDESK_GET_ENTRY_DETAILS tool output.
 */
type FORMDESK_GET_ENTRY_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Raw JSON response containing entry details
   */
  data?: {
      [key: string]: unknown;
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
 * Type of FORMDESK's FORMDESK_GET_FIELD_DETAILS tool input.
 */
type FORMDESK_GET_FIELD_DETAILS_INPUT = {
  /**
   * Field Id
   * @description Unique identifier of the field to retrieve
   */
  fieldId?: string;
  /**
   * Form Id
   * @description Unique identifier of the form containing the field
   */
  formId?: string;
};

/**
 * Type of FORMDESK's FORMDESK_GET_FIELD_DETAILS tool output.
 */
type FORMDESK_GET_FIELD_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Details
       * @description Complete JSON payload of the field details as returned by Formdesk
       */
      details: {
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
 * Type of FORMDESK's FORMDESK_GET_FORM_DETAILS tool input.
 */
type FORMDESK_GET_FORM_DETAILS_INPUT = {
  /**
   * Form Id
   * @description Unique identifier of the form to retrieve (string or integer)
   */
  formId?: string | null;
};

/**
 * Type of FORMDESK's FORMDESK_GET_FORM_DETAILS tool output.
 */
type FORMDESK_GET_FORM_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Details
       * @description Complete JSON payload of the form details as returned by Formdesk
       */
      details: {
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
 * Type of FORMDESK's FORMDESK_GET_FORM_ENTRIES tool input.
 */
type FORMDESK_GET_FORM_ENTRIES_INPUT = {
  /**
   * Form Id
   * @description Identifier of the form to fetch entries for
   */
  form_id?: string;
};

/**
 * Type of FORMDESK's FORMDESK_GET_FORM_ENTRIES tool output.
 */
type FORMDESK_GET_FORM_ENTRIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw
       * @description Raw JSON response containing form entries
       */
      raw: {
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
 * Type of FORMDESK's FORMDESK_GET_FORM_FIELDS tool input.
 */
type FORMDESK_GET_FORM_FIELDS_INPUT = {
  /**
   * Form Id
   * @description Unique identifier of the form whose fields are to be retrieved
   */
  formId?: string;
};

/**
 * Type of FORMDESK's FORMDESK_GET_FORM_FIELDS tool output.
 */
type FORMDESK_GET_FORM_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Fields
       * @description List of field definition objects as returned by Formdesk API
       */
      fields: ({
          /**
           * Id
           * @description Unique identifier of the field
           */
          id: number;
          /**
           * Label
           * @description Label of the field
           */
          label: string;
          /**
           * Name
           * @description Field name identifier
           */
          name: string;
          /**
           * Required
           * @description Whether the field is required
           */
          required: boolean;
          /**
           * Type
           * @description Type of the field, e.g., text, number, date
           */
          type: string;
      } & {
          [key: string]: unknown;
      })[];
  } & {
      [key: string]: unknown;
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
 * Type of FORMDESK's FORMDESK_GET_FORM_LIST tool input.
 */
type FORMDESK_GET_FORM_LIST_INPUT = object;

/**
 * Type of FORMDESK's FORMDESK_GET_FORM_LIST tool output.
 */
type FORMDESK_GET_FORM_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Forms
       * @description List of forms in the account
       */
      forms: ({
          /**
           * Id
           * @description Unique identifier of the form
           */
          id: number;
          /**
           * Name
           * @description Name of the form
           */
          name: string;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of FORMDESK's FORMDESK_GET_FORM_VISITORS tool input.
 */
type FORMDESK_GET_FORM_VISITORS_INPUT = {
  /**
   * Form Id
   * @description Identifier of the form to fetch visitors for
   */
  form_id?: string;
};

/**
 * Type of FORMDESK's FORMDESK_GET_FORM_VISITORS tool output.
 */
type FORMDESK_GET_FORM_VISITORS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw
       * @description Raw JSON response containing form visitors
       */
      raw: {
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
 * Type of FORMDESK's FORMDESK_GET_VISITOR_DETAILS tool input.
 */
type FORMDESK_GET_VISITOR_DETAILS_INPUT = {
  /**
   * Form Id
   * @description Identifier of the form containing the visitor
   */
  form_id?: string;
  /**
   * Visitor Id
   * @description Identifier of the specific visitor to retrieve
   */
  visitor_id?: string;
};

/**
 * Type of FORMDESK's FORMDESK_GET_VISITOR_DETAILS tool output.
 */
type FORMDESK_GET_VISITOR_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Raw JSON response containing visitor details
   */
  data?: {
      [key: string]: unknown;
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
 * Type of FORMDESK's FORMDESK_KVK_HANDELSREGISTER_LOOKUP tool input.
 */
type FORMDESK_KVK_HANDELSREGISTER_LOOKUP_INPUT = {
  /**
   * Company Name
   * @description Official registered company name
   * @default null
   */
  companyName: string | null;
  /**
   * Kvk Number
   * @description KVK (Chamber of Commerce) number of the company
   * @default null
   */
  kvkNumber: string | null;
  /**
   * Postal Code
   * @description Postal code of the company's address
   * @default null
   */
  postalCode: string | null;
  /**
   * Street
   * @description Street name of the company's address
   * @default null
   */
  street: string | null;
};

/**
 * Type of FORMDESK's FORMDESK_KVK_HANDELSREGISTER_LOOKUP tool output.
 */
type FORMDESK_KVK_HANDELSREGISTER_LOOKUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * City
       * @description City of the company's address
       */
      city: string;
      /**
       * Company Name
       * @description Official registered company name
       */
      companyName: string;
      /**
       * House Number
       * @description House number of the company's address
       * @default null
       */
      houseNumber: string | null;
      /**
       * Kvk Number
       * @description Company's KVK number
       */
      kvkNumber: string;
      /**
       * Postal Code
       * @description Postal code of the company's address
       */
      postalCode: string;
      /**
       * Street
       * @description Street name of the company's address
       */
      street: string;
  } & {
      [key: string]: unknown;
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
 * Type of FORMDESK's FORMDESK_MANAGE_VISITOR_ENTRIES tool input.
 */
type FORMDESK_MANAGE_VISITOR_ENTRIES_INPUT = {
  /**
   * Entry Id
   * @description Identifier of the specific entry to retrieve.
   * @default null
   */
  entry_id: string | null;
  /**
   * Form Id
   * @description Identifier of the form to retrieve entries for.
   */
  form_id?: string;
  /**
   * Visitor Id
   * @description Optional visitor identifier to filter entries belonging to a specific visitor.
   * @default null
   */
  visitor_id: string | null;
};

/**
 * Type of FORMDESK's FORMDESK_MANAGE_VISITOR_ENTRIES tool output.
 */
type FORMDESK_MANAGE_VISITOR_ENTRIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw
       * @description Raw JSON response containing a list of entries or a single entry object.
       */
      raw: {
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
 * Type of FORMDESK's FORMDESK_MULTIPLE_PAGES_FORM tool input.
 */
type FORMDESK_MULTIPLE_PAGES_FORM_INPUT = {
  /**
   * Form
   * @description JSON payload representing the multi-page form structure according to Formdesk's schema
   */
  form?: {
      [key: string]: unknown;
  };
};

/**
 * Type of FORMDESK's FORMDESK_MULTIPLE_PAGES_FORM tool output.
 */
type FORMDESK_MULTIPLE_PAGES_FORM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Details
       * @description Full JSON response of the created multi-page form
       */
      details: {
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
 * Type of FORMDESK's FORMDESK_PREPOPULATE_FIELDS tool input.
 */
type FORMDESK_PREPOPULATE_FIELDS_INPUT = {
  /**
   * Extra Parameters
   * @description Additional parameters specific to the chosen method, eg. lookup source or webservice config
   * @default null
   */
  extraParameters: {
      [key: string]: string | number | boolean;
  } | null;
  /**
   * Field Values
   * @description Mapping of form field identifiers to their desired prepopulation values
   */
  fieldValues?: {
      [key: string]: string | number | boolean;
  };
  /**
   * Form Id
   * @description Identifier of the Formdesk form to prepopulate
   */
  formId?: string;
  /**
   * Method
   * @description Prepopulation method: standard, parameter, lookup, import, or webservice
   * @enum {string}
   */
  method?: "standard" | "parameter" | "lookup" | "import" | "webservice";
};

/**
 * Type of FORMDESK's FORMDESK_PREPOPULATE_FIELDS tool output.
 */
type FORMDESK_PREPOPULATE_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Prepopulated Values
       * @description Mapping of form field identifiers to their prepopulated values
       */
      prepopulatedValues: {
          [key: string]: string | number | boolean;
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
 * Type of FORMDESK's FORMDESK_UPDATE_FIELD tool input.
 */
type FORMDESK_UPDATE_FIELD_INPUT = {
  /**
   * Field Id
   * @description Unique identifier of the field to update
   */
  fieldId?: string;
  /**
   * Form Id
   * @description Unique identifier of the form containing the field
   */
  formId?: string;
  /**
   * Properties
   * @description Dictionary of field properties to update, such as label, type, or validation rules
   */
  properties?: {
      [key: string]: string | number | boolean;
  };
};

/**
 * Type of FORMDESK's FORMDESK_UPDATE_FIELD tool output.
 */
type FORMDESK_UPDATE_FIELD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Field
       * @description Details of the updated field as returned by Formdesk
       */
      field: {
          [key: string]: string | number | boolean | (string | number | boolean)[] | {
              [key: string]: string | number | boolean;
          };
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
 * Type of FORMDESK's FORMDESK_UPDATE_FORM tool input.
 */
type FORMDESK_UPDATE_FORM_INPUT = {
  /**
   * Form Id
   * @description Unique identifier of the form to update
   */
  formId?: string;
  /**
   * Is Active
   * @description Whether the form is active
   * @default null
   */
  isActive: boolean | null;
  /**
   * Name
   * @description New name of the form
   * @default null
   */
  name: string | null;
};

/**
 * Type of FORMDESK's FORMDESK_UPDATE_FORM tool output.
 */
type FORMDESK_UPDATE_FORM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Form
       * @description Updated form details as returned by the API
       */
      form: {
          [key: string]: string | number | boolean | (string | number | boolean)[] | {
              [key: string]: string | number | boolean;
          };
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
 * Type of FORMDESK's FORMDESK_UPDATE_VISITOR tool input.
 */
type FORMDESK_UPDATE_VISITOR_INPUT = {
  /**
   * Form Id
   * @description Identifier of the Formdesk form containing the visitor.
   */
  formId?: string;
  /**
   * Visitor
   * @description Mapping of visitor attribute identifiers to updated values. Must contain at least one field.
   */
  visitor?: {
      [key: string]: unknown;
  };
  /**
   * Visitor Id
   * @description Identifier of the visitor to update.
   */
  visitorId?: string;
};

/**
 * Type of FORMDESK's FORMDESK_UPDATE_VISITOR tool output.
 */
type FORMDESK_UPDATE_VISITOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Details
       * @description Complete JSON payload of the updated visitor as returned by Formdesk.
       */
      details: {
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
 * Type of FORMDESK's FORMDESK_WEBHOOK_INTEGRATION tool input.
 */
type FORMDESK_WEBHOOK_INTEGRATION_INPUT = {
  /**
   * Headers
   * @description Optional HTTP headers to include in the webhook request
   * @default null
   */
  headers: {
      [key: string]: string;
  } | null;
  /**
   * Method
   * @description HTTP method to use for the webhook call
   * @default post
   * @enum {string}
   */
  method: "get" | "post" | "put" | "patch" | "delete";
  /**
   * Payload
   * @description JSON payload to send to the webhook endpoint
   */
  payload?: {
      [key: string]: unknown;
  };
  /**
   * Query Params
   * @description Optional query parameters for the webhook request
   * @default null
   */
  query_params: {
      [key: string]: string;
  } | null;
  /**
   * Webhook Url
   * @description Destination webhook URL (must be a valid URI)
   */
  webhook_url?: string;
};

/**
 * Type of FORMDESK's FORMDESK_WEBHOOK_INTEGRATION tool output.
 */
type FORMDESK_WEBHOOK_INTEGRATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response
       * @description Parsed JSON response or raw text body from the webhook endpoint
       * @default null
       */
      response: {
          [key: string]: unknown;
      } | null;
      /**
       * Status Code
       * @description HTTP status code from the webhook response
       */
      status_code: number;
      /**
       * Success
       * @description True if the webhook returned a status code less than 400
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
 * Type map of all available tool input types for toolkit "FORMDESK".
 */
export type FORMDESK_TOOL_INPUTS = {
  AUTOMATIC_LOGIN: FORMDESK_AUTOMATIC_LOGIN_INPUT
  CREATE_ENTRY: FORMDESK_CREATE_ENTRY_INPUT
  CREATE_FIELD: FORMDESK_CREATE_FIELD_INPUT
  CREATE_VISITOR: FORMDESK_CREATE_VISITOR_INPUT
  DELETE_ENTRY: FORMDESK_DELETE_ENTRY_INPUT
  DELETE_FIELD: FORMDESK_DELETE_FIELD_INPUT
  DELETE_FORM: FORMDESK_DELETE_FORM_INPUT
  DELETE_VISITOR: FORMDESK_DELETE_VISITOR_INPUT
  GET_ENTRY_DETAILS: FORMDESK_GET_ENTRY_DETAILS_INPUT
  GET_FIELD_DETAILS: FORMDESK_GET_FIELD_DETAILS_INPUT
  GET_FORM_DETAILS: FORMDESK_GET_FORM_DETAILS_INPUT
  GET_FORM_ENTRIES: FORMDESK_GET_FORM_ENTRIES_INPUT
  GET_FORM_FIELDS: FORMDESK_GET_FORM_FIELDS_INPUT
  GET_FORM_LIST: FORMDESK_GET_FORM_LIST_INPUT
  GET_FORM_VISITORS: FORMDESK_GET_FORM_VISITORS_INPUT
  GET_VISITOR_DETAILS: FORMDESK_GET_VISITOR_DETAILS_INPUT
  KVK_HANDELSREGISTER_LOOKUP: FORMDESK_KVK_HANDELSREGISTER_LOOKUP_INPUT
  MANAGE_VISITOR_ENTRIES: FORMDESK_MANAGE_VISITOR_ENTRIES_INPUT
  MULTIPLE_PAGES_FORM: FORMDESK_MULTIPLE_PAGES_FORM_INPUT
  PREPOPULATE_FIELDS: FORMDESK_PREPOPULATE_FIELDS_INPUT
  UPDATE_FIELD: FORMDESK_UPDATE_FIELD_INPUT
  UPDATE_FORM: FORMDESK_UPDATE_FORM_INPUT
  UPDATE_VISITOR: FORMDESK_UPDATE_VISITOR_INPUT
  WEBHOOK_INTEGRATION: FORMDESK_WEBHOOK_INTEGRATION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FORMDESK".
 */
export type FORMDESK_TOOL_OUTPUTS = {
  AUTOMATIC_LOGIN: FORMDESK_AUTOMATIC_LOGIN_OUTPUT
  CREATE_ENTRY: FORMDESK_CREATE_ENTRY_OUTPUT
  CREATE_FIELD: FORMDESK_CREATE_FIELD_OUTPUT
  CREATE_VISITOR: FORMDESK_CREATE_VISITOR_OUTPUT
  DELETE_ENTRY: FORMDESK_DELETE_ENTRY_OUTPUT
  DELETE_FIELD: FORMDESK_DELETE_FIELD_OUTPUT
  DELETE_FORM: FORMDESK_DELETE_FORM_OUTPUT
  DELETE_VISITOR: FORMDESK_DELETE_VISITOR_OUTPUT
  GET_ENTRY_DETAILS: FORMDESK_GET_ENTRY_DETAILS_OUTPUT
  GET_FIELD_DETAILS: FORMDESK_GET_FIELD_DETAILS_OUTPUT
  GET_FORM_DETAILS: FORMDESK_GET_FORM_DETAILS_OUTPUT
  GET_FORM_ENTRIES: FORMDESK_GET_FORM_ENTRIES_OUTPUT
  GET_FORM_FIELDS: FORMDESK_GET_FORM_FIELDS_OUTPUT
  GET_FORM_LIST: FORMDESK_GET_FORM_LIST_OUTPUT
  GET_FORM_VISITORS: FORMDESK_GET_FORM_VISITORS_OUTPUT
  GET_VISITOR_DETAILS: FORMDESK_GET_VISITOR_DETAILS_OUTPUT
  KVK_HANDELSREGISTER_LOOKUP: FORMDESK_KVK_HANDELSREGISTER_LOOKUP_OUTPUT
  MANAGE_VISITOR_ENTRIES: FORMDESK_MANAGE_VISITOR_ENTRIES_OUTPUT
  MULTIPLE_PAGES_FORM: FORMDESK_MULTIPLE_PAGES_FORM_OUTPUT
  PREPOPULATE_FIELDS: FORMDESK_PREPOPULATE_FIELDS_OUTPUT
  UPDATE_FIELD: FORMDESK_UPDATE_FIELD_OUTPUT
  UPDATE_FORM: FORMDESK_UPDATE_FORM_OUTPUT
  UPDATE_VISITOR: FORMDESK_UPDATE_VISITOR_OUTPUT
  WEBHOOK_INTEGRATION: FORMDESK_WEBHOOK_INTEGRATION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FORMDESK toolkit.
 */
export const FORMDESK = {
  slug: "formdesk",
  tools: {
    /**
     * Tool to perform automatic login to Formdesk and retrieve an access token. Use when you need to authenticate with username and password.
     */
    AUTOMATIC_LOGIN: "FORMDESK_AUTOMATIC_LOGIN",
    /**
     * Tool to submit a new entry to a Formdesk form. Use after collecting all form field values to send a new entry for a specific formId. Example: "Submit entry to form 12345 with first_name='Bob', email='bob@example.com'."
     */
    CREATE_ENTRY: "FORMDESK_CREATE_ENTRY",
    /**
     * Tool to create a new field in a specific Formdesk form. Use after you have the formId and need to extend the form schema with an additional input.
     */
    CREATE_FIELD: "FORMDESK_CREATE_FIELD",
    /**
     * Tool to add a new visitor to a specific Formdesk form. Use when you need to register a visitor's metadata (e.g., name, email) before submitting entries.
     */
    CREATE_VISITOR: "FORMDESK_CREATE_VISITOR",
    /**
     * Tool to delete a specific entry from a Formdesk form. Use after confirming the target entry exists.
     */
    DELETE_ENTRY: "FORMDESK_DELETE_ENTRY",
    /**
     * Tool to delete a specific field in a Formdesk form. Use after confirming formId and fieldId.
     */
    DELETE_FIELD: "FORMDESK_DELETE_FIELD",
    /**
     * Tool to delete a specific form. Use when you need to permanently remove a form after confirming it's no longer needed.
     */
    DELETE_FORM: "FORMDESK_DELETE_FORM",
    /**
     * Tool to delete a specific visitor in a Formdesk form. Use after confirming formId and visitorId.
     */
    DELETE_VISITOR: "FORMDESK_DELETE_VISITOR",
    /**
     * Tool to retrieve detailed information about a specific Formdesk entry. Use after confirming you have the form ID and entry ID.
     */
    GET_ENTRY_DETAILS: "FORMDESK_GET_ENTRY_DETAILS",
    /**
     * Tool to retrieve detailed information about a specific field. Use after confirming the formId and fieldId to inspect the field’s properties.
     */
    GET_FIELD_DETAILS: "FORMDESK_GET_FIELD_DETAILS",
    /**
     * Tool to retrieve detailed information about a specific Formdesk form. Use when you have the formId.
     */
    GET_FORM_DETAILS: "FORMDESK_GET_FORM_DETAILS",
    /**
     * Tool to retrieve all entries for a specified Formdesk form. Use when you need to list submissions for a form by its ID.
     */
    GET_FORM_ENTRIES: "FORMDESK_GET_FORM_ENTRIES",
    /**
     * Tool to retrieve all fields of a specific form. Use after obtaining the formId to inspect its field definitions.
     */
    GET_FORM_FIELDS: "FORMDESK_GET_FORM_FIELDS",
    /**
     * Tool to retrieve a list of all forms available in the account. Use after obtaining a valid bearer token.
     */
    GET_FORM_LIST: "FORMDESK_GET_FORM_LIST",
    /**
     * Tool to retrieve all visitors for a specified Formdesk form. Use when you need to list visitors by form ID.
     */
    GET_FORM_VISITORS: "FORMDESK_GET_FORM_VISITORS",
    /**
     * Tool to retrieve detailed information about a specific Formdesk visitor. Use after confirming you have the form ID and visitor ID.
     */
    GET_VISITOR_DETAILS: "FORMDESK_GET_VISITOR_DETAILS",
    /**
     * Tool to lookup company details from the Dutch KVK Handelsregister. Use when auto-filling company address fields.
     */
    KVK_HANDELSREGISTER_LOOKUP: "FORMDESK_KVK_HANDELSREGISTER_LOOKUP",
    /**
     * Tool to list or retrieve a visitor's own form entries. Use after authenticating visitor.
     */
    MANAGE_VISITOR_ENTRIES: "FORMDESK_MANAGE_VISITOR_ENTRIES",
    /**
     * Tool to create a multi-page Formdesk form. Use when you need forms split into multiple pages for better user experience.
     */
    MULTIPLE_PAGES_FORM: "FORMDESK_MULTIPLE_PAGES_FORM",
    /**
     * Tool to prepopulate form fields. Use when loading default, parameter-based, lookup, import, or webservice-provided values before displaying a form.
     */
    PREPOPULATE_FIELDS: "FORMDESK_PREPOPULATE_FIELDS",
    /**
     * Tool to update an existing field definition on a Formdesk form. Use when you need to modify field properties like label or validation rules.
     */
    UPDATE_FIELD: "FORMDESK_UPDATE_FIELD",
    /**
     * Tool to update an existing form. Use when you need to modify form metadata after fetching current details.
     */
    UPDATE_FORM: "FORMDESK_UPDATE_FORM",
    /**
     * Tool to update an existing visitor for a given form. Use when you have the formId and visitorId and need to modify visitor details. Only include fields you want to change.
     */
    UPDATE_VISITOR: "FORMDESK_UPDATE_VISITOR",
    /**
     * Tool to send form submission data to external webhooks. Use after retrieving entry details to push data to a custom endpoint.
     */
    WEBHOOK_INTEGRATION: "FORMDESK_WEBHOOK_INTEGRATION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FORMDESK".
 */
export type FORMDESK_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FORMDESK".
 */
export type FORMDESK_TRIGGER_EVENTS = {}
