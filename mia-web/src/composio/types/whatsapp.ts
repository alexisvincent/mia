// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of WHATSAPP's WHATSAPP_CREATE_MESSAGE_TEMPLATE tool input.
 */
type WHATSAPP_CREATE_MESSAGE_TEMPLATE_INPUT = {
  /**
   * Category
   * @description Template category: AUTHENTICATION, MARKETING, or UTILITY.
   * @enum {string}
   */
  category?: "AUTHENTICATION" | "MARKETING" | "UTILITY";
  /**
   * Components
   * @description Template components (header, body, footer, buttons).
   */
  components?: {
      /**
       * Buttons
       * @description Buttons for button components.
       * @default null
       */
      buttons: {
          /**
           * Phone Number
           * @description Phone number for phone buttons.
           * @default null
           */
          phone_number: string | null;
          /**
           * Text
           * @description Button text (up to 25 characters).
           */
          text: string;
          /**
           * Type
           * @description Type of button.
           * @enum {string}
           */
          type: "QUICK_REPLY" | "URL" | "PHONE_NUMBER";
          /**
           * Url
           * @description URL for URL buttons (can include variables).
           * @default null
           */
          url: string | null;
      }[] | null;
      /**
       * Example
       * @description Example values for variables in the text.
       * @default null
       */
      example: {
          [key: string]: unknown;
      } | null;
      /**
       * HeaderFormat
       * @description Format for header components.
       * @default null
       * @enum {string|null}
       */
      format: "TEXT" | "IMAGE" | "VIDEO" | "DOCUMENT" | null;
      /**
       * Text
       * @description Text content (required for TEXT headers, BODY, FOOTER).
       * @default null
       */
      text: string | null;
      /**
       * Type
       * @description Component type.
       * @enum {string}
       */
      type: "HEADER" | "BODY" | "FOOTER" | "BUTTONS";
  }[];
  /**
   * Language
   * @description Language code (e.g., 'en_US', 'es_ES').
   */
  language?: string;
  /**
   * Name
   * @description Template name (lowercase, alphanumeric, underscores, max 512 characters).
   */
  name?: string;
};

/**
 * Type of WHATSAPP's WHATSAPP_CREATE_MESSAGE_TEMPLATE tool output.
 */
type WHATSAPP_CREATE_MESSAGE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Category
       * @description Template category.
       */
      category: string;
      /**
       * Id
       * @description The created template ID.
       */
      id: string;
      /**
       * Language
       * @description Template language.
       */
      language: string;
      /**
       * Name
       * @description The template name.
       */
      name: string;
      /**
       * Status
       * @description Template status (usually PENDING for new templates).
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
 * Type of WHATSAPP's WHATSAPP_DELETE_MESSAGE_TEMPLATE tool input.
 */
type WHATSAPP_DELETE_MESSAGE_TEMPLATE_INPUT = {
  /**
   * Template Id
   * @description The ID of the template to delete.
   */
  template_id?: string;
};

/**
 * Type of WHATSAPP's WHATSAPP_DELETE_MESSAGE_TEMPLATE tool output.
 */
type WHATSAPP_DELETE_MESSAGE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Whether the template was successfully deleted.
       */
      success: boolean;
      /**
       * Template Id
       * @description The ID of the deleted template.
       */
      template_id: string;
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
 * Type of WHATSAPP's WHATSAPP_GET_BUSINESS_PROFILE tool input.
 */
type WHATSAPP_GET_BUSINESS_PROFILE_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of fields to retrieve. Default includes all available fields.
   * @default about,address,description,email,profile_picture_url,websites,vertical
   */
  fields: string;
  /**
   * Phone Number Id
   * @description The phone number ID to get the business profile for.
   */
  phone_number_id?: string;
};

/**
 * Type of WHATSAPP's WHATSAPP_GET_BUSINESS_PROFILE tool output.
 */
type WHATSAPP_GET_BUSINESS_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * About
       * @description About section of the business.
       * @default null
       */
      about: string | null;
      /**
       * Address
       * @description Business address.
       * @default null
       */
      address: string | null;
      /**
       * Description
       * @description Business description.
       * @default null
       */
      description: string | null;
      /**
       * Email
       * @description Business email address.
       * @default null
       */
      email: string | null;
      /**
       * Profile Picture Url
       * @description URL of the business profile picture.
       * @default null
       */
      profile_picture_url: string | null;
      /**
       * Vertical
       * @description Business category/vertical.
       * @default null
       */
      vertical: string | null;
      /**
       * Websites
       * @description List of business websites.
       * @default null
       */
      websites: string[] | null;
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
 * Type of WHATSAPP's WHATSAPP_GET_MEDIA tool input.
 */
type WHATSAPP_GET_MEDIA_INPUT = {
  /**
   * Media Id
   * @description The media ID to retrieve information for.
   */
  media_id?: string;
};

/**
 * Type of WHATSAPP's WHATSAPP_GET_MEDIA tool output.
 */
type WHATSAPP_GET_MEDIA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Size
       * @description Size of the media file in bytes.
       */
      file_size: number;
      /**
       * Id
       * @description The media ID.
       */
      id: string;
      /**
       * Messaging Product
       * @description Always 'whatsapp'.
       */
      messaging_product: string;
      /**
       * Mime Type
       * @description MIME type of the media file.
       */
      mime_type: string;
      /**
       * Sha256
       * @description SHA256 hash of the media file.
       */
      sha256: string;
      /**
       * Url
       * @description Direct download URL for the media (valid for 5 minutes).
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
 * Type of WHATSAPP's WHATSAPP_GET_MEDIA_INFO tool input.
 */
type WHATSAPP_GET_MEDIA_INFO_INPUT = {
  /**
   * Media Id
   * @description The media ID to get information for.
   */
  media_id?: string;
};

/**
 * Type of WHATSAPP's WHATSAPP_GET_MEDIA_INFO tool output.
 */
type WHATSAPP_GET_MEDIA_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Size
       * @description Size of the media file in bytes.
       */
      file_size: number;
      /**
       * Id
       * @description The media ID.
       */
      id: string;
      /**
       * Messaging Product
       * @description Always 'whatsapp'.
       */
      messaging_product: string;
      /**
       * Mime Type
       * @description MIME type of the media file.
       */
      mime_type: string;
      /**
       * Sha256
       * @description SHA256 hash of the media file.
       */
      sha256: string;
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
 * Type of WHATSAPP's WHATSAPP_GET_MESSAGE_TEMPLATES tool input.
 */
type WHATSAPP_GET_MESSAGE_TEMPLATES_INPUT = {
  /**
   * After
   * @description Cursor for pagination to get templates after this cursor.
   * @default null
   */
  after: string | null;
  /**
   * Category
   * @description Filter by template category: AUTHENTICATION, MARKETING, UTILITY.
   * @default null
   */
  category: string | null;
  /**
   * Language
   * @description Filter by language code (e.g., 'en_US', 'es_ES').
   * @default null
   */
  language: string | null;
  /**
   * Limit
   * @description The maximum number of templates to retrieve. Default is 25.
   * @default 25
   */
  limit: number;
  /**
   * Name Or Content
   * @description Filter templates by name or content substring.
   * @default null
   */
  name_or_content: string | null;
  /**
   * Status
   * @description Filter by template status: APPROVED, PENDING, REJECTED, DISABLED, PAUSED, LIMIT_EXCEEDED.
   * @default null
   */
  status: string | null;
};

/**
 * Type of WHATSAPP's WHATSAPP_GET_MESSAGE_TEMPLATES tool output.
 */
type WHATSAPP_GET_MESSAGE_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description List of message templates.
   */
  data?: {
      /**
       * Category
       * @description Template category: AUTHENTICATION, MARKETING, UTILITY.
       */
      category: string;
      /**
       * Components
       * @description Template components.
       */
      components: {
          /**
           * Buttons
           * @description Button definitions for button components.
           * @default null
           */
          buttons: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Example
           * @description Example values for variables.
           * @default null
           */
          example: {
              [key: string]: unknown;
          } | null;
          /**
           * Format
           * @description Format for header: TEXT, IMAGE, VIDEO, DOCUMENT.
           * @default null
           */
          format: string | null;
          /**
           * Text
           * @description Text content of the component.
           * @default null
           */
          text: string | null;
          /**
           * Type
           * @description Component type: HEADER, BODY, FOOTER, BUTTONS.
           */
          type: string;
      }[];
      /**
       * Created Time
       * @description When the template was created.
       * @default null
       */
      created_time: string | null;
      /**
       * Id
       * @description The template ID.
       */
      id: string;
      /**
       * Language
       * @description Language code of the template.
       */
      language: string;
      /**
       * Name
       * @description The template name.
       */
      name: string;
      /**
       * Quality Rating
       * @description Template quality rating.
       * @default null
       */
      quality_rating: string | null;
      /**
       * Status
       * @description Template status: APPROVED, PENDING, REJECTED, etc.
       */
      status: string;
      /**
       * Updated Time
       * @description When the template was last updated.
       * @default null
       */
      updated_time: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Paging
   * @description Paging information for pagination.
   * @default null
   */
  paging: {
      [key: string]: unknown;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of WHATSAPP's WHATSAPP_GET_PHONE_NUMBER tool input.
 */
type WHATSAPP_GET_PHONE_NUMBER_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of fields to retrieve. Default includes all available fields.
   * @default id,display_phone_number,verified_name,code_verification_status,quality_rating,platform_type,throughput,webhook_configuration,last_onboarded_time
   */
  fields: string;
  /**
   * Phone Number Id
   * @description The phone number ID to get details for.
   */
  phone_number_id?: string;
};

/**
 * Type of WHATSAPP's WHATSAPP_GET_PHONE_NUMBER tool output.
 */
type WHATSAPP_GET_PHONE_NUMBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code Verification Status
       * @description The verification status of the phone number.
       */
      code_verification_status: string;
      /**
       * Display Phone Number
       * @description The formatted phone number.
       */
      display_phone_number: string;
      /**
       * Id
       * @description The phone number ID.
       */
      id: string;
      /**
       * Last Onboarded Time
       * @description When the phone number was last onboarded.
       */
      last_onboarded_time: string;
      /**
       * Platform Type
       * @description The platform type (e.g., CLOUD_API).
       */
      platform_type: string;
      /**
       * Quality Rating
       * @description The quality rating of the phone number.
       */
      quality_rating: string;
      /**
       * Throughput
       * @description Throughput limits for the phone number.
       */
      throughput: {
          [key: string]: unknown;
      };
      /**
       * Verified Name
       * @description The verified business name.
       */
      verified_name: string;
      /**
       * Webhook Configuration
       * @description Webhook configuration.
       */
      webhook_configuration?: {
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
 * Type of WHATSAPP's WHATSAPP_GET_PHONE_NUMBERS tool input.
 */
type WHATSAPP_GET_PHONE_NUMBERS_INPUT = {
  /**
   * Limit
   * @description The maximum number of phone numbers to retrieve. Default is 25.
   * @default 25
   */
  limit: number;
};

/**
 * Type of WHATSAPP's WHATSAPP_GET_PHONE_NUMBERS tool output.
 */
type WHATSAPP_GET_PHONE_NUMBERS_OUTPUT = {
  /**
   * Data
   * @description List of phone numbers associated with the WABA.
   */
  data?: {
      /**
       * Code Verification Status
       * @description The verification status of the phone number.
       * @default null
       */
      code_verification_status: string | null;
      /**
       * Display Phone Number
       * @description The formatted phone number.
       * @default null
       */
      display_phone_number: string | null;
      /**
       * Id
       * @description The phone number ID.
       */
      id: string;
      /**
       * Last Onboarded Time
       * @description When the phone number was last onboarded.
       * @default null
       */
      last_onboarded_time: string | null;
      /**
       * Platform Type
       * @description The platform type (e.g., CLOUD_API).
       * @default null
       */
      platform_type: string | null;
      /**
       * Quality Rating
       * @description The quality rating of the phone number.
       * @default null
       */
      quality_rating: string | null;
      /**
       * Throughput
       * @description Throughput limits for the phone number.
       * @default null
       */
      throughput: {
          [key: string]: unknown;
      } | null;
      /**
       * Verified Name
       * @description The verified business name.
       * @default null
       */
      verified_name: string | null;
      /**
       * Webhook Configuration
       * @description Webhook configuration.
       * @default null
       */
      webhook_configuration: {
          [key: string]: unknown;
      } | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Paging
   * @description Paging information for pagination.
   * @default null
   */
  paging: {
      [key: string]: unknown;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of WHATSAPP's WHATSAPP_GET_TEMPLATE_STATUS tool input.
 */
type WHATSAPP_GET_TEMPLATE_STATUS_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of fields to retrieve.
   * @default id,name,status,category,language
   */
  fields: string;
  /**
   * Template Id
   * @description The ID of the template to check the status for.
   */
  template_id?: string;
};

/**
 * Type of WHATSAPP's WHATSAPP_GET_TEMPLATE_STATUS tool output.
 */
type WHATSAPP_GET_TEMPLATE_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Category
       * @description Template category: AUTHENTICATION, MARKETING, UTILITY.
       */
      category: string;
      /**
       * Created Time
       * @description When the template was created.
       * @default null
       */
      created_time: string | null;
      /**
       * Id
       * @description The template ID.
       */
      id: string;
      /**
       * Language
       * @description Template language code.
       */
      language: string;
      /**
       * Name
       * @description The template name.
       */
      name: string;
      /**
       * Quality Rating
       * @description Template quality rating: GREEN, YELLOW, RED.
       * @default null
       */
      quality_rating: string | null;
      /**
       * Rejected Reason
       * @description Reason for rejection if status is REJECTED.
       * @default null
       */
      rejected_reason: string | null;
      /**
       * Status
       * @description Template status: APPROVED, PENDING, REJECTED, DISABLED, PAUSED, LIMIT_EXCEEDED.
       */
      status: string;
      /**
       * Updated Time
       * @description When the template was last updated.
       * @default null
       */
      updated_time: string | null;
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
 * Type of WHATSAPP's WHATSAPP_SEND_CONTACTS tool input.
 */
type WHATSAPP_SEND_CONTACTS_INPUT = {
  /**
   * Contacts
   * @description List of contacts to send. Sample input:
   *         [
   *             {
   *                 'addresses': [
   *                     {
   *                         'city': 'city name',
   *                         'country': 'country name',
   *                         'country_code': 'code',
   *                         'state': "Contact's State",
   *                         'street': "Contact's Street",
   *                         'type': "Contact's Address Type",
   *                         'zip': "Contact's Zip Code"
   *                     }
   *                 ],
   *                 'birthday': 'birthday',
   *                 'emails': [
   *                     {'email': 'email', 'type': 'HOME'},
   *                     {'email': 'email', 'type': 'WORK'}
   *                 ],
   *                 'name': {
   *                     'first_name': 'first name value',
   *                     'formatted_name': 'formatted name value',
   *                     'last_name': 'last name value',
   *                     'suffix': 'suffix value'
   *                 },
   *                 'org': {
   *                     'company': 'company name',
   *                     'department': 'dep name',
   *                     'title': 'title'
   *                 },
   *                 'phones': [
   *                     {'phone': 'Phone number', 'wa_id': 'WA-ID value', 'type': 'MAIN'},
   *                     {'phone': 'Phone number', 'type': 'HOME'},
   *                     {'phone': 'Phone number', 'type': 'WORK'}
   *                 ],
   *             }
   *         ]
   */
  contacts?: {
      /**
       * Addresses
       * @description List of addresses associated with the contact.
       * @default null
       */
      addresses: {
          /**
           * City
           * @description City name of the address.
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Full country name of the address.
           * @default null
           */
          country: string | null;
          /**
           * Country Code
           * @description Two-letter country abbreviation of the address.
           * @default null
           */
          country_code: string | null;
          /**
           * State
           * @description State abbreviation of the address.
           * @default null
           */
          state: string | null;
          /**
           * Street
           * @description Street number and name of the address.
           * @default null
           */
          street: string | null;
          /**
           * Type
           * @description Type of address, standard values are HOME and WORK.
           * @default HOME
           * @enum {string}
           */
          type: "HOME" | "WORK";
          /**
           * Zip
           * @description ZIP code of the address.
           * @default null
           */
          zip: string | null;
      }[] | null;
      /**
       * Birthday
       * @description Birthday of the contact in YYYY-MM-DD format.
       * @default null
       */
      birthday: string | null;
      /**
       * Emails
       * @description List of email addresses associated with the contact.
       * @default []
       */
      emails: {
          /**
           * Email
           * @description Email address of the contact.
           * @default null
           */
          email: string | null;
          /**
           * Type
           * @description Type of email, standard values are HOME and WORK.
           * @default HOME
           * @enum {string}
           */
          type: "HOME" | "WORK";
      }[];
      /**
       * Name
       * @description Full contact name formatted as a name object.
       */
      name: {
          /**
           * First Name
           * @description First name of the contact.
           */
          first_name: string;
          /**
           * Formatted Name
           * @description Full name of the contact, as it normally appears.
           */
          formatted_name: string;
          /**
           * Last Name
           * @description Last name of the contact.
           */
          last_name: string;
          /**
           * Middle Name
           * @description Middle name of the contact.
           * @default null
           */
          middle_name: string | null;
          /**
           * Prefix
           * @description Name prefix of the contact.
           * @default null
           */
          prefix: string | null;
          /**
           * Suffix
           * @description Name suffix of the contact.
           * @default null
           */
          suffix: string | null;
      };
      /**
       * Org
       * @description Organization details associated with the contact.
       * @default null
       */
      org: {
          /**
           * Company
           * @description Name of the contact's company.
           * @default null
           */
          company: string | null;
          /**
           * Department
           * @description Name of the contact's department within the company.
           * @default null
           */
          department: string | null;
          /**
           * Title
           * @description Contact's business title within the company.
           * @default null
           */
          title: string | null;
      } | null;
      /**
       * Phones
       * @description List of phone numbers associated with the contact, formatted as phone objects.
       * @default null
       */
      phones: {
          /**
           * Phone
           * @description Phone number of the contact, automatically populated with the `wa_id` value as a formatted phone number.
           * @default null
           */
          phone: string | null;
          /**
           * Type
           * @description Type of phone, standard values are CELL, MAIN, IPHONE, HOME, and WORK.
           * @default CELL
           * @enum {string}
           */
          type: "CELL" | "MAIN" | "IPHONE" | "HOME" | "WORK";
          /**
           * Wa Id
           * @description WhatsApp ID associated with the phone number.
           * @default null
           */
          wa_id: string | null;
      }[] | null;
  }[];
  /**
   * Phone Number Id
   * @description The phone number ID from which to send the contacts.
   */
  phone_number_id?: string;
  /**
   * To Number
   * @description The phone number to send the contacts to, including the country code without the + sign.
   */
  to_number?: string;
};

/**
 * Type of WHATSAPP's WHATSAPP_SEND_CONTACTS tool output.
 */
type WHATSAPP_SEND_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of contacts with their WhatsApp IDs as a result of the request.
       */
      contacts: {
          /**
           * Input
           * @description The input phone number used in the request.
           */
          input: string;
          /**
           * Wa Id
           * @description The WhatsApp ID of the contact associated with the input phone number.
           */
          wa_id: string;
      }[];
      /**
       * Messages
       * @description List of messages sent as a result of the request.
       */
      messages: {
          /**
           * Id
           * @description The unique ID of the message sent.
           */
          id: string;
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
 * Type of WHATSAPP's WHATSAPP_SEND_INTERACTIVE_BUTTONS tool input.
 */
type WHATSAPP_SEND_INTERACTIVE_BUTTONS_INPUT = {
  /**
   * Body Text
   * @description Body text for the button message (up to 1024 characters).
   */
  body_text?: string;
  /**
   * Buttons
   * @description List of buttons (maximum 3 buttons).
   */
  buttons?: {
      /**
       * Id
       * @description Unique ID for this button (up to 256 characters).
       */
      id: string;
      /**
       * Title
       * @description Button text (up to 20 characters).
       */
      title: string;
  }[];
  /**
   * Footer Text
   * @description Footer text for the button message (up to 60 characters).
   * @default null
   */
  footer_text: string | null;
  /**
   * Header Text
   * @description Header text for the button message (up to 60 characters).
   * @default null
   */
  header_text: string | null;
  /**
   * Phone Number Id
   * @description The phone number ID from which to send the button message.
   */
  phone_number_id?: string;
  /**
   * Reply To Message Id
   * @description The ID of the message to reply to (optional).
   * @default null
   */
  reply_to_message_id: string | null;
  /**
   * To Number
   * @description The phone number to send the button message to, including the country code without the + sign.
   */
  to_number?: string;
};

/**
 * Type of WHATSAPP's WHATSAPP_SEND_INTERACTIVE_BUTTONS tool output.
 */
type WHATSAPP_SEND_INTERACTIVE_BUTTONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of contacts associated with the button message.
       */
      contacts?: {
          /**
           * Input
           * @description The phone number used in the request.
           */
          input: string;
          /**
           * Wa Id
           * @description The WhatsApp ID associated with the contact.
           */
          wa_id: string;
      }[];
      /**
       * Messages
       * @description List of messages sent, including their unique IDs.
       */
      messages?: {
          /**
           * Id
           * @description The unique ID of the message sent.
           */
          id: string;
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
 * Type of WHATSAPP's WHATSAPP_SEND_INTERACTIVE_LIST tool input.
 */
type WHATSAPP_SEND_INTERACTIVE_LIST_INPUT = {
  /**
   * Body Text
   * @description Body text for the list message (up to 1024 characters).
   */
  body_text?: string;
  /**
   * Button Text
   * @description Text for the list button (up to 20 characters).
   */
  button_text?: string;
  /**
   * Footer Text
   * @description Footer text for the list message (up to 60 characters).
   * @default null
   */
  footer_text: string | null;
  /**
   * Header Text
   * @description Header text for the list message (up to 60 characters).
   * @default null
   */
  header_text: string | null;
  /**
   * Phone Number Id
   * @description The phone number ID from which to send the list message.
   */
  phone_number_id?: string;
  /**
   * Reply To Message Id
   * @description The ID of the message to reply to (optional).
   * @default null
   */
  reply_to_message_id: string | null;
  /**
   * Sections
   * @description Sections containing list items (maximum 10 sections).
   */
  sections?: {
      /**
       * Rows
       * @description List items in this section (maximum 10 items per section).
       */
      rows: {
          /**
           * Description
           * @description Description of the list item (up to 72 characters).
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique ID for this list item (up to 24 characters).
           */
          id: string;
          /**
           * Title
           * @description Title of the list item (up to 24 characters).
           */
          title: string;
      }[];
      /**
       * Title
       * @description Title of the section (up to 24 characters).
       */
      title: string;
  }[];
  /**
   * To Number
   * @description The phone number to send the list message to, including the country code without the + sign.
   */
  to_number?: string;
};

/**
 * Type of WHATSAPP's WHATSAPP_SEND_INTERACTIVE_LIST tool output.
 */
type WHATSAPP_SEND_INTERACTIVE_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of contacts associated with the list message.
       */
      contacts?: {
          /**
           * Input
           * @description The phone number used in the request.
           */
          input: string;
          /**
           * Wa Id
           * @description The WhatsApp ID associated with the contact.
           */
          wa_id: string;
      }[];
      /**
       * Messages
       * @description List of messages sent, including their unique IDs.
       */
      messages?: {
          /**
           * Id
           * @description The unique ID of the message sent.
           */
          id: string;
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
 * Type of WHATSAPP's WHATSAPP_SEND_LOCATION tool input.
 */
type WHATSAPP_SEND_LOCATION_INPUT = {
  /**
   * Address
   * @description The address of the location to be sent.
   */
  address?: string;
  /**
   * Latitude
   * @description The latitude of the location to be sent.
   */
  latitude?: string;
  /**
   * Longitude
   * @description The longitude of the location to be sent.
   */
  longitude?: string;
  /**
   * Name
   * @description The name associated with the location to be sent.
   */
  name?: string;
  /**
   * Phone Number Id
   * @description The phone number ID from which to send the location.
   */
  phone_number_id?: string;
  /**
   * To Number
   * @description The phone number to send the location to, including the country code without the + sign.
   */
  to_number?: string;
};

/**
 * Type of WHATSAPP's WHATSAPP_SEND_LOCATION tool output.
 */
type WHATSAPP_SEND_LOCATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of contacts with their WhatsApp IDs as a result of the request.
       */
      contacts: {
          /**
           * Input
           * @description The input phone number used in the request.
           */
          input: string;
          /**
           * Wa Id
           * @description The WhatsApp ID associated with the input phone number.
           */
          wa_id: string;
      }[];
      /**
       * Messages
       * @description List of messages sent as a result of the request.
       */
      messages: {
          /**
           * Id
           * @description The unique ID of the message sent.
           */
          id: string;
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
 * Type of WHATSAPP's WHATSAPP_SEND_MEDIA tool input.
 */
type WHATSAPP_SEND_MEDIA_INPUT = {
  /**
   * Caption
   * @description The caption to accompany the media, if applicable.
   * @default
   */
  caption: string;
  /**
   * Link
   * @description The URL link to the media file to send.
   */
  link?: string;
  /**
   * Media Type
   * @description The type of media to send, such as audio, document, image, sticker, or video.
   * @enum {string}
   */
  media_type?: "audio" | "document" | "image" | "sticker" | "video";
  /**
   * Phone Number Id
   * @description The phone number ID from which to send the media.
   */
  phone_number_id?: string;
  /**
   * To Number
   * @description The phone number to send the media to, including the country code without the + sign.
   */
  to_number?: string;
};

/**
 * Type of WHATSAPP's WHATSAPP_SEND_MEDIA tool output.
 */
type WHATSAPP_SEND_MEDIA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of contacts with their WhatsApp IDs as a result of the request.
       */
      contacts: {
          /**
           * Input
           * @description The phone number used in the request.
           */
          input: string;
          /**
           * Wa Id
           * @description The WhatsApp ID associated with the contact.
           */
          wa_id: string;
      }[];
      /**
       * Messages
       * @description List of messages sent as a result of the request.
       */
      messages: {
          /**
           * Id
           * @description The unique ID of the message sent.
           */
          id: string;
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
 * Type of WHATSAPP's WHATSAPP_SEND_MEDIA_BY_ID tool input.
 */
type WHATSAPP_SEND_MEDIA_BY_ID_INPUT = {
  /**
   * Caption
   * @description Caption for the media (not supported for audio and sticker).
   * @default null
   */
  caption: string | null;
  /**
   * Filename
   * @description Filename for document media.
   * @default null
   */
  filename: string | null;
  /**
   * Media Id
   * @description The media ID from uploaded media (use upload_media action to get this ID).
   */
  media_id?: string;
  /**
   * Media Type
   * @description The type of media to send: audio, document, image, sticker, or video.
   * @enum {string}
   */
  media_type?: "audio" | "document" | "image" | "sticker" | "video";
  /**
   * Phone Number Id
   * @description The phone number ID from which to send the media.
   */
  phone_number_id?: string;
  /**
   * Reply To Message Id
   * @description The ID of the message to reply to (optional).
   * @default null
   */
  reply_to_message_id: string | null;
  /**
   * To Number
   * @description The phone number to send the media to, including the country code without the + sign.
   */
  to_number?: string;
};

/**
 * Type of WHATSAPP's WHATSAPP_SEND_MEDIA_BY_ID tool output.
 */
type WHATSAPP_SEND_MEDIA_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of contacts associated with the media message.
       */
      contacts?: {
          /**
           * Input
           * @description The phone number used in the request.
           */
          input: string;
          /**
           * Wa Id
           * @description The WhatsApp ID associated with the contact.
           */
          wa_id: string;
      }[];
      /**
       * Messages
       * @description List of messages sent, including their unique IDs.
       */
      messages?: {
          /**
           * Id
           * @description The unique ID of the message sent.
           */
          id: string;
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
 * Type of WHATSAPP's WHATSAPP_SEND_MESSAGE tool input.
 */
type WHATSAPP_SEND_MESSAGE_INPUT = {
  /**
   * Message Id
   * @description The ID of the message to be referenced if the message is a reply.
   * @default null
   */
  message_id: string | null;
  /**
   * Phone Number Id
   * @description The phone number ID from which to send the message.
   */
  phone_number_id?: string;
  /**
   * Preview Url
   * @description Indicates whether to include a preview of URLs in the message.
   * @default false
   */
  preview_url: boolean;
  /**
   * Text
   * @description The content of the message to be sent.
   */
  text?: string;
  /**
   * To Number
   * @description The phone number to send the message to, including the country code without the + sign.
   */
  to_number?: string;
};

/**
 * Type of WHATSAPP's WHATSAPP_SEND_MESSAGE tool output.
 */
type WHATSAPP_SEND_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of contacts with their WhatsApp IDs as a result of the request.
       */
      contacts: {
          /**
           * Input
           * @description The phone number used in the request.
           */
          input: string;
          /**
           * Wa Id
           * @description The WhatsApp ID associated with the contact.
           */
          wa_id: string;
      }[];
      /**
       * Messages
       * @description List of messages sent as a result of the request.
       */
      messages: {
          /**
           * Id
           * @description The unique ID of the message sent.
           */
          id: string;
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
 * Type of WHATSAPP's WHATSAPP_SEND_REPLY tool input.
 */
type WHATSAPP_SEND_REPLY_INPUT = {
  /**
   * Phone Number Id
   * @description The phone number ID from which to send the reply.
   */
  phone_number_id?: string;
  /**
   * Preview Url
   * @description Indicates whether to include a preview of URLs in the message.
   * @default false
   */
  preview_url: boolean;
  /**
   * Reply To Message Id
   * @description The ID of the message you are replying to.
   */
  reply_to_message_id?: string;
  /**
   * Text
   * @description The content of the reply message to be sent.
   */
  text?: string;
  /**
   * To Number
   * @description The phone number to send the reply to, including the country code without the + sign.
   */
  to_number?: string;
};

/**
 * Type of WHATSAPP's WHATSAPP_SEND_REPLY tool output.
 */
type WHATSAPP_SEND_REPLY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of contacts associated with the reply message.
       */
      contacts?: {
          /**
           * Input
           * @description The phone number used in the request.
           */
          input: string;
          /**
           * Wa Id
           * @description The WhatsApp ID associated with the contact.
           */
          wa_id: string;
      }[];
      /**
       * Messages
       * @description List of messages sent, including their unique IDs.
       */
      messages?: {
          /**
           * Id
           * @description The unique ID of the message sent.
           */
          id: string;
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
 * Type of WHATSAPP's WHATSAPP_SEND_TEMPLATE_MESSAGE tool input.
 */
type WHATSAPP_SEND_TEMPLATE_MESSAGE_INPUT = {
  /**
   * Language Code
   * @description The language code for the template.
   * @default en_US
   * @enum {string}
   */
  language_code: "af" | "sq" | "ar" | "ar_EG" | "ar_AE" | "ar_LB" | "ar_MA" | "ar_QA" | "az" | "be_BY" | "bn" | "bn_IN" | "bg" | "ca" | "zh_CN" | "zh_HK" | "zh_TW" | "hr" | "cs" | "da" | "prs_AF" | "nl" | "nl_BE" | "en" | "en_GB" | "en_US" | "en_AE" | "en_AU" | "en_CA" | "en_GH" | "en_IE" | "en_IN" | "en_JM" | "en_MY" | "en_NZ" | "en_QA" | "en_SG" | "en_UG" | "en_ZA" | "et" | "fil" | "fi" | "fr" | "fr_BE" | "fr_CA" | "fr_CH" | "fr_CI" | "fr_MA" | "ka" | "de" | "de_AT" | "de_CH" | "el" | "gu" | "ha" | "he" | "hi" | "hu" | "id" | "ga" | "it" | "ja" | "kn" | "kk" | "rw_RW" | "ko" | "ky_KG" | "lo" | "lv" | "lt" | "mk" | "ms" | "ml" | "mr" | "nb" | "ps_AF" | "fa" | "pl" | "pt_BR" | "pt_PT" | "pa" | "ro" | "ru" | "sr" | "si_LK" | "sk" | "sl" | "es" | "es_AR" | "es_CL" | "es_CO" | "es_CR" | "es_DO" | "es_EC" | "es_HN" | "es_MX" | "es_PA" | "es_PE" | "es_ES" | "es_UY" | "sw" | "sv" | "ta" | "te" | "th" | "tr" | "uk" | "ur" | "uz" | "vi" | "zu";
  /**
   * Phone Number Id
   * @description The phone number ID from which to send the template message.
   */
  phone_number_id?: string;
  /**
   * Template Name
   * @description The name of the template to be sent.
   */
  template_name?: string;
  /**
   * To Number
   * @description The phone number to send the template message to, including the country code without the + sign.
   */
  to_number?: string;
};

/**
 * Type of WHATSAPP's WHATSAPP_SEND_TEMPLATE_MESSAGE tool output.
 */
type WHATSAPP_SEND_TEMPLATE_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of contacts with their WhatsApp IDs as a result of the request.
       */
      contacts: {
          /**
           * Input
           * @description The phone number used in the request.
           */
          input: string;
          /**
           * Wa Id
           * @description The WhatsApp ID associated with the contact.
           */
          wa_id: string;
      }[];
      /**
       * Messages
       * @description List of messages sent as a result of the request.
       */
      messages: {
          /**
           * Id
           * @description The unique ID of the message sent.
           */
          id: string;
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
 * Type of WHATSAPP's WHATSAPP_UPLOAD_MEDIA tool input.
 */
type WHATSAPP_UPLOAD_MEDIA_INPUT = {
  /**
   * FileUploadable
   * @description Media file to upload to WhatsApp (max 16MB for most types, 100MB for videos).
   */
  file_to_upload?: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  };
  /**
   * Media Type
   * @description Type of media being uploaded: image, video, audio, document, or sticker.
   * @enum {string}
   */
  media_type?: "image" | "video" | "audio" | "document" | "sticker";
  /**
   * Phone Number Id
   * @description The phone number ID to upload media for.
   */
  phone_number_id?: string;
};

/**
 * Type of WHATSAPP's WHATSAPP_UPLOAD_MEDIA tool output.
 */
type WHATSAPP_UPLOAD_MEDIA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Size
       * @description Size of the uploaded file in bytes.
       * @default null
       */
      file_size: number | null;
      /**
       * Id
       * @description The media ID that can be used to send the media.
       */
      id: string;
      /**
       * Mime Type
       * @description MIME type of the uploaded media.
       * @default null
       */
      mime_type: string | null;
      /**
       * Sha256
       * @description SHA256 hash of the media file.
       * @default null
       */
      sha256: string | null;
      /**
       * Url
       * @description Direct URL to the uploaded media.
       * @default null
       */
      url: string | null;
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
 * Type map of all available tool input types for toolkit "WHATSAPP".
 */
export type WHATSAPP_TOOL_INPUTS = {
  CREATE_MESSAGE_TEMPLATE: WHATSAPP_CREATE_MESSAGE_TEMPLATE_INPUT
  DELETE_MESSAGE_TEMPLATE: WHATSAPP_DELETE_MESSAGE_TEMPLATE_INPUT
  GET_BUSINESS_PROFILE: WHATSAPP_GET_BUSINESS_PROFILE_INPUT
  GET_MEDIA: WHATSAPP_GET_MEDIA_INPUT
  GET_MEDIA_INFO: WHATSAPP_GET_MEDIA_INFO_INPUT
  GET_MESSAGE_TEMPLATES: WHATSAPP_GET_MESSAGE_TEMPLATES_INPUT
  GET_PHONE_NUMBER: WHATSAPP_GET_PHONE_NUMBER_INPUT
  GET_PHONE_NUMBERS: WHATSAPP_GET_PHONE_NUMBERS_INPUT
  GET_TEMPLATE_STATUS: WHATSAPP_GET_TEMPLATE_STATUS_INPUT
  SEND_CONTACTS: WHATSAPP_SEND_CONTACTS_INPUT
  SEND_INTERACTIVE_BUTTONS: WHATSAPP_SEND_INTERACTIVE_BUTTONS_INPUT
  SEND_INTERACTIVE_LIST: WHATSAPP_SEND_INTERACTIVE_LIST_INPUT
  SEND_LOCATION: WHATSAPP_SEND_LOCATION_INPUT
  SEND_MEDIA: WHATSAPP_SEND_MEDIA_INPUT
  SEND_MEDIA_BY_ID: WHATSAPP_SEND_MEDIA_BY_ID_INPUT
  SEND_MESSAGE: WHATSAPP_SEND_MESSAGE_INPUT
  SEND_REPLY: WHATSAPP_SEND_REPLY_INPUT
  SEND_TEMPLATE_MESSAGE: WHATSAPP_SEND_TEMPLATE_MESSAGE_INPUT
  UPLOAD_MEDIA: WHATSAPP_UPLOAD_MEDIA_INPUT
}

/**
 * Type map of all available tool input types for toolkit "WHATSAPP".
 */
export type WHATSAPP_TOOL_OUTPUTS = {
  CREATE_MESSAGE_TEMPLATE: WHATSAPP_CREATE_MESSAGE_TEMPLATE_OUTPUT
  DELETE_MESSAGE_TEMPLATE: WHATSAPP_DELETE_MESSAGE_TEMPLATE_OUTPUT
  GET_BUSINESS_PROFILE: WHATSAPP_GET_BUSINESS_PROFILE_OUTPUT
  GET_MEDIA: WHATSAPP_GET_MEDIA_OUTPUT
  GET_MEDIA_INFO: WHATSAPP_GET_MEDIA_INFO_OUTPUT
  GET_MESSAGE_TEMPLATES: WHATSAPP_GET_MESSAGE_TEMPLATES_OUTPUT
  GET_PHONE_NUMBER: WHATSAPP_GET_PHONE_NUMBER_OUTPUT
  GET_PHONE_NUMBERS: WHATSAPP_GET_PHONE_NUMBERS_OUTPUT
  GET_TEMPLATE_STATUS: WHATSAPP_GET_TEMPLATE_STATUS_OUTPUT
  SEND_CONTACTS: WHATSAPP_SEND_CONTACTS_OUTPUT
  SEND_INTERACTIVE_BUTTONS: WHATSAPP_SEND_INTERACTIVE_BUTTONS_OUTPUT
  SEND_INTERACTIVE_LIST: WHATSAPP_SEND_INTERACTIVE_LIST_OUTPUT
  SEND_LOCATION: WHATSAPP_SEND_LOCATION_OUTPUT
  SEND_MEDIA: WHATSAPP_SEND_MEDIA_OUTPUT
  SEND_MEDIA_BY_ID: WHATSAPP_SEND_MEDIA_BY_ID_OUTPUT
  SEND_MESSAGE: WHATSAPP_SEND_MESSAGE_OUTPUT
  SEND_REPLY: WHATSAPP_SEND_REPLY_OUTPUT
  SEND_TEMPLATE_MESSAGE: WHATSAPP_SEND_TEMPLATE_MESSAGE_OUTPUT
  UPLOAD_MEDIA: WHATSAPP_UPLOAD_MEDIA_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's WHATSAPP toolkit.
 */
export const WHATSAPP = {
  slug: "whatsapp",
  tools: {
    /**
     * Create a new message template for the whatsapp business account. templates must be approved by whatsapp before they can be used. templates are required for marketing messages and messages sent outside the 24-hour window.
     */
    CREATE_MESSAGE_TEMPLATE: "WHATSAPP_CREATE_MESSAGE_TEMPLATE",
    /**
     * Delete a message template from the whatsapp business account. this permanently removes the template and it cannot be recovered. only delete templates that are no longer needed.
     */
    DELETE_MESSAGE_TEMPLATE: "WHATSAPP_DELETE_MESSAGE_TEMPLATE",
    /**
     * Get the business profile information for a whatsapp business phone number. this includes business details like description, address, website, and contact info.
     */
    GET_BUSINESS_PROFILE: "WHATSAPP_GET_BUSINESS_PROFILE",
    /**
     * Get information about uploaded media including a temporary download url. the download url is valid for 5 minutes and can be used to retrieve the actual media file. this is useful for downloading media that was sent to your whatsapp number.
     */
    GET_MEDIA: "WHATSAPP_GET_MEDIA",
    /**
     * Get metadata about uploaded media without generating a download url. this is useful for checking file size, type, and hash without downloading the file. use get media if you need the actual download url.
     */
    GET_MEDIA_INFO: "WHATSAPP_GET_MEDIA_INFO",
    /**
     * Get all message templates for the whatsapp business account. templates are required for sending messages outside the 24-hour window and for marketing/utility messages.
     */
    GET_MESSAGE_TEMPLATES: "WHATSAPP_GET_MESSAGE_TEMPLATES",
    /**
     * Get details of a specific phone number associated with a whatsapp business account.
     */
    GET_PHONE_NUMBER: "WHATSAPP_GET_PHONE_NUMBER",
    /**
     * Get all phone numbers associated with a whatsapp business account (waba).
     */
    GET_PHONE_NUMBERS: "WHATSAPP_GET_PHONE_NUMBERS",
    /**
     * Get the status and details of a specific message template. this is useful for checking if a template has been approved, rejected, or is still pending review.
     */
    GET_TEMPLATE_STATUS: "WHATSAPP_GET_TEMPLATE_STATUS",
    /**
     * Send contacts whatsapp number. note: the message will be delivered to the recipient only if they have initiated a conversation first.
     */
    SEND_CONTACTS: "WHATSAPP_SEND_CONTACTS",
    /**
     * Send an interactive button message to a whatsapp number. button messages allow users to quickly respond by tapping up to 3 predefined buttons. perfect for yes/no questions, quick choices, or call-to-action scenarios. note: the message will be delivered to the recipient only if they have texted first.
     */
    SEND_INTERACTIVE_BUTTONS: "WHATSAPP_SEND_INTERACTIVE_BUTTONS",
    /**
     * Send an interactive list message to a whatsapp number. list messages allow users to select from up to 10 options in a structured format. great for menus, catalogs, or choices. note: the message will be delivered to the recipient only if they have texted first.
     */
    SEND_INTERACTIVE_LIST: "WHATSAPP_SEND_INTERACTIVE_LIST",
    /**
     * Send a location message to a whatsapp number. note: the location will be shared with the recipient only if they have texted first.
     */
    SEND_LOCATION: "WHATSAPP_SEND_LOCATION",
    /**
     * Send a media message to a whatsapp number. note: the media will be delivered to the recipient only if they have texted first.
     */
    SEND_MEDIA: "WHATSAPP_SEND_MEDIA",
    /**
     * Send media using a media id from previously uploaded media. this is more efficient than sending media by url as the media is already on whatsapp servers. use upload media action first to get the media id. note: the media will be delivered to the recipient only if they have texted first.
     */
    SEND_MEDIA_BY_ID: "WHATSAPP_SEND_MEDIA_BY_ID",
    /**
     * Send a text message to a whatsapp number. note: the message will reflect on the recipient's phone number only if they have texted first.
     */
    SEND_MESSAGE: "WHATSAPP_SEND_MESSAGE",
    /**
     * Send a reply to a specific message in a whatsapp conversation. this creates a contextual reply that shows which message you're responding to. note: the reply will be delivered to the recipient only if they have texted first.
     */
    SEND_REPLY: "WHATSAPP_SEND_REPLY",
    /**
     * Send a template message to a whatsapp number.
     */
    SEND_TEMPLATE_MESSAGE: "WHATSAPP_SEND_TEMPLATE_MESSAGE",
    /**
     * Upload media files (images, videos, audio, documents, stickers) to whatsapp servers. the uploaded media gets a media id that can be used in send media or other messaging actions. supported formats: - images: jpeg, png (max 5mb) - videos: mp4, 3gpp (max 16mb) - audio: aac, m4a, amr, mp3, ogg (max 16mb) - documents: pdf, doc, docx, ppt, pptx, xls, xlsx (max 100mb) - stickers: webp (max 500kb, 512x512 pixels)
     */
    UPLOAD_MEDIA: "WHATSAPP_UPLOAD_MEDIA",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "WHATSAPP".
 */
export type WHATSAPP_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "WHATSAPP".
 */
export type WHATSAPP_TRIGGER_EVENTS = {}
