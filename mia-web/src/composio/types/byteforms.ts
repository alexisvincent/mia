// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BYTEFORMS's BYTEFORMS_CREATE_FORM tool input.
 */
type BYTEFORMS_CREATE_FORM_INPUT = {
  /**
   * Body
   * @description Array of form components defining the form body
   */
  body?: {
      /**
       * Component
       * @description Component type, e.g., 'input'
       */
      component: string;
      /**
       * Id
       * @description Unique identifier for the component
       */
      id: string;
      /**
       * Include Country Code
       * @description Include country code for tel input
       * @default null
       */
      includeCountryCode: boolean | null;
      /**
       * Index
       * @description Index order on the page
       */
      index: number;
      /**
       * Label
       * @description Label for the field
       */
      label: string;
      /**
       * Max Length
       * @description Maximum length (for text)
       * @default null
       */
      maxLength: number | null;
      /**
       * Min Length
       * @description Minimum length (for text)
       * @default null
       */
      minLength: number | null;
      /**
       * Page
       * @description Page number (1-indexed)
       */
      page: number;
      /**
       * Placeholder
       * @description Placeholder text
       * @default null
       */
      placeholder: string | null;
      /**
       * Required
       * @description Whether field is required
       * @default null
       */
      required: boolean | null;
      /**
       * Type
       * @description Subtype, e.g., 'text', 'email', 'tel'
       */
      type: string;
  }[];
  /**
   * Name
   * @description Name of the form
   */
  name?: string;
  /**
   * FormOptions
   * @description Optional settings for form behavior
   * @default null
   */
  options: {
      /**
       * Custom Code
       * @description Custom HTML/CSS/JS
       * @default
       */
      custom_code: string;
      /**
       * Draft Submissions
       * @description Allow draft submissions
       * @default true
       */
      draft_submissions: boolean;
      /**
       * Email Notifications
       * @description Send email notifications
       * @default false
       */
      email_notifications: boolean;
      /**
       * Form Width
       * @description Form width setting
       * @default centered
       * @enum {string}
       */
      form_width: "centered" | "full-width";
      /**
       * Max Submissions
       * @description Maximum number of submissions before closure
       * @default 0
       */
      max_submissions: number;
      /**
       * One Submission Per Email
       * @description Allow only one submission per email
       * @default false
       */
      one_submission_per_email: boolean;
      /**
       * Page Behaviour
       * @description Page behaviour
       * @default scroll
       * @enum {string}
       */
      page_behaviour: "scroll" | "paginate";
      /**
       * Password
       * @description Password to access the form
       * @default
       */
      password: string;
      /**
       * Redirect Url
       * @description Redirect URL after submission
       * @default
       */
      redirect_url: string;
      /**
       * Remove Branding
       * @description Remove ByteForms branding
       * @default false
       */
      remove_branding: boolean;
      /**
       * Stop Submissions After
       * Format: date-time
       * @description ISO8601 datetime after which submissions close
       * @default null
       */
      stop_submissions_after: unknown;
      /**
       * Submit Button Text
       * @description Text on the submit button
       * @default Submit
       */
      submit_button_text: string;
      /**
       * Thank You Message
       * @description Message shown after submission
       * @default Thank you! Your response has been submitted.
       */
      thank_you_message: string;
      /**
       * Theme
       * @description Form theme
       * @default light
       * @enum {string}
       */
      theme: "light" | "dark";
      /**
       * Visibility
       * @description Form visibility
       * @default public
       * @enum {string}
       */
      visibility: "public" | "private";
  } | null;
};

/**
 * Type of BYTEFORMS's BYTEFORMS_CREATE_FORM tool output.
 */
type BYTEFORMS_CREATE_FORM_OUTPUT = {
  /**
   * Data
   * @description Created form object
   */
  data?: {
      /**
       * Body
       * @description Form components
       */
      body: {
          /**
           * Component
           * @description Component type, e.g., 'input'
           */
          component: string;
          /**
           * Id
           * @description Unique identifier for the component
           */
          id: string;
          /**
           * Include Country Code
           * @description Include country code for tel input
           * @default null
           */
          includeCountryCode: boolean | null;
          /**
           * Index
           * @description Index order on the page
           */
          index: number;
          /**
           * Label
           * @description Label for the field
           */
          label: string;
          /**
           * Max Length
           * @description Maximum length (for text)
           * @default null
           */
          maxLength: number | null;
          /**
           * Min Length
           * @description Minimum length (for text)
           * @default null
           */
          minLength: number | null;
          /**
           * Page
           * @description Page number (1-indexed)
           */
          page: number;
          /**
           * Placeholder
           * @description Placeholder text
           * @default null
           */
          placeholder: string | null;
          /**
           * Required
           * @description Whether field is required
           * @default null
           */
          required: boolean | null;
          /**
           * Type
           * @description Subtype, e.g., 'text', 'email', 'tel'
           */
          type: string;
      }[];
      /**
       * Created At
       * Format: date-time
       * @description Creation timestamp
       */
      created_at: unknown;
      /**
       * Deleted At
       * Format: date-time
       * @description Deletion timestamp, if deleted
       * @default null
       */
      deleted_at: unknown;
      /**
       * Id
       * @description Internal form ID
       */
      id: number;
      /**
       * Is Custom
       * @description Whether form is custom
       */
      is_custom: boolean;
      /**
       * Name
       * @description Name of the form
       */
      name: string;
      /**
       * Options
       * @description Form settings
       */
      options: {
          /**
           * Custom Code
           * @description Custom HTML/CSS/JS
           * @default
           */
          custom_code: string;
          /**
           * Draft Submissions
           * @description Allow draft submissions
           * @default true
           */
          draft_submissions: boolean;
          /**
           * Email Notifications
           * @description Send email notifications
           * @default false
           */
          email_notifications: boolean;
          /**
           * Form Width
           * @description Form width setting
           * @default centered
           * @enum {string}
           */
          form_width: "centered" | "full-width";
          /**
           * Max Submissions
           * @description Maximum number of submissions before closure
           * @default 0
           */
          max_submissions: number;
          /**
           * One Submission Per Email
           * @description Allow only one submission per email
           * @default false
           */
          one_submission_per_email: boolean;
          /**
           * Page Behaviour
           * @description Page behaviour
           * @default scroll
           * @enum {string}
           */
          page_behaviour: "scroll" | "paginate";
          /**
           * Password
           * @description Password to access the form
           * @default
           */
          password: string;
          /**
           * Redirect Url
           * @description Redirect URL after submission
           * @default
           */
          redirect_url: string;
          /**
           * Remove Branding
           * @description Remove ByteForms branding
           * @default false
           */
          remove_branding: boolean;
          /**
           * Stop Submissions After
           * Format: date-time
           * @description ISO8601 datetime after which submissions close
           * @default null
           */
          stop_submissions_after: unknown;
          /**
           * Submit Button Text
           * @description Text on the submit button
           * @default Submit
           */
          submit_button_text: string;
          /**
           * Thank You Message
           * @description Message shown after submission
           * @default Thank you! Your response has been submitted.
           */
          thank_you_message: string;
          /**
           * Theme
           * @description Form theme
           * @default light
           * @enum {string}
           */
          theme: "light" | "dark";
          /**
           * Visibility
           * @description Form visibility
           * @default public
           * @enum {string}
           */
          visibility: "public" | "private";
      };
      /**
       * Pages
       * @description Pages, if defined
       * @default null
       */
      pages: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Public Id
       * @description Public-facing form ID
       */
      public_id: string;
      /**
       * Updated At
       * Format: date-time
       * @description Last update timestamp
       */
      updated_at: unknown;
      /**
       * User Id
       * @description Owner user ID
       */
      user_id: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description API response status
   * @enum {string}
   */
  status?: "success" | "fail";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BYTEFORMS's BYTEFORMS_DELETE_FORM tool input.
 */
type BYTEFORMS_DELETE_FORM_INPUT = {
  /**
   * Form Id
   * @description The unique identifier of the form to delete
   */
  form_id?: string;
};

/**
 * Type of BYTEFORMS's BYTEFORMS_DELETE_FORM tool output.
 */
type BYTEFORMS_DELETE_FORM_OUTPUT = {
  /**
   * Data
   * @description Null payload for delete operation
   */
  data?: null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Response status
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BYTEFORMS's BYTEFORMS_GET_ALL_FORMS tool input.
 */
type BYTEFORMS_GET_ALL_FORMS_INPUT = object;

/**
 * Type of BYTEFORMS's BYTEFORMS_GET_ALL_FORMS tool output.
 */
type BYTEFORMS_GET_ALL_FORMS_OUTPUT = {
  /**
   * Data
   * @description List of forms
   */
  data?: {
      /**
       * Body
       * @description List of elements in the form body
       */
      body: {
          /**
           * Component
           * @description Type of form element, e.g., input, select
           */
          component: string;
          /**
           * Id
           * @description Unique identifier for the element
           */
          id: string;
          /**
           * Include Country Code
           * @description Whether to include country code for tel inputs
           * @default null
           */
          includeCountryCode: boolean | null;
          /**
           * Index
           * @description Position index of the element on the page
           */
          index: number;
          /**
           * Label
           * @description Label displayed for the element
           */
          label: string;
          /**
           * Max Length
           * @description Maximum input length
           * @default null
           */
          maxLength: number | null;
          /**
           * Min Length
           * @description Minimum input length
           * @default null
           */
          minLength: number | null;
          /**
           * Page
           * @description Page number where the element appears
           */
          page: number;
          /**
           * Placeholder
           * @description Placeholder text for the input
           * @default null
           */
          placeholder: string | null;
          /**
           * Required
           * @description If true, the element is required
           * @default null
           */
          required: boolean | null;
          /**
           * Type
           * @description Input type for the element, e.g., text, email
           */
          type: string;
      }[];
      /**
       * Created At
       * @description Creation timestamp (ISO8601)
       */
      created_at: string;
      /**
       * Deleted At
       * @description Deletion timestamp if soft-deleted
       * @default null
       */
      deleted_at: string | null;
      /**
       * Id
       * @description Internal form identifier
       */
      id: number;
      /**
       * Is Custom
       * @description If true, form is custom
       */
      is_custom: boolean;
      /**
       * Name
       * @description Name of the form
       */
      name: string;
      /**
       * Options
       * @description Configuration options for the form
       */
      options: {
          /**
           * Custom Code
           * @description Custom code injected into the form
           */
          custom_code: string;
          /**
           * Draft Submissions
           * @description Allow saving draft submissions
           */
          draft_submissions: boolean;
          /**
           * Email Notifications
           * @description Send email notifications on submissions
           */
          email_notifications: boolean;
          /**
           * Form Width
           * @description Width layout of the form, e.g., centered
           */
          form_width: string;
          /**
           * Max Submissions
           * @description Maximum allowed submissions (0 for unlimited)
           */
          max_submissions: number;
          /**
           * One Submission Per Email
           * @description Limit one submission per unique email
           */
          one_submission_per_email: boolean;
          /**
           * Page Behaviour
           * @description Behaviour between pages, e.g., scroll
           */
          page_behaviour: string;
          /**
           * Password
           * @description Password required to access the form (empty if none)
           */
          password: string;
          /**
           * Redirect Url
           * @description URL to redirect to after submission
           */
          redirect_url: string;
          /**
           * Remove Branding
           * @description Remove ByteForms branding
           */
          remove_branding: boolean;
          /**
           * Stop Submissions After
           * @description Date after which submissions stop (ISO8601)
           * @default null
           */
          stop_submissions_after: string | null;
          /**
           * Submit Button Text
           * @description Text displayed on the submit button
           */
          submit_button_text: string;
          /**
           * Thank You Message
           * @description Message shown after form submission
           */
          thank_you_message: string;
          /**
           * Theme
           * @description Visual theme of the form
           */
          theme: string;
          /**
           * Visibility
           * @description Form visibility setting, e.g., public
           */
          visibility: string;
      };
      /**
       * Pages
       * @description Number of pages or null if single page
       * @default null
       */
      pages: number | null;
      /**
       * Public Id
       * @description Public form identifier
       */
      public_id: string;
      /**
       * Updated At
       * @description Last update timestamp (ISO8601)
       */
      updated_at: string;
      /**
       * User Id
       * @description Identifier of the form owner
       */
      user_id: number;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Response status
   * @enum {string}
   */
  status?: "success" | "fail";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BYTEFORMS's BYTEFORMS_GET_FORM_BY_ID tool input.
 */
type BYTEFORMS_GET_FORM_BY_ID_INPUT = {
  /**
   * Form Id
   * @description The unique identifier of the form to retrieve
   */
  form_id?: string;
};

/**
 * Type of BYTEFORMS's BYTEFORMS_GET_FORM_BY_ID tool output.
 */
type BYTEFORMS_GET_FORM_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Requested form item
   */
  data?: {
      /**
       * Body
       * @description Array of body components
       */
      body: {
          /**
           * Component
           * @description Component type in the form body (e.g., 'input')
           */
          component: string;
          /**
           * Id
           * @description Unique identifier of the field
           */
          id: string;
          /**
           * Include Country Code
           * @description Whether country code is included for phone inputs
           * @default null
           */
          includeCountryCode: boolean | null;
          /**
           * Index
           * @description Index of the field on the page
           */
          index: number;
          /**
           * Label
           * @description Label of the field
           */
          label: string;
          /**
           * Max Length
           * @description Maximum length of input
           * @default null
           */
          maxLength: number | null;
          /**
           * Min Length
           * @description Minimum length of input
           * @default null
           */
          minLength: number | null;
          /**
           * Page
           * @description Page number where the field appears
           */
          page: number;
          /**
           * Placeholder
           * @description Placeholder text for the field
           * @default null
           */
          placeholder: string | null;
          /**
           * Required
           * @description Whether the field is required
           * @default null
           */
          required: boolean | null;
          /**
           * Type
           * @description Input type (e.g., 'text', 'email')
           */
          type: string;
      }[];
      /**
       * Created At
       * @description Creation timestamp in ISO format
       */
      created_at: string;
      /**
       * Deleted At
       * @description Deletion timestamp, if deleted
       * @default null
       */
      deleted_at: string | null;
      /**
       * Id
       * @description Internal ID of the form
       */
      id: number;
      /**
       * Is Custom
       * @description Whether the form is custom
       */
      is_custom: boolean;
      /**
       * Name
       * @description Name of the form
       */
      name: string;
      /**
       * Options
       * @description Form configuration options
       */
      options: {
          /**
           * Custom Code
           * @description Custom code injected into the form
           */
          custom_code: string;
          /**
           * Draft Submissions
           * @description Whether draft submissions are allowed
           */
          draft_submissions: boolean;
          /**
           * Email Notifications
           * @description Whether email notifications are enabled
           */
          email_notifications: boolean;
          /**
           * Form Width
           * @description Width of the form (e.g., 'centered')
           */
          form_width: string;
          /**
           * Max Submissions
           * @description Maximum number of submissions allowed
           */
          max_submissions: number;
          /**
           * One Submission Per Email
           * @description Whether only one submission per email is allowed
           */
          one_submission_per_email: boolean;
          /**
           * Page Behaviour
           * @description Page behaviour (e.g., 'scroll', 'pagination')
           */
          page_behaviour: string;
          /**
           * Password
           * @description Password to access the form, if any
           */
          password: string;
          /**
           * Redirect Url
           * @description URL to redirect after submission
           */
          redirect_url: string;
          /**
           * Remove Branding
           * @description Whether branding is removed
           */
          remove_branding: boolean;
          /**
           * Stop Submissions After
           * @description ISO datetime after which submissions are stopped
           * @default null
           */
          stop_submissions_after: string | null;
          /**
           * Submit Button Text
           * @description Text on the submit button
           */
          submit_button_text: string;
          /**
           * Thank You Message
           * @description Message displayed after submission
           */
          thank_you_message: string;
          /**
           * Theme
           * @description Theme of the form (e.g., 'light' or 'dark')
           */
          theme: string;
          /**
           * Visibility
           * @description Visibility of the form (e.g., 'public', 'private')
           */
          visibility: string;
      };
      /**
       * Pages
       * @description Pages in the form, if defined
       * @default null
       */
      pages: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Public Id
       * @description Public-facing unique identifier of the form
       */
      public_id: string;
      /**
       * Updated At
       * @description Last update timestamp in ISO format
       */
      updated_at: string;
      /**
       * User Id
       * @description ID of the user who created the form
       */
      user_id: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Response status
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BYTEFORMS's BYTEFORMS_GET_FORM_RESPONSES tool input.
 */
type BYTEFORMS_GET_FORM_RESPONSES_INPUT = {
  /**
   * After
   * @description Cursor for pagination — returns items after this cursor
   * @default null
   */
  after: string | null;
  /**
   * Before
   * @description Cursor for pagination — returns items before this cursor
   * @default null
   */
  before: string | null;
  /**
   * Form Id
   * @description ID of the form to retrieve responses for
   */
  formId?: string;
  /**
   * Limit
   * @description Maximum number of responses to return, must be ≥1
   * @default null
   */
  limit: number | null;
  /**
   * Order
   * @description Sort order for responses by creation time
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Query
   * @description Filter responses containing this string
   * @default null
   */
  query: string | null;
};

/**
 * Type of BYTEFORMS's BYTEFORMS_GET_FORM_RESPONSES tool output.
 */
type BYTEFORMS_GET_FORM_RESPONSES_OUTPUT = {
  /**
   * Count
   * @description Total number of matching responses
   */
  count?: number;
  /**
   * Cursor
   * @description Pagination cursors for next/previous pages
   */
  cursor?: {
      /**
       * After
       * @description Cursor after the current page
       * @default null
       */
      after: string | null;
      /**
       * Before
       * @description Cursor before the current page
       * @default null
       */
      before: string | null;
  };
  /**
   * Data
   * @description List of fetched response items
   */
  data?: {
      /**
       * Created At
       * @description ISO timestamp when submitted
       */
      created_at: string;
      /**
       * Deleted At
       * @description ISO timestamp when deleted, if applicable
       * @default null
       */
      deleted_at: string | null;
      /**
       * Form Id
       * @description Numeric ID of the parent form
       */
      form_id: number;
      /**
       * Id
       * @description Unique ID of the form response
       */
      id: number;
      /**
       * Options
       * @description Metadata about the submission
       */
      options: {
          /**
           * Ip
           * @description IP address of the respondent
           */
          ip: string;
      };
      /**
       * Response
       * @description Key/value map of field IDs to submitted values
       */
      response: {
          [key: string]: unknown;
      };
      /**
       * Updated At
       * @description ISO timestamp when last updated
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
   * Status
   * @description API call status, usually 'success'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "BYTEFORMS".
 */
export type BYTEFORMS_TOOL_INPUTS = {
  CREATE_FORM: BYTEFORMS_CREATE_FORM_INPUT
  DELETE_FORM: BYTEFORMS_DELETE_FORM_INPUT
  GET_ALL_FORMS: BYTEFORMS_GET_ALL_FORMS_INPUT
  GET_FORM_BY_ID: BYTEFORMS_GET_FORM_BY_ID_INPUT
  GET_FORM_RESPONSES: BYTEFORMS_GET_FORM_RESPONSES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BYTEFORMS".
 */
export type BYTEFORMS_TOOL_OUTPUTS = {
  CREATE_FORM: BYTEFORMS_CREATE_FORM_OUTPUT
  DELETE_FORM: BYTEFORMS_DELETE_FORM_OUTPUT
  GET_ALL_FORMS: BYTEFORMS_GET_ALL_FORMS_OUTPUT
  GET_FORM_BY_ID: BYTEFORMS_GET_FORM_BY_ID_OUTPUT
  GET_FORM_RESPONSES: BYTEFORMS_GET_FORM_RESPONSES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BYTEFORMS toolkit.
 */
export const BYTEFORMS = {
  slug: "byteforms",
  tools: {
    /**
     * Tool to create a new form. use when you need to define and store a form structure.
     */
    CREATE_FORM: "BYTEFORMS_CREATE_FORM",
    /**
     * Tool to delete a form by its id. use when you need to remove an existing form permanently.
     */
    DELETE_FORM: "BYTEFORMS_DELETE_FORM",
    /**
     * Tool to fetch all forms created by the authenticated user. use after authentication to list existing forms.
     */
    GET_ALL_FORMS: "BYTEFORMS_GET_ALL_FORMS",
    /**
     * Tool to retrieve a specific form using its id. use when you need to fetch form details by providing the form's unique identifier.
     */
    GET_FORM_BY_ID: "BYTEFORMS_GET_FORM_BY_ID",
    /**
     * Tool to retrieve responses for a specific form with optional pagination and filtering. use when the form has collected submissions and you need to navigate large result sets.
     */
    GET_FORM_RESPONSES: "BYTEFORMS_GET_FORM_RESPONSES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BYTEFORMS".
 */
export type BYTEFORMS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BYTEFORMS".
 */
export type BYTEFORMS_TRIGGER_EVENTS = {}
