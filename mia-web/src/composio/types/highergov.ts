// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of HIGHERGOV's HIGHERGOV_GET_AGENCIES tool input.
 */
type HIGHERGOV_GET_AGENCIES_INPUT = {
  /**
   * Page
   * @description Page number for pagination, starting from 1
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page, overrides default if provided
   * @default null
   */
  page_size: number | null;
};

/**
 * Type of HIGHERGOV's HIGHERGOV_GET_AGENCIES tool output.
 */
type HIGHERGOV_GET_AGENCIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of agencies available
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of agency records retrieved
       */
      results: ({
          /**
           * Created At
           * @description Creation timestamp of the agency record
           * @default null
           */
          created_at: string | null;
          /**
           * Description
           * @description Detailed description of the agency, if provided
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the agency
           */
          id: number;
          /**
           * Name
           * @description Name of the agency
           */
          name: string;
          /**
           * Type
           * @description Type of the agency, if available
           * @default null
           */
          type: string | null;
          /**
           * Updated At
           * @description Last update timestamp of the agency record
           * @default null
           */
          updated_at: string | null;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of HIGHERGOV's HIGHERGOV_GET_AWARD_HISTORY tool input.
 */
type HIGHERGOV_GET_AWARD_HISTORY_INPUT = {
  /**
   * Last Modified Date
   * @description Filter awards by last modified date in YYYY-MM-DD format
   * @default null
   */
  last_modified_date: string | null;
  /**
   * Page
   * @description Page number for pagination, starting from 1
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page; overrides default from app config
   * @default null
   */
  page_size: number | null;
  /**
   * Search Id
   * @description Apply a HigherGov saved search ID to filter results
   * @default null
   */
  search_id: string | null;
};

/**
 * Type of HIGHERGOV's HIGHERGOV_GET_AWARD_HISTORY tool output.
 */
type HIGHERGOV_GET_AWARD_HISTORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of award history records
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of award history records
       */
      results: {
          /**
           * Data
           * @description Raw award history record data as returned by API
           */
          data: {
              [key: string]: string | number | boolean | (string | number | boolean | null)[] | {
                  [key: string]: string | number | boolean | null;
              } | null;
          };
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
 * Type of HIGHERGOV's HIGHERGOV_GET_CONTRACTS tool input.
 */
type HIGHERGOV_GET_CONTRACTS_INPUT = {
  /**
   * Last Modified Date
   * @description Filter by last modified date in YYYY-MM-DD format
   * @default null
   */
  last_modified_date: string | null;
  /**
   * Page
   * @description Page number for pagination, starting from 1
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page, overrides default if provided
   * @default null
   */
  page_size: number | null;
  /**
   * Search Id
   * @description Saved HigherGov search ID to filter contracts
   * @default null
   */
  search_id: string | null;
};

/**
 * Type of HIGHERGOV's HIGHERGOV_GET_CONTRACTS tool output.
 */
type HIGHERGOV_GET_CONTRACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of contracts available
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of contract records retrieved
       */
      results: ({
          /**
           * Award Id
           * @description Contract award identifier
           */
          award_id: string;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of HIGHERGOV's HIGHERGOV_GET_CONTRACT_HISTORY tool input.
 */
type HIGHERGOV_GET_CONTRACT_HISTORY_INPUT = {
  /**
   * Award Id
   * @description Contract award ID to filter a specific contract (e.g., 'FA282320P0011')
   * @default null
   */
  award_id: string | null;
  /**
   * Contract Id
   * @description Deprecated. Contract identifier; will be coerced to award_id if provided.
   * @default null
   */
  contract_id: string | null;
  /**
   * Last Modified Date
   * @description Filter by last modified date in YYYY-MM-DD format to retrieve historical changes
   * @default null
   */
  last_modified_date: string | null;
  /**
   * Page
   * @description Page number for pagination, starting from 1
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page; overrides default if provided
   * @default null
   */
  page_size: number | null;
};

/**
 * Type of HIGHERGOV's HIGHERGOV_GET_CONTRACT_HISTORY tool output.
 */
type HIGHERGOV_GET_CONTRACT_HISTORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of contract records returned
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of contract history records (raw data)
       */
      results: {
          /**
           * Data
           * @description Raw contract record data as returned by the API
           */
          data: {
              [key: string]: string | number | boolean | (string | number | boolean | null)[] | {
                  [key: string]: string | number | boolean | null;
              } | null;
          };
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
 * Type of HIGHERGOV's HIGHERGOV_GET_CONTRACT_IDVS tool input.
 */
type HIGHERGOV_GET_CONTRACT_IDVS_INPUT = {
  /**
   * Last Modified Date
   * @description Filter by last modified date in YYYY-MM-DD format
   * @default null
   */
  last_modified_date: string | null;
  /**
   * Page
   * @description Page number for pagination, starting from 1
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page, overrides default if provided
   * @default null
   */
  page_size: number | null;
  /**
   * Search Id
   * @description Saved HigherGov Contracts search ID (e.g., an IDV-only search)
   * @default null
   */
  search_id: string | null;
};

/**
 * Type of HIGHERGOV's HIGHERGOV_GET_CONTRACT_IDVS tool output.
 */
type HIGHERGOV_GET_CONTRACT_IDVS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of contracts available
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of contract records retrieved
       */
      results: ({
          /**
           * Award Id
           * @description Contract award identifier
           */
          award_id: string;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of HIGHERGOV's HIGHERGOV_GET_CONTRACT_VEHICLES tool input.
 */
type HIGHERGOV_GET_CONTRACT_VEHICLES_INPUT = {
  /**
   * Page
   * @description Page number for pagination, starting from 1
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page, overrides default if provided
   * @default null
   */
  page_size: number | null;
};

/**
 * Type of HIGHERGOV's HIGHERGOV_GET_CONTRACT_VEHICLES tool output.
 */
type HIGHERGOV_GET_CONTRACT_VEHICLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of contract vehicles available
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of contract vehicle records retrieved
       */
      results: ({
          /**
           * Created At
           * @description Creation timestamp of the contract vehicle record
           * @default null
           */
          created_at: string | null;
          /**
           * Description
           * @description Description of the contract vehicle, if available
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the contract vehicle
           */
          id: number;
          /**
           * Name
           * @description Name of the contract vehicle
           */
          name: string;
          /**
           * Updated At
           * @description Last update timestamp of the contract vehicle record
           * @default null
           */
          updated_at: string | null;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of HIGHERGOV's HIGHERGOV_GET_DEFENSE_PROGRAMS tool input.
 */
type HIGHERGOV_GET_DEFENSE_PROGRAMS_INPUT = {
  /**
   * Page
   * @description Page number for pagination, starting from 1
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page, overrides default if provided
   * @default null
   */
  page_size: number | null;
};

/**
 * Type of HIGHERGOV's HIGHERGOV_GET_DEFENSE_PROGRAMS tool output.
 */
type HIGHERGOV_GET_DEFENSE_PROGRAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of defense programs available
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of defense program records retrieved
       */
      results: ({
          /**
           * Data
           * @description Raw program record data as returned by API
           */
          data: {
              [key: string]: unknown;
          };
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of HIGHERGOV's HIGHERGOV_GET_DLA_CONTRACT_OPPORTUNITIES tool input.
 */
type HIGHERGOV_GET_DLA_CONTRACT_OPPORTUNITIES_INPUT = {
  /**
   * Agency Key
   * @description Filter by issuing agency key (use DLA key for DLA opportunities)
   * @default null
   */
  agency_key: number | null;
  /**
   * Captured Date
   * @description Filter opportunities captured on or after this date (YYYY-MM-DD)
   * @default null
   */
  captured_date: string | null;
  /**
   * Opp Key
   * @description Filter by specific opportunity key
   * @default null
   */
  opp_key: string | null;
  /**
   * Page
   * @description Page number for pagination, starting at 1
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page
   * @default 10
   */
  page_size: number | null;
  /**
   * Posted Date
   * @description Filter opportunities posted on this date (YYYY-MM-DD)
   * @default null
   */
  posted_date: string | null;
  /**
   * Search Id
   * @description Saved HigherGov search ID to filter opportunities
   * @default null
   */
  search_id: string | null;
  /**
   * Source Id
   * @description Filter by specific source ID
   * @default null
   */
  source_id: number | null;
  /**
   * Version Key
   * @description Filter by specific opportunity version key
   * @default null
   */
  version_key: string | null;
};

/**
 * Type of HIGHERGOV's HIGHERGOV_GET_DLA_CONTRACT_OPPORTUNITIES tool output.
 */
type HIGHERGOV_GET_DLA_CONTRACT_OPPORTUNITIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of DLA opportunities
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of DLA opportunity records
       */
      results: {
          /**
           * Data
           * @description Raw opportunity record data as returned by API
           */
          data: {
              [key: string]: string | number | boolean | (string | number | boolean | null)[] | {
                  [key: string]: string | number | boolean | null;
              } | null;
          };
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
 * Type of HIGHERGOV's HIGHERGOV_GET_DOCUMENTS tool input.
 */
type HIGHERGOV_GET_DOCUMENTS_INPUT = {
  /**
   * Contract Id
   * @description Filter documents by associated contract ID
   * @default null
   */
  contract_id: number | null;
  /**
   * Document Id
   * @description Filter documents by unique document ID
   * @default null
   */
  document_id: number | null;
  /**
   * Grant Id
   * @description Filter documents by associated grant ID
   * @default null
   */
  grant_id: number | null;
  /**
   * Opportunity Id
   * @description Filter documents by associated opportunity ID
   * @default null
   */
  opportunity_id: number | null;
  /**
   * Ordering
   * @description Ordering criteria (e.g., 'created_at', '-created_at')
   * @default null
   */
  ordering: string | null;
  /**
   * Page
   * @description Page number for pagination; must be >= 1
   * @default 1
   */
  page: number;
  /**
   * Page Size
   * @description Number of items per page (1-100). If not set, defaults to the API's default page size
   * @default null
   */
  page_size: number | null;
  /**
   * Related Key
   * @description Required key that identifies the related record (e.g., from document_path on an opportunity).
   * @default null
   */
  related_key: string | null;
};

/**
 * Type of HIGHERGOV's HIGHERGOV_GET_DOCUMENTS tool output.
 */
type HIGHERGOV_GET_DOCUMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of documents matching criteria
       */
      count: number;
      /**
       * Next
       * @description Link to next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description Link to previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of document records
       */
      results: {
          /**
           * Agency Id
           * @description Agency associated with the document
           * @default null
           */
          agency_id: number | null;
          /**
           * Contract Id
           * @description Contract associated with the document
           * @default null
           */
          contract_id: number | null;
          /**
           * Created At
           * @description Timestamp when the document was created
           */
          created_at: string;
          /**
           * Document Path
           * @description URL path of the document file
           */
          document_path: string;
          /**
           * File Type
           * @description File type or extension of the document
           */
          file_type: string;
          /**
           * Grant Id
           * @description Grant associated with the document
           * @default null
           */
          grant_id: number | null;
          /**
           * Id
           * @description Unique ID of the document
           */
          id: number;
          /**
           * Opportunity Id
           * @description Opportunity associated with the document
           * @default null
           */
          opportunity_id: number | null;
          /**
           * Title
           * @description Title of the document
           */
          title: string;
          /**
           * Updated At
           * @description Timestamp when the document was last updated
           */
          updated_at: string;
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
 * Type of HIGHERGOV's HIGHERGOV_GET_GRANT_HISTORY tool input.
 */
type HIGHERGOV_GET_GRANT_HISTORY_INPUT = {
  /**
   * Award Id
   * @description Grant award ID to filter a specific grant (e.g., 'EMK-2021-BR-042')
   * @default null
   */
  award_id: string | null;
  /**
   * Last Modified Date
   * @description Filter grants by last modified date in YYYY-MM-DD format
   * @default null
   */
  last_modified_date: string | null;
  /**
   * Page
   * @description Page number for pagination, must be >= 1
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page (1-100). If omitted, uses default from app config
   * @default null
   */
  page_size: number | null;
};

/**
 * Type of HIGHERGOV's HIGHERGOV_GET_GRANT_HISTORY tool output.
 */
type HIGHERGOV_GET_GRANT_HISTORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total records returned
       */
      count: number;
      /**
       * Next
       * Format: uri
       * @description URL to next page of results
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * Format: uri
       * @description URL to previous page of results
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of grant records (raw data)
       */
      results: {
          /**
           * Data
           * @description Raw grant record data as returned by the API
           */
          data: {
              [key: string]: unknown;
          };
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
 * Type of HIGHERGOV's HIGHERGOV_GET_GRANT_OPPORTUNITIES tool input.
 */
type HIGHERGOV_GET_GRANT_OPPORTUNITIES_INPUT = {
  /**
   * Agency Id
   * @description Filter opportunities by agency ID (mapped to agency_key)
   * @default null
   */
  agency_id: number | null;
  /**
   * Agency Key
   * @description Filter by agency key (preferred over agency_id)
   * @default null
   */
  agency_key: number | null;
  /**
   * Captured Date
   * @description Filter opportunities captured on or after this date (YYYY-MM-DD)
   * @default null
   */
  captured_date: string | null;
  /**
   * Keyword
   * @description Term to search in opportunity titles or descriptions
   * @default null
   */
  keyword: string | null;
  /**
   * Opp Key
   * @description Filter by a specific opportunity key
   * @default null
   */
  opp_key: number | null;
  /**
   * Page
   * @description Page number for pagination, must be >= 1
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page (1-100). If omitted, uses default from app config
   * @default null
   */
  page_size: number | null;
  /**
   * Posted Date
   * @description Filter opportunities posted on or after this date (YYYY-MM-DD)
   * @default null
   */
  posted_date: string | null;
  /**
   * Search Id
   * @description Saved HigherGov search ID to filter opportunities
   * @default null
   */
  search_id: string | null;
  /**
   * Source Id
   * @description Filter by specific data source ID
   * @default null
   */
  source_id: number | null;
  /**
   * Status
   * @description Filter opportunities by status: 'open' or 'closed'
   * @default null
   * @enum {string|null}
   */
  status: "open" | "closed" | null;
  /**
   * Version Key
   * @description Filter by a specific opportunity version key
   * @default null
   */
  version_key: number | null;
};

/**
 * Type of HIGHERGOV's HIGHERGOV_GET_GRANT_OPPORTUNITIES tool output.
 */
type HIGHERGOV_GET_GRANT_OPPORTUNITIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total grants matching filters
       */
      count: number;
      /**
       * Next
       * Format: uri
       * @description URL to next page of results
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * Format: uri
       * @description URL to previous page of results
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of grant opportunities returned
       */
      results: ({
          /**
           * Agency
           * @description Issuing agency details
           * @default null
           */
          agency: {
              /**
               * Acronym
               * @description Agency acronym or short name
               * @default null
               */
              acronym: string | null;
              /**
               * Id
               * @description Agency identifier
               */
              id: number;
              /**
               * Name
               * @description Agency name
               */
              name: string;
          } | null;
          /**
           * Close Date
           * @description Closing date in YYYY-MM-DD format
           * @default null
           */
          close_date: string | null;
          /**
           * Description
           * @description Detailed description of the grant opportunity
           * @default null
           */
          description: string | null;
          /**
           * Eligibility
           * @description Eligibility criteria summary
           * @default null
           */
          eligibility: string | null;
          /**
           * Id
           * @description Grant opportunity identifier
           * @default null
           */
          id: number | null;
          /**
           * Link
           * Format: uri
           * @description URL to the grant opportunity details
           * @default null
           */
          link: string | null;
          /**
           * Open Date
           * @description Opening date in YYYY-MM-DD format
           * @default null
           */
          open_date: string | null;
          /**
           * Title
           * @description Title of the grant opportunity
           * @default null
           */
          title: string | null;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of HIGHERGOV's HIGHERGOV_GET_GRANT_PROGRAMS tool input.
 */
type HIGHERGOV_GET_GRANT_PROGRAMS_INPUT = {
  /**
   * Page
   * @description Page number for pagination, starting from 1
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page, overrides default if provided
   * @default null
   */
  page_size: number | null;
};

/**
 * Type of HIGHERGOV's HIGHERGOV_GET_GRANT_PROGRAMS tool output.
 */
type HIGHERGOV_GET_GRANT_PROGRAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of grant programs matching the query
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of grant program records
       */
      results: ({
          /**
           * Agency
           * @description Agency offering the program
           * @default null
           */
          agency: string | null;
          /**
           * Description
           * @description Description of the grant program
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the grant program
           */
          id: number;
          /**
           * Name
           * @description Name of the grant program
           */
          name: string;
          /**
           * Url
           * @description URL for program details
           * @default null
           */
          url: string | null;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of HIGHERGOV's HIGHERGOV_GET_NAICS tool input.
 */
type HIGHERGOV_GET_NAICS_INPUT = {
  /**
   * Code
   * @description Filter results by NAICS code (exact or partial match)
   * @default null
   */
  code: string | null;
  /**
   * Page
   * @description Page number for pagination, starting from 1
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page, overrides default if provided
   * @default null
   */
  page_size: number | null;
  /**
   * Title
   * @description Filter results by NAICS title (exact or partial match)
   * @default null
   */
  title: string | null;
};

/**
 * Type of HIGHERGOV's HIGHERGOV_GET_NAICS tool output.
 */
type HIGHERGOV_GET_NAICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of NAICS codes available
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of NAICS code entries retrieved
       */
      results: ({
          /**
           * Code
           * @description NAICS code identifier
           */
          code: string;
          /**
           * Title
           * @description Title or description of the NAICS code
           */
          title: string;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of HIGHERGOV's HIGHERGOV_GET_OPPORTUNITIES tool input.
 */
type HIGHERGOV_GET_OPPORTUNITIES_INPUT = {
  /**
   * Captured Date
   * @description Filter opportunities captured on or after this date (YYYY-MM-DD)
   * @default null
   */
  captured_date: string | null;
  /**
   * Page
   * @description Page number for pagination, must be >= 1
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page. Overrides default page_size if provided
   * @default null
   */
  page_size: number | null;
  /**
   * Search Id
   * @description Saved HigherGov search ID to filter opportunities
   * @default null
   */
  search_id: string | null;
  /**
   * Source Type
   * @description Filter by data source type (e.g., 'sam')
   * @default null
   */
  source_type: string | null;
};

/**
 * Type of HIGHERGOV's HIGHERGOV_GET_OPPORTUNITIES tool output.
 */
type HIGHERGOV_GET_OPPORTUNITIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of opportunities available
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of opportunity records retrieved
       */
      results: ({
          /**
           * Document Path
           * @description API path to retrieve related documents (metadata and time-limited download URLs)
           */
          document_path: string;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of HIGHERGOV's HIGHERGOV_GET_OPPORTUNITY_HISTORY tool input.
 */
type HIGHERGOV_GET_OPPORTUNITY_HISTORY_INPUT = {
  /**
   * Captured Date
   * @description Historical snapshot date filter (YYYY-MM-DD)
   * @default null
   */
  captured_date: string | null;
  /**
   * Opp Key
   * @description HigherGov opportunity key to filter history for a specific opportunity
   * @default null
   */
  opp_key: string | null;
  /**
   * Page
   * @description Page number for pagination, starting from 1
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page; overrides default from app config
   * @default null
   */
  page_size: number | null;
  /**
   * Source Type
   * @description Filter by data source type (e.g., 'sam', 'sled')
   * @default null
   */
  source_type: string | null;
  /**
   * Version Key
   * @description Version key to filter a specific historical version of an opportunity
   * @default null
   */
  version_key: string | null;
};

/**
 * Type of HIGHERGOV's HIGHERGOV_GET_OPPORTUNITY_HISTORY tool output.
 */
type HIGHERGOV_GET_OPPORTUNITY_HISTORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of opportunity history records
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of opportunity history records
       */
      results: {
          /**
           * Data
           * @description Raw opportunity history record data as returned by API
           */
          data: {
              [key: string]: string | number | boolean | (string | number | boolean | null)[] | {
                  [key: string]: string | number | boolean | null;
              } | null;
          };
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
 * Type of HIGHERGOV's HIGHERGOV_GET_PEOPLE tool input.
 */
type HIGHERGOV_GET_PEOPLE_INPUT = {
  /**
   * Ordering
   * @description Field to sort by, e.g., 'first_name' or '-last_name'.
   * @default null
   */
  ordering: string | null;
  /**
   * Organization
   * @description Filter by affiliated organization name.
   * @default null
   */
  organization: string | null;
  /**
   * Page
   * @description Page number to retrieve (1-based).
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page (1-100). Overrides default if provided.
   * @default null
   */
  page_size: number | null;
  /**
   * Person Id
   * @description Exact person ID to fetch a single record.
   * @default null
   */
  person_id: number | null;
  /**
   * Role
   * @description Filter by person's role or title.
   * @default null
   */
  role: string | null;
  /**
   * Search
   * @description Keyword to search within person names, titles, or attributes.
   * @default null
   */
  search: string | null;
};

/**
 * Type of HIGHERGOV's HIGHERGOV_GET_PEOPLE tool output.
 */
type HIGHERGOV_GET_PEOPLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of matching people.
       */
      count: number;
      /**
       * Next
       * @description URL for the next page, if any.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL for the previous page, if any.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of people records.
       */
      results: ({
          /**
           * Email
           * @description Email address.
           * @default null
           */
          email: string | null;
          /**
           * First Name
           * @description Person's first name.
           * @default null
           */
          first_name: string | null;
          /**
           * Id
           * @description Unique person identifier.
           */
          id: number;
          /**
           * Last Name
           * @description Person's last name.
           * @default null
           */
          last_name: string | null;
          /**
           * Number Of Contracts
           * @description Count of related government contracts.
           * @default null
           */
          number_of_contracts: number | null;
          /**
           * Number Of Grants
           * @description Count of related grants.
           * @default null
           */
          number_of_grants: number | null;
          /**
           * Organization
           * @description Affiliated organization.
           * @default null
           */
          organization: string | null;
          /**
           * Phone
           * @description Phone number.
           * @default null
           */
          phone: string | null;
          /**
           * Roles
           * @description Roles associated with the person.
           * @default null
           */
          roles: string[] | null;
          /**
           * Title
           * @description Position or title of the person.
           * @default null
           */
          title: string | null;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of HIGHERGOV's HIGHERGOV_GET_PRIME_CONTRACT_AWARDS tool input.
 */
type HIGHERGOV_GET_PRIME_CONTRACT_AWARDS_INPUT = {
  /**
   * Last Modified Date
   * @description Filter awards by last modified date in YYYY-MM-DD format
   * @default null
   */
  last_modified_date: string | null;
  /**
   * Page
   * @description Page number for pagination, starting at 1
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page; overrides default from app config
   * @default null
   */
  page_size: number | null;
  /**
   * Search Id
   * @description Apply a HigherGov saved search ID to filter results
   * @default null
   */
  search_id: string | null;
};

/**
 * Type of HIGHERGOV's HIGHERGOV_GET_PRIME_CONTRACT_AWARDS tool output.
 */
type HIGHERGOV_GET_PRIME_CONTRACT_AWARDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of prime contract awards
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of prime contract award records
       */
      results: {
          /**
           * Data
           * @description Raw prime contract award record data as returned by API
           */
          data: {
              [key: string]: string | number | boolean | (string | number | boolean | null)[] | {
                  [key: string]: string | number | boolean | null;
              } | null;
          };
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
 * Type of HIGHERGOV's HIGHERGOV_GET_PRIME_GRANT_AWARDS tool input.
 */
type HIGHERGOV_GET_PRIME_GRANT_AWARDS_INPUT = {
  /**
   * Agency Id
   * @description Filter awards by awarding agency ID
   * @default null
   */
  agency_id: number | null;
  /**
   * Fiscal Year
   * @description Filter awards by fiscal year
   * @default null
   */
  fiscal_year: number | null;
  /**
   * Grant Id
   * @description Filter by specific grant (award) ID
   * @default null
   */
  grant_id: number | null;
  /**
   * Keyword
   * @description Filter awards by keyword in title or description
   * @default null
   */
  keyword: string | null;
  /**
   * Last Modified Date
   * @description Filter awards by last modified date (YYYY-MM-DD)
   * @default null
   */
  last_modified_date: string | null;
  /**
   * Page
   * @description Page number for pagination, starting from 1
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page (overrides default if provided)
   * @default null
   */
  page_size: number | null;
  /**
   * Program Number
   * @description Filter awards by program number (e.g., CFDA number)
   * @default null
   */
  program_number: string | null;
  /**
   * Recipient Name
   * @description Filter awards by recipient name
   * @default null
   */
  recipient_name: string | null;
  /**
   * Search Id
   * @description Apply a HigherGov saved search ID to filter results
   * @default null
   */
  search_id: string | null;
  /**
   * State
   * @description Filter awards by recipient state (2-letter code)
   * @default null
   */
  state: string | null;
};

/**
 * Type of HIGHERGOV's HIGHERGOV_GET_PRIME_GRANT_AWARDS tool output.
 */
type HIGHERGOV_GET_PRIME_GRANT_AWARDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of prime grant awards matching the query
       */
      count: number;
      /**
       * Next
       * Format: uri
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * Format: uri
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of prime grant award records
       */
      results: {
          /**
           * Data
           * @description Raw prime grant award record data as returned by API
           */
          data: {
              [key: string]: unknown;
          };
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
 * Type of HIGHERGOV's HIGHERGOV_GET_PROGRAMS tool input.
 */
type HIGHERGOV_GET_PROGRAMS_INPUT = {
  /**
   * Page
   * @description Page number for pagination, starting from 1
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page, overrides default if provided
   * @default null
   */
  page_size: number | null;
};

/**
 * Type of HIGHERGOV's HIGHERGOV_GET_PROGRAMS tool output.
 */
type HIGHERGOV_GET_PROGRAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of programs available
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of government program records
       */
      results: ({
          /**
           * Category
           * @description Category of the government program
           * @default null
           */
          category: string | null;
          /**
           * Description
           * @description Detailed description of the program, if available
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the program if available
           * @default null
           */
          id: number | null;
          /**
           * Name
           * @description Name/title of the government program
           * @default null
           */
          name: string | null;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of HIGHERGOV's HIGHERGOV_GET_PSC tool input.
 */
type HIGHERGOV_GET_PSC_INPUT = {
  /**
   * Code
   * @description Optional filter to return only PSC entries matching this code
   * @default null
   */
  code: string | null;
  /**
   * Page
   * @description Page number (integer, minimum 1)
   * @default 1
   */
  page: number;
  /**
   * Page Size
   * @description Number of items per page (integer, minimum 1)
   * @default 10
   */
  page_size: number;
};

/**
 * Type of HIGHERGOV's HIGHERGOV_GET_PSC tool output.
 */
type HIGHERGOV_GET_PSC_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of PSC entries available
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of PSC entries for the current page
       */
      results: {
          /**
           * Code
           * @description Product and Service Code identifier
           */
          code: string;
          /**
           * Description
           * @description Detailed description of the PSC entry
           * @default null
           */
          description: string | null;
          /**
           * Title
           * @description Name or title of the PSC entry
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
 * Type of HIGHERGOV's HIGHERGOV_GET_PURSUITS tool input.
 */
type HIGHERGOV_GET_PURSUITS_INPUT = {
  /**
   * Agency Key
   * @description Filter by HigherGov agency_key for opportunities fallback
   * @default null
   */
  agency_key: number | null;
  /**
   * Captured Date
   * @description Filter opportunities captured on or after this date (YYYY-MM-DD) for fallback
   * @default null
   */
  captured_date: string | null;
  /**
   * Opp Key
   * @description Filter by specific opportunity key for opportunities fallback
   * @default null
   */
  opp_key: number | null;
  /**
   * Page
   * @description Page number for pagination, starting from 1
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page, overrides default if provided
   * @default null
   */
  page_size: number | null;
  /**
   * Posted Date
   * @description Filter by posted date (YYYY-MM-DD) for opportunities fallback
   * @default null
   */
  posted_date: string | null;
  /**
   * Search Id
   * @description Saved HigherGov search ID to use with the opportunities fallback
   * @default null
   */
  search_id: string | null;
  /**
   * Source Id
   * @description Filter by source_id for opportunities fallback
   * @default null
   */
  source_id: number | null;
  /**
   * Source Type
   * @description Filter by data source type (e.g., 'sam') for fallback
   * @default null
   */
  source_type: string | null;
  /**
   * Status
   * @description Filter pursuits by status (e.g., open, closed)
   * @default null
   */
  status: string | null;
  /**
   * User Id
   * @description Filter pursuits by the user's unique identifier
   * @default null
   */
  user_id: string | null;
  /**
   * Version Key
   * @description Filter by specific opportunity version key for opportunities fallback
   * @default null
   */
  version_key: number | null;
};

/**
 * Type of HIGHERGOV's HIGHERGOV_GET_PURSUITS tool output.
 */
type HIGHERGOV_GET_PURSUITS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of matching pursuits
       */
      count: number;
      /**
       * Next
       * @description URL for the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL for the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of pursuits for the current page
       */
      results: ({
          /**
           * Created At
           * @description Timestamp when the pursuit was created
           * @default null
           */
          created_at: string | null;
          /**
           * Description
           * @description Detailed description of the pursuit
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the pursuit
           */
          id: number;
          /**
           * Status
           * @description Current status of the pursuit
           * @default null
           */
          status: string | null;
          /**
           * Title
           * @description Title of the pursuit
           * @default null
           */
          title: string | null;
          /**
           * Updated At
           * @description Timestamp when the pursuit was last updated
           * @default null
           */
          updated_at: string | null;
          /**
           * User Id
           * @description Identifier of the user associated with this pursuit
           * @default null
           */
          user_id: string | null;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of HIGHERGOV's HIGHERGOV_GET_SBIR_OPPORTUNITIES tool input.
 */
type HIGHERGOV_GET_SBIR_OPPORTUNITIES_INPUT = {
  /**
   * Agency
   * @description Filter by agency offering the SBIR opportunity (name or acronym)
   * @default null
   */
  agency: string | null;
  /**
   * Agency Key
   * @description Filter by issuing agency key
   * @default null
   */
  agency_key: number | null;
  /**
   * Captured Date
   * @description Filter opportunities captured on or after this date (YYYY-MM-DD)
   * @default null
   */
  captured_date: string | null;
  /**
   * Close Date From
   * @description Filter opportunities closing on or after this date (YYYY-MM-DD)
   * @default null
   */
  close_date_from: string | null;
  /**
   * Close Date To
   * @description Filter opportunities closing on or before this date (YYYY-MM-DD)
   * @default null
   */
  close_date_to: string | null;
  /**
   * Open Date From
   * @description Filter opportunities opened on or after this date (YYYY-MM-DD)
   * @default null
   */
  open_date_from: string | null;
  /**
   * Open Date To
   * @description Filter opportunities opened on or before this date (YYYY-MM-DD)
   * @default null
   */
  open_date_to: string | null;
  /**
   * Opp Key
   * @description Filter by specific opportunity key
   * @default null
   */
  opp_key: string | null;
  /**
   * Page
   * @description Page number for pagination, starting from 1
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page, overrides default if provided
   * @default null
   */
  page_size: number | null;
  /**
   * Posted Date
   * @description Filter opportunities posted on this date (YYYY-MM-DD)
   * @default null
   */
  posted_date: string | null;
  /**
   * Topic
   * @description Filter by topic area of the opportunity
   * @default null
   */
  topic: string | null;
  /**
   * Version Key
   * @description Filter by specific opportunity version key
   * @default null
   */
  version_key: string | null;
};

/**
 * Type of HIGHERGOV's HIGHERGOV_GET_SBIR_OPPORTUNITIES tool output.
 */
type HIGHERGOV_GET_SBIR_OPPORTUNITIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of SBIR opportunities available
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of SBIR opportunities retrieved
       */
      results: ({
          /**
           * Agency
           * @description Agency offering the opportunity
           * @default null
           */
          agency: string | null;
          /**
           * Close Date
           * @description Closing date (YYYY-MM-DD)
           * @default null
           */
          close_date: string | null;
          /**
           * Description
           * @description Description of the opportunity
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the SBIR opportunity
           * @default null
           */
          id: number | null;
          /**
           * Open Date
           * @description Opening date (YYYY-MM-DD)
           * @default null
           */
          open_date: string | null;
          /**
           * Phase
           * @description Phase of the SBIR opportunity
           * @default null
           */
          phase: string | null;
          /**
           * Title
           * @description Title of the SBIR opportunity
           * @default null
           */
          title: string | null;
          /**
           * Topic
           * @description Topic area of the opportunity
           * @default null
           */
          topic: string | null;
          /**
           * Url
           * @description URL to the opportunity details
           * @default null
           */
          url: string | null;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of HIGHERGOV's HIGHERGOV_GET_SLED_CONTRACT_OPPORTUNITIES tool input.
 */
type HIGHERGOV_GET_SLED_CONTRACT_OPPORTUNITIES_INPUT = {
  /**
   * Agency Key
   * @description Filter by issuing agency key
   * @default null
   */
  agency_key: number | null;
  /**
   * Captured Date
   * @description Filter opportunities captured on or after this date (YYYY-MM-DD)
   * @default null
   */
  captured_date: string | null;
  /**
   * Opp Key
   * @description Filter by specific opportunity key
   * @default null
   */
  opp_key: string | null;
  /**
   * Page
   * @description Page number for pagination, starting at 1
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page
   * @default 10
   */
  page_size: number | null;
  /**
   * Posted Date
   * @description Filter opportunities posted on this date (YYYY-MM-DD)
   * @default null
   */
  posted_date: string | null;
  /**
   * Search Id
   * @description Saved HigherGov search ID to filter opportunities
   * @default null
   */
  search_id: string | null;
  /**
   * Source Id
   * @description Filter by specific source ID
   * @default null
   */
  source_id: number | null;
  /**
   * Source Type
   * @description Filter by data source type (e.g., 'sam' for federal; consult OAS for SLED value)
   * @default null
   */
  source_type: string | null;
  /**
   * Version Key
   * @description Filter by specific opportunity version key
   * @default null
   */
  version_key: string | null;
};

/**
 * Type of HIGHERGOV's HIGHERGOV_GET_SLED_CONTRACT_OPPORTUNITIES tool output.
 */
type HIGHERGOV_GET_SLED_CONTRACT_OPPORTUNITIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of SLED contract opportunities
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of SLED opportunity records
       */
      results: {
          /**
           * Data
           * @description Raw SLED opportunity data as returned by API
           */
          data: {
              [key: string]: string | number | boolean | (string | number | boolean | null)[] | {
                  [key: string]: string | number | boolean | null;
              } | null;
          };
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
 * Type of HIGHERGOV's HIGHERGOV_GET_SUBCONTRACT_AWARDS tool input.
 */
type HIGHERGOV_GET_SUBCONTRACT_AWARDS_INPUT = {
  /**
   * Award Date End
   * @description Filter awards by award date on or before this date (YYYY-MM-DD)
   * @default null
   */
  award_date_end: string | null;
  /**
   * Award Date Start
   * @description Filter awards by award date on or after this date (YYYY-MM-DD)
   * @default null
   */
  award_date_start: string | null;
  /**
   * Award Id
   * @description Filter awards by associated prime contract award ID (e.g., 36C25221C0021)
   * @default null
   */
  award_id: string | null;
  /**
   * Last Modified Date
   * @description Filter awards by last modified date (YYYY-MM-DD)
   * @default null
   */
  last_modified_date: string | null;
  /**
   * Page
   * @description Page number for pagination, starting from 1
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page, overrides default if provided
   * @default null
   */
  page_size: number | null;
  /**
   * Prime Award Piid
   * @description Filter awards by prime award PIID
   * @default null
   */
  prime_award_piid: string | null;
  /**
   * Search Id
   * @description Apply a HigherGov saved search ID to filter results
   * @default null
   */
  search_id: string | null;
};

/**
 * Type of HIGHERGOV's HIGHERGOV_GET_SUBCONTRACT_AWARDS tool output.
 */
type HIGHERGOV_GET_SUBCONTRACT_AWARDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of subcontract awards
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of subcontract award records retrieved
       */
      results: ({
          /**
           * Award Date
           * @description Date of the subcontract award (YYYY-MM-DD)
           */
          award_date: string;
          /**
           * Id
           * @description Unique identifier of the subcontract award
           */
          id: number;
          /**
           * Prime Award Piid
           * @description Prime award PIID associated with the subcontract award
           */
          prime_award_piid: string;
          /**
           * Recipient Name
           * @description Name of the award recipient
           */
          recipient_name: string;
          /**
           * Subaward Amount
           * @description Amount awarded in the subcontract
           */
          subaward_amount: number;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of HIGHERGOV's HIGHERGOV_GET_SUBGRANT_AWARDS tool input.
 */
type HIGHERGOV_GET_SUBGRANT_AWARDS_INPUT = {
  /**
   * Award Id
   * @description Filter by associated prime grant award ID (string, e.g., B-23-CP-NJ-1004)
   * @default null
   */
  award_id: string | null;
  /**
   * Cfda Program Number
   * @description Filter by CFDA program number (e.g., 14.251)
   * @default null
   */
  cfda_program_number: string | null;
  /**
   * Fiscal Year
   * @description Filter by fiscal year
   * @default null
   */
  fiscal_year: number | null;
  /**
   * Last Modified Date
   * @description Filter by last modified date (YYYY-MM-DD)
   * @default null
   */
  last_modified_date: string | null;
  /**
   * Page
   * @description Page number for pagination, must be >= 1
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page (1-100), overrides default if provided
   * @default null
   */
  page_size: number | null;
  /**
   * Recipient Name
   * @description Filter by recipient name
   * @default null
   */
  recipient_name: string | null;
  /**
   * Search Id
   * @description Apply a HigherGov saved search ID to filter results
   * @default null
   */
  search_id: string | null;
  /**
   * State
   * @description Filter by recipient state (2-letter code)
   * @default null
   */
  state: string | null;
  /**
   * Subgrant Id
   * @description Filter by unique subgrant ID
   * @default null
   */
  subgrant_id: number | null;
  /**
   * Subgrant Number
   * @description Filter by subgrant number
   * @default null
   */
  subgrant_number: string | null;
};

/**
 * Type of HIGHERGOV's HIGHERGOV_GET_SUBGRANT_AWARDS tool output.
 */
type HIGHERGOV_GET_SUBGRANT_AWARDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of subgrant awards matching criteria
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of subgrant award records retrieved
       */
      results: ({
          /**
           * Agency
           * @description Issuing agency name
           * @default null
           */
          agency: string | null;
          /**
           * Award Id
           * @description Associated award ID
           * @default null
           */
          award_id: number | null;
          /**
           * Cfda Title
           * @description Title of the CFDA program
           * @default null
           */
          cfda_title: string | null;
          /**
           * Current Funding
           * @description Current funding amount utilized
           * @default null
           */
          current_funding: number | null;
          /**
           * Description
           * @description Description or purpose of the subgrant
           * @default null
           */
          description: string | null;
          /**
           * End Date
           * @description Subgrant end date (YYYY-MM-DD)
           * @default null
           */
          end_date: string | null;
          /**
           * Fiscal Year
           * @description Fiscal year of the subgrant
           * @default null
           */
          fiscal_year: number | null;
          /**
           * Id
           * @description Unique subgrant award ID
           */
          id: number;
          /**
           * Program Number
           * @description Program number or CFDA number
           * @default null
           */
          program_number: string | null;
          /**
           * Recipient Duns
           * @description DUNS number of the recipient
           * @default null
           */
          recipient_duns: string | null;
          /**
           * Recipient Name
           * @description Name of the subgrant recipient
           * @default null
           */
          recipient_name: string | null;
          /**
           * Start Date
           * @description Subgrant start date (YYYY-MM-DD)
           * @default null
           */
          start_date: string | null;
          /**
           * State
           * @description Recipient state (2-letter code)
           * @default null
           */
          state: string | null;
          /**
           * Subagency
           * @description Issuing subagency name
           * @default null
           */
          subagency: string | null;
          /**
           * Subgrant Number
           * @description Subgrant number
           * @default null
           */
          subgrant_number: string | null;
          /**
           * Total Funding
           * @description Total funding amount awarded
           * @default null
           */
          total_funding: number | null;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of HIGHERGOV's HIGHERGOV_GET_TASK_ORDERS tool input.
 */
type HIGHERGOV_GET_TASK_ORDERS_INPUT = {
  /**
   * Page
   * @description Page number for pagination, starting from 1
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page, overrides default if provided
   * @default null
   */
  page_size: number | null;
  /**
   * Parent Award Id
   * @description Filter to only task orders under a specific IDV parent award ID
   * @default null
   */
  parent_award_id: string | null;
};

/**
 * Type of HIGHERGOV's HIGHERGOV_GET_TASK_ORDERS tool output.
 */
type HIGHERGOV_GET_TASK_ORDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of task orders available
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of task order records retrieved
       */
      results: ({
          /**
           * Award Id
           * @description Task order award identifier (child award)
           */
          award_id: string;
          /**
           * Parent Award Id
           * @description Parent IDV award ID under which this task order was issued
           * @default null
           */
          parent_award_id: string | null;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of HIGHERGOV's HIGHERGOV_GET_TECH_PROGRAMS tool input.
 */
type HIGHERGOV_GET_TECH_PROGRAMS_INPUT = {
  /**
   * Page
   * @description Page number for pagination, starting from 1
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page, overrides default if provided
   * @default null
   */
  page_size: number | null;
};

/**
 * Type of HIGHERGOV's HIGHERGOV_GET_TECH_PROGRAMS tool output.
 */
type HIGHERGOV_GET_TECH_PROGRAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of technology programs available
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of technology program records
       */
      results: ({
          /**
           * Description
           * @description Description of the technology program
           * @default null
           */
          description: string | null;
          /**
           * End Date
           * @description Program end date in ISO 8601 format (YYYY-MM-DD)
           * @default null
           */
          end_date: string | null;
          /**
           * Id
           * @description Unique identifier of the tech program
           */
          id: number;
          /**
           * Name
           * @description Name of the technology program
           */
          name: string;
          /**
           * Start Date
           * @description Program start date in ISO 8601 format (YYYY-MM-DD)
           * @default null
           */
          start_date: string | null;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type map of all available tool input types for toolkit "HIGHERGOV".
 */
export type HIGHERGOV_TOOL_INPUTS = {
  GET_AGENCIES: HIGHERGOV_GET_AGENCIES_INPUT
  GET_AWARD_HISTORY: HIGHERGOV_GET_AWARD_HISTORY_INPUT
  GET_CONTRACTS: HIGHERGOV_GET_CONTRACTS_INPUT
  GET_CONTRACT_HISTORY: HIGHERGOV_GET_CONTRACT_HISTORY_INPUT
  GET_CONTRACT_IDVS: HIGHERGOV_GET_CONTRACT_IDVS_INPUT
  GET_CONTRACT_VEHICLES: HIGHERGOV_GET_CONTRACT_VEHICLES_INPUT
  GET_DEFENSE_PROGRAMS: HIGHERGOV_GET_DEFENSE_PROGRAMS_INPUT
  GET_DLA_CONTRACT_OPPORTUNITIES: HIGHERGOV_GET_DLA_CONTRACT_OPPORTUNITIES_INPUT
  GET_DOCUMENTS: HIGHERGOV_GET_DOCUMENTS_INPUT
  GET_GRANT_HISTORY: HIGHERGOV_GET_GRANT_HISTORY_INPUT
  GET_GRANT_OPPORTUNITIES: HIGHERGOV_GET_GRANT_OPPORTUNITIES_INPUT
  GET_GRANT_PROGRAMS: HIGHERGOV_GET_GRANT_PROGRAMS_INPUT
  GET_NAICS: HIGHERGOV_GET_NAICS_INPUT
  GET_OPPORTUNITIES: HIGHERGOV_GET_OPPORTUNITIES_INPUT
  GET_OPPORTUNITY_HISTORY: HIGHERGOV_GET_OPPORTUNITY_HISTORY_INPUT
  GET_PEOPLE: HIGHERGOV_GET_PEOPLE_INPUT
  GET_PRIME_CONTRACT_AWARDS: HIGHERGOV_GET_PRIME_CONTRACT_AWARDS_INPUT
  GET_PRIME_GRANT_AWARDS: HIGHERGOV_GET_PRIME_GRANT_AWARDS_INPUT
  GET_PROGRAMS: HIGHERGOV_GET_PROGRAMS_INPUT
  GET_PSC: HIGHERGOV_GET_PSC_INPUT
  GET_PURSUITS: HIGHERGOV_GET_PURSUITS_INPUT
  GET_SBIR_OPPORTUNITIES: HIGHERGOV_GET_SBIR_OPPORTUNITIES_INPUT
  GET_SLED_CONTRACT_OPPORTUNITIES: HIGHERGOV_GET_SLED_CONTRACT_OPPORTUNITIES_INPUT
  GET_SUBCONTRACT_AWARDS: HIGHERGOV_GET_SUBCONTRACT_AWARDS_INPUT
  GET_SUBGRANT_AWARDS: HIGHERGOV_GET_SUBGRANT_AWARDS_INPUT
  GET_TASK_ORDERS: HIGHERGOV_GET_TASK_ORDERS_INPUT
  GET_TECH_PROGRAMS: HIGHERGOV_GET_TECH_PROGRAMS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "HIGHERGOV".
 */
export type HIGHERGOV_TOOL_OUTPUTS = {
  GET_AGENCIES: HIGHERGOV_GET_AGENCIES_OUTPUT
  GET_AWARD_HISTORY: HIGHERGOV_GET_AWARD_HISTORY_OUTPUT
  GET_CONTRACTS: HIGHERGOV_GET_CONTRACTS_OUTPUT
  GET_CONTRACT_HISTORY: HIGHERGOV_GET_CONTRACT_HISTORY_OUTPUT
  GET_CONTRACT_IDVS: HIGHERGOV_GET_CONTRACT_IDVS_OUTPUT
  GET_CONTRACT_VEHICLES: HIGHERGOV_GET_CONTRACT_VEHICLES_OUTPUT
  GET_DEFENSE_PROGRAMS: HIGHERGOV_GET_DEFENSE_PROGRAMS_OUTPUT
  GET_DLA_CONTRACT_OPPORTUNITIES: HIGHERGOV_GET_DLA_CONTRACT_OPPORTUNITIES_OUTPUT
  GET_DOCUMENTS: HIGHERGOV_GET_DOCUMENTS_OUTPUT
  GET_GRANT_HISTORY: HIGHERGOV_GET_GRANT_HISTORY_OUTPUT
  GET_GRANT_OPPORTUNITIES: HIGHERGOV_GET_GRANT_OPPORTUNITIES_OUTPUT
  GET_GRANT_PROGRAMS: HIGHERGOV_GET_GRANT_PROGRAMS_OUTPUT
  GET_NAICS: HIGHERGOV_GET_NAICS_OUTPUT
  GET_OPPORTUNITIES: HIGHERGOV_GET_OPPORTUNITIES_OUTPUT
  GET_OPPORTUNITY_HISTORY: HIGHERGOV_GET_OPPORTUNITY_HISTORY_OUTPUT
  GET_PEOPLE: HIGHERGOV_GET_PEOPLE_OUTPUT
  GET_PRIME_CONTRACT_AWARDS: HIGHERGOV_GET_PRIME_CONTRACT_AWARDS_OUTPUT
  GET_PRIME_GRANT_AWARDS: HIGHERGOV_GET_PRIME_GRANT_AWARDS_OUTPUT
  GET_PROGRAMS: HIGHERGOV_GET_PROGRAMS_OUTPUT
  GET_PSC: HIGHERGOV_GET_PSC_OUTPUT
  GET_PURSUITS: HIGHERGOV_GET_PURSUITS_OUTPUT
  GET_SBIR_OPPORTUNITIES: HIGHERGOV_GET_SBIR_OPPORTUNITIES_OUTPUT
  GET_SLED_CONTRACT_OPPORTUNITIES: HIGHERGOV_GET_SLED_CONTRACT_OPPORTUNITIES_OUTPUT
  GET_SUBCONTRACT_AWARDS: HIGHERGOV_GET_SUBCONTRACT_AWARDS_OUTPUT
  GET_SUBGRANT_AWARDS: HIGHERGOV_GET_SUBGRANT_AWARDS_OUTPUT
  GET_TASK_ORDERS: HIGHERGOV_GET_TASK_ORDERS_OUTPUT
  GET_TECH_PROGRAMS: HIGHERGOV_GET_TECH_PROGRAMS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's HIGHERGOV toolkit.
 */
export const HIGHERGOV = {
  slug: "highergov",
  tools: {
    /**
     * Tool to retrieve agencies information. Use when you need to list agencies with pagination.
     */
    GET_AGENCIES: "HIGHERGOV_GET_AGENCIES",
    /**
     * Tool to retrieve award history. Use when you need paginated historical award data.
     */
    GET_AWARD_HISTORY: "HIGHERGOV_GET_AWARD_HISTORY",
    /**
     * Tool to retrieve federal contract data. Use when you need to list contracts with optional filters like last_modified_date or search_id.
     */
    GET_CONTRACTS: "HIGHERGOV_GET_CONTRACTS",
    /**
     * Tool to retrieve contract history. Use when you need paginated historical data for a specific contract (via award_id/contract_id) or across contracts using last_modified_date.
     */
    GET_CONTRACT_HISTORY: "HIGHERGOV_GET_CONTRACT_HISTORY",
    /**
     * Tool to retrieve Indefinite Delivery Vehicle (IDV) contract records via the HigherGov Contracts endpoint. Use when you need to list IDVs with pagination, optionally leveraging a saved search_id that filters to IDVs.
     */
    GET_CONTRACT_IDVS: "HIGHERGOV_GET_CONTRACT_IDVS",
    /**
     * Tool to retrieve contract vehicles. Use when you need to list contract vehicles with pagination.
     */
    GET_CONTRACT_VEHICLES: "HIGHERGOV_GET_CONTRACT_VEHICLES",
    /**
     * Tool to retrieve defense programs information. Use when you need to list defense programs with pagination.
     */
    GET_DEFENSE_PROGRAMS: "HIGHERGOV_GET_DEFENSE_PROGRAMS",
    /**
     * Tool to retrieve DLA contract opportunities. Use when needing paginated DLA procurement listings.
     */
    GET_DLA_CONTRACT_OPPORTUNITIES: "HIGHERGOV_GET_DLA_CONTRACT_OPPORTUNITIES",
    /**
     * Tool to fetch document metadata from HigherGov. Use when needing to retrieve documents associated with contracts, grants, or opportunities.
     */
    GET_DOCUMENTS: "HIGHERGOV_GET_DOCUMENTS",
    /**
     * Tool to fetch historical data on grants. Use when you need paginated historical data for a specific grant (via award_id) or across grants using last_modified_date.
     */
    GET_GRANT_HISTORY: "HIGHERGOV_GET_GRANT_HISTORY",
    /**
     * Tool to retrieve information on grant opportunities. Use when you need a paginated list of grants filtered by keyword, agency, or status.
     */
    GET_GRANT_OPPORTUNITIES: "HIGHERGOV_GET_GRANT_OPPORTUNITIES",
    /**
     * Tool to retrieve information on grant programs. Use when you need to list available grant programs with pagination.
     */
    GET_GRANT_PROGRAMS: "HIGHERGOV_GET_GRANT_PROGRAMS",
    /**
     * Tool to retrieve NAICS codes. Use when you need a pagitated list of NAICS codes, optionally filtered by code or title.
     */
    GET_NAICS: "HIGHERGOV_GET_NAICS",
    /**
     * Tool to retrieve opportunity data. Use when you need a paginated list of opportunities filtered by search ID, date, or source type.
     */
    GET_OPPORTUNITIES: "HIGHERGOV_GET_OPPORTUNITIES",
    /**
     * Tool to retrieve opportunity history. Use when you need paginated historical data for a specific opportunity or across the dataset using captured_date.
     */
    GET_OPPORTUNITY_HISTORY: "HIGHERGOV_GET_OPPORTUNITY_HISTORY",
    /**
     * Tool to retrieve information on people related to government contracts and grants. Use when you need to search or filter individuals by name, organization, or role.
     */
    GET_PEOPLE: "HIGHERGOV_GET_PEOPLE",
    /**
     * Tool to retrieve prime contract awards. Use when you need a paginated list of prime contract awards optionally filtered by last modified date or saved search ID.
     */
    GET_PRIME_CONTRACT_AWARDS: "HIGHERGOV_GET_PRIME_CONTRACT_AWARDS",
    /**
     * Tool to retrieve information on prime grant awards. Use when you need a paginated list of awarded federal grants.
     */
    GET_PRIME_GRANT_AWARDS: "HIGHERGOV_GET_PRIME_GRANT_AWARDS",
    /**
     * Tool to retrieve a list of government programs and categories. Use when exploring available programs with pagination.
     */
    GET_PROGRAMS: "HIGHERGOV_GET_PROGRAMS",
    /**
     * Tool to retrieve information on Product and Service Codes. Use when fetching PSC entries with optional pagination and filtering by code.
     */
    GET_PSC: "HIGHERGOV_GET_PSC",
    /**
     * Tool to retrieve user-specific pursuits. Use when you need to fetch a user's pursuits with optional filtering by status and pagination.
     */
    GET_PURSUITS: "HIGHERGOV_GET_PURSUITS",
    /**
     * Tool to retrieve SBIR (Small Business Innovation Research) opportunities. Use when you need to list SBIR opportunities with optional filters and pagination.
     */
    GET_SBIR_OPPORTUNITIES: "HIGHERGOV_GET_SBIR_OPPORTUNITIES",
    /**
     * Tool to retrieve state and local (SLED) contract opportunities. Uses the general Opportunity endpoint with optional filters.
     */
    GET_SLED_CONTRACT_OPPORTUNITIES: "HIGHERGOV_GET_SLED_CONTRACT_OPPORTUNITIES",
    /**
     * Tool to retrieve subcontract awards. Use when you need to list subcontract awards with optional filters such as date range or prime award PIID.
     */
    GET_SUBCONTRACT_AWARDS: "HIGHERGOV_GET_SUBCONTRACT_AWARDS",
    /**
     * Tool to retrieve subgrant awards information. Use when you need to list subgrant awards with optional filters such as recipient name, fiscal year, or program.
     */
    GET_SUBGRANT_AWARDS: "HIGHERGOV_GET_SUBGRANT_AWARDS",
    /**
     * Tool to retrieve task order data. Use when you need to list task orders associated with contracts.
     */
    GET_TASK_ORDERS: "HIGHERGOV_GET_TASK_ORDERS",
    /**
     * Tool to retrieve information on technology programs. Use when you need to list technology programs with pagination.
     */
    GET_TECH_PROGRAMS: "HIGHERGOV_GET_TECH_PROGRAMS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "HIGHERGOV".
 */
export type HIGHERGOV_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "HIGHERGOV".
 */
export type HIGHERGOV_TRIGGER_EVENTS = {}
