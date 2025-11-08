// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FOLK's FOLK_CREATE_COMPANY tool input.
 */
type FOLK_CREATE_COMPANY_INPUT = {
  /**
   * Addresses
   * @description List of addresses associated with the company.
   * @default null
   */
  addresses: string[] | null;
  /**
   * Custom Field Values
   * @description Custom field values grouped by group ID. Values depend on field type: text, number, date, select, contact, user, etc.
   * @default null
   */
  customFieldValues: {
      [key: string]: unknown;
  } | null;
  /**
   * Description
   * @description A short description of the company.
   * @default null
   */
  description: string | null;
  /**
   * Emails
   * @description List of email addresses associated with the company.
   * @default null
   */
  emails: string[] | null;
  /**
   * Groups
   * @description The groups to add the company to. Provide group IDs.
   * @default null
   */
  groups: {
      /**
       * Id
       * @description ID of the group to add the company to.
       */
      id: string;
  }[] | null;
  /**
   * Name
   * @description The unique name of the company.
   */
  name?: string;
  /**
   * Phones
   * @description List of phone numbers associated with the company.
   * @default null
   */
  phones: string[] | null;
  /**
   * Urls
   * @description List of URLs associated with the company.
   * @default null
   */
  urls: string[] | null;
};

/**
 * Type of FOLK's FOLK_CREATE_COMPANY tool output.
 */
type FOLK_CREATE_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Created company data.
   */
  data?: {
      /**
       * Addresses
       * @description Addresses associated with the company.
       */
      addresses: string[];
      /**
       * Custom Field Values
       * @description Custom field values for the company grouped by group ID.
       */
      customFieldValues: {
          [key: string]: unknown;
      };
      /**
       * Description
       * @description Description of the created company.
       * @default null
       */
      description: string | null;
      /**
       * Emails
       * @description Email addresses associated with the company.
       */
      emails: string[];
      /**
       * Groups
       * @description Groups the company belongs to (ID reference).
       */
      groups: {
          /**
           * Id
           * @description ID of the group to add the company to.
           */
          id: string;
      }[];
      /**
       * Id
       * @description ID of the created company.
       */
      id: string;
      /**
       * Name
       * @description Name of the created company.
       */
      name: string;
      /**
       * Phones
       * @description Phone numbers associated with the company.
       */
      phones: string[];
      /**
       * Urls
       * @description URLs associated with the company.
       */
      urls: string[];
  };
  /**
   * Deprecations
   * @description Any deprecation notices returned by the API.
   * @default null
   */
  deprecations: string[] | null;
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
 * Type of FOLK's FOLK_DELETE_COMPANY tool input.
 */
type FOLK_DELETE_COMPANY_INPUT = {
  /**
   * Company Id
   * @description The ID of the company to delete. Must be exactly 40 characters.
   */
  company_id?: string;
};

/**
 * Type of FOLK's FOLK_DELETE_COMPANY tool output.
 */
type FOLK_DELETE_COMPANY_OUTPUT = {
  /**
   * Data
   * @description The deleted company data.
   */
  data?: {
      /**
       * Id
       * @description ID of the deleted company.
       */
      id: string;
  };
  /**
   * Deprecations
   * @description Any deprecation notices returned by the API.
   * @default null
   */
  deprecations: string[] | null;
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
 * Type of FOLK's FOLK_FOLK_DELETE_PERSON tool input.
 */
type FOLK_FOLK_DELETE_PERSON_INPUT = {
  /**
   * Person Id
   * @description The ID of the person to delete. Must be exactly 40 characters.
   */
  person_id?: string;
};

/**
 * Type of FOLK's FOLK_FOLK_DELETE_PERSON tool output.
 */
type FOLK_FOLK_DELETE_PERSON_OUTPUT = {
  /**
   * Data
   * @description The deleted person data.
   */
  data?: {
      /**
       * Id
       * @description The ID of the deleted person.
       */
      id: string;
  };
  /**
   * Deprecations
   * @description Any deprecation notices returned by the API.
   * @default null
   */
  deprecations: string[] | null;
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
 * Type of FOLK's FOLK_FOLK_LIST_COMPANIES tool input.
 */
type FOLK_FOLK_LIST_COMPANIES_INPUT = {
  /**
   * Combinator
   * @description Logical operator to combine multiple filters.
   * @default and
   * @enum {string}
   */
  combinator: "and" | "or";
  /**
   * Cursor
   * @description A pagination cursor from a previous response's `pagination.nextLink`. Omit on the first call.
   * @default null
   */
  cursor: string | null;
  /**
   * Filter
   * @description Filters to apply, using `filter[attribute][operator]=value` syntax.
   * @default null
   */
  filter: {
      [key: string]: {
          [key: string]: unknown;
      };
  } | null;
  /**
   * Limit
   * @description The number of items to return. Must be between 1 and 100.
   * @default 20
   */
  limit: number;
};

/**
 * Type of FOLK's FOLK_FOLK_LIST_COMPANIES tool output.
 */
type FOLK_FOLK_LIST_COMPANIES_OUTPUT = {
  /**
   * Data
   * @description Response data with items and pagination.
   */
  data?: {
      /**
       * Items
       * @description List of retrieved companies.
       */
      items: {
          /**
           * Addresses
           * @description Postal addresses for the company.
           */
          addresses: string[];
          /**
           * Custom Field Values
           * @description Custom field values keyed by group ID; values may be primitives or nested objects.
           */
          customFieldValues: {
              [key: string]: unknown;
          };
          /**
           * Description
           * @description Textual description of the company.
           * @default null
           */
          description: string | null;
          /**
           * Emails
           * @description Email addresses for the company.
           */
          emails: string[];
          /**
           * Groups
           * @description Groups this company belongs to.
           */
          groups: {
              /**
               * Id
               * @description Unique identifier of the group.
               */
              id: string;
              /**
               * Name
               * @description Name of the group.
               */
              name: string;
          }[];
          /**
           * Id
           * @description Unique company identifier.
           */
          id: string;
          /**
           * Name
           * @description Company name.
           */
          name: string;
          /**
           * Phones
           * @description Phone numbers for the company.
           */
          phones: string[];
          /**
           * Urls
           * @description URLs associated with the company.
           */
          urls: string[];
      }[];
      /**
       * Pagination
       * @description Pagination metadata.
       */
      pagination: {
          /**
           * Next Link
           * @description URL to fetch the next page of results. Omit if no further pages.
           * @default null
           */
          nextLink: string | null;
      };
  };
  /**
   * Deprecations
   * @description List of deprecation warnings, if any.
   * @default null
   */
  deprecations: string[] | null;
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
 * Type of FOLK's FOLK_GET_COMPANY tool input.
 */
type FOLK_GET_COMPANY_INPUT = {
  /**
   * Company Id
   * @description The ID of the company to retrieve. Must be exactly 40 characters long.
   */
  company_id?: string;
};

/**
 * Type of FOLK's FOLK_GET_COMPANY tool output.
 */
type FOLK_GET_COMPANY_OUTPUT = {
  /**
   * Data
   * @description The retrieved company object.
   */
  data?: {
      /**
       * Addresses
       * @description Addresses of the company.
       */
      addresses: string[];
      /**
       * Custom Field Values
       * @description Custom field values keyed by custom-field group ID. Each entry’s structure varies by group configuration.
       */
      customFieldValues: {
          [key: string]: unknown;
      };
      /**
       * Description
       * @description Description of the company.
       * @default null
       */
      description: string | null;
      /**
       * Emails
       * @description Email addresses of the company.
       */
      emails: string[];
      /**
       * Groups
       * @description Groups associated with the company.
       */
      groups: {
          /**
           * Id
           * @description Group ID.
           */
          id: string;
          /**
           * Name
           * @description Group name.
           */
          name: string;
      }[];
      /**
       * Id
       * @description Unique ID of the company.
       */
      id: string;
      /**
       * Name
       * @description Name of the company.
       */
      name: string;
      /**
       * Phones
       * @description Phone numbers of the company.
       */
      phones: string[];
      /**
       * Urls
       * @description Websites of the company.
       */
      urls: string[];
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
 * Type of FOLK's FOLK_GET_CURRENT_WORKSPACE_USER tool input.
 */
type FOLK_GET_CURRENT_WORKSPACE_USER_INPUT = object;

/**
 * Type of FOLK's FOLK_GET_CURRENT_WORKSPACE_USER tool output.
 */
type FOLK_GET_CURRENT_WORKSPACE_USER_OUTPUT = {
  /**
   * Data
   * @description The current workspace user's details
   */
  data?: {
      /**
       * Email
       * @description Email address of the current workspace user
       */
      email: string;
      /**
       * Full Name
       * @description Full name of the current workspace user
       */
      fullName: string;
      /**
       * Id
       * @description Unique identifier of the current workspace user
       */
      id: string;
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
 * Type of FOLK's FOLK_GET_PERSON tool input.
 */
type FOLK_GET_PERSON_INPUT = {
  /**
   * Person Id
   * @description The unique identifier of the person to retrieve
   */
  person_id?: string;
};

/**
 * Type of FOLK's FOLK_GET_PERSON tool output.
 */
type FOLK_GET_PERSON_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Addresses
       * @description A list of the person's addresses
       */
      addresses?: {
          [key: string]: unknown;
      }[];
      /**
       * Birthday
       * @description The person's birthday as an ISO8601 date string, or null if not set
       * @default null
       */
      birthday: string | null;
      /**
       * Companies
       * @description A list of companies associated with the person
       */
      companies?: {
          [key: string]: unknown;
      }[];
      /**
       * Custom Field Values
       * @description An object containing custom field values grouped by field IDs
       */
      customFieldValues?: {
          [key: string]: unknown;
      };
      /**
       * Description
       * @description A description of the person
       */
      description: string;
      /**
       * Emails
       * @description A list of the person's email addresses
       */
      emails?: {
          [key: string]: unknown;
      }[];
      /**
       * First Name
       * @description The person's first name
       */
      firstName: string;
      /**
       * Full Name
       * @description The person's full name
       */
      fullName: string;
      /**
       * Groups
       * @description A list of groups the person belongs to
       */
      groups: {
          /**
           * Id
           * @description The group's unique identifier
           */
          id: string;
          /**
           * Name
           * @description The group's name
           */
          name: string;
      }[];
      /**
       * Id
       * @description The unique identifier of the person
       */
      id: string;
      /**
       * Job Title
       * @description The person's job title
       */
      jobTitle: string;
      /**
       * Last Name
       * @description The person's last name
       */
      lastName: string;
      /**
       * Phones
       * @description A list of the person's phone numbers
       */
      phones?: {
          [key: string]: unknown;
      }[];
      /**
       * Urls
       * @description A list of URLs associated with the person
       */
      urls?: {
          [key: string]: unknown;
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
 * Type of FOLK's FOLK_LIST_GROUPS tool input.
 */
type FOLK_LIST_GROUPS_INPUT = {
  /**
   * Cursor
   * @description Cursor for pagination across multiple pages. Omit on first call. Use the `pagination.nextLink` value from a previous response for subsequent pages.
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description The number of items to return. Must be between 1 and 100.
   * @default 20
   */
  limit: number | null;
};

/**
 * Type of FOLK's FOLK_LIST_GROUPS tool output.
 */
type FOLK_LIST_GROUPS_OUTPUT = {
  /**
   * Data
   * @description Envelope containing items and pagination.
   */
  data?: {
      /**
       * Items
       * @description List of group objects.
       */
      items: {
          /**
           * Id
           * @description Unique identifier of the group.
           */
          id: string;
          /**
           * Name
           * @description Name of the group.
           */
          name: string;
      }[];
      /**
       * Pagination
       * @description Pagination information for list endpoints.
       * @default null
       */
      pagination: {
          /**
           * Next Link
           * @description URL to the next page of results, if available.
           * @default null
           */
          nextLink: string | null;
      } | null;
  };
  /**
   * Deprecations
   * @description Array of deprecation warnings, if any.
   * @default null
   */
  deprecations: string[] | null;
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
 * Type of FOLK's FOLK_LIST_GROUP_CUSTOM_FIELDS tool input.
 */
type FOLK_LIST_GROUP_CUSTOM_FIELDS_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor. Omit on first call; use `data.pagination.nextLink` from previous response for subsequent pages.
   * @default null
   */
  cursor: string | null;
  /**
   * Entity Type
   * @description Entity type whose custom fields to list. Must be 'person' or 'company'.
   * @enum {string}
   */
  entity_type?: "person" | "company";
  /**
   * Group Id
   * @description ID of the group (exactly 40 characters). Obtain via the list-groups endpoint.
   */
  group_id?: string;
  /**
   * Limit
   * @description Number of items to return (1-100). Defaults to 20.
   * @default 20
   */
  limit: number | null;
};

/**
 * Type of FOLK's FOLK_LIST_GROUP_CUSTOM_FIELDS tool output.
 */
type FOLK_LIST_GROUP_CUSTOM_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Response data container with items and pagination.
   */
  data?: {
      /**
       * Items
       * @description List of custom fields for the group and entity type.
       */
      items: {
          /**
           * NumericFieldConfig
           * @description Numeric formatting details for numericField type.
           * @default null
           */
          config: {
              /**
               * Currency
               * @description Currency code (e.g., 'USD') when format is 'currency'.
               * @default null
               */
              currency: string | null;
              /**
               * Format
               * @description Display format for numeric fields (e.g., 'currency').
               */
              format: string;
          } | null;
          /**
           * Name
           * @description Name of the custom field.
           */
          name: string;
          /**
           * Options
           * @description Available choices for select-type fields, if applicable.
           * @default null
           */
          options: {
              /**
               * Color
               * @description Hex color code associated with the option.
               */
              color: string;
              /**
               * Label
               * @description Display label of the option.
               */
              label: string;
          }[] | null;
          /**
           * Type
           * @description Type of the custom field.
           * @enum {string}
           */
          type: "singleSelect" | "multipleSelect" | "numericField" | "textField" | "contactField" | "dateField" | "userField" | "objectField" | "magicField";
      }[];
      /**
       * Pagination
       * @description Pagination metadata.
       */
      pagination: {
          /**
           * Next Link
           * @description URL to retrieve the next page of results, if any.
           * @default null
           */
          nextLink: string | null;
      };
  };
  /**
   * Deprecations
   * @description Deprecation warnings, if any.
   * @default null
   */
  deprecations: string[] | null;
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
 * Type of FOLK's FOLK_LIST_PEOPLE tool input.
 */
type FOLK_LIST_PEOPLE_INPUT = {
  /**
   * Combinator
   * @description Logical operator to combine multiple filters.
   * @default and
   * @enum {string}
   */
  combinator: "and" | "or";
  /**
   * Cursor
   * @description A pagination cursor from a previous response's `pagination.nextLink`. Omit on the first call.
   * @default null
   */
  cursor: string | null;
  /**
   * Filter
   * @description Filters to apply, following `filter[attribute][operator]=value` format. E.g., {'firstName': {'eq': 'John'}}.
   * @default null
   */
  filter: {
      [key: string]: {
          [key: string]: unknown;
      };
  } | null;
  /**
   * Limit
   * @description The number of items to return. Must be between 1 and 100.
   * @default 20
   */
  limit: number | null;
};

/**
 * Type of FOLK's FOLK_LIST_PEOPLE tool output.
 */
type FOLK_LIST_PEOPLE_OUTPUT = {
  /**
   * Data
   * @description Paginated list of people
   */
  data?: {
      /**
       * Items
       * @description List of people returned
       */
      items: {
          /**
           * Addresses
           * @description List of addresses for the person
           */
          addresses: string[];
          /**
           * Birthday
           * @description Birthday in YYYY-MM-DD format
           * @default null
           */
          birthday: string | null;
          /**
           * Companies
           * @description Companies associated with the person
           */
          companies: {
              /**
               * Id
               * @description Company ID for the person
               */
              id: string;
              /**
               * Name
               * @description Company name for the person
               */
              name: string;
          }[];
          /**
           * Custom Field Values
           * @description Custom field values keyed by group ID
           */
          customFieldValues: {
              [key: string]: unknown;
          };
          /**
           * Description
           * @description Textual description of the person
           * @default null
           */
          description: string | null;
          /**
           * Emails
           * @description Emails for the person
           */
          emails: string[];
          /**
           * First Name
           * @description Person's first name
           * @default null
           */
          firstName: string | null;
          /**
           * Full Name
           * @description Person's full name
           * @default null
           */
          fullName: string | null;
          /**
           * Groups
           * @description Groups the person belongs to
           */
          groups: {
              /**
               * Id
               * @description Group ID for the person
               */
              id: string;
              /**
               * Name
               * @description Group name for the person
               */
              name: string;
          }[];
          /**
           * Id
           * @description Unique identifier of the person
           */
          id: string;
          /**
           * Job Title
           * @description Current job title
           * @default null
           */
          jobTitle: string | null;
          /**
           * Last Name
           * @description Person's last name
           * @default null
           */
          lastName: string | null;
          /**
           * Phones
           * @description Phone numbers for the person
           */
          phones: string[];
          /**
           * Urls
           * @description URLs associated with the person
           */
          urls: string[];
      }[];
      /**
       * Pagination
       * @description Pagination metadata
       */
      pagination: {
          /**
           * Next Link
           * @description Link to retrieve the next page of results
           * @default null
           */
          nextLink: string | null;
      };
  };
  /**
   * Deprecations
   * @description Deprecation warnings returned by the API
   * @default null
   */
  deprecations: string[] | null;
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
 * Type of FOLK's FOLK_LIST_USERS tool input.
 */
type FOLK_LIST_USERS_INPUT = {
  /**
   * Cursor
   * @description A pagination cursor from previous response's `nextLink`. Omit on first call.
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Number of users to return. Must be between 1 and 100.
   * @default 20
   */
  limit: number | null;
};

/**
 * Type of FOLK's FOLK_LIST_USERS tool output.
 */
type FOLK_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description Envelope containing users and pagination.
   */
  data?: {
      /**
       * Items
       * @description List of user objects.
       */
      items: {
          /**
           * Email
           * @description Email address of the user.
           */
          email: string;
          /**
           * Full Name
           * @description Full name of the user.
           */
          fullName: string;
          /**
           * Id
           * @description Unique identifier for the user.
           */
          id: string;
      }[];
      /**
       * Pagination
       * @description Pagination information.
       */
      pagination: {
          /**
           * Next Link
           * @description URL for the next page of results.
           * @default null
           */
          nextLink: string | null;
      };
  };
  /**
   * Deprecations
   * @description Deprecation warnings, if any.
   * @default null
   */
  deprecations: string[] | null;
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
 * Type of FOLK's FOLK_UPDATE_COMPANY tool input.
 */
type FOLK_UPDATE_COMPANY_INPUT = {
  /**
   * Addresses
   * @description List of addresses associated with the company; replaces existing addresses.
   * @default null
   */
  addresses: string[] | null;
  /**
   * Company Id
   * @description The ID of the company to update. Must be exactly 40 characters long.
   */
  company_id?: string;
  /**
   * Custom Field Values
   * @description Custom field values grouped by group ID. Values depend on field type: text, number, date, select, contact, user, etc.
   * @default null
   */
  customFieldValues: {
      [key: string]: unknown;
  } | null;
  /**
   * Description
   * @description A short description of the company.
   * @default null
   */
  description: string | null;
  /**
   * Emails
   * @description List of email addresses associated with the company; replaces existing emails.
   * @default null
   */
  emails: string[] | null;
  /**
   * Groups
   * @description Groups to associate with the company; list values replace existing groups.
   * @default null
   */
  groups: {
      /**
       * Id
       * @description ID of the group to add the company to.
       */
      id: string;
  }[] | null;
  /**
   * Name
   * @description The name of the company.
   * @default null
   */
  name: string | null;
  /**
   * Phones
   * @description List of phone numbers associated with the company; replaces existing phones.
   * @default null
   */
  phones: string[] | null;
  /**
   * Urls
   * @description List of URLs associated with the company; replaces existing URLs.
   * @default null
   */
  urls: string[] | null;
};

/**
 * Type of FOLK's FOLK_UPDATE_COMPANY tool output.
 */
type FOLK_UPDATE_COMPANY_OUTPUT = {
  /**
   * Data
   * @description The updated company object.
   */
  data?: {
      /**
       * Addresses
       * @description Addresses associated with the company.
       */
      addresses: string[];
      /**
       * Custom Field Values
       * @description Custom field values keyed by group ID.
       */
      customFieldValues: {
          [key: string]: unknown;
      };
      /**
       * Description
       * @description Description of the company.
       * @default null
       */
      description: string | null;
      /**
       * Emails
       * @description Email addresses associated with the company.
       */
      emails: string[];
      /**
       * Groups
       * @description Groups associated with the company.
       */
      groups: {
          /**
           * Id
           * @description Group ID.
           */
          id: string;
          /**
           * Name
           * @description Group name.
           */
          name: string;
      }[];
      /**
       * Id
       * @description Unique ID of the company.
       */
      id: string;
      /**
       * Name
       * @description Name of the company.
       */
      name: string;
      /**
       * Phones
       * @description Phone numbers associated with the company.
       */
      phones: string[];
      /**
       * Urls
       * @description URLs associated with the company.
       */
      urls: string[];
  };
  /**
   * Deprecations
   * @description Any deprecation notices returned by the API.
   * @default null
   */
  deprecations: string[] | null;
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
 * Type map of all available tool input types for toolkit "FOLK".
 */
export type FOLK_TOOL_INPUTS = {
  CREATE_COMPANY: FOLK_CREATE_COMPANY_INPUT
  DELETE_COMPANY: FOLK_DELETE_COMPANY_INPUT
  FOLK_DELETE_PERSON: FOLK_FOLK_DELETE_PERSON_INPUT
  FOLK_LIST_COMPANIES: FOLK_FOLK_LIST_COMPANIES_INPUT
  GET_COMPANY: FOLK_GET_COMPANY_INPUT
  GET_CURRENT_WORKSPACE_USER: FOLK_GET_CURRENT_WORKSPACE_USER_INPUT
  GET_PERSON: FOLK_GET_PERSON_INPUT
  LIST_GROUPS: FOLK_LIST_GROUPS_INPUT
  LIST_GROUP_CUSTOM_FIELDS: FOLK_LIST_GROUP_CUSTOM_FIELDS_INPUT
  LIST_PEOPLE: FOLK_LIST_PEOPLE_INPUT
  LIST_USERS: FOLK_LIST_USERS_INPUT
  UPDATE_COMPANY: FOLK_UPDATE_COMPANY_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FOLK".
 */
export type FOLK_TOOL_OUTPUTS = {
  CREATE_COMPANY: FOLK_CREATE_COMPANY_OUTPUT
  DELETE_COMPANY: FOLK_DELETE_COMPANY_OUTPUT
  FOLK_DELETE_PERSON: FOLK_FOLK_DELETE_PERSON_OUTPUT
  FOLK_LIST_COMPANIES: FOLK_FOLK_LIST_COMPANIES_OUTPUT
  GET_COMPANY: FOLK_GET_COMPANY_OUTPUT
  GET_CURRENT_WORKSPACE_USER: FOLK_GET_CURRENT_WORKSPACE_USER_OUTPUT
  GET_PERSON: FOLK_GET_PERSON_OUTPUT
  LIST_GROUPS: FOLK_LIST_GROUPS_OUTPUT
  LIST_GROUP_CUSTOM_FIELDS: FOLK_LIST_GROUP_CUSTOM_FIELDS_OUTPUT
  LIST_PEOPLE: FOLK_LIST_PEOPLE_OUTPUT
  LIST_USERS: FOLK_LIST_USERS_OUTPUT
  UPDATE_COMPANY: FOLK_UPDATE_COMPANY_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FOLK toolkit.
 */
export const FOLK = {
  slug: "folk",
  tools: {
    /**
     * Tool to create a new company in the workspace. use after gathering all required company details and ensuring the name is unique.
     */
    CREATE_COMPANY: "FOLK_CREATE_COMPANY",
    /**
     * Tool to delete a company from the workspace (irreversible). use after confirming this company should be removed.
     */
    DELETE_COMPANY: "FOLK_DELETE_COMPANY",
    /**
     * Tool to delete an existing person in the workspace (irreversible). use after confirming this person should be permanently removed.
     */
    FOLK_DELETE_PERSON: "FOLK_FOLK_DELETE_PERSON",
    /**
     * Tool to list companies in the workspace. use when you need a paginated overview of companies, optionally filtered.
     */
    FOLK_LIST_COMPANIES: "FOLK_FOLK_LIST_COMPANIES",
    /**
     * Tool to retrieve an existing company by its id. use after authentication has been verified.
     */
    GET_COMPANY: "FOLK_GET_COMPANY",
    /**
     * Tool to get details of the current authenticated workspace user. use after authentication to retrieve the user's profile information.
     */
    GET_CURRENT_WORKSPACE_USER: "FOLK_GET_CURRENT_WORKSPACE_USER",
    /**
     * Tool to retrieve an existing person by their id. use when you need full profile details of a person by their unique identifier.
     */
    GET_PERSON: "FOLK_GET_PERSON",
    /**
     * Tool to list workspace groups. use when you need to retrieve a paginated list of all workspace groups after authentication.
     */
    LIST_GROUPS: "FOLK_LIST_GROUPS",
    /**
     * Tool to list custom fields for a specific group and entity type. use after selecting a group and entity type to inspect available custom fields.
     */
    LIST_GROUP_CUSTOM_FIELDS: "FOLK_LIST_GROUP_CUSTOM_FIELDS",
    /**
     * Tool to list people in the workspace. use when you need to paginate through contacts after authentication.
     */
    LIST_PEOPLE: "FOLK_LIST_PEOPLE",
    /**
     * Tool to list workspace users. use when you need to paginate through users list.
     */
    LIST_USERS: "FOLK_LIST_USERS",
    /**
     * Tool to update an existing company in the workspace. use after confirming the company id; only provided fields are updated and list fields replace existing values.
     */
    UPDATE_COMPANY: "FOLK_UPDATE_COMPANY",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FOLK".
 */
export type FOLK_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FOLK".
 */
export type FOLK_TRIGGER_EVENTS = {}
