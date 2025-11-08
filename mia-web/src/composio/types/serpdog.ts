// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SERPDOG's SERPDOG_SCREENSHOT_API tool input.
 */
type SERPDOG_SCREENSHOT_API_INPUT = {
  /**
   * Dark Mode
   * @description Capture in dark mode if supported (default: false).
   * @default false
   */
  dark_mode: boolean;
  /**
   * Delay
   * @description Seconds to wait before capturing the screenshot (optional).
   * @default null
   */
  delay: number | null;
  /**
   * Device
   * @description Device emulation: 'desktop', 'tablet', or 'mobile'.
   * @default null
   * @enum {string|null}
   */
  device: "desktop" | "tablet" | "mobile" | null;
  /**
   * Full Page
   * @description Capture the entire scrollable page (default: false).
   * @default false
   */
  full_page: boolean;
  /**
   * No Cookie Banners
   * @description Hide cookie banners if possible (default: false).
   * @default false
   */
  no_cookie_banners: boolean;
  /**
   * Output
   * @description Response format: 'json' returns base64-encoded PNG in JSON; 'image' returns raw PNG bytes.
   * @default image
   * @enum {string}
   */
  output: "json" | "image";
  /**
   * Url
   * @description Fully-qualified URL of the page to capture.
   */
  url?: string;
  /**
   * Window Height
   * @description Viewport height in pixels (optional).
   * @default null
   */
  window_height: number | null;
  /**
   * Window Width
   * @description Viewport width in pixels (optional).
   * @default null
   */
  window_width: number | null;
};

/**
 * Type of SERPDOG's SERPDOG_SCREENSHOT_API tool output.
 */
type SERPDOG_SCREENSHOT_API_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image
       * @description Base64-encoded PNG image when output='json'.
       * @default null
       */
      image: string | null;
      /**
       * Raw
       * Format: binary
       * @description Raw PNG image bytes when output='image'.
       * @default null
       */
      raw: string | null;
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
 * Type map of all available tool input types for toolkit "SERPDOG".
 */
export type SERPDOG_TOOL_INPUTS = {
  SCREENSHOT_API: SERPDOG_SCREENSHOT_API_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SERPDOG".
 */
export type SERPDOG_TOOL_OUTPUTS = {
  SCREENSHOT_API: SERPDOG_SCREENSHOT_API_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SERPDOG toolkit.
 */
export const SERPDOG = {
  slug: "serpdog",
  tools: {
    /**
     * Tool to capture a screenshot of a webpage. use when you need a visual snapshot of a page; supports full-page, device emulation, delays, and dark mode.
     */
    SCREENSHOT_API: "SERPDOG_SCREENSHOT_API",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SERPDOG".
 */
export type SERPDOG_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SERPDOG".
 */
export type SERPDOG_TRIGGER_EVENTS = {}
