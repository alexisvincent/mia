// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CAMPAYN's CAMPAYN_CREATE_CONTACT tool input.
 */
type CAMPAYN_CREATE_CONTACT_INPUT = {
  /**
   * Address
   * @description Mailing address of the contact
   * @default null
   */
  address: string | null;
  /**
   * City
   * @description City of the contact
   * @default null
   */
  city: string | null;
  /**
   * Company
   * @description Company name of the contact
   * @default null
   */
  company: string | null;
  /**
   * Country
   * @description Country of the contact
   * @default null
   */
  country: string | null;
  /**
   * Custom Fields
   * @description List of custom field objects
   * @default null
   */
  custom_fields: {
      /**
       * Field
       * @description Custom field name, e.g., 'Eye Color'
       */
      field: string;
      /**
       * Value
       * @description Value corresponding to the custom field
       */
      value: string;
  }[] | null;
  /**
   * Email
   * @description Contact's email address
   */
  email?: string;
  /**
   * Fail On Duplicate
   * @description If true, the API will return an error when a duplicate contact exists
   * @default false
   */
  failOnDuplicate: boolean | null;
  /**
   * First Name
   * @description Contact's first name
   * @default null
   */
  first_name: string | null;
  /**
   * Last Name
   * @description Contact's last name
   * @default null
   */
  last_name: string | null;
  /**
   * List Id
   * @description ID of the list to which the contact will be added
   */
  list_id?: number;
  /**
   * Phones
   * @description List of phone objects for the contact
   * @default null
   */
  phones: {
      /**
       * Type
       * @description Phone type, e.g., 'work', 'fax'
       */
      type: string;
      /**
       * Value
       * @description Phone number value, e.g., '123-123'
       */
      value: string;
  }[] | null;
  /**
   * Sites
   * @description List of website objects for the contact
   * @default null
   */
  sites: {
      /**
       * Type
       * @description Site type, e.g., 'work' or 'personal'
       */
      type: string;
      /**
       * Value
       * @description Website URL or domain, e.g., 'campayn.com'
       */
      value: string;
  }[] | null;
  /**
   * Social
   * @description List of social account objects for the contact
   * @default null
   */
  social: {
      /**
       * Protocol
       * @description Social protocol or platform, e.g., 'facebook', 'twitter'
       */
      protocol: string;
      /**
       * Type
       * @description Social account type, e.g., 'work'
       */
      type: string;
      /**
       * Value
       * @description Social account identifier, e.g., username
       */
      value: string;
  }[] | null;
  /**
   * State
   * @description State or province of the contact
   * @default null
   */
  state: string | null;
  /**
   * Title
   * @description Contact's title or position
   * @default null
   */
  title: string | null;
  /**
   * Zip
   * @description ZIP or postal code
   * @default null
   */
  zip: string | null;
};

/**
 * Type of CAMPAYN's CAMPAYN_CREATE_CONTACT tool output.
 */
type CAMPAYN_CREATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the contact was created successfully
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
 * Type of CAMPAYN's CAMPAYN_DELETE_CONTACT tool input.
 */
type CAMPAYN_DELETE_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description ID of the contact to delete
   */
  contact_id?: number;
};

/**
 * Type of CAMPAYN's CAMPAYN_DELETE_CONTACT tool output.
 */
type CAMPAYN_DELETE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the contact was deleted successfully
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
 * Type of CAMPAYN's CAMPAYN_DELETE_LIST tool input.
 */
type CAMPAYN_DELETE_LIST_INPUT = {
  /**
   * List Id
   * @description ID of the contact list to delete
   */
  list_id?: number;
};

/**
 * Type of CAMPAYN's CAMPAYN_DELETE_LIST tool output.
 */
type CAMPAYN_DELETE_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the list was deleted successfully
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
 * Type of CAMPAYN's CAMPAYN_DELETE_WEBFORM tool input.
 */
type CAMPAYN_DELETE_WEBFORM_INPUT = {
  /**
   * List Id
   * @description ID of the contact list the webform belongs to
   */
  list_id?: number;
  /**
   * Webform Id
   * @description ID of the webform to delete
   */
  webform_id?: number;
};

/**
 * Type of CAMPAYN's CAMPAYN_DELETE_WEBFORM tool output.
 */
type CAMPAYN_DELETE_WEBFORM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the webform was deleted successfully
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
 * Type of CAMPAYN's CAMPAYN_GET_CONTACT tool input.
 */
type CAMPAYN_GET_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description ID of the contact to retrieve
   */
  contact_id?: number;
};

/**
 * Type of CAMPAYN's CAMPAYN_GET_CONTACT tool output.
 */
type CAMPAYN_GET_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Contact's mailing address
       * @default null
       */
      address: string | null;
      /**
       * Birthday
       * @description Birthday of the contact in YYYY-MM-DD format
       * @default null
       */
      birthday: string | null;
      /**
       * City
       * @description City of the contact
       * @default null
       */
      city: string | null;
      /**
       * Company
       * @description Contact's company name
       * @default null
       */
      company: string | null;
      /**
       * Country
       * @description Name of the contact's country
       * @default null
       */
      country: string | null;
      /**
       * Country Id
       * @description ID of the contact's country
       * @default null
       */
      country_id: string | null;
      /**
       * Custom Fields
       * @description List of custom field objects associated with the contact
       * @default null
       */
      custom_fields: {
          /**
           * Field
           * @description Custom field name, e.g., 'Eye Color'
           */
          field: string;
          /**
           * Value
           * @description Value corresponding to the custom field
           */
          value: string;
          /**
           * Variable
           * @description Variable name of the custom field
           */
          variable: string;
      }[] | null;
      /**
       * Email
       * @description Contact's email address
       */
      email: string;
      /**
       * First Name
       * @description Contact's first name
       * @default null
       */
      first_name: string | null;
      /**
       * Id
       * @description Unique identifier of the contact
       */
      id: string;
      /**
       * Image Url
       * @description URL of the contact's profile image
       * @default null
       */
      image_url: string | null;
      /**
       * Last Name
       * @description Contact's last name
       * @default null
       */
      last_name: string | null;
      /**
       * Phones
       * @description List of phone objects associated with the contact
       * @default null
       */
      phones: {
          /**
           * Type
           * @description Phone type, e.g., 'work' or 'fax'
           */
          type: string;
          /**
           * Value
           * @description Phone number value, e.g., '123-123'
           */
          value: string;
      }[] | null;
      /**
       * Sites
       * @description List of site objects associated with the contact
       * @default null
       */
      sites: {
          /**
           * Type
           * @description Site type, e.g., 'work' or 'personal'
           */
          type: string;
          /**
           * Value
           * @description Website URL or domain, e.g., 'campayn.com'
           */
          value: string;
      }[] | null;
      /**
       * Social
       * @description List of social account objects associated with the contact
       * @default null
       */
      social: {
          /**
           * Protocol
           * @description Social protocol or platform, e.g., 'facebook' or numeric ID
           */
          protocol: string;
          /**
           * Type
           * @description Social account type, e.g., 'work'
           */
          type: string;
          /**
           * Value
           * @description Social account identifier, e.g., username
           */
          value: string;
      }[] | null;
      /**
       * State
       * @description State or province of the contact
       * @default null
       */
      state: string | null;
      /**
       * Tags
       * @description Tags associated with the contact
       * @default null
       */
      tags: string | null;
      /**
       * Title
       * @description Contact's title or position
       * @default null
       */
      title: string | null;
      /**
       * Zip
       * @description ZIP or postal code of the contact
       * @default null
       */
      zip: string | null;
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
 * Type of CAMPAYN's CAMPAYN_GET_CONTACTS tool input.
 */
type CAMPAYN_GET_CONTACTS_INPUT = {
  /**
   * Filter[Contact]
   * @description Keyword to filter contacts by name, email, or company.
   * @default null
   */
  "filter[contact]": string | null;
  /**
   * List Id
   * @description ID of the list to retrieve contacts from.
   */
  list_id?: number;
};

/**
 * Type of CAMPAYN's CAMPAYN_GET_CONTACTS tool output.
 */
type CAMPAYN_GET_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email
       * @description Email address of the contact.
       */
      email: string;
      /**
       * First Name
       * @description First name of the contact.
       * @default null
       */
      first_name: string | null;
      /**
       * Id
       * @description Unique identifier of the contact.
       */
      id: string;
      /**
       * Image Url
       * @description URL of the contact's profile image.
       * @default null
       */
      image_url: string | null;
      /**
       * Last Name
       * @description Last name of the contact.
       * @default null
       */
      last_name: string | null;
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
 * Type of CAMPAYN's CAMPAYN_GET_LIST tool input.
 */
type CAMPAYN_GET_LIST_INPUT = {
  /**
   * List Id
   * @description Unique identifier of the contact list to retrieve.
   */
  list_id?: number;
};

/**
 * Type of CAMPAYN's CAMPAYN_GET_LIST tool output.
 */
type CAMPAYN_GET_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact Count
       * @description Number of contacts in the list.
       */
      contact_count: number;
      /**
       * Id
       * @description Identifier of the contact list.
       */
      id: string;
      /**
       * List Name
       * @description Name of the contact list.
       */
      list_name: string;
      /**
       * Tags
       * @description Comma-separated tags assigned to the contact list.
       * @default null
       */
      tags: string | null;
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
 * Type of CAMPAYN's CAMPAYN_GET_LISTS tool input.
 */
type CAMPAYN_GET_LISTS_INPUT = object;

/**
 * Type of CAMPAYN's CAMPAYN_GET_LISTS tool output.
 */
type CAMPAYN_GET_LISTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact Count
       * @description Number of contacts in the list.
       */
      contact_count: number;
      /**
       * Id
       * @description Unique identifier of the contact list.
       */
      id: string;
      /**
       * List Name
       * @description Name of the contact list.
       */
      list_name: string;
      /**
       * Tags
       * @description Comma-separated tags assigned to the list.
       */
      tags: string;
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
 * Type of CAMPAYN's CAMPAYN_GET_MESSAGE tool input.
 */
type CAMPAYN_GET_MESSAGE_INPUT = {
  /**
   * Message Id
   * @description ID of the message to retrieve
   */
  message_id?: number;
};

/**
 * Type of CAMPAYN's CAMPAYN_GET_MESSAGE tool output.
 */
type CAMPAYN_GET_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Campaign Title
       * @description Title of the associated campaign, if any
       * @default null
       */
      campaign_title: string | null;
      /**
       * Id
       * @description Unique identifier of the message
       */
      id: number;
      /**
       * Name
       * @description Name or title of the message
       */
      name: string;
      /**
       * Percent Responses
       * @description Percentage of recipients who responded to the message
       */
      percent_responses: number;
      /**
       * Percent Views
       * @description Percentage of recipients who opened the message
       */
      percent_views: number;
      /**
       * Preview Thumb
       * @description URL to preview the message thumbnail
       */
      preview_thumb: string;
      /**
       * Preview Url
       * @description URL to preview the message
       */
      preview_url: string;
      /**
       * Scheduled Date
       * @description Scheduled date/time for sending the message in 'YYYY-MM-DD HH:MM:SS' format
       * @default null
       */
      scheduled_date: string | null;
      /**
       * Send Count
       * @description Number of recipients the message was sent to
       */
      send_count: number;
      /**
       * Send Now
       * @description Flag indicating whether the message was sent immediately
       */
      send_now: boolean;
      /**
       * Status
       * @description Current status of the message, e.g., 'incomplete', 'scheduled', 'sent', 'delivered'
       */
      status: string;
      /**
       * Unique Responses
       * @description Number of unique responses
       */
      unique_responses: number;
      /**
       * Unique Views
       * @description Number of unique opens/views
       */
      unique_views: number;
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
 * Type of CAMPAYN's CAMPAYN_GET_MESSAGES tool input.
 */
type CAMPAYN_GET_MESSAGES_INPUT = object;

/**
 * Type of CAMPAYN's CAMPAYN_GET_MESSAGES tool output.
 */
type CAMPAYN_GET_MESSAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Campaign Title
       * @description Optional campaign title associated with the message
       * @default null
       */
      campaign_title: string | null;
      /**
       * Id
       * @description Unique identifier of the message
       */
      id: number;
      /**
       * Name
       * @description Name of the message (email campaign)
       */
      name: string;
      /**
       * Percent Responses
       * @description Percentage of recipients who responded
       */
      percent_responses: number;
      /**
       * Percent Views
       * @description Percentage of recipients who opened the message
       */
      percent_views: number;
      /**
       * Preview Thumb
       * @description URL to preview the message thumbnail
       */
      preview_thumb: string;
      /**
       * Preview Url
       * @description URL to preview the message
       */
      preview_url: string;
      /**
       * Scheduled Date
       * @description Scheduled date/time for sending the message in 'YYYY-MM-DD HH:MM:SS' format
       * @default null
       */
      scheduled_date: string | null;
      /**
       * Send Count
       * @description Number of recipients the message was sent to
       */
      send_count: number;
      /**
       * Send Now
       * @description Indicates if the message was sent immediately
       */
      send_now: boolean;
      /**
       * Status
       * @description Current status of the message, e.g., 'incomplete', 'scheduled', 'sent', 'delivered'
       */
      status: string;
      /**
       * Unique Responses
       * @description Number of unique responses
       */
      unique_responses: number;
      /**
       * Unique Views
       * @description Number of unique views (opens)
       */
      unique_views: number;
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
 * Type of CAMPAYN's CAMPAYN_GET_REPORTS tool input.
 */
type CAMPAYN_GET_REPORTS_INPUT = {
  /**
   * From Time
   * @description Start date filter as Unix timestamp in seconds (microtime), UTC. Corresponds to query parameter 'from'.
   * @default null
   */
  from_time: number | null;
  /**
   * To
   * @description End date filter as Unix timestamp in seconds (microtime), UTC. Corresponds to query parameter 'to'.
   * @default null
   */
  to: number | null;
};

/**
 * Type of CAMPAYN's CAMPAYN_GET_REPORTS tool output.
 */
type CAMPAYN_GET_REPORTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the email report.
       */
      id: string;
      /**
       * Name
       * @description Name of the campaign or message.
       */
      name: string;
      /**
       * Preview Url
       * @description URL to preview the email content.
       */
      preview_url: string;
      /**
       * Report Url
       * @description URL to the detailed report; null for scheduled emails.
       * @default null
       */
      report_url: string | null;
      /**
       * Scheduled Date
       * @description Scheduled date and time in UTC, formatted as YYYY-MM-DD HH:MM:SS.
       */
      scheduled_date: string;
      /**
       * Status
       * @description Status of the email (e.g., 'sent' or 'scheduled').
       */
      status: string;
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
 * Type of CAMPAYN's CAMPAYN_GET_WEBFORM tool input.
 */
type CAMPAYN_GET_WEBFORM_INPUT = {
  /**
   * List Id
   * @description ID of the contact list the webform belongs to
   */
  list_id?: number;
  /**
   * Webform Id
   * @description ID of the webform to retrieve
   */
  webform_id?: number;
};

/**
 * Type of CAMPAYN's CAMPAYN_GET_WEBFORM tool output.
 */
type CAMPAYN_GET_WEBFORM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact List Id
       * @description Identifier of the contact list associated with the webform
       */
      contact_list_id: number;
      /**
       * Form Html
       * @description HTML markup of the webform
       */
      form_html: string;
      /**
       * Form Title
       * @description Title or name of the webform
       */
      form_title: string;
      /**
       * Form Type
       * @description Type of the webform as an integer code
       */
      form_type: number;
      /**
       * Id
       * @description Unique identifier of the webform
       */
      id: number;
      /**
       * Signup Count
       * @description Number of signups captured by the webform
       */
      signup_count: number;
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
 * Type of CAMPAYN's CAMPAYN_GET_WEBFORMS tool input.
 */
type CAMPAYN_GET_WEBFORMS_INPUT = {
  /**
   * Filter[Form Type]
   * @description Filter forms by type: 0=Signup Page, 1=Embed Signup, 2=WordPress Signup, 3=Facebook Signup.
   * @default null
   * @enum {string|null}
   */
  "filter[form_type]": "0" | "1" | "2" | "3" | null;
  /**
   * List Id
   * @description ID of the list to retrieve webforms from.
   */
  list_id?: number;
};

/**
 * Type of CAMPAYN's CAMPAYN_GET_WEBFORMS tool output.
 */
type CAMPAYN_GET_WEBFORMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact List Id
       * @description Identifier of the contact list the form belongs to.
       */
      contact_list_id: string;
      /**
       * Form Html
       * @description Raw HTML markup of the webform.
       */
      form_html: string;
      /**
       * Form Title
       * @description Title of the webform.
       */
      form_title: string;
      /**
       * Form Type
       * @description Type of the form: 0=Signup Page, 1=Embed Signup, 2=WordPress Signup, 3=Facebook Signup.
       */
      form_type: string;
      /**
       * Id
       * @description Unique identifier of the webform.
       */
      id: string;
      /**
       * Signup Count
       * @description Number of sign-ups recorded for this form.
       */
      signup_count: string;
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
 * Type of CAMPAYN's CAMPAYN_UPDATE_LIST tool input.
 */
type CAMPAYN_UPDATE_LIST_INPUT = {
  /**
   * List Id
   * @description ID of the contact list to update.
   */
  list_id?: number;
  /**
   * List Name
   * @description New name for the contact list. Omit if not changing the name.
   * @default null
   */
  list_name: string | null;
  /**
   * Tags
   * @description Comma-separated tags to assign to the list. Omit if not changing tags.
   * @default null
   */
  tags: string | null;
};

/**
 * Type of CAMPAYN's CAMPAYN_UPDATE_LIST tool output.
 */
type CAMPAYN_UPDATE_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact Count
       * @description Number of contacts in the list.
       */
      contact_count: number;
      /**
       * Id
       * @description Identifier of the updated contact list.
       */
      id: string;
      /**
       * List Name
       * @description Name of the updated contact list.
       */
      list_name: string;
      /**
       * Tags
       * @description Comma-separated tags currently assigned to the list.
       * @default null
       */
      tags: string | null;
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
 * Type map of all available tool input types for toolkit "CAMPAYN".
 */
export type CAMPAYN_TOOL_INPUTS = {
  CREATE_CONTACT: CAMPAYN_CREATE_CONTACT_INPUT
  DELETE_CONTACT: CAMPAYN_DELETE_CONTACT_INPUT
  DELETE_LIST: CAMPAYN_DELETE_LIST_INPUT
  DELETE_WEBFORM: CAMPAYN_DELETE_WEBFORM_INPUT
  GET_CONTACT: CAMPAYN_GET_CONTACT_INPUT
  GET_CONTACTS: CAMPAYN_GET_CONTACTS_INPUT
  GET_LIST: CAMPAYN_GET_LIST_INPUT
  GET_LISTS: CAMPAYN_GET_LISTS_INPUT
  GET_MESSAGE: CAMPAYN_GET_MESSAGE_INPUT
  GET_MESSAGES: CAMPAYN_GET_MESSAGES_INPUT
  GET_REPORTS: CAMPAYN_GET_REPORTS_INPUT
  GET_WEBFORM: CAMPAYN_GET_WEBFORM_INPUT
  GET_WEBFORMS: CAMPAYN_GET_WEBFORMS_INPUT
  UPDATE_LIST: CAMPAYN_UPDATE_LIST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CAMPAYN".
 */
export type CAMPAYN_TOOL_OUTPUTS = {
  CREATE_CONTACT: CAMPAYN_CREATE_CONTACT_OUTPUT
  DELETE_CONTACT: CAMPAYN_DELETE_CONTACT_OUTPUT
  DELETE_LIST: CAMPAYN_DELETE_LIST_OUTPUT
  DELETE_WEBFORM: CAMPAYN_DELETE_WEBFORM_OUTPUT
  GET_CONTACT: CAMPAYN_GET_CONTACT_OUTPUT
  GET_CONTACTS: CAMPAYN_GET_CONTACTS_OUTPUT
  GET_LIST: CAMPAYN_GET_LIST_OUTPUT
  GET_LISTS: CAMPAYN_GET_LISTS_OUTPUT
  GET_MESSAGE: CAMPAYN_GET_MESSAGE_OUTPUT
  GET_MESSAGES: CAMPAYN_GET_MESSAGES_OUTPUT
  GET_REPORTS: CAMPAYN_GET_REPORTS_OUTPUT
  GET_WEBFORM: CAMPAYN_GET_WEBFORM_OUTPUT
  GET_WEBFORMS: CAMPAYN_GET_WEBFORMS_OUTPUT
  UPDATE_LIST: CAMPAYN_UPDATE_LIST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CAMPAYN toolkit.
 */
export const CAMPAYN = {
  slug: "campayn",
  tools: {
    /**
     * Tool to create a new contact in a specific list. use when you need to add a contact after gathering details.
     */
    CREATE_CONTACT: "CAMPAYN_CREATE_CONTACT",
    /**
     * Tool to delete a specific contact. use when you need to remove a contact permanently after confirming it should be deleted. example: "delete contact 123".
     */
    DELETE_CONTACT: "CAMPAYN_DELETE_CONTACT",
    /**
     * Tool to delete a specific contact list. use when cleaning up unused lists after confirming they are no longer needed. example: "delete list 123".
     */
    DELETE_LIST: "CAMPAYN_DELETE_LIST",
    /**
     * Tool to delete a specific webform. use when removing outdated or unnecessary webforms after confirming they are no longer needed. example: "delete webform 123".
     */
    DELETE_WEBFORM: "CAMPAYN_DELETE_WEBFORM",
    /**
     * Tool to retrieve a specific contact by id. use when you need to fetch full contact details after confirming the contact id.
     */
    GET_CONTACT: "CAMPAYN_GET_CONTACT",
    /**
     * Tool to retrieve all contacts in a specified list. use when you need to fetch list contacts after confirming list id.
     */
    GET_CONTACTS: "CAMPAYN_GET_CONTACTS",
    /**
     * Tool to retrieve a specific contact list by id. use when you need to fetch list details like name, tags, and contact count after knowing the list id.
     */
    GET_LIST: "CAMPAYN_GET_LIST",
    /**
     * Tool to retrieve all contact lists. use when you need to fetch available lists before performing list-specific actions. example prompt: "list all my contact lists".
     */
    GET_LISTS: "CAMPAYN_GET_LISTS",
    /**
     * Tool to retrieve details of a specific message by id. use when you need to fetch full message details after confirming the message id.
     */
    GET_MESSAGE: "CAMPAYN_GET_MESSAGE",
    /**
     * Tool to retrieve all email messages. use when you need to list all messages visible to the authenticated user.
     */
    GET_MESSAGES: "CAMPAYN_GET_MESSAGES",
    /**
     * Tool to retrieve report urls and metadata for sent and scheduled emails. use when you need to fetch email delivery data, optionally filtered by a date range (unix timestamp in seconds, utc). note: scheduled emails will have report url set to null.
     */
    GET_REPORTS: "CAMPAYN_GET_REPORTS",
    /**
     * Tool to retrieve details of a specific webform by id. use after confirming the webform id when you need to fetch form details like title, type, html, and signup count. example: "get webform 1550".
     */
    GET_WEBFORM: "CAMPAYN_GET_WEBFORM",
    /**
     * Tool to retrieve all webforms for a specific contact list. use when you need to list forms after confirming the list id. example prompt: "list all webforms in list 123".
     */
    GET_WEBFORMS: "CAMPAYN_GET_WEBFORMS",
    /**
     * Tool to update a contact list. use after confirming list id and desired changes. example: update list 123 name to 'newsletter subscribers'.
     */
    UPDATE_LIST: "CAMPAYN_UPDATE_LIST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CAMPAYN".
 */
export type CAMPAYN_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CAMPAYN".
 */
export type CAMPAYN_TRIGGER_EVENTS = {}
