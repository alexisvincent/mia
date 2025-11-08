// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SUPERCHAT's SUPERCHAT_CREATE_CONTACT tool input.
 */
type SUPERCHAT_CREATE_CONTACT_INPUT = {
  /**
   * Custom Attributes
   * @description Optional list of custom attributes.
   * @default null
   */
  custom_attributes: {
      /**
       * Key
       * @description Custom attribute key, e.g., 'birthday'.
       */
      key: string;
      /**
       * Value
       * @description Custom attribute value as string.
       */
      value: string;
  }[] | null;
  /**
   * First Name
   * @description First name of the contact.
   * @default null
   */
  first_name: string | null;
  /**
   * Gender
   * @description Gender of the contact.
   * @default null
   * @enum {string|null}
   */
  gender: "female" | "male" | "diverse" | null;
  /**
   * Handles
   * @description List of one or more contact handles.
   */
  handles?: {
      /**
       * Type
       * @description Contact handle type. Supported types: phone, mail, instagram, telegram, google_business_messaging, facebook_messenger
       * @enum {string}
       */
      type: "phone" | "mail" | "instagram" | "telegram" | "google_business_messaging" | "facebook_messenger";
      /**
       * Value
       * @description The identifier for this handle such as a phone number, email address, or username.
       */
      value: string;
  }[];
  /**
   * Last Name
   * @description Last name of the contact.
   * @default null
   */
  last_name: string | null;
};

/**
 * Type of SUPERCHAT's SUPERCHAT_CREATE_CONTACT tool output.
 */
type SUPERCHAT_CREATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description UTC datetime when the contact was created.
       */
      created_at: string;
      /**
       * Custom Attributes
       * @description Custom attributes of this contact.
       * @default null
       */
      custom_attributes: {
          /**
           * Key
           * @description Custom attribute key.
           */
          key: string;
          /**
           * Value
           * @description Custom attribute value.
           */
          value: string;
      }[] | null;
      /**
       * First Name
       * @description First name of the contact.
       * @default null
       */
      first_name: string | null;
      /**
       * Gender
       * @description Gender of the contact.
       * @default null
       * @enum {string|null}
       */
      gender: "female" | "male" | "diverse" | null;
      /**
       * Handles
       * @description List of contact handles associated with this contact.
       */
      handles: {
          /**
           * Id
           * @description Unique identifier of the contact handle.
           */
          id: string;
          /**
           * Type
           * @description Contact handle type.
           * @enum {string}
           */
          type: "phone" | "mail" | "instagram" | "telegram" | "google_business_messaging" | "facebook_messenger";
          /**
           * Value
           * @description Contact handle value.
           */
          value: string;
      }[];
      /**
       * Id
       * @description Unique identifier of the contact, always starts with 'co_'.
       */
      id: string;
      /**
       * Last Name
       * @description Last name of the contact.
       * @default null
       */
      last_name: string | null;
      /**
       * Updated At
       * @description UTC datetime when the contact was last updated.
       */
      updated_at: string;
      /**
       * Url
       * @description Resource URL of the contact.
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
 * Type of SUPERCHAT's SUPERCHAT_CREATE_TEMPLATE_FOLDER tool input.
 */
type SUPERCHAT_CREATE_TEMPLATE_FOLDER_INPUT = {
  /**
   * Name
   * @description Name of the new template folder.
   */
  name?: string;
  /**
   * Parent Folder Id
   * @description ID of an existing folder to nest this folder under (optional).
   * @default null
   */
  parent_folder_id: string | null;
};

/**
 * Type of SUPERCHAT's SUPERCHAT_CREATE_TEMPLATE_FOLDER tool output.
 */
type SUPERCHAT_CREATE_TEMPLATE_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description UTC timestamp when the folder was created (ISO 8601).
       * @default null
       */
      created_at: string | null;
      /**
       * Id
       * @description Unique identifier of the created folder.
       */
      id: string;
      /**
       * Name
       * @description Name of the created folder.
       */
      name: string;
      /**
       * Parent Id
       * @description ID of the parent folder, if one was specified.
       * @default null
       */
      parent_id: string | null;
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
 * Type of SUPERCHAT's SUPERCHAT_DELETE_WEBHOOK tool input.
 */
type SUPERCHAT_DELETE_WEBHOOK_INPUT = {
  /**
   * Webhook Id
   * @description Unique identifier of the webhook to delete, always prefixed with 'wh_' or similar.
   */
  webhook_id?: string;
};

/**
 * Type of SUPERCHAT's SUPERCHAT_DELETE_WEBHOOK tool output.
 */
type SUPERCHAT_DELETE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of SUPERCHAT's SUPERCHAT_GET_CONTACT tool input.
 */
type SUPERCHAT_GET_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description The unique identifier of the contact.
   */
  contact_id?: string;
};

/**
 * Type of SUPERCHAT's SUPERCHAT_GET_CONTACT tool output.
 */
type SUPERCHAT_GET_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description UTC datetime when the contact was created.
       */
      created_at: string;
      /**
       * Custom Attributes
       * @description Custom attributes of this contact.
       * @default null
       */
      custom_attributes: {
          /**
           * Key
           * @description Custom attribute key.
           */
          key: string;
          /**
           * Value
           * @description Custom attribute value.
           */
          value: string;
      }[] | null;
      /**
       * First Name
       * @description First name of the contact.
       * @default null
       */
      first_name: string | null;
      /**
       * Gender
       * @description Gender of the contact.
       * @default null
       * @enum {string|null}
       */
      gender: "female" | "male" | "diverse" | null;
      /**
       * Handles
       * @description List of contact handles associated with this contact.
       */
      handles: {
          /**
           * Id
           * @description Unique identifier of the contact handle.
           */
          id: string;
          /**
           * Type
           * @description Contact handle type.
           * @enum {string}
           */
          type: "phone" | "mail" | "instagram" | "telegram" | "google_business_messaging" | "facebook_messenger";
          /**
           * Value
           * @description Contact handle value.
           */
          value: string;
      }[];
      /**
       * Id
       * @description Unique identifier of the contact, always starts with 'co_'.
       */
      id: string;
      /**
       * Last Name
       * @description Last name of the contact.
       * @default null
       */
      last_name: string | null;
      /**
       * Updated At
       * @description UTC datetime when the contact was last updated.
       */
      updated_at: string;
      /**
       * Url
       * @description Resource URL of the contact.
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
 * Type of SUPERCHAT's SUPERCHAT_GET_FILE tool input.
 */
type SUPERCHAT_GET_FILE_INPUT = {
  /**
   * File Id
   * @description Unique identifier of the file to retrieve, always prefixed with 'fi_'.
   */
  file_id?: string;
};

/**
 * Type of SUPERCHAT's SUPERCHAT_GET_FILE tool output.
 */
type SUPERCHAT_GET_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the file, always prefixed with 'fi_'.
       */
      id: string;
      /**
       * Link
       * @description Object containing the temporary download link.
       */
      link: {
          /**
           * Url
           * Format: uri
           * @description Temporary URL to download the file.
           */
          url: string;
      };
      /**
       * Mime Type
       * @description MIME type of the file, e.g., 'application/pdf'.
       */
      mime_type: string;
      /**
       * Name
       * @description Name of the file.
       */
      name: string;
      /**
       * Url
       * Format: uri
       * @description API resource URL for the file (not direct download).
       */
      url: string;
      /**
       * Valid Until
       * @description UTC datetime until which the link is valid.
       */
      valid_until: string;
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
 * Type of SUPERCHAT's SUPERCHAT_GET_USER tool input.
 */
type SUPERCHAT_GET_USER_INPUT = {
  /**
   * User Id
   * @description Unique identifier of the user to retrieve.
   */
  user_id?: string;
};

/**
 * Type of SUPERCHAT's SUPERCHAT_GET_USER tool output.
 */
type SUPERCHAT_GET_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avatar Url
       * @description URL of the user's avatar image.
       * @default null
       */
      avatar_url: string | null;
      /**
       * Created At
       * @description ISO 8601 timestamp when the user was created.
       * @default null
       */
      created_at: string | null;
      /**
       * Email
       * @description Email address of the user, if available.
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description First name of the user, if provided.
       * @default null
       */
      first_name: string | null;
      /**
       * Id
       * @description Unique identifier of the user.
       */
      id: string;
      /**
       * Last Name
       * @description Last name of the user, if provided.
       * @default null
       */
      last_name: string | null;
      /**
       * Role
       * @description Role assigned to the user, such as 'admin' or 'member'.
       * @default null
       */
      role: string | null;
      /**
       * Timezone
       * @description User's timezone, e.g., 'America/Los_Angeles'.
       * @default null
       */
      timezone: string | null;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the user was last updated.
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
 * Type of SUPERCHAT's SUPERCHAT_LIST_CHANNELS tool input.
 */
type SUPERCHAT_LIST_CHANNELS_INPUT = {
  /**
   * After
   * @description Cursor after which channels should be returned. Cannot be used with 'before'.
   * @default null
   */
  after: string | null;
  /**
   * Before
   * @description Cursor before which channels should be returned. Cannot be used with 'after'.
   * @default null
   */
  before: string | null;
  /**
   * Limit
   * @description Total number of channels to return (1-100).
   * @default 50
   */
  limit: number;
};

/**
 * Type of SUPERCHAT's SUPERCHAT_LIST_CHANNELS tool output.
 */
type SUPERCHAT_LIST_CHANNELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination details for channel list.
       */
      pagination: {
          /**
           * Next Cursor
           * @description Cursor for the next page of results.
           * @default null
           */
          next_cursor: string | null;
          /**
           * Next Url
           * @description URL to retrieve the next page of results.
           * @default null
           */
          next_url: string | null;
          /**
           * Previous Cursor
           * @description Cursor for the previous page of results.
           * @default null
           */
          previous_cursor: string | null;
          /**
           * Previous Url
           * @description URL to retrieve the previous page of results.
           * @default null
           */
          previous_url: string | null;
      };
      /**
       * Results
       * @description List of channel summaries.
       */
      results: {
          /**
           * Id
           * @description Unique identifier of the channel, prefixed with 'mc_'.
           */
          id: string;
          /**
           * Name
           * @description Name of the channel (e.g., 'whats_app').
           */
          name: string;
          /**
           * Url
           * @description API resource URL of this channel.
           */
          url: string;
      }[];
      /**
       * Url
       * @description URL of the channel resources.
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
 * Type of SUPERCHAT's SUPERCHAT_LIST_CONTACTS tool input.
 */
type SUPERCHAT_LIST_CONTACTS_INPUT = object;

/**
 * Type of SUPERCHAT's SUPERCHAT_LIST_CONTACTS tool output.
 */
type SUPERCHAT_LIST_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination details for contacts list.
       */
      pagination: {
          /**
           * Next Cursor
           * @description Cursor for the next page of results.
           * @default null
           */
          next_cursor: string | null;
          /**
           * Next Url
           * @description URL to retrieve the next page of results.
           * @default null
           */
          next_url: string | null;
          /**
           * Previous Cursor
           * @description Cursor for the previous page of results.
           * @default null
           */
          previous_cursor: string | null;
          /**
           * Previous Url
           * @description URL to retrieve the previous page of results.
           * @default null
           */
          previous_url: string | null;
      };
      /**
       * Results
       * @description List of contact objects.
       */
      results: {
          /**
           * Attributes
           * @description Custom key/value attributes stored on the contact.
           */
          attributes?: {
              [key: string]: string;
          };
          /**
           * Contact Handles
           * @description List of contact handles associated with the contact.
           */
          contact_handles: {
              /**
               * Handle
               * @description The identifier for this handle.
               */
              handle: string;
              /**
               * Type
               * @description Handle type, e.g., 'email', 'phone'.
               */
              type: string;
          }[];
          /**
           * Email
           * @description Email address of the contact.
           * @default null
           */
          email: string | null;
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
           * Last Name
           * @description Last name of the contact.
           * @default null
           */
          last_name: string | null;
          /**
           * Phone Number
           * @description Phone number of the contact, if available.
           * @default null
           */
          phone_number: string | null;
      }[];
      /**
       * Url
       * @description URL of the contacts resource.
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
 * Type of SUPERCHAT's SUPERCHAT_LIST_CONVERSATIONS tool input.
 */
type SUPERCHAT_LIST_CONVERSATIONS_INPUT = {
  /**
   * After
   * @description Cursor after which to return conversations. Cannot be used with 'before'.
   * @default null
   */
  after: string | null;
  /**
   * Before
   * @description Cursor before which to return conversations. Cannot be used with 'after'.
   * @default null
   */
  before: string | null;
  /**
   * Limit
   * @description Number of conversations to return (minimum 1).
   * @default 50
   */
  limit: number;
};

/**
 * Type of SUPERCHAT's SUPERCHAT_LIST_CONVERSATIONS tool output.
 */
type SUPERCHAT_LIST_CONVERSATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination details for the conversation list.
       */
      pagination: {
          /**
           * Next Cursor
           * @description Cursor for the next page of results.
           * @default null
           */
          next_cursor: string | null;
          /**
           * Next Url
           * @description URL to retrieve the next page of results.
           * @default null
           */
          next_url: string | null;
          /**
           * Previous Cursor
           * @description Cursor for the previous page of results.
           * @default null
           */
          previous_cursor: string | null;
          /**
           * Previous Url
           * @description URL to retrieve the previous page of results.
           * @default null
           */
          previous_url: string | null;
      };
      /**
       * Results
       * @description List of conversation summary objects.
       */
      results: {
          /**
           * Channel
           * @description Communication channel used for the conversation (e.g., 'whatsapp').
           */
          channel: string;
          /**
           * Contact Id
           * @description Unique identifier of the contact in the conversation.
           */
          contact_id: string;
          /**
           * Created At
           * @description ISO 8601 timestamp when the conversation was created.
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the conversation, prefixed with 'cv_'.
           */
          id: string;
          /**
           * Status
           * @description Current status of the conversation (e.g., 'open', 'closed').
           */
          status: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the conversation was last updated.
           */
          updated_at: string;
      }[];
      /**
       * Url
       * @description URL of the conversations resource.
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
 * Type of SUPERCHAT's SUPERCHAT_LIST_CUSTOM_ATTRIBUTES tool input.
 */
type SUPERCHAT_LIST_CUSTOM_ATTRIBUTES_INPUT = object;

/**
 * Type of SUPERCHAT's SUPERCHAT_LIST_CUSTOM_ATTRIBUTES tool output.
 */
type SUPERCHAT_LIST_CUSTOM_ATTRIBUTES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of custom contact attribute definitions.
       */
      results: {
          /**
           * Created At
           * @description UTC timestamp when the custom attribute was created.
           */
          created_at: string;
          /**
           * Data Type
           * @description Data type of the custom attribute (e.g., 'string', 'number', 'date').
           */
          data_type: string;
          /**
           * Id
           * @description Unique identifier of the custom attribute, prefixed with 'ca_'.
           */
          id: string;
          /**
           * Key
           * @description Key name of the custom attribute.
           */
          key: string;
          /**
           * Updated At
           * @description UTC timestamp when the custom attribute was last updated.
           */
          updated_at: string;
      }[];
      /**
       * Url
       * @description URL of the custom attributes resource.
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
 * Type of SUPERCHAT's SUPERCHAT_LIST_INBOXES tool input.
 */
type SUPERCHAT_LIST_INBOXES_INPUT = object;

/**
 * Type of SUPERCHAT's SUPERCHAT_LIST_INBOXES tool output.
 */
type SUPERCHAT_LIST_INBOXES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Inboxes
       * @description List of inbox objects.
       */
      inboxes: {
          /**
           * Created At
           * @description Timestamp when the inbox was created, in ISO 8601 format.
           */
          created_at: string;
          /**
           * Description
           * @description A brief description of the inbox.
           */
          description: string;
          /**
           * Id
           * @description Unique identifier of the inbox.
           */
          id: string;
          /**
           * Name
           * @description Name of the inbox.
           */
          name: string;
          /**
           * Updated At
           * @description Timestamp when the inbox was last updated, in ISO 8601 format.
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
 * Type of SUPERCHAT's SUPERCHAT_LIST_LABELS tool input.
 */
type SUPERCHAT_LIST_LABELS_INPUT = {
  /**
   * Limit
   * @description Maximum number of labels to return (must be ≥1).
   * @default null
   */
  limit: number | null;
  /**
   * Next
   * @description Cursor for fetching the next page of results. Cannot be used with `previous`.
   * @default null
   */
  next: string | null;
  /**
   * Previous
   * @description Cursor for fetching the previous page of results. Cannot be used with `next`.
   * @default null
   */
  previous: string | null;
};

/**
 * Type of SUPERCHAT's SUPERCHAT_LIST_LABELS tool output.
 */
type SUPERCHAT_LIST_LABELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination details to navigate through the label list.
       */
      pagination: {
          /**
           * Next Cursor
           * @description Cursor for the next page of results.
           * @default null
           */
          next_cursor: string | null;
          /**
           * Next Url
           * @description URL to retrieve the next page of results.
           * @default null
           */
          next_url: string | null;
          /**
           * Previous Cursor
           * @description Cursor for the previous page of results.
           * @default null
           */
          previous_cursor: string | null;
          /**
           * Previous Url
           * @description URL to retrieve the previous page of results.
           * @default null
           */
          previous_url: string | null;
      };
      /**
       * Results
       * @description List of label summaries.
       */
      results: {
          /**
           * Color
           * @description Hex color code of the label.
           */
          color: string;
          /**
           * Created At
           * @description UTC datetime when the label was created.
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the label.
           */
          id: string;
          /**
           * Name
           * @description Name of the label.
           */
          name: string;
          /**
           * Updated At
           * @description UTC datetime when the label was last updated.
           */
          updated_at: string;
      }[];
      /**
       * Url
       * @description Endpoint URL for the labels resource.
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
 * Type of SUPERCHAT's SUPERCHAT_LIST_TEMPLATES tool input.
 */
type SUPERCHAT_LIST_TEMPLATES_INPUT = object;

/**
 * Type of SUPERCHAT's SUPERCHAT_LIST_TEMPLATES tool output.
 */
type SUPERCHAT_LIST_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination information for template list.
       */
      pagination: {
          /**
           * Next Cursor
           * @description Cursor for the next page of results.
           * @default null
           */
          next_cursor: string | null;
          /**
           * Next Url
           * @description URL to retrieve the next page of results.
           * @default null
           */
          next_url: string | null;
          /**
           * Previous Cursor
           * @description Cursor for the previous page of results.
           * @default null
           */
          previous_cursor: string | null;
          /**
           * Previous Url
           * @description URL to retrieve the previous page of results.
           * @default null
           */
          previous_url: string | null;
      };
      /**
       * Results
       * @description List of template summaries.
       */
      results: {
          /**
           * Category
           * @description Category of the template (e.g., 'marketing', 'utility').
           */
          category: string;
          /**
           * Components
           * @description List of components in the template such as headers, bodies, and footers.
           */
          components: {
              [key: string]: unknown;
          }[];
          /**
           * Id
           * @description Unique identifier of the template.
           */
          id: string;
          /**
           * Language
           * @description Language code of the template.
           */
          language: string;
          /**
           * Name
           * @description Name of the template.
           */
          name: string;
          /**
           * Status
           * @description Current status of the template (e.g., 'approved', 'pending').
           */
          status: string;
      }[];
      /**
       * Url
       * @description URL of the template resources.
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
 * Type of SUPERCHAT's SUPERCHAT_LIST_USERS tool input.
 */
type SUPERCHAT_LIST_USERS_INPUT = object;

/**
 * Type of SUPERCHAT's SUPERCHAT_LIST_USERS tool output.
 */
type SUPERCHAT_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination details to navigate through user list.
       */
      pagination: {
          /**
           * Next Cursor
           * @description Cursor for the next page of results.
           * @default null
           */
          next_cursor: string | null;
          /**
           * Next Url
           * @description URL to retrieve the next page of results.
           * @default null
           */
          next_url: string | null;
          /**
           * Previous Cursor
           * @description Cursor for the previous page of results.
           * @default null
           */
          previous_cursor: string | null;
          /**
           * Previous Url
           * @description URL to retrieve the previous page of results.
           * @default null
           */
          previous_url: string | null;
      };
      /**
       * Results
       * @description List of user summaries.
       */
      results: {
          /**
           * Email
           * @description Email address of the user.
           */
          email: string;
          /**
           * First Name
           * @description First name of the user.
           * @default null
           */
          first_name: string | null;
          /**
           * Id
           * @description Unique identifier of the user.
           */
          id: string;
          /**
           * Last Name
           * @description Last name of the user.
           * @default null
           */
          last_name: string | null;
          /**
           * Name
           * @description Full name of the user.
           * @default null
           */
          name: string | null;
          /**
           * Phone
           * @description Phone number of the user.
           * @default null
           */
          phone: string | null;
          /**
           * Role
           * @description Role of the user within the workspace.
           */
          role: string;
          /**
           * Url
           * @description URL for the user resource.
           */
          url: string;
      }[];
      /**
       * Url
       * @description Endpoint URL for the users resource.
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
 * Type of SUPERCHAT's SUPERCHAT_LIST_WEBHOOKS tool input.
 */
type SUPERCHAT_LIST_WEBHOOKS_INPUT = object;

/**
 * Type of SUPERCHAT's SUPERCHAT_LIST_WEBHOOKS tool output.
 */
type SUPERCHAT_LIST_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of webhook summaries.
       */
      results: {
          /**
           * Created At
           * @description UTC datetime when the webhook was created.
           */
          created_at: string;
          /**
           * Events
           * @description List of event names the webhook is subscribed to.
           */
          events: string[];
          /**
           * Id
           * @description Unique identifier of the webhook.
           */
          id: string;
          /**
           * Status
           * @description Current status of the webhook (e.g., 'active', 'inactive').
           */
          status: string;
          /**
           * Updated At
           * @description UTC datetime when the webhook was last updated.
           */
          updated_at: string;
          /**
           * Url
           * @description Callback URL where events are sent.
           */
          url: string;
      }[];
      /**
       * Url
       * @description Endpoint URL for the webhooks resource.
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
 * Type of SUPERCHAT's SUPERCHAT_UPDATE_CONTACT tool input.
 */
type SUPERCHAT_UPDATE_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description Unique identifier of the contact to update, prefixed with 'co_'.
   */
  contact_id?: unknown;
  /**
   * Custom Attributes
   * @description List of custom attributes to update for this contact.
   * @default null
   */
  custom_attributes: {
      /**
       * Id
       * @description Identifier of the custom attribute to update.
       */
      id: string;
      /**
       * Value
       * @description New value for the custom attribute.
       */
      value: string;
  }[] | null;
  /**
   * First Name
   * @description First name of the contact.
   * @default null
   */
  first_name: string | null;
  /**
   * Last Name
   * @description Last name of the contact.
   * @default null
   */
  last_name: string | null;
};

/**
 * Type of SUPERCHAT's SUPERCHAT_UPDATE_CONTACT tool output.
 */
type SUPERCHAT_UPDATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Custom Attributes
       * @description Custom attributes associated with the contact after update.
       * @default null
       */
      custom_attributes: {
          /**
           * Id
           * @description Identifier of the custom attribute.
           */
          id: string;
          /**
           * Value
           * @description Value of the custom attribute.
           */
          value: string;
      }[] | null;
      /**
       * First Name
       * @description First name of the contact.
       * @default null
       */
      first_name: string | null;
      /**
       * Id
       * @description Unique identifier for the contact.
       */
      id: string;
      /**
       * Last Name
       * @description Last name of the contact.
       * @default null
       */
      last_name: string | null;
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
 * Type of SUPERCHAT's SUPERCHAT_UPDATE_WEBHOOK tool input.
 */
type SUPERCHAT_UPDATE_WEBHOOK_INPUT = {
  /**
   * Events
   * @description List of event names to subscribe to. Omit to leave unchanged.
   * @default null
   */
  events: string[] | null;
  /**
   * Status
   * @description Webhook status; 'active' to enable or 'inactive' to disable.
   * @default null
   * @enum {string|null}
   */
  status: "active" | "inactive" | null;
  /**
   * Url
   * Format: uri
   * @description New callback URL for the webhook.
   * @default null
   */
  url: unknown;
  /**
   * Webhook Id
   * @description Unique identifier of the webhook to update, prefixed with 'wh_'.
   */
  webhook_id?: unknown;
};

/**
 * Type of SUPERCHAT's SUPERCHAT_UPDATE_WEBHOOK tool output.
 */
type SUPERCHAT_UPDATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the webhook was created.
       */
      created_at: string;
      /**
       * Events
       * @description List of event names the webhook is subscribed to.
       */
      events: string[];
      /**
       * Id
       * @description Unique identifier of the webhook.
       */
      id: string;
      /**
       * Status
       * @description Current status of the webhook.
       */
      status: string;
      /**
       * Updated At
       * @description Timestamp when the webhook was last updated.
       */
      updated_at: string;
      /**
       * Url
       * @description Callback URL where webhook events are sent.
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
 * Type map of all available tool input types for toolkit "SUPERCHAT".
 */
export type SUPERCHAT_TOOL_INPUTS = {
  CREATE_CONTACT: SUPERCHAT_CREATE_CONTACT_INPUT
  CREATE_TEMPLATE_FOLDER: SUPERCHAT_CREATE_TEMPLATE_FOLDER_INPUT
  DELETE_WEBHOOK: SUPERCHAT_DELETE_WEBHOOK_INPUT
  GET_CONTACT: SUPERCHAT_GET_CONTACT_INPUT
  GET_FILE: SUPERCHAT_GET_FILE_INPUT
  GET_USER: SUPERCHAT_GET_USER_INPUT
  LIST_CHANNELS: SUPERCHAT_LIST_CHANNELS_INPUT
  LIST_CONTACTS: SUPERCHAT_LIST_CONTACTS_INPUT
  LIST_CONVERSATIONS: SUPERCHAT_LIST_CONVERSATIONS_INPUT
  LIST_CUSTOM_ATTRIBUTES: SUPERCHAT_LIST_CUSTOM_ATTRIBUTES_INPUT
  LIST_INBOXES: SUPERCHAT_LIST_INBOXES_INPUT
  LIST_LABELS: SUPERCHAT_LIST_LABELS_INPUT
  LIST_TEMPLATES: SUPERCHAT_LIST_TEMPLATES_INPUT
  LIST_USERS: SUPERCHAT_LIST_USERS_INPUT
  LIST_WEBHOOKS: SUPERCHAT_LIST_WEBHOOKS_INPUT
  UPDATE_CONTACT: SUPERCHAT_UPDATE_CONTACT_INPUT
  UPDATE_WEBHOOK: SUPERCHAT_UPDATE_WEBHOOK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SUPERCHAT".
 */
export type SUPERCHAT_TOOL_OUTPUTS = {
  CREATE_CONTACT: SUPERCHAT_CREATE_CONTACT_OUTPUT
  CREATE_TEMPLATE_FOLDER: SUPERCHAT_CREATE_TEMPLATE_FOLDER_OUTPUT
  DELETE_WEBHOOK: SUPERCHAT_DELETE_WEBHOOK_OUTPUT
  GET_CONTACT: SUPERCHAT_GET_CONTACT_OUTPUT
  GET_FILE: SUPERCHAT_GET_FILE_OUTPUT
  GET_USER: SUPERCHAT_GET_USER_OUTPUT
  LIST_CHANNELS: SUPERCHAT_LIST_CHANNELS_OUTPUT
  LIST_CONTACTS: SUPERCHAT_LIST_CONTACTS_OUTPUT
  LIST_CONVERSATIONS: SUPERCHAT_LIST_CONVERSATIONS_OUTPUT
  LIST_CUSTOM_ATTRIBUTES: SUPERCHAT_LIST_CUSTOM_ATTRIBUTES_OUTPUT
  LIST_INBOXES: SUPERCHAT_LIST_INBOXES_OUTPUT
  LIST_LABELS: SUPERCHAT_LIST_LABELS_OUTPUT
  LIST_TEMPLATES: SUPERCHAT_LIST_TEMPLATES_OUTPUT
  LIST_USERS: SUPERCHAT_LIST_USERS_OUTPUT
  LIST_WEBHOOKS: SUPERCHAT_LIST_WEBHOOKS_OUTPUT
  UPDATE_CONTACT: SUPERCHAT_UPDATE_CONTACT_OUTPUT
  UPDATE_WEBHOOK: SUPERCHAT_UPDATE_WEBHOOK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SUPERCHAT toolkit.
 */
export const SUPERCHAT = {
  slug: "superchat",
  tools: {
    /**
     * Tool to create a new contact. use when you need to register contact details before sending messages.
     */
    CREATE_CONTACT: "SUPERCHAT_CREATE_CONTACT",
    /**
     * Tool to create a new template folder in superchat. use when you need to organize message templates into folders before populating them.
     */
    CREATE_TEMPLATE_FOLDER: "SUPERCHAT_CREATE_TEMPLATE_FOLDER",
    /**
     * Tool to delete a specific webhook by its id. use when you need to remove an obsolete or compromised webhook after confirming its id. example: delete webhook wh 12345.
     */
    DELETE_WEBHOOK: "SUPERCHAT_DELETE_WEBHOOK",
    /**
     * Tool to retrieve details of a specific contact by its id. use when you need to view a contact's information after verifying its existence. example: "fetch contact info for id abc123".
     */
    GET_CONTACT: "SUPERCHAT_GET_CONTACT",
    /**
     * Tool to retrieve metadata of a specific file. use when you have the file id and need file information before downloading.
     */
    GET_FILE: "SUPERCHAT_GET_FILE",
    /**
     * Tool to retrieve details of a specific user by their id. use when you need to view or manage a user's profile. example: "fetch user info for id '123e4567-e89b-12d3-a456-426614174000'".
     */
    GET_USER: "SUPERCHAT_GET_USER",
    /**
     * Tool to list all channels. use when you need to fetch available channels, optionally paginated by `limit`, `after`, or `before`.
     */
    LIST_CHANNELS: "SUPERCHAT_LIST_CHANNELS",
    /**
     * Tool to list all contacts. use when you need to fetch the full list of contacts for selection or reporting.
     */
    LIST_CONTACTS: "SUPERCHAT_LIST_CONTACTS",
    /**
     * Tool to list all conversations. use when you need to retrieve all conversation ids and metadata, optionally paginated.
     */
    LIST_CONVERSATIONS: "SUPERCHAT_LIST_CONVERSATIONS",
    /**
     * Tool to list all custom contact attributes. use when you need to retrieve definitions of custom contact fields in your account.
     */
    LIST_CUSTOM_ATTRIBUTES: "SUPERCHAT_LIST_CUSTOM_ATTRIBUTES",
    /**
     * Tool to list all inboxes. use when you need to retrieve inbox ids and metadata before sending or organizing messages.
     */
    LIST_INBOXES: "SUPERCHAT_LIST_INBOXES",
    /**
     * Tool to list all labels. use when you need to fetch available labels, optionally paginated.
     */
    LIST_LABELS: "SUPERCHAT_LIST_LABELS",
    /**
     * Tool to list all message templates. use when you need to fetch available message templates.
     */
    LIST_TEMPLATES: "SUPERCHAT_LIST_TEMPLATES",
    /**
     * Tool to list all users. use when you need to retrieve a directory of all workspace users.
     */
    LIST_USERS: "SUPERCHAT_LIST_USERS",
    /**
     * Tool to list all webhooks. use when you need to retrieve all webhooks configured in the workspace.
     */
    LIST_WEBHOOKS: "SUPERCHAT_LIST_WEBHOOKS",
    /**
     * Tool to update information for a specific contact in superchat. use after retrieving a contact to modify its name or attributes. example: "update contact co 12345 to change first name to jane."
     */
    UPDATE_CONTACT: "SUPERCHAT_UPDATE_CONTACT",
    /**
     * Tool to update the details of a specific webhook. use when you need to modify an existing webhook's url, events, or status.
     */
    UPDATE_WEBHOOK: "SUPERCHAT_UPDATE_WEBHOOK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SUPERCHAT".
 */
export type SUPERCHAT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SUPERCHAT".
 */
export type SUPERCHAT_TRIGGER_EVENTS = {}
