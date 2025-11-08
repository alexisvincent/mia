// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CURRENTS_API's CURRENTS_API_ACTIVITIES_LIST tool input.
 */
type CURRENTS_API_ACTIVITIES_LIST_INPUT = {
  /**
   * Language
   * @description Filter news by language (e.g., 'en', 'es', 'fr'). Defaults to English if omitted.
   * @default null
   */
  language: string | null;
};

/**
 * Type of CURRENTS_API's CURRENTS_API_ACTIVITIES_LIST tool output.
 */
type CURRENTS_API_ACTIVITIES_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * News
       * @description List of news articles returned by the API.
       * @default null
       */
      news: {
          /** Author */
          author: string | null;
          /** Category */
          category: string[] | null;
          /** Description */
          description: string | null;
          /** Id */
          id: string | null;
          /** Image */
          image: string | null;
          /** Language */
          language: string | null;
          /** Published */
          published: string | null;
          /** Title */
          title: string | null;
          /** Url */
          url: string | null;
      }[] | null;
      /**
       * Status
       * @description Result status from Currents API (e.g., 'ok' or 'error').
       */
      status: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CURRENTS_API's CURRENTS_API_ACTIVITIES_WATCH tool input.
 */
type CURRENTS_API_ACTIVITIES_WATCH_INPUT = {
  /**
   * Application Name
   * @description Application whose events to watch
   * @enum {string}
   */
  application_name?: "admin" | "calendar" | "class" | "drive" | "docs" | "gplus" | "license" | "login" | "mobile" | "token" | "meet" | "chrome" | "groups";
  /**
   * Channel
   * @description Subscription channel configuration
   */
  channel?: {
      /**
       * Address
       * @description Destination address for notifications (webhook URL)
       * @default null
       */
      address: string | null;
      /**
       * Expiration
       * @description Expiration timestamp in milliseconds since epoch
       * @default null
       */
      expiration: number | null;
      /**
       * Id
       * @description Unique identifier for this channel
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Identifies resource type; value is 'api#channel'
       * @default null
       */
      kind: string | null;
      /**
       * Params
       * @description Extra delivery parameters (e.g., {'ttl': '3600'})
       * @default null
       */
      params: {
          [key: string]: string;
      } | null;
      /**
       * Payload
       * @description Whether to include payload in notifications
       * @default null
       */
      payload: boolean | null;
      /**
       * Resource Id
       * @description Opaque ID of the watched resource
       * @default null
       */
      resourceId: string | null;
      /**
       * Resource Uri
       * @description Version-specific identifier for the watched resource
       * @default null
       */
      resourceUri: string | null;
      /**
       * Token
       * @description Arbitrary string returned with each notification
       * @default null
       */
      token: string | null;
      /**
       * Type
       * @description Delivery mechanism; must be 'web_hook'
       * @default null
       * @constant
       */
      type: "web_hook";
  };
  /**
   * User Key
   * @description Profile ID or primary email, or 'all' to watch all users
   */
  user_key?: string;
};

/**
 * Type of CURRENTS_API's CURRENTS_API_ACTIVITIES_WATCH tool output.
 */
type CURRENTS_API_ACTIVITIES_WATCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Destination address for notifications (webhook URL)
       * @default null
       */
      address: string | null;
      /**
       * Expiration
       * @description Expiration timestamp in milliseconds since epoch
       * @default null
       */
      expiration: number | null;
      /**
       * Id
       * @description Unique identifier for this channel
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Identifies resource type; value is 'api#channel'
       * @default null
       */
      kind: string | null;
      /**
       * Params
       * @description Extra delivery parameters (e.g., {'ttl': '3600'})
       * @default null
       */
      params: {
          [key: string]: string;
      } | null;
      /**
       * Payload
       * @description Whether to include payload in notifications
       * @default null
       */
      payload: boolean | null;
      /**
       * Resource Id
       * @description Opaque ID of the watched resource
       * @default null
       */
      resourceId: string | null;
      /**
       * Resource Uri
       * @description Version-specific identifier for the watched resource
       * @default null
       */
      resourceUri: string | null;
      /**
       * Token
       * @description Arbitrary string returned with each notification
       * @default null
       */
      token: string | null;
      /**
       * Type
       * @description Delivery mechanism; must be 'web_hook'
       * @default null
       * @constant
       */
      type: "web_hook";
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CURRENTS_API's CURRENTS_API_ENTITY_USAGE_REPORTS_GET tool input.
 */
type CURRENTS_API_ENTITY_USAGE_REPORTS_GET_INPUT = {
  /**
   * Customer Id
   * @description Customer ID to retrieve data for.
   * @default null
   */
  customerId: string | null;
  /**
   * Date
   * @description Date of usage in ISO-8601 format (YYYY-MM-DD).
   */
  date?: string;
  /**
   * Entity Key
   * @description Object key to filter by; use 'all' to include all entities.
   */
  entityKey?: string;
  /**
   * Entity Type
   * @description Type of entity for the report; only 'gplus_communities' is supported.
   * @constant
   */
  entityType?: "gplus_communities";
  /**
   * Filters
   * @description Comma-separated list of filters [app]:[param][operator][value], numeric parameters only; operators: ==, <>, <, <=, >, >=.
   * @default null
   */
  filters: string | null;
  /**
   * Max Results
   * @description Maximum number of results to return per page.
   * @default null
   */
  maxResults: number | null;
  /**
   * Page Token
   * @description Token for fetching the next page of results.
   * @default null
   */
  pageToken: string | null;
  /**
   * Parameters
   * @description Comma-separated list of application parameters to include, e.g. 'gplus:numCommunitiesCreated'.
   * @default null
   */
  parameters: string | null;
};

/**
 * Type of CURRENTS_API's CURRENTS_API_ENTITY_USAGE_REPORTS_GET tool output.
 */
type CURRENTS_API_ENTITY_USAGE_REPORTS_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Etag
       * @description ETag of the usageReports collection.
       */
      etag: string;
      /**
       * Kind
       * @description Resource type identifier, e.g. admin#reports#usageReports.
       */
      kind: string;
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Usage Reports
       * @description List of usage report records.
       * @default null
       */
      usageReports: {
          /**
           * Date
           * @description Date of the report.
           */
          date: string;
          /**
           * Entity
           * @description Entity details for this report.
           */
          entity: {
              /**
               * Customer Id
               * @description Customer ID the report belongs to.
               */
              customerId: string;
              /**
               * Entity Id
               * @description Unique ID of the entity.
               * @default null
               */
              entityId: string | null;
              /**
               * Profile Id
               * @description Profile ID associated with the entity.
               * @default null
               */
              profileId: string | null;
              /**
               * Type
               * @description Type of the entity.
               * @default null
               */
              type: string | null;
              /**
               * User Email
               * @description Email of the user related to this entity report.
               * @default null
               */
              userEmail: string | null;
          };
          /**
           * Etag
           * @description ETag of the report resource.
           * @default null
           */
          etag: string | null;
          /**
           * Kind
           * @description Resource type identifier, e.g. admin#reports#usageReport.
           */
          kind: string;
          /**
           * Parameters
           * @description List of parameter value pairs.
           * @default null
           */
          parameters: {
              /**
               * Bool Value
               * @description Boolean value of the parameter.
               * @default null
               */
              boolValue?: boolean | null;
              /**
               * Datetime Value
               * @description Date-time value in RFC3339 format.
               * @default null
               */
              datetimeValue?: string | null;
              /**
               * Int Value
               * @description Integer value as string (int64 format).
               * @default null
               */
              intValue?: string | null;
              /**
               * Msg Value
               * @description Repeated message values as structured objects.
               * @default null
               */
              msgValue?: {
                  [key: string]: unknown;
              }[] | null;
              /**
               * Name
               * @description Name of the parameter.
               */
              name: string;
              /**
               * String Value
               * @description String value of the parameter.
               * @default null
               */
              stringValue?: string | null;
          }[] | null;
      }[] | null;
      /**
       * Warnings
       * @description Any warnings generated by the API request.
       * @default null
       */
      warnings: {
          /**
           * Code
           * @description Warning type code.
           */
          code: string;
          /**
           * Data
           * @description Additional data for the warning as key-value pairs.
           * @default null
           */
          data: {
              /**
               * Key
               * @description Detail key for the warning.
               */
              key: string;
              /**
               * Value
               * @description Detail value for the warning.
               */
              value: string;
          }[] | null;
          /**
           * Message
           * @description Human-readable warning message.
           */
          message: string;
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
 * Type of CURRENTS_API's CURRENTS_API_USERS_LIST tool input.
 */
type CURRENTS_API_USERS_LIST_INPUT = {
  /**
   * Custom Field Mask
   * @description Comma-separated schema names; required only when `projection` is 'CUSTOM'.
   * @default null
   */
  customFieldMask: string | null;
  /**
   * Customer
   * @description Customer ID (e.g., 'my_customer'). Provide either `customer` or `domain`.
   * @default null
   */
  customer: string | null;
  /**
   * Domain
   * @description Domain name to list users from. Provide either `customer` or `domain`.
   * @default null
   */
  domain: string | null;
  /**
   * Max Results
   * @description Maximum number of results to return.
   * @default null
   */
  maxResults: number | null;
  /**
   * Order By
   * @description Property to sort results by.
   * @default null
   * @enum {string|null}
   */
  orderBy: "EMAIL" | "FAMILY_NAME" | "GIVEN_NAME" | null;
  /**
   * Page Token
   * @description Token for fetching the next page of results.
   * @default null
   */
  pageToken: string | null;
  /**
   * Projection
   * @description Subset of user fields to include in the response.
   * @default null
   * @enum {string|null}
   */
  projection: "BASIC" | "CUSTOM" | "FULL" | null;
  /**
   * Query
   * @description Query string for searching user fields.
   * @default null
   */
  query: string | null;
  /**
   * Show Deleted
   * @description Whether to include deleted users. Defaults to false.
   * @default null
   */
  showDeleted: boolean | null;
  /**
   * Sort Order
   * @description Sort direction.
   * @default null
   * @enum {string|null}
   */
  sortOrder: "ASCENDING" | "DESCENDING" | null;
  /**
   * View Type
   * @description View type: 'admin_view' (admin only) or 'domain_public'.
   * @default null
   * @enum {string|null}
   */
  viewType: "admin_view" | "domain_public" | null;
};

/**
 * Type of CURRENTS_API's CURRENTS_API_USERS_LIST tool output.
 */
type CURRENTS_API_USERS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Etag
       * @description ETag of the response.
       * @default null
       */
      etag: string | null;
      /**
       * Kind
       * @description Resource type identifier.
       * @default null
       */
      kind: string | null;
      /**
       * Next Page Token
       * @description Token for fetching the next page of results.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Users
       * @description List of user objects. Each object may contain profile fields like id, primaryEmail, name, etc.
       * @default null
       */
      users: {
          [key: string]: unknown;
      }[] | null;
  } & {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CURRENTS_API's CURRENTS_API_USER_USAGE_REPORT_GET tool input.
 */
type CURRENTS_API_USER_USAGE_REPORT_GET_INPUT = {
  /**
   * Customer Id
   * @description Customer unique ID to retrieve data for.
   * @default null
   */
  customerId: string | null;
  /**
   * Date
   * @description Date of usage in ISO 8601 yyyy-mm-dd format (UTC-08:00, PST).
   */
  date?: string;
  /**
   * Filters
   * @description Comma-separated list of filters using relational operators (==, <>, <, <=, >, >=). Format: app:param operator value.
   * @default null
   */
  filters: string | null;
  /**
   * Group Id Filter
   * @description Comma-separated obfuscated group IDs; only users in at least one specified group are included. Format: id:abc123,id:xyz456
   * @default null
   */
  groupIdFilter: string | null;
  /**
   * Max Results
   * @description Maximum number of results per page.
   * @default null
   */
  maxResults: number | null;
  /**
   * Org Unit Id
   * @description Organizational unit ID to restrict results; excludes data before 2018-12-17 when filtering by org unit.
   * @default null
   */
  orgUnitID: string | null;
  /**
   * Page Token
   * @description Token for retrieving the next page of results.
   * @default null
   */
  pageToken: string | null;
  /**
   * Parameters
   * @description Comma-separated list of app-scoped parameter names to include.
   * @default null
   */
  parameters: string | null;
  /**
   * User Key
   * @description Profile ID or primary email of the user. Use "all" to retrieve reports for all users; must not be a deleted user.
   */
  userKey?: string;
};

/**
 * Type of CURRENTS_API's CURRENTS_API_USER_USAGE_REPORT_GET tool output.
 */
type CURRENTS_API_USER_USAGE_REPORT_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Etag
       * @description ETag of the resource.
       * @default null
       */
      etag: string | null;
      /**
       * Kind
       * @description Type of API resource; for usage reports it's 'admin#reports#usageReports'.
       * @default null
       */
      kind: string | null;
      /**
       * Next Page Token
       * @description Pagination token for next page of results.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Usage Reports
       * @description List of usage report records.
       * @default null
       */
      usageReports: {
          /**
           * Date
           * @description Date of the report request.
           * @default null
           */
          date: string | null;
          /**
           * UsageReportEntity
           * @description Information about the entity related to the report.
           * @default null
           */
          entity: {
              /**
               * Customer Id
               * @description Customer unique ID.
               * @default null
               */
              customerId: string | null;
              /**
               * Entity Id
               * @description Obfuscated entity ID.
               * @default null
               */
              entityId: string | null;
              /**
               * Profile Id
               * @description User's profile ID.
               * @default null
               */
              profileId: string | null;
              /**
               * Type
               * @description Entity type. For user usage reports, value is 'user'.
               * @default null
               */
              type: string | null;
              /**
               * User Email
               * @description User's email address.
               * @default null
               */
              userEmail: string | null;
          } | null;
          /**
           * Etag
           * @description ETag of the resource.
           * @default null
           */
          etag: string | null;
          /**
           * Kind
           * @description Resource type. For usage reports, value is 'admin#reports#usageReport'.
           * @default null
           */
          kind: string | null;
          /**
           * Parameters
           * @description Parameter values in the report.
           * @default null
           */
          parameters: {
              /**
               * Bool Value
               * @description Boolean value.
               * @default null
               */
              boolValue?: boolean | null;
              /**
               * Datetime Value
               * @description Datetime value in RFC3339 format.
               * @default null
               */
              datetimeValue?: string | null;
              /**
               * Int Value
               * @description Integer value represented as string (int64).
               * @default null
               */
              intValue?: string | null;
              /**
               * Msg Value
               * @description List of key/value pairs for message values.
               * @default null
               */
              msgValue?: {
                  /**
                   * Key
                   * @description Field name within a message value.
                   * @default null
                   */
                  key?: string | null;
                  /**
                   * Value
                   * @description Value within a message value.
                   * @default null
                   */
                  value?: string | null;
              }[] | null;
              /**
               * Name
               * @description Parameter name.
               * @default null
               */
              name?: string | null;
              /**
               * String Value
               * @description String value.
               * @default null
               */
              stringValue?: string | null;
          }[] | null;
      }[] | null;
      /**
       * Warnings
       * @description Optional warnings returned by the API.
       * @default null
       */
      warnings: {
          /**
           * Code
           * @description Warning code.
           * @default null
           */
          code: string | null;
          /**
           * Data
           * @description Additional key/value data for the warning.
           * @default null
           */
          data: {
              /**
               * Key
               * @description Key name.
               * @default null
               */
              key: string | null;
              /**
               * Value
               * @description Key value.
               * @default null
               */
              value: string | null;
          }[] | null;
          /**
           * Message
           * @description Warning message.
           * @default null
           */
          message: string | null;
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
 * Type map of all available tool input types for toolkit "CURRENTS_API".
 */
export type CURRENTS_API_TOOL_INPUTS = {
  ACTIVITIES_LIST: CURRENTS_API_ACTIVITIES_LIST_INPUT
  ACTIVITIES_WATCH: CURRENTS_API_ACTIVITIES_WATCH_INPUT
  ENTITY_USAGE_REPORTS_GET: CURRENTS_API_ENTITY_USAGE_REPORTS_GET_INPUT
  USERS_LIST: CURRENTS_API_USERS_LIST_INPUT
  USER_USAGE_REPORT_GET: CURRENTS_API_USER_USAGE_REPORT_GET_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CURRENTS_API".
 */
export type CURRENTS_API_TOOL_OUTPUTS = {
  ACTIVITIES_LIST: CURRENTS_API_ACTIVITIES_LIST_OUTPUT
  ACTIVITIES_WATCH: CURRENTS_API_ACTIVITIES_WATCH_OUTPUT
  ENTITY_USAGE_REPORTS_GET: CURRENTS_API_ENTITY_USAGE_REPORTS_GET_OUTPUT
  USERS_LIST: CURRENTS_API_USERS_LIST_OUTPUT
  USER_USAGE_REPORT_GET: CURRENTS_API_USER_USAGE_REPORT_GET_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CURRENTS_API toolkit.
 */
export const CURRENTS_API = {
  slug: "currents_api",
  tools: {
    /**
     * Tool to retrieve the latest news articles from Currents News API. Use when you need a real-time feed of recent articles.
     */
    ACTIVITIES_LIST: "CURRENTS_API_ACTIVITIES_LIST",
    /**
     * Tool to start a notification channel to watch activities for a specified user and application. Use when needing to receive push notifications for user activity; call after OAuth credentials and webhook endpoint are set up.
     */
    ACTIVITIES_WATCH: "CURRENTS_API_ACTIVITIES_WATCH",
    /**
     * Tool to retrieve usage statistics for a specific Google Workspace entity. Use when you need to analyze entity usage on a particular date.
     */
    ENTITY_USAGE_REPORTS_GET: "CURRENTS_API_ENTITY_USAGE_REPORTS_GET",
    /**
     * Tool to list users in a Google Workspace domain. Note: - When the provided base_url points to Currents News API (api.currentsapi.services), this action will gracefully fall back to listing latest news articles to ensure a valid response, since the Currents News API does not expose a users endpoint. - When the base_url points to Google Admin Directory API, it will list users from the domain/customer specified.
     */
    USERS_LIST: "CURRENTS_API_USERS_LIST",
    /**
     * Tool to retrieve the usage report for a specified user on a given date. Use after confirming the userKey and date. Use when detailed usage metrics are needed for auditing or monitoring.
     */
    USER_USAGE_REPORT_GET: "CURRENTS_API_USER_USAGE_REPORT_GET",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CURRENTS_API".
 */
export type CURRENTS_API_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CURRENTS_API".
 */
export type CURRENTS_API_TRIGGER_EVENTS = {}
