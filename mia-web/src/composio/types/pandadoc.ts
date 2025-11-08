// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PANDADOC's PANDADOC_CREATE_CONTACT tool input.
 */
type PANDADOC_CREATE_CONTACT_INPUT = {
  /**
   * City
   * @description City
   * @default null
   */
  city: string | null;
  /**
   * Company
   * @description Company name
   * @default null
   */
  company: string | null;
  /**
   * Country
   * @description Country
   * @default null
   */
  country: string | null;
  /**
   * Email
   * Format: email
   * @description Contact's email address
   */
  email?: string;
  /**
   * First Name
   * @description Contact's first name
   * @default null
   */
  first_name: string | null;
  /**
   * Job Title
   * @description Job title
   * @default null
   */
  job_title: string | null;
  /**
   * Last Name
   * @description Contact's last name
   * @default null
   */
  last_name: string | null;
  /**
   * Phone
   * @description Phone number
   * @default null
   */
  phone: string | null;
  /**
   * Postal Code
   * @description Postal/ZIP code
   * @default null
   */
  postal_code: string | null;
  /**
   * State
   * @description State/Region
   * @default null
   */
  state: string | null;
  /**
   * Street Address
   * @description Street address
   * @default null
   */
  street_address: string | null;
};

/**
 * Type of PANDADOC's PANDADOC_CREATE_CONTACT tool output.
 */
type PANDADOC_CREATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * City
       * @description City
       * @default null
       */
      city: string | null;
      /**
       * Company
       * @description Company name
       * @default null
       */
      company: string | null;
      /**
       * Country
       * @description Country
       * @default null
       */
      country: string | null;
      /**
       * Email
       * Format: email
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
       * @description Unique contact ID
       */
      id: string;
      /**
       * Job Title
       * @description Job title
       * @default null
       */
      job_title: string | null;
      /**
       * Last Name
       * @description Contact's last name
       * @default null
       */
      last_name: string | null;
      /**
       * Phone
       * @description Phone number
       * @default null
       */
      phone: string | null;
      /**
       * Postal Code
       * @description Postal/ZIP code
       * @default null
       */
      postal_code: string | null;
      /**
       * State
       * @description State/Region
       * @default null
       */
      state: string | null;
      /**
       * Street Address
       * @description Street address
       * @default null
       */
      street_address: string | null;
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
 * Type of PANDADOC's PANDADOC_CREATE_DOCUMENT_ATTACHMENT tool input.
 */
type PANDADOC_CREATE_DOCUMENT_ATTACHMENT_INPUT = {
  /**
   * Document Id
   * @description UUID of the document to attach the file to
   */
  document_id?: string;
  /**
   * File
   * Format: binary
   * @description Binary content of the file to be attached
   */
  file?: string;
  /**
   * Name
   * @description Name for the uploaded file
   */
  name?: string;
};

/**
 * Type of PANDADOC's PANDADOC_CREATE_DOCUMENT_ATTACHMENT tool output.
 */
type PANDADOC_CREATE_DOCUMENT_ATTACHMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created Date
       * @description Timestamp of when the attachment was created
       */
      created_date: string;
      /**
       * File Name
       * @description Original filename
       */
      file_name: string;
      /**
       * Name
       * @description Name of the attachment
       */
      name: string;
      /**
       * Size
       * @description Size of the file in bytes
       */
      size: number;
      /**
       * Uuid
       * @description Unique identifier for the attachment
       */
      uuid: string;
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
 * Type of PANDADOC's PANDADOC_CREATE_DOCUMENT_FROM_FILE tool input.
 */
type PANDADOC_CREATE_DOCUMENT_FROM_FILE_INPUT = {
  /**
   * File Path
   * @description Path to the file to upload (PDF, DOCX, or RTF format)
   */
  file_path?: string;
  /**
   * Name
   * @description Name of the document
   */
  name?: string;
  /**
   * Owner
   * @description Model for document owner.
   * @default null
   */
  owner: {
      /**
       * Email
       * @description Email of the document owner
       * @default null
       */
      email: string | null;
      /**
       * Membership Id
       * @description Membership ID of the document owner
       * @default null
       */
      membership_id: string | null;
  } | null;
  /**
   * Parse Form Fields
   * @description Whether to parse form fields in the document (for PDFs)
   * @default false
   */
  parse_form_fields: boolean;
  /**
   * Recipients
   * @description List of recipients for the document
   */
  recipients?: {
      /**
       * Email
       * @description Email address of the recipient
       */
      email: string;
      /**
       * First Name
       * @description First name of the recipient
       * @default null
       */
      first_name: string | null;
      /**
       * Last Name
       * @description Last name of the recipient
       * @default null
       */
      last_name: string | null;
      /**
       * Role
       * @description Role of the recipient in the document
       * @default signer
       */
      role: string;
      /**
       * Signing Order
       * @description Order in which this recipient should sign (optional)
       * @default null
       */
      signing_order: number | null;
  }[];
  /**
   * Tags
   * @description Tags to categorize the document
   * @default null
   */
  tags: string[] | null;
};

/**
 * Type of PANDADOC's PANDADOC_CREATE_DOCUMENT_FROM_FILE tool output.
 */
type PANDADOC_CREATE_DOCUMENT_FROM_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Date Created
       * @description Date when the document was created
       */
      date_created: string;
      /**
       * Id
       * @description ID of the created document
       */
      id: string;
      /**
       * Name
       * @description Name of the document
       */
      name: string;
      /**
       * Status
       * @description Current status of the document
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
 * Type of PANDADOC's PANDADOC_CREATE_FOLDER tool input.
 */
type PANDADOC_CREATE_FOLDER_INPUT = {
  /**
   * Name
   * @description Name of the folder to be created
   */
  name?: string;
  /**
   * Parent Uuid
   * @description UUID of the parent folder if creating a nested folder structure
   * @default null
   */
  parent_uuid: string | null;
};

/**
 * Type of PANDADOC's PANDADOC_CREATE_FOLDER tool output.
 */
type PANDADOC_CREATE_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Date Created
       * @description Timestamp when the folder was created
       */
      date_created: string;
      /**
       * Name
       * @description Name of the created folder
       */
      name: string;
      /**
       * Uuid
       * @description Unique identifier of the created folder
       */
      uuid: string;
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
 * Type of PANDADOC's PANDADOC_CREATE_OR_UPDATE_CONTACT tool input.
 */
type PANDADOC_CREATE_OR_UPDATE_CONTACT_INPUT = {
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
   * Email
   * Format: email
   * @description Email address of the contact. Required for both create and update operations.
   */
  email?: string;
  /**
   * First Name
   * @description First name of the contact
   * @default null
   */
  first_name: string | null;
  /**
   * Job Title
   * @description Job title of the contact
   * @default null
   */
  job_title: string | null;
  /**
   * Last Name
   * @description Last name of the contact
   * @default null
   */
  last_name: string | null;
  /**
   * Phone
   * @description Phone number of the contact
   * @default null
   */
  phone: string | null;
  /**
   * Postal Code
   * @description Postal code of the contact
   * @default null
   */
  postal_code: string | null;
  /**
   * State
   * @description State of the contact
   * @default null
   */
  state: string | null;
  /**
   * Street Address
   * @description Street address of the contact
   * @default null
   */
  street_address: string | null;
};

/**
 * Type of PANDADOC's PANDADOC_CREATE_OR_UPDATE_CONTACT tool output.
 */
type PANDADOC_CREATE_OR_UPDATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
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
       * Email
       * @description Email address of the contact
       */
      email: string;
      /**
       * First Name
       * @description First name of the contact
       * @default null
       */
      first_name: string | null;
      /**
       * Id
       * @description Unique identifier of the contact
       */
      id: string;
      /**
       * Job Title
       * @description Job title of the contact
       * @default null
       */
      job_title: string | null;
      /**
       * Last Name
       * @description Last name of the contact
       * @default null
       */
      last_name: string | null;
      /**
       * Phone
       * @description Phone number of the contact
       * @default null
       */
      phone: string | null;
      /**
       * Postal Code
       * @description Postal code of the contact
       * @default null
       */
      postal_code: string | null;
      /**
       * State
       * @description State of the contact
       * @default null
       */
      state: string | null;
      /**
       * Street Address
       * @description Street address of the contact
       * @default null
       */
      street_address: string | null;
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
 * Type of PANDADOC's PANDADOC_CREATE_TEMPLATE tool input.
 */
type PANDADOC_CREATE_TEMPLATE_INPUT = {
  /**
   * TemplateContent
   * @description Content model for template creation from scratch.
   * @default null
   */
  content: {
      /**
       * Blocks
       * @description List of content blocks for the template
       */
      blocks: {
          [key: string]: unknown;
      }[];
      /**
       * Title
       * @description Title of the template content
       */
      title: string;
  } | null;
  /**
   * Description
   * @description Optional description of the template
   * @default null
   */
  description: string | null;
  /**
   * File Path
   * @description Path to the PDF file to use for template creation
   * @default null
   */
  file_path: string | null;
  /**
   * Name
   * @description Name of the template
   */
  name?: string;
  /**
   * Tags
   * @description Optional tags to categorize the template
   * @default null
   */
  tags: string[] | null;
};

/**
 * Type of PANDADOC's PANDADOC_CREATE_TEMPLATE tool output.
 */
type PANDADOC_CREATE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Date Created
       * @description Creation date of the template
       */
      date_created: string;
      /**
       * Date Modified
       * @description Last modification date of the template
       */
      date_modified: string;
      /**
       * Id
       * @description ID of the created template
       */
      id: string;
      /**
       * Name
       * @description Name of the template
       */
      name: string;
      /**
       * Status
       * @description Status of the template
       */
      status: string;
      /**
       * Version
       * @description Version of the template
       */
      version: string;
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
 * Type of PANDADOC's PANDADOC_CREATE_WEBHOOK tool input.
 */
type PANDADOC_CREATE_WEBHOOK_INPUT = {
  /**
   * Active
   * @description Whether the webhook subscription should be active
   * @default true
   */
  active: boolean | null;
  /**
   * Name
   * @description A descriptive name for the webhook subscription
   */
  name?: string;
  /**
   * Payload
   * @description Additional data to include in webhook payload
   * @default null
   */
  payload: string[] | null;
  /**
   * Triggers
   * @description List of events that will trigger the webhook
   */
  triggers?: string[];
  /**
   * Url
   * @description The endpoint URL where webhook notifications will be sent
   */
  url?: string;
};

/**
 * Type of PANDADOC's PANDADOC_CREATE_WEBHOOK tool output.
 */
type PANDADOC_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Name
       * @description Name of the webhook
       */
      name: string;
      /**
       * Shared Key
       * @description Shared key for webhook verification
       */
      shared_key: string;
      /**
       * Status
       * @description Status of the webhook
       */
      status: string;
      /**
       * Url
       * @description URL where webhook notifications will be sent
       */
      url: string;
      /**
       * Uuid
       * @description Unique identifier of the created webhook
       */
      uuid: string;
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
 * Type of PANDADOC's PANDADOC_DELETE_CONTACT tool input.
 */
type PANDADOC_DELETE_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description The unique identifier of the contact to delete.
   */
  contact_id?: string;
};

/**
 * Type of PANDADOC's PANDADOC_DELETE_CONTACT tool output.
 */
type PANDADOC_DELETE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the contact was successfully deleted.
       * @default true
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
 * Type of PANDADOC's PANDADOC_DELETE_TEMPLATE tool input.
 */
type PANDADOC_DELETE_TEMPLATE_INPUT = {
  /**
   * Template Id
   * @description The unique identifier of the template to delete
   */
  template_id?: string;
};

/**
 * Type of PANDADOC's PANDADOC_DELETE_TEMPLATE tool output.
 */
type PANDADOC_DELETE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A message indicating the result of the delete operation
       */
      message: string;
      /**
       * Status
       * @description The status of the delete operation
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
 * Type of PANDADOC's PANDADOC_GET_TEMPLATE_DETAILS tool input.
 */
type PANDADOC_GET_TEMPLATE_DETAILS_INPUT = {
  /**
   * Template Id
   * @description The unique identifier of the template to retrieve details for
   */
  template_id?: string;
};

/**
 * Type of PANDADOC's PANDADOC_GET_TEMPLATE_DETAILS tool output.
 */
type PANDADOC_GET_TEMPLATE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content Date Modified
       * @description The last content modification date
       * @default null
       */
      content_date_modified: string | null;
      /**
       * Content Placeholders
       * @description List of content placeholders
       * @default []
       */
      content_placeholders: {
          /**
           * Block Id
           * @description The block ID of the content placeholder
           */
          block_id: string;
          /**
           * Description
           * @description Description of the content placeholder
           * @default null
           */
          description: string | null;
          /**
           * Uuid
           * @description The UUID of the content placeholder
           */
          uuid: string;
      }[];
      /**
       * Created By
       * @description Details of the template creator
       */
      created_by: {
          /**
           * Avatar
           * @description The avatar URL of the template creator
           * @default null
           */
          avatar: string | null;
          /**
           * Email
           * @description The email of the template creator
           */
          email: string;
          /**
           * First Name
           * @description The first name of the template creator
           */
          first_name: string;
          /**
           * Id
           * @description The ID of the template creator
           */
          id: string;
          /**
           * Last Name
           * @description The last name of the template creator
           */
          last_name: string;
      };
      /**
       * Date Created
       * @description The creation date of the template
       */
      date_created: string;
      /**
       * Date Modified
       * @description The last modification date of the template
       */
      date_modified: string;
      /**
       * Fields
       * @description List of fields in the template
       * @default []
       */
      fields: {
          [key: string]: unknown;
      }[];
      /**
       * Id
       * @description The unique identifier of the template
       */
      id: string;
      /**
       * Metadata
       * @description Template metadata
       * @default {}
       */
      metadata: {
          [key: string]: unknown;
      };
      /**
       * Name
       * @description The name of the template
       */
      name: string;
      /**
       * Pricing
       * @description Pricing information
       * @default {}
       */
      pricing: {
          [key: string]: unknown;
      };
      /**
       * Roles
       * @description List of roles in the template
       * @default []
       */
      roles: {
          /**
           * Id
           * @description The ID of the role
           */
          id: string;
          /**
           * Name
           * @description The name of the role
           */
          name: string;
          /**
           * Preassigned Person
           * @description Pre-assigned person details if any
           * @default null
           */
          preassigned_person: {
              [key: string]: unknown;
          } | null;
          /**
           * Signing Order
           * @description The signing order for this role
           * @default null
           */
          signing_order: number | null;
      }[];
      /**
       * Tags
       * @description List of template tags
       * @default []
       */
      tags: string[];
      /**
       * Tokens
       * @description List of tokens in the template
       * @default []
       */
      tokens: {
          [key: string]: unknown;
      }[];
      /**
       * Version
       * @description Template version
       */
      version: string;
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
 * Type of PANDADOC's PANDADOC_LIST_CONTACTS tool input.
 */
type PANDADOC_LIST_CONTACTS_INPUT = {
  /**
   * Count
   * @description Number of items per page (default: 10, max: 100)
   * @default null
   */
  count: number | null;
  /**
   * Email
   * @description Filter results by exact email match
   * @default null
   */
  email: string | null;
  /**
   * Page
   * @description Page number for pagination (starts from 1)
   * @default null
   */
  page: number | null;
  /**
   * Query
   * @description Search filter for contact names/emails
   * @default null
   */
  query: string | null;
  /**
   * Shared
   * @description Filter by shared status
   * @default null
   */
  shared: boolean | null;
};

/**
 * Type of PANDADOC's PANDADOC_LIST_CONTACTS tool output.
 */
type PANDADOC_LIST_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of contacts matching the search criteria
       */
      results: {
          /**
           * Company
           * @description Company name of the contact
           * @default null
           */
          company: string | null;
          /**
           * Create Time
           * @description Creation timestamp of the contact
           * @default null
           */
          create_time: string | null;
          /**
           * Email
           * @description Email address of the contact
           */
          email: string;
          /**
           * First Name
           * @description First name of the contact
           * @default null
           */
          first_name: string | null;
          /**
           * Id
           * @description The unique identifier of the contact
           */
          id: string;
          /**
           * Last Name
           * @description Last name of the contact
           * @default null
           */
          last_name: string | null;
          /**
           * Shared
           * @description Whether the contact is shared
           * @default null
           */
          shared: boolean | null;
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
 * Type of PANDADOC's PANDADOC_LIST_DOCUMENT_FOLDERS tool input.
 */
type PANDADOC_LIST_DOCUMENT_FOLDERS_INPUT = {
  /**
   * Count
   * @description Number of folders to return (default: 50, max: 100)
   * @default null
   */
  count: number | null;
  /**
   * Page
   * @description Page number (starts from 1)
   * @default null
   */
  page: number | null;
  /**
   * Parent Uuid
   * @description The UUID of the parent folder. If omitted, returns folders in root directory
   * @default null
   */
  parent_uuid: string | null;
};

/**
 * Type of PANDADOC's PANDADOC_LIST_DOCUMENT_FOLDERS tool output.
 */
type PANDADOC_LIST_DOCUMENT_FOLDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of document folders
       */
      results: {
          /**
           * Created By
           * @description ID of the user who created the folder
           * @default null
           */
          created_by: string | null;
          /**
           * Date Created
           * @description Folder creation date
           */
          date_created: string;
          /**
           * Has Folders
           * @description Whether the folder contains subfolders
           */
          has_folders: boolean;
          /**
           * Has Items
           * @description Whether the folder contains items
           */
          has_items: boolean;
          /**
           * Name
           * @description Folder name
           */
          name: string;
          /**
           * Parent Uuid
           * @description UUID of the parent folder
           * @default null
           */
          parent_uuid: string | null;
          /**
           * Shared
           * @description Whether the folder is shared
           * @default null
           */
          shared: boolean | null;
          /**
           * Uuid
           * @description Folder UUID
           */
          uuid: string;
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
 * Type of PANDADOC's PANDADOC_LIST_TEMPLATES tool input.
 */
type PANDADOC_LIST_TEMPLATES_INPUT = {
  /**
   * Count
   * @description Number of templates to return per page (1-100, default: 50)
   * @default null
   */
  count: number | null;
  /**
   * Deleted
   * @description If true, returns only deleted templates
   * @default null
   */
  deleted: boolean | null;
  /**
   * Fields
   * @description Additional fields to include in the response (e.g., content_date_modified)
   * @default null
   */
  fields: string[] | null;
  /**
   * Folder Uuid
   * @description UUID of the folder where the templates are stored
   * @default null
   */
  folder_uuid: string | null;
  /**
   * Page
   * @description Page number of the results to return
   * @default null
   */
  page: number | null;
  /**
   * Q
   * @description Search query to filter templates by name
   * @default null
   */
  q: string | null;
  /**
   * Shared
   * @description If true, returns only shared templates
   * @default null
   */
  shared: boolean | null;
  /**
   * Tag
   * @description Filter templates by tags
   * @default null
   */
  tag: string[] | null;
};

/**
 * Type of PANDADOC's PANDADOC_LIST_TEMPLATES tool output.
 */
type PANDADOC_LIST_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of templates
       */
      results: {
          /**
           * Content Date Modified
           * @description Content last modification date
           * @default null
           */
          content_date_modified: string | null;
          /**
           * Date Created
           * @description Template creation date
           */
          date_created: string;
          /**
           * Date Modified
           * @description Template last modification date
           */
          date_modified: string;
          /**
           * Id
           * @description Template ID
           */
          id: string;
          /**
           * Name
           * @description Template name
           */
          name: string;
          /**
           * Version
           * @description Template version
           */
          version: string;
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
 * Type of PANDADOC's PANDADOC_MOVE_DOCUMENT_TO_FOLDER tool input.
 */
type PANDADOC_MOVE_DOCUMENT_TO_FOLDER_INPUT = {
  /**
   * Document Id
   * @description The unique identifier of the document to move
   */
  document_id?: string;
  /**
   * Folder Id
   * @description The unique identifier of the destination folder
   */
  folder_id?: string;
};

/**
 * Type of PANDADOC's PANDADOC_MOVE_DOCUMENT_TO_FOLDER tool output.
 */
type PANDADOC_MOVE_DOCUMENT_TO_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A message indicating the result of the move operation
       */
      message: string;
      /**
       * Status
       * @description The status of the move operation
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
 * Type map of all available tool input types for toolkit "PANDADOC".
 */
export type PANDADOC_TOOL_INPUTS = {
  CREATE_CONTACT: PANDADOC_CREATE_CONTACT_INPUT
  CREATE_DOCUMENT_ATTACHMENT: PANDADOC_CREATE_DOCUMENT_ATTACHMENT_INPUT
  CREATE_DOCUMENT_FROM_FILE: PANDADOC_CREATE_DOCUMENT_FROM_FILE_INPUT
  CREATE_FOLDER: PANDADOC_CREATE_FOLDER_INPUT
  CREATE_OR_UPDATE_CONTACT: PANDADOC_CREATE_OR_UPDATE_CONTACT_INPUT
  CREATE_TEMPLATE: PANDADOC_CREATE_TEMPLATE_INPUT
  CREATE_WEBHOOK: PANDADOC_CREATE_WEBHOOK_INPUT
  DELETE_CONTACT: PANDADOC_DELETE_CONTACT_INPUT
  DELETE_TEMPLATE: PANDADOC_DELETE_TEMPLATE_INPUT
  GET_TEMPLATE_DETAILS: PANDADOC_GET_TEMPLATE_DETAILS_INPUT
  LIST_CONTACTS: PANDADOC_LIST_CONTACTS_INPUT
  LIST_DOCUMENT_FOLDERS: PANDADOC_LIST_DOCUMENT_FOLDERS_INPUT
  LIST_TEMPLATES: PANDADOC_LIST_TEMPLATES_INPUT
  MOVE_DOCUMENT_TO_FOLDER: PANDADOC_MOVE_DOCUMENT_TO_FOLDER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PANDADOC".
 */
export type PANDADOC_TOOL_OUTPUTS = {
  CREATE_CONTACT: PANDADOC_CREATE_CONTACT_OUTPUT
  CREATE_DOCUMENT_ATTACHMENT: PANDADOC_CREATE_DOCUMENT_ATTACHMENT_OUTPUT
  CREATE_DOCUMENT_FROM_FILE: PANDADOC_CREATE_DOCUMENT_FROM_FILE_OUTPUT
  CREATE_FOLDER: PANDADOC_CREATE_FOLDER_OUTPUT
  CREATE_OR_UPDATE_CONTACT: PANDADOC_CREATE_OR_UPDATE_CONTACT_OUTPUT
  CREATE_TEMPLATE: PANDADOC_CREATE_TEMPLATE_OUTPUT
  CREATE_WEBHOOK: PANDADOC_CREATE_WEBHOOK_OUTPUT
  DELETE_CONTACT: PANDADOC_DELETE_CONTACT_OUTPUT
  DELETE_TEMPLATE: PANDADOC_DELETE_TEMPLATE_OUTPUT
  GET_TEMPLATE_DETAILS: PANDADOC_GET_TEMPLATE_DETAILS_OUTPUT
  LIST_CONTACTS: PANDADOC_LIST_CONTACTS_OUTPUT
  LIST_DOCUMENT_FOLDERS: PANDADOC_LIST_DOCUMENT_FOLDERS_OUTPUT
  LIST_TEMPLATES: PANDADOC_LIST_TEMPLATES_OUTPUT
  MOVE_DOCUMENT_TO_FOLDER: PANDADOC_MOVE_DOCUMENT_TO_FOLDER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PANDADOC toolkit.
 */
export const PANDADOC = {
  slug: "pandadoc",
  tools: {
    /**
     * This tool creates a new contact in pandadoc. it allows you to add a new contact with their personal and professional information to your pandadoc account. the tool is completely independent and doesn't require any external resource ids or dependencies.
     */
    CREATE_CONTACT: "PANDADOC_CREATE_CONTACT",
    /**
     * Creates and adds an attachment to a pandadoc document. this tool allows you to attach downloadable files such as supplemental materials, excel spreadsheets, or other content without embedding them directly into the document. attachments can be added only to documents in 'document.draft' status, with a maximum of 10 files per document and a size limit of 50mb per file.
     */
    CREATE_DOCUMENT_ATTACHMENT: "PANDADOC_CREATE_DOCUMENT_ATTACHMENT",
    /**
     * Creates a new document in pandadoc by uploading a file (pdf, docx, etc.). this tool converts existing documents into pandadoc documents for processing, signing, and tracking through the pandadoc system.
     */
    CREATE_DOCUMENT_FROM_FILE: "PANDADOC_CREATE_DOCUMENT_FROM_FILE",
    /**
     * Creates a new folder in pandadoc to organize documents. this action allows users to create a new folder with a specified name and optionally set a parent folder to create a nested folder structure.
     */
    CREATE_FOLDER: "PANDADOC_CREATE_FOLDER",
    /**
     * This tool creates a new contact or updates an existing one in pandadoc based on the email address. if a contact with the provided email exists, it will be updated; otherwise, a new contact will be created.
     */
    CREATE_OR_UPDATE_CONTACT: "PANDADOC_CREATE_OR_UPDATE_CONTACT",
    /**
     * This tool allows users to create a new template in pandadoc from a pdf file or from scratch. it handles file upload validation, parameter checks, proper error handling, and authentication with the pandadoc api. the template can be created either by uploading a pdf file or by providing a structured content object that defines the template layout and elements.
     */
    CREATE_TEMPLATE: "PANDADOC_CREATE_TEMPLATE",
    /**
     * Creates a new webhook subscription in pandadoc to receive notifications about specific events. this action allows you to set up webhook notifications for various document-related events such as status changes, recipient completions, and updates. the webhook will send http notifications to your specified endpoint when the configured events occur.
     */
    CREATE_WEBHOOK: "PANDADOC_CREATE_WEBHOOK",
    /**
     * This tool allows you to delete a contact from your pandadoc account. the action is permanent and cannot be undone.
     */
    DELETE_CONTACT: "PANDADOC_DELETE_CONTACT",
    /**
     * This tool deletes a specific template from pandadoc. once a template is deleted, it cannot be recovered. this action is permanent and should be used with caution.
     */
    DELETE_TEMPLATE: "PANDADOC_DELETE_TEMPLATE",
    /**
     * This tool retrieves detailed information about a specific template by its id. the endpoint returns comprehensive template details including metadata, content details, and sharing settings.
     */
    GET_TEMPLATE_DETAILS: "PANDADOC_GET_TEMPLATE_DETAILS",
    /**
     * A tool to list and search contacts in pandadoc. it retrieves a list of contacts with various options including filtering by email, search query, pagination, and shared status. all parameters are optional and it supports flexible queries to get contacts.
     */
    LIST_CONTACTS: "PANDADOC_LIST_CONTACTS",
    /**
     * This tool retrieves a list of all document folders in pandadoc. it's a standalone action that doesn't require any external dependencies or resource ids. the tool will return a list of folders containing documents, with each folder containing information about its id, name, and parent folder relationship.
     */
    LIST_DOCUMENT_FOLDERS: "PANDADOC_LIST_DOCUMENT_FOLDERS",
    /**
     * This tool retrieves a list of all templates available in the pandadoc account. it supports parameters to filter templates by name, shared status, deleted status, pagination, and tag filtering, and returns detailed template information.
     */
    LIST_TEMPLATES: "PANDADOC_LIST_TEMPLATES",
    /**
     * This tool allows users to move a document to a specific folder within their pandadoc account. it performs a post request to move the document to the specified folder. both the document and the destination folder must exist.
     */
    MOVE_DOCUMENT_TO_FOLDER: "PANDADOC_MOVE_DOCUMENT_TO_FOLDER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PANDADOC".
 */
export type PANDADOC_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PANDADOC".
 */
export type PANDADOC_TRIGGER_EVENTS = {}
