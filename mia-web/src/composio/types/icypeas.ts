// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ICYPEAS's ICYPEAS_BULK_EMAIL_SEARCH tool input.
 */
type ICYPEAS_BULK_EMAIL_SEARCH_INPUT = {
  /**
   * CustomOptions
   * @description Extra options for webhook callbacks and tracking per row.
   * @default null
   */
  custom: {
      /**
       * External Ids
       * @description One external ID per data row; length must match data array
       * @default null
       */
      externalIds: string[] | null;
      /**
       * Include Results In Webhook
       * @description If true, final webhook includes results; ensure webhook can handle large payloads
       * @default null
       */
      includeResultsInWebhook: boolean | null;
      /**
       * Webhook Url Bulk Done
       * Format: uri
       * @description Called when the whole bulk completes; returns bulk statistics
       * @default null
       */
      webhookUrlBulkDone: string | null;
      /**
       * Webhook Url Item
       * Format: uri
       * @description Called per row with that row's result
       * @default null
       */
      webhookUrlItem: string | null;
  } | null;
  /**
   * Data
   * @description Rows to analyze: each tuple [firstname, lastname, domainOrCompany]; at least one of firstname/lastname must be provided
   */
  data?: [
      string | null,
      string | null,
      string
  ][];
  /**
   * Name
   * @description User-defined name for this bulk search job
   */
  name?: string;
  /**
   * Task
   * @description Must be 'email-search' for bulk email lookups
   * @default email-search
   * @constant
   */
  task: "email-search";
};

/**
 * Type of ICYPEAS's ICYPEAS_BULK_EMAIL_SEARCH tool output.
 */
type ICYPEAS_BULK_EMAIL_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File
       * @description Identifier of the created bulk result file
       */
      file: string;
      /**
       * Status
       * @description Initial processing status, e.g. 'in_progress'
       */
      status: string;
      /**
       * Success
       * @description Indicates if the bulk job was successfully started
       */
      success: boolean;
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
 * Type of ICYPEAS's ICYPEAS_CHECK_PROGRESS tool input.
 */
type ICYPEAS_CHECK_PROGRESS_INPUT = {
  /**
   * Id
   * @description ID of the search item (mode='single') or bulk file (mode='bulk').
   */
  id?: string;
  /**
   * Limit
   * @description Number of records to fetch. For single: max 100 (default 10); for bulk: max 50 (default 10).
   * @default null
   */
  limit: number | null;
  /**
   * Mode
   * @description Whether to fetch single-search progress or bulk file progress.
   * @enum {string}
   */
  mode?: "single" | "bulk";
  /**
   * Next
   * @description Pagination direction: true for next page, false for previous.
   * @default null
   */
  next: boolean | null;
  /**
   * Sorts
   * @description Pagination state array returned from prior call; required when paginating.
   * @default null
   */
  sorts: unknown[] | null;
  /**
   * Status
   * @description (mode='bulk' only) Filter bulk files by status.
   * @default null
   * @enum {string|null}
   */
  status: "in_progress" | "done" | null;
  /**
   * Type
   * @description (mode='single' only) Optional filter by task type, e.g., 'email-search'.
   * @default null
   */
  type: string | null;
};

/**
 * Type of ICYPEAS's ICYPEAS_CHECK_PROGRESS tool output.
 */
type ICYPEAS_CHECK_PROGRESS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Files
       * @description List of bulk file statuses (mode='bulk').
       * @default null
       */
      files: {
          /**
           * File
           * @description Bulk file ID.
           */
          file: string;
          /**
           * Finished
           * @description True if the bulk file is fully processed.
           */
          finished: boolean;
          /**
           * Status
           * @description Bulk file processing status.
           * @enum {string}
           */
          status: "in_progress" | "done";
      }[] | null;
      /**
       * Finished
       * @description True if bulk processing is complete (mode='bulk').
       * @default null
       */
      finished: boolean | null;
      /**
       * Next
       * @description Pagination direction: true for next page, false for previous.
       * @default null
       */
      next: boolean | null;
      /**
       * Results
       * @description List of single-search items (mode='single').
       * @default null
       */
      results: {
          /**
           *  Id
           * @description Search item ID.
           */
          _id: string;
          /**
           * Status
           * @description Search item status.
           * @enum {string}
           */
          status: "NONE" | "SCHEDULED" | "IN_PROGRESS" | "DEBITED";
      }[] | null;
      /**
       * Sorts
       * @description Pagination state array returned from prior call.
       * @default null
       */
      sorts: unknown[] | null;
      /**
       * Status
       * @description Overall status of the request or resource; derived from API response if available.
       * @default unknown
       */
      status: string | null;
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
 * Type of ICYPEAS's ICYPEAS_DOMAIN_SCAN tool input.
 */
type ICYPEAS_DOMAIN_SCAN_INPUT = {
  /**
   * DomainScanCustom
   * @description Optional customization parameters for the scan
   * @default null
   */
  custom: {
      /**
       * External Id
       * @description Custom identifier to track the search request
       * @default null
       */
      externalId: string | null;
      /**
       * Webhook Url
       * @description Webhook URL to be called when the domain scan completes
       * @default null
       */
      webhookUrl: string | null;
  } | null;
  /**
   * Domain Or Company
   * @description The domain or company name to scan for role-based email addresses
   */
  domainOrCompany?: string;
};

/**
 * Type of ICYPEAS's ICYPEAS_DOMAIN_SCAN tool output.
 */
type ICYPEAS_DOMAIN_SCAN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Item
       * @description Details of the initiated domain scan task
       */
      item: {
          /**
           *  Id
           * @description Identifier of the created search item
           */
          _id: string;
          /**
           * Status
           * @description Initial status of the scan (e.g., 'NONE')
           */
          status: string;
      };
      /**
       * Success
       * @description Indicates whether the request was accepted
       */
      success: boolean;
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
 * Type of ICYPEAS's ICYPEAS_FETCH_BULK_SEARCH_INFO tool input.
 */
type ICYPEAS_FETCH_BULK_SEARCH_INFO_INPUT = {
  /**
   * File
   * @description Filter by a specific bulk search file ID
   * @default null
   */
  file: string | null;
  /**
   * Limit
   * @description Limit of files to fetch (default 10, max 50)
   * @default null
   */
  limit: number | null;
  /**
   * Next
   * @description Pagination direction: true for next page, false for previous page
   * @default null
   */
  next: boolean | null;
  /**
   * Sorts
   * @description Pagination cursor from previous response
   * @default null
   */
  sorts: (number | string)[][] | null;
  /**
   * Status
   * @description Filter by status: 'in_progress' or 'done'
   * @default null
   * @enum {string|null}
   */
  status: "in_progress" | "done" | null;
};

/**
 * Type of ICYPEAS's ICYPEAS_FETCH_BULK_SEARCH_INFO tool output.
 */
type ICYPEAS_FETCH_BULK_SEARCH_INFO_OUTPUT = {
  /**
   * Data
   * @description List of bulk search file objects with their details
   */
  data?: {
      [key: string]: unknown;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Sorts
   * @description New pagination cursor for subsequent requests
   */
  sorts?: (number | string)[][];
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of matching bulk search files
   */
  total?: number;
};

/**
 * Type of ICYPEAS's ICYPEAS_FETCH_SUBSCRIPTION_INFO tool input.
 */
type ICYPEAS_FETCH_SUBSCRIPTION_INFO_INPUT = {
  /**
   * Email
   * @description The email of the user whose subscription details are to be retrieved.
   */
  email?: string;
};

/**
 * Type of ICYPEAS's ICYPEAS_FETCH_SUBSCRIPTION_INFO tool output.
 */
type ICYPEAS_FETCH_SUBSCRIPTION_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Subscription Info
       * @description Raw subscription info returned by the API
       */
      subscription_info: {
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
 * Type of ICYPEAS's ICYPEAS_FIND_COMPANIES tool input.
 */
type ICYPEAS_FIND_COMPANIES_INPUT = {
  /**
   * PaginationRequest
   * @description Pagination parameters for retrieving additional pages of results.
   * @default null
   */
  pagination: {
      /**
       * Size
       * @description Number of results per page (1-200), default is 100.
       * @default 100
       */
      size: number | null;
      /**
       * Token
       * @description Pagination token from a previous response.
       * @default null
       */
      token: string | null;
  } | null;
  /**
   * Query
   * @description Search filters object containing various field filters.
   */
  query?: {
      /**
       * IncludeExclude
       * @description Model for include/exclude filters where you can specify lists of values to include or exclude.
       * @default null
       */
      domain: {
          /**
           * Exclude
           * @description Values to exclude from the filter (max 200 items).
           * @default null
           */
          exclude: string[] | null;
          /**
           * Include
           * @description Values to include in the filter (max 200 items).
           * @default null
           */
          include: string[] | null;
      } | null;
      /**
       * RangeFilter
       * @description Numeric range filter using comparison operators.
       * @default null
       */
      headcount: {
          /**
           * Gt
           * @description Greater than filter.
           * @default null
           */
          gt: number | null;
          /**
           * Gte
           * @description Greater than or equal to filter.
           * @default null
           */
          gte: number | null;
          /**
           * Lt
           * @description Less than filter.
           * @default null
           */
          lt: number | null;
          /**
           * Lte
           * @description Less than or equal to filter.
           * @default null
           */
          lte: number | null;
      } | null;
      /**
       * IncludeExclude
       * @description Model for include/exclude filters where you can specify lists of values to include or exclude.
       * @default null
       */
      industry: {
          /**
           * Exclude
           * @description Values to exclude from the filter (max 200 items).
           * @default null
           */
          exclude: string[] | null;
          /**
           * Include
           * @description Values to include in the filter (max 200 items).
           * @default null
           */
          include: string[] | null;
      } | null;
      /**
       * IncludeExclude
       * @description Model for include/exclude filters where you can specify lists of values to include or exclude.
       * @default null
       */
      keyword: {
          /**
           * Exclude
           * @description Values to exclude from the filter (max 200 items).
           * @default null
           */
          exclude: string[] | null;
          /**
           * Include
           * @description Values to include in the filter (max 200 items).
           * @default null
           */
          include: string[] | null;
      } | null;
      /**
       * IncludeExclude
       * @description Model for include/exclude filters where you can specify lists of values to include or exclude.
       * @default null
       */
      lid: {
          /**
           * Exclude
           * @description Values to exclude from the filter (max 200 items).
           * @default null
           */
          exclude: string[] | null;
          /**
           * Include
           * @description Values to include in the filter (max 200 items).
           * @default null
           */
          include: string[] | null;
      } | null;
      /**
       * IncludeExclude
       * @description Model for include/exclude filters where you can specify lists of values to include or exclude.
       * @default null
       */
      location: {
          /**
           * Exclude
           * @description Values to exclude from the filter (max 200 items).
           * @default null
           */
          exclude: string[] | null;
          /**
           * Include
           * @description Values to include in the filter (max 200 items).
           * @default null
           */
          include: string[] | null;
      } | null;
      /**
       * IncludeExclude
       * @description Model for include/exclude filters where you can specify lists of values to include or exclude.
       * @default null
       */
      name: {
          /**
           * Exclude
           * @description Values to exclude from the filter (max 200 items).
           * @default null
           */
          exclude: string[] | null;
          /**
           * Include
           * @description Values to include in the filter (max 200 items).
           * @default null
           */
          include: string[] | null;
      } | null;
      /**
       * IncludeExclude
       * @description Model for include/exclude filters where you can specify lists of values to include or exclude.
       * @default null
       */
      type: {
          /**
           * Exclude
           * @description Values to exclude from the filter (max 200 items).
           * @default null
           */
          exclude: string[] | null;
          /**
           * Include
           * @description Values to include in the filter (max 200 items).
           * @default null
           */
          include: string[] | null;
      } | null;
      /**
       * IncludeExclude
       * @description Model for include/exclude filters where you can specify lists of values to include or exclude.
       * @default null
       */
      urn: {
          /**
           * Exclude
           * @description Values to exclude from the filter (max 200 items).
           * @default null
           */
          exclude: string[] | null;
          /**
           * Include
           * @description Values to include in the filter (max 200 items).
           * @default null
           */
          include: string[] | null;
      } | null;
  };
};

/**
 * Type of ICYPEAS's ICYPEAS_FIND_COMPANIES tool output.
 */
type ICYPEAS_FIND_COMPANIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Leads
       * @description List of companies returned in this page.
       */
      leads: {
          /**
           *  Id
           * @description Internal unique identifier.
           * @default null
           */
          _id: string | null;
          /**
           * Address
           * @description Company address.
           * @default null
           */
          address: string | null;
          /**
           * Description
           * @description Company description.
           * @default null
           */
          description: string | null;
          /**
           * Employee Growth
           * @description Historical employee growth data points.
           * @default null
           */
          employeeGrowth: number[] | null;
          /**
           * Industry
           * @description Primary industry of the company.
           * @default null
           */
          industry: string | null;
          /**
           * Lid
           * @description LinkedIn public company ID.
           * @default null
           */
          lid: string | null;
          /**
           * Name
           * @description Company name.
           * @default null
           */
          name: string | null;
          /**
           * Number Of Employees
           * @description Number of employees at the company.
           * @default null
           */
          numberOfEmployees: number | null;
          /**
           * Specialties
           * @description Key specialties or focus areas of the company.
           * @default null
           */
          specialties: string[] | null;
          /**
           * Url
           * @description LinkedIn URL for the company.
           * @default null
           */
          url: string | null;
          /**
           * Urn
           * @description LinkedIn company URN.
           * @default null
           */
          urn: string | null;
          /**
           * Website
           * @description Company website URL.
           * @default null
           */
          website: string | null;
      }[];
      /**
       * PaginationResponse
       * @description Pagination details returned by the API when more results are available.
       * @default null
       */
      pagination: {
          /**
           * Size
           * @description Page size used for the response.
           */
          size: number;
          /**
           * Token
           * @description Token to retrieve the next page of results.
           */
          token: string;
      } | null;
      /**
       * Success
       * @description Indicates if the request was successful.
       */
      success: boolean;
      /**
       * Total
       * @description Total number of companies matching the query.
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
 * Type of ICYPEAS's ICYPEAS_FIND_COMPANY_URL tool input.
 */
type ICYPEAS_FIND_COMPANY_URL_INPUT = {
  /**
   * Company Or Domain
   * @description Either the full company name or its website domain.
   */
  companyOrDomain?: string;
};

/**
 * Type of ICYPEAS's ICYPEAS_FIND_COMPANY_URL tool output.
 */
type ICYPEAS_FIND_COMPANY_URL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Item
       * @description The created search item with its ID and status.
       */
      item: {
          /**
           *  Id
           * @description Identifier of the search item; use it to fetch results.
           */
          _id: string;
          /**
           * Status
           * @description Current processing status for this search item.
           */
          status: string;
      };
      /**
       * Success
       * @description Indicates whether the request was accepted.
       */
      success: boolean;
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
 * Type of ICYPEAS's ICYPEAS_FIND_PEOPLE tool input.
 */
type ICYPEAS_FIND_PEOPLE_INPUT = {
  /**
   * Pagination
   * @description Pagination settings for multi-page results.
   * @default null
   */
  pagination: {
      /**
       * Size
       * @description Number of results per page (1-200); default is 100.
       * @default 100
       */
      size: number | null;
      /**
       * Token
       * @description Opaque token for the next page; required if used.
       * @default null
       */
      token: string | null;
  } | null;
  /**
   * Query
   * @description Search filters: include/exclude lists per field.
   */
  query?: {
      /**
       * IncludeExcludeStr
       * @default null
       */
      currentCompanyName: {
          /**
           * Exclude
           * @description Values to exclude (max 200).
           * @default null
           */
          exclude: string[] | null;
          /**
           * Include
           * @description Values to include (max 200).
           * @default null
           */
          include: string[] | null;
      } | null;
      /**
       * IncludeExcludeStr
       * @default null
       */
      currentCompanyUrn: {
          /**
           * Exclude
           * @description Values to exclude (max 200).
           * @default null
           */
          exclude: string[] | null;
          /**
           * Include
           * @description Values to include (max 200).
           * @default null
           */
          include: string[] | null;
      } | null;
      /**
       * IncludeExcludeStr
       * @default null
       */
      currentJobTitle: {
          /**
           * Exclude
           * @description Values to exclude (max 200).
           * @default null
           */
          exclude: string[] | null;
          /**
           * Include
           * @description Values to include (max 200).
           * @default null
           */
          include: string[] | null;
      } | null;
      /**
       * IncludeExcludeStr
       * @default null
       */
      firstname: {
          /**
           * Exclude
           * @description Values to exclude (max 200).
           * @default null
           */
          exclude: string[] | null;
          /**
           * Include
           * @description Values to include (max 200).
           * @default null
           */
          include: string[] | null;
      } | null;
      /**
       * IncludeExcludeStr
       * @default null
       */
      keyword: {
          /**
           * Exclude
           * @description Values to exclude (max 200).
           * @default null
           */
          exclude: string[] | null;
          /**
           * Include
           * @description Values to include (max 200).
           * @default null
           */
          include: string[] | null;
      } | null;
      /**
       * IncludeExcludeStr
       * @default null
       */
      languages: {
          /**
           * Exclude
           * @description Values to exclude (max 200).
           * @default null
           */
          exclude: string[] | null;
          /**
           * Include
           * @description Values to include (max 200).
           * @default null
           */
          include: string[] | null;
      } | null;
      /**
       * IncludeExcludeStr
       * @default null
       */
      lastname: {
          /**
           * Exclude
           * @description Values to exclude (max 200).
           * @default null
           */
          exclude: string[] | null;
          /**
           * Include
           * @description Values to include (max 200).
           * @default null
           */
          include: string[] | null;
      } | null;
      /**
       * IncludeExcludeStr
       * @default null
       */
      location: {
          /**
           * Exclude
           * @description Values to exclude (max 200).
           * @default null
           */
          exclude: string[] | null;
          /**
           * Include
           * @description Values to include (max 200).
           * @default null
           */
          include: string[] | null;
      } | null;
      /**
       * IncludeExcludeStr
       * @default null
       */
      pastCompanyName: {
          /**
           * Exclude
           * @description Values to exclude (max 200).
           * @default null
           */
          exclude: string[] | null;
          /**
           * Include
           * @description Values to include (max 200).
           * @default null
           */
          include: string[] | null;
      } | null;
      /**
       * IncludeExcludeStr
       * @default null
       */
      pastCompanyUrn: {
          /**
           * Exclude
           * @description Values to exclude (max 200).
           * @default null
           */
          exclude: string[] | null;
          /**
           * Include
           * @description Values to include (max 200).
           * @default null
           */
          include: string[] | null;
      } | null;
      /**
       * IncludeExcludeStr
       * @default null
       */
      pastJobTitle: {
          /**
           * Exclude
           * @description Values to exclude (max 200).
           * @default null
           */
          exclude: string[] | null;
          /**
           * Include
           * @description Values to include (max 200).
           * @default null
           */
          include: string[] | null;
      } | null;
      /**
       * IncludeExcludeStr
       * @default null
       */
      school: {
          /**
           * Exclude
           * @description Values to exclude (max 200).
           * @default null
           */
          exclude: string[] | null;
          /**
           * Include
           * @description Values to include (max 200).
           * @default null
           */
          include: string[] | null;
      } | null;
      /**
       * IncludeExcludeStr
       * @default null
       */
      skills: {
          /**
           * Exclude
           * @description Values to exclude (max 200).
           * @default null
           */
          exclude: string[] | null;
          /**
           * Include
           * @description Values to include (max 200).
           * @default null
           */
          include: string[] | null;
      } | null;
  };
};

/**
 * Type of ICYPEAS's ICYPEAS_FIND_PEOPLE tool output.
 */
type ICYPEAS_FIND_PEOPLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Leads
       * @description Array of lead records (fields vary per record).
       */
      leads: {
          [key: string]: string | number | boolean | null;
      }[];
      /**
       * PaginationResponse
       * @description Present if more pages of data exist.
       * @default null
       */
      pagination: {
          /**
           * Size
           * @description Page size returned.
           */
          size: number;
          /**
           * Token
           * @description Opaque token to request the next page.
           */
          token: string;
      } | null;
      /**
       * Success
       * @description True if the query succeeded.
       */
      success: boolean;
      /**
       * Total
       * @description Total number of matching leads.
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
 * Type of ICYPEAS's ICYPEAS_FIND_PROFILE_URL tool input.
 */
type ICYPEAS_FIND_PROFILE_URL_INPUT = {
  /**
   * Company Or Domain
   * @description Company name or domain (optional if jobTitle provided)
   * @default null
   */
  companyOrDomain: string | null;
  /**
   * Firstname
   * @description First name of the prospect
   */
  firstname?: string;
  /**
   * Job Title
   * @description Prospect's job title (optional if companyOrDomain provided)
   * @default null
   */
  jobTitle: string | null;
  /**
   * Lastname
   * @description Last name of the prospect
   */
  lastname?: string;
};

/**
 * Type of ICYPEAS's ICYPEAS_FIND_PROFILE_URL tool output.
 */
type ICYPEAS_FIND_PROFILE_URL_OUTPUT = {
  /**
   * Data
   * @description Full raw JSON response from the API
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Url
   * @description Found profile URL, if any
   * @default null
   */
  url: string | null;
};

/**
 * Type of ICYPEAS's ICYPEAS_FIND_PROFILE_URLS_BULK tool input.
 */
type ICYPEAS_FIND_PROFILE_URLS_BULK_INPUT = {
  /**
   * Data
   * @description List of profiles to search (max 50 items)
   */
  data?: {
      /**
       * Company Or Domain
       * @description Company name or website domain; required if jobTitle is not provided
       * @default null
       */
      companyOrDomain: string | null;
      /**
       * Firstname
       * @description Prospect's first name
       */
      firstname: string;
      /**
       * Job Title
       * @description Prospect's job title; required if companyOrDomain is not provided
       * @default null
       */
      jobTitle: string | null;
      /**
       * Lastname
       * @description Prospect's last name
       */
      lastname: string;
  }[];
  /**
   * Type
   * @description Must be 'profile' for profile URL bulk search
   * @constant
   */
  type?: "profile";
};

/**
 * Type of ICYPEAS's ICYPEAS_FIND_PROFILE_URLS_BULK tool output.
 */
type ICYPEAS_FIND_PROFILE_URLS_BULK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File
       * @description Identifier of the created bulk job file
       */
      file: string;
      /**
       * Status
       * @description Initial bulk search status, e.g., 'in_progress'
       */
      status: string;
      /**
       * Success
       * @description Indicates the bulk search request was accepted
       */
      success: boolean;
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
 * Type of ICYPEAS's ICYPEAS_FIND_SINGLE_EMAIL tool input.
 */
type ICYPEAS_FIND_SINGLE_EMAIL_INPUT = {
  /**
   * EmailSearchCustom
   * @description Optional container for webhook and external tracking data.
   * @default null
   */
  custom: {
      /**
       * External Id
       * @description A custom ID to track this search (not enforced unique by Icypeas)
       * @default null
       */
      externalId: string | null;
      /**
       * Webhook Url
       * Format: uri
       * @description A custom webhook URL to be triggered when the search completes
       * @default null
       */
      webhookUrl: string | null;
  } | null;
  /**
   * Domain Or Company
   * @description The person’s company domain or company name
   */
  domainOrCompany?: string;
  /**
   * Firstname
   * @description Prospect’s first name; required if lastname is omitted
   * @default null
   */
  firstname: string | null;
  /**
   * Lastname
   * @description Prospect’s last name; required if firstname is omitted
   * @default null
   */
  lastname: string | null;
};

/**
 * Type of ICYPEAS's ICYPEAS_FIND_SINGLE_EMAIL tool output.
 */
type ICYPEAS_FIND_SINGLE_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Item
       * @description Stub of the search item returned on creation
       */
      item: {
          /**
           *  Id
           * @description Identifier of the created search item
           */
          _id: string;
          /**
           * Status
           * @description Initial status of the search item (e.g., 'NONE')
           */
          status: string;
      };
      /**
       * Success
       * @description Indicates the request was accepted
       */
      success: boolean;
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
 * Type of ICYPEAS's ICYPEAS_RETRIEVE_SEARCH_RESULTS tool input.
 */
type ICYPEAS_RETRIEVE_SEARCH_RESULTS_INPUT = {
  /**
   * File
   * @description Bulk-file identifier (required if mode='bulk')
   * @default null
   */
  file: string | null;
  /**
   * Id
   * @description _id of the single result (required if mode='single')
   * @default null
   */
  id: string | null;
  /**
   * Limit
   * @description Number of results per page (default 10, max 100)
   * @default 10
   */
  limit: number | null;
  /**
   * Mode
   * @description Choose 'single' for one item or 'bulk' for bulk-file search
   * @enum {string}
   */
  mode?: "single" | "bulk";
  /**
   * Next
   * @description Pagination direction: true for next page, false for previous
   * @default null
   */
  next: boolean | null;
  /**
   * Sorts
   * @description Pagination cursor from previous response
   * @default null
   */
  sorts: (number | string)[][] | null;
  /**
   * Type
   * @description Task filter for single-mode only (not allowed when mode='bulk')
   * @default null
   * @enum {string|null}
   */
  type: "email-search" | "domain-scan" | "email-verification" | null;
};

/**
 * Type of ICYPEAS's ICYPEAS_RETRIEVE_SEARCH_RESULTS tool output.
 */
type ICYPEAS_RETRIEVE_SEARCH_RESULTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Item
       * @description Single search result object (mode='single')
       * @default null
       */
      item: {
          [key: string]: unknown;
      } | null;
      /**
       * Items
       * @description List of search result objects (mode='bulk')
       * @default null
       */
      items: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Sorts
       * @description Pagination cursor for next/previous page
       * @default null
       */
      sorts: (number | string)[][] | null;
      /**
       * Success
       * @description True if operation succeeded
       */
      success: boolean;
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
 * Type of ICYPEAS's ICYPEAS_SCRAPE_COMPANY tool input.
 */
type ICYPEAS_SCRAPE_COMPANY_INPUT = {
  /**
   * Url
   * Format: uri
   * @description LinkedIn company profile URL to scrape.
   */
  url?: string;
};

/**
 * Type of ICYPEAS's ICYPEAS_SCRAPE_COMPANY tool output.
 */
type ICYPEAS_SCRAPE_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Full raw JSON response from the API.
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ICYPEAS's ICYPEAS_SCRAPE_PROFILE tool input.
 */
type ICYPEAS_SCRAPE_PROFILE_INPUT = {
  /**
   * Url
   * @description LinkedIn profile URL to scrape (required; must be a valid URL)
   */
  url?: string;
};

/**
 * Type of ICYPEAS's ICYPEAS_SCRAPE_PROFILE tool output.
 */
type ICYPEAS_SCRAPE_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Item
       * @description Details of the initiated profile scrape task
       */
      item: {
          /**
           *  Id
           * @description Identifier of the created search item
           */
          _id: string;
          /**
           * Status
           * @description Current status of the profile scrape request
           */
          status: string;
      };
      /**
       * Success
       * @description Indicates whether the profile scrape request was accepted
       */
      success: boolean;
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
 * Type of ICYPEAS's ICYPEAS_SETUP_NOTIFICATIONS tool input.
 */
type ICYPEAS_SETUP_NOTIFICATIONS_INPUT = object;

/**
 * Type of ICYPEAS's ICYPEAS_SETUP_NOTIFICATIONS tool output.
 */
type ICYPEAS_SETUP_NOTIFICATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Instructions
       * @description Instructions on how to set up push notifications
       */
      instructions: string;
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
 * Type of ICYPEAS's ICYPEAS_STATISTICS_BULK_SEARCH tool input.
 */
type ICYPEAS_STATISTICS_BULK_SEARCH_INPUT = {
  /**
   * Data
   * @description Bulk search summary and details
   */
  data?: {
      /**
       * Aborted
       * @description Number of aborted rows
       */
      aborted: number;
      /**
       * Certainties
       * @description Counts of emails by certainty level in bulk search statistics.
       */
      certainties: {
          /**
           * Probable
           * @description Count of probable emails
           */
          probable: number;
          /**
           * Sure
           * @description Count of sure emails
           */
          sure: number;
          /**
           * Undeliverable
           * @description Count of undeliverable emails (for email verification only)
           */
          undeliverable: number;
          /**
           * Very Sure
           * @description Count of very sure emails
           */
          verySure: number;
      };
      /**
       * Done
       * @description Number of rows processed
       */
      done: number;
      /**
       * File
       * @description Bulk search file ID
       */
      file: string;
      /**
       * Found
       * @description Number of emails found
       */
      found: number;
      /**
       * Insufficient Credits
       * @description Rows aborted due to insufficient credits
       */
      insufficientCredits: number;
      /**
       * Results
       * @description Detailed results if includeResultsInWebhook flag was set
       * @default null
       */
      results: {
          /**
           * File
           * @description Bulk search file ID
           */
          file: string;
          /**
           * Name
           * @description Name of the bulk search job
           */
          name: string;
          /**
           * Results
           * @description List of detailed per-row results
           */
          results: {
              /**
               *  Id
               * @description Search ID for this row
               */
              _id: string;
              /**
               * Emails
               * @description List of discovered emails for this row
               */
              emails: {
                  /**
                   * Certainty
                   * @description Certainty level of the email
                   */
                  certainty: string;
                  /**
                   * Email
                   * @description Discovered email address
                   */
                  email: string;
                  /**
                   * Mx Provider
                   * @description MX provider of the email domain
                   */
                  mxProvider: string;
                  /**
                   * Mx Records
                   * @description List of MX records for the email domain
                   */
                  mxRecords: string[];
              }[];
              /**
               * Firstname
               * @description First name from search row
               */
              firstname: string;
              /**
               * Fullname
               * @description Full name from search row
               */
              fullname: string;
              /**
               * Lastname
               * @description Last name from search row
               */
              lastname: string;
              /**
               * Order
               * @description Row index in the original file
               */
              order: number;
              /**
               * Phones
               * @description List of discovered phone numbers
               */
              phones: string[];
              /**
               * Saas Services
               * @description List of SaaS services for this row
               */
              saasServices: string[];
              /**
               * Status
               * @description Processing status of this row
               */
              status: string;
              /**
               * System
               * @description System timestamps for a bulk search result row.
               */
              system: {
                  /**
                   * Created At
                   * @description Creation timestamp (ISO 8601)
                   */
                  createdAt: string;
                  /**
                   * Modified At
                   * @description Last modification timestamp (ISO 8601)
                   */
                  modifiedAt: string;
              };
              /**
               * User Data
               * @description User-provided metadata for a bulk search result row.
               */
              userData: {
                  /**
                   * External Id
                   * @description External ID provided by user
                   */
                  externalId: string;
                  /**
                   * Webhook Url
                   * @description Webhook URL set for this search
                   */
                  webhookUrl: string;
              };
          }[];
          /**
           * User
           * @description User ID who initiated the bulk search
           */
          user: string;
      }[] | null;
      /**
       * Total
       * @description Total valid rows in the file
       */
      total: number;
  };
  /**
   * Signature
   * @description HMAC-SHA1 signature of the payload
   */
  signature?: string;
  /**
   * Timestamp
   * @description ISO 8601 timestamp used to compute signature
   */
  timestamp?: string;
};

/**
 * Type of ICYPEAS's ICYPEAS_STATISTICS_BULK_SEARCH tool output.
 */
type ICYPEAS_STATISTICS_BULK_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Aborted */
      aborted: number;
      /**
       * Certainties
       * @description Counts of emails by certainty level in bulk search statistics.
       */
      certainties: {
          /**
           * Probable
           * @description Count of probable emails
           */
          probable: number;
          /**
           * Sure
           * @description Count of sure emails
           */
          sure: number;
          /**
           * Undeliverable
           * @description Count of undeliverable emails (for email verification only)
           */
          undeliverable: number;
          /**
           * Very Sure
           * @description Count of very sure emails
           */
          verySure: number;
      };
      /** Done */
      done: number;
      /** File */
      file: string;
      /** Found */
      found: number;
      /** Insufficient Credits */
      insufficientCredits: number;
      /** Results */
      results: {
          /**
           * File
           * @description Bulk search file ID
           */
          file: string;
          /**
           * Name
           * @description Name of the bulk search job
           */
          name: string;
          /**
           * Results
           * @description List of detailed per-row results
           */
          results: {
              /**
               *  Id
               * @description Search ID for this row
               */
              _id: string;
              /**
               * Emails
               * @description List of discovered emails for this row
               */
              emails: {
                  /**
                   * Certainty
                   * @description Certainty level of the email
                   */
                  certainty: string;
                  /**
                   * Email
                   * @description Discovered email address
                   */
                  email: string;
                  /**
                   * Mx Provider
                   * @description MX provider of the email domain
                   */
                  mxProvider: string;
                  /**
                   * Mx Records
                   * @description List of MX records for the email domain
                   */
                  mxRecords: string[];
              }[];
              /**
               * Firstname
               * @description First name from search row
               */
              firstname: string;
              /**
               * Fullname
               * @description Full name from search row
               */
              fullname: string;
              /**
               * Lastname
               * @description Last name from search row
               */
              lastname: string;
              /**
               * Order
               * @description Row index in the original file
               */
              order: number;
              /**
               * Phones
               * @description List of discovered phone numbers
               */
              phones: string[];
              /**
               * Saas Services
               * @description List of SaaS services for this row
               */
              saasServices: string[];
              /**
               * Status
               * @description Processing status of this row
               */
              status: string;
              /**
               * System
               * @description System timestamps for a bulk search result row.
               */
              system: {
                  /**
                   * Created At
                   * @description Creation timestamp (ISO 8601)
                   */
                  createdAt: string;
                  /**
                   * Modified At
                   * @description Last modification timestamp (ISO 8601)
                   */
                  modifiedAt: string;
              };
              /**
               * User Data
               * @description User-provided metadata for a bulk search result row.
               */
              userData: {
                  /**
                   * External Id
                   * @description External ID provided by user
                   */
                  externalId: string;
                  /**
                   * Webhook Url
                   * @description Webhook URL set for this search
                   */
                  webhookUrl: string;
              };
          }[];
          /**
           * User
           * @description User ID who initiated the bulk search
           */
          user: string;
      }[] | null;
      /** Total */
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
 * Type map of all available tool input types for toolkit "ICYPEAS".
 */
export type ICYPEAS_TOOL_INPUTS = {
  BULK_EMAIL_SEARCH: ICYPEAS_BULK_EMAIL_SEARCH_INPUT
  CHECK_PROGRESS: ICYPEAS_CHECK_PROGRESS_INPUT
  DOMAIN_SCAN: ICYPEAS_DOMAIN_SCAN_INPUT
  FETCH_BULK_SEARCH_INFO: ICYPEAS_FETCH_BULK_SEARCH_INFO_INPUT
  FETCH_SUBSCRIPTION_INFO: ICYPEAS_FETCH_SUBSCRIPTION_INFO_INPUT
  FIND_COMPANIES: ICYPEAS_FIND_COMPANIES_INPUT
  FIND_COMPANY_URL: ICYPEAS_FIND_COMPANY_URL_INPUT
  FIND_PEOPLE: ICYPEAS_FIND_PEOPLE_INPUT
  FIND_PROFILE_URL: ICYPEAS_FIND_PROFILE_URL_INPUT
  FIND_PROFILE_URLS_BULK: ICYPEAS_FIND_PROFILE_URLS_BULK_INPUT
  FIND_SINGLE_EMAIL: ICYPEAS_FIND_SINGLE_EMAIL_INPUT
  RETRIEVE_SEARCH_RESULTS: ICYPEAS_RETRIEVE_SEARCH_RESULTS_INPUT
  SCRAPE_COMPANY: ICYPEAS_SCRAPE_COMPANY_INPUT
  SCRAPE_PROFILE: ICYPEAS_SCRAPE_PROFILE_INPUT
  SETUP_NOTIFICATIONS: ICYPEAS_SETUP_NOTIFICATIONS_INPUT
  STATISTICS_BULK_SEARCH: ICYPEAS_STATISTICS_BULK_SEARCH_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ICYPEAS".
 */
export type ICYPEAS_TOOL_OUTPUTS = {
  BULK_EMAIL_SEARCH: ICYPEAS_BULK_EMAIL_SEARCH_OUTPUT
  CHECK_PROGRESS: ICYPEAS_CHECK_PROGRESS_OUTPUT
  DOMAIN_SCAN: ICYPEAS_DOMAIN_SCAN_OUTPUT
  FETCH_BULK_SEARCH_INFO: ICYPEAS_FETCH_BULK_SEARCH_INFO_OUTPUT
  FETCH_SUBSCRIPTION_INFO: ICYPEAS_FETCH_SUBSCRIPTION_INFO_OUTPUT
  FIND_COMPANIES: ICYPEAS_FIND_COMPANIES_OUTPUT
  FIND_COMPANY_URL: ICYPEAS_FIND_COMPANY_URL_OUTPUT
  FIND_PEOPLE: ICYPEAS_FIND_PEOPLE_OUTPUT
  FIND_PROFILE_URL: ICYPEAS_FIND_PROFILE_URL_OUTPUT
  FIND_PROFILE_URLS_BULK: ICYPEAS_FIND_PROFILE_URLS_BULK_OUTPUT
  FIND_SINGLE_EMAIL: ICYPEAS_FIND_SINGLE_EMAIL_OUTPUT
  RETRIEVE_SEARCH_RESULTS: ICYPEAS_RETRIEVE_SEARCH_RESULTS_OUTPUT
  SCRAPE_COMPANY: ICYPEAS_SCRAPE_COMPANY_OUTPUT
  SCRAPE_PROFILE: ICYPEAS_SCRAPE_PROFILE_OUTPUT
  SETUP_NOTIFICATIONS: ICYPEAS_SETUP_NOTIFICATIONS_OUTPUT
  STATISTICS_BULK_SEARCH: ICYPEAS_STATISTICS_BULK_SEARCH_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ICYPEAS toolkit.
 */
export const ICYPEAS = {
  slug: "icypeas",
  tools: {
    /**
     * Tool to start a bulk email search job. Use when you have up to 5000 names and domains to batch-find emails via the ICYPEAS bulk-search endpoint.
     */
    BULK_EMAIL_SEARCH: "ICYPEAS_BULK_EMAIL_SEARCH",
    /**
     * Tool to check the progress of a search by its ID. Use after initiating a single or bulk search to poll for its processing status.
     */
    CHECK_PROGRESS: "ICYPEAS_CHECK_PROGRESS",
    /**
     * Tool to scan a domain for role-based email addresses. Use when you need to discover all role-based emails for a specific domain.
     */
    DOMAIN_SCAN: "ICYPEAS_DOMAIN_SCAN",
    /**
     * Tool to fetch information about bulk search files. Use when you need status and pagination details after initiating bulk search operations.
     */
    FETCH_BULK_SEARCH_INFO: "ICYPEAS_FETCH_BULK_SEARCH_INFO",
    /**
     * Tool to fetch subscription and credit info. Use after obtaining a valid API key.
     */
    FETCH_SUBSCRIPTION_INFO: "ICYPEAS_FETCH_SUBSCRIPTION_INFO",
    /**
     * Tool to search companies in Icypeas database. Use when you need to find companies matching filters like industry, location, or headcount.
     */
    FIND_COMPANIES: "ICYPEAS_FIND_COMPANIES",
    /**
     * Tool to find a single company profile URL using a company name or domain. Use when you need to initiate a profile-URL search for a given company identifier.
     */
    FIND_COMPANY_URL: "ICYPEAS_FIND_COMPANY_URL",
    /**
     * Tool to search for people in the leads database. Use when you need to filter people by name, title, company, and other attributes.
     */
    FIND_PEOPLE: "ICYPEAS_FIND_PEOPLE",
    /**
     * Tool to find a single profile URL. Use after confirming first name, last name, and either company/domain or job title. Example: "Find the LinkedIn URL for Pierre Landoin at icypeas.com."
     */
    FIND_PROFILE_URL: "ICYPEAS_FIND_PROFILE_URL",
    /**
     * Tool to perform bulk search for profile URLs. Use when you need to resolve multiple prospects' profile URLs at once.
     */
    FIND_PROFILE_URLS_BULK: "ICYPEAS_FIND_PROFILE_URLS_BULK",
    /**
     * Tool to discover a single email address using a person's first or last name with a company domain or name. Use when needing to retrieve a prospect's specific email before outreach.
     */
    FIND_SINGLE_EMAIL: "ICYPEAS_FIND_SINGLE_EMAIL",
    /**
     * Tool to retrieve the results of a search by ID or to paginate through bulk search results. Use after initiating a search to fetch individual or multiple search results.
     */
    RETRIEVE_SEARCH_RESULTS: "ICYPEAS_RETRIEVE_SEARCH_RESULTS",
    /**
     * Tool to scrape company profile information from a LinkedIn company URL. Use when you have a company LinkedIn URL to retrieve detailed company data.
     */
    SCRAPE_COMPANY: "ICYPEAS_SCRAPE_COMPANY",
    /**
     * Tool to initiate scraping of a LinkedIn profile. Use when you have a public LinkedIn profile URL and need a job ID and status to later fetch full details.
     */
    SCRAPE_PROFILE: "ICYPEAS_SCRAPE_PROFILE",
    /**
     * Tool to set up push notifications. Use when you need to receive real-time updates about your searches. Note: Icypeas requires webhook configuration via the dashboard UI; no public API endpoint exists for setup.
     */
    SETUP_NOTIFICATIONS: "ICYPEAS_SETUP_NOTIFICATIONS",
    /**
     * Tool to parse bulk search statistics webhook. Use when processing the completion notification of a bulk search.
     */
    STATISTICS_BULK_SEARCH: "ICYPEAS_STATISTICS_BULK_SEARCH",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ICYPEAS".
 */
export type ICYPEAS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ICYPEAS".
 */
export type ICYPEAS_TRIGGER_EVENTS = {}
