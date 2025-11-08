// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SENDLANE's SENDLANE_GET_CUSTOM_FIELDS tool input.
 */
type SENDLANE_GET_CUSTOM_FIELDS_INPUT = {
  /**
   * Page
   * @description Page number for pagination (default 1)
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page (default 30)
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of SENDLANE's SENDLANE_GET_CUSTOM_FIELDS tool output.
 */
type SENDLANE_GET_CUSTOM_FIELDS_OUTPUT = {
  /**
   * Data
   * @description List of custom field objects
   */
  data?: {
      /**
       * Created At
       * @description Creation datetime in ISO 8601 format
       */
      created_at: string;
      /**
       * Field Type
       * @description Type of the custom field
       */
      field_type: string;
      /**
       * Id
       * @description Custom field ID
       */
      id: number;
      /**
       * Name
       * @description Name of the custom field
       */
      name: string;
      /**
       * Tag
       * @description Tag used for the custom field
       */
      tag: string;
      /**
       * Updated At
       * @description Last update datetime in ISO 8601 format
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
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Per Page
       * @description Number of results per page
       */
      per_page: number;
      /**
       * Total
       * @description Total number of custom fields
       */
      total: number;
  };
  /**
   * Success
   * @description Whether the request was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDLANE's SENDLANE_POST_LIST tool input.
 */
type SENDLANE_POST_LIST_INPUT = {
  /**
   * Double Optin
   * @description Whether to require double opt-in. Defaults to false.
   * @default false
   */
  double_optin: boolean;
  /**
   * Name
   * @description The name of the list.
   */
  name?: string;
  /**
   * Sender Address
   * @description Physical sender street address.
   */
  sender_address?: string;
  /**
   * Sender City
   * @description Sender city.
   */
  sender_city?: string;
  /**
   * Sender Country
   * @description Sender country.
   */
  sender_country?: string;
  /**
   * Sender Email
   * @description Email address shown in the From field.
   */
  sender_email?: string;
  /**
   * Sender Name
   * @description Name displayed as the email sender for this list.
   */
  sender_name?: string;
  /**
   * Sender Reminder
   * @description Brief reminder why the contact is on this list, displayed in email footers.
   */
  sender_reminder?: string;
  /**
   * Sender State
   * @description Sender state or region.
   */
  sender_state?: string;
  /**
   * Sender Zip
   * @description Sender postal code.
   */
  sender_zip?: string;
};

/**
 * Type of SENDLANE's SENDLANE_POST_LIST tool output.
 */
type SENDLANE_POST_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * List
       * @description The newly created list object.
       */
      list: {
          /**
           * Created At
           * @description ISO timestamp of creation.
           */
          created_at: string;
          /** Double Optin */
          double_optin: boolean;
          /**
           * Id
           * @description Unique identifier of the new list.
           */
          id: string;
          /**
           * Name
           * @description Name of the list.
           */
          name: string;
          /** Sender Address */
          sender_address: string;
          /** Sender City */
          sender_city: string;
          /** Sender Country */
          sender_country: string;
          /** Sender Email */
          sender_email: string;
          /** Sender Name */
          sender_name: string;
          /** Sender Reminder */
          sender_reminder: string;
          /** Sender State */
          sender_state: string;
          /** Sender Zip */
          sender_zip: string;
          /**
           * Updated At
           * @description ISO timestamp of last update.
           */
          updated_at: string;
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
 * Type map of all available tool input types for toolkit "SENDLANE".
 */
export type SENDLANE_TOOL_INPUTS = {
  GET_CUSTOM_FIELDS: SENDLANE_GET_CUSTOM_FIELDS_INPUT
  POST_LIST: SENDLANE_POST_LIST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SENDLANE".
 */
export type SENDLANE_TOOL_OUTPUTS = {
  GET_CUSTOM_FIELDS: SENDLANE_GET_CUSTOM_FIELDS_OUTPUT
  POST_LIST: SENDLANE_POST_LIST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SENDLANE toolkit.
 */
export const SENDLANE = {
  slug: "sendlane",
  tools: {
    /**
     * Tool to retrieve a list of custom fields. use when you need to list all custom fields with optional pagination.
     */
    GET_CUSTOM_FIELDS: "SENDLANE_GET_CUSTOM_FIELDS",
    /**
     * Tool to create a new list. use when you need to add a brand-new mailing list before sending campaigns.
     */
    POST_LIST: "SENDLANE_POST_LIST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SENDLANE".
 */
export type SENDLANE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SENDLANE".
 */
export type SENDLANE_TRIGGER_EVENTS = {}
