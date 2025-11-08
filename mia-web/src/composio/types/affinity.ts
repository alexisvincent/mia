// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of AFFINITY's AFFINITY_GET_ALL_COMPANIES tool input.
 */
type AFFINITY_GET_ALL_COMPANIES_INPUT = {
  /**
   * Cursor
   * @description Cursor for the next or previous page
   */
  cursor?: string;
  /**
   * Field Ids
   * @description Field IDs for which to return field data
   */
  fieldIds?: string[];
  /**
   * Field Types
   * @description Field Types for which to return field data
   */
  fieldTypes?: string[];
  /**
   * Ids
   * @description Company IDs
   */
  ids?: number[];
  /**
   * Limit
   * @description Number of items to include in the page
   * @default 100
   */
  limit: number;
};

/**
 * Type of AFFINITY's AFFINITY_GET_ALL_COMPANIES tool output.
 */
type AFFINITY_GET_ALL_COMPANIES_OUTPUT = {
  /** Data */
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
 * Type of AFFINITY's AFFINITY_GET_ALL_LIST_ENTRIES_ON_A_LIST tool input.
 */
type AFFINITY_GET_ALL_LIST_ENTRIES_ON_A_LIST_INPUT = {
  /**
   * Cursor
   * @description Cursor for the next or previous page
   */
  cursor?: string;
  /**
   * Field Ids
   * @description Field IDs for which to return field data
   */
  fieldIds?: string[];
  /**
   * Field Types
   * @description Field Types for which to return field data
   */
  fieldTypes?: string[];
  /**
   * Limit
   * @description Number of items to include in the page
   * @default 100
   */
  limit: number;
  /**
   * List Id
   * @description List ID
   */
  listId?: number;
};

/**
 * Type of AFFINITY's AFFINITY_GET_ALL_LIST_ENTRIES_ON_A_LIST tool output.
 */
type AFFINITY_GET_ALL_LIST_ENTRIES_ON_A_LIST_OUTPUT = {
  /** Data */
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
 * Type of AFFINITY's AFFINITY_GET_ALL_LIST_ENTRIES_ON_A_SAVED_VIEW tool input.
 */
type AFFINITY_GET_ALL_LIST_ENTRIES_ON_A_SAVED_VIEW_INPUT = {
  /**
   * Cursor
   * @description Cursor for the next or previous page
   */
  cursor?: string;
  /**
   * Limit
   * @description Number of items to include in the page
   * @default 100
   */
  limit: number;
  /**
   * List Id
   * @description List ID
   */
  listId?: number;
  /**
   * View Id
   * @description Saved view ID
   */
  viewId?: number;
};

/**
 * Type of AFFINITY's AFFINITY_GET_ALL_LIST_ENTRIES_ON_A_SAVED_VIEW tool output.
 */
type AFFINITY_GET_ALL_LIST_ENTRIES_ON_A_SAVED_VIEW_OUTPUT = {
  /** Data */
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
 * Type of AFFINITY's AFFINITY_GET_ALL_OPPORTUNITIES tool input.
 */
type AFFINITY_GET_ALL_OPPORTUNITIES_INPUT = {
  /**
   * Cursor
   * @description Cursor for the next or previous page
   */
  cursor?: string;
  /**
   * Ids
   * @description Opportunity IDs
   */
  ids?: number[];
  /**
   * Limit
   * @description Number of items to include in the page
   * @default 100
   */
  limit: number;
};

/**
 * Type of AFFINITY's AFFINITY_GET_ALL_OPPORTUNITIES tool output.
 */
type AFFINITY_GET_ALL_OPPORTUNITIES_OUTPUT = {
  /** Data */
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
 * Type of AFFINITY's AFFINITY_GET_ALL_PERSONS tool input.
 */
type AFFINITY_GET_ALL_PERSONS_INPUT = {
  /**
   * Cursor
   * @description Cursor for the next or previous page
   */
  cursor?: string;
  /**
   * Field Ids
   * @description Field IDs for which to return field data
   */
  fieldIds?: string[];
  /**
   * Field Types
   * @description Field Types for which to return field data
   */
  fieldTypes?: string[];
  /**
   * Ids
   * @description People IDs
   */
  ids?: number[];
  /**
   * Limit
   * @description Number of items to include in the page
   * @default 100
   */
  limit: number;
};

/**
 * Type of AFFINITY's AFFINITY_GET_ALL_PERSONS tool output.
 */
type AFFINITY_GET_ALL_PERSONS_OUTPUT = {
  /** Data */
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
 * Type of AFFINITY's AFFINITY_GET_A_COMPANY_S_LISTS tool input.
 */
type AFFINITY_GET_A_COMPANY_S_LISTS_INPUT = {
  /**
   * Cursor
   * @description Cursor for the next or previous page
   */
  cursor?: string;
  /**
   * Id
   * @description Company ID
   */
  id?: number;
  /**
   * Limit
   * @description Number of items to include in the page
   * @default 100
   */
  limit: number;
};

/**
 * Type of AFFINITY's AFFINITY_GET_A_COMPANY_S_LISTS tool output.
 */
type AFFINITY_GET_A_COMPANY_S_LISTS_OUTPUT = {
  /** Data */
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
 * Type of AFFINITY's AFFINITY_GET_A_COMPANY_S_LIST_ENTRIES tool input.
 */
type AFFINITY_GET_A_COMPANY_S_LIST_ENTRIES_INPUT = {
  /**
   * Cursor
   * @description Cursor for the next or previous page
   */
  cursor?: string;
  /**
   * Id
   * @description Company ID
   */
  id?: number;
  /**
   * Limit
   * @description Number of items to include in the page
   * @default 100
   */
  limit: number;
};

/**
 * Type of AFFINITY's AFFINITY_GET_A_COMPANY_S_LIST_ENTRIES tool output.
 */
type AFFINITY_GET_A_COMPANY_S_LIST_ENTRIES_OUTPUT = {
  /** Data */
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
 * Type of AFFINITY's AFFINITY_GET_A_PERSON_S_LISTS tool input.
 */
type AFFINITY_GET_A_PERSON_S_LISTS_INPUT = {
  /**
   * Cursor
   * @description Cursor for the next or previous page
   */
  cursor?: string;
  /**
   * Id
   * @description Persons ID
   */
  id?: number;
  /**
   * Limit
   * @description Number of items to include in the page
   * @default 100
   */
  limit: number;
};

/**
 * Type of AFFINITY's AFFINITY_GET_A_PERSON_S_LISTS tool output.
 */
type AFFINITY_GET_A_PERSON_S_LISTS_OUTPUT = {
  /** Data */
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
 * Type of AFFINITY's AFFINITY_GET_A_PERSON_S_LIST_ENTRIES tool input.
 */
type AFFINITY_GET_A_PERSON_S_LIST_ENTRIES_INPUT = {
  /**
   * Cursor
   * @description Cursor for the next or previous page
   */
  cursor?: string;
  /**
   * Id
   * @description Persons ID
   */
  id?: number;
  /**
   * Limit
   * @description Number of items to include in the page
   * @default 100
   */
  limit: number;
};

/**
 * Type of AFFINITY's AFFINITY_GET_A_PERSON_S_LIST_ENTRIES tool output.
 */
type AFFINITY_GET_A_PERSON_S_LIST_ENTRIES_OUTPUT = {
  /** Data */
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
 * Type of AFFINITY's AFFINITY_GET_A_SINGLE_COMPANY tool input.
 */
type AFFINITY_GET_A_SINGLE_COMPANY_INPUT = {
  /**
   * Field Ids
   * @description Field IDs for which to return field data
   */
  fieldIds?: string[];
  /**
   * Field Types
   * @description Field Types for which to return field data
   */
  fieldTypes?: string[];
  /**
   * Id
   * @description Company ID
   */
  id?: number;
};

/**
 * Type of AFFINITY's AFFINITY_GET_A_SINGLE_COMPANY tool output.
 */
type AFFINITY_GET_A_SINGLE_COMPANY_OUTPUT = {
  /** Data */
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
 * Type of AFFINITY's AFFINITY_GET_A_SINGLE_OPPORTUNITY tool input.
 */
type AFFINITY_GET_A_SINGLE_OPPORTUNITY_INPUT = {
  /**
   * Id
   * @description Opportunity ID
   */
  id?: number;
};

/**
 * Type of AFFINITY's AFFINITY_GET_A_SINGLE_OPPORTUNITY tool output.
 */
type AFFINITY_GET_A_SINGLE_OPPORTUNITY_OUTPUT = {
  /** Data */
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
 * Type of AFFINITY's AFFINITY_GET_A_SINGLE_PERSON tool input.
 */
type AFFINITY_GET_A_SINGLE_PERSON_INPUT = {
  /**
   * Field Ids
   * @description Field IDs for which to return field data
   */
  fieldIds?: string[];
  /**
   * Field Types
   * @description Field Types for which to return field data
   */
  fieldTypes?: string[];
  /**
   * Id
   * @description Person ID
   */
  id?: number;
};

/**
 * Type of AFFINITY's AFFINITY_GET_A_SINGLE_PERSON tool output.
 */
type AFFINITY_GET_A_SINGLE_PERSON_OUTPUT = {
  /** Data */
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
 * Type of AFFINITY's AFFINITY_GET_CURRENT_USER tool input.
 */
type AFFINITY_GET_CURRENT_USER_INPUT = object;

/**
 * Type of AFFINITY's AFFINITY_GET_CURRENT_USER tool output.
 */
type AFFINITY_GET_CURRENT_USER_OUTPUT = {
  /** Data */
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
 * Type of AFFINITY's AFFINITY_GET_METADATA_ON_ALL_LISTS tool input.
 */
type AFFINITY_GET_METADATA_ON_ALL_LISTS_INPUT = {
  /**
   * Cursor
   * @description Cursor for the next or previous page
   */
  cursor?: string;
  /**
   * Limit
   * @description Number of items to include in the page
   * @default 100
   */
  limit: number;
};

/**
 * Type of AFFINITY's AFFINITY_GET_METADATA_ON_ALL_LISTS tool output.
 */
type AFFINITY_GET_METADATA_ON_ALL_LISTS_OUTPUT = {
  /** Data */
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
 * Type of AFFINITY's AFFINITY_GET_METADATA_ON_A_SINGLE_LIST tool input.
 */
type AFFINITY_GET_METADATA_ON_A_SINGLE_LIST_INPUT = {
  /**
   * List Id
   * @description List ID
   */
  listId?: number;
};

/**
 * Type of AFFINITY's AFFINITY_GET_METADATA_ON_A_SINGLE_LIST tool output.
 */
type AFFINITY_GET_METADATA_ON_A_SINGLE_LIST_OUTPUT = {
  /** Data */
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
 * Type of AFFINITY's AFFINITY_GET_METADATA_ON_A_SINGLE_LIST_S_FIELDS tool input.
 */
type AFFINITY_GET_METADATA_ON_A_SINGLE_LIST_S_FIELDS_INPUT = {
  /**
   * Cursor
   * @description Cursor for the next or previous page
   */
  cursor?: string;
  /**
   * Limit
   * @description Number of items to include in the page
   * @default 100
   */
  limit: number;
  /**
   * List Id
   * @description List ID
   */
  listId?: number;
};

/**
 * Type of AFFINITY's AFFINITY_GET_METADATA_ON_A_SINGLE_LIST_S_FIELDS tool output.
 */
type AFFINITY_GET_METADATA_ON_A_SINGLE_LIST_S_FIELDS_OUTPUT = {
  /** Data */
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
 * Type of AFFINITY's AFFINITY_GET_METADATA_ON_A_SINGLE_SAVED_VIEW tool input.
 */
type AFFINITY_GET_METADATA_ON_A_SINGLE_SAVED_VIEW_INPUT = {
  /**
   * List Id
   * @description List ID
   */
  listId?: number;
  /**
   * View Id
   * @description Saved view ID
   */
  viewId?: number;
};

/**
 * Type of AFFINITY's AFFINITY_GET_METADATA_ON_A_SINGLE_SAVED_VIEW tool output.
 */
type AFFINITY_GET_METADATA_ON_A_SINGLE_SAVED_VIEW_OUTPUT = {
  /** Data */
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
 * Type of AFFINITY's AFFINITY_GET_METADATA_ON_COMPANY_FIELDS tool input.
 */
type AFFINITY_GET_METADATA_ON_COMPANY_FIELDS_INPUT = {
  /**
   * Cursor
   * @description Cursor for the next or previous page
   */
  cursor?: string;
  /**
   * Limit
   * @description Number of items to include in the page
   * @default 100
   */
  limit: number;
};

/**
 * Type of AFFINITY's AFFINITY_GET_METADATA_ON_COMPANY_FIELDS tool output.
 */
type AFFINITY_GET_METADATA_ON_COMPANY_FIELDS_OUTPUT = {
  /** Data */
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
 * Type of AFFINITY's AFFINITY_GET_METADATA_ON_PERSON_FIELDS tool input.
 */
type AFFINITY_GET_METADATA_ON_PERSON_FIELDS_INPUT = {
  /**
   * Cursor
   * @description Cursor for the next or previous page
   */
  cursor?: string;
  /**
   * Limit
   * @description Number of items to include in the page
   * @default 100
   */
  limit: number;
};

/**
 * Type of AFFINITY's AFFINITY_GET_METADATA_ON_PERSON_FIELDS tool output.
 */
type AFFINITY_GET_METADATA_ON_PERSON_FIELDS_OUTPUT = {
  /** Data */
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
 * Type of AFFINITY's AFFINITY_GET_METADATA_ON_SAVED_VIEWS tool input.
 */
type AFFINITY_GET_METADATA_ON_SAVED_VIEWS_INPUT = {
  /**
   * Cursor
   * @description Cursor for the next or previous page
   */
  cursor?: string;
  /**
   * Limit
   * @description Number of items to include in the page
   * @default 100
   */
  limit: number;
  /**
   * List Id
   * @description List ID
   */
  listId?: number;
};

/**
 * Type of AFFINITY's AFFINITY_GET_METADATA_ON_SAVED_VIEWS tool output.
 */
type AFFINITY_GET_METADATA_ON_SAVED_VIEWS_OUTPUT = {
  /** Data */
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
 * Type map of all available tool input types for toolkit "AFFINITY".
 */
export type AFFINITY_TOOL_INPUTS = {
  GET_ALL_COMPANIES: AFFINITY_GET_ALL_COMPANIES_INPUT
  GET_ALL_LIST_ENTRIES_ON_A_LIST: AFFINITY_GET_ALL_LIST_ENTRIES_ON_A_LIST_INPUT
  GET_ALL_LIST_ENTRIES_ON_A_SAVED_VIEW: AFFINITY_GET_ALL_LIST_ENTRIES_ON_A_SAVED_VIEW_INPUT
  GET_ALL_OPPORTUNITIES: AFFINITY_GET_ALL_OPPORTUNITIES_INPUT
  GET_ALL_PERSONS: AFFINITY_GET_ALL_PERSONS_INPUT
  GET_A_COMPANY_S_LISTS: AFFINITY_GET_A_COMPANY_S_LISTS_INPUT
  GET_A_COMPANY_S_LIST_ENTRIES: AFFINITY_GET_A_COMPANY_S_LIST_ENTRIES_INPUT
  GET_A_PERSON_S_LISTS: AFFINITY_GET_A_PERSON_S_LISTS_INPUT
  GET_A_PERSON_S_LIST_ENTRIES: AFFINITY_GET_A_PERSON_S_LIST_ENTRIES_INPUT
  GET_A_SINGLE_COMPANY: AFFINITY_GET_A_SINGLE_COMPANY_INPUT
  GET_A_SINGLE_OPPORTUNITY: AFFINITY_GET_A_SINGLE_OPPORTUNITY_INPUT
  GET_A_SINGLE_PERSON: AFFINITY_GET_A_SINGLE_PERSON_INPUT
  GET_CURRENT_USER: AFFINITY_GET_CURRENT_USER_INPUT
  GET_METADATA_ON_ALL_LISTS: AFFINITY_GET_METADATA_ON_ALL_LISTS_INPUT
  GET_METADATA_ON_A_SINGLE_LIST: AFFINITY_GET_METADATA_ON_A_SINGLE_LIST_INPUT
  GET_METADATA_ON_A_SINGLE_LIST_S_FIELDS: AFFINITY_GET_METADATA_ON_A_SINGLE_LIST_S_FIELDS_INPUT
  GET_METADATA_ON_A_SINGLE_SAVED_VIEW: AFFINITY_GET_METADATA_ON_A_SINGLE_SAVED_VIEW_INPUT
  GET_METADATA_ON_COMPANY_FIELDS: AFFINITY_GET_METADATA_ON_COMPANY_FIELDS_INPUT
  GET_METADATA_ON_PERSON_FIELDS: AFFINITY_GET_METADATA_ON_PERSON_FIELDS_INPUT
  GET_METADATA_ON_SAVED_VIEWS: AFFINITY_GET_METADATA_ON_SAVED_VIEWS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "AFFINITY".
 */
export type AFFINITY_TOOL_OUTPUTS = {
  GET_ALL_COMPANIES: AFFINITY_GET_ALL_COMPANIES_OUTPUT
  GET_ALL_LIST_ENTRIES_ON_A_LIST: AFFINITY_GET_ALL_LIST_ENTRIES_ON_A_LIST_OUTPUT
  GET_ALL_LIST_ENTRIES_ON_A_SAVED_VIEW: AFFINITY_GET_ALL_LIST_ENTRIES_ON_A_SAVED_VIEW_OUTPUT
  GET_ALL_OPPORTUNITIES: AFFINITY_GET_ALL_OPPORTUNITIES_OUTPUT
  GET_ALL_PERSONS: AFFINITY_GET_ALL_PERSONS_OUTPUT
  GET_A_COMPANY_S_LISTS: AFFINITY_GET_A_COMPANY_S_LISTS_OUTPUT
  GET_A_COMPANY_S_LIST_ENTRIES: AFFINITY_GET_A_COMPANY_S_LIST_ENTRIES_OUTPUT
  GET_A_PERSON_S_LISTS: AFFINITY_GET_A_PERSON_S_LISTS_OUTPUT
  GET_A_PERSON_S_LIST_ENTRIES: AFFINITY_GET_A_PERSON_S_LIST_ENTRIES_OUTPUT
  GET_A_SINGLE_COMPANY: AFFINITY_GET_A_SINGLE_COMPANY_OUTPUT
  GET_A_SINGLE_OPPORTUNITY: AFFINITY_GET_A_SINGLE_OPPORTUNITY_OUTPUT
  GET_A_SINGLE_PERSON: AFFINITY_GET_A_SINGLE_PERSON_OUTPUT
  GET_CURRENT_USER: AFFINITY_GET_CURRENT_USER_OUTPUT
  GET_METADATA_ON_ALL_LISTS: AFFINITY_GET_METADATA_ON_ALL_LISTS_OUTPUT
  GET_METADATA_ON_A_SINGLE_LIST: AFFINITY_GET_METADATA_ON_A_SINGLE_LIST_OUTPUT
  GET_METADATA_ON_A_SINGLE_LIST_S_FIELDS: AFFINITY_GET_METADATA_ON_A_SINGLE_LIST_S_FIELDS_OUTPUT
  GET_METADATA_ON_A_SINGLE_SAVED_VIEW: AFFINITY_GET_METADATA_ON_A_SINGLE_SAVED_VIEW_OUTPUT
  GET_METADATA_ON_COMPANY_FIELDS: AFFINITY_GET_METADATA_ON_COMPANY_FIELDS_OUTPUT
  GET_METADATA_ON_PERSON_FIELDS: AFFINITY_GET_METADATA_ON_PERSON_FIELDS_OUTPUT
  GET_METADATA_ON_SAVED_VIEWS: AFFINITY_GET_METADATA_ON_SAVED_VIEWS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's AFFINITY toolkit.
 */
export const AFFINITY = {
  slug: "affinity",
  tools: {
    /**
     * Affinity api allows paginated access to company info and custom fields. use `fieldids` or `fieldtypes` to specify data in a request. retrieve field ids/types via get `/v2/companies/fields`. export permission needed.
     */
    GET_ALL_COMPANIES: "AFFINITY_GET_ALL_COMPANIES",
    /**
     * Access and export essential data and metadata for companies, persons, or opportunities from a list, specifying data via `fieldids` or `fieldtypes`. "export data from lists" permission is necessary.
     */
    GET_ALL_LIST_ENTRIES_ON_A_LIST: "AFFINITY_GET_ALL_LIST_ENTRIES_ON_A_LIST",
    /**
     * Use the endpoint to access rows in a saved view with specific filters and selected fields from a web app. it doesn't maintain sort order, supports only sheet-type views, and requires export permissions.
     */
    GET_ALL_LIST_ENTRIES_ON_A_SAVED_VIEW: "AFFINITY_GET_ALL_LIST_ENTRIES_ON_A_SAVED_VIEW",
    /**
     * Pagination through opportunities in affinity yields basic info but excludes field data. for field data, use specified get endpoints. "export data from lists" permission needed.
     */
    GET_ALL_OPPORTUNITIES: "AFFINITY_GET_ALL_OPPORTUNITIES",
    /**
     * The affinity api offers paginated access to person data using `fieldids` or `fieldtypes`. bulk extraction needs special permissions and supports multiple parameters.
     */
    GET_ALL_PERSONS: "AFFINITY_GET_ALL_PERSONS",
    /**
     * Returns metadata for all the lists on which the given company appears.
     */
    GET_A_COMPANY_S_LISTS: "AFFINITY_GET_A_COMPANY_S_LISTS",
    /**
     * Summarize company data across all lists, including list-specific fields and metadata like creation date and author. access requires "export data from lists" permission.
     */
    GET_A_COMPANY_S_LIST_ENTRIES: "AFFINITY_GET_A_COMPANY_S_LIST_ENTRIES",
    /**
     * Returns metadata for all the lists on which the given person appears.
     */
    GET_A_PERSON_S_LISTS: "AFFINITY_GET_A_PERSON_S_LISTS",
    /**
     * Summary: browse rows for a person in all lists, showing field data and entry metadata like creation time and author. requires "export data from lists" permission.
     */
    GET_A_PERSON_S_LIST_ENTRIES: "AFFINITY_GET_A_PERSON_S_LIST_ENTRIES",
    /**
     * Retrieve basic company info and specific field data by using `fieldids` or `fieldtypes` parameters. multiple fields can be queried. no field data if parameters aren't specified. requires "export all organizations directory" permission.
     */
    GET_A_SINGLE_COMPANY: "AFFINITY_GET_A_SINGLE_COMPANY",
    /**
     * Get basic details about an opportunity without field data via provided endpoints. field data requires using specific list entry apis and the "export data from lists" permission.
     */
    GET_A_SINGLE_OPPORTUNITY: "AFFINITY_GET_A_SINGLE_OPPORTUNITY",
    /**
     * Use get `/v2/persons/fields` with `fieldids` or `fieldtypes` for detailed data; basic info by default. request multiple fields at once. "export all people" permission needed.
     */
    GET_A_SINGLE_PERSON: "AFFINITY_GET_A_SINGLE_PERSON",
    /**
     * Returns metadata about the current user.
     */
    GET_CURRENT_USER: "AFFINITY_GET_CURRENT_USER",
    /**
     * Returns metadata on lists.
     */
    GET_METADATA_ON_ALL_LISTS: "AFFINITY_GET_METADATA_ON_ALL_LISTS",
    /**
     * Returns metadata on a single list.
     */
    GET_METADATA_ON_A_SINGLE_LIST: "AFFINITY_GET_METADATA_ON_A_SINGLE_LIST",
    /**
     * Returns metadata on the fields available on a single list. use the returned field ids to request field data from the get `/v2/lists/{listid}/list-entries` endpoint.
     */
    GET_METADATA_ON_A_SINGLE_LIST_S_FIELDS: "AFFINITY_GET_METADATA_ON_A_SINGLE_LIST_S_FIELDS",
    /**
     * Returns metadata on a single saved view.
     */
    GET_METADATA_ON_A_SINGLE_SAVED_VIEW: "AFFINITY_GET_METADATA_ON_A_SINGLE_SAVED_VIEW",
    /**
     * Returns metadata on non-list-specific company fields. use the returned field ids to request field data from the get `/v2/companies` and get `/v2/companies/{id}` endpoints.
     */
    GET_METADATA_ON_COMPANY_FIELDS: "AFFINITY_GET_METADATA_ON_COMPANY_FIELDS",
    /**
     * Returns metadata on non-list-specific person fields. use the returned field ids to request field data from the get `/v2/persons` and get `/v2/persons/{id}` endpoints.
     */
    GET_METADATA_ON_PERSON_FIELDS: "AFFINITY_GET_METADATA_ON_PERSON_FIELDS",
    /**
     * Returns metadata on the saved views on a list.
     */
    GET_METADATA_ON_SAVED_VIEWS: "AFFINITY_GET_METADATA_ON_SAVED_VIEWS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "AFFINITY".
 */
export type AFFINITY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "AFFINITY".
 */
export type AFFINITY_TRIGGER_EVENTS = {}
