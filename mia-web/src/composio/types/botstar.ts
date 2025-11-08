// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BOTSTAR's BOTSTAR_BOTSTAR_LIVECHAT_ON_CLOSE tool input.
 */
type BOTSTAR_BOTSTAR_LIVECHAT_ON_CLOSE_INPUT = {
  /**
   * Callback Code
   * @description JavaScript code to execute inside the onClose callback.
   */
  callback_code?: string;
};

/**
 * Type of BOTSTAR's BOTSTAR_BOTSTAR_LIVECHAT_ON_CLOSE tool output.
 */
type BOTSTAR_BOTSTAR_LIVECHAT_ON_CLOSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Js Snippet
       * @description Full JavaScript snippet for BotStarApi onClose registration.
       */
      js_snippet: string;
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
 * Type of BOTSTAR's BOTSTAR_GET_BOT_APP_ID tool input.
 */
type BOTSTAR_GET_BOT_APP_ID_INPUT = {
  /**
   * Bot Id
   * @description Internal BotStar ID of the bot. If provided, only returns the matching bot's appId.
   * @default null
   */
  bot_id: number | null;
  /**
   * Bot Name
   * @description Case-insensitive name of the bot to filter by. Ignored if `bot_id` is provided. If neither is provided, returns all bots.
   * @default null
   */
  bot_name: string | null;
};

/**
 * Type of BOTSTAR's BOTSTAR_GET_BOT_APP_ID tool output.
 */
type BOTSTAR_GET_BOT_APP_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * App Ids
       * @description List of BotStar application IDs (`appId`) for the matching bots
       */
      app_ids: string[];
      /**
       * Bots
       * @description List of matching bot objects fetched from BotStar
       */
      bots: {
          /**
           * App Id
           * @description Application ID for initializing the SDK
           */
          appId: string;
          /**
           * Bot Id
           * @description Internal BotStar ID for the bot
           */
          botId: number;
          /**
           * Name
           * @description Name of the bot
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
 * Type of BOTSTAR's BOTSTAR_LIVECHAT_BOOT tool input.
 */
type BOTSTAR_LIVECHAT_BOOT_INPUT = {
  /**
   * App Id
   * @description Your BotStar application ID.
   */
  appId?: string;
  /**
   * Block
   * @description ID of the starting block in your chatbot flow to display next.
   * @default null
   */
  block: string | null;
  /**
   * Mode
   * @description Display mode of the widget.
   * @default null
   * @enum {string|null}
   */
  mode: "livechat" | "popup" | "inline" | "fullpage" | null;
  /**
   * LivechatBootUserData
   * @description User data attributes to load or update. Unset fields will be ignored.
   * @default null
   */
  user: {
      /**
       * Avatar
       * @description URL of the user's avatar image.
       * @default null
       */
      avatar: string | null;
      /**
       * Birthday
       * @description User's birthday in YYYY-MM-DD format.
       * @default null
       */
      birthday: string | null;
      /**
       * Email
       * @description Associated email on the user account.
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description User's first name.
       * @default null
       */
      first_name: string | null;
      /**
       * Gender
       * @description User's gender. Allowed values: 'male', 'female', or empty string.
       * @default null
       * @enum {string|null}
       */
      gender: "male" | "female" | "" | null;
      /**
       * Last Name
       * @description User's last name.
       * @default null
       */
      last_name: string | null;
      /**
       * Tags
       * @description List of tags for the user. Replaces existing tags in BotStar.
       * @default null
       */
      tags: string[] | null;
      /**
       * User Id
       * @description Unique ID for your user. If not found, a new user will be created.
       * @default null
       */
      user_id: string | null;
  } | null;
  /**
   * Variables
   * @description Map of custom variables (string keys) to string or number values.
   * @default null
   */
  variables: {
      [key: string]: string | number;
  } | null;
};

/**
 * Type of BOTSTAR's BOTSTAR_LIVECHAT_BOOT tool output.
 */
type BOTSTAR_LIVECHAT_BOOT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Js
       * @description JavaScript snippet to invoke BotStarApi('boot', ...)
       */
      js: string;
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
 * Type of BOTSTAR's BOTSTAR_LIVECHAT_CLOSE tool input.
 */
type BOTSTAR_LIVECHAT_CLOSE_INPUT = object;

/**
 * Type of BOTSTAR's BOTSTAR_LIVECHAT_CLOSE tool output.
 */
type BOTSTAR_LIVECHAT_CLOSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Js
       * @description JavaScript snippet that hides the live chat window using BotStarApi('close').
       */
      js: string;
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
 * Type of BOTSTAR's BOTSTAR_LIVECHAT_ON_OPEN tool input.
 */
type BOTSTAR_LIVECHAT_ON_OPEN_INPUT = {
  /**
   * Callback
   * @description JavaScript callback function to execute when the chat window opens (e.g., `function() { /* ... *\/ }`).
   */
  callback?: string;
};

/**
 * Type of BOTSTAR's BOTSTAR_LIVECHAT_ON_OPEN tool output.
 */
type BOTSTAR_LIVECHAT_ON_OPEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Snippet
       * @description JavaScript snippet to invoke BotStarApi('onOpen', callback).
       */
      snippet: string;
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
 * Type of BOTSTAR's BOTSTAR_LIVECHAT_OPEN tool input.
 */
type BOTSTAR_LIVECHAT_OPEN_INPUT = object;

/**
 * Type of BOTSTAR's BOTSTAR_LIVECHAT_OPEN tool output.
 */
type BOTSTAR_LIVECHAT_OPEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Js
       * @description JavaScript snippet to invoke BotStarApi('open')
       */
      js: string;
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
 * Type of BOTSTAR's BOTSTAR_LIVECHAT_UPDATE tool input.
 */
type BOTSTAR_LIVECHAT_UPDATE_INPUT = {
  /**
   * Avatar
   * @description URL to the user's avatar image.
   * @default null
   */
  avatar: string | null;
  /**
   * Birthday
   * @description User's birthday in 'YYYY-MM-DD' format.
   * @default null
   */
  birthday: string | null;
  /**
   * Email
   * @description User's email address.
   * @default null
   */
  email: string | null;
  /**
   * First Name
   * @description User's first name.
   * @default null
   */
  first_name: string | null;
  /**
   * Gender
   * @description User's gender. Choose from 'male', 'female', or ''.
   * @default null
   * @enum {string|null}
   */
  gender: "male" | "female" | "" | null;
  /**
   * Last Name
   * @description User's last name.
   * @default null
   */
  last_name: string | null;
  /**
   * Tags
   * @description Tags associated with the user. This will replace current tags.
   * @default null
   */
  tags: string[] | null;
  /**
   * User Id
   * @description Unique identifier for the user.
   * @default null
   */
  user_id: string | null;
};

/**
 * Type of BOTSTAR's BOTSTAR_LIVECHAT_UPDATE tool output.
 */
type BOTSTAR_LIVECHAT_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Snippet
       * @description JavaScript snippet calling BotStarApi('update', updateData).
       */
      snippet: string;
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
 * Type of BOTSTAR's BOTSTAR_WEBVIEW_GET_PARAMETER tool input.
 */
type BOTSTAR_WEBVIEW_GET_PARAMETER_INPUT = {
  /**
   * Parameter Name
   * @description Name of the parameter as defined in your HTML meta tag `bs:input:<dataName>`
   */
  parameter_name?: string;
};

/**
 * Type of BOTSTAR's BOTSTAR_WEBVIEW_GET_PARAMETER tool output.
 */
type BOTSTAR_WEBVIEW_GET_PARAMETER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Js
       * @description JavaScript snippet to retrieve the parameter via `BotStarWebview('getParameter', '<parameter_name>')`
       */
      js: string;
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
 * Type of BOTSTAR's BOTSTAR_WEBVIEW_SEND_RESPONSE tool input.
 */
type BOTSTAR_WEBVIEW_SEND_RESPONSE_INPUT = {
  /**
   * Outlet Name
   * @description Name of the outlet to send data through, requires a bs:outlet:<outletName> meta tag.
   */
  outlet_name?: string;
  /**
   * Outputs
   * @description Object of outputs where each key corresponds to a bs:output:<key> meta tag, and values must be string or number.
   */
  outputs?: {
      [key: string]: string | number;
  };
  /**
   * Response
   * @description Anything you want to respond back to the BotStar chatbot.
   */
  response?: string;
};

/**
 * Type of BOTSTAR's BOTSTAR_WEBVIEW_SEND_RESPONSE tool output.
 */
type BOTSTAR_WEBVIEW_SEND_RESPONSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Snippet
       * @description JavaScript snippet calling BotStarWebview('sendResponse', response, outputs, outletName).
       */
      snippet: string;
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
 * Type map of all available tool input types for toolkit "BOTSTAR".
 */
export type BOTSTAR_TOOL_INPUTS = {
  BOTSTAR_LIVECHAT_ON_CLOSE: BOTSTAR_BOTSTAR_LIVECHAT_ON_CLOSE_INPUT
  GET_BOT_APP_ID: BOTSTAR_GET_BOT_APP_ID_INPUT
  LIVECHAT_BOOT: BOTSTAR_LIVECHAT_BOOT_INPUT
  LIVECHAT_CLOSE: BOTSTAR_LIVECHAT_CLOSE_INPUT
  LIVECHAT_ON_OPEN: BOTSTAR_LIVECHAT_ON_OPEN_INPUT
  LIVECHAT_OPEN: BOTSTAR_LIVECHAT_OPEN_INPUT
  LIVECHAT_UPDATE: BOTSTAR_LIVECHAT_UPDATE_INPUT
  WEBVIEW_GET_PARAMETER: BOTSTAR_WEBVIEW_GET_PARAMETER_INPUT
  WEBVIEW_SEND_RESPONSE: BOTSTAR_WEBVIEW_SEND_RESPONSE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BOTSTAR".
 */
export type BOTSTAR_TOOL_OUTPUTS = {
  BOTSTAR_LIVECHAT_ON_CLOSE: BOTSTAR_BOTSTAR_LIVECHAT_ON_CLOSE_OUTPUT
  GET_BOT_APP_ID: BOTSTAR_GET_BOT_APP_ID_OUTPUT
  LIVECHAT_BOOT: BOTSTAR_LIVECHAT_BOOT_OUTPUT
  LIVECHAT_CLOSE: BOTSTAR_LIVECHAT_CLOSE_OUTPUT
  LIVECHAT_ON_OPEN: BOTSTAR_LIVECHAT_ON_OPEN_OUTPUT
  LIVECHAT_OPEN: BOTSTAR_LIVECHAT_OPEN_OUTPUT
  LIVECHAT_UPDATE: BOTSTAR_LIVECHAT_UPDATE_OUTPUT
  WEBVIEW_GET_PARAMETER: BOTSTAR_WEBVIEW_GET_PARAMETER_OUTPUT
  WEBVIEW_SEND_RESPONSE: BOTSTAR_WEBVIEW_SEND_RESPONSE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BOTSTAR toolkit.
 */
export const BOTSTAR = {
  slug: "botstar",
  tools: {
    /**
     * Tool to register a callback when the chat window is closed. use after the widget is initialized. example prompt: "register an onclose handler that logs 'goodbye!' to the console."
     */
    BOTSTAR_LIVECHAT_ON_CLOSE: "BOTSTAR_BOTSTAR_LIVECHAT_ON_CLOSE",
    /**
     * Tool to retrieve the botstar application id (`appid`). use when initializing or reinitializing the live chat widget.
     */
    GET_BOT_APP_ID: "BOTSTAR_GET_BOT_APP_ID",
    /**
     * Tool to reinitialize the live chat widget with provided data. use after initial load to reset or update widget configuration.
     */
    LIVECHAT_BOOT: "BOTSTAR_LIVECHAT_BOOT",
    /**
     * Tool to hide the live chat window. use when the chat widget is configured in livechat or popup mode.
     */
    LIVECHAT_CLOSE: "BOTSTAR_LIVECHAT_CLOSE",
    /**
     * Tool to register a callback when the chat window is opened. use after widget initialization.
     */
    LIVECHAT_ON_OPEN: "BOTSTAR_LIVECHAT_ON_OPEN",
    /**
     * Tool to show the live chat window. use after the widget has been bootstrapped with botstarapi('boot') to programmatically open the chat window (mode must be 'livechat' or 'popup').
     */
    LIVECHAT_OPEN: "BOTSTAR_LIVECHAT_OPEN",
    /**
     * Tool to update user details on the current live chat session. use when you need to modify user profile attributes during an active conversation.
     */
    LIVECHAT_UPDATE: "BOTSTAR_LIVECHAT_UPDATE",
    /**
     * Tool to retrieve a parameter value passed from the botstar chatbot to the webview. use inside onchatbotready after your page loads in modal mode with bs:input meta tags.
     */
    WEBVIEW_GET_PARAMETER: "BOTSTAR_WEBVIEW_GET_PARAMETER",
    /**
     * Tool to send data from the webview back to the botstar chatbot. use when you need to transmit responses or custom outputs from an open webview.
     */
    WEBVIEW_SEND_RESPONSE: "BOTSTAR_WEBVIEW_SEND_RESPONSE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BOTSTAR".
 */
export type BOTSTAR_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BOTSTAR".
 */
export type BOTSTAR_TRIGGER_EVENTS = {}
