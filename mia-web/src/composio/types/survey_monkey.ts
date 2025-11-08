// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SURVEY_MONKEY's SURVEY_MONKEY_CREATE_SURVEY tool input.
 */
type SURVEY_MONKEY_CREATE_SURVEY_INPUT = {
  /**
   * Footer
   * @description Whether to display SurveyMonkey's footer in the survey.
   * @default true
   */
  footer: boolean | null;
  /**
   * Language
   * @description Survey language code (e.g., 'en').
   * @default en
   */
  language: string | null;
  /**
   * Nickname
   * @description Optional nickname for the survey.
   * @default null
   */
  nickname: string | null;
  /**
   * Title
   * @description Title of the new survey.
   */
  title?: string;
};

/**
 * Type of SURVEY_MONKEY's SURVEY_MONKEY_CREATE_SURVEY tool output.
 */
type SURVEY_MONKEY_CREATE_SURVEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Survey Id
       * @description The unique identifier of the created survey.
       */
      survey_id: string;
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
 * Type of SURVEY_MONKEY's SURVEY_MONKEY_DELETE_SURVEY tool input.
 */
type SURVEY_MONKEY_DELETE_SURVEY_INPUT = {
  /**
   * Survey Id
   * @description The unique identifier of the survey to be deleted.
   */
  survey_id?: string;
};

/**
 * Type of SURVEY_MONKEY's SURVEY_MONKEY_DELETE_SURVEY tool output.
 */
type SURVEY_MONKEY_DELETE_SURVEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the survey was deleted successfully.
       */
      success: boolean;
      /**
       * Survey Id
       * @description The survey ID that was deleted.
       */
      survey_id: string;
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
 * Type of SURVEY_MONKEY's SURVEY_MONKEY_GET_COLLECTORS tool input.
 */
type SURVEY_MONKEY_GET_COLLECTORS_INPUT = {
  /**
   * End Date
   * @description Filter collectors created before this datetime (YYYY-MM-DDTHH:MM:SS)
   * @default null
   */
  end_date: string | null;
  /**
   * Include
   * @description Additional fields to include per collector
   * @default null
   */
  include: string[] | null;
  /**
   * Name
   * @description Partial match filter on collector name
   * @default null
   */
  name: string | null;
  /**
   * Page
   * @description Page number to return (default=1)
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Resources per page (default=50)
   * @default 50
   */
  per_page: number | null;
  /**
   * Sort By
   * @enum {string|null}
   */
  sort_by?: "id" | "date_modified" | "type" | "status" | "name" | null;
  /**
   * Sort Order
   * @enum {string|null}
   */
  sort_order?: "ASC" | "DESC" | null;
  /**
   * Start Date
   * @description Filter collectors created after this datetime (YYYY-MM-DDTHH:MM:SS)
   * @default null
   */
  start_date: string | null;
  /**
   * Survey Id
   * @description Survey ID to retrieve collectors for
   */
  survey_id?: string;
};

/**
 * Type of SURVEY_MONKEY's SURVEY_MONKEY_GET_COLLECTORS tool output.
 */
type SURVEY_MONKEY_GET_COLLECTORS_OUTPUT = {
  /** Data */
  data?: {
      /**
       * Date Created
       * @description Datetime when collector was created
       * @default null
       */
      date_created: string | null;
      /**
       * Date Modified
       * @description Datetime when collector was last modified
       * @default null
       */
      date_modified: string | null;
      /**
       * Href
       * @description API URL for the collector
       */
      href: string;
      /**
       * Id
       * @description Collector ID
       */
      id: string;
      /**
       * Name
       * @description Collector name
       */
      name: string;
      /**
       * Response Count
       * @description Number of responses collected
       * @default null
       */
      response_count: number | null;
      /**
       * Status
       * @description Collector status, e.g., open, closed
       * @default null
       */
      status: string | null;
      /**
       * Type
       * @description Collector type, e.g., weblink, email
       * @default null
       */
      type: string | null;
      /**
       * Url
       * @description Public collector URL if applicable
       * @default null
       */
      url: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /** Page */
  page?: number;
  /** Per Page */
  per_page?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /** Total */
  total?: number;
};

/**
 * Type of SURVEY_MONKEY's SURVEY_MONKEY_GET_CONTACTS tool input.
 */
type SURVEY_MONKEY_GET_CONTACTS_INPUT = object;

/**
 * Type of SURVEY_MONKEY's SURVEY_MONKEY_GET_CONTACTS tool output.
 */
type SURVEY_MONKEY_GET_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description List of contacts
   */
  data?: {
      /**
       * Email
       * @description Contact's email address
       */
      email: string;
      /**
       * First Name
       * @description Contact's first name
       * @default null
       */
      first_name: string | null;
      /**
       * Href
       * @description API URL for this contact
       */
      href: string;
      /**
       * Id
       * @description Contact ID
       */
      id: string;
      /**
       * Last Name
       * @description Contact's last name
       * @default null
       */
      last_name: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination links
   */
  links?: {
      /**
       * Next
       * @description URL to retrieve next page of results
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL to retrieve previous page of results
       * @default null
       */
      prev: string | null;
      /**
       * Self
       * @description URL to retrieve current page of results
       * @default null
       */
      self: string | null;
  };
  /**
   * Page
   * @description Current page number
   */
  page?: number;
  /**
   * Per Page
   * @description Number of items per page
   */
  per_page?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of contacts
   */
  total?: number;
};

/**
 * Type of SURVEY_MONKEY's SURVEY_MONKEY_GET_GROUPS tool input.
 */
type SURVEY_MONKEY_GET_GROUPS_INPUT = {
  /**
   * Include
   * @description Comma-separated list of additional fields to include in each group object, e.g., 'member_count'.
   * @default null
   */
  include: string | null;
  /**
   * Page
   * @description Page number to retrieve (1-based index).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of groups to return per page.
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of SURVEY_MONKEY's SURVEY_MONKEY_GET_GROUPS tool output.
 */
type SURVEY_MONKEY_GET_GROUPS_OUTPUT = {
  /**
   * Data
   * @description List of group objects returned by the API.
   */
  data?: {
      /**
       * Id
       * @description Unique identifier for the group.
       */
      id: string;
      /**
       * Member Count
       * @description Number of members in the group (present if requested).
       * @default null
       */
      member_count: number | null;
      /**
       * Name
       * @description Name of the group.
       */
      name: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination links: self, next, prev, first, last.
   */
  links?: {
      [key: string]: string;
  };
  /**
   * Page
   * @description Current page number in the result set.
   */
  page?: number;
  /**
   * Per Page
   * @description Number of groups returned per page.
   */
  per_page?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of groups available.
   */
  total?: number;
};

/**
 * Type of SURVEY_MONKEY's SURVEY_MONKEY_GET_RESPONSES tool input.
 */
type SURVEY_MONKEY_GET_RESPONSES_INPUT = {
  /**
   * Custom
   * @description Filter responses by custom value associated with the response
   * @default null
   */
  custom: string | null;
  /**
   * Custom Variables
   * @description Filter responses by custom variables as key:value pairs
   * @default null
   */
  custom_variables: string | null;
  /**
   * Email
   * @description Filter responses by recipient's email
   * @default null
   */
  email: string | null;
  /**
   * End Created At
   * @description Filter responses created before this datetime (ISO 8601)
   * @default null
   */
  end_created_at: string | null;
  /**
   * End Modified At
   * @description Filter responses modified before this datetime (ISO 8601)
   * @default null
   */
  end_modified_at: string | null;
  /**
   * First Name
   * @description Filter responses by recipient's first name
   * @default null
   */
  first_name: string | null;
  /**
   * Ip
   * @description Filter responses by IP address
   * @default null
   */
  ip: string | null;
  /**
   * Last Name
   * @description Filter responses by recipient's last name
   * @default null
   */
  last_name: string | null;
  /**
   * Page
   * @description Page number to return (default=1)
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of responses per page (default=50)
   * @default 50
   */
  per_page: number | null;
  /**
   * Sort By
   * @description Field to sort by
   * @default null
   * @constant
   */
  sort_by: "date_modified";
  /**
   * Sort Order
   * @description Sort order
   * @default null
   * @enum {string|null}
   */
  sort_order: "ASC" | "DESC" | null;
  /**
   * Start Created At
   * @description Filter responses created after this datetime (ISO 8601)
   * @default null
   */
  start_created_at: string | null;
  /**
   * Start Modified At
   * @description Filter responses modified after this datetime (ISO 8601)
   * @default null
   */
  start_modified_at: string | null;
  /**
   * Status
   * @description Filter responses by status
   * @default null
   * @enum {string|null}
   */
  status: "completed" | "partial" | "overquota" | "disqualified" | null;
  /**
   * Survey Id
   * @description The unique identifier of the survey.
   */
  survey_id?: string;
  /**
   * Total Time Max
   * @description Filter responses with total time less than or equal to this value (in seconds)
   * @default null
   */
  total_time_max: number | null;
  /**
   * Total Time Min
   * @description Filter responses with total time greater than or equal to this value (in seconds)
   * @default null
   */
  total_time_min: number | null;
  /**
   * Total Time Units
   * @description Unit for total_time_min and total_time_max
   * @default null
   * @enum {string|null}
   */
  total_time_units: "second" | "minute" | "hour" | null;
};

/**
 * Type of SURVEY_MONKEY's SURVEY_MONKEY_GET_RESPONSES tool output.
 */
type SURVEY_MONKEY_GET_RESPONSES_OUTPUT = {
  /**
   * Data
   * @description List of response summary objects
   */
  data?: {
      /**
       * Href
       * @description API URL for the response
       */
      href: string;
      /**
       * Id
       * @description Response ID
       */
      id: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination links: self, next, prev, first, last
   */
  links?: {
      [key: string]: string;
  };
  /**
   * Page
   * @description Current page number
   */
  page?: number;
  /**
   * Per Page
   * @description Number of responses per page
   */
  per_page?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of responses
   */
  total?: number;
};

/**
 * Type of SURVEY_MONKEY's SURVEY_MONKEY_GET_SURVEYS tool input.
 */
type SURVEY_MONKEY_GET_SURVEYS_INPUT = {
  /**
   * Include
   * @description Additional fields to include per survey
   * @default null
   */
  include: string[] | null;
  /**
   * Page
   * @description Page of resources to return (1-based index)
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of resources to return per page (max=100)
   * @default 50
   */
  per_page: number | null;
};

/**
 * Type of SURVEY_MONKEY's SURVEY_MONKEY_GET_SURVEYS tool output.
 */
type SURVEY_MONKEY_GET_SURVEYS_OUTPUT = {
  /**
   * Data
   * @description List of survey summary objects
   */
  data?: {
      /**
       * Category
       * @description Survey category
       * @default null
       */
      category: string | null;
      /**
       * Date Created
       * @description Datetime when the survey was created
       * @default null
       */
      date_created: string | null;
      /**
       * Date Modified
       * @description Datetime when the survey was last modified
       * @default null
       */
      date_modified: string | null;
      /**
       * Folder Id
       * @description ID of the folder containing the survey
       * @default null
       */
      folder_id: string | null;
      /**
       * Href
       * @description API URL for the survey
       */
      href: string;
      /**
       * Id
       * @description Survey ID
       */
      id: string;
      /**
       * Language
       * @description Survey language code
       * @default null
       */
      language: string | null;
      /**
       * Nickname
       * @description Survey nickname
       * @default null
       */
      nickname: string | null;
      /**
       * Page Count
       * @description Number of pages in the survey
       * @default null
       */
      page_count: number | null;
      /**
       * Question Count
       * @description Number of questions in the survey
       * @default null
       */
      question_count: number | null;
      /**
       * Response Count
       * @description Number of responses
       * @default null
       */
      response_count: number | null;
      /**
       * Title
       * @description Survey title
       */
      title: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination links: self, next, prev, first, last
   */
  links?: {
      [key: string]: string;
  };
  /**
   * Page
   * @description Current page number
   */
  page?: number;
  /**
   * Per Page
   * @description Number of surveys returned per page
   */
  per_page?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of surveys
   */
  total?: number;
};

/**
 * Type of SURVEY_MONKEY's SURVEY_MONKEY_GET_SURVEY_DETAILS tool input.
 */
type SURVEY_MONKEY_GET_SURVEY_DETAILS_INPUT = {
  /**
   * Survey Id
   * @description The unique identifier of the survey to fetch details for.
   */
  survey_id?: string;
};

/**
 * Type of SURVEY_MONKEY's SURVEY_MONKEY_GET_SURVEY_DETAILS tool output.
 */
type SURVEY_MONKEY_GET_SURVEY_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Date Created
       * @description ISO-8601 timestamp when the survey was created
       */
      date_created: string;
      /**
       * Date Modified
       * @description ISO-8601 timestamp when the survey was last modified
       */
      date_modified: string;
      /**
       * Footer
       * @description Footer settings for the survey
       * @default null
       */
      footer: {
          /**
           * Position
           * @description Position of the footer in the survey
           */
          position: string;
          /**
           * Text
           * @description Footer text for the survey
           */
          text: string;
      } | null;
      /**
       * Id
       * @description Survey ID
       */
      id: string;
      /**
       * Language
       * @description Language code of the survey, e.g., 'en'
       */
      language: string;
      /**
       * Nickname
       * @description Nickname of the survey
       * @default null
       */
      nickname: string | null;
      /**
       * Page Count
       * @description Number of pages in the survey
       */
      page_count: number;
      /**
       * Preview
       * @description URL to preview the survey
       * @default null
       */
      preview: string | null;
      /**
       * Question Count
       * @description Number of questions in the survey
       */
      question_count: number;
      /**
       * Redirect Url
       * @description URL redirect after survey completion
       * @default null
       */
      redirect_url: string | null;
      /**
       * Title
       * @description Title of the survey
       */
      title: string;
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
 * Type map of all available tool input types for toolkit "SURVEY_MONKEY".
 */
export type SURVEY_MONKEY_TOOL_INPUTS = {
  CREATE_SURVEY: SURVEY_MONKEY_CREATE_SURVEY_INPUT
  DELETE_SURVEY: SURVEY_MONKEY_DELETE_SURVEY_INPUT
  GET_COLLECTORS: SURVEY_MONKEY_GET_COLLECTORS_INPUT
  GET_CONTACTS: SURVEY_MONKEY_GET_CONTACTS_INPUT
  GET_GROUPS: SURVEY_MONKEY_GET_GROUPS_INPUT
  GET_RESPONSES: SURVEY_MONKEY_GET_RESPONSES_INPUT
  GET_SURVEYS: SURVEY_MONKEY_GET_SURVEYS_INPUT
  GET_SURVEY_DETAILS: SURVEY_MONKEY_GET_SURVEY_DETAILS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SURVEY_MONKEY".
 */
export type SURVEY_MONKEY_TOOL_OUTPUTS = {
  CREATE_SURVEY: SURVEY_MONKEY_CREATE_SURVEY_OUTPUT
  DELETE_SURVEY: SURVEY_MONKEY_DELETE_SURVEY_OUTPUT
  GET_COLLECTORS: SURVEY_MONKEY_GET_COLLECTORS_OUTPUT
  GET_CONTACTS: SURVEY_MONKEY_GET_CONTACTS_OUTPUT
  GET_GROUPS: SURVEY_MONKEY_GET_GROUPS_OUTPUT
  GET_RESPONSES: SURVEY_MONKEY_GET_RESPONSES_OUTPUT
  GET_SURVEYS: SURVEY_MONKEY_GET_SURVEYS_OUTPUT
  GET_SURVEY_DETAILS: SURVEY_MONKEY_GET_SURVEY_DETAILS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SURVEY_MONKEY toolkit.
 */
export const SURVEY_MONKEY = {
  slug: "survey_monkey",
  tools: {
    /**
     * Tool to create a new survey. use when you have a survey title and need an id for follow-up operations. example: "create a survey titled 'customer satisfaction'"
     */
    CREATE_SURVEY: "SURVEY_MONKEY_CREATE_SURVEY",
    /**
     * Tool to delete a specific survey. use when the survey id is confirmed correct. deletion is irreversible. example prompt: "delete survey '123456789'."
     */
    DELETE_SURVEY: "SURVEY_MONKEY_DELETE_SURVEY",
    /**
     * Tool to retrieve a list of collectors for a specific survey. use when you need collector urls, counts, and statuses.
     */
    GET_COLLECTORS: "SURVEY_MONKEY_GET_COLLECTORS",
    /**
     * Tool to retrieve a list of contacts. use after authenticating with surveymonkey. call this to fetch all contacts associated with your account.
     */
    GET_CONTACTS: "SURVEY_MONKEY_GET_CONTACTS",
    /**
     * Tool to retrieve a list of groups. use after authentication when you need to enumerate or paginate through all groups in your surveymonkey account.
     */
    GET_GROUPS: "SURVEY_MONKEY_GET_GROUPS",
    /**
     * Tool to retrieve a list of responses for a specific survey. use when you need to browse or filter responses after confirming the survey id.
     */
    GET_RESPONSES: "SURVEY_MONKEY_GET_RESPONSES",
    /**
     * Tool to retrieve a list of surveys. use when you need to enumerate or paginate through all surveys.
     */
    GET_SURVEYS: "SURVEY_MONKEY_GET_SURVEYS",
    /**
     * Tool to retrieve metadata and counts for a specific survey. use after confirming the survey id.
     */
    GET_SURVEY_DETAILS: "SURVEY_MONKEY_GET_SURVEY_DETAILS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SURVEY_MONKEY".
 */
export type SURVEY_MONKEY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SURVEY_MONKEY".
 */
export type SURVEY_MONKEY_TRIGGER_EVENTS = {}
