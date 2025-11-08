// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CASTINGWORDS's CASTINGWORDS_CANCEL_AUDIOFILE tool input.
 */
type CASTINGWORDS_CANCEL_AUDIOFILE_INPUT = {
  /**
   * Audiofile Id
   * @description ID of the audio file to refund.
   */
  audiofile_id?: number;
  /**
   * Test
   * @description If set to 'true', returns a fake approval for testing. Only valid when audiofile_id is 100 or 101.
   * @default null
   */
  test: string | null;
};

/**
 * Type of CASTINGWORDS's CASTINGWORDS_CANCEL_AUDIOFILE tool output.
 */
type CASTINGWORDS_CANCEL_AUDIOFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Success message indicating the refund status.
       */
      message: string;
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
 * Type of CASTINGWORDS's CASTINGWORDS_GET_PREPAY_BALANCE tool input.
 */
type CASTINGWORDS_GET_PREPAY_BALANCE_INPUT = object;

/**
 * Type of CASTINGWORDS's CASTINGWORDS_GET_PREPAY_BALANCE tool output.
 */
type CASTINGWORDS_GET_PREPAY_BALANCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Balance
       * @description The current prepay balance in USD for this account.
       */
      balance: number;
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
 * Type of CASTINGWORDS's CASTINGWORDS_GET_WEBHOOK tool input.
 */
type CASTINGWORDS_GET_WEBHOOK_INPUT = object;

/**
 * Type of CASTINGWORDS's CASTINGWORDS_GET_WEBHOOK tool output.
 */
type CASTINGWORDS_GET_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Webhook
       * @description The registered webhook URL for the account.
       */
      webhook: string;
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
 * Type of CASTINGWORDS's CASTINGWORDS_ORDER_TRANSCRIPT tool input.
 */
type CASTINGWORDS_ORDER_TRANSCRIPT_INPUT = {
  /**
   * Name
   * @description List of speaker names in the audio. Alias 'name' also supported.
   * @default null
   */
  name: string[] | null;
  /**
   * Notes
   * @description Optional comments for the transcribers about this file.
   * @default null
   */
  notes: string | null;
  /**
   * Sku
   * @description One or more SKUs to order for each URL. Transcription SKUs: TRANS14 (Budget), TRANS2 (1-Day), TRANS6/7 (7-Day). Add-ons: DIFFQ2 (Difficult Audio), TSTMP1 (Timestamps), CAPTION1 (Captions), VERBATIM1 (Verbatim).
   */
  sku?: string | null;
  /**
   * Test
   * @description If true, creates a test-only order that will not actually be transcribed.
   * @default false
   */
  test: boolean;
  /**
   * Url
   * @description URL or list of URLs of the audio/video file to transcribe (preferably MP3).
   */
  url?: string | null;
};

/**
 * Type of CASTINGWORDS's CASTINGWORDS_ORDER_TRANSCRIPT tool output.
 */
type CASTINGWORDS_ORDER_TRANSCRIPT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Audiofiles
       * @description Newly created audiofile IDs (one per URL).
       */
      audiofiles: number[];
      /**
       * Message
       * @description Human-readable status message.
       */
      message: string;
      /**
       * Order
       * @description ID of the created order.
       */
      order: number;
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
 * Type of CASTINGWORDS's CASTINGWORDS_ORDER_UPGRADES tool input.
 */
type CASTINGWORDS_ORDER_UPGRADES_INPUT = {
  /**
   * Audiofile Id
   * @description ID of the audio file to upgrade
   */
  audiofile_id?: number;
  /**
   * Sku
   * @description One or more SKUs to order: DIFFQ2 (Difficult Audio), TSTMP1 (Timestamps), EDIT01 (Extra Editing), UPGRD1 (TRANS14→TRANS6), UPGRD2 (TRANS14→TRANS2), UPGRD3 (TRANS6→TRANS2)
   */
  sku?: string[];
  /**
   * Test
   * @description Set to true to run in test mode returning a fake success. Only valid for audiofile IDs 100 and 101.
   * @default null
   */
  test: boolean | null;
};

/**
 * Type of CASTINGWORDS's CASTINGWORDS_ORDER_UPGRADES tool output.
 */
type CASTINGWORDS_ORDER_UPGRADES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Success or failure message from the API
       */
      message: string;
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
 * Type of CASTINGWORDS's CASTINGWORDS_REGISTER_WEBHOOK tool input.
 */
type CASTINGWORDS_REGISTER_WEBHOOK_INPUT = {
  /**
   * Webhook
   * @description The HTTPS endpoint URL for webhook notifications on transcript completion.
   */
  webhook?: string;
};

/**
 * Type of CASTINGWORDS's CASTINGWORDS_REGISTER_WEBHOOK tool output.
 */
type CASTINGWORDS_REGISTER_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Webhook
       * @description The currently registered webhook URL for this account.
       * @default null
       */
      webhook: string | null;
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
 * Type of CASTINGWORDS's CASTINGWORDS_SKU_LIST tool input.
 */
type CASTINGWORDS_SKU_LIST_INPUT = object;

/**
 * Type of CASTINGWORDS's CASTINGWORDS_SKU_LIST tool output.
 */
type CASTINGWORDS_SKU_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Skus
       * @description List of available SKUs with their details.
       */
      skus: {
          /**
           * Description
           * @description Description of the SKU.
           */
          description: string;
          /**
           * Name
           * @description Name of the SKU.
           */
          name: string;
          /**
           * Price
           * @description Price of the SKU in USD.
           */
          price: number;
          /**
           * Sku
           * @description SKU code.
           */
          sku: string;
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
 * Type of CASTINGWORDS's CASTINGWORDS_TEST_WEBHOOK tool input.
 */
type CASTINGWORDS_TEST_WEBHOOK_INPUT = {
  /**
   * Event
   * @description Type of webhook event to test. One of 'TRANSCRIPT_COMPLETE', 'DIFFICULT_AUDIO', or 'REFUND_ISSUED'.
   * @enum {string}
   */
  event?: "TRANSCRIPT_COMPLETE" | "DIFFICULT_AUDIO" | "REFUND_ISSUED";
};

/**
 * Type of CASTINGWORDS's CASTINGWORDS_TEST_WEBHOOK tool output.
 */
type CASTINGWORDS_TEST_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Response message indicating the result of the test webhook call.
       */
      message: string;
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
 * Type map of all available tool input types for toolkit "CASTINGWORDS".
 */
export type CASTINGWORDS_TOOL_INPUTS = {
  CANCEL_AUDIOFILE: CASTINGWORDS_CANCEL_AUDIOFILE_INPUT
  GET_PREPAY_BALANCE: CASTINGWORDS_GET_PREPAY_BALANCE_INPUT
  GET_WEBHOOK: CASTINGWORDS_GET_WEBHOOK_INPUT
  ORDER_TRANSCRIPT: CASTINGWORDS_ORDER_TRANSCRIPT_INPUT
  ORDER_UPGRADES: CASTINGWORDS_ORDER_UPGRADES_INPUT
  REGISTER_WEBHOOK: CASTINGWORDS_REGISTER_WEBHOOK_INPUT
  SKU_LIST: CASTINGWORDS_SKU_LIST_INPUT
  TEST_WEBHOOK: CASTINGWORDS_TEST_WEBHOOK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CASTINGWORDS".
 */
export type CASTINGWORDS_TOOL_OUTPUTS = {
  CANCEL_AUDIOFILE: CASTINGWORDS_CANCEL_AUDIOFILE_OUTPUT
  GET_PREPAY_BALANCE: CASTINGWORDS_GET_PREPAY_BALANCE_OUTPUT
  GET_WEBHOOK: CASTINGWORDS_GET_WEBHOOK_OUTPUT
  ORDER_TRANSCRIPT: CASTINGWORDS_ORDER_TRANSCRIPT_OUTPUT
  ORDER_UPGRADES: CASTINGWORDS_ORDER_UPGRADES_OUTPUT
  REGISTER_WEBHOOK: CASTINGWORDS_REGISTER_WEBHOOK_OUTPUT
  SKU_LIST: CASTINGWORDS_SKU_LIST_OUTPUT
  TEST_WEBHOOK: CASTINGWORDS_TEST_WEBHOOK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CASTINGWORDS toolkit.
 */
export const CASTINGWORDS = {
  slug: "castingwords",
  tools: {
    /**
     * Tool to cancel an ordered audio file and issue a refund if applicable. use when no transcription work has been done on the file (pre-processing, audio processing, error states).
     */
    CANCEL_AUDIOFILE: "CASTINGWORDS_CANCEL_AUDIOFILE",
    /**
     * Tool to retrieve the current prepay balance for the account. use when you need to check available funds before placing new transcription orders.
     */
    GET_PREPAY_BALANCE: "CASTINGWORDS_GET_PREPAY_BALANCE",
    /**
     * Tool to retrieve the currently registered webhook url for account notifications. use when you need to verify your webhook setup.
     */
    GET_WEBHOOK: "CASTINGWORDS_GET_WEBHOOK",
    /**
     * Tool to create a new transcription order for audio/video at a url. use when you have an accessible media url and need to initiate transcription.
     */
    ORDER_TRANSCRIPT: "CASTINGWORDS_ORDER_TRANSCRIPT",
    /**
     * Tool to order an upgrade for a specific audio file. use after transcription is complete to add items like timestamps or extra editing. example: 'order timestamps for file 12345'.
     */
    ORDER_UPGRADES: "CASTINGWORDS_ORDER_UPGRADES",
    /**
     * Tool to register a webhook url to receive transcript completion notifications. use when you want castingwords to post transcript-complete events to your service endpoint.
     */
    REGISTER_WEBHOOK: "CASTINGWORDS_REGISTER_WEBHOOK",
    /**
     * Tool to retrieve list of available skus. use when you need to know available services and pricing before placing an order.
     */
    SKU_LIST: "CASTINGWORDS_SKU_LIST",
    /**
     * Tool to request a test webhook call for a specific event type. use after registering a webhook url to ensure webhook notifications are functioning properly.
     */
    TEST_WEBHOOK: "CASTINGWORDS_TEST_WEBHOOK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CASTINGWORDS".
 */
export type CASTINGWORDS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CASTINGWORDS".
 */
export type CASTINGWORDS_TRIGGER_EVENTS = {}
