// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of OPENPERPLEX's OPENPERPLEX_CUSTOM_SEARCH tool input.
 */
type OPENPERPLEX_CUSTOM_SEARCH_INPUT = {
  /**
   * Exclude Fields
   * @description Fields to exclude from results.
   * @default null
   */
  exclude_fields: string[] | null;
  /**
   * Filter
   * @description Filters to apply on the search results.
   * @default null
   */
  filter: {
      [key: string]: unknown;
  } | null;
  /**
   * Include Fields
   * @description Fields to include in results.
   * @default null
   */
  include_fields: string[] | null;
  /**
   * Query
   * @description The search query string.
   */
  query?: string;
  /**
   * Size
   * @description Number of desired results (must be ≥ 1).
   * @default null
   */
  size: number | null;
  /**
   * System Prompt
   * @description System prompt for guiding the search.
   */
  system_prompt?: string;
  /**
   * User Prompt
   * @description User prompt for guiding the search.
   */
  user_prompt?: string;
};

/**
 * Type of OPENPERPLEX's OPENPERPLEX_CUSTOM_SEARCH tool output.
 */
type OPENPERPLEX_CUSTOM_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Query
       * @description The processed search query returned by the service.
       */
      query: string;
      /**
       * Results
       * @description List of search results with title, snippet, and URL.
       */
      results: {
          /**
           * Snippet
           * @description Snippet of the search result
           * @default null
           */
          snippet: string | null;
          /**
           * Title
           * @description Title of the search result
           */
          title: string;
          /**
           * Url
           * @description URL of the search result
           * @default null
           */
          url: string | null;
      }[];
      /**
       * Total
       * @description The total number of search results found.
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
 * Type of OPENPERPLEX's OPENPERPLEX_CUSTOM_SEARCH_STREAM tool input.
 */
type OPENPERPLEX_CUSTOM_SEARCH_STREAM_INPUT = {
  /**
   * Dedup
   * @description If true, remove duplicate results across queries.
   * @default false
   */
  dedup: boolean | null;
  /**
   * Freshness
   * @description Filter results by content freshness.
   * @default null
   * @enum {string|null}
   */
  freshness: "day" | "week" | "month" | null;
  /**
   * Lang
   * @description Two-letter language code, e.g., 'en'.
   * @default null
   */
  lang: string | null;
  /**
   * Max Results
   * @description Maximum number of results to return per query (must be >= 1).
   * @default null
   */
  max_results: number | null;
  /**
   * Only Text
   * @description If true, return only textual snippets without metadata.
   * @default false
   */
  only_text: boolean | null;
  /**
   * Provider
   * @description Optional search provider to use.
   * @default null
   */
  provider: string | null;
  /**
   * Queries
   * @description List of query strings to search for.
   */
  queries?: string[];
  /**
   * Region
   * @description Two-letter region code, e.g., 'us'.
   * @default null
   */
  region: string | null;
  /**
   * Safe Search
   * @description Enable safe search filtering.
   * @default false
   */
  safe_search: boolean | null;
  /**
   * System Prompt
   * @description System prompt for guiding the search.
   */
  system_prompt?: string;
  /**
   * User Prompt
   * @description User prompt for guiding the search.
   */
  user_prompt?: string;
};

/**
 * Type of OPENPERPLEX's OPENPERPLEX_CUSTOM_SEARCH_STREAM tool output.
 */
type OPENPERPLEX_CUSTOM_SEARCH_STREAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Query
       * @description The search query executed.
       */
      query: string;
      /**
       * Results
       * @description List of search result entries.
       */
      results: {
          /**
           * Date Published
           * @description Date result was published in ISO format, if available.
           * @default null
           */
          date_published: string | null;
          /**
           * Snippet
           * @description Summary text from the result.
           */
          snippet: string;
          /**
           * Source
           * @description Source provider of the result.
           */
          source: string;
          /**
           * Title
           * @description Title of the result.
           */
          title: string;
          /**
           * Url
           * @description Link to the result.
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
 * Type of OPENPERPLEX's OPENPERPLEX_GET_WEBSITE_MARKDOWN tool input.
 */
type OPENPERPLEX_GET_WEBSITE_MARKDOWN_INPUT = {
  /**
   * Markdown Format
   * @description The target markdown standard/format
   * @default null
   * @enum {string|null}
   */
  markdown_format: "gfm" | "commonmark" | null;
  /**
   * Url
   * Format: uri
   * @description The full URL of the website to fetch and convert to markdown
   */
  url?: string;
};

/**
 * Type of OPENPERPLEX's OPENPERPLEX_GET_WEBSITE_MARKDOWN tool output.
 */
type OPENPERPLEX_GET_WEBSITE_MARKDOWN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if extraction failed
       * @default null
       */
      error: string | null;
      /**
       * Markdown
       * @description The resulting markdown content of the provided website
       */
      markdown: string;
      /**
       * Url
       * Format: uri
       * @description The URL of the site that was processed
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
 * Type of OPENPERPLEX's OPENPERPLEX_GET_WEBSITE_SCREENSHOT tool input.
 */
type OPENPERPLEX_GET_WEBSITE_SCREENSHOT_INPUT = {
  /**
   * Full Page
   * @description Whether to capture the entire scrollable page.
   * @default false
   */
  full_page: boolean;
  /**
   * Url
   * Format: uri
   * @description The website URL to capture.
   */
  url?: string;
  /**
   * Viewport Height
   * @description Height of the browser viewport in pixels.
   * @default null
   */
  viewport_height: number | null;
  /**
   * Viewport Width
   * @description Width of the browser viewport in pixels.
   * @default null
   */
  viewport_width: number | null;
};

/**
 * Type of OPENPERPLEX's OPENPERPLEX_GET_WEBSITE_SCREENSHOT tool output.
 */
type OPENPERPLEX_GET_WEBSITE_SCREENSHOT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content Type
       * @description The MIME type of the screenshot image (e.g., image/png).
       */
      content_type: string;
      /**
       * Screenshot
       * @description The screenshot image as a base64-encoded string.
       */
      screenshot: string;
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
 * Type of OPENPERPLEX's OPENPERPLEX_GET_WEBSITE_TEXT tool input.
 */
type OPENPERPLEX_GET_WEBSITE_TEXT_INPUT = {
  /**
   * Clean
   * @description If true, returns cleaner and more concise text.
   * @default false
   */
  clean: boolean;
  /**
   * Max Length
   * @description Maximum number of characters to extract.
   * @default null
   */
  max_length: number | null;
  /**
   * Return Type
   * @description Format of the returned text: 'plain', 'html', or 'markdown'.
   * @default plain
   * @enum {string}
   */
  return_type: "plain" | "html" | "markdown";
  /**
   * Url
   * @description The URL of the web page to extract text from.
   */
  url?: string;
};

/**
 * Type of OPENPERPLEX's OPENPERPLEX_GET_WEBSITE_TEXT tool output.
 */
type OPENPERPLEX_GET_WEBSITE_TEXT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Text
       * @description Extracted main text content from the web page.
       */
      text: string;
      /**
       * Title
       * @description Detected title of the web page.
       */
      title: string;
      /**
       * Url
       * @description Original URL provided.
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
 * Type of OPENPERPLEX's OPENPERPLEX_QUERY_FROM_URL tool input.
 */
type OPENPERPLEX_QUERY_FROM_URL_INPUT = {
  /**
   * Query
   * @description Natural language question to ask of the fetched content.
   */
  query?: string;
  /**
   * Top K
   * @description Number of top matching results to return.
   * @default 5
   */
  top_k: number;
  /**
   * Url
   * @description The URL to fetch and query content from.
   */
  url?: string;
};

/**
 * Type of OPENPERPLEX's OPENPERPLEX_QUERY_FROM_URL tool output.
 */
type OPENPERPLEX_QUERY_FROM_URL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of top matching content snippets with scores and metadata.
       */
      results: {
          /**
           * Chunk Id
           * @description Identifier for the content chunk.
           */
          chunk_id: string;
          /**
           * Content
           * @description Relevant snippet or content.
           */
          content: string;
          /**
           * Score
           * @description Relevance score for this snippet.
           */
          score: number;
          /**
           * Url
           * @description Source URL of the content.
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
 * Type of OPENPERPLEX's OPENPERPLEX_SEARCH tool input.
 */
type OPENPERPLEX_SEARCH_INPUT = {
  /**
   * Filters
   * @description Optional filtering conditions for fields in the data.
   * @default null
   */
  filters: {
      [key: string]: unknown;
  } | null;
  /**
   * Page
   * @description Page number for pagination, must be >= 1.
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page, must be >= 1.
   * @default 10
   */
  per_page: number | null;
  /**
   * Query
   * @description The search query string.
   */
  query?: string;
  /**
   * Sort
   * @description Sort order for results, e.g. 'asc' or 'desc'.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of OPENPERPLEX's OPENPERPLEX_SEARCH tool output.
 */
type OPENPERPLEX_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has More
       * @description True if more results are available.
       */
      has_more: boolean;
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Per Page
       * @description Number of results per page.
       */
      per_page: number;
      /**
       * Results
       * @description List of search result items.
       */
      results: {
          /**
           * Data
           * @description Data fields of the matched document.
           */
          data: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Unique identifier for the search result.
           */
          id: string;
          /**
           * Score
           * @description Relevance score for the result.
           */
          score: number;
      }[];
      /**
       * Total
       * @description Total number of results matching the query.
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
 * Type of OPENPERPLEX's OPENPERPLEX_SEARCH_STREAM tool input.
 */
type OPENPERPLEX_SEARCH_STREAM_INPUT = {
  /**
   * Filters
   * @description Filtering options as a key-value map, e.g., {'lang':'en','type':'article'}.
   * @default null
   */
  filters: {
      [key: string]: unknown;
  } | null;
  /**
   * Num Results
   * @description Number of results to return, must be >= 1.
   * @default null
   */
  num_results: number | null;
  /**
   * Query
   * @description Search query string.
   */
  query?: string;
  /**
   * Stream
   * @description Whether to stream the results (default: true).
   * @default true
   */
  stream: boolean | null;
  /**
   * User Id
   * @description Identifier for end user for personalization or tracking.
   * @default null
   */
  user_id: string | null;
};

/**
 * Type of OPENPERPLEX's OPENPERPLEX_SEARCH_STREAM tool output.
 */
type OPENPERPLEX_SEARCH_STREAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Done
       * @description True if streaming has completed.
       */
      done: boolean;
      /**
       * Results
       * @description List of streamed search result items in order received.
       */
      results: {
          /**
           * Id
           * @description Unique identifier for the result.
           */
          id: string;
          /**
           * Metadata
           * @description Additional metadata for this result.
           */
          metadata?: {
              [key: string]: unknown;
          };
          /**
           * Snippet
           * @description Short summary or preview text.
           */
          snippet: string;
          /**
           * Title
           * @description Title of the result.
           */
          title: string;
          /**
           * Url
           * @description Source URL of the result.
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
 * Type map of all available tool input types for toolkit "OPENPERPLEX".
 */
export type OPENPERPLEX_TOOL_INPUTS = {
  CUSTOM_SEARCH: OPENPERPLEX_CUSTOM_SEARCH_INPUT
  CUSTOM_SEARCH_STREAM: OPENPERPLEX_CUSTOM_SEARCH_STREAM_INPUT
  GET_WEBSITE_MARKDOWN: OPENPERPLEX_GET_WEBSITE_MARKDOWN_INPUT
  GET_WEBSITE_SCREENSHOT: OPENPERPLEX_GET_WEBSITE_SCREENSHOT_INPUT
  GET_WEBSITE_TEXT: OPENPERPLEX_GET_WEBSITE_TEXT_INPUT
  QUERY_FROM_URL: OPENPERPLEX_QUERY_FROM_URL_INPUT
  SEARCH: OPENPERPLEX_SEARCH_INPUT
  SEARCH_STREAM: OPENPERPLEX_SEARCH_STREAM_INPUT
}

/**
 * Type map of all available tool input types for toolkit "OPENPERPLEX".
 */
export type OPENPERPLEX_TOOL_OUTPUTS = {
  CUSTOM_SEARCH: OPENPERPLEX_CUSTOM_SEARCH_OUTPUT
  CUSTOM_SEARCH_STREAM: OPENPERPLEX_CUSTOM_SEARCH_STREAM_OUTPUT
  GET_WEBSITE_MARKDOWN: OPENPERPLEX_GET_WEBSITE_MARKDOWN_OUTPUT
  GET_WEBSITE_SCREENSHOT: OPENPERPLEX_GET_WEBSITE_SCREENSHOT_OUTPUT
  GET_WEBSITE_TEXT: OPENPERPLEX_GET_WEBSITE_TEXT_OUTPUT
  QUERY_FROM_URL: OPENPERPLEX_QUERY_FROM_URL_OUTPUT
  SEARCH: OPENPERPLEX_SEARCH_OUTPUT
  SEARCH_STREAM: OPENPERPLEX_SEARCH_STREAM_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's OPENPERPLEX toolkit.
 */
export const OPENPERPLEX = {
  slug: "openperplex",
  tools: {
    /**
     * Tool to perform a custom search with optional filtering and field selection. use when you need tailored results based on query, filters, size, or fields.
     */
    CUSTOM_SEARCH: "OPENPERPLEX_CUSTOM_SEARCH",
    /**
     * Tool to perform custom streaming search. use when you need real-time search results for given queries.
     */
    CUSTOM_SEARCH_STREAM: "OPENPERPLEX_CUSTOM_SEARCH_STREAM",
    /**
     * Tool to retrieve the markdown content of a specified website. use after confirming the url. supports optional formats like 'gfm' or 'commonmark'.
     */
    GET_WEBSITE_MARKDOWN: "OPENPERPLEX_GET_WEBSITE_MARKDOWN",
    /**
     * Tool to capture a screenshot of a website. use after confirming the target url is reachable.
     */
    GET_WEBSITE_SCREENSHOT: "OPENPERPLEX_GET_WEBSITE_SCREENSHOT",
    /**
     * Tool to retrieve the main text content of a specified website url. use when you need content extraction from online articles or pages. use after confirming the url is publicly accessible.
     */
    GET_WEBSITE_TEXT: "OPENPERPLEX_GET_WEBSITE_TEXT",
    /**
     * Tool to query documents from a url. use when you need to fetch and interrogate web-hosted content with a natural language question.
     */
    QUERY_FROM_URL: "OPENPERPLEX_QUERY_FROM_URL",
    /**
     * Tool to search documents using query parameters. use when you have a search query and optional filters ready.
     */
    SEARCH: "OPENPERPLEX_SEARCH",
    /**
     * Tool to stream search results from openperplex. use when real-time updates on search results are needed.
     */
    SEARCH_STREAM: "OPENPERPLEX_SEARCH_STREAM",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "OPENPERPLEX".
 */
export type OPENPERPLEX_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "OPENPERPLEX".
 */
export type OPENPERPLEX_TRIGGER_EVENTS = {}
