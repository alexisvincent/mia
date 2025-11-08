// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SCRAPEGRAPH_AI's SCRAPEGRAPH_AI_GET_CREDITS tool input.
 */
type SCRAPEGRAPH_AI_GET_CREDITS_INPUT = object;

/**
 * Type of SCRAPEGRAPH_AI's SCRAPEGRAPH_AI_GET_CREDITS tool output.
 */
type SCRAPEGRAPH_AI_GET_CREDITS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Remaining Credits
       * @description Number of credits available for use.
       */
      remaining_credits: number;
      /**
       * Total Credits Used
       * @description Total number of credits consumed so far.
       */
      total_credits_used: number;
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
 * Type of SCRAPEGRAPH_AI's SCRAPEGRAPH_AI_MARKDOWNIFY tool input.
 */
type SCRAPEGRAPH_AI_MARKDOWNIFY_INPUT = {
  /**
   * Wait
   * @description If true, wait for job completion and return full results instead of request_id.
   * @default false
   */
  wait: boolean | null;
  /**
   * Website Url
   * @description The URL of the webpage to convert to Markdown.
   */
  website_url?: string;
};

/**
 * Type of SCRAPEGRAPH_AI's SCRAPEGRAPH_AI_MARKDOWNIFY tool output.
 */
type SCRAPEGRAPH_AI_MARKDOWNIFY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if the job failed (when wait=True).
       * @default null
       */
      error: string | null;
      /**
       * Job Status
       * @description Current status of the markdownify job (when wait=True).
       * @default null
       * @enum {string|null}
       */
      job_status: "queued" | "processing" | "completed" | "failed" | null;
      /**
       * Request Id
       * @description Request ID when wait=False.
       * @default null
       */
      request_id: string | null;
      /**
       * Result
       * @description Converted Markdown content (when wait=True and completed).
       * @default null
       */
      result: string | null;
      /**
       * Status
       * @description Overall request status (e.g., 'success').
       */
      status: string;
      /**
       * Website Url
       * @description The URL of the processed webpage (when wait=True).
       * @default null
       */
      website_url: string | null;
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
 * Type of SCRAPEGRAPH_AI's SCRAPEGRAPH_AI_MARKDOWNIFY_STATUS tool input.
 */
type SCRAPEGRAPH_AI_MARKDOWNIFY_STATUS_INPUT = {
  /**
   * Request Id
   * @description The unique identifier of the Markdownify request
   */
  request_id?: string;
};

/**
 * Type of SCRAPEGRAPH_AI's SCRAPEGRAPH_AI_MARKDOWNIFY_STATUS tool output.
 */
type SCRAPEGRAPH_AI_MARKDOWNIFY_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if the request failed; empty otherwise
       */
      error: string;
      /**
       * Request Id
       * @description The unique identifier of the Markdownify request
       */
      request_id: string;
      /**
       * Result
       * @description Markdown content if completed; empty otherwise
       */
      result: string;
      /**
       * Status
       * @description Current status of the Markdownify job ('queued', 'processing', 'completed', or 'failed')
       * @enum {string}
       */
      status: "queued" | "processing" | "completed" | "failed";
      /**
       * Website Url
       * @description URL of the website being processed
       */
      website_url: string;
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
 * Type of SCRAPEGRAPH_AI's SCRAPEGRAPH_AI_SEARCH_SCRAPER tool input.
 */
type SCRAPEGRAPH_AI_SEARCH_SCRAPER_INPUT = {
  /**
   * Language
   * @description ISO 639-1 language code for the search (e.g., 'en').
   * @default null
   */
  language: string | null;
  /**
   * Num Results
   * @description Maximum number of search results to return. Must be ≥ 1.
   * @default null
   */
  num_results: number | null;
  /**
   * Parse
   * @description If true, parses individual result pages for additional content.
   * @default null
   */
  parse: boolean | null;
  /**
   * Query
   * @description The search query to execute.
   */
  query?: string;
};

/**
 * Type of SCRAPEGRAPH_AI's SCRAPEGRAPH_AI_SEARCH_SCRAPER tool output.
 */
type SCRAPEGRAPH_AI_SEARCH_SCRAPER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Num Results
       * @description Number of results returned.
       */
      num_results: number;
      /**
       * Query
       * @description The search query used.
       */
      query: string;
      /**
       * Results
       * @description List of search results.
       */
      results: {
          /**
           * Link
           * @description URL of the search result.
           */
          link: string;
          /**
           * Snippet
           * @description Short description or snippet from the search result.
           */
          snippet: string;
          /**
           * Title
           * @description Title of the search result.
           */
          title: string;
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
 * Type of SCRAPEGRAPH_AI's SCRAPEGRAPH_AI_SEARCH_SCRAPER_STATUS tool input.
 */
type SCRAPEGRAPH_AI_SEARCH_SCRAPER_STATUS_INPUT = {
  /**
   * Request Id
   * @description The unique identifier of the SearchScraper request
   */
  request_id?: string;
};

/**
 * Type of SCRAPEGRAPH_AI's SCRAPEGRAPH_AI_SEARCH_SCRAPER_STATUS tool output.
 */
type SCRAPEGRAPH_AI_SEARCH_SCRAPER_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if the job failed.
       * @default
       */
      error: string;
      /**
       * Query
       * @description The search query that was executed.
       * @default null
       */
      query: string | null;
      /**
       * Request Id
       * @description Unique identifier for the request.
       */
      request_id: string;
      /**
       * Results
       * @description Search results (available when status is completed).
       * @default null
       */
      results: {
          /**
           * Content
           * @description Extracted content if parsing was enabled.
           * @default null
           */
          content: string | null;
          /**
           * Link
           * @description URL of the search result.
           */
          link: string;
          /**
           * Snippet
           * @description Description or snippet from the result.
           */
          snippet: string;
          /**
           * Title
           * @description Title of the search result.
           */
          title: string;
      }[] | null;
      /**
       * Status
       * @description Current status: queued, processing, completed, or failed.
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
 * Type of SCRAPEGRAPH_AI's SCRAPEGRAPH_AI_SMART_CRAWLER_START tool input.
 */
type SCRAPEGRAPH_AI_SMART_CRAWLER_START_INPUT = {
  /**
   * Depth
   * @description How many link levels to follow from the start URL; default is 1.
   * @default null
   */
  depth: number | null;
  /**
   * Headers
   * @description Custom HTTP headers to include in crawl requests.
   * @default null
   */
  headers: {
      [key: string]: string;
  } | null;
  /**
   * Max Pages
   * @description Maximum number of pages to crawl; default is 20.
   * @default null
   */
  max_pages: number | null;
  /**
   * Number Of Scrolls
   * @description Number of infinite scroll actions per page.
   * @default null
   */
  number_of_scrolls: number | null;
  /**
   * Output Schema
   * @description Optional Pydantic or Zod schema for structured output.
   * @default null
   */
  output_schema: {
      [key: string]: unknown;
  } | null;
  /**
   * Prompt
   * @description Instructions for what data to extract during the crawl.
   */
  prompt?: string;
  /**
   * Rules
   * @description Custom crawl rules, e.g., include/exclude URL patterns.
   * @default null
   */
  rules: {
      [key: string]: unknown;
  } | null;
  /**
   * Sitemap
   * @description Whether to use sitemap.xml for discovery; default is false.
   * @default null
   */
  sitemap: boolean | null;
  /**
   * Url
   * @description Starting URL for the crawl.
   */
  url?: string;
  /**
   * Wait
   * @description If true, wait for job completion and return full results instead of task_id.
   * @default false
   */
  wait: boolean | null;
  /**
   * Website Html
   * @description Raw HTML content to seed the crawl; overrides `url` if provided (max 2 MB).
   * @default null
   */
  website_html: string | null;
};

/**
 * Type of SCRAPEGRAPH_AI's SCRAPEGRAPH_AI_SMART_CRAWLER_START tool output.
 */
type SCRAPEGRAPH_AI_SMART_CRAWLER_START_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * SmartCrawlerResult
       * @description Structured result object for the crawl job.
       * @default null
       */
      result: {
          /**
           * Crawled Urls
           * @description List of all URLs visited during crawling.
           */
          crawled_urls: string[];
          /**
           * Llm Result
           * @description Structured extraction result from the LLM.
           */
          llm_result: {
              [key: string]: unknown;
          };
          /**
           * Pages
           * @description Details and extracted markdown for each page.
           */
          pages: {
              /**
               * Markdown
               * @description Extracted content in Markdown format.
               */
              markdown: string;
              /**
               * Url
               * @description URL of the crawled page.
               */
              url: string;
          }[];
          /**
           * Status
           * @description Status of the crawl job (e.g., 'done').
           */
          status: string;
      } | null;
      /**
       * Status
       * @description Overall request status (e.g., 'success').
       */
      status: string;
      /**
       * Task Id
       * @description Task ID when wait=False.
       * @default null
       */
      task_id: string | null;
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
 * Type of SCRAPEGRAPH_AI's SCRAPEGRAPH_AI_SMART_CRAWLER_STATUS tool input.
 */
type SCRAPEGRAPH_AI_SMART_CRAWLER_STATUS_INPUT = {
  /**
   * Task Id
   * @description The unique identifier of the SmartCrawler task
   */
  task_id?: string;
};

/**
 * Type of SCRAPEGRAPH_AI's SCRAPEGRAPH_AI_SMART_CRAWLER_STATUS tool output.
 */
type SCRAPEGRAPH_AI_SMART_CRAWLER_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Detailed crawl job result object.
       */
      result: {
          /**
           * Crawled Urls
           * @description List of all URLs visited during crawling.
           */
          crawled_urls: string[];
          /**
           * Llm Result
           * @description Structured extraction result from the LLM.
           */
          llm_result: {
              [key: string]: unknown;
          };
          /**
           * Pages
           * @description Details and extracted markdown for each page.
           */
          pages: {
              /**
               * Markdown
               * @description Extracted content in Markdown format.
               */
              markdown: string;
              /**
               * Url
               * @description URL of the crawled page.
               */
              url: string;
          }[];
          /**
           * Status
           * @description Status of the crawl job (e.g., 'done').
           */
          status: string;
      };
      /**
       * Status
       * @description Overall request status (e.g., 'success').
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
 * Type of SCRAPEGRAPH_AI's SCRAPEGRAPH_AI_SMART_SCRAPER_START tool input.
 */
type SCRAPEGRAPH_AI_SMART_SCRAPER_START_INPUT = {
  /**
   * Headers
   * @description Additional HTTP headers to include in the scraping request.
   * @default null
   */
  headers: {
      [key: string]: string;
  } | null;
  /**
   * Output Schema
   * @description Optional JSON Schema to structure the output.
   * @default null
   */
  output_schema: {
      [key: string]: unknown;
  } | null;
  /**
   * User Prompt
   * @description Natural language description of the information to extract.
   */
  user_prompt?: string;
  /**
   * Wait
   * @description If true, wait for job completion and return full results instead of request_id.
   * @default false
   */
  wait: boolean | null;
  /**
   * Website Html
   * @description Raw HTML content of the webpage. Required if `website_url` is not provided.
   * @default null
   */
  website_html: string | null;
  /**
   * Website Url
   * @description URL of the webpage to scrape. Required if `website_html` is not provided.
   * @default null
   */
  website_url: string | null;
};

/**
 * Type of SCRAPEGRAPH_AI's SCRAPEGRAPH_AI_SMART_SCRAPER_START tool output.
 */
type SCRAPEGRAPH_AI_SMART_SCRAPER_START_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if the job failed (when wait=True).
       * @default null
       */
      error: string | null;
      /**
       * Job Status
       * @description Current status of the scraping job (when wait=True).
       * @default null
       * @enum {string|null}
       */
      job_status: "queued" | "processing" | "completed" | "failed" | null;
      /**
       * Request Id
       * @description Request ID when wait=False.
       * @default null
       */
      request_id: string | null;
      /**
       * Result
       * @description Extracted information based on the prompt (when wait=True and completed).
       * @default null
       */
      result: {
          [key: string]: unknown;
      } | null;
      /**
       * Status
       * @description Overall request status (e.g., 'success').
       */
      status: string;
      /**
       * User Prompt
       * @description The original prompt provided by the user (when wait=True).
       * @default null
       */
      user_prompt: string | null;
      /**
       * Website Url
       * @description The URL of the webpage that was processed (when wait=True).
       * @default null
       */
      website_url: string | null;
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
 * Type of SCRAPEGRAPH_AI's SCRAPEGRAPH_AI_SMART_SCRAPER_STATUS tool input.
 */
type SCRAPEGRAPH_AI_SMART_SCRAPER_STATUS_INPUT = {
  /**
   * Request Id
   * @description The unique identifier of the SmartScraper request
   */
  request_id?: string;
};

/**
 * Type of SCRAPEGRAPH_AI's SCRAPEGRAPH_AI_SMART_SCRAPER_STATUS tool output.
 */
type SCRAPEGRAPH_AI_SMART_SCRAPER_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if the request failed
       * @default null
       */
      error: string | null;
      /**
       * Request Id
       * @description The unique identifier of the SmartScraper request
       */
      request_id: string;
      /**
       * Result
       * @description Extracted data from the website if completed
       * @default null
       */
      result: {
          [key: string]: unknown;
      } | null;
      /**
       * Status
       * @description Current status of the request, one of 'queued', 'processing', 'completed', 'failed'
       */
      status: string;
      /**
       * User Prompt
       * @description User-provided prompt for data extraction
       */
      user_prompt: string;
      /**
       * Website Url
       * @description URL of the website being scraped
       */
      website_url: string;
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
 * Type of SCRAPEGRAPH_AI's SCRAPEGRAPH_AI_SUBMIT_FEEDBACK tool input.
 */
type SCRAPEGRAPH_AI_SUBMIT_FEEDBACK_INPUT = {
  /**
   * Feedback Text
   * @description Optional comments about the request
   * @default null
   */
  feedback_text: string | null;
  /**
   * Rating
   * @description Star rating from 0 (lowest) to 5 (highest)
   */
  rating?: number;
  /**
   * Request Id
   * @description UUID of the request/session this feedback is for
   */
  request_id?: string;
};

/**
 * Type of SCRAPEGRAPH_AI's SCRAPEGRAPH_AI_SUBMIT_FEEDBACK tool output.
 */
type SCRAPEGRAPH_AI_SUBMIT_FEEDBACK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Feedback Id
       * @description Unique identifier for the submitted feedback
       */
      feedback_id: string;
      /**
       * Feedback Timestamp
       * @description Timestamp when feedback was recorded (ISO-8601)
       */
      feedback_timestamp: string;
      /**
       * Message
       * @description Confirmation message from the API
       */
      message: string;
      /**
       * Request Id
       * @description UUID of the original request this feedback is linked to
       */
      request_id: string;
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
 * Type map of all available tool input types for toolkit "SCRAPEGRAPH_AI".
 */
export type SCRAPEGRAPH_AI_TOOL_INPUTS = {
  GET_CREDITS: SCRAPEGRAPH_AI_GET_CREDITS_INPUT
  MARKDOWNIFY: SCRAPEGRAPH_AI_MARKDOWNIFY_INPUT
  MARKDOWNIFY_STATUS: SCRAPEGRAPH_AI_MARKDOWNIFY_STATUS_INPUT
  SEARCH_SCRAPER: SCRAPEGRAPH_AI_SEARCH_SCRAPER_INPUT
  SEARCH_SCRAPER_STATUS: SCRAPEGRAPH_AI_SEARCH_SCRAPER_STATUS_INPUT
  SMART_CRAWLER_START: SCRAPEGRAPH_AI_SMART_CRAWLER_START_INPUT
  SMART_CRAWLER_STATUS: SCRAPEGRAPH_AI_SMART_CRAWLER_STATUS_INPUT
  SMART_SCRAPER_START: SCRAPEGRAPH_AI_SMART_SCRAPER_START_INPUT
  SMART_SCRAPER_STATUS: SCRAPEGRAPH_AI_SMART_SCRAPER_STATUS_INPUT
  SUBMIT_FEEDBACK: SCRAPEGRAPH_AI_SUBMIT_FEEDBACK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SCRAPEGRAPH_AI".
 */
export type SCRAPEGRAPH_AI_TOOL_OUTPUTS = {
  GET_CREDITS: SCRAPEGRAPH_AI_GET_CREDITS_OUTPUT
  MARKDOWNIFY: SCRAPEGRAPH_AI_MARKDOWNIFY_OUTPUT
  MARKDOWNIFY_STATUS: SCRAPEGRAPH_AI_MARKDOWNIFY_STATUS_OUTPUT
  SEARCH_SCRAPER: SCRAPEGRAPH_AI_SEARCH_SCRAPER_OUTPUT
  SEARCH_SCRAPER_STATUS: SCRAPEGRAPH_AI_SEARCH_SCRAPER_STATUS_OUTPUT
  SMART_CRAWLER_START: SCRAPEGRAPH_AI_SMART_CRAWLER_START_OUTPUT
  SMART_CRAWLER_STATUS: SCRAPEGRAPH_AI_SMART_CRAWLER_STATUS_OUTPUT
  SMART_SCRAPER_START: SCRAPEGRAPH_AI_SMART_SCRAPER_START_OUTPUT
  SMART_SCRAPER_STATUS: SCRAPEGRAPH_AI_SMART_SCRAPER_STATUS_OUTPUT
  SUBMIT_FEEDBACK: SCRAPEGRAPH_AI_SUBMIT_FEEDBACK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SCRAPEGRAPH_AI toolkit.
 */
export const SCRAPEGRAPH_AI = {
  slug: "scrapegraph_ai",
  tools: {
    /**
     * Retrieve remaining and used credits for your scrapegraphai account.
     */
    GET_CREDITS: "SCRAPEGRAPH_AI_GET_CREDITS",
    /**
     * Tool to convert a specified webpage into clean, formatted markdown.
     */
    MARKDOWNIFY: "SCRAPEGRAPH_AI_MARKDOWNIFY",
    /**
     * Check status and results of webpage-to-markdown conversion jobs.
     */
    MARKDOWNIFY_STATUS: "SCRAPEGRAPH_AI_MARKDOWNIFY_STATUS",
    /**
     * Perform ai-powered web searches with structured, parsed results.
     */
    SEARCH_SCRAPER: "SCRAPEGRAPH_AI_SEARCH_SCRAPER",
    /**
     * Check the status and results of an asynchronous searchscraper job.
     */
    SEARCH_SCRAPER_STATUS: "SCRAPEGRAPH_AI_SEARCH_SCRAPER_STATUS",
    /**
     * Start ai-powered web crawling with structured data extraction across multiple pages.
     */
    SMART_CRAWLER_START: "SCRAPEGRAPH_AI_SMART_CRAWLER_START",
    /**
     * Check status and results of smartcrawler web crawling jobs.
     */
    SMART_CRAWLER_STATUS: "SCRAPEGRAPH_AI_SMART_CRAWLER_STATUS",
    /**
     * Start ai-powered web scraping with natural language extraction prompts.
     */
    SMART_SCRAPER_START: "SCRAPEGRAPH_AI_SMART_SCRAPER_START",
    /**
     * Check status and results of smartscraper web scraping jobs.
     */
    SMART_SCRAPER_STATUS: "SCRAPEGRAPH_AI_SMART_SCRAPER_STATUS",
    /**
     * Submit feedback and ratings for completed scrapegraphai requests.
     */
    SUBMIT_FEEDBACK: "SCRAPEGRAPH_AI_SUBMIT_FEEDBACK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SCRAPEGRAPH_AI".
 */
export type SCRAPEGRAPH_AI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SCRAPEGRAPH_AI".
 */
export type SCRAPEGRAPH_AI_TRIGGER_EVENTS = {}
