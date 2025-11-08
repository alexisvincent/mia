// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BROWSER_TOOL's BROWSER_TOOL_COPY_SELECTED_TEXT tool input.
 */
type BROWSER_TOOL_COPY_SELECTED_TEXT_INPUT = object;

/**
 * Type of BROWSER_TOOL's BROWSER_TOOL_COPY_SELECTED_TEXT tool output.
 */
type BROWSER_TOOL_COPY_SELECTED_TEXT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Action
       * @description Action performed: 'copy_selected_text'
       */
      action: string;
      /**
       * Copied Text
       * @description Text content that was copied from the page selection
       */
      copiedText: string;
      /** Session Id */
      sessionId: string;
      /**
       * Text Length
       * @description Number of characters in the copied text
       */
      textLength: number;
      /**
       * Was Text Selected
       * @description Whether text was actually selected and copied
       */
      wasTextSelected: boolean;
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
 * Type of BROWSER_TOOL's BROWSER_TOOL_DRAG_AND_DROP tool input.
 */
type BROWSER_TOOL_DRAG_AND_DROP_INPUT = {
  /**
   * Button
   * @description Mouse button for drag operation (almost always 'left' for standard drag-drop, 'right' for special contexts)
   * @default left
   */
  button: string;
  /**
   * End X
   * @description Ending X coordinate for drop operation (where to release the element)
   */
  endX?: number;
  /**
   * End Y
   * @description Ending Y coordinate for drop operation (where to release the element)
   */
  endY?: number;
  /**
   * Start X
   * @description Starting X coordinate for drag operation (where to grab the element)
   */
  startX?: number;
  /**
   * Start Y
   * @description Starting Y coordinate for drag operation (where to grab the element)
   */
  startY?: number;
};

/**
 * Type of BROWSER_TOOL's BROWSER_TOOL_DRAG_AND_DROP tool output.
 */
type BROWSER_TOOL_DRAG_AND_DROP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Action
       * @description Action performed: 'drag_and_drop'
       */
      action: string;
      /**
       * Drag Distance
       * @description Total distance and direction of the drag operation
       */
      dragDistance: string;
      /**
       * Drag Type
       * @description Inferred type of drag operation based on movement pattern
       */
      dragType: string;
      /**
       * End Coordinates
       * @description Ending coordinates where drop completed
       */
      endCoordinates: string;
      /** Session Id */
      sessionId: string;
      /**
       * Start Coordinates
       * @description Starting coordinates where drag began
       */
      startCoordinates: string;
      /**
       * Status
       * @description Execution status of the drag and drop operation
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
 * Type of BROWSER_TOOL's BROWSER_TOOL_FETCH_WEBPAGE tool input.
 */
type BROWSER_TOOL_FETCH_WEBPAGE_INPUT = {
  /**
   * Format
   * @description Output format for content (markdown or html)
   * @default markdown
   */
  format: string;
  /**
   * Idle Ttl Sec
   * @description Optional idle TTL for new sessions (seconds)
   * @default null
   */
  idleTtlSec: number | null;
  /**
   * New Page
   * @description Whether to create a new page for the content
   * @default false
   */
  newPage: boolean;
  /**
   * Return Partial On Timeout
   * @description Whether to return partial content if timeout occurs
   * @default true
   */
  returnPartialOnTimeout: boolean;
  /**
   * Url
   * @description URL to fetch content from. If not provided, uses current page
   * @default null
   */
  url: string | null;
  /**
   * Wait
   * @description Time to wait for dynamic content to load (milliseconds)
   * @default 1000
   */
  wait: number;
};

/**
 * Type of BROWSER_TOOL's BROWSER_TOOL_FETCH_WEBPAGE tool output.
 */
type BROWSER_TOOL_FETCH_WEBPAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Content of the webpage in requested format
       */
      content: string;
      /**
       * Content Length
       * @description Length of the content in characters
       */
      contentLength: number;
      /**
       * Format
       * @description Format of the returned content
       */
      format: string;
      /** Session Id */
      sessionId: string;
      /**
       * Title
       * @description Title of the webpage
       */
      title: string;
      /**
       * Url
       * @description URL of the fetched webpage
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
 * Type of BROWSER_TOOL's BROWSER_TOOL_GET_CLIPBOARD tool input.
 */
type BROWSER_TOOL_GET_CLIPBOARD_INPUT = object;

/**
 * Type of BROWSER_TOOL's BROWSER_TOOL_GET_CLIPBOARD tool output.
 */
type BROWSER_TOOL_GET_CLIPBOARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Action
       * @description Action performed: 'get_clipboard'
       */
      action: string;
      /**
       * Clipboard Content
       * @description Text content currently stored in the system clipboard
       */
      clipboardContent: string;
      /**
       * Content Length
       * @description Number of characters in the clipboard content
       */
      contentLength: number;
      /**
       * Has Content
       * @description Whether clipboard contains any text content
       */
      hasContent: boolean;
      /** Session Id */
      sessionId: string;
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
 * Type of BROWSER_TOOL's BROWSER_TOOL_KEYBOARD_SHORTCUT tool input.
 */
type BROWSER_TOOL_KEYBOARD_SHORTCUT_INPUT = {
  /**
   * Hold Time
   * @description Milliseconds to hold keys down (0=quick press like normal shortcuts, 100+=sustained press for special actions)
   * @default 0
   */
  holdTime: number;
  /**
   * Keys
   * @description Array of keys to press simultaneously (e.g., ['Ctrl', 'c'] for copy, ['Alt', 'Tab'] for window switching, ['Ctrl', 'Shift', 'I'] for dev tools)
   */
  keys?: string[];
};

/**
 * Type of BROWSER_TOOL's BROWSER_TOOL_KEYBOARD_SHORTCUT tool output.
 */
type BROWSER_TOOL_KEYBOARD_SHORTCUT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Action
       * @description Action performed: 'keyboard_shortcut'
       */
      action: string;
      /**
       * Key Combination
       * @description Key combination that was executed
       */
      keyCombination: string;
      /** Session Id */
      sessionId: string;
      /**
       * Shortcut Type
       * @description Type of shortcut performed (copy, paste, navigation, etc.)
       */
      shortcutType: string;
      /**
       * Status
       * @description Execution status of the keyboard shortcut
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
 * Type of BROWSER_TOOL's BROWSER_TOOL_MOUSE_CLICK tool input.
 */
type BROWSER_TOOL_MOUSE_CLICK_INPUT = {
  /**
   * Button
   * @description Mouse button to use for clicking
   * @default left
   */
  button: string;
  /**
   * X
   * @description X coordinate to click
   */
  x?: number;
  /**
   * Y
   * @description Y coordinate to click
   */
  y?: number;
};

/**
 * Type of BROWSER_TOOL's BROWSER_TOOL_MOUSE_CLICK tool output.
 */
type BROWSER_TOOL_MOUSE_CLICK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Button
       * @description Mouse button that was used
       */
      button: string;
      /**
       * Coordinates
       * @description Coordinates where click was performed
       */
      coordinates: string;
      /** Session Id */
      sessionId: string;
      /**
       * Status
       * @description Status of the click operation
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
 * Type of BROWSER_TOOL's BROWSER_TOOL_MOUSE_DOUBLE_CLICK tool input.
 */
type BROWSER_TOOL_MOUSE_DOUBLE_CLICK_INPUT = {
  /**
   * Button
   * @description Mouse button for double click action - use 'left' for most UI elements, 'right' for context menus
   * @default left
   */
  button: string;
  /**
   * X
   * @description Horizontal pixel position for double click (0 = left edge, increases rightward)
   */
  x?: number;
  /**
   * Y
   * @description Vertical pixel position for double click (0 = top edge, increases downward)
   */
  y?: number;
};

/**
 * Type of BROWSER_TOOL's BROWSER_TOOL_MOUSE_DOUBLE_CLICK tool output.
 */
type BROWSER_TOOL_MOUSE_DOUBLE_CLICK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Action
       * @description Action performed: 'double_click'
       */
      action: string;
      /**
       * Button
       * @description Mouse button used for the double click
       */
      button: string;
      /**
       * Coordinates
       * @description Coordinates where double click was executed
       */
      coordinates: string;
      /** Session Id */
      sessionId: string;
      /**
       * Status
       * @description Execution status of the double click operation
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
 * Type of BROWSER_TOOL's BROWSER_TOOL_MOUSE_DOWN tool input.
 */
type BROWSER_TOOL_MOUSE_DOWN_INPUT = {
  /**
   * Button
   * @description Mouse button to press and hold (usually 'left' for selections and drags, 'right' for context menus)
   * @default left
   */
  button: string;
  /**
   * X
   * @description X coordinate to press mouse button down (where to start the press-and-hold operation)
   */
  x?: number;
  /**
   * Y
   * @description Y coordinate to press mouse button down (where to start the press-and-hold operation)
   */
  y?: number;
};

/**
 * Type of BROWSER_TOOL's BROWSER_TOOL_MOUSE_DOWN tool output.
 */
type BROWSER_TOOL_MOUSE_DOWN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Action
       * @description Action performed: 'mouse_down'
       */
      action: string;
      /**
       * Button
       * @description Mouse button that was pressed down
       */
      button: string;
      /**
       * Coordinates
       * @description Coordinates where mouse button was pressed down
       */
      coordinates: string;
      /**
       * Reminder
       * @description Reminder about completing the mouse sequence with mouse_up
       */
      reminder: string;
      /** Session Id */
      sessionId: string;
      /**
       * Status
       * @description Execution status of the mouse down operation
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
 * Type of BROWSER_TOOL's BROWSER_TOOL_MOUSE_MOVE tool input.
 */
type BROWSER_TOOL_MOUSE_MOVE_INPUT = {
  /**
   * X
   * @description Target X coordinate for mouse cursor (0 = left edge, increases rightward, typical screen: 0-1440px)
   */
  x?: number;
  /**
   * Y
   * @description Target Y coordinate for mouse cursor (0 = top edge, increases downward, typical screen: 0-900px)
   */
  y?: number;
};

/**
 * Type of BROWSER_TOOL's BROWSER_TOOL_MOUSE_MOVE tool output.
 */
type BROWSER_TOOL_MOUSE_MOVE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Action
       * @description Action performed: 'mouse_move'
       */
      action: string;
      /**
       * Purpose
       * @description Likely purpose of the mouse movement based on UI interaction patterns
       */
      purpose: string;
      /** Session Id */
      sessionId: string;
      /**
       * Status
       * @description Execution status of the mouse move operation
       */
      status: string;
      /**
       * Target Coordinates
       * @description Coordinates where mouse cursor was moved
       */
      targetCoordinates: string;
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
 * Type of BROWSER_TOOL's BROWSER_TOOL_MOUSE_UP tool input.
 */
type BROWSER_TOOL_MOUSE_UP_INPUT = {
  /**
   * Button
   * @description Mouse button to release (should match the button used in previous MouseDown action)
   * @default left
   */
  button: string;
  /**
   * X
   * @description X coordinate to release mouse button (where to end the press-and-hold operation or complete a drag)
   */
  x?: number;
  /**
   * Y
   * @description Y coordinate to release mouse button (where to end the press-and-hold operation or complete a drag)
   */
  y?: number;
};

/**
 * Type of BROWSER_TOOL's BROWSER_TOOL_MOUSE_UP tool output.
 */
type BROWSER_TOOL_MOUSE_UP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Action
       * @description Action performed: 'mouse_up'
       */
      action: string;
      /**
       * Button
       * @description Mouse button that was released
       */
      button: string;
      /**
       * Coordinates
       * @description Coordinates where mouse button was released
       */
      coordinates: string;
      /**
       * Operation Type
       * @description Type of operation completed (drag_completion, selection_end, long_press_end)
       */
      operationType: string;
      /** Session Id */
      sessionId: string;
      /**
       * Status
       * @description Execution status of the mouse up operation
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
 * Type of BROWSER_TOOL's BROWSER_TOOL_NAVIGATE tool input.
 */
type BROWSER_TOOL_NAVIGATE_INPUT = {
  /**
   * Idle Ttl Sec
   * @description Optional idle TTL for the session (seconds)
   * @default null
   */
  idleTtlSec: number | null;
  /**
   * Url
   * @description URL to navigate the cloud browser to
   */
  url?: string;
};

/**
 * Type of BROWSER_TOOL's BROWSER_TOOL_NAVIGATE tool output.
 */
type BROWSER_TOOL_NAVIGATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Debug Url
       * @description URL to view the browser session, the user can view the session live with this so always show it to them before moving forward
       */
      debugUrl: string;
      /** Navigated Url */
      navigatedUrl: string;
      /**
       * Page Snapshot
       * @description Markdown-formatted page content
       */
      pageSnapshot: string;
      /**
       * Page Title
       * @description Title of the page after navigation
       */
      pageTitle: string;
      /** Session Id */
      sessionId: string;
      /** Ws Endpoint */
      wsEndpoint: string;
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
 * Type of BROWSER_TOOL's BROWSER_TOOL_PASTE_TEXT tool input.
 */
type BROWSER_TOOL_PASTE_TEXT_INPUT = {
  /**
   * Text
   * @description Text content to paste at current cursor location (form data, URLs, structured content)
   */
  text?: string;
};

/**
 * Type of BROWSER_TOOL's BROWSER_TOOL_PASTE_TEXT tool output.
 */
type BROWSER_TOOL_PASTE_TEXT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Action
       * @description Action performed: 'paste_text'
       */
      action: string;
      /**
       * Insertion Point
       * @description Where the text was inserted (cursor position description)
       */
      insertionPoint: string;
      /**
       * Pasted Text
       * @description Text content that was pasted into the browser
       */
      pastedText: string;
      /** Session Id */
      sessionId: string;
      /**
       * Status
       * @description Execution status of the paste operation
       */
      status: string;
      /**
       * Text Length
       * @description Number of characters that were pasted
       */
      textLength: number;
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
 * Type of BROWSER_TOOL's BROWSER_TOOL_PERFORM_WEB_TASK tool input.
 */
type BROWSER_TOOL_PERFORM_WEB_TASK_INPUT = {
  /**
   * Ai Agent
   * @description AI agent engine to use ('browser-use'=robust multi-step automation, 'openai-cua'=OpenAI-optimized tasks)
   * @default browser-use
   */
  aiAgent: string;
  /**
   * Ai Model
   * @description Specific AI model to use ('gpt-5'=latest flagship, 'gpt-5-mini'=efficient flagship, 'gpt-5-nano'=ultra-fast, 'gpt-4o'=advanced OpenAI, 'gpt-4o-mini'=efficient, 'gpt-4.1'=enhanced, 'gpt-4.1-mini'=compact enhanced)
   * @default gpt-5-nano
   */
  aiModel: string | null;
  /**
   * Ai Provider
   * @description AI provider for task execution ('openai'=GPT models, 'gemini'=Google AI, 'groq'=fast inference, 'azure'=enterprise, 'xai'=experimental)
   * @default openai
   */
  aiProvider: string | null;
  /**
   * Highlight Elements
   * @description Show visual highlights during task execution for transparency and debugging (True=show interaction highlights, False=hidden execution)
   * @default true
   */
  highlightElements: boolean;
  /**
   * Idle Ttl Sec
   * @description Optional idle TTL for new sessions if sessionId not provided (seconds)
   * @default null
   */
  idleTtlSec: number | null;
  /**
   * Output Schema
   * @description Optional JSON Schema to structure the output for data extraction tasks (provides structured data instead of text description)
   * @default null
   */
  outputSchema: {
      [key: string]: unknown;
  } | null;
  /**
   * Prompt
   * @description Natural language description of the web task to perform autonomously (e.g., 'Log into Gmail and send an email', 'Fill out contact form', 'Find and download the PDF')
   */
  prompt?: string;
  /**
   * Url
   * @description Optional URL to perform task on (if not provided, uses current page in existing session)
   * @default null
   */
  url: string | null;
};

/**
 * Type of BROWSER_TOOL's BROWSER_TOOL_PERFORM_WEB_TASK tool output.
 */
type BROWSER_TOOL_PERFORM_WEB_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Action
       * @description Action performed: 'perform_web_task'
       */
      action: string;
      /**
       * Ai Agent
       * @description AI agent that performed the task
       */
      aiAgent: string;
      /**
       * Ai Model
       * @description AI model used for task execution
       */
      aiModel: string;
      /**
       * Execution Result
       * @description Detailed result or outcome of the autonomous web task
       */
      executionResult: string;
      /**
       * Execution Time
       * @description ISO timestamp when task execution completed
       */
      executionTime: string;
      /**
       * Highlights Used
       * @description Whether visual highlights were shown during execution
       */
      highlightsUsed: boolean;
      /** Session Id */
      sessionId: string | null;
      /**
       * Task Complexity
       * @description Assessed complexity of the executed task
       */
      taskComplexity: string;
      /**
       * Task Prompt
       * @description Natural language task that was executed
       */
      taskPrompt: string;
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
 * Type of BROWSER_TOOL's BROWSER_TOOL_SCREENSHOT_WEBPAGE tool input.
 */
type BROWSER_TOOL_SCREENSHOT_WEBPAGE_INPUT = {
  /**
   * Capture Full Height
   * @description Capture entire page height ignoring viewport (True=full page length, False=viewport height only)
   * @default false
   */
  captureFullHeight: boolean;
  /**
   * Height
   * @description Browser viewport height in pixels for capture (720=standard, 900=tall desktop, 667=mobile)
   * @default 720
   */
  height: number;
  /**
   * Idle Ttl Sec
   * @description Optional idle TTL for new sessions if sessionId not provided (seconds)
   * @default null
   */
  idleTtlSec: number | null;
  /**
   * Image Quality
   * @description Image quality percentage (100=no compression/max quality, 80=good balance, 50=smaller file size)
   * @default 80
   */
  imageQuality: number;
  /**
   * Scroll All Content
   * @description Scroll through entire page to capture all content (True=captures everything, False=viewport only)
   * @default false
   */
  scrollAllContent: boolean;
  /**
   * Url
   * @description URL of the webpage to capture (can be any publicly accessible website)
   */
  url?: string;
  /**
   * Wait
   * @description Milliseconds to wait after page load for JS/animations (1000=default, 3000+=heavy sites, 5000+=very dynamic)
   * @default 1000
   */
  wait: number;
  /**
   * Width
   * @description Browser viewport width in pixels for capture (1280=standard desktop, 1440=large desktop, 375=mobile)
   * @default 1280
   */
  width: number;
};

/**
 * Type of BROWSER_TOOL's BROWSER_TOOL_SCREENSHOT_WEBPAGE tool output.
 */
type BROWSER_TOOL_SCREENSHOT_WEBPAGE_OUTPUT = {
  /**
   * Data
   * @description Base64 encoded image data
   */
  data?: string;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Mime Type
   * @description MIME type of the image
   */
  mimeType?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BROWSER_TOOL's BROWSER_TOOL_SCROLL tool input.
 */
type BROWSER_TOOL_SCROLL_INPUT = {
  /**
   * Delta X
   * @description Horizontal scroll distance in pixels (positive=scroll right, negative=scroll left, usually 0 for vertical scrolling)
   * @default 0
   */
  deltaX: number;
  /**
   * Delta Y
   * @description Vertical scroll distance in pixels (positive=scroll down toward bottom, negative=scroll up toward top, typical range: 100-500px per scroll)
   */
  deltaY?: number;
  /**
   * Steps
   * @description Number of steps to break scroll into for smoothness (1=instant jump, 3-5=smooth animation, 10+=very smooth but slower)
   * @default 1
   */
  steps: number;
  /**
   * Use Os
   * @description Use OS-level scrolling (True=more reliable, works with all apps) vs browser scrolling (False=web-specific, may fail on some sites)
   * @default true
   */
  useOs: boolean;
  /**
   * X
   * @description X coordinate where scroll originates (center of viewport recommended: 640 for 1280px width, 720 for 1440px width)
   * @default 640
   */
  x: number;
  /**
   * Y
   * @description Y coordinate where scroll originates (center of viewport recommended: 360 for 720px height, 400 for 800px height)
   * @default 360
   */
  y: number;
};

/**
 * Type of BROWSER_TOOL's BROWSER_TOOL_SCROLL tool output.
 */
type BROWSER_TOOL_SCROLL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Action
       * @description Action performed: 'scroll'
       */
      action: string;
      /**
       * Coordinates
       * @description Origin coordinates where scroll was initiated
       */
      coordinates: string;
      /**
       * Scroll Direction
       * @description Primary scroll direction (down/up/left/right)
       */
      scrollDirection: string;
      /**
       * Scroll Distance
       * @description Description of scroll distance and smoothness
       */
      scrollDistance: string;
      /** Session Id */
      sessionId: string;
      /**
       * Status
       * @description Execution status of the scroll operation
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
 * Type of BROWSER_TOOL's BROWSER_TOOL_SET_CLIPBOARD tool input.
 */
type BROWSER_TOOL_SET_CLIPBOARD_INPUT = {
  /**
   * Text
   * @description Text content to store in system clipboard (URLs, data, structured text, form content)
   */
  text?: string;
};

/**
 * Type of BROWSER_TOOL's BROWSER_TOOL_SET_CLIPBOARD tool output.
 */
type BROWSER_TOOL_SET_CLIPBOARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Action
       * @description Action performed: 'set_clipboard'
       */
      action: string;
      /**
       * Content Length
       * @description Number of characters stored in clipboard
       */
      contentLength: number;
      /** Session Id */
      sessionId: string;
      /**
       * Status
       * @description Execution status of clipboard set operation
       */
      status: string;
      /**
       * Text Set
       * @description Text content that was stored in clipboard
       */
      textSet: string;
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
 * Type of BROWSER_TOOL's BROWSER_TOOL_TAKE_SCREENSHOT tool input.
 */
type BROWSER_TOOL_TAKE_SCREENSHOT_INPUT = object;

/**
 * Type of BROWSER_TOOL's BROWSER_TOOL_TAKE_SCREENSHOT tool output.
 */
type BROWSER_TOOL_TAKE_SCREENSHOT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description MCP content blocks with inline image
       */
      content: {
          [key: string]: unknown;
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
 * Type of BROWSER_TOOL's BROWSER_TOOL_TYPE_TEXT tool input.
 */
type BROWSER_TOOL_TYPE_TEXT_INPUT = {
  /**
   * Delay
   * @description Milliseconds delay between each keystroke for natural human-like typing (0=instant, 50-100=realistic human speed, 200+=slow deliberate typing)
   * @default 0
   */
  delay: number;
  /**
   * Text
   * @description Text content to type into the browser (supports unicode, special characters, newlines, form data)
   */
  text?: string;
};

/**
 * Type of BROWSER_TOOL's BROWSER_TOOL_TYPE_TEXT tool output.
 */
type BROWSER_TOOL_TYPE_TEXT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Action
       * @description Action performed: 'type_text'
       */
      action: string;
      /** Session Id */
      sessionId: string;
      /**
       * Status
       * @description Execution status of the text typing operation
       */
      status: string;
      /**
       * Text Length
       * @description Number of characters that were typed
       */
      textLength: number;
      /**
       * Typing Speed
       * @description Typing speed description based on delay setting
       */
      typingSpeed: string;
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
 * Type map of all available tool input types for toolkit "BROWSER_TOOL".
 */
export type BROWSER_TOOL_TOOL_INPUTS = {
  COPY_SELECTED_TEXT: BROWSER_TOOL_COPY_SELECTED_TEXT_INPUT
  DRAG_AND_DROP: BROWSER_TOOL_DRAG_AND_DROP_INPUT
  FETCH_WEBPAGE: BROWSER_TOOL_FETCH_WEBPAGE_INPUT
  GET_CLIPBOARD: BROWSER_TOOL_GET_CLIPBOARD_INPUT
  KEYBOARD_SHORTCUT: BROWSER_TOOL_KEYBOARD_SHORTCUT_INPUT
  MOUSE_CLICK: BROWSER_TOOL_MOUSE_CLICK_INPUT
  MOUSE_DOUBLE_CLICK: BROWSER_TOOL_MOUSE_DOUBLE_CLICK_INPUT
  MOUSE_DOWN: BROWSER_TOOL_MOUSE_DOWN_INPUT
  MOUSE_MOVE: BROWSER_TOOL_MOUSE_MOVE_INPUT
  MOUSE_UP: BROWSER_TOOL_MOUSE_UP_INPUT
  NAVIGATE: BROWSER_TOOL_NAVIGATE_INPUT
  PASTE_TEXT: BROWSER_TOOL_PASTE_TEXT_INPUT
  PERFORM_WEB_TASK: BROWSER_TOOL_PERFORM_WEB_TASK_INPUT
  SCREENSHOT_WEBPAGE: BROWSER_TOOL_SCREENSHOT_WEBPAGE_INPUT
  SCROLL: BROWSER_TOOL_SCROLL_INPUT
  SET_CLIPBOARD: BROWSER_TOOL_SET_CLIPBOARD_INPUT
  TAKE_SCREENSHOT: BROWSER_TOOL_TAKE_SCREENSHOT_INPUT
  TYPE_TEXT: BROWSER_TOOL_TYPE_TEXT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BROWSER_TOOL".
 */
export type BROWSER_TOOL_TOOL_OUTPUTS = {
  COPY_SELECTED_TEXT: BROWSER_TOOL_COPY_SELECTED_TEXT_OUTPUT
  DRAG_AND_DROP: BROWSER_TOOL_DRAG_AND_DROP_OUTPUT
  FETCH_WEBPAGE: BROWSER_TOOL_FETCH_WEBPAGE_OUTPUT
  GET_CLIPBOARD: BROWSER_TOOL_GET_CLIPBOARD_OUTPUT
  KEYBOARD_SHORTCUT: BROWSER_TOOL_KEYBOARD_SHORTCUT_OUTPUT
  MOUSE_CLICK: BROWSER_TOOL_MOUSE_CLICK_OUTPUT
  MOUSE_DOUBLE_CLICK: BROWSER_TOOL_MOUSE_DOUBLE_CLICK_OUTPUT
  MOUSE_DOWN: BROWSER_TOOL_MOUSE_DOWN_OUTPUT
  MOUSE_MOVE: BROWSER_TOOL_MOUSE_MOVE_OUTPUT
  MOUSE_UP: BROWSER_TOOL_MOUSE_UP_OUTPUT
  NAVIGATE: BROWSER_TOOL_NAVIGATE_OUTPUT
  PASTE_TEXT: BROWSER_TOOL_PASTE_TEXT_OUTPUT
  PERFORM_WEB_TASK: BROWSER_TOOL_PERFORM_WEB_TASK_OUTPUT
  SCREENSHOT_WEBPAGE: BROWSER_TOOL_SCREENSHOT_WEBPAGE_OUTPUT
  SCROLL: BROWSER_TOOL_SCROLL_OUTPUT
  SET_CLIPBOARD: BROWSER_TOOL_SET_CLIPBOARD_OUTPUT
  TAKE_SCREENSHOT: BROWSER_TOOL_TAKE_SCREENSHOT_OUTPUT
  TYPE_TEXT: BROWSER_TOOL_TYPE_TEXT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BROWSER_TOOL toolkit.
 */
export const BROWSER_TOOL = {
  slug: "browser_tool",
  tools: {
    /**
     * Copy currently selected text on the page to clipboard - ideal for extracting highlighted content, copying form data, or harvesting visible text selections.
     */
    COPY_SELECTED_TEXT: "BROWSER_TOOL_COPY_SELECTED_TEXT",
    /**
     * Execute precise drag and drop operations - essential for file uploads, list reordering, element moving, and complex ui interactions that require drag-based manipulation.
     */
    DRAG_AND_DROP: "BROWSER_TOOL_DRAG_AND_DROP",
    /**
     * Your eyes: get page content for decision-making. use before: actions (find targets, understand state) use to verify: page transitions, major state changes, when actions seem to fail format: html=find elements | markdown=clean content | success rate: 99%
     */
    FETCH_WEBPAGE: "BROWSER_TOOL_FETCH_WEBPAGE",
    /**
     * Read current content from the system clipboard - essential for data transfer workflows, extracting copied text, and reading user-copied data for processing.
     */
    GET_CLIPBOARD: "BROWSER_TOOL_GET_CLIPBOARD",
    /**
     * Execute keyboard shortcuts and key combinations - essential for copy/paste, navigation, and application commands that agents need for efficient browser automation.
     */
    KEYBOARD_SHORTCUT: "BROWSER_TOOL_KEYBOARD_SHORTCUT",
    /**
     * Precision clicker: manual clicking with coordinates. pattern: fetchwebpage(html) → find element → estimate coordinates → click → verify hints: center buttons ~(640,350) | nav/header ~y=150 | content ~y=300-500 tip: try ±50px if first click misses | success rate: 85%
     */
    MOUSE_CLICK: "BROWSER_TOOL_MOUSE_CLICK",
    /**
     * Execute a precise double click at specified screen coordinates - ideal for opening files, selecting text, or activating ui elements that require double click gestures.
     */
    MOUSE_DOUBLE_CLICK: "BROWSER_TOOL_MOUSE_DOUBLE_CLICK",
    /**
     * Press and hold mouse button at coordinates - use for starting custom drag operations, text selections, or long-press interactions. must be followed by mouseup action to complete.
     */
    MOUSE_DOWN: "BROWSER_TOOL_MOUSE_DOWN",
    /**
     * Move mouse cursor to precise coordinates without clicking - perfect for triggering hover effects, revealing tooltips, and positioning for subsequent interactions.
     */
    MOUSE_MOVE: "BROWSER_TOOL_MOUSE_MOVE",
    /**
     * Release mouse button at coordinates - completes drag operations, text selections, and long-press interactions. should be used after mousedown to finish mouse button sequences.
     */
    MOUSE_UP: "BROWSER_TOOL_MOUSE_UP",
    /**
     * Always start here: creates browser session and navigates to url. workflow: navigate() → fetchwebpage() → manual interactions → verify print debugurl to user | success rate: 99%
     */
    NAVIGATE: "BROWSER_TOOL_NAVIGATE",
    /**
     * Paste text content at the current cursor position - perfect for filling forms, inserting data into text fields, or quick content insertion at focused elements.
     */
    PASTE_TEXT: "BROWSER_TOOL_PASTE_TEXT",
    /**
     * Ai automation: complex workflows only. when to use: 10+ manual steps | dynamic/unpredictable content when to avoid: simple clicks | forms | navigation | payments strategy: try once → if fails, switch to manual immediately success rate: 40% - always have manual backup ready
     */
    PERFORM_WEB_TASK: "BROWSER_TOOL_PERFORM_WEB_TASK",
    /**
     * Capture high-quality screenshot of any webpage with extensive customization options - perfect for archiving, visual documentation, full-page captures, and cross-device viewport testing.
     */
    SCREENSHOT_WEBPAGE: "BROWSER_TOOL_SCREENSHOT_WEBPAGE",
    /**
     * Page navigation: smooth scrolling. use: when target element not visible after fetchwebpage() distance: 200px=fine | 400px=sections | 800px=quick traverse always: scroll → fetchwebpage() → verify | success rate: 99%
     */
    SCROLL: "BROWSER_TOOL_SCROLL",
    /**
     * Store text content in the system clipboard for later paste operations - perfect for preparing data transfers, staging content for forms, or cross-application data sharing.
     */
    SET_CLIPBOARD: "BROWSER_TOOL_SET_CLIPBOARD",
    /**
     * Visual verification: capture screenshot of current browser viewport. use: debug ui issues, verify page state, document visual results renders: inline in mcp clients for immediate visual feedback tip: use after page changes to confirm they worked | success rate: 99%
     */
    TAKE_SCREENSHOT: "BROWSER_TOOL_TAKE_SCREENSHOT",
    /**
     * Controlled input: human-like typing. pattern: click to focus → typetext() → verify speed: delay=0 (fast) | delay=50 (human-like) | delay=100+ (careful) must focus input field first | success rate: 95%
     */
    TYPE_TEXT: "BROWSER_TOOL_TYPE_TEXT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BROWSER_TOOL".
 */
export type BROWSER_TOOL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BROWSER_TOOL".
 */
export type BROWSER_TOOL_TRIGGER_EVENTS = {}
