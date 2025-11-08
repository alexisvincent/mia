// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of LANDBOT's LANDBOT_DELETE_BOT tool input.
 */
type LANDBOT_DELETE_BOT_INPUT = {
  /**
   * Bot Id
   * @description Unique identifier of the bot to delete.
   */
  bot_id?: string;
};

/**
 * Type of LANDBOT's LANDBOT_DELETE_BOT tool output.
 */
type LANDBOT_DELETE_BOT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the bot was successfully deleted.
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
 * Type of LANDBOT's LANDBOT_GET_CUSTOMER_BY_PHONE tool input.
 */
type LANDBOT_GET_CUSTOMER_BY_PHONE_INPUT = {
  /**
   * Limit
   * @description Maximum number of customers to return.
   * @default 1
   */
  limit: number;
  /**
   * Offset
   * @description Number of customers to skip before returning results.
   * @default 0
   */
  offset: number;
  /**
   * Opt In
   * @description Filter only customers who have opted in (WhatsApp opt-in).
   * @default true
   */
  opt_in: boolean;
  /**
   * Phone
   * @description Phone number to search for the customer. Include country code, digits only, optional leading '+'.
   */
  phone?: string;
};

/**
 * Type of LANDBOT's LANDBOT_GET_CUSTOMER_BY_PHONE tool output.
 */
type LANDBOT_GET_CUSTOMER_BY_PHONE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Customers
       * @description List of customers matching the phone search.
       */
      customers: {
          /**
           * Agent Id
           * @description ID of the agent assigned to the customer.
           * @default null
           */
          agent_id: number | null;
          /**
           * Archived
           * @description Whether the customer is archived.
           * @default null
           */
          archived: boolean | null;
          /**
           * Avatar
           * @description URL of the customer's avatar image.
           * @default null
           */
          avatar: string | null;
          /**
           * Channel Id
           * @description Channel ID through which the customer interacts.
           */
          channel_id: number;
          /**
           * Custom Fields
           * @description Dictionary of custom fields for the customer.
           */
          custom_fields: {
              [key: string]: {
                  /**
                   * Extra
                   * @description Additional metadata for the custom field.
                   */
                  extra: {
                      [key: string]: string | number | boolean;
                  };
                  /**
                   * Name
                   * @description Name of the custom field.
                   */
                  name: string;
                  /**
                   * Type
                   * @description Data type of the custom field.
                   */
                  type: string;
                  /**
                   * Value
                   * @description Value of the custom field.
                   */
                  value: string | number | boolean;
              };
          };
          /**
           * Id
           * @description Unique identifier of the customer.
           */
          id: number;
          /**
           * Last Message
           * @description Timestamp of the customer's last message.
           * @default null
           */
          last_message: number | null;
          /**
           * Meta Data
           * @description Additional metadata for the customer.
           */
          meta_data: {
              [key: string]: string | number | boolean | {
                  [key: string]: unknown;
              } | unknown[];
          };
          /**
           * Name
           * @description Name of the customer.
           * @default null
           */
          name: string | null;
          /**
           * Register Date
           * @description Timestamp when the customer registered.
           * @default null
           */
          register_date: number | null;
          /**
           * Unread
           * @description Whether the customer has unread messages.
           * @default null
           */
          unread: boolean | null;
      }[];
      /**
       * Success
       * @description Indicates if the request was successful.
       */
      success: boolean;
      /**
       * Total
       * @description Total number of customers matching the query.
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
 * Type of LANDBOT's LANDBOT_LIST_AGENTS tool input.
 */
type LANDBOT_LIST_AGENTS_INPUT = object;

/**
 * Type of LANDBOT's LANDBOT_LIST_AGENTS tool output.
 */
type LANDBOT_LIST_AGENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Agents
       * @description List of agents with their basic details.
       */
      agents: {
          /**
           * Email
           * @description Email address of the agent.
           */
          email: string;
          /**
           * Id
           * @description Unique identifier for the agent.
           */
          id: number;
          /**
           * Name
           * @description Name of the agent.
           */
          name: string;
          /**
           * Role
           * @description Role assigned to the agent.
           * @default null
           */
          role: string | null;
          /**
           * Status
           * @description Current status of the agent.
           */
          status: string;
      }[];
      /**
       * Success
       * @description Indicates if the request was successful
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
 * Type of LANDBOT's LANDBOT_LIST_BOTS tool input.
 */
type LANDBOT_LIST_BOTS_INPUT = object;

/**
 * Type of LANDBOT's LANDBOT_LIST_BOTS tool output.
 */
type LANDBOT_LIST_BOTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bots
       * @description List of bots in the account.
       */
      bots: {
          /**
           * Created At
           * @description Unix timestamp when the bot was created.
           */
          created_at: number;
          /**
           * Edited At
           * @description Unix timestamp when the bot was last updated.
           */
          edited_at: number;
          /**
           * Id
           * @description Unique identifier of the bot.
           */
          id: number;
          /**
           * Name
           * @description Name of the bot.
           */
          name: string;
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
 * Type of LANDBOT's LANDBOT_LIST_CHANNELS tool input.
 */
type LANDBOT_LIST_CHANNELS_INPUT = object;

/**
 * Type of LANDBOT's LANDBOT_LIST_CHANNELS tool output.
 */
type LANDBOT_LIST_CHANNELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Channels
       * @description List of channels with their details.
       */
      channels: {
          /**
           * Created At
           * @description ISO8601 timestamp when the channel was created.
           */
          created_at: string | null;
          /**
           * Id
           * @description Unique identifier for the channel.
           */
          id: number;
          /**
           * Name
           * @description Name of the channel.
           */
          name: string;
          /**
           * Type
           * @description Type of the channel (e.g., web, WhatsApp, Messenger).
           */
          type: string;
          /**
           * Updated At
           * @description ISO8601 timestamp when the channel was last updated.
           * @default null
           */
          updated_at: string | null;
      }[];
      /**
       * Success
       * @description Indicates if the request was successful.
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
 * Type of LANDBOT's LANDBOT_LIST_CUSTOMERS tool input.
 */
type LANDBOT_LIST_CUSTOMERS_INPUT = {
  /**
   * Channel Id
   * @description Filter by specific channel ID through which customers interact.
   * @default null
   */
  channel_id: number | null;
  /**
   * Limit
   * @description Maximum number of records to return per request.
   * @default 100
   */
  limit: number;
  /**
   * Offset
   * @description Number of records to skip before returning results.
   * @default 0
   */
  offset: number;
  /**
   * Opt In
   * @description Filter only customers who have opted in (e.g., WhatsApp opt-in).
   * @default null
   */
  opt_in: boolean | null;
  /**
   * Search
   * @description Value to search for in the specified field.
   * @default null
   */
  search: string | null;
  /**
   * Search By
   * @description Field to search by. Must be one of 'phone', 'email', or 'name'.
   * @default null
   * @enum {string|null}
   */
  search_by: "phone" | "email" | "name" | null;
};

/**
 * Type of LANDBOT's LANDBOT_LIST_CUSTOMERS tool output.
 */
type LANDBOT_LIST_CUSTOMERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Customers
       * @description List of customers.
       */
      customers: {
          /**
           * Agent Id
           * @description ID of the agent assigned to the customer.
           */
          agent_id: number;
          /**
           * Archived
           * @description Whether the customer is archived.
           */
          archived: boolean;
          /**
           * Avatar
           * @description URL of the customer's avatar image.
           * @default null
           */
          avatar: string | null;
          /**
           * Channel Id
           * @description Channel ID through which the customer interacts.
           */
          channel_id: number;
          /**
           * Custom Fields
           * @description Dictionary of custom fields for the customer.
           */
          custom_fields: {
              [key: string]: {
                  /**
                   * Extra
                   * @description Additional metadata for the custom field.
                   */
                  extra: {
                      [key: string]: string | number | boolean;
                  };
                  /**
                   * Name
                   * @description Name of the custom field.
                   */
                  name: string;
                  /**
                   * Type
                   * @description Data type of the custom field.
                   */
                  type: string;
                  /**
                   * Value
                   * @description Value of the custom field.
                   */
                  value: string | number | boolean;
              };
          };
          /**
           * Id
           * @description Unique identifier of the customer.
           */
          id: number;
          /**
           * Last Message
           * @description Timestamp of the customer's last message.
           */
          last_message: number;
          /**
           * Meta Data
           * @description Additional metadata for the customer.
           */
          meta_data: {
              [key: string]: string | number | boolean | {
                  [key: string]: unknown;
              } | unknown[];
          };
          /**
           * Name
           * @description Name of the customer.
           */
          name: string;
          /**
           * Register Date
           * @description Timestamp when the customer registered.
           */
          register_date: number;
          /**
           * Unread
           * @description Whether the customer has unread messages.
           */
          unread: boolean;
      }[];
      /**
       * Success
       * @description Indicates if the request was successful.
       */
      success: boolean;
      /**
       * Total
       * @description Total number of customers matching the query.
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
 * Type of LANDBOT's LANDBOT_LIST_WHATSAPP_TEMPLATES tool input.
 */
type LANDBOT_LIST_WHATSAPP_TEMPLATES_INPUT = {
  /**
   * Channel Id
   * @description Optional WhatsApp channel ID to filter templates and avoid duplicates
   * @default null
   */
  channel_id: number | null;
};

/**
 * Type of LANDBOT's LANDBOT_LIST_WHATSAPP_TEMPLATES tool output.
 */
type LANDBOT_LIST_WHATSAPP_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the request was successful
       */
      success: boolean;
      /**
       * Templates
       * @description Array of available WhatsApp templates
       */
      templates: {
          /**
           * Id
           * @description Unique template ID
           */
          id: number;
          /**
           * Params Number
           * @description Number of placeholder parameters in the template
           */
          params_number: number;
          /**
           * Text
           * @description Template text with placeholders like {{1}}
           */
          text: string;
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
 * Type map of all available tool input types for toolkit "LANDBOT".
 */
export type LANDBOT_TOOL_INPUTS = {
  DELETE_BOT: LANDBOT_DELETE_BOT_INPUT
  GET_CUSTOMER_BY_PHONE: LANDBOT_GET_CUSTOMER_BY_PHONE_INPUT
  LIST_AGENTS: LANDBOT_LIST_AGENTS_INPUT
  LIST_BOTS: LANDBOT_LIST_BOTS_INPUT
  LIST_CHANNELS: LANDBOT_LIST_CHANNELS_INPUT
  LIST_CUSTOMERS: LANDBOT_LIST_CUSTOMERS_INPUT
  LIST_WHATSAPP_TEMPLATES: LANDBOT_LIST_WHATSAPP_TEMPLATES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "LANDBOT".
 */
export type LANDBOT_TOOL_OUTPUTS = {
  DELETE_BOT: LANDBOT_DELETE_BOT_OUTPUT
  GET_CUSTOMER_BY_PHONE: LANDBOT_GET_CUSTOMER_BY_PHONE_OUTPUT
  LIST_AGENTS: LANDBOT_LIST_AGENTS_OUTPUT
  LIST_BOTS: LANDBOT_LIST_BOTS_OUTPUT
  LIST_CHANNELS: LANDBOT_LIST_CHANNELS_OUTPUT
  LIST_CUSTOMERS: LANDBOT_LIST_CUSTOMERS_OUTPUT
  LIST_WHATSAPP_TEMPLATES: LANDBOT_LIST_WHATSAPP_TEMPLATES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's LANDBOT toolkit.
 */
export const LANDBOT = {
  slug: "landbot",
  tools: {
    /**
     * Tool to delete a specific bot from your account. use when you need to remove an unused or test bot after confirming the bot id.
     */
    DELETE_BOT: "LANDBOT_DELETE_BOT",
    /**
     * Tool to retrieve customer details by phone number. use when you need to fetch a customer's profile by their phone. example: "find customer with phone +1234567890".
     */
    GET_CUSTOMER_BY_PHONE: "LANDBOT_GET_CUSTOMER_BY_PHONE",
    /**
     * Tool to retrieve a list of agents in your landbot account. use after authenticating your account to enumerate all agents and their details.
     */
    LIST_AGENTS: "LANDBOT_LIST_AGENTS",
    /**
     * Tool to list all bots in your landbot account. use after authenticating to discover your configured bots.
     */
    LIST_BOTS: "LANDBOT_LIST_BOTS",
    /**
     * Tool to list all channels integrated with your account. use after authenticating your account to enumerate available messaging channels and metadata.
     */
    LIST_CHANNELS: "LANDBOT_LIST_CHANNELS",
    /**
     * Tool to list customers who have interacted with your bot. use when you need to retrieve customer records with optional filters (channel id, opt in, search) and pagination.
     */
    LIST_CUSTOMERS: "LANDBOT_LIST_CUSTOMERS",
    /**
     * Tool to list all whatsapp message templates available for the account. use after obtaining your whatsapp channel id to fetch template ids and parameter counts.
     */
    LIST_WHATSAPP_TEMPLATES: "LANDBOT_LIST_WHATSAPP_TEMPLATES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "LANDBOT".
 */
export type LANDBOT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "LANDBOT".
 */
export type LANDBOT_TRIGGER_EVENTS = {}
