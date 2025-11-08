// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SERPAPI's SERPAPI_BAIDU_SEARCH tool input.
 */
type SERPAPI_BAIDU_SEARCH_INPUT = {
  /**
   * Async
   * @description Parameter defines the way you want to submit your search to SerpApi. It can be set to `false` (default) to open an HTTP connection and keep it open until you got your search results, or `true` to just submit your search to SerpApi and retrieve them later. In this case, you'll need to use our Searches Archive API to retrieve your results. async and no_cache parameters should not be used together. async should not be used on accounts with Ludicrous Speed enabled.
   * @default false
   */
  async: boolean | null;
  /**
   * Bs
   * @description Defines the previous search query.
   * @default null
   */
  bs: string | null;
  /**
   * Ct
   * @description Defines which language to restrict results. Available options: "1" (All languages), "2" (Simplified Chinese), "3" (Traditional Chinese).
   * @default null
   */
  ct: string | null;
  /**
   * Device
   * @description Parameter defines the device to use to get the results. It can be set to "desktop" (default) to use a regular browser, "tablet" to use a tablet browser (currently using iPads), or "mobile" to use a mobile browser (currently using iPhones).
   * @default desktop
   */
  device: string | null;
  /**
   * F
   * @description Defines the originating search type. (e.g., "8" is a normal search, "3" is from the suggestion list, and "1" is a related search.
   * @default null
   */
  f: string | null;
  /**
   * Gpc
   * @description Parameter defines the time period for results. (e.g., `stf=1749303572,1749908372|stftype=1` only returns results from the past 7 days. First integer within the parameter, `1749303572` is Unix Timestamp for 7 days ago. Second integer, `1749908372` is Unix Timestamp for now.).
   * @default null
   */
  gpc: string | null;
  /**
   * No Cache
   * @description Parameter will force SerpApi to fetch the Baidu results even if a cached version is already present. A cache is served only if the query and all parameters are exactly the same. Cache expires after 1h. Cached searches are free, and are not counted towards your searches per month. It can be set to `false` (default) to allow results from the cache, or `true` to disallow results from the cache. no_cache and async parameters should not be used together.
   * @default false
   */
  no_cache: boolean | null;
  /**
   * Oq
   * @description Defines the original search query when navigated from a related search.
   * @default null
   */
  oq: string | null;
  /**
   * Output
   * @description Parameter defines the final output you want. It can be set to json (default) to get a structured `JSON` of the results, or `html` to get the raw html retrieved.
   * @default json
   */
  output: string | null;
  /**
   * Pn
   * @description Defines the result offset. It skips the given number of results. It's used for pagination. (e.g., 0 (default) is the first page of results, 10 is the 2nd page of results, 20 is the 3rd page of results, etc.).
   * @default null
   */
  pn: number | null;
  /**
   * Q
   * @description Defines the search query, including all Baidu search operators (e.g., `inurl:`, `site:`, `intitle:`, etc.).
   */
  q?: string;
  /**
   * Q5
   * @description Similar to using `inurl:` or `intitle:`. (e.g., "1" to search by page title, "2" to search by web address.).
   * @default null
   */
  q5: string | null;
  /**
   * Q6
   * @description Similar to using `site:`. (e.g., `q6=serpapi.com` to search for results only from the domain `serpapi.com`)
   * @default null
   */
  q6: string | null;
  /**
   * Rn
   * @description Parameter defines the maximum number of results to return, limited to 50. (e.g., 10 (default) returns 10 results, 30 returns 30 results, and 50 returns 50 results). This parameter is only available for desktop and tablet searches.
   * @default null
   */
  rn: number | null;
};

/**
 * Type of SERPAPI's SERPAPI_BAIDU_SEARCH tool output.
 */
type SERPAPI_BAIDU_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Answer Box
       * @description Contains results from Baidu Answer Box, if available.
       * @default null
       */
      answer_box: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Error
       * @description Error message if the search failed.
       * @default null
       */
      error: string | null;
      /**
       * Organic Results
       * @description List of organic search results.
       * @default null
       */
      organic_results: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Pagination
       * @description Contains pagination information for the search results.
       * @default null
       */
      pagination: {
          [key: string]: unknown;
      } | null;
      /**
       * Search Information
       * @description Contains information about the search query, like the displayed query.
       * @default null
       */
      search_information: {
          [key: string]: unknown;
      } | null;
      /**
       * Search Metadata
       * @description Contains metadata about the search, such as ID, status, and timestamps.
       * @default null
       */
      search_metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Search Parameters
       * @description Contains the parameters used for the search.
       * @default null
       */
      search_parameters: {
          [key: string]: unknown;
      } | null;
      /**
       * Serpapi Pagination
       * @description Contains SerpApi-specific pagination information.
       * @default null
       */
      serpapi_pagination: {
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
 * Type of SERPAPI's SERPAPI_BING_SEARCH tool input.
 */
type SERPAPI_BING_SEARCH_INPUT = {
  /**
   * Gl
   * @description Parameter defines the country to use for the search. It's a two-letter country code. (e.g., us for the United States, gb for United Kingdom, or fr for France). Head to the Google countries page for a full list of supported Google countries.
   * @default null
   */
  gl: string | null;
  /**
   * Hl
   * @description Parameter defines the language to use for the search. It's a two-letter language code. (e.g., en for English, es for Spanish, or fr for French). Head to the Google languages page for a full list of supported Google languages.
   * @default null
   */
  hl: string | null;
  /**
   * Location
   * @description Defines the location to use for the search. It can be a city, a state, a country, or a zip code. Uses a canonicalized name for the location. Example: "Austin, Texas, United States".
   * @default null
   */
  location: string | null;
  /**
   * Q
   * @description The search query string.
   */
  q?: string;
};

/**
 * Type of SERPAPI's SERPAPI_BING_SEARCH tool output.
 */
type SERPAPI_BING_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ads
       * @description A list of ads displayed in the search results.
       * @default null
       */
      ads: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Answer Box
       * @description Information from the answer box, if present.
       * @default null
       */
      answer_box: {
          [key: string]: unknown;
      } | null;
      /**
       * Organic Results
       * @description A list of organic search results.
       * @default null
       */
      organic_results: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Pagination
       * @description Pagination information for the search results.
       * @default null
       */
      pagination: {
          [key: string]: unknown;
      } | null;
      /**
       * Related Searches
       * @description A list of related search queries.
       * @default null
       */
      related_searches: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Search Parameters
       * @description Parameters used for the search.
       * @default null
       */
      search_parameters: {
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
 * Type of SERPAPI's SERPAPI_DUCK_DUCK_GO_SEARCH tool input.
 */
type SERPAPI_DUCK_DUCK_GO_SEARCH_INPUT = {
  /**
   * Query
   * @description Search term or phrase for the DuckDuckGo search.
   */
  query?: string;
};

/**
 * Type of SERPAPI's SERPAPI_DUCK_DUCK_GO_SEARCH tool output.
 */
type SERPAPI_DUCK_DUCK_GO_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A JSON object containing the search results from the DuckDuckGo API via SerpApi. Key fields typically include 'organic_results' (standard search listings), 'ads' (advertisements), 'knowledge_graph' (structured information about entities), 'news_results', 'inline_images', and 'inline_videos'.
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
 * Type of SERPAPI's SERPAPI_EBAY_SEARCH tool input.
 */
type SERPAPI_EBAY_SEARCH_INPUT = {
  /**
   * Device
   * @description Device type to simulate (e.g., desktop, mobile, tablet).
   * @default desktop
   */
  device: string | null;
  /**
   * Ebay Buyer Country
   * @description The country for which the results should be tailored.
   * @default null
   */
  ebay_buyer_country: string | null;
  /**
   * Ebay Domain
   * @description The specific eBay domain to search (e.g., ebay.com, ebay.co.uk).
   * @default null
   */
  ebay_domain: string | null;
  /**
   * Ebay Marketplace Id
   * @description The eBay marketplace ID.
   * @default null
   */
  ebay_marketplace_id: string | null;
  /**
   * Gl
   * @description Country code for the search results. Head to the Google countries page for a list of supported countries.
   * @default null
   */
  gl: string | null;
  /**
   * Hl
   * @description Language for the search results. Head to the Google languages page for a list of supported languages.
   * @default null
   */
  hl: string | null;
  /**
   * Location
   * @description The location for the search. Defines the location from where the search is performed.
   * @default null
   */
  location: string | null;
  /**
   * Nkw
   * @description The search query (keywords). This is a required parameter.
   */
  nkw?: string;
  /**
   * Num
   * @description Number of results per page. (e.g., 10 (default) or 20).
   * @default null
   */
  num: number | null;
  /**
   * Page
   * @description Page number for pagination. Starts at 0.
   * @default null
   */
  page: number | null;
  /**
   * Safe
   * @description Safe search option (e.g., active to filter adult content).
   * @default null
   */
  safe: string | null;
};

/**
 * Type of SERPAPI's SERPAPI_EBAY_SEARCH tool output.
 */
type SERPAPI_EBAY_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if the search was not successful.
       * @default null
       */
      error: string | null;
      /**
       * Organic Results
       * @description An array of objects, where each object represents a product listing.
       * @default null
       */
      organic_results: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Pagination
       * @description Contains information and links for navigating to other pages of search results.
       * @default null
       */
      pagination: {
          [key: string]: unknown;
      } | null;
      /**
       * Related Searches
       * @description An array of related search queries.
       * @default null
       */
      related_searches: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Search Metadata
       * @description Contains metadata about the search performed.
       * @default null
       */
      search_metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Search Parameters
       * @description Echoes back the parameters used for the search.
       * @default null
       */
      search_parameters: {
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
 * Type of SERPAPI's SERPAPI_EVENT_SEARCH tool input.
 */
type SERPAPI_EVENT_SEARCH_INPUT = {
  /**
   * Query
   * @description Search query for events, specifying the topic, type, or name.
   */
  query?: string;
};

/**
 * Type of SERPAPI's SERPAPI_EVENT_SEARCH tool output.
 */
type SERPAPI_EVENT_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description An error message from SerpApi if the request was not successful.
       * @default null
       */
      error: string | null;
      /**
       * Events Results
       * @description A list of events, where each event is a dictionary containing details like title, date, location.
       * @default null
       */
      events_results: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Search Metadata
       * @description Metadata about the search performed, e.g., status, ID.
       * @default null
       */
      search_metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Search Parameters
       * @description Parameters that were used for the search.
       * @default null
       */
      search_parameters: {
          [key: string]: unknown;
      } | null;
      /**
       * Serpapi Pagination
       * @description Information for paginating through results, if applicable.
       * @default null
       */
      serpapi_pagination: {
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
 * Type of SERPAPI's SERPAPI_FINANCE_SEARCH tool input.
 */
type SERPAPI_FINANCE_SEARCH_INPUT = {
  /**
   * Query
   * @description The financial search query. This can be a company name, stock ticker symbol (e.g., 'AAPL', 'GOOG'), or a broader financial topic (e.g., 'US stock market trends', 'latest fintech news').
   */
  query?: string;
};

/**
 * Type of SERPAPI's SERPAPI_FINANCE_SEARCH tool output.
 */
type SERPAPI_FINANCE_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description Structured financial search results from Google Finance via SERP API, returned as a dictionary. The specific content and structure depend on the query and the data provided by Google Finance.
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
 * Type of SERPAPI's SERPAPI_GOOGLE_DOMAINS_LIST tool input.
 */
type SERPAPI_GOOGLE_DOMAINS_LIST_INPUT = object;

/**
 * Type of SERPAPI's SERPAPI_GOOGLE_DOMAINS_LIST tool output.
 */
type SERPAPI_GOOGLE_DOMAINS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Domains
       * @description List of supported Google domains.
       */
      domains: {
          /**
           * Country Code
           * @description ISO 3166-1 alpha-2 country code (e.g., US).
           * @default null
           */
          country_code: string | null;
          /**
           * Domain
           * @description The domain string (e.g., google.com).
           */
          domain: string;
          /**
           * Id
           * @description Unique identifier for the Google domain (e.g., google.com).
           */
          id: string;
          /**
           * Language Code
           * @description Default language code for the domain (e.g., en).
           * @default null
           */
          language_code: string | null;
          /**
           * Location
           * @description Location associated with the domain (e.g., United States).
           * @default null
           */
          location: string | null;
          /**
           * Name
           * @description Full name of the Google domain (e.g., Google.com).
           */
          name: string;
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
 * Type of SERPAPI's SERPAPI_GOOGLE_JOBS_SEARCH tool input.
 */
type SERPAPI_GOOGLE_JOBS_SEARCH_INPUT = {
  /**
   * Async Req
   * @description Parameter defines the way you want to submit your search to SerpApi.
   * @default null
   */
  async_req: boolean | null;
  /**
   * Chips
   * @description Parameter defines additional query conditions. Top of a job search page contains elements called chips, its values are extracted in order to be passed to chips parameter.
   * @default null
   */
  chips: string | null;
  /**
   * Engine
   * @description Set parameter to google_jobs to use the Google Jobs API engine.
   * @default google_jobs
   */
  engine: string;
  /**
   * Gl
   * @description Parameter defines the country to use for the Google search. It's a two-letter country code.
   * @default null
   */
  gl: string | null;
  /**
   * Google Domain
   * @description Parameter defines the Google domain to use. It defaults to google.com.
   * @default null
   */
  google_domain: string | null;
  /**
   * Hl
   * @description Parameter defines the language to use for the Google Jobs search. It's a two-letter language code.
   * @default null
   */
  hl: string | null;
  /**
   * Location
   * @description Parameter defines from where you want the search to originate. If several locations match the location requested, we'll pick the most popular one. It is recommended to specify location at the city level in order to simulate a real user’s search.
   * @default null
   */
  location: string | null;
  /**
   * Lrad
   * @description Defines search radius in kilometers. Does not strictly limit the radius.
   * @default null
   */
  lrad: number | null;
  /**
   * Ltype
   * @description Parameter will filter the results by work from home. Set to 1 for work from home jobs.
   * @default null
   */
  ltype: number | null;
  /**
   * Next Page Token
   * @description Parameter defines the next page token. It is used for retrieving the next page of results. Up to 10 results are returned per page.
   * @default null
   */
  next_page_token: string | null;
  /**
   * No Cache
   * @description Parameter will force SerpApi to fetch the Google Jobs results even if a cached version is already present.
   * @default null
   */
  no_cache: boolean | null;
  /**
   * Output
   * @description Parameter defines the final output you want. It can be set to json (default) to get a structured JSON of the results, or html to get the raw html retrieved.
   * @default null
   */
  output: string | null;
  /**
   * Q
   * @description Parameter defines the query you want to search.
   */
  q?: string;
  /**
   * Uds
   * @description Parameter enables to filter search. It's a string provided by Google as a filter.
   * @default null
   */
  uds: string | null;
  /**
   * Uule
   * @description Parameter is the Google encoded location you want to use for the search. uule and location parameters can't be used together.
   * @default null
   */
  uule: string | null;
  /**
   * Zero Trace
   * @description Enterprise only. Parameter enables ZeroTrace mode. It can be set to false (default) or true.
   * @default null
   */
  zero_trace: boolean | null;
};

/**
 * Type of SERPAPI's SERPAPI_GOOGLE_JOBS_SEARCH tool output.
 */
type SERPAPI_GOOGLE_JOBS_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if the search failed.
       * @default null
       */
      error: string | null;
      /**
       * Filters
       * @description Contains the filters available for the search results.
       * @default null
       */
      filters: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Jobs Results
       * @description Contains the job search results.
       * @default null
       */
      jobs_results: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Search Metadata
       * @description Contains information about the search, such as the ID, status, and links to the JSON and HTML results.
       * @default null
       */
      search_metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Search Parameters
       * @description Contains the parameters used for the search.
       * @default null
       */
      search_parameters: {
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
 * Type of SERPAPI's SERPAPI_GOOGLE_LIGHT_SEARCH tool input.
 */
type SERPAPI_GOOGLE_LIGHT_SEARCH_INPUT = {
  /**
   * Async Param
   * @description Parameter defines the way you want to submit your search to SerpApi. It can be set to `true` to run the search asynchronously or `false` to run it synchronously. Defaults to `false`.
   * @default null
   */
  async_param: boolean | null;
  /**
   * Device
   * @description Parameter defines the device to use to get the results. It can be set to `desktop`, `tablet`, or `mobile`. Defaults to `desktop`.
   * @default null
   */
  device: string | null;
  /**
   * Engine
   * @description Set parameter to `google_light` to use the Google Light API engine.
   * @default google_light
   */
  engine: string;
  /**
   * Filter
   * @description Parameter defines if the filters for 'Similar Results' and 'Omitted Results' are on or off. It can be set to `0` to turn off filtering or `1` to turn on filtering. Defaults to `1`.
   * @default null
   */
  filter: string | null;
  /**
   * Gl
   * @description Parameter defines the country to use for the Google search. It's a two-letter country code. Example: "us" for United States.
   * @default null
   */
  gl: string | null;
  /**
   * Google Domain
   * @description Parameter defines the Google domain to use. It defaults to `google.com`.
   * @default null
   */
  google_domain: string | null;
  /**
   * Hl
   * @description Parameter defines the language to use for the Google search. It's a two-letter language code. Example: "en" for English.
   * @default null
   */
  hl: string | null;
  /**
   * Location
   * @description Parameter defines from where you want the search to originate. Example: "Austin, Texas, United States".
   * @default null
   */
  location: string | null;
  /**
   * Lr
   * @description Parameter defines one or multiple languages to limit the search to. Example: "lang_fr|lang_de" for French or German.
   * @default null
   */
  lr: string | null;
  /**
   * Nfpr
   * @description Parameter defines the exclusion of results from an auto-corrected query when the original query is spelled wrong. It can be set to `1` to exclude results or `0` to include them. Defaults to `0`.
   * @default null
   */
  nfpr: string | null;
  /**
   * No Cache
   * @description Parameter will force SerpApi to fetch the Google Light results even if a cached version is already present.
   * @default null
   */
  no_cache: boolean | null;
  /**
   * Num
   * @description Parameter defines the maximum number of results to return. (e.g., `10` (default) returns 10 results, `40` returns 40 results, and `100` returns 100 results). Maximum value is `100`.
   * @default null
   */
  num: number | null;
  /**
   * Output
   * @description Parameter defines the final output you want. It can be set to `json` (default) or `html`.
   * @default null
   */
  output: string | null;
  /**
   * Q
   * @description Parameter defines the query you want to search. You can use anything that you would use in a regular Google search.
   */
  q?: string;
  /**
   * Safe
   * @description Parameter defines the level of filtering for adult content. It can be set to `active` or `off`. `active` is the highest level of filtering. `off` turns off filtering. Defaults to `off`.
   * @default null
   */
  safe: string | null;
  /**
   * Start
   * @description Parameter defines the result offset. It skips the given number of results. It's used for pagination. (e.g., `0` (default) is the first page of results, `10` is the 2nd page of results, `20` is the 3rd page of results, etc.).
   * @default null
   */
  start: number | null;
  /**
   * Uule
   * @description Parameter is the Google encoded location you want to use for the search. Example: "w+CAIQICIHVG9yb250bw==" for Toronto.
   * @default null
   */
  uule: string | null;
  /**
   * Zero Trace
   * @description Enterprise only. Parameter enables ZeroTrace mode. It can be set to `true` to enable ZeroTrace or `false` to disable it. Defaults to `false`.
   * @default null
   */
  zero_trace: boolean | null;
};

/**
 * Type of SERPAPI's SERPAPI_GOOGLE_LIGHT_SEARCH tool output.
 */
type SERPAPI_GOOGLE_LIGHT_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Organic Results
       * @description List of organic search results.
       * @default null
       */
      organic_results: {
          /**
           * Displayed Link
           * @description Displayed URL of the result.
           * @default null
           */
          displayed_link: string | null;
          /**
           * Link
           * @description URL of the result.
           * @default null
           */
          link: string | null;
          /**
           * Position
           * @description Position of the result.
           * @default null
           */
          position: number | null;
          /**
           * Sitelinks
           * @description Sitelinks associated with the result.
           * @default null
           */
          sitelinks: {
              [key: string]: {
                  /**
                   * Link
                   * @description URL of the sitelink.
                   * @default null
                   */
                  link: string | null;
                  /**
                   * Title
                   * @description Title of the sitelink.
                   * @default null
                   */
                  title: string | null;
              }[];
          } | null;
          /**
           * Snippet
           * @description Snippet of the result.
           * @default null
           */
          snippet: string | null;
          /**
           * Title
           * @description Title of the result.
           * @default null
           */
          title: string | null;
      }[] | null;
      /**
       * Related Questions
       * @description List of related questions.
       * @default null
       */
      related_questions: {
          /**
           * Displayed Link
           * @description Displayed link of the source.
           * @default null
           */
          displayed_link: string | null;
          /**
           * Link
           * @description Link to the source of the answer.
           * @default null
           */
          link: string | null;
          /**
           * More Results Link
           * @description Link to more results for the question.
           * @default null
           */
          more_results_link: string | null;
          /**
           * Question
           * @description The related question.
           * @default null
           */
          question: string | null;
          /**
           * Snippet
           * @description Snippet from the answer.
           * @default null
           */
          snippet: string | null;
          /**
           * Snippet Highlighted Words
           * @description Highlighted words in the snippet.
           * @default null
           */
          snippet_highlighted_words: string[] | null;
          /**
           * Title
           * @description Title of the source of the answer.
           * @default null
           */
          title: string | null;
      }[] | null;
      /**
       * Related Searches
       * @description List of related searches.
       * @default null
       */
      related_searches: {
          /**
           * Link
           * @description Link to the SerpApi search results for this related query.
           * @default null
           */
          link: string | null;
          /**
           * Query
           * @description The related search query.
           * @default null
           */
          query: string | null;
          /**
           * Serpapi Link
           * @description SerpApi link for the related search.
           * @default null
           */
          serpapi_link: string | null;
      }[] | null;
      /**
       * SearchInformation
       * @description Information about the search results.
       * @default null
       */
      search_information: {
          /**
           * Organic Results State
           * @description State of the organic results (e.g., "Results for exact spelling").
           * @default null
           */
          organic_results_state: string | null;
          /**
           * Query Displayed
           * @description The query displayed by Google.
           * @default null
           */
          query_displayed: string | null;
      } | null;
      /**
       * SearchMetadata
       * @description Metadata about the search.
       * @default null
       */
      search_metadata: {
          /**
           * Created At
           * @description Timestamp of when the search was created.
           * @default null
           */
          created_at: string | null;
          /**
           * Google Light Url
           * @description URL of the Google Light search.
           * @default null
           */
          google_light_url: string | null;
          /**
           * Id
           * @description ID of the search.
           * @default null
           */
          id: string | null;
          /**
           * Json Endpoint
           * @description JSON endpoint for the search results.
           * @default null
           */
          json_endpoint: string | null;
          /**
           * Processed At
           * @description Timestamp of when the search was processed.
           * @default null
           */
          processed_at: string | null;
          /**
           * Raw Html File
           * @description Path to the raw HTML file (if available).
           * @default null
           */
          raw_html_file: string | null;
          /**
           * Status
           * @description Status of the search (e.g., "Success").
           * @default null
           */
          status: string | null;
          /**
           * Total Time Taken
           * @description Total time taken for the search.
           * @default null
           */
          total_time_taken: number | null;
      } | null;
      /**
       * SearchParameters
       * @description Parameters used for the search.
       * @default null
       */
      search_parameters: {
          /**
           * Device
           * @description Device used for the search.
           * @default null
           */
          device?: string | null;
          /**
           * Engine
           * @description Search engine used.
           * @default null
           */
          engine?: string | null;
          /**
           * Google Domain
           * @description Google domain used.
           * @default null
           */
          google_domain?: string | null;
          /**
           * Location Requested
           * @description Location requested for the search.
           * @default null
           */
          location_requested?: string | null;
          /**
           * Location Used
           * @description Location used for the search.
           * @default null
           */
          location_used?: string | null;
          /**
           * Q
           * @description Original search query.
           * @default null
           */
          q?: string | null;
      } | null;
      /**
       * SerpApiPagination
       * @description Pagination information for SerpApi.
       * @default null
       */
      serpapi_pagination: {
          /**
           * Current
           * @description Current page number.
           * @default null
           */
          current: number | null;
          /**
           * Next
           * @description URL for the next page of results.
           * @default null
           */
          next: string | null;
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
 * Type of SERPAPI's SERPAPI_GOOGLE_MAPS_SEARCH tool input.
 */
type SERPAPI_GOOGLE_MAPS_SEARCH_INPUT = {
  /**
   * Ll
   * @description GPS coordinates for the search, formatted as '@latitude,longitude,zoom_level'. If unspecified, search may be less geographically specific or use a default location.
   */
  ll?: string;
  /**
   * Q
   * @description Search query for Google Maps (e.g., 'coffee shops', 'restaurants near Central Park').
   */
  q?: string;
  /**
   * Start
   * @description Starting result index for pagination, used to get subsequent pages of results.
   */
  start?: number;
};

/**
 * Type of SERPAPI's SERPAPI_GOOGLE_MAPS_SEARCH tool output.
 */
type SERPAPI_GOOGLE_MAPS_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description Search results from SERP API for Google Maps. The structure varies based on the query and data returned.
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
 * Type of SERPAPI's SERPAPI_HOTEL_SEARCH tool input.
 */
type SERPAPI_HOTEL_SEARCH_INPUT = {
  /**
   * Adults
   * @description Parameter defines the number of adults. Default to 2.
   * @default null
   */
  adults: number | null;
  /**
   * Amenities
   * @description Parameter defines to include only results that offer specified amenities.
   * @default null
   */
  amenities: string | null;
  /**
   * Async
   * @description Parameter defines the way you want to submit your search to SerpApi.
   * @default null
   */
  async: boolean | null;
  /**
   * Bathrooms
   * @description Parameter defines the minimum number of bathrooms. Default to 0.
   * @default null
   */
  bathrooms: number | null;
  /**
   * Bedrooms
   * @description Parameter defines the minimum number of bedrooms. Default to 0.
   * @default null
   */
  bedrooms: number | null;
  /**
   * Check In Date
   * @description Parameter defines the check-in date. The format is YYYY-MM-DD.
   */
  check_in_date?: string;
  /**
   * Check Out Date
   * @description Parameter defines the check-out date. The format is YYYY-MM-DD.
   */
  check_out_date?: string;
  /**
   * Children
   * @description Parameter defines the number of children. Default to 0.
   * @default null
   */
  children: number | null;
  /**
   * Children Ages
   * @description Parameter defines the ages of children. The age range is from 1 to 17, with children who haven't reached 1 year old being considered as 1.
   * @default null
   */
  children_ages: string | null;
  /**
   * Currency
   * @description Parameter defines the currency of the returned prices. Default to USD.
   * @default null
   */
  currency: string | null;
  /**
   * Eco Certified
   * @description Parameter defines to show results that are eco certified.
   * @default null
   */
  eco_certified: boolean | null;
  /**
   * Free Cancellation
   * @description Parameter defines to show results that offer free cancellation.
   * @default null
   */
  free_cancellation: boolean | null;
  /**
   * Gl
   * @description Parameter defines the country to use for the Google Hotels search. It's a two-letter country code. (e.g., us for the United States, uk for United Kingdom, or fr for France)
   * @default null
   */
  gl: string | null;
  /**
   * Hl
   * @description Parameter defines the language to use for the Google Hotels search. It's a two-letter language code. (e.g., en for English, es for Spanish, or fr for French).
   * @default null
   */
  hl: string | null;
  /**
   * Max Price
   * @description Parameter defines the upper bound of price range.
   * @default null
   */
  max_price: number | null;
  /**
   * Min Price
   * @description Parameter defines the lower bound of price range.
   * @default null
   */
  min_price: number | null;
  /**
   * Next Page Token
   * @description Parameter defines the next page token. It is used for retrieving the next page results.
   * @default null
   */
  next_page_token: string | null;
  /**
   * No Cache
   * @description Parameter will force SerpApi to fetch the Google Hotels results even if a cached version is already present.
   * @default null
   */
  no_cache: boolean | null;
  /**
   * Output
   * @description Parameter defines the final output you want. It can be set to json (default) to get a structured JSON of the results, or html to get the raw html retrieved.
   * @default null
   */
  output: string | null;
  /**
   * Property Token
   * @description Parameter is used to get property details which consists of name, address, phone, prices, nearby places, and etc.
   * @default null
   */
  property_token: string | null;
  /**
   * Property Types
   * @description Parameter defines to include only certain type of property in the results.
   * @default null
   */
  property_types: string | null;
  /**
   * Q
   * @description Parameter defines the search query. You can use anything that you would use in a regular Google Hotels search.
   */
  q?: string;
  /**
   * Rating
   * @description Parameter is used for filtering the results to certain rating.
   * @default null
   */
  rating: number | null;
  /**
   * Sort By
   * @description Parameter is used for sorting the results. Default is sort by Relevance.
   * @default null
   */
  sort_by: string | null;
  /**
   * Special Offers
   * @description Parameter defines to show results that have special offers.
   * @default null
   */
  special_offers: boolean | null;
  /**
   * Vacation Rentals
   * @description Parameter defines to search for Vacation Rentals results. Default search is for Hotels.
   * @default null
   */
  vacation_rentals: boolean | null;
  /**
   * Zero Trace
   * @description Enterprise only. Parameter enables ZeroTrace mode.
   * @default null
   */
  zero_trace: boolean | null;
};

/**
 * Type of SERPAPI's SERPAPI_HOTEL_SEARCH tool output.
 */
type SERPAPI_HOTEL_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if the search failed.
       * @default null
       */
      error: string | null;
      /**
       * Properties
       * @description List of hotel properties found.
       * @default null
       */
      properties: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Search Metadata
       * @description Metadata about the search performed.
       * @default null
       */
      search_metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Search Parameters
       * @description Parameters used for the search.
       * @default null
       */
      search_parameters: {
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
 * Type of SERPAPI's SERPAPI_IMAGE_SEARCH tool input.
 */
type SERPAPI_IMAGE_SEARCH_INPUT = {
  /**
   * Query
   * @description Query to find images; be specific about the topic or subject.
   */
  query?: string;
};

/**
 * Type of SERPAPI's SERPAPI_IMAGE_SEARCH tool output.
 */
type SERPAPI_IMAGE_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description Image search results from Google Images via SERP API. Structure follows official SERP API JSON format.
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
 * Type of SERPAPI's SERPAPI_LOCATIONS_LIST tool input.
 */
type SERPAPI_LOCATIONS_LIST_INPUT = {
  /**
   * Limit
   * @description Parameter limits the number of locations returned. (e.g., 5 will return only 5 locations. Maximum is 10.)
   * @default null
   */
  limit: number | null;
  /**
   * Q
   * @description Parameter restricts your search to locations that contain the supplied string. (e.g., Austin will find 'Austin, TX', 'The University of Texas at Austin', 'Rochester, MN-Mason City, IA-Austin, MN,United States', etc.)
   * @default null
   */
  q: string | null;
};

/**
 * Type of SERPAPI's SERPAPI_LOCATIONS_LIST tool output.
 */
type SERPAPI_LOCATIONS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Locations
       * @description An array of locations ordered by reach.
       */
      locations: {
          /**
           * Canonical Name
           * @description Canonical name of the location.
           */
          canonical_name: string;
          /**
           * Country Code
           * @description Country code of the location.
           */
          country_code: string;
          /**
           * Full Name
           * @description Full name of the location.
           * @default null
           */
          full_name: string | null;
          /**
           * Gps
           * @description GPS coordinates of the location.
           */
          gps: number[];
          /**
           * Id
           * @description ID of the location.
           */
          id: string;
          /**
           * Keys
           * @description Keys associated with the location.
           */
          keys: string[];
          /**
           * Name
           * @description Name of the location.
           */
          name: string;
          /**
           * Reach
           * @description Reach of the location.
           */
          reach: number;
          /**
           * Target Type
           * @description Target type of the location.
           */
          target_type: string;
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
 * Type of SERPAPI's SERPAPI_NEWS_SEARCH tool input.
 */
type SERPAPI_NEWS_SEARCH_INPUT = {
  /**
   * Query
   * @description Search query for finding relevant news articles.
   */
  query?: string;
};

/**
 * Type of SERPAPI's SERPAPI_NEWS_SEARCH tool output.
 */
type SERPAPI_NEWS_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description Structured news search results, typically a list of articles with details like title, link, source, and snippet.
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
 * Type of SERPAPI's SERPAPI_PLAY_SEARCH tool input.
 */
type SERPAPI_PLAY_SEARCH_INPUT = {
  /**
   * Age
   * @description Parameter defines age subcategory. age works, and should only be used with apps_category=FAMILY (Kids Apps)
   * @default null
   */
  age: string | null;
  /**
   * Apps Category
   * @description Parameter defines the apps store category.
   * @default null
   */
  apps_category: string | null;
  /**
   * Async Param
   * @description Parameter defines the way you want to submit your search to SerpApi.
   * @default false
   */
  async_param: boolean | null;
  /**
   * Chart
   * @description Parameter is used for showing top charts. It can return up to `50` results.
   * @default null
   */
  chart: string | null;
  /**
   * Engine
   * @description Set parameter to `google_play` to use the Google Play API engine.
   * @default google_play
   */
  engine: string;
  /**
   * Hl
   * @description Parameter defines the language to use for the Google Play search. It's a two-letter language code. (e.g., `en` (default) for English, `es` for Spanish, or `fr` for French).
   * @default null
   */
  hl: string | null;
  /**
   * Next Page Token
   * @description Parameter defines the next page token. It is used for retrieving the next page results.
   * @default null
   */
  next_page_token: string | null;
  /**
   * No Cache
   * @description Parameter will force SerpApi to fetch the Google Play results even if a cached version is already present.
   * @default false
   */
  no_cache: boolean | null;
  /**
   * Output
   * @description Parameter defines the final output you want. It can be set to json (default) to get a structured `JSON` of the results, or `html` to get the raw html retrieved.
   * @default json
   */
  output: string | null;
  /**
   * Q
   * @description Parameter defines the query you want to search in Google Play Apps Store.
   * @default null
   */
  q: string | null;
  /**
   * Section Page Token
   * @description Parameter defines the section page token used for retrieving the pagination results from individual sections.
   * @default null
   */
  section_page_token: string | null;
  /**
   * See More Token
   * @description Parameter defines the see more token used for retrieving the pagination results from individual sections.
   * @default null
   */
  see_more_token: string | null;
  /**
   * Store
   * @description Parameter defines the country to use for the Google Play search. It's a two-letter country code. (e.g., `us` (default) for the United States, `uk` for United Kingdom, or `fr` for France).
   * @default us
   */
  store: string;
  /**
   * Store Device
   * @description Parameter defines the device for sorting results. This parameter cannot be used with apps_category or q parameters.
   * @default null
   */
  store_device: string | null;
};

/**
 * Type of SERPAPI's SERPAPI_PLAY_SEARCH tool output.
 */
type SERPAPI_PLAY_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Organic Results
       * @description Contains the organic search results from Google Play.
       * @default null
       */
      organic_results: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Related Searches
       * @description Contains related searches.
       * @default null
       */
      related_searches: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Search Metadata
       * @description Contains metadata about the search.
       * @default null
       */
      search_metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Search Parameters
       * @description Contains the parameters used for the search.
       * @default null
       */
      search_parameters: {
          [key: string]: unknown;
      } | null;
      /**
       * Serpapi Pagination
       * @description Contains pagination information for the search results.
       * @default null
       */
      serpapi_pagination: {
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
 * Type of SERPAPI's SERPAPI_SCHOLAR_SEARCH tool input.
 */
type SERPAPI_SCHOLAR_SEARCH_INPUT = {
  /**
   * Query
   * @description The search query for Google Scholar. This can be an academic topic, paper title, author name, or specific keywords.
   */
  query?: string;
};

/**
 * Type of SERPAPI's SERPAPI_SCHOLAR_SEARCH tool output.
 */
type SERPAPI_SCHOLAR_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description A dictionary containing the structured search results from Google Scholar, as returned by the SERP API. This includes details about academic papers, articles, and citations.
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
 * Type of SERPAPI's SERPAPI_SEARCH tool input.
 */
type SERPAPI_SEARCH_INPUT = {
  /**
   * Query
   * @description User's search query; should be a clear, concise question or keyword phrase.
   */
  query?: string;
};

/**
 * Type of SERPAPI's SERPAPI_SEARCH tool output.
 */
type SERPAPI_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description Search results from the SERP API, potentially including organic results, local results, paid ads, and knowledge graph data.
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
 * Type of SERPAPI's SERPAPI_SHOPPING_SEARCH tool input.
 */
type SERPAPI_SHOPPING_SEARCH_INPUT = {
  /**
   * Query
   * @description Product or item to search for on Google Shopping.
   */
  query?: string;
};

/**
 * Type of SERPAPI's SERPAPI_SHOPPING_SEARCH tool output.
 */
type SERPAPI_SHOPPING_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description Structured search results from Google Shopping, including product details like title, link, price, and retailer.
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
 * Type of SERPAPI's SERPAPI_TRENDS_SEARCH tool input.
 */
type SERPAPI_TRENDS_SEARCH_INPUT = {
  /**
   * Data Type
   * @description Specifies Google Trends search type, dictating `query` format (single term or comma-separated multiple terms).
   *     Options:
   *     - `TIMESERIES`: Interest over time; single/multiple queries.
   *     - `GEO_MAP`: Regional comparison; multiple queries.
   *     - `GEO_MAP_0`: Regional interest; single query.
   *     - `RELATED_TOPICS`: Related topics; single query.
   *     - `RELATED_QUERIES`: Related queries; single query.
   * @default TIMESERIES
   */
  data_type: string | null;
  /**
   * Query
   * @description Search query/queries for Google Trends (use comma for multiple). Format (single vs. multiple terms) is dictated by `data_type`.
   */
  query?: string;
};

/**
 * Type of SERPAPI's SERPAPI_TRENDS_SEARCH tool output.
 */
type SERPAPI_TRENDS_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description Structured Google Trends data, corresponding to the input `query` and `data_type`.
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
 * Type of SERPAPI's SERPAPI_WALMART_SEARCH tool input.
 */
type SERPAPI_WALMART_SEARCH_INPUT = {
  /**
   * Location
   * @description Defines the location to use for the search. It can be a city, region, or country. Uses a canonicalized name from the SerpApi locations API.
   * @default null
   */
  location: string | null;
  /**
   * Max Price
   * @description Maximum price filter.
   * @default null
   */
  max_price: number | null;
  /**
   * Min Price
   * @description Minimum price filter.
   * @default null
   */
  min_price: number | null;
  /**
   * Min Rating
   * @description Minimum rating filter (1-5).
   * @default null
   */
  min_rating: number | null;
  /**
   * Page
   * @description Page number for pagination. Starts at 1.
   * @default null
   */
  page: number | null;
  /**
   * Q
   * @description The search query term or phrase.
   */
  q?: string;
  /**
   * Sort
   * @description Sorting option for results. Available options: best_match, best_seller, price_low, price_high, rating_high, newest.
   * @default null
   */
  sort: string | null;
  /**
   * Store Id
   * @description Store ID to filter results. Can be found using the Walmart Store Finder API.
   * @default null
   */
  store_id: string | null;
  /**
   * Type
   * @description Defines the type of search. Can be 'search', 'deals', 'store', 'question'. Default is 'search'.
   * @default null
   */
  type: string | null;
};

/**
 * Type of SERPAPI's SERPAPI_WALMART_SEARCH tool output.
 */
type SERPAPI_WALMART_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Filters
       * @description Available filters for the current search query.
       * @default null
       */
      filters: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Organic Results
       * @description List of organic product search results from Walmart.
       * @default null
       */
      organic_results: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Pagination
       * @description Information about pagination for the search results.
       * @default null
       */
      pagination: {
          [key: string]: unknown;
      } | null;
      /**
       * Search Metadata
       * @description Metadata about the search query.
       * @default null
       */
      search_metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Search Parameters
       * @description Parameters used for the search.
       * @default null
       */
      search_parameters: {
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
 * Type of SERPAPI's SERPAPI_YAHOO_SEARCH tool input.
 */
type SERPAPI_YAHOO_SEARCH_INPUT = {
  /**
   * Async Request
   * @description Parameter defines the way you want to submit your search to SerpApi.
   * @default false
   */
  async_request: boolean | null;
  /**
   * B
   * @description Parameter defines the result offset. It skips the given number of results. It's used for pagination.
   * @default null
   */
  b: number | null;
  /**
   * D
   * @description Parameter specifies the destination for related topics.
   * @default null
   */
  d: string | null;
  /**
   * Device
   * @description Parameter defines the device to use to get the results. It can be set to `desktop` (default) to use a regular browser, `tablet` to use a tablet browser, or `mobile` to use a mobile browser.
   * @default desktop
   */
  device: string | null;
  /**
   * Fr2
   * @description Parameter is responsible for rendering positions and expansions for some elements.
   * @default null
   */
  fr2: string | null;
  /**
   * No Cache
   * @description Parameter will force SerpApi to fetch the Yahoo! results even if a cached version is already present.
   * @default false
   */
  no_cache: boolean | null;
  /**
   * Output
   * @description Parameter defines the final output you want. It can be set to json (default) to get a structured `JSON` of the results, or `html` to get the raw html retrieved.
   * @default json
   */
  output: string | null;
  /**
   * P
   * @description Parameter defines the search query. You can use anything that you would use in a regular Yahoo! search.
   */
  p?: string;
  /**
   * Vc
   * @description Parameter defines the country to use for the Yahoo! search. It's a two-letter country code. (e.g., `us` for the United States, `uk` for United Kingdom, or `fr` for France)
   * @default null
   */
  vc: string | null;
  /**
   * Vf
   * @description `all formats` or specific file format like `pdf` or `txt`.
   * @default null
   */
  vf: string | null;
  /**
   * Vl
   * @description Parameter defines language to limit the search to. It uses `lang_{two-letter language code}` to specify languages.
   * @default null
   */
  vl: string | null;
  /**
   * Vm
   * @description Parameter defines the level of filtering for adult content. Strict: `r`, Moderate: `i`, Off: `p`
   * @default null
   */
  vm: string | null;
  /**
   * Vs
   * @description Filter results by top-level domains separated by ','. (e.g., `.com,.org`)
   * @default null
   */
  vs: string | null;
  /**
   * Yahoo Domain
   * @description Parameter defines the Yahoo! domain to use. It defaults to `search.yahoo.com`. If specified domain is allowed, it will be prepended to the domain (e.g., `fr.search.yahoo.com`).
   * @default null
   */
  yahoo_domain: string | null;
};

/**
 * Type of SERPAPI's SERPAPI_YAHOO_SEARCH tool output.
 */
type SERPAPI_YAHOO_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ads
       * @description List of ads results.
       * @default null
       */
      ads: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Error
       * @description Error message if the search failed.
       * @default null
       */
      error: string | null;
      /**
       * Organic Results
       * @description List of organic search results.
       * @default null
       */
      organic_results: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Pagination
       * @description Contains pagination information for the search results.
       * @default null
       */
      pagination: {
          [key: string]: unknown;
      } | null;
      /**
       * Related Searches
       * @description List of related searches.
       * @default null
       */
      related_searches: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Search Information
       * @description Contains information about the search results.
       * @default null
       */
      search_information: {
          [key: string]: unknown;
      } | null;
      /**
       * Search Metadata
       * @description Contains information about the search.
       * @default null
       */
      search_metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Search Parameters
       * @description Contains the parameters used for the search.
       * @default null
       */
      search_parameters: {
          [key: string]: unknown;
      } | null;
      /**
       * Serpapi Pagination
       * @description Contains SerpApi pagination information for the search results.
       * @default null
       */
      serpapi_pagination: {
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
 * Type of SERPAPI's SERPAPI_YANDEX_SEARCH tool input.
 */
type SERPAPI_YANDEX_SEARCH_INPUT = {
  /**
   * Lang
   * @description Defines the language to use for the search. (e.g., 'ru' for Russian, 'en' for English).
   * @default null
   */
  lang: string | null;
  /**
   * Location
   * @description Defines the location to use for the search. It can be a city name, a region, or a country. Uses Yandex's location codes if available.
   * @default null
   */
  location: string | null;
  /**
   * Num
   * @description Defines the number of results to return per page. (e.g., 10, 20, 30, 50).
   * @default null
   */
  num: number | null;
  /**
   * Text
   * @description The search query string.
   */
  text?: string;
};

/**
 * Type of SERPAPI's SERPAPI_YANDEX_SEARCH tool output.
 */
type SERPAPI_YANDEX_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if the search failed.
       * @default null
       */
      error: string | null;
      /**
       * Organic Results
       * @description List of organic search results.
       * @default null
       */
      organic_results: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Pagination
       * @description Pagination information.
       * @default null
       */
      pagination: {
          [key: string]: unknown;
      } | null;
      /**
       * Related Searches
       * @description Related search queries.
       * @default null
       */
      related_searches: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Search Metadata
       * @description Metadata about the search.
       * @default null
       */
      search_metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Search Parameters
       * @description Parameters used for the search.
       * @default null
       */
      search_parameters: {
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
 * Type of SERPAPI's SERPAPI_YOU_TUBE_SEARCH tool input.
 */
type SERPAPI_YOU_TUBE_SEARCH_INPUT = {
  /**
   * Async
   * @description Parameter defines the way you want to submit your search to SerpApi. It can be set to `false` (default) to open an HTTP connection and keep it open until you got your search results, or `true` to just submit your search to SerpApi and retrieve them later. In this case, you'll need to use our Searches Archive API to retrieve your results. async and no_cache parameters should not be used together.
   * @default false
   */
  async: boolean | null;
  /**
   * Gl
   * @description Parameter defines the country to use for the Google search. It's a two-letter country code. (e.g., `us` for the United States, `uk` for United Kingdom, or `fr` for France). Head to the Google countries page for a full list of supported Google countries.
   * @default null
   */
  gl: string | null;
  /**
   * Hl
   * @description Parameter defines the language to use for the Youtube search. It's a two-letter language code. (e.g., `en` for English, `es` for Spanish, or `fr` for French). Head to the Google languages page for a full list of supported Google languages.
   * @default null
   */
  hl: string | null;
  /**
   * No Cache
   * @description Parameter will force SerpApi to fetch the YouTube results even if a cached version is already present. A cache is served only if the query and all parameters are exactly the same. Cache expires after 1h. Cached searches are free, and are not counted towards your searches per month. It can be set to `false` (default) to allow results from the cache, or `true` to disallow results from the cache. no_cache and async parameters should not be used together.
   * @default false
   */
  no_cache: boolean | null;
  /**
   * Output
   * @description Parameter defines the final output you want. It can be set to json (default) to get a structured `JSON` of the results, or `html` to get the raw html retrieved.
   * @default json
   */
  output: string | null;
  /**
   * Search Query
   * @description Parameter defines the search query. You can use anything that you would use in a regular YouTube search.
   */
  search_query?: string;
  /**
   * Sp
   * @description Parameter can be used for pagination. Youtube uses continous pagination and the next page token can be found in the SerpApi JSON response serpapi_pagination -> next_page_token and pagination -> next_page_token fields. Parameter can also be used to filter the search results by Upload date (CAI%3D), 4K (EgJwAQ%3D%3D), etc. It can also be used for forcing the exact search query spelling by setting the sp value to QgIIAQ%3D%3D.
   * @default null
   */
  sp: string | null;
  /**
   * Zero Trace
   * @description Enterprise only. Parameter enables ZeroTrace mode. It can be set to `false` (default) or `true`. Enable this mode to skip storing search parameters, search files, and search metadata on our servers. This may make debugging more difficult.
   * @default false
   */
  zero_trace: boolean | null;
};

/**
 * Type of SERPAPI's SERPAPI_YOU_TUBE_SEARCH tool output.
 */
type SERPAPI_YOU_TUBE_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ads Results
       * @description List of ad results.
       * @default null
       */
      ads_results: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Channel Results
       * @description List of channel results.
       * @default null
       */
      channel_results: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Error
       * @description Error message if the search failed.
       * @default null
       */
      error: string | null;
      /**
       * Movie Results
       * @description List of movie results.
       * @default null
       */
      movie_results: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Pagination
       * @description Pagination information.
       * @default null
       */
      pagination: {
          [key: string]: unknown;
      } | null;
      /**
       * Search Information
       * @description Information about the search results.
       * @default null
       */
      search_information: {
          [key: string]: unknown;
      } | null;
      /**
       * Search Metadata
       * @description Metadata about the search.
       * @default null
       */
      search_metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Search Parameters
       * @description Parameters used for the search.
       * @default null
       */
      search_parameters: {
          [key: string]: unknown;
      } | null;
      /**
       * Searches Related To Star Wars
       * @description Related searches.
       * @default null
       */
      searches_related_to_star_wars: {
          [key: string]: unknown;
      } | null;
      /**
       * Serpapi Pagination
       * @description SerpApi specific pagination information.
       * @default null
       */
      serpapi_pagination: {
          [key: string]: unknown;
      } | null;
      /**
       * Video Results
       * @description List of video results.
       * @default null
       */
      video_results: {
          [key: string]: unknown;
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
 * Type map of all available tool input types for toolkit "SERPAPI".
 */
export type SERPAPI_TOOL_INPUTS = {
  BAIDU_SEARCH: SERPAPI_BAIDU_SEARCH_INPUT
  BING_SEARCH: SERPAPI_BING_SEARCH_INPUT
  DUCK_DUCK_GO_SEARCH: SERPAPI_DUCK_DUCK_GO_SEARCH_INPUT
  EBAY_SEARCH: SERPAPI_EBAY_SEARCH_INPUT
  EVENT_SEARCH: SERPAPI_EVENT_SEARCH_INPUT
  FINANCE_SEARCH: SERPAPI_FINANCE_SEARCH_INPUT
  GOOGLE_DOMAINS_LIST: SERPAPI_GOOGLE_DOMAINS_LIST_INPUT
  GOOGLE_JOBS_SEARCH: SERPAPI_GOOGLE_JOBS_SEARCH_INPUT
  GOOGLE_LIGHT_SEARCH: SERPAPI_GOOGLE_LIGHT_SEARCH_INPUT
  GOOGLE_MAPS_SEARCH: SERPAPI_GOOGLE_MAPS_SEARCH_INPUT
  HOTEL_SEARCH: SERPAPI_HOTEL_SEARCH_INPUT
  IMAGE_SEARCH: SERPAPI_IMAGE_SEARCH_INPUT
  LOCATIONS_LIST: SERPAPI_LOCATIONS_LIST_INPUT
  NEWS_SEARCH: SERPAPI_NEWS_SEARCH_INPUT
  PLAY_SEARCH: SERPAPI_PLAY_SEARCH_INPUT
  SCHOLAR_SEARCH: SERPAPI_SCHOLAR_SEARCH_INPUT
  SEARCH: SERPAPI_SEARCH_INPUT
  SHOPPING_SEARCH: SERPAPI_SHOPPING_SEARCH_INPUT
  TRENDS_SEARCH: SERPAPI_TRENDS_SEARCH_INPUT
  WALMART_SEARCH: SERPAPI_WALMART_SEARCH_INPUT
  YAHOO_SEARCH: SERPAPI_YAHOO_SEARCH_INPUT
  YANDEX_SEARCH: SERPAPI_YANDEX_SEARCH_INPUT
  YOU_TUBE_SEARCH: SERPAPI_YOU_TUBE_SEARCH_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SERPAPI".
 */
export type SERPAPI_TOOL_OUTPUTS = {
  BAIDU_SEARCH: SERPAPI_BAIDU_SEARCH_OUTPUT
  BING_SEARCH: SERPAPI_BING_SEARCH_OUTPUT
  DUCK_DUCK_GO_SEARCH: SERPAPI_DUCK_DUCK_GO_SEARCH_OUTPUT
  EBAY_SEARCH: SERPAPI_EBAY_SEARCH_OUTPUT
  EVENT_SEARCH: SERPAPI_EVENT_SEARCH_OUTPUT
  FINANCE_SEARCH: SERPAPI_FINANCE_SEARCH_OUTPUT
  GOOGLE_DOMAINS_LIST: SERPAPI_GOOGLE_DOMAINS_LIST_OUTPUT
  GOOGLE_JOBS_SEARCH: SERPAPI_GOOGLE_JOBS_SEARCH_OUTPUT
  GOOGLE_LIGHT_SEARCH: SERPAPI_GOOGLE_LIGHT_SEARCH_OUTPUT
  GOOGLE_MAPS_SEARCH: SERPAPI_GOOGLE_MAPS_SEARCH_OUTPUT
  HOTEL_SEARCH: SERPAPI_HOTEL_SEARCH_OUTPUT
  IMAGE_SEARCH: SERPAPI_IMAGE_SEARCH_OUTPUT
  LOCATIONS_LIST: SERPAPI_LOCATIONS_LIST_OUTPUT
  NEWS_SEARCH: SERPAPI_NEWS_SEARCH_OUTPUT
  PLAY_SEARCH: SERPAPI_PLAY_SEARCH_OUTPUT
  SCHOLAR_SEARCH: SERPAPI_SCHOLAR_SEARCH_OUTPUT
  SEARCH: SERPAPI_SEARCH_OUTPUT
  SHOPPING_SEARCH: SERPAPI_SHOPPING_SEARCH_OUTPUT
  TRENDS_SEARCH: SERPAPI_TRENDS_SEARCH_OUTPUT
  WALMART_SEARCH: SERPAPI_WALMART_SEARCH_OUTPUT
  YAHOO_SEARCH: SERPAPI_YAHOO_SEARCH_OUTPUT
  YANDEX_SEARCH: SERPAPI_YANDEX_SEARCH_OUTPUT
  YOU_TUBE_SEARCH: SERPAPI_YOU_TUBE_SEARCH_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SERPAPI toolkit.
 */
export const SERPAPI = {
  slug: "serpapi",
  tools: {
    /**
     * Baidu search
     */
    BAIDU_SEARCH: "SERPAPI_BAIDU_SEARCH",
    /**
     * Retrieve bing search engine results. supports parameters for query, location, language, and device.
     */
    BING_SEARCH: "SERPAPI_BING_SEARCH",
    /**
     * Performs a duckduckgo search via serpapi to retrieve serp data, including organic results, ads, and structured information.
     */
    DUCK_DUCK_GO_SEARCH: "SERPAPI_DUCK_DUCK_GO_SEARCH",
    /**
     * Retrieve ebay search results. supports parameters like nkw (query), location, etc. returns product serp data in json format.
     */
    EBAY_SEARCH: "SERPAPI_EBAY_SEARCH",
    /**
     * Searches for events (e.g., concerts, festivals, conferences) by query, retrieving structured data from google's event search results via the serpapi google events engine.
     */
    EVENT_SEARCH: "SERPAPI_EVENT_SEARCH",
    /**
     * Retrieves structured financial information (e.g., company data, stock details, market trends, news) from google finance via serp api based on a query.
     */
    FINANCE_SEARCH: "SERPAPI_FINANCE_SEARCH",
    /**
     * Retrieve the list of supported google domains for search queries.
     */
    GOOGLE_DOMAINS_LIST: "SERPAPI_GOOGLE_DOMAINS_LIST",
    /**
     * Retrieve google jobs search results. supports parameters like q (query), location, etc. returns job serp data in json format.
     */
    GOOGLE_JOBS_SEARCH: "SERPAPI_GOOGLE_JOBS_SEARCH",
    /**
     * Retrieve google light search results. supports parameters like q (query), location, etc. returns lightweight serp data in json format.
     */
    GOOGLE_LIGHT_SEARCH: "SERPAPI_GOOGLE_LIGHT_SEARCH",
    /**
     * Performs a google maps search via serp api for a given query, optionally using specific gps coordinates and pagination, returning structured location data.
     */
    GOOGLE_MAPS_SEARCH: "SERPAPI_GOOGLE_MAPS_SEARCH",
    /**
     * Retrieve google hotel search results. supports parameters like q (query), location, etc. returns hotel serp data in json format.
     */
    HOTEL_SEARCH: "SERPAPI_HOTEL_SEARCH",
    /**
     * Searches google images via serp api for a given query, returning structured image results.
     */
    IMAGE_SEARCH: "SERPAPI_IMAGE_SEARCH",
    /**
     * List locations
     */
    LOCATIONS_LIST: "SERPAPI_LOCATIONS_LIST",
    /**
     * Searches google news (via serpapi, using the `tbm=nws` parameter) for articles matching a query; precise queries yield best results.
     */
    NEWS_SEARCH: "SERPAPI_NEWS_SEARCH",
    /**
     * Retrieve google play store search results. supports parameters like q (query), gl, hl, etc. returns app serp data in json format.
     */
    PLAY_SEARCH: "SERPAPI_PLAY_SEARCH",
    /**
     * Searches google scholar via serpapi for academic literature, papers, articles, and citations based on a query.
     */
    SCHOLAR_SEARCH: "SERPAPI_SCHOLAR_SEARCH",
    /**
     * Performs a real-time google search via the serp api for a non-empty query.
     */
    SEARCH: "SERPAPI_SEARCH",
    /**
     * Searches google shopping for a specific product or item to retrieve structured product listings.
     */
    SHOPPING_SEARCH: "SERPAPI_SHOPPING_SEARCH",
    /**
     * Fetches google trends data; the `query`'s format (single/multiple terms) must comply with the selected `data type` (see its field description for details).
     */
    TRENDS_SEARCH: "SERPAPI_TRENDS_SEARCH",
    /**
     * Retrieve walmart search results. supports parameters like query, location, store id, etc. returns product serp data in json format.
     */
    WALMART_SEARCH: "SERPAPI_WALMART_SEARCH",
    /**
     * Retrieve yahoo! search engine results. supports query, location, language, and device parameters.
     */
    YAHOO_SEARCH: "SERPAPI_YAHOO_SEARCH",
    /**
     * Retrieve yandex search results. supports parameters like text (query), location, etc. returns serp data in json format.
     */
    YANDEX_SEARCH: "SERPAPI_YANDEX_SEARCH",
    /**
     * Retrieve youtube search results. supports parameters like search query, location, etc. returns video serp data in json format.
     */
    YOU_TUBE_SEARCH: "SERPAPI_YOU_TUBE_SEARCH",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SERPAPI".
 */
export type SERPAPI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SERPAPI".
 */
export type SERPAPI_TRIGGER_EVENTS = {}
