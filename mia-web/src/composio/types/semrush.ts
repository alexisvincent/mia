// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SEMRUSH's SEMRUSH_ADS_COPIES tool input.
 */
type SEMRUSH_ADS_COPIES_INPUT = {
  /**
   * Database
   * @description Regional database code.
   * @enum {string}
   */
  database?: "us" | "uk" | "ca" | "ru" | "de" | "fr" | "es" | "it" | "br" | "au" | "ar" | "be" | "ch" | "dk" | "fi" | "hk" | "ie" | "il" | "mx" | "nl" | "no" | "pl" | "se" | "sg" | "tr" | "jp" | "in" | "hu" | "af" | "al" | "dz" | "ao" | "am" | "at" | "az" | "bh" | "bd" | "by" | "bz" | "bo" | "ba" | "bw" | "bn" | "bg" | "cv" | "kh" | "cm" | "cl" | "co" | "cr" | "hr" | "cy" | "cz" | "cd" | "do" | "ec" | "eg" | "sv" | "ee" | "et" | "ge" | "gh" | "gr" | "gt" | "gy" | "ht" | "hn" | "is" | "id" | "jm" | "jo" | "kz" | "kw" | "lv" | "lb" | "lt" | "lu" | "mg" | "my" | "mt" | "mu" | "md" | "mn" | "me" | "ma" | "mz" | "na" | "np" | "nz" | "ni" | "ng" | "om" | "py" | "pe" | "ph" | "pt" | "ro" | "sa" | "sn" | "rs" | "sk" | "si" | "za" | "kr" | "lk" | "th" | "bs" | "tt" | "tn" | "ua" | "ae" | "uy" | "ve" | "vn" | "zm" | "zw" | "ly" | "mobile-us" | "mobile-uk" | "mobile-ca" | "mobile-de" | "mobile-fr" | "mobile-es" | "mobile-it" | "mobile-br" | "mobile-au" | "mobile-dk" | "mobile-mx" | "mobile-nl" | "mobile-se" | "mobile-tr" | "mobile-in" | "mobile-id" | "mobile-il" | "il-ext" | "tr-ext" | "dk-ext" | "no-ext" | "se-ext" | "fi-ext" | "ch-ext" | "mobile-il-ext" | "pa" | "pk" | "tw" | "qa";
  /**
   * Display Filter
   * @description Ad components to filter on. Supported: Tt (Ad Title), Ds (Ad Description), Vu (Visible URL).
   * @default []
   */
  display_filter: string[];
  /**
   * Display Limit
   * @description Maximum number of ad copies to return.
   * @default 10000
   */
  display_limit: number;
  /**
   * Display Offset
   * @description Number of initial ad copies to skip for pagination.
   * @default 0
   */
  display_offset: number;
  /**
   * Display Sort
   * @description Sort order for results by ad position.
   * @default pc_desc
   * @enum {string}
   */
  display_sort: "pc_asc" | "pc_desc";
  /**
   * Domain
   * @description Domain name to investigate for ad copies.
   */
  domain?: string;
  /**
   * Export Columns
   * @description Columns to include. If omitted, all are returned. Available: Ph (Keyword phrase), Un (Unique ad identifier), Tt (Ad Title), Ds (Ad Description), Vu (Visible URL), Ur (Destination URL), Pc (Ad Position), Ts (Timestamp last seen).
   * @default [
   *       "Ph",
   *       "Un",
   *       "Tt",
   *       "Ds",
   *       "Vu",
   *       "Ur",
   *       "Pc",
   *       "Ts"
   *     ]
   */
  export_columns: string[];
  /**
   * Export Decode
   * @description Set 1 for decoded response, 0 for URL-encoded.
   * @default 1
   * @enum {integer}
   */
  export_decode: 0 | 1;
  /**
   * Export Escape
   * @description Set 1 to wrap report columns in double quotation marks ("), 0 for unescaped.
   * @default 1
   * @enum {integer}
   */
  export_escape: 0 | 1;
};

/**
 * Type of SEMRUSH's SEMRUSH_ADS_COPIES tool output.
 */
type SEMRUSH_ADS_COPIES_OUTPUT = {
  /**
   * Data
   * @description String containing the ad copies report, typically CSV-like.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_ANCHORS tool input.
 */
type SEMRUSH_ANCHORS_INPUT = {
  /**
   * Display Limit
   * @description Maximum number of anchor text entries to return.
   * @default 10000
   */
  display_limit: number;
  /**
   * Display Offset
   * @description Number of anchor text entries to skip for pagination.
   * @default 0
   */
  display_offset: number;
  /**
   * Display Sort
   * @description Sorting criteria for the report; defaults to `domains_num_desc` (most referring domains first).
   * @default domains_num_desc
   * @enum {string}
   */
  display_sort: "domains_num_asc" | "domains_num_desc" | "backlinks_num_asc" | "backlinks_num_desc" | "first_seen_asc" | "first_seen_desc" | "last_seen_asc" | "last_seen_desc";
  /**
   * Export Columns
   * @description Columns to include in the report; defaults to all available columns if omitted.
   * @default [
   *       "anchor",
   *       "domains_num",
   *       "backlinks_num",
   *       "first_seen",
   *       "last_seen"
   *     ]
   */
  export_columns: string[];
  /**
   * Target
   * @description Domain, root domain, or URL to analyze for its backlink anchor texts.
   */
  target?: string;
  /**
   * Target Type
   * @description Specifies if the 'target' is a 'root_domain', 'domain', or 'url'.
   * @enum {string}
   */
  target_type?: "root_domain" | "domain" | "url";
};

/**
 * Type of SEMRUSH's SEMRUSH_ANCHORS tool output.
 */
type SEMRUSH_ANCHORS_OUTPUT = {
  /**
   * Data
   * @description Anchor text report data as a CSV-formatted string.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_AUTHORITY_SCORE_PROFILE tool input.
 */
type SEMRUSH_AUTHORITY_SCORE_PROFILE_INPUT = {
  /**
   * Target
   * @description The target entity (URL, domain, or root domain) for which to retrieve the Authority Score profile. For example, 'example.com', 'https://example.com/blog', or 'blog.example.com'.
   */
  target?: string;
  /**
   * Target Type
   * @description Specifies the type of the `target`. Valid options are 'root_domain' (e.g., 'example.com'), 'domain' (e.g., 'blog.example.com', which can be a subdomain), or 'url' (a specific page like 'https://example.com/article').
   * @enum {string}
   */
  target_type?: "root_domain" | "domain" | "url";
};

/**
 * Type of SEMRUSH's SEMRUSH_AUTHORITY_SCORE_PROFILE tool output.
 */
type SEMRUSH_AUTHORITY_SCORE_PROFILE_OUTPUT = {
  /**
   * Data
   * @description A string (typically JSON formatted) representing the Authority Score profile. This data details the distribution of referring domains by their Authority Score (0-100), showing the count of domains for each score value that link to the target.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_BACKLINKS tool input.
 */
type SEMRUSH_BACKLINKS_INPUT = {
  /**
   * Display Filter
   * @description Filters to apply for refining backlink results (e.g., `['newlink']` for new, `['lostlink']` for lost).
   * @default []
   */
  display_filter: string[];
  /**
   * Display Limit
   * @description Maximum number of backlinks to retrieve. If set to 0, it defaults to 10,000. The actual number returned is `max(0, display_limit - display_offset)`.
   * @default 0
   */
  display_limit: number;
  /**
   * Display Offset
   * @description Number of initial backlinks to skip. To get N backlinks after offset O, set `display_offset` to O and `display_limit` to O+N.
   * @default 0
   */
  display_offset: number;
  /**
   * Display Sort
   * @description Column and order for sorting backlink results.
   * @default page_ascore_desc
   * @enum {string}
   */
  display_sort: "page_ascore_asc" | "page_ascore_desc" | "last_seen_asc" | "last_seen_desc" | "first_seen_asc" | "first_seen_desc";
  /**
   * Export Columns
   * @description Columns to include in the exported backlink data. Defaults to all available columns if not specified. An empty list may result in API-specific default columns or an error.
   * @default [
   *       "page_ascore",
   *       "response_code",
   *       "source_size",
   *       "external_num",
   *       "internal_num",
   *       "redirect_url",
   *       "source_url",
   *       "source_title",
   *       "image_url",
   *       "target_url",
   *       "target_title",
   *       "anchor",
   *       "image_alt",
   *       "last_seen",
   *       "first_seen",
   *       "nofollow",
   *       "form",
   *       "frame",
   *       "image",
   *       "sitewide",
   *       "newlink",
   *       "lostlink"
   *     ]
   */
  export_columns: string[];
  /**
   * Target
   * @description The target for which to retrieve backlink data. This can be a root domain, a subdomain, or a specific URL.
   */
  target?: string;
  /**
   * Target Type
   * @description The type of the specified target. Must be one of 'root_domain' (e.g., 'example.com'), 'domain' (e.g., 'sub.example.com', includes subdomains), or 'url' (a specific page address).
   * @enum {string}
   */
  target_type?: "root_domain" | "domain" | "url";
};

/**
 * Type of SEMRUSH's SEMRUSH_BACKLINKS tool output.
 */
type SEMRUSH_BACKLINKS_OUTPUT = {
  /**
   * Data
   * @description A CSV-formatted string of backlink data; columns are determined by `export_columns` or API defaults.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_BACKLINKS_OVERVIEW tool input.
 */
type SEMRUSH_BACKLINKS_OVERVIEW_INPUT = {
  /**
   * Export Columns
   * @description Specifies columns for the CSV output. If omitted, all columns from `ExportColumns` are included. For available column names, see the `ExportColumns` enum.
   * @default [
   *       "ascore",
   *       "total",
   *       "domains_num",
   *       "urls_num",
   *       "ips_num",
   *       "ipclassc_num",
   *       "follows_num",
   *       "nofollows_num",
   *       "sponsored_num",
   *       "ugc_num",
   *       "texts_num",
   *       "images_num",
   *       "forms_num",
   *       "frames_num"
   *     ]
   */
  export_columns: string[];
  /**
   * Target
   * @description The domain (e.g., 'example.com'), subdomain (e.g., 'blog.example.com'), or URL (e.g., 'https://example.com/page') for backlink analysis.
   */
  target?: string;
  /**
   * Target Type
   * @description The type of the `target` (e.g., 'root_domain', 'domain', 'url').
   * @enum {string}
   */
  target_type?: "root_domain" | "domain" | "url";
};

/**
 * Type of SEMRUSH's SEMRUSH_BACKLINKS_OVERVIEW tool output.
 */
type SEMRUSH_BACKLINKS_OVERVIEW_OUTPUT = {
  /**
   * Data
   * @description CSV formatted string with the backlinks overview. Columns are determined by `export_columns`; each row represents a backlink.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_BATCH_COMPARISON tool input.
 */
type SEMRUSH_BATCH_COMPARISON_INPUT = {
  /**
   * Export Columns
   * @description Specific columns to include in the report. Defaults to all columns. An empty list may result in specific API behavior, like returning a default or minimal set of columns.
   * @default [
   *       "target",
   *       "target_type",
   *       "ascore",
   *       "backlinks_num",
   *       "domains_num",
   *       "ips_num",
   *       "follows_num",
   *       "nofollows_num",
   *       "texts_num",
   *       "images_num",
   *       "forms_num",
   *       "frames_num"
   *     ]
   */
  export_columns: string[];
  /**
   * Target Types
   * @description Specifies the type for each corresponding target in 'targets'. Ensure this list aligns with 'targets' in order and count for accurate processing.
   */
  target_types?: string[];
  /**
   * Targets
   * @description A list of target domains, subdomains, or URLs for which to retrieve backlink comparison data.
   */
  targets?: string[];
};

/**
 * Type of SEMRUSH's SEMRUSH_BATCH_COMPARISON tool output.
 */
type SEMRUSH_BATCH_COMPARISON_OUTPUT = {
  /**
   * Data
   * @description Batch comparison data as a raw string, typically JSON formatted. The structure is determined by the requested 'export_columns' and 'targets'.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_BATCH_KEYWORD_OVERVIEW tool input.
 */
type SEMRUSH_BATCH_KEYWORD_OVERVIEW_INPUT = {
  /**
   * Database
   * @description The Semrush regional database to use for the analysis (e.g., 'us', 'gb', 'de'). Refer to Semrush API documentation for a full list of available databases.
   * @enum {string}
   */
  database?: "us" | "uk" | "ca" | "ru" | "de" | "fr" | "es" | "it" | "br" | "au" | "ar" | "be" | "ch" | "dk" | "fi" | "hk" | "ie" | "il" | "mx" | "nl" | "no" | "pl" | "se" | "sg" | "tr" | "jp" | "in" | "hu" | "af" | "al" | "dz" | "ao" | "am" | "at" | "az" | "bh" | "bd" | "by" | "bz" | "bo" | "ba" | "bw" | "bn" | "bg" | "cv" | "kh" | "cm" | "cl" | "co" | "cr" | "hr" | "cy" | "cz" | "cd" | "do" | "ec" | "eg" | "sv" | "ee" | "et" | "ge" | "gh" | "gr" | "gt" | "gy" | "ht" | "hn" | "is" | "id" | "jm" | "jo" | "kz" | "kw" | "lv" | "lb" | "lt" | "lu" | "mg" | "my" | "mt" | "mu" | "md" | "mn" | "me" | "ma" | "mz" | "na" | "np" | "nz" | "ni" | "ng" | "om" | "py" | "pe" | "ph" | "pt" | "ro" | "sa" | "sn" | "rs" | "sk" | "si" | "za" | "kr" | "lk" | "th" | "bs" | "tt" | "tn" | "ua" | "ae" | "uy" | "ve" | "vn" | "zm" | "zw" | "ly" | "mobile-us" | "mobile-uk" | "mobile-ca" | "mobile-de" | "mobile-fr" | "mobile-es" | "mobile-it" | "mobile-br" | "mobile-au" | "mobile-dk" | "mobile-mx" | "mobile-nl" | "mobile-se" | "mobile-tr" | "mobile-in" | "mobile-id" | "mobile-il" | "il-ext" | "tr-ext" | "dk-ext" | "no-ext" | "se-ext" | "fi-ext" | "ch-ext" | "mobile-il-ext" | "pa" | "pk" | "tw" | "qa";
  /**
   * Display Date
   * @description Date in "YYYYMM15" format for past month data (e.g., "20231215"); uses most recent data if omitted.
   */
  display_date?: string;
  /**
   * Export Columns
   * @description Specific columns for the report (e.g., Ph, Nq); defaults to all if omitted. Available columns:
   *     - Ph: Keyword/Phrase analyzed.
   *     - Nq: Search Volume (avg. monthly queries).
   *     - Cp: Cost-Per-Click (avg. CPC).
   *     - Co: Competition level of advertisers.
   *     - Nr: Number of URLs in organic results.
   *     - Td: Search volume trend (last 12 months).
   *     - In: Searcher intent (informational, navigational, commercial, transactional).
   *     - Kd: Keyword Difficulty score.
   * @default [
   *       "Ph",
   *       "Nq",
   *       "Cp",
   *       "Co",
   *       "Nr",
   *       "Td",
   *       "In",
   *       "Kd"
   *     ]
   */
  export_columns: string[];
  /**
   * Export Decode
   * @description Set to 0 for URL-encoded response, or 1 for plain text (non-converted) response.
   * @default 1
   * @enum {integer}
   */
  export_decode: 0 | 1;
  /**
   * Export Escape
   * @description Set to 1 to wrap report columns in double quotation marks ("), or 0 to disable.
   * @default 1
   * @enum {integer}
   */
  export_escape: 0 | 1;
  /**
   * Phrase
   * @description Up to 100 keywords to analyze, separated by newline characters ('\n'). For a single keyword, no newline character is needed.
   */
  phrase?: string;
};

/**
 * Type of SEMRUSH's SEMRUSH_BATCH_KEYWORD_OVERVIEW tool output.
 */
type SEMRUSH_BATCH_KEYWORD_OVERVIEW_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Keyword Data
       * @description A string containing the keyword overview data, typically in a delimited format (e.g., CSV-like). The content and structure are determined by the request's export parameters. Each line in the string usually corresponds to a keyword.
       */
      keyword_data: string;
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
 * Type of SEMRUSH's SEMRUSH_BROAD_MATCH_KEYWORD tool input.
 */
type SEMRUSH_BROAD_MATCH_KEYWORD_INPUT = {
  /**
   * Database
   * @description Regional database for keyword research (e.g., 'us' for United States, 'gb' for United Kingdom).
   * @enum {string}
   */
  database?: "us" | "uk" | "ca" | "ru" | "de" | "fr" | "es" | "it" | "br" | "au" | "ar" | "be" | "ch" | "dk" | "fi" | "hk" | "ie" | "il" | "mx" | "nl" | "no" | "pl" | "se" | "sg" | "tr" | "jp" | "in" | "hu" | "af" | "al" | "dz" | "ao" | "am" | "at" | "az" | "bh" | "bd" | "by" | "bz" | "bo" | "ba" | "bw" | "bn" | "bg" | "cv" | "kh" | "cm" | "cl" | "co" | "cr" | "hr" | "cy" | "cz" | "cd" | "do" | "ec" | "eg" | "sv" | "ee" | "et" | "ge" | "gh" | "gr" | "gt" | "gy" | "ht" | "hn" | "is" | "id" | "jm" | "jo" | "kz" | "kw" | "lv" | "lb" | "lt" | "lu" | "mg" | "my" | "mt" | "mu" | "md" | "mn" | "me" | "ma" | "mz" | "na" | "np" | "nz" | "ni" | "ng" | "om" | "py" | "pe" | "ph" | "pt" | "ro" | "sa" | "sn" | "rs" | "sk" | "si" | "za" | "kr" | "lk" | "th" | "bs" | "tt" | "tn" | "ua" | "ae" | "uy" | "ve" | "vn" | "zm" | "zw" | "ly" | "mobile-us" | "mobile-uk" | "mobile-ca" | "mobile-de" | "mobile-fr" | "mobile-es" | "mobile-it" | "mobile-br" | "mobile-au" | "mobile-dk" | "mobile-mx" | "mobile-nl" | "mobile-se" | "mobile-tr" | "mobile-in" | "mobile-id" | "mobile-il" | "il-ext" | "tr-ext" | "dk-ext" | "no-ext" | "se-ext" | "fi-ext" | "ch-ext" | "mobile-il-ext" | "pa" | "pk" | "tw" | "qa";
  /**
   * Display Date
   * @description Date in "YYYYMM15" format (e.g., "20231215") for historical data. If omitted or empty, most recent data is returned.
   */
  display_date?: string;
  /**
   * Display Filter
   * @description Filter conditions for results, from predefined criteria. Behavior depends on API interpretation of these values.
   * @default []
   */
  display_filter: string[];
  /**
   * Display Limit
   * @description Maximum number of results. The API interprets a value of 0 as the default (10,000). Max: 100,000.
   * @default 10000
   */
  display_limit: number;
  /**
   * Display Offset
   * @description Number of results to skip from the beginning of the list for pagination.
   * @default 0
   */
  display_offset: number;
  /**
   * Display Sort
   * @description Column and order to sort results (e.g., 'nq_desc' for Search Volume descending).
   * @default nq_desc
   * @enum {string}
   */
  display_sort: "nq_asc" | "nq_desc" | "cp_asc" | "cp_desc" | "co_asc" | "co_desc" | "nr_asc" | "nr_desc" | "kd_asc" | "kd_desc";
  /**
   * Export Columns
   * @description Specific columns to include in the report (e.g., 'Ph' for Phrase). If not specified, all default columns are returned.
   * @default [
   *       "Ph",
   *       "Nq",
   *       "Cp",
   *       "Co",
   *       "Nr",
   *       "Td",
   *       "Fk",
   *       "In",
   *       "Kd"
   *     ]
   */
  export_columns: string[];
  /**
   * Export Decode
   * @description If 1 (default), returns a raw text response; 0 for a URL-encoded string.
   * @default 1
   * @enum {integer}
   */
  export_decode: 0 | 1;
  /**
   * Export Escape
   * @description If 1 (default), wraps CSV columns in double quotes; 0 disables. Applies if output is CSV-like.
   * @default 1
   * @enum {integer}
   */
  export_escape: 0 | 1;
  /**
   * Phrase
   * @description Keyword, phrase, or expression to investigate for broad matches and alternative search queries.
   */
  phrase?: string;
};

/**
 * Type of SEMRUSH's SEMRUSH_BROAD_MATCH_KEYWORD tool output.
 */
type SEMRUSH_BROAD_MATCH_KEYWORD_OUTPUT = {
  /**
   * Data
   * @description The API response data, typically in a text/CSV format, containing the broad match keyword report.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_CATEGORIES tool input.
 */
type SEMRUSH_CATEGORIES_INPUT = {
  /**
   * Display Limit
   * @description Maximum results to return. Note: if set to 0 (the field's default), the API service will default to returning 10,000 lines.
   * @default 0
   */
  display_limit: number;
  /**
   * Display Offset
   * @description Number of initial results to skip. To maintain desired fetched records after offset, increase `display_limit` by this value.
   * @default 0
   */
  display_offset: number;
  /**
   * Export Columns
   * @description List of columns for the output. Defaults to all available columns if this list is empty or not provided.
   * @default [
   *       "category_name",
   *       "rating"
   *     ]
   */
  export_columns: string[];
  /**
   * Target
   * @description Domain, subdomain, or URL to analyze for category information.
   */
  target?: string;
  /**
   * Target Type
   * @description Type of the target being analyzed.
   * @enum {string}
   */
  target_type?: "root_domain" | "domain" | "url";
};

/**
 * Type of SEMRUSH's SEMRUSH_CATEGORIES tool output.
 */
type SEMRUSH_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Text-based table or CSV-formatted string with categories and their 0-1 confidence ratings for the target, sorted by rating descending.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_CATEGORIES_PROFILE tool input.
 */
type SEMRUSH_CATEGORIES_PROFILE_INPUT = {
  /**
   * Display Limit
   * @description Maximum results to return. If 0 (default), 10,000 lines are returned. Max: 1,000,000.
   * @default 0
   */
  display_limit: number;
  /**
   * Display Offset
   * @description Number of initial results to skip; `display_limit` should be `offset + desired_results` (e.g., for 100 results from 51st, `display_offset=50`, `display_limit=150`).
   * @default 0
   */
  display_offset: number;
  /**
   * Export Columns
   * @description Columns to include in the report; defaults to all available columns.
   * @default [
   *       "category_name",
   *       "rating"
   *     ]
   */
  export_columns: string[];
  /**
   * Target
   * @description The target URL, domain, or root domain for which to retrieve categories profile data.
   */
  target?: string;
  /**
   * Target Type
   * @description Type of the target.
   * @enum {string}
   */
  target_type?: "root_domain" | "domain" | "url";
};

/**
 * Type of SEMRUSH's SEMRUSH_CATEGORIES_PROFILE tool output.
 */
type SEMRUSH_CATEGORIES_PROFILE_OUTPUT = {
  /**
   * Data
   * @description The categories profile data, returned as a text string, typically in CSV format. Each line details a category and the count of referring domains in that category which link to the queried target.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_COMPETITORS tool input.
 */
type SEMRUSH_COMPETITORS_INPUT = {
  /**
   * Display Limit
   * @description Maximum number of competitors to return.
   * @default 10000
   */
  display_limit: number;
  /**
   * Display Offset
   * @description Number of results to skip for pagination.
   * @default 0
   */
  display_offset: number;
  /**
   * Display Sort
   * @description Sort order for the competitors list.
   * @default common_backlinks_num_desc
   * @enum {string}
   */
  display_sort: "common_backlinks_num_asc" | "common_backlinks_num_desc" | "common_referring_domains_num_asc" | "common_referring_domains_num_desc";
  /**
   * Export Columns
   * @description Columns to include in the CSV report; defaults to all available columns if empty or omitted.
   * @default [
   *       "ascore",
   *       "neighbour",
   *       "similarity",
   *       "common_refdomains",
   *       "domains_num",
   *       "backlinks_num"
   *     ]
   */
  export_columns: string[];
  /**
   * Target
   * @description The domain, subdomain, or URL to analyze for competitors.
   */
  target?: string;
  /**
   * Target Type
   * @description Type of the target: 'root_domain', 'domain', or 'url'.
   * @enum {string}
   */
  target_type?: "root_domain" | "domain" | "url";
};

/**
 * Type of SEMRUSH's SEMRUSH_COMPETITORS tool output.
 */
type SEMRUSH_COMPETITORS_OUTPUT = {
  /**
   * Data
   * @description Competitor data in CSV string format, with columns determined by the `export_columns` request parameter.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_COMPETITORS_IN_ORGANIC_SEARCH tool input.
 */
type SEMRUSH_COMPETITORS_IN_ORGANIC_SEARCH_INPUT = {
  /**
   * Database
   * @description Regional database for analysis (e.g., 'us', 'gb'). See Semrush docs for all databases.
   * @enum {string}
   */
  database?: "us" | "uk" | "ca" | "ru" | "de" | "fr" | "es" | "it" | "br" | "au" | "ar" | "be" | "ch" | "dk" | "fi" | "hk" | "ie" | "il" | "mx" | "nl" | "no" | "pl" | "se" | "sg" | "tr" | "jp" | "in" | "hu" | "af" | "al" | "dz" | "ao" | "am" | "at" | "az" | "bh" | "bd" | "by" | "bz" | "bo" | "ba" | "bw" | "bn" | "bg" | "cv" | "kh" | "cm" | "cl" | "co" | "cr" | "hr" | "cy" | "cz" | "cd" | "do" | "ec" | "eg" | "sv" | "ee" | "et" | "ge" | "gh" | "gr" | "gt" | "gy" | "ht" | "hn" | "is" | "id" | "jm" | "jo" | "kz" | "kw" | "lv" | "lb" | "lt" | "lu" | "mg" | "my" | "mt" | "mu" | "md" | "mn" | "me" | "ma" | "mz" | "na" | "np" | "nz" | "ni" | "ng" | "om" | "py" | "pe" | "ph" | "pt" | "ro" | "sa" | "sn" | "rs" | "sk" | "si" | "za" | "kr" | "lk" | "th" | "bs" | "tt" | "tn" | "ua" | "ae" | "uy" | "ve" | "vn" | "zm" | "zw" | "ly" | "mobile-us" | "mobile-uk" | "mobile-ca" | "mobile-de" | "mobile-fr" | "mobile-es" | "mobile-it" | "mobile-br" | "mobile-au" | "mobile-dk" | "mobile-mx" | "mobile-nl" | "mobile-se" | "mobile-tr" | "mobile-in" | "mobile-id" | "mobile-il" | "il-ext" | "tr-ext" | "dk-ext" | "no-ext" | "se-ext" | "fi-ext" | "ch-ext" | "mobile-il-ext" | "pa" | "pk" | "tw" | "qa";
  /**
   * Display Date
   * @description Snapshot date for data retrieval in 'YYYYMM15' format (e.g., '20231015'); defaults to latest period if omitted.
   */
  display_date?: string;
  /**
   * Display Limit
   * @description Maximum results to return. Use with `display_offset` for >100,000 results.
   * @default 10000
   */
  display_limit: number;
  /**
   * Display Offset
   * @description Number of initial results to skip; for pagination with `display_limit`.
   * @default 0
   */
  display_offset: number;
  /**
   * Display Sort
   * @description Sort column and order. Defaults to common keywords, descending.
   * @default np_desc
   * @enum {string}
   */
  display_sort: "np_asc" | "np_desc" | "cr_asc" | "cr_desc";
  /**
   * Domain
   * @description Domain to investigate (e.g., 'example.com').
   */
  domain?: string;
  /**
   * Export Columns
   * @description Data columns to include; defaults to all. See `CompetitorsInOrganicSearchExportColumns` for codes.
   * @default [
   *       "Dn",
   *       "Cr",
   *       "Np",
   *       "Or",
   *       "Ot",
   *       "Oc",
   *       "Ad",
   *       "Sr",
   *       "St",
   *       "Sc"
   *     ]
   */
  export_columns: string[];
  /**
   * Export Decode
   * @description Set to 0 for URL-encoded response, 1 for no URL-encoding.
   * @default 1
   * @enum {integer}
   */
  export_decode: 0 | 1;
  /**
   * Export Escape
   * @description Set to 1 to wrap output values in double quotes, 0 to disable.
   * @default 1
   * @enum {integer}
   */
  export_escape: 0 | 1;
};

/**
 * Type of SEMRUSH's SEMRUSH_COMPETITORS_IN_ORGANIC_SEARCH tool output.
 */
type SEMRUSH_COMPETITORS_IN_ORGANIC_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Competitor data as a string, typically semicolon-separated values. Format affected by `export_decode` and `export_escape`.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_COMPETITORS_IN_PAID_SEARCH tool input.
 */
type SEMRUSH_COMPETITORS_IN_PAID_SEARCH_INPUT = {
  /**
   * Database
   * @description Regional database to query. For available databases, see Semrush API documentation.
   * @enum {string}
   */
  database?: "us" | "uk" | "ca" | "ru" | "de" | "fr" | "es" | "it" | "br" | "au" | "ar" | "be" | "ch" | "dk" | "fi" | "hk" | "ie" | "il" | "mx" | "nl" | "no" | "pl" | "se" | "sg" | "tr" | "jp" | "in" | "hu" | "af" | "al" | "dz" | "ao" | "am" | "at" | "az" | "bh" | "bd" | "by" | "bz" | "bo" | "ba" | "bw" | "bn" | "bg" | "cv" | "kh" | "cm" | "cl" | "co" | "cr" | "hr" | "cy" | "cz" | "cd" | "do" | "ec" | "eg" | "sv" | "ee" | "et" | "ge" | "gh" | "gr" | "gt" | "gy" | "ht" | "hn" | "is" | "id" | "jm" | "jo" | "kz" | "kw" | "lv" | "lb" | "lt" | "lu" | "mg" | "my" | "mt" | "mu" | "md" | "mn" | "me" | "ma" | "mz" | "na" | "np" | "nz" | "ni" | "ng" | "om" | "py" | "pe" | "ph" | "pt" | "ro" | "sa" | "sn" | "rs" | "sk" | "si" | "za" | "kr" | "lk" | "th" | "bs" | "tt" | "tn" | "ua" | "ae" | "uy" | "ve" | "vn" | "zm" | "zw" | "ly" | "mobile-us" | "mobile-uk" | "mobile-ca" | "mobile-de" | "mobile-fr" | "mobile-es" | "mobile-it" | "mobile-br" | "mobile-au" | "mobile-dk" | "mobile-mx" | "mobile-nl" | "mobile-se" | "mobile-tr" | "mobile-in" | "mobile-id" | "mobile-il" | "il-ext" | "tr-ext" | "dk-ext" | "no-ext" | "se-ext" | "fi-ext" | "ch-ext" | "mobile-il-ext" | "pa" | "pk" | "tw" | "qa";
  /**
   * Display Date
   * @description Date for data retrieval (YYYYMM15 for monthly). If unspecified, API uses latest daily ranking data.
   */
  display_date?: string;
  /**
   * Display Limit
   * @description Maximum number of results. The API typically returns up to 100,000 per request; use with `display_offset` to retrieve more.
   * @default 10000
   */
  display_limit: number;
  /**
   * Display Offset
   * @description Number of results to skip. The sum of `display_limit` and `display_offset` must not exceed 4,000,000.
   * @default 0
   */
  display_offset: number;
  /**
   * Display Sort
   * @description Sort column and order. Default: 'np_desc' (Common Paid Keywords, descending). Options: 'np_asc', 'np_desc', 'cr_asc', 'cr_desc'.
   * @default np_desc
   * @enum {string}
   */
  display_sort: "np_asc" | "np_desc" | "cr_asc" | "cr_desc";
  /**
   * Domain
   * @description Domain name to investigate (e.g., 'example.com').
   */
  domain?: string;
  /**
   * Export Columns
   * @description Columns for the report. Defaults to all. Options: Dn (Domain Name), Cr (Competition Level), Np (Common Paid Keywords), Ad (Paid Keywords), At (Paid Search Traffic), Ac (Paid Search Traffic Cost), Or (Common Organic Keywords).
   * @default [
   *       "Dn",
   *       "Cr",
   *       "Np",
   *       "Ad",
   *       "At",
   *       "Ac",
   *       "Or"
   *     ]
   */
  export_columns: string[];
  /**
   * Export Decode
   * @description Set to 1 for a decoded response; 0 for a URL-encoded string.
   * @default 1
   * @enum {integer}
   */
  export_decode: 0 | 1;
  /**
   * Export Escape
   * @description Set to 1 to wrap columns in double quotes ("); 0 to disable.
   * @default 1
   * @enum {integer}
   */
  export_escape: 0 | 1;
};

/**
 * Type of SEMRUSH's SEMRUSH_COMPETITORS_IN_PAID_SEARCH tool output.
 */
type SEMRUSH_COMPETITORS_IN_PAID_SEARCH_OUTPUT = {
  /**
   * Data
   * @description The API response data, typically in a CSV-like string format.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_DOMAIN_AD_HISTORY tool input.
 */
type SEMRUSH_DOMAIN_AD_HISTORY_INPUT = {
  /**
   * Database
   * @description Regional database to use (e.g., 'us'). Link: https://developer.semrush.com/api/v3/analytics/basic-docs/#databases
   * @enum {string}
   */
  database?: "us" | "uk" | "ca" | "ru" | "de" | "fr" | "es" | "it" | "br" | "au" | "ar" | "be" | "ch" | "dk" | "fi" | "hk" | "ie" | "il" | "mx" | "nl" | "no" | "pl" | "se" | "sg" | "tr" | "jp" | "in" | "hu" | "af" | "al" | "dz" | "ao" | "am" | "at" | "az" | "bh" | "bd" | "by" | "bz" | "bo" | "ba" | "bw" | "bn" | "bg" | "cv" | "kh" | "cm" | "cl" | "co" | "cr" | "hr" | "cy" | "cz" | "cd" | "do" | "ec" | "eg" | "sv" | "ee" | "et" | "ge" | "gh" | "gr" | "gt" | "gy" | "ht" | "hn" | "is" | "id" | "jm" | "jo" | "kz" | "kw" | "lv" | "lb" | "lt" | "lu" | "mg" | "my" | "mt" | "mu" | "md" | "mn" | "me" | "ma" | "mz" | "na" | "np" | "nz" | "ni" | "ng" | "om" | "py" | "pe" | "ph" | "pt" | "ro" | "sa" | "sn" | "rs" | "sk" | "si" | "za" | "kr" | "lk" | "th" | "bs" | "tt" | "tn" | "ua" | "ae" | "uy" | "ve" | "vn" | "zm" | "zw" | "ly" | "mobile-us" | "mobile-uk" | "mobile-ca" | "mobile-de" | "mobile-fr" | "mobile-es" | "mobile-it" | "mobile-br" | "mobile-au" | "mobile-dk" | "mobile-mx" | "mobile-nl" | "mobile-se" | "mobile-tr" | "mobile-in" | "mobile-id" | "mobile-il" | "il-ext" | "tr-ext" | "dk-ext" | "no-ext" | "se-ext" | "fi-ext" | "ch-ext" | "mobile-il-ext" | "pa" | "pk" | "tw" | "qa";
  /**
   * Display Filter
   * @description Filters using column identifiers (e.g., `Ph`). Semrush's API may expect `+Column|Operator|Value` format (e.g., `+Ph|Ct|semrush`); consult Semrush documentation. Simplified filterable columns available: Ph (Keyword), Nq (Num. keywords), Cp (CPC), Tr (Traffic %).
   * @default []
   */
  display_filter: string[];
  /**
   * Display Limit
   * @description Number of results for the current request (typically up to 100k). For larger datasets, use with `display_offset`. Cumulative `display_limit` with offset should not exceed 4,000,000.
   * @default 10000
   */
  display_limit: number;
  /**
   * Display Offset
   * @description Number of initial results to skip for pagination. When fetching beyond 100k, `display_limit` might need to reflect `current_offset + desired_rows_for_this_page` per Semrush guidance.
   * @default 0
   */
  display_offset: number;
  /**
   * Display Sort
   * @description Sort order for results: `cv_asc` (Costs % ascending), `cv_desc` (Costs % descending).
   * @default cv_desc
   * @enum {string}
   */
  display_sort: "cv_asc" | "cv_desc";
  /**
   * Domain
   * @description Website name (e.g., 'example.com') to investigate.
   */
  domain?: string;
  /**
   * Export Columns
   * @description Data columns to include (e.g., `Ph`, `Dt`). If unspecified, all columns are returned. An empty list may error. Available: Ph (Keyword), Dt (Date), Po (Position), Cp (CPC), Nq (Num. keywords), Tr (Traffic %), Ur (URL), Tt (Ad Title), Ds (Ad Description), Vu (Volume), Cv (Costs %).
   * @default [
   *       "Ph",
   *       "Dt",
   *       "Po",
   *       "Cp",
   *       "Nq",
   *       "Tr",
   *       "Ur",
   *       "Tt",
   *       "Ds",
   *       "Vu",
   *       "Cv"
   *     ]
   */
  export_columns: string[];
  /**
   * Export Escape
   * @description If 1, wraps report columns in double quotation marks ("); if 0, no escaping.
   * @default 1
   * @enum {integer}
   */
  export_escape: 0 | 1;
};

/**
 * Type of SEMRUSH's SEMRUSH_DOMAIN_AD_HISTORY tool output.
 */
type SEMRUSH_DOMAIN_AD_HISTORY_OUTPUT = {
  /**
   * Data
   * @description Raw text response from the API containing the domain advertising history, typically CSV-like, format determined by `export_columns` and `export_escape`.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_DOMAIN_ORGANIC_PAGES tool input.
 */
type SEMRUSH_DOMAIN_ORGANIC_PAGES_INPUT = {
  /**
   * Database
   * @description Regional database for analysis (e.g., 'us', 'gb', 'de'). See Semrush API docs for full list.
   * @enum {string}
   */
  database?: "us" | "uk" | "ca" | "ru" | "de" | "fr" | "es" | "it" | "br" | "au" | "ar" | "be" | "ch" | "dk" | "fi" | "hk" | "ie" | "il" | "mx" | "nl" | "no" | "pl" | "se" | "sg" | "tr" | "jp" | "in" | "hu" | "af" | "al" | "dz" | "ao" | "am" | "at" | "az" | "bh" | "bd" | "by" | "bz" | "bo" | "ba" | "bw" | "bn" | "bg" | "cv" | "kh" | "cm" | "cl" | "co" | "cr" | "hr" | "cy" | "cz" | "cd" | "do" | "ec" | "eg" | "sv" | "ee" | "et" | "ge" | "gh" | "gr" | "gt" | "gy" | "ht" | "hn" | "is" | "id" | "jm" | "jo" | "kz" | "kw" | "lv" | "lb" | "lt" | "lu" | "mg" | "my" | "mt" | "mu" | "md" | "mn" | "me" | "ma" | "mz" | "na" | "np" | "nz" | "ni" | "ng" | "om" | "py" | "pe" | "ph" | "pt" | "ro" | "sa" | "sn" | "rs" | "sk" | "si" | "za" | "kr" | "lk" | "th" | "bs" | "tt" | "tn" | "ua" | "ae" | "uy" | "ve" | "vn" | "zm" | "zw" | "ly" | "mobile-us" | "mobile-uk" | "mobile-ca" | "mobile-de" | "mobile-fr" | "mobile-es" | "mobile-it" | "mobile-br" | "mobile-au" | "mobile-dk" | "mobile-mx" | "mobile-nl" | "mobile-se" | "mobile-tr" | "mobile-in" | "mobile-id" | "mobile-il" | "il-ext" | "tr-ext" | "dk-ext" | "no-ext" | "se-ext" | "fi-ext" | "ch-ext" | "mobile-il-ext" | "pa" | "pk" | "tw" | "qa";
  /**
   * Display Date
   * @description Date for historical data report in YYYYMM15 format (e.g., '20231015'). If omitted, uses most recent data.
   */
  display_date?: string;
  /**
   * Display Filter
   * @description Columns from `DomainOrganicPagesFilterType` to filter results by. If empty, no column-specific filters are applied.
   * @default []
   */
  display_filter: string[];
  /**
   * Display Limit
   * @description Maximum number of results to return. For more than 100,000, use with `display_offset`.
   * @default 10000
   */
  display_limit: number;
  /**
   * Display Offset
   * @description Number of results to skip (for pagination with `display_limit`).
   * @default 0
   */
  display_offset: number;
  /**
   * Display Sort
   * @description Column and order for sorting results (e.g., 'pc_desc' for traffic share descending).
   * @default pc_desc
   * @enum {string}
   */
  display_sort: "pc_asc" | "pc_desc" | "tg_asc" | "tg_desc" | "tr_asc" | "tr_desc" | "sr_asc" | "sr_desc" | "st_asc" | "st_desc";
  /**
   * Domain
   * @description Domain name to analyze (e.g., 'example.com').
   */
  domain?: string;
  /**
   * Export Columns
   * @description Columns to include in the report. If omitted, all columns from `DomainOrganicPagesExportColumns` are returned.
   * @default [
   *       "Ur",
   *       "Pc",
   *       "Tg",
   *       "Tr",
   *       "Ipu",
   *       "Ip0",
   *       "Ip1",
   *       "Ip2",
   *       "Ip3",
   *       "Itu",
   *       "It0",
   *       "It1",
   *       "It2",
   *       "It3",
   *       "Sr",
   *       "St"
   *     ]
   */
  export_columns: string[];
  /**
   * Export Decode
   * @description Set to 0 for URL-encoded response, 1 for decoded (non-converted) response.
   * @default 1
   * @enum {integer}
   */
  export_decode: 0 | 1;
  /**
   * Export Escape
   * @description Set to 1 to wrap report columns in double quotation marks ("), 0 to disable.
   * @default 1
   * @enum {integer}
   */
  export_escape: 0 | 1;
};

/**
 * Type of SEMRUSH's SEMRUSH_DOMAIN_ORGANIC_PAGES tool output.
 */
type SEMRUSH_DOMAIN_ORGANIC_PAGES_OUTPUT = {
  /**
   * Data
   * @description Report data as a string (typically CSV), structured by `export_columns` and `export_decode` settings.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_DOMAIN_ORGANIC_SEARCH_KEYWORDS tool input.
 */
type SEMRUSH_DOMAIN_ORGANIC_SEARCH_KEYWORDS_INPUT = {
  /**
   * Database
   * @description The regional database to query (e.g., 'us', 'uk', 'de').
   * @enum {string}
   */
  database?: "us" | "uk" | "ca" | "ru" | "de" | "fr" | "es" | "it" | "br" | "au" | "ar" | "be" | "ch" | "dk" | "fi" | "hk" | "ie" | "il" | "mx" | "nl" | "no" | "pl" | "se" | "sg" | "tr" | "jp" | "in" | "hu" | "af" | "al" | "dz" | "ao" | "am" | "at" | "az" | "bh" | "bd" | "by" | "bz" | "bo" | "ba" | "bw" | "bn" | "bg" | "cv" | "kh" | "cm" | "cl" | "co" | "cr" | "hr" | "cy" | "cz" | "cd" | "do" | "ec" | "eg" | "sv" | "ee" | "et" | "ge" | "gh" | "gr" | "gt" | "gy" | "ht" | "hn" | "is" | "id" | "jm" | "jo" | "kz" | "kw" | "lv" | "lb" | "lt" | "lu" | "mg" | "my" | "mt" | "mu" | "md" | "mn" | "me" | "ma" | "mz" | "na" | "np" | "nz" | "ni" | "ng" | "om" | "py" | "pe" | "ph" | "pt" | "ro" | "sa" | "sn" | "rs" | "sk" | "si" | "za" | "kr" | "lk" | "th" | "bs" | "tt" | "tn" | "ua" | "ae" | "uy" | "ve" | "vn" | "zm" | "zw" | "ly" | "mobile-us" | "mobile-uk" | "mobile-ca" | "mobile-de" | "mobile-fr" | "mobile-es" | "mobile-it" | "mobile-br" | "mobile-au" | "mobile-dk" | "mobile-mx" | "mobile-nl" | "mobile-se" | "mobile-tr" | "mobile-in" | "mobile-id" | "mobile-il" | "il-ext" | "tr-ext" | "dk-ext" | "no-ext" | "se-ext" | "fi-ext" | "ch-ext" | "mobile-il-ext" | "pa" | "pk" | "tw" | "qa";
  /**
   * Display Daily
   * @description Set to 1 for daily updates on position changes (last 31 days), or 0 for monthly results. Requires `display_positions` if set to 1.
   */
  display_daily?: number;
  /**
   * Display Date
   * @description Date for keyword data: 'YYYYMM15' for monthly historical, 'YYYYMMDD' for daily (e.g., '20231015', '20231120'). Shows latest daily ranking changes if unspecified.
   */
  display_date?: string;
  /**
   * Display Filter
   * @description List of column codes from `DomainOrganicSearchKeywordsFilterType` for filtering (e.g., 'Ph', 'Ur'). For complex filter syntax like 'Ph|Cn|semrush', refer to Semrush API documentation.
   * @default []
   */
  display_filter: string[];
  /**
   * Display Limit
   * @description Number of results. When `display_offset` is used, this specifies the CUMULATIVE count from the start. Semrush may have per-call limits; use pagination for large datasets.
   * @default 10000
   */
  display_limit: number;
  /**
   * Display Offset
   * @description Number of initial results to skip for pagination. When used, `display_limit` should be `display_offset` + number of rows for the current page.
   * @default 0
   */
  display_offset: number;
  /**
   * Display Positions
   * @description Filter keywords by position changes in Google's top 100: 'new', 'lost', 'rise', or 'fall'.
   * @enum {string}
   */
  display_positions?: "new" | "lost" | "rise" | "fall";
  /**
   * Display Positions Type
   * @description Type of ranking positions: 'organic' (standard), 'all' (includes SERP features), or 'serp_features' (domain ranks in SERP features).
   * @default organic
   * @enum {string}
   */
  display_positions_type: "organic" | "all" | "serp_features";
  /**
   * Display Sort
   * @description Column and order for sorting results (e.g., 'po_desc' for position descending).
   * @default po_desc
   * @enum {string}
   */
  display_sort: "po_asc" | "po_desc" | "tg_asc" | "tg_desc" | "tr_asc" | "tr_desc" | "tc_asc" | "tc_desc" | "nq_asc" | "nq_desc" | "co_asc" | "co_desc" | "kd_asc" | "kd_desc" | "cp_asc" | "cp_desc" | "nr_asc" | "nr_desc" | "ts_asc" | "ts_desc";
  /**
   * Domain
   * @description The domain name (e.g., example.com) to investigate for organic search keywords.
   */
  domain?: string;
  /**
   * Export Columns
   * @description Data columns to include. If omitted, all columns from `DomainOrganicSearchKeywordsExportColumns` are requested.
   * @default [
   *       "Ph",
   *       "Po",
   *       "Pp",
   *       "Pd",
   *       "Nq",
   *       "Cp",
   *       "Ur",
   *       "Tr",
   *       "Tg",
   *       "Tc",
   *       "Co",
   *       "Nr",
   *       "Td",
   *       "Kd",
   *       "Fp",
   *       "Fk",
   *       "Ts",
   *       "In",
   *       "Pt"
   *     ]
   */
  export_columns: string[];
  /**
   * Export Escape
   * @description Set to 1 to wrap report columns in double quotation marks ("); 0 to disable.
   * @default 1
   * @enum {integer}
   */
  export_escape: 0 | 1;
};

/**
 * Type of SEMRUSH's SEMRUSH_DOMAIN_ORGANIC_SEARCH_KEYWORDS tool output.
 */
type SEMRUSH_DOMAIN_ORGANIC_SEARCH_KEYWORDS_OUTPUT = {
  /**
   * Data
   * @description The organic search keyword data for the specified domain, typically returned in a text-based format (e.g., CSV).
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_DOMAIN_ORGANIC_SUBDOMAINS tool input.
 */
type SEMRUSH_DOMAIN_ORGANIC_SUBDOMAINS_INPUT = {
  /**
   * Database
   * @description Regional database to query (e.g., 'us', 'gb'). Refer to Semrush API documentation for a complete list.
   * @enum {string}
   */
  database?: "us" | "uk" | "ca" | "ru" | "de" | "fr" | "es" | "it" | "br" | "au" | "ar" | "be" | "ch" | "dk" | "fi" | "hk" | "ie" | "il" | "mx" | "nl" | "no" | "pl" | "se" | "sg" | "tr" | "jp" | "in" | "hu" | "af" | "al" | "dz" | "ao" | "am" | "at" | "az" | "bh" | "bd" | "by" | "bz" | "bo" | "ba" | "bw" | "bn" | "bg" | "cv" | "kh" | "cm" | "cl" | "co" | "cr" | "hr" | "cy" | "cz" | "cd" | "do" | "ec" | "eg" | "sv" | "ee" | "et" | "ge" | "gh" | "gr" | "gt" | "gy" | "ht" | "hn" | "is" | "id" | "jm" | "jo" | "kz" | "kw" | "lv" | "lb" | "lt" | "lu" | "mg" | "my" | "mt" | "mu" | "md" | "mn" | "me" | "ma" | "mz" | "na" | "np" | "nz" | "ni" | "ng" | "om" | "py" | "pe" | "ph" | "pt" | "ro" | "sa" | "sn" | "rs" | "sk" | "si" | "za" | "kr" | "lk" | "th" | "bs" | "tt" | "tn" | "ua" | "ae" | "uy" | "ve" | "vn" | "zm" | "zw" | "ly" | "mobile-us" | "mobile-uk" | "mobile-ca" | "mobile-de" | "mobile-fr" | "mobile-es" | "mobile-it" | "mobile-br" | "mobile-au" | "mobile-dk" | "mobile-mx" | "mobile-nl" | "mobile-se" | "mobile-tr" | "mobile-in" | "mobile-id" | "mobile-il" | "il-ext" | "tr-ext" | "dk-ext" | "no-ext" | "se-ext" | "fi-ext" | "ch-ext" | "mobile-il-ext" | "pa" | "pk" | "tw" | "qa";
  /**
   * Display Date
   * @description Date for report generation in YYYYMM15 format (e.g., '20231015'). If not provided, latest available data is used.
   */
  display_date?: string;
  /**
   * Display Limit
   * @description Number of results to return. For fetching over 100,000 results, `display_offset` should be used and `display_limit` may need appropriate adjustment.
   * @default 10000
   */
  display_limit: number;
  /**
   * Display Offset
   * @description Number of initial results to skip for pagination. When using `display_offset`, `display_limit` might need to be increased by the `display_offset` value.
   * @default 0
   */
  display_offset: number;
  /**
   * Display Sort
   * @description Column and order for sorting results (e.g., 'pc_desc' sorts by keyword count descending).
   * @default pc_desc
   * @enum {string}
   */
  display_sort: "pc_asc" | "pc_desc" | "tg_asc" | "tg_desc" | "tr_asc" | "tr_desc" | "sr_asc" | "sr_desc" | "st_asc" | "st_desc";
  /**
   * Domain
   * @description Domain name to analyze (e.g., 'example.com').
   */
  domain?: string;
  /**
   * Export Columns
   * @description Specific columns for the report (e.g., Ur, Pc, Tr). If omitted, a default set is returned. Consult Semrush API documentation for column definitions.
   * @default [
   *       "Ur",
   *       "Pc",
   *       "Tg",
   *       "Tr",
   *       "Sr",
   *       "St"
   *     ]
   */
  export_columns: string[];
  /**
   * Export Decode
   * @description Specifies if response data is URL-decoded (`1` for decoded, `0` for URL-encoded string).
   * @default 1
   * @enum {integer}
   */
  export_decode: 0 | 1;
  /**
   * Export Escape
   * @description Specifies if CSV columns are wrapped in double quotes (`1` to enable, `0` to disable).
   * @default 1
   * @enum {integer}
   */
  export_escape: 0 | 1;
};

/**
 * Type of SEMRUSH's SEMRUSH_DOMAIN_ORGANIC_SUBDOMAINS tool output.
 */
type SEMRUSH_DOMAIN_ORGANIC_SUBDOMAINS_OUTPUT = {
  /**
   * Data
   * @description The report data, typically in a CSV-like plain text format, detailing the organic subdomains, their keywords, and traffic metrics.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_DOMAIN_PAID_SEARCH_KEYWORDS tool input.
 */
type SEMRUSH_DOMAIN_PAID_SEARCH_KEYWORDS_INPUT = {
  /**
   * Database
   * @description Regional database to query.
   * @enum {string}
   */
  database?: "us" | "uk" | "ca" | "ru" | "de" | "fr" | "es" | "it" | "br" | "au" | "ar" | "be" | "ch" | "dk" | "fi" | "hk" | "ie" | "il" | "mx" | "nl" | "no" | "pl" | "se" | "sg" | "tr" | "jp" | "in" | "hu" | "af" | "al" | "dz" | "ao" | "am" | "at" | "az" | "bh" | "bd" | "by" | "bz" | "bo" | "ba" | "bw" | "bn" | "bg" | "cv" | "kh" | "cm" | "cl" | "co" | "cr" | "hr" | "cy" | "cz" | "cd" | "do" | "ec" | "eg" | "sv" | "ee" | "et" | "ge" | "gh" | "gr" | "gt" | "gy" | "ht" | "hn" | "is" | "id" | "jm" | "jo" | "kz" | "kw" | "lv" | "lb" | "lt" | "lu" | "mg" | "my" | "mt" | "mu" | "md" | "mn" | "me" | "ma" | "mz" | "na" | "np" | "nz" | "ni" | "ng" | "om" | "py" | "pe" | "ph" | "pt" | "ro" | "sa" | "sn" | "rs" | "sk" | "si" | "za" | "kr" | "lk" | "th" | "bs" | "tt" | "tn" | "ua" | "ae" | "uy" | "ve" | "vn" | "zm" | "zw" | "ly" | "mobile-us" | "mobile-uk" | "mobile-ca" | "mobile-de" | "mobile-fr" | "mobile-es" | "mobile-it" | "mobile-br" | "mobile-au" | "mobile-dk" | "mobile-mx" | "mobile-nl" | "mobile-se" | "mobile-tr" | "mobile-in" | "mobile-id" | "mobile-il" | "il-ext" | "tr-ext" | "dk-ext" | "no-ext" | "se-ext" | "fi-ext" | "ch-ext" | "mobile-il-ext" | "pa" | "pk" | "tw" | "qa";
  /**
   * Display Date
   * @description Date for data retrieval (YYYYMM15 for monthly, YYYYMMDD for daily). Latest data if unspecified.
   */
  display_date?: string;
  /**
   * Display Filter
   * @description Filters to apply using a specific format string: '[+/-]|[column_code]|[operator]|[value]'. Refer to Semrush API documentation for detailed filter syntax and available fields.
   * @default []
   */
  display_filter: string[];
  /**
   * Display Limit
   * @description Maximum number of keywords to return. Use with `display_offset` for pagination.
   * @default 10000
   */
  display_limit: number;
  /**
   * Display Offset
   * @description Number of results to skip for pagination. If used, `display_limit` should be increased by this value; total `display_limit` (inclusive of offset) must not exceed 4,000,000.
   * @default 0
   */
  display_offset: number;
  /**
   * Display Positions
   * @description Filter keywords by ranking status ('new', 'lost', 'rise', 'fall') in Google's top 100 paid search results.
   * @enum {string}
   */
  display_positions?: "new" | "lost" | "rise" | "fall";
  /**
   * Display Sort
   * @description Column and order for sorting results.
   * @default po_desc
   * @enum {string}
   */
  display_sort: "po_asc" | "po_desc" | "tg_asc" | "tg_desc" | "tr_asc" | "tr_desc" | "tc_asc" | "tc_desc" | "nq_asc" | "nq_desc";
  /**
   * Domain
   * @description Domain name to investigate.
   */
  domain?: string;
  /**
   * Export Columns
   * @description Columns to include in the report. All columns returned if unspecified. See `DomainPaidSearchKeywordsExportColumns` for options.
   * @default [
   *       "Ph",
   *       "Po",
   *       "Pp",
   *       "Pd",
   *       "Ab",
   *       "Nq",
   *       "Cp",
   *       "Tg",
   *       "Tr",
   *       "Tc",
   *       "Co",
   *       "Nr",
   *       "Td",
   *       "Tt",
   *       "Ds",
   *       "Vu",
   *       "Ur",
   *       "Ts",
   *       "Un"
   *     ]
   */
  export_columns: string[];
  /**
   * Export Decode
   * @description Set to 0 for URL-encoded response; 1 for non-URL-encoded response.
   * @default 1
   * @enum {integer}
   */
  export_decode: 0 | 1;
  /**
   * Export Escape
   * @description Set to 1 to wrap report columns in double quotation marks ("); 0 to disable.
   * @default 1
   * @enum {integer}
   */
  export_escape: 0 | 1;
};

/**
 * Type of SEMRUSH's SEMRUSH_DOMAIN_PAID_SEARCH_KEYWORDS tool output.
 */
type SEMRUSH_DOMAIN_PAID_SEARCH_KEYWORDS_OUTPUT = {
  /**
   * Data
   * @description Report data as a string, typically CSV. Structure depends on `export_columns` and `export_escape`.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_DOMAIN_PLA_SEARCH_KEYWORDS tool input.
 */
type SEMRUSH_DOMAIN_PLA_SEARCH_KEYWORDS_INPUT = {
  /**
   * Database
   * @description Semrush regional database to query (e.g., 'us', 'gb', 'ca').
   * @enum {string}
   */
  database?: "us" | "uk" | "ca" | "ru" | "de" | "fr" | "es" | "it" | "br" | "au" | "ar" | "be" | "ch" | "dk" | "fi" | "hk" | "ie" | "il" | "mx" | "nl" | "no" | "pl" | "se" | "sg" | "tr" | "jp" | "in" | "hu" | "af" | "al" | "dz" | "ao" | "am" | "at" | "az" | "bh" | "bd" | "by" | "bz" | "bo" | "ba" | "bw" | "bn" | "bg" | "cv" | "kh" | "cm" | "cl" | "co" | "cr" | "hr" | "cy" | "cz" | "cd" | "do" | "ec" | "eg" | "sv" | "ee" | "et" | "ge" | "gh" | "gr" | "gt" | "gy" | "ht" | "hn" | "is" | "id" | "jm" | "jo" | "kz" | "kw" | "lv" | "lb" | "lt" | "lu" | "mg" | "my" | "mt" | "mu" | "md" | "mn" | "me" | "ma" | "mz" | "na" | "np" | "nz" | "ni" | "ng" | "om" | "py" | "pe" | "ph" | "pt" | "ro" | "sa" | "sn" | "rs" | "sk" | "si" | "za" | "kr" | "lk" | "th" | "bs" | "tt" | "tn" | "ua" | "ae" | "uy" | "ve" | "vn" | "zm" | "zw" | "ly" | "mobile-us" | "mobile-uk" | "mobile-ca" | "mobile-de" | "mobile-fr" | "mobile-es" | "mobile-it" | "mobile-br" | "mobile-au" | "mobile-dk" | "mobile-mx" | "mobile-nl" | "mobile-se" | "mobile-tr" | "mobile-in" | "mobile-id" | "mobile-il" | "il-ext" | "tr-ext" | "dk-ext" | "no-ext" | "se-ext" | "fi-ext" | "ch-ext" | "mobile-il-ext" | "pa" | "pk" | "tw" | "qa";
  /**
   * Display Filter
   * @description Column names (e.g., 'Ph', 'Tt') for filtering results. Filtering logic is Semrush API-specific; refer to their documentation for details.
   * @default []
   */
  display_filter: string[];
  /**
   * Display Limit
   * @description Maximum number of results to return. For pagination with `display_offset`, `display_limit` might need to be `desired_count + display_offset`. Semrush may return up to 100,000 lines per call if `display_offset` is not used.
   * @default 10000
   */
  display_limit: number;
  /**
   * Display Offset
   * @description Number of results to skip from the beginning of the report, for pagination.
   * @default 0
   */
  display_offset: number;
  /**
   * Display Sort
   * @description Column and order for sorting results (e.g., 'po_desc' for position descending).
   * @default po_desc
   * @enum {string}
   */
  display_sort: "po_asc" | "po_desc" | "nq_asc" | "nq_desc" | "pr_asc" | "pr_desc";
  /**
   * Domain
   * @description Domain name (e.g., 'example.com') to investigate for PLA search keywords.
   */
  domain?: string;
  /**
   * Export Columns
   * @description Specific data columns to include in the report (e.g., 'Ph' for Keyword, 'Ur' for Landing Page URL, 'Tt' for Ad Title). If not specified, all available columns are requested.
   * @default [
   *       "Ph",
   *       "Po",
   *       "Pp",
   *       "Pd",
   *       "Nq",
   *       "Sn",
   *       "Ur",
   *       "Tt",
   *       "Pr",
   *       "Ts"
   *     ]
   */
  export_columns: string[];
  /**
   * Export Decode
   * @description If 1, decodes URL-encoded response data; if 0, returns data as a raw URL-encoded string.
   * @default 1
   * @enum {integer}
   */
  export_decode: 0 | 1;
  /**
   * Export Escape
   * @description If 1, wraps report column values in double quotes (e.g., "value"); 0 disables wrapping.
   * @default 1
   * @enum {integer}
   */
  export_escape: 0 | 1;
};

/**
 * Type of SEMRUSH's SEMRUSH_DOMAIN_PLA_SEARCH_KEYWORDS tool output.
 */
type SEMRUSH_DOMAIN_PLA_SEARCH_KEYWORDS_OUTPUT = {
  /**
   * Data
   * @description PLA search keywords data from Semrush, typically a raw string in CSV-like format. Structure and content depend on `export_columns` and other request parameters.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_DOMAIN_VS_DOMAIN tool input.
 */
type SEMRUSH_DOMAIN_VS_DOMAIN_INPUT = {
  /**
   * Database
   * @description Regional database for the query. Refer to `DatabaseEnum` or SEMrush documentation for a complete list.
   * @enum {string}
   */
  database?: "us" | "uk" | "ca" | "ru" | "de" | "fr" | "es" | "it" | "br" | "au" | "ar" | "be" | "ch" | "dk" | "fi" | "hk" | "ie" | "il" | "mx" | "nl" | "no" | "pl" | "se" | "sg" | "tr" | "jp" | "in" | "hu" | "af" | "al" | "dz" | "ao" | "am" | "at" | "az" | "bh" | "bd" | "by" | "bz" | "bo" | "ba" | "bw" | "bn" | "bg" | "cv" | "kh" | "cm" | "cl" | "co" | "cr" | "hr" | "cy" | "cz" | "cd" | "do" | "ec" | "eg" | "sv" | "ee" | "et" | "ge" | "gh" | "gr" | "gt" | "gy" | "ht" | "hn" | "is" | "id" | "jm" | "jo" | "kz" | "kw" | "lv" | "lb" | "lt" | "lu" | "mg" | "my" | "mt" | "mu" | "md" | "mn" | "me" | "ma" | "mz" | "na" | "np" | "nz" | "ni" | "ng" | "om" | "py" | "pe" | "ph" | "pt" | "ro" | "sa" | "sn" | "rs" | "sk" | "si" | "za" | "kr" | "lk" | "th" | "bs" | "tt" | "tn" | "ua" | "ae" | "uy" | "ve" | "vn" | "zm" | "zw" | "ly" | "mobile-us" | "mobile-uk" | "mobile-ca" | "mobile-de" | "mobile-fr" | "mobile-es" | "mobile-it" | "mobile-br" | "mobile-au" | "mobile-dk" | "mobile-mx" | "mobile-nl" | "mobile-se" | "mobile-tr" | "mobile-in" | "mobile-id" | "mobile-il" | "il-ext" | "tr-ext" | "dk-ext" | "no-ext" | "se-ext" | "fi-ext" | "ch-ext" | "mobile-il-ext" | "pa" | "pk" | "tw" | "qa";
  /**
   * Display Date
   * @description Report date in YYYYMM15 format (e.g., '20231015') for historical/current data. Latest data used if omitted.
   */
  display_date?: string;
  /**
   * Display Filter
   * @description List of column codes from `DomainVsDomainFilterType` to filter results. Behavior is API-specific.
   * @default []
   */
  display_filter: string[];
  /**
   * Display Limit
   * @description Maximum number of keywords to return. Use with `display_offset` for pagination of large datasets (up to 100,000 results per call is typical).
   * @default 10000
   */
  display_limit: number;
  /**
   * Display Offset
   * @description Number of initial results to skip for pagination with `display_limit`. For instance, `display_offset=10000` and `display_limit=10000` retrieves results 10,001-20,000.
   * @default 0
   */
  display_offset: number;
  /**
   * Display Sort
   * @description Sorting criteria: 'columnName_direction' (e.g., 'p0_desc'). See `DomainVsDomainSortOrder` for options.
   * @default p0_desc
   * @enum {string}
   */
  display_sort: "p0_asc" | "p0_desc" | "p1_asc" | "p1_desc" | "p2_asc" | "p2_desc" | "p3_asc" | "p3_desc" | "p4_asc" | "p4_desc" | "nq_asc" | "nq_desc" | "co_asc" | "co_desc" | "cp_asc" | "cp_desc" | "nr_asc" | "nr_desc";
  /**
   * Domains
   * @description A URL-encoded string specifying the domains to compare and the comparison logic, separated by the '|' symbol. Each domain entry follows the format: <sign>|<type>|<domain>. Up to five domains can be compared.
   *     <sign>: Operation type (+, -, *, /).
   *     <type>: Keyword type ('or' for organic, 'ad' for paid).
   *     <domain>: The domain name.
   *     Examples of combinations:
   *     • Shared keywords: *|or|<your_domain>|*|or|<domain2>|*|or|<domain3>
   *     • All keywords: *|or|<your_domain>|+|or|<domain2>|+|or|<domain3>
   *     • Unique keywords for your domain: *|or|<your_domain>|-|or|<domain2>|-|or|<domain3>
   *     • Untapped keywords (keywords in others, not yours): *|or|<domain2>|+|or|<domain3>|-|or|<your_domain>
   *     • Missing keywords (keywords in common among others, not yours): *|or|<domain2>|*|or|<domain3>|-|or|<your_domain>
   *     • Keywords exclusive to one domain: *|or|<your_domain>|/|or|<domain2>|/|or|<domain3> (API only).
   */
  domains?: string;
  /**
   * Export Columns
   * @description Columns to include in the report. All default columns are returned if empty. See `DomainVsDomainExportColumns` for codes.
   * @default [
   *       "Ph",
   *       "P0",
   *       "P1",
   *       "P2",
   *       "P3",
   *       "P4",
   *       "Nr",
   *       "Cp",
   *       "Nq",
   *       "Kd",
   *       "Co",
   *       "Td"
   *     ]
   */
  export_columns: string[];
  /**
   * Export Decode
   * @description Controls if the response is URL-decoded. 1: decode response; 0: return URL-encoded string.
   * @default 1
   * @enum {integer}
   */
  export_decode: 0 | 1;
  /**
   * Export Escape
   * @description Controls if special characters in output are escaped. 1: escape (columns wrapped in \"\"); 0: no escaping.
   * @default 1
   * @enum {integer}
   */
  export_escape: 0 | 1;
};

/**
 * Type of SEMRUSH's SEMRUSH_DOMAIN_VS_DOMAIN tool output.
 */
type SEMRUSH_DOMAIN_VS_DOMAIN_OUTPUT = {
  /**
   * Data
   * @description The API response data, typically a string in a table-like format (e.g., CSV-like with lines separated by newlines and columns by semicolons). The structure and encoding depend on parameters like `export_columns`, `export_escape`, and `export_decode`.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_HISTORICAL_DATA tool input.
 */
type SEMRUSH_HISTORICAL_DATA_INPUT = {
  /**
   * Display Limit
   * @description Maximum number of historical data records (lines) to return. If 0 (default), the API backend uses 10,000. Max: 1,000,000.
   * @default 0
   */
  display_limit: number;
  /**
   * Display Offset
   * @description Number of initial records to skip in the results.
   * @default 0
   */
  display_offset: number;
  /**
   * Export Columns
   * @description Specifies data columns for the report. Defaults to all: `date`, `backlinks_num`, `domains_num`, `score`.
   * @default [
   *       "date",
   *       "backlinks_num",
   *       "domains_num",
   *       "score"
   *     ]
   */
  export_columns: string[];
  /**
   * Target
   * @description The root domain URL (e.g., 'example.com') for which to retrieve historical backlink data.
   */
  target?: string;
  /**
   * Target Type
   * @description The type of target. Must be 'root_domain' for this action.
   * @constant
   */
  target_type?: "root_domain";
};

/**
 * Type of SEMRUSH's SEMRUSH_HISTORICAL_DATA tool output.
 */
type SEMRUSH_HISTORICAL_DATA_OUTPUT = {
  /**
   * Data
   * @description String of historical data: each line is a monthly record (Unix timestamp, requested metrics), sorted newest to oldest. Columns depend on `export_columns`.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_INDEXED_PAGES tool input.
 */
type SEMRUSH_INDEXED_PAGES_INPUT = {
  /**
   * Display Limit
   * @description Maximum number of results to return.
   * @default 10000
   */
  display_limit: number;
  /**
   * Display Offset
   * @description Number of initial results to skip. Note: When using `display_offset`, the `display_limit` should be the desired number of results plus the `display_offset` (e.g., for 100 results after skipping 50, set `display_offset=50`, `display_limit=150`).
   * @default 0
   */
  display_offset: number;
  /**
   * Display Sort
   * @description Sorting criteria for the results.
   * @default backlinks_num_desc
   * @enum {string}
   */
  display_sort: "backlinks_num_asc" | "backlinks_num_desc" | "domains_num_asc" | "domains_num_desc" | "last_seen_asc" | "last_seen_desc";
  /**
   * Export Columns
   * @description Specific columns for the report; defaults to all available columns if omitted.
   * @default [
   *       "source_url",
   *       "source_title",
   *       "response_code",
   *       "backlinks_num",
   *       "domains_num",
   *       "last_seen",
   *       "external_num",
   *       "internal_num"
   *     ]
   */
  export_columns: string[];
  /**
   * Target
   * @description Target URL, domain, or root domain for which to retrieve indexed pages data.
   */
  target?: string;
  /**
   * Target Type
   * @description Type of the target.
   * @enum {string}
   */
  target_type?: "root_domain" | "domain" | "url";
};

/**
 * Type of SEMRUSH's SEMRUSH_INDEXED_PAGES tool output.
 */
type SEMRUSH_INDEXED_PAGES_OUTPUT = {
  /**
   * Data
   * @description A string containing the report data, typically in a CSV-like format, listing indexed pages and their selected attributes.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_KEYWORDS_ADS_HISTORY tool input.
 */
type SEMRUSH_KEYWORDS_ADS_HISTORY_INPUT = {
  /**
   * Database
   * @description Regional database to query.
   * @enum {string}
   */
  database?: "us" | "uk" | "ca" | "ru" | "de" | "fr" | "es" | "it" | "br" | "au" | "ar" | "be" | "ch" | "dk" | "fi" | "hk" | "ie" | "il" | "mx" | "nl" | "no" | "pl" | "se" | "sg" | "tr" | "jp" | "in" | "hu" | "af" | "al" | "dz" | "ao" | "am" | "at" | "az" | "bh" | "bd" | "by" | "bz" | "bo" | "ba" | "bw" | "bn" | "bg" | "cv" | "kh" | "cm" | "cl" | "co" | "cr" | "hr" | "cy" | "cz" | "cd" | "do" | "ec" | "eg" | "sv" | "ee" | "et" | "ge" | "gh" | "gr" | "gt" | "gy" | "ht" | "hn" | "is" | "id" | "jm" | "jo" | "kz" | "kw" | "lv" | "lb" | "lt" | "lu" | "mg" | "my" | "mt" | "mu" | "md" | "mn" | "me" | "ma" | "mz" | "na" | "np" | "nz" | "ni" | "ng" | "om" | "py" | "pe" | "ph" | "pt" | "ro" | "sa" | "sn" | "rs" | "sk" | "si" | "za" | "kr" | "lk" | "th" | "bs" | "tt" | "tn" | "ua" | "ae" | "uy" | "ve" | "vn" | "zm" | "zw" | "ly" | "mobile-us" | "mobile-uk" | "mobile-ca" | "mobile-de" | "mobile-fr" | "mobile-es" | "mobile-it" | "mobile-br" | "mobile-au" | "mobile-dk" | "mobile-mx" | "mobile-nl" | "mobile-se" | "mobile-tr" | "mobile-in" | "mobile-id" | "mobile-il" | "il-ext" | "tr-ext" | "dk-ext" | "no-ext" | "se-ext" | "fi-ext" | "ch-ext" | "mobile-il-ext" | "pa" | "pk" | "tw" | "qa";
  /**
   * Display Date
   * @description Specifies a past month for data retrieval, formatted as 'YYYYMM15'. If omitted, returns most recent period's data.
   */
  display_date?: string;
  /**
   * Display Limit
   * @description Maximum number of results (lines) to return.
   * @default 10000
   */
  display_limit: number;
  /**
   * Display Offset
   * @description Number of results to skip for pagination.
   * @default 0
   */
  display_offset: number;
  /**
   * Export Columns
   * @description Specific columns to include. If omitted or empty, all columns are returned. See `KeywordsAdsHistoryExportColumns`.
   * @default [
   *       "Dn",
   *       "Dt",
   *       "Po",
   *       "Ur",
   *       "Tt",
   *       "Ds",
   *       "Vu",
   *       "At",
   *       "Ac",
   *       "Ad"
   *     ]
   */
  export_columns: string[];
  /**
   * Export Decode
   * @description Set to 1 for a non-URL-encoded response, 0 for URL-encoded.
   * @default 1
   * @enum {integer}
   */
  export_decode: 0 | 1;
  /**
   * Export Escape
   * @description Set to 1 to wrap output columns in double quotes, 0 to disable.
   * @default 1
   * @enum {integer}
   */
  export_escape: 0 | 1;
  /**
   * Phrase
   * @description Keyword or phrase for historical advertising data analysis.
   */
  phrase?: string;
};

/**
 * Type of SEMRUSH's SEMRUSH_KEYWORDS_ADS_HISTORY tool output.
 */
type SEMRUSH_KEYWORDS_ADS_HISTORY_OUTPUT = {
  /**
   * Data
   * @description Raw report data string, typically CSV-like, with keyword ads history. Structure depends on API output and `export_escape`.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_KEYWORD_DIFFICULTY tool input.
 */
type SEMRUSH_KEYWORD_DIFFICULTY_INPUT = {
  /**
   * Database
   * @description The Semrush regional database to use for the analysis (e.g., 'us', 'gb', 'ca'). Refer to the Semrush API documentation for a complete list of valid database codes: https://developer.semrush.com/api/v3/analytics/basic-docs/#databases.
   * @enum {string}
   */
  database?: "us" | "uk" | "ca" | "ru" | "de" | "fr" | "es" | "it" | "br" | "au" | "ar" | "be" | "ch" | "dk" | "fi" | "hk" | "ie" | "il" | "mx" | "nl" | "no" | "pl" | "se" | "sg" | "tr" | "jp" | "in" | "hu" | "af" | "al" | "dz" | "ao" | "am" | "at" | "az" | "bh" | "bd" | "by" | "bz" | "bo" | "ba" | "bw" | "bn" | "bg" | "cv" | "kh" | "cm" | "cl" | "co" | "cr" | "hr" | "cy" | "cz" | "cd" | "do" | "ec" | "eg" | "sv" | "ee" | "et" | "ge" | "gh" | "gr" | "gt" | "gy" | "ht" | "hn" | "is" | "id" | "jm" | "jo" | "kz" | "kw" | "lv" | "lb" | "lt" | "lu" | "mg" | "my" | "mt" | "mu" | "md" | "mn" | "me" | "ma" | "mz" | "na" | "np" | "nz" | "ni" | "ng" | "om" | "py" | "pe" | "ph" | "pt" | "ro" | "sa" | "sn" | "rs" | "sk" | "si" | "za" | "kr" | "lk" | "th" | "bs" | "tt" | "tn" | "ua" | "ae" | "uy" | "ve" | "vn" | "zm" | "zw" | "ly" | "mobile-us" | "mobile-uk" | "mobile-ca" | "mobile-de" | "mobile-fr" | "mobile-es" | "mobile-it" | "mobile-br" | "mobile-au" | "mobile-dk" | "mobile-mx" | "mobile-nl" | "mobile-se" | "mobile-tr" | "mobile-in" | "mobile-id" | "mobile-il" | "il-ext" | "tr-ext" | "dk-ext" | "no-ext" | "se-ext" | "fi-ext" | "ch-ext" | "mobile-il-ext" | "pa" | "pk" | "tw" | "qa";
  /**
   * Export Columns
   * @description Specifies columns to include in the output (e.g., 'Ph' for Phrase, 'Kd' for Keyword Difficulty). Uses all available columns if omitted.
   * @default [
   *       "Ph",
   *       "Kd"
   *     ]
   */
  export_columns: string[];
  /**
   * Export Escape
   * @description Set to 1 to wrap output columns in double quotes ("), or 0 to disable.
   * @default 1
   * @enum {integer}
   */
  export_escape: 0 | 1;
  /**
   * Phrase
   * @description The keyword or keyword phrase to analyze for difficulty.
   */
  phrase?: string;
};

/**
 * Type of SEMRUSH's SEMRUSH_KEYWORD_DIFFICULTY tool output.
 */
type SEMRUSH_KEYWORD_DIFFICULTY_OUTPUT = {
  /**
   * Data
   * @description The raw keyword difficulty report data, typically in CSV format, as returned by the Semrush API.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_KEYWORD_OVERVIEW_ALL_DATABASES tool input.
 */
type SEMRUSH_KEYWORD_OVERVIEW_ALL_DATABASES_INPUT = {
  /**
   * DatabaseEnum
   * @description Regional database to query (e.g., 'us', 'gb'); if omitted, data is retrieved from all regional databases.
   * @default null
   * @enum {string|null}
   */
  database: "us" | "uk" | "ca" | "ru" | "de" | "fr" | "es" | "it" | "br" | "au" | "ar" | "be" | "ch" | "dk" | "fi" | "hk" | "ie" | "il" | "mx" | "nl" | "no" | "pl" | "se" | "sg" | "tr" | "jp" | "in" | "hu" | "af" | "al" | "dz" | "ao" | "am" | "at" | "az" | "bh" | "bd" | "by" | "bz" | "bo" | "ba" | "bw" | "bn" | "bg" | "cv" | "kh" | "cm" | "cl" | "co" | "cr" | "hr" | "cy" | "cz" | "cd" | "do" | "ec" | "eg" | "sv" | "ee" | "et" | "ge" | "gh" | "gr" | "gt" | "gy" | "ht" | "hn" | "is" | "id" | "jm" | "jo" | "kz" | "kw" | "lv" | "lb" | "lt" | "lu" | "mg" | "my" | "mt" | "mu" | "md" | "mn" | "me" | "ma" | "mz" | "na" | "np" | "nz" | "ni" | "ng" | "om" | "py" | "pe" | "ph" | "pt" | "ro" | "sa" | "sn" | "rs" | "sk" | "si" | "za" | "kr" | "lk" | "th" | "bs" | "tt" | "tn" | "ua" | "ae" | "uy" | "ve" | "vn" | "zm" | "zw" | "ly" | "mobile-us" | "mobile-uk" | "mobile-ca" | "mobile-de" | "mobile-fr" | "mobile-es" | "mobile-it" | "mobile-br" | "mobile-au" | "mobile-dk" | "mobile-mx" | "mobile-nl" | "mobile-se" | "mobile-tr" | "mobile-in" | "mobile-id" | "mobile-il" | "il-ext" | "tr-ext" | "dk-ext" | "no-ext" | "se-ext" | "fi-ext" | "ch-ext" | "mobile-il-ext" | "pa" | "pk" | "tw" | "qa" | null;
  /**
   * Export Columns
   * @description Specific columns for the report (e.g., 'Ph', 'Nq', 'Cp'). Defaults to all columns, including Date (Dt), Database (Db), Phrase (Ph), Search Volume (Nq), CPC (Cp), Competition (Co), Number of Results (Nr), Intent (In), and Keyword Difficulty (Kd).
   * @default [
   *       "Dt",
   *       "Db",
   *       "Ph",
   *       "Nq",
   *       "Cp",
   *       "Co",
   *       "Nr",
   *       "In",
   *       "Kd"
   *     ]
   */
  export_columns: string[];
  /**
   * Export Decode
   * @description Set to 1 for a URL-decoded response, 0 for URL-encoded.
   * @default 1
   */
  export_decode: number;
  /**
   * Export Escape
   * @description Set to 1 to wrap output columns in double quotes, 0 to disable.
   * @default 1
   * @enum {integer}
   */
  export_escape: 0 | 1;
  /**
   * Phrase
   * @description Keyword or keyword phrase to investigate.
   */
  phrase?: string;
};

/**
 * Type of SEMRUSH's SEMRUSH_KEYWORD_OVERVIEW_ALL_DATABASES tool output.
 */
type SEMRUSH_KEYWORD_OVERVIEW_ALL_DATABASES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Keyword Data
       * @description Raw text response from the API with keyword overview data, typically CSV formatted.
       */
      keyword_data: string;
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
 * Type of SEMRUSH's SEMRUSH_KEYWORD_OVERVIEW_ONE_DATABASE tool input.
 */
type SEMRUSH_KEYWORD_OVERVIEW_ONE_DATABASE_INPUT = {
  /**
   * Database
   * @description A regional database code (e.g., 'us' for United States, 'gb' for United Kingdom). Refer to Semrush documentation for a comprehensive list of available databases (https://developer.semrush.com/api/v3/analytics/basic-docs/#databases).
   * @enum {string}
   */
  database?: "us" | "uk" | "ca" | "ru" | "de" | "fr" | "es" | "it" | "br" | "au" | "ar" | "be" | "ch" | "dk" | "fi" | "hk" | "ie" | "il" | "mx" | "nl" | "no" | "pl" | "se" | "sg" | "tr" | "jp" | "in" | "hu" | "af" | "al" | "dz" | "ao" | "am" | "at" | "az" | "bh" | "bd" | "by" | "bz" | "bo" | "ba" | "bw" | "bn" | "bg" | "cv" | "kh" | "cm" | "cl" | "co" | "cr" | "hr" | "cy" | "cz" | "cd" | "do" | "ec" | "eg" | "sv" | "ee" | "et" | "ge" | "gh" | "gr" | "gt" | "gy" | "ht" | "hn" | "is" | "id" | "jm" | "jo" | "kz" | "kw" | "lv" | "lb" | "lt" | "lu" | "mg" | "my" | "mt" | "mu" | "md" | "mn" | "me" | "ma" | "mz" | "na" | "np" | "nz" | "ni" | "ng" | "om" | "py" | "pe" | "ph" | "pt" | "ro" | "sa" | "sn" | "rs" | "sk" | "si" | "za" | "kr" | "lk" | "th" | "bs" | "tt" | "tn" | "ua" | "ae" | "uy" | "ve" | "vn" | "zm" | "zw" | "ly" | "mobile-us" | "mobile-uk" | "mobile-ca" | "mobile-de" | "mobile-fr" | "mobile-es" | "mobile-it" | "mobile-br" | "mobile-au" | "mobile-dk" | "mobile-mx" | "mobile-nl" | "mobile-se" | "mobile-tr" | "mobile-in" | "mobile-id" | "mobile-il" | "il-ext" | "tr-ext" | "dk-ext" | "no-ext" | "se-ext" | "fi-ext" | "ch-ext" | "mobile-il-ext" | "pa" | "pk" | "tw" | "qa";
  /**
   * Display Date
   * @description Optional. Date in "YYYYMM15" format (e.g., "20231215" for December 2023) to retrieve data for a specific past month. If omitted or empty, the most recent data is returned.
   */
  display_date?: string;
  /**
   * Export Columns
   * @description A list of specific columns to include in the report. If omitted, all available columns are returned by default. Available columns: Ph (Keyword phrase), Nq (Monthly search volume), Cp (Cost Per Click in USD), Co (Competition level of advertisers, 0 to 1), Nr (Number of URLs in organic search results), Td (Search trend over the last 12 months), In (Searcher intent types like informational, navigational, commercial, transactional), Kd (Keyword difficulty score, 0 to 100).
   * @default [
   *       "Ph",
   *       "Nq",
   *       "Cp",
   *       "Co",
   *       "Nr",
   *       "Td",
   *       "In",
   *       "Kd"
   *     ]
   */
  export_columns: string[];
  /**
   * Export Decode
   * @description If set to 0, the response will be a URL-encoded string. If set to 1 (default), the response will not be URL-encoded.
   * @default 1
   * @enum {integer}
   */
  export_decode: 0 | 1;
  /**
   * Export Escape
   * @description If set to 1 (default), the report’s columns will be wrapped in double quotation marks ("). Set to 0 to disable.
   * @default 1
   * @enum {integer}
   */
  export_escape: 0 | 1;
  /**
   * Phrase
   * @description The keyword or keyword phrase to investigate.
   */
  phrase?: string;
};

/**
 * Type of SEMRUSH's SEMRUSH_KEYWORD_OVERVIEW_ONE_DATABASE tool output.
 */
type SEMRUSH_KEYWORD_OVERVIEW_ONE_DATABASE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Keyword Data
       * @description The keyword overview data, typically returned in CSV string format.
       */
      keyword_data: string;
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
 * Type of SEMRUSH's SEMRUSH_ORGANIC_RESULTS tool input.
 */
type SEMRUSH_ORGANIC_RESULTS_INPUT = {
  /**
   * Database
   * @description Regional database to query (e.g., 'us' for United States).
   * @enum {string}
   */
  database?: "us" | "uk" | "ca" | "ru" | "de" | "fr" | "es" | "it" | "br" | "au" | "ar" | "be" | "ch" | "dk" | "fi" | "hk" | "ie" | "il" | "mx" | "nl" | "no" | "pl" | "se" | "sg" | "tr" | "jp" | "in" | "hu" | "af" | "al" | "dz" | "ao" | "am" | "at" | "az" | "bh" | "bd" | "by" | "bz" | "bo" | "ba" | "bw" | "bn" | "bg" | "cv" | "kh" | "cm" | "cl" | "co" | "cr" | "hr" | "cy" | "cz" | "cd" | "do" | "ec" | "eg" | "sv" | "ee" | "et" | "ge" | "gh" | "gr" | "gt" | "gy" | "ht" | "hn" | "is" | "id" | "jm" | "jo" | "kz" | "kw" | "lv" | "lb" | "lt" | "lu" | "mg" | "my" | "mt" | "mu" | "md" | "mn" | "me" | "ma" | "mz" | "na" | "np" | "nz" | "ni" | "ng" | "om" | "py" | "pe" | "ph" | "pt" | "ro" | "sa" | "sn" | "rs" | "sk" | "si" | "za" | "kr" | "lk" | "th" | "bs" | "tt" | "tn" | "ua" | "ae" | "uy" | "ve" | "vn" | "zm" | "zw" | "ly" | "mobile-us" | "mobile-uk" | "mobile-ca" | "mobile-de" | "mobile-fr" | "mobile-es" | "mobile-it" | "mobile-br" | "mobile-au" | "mobile-dk" | "mobile-mx" | "mobile-nl" | "mobile-se" | "mobile-tr" | "mobile-in" | "mobile-id" | "mobile-il" | "il-ext" | "tr-ext" | "dk-ext" | "no-ext" | "se-ext" | "fi-ext" | "ch-ext" | "mobile-il-ext" | "pa" | "pk" | "tw" | "qa";
  /**
   * Display Date
   * @description Date in 'YYYYMM15' format (e.g., '20231215') for historical data of a past month; day must be '15'. Omit for most recent data.
   */
  display_date?: string;
  /**
   * Display Limit
   * @description Maximum number of results. API defaults to 10,000 if set to 0 or omitted by client. Max is 100,000.
   * @default 10000
   */
  display_limit: number;
  /**
   * Display Offset
   * @description Number of initial results to skip for pagination. Use with `display_limit` for results beyond the initial fetch.
   * @default 0
   */
  display_offset: number;
  /**
   * Export Columns
   * @description List of column codes to include. See `ExportColumnsEnum` for codes. Defaults to all columns if omitted.
   * @default [
   *       "Po",
   *       "Pt",
   *       "Dn",
   *       "Ur",
   *       "Fk",
   *       "Fp",
   *       "Fl"
   *     ]
   */
  export_columns: string[];
  /**
   * Export Decode
   * @description Set to 1 for a plain URL-decoded response string, 0 for URL-encoded.
   * @default 1
   * @enum {integer}
   */
  export_decode: 0 | 1;
  /**
   * Export Escape
   * @description Set to 1 to wrap output columns in double quotation marks ("), 0 to not wrap.
   * @default 1
   * @enum {integer}
   */
  export_escape: 0 | 1;
  /**
   * Phrase
   * @description Keyword or phrase to get Google's top 100 organic search results for.
   */
  phrase?: string;
  /**
   * Positions Type
   * @description Type of search results: 'organic' for traditional results, or 'all' to include SERP Features. If 'all', 'Pt' column indicates SERP feature code or '-1' for organic.
   * @default organic
   * @enum {string}
   */
  positions_type: "organic" | "all";
};

/**
 * Type of SEMRUSH's SEMRUSH_ORGANIC_RESULTS tool output.
 */
type SEMRUSH_ORGANIC_RESULTS_OUTPUT = {
  /**
   * Data
   * @description Raw API response string, typically semicolon-separated values with CR+LF line endings. Structure depends on `export_escape` and `export_columns`.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_PAID_RESULTS tool input.
 */
type SEMRUSH_PAID_RESULTS_INPUT = {
  /**
   * Database
   * @description Semrush regional database code (e.g., 'us' for United States, 'gb' for United Kingdom).
   * @enum {string}
   */
  database?: "us" | "uk" | "ca" | "ru" | "de" | "fr" | "es" | "it" | "br" | "au" | "ar" | "be" | "ch" | "dk" | "fi" | "hk" | "ie" | "il" | "mx" | "nl" | "no" | "pl" | "se" | "sg" | "tr" | "jp" | "in" | "hu" | "af" | "al" | "dz" | "ao" | "am" | "at" | "az" | "bh" | "bd" | "by" | "bz" | "bo" | "ba" | "bw" | "bn" | "bg" | "cv" | "kh" | "cm" | "cl" | "co" | "cr" | "hr" | "cy" | "cz" | "cd" | "do" | "ec" | "eg" | "sv" | "ee" | "et" | "ge" | "gh" | "gr" | "gt" | "gy" | "ht" | "hn" | "is" | "id" | "jm" | "jo" | "kz" | "kw" | "lv" | "lb" | "lt" | "lu" | "mg" | "my" | "mt" | "mu" | "md" | "mn" | "me" | "ma" | "mz" | "na" | "np" | "nz" | "ni" | "ng" | "om" | "py" | "pe" | "ph" | "pt" | "ro" | "sa" | "sn" | "rs" | "sk" | "si" | "za" | "kr" | "lk" | "th" | "bs" | "tt" | "tn" | "ua" | "ae" | "uy" | "ve" | "vn" | "zm" | "zw" | "ly" | "mobile-us" | "mobile-uk" | "mobile-ca" | "mobile-de" | "mobile-fr" | "mobile-es" | "mobile-it" | "mobile-br" | "mobile-au" | "mobile-dk" | "mobile-mx" | "mobile-nl" | "mobile-se" | "mobile-tr" | "mobile-in" | "mobile-id" | "mobile-il" | "il-ext" | "tr-ext" | "dk-ext" | "no-ext" | "se-ext" | "fi-ext" | "ch-ext" | "mobile-il-ext" | "pa" | "pk" | "tw" | "qa";
  /**
   * Display Date
   * @description Date in YYYYMM15 format (e.g., '20231215') for historical data of a specific month; if omitted, returns most recent data.
   */
  display_date?: string;
  /**
   * Display Limit
   * @description Maximum number of results to return.
   * @default 10000
   */
  display_limit: number;
  /**
   * Display Offset
   * @description Number of results to skip from the beginning, for pagination.
   * @default 0
   */
  display_offset: number;
  /**
   * Export Columns
   * @description List of column codes to include (e.g., `Dn` for Domain, `Ur` for URL, `Vu` for a context-specific value). Defaults to all (`Dn`, `Ur`, `Vu`) if omitted.
   * @default [
   *       "Dn",
   *       "Ur",
   *       "Vu"
   *     ]
   */
  export_columns: string[];
  /**
   * Export Decode
   * @description Set to 0 for URL-encoded response data, or 1 to preserve special characters (non-URL-encoded).
   * @default 1
   * @enum {integer}
   */
  export_decode: 0 | 1;
  /**
   * Export Escape
   * @description Set to 1 to wrap report columns in double quotes, or 0 to disable.
   * @default 1
   * @enum {integer}
   */
  export_escape: 0 | 1;
  /**
   * Phrase
   * @description Keyword or phrase to analyze for paid search results.
   */
  phrase?: string;
};

/**
 * Type of SEMRUSH's SEMRUSH_PAID_RESULTS tool output.
 */
type SEMRUSH_PAID_RESULTS_OUTPUT = {
  /**
   * Data
   * @description API response data, usually a CSV-formatted string listing domains in paid search results.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_PHRASE_QUESTIONS tool input.
 */
type SEMRUSH_PHRASE_QUESTIONS_INPUT = {
  /**
   * Database
   * @description Semrush regional database (e.g., 'us', 'gb'). See Semrush documentation for the full list.
   * @enum {string}
   */
  database?: "us" | "uk" | "ca" | "ru" | "de" | "fr" | "es" | "it" | "br" | "au" | "ar" | "be" | "ch" | "dk" | "fi" | "hk" | "ie" | "il" | "mx" | "nl" | "no" | "pl" | "se" | "sg" | "tr" | "jp" | "in" | "hu" | "af" | "al" | "dz" | "ao" | "am" | "at" | "az" | "bh" | "bd" | "by" | "bz" | "bo" | "ba" | "bw" | "bn" | "bg" | "cv" | "kh" | "cm" | "cl" | "co" | "cr" | "hr" | "cy" | "cz" | "cd" | "do" | "ec" | "eg" | "sv" | "ee" | "et" | "ge" | "gh" | "gr" | "gt" | "gy" | "ht" | "hn" | "is" | "id" | "jm" | "jo" | "kz" | "kw" | "lv" | "lb" | "lt" | "lu" | "mg" | "my" | "mt" | "mu" | "md" | "mn" | "me" | "ma" | "mz" | "na" | "np" | "nz" | "ni" | "ng" | "om" | "py" | "pe" | "ph" | "pt" | "ro" | "sa" | "sn" | "rs" | "sk" | "si" | "za" | "kr" | "lk" | "th" | "bs" | "tt" | "tn" | "ua" | "ae" | "uy" | "ve" | "vn" | "zm" | "zw" | "ly" | "mobile-us" | "mobile-uk" | "mobile-ca" | "mobile-de" | "mobile-fr" | "mobile-es" | "mobile-it" | "mobile-br" | "mobile-au" | "mobile-dk" | "mobile-mx" | "mobile-nl" | "mobile-se" | "mobile-tr" | "mobile-in" | "mobile-id" | "mobile-il" | "il-ext" | "tr-ext" | "dk-ext" | "no-ext" | "se-ext" | "fi-ext" | "ch-ext" | "mobile-il-ext" | "pa" | "pk" | "tw" | "qa";
  /**
   * Display Filter
   * @description Column identifiers (from `PhraseQuestionsFilterType`) for filtering; refer to Semrush API documentation for behavior.
   * @default []
   */
  display_filter: string[];
  /**
   * Display Limit
   * @description Maximum number of results to return.
   * @default 10000
   */
  display_limit: number;
  /**
   * Display Offset
   * @description Number of results to skip for pagination.
   * @default 0
   */
  display_offset: number;
  /**
   * Display Sort
   * @description Column and order for sorting results (e.g., 'nq_desc' for descending by Nq).
   * @default nq_desc
   * @enum {string}
   */
  display_sort: "nq_asc" | "nq_desc" | "cp_asc" | "cp_desc" | "co_asc" | "co_desc" | "nr_asc" | "nr_desc" | "kd_asc" | "kd_desc";
  /**
   * Export Columns
   * @description Columns from `PhraseQuestionsExportColumns` to include in the report.
   * @default [
   *       "Ph",
   *       "Nq",
   *       "Cp",
   *       "Co",
   *       "Nr",
   *       "Td",
   *       "In",
   *       "Kd"
   *     ]
   */
  export_columns: string[];
  /**
   * Export Decode
   * @description Set to 0 for URL-encoded response data; 1 for unconverted data.
   * @default 1
   * @enum {integer}
   */
  export_decode: 0 | 1;
  /**
   * Export Escape
   * @description Set to 1 to wrap report columns in double quotation marks ("); 0 to disable.
   * @default 1
   * @enum {integer}
   */
  export_escape: 0 | 1;
  /**
   * Phrase
   * @description Keyword or phrase to investigate for related questions.
   */
  phrase?: string;
};

/**
 * Type of SEMRUSH's SEMRUSH_PHRASE_QUESTIONS tool output.
 */
type SEMRUSH_PHRASE_QUESTIONS_OUTPUT = {
  /**
   * Data
   * @description Report data as CSV-like plain text, containing the requested phrase questions.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_PLA_COMPETITORS tool input.
 */
type SEMRUSH_PLA_COMPETITORS_INPUT = {
  /**
   * Database
   * @description The Semrush regional database to query (e.g., 'us', 'uk', 'ca').
   * @enum {string}
   */
  database?: "us" | "uk" | "ca" | "ru" | "de" | "fr" | "es" | "it" | "br" | "au" | "ar" | "be" | "ch" | "dk" | "fi" | "hk" | "ie" | "il" | "mx" | "nl" | "no" | "pl" | "se" | "sg" | "tr" | "jp" | "in" | "hu" | "af" | "al" | "dz" | "ao" | "am" | "at" | "az" | "bh" | "bd" | "by" | "bz" | "bo" | "ba" | "bw" | "bn" | "bg" | "cv" | "kh" | "cm" | "cl" | "co" | "cr" | "hr" | "cy" | "cz" | "cd" | "do" | "ec" | "eg" | "sv" | "ee" | "et" | "ge" | "gh" | "gr" | "gt" | "gy" | "ht" | "hn" | "is" | "id" | "jm" | "jo" | "kz" | "kw" | "lv" | "lb" | "lt" | "lu" | "mg" | "my" | "mt" | "mu" | "md" | "mn" | "me" | "ma" | "mz" | "na" | "np" | "nz" | "ni" | "ng" | "om" | "py" | "pe" | "ph" | "pt" | "ro" | "sa" | "sn" | "rs" | "sk" | "si" | "za" | "kr" | "lk" | "th" | "bs" | "tt" | "tn" | "ua" | "ae" | "uy" | "ve" | "vn" | "zm" | "zw" | "ly" | "mobile-us" | "mobile-uk" | "mobile-ca" | "mobile-de" | "mobile-fr" | "mobile-es" | "mobile-it" | "mobile-br" | "mobile-au" | "mobile-dk" | "mobile-mx" | "mobile-nl" | "mobile-se" | "mobile-tr" | "mobile-in" | "mobile-id" | "mobile-il" | "il-ext" | "tr-ext" | "dk-ext" | "no-ext" | "se-ext" | "fi-ext" | "ch-ext" | "mobile-il-ext" | "pa" | "pk" | "tw" | "qa";
  /**
   * Display Limit
   * @description The maximum number of results to return in the response. Use with `display_offset` for comprehensive data retrieval.
   * @default 10000
   */
  display_limit: number;
  /**
   * Display Offset
   * @description The starting position of the results to fetch, effectively skipping this number of initial results. Used for pagination when `display_limit` is less than the total number of available results.
   * @default 0
   */
  display_offset: number;
  /**
   * Display Sort
   * @description Specifies the sorting criteria for the results. Options include sorting by 'Np' (Number of PLA Keywords) or 'Cr' (Common Keywords count), in 'asc' (ascending) or 'desc' (descending) order.
   * @default np_desc
   * @enum {string}
   */
  display_sort: "np_asc" | "np_desc" | "cr_asc" | "cr_desc";
  /**
   * Domain
   * @description The domain name of the website to investigate (e.g., 'example.com').
   */
  domain?: string;
  /**
   * Export Columns
   * @description Specifies which data columns to include in the report. Available column codes: 'Dn' (Domain Name), 'Cr' (Common Keywords), 'Np' (Number of PLA Keywords), 'Sh' (PLA Keywords), 'Ad' (Number of PLA Ads), 'At' (PLA Ad Titles), 'Ac' (PLA Ad Copies), 'Or' (Organic Keywords).
   * @default [
   *       "Dn",
   *       "Cr",
   *       "Np",
   *       "Sh",
   *       "Ad",
   *       "At",
   *       "Ac",
   *       "Or"
   *     ]
   */
  export_columns: string[];
  /**
   * Export Decode
   * @description Determines if the response string is URL-encoded. Set to 0 for URL-encoded output, 1 for a non-converted (raw) string.
   * @default 1
   * @enum {integer}
   */
  export_decode: 0 | 1;
  /**
   * Export Escape
   * @description Controls whether report columns are wrapped in double quotation marks. Set to 1 to enable wrapping, 0 to disable.
   * @default 1
   * @enum {integer}
   */
  export_escape: 0 | 1;
};

/**
 * Type of SEMRUSH's SEMRUSH_PLA_COMPETITORS tool output.
 */
type SEMRUSH_PLA_COMPETITORS_OUTPUT = {
  /**
   * Data
   * @description The competitor data, typically in a CSV-like string format, based on the export parameters.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_PLA_COPIES tool input.
 */
type SEMRUSH_PLA_COPIES_INPUT = {
  /**
   * Database
   * @description Regional database to query (e.g., 'us', 'gb', 'de').
   * @enum {string}
   */
  database?: "us" | "uk" | "ca" | "ru" | "de" | "fr" | "es" | "it" | "br" | "au" | "ar" | "be" | "ch" | "dk" | "fi" | "hk" | "ie" | "il" | "mx" | "nl" | "no" | "pl" | "se" | "sg" | "tr" | "jp" | "in" | "hu" | "af" | "al" | "dz" | "ao" | "am" | "at" | "az" | "bh" | "bd" | "by" | "bz" | "bo" | "ba" | "bw" | "bn" | "bg" | "cv" | "kh" | "cm" | "cl" | "co" | "cr" | "hr" | "cy" | "cz" | "cd" | "do" | "ec" | "eg" | "sv" | "ee" | "et" | "ge" | "gh" | "gr" | "gt" | "gy" | "ht" | "hn" | "is" | "id" | "jm" | "jo" | "kz" | "kw" | "lv" | "lb" | "lt" | "lu" | "mg" | "my" | "mt" | "mu" | "md" | "mn" | "me" | "ma" | "mz" | "na" | "np" | "nz" | "ni" | "ng" | "om" | "py" | "pe" | "ph" | "pt" | "ro" | "sa" | "sn" | "rs" | "sk" | "si" | "za" | "kr" | "lk" | "th" | "bs" | "tt" | "tn" | "ua" | "ae" | "uy" | "ve" | "vn" | "zm" | "zw" | "ly" | "mobile-us" | "mobile-uk" | "mobile-ca" | "mobile-de" | "mobile-fr" | "mobile-es" | "mobile-it" | "mobile-br" | "mobile-au" | "mobile-dk" | "mobile-mx" | "mobile-nl" | "mobile-se" | "mobile-tr" | "mobile-in" | "mobile-id" | "mobile-il" | "il-ext" | "tr-ext" | "dk-ext" | "no-ext" | "se-ext" | "fi-ext" | "ch-ext" | "mobile-il-ext" | "pa" | "pk" | "tw" | "qa";
  /**
   * Display Filter
   * @description Columns to filter on ('Tt': Title, 'Pr': Price). Filter conditions depend on API implementation.
   * @default []
   */
  display_filter: string[];
  /**
   * Display Limit
   * @description Number of results to return. Up to 100,000 results can be retrieved in a single call without offset. For more, use with `display_offset`.
   * @default 10000
   */
  display_limit: number;
  /**
   * Display Offset
   * @description Results to skip. When used, `display_limit` should be `display_offset` + (number of results per page, up to 100k), not exceeding 4,000,000 total for `display_limit`.
   * @default 0
   */
  display_offset: number;
  /**
   * Display Sort
   * @description Sort order for results. 'pr' is Price, 'pc' is Position Change.
   * @default pr_desc
   * @enum {string}
   */
  display_sort: "pr_asc" | "pr_desc" | "pc_asc" | "pc_desc";
  /**
   * Domain
   * @description Domain to investigate for PLA copies.
   */
  domain?: string;
  /**
   * Export Columns
   * @description Specific columns for the report. If empty or omitted, all columns are returned. Available: 'Tt' (Title), 'Pr' (Price), 'Ur' (URL), 'Pc' (Position Change), 'Un' (Number of Keywords), 'Ts' (Timestamp).
   * @default [
   *       "Tt",
   *       "Pr",
   *       "Ur",
   *       "Pc",
   *       "Un",
   *       "Ts"
   *     ]
   */
  export_columns: string[];
  /**
   * Export Decode
   * @description If 0, response is URL-encoded; 1 for decoded response.
   * @default 1
   * @enum {integer}
   */
  export_decode: 0 | 1;
  /**
   * Export Escape
   * @description If 1, wraps report columns in double quotes ("); 0 disables.
   * @default 1
   * @enum {integer}
   */
  export_escape: 0 | 1;
};

/**
 * Type of SEMRUSH's SEMRUSH_PLA_COPIES tool output.
 */
type SEMRUSH_PLA_COPIES_OUTPUT = {
  /**
   * Data
   * @description PLA copies data, usually a CSV-formatted string. Columns depend on the `export_columns` request parameter.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_REFERRING_DOMAINS tool input.
 */
type SEMRUSH_REFERRING_DOMAINS_INPUT = {
  /**
   * Display Filter
   * @description Filter types to apply (e.g., 'newdomain', 'country'). This specifies the *types* of filters, not the filter values themselves (e.g., a specific country code).
   * @default []
   */
  display_filter: string[];
  /**
   * Display Limit
   * @description Maximum number of referring domains to return. A value of 0 is also treated as 10,000.
   * @default 10000
   */
  display_limit: number;
  /**
   * Display Offset
   * @description Number of initial results to skip. Consider adjusting `display_limit` if using an offset.
   * @default 0
   */
  display_offset: number;
  /**
   * Display Sort
   * @description Column and order for sorting results.
   * @default backlinks_num_desc
   * @enum {string}
   */
  display_sort: "domain_ascore_asc" | "domain_ascore_desc" | "backlinks_num_asc" | "backlinks_num_desc" | "last_seen_asc" | "last_seen_desc" | "first_seen_asc" | "first_seen_desc";
  /**
   * Export Columns
   * @description Columns to include in the report. All available columns are returned if empty.
   * @default [
   *       "domain_ascore",
   *       "domain",
   *       "backlinks_num",
   *       "ip",
   *       "country",
   *       "first_seen",
   *       "last_seen"
   *     ]
   */
  export_columns: string[];
  /**
   * Target
   * @description The target URL, domain, or root domain to analyze for referring domains.
   */
  target?: string;
  /**
   * Target Type
   * @description Type of the `target`.
   * @enum {string}
   */
  target_type?: "root_domain" | "domain" | "url";
};

/**
 * Type of SEMRUSH's SEMRUSH_REFERRING_DOMAINS tool output.
 */
type SEMRUSH_REFERRING_DOMAINS_OUTPUT = {
  /**
   * Data
   * @description The referring domains report data, typically as a text-based format (e.g., CSV string).
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_REFERRING_DOMAINS_BY_COUNTRY tool input.
 */
type SEMRUSH_REFERRING_DOMAINS_BY_COUNTRY_INPUT = {
  /**
   * Display Limit
   * @description Maximum number of results to return.
   * @default 10000
   */
  display_limit: number;
  /**
   * Display Offset
   * @description Number of initial results to skip.
   * @default 0
   */
  display_offset: number;
  /**
   * Display Sort
   * @description Sorting order for the results.
   * @default domains_num_desc
   * @enum {string}
   */
  display_sort: "domains_num_asc" | "domains_num_desc" | "backlinks_num_asc" | "backlinks_num_desc";
  /**
   * Export Columns
   * @description Columns to include in the report.
   * @default [
   *       "country",
   *       "domains_num",
   *       "backlinks_num"
   *     ]
   */
  export_columns: string[];
  /**
   * Target
   * @description Domain, subdomain, or URL to analyze for its referring domains by country.
   */
  target?: string;
  /**
   * Target Type
   * @description Specifies the type of the provided target.
   * @enum {string}
   */
  target_type?: "root_domain" | "domain" | "url";
};

/**
 * Type of SEMRUSH's SEMRUSH_REFERRING_DOMAINS_BY_COUNTRY tool output.
 */
type SEMRUSH_REFERRING_DOMAINS_BY_COUNTRY_OUTPUT = {
  /**
   * Data
   * @description CSV-formatted report data; each row represents a country and its referring domain statistics.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_REFERRING_I_PS tool input.
 */
type SEMRUSH_REFERRING_I_PS_INPUT = {
  /**
   * Display Limit
   * @description The maximum number of referring IPs to return in the response. If set to 0 or not specified, the default is 10,000. When using `display_offset`, this limit applies to the number of results *after* the offset.
   * @default 10000
   */
  display_limit: number;
  /**
   * Display Offset
   * @description The number of results to skip from the beginning of the list. If this parameter is used, the `display_limit` value might need to be adjusted to retrieve the desired number of results after the offset. For instance, to get results 101-200, set `display_offset` to 100 and `display_limit` to 100.
   * @default 0
   */
  display_offset: number;
  /**
   * Display Sort
   * @description The column and order by which to sort the results. For example, 'backlinks_num_desc' sorts by the number of backlinks in descending order.
   * @default backlinks_num_desc
   * @enum {string}
   */
  display_sort: "domains_num_asc" | "domains_num_desc" | "backlinks_num_asc" | "backlinks_num_desc" | "first_seen_asc" | "first_seen_desc" | "last_seen_asc" | "last_seen_desc";
  /**
   * Export Columns
   * @description A list of columns to include in the report. If not specified, all default columns will be returned. Available columns: 'ip', 'country', 'domains_num', 'backlinks_num', 'first_seen', 'last_seen'.
   * @default [
   *       "ip",
   *       "country",
   *       "domains_num",
   *       "backlinks_num",
   *       "first_seen",
   *       "last_seen"
   *     ]
   */
  export_columns: string[];
  /**
   * Target
   * @description The target URL, domain, or root domain for which to retrieve referring IPs data.
   */
  target?: string;
  /**
   * Target Type
   * @description The type of target to analyze. Choose 'root_domain' for the main domain, 'domain' for a specific subdomain, or 'url' for a particular URL.
   * @enum {string}
   */
  target_type?: "root_domain" | "domain" | "url";
};

/**
 * Type of SEMRUSH's SEMRUSH_REFERRING_I_PS tool output.
 */
type SEMRUSH_REFERRING_I_PS_OUTPUT = {
  /**
   * Data
   * @description A string containing the referring IPs report data, typically in CSV format.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_RELATED_KEYWORDS tool input.
 */
type SEMRUSH_RELATED_KEYWORDS_INPUT = {
  /**
   * Database
   * @description Regional database code (e.g., 'us', 'gb') for targeting data. See Semrush docs for full list.
   * @enum {string}
   */
  database?: "us" | "uk" | "ca" | "ru" | "de" | "fr" | "es" | "it" | "br" | "au" | "ar" | "be" | "ch" | "dk" | "fi" | "hk" | "ie" | "il" | "mx" | "nl" | "no" | "pl" | "se" | "sg" | "tr" | "jp" | "in" | "hu" | "af" | "al" | "dz" | "ao" | "am" | "at" | "az" | "bh" | "bd" | "by" | "bz" | "bo" | "ba" | "bw" | "bn" | "bg" | "cv" | "kh" | "cm" | "cl" | "co" | "cr" | "hr" | "cy" | "cz" | "cd" | "do" | "ec" | "eg" | "sv" | "ee" | "et" | "ge" | "gh" | "gr" | "gt" | "gy" | "ht" | "hn" | "is" | "id" | "jm" | "jo" | "kz" | "kw" | "lv" | "lb" | "lt" | "lu" | "mg" | "my" | "mt" | "mu" | "md" | "mn" | "me" | "ma" | "mz" | "na" | "np" | "nz" | "ni" | "ng" | "om" | "py" | "pe" | "ph" | "pt" | "ro" | "sa" | "sn" | "rs" | "sk" | "si" | "za" | "kr" | "lk" | "th" | "bs" | "tt" | "tn" | "ua" | "ae" | "uy" | "ve" | "vn" | "zm" | "zw" | "ly" | "mobile-us" | "mobile-uk" | "mobile-ca" | "mobile-de" | "mobile-fr" | "mobile-es" | "mobile-it" | "mobile-br" | "mobile-au" | "mobile-dk" | "mobile-mx" | "mobile-nl" | "mobile-se" | "mobile-tr" | "mobile-in" | "mobile-id" | "mobile-il" | "il-ext" | "tr-ext" | "dk-ext" | "no-ext" | "se-ext" | "fi-ext" | "ch-ext" | "mobile-il-ext" | "pa" | "pk" | "tw" | "qa";
  /**
   * Display Date
   * @description Date ('YYYYMM15') for historical data from a specific past month. Omit for most recent.
   */
  display_date?: string;
  /**
   * Display Filter
   * @description Filters results by column types (e.g., Ph, Nq, Wc). See `RelatedKeywordsFilterType`. For complex filters, direct API use may be needed.
   * @default []
   */
  display_filter: string[];
  /**
   * Display Limit
   * @description Maximum number of related keywords to return.
   * @default 10000
   */
  display_limit: number;
  /**
   * Display Offset
   * @description Number of initial entries to skip, for pagination.
   * @default 0
   */
  display_offset: number;
  /**
   * Display Sort
   * @description Sort order for results (e.g., `nq_desc` for search volume descending). See `RelatedKeywordsSortOrder`.
   * @default nq_desc
   * @enum {string}
   */
  display_sort: "nq_asc" | "nq_desc" | "cp_asc" | "cp_desc" | "co_asc" | "co_desc" | "nr_asc" | "nr_desc" | "td_asc" | "td_desc" | "in_asc" | "in_desc" | "kd_asc" | "kd_desc";
  /**
   * Export Columns
   * @description Specifies data columns to include. Available (from `ExportColumnsEnum`): Ph (Keyword text), Nq (Search Volume), Cp (Competitive Density 0-1), Co (CPC in USD), Nr (Number of Results), Td (Trend 12mo), Rr (Relatedness score), Fk (SERP Features), In (Search Intent 0-Nav,1-Com,2-Info,3-Trans), Kd (Keyword Difficulty 0-100).
   * @default [
   *       "Ph",
   *       "Nq",
   *       "Cp",
   *       "Co",
   *       "Nr",
   *       "Td",
   *       "Rr",
   *       "Fk",
   *       "In",
   *       "Kd"
   *     ]
   */
  export_columns: string[];
  /**
   * Export Decode
   * @description If 0, returns URL-encoded string; if 1, returns plain text (typically CSV).
   * @default 1
   * @enum {integer}
   */
  export_decode: 0 | 1;
  /**
   * Export Escape
   * @description If 1, wraps CSV columns in double quotes; 0 disables.
   * @default 1
   * @enum {integer}
   */
  export_escape: 0 | 1;
  /**
   * Phrase
   * @description Keyword or phrase to find related terms for.
   */
  phrase?: string;
};

/**
 * Type of SEMRUSH's SEMRUSH_RELATED_KEYWORDS tool output.
 */
type SEMRUSH_RELATED_KEYWORDS_OUTPUT = {
  /**
   * Data
   * @description API response data. Typically CSV, but URL-encoded if `export_decode` in request was 0.
   */
  data?: string;
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
 * Type of SEMRUSH's SEMRUSH_TLD_DISTRIBUTION tool input.
 */
type SEMRUSH_TLD_DISTRIBUTION_INPUT = {
  /**
   * Display Limit
   * @description Maximum number of results to return. If 0 is provided, the default limit of 10,000 will be applied.
   * @default 10000
   */
  display_limit: number;
  /**
   * Display Offset
   * @description Number of results to skip from the start. For Semrush API compatibility when using offset, `display_limit` may need to be `desired_limit + offset`.
   * @default 0
   */
  display_offset: number;
  /**
   * Display Sort
   * @description Sorting criteria for the TLD distribution results.
   * @default domains_num_desc
   * @enum {string}
   */
  display_sort: "domains_num_asc" | "domains_num_desc" | "backlinks_num_asc" | "backlinks_num_desc";
  /**
   * Export Columns
   * @description Columns to include in the report. If omitted or empty, all columns (`zone`, `domains_num`, `backlinks_num`) are returned.
   * @default [
   *       "zone",
   *       "domains_num",
   *       "backlinks_num"
   *     ]
   */
  export_columns: string[];
  /**
   * Target
   * @description The target for which to retrieve TLD distribution data. This can be a root domain (e.g., 'example.com'), a subdomain (e.g., 'blog.example.com'), or a specific URL (e.g., 'https://example.com/path').
   */
  target?: string;
  /**
   * Target Type
   * @description Type of the target being analyzed.
   * @enum {string}
   */
  target_type?: "root_domain" | "domain" | "url";
};

/**
 * Type of SEMRUSH's SEMRUSH_TLD_DISTRIBUTION tool output.
 */
type SEMRUSH_TLD_DISTRIBUTION_OUTPUT = {
  /**
   * Data
   * @description The TLD distribution report data, returned as a string. This string is typically in a structured text format (e.g., CSV-like) where each line represents a TLD and its metrics, based on the `export_columns` requested.
   */
  data?: string;
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
 * Type map of all available tool input types for toolkit "SEMRUSH".
 */
export type SEMRUSH_TOOL_INPUTS = {
  ADS_COPIES: SEMRUSH_ADS_COPIES_INPUT
  ANCHORS: SEMRUSH_ANCHORS_INPUT
  AUTHORITY_SCORE_PROFILE: SEMRUSH_AUTHORITY_SCORE_PROFILE_INPUT
  BACKLINKS: SEMRUSH_BACKLINKS_INPUT
  BACKLINKS_OVERVIEW: SEMRUSH_BACKLINKS_OVERVIEW_INPUT
  BATCH_COMPARISON: SEMRUSH_BATCH_COMPARISON_INPUT
  BATCH_KEYWORD_OVERVIEW: SEMRUSH_BATCH_KEYWORD_OVERVIEW_INPUT
  BROAD_MATCH_KEYWORD: SEMRUSH_BROAD_MATCH_KEYWORD_INPUT
  CATEGORIES: SEMRUSH_CATEGORIES_INPUT
  CATEGORIES_PROFILE: SEMRUSH_CATEGORIES_PROFILE_INPUT
  COMPETITORS: SEMRUSH_COMPETITORS_INPUT
  COMPETITORS_IN_ORGANIC_SEARCH: SEMRUSH_COMPETITORS_IN_ORGANIC_SEARCH_INPUT
  COMPETITORS_IN_PAID_SEARCH: SEMRUSH_COMPETITORS_IN_PAID_SEARCH_INPUT
  DOMAIN_AD_HISTORY: SEMRUSH_DOMAIN_AD_HISTORY_INPUT
  DOMAIN_ORGANIC_PAGES: SEMRUSH_DOMAIN_ORGANIC_PAGES_INPUT
  DOMAIN_ORGANIC_SEARCH_KEYWORDS: SEMRUSH_DOMAIN_ORGANIC_SEARCH_KEYWORDS_INPUT
  DOMAIN_ORGANIC_SUBDOMAINS: SEMRUSH_DOMAIN_ORGANIC_SUBDOMAINS_INPUT
  DOMAIN_PAID_SEARCH_KEYWORDS: SEMRUSH_DOMAIN_PAID_SEARCH_KEYWORDS_INPUT
  DOMAIN_PLA_SEARCH_KEYWORDS: SEMRUSH_DOMAIN_PLA_SEARCH_KEYWORDS_INPUT
  DOMAIN_VS_DOMAIN: SEMRUSH_DOMAIN_VS_DOMAIN_INPUT
  HISTORICAL_DATA: SEMRUSH_HISTORICAL_DATA_INPUT
  INDEXED_PAGES: SEMRUSH_INDEXED_PAGES_INPUT
  KEYWORDS_ADS_HISTORY: SEMRUSH_KEYWORDS_ADS_HISTORY_INPUT
  KEYWORD_DIFFICULTY: SEMRUSH_KEYWORD_DIFFICULTY_INPUT
  KEYWORD_OVERVIEW_ALL_DATABASES: SEMRUSH_KEYWORD_OVERVIEW_ALL_DATABASES_INPUT
  KEYWORD_OVERVIEW_ONE_DATABASE: SEMRUSH_KEYWORD_OVERVIEW_ONE_DATABASE_INPUT
  ORGANIC_RESULTS: SEMRUSH_ORGANIC_RESULTS_INPUT
  PAID_RESULTS: SEMRUSH_PAID_RESULTS_INPUT
  PHRASE_QUESTIONS: SEMRUSH_PHRASE_QUESTIONS_INPUT
  PLA_COMPETITORS: SEMRUSH_PLA_COMPETITORS_INPUT
  PLA_COPIES: SEMRUSH_PLA_COPIES_INPUT
  REFERRING_DOMAINS: SEMRUSH_REFERRING_DOMAINS_INPUT
  REFERRING_DOMAINS_BY_COUNTRY: SEMRUSH_REFERRING_DOMAINS_BY_COUNTRY_INPUT
  REFERRING_I_PS: SEMRUSH_REFERRING_I_PS_INPUT
  RELATED_KEYWORDS: SEMRUSH_RELATED_KEYWORDS_INPUT
  TLD_DISTRIBUTION: SEMRUSH_TLD_DISTRIBUTION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SEMRUSH".
 */
export type SEMRUSH_TOOL_OUTPUTS = {
  ADS_COPIES: SEMRUSH_ADS_COPIES_OUTPUT
  ANCHORS: SEMRUSH_ANCHORS_OUTPUT
  AUTHORITY_SCORE_PROFILE: SEMRUSH_AUTHORITY_SCORE_PROFILE_OUTPUT
  BACKLINKS: SEMRUSH_BACKLINKS_OUTPUT
  BACKLINKS_OVERVIEW: SEMRUSH_BACKLINKS_OVERVIEW_OUTPUT
  BATCH_COMPARISON: SEMRUSH_BATCH_COMPARISON_OUTPUT
  BATCH_KEYWORD_OVERVIEW: SEMRUSH_BATCH_KEYWORD_OVERVIEW_OUTPUT
  BROAD_MATCH_KEYWORD: SEMRUSH_BROAD_MATCH_KEYWORD_OUTPUT
  CATEGORIES: SEMRUSH_CATEGORIES_OUTPUT
  CATEGORIES_PROFILE: SEMRUSH_CATEGORIES_PROFILE_OUTPUT
  COMPETITORS: SEMRUSH_COMPETITORS_OUTPUT
  COMPETITORS_IN_ORGANIC_SEARCH: SEMRUSH_COMPETITORS_IN_ORGANIC_SEARCH_OUTPUT
  COMPETITORS_IN_PAID_SEARCH: SEMRUSH_COMPETITORS_IN_PAID_SEARCH_OUTPUT
  DOMAIN_AD_HISTORY: SEMRUSH_DOMAIN_AD_HISTORY_OUTPUT
  DOMAIN_ORGANIC_PAGES: SEMRUSH_DOMAIN_ORGANIC_PAGES_OUTPUT
  DOMAIN_ORGANIC_SEARCH_KEYWORDS: SEMRUSH_DOMAIN_ORGANIC_SEARCH_KEYWORDS_OUTPUT
  DOMAIN_ORGANIC_SUBDOMAINS: SEMRUSH_DOMAIN_ORGANIC_SUBDOMAINS_OUTPUT
  DOMAIN_PAID_SEARCH_KEYWORDS: SEMRUSH_DOMAIN_PAID_SEARCH_KEYWORDS_OUTPUT
  DOMAIN_PLA_SEARCH_KEYWORDS: SEMRUSH_DOMAIN_PLA_SEARCH_KEYWORDS_OUTPUT
  DOMAIN_VS_DOMAIN: SEMRUSH_DOMAIN_VS_DOMAIN_OUTPUT
  HISTORICAL_DATA: SEMRUSH_HISTORICAL_DATA_OUTPUT
  INDEXED_PAGES: SEMRUSH_INDEXED_PAGES_OUTPUT
  KEYWORDS_ADS_HISTORY: SEMRUSH_KEYWORDS_ADS_HISTORY_OUTPUT
  KEYWORD_DIFFICULTY: SEMRUSH_KEYWORD_DIFFICULTY_OUTPUT
  KEYWORD_OVERVIEW_ALL_DATABASES: SEMRUSH_KEYWORD_OVERVIEW_ALL_DATABASES_OUTPUT
  KEYWORD_OVERVIEW_ONE_DATABASE: SEMRUSH_KEYWORD_OVERVIEW_ONE_DATABASE_OUTPUT
  ORGANIC_RESULTS: SEMRUSH_ORGANIC_RESULTS_OUTPUT
  PAID_RESULTS: SEMRUSH_PAID_RESULTS_OUTPUT
  PHRASE_QUESTIONS: SEMRUSH_PHRASE_QUESTIONS_OUTPUT
  PLA_COMPETITORS: SEMRUSH_PLA_COMPETITORS_OUTPUT
  PLA_COPIES: SEMRUSH_PLA_COPIES_OUTPUT
  REFERRING_DOMAINS: SEMRUSH_REFERRING_DOMAINS_OUTPUT
  REFERRING_DOMAINS_BY_COUNTRY: SEMRUSH_REFERRING_DOMAINS_BY_COUNTRY_OUTPUT
  REFERRING_I_PS: SEMRUSH_REFERRING_I_PS_OUTPUT
  RELATED_KEYWORDS: SEMRUSH_RELATED_KEYWORDS_OUTPUT
  TLD_DISTRIBUTION: SEMRUSH_TLD_DISTRIBUTION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SEMRUSH toolkit.
 */
export const SEMRUSH = {
  slug: "semrush",
  tools: {
    /**
     * Retrieves unique ad copies semrush has observed for a specified domain from a regional database, detailing ads seen in google's paid search results.
     */
    ADS_COPIES: "SEMRUSH_ADS_COPIES",
    /**
     * Use this action to get a csv report of anchor texts for backlinks pointing to a specified, publicly accessible domain, root domain, or url.
     */
    ANCHORS: "SEMRUSH_ANCHORS",
    /**
     * Retrieves the authority score (as) profile for a specified target, showing the count of referring domains that link to the target for each as value from 0 to 100.
     */
    AUTHORITY_SCORE_PROFILE: "SEMRUSH_AUTHORITY_SCORE_PROFILE",
    /**
     * Fetches backlinks for a specified domain or url as a csv-formatted string, allowing customization of columns, sorting, and filtering; ensure `display limit` surpasses `display offset` when an offset is used, and note the `urlanchor` filter may have limitations for targets with extensive backlinks.
     */
    BACKLINKS: "SEMRUSH_BACKLINKS",
    /**
     * Provides a csv-formatted summary of backlinks, including authority score and link type breakdowns, for a specified and publicly accessible domain, root domain, or url.
     */
    BACKLINKS_OVERVIEW: "SEMRUSH_BACKLINKS_OVERVIEW",
    /**
     * Compares backlink profiles for multiple specified targets (domains, subdomains, or urls) to analyze and compare link-building efforts.
     */
    BATCH_COMPARISON: "SEMRUSH_BATCH_COMPARISON",
    /**
     * Fetches a keyword overview report from a semrush regional database for up to 100 keywords, providing metrics like search volume, cpc, and keyword difficulty.
     */
    BATCH_KEYWORD_OVERVIEW: "SEMRUSH_BATCH_KEYWORD_OVERVIEW",
    /**
     * Fetches broad match keywords for a given phrase; `display sort` and `display filter` parameters are defined but currently not utilized by the api call.
     */
    BROAD_MATCH_KEYWORD: "SEMRUSH_BROAD_MATCH_KEYWORD",
    /**
     * Retrieves categories and their 0-1 confidence ratings for a specified domain, subdomain, or url, with results sorted by rating.
     */
    CATEGORIES: "SEMRUSH_CATEGORIES",
    /**
     * Retrieves a profile of content categories from referring domains for a specified target, analyzing its first 10,000 referring domains and sorting results by domain count.
     */
    CATEGORIES_PROFILE: "SEMRUSH_CATEGORIES_PROFILE",
    /**
     * Retrieves a customizable csv report of competitors for a specified target (root domain, domain, or url) based on shared backlinks or referring domains, ensuring the target is valid and its type is correctly specified.
     */
    COMPETITORS: "SEMRUSH_COMPETITORS",
    /**
     * Use to get a domain's organic search competitors from semrush as a semicolon-separated string; `display date` requires 'yyyymm15' format if used.
     */
    COMPETITORS_IN_ORGANIC_SEARCH: "SEMRUSH_COMPETITORS_IN_ORGANIC_SEARCH",
    /**
     * Retrieves a list of a domain's competitors in paid search results from a specified regional database.
     */
    COMPETITORS_IN_PAID_SEARCH: "SEMRUSH_COMPETITORS_IN_PAID_SEARCH",
    /**
     * Retrieves a domain's 12-month advertising history from semrush (keywords bid on, ad positions, ad copy) for ppc strategy and competitor analysis; most effective when the domain has ad history in the selected database.
     */
    DOMAIN_AD_HISTORY: "SEMRUSH_DOMAIN_AD_HISTORY",
    /**
     * Fetches a report on a domain's unique organic pages ranking in google's top 100 search results, with options for specifying database, date, columns, sorting, and filtering.
     */
    DOMAIN_ORGANIC_PAGES: "SEMRUSH_DOMAIN_ORGANIC_PAGES",
    /**
     * Retrieves organic search keywords for a domain from a specified semrush regional database; `display positions` must be set if `display daily=1` for daily updates.
     */
    DOMAIN_ORGANIC_SEARCH_KEYWORDS: "SEMRUSH_DOMAIN_ORGANIC_SEARCH_KEYWORDS",
    /**
     * Retrieves a report on subdomains of a given domain that rank in google's top 100 organic search results for a specified regional database.
     */
    DOMAIN_ORGANIC_SUBDOMAINS: "SEMRUSH_DOMAIN_ORGANIC_SUBDOMAINS",
    /**
     * Fetches keywords driving paid search traffic to a specified, existing domain using a supported semrush regional database.
     */
    DOMAIN_PAID_SEARCH_KEYWORDS: "SEMRUSH_DOMAIN_PAID_SEARCH_KEYWORDS",
    /**
     * Retrieves product listing ad (pla) search keywords for a specified domain from a semrush regional database.
     */
    DOMAIN_PLA_SEARCH_KEYWORDS: "SEMRUSH_DOMAIN_PLA_SEARCH_KEYWORDS",
    /**
     * Analyzes keyword rankings by comparing up to five domains to find common, unique, or gap keywords, using specified organic/paid types and comparison logic in the `domains` string.
     */
    DOMAIN_VS_DOMAIN: "SEMRUSH_DOMAIN_VS_DOMAIN",
    /**
     * Retrieves monthly historical backlink and referring domain data for a specified root domain, returned as a time series string with newest records first.
     */
    HISTORICAL_DATA: "SEMRUSH_HISTORICAL_DATA",
    /**
     * Retrieves a list of indexed pages from semrush for a specified `target` (root domain, domain, or url) and `target type`, ensuring `target` is publicly accessible, semrush-analyzable, and correctly matches `target type`.
     */
    INDEXED_PAGES: "SEMRUSH_INDEXED_PAGES",
    /**
     * Fetches a historical report (last 12 months) of domains advertising on a specified keyword in google ads, optionally for a specific month ('yyyymm15') or the most recent period, returning raw csv-like data.
     */
    KEYWORDS_ADS_HISTORY: "SEMRUSH_KEYWORDS_ADS_HISTORY",
    /**
     * Determines the keyword difficulty (kd) score (0-100, higher means greater difficulty) for a given phrase in a specific semrush regional database to assess its seo competitiveness.
     */
    KEYWORD_DIFFICULTY: "SEMRUSH_KEYWORD_DIFFICULTY",
    /**
     * Fetches a keyword overview from semrush for a specified phrase, including metrics like search volume, cpc, and competition.
     */
    KEYWORD_OVERVIEW_ALL_DATABASES: "SEMRUSH_KEYWORD_OVERVIEW_ALL_DATABASES",
    /**
     * Fetches a keyword summary for a specified phrase from a chosen regional database.
     */
    KEYWORD_OVERVIEW_ONE_DATABASE: "SEMRUSH_KEYWORD_OVERVIEW_ONE_DATABASE",
    /**
     * Retrieves up to 100,000 domains and urls from google's top 100 organic search results for a keyword and region, returning a raw string; use `display date` in 'yyyymm15' format (day must be '15') for historical data.
     */
    ORGANIC_RESULTS: "SEMRUSH_ORGANIC_RESULTS",
    /**
     * Fetches domains ranking in google's paid search results (adwords) for a specified keyword and regional database.
     */
    PAID_RESULTS: "SEMRUSH_PAID_RESULTS",
    /**
     * Fetches question-format keywords semantically related to a given query phrase for a specified regional database, aiding in understanding user search intent and discovering content ideas.
     */
    PHRASE_QUESTIONS: "SEMRUSH_PHRASE_QUESTIONS",
    /**
     * Retrieves domains competing with a specified domain in google's product listing ads (pla) from a given semrush regional database.
     */
    PLA_COMPETITORS: "SEMRUSH_PLA_COMPETITORS",
    /**
     * Fetches product listing ad (pla) copies that semrush observed for a domain in google's paid search results.
     */
    PLA_COPIES: "SEMRUSH_PLA_COPIES",
    /**
     * Retrieves a report as a text string (e.g., csv) listing domains that link to a target, with options to filter by type (not value).
     */
    REFERRING_DOMAINS: "SEMRUSH_REFERRING_DOMAINS",
    /**
     * Generates a csv report detailing the geographic distribution of referring domains (by country, determined via ip address) for a specified, publicly accessible target.
     */
    REFERRING_DOMAINS_BY_COUNTRY: "SEMRUSH_REFERRING_DOMAINS_BY_COUNTRY",
    /**
     * Fetches ip addresses that are sources of backlinks for a specified target domain, root domain, or url.
     */
    REFERRING_I_PS: "SEMRUSH_REFERRING_I_PS",
    /**
     * Call this to find related keywords (including synonyms and variations) for a target phrase in a specific regional database; `display date` (if used for historical data) must be 'yyyymm15' for a past month.
     */
    RELATED_KEYWORDS: "SEMRUSH_RELATED_KEYWORDS",
    /**
     * Fetches a report on the top-level domain (tld) distribution of referring domains for a specified target, useful for analyzing geographic or categorical backlink diversity.
     */
    TLD_DISTRIBUTION: "SEMRUSH_TLD_DISTRIBUTION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SEMRUSH".
 */
export type SEMRUSH_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SEMRUSH".
 */
export type SEMRUSH_TRIGGER_EVENTS = {}
