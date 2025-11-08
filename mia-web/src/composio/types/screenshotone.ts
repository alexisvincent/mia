// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SCREENSHOTONE's SCREENSHOTONE_TAKE_ANIMATED_SCREENSHOT tool input.
 */
type SCREENSHOTONE_TAKE_ANIMATED_SCREENSHOT_INPUT = {
  /**
   * Aspect Ratio
   * @description Aspect ratio for the animation (e.g., '16:9'). If specified, width and height are ignored.
   * @default null
   */
  aspect_ratio: string | null;
  /**
   * Block Ads
   * @description Block ads.
   * @default null
   */
  block_ads: boolean | null;
  /**
   * Block Cookie Banners
   * @description Block cookie banners.
   * @default null
   */
  block_cookie_banners: boolean | null;
  /**
   * Clip Height
   * @description Height for clipping the video. Only for GIF format.
   * @default null
   */
  clip_height: number | null;
  /**
   * Clip Width
   * @description Width for clipping the video. Only for GIF format.
   * @default null
   */
  clip_width: number | null;
  /**
   * Clip X
   * @description X-coordinate for clipping the video. Only for GIF format.
   * @default null
   */
  clip_x: number | null;
  /**
   * Clip Y
   * @description Y-coordinate for clipping the video. Only for GIF format.
   * @default null
   */
  clip_y: number | null;
  /**
   * Delay
   * @description Delay before taking the screenshot in milliseconds.
   * @default null
   */
  delay: number | null;
  /**
   * Device Scale Factor
   * @description Device scale factor.
   * @default null
   */
  device_scale_factor: number | null;
  /**
   * Duration
   * @description Duration of the animation in seconds. Minimum 1, maximum 30.
   * @default 5
   */
  duration: number | null;
  /**
   * FormatEnum
   * @description The format of the animated screenshot.
   * @default mp4
   * @enum {string|null}
   */
  format: "mp4" | "mov" | "avi" | "webm" | "gif" | null;
  /**
   * Full Page
   * @description Capture the full scrollable page (Note: for animated, this might interact with scenario).
   * @default null
   */
  full_page: boolean | null;
  /**
   * Height
   * @description Height of the output animation. If specified, width must also be specified. Defaults to viewport height.
   * @default null
   */
  height: number | null;
  /**
   * Omit Background
   * @description Omit background (only for MOV format).
   * @default null
   */
  omit_background: boolean | null;
  /**
   * ScenarioEnum
   * @description Defines the animation behavior. `default` records the site as it appears after loading. `scroll` simulates scrolling.
   * @default default
   * @enum {string|null}
   */
  scenario: "default" | "scroll" | null;
  /**
   * Scroll Back
   * @description Scroll back to the top after reaching the bottom. Applicable if scenario is 'scroll'.
   * @default true
   */
  scroll_back: boolean | null;
  /**
   * Scroll Back After Duration
   * @description Scroll back after the specified duration in milliseconds. Applicable if scenario is 'scroll'.
   * @default null
   */
  scroll_back_after_duration: number | null;
  /**
   * ScrollBackAlgorithmEnum
   * @description Algorithm for scrolling back (`once` or `repeat`). Applicable if scenario is 'scroll'.
   * @default once
   * @enum {string|null}
   */
  scroll_back_algorithm: "once" | "repeat" | null;
  /**
   * Scroll By
   * @description Pixels to scroll per step. Applicable if scenario is 'scroll'.
   * @default 1000
   */
  scroll_by: number | null;
  /**
   * Scroll Complete
   * @description Stop recording animation when full scrolling is completed. Applicable if scenario is 'scroll'.
   * @default true
   */
  scroll_complete: boolean | null;
  /**
   * Scroll Delay
   * @description Delay in milliseconds between scrolls. Applicable if scenario is 'scroll'.
   * @default 500
   */
  scroll_delay: number | null;
  /**
   * Scroll Duration
   * @description Duration in milliseconds of one scroll. Applicable if scenario is 'scroll'.
   * @default 1500
   */
  scroll_duration: number | null;
  /**
   * ScrollEasingEnum
   * @description Scrolling easing effect. Applicable if scenario is 'scroll'.
   * @default ease_in_out_quint
   * @enum {string|null}
   */
  scroll_easing: "linear" | "ease_in_quad" | "ease_out_quad" | "ease_in_out_quad" | "ease_in_cubic" | "ease_out_cubic" | "ease_in_out_cubic" | "ease_in_quart" | "ease_out_quart" | "ease_in_out_quart" | "ease_in_quint" | "ease_out_quint" | "ease_in_out_quint" | null;
  /**
   * Scroll Navigate After
   * @description Navigate after duration in milliseconds (default is half of the duration). Applicable if scenario is 'scroll'.
   * @default null
   */
  scroll_navigate_after: number | null;
  /**
   * Scroll Navigate Link Hints
   * @description Hints for links to use for navigation if scroll_navigate_to_url is not specified. E.g. ['pricing', 'about']. Applicable if scenario is 'scroll'.
   * @default null
   */
  scroll_navigate_link_hints: string[] | null;
  /**
   * Scroll Navigate To Url
   * Format: uri
   * @description URL to navigate to. Applicable if scenario is 'scroll'.
   * @default null
   */
  scroll_navigate_to_url: string | null;
  /**
   * Scroll Start Delay
   * @description Wait time in milliseconds before starting scrolling. Applicable if scenario is 'scroll'.
   * @default 0
   */
  scroll_start_delay: number | null;
  /**
   * Scroll Start Immediately
   * @description Scroll immediately or wait for scroll_delay. Applicable if scenario is 'scroll'.
   * @default true
   */
  scroll_start_immediately: boolean | null;
  /**
   * Scroll Stop After Duration
   * @description Stop scrolling after the specified duration in milliseconds. Use with scroll_complete=false and scroll_back=false. Applicable if scenario is 'scroll'.
   * @default null
   */
  scroll_stop_after_duration: number | null;
  /**
   * Scroll Till Selector
   * @description Scroll till the CSS selector is visible. Applicable if scenario is 'scroll'.
   * @default null
   */
  scroll_till_selector: string | null;
  /**
   * Scroll Till Selector Adjust Top
   * @description Adjust the top position of the selector in the viewport. Applicable if scenario is 'scroll'.
   * @default null
   */
  scroll_till_selector_adjust_top: number | null;
  /**
   * Scroll To End After
   * @description Scroll to the end after the specified duration in milliseconds with the specified easing in one scroll. Applicable if scenario is 'scroll'.
   * @default null
   */
  scroll_to_end_after: number | null;
  /**
   * Scroll Try Navigate
   * @description Navigate while scrolling and record the new opened page. Applicable if scenario is 'scroll'.
   * @default null
   */
  scroll_try_navigate: boolean | null;
  /**
   * Url
   * Format: uri
   * @description The URL of the website to capture.
   */
  url?: string;
  /**
   * Viewport Height
   * @description Viewport height.
   * @default null
   */
  viewport_height: number | null;
  /**
   * Viewport Width
   * @description Viewport width.
   * @default null
   */
  viewport_width: number | null;
  /**
   * Width
   * @description Width of the output animation. If specified, height must also be specified. Defaults to viewport width.
   * @default null
   */
  width: number | null;
};

/**
 * Type of SCREENSHOTONE's SCREENSHOTONE_TAKE_ANIMATED_SCREENSHOT tool output.
 */
type SCREENSHOTONE_TAKE_ANIMATED_SCREENSHOT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * Format: binary
       * @description The content of the animated screenshot (video/GIF).
       */
      content: string;
      /**
       * Content Type
       * @description The content type of the response (e.g., 'video/mp4', 'image/gif').
       */
      content_type: string;
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
 * Type map of all available tool input types for toolkit "SCREENSHOTONE".
 */
export type SCREENSHOTONE_TOOL_INPUTS = {
  TAKE_ANIMATED_SCREENSHOT: SCREENSHOTONE_TAKE_ANIMATED_SCREENSHOT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SCREENSHOTONE".
 */
export type SCREENSHOTONE_TOOL_OUTPUTS = {
  TAKE_ANIMATED_SCREENSHOT: SCREENSHOTONE_TAKE_ANIMATED_SCREENSHOT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SCREENSHOTONE toolkit.
 */
export const SCREENSHOTONE = {
  slug: "screenshotone",
  tools: {
    /**
     * This tool captures an animated screenshot (video or gif) of a given website url. it allows customization of the animation format, duration, viewport dimensions, and animation scenario (e.g., scrolling).
     */
    TAKE_ANIMATED_SCREENSHOT: "SCREENSHOTONE_TAKE_ANIMATED_SCREENSHOT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SCREENSHOTONE".
 */
export type SCREENSHOTONE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SCREENSHOTONE".
 */
export type SCREENSHOTONE_TRIGGER_EVENTS = {}
