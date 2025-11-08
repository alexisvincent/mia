// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of METAPHOR's METAPHOR_GET_CONTENTS tool input.
 */
type METAPHOR_GET_CONTENTS_INPUT = {
  /**
   * Contents
   * @description List of Metaphor IDs or URLs to fetch content for. Must contain between 1 and 1000 items.
   */
  contents?: string[];
  /**
   * End Char
   * @description Character index to end returned text (exclusive). Must be >= 0.
   * @default null
   */
  endChar: number | null;
  /**
   * Start Char
   * @description Character index to start returned text (inclusive). Must be >= 0.
   * @default null
   */
  startChar: number | null;
};

/**
 * Type of METAPHOR's METAPHOR_GET_CONTENTS tool output.
 */
type METAPHOR_GET_CONTENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contents
       * @description List of retrieved content items with metadata.
       */
      contents: {
          /**
           * Author
           * @description Author of the content if available.
           * @default null
           */
          author: string | null;
          /**
           * Content Id
           * @description Metaphor ID or input URL for this content item.
           */
          contentId: string;
          /**
           * Error
           * @description Error message if retrieval failed.
           * @default null
           */
          error: string | null;
          /**
           * Published Date
           * @description ISO8601 date the content was published.
           * @default null
           */
          publishedDate: string | null;
          /**
           * Source
           * @description Source or website name.
           * @default null
           */
          source: string | null;
          /**
           * Text
           * @description Raw text contents, null if not retrievable.
           * @default null
           */
          text: string | null;
          /**
           * Title
           * @description Title of the page or document retrieved.
           * @default null
           */
          title: string | null;
          /**
           * Url
           * @description Canonical URL of the content.
           * @default null
           */
          url: string | null;
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
 * Type map of all available tool input types for toolkit "METAPHOR".
 */
export type METAPHOR_TOOL_INPUTS = {
  GET_CONTENTS: METAPHOR_GET_CONTENTS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "METAPHOR".
 */
export type METAPHOR_TOOL_OUTPUTS = {
  GET_CONTENTS: METAPHOR_GET_CONTENTS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's METAPHOR toolkit.
 */
export const METAPHOR = {
  slug: "metaphor",
  tools: {
    /**
     * Tool to retrieve parsed html/text contents and metadata for documents by their ids." use when you need to fetch the full text and metadata of multiple documents at once.
     */
    GET_CONTENTS: "METAPHOR_GET_CONTENTS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "METAPHOR".
 */
export type METAPHOR_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "METAPHOR".
 */
export type METAPHOR_TRIGGER_EVENTS = {}
