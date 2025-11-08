// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SPOKI's SPOKI_CREATE_CUSTOM_FIELD tool input.
 */
type SPOKI_CREATE_CUSTOM_FIELD_INPUT = {
  /**
   * Code
   * @description Programmatic code (uppercase underscore, unique, non-reserved).
   */
  code?: string;
  /**
   * Example
   * @description Example or default value for the field.
   */
  example?: string;
  /**
   * Field Type
   * @description Type: 1=TEXT, 2=DATE, 3=DATETIME.
   * @enum {integer}
   */
  field_type?: 1 | 2 | 3;
  /**
   * Label
   * @description Human-readable label (uppercase, unique, non-reserved).
   */
  label?: string;
};

/**
 * Type of SPOKI's SPOKI_CREATE_CUSTOM_FIELD tool output.
 */
type SPOKI_CREATE_CUSTOM_FIELD_OUTPUT = {
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
 * Type of SPOKI's SPOKI_CREATE_OR_UPDATE_CONTACT tool input.
 */
type SPOKI_CREATE_OR_UPDATE_CONTACT_INPUT = {
  /**
   * Custom Fields
   * @description Custom field values as key-value pairs
   * @default null
   */
  custom_fields: {
      [key: string]: string;
  } | null;
  /**
   * Email
   * Format: email
   * @description Email address of the contact
   * @default null
   */
  email: string | null;
  /**
   * First Name
   * @description First name of the contact
   * @default null
   */
  first_name: string | null;
  /**
   * Language
   * @description Language code for the contact, e.g. 'en'
   * @default null
   */
  language: string | null;
  /**
   * Last Name
   * @description Last name of the contact
   * @default null
   */
  last_name: string | null;
  /**
   * Phone
   * @description Contact phone number in E.164 format, e.g. '+393331234567'
   */
  phone?: string;
};

/**
 * Type of SPOKI's SPOKI_CREATE_OR_UPDATE_CONTACT tool output.
 */
type SPOKI_CREATE_OR_UPDATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Chat Link
       * @description Link to chat with the contact
       */
      chat_link: string;
      /**
       * Email
       * @description Email of the contact
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description First name of the contact
       */
      first_name: string;
      /**
       * Has Invalid Phone
       * @description Whether the phone number is invalid
       */
      has_invalid_phone: boolean;
      /**
       * Id
       * @description Unique ID of the contact
       */
      id: number;
      /**
       * Language
       * @description Language of the contact
       */
      language: string;
      /**
       * Last Name
       * @description Last name of the contact
       */
      last_name: string;
      /**
       * Phone
       * @description Contact phone number
       */
      phone: string;
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
 * Type of SPOKI's SPOKI_DELETE_CONTACT tool input.
 */
type SPOKI_DELETE_CONTACT_INPUT = {
  /**
   * Id
   * @description ID of the contact to delete
   */
  id?: number;
};

/**
 * Type of SPOKI's SPOKI_DELETE_CONTACT tool output.
 */
type SPOKI_DELETE_CONTACT_OUTPUT = {
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
 * Type of SPOKI's SPOKI_GET_ACCOUNT_CURRENT_REPORT tool input.
 */
type SPOKI_GET_ACCOUNT_CURRENT_REPORT_INPUT = {
  /**
   * Account Id
   * @description ID of the account to retrieve the current report for
   */
  account_id?: number;
};

/**
 * Type of SPOKI's SPOKI_GET_ACCOUNT_CURRENT_REPORT tool output.
 */
type SPOKI_GET_ACCOUNT_CURRENT_REPORT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account
       * @description Account ID
       * @default null
       */
      account: number | null;
      /**
       * Contacted Contacts
       * @description Number of contacts reached during the current period
       * @default null
       */
      contacted_contacts: number | null;
      /**
       * Conversation Count
       * @description Number of conversations that took place in the current period
       * @default null
       */
      conversation_count: number | null;
      /**
       * Delivered Message Count
       * @description Number of messages delivered in the current period
       * @default null
       */
      delivered_message_count: number | null;
      /**
       * Exchanged Messages
       * @description Total number of exchanged messages in the current period
       * @default null
       */
      exchanged_messages: number | null;
      /**
       * Free Message Count
       * @description Number of free messages sent in the current period
       * @default null
       */
      free_message_count: number | null;
      /**
       * Incoming Message Count
       * @description Number of incoming messages received in the current period
       * @default null
       */
      incoming_message_count: number | null;
      /**
       * Period Start
       * @description Start date of the reporting period (YYYY-MM-DD)
       * @default null
       */
      period_start: string | null;
      /**
       * Read Message Count
       * @description Number of messages read in the current period
       * @default null
       */
      read_message_count: number | null;
      /**
       * Sent Message Count
       * @description Number of messages sent in the current period
       * @default null
       */
      sent_message_count: number | null;
      /**
       * Template Message Count
       * @description Number of template messages sent in the current period
       * @default null
       */
      template_message_count: number | null;
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
 * Type of SPOKI's SPOKI_LIST_AGENCIES tool input.
 */
type SPOKI_LIST_AGENCIES_INPUT = object;

/**
 * Type of SPOKI's SPOKI_LIST_AGENCIES tool output.
 */
type SPOKI_LIST_AGENCIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account
       * @description Account ID associated with this agency
       */
      account: number;
      /**
       * Id
       * @description Unique identifier of the agency
       */
      id: number;
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
 * Type of SPOKI's SPOKI_LIST_AUTOMATIONS tool input.
 */
type SPOKI_LIST_AUTOMATIONS_INPUT = {
  /**
   * Is Active
   * @description Filter by active (true) or inactive (false) automations
   * @default null
   */
  is_active: boolean | null;
  /**
   * Search
   * @description Search automations by name or webhook link
   * @default null
   */
  search: string | null;
  /**
   * Webhook Platform
   * @description Filter automations by webhook integration platform
   * @default null
   * @enum {string|null}
   */
  webhook_platform: "Api" | "Active Campaign" | "Woocommerce" | "Magento" | "Prestashop" | "Shopify" | "Zapier" | "Qapla'" | "BrainLead" | "HubSpot" | "Klaviyo" | "Zoho" | "Sendinblue" | "WPNotif" | "Connectif" | "IFTTT" | "Pipedrive" | "Meta" | "Zendesk" | null;
};

/**
 * Type of SPOKI's SPOKI_LIST_AUTOMATIONS tool output.
 */
type SPOKI_LIST_AUTOMATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of automations
       */
      count: number;
      /**
       * Next
       * @description URL for next page of results
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL for previous page of results
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of automation objects
       */
      results: {
          /**
           * Created Datetime
           * @description Creation timestamp
           */
          created_datetime: string;
          /**
           * First Message Text
           * @description Initial message text of the automation
           * @default null
           */
          first_message_text: string | null;
          /**
           * Id
           * @description Unique automation ID
           */
          id: number;
          /**
           * Is Active
           * @description Automation active status
           */
          is_active: boolean;
          /**
           * Name
           * @description Automation name
           */
          name: string;
          /**
           * Updated Datetime
           * @description Last update timestamp
           */
          updated_datetime: string;
          /**
           * Webhook Set
           * @description List of webhook endpoints associated
           */
          webhook_set: {
              /**
               * Is Active
               * @description Whether webhook is active
               */
              is_active: boolean;
              /**
               * Link
               * @description Webhook callback URL
               */
              link: string;
              /**
               * Secret
               * @description Webhook secret token
               */
              secret: string;
              /**
               * Uuid
               * @description Webhook identifier UUID
               */
              uuid: string;
          }[];
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
 * Type of SPOKI's SPOKI_LIST_CAMPAIGNS tool input.
 */
type SPOKI_LIST_CAMPAIGNS_INPUT = {
  /**
   * Scheduled Datetime Gte
   * @description Only include campaigns scheduled on or after this timestamp (ISO 8601).
   * @default null
   */
  scheduled_datetime_gte: string | null;
  /**
   * Scheduled Datetime Lte
   * @description Only include campaigns scheduled on or before this timestamp (ISO 8601).
   * @default null
   */
  scheduled_datetime_lte: string | null;
};

/**
 * Type of SPOKI's SPOKI_LIST_CAMPAIGNS tool output.
 */
type SPOKI_LIST_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total count of matched campaigns.
       */
      count: number;
      /**
       * Next
       * @description URL to next page of results, if any.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to previous page of results, if any.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of campaign records.
       */
      results: {
          /**
           * Automation
           * @description Details of the associated automation.
           */
          automation: {
              /**
               * Id
               * @description Automation ID associated with the campaign.
               */
              id: number;
              /**
               * Name
               * @description Automation name.
               */
              name: string;
          };
          /** Automation Completed */
          automation_completed: number;
          /** Automation Failed */
          automation_failed: number;
          /** Automation Interacted With */
          automation_interacted_with: number;
          /** Automation Started */
          automation_started: number;
          /** Automation Valid Failed */
          automation_valid_failed: number;
          /**
           * Contacts Count
           * @description Total number of contacts.
           */
          contacts_count: number;
          /**
           * Created Datetime
           * @description When this campaign was created (ISO 8601).
           */
          created_datetime: string;
          /**
           * Id
           * @description Campaign unique ID.
           */
          id: number;
          /**
           * Lists
           * @description Lists associated with the campaign.
           */
          lists: {
              /**
               * Color
               * @description List display color, if any.
               * @default null
               */
              color: string | null;
              /**
               * Contacts Count
               * @description Number of contacts in this list.
               */
              contacts_count: number;
              /**
               * Created Datetime
               * @description When this list was created (ISO 8601).
               */
              created_datetime: string;
              /**
               * Id
               * @description List ID targeted by the campaign.
               */
              id: number;
              /**
               * Name
               * @description List name.
               */
              name: string;
          }[];
          /** Messages Failed */
          messages_failed: number;
          /** Messages Read */
          messages_read: number;
          /** Messages Received */
          messages_received: number;
          /** Messages Sent */
          messages_sent: number;
          /**
           * Name
           * @description Campaign name.
           */
          name: string;
          /**
           * Other Contacts
           * @description Additional contact IDs if specified.
           */
          other_contacts: number[];
          /**
           * Scheduled Datetime
           * @description Datetime when campaign is scheduled (ISO 8601).
           */
          scheduled_datetime: string;
          /**
           * Status
           * @description Campaign status: Draft, Scheduled, Processing, or Completed.
           */
          status: string;
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
 * Type of SPOKI's SPOKI_LIST_CONTACTS tool input.
 */
type SPOKI_LIST_CONTACTS_INPUT = {
  /**
   * Email
   * @description Filter by email (exact match)
   * @default null
   */
  email: string | null;
  /**
   * First Name
   * @description Filter by first name
   * @default null
   */
  first_name: string | null;
  /**
   * Is Blocked
   * @description Filter blocked contacts only when true
   * @default null
   */
  is_blocked: boolean | null;
  /**
   * Language
   * @description Filter by language code
   * @default null
   */
  language: string | null;
  /**
   * Last Name
   * @description Filter by last name
   * @default null
   */
  last_name: string | null;
  /**
   * Phone
   * @description Filter by phone (exact match)
   * @default null
   */
  phone: string | null;
  /**
   * Search
   * @description Search query for phone, email, first_name, last_name, language, or notes
   * @default null
   */
  search: string | null;
  /**
   * Tag
   * @description Filter by tag ID
   * @default null
   */
  tag: number | null;
};

/**
 * Type of SPOKI's SPOKI_LIST_CONTACTS tool output.
 */
type SPOKI_LIST_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of contacts matching the filters
       */
      count: number;
      /**
       * Next
       * @description URL for the next page of results
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL for the previous page of results
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of contact objects
       */
      results: {
          /**
           * Chat Link
           * @description URL to open the chat with the contact
           */
          chat_link: string;
          /**
           * Contactfield Set
           * @description List of custom fields associated with the contact
           */
          contactfield_set: {
              /**
               * Field
               * @description Custom field ID
               */
              field: number;
              /**
               * Id
               * @description Unique identifier of the contact field
               */
              id: number;
              /**
               * Value
               * @description Value of the custom field
               */
              value: string;
              /**
               * Value Datetime
               * @description Datetime value of the custom field if applicable
               * @default null
               */
              value_datetime: string | null;
              /**
               * Visual Code
               * @description Template placeholder code of the field
               */
              visual_code: string;
          }[];
          /**
           * Created Datetime
           * @description Timestamp when the contact was created
           */
          created_datetime: string;
          /**
           * Email
           * @description Email address of the contact
           * @default null
           */
          email: string | null;
          /**
           * First Name
           * @description First name of the contact
           */
          first_name: string;
          /**
           * Has Invalid Phone
           * @description Indicates if the phone number is invalid
           */
          has_invalid_phone: boolean;
          /**
           * Id
           * @description Unique identifier of the contact
           */
          id: number;
          /**
           * Language
           * @description Language code of the contact
           */
          language: string;
          /**
           * Last Name
           * @description Last name of the contact
           */
          last_name: string;
          /**
           * List Set
           * @description List of lists the contact belongs to
           */
          list_set: {
              /**
               * Color
               * @description Color code of the list
               * @default null
               */
              color: string | null;
              /**
               * Contacts Count
               * @description Number of contacts in the list
               */
              contacts_count: number;
              /**
               * Created Datetime
               * @description Timestamp when the list was created
               */
              created_datetime: string;
              /**
               * Id
               * @description Unique identifier of the list
               */
              id: number;
              /**
               * Name
               * @description Name of the list
               */
              name: string;
          }[];
          /**
           * Phone
           * @description Phone number of the contact in international format
           */
          phone: string;
          /**
           * Tag Set
           * @description List of tags assigned to the contact
           */
          tag_set: {
              /**
               * Color
               * @description Color code of the tag
               * @default null
               */
              color: string | null;
              /**
               * Id
               * @description Unique identifier of the tag
               */
              id: number;
              /**
               * Name
               * @description Name of the tag
               */
              name: string;
              /**
               * Order
               * @description Order index of the tag
               */
              order: number;
          }[];
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
 * Type of SPOKI's SPOKI_LIST_TAGS tool input.
 */
type SPOKI_LIST_TAGS_INPUT = object;

/**
 * Type of SPOKI's SPOKI_LIST_TAGS tool output.
 */
type SPOKI_LIST_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of tags
       */
      count: number;
      /**
       * Next
       * @description URL for next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL for previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of tag objects
       */
      results: {
          /**
           * Color
           * @description Color code of the tag, e.g. #16d46d
           */
          color: string;
          /**
           * Id
           * @description Unique identifier of the tag
           */
          id: number;
          /**
           * Name
           * @description Name of the tag
           */
          name: string;
          /**
           * Order
           * @description Order index of the tag
           */
          order: number;
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
 * Type of SPOKI's SPOKI_LIST_TEMPLATES tool input.
 */
type SPOKI_LIST_TEMPLATES_INPUT = {
  /**
   * Search
   * @description Search term to filter templates by id, name, or text
   * @default null
   */
  search: string | null;
};

/**
 * Type of SPOKI's SPOKI_LIST_TEMPLATES tool output.
 */
type SPOKI_LIST_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of templates matching the query
       */
      count: number;
      /**
       * Next
       * @description URL of next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL of previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description Templates returned in this page
       */
      results: {
          /**
           * Category
           * @description Template category, e.g., ACCOUNT_UPDATE
           */
          category: string;
          /**
           * Customfield Set
           * @description Placeholder codes used in the template body
           */
          customfield_set?: string[];
          /**
           * Id
           * @description Template identifier
           */
          id: number;
          /**
           * Is Approved
           * @description Whether the template is approved
           */
          is_approved: boolean;
          /**
           * Is Favorite
           * @description Whether the template is marked as favorite
           */
          is_favorite: boolean;
          /**
           * Name
           * @description Template name
           */
          name: string;
          /**
           * Templatelocalization Set
           * @description List of localizations for supported languages
           */
          templatelocalization_set: {
              /**
               * Body
               * @description Body component of the template
               */
              body: {
                  /**
                   * Component Type
                   * @description Component type, e.g., body, header, footer
                   */
                  component_type: string;
                  /**
                   * Format
                   * @description Format of the component, e.g., text, image
                   * @default null
                   */
                  format: string | null;
                  /**
                   * Text
                   * @description Text content of the component if applicable
                   * @default null
                   */
                  text: string | null;
              };
              /**
               * Button Set
               * @description Buttons defined in this localization
               */
              button_set?: {
                  /**
                   * Button Type
                   * @description Type of button, e.g., quick_reply, url, call
                   */
                  button_type: string;
                  /**
                   * Order
                   * @description Order index of the button in the template
                   */
                  order: number;
                  /**
                   * Phone Number
                   * @description Phone number for call buttons
                   * @default null
                   */
                  phone_number: string | null;
                  /**
                   * Text
                   * @description Display text of the button
                   */
                  text: string;
                  /**
                   * Url
                   * @description URL for URL buttons
                   * @default null
                   */
                  url: string | null;
              }[];
              /**
               * Default Header Media
               * @description URL of default header media if present
               * @default null
               */
              default_header_media: string | null;
              /**
               * TemplateComponent
               * @description Footer component if any
               * @default null
               */
              footer: {
                  /**
                   * Component Type
                   * @description Component type, e.g., body, header, footer
                   */
                  component_type: string;
                  /**
                   * Format
                   * @description Format of the component, e.g., text, image
                   * @default null
                   */
                  format: string | null;
                  /**
                   * Text
                   * @description Text content of the component if applicable
                   * @default null
                   */
                  text: string | null;
              } | null;
              /**
               * TemplateComponent
               * @description Header component if any
               * @default null
               */
              header: {
                  /**
                   * Component Type
                   * @description Component type, e.g., body, header, footer
                   */
                  component_type: string;
                  /**
                   * Format
                   * @description Format of the component, e.g., text, image
                   * @default null
                   */
                  format: string | null;
                  /**
                   * Text
                   * @description Text content of the component if applicable
                   * @default null
                   */
                  text: string | null;
              } | null;
              /**
               * Language
               * @description Language code of this localization, e.g., 'en', 'it'
               */
              language: string;
              /**
               * Rejection Reason
               * @description Reason for rejection if status is REJECTED
               * @default null
               */
              rejection_reason: string | null;
              /**
               * Status
               * @description Approval status: APPROVED, PENDING, or REJECTED
               */
              status: string;
          }[];
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
 * Type of SPOKI's SPOKI_LIST_TICKETS tool input.
 */
type SPOKI_LIST_TICKETS_INPUT = {
  /**
   * Order
   * @description Order of sorting: 'asc' or 'desc'.
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Page
   * @description Page number for pagination, must be >= 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of tickets per page, must be >= 1.
   * @default null
   */
  per_page: number | null;
  /**
   * Sort By
   * @description Field to sort by, e.g., created_datetime.
   * @default null
   */
  sort_by: string | null;
  /**
   * Status
   * @description Filter tickets by status, e.g., OPEN, PENDING, RESOLVED, or CLOSED.
   * @default null
   */
  status: string | null;
};

/**
 * Type of SPOKI's SPOKI_LIST_TICKETS tool output.
 */
type SPOKI_LIST_TICKETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of tickets matching the filters
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of ticket objects returned for this page
       */
      results: {
          /**
           * Closed Datetime
           * @description Timestamp when the ticket was closed (ISO 8601)
           * @default null
           */
          closed_datetime: string | null;
          /**
           * Contact
           * @description Summary of the contact associated with this ticket
           */
          contact: {
              /**
               * Chat Link
               * @description URL to open the chat with the contact
               */
              chat_link: string;
              /**
               * Email
               * @description Email address of the contact
               * @default null
               */
              email: string | null;
              /**
               * First Name
               * @description First name of the contact
               */
              first_name: string;
              /**
               * Has Invalid Phone
               * @description Indicates if the phone number is invalid
               */
              has_invalid_phone: boolean;
              /**
               * Id
               * @description Unique identifier of the contact
               */
              id: number;
              /**
               * Language
               * @description Language code of the contact, e.g., 'en'
               */
              language: string;
              /**
               * Last Name
               * @description Last name of the contact
               */
              last_name: string;
              /**
               * Phone
               * @description Phone number of the contact in international format
               */
              phone: string;
              /**
               * Role Set
               * @description List of role assignments for the contact
               */
              role_set: {
                  /**
                   * Id
                   * @description Unique identifier of the role assignment
                   */
                  id: number;
                  /**
                   * Role
                   * @description Role name assigned to the user on this ticket
                   */
                  role: string;
                  /**
                   * User
                   * @description User assigned to the ticket
                   */
                  user: {
                      /**
                       * Email
                       * @description Email address of the user
                       */
                      email: string;
                      /**
                       * Firstname
                       * @description First name of the user
                       */
                      firstname: string;
                      /**
                       * Id
                       * @description Unique identifier of the user
                       */
                      id: number;
                      /**
                       * Image
                       * @description URL of the user profile image
                       * @default null
                       */
                      image: string | null;
                      /**
                       * Is Service
                       * @description Indicates if the user is a service user
                       */
                      is_service: boolean;
                      /**
                       * Surname
                       * @description Surname of the user
                       */
                      surname: string;
                      /**
                       * Uid
                       * @description Unique user identifier (UID)
                       */
                      uid: string;
                  };
              }[];
          };
          /**
           * Created Datetime
           * @description Timestamp when the ticket was created (ISO 8601)
           */
          created_datetime: string;
          /**
           * Description
           * @description Description or details of the ticket
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the ticket
           */
          id: number;
          /**
           * Owner
           * @description User who owns or is responsible for the ticket
           */
          owner: {
              /**
               * Email
               * @description Email address of the user
               */
              email: string;
              /**
               * Firstname
               * @description First name of the user
               */
              firstname: string;
              /**
               * Id
               * @description Unique identifier of the user
               */
              id: number;
              /**
               * Image
               * @description URL of the user profile image
               * @default null
               */
              image: string | null;
              /**
               * Is Service
               * @description Indicates if the user is a service user
               */
              is_service: boolean;
              /**
               * Surname
               * @description Surname of the user
               */
              surname: string;
              /**
               * Uid
               * @description Unique user identifier (UID)
               */
              uid: string;
          };
          /**
           * Priority
           * @description Priority of the ticket, e.g., Low, Medium, High
           */
          priority: string;
          /**
           * Reference
           * @description Custom reference string for the ticket
           * @default null
           */
          reference: string | null;
          /**
           * Status
           * @description Current status of the ticket, e.g., Open or Closed
           */
          status: string;
          /**
           * Title
           * @description Title of the ticket
           */
          title: string;
          /**
           * Updated Datetime
           * @description Timestamp when the ticket was last updated (ISO 8601)
           */
          updated_datetime: string;
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
 * Type of SPOKI's SPOKI_RETRIEVE_ACCOUNT tool input.
 */
type SPOKI_RETRIEVE_ACCOUNT_INPUT = {
  /**
   * Account Id
   * @description Unique identifier of the account to retrieve
   */
  account_id?: number;
};

/**
 * Type of SPOKI's SPOKI_RETRIEVE_ACCOUNT tool output.
 */
type SPOKI_RETRIEVE_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Type
       * @description Account type: 1=Sandbox, 2=Standard, 4=Agency
       */
      account_type: number;
      /**
       * Contacted In 24H
       * @description Contacts in last 24h
       */
      contacted_in_24h: number;
      /**
       * Contacted In 7D
       * @description Contacts in last 7 days
       */
      contacted_in_7d: number;
      /**
       * Country Code
       * @description Country code of the account
       */
      country_code: string;
      /**
       * Current Credit
       * @description Current credit balance
       */
      current_credit: number;
      /**
       * Daily Limit
       * @description Daily message limit
       */
      daily_limit: number;
      /**
       * Default Country Code
       * @description Default country code
       */
      default_country_code: string;
      /**
       * Default Language
       * @description Default language
       */
      default_language: string;
      /**
       * Default Prefix
       * @description Default phone prefix
       */
      default_prefix: string;
      /**
       * Default Pricing Delta
       * @description Default pricing delta
       */
      default_pricing_delta: number;
      /**
       * Estimated Available Conversations
       * @description Estimated available conversations
       */
      estimated_available_conversations: number;
      /**
       * Has Low Credit Alert
       * @description Low credit alert enabled
       */
      has_low_credit_alert: boolean;
      /**
       * Has Official Verification
       * @description Whether it is officially verified
       */
      has_official_verification: boolean;
      /**
       * Id
       * @description Unique account identifier
       */
      id: number;
      /**
       * Is Active
       * @description Active status of the account
       */
      is_active: boolean;
      /**
       * Low Credit Threshold
       * @description Low credit threshold
       */
      low_credit_threshold: number;
      /**
       * Name
       * @description Name of the account
       */
      name: string;
      /**
       * Phone
       * @description Associated phone number
       */
      phone: string;
      /**
       * Phone Status
       * @description Phone status
       */
      phone_status: string;
      /**
       * Quality Reasons
       * @description Reasons for the quality score
       * @default null
       */
      quality_reasons: string | null;
      /**
       * Quality Score
       * @description Quality score of the account
       */
      quality_score: number;
      /**
       * Status
       * @description Account status
       */
      status: string;
      /**
       * Timezone
       * @description Timezone of the account
       */
      timezone: string;
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
 * Type of SPOKI's SPOKI_RETRIEVE_AUTOMATION tool input.
 */
type SPOKI_RETRIEVE_AUTOMATION_INPUT = {
  /**
   * Id
   * @description ID of the automation to retrieve
   */
  id?: number;
};

/**
 * Type of SPOKI's SPOKI_RETRIEVE_AUTOMATION tool output.
 */
type SPOKI_RETRIEVE_AUTOMATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created Datetime
       * @description Creation timestamp in ISO 8601 format
       */
      created_datetime: string;
      /**
       * First Message Text
       * @description First message text, if any
       * @default null
       */
      first_message_text: string | null;
      /**
       * Id
       * @description Automation ID
       */
      id: number;
      /**
       * Is Active
       * @description Whether the automation is active
       */
      is_active: boolean;
      /**
       * Name
       * @description Automation name
       */
      name: string;
      /**
       * Updated Datetime
       * @description Last updated timestamp in ISO 8601 format
       */
      updated_datetime: string;
      /**
       * Webhook Set
       * @description List of webhooks configured for this automation
       */
      webhook_set: {
          /**
           * Is Active
           * @description Whether this webhook is active
           */
          is_active: boolean;
          /**
           * Link
           * @description Webhook URL
           */
          link: string;
          /**
           * Secret
           * @description Webhook secret token
           */
          secret: string;
          /**
           * Uuid
           * @description Webhook UUID
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
 * Type of SPOKI's SPOKI_RETRIEVE_CONTACT tool input.
 */
type SPOKI_RETRIEVE_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description Unique identifier of the contact to retrieve
   */
  contact_id?: number;
};

/**
 * Type of SPOKI's SPOKI_RETRIEVE_CONTACT tool output.
 */
type SPOKI_RETRIEVE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Chat Link
       * @description URL to open the contact's chat in Spoki
       */
      chat_link: string;
      /**
       * Contactfield Set
       * @description List of custom fields and their values
       */
      contactfield_set: {
          /**
           * Field
           * @description ID of the custom field definition
           */
          field: number;
          /**
           * Id
           * @description Unique identifier of the contact field entry
           */
          id: number;
          /**
           * Value
           * @description Value stored in the custom field
           */
          value: string;
          /**
           * Value Datetime
           * @description Datetime value if the field is date/time, ISO 8601 format
           * @default null
           */
          value_datetime: string | null;
          /**
           * Visual Code
           * @description Placeholder code for the field, e.g., %%WEBSITE%%
           */
          visual_code: string;
      }[];
      /**
       * Created Datetime
       * @description Timestamp when the contact was created, ISO 8601
       */
      created_datetime: string;
      /**
       * Email
       * @description Contact's email address, if available
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description Contact's first name
       */
      first_name: string;
      /**
       * Has Invalid Phone
       * @description Indicates if the stored phone number is invalid
       */
      has_invalid_phone: boolean;
      /**
       * Id
       * @description Contact ID
       */
      id: number;
      /**
       * Language
       * @description Contact's language code, e.g., 'en'
       */
      language: string;
      /**
       * Last Name
       * @description Contact's last name
       */
      last_name: string;
      /**
       * List Set
       * @description Lists that the contact belongs to
       */
      list_set: {
          /**
           * Color
           * @description Hex color for the list, if any
           * @default null
           */
          color: string | null;
          /**
           * Contacts Count
           * @description Number of contacts in this list
           */
          contacts_count: number;
          /**
           * Created Datetime
           * @description Creation timestamp in ISO 8601 format
           */
          created_datetime: string;
          /**
           * Id
           * @description Unique list identifier
           */
          id: number;
          /**
           * Name
           * @description Name of the contact list
           */
          name: string;
      }[];
      /**
       * Phone
       * @description Contact's phone number in E.164 format
       */
      phone: string;
      /**
       * Tag Set
       * @description List of tags assigned to the contact
       */
      tag_set: {
          /**
           * Color
           * @description Hex color code for the tag
           */
          color: string;
          /**
           * Id
           * @description Unique tag identifier
           */
          id: number;
          /**
           * Name
           * @description Name of the tag
           */
          name: string;
          /**
           * Order
           * @description Ordering index for display purposes
           */
          order: number;
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
 * Type of SPOKI's SPOKI_RETRIEVE_TAG tool input.
 */
type SPOKI_RETRIEVE_TAG_INPUT = {
  /**
   * Id
   * @description ID of the tag to retrieve
   */
  id?: number;
};

/**
 * Type of SPOKI's SPOKI_RETRIEVE_TAG tool output.
 */
type SPOKI_RETRIEVE_TAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Color
       * @description Hex color code of the tag
       * @default null
       */
      color: string | null;
      /**
       * Id
       * @description Unique identifier of the tag
       * @default null
       */
      id: number | null;
      /**
       * Name
       * @description Name of the tag
       * @default null
       */
      name: string | null;
      /**
       * Order
       * @description Display order of the tag
       * @default null
       */
      order: number | null;
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
 * Type of SPOKI's SPOKI_RETRIEVE_TEMPLATE tool input.
 */
type SPOKI_RETRIEVE_TEMPLATE_INPUT = {
  /**
   * Template Id
   * @description Unique identifier of the template to retrieve
   */
  template_id?: number;
};

/**
 * Type of SPOKI's SPOKI_RETRIEVE_TEMPLATE tool output.
 */
type SPOKI_RETRIEVE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Category
       * @description Template category, e.g., 'ACCOUNT_UPDATE'
       */
      category: string;
      /**
       * Customfield Set
       * @description List of dynamic field codes used in the template
       */
      customfield_set: string[];
      /**
       * Id
       * @description Template unique identifier
       */
      id: number;
      /**
       * Is Approved
       * @description Whether the template is approved
       */
      is_approved: boolean;
      /**
       * Is Favorite
       * @description Whether the template is marked as favorite
       */
      is_favorite: boolean;
      /**
       * Name
       * @description Template name
       */
      name: string;
      /**
       * Templatelocalization Set
       * @description Localizations available for this template
       */
      templatelocalization_set: {
          /**
           * Body
           * @description Body component of the template
           */
          body: {
              /**
               * Component Type
               * @description Type of the component, e.g., 'body'
               */
              component_type: string;
              /**
               * Format
               * @description Format of the component, e.g., 'text'
               * @default null
               */
              format: string | null;
              /**
               * Text
               * @description Text content of the component
               */
              text: string;
          };
          /**
           * Button Set
           * @description List of buttons defined for this localization
           */
          button_set: {
              /**
               * Button Type
               * @description Type of button, e.g., 'quick_reply'
               */
              button_type: string;
              /**
               * Order
               * @description Order index of the button
               */
              order: number;
              /**
               * Phone Number
               * @description Phone number for call button, if applicable
               * @default null
               */
              phone_number: string | null;
              /**
               * Text
               * @description Text displayed on the button
               */
              text: string;
              /**
               * Url
               * @description URL for link button, if applicable
               * @default null
               */
              url: string | null;
          }[];
          /**
           * Media
           * @description Media information for dynamic headers.
           * @default null
           */
          default_header_media: {
              /**
               * Filename
               * @description Filename of the media resource
               */
              filename: string;
              /**
               * Url
               * @description Media URL resource
               */
              url: string;
          } | null;
          /**
           * TemplateComponent
           * @description Component for template parts such as header, body, footer.
           * @default null
           */
          footer: {
              /**
               * Component Type
               * @description Type of the component, e.g., 'body'
               */
              component_type: string;
              /**
               * Format
               * @description Format of the component, e.g., 'text'
               * @default null
               */
              format: string | null;
              /**
               * Text
               * @description Text content of the component
               */
              text: string;
          } | null;
          /**
           * TemplateComponent
           * @description Component for template parts such as header, body, footer.
           * @default null
           */
          header: {
              /**
               * Component Type
               * @description Type of the component, e.g., 'body'
               */
              component_type: string;
              /**
               * Format
               * @description Format of the component, e.g., 'text'
               * @default null
               */
              format: string | null;
              /**
               * Text
               * @description Text content of the component
               */
              text: string;
          } | null;
          /**
           * Language
           * @description Language code of this localization, e.g., 'it'
           */
          language: string;
          /**
           * Rejection Reason
           * @description Reason for rejection, if any
           * @default null
           */
          rejection_reason: string | null;
          /**
           * Status
           * @description Approval status of this localization
           */
          status: string;
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
 * Type of SPOKI's SPOKI_SPOKI_LIST_CUSTOM_FIELDS tool input.
 */
type SPOKI_SPOKI_LIST_CUSTOM_FIELDS_INPUT = {
  /**
   * Code
   * @description Filter custom fields whose code contains this string
   * @default null
   */
  code: string | null;
  /**
   * Label
   * @description Filter custom fields whose label contains this string
   * @default null
   */
  label: string | null;
};

/**
 * Type of SPOKI's SPOKI_SPOKI_LIST_CUSTOM_FIELDS tool output.
 */
type SPOKI_SPOKI_LIST_CUSTOM_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Custom Fields
       * @description List of matching custom field definitions
       */
      custom_fields: {
          /**
           * Code
           * @description Machine key/code of the custom field
           */
          code: string;
          /**
           * Example
           * @description Example value for this custom field
           * @default null
           */
          example: string | null;
          /**
           * Field Type
           * @description Type of field: 1=TEXT, 2=DATE, 3=DATETIME
           */
          field_type: number;
          /**
           * Label
           * @description Human-readable name of the custom field
           */
          label: string;
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
 * Type of SPOKI's SPOKI_SPOKI_LIST_PARTNERS tool input.
 */
type SPOKI_SPOKI_LIST_PARTNERS_INPUT = object;

/**
 * Type of SPOKI's SPOKI_SPOKI_LIST_PARTNERS tool output.
 */
type SPOKI_SPOKI_LIST_PARTNERS_OUTPUT = {
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
 * Type of SPOKI's SPOKI_SPOKI_LIST_TAGS tool input.
 */
type SPOKI_SPOKI_LIST_TAGS_INPUT = object;

/**
 * Type of SPOKI's SPOKI_SPOKI_LIST_TAGS tool output.
 */
type SPOKI_SPOKI_LIST_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of tags
       */
      count: number;
      /**
       * Next
       * @description URL for next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL for previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of tag objects
       */
      results: {
          /**
           * Color
           * @description Color code of the tag, e.g. #16d46d
           */
          color: string;
          /**
           * Id
           * @description Unique identifier of the tag
           */
          id: number;
          /**
           * Name
           * @description Name of the tag
           */
          name: string;
          /**
           * Order
           * @description Order index of the tag
           */
          order: number;
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
 * Type of SPOKI's SPOKI_SPOKI_LIST_TEMPLATES tool input.
 */
type SPOKI_SPOKI_LIST_TEMPLATES_INPUT = {
  /**
   * Search
   * @description Filter templates by id, name, or text
   * @default null
   */
  search: string | null;
};

/**
 * Type of SPOKI's SPOKI_SPOKI_LIST_TEMPLATES tool output.
 */
type SPOKI_SPOKI_LIST_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of templates matching the query
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of templates returned by the endpoint
       */
      results: {
          /**
           * Category
           * @description Category of the template, e.g., ACCOUNT_UPDATE
           */
          category: string;
          /**
           * Customfield Set
           * @description List of placeholder codes used in the template body
           */
          customfield_set?: string[];
          /**
           * Id
           * @description Unique identifier of the template
           */
          id: number;
          /**
           * Is Approved
           * @description Whether the template is approved
           */
          is_approved: boolean;
          /**
           * Is Favorite
           * @description Whether the template is marked as favorite
           */
          is_favorite: boolean;
          /**
           * Name
           * @description Name of the template
           */
          name: string;
          /**
           * Templatelocalization Set
           * @description Localizations details for each supported language
           */
          templatelocalization_set: {
              /**
               * Body
               * @description Body component of the template
               */
              body: {
                  /**
                   * Component Type
                   * @description The type of the component, e.g., body, header, footer
                   */
                  component_type: string;
                  /**
                   * Format
                   * @description Format of the component, e.g., text, image
                   * @default null
                   */
                  format: string | null;
                  /**
                   * Text
                   * @description Text content of the component if applicable
                   * @default null
                   */
                  text: string | null;
              };
              /**
               * Button Set
               * @description List of buttons defined in this localization
               */
              button_set?: {
                  /**
                   * Button Type
                   * @description Type of the button, e.g., quick_reply, url, call
                   */
                  button_type: string;
                  /**
                   * Order
                   * @description Order index of the button in the template
                   */
                  order: number;
                  /**
                   * Phone Number
                   * @description Phone number for call buttons, if present
                   * @default null
                   */
                  phone_number: string | null;
                  /**
                   * Text
                   * @description Label text of the button
                   */
                  text: string;
              }[];
              /**
               * TemplateMedia
               * @description Media info of the default header media for this localization, if any
               * @default null
               */
              default_header_media: {
                  /**
                   * Content Type
                   * @description Content type of the media file, e.g., image/png, video/mp4
                   */
                  content_type: string;
                  /**
                   * Media
                   * @description URL of the media file
                   */
                  media: string;
                  /**
                   * Title
                   * @description Title of the media file
                   */
                  title: string;
              } | null;
              /**
               * TemplateComponent
               * @description Footer component of the template, if any
               * @default null
               */
              footer: {
                  /**
                   * Component Type
                   * @description The type of the component, e.g., body, header, footer
                   */
                  component_type: string;
                  /**
                   * Format
                   * @description Format of the component, e.g., text, image
                   * @default null
                   */
                  format: string | null;
                  /**
                   * Text
                   * @description Text content of the component if applicable
                   * @default null
                   */
                  text: string | null;
              } | null;
              /**
               * TemplateComponent
               * @description Header component of the template, if any
               * @default null
               */
              header: {
                  /**
                   * Component Type
                   * @description The type of the component, e.g., body, header, footer
                   */
                  component_type: string;
                  /**
                   * Format
                   * @description Format of the component, e.g., text, image
                   * @default null
                   */
                  format: string | null;
                  /**
                   * Text
                   * @description Text content of the component if applicable
                   * @default null
                   */
                  text: string | null;
              } | null;
              /**
               * Language
               * @description Language code of the template localization
               */
              language: string;
              /**
               * Rejection Reason
               * @description Reason for rejection if status is REJECTED
               * @default null
               */
              rejection_reason: string | null;
              /**
               * Status
               * @description Approval status of this localization, e.g., APPROVED, PENDING, REJECTED
               */
              status: string;
          }[];
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
 * Type of SPOKI's SPOKI_SPOKI_RETRIEVE_CUSTOM_FIELD tool input.
 */
type SPOKI_SPOKI_RETRIEVE_CUSTOM_FIELD_INPUT = {
  /**
   * Custom Field Id
   * @description The unique identifier of the custom field to retrieve
   */
  custom_field_id?: number;
};

/**
 * Type of SPOKI's SPOKI_SPOKI_RETRIEVE_CUSTOM_FIELD tool output.
 */
type SPOKI_SPOKI_RETRIEVE_CUSTOM_FIELD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description The programmatic code used to reference the custom field
       */
      code: string;
      /**
       * Example
       * @description An example or default value for the custom field
       */
      example?: string;
      /**
       * Field Type
       * @description The type of the custom field: 1=TEXT, 2=DATE, 3=DATETIME
       * @enum {integer}
       */
      field_type: 1 | 2 | 3;
      /**
       * Id
       * @description The unique identifier of the custom field
       */
      id: number;
      /**
       * Label
       * @description The human-readable label of the custom field
       */
      label: string;
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
 * Type of SPOKI's SPOKI_UPDATE_CUSTOM_FIELD tool input.
 */
type SPOKI_UPDATE_CUSTOM_FIELD_INPUT = {
  /**
   * Custom Field Id
   * @description Unique identifier of the custom field to update
   */
  custom_field_id?: number;
  /**
   * Label
   * @description New display label of the custom field
   */
  label?: string;
};

/**
 * Type of SPOKI's SPOKI_UPDATE_CUSTOM_FIELD tool output.
 */
type SPOKI_UPDATE_CUSTOM_FIELD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Programmatic code used to reference the custom field
       */
      code: string;
      /**
       * Example
       * @description Example or default value for the custom field
       * @default null
       */
      example: string | null;
      /**
       * Field Type
       * @description Type of the custom field: 1=TEXT, 2=DATE, 3=DATETIME
       * @enum {integer}
       */
      field_type: 1 | 2 | 3;
      /**
       * Id
       * @description Unique identifier of the custom field
       */
      id: number;
      /**
       * Label
       * @description Human-readable label of the custom field
       */
      label: string;
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
 * Type map of all available tool input types for toolkit "SPOKI".
 */
export type SPOKI_TOOL_INPUTS = {
  CREATE_CUSTOM_FIELD: SPOKI_CREATE_CUSTOM_FIELD_INPUT
  CREATE_OR_UPDATE_CONTACT: SPOKI_CREATE_OR_UPDATE_CONTACT_INPUT
  DELETE_CONTACT: SPOKI_DELETE_CONTACT_INPUT
  GET_ACCOUNT_CURRENT_REPORT: SPOKI_GET_ACCOUNT_CURRENT_REPORT_INPUT
  LIST_AGENCIES: SPOKI_LIST_AGENCIES_INPUT
  LIST_AUTOMATIONS: SPOKI_LIST_AUTOMATIONS_INPUT
  LIST_CAMPAIGNS: SPOKI_LIST_CAMPAIGNS_INPUT
  LIST_CONTACTS: SPOKI_LIST_CONTACTS_INPUT
  LIST_TAGS: SPOKI_LIST_TAGS_INPUT
  LIST_TEMPLATES: SPOKI_LIST_TEMPLATES_INPUT
  LIST_TICKETS: SPOKI_LIST_TICKETS_INPUT
  RETRIEVE_ACCOUNT: SPOKI_RETRIEVE_ACCOUNT_INPUT
  RETRIEVE_AUTOMATION: SPOKI_RETRIEVE_AUTOMATION_INPUT
  RETRIEVE_CONTACT: SPOKI_RETRIEVE_CONTACT_INPUT
  RETRIEVE_TAG: SPOKI_RETRIEVE_TAG_INPUT
  RETRIEVE_TEMPLATE: SPOKI_RETRIEVE_TEMPLATE_INPUT
  SPOKI_LIST_CUSTOM_FIELDS: SPOKI_SPOKI_LIST_CUSTOM_FIELDS_INPUT
  SPOKI_LIST_PARTNERS: SPOKI_SPOKI_LIST_PARTNERS_INPUT
  SPOKI_LIST_TAGS: SPOKI_SPOKI_LIST_TAGS_INPUT
  SPOKI_LIST_TEMPLATES: SPOKI_SPOKI_LIST_TEMPLATES_INPUT
  SPOKI_RETRIEVE_CUSTOM_FIELD: SPOKI_SPOKI_RETRIEVE_CUSTOM_FIELD_INPUT
  UPDATE_CUSTOM_FIELD: SPOKI_UPDATE_CUSTOM_FIELD_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SPOKI".
 */
export type SPOKI_TOOL_OUTPUTS = {
  CREATE_CUSTOM_FIELD: SPOKI_CREATE_CUSTOM_FIELD_OUTPUT
  CREATE_OR_UPDATE_CONTACT: SPOKI_CREATE_OR_UPDATE_CONTACT_OUTPUT
  DELETE_CONTACT: SPOKI_DELETE_CONTACT_OUTPUT
  GET_ACCOUNT_CURRENT_REPORT: SPOKI_GET_ACCOUNT_CURRENT_REPORT_OUTPUT
  LIST_AGENCIES: SPOKI_LIST_AGENCIES_OUTPUT
  LIST_AUTOMATIONS: SPOKI_LIST_AUTOMATIONS_OUTPUT
  LIST_CAMPAIGNS: SPOKI_LIST_CAMPAIGNS_OUTPUT
  LIST_CONTACTS: SPOKI_LIST_CONTACTS_OUTPUT
  LIST_TAGS: SPOKI_LIST_TAGS_OUTPUT
  LIST_TEMPLATES: SPOKI_LIST_TEMPLATES_OUTPUT
  LIST_TICKETS: SPOKI_LIST_TICKETS_OUTPUT
  RETRIEVE_ACCOUNT: SPOKI_RETRIEVE_ACCOUNT_OUTPUT
  RETRIEVE_AUTOMATION: SPOKI_RETRIEVE_AUTOMATION_OUTPUT
  RETRIEVE_CONTACT: SPOKI_RETRIEVE_CONTACT_OUTPUT
  RETRIEVE_TAG: SPOKI_RETRIEVE_TAG_OUTPUT
  RETRIEVE_TEMPLATE: SPOKI_RETRIEVE_TEMPLATE_OUTPUT
  SPOKI_LIST_CUSTOM_FIELDS: SPOKI_SPOKI_LIST_CUSTOM_FIELDS_OUTPUT
  SPOKI_LIST_PARTNERS: SPOKI_SPOKI_LIST_PARTNERS_OUTPUT
  SPOKI_LIST_TAGS: SPOKI_SPOKI_LIST_TAGS_OUTPUT
  SPOKI_LIST_TEMPLATES: SPOKI_SPOKI_LIST_TEMPLATES_OUTPUT
  SPOKI_RETRIEVE_CUSTOM_FIELD: SPOKI_SPOKI_RETRIEVE_CUSTOM_FIELD_OUTPUT
  UPDATE_CUSTOM_FIELD: SPOKI_UPDATE_CUSTOM_FIELD_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SPOKI toolkit.
 */
export const SPOKI = {
  slug: "spoki",
  tools: {
    /**
     * Tool to create a new custom field. use when defining extra data points for contacts.
     */
    CREATE_CUSTOM_FIELD: "SPOKI_CREATE_CUSTOM_FIELD",
    /**
     * Tool to create or update a contact. use when you need to upsert a single contact record via the sync endpoint.
     */
    CREATE_OR_UPDATE_CONTACT: "SPOKI_CREATE_OR_UPDATE_CONTACT",
    /**
     * Tool to delete a specific contact. use after confirming the contact id. example prompt: "delete contact with id 1091234."
     */
    DELETE_CONTACT: "SPOKI_DELETE_CONTACT",
    /**
     * Tool to get the current report for a specified account. use when you need up-to-date metrics on messages and conversations for an account. note: result is cached for 30 minutes.
     */
    GET_ACCOUNT_CURRENT_REPORT: "SPOKI_GET_ACCOUNT_CURRENT_REPORT",
    /**
     * Tool to list all agencies accessible to the user. use when you need to retrieve all agencies for the authenticated account.
     */
    LIST_AGENCIES: "SPOKI_LIST_AGENCIES",
    /**
     * Tool to list, search, and filter automations. use after authenticating to retrieve available automations and apply optional search or platform filters.
     */
    LIST_AUTOMATIONS: "SPOKI_LIST_AUTOMATIONS",
    /**
     * Tool to list, search, and filter campaigns. use when you need to retrieve campaigns optionally filtered by scheduled datetime.
     */
    LIST_CAMPAIGNS: "SPOKI_LIST_CAMPAIGNS",
    /**
     * Tool to list, search, and filter contacts. use when you need to retrieve contacts with optional search and filters.
     */
    LIST_CONTACTS: "SPOKI_LIST_CONTACTS",
    /**
     * Tool to list, search, and filter tags. use when you need to fetch all tags for the account.
     */
    LIST_TAGS: "SPOKI_LIST_TAGS",
    /**
     * Tool to list, search, and filter whatsapp templates. use when you need to retrieve available templates, optionally filtering by keywords.
     */
    LIST_TEMPLATES: "SPOKI_LIST_TEMPLATES",
    /**
     * Tool to list, search, and filter tickets. use when you need to retrieve tickets with optional pagination and filters.
     */
    LIST_TICKETS: "SPOKI_LIST_TICKETS",
    /**
     * Tool to retrieve details of a specific account. use after confirming the account id is valid.
     */
    RETRIEVE_ACCOUNT: "SPOKI_RETRIEVE_ACCOUNT",
    /**
     * Tool to retrieve details of a specific automation. use after listing automations to fetch full details including webhooks and timestamps. example: retrieve automation with id 345016.
     */
    RETRIEVE_AUTOMATION: "SPOKI_RETRIEVE_AUTOMATION",
    /**
     * Tool to retrieve details of a specific contact. use when you have a contact id and need full profile details.
     */
    RETRIEVE_CONTACT: "SPOKI_RETRIEVE_CONTACT",
    /**
     * Tool to retrieve details of a specific tag. use when you need tag metadata by id.
     */
    RETRIEVE_TAG: "SPOKI_RETRIEVE_TAG",
    /**
     * Tool to retrieve details of a specific template. use after obtaining a template id.
     */
    RETRIEVE_TEMPLATE: "SPOKI_RETRIEVE_TEMPLATE",
    /**
     * Tool to list, search, and filter custom fields. use when you need to fetch available custom-field definitions by label or code.
     */
    SPOKI_LIST_CUSTOM_FIELDS: "SPOKI_SPOKI_LIST_CUSTOM_FIELDS",
    /**
     * Deprecated placeholder for spoki list partners action file
     */
    SPOKI_LIST_PARTNERS: "SPOKI_SPOKI_LIST_PARTNERS",
    /**
     * Tool to list, search, and filter tags. use when you need to fetch all tags for the account.
     */
    SPOKI_LIST_TAGS: "SPOKI_SPOKI_LIST_TAGS",
    /**
     * Tool to list, search, and filter whatsapp templates. use when you need to retrieve available templates, optionally filtering by keywords.
     */
    SPOKI_LIST_TEMPLATES: "SPOKI_SPOKI_LIST_TEMPLATES",
    /**
     * Tool to retrieve details of a specific custom field. use when you have a field id and need its metadata before using it in automations.
     */
    SPOKI_RETRIEVE_CUSTOM_FIELD: "SPOKI_SPOKI_RETRIEVE_CUSTOM_FIELD",
    /**
     * Tool to update a specific custom field. use after retrieving a field to change its label.
     */
    UPDATE_CUSTOM_FIELD: "SPOKI_UPDATE_CUSTOM_FIELD",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SPOKI".
 */
export type SPOKI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SPOKI".
 */
export type SPOKI_TRIGGER_EVENTS = {}
