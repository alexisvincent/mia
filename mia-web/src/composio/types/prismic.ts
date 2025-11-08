// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PRISMIC's PRISMIC_CONTENT_API_GET_DOCUMENTS_WITH_FULLTEXT_SEARCH tool input.
 */
type PRISMIC_CONTENT_API_GET_DOCUMENTS_WITH_FULLTEXT_SEARCH_INPUT = {
  /**
   * Fetch
   * @description Comma-separated list of field API IDs to fetch.
   * @default null
   */
  fetch: string | null;
  /**
   * Fetch Links
   * @description Comma-separated list of linked document fields to fetch.
   * @default null
   */
  fetchLinks: string | null;
  /**
   * Lang
   * @description Language code (e.g., 'en-us').
   * @default null
   */
  lang: string | null;
  /**
   * Orderings
   * @description Sorting order, e.g., '[my.article.date desc]'
   * @default null
   */
  orderings: string | null;
  /**
   * Page
   * @description Page number, must be >= 1
   * @default 1
   */
  page: number;
  /**
   * Page Size
   * @description Number of documents per page (1-100).
   * @default 20
   */
  pageSize: number;
  /**
   * Q
   * @description Full-text predicate to search documents, e.g. [[fulltext(document, "search term")]]
   */
  q?: string;
};

/**
 * Type of PRISMIC's PRISMIC_CONTENT_API_GET_DOCUMENTS_WITH_FULLTEXT_SEARCH tool output.
 */
type PRISMIC_CONTENT_API_GET_DOCUMENTS_WITH_FULLTEXT_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page
       * @description URL of next page, if any
       * @default null
       */
      next_page: string | null;
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Prev Page
       * @description URL of previous page, if any
       * @default null
       */
      prev_page: string | null;
      /**
       * Results
       * @description List of matched documents
       */
      results: {
          /**
           * Alternate Languages
           * @description Alternate language versions of the document
           */
          alternate_languages: {
              /**
               * Id
               * @description ID of the alternate document
               */
              id: string;
              /**
               * Lang
               * @description Language code of the alternate version
               */
              lang: string;
              /**
               * Type
               * @description Document type of the alternate language version
               */
              type: string;
              /**
               * Uid
               * @description UID of the alternate document, if any
               * @default null
               */
              uid: string | null;
          }[];
          /**
           * Data
           * @description Document data fields, structure varies by type
           */
          data: {
              [key: string]: unknown;
          };
          /**
           * First Publication Date
           * @description First publication date as ISO 8601 string
           */
          first_publication_date: string;
          /**
           * Href
           * @description Document URL for API access
           */
          href: string;
          /**
           * Id
           * @description Document ID
           */
          id: string;
          /**
           * Lang
           * @description Language code of the document
           */
          lang: string;
          /**
           * Last Publication Date
           * @description Last publication date as ISO 8601 string
           */
          last_publication_date: string;
          /**
           * Slugs
           * @description List of slugs for the document
           */
          slugs: string[];
          /**
           * Tags
           * @description List of tags assigned to the document
           */
          tags: string[];
          /**
           * Type
           * @description Document type
           */
          type: string;
          /**
           * Uid
           * @description Document UID, if set
           * @default null
           */
          uid: string | null;
      }[];
      /**
       * Results Per Page
       * @description Number of results per page
       */
      results_per_page: number;
      /**
       * Results Size
       * @description Number of returned results on this page
       */
      results_size: number;
      /**
       * Total Pages
       * @description Total number of pages available
       */
      total_pages: number;
      /**
       * Total Results Size
       * @description Total number of matching results in repository
       */
      total_results_size: number;
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
 * Type of PRISMIC's PRISMIC_CONTENT_API_GET_DOCUMENTS_WITH_INTEGRATION_FIELDS tool input.
 */
type PRISMIC_CONTENT_API_GET_DOCUMENTS_WITH_INTEGRATION_FIELDS_INPUT = {
  /**
   * After
   * @description Return documents after this document ID (cursor pagination)
   * @default null
   */
  after: string | null;
  /**
   * Fetch
   * @description Comma-separated list of fields to fetch
   * @default null
   */
  fetch: string | null;
  /**
   * Fetch Links
   * @description Comma-separated list of linked document fields to include
   * @default null
   */
  fetchLinks: string | null;
  /**
   * Integration Fields Ref
   * @description Integration fields snapshot ref to fetch integration data
   * @default null
   */
  integrationFieldsRef: string | null;
  /**
   * Lang
   * @description Language code to query, default '*' for all languages
   * @default null
   */
  lang: string | null;
  /**
   * Orderings
   * @description Sort order, e.g. [my.post.date desc]
   * @default null
   */
  orderings: string | null;
  /**
   * Page
   * @description Page number for pagination (starting at 1)
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of documents per page (1-100)
   * @default null
   */
  pageSize: number | null;
  /**
   * Q
   * @description Predicate(s) to filter documents, e.g. [[at(my.article.title, "Hello")]] or list of predicates
   * @default null
   */
  q: string | null;
  /**
   * Ref
   * @description Content ref token for the API query, obtained from /api/v2
   */
  ref?: string;
};

/**
 * Type of PRISMIC's PRISMIC_CONTENT_API_GET_DOCUMENTS_WITH_INTEGRATION_FIELDS tool output.
 */
type PRISMIC_CONTENT_API_GET_DOCUMENTS_WITH_INTEGRATION_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page
       * @description URL for the next page of results, if any
       * @default null
       */
      next_page: string | null;
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Prev Page
       * @description URL for the previous page of results, if any
       * @default null
       */
      prev_page: string | null;
      /**
       * Results
       * @description List of document objects matching the query
       */
      results: {
          /**
           * Alternate Languages
           * @description List of alternate language versions
           */
          alternate_languages: {
              /**
               * Id
               * @description ID of the alternate document
               */
              id: string;
              /**
               * Lang
               * @description Language code of the alternate document
               */
              lang: string;
              /**
               * Type
               * @description Type of the alternate document
               */
              type: string;
              /**
               * Uid
               * @description UID of the alternate document, if any
               * @default null
               */
              uid: string | null;
          }[];
          /**
           * Data
           * @description Custom and integration fields of the document
           */
          data: {
              [key: string]: unknown;
          };
          /**
           * First Publication Date
           * @description First publication date of the document
           */
          first_publication_date: string;
          /**
           * Href
           * @description API URL of the document
           */
          href: string;
          /**
           * Id
           * @description Document ID
           */
          id: string;
          /**
           * Lang
           * @description Language code of the document
           */
          lang: string;
          /**
           * Last Publication Date
           * @description Last publication date of the document
           */
          last_publication_date: string;
          /**
           * Slugs
           * @description List of slugs for the document
           */
          slugs: string[];
          /**
           * Tags
           * @description List of tags associated with the document
           */
          tags: string[];
          /**
           * Type
           * @description Document type
           */
          type: string;
          /**
           * Uid
           * @description Document UID, if set
           * @default null
           */
          uid: string | null;
          /**
           * Url
           * @description Resolved URL of the document, if available
           * @default null
           */
          url: string | null;
      }[];
      /**
       * Results Per Page
       * @description Number of items per page returned
       */
      results_per_page: number;
      /**
       * Results Size
       * @description Number of results returned on this page
       */
      results_size: number;
      /**
       * Total Pages
       * @description Total number of pages available
       */
      total_pages: number;
      /**
       * Total Results Size
       * @description Total number of results matching the query
       */
      total_results_size: number;
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
 * Type of PRISMIC's PRISMIC_CONTENT_API_GET_DOCUMENTS_WITH_PREDICATES tool input.
 */
type PRISMIC_CONTENT_API_GET_DOCUMENTS_WITH_PREDICATES_INPUT = {
  /**
   * Access Token
   * @description Access token for private repositories.
   * @default null
   */
  access_token: string | null;
  /**
   * Fetch
   * @description Comma-separated list of fields to fetch in documents.
   * @default null
   */
  fetch: string | null;
  /**
   * Fetch Links
   * @description Comma-separated list of linked document fields to include.
   * @default null
   */
  fetchLinks: string | null;
  /**
   * Graph Query
   * @description GraphQuery expression for nested fields retrieval.
   * @default null
   */
  graphQuery: string | null;
  /**
   * Lang
   * @description Language code to filter documents by language, e.g., 'en-us'.
   * @default null
   */
  lang: string | null;
  /**
   * Orderings
   * @description Sorting order expression, e.g., '[document.last_publication_date desc]'.
   * @default null
   */
  orderings: string | null;
  /**
   * Page
   * @description Page number for pagination, must be >= 1.
   * @default 1
   */
  page: number;
  /**
   * Page Size
   * @description Number of documents per page (1-100).
   * @default 20
   */
  pageSize: number;
  /**
   * Predicates
   * @description List of Prismic predicates for filtering documents, e.g., [[at(document.type,"page")]].
   */
  predicates?: string[];
};

/**
 * Type of PRISMIC's PRISMIC_CONTENT_API_GET_DOCUMENTS_WITH_PREDICATES tool output.
 */
type PRISMIC_CONTENT_API_GET_DOCUMENTS_WITH_PREDICATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page
       * @description Next page URL, if available
       * @default null
       */
      next_page: string | null;
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Prev Page
       * @description Previous page URL, if available
       * @default null
       */
      prev_page: string | null;
      /**
       * Results
       * @description List of documents matching the predicates
       */
      results: {
          /**
           * Alternate Languages
           * @description Alternate language versions of the document
           */
          alternate_languages: {
              /**
               * Id
               * @description ID of the alternate document
               */
              id: string;
              /**
               * Lang
               * @description Language code of the alternate version
               */
              lang: string;
              /**
               * Type
               * @description Document type of the alternate version
               */
              type: string;
              /**
               * Uid
               * @description UID of the alternate document, if any
               * @default null
               */
              uid: string | null;
          }[];
          /**
           * Data
           * @description Structured content fields of the document
           */
          data: {
              [key: string]: unknown;
          };
          /**
           * First Publication Date
           * @description First publication date (ISO 8601)
           */
          first_publication_date: string;
          /**
           * Href
           * @description API URL of the document
           */
          href: string;
          /**
           * Id
           * @description Document ID
           */
          id: string;
          /**
           * Lang
           * @description Language code of the document
           */
          lang: string;
          /**
           * Last Publication Date
           * @description Last publication date (ISO 8601)
           */
          last_publication_date: string;
          /**
           * Slugs
           * @description List of slugs for the document
           */
          slugs: string[];
          /**
           * Tags
           * @description Tags assigned to the document
           */
          tags: string[];
          /**
           * Type
           * @description Document type
           */
          type: string;
          /**
           * Uid
           * @description Document UID, if set
           * @default null
           */
          uid: string | null;
      }[];
      /**
       * Results Per Page
       * @description Number of results per page
       */
      results_per_page: number;
      /**
       * Results Size
       * @description Number of results returned on this page
       */
      results_size: number;
      /**
       * Total Pages
       * @description Total number of pages available
       */
      total_pages: number;
      /**
       * Total Results Size
       * @description Total number of documents matching the query
       */
      total_results_size: number;
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
 * Type of PRISMIC's PRISMIC_CONTENT_API_QUERY_DOCUMENTS tool input.
 */
type PRISMIC_CONTENT_API_QUERY_DOCUMENTS_INPUT = {
  /**
   * Access Token
   * @description Private API content token for authentication, if required.
   * @default null
   */
  access_token: string | null;
  /**
   * After
   * @description Document ID to paginate after for deep pagination.
   * @default null
   */
  after: string | null;
  /**
   * Fetch
   * @description Comma-separated list of fields to fetch for each document.
   * @default null
   */
  fetch: string | null;
  /**
   * Fetch Links
   * @description Fields from linked documents to fetch, comma-separated.
   * @default null
   */
  fetchLinks: string | null;
  /**
   * Graph Query
   * @description GraphQuery to specify which fields to return.
   * @default null
   */
  graphQuery: string | null;
  /**
   * Integration Fields Ref
   * @description Reference of integration fields content.
   * @default null
   */
  integrationFieldsRef: string | null;
  /**
   * Lang
   * @description Language code to query (e.g., 'en-us'), default '*' for all languages
   * @default null
   */
  lang: string | null;
  /**
   * Orderings
   * @description Sort order, e.g., '[my.article.date desc]'
   * @default null
   */
  orderings: string | null;
  /**
   * Page
   * @description Page number for pagination, starting from 1
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of documents per page (1-100)
   * @default null
   */
  pageSize: number | null;
  /**
   * Q
   * @description Predicate(s) to filter documents using Prismic predicate syntax.
   * @default null
   */
  q: string | null;
  /**
   * Ref
   * @description Content release reference to use (e.g., a master ref or API token ref)
   */
  ref?: string;
};

/**
 * Type of PRISMIC's PRISMIC_CONTENT_API_QUERY_DOCUMENTS tool output.
 */
type PRISMIC_CONTENT_API_QUERY_DOCUMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page
       * @description URL of next page, if any
       * @default null
       */
      next_page: string | null;
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Prev Page
       * @description URL of previous page, if any
       * @default null
       */
      prev_page: string | null;
      /**
       * Results
       * @description List of matched documents
       */
      results: {
          /**
           * Alternate Languages
           * @description Alternate language versions of the document
           */
          alternate_languages: {
              /**
               * Id
               * @description ID of the alternate document
               */
              id: string;
              /**
               * Lang
               * @description Language code of the alternate version
               */
              lang: string;
              /**
               * Type
               * @description Document type of the alternate language version
               */
              type: string;
              /**
               * Uid
               * @description UID of the alternate document, if any
               * @default null
               */
              uid: string | null;
          }[];
          /**
           * Data
           * @description Document data fields, structure varies by type
           */
          data: {
              [key: string]: unknown;
          };
          /**
           * First Publication Date
           * @description First publication date as ISO 8601 string
           */
          first_publication_date: string;
          /**
           * Href
           * @description Document URL for API access
           */
          href: string;
          /**
           * Id
           * @description Document ID
           */
          id: string;
          /**
           * Lang
           * @description Language code of the document
           */
          lang: string;
          /**
           * Last Publication Date
           * @description Last publication date as ISO 8601 string
           */
          last_publication_date: string;
          /**
           * Slugs
           * @description List of slugs for the document
           */
          slugs: string[];
          /**
           * Tags
           * @description List of tags assigned to the document
           */
          tags: string[];
          /**
           * Type
           * @description Document type
           */
          type: string;
          /**
           * Uid
           * @description Document UID, if set
           * @default null
           */
          uid: string | null;
      }[];
      /**
       * Results Per Page
       * @description Number of results per page
       */
      results_per_page: number;
      /**
       * Results Size
       * @description Number of returned results on this page
       */
      results_size: number;
      /**
       * Total Pages
       * @description Total number of pages available
       */
      total_pages: number;
      /**
       * Total Results Size
       * @description Total number of matching results in repository
       */
      total_results_size: number;
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
 * Type of PRISMIC's PRISMIC_GET_DOCUMENTS_BY_CUSTOM_FIELD tool input.
 */
type PRISMIC_GET_DOCUMENTS_BY_CUSTOM_FIELD_INPUT = {
  /**
   * Lang
   * @description Language code to query, default '*' for all languages
   * @default null
   */
  lang: string | null;
  /**
   * Orderings
   * @description Sort order, e.g., [my.article.date desc]
   * @default null
   */
  orderings: string | null;
  /**
   * Page
   * @description Page number for pagination, starting from 1
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of documents per page, between 1 and 100
   * @default null
   */
  pageSize: number | null;
  /**
   * Q
   * @description Predicate(s) to filter documents, e.g., [[at(my.article.title, "Hello")]] or list of predicates
   * @default null
   */
  q: string | null;
  /**
   * Ref
   * @description Content release reference to use (e.g., a master ref or API token ref)
   */
  ref?: string;
};

/**
 * Type of PRISMIC's PRISMIC_GET_DOCUMENTS_BY_CUSTOM_FIELD tool output.
 */
type PRISMIC_GET_DOCUMENTS_BY_CUSTOM_FIELD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page
       * @description URL for next page of results, if any
       * @default null
       */
      next_page: string | null;
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Prev Page
       * @description URL for previous page of results, if any
       * @default null
       */
      prev_page: string | null;
      /**
       * Results
       * @description List of documents matching the query
       */
      results: {
          /**
           * Alternate Languages
           * @description Alternate language versions of the document
           */
          alternate_languages: {
              /**
               * Id
               * @description Document ID in alternate language
               */
              id: string;
              /**
               * Lang
               * @description Language code of the alternate document
               */
              lang: string;
              /**
               * Type
               * @description Document type
               */
              type: string;
              /**
               * Uid
               * @description Document UID, if any
               * @default null
               */
              uid: string | null;
          }[];
          /**
           * Data
           * @description Structured content of the document
           */
          data: {
              [key: string]: unknown;
          };
          /**
           * First Publication Date
           * @description First publication date of the document
           */
          first_publication_date: string;
          /**
           * Href
           * @description Document URL
           */
          href: string;
          /**
           * Id
           * @description Document ID
           */
          id: string;
          /**
           * Lang
           * @description Language of the document
           */
          lang: string;
          /**
           * Last Publication Date
           * @description Last publication date of the document
           */
          last_publication_date: string;
          /**
           * Slugs
           * @description List of URL slugs for the document
           */
          slugs: string[];
          /**
           * Tags
           * @description List of tags
           */
          tags: string[];
          /**
           * Type
           * @description Document type
           */
          type: string;
      }[];
      /**
       * Results Per Page
       * @description Number of results returned per page
       */
      results_per_page: number;
      /**
       * Results Size
       * @description Number of results in current page
       */
      results_size: number;
      /**
       * Total Pages
       * @description Total number of pages
       */
      total_pages: number;
      /**
       * Total Results Size
       * @description Total number of results matching the query
       */
      total_results_size: number;
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
 * Type of PRISMIC's PRISMIC_GET_DOCUMENTS_BY_TAG tool input.
 */
type PRISMIC_GET_DOCUMENTS_BY_TAG_INPUT = {
  /**
   * After
   * @description Document ID to paginate after for deep pagination.
   * @default null
   */
  after: string | null;
  /**
   * Lang
   * @description Language code (e.g., 'en-us').
   * @default null
   */
  lang: string | null;
  /**
   * Orderings
   * @description Sorting order, e.g., '[my.article.date desc]'.
   * @default null
   */
  orderings: string | null;
  /**
   * Page
   * @description Page number, must be >= 1.
   * @default 1
   */
  page: number;
  /**
   * Page Size
   * @description Number of documents per page (1-100).
   * @default 20
   */
  pageSize: number;
  /**
   * Tag
   * @description Tag to filter documents (exact match).
   */
  tag?: string;
};

/**
 * Type of PRISMIC's PRISMIC_GET_DOCUMENTS_BY_TAG tool output.
 */
type PRISMIC_GET_DOCUMENTS_BY_TAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page
       * @description URL of next page, if any.
       * @default null
       */
      next_page: string | null;
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Prev Page
       * @description URL of previous page, if any.
       * @default null
       */
      prev_page: string | null;
      /**
       * Results
       * @description List of matched documents.
       */
      results: {
          /**
           * Alternate Languages
           * @description Alternate language versions of the document.
           */
          alternate_languages: {
              /**
               * Id
               * @description ID of the alternate document.
               */
              id: string;
              /**
               * Lang
               * @description Language code of the alternate version.
               */
              lang: string;
              /**
               * Type
               * @description Document type of the alternate language version.
               */
              type: string;
              /**
               * Uid
               * @description UID of the alternate document, if any.
               * @default null
               */
              uid: string | null;
          }[];
          /**
           * Data
           * @description Document data fields, structure varies by type.
           */
          data: {
              [key: string]: unknown;
          };
          /**
           * First Publication Date
           * @description First publication date as ISO 8601 string.
           */
          first_publication_date: string;
          /**
           * Href
           * @description Document URL for API access.
           */
          href: string;
          /**
           * Id
           * @description Document ID.
           */
          id: string;
          /**
           * Lang
           * @description Language code of the document.
           */
          lang: string;
          /**
           * Last Publication Date
           * @description Last publication date as ISO 8601 string.
           */
          last_publication_date: string;
          /**
           * Slugs
           * @description List of slugs for the document.
           */
          slugs: string[];
          /**
           * Tags
           * @description List of tags assigned to the document.
           */
          tags: string[];
          /**
           * Type
           * @description Document type.
           */
          type: string;
          /**
           * Uid
           * @description Document UID, if set.
           * @default null
           */
          uid: string | null;
      }[];
      /**
       * Results Per Page
       * @description Number of results per page.
       */
      results_per_page: number;
      /**
       * Results Size
       * @description Number of returned results on this page.
       */
      results_size: number;
      /**
       * Total Pages
       * @description Total number of pages available.
       */
      total_pages: number;
      /**
       * Total Results Size
       * @description Total number of matching results in repository.
       */
      total_results_size: number;
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
 * Type of PRISMIC's PRISMIC_GET_DOCUMENTS_BY_TYPE tool input.
 */
type PRISMIC_GET_DOCUMENTS_BY_TYPE_INPUT = {
  /**
   * After
   * @description Document ID to paginate after for deep pagination.
   * @default null
   */
  after: string | null;
  /**
   * Lang
   * @description Language code (e.g., 'en-us')
   * @default null
   */
  lang: string | null;
  /**
   * Orderings
   * @description Sorting order, e.g., '[my.article.date desc]'
   * @default null
   */
  orderings: string | null;
  /**
   * Page
   * @description Page number, must be >= 1
   * @default 1
   */
  page: number;
  /**
   * Page Size
   * @description Number of documents per page (1-100).
   * @default 20
   */
  pageSize: number;
  /**
   * Type
   * @description Custom type to filter documents (exact match).
   */
  type?: string;
};

/**
 * Type of PRISMIC's PRISMIC_GET_DOCUMENTS_BY_TYPE tool output.
 */
type PRISMIC_GET_DOCUMENTS_BY_TYPE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page
       * @description URL of next page, if any
       * @default null
       */
      next_page: string | null;
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Prev Page
       * @description URL of previous page, if any
       * @default null
       */
      prev_page: string | null;
      /**
       * Results
       * @description List of matched documents
       */
      results: {
          /**
           * Alternate Languages
           * @description Alternate language versions of the document
           */
          alternate_languages: {
              /**
               * Id
               * @description ID of the alternate document
               */
              id: string;
              /**
               * Lang
               * @description Language code of the alternate version
               */
              lang: string;
              /**
               * Type
               * @description Document type of the alternate language version
               */
              type: string;
              /**
               * Uid
               * @description UID of the alternate document, if any
               * @default null
               */
              uid: string | null;
          }[];
          /**
           * Data
           * @description Document data fields, structure varies by type
           */
          data: {
              [key: string]: unknown;
          };
          /**
           * First Publication Date
           * @description First publication date as ISO 8601 string
           */
          first_publication_date: string;
          /**
           * Href
           * @description Document URL for API access
           */
          href: string;
          /**
           * Id
           * @description Document ID
           */
          id: string;
          /**
           * Lang
           * @description Language code of the document
           */
          lang: string;
          /**
           * Last Publication Date
           * @description Last publication date as ISO 8601 string
           */
          last_publication_date: string;
          /**
           * Slugs
           * @description List of slugs for the document
           */
          slugs: string[];
          /**
           * Tags
           * @description List of tags assigned to the document
           */
          tags: string[];
          /**
           * Type
           * @description Document type
           */
          type: string;
          /**
           * Uid
           * @description Document UID, if set
           * @default null
           */
          uid: string | null;
      }[];
      /**
       * Results Per Page
       * @description Number of results per page
       */
      results_per_page: number;
      /**
       * Results Size
       * @description Number of returned results on this page
       */
      results_size: number;
      /**
       * Total Pages
       * @description Total number of pages available
       */
      total_pages: number;
      /**
       * Total Results Size
       * @description Total number of matching results in repository
       */
      total_results_size: number;
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
 * Type of PRISMIC's PRISMIC_GET_DOCUMENTS_ORDERED tool input.
 */
type PRISMIC_GET_DOCUMENTS_ORDERED_INPUT = {
  /**
   * Access Token
   * @description OAuth2 access token for private repositories (overrides default header)
   * @default null
   */
  access_token: string | null;
  /**
   * After
   * @description Fetch results after this document ID for deep pagination
   * @default null
   */
  after: string | null;
  /**
   * Fetch
   * @description Comma-separated list of field names to fetch
   * @default null
   */
  fetch: string | null;
  /**
   * Fetch Links
   * @description Comma-separated list of linked document fields to fetch
   * @default null
   */
  fetchLinks: string | null;
  /**
   * Graph Query
   * @description GraphQuery filter string for shaping the response
   * @default null
   */
  graphQuery: string | null;
  /**
   * Lang
   * @description Filter by language code (e.g., 'en-us')
   * @default null
   */
  lang: string | null;
  /**
   * Orderings
   * @description Ordering criteria, e.g. '[my.article.date desc]'
   */
  orderings?: string;
  /**
   * Page
   * @description Page number for pagination (default: 1)
   * @default 1
   */
  page: number;
  /**
   * Page Size
   * @description Results per page (default: 20, max: 100)
   * @default 20
   */
  pageSize: number;
  /**
   * Q
   * @description Predicate query strings for filtering (repeatable)
   * @default null
   */
  q: string[] | null;
  /**
   * Ref
   * @description API ref to query (e.g., master ref or a release ref)
   */
  ref?: string;
};

/**
 * Type of PRISMIC's PRISMIC_GET_DOCUMENTS_ORDERED tool output.
 */
type PRISMIC_GET_DOCUMENTS_ORDERED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page
       * @default null
       */
      next_page: string | null;
      /** Page */
      page: number;
      /**
       * Prev Page
       * @default null
       */
      prev_page: string | null;
      /** Results */
      results: {
          /** Data */
          data: {
              [key: string]: unknown;
          };
          /** First Publication Date */
          first_publication_date: string | null;
          /** Href */
          href: string;
          /** Id */
          id: string;
          /** Last Publication Date */
          last_publication_date: string | null;
          /** Linked Documents */
          linked_documents: {
              [key: string]: unknown;
          } | null;
          /** Slugs */
          slugs: string[];
          /** Tags */
          tags: string[];
          /** Type */
          type: string;
          /** Uid */
          uid: string | null;
      }[];
      /** Results Per Page */
      results_per_page: number;
      /** Results Size */
      results_size: number;
      /** Total Pages */
      total_pages: number;
      /** Total Results Size */
      total_results_size: number;
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
 * Type of PRISMIC's PRISMIC_GET_DOCUMENT_BY_ID tool input.
 */
type PRISMIC_GET_DOCUMENT_BY_ID_INPUT = {
  /**
   * Document Id
   * @description Unique identifier of the Prismic document
   */
  document_id?: string;
  /**
   * Lang
   * @description Optional language code (e.g., 'en-us')
   * @default null
   */
  lang: string | null;
  /**
   * Orderings
   * @description Optional ordering string, e.g., '[document.last_publication_date desc]'
   * @default null
   */
  orderings: string | null;
  /**
   * Page
   * @description Page number to fetch; defaults to 1
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of documents to return; defaults to 1
   * @default 1
   */
  page_size: number | null;
  /**
   * Ref
   * @description Content ref from /api/v2 (identifies which version of content to query)
   */
  ref?: string;
};

/**
 * Type of PRISMIC's PRISMIC_GET_DOCUMENT_BY_ID tool output.
 */
type PRISMIC_GET_DOCUMENT_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page
       * @description URL for the next page of results, if any
       * @default null
       */
      next_page: string | null;
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Prev Page
       * @description URL for the previous page of results, if any
       * @default null
       */
      prev_page: string | null;
      /**
       * Results
       * @description List of matching Prismic documents
       */
      results: {
          /**
           * Data
           * @description Content data of the document (structure depends on custom type)
           */
          data: {
              [key: string]: string | number | boolean | {
                  [key: string]: unknown;
              } | unknown[] | null;
          };
          /**
           * First Publication Date
           * @description First publication date of the document
           */
          first_publication_date: string;
          /**
           * Href
           * @description API URL of the document
           */
          href: string;
          /**
           * Id
           * @description Document ID
           */
          id: string;
          /**
           * Lang
           * @description Language of the document
           */
          lang: string;
          /**
           * Last Publication Date
           * @description Last publication date of the document
           */
          last_publication_date: string;
          /**
           * Slugs
           * @description List of slugs for the document
           */
          slugs: string[];
          /**
           * Tags
           * @description Tags associated with the document
           */
          tags: string[];
          /**
           * Type
           * @description Custom type of the document
           */
          type: string;
          /**
           * Uid
           * @description Document UID, if any
           * @default null
           */
          uid: string | null;
      }[];
      /**
       * Results Per Page
       * @description Number of documents per page returned
       */
      results_per_page: number;
      /**
       * Results Size
       * @description Number of results in this response
       */
      results_size: number;
      /**
       * Total Pages
       * @description Total available pages of results
       */
      total_pages: number;
      /**
       * Total Results Size
       * @description Total number of matching results
       */
      total_results_size: number;
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
 * Type of PRISMIC's PRISMIC_REPOSITORY_API_GET_INFO tool input.
 */
type PRISMIC_REPOSITORY_API_GET_INFO_INPUT = object;

/**
 * Type of PRISMIC's PRISMIC_REPOSITORY_API_GET_INFO tool output.
 */
type PRISMIC_REPOSITORY_API_GET_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bookmarks
       * @description Named bookmarks mapping document aliases to IDs
       */
      bookmarks: {
          [key: string]: string;
      };
      /**
       * Experiments
       * @description Active A/B test configurations
       */
      experiments: {
          [key: string]: unknown;
      };
      /**
       * Forms
       * @description Forms available for document search endpoints
       */
      forms: {
          [key: string]: unknown;
      };
      /**
       * Integration Fields
       * @description External integration configuration, if present
       * @default null
       */
      integrationFields: {
          [key: string]: unknown;
      } | null;
      /**
       * Languages
       * @description Supported languages in the repository
       */
      languages: {
          /**
           * Id
           * @description ISO code of the language
           */
          id: string;
          /**
           * Name
           * @description Display name of the language
           */
          name: string;
      }[];
      /**
       * Oauth Initiate
       * @description OAuth initiation URL
       */
      oauthInitiate: string;
      /**
       * Oauth Token
       * @description OAuth token exchange URL
       */
      oauthToken: string;
      /**
       * Quick Routes Enabled
       * @description Whether Quick Routes are enabled
       */
      quickRoutesEnabled: boolean;
      /**
       * Refs
       * @description List of all refs in the repository
       */
      refs: {
          /**
           * Id
           * @description Unique identifier for the ref
           */
          id: string;
          /**
           * Is Master Ref
           * @description True if this is the master ref
           */
          isMasterRef: boolean;
          /**
           * Label
           * @description Human-readable label
           */
          label: string;
          /**
           * Ref
           * @description Reference token
           */
          ref: string;
          /**
           * Scheduled At
           * @description Scheduled activation date, if applicable
           * @default null
           */
          scheduledAt: string | null;
      }[];
      /**
       * Tags
       * @description List of all tags in the repository
       */
      tags: string[];
      /**
       * Types
       * @description Map of custom type IDs to their names
       */
      types: {
          [key: string]: string;
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
 * Type of PRISMIC's PRISMIC_REPOSITORY_API_GET_REFS tool input.
 */
type PRISMIC_REPOSITORY_API_GET_REFS_INPUT = object;

/**
 * Type of PRISMIC's PRISMIC_REPOSITORY_API_GET_REFS tool output.
 */
type PRISMIC_REPOSITORY_API_GET_REFS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bookmarks
       * @description Repository bookmarks (document shortcuts)
       */
      bookmarks: {
          [key: string]: string;
      };
      /**
       * Forms
       * @description Forms available for querying content API
       */
      forms: {
          [key: string]: {
              /**
               * Action
               * @description Action URL for the form
               */
              action: string;
              /**
               * Enctype
               * @description Encoding type for form submission
               */
              enctype: string;
              /**
               * Fields
               * @description Schema of available fields for the form
               */
              fields: {
                  [key: string]: {
                      /**
                       * Multiple
                       * @description Whether the field accepts multiple values
                       */
                      multiple: boolean;
                      /**
                       * Type
                       * @description Data type of the form field
                       */
                      type: string;
                  };
              };
              /**
               * Method
               * @description HTTP method for the form
               */
              method: string;
          };
      };
      /**
       * Languages
       * @description Supported languages in the repository
       */
      languages: {
          /**
           * Alternate
           * @description List of alternate language codes
           */
          alternate: string[];
          /**
           * Id
           * @description Language code
           */
          id: string;
          /**
           * Name
           * @description Language name
           */
          name: string;
      }[];
      /**
       * Oauth Initiate
       * @description OAuth initiation URL, if OAuth is enabled
       * @default null
       */
      oauth_initiate: string | null;
      /**
       * Oauth Token
       * @description OAuth token exchange URL, if OAuth is enabled
       * @default null
       */
      oauth_token: string | null;
      /**
       * Refs
       * @description All repository refs (master and releases)
       */
      refs: {
          /**
           * Id
           * @description Reference ID
           */
          id: string;
          /**
           * Is Master Ref
           * @description Indicates if this is the master ref
           */
          isMasterRef: boolean;
          /**
           * Label
           * @description Human-readable label for the ref
           */
          label: string;
          /**
           * Ref
           * @description Reference token
           */
          ref: string;
          /**
           * Scheduled At
           * @description Scheduled time for a release
           * @default null
           */
          scheduledAt: string | null;
          /**
           * Tags
           * @description Release tags
           */
          tags?: string[];
      }[];
      /**
       * Tags
       * @description List of tags available in the repository
       */
      tags: string[];
      /**
       * Types
       * @description Repository custom types mapping
       */
      types: {
          [key: string]: string;
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
 * Type of PRISMIC's PRISMIC_TAGS_API_GET_ALL_TAGS tool input.
 */
type PRISMIC_TAGS_API_GET_ALL_TAGS_INPUT = object;

/**
 * Type of PRISMIC's PRISMIC_TAGS_API_GET_ALL_TAGS tool output.
 */
type PRISMIC_TAGS_API_GET_ALL_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tags
       * @description List of all tags present in the Prismic repository.
       */
      tags: string[];
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
 * Type of PRISMIC's PRISMIC_TYPES_API_GET_TYPES tool input.
 */
type PRISMIC_TYPES_API_GET_TYPES_INPUT = {
  /**
   * Limit
   * @description Maximum number of custom types to return
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination
   * @default null
   */
  page: number | null;
  /**
   * Ref
   * @description Reference to the API version to query custom types (e.g., a master ref)
   * @default null
   */
  ref: string | null;
  /**
   * Sort
   * @description Sort order for results (e.g., 'name')
   * @default null
   */
  sort: string | null;
};

/**
 * Type of PRISMIC's PRISMIC_TYPES_API_GET_TYPES tool output.
 */
type PRISMIC_TYPES_API_GET_TYPES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Results
       * @description List of custom types defined in the repository
       */
      results: {
          /**
           * Id
           * @description Custom type ID
           */
          id: string;
          /**
           * Json
           * @description Structure definition of the custom type
           */
          json: {
              [key: string]: unknown;
          };
          /**
           * Label
           * @description Display label of the custom type
           */
          label: string;
          /**
           * Repeatable
           * @description Whether the custom type is repeatable
           */
          repeatable: boolean;
      }[];
      /**
       * Results Per Page
       * @description Number of results returned per page
       */
      results_per_page: number;
      /**
       * Results Size
       * @description Number of custom types returned in this response
       */
      results_size: number;
      /**
       * Total Pages
       * @description Total number of pages available
       */
      total_pages: number;
      /**
       * Total Results Size
       * @description Total number of custom types in the repository
       */
      total_results_size: number;
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
 * Type map of all available tool input types for toolkit "PRISMIC".
 */
export type PRISMIC_TOOL_INPUTS = {
  CONTENT_API_GET_DOCUMENTS_WITH_FULLTEXT_SEARCH: PRISMIC_CONTENT_API_GET_DOCUMENTS_WITH_FULLTEXT_SEARCH_INPUT
  CONTENT_API_GET_DOCUMENTS_WITH_INTEGRATION_FIELDS: PRISMIC_CONTENT_API_GET_DOCUMENTS_WITH_INTEGRATION_FIELDS_INPUT
  CONTENT_API_GET_DOCUMENTS_WITH_PREDICATES: PRISMIC_CONTENT_API_GET_DOCUMENTS_WITH_PREDICATES_INPUT
  CONTENT_API_QUERY_DOCUMENTS: PRISMIC_CONTENT_API_QUERY_DOCUMENTS_INPUT
  GET_DOCUMENTS_BY_CUSTOM_FIELD: PRISMIC_GET_DOCUMENTS_BY_CUSTOM_FIELD_INPUT
  GET_DOCUMENTS_BY_TAG: PRISMIC_GET_DOCUMENTS_BY_TAG_INPUT
  GET_DOCUMENTS_BY_TYPE: PRISMIC_GET_DOCUMENTS_BY_TYPE_INPUT
  GET_DOCUMENTS_ORDERED: PRISMIC_GET_DOCUMENTS_ORDERED_INPUT
  GET_DOCUMENT_BY_ID: PRISMIC_GET_DOCUMENT_BY_ID_INPUT
  REPOSITORY_API_GET_INFO: PRISMIC_REPOSITORY_API_GET_INFO_INPUT
  REPOSITORY_API_GET_REFS: PRISMIC_REPOSITORY_API_GET_REFS_INPUT
  TAGS_API_GET_ALL_TAGS: PRISMIC_TAGS_API_GET_ALL_TAGS_INPUT
  TYPES_API_GET_TYPES: PRISMIC_TYPES_API_GET_TYPES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PRISMIC".
 */
export type PRISMIC_TOOL_OUTPUTS = {
  CONTENT_API_GET_DOCUMENTS_WITH_FULLTEXT_SEARCH: PRISMIC_CONTENT_API_GET_DOCUMENTS_WITH_FULLTEXT_SEARCH_OUTPUT
  CONTENT_API_GET_DOCUMENTS_WITH_INTEGRATION_FIELDS: PRISMIC_CONTENT_API_GET_DOCUMENTS_WITH_INTEGRATION_FIELDS_OUTPUT
  CONTENT_API_GET_DOCUMENTS_WITH_PREDICATES: PRISMIC_CONTENT_API_GET_DOCUMENTS_WITH_PREDICATES_OUTPUT
  CONTENT_API_QUERY_DOCUMENTS: PRISMIC_CONTENT_API_QUERY_DOCUMENTS_OUTPUT
  GET_DOCUMENTS_BY_CUSTOM_FIELD: PRISMIC_GET_DOCUMENTS_BY_CUSTOM_FIELD_OUTPUT
  GET_DOCUMENTS_BY_TAG: PRISMIC_GET_DOCUMENTS_BY_TAG_OUTPUT
  GET_DOCUMENTS_BY_TYPE: PRISMIC_GET_DOCUMENTS_BY_TYPE_OUTPUT
  GET_DOCUMENTS_ORDERED: PRISMIC_GET_DOCUMENTS_ORDERED_OUTPUT
  GET_DOCUMENT_BY_ID: PRISMIC_GET_DOCUMENT_BY_ID_OUTPUT
  REPOSITORY_API_GET_INFO: PRISMIC_REPOSITORY_API_GET_INFO_OUTPUT
  REPOSITORY_API_GET_REFS: PRISMIC_REPOSITORY_API_GET_REFS_OUTPUT
  TAGS_API_GET_ALL_TAGS: PRISMIC_TAGS_API_GET_ALL_TAGS_OUTPUT
  TYPES_API_GET_TYPES: PRISMIC_TYPES_API_GET_TYPES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PRISMIC toolkit.
 */
export const PRISMIC = {
  slug: "prismic",
  tools: {
    /**
     * Tool to fetch prismic documents using a full-text search predicate. use after obtaining the repository's master ref when you want to search for specific terms within documents.
     */
    CONTENT_API_GET_DOCUMENTS_WITH_FULLTEXT_SEARCH: "PRISMIC_CONTENT_API_GET_DOCUMENTS_WITH_FULLTEXT_SEARCH",
    /**
     * Tool to fetch prismic documents including integration fields data. use when you need both core content and integration fields in one query. call after obtaining a valid ref token.
     */
    CONTENT_API_GET_DOCUMENTS_WITH_INTEGRATION_FIELDS: "PRISMIC_CONTENT_API_GET_DOCUMENTS_WITH_INTEGRATION_FIELDS",
    /**
     * Tool to fetch prismic documents using specified predicates. use when filtering documents based on multiple conditions after obtaining the repository's master ref.
     */
    CONTENT_API_GET_DOCUMENTS_WITH_PREDICATES: "PRISMIC_CONTENT_API_GET_DOCUMENTS_WITH_PREDICATES",
    /**
     * Tool to query prismic documents using predicates and pagination. use when you need to fetch multiple documents from a repository after obtaining a ref.
     */
    CONTENT_API_QUERY_DOCUMENTS: "PRISMIC_CONTENT_API_QUERY_DOCUMENTS",
    /**
     * Tool to fetch prismic documents by custom field predicate. use after obtaining a repository ref when filtering content by field constraints.
     */
    GET_DOCUMENTS_BY_CUSTOM_FIELD: "PRISMIC_GET_DOCUMENTS_BY_CUSTOM_FIELD",
    /**
     * Tool to fetch prismic documents by tag. use when retrieving all documents associated with a specific tag.
     */
    GET_DOCUMENTS_BY_TAG: "PRISMIC_GET_DOCUMENTS_BY_TAG",
    /**
     * Tool to fetch prismic documents by type. use when you need to retrieve documents with a specific custom type after obtaining the repository's master ref.
     */
    GET_DOCUMENTS_BY_TYPE: "PRISMIC_GET_DOCUMENTS_BY_TYPE",
    /**
     * Tool to fetch prismic documents ordered by a specified field. use after obtaining a valid api ref when you need sorted document results, e.g., orderings='[my.article.date desc]'.
     */
    GET_DOCUMENTS_ORDERED: "PRISMIC_GET_DOCUMENTS_ORDERED",
    /**
     * Tool to retrieve a specific prismic document by its id. use after obtaining a content ref.
     */
    GET_DOCUMENT_BY_ID: "PRISMIC_GET_DOCUMENT_BY_ID",
    /**
     * Tool to retrieve prismic repository metadata. use after authentication to load refs, types, languages, and other repository settings.
     */
    REPOSITORY_API_GET_INFO: "PRISMIC_REPOSITORY_API_GET_INFO",
    /**
     * Tool to retrieve a list of repository refs (master and releases). use when you need the current repository references before executing any content queries.
     */
    REPOSITORY_API_GET_REFS: "PRISMIC_REPOSITORY_API_GET_REFS",
    /**
     * Tool to retrieve all tags from prismic repository. use when you need the full list of tags for filtering or categorization.
     */
    TAGS_API_GET_ALL_TAGS: "PRISMIC_TAGS_API_GET_ALL_TAGS",
    /**
     * Tool to retrieve all custom types and slices from the prismic repository. use when you need to list custom types definitions after authentication.
     */
    TYPES_API_GET_TYPES: "PRISMIC_TYPES_API_GET_TYPES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PRISMIC".
 */
export type PRISMIC_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PRISMIC".
 */
export type PRISMIC_TRIGGER_EVENTS = {}
