// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of EXIST's EXIST_EXIST_GET_USER_PROFILE tool input.
 */
type EXIST_EXIST_GET_USER_PROFILE_INPUT = object;

/**
 * Type of EXIST's EXIST_EXIST_GET_USER_PROFILE tool output.
 */
type EXIST_EXIST_GET_USER_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avatar
       * Format: uri
       * @description URL to the user's avatar image.
       */
      avatar: string;
      /**
       * Delinquent
       * @description Whether the user's account is delinquent.
       */
      delinquent: boolean;
      /**
       * First Name
       * @description The user's first name.
       */
      first_name: string;
      /**
       * Imperial Distance
       * @description Whether the user prefers imperial units for distance.
       */
      imperial_distance: boolean;
      /**
       * Imperial Energy
       * @description Whether the user prefers imperial units for energy.
       */
      imperial_energy: boolean;
      /**
       * Imperial Liquid
       * @description Whether the user prefers imperial units for liquid measurements.
       */
      imperial_liquid: boolean;
      /**
       * Imperial Temperature
       * @description Whether the user prefers imperial units for temperature.
       */
      imperial_temperature: boolean;
      /**
       * Imperial Weight
       * @description Whether the user prefers imperial units for weight.
       */
      imperial_weight: boolean;
      /**
       * Last Name
       * @description The user's last name.
       */
      last_name: string;
      /**
       * Local Time
       * @description The user's local time in ISO 8601 format.
       */
      local_time: string;
      /**
       * Timezone
       * @description The user's timezone (e.g., 'America/Los_Angeles').
       */
      timezone: string;
      /**
       * Trial
       * @description Whether the user is on a trial account.
       */
      trial: boolean;
      /**
       * Username
       * @description The user's username.
       */
      username: string;
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
 * Type of EXIST's EXIST_EXIST_OAUTH2_AUTHORIZE tool input.
 */
type EXIST_EXIST_OAUTH2_AUTHORIZE_INPUT = {
  /**
   * Client Id
   * @description The client application's ID, as assigned by Exist
   */
  client_id?: string;
  /**
   * Redirect Uri
   * @description URI where the user will be redirected after authorization
   */
  redirect_uri?: string;
  /**
   * Response Type
   * @description OAuth2 response type; must be 'code'
   * @default code
   */
  response_type: string;
  /**
   * Scope
   * @description Space-separated list of scopes to request
   */
  scope?: string;
  /**
   * State
   * @description Opaque value to maintain state between request and callback
   * @default null
   */
  state: string | null;
};

/**
 * Type of EXIST's EXIST_EXIST_OAUTH2_AUTHORIZE tool output.
 */
type EXIST_EXIST_OAUTH2_AUTHORIZE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Authorize Url
       * @description Full URL to redirect the user to for authorization
       */
      authorize_url: string;
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
 * Type of EXIST's EXIST_EXIST_O_AUTH2_AUTHORIZE tool input.
 */
type EXIST_EXIST_O_AUTH2_AUTHORIZE_INPUT = {
  /**
   * Client Id
   * @description The client application's ID assigned by Exist.
   */
  client_id?: string;
  /**
   * Redirect Uri
   * @description Redirect URI registered with the OAuth2 client.
   */
  redirect_uri?: string;
  /**
   * Response Type
   * @description OAuth2 response type; must always be 'code'.
   * @default code
   */
  response_type: string;
  /**
   * Scope
   * @description Space-separated list of scopes to request (e.g., 'manual_read manual_write').
   */
  scope?: string;
  /**
   * State
   * @description Opaque value to maintain state between request and callback.
   * @default null
   */
  state: string | null;
};

/**
 * Type of EXIST's EXIST_EXIST_O_AUTH2_AUTHORIZE tool output.
 */
type EXIST_EXIST_O_AUTH2_AUTHORIZE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Authorize Url
       * @description Full URL to redirect the user for authorization.
       */
      authorize_url: string;
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
 * Type of EXIST's EXIST_GET_ATTRIBUTE_TEMPLATES tool input.
 */
type EXIST_GET_ATTRIBUTE_TEMPLATES_INPUT = {
  /**
   * Groups
   * @description Filter by groups, e.g., ['activity','workouts']
   * @default null
   */
  groups: string[] | null;
  /**
   * Include Low Priority
   * @description Include templates with priority >= 10
   * @default null
   */
  include_low_priority: boolean | null;
  /**
   * Limit
   * @description Number of results per page
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page index, starting at 1
   * @default 1
   */
  page: number;
};

/**
 * Type of EXIST's EXIST_GET_ATTRIBUTE_TEMPLATES tool output.
 */
type EXIST_GET_ATTRIBUTE_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of templates available
       */
      count: number;
      /**
       * Next
       * @description URL to next page of results, or null if last page
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to previous page of results, or null if first page
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of attribute templates on this page
       */
      results: {
          /**
           * Group
           * @description Group metadata for this template
           */
          group: {
              /**
               * Label
               * @description Human-readable group label
               */
              label: string;
              /**
               * Name
               * @description Internal group name
               */
              name: string;
              /**
               * Priority
               * @description Group sort priority; lower values appear first
               */
              priority: number;
          };
          /**
           * Label
           * @description Display name of the template
           */
          label: string;
          /**
           * Name
           * @description Template identifier
           */
          name: string;
          /**
           * Priority
           * @description Template sort priority; lower values appear first
           */
          priority: number;
          /**
           * Value Type
           * @description Internal code for data type
           */
          value_type: number;
          /**
           * Value Type Description
           * @description Human-readable description of data type
           */
          value_type_description: string;
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
 * Type of EXIST's EXIST_GET_CORRELATIONS tool input.
 */
type EXIST_GET_CORRELATIONS_INPUT = {
  /**
   * Attribute
   * @description Filter correlations to this attribute name
   * @default null
   */
  attribute: string | null;
  /**
   * Confident
   * @description Return only correlations with five-star confidence
   * @default null
   */
  confident: boolean | null;
  /**
   * Limit
   * @description Number of items per page (max 100)
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page index (default 1)
   * @default 1
   */
  page: number | null;
  /**
   * Strong
   * @description Return only correlations above a certain relationship strength
   * @default null
   */
  strong: boolean | null;
};

/**
 * Type of EXIST's EXIST_GET_CORRELATIONS tool output.
 */
type EXIST_GET_CORRELATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of correlations
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
       * @description List of correlation objects for this page
       */
      results: {
          /**
           * Attribute
           * @description First attribute in the correlation
           */
          attribute: string;
          /**
           * Attribute2
           * @description Second attribute in the correlation
           */
          attribute2: string;
          /**
           * Attribute Category
           * @description Category of the attribute, if applicable
           * @default null
           */
          attribute_category: string | null;
          /**
           * Date
           * @description Date of the correlation in YYYY-MM-DD format
           */
          date: string;
          /**
           * Description
           * @description Additional information about the correlation
           * @default null
           */
          description: string | null;
          /**
           * Occurrence
           * @description Frequency of the correlation occurrence
           * @default null
           */
          occurrence: string | null;
          /**
           * P
           * @description P-value indicating statistical significance
           */
          p: number;
          /**
           * Percentage
           * @description Strength of the correlation as a percentage
           */
          percentage: number;
          /**
           * Period
           * @description Period over which the correlation was calculated
           */
          period: number;
          /**
           * RatingModel
           * @description User-submitted rating of the correlation, if any
           * @default null
           */
          rating: {
              /**
               * Comment
               * @description Optional user comment on the correlation
               * @default null
               */
              comment: string | null;
              /**
               * Stars
               * @description User-submitted rating in stars (1-5)
               */
              stars: number;
              /**
               * Timestamp
               * @description ISO 8601 timestamp of the rating submission
               */
              timestamp: string;
          } | null;
          /**
           * Second Person
           * @description Human-readable description of the correlation
           */
          second_person: string;
          /**
           * Second Person Elements
           * @description Components of the second_person description
           */
          second_person_elements: string[];
          /**
           * Stars
           * @description Confidence level represented as stars (1-5)
           */
          stars: number;
          /**
           * Stars Description
           * @description Description of the confidence level
           */
          stars_description: string;
          /**
           * Strength Description
           * @description Description of the correlation strength
           */
          strength_description: string;
          /**
           * Value
           * @description Correlation coefficient value
           */
          value: number;
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
 * Type of EXIST's EXIST_GET_USER_ATTRIBUTES tool input.
 */
type EXIST_GET_USER_ATTRIBUTES_INPUT = {
  /**
   * Attributes
   * @description Filter by attribute names. Provide a list, e.g. ['sleep_efficiency','steps'].
   * @default null
   */
  attributes: string[] | null;
  /**
   * Exclude Custom
   * @description If true, only templated attributes are returned.
   * @default null
   */
  exclude_custom: boolean | null;
  /**
   * Groups
   * @description Filter by attribute groups. Provide a list, e.g. ['activity','workouts'].
   * @default null
   */
  groups: string[] | null;
  /**
   * Include Inactive
   * @description If true, includes inactive attributes (active=false).
   * @default null
   */
  include_inactive: boolean | null;
  /**
   * Include Low Priority
   * @description If true, includes attributes with priority >= 10.
   * @default null
   */
  include_low_priority: boolean | null;
  /**
   * Limit
   * @description Number of results per page.
   * @default null
   */
  limit: number | null;
  /**
   * Manual
   * @description If true, only manual attributes; if false, excludes them.
   * @default null
   */
  manual: boolean | null;
  /**
   * Owned
   * @description If true, only attributes owned by this client are returned.
   * @default null
   */
  owned: boolean | null;
  /**
   * Page
   * @description Page index, 1-based. Defaults to 1.
   * @default 1
   */
  page: number;
};

/**
 * Type of EXIST's EXIST_GET_USER_ATTRIBUTES tool output.
 */
type EXIST_GET_USER_ATTRIBUTES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of matching attributes
       */
      count: number;
      /**
       * Next
       * @description URL to next page of results, or null if last page
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to previous page of results, or null if first page
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of attribute metadata
       */
      results: {
          /**
           * Active
           * @description True if the attribute is active
           */
          active: boolean;
          /**
           * Available Services
           * @description List of connected services that can provide this attribute
           */
          available_services: string[];
          /**
           * Group
           * @description Group or category of the attribute
           */
          group: string;
          /**
           * Label
           * @description Attribute human-readable label
           */
          label: string;
          /**
           * Manual
           * @description True if attribute is manually entered
           */
          manual: boolean;
          /**
           * Name
           * @description Attribute identifier
           */
          name: string;
          /**
           * Priority
           * @description Priority of the attribute
           */
          priority: number;
          /**
           * Private
           * @description True if the attribute is private
           */
          private: boolean;
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
 * Type of EXIST's EXIST_GET_USER_PROFILE tool input.
 */
type EXIST_GET_USER_PROFILE_INPUT = object;

/**
 * Type of EXIST's EXIST_GET_USER_PROFILE tool output.
 */
type EXIST_GET_USER_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avatar
       * Format: uri
       * @description URL to the user's avatar image.
       */
      avatar: string;
      /**
       * Delinquent
       * @description Whether the user's account is delinquent.
       */
      delinquent: boolean;
      /**
       * First Name
       * @description The user's first name.
       */
      first_name: string;
      /**
       * Imperial Distance
       * @description Whether the user prefers imperial units for distance.
       */
      imperial_distance: boolean;
      /**
       * Imperial Energy
       * @description Whether the user prefers imperial units for energy.
       */
      imperial_energy: boolean;
      /**
       * Imperial Liquid
       * @description Whether the user prefers imperial units for liquid measurements.
       */
      imperial_liquid: boolean;
      /**
       * Imperial Temperature
       * @description Whether the user prefers imperial units for temperature.
       */
      imperial_temperature: boolean;
      /**
       * Imperial Weight
       * @description Whether the user prefers imperial units for weight.
       */
      imperial_weight: boolean;
      /**
       * Last Name
       * @description The user's last name.
       */
      last_name: string;
      /**
       * Local Time
       * @description The user's local time in ISO 8601 format.
       */
      local_time: string;
      /**
       * Timezone
       * @description The user's timezone.
       */
      timezone: string;
      /**
       * Trial
       * @description Whether the user is on a trial account.
       */
      trial: boolean;
      /**
       * Username
       * @description The user's username.
       */
      username: string;
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
 * Type map of all available tool input types for toolkit "EXIST".
 */
export type EXIST_TOOL_INPUTS = {
  EXIST_GET_USER_PROFILE: EXIST_EXIST_GET_USER_PROFILE_INPUT
  EXIST_OAUTH2_AUTHORIZE: EXIST_EXIST_OAUTH2_AUTHORIZE_INPUT
  EXIST_O_AUTH2_AUTHORIZE: EXIST_EXIST_O_AUTH2_AUTHORIZE_INPUT
  GET_ATTRIBUTE_TEMPLATES: EXIST_GET_ATTRIBUTE_TEMPLATES_INPUT
  GET_CORRELATIONS: EXIST_GET_CORRELATIONS_INPUT
  GET_USER_ATTRIBUTES: EXIST_GET_USER_ATTRIBUTES_INPUT
  GET_USER_PROFILE: EXIST_GET_USER_PROFILE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "EXIST".
 */
export type EXIST_TOOL_OUTPUTS = {
  EXIST_GET_USER_PROFILE: EXIST_EXIST_GET_USER_PROFILE_OUTPUT
  EXIST_OAUTH2_AUTHORIZE: EXIST_EXIST_OAUTH2_AUTHORIZE_OUTPUT
  EXIST_O_AUTH2_AUTHORIZE: EXIST_EXIST_O_AUTH2_AUTHORIZE_OUTPUT
  GET_ATTRIBUTE_TEMPLATES: EXIST_GET_ATTRIBUTE_TEMPLATES_OUTPUT
  GET_CORRELATIONS: EXIST_GET_CORRELATIONS_OUTPUT
  GET_USER_ATTRIBUTES: EXIST_GET_USER_ATTRIBUTES_OUTPUT
  GET_USER_PROFILE: EXIST_GET_USER_PROFILE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's EXIST toolkit.
 */
export const EXIST = {
  slug: "exist",
  tools: {
    /**
     * Tool to retrieve the authenticated user's profile details and preferences. use after authentication to inspect account settings and status.
     */
    EXIST_GET_USER_PROFILE: "EXIST_EXIST_GET_USER_PROFILE",
    /**
     * Tool to initiate the oauth2 authorization flow for user consent. use when you need to obtain an authorization code before exchanging for an access token.
     */
    EXIST_OAUTH2_AUTHORIZE: "EXIST_EXIST_OAUTH2_AUTHORIZE",
    /**
     * Tool to initiate the oauth2 authorization flow for user consent. use when you need an authorization code before exchanging for an access token.
     */
    EXIST_O_AUTH2_AUTHORIZE: "EXIST_EXIST_O_AUTH2_AUTHORIZE",
    /**
     * Tool to retrieve a paged list of supported attribute templates. use when you need to browse available templates before creating or updating data.
     */
    GET_ATTRIBUTE_TEMPLATES: "EXIST_GET_ATTRIBUTE_TEMPLATES",
    /**
     * Tool to retrieve a paginated list of recent correlations. use when exploring relationships between your tracked attributes, optionally filtering by strength or attribute.
     */
    GET_CORRELATIONS: "EXIST_GET_CORRELATIONS",
    /**
     * Tool to retrieve a paged list of the user's attributes without values. use when you need metadata on available attributes for filtering or selection.
     */
    GET_USER_ATTRIBUTES: "EXIST_GET_USER_ATTRIBUTES",
    /**
     * Tool to retrieve the authenticated user's profile details and preferences. use after authentication to inspect account settings and status.
     */
    GET_USER_PROFILE: "EXIST_GET_USER_PROFILE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "EXIST".
 */
export type EXIST_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "EXIST".
 */
export type EXIST_TRIGGER_EVENTS = {}
