// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PRODUCTLANE's PRODUCTLANE_ENABLE_WIDGET tool input.
 */
type PRODUCTLANE_ENABLE_WIDGET_INPUT = object;

/**
 * Type of PRODUCTLANE's PRODUCTLANE_ENABLE_WIDGET tool output.
 */
type PRODUCTLANE_ENABLE_WIDGET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Client-side instruction to invoke Productlane.enable()
       */
      message: string;
      /**
       * Success
       * @description True if the widget was enabled successfully
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
 * Type of PRODUCTLANE's PRODUCTLANE_WIDGET_CLOSE tool input.
 */
type PRODUCTLANE_WIDGET_CLOSE_INPUT = object;

/**
 * Type of PRODUCTLANE's PRODUCTLANE_WIDGET_CLOSE tool output.
 */
type PRODUCTLANE_WIDGET_CLOSE_OUTPUT = {
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
 * Type of PRODUCTLANE's PRODUCTLANE_WIDGET_DISABLE tool input.
 */
type PRODUCTLANE_WIDGET_DISABLE_INPUT = object;

/**
 * Type of PRODUCTLANE's PRODUCTLANE_WIDGET_DISABLE tool output.
 */
type PRODUCTLANE_WIDGET_DISABLE_OUTPUT = {
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
 * Type of PRODUCTLANE's PRODUCTLANE_WIDGET_OFF_EVENT tool input.
 */
type PRODUCTLANE_WIDGET_OFF_EVENT_INPUT = {
  /**
   * Callback
   * @description The JavaScript callback function reference to remove. Must match the original function passed to Productlane.on().
   */
  callback?: string;
  /**
   * Event
   * @description The widget event name to unregister.
   * @enum {string}
   */
  event?: "loaded" | "opened" | "closed" | "toggled" | "customLinkClicked" | "openDocsPage";
};

/**
 * Type of PRODUCTLANE's PRODUCTLANE_WIDGET_OFF_EVENT tool output.
 */
type PRODUCTLANE_WIDGET_OFF_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Snippet
       * @description JavaScript code snippet that calls Productlane.off for the specified event and callback.
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
 * Type of PRODUCTLANE's PRODUCTLANE_WIDGET_ON_EVENT tool input.
 */
type PRODUCTLANE_WIDGET_ON_EVENT_INPUT = {
  /**
   * Callback
   * @description JavaScript function or arrow function to execute when the event fires. E.g., '(data) => console.log(data)'.
   */
  callback?: string;
  /**
   * Event
   * @description Name of the widget event to listen for. Supported events: 'open', 'close', 'widgetLoaded', 'submit'.
   * @enum {string}
   */
  event?: "open" | "close" | "widgetLoaded" | "submit";
};

/**
 * Type of PRODUCTLANE's PRODUCTLANE_WIDGET_ON_EVENT tool output.
 */
type PRODUCTLANE_WIDGET_ON_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Snippet
       * @description JavaScript code snippet to register the event listener.
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
 * Type of PRODUCTLANE's PRODUCTLANE_WIDGET_OPEN tool input.
 */
type PRODUCTLANE_WIDGET_OPEN_INPUT = {
  /**
   * View
   * @description The widget view to open. Valid values: 'INDEX', 'CHANGELOG', 'DOCS', 'FEEDBACK'. Defaults to 'INDEX' if not provided.
   * @default null
   * @enum {string|null}
   */
  view: "INDEX" | "CHANGELOG" | "DOCS" | "FEEDBACK" | null;
};

/**
 * Type of PRODUCTLANE's PRODUCTLANE_WIDGET_OPEN tool output.
 */
type PRODUCTLANE_WIDGET_OPEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Script
       * @description HTML <script> tag containing JavaScript to open the Productlane widget.
       */
      script: string;
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
 * Type of PRODUCTLANE's PRODUCTLANE_WIDGET_OPEN_DOCS tool input.
 */
type PRODUCTLANE_WIDGET_OPEN_DOCS_INPUT = {
  /**
   * Document Id
   * @description Internal ID of the docs article. Provide either this or document_url_name.
   * @default null
   */
  document_id: string | null;
  /**
   * Document Url Name
   * @description URL path of the docs article, e.g., 'get-started/quickstart'. Provide either this or document_id.
   * @default null
   */
  document_url_name: string | null;
};

/**
 * Type of PRODUCTLANE's PRODUCTLANE_WIDGET_OPEN_DOCS tool output.
 */
type PRODUCTLANE_WIDGET_OPEN_DOCS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Script
       * @description JavaScript snippet to execute on the client to open the documentation article.
       */
      script: string;
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
 * Type of PRODUCTLANE's PRODUCTLANE_WIDGET_TOGGLE tool input.
 */
type PRODUCTLANE_WIDGET_TOGGLE_INPUT = object;

/**
 * Type of PRODUCTLANE's PRODUCTLANE_WIDGET_TOGGLE tool output.
 */
type PRODUCTLANE_WIDGET_TOGGLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Javascript
       * @description JavaScript code snippet to toggle the Productlane widget
       */
      javascript: string;
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
 * Type map of all available tool input types for toolkit "PRODUCTLANE".
 */
export type PRODUCTLANE_TOOL_INPUTS = {
  ENABLE_WIDGET: PRODUCTLANE_ENABLE_WIDGET_INPUT
  WIDGET_CLOSE: PRODUCTLANE_WIDGET_CLOSE_INPUT
  WIDGET_DISABLE: PRODUCTLANE_WIDGET_DISABLE_INPUT
  WIDGET_OFF_EVENT: PRODUCTLANE_WIDGET_OFF_EVENT_INPUT
  WIDGET_ON_EVENT: PRODUCTLANE_WIDGET_ON_EVENT_INPUT
  WIDGET_OPEN: PRODUCTLANE_WIDGET_OPEN_INPUT
  WIDGET_OPEN_DOCS: PRODUCTLANE_WIDGET_OPEN_DOCS_INPUT
  WIDGET_TOGGLE: PRODUCTLANE_WIDGET_TOGGLE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PRODUCTLANE".
 */
export type PRODUCTLANE_TOOL_OUTPUTS = {
  ENABLE_WIDGET: PRODUCTLANE_ENABLE_WIDGET_OUTPUT
  WIDGET_CLOSE: PRODUCTLANE_WIDGET_CLOSE_OUTPUT
  WIDGET_DISABLE: PRODUCTLANE_WIDGET_DISABLE_OUTPUT
  WIDGET_OFF_EVENT: PRODUCTLANE_WIDGET_OFF_EVENT_OUTPUT
  WIDGET_ON_EVENT: PRODUCTLANE_WIDGET_ON_EVENT_OUTPUT
  WIDGET_OPEN: PRODUCTLANE_WIDGET_OPEN_OUTPUT
  WIDGET_OPEN_DOCS: PRODUCTLANE_WIDGET_OPEN_DOCS_OUTPUT
  WIDGET_TOGGLE: PRODUCTLANE_WIDGET_TOGGLE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PRODUCTLANE toolkit.
 */
export const PRODUCTLANE = {
  slug: "productlane",
  tools: {
    /**
     * Tool to enable the productlane widget. use after confirming the widget is currently disabled.
     */
    ENABLE_WIDGET: "PRODUCTLANE_ENABLE_WIDGET",
    /**
     * Tool to close the productlane widget. use when you need to hide the widget after completing an interaction.
     */
    WIDGET_CLOSE: "PRODUCTLANE_WIDGET_CLOSE",
    /**
     * Tool to disable the productlane widget across the entire page. use when needing to turn off the widget programmatically.
     */
    WIDGET_DISABLE: "PRODUCTLANE_WIDGET_DISABLE",
    /**
     * Tool to remove a previously registered widget event listener. use after widget setup to deregister callbacks.
     */
    WIDGET_OFF_EVENT: "PRODUCTLANE_WIDGET_OFF_EVENT",
    /**
     * Tool to register a listener for productlane widget events. use after widget initialization to run custom logic on 'open', 'close', 'submit', or 'widgetloaded' events.
     */
    WIDGET_ON_EVENT: "PRODUCTLANE_WIDGET_ON_EVENT",
    /**
     * Tool to generate a javascript snippet that opens the productlane widget. use when you need to programmatically display the widget on your front-end after page load.
     */
    WIDGET_OPEN: "PRODUCTLANE_WIDGET_OPEN",
    /**
     * Tool to open a specific docs article in the productlane widget. use after widget initialization and load.
     */
    WIDGET_OPEN_DOCS: "PRODUCTLANE_WIDGET_OPEN_DOCS",
    /**
     * Tool to toggle the productlane widget between open and closed states. use after widget initialization.
     */
    WIDGET_TOGGLE: "PRODUCTLANE_WIDGET_TOGGLE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PRODUCTLANE".
 */
export type PRODUCTLANE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PRODUCTLANE".
 */
export type PRODUCTLANE_TRIGGER_EVENTS = {}
