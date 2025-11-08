// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of INSIGHTO_AI's INSIGHTO_AI_CREATE_INTENT tool input.
 */
type INSIGHTO_AI_CREATE_INTENT_INPUT = {
  /**
   * Attributes
   * @description Custom key/value attributes for this intent.
   */
  attributes?: {
      [key: string]: unknown;
  };
  /**
   * Description
   * @description Optional human-readable description for the intent.
   * @default null
   */
  description: string | null;
  /**
   * Intent Type
   * @description Type of the intent; defaults to 'user'.
   * @default user
   */
  intent_type: string | null;
  /**
   * Is Active
   * @description Whether the intent is active; defaults to true.
   * @default true
   */
  is_active: boolean | null;
  /**
   * Name
   * @description Name of the intent to create.
   */
  name?: string;
};

/**
 * Type of INSIGHTO_AI's INSIGHTO_AI_CREATE_INTENT tool output.
 */
type INSIGHTO_AI_CREATE_INTENT_OUTPUT = {
  /**
   * Data
   * @description Created intent details.
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of the intent.
       */
      attributes?: {
          [key: string]: unknown;
      };
      /**
       * Description
       * @description Description of the intent.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier (UUID) of the intent.
       */
      id: string;
      /**
       * Intent Type
       * @description Type of the intent.
       */
      intent_type: string;
      /**
       * Is Active
       * @description Whether the intent is active.
       * @default null
       */
      is_active: boolean | null;
      /**
       * Name
       * @description Name of the intent.
       * @default null
       */
      name: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description API message, typically 'Data created successfully'.
   * @default null
   */
  message: string | null;
  /**
   * Meta
   * @description Response metadata.
   */
  meta?: {
      [key: string]: unknown;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INSIGHTO_AI's INSIGHTO_AI_CREATE_PROVIDER tool input.
 */
type INSIGHTO_AI_CREATE_PROVIDER_INPUT = {
  /**
   * Attributes
   * @description Additional provider-specific attributes
   */
  attributes?: {
      [key: string]: unknown;
  };
  /**
   * Name
   * @description Provider display name
   */
  name?: string;
  /**
   * Org Id
   * @description Organization ID under which the provider will be created
   * @default null
   */
  org_id: string | null;
  /**
   * Provider Key
   * @description Unique key for the provider
   */
  provider_key?: string;
  /**
   * Provider Name
   * @description Identifier of the provider type
   * @default openai
   * @enum {string}
   */
  provider_name: "openai" | "elevenlabs" | "azure_speech" | "cartesia" | "playht";
  /**
   * Status
   * @description Whether the provider is active or not
   * @default true
   */
  status: boolean | null;
};

/**
 * Type of INSIGHTO_AI's INSIGHTO_AI_CREATE_PROVIDER tool output.
 */
type INSIGHTO_AI_CREATE_PROVIDER_OUTPUT = {
  /**
   * CreateProviderResponseData
   * @description Details of the created provider
   * @default null
   */
  data: {
      /**
       * Attributes
       * @description Additional provider-specific attributes
       */
      attributes?: {
          [key: string]: unknown;
      };
      /**
       * Name
       * @description Provider display name
       * @default null
       */
      name: string | null;
      /**
       * Org Id
       * @description Organization ID
       * @default null
       */
      org_id: string | null;
      /**
       * Provider Key
       * @description Unique key for the provider
       * @default null
       */
      provider_key: string | null;
      /**
       * Provider Name
       * @description Identifier of the provider type
       * @default null
       * @enum {string|null}
       */
      provider_name: "openai" | "elevenlabs" | "azure_speech" | "cartesia" | "playht" | null;
      /**
       * Status
       * @description Whether the provider is active
       * @default null
       */
      status: boolean | null;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Response message from the API
   * @default null
   */
  message: string | null;
  /**
   * Meta
   * @description Metadata returned by the API
   */
  meta?: {
      [key: string]: unknown;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INSIGHTO_AI's INSIGHTO_AI_CREATE_WIDGET tool input.
 */
type INSIGHTO_AI_CREATE_WIDGET_INPUT = {
  /**
   * Action Buttons
   * @description Quick action buttons for the widget.
   */
  action_buttons?: unknown[];
  /**
   * Action Buttons Color
   * @description Hex code for action button backgrounds.
   * @default null
   */
  action_buttons_color: string | null;
  /**
   * Assistant Id
   * @description Assistant ID to attach this widget to.
   * @default null
   */
  assistant_id: string | null;
  /**
   * Attributes
   * @description Custom key/value pairs for metadata.
   */
  attributes?: {
      [key: string]: unknown;
  };
  /**
   * Bot Icon Color
   * @description Hex code for bot avatar/icon.
   * @default null
   */
  bot_icon_color: string | null;
  /**
   * Bot Message Color
   * @description Hex code for bot message text.
   * @default null
   */
  bot_message_color: string | null;
  /**
   * Bot Text Message Color
   * @description Hex code for bot text messages.
   * @default null
   */
  bot_text_message_color: string | null;
  /**
   * Bubble Color
   * @description Hex code for bubble background.
   * @default null
   */
  bubble_color: string | null;
  /**
   * Bubble Text
   * @description Default text in bubble.
   * @default null
   */
  bubble_text: string | null;
  /**
   * Description
   * @description Detailed description of the widget.
   * @default null
   */
  description: string | null;
  /**
   * Display Name
   * @description Name shown to end users.
   * @default null
   */
  display_name: string | null;
  /**
   * Header Color
   * @description Hex code for header background.
   * @default null
   */
  header_color: string | null;
  /**
   * Header Text Color
   * @description Hex code for header text.
   * @default null
   */
  header_text_color: string | null;
  /**
   * Ice Break Color
   * @description Hex code for ice-break messages.
   * @default null
   */
  ice_break_color: string | null;
  /**
   * Intro Message
   * @description One-time welcome message.
   * @default null
   */
  intro_message: string | null;
  /**
   * Name
   * @description Internal name for the widget.
   * @default null
   */
  name: string | null;
  /**
   * Org Id
   * @description Organization ID; defaults to API key's organization.
   * @default null
   */
  org_id: string | null;
  /**
   * Remove Branding
   * @description If true, hides Insighto.ai branding.
   * @default false
   */
  remove_branding: boolean;
  /**
   * Style Params
   * @description Additional style overrides for provider.
   */
  style_params?: {
      [key: string]: unknown;
  };
  /**
   * Textbox Default Text
   * @description Placeholder text in input box.
   * @default null
   */
  textbox_default_text: string | null;
  /**
   * User Message Color
   * @description Hex code for user message text.
   * @default null
   */
  user_message_color: string | null;
  /**
   * User Opening Messages
   * @description Messages shown when the widget is first opened.
   */
  user_opening_messages?: string[];
  /**
   * User Text Message Color
   * @description Hex code for user text messages.
   * @default null
   */
  user_text_message_color: string | null;
  /**
   * Widget Type
   * @description Type of widget to create.
   * @enum {string}
   */
  widget_type?: "chat" | "html" | "whatsapp" | "phone" | "html_call" | "leadconnector" | "leadconnector_call" | "sms" | "fb_messenger" | "instagram" | "web_call" | "plivo_call" | "telnyx_call" | "telegram" | "render_form";
};

/**
 * Type of INSIGHTO_AI's INSIGHTO_AI_CREATE_WIDGET tool output.
 */
type INSIGHTO_AI_CREATE_WIDGET_OUTPUT = {
  /**
   * CreateWidgetResponseData
   * @description Details of the created widget returned by the API.
   * @default null
   */
  data: {
      /**
       * Action Buttons
       * @description Action buttons configuration.
       */
      action_buttons: unknown[];
      /**
       * Action Buttons Color
       * @description Action buttons background color.
       * @default null
       */
      action_buttons_color: string | null;
      /**
       * Assistant Id
       * @description Assistant ID.
       * @default null
       */
      assistant_id: string | null;
      /**
       * Attributes
       * @description Custom attributes.
       */
      attributes?: {
          [key: string]: unknown;
      };
      /**
       * Bot Icon Color
       * @description Bot icon color.
       * @default null
       */
      bot_icon_color: string | null;
      /**
       * Bot Message Color
       * @description Bot message color.
       * @default null
       */
      bot_message_color: string | null;
      /**
       * Bot Text Message Color
       * @description Bot text message color.
       * @default null
       */
      bot_text_message_color: string | null;
      /**
       * Bubble Bot Icon
       * @description URL for bubble bot icon.
       * @default null
       */
      bubble_bot_icon: string | null;
      /**
       * Bubble Color
       * @description Bubble background color.
       * @default null
       */
      bubble_color: string | null;
      /**
       * Bubble Text
       * @description Text inside chat bubble.
       * @default null
       */
      bubble_text: string | null;
      /**
       * Conversation Bot Icon
       * @description URL for conversation bot icon.
       * @default null
       */
      conversation_bot_icon: string | null;
      /**
       * Description
       * @description Widget description.
       * @default null
       */
      description: string | null;
      /**
       * Display Name
       * @description Display name shown to users.
       * @default null
       */
      display_name: string | null;
      /**
       * Header Color
       * @description Header background color.
       * @default null
       */
      header_color: string | null;
      /**
       * Header Text Color
       * @description Header text color.
       * @default null
       */
      header_text_color: string | null;
      /**
       * Ice Break Color
       * @description Ice-break message color.
       * @default null
       */
      ice_break_color: string | null;
      /**
       * Id
       * @description Unique widget identifier.
       */
      id: string;
      /**
       * Intro Message
       * @description Intro message.
       * @default null
       */
      intro_message: string | null;
      /**
       * Name
       * @description Internal widget name.
       * @default null
       */
      name: string | null;
      /**
       * Org Id
       * @description Organization ID.
       * @default null
       */
      org_id: string | null;
      /**
       * Provider User Friendly Label
       * @description User-friendly provider label.
       */
      provider_user_friendly_label: string;
      /**
       * Remove Branding
       * @description Whether branding is removed.
       * @default null
       */
      remove_branding: boolean | null;
      /**
       * Style Params
       * @description Additional style parameters.
       */
      style_params?: {
          [key: string]: unknown;
      };
      /**
       * Textbox Default Text
       * @description Textbox placeholder text.
       * @default null
       */
      textbox_default_text: string | null;
      /**
       * User Message Color
       * @description User message color.
       * @default null
       */
      user_message_color: string | null;
      /**
       * User Opening Messages
       * @description Configured opening messages.
       */
      user_opening_messages: string[];
      /**
       * User Text Message Color
       * @description User text message color.
       * @default null
       */
      user_text_message_color: string | null;
      /**
       * Widget Provider
       * @description Provider identifier for the widget.
       */
      widget_provider: string;
      /**
       * Widget Type
       * @description Type of the widget.
       * @enum {string}
       */
      widget_type: "chat" | "html" | "whatsapp" | "phone" | "html_call" | "leadconnector" | "leadconnector_call" | "sms" | "fb_messenger" | "instagram" | "web_call" | "plivo_call" | "telnyx_call" | "telegram" | "render_form";
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description API response message.
   * @default null
   */
  message: string | null;
  /**
   * Meta
   * @description Additional metadata.
   */
  meta?: {
      [key: string]: unknown;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INSIGHTO_AI's INSIGHTO_AI_GET_CONTACT_BY_ID tool input.
 */
type INSIGHTO_AI_GET_CONTACT_BY_ID_INPUT = {
  /**
   * Contact Id
   * @description Unique identifier of the contact to retrieve
   */
  contact_id?: string;
};

/**
 * Type of INSIGHTO_AI's INSIGHTO_AI_GET_CONTACT_BY_ID tool output.
 */
type INSIGHTO_AI_GET_CONTACT_BY_ID_OUTPUT = {
  /**
   * ContactData
   * @description The contact record; null if not found
   * @default null
   */
  data: {
      /**
       * Channels
       * @description Mapping of channel names to settings
       */
      channels: {
          [key: string]: unknown;
      };
      /**
       * Created At
       * @description ISO 8601 timestamp when the contact was created
       * @default null
       */
      created_at: string | null;
      /**
       * Custom Fields
       * @description Custom fields defined on the contact
       * @default null
       */
      custom_fields: {
          [key: string]: unknown;
      } | null;
      /**
       * Email
       * @description Contact's email address
       * @default null
       */
      email: string | null;
      /**
       * First Assistant Id
       * @description ID of first assistant
       * @default null
       */
      first_assistant_id: string | null;
      /**
       * First Name
       * @description Contact's first name
       * @default null
       */
      first_name: string | null;
      /**
       * First Widget Id
       * @description ID of first widget
       * @default null
       */
      first_widget_id: string | null;
      /**
       * Id
       * @description Unique contact identifier
       */
      id: string;
      /**
       * Last Assistant Id
       * @description ID of last assistant
       * @default null
       */
      last_assistant_id: string | null;
      /**
       * Last Name
       * @description Contact's last name
       * @default null
       */
      last_name: string | null;
      /**
       * Last Seen
       * @description ISO 8601 timestamp of last seen
       * @default null
       */
      last_seen: string | null;
      /**
       * Last Sent
       * @description ISO 8601 timestamp of last sent message
       * @default null
       */
      last_sent: string | null;
      /**
       * Last Widget Id
       * @description ID of last widget
       * @default null
       */
      last_widget_id: string | null;
      /**
       * Org Id
       * @description Organization ID if assigned
       * @default null
       */
      org_id: string | null;
      /**
       * User Attributes
       * @description User attributes as key/value pairs
       */
      user_attributes: {
          [key: string]: unknown;
      };
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Status message returned by the API
   * @default null
   */
  message: string | null;
  /**
   * Meta
   * @description Additional metadata returned by the API
   */
  meta?: {
      [key: string]: unknown;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INSIGHTO_AI's INSIGHTO_AI_GET_LIST_OF_CONTACTS tool input.
 */
type INSIGHTO_AI_GET_LIST_OF_CONTACTS_INPUT = {
  /**
   * Page
   * @description Page number, must be at least 1. Default is 1.
   * @default 1
   */
  page: number;
  /**
   * Size
   * @description Number of contacts per page, between 1 and 100. Default is 50.
   * @default 50
   */
  size: number;
};

/**
 * Type of INSIGHTO_AI's INSIGHTO_AI_GET_LIST_OF_CONTACTS tool output.
 */
type INSIGHTO_AI_GET_LIST_OF_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Pagination data and list of contacts
   */
  data?: {
      /**
       * Items
       * @description List of contacts on the current page
       */
      items: {
          /**
           * Channels
           * @description Channels data for the contact
           * @default {}
           */
          channels: {
              [key: string]: unknown;
          };
          /**
           * Created At
           * @description ISO timestamp when the contact was created
           * @default null
           */
          created_at: string | null;
          /**
           * Custom Fields
           * @description Custom fields defined for the contact
           * @default null
           */
          custom_fields: {
              [key: string]: unknown;
          } | null;
          /**
           * Email
           * @description Email address of the contact
           * @default null
           */
          email: string | null;
          /**
           * First Assistant Id
           * @description First assistant ID associated with the contact
           * @default null
           */
          first_assistant_id: string | null;
          /**
           * First Name
           * @description First name of the contact
           * @default null
           */
          first_name: string | null;
          /**
           * First Widget Id
           * @description First widget ID associated with the contact
           * @default null
           */
          first_widget_id: string | null;
          /**
           * Id
           * @description Unique identifier of the contact
           */
          id: string;
          /**
           * Last Assistant Id
           * @description Last assistant ID associated with the contact
           * @default null
           */
          last_assistant_id: string | null;
          /**
           * Last Name
           * @description Last name of the contact
           * @default null
           */
          last_name: string | null;
          /**
           * Last Seen
           * @description ISO timestamp when the contact was last seen
           * @default null
           */
          last_seen: string | null;
          /**
           * Last Sent
           * @description ISO timestamp when a message was last sent to the contact
           * @default null
           */
          last_sent: string | null;
          /**
           * Last Widget Id
           * @description Last widget ID associated with the contact
           * @default null
           */
          last_widget_id: string | null;
          /**
           * Org Id
           * @description Organization ID associated with the contact
           * @default null
           */
          org_id: string | null;
          /**
           * User Attributes
           * @description Custom user attributes of the contact
           * @default {}
           */
          user_attributes: {
              [key: string]: unknown;
          };
      }[];
      /**
       * Next Page
       * @description Next page number, if any
       * @default null
       */
      next_page: number | null;
      /**
       * Page
       * @description Current page number
       * @default null
       */
      page: number | null;
      /**
       * Pages
       * @description Total number of pages available
       * @default null
       */
      pages: number | null;
      /**
       * Previous Page
       * @description Previous page number, if any
       * @default null
       */
      previous_page: number | null;
      /**
       * Size
       * @description Page size returned
       * @default null
       */
      size: number | null;
      /**
       * Total
       * @description Total number of contacts
       * @default null
       */
      total: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Optional response message from the API
   * @default null
   */
  message: string | null;
  /**
   * Meta
   * @description Additional metadata returned by the API
   */
  meta?: {
      [key: string]: unknown;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INSIGHTO_AI's INSIGHTO_AI_GET_LIST_OF_CONVERSATIONS tool input.
 */
type INSIGHTO_AI_GET_LIST_OF_CONVERSATIONS_INPUT = {
  /**
   * Assistant Id
   * @description Filter by assistant ID
   * @default null
   */
  assistant_id: string | null;
  /**
   * Date From
   * @description Start date-time (inclusive) in ISO 8601 format
   */
  date_from?: string;
  /**
   * Date To
   * @description End date-time (inclusive) in ISO 8601 format
   */
  date_to?: string;
  /**
   * Includes Voice
   * @description If true, only return voice-enabled conversations
   * @default null
   */
  includes_voice: boolean | null;
  /**
   * Intent Id
   * @description Filter by intent ID
   * @default null
   */
  intent_id: string | null;
  /**
   * Page
   * @description Page number for pagination (>=1)
   * @default 1
   */
  page: number | null;
  /**
   * Size
   * @description Number of items per page (1-100)
   * @default 50
   */
  size: number | null;
};

/**
 * Type of INSIGHTO_AI's INSIGHTO_AI_GET_LIST_OF_CONVERSATIONS tool output.
 */
type INSIGHTO_AI_GET_LIST_OF_CONVERSATIONS_OUTPUT = {
  /**
   * Data
   * @description Paginated conversation listing data
   */
  data?: {
      /**
       * Items
       * @description List of conversation metadata records
       */
      items: {
          /**
           * Assistant Id
           * @description Identifier of the assistant handling this conversation
           */
          assistant_id: string;
          /**
           * Assistant Name
           * @description Name of the assistant
           * @default null
           */
          assistant_name: string | null;
          /**
           * Attributes
           * @description Additional attributes or metadata as JSON string
           * @default null
           */
          attributes: string | null;
          /**
           * Chat Count
           * @description Total number of messages in this conversation
           */
          chat_count: number;
          /**
           * Contact First Name
           * @description First name of the contact
           * @default null
           */
          contact_first_name: string | null;
          /**
           * Contact Id
           * @description Identifier of the contact involved in the conversation
           */
          contact_id: string;
          /**
           * Contact Last Name
           * @description Last name of the contact
           * @default null
           */
          contact_last_name: string | null;
          /**
           * Created At
           * @description ISO 8601 timestamp when the conversation was created
           */
          created_at: string;
          /**
           * Device Type
           * @description Type of device used for the conversation
           * @default null
           */
          device_type: string | null;
          /**
           * First Message
           * @description Content of the first message in the conversation
           * @default null
           */
          first_message: string | null;
          /**
           * Id
           * @description Unique identifier of the conversation
           */
          id: string;
          /**
           * Includes Voice
           * @description True if the conversation includes a voice interaction
           */
          includes_voice: boolean;
          /**
           * Intent Name
           * @description Detected intent name for this conversation
           * @default null
           */
          intent_name: string | null;
          /**
           * Summary
           * @description Auto-generated summary of the conversation
           * @default null
           */
          summary: string | null;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the conversation was last updated
           */
          updated_at: string;
          /**
           * Widget Id
           * @description Identifier of the widget associated with this conversation
           */
          widget_id: string;
          /**
           * Widget Provider
           * @description Provider of the widget
           * @default null
           */
          widget_provider: string | null;
          /**
           * Widget Type
           * @description Type of widget used in the conversation
           * @default null
           */
          widget_type: string | null;
      }[];
      /**
       * Next Page
       * @description Next page number, if any
       * @default null
       */
      next_page: number | null;
      /**
       * Page
       * @description Current page number
       * @default null
       */
      page: number | null;
      /**
       * Pages
       * @description Total number of pages
       * @default null
       */
      pages: number | null;
      /**
       * Previous Page
       * @description Previous page number, if any
       * @default null
       */
      previous_page: number | null;
      /**
       * Size
       * @description Number of items per page
       * @default null
       */
      size: number | null;
      /**
       * Total
       * @description Total number of matching conversations
       * @default null
       */
      total: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description API response message, if any
   * @default null
   */
  message: string | null;
  /**
   * Meta
   * @description Additional metadata returned by the API
   */
  meta?: {
      [key: string]: unknown;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INSIGHTO_AI's INSIGHTO_AI_GET_LIST_OF_DATASOURCES tool input.
 */
type INSIGHTO_AI_GET_LIST_OF_DATASOURCES_INPUT = object;

/**
 * Type of INSIGHTO_AI's INSIGHTO_AI_GET_LIST_OF_DATASOURCES tool output.
 */
type INSIGHTO_AI_GET_LIST_OF_DATASOURCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Datasources
       * @description List of data source objects
       */
      datasources: {
          /**
           * Created At
           * @description ISO timestamp when the data source was created
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier for the data source
           */
          id: string;
          /**
           * Name
           * @description Name of the data source
           */
          name: string;
          /**
           * Type
           * @description Type of the data source
           */
          type: string;
      }[];
      /**
       * Total
       * @description Total number of data sources
       */
      total: number;
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
 * Type of INSIGHTO_AI's INSIGHTO_AI_READ_CONTACT_CUSTOM_FIELD_LIST tool input.
 */
type INSIGHTO_AI_READ_CONTACT_CUSTOM_FIELD_LIST_INPUT = {
  /**
   * Page
   * @description Page number to fetch, must be at least 1. Default is 1.
   * @default 1
   */
  page: number;
  /**
   * Size
   * @description Number of custom fields per page, between 1 and 100. Default is 50.
   * @default 50
   */
  size: number;
};

/**
 * Type of INSIGHTO_AI's INSIGHTO_AI_READ_CONTACT_CUSTOM_FIELD_LIST tool output.
 */
type INSIGHTO_AI_READ_CONTACT_CUSTOM_FIELD_LIST_OUTPUT = {
  /**
   * Data
   * @description Paginated data of contact custom fields
   */
  data?: {
      /**
       * Items
       * @description List of contact custom fields fetched
       */
      items: {
          /**
           * Custom Field Name
           * @description Name of the custom field
           */
          custom_field_name: string;
          /**
           * Custom Field Type
           * @description Data type of the custom field
           * @default null
           * @enum {string|null}
           */
          custom_field_type: "string" | "number" | null;
          /**
           * Id
           * @description Unique identifier of the custom field
           */
          id: string;
          /**
           * Org Id
           * @description Organization ID; null if not set
           * @default null
           */
          org_id: string | null;
      }[];
      /**
       * Next Page
       * @description Next page number, if any
       * @default null
       */
      next_page: number | null;
      /**
       * Page
       * @description Current page number
       * @default null
       */
      page: number | null;
      /**
       * Pages
       * @description Total number of pages
       * @default null
       */
      pages: number | null;
      /**
       * Previous Page
       * @description Previous page number, if any
       * @default null
       */
      previous_page: number | null;
      /**
       * Size
       * @description Number of items returned on this page
       * @default null
       */
      size: number | null;
      /**
       * Total
       * @description Total custom fields available
       * @default null
       */
      total: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Response message from the API
   * @default null
   */
  message: string | null;
  /**
   * Meta
   * @description Additional metadata returned by the API
   */
  meta?: {
      [key: string]: unknown;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INSIGHTO_AI's INSIGHTO_AI_READ_INTENTS_LIST tool input.
 */
type INSIGHTO_AI_READ_INTENTS_LIST_INPUT = {
  /**
   * Page
   * @description Page number to retrieve (>= 1)
   * @default 1
   */
  page: number;
  /**
   * Size
   * @description Number of intents per page (1-100)
   * @default 50
   */
  size: number;
};

/**
 * Type of INSIGHTO_AI's INSIGHTO_AI_READ_INTENTS_LIST tool output.
 */
type INSIGHTO_AI_READ_INTENTS_LIST_OUTPUT = {
  /**
   * Data
   * @description Paged intents payload
   */
  data?: {
      /**
       * Items
       * @description List of intents on this page
       */
      items: {
          /**
           * Attributes
           * @description Additional metadata attributes for the intent
           */
          attributes?: {
              [key: string]: unknown;
          };
          /**
           * Description
           * @description Description or purpose of the intent
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier for the intent
           */
          id: string;
          /**
           * Intent Type
           * @description Type/category of the intent
           */
          intent_type: string;
          /**
           * Is Active
           * @description Whether the intent is active (true) or inactive (false)
           * @default true
           */
          is_active: boolean | null;
          /**
           * Name
           * @description Human-readable name of the intent
           * @default null
           */
          name: string | null;
      }[];
      /**
       * Next Page
       * @description Page number of the next page
       * @default null
       */
      next_page: number | null;
      /**
       * Page
       * @description Current page number
       * @default null
       */
      page: number | null;
      /**
       * Pages
       * @description Total number of pages available
       * @default null
       */
      pages: number | null;
      /**
       * Previous Page
       * @description Page number of the previous page
       * @default null
       */
      previous_page: number | null;
      /**
       * Size
       * @description Number of items per page
       * @default null
       */
      size: number | null;
      /**
       * Total
       * @description Total number of intents available
       * @default null
       */
      total: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Informational message from the server
   * @default null
   */
  message: string | null;
  /**
   * Meta
   * @description Non-payload metadata
   */
  meta?: {
      [key: string]: unknown;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INSIGHTO_AI's INSIGHTO_AI_SEND_MESSAGES_TO_CONTACTS tool input.
 */
type INSIGHTO_AI_SEND_MESSAGES_TO_CONTACTS_INPUT = {
  /**
   * Contact Ids
   * @description List of UUIDs identifying contacts to receive messages.
   */
  contact_ids?: string[];
  /**
   * Message
   * @description Text message to send (only for chat-based assistants; ignored for calling).
   * @default null
   */
  message: string | null;
  /**
   * Start New Conversation
   * @description Start a new conversation thread instead of replying to the existing one.
   * @default false
   */
  start_new_conversation: boolean | null;
  /**
   * Widget Id
   * @description Widget ID connected to WhatsApp or SMS.
   */
  widget_id?: string;
};

/**
 * Type of INSIGHTO_AI's INSIGHTO_AI_SEND_MESSAGES_TO_CONTACTS tool output.
 */
type INSIGHTO_AI_SEND_MESSAGES_TO_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Indicates that the messaging campaign has been queued.
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
 * Type map of all available tool input types for toolkit "INSIGHTO_AI".
 */
export type INSIGHTO_AI_TOOL_INPUTS = {
  CREATE_INTENT: INSIGHTO_AI_CREATE_INTENT_INPUT
  CREATE_PROVIDER: INSIGHTO_AI_CREATE_PROVIDER_INPUT
  CREATE_WIDGET: INSIGHTO_AI_CREATE_WIDGET_INPUT
  GET_CONTACT_BY_ID: INSIGHTO_AI_GET_CONTACT_BY_ID_INPUT
  GET_LIST_OF_CONTACTS: INSIGHTO_AI_GET_LIST_OF_CONTACTS_INPUT
  GET_LIST_OF_CONVERSATIONS: INSIGHTO_AI_GET_LIST_OF_CONVERSATIONS_INPUT
  GET_LIST_OF_DATASOURCES: INSIGHTO_AI_GET_LIST_OF_DATASOURCES_INPUT
  READ_CONTACT_CUSTOM_FIELD_LIST: INSIGHTO_AI_READ_CONTACT_CUSTOM_FIELD_LIST_INPUT
  READ_INTENTS_LIST: INSIGHTO_AI_READ_INTENTS_LIST_INPUT
  SEND_MESSAGES_TO_CONTACTS: INSIGHTO_AI_SEND_MESSAGES_TO_CONTACTS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "INSIGHTO_AI".
 */
export type INSIGHTO_AI_TOOL_OUTPUTS = {
  CREATE_INTENT: INSIGHTO_AI_CREATE_INTENT_OUTPUT
  CREATE_PROVIDER: INSIGHTO_AI_CREATE_PROVIDER_OUTPUT
  CREATE_WIDGET: INSIGHTO_AI_CREATE_WIDGET_OUTPUT
  GET_CONTACT_BY_ID: INSIGHTO_AI_GET_CONTACT_BY_ID_OUTPUT
  GET_LIST_OF_CONTACTS: INSIGHTO_AI_GET_LIST_OF_CONTACTS_OUTPUT
  GET_LIST_OF_CONVERSATIONS: INSIGHTO_AI_GET_LIST_OF_CONVERSATIONS_OUTPUT
  GET_LIST_OF_DATASOURCES: INSIGHTO_AI_GET_LIST_OF_DATASOURCES_OUTPUT
  READ_CONTACT_CUSTOM_FIELD_LIST: INSIGHTO_AI_READ_CONTACT_CUSTOM_FIELD_LIST_OUTPUT
  READ_INTENTS_LIST: INSIGHTO_AI_READ_INTENTS_LIST_OUTPUT
  SEND_MESSAGES_TO_CONTACTS: INSIGHTO_AI_SEND_MESSAGES_TO_CONTACTS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's INSIGHTO_AI toolkit.
 */
export const INSIGHTO_AI = {
  slug: "insighto_ai",
  tools: {
    /**
     * Tool to create a new intent in insighto.ai. use when adding custom intents before training or deployment. call after confirming intent attributes.
     */
    CREATE_INTENT: "INSIGHTO_AI_CREATE_INTENT",
    /**
     * Tool to create a new provider. use after obtaining org id to register the provider.
     */
    CREATE_PROVIDER: "INSIGHTO_AI_CREATE_PROVIDER",
    /**
     * Tool to create a new widget with specified attributes. use after confirming assistant id and widget type.
     */
    CREATE_WIDGET: "INSIGHTO_AI_CREATE_WIDGET",
    /**
     * Tool to retrieve details of a specific contact by contact id. use when you have a valid contact id and need the full contact profile.
     */
    GET_CONTACT_BY_ID: "INSIGHTO_AI_GET_CONTACT_BY_ID",
    /**
     * Tool to fetch a paginated list of contacts. use after confirming a valid api key to iterate through pages of contacts.
     */
    GET_LIST_OF_CONTACTS: "INSIGHTO_AI_GET_LIST_OF_CONTACTS",
    /**
     * Tool to fetch a list of conversations. use after specifying date range and filters to retrieve conversation metadata.
     */
    GET_LIST_OF_CONVERSATIONS: "INSIGHTO_AI_GET_LIST_OF_CONVERSATIONS",
    /**
     * Tool to list all existing data sources. use when you need to fetch the complete set of data sources.
     */
    GET_LIST_OF_DATASOURCES: "INSIGHTO_AI_GET_LIST_OF_DATASOURCES",
    /**
     * Tool to retrieve a list of custom fields associated with contacts. use when you need to inspect or sync contact metadata definitions.
     */
    READ_CONTACT_CUSTOM_FIELD_LIST: "INSIGHTO_AI_READ_CONTACT_CUSTOM_FIELD_LIST",
    /**
     * Tool to retrieve a list of all intents. use after authenticating; supports pagination.
     */
    READ_INTENTS_LIST: "INSIGHTO_AI_READ_INTENTS_LIST",
    /**
     * Tool to send messages to a list of contacts in bulk. use when your widget is connected to whatsapp or sms and you have the contact ids ready.
     */
    SEND_MESSAGES_TO_CONTACTS: "INSIGHTO_AI_SEND_MESSAGES_TO_CONTACTS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "INSIGHTO_AI".
 */
export type INSIGHTO_AI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "INSIGHTO_AI".
 */
export type INSIGHTO_AI_TRIGGER_EVENTS = {}
