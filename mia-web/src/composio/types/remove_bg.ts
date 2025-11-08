// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of REMOVE_BG's REMOVE_BG_GET_ACCOUNT tool input.
 */
type REMOVE_BG_GET_ACCOUNT_INPUT = object;

/**
 * Type of REMOVE_BG's REMOVE_BG_GET_ACCOUNT tool output.
 */
type REMOVE_BG_GET_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Main response object containing account details
   */
  data?: {
      /**
       * Attributes
       * @description Account attributes
       */
      attributes: {
          /**
           * Account Type
           * @description Type of the account (e.g., "developer")
           */
          account_type: string;
          /**
           * Api
           * @description API usage details
           */
          api: {
              /**
               * Limit
               * @description API call quota/limit in the current period
               */
              limit: number;
              /**
               * Usage
               * @description Number of API calls used in the current period
               */
              usage: number;
          };
          /**
           * Credits
           * @description Credit details of the account
           */
          credits: {
              /**
               * Api
               * @description API credits available
               */
              api: number;
              /**
               * Payg
               * @description Pay-as-you-go credits left
               */
              payg: number;
              /**
               * Subscription
               * @description Subscription credits left in the current period
               */
              subscription: number;
              /**
               * Total
               * @description Total credits assigned to the account
               */
              total: number;
          };
          /**
           * Email
           * @description The email address of the account
           */
          email: string;
          /**
           * Plan
           * @description Subscription plan details
           */
          plan: {
              /**
               * Id
               * @description Identifier for the current plan
               */
              id: string;
              /**
               * Name
               * @description Name of the subscription plan
               */
              name: string;
          };
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Additional metadata
   */
  meta?: {
      /**
       * Copyright
       * @description Copyright information
       */
      copyright: string;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of REMOVE_BG's REMOVE_BG_REMOVE_BG tool input.
 */
type REMOVE_BG_REMOVE_BG_INPUT = {
  /**
   * Bg Color
   * @description Hex color '#RRGGBB' to fill background instead of transparency.
   * @default null
   */
  bg_color: string | null;
  /**
   * Bg Image File
   * Format: binary
   * @description Background image file bytes to composite behind subject.
   * @default null
   */
  bg_image_file: string | null;
  /**
   * Bg Image Url
   * Format: uri
   * @description Background image URL to composite behind subject.
   * @default null
   */
  bg_image_url: string | null;
  /**
   * Channels
   * @description Output channels. Only 'rgba' supported.
   * @default null
   * @constant
   */
  channels: "rgba";
  /**
   * Crop
   * @description Crop to ROI if true.
   * @default null
   */
  crop: boolean | null;
  /**
   * Format
   * @description Output image format. One of 'auto', 'png', 'jpg'.
   * @default null
   * @enum {string|null}
   */
  format: "auto" | "png" | "jpg" | null;
  /**
   * Image File
   * Format: binary
   * @description Raw bytes of the image file to upload (multipart/form-data). Required if `image_url` is not provided.
   * @default null
   */
  image_file: string | null;
  /**
   * Image Url
   * Format: uri
   * @description URL of the image to process. Required if `image_file` is not provided.
   * @default null
   */
  image_url: string | null;
  /**
   * Position
   * @description Position of subject: 'center' or 'original'.
   * @default null
   * @enum {string|null}
   */
  position: "center" | "original" | null;
  /**
   * Roi
   * @description Region of interest in pixels as 'left,top,width,height'.
   * @default null
   */
  roi: string | null;
  /**
   * Scale
   * @description Scale factor between 0.1 and 10.0.
   * @default null
   */
  scale: number | null;
  /**
   * Size
   * @description Output image size. One of 'auto', 'preview', 'full'.
   * @default null
   * @enum {string|null}
   */
  size: "auto" | "preview" | "full" | null;
  /**
   * Type
   * @description Image category. One of 'auto', 'person', 'product'.
   * @default null
   * @enum {string|null}
   */
  type: "auto" | "person" | "product" | null;
};

/**
 * Type of REMOVE_BG's REMOVE_BG_REMOVE_BG tool output.
 */
type REMOVE_BG_REMOVE_BG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image
       * Format: binary
       * @description Binary data of the image with background removed.
       */
      image: string;
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
 * Type map of all available tool input types for toolkit "REMOVE_BG".
 */
export type REMOVE_BG_TOOL_INPUTS = {
  GET_ACCOUNT: REMOVE_BG_GET_ACCOUNT_INPUT
  REMOVE_BG: REMOVE_BG_REMOVE_BG_INPUT
}

/**
 * Type map of all available tool input types for toolkit "REMOVE_BG".
 */
export type REMOVE_BG_TOOL_OUTPUTS = {
  GET_ACCOUNT: REMOVE_BG_GET_ACCOUNT_OUTPUT
  REMOVE_BG: REMOVE_BG_REMOVE_BG_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's REMOVE_BG toolkit.
 */
export const REMOVE_BG = {
  slug: "remove_bg",
  tools: {
    /**
     * Tool to retrieve account information, including current credit balance. use when you need to know your remove.bg account's credit and usage details.
     */
    GET_ACCOUNT: "REMOVE_BG_GET_ACCOUNT",
    /**
     * Tool to remove background from an image. use when you need a transparent or custom background for product or profile photos.
     */
    REMOVE_BG: "REMOVE_BG_REMOVE_BG",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "REMOVE_BG".
 */
export type REMOVE_BG_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "REMOVE_BG".
 */
export type REMOVE_BG_TRIGGER_EVENTS = {}
