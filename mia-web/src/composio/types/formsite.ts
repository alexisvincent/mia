// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FORMSITE's FORMSITE_FORMSITE_GET_FORM tool input.
 */
type FORMSITE_FORMSITE_GET_FORM_INPUT = {
  /**
   * Form Dir
   * @description The form's directory identifier to get details for.
   */
  form_dir?: string;
};

/**
 * Type of FORMSITE's FORMSITE_FORMSITE_GET_FORM tool output.
 */
type FORMSITE_FORMSITE_GET_FORM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Forms
       * @description List containing the form details.
       */
      forms: {
          /**
           * Description
           * @description The form's internal description.
           * @default null
           */
          description: string | null;
          /**
           * Directory
           * @description The form's URL directory.
           * @default null
           */
          directory: string | null;
          /**
           * Name
           * @description The form's name.
           * @default null
           */
          name: string | null;
          /**
           * FormPublish
           * @description Model for form publishing information.
           * @default null
           */
          publish: {
              /**
               * Embed Code
               * @description The form's share embed code.
               * @default null
               */
              embed_code: string | null;
              /**
               * Link
               * @description The form's share link.
               * @default null
               */
              link: string | null;
          } | null;
          /**
           * State
           * @description The form's open/close state.
           * @default null
           */
          state: string | null;
          /**
           * FormStats
           * @description Model for form statistics.
           * @default null
           */
          stats: {
              /**
               * Files Size
               * @description The total size, in bytes, of any uploaded files the form is storing.
               * @default null
               */
              filesSize: number | null;
              /**
               * Results Count
               * @description The number of results the form is storing.
               * @default null
               */
              resultsCount: number | null;
          } | null;
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
 * Type of FORMSITE's FORMSITE_GET_FORM_ITEMS tool input.
 */
type FORMSITE_GET_FORM_ITEMS_INPUT = {
  /**
   * Form Dir
   * @description The form's directory/ID to retrieve items from
   */
  form_dir?: string;
  /**
   * Results Labels
   * @description Optional. Results Labels ID to apply for item labels
   * @default null
   */
  results_labels: string | null;
};

/**
 * Type of FORMSITE's FORMSITE_GET_FORM_ITEMS tool output.
 */
type FORMSITE_GET_FORM_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of form items containing their IDs, positions, and labels
       */
      items: {
          /**
           * Children
           * @description Optional. For item types composed of sub-items (Matrix and Multi Scale items)
           * @default null
           */
          children: string[] | null;
          /**
           * Id
           * @description The item's unique identifier
           */
          id: string;
          /**
           * Label
           * @description The item's question label
           */
          label: string;
          /**
           * Position
           * @description The item's sequential position in the form
           */
          position: number;
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
 * Type of FORMSITE's FORMSITE_GET_FORM_RESULTS tool input.
 */
type FORMSITE_GET_FORM_RESULTS_INPUT = {
  /**
   * Form Id
   * @description The form directory/ID to fetch results from
   */
  form_id?: string;
  /**
   * Limit
   * @description Maximum number of results to get (1-1000)
   * @default 100
   */
  limit: number;
  /**
   * Page
   * @description Page number if results exceed limit
   * @default 1
   */
  page: number;
  /**
   * Sort Direction
   * @description Sort direction for results (asc or desc)
   * @default desc
   */
  sort_direction: string;
};

/**
 * Type of FORMSITE's FORMSITE_GET_FORM_RESULTS tool output.
 */
type FORMSITE_GET_FORM_RESULTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of form results
       */
      results: {
          /**
           * Date Finish
           * @description The date the result was finished (ISO 8601 UTC format)
           * @default null
           */
          date_finish: string | null;
          /**
           * Date Start
           * @description The date the result was started (ISO 8601 UTC format)
           * @default null
           */
          date_start: string | null;
          /**
           * Date Update
           * @description The date the result was most recently modified (ISO 8601 UTC format)
           */
          date_update: string;
          /**
           * Id
           * @description The result's unique ID
           */
          id: string;
          /**
           * Items
           * @description List of form items with their values
           */
          items: {
              /**
               * Id
               * @description The item's ID
               */
              id: string;
              /**
               * Position
               * @description The item's sequential position on the form
               */
              position: number;
              /**
               * Value
               * @description The value for text item types
               * @default null
               */
              value: string | null;
              /**
               * Values
               * @description The values for multiple choice item types
               * @default null
               */
              values: {
                  [key: string]: unknown;
              }[] | null;
          }[];
          /**
           * Result Status
           * @description The status of the result
           */
          result_status: string;
          /**
           * User Browser
           * @description The user's browser
           */
          user_browser: string;
          /**
           * User Device
           * @description The user's device (Desktop, Tablet, or Mobile)
           */
          user_device: string;
          /**
           * User Ip
           * @description The user's IP address
           */
          user_ip: string;
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
 * Type of FORMSITE's FORMSITE_GET_WEBHOOKS tool input.
 */
type FORMSITE_GET_WEBHOOKS_INPUT = {
  /**
   * Form Id
   * @description The form directory/ID to fetch webhooks from
   */
  form_id?: string;
};

/**
 * Type of FORMSITE's FORMSITE_GET_WEBHOOKS tool output.
 */
type FORMSITE_GET_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Webhooks
       * @description List of webhook configurations
       */
      webhooks: {
          /**
           * Event
           * @description The event type that triggers the webhook
           */
          event: string;
          /**
           * Handshake Key
           * @description Optional handshake key for webhook security
           * @default null
           */
          handshake_key: string | null;
          /**
           * Status
           * @description Current status of the webhook
           */
          status: string;
          /**
           * Url
           * @description The URL where webhook notifications are sent
           */
          url: string;
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
 * Type of FORMSITE's FORMSITE_LIST_ALL_FORMS tool input.
 */
type FORMSITE_LIST_ALL_FORMS_INPUT = object;

/**
 * Type of FORMSITE's FORMSITE_LIST_ALL_FORMS tool output.
 */
type FORMSITE_LIST_ALL_FORMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Forms
       * @description List of forms with their details.
       */
      forms: {
          /**
           * Description
           * @description Optional. The form's description, if set on form's Settings -> General page.
           * @default null
           */
          description: string | null;
          /**
           * Directory
           * @description The form's URL directory.
           */
          directory: string;
          /**
           * Name
           * @description The form's name.
           */
          name: string;
          /**
           * Publish
           * @description Contains form's embed code and public link information.
           */
          publish: {
              /**
               * Embed Code
               * @description The form's share embed code.
               */
              embed_code: string;
              /**
               * Link
               * @description The form's share link.
               */
              link: string;
          };
          /**
           * State
           * @description The form's open/close state. If open, value is 'open'. If closed, begins with 'closed' followed by reason.
           */
          state: string;
          /**
           * Stats
           * @description Contains form's file size and results count statistics.
           */
          stats: {
              /**
               * Files Size
               * @description The total size, in bytes, of any uploaded files the form is storing.
               */
              filesSize: number;
              /**
               * Results Count
               * @description The number of results the form is storing.
               */
              resultsCount: number;
          };
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
 * Type map of all available tool input types for toolkit "FORMSITE".
 */
export type FORMSITE_TOOL_INPUTS = {
  FORMSITE_GET_FORM: FORMSITE_FORMSITE_GET_FORM_INPUT
  GET_FORM_ITEMS: FORMSITE_GET_FORM_ITEMS_INPUT
  GET_FORM_RESULTS: FORMSITE_GET_FORM_RESULTS_INPUT
  GET_WEBHOOKS: FORMSITE_GET_WEBHOOKS_INPUT
  LIST_ALL_FORMS: FORMSITE_LIST_ALL_FORMS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FORMSITE".
 */
export type FORMSITE_TOOL_OUTPUTS = {
  FORMSITE_GET_FORM: FORMSITE_FORMSITE_GET_FORM_OUTPUT
  GET_FORM_ITEMS: FORMSITE_GET_FORM_ITEMS_OUTPUT
  GET_FORM_RESULTS: FORMSITE_GET_FORM_RESULTS_OUTPUT
  GET_WEBHOOKS: FORMSITE_GET_WEBHOOKS_OUTPUT
  LIST_ALL_FORMS: FORMSITE_LIST_ALL_FORMS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FORMSITE toolkit.
 */
export const FORMSITE = {
  slug: "formsite",
  tools: {
    /**
     * This tool retrieves detailed information about a specific form in formsite. it provides comprehensive details including the form's internal description, directory identifier, name, publishing information (embed code and form link), current state (e.g., "open"), and statistics (file size and number of results).
     */
    FORMSITE_GET_FORM: "FORMSITE_FORMSITE_GET_FORM",
    /**
     * This tool retrieves all items (questions) for a specific form using the get https://{server}.formsite.com/api/v2/{user dir}/forms/{form dir}/items endpoint. it is an independent action that only requires the form directory (obtainable via formsite list all forms) to retrieve the structure and details such as item ids, question types, text, answer choices, required status, and other properties.
     */
    GET_FORM_ITEMS: "FORMSITE_GET_FORM_ITEMS",
    /**
     * This tool retrieves the latest form results from a specified formsite form. it uses the get https://{server}.formsite.com/api/v2/results/latest endpoint to fetch results independently, handling required parameters such as form id, limit, page, and sort direction without referring to external resource ids.
     */
    GET_FORM_RESULTS: "FORMSITE_GET_FORM_RESULTS",
    /**
     * This tool retrieves all webhooks configured for a specific form in formsite. it uses the get https://{server}.formsite.com/api/v2/{user dir}/forms/{form dir}/webhooks endpoint to fetch webhook configurations, including url, status, settings, and triggers.
     */
    GET_WEBHOOKS: "FORMSITE_GET_WEBHOOKS",
    /**
     * This tool retrieves a list of all forms in the user's formsite account. it provides essential information such as form id, form name, form directory, creation date, last modified date, status, access level, and other metadata. it serves as a foundational tool for further operations.
     */
    LIST_ALL_FORMS: "FORMSITE_LIST_ALL_FORMS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FORMSITE".
 */
export type FORMSITE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FORMSITE".
 */
export type FORMSITE_TRIGGER_EVENTS = {}
