// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of KIBANA's KIBANA_DELETE_ACTION tool input.
 */
type KIBANA_DELETE_ACTION_INPUT = {
  /**
   * Action Id
   * @description The ID of the action to delete.
   */
  action_id?: string;
  /**
   * Space Id
   * @description The space ID to delete the action from. If not provided, the default space is used.
   * @default null
   */
  space_id: string | null;
};

/**
 * Type of KIBANA's KIBANA_DELETE_ACTION tool output.
 */
type KIBANA_DELETE_ACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A message indicating the result of the delete operation.
       * @default Action deleted successfully.
       */
      message: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KIBANA's KIBANA_DELETE_ALERTING_RULES tool input.
 */
type KIBANA_DELETE_ALERTING_RULES_INPUT = {
  /**
   * Id
   * @description The ID of the rule to delete.
   */
  id?: string;
  /**
   * Kbn Xsrf
   * @description A required header to protect against CSRF attacks.
   */
  kbn_xsrf?: string;
};

/**
 * Type of KIBANA's KIBANA_DELETE_ALERTING_RULES tool output.
 */
type KIBANA_DELETE_ALERTING_RULES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Success message indicating the rule was deleted.
       * @default Rule deleted successfully.
       */
      message: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KIBANA's KIBANA_DELETE_CONNECTORS tool input.
 */
type KIBANA_DELETE_CONNECTORS_INPUT = {
  /**
   * Id
   * @description The unique identifier of the connector to be deleted.
   */
  id?: string;
  /**
   * Space Id
   * @description An identifier for the space. If not provided, the default space is used.
   * @default null
   */
  space_id: string | null;
};

/**
 * Type of KIBANA's KIBANA_DELETE_CONNECTORS tool output.
 */
type KIBANA_DELETE_CONNECTORS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A message indicating the result of the delete operation.
       */
      message: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KIBANA's KIBANA_DELETE_FLEET_OUTPUT tool input.
 */
type KIBANA_DELETE_FLEET_OUTPUT_INPUT = {
  /**
   * Elastic Api Version
   * @description Specifies the API version to use. Defaults to '2023-10-31' if not provided.
   * @default 2023-10-31
   */
  elastic_api_version: string | null;
  /**
   * Kbn Xsrf
   * @description A header to protect against Cross-Site Request Forgery (CSRF) attacks. Typically 'true' or a generated token.
   * @default true
   */
  kbn_xsrf: string;
  /**
   * Output Id
   * @description The ID of the output configuration to delete.
   */
  output_id?: string;
};

/**
 * Type of KIBANA's KIBANA_DELETE_FLEET_OUTPUT tool output.
 */
type KIBANA_DELETE_FLEET_OUTPUT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description An optional error type, usually present in case of errors.
       * @default null
       */
      error: string | null;
      /**
       * Id
       * @description The ID of the output that was deleted.
       * @default null
       */
      id: string | null;
      /**
       * Message
       * @description An optional message, usually present in case of errors.
       * @default null
       */
      message: string | null;
      /**
       * Status Code
       * @description An optional status code, usually present in case of errors.
       * @default null
       */
      statusCode: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KIBANA's KIBANA_DELETE_FLEET_PROXY tool input.
 */
type KIBANA_DELETE_FLEET_PROXY_INPUT = {
  /**
   * Kbn Xsrf
   * @description A header to protect against Cross-Site Request Forgery (CSRF) attacks. Typically 'true' or a generated token.
   * @default true
   */
  kbnXsrf: string;
  /**
   * Proxy Id
   * @description The ID of the proxy configuration to delete.
   */
  proxyId?: string;
};

/**
 * Type of KIBANA's KIBANA_DELETE_FLEET_PROXY tool output.
 */
type KIBANA_DELETE_FLEET_PROXY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A message indicating the result of the deletion.
       * @default null
       */
      message: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KIBANA's KIBANA_DELETE_LIST tool input.
 */
type KIBANA_DELETE_LIST_INPUT = {
  /**
   * Delete References
   * @description Determines whether exception items referencing this value list should be deleted.
   * @default false
   */
  delete_references: boolean | null;
  /**
   * Id
   * @description List's id value.
   */
  id?: string;
  /**
   * Ignore References
   * @description Determines whether to delete value list without performing any additional checks of where this list may be utilized.
   * @default false
   */
  ignore_references: boolean | null;
};

/**
 * Type of KIBANA's KIBANA_DELETE_LIST tool output.
 */
type KIBANA_DELETE_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * @Timestamp
       * Format: date-time
       * @description Timestamp of the operation.
       * @default null
       */
      "@timestamp": string | null;
      /**
       *  Version
       * @description The version id, normally returned by the API when the document is retrieved. Use it to ensure updates are done against the latest version.
       * @default null
       */
      _version: string | null;
      /**
       * Created At
       * Format: date-time
       * @description Autogenerated date of object creation.
       */
      created_at: string;
      /**
       * Created By
       * @description Autogenerated value - user that created object.
       */
      created_by: string;
      /**
       * Description
       * @description Describes the value list. A string that is not empty and does not contain only whitespace.
       */
      description: string;
      /**
       * Deserializer
       * @description Deserializer used.
       * @default null
       */
      deserializer: string | null;
      /**
       * Id
       * @description A string that is not empty and does not contain only whitespace.
       */
      id: string;
      /**
       * Immutable
       * @description Indicates if the list is immutable.
       * @default null
       */
      immutable: boolean | null;
      /**
       * Name
       * @description Name of the list.
       */
      name: string;
      /**
       * Serializer
       * @description Serializer used.
       * @default null
       */
      serializer: string | null;
      /**
       * Tie Breaker Id
       * @description Tie breaker ID.
       */
      tie_breaker_id: string;
      /**
       * Type
       * @description Type of the list. Values are binary, boolean, byte, date, date_nanos, date_range, double, double_range, float, float_range, geo_point, geo_shape, half_float, integer, integer_range, ip, ip_range, keyword, long, long_range, shape, short, or text.
       */
      type: string;
      /**
       * Updated At
       * Format: date-time
       * @description Autogenerated date of last object update.
       */
      updated_at: string;
      /**
       * Updated By
       * @description Autogenerated value - user that last updated object.
       */
      updated_by: string;
      /**
       * Version
       * @description The document version number.
       */
      version: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KIBANA's KIBANA_DELETE_OSQUERY_SAVED_QUERIES tool input.
 */
type KIBANA_DELETE_OSQUERY_SAVED_QUERIES_INPUT = {
  /**
   * Id
   * @description The ID of the saved Osquery query to delete.
   */
  id?: string;
};

/**
 * Type of KIBANA's KIBANA_DELETE_OSQUERY_SAVED_QUERIES tool output.
 */
type KIBANA_DELETE_OSQUERY_SAVED_QUERIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A message indicating the result of the deletion.
       * @default null
       */
      message: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KIBANA's KIBANA_DELETE_SAVED_OBJECTS tool input.
 */
type KIBANA_DELETE_SAVED_OBJECTS_INPUT = {
  /**
   * Force
   * @description When true, forces the deletion of objects that exist in multiple namespaces.
   * @default null
   */
  force: boolean | null;
  /**
   * Id
   * @description The ID of the saved object to delete.
   */
  id?: string;
  /**
   * Kbn Xsrf
   * @description A required header to protect against CSRF attacks. Defaults to 'true'.
   * @default true
   */
  kbn_xsrf: string;
  /**
   * Type
   * @description The type of the saved object.
   */
  type?: string;
};

/**
 * Type of KIBANA's KIBANA_DELETE_SAVED_OBJECTS tool output.
 */
type KIBANA_DELETE_SAVED_OBJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Success message indicating the object was deleted.
       * @default Object deleted successfully.
       */
      message: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KIBANA's KIBANA_FIND_ALERTS tool input.
 */
type KIBANA_FIND_ALERTS_INPUT = {
  /**
   * Aggs
   * @description Defines aggregations to be performed. Refer to Elasticsearch aggregation documentation.
   * @default null
   */
  aggs: {
      [key: string]: unknown;
  } | null;
  /**
   * Query
   * @description Elasticsearch query to filter alerts. For example, to match all alerts: {"match_all": {}}
   */
  query?: {
      /**
       * Match All
       * @description Matches all documents.
       */
      match_all?: {
          [key: string]: unknown;
      } | null;
  };
  /**
   * Runtime Mappings
   * @description Defines runtime fields. Refer to Elasticsearch runtime fields documentation.
   * @default null
   */
  runtime_mappings: {
      [key: string]: unknown;
  } | null;
  /**
   * Size
   * @description Number of alerts to return. Defaults to a server-side limit if not specified.
   * @default null
   */
  size: number | null;
};

/**
 * Type of KIBANA's KIBANA_FIND_ALERTS tool output.
 */
type KIBANA_FIND_ALERTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Shards
       * @description Shard statistics.
       */
      _shards: {
          /**
           * Failed
           * @description Number of failed shards.
           */
          failed: number;
          /**
           * Skipped
           * @description Number of skipped shards.
           */
          skipped: number;
          /**
           * Successful
           * @description Number of successful shards.
           */
          successful: number;
          /**
           * Total
           * @description Total number of shards.
           */
          total: number;
      };
      /**
       * Aggregations
       * @description Contains aggregation results if aggregations were specified.
       * @default null
       */
      aggregations: {
          [key: string]: unknown;
      } | null;
      /**
       * Hits
       * @description Contains the search results.
       */
      hits: {
          /**
           * Hits
           * @description List of matching alerts.
           */
          hits: {
              /**
               *  Id
               * @description The unique ID of the alert.
               */
              _id: string;
              /**
               *  Index
               * @description The index the alert originated from.
               */
              _index: string;
              /**
               *  Score
               * @description The relevance score of the alert (if applicable).
               * @default null
               */
              _score: number | null;
              /**
               *  Source
               * @description The source document of the alert.
               */
              _source: {
                  [key: string]: unknown;
              };
          }[];
          /**
           * Max Score
           * @description Maximum score of the hits.
           * @default null
           */
          max_score: number | null;
          /**
           * Total
           * @description Total number of matching alerts.
           */
          total: {
              /**
               * Relation
               * @description Indicates if the total is exact or an estimate (e.g., 'eq', 'gte').
               */
              relation: string;
              /**
               * Value
               * @description Number of matching alerts.
               */
              value: number;
          };
      };
      /**
       * Timed Out
       * @description Indicates if the search timed out.
       */
      timed_out: boolean;
      /**
       * Took
       * @description Time taken to execute the search in milliseconds.
       */
      took: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KIBANA's KIBANA_GET_ACTION_TYPES tool input.
 */
type KIBANA_GET_ACTION_TYPES_INPUT = object;

/**
 * Type of KIBANA's KIBANA_GET_ACTION_TYPES tool output.
 */
type KIBANA_GET_ACTION_TYPES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Action Types
       * @description List of available action types.
       */
      action_types: {
          /**
           * Enabled
           * @description Indicates if the action type is enabled.
           * @default null
           */
          enabled: boolean | null;
          /**
           * Id
           * @description The ID of the action type.
           */
          id: string;
          /**
           * Minimum License Required
           * @description The minimum license required for this action type.
           * @default null
           */
          minimum_license_required: string | null;
          /**
           * Name
           * @description The display name of the action type.
           */
          name: string;
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
 * Type of KIBANA's KIBANA_GET_ALERTING_RULES tool input.
 */
type KIBANA_GET_ALERTING_RULES_INPUT = {
  /**
   * Default Search Operator
   * @description Default operator for the `simple_query_string`. Default is `OR`.
   * @default OR
   * @enum {string|null}
   */
  default_search_operator: "OR" | "AND" | null;
  /**
   * Fields
   * @description Fields to return in the `attributes` key of the response.
   * @default null
   */
  fields: string[] | null;
  /**
   * Filter
   * @description A KQL string to filter with an attribute from your saved object.
   * @default null
   */
  filter: string | null;
  /**
   * Filter Consumers
   * @description List of consumers to filter.
   * @default null
   */
  filter_consumers: string[] | null;
  /**
   * GetAlertingRulesRequestHasReference
   * @description Filters rules with a relation to reference objects of a specific type and identifier.
   * @default null
   */
  has_reference: {
      /**
       * Id
       * @description Identifier of the reference object.
       */
      id: string;
      /**
       * Type
       * @description Type of the reference object.
       */
      type: string;
  } | null;
  /**
   * Page
   * @description Page number to return. Minimum value is 1; default is 1.
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of rules to return per page. Minimum value is 0; default is 10.
   * @default 10
   */
  per_page: number | null;
  /**
   * Search
   * @description An Elasticsearch `simple_query_string` to filter the rules.
   * @default null
   */
  search: string | null;
  /**
   * Search Fields
   * @description Fields to perform the `simple_query_string` query against.
   * @default null
   */
  search_fields: string[] | null;
  /**
   * Sort Field
   * @description Field used to sort the results; must exist in the `attributes` key of the response.
   * @default null
   */
  sort_field: string | null;
  /**
   * Sort Order
   * @description Sort order.
   * @default null
   * @enum {string|null}
   */
  sort_order: "asc" | "desc" | null;
};

/**
 * Type of KIBANA's KIBANA_GET_ALERTING_RULES tool output.
 */
type KIBANA_GET_ALERTING_RULES_OUTPUT = {
  /**
   * Data
   * @description Array of rule objects.
   */
  data?: {
      /**
       * Actions
       * @description Actions associated with the rule.
       */
      actions: {
          /**
           * Connector Type Id
           * @description Identifier for the connector type.
           */
          connector_type_id: string;
          /**
           * Group
           * @description Action group.
           */
          group: string;
          /**
           * Id
           * @description Identifier for the action.
           */
          id: string;
          /**
           * Params
           * @description Parameters for the action.
           */
          params: {
              [key: string]: unknown;
          };
      }[];
      /**
       * Api Key Owner
       * @description Owner of the API key associated with the rule.
       * @default null
       */
      api_key_owner: string | null;
      /**
       * Consumer
       * @description Consumer application of the rule.
       */
      consumer: string;
      /**
       * Created At
       * @description Timestamp when the rule was created.
       */
      created_at: string;
      /**
       * Created By
       * @description User who created the rule.
       * @default null
       */
      created_by: string | null;
      /**
       * Enabled
       * @description Indicates if the rule is enabled.
       */
      enabled: boolean;
      /**
       * RuleExecutionStatus
       * @description Execution status of the rule.
       * @default null
       */
      execution_status: {
          /**
           * Last Duration
           * @description Duration of the last execution in milliseconds.
           * @default null
           */
          last_duration: number | null;
          /**
           * Last Execution Date
           * @description Timestamp of the last execution.
           * @default null
           */
          last_execution_date: string | null;
          /**
           * Status
           * @description Status of the last execution.
           * @default null
           */
          status: string | null;
      } | null;
      /**
       * Id
       * @description Identifier for the rule.
       */
      id: string;
      /**
       * RuleLastRun
       * @description Information about the last run.
       * @default null
       */
      last_run: {
          /**
           * RuleAlertsCount
           * @description Count of alerts.
           * @default null
           */
          alerts_count: {
              /**
               * Active
               * @description Number of active alerts.
               * @default null
               */
              active: number | null;
              /**
               * Ignored
               * @description Number of ignored alerts.
               * @default null
               */
              ignored: number | null;
              /**
               * New
               * @description Number of new alerts.
               * @default null
               */
              new: number | null;
              /**
               * Recovered
               * @description Number of recovered alerts.
               * @default null
               */
              recovered: number | null;
          } | null;
          /**
           * Outcome
           * @description Outcome of the last run.
           * @default null
           */
          outcome: string | null;
          /**
           * Outcome Msg
           * @description Outcome message.
           * @default null
           */
          outcome_msg: string | null;
          /**
           * Warning
           * @description Warning message.
           * @default null
           */
          warning: string | null;
      } | null;
      /**
       * Mute All
       * @description Indicates if all actions are muted.
       * @default null
       */
      mute_all: boolean | null;
      /**
       * Muted Alert Ids
       * @description List of muted alert IDs.
       * @default null
       */
      muted_alert_ids: string[] | null;
      /**
       * Name
       * @description Name of the rule.
       */
      name: string;
      /**
       * Next Run
       * @description Timestamp of the next scheduled run.
       * @default null
       */
      next_run: string | null;
      /**
       * Notify When
       * @description Condition for sending notifications.
       */
      notify_when: string;
      /**
       * Params
       * @description Parameters specific to the rule type.
       */
      params: {
          [key: string]: unknown;
      };
      /**
       * Rule Type Id
       * @description Identifier for the rule type.
       */
      rule_type_id: string;
      /**
       * Schedule
       * @description Schedule information.
       */
      schedule: {
          [key: string]: unknown;
      };
      /**
       * Scheduled Task Id
       * @description Identifier for the scheduled task.
       * @default null
       */
      scheduled_task_id: string | null;
      /**
       * Tags
       * @description Tags associated with the rule.
       */
      tags: string[];
      /**
       * Updated At
       * @description Timestamp when the rule was last updated.
       */
      updated_at: string;
      /**
       * Updated By
       * @description User who last updated the rule.
       * @default null
       */
      updated_by: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Page
   * @description Current page number.
   */
  page?: number;
  /**
   * Per Page
   * @description Number of rules returned per page.
   */
  per_page?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of rules matching the query.
   */
  total?: number;
};

/**
 * Type of KIBANA's KIBANA_GET_ALERT_TYPES tool input.
 */
type KIBANA_GET_ALERT_TYPES_INPUT = object;

/**
 * Type of KIBANA's KIBANA_GET_ALERT_TYPES tool output.
 */
type KIBANA_GET_ALERT_TYPES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Alert Types
       * @description A list of alert types.
       */
      alert_types: {
          /**
           * Action Groups
           * @description Action groups for this rule type.
           */
          action_groups: {
              /**
               * Id
               * @description Action group ID.
               */
              id: string;
              /**
               * Name
               * @description Action group name.
               */
              name: string;
          }[];
          /**
           * Api Key Required
           * @description Whether an API key is required.
           * @default null
           */
          api_key_required: boolean | null;
          /**
           * Authorized Consumers
           * @description Authorized consumers.
           * @default null
           */
          authorized_consumers: {
              [key: string]: unknown;
          } | null;
          /**
           * Default Action Group Id
           * @description Default action group ID.
           */
          default_action_group_id: string;
          /**
           * Enabled In License
           * @description Is enabled under current license.
           */
          enabled_in_license: boolean;
          /**
           * Id
           * @description Rule type ID.
           */
          id: string;
          /**
           * Is Exportable
           * @description Indicates if the rule type is exportable.
           * @default null
           */
          is_exportable: boolean | null;
          /**
           * Minimum License Required
           * @description Minimum license required.
           */
          minimum_license_required: string;
          /**
           * Name
           * @description Rule type name.
           */
          name: string;
          /**
           * Producer
           * @description Producer app.
           */
          producer: string;
          /**
           * AlertTypeRecoveryActionGroup
           * @description Recovery action group details.
           * @default null
           */
          recovery_action_group: {
              /**
               * Action Throttle
               * @description Action throttle period.
               * @default null
               */
              action_throttle: string | null;
              /**
               * Id
               * @description Recovery action group ID.
               */
              id: string;
              /**
               * Name
               * @description Recovery action group name.
               */
              name: string;
          } | null;
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
 * Type of KIBANA's KIBANA_GET_CASES tool input.
 */
type KIBANA_GET_CASES_INPUT = {
  /**
   * Assignees
   * @description Filters the returned cases by assignees. Valid values are `none` or unique identifiers for the user profiles.
   * @default null
   */
  assignees: string[] | null;
  /**
   * Default Search Operator
   * @description The default operator to use for the `simple_query_string`.
   * @default null
   * @enum {string|null}
   */
  defaultSearchOperator: "OR" | "AND" | null;
  /**
   * From Date Param
   * @description Returns cases created after a specific date (ISO 8601 format).
   * @default null
   */
  from_date_param: string | null;
  /**
   * Owner
   * @description Filters cases by owner. Valid values are `cases`, `observability`, and `securitySolution`.
   * @default null
   */
  owner: string[] | null;
  /**
   * Page
   * @description The page number of objects to return.
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description The number of objects to return per page.
   * @default 20
   */
  perPage: number | null;
  /**
   * Reporters
   * @description Filters cases by reporters' usernames.
   * @default null
   */
  reporters: string[] | null;
  /**
   * Search
   * @description Filters response objects using an Elasticsearch `simple_query_string` query.
   * @default null
   */
  search: string | null;
  /**
   * Search Fields
   * @description Fields to perform the `simple_query_string` parsed query against.
   * @default null
   */
  searchFields: string[] | null;
  /**
   * Severity
   * @description Filters cases by severity.
   * @default null
   * @enum {string|null}
   */
  severity: "critical" | "high" | "medium" | "low" | null;
  /**
   * Sort Field
   * @description Determines which field to sort results by.
   * @default createdAt
   * @enum {string|null}
   */
  sortField: "createdAt" | "updatedAt" | null;
  /**
   * Sort Order
   * @description Determines the sorting order.
   * @default desc
   * @enum {string|null}
   */
  sortOrder: "asc" | "desc" | null;
  /**
   * Status
   * @description Filters cases by status.
   * @default null
   * @enum {string|null}
   */
  status: "open" | "in-progress" | "closed" | null;
  /**
   * Tags
   * @description Filters cases by tags.
   * @default null
   */
  tags: string[] | null;
  /**
   * To Date Param
   * @description Returns cases created before a specific date (ISO 8601 format).
   * @default null
   */
  to_date_param: string | null;
};

/**
 * Type of KIBANA's KIBANA_GET_CASES tool output.
 */
type KIBANA_GET_CASES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Cases */
      cases: {
          /** Assignees */
          assignees: {
              /**
               * Email
               * @default null
               */
              email: string | null;
              /**
               * Full Name
               * @default null
               */
              fullName: string | null;
              /** Username */
              username: string;
          }[];
          /**
           * Closed At
           * @default null
           */
          closedAt: string | null;
          /**
           * CaseUser
           * @default null
           */
          closedBy: {
              /**
               * Email
               * @default null
               */
              email: string | null;
              /**
               * Full Name
               * @default null
               */
              fullName: string | null;
              /** Username */
              username: string;
          } | null;
          /** Comments */
          comments: {
              [key: string]: unknown;
          }[];
          /** Connector */
          connector: {
              /**
               * Fields
               * @default null
               */
              fields: {
                  [key: string]: unknown;
              } | null;
              /** Id */
              id: string;
              /** Name */
              name: string;
              /** Type */
              type: string;
          };
          /** Created At */
          createdAt: string;
          /** Created By */
          createdBy: {
              /**
               * Email
               * @default null
               */
              email: string | null;
              /**
               * Full Name
               * @default null
               */
              fullName: string | null;
              /** Username */
              username: string;
          };
          /** Description */
          description: string;
          /**
           * Duration
           * @default null
           */
          duration: number | null;
          /**
           * CaseExternalService
           * @default null
           */
          externalService: {
              /** Connector Id */
              connectorId: string;
              /** External Id */
              externalId: string;
              /**
               * External Title
               * @default null
               */
              externalTitle: string | null;
              /**
               * External Url
               * @default null
               */
              externalUrl: string | null;
              /** Pushed At */
              pushedAt: string;
              /** Pushed By */
              pushedBy: {
                  /**
                   * Email
                   * @default null
                   */
                  email: string | null;
                  /**
                   * Full Name
                   * @default null
                   */
                  fullName: string | null;
                  /** Username */
                  username: string;
              };
          } | null;
          /** Id */
          id: string;
          /** Owner */
          owner: string;
          /** Settings */
          settings: {
              [key: string]: unknown;
          };
          /** Severity */
          severity: string;
          /** Status */
          status: string;
          /** Tags */
          tags: string[];
          /** Title */
          title: string;
          /** Total Alerts */
          totalAlerts: number;
          /** Total Comment */
          totalComment: number;
          /**
           * Updated At
           * @default null
           */
          updatedAt: string | null;
          /**
           * CaseUser
           * @default null
           */
          updatedBy: {
              /**
               * Email
               * @default null
               */
              email: string | null;
              /**
               * Full Name
               * @default null
               */
              fullName: string | null;
              /** Username */
              username: string;
          } | null;
          /** Version */
          version: string;
      }[];
      /** Count Closed Cases */
      countClosedCases: number;
      /** Count In Progress Cases */
      countInProgressCases: number;
      /** Count Open Cases */
      countOpenCases: number;
      /** Page */
      page: number;
      /** Per Page */
      perPage: number;
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
 * Type of KIBANA's KIBANA_GET_CONNECTORS tool input.
 */
type KIBANA_GET_CONNECTORS_INPUT = {
  /**
   * Space Id
   * @description An identifier for the space. If not provided, the default space is used.
   * @default null
   */
  space_id: string | null;
};

/**
 * Type of KIBANA's KIBANA_GET_CONNECTORS tool output.
 */
type KIBANA_GET_CONNECTORS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Connectors
       * @description A list of connectors.
       */
      connectors?: {
          /**
           * ConnectorConfig
           * @description The configuration details of the connector.
           * @default null
           */
          config: Record<string, never> | null;
          /**
           * Connector Type Id
           * @description The type identifier of the connector.
           */
          connector_type_id: string;
          /**
           * Id
           * @description The unique identifier for the connector.
           */
          id: string;
          /**
           * Is Deprecated
           * @description Indicates if the connector is deprecated.
           * @default null
           */
          is_deprecated: boolean | null;
          /**
           * Is Missing Secrets
           * @description Indicates if the connector is missing secrets.
           * @default null
           */
          is_missing_secrets: boolean | null;
          /**
           * Is Preconfigured
           * @description Indicates if the connector is preconfigured.
           * @default null
           */
          is_preconfigured: boolean | null;
          /**
           * Is System Action
           * @description Indicates if the connector is a system action.
           * @default null
           */
          is_system_action: boolean | null;
          /**
           * Name
           * @description The name of the connector.
           */
          name: string;
          /**
           * Referenced By Count
           * @description The number of saved objects referencing this connector.
           * @default null
           */
          referenced_by_count: number | null;
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
 * Type of KIBANA's KIBANA_GET_DATA_VIEWS tool input.
 */
type KIBANA_GET_DATA_VIEWS_INPUT = {
  /**
   * Pattern
   * @description A pattern to filter data views by name.
   * @default null
   */
  pattern: string | null;
};

/**
 * Type of KIBANA's KIBANA_GET_DATA_VIEWS tool output.
 */
type KIBANA_GET_DATA_VIEWS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Data Views
       * @description An array of data view objects.
       */
      data_views: {
          /**
           * Fields
           * @description An array of field objects associated with the data view.
           */
          fields: {
              /**
               * Aggregatable
               * @description Indicates if the field can be used in aggregations.
               */
              aggregatable: boolean;
              /**
               * Name
               * @description The name of the field.
               */
              name: string;
              /**
               * Searchable
               * @description Indicates if the field can be used in searches.
               */
              searchable: boolean;
              /**
               * Type
               * @description The data type of the field.
               */
              type: string;
          }[];
          /**
           * Id
           * @description The unique identifier for the data view.
           */
          id: string;
          /**
           * Title
           * @description The title of the data view.
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
 * Type of KIBANA's KIBANA_GET_DETECTION_ENGINE_RULES_FIND tool input.
 */
type KIBANA_GET_DETECTION_ENGINE_RULES_FIND_INPUT = {
  /**
   * Fields
   * @description Specifies which fields to include in the response.
   * @default null
   */
  fields: string[] | null;
  /**
   * Filter
   * @description Filters the returned results based on specified criteria. Example: 'kql_query_here' or 'saved_query_id:some_id'.
   * @default null
   */
  filter: string | null;
  /**
   * Gaps Range End
   * @description Gaps range end. ISO 8601 date string.
   * @default null
   */
  gaps_range_end: string | null;
  /**
   * Gaps Range Start
   * @description Gaps range start. ISO 8601 date string.
   * @default null
   */
  gaps_range_start: string | null;
  /**
   * Page
   * @description Page number. Must be greater than or equal to 1. Defaults to 1.
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of rules per page. Must be greater than or equal to 0. Defaults to 20.
   * @default 20
   */
  per_page: number | null;
  /**
   * Sort Field
   * @description Field to sort by.
   * @default null
   */
  sort_field: string | null;
  /**
   * Sort Order
   * @description Sort order. Defaults to desc.
   * @default desc
   * @enum {string|null}
   */
  sort_order: "asc" | "desc" | null;
};

/**
 * Type of KIBANA's KIBANA_GET_DETECTION_ENGINE_RULES_FIND tool output.
 */
type KIBANA_GET_DETECTION_ENGINE_RULES_FIND_OUTPUT = {
  /**
   * Data
   * @description Array of detection rules.
   */
  data?: {
      /**
       * Created At
       * @description The creation timestamp of the rule.
       * @default null
       */
      created_at: string | null;
      /**
       * Created By
       * @description The user who created the rule.
       * @default null
       */
      created_by: string | null;
      /**
       * Description
       * @description The description of the rule.
       * @default null
       */
      description: string | null;
      /**
       * Enabled
       * @description Indicates if the rule is enabled.
       * @default null
       */
      enabled: boolean | null;
      /**
       * Id
       * @description The ID of the rule.
       * @default null
       */
      id: string | null;
      /**
       * Name
       * @description The name of the rule.
       * @default null
       */
      name: string | null;
      /**
       * Risk Score
       * @description Risk score of the rule.
       * @default null
       */
      risk_score: number | null;
      /**
       * Rule Id
       * @description The rule_id of the rule, often same as id.
       * @default null
       */
      rule_id: string | null;
      /**
       * Severity
       * @description Severity of the rule.
       * @default null
       */
      severity: string | null;
      /**
       * Tags
       * @description Tags associated with the rule.
       * @default null
       */
      tags: string[] | null;
      /**
       * Type
       * @description Type of the rule.
       * @default null
       */
      type: string | null;
      /**
       * Updated At
       * @description The last update timestamp of the rule.
       * @default null
       */
      updated_at: string | null;
      /**
       * Updated By
       * @description The user who last updated the rule.
       * @default null
       */
      updated_by: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Page
   * @description Current page number.
   */
  page?: number;
  /**
   * Per Page
   * @description Number of rules per page.
   */
  perPage?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of rules found.
   */
  total?: number;
};

/**
 * Type of KIBANA's KIBANA_GET_ENDPOINT_LIST_ITEMS tool input.
 */
type KIBANA_GET_ENDPOINT_LIST_ITEMS_INPUT = {
  /**
   * Filter
   * @description Filters results using `<field name>:<field value>` syntax. Minimum length is 1.
   * @default null
   */
  filter: string | null;
  /**
   * Page
   * @description Page number to return. Minimum value is 0.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page. Minimum value is 0.
   * @default null
   */
  per_page: number | null;
  /**
   * Sort Field
   * @description Field used to sort results. Minimum length is 1.
   * @default null
   */
  sort_field: string | null;
  /**
   * SortOrderEnum
   * @description Sort order, either `desc` or `asc`.
   * @default null
   * @enum {string|null}
   */
  sort_order: "desc" | "asc" | null;
};

/**
 * Type of KIBANA's KIBANA_GET_ENDPOINT_LIST_ITEMS tool output.
 */
type KIBANA_GET_ENDPOINT_LIST_ITEMS_OUTPUT = {
  /**
   * Data
   * @description List of endpoint list items.
   */
  data?: {
      /**
       *  Version
       * @description Version ID for concurrency control.
       */
      _version: string;
      /**
       * Comments
       * @description Comments on the item.
       */
      comments: {
          /**
           * Comment
           * @description Comment text.
           */
          comment: string;
          /**
           * Created At
           * @description Creation timestamp.
           */
          created_at: string;
          /**
           * Created By
           * @description Creator's identifier.
           */
          created_by: string;
          /**
           * Id
           * @description Comment ID.
           */
          id: string;
          /**
           * Updated At
           * @description Last update timestamp.
           * @default null
           */
          updated_at: string | null;
          /**
           * Updated By
           * @description Last updater's identifier.
           * @default null
           */
          updated_by: string | null;
      }[];
      /**
       * Created At
       * @description Item creation timestamp.
       */
      created_at: string;
      /**
       * Created By
       * @description Item creator's identifier.
       */
      created_by: string;
      /**
       * Description
       * @description Description of the exception list item.
       */
      description: string;
      /**
       * Entries
       * @description Exception entries.
       */
      entries: Record<string, never>[];
      /**
       * Expire Time
       * @description Expiration date in ISO format.
       * @default null
       */
      expire_time: string | null;
      /**
       * Tags
       * @description Tags for categorization.
       * @default null
       */
      tags: string[] | null;
      /**
       * Tie Breaker Id
       * @description Field for sorting and returning items correctly.
       */
      tie_breaker_id: string;
      /**
       * Type
       * @description Type of exception item, e.g., `simple`.
       */
      type: string;
      /**
       * Updated At
       * @description Last update timestamp.
       */
      updated_at: string;
      /**
       * Updated By
       * @description Last updater's identifier.
       */
      updated_by: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Page
   * @description Current page number.
   */
  page?: number;
  /**
   * Per Page
   * @description Number of items per page.
   */
  per_page?: number;
  /**
   * Pit
   * @description Point-in-time ID for search.
   * @default null
   */
  pit: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of items.
   */
  total?: number;
};

/**
 * Type of KIBANA's KIBANA_GET_ENTITY_STORE_ENGINES tool input.
 */
type KIBANA_GET_ENTITY_STORE_ENGINES_INPUT = object;

/**
 * Type of KIBANA's KIBANA_GET_ENTITY_STORE_ENGINES tool output.
 */
type KIBANA_GET_ENTITY_STORE_ENGINES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Engines
       * @description A list of engines from the entity store.
       */
      engines: {
          /**
           * Id
           * @description The ID of the engine.
           */
          id: string;
          /**
           * Name
           * @description The name of the engine.
           */
          name: string;
          /**
           * Type
           * @description The type of the engine.
           */
          type: string;
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
 * Type of KIBANA's KIBANA_GET_ENTITY_STORE_ENTITIES_LIST tool input.
 */
type KIBANA_GET_ENTITY_STORE_ENTITIES_LIST_INPUT = {
  /**
   * Entity Types
   * @description Types of entities to list; valid values are 'user', 'host', or 'service'.
   */
  entity_types?: string[];
  /**
   * Filter Query
   * @description Elasticsearch query to filter results.
   * @default null
   */
  filterQuery: string | null;
  /**
   * Page
   * @description Page number, minimum value is 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of records per page, minimum value is 1, maximum value is 10000.
   * @default null
   */
  per_page: number | null;
  /**
   * Sort Field
   * @description Field to sort by.
   * @default null
   */
  sort_field: string | null;
  /**
   * SortOrderEnum
   * @description Sort order, either 'asc' or 'desc'.
   * @default null
   * @enum {string|null}
   */
  sort_order: "asc" | "desc" | null;
};

/**
 * Type of KIBANA's KIBANA_GET_ENTITY_STORE_ENTITIES_LIST tool output.
 */
type KIBANA_GET_ENTITY_STORE_ENTITIES_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Inspect */
      inspect: {
          /**
           * Dsl
           * @description The DSL queries used.
           */
          dsl: string[];
          /**
           * Response
           * @description The responses from Elasticsearch.
           */
          response: string[];
      };
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Per Page
       * @description Number of records per page.
       */
      per_page: number;
      /**
       * Records
       * @description List of entity records.
       */
      records: {
          [key: string]: unknown;
      }[];
      /**
       * Total
       * @description Total number of records.
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
 * Type of KIBANA's KIBANA_GET_ENTITY_STORE_STATUS tool input.
 */
type KIBANA_GET_ENTITY_STORE_STATUS_INPUT = object;

/**
 * Type of KIBANA's KIBANA_GET_ENTITY_STORE_STATUS tool output.
 */
type KIBANA_GET_ENTITY_STORE_STATUS_OUTPUT = {
  /**
   * EntityStoreStatus
   * @description The status details of the entity store.
   * @default null
   */
  data: {
      /**
       * Status
       * @description The status of the entity store.
       * @default null
       */
      status: string | null;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KIBANA's KIBANA_GET_FLEET_AGENTS_AVAILABLE_VERSIONS tool input.
 */
type KIBANA_GET_FLEET_AGENTS_AVAILABLE_VERSIONS_INPUT = {
  /**
   * Elastic Api Version
   * @description Specifies the API version to use.
   * @default 2023-10-31
   */
  "elastic-api-version": string | null;
};

/**
 * Type of KIBANA's KIBANA_GET_FLEET_AGENTS_AVAILABLE_VERSIONS tool output.
 */
type KIBANA_GET_FLEET_AGENTS_AVAILABLE_VERSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description A list of available Elastic Agent versions.
       */
      items: string[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KIBANA's KIBANA_GET_FLEET_AGENTS_SETUP_STATUS tool input.
 */
type KIBANA_GET_FLEET_AGENTS_SETUP_STATUS_INPUT = object;

/**
 * Type of KIBANA's KIBANA_GET_FLEET_AGENTS_SETUP_STATUS tool output.
 */
type KIBANA_GET_FLEET_AGENTS_SETUP_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Details
       * @description Additional details about the setup status.
       * @default null
       */
      details: {
          [key: string]: unknown;
      } | null;
      /**
       * Is Setup
       * @description Indicates if Fleet agents are set up.
       * @default null
       */
      is_setup: boolean | null;
      /**
       * Status
       * @description The setup status of Fleet agents.
       * @default null
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
 * Type of KIBANA's KIBANA_GET_FLEET_AGENT_POLICIES tool input.
 */
type KIBANA_GET_FLEET_AGENT_POLICIES_INPUT = {
  /**
   * Kuery
   * @description KQL filter for agent policies.
   * @default null
   */
  kuery: string | null;
  /**
   * Page
   * @description Page number.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Items per page.
   * @default null
   */
  perPage: number | null;
  /**
   * Sort Field
   * @description Field to sort by.
   * @default null
   */
  sortField: string | null;
  /**
   * SortOrderEnum
   * @description Order to sort: asc or desc.
   * @default null
   * @enum {string|null}
   */
  sortOrder: "asc" | "desc" | null;
};

/**
 * Type of KIBANA's KIBANA_GET_FLEET_AGENT_POLICIES tool output.
 */
type KIBANA_GET_FLEET_AGENT_POLICIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of agent policy objects.
       */
      items: {
          /**
           * Description
           * @description A description of the agent policy.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description The ID of the agent policy.
           */
          id: string;
          /**
           * Monitoring Enabled
           * @description A list of monitoring enabled features.
           */
          monitoring_enabled: string[];
          /**
           * Name
           * @description The name of the agent policy.
           */
          name: string;
          /**
           * Namespace
           * @description The namespace of the agent policy.
           */
          namespace: string;
      }[];
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Per Page
       * @description Items per page.
       */
      perPage: number;
      /**
       * Total
       * @description Total number of matching policies.
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
 * Type of KIBANA's KIBANA_GET_FLEET_CHECK_PERMISSIONS tool input.
 */
type KIBANA_GET_FLEET_CHECK_PERMISSIONS_INPUT = {
  /**
   * Elastic Api Version
   * @description Specifies the API version to use.
   * @default 2023-10-31
   */
  "elastic-api-version": string | null;
  /**
   * Fleet Server Setup
   * @description Indicates if Fleet Server setup permissions should be checked.
   * @default null
   */
  fleetServerSetup: boolean | null;
};

/**
 * Type of KIBANA's KIBANA_GET_FLEET_CHECK_PERMISSIONS tool output.
 */
type KIBANA_GET_FLEET_CHECK_PERMISSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if the permission check failed. Possible values are MISSING_SECURITY, MISSING_PRIVILEGES, or MISSING_FLEET_SERVER_SETUP_PRIVILEGES.
       * @default null
       */
      error: string | null;
      /**
       * Success
       * @description Indicates if the permission check was successful.
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
 * Type of KIBANA's KIBANA_GET_FLEET_DATA_STREAMS tool input.
 */
type KIBANA_GET_FLEET_DATA_STREAMS_INPUT = {
  /**
   * Dataset Query
   * @description Filters data streams by dataset name.
   * @default null
   */
  datasetQuery: string | null;
  /**
   * Elastic Api Version
   * @description Specifies the API version to use. Default is 2023-10-31.
   * @default 2023-10-31
   */
  "elastic-api-version": string | null;
  /**
   * Sort Order
   * @description Specifies the sort order of the results. Default is asc.
   * @default null
   * @enum {string|null}
   */
  sortOrder: "asc" | "desc" | null;
  /**
   * Type
   * @description Filters data streams by type.
   * @default null
   * @enum {string|null}
   */
  type: "logs" | "metrics" | "traces" | "synthetics" | "profiling" | null;
  /**
   * Uncategorised Only
   * @description If set to true, returns only uncategorized data streams. Default is false.
   * @default null
   */
  uncategorisedOnly: boolean | null;
};

/**
 * Type of KIBANA's KIBANA_GET_FLEET_DATA_STREAMS tool output.
 */
type KIBANA_GET_FLEET_DATA_STREAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of data streams.
       */
      items: {
          /**
           * Name
           * @description Name of the data stream.
           */
          name: string;
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
 * Type of KIBANA's KIBANA_GET_FLEET_ENROLLMENT_API_KEY tool input.
 */
type KIBANA_GET_FLEET_ENROLLMENT_API_KEY_INPUT = {
  /**
   * Key Id
   * @description The ID of the enrollment API key to retrieve.
   */
  key_id?: string;
};

/**
 * Type of KIBANA's KIBANA_GET_FLEET_ENROLLMENT_API_KEY tool output.
 */
type KIBANA_GET_FLEET_ENROLLMENT_API_KEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Item
       * @description Details of the enrollment API key.
       */
      item: {
          /**
           * Active
           * @description Indicates if the token is active.
           */
          active: boolean;
          /**
           * Api Key
           * @description The enrollment API key.
           */
          api_key: string;
          /**
           * Api Key Id
           * @description The ID of the API key.
           */
          api_key_id: string;
          /**
           * Created At
           * Format: date-time
           * @description Timestamp of creation.
           */
          created_at: string;
          /**
           * Created By
           * @description User who created the key (deprecated).
           * @default null
           */
          created_by: string | null;
          /**
           * Id
           * @description Unique identifier for the token.
           */
          id: string;
          /**
           * Name
           * @description Name of the enrollment token.
           */
          name: string;
          /**
           * Policy Id
           * @description ID of the associated agent policy.
           * @default null
           */
          policy_id: string | null;
          /**
           * Updated At
           * Format: date-time
           * @description Timestamp of last update (deprecated).
           * @default null
           */
          updated_at: string | null;
          /**
           * Updated By
           * @description User who last updated the key (deprecated).
           * @default null
           */
          updated_by: string | null;
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
 * Type of KIBANA's KIBANA_GET_FLEET_ENROLLMENT_API_KEYS tool input.
 */
type KIBANA_GET_FLEET_ENROLLMENT_API_KEYS_INPUT = {
  /**
   * Page
   * @description The page number to return.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description The number of results to return per page.
   * @default null
   */
  perPage: number | null;
};

/**
 * Type of KIBANA's KIBANA_GET_FLEET_ENROLLMENT_API_KEYS tool output.
 */
type KIBANA_GET_FLEET_ENROLLMENT_API_KEYS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of enrollment tokens.
       */
      items: {
          /**
           * Active
           * @description Indicates if the token is active.
           */
          active: boolean;
          /**
           * Api Key
           * @description The enrollment API key.
           */
          api_key: string;
          /**
           * Api Key Id
           * @description ID of the API key.
           */
          api_key_id: string;
          /**
           * Created At
           * @description Creation timestamp.
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the token.
           */
          id: string;
          /**
           * Name
           * @description Name of the token.
           * @default null
           */
          name: string | null;
          /**
           * Policy Id
           * @description ID of the associated agent policy.
           * @default null
           */
          policy_id: string | null;
      }[];
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Per Page
       * @description Number of items per page.
       */
      perPage: number;
      /**
       * Total
       * @description Total number of items.
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
 * Type of KIBANA's KIBANA_GET_FLEET_EPM_CATEGORIES tool input.
 */
type KIBANA_GET_FLEET_EPM_CATEGORIES_INPUT = {
  /**
   * Elastic Api Version
   * @description Specifies the API version to use.
   * @default 2023-10-31
   */
  elastic_api_version: string | null;
  /**
   * Include Policy Templates
   * @description If true, include policy templates in the response.
   * @default null
   */
  include_policy_templates: boolean | null;
  /**
   * Prerelease
   * @description If true, include pre-release categories.
   * @default null
   */
  prerelease: boolean | null;
};

/**
 * Type of KIBANA's KIBANA_GET_FLEET_EPM_CATEGORIES tool output.
 */
type KIBANA_GET_FLEET_EPM_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of package categories.
       */
      items: {
          /**
           * Count
           * @description Number of packages in the category.
           */
          count: number;
          /**
           * Id
           * @description Unique identifier for the category.
           */
          id: string;
          /**
           * Parent Id
           * @description Identifier of the parent category, if applicable.
           * @default null
           */
          parent_id: string | null;
          /**
           * Parent Title
           * @description Title of the parent category, if applicable.
           * @default null
           */
          parent_title: string | null;
          /**
           * Title
           * @description Display title of the category.
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
 * Type of KIBANA's KIBANA_GET_FLEET_EPM_DATA_STREAMS tool input.
 */
type KIBANA_GET_FLEET_EPM_DATA_STREAMS_INPUT = {
  /**
   * Dataset Query
   * @description Filters data streams by dataset name.
   * @default null
   */
  datasetQuery: string | null;
  /**
   * Elastic Api Version
   * @description Specifies the API version to use.
   * @default 2023-10-31
   */
  "elastic-api-version": string | null;
  /**
   * Sort Order
   * @description Specifies the sort order of the results. Valid values are `asc` or `desc`.
   * @default asc
   */
  sortOrder: string | null;
  /**
   * Type
   * @description Filters data streams by type. Valid values are `logs`, `metrics`, `traces`, `synthetics`, or `profiling`.
   * @default null
   */
  type: string | null;
  /**
   * Uncategorised Only
   * @description If set to `true`, returns only uncategorized data streams.
   * @default false
   */
  uncategorisedOnly: boolean | null;
};

/**
 * Type of KIBANA's KIBANA_GET_FLEET_EPM_DATA_STREAMS tool output.
 */
type KIBANA_GET_FLEET_EPM_DATA_STREAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of data streams.
       */
      items: {
          /**
           * Name
           * @description Name of the data stream.
           */
          name: string;
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
 * Type of KIBANA's KIBANA_GET_FLEET_EPM_PACKAGES tool input.
 */
type KIBANA_GET_FLEET_EPM_PACKAGES_INPUT = {
  /**
   * Category
   * @description Filter packages by category.
   * @default null
   */
  category: string | null;
  /**
   * Exclude Install Status
   * @description Exclude installation status information.
   * @default null
   */
  excludeInstallStatus: boolean | null;
  /**
   * Prerelease
   * @description Include pre-release packages.
   * @default null
   */
  prerelease: boolean | null;
};

/**
 * Type of KIBANA's KIBANA_GET_FLEET_EPM_PACKAGES tool output.
 */
type KIBANA_GET_FLEET_EPM_PACKAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of package objects.
       * @default null
       */
      items: {
          /**
           * Categories
           * @description Package categories.
           * @default null
           */
          categories: string[] | null;
          /**
           * Conditions
           * @description Conditions for package compatibility.
           * @default null
           */
          conditions: {
              [key: string]: unknown;
          } | null;
          /**
           * Data Streams
           * @description Data streams provided by the package.
           * @default null
           */
          data_streams: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Description
           * @description Package description.
           * @default null
           */
          description: string | null;
          /**
           * Discovery
           * @description Discovery information.
           * @default null
           */
          discovery: {
              [key: string]: unknown;
          } | null;
          /**
           * Download
           * @description Download URL.
           * @default null
           */
          download: string | null;
          /**
           * Format Version
           * @description Format version.
           * @default null
           */
          format_version: string | null;
          /**
           * Icons
           * @description Package icons.
           * @default null
           */
          icons: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Id
           * @description Package ID.
           * @default null
           */
          id: string | null;
          /**
           * Installation Info
           * @description Installation information.
           * @default null
           */
          installationInfo: {
              [key: string]: unknown;
          } | null;
          /**
           * Integration
           * @description Integration name.
           * @default null
           */
          integration: string | null;
          /**
           * Internal
           * @description Internal package flag.
           * @default null
           */
          internal: boolean | null;
          /**
           * Latest Version
           * @description Latest package version.
           * @default null
           */
          latestVersion: string | null;
          /**
           * Name
           * @description Package name.
           * @default null
           */
          name: string | null;
          /**
           * Owner
           * @description Package owner information.
           * @default null
           */
          owner: {
              [key: string]: unknown;
          } | null;
          /**
           * Path
           * @description Package path.
           * @default null
           */
          path: string | null;
          /**
           * Policy Templates
           * @description Policy templates.
           * @default null
           */
          policy_templates: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Readme
           * @description Readme content.
           * @default null
           */
          readme: string | null;
          /**
           * Release
           * @description Release status (e.g., ga, beta, experimental).
           * @default null
           */
          release: string | null;
          /**
           * Signature Path
           * @description Signature path.
           * @default null
           */
          signaturePath: string | null;
          /**
           * Source
           * @description Source information.
           * @default null
           */
          source: {
              [key: string]: unknown;
          } | null;
          /**
           * Status
           * @description Package status.
           * @default null
           */
          status: string | null;
          /**
           * Title
           * @description Package title.
           * @default null
           */
          title: string | null;
          /**
           * Type
           * @description Package type.
           * @default null
           */
          type: string | null;
          /**
           * Vars
           * @description Package variables.
           * @default null
           */
          vars: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Version
           * @description Package version.
           * @default null
           */
          version: string | null;
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
 * Type of KIBANA's KIBANA_GET_FLEET_EPM_PACKAGES_INSTALLED tool input.
 */
type KIBANA_GET_FLEET_EPM_PACKAGES_INSTALLED_INPUT = object;

/**
 * Type of KIBANA's KIBANA_GET_FLEET_EPM_PACKAGES_INSTALLED tool output.
 */
type KIBANA_GET_FLEET_EPM_PACKAGES_INSTALLED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of installed packages.
       */
      items: {
          /**
           * Name
           * @description Name of the package.
           */
          name: string;
          /**
           * Removable
           * @description Whether the package can be removed.
           * @default null
           */
          removable: boolean | null;
          /**
           * Status
           * @description Status of the installation.
           */
          status: string;
          /**
           * Title
           * @description Display title of the package.
           */
          title: string;
          /**
           * Version
           * @description Installed version of the package.
           */
          version: string;
      }[];
      /**
       * Search After
       * @description Search after identifier for pagination.
       * @default null
       */
      searchAfter: string[] | null;
      /**
       * Total
       * @description Total number of installed packages.
       * @default null
       */
      total: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KIBANA's KIBANA_GET_FLEET_EPM_PACKAGES_LIMITED tool input.
 */
type KIBANA_GET_FLEET_EPM_PACKAGES_LIMITED_INPUT = object;

/**
 * Type of KIBANA's KIBANA_GET_FLEET_EPM_PACKAGES_LIMITED tool output.
 */
type KIBANA_GET_FLEET_EPM_PACKAGES_LIMITED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of limited package names.
       */
      items: string[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KIBANA's KIBANA_GET_FLEET_EPM_PACKAGE_DETAILS tool input.
 */
type KIBANA_GET_FLEET_EPM_PACKAGE_DETAILS_INPUT = {
  /**
   * Package Name
   * @description The name of the package.
   */
  package_name?: string;
  /**
   * Package Version
   * @description The version of the package.
   */
  package_version?: string;
};

/**
 * Type of KIBANA's KIBANA_GET_FLEET_EPM_PACKAGE_DETAILS tool output.
 */
type KIBANA_GET_FLEET_EPM_PACKAGE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Description of the package.
       * @default null
       */
      description: string | null;
      /**
       * Item
       * @description The full package details object.
       * @default null
       */
      item: {
          [key: string]: unknown;
      } | null;
      /**
       * Name
       * @description Name of the package.
       * @default null
       */
      name: string | null;
      /**
       * Title
       * @description Title of the package.
       * @default null
       */
      title: string | null;
      /**
       * Type
       * @description Type of the package.
       * @default null
       */
      type: string | null;
      /**
       * Version
       * @description Version of the package.
       * @default null
       */
      version: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KIBANA's KIBANA_GET_FLEET_EPM_PACKAGE_FILE tool input.
 */
type KIBANA_GET_FLEET_EPM_PACKAGE_FILE_INPUT = {
  /**
   * File Path
   * @description The path to the specific file within the package.
   */
  filePath?: string;
  /**
   * Pkg Name
   * @description The name of the package.
   */
  pkgName?: string;
  /**
   * Pkg Version
   * @description The version of the package.
   */
  pkgVersion?: string;
};

/**
 * Type of KIBANA's KIBANA_GET_FLEET_EPM_PACKAGE_FILE tool output.
 */
type KIBANA_GET_FLEET_EPM_PACKAGE_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description The content of the requested file. Can be any type (e.g. string, JSON object) depending on the file.
       */
      content?: unknown;
      /**
       * Error
       * @description Error type.
       * @default null
       */
      error: string | null;
      /**
       * Error Type
       * @description Specific error category.
       * @default null
       */
      errorType: string | null;
      /**
       * Message
       * @description Detailed error message.
       * @default null
       */
      message: string | null;
      /**
       * Status Code
       * @description HTTP status code.
       * @default null
       */
      statusCode: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KIBANA's KIBANA_GET_FLEET_EPM_PACKAGE_STATS tool input.
 */
type KIBANA_GET_FLEET_EPM_PACKAGE_STATS_INPUT = {
  /**
   * Package Name
   * @description The name of the package to retrieve statistics for.
   */
  package_name?: string;
};

/**
 * Type of KIBANA's KIBANA_GET_FLEET_EPM_PACKAGE_STATS tool output.
 */
type KIBANA_GET_FLEET_EPM_PACKAGE_STATS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Stats
       * @description Statistics for the specified package.
       * @default null
       */
      stats: {
          [key: string]: unknown;
      } | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KIBANA's KIBANA_GET_FLEET_PACKAGE_POLICIES tool input.
 */
type KIBANA_GET_FLEET_PACKAGE_POLICIES_INPUT = {
  /**
   * Format
   * @description Response format.
   * @default null
   * @enum {string|null}
   */
  format: "simplified" | "legacy" | null;
  /**
   * Kuery
   * @description KQL query to filter results.
   * @default null
   */
  kuery: string | null;
  /**
   * Page
   * @description Page number for pagination.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page.
   * @default null
   */
  perPage: number | null;
  /**
   * Show Upgradeable
   * @description Show upgradeable packages.
   * @default null
   */
  showUpgradeable: boolean | null;
  /**
   * Sort Field
   * @description Field to sort by.
   * @default null
   */
  sortField: string | null;
  /**
   * Sort Order
   * @description Sort order.
   * @default null
   * @enum {string|null}
   */
  sortOrder: "asc" | "desc" | null;
  /**
   * With Agent Count
   * @description Include agent count in response.
   * @default null
   */
  withAgentCount: boolean | null;
};

/**
 * Type of KIBANA's KIBANA_GET_FLEET_PACKAGE_POLICIES tool output.
 */
type KIBANA_GET_FLEET_PACKAGE_POLICIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of package policies.
       * @default null
       */
      items: {
          /**
           * Additional Datastreams Permissions
           * @description Additional datastream permissions.
           * @default null
           */
          additional_datastreams_permissions: string[] | null;
          /**
           * Agents
           * @description Number of agents using this package policy.
           * @default null
           */
          agents: number | null;
          /**
           * Created At
           * @description Creation timestamp.
           * @default null
           */
          created_at: string | null;
          /**
           * Created By
           * @description Creator identifier.
           * @default null
           */
          created_by: string | null;
          /**
           * Description
           * @description Package policy description.
           * @default null
           */
          description: string | null;
          /**
           * ElasticsearchSettings
           * @description Elasticsearch settings.
           * @default null
           */
          elasticsearch: {
              /**
               * PrivilegesConfig
               * @description Privileges configuration.
               * @default null
               */
              privileges: {
                  /**
                   * Cluster
                   * @description Cluster privileges.
                   * @default null
                   */
                  cluster: string[] | null;
              } | null;
          } | null;
          /**
           * Enabled
           * @description Indicates if the package policy is enabled.
           * @default null
           */
          enabled: boolean | null;
          /**
           * Id
           * @description Package policy ID.
           * @default null
           */
          id: string | null;
          /**
           * Inputs
           * @description Inputs configuration.
           * @default null
           */
          inputs: {
              /**
               * Enabled
               * @description Indicates if the input is enabled.
               * @default null
               */
              enabled: boolean | null;
              /**
               * Streams
               * @description Streams configuration.
               * @default null
               */
              streams: {
                  /**
                   * DataStreamDetails
                   * @description Data stream details.
                   * @default null
                   */
                  data_stream: {
                      /**
                       * Dataset
                       * @description Dataset name.
                       * @default null
                       */
                      dataset: string | null;
                      /**
                       * Type
                       * @description Data stream type.
                       * @default null
                       */
                      type: string | null;
                  } | null;
                  /**
                   * Enabled
                   * @description Indicates if the stream is enabled.
                   * @default null
                   */
                  enabled: boolean | null;
                  /**
                   * Id
                   * @description Stream ID.
                   * @default null
                   */
                  id: string | null;
              }[] | null;
              /**
               * Type
               * @description Input type.
               * @default null
               */
              type: string | null;
          }[] | null;
          /**
           * Name
           * @description Package policy name.
           * @default null
           */
          name: string | null;
          /**
           * Namespace
           * @description Namespace.
           * @default null
           */
          namespace: string | null;
          /**
           * PackageDetails
           * @description Package details.
           * @default null
           */
          package: {
              /**
               * Name
               * @description Package name.
               * @default null
               */
              name: string | null;
              /**
               * Title
               * @description Package title.
               * @default null
               */
              title: string | null;
              /**
               * Version
               * @description Package version.
               * @default null
               */
              version: string | null;
          } | null;
          /**
           * Policy Id
           * @description Associated agent policy ID.
           * @default null
           */
          policy_id: string | null;
          /**
           * Revision
           * @description Revision number.
           * @default null
           */
          revision: number | null;
          /**
           * Updated At
           * @description Last update timestamp.
           * @default null
           */
          updated_at: string | null;
          /**
           * Updated By
           * @description Last updater identifier.
           * @default null
           */
          updated_by: string | null;
      }[] | null;
      /**
       * Page
       * @description Page number.
       * @default null
       */
      page: number | null;
      /**
       * Per Page
       * @description Items per page.
       * @default null
       */
      perPage: number | null;
      /**
       * Total
       * @description Total number of items.
       * @default null
       */
      total: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KIBANA's KIBANA_GET_FLEET_SERVER_HOST tool input.
 */
type KIBANA_GET_FLEET_SERVER_HOST_INPUT = {
  /**
   * Elastic Api Version
   * @description Specifies the API version to use.
   * @default 2023-10-31
   */
  elastic_api_version: string | null;
  /**
   * Host Id
   * @description The ID of the Fleet server host to retrieve.
   */
  host_id?: string;
};

/**
 * Type of KIBANA's KIBANA_GET_FLEET_SERVER_HOST tool output.
 */
type KIBANA_GET_FLEET_SERVER_HOST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Item
       * @description The Fleet server host details.
       */
      item: {
          /**
           * Host Urls
           * @description URLs of the Fleet Server host.
           */
          host_urls: string[];
          /**
           * Id
           * @description Unique identifier of the host.
           */
          id: string;
          /**
           * Is Default
           * @description Indicates if this is the default host.
           * @default null
           */
          is_default: boolean | null;
          /**
           * Is Internal
           * @description Indicates if this is an internal host.
           * @default null
           */
          is_internal: boolean | null;
          /**
           * Is Preconfigured
           * @description Indicates if this host is preconfigured.
           * @default null
           */
          is_preconfigured: boolean | null;
          /**
           * Name
           * @description Name of the host.
           */
          name: string;
          /**
           * Proxy Id
           * @description ID of the proxy associated with the host.
           * @default null
           */
          proxy_id: string | null;
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
 * Type of KIBANA's KIBANA_GET_FLEET_SERVER_HOSTS tool input.
 */
type KIBANA_GET_FLEET_SERVER_HOSTS_INPUT = {
  /**
   * Page
   * @description Page number of the results to return.
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results to return per page.
   * @default 20
   */
  perPage: number | null;
};

/**
 * Type of KIBANA's KIBANA_GET_FLEET_SERVER_HOSTS tool output.
 */
type KIBANA_GET_FLEET_SERVER_HOSTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description An array of Fleet Server host objects.
       */
      items: {
          /**
           * Host Urls
           * @description List of host URLs.
           */
          host_urls: string[];
          /**
           * Id
           * @description Unique identifier for the Fleet Server host.
           */
          id: string;
          /**
           * Is Default
           * @description Indicates if this is the default host.
           * @default false
           */
          is_default: boolean | null;
          /**
           * Is Internal
           * @description Indicates if this is an internal host.
           * @default null
           */
          is_internal: boolean | null;
          /**
           * Is Preconfigured
           * @description Indicates if this host is preconfigured.
           * @default false
           */
          is_preconfigured: boolean | null;
          /**
           * Name
           * @description Name of the Fleet Server host.
           */
          name: string;
          /**
           * Proxy Id
           * @description ID of the proxy associated with this host, if any.
           * @default null
           */
          proxy_id: string | null;
      }[];
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Per Page
       * @description Number of items per page.
       */
      perPage: number;
      /**
       * Total
       * @description Total number of Fleet Server hosts.
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
 * Type of KIBANA's KIBANA_GET_INDEX_MANAGEMENT_INDICES tool input.
 */
type KIBANA_GET_INDEX_MANAGEMENT_INDICES_INPUT = {
  /**
   * Bytes
   * @description The unit in which to display byte values.
   * @default null
   * @enum {string|null}
   */
  bytes: "b" | "k" | "kb" | "m" | "mb" | "g" | "gb" | "t" | "tb" | "p" | "pb" | null;
  /**
   * Expand Wildcards
   * @description Type of index that wildcard patterns can match. Supports comma-separated values, e.g., 'open,hidden'. 'all' matches all indices by default.
   * @default null
   * @enum {string|null}
   */
  expand_wildcards: "open" | "closed" | "hidden" | "none" | "all" | null;
  /**
   * H
   * @description A comma-separated string of column names to display. If not provided, a default set of columns is shown. Example: 'index,health,status,docs.count,store.size'.
   * @default null
   */
  h: string | null;
  /**
   * Health
   * @description The health status to filter indices by (green, yellow, or red).
   * @default null
   * @enum {string|null}
   */
  health: "green" | "yellow" | "red" | null;
  /**
   * Index
   * @description A comma-separated string of index names or wildcard expressions to limit the returned information. For example, 'my-index-*,another-index'. If not provided, information for all indices is returned.
   * @default null
   */
  index: string | null;
  /**
   * Pri
   * @description If true, only shows information about primary shards.
   * @default false
   */
  pri: boolean | null;
  /**
   * S
   * @description A comma-separated string of column names or column aliases to sort by. For example, 'index,health'.
   * @default null
   */
  s: string | null;
};

/**
 * Type of KIBANA's KIBANA_GET_INDEX_MANAGEMENT_INDICES tool output.
 */
type KIBANA_GET_INDEX_MANAGEMENT_INDICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Indices
       * @description A list of objects, where each object represents an index and its details.
       * @default []
       */
      indices: ({
          /**
           * Docs.Count
           * @description Number of documents in the index.
           * @default null
           */
          "docs.count": string | null;
          /**
           * Docs.Deleted
           * @description Number of deleted documents in the index.
           * @default null
           */
          "docs.deleted": string | null;
          /**
           * Health
           * @description Health status of the index (green, yellow, or red).
           * @default null
           */
          health: string | null;
          /**
           * Index
           * @description Name of the index.
           * @default null
           */
          index: string | null;
          /**
           * Pri
           * @description Number of primary shards.
           * @default null
           */
          pri: string | null;
          /**
           * Pri.Store.Size
           * @description Size of the primary shards' store.
           * @default null
           */
          "pri.store.size": string | null;
          /**
           * Rep
           * @description Number of replica shards.
           * @default null
           */
          rep: string | null;
          /**
           * Status
           * @description Status of the index (e.g., open, close).
           * @default null
           */
          status: string | null;
          /**
           * Store.Size
           * @description Total size of the index store.
           * @default null
           */
          "store.size": string | null;
          /**
           * Uuid
           * @description Unique ID of the index.
           * @default null
           */
          uuid: string | null;
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
 * Type of KIBANA's KIBANA_GET_METRICS tool input.
 */
type KIBANA_GET_METRICS_INPUT = {
  /**
   * Completion Fields
   * @description Comma-separated list or wildcard expressions of fields to include in completion suggester statistics.
   * @default null
   */
  completion_fields: string | null;
  /**
   * Fielddata Fields
   * @description Comma-separated list or wildcard expressions of fields to include in fielddata statistics.
   * @default null
   */
  fielddata_fields: string | null;
  /**
   * Fields
   * @description Comma-separated list or wildcard expressions of fields to include in the statistics.
   * @default null
   */
  fields: string | null;
  /**
   * Groups
   * @description If true, includes search group statistics.
   * @default null
   */
  groups: boolean | null;
  /**
   * Include Segment File Sizes
   * @description If true, the call reports the aggregated disk usage of each one of the Lucene index files (only applies if segment stats are requested).
   * @default null
   */
  include_segment_file_sizes: boolean | null;
  /**
   * Include Unloaded Segments
   * @description If true, the response includes information from segments that are not loaded into memory.
   * @default null
   */
  include_unloaded_segments: boolean | null;
  /**
   * Level
   * @description Indicates whether statistics are aggregated at the cluster, index, or shard level.
   * @default null
   * @enum {string|null}
   */
  level: "cluster" | "indices" | "shards" | null;
  /**
   * Metric
   * @description Comma-separated list of metrics to retrieve. Examples: jvm, os, process, indices, fs, http, transport, breaker, thread_pool, ingest.
   * @default null
   */
  metric: string | null;
  /**
   * Node Id
   * @description Comma-separated list of node IDs or names to limit the returned information. Special values like '_all', '_local', '_master' can be used.
   * @default null
   */
  node_id: string | null;
  /**
   * Timeout
   * @description Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
   * @default null
   */
  timeout: string | null;
  /**
   * Types
   * @description A comma-separated list of document types for the indexing index metric.
   * @default null
   */
  types: string | null;
};

/**
 * Type of KIBANA's KIBANA_GET_METRICS tool output.
 */
type KIBANA_GET_METRICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Nodes
       * @description Contains statistics about the number of nodes selected by the request.
       */
      _nodes: {
          /**
           * Failed
           * @description Number of nodes that rejected the request or failed to respond.
           */
          failed: number;
          /**
           * Failures
           * @description Details of nodes that failed to respond.
           * @default null
           */
          failures: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Successful
           * @description Number of nodes that responded successfully to the request.
           */
          successful: number;
          /**
           * Total
           * @description Total number of nodes selected by the request.
           */
          total: number;
      };
      /**
       * Cluster Name
       * @description Name of the cluster.
       */
      cluster_name: string;
      /**
       * Nodes
       * @description Contains statistics for each node in the cluster, keyed by node ID.
       */
      nodes: {
          [key: string]: {
              [key: string]: unknown;
          };
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
 * Type of KIBANA's KIBANA_GET_REPORTING_JOBS tool input.
 */
type KIBANA_GET_REPORTING_JOBS_INPUT = object;

/**
 * Type of KIBANA's KIBANA_GET_REPORTING_JOBS tool output.
 */
type KIBANA_GET_REPORTING_JOBS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Jobs
       * @description A list of reporting jobs.
       */
      jobs?: {
          /**
           * Attempts
           * @description Current attempt number.
           * @default null
           */
          attempts: number | null;
          /**
           * Completed At
           * @description Timestamp of when the job was completed.
           * @default null
           */
          completed_at: string | null;
          /**
           * Created At
           * @description Timestamp of when the job was created.
           * @default null
           */
          created_at: string | null;
          /**
           * Created By
           * @description User who created the job or false if unknown/system.
           * @default null
           */
          created_by: string | null;
          /**
           * Id
           * @description The ID of the reporting job.
           * @default null
           */
          id: string | null;
          /**
           * Jobtype
           * @description Type of the report (e.g., csv, pdf, png).
           * @default null
           */
          jobtype: string | null;
          /**
           * Max Attempts
           * @description Maximum number of attempts for the job.
           * @default null
           */
          max_attempts: number | null;
          /**
           * Output
           * @description Output details, like content type and relative path.
           * @default null
           */
          output: {
              [key: string]: unknown;
          } | null;
          /**
           * Payload
           * @description Job payload/parameters.
           * @default null
           */
          payload: {
              [key: string]: unknown;
          } | null;
          /**
           * Priority
           * @description Job priority.
           * @default null
           */
          priority: number | null;
          /**
           * Process Expiration
           * @description Timestamp when the job process expires.
           * @default null
           */
          process_expiration: string | null;
          /**
           * Started At
           * @description Timestamp when the job started processing.
           * @default null
           */
          started_at: string | null;
          /**
           * Status
           * @description Current status of the job (e.g., pending, processing, completed, failed).
           * @default null
           */
          status: string | null;
          /**
           * Timeout
           * @description Job timeout in milliseconds.
           * @default null
           */
          timeout: number | null;
      }[];
      /**
       * Page
       * @description Current page number, if pagination is supported.
       * @default null
       */
      page: number | null;
      /**
       * Per Page
       * @description Number of jobs per page, if pagination is supported.
       * @default null
       */
      per_page: number | null;
      /**
       * Total
       * @description Total number of jobs found.
       * @default null
       */
      total: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KIBANA's KIBANA_GET_SAVED_OBJECTS tool input.
 */
type KIBANA_GET_SAVED_OBJECTS_INPUT = {
  /**
   * Default Search Operator
   * @description The default operator to use for the 'search' query. Defaults to 'OR'.
   * @default null
   * @enum {string|null}
   */
  default_search_operator: "OR" | "AND" | null;
  /**
   * Fields
   * @description The fields to return in the response for each saved object. Can be a single field or a list of fields.
   * @default null
   */
  fields: string[] | null;
  /**
   * Filter
   * @description A Kibana Query Language (KQL) filter string to apply. For example, 'type:dashboard and attributes.title:"My Dashboard"'.
   * @default null
   */
  filter: string | null;
  /**
   * Has Reference
   * @description Filters objects based on the presence of a reference. Expects an object with 'type' and 'id' keys. For example, {'type': 'index-pattern', 'id': 'my-index-pattern'}.
   * @default null
   */
  has_reference: {
      [key: string]: string;
  } | null;
  /**
   * Page
   * @description The page number to return.
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description The number of objects to return per page.
   * @default 20
   */
  per_page: number | null;
  /**
   * Root Search Fields
   * @description A list of fields to search at the root level of the saved object, in addition to 'search_fields' which target attributes. Useful for fields like 'id' or 'type'.
   * @default null
   */
  root_search_fields: string[] | null;
  /**
   * Search
   * @description A search string to filter objects by. Searches the title and description fields by default.
   * @default null
   */
  search: string | null;
  /**
   * Search Fields
   * @description The fields to search when the 'search' parameter is provided. Can be a single field or a list of fields.
   * @default null
   */
  search_fields: string[] | null;
  /**
   * Sort Field
   * @description The field to sort the results by. By default, sorts by relevance if 'search' is provided, otherwise by type and then ID.
   * @default null
   */
  sort_field: string | null;
  /**
   * Sort Order
   * @description The order to sort the results by, if 'sort_field' is provided. Defaults to 'desc' if 'sort_field' is 'update_at', otherwise 'asc'.
   * @default null
   * @enum {string|null}
   */
  sort_order: "asc" | "desc" | null;
  /**
   * Type
   * @description The type or types of saved objects to find. For example, 'dashboard', 'visualization', or ['index-pattern', 'search'].
   */
  type?: string | null;
};

/**
 * Type of KIBANA's KIBANA_GET_SAVED_OBJECTS tool output.
 */
type KIBANA_GET_SAVED_OBJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page
       * @description The current page number.
       */
      page: number;
      /**
       * Per Page
       * @description The number of objects returned per page.
       */
      per_page: number;
      /**
       * Saved Objects
       * @description A list of the retrieved saved objects.
       */
      saved_objects: {
          /**
           * Attributes
           * @description A dictionary of the object's attributes.
           */
          attributes: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description The ID of the saved object.
           */
          id: string;
          /**
           * Migration Version
           * @description The migration version of the object.
           * @default null
           */
          migrationVersion: {
              [key: string]: string;
          } | null;
          /**
           * References
           * @description A list of references to other saved objects.
           * @default null
           */
          references: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Score
           * @description The relevance score of the object if a search was performed.
           * @default null
           */
          score: number | null;
          /**
           * Type
           * @description The type of the saved object.
           */
          type: string;
          /**
           * Updated At
           * @description The timestamp of the last update.
           * @default null
           */
          updated_at: string | null;
          /**
           * Version
           * @description The version of the object.
           * @default null
           */
          version: string | null;
      }[];
      /**
       * Total
       * @description The total number of matching objects found.
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
 * Type of KIBANA's KIBANA_GET_STATUS tool input.
 */
type KIBANA_GET_STATUS_INPUT = object;

/**
 * Type of KIBANA's KIBANA_GET_STATUS tool output.
 */
type KIBANA_GET_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Metrics
       * @description Metrics information
       * @default null
       */
      metrics: {
          [key: string]: unknown;
      } | null;
      /**
       * Name
       * @description Kibana instance name
       */
      name: string;
      /**
       * Status
       * @description Overall status with core and plugins
       */
      status: {
          [key: string]: unknown;
      };
      /**
       * Uuid
       * @description Kibana instance UUID
       */
      uuid: string;
      /**
       * Version
       * @description Version information
       */
      version: {
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
 * Type of KIBANA's KIBANA_POST_ALERTING_RULES tool input.
 */
type KIBANA_POST_ALERTING_RULES_INPUT = {
  /**
   * Actions
   * @description An array of action objects. Default is an empty array.
   * @default null
   */
  actions: {
      /**
       * Group
       * @description The group name, affecting when the action runs.
       */
      group: string;
      /**
       * Id
       * @description The identifier for the connector saved object.
       */
      id: string;
      /**
       * Params
       * @description Parameters for the action, sent to the connector.
       */
      params: {
          [key: string]: unknown;
      };
  }[] | null;
  /**
   * Consumer
   * @description The name of the application or feature that owns the rule. Examples include `alerts`, `apm`, `discover`, `infrastructure`, `logs`, `metrics`, `ml`, `monitoring`, `securitySolution`, `siem`, `stackAlerts`, or `uptime`.
   */
  consumer?: string;
  /**
   * Enabled
   * @description Indicates whether to run the rule on an interval basis after it is created. Default is true.
   * @default true
   */
  enabled: boolean | null;
  /**
   * Name
   * @description The name of the rule. While not required to be unique, a distinctive name can help identify a rule.
   */
  name?: string;
  /**
   * Notify When
   * @description Indicates how often alerts generate actions. Valid values include `onActionGroupChange`, `onActiveAlert`, or `onThrottleInterval`.
   */
  notify_when?: string;
  /**
   * Params
   * @description The parameters for the rule.
   */
  params?: {
      [key: string]: unknown;
  };
  /**
   * Rule Id
   * @description The identifier for the rule. If omitted, an ID is randomly generated.
   * @default null
   */
  rule_id: string | null;
  /**
   * Rule Type Id
   * @description The rule type identifier.
   */
  rule_type_id?: string;
  /**
   * Schedule
   * @description The check interval, specifying how frequently the rule conditions are checked.
   */
  schedule?: {
      /**
       * Interval
       * @description The interval specified in seconds, minutes, hours, or days (e.g., '''10s''', '''5m''', '''1h''').
       */
      interval: string;
  };
  /**
   * Tags
   * @description The tags for the rule. Default is an empty array.
   * @default null
   */
  tags: string[] | null;
  /**
   * Throttle
   * @description Defines how often an alert generates repeated actions. Applicable only if notify_when is set to onThrottleInterval. Examples: '''10s''', '''5m''', '''1h'''.
   * @default null
   */
  throttle: string | null;
};

/**
 * Type of KIBANA's KIBANA_POST_ALERTING_RULES tool output.
 */
type KIBANA_POST_ALERTING_RULES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Actions
       * @description An array of action objects.
       */
      actions: {
          /**
           * Group
           * @description The group name, affecting when the action runs.
           */
          group: string;
          /**
           * Id
           * @description The identifier for the connector saved object.
           */
          id: string;
          /**
           * Params
           * @description Parameters for the action, sent to the connector.
           */
          params: {
              [key: string]: unknown;
          };
      }[];
      /**
       * Api Key Owner
       * @description The owner of the API key associated with the rule.
       * @default null
       */
      api_key_owner: string | null;
      /**
       * Consumer
       * @description The application or feature that owns the rule.
       */
      consumer: string;
      /**
       * Created At
       * @description The date and time that the rule was created.
       */
      created_at: string;
      /**
       * Created By
       * @description The identifier for the user that created the rule.
       * @default null
       */
      created_by: string | null;
      /**
       * Enabled
       * @description Indicates if the rule is enabled.
       */
      enabled: boolean;
      /**
       * Id
       * @description The identifier for the rule.
       */
      id: string;
      /**
       * Name
       * @description The name of the rule.
       */
      name: string;
      /**
       * Notify When
       * @description Defines how often alerts generate actions.
       */
      notify_when: string;
      /**
       * Params
       * @description Parameters to pass to the rule type executor.
       */
      params: {
          [key: string]: unknown;
      };
      /**
       * Rule Type Id
       * @description The identifier for the type of rule.
       */
      rule_type_id: string;
      /**
       * Schedule
       * @description The check interval specifying how frequently the rule conditions are checked.
       */
      schedule: {
          /**
           * Interval
           * @description The interval specified in seconds, minutes, hours, or days (e.g., '''10s''', '''5m''', '''1h''').
           */
          interval: string;
      };
      /**
       * Tags
       * @description The tags for the rule.
       */
      tags: string[];
      /**
       * Throttle
       * @description Defines how often an alert generates repeated actions.
       * @default null
       */
      throttle: string | null;
      /**
       * Updated At
       * @description The date and time that the rule was last updated.
       */
      updated_at: string;
      /**
       * Updated By
       * @description The identifier for the user that last updated the rule.
       * @default null
       */
      updated_by: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KIBANA's KIBANA_POST_CASES tool input.
 */
type KIBANA_POST_CASES_INPUT = {
  /**
   * Assignees
   * @description Assignees of the case
   * @default null
   */
  assignees: {
      /**
       * Uid
       * @description A unique identifier for the user profile. These identifiers can be found by using the suggest user profile API.
       */
      uid: string;
  }[] | null;
  /**
   * Category
   * @description A word or phrase that categorizes the case.
   * @default null
   */
  category: string | null;
  /**
   * CaseConnectorNone
   * @description Defines properties for connectors. Use .none type to create a case without a connector.
   */
  connector?: {
      /**
       * Fields
       * @description Connector fields (must be null for none type).
       * @constant
       */
      fields?: null;
      /**
       * Id
       * @description The identifier for the connector.
       */
      id: string;
      /**
       * Name
       * @description The name of the connector.
       */
      name: string;
      /**
       * Type
       * @description No connector type.
       * @constant
       */
      type: ".none";
  } | null;
  /**
   * Custom Fields
   * @description Custom fields for the case
   * @default null
   */
  customFields: {
      /**
       * Key
       * @description The unique identifier for the custom field. The key value must exist in the case configuration settings.
       */
      key: string;
      /**
       * Type
       * @description The custom field type. It must match the type specified in the case configuration settings.
       * @enum {string}
       */
      type: "text" | "toggle";
      /**
       * Value
       * @description The custom field value. If the custom field is required, it cannot be explicitly set to null.
       */
      value: string | null;
  }[] | null;
  /**
   * Description
   * @description The description for the case.
   */
  description?: string;
  /**
   * Owner
   * @description The application that owns the cases: Stack Management, Observability, or Elastic Security.
   * @enum {string}
   */
  owner?: "cases" | "observability" | "securitySolution";
  /**
   * Settings
   * @description An object that contains the case settings.
   */
  settings?: {
      /**
       * Sync Alerts
       * @description Turns alert syncing on or off.
       */
      syncAlerts: boolean;
  };
  /**
   * Severity
   * @description The severity of the case.
   * @default low
   * @enum {string|null}
   */
  severity: "critical" | "high" | "medium" | "low" | null;
  /**
   * Tags
   * @description Tags for the case
   */
  tags?: string[];
  /**
   * Title
   * @description A title for the case.
   */
  title?: string;
};

/**
 * Type of KIBANA's KIBANA_POST_CASES tool output.
 */
type KIBANA_POST_CASES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assignees
       * @description Users assigned to the case.
       * @default null
       */
      assignees: {
          /**
           * Uid
           * @description A unique identifier for the user profile. These identifiers can be found by using the suggest user profile API.
           */
          uid: string;
      }[] | null;
      /**
       * Category
       * @description The case category.
       * @default null
       */
      category: string | null;
      /**
       * Closed At
       * @description Timestamp when the case was closed.
       * @default null
       */
      closed_at: string | null;
      /**
       * CaseUser
       * @description User who closed the case.
       * @default null
       */
      closed_by: {
          /**
           * Email
           * @description User email.
           * @default null
           */
          email: string | null;
          /**
           * Full Name
           * @description User's full name.
           * @default null
           */
          full_name: string | null;
          /**
           * Profile Uid
           * @description User profile UID.
           * @default null
           */
          profile_uid: string | null;
          /**
           * Username
           * @description Username.
           * @default null
           */
          username: string | null;
      } | null;
      /**
       * Comments
       * @description Comments associated with the case.
       */
      comments?: {
          [key: string]: unknown;
      }[];
      /**
       * CaseConnectorNone
       * @description The connector associated with the case.
       */
      connector: {
          /**
           * Fields
           * @description Connector fields (must be null for none type).
           * @constant
           */
          fields?: null;
          /**
           * Id
           * @description The identifier for the connector.
           */
          id: string;
          /**
           * Name
           * @description The name of the connector.
           */
          name: string;
          /**
           * Type
           * @description No connector type.
           * @constant
           */
          type: ".none";
      } | null;
      /**
       * Created At
       * @description Timestamp when the case was created.
       */
      created_at: string;
      /**
       * Created By
       * @description User who created the case.
       */
      created_by: {
          /**
           * Email
           * @description User email.
           * @default null
           */
          email: string | null;
          /**
           * Full Name
           * @description User's full name.
           * @default null
           */
          full_name: string | null;
          /**
           * Profile Uid
           * @description User profile UID.
           * @default null
           */
          profile_uid: string | null;
          /**
           * Username
           * @description Username.
           * @default null
           */
          username: string | null;
      };
      /**
       * Custom Fields
       * @description Custom fields for the case.
       * @default null
       */
      customFields: {
          /**
           * Key
           * @description The unique identifier for the custom field. The key value must exist in the case configuration settings.
           */
          key: string;
          /**
           * Type
           * @description The custom field type. It must match the type specified in the case configuration settings.
           * @enum {string}
           */
          type: "text" | "toggle";
          /**
           * Value
           * @description The custom field value. If the custom field is required, it cannot be explicitly set to null.
           */
          value: string | null;
      }[] | null;
      /**
       * Description
       * @description The description of the case.
       */
      description: string;
      /**
       * Duration
       * @description The elapsed time from the creation of the case to its closure (in seconds).
       * @default null
       */
      duration: number | null;
      /**
       * External Service
       * @description External service integration details.
       * @default null
       */
      external_service: {
          [key: string]: unknown;
      } | null;
      /**
       * Id
       * @description The unique identifier for the case.
       */
      id: string;
      /**
       * Owner
       * @description The application that owns the case.
       */
      owner: string;
      /**
       * Settings
       * @description Case settings.
       */
      settings: {
          /**
           * Sync Alerts
           * @description Turns alert syncing on or off.
           */
          syncAlerts: boolean;
      };
      /**
       * Severity
       * @description The severity of the case.
       * @enum {string}
       */
      severity: "critical" | "high" | "medium" | "low";
      /**
       * Status
       * @description The status of the case.
       * @enum {string}
       */
      status: "open" | "in-progress" | "closed";
      /**
       * Tags
       * @description Tags associated with the case.
       */
      tags: string[];
      /**
       * Title
       * @description The title of the case.
       */
      title: string;
      /**
       * Total Alerts
       * @description Total number of alerts in the case.
       */
      totalAlerts: number;
      /**
       * Total Comment
       * @description Total number of comments in the case.
       */
      totalComment: number;
      /**
       * Updated At
       * @description Timestamp when the case was last updated.
       * @default null
       */
      updated_at: string | null;
      /**
       * CaseUser
       * @description User who last updated the case.
       * @default null
       */
      updated_by: {
          /**
           * Email
           * @description User email.
           * @default null
           */
          email: string | null;
          /**
           * Full Name
           * @description User's full name.
           * @default null
           */
          full_name: string | null;
          /**
           * Profile Uid
           * @description User profile UID.
           * @default null
           */
          profile_uid: string | null;
          /**
           * Username
           * @description Username.
           * @default null
           */
          username: string | null;
      } | null;
      /**
       * Version
       * @description The version of the case.
       */
      version: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KIBANA's KIBANA_POST_CONNECTORS tool input.
 */
type KIBANA_POST_CONNECTORS_INPUT = {
  /**
   * Config
   * @description The connector configuration details.
   * @default null
   */
  config: {
      [key: string]: unknown;
  } | null;
  /**
   * Connector Type Id
   * @description The type of connector.
   */
  connector_type_id?: string;
  /**
   * Id
   * @description An identifier for the connector.
   */
  id?: string;
  /**
   * Kbn Xsrf
   * @description A header to protect against CSRF attacks. Default is "true".
   * @default true
   */
  "kbn-xsrf": string;
  /**
   * Name
   * @description The display name for the connector.
   */
  name?: string;
  /**
   * Secrets
   * @description The connector secrets.
   * @default null
   */
  secrets: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of KIBANA's KIBANA_POST_CONNECTORS tool output.
 */
type KIBANA_POST_CONNECTORS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Config
       * @description The connector configuration details.
       * @default null
       */
      config: {
          [key: string]: unknown;
      } | null;
      /**
       * Connector Type Id
       * @description The connector type identifier.
       */
      connector_type_id: string;
      /**
       * Id
       * @description The identifier for the connector.
       */
      id: string;
      /**
       * Is Deprecated
       * @description Indicates whether the connector is deprecated.
       */
      is_deprecated: boolean;
      /**
       * Is Missing Secrets
       * @description Indicates whether the connector is missing secrets.
       * @default null
       */
      is_missing_secrets: boolean | null;
      /**
       * Is Preconfigured
       * @description Indicates whether the connector is preconfigured.
       */
      is_preconfigured: boolean;
      /**
       * Is System Action
       * @description Indicates whether the connector is used for system actions.
       * @default null
       */
      is_system_action: boolean | null;
      /**
       * Name
       * @description The name of the connector.
       */
      name: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KIBANA's KIBANA_POST_DASHBOARDS tool input.
 */
type KIBANA_POST_DASHBOARDS_INPUT = {
  /**
   * Attributes
   * @description Dashboard attributes
   */
  attributes?: {
      /**
       * ControlGroupInput
       * @description Control group configuration
       * @default null
       */
      controlGroupInput: {
          /**
           * Auto Apply Selections
           * @description Show apply selections button in controls
           * @default true
           */
          autoApplySelections: boolean | null;
          /**
           * Chaining System
           * @description The chaining strategy for multiple controls
           * @default HIERARCHICAL
           * @enum {string|null}
           */
          chainingSystem: "NONE" | "HIERARCHICAL" | null;
          /**
           * Controls
           * @description An array of control panels and their state
           */
          controls?: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Enhancements
           * @description Enhancements
           * @default null
           */
          enhancements: {
              [key: string]: unknown;
          } | null;
          /**
           * Ignore Parent Settings
           * @description Ignore parent settings configuration
           * @default null
           */
          ignoreParentSettings: {
              [key: string]: boolean;
          } | null;
          /**
           * Label Position
           * @description Position of the labels for controls
           * @default oneLine
           * @enum {string|null}
           */
          labelPosition: "oneLine" | "twoLine" | null;
      } | null;
      /**
       * Description
       * @description A short description
       * @default
       */
      description: string | null;
      /**
       * KibanaSavedObjectMeta
       * @description A container for various metadata
       * @default null
       */
      kibanaSavedObjectMeta: {
          /**
           * SearchSource
           * @description Search source configuration
           * @default null
           */
          searchSource: {
              /**
               * Filter
               * @description A filter for the search source
               * @default null
               */
              filter: {
                  /**
                   * FilterState
                   * @description Filter state
                   * @default null
                   */
                  $state: {
                      /**
                       * Store
                       * @description Denote whether a filter is specific to an application's context
                       * @enum {string}
                       */
                      store: "appState" | "globalState";
                  } | null;
                  /**
                   * Meta
                   * @description Filter metadata
                   */
                  meta: {
                      /**
                       * Alias
                       * @description Alias for the filter
                       * @default null
                       */
                      alias: string | null;
                      /**
                       * Controlled By
                       * @description Controlled by
                       * @default null
                       */
                      controlledBy: string | null;
                      /**
                       * Disabled
                       * @description Whether filter is disabled
                       * @default null
                       */
                      disabled: boolean | null;
                      /**
                       * Field
                       * @description Field name
                       * @default null
                       */
                      field: string | null;
                      /**
                       * Group
                       * @description Group name
                       * @default null
                       */
                      group: string | null;
                      /**
                       * Index
                       * @description Index name
                       * @default null
                       */
                      index: string | null;
                      /**
                       * Is Multi Index
                       * @description Is multi-index
                       * @default null
                       */
                      isMultiIndex: boolean | null;
                      /**
                       * Key
                       * @description Key
                       * @default null
                       */
                      key: string | null;
                      /**
                       * Negate
                       * @description Negate the filter
                       * @default null
                       */
                      negate: boolean | null;
                      /**
                       * Type
                       * @description Filter type
                       * @default null
                       */
                      type: string | null;
                      /**
                       * Value
                       * @description Filter value
                       * @default null
                       */
                      value: string | null;
                  };
                  /**
                   * Query
                   * @description Query
                   * @default null
                   */
                  query: {
                      [key: string]: unknown;
                  } | null;
              }[] | null;
              /**
               * Query
               * @description Query for the search source
               * @default null
               */
              query: {
                  /**
                   * Language
                   * @description The query language such as KQL or Lucene
                   */
                  language: string;
                  /**
                   * Query
                   * @description A text-based query such as KQL or Lucene query language
                   */
                  query: string | null;
              } | null;
              /**
               * Sort
               * @description Sort configuration
               * @default null
               */
              sort: {
                  [key: string]: unknown;
              }[] | null;
              /**
               * Type
               * @description Type
               * @default null
               */
              type: string | null;
          } | null;
      } | null;
      /**
       * Options
       * @description Dashboard options
       */
      options: {
          /**
           * Hide Panel Titles
           * @description Hide the panel titles in the dashboard
           * @default false
           */
          hidePanelTitles: boolean | null;
          /**
           * Sync Colors
           * @description Synchronize colors between related panels
           * @default true
           */
          syncColors: boolean | null;
          /**
           * Sync Cursor
           * @description Synchronize cursor position between related panels
           * @default true
           */
          syncCursor: boolean | null;
          /**
           * Sync Tooltips
           * @description Synchronize tooltips between related panels
           * @default true
           */
          syncTooltips: boolean | null;
          /**
           * Use Margins
           * @description Show margins between panels in the dashboard layout
           * @default true
           */
          useMargins: boolean | null;
      };
      /**
       * Panels
       * @description Dashboard panels configuration
       */
      panels?: {
          /**
           * Grid Data
           * @description Grid positioning data
           */
          gridData: {
              /**
               * H
               * @description The height of the panel in grid units
               * @default 15
               */
              h: number | null;
              /**
               * I
               * @description The unique identifier of the panel
               * @default null
               */
              i: string | null;
              /**
               * W
               * @description The width of the panel in grid units
               * @default 24
               */
              w: number | null;
              /**
               * X
               * @description The x coordinate of the panel in grid units
               */
              x: number;
              /**
               * Y
               * @description The y coordinate of the panel in grid units
               */
              y: number;
          };
          /**
           * Id
           * @description The saved object id for by reference panels
           * @default null
           */
          id: string | null;
          /**
           * Panel Config
           * @description Panel configuration
           */
          panelConfig: {
              /**
               * Description
               * @description The description of the panel
               * @default null
               */
              description: string | null;
              /**
               * Enhancements
               * @description Panel enhancements
               * @default null
               */
              enhancements: {
                  [key: string]: unknown;
              } | null;
              /**
               * Hide Panel Titles
               * @description Set to true to hide the panel title in its container
               * @default null
               */
              hidePanelTitles: boolean | null;
              /**
               * Saved Object Id
               * @description The unique id of the library item to construct the embeddable
               * @default null
               */
              savedObjectId: string | null;
              /**
               * Title
               * @description The title of the panel
               * @default null
               */
              title: string | null;
              /**
               * Version
               * @description The version of the embeddable in the panel
               * @default null
               */
              version: string | null;
          };
          /**
           * Panel Index
           * @description The unique ID of the panel
           * @default null
           */
          panelIndex: string | null;
          /**
           * Panel Ref Name
           * @description Panel reference name
           * @default null
           */
          panelRefName: string | null;
          /**
           * Title
           * @description The title of the panel
           * @default null
           */
          title: string | null;
          /**
           * Type
           * @description The embeddable type
           */
          type: string;
          /**
           * Version
           * @description Version (deprecated)
           * @default null
           */
          version: string | null;
      }[] | null;
      /**
       * RefreshInterval
       * @description Refresh interval settings
       * @default null
       */
      refreshInterval: {
          /**
           * Display
           * @description Human-readable refresh frequency (deprecated)
           * @default null
           */
          display: string | null;
          /**
           * Pause
           * @description Whether the refresh interval is paused
           */
          pause: boolean;
          /**
           * Section
           * @description Section (deprecated)
           * @default null
           */
          section: number | null;
          /**
           * Value
           * @description Refresh frequency in milliseconds
           */
          value: number;
      } | null;
      /**
       * Time From
       * @description An ISO string indicating when to restore time from
       * @default null
       */
      timeFrom: string | null;
      /**
       * Time Restore
       * @description Whether to restore time upon viewing this dashboard
       * @default false
       */
      timeRestore: boolean | null;
      /**
       * Time To
       * @description An ISO string indicating when to restore time to
       * @default null
       */
      timeTo: string | null;
      /**
       * Title
       * @description A human-readable title for the dashboard
       */
      title: string;
      /**
       * Version
       * @description Version (deprecated)
       * @default null
       */
      version: number | null;
  };
  /**
   * Dashboard Id
   * @description Optional dashboard ID. If not provided, one will be generated
   * @default null
   */
  dashboard_id: string | null;
  /**
   * References
   * @description References to other saved objects
   */
  references?: {
      /**
       * Id
       * @description ID of the referenced object
       */
      id: string;
      /**
       * Name
       * @description Name of the reference
       */
      name: string;
      /**
       * Type
       * @description Type of the referenced object
       */
      type: string;
  }[] | null;
  /**
   * Spaces
   * @description Spaces where the dashboard is available
   * @default null
   */
  spaces: string[] | null;
};

/**
 * Type of KIBANA's KIBANA_POST_DASHBOARDS tool output.
 */
type KIBANA_POST_DASHBOARDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Item
       * @description The created dashboard object
       */
      item: {
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
 * Type of KIBANA's KIBANA_POST_DATA_VIEWS tool input.
 */
type KIBANA_POST_DATA_VIEWS_INPUT = {
  /**
   * Data View
   * @description Data view specification
   */
  data_view?: {
      /**
       * Allow No Index
       * @description Allow no index
       * @default null
       */
      allowNoIndex: boolean | null;
      /**
       * Field Attrs
       * @description Field attributes
       * @default null
       */
      fieldAttrs: {
          [key: string]: {
              /**
               * Count
               * @description Field count
               * @default null
               */
              count: number | null;
              /**
               * Customdescription
               * @description Custom description for the field
               * @default null
               */
              customDescription: string | null;
              /**
               * Customlabel
               * @description Custom label for the field
               * @default null
               */
              customLabel: string | null;
              /**
               * @description Field format configuration
               * @default null
               */
              format: {
                  /**
                   * Id
                   * @description Field format ID
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Params
                   * @description Field format parameters
                   * @default null
                   */
                  params: {
                      [key: string]: unknown;
                  } | null;
              } | null;
          };
      } | null;
      /**
       * Field Formats
       * @description Field formats by field name
       * @default null
       */
      fieldFormats: {
          [key: string]: {
              /**
               * Id
               * @description Field format ID
               * @default null
               */
              id: string | null;
              /**
               * Params
               * @description Field format parameters
               * @default null
               */
              params: {
                  [key: string]: unknown;
              } | null;
          };
      } | null;
      /**
       * Fields
       * @description Field attributes by field name
       * @default null
       */
      fields: {
          [key: string]: {
              /**
               * Count
               * @description Field count
               * @default null
               */
              count: number | null;
              /**
               * Customdescription
               * @description Custom description for the field
               * @default null
               */
              customDescription: string | null;
              /**
               * Customlabel
               * @description Custom label for the field
               * @default null
               */
              customLabel: string | null;
              /**
               * @description Field format configuration
               * @default null
               */
              format: {
                  /**
                   * Id
                   * @description Field format ID
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Params
                   * @description Field format parameters
                   * @default null
                   */
                  params: {
                      [key: string]: unknown;
                  } | null;
              } | null;
          };
      } | null;
      /**
       * Id
       * @description Data view ID. If not provided, Kibana generates one
       * @default null
       */
      id: string | null;
      /**
       * Name
       * @description Name for the data view
       * @default null
       */
      name: string | null;
      /**
       * Namespaces
       * @description Namespaces
       * @default null
       */
      namespaces: string[] | null;
      /**
       * Runtime Field Map
       * @description Runtime field map
       * @default null
       */
      runtimeFieldMap: {
          [key: string]: {
              /**
               * RuntimeFieldSpec
               * @description Runtime field specification
               */
              runtimeField: {
                  /**
                   * Script
                   * @description Runtime field script
                   * @default null
                   */
                  script: {
                      [key: string]: unknown;
                  } | null;
                  /**
                   * Type
                   * @description Runtime field type
                   */
                  type: string;
              };
          };
      } | null;
      /**
       * Source Filters
       * @description Source filters
       * @default null
       */
      sourceFilters: {
          /**
           * Excludes
           * @description Fields to exclude
           * @default null
           */
          excludes: string[] | null;
          /**
           * Includes
           * @description Fields to include
           * @default null
           */
          includes: string[] | null;
      }[] | null;
      /**
       * Time Field Name
       * @description Time field name
       * @default null
       */
      timeFieldName: string | null;
      /**
       * Title
       * @description Title or index pattern for the data view
       */
      title: string;
      /**
       * Type
       * @description Data view type
       * @default null
       */
      type: string | null;
      /**
       * Type Meta
       * @description Type metadata
       * @default null
       */
      typeMeta: {
          [key: string]: unknown;
      } | null;
      /**
       * Version
       * @description Version
       * @default null
       */
      version: string | null;
  };
  /**
   * Override
   * @description Override an existing data view if it exists
   * @default false
   */
  override: boolean | null;
};

/**
 * Type of KIBANA's KIBANA_POST_DATA_VIEWS tool output.
 */
type KIBANA_POST_DATA_VIEWS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Data View
       * @description The created data view
       */
      data_view: {
          /**
           * Allow No Index
           * @description Allow no index
           * @default null
           */
          allowNoIndex: boolean | null;
          /**
           * Field Attrs
           * @description Field attributes
           * @default null
           */
          fieldAttrs: {
              [key: string]: {
                  /**
                   * Count
                   * @description Field count
                   * @default null
                   */
                  count: number | null;
                  /**
                   * Customdescription
                   * @description Custom description for the field
                   * @default null
                   */
                  customDescription: string | null;
                  /**
                   * Customlabel
                   * @description Custom label for the field
                   * @default null
                   */
                  customLabel: string | null;
                  /**
                   * @description Field format configuration
                   * @default null
                   */
                  format: {
                      /**
                       * Id
                       * @description Field format ID
                       * @default null
                       */
                      id: string | null;
                      /**
                       * Params
                       * @description Field format parameters
                       * @default null
                       */
                      params: {
                          [key: string]: unknown;
                      } | null;
                  } | null;
              };
          } | null;
          /**
           * Field Formats
           * @description Field formats
           * @default null
           */
          fieldFormats: {
              [key: string]: {
                  /**
                   * Id
                   * @description Field format ID
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Params
                   * @description Field format parameters
                   * @default null
                   */
                  params: {
                      [key: string]: unknown;
                  } | null;
              };
          } | null;
          /**
           * Fields
           * @description Fields
           * @default null
           */
          fields: {
              [key: string]: unknown;
          } | null;
          /**
           * Id
           * @description Data view ID
           */
          id: string;
          /**
           * Name
           * @description Name
           * @default null
           */
          name: string | null;
          /**
           * Namespaces
           * @description Namespaces
           * @default null
           */
          namespaces: string[] | null;
          /**
           * Runtime Field Map
           * @description Runtime field map
           * @default null
           */
          runtimeFieldMap: {
              [key: string]: {
                  /**
                   * RuntimeFieldSpec
                   * @description Runtime field specification
                   */
                  runtimeField: {
                      /**
                       * Script
                       * @description Runtime field script
                       * @default null
                       */
                      script: {
                          [key: string]: unknown;
                      } | null;
                      /**
                       * Type
                       * @description Runtime field type
                       */
                      type: string;
                  };
              };
          } | null;
          /**
           * Source Filters
           * @description Source filters
           * @default null
           */
          sourceFilters: {
              /**
               * Excludes
               * @description Fields to exclude
               * @default null
               */
              excludes: string[] | null;
              /**
               * Includes
               * @description Fields to include
               * @default null
               */
              includes: string[] | null;
          }[] | null;
          /**
           * Time Field Name
           * @description Time field name
           * @default null
           */
          timeFieldName: string | null;
          /**
           * Title
           * @description Title or index pattern
           */
          title: string;
          /**
           * Type
           * @description Data view type
           * @default null
           */
          type: string | null;
          /**
           * Type Meta
           * @description Type metadata
           * @default null
           */
          typeMeta: {
              [key: string]: unknown;
          } | null;
          /**
           * Version
           * @description Version
           * @default null
           */
          version: string | null;
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
 * Type of KIBANA's KIBANA_POST_SAVED_OBJECTS tool input.
 */
type KIBANA_POST_SAVED_OBJECTS_INPUT = {
  /**
   * Attributes
   * @description The attributes of the saved object. The content of this object varies depending on the `type`.
   */
  attributes?: {
      [key: string]: unknown;
  };
  /**
   * Object Id
   * @description The ID of the saved object. If an ID is not provided, a randomly generated ID is assigned.
   * @default null
   */
  object_id: string | null;
  /**
   * Object Type
   * @description The type of the saved object. For example, `dashboard`, `visualization`, `index-pattern`, etc.
   */
  object_type?: string;
  /**
   * Overwrite
   * @description When true, overwrites the document with the same ID. When false, if a document with the specified ID already exists, the request returns a 409 conflict.
   * @default false
   */
  overwrite: boolean | null;
  /**
   * References
   * @description Objects that this object references. Each reference object must contain `name`, `type`, and `id` fields.
   * @default null
   */
  references: {
      [key: string]: string;
  }[] | null;
  /**
   * Space Id
   * @description The ID of the space to create or update the object in. If not specified, the default space is used.
   * @default default
   */
  space_id: string | null;
};

/**
 * Type of KIBANA's KIBANA_POST_SAVED_OBJECTS tool output.
 */
type KIBANA_POST_SAVED_OBJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attributes
       * @description The attributes of the saved object.
       */
      attributes: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description The ID of the created or updated saved object.
       */
      id: string;
      /**
       * Migration Version
       * @description The migration version of the object.
       * @default null
       */
      migrationVersion: {
          [key: string]: string;
      } | null;
      /**
       * References
       * @description Objects that this object references.
       * @default null
       */
      references: {
          [key: string]: string;
      }[] | null;
      /**
       * Type
       * @description The type of the saved object.
       */
      type: string;
      /**
       * Updated At
       * @description The timestamp of when the object was last updated.
       * @default null
       */
      updated_at: string | null;
      /**
       * Version
       * @description The version of the object.
       * @default null
       */
      version: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "KIBANA".
 */
export type KIBANA_TOOL_INPUTS = {
  DELETE_ACTION: KIBANA_DELETE_ACTION_INPUT
  DELETE_ALERTING_RULES: KIBANA_DELETE_ALERTING_RULES_INPUT
  DELETE_CONNECTORS: KIBANA_DELETE_CONNECTORS_INPUT
  DELETE_FLEET_OUTPUT: KIBANA_DELETE_FLEET_OUTPUT_INPUT
  DELETE_FLEET_PROXY: KIBANA_DELETE_FLEET_PROXY_INPUT
  DELETE_LIST: KIBANA_DELETE_LIST_INPUT
  DELETE_OSQUERY_SAVED_QUERIES: KIBANA_DELETE_OSQUERY_SAVED_QUERIES_INPUT
  DELETE_SAVED_OBJECTS: KIBANA_DELETE_SAVED_OBJECTS_INPUT
  FIND_ALERTS: KIBANA_FIND_ALERTS_INPUT
  GET_ACTION_TYPES: KIBANA_GET_ACTION_TYPES_INPUT
  GET_ALERTING_RULES: KIBANA_GET_ALERTING_RULES_INPUT
  GET_ALERT_TYPES: KIBANA_GET_ALERT_TYPES_INPUT
  GET_CASES: KIBANA_GET_CASES_INPUT
  GET_CONNECTORS: KIBANA_GET_CONNECTORS_INPUT
  GET_DATA_VIEWS: KIBANA_GET_DATA_VIEWS_INPUT
  GET_DETECTION_ENGINE_RULES_FIND: KIBANA_GET_DETECTION_ENGINE_RULES_FIND_INPUT
  GET_ENDPOINT_LIST_ITEMS: KIBANA_GET_ENDPOINT_LIST_ITEMS_INPUT
  GET_ENTITY_STORE_ENGINES: KIBANA_GET_ENTITY_STORE_ENGINES_INPUT
  GET_ENTITY_STORE_ENTITIES_LIST: KIBANA_GET_ENTITY_STORE_ENTITIES_LIST_INPUT
  GET_ENTITY_STORE_STATUS: KIBANA_GET_ENTITY_STORE_STATUS_INPUT
  GET_FLEET_AGENTS_AVAILABLE_VERSIONS: KIBANA_GET_FLEET_AGENTS_AVAILABLE_VERSIONS_INPUT
  GET_FLEET_AGENTS_SETUP_STATUS: KIBANA_GET_FLEET_AGENTS_SETUP_STATUS_INPUT
  GET_FLEET_AGENT_POLICIES: KIBANA_GET_FLEET_AGENT_POLICIES_INPUT
  GET_FLEET_CHECK_PERMISSIONS: KIBANA_GET_FLEET_CHECK_PERMISSIONS_INPUT
  GET_FLEET_DATA_STREAMS: KIBANA_GET_FLEET_DATA_STREAMS_INPUT
  GET_FLEET_ENROLLMENT_API_KEY: KIBANA_GET_FLEET_ENROLLMENT_API_KEY_INPUT
  GET_FLEET_ENROLLMENT_API_KEYS: KIBANA_GET_FLEET_ENROLLMENT_API_KEYS_INPUT
  GET_FLEET_EPM_CATEGORIES: KIBANA_GET_FLEET_EPM_CATEGORIES_INPUT
  GET_FLEET_EPM_DATA_STREAMS: KIBANA_GET_FLEET_EPM_DATA_STREAMS_INPUT
  GET_FLEET_EPM_PACKAGES: KIBANA_GET_FLEET_EPM_PACKAGES_INPUT
  GET_FLEET_EPM_PACKAGES_INSTALLED: KIBANA_GET_FLEET_EPM_PACKAGES_INSTALLED_INPUT
  GET_FLEET_EPM_PACKAGES_LIMITED: KIBANA_GET_FLEET_EPM_PACKAGES_LIMITED_INPUT
  GET_FLEET_EPM_PACKAGE_DETAILS: KIBANA_GET_FLEET_EPM_PACKAGE_DETAILS_INPUT
  GET_FLEET_EPM_PACKAGE_FILE: KIBANA_GET_FLEET_EPM_PACKAGE_FILE_INPUT
  GET_FLEET_EPM_PACKAGE_STATS: KIBANA_GET_FLEET_EPM_PACKAGE_STATS_INPUT
  GET_FLEET_PACKAGE_POLICIES: KIBANA_GET_FLEET_PACKAGE_POLICIES_INPUT
  GET_FLEET_SERVER_HOST: KIBANA_GET_FLEET_SERVER_HOST_INPUT
  GET_FLEET_SERVER_HOSTS: KIBANA_GET_FLEET_SERVER_HOSTS_INPUT
  GET_INDEX_MANAGEMENT_INDICES: KIBANA_GET_INDEX_MANAGEMENT_INDICES_INPUT
  GET_METRICS: KIBANA_GET_METRICS_INPUT
  GET_REPORTING_JOBS: KIBANA_GET_REPORTING_JOBS_INPUT
  GET_SAVED_OBJECTS: KIBANA_GET_SAVED_OBJECTS_INPUT
  GET_STATUS: KIBANA_GET_STATUS_INPUT
  POST_ALERTING_RULES: KIBANA_POST_ALERTING_RULES_INPUT
  POST_CASES: KIBANA_POST_CASES_INPUT
  POST_CONNECTORS: KIBANA_POST_CONNECTORS_INPUT
  POST_DASHBOARDS: KIBANA_POST_DASHBOARDS_INPUT
  POST_DATA_VIEWS: KIBANA_POST_DATA_VIEWS_INPUT
  POST_SAVED_OBJECTS: KIBANA_POST_SAVED_OBJECTS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "KIBANA".
 */
export type KIBANA_TOOL_OUTPUTS = {
  DELETE_ACTION: KIBANA_DELETE_ACTION_OUTPUT
  DELETE_ALERTING_RULES: KIBANA_DELETE_ALERTING_RULES_OUTPUT
  DELETE_CONNECTORS: KIBANA_DELETE_CONNECTORS_OUTPUT
  DELETE_FLEET_OUTPUT: KIBANA_DELETE_FLEET_OUTPUT_OUTPUT
  DELETE_FLEET_PROXY: KIBANA_DELETE_FLEET_PROXY_OUTPUT
  DELETE_LIST: KIBANA_DELETE_LIST_OUTPUT
  DELETE_OSQUERY_SAVED_QUERIES: KIBANA_DELETE_OSQUERY_SAVED_QUERIES_OUTPUT
  DELETE_SAVED_OBJECTS: KIBANA_DELETE_SAVED_OBJECTS_OUTPUT
  FIND_ALERTS: KIBANA_FIND_ALERTS_OUTPUT
  GET_ACTION_TYPES: KIBANA_GET_ACTION_TYPES_OUTPUT
  GET_ALERTING_RULES: KIBANA_GET_ALERTING_RULES_OUTPUT
  GET_ALERT_TYPES: KIBANA_GET_ALERT_TYPES_OUTPUT
  GET_CASES: KIBANA_GET_CASES_OUTPUT
  GET_CONNECTORS: KIBANA_GET_CONNECTORS_OUTPUT
  GET_DATA_VIEWS: KIBANA_GET_DATA_VIEWS_OUTPUT
  GET_DETECTION_ENGINE_RULES_FIND: KIBANA_GET_DETECTION_ENGINE_RULES_FIND_OUTPUT
  GET_ENDPOINT_LIST_ITEMS: KIBANA_GET_ENDPOINT_LIST_ITEMS_OUTPUT
  GET_ENTITY_STORE_ENGINES: KIBANA_GET_ENTITY_STORE_ENGINES_OUTPUT
  GET_ENTITY_STORE_ENTITIES_LIST: KIBANA_GET_ENTITY_STORE_ENTITIES_LIST_OUTPUT
  GET_ENTITY_STORE_STATUS: KIBANA_GET_ENTITY_STORE_STATUS_OUTPUT
  GET_FLEET_AGENTS_AVAILABLE_VERSIONS: KIBANA_GET_FLEET_AGENTS_AVAILABLE_VERSIONS_OUTPUT
  GET_FLEET_AGENTS_SETUP_STATUS: KIBANA_GET_FLEET_AGENTS_SETUP_STATUS_OUTPUT
  GET_FLEET_AGENT_POLICIES: KIBANA_GET_FLEET_AGENT_POLICIES_OUTPUT
  GET_FLEET_CHECK_PERMISSIONS: KIBANA_GET_FLEET_CHECK_PERMISSIONS_OUTPUT
  GET_FLEET_DATA_STREAMS: KIBANA_GET_FLEET_DATA_STREAMS_OUTPUT
  GET_FLEET_ENROLLMENT_API_KEY: KIBANA_GET_FLEET_ENROLLMENT_API_KEY_OUTPUT
  GET_FLEET_ENROLLMENT_API_KEYS: KIBANA_GET_FLEET_ENROLLMENT_API_KEYS_OUTPUT
  GET_FLEET_EPM_CATEGORIES: KIBANA_GET_FLEET_EPM_CATEGORIES_OUTPUT
  GET_FLEET_EPM_DATA_STREAMS: KIBANA_GET_FLEET_EPM_DATA_STREAMS_OUTPUT
  GET_FLEET_EPM_PACKAGES: KIBANA_GET_FLEET_EPM_PACKAGES_OUTPUT
  GET_FLEET_EPM_PACKAGES_INSTALLED: KIBANA_GET_FLEET_EPM_PACKAGES_INSTALLED_OUTPUT
  GET_FLEET_EPM_PACKAGES_LIMITED: KIBANA_GET_FLEET_EPM_PACKAGES_LIMITED_OUTPUT
  GET_FLEET_EPM_PACKAGE_DETAILS: KIBANA_GET_FLEET_EPM_PACKAGE_DETAILS_OUTPUT
  GET_FLEET_EPM_PACKAGE_FILE: KIBANA_GET_FLEET_EPM_PACKAGE_FILE_OUTPUT
  GET_FLEET_EPM_PACKAGE_STATS: KIBANA_GET_FLEET_EPM_PACKAGE_STATS_OUTPUT
  GET_FLEET_PACKAGE_POLICIES: KIBANA_GET_FLEET_PACKAGE_POLICIES_OUTPUT
  GET_FLEET_SERVER_HOST: KIBANA_GET_FLEET_SERVER_HOST_OUTPUT
  GET_FLEET_SERVER_HOSTS: KIBANA_GET_FLEET_SERVER_HOSTS_OUTPUT
  GET_INDEX_MANAGEMENT_INDICES: KIBANA_GET_INDEX_MANAGEMENT_INDICES_OUTPUT
  GET_METRICS: KIBANA_GET_METRICS_OUTPUT
  GET_REPORTING_JOBS: KIBANA_GET_REPORTING_JOBS_OUTPUT
  GET_SAVED_OBJECTS: KIBANA_GET_SAVED_OBJECTS_OUTPUT
  GET_STATUS: KIBANA_GET_STATUS_OUTPUT
  POST_ALERTING_RULES: KIBANA_POST_ALERTING_RULES_OUTPUT
  POST_CASES: KIBANA_POST_CASES_OUTPUT
  POST_CONNECTORS: KIBANA_POST_CONNECTORS_OUTPUT
  POST_DASHBOARDS: KIBANA_POST_DASHBOARDS_OUTPUT
  POST_DATA_VIEWS: KIBANA_POST_DATA_VIEWS_OUTPUT
  POST_SAVED_OBJECTS: KIBANA_POST_SAVED_OBJECTS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's KIBANA toolkit.
 */
export const KIBANA = {
  slug: "kibana",
  tools: {
    /**
     * Tool to delete an action in kibana. use when you need to remove a specific action by its id, optionally within a specific space.
     */
    DELETE_ACTION: "KIBANA_DELETE_ACTION",
    /**
     * Tool to delete an alerting rule in kibana. use when you need to remove a specific alerting rule by its id.
     */
    DELETE_ALERTING_RULES: "KIBANA_DELETE_ALERTING_RULES",
    /**
     * Tool to delete a connector in kibana. use when you need to remove an existing connector.
     */
    DELETE_CONNECTORS: "KIBANA_DELETE_CONNECTORS",
    /**
     * Tool to delete a specific output configuration in kibana fleet. use when you need to remove an existing output by its id.
     */
    DELETE_FLEET_OUTPUT: "KIBANA_DELETE_FLEET_OUTPUT",
    /**
     * Tool to delete a specific fleet proxy configuration by its id. use when you need to remove an existing proxy setup.
     */
    DELETE_FLEET_PROXY: "KIBANA_DELETE_FLEET_PROXY",
    /**
     * Deletes a list. use when you want to delete a list by its id.
     */
    DELETE_LIST: "KIBANA_DELETE_LIST",
    /**
     * Tool to delete a saved osquery query by its id. use when you need to remove a specific osquery saved query.
     */
    DELETE_OSQUERY_SAVED_QUERIES: "KIBANA_DELETE_OSQUERY_SAVED_QUERIES",
    /**
     * Tool to delete a saved object in kibana. use when you need to remove a specific saved object like a visualization or dashboard.
     */
    DELETE_SAVED_OBJECTS: "KIBANA_DELETE_SAVED_OBJECTS",
    /**
     * Tool to find and/or aggregate detection alerts in kibana. use this to retrieve a list of alerts, optionally filtering them with a query and performing aggregations.
     */
    FIND_ALERTS: "KIBANA_FIND_ALERTS",
    /**
     * Tool to fetch the list of available action types (e.g., '.slack', '.email', '.webhook') in kibana. use this to discover the 'actiontypeid' needed when creating a new action.
     */
    GET_ACTION_TYPES: "KIBANA_GET_ACTION_TYPES",
    /**
     * Tool to retrieve a list of alerting rules in kibana. use when you need to get a paginated set of rules based on specified conditions.
     */
    GET_ALERTING_RULES: "KIBANA_GET_ALERTING_RULES",
    /**
     * Tool to retrieve available alert types in kibana. use when you need to get a list of all possible alert types and their metadata.
     */
    GET_ALERT_TYPES: "KIBANA_GET_ALERT_TYPES",
    /**
     * Tool to retrieve a list of cases in kibana. use when you need to find or list existing security or operational cases, potentially filtering by various attributes like status, assignee, or severity.
     */
    GET_CASES: "KIBANA_GET_CASES",
    /**
     * Tool to retrieve a list of all connectors in kibana. use this tool when you need to get information about available connectors.
     */
    GET_CONNECTORS: "KIBANA_GET_CONNECTORS",
    /**
     * Tool to retrieve a list of data views available in kibana. use when you need to get a list of available data views, optionally filtering by a name pattern.
     */
    GET_DATA_VIEWS: "KIBANA_GET_DATA_VIEWS",
    /**
     * Retrieves a list of detection engine rules based on specified criteria. use this tool to find detection rules.
     */
    GET_DETECTION_ENGINE_RULES_FIND: "KIBANA_GET_DETECTION_ENGINE_RULES_FIND",
    /**
     * Tool to retrieve all items from an endpoint exception list. use when you need to get a list of endpoint exceptions, for example, to check existing exceptions before adding a new one.
     */
    GET_ENDPOINT_LIST_ITEMS: "KIBANA_GET_ENDPOINT_LIST_ITEMS",
    /**
     * Retrieves the list of engines from the entity store.
     */
    GET_ENTITY_STORE_ENGINES: "KIBANA_GET_ENTITY_STORE_ENGINES",
    /**
     * Tool to list entity records in the entity store with support for paging, sorting, and filtering. use when you need to retrieve a list of entities such as users, hosts, or services.
     */
    GET_ENTITY_STORE_ENTITIES_LIST: "KIBANA_GET_ENTITY_STORE_ENTITIES_LIST",
    /**
     * Tool to retrieve the status of the entity store in kibana. use this to check if the entity store is operational.
     */
    GET_ENTITY_STORE_STATUS: "KIBANA_GET_ENTITY_STORE_STATUS",
    /**
     * Tool to retrieve the available versions for fleet agents. use when you need to get a list of all available elastic agent versions.
     */
    GET_FLEET_AGENTS_AVAILABLE_VERSIONS: "KIBANA_GET_FLEET_AGENTS_AVAILABLE_VERSIONS",
    /**
     * Tool to check if the fleet agents are set up. use when you need to verify the fleet agent setup status.
     */
    GET_FLEET_AGENTS_SETUP_STATUS: "KIBANA_GET_FLEET_AGENTS_SETUP_STATUS",
    /**
     * Fetches a list of agent policies in fleet. use when you need to retrieve agent policy configurations.
     */
    GET_FLEET_AGENT_POLICIES: "KIBANA_GET_FLEET_AGENT_POLICIES",
    /**
     * Tool to check the permissions for the fleet api. use when you need to verify if the current user has the necessary privileges for fleet operations.
     */
    GET_FLEET_CHECK_PERMISSIONS: "KIBANA_GET_FLEET_CHECK_PERMISSIONS",
    /**
     * Retrieves the list of data streams in fleet.
     */
    GET_FLEET_DATA_STREAMS: "KIBANA_GET_FLEET_DATA_STREAMS",
    /**
     * Tool to retrieve details of a specific enrollment api key by its id. use when you have the id of an enrollment api key and need its details.
     */
    GET_FLEET_ENROLLMENT_API_KEY: "KIBANA_GET_FLEET_ENROLLMENT_API_KEY",
    /**
     * Tool to fetch a list of enrollment api keys. use when you need to retrieve existing enrollment tokens for kibana fleet.
     */
    GET_FLEET_ENROLLMENT_API_KEYS: "KIBANA_GET_FLEET_ENROLLMENT_API_KEYS",
    /**
     * Tool to fetch the list of categories in the elastic package manager. use when you need to retrieve available package categories.
     */
    GET_FLEET_EPM_CATEGORIES: "KIBANA_GET_FLEET_EPM_CATEGORIES",
    /**
     * Tool to retrieve the list of data streams in the elastic package manager. use when you need to get a list of available data streams, optionally filtering by type, dataset, or categorization.
     */
    GET_FLEET_EPM_DATA_STREAMS: "KIBANA_GET_FLEET_EPM_DATA_STREAMS",
    /**
     * Tool to fetch the list of available packages in the elastic package manager. use when you need to find available integrations or their details.
     */
    GET_FLEET_EPM_PACKAGES: "KIBANA_GET_FLEET_EPM_PACKAGES",
    /**
     * Tool to retrieve the list of installed packages in the elastic package manager. use this when you need to check which packages are currently installed in fleet.
     */
    GET_FLEET_EPM_PACKAGES_INSTALLED: "KIBANA_GET_FLEET_EPM_PACKAGES_INSTALLED",
    /**
     * Tool to fetch a limited list of packages from the elastic package manager. use when you need to retrieve a list of available epm packages with minimal details.
     */
    GET_FLEET_EPM_PACKAGES_LIMITED: "KIBANA_GET_FLEET_EPM_PACKAGES_LIMITED",
    /**
     * Tool to fetch details of a specific package and version in the elastic package manager (epm). use when you need to get information about a particular epm package, such as its title, description, or type.
     */
    GET_FLEET_EPM_PACKAGE_DETAILS: "KIBANA_GET_FLEET_EPM_PACKAGE_DETAILS",
    /**
     * Tool to retrieve a specific file from a package in the elastic package manager. use when you need to inspect the contents of a package file.
     */
    GET_FLEET_EPM_PACKAGE_FILE: "KIBANA_GET_FLEET_EPM_PACKAGE_FILE",
    /**
     * Tool to retrieve statistics for a specific package in the elastic package manager. use when you need to get epm package statistics.
     */
    GET_FLEET_EPM_PACKAGE_STATS: "KIBANA_GET_FLEET_EPM_PACKAGE_STATS",
    /**
     * Tool to retrieve a list of all package policies (agent & epm), providing their ids and associated details. use when you need to get an overview of existing package policies.
     */
    GET_FLEET_PACKAGE_POLICIES: "KIBANA_GET_FLEET_PACKAGE_POLICIES",
    /**
     * Tool to fetch details of a specific fleet server host by its item id. use when you need to get information about a particular fleet server host.
     */
    GET_FLEET_SERVER_HOST: "KIBANA_GET_FLEET_SERVER_HOST",
    /**
     * Tool to retrieve the list of fleet server hosts. use when you need to get information about the available fleet server hosts.
     */
    GET_FLEET_SERVER_HOSTS: "KIBANA_GET_FLEET_SERVER_HOSTS",
    /**
     * Tool to fetch information about indices managed by kibana's index management feature. it queries the underlying elasticsearch / cat/indices api to retrieve index details. use when you need to list or get details about one or more indices in the cluster.
     */
    GET_INDEX_MANAGEMENT_INDICES: "KIBANA_GET_INDEX_MANAGEMENT_INDICES",
    /**
     * Tool to retrieve statistics for nodes in an elasticsearch cluster, often visualized in kibana. use when you need to monitor node health, performance, or resource usage. this action calls the elasticsearch nodes stats api.
     */
    GET_METRICS: "KIBANA_GET_METRICS",
    /**
     * Tool to retrieve a list of reporting jobs in kibana. use when you need to see pending or completed reports. this uses an internal api endpoint, which might be subject to change without notice.
     */
    GET_REPORTING_JOBS: "KIBANA_GET_REPORTING_JOBS",
    /**
     * Tool to retrieve a list of saved objects in kibana based on specified criteria. use when you need to find dashboards, visualizations, index patterns, or other saved entities.
     */
    GET_SAVED_OBJECTS: "KIBANA_GET_SAVED_OBJECTS",
    /**
     * Tool to get the current status of kibana. use when you need to check if kibana is healthy, monitor its state, or get information about the kibana instance including version, uuid, and metrics.
     */
    GET_STATUS: "KIBANA_GET_STATUS",
    /**
     * Tool to create a new alerting rule in kibana. use when you need to define a new condition that, when met, triggers an alert and potentially executes predefined actions.
     */
    POST_ALERTING_RULES: "KIBANA_POST_ALERTING_RULES",
    /**
     * Tool to create a new case in kibana. use when you need to open and track issues, incidents, or investigations. you can assign users, set severity levels, add tags, and configure external connectors for integration with itsm systems.
     */
    POST_CASES: "KIBANA_POST_CASES",
    /**
     * Tool to create a new connector in kibana. use when you need to integrate kibana with an external service.
     */
    POST_CONNECTORS: "KIBANA_POST_CONNECTORS",
    /**
     * Tool to create a new dashboard in kibana. use when you need to create a dashboard to visualize data. dashboards can contain visualizations, saved searches, and other embeddable objects.
     */
    POST_DASHBOARDS: "KIBANA_POST_DASHBOARDS",
    /**
     * Tool to create a new data view (index pattern) in kibana. use when you need to define which elasticsearch indices to query and analyze in kibana. data views determine which fields are available in discover, visualize, and other kibana apps.
     */
    POST_DATA_VIEWS: "KIBANA_POST_DATA_VIEWS",
    /**
     * Tool to create or update a saved object in kibana. use when you need to programmatically manage kibana dashboards, visualizations, index patterns, etc.
     */
    POST_SAVED_OBJECTS: "KIBANA_POST_SAVED_OBJECTS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "KIBANA".
 */
export type KIBANA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "KIBANA".
 */
export type KIBANA_TRIGGER_EVENTS = {}
