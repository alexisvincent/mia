// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PARSERA's PARSERA_EXTRACT_MARKDOWN tool input.
 */
type PARSERA_EXTRACT_MARKDOWN_INPUT = {
  /**
   * File Path
   * @description Local path to the document file to be uploaded for extraction.
   * @default null
   */
  file_path: string | null;
  /**
   * Url
   * @description URL of the page to extract markdown from.
   * @default null
   */
  url: string | null;
};

/**
 * Type of PARSERA's PARSERA_EXTRACT_MARKDOWN tool output.
 */
type PARSERA_EXTRACT_MARKDOWN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Markdown
       * @description Extracted markdown content.
       */
      markdown: string;
      /**
       * Meta
       * @description Metadata about the extraction process.
       */
      meta?: {
          [key: string]: unknown;
      };
      /**
       * Status
       * @description Status of the extraction ('success').
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
 * Type of PARSERA's PARSERA_PARSE_CONTENT tool input.
 */
type PARSERA_PARSE_CONTENT_INPUT = {
  /**
   * Attributes
   * @description Attributes or instructions to guide parsing (e.g., filter by invoice type).
   * @default null
   */
  attributes: {
      [key: string]: unknown;
  } | null;
  /**
   * Content
   * @description The raw content or document to be parsed.
   */
  content?: string;
  /**
   * Content Type
   * @description The MIME type or type identifier of the content (e.g., 'text/html', 'application/pdf').
   */
  content_type?: string;
  /**
   * Options
   * @description Additional parsing options as a JSON object.
   * @default null
   */
  options: {
      [key: string]: unknown;
  } | null;
  /**
   * Output Format
   * @description Desired format of the parsed output.
   * @default json
   * @enum {string}
   */
  output_format: "json" | "xml";
  /**
   * Prompt
   * @description Prompt instructions for parsing.
   * @default null
   */
  prompt: string | null;
};

/**
 * Type of PARSERA's PARSERA_PARSE_CONTENT tool output.
 */
type PARSERA_PARSE_CONTENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content Type
       * @description The detected or returned content type.
       */
      content_type: string;
      /**
       * Metadata
       * @description Extraction metadata, such as stats or warnings.
       * @default null
       */
      metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Parsed Content
       * @description The structured output parsed from the input content.
       */
      parsed_content: {
          [key: string]: unknown;
      } | null;
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
 * Type map of all available tool input types for toolkit "PARSERA".
 */
export type PARSERA_TOOL_INPUTS = {
  EXTRACT_MARKDOWN: PARSERA_EXTRACT_MARKDOWN_INPUT
  PARSE_CONTENT: PARSERA_PARSE_CONTENT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PARSERA".
 */
export type PARSERA_TOOL_OUTPUTS = {
  EXTRACT_MARKDOWN: PARSERA_EXTRACT_MARKDOWN_OUTPUT
  PARSE_CONTENT: PARSERA_PARSE_CONTENT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PARSERA toolkit.
 */
export const PARSERA = {
  slug: "parsera",
  tools: {
    /**
     * Tool to extract markdown content from a file or url.
     */
    EXTRACT_MARKDOWN: "PARSERA_EXTRACT_MARKDOWN",
    /**
     * Tool to parse and extract structured data from provided html or text. use after obtaining raw content.
     */
    PARSE_CONTENT: "PARSERA_PARSE_CONTENT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PARSERA".
 */
export type PARSERA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PARSERA".
 */
export type PARSERA_TRIGGER_EVENTS = {}
