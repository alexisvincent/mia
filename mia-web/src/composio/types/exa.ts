// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of EXA's EXA_ANSWER tool input.
 */
type EXA_ANSWER_INPUT = {
  /**
   * Model
   * @description Specifies the search model to use. 'exa' uses a single, direct query. 'exa-pro' uses two expanded queries for potentially more comprehensive results. Allowed values are 'exa' or 'exa-pro'. Defaults to 'exa'.
   * @default exa
   */
  model: string;
  /**
   * Query
   * @description The natural language question or search query for which an answer is sought. The query should be specific enough to guide the search effectively.
   */
  query?: string;
  /**
   * Stream
   * @description Set to `true` to receive the response as a stream of server-sent events (SSE). This is useful for displaying results incrementally. Defaults to `false`.
   * @default false
   */
  stream: boolean;
  /**
   * Text
   * @description Set to `true` to include the full text content of the cited source documents in the `citations` part of the response. Defaults to `false`.
   * @default false
   */
  text: boolean;
};

/**
 * Type of EXA's EXA_ANSWER tool output.
 */
type EXA_ANSWER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Answer
       * @description The synthesized, natural language answer to the input query, generated from the information found in the cited sources.
       * @default null
       */
      answer: string | null;
      /**
       * Answer Id
       * @description A unique identifier for this answer interaction, if provided by Exa.
       * @default null
       */
      answerId: string | null;
      /**
       * Citations
       * @description A list of `Citation` objects, each detailing a source document that contributed to the generated answer. Provides evidence and links to original content.
       */
      citations: {
          /**
           * Author
           * @description The author(s) of the cited content, if this information is available.
           * @default null
           */
          author: string | null;
          /**
           * Favicon
           * @description A URL for the favicon of the website hosting the cited document, if available.
           * @default null
           */
          favicon: string | null;
          /**
           * Id
           * @description A unique temporary identifier assigned to the cited document within this response.
           * @default null
           */
          id: string | null;
          /**
           * Image
           * @description A URL for an image associated with the cited document, if available.
           * @default null
           */
          image: string | null;
          /**
           * Published Date
           * @description The publication date of the cited content, formatted as YYYY-MM-DD, if available.
           * @default null
           */
          publishedDate: string | null;
          /**
           * Score
           * @description Relevance score of the result
           * @default null
           */
          score: number | null;
          /**
           * Snippet
           * @description A short snippet from the search result
           * @default null
           */
          snippet: string | null;
          /**
           * Text
           * @description The full text content of the cited document. This field is populated only if the `text` parameter in the `AnswerRequest` was set to `true`.
           * @default null
           */
          text: string | null;
          /**
           * Title
           * @description The title of the web page or document cited.
           * @default null
           */
          title: string | null;
          /**
           * Url
           * Format: uri
           * @description The direct URL of the original web page or document that serves as a source for the answer.
           * @default null
           */
          url: string | null;
      }[];
      /**
       * Cited Chunks
       * @description Specific text excerpts cited from sources supporting the answer.
       */
      citedChunks?: {
          /**
           * Document Id
           * @description ID of the document from which the chunk is cited.
           * @default null
           */
          documentId: string | null;
          /**
           * Source Url
           * Format: uri
           * @description URL of the document from which the chunk is cited.
           * @default null
           */
          source_url: string | null;
          /**
           * Text
           * @description The excerpt of text cited from a source.
           * @default null
           */
          text: string | null;
      }[] | null;
      /**
       * CostDollars
       * @description Model for cost information in the response.
       * @default null
       */
      costDollars: {
          /**
           * Break Down
           * @description Breakdown of costs by operation type.
           * @default null
           */
          breakDown: {
              /**
               * Breakdown
               * @description Detailed breakdown of costs.
               */
              breakdown: {
                  /**
                   * Content Highlight
                   * @description Cost of highlight generation.
                   */
                  contentHighlight: number;
                  /**
                   * Content Summary
                   * @description Cost of summary generation.
                   */
                  contentSummary: number;
                  /**
                   * Content Text
                   * @description Cost of text content retrieval.
                   */
                  contentText: number;
                  /**
                   * Keyword Search
                   * @description Cost of keyword search operations.
                   */
                  keywordSearch: number;
                  /**
                   * Neural Search
                   * @description Cost of neural search operations.
                   */
                  neuralSearch: number;
              };
              /**
               * Contents
               * @description Cost of content operations.
               */
              contents: number;
              /**
               * Search
               * @description Cost of search operations.
               */
              search: number;
          }[] | null;
          /**
           * PerPagePrices
           * @description Standard price per page for different content operations.
           * @default null
           */
          perPagePrices: {
              /**
               * Content Highlight
               * @description Standard price per page for highlights.
               */
              contentHighlight: number;
              /**
               * Content Summary
               * @description Standard price per page for summaries.
               */
              contentSummary: number;
              /**
               * Content Text
               * @description Standard price per page for text content.
               */
              contentText: number;
          } | null;
          /**
           * PerRequestPrices
           * @description Standard price per request for different operations.
           * @default null
           */
          perRequestPrices: {
              /**
               * Keyword Search 100 Plus Results
               * @description Standard price for keyword search with 100+ results.
               */
              keywordSearch_100_plus_results: number;
              /**
               * Keyword Search 1 100 Results
               * @description Standard price for keyword search with 1-100 results.
               */
              keywordSearch_1_100_results: number;
              /**
               * Neural Search 100 Plus Results
               * @description Standard price for neural search with 100+ results.
               */
              neuralSearch_100_plus_results: number;
              /**
               * Neural Search 1 25 Results
               * @description Standard price for neural search with 1-25 results.
               */
              neuralSearch_1_25_results: number;
              /**
               * Neural Search 26 100 Results
               * @description Standard price for neural search with 26-100 results.
               */
              neuralSearch_26_100_results: number;
          } | null;
          /**
           * Total
           * @description Total dollar cost for the request.
           */
          total: number;
      } | null;
      /**
       * Followup Questions
       * @description Suggested follow-up questions related to the query.
       */
      followupQuestions?: string[] | null;
      /**
       * Sources
       * @description List of primary source identifiers (URLs/IDs) used to formulate the answer.
       */
      sources?: {
          /**
           * Document Id
           * @description ID of the source document if it was an uploaded document.
           * @default null
           */
          documentId: string | null;
          /**
           * Title
           * @description Title of the source, if available from Exa's /answer 'sources' field.
           * @default null
           */
          title: string | null;
          /**
           * Url
           * Format: uri
           * @description URL of the source document.
           * @default null
           */
          url: string | null;
      }[] | null;
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
 * Type of EXA's EXA_CREATE_IMPORT tool input.
 */
type EXA_CREATE_IMPORT_INPUT = {
  /**
   * Count
   * @description Number of items in the import.
   * @default null
   */
  count: number | null;
  /**
   * CsvImportSettings
   * @description CSV-specific settings for the import.
   * @default null
   */
  csv: {
      /**
       * Identifier
       * @description Identifier for the CSV import.
       * @default null
       */
      identifier: number | null;
  } | null;
  /**
   * Entity
   * @description Entity information for the import.
   */
  entity?: {
      /**
       * Type
       * @description Type of entity for the import (e.g., 'company').
       */
      type: string;
  };
  /**
   * Format
   * @description Format of the import file (e.g., 'csv').
   */
  format?: string;
  /**
   * Metadata
   * @description Additional metadata for the import.
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Size
   * @description Size of the import in bytes.
   * @default null
   */
  size: number | null;
  /**
   * Title
   * @description Title of the import.
   * @default null
   */
  title: string | null;
};

/**
 * Type of EXA's EXA_CREATE_IMPORT tool output.
 */
type EXA_CREATE_IMPORT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of items in the import.
       * @default null
       */
      count: number | null;
      /**
       * Created At
       * @description Timestamp when the import was created.
       */
      createdAt: string;
      /**
       * Entity
       * @description Entity information for the import.
       */
      entity: {
          /**
           * Type
           * @description Type of entity for the import (e.g., 'company').
           */
          type: string;
      };
      /**
       * Failed At
       * @description Timestamp when the import failed, if applicable.
       * @default null
       */
      failedAt: string | null;
      /**
       * Failed Message
       * @description Failure message, if applicable.
       * @default null
       */
      failedMessage: string | null;
      /**
       * Failed Reason
       * @description Reason for failure, if the import failed.
       * @default null
       */
      failedReason: string | null;
      /**
       * Format
       * @description Format of the import file.
       */
      format: string;
      /**
       * Id
       * @description Unique identifier for the import.
       */
      id: string;
      /**
       * Metadata
       * @description Additional metadata for the import.
       * @default null
       */
      metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Object
       * @description Type of object (e.g., 'import').
       */
      object: string;
      /**
       * Status
       * @description Status of the import (e.g., 'pending').
       */
      status: string;
      /**
       * Title
       * @description Title of the import.
       * @default null
       */
      title: string | null;
      /**
       * Updated At
       * @description Timestamp when the import was last updated.
       */
      updatedAt: string;
      /**
       * Upload Url
       * Format: uri
       * @description URL to upload the import file.
       */
      uploadUrl: string;
      /**
       * Upload Valid Until
       * @description Timestamp until the upload URL is valid.
       */
      uploadValidUntil: string;
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
 * Type of EXA's EXA_CREATE_MONITOR tool input.
 */
type EXA_CREATE_MONITOR_INPUT = {
  /**
   * Behavior
   * @description Behavior to perform when monitor runs.
   */
  behavior?: {
      /**
       * Config
       * @description Configuration for the behavior execution.
       */
      config: {
          /**
           * Behavior
           * @description Behavior to apply to results (e.g., 'append', 'replace').
           * @default null
           */
          behavior: string | null;
          /**
           * Count
           * @description Number of results to return.
           * @default null
           */
          count: number | null;
          /**
           * Criteria
           * @description List of criteria objects defining additional conditions for the search run.
           * @default null
           */
          criteria: {
              /**
               * Description
               * @description A condition or filter description for the monitor's behavior configuration.
               */
              description: string;
          }[] | null;
          /**
           * Entity
           * @description Entity filter for the search run.
           * @default null
           */
          entity: {
              /**
               * Type
               * @description Type of entity to search for (e.g., 'company').
               */
              type: string;
          } | null;
          /**
           * Query
           * @description The search query string to use for the monitor run.
           * @default null
           */
          query: string | null;
      };
      /**
       * Type
       * @description Type of behavior to execute when monitor runs.
       * @default search
       * @constant
       */
      type: "search";
  };
  /**
   * Cadence
   * @description How often the monitor will run.
   */
  cadence?: {
      /**
       * Cron
       * @description Cron expression for monitor cadence (must be a valid Unix cron with 5 fields). The schedule must trigger at most once per day.
       */
      cron: string;
      /**
       * Timezone
       * @description IANA timezone (e.g., 'America/New_York').
       * @default Etc/UTC
       */
      timezone: string | null;
  };
  /**
   * Metadata
   * @description Key-value pairs to associate with the Monitor.
   */
  metadata?: {
      [key: string]: string;
  } | null;
  /**
   * Webset Id
   * @description The ID of the Webset to attach this Monitor to.
   */
  websetId?: string;
};

/**
 * Type of EXA's EXA_CREATE_MONITOR tool output.
 */
type EXA_CREATE_MONITOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Behavior
       * @description Behavior settings of the Monitor.
       */
      behavior: {
          /**
           * Config
           * @description Behavior configuration.
           */
          config: {
              /**
               * Behavior
               * @description Behavior applied to results (e.g., 'append').
               */
              behavior: string;
              /**
               * Count
               * @description Number of results returned per run.
               */
              count: number;
              /**
               * Criteria
               * @description List of criteria applied during the monitor run.
               */
              criteria: {
                  /**
                   * Description
                   * @description Criteria description for the monitor.
                   */
                  description: string;
              }[];
              /**
               * Entity
               * @description Entity filter in the monitor run.
               */
              entity: {
                  /**
                   * Type
                   * @description Entity type used in the monitor.
                   */
                  type: string;
              };
              /**
               * Query
               * @description Search query used by the monitor.
               */
              query: string;
          };
          /**
           * Type
           * @description Type of behavior.
           * @constant
           */
          type: "search";
      };
      /**
       * Cadence
       * @description Schedule configuration of the Monitor.
       */
      cadence: {
          /**
           * Cron
           * @description Cron expression for monitor cadence.
           */
          cron: string;
          /**
           * Timezone
           * @description IANA timezone for the schedule.
           */
          timezone: string;
      };
      /**
       * Created At
       * @description Timestamp when the Monitor was created.
       */
      createdAt: string;
      /**
       * Id
       * @description The unique identifier for the Monitor.
       */
      id: string;
      /**
       * MonitorLastRun
       * @description The last execution details of the Monitor.
       * @default null
       */
      lastRun: {
          /**
           * Canceled At
           * @description Timestamp when the run was canceled.
           * @default null
           */
          canceledAt: string | null;
          /**
           * Completed At
           * @description Timestamp when the run completed.
           * @default null
           */
          completedAt: string | null;
          /**
           * Created At
           * @description Timestamp when the run was created.
           */
          createdAt: string;
          /**
           * Failed At
           * @description Timestamp when the run failed.
           * @default null
           */
          failedAt: string | null;
          /**
           * Failed Reason
           * @description Reason the run failed.
           * @default null
           */
          failedReason: string | null;
          /**
           * Id
           * @description The unique identifier for the Monitor Run.
           */
          id: string;
          /**
           * Monitor Id
           * @description ID of the Monitor associated with this run.
           */
          monitorId: string;
          /**
           * Object
           * @description The type of object.
           * @constant
           */
          object: "monitor_run";
          /**
           * Status
           * @description The status of the Monitor Run.
           * @enum {string}
           */
          status: "created" | "running" | "completed" | "canceled" | "failed";
          /**
           * Type
           * @description The run type.
           * @enum {string}
           */
          type: "search" | "refresh";
          /**
           * Updated At
           * @description Timestamp when the run was last updated.
           */
          updatedAt: string;
      } | null;
      /**
       * Metadata
       * @description Associated metadata key-value pairs.
       */
      metadata: {
          [key: string]: string;
      };
      /**
       * Next Run At
       * @description Timestamp for the next scheduled run.
       * @default null
       */
      nextRunAt: string | null;
      /**
       * Object
       * @description The type of object.
       * @constant
       */
      object: "monitor";
      /**
       * Status
       * @description The status of the Monitor.
       * @enum {string}
       */
      status: "enabled" | "disabled";
      /**
       * Updated At
       * @description Timestamp when the Monitor was last updated.
       */
      updatedAt: string;
      /**
       * Webset Id
       * @description The id of the Webset the Monitor belongs to.
       */
      websetId: string;
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
 * Type of EXA's EXA_CREATE_WEBSET tool input.
 */
type EXA_CREATE_WEBSET_INPUT = {
  /**
   * Enrichments
   * @description Enrichments to apply to Webset items.
   * @default null
   */
  enrichments: {
      /**
       * Description
       * @description Description of what to enrich for.
       * @default null
       */
      description: string | null;
      /**
       * Format
       * @description Format of the enrichment output, e.g., 'text'.
       * @default null
       * @constant
       */
      format: "text";
      /**
       * Instructions
       * @description Instructions for the enrichment process.
       * @default null
       */
      instructions: string | null;
      /**
       * Options
       * @description Additional options for enrichment.
       * @default null
       */
      options: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Title
       * @description Title of the enrichment task.
       */
      title: string;
  }[] | null;
  /**
   * External Id
   * @description External identifier to reference the Webset in your system.
   * @default null
   */
  externalId: string | null;
  /**
   * Import
   * @description Import data from existing Websets or Imports.
   * @default null
   */
  import: {
      /**
       * Id
       * @description Identifier of the import or webset to include.
       */
      id: string;
      /**
       * Source
       * @description The type of source to import ('import' or 'webset').
       * @enum {string}
       */
      source: "import" | "webset";
  }[] | null;
  /**
   * Metadata
   * @description Arbitrary key-value pairs to associate with this Webset.
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Search
   * @description Initial search configuration for the Webset.
   */
  search?: {
      /**
       * Count
       * @description Number of items the Webset will attempt to find.
       * @default 10
       */
      count: number | null;
      /**
       * Criteria
       * @description Custom criteria to evaluate items against.
       * @default null
       */
      criteria: {
          /**
           * Description
           * @description Description of the evaluation criterion.
           */
          description: string;
          /**
           * Success Rate
           * @description Success rate percentage for this criterion.
           * @default null
           */
          successRate: number | null;
      }[] | null;
      /**
       * Entity
       * @description Entity type for searches and imports.
       * @default null
       */
      entity: {
          /**
           * Type
           * @description Allowed entity types for the search or import.
           * @default company
           * @enum {string}
           */
          type: "company" | "person" | "article" | "research_paper" | "custom";
      } | null;
      /**
       * Exclude
       * @description Sources to exclude from search results.
       * @default null
       */
      exclude: {
          /**
           * Id
           * @description Identifier of the source to include or exclude.
           */
          id: string;
          /**
           * Source
           * @description The type of source ('import' or 'webset').
           * @enum {string}
           */
          source: "import" | "webset";
      }[] | null;
      /**
       * Query
       * @description Natural language search query describing what you are looking for.
       */
      query: string;
      /**
       * Recall
       * @description Whether to estimate total relevant results available for this search.
       * @default null
       */
      recall: boolean | null;
      /**
       * Scope
       * @description Limit the search to specific sources.
       * @default null
       */
      scope: {
          /**
           * Id
           * @description Identifier of the source to include or exclude.
           */
          id: string;
          /**
           * Source
           * @description The type of source ('import' or 'webset').
           * @enum {string}
           */
          source: "import" | "webset";
      }[] | null;
  };
};

/**
 * Type of EXA's EXA_CREATE_WEBSET tool output.
 */
type EXA_CREATE_WEBSET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp of the webset.
       */
      createdAt: string;
      /**
       * Enrichments
       * @description Enrichments in the webset.
       */
      enrichments: {
          /**
           * Created At
           * @description Creation timestamp of the enrichment.
           */
          createdAt: string;
          /**
           * Description
           * @description Description of the enrichment.
           * @default null
           */
          description: string | null;
          /**
           * Format
           * @description Format of enrichment output.
           */
          format: string;
          /**
           * Id
           * @description Unique identifier for the enrichment.
           */
          id: string;
          /**
           * Instructions
           * @description Instructions for the enrichment.
           * @default null
           */
          instructions: string | null;
          /**
           * Metadata
           * @description Metadata for the enrichment.
           */
          metadata: {
              [key: string]: unknown;
          };
          /**
           * Object
           * @description Object type.
           * @constant
           */
          object: "webset_enrichment";
          /**
           * Options
           * @description Available options for the enrichment.
           */
          options: {
              /**
               * Label
               * @description Label of the enrichment option.
               */
              label: string;
          }[];
          /**
           * Status
           * @description Status of the enrichment.
           */
          status: string;
          /**
           * Title
           * @description Title of the enrichment.
           */
          title: string;
          /**
           * Updated At
           * @description Last update timestamp of the enrichment.
           */
          updatedAt: string;
          /**
           * Webset Id
           * @description Identifier of the parent webset.
           */
          websetId: string;
      }[];
      /**
       * External Id
       * @description External identifier, if set.
       * @default null
       */
      externalId: string | null;
      /**
       * Id
       * @description Unique identifier for the webset.
       */
      id: string;
      /**
       * Imports
       * @description Imports performed on the webset.
       */
      imports: {
          /**
           * Count
           * @description Number of items in the import.
           * @default null
           */
          count: number | null;
          /**
           * Created At
           * @description Creation timestamp of the import.
           */
          createdAt: string;
          /**
           * Entity
           * @description Entity type of the import.
           */
          entity: {
              /**
               * Type
               * @description Allowed entity types for the search or import.
               * @default company
               * @enum {string}
               */
              type: "company" | "person" | "article" | "research_paper" | "custom";
          };
          /**
           * Failed At
           * @description Failure timestamp.
           * @default null
           */
          failedAt: string | null;
          /**
           * Failed Message
           * @description Failure message.
           * @default null
           */
          failedMessage: string | null;
          /**
           * Failed Reason
           * @description Reason for import failure.
           * @default null
           */
          failedReason: string | null;
          /**
           * Format
           * @description Format of the import.
           */
          format: string;
          /**
           * Id
           * @description Unique identifier for the import.
           */
          id: string;
          /**
           * Metadata
           * @description Metadata for the import.
           */
          metadata: {
              [key: string]: unknown;
          };
          /**
           * Object
           * @description Object type, always 'import'.
           * @constant
           */
          object: "import";
          /**
           * Status
           * @description Status of the import.
           */
          status: string;
          /**
           * Title
           * @description Title of the import.
           * @default null
           */
          title: string | null;
          /**
           * Updated At
           * @description Last update timestamp of the import.
           */
          updatedAt: string;
      }[];
      /**
       * Metadata
       * @description Metadata for the webset.
       */
      metadata: {
          [key: string]: unknown;
      };
      /**
       * Monitors
       * @description Monitors configured on the webset.
       */
      monitors: {
          /**
           * Behavior
           * @description Monitor behavior details.
           */
          behavior: {
              /**
               * Config
               * @description Monitor behavior configuration.
               */
              config: {
                  /**
                   * Behavior
                   * @description Behavior mode for monitor, e.g. 'append'.
                   */
                  behavior: string;
                  /**
                   * Count
                   * @description Number of items to find each run.
                   */
                  count: number;
                  /**
                   * Criteria
                   * @description Criteria to evaluate monitor results.
                   */
                  criteria: {
                      /**
                       * Description
                       * @description Description of the evaluation criterion.
                       */
                      description: string;
                      /**
                       * Success Rate
                       * @description Success rate percentage for this criterion.
                       * @default null
                       */
                      successRate: number | null;
                  }[];
                  /**
                   * Entity
                   * @description Entity type for the monitor.
                   */
                  entity: {
                      /**
                       * Type
                       * @description Allowed entity types for the search or import.
                       * @default company
                       * @enum {string}
                       */
                      type: "company" | "person" | "article" | "research_paper" | "custom";
                  };
                  /**
                   * Query
                   * @description Search query for monitor runs.
                   */
                  query: string;
              };
              /**
               * Type
               * @description Type of monitor behavior.
               * @constant
               */
              type: "search";
          };
          /**
           * Cadence
           * @description Schedule cadence of the monitor.
           */
          cadence: {
              /**
               * Cron
               * @description Cron expression for scheduling.
               */
              cron: string;
              /**
               * Timezone
               * @description Timezone for the schedule, e.g. 'Etc/UTC'.
               */
              timezone: string;
          };
          /**
           * Created At
           * @description Creation timestamp of the monitor.
           */
          createdAt: string;
          /**
           * Id
           * @description Unique identifier for the monitor.
           */
          id: string;
          /**
           * Last Run
           * @description Last run details.
           */
          lastRun: {
              /**
               * Canceled At
               * @description Cancelation timestamp.
               * @default null
               */
              canceledAt: string | null;
              /**
               * Completed At
               * @description Completion timestamp.
               * @default null
               */
              completedAt: string | null;
              /**
               * Created At
               * @description Creation timestamp.
               */
              createdAt: string;
              /**
               * Failed At
               * @description Failure timestamp.
               * @default null
               */
              failedAt: string | null;
              /**
               * Failed Reason
               * @description Reason for failure.
               * @default null
               */
              failedReason: string | null;
              /**
               * Id
               * @description Run identifier.
               */
              id: string;
              /**
               * Monitor Id
               * @description Identifier of the monitor.
               */
              monitorId: string;
              /**
               * Object
               * @description Object type.
               * @constant
               */
              object: "monitor_run";
              /**
               * Status
               * @description Status of the run.
               */
              status: string;
              /**
               * Type
               * @description Type of run.
               * @constant
               */
              type: "search";
              /**
               * Updated At
               * @description Last update timestamp.
               */
              updatedAt: string;
          };
          /**
           * Metadata
           * @description Metadata for the monitor.
           */
          metadata: {
              [key: string]: unknown;
          };
          /**
           * Next Run At
           * @description Next scheduled run timestamp.
           * @default null
           */
          nextRunAt: string | null;
          /**
           * Object
           * @description Object type.
           * @constant
           */
          object: "monitor";
          /**
           * Status
           * @description Status of the monitor.
           */
          status: string;
          /**
           * Updated At
           * @description Last update timestamp of the monitor.
           */
          updatedAt: string;
          /**
           * Webset Id
           * @description Identifier of the parent webset.
           */
          websetId: string;
      }[];
      /**
       * Object
       * @description Object type.
       * @constant
       */
      object: "webset";
      /**
       * Searches
       * @description Searches performed on the webset.
       */
      searches: {
          /**
           * Behavior
           * @description Behavior used for this search, e.g. 'override'.
           */
          behavior: string;
          /**
           * Canceled At
           * @description Timestamp when search was canceled.
           * @default null
           */
          canceledAt: string | null;
          /**
           * Canceled Reason
           * @description Reason search was canceled.
           * @default null
           */
          canceledReason: string | null;
          /**
           * Count
           * @description Number of items requested to find.
           */
          count: number;
          /**
           * Created At
           * @description Creation timestamp of the search.
           */
          createdAt: string;
          /**
           * Criteria
           * @description Evaluation criteria used.
           */
          criteria: {
              /**
               * Description
               * @description Description of the evaluation criterion.
               */
              description: string;
              /**
               * Success Rate
               * @description Success rate percentage for this criterion.
               * @default null
               */
              successRate: number | null;
          }[];
          /**
           * Entity
           * @description Entity type for the search.
           */
          entity: {
              /**
               * Type
               * @description Allowed entity types for the search or import.
               * @default company
               * @enum {string}
               */
              type: "company" | "person" | "article" | "research_paper" | "custom";
          };
          /**
           * Exclude
           * @description Sources excluded from this search.
           */
          exclude: {
              /**
               * Id
               * @description Identifier of the source to include or exclude.
               */
              id: string;
              /**
               * Source
               * @description The type of source ('import' or 'webset').
               * @enum {string}
               */
              source: "import" | "webset";
          }[];
          /**
           * Id
           * @description Unique identifier for the search.
           */
          id: string;
          /**
           * Metadata
           * @description Metadata for the search.
           */
          metadata: {
              [key: string]: unknown;
          };
          /**
           * Object
           * @description Object type, always 'webset_search'.
           * @constant
           */
          object: "webset_search";
          /**
           * Progress
           * @description Progress metrics for the search.
           */
          progress: {
              /**
               * Analyzed
               * @description Number of items analyzed so far.
               */
              analyzed: number;
              /**
               * Completion
               * @description Percent completion of the search.
               */
              completion: number;
              /**
               * Found
               * @description Number of items found so far.
               */
              found: number;
              /**
               * Time Left
               * @description Estimated time left in seconds.
               */
              timeLeft: number;
          };
          /**
           * Query
           * @description Search query used.
           */
          query: string;
          /**
           * Recall
           * @description Recall metrics for the search.
           */
          recall: {
              /**
               * Expected
               * @description Expected recall metrics.
               */
              expected: {
                  /**
                   * Bounds
                   * @description Confidence bounds for the estimate.
                   */
                  bounds: {
                      /**
                       * Max
                       * @description Maximum estimated count.
                       */
                      max: number;
                      /**
                       * Min
                       * @description Minimum estimated count.
                       */
                      min: number;
                  };
                  /**
                   * Confidence
                   * @description Confidence level of the estimate.
                   * @enum {string}
                   */
                  confidence: "low" | "medium" | "high";
                  /**
                   * Total
                   * @description Estimated total relevant results.
                   */
                  total: number;
              };
              /**
               * Reasoning
               * @description Reasoning behind the recall estimate.
               * @default null
               */
              reasoning: string | null;
          };
          /**
           * Scope
           * @description Sources specifically scoped for this search.
           */
          scope: {
              /**
               * Id
               * @description Identifier of the source to include or exclude.
               */
              id: string;
              /**
               * Source
               * @description The type of source ('import' or 'webset').
               * @enum {string}
               */
              source: "import" | "webset";
          }[];
          /**
           * Status
           * @description Status of the search.
           */
          status: string;
          /**
           * Updated At
           * @description Last update timestamp of the search.
           */
          updatedAt: string;
      }[];
      /**
       * Status
       * @description Status of the webset.
       * @enum {string}
       */
      status: "idle" | "pending" | "running" | "paused";
      /**
       * Streams
       * @description Streams associated with the webset.
       */
      streams: unknown[];
      /**
       * Title
       * @description Title of the webset, if set.
       * @default null
       */
      title: string | null;
      /**
       * Updated At
       * @description Last update timestamp of the webset.
       */
      updatedAt: string;
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
 * Type of EXA's EXA_DELETE_IMPORT tool input.
 */
type EXA_DELETE_IMPORT_INPUT = {
  /**
   * Id
   * @description The ID of the import to delete.
   */
  id?: string;
};

/**
 * Type of EXA's EXA_DELETE_IMPORT tool output.
 */
type EXA_DELETE_IMPORT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description The number of entities in the import.
       */
      count: number;
      /**
       * Created At
       * @description Timestamp when the import was created.
       */
      createdAt: string;
      /**
       * Entity
       * @description The type of entity the import contains.
       */
      entity: {
          /**
           * Type
           * @description The type of entity the import contains (e.g., 'company', 'person').
           */
          type: string;
      };
      /**
       * Failed At
       * @description Timestamp when the import failed, if applicable.
       * @default null
       */
      failedAt: string | null;
      /**
       * Failed Message
       * @description A human-readable message describing the import failure, if any.
       * @default null
       */
      failedMessage: string | null;
      /**
       * Failed Reason
       * @description The reason the import failed, if any (invalid_format, invalid_file_content, or missing_identifier).
       * @default null
       */
      failedReason: string | null;
      /**
       * Format
       * @description The format of the import (csv or webset).
       */
      format: string;
      /**
       * Id
       * @description The unique identifier for the Import.
       */
      id: string;
      /**
       * Metadata
       * @description Key-value pairs associated with this import object.
       */
      metadata: {
          [key: string]: unknown;
      };
      /**
       * Object
       * @description The type of object, always 'import'.
       */
      object: string;
      /**
       * Status
       * @description The status of the Import (pending, processing, completed, or failed).
       */
      status: string;
      /**
       * Title
       * @description The title of the import.
       */
      title: string;
      /**
       * Updated At
       * @description Timestamp when the import was last updated.
       */
      updatedAt: string;
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
 * Type of EXA's EXA_DELETE_WEBSET tool input.
 */
type EXA_DELETE_WEBSET_INPUT = {
  /**
   * Id
   * @description The id or externalId of the Webset to delete.
   */
  id?: string;
};

/**
 * Type of EXA's EXA_DELETE_WEBSET tool output.
 */
type EXA_DELETE_WEBSET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when Webset was created.
       */
      createdAt: string;
      /** Enrichments */
      enrichments: {
          /**
           * Created At
           * @description Timestamp when enrichment was created.
           */
          createdAt: string;
          /**
           * Description
           * @description Description given for the enrichment task.
           */
          description: string;
          /**
           * Format
           * @description The format of the enrichment response.
           */
          format: string;
          /**
           * Id
           * @description The unique identifier for the enrichment.
           */
          id: string;
          /**
           * Instructions
           * @description Instructions for the enrichment agent, if any.
           * @default null
           */
          instructions: string | null;
          /** Metadata */
          metadata: {
              [key: string]: unknown;
          };
          /**
           * Object
           * @description The object type, always 'webset_enrichment'.
           */
          object: string;
          /**
           * Options
           * @description Options for enrichment if format is 'options'.
           * @default null
           */
          options: {
              /**
               * Label
               * @description Option label.
               */
              label: string;
          }[] | null;
          /**
           * Status
           * @description The status of the enrichment.
           */
          status: string;
          /**
           * Title
           * @description Title of the enrichment, if available.
           * @default null
           */
          title: string | null;
          /**
           * Updated At
           * @description Timestamp when enrichment was last updated.
           */
          updatedAt: string;
          /**
           * Webset Id
           * @description The Webset ID this enrichment belongs to.
           */
          websetId: string;
      }[];
      /**
       * External Id
       * @description External identifier for the Webset, if any.
       * @default null
       */
      externalId: string | null;
      /**
       * Id
       * @description The unique identifier for the Webset.
       */
      id: string;
      /** Imports */
      imports: {
          /**
           * Count
           * @description Number of entities imported.
           */
          count: number;
          /**
           * Created At
           * @description Timestamp when the import was created.
           */
          createdAt: string;
          /**
           * Entity
           * @description Represents the entity type used in searches or imports.
           */
          entity: {
              /**
               * Type
               * @description The type of entity (e.g., 'company', 'person').
               */
              type: string;
          };
          /**
           * Failed At
           * @description Timestamp when the import failed, if applicable.
           * @default null
           */
          failedAt: string | null;
          /**
           * Failed Message
           * @description Human-readable message about import failure, if any.
           * @default null
           */
          failedMessage: string | null;
          /**
           * Failed Reason
           * @description Reason for failure, if import failed.
           * @default null
           */
          failedReason: string | null;
          /**
           * Format
           * @description The format of the import (e.g., 'csv', 'webset').
           */
          format: string;
          /**
           * Id
           * @description The unique identifier for the import.
           */
          id: string;
          /** Metadata */
          metadata: {
              [key: string]: unknown;
          };
          /**
           * Object
           * @description The object type, always 'import'.
           */
          object: string;
          /**
           * Status
           * @description The status of the import.
           */
          status: string;
          /**
           * Title
           * @description Title given to the import.
           */
          title: string;
          /**
           * Updated At
           * @description Timestamp when the import was last updated.
           */
          updatedAt: string;
      }[];
      /** Metadata */
      metadata: {
          [key: string]: unknown;
      };
      /** Monitors */
      monitors: {
          /**
           * Behavior
           * @description Behavior settings for a monitor.
           */
          behavior: {
              /**
               * Config
               * @description Configuration for monitor behavior.
               */
              config: {
                  /**
                   * Behavior
                   * @description Behavior when adding to the Webset.
                   * @enum {string}
                   */
                  behavior: "override" | "append";
                  /**
                   * Count
                   * @description Number of results to fetch on each run.
                   */
                  count: number;
                  /** Criteria */
                  criteria: {
                      /**
                       * Description
                       * @description The description of the criterion.
                       */
                      description: string;
                      /**
                       * Success Rate
                       * @description The success rate percentage for this criterion, if available.
                       * @default null
                       */
                      successRate: number | null;
                  }[];
                  /**
                   * Entity
                   * @description Represents the entity type used in searches or imports.
                   */
                  entity: {
                      /**
                       * Type
                       * @description The type of entity (e.g., 'company', 'person').
                       */
                      type: string;
                  };
                  /**
                   * Query
                   * @description Search query for the monitor.
                   */
                  query: string;
              };
              /**
               * Type
               * @description Behavior type, always 'search'.
               * @constant
               */
              type: "search";
          };
          /**
           * Cadence
           * @description Cadence configuration for a monitor.
           */
          cadence: {
              /**
               * Cron
               * @description Cron schedule string.
               */
              cron: string;
              /**
               * Timezone
               * @description Timezone for the schedule.
               */
              timezone: string;
          };
          /**
           * Created At
           * @description Timestamp when monitor was created.
           */
          createdAt: string;
          /**
           * Id
           * @description The unique identifier for the monitor.
           */
          id: string;
          /**
           * Last Run
           * @description Represents the last run details of a monitor.
           */
          lastRun: {
              /**
               * Canceled At
               * @description Timestamp when the run was canceled, if applicable.
               * @default null
               */
              canceledAt: string | null;
              /**
               * Completed At
               * @description Timestamp when the run completed, if applicable.
               * @default null
               */
              completedAt: string | null;
              /**
               * Created At
               * @description Timestamp when the run was created.
               */
              createdAt: string;
              /**
               * Failed At
               * @description Timestamp when the run failed, if applicable.
               * @default null
               */
              failedAt: string | null;
              /**
               * Failed Reason
               * @description Reason for failure, if any.
               * @default null
               */
              failedReason: string | null;
              /**
               * Id
               * @description The unique identifier for the monitor run.
               */
              id: string;
              /**
               * Monitor Id
               * @description The Monitor ID this run belongs to.
               */
              monitorId: string;
              /**
               * Object
               * @description The object type, always 'monitor_run'.
               */
              object: string;
              /**
               * Status
               * @description Status of the monitor run.
               */
              status: string;
              /**
               * Type
               * @description Run type, always 'search'.
               * @constant
               */
              type: "search";
              /**
               * Updated At
               * @description Timestamp when the run was last updated.
               */
              updatedAt: string;
          };
          /** Metadata */
          metadata: {
              [key: string]: unknown;
          };
          /**
           * Next Run At
           * @description Timestamp for next scheduled run.
           * @default null
           */
          nextRunAt: string | null;
          /**
           * Object
           * @description The object type, always 'monitor'.
           */
          object: string;
          /**
           * Status
           * @description The status of the monitor.
           */
          status: string;
          /**
           * Updated At
           * @description Timestamp when monitor was last updated.
           */
          updatedAt: string;
          /**
           * Webset Id
           * @description The associated Webset ID.
           */
          websetId: string;
      }[];
      /**
       * Object
       * @description Object type, always 'webset'.
       * @constant
       */
      object: "webset";
      /** Searches */
      searches: {
          /**
           * Behavior
           * @description Behavior when adding to the Webset.
           * @enum {string}
           */
          behavior: "override" | "append";
          /**
           * Canceled At
           * @description Timestamp when the search was canceled, if applicable.
           * @default null
           */
          canceledAt: string | null;
          /**
           * Canceled Reason
           * @description Reason the search was canceled, if applicable.
           * @default null
           * @enum {string|null}
           */
          canceledReason: "webset_deleted" | "webset_canceled" | null;
          /**
           * Count
           * @description Number of results the search attempts to find.
           */
          count: number;
          /**
           * Created At
           * @description Timestamp when the search was created.
           */
          createdAt: string;
          /** Criteria */
          criteria: {
              /**
               * Description
               * @description The description of the criterion.
               */
              description: string;
              /**
               * Success Rate
               * @description The success rate percentage for this criterion, if available.
               * @default null
               */
              successRate: number | null;
          }[];
          /**
           * Entity
           * @description Represents the entity type used in searches or imports.
           */
          entity: {
              /**
               * Type
               * @description The type of entity (e.g., 'company', 'person').
               */
              type: string;
          };
          /** Exclude */
          exclude: {
              /**
               * Id
               * @description The ID of the source to exclude or scope.
               */
              id: string;
              /**
               * Source
               * @description The source type (e.g., 'import', 'webset').
               */
              source: string;
          }[];
          /**
           * Id
           * @description The unique identifier for the search.
           */
          id: string;
          /** Metadata */
          metadata: {
              [key: string]: unknown;
          };
          /**
           * Object
           * @description The object type, always 'webset_search'.
           */
          object: string;
          /**
           * Progress
           * @description Progress metrics for a Webset search.
           */
          progress: {
              /**
               * Analyzed
               * @description Number of items analyzed so far.
               */
              analyzed: number;
              /**
               * Completion
               * @description Percentage of completion.
               */
              completion: number;
              /**
               * Found
               * @description Number of items found so far.
               */
              found: number;
              /**
               * Time Left
               * @description Estimated time left in seconds.
               */
              timeLeft: number;
          };
          /**
           * Query
           * @description The query used for the search.
           */
          query: string;
          /**
           * Recall
           * @description Recall metrics for a Webset search.
           * @default null
           */
          recall: {
              /**
               * Expected
               * @description Expected recall metrics.
               */
              expected: {
                  /**
                   * Bounds
                   * @description Bounds for recall metrics.
                   */
                  bounds: {
                      /**
                       * Max
                       * @description Maximum expected recall.
                       */
                      max: number;
                      /**
                       * Min
                       * @description Minimum expected recall.
                       */
                      min: number;
                  };
                  /**
                   * Confidence
                   * @description Confidence level (e.g., 'high', 'medium').
                   */
                  confidence: string;
                  /**
                   * Total
                   * @description Total expected items.
                   */
                  total: number;
              };
              /**
               * Reasoning
               * @description Reasoning behind the recall estimate.
               * @default null
               */
              reasoning: string | null;
          } | null;
          /** Scope */
          scope: {
              /**
               * Id
               * @description The ID of the source to exclude or scope.
               */
              id: string;
              /**
               * Source
               * @description The source type (e.g., 'import', 'webset').
               */
              source: string;
          }[];
          /**
           * Status
           * @description The status of the search.
           */
          status: string;
          /**
           * Updated At
           * @description Timestamp when the search was last updated.
           */
          updatedAt: string;
      }[];
      /**
       * Status
       * @description Status of the Webset.
       * @enum {string}
       */
      status: "idle" | "pending" | "running" | "paused";
      /** Streams */
      streams: unknown[];
      /**
       * Title
       * @description Title of the Webset, if any.
       * @default null
       */
      title: string | null;
      /**
       * Updated At
       * @description Timestamp when Webset was last updated.
       */
      updatedAt: string;
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
 * Type of EXA's EXA_FIND_SIMILAR tool input.
 */
type EXA_FIND_SIMILAR_INPUT = {
  /**
   * Highlights
   * @description Set to true to request relevant text snippets (highlights) from each similar page. Defaults to false.
   * @default false
   */
  highlights: boolean | null;
  /**
   * Num Results
   * @description The desired number of similar web pages to return. Must be an integer between 1 and 100, inclusive. Defaults to 10.
   * @default 10
   */
  num_results: number | null;
  /**
   * Summary
   * @description Set to true to request a generated summary for each similar page. Defaults to false.
   * @default false
   */
  summary: boolean | null;
  /**
   * Text
   * @description Set to true to request the full text content of each similar page. Defaults to false.
   * @default false
   */
  text: boolean | null;
  /**
   * Url
   * @description The URL for which to find semantically similar web pages. This must be a valid and accessible web address.
   */
  url?: string;
};

/**
 * Type of EXA's EXA_FIND_SIMILAR tool output.
 */
type EXA_FIND_SIMILAR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cost Dollars
       * @description A detailed breakdown of the monetary costs associated with this request.
       */
      costDollars: {
          /**
           * Break Down
           * @description A detailed breakdown of costs, categorizing them by the type of operation performed.
           * @default null
           */
          breakDown: {
              /**
               * CostBreakdown
               * @description A detailed breakdown of costs by specific operation type.
               * @default null
               */
              breakdown: {
                  /**
                   * Content Highlight
                   * @description Cost attributed to generating highlights for this request.
                   * @default null
                   */
                  contentHighlight: number | null;
                  /**
                   * Content Summary
                   * @description Cost attributed to generating summaries for this request.
                   * @default null
                   */
                  contentSummary: number | null;
                  /**
                   * Content Text
                   * @description Cost attributed to retrieving full text content for this request.
                   * @default null
                   */
                  contentText: number | null;
                  /**
                   * Keyword Search
                   * @description Cost attributed to keyword search operations for this request.
                   * @default null
                   */
                  keywordSearch: number | null;
                  /**
                   * Neural Search
                   * @description Cost attributed to neural search operations for this request.
                   * @default null
                   */
                  neuralSearch: number | null;
              } | null;
              /**
               * Contents
               * @description Total cost related to content retrieval operations (e.g., text, highlights, summary).
               * @default null
               */
              contents: number | null;
              /**
               * Search
               * @description Total cost related to search operations (e.g., keyword or neural).
               * @default null
               */
              search: number | null;
          }[] | null;
          /**
           * PerPagePrices
           * @description Standard pricing details for various content retrieval operations on a per-page basis.
           * @default null
           */
          perPagePrices: {
              /**
               * Content Highlight
               * @description Standard price per page for generating highlights.
               * @default null
               */
              contentHighlight: number | null;
              /**
               * Content Summary
               * @description Standard price per page for generating summaries.
               * @default null
               */
              contentSummary: number | null;
              /**
               * Content Text
               * @description Standard price per page for retrieving full text content.
               * @default null
               */
              contentText: number | null;
          } | null;
          /**
           * PerRequestPrices
           * @description Standard pricing details for various search operations on a per-request basis.
           * @default null
           */
          perRequestPrices: {
              /**
               * Keyword Search 100 Plus Results
               * @description Standard price for a keyword search operation returning 100+ results.
               * @default null
               */
              keywordSearch_100_plus_results: number | null;
              /**
               * Keyword Search 1 100 Results
               * @description Standard price for a keyword search operation returning 1-100 results.
               * @default null
               */
              keywordSearch_1_100_results: number | null;
              /**
               * Neural Search 100 Plus Results
               * @description Standard price for a neural search operation returning 100+ results.
               * @default null
               */
              neuralSearch_100_plus_results: number | null;
              /**
               * Neural Search 1 25 Results
               * @description Standard price for a neural search operation returning 1-25 results.
               * @default null
               */
              neuralSearch_1_25_results: number | null;
              /**
               * Neural Search 26 100 Results
               * @description Standard price for a neural search operation returning 26-100 results.
               * @default null
               */
              neuralSearch_26_100_results: number | null;
          } | null;
          /**
           * Total
           * @description The total monetary cost for the entire request, in dollars.
           */
          total: number;
      };
      /**
       * Request Id
       * @description A unique identifier assigned to this specific API request.
       */
      requestId: string;
      /**
       * Results
       * @description A list of `Result` objects, each detailing a web page found to be similar to the input URL. Contains metadata, similarity scores, and any additionally requested content (text, highlights, summaries).
       */
      results: {
          /**
           * Author
           * @description The author of the content, if available.
           * @default null
           */
          author: string | null;
          /**
           * ResultExtras
           * @description Additional information or links extracted from the search result.
           * @default null
           */
          extras: {
              /**
               * Links
               * @description A list of URLs for web links found within the content of the search result page.
               * @default null
               */
              links: string[] | null;
          } | null;
          /**
           * Favicon
           * @description The URL of the favicon for the search result's domain, if available.
           * @default null
           */
          favicon: string | null;
          /**
           * Highlight Scores
           * @description A list of cosine similarity scores, corresponding to each snippet in the `highlights` array, indicating the relevance of each highlight.
           * @default null
           */
          highlightScores: number[] | null;
          /**
           * Highlights
           * @description A list of relevant text snippets extracted from the search result's content. Populated if `highlights` was true in the request.
           * @default null
           */
          highlights: string[] | null;
          /**
           * Id
           * @description A unique temporary identifier for this search result document.
           * @default null
           */
          id: string | null;
          /**
           * Image
           * @description The URL of an image associated with the search result, if available.
           * @default null
           */
          image: string | null;
          /**
           * Published Date
           * @description An estimated creation date of the content, typically parsed from HTML.
           * @default null
           */
          publishedDate: string | null;
          /**
           * Score
           * @description A numerical score from 0 to 1 representing the semantic similarity between the input URL and this search result. Higher scores indicate greater similarity.
           * @default null
           */
          score: number | null;
          /**
           * Subpages
           * @description An array of dictionaries, where each dictionary represents a subpage related to the main search result. The structure of these dictionaries may vary.
           * @default null
           */
          subpages: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Summary
           * @description A generated summary of the search result page. Populated if `summary` was true in the request.
           * @default null
           */
          summary: string | null;
          /**
           * Text
           * @description The full text content of the search result page. Populated if `text` was true in the request.
           * @default null
           */
          text: string | null;
          /**
           * Title
           * @description The title of the search result.
           * @default null
           */
          title: string | null;
          /**
           * Url
           * Format: uri
           * @description The URL of the search result.
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
 * Type of EXA's EXA_GET_CONTENTS_ACTION tool input.
 */
type EXA_GET_CONTENTS_ACTION_INPUT = {
  /**
   * Highlights
   * @description Controls highlight extraction. Accepts a boolean or `HighlightOptions`. If `True`, extracts AI highlights (default settings); if `False`, no highlights. Use `HighlightOptions` for custom settings (e.g., `num_sentences`, `query`). Default is `None` (no highlights extracted).
   * @default null
   */
  highlights: boolean | null;
  /**
   * Ids
   * @description A list of document IDs (strings obtained from Exa search results) or fully qualified URLs (e.g., 'https://example.com/article') for which to retrieve content. At least one ID or URL must be provided.
   */
  ids?: string[];
  /**
   * Text
   * @description Controls text extraction. Accepts a boolean or a `TextOptions` object. If `True` (the default), extracts full-page text using default settings. If `False`, no text is extracted. Provide a `TextOptions` object to customize text extraction (e.g., `max_characters`, `include_html_tags`).
   * @default true
   */
  text: boolean | null;
};

/**
 * Type of EXA's EXA_GET_CONTENTS_ACTION tool output.
 */
type EXA_GET_CONTENTS_ACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cost Dollars
       * @description A dictionary providing details about the monetary cost incurred for processing the API request. Structure may vary.
       */
      cost_dollars: {
          [key: string]: unknown;
      };
      /**
       * Request Id
       * @description A unique string identifier assigned by the Exa service to this specific API request instance, useful for logging and support.
       */
      request_id: string;
      /**
       * Results
       * @description A list of ContentResultItem objects, one for each successfully processed document ID or URL from the request. Each item provides detailed content and metadata for a document.
       */
      results: {
          /**
           * Author
           * @description The author of the document, if available.
           * @default null
           */
          author: string | null;
          /**
           * Highlight Scores
           * @description Relevance scores for each highlight snippet, if requested.
           * @default null
           */
          highlightScores: number[] | null;
          /**
           * Highlights
           * @description A list of AI-generated highlight snippets from the document content, if requested.
           * @default null
           */
          highlights: string[] | null;
          /**
           * Id
           * @description The unique ID of the document or the URL provided in the request.
           */
          id: string;
          /**
           * Published Date
           * @description The publication date of the document (e.g., YYYY-MM-DD).
           * @default null
           */
          publishedDate: string | null;
          /**
           * Text
           * @description The extracted text content of the document, if requested.
           * @default null
           */
          text: string | null;
          /**
           * Title
           * @description The title of the document.
           * @default null
           */
          title: string | null;
          /**
           * Url
           * Format: uri
           * @description The canonical URL of the document, if available.
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
 * Type of EXA's EXA_GET_EVENT tool input.
 */
type EXA_GET_EVENT_INPUT = {
  /**
   * Id
   * @description The unique identifier of the event to retrieve.
   */
  id?: string;
};

/**
 * Type of EXA's EXA_GET_EVENT tool output.
 */
type EXA_GET_EVENT_OUTPUT = {
  /**
   * Data
   * @description Detailed payload of the event.
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Id
   * @description The unique identifier for the event.
   */
  id?: string;
  /**
   * Object
   * @description Type of the object, always 'event'.
   */
  object?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of EXA's EXA_LIST_EVENTS tool input.
 */
type EXA_LIST_EVENTS_INPUT = {
  /**
   * Created After
   * @description Filter events created at or after this UTC timestamp (inclusive). Must be a valid ISO 8601 datetime string.
   * @default null
   */
  createdAfter: string | null;
  /**
   * Created Before
   * @description Filter events created at or before this UTC timestamp (inclusive). Must be a valid ISO 8601 datetime string.
   * @default null
   */
  createdBefore: string | null;
  /**
   * Cursor
   * @description The cursor to paginate through the results.
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description The number of results to return (1–200, default 25).
   * @default 25
   */
  limit: number | null;
  /**
   * Types
   * @description Filter events by one or more event types.
   * @default null
   */
  types: string[] | null;
};

/**
 * Type of EXA's EXA_LIST_EVENTS tool output.
 */
type EXA_LIST_EVENTS_OUTPUT = {
  /**
   * Data
   * @description The list of event records.
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the event was created.
       */
      createdAt: string;
      /**
       * Data
       * @description Detailed payload of the event.
       */
      data: {
          [key: string]: unknown;
      };
      /**
       * Object
       * @description Type of the object, always 'event'.
       */
      object: string;
      /**
       * Type
       * @description Type of the event, e.g., 'webset.created'.
       */
      type: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Has More
   * @description Whether there are more results to paginate through.
   */
  hasMore?: boolean;
  /**
   * Next Cursor
   * @description The cursor for the next page of results, if any.
   * @default null
   */
  nextCursor: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of EXA's EXA_LIST_IMPORTS tool input.
 */
type EXA_LIST_IMPORTS_INPUT = {
  /**
   * Cursor
   * @description The cursor to paginate through the results.
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description The number of results to return (1–200, default 25).
   * @default 25
   */
  limit: number | null;
};

/**
 * Type of EXA's EXA_LIST_IMPORTS tool output.
 */
type EXA_LIST_IMPORTS_OUTPUT = {
  /**
   * Data
   * @description The list of import records.
   */
  data?: {
      /**
       * Count
       * @description The number of entities in the import.
       */
      count: number;
      /**
       * Created At
       * @description When the import was created.
       */
      createdAt: string;
      /**
       * Entity
       * @description Entity information for this import.
       */
      entity: {
          /**
           * Type
           * @description The type of entity the import contains.
           * @enum {string}
           */
          type: "company" | "person" | "article" | "research_paper" | "custom";
      };
      /**
       * Failed At
       * @description When the import failed, if applicable.
       * @default null
       */
      failedAt: string | null;
      /**
       * Failed Message
       * @description A human-readable message for the import failure, if any.
       * @default null
       */
      failedMessage: string | null;
      /**
       * Failed Reason
       * @description The reason the import failed, if status is failed.
       * @default null
       * @enum {string|null}
       */
      failedReason: "invalid_format" | "invalid_file_content" | "missing_identifier" | null;
      /**
       * Format
       * @description The format of the import.
       * @enum {string}
       */
      format: "csv" | "webset";
      /**
       * Id
       * @description The unique identifier for the import.
       */
      id: string;
      /**
       * Metadata
       * @description Key-value pairs associated with this import.
       */
      metadata: {
          [key: string]: unknown;
      };
      /**
       * Object
       * @description The object type.
       * @constant
       */
      object: "import";
      /**
       * Status
       * @description The status of the import.
       * @enum {string}
       */
      status: "pending" | "processing" | "completed" | "failed";
      /**
       * Title
       * @description The title of the import.
       */
      title: string;
      /**
       * Updated At
       * @description When the import was last updated.
       */
      updatedAt: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Has More
   * @description Whether there are more results to paginate through.
   */
  hasMore?: boolean;
  /**
   * Next Cursor
   * @description The cursor for the next page of results, if any.
   * @default null
   */
  nextCursor: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of EXA's EXA_LIST_WEBHOOKS tool input.
 */
type EXA_LIST_WEBHOOKS_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor returned by a previous call. Must be at least 1 character if provided.
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Number of results to return per page.
   * @default 25
   */
  limit: number | null;
};

/**
 * Type of EXA's EXA_LIST_WEBHOOKS tool output.
 */
type EXA_LIST_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Array of webhook objects.
   */
  data?: {
      /**
       * Created At
       * @description ISO-8601 timestamp when the webhook was created.
       */
      createdAt: string;
      /**
       * Events
       * @description List of event names this webhook is subscribed to.
       */
      events: string[];
      /**
       * Id
       * @description Unique identifier for the webhook.
       */
      id: string;
      /**
       * Metadata
       * @description Arbitrary metadata object.
       */
      metadata?: {
          [key: string]: unknown;
      };
      /**
       * Object
       * @description Type of this object, always 'webhook'.
       * @constant
       */
      object: "webhook";
      /**
       * Secret
       * @description Secret used to sign webhook payloads.
       */
      secret: string;
      /**
       * Status
       * @description Current status of the webhook (e.g., 'active').
       */
      status: string;
      /**
       * Updated At
       * @description ISO-8601 timestamp when the webhook was last updated.
       */
      updatedAt: string;
      /**
       * Url
       * @description The target URL that will receive webhook POSTs.
       */
      url: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Has More
   * @description Whether more results are available.
   */
  hasMore?: boolean;
  /**
   * Next Cursor
   * @description Cursor to use for the next page of results, if hasMore is true.
   * @default null
   */
  nextCursor: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of EXA's EXA_SEARCH tool input.
 */
type EXA_SEARCH_INPUT = {
  /**
   * Category
   * @description A specific data category to focus the search on (e.g., 'company', 'research paper').
   * @default null
   */
  category: string | null;
  /**
   * End Crawl Date
   * @description Filters results to include only those crawled by Exa before this ISO 8601 date.
   * @default null
   */
  endCrawlDate: string | null;
  /**
   * End Published Date
   * @description Filters results to include only those published before this ISO 8601 date.
   * @default null
   */
  endPublishedDate: string | null;
  /**
   * Exclude Domains
   * @description A list of domain names to specifically exclude from the search results.
   * @default null
   */
  excludeDomains: string[] | null;
  /**
   * Exclude Text
   * @description A list containing one string (max 5 words) that must not be present in the webpage text.
   * @default null
   */
  excludeText: string[] | null;
  /**
   * Include Domains
   * @description A list of domain names to specifically include in the search results.
   * @default null
   */
  includeDomains: string[] | null;
  /**
   * Include Text
   * @description A list containing one string (max 5 words) that must be present in the webpage text.
   * @default null
   */
  includeText: string[] | null;
  /**
   * Num Results
   * @description Desired number of search results.
   * @default 10
   */
  numResults: number | null;
  /**
   * Query
   * @description The search query string.
   */
  query?: string;
  /**
   * Start Crawl Date
   * @description Filters results to include only those crawled by Exa after this ISO 8601 date.
   * @default null
   */
  startCrawlDate: string | null;
  /**
   * Start Published Date
   * @description Filters results to include only those published after this ISO 8601 date.
   * @default null
   */
  startPublishedDate: string | null;
  /**
   * Type
   * @description Type of search: 'keyword' for Google-like SERP, 'neural' for embeddings-based, or 'auto' for Exa to decide.
   * @default auto
   */
  type: string | null;
  /**
   * Use Autoprompt
   * @description If true, Exa converts the query to an Exa-optimized prompt for potentially better results.
   * @default true
   */
  useAutoprompt: boolean | null;
};

/**
 * Type of EXA's EXA_SEARCH tool output.
 */
type EXA_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Auto Date
       * @description Timestamp indicating when the autoprompt was generated, if applicable.
       * @default null
       */
      autoDate: string | null;
      /**
       * Autoprompt String
       * @description If `useAutoprompt` was true, this field contains the Exa-optimized prompt that was generated and used for the search.
       * @default null
       */
      autopromptString: string | null;
      /**
       * Request Id
       * @description A unique identifier for this specific search request.
       */
      requestId: string;
      /**
       * Resolved Search Type
       * @description The actual search type ('keyword', 'neural', or 'auto') that Exa used to fulfill this request.
       * @default null
       */
      resolvedSearchType: string | null;
      /**
       * Results
       * @description A list of `SearchResult` objects, each representing an individual item found by the search.
       */
      results: {
          /**
           * Author
           * @description Author of the search result (if available).
           * @default null
           */
          author: string | null;
          /**
           * Extras
           * @description Dictionary containing any additional, non-standard information related to the search result.
           * @default null
           */
          extras: {
              [key: string]: unknown;
          } | null;
          /**
           * Favicon
           * @description URL of the favicon for the website of the search result (if available).
           * @default null
           */
          favicon: string | null;
          /**
           * Highlight Scores
           * @description List of relevance scores for the corresponding highlighted snippets.
           * @default null
           */
          highlightScores: number[] | null;
          /**
           * Highlights
           * @description List of highlighted text snippets from the search result that match the query.
           * @default null
           */
          highlights: string[] | null;
          /**
           * Id
           * @description Unique identifier for the search result.
           * @default null
           */
          id: string | null;
          /**
           * Image
           * @description URL of an image associated with the search result (if available).
           * @default null
           */
          image: string | null;
          /**
           * Published Date
           * @description Publication date of the search result (if available).
           * @default null
           */
          publishedDate: string | null;
          /**
           * Score
           * @description Relevance score of the search result, indicating how well it matches the query.
           * @default null
           */
          score: number | null;
          /**
           * Subpages
           * @description List of subpages or related links found within the search result (if available).
           * @default null
           */
          subpages: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Summary
           * @description A concise summary of the search result's content (if available).
           * @default null
           */
          summary: string | null;
          /**
           * Text
           * @description Extracted text content from the search result webpage (if available).
           * @default null
           */
          text: string | null;
          /**
           * Title
           * @description Title of the search result.
           * @default null
           */
          title: string | null;
          /**
           * Url
           * Format: uri
           * @description URL of the search result.
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
 * Type of EXA's EXA_UPDATE_IMPORT tool input.
 */
type EXA_UPDATE_IMPORT_INPUT = {
  /**
   * Id
   * @description The ID of the import to update.
   */
  id?: string;
  /**
   * Metadata
   * @description Key-value pairs to attach to the import. Leave null if unchanged.
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Title
   * @description New title for the import. Leave null if unchanged.
   * @default null
   */
  title: string | null;
};

/**
 * Type of EXA's EXA_UPDATE_IMPORT tool output.
 */
type EXA_UPDATE_IMPORT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description The number of entities in the import.
       */
      count: number;
      /**
       * Created At
       * @description Timestamp when the import was created.
       */
      createdAt: string;
      /**
       * Entity
       * @description The entity information for the import.
       */
      entity: {
          /**
           * Type
           * @description The type of entity the import contains (e.g., 'company').
           */
          type: string;
      };
      /**
       * Failed At
       * @description Timestamp when the import failed, if applicable.
       * @default null
       */
      failedAt: string | null;
      /**
       * Failed Message
       * @description A message describing why the import failed, if any.
       * @default null
       */
      failedMessage: string | null;
      /**
       * Failed Reason
       * @description Reason the import failed, if applicable (invalid_format, missing_identifier, etc).
       * @default null
       */
      failedReason: string | null;
      /**
       * Format
       * @description The format of the import (csv or webset).
       */
      format: string;
      /**
       * Id
       * @description The unique identifier for the import.
       */
      id: string;
      /**
       * Metadata
       * @description Key-value pairs associated with this import object.
       */
      metadata: {
          [key: string]: unknown;
      };
      /**
       * Object
       * @description The type of object, always 'import'.
       */
      object: string;
      /**
       * Status
       * @description The status of the import (pending, processing, completed, or failed).
       */
      status: string;
      /**
       * Title
       * @description The title of the import.
       * @default null
       */
      title: string | null;
      /**
       * Updated At
       * @description Timestamp when the import was last updated.
       */
      updatedAt: string;
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
 * Type map of all available tool input types for toolkit "EXA".
 */
export type EXA_TOOL_INPUTS = {
  ANSWER: EXA_ANSWER_INPUT
  CREATE_IMPORT: EXA_CREATE_IMPORT_INPUT
  CREATE_MONITOR: EXA_CREATE_MONITOR_INPUT
  CREATE_WEBSET: EXA_CREATE_WEBSET_INPUT
  DELETE_IMPORT: EXA_DELETE_IMPORT_INPUT
  DELETE_WEBSET: EXA_DELETE_WEBSET_INPUT
  FIND_SIMILAR: EXA_FIND_SIMILAR_INPUT
  GET_CONTENTS_ACTION: EXA_GET_CONTENTS_ACTION_INPUT
  GET_EVENT: EXA_GET_EVENT_INPUT
  LIST_EVENTS: EXA_LIST_EVENTS_INPUT
  LIST_IMPORTS: EXA_LIST_IMPORTS_INPUT
  LIST_WEBHOOKS: EXA_LIST_WEBHOOKS_INPUT
  SEARCH: EXA_SEARCH_INPUT
  UPDATE_IMPORT: EXA_UPDATE_IMPORT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "EXA".
 */
export type EXA_TOOL_OUTPUTS = {
  ANSWER: EXA_ANSWER_OUTPUT
  CREATE_IMPORT: EXA_CREATE_IMPORT_OUTPUT
  CREATE_MONITOR: EXA_CREATE_MONITOR_OUTPUT
  CREATE_WEBSET: EXA_CREATE_WEBSET_OUTPUT
  DELETE_IMPORT: EXA_DELETE_IMPORT_OUTPUT
  DELETE_WEBSET: EXA_DELETE_WEBSET_OUTPUT
  FIND_SIMILAR: EXA_FIND_SIMILAR_OUTPUT
  GET_CONTENTS_ACTION: EXA_GET_CONTENTS_ACTION_OUTPUT
  GET_EVENT: EXA_GET_EVENT_OUTPUT
  LIST_EVENTS: EXA_LIST_EVENTS_OUTPUT
  LIST_IMPORTS: EXA_LIST_IMPORTS_OUTPUT
  LIST_WEBHOOKS: EXA_LIST_WEBHOOKS_OUTPUT
  SEARCH: EXA_SEARCH_OUTPUT
  UPDATE_IMPORT: EXA_UPDATE_IMPORT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's EXA toolkit.
 */
export const EXA = {
  slug: "exa",
  tools: {
    /**
     * Generates a direct, citation-backed answer to a clear natural language question or topic using exa's search, adept at both specific answers and detailed summaries for open-ended queries.
     */
    ANSWER: "EXA_ANSWER",
    /**
     * Tool to create a new import to upload data into a webset. use when you need to initialize an import before uploading the data file.
     */
    CREATE_IMPORT: "EXA_CREATE_IMPORT",
    /**
     * Tool to create a new monitor. use when you need to schedule automated updates for a webset without manual runs.
     */
    CREATE_MONITOR: "EXA_CREATE_MONITOR",
    /**
     * Tool to create a new webset with search, import, and enrichment setup. use when you need to configure and seed a webset in one call.
     */
    CREATE_WEBSET: "EXA_CREATE_WEBSET",
    /**
     * Tool to delete an existing import. use when you need to permanently remove an import by its id.
     */
    DELETE_IMPORT: "EXA_DELETE_IMPORT",
    /**
     * Tool to delete a webset. use after confirming the webset id to permanently remove the webset and all its items.
     */
    DELETE_WEBSET: "EXA_DELETE_WEBSET",
    /**
     * Finds web pages semantically similar to a given url using embeddings-based search, optionally retrieving full text, highlights, or summaries for results.
     */
    FIND_SIMILAR: "EXA_FIND_SIMILAR",
    /**
     * Retrieves configurable text and highlights from a list of exa document ids or publicly accessible urls.
     */
    GET_CONTENTS_ACTION: "EXA_GET_CONTENTS_ACTION",
    /**
     * Tool to get details of a specific event by its id. use when you have an event id and need its full details.
     */
    GET_EVENT: "EXA_GET_EVENT",
    /**
     * Tool to list all events that have occurred in the system. use when you need to paginate through the event history.
     */
    LIST_EVENTS: "EXA_LIST_EVENTS",
    /**
     * Tool to list all imports for the webset. use when you need to paginate through and monitor import jobs.
     */
    LIST_IMPORTS: "EXA_LIST_IMPORTS",
    /**
     * Tool to list all webhooks for websets. use when you need to view existing webhooks and paginate through results.
     */
    LIST_WEBHOOKS: "EXA_LIST_WEBHOOKS",
    /**
     * Performs a web search using the exa engine, useful for queries requiring advanced filtering, specific content categories, or ai-optimized prompting.
     */
    SEARCH: "EXA_SEARCH",
    /**
     * Tool to update an import configuration by id. use when you need to modify an import's title or metadata.
     */
    UPDATE_IMPORT: "EXA_UPDATE_IMPORT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "EXA".
 */
export type EXA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "EXA".
 */
export type EXA_TRIGGER_EVENTS = {}
