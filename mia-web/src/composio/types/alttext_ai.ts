// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ALTTEXT_AI's ALTTEXT_AI_ALT_TEXT_AI_GET_ACCOUNT tool input.
 */
type ALTTEXT_AI_ALT_TEXT_AI_GET_ACCOUNT_INPUT = object;

/**
 * Type of ALTTEXT_AI's ALTTEXT_AI_ALT_TEXT_AI_GET_ACCOUNT tool output.
 */
type ALTTEXT_AI_ALT_TEXT_AI_GET_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ending Period
       * @description True if the billing period is approaching its end
       */
      ending_period: boolean;
      /**
       * Errors
       * @description Any errors returned when retrieving account data
       */
      errors: {
          [key: string]: unknown;
      };
      /**
       * Gpt Prompt
       * @description Custom ChatGPT prompt applied to initial alt text (must be in English)
       * @default null
       */
      gpt_prompt: string | null;
      /**
       * Max Chars
       * @description Maximum length of generated alt text
       */
      max_chars: number;
      /**
       * Name
       * @description Account name, e.g. company or user identifier
       */
      name: string;
      /**
       * No Quotes
       * @description If true, generated alt text will have quotes stripped
       */
      no_quotes: boolean;
      /**
       * Notification Email
       * @description Email address for account notifications
       * @default null
       */
      notification_email: string | null;
      /**
       * Remove Symbols
       * @description List of symbols to remove from generated alt text, e.g. ['#','%']
       */
      remove_symbols: string[];
      /**
       * AccountSubscription
       * @description Details of the account's subscription plan.
       * @default null
       */
      subscription: {
          /**
           * Expires At
           * @description ISO 8601 timestamp when the subscription expires
           */
          expires_at: string;
          /**
           * Plan Name
           * @description Name of the subscription plan, e.g. 'Bronze Plan (Monthly)'
           */
          plan_name: string;
          /**
           * Status
           * @description Current status of the subscription, e.g. 'active'
           */
          status: string;
          /**
           * Usage Quota
           * @description Total number of credits allowed for this subscription plan
           */
          usage_quota: number;
      } | null;
      /**
       * Usage
       * @description Credits used in the current billing period
       */
      usage: number;
      /**
       * Usage Limit
       * @description Maximum credits allowed in the billing period
       */
      usage_limit: number;
      /**
       * Webhook Url
       * @description Default webhook URL for asynchronous notifications
       * @default null
       */
      webhook_url: string | null;
      /**
       * Whitelabel
       * @description Whether whitelabel mode is enabled (removes AltText.ai branding)
       */
      whitelabel: boolean;
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
 * Type of ALTTEXT_AI's ALTTEXT_AI_GET_ACCOUNT tool input.
 */
type ALTTEXT_AI_GET_ACCOUNT_INPUT = object;

/**
 * Type of ALTTEXT_AI's ALTTEXT_AI_GET_ACCOUNT tool output.
 */
type ALTTEXT_AI_GET_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ending Period
       * @description True if the billing period is approaching its end
       */
      ending_period: boolean;
      /**
       * Errors
       * @description Field-specific error information for account settings retrieval
       */
      errors: {
          [key: string]: string | null;
      };
      /**
       * Gpt Prompt
       * @description Custom ChatGPT prompt applied to initial alt text (must be in English)
       * @default null
       */
      gpt_prompt: string | null;
      /**
       * Max Chars
       * @description Maximum length of generated alt text
       */
      max_chars: number;
      /**
       * Name
       * @description Account name, e.g. company or user identifier
       */
      name: string;
      /**
       * No Quotes
       * @description If true, generated alt text will have quotes stripped
       */
      no_quotes: boolean;
      /**
       * Notification Email
       * @description Email address for account notifications
       * @default null
       */
      notification_email: string | null;
      /**
       * Remove Symbols
       * @description List of symbols to remove from generated alt text, e.g. ['#','%']
       */
      remove_symbols: string[];
      /**
       * AccountSubscription
       * @description Details of the account's subscription plan.
       * @default null
       */
      subscription: {
          /**
           * Expires At
           * @description ISO 8601 timestamp when the subscription expires
           */
          expires_at: string;
          /**
           * Plan Name
           * @description Name of the subscription plan, e.g. 'Bronze Plan (Monthly)'
           */
          plan_name: string;
          /**
           * Status
           * @description Current status of the subscription, e.g. 'active'
           */
          status: string;
          /**
           * Usage Quota
           * @description Total number of credits allowed for this subscription plan
           */
          usage_quota: number;
      } | null;
      /**
       * Usage
       * @description Credits used in the current billing period
       */
      usage: number;
      /**
       * Usage Limit
       * @description Maximum credits allowed in the billing period
       */
      usage_limit: number;
      /**
       * Webhook Url
       * @description Default webhook URL for asynchronous notifications
       * @default null
       */
      webhook_url: string | null;
      /**
       * Whitelabel
       * @description Whether whitelabel mode is enabled (removes AltText.ai branding)
       */
      whitelabel: boolean;
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
 * Type of ALTTEXT_AI's ALTTEXT_AI_GET_IMAGES tool input.
 */
type ALTTEXT_AI_GET_IMAGES_INPUT = {
  /**
   * Limit
   * @description Number of images per page (max 100).
   * @default 20
   */
  limit: number;
  /**
   * Page
   * @description Page number to retrieve, starting at 1.
   * @default 1
   */
  page: number;
  /**
   * Url
   * @description Exact URL to filter images by. Must match the stored image URL exactly; no wildcards.
   * @default null
   */
  url: string | null;
};

/**
 * Type of ALTTEXT_AI's ALTTEXT_AI_GET_IMAGES tool output.
 */
type ALTTEXT_AI_GET_IMAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Images
       * @description Paginated list of images in the library.
       */
      images: {
          /**
           * Alt Text
           * @description Primary generated alt text for the image.
           */
          alt_text: string;
          /**
           * Alt Texts
           * @description All generated alt texts keyed by language code.
           */
          alt_texts: {
              [key: string]: string;
          };
          /**
           * Asset Id
           * @description Unique identifier for the image asset.
           */
          asset_id: string;
          /**
           * Created At
           * @description Unix timestamp when the image was added to the library.
           */
          created_at: number;
          /**
           * Error Code
           * @description Top-level error code if the image failed processing.
           * @default null
           */
          error_code: string | null;
          /**
           * Errors
           * @description Field-specific error information, if any.
           */
          errors: {
              [key: string]: string | null;
          };
          /**
           * Tags
           * @description List of tags associated with the image.
           */
          tags: string[];
          /**
           * Url
           * @description Original URL of the image.
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
 * Type of ALTTEXT_AI's ALTTEXT_AI_SEARCH_IMAGES tool input.
 */
type ALTTEXT_AI_SEARCH_IMAGES_INPUT = {
  /**
   * Filters
   * @description Optional filters to refine image search results.
   * @default null
   */
  filters: {
      /**
       * Color
       * @description Filter by dominant color (hex code or name).
       * @default null
       */
      color: string | null;
      /**
       * License
       * @description License type to filter images by (e.g., 'cc0', 'by').
       * @default null
       */
      license: string | null;
      /**
       * Orientation
       * @description Desired image orientation.
       * @default null
       * @enum {string|null}
       */
      orientation: "horizontal" | "vertical" | "square" | null;
  } | null;
  /**
   * Page
   * @description Results page number, default is 1.
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page, default is 10.
   * @default 10
   */
  per_page: number | null;
  /**
   * Query
   * @description Search keywords or phrase.
   */
  query?: string;
};

/**
 * Type of ALTTEXT_AI's ALTTEXT_AI_SEARCH_IMAGES tool output.
 */
type ALTTEXT_AI_SEARCH_IMAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page
       * @description Current results page number.
       */
      page: number;
      /**
       * Per Page
       * @description Number of results per page.
       */
      per_page: number;
      /**
       * Results
       * @description List of matching images.
       */
      results: {
          /**
           * Alt Text
           * @description Automatically generated alt text for the image.
           */
          alt_text: string;
          /**
           * Description
           * @description Extended description of the image.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier for the image.
           */
          id: string;
          /**
           * License
           * @description License type for the image.
           * @default null
           */
          license: string | null;
          /**
           * Source
           * @description Source or provider name.
           * @default null
           */
          source: string | null;
          /**
           * Title
           * @description Image title, if available.
           * @default null
           */
          title: string | null;
          /**
           * Url
           * @description Direct URL to the image file.
           */
          url: string;
      }[];
      /**
       * Total
       * @description Total number of matching images found.
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
 * Type of ALTTEXT_AI's ALTTEXT_AI_UPDATE_ACCOUNT tool input.
 */
type ALTTEXT_AI_UPDATE_ACCOUNT_INPUT = {
  /**
   * Account
   * @description Account settings to update, nested object.
   */
  account?: {
      /**
       * Name
       * @description The name of your account (max length 512).
       * @default null
       */
      name: string | null;
      /**
       * Notification Email
       * @description [optional] The email address to notify for important transactional events.
       * @default null
       */
      notification_email: string | null;
      /**
       * Webhook Url
       * @description [optional] The notification URL to use for webhooks (max length 1024).
       * @default null
       */
      webhook_url: string | null;
  };
};

/**
 * Type of ALTTEXT_AI's ALTTEXT_AI_UPDATE_ACCOUNT tool output.
 */
type ALTTEXT_AI_UPDATE_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ending Period
       * @description True if the billing period is approaching its end
       */
      ending_period: boolean;
      /**
       * Errors
       * @description Field-specific error information for account settings
       */
      errors: {
          [key: string]: unknown;
      };
      /**
       * Gpt Prompt
       * @description Custom ChatGPT prompt applied to initial alt text (must be in English)
       * @default null
       */
      gpt_prompt: string | null;
      /**
       * Max Chars
       * @description Maximum length of generated alt text
       */
      max_chars: number;
      /**
       * Name
       * @description Account name, e.g. company or user identifier
       */
      name: string;
      /**
       * No Quotes
       * @description If true, generated alt text will have quotes stripped
       */
      no_quotes: boolean;
      /**
       * Notification Email
       * @description Email address for account notifications
       * @default null
       */
      notification_email: string | null;
      /**
       * Remove Symbols
       * @description List of symbols to remove from generated alt text, e.g. ['#','%']
       */
      remove_symbols: string[];
      /**
       * AccountSubscription
       * @description Details of the account's subscription plan.
       * @default null
       */
      subscription: {
          /**
           * Expires At
           * @description ISO 8601 timestamp when the subscription expires
           */
          expires_at: string;
          /**
           * Plan Name
           * @description Name of the subscription plan, e.g. 'Bronze Plan (Monthly)'
           */
          plan_name: string;
          /**
           * Status
           * @description Current status of the subscription, e.g. 'active'
           */
          status: string;
          /**
           * Usage Quota
           * @description Total number of credits allowed for this subscription plan
           */
          usage_quota: number;
      } | null;
      /**
       * Usage
       * @description Credits used in the current billing period
       */
      usage: number;
      /**
       * Usage Limit
       * @description Maximum credits allowed in the billing period
       */
      usage_limit: number;
      /**
       * Webhook Url
       * @description Notification URL for asynchronous notifications
       * @default null
       */
      webhook_url: string | null;
      /**
       * Whitelabel
       * @description Whether whitelabel mode is enabled (removes AltText.ai branding)
       */
      whitelabel: boolean;
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
 * Type map of all available tool input types for toolkit "ALTTEXT_AI".
 */
export type ALTTEXT_AI_TOOL_INPUTS = {
  ALT_TEXT_AI_GET_ACCOUNT: ALTTEXT_AI_ALT_TEXT_AI_GET_ACCOUNT_INPUT
  GET_ACCOUNT: ALTTEXT_AI_GET_ACCOUNT_INPUT
  GET_IMAGES: ALTTEXT_AI_GET_IMAGES_INPUT
  SEARCH_IMAGES: ALTTEXT_AI_SEARCH_IMAGES_INPUT
  UPDATE_ACCOUNT: ALTTEXT_AI_UPDATE_ACCOUNT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ALTTEXT_AI".
 */
export type ALTTEXT_AI_TOOL_OUTPUTS = {
  ALT_TEXT_AI_GET_ACCOUNT: ALTTEXT_AI_ALT_TEXT_AI_GET_ACCOUNT_OUTPUT
  GET_ACCOUNT: ALTTEXT_AI_GET_ACCOUNT_OUTPUT
  GET_IMAGES: ALTTEXT_AI_GET_IMAGES_OUTPUT
  SEARCH_IMAGES: ALTTEXT_AI_SEARCH_IMAGES_OUTPUT
  UPDATE_ACCOUNT: ALTTEXT_AI_UPDATE_ACCOUNT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ALTTEXT_AI toolkit.
 */
export const ALTTEXT_AI = {
  slug: "alttext_ai",
  tools: {
    /**
     * Tool to retrieve account settings and usage information. use when you need to check your alttext.ai account configuration and usage limits before generating alt text.
     */
    ALT_TEXT_AI_GET_ACCOUNT: "ALTTEXT_AI_ALT_TEXT_AI_GET_ACCOUNT",
    /**
     * Tool to retrieve account settings and usage information. use when you need to check your alttext.ai account configuration and usage limits before generating alt text.
     */
    GET_ACCOUNT: "ALTTEXT_AI_GET_ACCOUNT",
    /**
     * Tool to retrieve a paginated list of images in your library, including their alt text and metadata. use when you need to browse or filter images programmatically after authentication.
     */
    GET_IMAGES: "ALTTEXT_AI_GET_IMAGES",
    /**
     * Tool to search for images and their alt text. use after specifying search keywords to retrieve matching images.
     */
    SEARCH_IMAGES: "ALTTEXT_AI_SEARCH_IMAGES",
    /**
     * Tool to update account settings (e.g., webhook url, name). use after confirming current account details to modify settings.
     */
    UPDATE_ACCOUNT: "ALTTEXT_AI_UPDATE_ACCOUNT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ALTTEXT_AI".
 */
export type ALTTEXT_AI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ALTTEXT_AI".
 */
export type ALTTEXT_AI_TRIGGER_EVENTS = {}
