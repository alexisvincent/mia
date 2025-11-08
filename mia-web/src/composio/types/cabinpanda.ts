// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CABINPANDA's CABINPANDA_CREATE_FORM tool input.
 */
type CABINPANDA_CREATE_FORM_INPUT = {
  /**
   * Fields
   * @description List of fields to include in the form
   */
  fields?: {
      /**
       * Key
       * @description Unique identifier for the form field, used as the submission key
       */
      key: string;
      /**
       * Label
       * @description Display label for the form field
       */
      label: string;
      /**
       * Options
       * @description List of selectable options for select, checkbox, or radio types
       * @default null
       */
      options: string[] | null;
      /**
       * Required
       * @description Whether this field must be filled before submission
       */
      required: boolean;
      /**
       * Type
       * @description Input type of the form field
       * @enum {string}
       */
      type: "text" | "email" | "number" | "textarea" | "select" | "checkbox" | "radio" | "date";
  }[];
  /**
   * Name
   * @description Name of the form
   */
  name?: string;
  /**
   * FormSettings
   * @description Configuration settings for the form, such as URL slug, redirect URL, and description.
   * @default null
   */
  settings: {
      /**
       * Description
       * @description Optional description or subtitle for the form
       * @default null
       */
      description: string | null;
      /**
       * Redirect Url
       * @description URL to redirect to after successful submission
       * @default null
       */
      redirect_url: string | null;
      /**
       * Slug
       * @description URL slug for the form
       * @default null
       */
      slug: string | null;
  } | null;
  /**
   * Template Id
   * @description Template id for the form
   */
  template_id?: string;
  /**
   * Type Id
   * @description Type id for the form
   */
  type_id?: string;
};

/**
 * Type of CABINPANDA's CABINPANDA_CREATE_FORM tool output.
 */
type CABINPANDA_CREATE_FORM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the form was created (ISO 8601 format)
       */
      created_at: string;
      /**
       * Fields
       * @description Definition of fields configured in the form
       */
      fields: {
          /**
           * Key
           * @description Unique identifier for the form field, used as the submission key
           */
          key: string;
          /**
           * Label
           * @description Display label for the form field
           */
          label: string;
          /**
           * Options
           * @description List of selectable options for select, checkbox, or radio types
           * @default null
           */
          options: string[] | null;
          /**
           * Required
           * @description Whether this field must be filled before submission
           */
          required: boolean;
          /**
           * Type
           * @description Input type of the form field
           * @enum {string}
           */
          type: "text" | "email" | "number" | "textarea" | "select" | "checkbox" | "radio" | "date";
      }[];
      /**
       * Id
       * @description Unique identifier of the created form
       */
      id: string;
      /**
       * Name
       * @description Name of the created form
       */
      name: string;
      /**
       * Settings
       * @description Effective settings for the form
       */
      settings: {
          /**
           * Description
           * @description Optional description or subtitle for the form
           * @default null
           */
          description: string | null;
          /**
           * Redirect Url
           * @description URL to redirect to after successful submission
           * @default null
           */
          redirect_url: string | null;
          /**
           * Slug
           * @description URL slug for the form
           * @default null
           */
          slug: string | null;
      };
      /**
       * Updated At
       * @description Timestamp when the form was last updated (ISO 8601 format)
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
 * Type of CABINPANDA's CABINPANDA_DELETE_FORM tool input.
 */
type CABINPANDA_DELETE_FORM_INPUT = {
  /**
   * Form Id
   * @description The unique identifier of the form to delete.
   */
  form_id?: string;
};

/**
 * Type of CABINPANDA's CABINPANDA_DELETE_FORM tool output.
 */
type CABINPANDA_DELETE_FORM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description True if the form was successfully deleted (HTTP status <300)
       */
      deleted: boolean;
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
 * Type of CABINPANDA's CABINPANDA_DELETE_INTEGRATION tool input.
 */
type CABINPANDA_DELETE_INTEGRATION_INPUT = {
  /**
   * Integration Id
   * @description The unique identifier of the integration to delete.
   */
  integration_id?: string;
};

/**
 * Type of CABINPANDA's CABINPANDA_DELETE_INTEGRATION tool output.
 */
type CABINPANDA_DELETE_INTEGRATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Additional message regarding the deletion result.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the integration was deleted successfully.
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
 * Type of CABINPANDA's CABINPANDA_GET_FORM_DETAILS tool input.
 */
type CABINPANDA_GET_FORM_DETAILS_INPUT = {
  /**
   * Form Id
   * @description The unique identifier of the form to retrieve details for
   */
  form_id?: string;
};

/**
 * Type of CABINPANDA's CABINPANDA_GET_FORM_DETAILS tool output.
 */
type CABINPANDA_GET_FORM_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when form was created
       */
      created_at: string;
      /**
       * Description
       * @description Optional description of the form
       * @default null
       */
      description: string | null;
      /**
       * Fields
       * @description List of fields defined in the form
       */
      fields: {
          /**
           * Id
           * @description Unique identifier of the field
           */
          id: string;
          /**
           * Key
           * @description Machine-readable key/name of the field
           */
          key: string;
          /**
           * Label
           * @description Human-readable label of the field
           */
          label: string;
          /**
           * Options
           * @description List of options for select or radio fields
           * @default null
           */
          options: string[] | null;
          /**
           * Required
           * @description Whether the field is mandatory
           */
          required: boolean;
          /**
           * Type
           * @description Data type of the field (e.g., text, select, checkbox)
           */
          type: string;
      }[];
      /**
       * Id
       * @description Unique identifier of the form
       */
      id: string;
      /**
       * Name
       * @description Name/title of the form
       */
      name: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when form was last updated
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
 * Type of CABINPANDA's CABINPANDA_GET_INTEGRATION_DETAILS tool input.
 */
type CABINPANDA_GET_INTEGRATION_DETAILS_INPUT = {
  /**
   * Integration Id
   * @description The unique identifier of the integration to retrieve.
   */
  integration_id?: string;
};

/**
 * Type of CABINPANDA's CABINPANDA_GET_INTEGRATION_DETAILS tool output.
 */
type CABINPANDA_GET_INTEGRATION_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Config
       * @description Provider-specific configuration settings for the integration.
       */
      config: {
          [key: string]: string | number | boolean | (string | number | boolean)[] | {
              [key: string]: string | number | boolean;
          };
      };
      /**
       * Created At
       * @description Timestamp when the integration was created (ISO 8601 format).
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the integration.
       */
      id: string;
      /**
       * Name
       * @description Name of the integration.
       */
      name: string;
      /**
       * Status
       * @description Current status of the integration ('active' or 'inactive').
       */
      status: string;
      /**
       * Type
       * @description Type of the integration (e.g., 'slack', 'trello').
       */
      type: string;
      /**
       * Updated At
       * @description Timestamp when the integration was last updated (ISO 8601 format).
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
 * Type of CABINPANDA's CABINPANDA_GET_PROFILE tool input.
 */
type CABINPANDA_GET_PROFILE_INPUT = object;

/**
 * Type of CABINPANDA's CABINPANDA_GET_PROFILE tool output.
 */
type CABINPANDA_GET_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the user was created (ISO 8601 format)
       * @default null
       */
      created_at: string | null;
      /**
       * Email
       * @description User's email address
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description Unique identifier for the user
       * @default null
       */
      id: string | null;
      /**
       * Name
       * @description User's full name
       * @default null
       */
      name: string | null;
      /**
       * Role
       * @description User's role within the system
       * @default null
       */
      role: string | null;
      /**
       * Updated At
       * @description Timestamp when the user was last updated (ISO 8601 format)
       * @default null
       */
      updated_at: string | null;
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
 * Type of CABINPANDA's CABINPANDA_LIST_FORMS tool input.
 */
type CABINPANDA_LIST_FORMS_INPUT = object;

/**
 * Type of CABINPANDA's CABINPANDA_LIST_FORMS tool output.
 */
type CABINPANDA_LIST_FORMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Forms
       * @description List of forms associated with the account
       */
      forms: {
          /**
           * Created At
           * @description Timestamp when the form was created (ISO 8601 format)
           * @default null
           */
          created_at: string | null;
          /**
           * Description
           * @description Description of the form
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier for the form
           */
          id: string;
          /**
           * Is Active
           * @description Indicates whether the form is active
           * @default null
           */
          is_active: boolean | null;
          /**
           * Name
           * @description Name or title of the form
           * @default null
           */
          name: string | null;
          /**
           * Updated At
           * @description Timestamp when the form was last updated (ISO 8601 format)
           * @default null
           */
          updated_at: string | null;
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
 * Type of CABINPANDA's CABINPANDA_LIST_INTEGRATIONS tool input.
 */
type CABINPANDA_LIST_INTEGRATIONS_INPUT = object;

/**
 * Type of CABINPANDA's CABINPANDA_LIST_INTEGRATIONS tool output.
 */
type CABINPANDA_LIST_INTEGRATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Integrations
       * @description List of integrations associated with the account
       */
      integrations: {
          /**
           * Config
           * @description Provider-specific configuration for this integration
           */
          config: {
              [key: string]: string | number | boolean | (string | number | boolean)[] | {
                  [key: string]: string | number | boolean;
              };
          };
          /**
           * Created At
           * @description Timestamp when the integration was created (ISO 8601 format)
           * @default null
           */
          created_at: string | null;
          /**
           * Enabled
           * @description Whether this integration is currently active
           */
          enabled: boolean;
          /**
           * Id
           * @description Unique identifier for the integration
           */
          id: string;
          /**
           * Name
           * @description Human-readable name of the integration
           */
          name: string;
          /**
           * Type
           * @description Integration type or category (e.g., 'slack', 'gmail')
           */
          type: string;
          /**
           * Updated At
           * @description Timestamp when the integration was last updated (ISO 8601 format)
           * @default null
           */
          updated_at: string | null;
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
 * Type of CABINPANDA's CABINPANDA_LIST_SUBMISSIONS tool input.
 */
type CABINPANDA_LIST_SUBMISSIONS_INPUT = {
  /**
   * Form Id
   * @description Unique identifier of the form to list submissions for (path parameter)
   */
  form_id?: string;
};

/**
 * Type of CABINPANDA's CABINPANDA_LIST_SUBMISSIONS tool output.
 */
type CABINPANDA_LIST_SUBMISSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Submissions
       * @description List of submissions for the specified form
       */
      submissions: {
          /**
           * Created At
           * @description Timestamp when the submission was created (ISO 8601 format)
           */
          created_at: string;
          /**
           * Data
           * @description Key-value pairs representing the submitted form data
           */
          data: {
              [key: string]: string | number | boolean | (string | number | boolean)[] | {
                  [key: string]: string | number | boolean;
              };
          };
          /**
           * Form Id
           * @description Identifier of the associated form
           */
          form_id: string;
          /**
           * Id
           * @description Unique identifier of the submission
           */
          id: string;
          /**
           * Updated At
           * @description Timestamp when the submission was last updated (ISO 8601 format)
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
 * Type of CABINPANDA's CABINPANDA_LIST_USERS tool input.
 */
type CABINPANDA_LIST_USERS_INPUT = object;

/**
 * Type of CABINPANDA's CABINPANDA_LIST_USERS tool output.
 */
type CABINPANDA_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Users
       * @description List of users associated with the account
       */
      users: {
          /**
           * Created At
           * @description Timestamp when the user was created (ISO 8601 format)
           * @default null
           */
          created_at: string | null;
          /**
           * Email
           * @description User's email address
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique identifier for the user
           */
          id: string;
          /**
           * Name
           * @description User's full name
           * @default null
           */
          name: string | null;
          /**
           * Role
           * @description User's role within the system
           * @default null
           */
          role: string | null;
          /**
           * Updated At
           * @description Timestamp when the user was last updated (ISO 8601 format)
           * @default null
           */
          updated_at: string | null;
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
 * Type map of all available tool input types for toolkit "CABINPANDA".
 */
export type CABINPANDA_TOOL_INPUTS = {
  CREATE_FORM: CABINPANDA_CREATE_FORM_INPUT
  DELETE_FORM: CABINPANDA_DELETE_FORM_INPUT
  DELETE_INTEGRATION: CABINPANDA_DELETE_INTEGRATION_INPUT
  GET_FORM_DETAILS: CABINPANDA_GET_FORM_DETAILS_INPUT
  GET_INTEGRATION_DETAILS: CABINPANDA_GET_INTEGRATION_DETAILS_INPUT
  GET_PROFILE: CABINPANDA_GET_PROFILE_INPUT
  LIST_FORMS: CABINPANDA_LIST_FORMS_INPUT
  LIST_INTEGRATIONS: CABINPANDA_LIST_INTEGRATIONS_INPUT
  LIST_SUBMISSIONS: CABINPANDA_LIST_SUBMISSIONS_INPUT
  LIST_USERS: CABINPANDA_LIST_USERS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CABINPANDA".
 */
export type CABINPANDA_TOOL_OUTPUTS = {
  CREATE_FORM: CABINPANDA_CREATE_FORM_OUTPUT
  DELETE_FORM: CABINPANDA_DELETE_FORM_OUTPUT
  DELETE_INTEGRATION: CABINPANDA_DELETE_INTEGRATION_OUTPUT
  GET_FORM_DETAILS: CABINPANDA_GET_FORM_DETAILS_OUTPUT
  GET_INTEGRATION_DETAILS: CABINPANDA_GET_INTEGRATION_DETAILS_OUTPUT
  GET_PROFILE: CABINPANDA_GET_PROFILE_OUTPUT
  LIST_FORMS: CABINPANDA_LIST_FORMS_OUTPUT
  LIST_INTEGRATIONS: CABINPANDA_LIST_INTEGRATIONS_OUTPUT
  LIST_SUBMISSIONS: CABINPANDA_LIST_SUBMISSIONS_OUTPUT
  LIST_USERS: CABINPANDA_LIST_USERS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CABINPANDA toolkit.
 */
export const CABINPANDA = {
  slug: "cabinpanda",
  tools: {
    /**
     * Tool to create a new form with specified fields and settings. use before collecting submissions to define form structure.
     */
    CREATE_FORM: "CABINPANDA_CREATE_FORM",
    /**
     * Tool to delete a specific form by its id. use after confirming the target form exists and is safe to remove.
     */
    DELETE_FORM: "CABINPANDA_DELETE_FORM",
    /**
     * Tool to delete a specific integration by its id. use when you need to remove or disable an existing integration (e.g., webhook) after confirming the integration id.
     */
    DELETE_INTEGRATION: "CABINPANDA_DELETE_INTEGRATION",
    /**
     * Tool to retrieve details of a specific form by its id. use when you need form metadata (fields, labels, timestamps) before processing or submitting data.
     */
    GET_FORM_DETAILS: "CABINPANDA_GET_FORM_DETAILS",
    /**
     * Tool to retrieve details of a specific integration by its id. use when you need to inspect integration settings or status after obtaining its id.
     */
    GET_INTEGRATION_DETAILS: "CABINPANDA_GET_INTEGRATION_DETAILS",
    /**
     * Tool to retrieve the authenticated user's profile information. use after obtaining valid api credentials to access user details.
     */
    GET_PROFILE: "CABINPANDA_GET_PROFILE",
    /**
     * Tool to retrieve a list of all forms associated with the account. use when you need to fetch form details for management or analysis.
     */
    LIST_FORMS: "CABINPANDA_LIST_FORMS",
    /**
     * Tool to retrieve a list of all integrations for the account. use when you need to inspect available or active integrations before managing them.
     */
    LIST_INTEGRATIONS: "CABINPANDA_LIST_INTEGRATIONS",
    /**
     * Tool to retrieve a list of all submissions for a specific form. use after obtaining the form id to review its submissions.
     */
    LIST_SUBMISSIONS: "CABINPANDA_LIST_SUBMISSIONS",
    /**
     * Tool to retrieve a list of all users associated with the account. use when you need to manage or audit your team members after confirming authentication.
     */
    LIST_USERS: "CABINPANDA_LIST_USERS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CABINPANDA".
 */
export type CABINPANDA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CABINPANDA".
 */
export type CABINPANDA_TRIGGER_EVENTS = {}
