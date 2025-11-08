// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of POSTHOG's POSTHOG_ADD_DASHBOARD_COLLABORATORS_WITH_ACCESS_LEVEL tool input.
 */
type POSTHOG_ADD_DASHBOARD_COLLABORATORS_WITH_ACCESS_LEVEL_INPUT = {
  /**
   * Added At
   * Format: date-time
   * @description Added At
   */
  added_at?: string;
  /**
   * Dashboard Id
   * @description Dashboard Id
   */
  dashboard_id?: number;
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
  /**
   * User Uuid
   * Format: uuid
   * @description User Uuid
   */
  user_uuid?: string;
};

/**
 * Type of POSTHOG's POSTHOG_ADD_DASHBOARD_COLLABORATORS_WITH_ACCESS_LEVEL tool output.
 */
type POSTHOG_ADD_DASHBOARD_COLLABORATORS_WITH_ACCESS_LEVEL_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_ADD_MEMBER_TO_ORGANIZATION_ROLE tool input.
 */
type POSTHOG_ADD_MEMBER_TO_ORGANIZATION_ROLE_INPUT = {
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Joined At
   * Format: date-time
   * @description Joined At
   */
  joined_at?: string;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
  /**
   * Role Id
   * Format: uuid
   * @description Role Id
   */
  role_id?: string;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
  /**
   * User Uuid
   * Format: uuid
   * @description User Uuid
   */
  user_uuid?: string;
};

/**
 * Type of POSTHOG's POSTHOG_ADD_MEMBER_TO_ORGANIZATION_ROLE tool output.
 */
type POSTHOG_ADD_MEMBER_TO_ORGANIZATION_ROLE_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_ADD_PROJECT_SPECIFIC_MEMBER_ROLES tool input.
 */
type POSTHOG_ADD_PROJECT_SPECIFIC_MEMBER_ROLES_INPUT = {
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Joined At
   * Format: date-time
   * @description Joined At
   */
  joined_at?: string;
  /**
   * Parent Level
   * @description Parent Level
   */
  parent_level?: number;
  /**
   * Parent Membership Id
   * Format: uuid
   * @description Parent Membership Id
   */
  parent_membership_id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
  /**
   * User Uuid
   * Format: uuid
   * @description User Uuid
   */
  user_uuid?: string;
};

/**
 * Type of POSTHOG's POSTHOG_ADD_PROJECT_SPECIFIC_MEMBER_ROLES tool output.
 */
type POSTHOG_ADD_PROJECT_SPECIFIC_MEMBER_ROLES_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_ASSIGN_FEATURE_FLAG_ROLE_BASED_ACCESS tool input.
 */
type POSTHOG_ASSIGN_FEATURE_FLAG_ROLE_BASED_ACCESS_INPUT = {
  /**
   * Added At
   * Format: date-time
   * @description Added At
   */
  added_at?: string;
  /**
   * Feature Flag Id
   * @description Feature Flag Id
   */
  feature_flag_id?: number;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Role Id
   * Format: uuid
   * @description Role Id
   */
  role_id?: string;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_ASSIGN_FEATURE_FLAG_ROLE_BASED_ACCESS tool output.
 */
type POSTHOG_ASSIGN_FEATURE_FLAG_ROLE_BASED_ACCESS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_BOOKMARK_PROJECT_ACTIVITY_NOTIFICATION tool input.
 */
type POSTHOG_BOOKMARK_PROJECT_ACTIVITY_NOTIFICATION_INPUT = {
  /**
   * Activity
   * @description Activity
   */
  activity?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Detail
   * @description Detail
   */
  detail?: unknown;
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Is System
   * @description Is System
   */
  is_system?: boolean;
  /**
   * Item Id
   * @description Item Id
   */
  item_id?: string;
  /**
   * Organization Id
   * Format: uuid
   * @description Organization Id
   */
  organization_id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Scope
   * @description Scope
   */
  scope?: string;
  /**
   * Unread
   * @description is the date of this log item newer than the user"s bookmark
   */
  unread?: boolean;
  /**
   * User  Distinct  Id
   * @description Distinct Id
   */
  user__distinct__id?: string;
  /**
   * User  Email
   * Format: email
   * @description Email
   */
  user__email?: string;
  /**
   * User  First  Name
   * @description First Name
   */
  user__first__name?: string;
  /**
   * User  Hedgehog  Config
   * @description Hedgehog Config
   */
  user__hedgehog__config?: {
      [key: string]: unknown;
  };
  /**
   * User  Id
   * @description Id
   */
  user__id?: number;
  /**
   * User  Is  Email  Verified
   * @description Is Email Verified
   */
  user__is__email__verified?: boolean;
  /**
   * User  Last  Name
   * @description Last Name
   */
  user__last__name?: string;
  /**
   * User  Uuid
   * Format: uuid
   * @description Uuid
   */
  user__uuid?: string;
  /**
   * Was Impersonated
   * @description Was Impersonated
   */
  was_impersonated?: boolean;
};

/**
 * Type of POSTHOG's POSTHOG_BOOKMARK_PROJECT_ACTIVITY_NOTIFICATION tool output.
 */
type POSTHOG_BOOKMARK_PROJECT_ACTIVITY_NOTIFICATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_BULK_CREATE_ORGANIZATION_INVITES tool input.
 */
type POSTHOG_BULK_CREATE_ORGANIZATION_INVITES_INPUT = {
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Emailing Attempt Made
   * @description Emailing Attempt Made
   */
  emailing_attempt_made?: boolean;
  /**
   * First Name
   * @description First Name
   */
  first_name?: string;
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Is Expired
   * @description Check if invite is older than INVITE_DAYS_VALIDITY days.
   */
  is_expired?: boolean;
  /**
   * Message
   * @description Message
   */
  message?: string;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
  /**
   * Private Project Access
   * @description List of team IDs and corresponding access levels to private projects.
   */
  private_project_access?: unknown;
  /**
   * Send Email
   * @description Send Email
   * @default true
   */
  send_email: boolean;
  /**
   * Target Email
   * Format: email
   * @description Target Email
   */
  target_email?: string;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_BULK_CREATE_ORGANIZATION_INVITES tool output.
 */
type POSTHOG_BULK_CREATE_ORGANIZATION_INVITES_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CANCEL_INSIGHTS_FOR_A_PROJECT tool input.
 */
type POSTHOG_CANCEL_INSIGHTS_FOR_A_PROJECT_INPUT = {
  /**
   * Cache Target Age
   * @description The target age of the cached results for this insight.
   */
  cache_target_age?: string;
  /**
   * Columns
   * @description Columns
   */
  columns?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Dashboard Tiles
   * @description      A dashboard tile ID and dashboard_id for each of the dashboards that this insight is displayed on.
   */
  dashboard_tiles?: {
      [key: string]: unknown;
  }[];
  /**
   * Dashboards
   * @description          DEPRECATED. Will be removed in a future release. Use dashboard_tiles instead.         A dashboard ID for each of the dashboards that this insight is displayed on.
   */
  dashboards?: number[];
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Derived Name
   * @description Derived Name
   */
  derived_name?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Favorited
   * @description Favorited
   */
  favorited?: boolean;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Hogql
   * @description Hogql
   */
  hogql?: string;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Is Cached
   * @description Is Cached
   */
  is_cached?: string;
  /**
   * Is Sample
   * @description Is Sample
   */
  is_sample?: boolean;
  /**
   * Last Modified At
   * Format: date-time
   * @description Last Modified At
   */
  last_modified_at?: string;
  /**
   * Last Refresh
   * @description      The datetime this insight"s results were generated.     If added to one or more dashboards the insight can be refreshed separately on each.     Returns the appropriate last_refresh datetime for the context the insight is viewed in     (see from_dashboard query parameter).
   */
  last_refresh?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Next Allowed Client Refresh
   * @description      The earliest possible datetime at which we"ll allow the cached results for this insight to be refreshed     by querying the database.
   */
  next_allowed_client_refresh?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Query
   * @description Query node JSON string
   */
  query?: unknown;
  /**
   * Query Status
   * @description Query Status
   */
  query_status?: string;
  /**
   * Result
   * @description Result
   */
  result?: string;
  /**
   * Saved
   * @description Saved
   */
  saved?: boolean;
  /**
   * Short Id
   * @description Short Id
   */
  short_id?: string;
  /**
   * Tags
   * @description Tags
   */
  tags?: unknown[];
  /**
   * Timezone
   * @description The timezone this chart is displayed in.
   */
  timezone?: string;
  /**
   * Types
   * @description Types
   */
  types?: string;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CANCEL_INSIGHTS_FOR_A_PROJECT tool output.
 */
type POSTHOG_CANCEL_INSIGHTS_FOR_A_PROJECT_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CHECK_PIPELINE_DESTINATION_UPDATES tool input.
 */
type POSTHOG_CHECK_PIPELINE_DESTINATION_UPDATES_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin.
   */
  id?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CHECK_PIPELINE_DESTINATION_UPDATES tool output.
 */
type POSTHOG_CHECK_PIPELINE_DESTINATION_UPDATES_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CHECK_PIPELINE_IMPORT_APP_UPDATES tool input.
 */
type POSTHOG_CHECK_PIPELINE_IMPORT_APP_UPDATES_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin.
   */
  id?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CHECK_PIPELINE_IMPORT_APP_UPDATES tool output.
 */
type POSTHOG_CHECK_PIPELINE_IMPORT_APP_UPDATES_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CHECK_PIPELINE_PLUGIN_UPDATE_STATUS tool input.
 */
type POSTHOG_CHECK_PIPELINE_PLUGIN_UPDATE_STATUS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin.
   */
  id?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CHECK_PIPELINE_PLUGIN_UPDATE_STATUS tool output.
 */
type POSTHOG_CHECK_PIPELINE_PLUGIN_UPDATE_STATUS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CHECK_PROJECT_S_DEMO_DATA_GENERATION_STATUS tool input.
 */
type POSTHOG_CHECK_PROJECT_S_DEMO_DATA_GENERATION_STATUS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this team (soon to be environment).
   */
  id?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CHECK_PROJECT_S_DEMO_DATA_GENERATION_STATUS tool output.
 */
type POSTHOG_CHECK_PROJECT_S_DEMO_DATA_GENERATION_STATUS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_COHORT_DUPLICATION_TO_STATIC tool input.
 */
type POSTHOG_COHORT_DUPLICATION_TO_STATIC_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this cohort.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_COHORT_DUPLICATION_TO_STATIC tool output.
 */
type POSTHOG_COHORT_DUPLICATION_TO_STATIC_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_A_NOTEBOOK_IN_A_PROJECT tool input.
 */
type POSTHOG_CREATE_A_NOTEBOOK_IN_A_PROJECT_INPUT = {
  /**
   * Content
   * @description Content
   */
  content?: unknown;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Last Modified At
   * Format: date-time
   * @description Last Modified At
   */
  last_modified_at?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Short Id
   * @description Short Id
   */
  short_id?: string;
  /**
   * Text Content
   * @description Text Content
   */
  text_content?: string;
  /**
   * Title
   * @description Title
   */
  title?: string;
  /**
   * Version
   * @description Version
   */
  version?: number;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_A_NOTEBOOK_IN_A_PROJECT tool output.
 */
type POSTHOG_CREATE_A_NOTEBOOK_IN_A_PROJECT_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_CUSTOM_PROJECT_INSIGHTS tool input.
 */
type POSTHOG_CREATE_CUSTOM_PROJECT_INSIGHTS_INPUT = {
  /**
   * Cache Target Age
   * @description The target age of the cached results for this insight.
   */
  cache_target_age?: string;
  /**
   * Columns
   * @description Columns
   */
  columns?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Dashboard Tiles
   * @description      A dashboard tile ID and dashboard_id for each of the dashboards that this insight is displayed on.
   */
  dashboard_tiles?: {
      [key: string]: unknown;
  }[];
  /**
   * Dashboards
   * @description          DEPRECATED. Will be removed in a future release. Use dashboard_tiles instead.         A dashboard ID for each of the dashboards that this insight is displayed on.
   */
  dashboards?: number[];
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Derived Name
   * @description Derived Name
   */
  derived_name?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Favorited
   * @description Favorited
   */
  favorited?: boolean;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Hogql
   * @description Hogql
   */
  hogql?: string;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Is Cached
   * @description Is Cached
   */
  is_cached?: string;
  /**
   * Is Sample
   * @description Is Sample
   */
  is_sample?: boolean;
  /**
   * Last Modified At
   * Format: date-time
   * @description Last Modified At
   */
  last_modified_at?: string;
  /**
   * Last Refresh
   * @description      The datetime this insight"s results were generated.     If added to one or more dashboards the insight can be refreshed separately on each.     Returns the appropriate last_refresh datetime for the context the insight is viewed in     (see from_dashboard query parameter).
   */
  last_refresh?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Next Allowed Client Refresh
   * @description      The earliest possible datetime at which we"ll allow the cached results for this insight to be refreshed     by querying the database.
   */
  next_allowed_client_refresh?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Query
   * @description Query node JSON string
   */
  query?: unknown;
  /**
   * Query Status
   * @description Query Status
   */
  query_status?: string;
  /**
   * Result
   * @description Result
   */
  result?: string;
  /**
   * Saved
   * @description Saved
   */
  saved?: boolean;
  /**
   * Short Id
   * @description Short Id
   */
  short_id?: string;
  /**
   * Tags
   * @description Tags
   */
  tags?: unknown[];
  /**
   * Timezone
   * @description The timezone this chart is displayed in.
   */
  timezone?: string;
  /**
   * Types
   * @description Types
   */
  types?: string;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_CUSTOM_PROJECT_INSIGHTS tool output.
 */
type POSTHOG_CREATE_CUSTOM_PROJECT_INSIGHTS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_DASHBOARD_FROM_TEMPLATE_IN_PROJECT tool input.
 */
type POSTHOG_CREATE_DASHBOARD_FROM_TEMPLATE_IN_PROJECT_INPUT = {
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Delete Insights
   * @description Delete Insights
   * @default false
   */
  delete_insights: boolean;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Is Shared
   * @description Is Shared
   */
  is_shared?: boolean;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Pinned
   * @description Pinned
   */
  pinned?: boolean;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Tags
   * @description Tags
   */
  tags?: unknown[];
  /**
   * Tiles
   * @description Tiles
   */
  tiles?: {
      [key: string]: unknown;
  }[];
  /**
   * Use Dashboard
   * @description Use Dashboard
   */
  use_dashboard?: number;
  /**
   * Use Template
   * @description Use Template
   */
  use_template?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_DASHBOARD_FROM_TEMPLATE_IN_PROJECT tool output.
 */
type POSTHOG_CREATE_DASHBOARD_FROM_TEMPLATE_IN_PROJECT_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_DOMAIN_WITH_SAML_FOR_ORGANIZATION tool input.
 */
type POSTHOG_CREATE_DOMAIN_WITH_SAML_FOR_ORGANIZATION_INPUT = {
  /**
   * Domain
   * @description Domain
   */
  domain?: string;
  /**
   * Has Saml
   * @description Returns whether SAML is configured for the instance. Does not validate the user has the required license (that check is performed in other places).
   */
  has_saml?: boolean;
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Is Verified
   * @description Determines whether a domain is verified or not.
   */
  is_verified?: boolean;
  /**
   * Jit Provisioning Enabled
   * @description Jit Provisioning Enabled
   */
  jit_provisioning_enabled?: boolean;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
  /**
   * Saml Acs Url
   * @description Saml Acs Url
   */
  saml_acs_url?: string;
  /**
   * Saml Entity Id
   * @description Saml Entity Id
   */
  saml_entity_id?: string;
  /**
   * Saml X509 Cert
   * @description Saml X509 Cert
   */
  saml_x509_cert?: string;
  /**
   * Sso Enforcement
   * @description Sso Enforcement
   */
  sso_enforcement?: string;
  /**
   * Verification Challenge
   * @description Verification Challenge
   */
  verification_challenge?: string;
  /**
   * Verified At
   * Format: date-time
   * @description Verified At
   */
  verified_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_DOMAIN_WITH_SAML_FOR_ORGANIZATION tool output.
 */
type POSTHOG_CREATE_DOMAIN_WITH_SAML_FOR_ORGANIZATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_EXPERIMENT_EXPOSURE_COHORT tool input.
 */
type POSTHOG_CREATE_EXPERIMENT_EXPOSURE_COHORT_INPUT = {
  /**
   * Archived
   * @description Archived
   */
  archived?: boolean;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * End Date
   * Format: date-time
   * @description End Date
   */
  end_date?: string;
  /**
   * Exposure Cohort
   * @description Exposure Cohort
   */
  exposure_cohort?: number;
  /**
   * Feature Flag Key
   * @description Feature Flag Key
   */
  feature_flag_key?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Parameters
   * @description Parameters
   */
  parameters?: unknown;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Secondary Metrics
   * @description Secondary Metrics
   */
  secondary_metrics?: unknown;
  /**
   * Start Date
   * Format: date-time
   * @description Start Date
   */
  start_date?: string;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_EXPERIMENT_EXPOSURE_COHORT tool output.
 */
type POSTHOG_CREATE_EXPERIMENT_EXPOSURE_COHORT_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_FEATURE_FLAGS_FOR_PROJECT tool input.
 */
type POSTHOG_CREATE_FEATURE_FLAGS_FOR_PROJECT_INPUT = {
  /**
   * Active
   * @description Active
   */
  active?: boolean;
  /**
   * Analytics Dashboards
   * @description Analytics Dashboards
   */
  analytics_dashboards?: number[];
  /**
   * Can Edit
   * @description Can Edit
   */
  can_edit?: boolean;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Ensure Experience Continuity
   * @description Ensure Experience Continuity
   */
  ensure_experience_continuity?: boolean;
  /**
   * Experiment Set
   * @description Experiment Set
   */
  experiment_set?: number[];
  /**
   * Features
   * @description Features
   */
  features?: {
      [key: string]: unknown;
  };
  /**
   * Filters
   * @description Filters
   */
  filters?: {
      [key: string]: unknown;
  };
  /**
   * Has Enriched Analytics
   * @description Has Enriched Analytics
   */
  has_enriched_analytics?: boolean;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Is Simple Flag
   * @description Is Simple Flag
   */
  is_simple_flag?: boolean;
  /**
   * Key
   * @description Key
   */
  key?: string;
  /**
   * Name
   * @description contains the description for the flag (field name `name` is kept for backwards-compatibility)
   */
  name?: string;
  /**
   * Performed Rollback
   * @description Performed Rollback
   */
  performed_rollback?: boolean;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Rollback Conditions
   * @description Rollback Conditions
   */
  rollback_conditions?: unknown;
  /**
   * Rollout Percentage
   * @description Rollout Percentage
   */
  rollout_percentage?: number;
  /**
   * Surveys
   * @description Surveys
   */
  surveys?: {
      [key: string]: unknown;
  };
  /**
   * Tags
   * @description Tags
   */
  tags?: unknown[];
  /**
   * Usage Dashboard
   * @description Usage Dashboard
   */
  usage_dashboard?: number;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_FEATURE_FLAGS_FOR_PROJECT tool output.
 */
type POSTHOG_CREATE_FEATURE_FLAGS_FOR_PROJECT_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_FEATURE_FLAG_DASHBOARD tool input.
 */
type POSTHOG_CREATE_FEATURE_FLAG_DASHBOARD_INPUT = {
  /**
   * Active
   * @description Active
   */
  active?: boolean;
  /**
   * Analytics Dashboards
   * @description Analytics Dashboards
   */
  analytics_dashboards?: number[];
  /**
   * Can Edit
   * @description Can Edit
   */
  can_edit?: boolean;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Ensure Experience Continuity
   * @description Ensure Experience Continuity
   */
  ensure_experience_continuity?: boolean;
  /**
   * Experiment Set
   * @description Experiment Set
   */
  experiment_set?: number[];
  /**
   * Features
   * @description Features
   */
  features?: {
      [key: string]: unknown;
  };
  /**
   * Filters
   * @description Filters
   */
  filters?: {
      [key: string]: unknown;
  };
  /**
   * Has Enriched Analytics
   * @description Has Enriched Analytics
   */
  has_enriched_analytics?: boolean;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Is Simple Flag
   * @description Is Simple Flag
   */
  is_simple_flag?: boolean;
  /**
   * Key
   * @description Key
   */
  key?: string;
  /**
   * Name
   * @description contains the description for the flag (field name `name` is kept for backwards-compatibility)
   */
  name?: string;
  /**
   * Performed Rollback
   * @description Performed Rollback
   */
  performed_rollback?: boolean;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Rollback Conditions
   * @description Rollback Conditions
   */
  rollback_conditions?: unknown;
  /**
   * Rollout Percentage
   * @description Rollout Percentage
   */
  rollout_percentage?: number;
  /**
   * Surveys
   * @description Surveys
   */
  surveys?: {
      [key: string]: unknown;
  };
  /**
   * Tags
   * @description Tags
   */
  tags?: unknown[];
  /**
   * Usage Dashboard
   * @description Usage Dashboard
   */
  usage_dashboard?: number;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_FEATURE_FLAG_DASHBOARD tool output.
 */
type POSTHOG_CREATE_FEATURE_FLAG_DASHBOARD_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_FRONTEND_APP_PIPELINE_CONFIG tool input.
 */
type POSTHOG_CREATE_FRONTEND_APP_PIPELINE_CONFIG_INPUT = {
  /**
   * Config
   * @description Config
   */
  config?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Delivery Rate 24H
   * @description Delivery Rate 24H
   */
  delivery_rate_24h?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Enabled
   * @description Enabled
   */
  enabled?: boolean;
  /**
   * Error
   * @description Error
   */
  error?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Plugin
   * @description Plugin
   */
  plugin?: number;
  /**
   * Plugin Info
   * @description Plugin Info
   */
  plugin_info?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Team Id
   * @description Team Id
   */
  team_id?: number;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_FRONTEND_APP_PIPELINE_CONFIG tool output.
 */
type POSTHOG_CREATE_FRONTEND_APP_PIPELINE_CONFIG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_FUNNEL_ANALYSIS_FOR_PROJECT_PERSONS tool input.
 */
type POSTHOG_CREATE_FUNNEL_ANALYSIS_FOR_PROJECT_PERSONS_INPUT = {
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Distinct Ids
   * @description Distinct Ids
   */
  distinct_ids?: string[];
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Properties
   * @description Properties
   */
  properties?: unknown;
  /**
   * Uuid
   * Format: uuid
   * @description Uuid
   */
  uuid?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_FUNNEL_ANALYSIS_FOR_PROJECT_PERSONS tool output.
 */
type POSTHOG_CREATE_FUNNEL_ANALYSIS_FOR_PROJECT_PERSONS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_NEW_ORGANIZATION_WITH_CONFIGURABLE_ACCESS tool input.
 */
type POSTHOG_CREATE_NEW_ORGANIZATION_WITH_CONFIGURABLE_ACCESS_INPUT = {
  /**
   * Available Product Features
   * @description Available Product Features
   */
  available_product_features?: unknown[];
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Customer Id
   * @description Customer Id
   */
  customer_id?: string;
  /**
   * Enforce 2Fa
   * @description Enforce 2Fa
   */
  enforce_2fa?: boolean;
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Is Member Join Email Enabled
   * @description Is Member Join Email Enabled
   */
  is_member_join_email_enabled?: boolean;
  /**
   * Member Count
   * @description Member Count
   */
  member_count?: string;
  /**
   * Metadata
   * @description Metadata
   */
  metadata?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Slug
   * @description Slug
   */
  slug?: string;
  /**
   * Teams
   * @description Teams
   */
  teams?: {
      [key: string]: unknown;
  }[];
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_NEW_ORGANIZATION_WITH_CONFIGURABLE_ACCESS tool output.
 */
type POSTHOG_CREATE_NEW_ORGANIZATION_WITH_CONFIGURABLE_ACCESS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_NEW_PROJECT_EXPERIMENT tool input.
 */
type POSTHOG_CREATE_NEW_PROJECT_EXPERIMENT_INPUT = {
  /**
   * Archived
   * @description Archived
   */
  archived?: boolean;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * End Date
   * Format: date-time
   * @description End Date
   */
  end_date?: string;
  /**
   * Exposure Cohort
   * @description Exposure Cohort
   */
  exposure_cohort?: number;
  /**
   * Feature Flag Key
   * @description Feature Flag Key
   */
  feature_flag_key?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Parameters
   * @description Parameters
   */
  parameters?: unknown;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Secondary Metrics
   * @description Secondary Metrics
   */
  secondary_metrics?: unknown;
  /**
   * Start Date
   * Format: date-time
   * @description Start Date
   */
  start_date?: string;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_NEW_PROJECT_EXPERIMENT tool output.
 */
type POSTHOG_CREATE_NEW_PROJECT_EXPERIMENT_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_ORGANIZATION_INVITE_WITH_ROLE_AND_EMAIL tool input.
 */
type POSTHOG_CREATE_ORGANIZATION_INVITE_WITH_ROLE_AND_EMAIL_INPUT = {
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Emailing Attempt Made
   * @description Emailing Attempt Made
   */
  emailing_attempt_made?: boolean;
  /**
   * First Name
   * @description First Name
   */
  first_name?: string;
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Is Expired
   * @description Check if invite is older than INVITE_DAYS_VALIDITY days.
   */
  is_expired?: boolean;
  /**
   * Message
   * @description Message
   */
  message?: string;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
  /**
   * Private Project Access
   * @description List of team IDs and corresponding access levels to private projects.
   */
  private_project_access?: unknown;
  /**
   * Send Email
   * @description Send Email
   * @default true
   */
  send_email: boolean;
  /**
   * Target Email
   * Format: email
   * @description Target Email
   */
  target_email?: string;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_ORGANIZATION_INVITE_WITH_ROLE_AND_EMAIL tool output.
 */
type POSTHOG_CREATE_ORGANIZATION_INVITE_WITH_ROLE_AND_EMAIL_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_ORGANIZATION_ROLE_WITH_FEATURE_FLAG_LEVELS tool input.
 */
type POSTHOG_CREATE_ORGANIZATION_ROLE_WITH_FEATURE_FLAG_LEVELS_INPUT = {
  /**
   * Associated Flags
   * @description Associated Flags
   */
  associated_flags?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Members
   * @description Members
   */
  members?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_ORGANIZATION_ROLE_WITH_FEATURE_FLAG_LEVELS tool output.
 */
type POSTHOG_CREATE_ORGANIZATION_ROLE_WITH_FEATURE_FLAG_LEVELS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_ORG_PROXY_RECORD_WITH_DOMAIN_AND_STATUS tool input.
 */
type POSTHOG_CREATE_ORG_PROXY_RECORD_WITH_DOMAIN_AND_STATUS_INPUT = {
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Created By
   * @description Created By
   */
  created_by?: number;
  /**
   * Domain
   * @description Domain
   */
  domain?: string;
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Message
   * @description Message
   */
  message?: string;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
  /**
   * Target Cname
   * @description Target Cname
   */
  target_cname?: string;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_ORG_PROXY_RECORD_WITH_DOMAIN_AND_STATUS tool output.
 */
type POSTHOG_CREATE_ORG_PROXY_RECORD_WITH_DOMAIN_AND_STATUS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_PERSON_FUNNEL_CORRELATION tool input.
 */
type POSTHOG_CREATE_PERSON_FUNNEL_CORRELATION_INPUT = {
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Distinct Ids
   * @description Distinct Ids
   */
  distinct_ids?: string[];
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Properties
   * @description Properties
   */
  properties?: unknown;
  /**
   * Uuid
   * Format: uuid
   * @description Uuid
   */
  uuid?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_PERSON_FUNNEL_CORRELATION tool output.
 */
type POSTHOG_CREATE_PERSON_FUNNEL_CORRELATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_PERSON_PATH_WITH_FORMAT_OPTION tool input.
 */
type POSTHOG_CREATE_PERSON_PATH_WITH_FORMAT_OPTION_INPUT = {
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Distinct Ids
   * @description Distinct Ids
   */
  distinct_ids?: string[];
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Properties
   * @description Properties
   */
  properties?: unknown;
  /**
   * Uuid
   * Format: uuid
   * @description Uuid
   */
  uuid?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_PERSON_PATH_WITH_FORMAT_OPTION tool output.
 */
type POSTHOG_CREATE_PERSON_PATH_WITH_FORMAT_OPTION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_PIPELINE_DESTINATION_CONFIG tool input.
 */
type POSTHOG_CREATE_PIPELINE_DESTINATION_CONFIG_INPUT = {
  /**
   * Config
   * @description Config
   */
  config?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Delivery Rate 24H
   * @description Delivery Rate 24H
   */
  delivery_rate_24h?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Enabled
   * @description Enabled
   */
  enabled?: boolean;
  /**
   * Error
   * @description Error
   */
  error?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Plugin
   * @description Plugin
   */
  plugin?: number;
  /**
   * Plugin Info
   * @description Plugin Info
   */
  plugin_info?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Team Id
   * @description Team Id
   */
  team_id?: number;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_PIPELINE_DESTINATION_CONFIG tool output.
 */
type POSTHOG_CREATE_PIPELINE_DESTINATION_CONFIG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_PIPELINE_DESTINATION_CONFIG_JOB tool input.
 */
type POSTHOG_CREATE_PIPELINE_DESTINATION_CONFIG_JOB_INPUT = {
  /**
   * Config
   * @description Config
   */
  config?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Delivery Rate 24H
   * @description Delivery Rate 24H
   */
  delivery_rate_24h?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Enabled
   * @description Enabled
   */
  enabled?: boolean;
  /**
   * Error
   * @description Error
   */
  error?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Plugin
   * @description Plugin
   */
  plugin?: number;
  /**
   * Plugin Info
   * @description Plugin Info
   */
  plugin_info?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Team Id
   * @description Team Id
   */
  team_id?: number;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_PIPELINE_DESTINATION_CONFIG_JOB tool output.
 */
type POSTHOG_CREATE_PIPELINE_DESTINATION_CONFIG_JOB_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_PIPELINE_IMPORT_APPS_CONFIG_JOB tool input.
 */
type POSTHOG_CREATE_PIPELINE_IMPORT_APPS_CONFIG_JOB_INPUT = {
  /**
   * Config
   * @description Config
   */
  config?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Delivery Rate 24H
   * @description Delivery Rate 24H
   */
  delivery_rate_24h?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Enabled
   * @description Enabled
   */
  enabled?: boolean;
  /**
   * Error
   * @description Error
   */
  error?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Plugin
   * @description Plugin
   */
  plugin?: number;
  /**
   * Plugin Info
   * @description Plugin Info
   */
  plugin_info?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Team Id
   * @description Team Id
   */
  team_id?: number;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_PIPELINE_IMPORT_APPS_CONFIG_JOB tool output.
 */
type POSTHOG_CREATE_PIPELINE_IMPORT_APPS_CONFIG_JOB_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_PLUGIN_JOB_CONFIGURATION tool input.
 */
type POSTHOG_CREATE_PLUGIN_JOB_CONFIGURATION_INPUT = {
  /**
   * Config
   * @description Config
   */
  config?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Delivery Rate 24H
   * @description Delivery Rate 24H
   */
  delivery_rate_24h?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Enabled
   * @description Enabled
   */
  enabled?: boolean;
  /**
   * Error
   * @description Error
   */
  error?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Plugin
   * @description Plugin
   */
  plugin?: number;
  /**
   * Plugin Info
   * @description Plugin Info
   */
  plugin_info?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Team Id
   * @description Team Id
   */
  team_id?: number;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_PLUGIN_JOB_CONFIGURATION tool output.
 */
type POSTHOG_CREATE_PLUGIN_JOB_CONFIGURATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_PROJECT_ACTION_WITH_FORMAT tool input.
 */
type POSTHOG_CREATE_PROJECT_ACTION_WITH_FORMAT_INPUT = {
  /**
   * Bytecode Error
   * @description Bytecode Error
   */
  bytecode_error?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Is Action
   * @description Is Action
   * @default true
   */
  is_action: boolean;
  /**
   * Is Calculating
   * @description Is Calculating
   */
  is_calculating?: boolean;
  /**
   * Last Calculated At
   * Format: date-time
   * @description Last Calculated At
   */
  last_calculated_at?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Post To Slack
   * @description Post To Slack
   */
  post_to_slack?: boolean;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Slack Message Format
   * @description Slack Message Format
   */
  slack_message_format?: string;
  /**
   * Steps
   * @description Steps
   */
  steps?: {
      [key: string]: unknown;
  }[];
  /**
   * Tags
   * @description Tags
   */
  tags?: unknown[];
  /**
   * Team Id
   * @description Team Id
   */
  team_id?: number;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_PROJECT_ACTION_WITH_FORMAT tool output.
 */
type POSTHOG_CREATE_PROJECT_ACTION_WITH_FORMAT_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_PROJECT_COHORTS tool input.
 */
type POSTHOG_CREATE_PROJECT_COHORTS_INPUT = {
  /**
   * Count
   * @description Count
   */
  count?: number;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Errors Calculating
   * @description Errors Calculating
   */
  errors_calculating?: number;
  /**
   * Experiment Set
   * @description Experiment Set
   */
  experiment_set?: number[];
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Groups
   * @description Groups
   */
  groups?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Is Calculating
   * @description Is Calculating
   */
  is_calculating?: boolean;
  /**
   * Is Static
   * @description Is Static
   */
  is_static?: boolean;
  /**
   * Last Calculation
   * Format: date-time
   * @description Last Calculation
   */
  last_calculation?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Query
   * @description Query
   */
  query?: unknown;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_PROJECT_COHORTS tool output.
 */
type POSTHOG_CREATE_PROJECT_COHORTS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_PROJECT_DASHBOARD tool input.
 */
type POSTHOG_CREATE_PROJECT_DASHBOARD_INPUT = {
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Delete Insights
   * @description Delete Insights
   * @default false
   */
  delete_insights: boolean;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Is Shared
   * @description Is Shared
   */
  is_shared?: boolean;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Pinned
   * @description Pinned
   */
  pinned?: boolean;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Tags
   * @description Tags
   */
  tags?: unknown[];
  /**
   * Tiles
   * @description Tiles
   */
  tiles?: {
      [key: string]: unknown;
  }[];
  /**
   * Use Dashboard
   * @description Use Dashboard
   */
  use_dashboard?: number;
  /**
   * Use Template
   * @description Use Template
   */
  use_template?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_PROJECT_DASHBOARD tool output.
 */
type POSTHOG_CREATE_PROJECT_DASHBOARD_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_PROJECT_INSIGHTS_WITH_FORMAT_OPTION tool input.
 */
type POSTHOG_CREATE_PROJECT_INSIGHTS_WITH_FORMAT_OPTION_INPUT = {
  /**
   * Cache Target Age
   * @description The target age of the cached results for this insight.
   */
  cache_target_age?: string;
  /**
   * Columns
   * @description Columns
   */
  columns?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Dashboard Tiles
   * @description      A dashboard tile ID and dashboard_id for each of the dashboards that this insight is displayed on.
   */
  dashboard_tiles?: {
      [key: string]: unknown;
  }[];
  /**
   * Dashboards
   * @description          DEPRECATED. Will be removed in a future release. Use dashboard_tiles instead.         A dashboard ID for each of the dashboards that this insight is displayed on.
   */
  dashboards?: number[];
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Derived Name
   * @description Derived Name
   */
  derived_name?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Favorited
   * @description Favorited
   */
  favorited?: boolean;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Hogql
   * @description Hogql
   */
  hogql?: string;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Is Cached
   * @description Is Cached
   */
  is_cached?: string;
  /**
   * Is Sample
   * @description Is Sample
   */
  is_sample?: boolean;
  /**
   * Last Modified At
   * Format: date-time
   * @description Last Modified At
   */
  last_modified_at?: string;
  /**
   * Last Refresh
   * @description      The datetime this insight"s results were generated.     If added to one or more dashboards the insight can be refreshed separately on each.     Returns the appropriate last_refresh datetime for the context the insight is viewed in     (see from_dashboard query parameter).
   */
  last_refresh?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Next Allowed Client Refresh
   * @description      The earliest possible datetime at which we"ll allow the cached results for this insight to be refreshed     by querying the database.
   */
  next_allowed_client_refresh?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Query
   * @description Query node JSON string
   */
  query?: unknown;
  /**
   * Query Status
   * @description Query Status
   */
  query_status?: string;
  /**
   * Result
   * @description Result
   */
  result?: string;
  /**
   * Saved
   * @description Saved
   */
  saved?: boolean;
  /**
   * Short Id
   * @description Short Id
   */
  short_id?: string;
  /**
   * Tags
   * @description Tags
   */
  tags?: unknown[];
  /**
   * Timezone
   * @description The timezone this chart is displayed in.
   */
  timezone?: string;
  /**
   * Types
   * @description Types
   */
  types?: string;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_PROJECT_INSIGHTS_WITH_FORMAT_OPTION tool output.
 */
type POSTHOG_CREATE_PROJECT_INSIGHTS_WITH_FORMAT_OPTION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_PROJECT_PIPELINE_APP_CONFIGS tool input.
 */
type POSTHOG_CREATE_PROJECT_PIPELINE_APP_CONFIGS_INPUT = {
  /**
   * Config
   * @description Config
   */
  config?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Delivery Rate 24H
   * @description Delivery Rate 24H
   */
  delivery_rate_24h?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Enabled
   * @description Enabled
   */
  enabled?: boolean;
  /**
   * Error
   * @description Error
   */
  error?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Plugin
   * @description Plugin
   */
  plugin?: number;
  /**
   * Plugin Info
   * @description Plugin Info
   */
  plugin_info?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Team Id
   * @description Team Id
   */
  team_id?: number;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_PROJECT_PIPELINE_APP_CONFIGS tool output.
 */
type POSTHOG_CREATE_PROJECT_PIPELINE_APP_CONFIGS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_PROJECT_PIPELINE_FRONTEND_APP_JOB tool input.
 */
type POSTHOG_CREATE_PROJECT_PIPELINE_FRONTEND_APP_JOB_INPUT = {
  /**
   * Config
   * @description Config
   */
  config?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Delivery Rate 24H
   * @description Delivery Rate 24H
   */
  delivery_rate_24h?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Enabled
   * @description Enabled
   */
  enabled?: boolean;
  /**
   * Error
   * @description Error
   */
  error?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Plugin
   * @description Plugin
   */
  plugin?: number;
  /**
   * Plugin Info
   * @description Plugin Info
   */
  plugin_info?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Team Id
   * @description Team Id
   */
  team_id?: number;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_PROJECT_PIPELINE_FRONTEND_APP_JOB tool output.
 */
type POSTHOG_CREATE_PROJECT_PIPELINE_FRONTEND_APP_JOB_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_PROJECT_PIPELINE_TRANSFORMATION_CONFIG tool input.
 */
type POSTHOG_CREATE_PROJECT_PIPELINE_TRANSFORMATION_CONFIG_INPUT = {
  /**
   * Config
   * @description Config
   */
  config?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Delivery Rate 24H
   * @description Delivery Rate 24H
   */
  delivery_rate_24h?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Enabled
   * @description Enabled
   */
  enabled?: boolean;
  /**
   * Error
   * @description Error
   */
  error?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Plugin
   * @description Plugin
   */
  plugin?: number;
  /**
   * Plugin Info
   * @description Plugin Info
   */
  plugin_info?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Team Id
   * @description Team Id
   */
  team_id?: number;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_PROJECT_PIPELINE_TRANSFORMATION_CONFIG tool output.
 */
type POSTHOG_CREATE_PROJECT_PIPELINE_TRANSFORMATION_CONFIG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_PROJECT_PLUGIN_CONFIGURATION tool input.
 */
type POSTHOG_CREATE_PROJECT_PLUGIN_CONFIGURATION_INPUT = {
  /**
   * Config
   * @description Config
   */
  config?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Delivery Rate 24H
   * @description Delivery Rate 24H
   */
  delivery_rate_24h?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Enabled
   * @description Enabled
   */
  enabled?: boolean;
  /**
   * Error
   * @description Error
   */
  error?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Plugin
   * @description Plugin
   */
  plugin?: number;
  /**
   * Plugin Info
   * @description Plugin Info
   */
  plugin_info?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Team Id
   * @description Team Id
   */
  team_id?: number;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_PROJECT_PLUGIN_CONFIGURATION tool output.
 */
type POSTHOG_CREATE_PROJECT_PLUGIN_CONFIGURATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_PROJECT_SUBSCRIPTION_WITH_DELIVERY_OPTIONS tool input.
 */
type POSTHOG_CREATE_PROJECT_SUBSCRIPTION_WITH_DELIVERY_OPTIONS_INPUT = {
  /**
   * Bysetpos
   * @description Bysetpos
   */
  bysetpos?: number;
  /**
   * Byweekday
   * @description Byweekday
   */
  byweekday?: string[];
  /**
   * Count
   * @description Count
   */
  count?: number;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Dashboard
   * @description Dashboard
   */
  dashboard?: number;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Frequency
   * @description * `daily` - Daily * `weekly` - Weekly * `monthly` - Monthly * `yearly` - Yearly
   * @enum {string}
   */
  frequency?: "daily" | "weekly" | "monthly" | "yearly";
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Insight
   * @description Insight
   */
  insight?: number;
  /**
   * Interval
   * @description Interval
   */
  interval?: number;
  /**
   * Invite Message
   * @description Invite Message
   */
  invite_message?: string;
  /**
   * Next Delivery Date
   * Format: date-time
   * @description Next Delivery Date
   */
  next_delivery_date?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Start Date
   * Format: date-time
   * @description Start Date
   */
  start_date?: string;
  /**
   * Summary
   * @description Summary
   */
  summary?: string;
  /**
   * Target Type
   * @description * `email` - Email * `slack` - Slack * `webhook` - Webhook
   * @enum {string}
   */
  target_type?: "email" | "slack" | "webhook";
  /**
   * Target Value
   * @description Target Value
   */
  target_value?: string;
  /**
   * Title
   * @description Title
   */
  title?: string;
  /**
   * Until Date
   * Format: date-time
   * @description Until Date
   */
  until_date?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_PROJECT_SUBSCRIPTION_WITH_DELIVERY_OPTIONS tool output.
 */
type POSTHOG_CREATE_PROJECT_SUBSCRIPTION_WITH_DELIVERY_OPTIONS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_PROJECT_SURVEYS_WITH_QUESTIONS_AND_TARGETS tool input.
 */
type POSTHOG_CREATE_PROJECT_SURVEYS_WITH_QUESTIONS_AND_TARGETS_INPUT = {
  /**
   * Appearance
   * @description Appearance
   */
  appearance?: unknown;
  /**
   * Archived
   * @description Archived
   */
  archived?: boolean;
  /**
   * Conditions
   * @description Conditions
   */
  conditions?: unknown;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Current Iteration
   * @description Current Iteration
   */
  current_iteration?: number;
  /**
   * Current Iteration Start Date
   * Format: date-time
   * @description Current Iteration Start Date
   */
  current_iteration_start_date?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * End Date
   * Format: date-time
   * @description End Date
   */
  end_date?: string;
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Iteration Count
   * @description Iteration Count
   */
  iteration_count?: number;
  /**
   * Iteration Frequency Days
   * @description Iteration Frequency Days
   */
  iteration_frequency_days?: number;
  /**
   * Iteration Start Dates
   * @description Iteration Start Dates
   */
  iteration_start_dates?: string[];
  /**
   * Linked Flag Id
   * @description Linked Flag Id
   */
  linked_flag_id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Questions
   * @description          The `array` of questions included in the survey. Each question must conform to one of the defined question types: Basic, Link, Rating, or Multiple Choice.         Basic (open-ended question)         - `type`: `open`         - `question`: The text of the question.         - `description`: Optional description of the question.         - `descriptionContentType`: Content type of the description (`html` or `text`).         - `optional`: Whether the question is optional (`boolean`).         - `buttonText`: Text displayed on the submit button.         - `branching`: Branching logic for the question. See branching types below for details.         Link (a question with a link)         - `type`: `link`         - `question`: The text of the question.         - `description`: Optional description of the question.         - `descriptionContentType`: Content type of the description (`html` or `text`).         - `optional`: Whether the question is optional (`boolean`).         - `buttonText`: Text displayed on the submit button.         - `link`: The URL associated with the question.         - `branching`: Branching logic for the question. See branching types below for details.         Rating (a question with a rating scale)         - `type`: `rating`         - `question`: The text of the question.         - `description`: Optional description of the question.         - `descriptionContentType`: Content type of the description (`html` or `text`).         - `optional`: Whether the question is optional (`boolean`).         - `buttonText`: Text displayed on the submit button.         - `display`: Display style of the rating (`number` or `emoji`).         - `scale`: The scale of the rating (`number`).         - `lowerBoundLabel`: Label for the lower bound of the scale.         - `upperBoundLabel`: Label for the upper bound of the scale.         - `branching`: Branching logic for the question. See branching types below for details.         Multiple choice         - `type`: `single_choice` or `multiple_choice`         - `question`: The text of the question.         - `description`: Optional description of the question.         - `descriptionContentType`: Content type of the description (`html` or `text`).         - `optional`: Whether the question is optional (`boolean`).         - `buttonText`: Text displayed on the submit button.         - `choices`: An array of choices for the question.         - `shuffleOptions`: Whether to shuffle the order of the choices (`boolean`).         - `hasOpenChoice`: Whether the question allows an open-ended response (`boolean`).         - `branching`: Branching logic for the question. See branching types below for details.         Branching logic can be one of the following types:         Next question: Proceeds to the next question         ```json         {             "type": "next_question"         }         ```         End: Ends the survey, optionally displaying a confirmation message.         ```json         {             "type": "end"         }         ```         Response-based: Branches based on the response values. Available for the `rating` and `single_choice` question types.         ```json         {             "type": "response_based",             "responseValues": {                 "responseKey": "value"             }         }         ```         Specific question: Proceeds to a specific question by index.         ```json         {             "type": "specific_question",             "index": 2         }         ```
   */
  questions?: unknown;
  /**
   * Remove Targeting Flag
   * @description Remove Targeting Flag
   */
  remove_targeting_flag?: boolean;
  /**
   * Responses Limit
   * @description Responses Limit
   */
  responses_limit?: number;
  /**
   * Start Date
   * Format: date-time
   * @description Start Date
   */
  start_date?: string;
  /**
   * Targeting Flag Filters
   * @description Targeting Flag Filters
   */
  targeting_flag_filters?: unknown;
  /**
   * Targeting Flag Id
   * @description Targeting Flag Id
   */
  targeting_flag_id?: number;
  /**
   * Type
   * @description * `popover` - popover * `widget` - widget * `button` - button * `email` - email * `full_screen` - full screen * `api` - api
   * @enum {string}
   */
  type?: "popover" | "widget" | "button" | "email" | "full_screen" | "api";
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_PROJECT_SURVEYS_WITH_QUESTIONS_AND_TARGETS tool output.
 */
type POSTHOG_CREATE_PROJECT_SURVEYS_WITH_QUESTIONS_AND_TARGETS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_PROJECT_TIMING_INSIGHTS tool input.
 */
type POSTHOG_CREATE_PROJECT_TIMING_INSIGHTS_INPUT = {
  /**
   * Cache Target Age
   * @description The target age of the cached results for this insight.
   */
  cache_target_age?: string;
  /**
   * Columns
   * @description Columns
   */
  columns?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Dashboard Tiles
   * @description      A dashboard tile ID and dashboard_id for each of the dashboards that this insight is displayed on.
   */
  dashboard_tiles?: {
      [key: string]: unknown;
  }[];
  /**
   * Dashboards
   * @description          DEPRECATED. Will be removed in a future release. Use dashboard_tiles instead.         A dashboard ID for each of the dashboards that this insight is displayed on.
   */
  dashboards?: number[];
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Derived Name
   * @description Derived Name
   */
  derived_name?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Favorited
   * @description Favorited
   */
  favorited?: boolean;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Hogql
   * @description Hogql
   */
  hogql?: string;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Is Cached
   * @description Is Cached
   */
  is_cached?: string;
  /**
   * Is Sample
   * @description Is Sample
   */
  is_sample?: boolean;
  /**
   * Last Modified At
   * Format: date-time
   * @description Last Modified At
   */
  last_modified_at?: string;
  /**
   * Last Refresh
   * @description      The datetime this insight"s results were generated.     If added to one or more dashboards the insight can be refreshed separately on each.     Returns the appropriate last_refresh datetime for the context the insight is viewed in     (see from_dashboard query parameter).
   */
  last_refresh?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Next Allowed Client Refresh
   * @description      The earliest possible datetime at which we"ll allow the cached results for this insight to be refreshed     by querying the database.
   */
  next_allowed_client_refresh?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Query
   * @description Query node JSON string
   */
  query?: unknown;
  /**
   * Query Status
   * @description Query Status
   */
  query_status?: string;
  /**
   * Result
   * @description Result
   */
  result?: string;
  /**
   * Saved
   * @description Saved
   */
  saved?: boolean;
  /**
   * Short Id
   * @description Short Id
   */
  short_id?: string;
  /**
   * Tags
   * @description Tags
   */
  tags?: unknown[];
  /**
   * Timezone
   * @description The timezone this chart is displayed in.
   */
  timezone?: string;
  /**
   * Types
   * @description Types
   */
  types?: string;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_PROJECT_TIMING_INSIGHTS tool output.
 */
type POSTHOG_CREATE_PROJECT_TIMING_INSIGHTS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_QUERY_IN_PROJECT_BY_ID tool input.
 */
type POSTHOG_CREATE_QUERY_IN_PROJECT_BY_ID_INPUT = {
  /**
   * Async
   * @description (Experimental) Whether to run the query asynchronously. Defaults to False. If True, the `id` of the query can be used to check the status and to cancel it.
   */
  async?: boolean;
  /**
   * Client Query Id
   * @description Client provided query ID. Can be used to retrieve the status or cancel the query.
   */
  client_query_id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Query
   * @description Submit a JSON string representing a query for PostHog data analysis, for example a HogQL query. Example payload: ``` {"query": {"kind": "HogQLQuery", "query": "select * from events limit 100"}} ``` For more details on HogQL queries, see the [PostHog HogQL documentation](/docs/hogql#api-access).
   */
  query?: {
      [key: string]: unknown;
  };
  /**
   * Refresh
   * @description Refresh
   */
  refresh?: boolean;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_QUERY_IN_PROJECT_BY_ID tool output.
 */
type POSTHOG_CREATE_QUERY_IN_PROJECT_BY_ID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_RETRIEVE_RETENTION_INSIGHTS_FOR_PROJECT tool input.
 */
type POSTHOG_CREATE_RETRIEVE_RETENTION_INSIGHTS_FOR_PROJECT_INPUT = {
  /**
   * Cache Target Age
   * @description The target age of the cached results for this insight.
   */
  cache_target_age?: string;
  /**
   * Columns
   * @description Columns
   */
  columns?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Dashboard Tiles
   * @description      A dashboard tile ID and dashboard_id for each of the dashboards that this insight is displayed on.
   */
  dashboard_tiles?: {
      [key: string]: unknown;
  }[];
  /**
   * Dashboards
   * @description          DEPRECATED. Will be removed in a future release. Use dashboard_tiles instead.         A dashboard ID for each of the dashboards that this insight is displayed on.
   */
  dashboards?: number[];
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Derived Name
   * @description Derived Name
   */
  derived_name?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Favorited
   * @description Favorited
   */
  favorited?: boolean;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Hogql
   * @description Hogql
   */
  hogql?: string;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Is Cached
   * @description Is Cached
   */
  is_cached?: string;
  /**
   * Is Sample
   * @description Is Sample
   */
  is_sample?: boolean;
  /**
   * Last Modified At
   * Format: date-time
   * @description Last Modified At
   */
  last_modified_at?: string;
  /**
   * Last Refresh
   * @description      The datetime this insight"s results were generated.     If added to one or more dashboards the insight can be refreshed separately on each.     Returns the appropriate last_refresh datetime for the context the insight is viewed in     (see from_dashboard query parameter).
   */
  last_refresh?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Next Allowed Client Refresh
   * @description      The earliest possible datetime at which we"ll allow the cached results for this insight to be refreshed     by querying the database.
   */
  next_allowed_client_refresh?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Query
   * @description Query node JSON string
   */
  query?: unknown;
  /**
   * Query Status
   * @description Query Status
   */
  query_status?: string;
  /**
   * Result
   * @description Result
   */
  result?: string;
  /**
   * Saved
   * @description Saved
   */
  saved?: boolean;
  /**
   * Short Id
   * @description Short Id
   */
  short_id?: string;
  /**
   * Tags
   * @description Tags
   */
  tags?: unknown[];
  /**
   * Timezone
   * @description The timezone this chart is displayed in.
   */
  timezone?: string;
  /**
   * Types
   * @description Types
   */
  types?: string;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_RETRIEVE_RETENTION_INSIGHTS_FOR_PROJECT tool output.
 */
type POSTHOG_CREATE_RETRIEVE_RETENTION_INSIGHTS_FOR_PROJECT_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_SESSION_RECORDING_IN_PLAYLIST tool input.
 */
type POSTHOG_CREATE_SESSION_RECORDING_IN_PLAYLIST_INPUT = {
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Derived Name
   * @description Derived Name
   */
  derived_name?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Last Modified At
   * Format: date-time
   * @description Last Modified At
   */
  last_modified_at?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Pinned
   * @description Pinned
   */
  pinned?: boolean;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Session Recording Id
   * @description Session Recording Id
   */
  session_recording_id?: string;
  /**
   * Short Id
   * @description Short Id
   */
  short_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_SESSION_RECORDING_IN_PLAYLIST tool output.
 */
type POSTHOG_CREATE_SESSION_RECORDING_IN_PLAYLIST_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_SESSION_RECORDING_PLAYLISTS tool input.
 */
type POSTHOG_CREATE_SESSION_RECORDING_PLAYLISTS_INPUT = {
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Derived Name
   * @description Derived Name
   */
  derived_name?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Last Modified At
   * Format: date-time
   * @description Last Modified At
   */
  last_modified_at?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Pinned
   * @description Pinned
   */
  pinned?: boolean;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Short Id
   * @description Short Id
   */
  short_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_SESSION_RECORDING_PLAYLISTS tool output.
 */
type POSTHOG_CREATE_SESSION_RECORDING_PLAYLISTS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_SESSION_RECORDING_SUMMARY tool input.
 */
type POSTHOG_CREATE_SESSION_RECORDING_SUMMARY_INPUT = {
  /**
   * Active Seconds
   * @description Active Seconds
   */
  active_seconds?: number;
  /**
   * Click Count
   * @description Click Count
   */
  click_count?: number;
  /**
   * Console Error Count
   * @description Console Error Count
   */
  console_error_count?: number;
  /**
   * Console Log Count
   * @description Console Log Count
   */
  console_log_count?: number;
  /**
   * Console Warn Count
   * @description Console Warn Count
   */
  console_warn_count?: number;
  /**
   * Distinct Id
   * @description Distinct Id
   */
  distinct_id?: string;
  /**
   * End Time
   * Format: date-time
   * @description End Time
   */
  end_time?: string;
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Inactive Seconds
   * @description Inactive Seconds
   */
  inactive_seconds?: number;
  /**
   * Keypress Count
   * @description Keypress Count
   */
  keypress_count?: number;
  /**
   * Mouse Activity Count
   * @description Mouse Activity Count
   */
  mouse_activity_count?: number;
  /**
   * Person  Created  At
   * Format: date-time
   * @description Created At
   */
  person__created__at?: string;
  /**
   * Person  Distinct  Ids
   * @description Distinct Ids
   */
  person__distinct__ids?: string;
  /**
   * Person  Id
   * @description Id
   */
  person__id?: number;
  /**
   * Person  Name
   * @description Name
   */
  person__name?: string;
  /**
   * Person  Properties
   * @description Properties
   */
  person__properties?: unknown;
  /**
   * Person  Uuid
   * Format: uuid
   * @description Uuid
   */
  person__uuid?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Recording Duration
   * @description Recording Duration
   */
  recording_duration?: number;
  /**
   * Snapshot Source
   * @description Snapshot Source
   */
  snapshot_source?: string;
  /**
   * Start Time
   * Format: date-time
   * @description Start Time
   */
  start_time?: string;
  /**
   * Start Url
   * @description Start Url
   */
  start_url?: string;
  /**
   * Storage
   * @description Storage
   */
  storage?: string;
  /**
   * Viewed
   * @description Viewed
   */
  viewed?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_SESSION_RECORDING_SUMMARY tool output.
 */
type POSTHOG_CREATE_SESSION_RECORDING_SUMMARY_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CREATE_STATIC_COHORT_FOR_FEATURE_FLAG tool input.
 */
type POSTHOG_CREATE_STATIC_COHORT_FOR_FEATURE_FLAG_INPUT = {
  /**
   * Active
   * @description Active
   */
  active?: boolean;
  /**
   * Analytics Dashboards
   * @description Analytics Dashboards
   */
  analytics_dashboards?: number[];
  /**
   * Can Edit
   * @description Can Edit
   */
  can_edit?: boolean;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Ensure Experience Continuity
   * @description Ensure Experience Continuity
   */
  ensure_experience_continuity?: boolean;
  /**
   * Experiment Set
   * @description Experiment Set
   */
  experiment_set?: number[];
  /**
   * Features
   * @description Features
   */
  features?: {
      [key: string]: unknown;
  };
  /**
   * Filters
   * @description Filters
   */
  filters?: {
      [key: string]: unknown;
  };
  /**
   * Has Enriched Analytics
   * @description Has Enriched Analytics
   */
  has_enriched_analytics?: boolean;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Is Simple Flag
   * @description Is Simple Flag
   */
  is_simple_flag?: boolean;
  /**
   * Key
   * @description Key
   */
  key?: string;
  /**
   * Name
   * @description contains the description for the flag (field name `name` is kept for backwards-compatibility)
   */
  name?: string;
  /**
   * Performed Rollback
   * @description Performed Rollback
   */
  performed_rollback?: boolean;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Rollback Conditions
   * @description Rollback Conditions
   */
  rollback_conditions?: unknown;
  /**
   * Rollout Percentage
   * @description Rollout Percentage
   */
  rollout_percentage?: number;
  /**
   * Surveys
   * @description Surveys
   */
  surveys?: {
      [key: string]: unknown;
  };
  /**
   * Tags
   * @description Tags
   */
  tags?: unknown[];
  /**
   * Usage Dashboard
   * @description Usage Dashboard
   */
  usage_dashboard?: number;
};

/**
 * Type of POSTHOG's POSTHOG_CREATE_STATIC_COHORT_FOR_FEATURE_FLAG tool output.
 */
type POSTHOG_CREATE_STATIC_COHORT_FOR_FEATURE_FLAG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CRUD_OPERATIONS_FOR_PROJECT_ANNOTATIONS tool input.
 */
type POSTHOG_CRUD_OPERATIONS_FOR_PROJECT_ANNOTATIONS_INPUT = {
  /**
   * Content
   * @description Content
   */
  content?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Creation Type
   * @description * `USR` - user * `GIT` - GitHub
   * @enum {string}
   */
  creation_type?: "USR" | "GIT";
  /**
   * Dashboard Id
   * @description Dashboard Id
   */
  dashboard_id?: number;
  /**
   * Dashboard Item
   * @description Dashboard Item
   */
  dashboard_item?: number;
  /**
   * Dashboard Name
   * @description Dashboard Name
   */
  dashboard_name?: string;
  /**
   * Date Marker
   * Format: date-time
   * @description Date Marker
   */
  date_marker?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Insight Derived Name
   * @description Insight Derived Name
   */
  insight_derived_name?: string;
  /**
   * Insight Name
   * @description Insight Name
   */
  insight_name?: string;
  /**
   * Insight Short Id
   * @description Insight Short Id
   */
  insight_short_id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Scope
   * @description * `dashboard_item` - insight * `dashboard` - dashboard * `project` - project * `organization` - organization
   * @enum {string}
   */
  scope?: "dashboard_item" | "dashboard" | "project" | "organization";
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CRUD_OPERATIONS_FOR_PROJECT_ANNOTATIONS tool output.
 */
type POSTHOG_CRUD_OPERATIONS_FOR_PROJECT_ANNOTATIONS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_CUSTOM_PROJECT_FUNNEL_ANALYTICS_WITH_ADVANCED_OPTIONS tool input.
 */
type POSTHOG_CUSTOM_PROJECT_FUNNEL_ANALYTICS_WITH_ADVANCED_OPTIONS_INPUT = {
  /**
   * Actions
   * @description Actions to filter on. One of `events` or `actions` is required.
   */
  actions?: {
      [key: string]: unknown;
  }[];
  /**
   * Aggregation Group Type Index
   * @description Aggregate by users or by groups. `0` means user, `>0` means a group. See interface for the corresponding ID of the group.
   * @default 0
   */
  aggregation_group_type_index: number;
  /**
   * Breakdown
   * @description A property or cohort to break down on. You can select the type of the property with breakdown_type. - `event` (default): a property key - `person`: a person property key - `cohort`: an array of cohort IDs (ie `[9581,5812]`)
   */
  breakdown?: string;
  /**
   * Breakdown Limit
   * @description Breakdown Limit
   * @default 10
   */
  breakdown_limit: number;
  /**
   * Date From
   * @description What date to filter the results from. Can either be a date `2021-01-01`, or a relative date, like `-7d` for last seven days, `-1m` for last month, `mStart` for start of the month or `yStart` for the start of the year.
   * @default -7d
   */
  date_from: string;
  /**
   * Date To
   * @description What date to filter the results to. Can either be a date `2021-01-01`, or a relative date, like `-7d` for last seven days, `-1m` for last month, `mStart` for start of the month or `yStart` for the start of the year.
   * @default -7d
   */
  date_to: string;
  /**
   * Events
   * @description Events to filter on. One of `events` or `actions` is required.
   */
  events?: {
      [key: string]: unknown;
  }[];
  /**
   * Exclusions
   * @description Exclude users/groups that completed the specified event between two specific steps. Note that these users/groups will be completely excluded from the entire funnel.
   */
  exclusions?: {
      [key: string]: unknown;
  }[];
  /**
   * Filter Test Accounts
   * @description Whether to filter out internal and test accounts. See "project settings" in your PostHog account for the filters.
   * @default false
   */
  filter_test_accounts: boolean;
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Funnel Window Days
   * @description (DEPRECATED) Funnel window size in days. Use `funnel_window_interval` and `funnel_window_interval_type`
   * @default 14
   */
  funnel_window_days: number;
  /**
   * Funnel Window Interval
   * @description Funnel window size. Set in combination with funnel_window_interval, so defaults to "days".
   * @default 14
   */
  funnel_window_interval: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_CUSTOM_PROJECT_FUNNEL_ANALYTICS_WITH_ADVANCED_OPTIONS tool output.
 */
type POSTHOG_CUSTOM_PROJECT_FUNNEL_ANALYTICS_WITH_ADVANCED_OPTIONS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_DELETE_ORGANIZATION_BY_UUID tool input.
 */
type POSTHOG_DELETE_ORGANIZATION_BY_UUID_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this organization.
   */
  id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_DELETE_ORGANIZATION_BY_UUID tool output.
 */
type POSTHOG_DELETE_ORGANIZATION_BY_UUID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_DELETE_ORGANIZATION_PROJECT tool input.
 */
type POSTHOG_DELETE_ORGANIZATION_PROJECT_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this team (soon to be environment).
   */
  id?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_DELETE_ORGANIZATION_PROJECT tool output.
 */
type POSTHOG_DELETE_ORGANIZATION_PROJECT_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_DELETE_PERSON_AND_OPTIONALLY_ASSOCIATED_EVENTS tool input.
 */
type POSTHOG_DELETE_PERSON_AND_OPTIONALLY_ASSOCIATED_EVENTS_INPUT = {
  /**
   * Delete Events
   * @description If true, a task to delete all events associated with this person will be created and queued. The task does not run immediately and instead is batched together and at 5AM UTC every Sunday (controlled by environment variable CLEAR_CLICKHOUSE_REMOVED_DATA_SCHEDULE_CRON)
   * @default false
   */
  delete_events: boolean;
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Id
   * @description A unique integer value identifying this person.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_DELETE_PERSON_AND_OPTIONALLY_ASSOCIATED_EVENTS tool output.
 */
type POSTHOG_DELETE_PERSON_AND_OPTIONALLY_ASSOCIATED_EVENTS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_DELETE_SESSION_RECORDING_BY_UUID tool input.
 */
type POSTHOG_DELETE_SESSION_RECORDING_BY_UUID_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this session recording.
   */
  id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_DELETE_SESSION_RECORDING_BY_UUID tool output.
 */
type POSTHOG_DELETE_SESSION_RECORDING_BY_UUID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_DELETE_SURVEY_BY_ID tool input.
 */
type POSTHOG_DELETE_SURVEY_BY_ID_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this survey.
   */
  id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_DELETE_SURVEY_BY_ID tool output.
 */
type POSTHOG_DELETE_SURVEY_BY_ID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_ENABLE_PROJECT_EARLY_ACCESS_FEATURE tool input.
 */
type POSTHOG_ENABLE_PROJECT_EARLY_ACCESS_FEATURE_INPUT = {
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Documentation Url
   * Format: uri
   * @description Documentation Url
   */
  documentation_url?: string;
  /**
   * Feature Flag Id
   * @description Feature Flag Id
   */
  feature_flag_id?: number;
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Stage
   * @description * `draft` - draft * `concept` - concept * `alpha` - alpha * `beta` - beta * `general-availability` - general availability * `archived` - archived
   * @enum {string}
   */
  stage?: "draft" | "concept" | "alpha" | "beta" | "general-availability" | "archived";
};

/**
 * Type of POSTHOG's POSTHOG_ENABLE_PROJECT_EARLY_ACCESS_FEATURE tool output.
 */
type POSTHOG_ENABLE_PROJECT_EARLY_ACCESS_FEATURE_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_FETCH_BATCH_EXPORT_DETAILS_VIA_UUID tool input.
 */
type POSTHOG_FETCH_BATCH_EXPORT_DETAILS_VIA_UUID_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this batch export.
   */
  id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_FETCH_BATCH_EXPORT_DETAILS_VIA_UUID tool output.
 */
type POSTHOG_FETCH_BATCH_EXPORT_DETAILS_VIA_UUID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_FETCH_EXPORT_UNSUBSCRIBE_SETTINGS tool input.
 */
type POSTHOG_FETCH_EXPORT_UNSUBSCRIBE_SETTINGS_INPUT = {
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_FETCH_EXPORT_UNSUBSCRIBE_SETTINGS tool output.
 */
type POSTHOG_FETCH_EXPORT_UNSUBSCRIBE_SETTINGS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_FETCH_FRONTEND_APP_CONFIG_STATUS tool input.
 */
type POSTHOG_FETCH_FRONTEND_APP_CONFIG_STATUS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin config.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_FETCH_FRONTEND_APP_CONFIG_STATUS tool output.
 */
type POSTHOG_FETCH_FRONTEND_APP_CONFIG_STATUS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_FETCH_ORGANIZATION_DETAILS_BY_UUID tool input.
 */
type POSTHOG_FETCH_ORGANIZATION_DETAILS_BY_UUID_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this organization.
   */
  id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_FETCH_ORGANIZATION_DETAILS_BY_UUID tool output.
 */
type POSTHOG_FETCH_ORGANIZATION_DETAILS_BY_UUID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_FETCH_ORGANIZATION_PIPELINE_APP_REPOSITORIES tool input.
 */
type POSTHOG_FETCH_ORGANIZATION_PIPELINE_APP_REPOSITORIES_INPUT = {
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_FETCH_ORGANIZATION_PIPELINE_APP_REPOSITORIES tool output.
 */
type POSTHOG_FETCH_ORGANIZATION_PIPELINE_APP_REPOSITORIES_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_FETCH_PIPELINE_DESTINATION_DETAILS tool input.
 */
type POSTHOG_FETCH_PIPELINE_DESTINATION_DETAILS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin config.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_FETCH_PIPELINE_DESTINATION_DETAILS tool output.
 */
type POSTHOG_FETCH_PIPELINE_DESTINATION_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_FETCH_PIPELINE_TRANSFORMATION_DETAILS tool input.
 */
type POSTHOG_FETCH_PIPELINE_TRANSFORMATION_DETAILS_INPUT = {
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_FETCH_PIPELINE_TRANSFORMATION_DETAILS tool output.
 */
type POSTHOG_FETCH_PIPELINE_TRANSFORMATION_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_FETCH_PROJECT_EXPERIMENT_SECONDARY_DATA tool input.
 */
type POSTHOG_FETCH_PROJECT_EXPERIMENT_SECONDARY_DATA_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this experiment.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_FETCH_PROJECT_EXPERIMENT_SECONDARY_DATA tool output.
 */
type POSTHOG_FETCH_PROJECT_EXPERIMENT_SECONDARY_DATA_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_FETCH_PROJECT_SURVEY_ACTIVITY_LOG tool input.
 */
type POSTHOG_FETCH_PROJECT_SURVEY_ACTIVITY_LOG_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_FETCH_PROJECT_SURVEY_ACTIVITY_LOG tool output.
 */
type POSTHOG_FETCH_PROJECT_SURVEY_ACTIVITY_LOG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_FETCH_SESSION_RECORDING_PLAYLIST_DETAILS tool input.
 */
type POSTHOG_FETCH_SESSION_RECORDING_PLAYLIST_DETAILS_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Short Id
   * @description Short Id
   */
  short_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_FETCH_SESSION_RECORDING_PLAYLIST_DETAILS tool output.
 */
type POSTHOG_FETCH_SESSION_RECORDING_PLAYLIST_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_FLAG_ANNOTATION_AS_DELETED tool input.
 */
type POSTHOG_FLAG_ANNOTATION_AS_DELETED_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this annotation.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_FLAG_ANNOTATION_AS_DELETED tool output.
 */
type POSTHOG_FLAG_ANNOTATION_AS_DELETED_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_GENERATE_PROJECT_FUNNEL_CORRELATION_INSIGHT tool input.
 */
type POSTHOG_GENERATE_PROJECT_FUNNEL_CORRELATION_INSIGHT_INPUT = {
  /**
   * Cache Target Age
   * @description The target age of the cached results for this insight.
   */
  cache_target_age?: string;
  /**
   * Columns
   * @description Columns
   */
  columns?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Dashboard Tiles
   * @description      A dashboard tile ID and dashboard_id for each of the dashboards that this insight is displayed on.
   */
  dashboard_tiles?: {
      [key: string]: unknown;
  }[];
  /**
   * Dashboards
   * @description          DEPRECATED. Will be removed in a future release. Use dashboard_tiles instead.         A dashboard ID for each of the dashboards that this insight is displayed on.
   */
  dashboards?: number[];
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Derived Name
   * @description Derived Name
   */
  derived_name?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Favorited
   * @description Favorited
   */
  favorited?: boolean;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Hogql
   * @description Hogql
   */
  hogql?: string;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Is Cached
   * @description Is Cached
   */
  is_cached?: string;
  /**
   * Is Sample
   * @description Is Sample
   */
  is_sample?: boolean;
  /**
   * Last Modified At
   * Format: date-time
   * @description Last Modified At
   */
  last_modified_at?: string;
  /**
   * Last Refresh
   * @description      The datetime this insight"s results were generated.     If added to one or more dashboards the insight can be refreshed separately on each.     Returns the appropriate last_refresh datetime for the context the insight is viewed in     (see from_dashboard query parameter).
   */
  last_refresh?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Next Allowed Client Refresh
   * @description      The earliest possible datetime at which we"ll allow the cached results for this insight to be refreshed     by querying the database.
   */
  next_allowed_client_refresh?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Query
   * @description Query node JSON string
   */
  query?: unknown;
  /**
   * Query Status
   * @description Query Status
   */
  query_status?: string;
  /**
   * Result
   * @description Result
   */
  result?: string;
  /**
   * Saved
   * @description Saved
   */
  saved?: boolean;
  /**
   * Short Id
   * @description Short Id
   */
  short_id?: string;
  /**
   * Tags
   * @description Tags
   */
  tags?: unknown[];
  /**
   * Timezone
   * @description The timezone this chart is displayed in.
   */
  timezone?: string;
  /**
   * Types
   * @description Types
   */
  types?: string;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_GENERATE_PROJECT_FUNNEL_CORRELATION_INSIGHT tool output.
 */
type POSTHOG_GENERATE_PROJECT_FUNNEL_CORRELATION_INSIGHT_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_GET_UNUSED_ORG_PIPELINE_FRONTEND_APPS tool input.
 */
type POSTHOG_GET_UNUSED_ORG_PIPELINE_FRONTEND_APPS_INPUT = {
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_GET_UNUSED_ORG_PIPELINE_FRONTEND_APPS tool output.
 */
type POSTHOG_GET_UNUSED_ORG_PIPELINE_FRONTEND_APPS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_INITIATE_DOMAIN_VERIFICATION_WITH_SAML_CONFIG tool input.
 */
type POSTHOG_INITIATE_DOMAIN_VERIFICATION_WITH_SAML_CONFIG_INPUT = {
  /**
   * Domain
   * @description Domain
   */
  domain?: string;
  /**
   * Has Saml
   * @description Returns whether SAML is configured for the instance. Does not validate the user has the required license (that check is performed in other places).
   */
  has_saml?: boolean;
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Is Verified
   * @description Determines whether a domain is verified or not.
   */
  is_verified?: boolean;
  /**
   * Jit Provisioning Enabled
   * @description Jit Provisioning Enabled
   */
  jit_provisioning_enabled?: boolean;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
  /**
   * Saml Acs Url
   * @description Saml Acs Url
   */
  saml_acs_url?: string;
  /**
   * Saml Entity Id
   * @description Saml Entity Id
   */
  saml_entity_id?: string;
  /**
   * Saml X509 Cert
   * @description Saml X509 Cert
   */
  saml_x509_cert?: string;
  /**
   * Sso Enforcement
   * @description Sso Enforcement
   */
  sso_enforcement?: string;
  /**
   * Verification Challenge
   * @description Verification Challenge
   */
  verification_challenge?: string;
  /**
   * Verified At
   * Format: date-time
   * @description Verified At
   */
  verified_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_INITIATE_DOMAIN_VERIFICATION_WITH_SAML_CONFIG tool output.
 */
type POSTHOG_INITIATE_DOMAIN_VERIFICATION_WITH_SAML_CONFIG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_INITIATE_PIPELINE_TRANSFORMATION_JOB tool input.
 */
type POSTHOG_INITIATE_PIPELINE_TRANSFORMATION_JOB_INPUT = {
  /**
   * Config
   * @description Config
   */
  config?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Delivery Rate 24H
   * @description Delivery Rate 24H
   */
  delivery_rate_24h?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Enabled
   * @description Enabled
   */
  enabled?: boolean;
  /**
   * Error
   * @description Error
   */
  error?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Plugin
   * @description Plugin
   */
  plugin?: number;
  /**
   * Plugin Info
   * @description Plugin Info
   */
  plugin_info?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Team Id
   * @description Team Id
   */
  team_id?: number;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_INITIATE_PIPELINE_TRANSFORMATION_JOB tool output.
 */
type POSTHOG_INITIATE_PIPELINE_TRANSFORMATION_JOB_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_AND_FILTER_PROJECT_EVENTS tool input.
 */
type POSTHOG_LIST_AND_FILTER_PROJECT_EVENTS_INPUT = {
  /**
   * After
   * @description Only return events with a timestamp after this time.
   */
  after?: string;
  /**
   * Before
   * @description Only return events with a timestamp before this time.
   */
  before?: string;
  /**
   * Distinct Id
   * @description Filter list by distinct id.
   */
  distinct_id?: number;
  /**
   * Event
   * @description Filter list by event. For example `user sign up` or `$pageview`.
   */
  event?: string;
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Limit
   * @description The maximum number of results to return
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Person Id
   * @description Filter list by person id.
   */
  person_id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Properties
   * @description Filter events by event property, person property, cohort, groups and more.
   */
  properties?: {
      [key: string]: unknown;
  }[];
  /**
   * Select
   * @description (Experimental) JSON-serialized array of HogQL expressions to return
   */
  select?: string[];
  /**
   * Where
   * @description (Experimental) JSON-serialized array of HogQL expressions that must pass
   */
  where?: string[];
};

/**
 * Type of POSTHOG's POSTHOG_LIST_AND_FILTER_PROJECT_EVENTS tool output.
 */
type POSTHOG_LIST_AND_FILTER_PROJECT_EVENTS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_AND_MANAGE_PROJECT_ANNOTATIONS tool input.
 */
type POSTHOG_LIST_AND_MANAGE_PROJECT_ANNOTATIONS_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Search
   * @description A search term.
   */
  search?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_AND_MANAGE_PROJECT_ANNOTATIONS tool output.
 */
type POSTHOG_LIST_AND_MANAGE_PROJECT_ANNOTATIONS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_AND_MANAGE_PROJECT_FEATURE_FLAGS tool input.
 */
type POSTHOG_LIST_AND_MANAGE_PROJECT_FEATURE_FLAGS_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_AND_MANAGE_PROJECT_FEATURE_FLAGS tool output.
 */
type POSTHOG_LIST_AND_MANAGE_PROJECT_FEATURE_FLAGS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_BATCH_EXPORT_RUNS_WITH_PAGINATION_AND_ORDERING tool input.
 */
type POSTHOG_LIST_BATCH_EXPORT_RUNS_WITH_PAGINATION_AND_ORDERING_INPUT = {
  /**
   * Batch Export Id
   * @description Batch Export Id
   */
  batch_export_id?: string;
  /**
   * Cursor
   * @description The pagination cursor value.
   */
  cursor?: string;
  /**
   * Ordering
   * @description Which field to use when ordering the results.
   */
  ordering?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_BATCH_EXPORT_RUNS_WITH_PAGINATION_AND_ORDERING tool output.
 */
type POSTHOG_LIST_BATCH_EXPORT_RUNS_WITH_PAGINATION_AND_ORDERING_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_DASHBOARD_SHARING_CONFIGS tool input.
 */
type POSTHOG_LIST_DASHBOARD_SHARING_CONFIGS_INPUT = {
  /**
   * Dashboard Id
   * @description Dashboard Id
   */
  dashboard_id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_DASHBOARD_SHARING_CONFIGS tool output.
 */
type POSTHOG_LIST_DASHBOARD_SHARING_CONFIGS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_FEATURE_FLAG_ROLE_ACCESS_DETAILS tool input.
 */
type POSTHOG_LIST_FEATURE_FLAG_ROLE_ACCESS_DETAILS_INPUT = {
  /**
   * Feature Flag Id
   * @description Feature Flag Id
   */
  feature_flag_id?: number;
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_FEATURE_FLAG_ROLE_ACCESS_DETAILS tool output.
 */
type POSTHOG_LIST_FEATURE_FLAG_ROLE_ACCESS_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_NOTEBOOKS_WITH_FILTERS_AND_PAGINATION tool input.
 */
type POSTHOG_LIST_NOTEBOOKS_WITH_FILTERS_AND_PAGINATION_INPUT = {
  /**
   * Contains
   * @description Filter for notebooks that match a provided filter.                 Each match pair is separated by a colon,                 multiple match pairs can be sent separated by a space or a comma
   */
  contains?: string;
  /**
   * Created By
   * @description The UUID of the Notebook"s creator
   */
  created_by?: number;
  /**
   * Date From
   * @description Filter for notebooks created after this date & time
   */
  date_from?: string;
  /**
   * Date To
   * @description Filter for notebooks created before this date & time
   */
  date_to?: string;
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * User
   * @description If any value is provided for this parameter, return notebooks created by the logged in user.
   */
  user?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_NOTEBOOKS_WITH_FILTERS_AND_PAGINATION tool output.
 */
type POSTHOG_LIST_NOTEBOOKS_WITH_FILTERS_AND_PAGINATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_OF_PROJECT_S_SESSION_RECORDING_PLAYLISTS tool input.
 */
type POSTHOG_LIST_OF_PROJECT_S_SESSION_RECORDING_PLAYLISTS_INPUT = {
  /**
   * Created By
   * @description Created By
   */
  created_by?: number;
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Short Id
   * @description Short Id
   */
  short_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_OF_PROJECT_S_SESSION_RECORDING_PLAYLISTS tool output.
 */
type POSTHOG_LIST_OF_PROJECT_S_SESSION_RECORDING_PLAYLISTS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_ORGANIZATION_DOMAINS_WITH_PAGINATION tool input.
 */
type POSTHOG_LIST_ORGANIZATION_DOMAINS_WITH_PAGINATION_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_ORGANIZATION_DOMAINS_WITH_PAGINATION tool output.
 */
type POSTHOG_LIST_ORGANIZATION_DOMAINS_WITH_PAGINATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_ORGANIZATION_INVITES_WITH_PAGINATION tool input.
 */
type POSTHOG_LIST_ORGANIZATION_INVITES_WITH_PAGINATION_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_ORGANIZATION_INVITES_WITH_PAGINATION tool output.
 */
type POSTHOG_LIST_ORGANIZATION_INVITES_WITH_PAGINATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_ORGANIZATION_MEMBERS_WITH_PAGINATION tool input.
 */
type POSTHOG_LIST_ORGANIZATION_MEMBERS_WITH_PAGINATION_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_ORGANIZATION_MEMBERS_WITH_PAGINATION tool output.
 */
type POSTHOG_LIST_ORGANIZATION_MEMBERS_WITH_PAGINATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_ORGANIZATION_PLUGINS_WITH_PAGINATION tool input.
 */
type POSTHOG_LIST_ORGANIZATION_PLUGINS_WITH_PAGINATION_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_ORGANIZATION_PLUGINS_WITH_PAGINATION tool output.
 */
type POSTHOG_LIST_ORGANIZATION_PLUGINS_WITH_PAGINATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_ORGANIZATION_ROLES_WITH_PAGINATION tool input.
 */
type POSTHOG_LIST_ORGANIZATION_ROLES_WITH_PAGINATION_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_ORGANIZATION_ROLES_WITH_PAGINATION tool output.
 */
type POSTHOG_LIST_ORGANIZATION_ROLES_WITH_PAGINATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_ORGANIZATION_S_BATCH_EXPORTS_WITH_PAGINATION tool input.
 */
type POSTHOG_LIST_ORGANIZATION_S_BATCH_EXPORTS_WITH_PAGINATION_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_ORGANIZATION_S_BATCH_EXPORTS_WITH_PAGINATION tool output.
 */
type POSTHOG_LIST_ORGANIZATION_S_BATCH_EXPORTS_WITH_PAGINATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_ORGANIZATION_S_PAGINATED_PROXY_RECORDS tool input.
 */
type POSTHOG_LIST_ORGANIZATION_S_PAGINATED_PROXY_RECORDS_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_ORGANIZATION_S_PAGINATED_PROXY_RECORDS tool output.
 */
type POSTHOG_LIST_ORGANIZATION_S_PAGINATED_PROXY_RECORDS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_ORGANIZATION_S_PIPELINE_DESTINATIONS tool input.
 */
type POSTHOG_LIST_ORGANIZATION_S_PIPELINE_DESTINATIONS_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_ORGANIZATION_S_PIPELINE_DESTINATIONS tool output.
 */
type POSTHOG_LIST_ORGANIZATION_S_PIPELINE_DESTINATIONS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_ORGANIZATION_S_PIPELINE_FRONTEND_APPS tool input.
 */
type POSTHOG_LIST_ORGANIZATION_S_PIPELINE_FRONTEND_APPS_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_ORGANIZATION_S_PIPELINE_FRONTEND_APPS tool output.
 */
type POSTHOG_LIST_ORGANIZATION_S_PIPELINE_FRONTEND_APPS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_ORGANIZATION_S_PIPELINE_IMPORT_APPS tool input.
 */
type POSTHOG_LIST_ORGANIZATION_S_PIPELINE_IMPORT_APPS_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_ORGANIZATION_S_PIPELINE_IMPORT_APPS tool output.
 */
type POSTHOG_LIST_ORGANIZATION_S_PIPELINE_IMPORT_APPS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_ORGANIZATION_S_PIPELINE_TRANSFORMATIONS tool input.
 */
type POSTHOG_LIST_ORGANIZATION_S_PIPELINE_TRANSFORMATIONS_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_ORGANIZATION_S_PIPELINE_TRANSFORMATIONS tool output.
 */
type POSTHOG_LIST_ORGANIZATION_S_PIPELINE_TRANSFORMATIONS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_OR_DELETE_PERSONS_WITH_OPTIONAL_FILTERS tool input.
 */
type POSTHOG_LIST_OR_DELETE_PERSONS_WITH_OPTIONAL_FILTERS_INPUT = {
  /**
   * Distinct Id
   * @description Filter list by distinct id.
   */
  distinct_id?: string;
  /**
   * Email
   * @description Filter persons by email (exact match)
   */
  email?: string;
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Properties
   * @description Filter Persons by person properties.
   */
  properties?: {
      [key: string]: unknown;
  }[];
  /**
   * Search
   * @description Search persons, either by email (full text search) or distinct_id (exact match).
   */
  search?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_OR_DELETE_PERSONS_WITH_OPTIONAL_FILTERS tool output.
 */
type POSTHOG_LIST_OR_DELETE_PERSONS_WITH_OPTIONAL_FILTERS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_PAGINATED_SURVEYS_FOR_A_PROJECT tool input.
 */
type POSTHOG_LIST_PAGINATED_SURVEYS_FOR_A_PROJECT_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_PAGINATED_SURVEYS_FOR_A_PROJECT tool output.
 */
type POSTHOG_LIST_PAGINATED_SURVEYS_FOR_A_PROJECT_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_PIPELINE_DESTINATION_CONFIGS_WITH_PAGINATION tool input.
 */
type POSTHOG_LIST_PIPELINE_DESTINATION_CONFIGS_WITH_PAGINATION_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_PIPELINE_DESTINATION_CONFIGS_WITH_PAGINATION tool output.
 */
type POSTHOG_LIST_PIPELINE_DESTINATION_CONFIGS_WITH_PAGINATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_PIPELINE_FRONTEND_APP_CONFIGS tool input.
 */
type POSTHOG_LIST_PIPELINE_FRONTEND_APP_CONFIGS_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_PIPELINE_FRONTEND_APP_CONFIGS tool output.
 */
type POSTHOG_LIST_PIPELINE_FRONTEND_APP_CONFIGS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_PROJECTS_IN_ORGANIZATION_WITH_PAGINATION tool input.
 */
type POSTHOG_LIST_PROJECTS_IN_ORGANIZATION_WITH_PAGINATION_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_PROJECTS_IN_ORGANIZATION_WITH_PAGINATION tool output.
 */
type POSTHOG_LIST_PROJECTS_IN_ORGANIZATION_WITH_PAGINATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_ACTIONS_WITH_PAGINATION_AND_FILTERS tool input.
 */
type POSTHOG_LIST_PROJECT_ACTIONS_WITH_PAGINATION_AND_FILTERS_INPUT = {
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_ACTIONS_WITH_PAGINATION_AND_FILTERS tool output.
 */
type POSTHOG_LIST_PROJECT_ACTIONS_WITH_PAGINATION_AND_FILTERS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_BATCH_EXPORTS_WITH_PAGINATION tool input.
 */
type POSTHOG_LIST_PROJECT_BATCH_EXPORTS_WITH_PAGINATION_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_BATCH_EXPORTS_WITH_PAGINATION tool output.
 */
type POSTHOG_LIST_PROJECT_BATCH_EXPORTS_WITH_PAGINATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_CONFIGURATION_PLUGIN_LOGS tool input.
 */
type POSTHOG_LIST_PROJECT_CONFIGURATION_PLUGIN_LOGS_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Plugin Config Id
   * @description Plugin Config Id
   */
  plugin_config_id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_CONFIGURATION_PLUGIN_LOGS tool output.
 */
type POSTHOG_LIST_PROJECT_CONFIGURATION_PLUGIN_LOGS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_DASHBOARDS_WITH_PAGINATION tool input.
 */
type POSTHOG_LIST_PROJECT_DASHBOARDS_WITH_PAGINATION_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_DASHBOARDS_WITH_PAGINATION tool output.
 */
type POSTHOG_LIST_PROJECT_DASHBOARDS_WITH_PAGINATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_DASHBOARD_COLLABORATORS tool input.
 */
type POSTHOG_LIST_PROJECT_DASHBOARD_COLLABORATORS_INPUT = {
  /**
   * Dashboard Id
   * @description Dashboard Id
   */
  dashboard_id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_DASHBOARD_COLLABORATORS tool output.
 */
type POSTHOG_LIST_PROJECT_DASHBOARD_COLLABORATORS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_DASHBOARD_TEMPLATES tool input.
 */
type POSTHOG_LIST_PROJECT_DASHBOARD_TEMPLATES_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_DASHBOARD_TEMPLATES tool output.
 */
type POSTHOG_LIST_PROJECT_DASHBOARD_TEMPLATES_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_EARLY_ACCESS_FEATURES tool input.
 */
type POSTHOG_LIST_PROJECT_EARLY_ACCESS_FEATURES_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_EARLY_ACCESS_FEATURES tool output.
 */
type POSTHOG_LIST_PROJECT_EARLY_ACCESS_FEATURES_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_EXPERIMENTS_WITH_PAGINATION tool input.
 */
type POSTHOG_LIST_PROJECT_EXPERIMENTS_WITH_PAGINATION_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_EXPERIMENTS_WITH_PAGINATION tool output.
 */
type POSTHOG_LIST_PROJECT_EXPERIMENTS_WITH_PAGINATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_EXPORT_ITEMS_WITH_PAGINATION tool input.
 */
type POSTHOG_LIST_PROJECT_EXPORT_ITEMS_WITH_PAGINATION_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_EXPORT_ITEMS_WITH_PAGINATION tool output.
 */
type POSTHOG_LIST_PROJECT_EXPORT_ITEMS_WITH_PAGINATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_GROUP_TYPES_BY_ID tool input.
 */
type POSTHOG_LIST_PROJECT_GROUP_TYPES_BY_ID_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_GROUP_TYPES_BY_ID tool output.
 */
type POSTHOG_LIST_PROJECT_GROUP_TYPES_BY_ID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_MEMBERSHIP_DETAILS tool input.
 */
type POSTHOG_LIST_PROJECT_MEMBERSHIP_DETAILS_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_MEMBERSHIP_DETAILS tool output.
 */
type POSTHOG_LIST_PROJECT_MEMBERSHIP_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_PIPELINE_CONFIGURATIONS tool input.
 */
type POSTHOG_LIST_PROJECT_PIPELINE_CONFIGURATIONS_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_PIPELINE_CONFIGURATIONS tool output.
 */
type POSTHOG_LIST_PROJECT_PIPELINE_CONFIGURATIONS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_PIPELINE_IMPORT_CONFIGS tool input.
 */
type POSTHOG_LIST_PROJECT_PIPELINE_IMPORT_CONFIGS_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_PIPELINE_IMPORT_CONFIGS tool output.
 */
type POSTHOG_LIST_PROJECT_PIPELINE_IMPORT_CONFIGS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_PLUGIN_CONFIGURATIONS tool input.
 */
type POSTHOG_LIST_PROJECT_PLUGIN_CONFIGURATIONS_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_PLUGIN_CONFIGURATIONS tool output.
 */
type POSTHOG_LIST_PROJECT_PLUGIN_CONFIGURATIONS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_SESSION_RECORDINGS tool input.
 */
type POSTHOG_LIST_PROJECT_SESSION_RECORDINGS_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_SESSION_RECORDINGS tool output.
 */
type POSTHOG_LIST_PROJECT_SESSION_RECORDINGS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_SUBSCRIPTIONS_WITH_PAGINATION tool input.
 */
type POSTHOG_LIST_PROJECT_SUBSCRIPTIONS_WITH_PAGINATION_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_PROJECT_SUBSCRIPTIONS_WITH_PAGINATION tool output.
 */
type POSTHOG_LIST_PROJECT_SUBSCRIPTIONS_WITH_PAGINATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_ROLE_MEMBERSHIPS_PAGINATED tool input.
 */
type POSTHOG_LIST_ROLE_MEMBERSHIPS_PAGINATED_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
  /**
   * Role Id
   * @description Role Id
   */
  role_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_ROLE_MEMBERSHIPS_PAGINATED tool output.
 */
type POSTHOG_LIST_ROLE_MEMBERSHIPS_PAGINATED_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_SESSION_RECORDING_SHARING_CONFIGS tool input.
 */
type POSTHOG_LIST_SESSION_RECORDING_SHARING_CONFIGS_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Recording Id
   * @description Recording Id
   */
  recording_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_SESSION_RECORDING_SHARING_CONFIGS tool output.
 */
type POSTHOG_LIST_SESSION_RECORDING_SHARING_CONFIGS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_SPECIFIC_TYPE_GROUPS_WITH_PAGINATION tool input.
 */
type POSTHOG_LIST_SPECIFIC_TYPE_GROUPS_WITH_PAGINATION_INPUT = {
  /**
   * Cursor
   * @description The pagination cursor value.
   */
  cursor?: string;
  /**
   * Group Type Index
   * @description Specify the group type to list
   */
  group_type_index?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Search
   * @description Search the group name
   */
  search?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_SPECIFIC_TYPE_GROUPS_WITH_PAGINATION tool output.
 */
type POSTHOG_LIST_SPECIFIC_TYPE_GROUPS_WITH_PAGINATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_UNUSED_ORGANIZATION_PIPELINE_TRANSFORMATIONS tool input.
 */
type POSTHOG_LIST_UNUSED_ORGANIZATION_PIPELINE_TRANSFORMATIONS_INPUT = {
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_UNUSED_ORGANIZATION_PIPELINE_TRANSFORMATIONS tool output.
 */
type POSTHOG_LIST_UNUSED_ORGANIZATION_PIPELINE_TRANSFORMATIONS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_LIST_USERS_WITH_STAFF_FILTER_AND_PAGINATION tool input.
 */
type POSTHOG_LIST_USERS_WITH_STAFF_FILTER_AND_PAGINATION_INPUT = {
  /**
   * Is Staff
   * @description Is Staff
   */
  is_staff?: boolean;
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
};

/**
 * Type of POSTHOG's POSTHOG_LIST_USERS_WITH_STAFF_FILTER_AND_PAGINATION tool output.
 */
type POSTHOG_LIST_USERS_WITH_STAFF_FILTER_AND_PAGINATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_MANAGE_FEATURE_FLAG_ENRICHMENT_FOR_USAGE_DASHBOARD tool input.
 */
type POSTHOG_MANAGE_FEATURE_FLAG_ENRICHMENT_FOR_USAGE_DASHBOARD_INPUT = {
  /**
   * Active
   * @description Active
   */
  active?: boolean;
  /**
   * Analytics Dashboards
   * @description Analytics Dashboards
   */
  analytics_dashboards?: number[];
  /**
   * Can Edit
   * @description Can Edit
   */
  can_edit?: boolean;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Ensure Experience Continuity
   * @description Ensure Experience Continuity
   */
  ensure_experience_continuity?: boolean;
  /**
   * Experiment Set
   * @description Experiment Set
   */
  experiment_set?: number[];
  /**
   * Features
   * @description Features
   */
  features?: {
      [key: string]: unknown;
  };
  /**
   * Filters
   * @description Filters
   */
  filters?: {
      [key: string]: unknown;
  };
  /**
   * Has Enriched Analytics
   * @description Has Enriched Analytics
   */
  has_enriched_analytics?: boolean;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Is Simple Flag
   * @description Is Simple Flag
   */
  is_simple_flag?: boolean;
  /**
   * Key
   * @description Key
   */
  key?: string;
  /**
   * Name
   * @description contains the description for the flag (field name `name` is kept for backwards-compatibility)
   */
  name?: string;
  /**
   * Performed Rollback
   * @description Performed Rollback
   */
  performed_rollback?: boolean;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Rollback Conditions
   * @description Rollback Conditions
   */
  rollback_conditions?: unknown;
  /**
   * Rollout Percentage
   * @description Rollout Percentage
   */
  rollout_percentage?: number;
  /**
   * Surveys
   * @description Surveys
   */
  surveys?: {
      [key: string]: unknown;
  };
  /**
   * Tags
   * @description Tags
   */
  tags?: unknown[];
  /**
   * Usage Dashboard
   * @description Usage Dashboard
   */
  usage_dashboard?: number;
};

/**
 * Type of POSTHOG's POSTHOG_MANAGE_FEATURE_FLAG_ENRICHMENT_FOR_USAGE_DASHBOARD tool output.
 */
type POSTHOG_MANAGE_FEATURE_FLAG_ENRICHMENT_FOR_USAGE_DASHBOARD_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_MANAGE_PROJECT_FEATURE_FLAGS tool input.
 */
type POSTHOG_MANAGE_PROJECT_FEATURE_FLAGS_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_MANAGE_PROJECT_FEATURE_FLAGS tool output.
 */
type POSTHOG_MANAGE_PROJECT_FEATURE_FLAGS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_MANAGE_PROJECT_FEATURE_FLAGS_FOR_LOCAL_EVALUATION tool input.
 */
type POSTHOG_MANAGE_PROJECT_FEATURE_FLAGS_FOR_LOCAL_EVALUATION_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_MANAGE_PROJECT_FEATURE_FLAGS_FOR_LOCAL_EVALUATION tool output.
 */
type POSTHOG_MANAGE_PROJECT_FEATURE_FLAGS_FOR_LOCAL_EVALUATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_MANAGE_USER_FEATURE_FLAGS tool input.
 */
type POSTHOG_MANAGE_USER_FEATURE_FLAGS_INPUT = {
  /**
   * Active
   * @description Active
   */
  active?: boolean;
  /**
   * Analytics Dashboards
   * @description Analytics Dashboards
   */
  analytics_dashboards?: number[];
  /**
   * Can Edit
   * @description Can Edit
   */
  can_edit?: boolean;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Ensure Experience Continuity
   * @description Ensure Experience Continuity
   */
  ensure_experience_continuity?: boolean;
  /**
   * Experiment Set
   * @description Experiment Set
   */
  experiment_set?: number[];
  /**
   * Features
   * @description Features
   */
  features?: {
      [key: string]: unknown;
  };
  /**
   * Filters
   * @description Filters
   */
  filters?: {
      [key: string]: unknown;
  };
  /**
   * Has Enriched Analytics
   * @description Has Enriched Analytics
   */
  has_enriched_analytics?: boolean;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Is Simple Flag
   * @description Is Simple Flag
   */
  is_simple_flag?: boolean;
  /**
   * Key
   * @description Key
   */
  key?: string;
  /**
   * Name
   * @description contains the description for the flag (field name `name` is kept for backwards-compatibility)
   */
  name?: string;
  /**
   * Performed Rollback
   * @description Performed Rollback
   */
  performed_rollback?: boolean;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Rollback Conditions
   * @description Rollback Conditions
   */
  rollback_conditions?: unknown;
  /**
   * Rollout Percentage
   * @description Rollout Percentage
   */
  rollout_percentage?: number;
  /**
   * Surveys
   * @description Surveys
   */
  surveys?: {
      [key: string]: unknown;
  };
  /**
   * Tags
   * @description Tags
   */
  tags?: unknown[];
  /**
   * Usage Dashboard
   * @description Usage Dashboard
   */
  usage_dashboard?: number;
};

/**
 * Type of POSTHOG's POSTHOG_MANAGE_USER_FEATURE_FLAGS tool output.
 */
type POSTHOG_MANAGE_USER_FEATURE_FLAGS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_MARK_DASHBOARD_TEMPLATE_AS_DELETED tool input.
 */
type POSTHOG_MARK_DASHBOARD_TEMPLATE_AS_DELETED_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this dashboard template.
   */
  id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_MARK_DASHBOARD_TEMPLATE_AS_DELETED tool output.
 */
type POSTHOG_MARK_DASHBOARD_TEMPLATE_AS_DELETED_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_MARK_INSIGHT_AS_VIEWED_WITH_CONFIGURABLE_FORMAT tool input.
 */
type POSTHOG_MARK_INSIGHT_AS_VIEWED_WITH_CONFIGURABLE_FORMAT_INPUT = {
  /**
   * Cache Target Age
   * @description The target age of the cached results for this insight.
   */
  cache_target_age?: string;
  /**
   * Columns
   * @description Columns
   */
  columns?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Dashboard Tiles
   * @description      A dashboard tile ID and dashboard_id for each of the dashboards that this insight is displayed on.
   */
  dashboard_tiles?: {
      [key: string]: unknown;
  }[];
  /**
   * Dashboards
   * @description          DEPRECATED. Will be removed in a future release. Use dashboard_tiles instead.         A dashboard ID for each of the dashboards that this insight is displayed on.
   */
  dashboards?: number[];
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Derived Name
   * @description Derived Name
   */
  derived_name?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Favorited
   * @description Favorited
   */
  favorited?: boolean;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Hogql
   * @description Hogql
   */
  hogql?: string;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Is Cached
   * @description Is Cached
   */
  is_cached?: string;
  /**
   * Is Sample
   * @description Is Sample
   */
  is_sample?: boolean;
  /**
   * Last Modified At
   * Format: date-time
   * @description Last Modified At
   */
  last_modified_at?: string;
  /**
   * Last Refresh
   * @description      The datetime this insight"s results were generated.     If added to one or more dashboards the insight can be refreshed separately on each.     Returns the appropriate last_refresh datetime for the context the insight is viewed in     (see from_dashboard query parameter).
   */
  last_refresh?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Next Allowed Client Refresh
   * @description      The earliest possible datetime at which we"ll allow the cached results for this insight to be refreshed     by querying the database.
   */
  next_allowed_client_refresh?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Query
   * @description Query node JSON string
   */
  query?: unknown;
  /**
   * Query Status
   * @description Query Status
   */
  query_status?: string;
  /**
   * Result
   * @description Result
   */
  result?: string;
  /**
   * Saved
   * @description Saved
   */
  saved?: boolean;
  /**
   * Short Id
   * @description Short Id
   */
  short_id?: string;
  /**
   * Tags
   * @description Tags
   */
  tags?: unknown[];
  /**
   * Timezone
   * @description The timezone this chart is displayed in.
   */
  timezone?: string;
  /**
   * Types
   * @description Types
   */
  types?: string;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_MARK_INSIGHT_AS_VIEWED_WITH_CONFIGURABLE_FORMAT tool output.
 */
type POSTHOG_MARK_INSIGHT_AS_VIEWED_WITH_CONFIGURABLE_FORMAT_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_MARK_PROJECT_ACTION_AS_DELETED tool input.
 */
type POSTHOG_MARK_PROJECT_ACTION_AS_DELETED_INPUT = {
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Id
   * @description A unique integer value identifying this action.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_MARK_PROJECT_ACTION_AS_DELETED tool output.
 */
type POSTHOG_MARK_PROJECT_ACTION_AS_DELETED_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_MARK_SESSION_RECORDING_PLAYLIST_DELETED tool input.
 */
type POSTHOG_MARK_SESSION_RECORDING_PLAYLIST_DELETED_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Short Id
   * @description Short Id
   */
  short_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_MARK_SESSION_RECORDING_PLAYLIST_DELETED tool output.
 */
type POSTHOG_MARK_SESSION_RECORDING_PLAYLIST_DELETED_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_MARK_SUBSCRIPTION_AS_DELETED_BY_ID tool input.
 */
type POSTHOG_MARK_SUBSCRIPTION_AS_DELETED_BY_ID_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this subscription.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_MARK_SUBSCRIPTION_AS_DELETED_BY_ID tool output.
 */
type POSTHOG_MARK_SUBSCRIPTION_AS_DELETED_BY_ID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_MODIFY_ORG_INFO_VIA_UUID tool input.
 */
type POSTHOG_MODIFY_ORG_INFO_VIA_UUID_INPUT = {
  /**
   * Available Product Features
   * @description Available Product Features
   */
  available_product_features?: unknown[];
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Customer Id
   * @description Customer Id
   */
  customer_id?: string;
  /**
   * Enforce 2Fa
   * @description Enforce 2Fa
   */
  enforce_2fa?: boolean;
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Is Member Join Email Enabled
   * @description Is Member Join Email Enabled
   */
  is_member_join_email_enabled?: boolean;
  /**
   * Member Count
   * @description Member Count
   */
  member_count?: string;
  /**
   * Metadata
   * @description Metadata
   */
  metadata?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Slug
   * @description Slug
   */
  slug?: string;
  /**
   * Teams
   * @description Teams
   */
  teams?: {
      [key: string]: unknown;
  }[];
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_MODIFY_ORG_INFO_VIA_UUID tool output.
 */
type POSTHOG_MODIFY_ORG_INFO_VIA_UUID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_MOVE_DASHBOARD_TILE tool input.
 */
type POSTHOG_MOVE_DASHBOARD_TILE_INPUT = {
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Delete Insights
   * @description Delete Insights
   * @default false
   */
  delete_insights: boolean;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Is Shared
   * @description Is Shared
   */
  is_shared?: boolean;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Pinned
   * @description Pinned
   */
  pinned?: boolean;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Tags
   * @description Tags
   */
  tags?: unknown[];
  /**
   * Tiles
   * @description Tiles
   */
  tiles?: {
      [key: string]: unknown;
  }[];
  /**
   * Use Dashboard
   * @description Use Dashboard
   */
  use_dashboard?: number;
  /**
   * Use Template
   * @description Use Template
   */
  use_template?: string;
};

/**
 * Type of POSTHOG's POSTHOG_MOVE_DASHBOARD_TILE tool output.
 */
type POSTHOG_MOVE_DASHBOARD_TILE_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_PARTIALLY_UPDATE_PROJECT_PLUGIN_CONFIG tool input.
 */
type POSTHOG_PARTIALLY_UPDATE_PROJECT_PLUGIN_CONFIG_INPUT = {
  /**
   * Config
   * @description Config
   */
  config?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Delivery Rate 24H
   * @description Delivery Rate 24H
   */
  delivery_rate_24h?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Enabled
   * @description Enabled
   */
  enabled?: boolean;
  /**
   * Error
   * @description Error
   */
  error?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Plugin
   * @description Plugin
   */
  plugin?: number;
  /**
   * Plugin Info
   * @description Plugin Info
   */
  plugin_info?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Team Id
   * @description Team Id
   */
  team_id?: number;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_PARTIALLY_UPDATE_PROJECT_PLUGIN_CONFIG tool output.
 */
type POSTHOG_PARTIALLY_UPDATE_PROJECT_PLUGIN_CONFIG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_PARTIALLY_UPDATE_PROJECT_PROPERTY_DEFINITION tool input.
 */
type POSTHOG_PARTIALLY_UPDATE_PROJECT_PROPERTY_DEFINITION_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this property definition.
   */
  id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_PARTIALLY_UPDATE_PROJECT_PROPERTY_DEFINITION tool output.
 */
type POSTHOG_PARTIALLY_UPDATE_PROJECT_PROPERTY_DEFINITION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_PARTIAL_EXPERIMENT_UPDATE_IN_PROJECT tool input.
 */
type POSTHOG_PARTIAL_EXPERIMENT_UPDATE_IN_PROJECT_INPUT = {
  /**
   * Archived
   * @description Archived
   */
  archived?: boolean;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * End Date
   * Format: date-time
   * @description End Date
   */
  end_date?: string;
  /**
   * Exposure Cohort
   * @description Exposure Cohort
   */
  exposure_cohort?: number;
  /**
   * Feature Flag Key
   * @description Feature Flag Key
   */
  feature_flag_key?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Parameters
   * @description Parameters
   */
  parameters?: unknown;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Secondary Metrics
   * @description Secondary Metrics
   */
  secondary_metrics?: unknown;
  /**
   * Start Date
   * Format: date-time
   * @description Start Date
   */
  start_date?: string;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_PARTIAL_EXPERIMENT_UPDATE_IN_PROJECT tool output.
 */
type POSTHOG_PARTIAL_EXPERIMENT_UPDATE_IN_PROJECT_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_PARTIAL_PIPELINE_FRONTEND_APP_CONFIG_UPDATE tool input.
 */
type POSTHOG_PARTIAL_PIPELINE_FRONTEND_APP_CONFIG_UPDATE_INPUT = {
  /**
   * Config
   * @description Config
   */
  config?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Delivery Rate 24H
   * @description Delivery Rate 24H
   */
  delivery_rate_24h?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Enabled
   * @description Enabled
   */
  enabled?: boolean;
  /**
   * Error
   * @description Error
   */
  error?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Plugin
   * @description Plugin
   */
  plugin?: number;
  /**
   * Plugin Info
   * @description Plugin Info
   */
  plugin_info?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Team Id
   * @description Team Id
   */
  team_id?: number;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_PARTIAL_PIPELINE_FRONTEND_APP_CONFIG_UPDATE tool output.
 */
type POSTHOG_PARTIAL_PIPELINE_FRONTEND_APP_CONFIG_UPDATE_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_PARTIAL_UPDATE_OF_A_PROJECT_INSIGHT tool input.
 */
type POSTHOG_PARTIAL_UPDATE_OF_A_PROJECT_INSIGHT_INPUT = {
  /**
   * Cache Target Age
   * @description The target age of the cached results for this insight.
   */
  cache_target_age?: string;
  /**
   * Columns
   * @description Columns
   */
  columns?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Dashboard Tiles
   * @description      A dashboard tile ID and dashboard_id for each of the dashboards that this insight is displayed on.
   */
  dashboard_tiles?: {
      [key: string]: unknown;
  }[];
  /**
   * Dashboards
   * @description          DEPRECATED. Will be removed in a future release. Use dashboard_tiles instead.         A dashboard ID for each of the dashboards that this insight is displayed on.
   */
  dashboards?: number[];
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Derived Name
   * @description Derived Name
   */
  derived_name?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Favorited
   * @description Favorited
   */
  favorited?: boolean;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Hogql
   * @description Hogql
   */
  hogql?: string;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Is Cached
   * @description Is Cached
   */
  is_cached?: string;
  /**
   * Is Sample
   * @description Is Sample
   */
  is_sample?: boolean;
  /**
   * Last Modified At
   * Format: date-time
   * @description Last Modified At
   */
  last_modified_at?: string;
  /**
   * Last Refresh
   * @description      The datetime this insight"s results were generated.     If added to one or more dashboards the insight can be refreshed separately on each.     Returns the appropriate last_refresh datetime for the context the insight is viewed in     (see from_dashboard query parameter).
   */
  last_refresh?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Next Allowed Client Refresh
   * @description      The earliest possible datetime at which we"ll allow the cached results for this insight to be refreshed     by querying the database.
   */
  next_allowed_client_refresh?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Query
   * @description Query node JSON string
   */
  query?: unknown;
  /**
   * Query Status
   * @description Query Status
   */
  query_status?: string;
  /**
   * Result
   * @description Result
   */
  result?: string;
  /**
   * Saved
   * @description Saved
   */
  saved?: boolean;
  /**
   * Short Id
   * @description Short Id
   */
  short_id?: string;
  /**
   * Tags
   * @description Tags
   */
  tags?: unknown[];
  /**
   * Timezone
   * @description The timezone this chart is displayed in.
   */
  timezone?: string;
  /**
   * Types
   * @description Types
   */
  types?: string;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_PARTIAL_UPDATE_OF_A_PROJECT_INSIGHT tool output.
 */
type POSTHOG_PARTIAL_UPDATE_OF_A_PROJECT_INSIGHT_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_PARTIAL_UPDATE_OF_A_PROJECT_S_DASHBOARD tool input.
 */
type POSTHOG_PARTIAL_UPDATE_OF_A_PROJECT_S_DASHBOARD_INPUT = {
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Delete Insights
   * @description Delete Insights
   * @default false
   */
  delete_insights: boolean;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Is Shared
   * @description Is Shared
   */
  is_shared?: boolean;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Pinned
   * @description Pinned
   */
  pinned?: boolean;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Tags
   * @description Tags
   */
  tags?: unknown[];
  /**
   * Tiles
   * @description Tiles
   */
  tiles?: {
      [key: string]: unknown;
  }[];
  /**
   * Use Dashboard
   * @description Use Dashboard
   */
  use_dashboard?: number;
  /**
   * Use Template
   * @description Use Template
   */
  use_template?: string;
};

/**
 * Type of POSTHOG's POSTHOG_PARTIAL_UPDATE_OF_A_PROJECT_S_DASHBOARD tool output.
 */
type POSTHOG_PARTIAL_UPDATE_OF_A_PROJECT_S_DASHBOARD_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_PARTIAL_UPDATE_OF_A_PROJECT_S_FEATURE_FLAG tool input.
 */
type POSTHOG_PARTIAL_UPDATE_OF_A_PROJECT_S_FEATURE_FLAG_INPUT = {
  /**
   * Active
   * @description Active
   */
  active?: boolean;
  /**
   * Analytics Dashboards
   * @description Analytics Dashboards
   */
  analytics_dashboards?: number[];
  /**
   * Can Edit
   * @description Can Edit
   */
  can_edit?: boolean;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Ensure Experience Continuity
   * @description Ensure Experience Continuity
   */
  ensure_experience_continuity?: boolean;
  /**
   * Experiment Set
   * @description Experiment Set
   */
  experiment_set?: number[];
  /**
   * Features
   * @description Features
   */
  features?: {
      [key: string]: unknown;
  };
  /**
   * Filters
   * @description Filters
   */
  filters?: {
      [key: string]: unknown;
  };
  /**
   * Has Enriched Analytics
   * @description Has Enriched Analytics
   */
  has_enriched_analytics?: boolean;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Is Simple Flag
   * @description Is Simple Flag
   */
  is_simple_flag?: boolean;
  /**
   * Key
   * @description Key
   */
  key?: string;
  /**
   * Name
   * @description contains the description for the flag (field name `name` is kept for backwards-compatibility)
   */
  name?: string;
  /**
   * Performed Rollback
   * @description Performed Rollback
   */
  performed_rollback?: boolean;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Rollback Conditions
   * @description Rollback Conditions
   */
  rollback_conditions?: unknown;
  /**
   * Rollout Percentage
   * @description Rollout Percentage
   */
  rollout_percentage?: number;
  /**
   * Surveys
   * @description Surveys
   */
  surveys?: {
      [key: string]: unknown;
  };
  /**
   * Tags
   * @description Tags
   */
  tags?: unknown[];
  /**
   * Usage Dashboard
   * @description Usage Dashboard
   */
  usage_dashboard?: number;
};

/**
 * Type of POSTHOG's POSTHOG_PARTIAL_UPDATE_OF_A_PROJECT_S_FEATURE_FLAG tool output.
 */
type POSTHOG_PARTIAL_UPDATE_OF_A_PROJECT_S_FEATURE_FLAG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_PARTIAL_UPDATE_OF_PROJECT_NOTEBOOK tool input.
 */
type POSTHOG_PARTIAL_UPDATE_OF_PROJECT_NOTEBOOK_INPUT = {
  /**
   * Content
   * @description Content
   */
  content?: unknown;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Last Modified At
   * Format: date-time
   * @description Last Modified At
   */
  last_modified_at?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Short Id
   * @description Short Id
   */
  short_id?: string;
  /**
   * Text Content
   * @description Text Content
   */
  text_content?: string;
  /**
   * Title
   * @description Title
   */
  title?: string;
  /**
   * Version
   * @description Version
   */
  version?: number;
};

/**
 * Type of POSTHOG's POSTHOG_PARTIAL_UPDATE_OF_PROJECT_NOTEBOOK tool output.
 */
type POSTHOG_PARTIAL_UPDATE_OF_PROJECT_NOTEBOOK_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_PARTIAL_UPDATE_PROJECT_ANNOTATION tool input.
 */
type POSTHOG_PARTIAL_UPDATE_PROJECT_ANNOTATION_INPUT = {
  /**
   * Content
   * @description Content
   */
  content?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Creation Type
   * @description * `USR` - user * `GIT` - GitHub
   * @enum {string}
   */
  creation_type?: "USR" | "GIT";
  /**
   * Dashboard Id
   * @description Dashboard Id
   */
  dashboard_id?: number;
  /**
   * Dashboard Item
   * @description Dashboard Item
   */
  dashboard_item?: number;
  /**
   * Dashboard Name
   * @description Dashboard Name
   */
  dashboard_name?: string;
  /**
   * Date Marker
   * Format: date-time
   * @description Date Marker
   */
  date_marker?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Insight Derived Name
   * @description Insight Derived Name
   */
  insight_derived_name?: string;
  /**
   * Insight Name
   * @description Insight Name
   */
  insight_name?: string;
  /**
   * Insight Short Id
   * @description Insight Short Id
   */
  insight_short_id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Scope
   * @description * `dashboard_item` - insight * `dashboard` - dashboard * `project` - project * `organization` - organization
   * @enum {string}
   */
  scope?: "dashboard_item" | "dashboard" | "project" | "organization";
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_PARTIAL_UPDATE_PROJECT_ANNOTATION tool output.
 */
type POSTHOG_PARTIAL_UPDATE_PROJECT_ANNOTATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_PERSIST_SESSION_RECORDING_DATA_BY_UUID tool input.
 */
type POSTHOG_PERSIST_SESSION_RECORDING_DATA_BY_UUID_INPUT = {
  /**
   * Active Seconds
   * @description Active Seconds
   */
  active_seconds?: number;
  /**
   * Click Count
   * @description Click Count
   */
  click_count?: number;
  /**
   * Console Error Count
   * @description Console Error Count
   */
  console_error_count?: number;
  /**
   * Console Log Count
   * @description Console Log Count
   */
  console_log_count?: number;
  /**
   * Console Warn Count
   * @description Console Warn Count
   */
  console_warn_count?: number;
  /**
   * Distinct Id
   * @description Distinct Id
   */
  distinct_id?: string;
  /**
   * End Time
   * Format: date-time
   * @description End Time
   */
  end_time?: string;
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Inactive Seconds
   * @description Inactive Seconds
   */
  inactive_seconds?: number;
  /**
   * Keypress Count
   * @description Keypress Count
   */
  keypress_count?: number;
  /**
   * Mouse Activity Count
   * @description Mouse Activity Count
   */
  mouse_activity_count?: number;
  /**
   * Person  Created  At
   * Format: date-time
   * @description Created At
   */
  person__created__at?: string;
  /**
   * Person  Distinct  Ids
   * @description Distinct Ids
   */
  person__distinct__ids?: string;
  /**
   * Person  Id
   * @description Id
   */
  person__id?: number;
  /**
   * Person  Name
   * @description Name
   */
  person__name?: string;
  /**
   * Person  Properties
   * @description Properties
   */
  person__properties?: unknown;
  /**
   * Person  Uuid
   * Format: uuid
   * @description Uuid
   */
  person__uuid?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Recording Duration
   * @description Recording Duration
   */
  recording_duration?: number;
  /**
   * Snapshot Source
   * @description Snapshot Source
   */
  snapshot_source?: string;
  /**
   * Start Time
   * Format: date-time
   * @description Start Time
   */
  start_time?: string;
  /**
   * Start Url
   * @description Start Url
   */
  start_url?: string;
  /**
   * Storage
   * @description Storage
   */
  storage?: string;
  /**
   * Viewed
   * @description Viewed
   */
  viewed?: string;
};

/**
 * Type of POSTHOG's POSTHOG_PERSIST_SESSION_RECORDING_DATA_BY_UUID tool output.
 */
type POSTHOG_PERSIST_SESSION_RECORDING_DATA_BY_UUID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_PERSON_PARTIAL_UPDATE_VIA_PROJECT_ID tool input.
 */
type POSTHOG_PERSON_PARTIAL_UPDATE_VIA_PROJECT_ID_INPUT = {
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Distinct Ids
   * @description Distinct Ids
   */
  distinct_ids?: string[];
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Properties
   * @description Properties
   */
  properties?: unknown;
  /**
   * Uuid
   * Format: uuid
   * @description Uuid
   */
  uuid?: string;
};

/**
 * Type of POSTHOG's POSTHOG_PERSON_PARTIAL_UPDATE_VIA_PROJECT_ID tool output.
 */
type POSTHOG_PERSON_PARTIAL_UPDATE_VIA_PROJECT_ID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_PERSON_PROPERTY_DELETION_ENDPOINT tool input.
 */
type POSTHOG_PERSON_PROPERTY_DELETION_ENDPOINT_INPUT = {
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Distinct Ids
   * @description Distinct Ids
   */
  distinct_ids?: string[];
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Properties
   * @description Properties
   */
  properties?: unknown;
  /**
   * Unset
   * @description Specify the property key to delete
   */
  unset?: string;
  /**
   * Uuid
   * Format: uuid
   * @description Uuid
   */
  uuid?: string;
};

/**
 * Type of POSTHOG's POSTHOG_PERSON_PROPERTY_DELETION_ENDPOINT tool output.
 */
type POSTHOG_PERSON_PROPERTY_DELETION_ENDPOINT_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_PREVENT_HARD_DELETE_NOTEBOOK_BY_FLAGGING tool input.
 */
type POSTHOG_PREVENT_HARD_DELETE_NOTEBOOK_BY_FLAGGING_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Short Id
   * @description Short Id
   */
  short_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_PREVENT_HARD_DELETE_NOTEBOOK_BY_FLAGGING tool output.
 */
type POSTHOG_PREVENT_HARD_DELETE_NOTEBOOK_BY_FLAGGING_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_PROJECT_TREND_ANALYTICS tool input.
 */
type POSTHOG_PROJECT_TREND_ANALYTICS_INPUT = {
  /**
   * Actions
   * @description Actions to filter on. One of `events` or `actions` is required.
   */
  actions?: {
      [key: string]: unknown;
  }[];
  /**
   * Breakdown
   * @description A property or cohort to break down on. You can select the type of the property with breakdown_type. - `event` (default): a property key - `person`: a person property key - `cohort`: an array of cohort IDs (ie `[9581,5812]`)
   */
  breakdown?: string;
  /**
   * Compare
   * @description To compare or not
   */
  compare?: boolean;
  /**
   * Compare To
   * @description What to compare to
   */
  compare_to?: string;
  /**
   * Date From
   * @description What date to filter the results from. Can either be a date `2021-01-01`, or a relative date, like `-7d` for last seven days, `-1m` for last month, `mStart` for start of the month or `yStart` for the start of the year.
   * @default -7d
   */
  date_from: string;
  /**
   * Date To
   * @description What date to filter the results to. Can either be a date `2021-01-01`, or a relative date, like `-7d` for last seven days, `-1m` for last month, `mStart` for start of the month or `yStart` for the start of the year.
   * @default -7d
   */
  date_to: string;
  /**
   * Events
   * @description Events to filter on. One of `events` or `actions` is required.
   */
  events?: {
      [key: string]: unknown;
  }[];
  /**
   * Filter Test Accounts
   * @description Whether to filter out internal and test accounts. See "project settings" in your PostHog account for the filters.
   * @default false
   */
  filter_test_accounts: boolean;
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Formula
   * @description Combine the result of events or actions into a single number. For example `A + B` or `(A-B)/B`. The letters correspond to the order of the `events` or `actions` lists.
   */
  formula?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_PROJECT_TREND_ANALYTICS tool output.
 */
type POSTHOG_PROJECT_TREND_ANALYTICS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REARRANGE_FRONTEND_APP_PIPELINE_CONFIGS tool input.
 */
type POSTHOG_REARRANGE_FRONTEND_APP_PIPELINE_CONFIGS_INPUT = {
  /**
   * Config
   * @description Config
   */
  config?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Delivery Rate 24H
   * @description Delivery Rate 24H
   */
  delivery_rate_24h?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Enabled
   * @description Enabled
   */
  enabled?: boolean;
  /**
   * Error
   * @description Error
   */
  error?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Plugin
   * @description Plugin
   */
  plugin?: number;
  /**
   * Plugin Info
   * @description Plugin Info
   */
  plugin_info?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Team Id
   * @description Team Id
   */
  team_id?: number;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REARRANGE_FRONTEND_APP_PIPELINE_CONFIGS tool output.
 */
type POSTHOG_REARRANGE_FRONTEND_APP_PIPELINE_CONFIGS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REARRANGE_PIPELINE_TRANSFORMATION_CONFIGS tool input.
 */
type POSTHOG_REARRANGE_PIPELINE_TRANSFORMATION_CONFIGS_INPUT = {
  /**
   * Config
   * @description Config
   */
  config?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Delivery Rate 24H
   * @description Delivery Rate 24H
   */
  delivery_rate_24h?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Enabled
   * @description Enabled
   */
  enabled?: boolean;
  /**
   * Error
   * @description Error
   */
  error?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Plugin
   * @description Plugin
   */
  plugin?: number;
  /**
   * Plugin Info
   * @description Plugin Info
   */
  plugin_info?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Team Id
   * @description Team Id
   */
  team_id?: number;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REARRANGE_PIPELINE_TRANSFORMATION_CONFIGS tool output.
 */
type POSTHOG_REARRANGE_PIPELINE_TRANSFORMATION_CONFIGS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REARRANGE_PROJECT_IMPORT_APP_CONFIGURATIONS tool input.
 */
type POSTHOG_REARRANGE_PROJECT_IMPORT_APP_CONFIGURATIONS_INPUT = {
  /**
   * Config
   * @description Config
   */
  config?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Delivery Rate 24H
   * @description Delivery Rate 24H
   */
  delivery_rate_24h?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Enabled
   * @description Enabled
   */
  enabled?: boolean;
  /**
   * Error
   * @description Error
   */
  error?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Plugin
   * @description Plugin
   */
  plugin?: number;
  /**
   * Plugin Info
   * @description Plugin Info
   */
  plugin_info?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Team Id
   * @description Team Id
   */
  team_id?: number;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REARRANGE_PROJECT_IMPORT_APP_CONFIGURATIONS tool output.
 */
type POSTHOG_REARRANGE_PROJECT_IMPORT_APP_CONFIGURATIONS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REARRANGE_PROJECT_PIPELINE_DESTINATION_CONFIGS tool input.
 */
type POSTHOG_REARRANGE_PROJECT_PIPELINE_DESTINATION_CONFIGS_INPUT = {
  /**
   * Config
   * @description Config
   */
  config?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Delivery Rate 24H
   * @description Delivery Rate 24H
   */
  delivery_rate_24h?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Enabled
   * @description Enabled
   */
  enabled?: boolean;
  /**
   * Error
   * @description Error
   */
  error?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Plugin
   * @description Plugin
   */
  plugin?: number;
  /**
   * Plugin Info
   * @description Plugin Info
   */
  plugin_info?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Team Id
   * @description Team Id
   */
  team_id?: number;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REARRANGE_PROJECT_PIPELINE_DESTINATION_CONFIGS tool output.
 */
type POSTHOG_REARRANGE_PROJECT_PIPELINE_DESTINATION_CONFIGS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RECONFIGURE_PLUGIN_ORDER_AND_STATUS_IN_PROJECT tool input.
 */
type POSTHOG_RECONFIGURE_PLUGIN_ORDER_AND_STATUS_IN_PROJECT_INPUT = {
  /**
   * Config
   * @description Config
   */
  config?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Delivery Rate 24H
   * @description Delivery Rate 24H
   */
  delivery_rate_24h?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Enabled
   * @description Enabled
   */
  enabled?: boolean;
  /**
   * Error
   * @description Error
   */
  error?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Plugin
   * @description Plugin
   */
  plugin?: number;
  /**
   * Plugin Info
   * @description Plugin Info
   */
  plugin_info?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Team Id
   * @description Team Id
   */
  team_id?: number;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RECONFIGURE_PLUGIN_ORDER_AND_STATUS_IN_PROJECT tool output.
 */
type POSTHOG_RECONFIGURE_PLUGIN_ORDER_AND_STATUS_IN_PROJECT_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REMOVE_DOMAIN_BY_UUID_FROM_ORGANIZATION tool input.
 */
type POSTHOG_REMOVE_DOMAIN_BY_UUID_FROM_ORGANIZATION_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this domain.
   */
  id?: string;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REMOVE_DOMAIN_BY_UUID_FROM_ORGANIZATION tool output.
 */
type POSTHOG_REMOVE_DOMAIN_BY_UUID_FROM_ORGANIZATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REMOVE_EARLY_ACCESS_FEATURE_FROM_PROJECT tool input.
 */
type POSTHOG_REMOVE_EARLY_ACCESS_FEATURE_FROM_PROJECT_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this early access feature.
   */
  id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REMOVE_EARLY_ACCESS_FEATURE_FROM_PROJECT tool output.
 */
type POSTHOG_REMOVE_EARLY_ACCESS_FEATURE_FROM_PROJECT_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REMOVE_EXPLICIT_PROJECT_MEMBER_BY_UUID tool input.
 */
type POSTHOG_REMOVE_EXPLICIT_PROJECT_MEMBER_BY_UUID_INPUT = {
  /**
   * Parent  Membership  User  Uuid
   * @description Parent Membership User Uuid
   */
  parent__membership__user__uuid?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REMOVE_EXPLICIT_PROJECT_MEMBER_BY_UUID tool output.
 */
type POSTHOG_REMOVE_EXPLICIT_PROJECT_MEMBER_BY_UUID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REMOVE_FEATURE_FLAG_ROLE_ACCESS_BY_ID tool input.
 */
type POSTHOG_REMOVE_FEATURE_FLAG_ROLE_ACCESS_BY_ID_INPUT = {
  /**
   * Feature Flag Id
   * @description Feature Flag Id
   */
  feature_flag_id?: number;
  /**
   * Id
   * @description A unique integer value identifying this feature flag role access.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REMOVE_FEATURE_FLAG_ROLE_ACCESS_BY_ID tool output.
 */
type POSTHOG_REMOVE_FEATURE_FLAG_ROLE_ACCESS_BY_ID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REMOVE_MEMBER_FROM_ORGANIZATION_BY_UUID tool input.
 */
type POSTHOG_REMOVE_MEMBER_FROM_ORGANIZATION_BY_UUID_INPUT = {
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
  /**
   * User  Uuid
   * @description User Uuid
   */
  user__uuid?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REMOVE_MEMBER_FROM_ORGANIZATION_BY_UUID tool output.
 */
type POSTHOG_REMOVE_MEMBER_FROM_ORGANIZATION_BY_UUID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REMOVE_ORGANIZATION_BATCH_EXPORT_BY_UUID tool input.
 */
type POSTHOG_REMOVE_ORGANIZATION_BATCH_EXPORT_BY_UUID_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this batch export.
   */
  id?: string;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REMOVE_ORGANIZATION_BATCH_EXPORT_BY_UUID tool output.
 */
type POSTHOG_REMOVE_ORGANIZATION_BATCH_EXPORT_BY_UUID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REMOVE_ORGANIZATION_PIPELINE_DESTINATION tool input.
 */
type POSTHOG_REMOVE_ORGANIZATION_PIPELINE_DESTINATION_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin.
   */
  id?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REMOVE_ORGANIZATION_PIPELINE_DESTINATION tool output.
 */
type POSTHOG_REMOVE_ORGANIZATION_PIPELINE_DESTINATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REMOVE_ORGANIZATION_PIPELINE_TRANSFORMATION tool input.
 */
type POSTHOG_REMOVE_ORGANIZATION_PIPELINE_TRANSFORMATION_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin.
   */
  id?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REMOVE_ORGANIZATION_PIPELINE_TRANSFORMATION tool output.
 */
type POSTHOG_REMOVE_ORGANIZATION_PIPELINE_TRANSFORMATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REMOVE_ORGANIZATION_PLUGIN_BY_ID tool input.
 */
type POSTHOG_REMOVE_ORGANIZATION_PLUGIN_BY_ID_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin.
   */
  id?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REMOVE_ORGANIZATION_PLUGIN_BY_ID tool output.
 */
type POSTHOG_REMOVE_ORGANIZATION_PLUGIN_BY_ID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REMOVE_ORGANIZATION_PROXY_RECORD tool input.
 */
type POSTHOG_REMOVE_ORGANIZATION_PROXY_RECORD_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REMOVE_ORGANIZATION_PROXY_RECORD tool output.
 */
type POSTHOG_REMOVE_ORGANIZATION_PROXY_RECORD_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REMOVE_ORGANIZATION_ROLE_BY_ID tool input.
 */
type POSTHOG_REMOVE_ORGANIZATION_ROLE_BY_ID_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this role.
   */
  id?: string;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REMOVE_ORGANIZATION_ROLE_BY_ID tool output.
 */
type POSTHOG_REMOVE_ORGANIZATION_ROLE_BY_ID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REMOVE_ORG_PIPELINE_IMPORT_APP_BY_ID tool input.
 */
type POSTHOG_REMOVE_ORG_PIPELINE_IMPORT_APP_BY_ID_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin.
   */
  id?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REMOVE_ORG_PIPELINE_IMPORT_APP_BY_ID tool output.
 */
type POSTHOG_REMOVE_ORG_PIPELINE_IMPORT_APP_BY_ID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REMOVE_PIPELINE_DESTINATION_CONFIG tool input.
 */
type POSTHOG_REMOVE_PIPELINE_DESTINATION_CONFIG_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin config.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REMOVE_PIPELINE_DESTINATION_CONFIG tool output.
 */
type POSTHOG_REMOVE_PIPELINE_DESTINATION_CONFIG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REMOVE_PIPELINE_FRONTEND_APP_BY_ID tool input.
 */
type POSTHOG_REMOVE_PIPELINE_FRONTEND_APP_BY_ID_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin.
   */
  id?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REMOVE_PIPELINE_FRONTEND_APP_BY_ID tool output.
 */
type POSTHOG_REMOVE_PIPELINE_FRONTEND_APP_BY_ID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REMOVE_PIPELINE_FRONTEND_APP_CONFIG tool input.
 */
type POSTHOG_REMOVE_PIPELINE_FRONTEND_APP_CONFIG_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin config.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REMOVE_PIPELINE_FRONTEND_APP_CONFIG tool output.
 */
type POSTHOG_REMOVE_PIPELINE_FRONTEND_APP_CONFIG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REMOVE_PIPELINE_IMPORT_APP_CONFIG tool input.
 */
type POSTHOG_REMOVE_PIPELINE_IMPORT_APP_CONFIG_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin config.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REMOVE_PIPELINE_IMPORT_APP_CONFIG tool output.
 */
type POSTHOG_REMOVE_PIPELINE_IMPORT_APP_CONFIG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REMOVE_PIPELINE_TRANSFORMATION_CONFIG_BY_ID tool input.
 */
type POSTHOG_REMOVE_PIPELINE_TRANSFORMATION_CONFIG_BY_ID_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin config.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REMOVE_PIPELINE_TRANSFORMATION_CONFIG_BY_ID tool output.
 */
type POSTHOG_REMOVE_PIPELINE_TRANSFORMATION_CONFIG_BY_ID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REMOVE_PROJECT_DASHBOARD_COLLABORATOR tool input.
 */
type POSTHOG_REMOVE_PROJECT_DASHBOARD_COLLABORATOR_INPUT = {
  /**
   * Dashboard Id
   * @description Dashboard Id
   */
  dashboard_id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * User  Uuid
   * @description User Uuid
   */
  user__uuid?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REMOVE_PROJECT_DASHBOARD_COLLABORATOR tool output.
 */
type POSTHOG_REMOVE_PROJECT_DASHBOARD_COLLABORATOR_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REMOVE_PROJECT_EVENT_DEFINITION tool input.
 */
type POSTHOG_REMOVE_PROJECT_EVENT_DEFINITION_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this event definition.
   */
  id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REMOVE_PROJECT_EVENT_DEFINITION tool output.
 */
type POSTHOG_REMOVE_PROJECT_EVENT_DEFINITION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REMOVE_PROJECT_EXPERIMENT_BY_ID tool input.
 */
type POSTHOG_REMOVE_PROJECT_EXPERIMENT_BY_ID_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this experiment.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REMOVE_PROJECT_EXPERIMENT_BY_ID tool output.
 */
type POSTHOG_REMOVE_PROJECT_EXPERIMENT_BY_ID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REMOVE_PROJECT_PLUGIN_CONFIGURATION tool input.
 */
type POSTHOG_REMOVE_PROJECT_PLUGIN_CONFIGURATION_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin config.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REMOVE_PROJECT_PLUGIN_CONFIGURATION tool output.
 */
type POSTHOG_REMOVE_PROJECT_PLUGIN_CONFIGURATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REMOVE_PROPERTY_DEFINITION_BY_UUID tool input.
 */
type POSTHOG_REMOVE_PROPERTY_DEFINITION_BY_UUID_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this property definition.
   */
  id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REMOVE_PROPERTY_DEFINITION_BY_UUID tool output.
 */
type POSTHOG_REMOVE_PROPERTY_DEFINITION_BY_UUID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REMOVE_ROLE_MEMBERSHIP_BY_UUID tool input.
 */
type POSTHOG_REMOVE_ROLE_MEMBERSHIP_BY_UUID_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this role membership.
   */
  id?: string;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
  /**
   * Role Id
   * @description Role Id
   */
  role_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REMOVE_ROLE_MEMBERSHIP_BY_UUID tool output.
 */
type POSTHOG_REMOVE_ROLE_MEMBERSHIP_BY_UUID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REMOVE_SESSION_RECORDING_FROM_PLAYLIST tool input.
 */
type POSTHOG_REMOVE_SESSION_RECORDING_FROM_PLAYLIST_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Session Recording Id
   * @description Session Recording Id
   */
  session_recording_id?: string;
  /**
   * Short Id
   * @description Short Id
   */
  short_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REMOVE_SESSION_RECORDING_FROM_PLAYLIST tool output.
 */
type POSTHOG_REMOVE_SESSION_RECORDING_FROM_PLAYLIST_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REMOVE_SPECIFIC_PROJECT_BATCH_EXPORT tool input.
 */
type POSTHOG_REMOVE_SPECIFIC_PROJECT_BATCH_EXPORT_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this batch export.
   */
  id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REMOVE_SPECIFIC_PROJECT_BATCH_EXPORT tool output.
 */
type POSTHOG_REMOVE_SPECIFIC_PROJECT_BATCH_EXPORT_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REMOVE_SPECIFIC_PROJECT_QUERY tool input.
 */
type POSTHOG_REMOVE_SPECIFIC_PROJECT_QUERY_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REMOVE_SPECIFIC_PROJECT_QUERY tool output.
 */
type POSTHOG_REMOVE_SPECIFIC_PROJECT_QUERY_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_AND_DELETE_PROJECT_PERSON_TRENDS tool input.
 */
type POSTHOG_RETRIEVE_AND_DELETE_PROJECT_PERSON_TRENDS_INPUT = {
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_AND_DELETE_PROJECT_PERSON_TRENDS tool output.
 */
type POSTHOG_RETRIEVE_AND_DELETE_PROJECT_PERSON_TRENDS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_APP_METRICS_BY_IDS tool input.
 */
type POSTHOG_RETRIEVE_APP_METRICS_BY_IDS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin config.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_APP_METRICS_BY_IDS tool output.
 */
type POSTHOG_RETRIEVE_APP_METRICS_BY_IDS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_APP_METRICS_ERROR_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_APP_METRICS_ERROR_DETAILS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin config.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_APP_METRICS_ERROR_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_APP_METRICS_ERROR_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_ASYNC_QUERY_STATUS_BY_ID tool input.
 */
type POSTHOG_RETRIEVE_ASYNC_QUERY_STATUS_BY_ID_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_ASYNC_QUERY_STATUS_BY_ID tool output.
 */
type POSTHOG_RETRIEVE_ASYNC_QUERY_STATUS_BY_ID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_BATCH_EXPORT_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_BATCH_EXPORT_DETAILS_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this batch export.
   */
  id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_BATCH_EXPORT_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_BATCH_EXPORT_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_BATCH_EXPORT_LOGS_BY_UUID tool input.
 */
type POSTHOG_RETRIEVE_BATCH_EXPORT_LOGS_BY_UUID_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this batch export.
   */
  id?: string;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_BATCH_EXPORT_LOGS_BY_UUID tool output.
 */
type POSTHOG_RETRIEVE_BATCH_EXPORT_LOGS_BY_UUID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_BATCH_EXPORT_RUN_LOGS tool input.
 */
type POSTHOG_RETRIEVE_BATCH_EXPORT_RUN_LOGS_INPUT = {
  /**
   * Batch Export Id
   * @description Batch Export Id
   */
  batch_export_id?: string;
  /**
   * Id
   * @description A UUID string identifying this batch export run.
   */
  id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_BATCH_EXPORT_RUN_LOGS tool output.
 */
type POSTHOG_RETRIEVE_BATCH_EXPORT_RUN_LOGS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_COHORT_ACTIVITY_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_COHORT_ACTIVITY_DETAILS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this cohort.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_COHORT_ACTIVITY_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_COHORT_ACTIVITY_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_COHORT_PERSON_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_COHORT_PERSON_DETAILS_INPUT = {
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Id
   * @description A unique integer value identifying this cohort.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_COHORT_PERSON_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_COHORT_PERSON_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_DASHBOARD_TEMPLATE_DETAILS_BY_UUID tool input.
 */
type POSTHOG_RETRIEVE_DASHBOARD_TEMPLATE_DETAILS_BY_UUID_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this dashboard template.
   */
  id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_DASHBOARD_TEMPLATE_DETAILS_BY_UUID tool output.
 */
type POSTHOG_RETRIEVE_DASHBOARD_TEMPLATE_DETAILS_BY_UUID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_DASHBOARD_TEMPLATE_SCHEMA tool input.
 */
type POSTHOG_RETRIEVE_DASHBOARD_TEMPLATE_SCHEMA_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_DASHBOARD_TEMPLATE_SCHEMA tool output.
 */
type POSTHOG_RETRIEVE_DASHBOARD_TEMPLATE_SCHEMA_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_EVENT_DEFINITIONS_BY_PROJECT_ID tool input.
 */
type POSTHOG_RETRIEVE_EVENT_DEFINITIONS_BY_PROJECT_ID_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_EVENT_DEFINITIONS_BY_PROJECT_ID tool output.
 */
type POSTHOG_RETRIEVE_EVENT_DEFINITIONS_BY_PROJECT_ID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_EVENT_DEFINITION_BY_UUID tool input.
 */
type POSTHOG_RETRIEVE_EVENT_DEFINITION_BY_UUID_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this event definition.
   */
  id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_EVENT_DEFINITION_BY_UUID tool output.
 */
type POSTHOG_RETRIEVE_EVENT_DEFINITION_BY_UUID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_EXPERIMENTS_REQUIRING_FLAG_IMPLEMENTATION tool input.
 */
type POSTHOG_RETRIEVE_EXPERIMENTS_REQUIRING_FLAG_IMPLEMENTATION_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_EXPERIMENTS_REQUIRING_FLAG_IMPLEMENTATION tool output.
 */
type POSTHOG_RETRIEVE_EXPERIMENTS_REQUIRING_FLAG_IMPLEMENTATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_EXPERIMENT_DETAILS_BY_IDS tool input.
 */
type POSTHOG_RETRIEVE_EXPERIMENT_DETAILS_BY_IDS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this experiment.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_EXPERIMENT_DETAILS_BY_IDS tool output.
 */
type POSTHOG_RETRIEVE_EXPERIMENT_DETAILS_BY_IDS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_EXPORT_UNSUBSCRIBE_CONFIGS tool input.
 */
type POSTHOG_RETRIEVE_EXPORT_UNSUBSCRIBE_CONFIGS_INPUT = {
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_EXPORT_UNSUBSCRIBE_CONFIGS tool output.
 */
type POSTHOG_RETRIEVE_EXPORT_UNSUBSCRIBE_CONFIGS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_FEATURE_FLAGS_ACTIVITY_LOG tool input.
 */
type POSTHOG_RETRIEVE_FEATURE_FLAGS_ACTIVITY_LOG_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_FEATURE_FLAGS_ACTIVITY_LOG tool output.
 */
type POSTHOG_RETRIEVE_FEATURE_FLAGS_ACTIVITY_LOG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_FEATURE_FLAGS_EVALUATION_REASONS tool input.
 */
type POSTHOG_RETRIEVE_FEATURE_FLAGS_EVALUATION_REASONS_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_FEATURE_FLAGS_EVALUATION_REASONS tool output.
 */
type POSTHOG_RETRIEVE_FEATURE_FLAGS_EVALUATION_REASONS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_FEATURE_FLAG_ACTIVITY_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_FEATURE_FLAG_ACTIVITY_DETAILS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this feature flag.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_FEATURE_FLAG_ACTIVITY_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_FEATURE_FLAG_ACTIVITY_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_FEATURE_FLAG_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_FEATURE_FLAG_DETAILS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this feature flag.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_FEATURE_FLAG_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_FEATURE_FLAG_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_FEATURE_FLAG_ROLE_ACCESS_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_FEATURE_FLAG_ROLE_ACCESS_DETAILS_INPUT = {
  /**
   * Feature Flag Id
   * @description Feature Flag Id
   */
  feature_flag_id?: number;
  /**
   * Id
   * @description A unique integer value identifying this feature flag role access.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_FEATURE_FLAG_ROLE_ACCESS_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_FEATURE_FLAG_ROLE_ACCESS_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_FILTERED_PROJECT_PROPERTY_DEFINITIONS tool input.
 */
type POSTHOG_RETRIEVE_FILTERED_PROJECT_PROPERTY_DEFINITIONS_INPUT = {
  /**
   * Event Names
   * @description If sent, response value will have `is_seen_on_filtered_events` populated. JSON-encoded
   */
  event_names?: string;
  /**
   * Excluded Properties
   * @description JSON-encoded list of excluded properties
   */
  excluded_properties?: string;
  /**
   * Filter By Event Names
   * @description Whether to return only properties for events in `event_names`
   */
  filter_by_event_names?: boolean;
  /**
   * Group Type Index
   * @description What group type is the property for. Only should be set if `type=group`
   */
  group_type_index?: number;
  /**
   * Is Feature Flag
   * @description Whether to return only (or excluding) feature flag properties
   */
  is_feature_flag?: boolean;
  /**
   * Is Numerical
   * @description Whether to return only (or excluding) numerical property definitions
   */
  is_numerical?: boolean;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Properties
   * @description Comma-separated list of properties to filter
   */
  properties?: string;
  /**
   * Search
   * @description Searches properties by name
   */
  search?: string;
  /**
   * Type
   * @description What property definitions to return * `event` - event * `person` - person * `group` - group * `session` - session
   * @default event
   * @enum {string}
   */
  type: "event" | "person" | "group" | "session";
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_FILTERED_PROJECT_PROPERTY_DEFINITIONS tool output.
 */
type POSTHOG_RETRIEVE_FILTERED_PROJECT_PROPERTY_DEFINITIONS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_FUNNEL_INSIGHTS_IN_PROJECT tool input.
 */
type POSTHOG_RETRIEVE_FUNNEL_INSIGHTS_IN_PROJECT_INPUT = {
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_FUNNEL_INSIGHTS_IN_PROJECT tool output.
 */
type POSTHOG_RETRIEVE_FUNNEL_INSIGHTS_IN_PROJECT_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_GROUP_PROPERTY_DEFINITIONS_BY_PROJECT_ID tool input.
 */
type POSTHOG_RETRIEVE_GROUP_PROPERTY_DEFINITIONS_BY_PROJECT_ID_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_GROUP_PROPERTY_DEFINITIONS_BY_PROJECT_ID tool output.
 */
type POSTHOG_RETRIEVE_GROUP_PROPERTY_DEFINITIONS_BY_PROJECT_ID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_GROUP_PROPERTY_VALUES_BY_INDEX_AND_KEY tool input.
 */
type POSTHOG_RETRIEVE_GROUP_PROPERTY_VALUES_BY_INDEX_AND_KEY_INPUT = {
  /**
   * Group Type Index
   * @description Specify the group type to find property values of
   */
  group_type_index?: number;
  /**
   * Key
   * @description Specify the property key to find values for
   */
  key?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_GROUP_PROPERTY_VALUES_BY_INDEX_AND_KEY tool output.
 */
type POSTHOG_RETRIEVE_GROUP_PROPERTY_VALUES_BY_INDEX_AND_KEY_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_HEDGEHOG_CONFIGURATION_BY_UUID tool input.
 */
type POSTHOG_RETRIEVE_HEDGEHOG_CONFIGURATION_BY_UUID_INPUT = {
  /**
   * Uuid
   * @description Uuid
   */
  uuid?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_HEDGEHOG_CONFIGURATION_BY_UUID tool output.
 */
type POSTHOG_RETRIEVE_HEDGEHOG_CONFIGURATION_BY_UUID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_HISTORICAL_APP_METRICS_EXPORT tool input.
 */
type POSTHOG_RETRIEVE_HISTORICAL_APP_METRICS_EXPORT_INPUT = {
  /**
   * Plugin Config Id
   * @description Plugin Config Id
   */
  plugin_config_id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_HISTORICAL_APP_METRICS_EXPORT tool output.
 */
type POSTHOG_RETRIEVE_HISTORICAL_APP_METRICS_EXPORT_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_IMPORTANT_PROJECT_ACTIVITY_LOG tool input.
 */
type POSTHOG_RETRIEVE_IMPORTANT_PROJECT_ACTIVITY_LOG_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_IMPORTANT_PROJECT_ACTIVITY_LOG tool output.
 */
type POSTHOG_RETRIEVE_IMPORTANT_PROJECT_ACTIVITY_LOG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_INSIGHT_SHARING_CONFIGURATIONS tool input.
 */
type POSTHOG_RETRIEVE_INSIGHT_SHARING_CONFIGURATIONS_INPUT = {
  /**
   * Insight Id
   * @description Insight Id
   */
  insight_id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_INSIGHT_SHARING_CONFIGURATIONS tool output.
 */
type POSTHOG_RETRIEVE_INSIGHT_SHARING_CONFIGURATIONS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_LAST_VIEWED_INSIGHTS_FOR_USER tool input.
 */
type POSTHOG_RETRIEVE_LAST_VIEWED_INSIGHTS_FOR_USER_INPUT = {
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_LAST_VIEWED_INSIGHTS_FOR_USER tool output.
 */
type POSTHOG_RETRIEVE_LAST_VIEWED_INSIGHTS_FOR_USER_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_MATCHING_EVENTS_FOR_SESSION_RECORDING tool input.
 */
type POSTHOG_RETRIEVE_MATCHING_EVENTS_FOR_SESSION_RECORDING_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_MATCHING_EVENTS_FOR_SESSION_RECORDING tool output.
 */
type POSTHOG_RETRIEVE_MATCHING_EVENTS_FOR_SESSION_RECORDING_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_NOTEBOOK_ACTIVITY_FOR_PROJECT tool input.
 */
type POSTHOG_RETRIEVE_NOTEBOOK_ACTIVITY_FOR_PROJECT_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_NOTEBOOK_ACTIVITY_FOR_PROJECT tool output.
 */
type POSTHOG_RETRIEVE_NOTEBOOK_ACTIVITY_FOR_PROJECT_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_NOTEBOOK_ACTIVITY_LOG tool input.
 */
type POSTHOG_RETRIEVE_NOTEBOOK_ACTIVITY_LOG_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Short Id
   * @description Short Id
   */
  short_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_NOTEBOOK_ACTIVITY_LOG tool output.
 */
type POSTHOG_RETRIEVE_NOTEBOOK_ACTIVITY_LOG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_NOTEBOOK_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_NOTEBOOK_DETAILS_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Short Id
   * @description Short Id
   */
  short_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_NOTEBOOK_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_NOTEBOOK_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_ORGANIZATION_PIPELINE_FRONTEND_APP tool input.
 */
type POSTHOG_RETRIEVE_ORGANIZATION_PIPELINE_FRONTEND_APP_INPUT = {
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_ORGANIZATION_PIPELINE_FRONTEND_APP tool output.
 */
type POSTHOG_RETRIEVE_ORGANIZATION_PIPELINE_FRONTEND_APP_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_ORGANIZATION_PIPELINE_UNSUBSCRIBE_CONFIGS tool input.
 */
type POSTHOG_RETRIEVE_ORGANIZATION_PIPELINE_UNSUBSCRIBE_CONFIGS_INPUT = {
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_ORGANIZATION_PIPELINE_UNSUBSCRIBE_CONFIGS tool output.
 */
type POSTHOG_RETRIEVE_ORGANIZATION_PIPELINE_UNSUBSCRIBE_CONFIGS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_ORGANIZATION_PLUGIN_ACTIVITY tool input.
 */
type POSTHOG_RETRIEVE_ORGANIZATION_PLUGIN_ACTIVITY_INPUT = {
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_ORGANIZATION_PLUGIN_ACTIVITY tool output.
 */
type POSTHOG_RETRIEVE_ORGANIZATION_PLUGIN_ACTIVITY_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_ORGANIZATION_PLUGIN_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_ORGANIZATION_PLUGIN_DETAILS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin.
   */
  id?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_ORGANIZATION_PLUGIN_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_ORGANIZATION_PLUGIN_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_ORGANIZATION_PLUGIN_REPOSITORY_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_ORGANIZATION_PLUGIN_REPOSITORY_DETAILS_INPUT = {
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_ORGANIZATION_PLUGIN_REPOSITORY_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_ORGANIZATION_PLUGIN_REPOSITORY_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_ORGANIZATION_PLUGIN_UNSUBSCRIBE_CONFIGS tool input.
 */
type POSTHOG_RETRIEVE_ORGANIZATION_PLUGIN_UNSUBSCRIBE_CONFIGS_INPUT = {
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_ORGANIZATION_PLUGIN_UNSUBSCRIBE_CONFIGS tool output.
 */
type POSTHOG_RETRIEVE_ORGANIZATION_PLUGIN_UNSUBSCRIBE_CONFIGS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_ORGANIZATION_PROJECT_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_ORGANIZATION_PROJECT_DETAILS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this team (soon to be environment).
   */
  id?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_ORGANIZATION_PROJECT_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_ORGANIZATION_PROJECT_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_ORGANIZATION_ROLE_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_ORGANIZATION_ROLE_DETAILS_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this role.
   */
  id?: string;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_ORGANIZATION_ROLE_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_ORGANIZATION_ROLE_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_ORGANIZATION_S_PIPELINE_REPOSITORY_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_ORGANIZATION_S_PIPELINE_REPOSITORY_DETAILS_INPUT = {
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_ORGANIZATION_S_PIPELINE_REPOSITORY_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_ORGANIZATION_S_PIPELINE_REPOSITORY_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_ORGANIZATION_S_UNUSED_PIPELINE_APPS tool input.
 */
type POSTHOG_RETRIEVE_ORGANIZATION_S_UNUSED_PIPELINE_APPS_INPUT = {
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_ORGANIZATION_S_UNUSED_PIPELINE_APPS tool output.
 */
type POSTHOG_RETRIEVE_ORGANIZATION_S_UNUSED_PIPELINE_APPS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_ORG_PIPELINE_TRANSFORMATION_ACTIVITY tool input.
 */
type POSTHOG_RETRIEVE_ORG_PIPELINE_TRANSFORMATION_ACTIVITY_INPUT = {
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_ORG_PIPELINE_TRANSFORMATION_ACTIVITY tool output.
 */
type POSTHOG_RETRIEVE_ORG_PIPELINE_TRANSFORMATION_ACTIVITY_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_OR_DELETE_PERSON_RETENTION_DATA tool input.
 */
type POSTHOG_RETRIEVE_OR_DELETE_PERSON_RETENTION_DATA_INPUT = {
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_OR_DELETE_PERSON_RETENTION_DATA tool output.
 */
type POSTHOG_RETRIEVE_OR_DELETE_PERSON_RETENTION_DATA_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_OR_DELETE_PROJECT_PERSONS_FUNNEL_DATA tool input.
 */
type POSTHOG_RETRIEVE_OR_DELETE_PROJECT_PERSONS_FUNNEL_DATA_INPUT = {
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_OR_DELETE_PROJECT_PERSONS_FUNNEL_DATA tool output.
 */
type POSTHOG_RETRIEVE_OR_DELETE_PROJECT_PERSONS_FUNNEL_DATA_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PAGINATED_ORGANIZATION_LIST tool input.
 */
type POSTHOG_RETRIEVE_PAGINATED_ORGANIZATION_LIST_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   * @default 1
   */
  limit: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PAGINATED_ORGANIZATION_LIST tool output.
 */
type POSTHOG_RETRIEVE_PAGINATED_ORGANIZATION_LIST_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PERSONS_FUNNEL_CORRELATION_DATA tool input.
 */
type POSTHOG_RETRIEVE_PERSONS_FUNNEL_CORRELATION_DATA_INPUT = {
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PERSONS_FUNNEL_CORRELATION_DATA tool output.
 */
type POSTHOG_RETRIEVE_PERSONS_FUNNEL_CORRELATION_DATA_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PERSON_DETAILS_BY_ID tool input.
 */
type POSTHOG_RETRIEVE_PERSON_DETAILS_BY_ID_INPUT = {
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Id
   * @description A unique integer value identifying this person.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PERSON_DETAILS_BY_ID tool output.
 */
type POSTHOG_RETRIEVE_PERSON_DETAILS_BY_ID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PERSON_DETAILS_BY_PROJECT tool input.
 */
type POSTHOG_RETRIEVE_PERSON_DETAILS_BY_PROJECT_INPUT = {
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PERSON_DETAILS_BY_PROJECT tool output.
 */
type POSTHOG_RETRIEVE_PERSON_DETAILS_BY_PROJECT_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PERSON_LIFECYCLE_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_PERSON_LIFECYCLE_DETAILS_INPUT = {
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PERSON_LIFECYCLE_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_PERSON_LIFECYCLE_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PERSON_PROPERTIES_TIMELINE tool input.
 */
type POSTHOG_RETRIEVE_PERSON_PROPERTIES_TIMELINE_INPUT = {
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Id
   * @description A unique integer value identifying this person.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PERSON_PROPERTIES_TIMELINE tool output.
 */
type POSTHOG_RETRIEVE_PERSON_PROPERTIES_TIMELINE_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PERSON_S_ACTIVITY_AND_DELETE_OPTIONS tool input.
 */
type POSTHOG_RETRIEVE_PERSON_S_ACTIVITY_AND_DELETE_OPTIONS_INPUT = {
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Id
   * @description A unique integer value identifying this person.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PERSON_S_ACTIVITY_AND_DELETE_OPTIONS tool output.
 */
type POSTHOG_RETRIEVE_PERSON_S_ACTIVITY_AND_DELETE_OPTIONS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PERSON_VALUES_BY_PROJECT tool input.
 */
type POSTHOG_RETRIEVE_PERSON_VALUES_BY_PROJECT_INPUT = {
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PERSON_VALUES_BY_PROJECT tool output.
 */
type POSTHOG_RETRIEVE_PERSON_VALUES_BY_PROJECT_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_DESTINATION_ACTIVITY tool input.
 */
type POSTHOG_RETRIEVE_PIPELINE_DESTINATION_ACTIVITY_INPUT = {
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_DESTINATION_ACTIVITY tool output.
 */
type POSTHOG_RETRIEVE_PIPELINE_DESTINATION_ACTIVITY_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_DESTINATION_CONFIG_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_PIPELINE_DESTINATION_CONFIG_DETAILS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin config.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_DESTINATION_CONFIG_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_PIPELINE_DESTINATION_CONFIG_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_DESTINATION_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_PIPELINE_DESTINATION_DETAILS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin.
   */
  id?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_DESTINATION_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_PIPELINE_DESTINATION_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_DESTINATION_FRONTEND_CONFIG tool input.
 */
type POSTHOG_RETRIEVE_PIPELINE_DESTINATION_FRONTEND_CONFIG_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin config.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_DESTINATION_FRONTEND_CONFIG tool output.
 */
type POSTHOG_RETRIEVE_PIPELINE_DESTINATION_FRONTEND_CONFIG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_DESTINATION_PLUGIN_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_PIPELINE_DESTINATION_PLUGIN_DETAILS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin.
   */
  id?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_DESTINATION_PLUGIN_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_PIPELINE_DESTINATION_PLUGIN_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_FRONTEND_APP_ACTIVITY tool input.
 */
type POSTHOG_RETRIEVE_PIPELINE_FRONTEND_APP_ACTIVITY_INPUT = {
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_FRONTEND_APP_ACTIVITY tool output.
 */
type POSTHOG_RETRIEVE_PIPELINE_FRONTEND_APP_ACTIVITY_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_FRONTEND_APP_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_PIPELINE_FRONTEND_APP_DETAILS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin.
   */
  id?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_FRONTEND_APP_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_PIPELINE_FRONTEND_APP_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_FRONTEND_APP_SOURCE_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_PIPELINE_FRONTEND_APP_SOURCE_DETAILS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin.
   */
  id?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_FRONTEND_APP_SOURCE_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_PIPELINE_FRONTEND_APP_SOURCE_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_FRONTEND_PLUGIN_CONFIG tool input.
 */
type POSTHOG_RETRIEVE_PIPELINE_FRONTEND_PLUGIN_CONFIG_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin config.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_FRONTEND_PLUGIN_CONFIG tool output.
 */
type POSTHOG_RETRIEVE_PIPELINE_FRONTEND_PLUGIN_CONFIG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_IMPORT_APPS_ACTIVITY tool input.
 */
type POSTHOG_RETRIEVE_PIPELINE_IMPORT_APPS_ACTIVITY_INPUT = {
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_IMPORT_APPS_ACTIVITY tool output.
 */
type POSTHOG_RETRIEVE_PIPELINE_IMPORT_APPS_ACTIVITY_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_IMPORT_APP_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_PIPELINE_IMPORT_APP_DETAILS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin.
   */
  id?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_IMPORT_APP_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_PIPELINE_IMPORT_APP_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_IMPORT_APP_SOURCE_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_PIPELINE_IMPORT_APP_SOURCE_DETAILS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin.
   */
  id?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_IMPORT_APP_SOURCE_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_PIPELINE_IMPORT_APP_SOURCE_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_PLUGIN_DETAILS_BY_ID tool input.
 */
type POSTHOG_RETRIEVE_PIPELINE_PLUGIN_DETAILS_BY_ID_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin.
   */
  id?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_PLUGIN_DETAILS_BY_ID tool output.
 */
type POSTHOG_RETRIEVE_PIPELINE_PLUGIN_DETAILS_BY_ID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_PLUGIN_SOURCE tool input.
 */
type POSTHOG_RETRIEVE_PIPELINE_PLUGIN_SOURCE_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin.
   */
  id?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_PLUGIN_SOURCE tool output.
 */
type POSTHOG_RETRIEVE_PIPELINE_PLUGIN_SOURCE_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_TRANSFORMATION_ACTIVITY tool input.
 */
type POSTHOG_RETRIEVE_PIPELINE_TRANSFORMATION_ACTIVITY_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin config.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_TRANSFORMATION_ACTIVITY tool output.
 */
type POSTHOG_RETRIEVE_PIPELINE_TRANSFORMATION_ACTIVITY_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_TRANSFORMATION_CONFIG tool input.
 */
type POSTHOG_RETRIEVE_PIPELINE_TRANSFORMATION_CONFIG_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin config.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_TRANSFORMATION_CONFIG tool output.
 */
type POSTHOG_RETRIEVE_PIPELINE_TRANSFORMATION_CONFIG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_TRANSFORMATION_FRONTEND_CONFIG tool input.
 */
type POSTHOG_RETRIEVE_PIPELINE_TRANSFORMATION_FRONTEND_CONFIG_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin config.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PIPELINE_TRANSFORMATION_FRONTEND_CONFIG tool output.
 */
type POSTHOG_RETRIEVE_PIPELINE_TRANSFORMATION_FRONTEND_CONFIG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PLUGIN_CONFIG_ACTIVITY tool input.
 */
type POSTHOG_RETRIEVE_PLUGIN_CONFIG_ACTIVITY_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin config.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PLUGIN_CONFIG_ACTIVITY tool output.
 */
type POSTHOG_RETRIEVE_PLUGIN_CONFIG_ACTIVITY_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PLUGIN_CONFIG_ACTIVITY_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_PLUGIN_CONFIG_ACTIVITY_DETAILS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin config.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PLUGIN_CONFIG_ACTIVITY_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_PLUGIN_CONFIG_ACTIVITY_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PLUGIN_CONFIG_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_PLUGIN_CONFIG_DETAILS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin config.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PLUGIN_CONFIG_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_PLUGIN_CONFIG_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PLUGIN_CONFIG_FRONTEND tool input.
 */
type POSTHOG_RETRIEVE_PLUGIN_CONFIG_FRONTEND_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin config.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PLUGIN_CONFIG_FRONTEND tool output.
 */
type POSTHOG_RETRIEVE_PLUGIN_CONFIG_FRONTEND_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PLUGIN_FRONTEND_CONFIG tool input.
 */
type POSTHOG_RETRIEVE_PLUGIN_FRONTEND_CONFIG_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin config.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PLUGIN_FRONTEND_CONFIG tool output.
 */
type POSTHOG_RETRIEVE_PLUGIN_FRONTEND_CONFIG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PLUGIN_SOURCE_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_PLUGIN_SOURCE_DETAILS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin.
   */
  id?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PLUGIN_SOURCE_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_PLUGIN_SOURCE_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PLUGIN_UPDATE_INFO tool input.
 */
type POSTHOG_RETRIEVE_PLUGIN_UPDATE_INFO_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin.
   */
  id?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PLUGIN_UPDATE_INFO tool output.
 */
type POSTHOG_RETRIEVE_PLUGIN_UPDATE_INFO_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PLUGIN_UPDATE_STATUS tool input.
 */
type POSTHOG_RETRIEVE_PLUGIN_UPDATE_STATUS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin.
   */
  id?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PLUGIN_UPDATE_STATUS tool output.
 */
type POSTHOG_RETRIEVE_PLUGIN_UPDATE_STATUS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_ACTION_DETAILS_BY_ID tool input.
 */
type POSTHOG_RETRIEVE_PROJECT_ACTION_DETAILS_BY_ID_INPUT = {
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Id
   * @description A unique integer value identifying this action.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_ACTION_DETAILS_BY_ID tool output.
 */
type POSTHOG_RETRIEVE_PROJECT_ACTION_DETAILS_BY_ID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_ACTIVITY_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_PROJECT_ACTIVITY_DETAILS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this team (soon to be environment).
   */
  id?: number;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_ACTIVITY_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_PROJECT_ACTIVITY_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_ACTIVITY_INSIGHTS tool input.
 */
type POSTHOG_RETRIEVE_PROJECT_ACTIVITY_INSIGHTS_INPUT = {
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_ACTIVITY_INSIGHTS tool output.
 */
type POSTHOG_RETRIEVE_PROJECT_ACTIVITY_INSIGHTS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_ACTIVITY_LOG_WITH_PAGINATION tool input.
 */
type POSTHOG_RETRIEVE_PROJECT_ACTIVITY_LOG_WITH_PAGINATION_INPUT = {
  /**
   * Cursor
   * @description The pagination cursor value.
   */
  cursor?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_ACTIVITY_LOG_WITH_PAGINATION tool output.
 */
type POSTHOG_RETRIEVE_PROJECT_ACTIVITY_LOG_WITH_PAGINATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_ANNOTATION_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_PROJECT_ANNOTATION_DETAILS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this annotation.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_ANNOTATION_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_PROJECT_ANNOTATION_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_COHORTS_ACTIVITY_LOG tool input.
 */
type POSTHOG_RETRIEVE_PROJECT_COHORTS_ACTIVITY_LOG_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_COHORTS_ACTIVITY_LOG tool output.
 */
type POSTHOG_RETRIEVE_PROJECT_COHORTS_ACTIVITY_LOG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_COHORTS_WITH_PAGINATION tool input.
 */
type POSTHOG_RETRIEVE_PROJECT_COHORTS_WITH_PAGINATION_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_COHORTS_WITH_PAGINATION tool output.
 */
type POSTHOG_RETRIEVE_PROJECT_COHORTS_WITH_PAGINATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_COHORT_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_PROJECT_COHORT_DETAILS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this cohort.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_COHORT_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_PROJECT_COHORT_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_DRAFT_SQL_QUERY tool input.
 */
type POSTHOG_RETRIEVE_PROJECT_DRAFT_SQL_QUERY_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_DRAFT_SQL_QUERY tool output.
 */
type POSTHOG_RETRIEVE_PROJECT_DRAFT_SQL_QUERY_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_EARLY_ACCESS_FEATURE_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_PROJECT_EARLY_ACCESS_FEATURE_DETAILS_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this early access feature.
   */
  id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_EARLY_ACCESS_FEATURE_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_PROJECT_EARLY_ACCESS_FEATURE_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_EVENT_DETAILS_BY_ID tool input.
 */
type POSTHOG_RETRIEVE_PROJECT_EVENT_DETAILS_BY_ID_INPUT = {
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_EVENT_DETAILS_BY_ID tool output.
 */
type POSTHOG_RETRIEVE_PROJECT_EVENT_DETAILS_BY_ID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_EVENT_VALUES tool input.
 */
type POSTHOG_RETRIEVE_PROJECT_EVENT_VALUES_INPUT = {
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_EVENT_VALUES tool output.
 */
type POSTHOG_RETRIEVE_PROJECT_EVENT_VALUES_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_EXPERIMENT_RESULTS tool input.
 */
type POSTHOG_RETRIEVE_PROJECT_EXPERIMENT_RESULTS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this experiment.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_EXPERIMENT_RESULTS tool output.
 */
type POSTHOG_RETRIEVE_PROJECT_EXPERIMENT_RESULTS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_EXPORT_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_PROJECT_EXPORT_DETAILS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this exported asset.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_EXPORT_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_PROJECT_EXPORT_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_FUNNEL_CORRELATION_INSIGHTS tool input.
 */
type POSTHOG_RETRIEVE_PROJECT_FUNNEL_CORRELATION_INSIGHTS_INPUT = {
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_FUNNEL_CORRELATION_INSIGHTS tool output.
 */
type POSTHOG_RETRIEVE_PROJECT_FUNNEL_CORRELATION_INSIGHTS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_GROUP_DETAILS_BY_KEY_AND_TYPE tool input.
 */
type POSTHOG_RETRIEVE_PROJECT_GROUP_DETAILS_BY_KEY_AND_TYPE_INPUT = {
  /**
   * Group Key
   * @description Specify the key of the group to find
   */
  group_key?: string;
  /**
   * Group Type Index
   * @description Specify the group type to find
   */
  group_type_index?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_GROUP_DETAILS_BY_KEY_AND_TYPE tool output.
 */
type POSTHOG_RETRIEVE_PROJECT_GROUP_DETAILS_BY_KEY_AND_TYPE_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_INSIGHTS_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_PROJECT_INSIGHTS_DETAILS_INPUT = {
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_INSIGHTS_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_PROJECT_INSIGHTS_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_INSIGHTS_WITH_PAGINATION tool input.
 */
type POSTHOG_RETRIEVE_PROJECT_INSIGHTS_WITH_PAGINATION_INPUT = {
  /**
   * Created By
   * @description Created By
   */
  created_by?: number;
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Limit
   * @description Number of results to return per page.
   * @default 1
   */
  limit: number;
  /**
   * Offset
   * @description The initial index from which to return the results.
   */
  offset?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Short Id
   * @description Short Id
   */
  short_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_INSIGHTS_WITH_PAGINATION tool output.
 */
type POSTHOG_RETRIEVE_PROJECT_INSIGHTS_WITH_PAGINATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_INSIGHT_ACTIVITY_DATA tool input.
 */
type POSTHOG_RETRIEVE_PROJECT_INSIGHT_ACTIVITY_DATA_INPUT = {
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Id
   * @description A unique integer value identifying this insight.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_INSIGHT_ACTIVITY_DATA tool output.
 */
type POSTHOG_RETRIEVE_PROJECT_INSIGHT_ACTIVITY_DATA_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_INSIGHT_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_PROJECT_INSIGHT_DETAILS_INPUT = {
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * From Dashboard
   * @description  When loading an insight for a dashboard pass a `from_dashboard` query parameter containing the dashboard ID e.g. `"/api/projects/{team_id}/insights/{insight_id}?from_dashboard={dashboard_id}"` Insights can be added to more than one dashboard, this allows the insight to be loaded in the correct context. Using the correct cache and enriching the response with dashboard specific config (e.g. layouts or colors)
   */
  from_dashboard?: number;
  /**
   * Id
   * @description A unique integer value identifying this insight.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Refresh
   * @description                  The client can request that an insight be refreshed by setting the `refresh=true` parameter.                 The server will then decide if the data should or not be refreshed based on a set of heuristics                 meant to determine the staleness of cached data. The result will contain as `is_cached` field                 that indicates whether the insight was actually refreshed or not through the request.
   */
  refresh?: boolean;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_INSIGHT_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_PROJECT_INSIGHT_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_MEMBER_DETAILS_BY_UUID tool input.
 */
type POSTHOG_RETRIEVE_PROJECT_MEMBER_DETAILS_BY_UUID_INPUT = {
  /**
   * Parent  Membership  User  Uuid
   * @description Parent Membership User Uuid
   */
  parent__membership__user__uuid?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_MEMBER_DETAILS_BY_UUID tool output.
 */
type POSTHOG_RETRIEVE_PROJECT_MEMBER_DETAILS_BY_UUID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_PERSON_ACTIVITY tool input.
 */
type POSTHOG_RETRIEVE_PROJECT_PERSON_ACTIVITY_INPUT = {
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_PERSON_ACTIVITY tool output.
 */
type POSTHOG_RETRIEVE_PROJECT_PERSON_ACTIVITY_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_PERSON_COHORTS tool input.
 */
type POSTHOG_RETRIEVE_PROJECT_PERSON_COHORTS_INPUT = {
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_PERSON_COHORTS tool output.
 */
type POSTHOG_RETRIEVE_PROJECT_PERSON_COHORTS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_PERSON_STICKINESS tool input.
 */
type POSTHOG_RETRIEVE_PROJECT_PERSON_STICKINESS_INPUT = {
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_PERSON_STICKINESS tool output.
 */
type POSTHOG_RETRIEVE_PROJECT_PERSON_STICKINESS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_PIPELINE_PLUGIN_CONFIG tool input.
 */
type POSTHOG_RETRIEVE_PROJECT_PIPELINE_PLUGIN_CONFIG_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin config.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_PIPELINE_PLUGIN_CONFIG tool output.
 */
type POSTHOG_RETRIEVE_PROJECT_PIPELINE_PLUGIN_CONFIG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_SESSION_VALUES tool input.
 */
type POSTHOG_RETRIEVE_PROJECT_SESSION_VALUES_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_SESSION_VALUES tool output.
 */
type POSTHOG_RETRIEVE_PROJECT_SESSION_VALUES_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_SUBSCRIPTION_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_PROJECT_SUBSCRIPTION_DETAILS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this subscription.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_SUBSCRIPTION_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_PROJECT_SUBSCRIPTION_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_TREND_INSIGHTS tool input.
 */
type POSTHOG_RETRIEVE_PROJECT_TREND_INSIGHTS_INPUT = {
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROJECT_TREND_INSIGHTS tool output.
 */
type POSTHOG_RETRIEVE_PROJECT_TREND_INSIGHTS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROPERTIES_AND_EVENTS_ASSOCIATION tool input.
 */
type POSTHOG_RETRIEVE_PROPERTIES_AND_EVENTS_ASSOCIATION_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROPERTIES_AND_EVENTS_ASSOCIATION tool output.
 */
type POSTHOG_RETRIEVE_PROPERTIES_AND_EVENTS_ASSOCIATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROPERTY_DEFINITION_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_PROPERTY_DEFINITION_DETAILS_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this property definition.
   */
  id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROPERTY_DEFINITION_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_PROPERTY_DEFINITION_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROXY_RECORD_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_PROXY_RECORD_DETAILS_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_PROXY_RECORD_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_PROXY_RECORD_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_RELATED_PROJECT_GROUPS tool input.
 */
type POSTHOG_RETRIEVE_RELATED_PROJECT_GROUPS_INPUT = {
  /**
   * Group Type Index
   * @description Specify the group type to find
   */
  group_type_index?: number;
  /**
   * Id
   * @description Specify the id of the user to find groups for
   */
  id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_RELATED_PROJECT_GROUPS tool output.
 */
type POSTHOG_RETRIEVE_RELATED_PROJECT_GROUPS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_RETENTION_INSIGHTS tool input.
 */
type POSTHOG_RETRIEVE_RETENTION_INSIGHTS_INPUT = {
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_RETENTION_INSIGHTS tool output.
 */
type POSTHOG_RETRIEVE_RETENTION_INSIGHTS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_SESSION_PROPERTY_DEFINITIONS tool input.
 */
type POSTHOG_RETRIEVE_SESSION_PROPERTY_DEFINITIONS_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_SESSION_PROPERTY_DEFINITIONS tool output.
 */
type POSTHOG_RETRIEVE_SESSION_PROPERTY_DEFINITIONS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_SESSION_RECORDING_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_SESSION_RECORDING_DETAILS_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this session recording.
   */
  id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_SESSION_RECORDING_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_SESSION_RECORDING_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_SESSION_RECORDING_ERROR_CLUSTERS tool input.
 */
type POSTHOG_RETRIEVE_SESSION_RECORDING_ERROR_CLUSTERS_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_SESSION_RECORDING_ERROR_CLUSTERS tool output.
 */
type POSTHOG_RETRIEVE_SESSION_RECORDING_ERROR_CLUSTERS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_SESSION_RECORDING_PLAYLIST_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_SESSION_RECORDING_PLAYLIST_DETAILS_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Short Id
   * @description Short Id
   */
  short_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_SESSION_RECORDING_PLAYLIST_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_SESSION_RECORDING_PLAYLIST_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_SESSION_RECORDING_PROPERTIES_BY_PROJECT_ID tool input.
 */
type POSTHOG_RETRIEVE_SESSION_RECORDING_PROPERTIES_BY_PROJECT_ID_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_SESSION_RECORDING_PROPERTIES_BY_PROJECT_ID tool output.
 */
type POSTHOG_RETRIEVE_SESSION_RECORDING_PROPERTIES_BY_PROJECT_ID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_SESSION_RECORDING_SNAPSHOTS tool input.
 */
type POSTHOG_RETRIEVE_SESSION_RECORDING_SNAPSHOTS_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this session recording.
   */
  id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_SESSION_RECORDING_SNAPSHOTS tool output.
 */
type POSTHOG_RETRIEVE_SESSION_RECORDING_SNAPSHOTS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_SIMILAR_SESSION_RECORDINGS tool input.
 */
type POSTHOG_RETRIEVE_SIMILAR_SESSION_RECORDINGS_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this session recording.
   */
  id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_SIMILAR_SESSION_RECORDINGS tool output.
 */
type POSTHOG_RETRIEVE_SIMILAR_SESSION_RECORDINGS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_SPECIFIC_BATCH_EXPORT_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_SPECIFIC_BATCH_EXPORT_DETAILS_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this batch export.
   */
  id?: string;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_SPECIFIC_BATCH_EXPORT_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_SPECIFIC_BATCH_EXPORT_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_SPECIFIC_BATCH_EXPORT_RUN_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_SPECIFIC_BATCH_EXPORT_RUN_DETAILS_INPUT = {
  /**
   * Batch Export Id
   * @description Batch Export Id
   */
  batch_export_id?: string;
  /**
   * Id
   * @description A UUID string identifying this batch export run.
   */
  id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_SPECIFIC_BATCH_EXPORT_RUN_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_SPECIFIC_BATCH_EXPORT_RUN_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_SPECIFIC_DOMAIN_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_SPECIFIC_DOMAIN_DETAILS_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this domain.
   */
  id?: string;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_SPECIFIC_DOMAIN_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_SPECIFIC_DOMAIN_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_SPECIFIC_EXPORTED_ASSET_CONTENT tool input.
 */
type POSTHOG_RETRIEVE_SPECIFIC_EXPORTED_ASSET_CONTENT_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this exported asset.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_SPECIFIC_EXPORTED_ASSET_CONTENT tool output.
 */
type POSTHOG_RETRIEVE_SPECIFIC_EXPORTED_ASSET_CONTENT_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_SPECIFIC_HISTORICAL_PLUGIN_EXPORT tool input.
 */
type POSTHOG_RETRIEVE_SPECIFIC_HISTORICAL_PLUGIN_EXPORT_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Plugin Config Id
   * @description Plugin Config Id
   */
  plugin_config_id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_SPECIFIC_HISTORICAL_PLUGIN_EXPORT tool output.
 */
type POSTHOG_RETRIEVE_SPECIFIC_HISTORICAL_PLUGIN_EXPORT_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_SPECIFIC_PIPELINE_FRONTEND_APP_CONFIG tool input.
 */
type POSTHOG_RETRIEVE_SPECIFIC_PIPELINE_FRONTEND_APP_CONFIG_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this plugin config.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_SPECIFIC_PIPELINE_FRONTEND_APP_CONFIG tool output.
 */
type POSTHOG_RETRIEVE_SPECIFIC_PIPELINE_FRONTEND_APP_CONFIG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_SPECIFIC_PROJECT_DASHBOARD_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_SPECIFIC_PROJECT_DASHBOARD_DETAILS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this dashboard.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_SPECIFIC_PROJECT_DASHBOARD_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_SPECIFIC_PROJECT_DASHBOARD_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_SURVEY_ACTIVITY_LOGS tool input.
 */
type POSTHOG_RETRIEVE_SURVEY_ACTIVITY_LOGS_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this survey.
   */
  id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_SURVEY_ACTIVITY_LOGS tool output.
 */
type POSTHOG_RETRIEVE_SURVEY_ACTIVITY_LOGS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_SURVEY_DETAILS_WITH_UUID_AND_PROJECT_ID tool input.
 */
type POSTHOG_RETRIEVE_SURVEY_DETAILS_WITH_UUID_AND_PROJECT_ID_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this survey.
   */
  id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_SURVEY_DETAILS_WITH_UUID_AND_PROJECT_ID tool output.
 */
type POSTHOG_RETRIEVE_SURVEY_DETAILS_WITH_UUID_AND_PROJECT_ID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_SURVEY_RESPONSES_COUNT_BY_PROJECT_ID tool input.
 */
type POSTHOG_RETRIEVE_SURVEY_RESPONSES_COUNT_BY_PROJECT_ID_INPUT = {
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_SURVEY_RESPONSES_COUNT_BY_PROJECT_ID tool output.
 */
type POSTHOG_RETRIEVE_SURVEY_RESPONSES_COUNT_BY_PROJECT_ID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_UNSUBSCRIBED_PIPELINE_CONFIGS tool input.
 */
type POSTHOG_RETRIEVE_UNSUBSCRIBED_PIPELINE_CONFIGS_INPUT = {
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_UNSUBSCRIBED_PIPELINE_CONFIGS tool output.
 */
type POSTHOG_RETRIEVE_UNSUBSCRIBED_PIPELINE_CONFIGS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_UNUSED_ORGANIZATION_PLUGINS tool input.
 */
type POSTHOG_RETRIEVE_UNUSED_ORGANIZATION_PLUGINS_INPUT = {
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_UNUSED_ORGANIZATION_PLUGINS tool output.
 */
type POSTHOG_RETRIEVE_UNUSED_ORGANIZATION_PLUGINS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_UNUSED_PIPELINE_DESTINATIONS tool input.
 */
type POSTHOG_RETRIEVE_UNUSED_PIPELINE_DESTINATIONS_INPUT = {
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_UNUSED_PIPELINE_DESTINATIONS tool output.
 */
type POSTHOG_RETRIEVE_UNUSED_PIPELINE_DESTINATIONS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_USER_DETAILS_FOR_INITIATING2_FA_SETUP tool input.
 */
type POSTHOG_RETRIEVE_USER_DETAILS_FOR_INITIATING2_FA_SETUP_INPUT = {
  /**
   * Uuid
   * @description Uuid
   */
  uuid?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_USER_DETAILS_FOR_INITIATING2_FA_SETUP tool output.
 */
type POSTHOG_RETRIEVE_USER_DETAILS_FOR_INITIATING2_FA_SETUP_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_RETRIEVE_USER_PROFILE_AND_TEAM_DETAILS tool input.
 */
type POSTHOG_RETRIEVE_USER_PROFILE_AND_TEAM_DETAILS_INPUT = {
  /**
   * Uuid
   * @description Uuid
   */
  uuid?: string;
};

/**
 * Type of POSTHOG's POSTHOG_RETRIEVE_USER_PROFILE_AND_TEAM_DETAILS tool output.
 */
type POSTHOG_RETRIEVE_USER_PROFILE_AND_TEAM_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_REVOKE_ORGANIZATION_INVITE tool input.
 */
type POSTHOG_REVOKE_ORGANIZATION_INVITE_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this organization invite.
   */
  id?: string;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_REVOKE_ORGANIZATION_INVITE tool output.
 */
type POSTHOG_REVOKE_ORGANIZATION_INVITE_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_SET_INSIGHT_DELETION_FLAG tool input.
 */
type POSTHOG_SET_INSIGHT_DELETION_FLAG_INPUT = {
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Id
   * @description A unique integer value identifying this insight.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_SET_INSIGHT_DELETION_FLAG tool output.
 */
type POSTHOG_SET_INSIGHT_DELETION_FLAG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_SOFT_DELETE_A_SPECIFIC_COHORT_BY_ID tool input.
 */
type POSTHOG_SOFT_DELETE_A_SPECIFIC_COHORT_BY_ID_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this cohort.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_SOFT_DELETE_A_SPECIFIC_COHORT_BY_ID tool output.
 */
type POSTHOG_SOFT_DELETE_A_SPECIFIC_COHORT_BY_ID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_SOFT_DELETE_FEATURE_FLAG_BY_SETTING_STATUS tool input.
 */
type POSTHOG_SOFT_DELETE_FEATURE_FLAG_BY_SETTING_STATUS_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this feature flag.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_SOFT_DELETE_FEATURE_FLAG_BY_SETTING_STATUS tool output.
 */
type POSTHOG_SOFT_DELETE_FEATURE_FLAG_BY_SETTING_STATUS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_SOFT_DELETE_PROJECT_DASHBOARD tool input.
 */
type POSTHOG_SOFT_DELETE_PROJECT_DASHBOARD_INPUT = {
  /**
   * Id
   * @description A unique integer value identifying this dashboard.
   */
  id?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_SOFT_DELETE_PROJECT_DASHBOARD tool output.
 */
type POSTHOG_SOFT_DELETE_PROJECT_DASHBOARD_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_SPLIT_PERSON_ENTITIES_IN_PROJECT tool input.
 */
type POSTHOG_SPLIT_PERSON_ENTITIES_IN_PROJECT_INPUT = {
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Distinct Ids
   * @description Distinct Ids
   */
  distinct_ids?: string[];
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Properties
   * @description Properties
   */
  properties?: unknown;
  /**
   * Uuid
   * Format: uuid
   * @description Uuid
   */
  uuid?: string;
};

/**
 * Type of POSTHOG's POSTHOG_SPLIT_PERSON_ENTITIES_IN_PROJECT tool output.
 */
type POSTHOG_SPLIT_PERSON_ENTITIES_IN_PROJECT_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_TRIGGER_PROJECT_EXPORT_WITH_FORMAT_OPTION tool input.
 */
type POSTHOG_TRIGGER_PROJECT_EXPORT_WITH_FORMAT_OPTION_INPUT = {
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Dashboard
   * @description Dashboard
   */
  dashboard?: number;
  /**
   * Expires After
   * Format: date-time
   * @description Expires After
   */
  expires_after?: string;
  /**
   * Export Context
   * @description Export Context
   */
  export_context?: unknown;
  /**
   * Export Format
   * @description * `image/png` - image/png * `application/pdf` - application/pdf * `text/csv` - text/csv * `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet` - application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
   * @enum {string}
   */
  export_format?: "image/png" | "application/pdf" | "text/csv" | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  /**
   * Filename
   * @description Filename
   */
  filename?: string;
  /**
   * Has Content
   * @description Has Content
   */
  has_content?: string;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Insight
   * @description Insight
   */
  insight?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_TRIGGER_PROJECT_EXPORT_WITH_FORMAT_OPTION tool output.
 */
type POSTHOG_TRIGGER_PROJECT_EXPORT_WITH_FORMAT_OPTION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_ANNOTATION_DETAILS tool input.
 */
type POSTHOG_UPDATE_ANNOTATION_DETAILS_INPUT = {
  /**
   * Content
   * @description Content
   */
  content?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Creation Type
   * @description * `USR` - user * `GIT` - GitHub
   * @enum {string}
   */
  creation_type?: "USR" | "GIT";
  /**
   * Dashboard Id
   * @description Dashboard Id
   */
  dashboard_id?: number;
  /**
   * Dashboard Item
   * @description Dashboard Item
   */
  dashboard_item?: number;
  /**
   * Dashboard Name
   * @description Dashboard Name
   */
  dashboard_name?: string;
  /**
   * Date Marker
   * Format: date-time
   * @description Date Marker
   */
  date_marker?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Insight Derived Name
   * @description Insight Derived Name
   */
  insight_derived_name?: string;
  /**
   * Insight Name
   * @description Insight Name
   */
  insight_name?: string;
  /**
   * Insight Short Id
   * @description Insight Short Id
   */
  insight_short_id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Scope
   * @description * `dashboard_item` - insight * `dashboard` - dashboard * `project` - project * `organization` - organization
   * @enum {string}
   */
  scope?: "dashboard_item" | "dashboard" | "project" | "organization";
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_ANNOTATION_DETAILS tool output.
 */
type POSTHOG_UPDATE_ANNOTATION_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_EARLY_ACCESS_PROJECT_FEATURE tool input.
 */
type POSTHOG_UPDATE_EARLY_ACCESS_PROJECT_FEATURE_INPUT = {
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Documentation Url
   * Format: uri
   * @description Documentation Url
   */
  documentation_url?: string;
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Stage
   * @description * `draft` - draft * `concept` - concept * `alpha` - alpha * `beta` - beta * `general-availability` - general availability * `archived` - archived
   * @enum {string}
   */
  stage?: "draft" | "concept" | "alpha" | "beta" | "general-availability" | "archived";
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_EARLY_ACCESS_PROJECT_FEATURE tool output.
 */
type POSTHOG_UPDATE_EARLY_ACCESS_PROJECT_FEATURE_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_EVENT_DEFINITION_BY_UUID tool input.
 */
type POSTHOG_UPDATE_EVENT_DEFINITION_BY_UUID_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this event definition.
   */
  id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_EVENT_DEFINITION_BY_UUID tool output.
 */
type POSTHOG_UPDATE_EVENT_DEFINITION_BY_UUID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_EXPERIMENT_DETAILS tool input.
 */
type POSTHOG_UPDATE_EXPERIMENT_DETAILS_INPUT = {
  /**
   * Archived
   * @description Archived
   */
  archived?: boolean;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * End Date
   * Format: date-time
   * @description End Date
   */
  end_date?: string;
  /**
   * Exposure Cohort
   * @description Exposure Cohort
   */
  exposure_cohort?: number;
  /**
   * Feature Flag Key
   * @description Feature Flag Key
   */
  feature_flag_key?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Parameters
   * @description Parameters
   */
  parameters?: unknown;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Secondary Metrics
   * @description Secondary Metrics
   */
  secondary_metrics?: unknown;
  /**
   * Start Date
   * Format: date-time
   * @description Start Date
   */
  start_date?: string;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_EXPERIMENT_DETAILS tool output.
 */
type POSTHOG_UPDATE_EXPERIMENT_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_FEATURE_FLAG_CONFIGURATION tool input.
 */
type POSTHOG_UPDATE_FEATURE_FLAG_CONFIGURATION_INPUT = {
  /**
   * Active
   * @description Active
   */
  active?: boolean;
  /**
   * Analytics Dashboards
   * @description Analytics Dashboards
   */
  analytics_dashboards?: number[];
  /**
   * Can Edit
   * @description Can Edit
   */
  can_edit?: boolean;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Ensure Experience Continuity
   * @description Ensure Experience Continuity
   */
  ensure_experience_continuity?: boolean;
  /**
   * Experiment Set
   * @description Experiment Set
   */
  experiment_set?: number[];
  /**
   * Features
   * @description Features
   */
  features?: {
      [key: string]: unknown;
  };
  /**
   * Filters
   * @description Filters
   */
  filters?: {
      [key: string]: unknown;
  };
  /**
   * Has Enriched Analytics
   * @description Has Enriched Analytics
   */
  has_enriched_analytics?: boolean;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Is Simple Flag
   * @description Is Simple Flag
   */
  is_simple_flag?: boolean;
  /**
   * Key
   * @description Key
   */
  key?: string;
  /**
   * Name
   * @description contains the description for the flag (field name `name` is kept for backwards-compatibility)
   */
  name?: string;
  /**
   * Performed Rollback
   * @description Performed Rollback
   */
  performed_rollback?: boolean;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Rollback Conditions
   * @description Rollback Conditions
   */
  rollback_conditions?: unknown;
  /**
   * Rollout Percentage
   * @description Rollout Percentage
   */
  rollout_percentage?: number;
  /**
   * Surveys
   * @description Surveys
   */
  surveys?: {
      [key: string]: unknown;
  };
  /**
   * Tags
   * @description Tags
   */
  tags?: unknown[];
  /**
   * Usage Dashboard
   * @description Usage Dashboard
   */
  usage_dashboard?: number;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_FEATURE_FLAG_CONFIGURATION tool output.
 */
type POSTHOG_UPDATE_FEATURE_FLAG_CONFIGURATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_ORGANIZATION_DETAILS_BY_UUID tool input.
 */
type POSTHOG_UPDATE_ORGANIZATION_DETAILS_BY_UUID_INPUT = {
  /**
   * Available Product Features
   * @description Available Product Features
   */
  available_product_features?: unknown[];
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Customer Id
   * @description Customer Id
   */
  customer_id?: string;
  /**
   * Enforce 2Fa
   * @description Enforce 2Fa
   */
  enforce_2fa?: boolean;
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Is Member Join Email Enabled
   * @description Is Member Join Email Enabled
   */
  is_member_join_email_enabled?: boolean;
  /**
   * Member Count
   * @description Member Count
   */
  member_count?: string;
  /**
   * Metadata
   * @description Metadata
   */
  metadata?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Slug
   * @description Slug
   */
  slug?: string;
  /**
   * Teams
   * @description Teams
   */
  teams?: {
      [key: string]: unknown;
  }[];
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_ORGANIZATION_DETAILS_BY_UUID tool output.
 */
type POSTHOG_UPDATE_ORGANIZATION_DETAILS_BY_UUID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_ORGANIZATION_DOMAIN_INFO_AND_SAML_CONFIG tool input.
 */
type POSTHOG_UPDATE_ORGANIZATION_DOMAIN_INFO_AND_SAML_CONFIG_INPUT = {
  /**
   * Domain
   * @description Domain
   */
  domain?: string;
  /**
   * Has Saml
   * @description Returns whether SAML is configured for the instance. Does not validate the user has the required license (that check is performed in other places).
   */
  has_saml?: boolean;
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Is Verified
   * @description Determines whether a domain is verified or not.
   */
  is_verified?: boolean;
  /**
   * Jit Provisioning Enabled
   * @description Jit Provisioning Enabled
   */
  jit_provisioning_enabled?: boolean;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
  /**
   * Saml Acs Url
   * @description Saml Acs Url
   */
  saml_acs_url?: string;
  /**
   * Saml Entity Id
   * @description Saml Entity Id
   */
  saml_entity_id?: string;
  /**
   * Saml X509 Cert
   * @description Saml X509 Cert
   */
  saml_x509_cert?: string;
  /**
   * Sso Enforcement
   * @description Sso Enforcement
   */
  sso_enforcement?: string;
  /**
   * Verification Challenge
   * @description Verification Challenge
   */
  verification_challenge?: string;
  /**
   * Verified At
   * Format: date-time
   * @description Verified At
   */
  verified_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_ORGANIZATION_DOMAIN_INFO_AND_SAML_CONFIG tool output.
 */
type POSTHOG_UPDATE_ORGANIZATION_DOMAIN_INFO_AND_SAML_CONFIG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_ORGANIZATION_DOMAIN_PROPERTIES tool input.
 */
type POSTHOG_UPDATE_ORGANIZATION_DOMAIN_PROPERTIES_INPUT = {
  /**
   * Domain
   * @description Domain
   */
  domain?: string;
  /**
   * Has Saml
   * @description Returns whether SAML is configured for the instance. Does not validate the user has the required license (that check is performed in other places).
   */
  has_saml?: boolean;
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Is Verified
   * @description Determines whether a domain is verified or not.
   */
  is_verified?: boolean;
  /**
   * Jit Provisioning Enabled
   * @description Jit Provisioning Enabled
   */
  jit_provisioning_enabled?: boolean;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
  /**
   * Saml Acs Url
   * @description Saml Acs Url
   */
  saml_acs_url?: string;
  /**
   * Saml Entity Id
   * @description Saml Entity Id
   */
  saml_entity_id?: string;
  /**
   * Saml X509 Cert
   * @description Saml X509 Cert
   */
  saml_x509_cert?: string;
  /**
   * Sso Enforcement
   * @description Sso Enforcement
   */
  sso_enforcement?: string;
  /**
   * Verification Challenge
   * @description Verification Challenge
   */
  verification_challenge?: string;
  /**
   * Verified At
   * Format: date-time
   * @description Verified At
   */
  verified_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_ORGANIZATION_DOMAIN_PROPERTIES tool output.
 */
type POSTHOG_UPDATE_ORGANIZATION_DOMAIN_PROPERTIES_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_ORGANIZATION_MEMBER_BY_UUIDS tool input.
 */
type POSTHOG_UPDATE_ORGANIZATION_MEMBER_BY_UUIDS_INPUT = {
  /**
   * Has Social Auth
   * @description Has Social Auth
   */
  has_social_auth?: boolean;
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Is 2Fa Enabled
   * @description Is 2Fa Enabled
   */
  is_2fa_enabled?: boolean;
  /**
   * Joined At
   * Format: date-time
   * @description Joined At
   */
  joined_at?: string;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
  /**
   * User  Uuid
   * @description User Uuid
   */
  user__uuid?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_ORGANIZATION_MEMBER_BY_UUIDS tool output.
 */
type POSTHOG_UPDATE_ORGANIZATION_MEMBER_BY_UUIDS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_ORGANIZATION_MEMBER_DETAILS tool input.
 */
type POSTHOG_UPDATE_ORGANIZATION_MEMBER_DETAILS_INPUT = {
  /**
   * Has Social Auth
   * @description Has Social Auth
   */
  has_social_auth?: boolean;
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Is 2Fa Enabled
   * @description Is 2Fa Enabled
   */
  is_2fa_enabled?: boolean;
  /**
   * Joined At
   * Format: date-time
   * @description Joined At
   */
  joined_at?: string;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
  /**
   * User  Uuid
   * @description User Uuid
   */
  user__uuid?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_ORGANIZATION_MEMBER_DETAILS tool output.
 */
type POSTHOG_UPDATE_ORGANIZATION_MEMBER_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_ORGANIZATION_S_PROXY_RECORD_DOMAIN tool input.
 */
type POSTHOG_UPDATE_ORGANIZATION_S_PROXY_RECORD_DOMAIN_INPUT = {
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Created By
   * @description Created By
   */
  created_by?: number;
  /**
   * Domain
   * @description Domain
   */
  domain?: string;
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Message
   * @description Message
   */
  message?: string;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
  /**
   * Target Cname
   * @description Target Cname
   */
  target_cname?: string;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_ORGANIZATION_S_PROXY_RECORD_DOMAIN tool output.
 */
type POSTHOG_UPDATE_ORGANIZATION_S_PROXY_RECORD_DOMAIN_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_PARTIAL_PROJECT_COHORT_DETAILS tool input.
 */
type POSTHOG_UPDATE_PARTIAL_PROJECT_COHORT_DETAILS_INPUT = {
  /**
   * Count
   * @description Count
   */
  count?: number;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Errors Calculating
   * @description Errors Calculating
   */
  errors_calculating?: number;
  /**
   * Experiment Set
   * @description Experiment Set
   */
  experiment_set?: number[];
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Groups
   * @description Groups
   */
  groups?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Is Calculating
   * @description Is Calculating
   */
  is_calculating?: boolean;
  /**
   * Is Static
   * @description Is Static
   */
  is_static?: boolean;
  /**
   * Last Calculation
   * Format: date-time
   * @description Last Calculation
   */
  last_calculation?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Query
   * @description Query
   */
  query?: unknown;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_PARTIAL_PROJECT_COHORT_DETAILS tool output.
 */
type POSTHOG_UPDATE_PARTIAL_PROJECT_COHORT_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_PARTIAL_ROLE_DETAILS_IN_ORGANIZATION tool input.
 */
type POSTHOG_UPDATE_PARTIAL_ROLE_DETAILS_IN_ORGANIZATION_INPUT = {
  /**
   * Associated Flags
   * @description Associated Flags
   */
  associated_flags?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Members
   * @description Members
   */
  members?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_PARTIAL_ROLE_DETAILS_IN_ORGANIZATION tool output.
 */
type POSTHOG_UPDATE_PARTIAL_ROLE_DETAILS_IN_ORGANIZATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_PARTIAL_SUBSCRIPTION_DETAILS tool input.
 */
type POSTHOG_UPDATE_PARTIAL_SUBSCRIPTION_DETAILS_INPUT = {
  /**
   * Bysetpos
   * @description Bysetpos
   */
  bysetpos?: number;
  /**
   * Byweekday
   * @description Byweekday
   */
  byweekday?: string[];
  /**
   * Count
   * @description Count
   */
  count?: number;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Dashboard
   * @description Dashboard
   */
  dashboard?: number;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Frequency
   * @description * `daily` - Daily * `weekly` - Weekly * `monthly` - Monthly * `yearly` - Yearly
   * @enum {string}
   */
  frequency?: "daily" | "weekly" | "monthly" | "yearly";
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Insight
   * @description Insight
   */
  insight?: number;
  /**
   * Interval
   * @description Interval
   */
  interval?: number;
  /**
   * Invite Message
   * @description Invite Message
   */
  invite_message?: string;
  /**
   * Next Delivery Date
   * Format: date-time
   * @description Next Delivery Date
   */
  next_delivery_date?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Start Date
   * Format: date-time
   * @description Start Date
   */
  start_date?: string;
  /**
   * Summary
   * @description Summary
   */
  summary?: string;
  /**
   * Target Type
   * @description * `email` - Email * `slack` - Slack * `webhook` - Webhook
   * @enum {string}
   */
  target_type?: "email" | "slack" | "webhook";
  /**
   * Target Value
   * @description Target Value
   */
  target_value?: string;
  /**
   * Title
   * @description Title
   */
  title?: string;
  /**
   * Until Date
   * Format: date-time
   * @description Until Date
   */
  until_date?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_PARTIAL_SUBSCRIPTION_DETAILS tool output.
 */
type POSTHOG_UPDATE_PARTIAL_SUBSCRIPTION_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_PARTIAL_SURVEY_DETAILS tool input.
 */
type POSTHOG_UPDATE_PARTIAL_SURVEY_DETAILS_INPUT = {
  /**
   * Appearance
   * @description Appearance
   */
  appearance?: unknown;
  /**
   * Archived
   * @description Archived
   */
  archived?: boolean;
  /**
   * Conditions
   * @description Conditions
   */
  conditions?: unknown;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Current Iteration
   * @description Current Iteration
   */
  current_iteration?: number;
  /**
   * Current Iteration Start Date
   * Format: date-time
   * @description Current Iteration Start Date
   */
  current_iteration_start_date?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * End Date
   * Format: date-time
   * @description End Date
   */
  end_date?: string;
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Iteration Count
   * @description Iteration Count
   */
  iteration_count?: number;
  /**
   * Iteration Frequency Days
   * @description Iteration Frequency Days
   */
  iteration_frequency_days?: number;
  /**
   * Iteration Start Dates
   * @description Iteration Start Dates
   */
  iteration_start_dates?: string[];
  /**
   * Linked Flag Id
   * @description Linked Flag Id
   */
  linked_flag_id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Questions
   * @description          The `array` of questions included in the survey. Each question must conform to one of the defined question types: Basic, Link, Rating, or Multiple Choice.         Basic (open-ended question)         - `type`: `open`         - `question`: The text of the question.         - `description`: Optional description of the question.         - `descriptionContentType`: Content type of the description (`html` or `text`).         - `optional`: Whether the question is optional (`boolean`).         - `buttonText`: Text displayed on the submit button.         - `branching`: Branching logic for the question. See branching types below for details.         Link (a question with a link)         - `type`: `link`         - `question`: The text of the question.         - `description`: Optional description of the question.         - `descriptionContentType`: Content type of the description (`html` or `text`).         - `optional`: Whether the question is optional (`boolean`).         - `buttonText`: Text displayed on the submit button.         - `link`: The URL associated with the question.         - `branching`: Branching logic for the question. See branching types below for details.         Rating (a question with a rating scale)         - `type`: `rating`         - `question`: The text of the question.         - `description`: Optional description of the question.         - `descriptionContentType`: Content type of the description (`html` or `text`).         - `optional`: Whether the question is optional (`boolean`).         - `buttonText`: Text displayed on the submit button.         - `display`: Display style of the rating (`number` or `emoji`).         - `scale`: The scale of the rating (`number`).         - `lowerBoundLabel`: Label for the lower bound of the scale.         - `upperBoundLabel`: Label for the upper bound of the scale.         - `branching`: Branching logic for the question. See branching types below for details.         Multiple choice         - `type`: `single_choice` or `multiple_choice`         - `question`: The text of the question.         - `description`: Optional description of the question.         - `descriptionContentType`: Content type of the description (`html` or `text`).         - `optional`: Whether the question is optional (`boolean`).         - `buttonText`: Text displayed on the submit button.         - `choices`: An array of choices for the question.         - `shuffleOptions`: Whether to shuffle the order of the choices (`boolean`).         - `hasOpenChoice`: Whether the question allows an open-ended response (`boolean`).         - `branching`: Branching logic for the question. See branching types below for details.         Branching logic can be one of the following types:         Next question: Proceeds to the next question         ```json         {             "type": "next_question"         }         ```         End: Ends the survey, optionally displaying a confirmation message.         ```json         {             "type": "end"         }         ```         Response-based: Branches based on the response values. Available for the `rating` and `single_choice` question types.         ```json         {             "type": "response_based",             "responseValues": {                 "responseKey": "value"             }         }         ```         Specific question: Proceeds to a specific question by index.         ```json         {             "type": "specific_question",             "index": 2         }         ```
   */
  questions?: unknown;
  /**
   * Remove Targeting Flag
   * @description Remove Targeting Flag
   */
  remove_targeting_flag?: boolean;
  /**
   * Responses Limit
   * @description Responses Limit
   */
  responses_limit?: number;
  /**
   * Start Date
   * Format: date-time
   * @description Start Date
   */
  start_date?: string;
  /**
   * Targeting Flag Filters
   * @description Targeting Flag Filters
   */
  targeting_flag_filters?: unknown;
  /**
   * Targeting Flag Id
   * @description Targeting Flag Id
   */
  targeting_flag_id?: number;
  /**
   * Type
   * @description * `popover` - popover * `widget` - widget * `button` - button * `email` - email * `full_screen` - full screen * `api` - api
   * @enum {string}
   */
  type?: "popover" | "widget" | "button" | "email" | "full_screen" | "api";
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_PARTIAL_SURVEY_DETAILS tool output.
 */
type POSTHOG_UPDATE_PARTIAL_SURVEY_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_PERSON_PROPERTIES tool input.
 */
type POSTHOG_UPDATE_PERSON_PROPERTIES_INPUT = {
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Distinct Ids
   * @description Distinct Ids
   */
  distinct_ids?: string[];
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Properties
   * @description Properties
   */
  properties?: unknown;
  /**
   * Uuid
   * Format: uuid
   * @description Uuid
   */
  uuid?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_PERSON_PROPERTIES tool output.
 */
type POSTHOG_UPDATE_PERSON_PROPERTIES_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_PERSON_PROPERTY_ENDPOINT tool input.
 */
type POSTHOG_UPDATE_PERSON_PROPERTY_ENDPOINT_INPUT = {
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Distinct Ids
   * @description Distinct Ids
   */
  distinct_ids?: string[];
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Key
   * @description Specify the property key
   */
  key?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Properties
   * @description Properties
   */
  properties?: unknown;
  /**
   * Uuid
   * Format: uuid
   * @description Uuid
   */
  uuid?: string;
  /**
   * Value
   * @description Specify the property value
   */
  value?: unknown;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_PERSON_PROPERTY_ENDPOINT tool output.
 */
type POSTHOG_UPDATE_PERSON_PROPERTY_ENDPOINT_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_PIPELINE_DESTINATION_CONFIG tool input.
 */
type POSTHOG_UPDATE_PIPELINE_DESTINATION_CONFIG_INPUT = {
  /**
   * Config
   * @description Config
   */
  config?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Delivery Rate 24H
   * @description Delivery Rate 24H
   */
  delivery_rate_24h?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Enabled
   * @description Enabled
   */
  enabled?: boolean;
  /**
   * Error
   * @description Error
   */
  error?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Plugin
   * @description Plugin
   */
  plugin?: number;
  /**
   * Plugin Info
   * @description Plugin Info
   */
  plugin_info?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Team Id
   * @description Team Id
   */
  team_id?: number;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_PIPELINE_DESTINATION_CONFIG tool output.
 */
type POSTHOG_UPDATE_PIPELINE_DESTINATION_CONFIG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_PIPELINE_FRONTEND_APP_CONFIG tool input.
 */
type POSTHOG_UPDATE_PIPELINE_FRONTEND_APP_CONFIG_INPUT = {
  /**
   * Config
   * @description Config
   */
  config?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Delivery Rate 24H
   * @description Delivery Rate 24H
   */
  delivery_rate_24h?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Enabled
   * @description Enabled
   */
  enabled?: boolean;
  /**
   * Error
   * @description Error
   */
  error?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Plugin
   * @description Plugin
   */
  plugin?: number;
  /**
   * Plugin Info
   * @description Plugin Info
   */
  plugin_info?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Team Id
   * @description Team Id
   */
  team_id?: number;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_PIPELINE_FRONTEND_APP_CONFIG tool output.
 */
type POSTHOG_UPDATE_PIPELINE_FRONTEND_APP_CONFIG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_PIPELINE_PLUGIN_CONFIG tool input.
 */
type POSTHOG_UPDATE_PIPELINE_PLUGIN_CONFIG_INPUT = {
  /**
   * Config
   * @description Config
   */
  config?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Delivery Rate 24H
   * @description Delivery Rate 24H
   */
  delivery_rate_24h?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Enabled
   * @description Enabled
   */
  enabled?: boolean;
  /**
   * Error
   * @description Error
   */
  error?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Plugin
   * @description Plugin
   */
  plugin?: number;
  /**
   * Plugin Info
   * @description Plugin Info
   */
  plugin_info?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Team Id
   * @description Team Id
   */
  team_id?: number;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_PIPELINE_PLUGIN_CONFIG tool output.
 */
type POSTHOG_UPDATE_PIPELINE_PLUGIN_CONFIG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_PIPELINE_TRANSFORMATION_CONFIG tool input.
 */
type POSTHOG_UPDATE_PIPELINE_TRANSFORMATION_CONFIG_INPUT = {
  /**
   * Config
   * @description Config
   */
  config?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Delivery Rate 24H
   * @description Delivery Rate 24H
   */
  delivery_rate_24h?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Enabled
   * @description Enabled
   */
  enabled?: boolean;
  /**
   * Error
   * @description Error
   */
  error?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Plugin
   * @description Plugin
   */
  plugin?: number;
  /**
   * Plugin Info
   * @description Plugin Info
   */
  plugin_info?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Team Id
   * @description Team Id
   */
  team_id?: number;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_PIPELINE_TRANSFORMATION_CONFIG tool output.
 */
type POSTHOG_UPDATE_PIPELINE_TRANSFORMATION_CONFIG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_PLUGIN_CONFIG_FOR_PROJECT tool input.
 */
type POSTHOG_UPDATE_PLUGIN_CONFIG_FOR_PROJECT_INPUT = {
  /**
   * Config
   * @description Config
   */
  config?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Delivery Rate 24H
   * @description Delivery Rate 24H
   */
  delivery_rate_24h?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Enabled
   * @description Enabled
   */
  enabled?: boolean;
  /**
   * Error
   * @description Error
   */
  error?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Plugin
   * @description Plugin
   */
  plugin?: number;
  /**
   * Plugin Info
   * @description Plugin Info
   */
  plugin_info?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Team Id
   * @description Team Id
   */
  team_id?: number;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_PLUGIN_CONFIG_FOR_PROJECT tool output.
 */
type POSTHOG_UPDATE_PLUGIN_CONFIG_FOR_PROJECT_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_ACTION_BY_ID tool input.
 */
type POSTHOG_UPDATE_PROJECT_ACTION_BY_ID_INPUT = {
  /**
   * Bytecode Error
   * @description Bytecode Error
   */
  bytecode_error?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Is Action
   * @description Is Action
   * @default true
   */
  is_action: boolean;
  /**
   * Is Calculating
   * @description Is Calculating
   */
  is_calculating?: boolean;
  /**
   * Last Calculated At
   * Format: date-time
   * @description Last Calculated At
   */
  last_calculated_at?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Post To Slack
   * @description Post To Slack
   */
  post_to_slack?: boolean;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Slack Message Format
   * @description Slack Message Format
   */
  slack_message_format?: string;
  /**
   * Steps
   * @description Steps
   */
  steps?: {
      [key: string]: unknown;
  }[];
  /**
   * Tags
   * @description Tags
   */
  tags?: unknown[];
  /**
   * Team Id
   * @description Team Id
   */
  team_id?: number;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_ACTION_BY_ID tool output.
 */
type POSTHOG_UPDATE_PROJECT_ACTION_BY_ID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_ACTION_WITH_PARTIAL_DATA tool input.
 */
type POSTHOG_UPDATE_PROJECT_ACTION_WITH_PARTIAL_DATA_INPUT = {
  /**
   * Bytecode Error
   * @description Bytecode Error
   */
  bytecode_error?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Is Action
   * @description Is Action
   * @default true
   */
  is_action: boolean;
  /**
   * Is Calculating
   * @description Is Calculating
   */
  is_calculating?: boolean;
  /**
   * Last Calculated At
   * Format: date-time
   * @description Last Calculated At
   */
  last_calculated_at?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Post To Slack
   * @description Post To Slack
   */
  post_to_slack?: boolean;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Slack Message Format
   * @description Slack Message Format
   */
  slack_message_format?: string;
  /**
   * Steps
   * @description Steps
   */
  steps?: {
      [key: string]: unknown;
  }[];
  /**
   * Tags
   * @description Tags
   */
  tags?: unknown[];
  /**
   * Team Id
   * @description Team Id
   */
  team_id?: number;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_ACTION_WITH_PARTIAL_DATA tool output.
 */
type POSTHOG_UPDATE_PROJECT_ACTION_WITH_PARTIAL_DATA_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_COHORT_DETAILS tool input.
 */
type POSTHOG_UPDATE_PROJECT_COHORT_DETAILS_INPUT = {
  /**
   * Count
   * @description Count
   */
  count?: number;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Errors Calculating
   * @description Errors Calculating
   */
  errors_calculating?: number;
  /**
   * Experiment Set
   * @description Experiment Set
   */
  experiment_set?: number[];
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Groups
   * @description Groups
   */
  groups?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Is Calculating
   * @description Is Calculating
   */
  is_calculating?: boolean;
  /**
   * Is Static
   * @description Is Static
   */
  is_static?: boolean;
  /**
   * Last Calculation
   * Format: date-time
   * @description Last Calculation
   */
  last_calculation?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Query
   * @description Query
   */
  query?: unknown;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_COHORT_DETAILS tool output.
 */
type POSTHOG_UPDATE_PROJECT_COHORT_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_DASHBOARD_DETAILS tool input.
 */
type POSTHOG_UPDATE_PROJECT_DASHBOARD_DETAILS_INPUT = {
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Delete Insights
   * @description Delete Insights
   * @default false
   */
  delete_insights: boolean;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Is Shared
   * @description Is Shared
   */
  is_shared?: boolean;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Pinned
   * @description Pinned
   */
  pinned?: boolean;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Tags
   * @description Tags
   */
  tags?: unknown[];
  /**
   * Tiles
   * @description Tiles
   */
  tiles?: {
      [key: string]: unknown;
  }[];
  /**
   * Use Dashboard
   * @description Use Dashboard
   */
  use_dashboard?: number;
  /**
   * Use Template
   * @description Use Template
   */
  use_template?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_DASHBOARD_DETAILS tool output.
 */
type POSTHOG_UPDATE_PROJECT_DASHBOARD_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_EARLY_ACCESS_FEATURE tool input.
 */
type POSTHOG_UPDATE_PROJECT_EARLY_ACCESS_FEATURE_INPUT = {
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Documentation Url
   * Format: uri
   * @description Documentation Url
   */
  documentation_url?: string;
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Stage
   * @description * `draft` - draft * `concept` - concept * `alpha` - alpha * `beta` - beta * `general-availability` - general availability * `archived` - archived
   * @enum {string}
   */
  stage?: "draft" | "concept" | "alpha" | "beta" | "general-availability" | "archived";
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_EARLY_ACCESS_FEATURE tool output.
 */
type POSTHOG_UPDATE_PROJECT_EARLY_ACCESS_FEATURE_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_EVENT_DEFINITION tool input.
 */
type POSTHOG_UPDATE_PROJECT_EVENT_DEFINITION_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this event definition.
   */
  id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_EVENT_DEFINITION tool output.
 */
type POSTHOG_UPDATE_PROJECT_EVENT_DEFINITION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_GROUP_TYPE_METADATA tool input.
 */
type POSTHOG_UPDATE_PROJECT_GROUP_TYPE_METADATA_INPUT = {
  /**
   * Group Type
   * @description Group Type
   */
  group_type?: string;
  /**
   * Group Type Index
   * @description Group Type Index
   */
  group_type_index?: number;
  /**
   * Name Plural
   * @description Name Plural
   */
  name_plural?: string;
  /**
   * Name Singular
   * @description Name Singular
   */
  name_singular?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_GROUP_TYPE_METADATA tool output.
 */
type POSTHOG_UPDATE_PROJECT_GROUP_TYPE_METADATA_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_INSIGHT_DETAILS tool input.
 */
type POSTHOG_UPDATE_PROJECT_INSIGHT_DETAILS_INPUT = {
  /**
   * Cache Target Age
   * @description The target age of the cached results for this insight.
   */
  cache_target_age?: string;
  /**
   * Columns
   * @description Columns
   */
  columns?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Dashboard Tiles
   * @description      A dashboard tile ID and dashboard_id for each of the dashboards that this insight is displayed on.
   */
  dashboard_tiles?: {
      [key: string]: unknown;
  }[];
  /**
   * Dashboards
   * @description          DEPRECATED. Will be removed in a future release. Use dashboard_tiles instead.         A dashboard ID for each of the dashboards that this insight is displayed on.
   */
  dashboards?: number[];
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Derived Name
   * @description Derived Name
   */
  derived_name?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Favorited
   * @description Favorited
   */
  favorited?: boolean;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Format
   * @description Format
   * @enum {string}
   */
  format?: "csv" | "json";
  /**
   * Hogql
   * @description Hogql
   */
  hogql?: string;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Is Cached
   * @description Is Cached
   */
  is_cached?: string;
  /**
   * Is Sample
   * @description Is Sample
   */
  is_sample?: boolean;
  /**
   * Last Modified At
   * Format: date-time
   * @description Last Modified At
   */
  last_modified_at?: string;
  /**
   * Last Refresh
   * @description      The datetime this insight"s results were generated.     If added to one or more dashboards the insight can be refreshed separately on each.     Returns the appropriate last_refresh datetime for the context the insight is viewed in     (see from_dashboard query parameter).
   */
  last_refresh?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Next Allowed Client Refresh
   * @description      The earliest possible datetime at which we"ll allow the cached results for this insight to be refreshed     by querying the database.
   */
  next_allowed_client_refresh?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Query
   * @description Query node JSON string
   */
  query?: unknown;
  /**
   * Query Status
   * @description Query Status
   */
  query_status?: string;
  /**
   * Result
   * @description Result
   */
  result?: string;
  /**
   * Saved
   * @description Saved
   */
  saved?: boolean;
  /**
   * Short Id
   * @description Short Id
   */
  short_id?: string;
  /**
   * Tags
   * @description Tags
   */
  tags?: unknown[];
  /**
   * Timezone
   * @description The timezone this chart is displayed in.
   */
  timezone?: string;
  /**
   * Types
   * @description Types
   */
  types?: string;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_INSIGHT_DETAILS tool output.
 */
type POSTHOG_UPDATE_PROJECT_INSIGHT_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_MEMBER_ROLE_BY_UUID tool input.
 */
type POSTHOG_UPDATE_PROJECT_MEMBER_ROLE_BY_UUID_INPUT = {
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Joined At
   * Format: date-time
   * @description Joined At
   */
  joined_at?: string;
  /**
   * Parent  Membership  User  Uuid
   * @description Parent Membership User Uuid
   */
  parent__membership__user__uuid?: string;
  /**
   * Parent Level
   * @description Parent Level
   */
  parent_level?: number;
  /**
   * Parent Membership Id
   * Format: uuid
   * @description Parent Membership Id
   */
  parent_membership_id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
  /**
   * User Uuid
   * Format: uuid
   * @description User Uuid
   */
  user_uuid?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_MEMBER_ROLE_BY_UUID tool output.
 */
type POSTHOG_UPDATE_PROJECT_MEMBER_ROLE_BY_UUID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_MEMBER_S_ROLE_BY_UUID tool input.
 */
type POSTHOG_UPDATE_PROJECT_MEMBER_S_ROLE_BY_UUID_INPUT = {
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Joined At
   * Format: date-time
   * @description Joined At
   */
  joined_at?: string;
  /**
   * Parent  Membership  User  Uuid
   * @description Parent Membership User Uuid
   */
  parent__membership__user__uuid?: string;
  /**
   * Parent Level
   * @description Parent Level
   */
  parent_level?: number;
  /**
   * Parent Membership Id
   * Format: uuid
   * @description Parent Membership Id
   */
  parent_membership_id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
  /**
   * User Uuid
   * Format: uuid
   * @description User Uuid
   */
  user_uuid?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_MEMBER_S_ROLE_BY_UUID tool output.
 */
type POSTHOG_UPDATE_PROJECT_MEMBER_S_ROLE_BY_UUID_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_NOTEBOOK_DETAILS tool input.
 */
type POSTHOG_UPDATE_PROJECT_NOTEBOOK_DETAILS_INPUT = {
  /**
   * Content
   * @description Content
   */
  content?: unknown;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Last Modified At
   * Format: date-time
   * @description Last Modified At
   */
  last_modified_at?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Short Id
   * @description Short Id
   */
  short_id?: string;
  /**
   * Text Content
   * @description Text Content
   */
  text_content?: string;
  /**
   * Title
   * @description Title
   */
  title?: string;
  /**
   * Version
   * @description Version
   */
  version?: number;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_NOTEBOOK_DETAILS tool output.
 */
type POSTHOG_UPDATE_PROJECT_NOTEBOOK_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_PIPELINE_DESTINATION_CONFIG tool input.
 */
type POSTHOG_UPDATE_PROJECT_PIPELINE_DESTINATION_CONFIG_INPUT = {
  /**
   * Config
   * @description Config
   */
  config?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Delivery Rate 24H
   * @description Delivery Rate 24H
   */
  delivery_rate_24h?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Enabled
   * @description Enabled
   */
  enabled?: boolean;
  /**
   * Error
   * @description Error
   */
  error?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Plugin
   * @description Plugin
   */
  plugin?: number;
  /**
   * Plugin Info
   * @description Plugin Info
   */
  plugin_info?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Team Id
   * @description Team Id
   */
  team_id?: number;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_PIPELINE_DESTINATION_CONFIG tool output.
 */
type POSTHOG_UPDATE_PROJECT_PIPELINE_DESTINATION_CONFIG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_PIPELINE_TRANSFORMATION_CONFIG tool input.
 */
type POSTHOG_UPDATE_PROJECT_PIPELINE_TRANSFORMATION_CONFIG_INPUT = {
  /**
   * Config
   * @description Config
   */
  config?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Delivery Rate 24H
   * @description Delivery Rate 24H
   */
  delivery_rate_24h?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Enabled
   * @description Enabled
   */
  enabled?: boolean;
  /**
   * Error
   * @description Error
   */
  error?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Plugin
   * @description Plugin
   */
  plugin?: number;
  /**
   * Plugin Info
   * @description Plugin Info
   */
  plugin_info?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Team Id
   * @description Team Id
   */
  team_id?: number;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_PIPELINE_TRANSFORMATION_CONFIG tool output.
 */
type POSTHOG_UPDATE_PROJECT_PIPELINE_TRANSFORMATION_CONFIG_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_PLUGIN_CONFIGURATION tool input.
 */
type POSTHOG_UPDATE_PROJECT_PLUGIN_CONFIGURATION_INPUT = {
  /**
   * Config
   * @description Config
   */
  config?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Delivery Rate 24H
   * @description Delivery Rate 24H
   */
  delivery_rate_24h?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Enabled
   * @description Enabled
   */
  enabled?: boolean;
  /**
   * Error
   * @description Error
   */
  error?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Order
   * @description Order
   */
  order?: number;
  /**
   * Plugin
   * @description Plugin
   */
  plugin?: number;
  /**
   * Plugin Info
   * @description Plugin Info
   */
  plugin_info?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Team Id
   * @description Team Id
   */
  team_id?: number;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_PLUGIN_CONFIGURATION tool output.
 */
type POSTHOG_UPDATE_PROJECT_PLUGIN_CONFIGURATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_PROPERTY_DEFINITION tool input.
 */
type POSTHOG_UPDATE_PROJECT_PROPERTY_DEFINITION_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this property definition.
   */
  id?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_PROPERTY_DEFINITION tool output.
 */
type POSTHOG_UPDATE_PROJECT_PROPERTY_DEFINITION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_SESSION_RECORDING_PLAYLIST tool input.
 */
type POSTHOG_UPDATE_PROJECT_SESSION_RECORDING_PLAYLIST_INPUT = {
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Derived Name
   * @description Derived Name
   */
  derived_name?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Last Modified At
   * Format: date-time
   * @description Last Modified At
   */
  last_modified_at?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Pinned
   * @description Pinned
   */
  pinned?: boolean;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Short Id
   * @description Short Id
   */
  short_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_SESSION_RECORDING_PLAYLIST tool output.
 */
type POSTHOG_UPDATE_PROJECT_SESSION_RECORDING_PLAYLIST_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_SUBSCRIPTION_DETAILS tool input.
 */
type POSTHOG_UPDATE_PROJECT_SUBSCRIPTION_DETAILS_INPUT = {
  /**
   * Bysetpos
   * @description Bysetpos
   */
  bysetpos?: number;
  /**
   * Byweekday
   * @description Byweekday
   */
  byweekday?: string[];
  /**
   * Count
   * @description Count
   */
  count?: number;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Dashboard
   * @description Dashboard
   */
  dashboard?: number;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Frequency
   * @description * `daily` - Daily * `weekly` - Weekly * `monthly` - Monthly * `yearly` - Yearly
   * @enum {string}
   */
  frequency?: "daily" | "weekly" | "monthly" | "yearly";
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Insight
   * @description Insight
   */
  insight?: number;
  /**
   * Interval
   * @description Interval
   */
  interval?: number;
  /**
   * Invite Message
   * @description Invite Message
   */
  invite_message?: string;
  /**
   * Next Delivery Date
   * Format: date-time
   * @description Next Delivery Date
   */
  next_delivery_date?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Start Date
   * Format: date-time
   * @description Start Date
   */
  start_date?: string;
  /**
   * Summary
   * @description Summary
   */
  summary?: string;
  /**
   * Target Type
   * @description * `email` - Email * `slack` - Slack * `webhook` - Webhook
   * @enum {string}
   */
  target_type?: "email" | "slack" | "webhook";
  /**
   * Target Value
   * @description Target Value
   */
  target_value?: string;
  /**
   * Title
   * @description Title
   */
  title?: string;
  /**
   * Until Date
   * Format: date-time
   * @description Until Date
   */
  until_date?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_SUBSCRIPTION_DETAILS tool output.
 */
type POSTHOG_UPDATE_PROJECT_SUBSCRIPTION_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_SURVEY_DETAILS tool input.
 */
type POSTHOG_UPDATE_PROJECT_SURVEY_DETAILS_INPUT = {
  /**
   * Appearance
   * @description Appearance
   */
  appearance?: unknown;
  /**
   * Archived
   * @description Archived
   */
  archived?: boolean;
  /**
   * Conditions
   * @description Conditions
   */
  conditions?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Current Iteration
   * @description Current Iteration
   */
  current_iteration?: number;
  /**
   * Current Iteration Start Date
   * Format: date-time
   * @description Current Iteration Start Date
   */
  current_iteration_start_date?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * End Date
   * Format: date-time
   * @description End Date
   */
  end_date?: string;
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Iteration Count
   * @description Iteration Count
   */
  iteration_count?: number;
  /**
   * Iteration Frequency Days
   * @description Iteration Frequency Days
   */
  iteration_frequency_days?: number;
  /**
   * Iteration Start Dates
   * @description Iteration Start Dates
   */
  iteration_start_dates?: string[];
  /**
   * Linked Flag Id
   * @description Linked Flag Id
   */
  linked_flag_id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Questions
   * @description          The `array` of questions included in the survey. Each question must conform to one of the defined question types: Basic, Link, Rating, or Multiple Choice.         Basic (open-ended question)         - `type`: `open`         - `question`: The text of the question.         - `description`: Optional description of the question.         - `descriptionContentType`: Content type of the description (`html` or `text`).         - `optional`: Whether the question is optional (`boolean`).         - `buttonText`: Text displayed on the submit button.         - `branching`: Branching logic for the question. See branching types below for details.         Link (a question with a link)         - `type`: `link`         - `question`: The text of the question.         - `description`: Optional description of the question.         - `descriptionContentType`: Content type of the description (`html` or `text`).         - `optional`: Whether the question is optional (`boolean`).         - `buttonText`: Text displayed on the submit button.         - `link`: The URL associated with the question.         - `branching`: Branching logic for the question. See branching types below for details.         Rating (a question with a rating scale)         - `type`: `rating`         - `question`: The text of the question.         - `description`: Optional description of the question.         - `descriptionContentType`: Content type of the description (`html` or `text`).         - `optional`: Whether the question is optional (`boolean`).         - `buttonText`: Text displayed on the submit button.         - `display`: Display style of the rating (`number` or `emoji`).         - `scale`: The scale of the rating (`number`).         - `lowerBoundLabel`: Label for the lower bound of the scale.         - `upperBoundLabel`: Label for the upper bound of the scale.         - `branching`: Branching logic for the question. See branching types below for details.         Multiple choice         - `type`: `single_choice` or `multiple_choice`         - `question`: The text of the question.         - `description`: Optional description of the question.         - `descriptionContentType`: Content type of the description (`html` or `text`).         - `optional`: Whether the question is optional (`boolean`).         - `buttonText`: Text displayed on the submit button.         - `choices`: An array of choices for the question.         - `shuffleOptions`: Whether to shuffle the order of the choices (`boolean`).         - `hasOpenChoice`: Whether the question allows an open-ended response (`boolean`).         - `branching`: Branching logic for the question. See branching types below for details.         Branching logic can be one of the following types:         Next question: Proceeds to the next question         ```json         {             "type": "next_question"         }         ```         End: Ends the survey, optionally displaying a confirmation message.         ```json         {             "type": "end"         }         ```         Response-based: Branches based on the response values. Available for the `rating` and `single_choice` question types.         ```json         {             "type": "response_based",             "responseValues": {                 "responseKey": "value"             }         }         ```         Specific question: Proceeds to a specific question by index.         ```json         {             "type": "specific_question",             "index": 2         }         ```
   */
  questions?: unknown;
  /**
   * Responses Limit
   * @description Responses Limit
   */
  responses_limit?: number;
  /**
   * Start Date
   * Format: date-time
   * @description Start Date
   */
  start_date?: string;
  /**
   * Type
   * @description * `popover` - popover * `widget` - widget * `button` - button * `email` - email * `full_screen` - full screen * `api` - api
   * @enum {string}
   */
  type?: "popover" | "widget" | "button" | "email" | "full_screen" | "api";
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_PROJECT_SURVEY_DETAILS tool output.
 */
type POSTHOG_UPDATE_PROJECT_SURVEY_DETAILS_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_ROLE_DETAILS_IN_ORGANIZATION tool input.
 */
type POSTHOG_UPDATE_ROLE_DETAILS_IN_ORGANIZATION_INPUT = {
  /**
   * Associated Flags
   * @description Associated Flags
   */
  associated_flags?: string;
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Members
   * @description Members
   */
  members?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_ROLE_DETAILS_IN_ORGANIZATION tool output.
 */
type POSTHOG_UPDATE_ROLE_DETAILS_IN_ORGANIZATION_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_SESSION_RECORDING_PLAYLIST_PARTIALLY tool input.
 */
type POSTHOG_UPDATE_SESSION_RECORDING_PLAYLIST_PARTIALLY_INPUT = {
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Deleted
   * @description Deleted
   */
  deleted?: boolean;
  /**
   * Derived Name
   * @description Derived Name
   */
  derived_name?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Filters
   * @description Filters
   */
  filters?: unknown;
  /**
   * Id
   * @description Id
   */
  id?: number;
  /**
   * Last Modified At
   * Format: date-time
   * @description Last Modified At
   */
  last_modified_at?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Pinned
   * @description Pinned
   */
  pinned?: boolean;
  /**
   * Project Id
   * @description Project ID of the project you"re trying to access. To find the ID of the project, make a call to /api/projects/.
   */
  project_id?: string;
  /**
   * Short Id
   * @description Short Id
   */
  short_id?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_SESSION_RECORDING_PLAYLIST_PARTIALLY tool output.
 */
type POSTHOG_UPDATE_SESSION_RECORDING_PLAYLIST_PARTIALLY_OUTPUT = {
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
 * Type of POSTHOG's POSTHOG_UPDATE_SPECIFIC_PROXY_RECORD_FIELDS tool input.
 */
type POSTHOG_UPDATE_SPECIFIC_PROXY_RECORD_FIELDS_INPUT = {
  /**
   * Created At
   * Format: date-time
   * @description Created At
   */
  created_at?: string;
  /**
   * Created By
   * @description Created By
   */
  created_by?: number;
  /**
   * Domain
   * @description Domain
   */
  domain?: string;
  /**
   * Id
   * Format: uuid
   * @description Id
   */
  id?: string;
  /**
   * Message
   * @description Message
   */
  message?: string;
  /**
   * Organization Id
   * @description Organization Id
   */
  organization_id?: string;
  /**
   * Target Cname
   * @description Target Cname
   */
  target_cname?: string;
  /**
   * Updated At
   * Format: date-time
   * @description Updated At
   */
  updated_at?: string;
};

/**
 * Type of POSTHOG's POSTHOG_UPDATE_SPECIFIC_PROXY_RECORD_FIELDS tool output.
 */
type POSTHOG_UPDATE_SPECIFIC_PROXY_RECORD_FIELDS_OUTPUT = {
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
 * Type map of all available tool input types for toolkit "POSTHOG".
 */
export type POSTHOG_TOOL_INPUTS = {
  ADD_DASHBOARD_COLLABORATORS_WITH_ACCESS_LEVEL: POSTHOG_ADD_DASHBOARD_COLLABORATORS_WITH_ACCESS_LEVEL_INPUT
  ADD_MEMBER_TO_ORGANIZATION_ROLE: POSTHOG_ADD_MEMBER_TO_ORGANIZATION_ROLE_INPUT
  ADD_PROJECT_SPECIFIC_MEMBER_ROLES: POSTHOG_ADD_PROJECT_SPECIFIC_MEMBER_ROLES_INPUT
  ASSIGN_FEATURE_FLAG_ROLE_BASED_ACCESS: POSTHOG_ASSIGN_FEATURE_FLAG_ROLE_BASED_ACCESS_INPUT
  BOOKMARK_PROJECT_ACTIVITY_NOTIFICATION: POSTHOG_BOOKMARK_PROJECT_ACTIVITY_NOTIFICATION_INPUT
  BULK_CREATE_ORGANIZATION_INVITES: POSTHOG_BULK_CREATE_ORGANIZATION_INVITES_INPUT
  CANCEL_INSIGHTS_FOR_A_PROJECT: POSTHOG_CANCEL_INSIGHTS_FOR_A_PROJECT_INPUT
  CHECK_PIPELINE_DESTINATION_UPDATES: POSTHOG_CHECK_PIPELINE_DESTINATION_UPDATES_INPUT
  CHECK_PIPELINE_IMPORT_APP_UPDATES: POSTHOG_CHECK_PIPELINE_IMPORT_APP_UPDATES_INPUT
  CHECK_PIPELINE_PLUGIN_UPDATE_STATUS: POSTHOG_CHECK_PIPELINE_PLUGIN_UPDATE_STATUS_INPUT
  CHECK_PROJECT_S_DEMO_DATA_GENERATION_STATUS: POSTHOG_CHECK_PROJECT_S_DEMO_DATA_GENERATION_STATUS_INPUT
  COHORT_DUPLICATION_TO_STATIC: POSTHOG_COHORT_DUPLICATION_TO_STATIC_INPUT
  CREATE_A_NOTEBOOK_IN_A_PROJECT: POSTHOG_CREATE_A_NOTEBOOK_IN_A_PROJECT_INPUT
  CREATE_CUSTOM_PROJECT_INSIGHTS: POSTHOG_CREATE_CUSTOM_PROJECT_INSIGHTS_INPUT
  CREATE_DASHBOARD_FROM_TEMPLATE_IN_PROJECT: POSTHOG_CREATE_DASHBOARD_FROM_TEMPLATE_IN_PROJECT_INPUT
  CREATE_DOMAIN_WITH_SAML_FOR_ORGANIZATION: POSTHOG_CREATE_DOMAIN_WITH_SAML_FOR_ORGANIZATION_INPUT
  CREATE_EXPERIMENT_EXPOSURE_COHORT: POSTHOG_CREATE_EXPERIMENT_EXPOSURE_COHORT_INPUT
  CREATE_FEATURE_FLAGS_FOR_PROJECT: POSTHOG_CREATE_FEATURE_FLAGS_FOR_PROJECT_INPUT
  CREATE_FEATURE_FLAG_DASHBOARD: POSTHOG_CREATE_FEATURE_FLAG_DASHBOARD_INPUT
  CREATE_FRONTEND_APP_PIPELINE_CONFIG: POSTHOG_CREATE_FRONTEND_APP_PIPELINE_CONFIG_INPUT
  CREATE_FUNNEL_ANALYSIS_FOR_PROJECT_PERSONS: POSTHOG_CREATE_FUNNEL_ANALYSIS_FOR_PROJECT_PERSONS_INPUT
  CREATE_NEW_ORGANIZATION_WITH_CONFIGURABLE_ACCESS: POSTHOG_CREATE_NEW_ORGANIZATION_WITH_CONFIGURABLE_ACCESS_INPUT
  CREATE_NEW_PROJECT_EXPERIMENT: POSTHOG_CREATE_NEW_PROJECT_EXPERIMENT_INPUT
  CREATE_ORGANIZATION_INVITE_WITH_ROLE_AND_EMAIL: POSTHOG_CREATE_ORGANIZATION_INVITE_WITH_ROLE_AND_EMAIL_INPUT
  CREATE_ORGANIZATION_ROLE_WITH_FEATURE_FLAG_LEVELS: POSTHOG_CREATE_ORGANIZATION_ROLE_WITH_FEATURE_FLAG_LEVELS_INPUT
  CREATE_ORG_PROXY_RECORD_WITH_DOMAIN_AND_STATUS: POSTHOG_CREATE_ORG_PROXY_RECORD_WITH_DOMAIN_AND_STATUS_INPUT
  CREATE_PERSON_FUNNEL_CORRELATION: POSTHOG_CREATE_PERSON_FUNNEL_CORRELATION_INPUT
  CREATE_PERSON_PATH_WITH_FORMAT_OPTION: POSTHOG_CREATE_PERSON_PATH_WITH_FORMAT_OPTION_INPUT
  CREATE_PIPELINE_DESTINATION_CONFIG: POSTHOG_CREATE_PIPELINE_DESTINATION_CONFIG_INPUT
  CREATE_PIPELINE_DESTINATION_CONFIG_JOB: POSTHOG_CREATE_PIPELINE_DESTINATION_CONFIG_JOB_INPUT
  CREATE_PIPELINE_IMPORT_APPS_CONFIG_JOB: POSTHOG_CREATE_PIPELINE_IMPORT_APPS_CONFIG_JOB_INPUT
  CREATE_PLUGIN_JOB_CONFIGURATION: POSTHOG_CREATE_PLUGIN_JOB_CONFIGURATION_INPUT
  CREATE_PROJECT_ACTION_WITH_FORMAT: POSTHOG_CREATE_PROJECT_ACTION_WITH_FORMAT_INPUT
  CREATE_PROJECT_COHORTS: POSTHOG_CREATE_PROJECT_COHORTS_INPUT
  CREATE_PROJECT_DASHBOARD: POSTHOG_CREATE_PROJECT_DASHBOARD_INPUT
  CREATE_PROJECT_INSIGHTS_WITH_FORMAT_OPTION: POSTHOG_CREATE_PROJECT_INSIGHTS_WITH_FORMAT_OPTION_INPUT
  CREATE_PROJECT_PIPELINE_APP_CONFIGS: POSTHOG_CREATE_PROJECT_PIPELINE_APP_CONFIGS_INPUT
  CREATE_PROJECT_PIPELINE_FRONTEND_APP_JOB: POSTHOG_CREATE_PROJECT_PIPELINE_FRONTEND_APP_JOB_INPUT
  CREATE_PROJECT_PIPELINE_TRANSFORMATION_CONFIG: POSTHOG_CREATE_PROJECT_PIPELINE_TRANSFORMATION_CONFIG_INPUT
  CREATE_PROJECT_PLUGIN_CONFIGURATION: POSTHOG_CREATE_PROJECT_PLUGIN_CONFIGURATION_INPUT
  CREATE_PROJECT_SUBSCRIPTION_WITH_DELIVERY_OPTIONS: POSTHOG_CREATE_PROJECT_SUBSCRIPTION_WITH_DELIVERY_OPTIONS_INPUT
  CREATE_PROJECT_SURVEYS_WITH_QUESTIONS_AND_TARGETS: POSTHOG_CREATE_PROJECT_SURVEYS_WITH_QUESTIONS_AND_TARGETS_INPUT
  CREATE_PROJECT_TIMING_INSIGHTS: POSTHOG_CREATE_PROJECT_TIMING_INSIGHTS_INPUT
  CREATE_QUERY_IN_PROJECT_BY_ID: POSTHOG_CREATE_QUERY_IN_PROJECT_BY_ID_INPUT
  CREATE_RETRIEVE_RETENTION_INSIGHTS_FOR_PROJECT: POSTHOG_CREATE_RETRIEVE_RETENTION_INSIGHTS_FOR_PROJECT_INPUT
  CREATE_SESSION_RECORDING_IN_PLAYLIST: POSTHOG_CREATE_SESSION_RECORDING_IN_PLAYLIST_INPUT
  CREATE_SESSION_RECORDING_PLAYLISTS: POSTHOG_CREATE_SESSION_RECORDING_PLAYLISTS_INPUT
  CREATE_SESSION_RECORDING_SUMMARY: POSTHOG_CREATE_SESSION_RECORDING_SUMMARY_INPUT
  CREATE_STATIC_COHORT_FOR_FEATURE_FLAG: POSTHOG_CREATE_STATIC_COHORT_FOR_FEATURE_FLAG_INPUT
  CRUD_OPERATIONS_FOR_PROJECT_ANNOTATIONS: POSTHOG_CRUD_OPERATIONS_FOR_PROJECT_ANNOTATIONS_INPUT
  CUSTOM_PROJECT_FUNNEL_ANALYTICS_WITH_ADVANCED_OPTIONS: POSTHOG_CUSTOM_PROJECT_FUNNEL_ANALYTICS_WITH_ADVANCED_OPTIONS_INPUT
  DELETE_ORGANIZATION_BY_UUID: POSTHOG_DELETE_ORGANIZATION_BY_UUID_INPUT
  DELETE_ORGANIZATION_PROJECT: POSTHOG_DELETE_ORGANIZATION_PROJECT_INPUT
  DELETE_PERSON_AND_OPTIONALLY_ASSOCIATED_EVENTS: POSTHOG_DELETE_PERSON_AND_OPTIONALLY_ASSOCIATED_EVENTS_INPUT
  DELETE_SESSION_RECORDING_BY_UUID: POSTHOG_DELETE_SESSION_RECORDING_BY_UUID_INPUT
  DELETE_SURVEY_BY_ID: POSTHOG_DELETE_SURVEY_BY_ID_INPUT
  ENABLE_PROJECT_EARLY_ACCESS_FEATURE: POSTHOG_ENABLE_PROJECT_EARLY_ACCESS_FEATURE_INPUT
  FETCH_BATCH_EXPORT_DETAILS_VIA_UUID: POSTHOG_FETCH_BATCH_EXPORT_DETAILS_VIA_UUID_INPUT
  FETCH_EXPORT_UNSUBSCRIBE_SETTINGS: POSTHOG_FETCH_EXPORT_UNSUBSCRIBE_SETTINGS_INPUT
  FETCH_FRONTEND_APP_CONFIG_STATUS: POSTHOG_FETCH_FRONTEND_APP_CONFIG_STATUS_INPUT
  FETCH_ORGANIZATION_DETAILS_BY_UUID: POSTHOG_FETCH_ORGANIZATION_DETAILS_BY_UUID_INPUT
  FETCH_ORGANIZATION_PIPELINE_APP_REPOSITORIES: POSTHOG_FETCH_ORGANIZATION_PIPELINE_APP_REPOSITORIES_INPUT
  FETCH_PIPELINE_DESTINATION_DETAILS: POSTHOG_FETCH_PIPELINE_DESTINATION_DETAILS_INPUT
  FETCH_PIPELINE_TRANSFORMATION_DETAILS: POSTHOG_FETCH_PIPELINE_TRANSFORMATION_DETAILS_INPUT
  FETCH_PROJECT_EXPERIMENT_SECONDARY_DATA: POSTHOG_FETCH_PROJECT_EXPERIMENT_SECONDARY_DATA_INPUT
  FETCH_PROJECT_SURVEY_ACTIVITY_LOG: POSTHOG_FETCH_PROJECT_SURVEY_ACTIVITY_LOG_INPUT
  FETCH_SESSION_RECORDING_PLAYLIST_DETAILS: POSTHOG_FETCH_SESSION_RECORDING_PLAYLIST_DETAILS_INPUT
  FLAG_ANNOTATION_AS_DELETED: POSTHOG_FLAG_ANNOTATION_AS_DELETED_INPUT
  GENERATE_PROJECT_FUNNEL_CORRELATION_INSIGHT: POSTHOG_GENERATE_PROJECT_FUNNEL_CORRELATION_INSIGHT_INPUT
  GET_UNUSED_ORG_PIPELINE_FRONTEND_APPS: POSTHOG_GET_UNUSED_ORG_PIPELINE_FRONTEND_APPS_INPUT
  INITIATE_DOMAIN_VERIFICATION_WITH_SAML_CONFIG: POSTHOG_INITIATE_DOMAIN_VERIFICATION_WITH_SAML_CONFIG_INPUT
  INITIATE_PIPELINE_TRANSFORMATION_JOB: POSTHOG_INITIATE_PIPELINE_TRANSFORMATION_JOB_INPUT
  LIST_AND_FILTER_PROJECT_EVENTS: POSTHOG_LIST_AND_FILTER_PROJECT_EVENTS_INPUT
  LIST_AND_MANAGE_PROJECT_ANNOTATIONS: POSTHOG_LIST_AND_MANAGE_PROJECT_ANNOTATIONS_INPUT
  LIST_AND_MANAGE_PROJECT_FEATURE_FLAGS: POSTHOG_LIST_AND_MANAGE_PROJECT_FEATURE_FLAGS_INPUT
  LIST_BATCH_EXPORT_RUNS_WITH_PAGINATION_AND_ORDERING: POSTHOG_LIST_BATCH_EXPORT_RUNS_WITH_PAGINATION_AND_ORDERING_INPUT
  LIST_DASHBOARD_SHARING_CONFIGS: POSTHOG_LIST_DASHBOARD_SHARING_CONFIGS_INPUT
  LIST_FEATURE_FLAG_ROLE_ACCESS_DETAILS: POSTHOG_LIST_FEATURE_FLAG_ROLE_ACCESS_DETAILS_INPUT
  LIST_NOTEBOOKS_WITH_FILTERS_AND_PAGINATION: POSTHOG_LIST_NOTEBOOKS_WITH_FILTERS_AND_PAGINATION_INPUT
  LIST_OF_PROJECT_S_SESSION_RECORDING_PLAYLISTS: POSTHOG_LIST_OF_PROJECT_S_SESSION_RECORDING_PLAYLISTS_INPUT
  LIST_ORGANIZATION_DOMAINS_WITH_PAGINATION: POSTHOG_LIST_ORGANIZATION_DOMAINS_WITH_PAGINATION_INPUT
  LIST_ORGANIZATION_INVITES_WITH_PAGINATION: POSTHOG_LIST_ORGANIZATION_INVITES_WITH_PAGINATION_INPUT
  LIST_ORGANIZATION_MEMBERS_WITH_PAGINATION: POSTHOG_LIST_ORGANIZATION_MEMBERS_WITH_PAGINATION_INPUT
  LIST_ORGANIZATION_PLUGINS_WITH_PAGINATION: POSTHOG_LIST_ORGANIZATION_PLUGINS_WITH_PAGINATION_INPUT
  LIST_ORGANIZATION_ROLES_WITH_PAGINATION: POSTHOG_LIST_ORGANIZATION_ROLES_WITH_PAGINATION_INPUT
  LIST_ORGANIZATION_S_BATCH_EXPORTS_WITH_PAGINATION: POSTHOG_LIST_ORGANIZATION_S_BATCH_EXPORTS_WITH_PAGINATION_INPUT
  LIST_ORGANIZATION_S_PAGINATED_PROXY_RECORDS: POSTHOG_LIST_ORGANIZATION_S_PAGINATED_PROXY_RECORDS_INPUT
  LIST_ORGANIZATION_S_PIPELINE_DESTINATIONS: POSTHOG_LIST_ORGANIZATION_S_PIPELINE_DESTINATIONS_INPUT
  LIST_ORGANIZATION_S_PIPELINE_FRONTEND_APPS: POSTHOG_LIST_ORGANIZATION_S_PIPELINE_FRONTEND_APPS_INPUT
  LIST_ORGANIZATION_S_PIPELINE_IMPORT_APPS: POSTHOG_LIST_ORGANIZATION_S_PIPELINE_IMPORT_APPS_INPUT
  LIST_ORGANIZATION_S_PIPELINE_TRANSFORMATIONS: POSTHOG_LIST_ORGANIZATION_S_PIPELINE_TRANSFORMATIONS_INPUT
  LIST_OR_DELETE_PERSONS_WITH_OPTIONAL_FILTERS: POSTHOG_LIST_OR_DELETE_PERSONS_WITH_OPTIONAL_FILTERS_INPUT
  LIST_PAGINATED_SURVEYS_FOR_A_PROJECT: POSTHOG_LIST_PAGINATED_SURVEYS_FOR_A_PROJECT_INPUT
  LIST_PIPELINE_DESTINATION_CONFIGS_WITH_PAGINATION: POSTHOG_LIST_PIPELINE_DESTINATION_CONFIGS_WITH_PAGINATION_INPUT
  LIST_PIPELINE_FRONTEND_APP_CONFIGS: POSTHOG_LIST_PIPELINE_FRONTEND_APP_CONFIGS_INPUT
  LIST_PROJECTS_IN_ORGANIZATION_WITH_PAGINATION: POSTHOG_LIST_PROJECTS_IN_ORGANIZATION_WITH_PAGINATION_INPUT
  LIST_PROJECT_ACTIONS_WITH_PAGINATION_AND_FILTERS: POSTHOG_LIST_PROJECT_ACTIONS_WITH_PAGINATION_AND_FILTERS_INPUT
  LIST_PROJECT_BATCH_EXPORTS_WITH_PAGINATION: POSTHOG_LIST_PROJECT_BATCH_EXPORTS_WITH_PAGINATION_INPUT
  LIST_PROJECT_CONFIGURATION_PLUGIN_LOGS: POSTHOG_LIST_PROJECT_CONFIGURATION_PLUGIN_LOGS_INPUT
  LIST_PROJECT_DASHBOARDS_WITH_PAGINATION: POSTHOG_LIST_PROJECT_DASHBOARDS_WITH_PAGINATION_INPUT
  LIST_PROJECT_DASHBOARD_COLLABORATORS: POSTHOG_LIST_PROJECT_DASHBOARD_COLLABORATORS_INPUT
  LIST_PROJECT_DASHBOARD_TEMPLATES: POSTHOG_LIST_PROJECT_DASHBOARD_TEMPLATES_INPUT
  LIST_PROJECT_EARLY_ACCESS_FEATURES: POSTHOG_LIST_PROJECT_EARLY_ACCESS_FEATURES_INPUT
  LIST_PROJECT_EXPERIMENTS_WITH_PAGINATION: POSTHOG_LIST_PROJECT_EXPERIMENTS_WITH_PAGINATION_INPUT
  LIST_PROJECT_EXPORT_ITEMS_WITH_PAGINATION: POSTHOG_LIST_PROJECT_EXPORT_ITEMS_WITH_PAGINATION_INPUT
  LIST_PROJECT_GROUP_TYPES_BY_ID: POSTHOG_LIST_PROJECT_GROUP_TYPES_BY_ID_INPUT
  LIST_PROJECT_MEMBERSHIP_DETAILS: POSTHOG_LIST_PROJECT_MEMBERSHIP_DETAILS_INPUT
  LIST_PROJECT_PIPELINE_CONFIGURATIONS: POSTHOG_LIST_PROJECT_PIPELINE_CONFIGURATIONS_INPUT
  LIST_PROJECT_PIPELINE_IMPORT_CONFIGS: POSTHOG_LIST_PROJECT_PIPELINE_IMPORT_CONFIGS_INPUT
  LIST_PROJECT_PLUGIN_CONFIGURATIONS: POSTHOG_LIST_PROJECT_PLUGIN_CONFIGURATIONS_INPUT
  LIST_PROJECT_SESSION_RECORDINGS: POSTHOG_LIST_PROJECT_SESSION_RECORDINGS_INPUT
  LIST_PROJECT_SUBSCRIPTIONS_WITH_PAGINATION: POSTHOG_LIST_PROJECT_SUBSCRIPTIONS_WITH_PAGINATION_INPUT
  LIST_ROLE_MEMBERSHIPS_PAGINATED: POSTHOG_LIST_ROLE_MEMBERSHIPS_PAGINATED_INPUT
  LIST_SESSION_RECORDING_SHARING_CONFIGS: POSTHOG_LIST_SESSION_RECORDING_SHARING_CONFIGS_INPUT
  LIST_SPECIFIC_TYPE_GROUPS_WITH_PAGINATION: POSTHOG_LIST_SPECIFIC_TYPE_GROUPS_WITH_PAGINATION_INPUT
  LIST_UNUSED_ORGANIZATION_PIPELINE_TRANSFORMATIONS: POSTHOG_LIST_UNUSED_ORGANIZATION_PIPELINE_TRANSFORMATIONS_INPUT
  LIST_USERS_WITH_STAFF_FILTER_AND_PAGINATION: POSTHOG_LIST_USERS_WITH_STAFF_FILTER_AND_PAGINATION_INPUT
  MANAGE_FEATURE_FLAG_ENRICHMENT_FOR_USAGE_DASHBOARD: POSTHOG_MANAGE_FEATURE_FLAG_ENRICHMENT_FOR_USAGE_DASHBOARD_INPUT
  MANAGE_PROJECT_FEATURE_FLAGS: POSTHOG_MANAGE_PROJECT_FEATURE_FLAGS_INPUT
  MANAGE_PROJECT_FEATURE_FLAGS_FOR_LOCAL_EVALUATION: POSTHOG_MANAGE_PROJECT_FEATURE_FLAGS_FOR_LOCAL_EVALUATION_INPUT
  MANAGE_USER_FEATURE_FLAGS: POSTHOG_MANAGE_USER_FEATURE_FLAGS_INPUT
  MARK_DASHBOARD_TEMPLATE_AS_DELETED: POSTHOG_MARK_DASHBOARD_TEMPLATE_AS_DELETED_INPUT
  MARK_INSIGHT_AS_VIEWED_WITH_CONFIGURABLE_FORMAT: POSTHOG_MARK_INSIGHT_AS_VIEWED_WITH_CONFIGURABLE_FORMAT_INPUT
  MARK_PROJECT_ACTION_AS_DELETED: POSTHOG_MARK_PROJECT_ACTION_AS_DELETED_INPUT
  MARK_SESSION_RECORDING_PLAYLIST_DELETED: POSTHOG_MARK_SESSION_RECORDING_PLAYLIST_DELETED_INPUT
  MARK_SUBSCRIPTION_AS_DELETED_BY_ID: POSTHOG_MARK_SUBSCRIPTION_AS_DELETED_BY_ID_INPUT
  MODIFY_ORG_INFO_VIA_UUID: POSTHOG_MODIFY_ORG_INFO_VIA_UUID_INPUT
  MOVE_DASHBOARD_TILE: POSTHOG_MOVE_DASHBOARD_TILE_INPUT
  PARTIALLY_UPDATE_PROJECT_PLUGIN_CONFIG: POSTHOG_PARTIALLY_UPDATE_PROJECT_PLUGIN_CONFIG_INPUT
  PARTIALLY_UPDATE_PROJECT_PROPERTY_DEFINITION: POSTHOG_PARTIALLY_UPDATE_PROJECT_PROPERTY_DEFINITION_INPUT
  PARTIAL_EXPERIMENT_UPDATE_IN_PROJECT: POSTHOG_PARTIAL_EXPERIMENT_UPDATE_IN_PROJECT_INPUT
  PARTIAL_PIPELINE_FRONTEND_APP_CONFIG_UPDATE: POSTHOG_PARTIAL_PIPELINE_FRONTEND_APP_CONFIG_UPDATE_INPUT
  PARTIAL_UPDATE_OF_A_PROJECT_INSIGHT: POSTHOG_PARTIAL_UPDATE_OF_A_PROJECT_INSIGHT_INPUT
  PARTIAL_UPDATE_OF_A_PROJECT_S_DASHBOARD: POSTHOG_PARTIAL_UPDATE_OF_A_PROJECT_S_DASHBOARD_INPUT
  PARTIAL_UPDATE_OF_A_PROJECT_S_FEATURE_FLAG: POSTHOG_PARTIAL_UPDATE_OF_A_PROJECT_S_FEATURE_FLAG_INPUT
  PARTIAL_UPDATE_OF_PROJECT_NOTEBOOK: POSTHOG_PARTIAL_UPDATE_OF_PROJECT_NOTEBOOK_INPUT
  PARTIAL_UPDATE_PROJECT_ANNOTATION: POSTHOG_PARTIAL_UPDATE_PROJECT_ANNOTATION_INPUT
  PERSIST_SESSION_RECORDING_DATA_BY_UUID: POSTHOG_PERSIST_SESSION_RECORDING_DATA_BY_UUID_INPUT
  PERSON_PARTIAL_UPDATE_VIA_PROJECT_ID: POSTHOG_PERSON_PARTIAL_UPDATE_VIA_PROJECT_ID_INPUT
  PERSON_PROPERTY_DELETION_ENDPOINT: POSTHOG_PERSON_PROPERTY_DELETION_ENDPOINT_INPUT
  PREVENT_HARD_DELETE_NOTEBOOK_BY_FLAGGING: POSTHOG_PREVENT_HARD_DELETE_NOTEBOOK_BY_FLAGGING_INPUT
  PROJECT_TREND_ANALYTICS: POSTHOG_PROJECT_TREND_ANALYTICS_INPUT
  REARRANGE_FRONTEND_APP_PIPELINE_CONFIGS: POSTHOG_REARRANGE_FRONTEND_APP_PIPELINE_CONFIGS_INPUT
  REARRANGE_PIPELINE_TRANSFORMATION_CONFIGS: POSTHOG_REARRANGE_PIPELINE_TRANSFORMATION_CONFIGS_INPUT
  REARRANGE_PROJECT_IMPORT_APP_CONFIGURATIONS: POSTHOG_REARRANGE_PROJECT_IMPORT_APP_CONFIGURATIONS_INPUT
  REARRANGE_PROJECT_PIPELINE_DESTINATION_CONFIGS: POSTHOG_REARRANGE_PROJECT_PIPELINE_DESTINATION_CONFIGS_INPUT
  RECONFIGURE_PLUGIN_ORDER_AND_STATUS_IN_PROJECT: POSTHOG_RECONFIGURE_PLUGIN_ORDER_AND_STATUS_IN_PROJECT_INPUT
  REMOVE_DOMAIN_BY_UUID_FROM_ORGANIZATION: POSTHOG_REMOVE_DOMAIN_BY_UUID_FROM_ORGANIZATION_INPUT
  REMOVE_EARLY_ACCESS_FEATURE_FROM_PROJECT: POSTHOG_REMOVE_EARLY_ACCESS_FEATURE_FROM_PROJECT_INPUT
  REMOVE_EXPLICIT_PROJECT_MEMBER_BY_UUID: POSTHOG_REMOVE_EXPLICIT_PROJECT_MEMBER_BY_UUID_INPUT
  REMOVE_FEATURE_FLAG_ROLE_ACCESS_BY_ID: POSTHOG_REMOVE_FEATURE_FLAG_ROLE_ACCESS_BY_ID_INPUT
  REMOVE_MEMBER_FROM_ORGANIZATION_BY_UUID: POSTHOG_REMOVE_MEMBER_FROM_ORGANIZATION_BY_UUID_INPUT
  REMOVE_ORGANIZATION_BATCH_EXPORT_BY_UUID: POSTHOG_REMOVE_ORGANIZATION_BATCH_EXPORT_BY_UUID_INPUT
  REMOVE_ORGANIZATION_PIPELINE_DESTINATION: POSTHOG_REMOVE_ORGANIZATION_PIPELINE_DESTINATION_INPUT
  REMOVE_ORGANIZATION_PIPELINE_TRANSFORMATION: POSTHOG_REMOVE_ORGANIZATION_PIPELINE_TRANSFORMATION_INPUT
  REMOVE_ORGANIZATION_PLUGIN_BY_ID: POSTHOG_REMOVE_ORGANIZATION_PLUGIN_BY_ID_INPUT
  REMOVE_ORGANIZATION_PROXY_RECORD: POSTHOG_REMOVE_ORGANIZATION_PROXY_RECORD_INPUT
  REMOVE_ORGANIZATION_ROLE_BY_ID: POSTHOG_REMOVE_ORGANIZATION_ROLE_BY_ID_INPUT
  REMOVE_ORG_PIPELINE_IMPORT_APP_BY_ID: POSTHOG_REMOVE_ORG_PIPELINE_IMPORT_APP_BY_ID_INPUT
  REMOVE_PIPELINE_DESTINATION_CONFIG: POSTHOG_REMOVE_PIPELINE_DESTINATION_CONFIG_INPUT
  REMOVE_PIPELINE_FRONTEND_APP_BY_ID: POSTHOG_REMOVE_PIPELINE_FRONTEND_APP_BY_ID_INPUT
  REMOVE_PIPELINE_FRONTEND_APP_CONFIG: POSTHOG_REMOVE_PIPELINE_FRONTEND_APP_CONFIG_INPUT
  REMOVE_PIPELINE_IMPORT_APP_CONFIG: POSTHOG_REMOVE_PIPELINE_IMPORT_APP_CONFIG_INPUT
  REMOVE_PIPELINE_TRANSFORMATION_CONFIG_BY_ID: POSTHOG_REMOVE_PIPELINE_TRANSFORMATION_CONFIG_BY_ID_INPUT
  REMOVE_PROJECT_DASHBOARD_COLLABORATOR: POSTHOG_REMOVE_PROJECT_DASHBOARD_COLLABORATOR_INPUT
  REMOVE_PROJECT_EVENT_DEFINITION: POSTHOG_REMOVE_PROJECT_EVENT_DEFINITION_INPUT
  REMOVE_PROJECT_EXPERIMENT_BY_ID: POSTHOG_REMOVE_PROJECT_EXPERIMENT_BY_ID_INPUT
  REMOVE_PROJECT_PLUGIN_CONFIGURATION: POSTHOG_REMOVE_PROJECT_PLUGIN_CONFIGURATION_INPUT
  REMOVE_PROPERTY_DEFINITION_BY_UUID: POSTHOG_REMOVE_PROPERTY_DEFINITION_BY_UUID_INPUT
  REMOVE_ROLE_MEMBERSHIP_BY_UUID: POSTHOG_REMOVE_ROLE_MEMBERSHIP_BY_UUID_INPUT
  REMOVE_SESSION_RECORDING_FROM_PLAYLIST: POSTHOG_REMOVE_SESSION_RECORDING_FROM_PLAYLIST_INPUT
  REMOVE_SPECIFIC_PROJECT_BATCH_EXPORT: POSTHOG_REMOVE_SPECIFIC_PROJECT_BATCH_EXPORT_INPUT
  REMOVE_SPECIFIC_PROJECT_QUERY: POSTHOG_REMOVE_SPECIFIC_PROJECT_QUERY_INPUT
  RETRIEVE_AND_DELETE_PROJECT_PERSON_TRENDS: POSTHOG_RETRIEVE_AND_DELETE_PROJECT_PERSON_TRENDS_INPUT
  RETRIEVE_APP_METRICS_BY_IDS: POSTHOG_RETRIEVE_APP_METRICS_BY_IDS_INPUT
  RETRIEVE_APP_METRICS_ERROR_DETAILS: POSTHOG_RETRIEVE_APP_METRICS_ERROR_DETAILS_INPUT
  RETRIEVE_ASYNC_QUERY_STATUS_BY_ID: POSTHOG_RETRIEVE_ASYNC_QUERY_STATUS_BY_ID_INPUT
  RETRIEVE_BATCH_EXPORT_DETAILS: POSTHOG_RETRIEVE_BATCH_EXPORT_DETAILS_INPUT
  RETRIEVE_BATCH_EXPORT_LOGS_BY_UUID: POSTHOG_RETRIEVE_BATCH_EXPORT_LOGS_BY_UUID_INPUT
  RETRIEVE_BATCH_EXPORT_RUN_LOGS: POSTHOG_RETRIEVE_BATCH_EXPORT_RUN_LOGS_INPUT
  RETRIEVE_COHORT_ACTIVITY_DETAILS: POSTHOG_RETRIEVE_COHORT_ACTIVITY_DETAILS_INPUT
  RETRIEVE_COHORT_PERSON_DETAILS: POSTHOG_RETRIEVE_COHORT_PERSON_DETAILS_INPUT
  RETRIEVE_DASHBOARD_TEMPLATE_DETAILS_BY_UUID: POSTHOG_RETRIEVE_DASHBOARD_TEMPLATE_DETAILS_BY_UUID_INPUT
  RETRIEVE_DASHBOARD_TEMPLATE_SCHEMA: POSTHOG_RETRIEVE_DASHBOARD_TEMPLATE_SCHEMA_INPUT
  RETRIEVE_EVENT_DEFINITIONS_BY_PROJECT_ID: POSTHOG_RETRIEVE_EVENT_DEFINITIONS_BY_PROJECT_ID_INPUT
  RETRIEVE_EVENT_DEFINITION_BY_UUID: POSTHOG_RETRIEVE_EVENT_DEFINITION_BY_UUID_INPUT
  RETRIEVE_EXPERIMENTS_REQUIRING_FLAG_IMPLEMENTATION: POSTHOG_RETRIEVE_EXPERIMENTS_REQUIRING_FLAG_IMPLEMENTATION_INPUT
  RETRIEVE_EXPERIMENT_DETAILS_BY_IDS: POSTHOG_RETRIEVE_EXPERIMENT_DETAILS_BY_IDS_INPUT
  RETRIEVE_EXPORT_UNSUBSCRIBE_CONFIGS: POSTHOG_RETRIEVE_EXPORT_UNSUBSCRIBE_CONFIGS_INPUT
  RETRIEVE_FEATURE_FLAGS_ACTIVITY_LOG: POSTHOG_RETRIEVE_FEATURE_FLAGS_ACTIVITY_LOG_INPUT
  RETRIEVE_FEATURE_FLAGS_EVALUATION_REASONS: POSTHOG_RETRIEVE_FEATURE_FLAGS_EVALUATION_REASONS_INPUT
  RETRIEVE_FEATURE_FLAG_ACTIVITY_DETAILS: POSTHOG_RETRIEVE_FEATURE_FLAG_ACTIVITY_DETAILS_INPUT
  RETRIEVE_FEATURE_FLAG_DETAILS: POSTHOG_RETRIEVE_FEATURE_FLAG_DETAILS_INPUT
  RETRIEVE_FEATURE_FLAG_ROLE_ACCESS_DETAILS: POSTHOG_RETRIEVE_FEATURE_FLAG_ROLE_ACCESS_DETAILS_INPUT
  RETRIEVE_FILTERED_PROJECT_PROPERTY_DEFINITIONS: POSTHOG_RETRIEVE_FILTERED_PROJECT_PROPERTY_DEFINITIONS_INPUT
  RETRIEVE_FUNNEL_INSIGHTS_IN_PROJECT: POSTHOG_RETRIEVE_FUNNEL_INSIGHTS_IN_PROJECT_INPUT
  RETRIEVE_GROUP_PROPERTY_DEFINITIONS_BY_PROJECT_ID: POSTHOG_RETRIEVE_GROUP_PROPERTY_DEFINITIONS_BY_PROJECT_ID_INPUT
  RETRIEVE_GROUP_PROPERTY_VALUES_BY_INDEX_AND_KEY: POSTHOG_RETRIEVE_GROUP_PROPERTY_VALUES_BY_INDEX_AND_KEY_INPUT
  RETRIEVE_HEDGEHOG_CONFIGURATION_BY_UUID: POSTHOG_RETRIEVE_HEDGEHOG_CONFIGURATION_BY_UUID_INPUT
  RETRIEVE_HISTORICAL_APP_METRICS_EXPORT: POSTHOG_RETRIEVE_HISTORICAL_APP_METRICS_EXPORT_INPUT
  RETRIEVE_IMPORTANT_PROJECT_ACTIVITY_LOG: POSTHOG_RETRIEVE_IMPORTANT_PROJECT_ACTIVITY_LOG_INPUT
  RETRIEVE_INSIGHT_SHARING_CONFIGURATIONS: POSTHOG_RETRIEVE_INSIGHT_SHARING_CONFIGURATIONS_INPUT
  RETRIEVE_LAST_VIEWED_INSIGHTS_FOR_USER: POSTHOG_RETRIEVE_LAST_VIEWED_INSIGHTS_FOR_USER_INPUT
  RETRIEVE_MATCHING_EVENTS_FOR_SESSION_RECORDING: POSTHOG_RETRIEVE_MATCHING_EVENTS_FOR_SESSION_RECORDING_INPUT
  RETRIEVE_NOTEBOOK_ACTIVITY_FOR_PROJECT: POSTHOG_RETRIEVE_NOTEBOOK_ACTIVITY_FOR_PROJECT_INPUT
  RETRIEVE_NOTEBOOK_ACTIVITY_LOG: POSTHOG_RETRIEVE_NOTEBOOK_ACTIVITY_LOG_INPUT
  RETRIEVE_NOTEBOOK_DETAILS: POSTHOG_RETRIEVE_NOTEBOOK_DETAILS_INPUT
  RETRIEVE_ORGANIZATION_PIPELINE_FRONTEND_APP: POSTHOG_RETRIEVE_ORGANIZATION_PIPELINE_FRONTEND_APP_INPUT
  RETRIEVE_ORGANIZATION_PIPELINE_UNSUBSCRIBE_CONFIGS: POSTHOG_RETRIEVE_ORGANIZATION_PIPELINE_UNSUBSCRIBE_CONFIGS_INPUT
  RETRIEVE_ORGANIZATION_PLUGIN_ACTIVITY: POSTHOG_RETRIEVE_ORGANIZATION_PLUGIN_ACTIVITY_INPUT
  RETRIEVE_ORGANIZATION_PLUGIN_DETAILS: POSTHOG_RETRIEVE_ORGANIZATION_PLUGIN_DETAILS_INPUT
  RETRIEVE_ORGANIZATION_PLUGIN_REPOSITORY_DETAILS: POSTHOG_RETRIEVE_ORGANIZATION_PLUGIN_REPOSITORY_DETAILS_INPUT
  RETRIEVE_ORGANIZATION_PLUGIN_UNSUBSCRIBE_CONFIGS: POSTHOG_RETRIEVE_ORGANIZATION_PLUGIN_UNSUBSCRIBE_CONFIGS_INPUT
  RETRIEVE_ORGANIZATION_PROJECT_DETAILS: POSTHOG_RETRIEVE_ORGANIZATION_PROJECT_DETAILS_INPUT
  RETRIEVE_ORGANIZATION_ROLE_DETAILS: POSTHOG_RETRIEVE_ORGANIZATION_ROLE_DETAILS_INPUT
  RETRIEVE_ORGANIZATION_S_PIPELINE_REPOSITORY_DETAILS: POSTHOG_RETRIEVE_ORGANIZATION_S_PIPELINE_REPOSITORY_DETAILS_INPUT
  RETRIEVE_ORGANIZATION_S_UNUSED_PIPELINE_APPS: POSTHOG_RETRIEVE_ORGANIZATION_S_UNUSED_PIPELINE_APPS_INPUT
  RETRIEVE_ORG_PIPELINE_TRANSFORMATION_ACTIVITY: POSTHOG_RETRIEVE_ORG_PIPELINE_TRANSFORMATION_ACTIVITY_INPUT
  RETRIEVE_OR_DELETE_PERSON_RETENTION_DATA: POSTHOG_RETRIEVE_OR_DELETE_PERSON_RETENTION_DATA_INPUT
  RETRIEVE_OR_DELETE_PROJECT_PERSONS_FUNNEL_DATA: POSTHOG_RETRIEVE_OR_DELETE_PROJECT_PERSONS_FUNNEL_DATA_INPUT
  RETRIEVE_PAGINATED_ORGANIZATION_LIST: POSTHOG_RETRIEVE_PAGINATED_ORGANIZATION_LIST_INPUT
  RETRIEVE_PERSONS_FUNNEL_CORRELATION_DATA: POSTHOG_RETRIEVE_PERSONS_FUNNEL_CORRELATION_DATA_INPUT
  RETRIEVE_PERSON_DETAILS_BY_ID: POSTHOG_RETRIEVE_PERSON_DETAILS_BY_ID_INPUT
  RETRIEVE_PERSON_DETAILS_BY_PROJECT: POSTHOG_RETRIEVE_PERSON_DETAILS_BY_PROJECT_INPUT
  RETRIEVE_PERSON_LIFECYCLE_DETAILS: POSTHOG_RETRIEVE_PERSON_LIFECYCLE_DETAILS_INPUT
  RETRIEVE_PERSON_PROPERTIES_TIMELINE: POSTHOG_RETRIEVE_PERSON_PROPERTIES_TIMELINE_INPUT
  RETRIEVE_PERSON_S_ACTIVITY_AND_DELETE_OPTIONS: POSTHOG_RETRIEVE_PERSON_S_ACTIVITY_AND_DELETE_OPTIONS_INPUT
  RETRIEVE_PERSON_VALUES_BY_PROJECT: POSTHOG_RETRIEVE_PERSON_VALUES_BY_PROJECT_INPUT
  RETRIEVE_PIPELINE_DESTINATION_ACTIVITY: POSTHOG_RETRIEVE_PIPELINE_DESTINATION_ACTIVITY_INPUT
  RETRIEVE_PIPELINE_DESTINATION_CONFIG_DETAILS: POSTHOG_RETRIEVE_PIPELINE_DESTINATION_CONFIG_DETAILS_INPUT
  RETRIEVE_PIPELINE_DESTINATION_DETAILS: POSTHOG_RETRIEVE_PIPELINE_DESTINATION_DETAILS_INPUT
  RETRIEVE_PIPELINE_DESTINATION_FRONTEND_CONFIG: POSTHOG_RETRIEVE_PIPELINE_DESTINATION_FRONTEND_CONFIG_INPUT
  RETRIEVE_PIPELINE_DESTINATION_PLUGIN_DETAILS: POSTHOG_RETRIEVE_PIPELINE_DESTINATION_PLUGIN_DETAILS_INPUT
  RETRIEVE_PIPELINE_FRONTEND_APP_ACTIVITY: POSTHOG_RETRIEVE_PIPELINE_FRONTEND_APP_ACTIVITY_INPUT
  RETRIEVE_PIPELINE_FRONTEND_APP_DETAILS: POSTHOG_RETRIEVE_PIPELINE_FRONTEND_APP_DETAILS_INPUT
  RETRIEVE_PIPELINE_FRONTEND_APP_SOURCE_DETAILS: POSTHOG_RETRIEVE_PIPELINE_FRONTEND_APP_SOURCE_DETAILS_INPUT
  RETRIEVE_PIPELINE_FRONTEND_PLUGIN_CONFIG: POSTHOG_RETRIEVE_PIPELINE_FRONTEND_PLUGIN_CONFIG_INPUT
  RETRIEVE_PIPELINE_IMPORT_APPS_ACTIVITY: POSTHOG_RETRIEVE_PIPELINE_IMPORT_APPS_ACTIVITY_INPUT
  RETRIEVE_PIPELINE_IMPORT_APP_DETAILS: POSTHOG_RETRIEVE_PIPELINE_IMPORT_APP_DETAILS_INPUT
  RETRIEVE_PIPELINE_IMPORT_APP_SOURCE_DETAILS: POSTHOG_RETRIEVE_PIPELINE_IMPORT_APP_SOURCE_DETAILS_INPUT
  RETRIEVE_PIPELINE_PLUGIN_DETAILS_BY_ID: POSTHOG_RETRIEVE_PIPELINE_PLUGIN_DETAILS_BY_ID_INPUT
  RETRIEVE_PIPELINE_PLUGIN_SOURCE: POSTHOG_RETRIEVE_PIPELINE_PLUGIN_SOURCE_INPUT
  RETRIEVE_PIPELINE_TRANSFORMATION_ACTIVITY: POSTHOG_RETRIEVE_PIPELINE_TRANSFORMATION_ACTIVITY_INPUT
  RETRIEVE_PIPELINE_TRANSFORMATION_CONFIG: POSTHOG_RETRIEVE_PIPELINE_TRANSFORMATION_CONFIG_INPUT
  RETRIEVE_PIPELINE_TRANSFORMATION_FRONTEND_CONFIG: POSTHOG_RETRIEVE_PIPELINE_TRANSFORMATION_FRONTEND_CONFIG_INPUT
  RETRIEVE_PLUGIN_CONFIG_ACTIVITY: POSTHOG_RETRIEVE_PLUGIN_CONFIG_ACTIVITY_INPUT
  RETRIEVE_PLUGIN_CONFIG_ACTIVITY_DETAILS: POSTHOG_RETRIEVE_PLUGIN_CONFIG_ACTIVITY_DETAILS_INPUT
  RETRIEVE_PLUGIN_CONFIG_DETAILS: POSTHOG_RETRIEVE_PLUGIN_CONFIG_DETAILS_INPUT
  RETRIEVE_PLUGIN_CONFIG_FRONTEND: POSTHOG_RETRIEVE_PLUGIN_CONFIG_FRONTEND_INPUT
  RETRIEVE_PLUGIN_FRONTEND_CONFIG: POSTHOG_RETRIEVE_PLUGIN_FRONTEND_CONFIG_INPUT
  RETRIEVE_PLUGIN_SOURCE_DETAILS: POSTHOG_RETRIEVE_PLUGIN_SOURCE_DETAILS_INPUT
  RETRIEVE_PLUGIN_UPDATE_INFO: POSTHOG_RETRIEVE_PLUGIN_UPDATE_INFO_INPUT
  RETRIEVE_PLUGIN_UPDATE_STATUS: POSTHOG_RETRIEVE_PLUGIN_UPDATE_STATUS_INPUT
  RETRIEVE_PROJECT_ACTION_DETAILS_BY_ID: POSTHOG_RETRIEVE_PROJECT_ACTION_DETAILS_BY_ID_INPUT
  RETRIEVE_PROJECT_ACTIVITY_DETAILS: POSTHOG_RETRIEVE_PROJECT_ACTIVITY_DETAILS_INPUT
  RETRIEVE_PROJECT_ACTIVITY_INSIGHTS: POSTHOG_RETRIEVE_PROJECT_ACTIVITY_INSIGHTS_INPUT
  RETRIEVE_PROJECT_ACTIVITY_LOG_WITH_PAGINATION: POSTHOG_RETRIEVE_PROJECT_ACTIVITY_LOG_WITH_PAGINATION_INPUT
  RETRIEVE_PROJECT_ANNOTATION_DETAILS: POSTHOG_RETRIEVE_PROJECT_ANNOTATION_DETAILS_INPUT
  RETRIEVE_PROJECT_COHORTS_ACTIVITY_LOG: POSTHOG_RETRIEVE_PROJECT_COHORTS_ACTIVITY_LOG_INPUT
  RETRIEVE_PROJECT_COHORTS_WITH_PAGINATION: POSTHOG_RETRIEVE_PROJECT_COHORTS_WITH_PAGINATION_INPUT
  RETRIEVE_PROJECT_COHORT_DETAILS: POSTHOG_RETRIEVE_PROJECT_COHORT_DETAILS_INPUT
  RETRIEVE_PROJECT_DRAFT_SQL_QUERY: POSTHOG_RETRIEVE_PROJECT_DRAFT_SQL_QUERY_INPUT
  RETRIEVE_PROJECT_EARLY_ACCESS_FEATURE_DETAILS: POSTHOG_RETRIEVE_PROJECT_EARLY_ACCESS_FEATURE_DETAILS_INPUT
  RETRIEVE_PROJECT_EVENT_DETAILS_BY_ID: POSTHOG_RETRIEVE_PROJECT_EVENT_DETAILS_BY_ID_INPUT
  RETRIEVE_PROJECT_EVENT_VALUES: POSTHOG_RETRIEVE_PROJECT_EVENT_VALUES_INPUT
  RETRIEVE_PROJECT_EXPERIMENT_RESULTS: POSTHOG_RETRIEVE_PROJECT_EXPERIMENT_RESULTS_INPUT
  RETRIEVE_PROJECT_EXPORT_DETAILS: POSTHOG_RETRIEVE_PROJECT_EXPORT_DETAILS_INPUT
  RETRIEVE_PROJECT_FUNNEL_CORRELATION_INSIGHTS: POSTHOG_RETRIEVE_PROJECT_FUNNEL_CORRELATION_INSIGHTS_INPUT
  RETRIEVE_PROJECT_GROUP_DETAILS_BY_KEY_AND_TYPE: POSTHOG_RETRIEVE_PROJECT_GROUP_DETAILS_BY_KEY_AND_TYPE_INPUT
  RETRIEVE_PROJECT_INSIGHTS_DETAILS: POSTHOG_RETRIEVE_PROJECT_INSIGHTS_DETAILS_INPUT
  RETRIEVE_PROJECT_INSIGHTS_WITH_PAGINATION: POSTHOG_RETRIEVE_PROJECT_INSIGHTS_WITH_PAGINATION_INPUT
  RETRIEVE_PROJECT_INSIGHT_ACTIVITY_DATA: POSTHOG_RETRIEVE_PROJECT_INSIGHT_ACTIVITY_DATA_INPUT
  RETRIEVE_PROJECT_INSIGHT_DETAILS: POSTHOG_RETRIEVE_PROJECT_INSIGHT_DETAILS_INPUT
  RETRIEVE_PROJECT_MEMBER_DETAILS_BY_UUID: POSTHOG_RETRIEVE_PROJECT_MEMBER_DETAILS_BY_UUID_INPUT
  RETRIEVE_PROJECT_PERSON_ACTIVITY: POSTHOG_RETRIEVE_PROJECT_PERSON_ACTIVITY_INPUT
  RETRIEVE_PROJECT_PERSON_COHORTS: POSTHOG_RETRIEVE_PROJECT_PERSON_COHORTS_INPUT
  RETRIEVE_PROJECT_PERSON_STICKINESS: POSTHOG_RETRIEVE_PROJECT_PERSON_STICKINESS_INPUT
  RETRIEVE_PROJECT_PIPELINE_PLUGIN_CONFIG: POSTHOG_RETRIEVE_PROJECT_PIPELINE_PLUGIN_CONFIG_INPUT
  RETRIEVE_PROJECT_SESSION_VALUES: POSTHOG_RETRIEVE_PROJECT_SESSION_VALUES_INPUT
  RETRIEVE_PROJECT_SUBSCRIPTION_DETAILS: POSTHOG_RETRIEVE_PROJECT_SUBSCRIPTION_DETAILS_INPUT
  RETRIEVE_PROJECT_TREND_INSIGHTS: POSTHOG_RETRIEVE_PROJECT_TREND_INSIGHTS_INPUT
  RETRIEVE_PROPERTIES_AND_EVENTS_ASSOCIATION: POSTHOG_RETRIEVE_PROPERTIES_AND_EVENTS_ASSOCIATION_INPUT
  RETRIEVE_PROPERTY_DEFINITION_DETAILS: POSTHOG_RETRIEVE_PROPERTY_DEFINITION_DETAILS_INPUT
  RETRIEVE_PROXY_RECORD_DETAILS: POSTHOG_RETRIEVE_PROXY_RECORD_DETAILS_INPUT
  RETRIEVE_RELATED_PROJECT_GROUPS: POSTHOG_RETRIEVE_RELATED_PROJECT_GROUPS_INPUT
  RETRIEVE_RETENTION_INSIGHTS: POSTHOG_RETRIEVE_RETENTION_INSIGHTS_INPUT
  RETRIEVE_SESSION_PROPERTY_DEFINITIONS: POSTHOG_RETRIEVE_SESSION_PROPERTY_DEFINITIONS_INPUT
  RETRIEVE_SESSION_RECORDING_DETAILS: POSTHOG_RETRIEVE_SESSION_RECORDING_DETAILS_INPUT
  RETRIEVE_SESSION_RECORDING_ERROR_CLUSTERS: POSTHOG_RETRIEVE_SESSION_RECORDING_ERROR_CLUSTERS_INPUT
  RETRIEVE_SESSION_RECORDING_PLAYLIST_DETAILS: POSTHOG_RETRIEVE_SESSION_RECORDING_PLAYLIST_DETAILS_INPUT
  RETRIEVE_SESSION_RECORDING_PROPERTIES_BY_PROJECT_ID: POSTHOG_RETRIEVE_SESSION_RECORDING_PROPERTIES_BY_PROJECT_ID_INPUT
  RETRIEVE_SESSION_RECORDING_SNAPSHOTS: POSTHOG_RETRIEVE_SESSION_RECORDING_SNAPSHOTS_INPUT
  RETRIEVE_SIMILAR_SESSION_RECORDINGS: POSTHOG_RETRIEVE_SIMILAR_SESSION_RECORDINGS_INPUT
  RETRIEVE_SPECIFIC_BATCH_EXPORT_DETAILS: POSTHOG_RETRIEVE_SPECIFIC_BATCH_EXPORT_DETAILS_INPUT
  RETRIEVE_SPECIFIC_BATCH_EXPORT_RUN_DETAILS: POSTHOG_RETRIEVE_SPECIFIC_BATCH_EXPORT_RUN_DETAILS_INPUT
  RETRIEVE_SPECIFIC_DOMAIN_DETAILS: POSTHOG_RETRIEVE_SPECIFIC_DOMAIN_DETAILS_INPUT
  RETRIEVE_SPECIFIC_EXPORTED_ASSET_CONTENT: POSTHOG_RETRIEVE_SPECIFIC_EXPORTED_ASSET_CONTENT_INPUT
  RETRIEVE_SPECIFIC_HISTORICAL_PLUGIN_EXPORT: POSTHOG_RETRIEVE_SPECIFIC_HISTORICAL_PLUGIN_EXPORT_INPUT
  RETRIEVE_SPECIFIC_PIPELINE_FRONTEND_APP_CONFIG: POSTHOG_RETRIEVE_SPECIFIC_PIPELINE_FRONTEND_APP_CONFIG_INPUT
  RETRIEVE_SPECIFIC_PROJECT_DASHBOARD_DETAILS: POSTHOG_RETRIEVE_SPECIFIC_PROJECT_DASHBOARD_DETAILS_INPUT
  RETRIEVE_SURVEY_ACTIVITY_LOGS: POSTHOG_RETRIEVE_SURVEY_ACTIVITY_LOGS_INPUT
  RETRIEVE_SURVEY_DETAILS_WITH_UUID_AND_PROJECT_ID: POSTHOG_RETRIEVE_SURVEY_DETAILS_WITH_UUID_AND_PROJECT_ID_INPUT
  RETRIEVE_SURVEY_RESPONSES_COUNT_BY_PROJECT_ID: POSTHOG_RETRIEVE_SURVEY_RESPONSES_COUNT_BY_PROJECT_ID_INPUT
  RETRIEVE_UNSUBSCRIBED_PIPELINE_CONFIGS: POSTHOG_RETRIEVE_UNSUBSCRIBED_PIPELINE_CONFIGS_INPUT
  RETRIEVE_UNUSED_ORGANIZATION_PLUGINS: POSTHOG_RETRIEVE_UNUSED_ORGANIZATION_PLUGINS_INPUT
  RETRIEVE_UNUSED_PIPELINE_DESTINATIONS: POSTHOG_RETRIEVE_UNUSED_PIPELINE_DESTINATIONS_INPUT
  RETRIEVE_USER_DETAILS_FOR_INITIATING2_FA_SETUP: POSTHOG_RETRIEVE_USER_DETAILS_FOR_INITIATING2_FA_SETUP_INPUT
  RETRIEVE_USER_PROFILE_AND_TEAM_DETAILS: POSTHOG_RETRIEVE_USER_PROFILE_AND_TEAM_DETAILS_INPUT
  REVOKE_ORGANIZATION_INVITE: POSTHOG_REVOKE_ORGANIZATION_INVITE_INPUT
  SET_INSIGHT_DELETION_FLAG: POSTHOG_SET_INSIGHT_DELETION_FLAG_INPUT
  SOFT_DELETE_A_SPECIFIC_COHORT_BY_ID: POSTHOG_SOFT_DELETE_A_SPECIFIC_COHORT_BY_ID_INPUT
  SOFT_DELETE_FEATURE_FLAG_BY_SETTING_STATUS: POSTHOG_SOFT_DELETE_FEATURE_FLAG_BY_SETTING_STATUS_INPUT
  SOFT_DELETE_PROJECT_DASHBOARD: POSTHOG_SOFT_DELETE_PROJECT_DASHBOARD_INPUT
  SPLIT_PERSON_ENTITIES_IN_PROJECT: POSTHOG_SPLIT_PERSON_ENTITIES_IN_PROJECT_INPUT
  TRIGGER_PROJECT_EXPORT_WITH_FORMAT_OPTION: POSTHOG_TRIGGER_PROJECT_EXPORT_WITH_FORMAT_OPTION_INPUT
  UPDATE_ANNOTATION_DETAILS: POSTHOG_UPDATE_ANNOTATION_DETAILS_INPUT
  UPDATE_EARLY_ACCESS_PROJECT_FEATURE: POSTHOG_UPDATE_EARLY_ACCESS_PROJECT_FEATURE_INPUT
  UPDATE_EVENT_DEFINITION_BY_UUID: POSTHOG_UPDATE_EVENT_DEFINITION_BY_UUID_INPUT
  UPDATE_EXPERIMENT_DETAILS: POSTHOG_UPDATE_EXPERIMENT_DETAILS_INPUT
  UPDATE_FEATURE_FLAG_CONFIGURATION: POSTHOG_UPDATE_FEATURE_FLAG_CONFIGURATION_INPUT
  UPDATE_ORGANIZATION_DETAILS_BY_UUID: POSTHOG_UPDATE_ORGANIZATION_DETAILS_BY_UUID_INPUT
  UPDATE_ORGANIZATION_DOMAIN_INFO_AND_SAML_CONFIG: POSTHOG_UPDATE_ORGANIZATION_DOMAIN_INFO_AND_SAML_CONFIG_INPUT
  UPDATE_ORGANIZATION_DOMAIN_PROPERTIES: POSTHOG_UPDATE_ORGANIZATION_DOMAIN_PROPERTIES_INPUT
  UPDATE_ORGANIZATION_MEMBER_BY_UUIDS: POSTHOG_UPDATE_ORGANIZATION_MEMBER_BY_UUIDS_INPUT
  UPDATE_ORGANIZATION_MEMBER_DETAILS: POSTHOG_UPDATE_ORGANIZATION_MEMBER_DETAILS_INPUT
  UPDATE_ORGANIZATION_S_PROXY_RECORD_DOMAIN: POSTHOG_UPDATE_ORGANIZATION_S_PROXY_RECORD_DOMAIN_INPUT
  UPDATE_PARTIAL_PROJECT_COHORT_DETAILS: POSTHOG_UPDATE_PARTIAL_PROJECT_COHORT_DETAILS_INPUT
  UPDATE_PARTIAL_ROLE_DETAILS_IN_ORGANIZATION: POSTHOG_UPDATE_PARTIAL_ROLE_DETAILS_IN_ORGANIZATION_INPUT
  UPDATE_PARTIAL_SUBSCRIPTION_DETAILS: POSTHOG_UPDATE_PARTIAL_SUBSCRIPTION_DETAILS_INPUT
  UPDATE_PARTIAL_SURVEY_DETAILS: POSTHOG_UPDATE_PARTIAL_SURVEY_DETAILS_INPUT
  UPDATE_PERSON_PROPERTIES: POSTHOG_UPDATE_PERSON_PROPERTIES_INPUT
  UPDATE_PERSON_PROPERTY_ENDPOINT: POSTHOG_UPDATE_PERSON_PROPERTY_ENDPOINT_INPUT
  UPDATE_PIPELINE_DESTINATION_CONFIG: POSTHOG_UPDATE_PIPELINE_DESTINATION_CONFIG_INPUT
  UPDATE_PIPELINE_FRONTEND_APP_CONFIG: POSTHOG_UPDATE_PIPELINE_FRONTEND_APP_CONFIG_INPUT
  UPDATE_PIPELINE_PLUGIN_CONFIG: POSTHOG_UPDATE_PIPELINE_PLUGIN_CONFIG_INPUT
  UPDATE_PIPELINE_TRANSFORMATION_CONFIG: POSTHOG_UPDATE_PIPELINE_TRANSFORMATION_CONFIG_INPUT
  UPDATE_PLUGIN_CONFIG_FOR_PROJECT: POSTHOG_UPDATE_PLUGIN_CONFIG_FOR_PROJECT_INPUT
  UPDATE_PROJECT_ACTION_BY_ID: POSTHOG_UPDATE_PROJECT_ACTION_BY_ID_INPUT
  UPDATE_PROJECT_ACTION_WITH_PARTIAL_DATA: POSTHOG_UPDATE_PROJECT_ACTION_WITH_PARTIAL_DATA_INPUT
  UPDATE_PROJECT_COHORT_DETAILS: POSTHOG_UPDATE_PROJECT_COHORT_DETAILS_INPUT
  UPDATE_PROJECT_DASHBOARD_DETAILS: POSTHOG_UPDATE_PROJECT_DASHBOARD_DETAILS_INPUT
  UPDATE_PROJECT_EARLY_ACCESS_FEATURE: POSTHOG_UPDATE_PROJECT_EARLY_ACCESS_FEATURE_INPUT
  UPDATE_PROJECT_EVENT_DEFINITION: POSTHOG_UPDATE_PROJECT_EVENT_DEFINITION_INPUT
  UPDATE_PROJECT_GROUP_TYPE_METADATA: POSTHOG_UPDATE_PROJECT_GROUP_TYPE_METADATA_INPUT
  UPDATE_PROJECT_INSIGHT_DETAILS: POSTHOG_UPDATE_PROJECT_INSIGHT_DETAILS_INPUT
  UPDATE_PROJECT_MEMBER_ROLE_BY_UUID: POSTHOG_UPDATE_PROJECT_MEMBER_ROLE_BY_UUID_INPUT
  UPDATE_PROJECT_MEMBER_S_ROLE_BY_UUID: POSTHOG_UPDATE_PROJECT_MEMBER_S_ROLE_BY_UUID_INPUT
  UPDATE_PROJECT_NOTEBOOK_DETAILS: POSTHOG_UPDATE_PROJECT_NOTEBOOK_DETAILS_INPUT
  UPDATE_PROJECT_PIPELINE_DESTINATION_CONFIG: POSTHOG_UPDATE_PROJECT_PIPELINE_DESTINATION_CONFIG_INPUT
  UPDATE_PROJECT_PIPELINE_TRANSFORMATION_CONFIG: POSTHOG_UPDATE_PROJECT_PIPELINE_TRANSFORMATION_CONFIG_INPUT
  UPDATE_PROJECT_PLUGIN_CONFIGURATION: POSTHOG_UPDATE_PROJECT_PLUGIN_CONFIGURATION_INPUT
  UPDATE_PROJECT_PROPERTY_DEFINITION: POSTHOG_UPDATE_PROJECT_PROPERTY_DEFINITION_INPUT
  UPDATE_PROJECT_SESSION_RECORDING_PLAYLIST: POSTHOG_UPDATE_PROJECT_SESSION_RECORDING_PLAYLIST_INPUT
  UPDATE_PROJECT_SUBSCRIPTION_DETAILS: POSTHOG_UPDATE_PROJECT_SUBSCRIPTION_DETAILS_INPUT
  UPDATE_PROJECT_SURVEY_DETAILS: POSTHOG_UPDATE_PROJECT_SURVEY_DETAILS_INPUT
  UPDATE_ROLE_DETAILS_IN_ORGANIZATION: POSTHOG_UPDATE_ROLE_DETAILS_IN_ORGANIZATION_INPUT
  UPDATE_SESSION_RECORDING_PLAYLIST_PARTIALLY: POSTHOG_UPDATE_SESSION_RECORDING_PLAYLIST_PARTIALLY_INPUT
  UPDATE_SPECIFIC_PROXY_RECORD_FIELDS: POSTHOG_UPDATE_SPECIFIC_PROXY_RECORD_FIELDS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "POSTHOG".
 */
export type POSTHOG_TOOL_OUTPUTS = {
  ADD_DASHBOARD_COLLABORATORS_WITH_ACCESS_LEVEL: POSTHOG_ADD_DASHBOARD_COLLABORATORS_WITH_ACCESS_LEVEL_OUTPUT
  ADD_MEMBER_TO_ORGANIZATION_ROLE: POSTHOG_ADD_MEMBER_TO_ORGANIZATION_ROLE_OUTPUT
  ADD_PROJECT_SPECIFIC_MEMBER_ROLES: POSTHOG_ADD_PROJECT_SPECIFIC_MEMBER_ROLES_OUTPUT
  ASSIGN_FEATURE_FLAG_ROLE_BASED_ACCESS: POSTHOG_ASSIGN_FEATURE_FLAG_ROLE_BASED_ACCESS_OUTPUT
  BOOKMARK_PROJECT_ACTIVITY_NOTIFICATION: POSTHOG_BOOKMARK_PROJECT_ACTIVITY_NOTIFICATION_OUTPUT
  BULK_CREATE_ORGANIZATION_INVITES: POSTHOG_BULK_CREATE_ORGANIZATION_INVITES_OUTPUT
  CANCEL_INSIGHTS_FOR_A_PROJECT: POSTHOG_CANCEL_INSIGHTS_FOR_A_PROJECT_OUTPUT
  CHECK_PIPELINE_DESTINATION_UPDATES: POSTHOG_CHECK_PIPELINE_DESTINATION_UPDATES_OUTPUT
  CHECK_PIPELINE_IMPORT_APP_UPDATES: POSTHOG_CHECK_PIPELINE_IMPORT_APP_UPDATES_OUTPUT
  CHECK_PIPELINE_PLUGIN_UPDATE_STATUS: POSTHOG_CHECK_PIPELINE_PLUGIN_UPDATE_STATUS_OUTPUT
  CHECK_PROJECT_S_DEMO_DATA_GENERATION_STATUS: POSTHOG_CHECK_PROJECT_S_DEMO_DATA_GENERATION_STATUS_OUTPUT
  COHORT_DUPLICATION_TO_STATIC: POSTHOG_COHORT_DUPLICATION_TO_STATIC_OUTPUT
  CREATE_A_NOTEBOOK_IN_A_PROJECT: POSTHOG_CREATE_A_NOTEBOOK_IN_A_PROJECT_OUTPUT
  CREATE_CUSTOM_PROJECT_INSIGHTS: POSTHOG_CREATE_CUSTOM_PROJECT_INSIGHTS_OUTPUT
  CREATE_DASHBOARD_FROM_TEMPLATE_IN_PROJECT: POSTHOG_CREATE_DASHBOARD_FROM_TEMPLATE_IN_PROJECT_OUTPUT
  CREATE_DOMAIN_WITH_SAML_FOR_ORGANIZATION: POSTHOG_CREATE_DOMAIN_WITH_SAML_FOR_ORGANIZATION_OUTPUT
  CREATE_EXPERIMENT_EXPOSURE_COHORT: POSTHOG_CREATE_EXPERIMENT_EXPOSURE_COHORT_OUTPUT
  CREATE_FEATURE_FLAGS_FOR_PROJECT: POSTHOG_CREATE_FEATURE_FLAGS_FOR_PROJECT_OUTPUT
  CREATE_FEATURE_FLAG_DASHBOARD: POSTHOG_CREATE_FEATURE_FLAG_DASHBOARD_OUTPUT
  CREATE_FRONTEND_APP_PIPELINE_CONFIG: POSTHOG_CREATE_FRONTEND_APP_PIPELINE_CONFIG_OUTPUT
  CREATE_FUNNEL_ANALYSIS_FOR_PROJECT_PERSONS: POSTHOG_CREATE_FUNNEL_ANALYSIS_FOR_PROJECT_PERSONS_OUTPUT
  CREATE_NEW_ORGANIZATION_WITH_CONFIGURABLE_ACCESS: POSTHOG_CREATE_NEW_ORGANIZATION_WITH_CONFIGURABLE_ACCESS_OUTPUT
  CREATE_NEW_PROJECT_EXPERIMENT: POSTHOG_CREATE_NEW_PROJECT_EXPERIMENT_OUTPUT
  CREATE_ORGANIZATION_INVITE_WITH_ROLE_AND_EMAIL: POSTHOG_CREATE_ORGANIZATION_INVITE_WITH_ROLE_AND_EMAIL_OUTPUT
  CREATE_ORGANIZATION_ROLE_WITH_FEATURE_FLAG_LEVELS: POSTHOG_CREATE_ORGANIZATION_ROLE_WITH_FEATURE_FLAG_LEVELS_OUTPUT
  CREATE_ORG_PROXY_RECORD_WITH_DOMAIN_AND_STATUS: POSTHOG_CREATE_ORG_PROXY_RECORD_WITH_DOMAIN_AND_STATUS_OUTPUT
  CREATE_PERSON_FUNNEL_CORRELATION: POSTHOG_CREATE_PERSON_FUNNEL_CORRELATION_OUTPUT
  CREATE_PERSON_PATH_WITH_FORMAT_OPTION: POSTHOG_CREATE_PERSON_PATH_WITH_FORMAT_OPTION_OUTPUT
  CREATE_PIPELINE_DESTINATION_CONFIG: POSTHOG_CREATE_PIPELINE_DESTINATION_CONFIG_OUTPUT
  CREATE_PIPELINE_DESTINATION_CONFIG_JOB: POSTHOG_CREATE_PIPELINE_DESTINATION_CONFIG_JOB_OUTPUT
  CREATE_PIPELINE_IMPORT_APPS_CONFIG_JOB: POSTHOG_CREATE_PIPELINE_IMPORT_APPS_CONFIG_JOB_OUTPUT
  CREATE_PLUGIN_JOB_CONFIGURATION: POSTHOG_CREATE_PLUGIN_JOB_CONFIGURATION_OUTPUT
  CREATE_PROJECT_ACTION_WITH_FORMAT: POSTHOG_CREATE_PROJECT_ACTION_WITH_FORMAT_OUTPUT
  CREATE_PROJECT_COHORTS: POSTHOG_CREATE_PROJECT_COHORTS_OUTPUT
  CREATE_PROJECT_DASHBOARD: POSTHOG_CREATE_PROJECT_DASHBOARD_OUTPUT
  CREATE_PROJECT_INSIGHTS_WITH_FORMAT_OPTION: POSTHOG_CREATE_PROJECT_INSIGHTS_WITH_FORMAT_OPTION_OUTPUT
  CREATE_PROJECT_PIPELINE_APP_CONFIGS: POSTHOG_CREATE_PROJECT_PIPELINE_APP_CONFIGS_OUTPUT
  CREATE_PROJECT_PIPELINE_FRONTEND_APP_JOB: POSTHOG_CREATE_PROJECT_PIPELINE_FRONTEND_APP_JOB_OUTPUT
  CREATE_PROJECT_PIPELINE_TRANSFORMATION_CONFIG: POSTHOG_CREATE_PROJECT_PIPELINE_TRANSFORMATION_CONFIG_OUTPUT
  CREATE_PROJECT_PLUGIN_CONFIGURATION: POSTHOG_CREATE_PROJECT_PLUGIN_CONFIGURATION_OUTPUT
  CREATE_PROJECT_SUBSCRIPTION_WITH_DELIVERY_OPTIONS: POSTHOG_CREATE_PROJECT_SUBSCRIPTION_WITH_DELIVERY_OPTIONS_OUTPUT
  CREATE_PROJECT_SURVEYS_WITH_QUESTIONS_AND_TARGETS: POSTHOG_CREATE_PROJECT_SURVEYS_WITH_QUESTIONS_AND_TARGETS_OUTPUT
  CREATE_PROJECT_TIMING_INSIGHTS: POSTHOG_CREATE_PROJECT_TIMING_INSIGHTS_OUTPUT
  CREATE_QUERY_IN_PROJECT_BY_ID: POSTHOG_CREATE_QUERY_IN_PROJECT_BY_ID_OUTPUT
  CREATE_RETRIEVE_RETENTION_INSIGHTS_FOR_PROJECT: POSTHOG_CREATE_RETRIEVE_RETENTION_INSIGHTS_FOR_PROJECT_OUTPUT
  CREATE_SESSION_RECORDING_IN_PLAYLIST: POSTHOG_CREATE_SESSION_RECORDING_IN_PLAYLIST_OUTPUT
  CREATE_SESSION_RECORDING_PLAYLISTS: POSTHOG_CREATE_SESSION_RECORDING_PLAYLISTS_OUTPUT
  CREATE_SESSION_RECORDING_SUMMARY: POSTHOG_CREATE_SESSION_RECORDING_SUMMARY_OUTPUT
  CREATE_STATIC_COHORT_FOR_FEATURE_FLAG: POSTHOG_CREATE_STATIC_COHORT_FOR_FEATURE_FLAG_OUTPUT
  CRUD_OPERATIONS_FOR_PROJECT_ANNOTATIONS: POSTHOG_CRUD_OPERATIONS_FOR_PROJECT_ANNOTATIONS_OUTPUT
  CUSTOM_PROJECT_FUNNEL_ANALYTICS_WITH_ADVANCED_OPTIONS: POSTHOG_CUSTOM_PROJECT_FUNNEL_ANALYTICS_WITH_ADVANCED_OPTIONS_OUTPUT
  DELETE_ORGANIZATION_BY_UUID: POSTHOG_DELETE_ORGANIZATION_BY_UUID_OUTPUT
  DELETE_ORGANIZATION_PROJECT: POSTHOG_DELETE_ORGANIZATION_PROJECT_OUTPUT
  DELETE_PERSON_AND_OPTIONALLY_ASSOCIATED_EVENTS: POSTHOG_DELETE_PERSON_AND_OPTIONALLY_ASSOCIATED_EVENTS_OUTPUT
  DELETE_SESSION_RECORDING_BY_UUID: POSTHOG_DELETE_SESSION_RECORDING_BY_UUID_OUTPUT
  DELETE_SURVEY_BY_ID: POSTHOG_DELETE_SURVEY_BY_ID_OUTPUT
  ENABLE_PROJECT_EARLY_ACCESS_FEATURE: POSTHOG_ENABLE_PROJECT_EARLY_ACCESS_FEATURE_OUTPUT
  FETCH_BATCH_EXPORT_DETAILS_VIA_UUID: POSTHOG_FETCH_BATCH_EXPORT_DETAILS_VIA_UUID_OUTPUT
  FETCH_EXPORT_UNSUBSCRIBE_SETTINGS: POSTHOG_FETCH_EXPORT_UNSUBSCRIBE_SETTINGS_OUTPUT
  FETCH_FRONTEND_APP_CONFIG_STATUS: POSTHOG_FETCH_FRONTEND_APP_CONFIG_STATUS_OUTPUT
  FETCH_ORGANIZATION_DETAILS_BY_UUID: POSTHOG_FETCH_ORGANIZATION_DETAILS_BY_UUID_OUTPUT
  FETCH_ORGANIZATION_PIPELINE_APP_REPOSITORIES: POSTHOG_FETCH_ORGANIZATION_PIPELINE_APP_REPOSITORIES_OUTPUT
  FETCH_PIPELINE_DESTINATION_DETAILS: POSTHOG_FETCH_PIPELINE_DESTINATION_DETAILS_OUTPUT
  FETCH_PIPELINE_TRANSFORMATION_DETAILS: POSTHOG_FETCH_PIPELINE_TRANSFORMATION_DETAILS_OUTPUT
  FETCH_PROJECT_EXPERIMENT_SECONDARY_DATA: POSTHOG_FETCH_PROJECT_EXPERIMENT_SECONDARY_DATA_OUTPUT
  FETCH_PROJECT_SURVEY_ACTIVITY_LOG: POSTHOG_FETCH_PROJECT_SURVEY_ACTIVITY_LOG_OUTPUT
  FETCH_SESSION_RECORDING_PLAYLIST_DETAILS: POSTHOG_FETCH_SESSION_RECORDING_PLAYLIST_DETAILS_OUTPUT
  FLAG_ANNOTATION_AS_DELETED: POSTHOG_FLAG_ANNOTATION_AS_DELETED_OUTPUT
  GENERATE_PROJECT_FUNNEL_CORRELATION_INSIGHT: POSTHOG_GENERATE_PROJECT_FUNNEL_CORRELATION_INSIGHT_OUTPUT
  GET_UNUSED_ORG_PIPELINE_FRONTEND_APPS: POSTHOG_GET_UNUSED_ORG_PIPELINE_FRONTEND_APPS_OUTPUT
  INITIATE_DOMAIN_VERIFICATION_WITH_SAML_CONFIG: POSTHOG_INITIATE_DOMAIN_VERIFICATION_WITH_SAML_CONFIG_OUTPUT
  INITIATE_PIPELINE_TRANSFORMATION_JOB: POSTHOG_INITIATE_PIPELINE_TRANSFORMATION_JOB_OUTPUT
  LIST_AND_FILTER_PROJECT_EVENTS: POSTHOG_LIST_AND_FILTER_PROJECT_EVENTS_OUTPUT
  LIST_AND_MANAGE_PROJECT_ANNOTATIONS: POSTHOG_LIST_AND_MANAGE_PROJECT_ANNOTATIONS_OUTPUT
  LIST_AND_MANAGE_PROJECT_FEATURE_FLAGS: POSTHOG_LIST_AND_MANAGE_PROJECT_FEATURE_FLAGS_OUTPUT
  LIST_BATCH_EXPORT_RUNS_WITH_PAGINATION_AND_ORDERING: POSTHOG_LIST_BATCH_EXPORT_RUNS_WITH_PAGINATION_AND_ORDERING_OUTPUT
  LIST_DASHBOARD_SHARING_CONFIGS: POSTHOG_LIST_DASHBOARD_SHARING_CONFIGS_OUTPUT
  LIST_FEATURE_FLAG_ROLE_ACCESS_DETAILS: POSTHOG_LIST_FEATURE_FLAG_ROLE_ACCESS_DETAILS_OUTPUT
  LIST_NOTEBOOKS_WITH_FILTERS_AND_PAGINATION: POSTHOG_LIST_NOTEBOOKS_WITH_FILTERS_AND_PAGINATION_OUTPUT
  LIST_OF_PROJECT_S_SESSION_RECORDING_PLAYLISTS: POSTHOG_LIST_OF_PROJECT_S_SESSION_RECORDING_PLAYLISTS_OUTPUT
  LIST_ORGANIZATION_DOMAINS_WITH_PAGINATION: POSTHOG_LIST_ORGANIZATION_DOMAINS_WITH_PAGINATION_OUTPUT
  LIST_ORGANIZATION_INVITES_WITH_PAGINATION: POSTHOG_LIST_ORGANIZATION_INVITES_WITH_PAGINATION_OUTPUT
  LIST_ORGANIZATION_MEMBERS_WITH_PAGINATION: POSTHOG_LIST_ORGANIZATION_MEMBERS_WITH_PAGINATION_OUTPUT
  LIST_ORGANIZATION_PLUGINS_WITH_PAGINATION: POSTHOG_LIST_ORGANIZATION_PLUGINS_WITH_PAGINATION_OUTPUT
  LIST_ORGANIZATION_ROLES_WITH_PAGINATION: POSTHOG_LIST_ORGANIZATION_ROLES_WITH_PAGINATION_OUTPUT
  LIST_ORGANIZATION_S_BATCH_EXPORTS_WITH_PAGINATION: POSTHOG_LIST_ORGANIZATION_S_BATCH_EXPORTS_WITH_PAGINATION_OUTPUT
  LIST_ORGANIZATION_S_PAGINATED_PROXY_RECORDS: POSTHOG_LIST_ORGANIZATION_S_PAGINATED_PROXY_RECORDS_OUTPUT
  LIST_ORGANIZATION_S_PIPELINE_DESTINATIONS: POSTHOG_LIST_ORGANIZATION_S_PIPELINE_DESTINATIONS_OUTPUT
  LIST_ORGANIZATION_S_PIPELINE_FRONTEND_APPS: POSTHOG_LIST_ORGANIZATION_S_PIPELINE_FRONTEND_APPS_OUTPUT
  LIST_ORGANIZATION_S_PIPELINE_IMPORT_APPS: POSTHOG_LIST_ORGANIZATION_S_PIPELINE_IMPORT_APPS_OUTPUT
  LIST_ORGANIZATION_S_PIPELINE_TRANSFORMATIONS: POSTHOG_LIST_ORGANIZATION_S_PIPELINE_TRANSFORMATIONS_OUTPUT
  LIST_OR_DELETE_PERSONS_WITH_OPTIONAL_FILTERS: POSTHOG_LIST_OR_DELETE_PERSONS_WITH_OPTIONAL_FILTERS_OUTPUT
  LIST_PAGINATED_SURVEYS_FOR_A_PROJECT: POSTHOG_LIST_PAGINATED_SURVEYS_FOR_A_PROJECT_OUTPUT
  LIST_PIPELINE_DESTINATION_CONFIGS_WITH_PAGINATION: POSTHOG_LIST_PIPELINE_DESTINATION_CONFIGS_WITH_PAGINATION_OUTPUT
  LIST_PIPELINE_FRONTEND_APP_CONFIGS: POSTHOG_LIST_PIPELINE_FRONTEND_APP_CONFIGS_OUTPUT
  LIST_PROJECTS_IN_ORGANIZATION_WITH_PAGINATION: POSTHOG_LIST_PROJECTS_IN_ORGANIZATION_WITH_PAGINATION_OUTPUT
  LIST_PROJECT_ACTIONS_WITH_PAGINATION_AND_FILTERS: POSTHOG_LIST_PROJECT_ACTIONS_WITH_PAGINATION_AND_FILTERS_OUTPUT
  LIST_PROJECT_BATCH_EXPORTS_WITH_PAGINATION: POSTHOG_LIST_PROJECT_BATCH_EXPORTS_WITH_PAGINATION_OUTPUT
  LIST_PROJECT_CONFIGURATION_PLUGIN_LOGS: POSTHOG_LIST_PROJECT_CONFIGURATION_PLUGIN_LOGS_OUTPUT
  LIST_PROJECT_DASHBOARDS_WITH_PAGINATION: POSTHOG_LIST_PROJECT_DASHBOARDS_WITH_PAGINATION_OUTPUT
  LIST_PROJECT_DASHBOARD_COLLABORATORS: POSTHOG_LIST_PROJECT_DASHBOARD_COLLABORATORS_OUTPUT
  LIST_PROJECT_DASHBOARD_TEMPLATES: POSTHOG_LIST_PROJECT_DASHBOARD_TEMPLATES_OUTPUT
  LIST_PROJECT_EARLY_ACCESS_FEATURES: POSTHOG_LIST_PROJECT_EARLY_ACCESS_FEATURES_OUTPUT
  LIST_PROJECT_EXPERIMENTS_WITH_PAGINATION: POSTHOG_LIST_PROJECT_EXPERIMENTS_WITH_PAGINATION_OUTPUT
  LIST_PROJECT_EXPORT_ITEMS_WITH_PAGINATION: POSTHOG_LIST_PROJECT_EXPORT_ITEMS_WITH_PAGINATION_OUTPUT
  LIST_PROJECT_GROUP_TYPES_BY_ID: POSTHOG_LIST_PROJECT_GROUP_TYPES_BY_ID_OUTPUT
  LIST_PROJECT_MEMBERSHIP_DETAILS: POSTHOG_LIST_PROJECT_MEMBERSHIP_DETAILS_OUTPUT
  LIST_PROJECT_PIPELINE_CONFIGURATIONS: POSTHOG_LIST_PROJECT_PIPELINE_CONFIGURATIONS_OUTPUT
  LIST_PROJECT_PIPELINE_IMPORT_CONFIGS: POSTHOG_LIST_PROJECT_PIPELINE_IMPORT_CONFIGS_OUTPUT
  LIST_PROJECT_PLUGIN_CONFIGURATIONS: POSTHOG_LIST_PROJECT_PLUGIN_CONFIGURATIONS_OUTPUT
  LIST_PROJECT_SESSION_RECORDINGS: POSTHOG_LIST_PROJECT_SESSION_RECORDINGS_OUTPUT
  LIST_PROJECT_SUBSCRIPTIONS_WITH_PAGINATION: POSTHOG_LIST_PROJECT_SUBSCRIPTIONS_WITH_PAGINATION_OUTPUT
  LIST_ROLE_MEMBERSHIPS_PAGINATED: POSTHOG_LIST_ROLE_MEMBERSHIPS_PAGINATED_OUTPUT
  LIST_SESSION_RECORDING_SHARING_CONFIGS: POSTHOG_LIST_SESSION_RECORDING_SHARING_CONFIGS_OUTPUT
  LIST_SPECIFIC_TYPE_GROUPS_WITH_PAGINATION: POSTHOG_LIST_SPECIFIC_TYPE_GROUPS_WITH_PAGINATION_OUTPUT
  LIST_UNUSED_ORGANIZATION_PIPELINE_TRANSFORMATIONS: POSTHOG_LIST_UNUSED_ORGANIZATION_PIPELINE_TRANSFORMATIONS_OUTPUT
  LIST_USERS_WITH_STAFF_FILTER_AND_PAGINATION: POSTHOG_LIST_USERS_WITH_STAFF_FILTER_AND_PAGINATION_OUTPUT
  MANAGE_FEATURE_FLAG_ENRICHMENT_FOR_USAGE_DASHBOARD: POSTHOG_MANAGE_FEATURE_FLAG_ENRICHMENT_FOR_USAGE_DASHBOARD_OUTPUT
  MANAGE_PROJECT_FEATURE_FLAGS: POSTHOG_MANAGE_PROJECT_FEATURE_FLAGS_OUTPUT
  MANAGE_PROJECT_FEATURE_FLAGS_FOR_LOCAL_EVALUATION: POSTHOG_MANAGE_PROJECT_FEATURE_FLAGS_FOR_LOCAL_EVALUATION_OUTPUT
  MANAGE_USER_FEATURE_FLAGS: POSTHOG_MANAGE_USER_FEATURE_FLAGS_OUTPUT
  MARK_DASHBOARD_TEMPLATE_AS_DELETED: POSTHOG_MARK_DASHBOARD_TEMPLATE_AS_DELETED_OUTPUT
  MARK_INSIGHT_AS_VIEWED_WITH_CONFIGURABLE_FORMAT: POSTHOG_MARK_INSIGHT_AS_VIEWED_WITH_CONFIGURABLE_FORMAT_OUTPUT
  MARK_PROJECT_ACTION_AS_DELETED: POSTHOG_MARK_PROJECT_ACTION_AS_DELETED_OUTPUT
  MARK_SESSION_RECORDING_PLAYLIST_DELETED: POSTHOG_MARK_SESSION_RECORDING_PLAYLIST_DELETED_OUTPUT
  MARK_SUBSCRIPTION_AS_DELETED_BY_ID: POSTHOG_MARK_SUBSCRIPTION_AS_DELETED_BY_ID_OUTPUT
  MODIFY_ORG_INFO_VIA_UUID: POSTHOG_MODIFY_ORG_INFO_VIA_UUID_OUTPUT
  MOVE_DASHBOARD_TILE: POSTHOG_MOVE_DASHBOARD_TILE_OUTPUT
  PARTIALLY_UPDATE_PROJECT_PLUGIN_CONFIG: POSTHOG_PARTIALLY_UPDATE_PROJECT_PLUGIN_CONFIG_OUTPUT
  PARTIALLY_UPDATE_PROJECT_PROPERTY_DEFINITION: POSTHOG_PARTIALLY_UPDATE_PROJECT_PROPERTY_DEFINITION_OUTPUT
  PARTIAL_EXPERIMENT_UPDATE_IN_PROJECT: POSTHOG_PARTIAL_EXPERIMENT_UPDATE_IN_PROJECT_OUTPUT
  PARTIAL_PIPELINE_FRONTEND_APP_CONFIG_UPDATE: POSTHOG_PARTIAL_PIPELINE_FRONTEND_APP_CONFIG_UPDATE_OUTPUT
  PARTIAL_UPDATE_OF_A_PROJECT_INSIGHT: POSTHOG_PARTIAL_UPDATE_OF_A_PROJECT_INSIGHT_OUTPUT
  PARTIAL_UPDATE_OF_A_PROJECT_S_DASHBOARD: POSTHOG_PARTIAL_UPDATE_OF_A_PROJECT_S_DASHBOARD_OUTPUT
  PARTIAL_UPDATE_OF_A_PROJECT_S_FEATURE_FLAG: POSTHOG_PARTIAL_UPDATE_OF_A_PROJECT_S_FEATURE_FLAG_OUTPUT
  PARTIAL_UPDATE_OF_PROJECT_NOTEBOOK: POSTHOG_PARTIAL_UPDATE_OF_PROJECT_NOTEBOOK_OUTPUT
  PARTIAL_UPDATE_PROJECT_ANNOTATION: POSTHOG_PARTIAL_UPDATE_PROJECT_ANNOTATION_OUTPUT
  PERSIST_SESSION_RECORDING_DATA_BY_UUID: POSTHOG_PERSIST_SESSION_RECORDING_DATA_BY_UUID_OUTPUT
  PERSON_PARTIAL_UPDATE_VIA_PROJECT_ID: POSTHOG_PERSON_PARTIAL_UPDATE_VIA_PROJECT_ID_OUTPUT
  PERSON_PROPERTY_DELETION_ENDPOINT: POSTHOG_PERSON_PROPERTY_DELETION_ENDPOINT_OUTPUT
  PREVENT_HARD_DELETE_NOTEBOOK_BY_FLAGGING: POSTHOG_PREVENT_HARD_DELETE_NOTEBOOK_BY_FLAGGING_OUTPUT
  PROJECT_TREND_ANALYTICS: POSTHOG_PROJECT_TREND_ANALYTICS_OUTPUT
  REARRANGE_FRONTEND_APP_PIPELINE_CONFIGS: POSTHOG_REARRANGE_FRONTEND_APP_PIPELINE_CONFIGS_OUTPUT
  REARRANGE_PIPELINE_TRANSFORMATION_CONFIGS: POSTHOG_REARRANGE_PIPELINE_TRANSFORMATION_CONFIGS_OUTPUT
  REARRANGE_PROJECT_IMPORT_APP_CONFIGURATIONS: POSTHOG_REARRANGE_PROJECT_IMPORT_APP_CONFIGURATIONS_OUTPUT
  REARRANGE_PROJECT_PIPELINE_DESTINATION_CONFIGS: POSTHOG_REARRANGE_PROJECT_PIPELINE_DESTINATION_CONFIGS_OUTPUT
  RECONFIGURE_PLUGIN_ORDER_AND_STATUS_IN_PROJECT: POSTHOG_RECONFIGURE_PLUGIN_ORDER_AND_STATUS_IN_PROJECT_OUTPUT
  REMOVE_DOMAIN_BY_UUID_FROM_ORGANIZATION: POSTHOG_REMOVE_DOMAIN_BY_UUID_FROM_ORGANIZATION_OUTPUT
  REMOVE_EARLY_ACCESS_FEATURE_FROM_PROJECT: POSTHOG_REMOVE_EARLY_ACCESS_FEATURE_FROM_PROJECT_OUTPUT
  REMOVE_EXPLICIT_PROJECT_MEMBER_BY_UUID: POSTHOG_REMOVE_EXPLICIT_PROJECT_MEMBER_BY_UUID_OUTPUT
  REMOVE_FEATURE_FLAG_ROLE_ACCESS_BY_ID: POSTHOG_REMOVE_FEATURE_FLAG_ROLE_ACCESS_BY_ID_OUTPUT
  REMOVE_MEMBER_FROM_ORGANIZATION_BY_UUID: POSTHOG_REMOVE_MEMBER_FROM_ORGANIZATION_BY_UUID_OUTPUT
  REMOVE_ORGANIZATION_BATCH_EXPORT_BY_UUID: POSTHOG_REMOVE_ORGANIZATION_BATCH_EXPORT_BY_UUID_OUTPUT
  REMOVE_ORGANIZATION_PIPELINE_DESTINATION: POSTHOG_REMOVE_ORGANIZATION_PIPELINE_DESTINATION_OUTPUT
  REMOVE_ORGANIZATION_PIPELINE_TRANSFORMATION: POSTHOG_REMOVE_ORGANIZATION_PIPELINE_TRANSFORMATION_OUTPUT
  REMOVE_ORGANIZATION_PLUGIN_BY_ID: POSTHOG_REMOVE_ORGANIZATION_PLUGIN_BY_ID_OUTPUT
  REMOVE_ORGANIZATION_PROXY_RECORD: POSTHOG_REMOVE_ORGANIZATION_PROXY_RECORD_OUTPUT
  REMOVE_ORGANIZATION_ROLE_BY_ID: POSTHOG_REMOVE_ORGANIZATION_ROLE_BY_ID_OUTPUT
  REMOVE_ORG_PIPELINE_IMPORT_APP_BY_ID: POSTHOG_REMOVE_ORG_PIPELINE_IMPORT_APP_BY_ID_OUTPUT
  REMOVE_PIPELINE_DESTINATION_CONFIG: POSTHOG_REMOVE_PIPELINE_DESTINATION_CONFIG_OUTPUT
  REMOVE_PIPELINE_FRONTEND_APP_BY_ID: POSTHOG_REMOVE_PIPELINE_FRONTEND_APP_BY_ID_OUTPUT
  REMOVE_PIPELINE_FRONTEND_APP_CONFIG: POSTHOG_REMOVE_PIPELINE_FRONTEND_APP_CONFIG_OUTPUT
  REMOVE_PIPELINE_IMPORT_APP_CONFIG: POSTHOG_REMOVE_PIPELINE_IMPORT_APP_CONFIG_OUTPUT
  REMOVE_PIPELINE_TRANSFORMATION_CONFIG_BY_ID: POSTHOG_REMOVE_PIPELINE_TRANSFORMATION_CONFIG_BY_ID_OUTPUT
  REMOVE_PROJECT_DASHBOARD_COLLABORATOR: POSTHOG_REMOVE_PROJECT_DASHBOARD_COLLABORATOR_OUTPUT
  REMOVE_PROJECT_EVENT_DEFINITION: POSTHOG_REMOVE_PROJECT_EVENT_DEFINITION_OUTPUT
  REMOVE_PROJECT_EXPERIMENT_BY_ID: POSTHOG_REMOVE_PROJECT_EXPERIMENT_BY_ID_OUTPUT
  REMOVE_PROJECT_PLUGIN_CONFIGURATION: POSTHOG_REMOVE_PROJECT_PLUGIN_CONFIGURATION_OUTPUT
  REMOVE_PROPERTY_DEFINITION_BY_UUID: POSTHOG_REMOVE_PROPERTY_DEFINITION_BY_UUID_OUTPUT
  REMOVE_ROLE_MEMBERSHIP_BY_UUID: POSTHOG_REMOVE_ROLE_MEMBERSHIP_BY_UUID_OUTPUT
  REMOVE_SESSION_RECORDING_FROM_PLAYLIST: POSTHOG_REMOVE_SESSION_RECORDING_FROM_PLAYLIST_OUTPUT
  REMOVE_SPECIFIC_PROJECT_BATCH_EXPORT: POSTHOG_REMOVE_SPECIFIC_PROJECT_BATCH_EXPORT_OUTPUT
  REMOVE_SPECIFIC_PROJECT_QUERY: POSTHOG_REMOVE_SPECIFIC_PROJECT_QUERY_OUTPUT
  RETRIEVE_AND_DELETE_PROJECT_PERSON_TRENDS: POSTHOG_RETRIEVE_AND_DELETE_PROJECT_PERSON_TRENDS_OUTPUT
  RETRIEVE_APP_METRICS_BY_IDS: POSTHOG_RETRIEVE_APP_METRICS_BY_IDS_OUTPUT
  RETRIEVE_APP_METRICS_ERROR_DETAILS: POSTHOG_RETRIEVE_APP_METRICS_ERROR_DETAILS_OUTPUT
  RETRIEVE_ASYNC_QUERY_STATUS_BY_ID: POSTHOG_RETRIEVE_ASYNC_QUERY_STATUS_BY_ID_OUTPUT
  RETRIEVE_BATCH_EXPORT_DETAILS: POSTHOG_RETRIEVE_BATCH_EXPORT_DETAILS_OUTPUT
  RETRIEVE_BATCH_EXPORT_LOGS_BY_UUID: POSTHOG_RETRIEVE_BATCH_EXPORT_LOGS_BY_UUID_OUTPUT
  RETRIEVE_BATCH_EXPORT_RUN_LOGS: POSTHOG_RETRIEVE_BATCH_EXPORT_RUN_LOGS_OUTPUT
  RETRIEVE_COHORT_ACTIVITY_DETAILS: POSTHOG_RETRIEVE_COHORT_ACTIVITY_DETAILS_OUTPUT
  RETRIEVE_COHORT_PERSON_DETAILS: POSTHOG_RETRIEVE_COHORT_PERSON_DETAILS_OUTPUT
  RETRIEVE_DASHBOARD_TEMPLATE_DETAILS_BY_UUID: POSTHOG_RETRIEVE_DASHBOARD_TEMPLATE_DETAILS_BY_UUID_OUTPUT
  RETRIEVE_DASHBOARD_TEMPLATE_SCHEMA: POSTHOG_RETRIEVE_DASHBOARD_TEMPLATE_SCHEMA_OUTPUT
  RETRIEVE_EVENT_DEFINITIONS_BY_PROJECT_ID: POSTHOG_RETRIEVE_EVENT_DEFINITIONS_BY_PROJECT_ID_OUTPUT
  RETRIEVE_EVENT_DEFINITION_BY_UUID: POSTHOG_RETRIEVE_EVENT_DEFINITION_BY_UUID_OUTPUT
  RETRIEVE_EXPERIMENTS_REQUIRING_FLAG_IMPLEMENTATION: POSTHOG_RETRIEVE_EXPERIMENTS_REQUIRING_FLAG_IMPLEMENTATION_OUTPUT
  RETRIEVE_EXPERIMENT_DETAILS_BY_IDS: POSTHOG_RETRIEVE_EXPERIMENT_DETAILS_BY_IDS_OUTPUT
  RETRIEVE_EXPORT_UNSUBSCRIBE_CONFIGS: POSTHOG_RETRIEVE_EXPORT_UNSUBSCRIBE_CONFIGS_OUTPUT
  RETRIEVE_FEATURE_FLAGS_ACTIVITY_LOG: POSTHOG_RETRIEVE_FEATURE_FLAGS_ACTIVITY_LOG_OUTPUT
  RETRIEVE_FEATURE_FLAGS_EVALUATION_REASONS: POSTHOG_RETRIEVE_FEATURE_FLAGS_EVALUATION_REASONS_OUTPUT
  RETRIEVE_FEATURE_FLAG_ACTIVITY_DETAILS: POSTHOG_RETRIEVE_FEATURE_FLAG_ACTIVITY_DETAILS_OUTPUT
  RETRIEVE_FEATURE_FLAG_DETAILS: POSTHOG_RETRIEVE_FEATURE_FLAG_DETAILS_OUTPUT
  RETRIEVE_FEATURE_FLAG_ROLE_ACCESS_DETAILS: POSTHOG_RETRIEVE_FEATURE_FLAG_ROLE_ACCESS_DETAILS_OUTPUT
  RETRIEVE_FILTERED_PROJECT_PROPERTY_DEFINITIONS: POSTHOG_RETRIEVE_FILTERED_PROJECT_PROPERTY_DEFINITIONS_OUTPUT
  RETRIEVE_FUNNEL_INSIGHTS_IN_PROJECT: POSTHOG_RETRIEVE_FUNNEL_INSIGHTS_IN_PROJECT_OUTPUT
  RETRIEVE_GROUP_PROPERTY_DEFINITIONS_BY_PROJECT_ID: POSTHOG_RETRIEVE_GROUP_PROPERTY_DEFINITIONS_BY_PROJECT_ID_OUTPUT
  RETRIEVE_GROUP_PROPERTY_VALUES_BY_INDEX_AND_KEY: POSTHOG_RETRIEVE_GROUP_PROPERTY_VALUES_BY_INDEX_AND_KEY_OUTPUT
  RETRIEVE_HEDGEHOG_CONFIGURATION_BY_UUID: POSTHOG_RETRIEVE_HEDGEHOG_CONFIGURATION_BY_UUID_OUTPUT
  RETRIEVE_HISTORICAL_APP_METRICS_EXPORT: POSTHOG_RETRIEVE_HISTORICAL_APP_METRICS_EXPORT_OUTPUT
  RETRIEVE_IMPORTANT_PROJECT_ACTIVITY_LOG: POSTHOG_RETRIEVE_IMPORTANT_PROJECT_ACTIVITY_LOG_OUTPUT
  RETRIEVE_INSIGHT_SHARING_CONFIGURATIONS: POSTHOG_RETRIEVE_INSIGHT_SHARING_CONFIGURATIONS_OUTPUT
  RETRIEVE_LAST_VIEWED_INSIGHTS_FOR_USER: POSTHOG_RETRIEVE_LAST_VIEWED_INSIGHTS_FOR_USER_OUTPUT
  RETRIEVE_MATCHING_EVENTS_FOR_SESSION_RECORDING: POSTHOG_RETRIEVE_MATCHING_EVENTS_FOR_SESSION_RECORDING_OUTPUT
  RETRIEVE_NOTEBOOK_ACTIVITY_FOR_PROJECT: POSTHOG_RETRIEVE_NOTEBOOK_ACTIVITY_FOR_PROJECT_OUTPUT
  RETRIEVE_NOTEBOOK_ACTIVITY_LOG: POSTHOG_RETRIEVE_NOTEBOOK_ACTIVITY_LOG_OUTPUT
  RETRIEVE_NOTEBOOK_DETAILS: POSTHOG_RETRIEVE_NOTEBOOK_DETAILS_OUTPUT
  RETRIEVE_ORGANIZATION_PIPELINE_FRONTEND_APP: POSTHOG_RETRIEVE_ORGANIZATION_PIPELINE_FRONTEND_APP_OUTPUT
  RETRIEVE_ORGANIZATION_PIPELINE_UNSUBSCRIBE_CONFIGS: POSTHOG_RETRIEVE_ORGANIZATION_PIPELINE_UNSUBSCRIBE_CONFIGS_OUTPUT
  RETRIEVE_ORGANIZATION_PLUGIN_ACTIVITY: POSTHOG_RETRIEVE_ORGANIZATION_PLUGIN_ACTIVITY_OUTPUT
  RETRIEVE_ORGANIZATION_PLUGIN_DETAILS: POSTHOG_RETRIEVE_ORGANIZATION_PLUGIN_DETAILS_OUTPUT
  RETRIEVE_ORGANIZATION_PLUGIN_REPOSITORY_DETAILS: POSTHOG_RETRIEVE_ORGANIZATION_PLUGIN_REPOSITORY_DETAILS_OUTPUT
  RETRIEVE_ORGANIZATION_PLUGIN_UNSUBSCRIBE_CONFIGS: POSTHOG_RETRIEVE_ORGANIZATION_PLUGIN_UNSUBSCRIBE_CONFIGS_OUTPUT
  RETRIEVE_ORGANIZATION_PROJECT_DETAILS: POSTHOG_RETRIEVE_ORGANIZATION_PROJECT_DETAILS_OUTPUT
  RETRIEVE_ORGANIZATION_ROLE_DETAILS: POSTHOG_RETRIEVE_ORGANIZATION_ROLE_DETAILS_OUTPUT
  RETRIEVE_ORGANIZATION_S_PIPELINE_REPOSITORY_DETAILS: POSTHOG_RETRIEVE_ORGANIZATION_S_PIPELINE_REPOSITORY_DETAILS_OUTPUT
  RETRIEVE_ORGANIZATION_S_UNUSED_PIPELINE_APPS: POSTHOG_RETRIEVE_ORGANIZATION_S_UNUSED_PIPELINE_APPS_OUTPUT
  RETRIEVE_ORG_PIPELINE_TRANSFORMATION_ACTIVITY: POSTHOG_RETRIEVE_ORG_PIPELINE_TRANSFORMATION_ACTIVITY_OUTPUT
  RETRIEVE_OR_DELETE_PERSON_RETENTION_DATA: POSTHOG_RETRIEVE_OR_DELETE_PERSON_RETENTION_DATA_OUTPUT
  RETRIEVE_OR_DELETE_PROJECT_PERSONS_FUNNEL_DATA: POSTHOG_RETRIEVE_OR_DELETE_PROJECT_PERSONS_FUNNEL_DATA_OUTPUT
  RETRIEVE_PAGINATED_ORGANIZATION_LIST: POSTHOG_RETRIEVE_PAGINATED_ORGANIZATION_LIST_OUTPUT
  RETRIEVE_PERSONS_FUNNEL_CORRELATION_DATA: POSTHOG_RETRIEVE_PERSONS_FUNNEL_CORRELATION_DATA_OUTPUT
  RETRIEVE_PERSON_DETAILS_BY_ID: POSTHOG_RETRIEVE_PERSON_DETAILS_BY_ID_OUTPUT
  RETRIEVE_PERSON_DETAILS_BY_PROJECT: POSTHOG_RETRIEVE_PERSON_DETAILS_BY_PROJECT_OUTPUT
  RETRIEVE_PERSON_LIFECYCLE_DETAILS: POSTHOG_RETRIEVE_PERSON_LIFECYCLE_DETAILS_OUTPUT
  RETRIEVE_PERSON_PROPERTIES_TIMELINE: POSTHOG_RETRIEVE_PERSON_PROPERTIES_TIMELINE_OUTPUT
  RETRIEVE_PERSON_S_ACTIVITY_AND_DELETE_OPTIONS: POSTHOG_RETRIEVE_PERSON_S_ACTIVITY_AND_DELETE_OPTIONS_OUTPUT
  RETRIEVE_PERSON_VALUES_BY_PROJECT: POSTHOG_RETRIEVE_PERSON_VALUES_BY_PROJECT_OUTPUT
  RETRIEVE_PIPELINE_DESTINATION_ACTIVITY: POSTHOG_RETRIEVE_PIPELINE_DESTINATION_ACTIVITY_OUTPUT
  RETRIEVE_PIPELINE_DESTINATION_CONFIG_DETAILS: POSTHOG_RETRIEVE_PIPELINE_DESTINATION_CONFIG_DETAILS_OUTPUT
  RETRIEVE_PIPELINE_DESTINATION_DETAILS: POSTHOG_RETRIEVE_PIPELINE_DESTINATION_DETAILS_OUTPUT
  RETRIEVE_PIPELINE_DESTINATION_FRONTEND_CONFIG: POSTHOG_RETRIEVE_PIPELINE_DESTINATION_FRONTEND_CONFIG_OUTPUT
  RETRIEVE_PIPELINE_DESTINATION_PLUGIN_DETAILS: POSTHOG_RETRIEVE_PIPELINE_DESTINATION_PLUGIN_DETAILS_OUTPUT
  RETRIEVE_PIPELINE_FRONTEND_APP_ACTIVITY: POSTHOG_RETRIEVE_PIPELINE_FRONTEND_APP_ACTIVITY_OUTPUT
  RETRIEVE_PIPELINE_FRONTEND_APP_DETAILS: POSTHOG_RETRIEVE_PIPELINE_FRONTEND_APP_DETAILS_OUTPUT
  RETRIEVE_PIPELINE_FRONTEND_APP_SOURCE_DETAILS: POSTHOG_RETRIEVE_PIPELINE_FRONTEND_APP_SOURCE_DETAILS_OUTPUT
  RETRIEVE_PIPELINE_FRONTEND_PLUGIN_CONFIG: POSTHOG_RETRIEVE_PIPELINE_FRONTEND_PLUGIN_CONFIG_OUTPUT
  RETRIEVE_PIPELINE_IMPORT_APPS_ACTIVITY: POSTHOG_RETRIEVE_PIPELINE_IMPORT_APPS_ACTIVITY_OUTPUT
  RETRIEVE_PIPELINE_IMPORT_APP_DETAILS: POSTHOG_RETRIEVE_PIPELINE_IMPORT_APP_DETAILS_OUTPUT
  RETRIEVE_PIPELINE_IMPORT_APP_SOURCE_DETAILS: POSTHOG_RETRIEVE_PIPELINE_IMPORT_APP_SOURCE_DETAILS_OUTPUT
  RETRIEVE_PIPELINE_PLUGIN_DETAILS_BY_ID: POSTHOG_RETRIEVE_PIPELINE_PLUGIN_DETAILS_BY_ID_OUTPUT
  RETRIEVE_PIPELINE_PLUGIN_SOURCE: POSTHOG_RETRIEVE_PIPELINE_PLUGIN_SOURCE_OUTPUT
  RETRIEVE_PIPELINE_TRANSFORMATION_ACTIVITY: POSTHOG_RETRIEVE_PIPELINE_TRANSFORMATION_ACTIVITY_OUTPUT
  RETRIEVE_PIPELINE_TRANSFORMATION_CONFIG: POSTHOG_RETRIEVE_PIPELINE_TRANSFORMATION_CONFIG_OUTPUT
  RETRIEVE_PIPELINE_TRANSFORMATION_FRONTEND_CONFIG: POSTHOG_RETRIEVE_PIPELINE_TRANSFORMATION_FRONTEND_CONFIG_OUTPUT
  RETRIEVE_PLUGIN_CONFIG_ACTIVITY: POSTHOG_RETRIEVE_PLUGIN_CONFIG_ACTIVITY_OUTPUT
  RETRIEVE_PLUGIN_CONFIG_ACTIVITY_DETAILS: POSTHOG_RETRIEVE_PLUGIN_CONFIG_ACTIVITY_DETAILS_OUTPUT
  RETRIEVE_PLUGIN_CONFIG_DETAILS: POSTHOG_RETRIEVE_PLUGIN_CONFIG_DETAILS_OUTPUT
  RETRIEVE_PLUGIN_CONFIG_FRONTEND: POSTHOG_RETRIEVE_PLUGIN_CONFIG_FRONTEND_OUTPUT
  RETRIEVE_PLUGIN_FRONTEND_CONFIG: POSTHOG_RETRIEVE_PLUGIN_FRONTEND_CONFIG_OUTPUT
  RETRIEVE_PLUGIN_SOURCE_DETAILS: POSTHOG_RETRIEVE_PLUGIN_SOURCE_DETAILS_OUTPUT
  RETRIEVE_PLUGIN_UPDATE_INFO: POSTHOG_RETRIEVE_PLUGIN_UPDATE_INFO_OUTPUT
  RETRIEVE_PLUGIN_UPDATE_STATUS: POSTHOG_RETRIEVE_PLUGIN_UPDATE_STATUS_OUTPUT
  RETRIEVE_PROJECT_ACTION_DETAILS_BY_ID: POSTHOG_RETRIEVE_PROJECT_ACTION_DETAILS_BY_ID_OUTPUT
  RETRIEVE_PROJECT_ACTIVITY_DETAILS: POSTHOG_RETRIEVE_PROJECT_ACTIVITY_DETAILS_OUTPUT
  RETRIEVE_PROJECT_ACTIVITY_INSIGHTS: POSTHOG_RETRIEVE_PROJECT_ACTIVITY_INSIGHTS_OUTPUT
  RETRIEVE_PROJECT_ACTIVITY_LOG_WITH_PAGINATION: POSTHOG_RETRIEVE_PROJECT_ACTIVITY_LOG_WITH_PAGINATION_OUTPUT
  RETRIEVE_PROJECT_ANNOTATION_DETAILS: POSTHOG_RETRIEVE_PROJECT_ANNOTATION_DETAILS_OUTPUT
  RETRIEVE_PROJECT_COHORTS_ACTIVITY_LOG: POSTHOG_RETRIEVE_PROJECT_COHORTS_ACTIVITY_LOG_OUTPUT
  RETRIEVE_PROJECT_COHORTS_WITH_PAGINATION: POSTHOG_RETRIEVE_PROJECT_COHORTS_WITH_PAGINATION_OUTPUT
  RETRIEVE_PROJECT_COHORT_DETAILS: POSTHOG_RETRIEVE_PROJECT_COHORT_DETAILS_OUTPUT
  RETRIEVE_PROJECT_DRAFT_SQL_QUERY: POSTHOG_RETRIEVE_PROJECT_DRAFT_SQL_QUERY_OUTPUT
  RETRIEVE_PROJECT_EARLY_ACCESS_FEATURE_DETAILS: POSTHOG_RETRIEVE_PROJECT_EARLY_ACCESS_FEATURE_DETAILS_OUTPUT
  RETRIEVE_PROJECT_EVENT_DETAILS_BY_ID: POSTHOG_RETRIEVE_PROJECT_EVENT_DETAILS_BY_ID_OUTPUT
  RETRIEVE_PROJECT_EVENT_VALUES: POSTHOG_RETRIEVE_PROJECT_EVENT_VALUES_OUTPUT
  RETRIEVE_PROJECT_EXPERIMENT_RESULTS: POSTHOG_RETRIEVE_PROJECT_EXPERIMENT_RESULTS_OUTPUT
  RETRIEVE_PROJECT_EXPORT_DETAILS: POSTHOG_RETRIEVE_PROJECT_EXPORT_DETAILS_OUTPUT
  RETRIEVE_PROJECT_FUNNEL_CORRELATION_INSIGHTS: POSTHOG_RETRIEVE_PROJECT_FUNNEL_CORRELATION_INSIGHTS_OUTPUT
  RETRIEVE_PROJECT_GROUP_DETAILS_BY_KEY_AND_TYPE: POSTHOG_RETRIEVE_PROJECT_GROUP_DETAILS_BY_KEY_AND_TYPE_OUTPUT
  RETRIEVE_PROJECT_INSIGHTS_DETAILS: POSTHOG_RETRIEVE_PROJECT_INSIGHTS_DETAILS_OUTPUT
  RETRIEVE_PROJECT_INSIGHTS_WITH_PAGINATION: POSTHOG_RETRIEVE_PROJECT_INSIGHTS_WITH_PAGINATION_OUTPUT
  RETRIEVE_PROJECT_INSIGHT_ACTIVITY_DATA: POSTHOG_RETRIEVE_PROJECT_INSIGHT_ACTIVITY_DATA_OUTPUT
  RETRIEVE_PROJECT_INSIGHT_DETAILS: POSTHOG_RETRIEVE_PROJECT_INSIGHT_DETAILS_OUTPUT
  RETRIEVE_PROJECT_MEMBER_DETAILS_BY_UUID: POSTHOG_RETRIEVE_PROJECT_MEMBER_DETAILS_BY_UUID_OUTPUT
  RETRIEVE_PROJECT_PERSON_ACTIVITY: POSTHOG_RETRIEVE_PROJECT_PERSON_ACTIVITY_OUTPUT
  RETRIEVE_PROJECT_PERSON_COHORTS: POSTHOG_RETRIEVE_PROJECT_PERSON_COHORTS_OUTPUT
  RETRIEVE_PROJECT_PERSON_STICKINESS: POSTHOG_RETRIEVE_PROJECT_PERSON_STICKINESS_OUTPUT
  RETRIEVE_PROJECT_PIPELINE_PLUGIN_CONFIG: POSTHOG_RETRIEVE_PROJECT_PIPELINE_PLUGIN_CONFIG_OUTPUT
  RETRIEVE_PROJECT_SESSION_VALUES: POSTHOG_RETRIEVE_PROJECT_SESSION_VALUES_OUTPUT
  RETRIEVE_PROJECT_SUBSCRIPTION_DETAILS: POSTHOG_RETRIEVE_PROJECT_SUBSCRIPTION_DETAILS_OUTPUT
  RETRIEVE_PROJECT_TREND_INSIGHTS: POSTHOG_RETRIEVE_PROJECT_TREND_INSIGHTS_OUTPUT
  RETRIEVE_PROPERTIES_AND_EVENTS_ASSOCIATION: POSTHOG_RETRIEVE_PROPERTIES_AND_EVENTS_ASSOCIATION_OUTPUT
  RETRIEVE_PROPERTY_DEFINITION_DETAILS: POSTHOG_RETRIEVE_PROPERTY_DEFINITION_DETAILS_OUTPUT
  RETRIEVE_PROXY_RECORD_DETAILS: POSTHOG_RETRIEVE_PROXY_RECORD_DETAILS_OUTPUT
  RETRIEVE_RELATED_PROJECT_GROUPS: POSTHOG_RETRIEVE_RELATED_PROJECT_GROUPS_OUTPUT
  RETRIEVE_RETENTION_INSIGHTS: POSTHOG_RETRIEVE_RETENTION_INSIGHTS_OUTPUT
  RETRIEVE_SESSION_PROPERTY_DEFINITIONS: POSTHOG_RETRIEVE_SESSION_PROPERTY_DEFINITIONS_OUTPUT
  RETRIEVE_SESSION_RECORDING_DETAILS: POSTHOG_RETRIEVE_SESSION_RECORDING_DETAILS_OUTPUT
  RETRIEVE_SESSION_RECORDING_ERROR_CLUSTERS: POSTHOG_RETRIEVE_SESSION_RECORDING_ERROR_CLUSTERS_OUTPUT
  RETRIEVE_SESSION_RECORDING_PLAYLIST_DETAILS: POSTHOG_RETRIEVE_SESSION_RECORDING_PLAYLIST_DETAILS_OUTPUT
  RETRIEVE_SESSION_RECORDING_PROPERTIES_BY_PROJECT_ID: POSTHOG_RETRIEVE_SESSION_RECORDING_PROPERTIES_BY_PROJECT_ID_OUTPUT
  RETRIEVE_SESSION_RECORDING_SNAPSHOTS: POSTHOG_RETRIEVE_SESSION_RECORDING_SNAPSHOTS_OUTPUT
  RETRIEVE_SIMILAR_SESSION_RECORDINGS: POSTHOG_RETRIEVE_SIMILAR_SESSION_RECORDINGS_OUTPUT
  RETRIEVE_SPECIFIC_BATCH_EXPORT_DETAILS: POSTHOG_RETRIEVE_SPECIFIC_BATCH_EXPORT_DETAILS_OUTPUT
  RETRIEVE_SPECIFIC_BATCH_EXPORT_RUN_DETAILS: POSTHOG_RETRIEVE_SPECIFIC_BATCH_EXPORT_RUN_DETAILS_OUTPUT
  RETRIEVE_SPECIFIC_DOMAIN_DETAILS: POSTHOG_RETRIEVE_SPECIFIC_DOMAIN_DETAILS_OUTPUT
  RETRIEVE_SPECIFIC_EXPORTED_ASSET_CONTENT: POSTHOG_RETRIEVE_SPECIFIC_EXPORTED_ASSET_CONTENT_OUTPUT
  RETRIEVE_SPECIFIC_HISTORICAL_PLUGIN_EXPORT: POSTHOG_RETRIEVE_SPECIFIC_HISTORICAL_PLUGIN_EXPORT_OUTPUT
  RETRIEVE_SPECIFIC_PIPELINE_FRONTEND_APP_CONFIG: POSTHOG_RETRIEVE_SPECIFIC_PIPELINE_FRONTEND_APP_CONFIG_OUTPUT
  RETRIEVE_SPECIFIC_PROJECT_DASHBOARD_DETAILS: POSTHOG_RETRIEVE_SPECIFIC_PROJECT_DASHBOARD_DETAILS_OUTPUT
  RETRIEVE_SURVEY_ACTIVITY_LOGS: POSTHOG_RETRIEVE_SURVEY_ACTIVITY_LOGS_OUTPUT
  RETRIEVE_SURVEY_DETAILS_WITH_UUID_AND_PROJECT_ID: POSTHOG_RETRIEVE_SURVEY_DETAILS_WITH_UUID_AND_PROJECT_ID_OUTPUT
  RETRIEVE_SURVEY_RESPONSES_COUNT_BY_PROJECT_ID: POSTHOG_RETRIEVE_SURVEY_RESPONSES_COUNT_BY_PROJECT_ID_OUTPUT
  RETRIEVE_UNSUBSCRIBED_PIPELINE_CONFIGS: POSTHOG_RETRIEVE_UNSUBSCRIBED_PIPELINE_CONFIGS_OUTPUT
  RETRIEVE_UNUSED_ORGANIZATION_PLUGINS: POSTHOG_RETRIEVE_UNUSED_ORGANIZATION_PLUGINS_OUTPUT
  RETRIEVE_UNUSED_PIPELINE_DESTINATIONS: POSTHOG_RETRIEVE_UNUSED_PIPELINE_DESTINATIONS_OUTPUT
  RETRIEVE_USER_DETAILS_FOR_INITIATING2_FA_SETUP: POSTHOG_RETRIEVE_USER_DETAILS_FOR_INITIATING2_FA_SETUP_OUTPUT
  RETRIEVE_USER_PROFILE_AND_TEAM_DETAILS: POSTHOG_RETRIEVE_USER_PROFILE_AND_TEAM_DETAILS_OUTPUT
  REVOKE_ORGANIZATION_INVITE: POSTHOG_REVOKE_ORGANIZATION_INVITE_OUTPUT
  SET_INSIGHT_DELETION_FLAG: POSTHOG_SET_INSIGHT_DELETION_FLAG_OUTPUT
  SOFT_DELETE_A_SPECIFIC_COHORT_BY_ID: POSTHOG_SOFT_DELETE_A_SPECIFIC_COHORT_BY_ID_OUTPUT
  SOFT_DELETE_FEATURE_FLAG_BY_SETTING_STATUS: POSTHOG_SOFT_DELETE_FEATURE_FLAG_BY_SETTING_STATUS_OUTPUT
  SOFT_DELETE_PROJECT_DASHBOARD: POSTHOG_SOFT_DELETE_PROJECT_DASHBOARD_OUTPUT
  SPLIT_PERSON_ENTITIES_IN_PROJECT: POSTHOG_SPLIT_PERSON_ENTITIES_IN_PROJECT_OUTPUT
  TRIGGER_PROJECT_EXPORT_WITH_FORMAT_OPTION: POSTHOG_TRIGGER_PROJECT_EXPORT_WITH_FORMAT_OPTION_OUTPUT
  UPDATE_ANNOTATION_DETAILS: POSTHOG_UPDATE_ANNOTATION_DETAILS_OUTPUT
  UPDATE_EARLY_ACCESS_PROJECT_FEATURE: POSTHOG_UPDATE_EARLY_ACCESS_PROJECT_FEATURE_OUTPUT
  UPDATE_EVENT_DEFINITION_BY_UUID: POSTHOG_UPDATE_EVENT_DEFINITION_BY_UUID_OUTPUT
  UPDATE_EXPERIMENT_DETAILS: POSTHOG_UPDATE_EXPERIMENT_DETAILS_OUTPUT
  UPDATE_FEATURE_FLAG_CONFIGURATION: POSTHOG_UPDATE_FEATURE_FLAG_CONFIGURATION_OUTPUT
  UPDATE_ORGANIZATION_DETAILS_BY_UUID: POSTHOG_UPDATE_ORGANIZATION_DETAILS_BY_UUID_OUTPUT
  UPDATE_ORGANIZATION_DOMAIN_INFO_AND_SAML_CONFIG: POSTHOG_UPDATE_ORGANIZATION_DOMAIN_INFO_AND_SAML_CONFIG_OUTPUT
  UPDATE_ORGANIZATION_DOMAIN_PROPERTIES: POSTHOG_UPDATE_ORGANIZATION_DOMAIN_PROPERTIES_OUTPUT
  UPDATE_ORGANIZATION_MEMBER_BY_UUIDS: POSTHOG_UPDATE_ORGANIZATION_MEMBER_BY_UUIDS_OUTPUT
  UPDATE_ORGANIZATION_MEMBER_DETAILS: POSTHOG_UPDATE_ORGANIZATION_MEMBER_DETAILS_OUTPUT
  UPDATE_ORGANIZATION_S_PROXY_RECORD_DOMAIN: POSTHOG_UPDATE_ORGANIZATION_S_PROXY_RECORD_DOMAIN_OUTPUT
  UPDATE_PARTIAL_PROJECT_COHORT_DETAILS: POSTHOG_UPDATE_PARTIAL_PROJECT_COHORT_DETAILS_OUTPUT
  UPDATE_PARTIAL_ROLE_DETAILS_IN_ORGANIZATION: POSTHOG_UPDATE_PARTIAL_ROLE_DETAILS_IN_ORGANIZATION_OUTPUT
  UPDATE_PARTIAL_SUBSCRIPTION_DETAILS: POSTHOG_UPDATE_PARTIAL_SUBSCRIPTION_DETAILS_OUTPUT
  UPDATE_PARTIAL_SURVEY_DETAILS: POSTHOG_UPDATE_PARTIAL_SURVEY_DETAILS_OUTPUT
  UPDATE_PERSON_PROPERTIES: POSTHOG_UPDATE_PERSON_PROPERTIES_OUTPUT
  UPDATE_PERSON_PROPERTY_ENDPOINT: POSTHOG_UPDATE_PERSON_PROPERTY_ENDPOINT_OUTPUT
  UPDATE_PIPELINE_DESTINATION_CONFIG: POSTHOG_UPDATE_PIPELINE_DESTINATION_CONFIG_OUTPUT
  UPDATE_PIPELINE_FRONTEND_APP_CONFIG: POSTHOG_UPDATE_PIPELINE_FRONTEND_APP_CONFIG_OUTPUT
  UPDATE_PIPELINE_PLUGIN_CONFIG: POSTHOG_UPDATE_PIPELINE_PLUGIN_CONFIG_OUTPUT
  UPDATE_PIPELINE_TRANSFORMATION_CONFIG: POSTHOG_UPDATE_PIPELINE_TRANSFORMATION_CONFIG_OUTPUT
  UPDATE_PLUGIN_CONFIG_FOR_PROJECT: POSTHOG_UPDATE_PLUGIN_CONFIG_FOR_PROJECT_OUTPUT
  UPDATE_PROJECT_ACTION_BY_ID: POSTHOG_UPDATE_PROJECT_ACTION_BY_ID_OUTPUT
  UPDATE_PROJECT_ACTION_WITH_PARTIAL_DATA: POSTHOG_UPDATE_PROJECT_ACTION_WITH_PARTIAL_DATA_OUTPUT
  UPDATE_PROJECT_COHORT_DETAILS: POSTHOG_UPDATE_PROJECT_COHORT_DETAILS_OUTPUT
  UPDATE_PROJECT_DASHBOARD_DETAILS: POSTHOG_UPDATE_PROJECT_DASHBOARD_DETAILS_OUTPUT
  UPDATE_PROJECT_EARLY_ACCESS_FEATURE: POSTHOG_UPDATE_PROJECT_EARLY_ACCESS_FEATURE_OUTPUT
  UPDATE_PROJECT_EVENT_DEFINITION: POSTHOG_UPDATE_PROJECT_EVENT_DEFINITION_OUTPUT
  UPDATE_PROJECT_GROUP_TYPE_METADATA: POSTHOG_UPDATE_PROJECT_GROUP_TYPE_METADATA_OUTPUT
  UPDATE_PROJECT_INSIGHT_DETAILS: POSTHOG_UPDATE_PROJECT_INSIGHT_DETAILS_OUTPUT
  UPDATE_PROJECT_MEMBER_ROLE_BY_UUID: POSTHOG_UPDATE_PROJECT_MEMBER_ROLE_BY_UUID_OUTPUT
  UPDATE_PROJECT_MEMBER_S_ROLE_BY_UUID: POSTHOG_UPDATE_PROJECT_MEMBER_S_ROLE_BY_UUID_OUTPUT
  UPDATE_PROJECT_NOTEBOOK_DETAILS: POSTHOG_UPDATE_PROJECT_NOTEBOOK_DETAILS_OUTPUT
  UPDATE_PROJECT_PIPELINE_DESTINATION_CONFIG: POSTHOG_UPDATE_PROJECT_PIPELINE_DESTINATION_CONFIG_OUTPUT
  UPDATE_PROJECT_PIPELINE_TRANSFORMATION_CONFIG: POSTHOG_UPDATE_PROJECT_PIPELINE_TRANSFORMATION_CONFIG_OUTPUT
  UPDATE_PROJECT_PLUGIN_CONFIGURATION: POSTHOG_UPDATE_PROJECT_PLUGIN_CONFIGURATION_OUTPUT
  UPDATE_PROJECT_PROPERTY_DEFINITION: POSTHOG_UPDATE_PROJECT_PROPERTY_DEFINITION_OUTPUT
  UPDATE_PROJECT_SESSION_RECORDING_PLAYLIST: POSTHOG_UPDATE_PROJECT_SESSION_RECORDING_PLAYLIST_OUTPUT
  UPDATE_PROJECT_SUBSCRIPTION_DETAILS: POSTHOG_UPDATE_PROJECT_SUBSCRIPTION_DETAILS_OUTPUT
  UPDATE_PROJECT_SURVEY_DETAILS: POSTHOG_UPDATE_PROJECT_SURVEY_DETAILS_OUTPUT
  UPDATE_ROLE_DETAILS_IN_ORGANIZATION: POSTHOG_UPDATE_ROLE_DETAILS_IN_ORGANIZATION_OUTPUT
  UPDATE_SESSION_RECORDING_PLAYLIST_PARTIALLY: POSTHOG_UPDATE_SESSION_RECORDING_PLAYLIST_PARTIALLY_OUTPUT
  UPDATE_SPECIFIC_PROXY_RECORD_FIELDS: POSTHOG_UPDATE_SPECIFIC_PROXY_RECORD_FIELDS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's POSTHOG toolkit.
 */
export const POSTHOG = {
  slug: "posthog",
  tools: {
    /**
     * Add collaborators to a specific project dashboard. requires 'project id' and 'dashboard id'. supports json, form-urlencoded, and multipart data. returns added collaborator details. auth: 'personalapikeyauth'.
     */
    ADD_DASHBOARD_COLLABORATORS_WITH_ACCESS_LEVEL: "POSTHOG_ADD_DASHBOARD_COLLABORATORS_WITH_ACCESS_LEVEL",
    /**
     * Add a member to an organization role by submitting their details and uuid in json/form, using organization and role ids. requires personalapikeyauth. success gives a 201 status.
     */
    ADD_MEMBER_TO_ORGANIZATION_ROLE: "POSTHOG_ADD_MEMBER_TO_ORGANIZATION_ROLE",
    /**
     * Add members with specific roles to a project by providing their user uuid and level (member or admin). requires project id in the url. supports json, form-data, and form-urlencoded input. returns the newly created membership data upon success.
     */
    ADD_PROJECT_SPECIFIC_MEMBER_ROLES: "POSTHOG_ADD_PROJECT_SPECIFIC_MEMBER_ROLES",
    /**
     * Set up role-based access for a feature flag using `project id` and `feature flag id`. submit access info in json or form format, with `feature flag:write` rights. success returns new details with a 201 code.
     */
    ASSIGN_FEATURE_FLAG_ROLE_BASED_ACCESS: "POSTHOG_ASSIGN_FEATURE_FLAG_ROLE_BASED_ACCESS",
    /**
     * Create a bookmark for an activity notification in a project's activity log. requires a `project id` and json payload with activity details. supports verification status, impersonation flags, and system activity distinction.
     */
    BOOKMARK_PROJECT_ACTIVITY_NOTIFICATION: "POSTHOG_BOOKMARK_PROJECT_ACTIVITY_NOTIFICATION",
    /**
     * Post /api/organizations/{organization id}/invites/bulk/: bulk-create organization invites with customizable levels, sender details, and validation checks. supports email automation and private project access settings.
     */
    BULK_CREATE_ORGANIZATION_INVITES: "POSTHOG_BULK_CREATE_ORGANIZATION_INVITES",
    /**
     * The "/api/projects/{project id}/insights/cancel/" endpoint allows users to cancel insights for a project by providing a project id and insight details in json or csv, and confirms cancellation in the response.
     */
    CANCEL_INSIGHTS_FOR_A_PROJECT: "POSTHOG_CANCEL_INSIGHTS_FOR_A_PROJECT",
    /**
     * Get the newest updates and plugin info for a pipeline destination by organization and destination id via get request to /api/.../{id}/check for updates.
     */
    CHECK_PIPELINE_DESTINATION_UPDATES: "POSTHOG_CHECK_PIPELINE_DESTINATION_UPDATES",
    /**
     * Retrieve the latest update information for a specific pipeline import app by its id within an organization. this endpoint returns details such as plugin type, name, description, and version data. requires 'id' and 'organization id' as path parameters.
     */
    CHECK_PIPELINE_IMPORT_APP_UPDATES: "POSTHOG_CHECK_PIPELINE_IMPORT_APP_UPDATES",
    /**
     * Get update status for a specific pipeline transformation plugin by its unique id within an organization. this endpoint requires the 'organization id' and 'plugin' ids and returns details like plugin type, name, and update information.
     */
    CHECK_PIPELINE_PLUGIN_UPDATE_STATUS: "POSTHOG_CHECK_PIPELINE_PLUGIN_UPDATE_STATUS",
    /**
     * Projects for the current organization.
     */
    CHECK_PROJECT_S_DEMO_DATA_GENERATION_STATUS: "POSTHOG_CHECK_PROJECT_S_DEMO_DATA_GENERATION_STATUS",
    /**
     * This endpoint duplicates a specified cohort as a static one within a project. path parameters include `project id` (string) and cohort `id` (integer). successful requests return cohort details.
     */
    COHORT_DUPLICATION_TO_STATIC: "POSTHOG_COHORT_DUPLICATION_TO_STATIC",
    /**
     * The api for interacting with notebooks. this feature is in early access and the api can have breaking changes without announcement.
     */
    CREATE_A_NOTEBOOK_IN_A_PROJECT: "POSTHOG_CREATE_A_NOTEBOOK_IN_A_PROJECT",
    /**
     * The post endpoint enables creating insights for projects using a project id and supports json/csv. it offers detailed parameters for customizing insights and returns structured data with personalapikeyauth for security.
     */
    CREATE_CUSTOM_PROJECT_INSIGHTS: "POSTHOG_CREATE_CUSTOM_PROJECT_INSIGHTS",
    /**
     * Create a new dashboard for a specified project from a template. accepts project id in the path and a json payload with various dashboard object parameters. returns a dashboard instance on success.
     */
    CREATE_DASHBOARD_FROM_TEMPLATE_IN_PROJECT: "POSTHOG_CREATE_DASHBOARD_FROM_TEMPLATE_IN_PROJECT",
    /**
     * Create a domain for a specific organization by post to `/api/organizations/{id}/domains` with json/form data. requires domain, saml setup, and write permissions. returns new domain data with status 201.
     */
    CREATE_DOMAIN_WITH_SAML_FOR_ORGANIZATION: "POSTHOG_CREATE_DOMAIN_WITH_SAML_FOR_ORGANIZATION",
    /**
     * Create a new exposure cohort for an experiment in a project by sending a post request with experiment details and feature flag data. requires experiment id and project id in the path.
     */
    CREATE_EXPERIMENT_EXPOSURE_COHORT: "POSTHOG_CREATE_EXPERIMENT_EXPOSURE_COHORT",
    /**
     * Manage feature flags by creating, reading, updating, and deleting them using posthog's javascript library or api endpoint. details in the provided documentation.
     */
    CREATE_FEATURE_FLAGS_FOR_PROJECT: "POSTHOG_CREATE_FEATURE_FLAGS_FOR_PROJECT",
    /**
     * Manage feature flags by creating, reading, updating, and deleting them. utilize javascript library or endpoint for user-specific flag status. refer to documentation for details.
     */
    CREATE_FEATURE_FLAG_DASHBOARD: "POSTHOG_CREATE_FEATURE_FLAG_DASHBOARD",
    /**
     * Create a config for pipeline frontend apps within a specified project. requires project id and payload with object properties such as plugin, enabled status, order, etc. returns newly created config details.
     */
    CREATE_FRONTEND_APP_PIPELINE_CONFIG: "POSTHOG_CREATE_FRONTEND_APP_PIPELINE_CONFIG",
    /**
     * This endpoint handles reading and deleting persons. for creation or updates, use the capture api, `$set` or `$unset` properties, or sdks.
     */
    CREATE_FUNNEL_ANALYSIS_FOR_PROJECT_PERSONS: "POSTHOG_CREATE_FUNNEL_ANALYSIS_FOR_PROJECT_PERSONS",
    /**
     * Post /api/organizations/ - create a new organization with details like name, membership level, and features access. requires organization:write permission. returns organization info on success.
     */
    CREATE_NEW_ORGANIZATION_WITH_CONFIGURABLE_ACCESS: "POSTHOG_CREATE_NEW_ORGANIZATION_WITH_CONFIGURABLE_ACCESS",
    /**
     * Create a new experiment in a specific project using json, form, or multipart data. requires project id and experiment details, secured with personalapikeyauth. generates a 201 response with experiment info.
     */
    CREATE_NEW_PROJECT_EXPERIMENT: "POSTHOG_CREATE_NEW_PROJECT_EXPERIMENT",
    /**
     * Send invites with roles (member, admin, owner) via email to join an organization by id. use json, form data, or multipart with a personal api key for security. successful invites return a 201 status.
     */
    CREATE_ORGANIZATION_INVITE_WITH_ROLE_AND_EMAIL: "POSTHOG_CREATE_ORGANIZATION_INVITE_WITH_ROLE_AND_EMAIL",
    /**
     * Create a new role for the specified organization by supplying role details. requires organization id (uuid) and role data in json. returns the created role on success with a 201 status code. security: personalapikeyauth.
     */
    CREATE_ORGANIZATION_ROLE_WITH_FEATURE_FLAG_LEVELS: "POSTHOG_CREATE_ORGANIZATION_ROLE_WITH_FEATURE_FLAG_LEVELS",
    /**
     * Create a proxy record for an org by sending org id in url and json/form/multipart data with domain, target cname, and status. requires personalapikeyauth and org write access; returns record details.
     */
    CREATE_ORG_PROXY_RECORD_WITH_DOMAIN_AND_STATUS: "POSTHOG_CREATE_ORG_PROXY_RECORD_WITH_DOMAIN_AND_STATUS",
    /**
     * This endpoint is for reading and deleting persons. use the capture api, `$set`/`$unset` properties, or sdks to create or update them.
     */
    CREATE_PERSON_FUNNEL_CORRELATION: "POSTHOG_CREATE_PERSON_FUNNEL_CORRELATION",
    /**
     * This api endpoint is for reading and deleting users. use the capture api, `$set`/`$unset` properties, or sdks for creating/updating users.
     */
    CREATE_PERSON_PATH_WITH_FORMAT_OPTION: "POSTHOG_CREATE_PERSON_PATH_WITH_FORMAT_OPTION",
    /**
     * Create pipeline destination configurations for a specific project by submitting plugin and order details, among other configuration info, with required project id. authentication needed. responds with 201 on success.
     */
    CREATE_PIPELINE_DESTINATION_CONFIG: "POSTHOG_CREATE_PIPELINE_DESTINATION_CONFIG",
    /**
     * Create a job for a pipeline destination config with a specific id within the specified project. requires project id & config id in the path, and a json payload with plugin and order info.
     */
    CREATE_PIPELINE_DESTINATION_CONFIG_JOB: "POSTHOG_CREATE_PIPELINE_DESTINATION_CONFIG_JOB",
    /**
     * A job imports app settings into a project pipeline using project id and plugin config id, accepting json/form/multipart, and specifies plugin details, enabling status, and order for pipeline import apps configs.
     */
    CREATE_PIPELINE_IMPORT_APPS_CONFIG_JOB: "POSTHOG_CREATE_PIPELINE_IMPORT_APPS_CONFIG_JOB",
    /**
     * Create a job-related configuration for a specific plugin by providing plugin and project ids. accepts json, form data, and returns config details on success. use carefully; requires mandatory fields.
     */
    CREATE_PLUGIN_JOB_CONFIGURATION: "POSTHOG_CREATE_PLUGIN_JOB_CONFIGURATION",
    /**
     * This post endpoint creates actions for a project, accepts various data types, requires project id and action data, optionally outputs in csv/json, and needs personalapikeyauth, returning a 201 with action details.
     */
    CREATE_PROJECT_ACTION_WITH_FORMAT: "POSTHOG_CREATE_PROJECT_ACTION_WITH_FORMAT",
    /**
     * Create cohorts for a specified project by posting json-form data to "/api/projects/{project id}/cohorts/". provide project id in url and the necessary payload, adhering to json schema constraints. authentication required. returns 201 upon success.
     */
    CREATE_PROJECT_COHORTS: "POSTHOG_CREATE_PROJECT_COHORTS",
    /**
     * The post endpoint creates a dashboard within a project using a `project id`, accepting details in json/form formats. it uses 'personalapikeyauth' for security and returns http 201 with dashboard details on success.
     */
    CREATE_PROJECT_DASHBOARD: "POSTHOG_CREATE_PROJECT_DASHBOARD",
    /**
     * Create project insights with optional csv/json format parameter. requires `project id` in the path and a json body with project insight details. supports personal api key authentication. successful requests return a 201 status code with insight data.
     */
    CREATE_PROJECT_INSIGHTS_WITH_FORMAT_OPTION: "POSTHOG_CREATE_PROJECT_INSIGHTS_WITH_FORMAT_OPTION",
    /**
     * Create pipeline app configurations for a specified project via post, requiring a project id and json, form, or multipart payload. supports configs, plugins, and app details. returns 201 on success. auth required.
     */
    CREATE_PROJECT_PIPELINE_APP_CONFIGS: "POSTHOG_CREATE_PROJECT_PIPELINE_APP_CONFIGS",
    /**
     * Create a job for a pipeline frontend app config in a project. requires `project id` and config `id`, accepting json/form-data. returns the created job's details.
     */
    CREATE_PROJECT_PIPELINE_FRONTEND_APP_JOB: "POSTHOG_CREATE_PROJECT_PIPELINE_FRONTEND_APP_JOB",
    /**
     * Create a pipeline transformation config within a specific project by posting json, form, or multipart data. include plugin id, order, and enabled status. ensure project id is in the path. authentication required.
     */
    CREATE_PROJECT_PIPELINE_TRANSFORMATION_CONFIG: "POSTHOG_CREATE_PROJECT_PIPELINE_TRANSFORMATION_CONFIG",
    /**
     * Create a new plugin configuration for a specified project by post to /api/projects/{project id}/plugin configs/. requires project id and json payload with plugin details; must authenticate with personalapikeyauth.
     */
    CREATE_PROJECT_PLUGIN_CONFIGURATION: "POSTHOG_CREATE_PROJECT_PLUGIN_CONFIGURATION",
    /**
     * Create a subscription for a given project by providing required details such as delivery method, frequency, and starting date. requires a project id and supports various content types. returns the newly created subscription. security: personalapikeyauth.
     */
    CREATE_PROJECT_SUBSCRIPTION_WITH_DELIVERY_OPTIONS: "POSTHOG_CREATE_PROJECT_SUBSCRIPTION_WITH_DELIVERY_OPTIONS",
    /**
     * Create surveys in a project by providing a project id and details like type, questions, and targets in json, form-data, or urlencoded format. use personalapikeyauth for security. get a survey object on success.
     */
    CREATE_PROJECT_SURVEYS_WITH_QUESTIONS_AND_TARGETS: "POSTHOG_CREATE_PROJECT_SURVEYS_WITH_QUESTIONS_AND_TARGETS",
    /**
     * Create timing insights for a project by post to /api/projects/{project id}/insights/timing, supporting csv or json. it returns a 200 status with content in the chosen format.
     */
    CREATE_PROJECT_TIMING_INSIGHTS: "POSTHOG_CREATE_PROJECT_TIMING_INSIGHTS",
    /**
     * The `/api/projects/{project id}/query/` post endpoint allows users to submit queries for a specific project by providing the project id in the url and the query details in json or form data. authentication is required and it returns query results.
     */
    CREATE_QUERY_IN_PROJECT_BY_ID: "POSTHOG_CREATE_QUERY_IN_PROJECT_BY_ID",
    /**
     * Create and retrieve retention insights for a project using its id, allowing csv/json outputs. requires an api key with `insight:read` permissions and supports query node json strings and old dashboard ids.
     */
    CREATE_RETRIEVE_RETENTION_INSIGHTS_FOR_PROJECT: "POSTHOG_CREATE_RETRIEVE_RETENTION_INSIGHTS_FOR_PROJECT",
    /**
     * The post endpoint generates a project's session recording, needing 'project id', 'short id', and 'session recording id' in the url, and accepts various content formats for recording details.
     */
    CREATE_SESSION_RECORDING_IN_PLAYLIST: "POSTHOG_CREATE_SESSION_RECORDING_IN_PLAYLIST",
    /**
     * Create playlists of session recordings for a specified project. requires 'project id' path parameter and personal api key with write access. supports json, form-encoded, or multipart data. returns 201 on success with playlist details.
     */
    CREATE_SESSION_RECORDING_PLAYLISTS: "POSTHOG_CREATE_SESSION_RECORDING_PLAYLISTS",
    /**
     * Summarize a session recording by providing the project id and the recording's uuid. get details like duration, activities, and user info.
     */
    CREATE_SESSION_RECORDING_SUMMARY: "POSTHOG_CREATE_SESSION_RECORDING_SUMMARY",
    /**
     * Manage feature flags for apps with create, read, update, and delete operations using posthog's javascript library or dedicated endpoint. more info in the docs.
     */
    CREATE_STATIC_COHORT_FOR_FEATURE_FLAG: "POSTHOG_CREATE_STATIC_COHORT_FOR_FEATURE_FLAG",
    /**
     * Create, read, update and delete annotations. [see docs](https://posthog.com/docs/user-guides/annotations) for more information on annotations.
     */
    CRUD_OPERATIONS_FOR_PROJECT_ANNOTATIONS: "POSTHOG_CRUD_OPERATIONS_FOR_PROJECT_ANNOTATIONS",
    /**
     * The `/api/projects/{project id}/insights/funnel/` endpoint generates customizable funnel insights for a project in either csv or json, offering filtering, exclusion, and ordering features with cachable results. specify output with the `format` query.
     */
    CUSTOM_PROJECT_FUNNEL_ANALYTICS_WITH_ADVANCED_OPTIONS: "POSTHOG_CUSTOM_PROJECT_FUNNEL_ANALYTICS_WITH_ADVANCED_OPTIONS",
    /**
     * Delete an organization by its uuid. requires a 'personalapikeyauth' with 'organization:write' permission. on success, returns a 204 status code with no response body.
     */
    DELETE_ORGANIZATION_BY_UUID: "POSTHOG_DELETE_ORGANIZATION_BY_UUID",
    /**
     * Projects for the current organization.
     */
    DELETE_ORGANIZATION_PROJECT: "POSTHOG_DELETE_ORGANIZATION_PROJECT",
    /**
     * This endpoint is used to read and delete user data. use the capture api, `$set`/`$unset` commands, or sdks for creating/updating persons.
     */
    DELETE_PERSON_AND_OPTIONALLY_ASSOCIATED_EVENTS: "POSTHOG_DELETE_PERSON_AND_OPTIONALLY_ASSOCIATED_EVENTS",
    /**
     * Delete a session recording by providing the session's uuid and the associated project id. requires `session recording:write` permission. returns no content on successful deletion.
     */
    DELETE_SESSION_RECORDING_BY_UUID: "POSTHOG_DELETE_SESSION_RECORDING_BY_UUID",
    /**
     * Delete a survey by providing its uuid and the associated project id. requires 'survey:write' permission. returns no content with a 204 status on success.
     */
    DELETE_SURVEY_BY_ID: "POSTHOG_DELETE_SURVEY_BY_ID",
    /**
     * Enables a new early access feature for a project using project id, payload with details, and personalapikeyauth. returns a 201 status on success.
     */
    ENABLE_PROJECT_EARLY_ACCESS_FEATURE: "POSTHOG_ENABLE_PROJECT_EARLY_ACCESS_FEATURE",
    /**
     * Retrieve logs for a specific batch export within a project by its uuid. endpoint requires project id and export id (uuid). supports json responses detailing export properties, run statuses, and error info.
     */
    FETCH_BATCH_EXPORT_DETAILS_VIA_UUID: "POSTHOG_FETCH_BATCH_EXPORT_DETAILS_VIA_UUID",
    /**
     * Retrieve pipeline transformation export unsubscribe configurations for a specified organization by its uuid. returns details including id, plugin type, and configuration schema in json format.
     */
    FETCH_EXPORT_UNSUBSCRIBE_SETTINGS: "POSTHOG_FETCH_EXPORT_UNSUBSCRIBE_SETTINGS",
    /**
     * Retrieve activity details for a specific pipeline frontend app config by id within a project. requires both `project id` and config `id` in the path. returns json with app config details like plugin info, enablement, order, and error status.
     */
    FETCH_FRONTEND_APP_CONFIG_STATUS: "POSTHOG_FETCH_FRONTEND_APP_CONFIG_STATUS",
    /**
     * Retrieve organization details by uuid. endpoint requires 'organization:read' access. response includes name, slug, timestamps, membership, plugins access level, and team structure.
     */
    FETCH_ORGANIZATION_DETAILS_BY_UUID: "POSTHOG_FETCH_ORGANIZATION_DETAILS_BY_UUID",
    /**
     * Retrieve details of pipeline import app repositories for a specific organization by its uuid. returns json with properties like plugin type, name, and url. supports 'local', 'custom', 'repository', 'source', 'inline' types.
     */
    FETCH_ORGANIZATION_PIPELINE_APP_REPOSITORIES: "POSTHOG_FETCH_ORGANIZATION_PIPELINE_APP_REPOSITORIES",
    /**
     * Use a get request to '/api/projects/{project id}/pipeline destination configs/{id}/activity/' to get details, status, config, and metrics for a pipeline destination by id, returning json.
     */
    FETCH_PIPELINE_DESTINATION_DETAILS: "POSTHOG_FETCH_PIPELINE_DESTINATION_DETAILS",
    /**
     * Retrieve details of pipeline transformations from a specified organization's repository. requires `organization id` (uuid). returns json with properties like id, plugin type, and name. supports filtering by types like local, custom, repository, etc.
     */
    FETCH_PIPELINE_TRANSFORMATION_DETAILS: "POSTHOG_FETCH_PIPELINE_TRANSFORMATION_DETAILS",
    /**
     * Fetch secondary experiment data in a project by its unique id, using project and experiment ids as path parameters. authenticated by personalapikeyauth, it returns a json with experiment info, features, and metrics.
     */
    FETCH_PROJECT_EXPERIMENT_SECONDARY_DATA: "POSTHOG_FETCH_PROJECT_EXPERIMENT_SECONDARY_DATA",
    /**
     * Retrieve the activity log of surveys within a specific project by using the project id. this endpoint requires a personalapikeyauth with 'activity log:read' permission and returns survey details including types, flags, questions, and metadata.
     */
    FETCH_PROJECT_SURVEY_ACTIVITY_LOG: "POSTHOG_FETCH_PROJECT_SURVEY_ACTIVITY_LOG",
    /**
     * Retrieve session recording playlist details for a specific project by project id and playlist short id. requires personalapikeyauth with read access. returns playlist metadata including creation and modification info.
     */
    FETCH_SESSION_RECORDING_PLAYLIST_DETAILS: "POSTHOG_FETCH_SESSION_RECORDING_PLAYLIST_DETAILS",
    /**
     * Hard delete of this model is not allowed. use a patch api call to set "deleted" to true
     */
    FLAG_ANNOTATION_AS_DELETED: "POSTHOG_FLAG_ANNOTATION_AS_DELETED",
    /**
     * The /api/projects/{project id}/insights/funnel/correlation endpoint generates a correlation insight for funnel analysis in a project, accepting json/csv and needing 'project id' and insight details.
     */
    GENERATE_PROJECT_FUNNEL_CORRELATION_INSIGHT: "POSTHOG_GENERATE_PROJECT_FUNNEL_CORRELATION_INSIGHT",
    /**
     * Retrieve unused pipeline frontend apps for a specific organization by its uuid. returns details like app ids, types, names, descriptions, and other metadata in json format. requires organization id in path.
     */
    GET_UNUSED_ORG_PIPELINE_FRONTEND_APPS: "POSTHOG_GET_UNUSED_ORG_PIPELINE_FRONTEND_APPS",
    /**
     * Post /api/organizations/{organization id}/domains/{id}/verify/: initiates verification for a domain within an organization using its uuid, updating its verification status and related saml configuration attributes. supports json and form data formats.
     */
    INITIATE_DOMAIN_VERIFICATION_WITH_SAML_CONFIG: "POSTHOG_INITIATE_DOMAIN_VERIFICATION_WITH_SAML_CONFIG",
    /**
     * Create a pipeline transformation job for a specified plugin config in a project by posting to `/api/projects/{project id}/pipeline transformation configs/{id}/job/`. requires project id and plugin config id.
     */
    INITIATE_PIPELINE_TRANSFORMATION_JOB: "POSTHOG_INITIATE_PIPELINE_TRANSFORMATION_JOB",
    /**
     * This endpoint for listing/filtering events is deprecated and maintained only for compatibility. users are discouraged from using it and should use the query endpoint for ad-hoc lists/aggregations or cdp/batch exports for bulk exports.
     */
    LIST_AND_FILTER_PROJECT_EVENTS: "POSTHOG_LIST_AND_FILTER_PROJECT_EVENTS",
    /**
     * Create, read, update and delete annotations. [see docs](https://posthog.com/docs/user-guides/annotations) for more information on annotations.
     */
    LIST_AND_MANAGE_PROJECT_ANNOTATIONS: "POSTHOG_LIST_AND_MANAGE_PROJECT_ANNOTATIONS",
    /**
     * Manage feature flags with creation, reading, updating, and deletion capabilities. utilize javascript library or an endpoint for application integration. more details in the docs.
     */
    LIST_AND_MANAGE_PROJECT_FEATURE_FLAGS: "POSTHOG_LIST_AND_MANAGE_PROJECT_FEATURE_FLAGS",
    /**
     * List runs for a batch export by `batch export id` within a project. supports pagination & ordering of the results. requires `batch export:read` permission. returns status, errors, counts, and timestamps for each run.
     */
    LIST_BATCH_EXPORT_RUNS_WITH_PAGINATION_AND_ORDERING: "POSTHOG_LIST_BATCH_EXPORT_RUNS_WITH_PAGINATION_AND_ORDERING",
    /**
     * Retrieve a list of dashboard sharing configurations for a specified project and dashboard. requires dashboard id, project id, and sharing read permission via personalapikeyauth. returns json array of sharing settings.
     */
    LIST_DASHBOARD_SHARING_CONFIGS: "POSTHOG_LIST_DASHBOARD_SHARING_CONFIGS",
    /**
     * This get endpoint returns role access details for a feature flag in a project, needs 'project id' & 'feature flag id', and offers optional 'limit' & 'offset' for pagination.
     */
    LIST_FEATURE_FLAG_ROLE_ACCESS_DETAILS: "POSTHOG_LIST_FEATURE_FLAG_ROLE_ACCESS_DETAILS",
    /**
     * The api for interacting with notebooks. this feature is in early access and the api can have breaking changes without announcement.
     */
    LIST_NOTEBOOKS_WITH_FILTERS_AND_PAGINATION: "POSTHOG_LIST_NOTEBOOKS_WITH_FILTERS_AND_PAGINATION",
    /**
     * Retrieve a list of session recording playlists for a specific project. filter by creator, paginate with limit and offset, and identify playlists with project id and optional short id. requires 'session recording playlist:read' permission.
     */
    LIST_OF_PROJECT_S_SESSION_RECORDING_PLAYLISTS: "POSTHOG_LIST_OF_PROJECT_S_SESSION_RECORDING_PLAYLISTS",
    /**
     * Fetch a list of an organization's domains with pagination using `limit` and `offset`. access requires `organization id` and a personalapikeyauth. optional parameters available. provides domain info, verification, and saml setup.
     */
    LIST_ORGANIZATION_DOMAINS_WITH_PAGINATION: "POSTHOG_LIST_ORGANIZATION_DOMAINS_WITH_PAGINATION",
    /**
     * Retrieve a paginated list of invites for a specific organization, identified by `organization id`, with optional `limit` and `offset` query params for result customization. requires `organization member:read` permission.
     */
    LIST_ORGANIZATION_INVITES_WITH_PAGINATION: "POSTHOG_LIST_ORGANIZATION_INVITES_WITH_PAGINATION",
    /**
     * Retrieve members list from an organization with 'limit' and 'offset' options using personalapikeyauth and organization id. access requires organization member:read permission. returns members' details and statuses.
     */
    LIST_ORGANIZATION_MEMBERS_WITH_PAGINATION: "POSTHOG_LIST_ORGANIZATION_MEMBERS_WITH_PAGINATION",
    /**
     * Retrieve the list of plugins for a specified organization. supports pagination through 'limit' and 'offset' query parameters. requires a valid organization uuid and personalapikeyauth for access. returns plugin details including types and status.
     */
    LIST_ORGANIZATION_PLUGINS_WITH_PAGINATION: "POSTHOG_LIST_ORGANIZATION_PLUGINS_WITH_PAGINATION",
    /**
     * Fetch a paginated list of roles in an organization using its uuid. supports query parameters for limits and offsets. access needs personalapikeyauth. returns details like id, name, and creator info.
     */
    LIST_ORGANIZATION_ROLES_WITH_PAGINATION: "POSTHOG_LIST_ORGANIZATION_ROLES_WITH_PAGINATION",
    /**
     * Retrieve paginated batch exports for an organization, with filters and optional limits. includes team, interval, and status details. access requires personalapikeyauth with batch export:read rights.
     */
    LIST_ORGANIZATION_S_BATCH_EXPORTS_WITH_PAGINATION: "POSTHOG_LIST_ORGANIZATION_S_BATCH_EXPORTS_WITH_PAGINATION",
    /**
     * Retrieve a paginated list of an organization's proxy records by id, with 'limit' and 'offset' options. 'organization id' and 'personalapikeyauth' are necessary. includes status, domain, and counts.
     */
    LIST_ORGANIZATION_S_PAGINATED_PROXY_RECORDS: "POSTHOG_LIST_ORGANIZATION_S_PAGINATED_PROXY_RECORDS",
    /**
     * Retrieve a paginated list of an organization's pipeline destinations by id, with optional count and offset parameters. requires personalapikeyauth (plugin:read). returns details like id, type, and organization info.
     */
    LIST_ORGANIZATION_S_PIPELINE_DESTINATIONS: "POSTHOG_LIST_ORGANIZATION_S_PIPELINE_DESTINATIONS",
    /**
     * Retrieve a paginated list of pipeline apps for an organization using 'plugin:read' personalapikeyauth. requires organization id (uuid) and supports limit and offset parameters. includes app types and statuses.
     */
    LIST_ORGANIZATION_S_PIPELINE_FRONTEND_APPS: "POSTHOG_LIST_ORGANIZATION_S_PIPELINE_FRONTEND_APPS",
    /**
     * Retrieve a paginated list of pipeline import applications for a specified organization by id. supports optional 'limit' and 'offset' query parameters for result pagination. requires an organization uuid and a personal api key for authentication.
     */
    LIST_ORGANIZATION_S_PIPELINE_IMPORT_APPS: "POSTHOG_LIST_ORGANIZATION_S_PIPELINE_IMPORT_APPS",
    /**
     * Retrieve paginated pipeline transformation lists for an organization using `limit` and `offset`, requiring a uuid and personalapikeyauth. supports filtering and detailed views.
     */
    LIST_ORGANIZATION_S_PIPELINE_TRANSFORMATIONS: "POSTHOG_LIST_ORGANIZATION_S_PIPELINE_TRANSFORMATIONS",
    /**
     * This endpoint is for reading/deleting persons. for creating/updating, use the capture api, set/unset properties, or sdks.
     */
    LIST_OR_DELETE_PERSONS_WITH_OPTIONAL_FILTERS: "POSTHOG_LIST_OR_DELETE_PERSONS_WITH_OPTIONAL_FILTERS",
    /**
     * Get paginated surveys for a project with its id, using 'limit' and 'offset'. needs personalapikeyauth ('survey:read'). json output includes survey info, links, and metadata.
     */
    LIST_PAGINATED_SURVEYS_FOR_A_PROJECT: "POSTHOG_LIST_PAGINATED_SURVEYS_FOR_A_PROJECT",
    /**
     * List pipeline destination configurations for a given project by id, with optional pagination through 'limit' and 'offset' query parameters. returns details such as plugin info and delivery rates. authentication required.
     */
    LIST_PIPELINE_DESTINATION_CONFIGS_WITH_PAGINATION: "POSTHOG_LIST_PIPELINE_DESTINATION_CONFIGS_WITH_PAGINATION",
    /**
     * Retrieve paginated configurations for pipeline frontend apps associated with a specified project. query parameters 'limit' and 'offset' control pagination. requires a project id and personalapikeyauth for access. supports json responses.
     */
    LIST_PIPELINE_FRONTEND_APP_CONFIGS: "POSTHOG_LIST_PIPELINE_FRONTEND_APP_CONFIGS",
    /**
     * Projects for the current organization.
     */
    LIST_PROJECTS_IN_ORGANIZATION_WITH_PAGINATION: "POSTHOG_LIST_PROJECTS_IN_ORGANIZATION_WITH_PAGINATION",
    /**
     * Get paginated project actions with filters by format. query params: limit, offset. needs personalapikeyauth for read. includes id, name, description, metadata.
     */
    LIST_PROJECT_ACTIONS_WITH_PAGINATION_AND_FILTERS: "POSTHOG_LIST_PROJECT_ACTIONS_WITH_PAGINATION_AND_FILTERS",
    /**
     * Retrieve an indexed list of batch exports for a specified project with optional pagination. view export details, statuses, and pagination links. requires project id and supports personalapikeyauth.
     */
    LIST_PROJECT_BATCH_EXPORTS_WITH_PAGINATION: "POSTHOG_LIST_PROJECT_BATCH_EXPORTS_WITH_PAGINATION",
    /**
     * Retrieve logs for a specific plugin configuration within a project. supports pagination with limit and offset query parameters. requires project and plugin configuration ids. auth: personalapikeyauth with plugin:read scope.
     */
    LIST_PROJECT_CONFIGURATION_PLUGIN_LOGS: "POSTHOG_LIST_PROJECT_CONFIGURATION_PLUGIN_LOGS",
    /**
     * Get paginated dashboards for a project by id, using 'limit' and 'offset'. must authenticate with personalapikeyauth. includes count, pagination, and dashboard details.
     */
    LIST_PROJECT_DASHBOARDS_WITH_PAGINATION: "POSTHOG_LIST_PROJECT_DASHBOARDS_WITH_PAGINATION",
    /**
     * Get dashboard collaborators list in a project using project string id and dashboard integer id. requires personalapikeyauth and `dashboard:read` permission. returns details like access level and timestamps.
     */
    LIST_PROJECT_DASHBOARD_COLLABORATORS: "POSTHOG_LIST_PROJECT_DASHBOARD_COLLABORATORS",
    /**
     * "retrieve a paginated list of dashboard templates for a specified project. use 'limit' and 'offset' query parameters to control result pagination. requires project's id in the path and supports personalapikeyauth for security."
     */
    LIST_PROJECT_DASHBOARD_TEMPLATES: "POSTHOG_LIST_PROJECT_DASHBOARD_TEMPLATES",
    /**
     * Retrieve a paginated list of a project's early access features by id with 'limit' and 'offset' parameters. an api key is needed. includes feature info like creation date, stage, and documentation link.
     */
    LIST_PROJECT_EARLY_ACCESS_FEATURES: "POSTHOG_LIST_PROJECT_EARLY_ACCESS_FEATURES",
    /**
     * Get a paginated list of experiments within a project using 'limit' and 'offset' parameters. need a valid project id and 'experiment:read' permission. returns details like features and metrics.
     */
    LIST_PROJECT_EXPERIMENTS_WITH_PAGINATION: "POSTHOG_LIST_PROJECT_EXPERIMENTS_WITH_PAGINATION",
    /**
     * Retrieve a paginated list of export items for a specific project by id with optional 'limit' and 'offset' query parameters. requires personalapikeyauth for export:read permission. supports multiple export formats.
     */
    LIST_PROJECT_EXPORT_ITEMS_WITH_PAGINATION: "POSTHOG_LIST_PROJECT_EXPORT_ITEMS_WITH_PAGINATION",
    /**
     * Retrieve a list of group types within a specific project by providing the project id. this endpoint requires authentication with a personalapikey and grants read access to group data.
     */
    LIST_PROJECT_GROUP_TYPES_BY_ID: "POSTHOG_LIST_PROJECT_GROUP_TYPES_BY_ID",
    /**
     * Retrieve a list of project membership details for a specified project by id. members and their roles, such as member or admin, are included along with their join and update timestamps.
     */
    LIST_PROJECT_MEMBERSHIP_DETAILS: "POSTHOG_LIST_PROJECT_MEMBERSHIP_DETAILS",
    /**
     * Fetch paginated pipeline configuration list for a project by its id, utilizing optional `limit` and `offset`. endpoint returns json data.
     */
    LIST_PROJECT_PIPELINE_CONFIGURATIONS: "POSTHOG_LIST_PROJECT_PIPELINE_CONFIGURATIONS",
    /**
     * List pipeline import app configurations for a specified project, with pagination options 'limit' and 'offset'. requires a project id and supports personalapikeyauth for security. responds with json objects including configuration details.
     */
    LIST_PROJECT_PIPELINE_IMPORT_CONFIGS: "POSTHOG_LIST_PROJECT_PIPELINE_IMPORT_CONFIGS",
    /**
     * Retrieve a paginated list of plugin configurations for a specific project by project id. supports optional 'limit' & 'offset' query params for result batching. requires 'personalapikeyauth' for 'plugin:read' access.
     */
    LIST_PROJECT_PLUGIN_CONFIGURATIONS: "POSTHOG_LIST_PROJECT_PLUGIN_CONFIGURATIONS",
    /**
     * Retrieve a paginated list of session recordings for a specific project, including viewing times and user interactions. specify `project id`, and use optional `limit` and `offset` query parameters to control result set size and starting point.
     */
    LIST_PROJECT_SESSION_RECORDINGS: "POSTHOG_LIST_PROJECT_SESSION_RECORDINGS",
    /**
     * Retrieve a paginated list of subscriptions for a given project by its id. optional query params include 'limit' for results per page and 'offset' for results starting index. authentication is required. returns subscription details and navigation links.
     */
    LIST_PROJECT_SUBSCRIPTIONS_WITH_PAGINATION: "POSTHOG_LIST_PROJECT_SUBSCRIPTIONS_WITH_PAGINATION",
    /**
     * Retrieve a paginated list of role memberships for a specific role within an organization, including membership details. optional query parameters ‘limit’ and ‘offset’ control pagination; ‘organization id’ and ‘role id’ are path parameters.
     */
    LIST_ROLE_MEMBERSHIPS_PAGINATED: "POSTHOG_LIST_ROLE_MEMBERSHIPS_PAGINATED",
    /**
     * Retrieve a list of sharing configurations for a specific session recording in a project, including creation timestamps and access tokens. requires project and recording ids.
     */
    LIST_SESSION_RECORDING_SHARING_CONFIGS: "POSTHOG_LIST_SESSION_RECORDING_SHARING_CONFIGS",
    /**
     * List all groups of a specific group type. you must pass ?group type index= in the url. to get a list of valid group types, call /api/:project id/groups types/
     */
    LIST_SPECIFIC_TYPE_GROUPS_WITH_PAGINATION: "POSTHOG_LIST_SPECIFIC_TYPE_GROUPS_WITH_PAGINATION",
    /**
     * Retrieve a list of unused pipeline transformations for a specified organization, identified by uuid. includes details like name, plugin type, and configuration. supports json response format.
     */
    LIST_UNUSED_ORGANIZATION_PIPELINE_TRANSFORMATIONS: "POSTHOG_LIST_UNUSED_ORGANIZATION_PIPELINE_TRANSFORMATIONS",
    /**
     * Api endpoint fetches a user list with staff filter, pagination (limit, offset), and requires a personal api key. data includes uuids, emails, and organizational details.
     */
    LIST_USERS_WITH_STAFF_FILTER_AND_PAGINATION: "POSTHOG_LIST_USERS_WITH_STAFF_FILTER_AND_PAGINATION",
    /**
     * Learn to manage feature flags (creation, access, modification, removal) using posthog's docs, with options to use a javascript library or a dedicated endpoint for user-specific flag status.
     */
    MANAGE_FEATURE_FLAG_ENRICHMENT_FOR_USAGE_DASHBOARD: "POSTHOG_MANAGE_FEATURE_FLAG_ENRICHMENT_FOR_USAGE_DASHBOARD",
    /**
     * Learn to manage feature flags: create, read, update, delete, and check their status using the javascript library or an endpoint. consult the linked docs for details.
     */
    MANAGE_PROJECT_FEATURE_FLAGS: "POSTHOG_MANAGE_PROJECT_FEATURE_FLAGS",
    /**
     * Utilize feature flags to manage application features with creation, reading, updating, and deletion. consult posthog's docs or use their js library or endpoint for user-specific flag checks.
     */
    MANAGE_PROJECT_FEATURE_FLAGS_FOR_LOCAL_EVALUATION: "POSTHOG_MANAGE_PROJECT_FEATURE_FLAGS_FOR_LOCAL_EVALUATION",
    /**
     * Manage feature flags in your app with create, read, update, and delete options. use posthog's javascript library or endpoint to verify user access. see documentation for details.
     */
    MANAGE_USER_FEATURE_FLAGS: "POSTHOG_MANAGE_USER_FEATURE_FLAGS",
    /**
     * Hard delete of this model is not allowed. use a patch api call to set "deleted" to true
     */
    MARK_DASHBOARD_TEMPLATE_AS_DELETED: "POSTHOG_MARK_DASHBOARD_TEMPLATE_AS_DELETED",
    /**
     * The post endpoint marks an insight as viewed for a specified project, requires `project id` and `id`, supports `csv` or `json` formats, and returns fast-loading serialized data.
     */
    MARK_INSIGHT_AS_VIEWED_WITH_CONFIGURABLE_FORMAT: "POSTHOG_MARK_INSIGHT_AS_VIEWED_WITH_CONFIGURABLE_FORMAT",
    /**
     * Hard delete of this model is not allowed. use a patch api call to set "deleted" to true
     */
    MARK_PROJECT_ACTION_AS_DELETED: "POSTHOG_MARK_PROJECT_ACTION_AS_DELETED",
    /**
     * Hard delete of this model is not allowed. use a patch api call to set "deleted" to true
     */
    MARK_SESSION_RECORDING_PLAYLIST_DELETED: "POSTHOG_MARK_SESSION_RECORDING_PLAYLIST_DELETED",
    /**
     * Hard delete of this model is not allowed. use a patch api call to set "deleted" to true
     */
    MARK_SUBSCRIPTION_AS_DELETED_BY_ID: "POSTHOG_MARK_SUBSCRIPTION_AS_DELETED_BY_ID",
    /**
     * Put /api/organizations/{id}/: update organization details by providing a uuid as 'id'. supports json, form-urlencoded, multipart/form-data. requires 'organization:write' permission. returns updated organization data.
     */
    MODIFY_ORG_INFO_VIA_UUID: "POSTHOG_MODIFY_ORG_INFO_VIA_UUID",
    /**
     * Endpoint to move a tile within a dashboard by `id`. requires `project id`, accepts json/form-data (e.g., `name`, `pinned`), and returns updated dashboard info.
     */
    MOVE_DASHBOARD_TILE: "POSTHOG_MOVE_DASHBOARD_TILE",
    /**
     * Update plugin configuration partially for a specified project using patch on '/api/projects/{project id}/plugin configs/{id}'. requires plugin write authority. accepts json, form data, and multipart. returns updated plugin config details.
     */
    PARTIALLY_UPDATE_PROJECT_PLUGIN_CONFIG: "POSTHOG_PARTIALLY_UPDATE_PROJECT_PLUGIN_CONFIG",
    /**
     * Patch /api/projects/{project id}/property definitions/{id}/: partially update a specific property definition by uuid in a project. requires property definition:write auth. no response body.
     */
    PARTIALLY_UPDATE_PROJECT_PROPERTY_DEFINITION: "POSTHOG_PARTIALLY_UPDATE_PROJECT_PROPERTY_DEFINITION",
    /**
     * Endpoint enables partial updates to an experiment in a project using patch, needing `project id`, `experiment id`, and various payload types. returns updated details. authentication is mandatory.
     */
    PARTIAL_EXPERIMENT_UPDATE_IN_PROJECT: "POSTHOG_PARTIAL_EXPERIMENT_UPDATE_IN_PROJECT",
    /**
     * Patch method to partially update config of a pipeline frontend app for a project by id. requires write permission on plugin. accepts json, form-data; returns updated config details.
     */
    PARTIAL_PIPELINE_FRONTEND_APP_CONFIG_UPDATE: "POSTHOG_PARTIAL_PIPELINE_FRONTEND_APP_CONFIG_UPDATE",
    /**
     * The patch endpoint supports partial insight updates in a project, allows format specification (csv/json), and requires `personalapikeyauth` and `insight:write` scope for access.
     */
    PARTIAL_UPDATE_OF_A_PROJECT_INSIGHT: "POSTHOG_PARTIAL_UPDATE_OF_A_PROJECT_INSIGHT",
    /**
     * Endpoint patch /api/projects/{project id}/dashboards/{id}: allows partial update of a project's dashboard with specified id. accepts json, form data, and provides a detailed response schema based on user license. requires dashboard write access.
     */
    PARTIAL_UPDATE_OF_A_PROJECT_S_DASHBOARD: "POSTHOG_PARTIAL_UPDATE_OF_A_PROJECT_S_DASHBOARD",
    /**
     * Learn to manage feature flags (create, read, update, delete) using posthog's docs, with options for javascript library use or dedicated endpoints for user flag status.
     */
    PARTIAL_UPDATE_OF_A_PROJECT_S_FEATURE_FLAG: "POSTHOG_PARTIAL_UPDATE_OF_A_PROJECT_S_FEATURE_FLAG",
    /**
     * The api for interacting with notebooks. this feature is in early access and the api can have breaking changes without announcement.
     */
    PARTIAL_UPDATE_OF_PROJECT_NOTEBOOK: "POSTHOG_PARTIAL_UPDATE_OF_PROJECT_NOTEBOOK",
    /**
     * Create, read, update and delete annotations. [see docs](https://posthog.com/docs/user-guides/annotations) for more information on annotations.
     */
    PARTIAL_UPDATE_PROJECT_ANNOTATION: "POSTHOG_PARTIAL_UPDATE_PROJECT_ANNOTATION",
    /**
     * Post `/api/projects/{project id}/session recordings/{id}/persist`: endpoint for persisting session recording data identified by uuid. requires `project id` and accepts json containing various read-only session metrics. responds with session data.
     */
    PERSIST_SESSION_RECORDING_DATA_BY_UUID: "POSTHOG_PERSIST_SESSION_RECORDING_DATA_BY_UUID",
    /**
     * This endpoint allows reading and deleting individuals. for creation or updates, use the capture api, `$set`/`$unset` properties, or sdks.
     */
    PERSON_PARTIAL_UPDATE_VIA_PROJECT_ID: "POSTHOG_PERSON_PARTIAL_UPDATE_VIA_PROJECT_ID",
    /**
     * This endpoint is for reading and deleting user data. use the capture api, `$set`/`$unset`, or sdks for creating/updating users.
     */
    PERSON_PROPERTY_DELETION_ENDPOINT: "POSTHOG_PERSON_PROPERTY_DELETION_ENDPOINT",
    /**
     * Hard delete of this model is not allowed. use a patch api call to set "deleted" to true
     */
    PREVENT_HARD_DELETE_NOTEBOOK_BY_FLAGGING: "POSTHOG_PREVENT_HARD_DELETE_NOTEBOOK_BY_FLAGGING",
    /**
     * The `/api/projects/{project id}/insights/trend/` endpoint provides project trends in csv/json, requires `project id` and optional parameters, and needs 'personalapikeyauth'. it outputs event data and cache status.
     */
    PROJECT_TREND_ANALYTICS: "POSTHOG_PROJECT_TREND_ANALYTICS",
    /**
     * Patch /api/projects/{project id}/pipeline frontend apps configs/rearrange/: rearrange the config of frontend apps in a project's pipeline. requires project id in the path and a json object in the request body. responds with updated config details.
     */
    REARRANGE_FRONTEND_APP_PIPELINE_CONFIGS: "POSTHOG_REARRANGE_FRONTEND_APP_PIPELINE_CONFIGS",
    /**
     * Endpoint `/api/projects/{project id}/pipeline transformation configs/rearrange/` allows for partial updates to the arrangement of pipeline configurations for a given project. accepts patch requests with necessary parameters and the project id in the path.
     */
    REARRANGE_PIPELINE_TRANSFORMATION_CONFIGS: "POSTHOG_REARRANGE_PIPELINE_TRANSFORMATION_CONFIGS",
    /**
     * Rearrange app import settings in a project using patch /api/projects/{project id}/... by updating plug-in order and status. requires `project id` and a json with configurations.
     */
    REARRANGE_PROJECT_IMPORT_APP_CONFIGURATIONS: "POSTHOG_REARRANGE_PROJECT_IMPORT_APP_CONFIGURATIONS",
    /**
     * "patch /api/projects/{project id}/pipeline destination configs/rearrange/": adjust order and settings of pipeline destinations for a project by project id. requires json body with plugin, enabled state, etc. returns updated configuration.
     */
    REARRANGE_PROJECT_PIPELINE_DESTINATION_CONFIGS: "POSTHOG_REARRANGE_PROJECT_PIPELINE_DESTINATION_CONFIGS",
    /**
     * Patch endpoint to reconfigure the order of plugins within a project by project id. supports json, form, and multipart bodies to update plugin order and status.
     */
    RECONFIGURE_PLUGIN_ORDER_AND_STATUS_IN_PROJECT: "POSTHOG_RECONFIGURE_PLUGIN_ORDER_AND_STATUS_IN_PROJECT",
    /**
     * Delete a specific domain by its uuid within an organization, given valid organization and domain ids. requires 'organization:write' permission; no response body on success (204).
     */
    REMOVE_DOMAIN_BY_UUID_FROM_ORGANIZATION: "POSTHOG_REMOVE_DOMAIN_BY_UUID_FROM_ORGANIZATION",
    /**
     * Delete an early access feature by id from a specified project. requires a uuid for the feature and the project's id. authentication via personalapikeyauth is necessary. no response body upon success.
     */
    REMOVE_EARLY_ACCESS_FEATURE_FROM_PROJECT: "POSTHOG_REMOVE_EARLY_ACCESS_FEATURE_FROM_PROJECT",
    /**
     * Delete a specific user (by uuid) from the explicit members of a given project. requires 'project id' and member's 'parent membership  user  uuid'. returns 204 on success with no response body.
     */
    REMOVE_EXPLICIT_PROJECT_MEMBER_BY_UUID: "POSTHOG_REMOVE_EXPLICIT_PROJECT_MEMBER_BY_UUID",
    /**
     * Delete /api/projects/{project id}/feature flags/{feature flag id}/role access/{id}: remove role access from a feature flag in a project by id, requiring authorization. expect no response body upon success (204).
     */
    REMOVE_FEATURE_FLAG_ROLE_ACCESS_BY_ID: "POSTHOG_REMOVE_FEATURE_FLAG_ROLE_ACCESS_BY_ID",
    /**
     * Delete /api/organizations/{org id}/members/{user uuid}: removes a specific member from an organization using uuids for both entities. requires 'organization member:write' permission; returns 204 with no content on success.
     */
    REMOVE_MEMBER_FROM_ORGANIZATION_BY_UUID: "POSTHOG_REMOVE_MEMBER_FROM_ORGANIZATION_BY_UUID",
    /**
     * Delete a specific batch export by its uuid in an organization. requires personalapikeyauth with batch export:write permission. returns 204 on success with no response body.
     */
    REMOVE_ORGANIZATION_BATCH_EXPORT_BY_UUID: "POSTHOG_REMOVE_ORGANIZATION_BATCH_EXPORT_BY_UUID",
    /**
     * Delete a specific pipeline destination in an organization by id. requires an integer 'id' of the destination, and the organization's 'uuid'. auth: personalapikey with plugin:write. no return body on success (204).
     */
    REMOVE_ORGANIZATION_PIPELINE_DESTINATION: "POSTHOG_REMOVE_ORGANIZATION_PIPELINE_DESTINATION",
    /**
     * Delete a specific pipeline transformation plugin for an organization by id. requires a uuid for the organization and an integer for the plugin. auth: personalapikey with write access. no response body on success (204).
     */
    REMOVE_ORGANIZATION_PIPELINE_TRANSFORMATION: "POSTHOG_REMOVE_ORGANIZATION_PIPELINE_TRANSFORMATION",
    /**
     * Delete a specific plugin (by its integer id) from the organization (identified by uuid) with no response body on success. requires plugin:write authorization via personalapikeyauth.
     */
    REMOVE_ORGANIZATION_PLUGIN_BY_ID: "POSTHOG_REMOVE_ORGANIZATION_PLUGIN_BY_ID",
    /**
     * Delete a proxy record by id for a specific organization. requires an authenticated user with 'organization:write' permission. on success, it responds with a 204 status and no content.
     */
    REMOVE_ORGANIZATION_PROXY_RECORD: "POSTHOG_REMOVE_ORGANIZATION_PROXY_RECORD",
    /**
     * Delete a role with a specific uuid in an organization. requires 'organization:write' permission. no response body on success (204). path parameters include 'id' and 'organization id'.
     */
    REMOVE_ORGANIZATION_ROLE_BY_ID: "POSTHOG_REMOVE_ORGANIZATION_ROLE_BY_ID",
    /**
     * Delete a specific pipeline import app plugin associated with an organization by id. requires a personal api key with write permissions for plugins. responds with no content on success (204).
     */
    REMOVE_ORG_PIPELINE_IMPORT_APP_BY_ID: "POSTHOG_REMOVE_ORG_PIPELINE_IMPORT_APP_BY_ID",
    /**
     * Delete a pipeline destination configuration by specifying a unique integer id within a project. requires 'plugin:write' permission via personalapikeyauth. no response body on success (204). project id is mandatory.
     */
    REMOVE_PIPELINE_DESTINATION_CONFIG: "POSTHOG_REMOVE_PIPELINE_DESTINATION_CONFIG",
    /**
     * Delete a specific pipeline frontend app by its id within an organization. requires the organization id (uuid) and the app's integer id. auth: personalapikeyauth with plugin:write scope. no response body on success (204).
     */
    REMOVE_PIPELINE_FRONTEND_APP_BY_ID: "POSTHOG_REMOVE_PIPELINE_FRONTEND_APP_BY_ID",
    /**
     * Delete a pipeline frontend app configuration for a specific project. requires 'project id' and config 'id' in the path and 'plugin:write' permissions. responds with 204 on success without a body.
     */
    REMOVE_PIPELINE_FRONTEND_APP_CONFIG: "POSTHOG_REMOVE_PIPELINE_FRONTEND_APP_CONFIG",
    /**
     * Delete a specific pipeline import app configuration using its id within a project. requires project id and config id, and auth via personalapikeyauth with plugin write access. no response body on success (204).
     */
    REMOVE_PIPELINE_IMPORT_APP_CONFIG: "POSTHOG_REMOVE_PIPELINE_IMPORT_APP_CONFIG",
    /**
     * Delete a specific pipeline transformation configuration by id within a project. requires the project id and configuration id. secured by personalapikeyauth with plugin:write access. no response body upon success (204).
     */
    REMOVE_PIPELINE_TRANSFORMATION_CONFIG_BY_ID: "POSTHOG_REMOVE_PIPELINE_TRANSFORMATION_CONFIG_BY_ID",
    /**
     * Remove a collaborator from a project dashboard. provide the project id, dashboard id, and user's uuid. requires 'dashboard:write' permissions. expect no response body on success (204). project id guidance at '/api/projects/'.
     */
    REMOVE_PROJECT_DASHBOARD_COLLABORATOR: "POSTHOG_REMOVE_PROJECT_DASHBOARD_COLLABORATOR",
    /**
     * Delete an event definition by providing its uuid and the associated project id. requires `event definition:write` permission. successful deletion returns no content (204 status).
     */
    REMOVE_PROJECT_EVENT_DEFINITION: "POSTHOG_REMOVE_PROJECT_EVENT_DEFINITION",
    /**
     * Delete a specific experiment by its unique integer id within a project. requires a project id and personal api key with experiment write permission. no response body upon success.
     */
    REMOVE_PROJECT_EXPERIMENT_BY_ID: "POSTHOG_REMOVE_PROJECT_EXPERIMENT_BY_ID",
    /**
     * Delete /api/projects/{project id}/plugin configs/{id}/: removes a specific plugin configuration by id from a given project. requires 'plugin:write' permissions and project id. returns 204 with no body on success.
     */
    REMOVE_PROJECT_PLUGIN_CONFIGURATION: "POSTHOG_REMOVE_PROJECT_PLUGIN_CONFIGURATION",
    /**
     * Delete a property definition by providing its uuid and the associated project id. requires 'property definition:write' permission. on success, no response body is returned (204).
     */
    REMOVE_PROPERTY_DEFINITION_BY_UUID: "POSTHOG_REMOVE_PROPERTY_DEFINITION_BY_UUID",
    /**
     * Delete /api/organizations/{org id}/roles/{role id}/role memberships/{id}: removes a role membership from an organization using a specific uuid. requires write access. returns 204 on success.
     */
    REMOVE_ROLE_MEMBERSHIP_BY_UUID: "POSTHOG_REMOVE_ROLE_MEMBERSHIP_BY_UUID",
    /**
     * Delete a session recording from a playlist using its id within a specified project. requires project id, short id, and session recording id in the path. returns no content on success (204).
     */
    REMOVE_SESSION_RECORDING_FROM_PLAYLIST: "POSTHOG_REMOVE_SESSION_RECORDING_FROM_PLAYLIST",
    /**
     * Delete a specific batch export by providing the uuid and project id. requires a personal api key with 'batch export:write' permissions. responds with no body upon successful deletion (http 204).
     */
    REMOVE_SPECIFIC_PROJECT_BATCH_EXPORT: "POSTHOG_REMOVE_SPECIFIC_PROJECT_BATCH_EXPORT",
    /**
     * (experimental)
     */
    REMOVE_SPECIFIC_PROJECT_QUERY: "POSTHOG_REMOVE_SPECIFIC_PROJECT_QUERY",
    /**
     * This endpoint is for reading and deleting persons. use the capture api, `$set`/`$unset` properties, or sdks for creating/updating persons.
     */
    RETRIEVE_AND_DELETE_PROJECT_PERSON_TRENDS: "POSTHOG_RETRIEVE_AND_DELETE_PROJECT_PERSON_TRENDS",
    /**
     * Retrieve app-specific metrics for a given project by providing the project id and app metric id. requires a personal api key with plugin:read access. no response body provided upon success (200).
     */
    RETRIEVE_APP_METRICS_BY_IDS: "POSTHOG_RETRIEVE_APP_METRICS_BY_IDS",
    /**
     * Retrieves detailed error information for a specific app metric by id within a project. requires project id and metric's integer id as path parameters. no response body for a successful query.
     */
    RETRIEVE_APP_METRICS_ERROR_DETAILS: "POSTHOG_RETRIEVE_APP_METRICS_ERROR_DETAILS",
    /**
     * (experimental)
     */
    RETRIEVE_ASYNC_QUERY_STATUS_BY_ID: "POSTHOG_RETRIEVE_ASYNC_QUERY_STATUS_BY_ID",
    /**
     * Retrieve details of a specific batch export by its uuid in a project. requires project id and batch export id. supports personalapikeyauth and responds with export details including destination, interval, and status.
     */
    RETRIEVE_BATCH_EXPORT_DETAILS: "POSTHOG_RETRIEVE_BATCH_EXPORT_DETAILS",
    /**
     * Retrieve logs for a specific batch export given by uuid within an organization. essential for tracking export status, errors, and configurations. supports json responses detailing export properties and history.
     */
    RETRIEVE_BATCH_EXPORT_LOGS_BY_UUID: "POSTHOG_RETRIEVE_BATCH_EXPORT_LOGS_BY_UUID",
    /**
     * Retrieve logs for a specific batch export run within a project. requires `project id`, `batch export id`, and `id` (all uuids). the endpoint returns run status, error info, record count, and timestamps.
     */
    RETRIEVE_BATCH_EXPORT_RUN_LOGS: "POSTHOG_RETRIEVE_BATCH_EXPORT_RUN_LOGS",
    /**
     * Retrieve activity details for a specific cohort within a project. requires a project id and cohort id, returning status, filters, query, and creator data. auth: personalapikeyauth with 'activity log:read' scope.
     */
    RETRIEVE_COHORT_ACTIVITY_DETAILS: "POSTHOG_RETRIEVE_COHORT_ACTIVITY_DETAILS",
    /**
     * Retrieve details of persons within a cohort by its unique id in the specified project. the endpoint supports json and csv formats and requires authorization. project and cohort ids must be provided.
     */
    RETRIEVE_COHORT_PERSON_DETAILS: "POSTHOG_RETRIEVE_COHORT_PERSON_DETAILS",
    /**
     * Fetch specific dashboard template details by uuid in a project with 'dashboard template:read' rights using a personalapikeyauth. returns name, description, filters, and creation info.
     */
    RETRIEVE_DASHBOARD_TEMPLATE_DETAILS_BY_UUID: "POSTHOG_RETRIEVE_DASHBOARD_TEMPLATE_DETAILS_BY_UUID",
    /**
     * Retrieve the json schema for dashboard templates of a specific project. pass the project id in the path and receive details such as template name, description, filters, and more. supports get requests.
     */
    RETRIEVE_DASHBOARD_TEMPLATE_SCHEMA: "POSTHOG_RETRIEVE_DASHBOARD_TEMPLATE_SCHEMA",
    /**
     * Retrieve definitions for events within a specified project by providing the unique project id. requires personalapikeyauth privileges for event definition:read. no response body provided upon a successful call.
     */
    RETRIEVE_EVENT_DEFINITIONS_BY_PROJECT_ID: "POSTHOG_RETRIEVE_EVENT_DEFINITIONS_BY_PROJECT_ID",
    /**
     * Retrieve an event definition by its uuid within a specified project. requires a project id and an event definition id, with access secured by personalapikeyauth. (get /api/projects/{project id}/event definitions/{id})
     */
    RETRIEVE_EVENT_DEFINITION_BY_UUID: "POSTHOG_RETRIEVE_EVENT_DEFINITION_BY_UUID",
    /**
     * Retrieve details for experiments that require feature flag implementation in a specific project. requires a valid 'project id' and user must have 'experiment:read' permission. returns information like experiment names, dates, flags, and creation data.
     */
    RETRIEVE_EXPERIMENTS_REQUIRING_FLAG_IMPLEMENTATION: "POSTHOG_RETRIEVE_EXPERIMENTS_REQUIRING_FLAG_IMPLEMENTATION",
    /**
     * Access detailed experiment info within a project using unique `experiment id` & `project id`, with 'experiment:read' rights. response includes dates, feature flag key, metrics, creator details.
     */
    RETRIEVE_EXPERIMENT_DETAILS_BY_IDS: "POSTHOG_RETRIEVE_EXPERIMENT_DETAILS_BY_IDS",
    /**
     * Retrieve the configuration for unsubscribing from exports in the pipeline import apps for a specific organization. requires an organization uuid in the path. returns various properties including ids, plugin types, and metadata as a json object.
     */
    RETRIEVE_EXPORT_UNSUBSCRIBE_CONFIGS: "POSTHOG_RETRIEVE_EXPORT_UNSUBSCRIBE_CONFIGS",
    /**
     * Learn to manage feature flags by creating, reading, updating, and deleting them. use posthog's javascript library or endpoint for application integration. details in the [docs](https://posthog.com/docs/user-guides/feature-flags).
     */
    RETRIEVE_FEATURE_FLAGS_ACTIVITY_LOG: "POSTHOG_RETRIEVE_FEATURE_FLAGS_ACTIVITY_LOG",
    /**
     * Manage feature flags—create, read, update, delete—using the posthog javascript library or endpoint for user-specific flag status. (more in docs).
     */
    RETRIEVE_FEATURE_FLAGS_EVALUATION_REASONS: "POSTHOG_RETRIEVE_FEATURE_FLAGS_EVALUATION_REASONS",
    /**
     * Manage feature flags (creation, reading, updating, and deleting) using posthog's guides or via javascript library/endpoint for user-specific flag status. [details](https://posthog.com/docs/user-guides/feature-flags)
     */
    RETRIEVE_FEATURE_FLAG_ACTIVITY_DETAILS: "POSTHOG_RETRIEVE_FEATURE_FLAG_ACTIVITY_DETAILS",
    /**
     * This guide details how to manage (create, read, update, delete) feature flags in applications using posthog's javascript library or endpoint. for more info, visit the provided documentation.
     */
    RETRIEVE_FEATURE_FLAG_DETAILS: "POSTHOG_RETRIEVE_FEATURE_FLAG_DETAILS",
    /**
     * Retrieve details for a specific role's access to a feature flag within a project. requires 'feature flag id', 'id' for role access, and 'project id'. returns a json object with access details.
     */
    RETRIEVE_FEATURE_FLAG_ROLE_ACCESS_DETAILS: "POSTHOG_RETRIEVE_FEATURE_FLAG_ROLE_ACCESS_DETAILS",
    /**
     * Get property definitions for a project using project id, with filters for event names, property types, exclusions, and numerical or feature flags. also, view properties relevant to specific events.
     */
    RETRIEVE_FILTERED_PROJECT_PROPERTY_DEFINITIONS: "POSTHOG_RETRIEVE_FILTERED_PROJECT_PROPERTY_DEFINITIONS",
    /**
     * Gain insights from funnel analysis of a specific project by providing its id and having 'insight:read' permission. supports json/csv formats and offers detailed info like creation, modification, and dashboards quickly.
     */
    RETRIEVE_FUNNEL_INSIGHTS_IN_PROJECT: "POSTHOG_RETRIEVE_FUNNEL_INSIGHTS_IN_PROJECT",
    /**
     * Retrieve property definitions for a group within a project by providing the project id. this endpoint returns details like group type index, key, and creation time in json format.
     */
    RETRIEVE_GROUP_PROPERTY_DEFINITIONS_BY_PROJECT_ID: "POSTHOG_RETRIEVE_GROUP_PROPERTY_DEFINITIONS_BY_PROJECT_ID",
    /**
     * Retrieve property values by 'group type index' and 'key' within a 'project id'. parameters must be provided. output is a json with property details and creation timestamp.
     */
    RETRIEVE_GROUP_PROPERTY_VALUES_BY_INDEX_AND_KEY: "POSTHOG_RETRIEVE_GROUP_PROPERTY_VALUES_BY_INDEX_AND_KEY",
    /**
     * Retrieve user's hedgehog configuration details by their uuid. this endpoint requires the user's uuid as a path parameter and returns various user-related settings such as email, team info, timezone, and more in json format. supports get requests.
     */
    RETRIEVE_HEDGEHOG_CONFIGURATION_BY_UUID: "POSTHOG_RETRIEVE_HEDGEHOG_CONFIGURATION_BY_UUID",
    /**
     * Retrieve historical export data for app metrics by supplying the `project id` and `plugin config id`. requires `plugin:read` permission. no response body provided upon a successful request.
     */
    RETRIEVE_HISTORICAL_APP_METRICS_EXPORT: "POSTHOG_RETRIEVE_HISTORICAL_APP_METRICS_EXPORT",
    /**
     * Retrieve a log of important changes for a specified project. requires a `project id` and returns details about the change, including user info, read status, and timestamps. use `/api/projects/{project id}` to obtain project ids.
     */
    RETRIEVE_IMPORTANT_PROJECT_ACTIVITY_LOG: "POSTHOG_RETRIEVE_IMPORTANT_PROJECT_ACTIVITY_LOG",
    /**
     * Retrieve sharing configurations for a specific insight within a project, requiring project and insight ids. validates access via personalapikeyauth. returns data such as creation time and access tokens.
     */
    RETRIEVE_INSIGHT_SHARING_CONFIGURATIONS: "POSTHOG_RETRIEVE_INSIGHT_SHARING_CONFIGURATIONS",
    /**
     * Returns basic details about the last 5 insights viewed by this user. most recently viewed first.
     */
    RETRIEVE_LAST_VIEWED_INSIGHTS_FOR_USER: "POSTHOG_RETRIEVE_LAST_VIEWED_INSIGHTS_FOR_USER",
    /**
     * Retrieves event ids matching a filter with one session id and at least one event/action criterion. intended for internal use and may have sudden changes.
     */
    RETRIEVE_MATCHING_EVENTS_FOR_SESSION_RECORDING: "POSTHOG_RETRIEVE_MATCHING_EVENTS_FOR_SESSION_RECORDING",
    /**
     * The api for interacting with notebooks. this feature is in early access and the api can have breaking changes without announcement.
     */
    RETRIEVE_NOTEBOOK_ACTIVITY_FOR_PROJECT: "POSTHOG_RETRIEVE_NOTEBOOK_ACTIVITY_FOR_PROJECT",
    /**
     * The api for interacting with notebooks. this feature is in early access and the api can have breaking changes without announcement.
     */
    RETRIEVE_NOTEBOOK_ACTIVITY_LOG: "POSTHOG_RETRIEVE_NOTEBOOK_ACTIVITY_LOG",
    /**
     * The api for interacting with notebooks. this feature is in early access and the api can have breaking changes without announcement.
     */
    RETRIEVE_NOTEBOOK_DETAILS: "POSTHOG_RETRIEVE_NOTEBOOK_DETAILS",
    /**
     * Retrieve pipeline frontend app details for an organization using its 'organization id' (uuid). response includes id, plugin type, name, url in json format, covering various plugin types.
     */
    RETRIEVE_ORGANIZATION_PIPELINE_FRONTEND_APP: "POSTHOG_RETRIEVE_ORGANIZATION_PIPELINE_FRONTEND_APP",
    /**
     * Retrieve unsubscribe config details for an organization's pipeline frontend apps. requires an organization id (uuid). returns json with config data including plugin types and more.
     */
    RETRIEVE_ORGANIZATION_PIPELINE_UNSUBSCRIBE_CONFIGS: "POSTHOG_RETRIEVE_ORGANIZATION_PIPELINE_UNSUBSCRIBE_CONFIGS",
    /**
     * Retrieve activity details for plugins in a specified organization by id. supports various plugin types, including local, custom, and repository. response includes plugin's id, name, type, and relevant metrics. requires a valid uuid for 'organization id'.
     */
    RETRIEVE_ORGANIZATION_PLUGIN_ACTIVITY: "POSTHOG_RETRIEVE_ORGANIZATION_PLUGIN_ACTIVITY",
    /**
     * Retrieve a specific plugin's details for an organization. requires the plugin's integer id and the organization's uuid. only returns plugin info if authenticated with 'plugin:read' permission. responds with plugin data in json format.
     */
    RETRIEVE_ORGANIZATION_PLUGIN_DETAILS: "POSTHOG_RETRIEVE_ORGANIZATION_PLUGIN_DETAILS",
    /**
     * Retrieve plugin repository details for a specific organization by its uuid, including plugin type, name, url, and more. accessible via get request to '/api/organizations/{organization id}/plugins/repository/'.
     */
    RETRIEVE_ORGANIZATION_PLUGIN_REPOSITORY_DETAILS: "POSTHOG_RETRIEVE_ORGANIZATION_PLUGIN_REPOSITORY_DETAILS",
    /**
     * Retrieve plugin export unsubscribe configurations for a specified organization by organization id. supports local, custom, repository, source, and inline plugin types, providing details like name, description, url, and icon.
     */
    RETRIEVE_ORGANIZATION_PLUGIN_UNSUBSCRIBE_CONFIGS: "POSTHOG_RETRIEVE_ORGANIZATION_PLUGIN_UNSUBSCRIBE_CONFIGS",
    /**
     * Projects for the current organization.
     */
    RETRIEVE_ORGANIZATION_PROJECT_DETAILS: "POSTHOG_RETRIEVE_ORGANIZATION_PROJECT_DETAILS",
    /**
     * Retrieve the details of a specific role within an organization using its uuid. requires the organization's uuid and role's uuid in the path and is protected by personalapikeyauth with 'organization:read' scope. returns role data in json.
     */
    RETRIEVE_ORGANIZATION_ROLE_DETAILS: "POSTHOG_RETRIEVE_ORGANIZATION_ROLE_DETAILS",
    /**
     * Retrieve details for repository pipeline destinations within a specific organization by its uuid. returns objects like id, name, and urls with support for various plugin types (local, custom, etc.).
     */
    RETRIEVE_ORGANIZATION_S_PIPELINE_REPOSITORY_DETAILS: "POSTHOG_RETRIEVE_ORGANIZATION_S_PIPELINE_REPOSITORY_DETAILS",
    /**
     * Retrieve unused pipeline import apps for a specified organization. endpoint requires an organization id (uuid) and returns details like plugin type, name, description, and more in json format.
     */
    RETRIEVE_ORGANIZATION_S_UNUSED_PIPELINE_APPS: "POSTHOG_RETRIEVE_ORGANIZATION_S_UNUSED_PIPELINE_APPS",
    /**
     * Retrieve pipeline transformation activity details for a specific organization using its uuid. returns data such as plugin type, name, description, and related metrics. requires 'organization id' in url path.
     */
    RETRIEVE_ORG_PIPELINE_TRANSFORMATION_ACTIVITY: "POSTHOG_RETRIEVE_ORG_PIPELINE_TRANSFORMATION_ACTIVITY",
    /**
     * This endpoint is for reading and deleting person data; use the capture api, `$set`/`$unset` properties, or sdks for creation and updates.
     */
    RETRIEVE_OR_DELETE_PERSON_RETENTION_DATA: "POSTHOG_RETRIEVE_OR_DELETE_PERSON_RETENTION_DATA",
    /**
     * This api endpoint is for reading and deleting user data. use the capture api, `$set` and `$unset` properties, or sdks for creating/updating users.
     */
    RETRIEVE_OR_DELETE_PROJECT_PERSONS_FUNNEL_DATA: "POSTHOG_RETRIEVE_OR_DELETE_PROJECT_PERSONS_FUNNEL_DATA",
    /**
     * Retrieve a paginated list of organizations with optional 'limit' and 'offset' query parameters. the response includes organization details like id, name, and membership level, with secure access controlled via personalapikeyauth.
     */
    RETRIEVE_PAGINATED_ORGANIZATION_LIST: "POSTHOG_RETRIEVE_PAGINATED_ORGANIZATION_LIST",
    /**
     * This endpoint is for reading and deleting persons. use the capture api, `$set` and `$unset` properties, or sdks for creating or updating persons.
     */
    RETRIEVE_PERSONS_FUNNEL_CORRELATION_DATA: "POSTHOG_RETRIEVE_PERSONS_FUNNEL_CORRELATION_DATA",
    /**
     * This endpoint is used to read and delete persons. for creating or updating, use the capture api, `$set` and `$unset` properties, or sdks.
     */
    RETRIEVE_PERSON_DETAILS_BY_ID: "POSTHOG_RETRIEVE_PERSON_DETAILS_BY_ID",
    /**
     * This endpoint allows reading and deleting persons; for creation or updates, use the capture api, the `$set` and `$unset` properties, or sdks.
     */
    RETRIEVE_PERSON_DETAILS_BY_PROJECT: "POSTHOG_RETRIEVE_PERSON_DETAILS_BY_PROJECT",
    /**
     * This endpoint is for reading and deleting persons. use the capture api, property methods, or sdks for creating or updating persons.
     */
    RETRIEVE_PERSON_LIFECYCLE_DETAILS: "POSTHOG_RETRIEVE_PERSON_LIFECYCLE_DETAILS",
    /**
     * This endpoint allows reading and deleting individuals. use the capture api, `$set` and `$unset` properties, or sdks for creating or updating persons.
     */
    RETRIEVE_PERSON_PROPERTIES_TIMELINE: "POSTHOG_RETRIEVE_PERSON_PROPERTIES_TIMELINE",
    /**
     * This endpoint is for reading and deleting persons; for creating/updating, use the capture api, `$set`/`$unset` properties, or sdks.
     */
    RETRIEVE_PERSON_S_ACTIVITY_AND_DELETE_OPTIONS: "POSTHOG_RETRIEVE_PERSON_S_ACTIVITY_AND_DELETE_OPTIONS",
    /**
     * This endpoint is for reading and deleting persons. for creation or updates, use the [capture api](https://posthog.com/docs/api/capture), `$set`/`$unset`, or sdks.
     */
    RETRIEVE_PERSON_VALUES_BY_PROJECT: "POSTHOG_RETRIEVE_PERSON_VALUES_BY_PROJECT",
    /**
     * Retrieve activity details for pipeline destinations within an organization. required: uuid-formatted `organization id`. outputs application/json with attributes: id, latest tag, etc. supports `get` requests.
     */
    RETRIEVE_PIPELINE_DESTINATION_ACTIVITY: "POSTHOG_RETRIEVE_PIPELINE_DESTINATION_ACTIVITY",
    /**
     * Retrieve details of a specific pipeline destination config for a project by its id. requires project id and destination config id. supports personalapikeyauth for read access. responds with config details including plugin info, status, and timestamps.
     */
    RETRIEVE_PIPELINE_DESTINATION_CONFIG_DETAILS: "POSTHOG_RETRIEVE_PIPELINE_DESTINATION_CONFIG_DETAILS",
    /**
     * Fetch a pipeline destination's details by id and organization uuid, using a personalapikeyauth with read access to plugins. returns json with plugin info.
     */
    RETRIEVE_PIPELINE_DESTINATION_DETAILS: "POSTHOG_RETRIEVE_PIPELINE_DESTINATION_DETAILS",
    /**
     * Retrieve configuration details for a specific pipeline destination in a project by getting the frontend data of the config with a given id. this endpoint requires the 'project id' and 'id' of the config.
     */
    RETRIEVE_PIPELINE_DESTINATION_FRONTEND_CONFIG: "POSTHOG_RETRIEVE_PIPELINE_DESTINATION_FRONTEND_CONFIG",
    /**
     * Retrieve details of a specific pipeline destination plugin within an organization by its unique id. the response includes various properties like name, description, url, and plugin type for the given organization uuid.
     */
    RETRIEVE_PIPELINE_DESTINATION_PLUGIN_DETAILS: "POSTHOG_RETRIEVE_PIPELINE_DESTINATION_PLUGIN_DETAILS",
    /**
     * Retrieve activity details for pipeline front-end apps within a specified organization by organization id. returns json object with app properties such as id, type, name, and configuration. uuid path parameter required.
     */
    RETRIEVE_PIPELINE_FRONTEND_APP_ACTIVITY: "POSTHOG_RETRIEVE_PIPELINE_FRONTEND_APP_ACTIVITY",
    /**
     * Retrieves details of a specified pipeline frontend app within an organization. requires plugin read access and organization id (uuid), and app id (integer) as path parameters. returns json with app information.
     */
    RETRIEVE_PIPELINE_FRONTEND_APP_DETAILS: "POSTHOG_RETRIEVE_PIPELINE_FRONTEND_APP_DETAILS",
    /**
     * Retrieve details for a specific pipeline frontend app's source by its id within an organization. requires an integer id of the app and uuid of the organization. returns json object with app properties.
     */
    RETRIEVE_PIPELINE_FRONTEND_APP_SOURCE_DETAILS: "POSTHOG_RETRIEVE_PIPELINE_FRONTEND_APP_SOURCE_DETAILS",
    /**
     * Retrieve the frontend configuration for a specific plugin in a project's pipeline. requires project and config ids and returns details like plugin info, status, and creation timestamps.
     */
    RETRIEVE_PIPELINE_FRONTEND_PLUGIN_CONFIG: "POSTHOG_RETRIEVE_PIPELINE_FRONTEND_PLUGIN_CONFIG",
    /**
     * Retrieve activity details of pipeline import apps for a given organization. requires 'organization id' (uuid). returns app id, type, name, url, and other metadata. supports 'local', 'custom', 'repository', 'source', and 'inline' plugin types.
     */
    RETRIEVE_PIPELINE_IMPORT_APPS_ACTIVITY: "POSTHOG_RETRIEVE_PIPELINE_IMPORT_APPS_ACTIVITY",
    /**
     * Access specific pipeline import app details in an organization using its id and a valid organization uuid. requires 'personalapikeyauth' with 'plugin:read' access. outputs app properties in json format.
     */
    RETRIEVE_PIPELINE_IMPORT_APP_DETAILS: "POSTHOG_RETRIEVE_PIPELINE_IMPORT_APP_DETAILS",
    /**
     * Retrieves source details of a pipeline import app by its id within a specified organization. expects `organization id` (uuid) and `id` (integer) as path parameters. returns app properties including type, name, and related info.
     */
    RETRIEVE_PIPELINE_IMPORT_APP_SOURCE_DETAILS: "POSTHOG_RETRIEVE_PIPELINE_IMPORT_APP_SOURCE_DETAILS",
    /**
     * Retrieve pipeline transformation plugin details by id for a specified organization. requires authentication and provides information like plugin type, name, and configuration for authorized users. supports json response.
     */
    RETRIEVE_PIPELINE_PLUGIN_DETAILS_BY_ID: "POSTHOG_RETRIEVE_PIPELINE_PLUGIN_DETAILS_BY_ID",
    /**
     * Retrieve the source details of a pipeline transformation for a specific plugin by id within an organization. access plugin metadata, like its type, url, and config, relevant to organizing and managing pipeline operations.
     */
    RETRIEVE_PIPELINE_PLUGIN_SOURCE: "POSTHOG_RETRIEVE_PIPELINE_PLUGIN_SOURCE",
    /**
     * Retrieve the activity details of a specific pipeline transformation configuration in a project using its unique integer id. requires project id. returns json including config, plugin info, and activity data.
     */
    RETRIEVE_PIPELINE_TRANSFORMATION_ACTIVITY: "POSTHOG_RETRIEVE_PIPELINE_TRANSFORMATION_ACTIVITY",
    /**
     * Retrieve the configuration for a specific pipeline transformation plugin in a project by its id using a get request. requires project id and plugin config id in the path and 'plugin:read' permission.
     */
    RETRIEVE_PIPELINE_TRANSFORMATION_CONFIG: "POSTHOG_RETRIEVE_PIPELINE_TRANSFORMATION_CONFIG",
    /**
     * Retrieve the frontend configuration details for a specific pipeline transformation by id within a given project. this endpoint requires the project id and transformation config id in the path.
     */
    RETRIEVE_PIPELINE_TRANSFORMATION_FRONTEND_CONFIG: "POSTHOG_RETRIEVE_PIPELINE_TRANSFORMATION_FRONTEND_CONFIG",
    /**
     * Retrieve activity details for a specific plugin config within a project's pipeline import apps. requires 'project id' and plugin config 'id' within the api path.
     */
    RETRIEVE_PLUGIN_CONFIG_ACTIVITY: "POSTHOG_RETRIEVE_PLUGIN_CONFIG_ACTIVITY",
    /**
     * Retrieve activity details for a specific plugin configuration within a project. requires `project id` and unique `id` of the plugin config. responds with plugin info, status, and activity metrics.
     */
    RETRIEVE_PLUGIN_CONFIG_ACTIVITY_DETAILS: "POSTHOG_RETRIEVE_PLUGIN_CONFIG_ACTIVITY_DETAILS",
    /**
     * Retrieve the configuration details of a specific plugin by its id for a given project. this endpoint requires a project id and plugin config id, with read permission, and returns an object containing config settings and status.
     */
    RETRIEVE_PLUGIN_CONFIG_DETAILS: "POSTHOG_RETRIEVE_PLUGIN_CONFIG_DETAILS",
    /**
     * Retrieve the frontend configuration of an app's pipeline import by id within a specified project. requires `project id` and `id` of the plugin config. returns json object with config details.
     */
    RETRIEVE_PLUGIN_CONFIG_FRONTEND: "POSTHOG_RETRIEVE_PLUGIN_CONFIG_FRONTEND",
    /**
     * Retrieve the frontend configuration of a specific plugin for a given project. requires the project id and plugin config id. provides details including plugin state, order, and related info.
     */
    RETRIEVE_PLUGIN_FRONTEND_CONFIG: "POSTHOG_RETRIEVE_PLUGIN_FRONTEND_CONFIG",
    /**
     * Retrieve plugin source details by organization and plugin id. requires integer 'id' for the plugin and 'organization id' as uuid. responds with plugin attributes including type, name, and url.
     */
    RETRIEVE_PLUGIN_SOURCE_DETAILS: "POSTHOG_RETRIEVE_PLUGIN_SOURCE_DETAILS",
    /**
     * This endpoint retrieves update information for a specific plugin within an organization's pipeline frontend app by its integer id and the organization's uuid. it returns details such as plugin type, name, and latest version.
     */
    RETRIEVE_PLUGIN_UPDATE_INFO: "POSTHOG_RETRIEVE_PLUGIN_UPDATE_INFO",
    /**
     * Retrieve the latest update status for a specific plugin, identified by its integer id, within an organization specified by uuid. check compatibility and change logs.
     */
    RETRIEVE_PLUGIN_UPDATE_STATUS: "POSTHOG_RETRIEVE_PLUGIN_UPDATE_STATUS",
    /**
     * Get details on a project action by id. supports json/csv format via query. needs 'project id' and 'id' path parameters. secured by personalapikeyauth.
     */
    RETRIEVE_PROJECT_ACTION_DETAILS_BY_ID: "POSTHOG_RETRIEVE_PROJECT_ACTION_DETAILS_BY_ID",
    /**
     * Projects for the current organization.
     */
    RETRIEVE_PROJECT_ACTIVITY_DETAILS: "POSTHOG_RETRIEVE_PROJECT_ACTIVITY_DETAILS",
    /**
     * Retrieve activity insights for a specific project by project id, supporting csv or json formats. requires an api key with activity log:read permission. limited to essential data to enhance response time for large datasets.
     */
    RETRIEVE_PROJECT_ACTIVITY_INSIGHTS: "POSTHOG_RETRIEVE_PROJECT_ACTIVITY_INSIGHTS",
    /**
     * Access a project's activity log using pagination and cursor-based navigation. requires project id and personalapikeyauth. outputs activity list with user data and timestamps.
     */
    RETRIEVE_PROJECT_ACTIVITY_LOG_WITH_PAGINATION: "POSTHOG_RETRIEVE_PROJECT_ACTIVITY_LOG_WITH_PAGINATION",
    /**
     * Create, read, update and delete annotations. [see docs](https://posthog.com/docs/user-guides/annotations) for more information on annotations.
     */
    RETRIEVE_PROJECT_ANNOTATION_DETAILS: "POSTHOG_RETRIEVE_PROJECT_ANNOTATION_DETAILS",
    /**
     * Retrieve activity log for a specific project's cohorts. requires a project id and personalapikeyauth with activity log:read permission. response includes cohort details and creator info.
     */
    RETRIEVE_PROJECT_COHORTS_ACTIVITY_LOG: "POSTHOG_RETRIEVE_PROJECT_COHORTS_ACTIVITY_LOG",
    /**
     * Retrieve a paginated list of cohorts for a specific project using `project id`. supports `limit` and `offset` query params to customize the response. requires `personalapikeyauth` with `cohort:read` permissions.
     */
    RETRIEVE_PROJECT_COHORTS_WITH_PAGINATION: "POSTHOG_RETRIEVE_PROJECT_COHORTS_WITH_PAGINATION",
    /**
     * Retrieve detailed information about a specific cohort within a project using its id. requires project id and cohort id; returns cohort details including name, creator info, and status. auth: personalapikeyauth with cohort:read permission.
     */
    RETRIEVE_PROJECT_COHORT_DETAILS: "POSTHOG_RETRIEVE_PROJECT_COHORT_DETAILS",
    /**
     * Retrieve the draft sql query for a specific project using its project id. ensure to obtain the project id by calling /api/projects/. note: this endpoint does not return a response body.
     */
    RETRIEVE_PROJECT_DRAFT_SQL_QUERY: "POSTHOG_RETRIEVE_PROJECT_DRAFT_SQL_QUERY",
    /**
     * Retrieve details of a specific early access feature in a project by id. requires project id and feature uuid. must have 'early access feature:read' permission. returns feature details including status, flag info, and timestamps.
     */
    RETRIEVE_PROJECT_EARLY_ACCESS_FEATURE_DETAILS: "POSTHOG_RETRIEVE_PROJECT_EARLY_ACCESS_FEATURE_DETAILS",
    /**
     * Retrieve details for a specific event by id within a project. supports csv or json format. requires project id in path and adheres to personalapikeyauth for security.
     */
    RETRIEVE_PROJECT_EVENT_DETAILS_BY_ID: "POSTHOG_RETRIEVE_PROJECT_EVENT_DETAILS_BY_ID",
    /**
     * Retrieve event values for a specific project by id. supports querying in csv or json format. requires a project id and personal api key with query:read permission. responds with event details such as id, distinct id, properties, etc.
     */
    RETRIEVE_PROJECT_EVENT_VALUES: "POSTHOG_RETRIEVE_PROJECT_EVENT_VALUES",
    /**
     * Retrieve experiment results within a project by project and experiment id. requires project id and experiment id in the path. returns experiment details in json, with authentication via personalapikeyauth.
     */
    RETRIEVE_PROJECT_EXPERIMENT_RESULTS: "POSTHOG_RETRIEVE_PROJECT_EXPERIMENT_RESULTS",
    /**
     * Retrieve detailed info on a specific export of a project using its unique id. requires project id and supports various export formats like png, pdf, csv, and xlsx. auth: personalapikeyauth with export:read scope.
     */
    RETRIEVE_PROJECT_EXPORT_DETAILS: "POSTHOG_RETRIEVE_PROJECT_EXPORT_DETAILS",
    /**
     * Retrieve insights about funnel correlations for a specific project by id, offering results in json or csv. supports querying and output formatting, with a focus on fast loading of large datasets.
     */
    RETRIEVE_PROJECT_FUNNEL_CORRELATION_INSIGHTS: "POSTHOG_RETRIEVE_PROJECT_FUNNEL_CORRELATION_INSIGHTS",
    /**
     * Retrieves specified group details within a project by group key and type index. requires 'group key', 'group type index', and 'project id'. responds with group details, including creation timestamp.
     */
    RETRIEVE_PROJECT_GROUP_DETAILS_BY_KEY_AND_TYPE: "POSTHOG_RETRIEVE_PROJECT_GROUP_DETAILS_BY_KEY_AND_TYPE",
    /**
     * Retrieve detailed insights for a specific project using its id. queries can be made in csv or json format. requires 'insight:read' permission. results include various metadata like creation, last refresh, and associated dashboard info.
     */
    RETRIEVE_PROJECT_INSIGHTS_DETAILS: "POSTHOG_RETRIEVE_PROJECT_INSIGHTS_DETAILS",
    /**
     * The get `/api/projects/{project id}/insights/` endpoint retrieves a paginated list of insights for a specified project. filter by creator, response format (csv/json), and use limit/offset for result batching. requires `insight:read` permission.
     */
    RETRIEVE_PROJECT_INSIGHTS_WITH_PAGINATION: "POSTHOG_RETRIEVE_PROJECT_INSIGHTS_WITH_PAGINATION",
    /**
     * Retrieve insights activity for a specific project and insight id, offering data in json or csv format. requires project id and insight id in the path, with optional data format query. secure access via personalapikeyauth.
     */
    RETRIEVE_PROJECT_INSIGHT_ACTIVITY_DATA: "POSTHOG_RETRIEVE_PROJECT_INSIGHT_ACTIVITY_DATA",
    /**
     * Retrieve details for a specific project insight by id, with options to format as json/csv, request refresh, and specify dashboard context. supports personalapikeyauth with insight read access. responses include metadata, results, and caching info.
     */
    RETRIEVE_PROJECT_INSIGHT_DETAILS: "POSTHOG_RETRIEVE_PROJECT_INSIGHT_DETAILS",
    /**
     * Retrieve detailed information about a specific user's membership level and status within a project by their uuid. access project members' data, roles, and timestamps. (get /api/projects/{project id}/explicit members/{uuid})
     */
    RETRIEVE_PROJECT_MEMBER_DETAILS_BY_UUID: "POSTHOG_RETRIEVE_PROJECT_MEMBER_DETAILS_BY_UUID",
    /**
     * This endpoint allows reading and deleting individuals. for creating or updating, use the capture api, `$set`/`$unset` properties, or sdks.
     */
    RETRIEVE_PROJECT_PERSON_ACTIVITY: "POSTHOG_RETRIEVE_PROJECT_PERSON_ACTIVITY",
    /**
     * This endpoint allows reading and deletion of persons; for creation or updates, use the capture api, `$set`/`$unset` properties, or sdks.
     */
    RETRIEVE_PROJECT_PERSON_COHORTS: "POSTHOG_RETRIEVE_PROJECT_PERSON_COHORTS",
    /**
     * This endpoint allows for reading and deleting persons. for creations or updates, use the capture api, set/unset properties, or sdks.
     */
    RETRIEVE_PROJECT_PERSON_STICKINESS: "POSTHOG_RETRIEVE_PROJECT_PERSON_STICKINESS",
    /**
     * Retrieve configuration details of a specific plugin for a given project pipeline by id. requires a valid project id and plugin config id. supports personalapikeyauth for 'plugin:read' access. responds with json containing configuration data.
     */
    RETRIEVE_PROJECT_PIPELINE_PLUGIN_CONFIG: "POSTHOG_RETRIEVE_PROJECT_PIPELINE_PLUGIN_CONFIG",
    /**
     * Retrieve session values for a specified project. pass the project id in the url path to obtain the information. only the project's id is required as a parameter. no response body for the 200 ok status code.
     */
    RETRIEVE_PROJECT_SESSION_VALUES: "POSTHOG_RETRIEVE_PROJECT_SESSION_VALUES",
    /**
     * Retrieve a specific subscription for a project, identified by 'project id' and 'id'. requires valid api key with read access. supports get method, returns subscription details including frequency, type, and creator info.
     */
    RETRIEVE_PROJECT_SUBSCRIPTION_DETAILS: "POSTHOG_RETRIEVE_PROJECT_SUBSCRIPTION_DETAILS",
    /**
     * Retrieve trend insights for a specific project, supporting csv or json formats. mandatory project id required. provides details on insight cache status, creator, and associated dashboards. auth: personalapikeyauth.
     */
    RETRIEVE_PROJECT_TREND_INSIGHTS: "POSTHOG_RETRIEVE_PROJECT_TREND_INSIGHTS",
    /**
     * Allows a caller to provide a list of event names and a single property name returns a map of the event names to a boolean representing whether that property has ever been seen with that event name
     */
    RETRIEVE_PROPERTIES_AND_EVENTS_ASSOCIATION: "POSTHOG_RETRIEVE_PROPERTIES_AND_EVENTS_ASSOCIATION",
    /**
     * Retrieve details of a specific property definition by uuid within a project. requires project id and property definition id. security: personalapikeyauth with read access. no response body provided.
     */
    RETRIEVE_PROPERTY_DEFINITION_DETAILS: "POSTHOG_RETRIEVE_PROPERTY_DEFINITION_DETAILS",
    /**
     * Retrieve a specific proxy record's details by id within an organization. requires path parameters 'organization id' and 'id'. returns json data including domain, status, and timestamps. auth: personalapikeyauth with 'organization:read'.
     */
    RETRIEVE_PROXY_RECORD_DETAILS: "POSTHOG_RETRIEVE_PROXY_RECORD_DETAILS",
    /**
     * Retrieve related groups for a specific project and user. requires 'project id' (path), 'group type index', and user 'id' (query). returns group details with type, key, and creation date.
     */
    RETRIEVE_RELATED_PROJECT_GROUPS: "POSTHOG_RETRIEVE_RELATED_PROJECT_GROUPS",
    /**
     * Retrieve retention insights for a specified project. options to output in csv or json format. requires a project id and supports query customization. authenticated access with 'insight:read' permission necessary.
     */
    RETRIEVE_RETENTION_INSIGHTS: "POSTHOG_RETRIEVE_RETENTION_INSIGHTS",
    /**
     * Retrieve property definitions for a specific project by providing the project's id. access this get endpoint at `/api/projects/{project id}/sessions/property definitions/`. project id is mandatory. no response body is returned upon a successful call.
     */
    RETRIEVE_SESSION_PROPERTY_DEFINITIONS: "POSTHOG_RETRIEVE_SESSION_PROPERTY_DEFINITIONS",
    /**
     * Retrieve detailed information about a specific session recording by providing the session's uuid and associated project id. the response includes metrics such as duration, activity, timestamps, and user data. authentication is required.
     */
    RETRIEVE_SESSION_RECORDING_DETAILS: "POSTHOG_RETRIEVE_SESSION_RECORDING_DETAILS",
    /**
     * Retrieve error clusters from session recordings for a specified project. this endpoint provides details on user interactions, console logs, and activity times in json format, requiring the project id in the path.
     */
    RETRIEVE_SESSION_RECORDING_ERROR_CLUSTERS: "POSTHOG_RETRIEVE_SESSION_RECORDING_ERROR_CLUSTERS",
    /**
     * Retrieve session recording playlists for a specified project and playlist short id. returns details like name, creator info, and recordings. access by making a get request to `/api/projects/{project id}/session recording playlists/{short id}/recordings/`.
     */
    RETRIEVE_SESSION_RECORDING_PLAYLIST_DETAILS: "POSTHOG_RETRIEVE_SESSION_RECORDING_PLAYLIST_DETAILS",
    /**
     * Retrieve properties of session recordings for a given project by id, including activity metrics, timestamps, and participant details. requires project id in the path. returns json data with recording details.
     */
    RETRIEVE_SESSION_RECORDING_PROPERTIES_BY_PROJECT_ID: "POSTHOG_RETRIEVE_SESSION_RECORDING_PROPERTIES_BY_PROJECT_ID",
    /**
     * Snapshots for a session can be loaded from s3 (if old) or redis (if recent). clients call the api without a source to get supported sources, then per source for snapshots. api v1 is deprecated; clickhouse support removed.
     */
    RETRIEVE_SESSION_RECORDING_SNAPSHOTS: "POSTHOG_RETRIEVE_SESSION_RECORDING_SNAPSHOTS",
    /**
     * Retrieve similar session recordings for a given session by uuid within a project. details include session activity data, user info, and timestamps. requires `project id` and session `id`.
     */
    RETRIEVE_SIMILAR_SESSION_RECORDINGS: "POSTHOG_RETRIEVE_SIMILAR_SESSION_RECORDINGS",
    /**
     * Retrieve details of a specific batch export for an organization by its uuid. requires a personalapikeyauth with 'batch export:read' permission. responses include export details like name, model, destination, interval, and more.
     */
    RETRIEVE_SPECIFIC_BATCH_EXPORT_DETAILS: "POSTHOG_RETRIEVE_SPECIFIC_BATCH_EXPORT_DETAILS",
    /**
     * Retrieve details for a specific batch export run within a project by id. requires a uuid for batch export id and run id. provides run status, record count, timestamps, latest error, and intervals. security: personalapikeyauth.
     */
    RETRIEVE_SPECIFIC_BATCH_EXPORT_RUN_DETAILS: "POSTHOG_RETRIEVE_SPECIFIC_BATCH_EXPORT_RUN_DETAILS",
    /**
     * Retrieve details of a specific domain within an organization using its uuid. authorized users can check domain verification status and saml configuration. requires the `personalapikeyauth` with `organization:read` scope.
     */
    RETRIEVE_SPECIFIC_DOMAIN_DETAILS: "POSTHOG_RETRIEVE_SPECIFIC_DOMAIN_DETAILS",
    /**
     * Retrieve the content of a specific exported asset by id within a project. requires 'export:read' permission. supports fetching details like creation time, format (png, pdf, csv, excel), etc.
     */
    RETRIEVE_SPECIFIC_EXPORTED_ASSET_CONTENT: "POSTHOG_RETRIEVE_SPECIFIC_EXPORTED_ASSET_CONTENT",
    /**
     * Retrieve historical export data for a specific plugin configuration within a project. requires project, plugin config, and export item ids. auth via personalapikeyauth. no body in 200 response.
     */
    RETRIEVE_SPECIFIC_HISTORICAL_PLUGIN_EXPORT: "POSTHOG_RETRIEVE_SPECIFIC_HISTORICAL_PLUGIN_EXPORT",
    /**
     * Retrieve the configuration details of a specific pipeline frontend app by providing its unique id and the associated project id. permissions: 'plugin:read'. response includes plugin config info like enabled state and creation timestamp.
     */
    RETRIEVE_SPECIFIC_PIPELINE_FRONTEND_APP_CONFIG: "POSTHOG_RETRIEVE_SPECIFIC_PIPELINE_FRONTEND_APP_CONFIG",
    /**
     * Retrieve details of a specific dashboard within a project. requires a dashboard id & project id, and returns information such as dashboard properties, owner, and access levels. auth: personalapikeyauth[dashboard:read].
     */
    RETRIEVE_SPECIFIC_PROJECT_DASHBOARD_DETAILS: "POSTHOG_RETRIEVE_SPECIFIC_PROJECT_DASHBOARD_DETAILS",
    /**
     * Retrieve activity logs for specific survey in a project, identified by uuids. requires valid api key with 'activity log:read' permissions. supports json response detailing survey's properties, types, and creator info.
     */
    RETRIEVE_SURVEY_ACTIVITY_LOGS: "POSTHOG_RETRIEVE_SURVEY_ACTIVITY_LOGS",
    /**
     * Retrieve survey details using survey uuid and associated project id. supports secure access with 'personalapikeyauth'. returns survey name, type, linking, targeting flags, creator info, and questions with branching logic descriptions.
     */
    RETRIEVE_SURVEY_DETAILS_WITH_UUID_AND_PROJECT_ID: "POSTHOG_RETRIEVE_SURVEY_DETAILS_WITH_UUID_AND_PROJECT_ID",
    /**
     * Retrieve the count of survey responses for a specific project by its id. it requires the project id parameter and returns details like the survey type, linked flags, and creator info.
     */
    RETRIEVE_SURVEY_RESPONSES_COUNT_BY_PROJECT_ID: "POSTHOG_RETRIEVE_SURVEY_RESPONSES_COUNT_BY_PROJECT_ID",
    /**
     * Retrieve config details for unsubscribed pipeline destinations in an organization. requires 'organization id' (uuid). returns plugin info, name, description, and more in json format.
     */
    RETRIEVE_UNSUBSCRIBED_PIPELINE_CONFIGS: "POSTHOG_RETRIEVE_UNSUBSCRIBED_PIPELINE_CONFIGS",
    /**
     * Retrieve a list of unused plugins for a specified organization by its uuid. the response includes plugin details such as type, name, and configuration. access restricted to the specified organization's context.
     */
    RETRIEVE_UNUSED_ORGANIZATION_PLUGINS: "POSTHOG_RETRIEVE_UNUSED_ORGANIZATION_PLUGINS",
    /**
     * Retrieve unused pipeline destinations for a specified organization by id. this get endpoint returns a json object with details like destination id, plugin type, and url, among other attributes. (uuid for organization id is required.)
     */
    RETRIEVE_UNUSED_PIPELINE_DESTINATIONS: "POSTHOG_RETRIEVE_UNUSED_PIPELINE_DESTINATIONS",
    /**
     * The endpoint `get /api/users/{uuid}/start 2fa setup/` fetches details for initiating 2fa setup for a user, providing information like email status, password presence, and more. fields are mostly read-only.
     */
    RETRIEVE_USER_DETAILS_FOR_INITIATING2_FA_SETUP: "POSTHOG_RETRIEVE_USER_DETAILS_FOR_INITIATING2_FA_SETUP",
    /**
     * Fetch user info like profile, team, org, and notifications via uuid using personalapikeyauth ('user:read'). returns json with name, email, teams, and status.
     */
    RETRIEVE_USER_PROFILE_AND_TEAM_DETAILS: "POSTHOG_RETRIEVE_USER_PROFILE_AND_TEAM_DETAILS",
    /**
     * Delete an organization invite by its uuid. requires a valid personalapikeyauth with organization member write permission. no response body returned on success (http 204).
     */
    REVOKE_ORGANIZATION_INVITE: "POSTHOG_REVOKE_ORGANIZATION_INVITE",
    /**
     * Hard delete of this model is not allowed. use a patch api call to set "deleted" to true
     */
    SET_INSIGHT_DELETION_FLAG: "POSTHOG_SET_INSIGHT_DELETION_FLAG",
    /**
     * Hard delete of this model is not allowed. use a patch api call to set "deleted" to true
     */
    SOFT_DELETE_A_SPECIFIC_COHORT_BY_ID: "POSTHOG_SOFT_DELETE_A_SPECIFIC_COHORT_BY_ID",
    /**
     * Hard delete of this model is not allowed. use a patch api call to set "deleted" to true
     */
    SOFT_DELETE_FEATURE_FLAG_BY_SETTING_STATUS: "POSTHOG_SOFT_DELETE_FEATURE_FLAG_BY_SETTING_STATUS",
    /**
     * Hard delete of this model is not allowed. use a patch api call to set "deleted" to true
     */
    SOFT_DELETE_PROJECT_DASHBOARD: "POSTHOG_SOFT_DELETE_PROJECT_DASHBOARD",
    /**
     * This endpoint allows reading and deleting persons; for creation or updates, use the capture api, `$set`/`$unset` properties, or sdks.
     */
    SPLIT_PERSON_ENTITIES_IN_PROJECT: "POSTHOG_SPLIT_PERSON_ENTITIES_IN_PROJECT",
    /**
     * The `/api/projects/{project id}/exports/` endpoint triggers a project export, requiring `project id` and `export format`. it accepts json, form-encoded, and multipart data, responding with a 201 code and export information.
     */
    TRIGGER_PROJECT_EXPORT_WITH_FORMAT_OPTION: "POSTHOG_TRIGGER_PROJECT_EXPORT_WITH_FORMAT_OPTION",
    /**
     * Create, read, update and delete annotations. [see docs](https://posthog.com/docs/user-guides/annotations) for more information on annotations.
     */
    UPDATE_ANNOTATION_DETAILS: "POSTHOG_UPDATE_ANNOTATION_DETAILS",
    /**
     * This patch endpoint updates a specific early access project feature. it requires `project id` and `id` (uuid) as path parameters. the body can include feature details like `name`, `description`, and `stage`. security: `personalapikeyauth`.
     */
    UPDATE_EARLY_ACCESS_PROJECT_FEATURE: "POSTHOG_UPDATE_EARLY_ACCESS_PROJECT_FEATURE",
    /**
     * Update an event definition by sending a put request to '/api/projects/{project id}/event definitions/{id}/' using the uuid and project id, provided you have 'event definition:write' authorization.
     */
    UPDATE_EVENT_DEFINITION_BY_UUID: "POSTHOG_UPDATE_EVENT_DEFINITION_BY_UUID",
    /**
     * Update an experiment by sending a put request with `project id` and `id`, including new details as json/form data. changes to name, description, dates, etc., allowed. `experiment:write` permission needed.
     */
    UPDATE_EXPERIMENT_DETAILS: "POSTHOG_UPDATE_EXPERIMENT_DETAILS",
    /**
     * Manage feature flags for your app with creation, reading, updating, and deletion options. utilize posthog's js library or endpoint for flag status. more info in docs.
     */
    UPDATE_FEATURE_FLAG_CONFIGURATION: "POSTHOG_UPDATE_FEATURE_FLAG_CONFIGURATION",
    /**
     * Update specific details of an organization using its uuid. allows patch requests with json, form data, or multipart. requires `organization:write` permission. returns updated organization info.
     */
    UPDATE_ORGANIZATION_DETAILS_BY_UUID: "POSTHOG_UPDATE_ORGANIZATION_DETAILS_BY_UUID",
    /**
     * Update a domain's info for a specific organization by id, including verification status and saml configuration. requires uuid path params and supports json, form-data content types.
     */
    UPDATE_ORGANIZATION_DOMAIN_INFO_AND_SAML_CONFIG: "POSTHOG_UPDATE_ORGANIZATION_DOMAIN_INFO_AND_SAML_CONFIG",
    /**
     * Updates selected properties of a domain in an organization via patch request, supports various data formats but saml fields are immutable. authentication needed.
     */
    UPDATE_ORGANIZATION_DOMAIN_PROPERTIES: "POSTHOG_UPDATE_ORGANIZATION_DOMAIN_PROPERTIES",
    /**
     * Patch '/api/organizations/{id}/members/{uuid}': updates org member with user and org uuids. supports json/form/multipart. returns member data. secured by personalapikeyauth.
     */
    UPDATE_ORGANIZATION_MEMBER_BY_UUIDS: "POSTHOG_UPDATE_ORGANIZATION_MEMBER_BY_UUIDS",
    /**
     * Update member details in an organization by id and user uuid. requires org member write permission. accepts json, form, or multipart. responses reflect member info, including roles and security settings.
     */
    UPDATE_ORGANIZATION_MEMBER_DETAILS: "POSTHOG_UPDATE_ORGANIZATION_MEMBER_DETAILS",
    /**
     * Update a proxy record's domain details for a specified organization and proxy record id using put. requires organization and record ids, supports json, form, and multipart data. responses include status and timestamps. auth required.
     */
    UPDATE_ORGANIZATION_S_PROXY_RECORD_DOMAIN: "POSTHOG_UPDATE_ORGANIZATION_S_PROXY_RECORD_DOMAIN",
    /**
     * Update partial cohort details for a specific project. requires a cohort id and project id, supports json, form data, and accepts patch changes like name or description. returns updated cohort data. auth required.
     */
    UPDATE_PARTIAL_PROJECT_COHORT_DETAILS: "POSTHOG_UPDATE_PARTIAL_PROJECT_COHORT_DETAILS",
    /**
     * Patch /api/organizations/{organization id}/roles/{id}/: update partial details of a role by id within an organization, including name and feature flag access level. requires uuids for both organization and role. supports json, form, and multipart data.
     */
    UPDATE_PARTIAL_ROLE_DETAILS_IN_ORGANIZATION: "POSTHOG_UPDATE_PARTIAL_ROLE_DETAILS_IN_ORGANIZATION",
    /**
     * Patch /api/projects/{project id}/subscriptions/{id}/: update partial details of a specific project subscription by id. modify target, frequency, and more. requires subscription:write permission.
     */
    UPDATE_PARTIAL_SUBSCRIPTION_DETAILS: "POSTHOG_UPDATE_PARTIAL_SUBSCRIPTION_DETAILS",
    /**
     * Update partial survey details by patch to /api/projects/{project id}/surveys/{id}/ with uuid. edit attributes like name, type, questions, targeting, and flags. needs personalapikeyauth for write access.
     */
    UPDATE_PARTIAL_SURVEY_DETAILS: "POSTHOG_UPDATE_PARTIAL_SURVEY_DETAILS",
    /**
     * Request data's "properties" will be updated on a person using "$set" event, affecting only listed properties without deletion or other changes. for property removal, use 'delete property' endpoint.
     */
    UPDATE_PERSON_PROPERTIES: "POSTHOG_UPDATE_PERSON_PROPERTIES",
    /**
     * This endpoint allows for reading and deleting individuals. use the capture api, `$set` and `$unset` properties, or sdks for creating or updating persons.
     */
    UPDATE_PERSON_PROPERTY_ENDPOINT: "POSTHOG_UPDATE_PERSON_PROPERTY_ENDPOINT",
    /**
     * Update the configuration for a pipeline destination in a project. accepts a json, form-urlencoded, or multipart data payload to modify plugin settings by providing project and config ids. requires plugin:write authority. responds with updated data.
     */
    UPDATE_PIPELINE_DESTINATION_CONFIG: "POSTHOG_UPDATE_PIPELINE_DESTINATION_CONFIG",
    /**
     * Update configuration for a specific pipeline frontend app by providing its id and the project id. configure details like activation, order, and optional parameters via json or form data. authentication required.
     */
    UPDATE_PIPELINE_FRONTEND_APP_CONFIG: "POSTHOG_UPDATE_PIPELINE_FRONTEND_APP_CONFIG",
    /**
     * Update a project-specific pipeline plugin configuration by supplying the project id and config id. this put request expects details like plugin state, order, and more in json, form data, or url-encoded format. authentication is required.
     */
    UPDATE_PIPELINE_PLUGIN_CONFIG: "POSTHOG_UPDATE_PIPELINE_PLUGIN_CONFIG",
    /**
     * Update a pipeline transformation configuration for a specific project and config id. requires project id and config id in the path and json payload. supports plugin activation and order changes.
     */
    UPDATE_PIPELINE_TRANSFORMATION_CONFIG: "POSTHOG_UPDATE_PIPELINE_TRANSFORMATION_CONFIG",
    /**
     * Update a plugin config's partial details in a project by its id using patch. requires project id, config id. accepts json/form data. authenticated with personalapikeyauth. returns updated config.
     */
    UPDATE_PLUGIN_CONFIG_FOR_PROJECT: "POSTHOG_UPDATE_PLUGIN_CONFIG_FOR_PROJECT",
    /**
     * Put endpoint '/api/projects/{project id}/actions/{id}/' updates actions in a project by id, accepts json/form data, supports 'format' query, and needs 'action:write' authentication.
     */
    UPDATE_PROJECT_ACTION_BY_ID: "POSTHOG_UPDATE_PROJECT_ACTION_BY_ID",
    /**
     * Update an action within a project with a specified id. supports partial updates. accepts json, form-data, and query parameters including 'project id' and 'id'. formats response in csv or json. requires 'action:write' permission.
     */
    UPDATE_PROJECT_ACTION_WITH_PARTIAL_DATA: "POSTHOG_UPDATE_PROJECT_ACTION_WITH_PARTIAL_DATA",
    /**
     * Update cohort details of a specific project by id. requires project and cohort id in the path and a json, form-encoded, or multipart form body. permissions: cohort:write. returns updated cohort data.
     */
    UPDATE_PROJECT_COHORT_DETAILS: "POSTHOG_UPDATE_PROJECT_COHORT_DETAILS",
    /**
     * Endpoint to update an existing dashboard within a project. provide `project id` and `dashboard id` in path, send json or form data with dashboard details. requires `dashboard:write` permission; responds with updated dashboard data.
     */
    UPDATE_PROJECT_DASHBOARD_DETAILS: "POSTHOG_UPDATE_PROJECT_DASHBOARD_DETAILS",
    /**
     * Update a specific early access feature of a project by providing the `project id` and feature `id` (uuid). requires a json body with feature details and responds with the updated status. authentication via personalapikeyauth is mandatory.
     */
    UPDATE_PROJECT_EARLY_ACCESS_FEATURE: "POSTHOG_UPDATE_PROJECT_EARLY_ACCESS_FEATURE",
    /**
     * Update an existing event definition for a specified project using its uuid. requires a project id and event definition write permissions. responds without a body on success.
     */
    UPDATE_PROJECT_EVENT_DEFINITION: "POSTHOG_UPDATE_PROJECT_EVENT_DEFINITION",
    /**
     * Patch /api/projects/{project id}/groups types/update metadata: update group type metadata for a specific project using its project id. can modify name singular and name plural fields up to 400 characters each.
     */
    UPDATE_PROJECT_GROUP_TYPE_METADATA: "POSTHOG_UPDATE_PROJECT_GROUP_TYPE_METADATA",
    /**
     * Endpoint "/api/projects/{project id}/insights/{id}/" allows for updating an insight's details for a given project and insight id, supporting json and csv formats, with fields like name, query, and various timestamps. requires insight write permission.
     */
    UPDATE_PROJECT_INSIGHT_DETAILS: "POSTHOG_UPDATE_PROJECT_INSIGHT_DETAILS",
    /**
     * Update a project member's role using their uuid in a specific project. accepts partial data to modify membership details such as role level, provided the member's uuid and project id.
     */
    UPDATE_PROJECT_MEMBER_ROLE_BY_UUID: "POSTHOG_UPDATE_PROJECT_MEMBER_ROLE_BY_UUID",
    /**
     * Update explicit project membership using uuids. this put endpoint modifies a project member's role, where '1' stands for member and '8' for administrator. requires `project id` and `parent membership  user  uuid`.
     */
    UPDATE_PROJECT_MEMBER_S_ROLE_BY_UUID: "POSTHOG_UPDATE_PROJECT_MEMBER_S_ROLE_BY_UUID",
    /**
     * The api for interacting with notebooks. this feature is in early access and the api can have breaking changes without announcement.
     */
    UPDATE_PROJECT_NOTEBOOK_DETAILS: "POSTHOG_UPDATE_PROJECT_NOTEBOOK_DETAILS",
    /**
     * Update a project's pipeline destination config by id via patch api request. supports json/form requests, with fields like plugin & order. requires personalapikeyauth.
     */
    UPDATE_PROJECT_PIPELINE_DESTINATION_CONFIG: "POSTHOG_UPDATE_PROJECT_PIPELINE_DESTINATION_CONFIG",
    /**
     * Update a specific pipeline transformation configuration for a project by providing a `project id` and configuration `id`. this patch request can modify properties like `plugin`, `enabled`, and `order`. authentication via a personal api key is required.
     */
    UPDATE_PROJECT_PIPELINE_TRANSFORMATION_CONFIG: "POSTHOG_UPDATE_PROJECT_PIPELINE_TRANSFORMATION_CONFIG",
    /**
     * Update project plugin config using its integer id and project string id; accepts json, url-encoded, or form-data. requires authentication; returns the updated config.
     */
    UPDATE_PROJECT_PLUGIN_CONFIGURATION: "POSTHOG_UPDATE_PROJECT_PLUGIN_CONFIGURATION",
    /**
     * Update a property definition in a project by its uuid. requires a project id and definition id, both as path parameters. security: personalapikeyauth with write access. no body in the response.
     */
    UPDATE_PROJECT_PROPERTY_DEFINITION: "POSTHOG_UPDATE_PROJECT_PROPERTY_DEFINITION",
    /**
     * Update an existing session recording playlist for a project with the specified project id and playlist short id. requires json or form data input to modify the playlist's properties like name, description, and status.
     */
    UPDATE_PROJECT_SESSION_RECORDING_PLAYLIST: "POSTHOG_UPDATE_PROJECT_SESSION_RECORDING_PLAYLIST",
    /**
     * Update a subscription for a specific project. provide project id and subscription id in the path and use mime types like application/json with fields like frequency, target type, etc. requires `subscription:write` permission.
     */
    UPDATE_PROJECT_SUBSCRIPTION_DETAILS: "POSTHOG_UPDATE_PROJECT_SUBSCRIPTION_DETAILS",
    /**
     * The `/api/projects/{project id}/surveys/{id}/` put endpoint updates survey details in a project using survey uuid and project id, accepts json/form/multipart data, needs `survey:write` permission, and returns the updated survey.
     */
    UPDATE_PROJECT_SURVEY_DETAILS: "POSTHOG_UPDATE_PROJECT_SURVEY_DETAILS",
    /**
     * Update an organization role by submitting its uuid and organization id in uuid format. role details must be in json or form-data. only users with 'organization:write' can do this. returns updated role data.
     */
    UPDATE_ROLE_DETAILS_IN_ORGANIZATION: "POSTHOG_UPDATE_ROLE_DETAILS_IN_ORGANIZATION",
    /**
     * Update session recording playlists using patch on the endpoint with `project id` and `short id`. accepts json and forms data for detail amendments. partial updates allowed. `personalapikeyauth` needed.
     */
    UPDATE_SESSION_RECORDING_PLAYLIST_PARTIALLY: "POSTHOG_UPDATE_SESSION_RECORDING_PLAYLIST_PARTIALLY",
    /**
     * Patch `/api/organizations/{organization id}/proxy records/{id}/`: update specific fields of a proxy record by id within an organization. supports json, form data, and multipart. requires `organization:write` permission. returns updated proxy record.
     */
    UPDATE_SPECIFIC_PROXY_RECORD_FIELDS: "POSTHOG_UPDATE_SPECIFIC_PROXY_RECORD_FIELDS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "POSTHOG".
 */
export type POSTHOG_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "POSTHOG".
 */
export type POSTHOG_TRIGGER_EVENTS = {}
