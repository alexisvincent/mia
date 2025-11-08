// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_AGENT tool input.
 */
type COMPOSIO_SEARCH_AGENT_INPUT = {
  /**
   * User Query
   * @description The user's request or use case that needs tool discovery
   */
  user_query?: string;
};

/**
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_AGENT tool output.
 */
type COMPOSIO_SEARCH_AGENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Apps Needed
       * @description List of unique apps/tools needed for the workflow
       */
      apps_needed: string[];
      /**
       * Ordered Steps
       * @description Tool names in execution order (e.g. GMAIL_SEND_EMAIL)
       */
      ordered_steps: string[];
      /**
       * Search Time
       * @description Time taken for the search operation in seconds
       */
      search_time: number;
      /**
       * Tools
       * @description Detailed tool information with schemas and descriptions
       */
      tools: {
          /**
           * Description
           * @description Description of the tool
           * @default null
           */
          description: string | null;
          /**
           * Input Schema
           * @description Input schema for the tool
           * @default null
           */
          input_schema: {
              [key: string]: unknown;
          } | null;
          /**
           * Order
           * @description Order in which to call the tool to execute the use case
           * @default null
           */
          order: number | null;
          /**
           * Tool
           * @description The slug of the tool
           */
          tool: string;
          /**
           * Toolkit
           * @description The slug of the toolkit that provides this tool
           */
          toolkit: string;
      }[];
      /**
       * Workflow Instructions
       * @description Detailed step-by-step execution guide
       */
      workflow_instructions: string;
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
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_DUCK_DUCK_GO_SEARCH tool input.
 */
type COMPOSIO_SEARCH_DUCK_DUCK_GO_SEARCH_INPUT = {
  /**
   * Query
   * @description The search query for the Composio DuckDuckGo Search API, specifying the search topic.
   */
  query?: string;
};

/**
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_DUCK_DUCK_GO_SEARCH tool output.
 */
type COMPOSIO_SEARCH_DUCK_DUCK_GO_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The search results from Composio DuckDuckGo Search API
       */
      response_data: {
          [key: string]: unknown;
      };
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
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_EVENT_SEARCH tool input.
 */
type COMPOSIO_SEARCH_EVENT_SEARCH_INPUT = {
  /**
   * Query
   * @description The search query for the Composio Events Search API, specifying the event topic.
   */
  query?: string;
};

/**
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_EVENT_SEARCH tool output.
 */
type COMPOSIO_SEARCH_EVENT_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description The search results from Composio Events Search API
       */
      results: {
          [key: string]: unknown;
      };
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
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_EXA_ANSWER tool input.
 */
type COMPOSIO_SEARCH_EXA_ANSWER_INPUT = {
  /**
   * Content
   * @description The user message content for the Exa answer API.
   */
  content?: string;
};

/**
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_EXA_ANSWER tool output.
 */
type COMPOSIO_SEARCH_EXA_ANSWER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Answer
       * @description The answer from Exa answer API
       */
      answer: string;
      /**
       * Citations
       * @description List of citations supporting the answer
       */
      citations: {
          /**
           * Published Date
           * @description Published date of the citation
           */
          publishedDate: string;
          /**
           * Snippet
           * @description Snippet from the citation
           */
          snippet: string;
          /**
           * Text
           * @description Text content of the citation
           */
          text: string;
          /**
           * Title
           * @description Title of the citation source
           */
          title: string;
          /**
           * Url
           * @description URL of the citation source
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
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_EXA_SIMILARLINK tool input.
 */
type COMPOSIO_SEARCH_EXA_SIMILARLINK_INPUT = {
  /**
   * Category
   * @description  A data category to focus on, with higher comprehensivity and data cleanliness. Categories right now include company, research paper, news, github, tweet, movie, song, personal site, and pdf
   */
  category?: string;
  /**
   * End Crawl Date
   * Format: date-time
   * @description Results will include links crawled before this date. For e.g. '2023-01-01T00:00:00Z', '2023-01-15T00:00:00Z', '2023-02-01T00:00:00Z'.
   */
  endCrawlDate?: string;
  /**
   * End Published Date
   * Format: date-time
   * @description Only links published before this date will be returned. For e.g. '2023-01-01', '2023-01-15', '2023-02-01'.
   */
  endPublishedDate?: string;
  /**
   * Exclude Domains
   * @description List of domains to exclude in the search. For e.g. ['example.com'], ['news.com'], ['blog.com'].
   */
  excludeDomains?: string[];
  /**
   * Include Domains
   * @description List of domains to include in the search. For e.g. ['example.com'], ['news.com'], ['blog.com'].
   */
  includeDomains?: string[];
  /**
   * Num Results
   * @description Number of search results to return. For e.g. 10, 20, 30.
   */
  numResults?: number;
  /**
   * Start Crawl Date
   * Format: date-time
   * @description Results will include links crawled after this date. For e.g. '2023-01-01T00:00:00Z', '2023-01-15T00:00:00Z', '2023-02-01T00:00:00Z'.
   */
  startCrawlDate?: string;
  /**
   * Start Published Date
   * Format: date-time
   * @description Only links published after this date will be returned. For e.g. '2023-01-01', '2023-01-15', '2023-02-01'.
   */
  startPublishedDate?: string;
  /**
   * Type
   * @description The type of search: 'keyword', 'neural', or 'magic'. For e.g. 'neural', 'keyword', 'magic'.
   */
  type?: string;
  /**
   * Url
   * @description The url for which you would like to find similar links. For e.g. 'https://slatestarcodex.com/2014/07/30/meditations-on-moloch/', 'https://ww.google.com/'
   */
  url?: string;
  /**
   * Use Autoprompt
   * @description If true, your query will be converted to an Composio Similarlinks query. For e.g. True, False, True.
   */
  useAutoprompt?: boolean;
};

/**
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_EXA_SIMILARLINK tool output.
 */
type COMPOSIO_SEARCH_EXA_SIMILARLINK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description A list of search results, each containing title, URL, published date, author, and score.
       */
      results: {
          [key: string]: unknown;
      };
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
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_FINANCE_SEARCH tool input.
 */
type COMPOSIO_SEARCH_FINANCE_SEARCH_INPUT = {
  /**
   * Query
   * @description The search query for the Composio Finance Search API, specifying the financial topic or stock symbol.
   */
  query?: string;
};

/**
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_FINANCE_SEARCH tool output.
 */
type COMPOSIO_SEARCH_FINANCE_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description The search results from Composio Finance Search API
       */
      results: {
          [key: string]: unknown;
      };
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
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_GOOGLE_MAPS_SEARCH tool input.
 */
type COMPOSIO_SEARCH_GOOGLE_MAPS_SEARCH_INPUT = {
  /**
   * Ll
   * @description GPS coordinates for the search, formatted as '@latitude,longitude,zoom_level'. Required when using pagination.
   */
  ll?: string;
  /**
   * Q
   * @description The query you want to search.
   */
  q?: string;
  /**
   * Start
   * @description Used for pagination.
   */
  start?: number;
};

/**
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_GOOGLE_MAPS_SEARCH tool output.
 */
type COMPOSIO_SEARCH_GOOGLE_MAPS_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description The search results from Composio Goolge Maps Search API
       */
      results: {
          [key: string]: unknown;
      };
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
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_IMAGE_SEARCH tool input.
 */
type COMPOSIO_SEARCH_IMAGE_SEARCH_INPUT = {
  /**
   * Query
   * @description The search query for the Composio Image Search API, specifying the image topic.
   */
  query?: string;
};

/**
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_IMAGE_SEARCH tool output.
 */
type COMPOSIO_SEARCH_IMAGE_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description The search results from Composio Image Search API
       */
      results: {
          [key: string]: unknown;
      };
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
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_NEWS_SEARCH tool input.
 */
type COMPOSIO_SEARCH_NEWS_SEARCH_INPUT = {
  /**
   * Query
   * @description The search query for the Composio News Search API, specifying the topic for news search.
   */
  query?: string;
};

/**
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_NEWS_SEARCH tool output.
 */
type COMPOSIO_SEARCH_NEWS_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description The search results from Composio News Search API
       */
      results: {
          [key: string]: unknown;
      };
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
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_SCHOLAR_SEARCH tool input.
 */
type COMPOSIO_SEARCH_SCHOLAR_SEARCH_INPUT = {
  /**
   * Query
   * @description The search query for the Composio Scholar Search API, specifying the academic topic or paper title.
   */
  query?: string;
};

/**
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_SCHOLAR_SEARCH tool output.
 */
type COMPOSIO_SEARCH_SCHOLAR_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description The search results from Composio Scholar Search API
       */
      results: {
          [key: string]: unknown;
      };
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
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_SEARCH tool input.
 */
type COMPOSIO_SEARCH_SEARCH_INPUT = {
  /**
   * Query
   * @description The search query for the Composio Google Search API.
   */
  query?: string;
};

/**
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_SEARCH tool output.
 */
type COMPOSIO_SEARCH_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description The search results from Composio Google Search API
       */
      results: {
          [key: string]: unknown;
      };
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
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_SHOPPING_SEARCH tool input.
 */
type COMPOSIO_SEARCH_SHOPPING_SEARCH_INPUT = {
  /**
   * Query
   * @description The search query for the Composio Shopping Search API, specifying the product or item for shopping search.
   */
  query?: string;
};

/**
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_SHOPPING_SEARCH tool output.
 */
type COMPOSIO_SEARCH_SHOPPING_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description The search results from Composio Shopping Search API
       */
      results: {
          [key: string]: unknown;
      };
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
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_TAVILY_SEARCH tool input.
 */
type COMPOSIO_SEARCH_TAVILY_SEARCH_INPUT = {
  /**
   * Exclude Domains
   * @description A list of domain names to exclude from the search results. Results from these domains will not be included, which can help to filter out unwanted content.
   */
  exclude_domains?: unknown[];
  /**
   * Include Answer
   * @description Specifies whether to include direct answers to the query in the search results. Useful for queries that expect a factual answer.
   * @default false
   */
  include_answer: boolean;
  /**
   * Include Domains
   * @description A list of domain names to include in the search results. Only results from these specified domains will be returned, allowing for targeted searches.
   */
  include_domains?: unknown[];
  /**
   * Include Images
   * @description A flag indicating whether to include images in the search results. When set to true, the response will contain image links related to the query.
   * @default false
   */
  include_images: boolean;
  /**
   * Include Raw Content
   * @description If set to true, the search results will include the raw content from the search index, which may contain unprocessed HTML or text.
   * @default false
   */
  include_raw_content: boolean;
  /**
   * Max Results
   * @description The maximum number of search results that the API should return. This limits the size of the result set for the query.
   * @default 5
   */
  max_results: number;
  /**
   * Query
   * @description The primary text used to perform the search. This is the key term or phrase that the search functionality will use to retrieve results.
   */
  query?: string;
  /**
   * Search Depth
   * @description Determines the thoroughness of the search. A 'basic' search might perform a quick and broad search, while 'advanced' could indicate a more intensive and narrow search.
   * @default basic
   * @enum {string}
   */
  search_depth: "basic" | "advanced";
};

/**
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_TAVILY_SEARCH tool output.
 */
type COMPOSIO_SEARCH_TAVILY_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full response data returned by the Composio LLM Search API.
       */
      response_data: {
          [key: string]: unknown;
      };
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
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_TOOLS tool input.
 */
type COMPOSIO_SEARCH_TOOLS_INPUT = {
  /**
   * Queries
   * @description List of structured search queries to process in parallel. Each query represents a specific use case or task. For multi-app or complex workflows, split them into smaller single-app queries for best accuracy. Each query returns 5-7 tools.
   */
  queries?: {
      /**
       * Use Case
       * @description Provide a normalized English description of the complete use case to enable precise tool selection. Focus on the specific action and intended outcome. Include any specific apps if mentioned by user. Do NOT include personal identifiers (names, emails, IDs) here — put those in known_fields.
       */
      use_case: string;
      /** @description Provide known workflow inputs in English as comma-separated key:value pairs (not an array). Keep 2-3 short, structured items - stable identifiers, names, emails, or settings only. Omit if not relevant. No free-form or long text (messages, notes, descriptions). */
      known_fields?: string;
  }[];
  /** @description Session context for correlating meta tool calls within a workflow. Always pass this parameter. Use {generate_id: true} for new workflows or {id: "EXISTING_ID"} to continue existing workflows. */
  session?: {
      /** @description Existing session identifier for the current workflow to reuse across calls. */
      id?: string;
      /** @description Set to true for the first search call of a new usecase/workflow to generate a new session ID. If omitted or false with an existing session.id, the provided session ID will be reused. */
      generate_id?: boolean;
  };
};

/**
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_TOOLS tool output.
 */
type COMPOSIO_SEARCH_TOOLS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** @description Per-query search results with tools, reasoning, and memory. One entry per query in request order. */
      results: {
          /** @description 1-based index of the query in the request */
          index: number;
          /** @description The use case that was searched */
          use_case: string;
          /** @description List of main tool slugs matching the search criteria */
          main_tool_slugs: string[];
          /** @description List of related tool slugs that might be useful */
          related_tool_slugs: string[];
          /** @description List of unique toolkit slugs used by tools in this query */
          toolkits: string[];
          /** @description Reasoning for the search results */
          reasoning: string;
          /** @description Assessment of task difficulty for this specific query */
          task_difficulty: string;
          /** @description Memory data relevant to this query, grouped by app */
          memory?: {
              [key: string]: unknown[];
          };
          /** @description Whether the search for this query was successful */
          successful: boolean;
          /** @description Error message if the search failed, null otherwise */
          error: string | null;
      }[];
      /** @description Deduplicated tool definitions keyed by tool_slug for O(1) lookup. Each tool appears once even if used in multiple queries. */
      tool_schemas: {
          [key: string]: {
              /** @description The slug of the tool */
              tool_slug?: string;
              /** @description The slug of the toolkit that provides this tool */
              toolkit?: string;
              /** @description Description of the tool */
              description?: string | null;
              /** @description Input schema for the tool */
              input_schema?: {
                  [key: string]: unknown;
              } | null;
              /** @description Practical usage notes and examples for the tool */
              usage_guidelines?: string | null;
          };
      };
      /** @description Connection status for all toolkits mentioned across all queries, with descriptions merged in */
      toolkit_connection_statuses: {
          /** @description The toolkit slug identifier (e.g., "gmail", "slack") */
          toolkit: string;
          /** @description Description of what the toolkit does and its capabilities */
          description: string;
          /** @description Whether an active connection exists for this toolkit */
          active_connection: boolean;
          /** @description Connection details including auth config and connected account IDs */
          connection_details: {
              [key: string]: unknown;
          };
          /** @description Information about the currently connected user (email, name, etc.) */
          current_user_info?: {
              [key: string]: unknown;
          } | null;
          /** @description Human-readable message about the connection status and next steps */
          message: string;
      }[];
      /** @description Time information for the query */
      time_info: {
          /** @description Current time in ISO format (UTC) */
          current_time: string;
          /** @description Current time as Unix epoch timestamp in seconds */
          current_time_epoch_in_seconds: number;
          /** @description Important message about time handling and timezone considerations */
          message: string;
      };
      /** @description Session info for correlating meta tool calls */
      session: {
          /** @description Session identifier to be passed to subsequent meta tool calls */
          id: string;
          /** @description Whether a fresh session id was generated in this call */
          generate_id: boolean;
          /** @description LLM-facing guidance on how to reuse this session id */
          instructions: string;
      };
      /** @description Best practices for workflow execution. Only present if call_create_plan is false */
      best_practices?: string | null;
      /** @description Aggregated next steps guidance across all queries */
      next_steps: {
          /** @description Whether to call CREATE_PLAN tool. True if ANY query requires planning */
          call_create_plan: boolean;
          /** @description Combined workflow guidance covering connections, planner, and memory usage */
          next_steps_guidance: string;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution. Format: "X out of Y searches failed, reasons: <details>"
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether all searches completed successfully. False if any query failed
   */
  successful?: boolean;
};

/**
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_TRENDS_SEARCH tool input.
 */
type COMPOSIO_SEARCH_TRENDS_SEARCH_INPUT = {
  /**
   * Data Type
   * @description Parameter defines the type of search you want to do. Available options: TIMESERIES - Interest over time (default) - Accepts both single and multiple queries per search. GEO_MAP - Compared breakdown by region - Accepts only multiple queries per search. GEO_MAP_0 - Interest by region - Accepts only single query per search. RELATED_TOPICS - Related topics - Accepts only single query per search. RELATED_QUERIES - Related queries - Accepts only single query per search.
   * @default TIMESERIES
   */
  data_type: string | null;
  /**
   * Query
   * @description The search query for the Google Trends Search API, specifying the trend topic.
   */
  query?: string;
};

/**
 * Type of COMPOSIO_SEARCH's COMPOSIO_SEARCH_TRENDS_SEARCH tool output.
 */
type COMPOSIO_SEARCH_TRENDS_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description The search results from Google Trends Search API
       */
      results: {
          [key: string]: unknown;
      };
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
 * Type map of all available tool input types for toolkit "COMPOSIO_SEARCH".
 */
export type COMPOSIO_SEARCH_TOOL_INPUTS = {
  AGENT: COMPOSIO_SEARCH_AGENT_INPUT
  DUCK_DUCK_GO_SEARCH: COMPOSIO_SEARCH_DUCK_DUCK_GO_SEARCH_INPUT
  EVENT_SEARCH: COMPOSIO_SEARCH_EVENT_SEARCH_INPUT
  EXA_ANSWER: COMPOSIO_SEARCH_EXA_ANSWER_INPUT
  EXA_SIMILARLINK: COMPOSIO_SEARCH_EXA_SIMILARLINK_INPUT
  FINANCE_SEARCH: COMPOSIO_SEARCH_FINANCE_SEARCH_INPUT
  GOOGLE_MAPS_SEARCH: COMPOSIO_SEARCH_GOOGLE_MAPS_SEARCH_INPUT
  IMAGE_SEARCH: COMPOSIO_SEARCH_IMAGE_SEARCH_INPUT
  NEWS_SEARCH: COMPOSIO_SEARCH_NEWS_SEARCH_INPUT
  SCHOLAR_SEARCH: COMPOSIO_SEARCH_SCHOLAR_SEARCH_INPUT
  SEARCH: COMPOSIO_SEARCH_SEARCH_INPUT
  SHOPPING_SEARCH: COMPOSIO_SEARCH_SHOPPING_SEARCH_INPUT
  TAVILY_SEARCH: COMPOSIO_SEARCH_TAVILY_SEARCH_INPUT
  TOOLS: COMPOSIO_SEARCH_TOOLS_INPUT
  TRENDS_SEARCH: COMPOSIO_SEARCH_TRENDS_SEARCH_INPUT
}

/**
 * Type map of all available tool input types for toolkit "COMPOSIO_SEARCH".
 */
export type COMPOSIO_SEARCH_TOOL_OUTPUTS = {
  AGENT: COMPOSIO_SEARCH_AGENT_OUTPUT
  DUCK_DUCK_GO_SEARCH: COMPOSIO_SEARCH_DUCK_DUCK_GO_SEARCH_OUTPUT
  EVENT_SEARCH: COMPOSIO_SEARCH_EVENT_SEARCH_OUTPUT
  EXA_ANSWER: COMPOSIO_SEARCH_EXA_ANSWER_OUTPUT
  EXA_SIMILARLINK: COMPOSIO_SEARCH_EXA_SIMILARLINK_OUTPUT
  FINANCE_SEARCH: COMPOSIO_SEARCH_FINANCE_SEARCH_OUTPUT
  GOOGLE_MAPS_SEARCH: COMPOSIO_SEARCH_GOOGLE_MAPS_SEARCH_OUTPUT
  IMAGE_SEARCH: COMPOSIO_SEARCH_IMAGE_SEARCH_OUTPUT
  NEWS_SEARCH: COMPOSIO_SEARCH_NEWS_SEARCH_OUTPUT
  SCHOLAR_SEARCH: COMPOSIO_SEARCH_SCHOLAR_SEARCH_OUTPUT
  SEARCH: COMPOSIO_SEARCH_SEARCH_OUTPUT
  SHOPPING_SEARCH: COMPOSIO_SEARCH_SHOPPING_SEARCH_OUTPUT
  TAVILY_SEARCH: COMPOSIO_SEARCH_TAVILY_SEARCH_OUTPUT
  TOOLS: COMPOSIO_SEARCH_TOOLS_OUTPUT
  TRENDS_SEARCH: COMPOSIO_SEARCH_TRENDS_SEARCH_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's COMPOSIO_SEARCH toolkit.
 */
export const COMPOSIO_SEARCH = {
  slug: "composio_search",
  tools: {
    /**
     * Discover tools and analyze dependencies for complex workflows using ai agent. this action uses an ai agent to intelligently search for tools across toolkits and create optimized execution sequences with detailed instructions.
     */
    AGENT: "COMPOSIO_SEARCH_AGENT",
    /**
     * The duckduckgosearch class utilizes the composio duckduckgo search api to perform searches, focusing on web information and details. it leverages the duckduckgo search engine via the composio duckduckgo search api to retrieve relevant web data based on the provided query.
     */
    DUCK_DUCK_GO_SEARCH: "COMPOSIO_SEARCH_DUCK_DUCK_GO_SEARCH",
    /**
     * The eventsearch class enables scraping of google events search queries. it conducts an event search using the composio events search api, retrieving information on events such as concerts, festivals, and other activities based on the provided query.
     */
    EVENT_SEARCH: "COMPOSIO_SEARCH_EVENT_SEARCH",
    /**
     * Get answers with citations using the exa api.
     */
    EXA_ANSWER: "COMPOSIO_SEARCH_EXA_ANSWER",
    /**
     * Perform a search to find similar links and retrieve a list of relevant results. the search can optionally return contents.
     */
    EXA_SIMILARLINK: "COMPOSIO_SEARCH_EXA_SIMILARLINK",
    /**
     * The financesearch class utilizes the composio finance search api to conduct financial searches, focusing on financial data and stock information. it leverages the google finance search engine via the composio finance search api to retrieve pertinent financial details based on the provided query.
     */
    FINANCE_SEARCH: "COMPOSIO_SEARCH_FINANCE_SEARCH",
    /**
     * The googlemapssearch class performs a location-specific search using the composio goolge maps search api. this class extends the functionality of the base action class to specifically target locations related to the given query. by utilizing the google maps search engine through the composio goolge maps search api, it fetches the most relevant location data based on the input query. the `googlemapssearch` class is particularly useful for applications that need to retrieve and display location information about a specific area. it leverages the powerful search capabilities of google's maps search engine, ensuring that the returned results are accurate and relevant.
     */
    GOOGLE_MAPS_SEARCH: "COMPOSIO_SEARCH_GOOGLE_MAPS_SEARCH",
    /**
     * The imagesearch class performs an image search using the composio image search api, to target image data and information. it uses the google images search engine through the composio image search api to fetch relevant image information based on the input query.
     */
    IMAGE_SEARCH: "COMPOSIO_SEARCH_IMAGE_SEARCH",
    /**
     * The newssearch class performs a news-specific search using the composio news search api. this class extends the functionality of the base action class to specifically target news articles related to the given query. by utilizing the google news search engine through the composio news search api, it fetches the most relevant news articles based on the input query. the `newssearch` class is particularly useful for applications that need to retrieve and display the latest news articles about a specific topic. it leverages the powerful search capabilities of google's news search engine, ensuring that the returned results are current and relevant.
     */
    NEWS_SEARCH: "COMPOSIO_SEARCH_NEWS_SEARCH",
    /**
     * Scholar api allows you to scrape results from a google scholar search query. the scholarsearch class performs an academic search using the composio scholar search api, academic papers and scholarly articles. it uses the google scholar search engine through the serp api to fetch relevant academic information based on the input query.
     */
    SCHOLAR_SEARCH: "COMPOSIO_SEARCH_SCHOLAR_SEARCH",
    /**
     * Perform a google search using the composio google search api.
     */
    SEARCH: "COMPOSIO_SEARCH_SEARCH",
    /**
     * The shoppingsearch class performs a product search using the composio shopping search api.it specifically target shopping results related to the given query. by utilizing the google shopping search engine through the composio shopping search api, it fetches the most relevant product listings based on the input query. the `shoppingsearch` class is particularly useful for applications that need to retrieve and display the latest product listings and shopping results for a specific item. it leverages the powerful search capabilities of google's shopping search engine, ensuring that the returned results are current and relevant.
     */
    SHOPPING_SEARCH: "COMPOSIO_SEARCH_SHOPPING_SEARCH",
    /**
     * The composio llm search class serves as a gateway to the composio llm search api, allowing users to perform searches across a broad range of content with multiple filtering options. it accommodates complex queries, including both keyword and phrase searches, with additional parameters to fine-tune the search results. this class enables a tailored search experience by allowing users to specify the search depth, include images and direct answers, apply domain-specific filters, and control the number of results returned. it is designed to meet various search requirements, from quick lookups to in-depth research.
     */
    TAVILY_SEARCH: "COMPOSIO_SEARCH_TAVILY_SEARCH",
    /**
     * 
     *   MCP Server Info: COMPOSIO MCP connects 500+ apps—Slack, GitHub, Notion, Google Workspace (Gmail, Sheets, Drive, Calendar), Microsoft (Outlook, Teams), X, Figma, Web Search, Browser Tool, Meta apps (WhatsApp, Instagram), TikTok, AI tools like Nano Banana & Veo3, and more—for seamless cross-app automation.
     *   Use this MCP server to discover new tools and connect to apps.
     *   ALWAYS call this tool first whenever a user mentions or implies an external app, service, or workflow—never say "I don’t have access to X/Y app" before calling it.
     * 
     *   Tool Info: Extremely fast search tool to discover available MCP callable tools that can be used to solve a particular problem, user query or complete a task.
     * Usage guidelines:
     *   - Use this tool whenever kicking off a task. Post this, keep coming back to this tool to discover new tools.
     *   - If the user pivots to a different use case in same chat, you MUST call this tool again with the new use case.
     *   - Specify the use_case with a normalized description of the problem, query, or task. Be clear and precise so the system can find the most relevant tools. Queries can be simple single-app actions, or multiple queries can be linked to form complex cross-app workflows.
     *   - Pass known_fields along with use_case as a list of key-value pairs to help the search provide tools to look up missing details (for example, finding channel_id from a given channel_name).
     * 
     *   Example:
     *   User query: "send an email to John welcoming him and create a meeting invite"
     *   Search call: queries: [{use_case: "send an email to someone", known_fields: "recipient_name: John"}, {use_case: "create a meeting invite", known_fields: "meeting_subject: Welcome John"}]
     * 
     * Response:
     *   - The response lists toolkits (apps) and tools suitable for the task, along with their tool_slug, description, input schema, and related tools for prerequisites, alternatives, or next steps. Includes detailed plan and pitfalls for optimal execution.
     *   - If a toolkit has an active connection, the response includes it along with any available current user information. If no active connection exists, the response lists any required parameters for establishing a new one.
     *   - The response includes the current UTC time for reference. You can reference UTC time from the response if needed.
     *   - The response includes a memory parameter containing relevant information about the use case and the known fields that can be used to determine the flow of execution. Any user preferences in memory should be adhered to.
     *   - The tools returned to you through this are to be called via COMPOSIO_MULTI_EXECUTE_TOOL. Make sure to specify the tool_slug and arguments for each tool execution properly.
     * 
     * SESSION: ALWAYS set this parameter, first for any workflow. Pass session: {generate_id: true} for new workflows OR session: {id: "EXISTING_ID"} to continue. ALWAYS use the returned session_id in ALL subsequent meta tool calls.
     *     
     */
    TOOLS: "COMPOSIO_SEARCH_TOOLS",
    /**
     * The trendssearch class performs a trend search using the google trends search api, to target trend data and information. it uses the google trends search engine through the google trends search api to fetch relevant trend information based on the input query.
     */
    TRENDS_SEARCH: "COMPOSIO_SEARCH_TRENDS_SEARCH",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "COMPOSIO_SEARCH".
 */
export type COMPOSIO_SEARCH_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "COMPOSIO_SEARCH".
 */
export type COMPOSIO_SEARCH_TRIGGER_EVENTS = {}
